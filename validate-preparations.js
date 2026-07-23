const fs = require("fs");

const source = fs.readFileSync("app.js", "utf8");

function extractArray(startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start);
  if (start < 0 || end < 0) throw new Error(`Datenblock nicht gefunden: ${startMarker}`);
  const literal = source.slice(start + startMarker.length, end + 2);
  return Function(`return ${literal}`)();
}

const medications = extractArray("const reviewedDrafts = ", "\n];\n\n// Priorisierte");
const rawPreparations = extractArray("const verifiedPreparationsRaw = ", "\n];\n\nconst medicationNameById");
const knownMedicationIds = new Set(medications.map((medication) => medication.id));
const normalizeForSearch = (value) => String(value)
  .toLocaleLowerCase("de-DE")
  .replace(/[^\p{L}\p{N}]+/gu, " ")
  .trim();
const requiredFields = ["tradeName", "strength", "dosageForm", "checkedOn", "sourceLabel", "sourceUrl"];
const errors = [];
const warnings = [];
const medicationRequiredFields = ["id", "name", "purpose", "does", "doesNot", "daily", "sideEffects", "urgent", "source", "sourceUrl", "reviewStatus"];

for (const medication of medications) {
  const missing = medicationRequiredFields.filter((field) => !medication[field]);
  if (missing.length) errors.push(`${medication.name || medication.id}: Wirkstoffkarte unvollständig: ${missing.join(", ")}`);
  if (!/(abgerufen am|stand |veröffentlicht|aktualisiert|\d{4})/i.test(medication.source ?? "")) {
    warnings.push(`${medication.name}: Abruf- oder Standdatum in der Quellenangabe ergänzen`);
  }
}

for (const preparation of rawPreparations.filter((item) => item.status === "Produktinformation abgeglichen")) {
  const medicationIds = preparation.medicationIds ?? [preparation.medicationId];
  const missing = requiredFields.filter((field) => !preparation[field]);
  const unknownMedicationIds = medicationIds.filter((id) => !knownMedicationIds.has(id));
  if (missing.length) errors.push(`${preparation.tradeName}: fehlend: ${missing.join(", ")}`);
  if (unknownMedicationIds.length) errors.push(`${preparation.tradeName}: unbekannte Wirkstoffkarte: ${unknownMedicationIds.join(", ")}`);
  if (/auf der packung prüfen/i.test(preparation.strength) || /auf der packung prüfen/i.test(preparation.dosageForm)) {
    errors.push(`${preparation.tradeName}: bestätigtes Präparat braucht konkrete Stärke und Darreichungsform`);
  }
}

const sourceBackedReferences = medications
  .filter((medication) => medication.examples && medication.source && medication.sourceUrl)
  .map((medication) => ({
    tradeName: medication.examples.replace(/^Referenzpräparat:\s*/i, "").replace(/^z\.\s*B\.\s*/i, "").trim(),
    medicationIds: [medication.id],
    sourceLabel: medication.source,
    sourceUrl: medication.sourceUrl
  }));
const standaloneSourceBackedReferences = sourceBackedReferences.filter((reference) => !rawPreparations.some((preparation) =>
  normalizeForSearch(preparation.tradeName) === normalizeForSearch(reference.tradeName)
));

for (const reference of sourceBackedReferences) {
  if (!reference.tradeName || !reference.sourceLabel || !reference.sourceUrl) {
    errors.push(`Referenzpräparat unvollständig: ${reference.tradeName || "ohne Namen"}`);
  }
  if (reference.medicationIds.some((id) => !knownMedicationIds.has(id))) {
    errors.push(`Referenzpräparat ${reference.tradeName}: unbekannte Wirkstoffkarte`);
  }
}

if (errors.length) {
  console.error("Präparate-Validierung fehlgeschlagen:\n- " + errors.join("\n- "));
  process.exit(1);
}

console.log(`${rawPreparations.filter((item) => item.status === "Produktinformation abgeglichen").length} konkrete Präparate geprüft; ${sourceBackedReferences.length} Referenzquellen dokumentiert, davon ${standaloneSourceBackedReferences.length} zusätzliche durchsuchbare Referenzpräparate.`);
if (warnings.length) console.warn("Qualitätshinweise:\n- " + warnings.join("\n- "));
