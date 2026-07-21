# Plan: Arzneimittel einfach erklärt

## Ziel

Eine private, deutschsprachige Web-App hilft älteren Menschen dabei, ein in Deutschland zugelassenes Medikament besser einzuordnen. Sie übersetzt **nicht** die gesamte Packungsbeilage, sondern beantwortet in einfacher, großer und gut lesbarer Sprache vier zentrale Fragen:

1. **Wofür ist dieses Medikament da?**
2. **Was macht es – und was macht es ausdrücklich nicht?**
3. **Welche häufigen, im Alltag spürbaren Nebenwirkungen sind wichtig?**
4. **Wann sollte ich ärztliche oder apothekerliche Hilfe holen?**

Beispiel: Bei Novalgin (Metamizol) soll die Karte deutlich unterscheiden: „Es lindert Schmerzen und senkt Fieber“ von „Es behandelt nicht die Ursache der Schmerzen und beschleunigt nicht die Heilung nach einer Bestrahlung.“ Warnhinweise und die genaue Packungsbeilage bleiben jederzeit erreichbar.

Die App ist eine verständliche **Orientierungshilfe**, kein Diagnosesystem, kein Therapieplan und kein Ersatz für Arzt, Apotheke oder Notruf.

## Zielgruppe und Leitprinzipien

- Menschen im höheren Alter, Angehörige und Pflegepersonen in Deutschland.
- Ein Gedanke pro Abschnitt, kurze Sätze, Alltagssprache und keine unnötigen Fachbegriffe.
- Große Schrift, hohe Kontraste, großzügige Abstände und gut erkennbare Schaltflächen.
- Ruhiges, minimalistisches Interface nach Apple-/Google-Prinzipien: viel Weißraum, wenige Entscheidungen je Ansicht, keine Werbung und keine Ablenkungen.
- Sensible Sprache: keine Verharmlosung, keine Angstkommunikation und keine Heilversprechen.
- Jede Zusammenfassung weist Herkunft, Prüfdaten und einen Link zur Originalquelle aus.

## Funktionsumfang der ersten lokalen Version (MVP)

### Kernablauf

1. Nutzerin oder Nutzer sucht nach Handelsname oder Wirkstoff, z. B. „Novalgin“ oder „Metamizol“.
2. Die App zeigt passende Präparate und die konkrete Stärke/Darreichungsform.
3. Eine Medikamentenseite zeigt eine einfache Übersicht.
4. Bei Unklarheit führt ein klarer Hinweis zu Apotheke/Arzt; bei ernsthaften Warnzeichen zum Notfallhinweis.

### Medikamentenseite

Jede Seite besteht aus festen, wiedererkennbaren Karten:

| Bereich | Verständliche Frage | Inhalt |
| --- | --- | --- |
| Kurz gesagt | „Was ist das?“ | Medikamentenart, Wirkstoff, Stärke und Darreichungsform |
| Wofür? | „Wobei hilft es?“ | zugelassene Einsatzgebiete in einfacher Sprache |
| Was tut es? | „Welche Wirkung kann ich erwarten?“ | Wirkung und realistischer zeitlicher Rahmen, wenn verlässlich belegbar |
| Was tut es nicht? | „Was kann es nicht heilen?“ | klare Abgrenzung von Symptombehandlung und Ursachenbehandlung |
| Im Alltag wichtig | „Worauf kann ich mich einstellen?“ | z. B. Müdigkeit, Schwindel, verlangsamte Reaktion, Verstopfung |
| Häufige Nebenwirkungen | „Was kann vorkommen?“ | priorisierte, verständliche Nebenwirkungen mit Häufigkeit, falls verfügbar |
| Sofort Hilfe holen | „Wann ist es dringend?“ | medizinisch geprüfte Red-Flag-Symptome, niemals als vollständige Liste ausgegeben |
| Originalinformationen | „Wo kann ich nachlesen?“ | Link zur Gebrauchsinformation/Fachinformation und Quellenstand |

Zusätzlich: Vorlesefunktion des Browsers (kein eigenes KI-Audio im MVP), Druckansicht und eine einfache Schriftgrößen-Steuerung.

### Bewusst nicht im MVP

- Keine individuelle Dosierungsberatung oder Änderungsempfehlungen.
- Keine automatisierte Wechselwirkungsprüfung zwischen mehreren Medikamenten.
- Keine Diagnose, Triage oder Aussage, ob ein Symptom „sicher“ von einem Medikament kommt.
- Keine Gesundheitsakte, Fotos von Rezepten oder personenbezogene Krankheitsdaten.
- Kein freier KI-Chat zu medizinischen Fragen.

## Medizinische Inhalte und Qualitätssicherung

### Verlässliche Ausgangsdaten

Primärquelle sind die öffentlich verfügbaren Zulassungs- und Gebrauchsinformationen von **PharmNet.Bund / AMIce**. Das BfArM beschreibt diese als Datenbestand der deutschen Zulassungsbehörden (BfArM, PEI und BVL); für viele Arzneimittel sind dort auch Gebrauchs- und Fachinformationen verfügbar. [BfArM: Arzneimittelinformationen](https://www.bfarm.de/DE/Arzneimittel/Arzneimittelinformationen/_artikel.html)

Für die Produktabdeckung ist vorab technisch und rechtlich zu prüfen:

- Welche Daten und Dokumente automatisiert abrufbar sind und unter welcher Lizenz/Nutzungsbedingung.
- Wie Präparate, Wirkstoffe, Stärken und Darreichungsformen eindeutig zugeordnet werden.
- Wie fehlende oder veraltete Packungsbeilagen sichtbar gemacht werden, statt Lücken zu kaschieren.

Nicht als alleinige Quelle verwenden: Suchmaschinen-Texte, Hersteller-Marketing, Foren oder KI-generierte Inhalte ohne Quellenprüfung.

### Redaktionsprozess

Die verständliche Zusammenfassung wird pro Wirkstoff/Präparat versioniert:

1. Originalquelle erfassen (Dokument, Abschnitt, Stand, URL).
2. Erstentwurf anhand eines festen, medizinisch begrenzten Templates erstellen.
3. Fachliche Prüfung durch approbierte Apothekerin / approbierten Apotheker oder Ärztin / Arzt.
4. Lesbarkeitsprüfung mit Angehörigen bzw. Personen aus der Zielgruppe.
5. Freigabe mit Datum, Prüferrolle und Quellenstand.
6. Bei neuer Gebrauchsinformation: erneute Prüfung; bis dahin sichtbarer Hinweis „Überprüfung ausstehend“.

Für die erste lokale Version reichen 10–20 häufig genutzte Medikamente aus dem tatsächlichen Umfeld der Eltern (mit Prüfung). Das reduziert medizinisches Risiko und erlaubt echte Nutzertests, bevor die Abdeckung skaliert wird.

### Sicherheitsregeln im Interface

- Nie selbstständig absetzen, teilen oder die Dosis ändern: nur nach Rücksprache.
- Warnhinweise stehen prominent vor Komfortfunktionen.
- „Häufig“ bedeutet nicht „harmlos“; Häufigkeit und Schwere werden getrennt erklärt.
- Aussagen bleiben präzise: „kann müde machen“, nicht „macht müde“.
- Jeder Inhalt zeigt „Keine individuelle medizinische Beratung“ und die Originalquelle.
- In Deutschland geltende Notfallhinweise: bei akuter Gefahr 112; ansonsten behandelnde Praxis, ärztlicher Bereitschaftsdienst oder Apotheke – die exakte Darstellung vor Launch fachlich/rechtlich prüfen.

## Empfohlene technische Architektur

### Lokaler MVP

**Frontend:** React + TypeScript + Vite. Das ergibt eine schnelle, klar strukturierte Single-Page-App und lässt sich später statisch ausliefern.

**Design:** Tailwind CSS oder ein kleines eigenes Design-System; systemnahe Schrift (`system-ui`), helles und dunkles Erscheinungsbild, WCAG-orientierte Kontraste und vollständig per Tastatur bedienbar.

**Daten:** Versionierte JSON-Dateien im Repository, getrennt nach Präparat und Wirkstoff. Python-Skripte übernehmen später Import, Validierung und die Erstellung von Redaktionsentwürfen. Python darf keine unkontrollierten medizinischen Aussagen veröffentlichen.

**Lokale Suche:** clientseitiger Index über Handelsname, Wirkstoff, Wirkstoffklasse und Darreichungsform. Kein Nutzerkonto, keine externen Anfragen und keine Speicherung persönlicher Gesundheitsdaten im MVP.

**Testen:** Unit-Tests für Datenvalidierung und Suchlogik, Component-/Accessibility-Tests für Bedienbarkeit und ein manueller Test mit großer Schrift und Tastatur.

### Datenmodell (vereinfacht)

```text
MedicationProduct
  id, brandName, activeIngredients, strength, dosageForm, authorizationStatus
  simpleSummary { purpose, does, doesNotDo, dailyLifeNotes }
  sideEffects[] { plainText, frequency, seriousness }
  urgentWarnings[] { plainText, action }
  sources[] { title, url, documentDate, accessedAt, sourceSections }
  editorial { status, reviewedAt, reviewerRole, nextReviewAt }
```

Die Identität eines Eintrags darf nie nur der Handelsname sein: Stärke und Darreichungsform können für Wirkung, Anwendung und Risiken relevant sein.

## Spätere Online-Version

### Hosting

GitHub Pages kann das statische Frontend ausliefern. Die Hostinger-Domain wird per DNS als eigene Domain daran gebunden. Alternativ kann die statische App direkt bei Hostinger liegen; beides parallel ist unnötig.

### Anmeldung nur per Einladung

Reines GitHub Pages kann keine Geheimnisse schützen und keine sichere Einladungskontrolle allein durchführen. Für Google-Anmeldung und Einladungslinks wird daher ein Auth-/Backend-Dienst benötigt, z. B. Supabase Auth oder Firebase Authentication, plus eine kleine serverseitige Funktion für Einladungen.

Vorgesehener Ablauf:

1. Administrator erstellt eine Einladung für eine konkrete E-Mail-Adresse mit Ablaufzeit.
2. Die eingeladene Person öffnet den Link und meldet sich mit Google an.
3. Der Server prüft den Einladungs-Token und die E-Mail; nur dann erhält das Konto Zugriff.
4. Tokens sind einmalig, kurzlebig und werden serverseitig gespeichert/gehasht.
5. Keine Gesundheitsdaten im Auth-Profil speichern. Falls später Favoriten oder eine Medikationsliste dazukommen, Datenschutz, Zugriffskontrolle und Datenminimierung separat konzipieren.

Vor öffentlichem Betrieb: Datenschutzinformation, Impressum, Auftragsverarbeitungsverträge und rechtliche Einordnung des Produkts prüfen lassen. Weil Informationen zu Arzneimitteln ein sensibles Gesundheitsfeld sind, sollten medizinische Verantwortung, Prüfprozesse und Haftung vor Launch verbindlich geklärt sein.

## Umsetzungsphasen

### Phase 0 – Inhaltlicher Rahmen

- Zielgruppe und 10–20 MVP-Medikamente festlegen.
- Datenquelle, Nutzungsrechte und Aktualisierungsweg validieren.
- Medizinische Prüferperson gewinnen und Redaktions-Template festlegen.
- Risiko- und Freigabekriterien schriftlich festhalten.

**Ergebnis:** Abnahmefähiges Inhalts- und Sicherheitskonzept.

### Phase 1 – Lokaler Prototyp

- React/TypeScript-Projekt und minimalistisches Design-System aufsetzen.
- Suche, Ergebnisliste und Medikamentenseite implementieren.
- Beispiel-Datensätze nur mit klarer Kennzeichnung „Entwurf / fachlich noch nicht freigegeben“ anlegen, bis sie geprüft sind.
- Responsive, tastaturbedienbare und großschriftfähige Oberfläche bauen.

**Ergebnis:** Lokale App, die mit realistischen Testdaten durchklickbar ist.

### Phase 2 – Inhalts-Pilot und Test

- Erste Inhalte medizinisch prüfen und mit Quellen verknüpfen.
- Verständlichkeit mit Eltern/Angehörigen testen: Finden sie „Wofür?“, „Was nicht?“ und „Wann Hilfe?“ ohne Erklärung?
- Missverständnisse, insbesondere „Symptomlinderung vs. Heilung“, gezielt prüfen.

**Ergebnis:** Validiertes Karten-Template und priorisierter Verbesserungsplan.

### Phase 3 – Veröffentlichungsreife

- Datenpipeline, Versions- und Review-Status vervollständigen.
- Authentifizierung/Einladungen serverseitig umsetzen.
- Datenschutz, Sicherheit, Monitoring und Deploy-Prozess prüfen.
- GitHub Pages + Hostinger-Domain konfigurieren.

**Ergebnis:** Geschützte Online-Version für den eingeladenen Personenkreis.

## Plan zur Abdeckung aller in Deutschland zugelassenen Medikamente

„Alle Medikamente“ bedeutet nicht, jede Packungsgröße einzeln zu erklären. Die App führt ein **Präparat** mit Handelsname, Stärke und Darreichungsform, schreibt die einfache Erklärung aber möglichst auf Ebene des **Wirkstoffs** bzw. einer fachlich sinnvollen Wirkstoffkombination. So bleibt sie verständlich, wartbar und kann trotzdem präparatspezifische Warnungen anzeigen.

### Schritt 1 – Relevanz-Pilot: die wichtigsten Wirkstoffe zuerst

Ziel: Eine vertrauenswürdige, fachlich geprüfte Sammlung für die häufigsten und risikoreichsten Alltagssituationen. Start mit rund 100–150 Wirkstoffen; zuerst die konkreten Medikamente der Eltern, sobald sie von einer Packung oder einem Rezept abgelesen werden können.

Prioritätsreihenfolge:

1. Herz-Kreislauf und häufige chronische Erkrankungen: Blutdrucksenker, Blutverdünner, Cholesterinsenker, Diabetesmittel und Wassertabletten.
2. Schmerz, Schlaf, Psyche und Neurologie: Schmerzmittel, Opioide, Schlaf-/Beruhigungsmittel, Antidepressiva und Antiepileptika – besonders wegen Müdigkeit, Stürzen, Verstopfung und Einschränkungen beim Autofahren.
3. Magen-Darm und Atemwege: Magensäurehemmer, Abführmittel, Mittel gegen Übelkeit sowie häufige Inhalationsmedikamente.
4. Onkologie und Begleitbehandlung: die tatsächlich verwendeten Wirkstoffe der Eltern sowie häufige Hormontherapien bei Prostatakrebs; nie als pauschale Therapieempfehlung.

Jeder Eintrag erhält eine Quellenverknüpfung, eine fachliche Freigabe und eine einfache „Was tut es nicht?“-Karte. Das ist die Stufe, die anderen Menschen bereits unmittelbar nützt.

**Erfolgskriterium:** Für die häufigsten Suchanfragen und alle Medikamente im familiären Umfeld existiert eine geprüfte, leicht verständliche Karte.

### Schritt 2 – Breite Grundversorgung: häufige Wirkstoffe und Kombinationen

Ziel: Die Wirkstoffe abdecken, die in Hausarztpraxen und Apotheken besonders häufig vorkommen. Aus den Daten von PharmNet.Bund/AMIce wird ein strukturierter Katalog aus Handelsnamen, Wirkstoff, Stärke und Darreichungsform aufgebaut. Das BfArM verweist dort auf öffentlich recherchierbare Zulassungs- und vielfach Gebrauchs-/Fachinformationen. [BfArM: Arzneimittelinformationen](https://www.bfarm.de/DE/Arzneimittel/Arzneimittelinformationen/_artikel.html)

Vorgehen:

- Wirkstoffklassen nach Nutzen, Verordnungsrelevanz und Sicherheitsrisiko priorisieren, statt alphabetisch zu arbeiten.
- Ein „Basistext pro Wirkstoff“ wird durch produktbezogene Unterschiede ergänzt: Stärke, Retardform, Tropfen, Injektion, Kombinationen und zusätzliche Warnhinweise.
- Die Datenpipeline erkennt neue oder geänderte Gebrauchsinformationen und setzt betroffene Karten auf „Prüfung nötig“.
- Redaktionelle Vorlagen und Fachprüfung beschleunigen die Arbeit, ohne die Freigabe zu automatisieren.

**Erfolgskriterium:** Ein großer Anteil häufiger Handelsnamen führt zu einer geprüften Wirkstoffkarte; bei Kombinationen und abweichenden Formen ist die Abweichung klar sichtbar.

### Schritt 3 – Vollständigkeit mit Transparenz: der spezialisierte und seltene Rest

Ziel: Jede in Deutschland im offiziellen Katalog auffindbare Arzneimittelbezeichnung ist suchbar. Die App unterscheidet dann sichtbar drei Stufen:

| Status | Was die Nutzer sehen | Veröffentlichungsregel |
| --- | --- | --- |
| Geprüft | vollständige einfache Übersicht, Warnhinweise und Quellenstand | durch fachliche Prüfung freigegeben |
| Quelle vorhanden, Prüfung ausstehend | Handelsname, Wirkstoff, Originalquelle und klarer Hinweis auf fehlende einfache Erklärung | keine zusammenfassenden medizinischen Aussagen |
| Nicht auffindbar / unklar | Hilfe zur Prüfung von Name, Stärke und Darreichungsform | kein Raten und keine Ersatzzuordnung |

Für seltene Präparate, Klinikmedikamente, Impfstoffe, Blutprodukte und komplexe Onkologika bleibt die menschliche Prüfung zwingend. Automatisierung darf Daten zuordnen, Änderungsstände erkennen und Entwürfe vorbereiten – aber keine unkontrollierten medizinischen Erklärungen veröffentlichen.

**Erfolgskriterium:** Keine Suchanfrage endet stillschweigend im Leeren: Entweder es gibt eine geprüfte Erklärung oder einen transparenten Link zur amtlichen Originalinformation mit erkennbarem Prüfstatus.

### Reihenfolge, die ich konkret empfehlen würde

1. **Schritt 1 bauen und mit 100–150 Wirkstoffen veröffentlichungsreif machen.** Das bringt rasch echten Nutzen und schafft das sichere Daten- und Freigabeformat.
2. **Schritt 2 halbautomatisieren und klassenweise abarbeiten.** Besonders Kombinationen und Darreichungsformen werden jetzt systematisch abgedeckt.
3. **Schritt 3 als dauerhaften Pflegeprozess betreiben.** „Vollständig“ ist bei Zulassungen ein fortlaufender Zustand; jede neue oder geänderte Quelle erzeugt einen nachvollziehbaren Prüfauftrag.

## Messbare Erfolgskriterien für den MVP

- Eine Testperson findet ein Medikament und die drei Kernaussagen in unter zwei Minuten.
- Sie kann nach dem Lesen korrekt sagen, ob das Präparat Symptome lindert, eine Ursache behandelt oder beides.
- Sie erkennt mindestens einen relevanten Alltags-Effekt und weiß, dass bei Warnzeichen ärztliche Hilfe nötig ist.
- Jede veröffentlichte Aussage ist einer Originalquelle und einem Prüfstatus zugeordnet.
- Die App funktioniert bei 200 % Browser-Zoom ohne wesentlichen Funktionsverlust.

## Nächste konkrete Entscheidung

Für den Bau der lokalen Version sollten wir zunächst festlegen, welche 10–20 Medikamente als Pilot dienen und wer die medizinische Prüfung übernimmt. Danach kann das Frontend mit anonymen, klar als Entwurf markierten Beispieldaten beginnen.
