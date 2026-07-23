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
const requiredFields = ["tradeName", "strength", "dosageForm", "checkedOn", "sourceLabel", "sourceUrl"];
const errors = [];

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

if (errors.length) {
  console.error("Präparate-Validierung fehlgeschlagen:\n- " + errors.join("\n- "));
  process.exit(1);
}

console.log(`${rawPreparations.filter((item) => item.status === "Produktinformation abgeglichen").length} konkrete Präparate geprüft; alle Datenverknüpfungen sind vollständig.`);
