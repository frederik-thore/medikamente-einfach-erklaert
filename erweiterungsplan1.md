# Erweiterungsplan 1 – Abdeckung und Präparate-Verknüpfung

Stand: 23.07.2026  
Ausgangspunkt: 274 quellenbasierte Wirkstoffkarten und eine Handelsnamen-Suche.

## Zielbild

Die App soll im Alltag zuerst zwei Fragen zuverlässig beantworten:

1. „Was ist das Medikament auf meiner Packung – und was macht es?“
2. „Was ist bei dieser konkreten Stärke und Darreichungsform wichtig?“

Der Ausbau richtet sich neben älteren Menschen besonders an Familien mit Kindern und Erwachsene zwischen etwa 30 und 50 Jahren. Medizinische Informationen bleiben leicht verständlich, produktbezogen, quellenbasiert und ohne Dosierungsrechner.

## Leitplanken

- Keine individuelle Diagnose, Therapieentscheidung oder Dosierungsempfehlung.
- Bei Kindern: Alter, Gewicht, Stärke und Darreichungsform immer als Prüfpunkt nennen; keine Berechnung durch die App.
- Jede veröffentlichte Karte benötigt eine konkrete aktuelle Produktinformation, Quell-URL und Abrufdatum.
- Handelsnamen dienen nur als Suchhilfe. Entscheidend bleiben Wirkstoff(e), Stärke und Darreichungsform auf der tatsächlichen Packung.
- Kombinationspräparate werden nicht stillschweigend auf nur einen Wirkstoff reduziert.
- Jede Karte trägt den Status `Quellenbasierter Entwurf` und kann vor einer breiteren Veröffentlichung fachlich geprüft werden.

## Datenquellen und Hierarchie

1. **PharmNet.Bund/BfArM**: amtliche Referenz für Zulassung, Präparatname, Darreichungsform, Zulassungsinhaber sowie – sofern verfügbar – Gebrauchs- und Fachinformation.  
   https://www.bfarm.de/DE/Arzneimittel/Arzneimittelinformationen/_artikel.html
2. **PatientenInfo-Service**: bevorzugte gut lesbare Quelle für die aktuelle Gebrauchsinformation eines konkreten Präparats. In Übergangszeiten kann die digitale Information von einer noch im Handel befindlichen Packung abweichen; die Packung bleibt maßgeblich.  
   https://www.patienteninfo-service.de/
3. **EMA**: Quelle für zentral zugelassene, insbesondere neue oder spezialisierte Arzneimittel.  
   https://www.ema.europa.eu/en/about-us/what-we-do/safety-medicines

## Phase 0 – Datenmodell und Qualitätsfundament

**Umgesetzt am 23.07.2026:** Präparate sind nun als eigene Suchergebnisart modelliert; ein lokales Prüfskript kontrolliert die Pflichtangaben aller abgeglichenen konkreten Präparate. Präparatfamilien und mehrdeutige Handelsnamen werden sichtbar als Packungsabgleich gekennzeichnet.

### Ziel

Wirkstoffkarten und konkrete Präparate technisch sauber trennen. Die bestehende Alias-Suche bleibt erhalten, wird aber durch geprüfte Präparate ergänzt.

### Umsetzung

- Bestehendes Feld `verifiedPreparations` zu einem vollständigen Präparate-Modell weiterentwickeln.
- Jede konkrete Präparatevariante erhält mindestens:

```text
tradeName              Handelsname
medicationIds          eine oder mehrere Wirkstoffkarten
activeIngredients      Wirkstoff(e) als lesbarer Text
strength               Stärke genau wie auf der Packung
dosageForm             z. B. Saft, Tablette, Zäpfchen, Inhalator
audience               z. B. Kindervariante, Erwachsene, ab bestimmtem Alter
ageNote                Alters-/Gewichtsprüfung ohne Dosierungsanweisung
sourceLabel            konkrete Produktinformation
sourceUrl              direkte Quelle
checkedOn              Datum des Quellenabgleichs
status                 „Produktinformation abgeglichen“
```

- Suchergebnisse deutlich unterscheiden:
  - **Konkretes Präparat**: zeigt Packungsdetails, Wirkstoff(e), Warnhinweis und Link zur Wirkstoffkarte.
  - **Wirkstoff**: führt direkt zur einfachen Erklärkarte.
  - **Mehrdeutiger Handelsname**: zeigt Auswahl statt einer automatischen Zuordnung.
- Kombinationspräparate mit mehreren `medicationIds` modellieren und alle verknüpften Karten zeigen.
- Bestehende Aliase ohne Quellenabgleich visuell als Suchhilfe behandeln, nicht als bestätigte Packungszuordnung.

### Abnahmekriterien

- Eine konkrete Packung kann in der Suche eindeutig gefunden werden.
- Wirkstoff, Stärke und Darreichungsform sind sichtbar.
- Kein Kombinationspräparat führt irreführend zu nur einer Wirkstoffkarte.
- Ein automatischer Test stellt sicher, dass jeder bestätigte Präparateintrag Quelle, Datum und mindestens eine Wirkstoffkarte hat.

## Phase 1 – Kinder und Familien-Hausapotheke

### Ziel

Etwa 25–35 neue Wirkstoff- oder Darreichungsformkarten und mindestens 100 geprüfte Präparatevarianten für besonders häufige Situationen bei Kindern und Familien.

### Inhaltliche Chargen

#### Charge 1: Fieber, Schmerzen und Erkältung

**Umgesetzt am 24.07.2026:** Bestehende Wirkstoffkarten wurden durch konkrete Varianten für Paracetamol, Ibuprofen, Xylometazolin und Dimenhydrinat ergänzt. Die Karten trennen Kinder- und Erwachsenenstärken sichtbar und enthalten einen Packungs-, Alters- und Gewichtscheck ohne Dosisberechnung.

- Paracetamol: Saft, Zäpfchen und Tablette nach Altersbereich
- Ibuprofen: Saft, Zäpfchen und Tablette nach Altersbereich
- Xylometazolin: Kinderstärke und Erwachsenenstärke sauber trennen
- Kochsalz-/Pflegepräparate nur, wenn eine passende Arzneimittelkarte sinnvoll ist
- Dimenhydrinat: Kinder- und Erwachsenenvarianten

#### Charge 2: Atemwege und Allergie

**Umgesetzt am 24.07.2026:** Bestehende Wirkstoffkarten wurden durch konkrete Inhalator-/Verneblervarianten für Salbutamol und Budesonid sowie kindgerechte Desloratadin-Lösungen ergänzt. Inhalationspräparate weisen auf Technik, persönlichen Plan und Notfallabklärung hin.

- Salbutamol: Inhalator und Lösung, jeweils nur mit Technik-/Notfallhinweis
- Budesonid und weitere häufige inhalative Kortisonvarianten
- Antihistaminika: Cetirizin, Desloratadin, Loratadin in Kindersaft-/Lösungsvarianten
- Pseudokrupp-/Atemwegspräparate nur mit eindeutiger Produktinformation

#### Charge 3: Magen-Darm und Verstopfung

- Macrogol: Kinder- und Erwachsenenbeutel trennen
- Elektrolyt-/Rehydratationspräparate, falls belastbare Produktinformation verfügbar
- Lactulose, Zäpfchen- oder weitere kindgerechte Varianten nur produktbezogen
- Klare Warnzeichen bei Trinkschwäche, Austrocknung, Blut im Stuhl, starken Schmerzen oder anhaltendem Erbrechen

#### Charge 4: Häufige Infektionen und Haut

- Antibiotika-Säfte bzw. Suspensionen: Amoxicillin, Phenoxymethylpenicillin, Cefuroxim – stets ohne Dosisberechnung
- Häufige Hautthemen: Läuse, Krätze, Pilzinfektionen, Neurodermitis
- Augen- und Ohrpräparate nur dann, wenn konkrete Darreichungsform und Altersbereich geprüft sind

### Kinder-spezifische Regeln

- Auf jeder Kindervariante: „Die App berechnet keine Dosis.“
- Keine Verwendung einer Erwachsenenkarte als Ersatz für eine Kindervariante.
- Warnung bei Konzentrationsunterschieden, etwa Saft in mg/ml und Zäpfchen in mg.
- Deutliches Alter-/Gewicht-/Packungs-Prüffeld am Präparateintrag.

## Phase 2 – Häufige Themen der 30–50-Jährigen

### Ziel

Etwa 30–40 zusätzliche Wirkstoffkarten und mindestens 100 konkrete Präparatevarianten für häufige Gesundheits- und Alltagsthemen.

### Priorisierte Themenfelder

1. **Verhütung und Frauengesundheit**
   - kombinierte hormonelle Verhütung, Gestagenpräparate, Notfallverhütung
   - klare Interaktions- und Thrombosewarnungen
   - Schwangerschaft und Stillzeit nur mit präparatspezifischem Hinweis und ohne individuelle Empfehlung
2. **Schwangerschaft, Kinderwunsch und Mangelzustände**
   - Folsäure, Eisen, Vitamin D, gegebenenfalls Jodid
   - keine pauschale Einnahmeempfehlung bei Schilddrüsen- oder Autoimmunerkrankungen
3. **Migräne, Schlaf und psychische Gesundheit**
   - vorhandene Migränekarten ergänzen: weitere Akut- und Vorbeugungspräparate
   - häufige Schlaf- und Angstmittel nur mit klarem Hinweis auf Müdigkeit, Abhängigkeit und Wechselwirkungen
4. **Haut, Haare und Hormone**
   - Rosazea, Akne, Haarausfall und relevante lokale Therapien
5. **Magen-Darm und Reizdarm**
   - Reflux, funktionelle Darmbeschwerden, Durchfall, Verstopfung und Übelkeit
   - Trennung von Symptombehandlung und Ursache bleibt zentral
6. **Rücken, Sport und Bewegung**
   - weitere häufige, quellenbasiert belegbare Muskel- und Gelenkpräparate
   - klare Grenze zwischen Schmerzlinderung und Heilung

### Abnahmekriterien

- Jede neue Wirkstoffkarte enthält mindestens einen konkreten Referenzpräparateintrag.
- Wichtige Wechselwirkungen und Einschränkungen im Alltag sind verständlich beschrieben.
- Bei Schwangerschaft, Stillzeit, Kindern und Herz-Kreislauf-Risiken wird besonders zurückhaltend formuliert.

## Phase 3 – Systematische Präparate-Verknüpfung

### Ziel

Die wichtigsten vorhandenen Wirkstoffkarten mit 300–500 überprüften, realen Packungsvarianten verbinden.

### Reihenfolge der Verknüpfung

1. Bereits vorhandene Karten mit hoher Alltagsrelevanz:
   - Blutdruck, Blutverdünnung, Diabetes, Schmerz, Magen, Atemwege, Allergie
2. Kinder- und Familienpräparate aus Phase 1
3. Schilddrüse, Hormone, Haut, Migräne und psychische Gesundheit aus Phase 2
4. Spezialisierte Krebs-, Immun- und Lungenpräparate mit hoher Sicherheitsrelevanz

### Arbeitsablauf pro Präparat

1. Handelsname, Wirkstoff(e), Stärke und Darreichungsform in der Originalinformation prüfen.
2. Direkte Quelle und Abrufdatum speichern.
3. Passende Wirkstoffkarte(n) festlegen.
4. Alters- oder Anwendungsbesonderheiten in einfacher Sprache ergänzen.
5. Prüfen, ob der Handelsname mehrdeutig, rezepturabhängig oder als Kombination riskant ist.
6. Automatische Validierung ausführen.
7. Präparat als `Produktinformation abgeglichen` veröffentlichen.

### Umgang mit PZN, Barcode und Packungsscan

- Kurzfristig: Handelsname plus Stärke plus Darreichungsform als zuverlässige Eingabe anbieten.
- Mittelfristig: Eingabefeld für PZN oder Scan vorbereiten, aber nur aktivieren, wenn eine rechtlich und technisch belastbare Datenquelle lizenziert bzw. angebunden ist.
- Keine unkontrollierte Übernahme von Apotheken- oder Shopdatenbanken.
- Bis dahin bleibt der direkte Packungsabgleich sichtbar und verpflichtend.

## Phase 4 – Redaktion, Prüfung und Aktualisierung

### Qualitätsprozess

- Für jede Karte und jedes Präparat dokumentieren:
  - Quelle und Abrufdatum
  - konkretes Referenzpräparat
  - Status der fachlichen Prüfung
  - letzter Inhaltscheck
- Interne Prüfliste automatisch aus dem Datenbestand erzeugen.
- Änderungen an Karten als verständlicher Diff anzeigen: „Was hat sich seit dem letzten Quellencheck geändert?“
- Regelmäßiger Quellencheck:
  - Hochrisiko- und Kinderpräparate: halbjährlich
  - alle übrigen Karten: mindestens jährlich
  - zusätzlich bei wichtigen Sicherheitsmeldungen oder bekannten Produktänderungen

### Redaktionelle Regeln

- Die Abschnitte „Was tut es?“ und „Was tut es nicht?“ immer getrennt halten.
- Häufige, im Alltag spürbare Nebenwirkungen vor seltenen Fachbegriffen nennen.
- Warnzeichen mit klarer Handlung formulieren.
- Keine Häufigkeit behaupten, wenn sie aus der gewählten Produktinformation nicht klar hervorgeht.
- Bei Dosierung, Kindermedizin, Schwangerschaft und Wechselwirkungen konservativ formulieren und auf Praxis oder Apotheke verweisen.

## Phase 5 – Technische und Nutzerfreundlichkeits-Verbesserungen

### Suche

- Trefferarten „Präparat“, „Wirkstoff“ und „Kombination“ sichtbar kennzeichnen.
- Tippfehler, Bindestriche, Umlaute und geläufige Kurzformen berücksichtigen.
- Bei mehreren Treffern nach Stärke, Darreichungsform und Altersbereich sortieren.

### Konkrete Präparatansicht

- Name, Wirkstoff(e), Stärke, Form und Zielgruppe auf einen Blick.
- Link zur einfachen Wirkstoffkarte.
- Link zur Originalinformation.
- Hinweis: „Packung ist maßgeblich.“
- Bei Kinderpräparaten zusätzlich: „Alter, Gewicht und Packung prüfen – keine Dosierung durch die App.“

### Mobile Nutzung

- Große antippbare Treffer und klare Trennung von Wirkstoff- und Präparateansicht.
- Keine wichtigen Sicherheitsinformationen nur hinter aufklappbaren Bereichen verstecken.
- Suchfeld und Präparatekarte für iPhone-Bildschirmbreite testen.

## Empfohlene Umsetzungsreihenfolge

1. Phase 0: Präparate-Datenmodell, Suchergebnisarten und automatische Validierung.
2. Phase 1, Charge 1 und 2: Kinder-Hausapotheke, Fieber/Schmerz/Atemwege/Allergie.
3. Phase 1, Charge 3 und 4: Magen-Darm, Infektionen und Haut.
4. Phase 2: Erwachsenen-Abdeckung in thematischen Chargen.
5. Phase 3: fortlaufend konkrete Präparate für die wichtigsten Karten ergänzen.
6. Phase 4 und 5: parallel ab Phase 0 fortführen.

## Definition of Done für jede zukünftige Charge

- Neue Karten sind syntaktisch geprüft.
- Jede Karte hat vollständige Texte für Zweck, Wirkung, Grenze, Alltag, Nebenwirkungen, Warnzeichen und Quelle.
- Jede Karte hat `reviewStatus: "Quellenbasierter Entwurf"`.
- Jede neue Produktverknüpfung hat Quelle, Abrufdatum, Stärke, Darreichungsform und Wirkstoffzuordnung.
- Aliase werden ergänzt, ohne mehrdeutige Präparate fälschlich eindeutig zuzuordnen.
- Die mobile Darstellung und Suche sind kurz getestet.
- Änderungen werden versioniert und auf GitHub Pages veröffentlicht.
