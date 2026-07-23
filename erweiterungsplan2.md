# Erweiterungsplan 2 – Handelsnamen zu belastbaren Präparatevarianten

Stand: 24.07.2026  
Ausgangspunkt: 429 Handelsnamen als Suchhilfe. 61 konkrete Präparatevarianten sind bereits mit Produktinformation abgeglichen. Ein Handelsname ist häufig keine einzelne Packung: Stärke, Darreichungsform, Altersbereich und bei Kombinationspräparaten auch weitere Wirkstoffe können abweichen.

## Zielbild

Jeder bisherige Handelsname soll am Ende eine sichere Suche ermöglichen – ohne zu behaupten, dass ein kurzer Markenname bereits eine bestimmte Packung beschreibt.

Die Suche unterscheidet dann immer drei Fälle:

| Fall | Anzeige in der App | Beispiel |
| --- | --- | --- |
| Eine konkrete Variante ist geprüft | `Konkretes Präparat` mit Stärke, Form, Quelle und Abrufdatum | „Delix 5 mg Tabletten“ |
| Der Handelsname hat mehrere mögliche Varianten | `Packung auswählen` und anschließend geprüfte Varianten | „Delix“ |
| Es gibt noch keine belastbare konkrete Variante | `Handelsname als Suchhilfe` mit Hinweis auf Packungsabgleich | neuer oder nicht eindeutig auffindbarer Name |

Die Abdeckung wird nicht am bloßen Handelsnamen gemessen, sondern an konkret geprüften Präparatevarianten. Ein Alias wie „Eliquis“ ist erst dann sinnvoll abgedeckt, wenn die für die Nutzung relevanten Varianten getrennt erfasst sind – nicht nur eine zufällig gewählte Stärke.

## Nicht-Ziele und Sicherheitsregeln

- Keine Stärke, Form, Altersgrenze oder Anwendung aus dem Handelsnamen ableiten.
- Keine automatische Zuordnung bei Kombinationen, Rezepturen, Depotpräparaten, Pens, Inhalatoren, Tropfen, Säften oder Pflastern.
- Keine Dosisberechnung und keine Änderungsempfehlung.
- Eine Produktseite oder ein Hersteller-Shop ist nur dann ausreichend, wenn sie die aktuelle Gebrauchs- oder Fachinformation der konkreten Variante enthält.
- Ein abgekündigtes, nicht in Deutschland verfügbares oder nicht eindeutig identifizierbares Präparat bleibt Suchhilfe und wird nicht als konkrete Variante veröffentlicht.
- PZN, Barcode und Apotheken-Shopdaten werden erst nach einer gesonderten rechtlichen und technischen Prüfung eingebunden.

## Qualitätsstufen

| Status | Voraussetzung | Darf in der Suche erscheinen als |
| --- | --- | --- |
| `Handelsname zugeordnet – Packungsabgleich offen` | Handelsname führt plausibel zu einer Wirkstoffkarte, konkrete Variante ist offen | Suchhilfe |
| `Referenzpräparat – Packungsabgleich nötig` | Die Wirkstoffkarte nennt ein quellenverlinktes Referenzpräparat, aber Packungsdetails sind nicht separat bestätigt | Referenzpräparat |
| `Produktinformation abgeglichen` | Exakter Handelsname, Wirkstoff(e), Stärke, Darreichungsform, Quelle und Abrufdatum sind dokumentiert und validiert | Konkretes Präparat |
| `fachlich geprüft` | Zusätzlich von Apotheke oder ärztlichem Fachpersonal geprüft und mit Prüfdaten dokumentiert | Konkretes Präparat mit Fachprüfstatus |

Nur die dritte und vierte Stufe zählen zur konkreten Präparateabdeckung.

## Quellenhierarchie

1. PharmNet.Bund/BfArM: amtliche Daten sowie Gebrauchs- oder Fachinformation, wenn direkt verfügbar.
2. PatientenInfo-Service: konkrete, lesbare Gebrauchsinformation mit eindeutiger Produktbezeichnung.
3. EMA: zentral zugelassene Arzneimittel, insbesondere Onkologie, Immunologie und spezialisierte Therapien.
4. Offizielle Herstellerinformation nur als Ergänzung, wenn die konkrete Originalinformation dort eindeutig erreichbar ist.

Pro Eintrag werden die direkte URL und das Abrufdatum gespeichert. Allgemeine Übersichtsseiten, Suchtrefferseiten und Shopangebote gelten nicht als Endquelle.

## Datenmodell pro konkreter Variante

Jede neue Variante erhält mindestens:

```text
tradeName              exakter Packungsname
medicationIds          alle zugehörigen Wirkstoffkarten
activeIngredients      Wirkstoff(e) in lesbarer Form
strength               exakte Stärke der Variante
dosageForm             exakte Darreichungsform
audience               relevante Zielgruppe/Anwendungsbesonderheit
ageNote                Alters-/Gewichts- oder Anwendungscheck ohne Dosis
safetyNote             kurzer, produktbezogener Alltag-/Warnhinweis
sourceLabel            konkrete Produktinformation
sourceUrl              Direktlink zur Originalinformation
checkedOn              Abrufdatum
status                 Produktinformation abgeglichen
```

Bei Kombinationen müssen alle Wirkstoffe in `medicationIds` stehen. Fehlt eine passende Wirkstoffkarte, wird zuerst diese Karte quellenbasiert erstellt oder der Alias bleibt offen.

## Phase A – Bestandsaufnahme und Alias-Manifest

Ziel: Die 429 bestehenden Suchhilfen in eine prüfbare Arbeitsliste überführen, ohne sie bereits als konkret bestätigt auszugeben.

1. Jeden Alias automatisch gegen die vorhandenen konkreten Varianten abgleichen.
2. Pro Alias eine dieser Klassen vergeben:
   - bereits durch mindestens eine konkrete Variante abgedeckt,
   - Markenfamilie mit mehreren Stärken/Formen,
   - Kombination oder produktabhängiger Wirkstoffmix,
   - wahrscheinlich eindeutige Einzelvariante,
   - unklar, veraltet oder nicht sicher in deutscher Originalinformation auffindbar.
3. Doppelte Schreibweisen, Bindestriche, Sonderzeichen und Markenvarianten zusammenführen, ohne den Originalnamen zu verlieren.
4. Für jede Markenfamilie die benötigten Varianten als offene Checkliste erzeugen.
5. Die automatische Validierung um zwei Kennzahlen erweitern:
   - Anteil der Aliasnamen mit mindestens einer konkreten Variante,
   - Anzahl offener Markenfamilien und unklarer Zuordnungen.

**Ergebnis:** Eine CSV-Prüfliste mit Alias, Wirkstoffkarte, Risikoklasse, Quellenstatus, benötigten Varianten und Prüfstatus.

## Phase B – Relevanz-Pilot: 80–120 konkrete Varianten

Ziel: Zuerst die Handelsnamen abdecken, bei denen eine falsche Zuordnung besonders folgenreich wäre oder die im Alltag sehr häufig vorkommen.

Die Umsetzung erfolgt in sechs Chargen zu etwa 12–20 Varianten. Jede Charge wird einzeln recherchiert, validiert und erst danach als `Produktinformation abgeglichen` veröffentlicht.

| Charge | Fokus | Beispiele für Handelsnamen/Familien |
| --- | --- | --- |
| B1 | Blutdruck und Herz | Delix, Triatec, Atacand, Blopress, Norvasc, Beloc, Concor |
| B2 | Blutgerinnung und Herz-Kreislauf | Eliquis, Xarelto, Lixiana, Pradaxa, Marcumar, Plavix, Brilique |
| B3 | Diabetes und Stoffwechsel | Glucophage, Jardiance, Forxiga, Januvia, Ozempic, Rybelsus, Insuline |
| B4 | Schmerz, Fieber und Nervenschmerz | Novalgin, ben-u-ron, Nurofen, Voltaren, Tramal, Lyrica |
| B5 | Magen-Darm und Atemwege | Antra, Pantozol Control, Movicol, Laxido, Sultanol, Pulmicort, Spiriva |
| B6 | Kinder- und Allergievarianten | kindgerechte Säfte, Zäpfchen, Nasensprays und Antihistaminika mit klarer Alters-/Konzentrationstrennung |

Für B1–B6 gilt zusätzlich:

- Für jede Markenfamilie mindestens die häufigen, eindeutig belegten Formen und Stärken getrennt erfassen.
- Bei Blutverdünnern, Insulinen, Opioiden, Inhalatoren und Kinderpräparaten keine Familienvariante als Ersatz für die konkrete Packung ausgeben.
- Bei nicht eindeutigen Kurzformen direkt zur Auswahl konkreter Varianten führen.

## Phase C – Breite Versorgung: 180–260 konkrete Varianten

Ziel: Die übrigen häufigen Aliasfamilien aus Familie, Hausarztpraxis und fachärztlicher Regelversorgung abdecken.

Die Umsetzung erfolgt in zehn bis dreizehn Chargen zu 15–20 Varianten:

1. Antibiotika, Virus- und Pilzmittel
2. Schilddrüse und Hormone
3. Verhütung, Frauengesundheit und Mangelzustände
4. Migräne, Schlaf, Depression, Angst und Neurologie
5. Haut, Allergie, Augen und HNO
6. Magen-Darm, chronisch-entzündliche Darmerkrankungen und Verdauungsenzyme
7. Rheuma, Knochen und Bewegung
8. Urologie und Demenz
9. Immunologie und Lunge
10. Onkologie und Begleittherapie

Spezialisierte Präparate werden nicht nach Popularität, sondern nach Sicherheitsrisiko und Klarheit der Originalinformation priorisiert. Wenn eine Therapie nur über einen persönlichen Behandlungsplan sinnvoll zu verstehen ist, bleibt die Präparatekarte besonders zurückhaltend und verweist sichtbar auf das Behandlungsteam.

## Phase D – Restliste und schwierige Fälle

Ziel: Jeden verbleibenden Alias fachlich korrekt behandeln, auch wenn er nicht als konkrete Variante veröffentlicht werden kann.

1. Nicht auffindbare, möglicherweise außer Vertrieb befindliche Namen als `nicht aktuell verifiziert` kennzeichnen.
2. Mehrdeutige Namen mit mehreren Wirkstoffen oder Anwendungsformen als Auswahlseite modellieren.
3. Kombinationen nur veröffentlichen, wenn alle Wirkstoffkarten vorhanden und verknüpft sind.
4. Bei Handelsnamen mit vielen Packungsformen die wichtigsten Varianten konkret erfassen und die restlichen Varianten klar als offen zeigen.
5. Unklare Fälle in einer separaten Apotheken-Prüfliste für Sonja sammeln; nie stillschweigend zuordnen.

## Prüfablauf je Charge

1. Alias und gewünschte konkrete Variante aus dem Manifest auswählen.
2. Aktuelle Originalinformation über die Quellenhierarchie öffnen.
3. Exakten Namen, Wirkstoff(e), Stärke, Form und Anwendungsbesonderheiten erfassen.
4. Quelle, direkte URL und Abrufdatum eintragen.
5. Sicherheitshinweis in einfacher Sprache formulieren – ohne Dosisanweisung.
6. Kombinationen und Altersgrenzen gegenprüfen.
7. Lokale Validierung ausführen.
8. Mobile Suche mit Handelsname, Wirkstoff, Umlaut-/Bindestrichvariante und mindestens einem Tippfehler testen.
9. CSV-Prüfliste für die fachliche Kontrolle aktualisieren.
10. Erst danach veröffentlichen und die Änderung versionieren.

## Abnahmekriterien

Eine Charge ist nur fertig, wenn:

- jede neue konkrete Variante alle Pflichtfelder und einen Direktlink zur Produktinformation hat,
- die Validierung ohne Fehler durchläuft,
- jede Kombination alle Wirkstoffe verknüpft,
- keine allgemeine Markenfamilie fälschlich als einzelne Packung gilt,
- mindestens eine Suche nach Handelsname und Wirkstoff geprüft wurde,
- die mobile Darstellung auf iPhone-Breite keine abgeschnittenen Informationen oder zu kleinen Touch-Flächen zeigt,
- offene oder nicht überprüfbare Namen als solche sichtbar bleiben.

## Messbare Zwischenziele

| Meilenstein | Konkrete Varianten insgesamt | Erwarteter Zustand |
| --- | ---: | --- |
| Start | 61 | bestehende Varianten und Alias-Suchhilfen |
| Nach Phase A | 61 | vollständiges, priorisiertes Alias-Manifest |
| Nach Phase B | 140–180 | Kernversorgung mit mehreren Varianten je Hochrisiko-Familie |
| Nach Phase C | 320–440 | breite, quellenbasierte Alltagsabdeckung |
| Nach Phase D | 400–520 | alle Aliasnamen entweder konkret abgedeckt oder transparent als offen/mehrdeutig ausgewiesen |

## Realistische Umsetzungsgeschwindigkeit

Eine belastbare Charge umfasst 12–20 konkrete Varianten. Die Recherche, Datenerfassung, technische Validierung und mobile Stichprobe werden bewusst nicht automatisiert als „bestätigt“ markiert. Für den Ausbau von 61 auf etwa 400 konkrete Varianten sind daher ungefähr 18–24 saubere Chargen sinnvoll.

Der nächste sichere Schritt ist **Phase A**, anschließend **Charge B1: Blutdruck und Herz**.
