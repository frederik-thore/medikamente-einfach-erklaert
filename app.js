const reviewedDrafts = [
  {
    id: "metamizol",
    name: "Metamizol",
    examples: "Referenzpräparat: Metamizol HEXAL® 500 mg Tabletten",
    category: "Schmerzmittel",
    purpose: "Metamizol wird bei starken Schmerzen, hohem Fieber oder krampfartigen Schmerzen eingesetzt, wenn es ärztlich verordnet wurde.",
    does: "Es kann Schmerzen lindern, Fieber senken und bei krampfartigen Schmerzen entspannen.",
    doesNot: "Es behandelt nicht die Ursache der Schmerzen. Es heilt zum Beispiel keine Bestrahlungsfolgen oder eine Krebserkrankung.",
    daily: "Es kann müde oder schwindelig machen und den Blutdruck senken. Dann nicht Auto fahren und langsam aufstehen. Die verordnete Höchstmenge nicht selbst erhöhen.",
    sideEffects: "Möglich sind Blutdruckabfall, Schwindel, Übelkeit und Hautreaktionen. Besonders wichtig ist die seltene, aber schwere Agranulozytose: Dann fehlen bestimmte Abwehrzellen im Blut.",
    urgent: "Bei Fieber, Schüttelfrost, Halsschmerzen oder schmerzhaften Veränderungen im Mund, in Nase/Rachen oder anderen Schleimhäuten: Metamizol nicht weiter ohne Anweisung einnehmen und unverzüglich ärztlich abklären lassen.",
    source: "Gebrauchsinformation: Metamizol HEXAL® 500 mg Tabletten (abgerufen am 21.07.2026); BfArM-Risikoinformation berücksichtigt",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/m/metamizol-hexal-500mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "ramipril",
    name: "Ramipril",
    examples: "Referenzpräparat: Ramipril HEXAL® 5 mg Tabletten",
    category: "Blutdrucksenker",
    purpose: "Ramipril wird gegen hohen Blutdruck und bei bestimmten Herz- oder Nierenerkrankungen eingesetzt.",
    does: "Es hilft, den Blutdruck zu senken und entlastet dadurch Herz und Gefäße.",
    doesNot: "Es beseitigt die Ursache des Bluthochdrucks nicht sofort und man merkt die Wirkung nicht immer direkt.",
    daily: "Vor allem am Anfang können Schwindel oder Schwäche auftreten. Langsam aufstehen kann helfen. Ein trockener Reizhusten ist möglich.",
    sideEffects: "Wichtige mögliche Nebenwirkungen sind niedriger Blutdruck, Husten sowie Veränderungen der Nierenfunktion oder des Kaliumwerts. Deshalb können Blutkontrollen notwendig sein.",
    urgent: "Bei Schwellung von Gesicht, Lippen, Zunge oder Hals oder bei Atemnot sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Ramipril HEXAL® 5 mg Tabletten, Stand November 2024",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/r/ramipril-hexal-5mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "candesartan",
    name: "Candesartan",
    examples: "Referenzpräparat: Candesartan Zentiva® 8 mg Tabletten",
    category: "Blutdrucksenker",
    purpose: "Candesartan wird gegen hohen Blutdruck und bei bestimmten Herzerkrankungen eingesetzt.",
    does: "Es senkt den Blutdruck und entlastet dadurch Herz und Gefäße.",
    doesNot: "Es ist kein Schmerzmittel und behandelt nicht die unmittelbare Ursache von Beschwerden wie Brustschmerz oder Atemnot.",
    daily: "Möglich sind Schwindel oder Müdigkeit, besonders wenn der Blutdruck zu niedrig wird.",
    sideEffects: "Kontrollen von Blutdruck, Nierenwerten und Kalium können wichtig sein. Die persönlichen Risiken hängen von weiteren Medikamenten und Vorerkrankungen ab.",
    urgent: "Bei Ohnmacht, starker Schwäche, deutlicher Atemnot oder Schwellungen im Gesicht/Mund medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Candesartan Zentiva® 8 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/candesartan-zentiva-8mg",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "pantoprazol",
    name: "Pantoprazol",
    examples: "Referenzpräparat: Pantoprazol-ADGC 20 mg magensaftresistente Tabletten",
    category: "Magensäurehemmer",
    purpose: "Pantoprazol wird eingesetzt, um die Magensäure zu verringern, zum Beispiel bei Reflux oder bestimmten Magenproblemen.",
    does: "Es verringert die Säure im Magen und kann säurebedingte Beschwerden lindern.",
    doesNot: "Es klärt nicht, warum Schluckbeschwerden, Aufstoßen, Schleim oder Schmerzen auftreten. Bei neuen oder zunehmenden Beschwerden ist eine ärztliche Abklärung wichtig.",
    daily: "Manche Menschen haben Kopfschmerzen, Durchfall, Verstopfung oder Bauchbeschwerden. Nicht jede Magenbeschwerde kommt vom Medikament.",
    sideEffects: "Bei längerer Anwendung müssen Nutzen und mögliche Risiken regelmäßig ärztlich geprüft werden. Die konkrete Gebrauchsinformation des Präparats ist maßgeblich.",
    urgent: "Bei Blut im Erbrochenen, schwarzem Stuhl, starken Schluckbeschwerden, ungewolltem Gewichtsverlust oder starken Schmerzen unverzüglich ärztliche Hilfe suchen.",
    source: "Gebrauchsinformation: Pantoprazol-ADGC 20 mg magensaftresistente Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/pantoprazol-adgc-20mg",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "amlodipin",
    name: "Amlodipin",
    examples: "Referenzpräparat: Amlodipin – 1 A Pharma® 5 mg Tabletten N",
    category: "Blutdrucksenker",
    purpose: "Amlodipin wird gegen hohen Blutdruck eingesetzt; bei manchen Menschen auch bei bestimmten Herzbeschwerden.",
    does: "Es entspannt Blutgefäße. Dadurch kann der Blutdruck sinken.",
    doesNot: "Es behandelt nicht die Ursache eines plötzlich auftretenden Brustschmerzes, einer Atemnot oder anderer akuter Beschwerden.",
    daily: "Manche Menschen bemerken Schwindel, Kopfschmerzen oder geschwollene Knöchel und Füße. Bei Schwindel besteht Sturzgefahr.",
    sideEffects: "Mögliche Nebenwirkungen und deren Häufigkeit hängen vom konkreten Präparat ab. Die Gebrauchsinformation und ärztliche Kontrollen bleiben wichtig.",
    urgent: "Bei Ohnmacht, starker Atemnot, deutlicher Schwellung im Gesicht/Mund oder neuem starken Brustschmerz sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Amlodipin – 1 A Pharma® 5 mg Tabletten N (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/amlodipin-1a-pharma-5mg-n-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "macrogol",
    name: "Macrogol",
    examples: "Referenzpräparat: Macrogol – 1 A Pharma® (Gebrauchsinformation)",
    category: "Abführmittel",
    purpose: "Macrogol wird bei Verstopfung eingesetzt.",
    does: "Es bindet Wasser im Darm. Dadurch wird der Stuhl weicher und lässt sich leichter ausscheiden.",
    doesNot: "Es behandelt nicht die Ursache einer neuen, starken oder länger anhaltenden Verstopfung. Bei Krebs, Bestrahlung oder mehreren Medikamenten sollte diese abgeklärt werden.",
    daily: "Bauchschmerzen, Blähungen oder Durchfall können vorkommen. Bei Kindern sind Alter, konkrete Stärke, Darreichungsform und der vorgegebene Plan besonders wichtig; die App berechnet keine Dosis.",
    sideEffects: "Wenn Durchfall oder Erbrechen auftreten, kann das den Flüssigkeits- und Salzhaushalt beeinflussen. Besonders bei weiteren Medikamenten sollte Rücksprache gehalten werden.",
    urgent: "Bei starken Bauchschmerzen, Erbrechen, aufgeblähtem Bauch, Blut im Stuhl oder wenn weder Stuhl noch Winde abgehen: zeitnah medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Macrogol – 1 A Pharma® (veröffentlicht April 2026)",
    sourceUrl: "https://www.patienteninfo-service.de/gi/20732/pdf",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "leuprorelin",
    name: "Leuprorelin",
    examples: "Referenzpräparat: Leuprolin-ratiopharm® 11,25 mg Fertigspritze mit Implantat",
    category: "Krebstherapie",
    purpose: "Leuprorelin wird bei hormonabhängigem Prostatakrebs eingesetzt, wenn eine Senkung des Testosterons Teil der Krebsbehandlung ist.",
    does: "Es senkt nach einer anfänglichen Umstellungsphase die Testosteronwirkung. Dadurch kann das Wachstum hormonabhängiger Prostatakrebszellen gebremst werden.",
    doesNot: "Es ist kein Mittel gegen akute Schmerzen, Aufstoßen oder Schluckbeschwerden und ersetzt keine Untersuchung solcher Beschwerden.",
    daily: "Das Implantat wird durch medizinisches Fachpersonal unter die Haut gesetzt. PSA und Testosteron werden kontrolliert. Hitzewallungen, Müdigkeit, Stimmung, Sexualfunktion und Knochenstabilität können sich verändern.",
    sideEffects: "Möglich sind Hitzewallungen, Schwitzen, Müdigkeit, Veränderungen der Stimmung oder Sexualfunktion sowie Reaktionen an der Einstichstelle. Langfristig sind Knochen- und Herz-Kreislauf-Risiken wichtig.",
    urgent: "Bei Brustschmerz, Atemnot, Ohnmacht, Zeichen eines Schlaganfalls, schwerem Hautausschlag oder einer stark entzündeten/schmerzhaften Einstichstelle sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Leuprolin-ratiopharm® 11,25 mg Fertigspritze mit Implantat (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ratiopharm.de/produkte/details/leuprolin-ratiopharm-11-25-mg-fertigspritze-mit-implantat-pzn-13839603.html",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "loratadin",
    name: "Loratadin",
    examples: "z. B. Loratadin-ratiopharm® 10 mg Tabletten",
    category: "Allergiemittel",
    purpose: "Loratadin wird eingesetzt, um Beschwerden bei allergischem Schnupfen, zum Beispiel Heuschnupfen, zu lindern. Es wird außerdem bei chronischer Nesselsucht unbekannter Ursache eingesetzt.",
    does: "Es ist ein Antihistaminikum. Es bremst die Wirkung von Histamin, einem Botenstoff, der bei Allergien Beschwerden auslösen kann.",
    doesNot: "Es heilt die Allergie nicht und behandelt keine Ursache von Erkältung, Infektion oder anderen Beschwerden, die nicht durch eine Allergie entstehen.",
    daily: "Bei der empfohlenen Dosis werden viele Menschen nicht müde. Manche werden aber schläfrig oder benommen. Prüfen Sie deshalb erst Ihre persönliche Reaktion, bevor Sie Auto fahren oder Maschinen bedienen. Vor einem Hautallergietest muss Loratadin nach Rücksprache mindestens 48 Stunden vorher pausiert werden, weil es das Testergebnis abschwächen kann.",
    sideEffects: "Häufig kann Schläfrigkeit auftreten. Gelegentlich wurden Kopfschmerzen, mehr Appetit oder Schlaflosigkeit berichtet. Selten können unter anderem Schwindel, Herzklopfen, Übelkeit, Mundtrockenheit, Hautausschlag oder Leberprobleme auftreten.",
    urgent: "Bei Zeichen einer schweren allergischen Reaktion – zum Beispiel Schwellung von Gesicht, Lippen, Zunge oder Hals, Atemnot, Kreislaufproblemen oder starkem Hautausschlag – sofort medizinische Hilfe holen. Die Gebrauchsinformation nennt sehr selten schwere Überempfindlichkeitsreaktionen einschließlich Angioödem und Anaphylaxie.",
    source: "Gebrauchsinformation: Loratadin-ratiopharm® 10 mg Tabletten, Stand Oktober 2023",
    sourceUrl: "https://www.ratiopharm.de/assets/products/de/pkg_insert/Loratadin-ratiopharm%2010%20mg%20Tabletten%20-%203.pdf?pzn=142740",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "hydrochlorothiazid",
    name: "Hydrochlorothiazid",
    examples: "Referenzpräparat: Dytide® H 50 mg / 25 mg Tabletten (Kombination mit Triamteren)",
    category: "Wassertablette",
    purpose: "Hydrochlorothiazid ist ein entwässernder Wirkstoff. In der Referenz-Kombination wird er bei hohem Blutdruck, Herzschwäche und Flüssigkeitsansammlungen eingesetzt.",
    does: "Er sorgt dafür, dass über die Nieren mehr Salz und Wasser ausgeschieden werden. Das kann den Blutdruck senken und Wassereinlagerungen verringern.",
    doesNot: "Er behandelt nicht selbst die Ursache von plötzlich neuer Atemnot, rasch zunehmenden Schwellungen oder einer Herzschwäche.",
    daily: "Häufigerer Harndrang ist erwartbar. Schwindel oder Schwäche können auftreten, besonders wenn der Blutdruck oder der Flüssigkeitsgehalt zu stark sinkt. Die Einnahmezeit und Trinkmenge nur wie verordnet festlegen.",
    sideEffects: "Mögliche Probleme sind Störungen bei Salzen und Flüssigkeit im Blut sowie Veränderungen der Nierenfunktion. Deshalb sind je nach Situation Blutdruck- und Blutkontrollen wichtig.",
    urgent: "Bei Ohnmacht, ausgeprägter Schwäche, Verwirrtheit, Herzstolpern oder deutlich weniger Urin zeitnah medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Dytide® H 50 mg / 25 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/dytider-h-50-mg--25-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "apixaban",
    name: "Apixaban",
    examples: "Referenzpräparat: Eliquis® 5 mg Filmtabletten",
    category: "Gerinnungshemmer",
    purpose: "Apixaban wird eingesetzt, um Blutgerinnseln vorzubeugen oder sie zu behandeln – zum Beispiel bei Vorhofflimmern oder bei einer Thrombose beziehungsweise Lungenembolie.",
    does: "Es hemmt Faktor Xa, einen wichtigen Bestandteil der Blutgerinnung. Dadurch können sich Blutgerinnsel weniger leicht bilden.",
    doesNot: "Es löst Beschwerden wie Schmerzen oder Atemnot nicht direkt und darf nicht ohne ärztliche Anweisung eigenständig abgesetzt, unterbrochen oder doppelt eingenommen werden.",
    daily: "Blutergüsse oder längeres Nachbluten können leichter auftreten. Vor Operationen, Zahnbehandlungen und bei neuen Medikamenten unbedingt sagen, dass Apixaban eingenommen wird.",
    sideEffects: "Die wichtigste Nebenwirkung ist Blutung. Möglich sind zum Beispiel Blutergüsse, Nasen- oder Zahnfleischbluten, Blut im Urin oder Magen-Darm-Blutungen.",
    urgent: "Sofort Hilfe holen bei starker oder nicht stillbarer Blutung, Blut im Erbrochenen, schwarzem Stuhl, Blut im Urin, plötzlichen neurologischen Ausfällen oder nach einem Sturz auf den Kopf.",
    source: "Gebrauchsinformation: Eliquis® 5 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/e/eliquisR-5-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "atorvastatin",
    name: "Atorvastatin",
    examples: "Referenzpräparat: Atorvastatin – 1 A Pharma® 20 mg Filmtabletten",
    category: "Cholesterinsenker",
    purpose: "Atorvastatin wird eingesetzt, um erhöhte Blutfette wie Cholesterin oder Triglyzeride zu senken. Bei erhöhtem Herz-Kreislauf-Risiko kann es dieses Risiko auch bei normalen Cholesterinwerten senken.",
    does: "Es gehört zu den Statinen und hilft, Blutfette zu regulieren. Die Wirkung ist eine Vorbeugung und meist nicht unmittelbar spürbar.",
    doesNot: "Es behandelt keinen akuten Brustschmerz oder Herzinfarkt und ersetzt Ernährung, Bewegung oder andere ärztlich vereinbarte Maßnahmen nicht.",
    daily: "Große Mengen Grapefruitsaft können die Wirkung verstärken. Wenn Schwindel oder andere Beschwerden die Reaktion beeinträchtigen, nicht fahren oder Maschinen bedienen.",
    sideEffects: "Muskelschmerzen, Muskelschwäche oder -krämpfe sollten ernst genommen und ärztlich besprochen werden. Auch Leberwerte können bei Bedarf kontrolliert werden.",
    urgent: "Bei unerklärlichen starken Muskelschmerzen oder Muskelschwäche, besonders mit Fieber oder Unwohlsein, umgehend ärztlich abklären lassen.",
    source: "Gebrauchsinformation: Atorvastatin – 1 A Pharma® 20 mg Filmtabletten, Stand September 2024",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/atorvastatin-1a-pharma-20mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "metformin",
    name: "Metformin",
    examples: "Referenzpräparat: Metformin HEXAL® 500 mg Filmtabletten",
    category: "Diabetesmittel",
    purpose: "Metformin wird zur Behandlung eines erhöhten Blutzuckers bei Typ-2-Diabetes eingesetzt.",
    does: "Es hilft, den Blutzucker zu senken. Ohne ärztliche Anweisung abgesetzt, kann der Blutzucker wieder unkontrolliert ansteigen.",
    doesNot: "Es behandelt keine akute Unterzuckerung und ersetzt weder einen individuellen Plan für Messungen noch die ärztliche Anleitung bei Krankheitstagen.",
    daily: "Magen-Darm-Beschwerden wie Übelkeit, Durchfall oder Bauchschmerzen können auftreten. Bei starkem Durchfall, Erbrechen oder wenig Trinken ist Rücksprache wichtig.",
    sideEffects: "Die Nierenfunktion ist für die sichere Anwendung wichtig. Eine seltene, aber ernsthafte Komplikation ist eine Laktatazidose; ihr Risiko steigt unter anderem bei schwerer Nierenfunktionsstörung, Austrocknung oder schweren Erkrankungen.",
    urgent: "Bei starkem Krankheitsgefühl mit schneller oder tiefer Atmung, starker Müdigkeit, Bauchschmerz, Erbrechen oder Muskelkrämpfen sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Metformin HEXAL® 500 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/m/metformin-hexal-500mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "oxycodon",
    name: "Oxycodon",
    examples: "Referenzpräparat: Oxycodon-HCl HEXAL® 5 mg Retardtabletten",
    category: "Schmerzmittel",
    purpose: "Oxycodon ist ein starkes Opioid-Schmerzmittel zur Behandlung starker Schmerzen, wenn andere Schmerzmittel nicht ausreichend wirken.",
    does: "Es dämpft die Weiterleitung und Wahrnehmung von Schmerzen im Nervensystem.",
    doesNot: "Es behandelt nicht die Ursache der Schmerzen und heilt keine Entzündung, Bestrahlungsfolge oder Krebserkrankung.",
    daily: "Müdigkeit, Benommenheit, Schwindel und Verstopfung sind besonders wichtige Alltagsfolgen. Kein Alkohol; beim Autofahren und beim Aufstehen vorsichtig sein. Retardtabletten nicht teilen, zerkauen oder zerdrücken, sofern die konkrete Packungsbeilage es nicht ausdrücklich erlaubt.",
    sideEffects: "Oxycodon kann die Atmung gefährlich verlangsamen. Das Risiko steigt zusammen mit Alkohol, Schlaf- oder Beruhigungsmitteln und anderen Medikamenten, die dämpfen. Es kann zudem eine körperliche Abhängigkeit entstehen.",
    urgent: "Sofort den Notruf wählen bei sehr langsamer oder flacher Atmung, ungewöhnlicher Schläfrigkeit, fehlender Ansprechbarkeit oder bläulichen Lippen. Keine zusätzliche Dosis geben.",
    source: "Gebrauchsinformation: Oxycodon-HCl HEXAL® Retardtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/o/oxycodon-hcl-hexal-5mg-10mg-20mg-retardtabletten?schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "ondansetron",
    name: "Ondansetron",
    examples: "Referenzpräparat: Ondansetron Aristo® 4 mg Filmtabletten",
    category: "Mittel gegen Übelkeit",
    purpose: "Ondansetron wird eingesetzt, um Übelkeit und Erbrechen vorzubeugen oder zu behandeln, zum Beispiel im Zusammenhang mit einer Krebsbehandlung, Bestrahlung oder Operation.",
    does: "Es blockiert bestimmte Serotonin-Andockstellen (5-HT3-Rezeptoren), die Übelkeit und Erbrechen auslösen können.",
    doesNot: "Es beseitigt nicht die Ursache von Übelkeit, Erbrechen, Bauchschmerzen oder einer Schluckstörung. Neue oder starke Beschwerden müssen getrennt beurteilt werden.",
    daily: "Kopfschmerzen, Verstopfung oder ein Wärmegefühl können auftreten. Bei Verstopfung besonders aufmerksam sein, wenn zusätzlich ein Opioid-Schmerzmittel eingenommen wird.",
    sideEffects: "Ondansetron kann den Herzrhythmus beeinflussen, vor allem bei bestimmten Herzerkrankungen, verlangsamtem Herzschlag, Störungen der Blutsalze oder zusammen mit weiteren Arzneimitteln. Zusammen mit bestimmten Antidepressiva oder Buprenorphin besteht ein Risiko für ein Serotoninsyndrom.",
    urgent: "Bei Herzstolpern, Ohnmacht, Brustschmerz, starker Unruhe mit Zittern, Fieber und Muskelzucken oder bei einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Ondansetron Aristo® 4 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/o/ondansetron-aristo-4-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "bisoprolol",
    name: "Bisoprolol",
    examples: "Referenzpräparat: Biso Lich® 5 mg Filmtabletten",
    category: "Blutdrucksenker",
    purpose: "Bisoprolol wird bei Bluthochdruck, bestimmten Herzschmerzen und stabiler chronischer Herzschwäche eingesetzt.",
    does: "Es ist ein Betablocker. Es verlangsamt und entlastet das Herz; dadurch können Blutdruck und Herzarbeit sinken.",
    doesNot: "Es beendet keinen akuten Herzinfarkt, keine neue starke Atemnot und keinen plötzlich auftretenden Brustschmerz.",
    daily: "Müdigkeit, Schwindel oder ein langsamer Puls können das Reaktionsvermögen beeinträchtigen, besonders beim Start oder bei einer Dosisänderung. Nicht plötzlich selbst absetzen.",
    sideEffects: "Mögliche Nebenwirkungen sind ein zu langsamer Herzschlag, niedriger Blutdruck, Müdigkeit, Schwindel und kalte Hände oder Füße. Bei Diabetes können Warnzeichen einer Unterzuckerung weniger deutlich sein.",
    urgent: "Bei Ohnmacht, deutlich verlangsamtem Puls mit Beschwerden, zunehmender Atemnot, neuer Schwellung oder starkem Brustschmerz sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Biso Lich® 5 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/b/biso-lich-5mg",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "furosemid",
    name: "Furosemid",
    examples: "Referenzpräparat: Lasix® 40 mg Tabletten",
    category: "Wassertablette",
    purpose: "Furosemid ist ein stark entwässernder Wirkstoff. Er wird bei Flüssigkeitsansammlungen und je nach Situation auch bei Bluthochdruck eingesetzt.",
    does: "Er erhöht die Urinmenge und hilft so, überschüssige Flüssigkeit aus dem Körper auszuscheiden.",
    doesNot: "Er behandelt nicht die Ursache einer plötzlich auftretenden Atemnot, einer Herzschwäche oder rascher Gewichtszunahme.",
    daily: "Häufiger Harndrang ist zu erwarten. Schwindel, Durst oder Schwäche können Zeichen sein, dass Blutdruck, Flüssigkeit oder Salze aus dem Gleichgewicht geraten. Einnahmezeit und Trinkmenge nur wie verordnet festlegen.",
    sideEffects: "Furosemid kann den Salz- und Flüssigkeitshaushalt sowie die Nierenfunktion verändern. Bei hoher Dosierung oder schneller Entwässerung können Blutdruckabfall und Kreislaufprobleme auftreten.",
    urgent: "Bei Ohnmacht, Verwirrtheit, ausgeprägter Schwäche, sehr wenig Urin, Herzstolpern oder zunehmender Atemnot zeitnah medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Lasix® 40 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/lasix-40-mg-tabletten?kontrast=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "spironolacton",
    name: "Spironolacton",
    examples: "Referenzpräparat: Spironolacton – 1 A Pharma® 100 mg Tabletten",
    category: "Wassertablette",
    purpose: "Spironolacton wird eingesetzt, wenn der Körper zu viel Flüssigkeit zurückhält; es kann auch bei bestimmten Herz- oder Blutdruckerkrankungen verordnet werden.",
    does: "Es fördert die Ausscheidung von Wasser und Salz, hält aber Kalium im Körper zurück.",
    doesNot: "Es behandelt nicht die Ursache neuer Atemnot oder plötzlich zunehmender Schwellungen und ist kein Mittel zur Selbstentwässerung.",
    daily: "Regelmäßige Blutkontrollen sind wichtig, weil der Kaliumwert ansteigen kann. Kaliumpräparate oder kaliumhaltige Salzersatzmittel nicht ohne Rücksprache verwenden.",
    sideEffects: "Ein zu hoher Kaliumwert kann gefährlich sein. Möglich sind außerdem Schwindel, niedriger Blutdruck und – je nach Dosis und Dauer – Brustspannen oder Brustvergrößerung, besonders bei Männern.",
    urgent: "Bei ausgeprägter Muskelschwäche, Herzstolpern, Ohnmacht, Verwirrtheit oder deutlich weniger Urin sofort medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Spironolacton – 1 A Pharma® 100 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/spironolacton-1a-pharma-100mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "rivaroxaban",
    name: "Rivaroxaban",
    examples: "Referenzpräparat: Rivaroxaban – 1 A Pharma® 20 mg Filmtabletten",
    category: "Gerinnungshemmer",
    purpose: "Rivaroxaban wird eingesetzt, um Blutgerinnseln vorzubeugen oder sie zu behandeln, zum Beispiel bei Vorhofflimmern, Thrombose oder Lungenembolie.",
    does: "Es hemmt Faktor Xa, einen wichtigen Bestandteil der Blutgerinnung. Dadurch können sich Blutgerinnsel weniger leicht bilden.",
    doesNot: "Es behandelt nicht direkt Schmerzen oder Atemnot und darf nicht ohne ärztliche Anweisung unterbrochen, abgesetzt oder doppelt eingenommen werden.",
    daily: "Blutergüsse und längeres Nachbluten können leichter auftreten. Vor Operationen, Zahnbehandlungen und bei neuen Arzneimitteln immer mitteilen, dass Rivaroxaban eingenommen wird.",
    sideEffects: "Die wichtigste Nebenwirkung ist Blutung, etwa aus Nase oder Zahnfleisch, in Haut, Urin oder Magen-Darm-Trakt. Die passende Dosis hängt unter anderem von der Indikation und Nierenfunktion ab.",
    urgent: "Sofort Hilfe holen bei starker oder nicht stillbarer Blutung, Erbrechen von Blut, schwarzem Stuhl, Blut im Urin, plötzlich neurologischen Ausfällen oder nach einem Sturz auf den Kopf.",
    source: "Gebrauchsinformation: Rivaroxaban – 1 A Pharma® 15 mg / 20 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/r/rivaroxaban-1a-pharma-15mg-20mg-filmtabletten?kontrast=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "acetylsalicylsaeure-ass",
    name: "Acetylsalicylsäure (ASS)",
    examples: "Referenzpräparat: Aspirin® N 100 mg Tabletten",
    category: "Blutplättchenhemmer",
    purpose: "ASS in niedriger Dosierung wird häufig eingesetzt, um die Bildung bestimmter Blutgerinnsel zu verhindern und damit Herzinfarkt oder Schlaganfall vorzubeugen.",
    does: "Es hemmt die Blutplättchen. Dadurch haften sie weniger leicht zusammen.",
    doesNot: "ASS 100 mg ist nicht automatisch ein Schmerzmittel. Es behandelt keinen akuten Brustschmerz und darf bei einer verordneten Gerinnungsvorbeugung nicht eigenständig abgesetzt werden.",
    daily: "Blutergüsse oder längeres Nachbluten können leichter vorkommen. Andere Schmerzmittel – besonders Ibuprofen oder Diclofenac – nur nach Rücksprache dazu nehmen.",
    sideEffects: "Wichtig sind Magen-Darm-Beschwerden und Blutungen. Das Risiko steigt bei höherem Alter, früheren Geschwüren sowie zusammen mit Gerinnungshemmern, Kortison oder bestimmten Schmerzmitteln.",
    urgent: "Bei Erbrechen von Blut, schwarzem Stuhl, ungewöhnlich starker Blutung, Atemnot mit allergischer Schwellung oder nach einem Sturz auf den Kopf sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Aspirin® N 100 mg Tabletten, Stand März 2026",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/aspirin-n-100-mg",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "clopidogrel",
    name: "Clopidogrel",
    examples: "Referenzpräparat: Clopidogrel – 1 A Pharma® 75 mg Filmtabletten",
    category: "Blutplättchenhemmer",
    purpose: "Clopidogrel wird eingesetzt, um die Bildung von Blutgerinnseln in Arterien zu verhindern, zum Beispiel nach Herzinfarkt, Schlaganfall oder bei Durchblutungsstörungen.",
    does: "Es hemmt die Blutplättchen. Diese können dadurch weniger leicht zusammenhaften.",
    doesNot: "Es ist kein Schmerzmittel und darf nicht ohne Rücksprache abgesetzt werden – etwa vor einem Eingriff oder einer Zahnbehandlung.",
    daily: "Blutergüsse, Nasenbluten oder längeres Nachbluten können leichter auftreten. Behandelnde und Zahnärztin oder Zahnarzt vor Eingriffen informieren.",
    sideEffects: "Die wichtigste Nebenwirkung ist Blutung. Selten können auch schwere Blutungen oder Veränderungen des Blutbildes auftreten.",
    urgent: "Bei Blut im Erbrochenen, schwarzem Stuhl, Blut im Urin, nicht stillbarer Blutung, auffallender Blässe mit Schwäche oder Fieber mit punktförmigen Hautblutungen sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Clopidogrel – 1 A Pharma® 75 mg Filmtabletten, Stand Juni 2023",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/clopidogrel-1a-pharma-75mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "paracetamol",
    name: "Paracetamol",
    examples: "Referenzpräparat: Paracetamol 500 mg HEXAL® bei Fieber und Schmerzen",
    category: "Schmerzmittel",
    purpose: "Paracetamol wird zur symptomatischen Behandlung von leichten bis mäßig starken Schmerzen und Fieber eingesetzt.",
    does: "Es lindert Schmerzen und senkt Fieber.",
    doesNot: "Es behandelt nicht die Ursache von Schmerzen oder Fieber und wirkt nicht wie ein entzündungshemmendes Mittel gegen jede Schmerzursache.",
    daily: "Die Gesamtmenge aller paracetamolhaltigen Arzneimittel zusammen beachten – auch Erkältungs- oder Kombinationspräparate können Paracetamol enthalten. Bei länger als drei Tagen anhaltenden Beschwerden ärztlich abklären lassen.",
    sideEffects: "Bei richtiger Dosierung ist Paracetamol meist gut verträglich. Eine Überdosierung kann aber schwere, zunächst unbemerkte Leberschäden verursachen; bei Lebererkrankung, Unterernährung, Alkoholproblemen oder niedrigem Körpergewicht gelten besondere Vorsichtsmaßnahmen.",
    urgent: "Bei versehentlicher Einnahme von mehr als empfohlen sofort ärztliche Hilfe oder den Giftnotruf kontaktieren – auch wenn zunächst keine Beschwerden da sind.",
    source: "Gebrauchsinformation: Paracetamol 500 mg HEXAL® bei Fieber und Schmerzen (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/paracetamol-500mg-hexal-bei-fieber-und-schmerzen-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen",
    examples: "Referenzpräparat: ibuTAD® 400 mg gegen Schmerzen und Fieber",
    category: "Schmerzmittel",
    purpose: "Ibuprofen wird kurzzeitig gegen leichte bis mäßig starke Schmerzen und Fieber eingesetzt. Es wirkt zudem entzündungshemmend.",
    does: "Es lindert Schmerzen, senkt Fieber und bremst Entzündung.",
    doesNot: "Es behandelt nicht die Ursache von Beschwerden und ist bei Blutungsrisiko, bestimmten Magen-, Herz- oder Nierenerkrankungen nicht ohne Weiteres geeignet.",
    daily: "Bei älteren Menschen treten Nebenwirkungen im Magen-Darm-Bereich häufiger auf. Nicht ohne Rücksprache mit ASS, Apixaban, Rivaroxaban oder anderen Gerinnungshemmern kombinieren.",
    sideEffects: "Ibuprofen kann Magen- oder Darmgeschwüre und Blutungen, eine Verschlechterung der Nierenfunktion oder eine Erhöhung von Blutdruck und Herz-Kreislauf-Risiken verursachen. Möglichst niedrig dosiert und kurz anwenden.",
    urgent: "Bei schwarzem Stuhl, Erbrechen von Blut, starken Bauchschmerzen, Atemnot, allergischer Schwellung, deutlich weniger Urin oder Brustschmerz sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: ibuTAD® 400 mg gegen Schmerzen und Fieber (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/i/ibutadR-400-mg-gegen-schmerzen-und-fieber-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "esomeprazol",
    name: "Esomeprazol",
    examples: "Referenzpräparat: Esomeprazol TAD® 20 mg bei Sodbrennen",
    category: "Magensäurehemmer",
    purpose: "Esomeprazol wird eingesetzt, um Magensäure zu verringern, zum Beispiel bei Sodbrennen und saurem Aufstoßen durch Reflux.",
    does: "Es hemmt eine Säurepumpe im Magen. Dadurch wird weniger Magensäure gebildet.",
    doesNot: "Es klärt nicht die Ursache von Schluckbeschwerden, Blutungen, Gewichtsverlust oder länger bestehenden Schmerzen und wirkt nicht immer sofort.",
    daily: "Bei einer Selbstbehandlung mit 20 mg gilt: Wenn es nach zwei Wochen nicht besser wird oder sich verschlechtert, ärztlich abklären; ohne ärztlichen Rat nicht länger als vier Wochen anwenden.",
    sideEffects: "Mögliche Beschwerden sind Kopfschmerzen, Bauchschmerzen, Durchfall, Verstopfung, Blähungen oder Übelkeit. Bei langer Anwendung sollten Nutzen, Dauer und Wechselwirkungen regelmäßig überprüft werden.",
    urgent: "Bei Erbrechen von Blut, schwarzem Stuhl, zunehmenden Schluckbeschwerden, ungewolltem Gewichtsverlust, starker Brust- oder Bauchschmerz sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Esomeprazol TAD® 20 mg bei Sodbrennen (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/e/esomeprazol-tadR-20-mg-bei-sodbrennen-magensaftresistente-hartkapseln",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "lactulose",
    name: "Lactulose",
    examples: "Referenzpräparat: Lactulose HEXAL® Sirup",
    category: "Abführmittel",
    purpose: "Lactulose wird bei Verstopfung eingesetzt. Sie kann außerdem bei einer speziellen Lebererkrankung zur Behandlung erhöhter Ammoniakwerte verordnet werden.",
    does: "Sie bindet Wasser im Darm und macht den Stuhl weicher. Die Wirkung kann von Mensch zu Mensch unterschiedlich lange auf sich warten lassen.",
    doesNot: "Sie behandelt nicht die Ursache neuer, schwerer oder anhaltender Verstopfung und ist nicht geeignet, einen möglichen Darmverschluss selbst zu behandeln.",
    daily: "Blähungen, Bauchschmerzen oder Durchfall können auftreten. Bei zu hoher Dosis und anhaltendem Durchfall kann der Salz- und Flüssigkeitshaushalt gestört werden.",
    sideEffects: "Eine dauerhaft zu hohe Dosis kann zu Durchfall und Elektrolytstörungen führen. Bei Diabetes oder mehreren Medikamenten ist die konkrete Menge mit Apotheke oder Praxis abzustimmen.",
    urgent: "Bei starken Bauchschmerzen, Erbrechen, stark aufgeblähtem Bauch, Blut im Stuhl oder wenn weder Stuhl noch Winde abgehen: zeitnah medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Lactulose HEXAL® Sirup, Stand Februar 2026",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/lactulose-hexal-sirup?kontrast=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "tamsulosin",
    name: "Tamsulosin",
    examples: "Referenzpräparat: Tamsulosin Aurobindo® 0,4 mg Retardkapseln",
    category: "Urologisches Medikament",
    purpose: "Tamsulosin wird bei Männern zur Behandlung von Beschwerden beim Wasserlassen durch eine gutartige Vergrößerung der Prostata eingesetzt.",
    does: "Es entspannt Muskeln in Prostata und Harnröhre. Dadurch kann der Harn leichter abfließen und Harndrang kann nachlassen.",
    doesNot: "Es verkleinert die Prostata nicht und behandelt keinen Prostatakrebs. Blut im Urin, Schmerzen oder ein vollständiger Harnverhalt müssen getrennt abgeklärt werden.",
    daily: "Schwindel beim Aufstehen kann vorkommen; langsam aufrichten und auf Sturzgefahr achten. Retardkapseln immer so einnehmen, wie es die Packungsbeilage vorgibt, und nicht zerkauen.",
    sideEffects: "Mögliche Nebenwirkungen sind Schwindel, Blutdruckabfall beim Aufstehen und Ejakulationsstörungen. Vor einer geplanten Katarakt- oder Glaukom-Operation unbedingt die Augenpraxis informieren.",
    urgent: "Bei Ohnmacht, Schwellung von Gesicht, Lippen, Zunge oder Hals, Atemnot, Blut im Urin oder wenn gar kein Wasserlassen mehr möglich ist: sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Tamsulosin Aurobindo® 0,4 mg Retardkapseln (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/tamsulosin-aurobindo-04-mg-retardkapseln",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "tramadol",
    name: "Tramadol",
    examples: "Referenzpräparat: Tramal® Kapseln 50 mg",
    category: "Schmerzmittel",
    purpose: "Tramadol ist ein Opioid-Schmerzmittel zur Behandlung mäßig starker bis starker Schmerzen.",
    does: "Es dämpft die Schmerzwahrnehmung im Nervensystem.",
    doesNot: "Es behandelt nicht die Ursache der Schmerzen und heilt keine Bestrahlungsfolge, Entzündung oder Krebserkrankung.",
    daily: "Müdigkeit, Benommenheit, Schwindel, Übelkeit und Verstopfung können den Alltag stark beeinträchtigen. Kein Alkohol; beim Fahren und Aufstehen vorsichtig sein. Nicht eigenständig plötzlich absetzen.",
    sideEffects: "Tramadol kann die Atmung dämpfen, Krampfanfälle auslösen und abhängig machen. Zusammen mit Schlaf- oder Beruhigungsmitteln, Alkohol oder bestimmten Antidepressiva steigen Risiken; ein Serotoninsyndrom ist möglich.",
    urgent: "Sofort Notruf bei langsamer oder flacher Atmung, fehlender Ansprechbarkeit, Krampfanfall oder sehr starker Schläfrigkeit. Bei Unruhe, Fieber, Zittern und Muskelzucken ebenfalls dringend medizinisch abklären.",
    source: "Gebrauchsinformation: Tramal® Kapseln 50 mg, Stand Oktober 2025",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/tramal-kapseln-50-mg-hartkapseln/",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "empagliflozin",
    name: "Empagliflozin",
    examples: "Referenzpräparat: Jardiance® 10 mg Filmtabletten",
    category: "Diabetesmittel",
    purpose: "Empagliflozin wird bei Typ-2-Diabetes eingesetzt. Je nach Situation wird es außerdem bei Herzschwäche oder chronischer Nierenerkrankung verordnet.",
    does: "Es sorgt dafür, dass über die Nieren mehr Zucker mit dem Urin ausgeschieden wird. Dadurch kann der Blutzucker sinken.",
    doesNot: "Es ersetzt kein Insulin bei einem Insulinmangel und behandelt keine akute schwere Überzuckerung oder Ketoazidose.",
    daily: "Mehr Wasserlassen und Durst können auftreten. Auf ausreichende Flüssigkeit nach ärztlicher Vorgabe achten; bei Fieber, Durchfall, Erbrechen oder sehr wenig Trinken frühzeitig den persönlichen Krankheitstageplan beachten.",
    sideEffects: "Häufiger können Pilzinfektionen im Genitalbereich oder Harnwegsinfektionen auftreten. Selten kann eine Ketoazidose auch bei nicht sehr hohem Blutzucker entstehen; Risikoauslöser sind unter anderem Fasten, Alkohol, Austrocknung, Operationen und schwere Erkrankungen.",
    urgent: "Bei Übelkeit, Erbrechen, Bauchschmerzen, starker Müdigkeit, schneller oder tiefer Atmung oder süßlich riechendem Atem sofort medizinische Hilfe holen und auf Empagliflozin hinweisen.",
    source: "Gebrauchsinformation: Jardiance® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/j/jardianceR-filmtabletten?schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "dapagliflozin",
    name: "Dapagliflozin",
    examples: "Referenzpräparat: Forxiga® 10 mg Filmtabletten",
    category: "Diabetesmittel",
    purpose: "Dapagliflozin wird bei Typ-2-Diabetes eingesetzt; abhängig von der Erkrankung kann es auch bei Herzschwäche oder chronischer Nierenerkrankung verordnet werden.",
    does: "Es führt dazu, dass mehr Zucker über den Urin ausgeschieden wird. Dadurch sinkt der Blutzucker; außerdem kann es Herz und Nieren bei passenden Erkrankungen unterstützen.",
    doesNot: "Es ist kein Ersatz für eine akute Diabetesbehandlung und darf bei Krankheit, Fasten oder vor Eingriffen nicht ohne den persönlichen Plan weiter- oder abgesetzt werden.",
    daily: "Mehr Wasserlassen, Durst und ein niedrigerer Blutdruck können auftreten. Bei gleichzeitigen Wassertabletten, Durchfall oder Erbrechen ist das Risiko einer Austrocknung besonders wichtig.",
    sideEffects: "Möglich sind Genitalpilz- und Harnwegsinfektionen. Eine seltene Ketoazidose kann auch bei nur mäßig erhöhtem Blutzucker auftreten.",
    urgent: "Bei Übelkeit, Erbrechen, Bauchschmerz, starker Müdigkeit, Atemnot oder Verwirrtheit sofort medizinische Hilfe holen; bei Schmerzen, Rötung oder Schwellung im Genital- oder Dammbereich ebenfalls unverzüglich abklären lassen.",
    source: "Gebrauchsinformation: Forxiga® 5 mg / 10 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/forxigaR-5-mg--10-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "semaglutid",
    name: "Semaglutid",
    examples: "Referenzpräparat: Ozempic® 0,25 mg Injektionslösung im Fertigpen",
    category: "Diabetesmittel",
    purpose: "Semaglutid wird bei Erwachsenen mit Typ-2-Diabetes eingesetzt, wenn Ernährung und Bewegung allein nicht ausreichen. Je nach Präparat gibt es auch andere zugelassene Anwendungen.",
    does: "Es wirkt ähnlich wie ein körpereigenes Darmhormon: Es hilft, den Blutzucker bei hohem Wert zu senken, und kann das Sättigungsgefühl erhöhen.",
    doesNot: "Es ersetzt kein Insulin bei Typ-1-Diabetes und ist kein Mittel für eine akute Unter- oder Überzuckerung.",
    daily: "Übelkeit, Erbrechen, Durchfall, Verstopfung oder weniger Appetit sind besonders zu Beginn möglich. Die Pen-Anwendung nur genau nach Anleitung und nie mit anderen Personen teilen.",
    sideEffects: "Magen-Darm-Beschwerden können zur Austrocknung führen. Bei Kombination mit Insulin oder bestimmten anderen Diabetesmitteln kann das Risiko einer Unterzuckerung steigen. Starke anhaltende Bauchschmerzen müssen abgeklärt werden.",
    urgent: "Bei starken und anhaltenden Bauchschmerzen, mit oder ohne Erbrechen, sofort medizinische Hilfe holen. Bei Zeichen einer schweren Allergie oder einer Unterzuckerung mit Bewusstseinsstörung ebenfalls den Notruf wählen.",
    source: "Gebrauchsinformation: Ozempic® 0,25 mg Injektionslösung im Fertigpen (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/o/ozempicr-025-mg-injektionsloesung-im-fertigpen",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "insulin-glargin",
    name: "Insulin glargin",
    examples: "Referenzpräparat: Lantus® 100 Einheiten/ml Injektionslösung in einer Patrone",
    category: "Diabetesmittel",
    purpose: "Insulin glargin wird zur Behandlung von Diabetes eingesetzt, wenn der Körper nicht genügend Insulin bereitstellt.",
    does: "Es ist ein lang wirkendes Insulin und hilft, den Blutzucker über einen längeren Zeitraum zu senken.",
    doesNot: "Es dient nicht zur schnellen Korrektur einer akuten Unterzuckerung. Insulinpräparate, Pens und Dosen dürfen nicht eigenmächtig gewechselt werden.",
    daily: "Die verordnete Dosis, Injektionstechnik, Lagerung und Messplan sind entscheidend. Einstichstellen wechseln. Vor jeder Anwendung Insulin und Dosis am Pen prüfen.",
    sideEffects: "Die wichtigste Gefahr ist Unterzuckerung. Warnzeichen können Schwitzen, Zittern, Herzklopfen, Hunger, Kopfschmerzen, Verwirrtheit oder ungewöhnliches Verhalten sein. Auch Reaktionen an der Einstichstelle sind möglich.",
    urgent: "Bei Bewusstseinsstörung, Krampfanfall oder wenn die Person nicht sicher schlucken kann: Notruf wählen und nichts zu essen oder trinken geben. Bei sehr hohen Werten mit Übelkeit, Erbrechen oder tiefer Atmung ebenfalls sofort Hilfe holen.",
    source: "Gebrauchsinformation: Lantus® 100 Einheiten/ml Injektionslösung in einer Patrone (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/lantusR-100-einheitenml-injektionsloesung-in-einer-patrone?kontrast=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "salbutamol",
    name: "Salbutamol",
    examples: "Referenzpräparat: Salbutamol – 1 A Pharma® 0,1 mg Dosieraerosol",
    category: "Atemwegsmedikament",
    purpose: "Salbutamol wird zur raschen Behandlung von Atemnot durch verengte Bronchien eingesetzt, zum Beispiel bei Asthma oder COPD.",
    does: "Es erweitert die Bronchien schnell und erleichtert so das Atmen.",
    doesNot: "Es behandelt die zugrunde liegende Entzündung bei dauerhaftem Asthma nicht allein. Ein steigender Bedarf ist ein Warnzeichen und keine Aufforderung, die Dosis selbst dauerhaft zu erhöhen.",
    daily: "Die richtige Inhalationstechnik ist entscheidend. Zittern, Herzklopfen oder Unruhe können vorkommen. Ein Inhalationsgerät mitbringen und die Technik in der Apotheke prüfen lassen.",
    sideEffects: "Möglich sind Herzrasen, Zittern, Kopfschmerzen, Muskelkrämpfe und eine Senkung des Kaliumwerts. Selten kann die Atemnot direkt nach der Inhalation stärker werden.",
    urgent: "Bei einer Atemnot, die sich nach den verordneten Sprühstößen nicht deutlich bessert oder rasch wiederkommt, sofort ärztliche Hilfe holen. Bei plötzlich stärkerem Giemen direkt nach der Inhalation Anwendung stoppen und sofort abklären lassen.",
    source: "Gebrauchsinformation: Salbutamol – 1 A Pharma® 0,1 mg Druckgasinhalation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/salbutamol-1a-pharma-01mg-druckgasinhalation-suspension-dosieraerosol?schrift=0.7",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "budesonid",
    name: "Budesonid",
    examples: "Referenzpräparat: Budesonid Easyhaler® 0,4 mg/Dosis Pulver zur Inhalation",
    category: "Atemwegsmedikament",
    purpose: "Inhaliertes Budesonid ist ein entzündungshemmendes Kortisonmittel zur Dauerbehandlung von Asthma. Die genaue Anwendung hängt von Darreichungsform und Erkrankung ab.",
    does: "Es bremst die Entzündung in den Atemwegen und hilft, Asthma langfristig besser zu kontrollieren.",
    doesNot: "Es beendet keinen akuten Asthmaanfall. Dafür ist ein schnell wirksamer Bronchienerweiterer nach dem persönlichen Behandlungsplan nötig.",
    daily: "Regelmäßig anwenden, auch wenn es gerade besser geht, und nicht eigenständig absetzen. Nach der Inhalation den Mund mit Wasser ausspülen und ausspucken, um Mundsoor und Heiserkeit vorzubeugen.",
    sideEffects: "Häufig sind Heiserkeit, Reizung im Rachen oder Pilzinfektionen im Mund. Bei hoher Dosis und langer Anwendung können Kortisonwirkungen im ganzen Körper relevanter werden.",
    urgent: "Bei Atemnot, die sich unmittelbar nach der Inhalation verschlechtert, Anwendung stoppen und sofort medizinische Hilfe holen. Bei Schwellung von Gesicht oder Hals, Ausschlag oder Kreislaufproblemen ebenfalls Notfallhilfe rufen.",
    source: "Gebrauchsinformation: Budesonid Easyhaler® 0,4 mg/Dosis Pulver zur Inhalation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/b/budesonid-easyhaler-04-mgdosis-pulver-zur-inhalation",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "tiotropium",
    name: "Tiotropium",
    examples: "Referenzpräparat: Spiriva® 18 Mikrogramm Hartkapseln mit Pulver zur Inhalation",
    category: "Atemwegsmedikament",
    purpose: "Tiotropium wird als Dauertherapie bei COPD und – je nach Präparat – auch bei Asthma eingesetzt, um die Atmung zu erleichtern.",
    does: "Es hält die Bronchien über längere Zeit weiter. Dadurch können Atemnot und Verschlechterungen seltener werden.",
    doesNot: "Es ist kein Notfallspray für einen akuten Anfall von Atemnot.",
    daily: "Die Kapseln des Referenzpräparats dürfen nicht geschluckt werden: Sie sind nur zur Inhalation mit dem zugehörigen Gerät bestimmt. Inhalationstechnik unbedingt praktisch zeigen lassen.",
    sideEffects: "Häufig kann Mundtrockenheit auftreten. Möglich sind auch Verstopfung, Probleme beim Wasserlassen, Herzklopfen oder verschwommenes Sehen – besonders bei versehentlichem Kontakt des Pulvers mit den Augen.",
    urgent: "Bei plötzlich stärkerer Atemnot, Augenschmerz oder roten Augen mit verschwommenem Sehen, einem schmerzhaften Harnverhalt oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Spiriva® 18 Mikrogramm Hartkapseln mit Pulver zur Inhalation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/spirivaR-18-mikrogramm-hartkapseln-mit-pulver-zur-inhalation?schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "abirateron",
    name: "Abirateron",
    examples: "Referenzpräparat: Abirateron Mylan® 500 mg Filmtabletten",
    category: "Krebstherapie",
    purpose: "Abirateron wird bei erwachsenen Männern mit metastasiertem Prostatakrebs eingesetzt.",
    does: "Es bremst die Bildung von Testosteron. Dadurch kann sich das Wachstum hormonabhängiger Prostatakrebszellen verlangsamen.",
    doesNot: "Es ist kein Schmerzmittel und behandelt nicht direkt akute Beschwerden wie Schluckprobleme, Atemnot oder Schmerzen durch eine Metastase.",
    daily: "Die Einnahme muss genau nach den Vorgaben zum Essen erfolgen; Nahrung kann die Wirkstoffaufnahme deutlich verändern. Abirateron wird üblicherweise zusammen mit einer Testosteron senkenden Therapie und Prednison oder Prednisolon angewendet. Keines davon selbst absetzen.",
    sideEffects: "Wichtig sind hoher Blutdruck, Flüssigkeitseinlagerungen, ein niedriger Kaliumwert, Leberprobleme und Herzprobleme. Blutdruck und Blutwerte werden deshalb regelmäßig kontrolliert.",
    urgent: "Bei starker Muskelschwäche, Herzstolpern, deutlicher Schwellung oder Atemnot, Gelbfärbung von Haut oder Augen, dunklem Urin oder schwerem Krankheitsgefühl sofort das onkologische Team beziehungsweise medizinische Hilfe kontaktieren.",
    source: "Gebrauchsinformation: Abirateron Mylan® 500 mg / 1000 mg Filmtabletten, Stand Januar 2026",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/abirateron-mylan",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "denosumab",
    name: "Denosumab",
    examples: "Referenzpräparat: Prolia® 60 mg Injektionslösung in einer Fertigspritze",
    category: "Knochen-Schutz / Krebstherapie",
    purpose: "Denosumab wird – je nach Präparat und Dosis – gegen Osteoporose, Knochenschwund oder bei bestimmten Knochenproblemen im Zusammenhang mit Krebs eingesetzt.",
    does: "Es bremst Zellen, die Knochen abbauen. Dadurch kann die Knochenstärke zunehmen und das Risiko bestimmter Knochenbrüche sinken.",
    doesNot: "Es behandelt keinen akuten Knochenschmerz und ersetzt nicht die Abklärung neuer starker Rücken-, Hüft- oder Kieferschmerzen.",
    daily: "Die Spritze wird nach dem individuellen Plan durch geschultes Personal oder nach Einweisung angewendet. Calcium und Vitamin D nur so ergänzen, wie es das Behandlungsteam festlegt. Zahnpflege und Zahnarzttermine sind wichtig.",
    sideEffects: "Der Calciumwert kann zu niedrig werden. Selten können schwere Hautinfektionen oder Kieferknochenprobleme auftreten; das Risiko hängt auch von Dosis, Grunderkrankung und Zahnbehandlungen ab.",
    urgent: "Bei Kribbeln um Mund oder in Fingern, Muskelkrämpfen, Verwirrtheit, Krampfanfall, Fieber mit schmerzhafter roter Haut oder Schmerzen/Schwellung/nicht heilenden Wunden im Mund oder Kiefer sofort medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Prolia® 60 mg Injektionslösung in einer Fertigspritze (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/prolia-60-mg-injektionsloesung-in-einer-fertigspritze",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "zoledronsaeure",
    name: "Zoledronsäure",
    examples: "Referenzpräparat: Zoledronsäure – 1 A Pharma® 4 mg/5 ml Infusionslösungskonzentrat",
    category: "Knochen-Schutz / Krebstherapie",
    purpose: "Zoledronsäure wird – abhängig von Dosis und Präparat – bei Knochenabbau, Osteoporose oder Knochenkomplikationen bei Krebserkrankungen eingesetzt.",
    does: "Sie bremst den Knochenabbau. Bei Knochenmetastasen kann sie helfen, bestimmte Komplikationen am Knochen zu verhindern oder zu verzögern.",
    doesNot: "Sie ist kein Schmerzmittel für sofortige Wirkung und ersetzt nicht die Abklärung neuer Knochenschmerzen, Taubheitsgefühle oder Lähmungszeichen.",
    daily: "Die Infusion wird durch medizinisches Fachpersonal gegeben. Nierenwerte und Flüssigkeitshaushalt sind wichtig. Vor Beginn und während der Behandlung auf gute Zahnpflege und regelmäßige Kontrollen achten.",
    sideEffects: "Nach der Infusion können grippeähnliche Beschwerden auftreten. Wichtig sind außerdem niedrige Calciumwerte, Nierenprobleme und selten eine Schädigung des Kieferknochens.",
    urgent: "Bei Schmerzen, Schwellung, Taubheitsgefühl oder nicht heilenden Wunden im Mund/Kiefer, lockeren Zähnen, starken Muskelkrämpfen, auffallend wenig Urin oder Atemnot sofort das Behandlungsteam informieren.",
    source: "Gebrauchsinformation: Zoledronsäure – 1 A Pharma® 4 mg/5 ml Infusionslösungskonzentrat, Stand Juli 2024",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/xyz/zoledronsaeure-1a-pharma-4mg5ml-infusionsloesungskonzentrat",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "enalapril",
    name: "Enalapril",
    examples: "Referenzpräparat: Enalapril 5 – 1 A Pharma® Tabletten",
    category: "Blutdrucksenker",
    purpose: "Enalapril wird gegen Bluthochdruck und bei bestimmten Herz- oder Nierenerkrankungen eingesetzt.",
    does: "Es gehört zu den ACE-Hemmern. Es entspannt Blutgefäße und kann dadurch Blutdruck und Herzarbeit senken.",
    doesNot: "Es behandelt keinen akuten Brustschmerz, keine plötzlich auftretende Atemnot und nicht die Ursache des Bluthochdrucks.",
    daily: "Schwindel oder Schwäche können besonders zu Beginn auftreten; langsam aufstehen. Ein trockener Reizhusten ist möglich. Blutdruck, Nierenfunktion und Kalium werden je nach Situation kontrolliert.",
    sideEffects: "Wichtig sind niedriger Blutdruck, Husten, Veränderungen von Nierenfunktion oder Kaliumwert. Selten können schwere Schwellungen im Gesicht oder Hals auftreten.",
    urgent: "Bei Schwellung von Gesicht, Lippen, Zunge oder Hals, Atemnot, Ohnmacht oder sehr starker Schwäche sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Enalapril 5 – 1 A Pharma® Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/e/enalapril-5-1a-pharma-tabletten?schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "valsartan",
    name: "Valsartan",
    examples: "Referenzpräparat: Valsartan dura® 80 mg Filmtabletten",
    category: "Blutdrucksenker",
    purpose: "Valsartan wird gegen Bluthochdruck eingesetzt; je nach Situation auch bei Herzschwäche oder nach Herzinfarkt.",
    does: "Es blockiert die Wirkung von Angiotensin II. Dadurch erweitern sich Blutgefäße und der Blutdruck kann sinken.",
    doesNot: "Es ist kein Mittel gegen akute Atemnot oder Brustschmerz und ersetzt keine Untersuchung neuer Beschwerden.",
    daily: "Schwindel, besonders beim Aufstehen, kann auftreten. Nierenfunktion, Blutdruck und Elektrolyte können kontrolliert werden. Kaliumpräparate nur nach Rücksprache.",
    sideEffects: "Möglich sind niedriger Blutdruck, Veränderungen der Nierenfunktion und ein zu hoher Kaliumwert. Selten können allergische Schwellungen auftreten.",
    urgent: "Bei Ohnmacht, starkem Schwindel, Schwellung von Gesicht oder Hals, Atemnot, Herzstolpern oder deutlich weniger Urin sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Valsartan dura® 80 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/uv/valsartan-dura-80-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "metoprolol",
    name: "Metoprolol",
    examples: "Referenzpräparat: Metoprololsuccinat dura® 47,5 mg Retardtabletten",
    category: "Blutdrucksenker",
    purpose: "Metoprolol wird unter anderem bei Bluthochdruck, koronarer Herzkrankheit, bestimmten Herzrhythmusstörungen und Herzschwäche eingesetzt.",
    does: "Es ist ein Betablocker. Es bremst bestimmte Nervenimpulse am Herzen und kann Blutdruck senken sowie die Herzarbeit entlasten.",
    doesNot: "Es beendet keinen akuten Herzinfarkt, keine neu auftretende starke Atemnot und keinen akuten Brustschmerz.",
    daily: "Müdigkeit, Schwindel und ein langsamer Puls können vorkommen. Retardtabletten nicht zerkauen oder zerkleinern. Nicht plötzlich ohne ärztlichen Plan absetzen.",
    sideEffects: "Mögliche Nebenwirkungen sind langsamer Herzschlag, niedriger Blutdruck, kalte Hände/Füße und Müdigkeit. Bei Diabetes können Warnzeichen einer Unterzuckerung weniger deutlich sein.",
    urgent: "Bei Ohnmacht, sehr langsamem Puls mit Beschwerden, zunehmender Atemnot, Brustschmerz oder neuer starker Schwellung sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Metoprololsuccinat dura® 47,5 mg Retardtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/m/metoprololsuccinat-dura-475-mg-retardtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "torasemid",
    name: "Torasemid",
    examples: "Referenzpräparat: Torasemid HEXAL® 5 mg Tabletten",
    category: "Wassertablette",
    purpose: "Torasemid wird bei Bluthochdruck und bei Flüssigkeitsansammlungen im Körper eingesetzt.",
    does: "Es ist ein harntreibendes Mittel und erhöht die Urinausscheidung. Dadurch können Wassereinlagerungen und Blutdruck abnehmen.",
    doesNot: "Es behandelt nicht die Ursache einer neuen Atemnot, Herzschwäche oder rasch zunehmenden Gewichtszunahme.",
    daily: "Häufigerer Harndrang ist erwartbar. Schwindel oder Schläfrigkeit können besonders zu Beginn oder bei Dosisänderung auftreten. Einnahmezeit und Trinkmenge nur wie verordnet festlegen.",
    sideEffects: "Torasemid kann den Flüssigkeits- und Salzhaushalt sowie Nierenwerte verändern. Blutkontrollen sind bei dauerhafter Einnahme wichtig.",
    urgent: "Bei Ohnmacht, Verwirrtheit, starkem Durst mit Schwäche, Herzstolpern, Muskelkrämpfen, sehr wenig Urin oder zunehmender Atemnot zeitnah medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Torasemid HEXAL® 5 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/torasemid-hexal-5mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "rosuvastatin",
    name: "Rosuvastatin",
    examples: "Referenzpräparat: Rosuvastatin HEXAL® 10 mg Filmtabletten",
    category: "Cholesterinsenker",
    purpose: "Rosuvastatin wird eingesetzt, um erhöhte Cholesterinwerte zu senken und das Risiko für Herz-Kreislauf-Ereignisse bei passenden Risikofaktoren zu vermindern.",
    does: "Es gehört zu den Statinen und hilft dem Körper, weniger Cholesterin zu bilden.",
    doesNot: "Es behandelt keinen akuten Brustschmerz oder Herzinfarkt und ersetzt Ernährung, Bewegung oder andere vereinbarte Maßnahmen nicht.",
    daily: "Die Wirkung ist vorbeugend und nicht unmittelbar spürbar. Bei Muskelschmerzen, Muskelschwäche oder Krämpfen nicht einfach abwarten, sondern Rücksprache halten.",
    sideEffects: "Wichtig sind Muskelbeschwerden und selten schwere Muskelprobleme. Leber- oder Nierenfunktion sowie Wechselwirkungen können bei Bedarf überprüft werden.",
    urgent: "Bei unerklärlichen starken Muskelschmerzen oder Muskelschwäche, besonders mit Fieber, Unwohlsein oder dunklem Urin, umgehend ärztlich abklären lassen.",
    source: "Gebrauchsinformation: Rosuvastatin HEXAL® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/r/rosuvastatin-hexal-5mg-10mg-20mg-40mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "sitagliptin",
    name: "Sitagliptin",
    examples: "Referenzpräparat: Sitagliptin Mylan® 100 mg Filmtabletten",
    category: "Diabetesmittel",
    purpose: "Sitagliptin wird bei Erwachsenen mit Typ-2-Diabetes zur Blutzuckerregulierung eingesetzt.",
    does: "Es ist ein DPP-4-Hemmer. Nach einer Mahlzeit hilft es, den Insulinspiegel zu erhöhen und die Zuckerproduktion des Körpers zu senken.",
    doesNot: "Es ersetzt kein Insulin bei Typ-1-Diabetes und behandelt keine akute Unterzuckerung oder diabetische Ketoazidose.",
    daily: "Alle Diabetesmedikamente, Messwerte und den individuellen Plan zusammen betrachten. Bei eingeschränkter Nierenfunktion kann eine andere Dosis nötig sein.",
    sideEffects: "Unterzuckerungen sind vor allem in Kombination mit Insulin oder bestimmten anderen Diabetesmitteln möglich. Starke Bauchschmerzen, allergische Reaktionen oder starke Gelenkschmerzen müssen ärztlich abgeklärt werden.",
    urgent: "Bei starken, anhaltenden Bauchschmerzen mit oder ohne Erbrechen, Schwellung von Gesicht oder Hals, Atemnot oder Bewusstseinsstörung sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Sitagliptin Mylan® 25 mg / 50 mg / 100 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/sitagliptin-mylan",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "diclofenac",
    name: "Diclofenac",
    examples: "Referenzpräparat: Diclo 50 – 1 A Pharma® magensaftresistente Tabletten",
    category: "Schmerzmittel",
    purpose: "Diclofenac wird gegen Schmerzen und Entzündung eingesetzt, zum Beispiel bei entzündlichen Gelenk- oder Rückenschmerzen.",
    does: "Es lindert Schmerzen und Entzündung und kann Fieber senken.",
    doesNot: "Es behandelt nicht die Ursache von Schmerzen und ist bei Blutungsrisiko, Magenproblemen, Herz-Kreislauf- oder Nierenerkrankungen nicht ohne Weiteres geeignet.",
    daily: "Tabletten und Gel sind nicht gleich: Diese Karte bezieht sich auf magensaftresistente Tabletten. Nicht eigenständig mit Ibuprofen, ASS oder Gerinnungshemmern kombinieren.",
    sideEffects: "Diclofenac kann Magen-Darm-Geschwüre und Blutungen, Nierenprobleme sowie Herz-Kreislauf-Risiken verursachen. Möglichst niedrig dosiert und kurz anwenden.",
    urgent: "Bei schwarzem Stuhl, Erbrechen von Blut, starken Bauchschmerzen, Brustschmerz, Atemnot, allergischer Schwellung oder deutlich weniger Urin sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Diclo 50 – 1 A Pharma® 50 mg magensaftresistente Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/diclo-50-1a-pharma-tabletten-magensaftresistent?schrift=0.7",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "pregabalin",
    name: "Pregabalin",
    examples: "Referenzpräparat: Pregabalin Mylan® 75 mg Hartkapseln",
    category: "Nervenschmerzmittel",
    purpose: "Pregabalin wird unter anderem bei Nervenschmerzen, Epilepsie und generalisierten Angststörungen eingesetzt.",
    does: "Es beeinflusst die Reizweiterleitung im Nervensystem und kann dadurch Nervenschmerzen oder bestimmte Anfälle verringern.",
    doesNot: "Es behandelt nicht die Ursache eines Nervenschmerzes und ist kein gewöhnliches Schmerzmittel für sofortige Wirkung.",
    daily: "Müdigkeit, Schwindel und Benommenheit können den Alltag und die Sturzgefahr deutlich beeinflussen. Kein Alkohol und besonders vorsichtig mit Opioiden oder Beruhigungsmitteln; nicht plötzlich selbst absetzen.",
    sideEffects: "Möglich sind Schläfrigkeit, Schwindel, Sehstörungen, Gewichtszunahme und Wassereinlagerungen. In Kombination mit dämpfenden Mitteln kann die Atmung gefährlich beeinträchtigt werden.",
    urgent: "Bei langsamer oder flacher Atmung, fehlender Ansprechbarkeit, Schwellung von Gesicht oder Hals, Suizidgedanken oder starker Verwirrtheit sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Pregabalin Mylan® 75 mg Hartkapseln (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/pregabalin-mylan-75-mg-hartkapseln?drucken=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "dexamethason",
    name: "Dexamethason",
    examples: "Referenzpräparat: Dexamethason 4 mg JENAPHARM® Tabletten",
    category: "Kortison",
    purpose: "Dexamethason ist ein stark wirksames Kortisonmittel. Es wird bei vielen unterschiedlichen Erkrankungen eingesetzt, zum Beispiel bei Schwellungen, starken Entzündungen, allergischen Reaktionen oder als Teil einer Krebstherapie.",
    does: "Es bremst Entzündungs- und Abwehrreaktionen und kann Schwellungen verringern.",
    doesNot: "Es behandelt nicht die Ursache jeder Erkrankung und darf nach längerer Einnahme nicht plötzlich eigenständig abgesetzt werden.",
    daily: "Die Dosis und Dauer sind sehr individuell. Dexamethason kann Schlaf, Stimmung und Blutzucker verändern; bei Diabetes häufiger messen nach dem persönlichen Plan. Einnahme genau nach Verordnung.",
    sideEffects: "Möglich sind erhöhte Infektanfälligkeit, hoher Blutzucker, Magenbeschwerden, Unruhe oder Stimmungsschwankungen. Bei längerer Anwendung kommen weitere Kortisonrisiken wie Knochenschwund hinzu.",
    urgent: "Bei Fieber oder deutlichen Infektzeichen, schwarzem Stuhl oder Bluterbrechen, starker psychischer Veränderung, Sehstörung oder schwerer allergischer Reaktion umgehend medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Dexamethason 4 mg JENAPHARM® Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/dexamethason-4-mg-jenapharmr?drucken=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "allopurinol",
    name: "Allopurinol",
    examples: "Referenzpräparat: Allopurinol Aristo® 300 mg Tabletten",
    category: "Gichtmittel",
    purpose: "Allopurinol wird eingesetzt, um einen dauerhaft zu hohen Harnsäurewert zu senken und damit Gichtanfällen oder bestimmten Harnsäuresteinen vorzubeugen.",
    does: "Es hemmt die Bildung von Harnsäure. Die Wirkung ist vorbeugend und baut sich über Zeit auf.",
    doesNot: "Es ist kein Schmerzmittel für einen akuten Gichtanfall und sollte nicht wegen eines Anfalls selbständig begonnen, abgesetzt oder umdosiert werden.",
    daily: "Regelmäßig und nach dem verordneten Plan einnehmen; ausreichend trinken, sofern medizinisch nichts dagegen spricht. Bei Nieren- oder Leberproblemen kann eine Anpassung nötig sein.",
    sideEffects: "Ein Hautausschlag muss ernst genommen werden, weil selten schwere Hautreaktionen auftreten können. Auch Blutbild, Leber und Nieren können bei Bedarf kontrolliert werden.",
    urgent: "Bei Hautausschlag, Blasen, wunden Schleimhäuten, Fieber, Schwellung im Gesicht oder Atemnot Allopurinol nicht weiter einnehmen und sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Allopurinol Aristo® 300 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/allopurinol-aristo-300-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "dabigatran",
    name: "Dabigatran",
    examples: "Referenzpräparat: Dabigatran TAD® 150 mg Hartkapseln",
    category: "Gerinnungshemmer",
    purpose: "Dabigatran wird eingesetzt, um Schlaganfällen und Blutgerinnseln vorzubeugen oder Thrombosen und Lungenembolien zu behandeln.",
    does: "Es hemmt einen wichtigen Teil der Blutgerinnung und vermindert so die Bildung von Blutgerinnseln.",
    doesNot: "Es behandelt keine akute Atemnot oder Schmerzen und darf nicht selbständig abgesetzt, unterbrochen oder doppelt eingenommen werden.",
    daily: "Die Kapseln im Ganzen schlucken und andere Behandelnde vor Eingriffen informieren. Blutergüsse und längeres Nachbluten können leichter auftreten.",
    sideEffects: "Die wichtigste Nebenwirkung ist Blutung, etwa in Haut, Urin oder Magen-Darm-Trakt. Alter, Nierenfunktion und andere Arzneimittel beeinflussen das Blutungsrisiko.",
    urgent: "Bei starker Blutung, schwarzem Stuhl, Bluterbrechen, Blut im Urin, plötzlichen neurologischen Ausfällen oder nach Kopfsturz sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Dabigatran TAD® 150 mg Hartkapseln, Stand Juli 2025",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/dabigatran-tadR-150mg-hartkapseln",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "phenprocoumon",
    name: "Phenprocoumon",
    examples: "Referenzpräparat: Phenprocoumon acis® 3 mg Tabletten",
    category: "Gerinnungshemmer",
    purpose: "Phenprocoumon wird zur Behandlung und Vorbeugung von Thrombosen und Embolien eingesetzt.",
    does: "Es hemmt die Bildung bestimmter Gerinnungsfaktoren. Die Wirkung wird über den INR-Wert gesteuert.",
    doesNot: "Es ist kein Schmerzmittel und darf weder nach einem festen Schema selbst angepasst noch ohne Rücksprache abgesetzt werden.",
    daily: "Regelmäßige INR-Kontrollen sind zwingend. Neue Medikamente, Nahrungsergänzungsmittel, Antibiotika, Krankheiten und Änderungen der Ernährung können die Wirkung verändern.",
    sideEffects: "Die wichtigste Nebenwirkung ist Blutung. Zu wenig Wirkung kann Blutgerinnsel begünstigen, zu viel Wirkung erhöht das Blutungsrisiko.",
    urgent: "Bei starken Blutungen, schwarzem Stuhl, Bluterbrechen, Blut im Urin, starker neuer Kopfschmerz, Lähmung oder nach einem Sturz auf den Kopf sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Phenprocoumon acis® 3 mg Tabletten, Stand April 2026",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/phenprocoumon-acisR-3-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "fentanyl",
    name: "Fentanyl",
    examples: "Referenzpräparat: Fentanyl Mylan® 25 Mikrogramm/Stunde transdermales Pflaster",
    category: "Schmerzmittel",
    purpose: "Fentanyl-Pflaster werden zur dauerhaften Behandlung starker und lang anhaltender Schmerzen eingesetzt.",
    does: "Das starke Opioid wird über die Haut langsam ins Blut abgegeben und dämpft die Schmerzwahrnehmung.",
    doesNot: "Das Pflaster ist nicht für akute, plötzlich auftretende Schmerzen geeignet und behandelt nicht deren Ursache.",
    daily: "Pflaster nur nach dem genauen Wechselplan aufkleben. Wärmequellen wie Heizkissen, Sauna oder sehr heiße Bäder können die Wirkstoffaufnahme gefährlich erhöhen. Gebrauchte Pflaster sicher falten und kindersicher entsorgen.",
    sideEffects: "Müdigkeit, Benommenheit, Übelkeit und Verstopfung sind häufig. Gefährlich sind besonders eine verlangsamte Atmung und starke Schläfrigkeit; Alkohol, Schlafmittel und Beruhigungsmittel verstärken das Risiko.",
    urgent: "Sofort Notruf bei langsamer/flacher Atmung, fehlender Ansprechbarkeit oder bläulichen Lippen. Pflaster entfernen, aber keine weitere Dosis geben; Kinder von jedem Pflaster fernhalten.",
    source: "Gebrauchsinformation: Fentanyl Mylan® 25 Mikrogramm/Stunde transdermales Pflaster, Stand Mai 2026",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/fentanyl-mylan-25-mikrogrammstunde-transdermales-pflaster",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "buprenorphin",
    name: "Buprenorphin",
    examples: "Referenzpräparat: Buprenorphin Libra-Pharm® 4 Tage 35 Mikrogramm/Stunde Pflaster",
    category: "Schmerzmittel",
    purpose: "Buprenorphin-Pflaster werden bei mäßig starken bis starken, lang anhaltenden Schmerzen eingesetzt, zum Beispiel bei Tumorschmerzen.",
    does: "Das Opioid gelangt durch die Haut ins Blut und dämpft die Schmerzwahrnehmung im Nervensystem.",
    doesNot: "Das Referenzpflaster ist nicht für akute, kurz andauernde Schmerzen geeignet und behandelt nicht deren Ursache.",
    daily: "Das Pflaster nur nach dem individuellen Wechselplan anwenden. Wärme kann die Aufnahme erhöhen. Nicht ohne ärztlichen Plan absetzen oder mit Alkohol, Schlaf- oder Beruhigungsmitteln kombinieren.",
    sideEffects: "Müdigkeit, Schwindel, Übelkeit, Verstopfung und Hautreaktionen können auftreten. Wie bei anderen Opioiden kann die Atmung gefährlich gedämpft werden und eine Abhängigkeit entstehen.",
    urgent: "Bei langsamer/flacher Atmung, fehlender Ansprechbarkeit, schwerer allergischer Reaktion oder extremer Benommenheit sofort Notruf wählen und das Behandlungsteam informieren.",
    source: "Gebrauchsinformation: Buprenorphin Libra-Pharm® 4 Tage 35 Mikrogramm/Stunde Pflaster (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/b/buprenorphin-libra-pharm-4-tage-35-mikrogrammstunde-transdermales-pflaster",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "tilidin-naloxon",
    name: "Tilidin / Naloxon",
    examples: "Referenzpräparat: Tilidin 50/4 retard – 1 A Pharma® Retardtabletten",
    category: "Schmerzmittel",
    purpose: "Die Kombination Tilidin/Naloxon wird zur Behandlung starker bis sehr starker Schmerzen eingesetzt.",
    does: "Tilidin ist ein Opioid-Schmerzmittel. Naloxon ist in dieser Kombination enthalten, um einen Missbrauch durch falsche Anwendung zu erschweren.",
    doesNot: "Es behandelt nicht die Ursache der Schmerzen und ist kein Mittel zur Selbstbehandlung akuter Beschwerden ohne ärztlichen Plan.",
    daily: "Retardtabletten nicht zerkauen oder zerkleinern. Müdigkeit, Schwindel und Verstopfung können Sturz- und Unfallrisiko erhöhen. Kein Alkohol und keine zusätzliche dämpfende Medikation ohne Rücksprache.",
    sideEffects: "Möglich sind Übelkeit, Müdigkeit, Benommenheit und Verstopfung. Bei Überdosierung oder Kombination mit Alkohol, Schlaf- oder Beruhigungsmitteln kann die Atmung gefährlich verlangsamt werden.",
    urgent: "Bei langsamer/flacher Atmung, fehlender Ansprechbarkeit, Krampfanfall oder schwerer allergischer Reaktion sofort den Notruf wählen.",
    source: "Gebrauchsinformation: Tilidin 50/4 retard – 1 A Pharma® Retardtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/tilidin-504-retard-1a-pharma-retard-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "omeprazol",
    name: "Omeprazol",
    examples: "Referenzpräparat: Omeprazol Mylan® 20 mg magensaftresistente Hartkapseln",
    category: "Magensäurehemmer",
    purpose: "Omeprazol verringert Magensäure und wird bei Reflux, Entzündungen der Speiseröhre sowie bestimmten Magen- und Zwölffingerdarmproblemen eingesetzt.",
    does: "Es blockiert eine Säurepumpe im Magen. Dadurch wird weniger Magensäure gebildet.",
    doesNot: "Es erklärt nicht die Ursache von Schluckbeschwerden, Blutungen, Gewichtsverlust oder starken Schmerzen und wirkt nicht zwingend sofort.",
    daily: "Kapseln nicht beliebig durch andere Darreichungsformen ersetzen. Bei längerer Behandlung Nutzen, Dauer und Wechselwirkungen regelmäßig prüfen lassen.",
    sideEffects: "Möglich sind Kopfschmerzen, Bauchschmerzen, Durchfall, Verstopfung, Blähungen oder Übelkeit. Selten kann es zu einer Nierenentzündung kommen.",
    urgent: "Bei Bluterbrechen, schwarzem Stuhl, zunehmenden Schluckbeschwerden, ungewolltem Gewichtsverlust, starker Brust- oder Bauchschmerz sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Omeprazol Mylan® 20 mg magensaftresistente Hartkapseln, Stand April 2026",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/o/omeprazol-mylan-20-mg-magensaftresistente-hartkapseln",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "bisacodyl",
    name: "Bisacodyl",
    examples: "Referenzpräparat: Dulcolax® Dragées 5 mg",
    category: "Abführmittel",
    purpose: "Bisacodyl wird kurzzeitig bei Verstopfung eingesetzt oder wenn vor einer Untersuchung eine Darmentleerung nötig ist.",
    does: "Es regt die Darmbewegung an und fördert so die Stuhlentleerung.",
    doesNot: "Es behandelt nicht die Ursache einer neuen, schweren oder länger anhaltenden Verstopfung und ist nicht für eine dauerhafte Selbstbehandlung gedacht.",
    daily: "Bauchkrämpfe oder Durchfall können auftreten. Magensaftresistente Dragées nicht gleichzeitig mit Milch oder säurebindenden Mitteln einnehmen, weil sich der Überzug zu früh lösen kann.",
    sideEffects: "Zu hohe oder zu lange Anwendung kann zu Durchfall sowie Störungen des Flüssigkeits- und Salzhaushalts führen.",
    urgent: "Bei starken Bauchschmerzen, Erbrechen, aufgeblähtem Bauch, Blut im Stuhl oder wenn weder Stuhl noch Winde abgehen: nicht weiter selbst behandeln, zeitnah medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Dulcolax® Dragées 5 mg (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/dulcolaxR-drages?schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "metoclopramid",
    name: "Metoclopramid",
    examples: "Referenzpräparat: Metoclopramid 10 mg Tabletten – konkrete Marke vor Freigabe prüfen",
    category: "Mittel gegen Übelkeit",
    purpose: "Metoclopramid wird zur Vorbeugung oder Behandlung von Übelkeit und Erbrechen eingesetzt; die zugelassene Anwendung ist alters- und situationsabhängig.",
    does: "Es wirkt gegen Übelkeit und kann die Magenentleerung beschleunigen.",
    doesNot: "Es beseitigt nicht die Ursache von Übelkeit, Bauchschmerzen, einer Blockade im Magen-Darm-Bereich oder neuen Schluckbeschwerden.",
    daily: "Für Erwachsene ist die Behandlung in der Regel kurz; die konkrete Dauer und Dosis müssen aus dem verordneten Präparat stammen. Müdigkeit und Benommenheit können auftreten.",
    sideEffects: "Besonders wichtig sind unwillkürliche Bewegungen, Muskelkrämpfe oder Unruhe. Das Risiko steigt bei längerer oder höherer Anwendung; auch Herzrhythmusrisiken und Wechselwirkungen müssen geprüft werden.",
    urgent: "Bei unwillkürlichen Bewegungen von Augen, Gesicht, Zunge oder Hals, starker Muskelsteife, Fieber, Verwirrtheit oder Herzstolpern sofort medizinische Hilfe holen und das Medikament nicht weiter ohne Anweisung nehmen.",
    source: "BfArM: zugelassene Anwendungsbeschränkung für Metoclopramid; konkretes Präparat vor Freigabe abgleichen",
    sourceUrl: "https://www.bfarm.de/SharedDocs/Risikoinformationen/Pharmakovigilanz/DE/RV_STP/m-r/metoclopramid.html",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "loperamid",
    name: "Loperamid",
    examples: "Referenzpräparat: Loperamid PUREN® 2 mg Hartkapseln",
    category: "Mittel gegen Durchfall",
    purpose: "Loperamid wird bei Erwachsenen und Jugendlichen ab 12 Jahren kurzzeitig bei akutem Durchfall eingesetzt.",
    does: "Es verlangsamt die Darmbewegung. Dadurch wird der Stuhl fester und die Häufigkeit des Stuhlgangs sinkt.",
    doesNot: "Es behandelt nicht die Ursache des Durchfalls und ersetzt nicht das Trinken und Ausgleichen verlorener Flüssigkeit und Salze.",
    daily: "Nur kurz und genau nach Packungsbeilage anwenden. Wenn der Durchfall nach 48 Stunden anhält, ärztlich abklären. Bei Fieber, Blut im Stuhl oder starken Bauchschmerzen nicht einfach weiter einnehmen.",
    sideEffects: "Verstopfung, Blähungen oder Bauchbeschwerden können auftreten. Eine Überdosierung kann schwere Herzrhythmusstörungen verursachen.",
    urgent: "Bei Herzrasen, unregelmäßigem Herzschlag, Ohnmacht, aufgeblähtem Bauch, Blut im Stuhl, hohem Fieber oder Zeichen einer Austrocknung sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Loperamid PUREN® 2 mg Hartkapseln (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/loperamid-puren-2-mg-hartkapseln",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "sertralin",
    name: "Sertralin",
    examples: "Referenzpräparat: Sertralin HEXAL® 50 mg Filmtabletten",
    category: "Antidepressivum",
    purpose: "Sertralin wird zur Behandlung von Depressionen sowie bestimmten Angst-, Panik-, Zwangs- und Belastungsstörungen eingesetzt.",
    does: "Es gehört zu den SSRI und verändert die Verfügbarkeit des Botenstoffs Serotonin im Gehirn.",
    doesNot: "Es wirkt nicht sofort und ersetzt keine Hilfe bei einer akuten psychischen Krise. Es sollte nicht plötzlich eigenmächtig abgesetzt werden.",
    daily: "Eine spürbare Besserung kann mehrere Wochen dauern. Zu Beginn können Übelkeit, Schlafveränderungen oder Unruhe auftreten. Wechselwirkungen, besonders mit anderen serotonergen Mitteln, sorgfältig prüfen.",
    sideEffects: "Möglich sind Übelkeit, Durchfall, Schlafstörungen, Kopfschmerzen, vermehrtes Schwitzen und sexuelle Funktionsstörungen. Selten können ein Serotoninsyndrom oder eine erhöhte Blutungsneigung auftreten.",
    urgent: "Bei Suizidgedanken, starker Unruhe mit Fieber, Zittern und Muskelzucken, Verwirrtheit, Krampfanfall oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Sertralin HEXAL® 50 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/sertralin-hexal-50mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "levothyroxin",
    name: "Levothyroxin",
    examples: "Referenzpräparat: L-Thyroxin 100 – 1 A Pharma® Tabletten",
    category: "Schilddrüsenhormon",
    purpose: "Levothyroxin wird eingesetzt, wenn die Schilddrüse zu wenig Hormon bildet, zum Beispiel bei einer Schilddrüsenunterfunktion.",
    does: "Es ersetzt das fehlende Schilddrüsenhormon und hilft dem Körper, seinen Stoffwechsel wieder normal zu steuern.",
    doesNot: "Es ist kein Mittel für schnelle Energie oder gegen unspezifische Müdigkeit. Es heilt keine andere Ursache von Müdigkeit, Gewichtsveränderung oder Herzbeschwerden.",
    daily: "Die Dosis ist persönlich und wird mit Blutwerten eingestellt. Tabletten meist morgens nüchtern mit Wasser und mit Abstand zu Eisen-, Calcium- oder Magensäurebindern einnehmen; die genaue Regel des eigenen Präparats beachten.",
    sideEffects: "Bei zu hoher Dosis können Herzklopfen, Zittern, Schwitzen, Schlaflosigkeit, Durchfall oder Gewichtsabnahme auftreten – Zeichen einer zu starken Hormonwirkung.",
    urgent: "Bei Brustschmerz, starkem oder unregelmäßigem Herzschlag, Atemnot oder schwerer allergischer Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: L-Thyroxin 100 – 1 A Pharma® Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/l-thyroxin-100-1a-pharma-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "finasterid",
    name: "Finasterid",
    examples: "Referenzpräparat: Finasterid – 1 A Pharma® 5 mg Filmtabletten",
    category: "Urologisches Medikament",
    purpose: "Finasterid 5 mg wird bei Männern mit gutartiger Vergrößerung der Prostata eingesetzt, wenn dadurch Beschwerden beim Wasserlassen entstehen.",
    does: "Es senkt die Bildung eines Hormons, das die Prostata wachsen lässt. Die Prostata kann kleiner werden, der Urinfluss besser und das Risiko eines Harnverhalts oder einer Operation sinken.",
    doesNot: "Es ist kein Schmerzmittel und keine Behandlung eines Prostatakrebses. Es wirkt nicht sofort und ersetzt keine Abklärung von Blut im Urin, Schmerzen oder plötzlich fehlendem Urin.",
    daily: "Die Wirkung kann erst nach mehreren Monaten deutlich werden. Die Tablette unzerkaut einnehmen. Schwangere sollen zerbrochene oder zerdrückte Tabletten nicht berühren.",
    sideEffects: "Möglich sind weniger Lust auf Sex, Erektions- oder Ejakulationsstörungen und Druckempfindlichkeit oder Vergrößerung der Brust. Stimmungstief oder depressive Verstimmung müssen ernst genommen werden.",
    urgent: "Bei Knoten, Schmerzen oder Ausfluss an der Brust, Schwellung von Lippen/Gesicht, starker depressiver Stimmung oder Suizidgedanken sofort ärztliche Hilfe holen.",
    source: "Gebrauchsinformation: Finasterid – 1 A Pharma® 5 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/finasterid-1a-pharma-5mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "solifenacin",
    name: "Solifenacin",
    examples: "Referenzpräparat: Solifenacin-ratiopharm® 5 mg Filmtabletten",
    category: "Urologisches Medikament",
    purpose: "Solifenacin wird bei Beschwerden einer überaktiven Blase eingesetzt: sehr starker Harndrang, häufiges Wasserlassen oder ungewollter Urinverlust bei Drang.",
    does: "Es entspannt den Blasenmuskel. Dadurch kann die Blase mehr Urin speichern und der plötzliche Harndrang abnehmen.",
    doesNot: "Es behandelt weder eine Harnwegsinfektion noch eine Prostatavergrößerung oder einen Harnstau. Bei Fieber, Blut im Urin oder Schmerzen muss die Ursache abgeklärt werden.",
    daily: "Mundtrockenheit und Verstopfung sind im Alltag häufig spürbar. Bei älteren Menschen auf neue Benommenheit, Verwirrtheit oder Probleme beim Wasserlassen achten und nicht selbst die Dosis verändern.",
    sideEffects: "Häufig sind trockener Mund, Verstopfung, Übelkeit, verschwommenes Sehen und trockene Augen. Es kann den Harnverhalt verschlimmern und bei manchen Menschen den Herzrhythmus beeinflussen.",
    urgent: "Bei Unfähigkeit Wasser zu lassen, starken Bauchschmerzen, raschem Herzschlag/Ohnmacht, Schwellung von Gesicht oder Hals oder schwerer Verwirrtheit sofort Hilfe holen.",
    source: "Gebrauchsinformation: Solifenacin-ratiopharm® 5 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ratiopharm.de/produkte/details.html?cHash=0db5bf7cef817a21095c81875edde576&tx_kfiexensioproductsdb_productsviewing%5Baction%5D=viewDetail&tx_kfiexensioproductsdb_productsviewing%5Bcontroller%5D=Products&tx_kfiexensioproductsdb_productsviewing%5Bpzn%5D=14323818&tx_kfiexensioproductsdb_productsviewing%5Bslug%5D=solifenacin-ratiopharm-5-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "colecalciferol",
    name: "Colecalciferol (Vitamin D)",
    examples: "Referenzpräparat: Dekristol® 1.000 I.E. Tabletten",
    category: "Vitamin / Knochen",
    purpose: "Colecalciferol (Vitamin D3) wird zur Vorbeugung oder Behandlung eines Vitamin-D-Mangels und als Teil der Behandlung von Knochenschwund eingesetzt.",
    does: "Es unterstützt die Aufnahme von Calcium aus dem Darm und trägt damit zu einem gesunden Knochenstoffwechsel bei.",
    doesNot: "Es behandelt keine akuten Knochenschmerzen und ersetzt keine Krebs-, Osteoporose- oder Sturzbehandlung. Es ist nicht automatisch sinnvoll, hohe Dosen ohne Kontrolle einzunehmen.",
    daily: "Dosis und Einnahmedauer richten sich nach Präparat und Blutwerten. Andere Vitamin-D- oder Calciumpräparate nur nach Rücksprache zusätzlich nehmen.",
    sideEffects: "Zu viel Vitamin D kann den Calciumwert im Blut erhöhen. Möglich sind Übelkeit, Erbrechen, Verstopfung, Durst, häufiges Wasserlassen oder Schwäche; das Risiko steigt bei Nierenproblemen.",
    urgent: "Bei anhaltendem Erbrechen, starker Schwäche, Verwirrtheit, Herzrhythmusbeschwerden oder auffällig viel Durst und Urin zeitnah medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Dekristol® 1.000 I.E. Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/dekristol-1000-ie-tabletten?drucken=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "alendronsaeure",
    name: "Alendronsäure",
    examples: "Referenzpräparat: Alendronsäure – 1 A Pharma® 70 mg Filmtabletten",
    category: "Knochen-Schutz",
    purpose: "Alendronsäure wird zur Behandlung von Osteoporose eingesetzt, um das Risiko von Knochenbrüchen zu senken.",
    does: "Es bremst den Knochenabbau. Knochen können dadurch stabiler bleiben; die Wirkung baut sich über längere Zeit auf.",
    doesNot: "Es lindert keinen akuten Knochen- oder Rückenschmerz und heilt keinen bestehenden Bruch. Es ist auch keine Behandlung von Schmerzen oder Schäden an der Speiseröhre.",
    daily: "Einmal wöchentlich direkt nach dem Aufstehen nüchtern mit mindestens 200 ml Leitungswasser schlucken. Danach mindestens 30 Minuten aufrecht bleiben und erst dann essen, trinken oder andere Medikamente nehmen. Bei Schluckbeschwerden, Speiseröhrenproblemen oder wenn aufrechtes Sitzen/Stehen nicht möglich ist: vor Einnahme ärztlich oder in der Apotheke abklären.",
    sideEffects: "Magen-Darm-Beschwerden, Sodbrennen und Reizung der Speiseröhre sind wichtig. Selten sind Kieferknochenprobleme oder ungewöhnliche Brüche des Oberschenkelknochens möglich.",
    urgent: "Bei neuen oder stärkeren Schluckschmerzen, Schmerzen hinter dem Brustbein, neuem/starkem Sodbrennen, Kieferbeschwerden oder neuen Schmerzen in Hüfte/Oberschenkel sofort medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Alendronsäure – 1 A Pharma® 70 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/alendronsaeure-1a-pharma-70mg-filmtabletten?drucken=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "eisenii-sulfat",
    name: "Eisen(II)-sulfat",
    examples: "Referenzpräparat: Tardyferon® Depot-Eisen(II)-sulfat",
    category: "Eisenpräparat",
    purpose: "Eisen(II)-sulfat wird zur Behandlung eines nachgewiesenen Eisenmangels oder einer Eisenmangel-Blutarmut eingesetzt.",
    does: "Es liefert Eisen, das der Körper unter anderem für die Bildung des roten Blutfarbstoffs braucht.",
    doesNot: "Es stoppt keine Blutung und behandelt nicht die Ursache eines Eisenmangels. Müdigkeit, Gewichtsverlust, schwarzer Teerstuhl oder Blut im Stuhl müssen unabhängig davon abgeklärt werden.",
    daily: "Die Einnahme kann Magen und Darm reizen. Zu Levothyroxin und bestimmten Antibiotika kann Abstand nötig sein; den persönlichen Einnahmeplan mit der Apotheke klären. Dunkler Stuhl kann durch Eisen entstehen.",
    sideEffects: "Übelkeit, Bauchschmerzen, Verstopfung oder Durchfall sind möglich. Eisen kann den Stuhl dunkel färben. Eine Überdosierung ist besonders für Kinder gefährlich.",
    urgent: "Bei versehentlicher Einnahme durch ein Kind sofort den Notruf/Giftnotruf kontaktieren. Bei Blut im Stuhl, starken Bauchschmerzen, Erbrechen von Blut oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Tardyferon® Depot-Eisen(II)-sulfat (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/tardyferon-depot-eisenii-sulfat?kontrast=an&schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "folsaeure",
    name: "Folsäure",
    examples: "Referenzpräparat: Folsäure Aristo® 5 mg Tabletten",
    category: "Vitamin",
    purpose: "Folsäure wird bei nachgewiesenem Folsäuremangel und einer dadurch verursachten Blutarmut eingesetzt; sie kann auch bei bestimmten Arzneimittelbehandlungen vorbeugen.",
    does: "Sie unterstützt die Bildung von Zellen und Blutkörperchen.",
    doesNot: "Sie behandelt nicht jede Form der Blutarmut. Ein Vitamin-B12-Mangel muss vor und während der Behandlung berücksichtigt werden, weil Folsäure dessen Blutbild verdecken kann.",
    daily: "Die Dosis hängt vom Grund des Mangels ab. Nicht dauerhaft hoch dosieren, ohne dass die Ursache und der Vitamin-B12-Status ärztlich geklärt sind.",
    sideEffects: "Folsäure wird meist gut vertragen. Selten können Magen-Darm-Beschwerden, Hautreaktionen oder Überempfindlichkeit auftreten.",
    urgent: "Bei Atemnot, Schwellung von Gesicht/Hals, ausgeprägtem Hautausschlag oder bei neu auftretendem Kribbeln, Gangunsicherheit oder Gedächtnisproblemen zeitnah ärztlich abklären lassen.",
    source: "Gebrauchsinformation: Folsäure Aristo® 5 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/folsaeure-aristo-5-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "cetirizin",
    name: "Cetirizin",
    examples: "Referenzpräparat: Cetirizin-ADGC® 10 mg Filmtabletten",
    category: "Allergiemittel",
    purpose: "Cetirizin wird bei allergischem Schnupfen und chronischer Nesselsucht eingesetzt.",
    does: "Es blockiert die Wirkung von Histamin und kann Niesen, laufende Nase, Juckreiz, tränende Augen und Quaddeln lindern.",
    doesNot: "Es behandelt keine schwere allergische Reaktion mit Atemnot und beseitigt nicht den Auslöser der Allergie.",
    daily: "Trotz der Bezeichnung als weniger müde machendes Antihistaminikum kann Schläfrigkeit auftreten. Erst prüfen, wie es persönlich wirkt; bei eingeschränkter Nierenfunktion kann eine niedrigere Dosis nötig sein.",
    sideEffects: "Müdigkeit, Schläfrigkeit, Kopfschmerzen, trockener Mund, Schwindel oder Magen-Darm-Beschwerden sind möglich. Alkohol und andere beruhigende Mittel können die Benommenheit verstärken.",
    urgent: "Bei Atemnot, Schwellung von Gesicht/Zunge/Hals, Kreislaufproblemen, Krampfanfall oder Problemen beim Wasserlassen sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Cetirizin-ADGC® 10 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/cetirizin-adgc-10mg",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "montelukast",
    name: "Montelukast",
    examples: "Referenzpräparat: Montelukast – 1 A Pharma® 10 mg Filmtabletten",
    category: "Atemwegsmedikament",
    purpose: "Montelukast wird bei Asthma zur Unterstützung der Asthmakontrolle eingesetzt und kann bei passenden Asthma-Patienten auch Beschwerden eines saisonalen allergischen Schnupfens lindern.",
    does: "Es hemmt Leukotriene – Botenstoffe, die die Atemwege verengen und Entzündung fördern.",
    doesNot: "Es ist kein Notfallmedikament bei einem akuten Asthmaanfall und ersetzt nicht den persönlichen Inhalator- und Notfallplan.",
    daily: "Regelmäßig wie verordnet einnehmen, auch wenn gerade keine Beschwerden da sind. Bei einem plötzlichen Anfall das dafür verordnete schnell wirksame Inhalationsmedikament verwenden.",
    sideEffects: "Möglich sind Kopfschmerzen, Bauchschmerzen, Übelkeit oder Durchfall. Wichtig sind Veränderungen von Schlaf, Träumen, Stimmung oder Verhalten; diese können auch erst während der Behandlung auffallen.",
    urgent: "Bei Suizidgedanken, starker Unruhe, aggressivem oder deutlich verändertem Verhalten, Halluzinationen, Atemnot oder einer schweren allergischen Reaktion unverzüglich medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Montelukast – 1 A Pharma® 10 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/m/montelukast-1a-pharma-10mg-filmtabletten?drucken=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "apalutamid",
    name: "Apalutamid",
    examples: "Referenzpräparat: ERLEADA® 60 mg Filmtabletten",
    category: "Krebstherapie",
    purpose: "Apalutamid wird bei erwachsenen Männern für bestimmte Formen von Prostatakrebs eingesetzt: bei nicht metastasiertem kastrationsresistentem oder metastasiertem hormonsensitivem Prostatakrebs.",
    does: "Es blockiert die Wirkung männlicher Geschlechtshormone an Krebszellen. Dadurch kann es das Wachstum des Prostatakrebses bremsen.",
    doesNot: "Es ist kein Schmerzmittel und keine Heilung eines einzelnen akuten Beschwerdeschubs. Es ersetzt nicht die begleitende Hormontherapie, Bestrahlung oder andere individuell geplante Krebsbehandlung.",
    daily: "Täglich genau wie vom Onkologie-Team verordnet einnehmen. Neue Medikamente, auch frei verkäufliche, immer vorher abklären: Apalutamid kann die Wirkung anderer Arzneimittel verändern. Sturz- und Knochenschutz ansprechen.",
    sideEffects: "Häufig können Müdigkeit, Hautausschlag, Bluthochdruck, Hitzewallungen, Durchfall, Gewichtsverlust sowie Stürze und Knochenbrüche auftreten. Selten sind Krampfanfälle oder schwere Hautreaktionen möglich.",
    urgent: "Bei einem Krampfanfall, neuem starken Hautausschlag mit Blasen oder Fieber, Brustschmerz, Atemnot, Ohnmacht oder Zeichen eines Schlaganfalls sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: ERLEADA® 60 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/e/erleadaR-60-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "lisinopril",
    name: "Lisinopril",
    examples: "Referenzpräparat: Lisinopril PUREN® 10 mg Tabletten",
    category: "Blutdrucksenker",
    purpose: "Lisinopril wird gegen Bluthochdruck und bei bestimmten Herzerkrankungen eingesetzt.",
    does: "Es ist ein ACE-Hemmer: Blutgefäße entspannen sich, der Blutdruck sinkt und das Herz wird entlastet.",
    doesNot: "Es wirkt nicht gegen einen akuten Brustschmerz oder eine plötzlich auftretende Atemnot und ersetzt keine Notfallbehandlung.",
    daily: "Regelmäßig wie verordnet einnehmen. Zu Beginn oder bei Dosisänderung kann Schwindel auftreten. Nierenfunktion und Kalium im Blut müssen ärztlich kontrolliert werden.",
    sideEffects: "Möglich sind Schwindel, niedriger Blutdruck, trockener Reizhusten, erhöhte Kaliumwerte und eine Verschlechterung der Nierenfunktion.",
    urgent: "Bei Schwellung von Gesicht, Lippen, Zunge oder Hals, Atemnot, Ohnmacht oder deutlich weniger Urin sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Lisinopril PUREN® 10 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/lisinopril-puren-10-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "losartan",
    name: "Losartan",
    examples: "Referenzpräparat: Losartan HEXAL® 50 mg Filmtabletten",
    category: "Blutdrucksenker",
    purpose: "Losartan wird gegen Bluthochdruck eingesetzt; je nach Situation auch bei Herzschwäche oder zum Schutz der Nieren bei Diabetes.",
    does: "Es blockiert die Wirkung von Angiotensin II. Die Blutgefäße entspannen sich und der Blutdruck sinkt.",
    doesNot: "Es ist kein Mittel für eine akute Blutdruckkrise, Brustschmerzen oder einen Schlaganfall und sollte bei diesen Beschwerden nicht als Selbsthilfe eingesetzt werden.",
    daily: "Die Wirkung baut sich über Tage bis Wochen auf. Bei Durchfall, Erbrechen oder wenig Trinken können Blutdruck und Nierenfunktion stärker belastet sein; dann den ärztlichen Plan beachten.",
    sideEffects: "Schwindel, niedriger Blutdruck und erhöhte Kaliumwerte können auftreten. Auch Nierenwerte können sich verändern.",
    urgent: "Bei Ohnmacht, Schwellung von Gesicht oder Hals, starken Herzrhythmusbeschwerden, deutlich weniger Urin oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Losartan HEXAL® 50 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/losartan-hexal-50mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "telmisartan",
    name: "Telmisartan",
    examples: "Referenzpräparat: Telmisartan HEXAL® 40 mg Tabletten",
    category: "Blutdrucksenker",
    purpose: "Telmisartan wird zur Behandlung von Bluthochdruck eingesetzt und kann bei manchen Menschen das Risiko schwerer Herz-Kreislauf-Ereignisse senken.",
    does: "Es blockiert Angiotensin II an den Blutgefäßen. Diese entspannen sich, dadurch sinkt der Blutdruck.",
    doesNot: "Es behandelt keine akuten Beschwerden wie Brustschmerz, Lähmung, Sprachstörung oder akute Atemnot.",
    daily: "Meist einmal täglich einnehmen. Blutdruck, Nierenfunktion und Kalium sind besonders nach Beginn, Dosisänderung oder bei zusätzlicher Entwässerungstherapie wichtig.",
    sideEffects: "Möglich sind Schwindel, niedriger Blutdruck, erhöhte Kaliumwerte und Veränderungen der Nierenfunktion.",
    urgent: "Bei Ohnmacht, Schwellung im Gesicht/Hals, ausgeprägter Muskelschwäche oder Herzstolpern, deutlich weniger Urin oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Telmisartan HEXAL® 20/40/80 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/telmisartan-hexal-20mg-40mg-80mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "lercanidipin",
    name: "Lercanidipin",
    examples: "Referenzpräparat: Lercanidipin PUREN® 10 mg Filmtabletten",
    category: "Blutdrucksenker",
    purpose: "Lercanidipin wird zur Behandlung von Bluthochdruck eingesetzt.",
    does: "Es erweitert Blutgefäße. Dadurch kann der Blutdruck sinken.",
    doesNot: "Es ist kein Mittel gegen plötzlich auftretenden Brustschmerz oder eine akute Blutdruckkrise.",
    daily: "Möglichst morgens mindestens 15 Minuten vor dem Frühstück einnehmen. Grapefruit oder Grapefruitsaft kann die Wirkung verstärken und sollte gemieden werden.",
    sideEffects: "Kopfschmerzen, Gesichtsrötung, Herzklopfen, Schwindel und geschwollene Knöchel oder Beine können auftreten.",
    urgent: "Bei Brustschmerz, Ohnmacht, starker Atemnot, sehr schnellem/unregelmäßigem Herzschlag oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Lercanidipin PUREN® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/lercanidipin-puren-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "nebivolol",
    name: "Nebivolol",
    examples: "Referenzpräparat: NEBILET® 5 mg Tabletten",
    category: "Blutdrucksenker",
    purpose: "Nebivolol wird zur Behandlung von Bluthochdruck eingesetzt; je nach Präparat und Situation auch bei stabiler Herzschwäche.",
    does: "Es ist ein Betablocker. Es verlangsamt und entlastet das Herz und kann so den Blutdruck senken.",
    doesNot: "Es beendet keinen akuten Herzinfarkt, keine akute Herzschwäche und keinen Asthmaanfall. Nicht eigenmächtig plötzlich absetzen.",
    daily: "Puls und Befinden beobachten, besonders zu Beginn. Bei Diabetes können Warnzeichen einer Unterzuckerung weniger deutlich spürbar sein.",
    sideEffects: "Müdigkeit, Schwindel, langsamer Puls, Kopfschmerzen, Magen-Darm-Beschwerden und kalte Hände/Füße sind möglich.",
    urgent: "Bei Ohnmacht, sehr langsamem Puls mit Beschwerden, zunehmender Atemnot, pfeifender Atmung oder Schwellung von Gesicht/Hals sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: NEBILET® 5 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/n/nebiletr?kontrast=an&schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "eplerenon",
    name: "Eplerenon",
    examples: "Referenzpräparat: Eplerenon – 1 A Pharma® 25 mg Filmtabletten",
    category: "Wassertablette",
    purpose: "Eplerenon wird zusammen mit anderen Mitteln bei bestimmten Formen der Herzschwäche eingesetzt.",
    does: "Es blockiert die Wirkung des Hormons Aldosteron. Das kann das Herz entlasten und schädliche Flüssigkeits- und Salzverschiebungen begrenzen.",
    doesNot: "Es ist kein schnell wirkendes Mittel gegen eine plötzliche Atemnot oder starke Wassereinlagerung und ersetzt keine akute Behandlung.",
    daily: "Kalium und Nierenfunktion müssen vor und nach Beginn sowie nach Dosisänderungen kontrolliert werden. Kaliumpräparate oder kaliumhaltige Salzersatzmittel nur nach Rücksprache verwenden.",
    sideEffects: "Der Kaliumwert kann zu hoch steigen. Möglich sind Schwindel, niedriger Blutdruck, Verschlechterung der Nierenfunktion und Muskelkrämpfe.",
    urgent: "Bei starkem Herzstolpern, ausgeprägter Muskelschwäche, Ohnmacht, deutlich weniger Urin oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Eplerenon – 1 A Pharma® 25/50 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/e/eplerenon-1a-pharma-25mg-50mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "simvastatin",
    name: "Simvastatin",
    examples: "Referenzpräparat: Simva TAD® 20 mg Filmtabletten",
    category: "Cholesterinsenker",
    purpose: "Simvastatin wird bei erhöhten Blutfetten eingesetzt, um das Risiko für Herzinfarkt und Schlaganfall zu senken.",
    does: "Es bremst die Cholesterinbildung in der Leber und senkt vor allem das LDL-Cholesterin.",
    doesNot: "Es ist kein Mittel gegen akuten Brustschmerz und ersetzt weder Ernährung, Bewegung noch die Behandlung anderer Herz-Kreislauf-Risiken.",
    daily: "Die Einnahmezeit und Dosis des eigenen Präparats beachten. Neue Medikamente und Grapefruitprodukte vorher abklären, weil sie das Risiko für Nebenwirkungen erhöhen können.",
    sideEffects: "Muskelschmerzen, Kopfschmerzen, Verdauungsbeschwerden und erhöhte Leberwerte sind möglich. Selten kommt es zu einem schweren Muskelabbau.",
    urgent: "Bei ungeklärten starken Muskelschmerzen, Muskelschwäche oder Krämpfen – besonders mit Fieber oder dunkel gefärbtem Urin – sofort medizinisch abklären lassen.",
    source: "Gebrauchsinformation: Simva TAD® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/simva-tadR-filmtabletten?schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "edoxaban",
    name: "Edoxaban",
    examples: "Referenzpräparat: LIXIANA® 60 mg Filmtabletten",
    category: "Gerinnungshemmer",
    purpose: "Edoxaban wird eingesetzt, um Blutgerinnsel und Schlaganfälle bei Vorhofflimmern zu verhindern oder Blutgerinnsel in Bein und Lunge zu behandeln bzw. einem Wiederauftreten vorzubeugen.",
    does: "Es hemmt einen wichtigen Schritt der Blutgerinnung. Dadurch entstehen Blutgerinnsel weniger leicht.",
    doesNot: "Es löst keine Beschwerden eines akuten Schlaganfalls, Herzinfarkts oder einer Lungenembolie sofort. Es ist auch kein Schmerzmittel.",
    daily: "Täglich zur gleichen Zeit einnehmen und nicht eigenmächtig pausieren. Vor Eingriffen, Zahnbehandlungen und neuen Medikamenten immer sagen, dass Edoxaban eingenommen wird. Die Dosis hängt unter anderem von Nierenfunktion und Gewicht ab.",
    sideEffects: "Die wichtigste Nebenwirkung sind Blutungen: blaue Flecken, Nasenbluten, Zahnfleischbluten oder Blut im Urin/Stuhl. Auch Blutarmut kann auftreten.",
    urgent: "Bei nicht stillbarer Blutung, Bluterbrechen, schwarzem Stuhl, Blut im Urin, starkem Kopfschmerz nach Sturz, plötzlicher Schwäche oder Sprachstörung sofort den Notruf wählen.",
    source: "Gebrauchsinformation: LIXIANA® 15/30/60 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/lixiana-15-mg-30-mg-60-mg-filmtabletten?schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "prednisolon",
    name: "Prednisolon",
    examples: "Referenzpräparat: Prednisolon 5 mg JENAPHARM® Tabletten",
    category: "Kortison",
    purpose: "Prednisolon wird bei vielen Erkrankungen eingesetzt, bei denen eine stärkere Behandlung mit einem Kortisonpräparat nötig ist, zum Beispiel Entzündungs- oder Autoimmunerkrankungen.",
    does: "Es bremst Entzündungen und dämpft das Immunsystem. Dadurch können Schmerzen, Schwellungen und andere entzündliche Beschwerden nachlassen.",
    doesNot: "Es behandelt nicht automatisch die Ursache einer Infektion und sollte eine ärztlich geplante Krebs-, Schmerz- oder Antibiotikabehandlung nicht ersetzen.",
    daily: "Dosis und Dauer sind sehr unterschiedlich. Nach längerer Einnahme nicht abrupt absetzen: Der Körper braucht meist ein ärztlich festgelegtes Ausschleichen. Bei Fieber oder Infekt nicht eigenmächtig die Dosis ändern.",
    sideEffects: "Es kann den Blutzucker und Blutdruck erhöhen, den Schlaf und die Stimmung verändern und die Anfälligkeit für Infektionen steigern. Bei längerer Anwendung steigen unter anderem Risiken für Knochen, Haut, Muskeln und Augen.",
    urgent: "Bei Zeichen einer schweren Infektion, schwarzem Stuhl oder Bluterbrechen, starken psychischen Veränderungen, Sehstörungen oder einer schweren allergischen Reaktion sofort ärztliche Hilfe holen.",
    source: "Gebrauchsinformation: Prednisolon 5 mg JENAPHARM® Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/prednisolon-5-mg-jenapharmR",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "gabapentin",
    name: "Gabapentin",
    examples: "Referenzpräparat: Gabapentin HEXAL® 300 mg Hartkapseln",
    category: "Nervenschmerzmittel",
    purpose: "Gabapentin wird zur Behandlung bestimmter Formen von Epilepsie und von Nervenschmerzen eingesetzt.",
    does: "Es verändert die Signalübertragung im Nervensystem und kann dadurch Anfälle oder Nervenschmerzen verringern.",
    doesNot: "Es ist kein gewöhnliches Schmerzmittel für akute Schmerzen und wirkt nicht sofort wie ein Bedarfs-Schmerzmittel. Es darf nicht eigenmächtig abrupt abgesetzt werden.",
    daily: "Die Dosis wird meist langsam angepasst. Besonders am Anfang können Benommenheit und Gangunsicherheit auftreten. Zusammen mit Opioiden, Alkohol oder anderen beruhigenden Mitteln kann die Atmung gefährlich gedämpft werden.",
    sideEffects: "Häufig sind Schläfrigkeit, Schwindel, Müdigkeit, Koordinationsprobleme, Wassereinlagerungen und Gewichtszunahme. Stimmung oder Verhalten können sich verändern.",
    urgent: "Bei flacher oder langsamer Atmung, starker Schläfrigkeit, Schwellung von Gesicht/Hals, Suizidgedanken, schwerem Hautausschlag oder Krampfanfall sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Gabapentin HEXAL® 100/300/400 mg Hartkapseln (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/g/gabapentin-hexal-100mg-300mg-400mg-kapseln",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "duloxetin",
    name: "Duloxetin",
    examples: "Referenzpräparat: Duloxetin – 1 A Pharma® 60 mg magensaftresistente Hartkapseln",
    category: "Antidepressivum / Nervenschmerzmittel",
    purpose: "Duloxetin wird bei Depressionen, generalisierter Angststörung und bestimmten Nervenschmerzen eingesetzt; je nach Präparat auch bei Belastungs-Harninkontinenz.",
    does: "Es erhöht die Verfügbarkeit von Serotonin und Noradrenalin im Nervensystem. Das kann Stimmung, Angst und bestimmte Schmerzen beeinflussen.",
    doesNot: "Es wirkt nicht sofort und ist kein Akutmittel bei einer psychischen Krise oder starken, plötzlich auftretenden Schmerzen. Nicht eigenmächtig absetzen.",
    daily: "Die Kapseln wegen ihres magensaftresistenten Überzugs ganz schlucken. Zu Beginn sind Übelkeit, Unruhe oder Schlafveränderungen möglich. Blutdruck, Leberrisiken und Wechselwirkungen mit anderen serotonergen Mitteln besprechen.",
    sideEffects: "Möglich sind Übelkeit, trockener Mund, Schwindel, Müdigkeit oder Schlaflosigkeit, Schwitzen, Verstopfung und sexuelle Funktionsstörungen. Es kann Blutungen begünstigen, besonders zusammen mit Blutverdünnern oder Schmerzmitteln wie Ibuprofen.",
    urgent: "Bei Suizidgedanken, starker Unruhe mit Fieber, Zittern und Muskelzucken, Gelbfärbung von Haut/Augen, ungewöhnlichen Blutungen oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Duloxetin – 1 A Pharma® 30/60 mg magensaftresistente Hartkapseln (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/duloxetin-1a-pharma-30mg-60mg-kapseln-magensaftresistent?schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "amitriptylin",
    name: "Amitriptylin",
    examples: "Referenzpräparat: Amineurin® 25 mg Filmtabletten",
    category: "Antidepressivum / Nervenschmerzmittel",
    purpose: "Amitriptylin wird bei Depressionen eingesetzt und kann in niedriger Dosierung auch bei bestimmten Nervenschmerzen verwendet werden.",
    does: "Es verändert Botenstoffe im Nervensystem. Dadurch kann es die Stimmung beeinflussen und manche Nervenschmerzen abschwächen.",
    doesNot: "Es ist kein schnelles Schlaf- oder Schmerzmittel und sollte nicht eigenmächtig plötzlich abgesetzt werden.",
    daily: "Es kann stark müde machen und die Reaktionsfähigkeit einschränken. Bei älteren Menschen besonders auf Stürze, Verwirrtheit, Verstopfung und Probleme beim Wasserlassen achten. Alkohol und andere beruhigende Medikamente verstärken die Wirkung.",
    sideEffects: "Häufig sind Mundtrockenheit, Verstopfung, verschwommenes Sehen, Müdigkeit, Schwindel, Gewichtszunahme und Herzklopfen. Es kann den Herzrhythmus beeinflussen.",
    urgent: "Bei Ohnmacht, starkem Herzrasen, Harnverhalt, schwerer Verwirrtheit, Krampfanfall, Suizidgedanken oder schwerer allergischer Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Amineurin® 10/25/50 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/amineurin-10mg-25mg-50mg-filmtabletten?drucken=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "citalopram",
    name: "Citalopram",
    examples: "Referenzpräparat: Citalopram – 1 A Pharma® 20 mg Filmtabletten",
    category: "Antidepressivum",
    purpose: "Citalopram wird zur Behandlung von Depressionen und je nach Verordnung auch bei Panikstörung eingesetzt.",
    does: "Es ist ein SSRI und erhöht die Verfügbarkeit von Serotonin im Gehirn.",
    doesNot: "Es hilft nicht sofort bei einer akuten psychischen Krise und sollte nicht plötzlich abgesetzt werden.",
    daily: "Eine Besserung kann erst nach mehreren Wochen spürbar sein. Am Anfang können Übelkeit, Unruhe oder Schlafveränderungen auftreten. Bei höherem Alter, Herzproblemen oder weiteren Medikamenten muss das Risiko für Herzrhythmusstörungen geprüft werden.",
    sideEffects: "Möglich sind Übelkeit, Kopfschmerzen, Schlafstörungen oder Müdigkeit, Schwitzen, Durchfall und sexuelle Funktionsstörungen. Selten kann ein Serotoninsyndrom oder eine Herzrhythmusstörung auftreten.",
    urgent: "Bei Suizidgedanken, Ohnmacht, Herzstolpern, starker Unruhe mit Fieber und Muskelzucken, Krampfanfall oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Citalopram – 1 A Pharma® 20 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/citalopram-1a-pharma-20mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "escitalopram",
    name: "Escitalopram",
    examples: "Referenzpräparat: Escitalopram – 1 A Pharma® 10 mg Filmtabletten",
    category: "Antidepressivum",
    purpose: "Escitalopram wird bei Depressionen und bestimmten Angststörungen eingesetzt.",
    does: "Es ist ein SSRI und erhöht die Verfügbarkeit von Serotonin im Gehirn.",
    doesNot: "Es wirkt nicht sofort und ersetzt keine Akuthilfe bei Suizidgedanken oder einer schweren psychischen Krise. Es sollte nicht abrupt abgesetzt werden.",
    daily: "Die Wirkung baut sich über Wochen auf. Zu Beginn können Unruhe, Übelkeit oder eine vorübergehende Verschlechterung der Angst auftreten. Wechselwirkungen und mögliche Herzrhythmusrisiken ärztlich oder in der Apotheke prüfen lassen.",
    sideEffects: "Möglich sind Übelkeit, Kopfschmerzen, Schlafstörungen oder Müdigkeit, vermehrtes Schwitzen, Durchfall und sexuelle Funktionsstörungen.",
    urgent: "Bei Suizidgedanken, Ohnmacht, Herzrasen oder unregelmäßigem Puls, Fieber mit Zittern und Muskelzucken, Krampfanfall oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Escitalopram – 1 A Pharma® 10 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/e/escitalopram-1a-pharma-10mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "mirtazapin",
    name: "Mirtazapin",
    examples: "Referenzpräparat: Mirtazapin dura® 30 mg Filmtabletten",
    category: "Antidepressivum",
    purpose: "Mirtazapin wird zur Behandlung von Depressionen eingesetzt.",
    does: "Es beeinflusst Botenstoffe im Gehirn, die Stimmung, Angst und Schlaf mitsteuern.",
    doesNot: "Es ist kein allgemeines Schlafmittel und wirkt nicht sofort gegen eine akute psychische Krise. Es darf nicht ohne Rücksprache abgesetzt werden.",
    daily: "Es kann deutlich müde machen, besonders zu Beginn. Daher häufig abends verordnet. Auf nächtliche Stürze achten; Alkohol und andere beruhigende Medikamente können die Benommenheit verstärken.",
    sideEffects: "Häufig sind Schläfrigkeit, mehr Appetit, Gewichtszunahme, trockener Mund, Verstopfung, Schwindel und Kopfschmerzen. Selten kann die Zahl bestimmter weißer Blutkörperchen stark sinken.",
    urgent: "Bei Fieber, Halsschmerzen oder wunden Stellen im Mund, Suizidgedanken, Gelbfärbung von Haut/Augen, Krampfanfall oder schwerer allergischer Reaktion sofort ärztliche Hilfe holen.",
    source: "Gebrauchsinformation: Mirtazapin dura® 30 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/m/mirtazapin-dura-30-mg-filmtabletten/",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "lorazepam",
    name: "Lorazepam",
    examples: "Referenzpräparat: Lorazepam dura® 1 mg Tabletten",
    category: "Beruhigungsmittel",
    purpose: "Lorazepam wird kurzfristig bei starken Angst-, Spannungs- und Erregungszuständen, bestimmten Schlafstörungen oder vor Eingriffen eingesetzt.",
    does: "Es gehört zu den Benzodiazepinen und beruhigt das Nervensystem.",
    doesNot: "Es löst nicht die Ursache von Angst oder Schlafproblemen und ist nicht für eine dauerhafte Selbstbehandlung gedacht.",
    daily: "So niedrig dosiert und so kurz wie möglich anwenden. Es kann abhängig machen. Nicht zusammen mit Alkohol, Opioiden oder anderen beruhigenden Mitteln einnehmen, außer das Behandlungsteam hat es ausdrücklich so geplant.",
    sideEffects: "Müdigkeit, Benommenheit, Gedächtnislücken, Muskelschwäche, Verwirrtheit und Stürze sind möglich – bei älteren Menschen besonders relevant. Auch die Atmung kann gedämpft werden.",
    urgent: "Bei flacher/langsamer Atmung, kaum weckbarer Schläfrigkeit, Ohnmacht, ausgeprägter Verwirrtheit, Sturz mit Verletzung oder schwerer allergischer Reaktion sofort den Notruf wählen.",
    source: "Gebrauchsinformation: Lorazepam dura® 1 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/lorazepam-dura-1-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "zolpidem",
    name: "Zolpidem",
    examples: "Referenzpräparat: Zolpidem 10 – 1 A Pharma® Filmtabletten",
    category: "Schlafmittel",
    purpose: "Zolpidem wird zur kurzfristigen Behandlung schwerer Schlafstörungen bei Erwachsenen eingesetzt.",
    does: "Es ist ein benzodiazepinähnliches Schlafmittel und erleichtert das Einschlafen.",
    doesNot: "Es behandelt nicht die Ursache einer Schlafstörung und ist nicht für eine dauerhafte Einnahme bestimmt.",
    daily: "Direkt vor dem Schlafengehen nur einnehmen, wenn mindestens acht Stunden Schlaf möglich sind. Danach nicht Auto fahren oder Maschinen bedienen. Nicht mit Alkohol, Opioiden oder anderen Beruhigungsmitteln kombinieren.",
    sideEffects: "Müdigkeit am nächsten Tag, Schwindel, Gedächtnislücken, Verwirrtheit und Stürze können auftreten. Möglich sind auch ungewöhnliche Handlungen im Schlaf, zum Beispiel Schlafwandeln oder Essen ohne Erinnerung.",
    urgent: "Bei flacher/langsamer Atmung, kaum weckbarer Schläfrigkeit, Schlafwandeln oder anderen komplexen Handlungen im Schlaf, Sturz, Halluzinationen oder schwerer allergischer Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Zolpidem 10 – 1 A Pharma® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/xyz/zolpidem-10-1a-pharma-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "natriumpicosulfat",
    name: "Natriumpicosulfat",
    examples: "Referenzpräparat: DULCOLAX® NP Tropfen 7,5 mg/ml",
    category: "Abführmittel",
    purpose: "Natriumpicosulfat wird kurzzeitig bei Verstopfung eingesetzt oder wenn eine erleichterte Stuhlentleerung nötig ist.",
    does: "Es regt den Dickdarm an. Der Stuhl wird weicher und die Darmentleerung erleichtert.",
    doesNot: "Es behandelt nicht die Ursache der Verstopfung und ist nicht für eine tägliche oder langfristige Selbstbehandlung gedacht.",
    daily: "Bei den Tropfen mit der niedrigsten empfohlenen Dosis beginnen. Die Wirkung tritt meist nach 10 bis 12 Stunden ein. Bei Bauchschmerzen, Fieber, Erbrechen oder unklarer Verstopfung nicht einfach weiter anwenden.",
    sideEffects: "Möglich sind Bauchkrämpfe, Durchfall, Übelkeit und Flüssigkeits- oder Salzverluste. Bei zu häufiger Anwendung können Wasser- und Elektrolythaushalt gestört werden.",
    urgent: "Bei starken Bauchschmerzen, Erbrechen, Fieber, aufgeblähtem Bauch, Blut im Stuhl, Ohnmacht oder deutlichen Zeichen von Austrocknung sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: DULCOLAX® NP Tropfen 7,5 mg/ml (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/dulcolaxR-np-tropfen?drucken=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "formoterol",
    name: "Formoterol",
    examples: "Referenzpräparat: Formo-Aristo® 12 Mikrogramm Inhalationskapseln",
    category: "Atemwegsmedikament",
    purpose: "Formoterol wird bei Asthma zusätzlich zu einer entzündungshemmenden Inhalationstherapie und zur Linderung von Beschwerden bei COPD eingesetzt.",
    does: "Es erweitert die Bronchien. Die Atmung kann sich innerhalb weniger Minuten erleichtern; die Wirkung hält lange an.",
    doesNot: "Bei Asthma ersetzt Formoterol nicht die entzündungshemmende Behandlung mit inhalativem Kortison und ist kein Ersatz für den persönlichen Notfallplan.",
    daily: "Die Kapsel enthält Pulver zum Inhalieren und darf nicht geschluckt werden. Die Inhalationstechnik in der Apotheke zeigen lassen. Bei zunehmendem Bedarf oder neuer nächtlicher Atemnot den Behandlungsplan prüfen lassen.",
    sideEffects: "Zittern, Herzklopfen, schneller Puls, Kopfschmerzen, Muskelkrämpfe oder ein niedriger Kaliumwert können auftreten.",
    urgent: "Bei plötzlich stärkerer Atemnot direkt nach der Inhalation, Brustschmerz, starkem/unregelmäßigem Herzschlag, Ohnmacht oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Formo-Aristo® 12 Mikrogramm Hartkapseln mit Pulver zur Inhalation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/formo-aristo-12-mikrogramm-hartkapseln-mit-pulver-zur-inhalation",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "ipratropium",
    name: "Ipratropium",
    examples: "Referenzpräparat: IpraBronch® 20 Mikrogramm/Sprühstoß Druckgasinhalation",
    category: "Atemwegsmedikament",
    purpose: "Ipratropium wird eingesetzt, um die Atmung bei Asthma oder COPD zu erleichtern.",
    does: "Es entspannt die Bronchialmuskulatur und erweitert so die Atemwege.",
    doesNot: "Es behandelt nicht die Ursache von Asthma oder COPD und ersetzt keinen Notfallplan bei schwerer Atemnot.",
    daily: "Nur inhalieren und die Technik zeigen lassen. Der Sprühnebel darf nicht in die Augen gelangen. Bei Prostatabeschwerden oder Engwinkelglaukom besonders aufmerksam sein.",
    sideEffects: "Mundtrockenheit, Husten, Kopfschmerzen und Schwindel können auftreten. Möglich sind verschwommenes Sehen, erhöhter Augeninnendruck oder Probleme beim Wasserlassen.",
    urgent: "Bei plötzlich stärkerer Atemnot direkt nach der Inhalation, Augenschmerz mit Sehstörung, Unfähigkeit Wasser zu lassen oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: IpraBronch® 20 Mikrogramm/Sprühstoß Druckgasinhalation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/i/iprabronchR-20-mikrogrammspruehstoss-druckgasinhalation-loesung",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "beclometason",
    name: "Beclometason",
    examples: "Referenzpräparat: Junik® Dosieraerosol 100 Mikrogramm",
    category: "Atemwegsmedikament",
    purpose: "Beclometason zum Inhalieren ist eine Dauerbehandlung bei Asthma und bremst die Entzündung in den Atemwegen.",
    does: "Es verringert die Entzündung und hilft, Asthma-Beschwerden und Anfälle langfristig zu verhindern.",
    doesNot: "Es hilft nicht sofort bei einem akuten Asthmaanfall und ersetzt kein schnell wirksames Notfall-Inhalationsmittel.",
    daily: "Regelmäßig anwenden, auch ohne Beschwerden. Nach der Inhalation den Mund ausspülen oder Zähne putzen. Technik in der Apotheke kontrollieren lassen; nicht eigenmächtig plötzlich absetzen.",
    sideEffects: "Heiserkeit, Halsreizungen und Pilzinfektionen im Mund können auftreten. Bei hohen Dosen über längere Zeit sind auch allgemeinere Kortisonwirkungen möglich.",
    urgent: "Bei plötzlich stärkerer Atemnot direkt nach der Inhalation, Schwellung von Gesicht/Hals oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Junik® Dosieraerosol 100 Mikrogramm (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/j/junikR-dosieraerosol-100-mikrogramm-inhalationsgeraet?schrift=0.9",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "amoxicillin",
    name: "Amoxicillin",
    examples: "Referenzpräparat: Amoxicillin PUREN® 1000 mg Filmtabletten",
    category: "Antibiotikum",
    purpose: "Amoxicillin wird zur Behandlung bestimmter bakterieller Infektionen eingesetzt.",
    does: "Es ist ein Penicillin-Antibiotikum und hemmt Bakterien, die empfindlich darauf reagieren.",
    doesNot: "Es hilft nicht gegen Erkältung, Grippe oder andere Virusinfekte und ersetzt keine ärztliche Abklärung bei schwerer Krankheit.",
    daily: "Genau nach Plan und nur für die verordnete Infektion einnehmen. Nicht an andere weitergeben oder Reste später selbst verwenden. Bei Durchfall und Erbrechen auf Flüssigkeit achten.",
    sideEffects: "Übelkeit, Durchfall, Erbrechen und Hautausschlag sind möglich. Antibiotika können selten eine schwere allergische Reaktion oder eine schwere Darmentzündung auslösen.",
    urgent: "Bei Atemnot, Schwellung von Gesicht/Hals, Blasen oder Hautablösung, anhaltendem schwerem oder blutigem Durchfall sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Amoxicillin PUREN® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/amoxicillin-puren-filmtabletten?kontrast=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "cefuroxim",
    name: "Cefuroxim",
    examples: "Referenzpräparat: Cefuroxim PUREN® 500 mg Filmtabletten",
    category: "Antibiotikum",
    purpose: "Cefuroxim wird zur Behandlung bestimmter bakterieller Infektionen eingesetzt.",
    does: "Es ist ein Cephalosporin-Antibiotikum und hemmt Bakterien, die empfindlich darauf reagieren.",
    doesNot: "Es wirkt nicht gegen Virusinfekte wie Erkältung oder Grippe und sollte nicht für spätere Beschwerden aufgehoben werden.",
    daily: "Nach einer Mahlzeit und als ganze Tablette mit Wasser einnehmen – nicht zerkauen oder zerteilen. Behandlung genau nach dem persönlichen Plan durchführen.",
    sideEffects: "Möglich sind Durchfall, Übelkeit, Bauchschmerzen, Kopfschmerzen oder Hautausschlag. Selten können schwere Hautreaktionen oder eine starke Darmentzündung auftreten.",
    urgent: "Bei Atemnot, Schwellung von Gesicht/Hals, Blasenbildung oder Hautablösung, anhaltendem schwerem/blutigem Durchfall oder Krampfanfall sofort Hilfe holen.",
    source: "Gebrauchsinformation: Cefuroxim PUREN® 250/500 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/cefuroxim-puren-filmtabletten?kontrast=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "doxycyclin",
    name: "Doxycyclin",
    examples: "Referenzpräparat: Doxycyclin 100 – 1 A Pharma® Tabletten",
    category: "Antibiotikum",
    purpose: "Doxycyclin wird zur Behandlung bestimmter bakterieller Infektionen eingesetzt, zum Beispiel an Atemwegen, Haut oder nach Zeckenstich.",
    does: "Es bremst die Vermehrung empfindlicher Bakterien.",
    doesNot: "Es wirkt nicht gegen Virusinfekte und behandelt nicht jede Ursache von Fieber, Husten oder Hautbeschwerden.",
    daily: "Mit reichlich Wasser und nicht im Liegen einnehmen; danach mindestens 30 Minuten aufrecht bleiben. Sonne und Solarium meiden oder konsequent schützen, weil die Haut empfindlicher werden kann. Abstand zu Eisen-, Calcium- und Magnesiumpräparaten mit der Apotheke klären.",
    sideEffects: "Übelkeit, Durchfall, Bauchbeschwerden und Sonnenempfindlichkeit sind möglich. Es kann die Speiseröhre reizen – besonders bei Einnahme kurz vor dem Hinlegen.",
    urgent: "Bei Schluckschmerzen oder Schmerzen hinter dem Brustbein, schwerem Hautausschlag/Blasen, Atemnot, anhaltend schwerem oder blutigem Durchfall sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Doxycyclin 100 – 1 A Pharma® Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/doxycyclin-100-1a-pharma-tabletten/",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "aciclovir",
    name: "Aciclovir",
    examples: "Referenzpräparat: Aciclovir 400 – 1 A Pharma® Tabletten",
    category: "Virusmittel",
    purpose: "Aciclovir wird gegen bestimmte Herpesvirus-Infektionen eingesetzt, zum Beispiel Gürtelrose; bei geschwächtem Immunsystem auch vorbeugend gegen schwere Herpes-simplex-Infektionen.",
    does: "Es bremst die Vermehrung von Herpesviren.",
    doesNot: "Es heilt die Virusinfektion nicht endgültig und ersetzt keine dringende Abklärung von Gürtelrose im Gesicht/Auge, starken Schmerzen oder neurologischen Beschwerden.",
    daily: "Möglichst früh nach Beginn der Beschwerden und genau nach dem persönlichen Plan einnehmen. Ausreichend trinken, besonders im höheren Alter oder bei eingeschränkter Nierenfunktion.",
    sideEffects: "Übelkeit, Durchfall, Kopfschmerzen und Schwindel können auftreten. Bei hoher Dosis oder eingeschränkter Nierenfunktion kann es zu Nieren- oder neurologischen Problemen kommen.",
    urgent: "Bei deutlich weniger Urin, Verwirrtheit, Halluzinationen, starkem Zittern, Atemnot oder schwerer allergischer Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Aciclovir 400 – 1 A Pharma® Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/aciclovir-400-1a-pharma-tabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "darolutamid",
    name: "Darolutamid",
    examples: "Referenzpräparat: NUBEQA® 300 mg Filmtabletten",
    category: "Krebstherapie",
    purpose: "Darolutamid wird bei erwachsenen Männern mit bestimmten Formen von Prostatakrebs eingesetzt, die auf eine Senkung des Testosterons nicht mehr oder noch ansprechen.",
    does: "Es blockiert männliche Geschlechtshormone an Prostatakrebszellen und kann dadurch ihr Wachstum und ihre Teilung bremsen.",
    doesNot: "Es ist kein Schmerzmittel und keine alleinige Heilung. Es ersetzt weder die begleitende Hormontherapie noch andere geplante Krebsbehandlungen.",
    daily: "Mit einer Mahlzeit und Wasser als ganze Tablette einnehmen. Die onkologische Behandlung nicht selbst pausieren. Alle neuen Medikamente inklusive Johanniskraut und Cholesterinsenker vorher mit Onkologie oder Apotheke prüfen.",
    sideEffects: "Müdigkeit, auffällige Leberwerte, Ausschlag, Schmerzen in Armen/Beinen und Knochenbrüche können auftreten. Je nach Begleitbehandlung sind auch Blutdruck- und Blutbildveränderungen wichtig.",
    urgent: "Bei Brustschmerz, neuer oder rasch zunehmender Atemnot, Ohnmacht, Gelbfärbung von Haut/Augen, schwerem Hautausschlag oder Zeichen eines Schlaganfalls sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: NUBEQA® 300 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/n/nubeqa-300-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "levetiracetam",
    name: "Levetiracetam",
    examples: "Referenzpräparat: Levetiracetam UCB® 500 mg Filmtabletten",
    category: "Antiepileptikum",
    purpose: "Levetiracetam wird zur Behandlung bestimmter epileptischer Anfälle eingesetzt.",
    does: "Es beeinflusst die elektrische Reizweiterleitung im Gehirn und hilft, Anfälle zu verhindern oder seltener zu machen.",
    doesNot: "Es beendet keinen akuten Anfall sicher und darf nicht ohne ärztlichen Plan abgesetzt werden, weil dadurch Anfälle zunehmen können.",
    daily: "Regelmäßig und möglichst zu festen Zeiten einnehmen. Bei eingeschränkter Nierenfunktion kann eine Anpassung nötig sein. Auf neue Reizbarkeit, Aggressivität, Depression oder Verhaltensveränderungen achten.",
    sideEffects: "Müdigkeit, Schläfrigkeit, Schwindel, Kopfschmerzen und Reizbarkeit können auftreten. Stimmung und Verhalten können sich deutlich verändern.",
    urgent: "Bei Suizidgedanken, starker Aggressivität oder Verwirrtheit, schwerem Hautausschlag, Schwellung von Gesicht/Hals oder einem ungewöhnlich langen/mehreren Anfällen sofort Hilfe holen.",
    source: "Gebrauchsinformation: Levetiracetam UCB® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/levetiracetam-ucbR-filmtabletten?kontrast=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "lamotrigin",
    name: "Lamotrigin",
    examples: "Referenzpräparat: Lamotrigin – 1 A Pharma® 100 mg Tabletten",
    category: "Antiepileptikum",
    purpose: "Lamotrigin wird zur Behandlung bestimmter epileptischer Anfälle eingesetzt; je nach Situation auch zur Vorbeugung depressiver Phasen bei bipolarer Erkrankung.",
    does: "Es stabilisiert die elektrische Reizweiterleitung im Gehirn.",
    doesNot: "Es beendet keinen akuten Anfall und darf nicht eigenmächtig abgesetzt werden.",
    daily: "Die Dosis wird besonders langsam gesteigert. Bei jeder neuen Hautveränderung rasch Rücksprache halten. Nach einer Unterbrechung nicht einfach mit der früheren hohen Dosis weiternehmen, sondern den Plan klären.",
    sideEffects: "Schwindel, Kopfschmerzen, Übelkeit, Sehstörungen und Müdigkeit sind möglich. Wichtig ist das seltene Risiko schwerer Hautreaktionen, besonders zu Beginn oder bei zu schneller Dosissteigerung.",
    urgent: "Bei Ausschlag mit Blasen, wunden Stellen im Mund, Fieber, Gesichtsschwellung, Gelbfärbung von Haut/Augen, Suizidgedanken oder Krampfanfall sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Lamotrigin – 1 A Pharma® 100 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/lamotrigin-1a-pharma-100mg-tabletten?drucken=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "baclofen",
    name: "Baclofen",
    examples: "Referenzpräparat: Baclofen dura® 10 mg Tabletten",
    category: "Muskelentspannendes Mittel",
    purpose: "Baclofen wird bei krankhaft erhöhter Muskelspannung und Muskelkrämpfen eingesetzt, zum Beispiel bei Erkrankungen des Gehirns oder Rückenmarks.",
    does: "Es dämpft bestimmte Nervensignale und kann dadurch Muskelspastik und Krämpfe verringern.",
    doesNot: "Es behandelt nicht die Ursache der neurologischen Erkrankung und ist kein gewöhnliches Schmerzmittel.",
    daily: "Die Dosis wird langsam angepasst. Es kann müde und benommen machen. Nicht plötzlich absetzen: besonders nach längerer Einnahme können gefährliche Entzugssymptome auftreten. Alkohol, Opioide und andere Beruhigungsmittel verstärken die Wirkung.",
    sideEffects: "Müdigkeit, Schläfrigkeit, Schwindel, Muskelschwäche, Übelkeit und Verwirrtheit können auftreten. Bei eingeschränkter Nierenfunktion kann der Wirkstoff stärker wirken.",
    urgent: "Bei flacher/langsamer Atmung, kaum weckbarer Schläfrigkeit, Halluzinationen, Krampfanfall, hohem Fieber mit Muskelsteife oder schwerer allergischer Reaktion sofort den Notruf wählen.",
    source: "Gebrauchsinformation: Baclofen dura® 10 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/b/baclofen-dura-10-mg-tabletten/",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "degarelix",
    name: "Degarelix",
    examples: "Referenzpräparat: FIRMAGON® 80 mg Pulver und Lösungsmittel zur Injektion",
    category: "Krebstherapie",
    purpose: "Degarelix wird bei erwachsenen Männern mit hormonabhängigem Prostatakrebs eingesetzt, wenn eine Senkung des Testosterons Teil der Behandlung ist.",
    does: "Es senkt die Testosteronbildung. Dadurch kann das Wachstum von Prostatakrebszellen gebremst werden.",
    doesNot: "Es ist kein Schmerzmittel und heilt den Krebs nicht allein. Es ersetzt weder eine geplante Bestrahlung noch andere Krebsbehandlungen.",
    daily: "Die Behandlung wird als Spritze unter die Bauchhaut in der Praxis oder Klinik gegeben. Wirksamkeit und Verträglichkeit werden unter anderem mit PSA- und Testosteronwerten kontrolliert.",
    sideEffects: "Hitzewallungen, Müdigkeit, Gewichtszunahme, sexuelle Funktionsstörungen und Reaktionen an der Einstichstelle können auftreten. Langfristig sind auch Knochen- und Herz-Kreislauf-Risiken wichtig.",
    urgent: "Bei Brustschmerz, Atemnot, Ohnmacht, Schwellung von Gesicht/Hals, starkem Hautausschlag oder einer schweren Reaktion an der Einstichstelle sofort medizinische Hilfe holen.",
    source: "EMA-Produktinformation: FIRMAGON® (Degarelix), abgerufen am 21.07.2026",
    sourceUrl: "https://www.ema.europa.eu/en/documents/overview/firmagon-epar-medicine-overview_en.pdf",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "relugolix",
    name: "Relugolix",
    examples: "Referenzpräparat: ORGOVYX® 120 mg Filmtabletten",
    category: "Krebstherapie",
    purpose: "Relugolix wird bei erwachsenen Männern mit fortgeschrittenem hormonsensitivem Prostatakrebs eingesetzt.",
    does: "Es blockiert ein Signal zur Testosteronbildung. Dadurch sinkt Testosteron, das das Wachstum vieler Prostatakrebszellen fördern kann.",
    doesNot: "Es ist weder Schmerzmittel noch eine alleinige Heilung und ersetzt keine geplante Bestrahlung oder andere onkologische Behandlung.",
    daily: "Als Tablette täglich zur ähnlichen Zeit einnehmen; am ersten Behandlungstag gilt ein besonderer, ärztlich festgelegter Startplan. Nicht selbst pausieren, da sich die Hormonunterdrückung verändern kann.",
    sideEffects: "Hitzewallungen, Müdigkeit, Muskel- und Gelenkschmerzen, Durchfall oder Verstopfung sind häufig. Wechselwirkungen und mögliche Herzrhythmusrisiken müssen mit dem Onkologie-Team geprüft werden.",
    urgent: "Bei Brustschmerz, Ohnmacht, starkem/unregelmäßigem Herzschlag, Atemnot, Zeichen eines Schlaganfalls oder schwerer allergischer Reaktion sofort medizinische Hilfe holen.",
    source: "EMA-Produktinformation: ORGOVYX® (Relugolix), abgerufen am 21.07.2026",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/orgovyx",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "enzalutamid",
    name: "Enzalutamid",
    examples: "Referenzpräparat: XTANDI® 40 mg Filmtabletten",
    category: "Krebstherapie",
    purpose: "Enzalutamid wird bei verschiedenen Formen von Prostatakrebs eingesetzt, abhängig davon, ob der Krebs gestreut ist und wie er auf eine Hormonentzugstherapie anspricht.",
    does: "Es blockiert die Wirkung männlicher Geschlechtshormone an Krebszellen und kann so das Krebswachstum verlangsamen.",
    doesNot: "Es ist kein Schmerzmittel und keine alleinige Heilung. Begleitende Hormontherapie oder andere onkologische Behandlungen bleiben je nach Therapieplan notwendig.",
    daily: "Einmal täglich genau nach dem Plan des Onkologie-Teams einnehmen. Vor allen neuen Arzneimitteln, auch frei verkäuflichen, die Apotheke oder Onkologie fragen: Enzalutamid kann viele Wechselwirkungen verursachen.",
    sideEffects: "Müdigkeit, Hitzewallungen, Bluthochdruck, Stürze und Knochenbrüche können auftreten. Wichtige seltenere Risiken sind Krampfanfälle und Durchblutungsstörungen des Herzens.",
    urgent: "Bei Krampfanfall, Brustschmerz, Ohnmacht, plötzlicher Schwäche/Sprachstörung, schwerem Sturz oder schwerer allergischer Reaktion sofort den Notruf wählen.",
    source: "EMA-Produktinformation: XTANDI® (Enzalutamid), abgerufen am 21.07.2026",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/xtandi",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "colchicin",
    name: "Colchicin",
    examples: "Referenzpräparat: Colchicin 0,5 mg Tabletten – konkrete Marke vor Freigabe abgleichen",
    category: "Gichtmittel",
    purpose: "Colchicin wird unter ärztlicher Anleitung bei Gichtanfällen und in bestimmten Situationen zur Vorbeugung weiterer Gichtanfälle eingesetzt.",
    does: "Es bremst die Entzündungsreaktion, die durch Harnsäurekristalle ausgelöst wird.",
    doesNot: "Es senkt den Harnsäurewert nicht dauerhaft und ersetzt keine langfristige Harnsäuretherapie wie Allopurinol, wenn diese verordnet ist.",
    daily: "Es hat nur einen kleinen Abstand zwischen wirksamer und giftiger Menge. Niemals die Dosis selbst erhöhen oder mit bestimmten Antibiotika, Pilzmitteln oder Grapefruit ohne Prüfung kombinieren. Bei Nieren- oder Leberproblemen besonders vorsichtig.",
    sideEffects: "Übelkeit, Erbrechen, Bauchschmerzen und Durchfall sind häufig frühe Warnzeichen einer zu hohen Belastung. Bei Überdosierung sind schwere Blutbild-, Muskel-, Nerven- und Organprobleme möglich.",
    urgent: "Bei starkem oder anhaltendem Durchfall/Erbrechen, Muskelschwäche oder -schmerzen, Taubheitsgefühl, Fieber, Blutungen oder versehentlicher Überdosierung sofort den Giftnotruf bzw. medizinische Hilfe kontaktieren.",
    source: "Fachinformation: Colchicin-haltige 0,5-mg-Tabletten; konkrete deutsche Marke/Stärke vor Freigabe abgleichen (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.fachinfo.de/",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "mirabegron",
    name: "Mirabegron",
    examples: "Referenzpräparat: BETMIGA® 50 mg Retardtabletten",
    category: "Urologisches Medikament",
    purpose: "Mirabegron wird bei einer überaktiven Blase gegen starken Harndrang, häufiges Wasserlassen und Dranginkontinenz eingesetzt.",
    does: "Es entspannt den Blasenmuskel. Dadurch kann die Blase mehr Urin speichern und der plötzliche Harndrang abnehmen.",
    doesNot: "Es behandelt keine Harnwegsinfektion, Prostatavergrößerung oder Ursache von Blut im Urin. Diese Beschwerden müssen separat abgeklärt werden.",
    daily: "Die Retardtablette im Ganzen schlucken; nicht teilen, zerdrücken oder zerkauen. Blutdruck und Puls kontrollieren lassen, besonders bei bereits bestehendem Bluthochdruck.",
    sideEffects: "Blutdruckanstieg, schneller Puls, Kopfschmerzen, Schwindel, Verstopfung und Harnwegsinfektionen können auftreten. Es kann die Blasenentleerung erschweren.",
    urgent: "Bei Unfähigkeit Wasser zu lassen, starkem Herzklopfen/Ohnmacht, sehr hohem Blutdruck mit Beschwerden, Brustschmerz oder schwerer allergischer Reaktion sofort medizinische Hilfe holen.",
    source: "EMA-Produktinformation: BETMIGA® (Mirabegron), abgerufen am 21.07.2026",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/betmiga",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "nitrofurantoin",
    name: "Nitrofurantoin",
    examples: "Referenzpräparat: Nitrofurantoin-ratiopharm® 100 mg Retardkapseln",
    category: "Antibiotikum",
    purpose: "Nitrofurantoin wird zur Behandlung bestimmter Harnwegsinfektionen eingesetzt.",
    does: "Es hemmt Bakterien im Harntrakt.",
    doesNot: "Es eignet sich nicht für jede Harnwegsinfektion und behandelt keine unklare Flankenschmerz-, Fieber- oder Blut-im-Urin-Ursache ohne ärztliche Abklärung.",
    daily: "Mit einer Mahlzeit und ausreichend Flüssigkeit einnehmen; Kapseln unzerkaut schlucken. Die Behandlung genau nach dem verordneten Plan durchführen. Nierenfunktion und die Dauer der Anwendung sind wichtig.",
    sideEffects: "Übelkeit, Appetitlosigkeit, Kopfschmerzen und eine harmlose Gelb- bis Braunfärbung des Urins können auftreten. Selten sind Lungen-, Leber-, Nerven- oder schwere Hautreaktionen möglich.",
    urgent: "Bei neuer Atemnot, Husten oder Fieber, Gelbfärbung von Haut/Augen, Taubheitsgefühl/Kribbeln, starkem Hautausschlag oder schwerem Durchfall sofort medizinische Hilfe holen.",
    source: "Fachinformation: Nitrofurantoin-ratiopharm® 100 mg Retardkapseln (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.fachinfo.de/fi/pdf/001489/nitrofurantoin-ratiopharm-r-100-mg-retardkapseln",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "salmeterol",
    name: "Salmeterol",
    examples: "Referenzpräparat: Serevent® Dosier-Aerosol 25 Mikrogramm/Dosis",
    category: "Atemwegsmedikament",
    purpose: "Salmeterol wird zur Langzeitbehandlung von Asthma oder COPD eingesetzt, wenn die Atemwege dauerhaft verengt sind.",
    does: "Es erweitert die Bronchien über viele Stunden und kann Atemnot, pfeifende Atmung und Husten lindern.",
    doesNot: "Es ist kein Mittel für den akuten Asthmaanfall. Bei Asthma ersetzt es nicht die regelmäßige entzündungshemmende Behandlung mit inhalativem Kortison.",
    daily: "Nur inhalieren und die Technik kontrollieren lassen. Die Einnahmeabstände einhalten. Nimmt die Atemnot zu oder wird das Notfallspray öfter gebraucht, zeitnah den Therapieplan prüfen lassen.",
    sideEffects: "Zittern, Kopfschmerzen, Herzklopfen, schneller Puls und Muskelkrämpfe können auftreten. Selten kann sich die Atmung unmittelbar nach Inhalation verschlechtern.",
    urgent: "Bei plötzlich stärkerer Atemnot direkt nach Inhalation, Brustschmerz, starkem/unregelmäßigem Herzschlag, Ohnmacht oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Serevent® Dosier-Aerosol (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/serevent-dosier-aerosol",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "donepezil",
    name: "Donepezil",
    examples: "Referenzpräparat: Donepezil-HCl Aurobindo® 10 mg Filmtabletten",
    category: "Demenzmedikament",
    purpose: "Donepezil wird zur symptomatischen Behandlung der leichten bis mittelschweren Alzheimer-Demenz eingesetzt.",
    does: "Es erhöht die Verfügbarkeit des Botenstoffs Acetylcholin im Gehirn und kann bei manchen Menschen Denken und Alltagsfunktion zeitweise unterstützen.",
    doesNot: "Es heilt Alzheimer nicht und stoppt das Fortschreiten der Erkrankung nicht sicher.",
    daily: "Die Dosis wird schrittweise aufgebaut. Bei Gewichtsverlust, wiederholtem Erbrechen, Ohnmacht oder neuen Schlafproblemen frühzeitig Rücksprache halten. Andere Medikamente, die den Puls verlangsamen, unbedingt prüfen lassen.",
    sideEffects: "Übelkeit, Durchfall, Erbrechen, Appetitverlust, Gewichtsabnahme, Schlafstörungen, Schwindel und langsamer Puls können auftreten.",
    urgent: "Bei Ohnmacht, sehr langsamem/unregelmäßigem Herzschlag, Krampfanfall, schwarzem Stuhl oder Bluterbrechen, Atemnot oder schwerer allergischer Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Donepezil-HCl Aurobindo® 10 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/donepezil-hcl-aurobindo-10-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "memantin",
    name: "Memantin",
    examples: "Referenzpräparat: Memantin – 1 A Pharma® 10 mg Filmtabletten",
    category: "Demenzmedikament",
    purpose: "Memantin wird zur symptomatischen Behandlung der mittelschweren bis schweren Alzheimer-Demenz eingesetzt.",
    does: "Es beeinflusst einen Botenstoff im Gehirn (Glutamat) und kann bei manchen Menschen Alltagsfunktionen und Beschwerden zeitweise unterstützen.",
    doesNot: "Es heilt Alzheimer nicht und stoppt den Verlauf der Erkrankung nicht sicher.",
    daily: "Die Dosis wird über mehrere Wochen schrittweise erhöht. Bei eingeschränkter Nierenfunktion ist ein anderer Plan nötig. Neue Medikamente und deutliche Veränderungen von Verwirrtheit oder Verhalten ansprechen.",
    sideEffects: "Schwindel, Kopfschmerzen, Verstopfung, Schläfrigkeit, erhöhter Blutdruck und Verwirrtheit können auftreten.",
    urgent: "Bei Ohnmacht, Krampfanfall, starkem Blutdruckanstieg mit Beschwerden, ausgeprägter Verwirrtheit/Halluzinationen oder schwerer allergischer Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Memantin – 1 A Pharma® 10 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/m/memantin-1a-pharma-10-mg-filmtabletten?kontrast=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "risperidon",
    name: "Risperidon",
    examples: "Referenzpräparat: Risperidon – 1 A Pharma® 1 mg Filmtabletten",
    category: "Antipsychotikum",
    purpose: "Risperidon wird bei bestimmten psychischen Erkrankungen eingesetzt; bei Alzheimer-Demenz nur kurzzeitig bei anhaltender Aggression, wenn andere Maßnahmen nicht ausreichen und eine Gefahr besteht.",
    does: "Es beeinflusst Botenstoffe im Gehirn und kann psychotische Symptome, starke Unruhe oder Aggressionen lindern.",
    doesNot: "Es ist kein allgemeines Beruhigungsmittel und keine Dauerlösung für Unruhe bei Demenz. Nicht-medikamentöse Ursachen und Maßnahmen gehören vorher dazu.",
    daily: "Dosis langsam und genau nach Plan. Bei älteren Menschen mit Demenz besonders kritisch prüfen: Risperidon kann das Risiko für Schlaganfall und Tod erhöhen, besonders zusammen mit Furosemid. Nicht abrupt selbst absetzen.",
    sideEffects: "Müdigkeit, Schwindel, Stürze, Gewichtszunahme, Bewegungsstörungen, niedriger Blutdruck beim Aufstehen und erhöhte Blutzuckerwerte können auftreten.",
    urgent: "Bei plötzlicher Lähmung/Sprachstörung, hohem Fieber mit Muskelsteife und Verwirrtheit, unwillkürlichen Bewegungen, Brustschmerz, Ohnmacht oder schwerer allergischer Reaktion sofort den Notruf wählen.",
    source: "Gebrauchsinformation: Risperidon – 1 A Pharma® 1 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/r/risperidon-1a-pharma-1mg-filmtabletten?kontrast=an",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "perindopril",
    name: "Perindopril",
    examples: "Referenzpräparat: COVERSUM Arginin® 5 mg Filmtabletten",
    category: "Blutdrucksenker",
    purpose: "Perindopril wird gegen Bluthochdruck, bei bestimmten Formen der Herzschwäche und zur Senkung bestimmter Herz-Kreislauf-Risiken eingesetzt.",
    does: "Es ist ein ACE-Hemmer. Blutgefäße entspannen sich, der Blutdruck kann sinken und das Herz wird entlastet.",
    doesNot: "Es ist kein Mittel gegen akuten Brustschmerz, plötzliche Atemnot oder eine Blutdruckkrise und ersetzt keine Notfallbehandlung.",
    daily: "Regelmäßig wie verordnet einnehmen. Besonders zu Beginn können Schwindel und Schwäche auftreten. Nierenfunktion und Kalium im Blut müssen ärztlich kontrolliert werden.",
    sideEffects: "Möglich sind trockener Reizhusten, Schwindel, niedriger Blutdruck, erhöhte Kaliumwerte und Veränderungen der Nierenfunktion.",
    urgent: "Bei Schwellung von Gesicht, Lippen, Zunge oder Hals, Atemnot, Ohnmacht oder deutlich weniger Urin sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: COVERSUM Arginin® 5 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/coversumR-arginin-5-mg-filmtabletten/",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "nifedipin",
    name: "Nifedipin",
    examples: "Referenzpräparat: Nifedipin AbZ® 20 mg Retardtabletten",
    category: "Blutdrucksenker",
    purpose: "Nifedipin retard wird zur Behandlung von Bluthochdruck und je nach Präparat bei bestimmten Durchblutungsstörungen des Herzens eingesetzt.",
    does: "Es erweitert Blutgefäße. Dadurch kann der Blutdruck sinken und das Herz besser durchblutet werden.",
    doesNot: "Es ist kein Mittel gegen plötzlich auftretenden Brustschmerz oder eine akute Blutdruckkrise.",
    daily: "Retardtabletten unzerkaut schlucken und nicht eigenmächtig teilen, zerkauen oder zerdrücken. Grapefruit und Grapefruitsaft meiden, weil sie die Wirkung verstärken können.",
    sideEffects: "Kopfschmerzen, Gesichtsrötung, Schwindel, Herzklopfen und geschwollene Knöchel oder Beine können auftreten.",
    urgent: "Bei Brustschmerz, Ohnmacht, starker Atemnot, sehr schnellem/unregelmäßigem Herzschlag oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Nifedipin AbZ® 20 mg Retardtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.abz.de/medikamente/details/nifedipin-abz-20-mg-retardtabletten-pzn-1016612.html",
    reviewStatus: "Quellenbasierter Entwurf – Prüfung durch Sonja ausstehend"
  },
  {
    id: "sacubitril-valsartan",
    name: "Sacubitril / Valsartan",
    examples: "Referenzpräparat: Entresto® Filmtabletten",
    category: "Herzschwächemittel",
    purpose: "Sacubitril / Valsartan wird bei bestimmten Formen einer chronischen Herzschwäche eingesetzt.",
    does: "Die Kombination entlastet das Herz und die Blutgefäße. Sie soll helfen, Beschwerden und Krankenhausaufenthalte wegen Herzschwäche zu verringern.",
    doesNot: "Sie heilt eine Herzschwäche nicht sofort und ist kein Mittel gegen plötzlich starke Atemnot oder Brustschmerzen.",
    daily: "Regelmäßig wie verordnet einnehmen. Blutdruck, Nierenfunktion und Kaliumwerte werden ärztlich kontrolliert. Nicht zusammen mit einem ACE-Hemmer einnehmen; beim Wechsel ist eine ärztlich festgelegte Pause nötig.",
    sideEffects: "Niedriger Blutdruck mit Schwindel, erhöhte Kaliumwerte und Veränderungen der Nierenfunktion können auftreten.",
    urgent: "Bei Schwellung von Gesicht, Lippen, Zunge oder Hals, Atemnot, Ohnmacht oder deutlich weniger Urin sofort medizinische Hilfe holen.",
    source: "EMA: Entresto® – Produktinformation (aktualisiert 01/2026, abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/entresto",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "ivabradin",
    name: "Ivabradin",
    examples: "Referenzpräparat: Corlentor® Filmtabletten",
    category: "Herzschwächemittel",
    purpose: "Ivabradin wird bei ausgewählten Menschen mit chronischer Herzschwäche und bei bestimmten Formen von Angina pectoris eingesetzt.",
    does: "Es verlangsamt gezielt den Herzschlag. Das kann das Herz entlasten.",
    doesNot: "Es löst keinen akuten Angina-pectoris-Anfall und ersetzt bei Brustschmerzen keine Notfallhilfe.",
    daily: "Wie verordnet einnehmen. Puls und Blutdruck beachten; neue Medikamente und Grapefruitprodukte vorher in der Apotheke oder Praxis abklären.",
    sideEffects: "Ein zu langsamer Puls, Schwindel, Müdigkeit und vorübergehend helle Lichtphänomene im Blickfeld können auftreten.",
    urgent: "Bei Ohnmacht, starkem Schwindel, neuem unregelmäßigem Herzschlag oder anhaltenden Brustschmerzen sofort Hilfe holen.",
    source: "EMA: Corlentor® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/corlentor",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "ticagrelor",
    name: "Ticagrelor",
    examples: "Referenzpräparat: Brilique® Filmtabletten",
    category: "Blutplättchenhemmer",
    purpose: "Ticagrelor wird zusammen mit Acetylsalicylsäure bei bestimmten Herz-Kreislauf-Erkrankungen eingesetzt, zum Beispiel nach einem Herzinfarkt oder Stent.",
    does: "Es hemmt Blutplättchen. So soll es verhindern, dass sich gefährliche Blutgerinnsel bilden.",
    doesNot: "Es löst ein bereits bestehendes Blutgerinnsel nicht auf und behandelt keinen akuten Brustschmerz selbst.",
    daily: "Nicht eigenmächtig absetzen, besonders nicht nach einem Stent. Vor Operationen, Zahnbehandlungen und bei neuen Medikamenten immer die behandelnde Praxis informieren.",
    sideEffects: "Blutungen, blaue Flecken, Nasenbluten und Atemnot können auftreten.",
    urgent: "Bei nicht stillbarer Blutung, Blut im Erbrochenen, schwarzem Stuhl, Blut im Urin, plötzlicher Schwäche oder starken Kopfschmerzen sofort Hilfe holen.",
    source: "EMA: Brilique® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/brilique",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "prasugrel",
    name: "Prasugrel",
    examples: "Referenzpräparat: Efient® Filmtabletten",
    category: "Blutplättchenhemmer",
    purpose: "Prasugrel wird zusammen mit Acetylsalicylsäure nach bestimmten Herzereignissen oder einer Stentbehandlung eingesetzt.",
    does: "Es hemmt Blutplättchen und senkt damit das Risiko, dass sich Blutgerinnsel bilden.",
    doesNot: "Es ist kein Schmerzmittel und löst kein vorhandenes Blutgerinnsel auf.",
    daily: "Nicht ohne Rücksprache absetzen. Vor Eingriffen, Stürzen oder neuen Arzneimitteln die Praxis oder Apotheke informieren.",
    sideEffects: "Blutungen und blaue Flecken können leichter auftreten.",
    urgent: "Bei schwerer oder nicht stillbarer Blutung, schwarzem Stuhl, Bluterbrechen, Blut im Urin, plötzlichen neurologischen Ausfällen oder nach einem schweren Sturz sofort Hilfe holen.",
    source: "EMA: Efient® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/efient",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "evolocumab",
    name: "Evolocumab",
    examples: "Referenzpräparat: Repatha® Injektionslösung",
    category: "Cholesterinsenker",
    purpose: "Evolocumab wird bei stark erhöhtem Cholesterin oder hohem Herz-Kreislauf-Risiko eingesetzt, wenn andere Maßnahmen nicht ausreichen oder nicht vertragen werden.",
    does: "Es senkt vor allem das LDL-Cholesterin im Blut. Das kann das Risiko für Herzinfarkt und Schlaganfall verringern.",
    doesNot: "Es beseitigt keine bereits vorhandene Gefäßverengung und hilft nicht gegen akute Brustschmerzen.",
    daily: "Als Spritze in den vorgesehenen Abständen anwenden; die genaue Anwendung zeigen lassen. Termine und die übrige Cholesterintherapie beibehalten.",
    sideEffects: "Reaktionen an der Einstichstelle, erkältungsähnliche Beschwerden, Rücken- oder Muskelschmerzen können auftreten.",
    urgent: "Bei Schwellung von Gesicht oder Hals, Atemnot oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "EMA: Repatha® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/repatha",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "alirocumab",
    name: "Alirocumab",
    examples: "Referenzpräparat: Praluent® Injektionslösung",
    category: "Cholesterinsenker",
    purpose: "Alirocumab wird bei erhöhtem Cholesterin und hohem Herz-Kreislauf-Risiko eingesetzt, meist zusätzlich zu Ernährung und anderen Cholesterinsenkern.",
    does: "Es senkt vor allem das LDL-Cholesterin. Dadurch kann es das Risiko für Herz-Kreislauf-Ereignisse senken.",
    doesNot: "Es ist kein Mittel für akute Beschwerden wie Brustschmerz oder Atemnot.",
    daily: "Als Spritze in den verordneten Abständen anwenden und die Handhabung vorher zeigen lassen. Nicht selbst die Dosis oder das Intervall ändern.",
    sideEffects: "Reaktionen an der Einstichstelle, erkältungsähnliche Beschwerden und Juckreiz können auftreten.",
    urgent: "Bei Atemnot, Schwellung von Gesicht oder Hals oder einer starken allergischen Reaktion sofort Hilfe holen.",
    source: "EMA: Praluent® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/praluent",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "inclisiran",
    name: "Inclisiran",
    examples: "Referenzpräparat: Leqvio® Injektionslösung",
    category: "Cholesterinsenker",
    purpose: "Inclisiran wird bei erhöhtem LDL-Cholesterin eingesetzt, wenn Ernährung und andere Cholesterinsenker allein nicht ausreichen oder nicht geeignet sind.",
    does: "Es senkt die LDL-Cholesterinwerte über eine gezielte Wirkung in der Leber.",
    doesNot: "Es ersetzt keine Notfallbehandlung bei Brustschmerz und macht eine vorhandene Gefäßverengung nicht rückgängig.",
    daily: "Die Spritze wird durch medizinisches Fachpersonal in festen Abständen gegeben. Termine nicht ohne Rücksprache auslassen.",
    sideEffects: "Am häufigsten sind Reaktionen an der Einstichstelle, zum Beispiel Schmerzen, Rötung oder Ausschlag.",
    urgent: "Bei Atemnot, Schwellung von Gesicht oder Hals oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "EMA: Leqvio® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/leqvio",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "vericiguat",
    name: "Vericiguat",
    examples: "Referenzpräparat: Verquvo® Filmtabletten",
    category: "Herzschwächemittel",
    purpose: "Vericiguat wird zusätzlich zu anderen Arzneimitteln bei einer bestimmten chronischen Herzschwäche mit verringerter Pumpkraft eingesetzt, besonders nach einer Verschlechterung.",
    does: "Es entspannt Blutgefäße und soll das Herz beim Pumpen entlasten.",
    doesNot: "Es behandelt keine plötzlich auftretende Atemnot, Brustschmerzen oder Ohnmacht.",
    daily: "Zu einer Mahlzeit wie verordnet einnehmen. Bei Schwindel, niedrigem Blutdruck oder neuen Medikamenten die Praxis informieren.",
    sideEffects: "Niedriger Blutdruck mit Schwindel und Blutarmut können auftreten.",
    urgent: "Bei Ohnmacht, starker Atemnot, neuem Brustschmerz oder ausgeprägtem Schwindel sofort medizinische Hilfe holen.",
    source: "EMA: Verquvo® – Produktinformation (aktualisiert 04/2026, abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/verquvo",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "finerenon",
    name: "Finerenon",
    examples: "Referenzpräparat: Kerendia® Filmtabletten",
    category: "Nieren- und Herzschutz",
    purpose: "Finerenon wird bei chronischer Nierenerkrankung mit Eiweiß im Urin bei Typ-2-Diabetes und bei bestimmten Formen chronischer Herzschwäche eingesetzt.",
    does: "Es blockiert eine Hormonwirkung, die Herz und Nieren belasten kann. Dadurch soll es das Fortschreiten der Erkrankung und Herz-Kreislauf-Risiken senken.",
    doesNot: "Es senkt einen hohen Blutzucker nicht unmittelbar und ersetzt keine Behandlung bei akuter Atemnot oder plötzlich weniger Urin.",
    daily: "Kaliumwert und Nierenfunktion müssen kontrolliert werden. Alle Medikamente und Kaliumpräparate in der Praxis oder Apotheke angeben.",
    sideEffects: "Erhöhte Kaliumwerte, niedriger Blutdruck und Veränderungen der Nierenfunktion können auftreten.",
    urgent: "Bei Muskelschwäche, Herzstolpern, Ohnmacht, starker Atemnot oder deutlich weniger Urin sofort medizinische Hilfe holen.",
    source: "EMA: Kerendia® – Produktinformation (aktualisiert 05/2026, abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/kerendia",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "bempedoinsaeure",
    name: "Bempedoinsäure",
    examples: "Referenzpräparat: Nilemdo® Filmtabletten",
    category: "Cholesterinsenker",
    purpose: "Bempedoinsäure wird bei erhöhtem Cholesterin eingesetzt, wenn ein Statin allein nicht ausreicht, nicht vertragen wird oder nicht angewendet werden kann.",
    does: "Sie senkt die Cholesterinbildung in der Leber und damit vor allem das LDL-Cholesterin.",
    doesNot: "Sie ersetzt keine Notfallbehandlung bei Brustschmerz oder Schlaganfallzeichen und löst keine Gefäßverengung auf.",
    daily: "Regelmäßig wie verordnet einnehmen. Bei neuen Muskel- oder Sehnenbeschwerden frühzeitig die Praxis kontaktieren.",
    sideEffects: "Erhöhte Harnsäurewerte, Gichtanfälle, Veränderungen der Leberwerte und Sehnenprobleme können auftreten.",
    urgent: "Bei plötzlichen starken Schmerzen, Schwellung oder Bluterguss an einer Sehne, besonders an der Ferse, die Einnahme ärztlich abklären lassen. Bei schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "EMA: Nilemdo® – Produktinformation (aktualisiert 02/2026, abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/nilemdo",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "icosapent-ethyl",
    name: "Icosapent-Ethyl",
    examples: "Referenzpräparat: Vazkepa® Weichkapseln",
    category: "Cholesterinsenker",
    purpose: "Icosapent-Ethyl wird zusätzlich zu einem Statin eingesetzt, um bei bestimmten Menschen mit erhöhten Triglyzeriden das Herz-Kreislauf-Risiko zu senken.",
    does: "Es beeinflusst Blutfette und soll das Risiko für Herzinfarkt, Schlaganfall und ähnliche Ereignisse senken.",
    doesNot: "Es ist kein allgemeines Fischölpräparat und behandelt keine akuten Herzbeschwerden.",
    daily: "Mit oder nach dem Essen wie verordnet einnehmen. Besonders bei Gerinnungshemmern oder Blutplättchenhemmern alle Medikamente angeben.",
    sideEffects: "Vorhofflimmern oder -flattern und Blutungen können häufiger auftreten.",
    urgent: "Bei nicht stillbarer Blutung, schwarzem Stuhl, Bluterbrechen, Herzrasen mit Schwindel, Brustschmerz oder Ohnmacht sofort Hilfe holen.",
    source: "EMA: Vazkepa® – Produktinformation (aktualisiert 03/2026, abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/vazkepa",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "linagliptin",
    name: "Linagliptin",
    examples: "Referenzpräparat: Trajenta® Filmtabletten",
    category: "Diabetesmittel",
    purpose: "Linagliptin wird bei Erwachsenen mit Typ-2-Diabetes eingesetzt, wenn Ernährung, Bewegung und andere Maßnahmen den Blutzucker nicht ausreichend kontrollieren.",
    does: "Es verbessert nach dem Essen die körpereigene Insulinantwort und kann dadurch den Blutzucker senken.",
    doesNot: "Es ist kein Insulin und behandelt eine schwere Unterzuckerung oder eine Ketoazidose nicht.",
    daily: "Täglich wie verordnet einnehmen. Zusammen mit Insulin oder bestimmten anderen Diabetesmitteln kann das Unterzuckerungsrisiko steigen.",
    sideEffects: "Erkältungsähnliche Beschwerden, Husten und in Kombination mit anderen Diabetesmitteln Unterzuckerungen können auftreten.",
    urgent: "Bei starken, anhaltenden Bauchschmerzen mit oder ohne Erbrechen, Schwellung von Gesicht oder Hals oder schwerem Hautausschlag sofort medizinische Hilfe holen.",
    source: "EMA: Trajenta® – Produktinformation (aktualisiert 06/2026, abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/trajenta",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "insulin-degludec",
    name: "Insulin degludec",
    examples: "Referenzpräparat: Tresiba® Injektionslösung im Fertigpen",
    category: "Diabetesmittel",
    purpose: "Insulin degludec wird zur Behandlung von Diabetes eingesetzt, wenn der Körper nicht genug Insulin bereitstellt oder es nicht ausreichend wirkt.",
    does: "Es ist ein lang wirkendes Insulin und senkt den Blutzucker über einen längeren Zeitraum.",
    doesNot: "Es ist nicht für die schnelle Behandlung einer schweren Unterzuckerung gedacht und ersetzt bei Typ-1-Diabetes kein Mahlzeiteninsulin.",
    daily: "Nur in der verordneten Dosis spritzen. Essen, Bewegung, Alkohol und andere Diabetesmittel beeinflussen den Bedarf. Unterzuckerungen erkennen und behandeln können.",
    sideEffects: "Unterzuckerung ist die wichtigste Nebenwirkung. Auch Gewichtszunahme, Reaktionen an der Einstichstelle und Schwellungen können auftreten.",
    urgent: "Bei Bewusstseinsstörung, Krampfanfall oder wenn eine Unterzuckerung nicht selbst behandelt werden kann, sofort den Notruf wählen.",
    source: "EMA: Tresiba® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/tresiba",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "insulin-aspart",
    name: "Insulin aspart",
    examples: "Referenzpräparat: NovoRapid® Injektionslösung im Fertigpen",
    category: "Diabetesmittel",
    purpose: "Insulin aspart wird zur Behandlung von Diabetes eingesetzt, besonders rund um Mahlzeiten.",
    does: "Es ist ein schnell wirkendes Insulin. Es senkt den Blutzucker nach einer Mahlzeit.",
    doesNot: "Es ist kein lang wirkendes Basisinsulin und behandelt eine bereits schwere Unterzuckerung nicht.",
    daily: "Zum vereinbarten Zeitpunkt rund um die Mahlzeit spritzen und danach essen. Dosis nicht ohne Plan ändern; Unterzuckerungen erkennen und behandeln können.",
    sideEffects: "Unterzuckerung ist die wichtigste Nebenwirkung. Auch Reaktionen an der Einstichstelle und Gewichtszunahme können auftreten.",
    urgent: "Bei Bewusstseinsstörung, Krampfanfall oder wenn eine Unterzuckerung nicht selbst behandelt werden kann, sofort den Notruf wählen.",
    source: "EMA: NovoRapid® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/novorapid",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "insulin-lispro",
    name: "Insulin lispro",
    examples: "Referenzpräparat: Humalog® 100 Einheiten/ml Injektionslösung",
    category: "Diabetesmittel",
    purpose: "Insulin lispro wird zur Behandlung von Diabetes eingesetzt, besonders rund um Mahlzeiten.",
    does: "Es ist ein schnell wirkendes Insulin und senkt den Blutzucker nach einer Mahlzeit.",
    doesNot: "Es ist kein lang wirkendes Basisinsulin und behandelt eine bereits schwere Unterzuckerung nicht.",
    daily: "Zum vereinbarten Zeitpunkt rund um die Mahlzeit spritzen und danach essen. Produkt, Konzentration und Dosis nie selbst austauschen.",
    sideEffects: "Unterzuckerung ist die wichtigste Nebenwirkung. Auch Reaktionen an der Einstichstelle und Gewichtszunahme können auftreten.",
    urgent: "Bei Bewusstseinsstörung, Krampfanfall oder wenn eine Unterzuckerung nicht selbst behandelt werden kann, sofort den Notruf wählen.",
    source: "EMA: Humalog® – Produktinformation (aktualisiert 07/2026, abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/humalog",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "dulaglutid",
    name: "Dulaglutid",
    examples: "Referenzpräparat: Trulicity® Injektionslösung im Fertigpen",
    category: "Diabetesmittel",
    purpose: "Dulaglutid wird bei Erwachsenen mit Typ-2-Diabetes eingesetzt, wenn der Blutzucker mit Ernährung, Bewegung und anderen Mitteln nicht ausreichend kontrolliert ist.",
    does: "Es hilft dem Körper, nach dem Essen mehr Insulin bereitzustellen, und verlangsamt die Magenentleerung. Es kann den Blutzucker senken.",
    doesNot: "Es ist kein Insulin und behandelt eine schwere Unterzuckerung oder eine Ketoazidose nicht.",
    daily: "Einmal wöchentlich am vereinbarten Tag spritzen. Bei starkem Erbrechen, Durchfall oder neuen Bauchschmerzen frühzeitig die Praxis kontaktieren.",
    sideEffects: "Übelkeit, Durchfall, Erbrechen, Bauchschmerzen und verminderter Appetit können auftreten. Zusammen mit Insulin oder Sulfonylharnstoff sind Unterzuckerungen möglich.",
    urgent: "Bei starken, anhaltenden Bauchschmerzen mit oder ohne Erbrechen, schweren allergischen Beschwerden oder Zeichen einer Unterzuckerung, die nicht beherrschbar ist, sofort Hilfe holen.",
    source: "EMA: Trulicity® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/trulicity",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "tirzepatid",
    name: "Tirzepatid",
    examples: "Referenzpräparat: Mounjaro® Injektionslösung im Fertigpen",
    category: "Diabetesmittel",
    purpose: "Tirzepatid wird bei Erwachsenen mit Typ-2-Diabetes eingesetzt; je nach Zulassung und Situation kann es auch Teil einer Behandlung von Übergewicht sein.",
    does: "Es beeinflusst zwei Darmhormonsysteme. Das kann den Blutzucker senken und das Sättigungsgefühl verstärken.",
    doesNot: "Es ist kein Insulin und behandelt keine schwere Unterzuckerung oder Ketoazidose.",
    daily: "Einmal wöchentlich am vereinbarten Tag spritzen. Bei Diabetesmitteln, die Unterzuckerungen auslösen können, muss die Dosis ärztlich abgestimmt werden.",
    sideEffects: "Übelkeit, Durchfall, Erbrechen, Verstopfung, Bauchschmerzen und verminderter Appetit können auftreten.",
    urgent: "Bei starken, anhaltenden Bauchschmerzen mit oder ohne Erbrechen, Zeichen einer schweren Allergie oder nicht beherrschbarer Unterzuckerung sofort medizinische Hilfe holen.",
    source: "EMA: Mounjaro® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/mounjaro",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "pioglitazon",
    name: "Pioglitazon",
    examples: "Referenzpräparat: Pioglitazon Aurobindo 30 mg Tabletten",
    category: "Diabetesmittel",
    purpose: "Pioglitazon wird bei Erwachsenen mit Typ-2-Diabetes eingesetzt, wenn Metformin nicht geeignet ist oder nicht ausreichend wirkt.",
    does: "Es verbessert die Wirkung des körpereigenen Insulins. Dadurch kann der Blutzucker besser kontrolliert werden.",
    doesNot: "Es ist kein Insulin und behandelt keine schwere Unterzuckerung oder Ketoazidose.",
    daily: "Der Nutzen wird nach einigen Monaten ärztlich überprüft. Gewichtszunahme, geschwollene Beine oder Atemnot zeitnah ansprechen; besonders bei gleichzeitiger Insulintherapie.",
    sideEffects: "Gewichtszunahme, Wassereinlagerungen, Knochenbrüche und Sehstörungen können auftreten. Pioglitazon kann eine Herzschwäche verschlechtern.",
    urgent: "Bei neu auftretender oder zunehmender Atemnot, rascher Gewichtszunahme, geschwollenen Beinen, Brustschmerz oder gelber Haut sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Pioglitazon Aurobindo 30 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/pioglitazon-aurobindo-30-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "acarbose",
    name: "Acarbose",
    examples: "Referenzpräparat: Glucobay® 50 mg Tabletten",
    category: "Diabetesmittel",
    purpose: "Acarbose wird bei Typ-2-Diabetes zusätzlich zu Ernährung und Bewegung eingesetzt, wenn der Blutzucker nach dem Essen zu hoch bleibt.",
    does: "Es verzögert im Darm die Aufspaltung bestimmter Kohlenhydrate. Dadurch steigt der Blutzucker nach dem Essen langsamer an.",
    doesNot: "Es ersetzt keine Insulintherapie und behandelt eine schwere Unterzuckerung nicht.",
    daily: "Mit dem ersten Bissen der Mahlzeit einnehmen. Bei einer Unterzuckerung nur Traubenzucker verwenden, nicht normalen Haushaltszucker.",
    sideEffects: "Blähungen, Bauchschmerzen, Durchfall und weicher Stuhl sind häufig, besonders zu Beginn.",
    urgent: "Bei starken oder anhaltenden Bauchschmerzen, Erbrechen, gelber Haut oder Augen oder einer schweren Unterzuckerung sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Glucobay® 50 mg Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/g/glucobayR-50-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "insulin-glargin-lixisenatid",
    name: "Insulin glargin / Lixisenatid",
    examples: "Referenzpräparat: Suliqua® Injektionslösung im Fertigpen",
    category: "Diabetesmittel",
    purpose: "Diese feste Kombination wird bei Erwachsenen mit Typ-2-Diabetes eingesetzt, wenn andere Diabetesbehandlungen den Blutzucker nicht ausreichend kontrollieren.",
    does: "Sie verbindet ein lang wirkendes Insulin mit einem Mittel, das die Insulinantwort nach dem Essen unterstützt und die Magenentleerung verlangsamt.",
    doesNot: "Sie ist kein Mittel zur Behandlung einer schweren Unterzuckerung oder einer Ketoazidose.",
    daily: "Nur den verordneten Pen und die verordnete Dosis verwenden. Vor der täglichen Spritze die Dosis prüfen; nicht mit anderen Insulinen oder GLP-1-Mitteln verwechseln.",
    sideEffects: "Unterzuckerung, Übelkeit, Durchfall, Erbrechen, Reaktionen an der Einstichstelle und Gewichtszunahme können auftreten.",
    urgent: "Bei Bewusstseinsstörung oder Krampfanfall durch Unterzuckerung, bei starken anhaltenden Bauchschmerzen oder einer schweren allergischen Reaktion sofort den Notruf wählen.",
    source: "EMA: Suliqua® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/suliqua",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "fluticasonfuroat-umeclidinium-vilanterol",
    name: "Fluticasonfuroat / Umeclidinium / Vilanterol",
    examples: "Referenzpräparat: Trelegy Ellipta® 92/55/22 Mikrogramm Pulver zur Inhalation",
    category: "Atemwegsmedikament",
    purpose: "Diese Dreifachkombination wird bei Erwachsenen zur Dauerbehandlung einer COPD eingesetzt.",
    does: "Sie erweitert die Atemwege und dämpft Entzündungen in den Atemwegen. Bei regelmäßiger Anwendung kann sie Beschwerden und Verschlechterungen der COPD verringern.",
    doesNot: "Sie ist kein Notfallspray für einen plötzlich auftretenden Anfall von Atemnot.",
    daily: "Einmal täglich genau nach Inhalationsanleitung anwenden. Nach der Anwendung den Mund mit Wasser ausspülen. Ein schnell wirksames Notfallspray weiterhin bereithalten, wenn es verordnet wurde.",
    sideEffects: "Mundsoor, Heiserkeit, Kopfschmerzen, Infekte der Atemwege, Zittern, Herzklopfen und trockener Mund können auftreten.",
    urgent: "Bei plötzlicher Atemnot direkt nach der Inhalation, Schwellung von Gesicht oder Hals, Brustschmerz oder starkem Herzrasen sofort Hilfe holen.",
    source: "Gebrauchsinformation: Trelegy Ellipta® 92/55/22 Mikrogramm (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/trelegy-ellipta-92-mikrogramm55-mikrogramm22-mikrogramm-einzeldosiertes-pulver-zur-inhalation",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "budesonid-formoterol",
    name: "Budesonid / Formoterol",
    examples: "Referenzpräparat: Symbicort® Turbohaler",
    category: "Atemwegsmedikament",
    purpose: "Die Kombination wird zur Dauerbehandlung von Asthma und je nach Präparat von COPD eingesetzt.",
    does: "Budesonid dämpft die Entzündung in den Atemwegen, Formoterol erweitert sie. Zusammen sollen sie Atembeschwerden vorbeugen.",
    doesNot: "Ob das Präparat auch als Bedarfsinhalation geeignet ist, hängt vom individuellen Behandlungsplan ab. Es ist nicht automatisch für jeden akuten Anfall gedacht.",
    daily: "Genau nach dem Inhalationsplan anwenden und danach den Mund ausspülen. Inhalationstechnik regelmäßig in der Apotheke oder Praxis prüfen lassen.",
    sideEffects: "Mundsoor, Heiserkeit, Zittern, Herzklopfen, Kopfschmerzen und Muskelkrämpfe können auftreten.",
    urgent: "Bei zunehmender Atemnot trotz Inhalation, plötzlich pfeifender Atmung direkt nach der Inhalation, Brustschmerz oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Symbicort® Turbohaler (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/symbicortR-turbohaler-160-mikrogramm45-mikrogrammdosis",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "beclometason-formoterol",
    name: "Beclometason / Formoterol",
    examples: "Referenzpräparat: Foster® Dosieraerosol",
    category: "Atemwegsmedikament",
    purpose: "Die Kombination wird zur Dauerbehandlung von Asthma und je nach Präparat COPD eingesetzt.",
    does: "Beclometason dämpft Entzündungen, Formoterol erweitert die Atemwege. So kann die regelmäßige Behandlung Atembeschwerden verringern.",
    doesNot: "Sie ersetzt nicht automatisch ein Notfallspray. Welche Inhalation bei akuter Atemnot zu nutzen ist, steht im individuellen Plan.",
    daily: "Nach Plan inhalieren und danach den Mund ausspülen. Das Dosieraerosol nur mit der gezeigten Technik verwenden; eine Inhalierhilfe kann sinnvoll sein.",
    sideEffects: "Mundsoor, Heiserkeit, Zittern, Herzklopfen, Kopfschmerzen und Muskelkrämpfe können auftreten.",
    urgent: "Bei plötzlicher Verschlechterung der Atmung, Brustschmerz, schwerem Herzrasen oder einer allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Foster® Dosieraerosol (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/fosterR-100-mikrogramm6-mikrogramm-pro-spruehstoss-dosieraerosol",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "fluticason-salmeterol",
    name: "Fluticason / Salmeterol",
    examples: "Referenzpräparat: Viani® Diskus®",
    category: "Atemwegsmedikament",
    purpose: "Die Kombination wird zur Dauerbehandlung von Asthma und je nach Präparat COPD eingesetzt.",
    does: "Fluticason dämpft Entzündungen in den Atemwegen, Salmeterol hält die Atemwege länger offen.",
    doesNot: "Sie ist kein schnell wirksames Notfallspray bei plötzlich einsetzender Atemnot.",
    daily: "Regelmäßig nach Plan inhalieren und den Mund danach ausspülen. Die Inhalationstechnik kontrollieren lassen.",
    sideEffects: "Mundsoor, Heiserkeit, Kopfschmerzen, Zittern, Herzklopfen und Muskelkrämpfe können auftreten.",
    urgent: "Bei plötzlicher Atemnot direkt nach der Inhalation, zunehmender Atemnot, Brustschmerz oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Viani® Diskus® (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/v/vianiR-diskusR-50-mikrogramm250-mikrogramm-einzeldosiertes-pulver-zur-inhalation",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "roflumilast",
    name: "Roflumilast",
    examples: "Referenzpräparat: Daxas® Filmtabletten",
    category: "Atemwegsmedikament",
    purpose: "Roflumilast wird zusätzlich zur Inhalationstherapie bei schwerer COPD mit häufigen Verschlechterungen eingesetzt.",
    does: "Es dämpft Entzündungen im Körper und soll Verschlechterungen der COPD vorbeugen.",
    doesNot: "Es erweitert die Atemwege nicht rasch und hilft nicht bei einem akuten Anfall von Atemnot.",
    daily: "Einmal täglich wie verordnet einnehmen. Gewicht und Stimmung beachten und bei Veränderungen zeitnah die Praxis informieren.",
    sideEffects: "Durchfall, Übelkeit, Bauchschmerzen, Appetitlosigkeit, Gewichtsabnahme, Kopfschmerzen und Schlafstörungen können auftreten.",
    urgent: "Bei Gedanken, sich selbst zu verletzen, deutlicher Verschlechterung der Stimmung, starkem ungewolltem Gewichtsverlust oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "EMA: Daxas® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/daxas",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "mometason",
    name: "Mometason",
    examples: "Referenzpräparat: Nasonex® Nasenspray",
    category: "Allergiemittel",
    purpose: "Mometason als Nasenspray wird bei allergischem Schnupfen und je nach Präparat bei Nasenpolypen eingesetzt.",
    does: "Es dämpft die Entzündung in der Nasenschleimhaut und kann Niesen, Schnupfen und eine verstopfte Nase lindern.",
    doesNot: "Es ist kein sofort abschwellendes Nasenspray und behandelt keine bakterielle Nebenhöhlenentzündung.",
    daily: "Regelmäßig wie verordnet anwenden; die Wirkung baut sich auf. Sprühkopf sauber halten und nicht in Richtung Nasenscheidewand sprühen.",
    sideEffects: "Nasenbluten, Reizung oder Brennen in der Nase, Kopfschmerzen und Halsbeschwerden können auftreten.",
    urgent: "Bei anhaltendem starkem Nasenbluten, Sehstörungen, Schwellung von Gesicht oder Hals oder Atemnot sofort Hilfe holen.",
    source: "EMA: Nasonex® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/nasonex",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "desloratadin",
    name: "Desloratadin",
    examples: "Referenzpräparat: Aerius® Filmtabletten",
    category: "Allergiemittel",
    purpose: "Desloratadin wird bei allergischem Schnupfen und Nesselsucht eingesetzt.",
    does: "Es blockiert die Wirkung von Histamin und kann Niesen, Juckreiz, laufende Nase und Quaddeln lindern.",
    doesNot: "Es behandelt keine schwere allergische Reaktion mit Atemnot oder Kreislaufproblemen.",
    daily: "Wie verordnet einnehmen. Auch wenn Müdigkeit selten ist: zunächst beobachten, wie das Mittel persönlich wirkt.",
    sideEffects: "Müdigkeit, Kopfschmerzen, Mundtrockenheit und selten Herzklopfen können auftreten.",
    urgent: "Bei Schwellung von Gesicht, Lippen, Zunge oder Hals, Atemnot, Ohnmacht oder starker Hautreaktion sofort Hilfe holen.",
    source: "EMA: Aerius® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/aerius",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "fexofenadin",
    name: "Fexofenadin",
    examples: "Referenzpräparat: Telfast® Filmtabletten",
    category: "Allergiemittel",
    purpose: "Fexofenadin wird bei allergischem Schnupfen und Nesselsucht eingesetzt.",
    does: "Es blockiert Histamin und kann allergische Beschwerden wie Juckreiz, Niesen und Quaddeln lindern.",
    doesNot: "Es ist keine Notfallbehandlung bei einer schweren allergischen Reaktion.",
    daily: "Mit Wasser wie verordnet einnehmen. Frucht- oder Grapefruitsaft kann die Aufnahme beeinflussen; Hinweise der Packungsbeilage beachten.",
    sideEffects: "Kopfschmerzen, Schwindel, Müdigkeit, Übelkeit und Mundtrockenheit können auftreten.",
    urgent: "Bei Atemnot, Schwellung von Gesicht oder Hals, Ohnmacht oder schwerem Hautausschlag sofort Hilfe holen.",
    source: "EMA: Telfast® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/telfast",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "azithromycin",
    name: "Azithromycin",
    examples: "Referenzpräparat: Azithromycin HEXAL® Filmtabletten",
    category: "Antibiotikum",
    purpose: "Azithromycin ist ein Antibiotikum für bestimmte bakterielle Infektionen. Es wird nicht gegen Erkältung oder Grippe eingesetzt.",
    does: "Es hemmt das Wachstum empfindlicher Bakterien.",
    doesNot: "Es wirkt nicht gegen Viren und ist kein Mittel gegen jede Form von Husten oder Halsschmerz.",
    daily: "Genau in der verordneten Dosis und Dauer einnehmen. Nicht für spätere Infekte aufbewahren oder mit anderen teilen.",
    sideEffects: "Durchfall, Übelkeit, Bauchschmerzen, Kopfschmerzen und Hautausschlag können auftreten.",
    urgent: "Bei schwerem oder blutigem Durchfall, Gelbfärbung der Haut oder Augen, Ohnmacht, Herzrasen oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Azithromycin HEXAL® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/azithromycin-hexal-500-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "clarithromycin",
    name: "Clarithromycin",
    examples: "Referenzpräparat: Klacid® Filmtabletten",
    category: "Antibiotikum",
    purpose: "Clarithromycin ist ein Antibiotikum für bestimmte bakterielle Infektionen, etwa der Atemwege oder Haut.",
    does: "Es hemmt das Wachstum empfindlicher Bakterien.",
    doesNot: "Es wirkt nicht gegen virale Erkältungen oder Grippe.",
    daily: "Genau wie verordnet einnehmen. Wechselwirkungen sind häufig; deshalb alle anderen Medikamente in der Apotheke oder Praxis angeben.",
    sideEffects: "Übelkeit, Durchfall, Bauchschmerzen, Geschmacksveränderungen und Kopfschmerzen können auftreten.",
    urgent: "Bei schwerem oder blutigem Durchfall, Gelbfärbung der Haut oder Augen, Ohnmacht, Herzrasen oder schwerem Hautausschlag sofort Hilfe holen.",
    source: "Gebrauchsinformation: Klacid® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/k/klacidR-250-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "cotrimoxazol",
    name: "Cotrimoxazol",
    examples: "Referenzpräparat: Cotrim forte-ratiopharm® Tabletten",
    category: "Antibiotikum",
    purpose: "Cotrimoxazol ist ein Antibiotikum für bestimmte bakterielle Infektionen, unter anderem je nach Situation der Harn- oder Atemwege.",
    does: "Es hemmt das Wachstum empfindlicher Bakterien durch die Kombination zweier Wirkstoffe.",
    doesNot: "Es wirkt nicht gegen Viren und ist kein Mittel gegen jeden Husten oder Schnupfen.",
    daily: "Genau in der verordneten Dosis und Dauer einnehmen und ausreichend trinken, sofern medizinisch nichts dagegen spricht. Sonne möglichst meiden oder Sonnenschutz nutzen.",
    sideEffects: "Übelkeit, Durchfall, Hautausschlag, erhöhte Kaliumwerte und Blutbildveränderungen können auftreten.",
    urgent: "Bei Fieber, Halsschmerzen, wunden Stellen im Mund, schwerem Hautausschlag oder Blasenbildung, Gelbfärbung oder Atemnot sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Cotrim forte-ratiopharm® Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/cotrim-forte-ratiopharmR-960-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "fosfomycin",
    name: "Fosfomycin",
    examples: "Referenzpräparat: Fosfomycin Aristo 3000 mg Pulver",
    category: "Antibiotikum",
    purpose: "Fosfomycin wird als Einmalbehandlung bestimmter unkomplizierter Harnblaseninfektionen bei Frauen und weiblichen Jugendlichen eingesetzt.",
    does: "Es tötet empfindliche Bakterien ab, die eine Blaseninfektion verursachen können.",
    doesNot: "Es ist nicht für jede Harnwegsinfektion geeignet und behandelt keine Nierenbeckenentzündung oder andere Ursachen für Schmerzen beim Wasserlassen.",
    daily: "Nur wie verordnet einnehmen; bei diesem Referenzpräparat handelt es sich gewöhnlich um eine einmalige Gabe. Bei Fieber, Flankenschmerz oder fehlender Besserung zeitnah ärztlich abklären lassen.",
    sideEffects: "Durchfall, Übelkeit, Bauchschmerzen, Kopfschmerzen und Entzündungen im Intimbereich können auftreten.",
    urgent: "Bei Fieber, Schüttelfrost, Schmerzen in der Flanke, schwerem Durchfall oder einer allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Fosfomycin Aristo 3000 mg Pulver (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/fosfomycin-aristo-3000-mg-pulver-zur-herstellung-einer-loesung-zum-einnehmen",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "ciprofloxacin",
    name: "Ciprofloxacin",
    examples: "Referenzpräparat: Ciprobay® Filmtabletten",
    category: "Antibiotikum",
    purpose: "Ciprofloxacin ist ein Antibiotikum für bestimmte bakterielle Infektionen, wenn es nach ärztlicher Einschätzung geeignet ist.",
    does: "Es tötet empfindliche Bakterien ab.",
    doesNot: "Es wirkt nicht gegen Viren und ist nicht das Standardmittel für jeden unkomplizierten Infekt.",
    daily: "Genau wie verordnet einnehmen. Abstand zu Milchprodukten, Mineralstoffpräparaten und bestimmten Magenmitteln beachten. Bei Sehnenbeschwerden sofort die Praxis kontaktieren.",
    sideEffects: "Übelkeit, Durchfall, Schlafstörungen, Kopfschmerzen, Schwindel und Sehnenbeschwerden können auftreten.",
    urgent: "Bei Sehnenschmerz oder -schwellung, Gefühlsstörungen, starken psychischen Veränderungen, schwerem Durchfall, Herzrasen oder schwerer allergischer Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Ciprobay® Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/ciprobayR-500-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "valaciclovir",
    name: "Valaciclovir",
    examples: "Referenzpräparat: Valaciclovir Aurobindo 500 mg Filmtabletten",
    category: "Virusmittel",
    purpose: "Valaciclovir wird je nach Dosierung bei Gürtelrose, Lippen- oder Genitalherpes und weiteren bestimmten Herpesvirus-Infektionen eingesetzt.",
    does: "Es hemmt die Vermehrung von Herpesviren und kann die Dauer oder Schwere einer Erkrankung verringern.",
    doesNot: "Es beseitigt Herpesviren nicht dauerhaft aus dem Körper und hilft nicht gegen bakterielle Infektionen.",
    daily: "Frühzeitig und genau nach dem verordneten Plan einnehmen. Ausreichend trinken, sofern medizinisch nichts dagegen spricht; bei eingeschränkter Nierenfunktion ist die Dosis besonders wichtig.",
    sideEffects: "Kopfschmerzen, Übelkeit, Bauchschmerzen, Schwindel und Hautausschlag können auftreten.",
    urgent: "Bei Verwirrtheit, starker Schläfrigkeit, deutlich weniger Urin, Gelbfärbung der Haut oder Augen oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Valaciclovir Aurobindo 500 mg Filmtabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/uv/valaciclovir-aurobindo-500-mg-filmtabletten",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "fluconazol",
    name: "Fluconazol",
    examples: "Referenzpräparat: Diflucan® Kapseln",
    category: "Pilzmittel",
    purpose: "Fluconazol wird bei bestimmten Pilzinfektionen eingesetzt, zum Beispiel im Mund-, Scheiden- oder anderen Körperbereichen.",
    does: "Es hemmt das Wachstum empfindlicher Pilze.",
    doesNot: "Es wirkt nicht gegen bakterielle oder virale Infektionen und ist nicht für jede Haut- oder Schleimhautreizung geeignet.",
    daily: "Genau nach dem verordneten Plan einnehmen. Alle anderen Medikamente angeben, weil Wechselwirkungen möglich sind.",
    sideEffects: "Übelkeit, Bauchschmerzen, Durchfall, Kopfschmerzen, Hautausschlag und Veränderungen der Leberwerte können auftreten.",
    urgent: "Bei Gelbfärbung der Haut oder Augen, dunklem Urin, schwerem Hautausschlag, Herzrasen mit Ohnmacht oder Atemnot sofort Hilfe holen.",
    source: "EMA: Diflucan® – Produktinformation (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/diflucan",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "terbinafin",
    name: "Terbinafin",
    examples: "Referenzpräparat: Lamisil® Tabletten",
    category: "Pilzmittel",
    purpose: "Terbinafin als Tablette wird bei bestimmten Pilzinfektionen der Haut oder Nägel eingesetzt.",
    does: "Es hemmt oder tötet empfindliche Pilze ab.",
    doesNot: "Es wirkt nicht gegen bakterielle Infektionen und ein Nagel wächst trotz erfolgreicher Behandlung nur langsam gesund nach.",
    daily: "Wie verordnet einnehmen. Bei längerem Einsatz können ärztliche Kontrollen der Leberwerte nötig sein.",
    sideEffects: "Übelkeit, Bauchschmerzen, Durchfall, Kopfschmerzen, Hautausschlag und Geschmacksstörungen können auftreten.",
    urgent: "Bei Gelbfärbung der Haut oder Augen, dunklem Urin, anhaltender Übelkeit, schwerem Hautausschlag oder Fieber sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Lamisil® Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/lamisilR-250-mg-tabletten",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "nystatin",
    name: "Nystatin",
    examples: "Referenzpräparat: Nystatin Lederle® Suspension",
    category: "Pilzmittel",
    purpose: "Nystatin wird je nach Darreichungsform bei Pilzinfektionen im Mund oder Magen-Darm-Bereich eingesetzt.",
    does: "Es wirkt lokal gegen bestimmte Hefepilze, vor allem Candida.",
    doesNot: "Es wirkt nicht gegen Bakterien oder Viren und ist nicht für jede wunde oder belegte Schleimhaut geeignet.",
    daily: "Genau wie verordnet anwenden; bei Mundsuspension soll das Mittel meist ausreichend lange im Mund verteilt werden. Den verordneten Zeitraum einhalten.",
    sideEffects: "Übelkeit, Bauchbeschwerden, Durchfall und selten Hautreaktionen können auftreten.",
    urgent: "Bei Schwellung von Gesicht oder Hals, Atemnot, starkem Hautausschlag oder anhaltenden starken Beschwerden sofort Hilfe holen.",
    source: "Gebrauchsinformation: Nystatin Lederle® Suspension (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/n/nystatin-lederleR-suspension",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "mesalazin",
    name: "Mesalazin",
    examples: "Referenzpräparat: Salofalk® magensaftresistente Tabletten",
    category: "Darmerkrankungen",
    purpose: "Mesalazin wird bei Colitis ulcerosa und je nach Darreichungsform bei weiteren entzündlichen Darmerkrankungen eingesetzt.",
    does: "Es dämpft die Entzündung in der Darmschleimhaut und kann Beschwerden sowie Schübe verringern.",
    doesNot: "Es stoppt keine plötzlich schwere Blutung oder akute starke Bauchschmerzen und ist kein allgemeines Mittel gegen Durchfall.",
    daily: "Regelmäßig auch in beschwerdearmen Zeiten anwenden, wenn es so verordnet ist. Nierenfunktion und Blutwerte können kontrolliert werden.",
    sideEffects: "Kopfschmerzen, Bauchschmerzen, Übelkeit, Durchfall und Hautausschlag können auftreten.",
    urgent: "Bei Fieber, Halsschmerzen, ungewöhnlichen Blutungen, starken Bauchschmerzen, deutlich weniger Urin oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Salofalk® magensaftresistente Tabletten (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/salofalkR-500-mg-magensaftresistente-tabletten",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "pankreatin",
    name: "Pankreatin",
    examples: "Referenzpräparat: Kreon® Kapseln",
    category: "Verdauungsenzym",
    purpose: "Pankreatin wird eingesetzt, wenn die Bauchspeicheldrüse nicht genügend Verdauungsenzyme bildet, zum Beispiel bei einer exokrinen Pankreasinsuffizienz.",
    does: "Es ersetzt Verdauungsenzyme und hilft, Nahrung – besonders Fett – besser aufzunehmen.",
    doesNot: "Es heilt die Ursache einer Bauchspeicheldrüsenerkrankung nicht und ist kein Schmerzmittel gegen Bauchschmerzen.",
    daily: "Zu oder direkt nach jeder Mahlzeit und Zwischenmahlzeit wie verordnet einnehmen. Kapseln nicht zerkauen; Darreichungsform und Anwendungshinweise beachten.",
    sideEffects: "Bauchschmerzen, Übelkeit, Verstopfung, Durchfall und Beschwerden im Mund können auftreten.",
    urgent: "Bei starken oder zunehmenden Bauchschmerzen, Erbrechen, schwerem Hautausschlag oder Atemnot sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Kreon® Kapseln (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/k/kreonR-25000-kapseln",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "ursodeoxycholsaeure",
    name: "Ursodeoxycholsäure",
    examples: "Referenzpräparat: Ursofalk® Kapseln",
    category: "Leber- und Gallenmittel",
    purpose: "Ursodeoxycholsäure wird bei bestimmten Erkrankungen der Galle oder Leber und je nach Situation zur Auflösung bestimmter Cholesterin-Gallensteine eingesetzt.",
    does: "Sie verändert die Zusammensetzung der Galle und kann den Gallefluss sowie bestimmte Leberwerte günstig beeinflussen.",
    doesNot: "Sie behandelt keine akute Gallenkolik, keine Gallenblasenentzündung und nicht jeden Gallenstein.",
    daily: "Regelmäßig wie verordnet einnehmen. Ärztliche Kontrollen und gegebenenfalls Ultraschalltermine einhalten.",
    sideEffects: "Weicher Stuhl oder Durchfall, Bauchbeschwerden und selten Hautreaktionen können auftreten.",
    urgent: "Bei starken rechten Oberbauchschmerzen, Fieber, Gelbfärbung der Haut oder Augen, dunklem Urin oder anhaltendem Durchfall sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Ursofalk® Kapseln (abgerufen am 21.07.2026)",
    sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/u/ursofalkR-250-mg-kapseln",
    reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "venlafaxin", name: "Venlafaxin", examples: "Referenzpräparat: Trevilor® retard Kapseln", category: "Antidepressivum",
    purpose: "Venlafaxin wird bei Depressionen und bestimmten Angststörungen eingesetzt.",
    does: "Es beeinflusst Botenstoffe im Gehirn und kann Stimmung, Antrieb und Angstsymptome verbessern.",
    doesNot: "Es wirkt nicht sofort und ist kein Beruhigungsmittel für eine akute Krise.",
    daily: "Regelmäßig einnehmen und nicht abrupt absetzen. Zu Beginn und bei Dosisänderungen können Beschwerden vorübergehend stärker sein; Blutdruckkontrollen können nötig sein.",
    sideEffects: "Übelkeit, Schwitzen, Schlafstörungen, Kopfschmerzen, Schwindel, Mundtrockenheit und Blutdruckanstieg können auftreten.",
    urgent: "Bei Gedanken, sich selbst zu verletzen, starker Unruhe, hohem Fieber mit Muskelsteife, Krampfanfällen, schwerem Hautausschlag oder Brustschmerz sofort Hilfe holen.",
    source: "Gebrauchsinformation: Trevilor® retard Kapseln (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/trevilorR-retard-75-mg-hartkapseln-retardiert", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "fluoxetin", name: "Fluoxetin", examples: "Referenzpräparat: Fluctin® Kapseln", category: "Antidepressivum",
    purpose: "Fluoxetin wird bei Depressionen und je nach Situation weiteren psychischen Erkrankungen eingesetzt.",
    does: "Es erhöht die Verfügbarkeit des Botenstoffs Serotonin im Gehirn und kann Stimmung und Antrieb verbessern.",
    doesNot: "Es ist kein sofort wirksames Beruhigungsmittel und ersetzt keine Hilfe in einer akuten psychischen Krise.",
    daily: "Regelmäßig einnehmen und nicht selbst abrupt absetzen. Wechselwirkungen, zum Beispiel mit Schmerz- oder Migränemitteln, vorher abklären.",
    sideEffects: "Übelkeit, Schlafstörungen, Kopfschmerzen, Unruhe, Schwitzen und sexuelle Funktionsstörungen können auftreten.",
    urgent: "Bei Gedanken, sich selbst zu verletzen, starker Unruhe, hohem Fieber mit Muskelsteife, Krampfanfällen oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Fluctin® Kapseln (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/fluctinR-20-mg-kapseln", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "bupropion", name: "Bupropion", examples: "Referenzpräparat: Elontril® Retardtabletten", category: "Antidepressivum",
    purpose: "Bupropion wird zur Behandlung von Depressionen eingesetzt.",
    does: "Es beeinflusst die Botenstoffe Noradrenalin und Dopamin und kann Antrieb und Stimmung verbessern.",
    doesNot: "Es ist kein Schlafmittel und wirkt nicht sofort gegen eine akute psychische Krise.",
    daily: "Retardtabletten unzerkaut einnehmen und nicht eigenmächtig absetzen. Das Risiko für Krampfanfälle steigt bei zu hoher Dosis oder bestimmten Vorerkrankungen.",
    sideEffects: "Schlafstörungen, Mundtrockenheit, Kopfschmerzen, Übelkeit, Unruhe und Blutdruckanstieg können auftreten.",
    urgent: "Bei Krampfanfall, Gedanken, sich selbst zu verletzen, schwerer allergischer Reaktion, starkem Herzrasen oder Brustschmerz sofort Hilfe holen.",
    source: "Gebrauchsinformation: Elontril® Retardtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/e/elontrilR-150-mg-retardtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "quetiapin", name: "Quetiapin", examples: "Referenzpräparat: Seroquel® Filmtabletten", category: "Antipsychotikum",
    purpose: "Quetiapin wird je nach Dosierung bei bestimmten psychischen Erkrankungen eingesetzt, zum Beispiel bipolarer Störung, Schizophrenie oder Depression als Zusatzbehandlung.",
    does: "Es beeinflusst mehrere Botenstoffe im Gehirn und kann psychotische Symptome, starke Stimmungsschwankungen oder Unruhe verringern.",
    doesNot: "Es ist kein allgemeines Schlafmittel und nicht für jede Form von Unruhe geeignet.",
    daily: "Kann stark müde und schwindelig machen. Langsam aufstehen, kein Alkohol und nicht fahren, solange die Wirkung nicht sicher eingeschätzt werden kann. Nicht plötzlich absetzen.",
    sideEffects: "Müdigkeit, Schwindel, Gewichtszunahme, Mundtrockenheit, Verstopfung, niedriger Blutdruck beim Aufstehen und erhöhte Blutzuckerwerte können auftreten.",
    urgent: "Bei hohem Fieber mit Muskelsteife und Verwirrtheit, unwillkürlichen Bewegungen, Ohnmacht, starkem Herzrasen oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Seroquel® Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/seroquelR-25-mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "olanzapin", name: "Olanzapin", examples: "Referenzpräparat: Zyprexa® Filmtabletten", category: "Antipsychotikum",
    purpose: "Olanzapin wird bei Schizophrenie und bestimmten Phasen bipolarer Störungen eingesetzt.",
    does: "Es beeinflusst Botenstoffe im Gehirn und kann psychotische Symptome, starke Unruhe und Stimmungsschwankungen verringern.",
    doesNot: "Es ist kein allgemeines Schlafmittel und keine Akutbehandlung für jede Verwirrtheit.",
    daily: "Müdigkeit und Gewichtszunahme beachten. Blutzucker und Blutfette werden oft kontrolliert; nicht ohne Rücksprache absetzen.",
    sideEffects: "Müdigkeit, Gewichtszunahme, gesteigerter Appetit, Schwindel, Verstopfung und erhöhte Blutzucker- oder Blutfettwerte können auftreten.",
    urgent: "Bei hohem Fieber mit Muskelsteife und Verwirrtheit, unwillkürlichen Bewegungen, sehr hohem Blutzucker, Ohnmacht oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "EMA: Zyprexa® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/zyprexa", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "aripiprazol", name: "Aripiprazol", examples: "Referenzpräparat: Abilify® Tabletten", category: "Antipsychotikum",
    purpose: "Aripiprazol wird bei Schizophrenie und bestimmten Phasen bipolarer Störungen eingesetzt; je nach Situation auch bei Depression als Zusatzbehandlung.",
    does: "Es beeinflusst Dopamin- und Serotoninsysteme im Gehirn und kann psychotische Symptome oder starke Stimmungsschwankungen verringern.",
    doesNot: "Es ist kein Mittel für eine akute Selbstgefährdung oder jede Form von Schlafstörung.",
    daily: "Regelmäßig einnehmen und nicht selbst absetzen. Auf neue starke Impulse wie Glücksspiel-, Kauf- oder Essdrang achten und diese früh ansprechen.",
    sideEffects: "Unruhe, Schlafstörungen, Übelkeit, Schwindel, Zittern und Bewegungsstörungen können auftreten.",
    urgent: "Bei hohem Fieber mit Muskelsteife und Verwirrtheit, neuen unkontrollierbaren Bewegungen, Gedanken zur Selbstverletzung, Ohnmacht oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "EMA: Abilify® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/abilify", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "haloperidol", name: "Haloperidol", examples: "Referenzpräparat: Haldol® Tabletten", category: "Antipsychotikum",
    purpose: "Haloperidol wird bei bestimmten psychotischen Erkrankungen und schweren Unruhezuständen eingesetzt.",
    does: "Es dämpft eine übermäßige Dopaminwirkung im Gehirn und kann Wahn, Halluzinationen und starke Unruhe verringern.",
    doesNot: "Es ist kein Mittel gegen eine unklare akute Verwirrtheit, deren Ursache zuerst ärztlich abgeklärt werden muss.",
    daily: "Kann müde machen und die Beweglichkeit beeinflussen. Nicht ohne Rücksprache absetzen; bei älteren Menschen besonders sorgfältig ärztlich überwachen.",
    sideEffects: "Bewegungsstörungen, Zittern, Muskelsteife, Müdigkeit, niedriger Blutdruck beim Aufstehen und Herzrhythmusstörungen können auftreten.",
    urgent: "Bei hohem Fieber mit Muskelsteife und Verwirrtheit, schmerzhaften Krämpfen von Augen oder Hals, Ohnmacht, Herzrasen oder Schluck- und Atembeschwerden sofort Hilfe holen.",
    source: "EMA: Haldol® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/haldol", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "promethazin", name: "Promethazin", examples: "Referenzpräparat: Atosil® Tropfen", category: "Beruhigungsmittel",
    purpose: "Promethazin wird je nach Präparat bei starker Unruhe, bestimmten Allergiebeschwerden oder Übelkeit eingesetzt.",
    does: "Es dämpft bestimmte Botenstoffwirkungen und kann stark beruhigen und müde machen.",
    doesNot: "Es behandelt nicht die Ursache einer neuen Verwirrtheit, eines Delirs oder einer schweren allergischen Reaktion.",
    daily: "Kann die Reaktionsfähigkeit deutlich beeinträchtigen: kein Alkohol, kein Fahren und besonders vorsichtig beim Aufstehen. Nicht zusammen mit anderen beruhigenden Mitteln ohne Rücksprache nehmen.",
    sideEffects: "Starke Müdigkeit, Schwindel, Mundtrockenheit, Verstopfung, Sehstörungen und niedriger Blutdruck beim Aufstehen können auftreten.",
    urgent: "Bei Atemnot, Ohnmacht, hohem Fieber mit Muskelsteife, unwillkürlichen Bewegungen oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Atosil® Tropfen (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/atosilR-tropfen", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "melatonin", name: "Melatonin", examples: "Referenzpräparat: Circadin® 2 mg Retardtabletten", category: "Schlafmittel",
    purpose: "Melatonin retard wird bei Menschen ab 55 Jahren kurzfristig zur Behandlung einer primären Schlafstörung mit schlechter Schlafqualität eingesetzt.",
    does: "Es ersetzt beziehungsweise ergänzt das körpereigene Schlafhormon und soll den Schlaf-Wach-Rhythmus unterstützen.",
    doesNot: "Es behandelt keine Ursache einer neuen Schlafstörung, etwa Schmerzen, Atemaussetzer, Depression oder Nebenwirkungen anderer Medikamente.",
    daily: "Wie verordnet nach dem Essen vor dem Schlafengehen einnehmen. Kann am nächsten Tag müde machen; Alkohol meiden und nicht fahren, wenn man sich beeinträchtigt fühlt.",
    sideEffects: "Müdigkeit, Schwindel, Kopfschmerzen, Bauchbeschwerden und ungewöhnliche Träume können auftreten.",
    urgent: "Bei Ohnmacht, starker Verwirrtheit, schwerer allergischer Reaktion oder neu auftretenden Gedanken zur Selbstverletzung sofort Hilfe holen.",
    source: "EMA: Circadin® – Produktinformation (aktualisiert 07/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/circadin", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "zopiclon", name: "Zopiclon", examples: "Referenzpräparat: Zopiclon-ratiopharm® Filmtabletten", category: "Schlafmittel",
    purpose: "Zopiclon wird zur kurzfristigen Behandlung schwerer Schlafstörungen eingesetzt.",
    does: "Es beruhigt das Nervensystem und kann beim Einschlafen und Durchschlafen helfen.",
    doesNot: "Es beseitigt die Ursache einer Schlafstörung nicht und ist nicht für eine dauerhafte tägliche Anwendung gedacht.",
    daily: "Nur unmittelbar vor dem Schlafengehen wie verordnet einnehmen und eine ausreichende Schlafzeit einplanen. Kein Alkohol, keine zusätzlichen Beruhigungsmittel ohne Rücksprache; Sturzrisiko beachten.",
    sideEffects: "Bitterer Geschmack, Tagesmüdigkeit, Schwindel, Gedächtnisstörungen, Muskelschwäche und Stürze können auftreten.",
    urgent: "Bei langsamer oder flacher Atmung, starker Benommenheit, Schlafwandeln oder anderen ungewöhnlichen Handlungen, Ohnmacht oder allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Zopiclon-ratiopharm® Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/z/zopiclon-ratiopharmR-75-mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "carbamazepin", name: "Carbamazepin", examples: "Referenzpräparat: Tegretal® Tabletten", category: "Antiepileptikum",
    purpose: "Carbamazepin wird bei bestimmten epileptischen Anfällen und Nervenschmerzen eingesetzt.",
    does: "Es stabilisiert die elektrische Erregbarkeit von Nervenzellen und kann dadurch Anfälle oder Nervenschmerzen verringern.",
    doesNot: "Es beendet nicht jeden akuten Krampfanfall und ist kein allgemeines Schmerzmittel.",
    daily: "Regelmäßig und nicht abrupt absetzen. Blutbild, Leberwerte und Natrium können kontrolliert werden; viele Wechselwirkungen vorher abklären.",
    sideEffects: "Schwindel, Müdigkeit, Doppeltsehen, Übelkeit, niedriger Natriumwert und Hautausschlag können auftreten.",
    urgent: "Bei Fieber, Halsschmerzen, wunden Stellen im Mund, ungewöhnlichen Blutungen, schwerem Hautausschlag oder Blasenbildung, Gelbfärbung oder starker Verwirrtheit sofort Hilfe holen.",
    source: "Gebrauchsinformation: Tegretal® Tabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/tegretalR-200-mg-tabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "valproinsaeure", name: "Valproinsäure", examples: "Referenzpräparat: Ergenyl® chrono Retardtabletten", category: "Antiepileptikum",
    purpose: "Valproinsäure wird bei bestimmten Formen der Epilepsie und je nach Präparat bei manischen Phasen eingesetzt.",
    does: "Sie stabilisiert die Erregbarkeit im Gehirn und kann Anfälle oder manische Symptome verringern.",
    doesNot: "Sie beendet keinen akuten Krampfanfall und darf nicht plötzlich abgesetzt werden.",
    daily: "Regelmäßig einnehmen; Leberwerte und Blutbild können kontrolliert werden. Für Schwangerschaft und Zeugung gelten besondere Sicherheitsregeln – unbedingt ärztlich oder apothekerlich besprechen.",
    sideEffects: "Übelkeit, Zittern, Gewichtszunahme, Haarausfall, Müdigkeit und Blutbild- oder Leberwertveränderungen können auftreten.",
    urgent: "Bei starken Bauchschmerzen mit Erbrechen, Gelbfärbung, ungewöhnlichen Blutungen, starker Schläfrigkeit oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Ergenyl® chrono Retardtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/e/ergenylR-chrono-500-mg-retardtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "topiramat", name: "Topiramat", examples: "Referenzpräparat: Topamax® Filmtabletten", category: "Antiepileptikum",
    purpose: "Topiramat wird bei bestimmten epileptischen Anfällen und zur Vorbeugung von Migräne eingesetzt.",
    does: "Es stabilisiert die Erregbarkeit von Nervenzellen und kann die Häufigkeit von Anfällen oder Migräneattacken senken.",
    doesNot: "Es beendet keinen akuten Krampfanfall und ist kein Schmerzmittel für eine laufende Migräneattacke.",
    daily: "Langsam nach Plan aufdosieren und nicht abrupt absetzen. Ausreichend trinken, sofern medizinisch nichts dagegen spricht; Konzentration und Sehen beachten.",
    sideEffects: "Kribbeln, Müdigkeit, Konzentrationsprobleme, Gewichtsabnahme, Geschmacksveränderungen und Nierensteine können auftreten.",
    urgent: "Bei plötzlicher Sehverschlechterung oder Augenschmerz, starker Verwirrtheit, deutlicher Überhitzung mit wenig Schwitzen, Suizidgedanken oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "EMA: Topamax® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/topamax", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "lacosamid", name: "Lacosamid", examples: "Referenzpräparat: Vimpat® Filmtabletten", category: "Antiepileptikum",
    purpose: "Lacosamid wird allein oder zusammen mit anderen Mitteln bei bestimmten epileptischen Anfällen eingesetzt.",
    does: "Es stabilisiert die elektrische Aktivität von Nervenzellen und kann epileptische Anfälle verringern.",
    doesNot: "Es beendet nicht jeden akuten Krampfanfall und ist kein allgemeines Beruhigungsmittel.",
    daily: "Regelmäßig einnehmen und nicht abrupt absetzen. Wegen Schwindel und möglicher Herzrhythmuswirkung besonders beim Aufstehen und bei Herzkrankheiten vorsichtig sein.",
    sideEffects: "Schwindel, Kopfschmerzen, Übelkeit, Doppeltsehen, Müdigkeit und Stürze können auftreten.",
    urgent: "Bei Ohnmacht, neuem Herzrasen oder unregelmäßigem Puls, starker Atemnot, schwerem Hautausschlag oder deutlicher Verschlechterung der Stimmung sofort Hilfe holen.",
    source: "EMA: Vimpat® – Produktinformation (aktualisiert 05/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/vimpat", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "pramipexol", name: "Pramipexol", examples: "Referenzpräparat: Sifrol® Tabletten", category: "Parkinsonmittel",
    purpose: "Pramipexol wird bei Parkinson und je nach Dosierung bei einem Restless-Legs-Syndrom eingesetzt.",
    does: "Es ahmt eine Dopaminwirkung im Gehirn nach und kann Beweglichkeit, Zittern oder Beschwerden der unruhigen Beine verbessern.",
    doesNot: "Es heilt Parkinson nicht und hilft nicht sofort gegen jede Form von Schwindel oder Unruhe.",
    daily: "Kann plötzliches Einschlafen, Schwindel und Verhaltensänderungen auslösen. Langsam aufstehen und neue starke Impulse wie Glücksspiel- oder Kaufdrang früh ansprechen.",
    sideEffects: "Übelkeit, Müdigkeit, plötzliches Einschlafen, Schwindel, Halluzinationen und geschwollene Beine können auftreten.",
    urgent: "Bei Ohnmacht, Halluzinationen mit Gefährdung, starker Verwirrtheit, plötzlichen Schlafattacken im Alltag oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "EMA: Sifrol® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/sifrol", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "ropinirol", name: "Ropinirol", examples: "Referenzpräparat: Requip® Filmtabletten", category: "Parkinsonmittel",
    purpose: "Ropinirol wird bei Parkinson und je nach Präparat bei Restless Legs eingesetzt.",
    does: "Es ahmt eine Dopaminwirkung nach und kann Beweglichkeit oder Beschwerden der unruhigen Beine verbessern.",
    doesNot: "Es heilt Parkinson nicht und ist kein allgemeines Schlaf- oder Beruhigungsmittel.",
    daily: "Müdigkeit und plötzliches Einschlafen beachten. Langsam aufstehen und auffälligen Glücksspiel-, Kauf- oder Essdrang frühzeitig ansprechen.",
    sideEffects: "Übelkeit, Müdigkeit, Schwindel, plötzliches Einschlafen, Halluzinationen und niedriger Blutdruck beim Aufstehen können auftreten.",
    urgent: "Bei Ohnmacht, Halluzinationen mit Gefährdung, starker Verwirrtheit, Schlafattacken oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "EMA: Requip® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/requip", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "levodopa-benserazid", name: "Levodopa / Benserazid", examples: "Referenzpräparat: Madopar® Hartkapseln", category: "Parkinsonmittel",
    purpose: "Die Kombination wird zur Behandlung der Parkinson-Krankheit eingesetzt.",
    does: "Levodopa wird im Gehirn zu Dopamin umgewandelt; Benserazid sorgt dafür, dass mehr Levodopa das Gehirn erreicht. Das kann Beweglichkeit und Steifigkeit verbessern.",
    doesNot: "Sie heilt Parkinson nicht und darf nicht plötzlich abgesetzt werden.",
    daily: "Zeitpunkte und Bezug zu Mahlzeiten genau nach Plan einhalten. Schwindel beim Aufstehen, Halluzinationen und unwillkürliche Bewegungen früh ansprechen.",
    sideEffects: "Übelkeit, Schwindel, niedriger Blutdruck beim Aufstehen, Schläfrigkeit, Halluzinationen und unwillkürliche Bewegungen können auftreten.",
    urgent: "Bei hohem Fieber mit Muskelsteife und Verwirrtheit, Ohnmacht, Halluzinationen mit Gefährdung, Brustschmerz oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Madopar® 62,5 mg Hartkapseln (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/m/madoparR-625-mg-hartkapseln/", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "levodopa-carbidopa", name: "Levodopa / Carbidopa", examples: "Referenzpräparat: Nacom® Tabletten", category: "Parkinsonmittel",
    purpose: "Die Kombination wird zur Behandlung der Parkinson-Krankheit eingesetzt.",
    does: "Levodopa wird im Gehirn zu Dopamin umgewandelt; Carbidopa sorgt dafür, dass mehr Levodopa dort ankommt. Das kann Beweglichkeit und Steifigkeit verbessern.",
    doesNot: "Sie heilt Parkinson nicht und darf nicht plötzlich abgesetzt werden.",
    daily: "Zeitpunkte und Bezug zu Mahlzeiten genau nach dem Plan einhalten. Schwindel, Halluzinationen oder neue unwillkürliche Bewegungen früh ansprechen.",
    sideEffects: "Übelkeit, Schwindel, niedriger Blutdruck beim Aufstehen, Schläfrigkeit, Halluzinationen und unwillkürliche Bewegungen können auftreten.",
    urgent: "Bei hohem Fieber mit Muskelsteife und Verwirrtheit, Ohnmacht, Halluzinationen mit Gefährdung, Brustschmerz oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Nacom® Tabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/n/nacomR-100-mg25-mg-tabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "sumatriptan", name: "Sumatriptan", examples: "Referenzpräparat: Imigran® Filmtabletten", category: "Migränemittel",
    purpose: "Sumatriptan wird zur Behandlung einer akuten Migräneattacke eingesetzt.",
    does: "Es wirkt auf bestimmte Blutgefäße und Nervenbahnen und kann eine laufende Migräneattacke lindern.",
    doesNot: "Es verhindert Migräne nicht dauerhaft und ist nicht zur Vorbeugung oder für unklare, neuartige Kopfschmerzen gedacht.",
    daily: "Nur zu Beginn einer ärztlich bekannten Migräneattacke nach Plan anwenden. Die maximale Tagesdosis und Abstände einhalten; bei Herz-Kreislauf-Erkrankungen besondere Vorsicht.",
    sideEffects: "Schwindel, Müdigkeit, Übelkeit, Kribbeln, Druck- oder Engegefühl im Brust- oder Halsbereich können auftreten.",
    urgent: "Bei neuem oder starkem Brustschmerz, Atemnot, Lähmung, Sprachstörung, ungewöhnlich heftigem Kopfschmerz oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Imigran® Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/i/imigranR-50-mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "tapentadol", name: "Tapentadol", examples: "Referenzpräparat: Palexia® retard Retardtabletten", category: "Schmerzmittel",
    purpose: "Tapentadol ist ein starkes Opioid-Schmerzmittel für mäßig starke bis starke Schmerzen, wenn andere Schmerzmittel nicht ausreichen.",
    does: "Es dämpft die Weiterleitung von Schmerzsignalen im Nervensystem. Es lindert Schmerzen, behandelt aber nicht ihre Ursache.",
    doesNot: "Es heilt keine Verletzung, Entzündung oder Tumorerkrankung und ist kein Mittel für unklare neue starke Schmerzen ohne ärztliche Abklärung.",
    daily: "Kann müde machen und die Atmung dämpfen. Kein Alkohol und keine zusätzlichen Beruhigungsmittel ohne Rücksprache; Retardtabletten nicht zerkauen oder teilen. Nicht abrupt absetzen.",
    sideEffects: "Übelkeit, Verstopfung, Schwindel, Müdigkeit, Benommenheit und Schwitzen können auftreten.",
    urgent: "Bei langsamer oder flacher Atmung, extremer Schläfrigkeit, Ohnmacht, nicht weckbarer Person oder einer schweren allergischen Reaktion sofort den Notruf wählen.",
    source: "Gebrauchsinformation: Palexia® retard 25 mg Retardtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/palexiaR-retard-25-mg-retardtabletten/", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "methotrexat", name: "Methotrexat", examples: "Referenzpräparat: Metex® Fertigspritze", category: "Rheumamittel",
    purpose: "Methotrexat wird in niedriger Dosierung einmal wöchentlich bei entzündlich-rheumatischen Erkrankungen und bestimmten Hauterkrankungen eingesetzt.",
    does: "Es bremst die fehlgeleitete Aktivität des Immunsystems und kann Entzündung, Schmerzen und Gelenkschäden verringern.",
    doesNot: "Es ist kein Schmerzmittel für den akuten Bedarf und wirkt bei Rheuma erst nach einiger Zeit.",
    daily: "WICHTIG: Bei Rheuma nur an einem festgelegten Tag EINMAL WÖCHENTLICH anwenden, niemals täglich. Blutbild sowie Leber- und Nierenwerte müssen kontrolliert werden; Folsäure nur nach Plan.",
    sideEffects: "Übelkeit, Müdigkeit, Entzündungen im Mund, erhöhte Leberwerte und eine höhere Infektanfälligkeit können auftreten.",
    urgent: "Bei Fieber, Husten oder Atemnot, starken Halsschmerzen, wunden Stellen im Mund, ungewöhnlichen Blutungen, Gelbfärbung oder Schwangerschaftsverdacht sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Metex® Fertigspritze (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/m/metexR-25-mgml-injektionsloesung-in-einer-fertigspritze", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "adalimumab", name: "Adalimumab", examples: "Referenzpräparat: Humira® Injektionslösung", category: "Rheumamittel",
    purpose: "Adalimumab wird bei mehreren entzündlichen Erkrankungen eingesetzt, etwa Rheuma, Psoriasis, chronisch-entzündlichen Darmerkrankungen oder bestimmten Augenentzündungen.",
    does: "Es blockiert den Entzündungsbotenstoff TNF und kann so Entzündungen und Beschwerden verringern.",
    doesNot: "Es behandelt keine akute schwere Infektion und ist kein Schmerzmittel für den sofortigen Bedarf.",
    daily: "Als Spritze nach dem persönlichen Plan anwenden. Vor Beginn und während der Behandlung auf Infektionen achten; Impfungen und andere Medikamente vorher besprechen.",
    sideEffects: "Reaktionen an der Einstichstelle, Infekte der Atemwege, Kopfschmerzen und Hautausschlag können auftreten.",
    urgent: "Bei Fieber, anhaltendem Husten, Atemnot, nächtlichem Schwitzen, starken Bauchschmerzen, Lähmungserscheinungen oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "EMA: Humira® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/humira", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "etanercept", name: "Etanercept", examples: "Referenzpräparat: Enbrel® Injektionslösung", category: "Rheumamittel",
    purpose: "Etanercept wird bei entzündlichem Rheuma, Psoriasis und weiteren chronischen Entzündungserkrankungen eingesetzt.",
    does: "Es blockiert den Entzündungsbotenstoff TNF und kann Schmerzen, Schwellungen und Entzündung verringern.",
    doesNot: "Es ist kein Schmerzmittel für akute Beschwerden und sollte bei einer schweren Infektion nicht eigenständig weiterverwendet werden.",
    daily: "Als Spritze nach Plan anwenden. Bei Zeichen einer Infektion vor der nächsten Dosis ärztlich Rücksprache halten; Impfungen vorher abklären.",
    sideEffects: "Reaktionen an der Einstichstelle, Infekte der Atemwege, Kopfschmerzen und Hautausschlag können auftreten.",
    urgent: "Bei Fieber, anhaltendem Husten, Atemnot, nächtlichem Schwitzen, starker Schwäche, neuen neurologischen Beschwerden oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "EMA: Enbrel® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/enbrel", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "tocilizumab", name: "Tocilizumab", examples: "Referenzpräparat: RoActemra® Injektionslösung", category: "Rheumamittel",
    purpose: "Tocilizumab wird bei bestimmten entzündlich-rheumatischen Erkrankungen und weiteren entzündlichen Erkrankungen eingesetzt.",
    does: "Es blockiert den Entzündungsbotenstoff Interleukin-6 und kann Entzündung und Gelenkbeschwerden verringern.",
    doesNot: "Es ist kein Schmerzmittel für den akuten Bedarf und kann eine Infektion nicht behandeln.",
    daily: "Als Spritze oder Infusion nach Plan anwenden. Blutbild, Leberwerte und Blutfette werden kontrolliert; Infekte frühzeitig melden.",
    sideEffects: "Infekte, Reaktionen an der Einstichstelle, Kopfschmerzen, erhöhte Leberwerte und Veränderungen des Blutbilds können auftreten.",
    urgent: "Bei Fieber, starken Bauchschmerzen, schwarzem Stuhl, Atemnot, Gelbfärbung, starker Schwäche oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "EMA: RoActemra® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/roactemra", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "secukinumab", name: "Secukinumab", examples: "Referenzpräparat: Cosentyx® Injektionslösung", category: "Rheumamittel",
    purpose: "Secukinumab wird bei Psoriasis, Psoriasis-Arthritis und bestimmten entzündlichen Wirbelsäulenerkrankungen eingesetzt.",
    does: "Es blockiert den Entzündungsbotenstoff Interleukin-17A und kann Haut- und Gelenkentzündungen verringern.",
    doesNot: "Es ist kein Akutmittel für Schmerzen und behandelt keine Infektion.",
    daily: "Als Spritze nach Plan anwenden. Infektzeichen vor der nächsten Dosis abklären; Impfungen und bestehende Darmerkrankungen vorher besprechen.",
    sideEffects: "Infekte der Atemwege, Durchfall, Kopfschmerzen und Reaktionen an der Einstichstelle können auftreten.",
    urgent: "Bei Fieber, anhaltendem Husten, Atemnot, starken oder blutigen Durchfällen, Schwellung von Gesicht oder Hals oder schwerem Hautausschlag sofort Hilfe holen.",
    source: "EMA: Cosentyx® – Produktinformation (aktualisiert 10/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/cosentyx", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "hydroxychloroquin", name: "Hydroxychloroquin", examples: "Referenzpräparat: Quensyl® Filmtabletten", category: "Rheumamittel",
    purpose: "Hydroxychloroquin wird bei bestimmten rheumatischen Erkrankungen wie Lupus oder rheumatoider Arthritis eingesetzt.",
    does: "Es beeinflusst das Immunsystem und kann Entzündungen langfristig verringern.",
    doesNot: "Es ist kein Schmerzmittel mit Sofortwirkung und ersetzt keine Behandlung einer akuten Infektion.",
    daily: "Regelmäßig wie verordnet einnehmen. Augenuntersuchungen und bei bestimmten Risiken Herz-Kontrollen sind wichtig; nicht selbst höher dosieren.",
    sideEffects: "Übelkeit, Bauchschmerzen, Kopfschmerzen, Hautausschlag und Sehstörungen können auftreten.",
    urgent: "Bei Sehverschlechterung, Herzrasen oder Ohnmacht, Muskelschwäche, schweren Unterzuckerungen oder einer starken Hautreaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Quensyl® Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/q/quensylR-200-mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "leflunomid", name: "Leflunomid", examples: "Referenzpräparat: Arava® Filmtabletten", category: "Rheumamittel",
    purpose: "Leflunomid wird bei aktiver rheumatoider Arthritis oder Psoriasis-Arthritis eingesetzt.",
    does: "Es bremst die Aktivität des Immunsystems und kann Entzündung und Gelenkschäden verringern.",
    doesNot: "Es ist kein Schmerzmittel für akute Beschwerden und wirkt nicht sofort.",
    daily: "Nur unter fachärztlicher Kontrolle einnehmen. Blutbild, Leberwerte und Blutdruck müssen kontrolliert werden; Schwangerschaft unbedingt vermeiden und ärztlich besprechen.",
    sideEffects: "Durchfall, Übelkeit, erhöhte Leberwerte, Blutdruckanstieg, Haarausfall und Infekte können auftreten.",
    urgent: "Bei Fieber, Husten oder Atemnot, starken Halsschmerzen, ungewöhnlichen Blutungen, Gelbfärbung, schwerem Hautausschlag oder Schwangerschaftsverdacht sofort Hilfe holen.",
    source: "EMA: Arava® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/arava", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "sulfasalazin", name: "Sulfasalazin", examples: "Referenzpräparat: Azulfidine RA® magensaftresistente Tabletten", category: "Rheumamittel",
    purpose: "Sulfasalazin wird bei rheumatoider Arthritis und je nach Präparat bei entzündlichen Darmerkrankungen eingesetzt.",
    does: "Es kann Entzündung im Körper und in den Gelenken langfristig verringern.",
    doesNot: "Es wirkt nicht sofort gegen Schmerzen und ist kein Antibiotikum für eine Infektion.",
    daily: "Regelmäßig einnehmen und Blutbild sowie Leberwerte kontrollieren lassen. Ausreichend trinken, sofern medizinisch nichts dagegen spricht.",
    sideEffects: "Übelkeit, Bauchbeschwerden, Kopfschmerzen, Hautausschlag, erhöhte Leberwerte und Blutbildveränderungen können auftreten.",
    urgent: "Bei Fieber, Halsschmerzen, wunden Stellen im Mund, ungewöhnlichen Blutungen, Gelbfärbung, schwerem Hautausschlag oder Atemnot sofort Hilfe holen.",
    source: "Gebrauchsinformation: Azulfidine RA® Tabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/azulfidine-raR-500-mg-magensaftresistente-tabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "febuxostat", name: "Febuxostat", examples: "Referenzpräparat: Adenuric® Filmtabletten", category: "Gichtmittel",
    purpose: "Febuxostat wird bei dauerhaft erhöhten Harnsäurewerten mit Gicht oder Harnsäureablagerungen eingesetzt.",
    does: "Es senkt die Bildung von Harnsäure und soll langfristig Gichtanfälle und Ablagerungen verhindern.",
    doesNot: "Es ist kein Schmerzmittel für einen akuten Gichtanfall. Zu Beginn können Gichtanfälle sogar vorübergehend häufiger werden.",
    daily: "Regelmäßig einnehmen, auch wenn ein Gichtanfall auftritt – Änderungen nur mit der Praxis besprechen. Leberwerte und Herz-Kreislauf-Risiko beachten.",
    sideEffects: "Gichtanfälle, Übelkeit, Durchfall, Hautausschlag, erhöhte Leberwerte und Schwellungen können auftreten.",
    urgent: "Bei Brustschmerz, Atemnot, neuen neurologischen Ausfällen, schwerem Hautausschlag oder Blasenbildung, Gelbfärbung oder Atemnot sofort Hilfe holen.",
    source: "EMA: Adenuric® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/adenuric", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "risedronat", name: "Risedronat", examples: "Referenzpräparat: Actonel® Filmtabletten", category: "Knochen-Schutz",
    purpose: "Risedronat wird zur Behandlung oder Vorbeugung von Osteoporose eingesetzt.",
    does: "Es bremst den Knochenabbau und kann das Risiko bestimmter Knochenbrüche senken.",
    doesNot: "Es behandelt keinen akuten Knochenbruch und lindert akute Rückenschmerzen nicht direkt.",
    daily: "Je nach Präparat täglich, wöchentlich oder monatlich einnehmen. Mit Wasser nüchtern und aufrecht einnehmen; danach die vorgegebene Zeit nichts essen und nicht hinlegen.",
    sideEffects: "Magen-Darm-Beschwerden, Sodbrennen, Knochen-, Muskel- oder Gelenkschmerzen können auftreten.",
    urgent: "Bei Schluckbeschwerden, Schmerzen hinter dem Brustbein, schwarzem Stuhl, Kieferproblemen oder starken Muskel- und Knochenschmerzen zeitnah medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Actonel® Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/actonelR-35-mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "ibandronsaeure", name: "Ibandronsäure", examples: "Referenzpräparat: Bonviva® Filmtabletten", category: "Knochen-Schutz",
    purpose: "Ibandronsäure wird zur Behandlung von Osteoporose bei Frauen nach den Wechseljahren eingesetzt.",
    does: "Sie bremst den Knochenabbau und senkt nachweislich das Risiko für Wirbelbrüche.",
    doesNot: "Sie heilt keinen akuten Knochenbruch und ersetzt Bewegung, ausreichende Kalzium- und Vitamin-D-Versorgung nicht.",
    daily: "Je nach Präparat monatlich als Tablette oder in größeren Abständen als Spritze anwenden. Tabletten nüchtern mit Wasser und aufrecht einnehmen.",
    sideEffects: "Magen-Darm-Beschwerden, Sodbrennen, Knochen-, Muskel- oder Gelenkschmerzen können auftreten.",
    urgent: "Bei Schluckbeschwerden, Schmerzen hinter dem Brustbein, Kieferproblemen oder starken Muskel- und Knochenschmerzen zeitnah medizinische Hilfe holen.",
    source: "EMA: Bonviva® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/bonviva", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "latanoprost", name: "Latanoprost", examples: "Referenzpräparat: Xalatan® Augentropfen", category: "Augenmittel",
    purpose: "Latanoprost wird bei erhöhtem Augeninnendruck und Offenwinkelglaukom eingesetzt.",
    does: "Es verbessert den Abfluss von Kammerwasser aus dem Auge und kann so den Augeninnendruck senken.",
    doesNot: "Es verbessert eine bereits verlorene Sehfähigkeit nicht und behandelt keine akute Augenverletzung oder plötzliche Sehstörung.",
    daily: "Einmal täglich wie verordnet ins Auge tropfen. Tropferspitze nicht berühren; Kontaktlinsen- und Anwendungshinweise beachten.",
    sideEffects: "Augenreizung, Rötung, Wimpernveränderungen und eine langsam zunehmende Braunfärbung der Iris können auftreten.",
    urgent: "Bei plötzlichem Sehverlust, starken Augenschmerzen, Lichtempfindlichkeit, deutlicher Schwellung oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Xalatan® Augentropfen (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/x/xalatanR-50-mikrogrammml-augentropfen", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "timolol-augen", name: "Timolol (Augentropfen)", examples: "Referenzpräparat: Tim-Ophtal® Augentropfen", category: "Augenmittel",
    purpose: "Timolol als Augentropfen wird bei erhöhtem Augeninnendruck und Glaukom eingesetzt.",
    does: "Es senkt die Bildung von Kammerwasser und kann dadurch den Augeninnendruck senken.",
    doesNot: "Es stellt verlorenes Sehvermögen nicht wieder her und ist kein Mittel gegen plötzlich starke Augenschmerzen.",
    daily: "Genau nach Plan tropfen. Nach dem Tropfen den inneren Augenwinkel kurz zudrücken, damit weniger Wirkstoff in den Körper gelangt. Bei Asthma oder Herzproblemen besonders abklären.",
    sideEffects: "Augenbrennen, trockene Augen, langsamer Puls, niedriger Blutdruck, Müdigkeit und Atembeschwerden können auftreten.",
    urgent: "Bei Atemnot oder pfeifender Atmung, Ohnmacht, sehr langsamem Puls, Brustschmerz, plötzlichem Sehverlust oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Tim-Ophtal® Augentropfen (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/tim-ophtalR-025-augentropfen", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "dorzolamid-timolol", name: "Dorzolamid / Timolol", examples: "Referenzpräparat: Cosopt® Augentropfen", category: "Augenmittel",
    purpose: "Die Kombination wird bei erhöhtem Augeninnendruck eingesetzt, wenn ein einzelner Wirkstoff nicht ausreicht.",
    does: "Sie senkt über zwei Wege die Bildung von Kammerwasser und kann so den Augeninnendruck senken.",
    doesNot: "Sie stellt verlorenes Sehvermögen nicht wieder her und ist nicht für plötzliche starke Augenschmerzen gedacht.",
    daily: "Genau nach Plan tropfen und den inneren Augenwinkel kurz zudrücken. Bei Asthma, Herzproblemen oder Sulfonamid-Allergie ärztlich abklären.",
    sideEffects: "Augenbrennen, bitterer Geschmack, Kopfschmerzen, langsamer Puls, Müdigkeit und Atembeschwerden können auftreten.",
    urgent: "Bei Atemnot, Ohnmacht, sehr langsamem Puls, Brustschmerz, plötzlichem Sehverlust oder schwerer allergischer Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Cosopt® Augentropfen (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/cosoptR-20-mgml5-mgml-augentropfen", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "brimonidin", name: "Brimonidin", examples: "Referenzpräparat: Alphagan® Augentropfen", category: "Augenmittel",
    purpose: "Brimonidin als Augentropfen wird bei erhöhtem Augeninnendruck und Glaukom eingesetzt.",
    does: "Es senkt die Bildung von Kammerwasser und verbessert teilweise dessen Abfluss. Dadurch kann der Augeninnendruck sinken.",
    doesNot: "Es stellt verlorenes Sehvermögen nicht wieder her und ist keine Behandlung für eine akute Augenverletzung.",
    daily: "Nach Plan tropfen und die Tropferspitze nicht berühren. Nach dem Tropfen den inneren Augenwinkel kurz zudrücken.",
    sideEffects: "Rote oder juckende Augen, Mundtrockenheit, Müdigkeit, Kopfschmerzen und Schwindel können auftreten.",
    urgent: "Bei plötzlichem Sehverlust, starken Augenschmerzen, deutlicher Schwellung, Ohnmacht oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Alphagan® Augentropfen (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/alphaganR-02-augentropfen", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "oxybutynin", name: "Oxybutynin", examples: "Referenzpräparat: Dridase® Tabletten", category: "Urologisches Medikament",
    purpose: "Oxybutynin wird bei überaktiver Blase und bestimmten Formen von unwillkürlichem Urinverlust eingesetzt.",
    does: "Es entspannt den Blasenmuskel und kann häufigen oder plötzlich starken Harndrang verringern.",
    doesNot: "Es behandelt keine Harnwegsinfektion, keinen Harnverhalt und keine Ursache wie eine Prostatavergrößerung.",
    daily: "Mundtrockenheit, Verstopfung und Benommenheit beachten. Bei älteren Menschen können Verwirrtheit und Sturzrisiko zunehmen; ausreichend trinken, sofern medizinisch nichts dagegen spricht.",
    sideEffects: "Mundtrockenheit, Verstopfung, Sehstörungen, Benommenheit, Herzklopfen und Verwirrtheit können auftreten.",
    urgent: "Bei Unfähigkeit zu urinieren, starken Bauchschmerzen, akuter Verwirrtheit, Fieber, plötzlichen Augenschmerzen oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "Gebrauchsinformation: Dridase® Tabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/dridaseR-5-mg-tabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "fesoterodin", name: "Fesoterodin", examples: "Referenzpräparat: Toviaz® Retardtabletten", category: "Urologisches Medikament",
    purpose: "Fesoterodin wird bei überaktiver Blase mit häufigem, starkem Harndrang und Dranginkontinenz eingesetzt.",
    does: "Es entspannt den Blasenmuskel und kann Drang und ungewollten Urinverlust verringern.",
    doesNot: "Es behandelt keine Harnwegsinfektion und keine andere Ursache für Schmerzen beim Wasserlassen.",
    daily: "Retardtabletten ganz schlucken. Mundtrockenheit, Verstopfung und Benommenheit beachten; bei älteren Menschen kann das Sturz- und Verwirrtheitsrisiko steigen.",
    sideEffects: "Mundtrockenheit, Verstopfung, trockene Augen, Sehstörungen, Benommenheit und Probleme beim Wasserlassen können auftreten.",
    urgent: "Bei Unfähigkeit zu urinieren, starken Bauchschmerzen, akuter Verwirrtheit, plötzlichen Augenschmerzen oder einer schweren allergischen Reaktion sofort Hilfe holen.",
    source: "EMA: Toviaz® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/toviaz", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "dutasterid", name: "Dutasterid", examples: "Referenzpräparat: Avodart® Weichkapseln", category: "Urologisches Medikament",
    purpose: "Dutasterid wird bei gutartiger Prostatavergrößerung eingesetzt, um Beschwerden beim Wasserlassen und das Risiko eines Harnverhalts zu verringern.",
    does: "Es senkt bestimmte männliche Hormone in der Prostata. Dadurch kann die Prostata über Monate kleiner werden.",
    doesNot: "Es hilft nicht sofort bei Beschwerden und behandelt weder eine Prostataentzündung noch Prostatakrebs.",
    daily: "Täglich wie verordnet einnehmen. Die Wirkung braucht Monate. Kapseln nicht öffnen; PSA-Werte und Vorsorgeuntersuchungen bleiben wichtig.",
    sideEffects: "Erektionsstörungen, weniger Lust auf Sex, Ejakulationsstörungen, Brustempfindlichkeit oder Brustvergrößerung können auftreten.",
    urgent: "Bei Knoten oder Ausfluss an der Brust, Schwellung von Gesicht oder Hals, Atemnot oder einer schweren Hautreaktion sofort Hilfe holen.",
    source: "EMA: Avodart® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/avodart", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "sildenafil", name: "Sildenafil", examples: "Referenzpräparat: Viagra® Filmtabletten", category: "Urologisches Medikament",
    purpose: "Sildenafil wird bei erwachsenen Männern zur Behandlung einer Erektionsstörung eingesetzt.",
    does: "Es verbessert bei sexueller Stimulation die Durchblutung des Penis und kann so eine Erektion ermöglichen.",
    doesNot: "Es erzeugt keine sexuelle Lust, hilft nicht ohne sexuelle Stimulation und ist kein Mittel gegen Brustschmerz.",
    daily: "Nur wie verordnet anwenden. Niemals zusammen mit Nitraten gegen Angina pectoris einnehmen; auch Herz-Kreislauf-Erkrankungen und andere Medikamente vorher abklären.",
    sideEffects: "Kopfschmerzen, Gesichtsrötung, verstopfte Nase, Sodbrennen, Schwindel und Sehstörungen können auftreten.",
    urgent: "Bei Brustschmerz, Ohnmacht, plötzlichem Sehverlust, Hörverlust oder einer schmerzhaften Erektion über vier Stunden sofort Hilfe holen.",
    source: "EMA: Viagra® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/viagra", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "tadalafil", name: "Tadalafil", examples: "Referenzpräparat: Cialis® Filmtabletten", category: "Urologisches Medikament",
    purpose: "Tadalafil wird bei erwachsenen Männern bei Erektionsstörung und je nach Dosierung auch bei Beschwerden einer gutartigen Prostatavergrößerung eingesetzt.",
    does: "Es entspannt Blutgefäße. Bei sexueller Stimulation kann es eine Erektion erleichtern; bei Prostatabeschwerden kann es den Harnfluss verbessern.",
    doesNot: "Es erzeugt keine sexuelle Lust, hilft nicht ohne sexuelle Stimulation und ist kein Mittel gegen Brustschmerz.",
    daily: "Nur wie verordnet anwenden. Niemals zusammen mit Nitraten gegen Angina pectoris einnehmen; Blutdruckmittel, Herzprobleme und andere Medikamente vorher abklären.",
    sideEffects: "Kopfschmerzen, Gesichtsrötung, Sodbrennen, Rücken- oder Muskelschmerzen, verstopfte Nase und Schwindel können auftreten.",
    urgent: "Bei Brustschmerz, Ohnmacht, plötzlichem Sehverlust, Hörverlust oder einer schmerzhaften Erektion über vier Stunden sofort Hilfe holen.",
    source: "EMA: Cialis® – Produktinformation (aktualisiert 01/2026, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/cialis", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "olaparib", name: "Olaparib", examples: "Referenzpräparat: Lynparza® Filmtabletten", category: "Krebstherapie",
    purpose: "Olaparib wird bei ausgewählten Krebsarten eingesetzt, unter anderem bei bestimmten Formen von Eierstock-, Brust-, Bauchspeicheldrüsen- und Prostatakrebs.",
    does: "Es hemmt ein Enzym zur DNA-Reparatur in Krebszellen. Dadurch kann das Wachstum bestimmter Tumoren gebremst werden.", doesNot: "Es ist kein Schmerzmittel und heilt Krebs nicht unmittelbar oder bei jeder Tumorart.",
    daily: "Nur nach dem onkologischen Plan einnehmen. Blutbild und Nebenwirkungen werden regelmäßig kontrolliert; nicht eigenmächtig pausieren oder die Dosis ändern.", sideEffects: "Übelkeit, Müdigkeit, Blutarmut, Appetitverlust, Durchfall und Veränderungen des Blutbilds können auftreten.",
    urgent: "Bei Fieber, Atemnot, starker Müdigkeit, ungewöhnlichen Blutungen, anhaltendem Husten oder starken Bauchschmerzen sofort die Onkologie kontaktieren.", source: "EMA: Lynparza® – Produktinformation (aktualisiert 02/2026, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/lynparza", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "talazoparib", name: "Talazoparib", examples: "Referenzpräparat: Talzenna® Hartkapseln", category: "Krebstherapie",
    purpose: "Talazoparib wird bei ausgewählten Formen von Brustkrebs und metastasiertem kastrationsresistentem Prostatakrebs eingesetzt.", does: "Es hemmt ein Enzym zur DNA-Reparatur in Krebszellen und kann deren Wachstum bremsen.", doesNot: "Es ist kein Schmerzmittel und keine allgemeine Krebstherapie für jede Tumorart.",
    daily: "Nur nach dem onkologischen Plan einnehmen. Blutbild und Nierenfunktion können kontrolliert werden; Kapseln nicht ohne Rücksprache absetzen.", sideEffects: "Blutarmut, Müdigkeit, Übelkeit, Appetitverlust, Durchfall und Veränderungen des Blutbilds können auftreten.",
    urgent: "Bei Fieber, Atemnot, starker Blässe oder Müdigkeit, ungewöhnlichen Blutungen oder Zeichen einer Infektion sofort die Onkologie kontaktieren.", source: "EMA: Talzenna® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/talzenna", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "docetaxel", name: "Docetaxel", examples: "Referenzpräparat: Taxotere® Infusionslösung", category: "Krebstherapie",
    purpose: "Docetaxel ist eine Chemotherapie für verschiedene Krebsarten, unter anderem Brust-, Lungen- und Prostatakrebs.", does: "Es stört die Zellteilung und kann dadurch das Wachstum von Krebszellen bremsen.", doesNot: "Es ist kein Schmerzmittel und wird nicht zur Behandlung gewöhnlicher Infekte eingesetzt.",
    daily: "Wird als Infusion ausschließlich durch die Onkologie verabreicht. Blutbild, Infekte und Nebenwirkungen werden eng überwacht.", sideEffects: "Erhöhte Infektanfälligkeit, Müdigkeit, Übelkeit, Haarausfall, Durchfall, Kribbeln an Händen oder Füßen und Schwellungen können auftreten.",
    urgent: "Bei Fieber ab 38 °C, Schüttelfrost, Atemnot, Durchfall, starken wunden Stellen im Mund oder ungewöhnlichen Blutungen sofort die Onkologie oder den Notdienst kontaktieren.", source: "EMA: Taxotere® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/taxotere", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "cabazitaxel", name: "Cabazitaxel", examples: "Referenzpräparat: Jevtana® Infusionslösung", category: "Krebstherapie",
    purpose: "Cabazitaxel wird zusammen mit Kortison bei metastasiertem kastrationsresistentem Prostatakrebs eingesetzt, wenn eine vorherige Behandlung nicht ausreicht.", does: "Es stört die Zellteilung und kann das Tumorwachstum bremsen.", doesNot: "Es ist kein Schmerzmittel und keine Heilung der Krebserkrankung.",
    daily: "Wird als Infusion ausschließlich durch die Onkologie gegeben. Blutbild und Infektionszeichen sind besonders wichtig.", sideEffects: "Erhöhte Infektanfälligkeit, Durchfall, Übelkeit, Müdigkeit, Blutbildveränderungen und Haarausfall können auftreten.",
    urgent: "Bei Fieber, Schüttelfrost, schwerem Durchfall, Atemnot, ungewöhnlichen Blutungen oder starker Schwäche sofort die Onkologie oder den Notdienst kontaktieren.", source: "EMA: Jevtana® – Produktinformation (aktualisiert 09/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/jevtana", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "radium-223-dichlorid", name: "Radium-223-dichlorid", examples: "Referenzpräparat: Xofigo® Injektionslösung", category: "Krebstherapie",
    purpose: "Radium-223-dichlorid wird bei bestimmten Formen von Prostatakrebs mit Knochenmetastasen eingesetzt.", does: "Es reichert sich bevorzugt an Knochenmetastasen an und gibt dort eine kurzreichweitige Strahlung ab, die Tumorzellen schädigen kann.", doesNot: "Es behandelt keine Metastasen in allen Organen und ist kein Schmerzmittel für den akuten Bedarf.",
    daily: "Wird ausschließlich durch ein spezialisiertes nuklearmedizinisches oder onkologisches Team verabreicht. Blutbildtermine unbedingt einhalten.", sideEffects: "Übelkeit, Durchfall, Erbrechen und Veränderungen des Blutbilds können auftreten.",
    urgent: "Bei Fieber, ungewöhnlichen Blutungen, starker Schwäche, Atemnot oder Zeichen einer Infektion sofort die Onkologie kontaktieren.", source: "EMA: Xofigo® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/xofigo", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "lutetium-177-vipivotid-tetraxetan", name: "Lutetium-177-Vipivotid-Tetraxetan", examples: "Referenzpräparat: Pluvicto® Infusionslösung", category: "Krebstherapie",
    purpose: "Dieses Radioligandenmittel wird bei ausgewählten Menschen mit metastasiertem kastrationsresistentem Prostatakrebs eingesetzt.", does: "Es bindet an PSMA-tragende Tumorzellen und transportiert eine radioaktive Strahlung gezielt dorthin.", doesNot: "Es ist kein Schmerzmittel und wirkt nur bei einer ärztlich geprüften Eignung des Tumors.",
    daily: "Wird ausschließlich in einem spezialisierten Zentrum gegeben. Hinweise zu Blutbildkontrollen und Strahlenschutz genau befolgen.", sideEffects: "Mundtrockenheit, Müdigkeit, Übelkeit und Veränderungen des Blutbilds können auftreten.",
    urgent: "Bei Fieber, ungewöhnlichen Blutungen, starker Schwäche, Atemnot oder Zeichen einer Infektion sofort das Behandlungsteam kontaktieren.", source: "EMA: Pluvicto® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/pluvicto", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "pembrolizumab", name: "Pembrolizumab", examples: "Referenzpräparat: Keytruda® Infusionslösung", category: "Krebstherapie",
    purpose: "Pembrolizumab ist eine Immuntherapie für zahlreiche bestimmte Krebsarten, wenn die Tumorart und Tests dafür sprechen.", does: "Es löst eine Bremse des Immunsystems, damit Abwehrzellen Krebszellen besser angreifen können.", doesNot: "Es ist keine Chemotherapie und keine Behandlung für jede Krebserkrankung.",
    daily: "Wird als Infusion oder Spritze durch die Onkologie gegeben. Auch neue, scheinbar harmlose Beschwerden früh melden, weil das Immunsystem Organe angreifen kann.", sideEffects: "Müdigkeit, Hautausschlag, Juckreiz, Durchfall, Übelkeit, Husten und hormonelle Störungen können auftreten.",
    urgent: "Bei neuer Atemnot, anhaltendem oder blutigem Durchfall, starken Bauchschmerzen, Gelbfärbung, starker Kopfschmerzen, Sehstörungen oder deutlicher Muskelschwäche sofort die Onkologie kontaktieren.", source: "EMA: Keytruda® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/keytruda", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "nivolumab", name: "Nivolumab", examples: "Referenzpräparat: Opdivo® Infusionslösung", category: "Krebstherapie",
    purpose: "Nivolumab ist eine Immuntherapie für mehrere bestimmte Krebsarten, je nach Tumorart und Behandlungssituation.", does: "Es löst eine Bremse des Immunsystems, damit Abwehrzellen Krebszellen besser angreifen können.", doesNot: "Es ist keine Chemotherapie und keine Behandlung für jede Krebserkrankung.",
    daily: "Wird durch die Onkologie als Infusion oder Spritze gegeben. Neue Beschwerden immer zeitnah melden, auch nach der letzten Gabe.", sideEffects: "Müdigkeit, Durchfall, Hautausschlag, Juckreiz, Husten, Übelkeit und hormonelle Störungen können auftreten.",
    urgent: "Bei neuer Atemnot, anhaltendem oder blutigem Durchfall, starken Bauchschmerzen, Gelbfärbung, starken Kopfschmerzen oder deutlicher Muskelschwäche sofort die Onkologie kontaktieren.", source: "EMA: Opdivo® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/opdivo", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "abemaciclib", name: "Abemaciclib", examples: "Referenzpräparat: Verzenios® Filmtabletten", category: "Krebstherapie",
    purpose: "Abemaciclib wird zusammen mit einer Hormontherapie bei bestimmten hormonrezeptorpositiven HER2-negativen Brustkrebsformen eingesetzt.", does: "Es hemmt Enzyme, die die Zellteilung von Krebszellen fördern können.", doesNot: "Es ist keine allgemeine Krebstherapie und kein Mittel gegen akute Schmerzen.",
    daily: "Tabletten nur nach onkologischem Plan einnehmen. Durchfall früh behandeln und Blutbild- sowie Leberwertkontrollen einhalten.", sideEffects: "Durchfall, Müdigkeit, Übelkeit, Infekte, Blutbildveränderungen und erhöhte Leberwerte können auftreten.",
    urgent: "Bei Fieber, Atemnot, Brustschmerz, einseitiger Beinschwellung, schwerem Durchfall, Gelbfärbung oder starker Schwäche sofort die Onkologie kontaktieren.", source: "EMA: Verzenios® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/verzenios", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "palbociclib", name: "Palbociclib", examples: "Referenzpräparat: Ibrance® Hartkapseln", category: "Krebstherapie",
    purpose: "Palbociclib wird zusammen mit einer Hormontherapie bei bestimmten hormonrezeptorpositiven HER2-negativen Brustkrebsformen eingesetzt.", does: "Es hemmt Enzyme, die die Zellteilung von Krebszellen fördern können.", doesNot: "Es ist keine allgemeine Krebstherapie und kein Mittel gegen akute Schmerzen.",
    daily: "Nach onkologischem Einnahmeplan anwenden. Blutbildkontrollen sind wichtig; bei Fieber nicht bis zum nächsten Termin warten.", sideEffects: "Niedrige weiße Blutkörperchen, Infekte, Müdigkeit, Haarausdünnung, Übelkeit und Entzündungen im Mund können auftreten.",
    urgent: "Bei Fieber, Schüttelfrost, Husten oder Atemnot, starken wunden Stellen im Mund, ungewöhnlichen Blutungen oder starker Schwäche sofort die Onkologie kontaktieren.", source: "EMA: Ibrance® – Produktinformation (aktualisiert 03/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/ibrance", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "ribociclib", name: "Ribociclib", examples: "Referenzpräparat: Kisqali® Filmtabletten", category: "Krebstherapie",
    purpose: "Ribociclib wird zusammen mit einer Hormontherapie bei bestimmten hormonrezeptorpositiven HER2-negativen Brustkrebsformen eingesetzt.", does: "Es hemmt Enzyme, die die Zellteilung von Krebszellen fördern können.", doesNot: "Es ist keine allgemeine Krebstherapie und kein Mittel gegen akute Schmerzen.",
    daily: "Nach onkologischem Einnahmeplan anwenden. Blutbild, Leberwerte und Herzstromkurve werden kontrolliert; neue Medikamente vorher abklären.", sideEffects: "Niedrige weiße Blutkörperchen, Infekte, Müdigkeit, Übelkeit, erhöhte Leberwerte und Herzrhythmusveränderungen können auftreten.",
    urgent: "Bei Fieber, Herzrasen oder Ohnmacht, Gelbfärbung, Atemnot, starken wunden Stellen im Mund oder schwerer Schwäche sofort die Onkologie kontaktieren.", source: "EMA: Kisqali® – Produktinformation (aktualisiert 05/2026, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/kisqali", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "goserelin", name: "Goserelin", examples: "Referenzpräparat: Zoladex® Implantat", category: "Krebstherapie",
    purpose: "Goserelin wird unter anderem bei Prostatakrebs und bestimmten hormonabhängigen Erkrankungen eingesetzt.", does: "Es senkt nach einer kurzen Anfangsphase die Bildung von Sexualhormonen und kann so hormonabhängiges Tumorwachstum bremsen.", doesNot: "Es ist kein Schmerzmittel und heilt Prostatakrebs nicht unmittelbar.",
    daily: "Wird als Depotimplantat durch medizinisches Fachpersonal gegeben. Beschwerden, Stimmung, Knochengesundheit und Blutwerte wie PSA werden nach Plan kontrolliert.", sideEffects: "Hitzewallungen, Schwitzen, Müdigkeit, sexuelle Funktionsstörungen, Stimmungsschwankungen und Knochenschwund können auftreten.",
    urgent: "Bei neu auftretender starker Schwäche oder Lähmung, Problemen beim Wasserlassen, Brustschmerz, Ohnmacht oder einer schweren allergischen Reaktion sofort Hilfe holen.", source: "Gebrauchsinformation: Zoladex® Implantat (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/z/zoladexR-36-mg-depotimplantat", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "triptorelin", name: "Triptorelin", examples: "Referenzpräparat: Pamorelin® Depot", category: "Krebstherapie",
    purpose: "Triptorelin wird unter anderem bei hormonabhängigem Prostatakrebs eingesetzt.", does: "Es senkt nach einer kurzen Anfangsphase die Bildung von Sexualhormonen und kann dadurch hormonabhängiges Tumorwachstum bremsen.", doesNot: "Es ist kein Schmerzmittel und heilt Prostatakrebs nicht unmittelbar.",
    daily: "Wird als Depotinjektion durch medizinisches Fachpersonal gegeben. PSA, Beschwerden und Knochengesundheit werden nach Plan kontrolliert.", sideEffects: "Hitzewallungen, Schwitzen, Müdigkeit, sexuelle Funktionsstörungen, Stimmungsschwankungen und Knochenschwund können auftreten.",
    urgent: "Bei neu auftretender starker Schwäche oder Lähmung, Problemen beim Wasserlassen, Brustschmerz, Ohnmacht oder einer schweren allergischen Reaktion sofort Hilfe holen.", source: "Gebrauchsinformation: Pamorelin® Depot (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/p/pamorelinR-la-1125-mg-pulver-und-loesungsmittel-zur-herstellung-einer-injektionssuspension", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "bicalutamid", name: "Bicalutamid", examples: "Referenzpräparat: Casodex® Filmtabletten", category: "Krebstherapie",
    purpose: "Bicalutamid wird bei Prostatakrebs eingesetzt, häufig zusammen mit einer Behandlung zur Senkung der Hormonproduktion.", does: "Es blockiert die Wirkung männlicher Hormone an Tumorzellen und kann dadurch hormonabhängiges Tumorwachstum bremsen.", doesNot: "Es ist kein Schmerzmittel und heilt Prostatakrebs nicht unmittelbar.",
    daily: "Täglich wie verordnet einnehmen. Leberwerte und Beschwerden nach Plan kontrollieren; nicht selbst absetzen.", sideEffects: "Brustspannen, Hitzewallungen, Müdigkeit, Blutarmut, Übelkeit und Veränderungen der Leberwerte können auftreten.",
    urgent: "Bei Gelbfärbung, dunklem Urin, Atemnot, Brustschmerz, Schwellung von Gesicht oder Hals oder starker Schwäche sofort die Onkologie kontaktieren.", source: "Gebrauchsinformation: Casodex® Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/casodexR-50-mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "hydrocortison", name: "Hydrocortison", examples: "Referenzpräparat: Plenadren® Retardtabletten", category: "Kortison",
    purpose: "Hydrocortison ersetzt bei Nebennierenrinden-Schwäche das fehlende körpereigene Kortisol.", does: "Es ersetzt ein lebenswichtiges Hormon, das der Körper unter anderem für Kreislauf, Stoffwechsel und Stressreaktionen braucht.", doesNot: "Es ist nicht nur ein allgemeines Entzündungs- oder Schmerzmittel und darf bei einer Nebennieren-Schwäche nicht einfach abgesetzt werden.",
    daily: "Genau nach Plan einnehmen. Für Krankheit, Fieber, Operationen oder Erbrechen gilt ein individueller Notfallplan mit möglicher Dosisanpassung – immer ärztlich besprechen.", sideEffects: "Gewichtszunahme, Schlafstörungen, Stimmungsschwankungen, Blutzuckeranstieg und bei zu hoher Dosis Infektanfälligkeit können auftreten.",
    urgent: "Bei Erbrechen oder Durchfall mit fehlender Medikamentenaufnahme, starker Schwäche, Verwirrtheit, Ohnmacht oder Kreislaufproblemen sofort den Notfallplan anwenden und medizinische Hilfe holen.", source: "EMA: Plenadren® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/plenadren", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "methylprednisolon", name: "Methylprednisolon", examples: "Referenzpräparat: Urbason® Tabletten", category: "Kortison",
    purpose: "Methylprednisolon wird bei verschiedenen Entzündungs-, Autoimmun- und Allergieerkrankungen eingesetzt.", does: "Es dämpft starke Entzündungen und die Aktivität des Immunsystems.", doesNot: "Es behandelt die Ursache einer Infektion nicht und darf bei längerer Anwendung nicht plötzlich abgesetzt werden.",
    daily: "Wie verordnet einnehmen, häufig morgens. Bei längerer Anwendung gibt es einen Ausschleichplan; Infektzeichen, Blutzucker und Blutdruck beachten.", sideEffects: "Schlafstörungen, Stimmungsschwankungen, Blutzuckeranstieg, Magenbeschwerden, Blutdruckanstieg und erhöhte Infektanfälligkeit können auftreten.",
    urgent: "Bei Fieber oder Zeichen einer Infektion, schwarzem Stuhl, starken Bauchschmerzen, Verwirrtheit, Sehstörungen oder einer schweren allergischen Reaktion sofort Hilfe holen.", source: "Gebrauchsinformation: Urbason® Tabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/u/urbasonR-16-mg-tabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "filgrastim", name: "Filgrastim", examples: "Referenzpräparat: Neupogen® Injektionslösung", category: "Begleitmedikament Krebstherapie",
    purpose: "Filgrastim wird eingesetzt, um nach Chemotherapie oder in anderen Situationen die Bildung bestimmter weißer Blutkörperchen anzuregen.", does: "Es stimuliert das Knochenmark, damit mehr neutrophile Abwehrzellen gebildet werden.", doesNot: "Es ist kein Antibiotikum und verhindert oder behandelt eine Infektion nicht sicher.",
    daily: "Als Spritze nach dem genauen onkologischen Plan anwenden. Blutbildtermine einhalten; Knochenschmerzen früh ansprechen.", sideEffects: "Knochen- und Muskelschmerzen, Kopfschmerzen, Müdigkeit, Übelkeit und Reaktionen an der Einstichstelle können auftreten.",
    urgent: "Bei Fieber, Atemnot, starken Schmerzen im linken Oberbauch oder an der linken Schulter, plötzlich starker Schwäche oder schwerer allergischer Reaktion sofort die Onkologie kontaktieren.", source: "EMA: Neupogen® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/neupogen", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "pegfilgrastim", name: "Pegfilgrastim", examples: "Referenzpräparat: Neulasta® Injektionslösung", category: "Begleitmedikament Krebstherapie",
    purpose: "Pegfilgrastim wird nach bestimmten Chemotherapien eingesetzt, um die Bildung bestimmter weißer Blutkörperchen anzuregen.", does: "Es stimuliert das Knochenmark länger anhaltend, damit mehr neutrophile Abwehrzellen gebildet werden.", doesNot: "Es ist kein Antibiotikum und verhindert oder behandelt eine Infektion nicht sicher.",
    daily: "Als Spritze zum festgelegten Zeitpunkt nach dem Chemotherapieplan anwenden. Blutbildtermine einhalten und Knochenschmerzen ansprechen.", sideEffects: "Knochen- und Muskelschmerzen, Kopfschmerzen, Müdigkeit, Übelkeit und Reaktionen an der Einstichstelle können auftreten.",
    urgent: "Bei Fieber, Atemnot, starken Schmerzen im linken Oberbauch oder an der linken Schulter, plötzlich starker Schwäche oder schwerer allergischer Reaktion sofort die Onkologie kontaktieren.", source: "EMA: Neulasta® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/neulasta", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "epoetin-alfa", name: "Epoetin alfa", examples: "Referenzpräparat: Eprex® Injektionslösung", category: "Blutbildmittel",
    purpose: "Epoetin alfa wird bei bestimmten Formen von Blutarmut eingesetzt, unter anderem bei chronischer Nierenerkrankung oder je nach Situation während einer Krebstherapie.", does: "Es regt das Knochenmark zur Bildung roter Blutkörperchen an und kann den Hämoglobinwert erhöhen.", doesNot: "Es ersetzt kein Eisen, Vitamin B12 oder Folsäure, wenn deren Mangel die Ursache der Blutarmut ist.",
    daily: "Als Spritze nach Plan anwenden. Hämoglobin, Blutdruck und Eisenstatus werden kontrolliert; nicht eigenmächtig höher dosieren.", sideEffects: "Blutdruckanstieg, Kopfschmerzen, Muskel- oder Gelenkschmerzen und ein erhöhtes Risiko für Blutgerinnsel können auftreten.",
    urgent: "Bei Brustschmerz, Atemnot, einseitiger Beinschwellung, plötzlichen neurologischen Ausfällen, sehr hohem Blutdruck oder schwerer allergischer Reaktion sofort Hilfe holen.", source: "EMA: Eprex® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/eprex", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "darbepoetin-alfa", name: "Darbepoetin alfa", examples: "Referenzpräparat: Aranesp® Injektionslösung", category: "Blutbildmittel",
    purpose: "Darbepoetin alfa wird bei bestimmten Formen von Blutarmut eingesetzt, unter anderem bei chronischer Nierenerkrankung oder je nach Situation während einer Krebstherapie.", does: "Es regt das Knochenmark zur Bildung roter Blutkörperchen an und kann den Hämoglobinwert erhöhen.", doesNot: "Es ersetzt kein Eisen, Vitamin B12 oder Folsäure, wenn deren Mangel die Ursache der Blutarmut ist.",
    daily: "Als Spritze nach Plan anwenden. Hämoglobin, Blutdruck und Eisenstatus werden kontrolliert; nicht eigenmächtig höher dosieren.", sideEffects: "Blutdruckanstieg, Kopfschmerzen, Muskel- oder Gelenkschmerzen und ein erhöhtes Risiko für Blutgerinnsel können auftreten.",
    urgent: "Bei Brustschmerz, Atemnot, einseitiger Beinschwellung, plötzlichen neurologischen Ausfällen, sehr hohem Blutdruck oder schwerer allergischer Reaktion sofort Hilfe holen.", source: "EMA: Aranesp® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/aranesp", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "dimenhydrinat", name: "Dimenhydrinat", examples: "Referenzpräparat: VomiSaft® 24 mg Lösung zum Einnehmen", category: "Mittel gegen Übelkeit",
    purpose: "Dimenhydrinat wird gegen Reisekrankheit mit Übelkeit, Erbrechen und Schwindel eingesetzt.",
    does: "Es dämpft im Nervensystem Reize, die Übelkeit und Erbrechen auslösen können.",
    doesNot: "Es behandelt nicht die Ursache von anhaltendem oder starkem Erbrechen, Bauchschmerzen, Fieber oder einer Kopfverletzung.",
    daily: "Kann deutlich müde machen. Bei Kindern immer die passende Alters- und Gewichtsangabe der konkreten Packung prüfen; nie zusammen mit weiteren beruhigenden Mitteln ohne Rücksprache geben. Die App berechnet keine Dosis.",
    sideEffects: "Müdigkeit, Schwindel, Mundtrockenheit, Sehstörungen, Verstopfung und Probleme beim Wasserlassen können auftreten.",
    urgent: "Bei versehentlicher Überdosierung, starker Unruhe oder Verwirrtheit, Krampfanfällen, Halluzinationen, Atemproblemen, Herzrasen oder nicht weckbarer Person sofort den Notruf oder Giftnotruf kontaktieren.",
    source: "Gebrauchsinformation: VomiSaft® 24 mg Lösung zum Einnehmen (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/uv/vomisaftR-24-mg-loesung-zum-einnehmen", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "xylometazolin-dexpanthenol", name: "Xylometazolin / Dexpanthenol", examples: "Referenzpräparat: Septanasal® für Kinder Nasenspray", category: "Mittel gegen Schnupfen",
    purpose: "Die Kombination wird kurzzeitig bei einer verstopften Nase eingesetzt; Dexpanthenol soll die Nasenschleimhaut zusätzlich schützen.",
    does: "Xylometazolin lässt die Nasenschleimhaut abschwellen. Dadurch kann die Nase rasch freier werden.",
    doesNot: "Sie behandelt nicht die Ursache eines Infekts oder einer Allergie und ist keine Dauertherapie für eine verstopfte Nase.",
    daily: "Nur kurz und genau nach der Packungsbeilage anwenden. Bei Kindern sind Alter, Wirkstoffstärke und konkrete Packung entscheidend. Längerer oder zu häufiger Gebrauch kann die Nase danach noch stärker verstopfen.",
    sideEffects: "Brennen oder Trockenheit der Nase, Niesen, Kopfschmerzen, Herzklopfen, Unruhe und Schlafstörungen können auftreten.",
    urgent: "Bei Atemnot, starker Schwellung von Gesicht oder Hals, Herzrasen mit Schwindel, auffälliger Unruhe oder einer möglichen Überdosierung sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Septanasal® für Kinder 0,5 mg/ml + 50 mg/ml Nasenspray (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/septanasalR-fuer-kinder-05-mgml--50-mgml-nasenspray-loesung", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "azathioprin", name: "Azathioprin", examples: "Referenzpräparat: Azathioprin HEXAL® Filmtabletten", category: "Darmerkrankungen",
    purpose: "Azathioprin wird unter fachärztlicher Kontrolle unter anderem bei Colitis ulcerosa und Morbus Crohn eingesetzt, um eine überschießende Immunreaktion zu dämpfen.",
    does: "Es schwächt gezielt Teile des Immunsystems. Dadurch kann es helfen, Entzündungsschübe langfristig zu verhindern oder seltener zu machen.",
    doesNot: "Es wirkt nicht sofort bei einem akuten Schub und behandelt keine Infektion.",
    daily: "Nur nach dem persönlichen Facharztplan einnehmen. Blutbild sowie Leberwerte müssen regelmäßig kontrolliert werden; Impfungen und neue Medikamente immer vorher abklären.",
    sideEffects: "Übelkeit, Müdigkeit, erhöhte Infektanfälligkeit, Veränderungen des Blutbilds und der Leberwerte können auftreten.",
    urgent: "Bei Fieber, Halsschmerzen, Husten oder Atemnot, wunden Stellen im Mund, ungewöhnlichen Blutungen, Gelbfärbung oder starker Bauchschmerz sofort die behandelnde Praxis kontaktieren.",
    source: "Gebrauchsinformation: Azathioprin HEXAL® Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/azathioprin-hexal-75mg-100mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "vedolizumab", name: "Vedolizumab", examples: "Referenzpräparat: Entyvio® Infusion oder Fertigpen", category: "Darmerkrankungen",
    purpose: "Vedolizumab wird bei mittelschwerer bis schwerer Colitis ulcerosa oder Morbus Crohn eingesetzt, wenn andere Behandlungen nicht ausreichend wirken oder nicht vertragen werden.",
    does: "Es bremst die Einwanderung bestimmter Abwehrzellen in den Darm und kann so die Darmentzündung verringern.",
    doesNot: "Es ist kein Mittel für eine Selbstbehandlung eines akuten Schubs und hilft nicht gegen jede Ursache von Bauchschmerzen oder Durchfall.",
    daily: "Wird als Infusion oder nach Einweisung als Spritze nach einem festen Facharztplan angewendet. Die Patientenkarte und Kontrolltermine beachten.",
    sideEffects: "Erkältungsähnliche Infekte, Kopfschmerzen, Gelenkschmerzen, Übelkeit, Müdigkeit und Reaktionen an der Infusions- oder Einstichstelle können auftreten.",
    urgent: "Bei Fieber, anhaltendem Husten, Atemnot, starkem Durchfall, Schwellung von Gesicht oder Hals, Hautausschlag oder einer Reaktion während/nach der Infusion sofort das Behandlungsteam kontaktieren.",
    source: "EMA: Entyvio® – Produktinformation (aktualisiert 03/2026, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/entyvio", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "ustekinumab", name: "Ustekinumab", examples: "Referenzpräparat: Stelara® Infusion oder Fertigspritze", category: "Darmerkrankungen",
    purpose: "Ustekinumab wird bei mittelschwerer bis schwerer Colitis ulcerosa oder Morbus Crohn eingesetzt, wenn andere Behandlungen nicht ausreichend wirken oder nicht vertragen werden.",
    does: "Es blockiert zwei Entzündungsbotenstoffe und kann die Entzündung im Darm langfristig verringern.",
    doesNot: "Es ist kein Mittel für eine Selbstbehandlung eines akuten Schubs und behandelt keine Infektion.",
    daily: "Die erste Gabe und die weiteren Spritzen erfolgen nach einem festen Facharztplan. Vor und während der Behandlung auf Infektzeichen achten; Impfungen vorher besprechen.",
    sideEffects: "Infekte, Kopfschmerzen, Müdigkeit, Übelkeit und Reaktionen an der Einstichstelle können auftreten.",
    urgent: "Bei Fieber, anhaltendem Husten, Atemnot, starker Schwäche, Schwellung von Gesicht oder Hals oder einer schweren Hautreaktion sofort das Behandlungsteam kontaktieren.",
    source: "EMA: Stelara® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/stelara", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "infliximab", name: "Infliximab", examples: "Referenzpräparat: Remicade® Infusionslösung", category: "Darmerkrankungen",
    purpose: "Infliximab wird bei mittelschwerer bis schwerer Colitis ulcerosa oder Morbus Crohn eingesetzt, wenn andere Behandlungen nicht ausreichend wirken oder nicht vertragen werden.",
    does: "Es blockiert den Entzündungsbotenstoff TNF und kann so Entzündungen im Darm verringern.",
    doesNot: "Es ist kein Mittel für eine Selbstbehandlung eines akuten Schubs und behandelt keine Infektion.",
    daily: "Wird als Infusion nach einem festen Plan durch ein Behandlungsteam gegeben. Infekte, Impfungen und frühere Reaktionen auf Infusionen immer angeben.",
    sideEffects: "Infekte, Kopfschmerzen, Bauchschmerzen, Übelkeit, Müdigkeit und Reaktionen während oder nach der Infusion können auftreten.",
    urgent: "Bei Fieber, anhaltendem Husten, Atemnot, starkem Durchfall, Brustschmerz, Schwellung von Gesicht oder Hals oder einer Infusionsreaktion sofort das Behandlungsteam kontaktieren.",
    source: "EMA: Remicade® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/remicade", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "budesonid-darm", name: "Budesonid (Magen-Darm)", examples: "Referenzpräparat: Budenofalk® Kapseln", category: "Darmerkrankungen",
    purpose: "Budesonid in passenden Magen-Darm-Darreichungsformen wird bei bestimmten entzündlichen Darmerkrankungen eingesetzt, je nach Präparat und Erkrankung auch bei Colitis ulcerosa.",
    does: "Es ist ein Kortisonmittel, das vor allem am Entzündungsort im Darm wirken soll und einen Schub dämpfen kann.",
    doesNot: "Es ist keine Dauerlösung für jede Form von Colitis und darf bei längerer Anwendung nicht selbst abrupt abgesetzt werden.",
    daily: "Darreichungsform und Einnahmezeit genau beachten: Kapseln, Granulat, Rektalschaum und Einläufe sind nicht austauschbar. Bei Fieber oder Infektzeichen die behandelnde Praxis informieren.",
    sideEffects: "Bauchbeschwerden, Kopfschmerzen, Schlaf- und Stimmungsschwankungen sowie bei längerer oder höherer Belastung typische Kortisonwirkungen können auftreten.",
    urgent: "Bei Fieber oder Zeichen einer Infektion, schwarzem Stuhl, starken Bauchschmerzen, Sehstörungen, starker Verwirrtheit oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Budenofalk® Kapseln (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/b/budenofalk-3-mg-magensaftresistente-hartkapseln", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "rizatriptan", name: "Rizatriptan", examples: "Referenzpräparat: Rizatriptan PUREN® 10 mg Schmelztabletten", category: "Migränemittel",
    purpose: "Rizatriptan wird zur Behandlung eines Migräneanfalls mit oder ohne Aura bei Erwachsenen eingesetzt.",
    does: "Es kann einen bereits begonnenen Migräneanfall lindern. Es wirkt auf bestimmte Botenstoffe und Blutgefäße im Kopf.",
    doesNot: "Es verhindert Migräneanfälle nicht und ist nicht für andere, neue oder ungewöhnliche Kopfschmerzen gedacht.",
    daily: "Nur nach dem persönlichen Plan für einen erkannten Migräneanfall anwenden. Nicht eigenständig mit einem anderen Triptan oder Ergotamin-Mittel kombinieren. Bei Herz-Kreislauf-Erkrankungen, Schlaganfall oder unkontrolliertem Bluthochdruck darf es nicht ohne ärztliche Abklärung eingesetzt werden.",
    sideEffects: "Schwindel, Müdigkeit, Benommenheit, Übelkeit sowie Druck- oder Engegefühl im Hals, Brustkorb oder anderen Körperteilen können auftreten.",
    urgent: "Bei Brustschmerz, Atemnot, Ohnmacht, Zeichen eines Schlaganfalls, einer schweren allergischen Reaktion oder einem ungewohnt starken Kopfschmerz sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Rizatriptan PUREN® 10 mg Schmelztabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/r/rizatriptan-puren-10-mg-schmelztabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "eletriptan", name: "Eletriptan", examples: "Referenzpräparat: RELPAX® Filmtabletten", category: "Migränemittel",
    purpose: "Eletriptan wird zur Behandlung eines Migräneanfalls mit oder ohne Aura bei Erwachsenen eingesetzt.",
    does: "Es kann einen bereits begonnenen Migräneanfall lindern. Es gehört zur Gruppe der Triptane.",
    doesNot: "Es beugt Migräneanfällen nicht vor und ist nicht für andere, neue oder ungewöhnliche Kopfschmerzen gedacht.",
    daily: "Nur nach dem persönlichen Plan für einen erkannten Migräneanfall anwenden. Innerhalb von 24 Stunden nicht mit einem anderen Triptan oder Ergotamin-Mittel kombinieren. Bei Herz- oder Gefäßerkrankungen, Schlaganfall oder unkontrolliertem Bluthochdruck darf es nicht ohne ärztliche Abklärung eingesetzt werden.",
    sideEffects: "Schwindel, Müdigkeit, Übelkeit, Herzklopfen sowie Druck- oder Engegefühl im Hals oder Brustkorb können auftreten.",
    urgent: "Bei Brustschmerz, Atemnot, Ohnmacht, Zeichen eines Schlaganfalls, einer schweren allergischen Reaktion oder einem ungewohnt starken Kopfschmerz sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: RELPAX® 20 mg und 40 mg Filmtabletten (Stand 11/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/r/relpaxR-20-mg-und-40-mg-filmtabletten?drucken=an", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "propranolol", name: "Propranolol", examples: "Referenzpräparat: Propranolol PUREN® Filmtabletten", category: "Migränevorbeugung",
    purpose: "Propranolol kann zur Vorbeugung von Migräne eingesetzt werden. Es wird außerdem je nach Situation zum Beispiel bei Bluthochdruck oder bestimmten Herzerkrankungen verwendet.",
    does: "Als Betablocker kann es die Häufigkeit von Migräneanfällen verringern. Es wird regelmäßig nach ärztlichem Plan eingenommen.",
    doesNot: "Es behandelt keinen bereits laufenden Migräneanfall und wirkt nicht wie ein Schmerzmittel.",
    daily: "Puls und Blutdruck können sinken. Nicht plötzlich selbst absetzen. Asthma oder andere Atemwegsprobleme, Diabetes sowie neue Medikamente immer mit Praxis oder Apotheke besprechen.",
    sideEffects: "Müdigkeit, Schwindel, kalte Hände oder Füße, langsamer Puls, Magen-Darm-Beschwerden und Schlafstörungen können auftreten.",
    urgent: "Bei Ohnmacht, sehr langsamem oder unregelmäßigem Puls, Atemnot oder pfeifender Atmung, starker Verwirrtheit oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Propranolol PUREN® Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/propranolol-puren-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "erenumab", name: "Erenumab", examples: "Referenzpräparat: Aimovig® Fertigpen oder Fertigspritze", category: "Migränevorbeugung",
    purpose: "Erenumab wird bei Erwachsenen zur Vorbeugung von Migräne eingesetzt, wenn mindestens vier Migränetage pro Monat auftreten.",
    does: "Es blockiert die Andockstelle eines Migräne-Botenstoffs (CGRP). Dadurch kann es die Zahl der Migränetage verringern.",
    doesNot: "Es ist kein Mittel für einen bereits laufenden Migräneanfall und ersetzt keine Abklärung neuer oder ungewöhnlicher Kopfschmerzen.",
    daily: "Die Spritze wird nach einem festen ärztlichen Plan angewendet. Jede Änderung, eine Schwangerschaft oder neue Beschwerden mit dem Behandlungsteam besprechen.",
    sideEffects: "Reaktionen an der Einstichstelle, Verstopfung, Muskelkrämpfe und Juckreiz können auftreten.",
    urgent: "Bei Schwellung von Gesicht, Mund oder Hals, Atemnot, starker Hautreaktion oder schwerer beziehungsweise anhaltender Verstopfung sofort medizinische Hilfe holen oder das Behandlungsteam kontaktieren.",
    source: "EMA: Aimovig® – Produktinformation (aktualisiert 12/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/aimovig", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "atogepant", name: "Atogepant", examples: "Referenzpräparat: AQUIPTA® Filmtabletten", category: "Migränemittel",
    purpose: "Atogepant wird bei Erwachsenen zur Behandlung eines Migräneanfalls und zur Vorbeugung von Migräne eingesetzt; für die Vorbeugung gelten mindestens vier Migränetage pro Monat.",
    does: "Es hemmt Botenstoffe, die an der Entstehung von Migräne beteiligt sind. Je nach ärztlichem Plan wird es zur Akutbehandlung oder zur Vorbeugung eingesetzt.",
    doesNot: "Es behandelt nicht jede Ursache von Kopfschmerzen. Die Einnahme zur Vorbeugung und zur Akutbehandlung darf nicht selbst kombiniert werden.",
    daily: "Genau den festgelegten Zweck und Einnahmeplan einhalten. Andere Migränemittel, Leber- oder Nierenerkrankungen sowie neue Medikamente mit Praxis oder Apotheke abgleichen.",
    sideEffects: "Übelkeit, Verstopfung, Müdigkeit oder Schläfrigkeit, verminderter Appetit und Gewichtsabnahme können auftreten.",
    urgent: "Bei Schwellung von Gesicht, Mund oder Hals, Atemnot, schwerer Hautreaktion, starker anhaltender Bauchbeschwerde oder deutlicher Gelbfärbung von Haut oder Augen sofort medizinische Hilfe holen.",
    source: "EMA: AQUIPTA® – Produktinformation (aktualisiert 07/2026, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/aquipta", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "mesalazin-rektal", name: "Mesalazin (Rektalschaum, Zäpfchen oder Einlauf)", examples: "Referenzpräparat: Salofalk® Rektalschaum", category: "Darmerkrankungen",
    purpose: "Rektale Mesalazin-Präparate werden bei Colitis ulcerosa eingesetzt, wenn die Entzündung den Enddarm oder den unteren Dickdarm betrifft.",
    does: "Der Wirkstoff wirkt direkt an der Darmschleimhaut und kann dort die Entzündung verringern.",
    doesNot: "Er behandelt nicht jede Ursache von Durchfall oder Bauchschmerzen. Rektalschaum, Zäpfchen und Einlauf sind nicht gleich und nicht selbst austauschbar.",
    daily: "Genau die verordnete Darreichungsform und Anwendungstechnik nutzen. Die Behandlung nicht selbst beenden. Regelmäßige Blut- und Urinkontrollen können je nach Präparat vorgesehen sein.",
    sideEffects: "Bauchbeschwerden, Blähungen, Übelkeit, Kopfschmerzen und örtliche Beschwerden im Enddarm können auftreten. Selten können Nierenprobleme oder schwere Hautreaktionen auftreten.",
    urgent: "Bei Fieber, Atemnot, starker Hautreaktion, Blut im Urin, Flankenschmerzen, deutlich weniger Urin oder starken anhaltenden Bauchschmerzen sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Salofalk® 1 g Rektalschaum (Stand 01/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/salofalkR-1-g-rektalschaum?schrift=0.7", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "tofacitinib", name: "Tofacitinib", examples: "Referenzpräparat: Xeljanz® Tabletten", category: "Darmerkrankungen",
    purpose: "Tofacitinib wird bei Erwachsenen mit mittelschwerer bis schwerer Colitis ulcerosa eingesetzt, wenn andere Behandlungen nicht ausreichend geholfen haben, nicht mehr wirken oder nicht vertragen werden.",
    does: "Es hemmt Enzyme des Immunsystems (JAK). Dadurch kann es die Entzündung im Darm und Beschwerden verringern.",
    doesNot: "Es ist keine Selbstbehandlung für Bauchschmerzen oder Durchfall und behandelt keine Infektion.",
    daily: "Nur nach einem festen Facharztplan einnehmen. Blutbild, Leberwerte und Infektzeichen werden kontrolliert. Impfungen, frühere Thrombosen, Herz-Kreislauf-Erkrankungen und neue Medikamente immer vorher besprechen.",
    sideEffects: "Infekte, Kopfschmerzen, Durchfall, Übelkeit, erhöhte Blutfette und Veränderungen von Blutbild oder Leberwerten können auftreten.",
    urgent: "Bei Fieber, Husten oder Atemnot, Gürtelrose-ähnlichem Ausschlag, einseitig geschwollenem oder schmerzendem Bein, plötzlichem Brustschmerz, Blut im Stuhl oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "EMA: Xeljanz® – Produktinformation und Sicherheitsinformationen (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/xeljanz", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "upadacitinib", name: "Upadacitinib", examples: "Referenzpräparat: Rinvoq® Retardtabletten", category: "Darmerkrankungen",
    purpose: "Upadacitinib wird bei Erwachsenen mit mittelschwerer bis schwerer Colitis ulcerosa oder Morbus Crohn eingesetzt, wenn andere Behandlungen, auch Biologika, nicht ausreichend wirken oder nicht vertragen werden.",
    does: "Es hemmt Enzyme des Immunsystems (JAK) und kann so die Entzündung und Beschwerden im Darm verringern.",
    doesNot: "Es ist keine Selbstbehandlung für einen akuten Infekt, Bauchschmerzen oder Durchfall und darf nicht eigenständig begonnen, unterbrochen oder abgesetzt werden.",
    daily: "Retardtabletten unzerkaut einnehmen. Blutbild, Leberwerte und Infektzeichen müssen kontrolliert werden. Impfungen, Herz-Kreislauf-Risiken, frühere Blutgerinnsel und neue Medikamente immer mit dem Behandlungsteam abgleichen.",
    sideEffects: "Infekte, Übelkeit, Kopfschmerzen, Akne, erhöhte Blutfette sowie Veränderungen von Blutbild oder Leberwerten können auftreten.",
    urgent: "Bei Fieber, Husten oder Atemnot, Gürtelrose-ähnlichem Ausschlag, einseitig geschwollenem oder schmerzendem Bein, plötzlichem Brustschmerz, starken Bauchschmerzen oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "EMA: Rinvoq® – Produktinformation (aktualisiert 07/2026, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/rinvoq", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "ozanimod", name: "Ozanimod", examples: "Referenzpräparat: Zeposia® Hartkapseln", category: "Darmerkrankungen",
    purpose: "Ozanimod wird bei Erwachsenen mit mittelschwerer bis schwerer Colitis ulcerosa eingesetzt, wenn Standardtherapien oder Biologika nicht ausreichend wirken oder nicht angewendet werden können.",
    does: "Es hält bestimmte Abwehrzellen stärker in den Lymphknoten zurück. Dadurch gelangen weniger dieser Zellen in den Darm und die Entzündung kann abnehmen.",
    doesNot: "Es ist keine Selbstbehandlung für einen akuten Infekt oder einen schweren Durchfallschub und darf nicht selbst neu begonnen oder abgesetzt werden.",
    daily: "Die Behandlung beginnt und endet nach einem genauen Facharztplan. Herzrhythmus, Leberwerte, Blutbild, Augen und Infektzeichen können vor oder während der Behandlung kontrolliert werden. Impfungen und neue Medikamente vorher abklären.",
    sideEffects: "Erkältungsähnliche Infekte, erhöhte Leberwerte, Kopfschmerzen, Schwindel, niedriger Puls und erhöhter Blutdruck können auftreten.",
    urgent: "Bei Fieber, Atemnot, sehr langsamem oder unregelmäßigem Herzschlag, Brustschmerz, plötzlich schlechterem Sehen, starker Gelbfärbung von Haut oder Augen oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "EMA: Zeposia® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/zeposia", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "filgotinib", name: "Filgotinib", examples: "Referenzpräparat: Jyseleca® Filmtabletten", category: "Darmerkrankungen",
    purpose: "Filgotinib wird bei Erwachsenen mit mittelschwerer bis schwerer Colitis ulcerosa eingesetzt, wenn herkömmliche oder biologische Behandlungen nicht ausreichend wirken oder nicht vertragen werden.",
    does: "Es hemmt ein Enzym des Immunsystems (JAK) und kann dadurch die Entzündung im Darm verringern.",
    doesNot: "Es ist keine Selbstbehandlung für Bauchschmerzen oder Durchfall und behandelt keine Infektion.",
    daily: "Nur nach festem Facharztplan einnehmen. Vor und während der Behandlung sind Blutkontrollen und die Kontrolle auf Infekte wichtig. Impfungen, frühere Blutgerinnsel, Herz-Kreislauf-Risiken und neue Medikamente immer vorher besprechen.",
    sideEffects: "Infekte, Übelkeit, Kopfschmerzen, Schwindel und Veränderungen von Blutbild oder Leberwerten können auftreten.",
    urgent: "Bei Fieber, Husten oder Atemnot, Gürtelrose-ähnlichem Ausschlag, einseitig geschwollenem oder schmerzendem Bein, plötzlichem Brustschmerz, Blut im Stuhl oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "EMA: Jyseleca® – Produktinformation (aktualisiert 06/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/jyseleca", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "mycophenolat-mofetil", name: "Mycophenolat-Mofetil", examples: "Referenzpräparat: CellCept® Kapseln oder Tabletten", category: "Immunsuppressiva",
    purpose: "Mycophenolat-Mofetil wird zusammen mit anderen Mitteln eingesetzt, um nach einer Organtransplantation eine Abstoßung zu verhindern. Bei anderen schweren entzündlichen Erkrankungen entscheidet ein spezialisiertes Behandlungsteam individuell über den Einsatz.",
    does: "Es bremst Teile des Immunsystems. Dadurch werden bestimmte Abwehrzellen weniger aktiv.",
    doesNot: "Es behandelt keine Infektion und ist kein Mittel für eine Selbstbehandlung von Husten, Fieber oder Atemnot.",
    daily: "Nur nach festem Facharztplan einnehmen. Blutbild, Leber- und Nierenwerte sowie Infektzeichen kontrollieren lassen. Schwangerschaft, Kinderwunsch, Stillzeit, Impfungen und neue Medikamente immer vorher besprechen.",
    sideEffects: "Durchfall, Übelkeit, Erbrechen, Bauchbeschwerden, niedrige Zahl weißer Blutkörperchen und Infekte können auftreten.",
    urgent: "Bei Fieber, Halsschmerzen, Husten oder Atemnot, ungewöhnlichen Blutungen, starken Bauchschmerzen, schwarzem Stuhl, schwerer Hautreaktion oder möglicher Schwangerschaft sofort das Behandlungsteam kontaktieren.",
    source: "EMA: CellCept® – Produktinformation (aktualisiert 05/2026, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/cellcept", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "rituximab", name: "Rituximab", examples: "Referenzpräparat: MabThera® Infusionslösung", category: "Immunsuppressiva",
    purpose: "Rituximab wird je nach Erkrankung bei bestimmten Blutkrebserkrankungen und schweren entzündlichen Autoimmunerkrankungen eingesetzt, zum Beispiel bei bestimmten Gefäßentzündungen.",
    does: "Es bindet an bestimmte B-Abwehrzellen und verringert deren Zahl. Dadurch kann eine fehlgeleitete Immunreaktion gebremst werden.",
    doesNot: "Es ist kein Mittel für eine Selbstbehandlung von Beschwerden und behandelt keine akute Infektion.",
    daily: "Die Gabe erfolgt als Infusion, teils später auch als Spritze, durch ein erfahrenes Behandlungsteam. Vor und während der Behandlung auf Infekte achten; Impfungen und frühere Hepatitis-B-Infektionen unbedingt angeben.",
    sideEffects: "Reaktionen während oder nach der Infusion, Infekte, Fieber, Schüttelfrost, Müdigkeit, Übelkeit und Veränderungen des Blutbilds können auftreten.",
    urgent: "Bei Atemnot, Schwellung von Gesicht oder Hals, starkem Ausschlag, Fieber, anhaltendem Husten, ungewöhnlicher Schwäche oder einer Reaktion während der Infusion sofort das Behandlungsteam informieren.",
    source: "EMA: MabThera® – Produktinformation (aktualisiert 05/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/mabthera", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "cyclophosphamid", name: "Cyclophosphamid", examples: "Referenzpräparat: Cyclophosphamid HEXAL® Infusionslösung", category: "Immunsuppressiva und Krebstherapie",
    purpose: "Cyclophosphamid wird unter enger fachärztlicher Kontrolle vor allem zur Behandlung bestimmter Krebserkrankungen eingesetzt. In besonderen Fällen kann es auch Teil einer spezialisierten Behandlung schwerer Immunerkrankungen sein.",
    does: "Es hemmt die Vermehrung schnell wachsender Zellen und dämpft dadurch auch Teile des Immunsystems.",
    doesNot: "Es ist kein Mittel für eine Selbstbehandlung und behandelt keine Infektion.",
    daily: "Gabe, Begleitmedikamente, Trinkmenge und Kontrollen werden vom Behandlungsteam festgelegt. Blutbild, Nieren- und Leberwerte sowie Urin werden regelmäßig kontrolliert. Schwangerschaft, Kinderwunsch und neue Medikamente immer vorher ansprechen.",
    sideEffects: "Übelkeit, Erbrechen, Müdigkeit, Haarausfall, Infekte, Veränderungen des Blutbilds und Reizungen oder Blutungen der Harnblase können auftreten.",
    urgent: "Bei Fieber, Schüttelfrost, Atemnot, Blut im Urin, Schmerzen beim Wasserlassen, ungewöhnlichen Blutungen, schwerer Schwäche oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Cyclophosphamid HEXAL® Pulver zur Herstellung einer Injektions-/Infusionslösung (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/cyclophosphamid-hexal-500mg-2000mg-trockensubstanz-ohne-loesungsmittel", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "nintedanib", name: "Nintedanib", examples: "Referenzpräparat: Ofev® Weichkapseln", category: "Lungenmedikamente",
    purpose: "Nintedanib wird bei bestimmten fortschreitenden Lungenvernarbungen eingesetzt, zum Beispiel bei idiopathischer Lungenfibrose oder bestimmten anderen vernarbenden Lungenerkrankungen.",
    does: "Es kann die Verschlechterung der Lungenfunktion verlangsamen. Es beseitigt bereits entstandenes Narbengewebe nicht.",
    doesNot: "Es ist kein Mittel zur schnellen Behandlung einer plötzlich auftretenden Atemnot und ersetzt keine Untersuchung bei neuer Verschlechterung.",
    daily: "Nach dem Facharztplan einnehmen und bei Durchfall frühzeitig Praxis oder Apotheke kontaktieren. Leberwerte werden kontrolliert. Schwangerschaft, Blutverdünner und neue Medikamente immer vorher besprechen.",
    sideEffects: "Durchfall, Übelkeit, Erbrechen, Bauchschmerzen, verminderter Appetit, Gewichtsabnahme und erhöhte Leberwerte können auftreten.",
    urgent: "Bei starker oder anhaltender Durchfallerkrankung, Zeichen von Austrocknung, Blutungen, starken Bauchschmerzen, Gelbfärbung von Haut oder Augen, deutlich zunehmender Atemnot oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "EMA: Ofev® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/ofev", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "pirfenidon", name: "Pirfenidon", examples: "Referenzpräparat: Esbriet® Kapseln oder Tabletten", category: "Lungenmedikamente",
    purpose: "Pirfenidon wird bei Erwachsenen mit idiopathischer Lungenfibrose eingesetzt, einer Erkrankung mit fortschreitender Vernarbung der Lunge.",
    does: "Es kann die fortschreitende Vernarbung der Lunge verlangsamen. Es kann bereits entstandenes Narbengewebe nicht rückgängig machen.",
    doesNot: "Es ist kein Mittel für eine plötzlich auftretende Atemnot und ersetzt keine Untersuchung bei neuer Verschlechterung.",
    daily: "Nach dem Facharztplan mit einer Mahlzeit einnehmen. Leberwerte werden kontrolliert. Die Haut konsequent vor Sonne schützen; neue Medikamente, vor allem Fluvoxamin, immer vorher abklären.",
    sideEffects: "Übelkeit, Durchfall, Verdauungsbeschwerden, Müdigkeit, Appetitverlust, Kopfschmerzen, Hautausschlag und sonnenbrandähnliche Hautreaktionen können auftreten.",
    urgent: "Bei Gelbfärbung von Haut oder Augen, dunklem Urin, starken Bauchschmerzen, Schwellung von Gesicht oder Hals, Atemnot, schwerer Hautreaktion oder deutlich zunehmender Atemnot sofort medizinische Hilfe holen.",
    source: "EMA: Esbriet® – Produktinformation (aktualisiert 07/2026, abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/esbriet", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "tamoxifen", name: "Tamoxifen", examples: "Referenzpräparat: Nolvadex® oder Tamoxifen HEXAL® Filmtabletten", category: "Krebstherapie",
    purpose: "Tamoxifen wird bei hormonempfindlichem Brustkrebs eingesetzt, unter anderem nach der Erstbehandlung oder bei Metastasen.",
    does: "Es blockiert die Wirkung von Östrogen an Brustkrebszellen. Dadurch kann das Wachstum hormonempfindlicher Krebszellen gebremst werden.",
    doesNot: "Es ist kein Schmerzmittel und behandelt nicht jede Form von Brustkrebs. Es ersetzt keine Krebsnachsorge oder Untersuchung neuer Beschwerden.",
    daily: "Regelmäßig genau nach dem onkologischen Plan einnehmen und nicht selbst absetzen. Neue Medikamente, Blutungen, Sehstörungen, Operationen und längere Immobilität immer mit dem Behandlungsteam besprechen.",
    sideEffects: "Hitzewallungen, Ausfluss oder Blutungen aus der Scheide, Übelkeit, Müdigkeit, Muskel- oder Gelenkbeschwerden und Wassereinlagerungen können auftreten.",
    urgent: "Bei ungewöhnlicher Blutung aus der Scheide, einseitig geschwollenem oder schmerzendem Bein, plötzlichem Brustschmerz, Atemnot, Sehstörung oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Tamoxifen 20 mg HEXAL® Filmtabletten (Stand 09/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/t/tamoxifen-20mg-hexal-filmtabletten?schrift=0.9", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "anastrozol", name: "Anastrozol", examples: "Referenzpräparat: Anastrozol Aristo® Filmtabletten", category: "Krebstherapie",
    purpose: "Anastrozol wird nach den Wechseljahren bei hormonempfindlichem Brustkrebs eingesetzt.",
    does: "Es hemmt ein Enzym, das Östrogen bildet. Dadurch steht hormonempfindlichen Brustkrebszellen weniger Östrogen als Wachstumsreiz zur Verfügung.",
    doesNot: "Es ist kein Schmerzmittel und behandelt nicht jede Form von Brustkrebs. Es ersetzt keine Krebsnachsorge oder Untersuchung neuer Beschwerden.",
    daily: "Regelmäßig nach dem onkologischen Plan einnehmen und nicht selbst absetzen. Knochenstabilität, Cholesterin und neue Gelenk- oder Knochenschmerzen mit dem Behandlungsteam besprechen.",
    sideEffects: "Hitzewallungen, Gelenk- oder Muskelschmerzen, Müdigkeit, Kopfschmerzen, Übelkeit und eine Abnahme der Knochendichte können auftreten.",
    urgent: "Bei Brustschmerz oder Atemnot, einseitig geschwollenem Bein, plötzlicher starker Schwäche, Zeichen einer schweren allergischen Reaktion oder einem möglichen Knochenbruch sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Anastrozol Aristo® 1 mg Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/anastrozol-aristo-1-mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "letrozol", name: "Letrozol", examples: "Referenzpräparat: Femara® oder Letrozol Aristo® Filmtabletten", category: "Krebstherapie",
    purpose: "Letrozol wird nach den Wechseljahren bei hormonempfindlichem Brustkrebs eingesetzt.",
    does: "Es hemmt ein Enzym, das Östrogen bildet. Dadurch steht hormonempfindlichen Brustkrebszellen weniger Östrogen als Wachstumsreiz zur Verfügung.",
    doesNot: "Es ist kein Schmerzmittel und behandelt nicht jede Form von Brustkrebs. Es ersetzt keine Krebsnachsorge oder Untersuchung neuer Beschwerden.",
    daily: "Regelmäßig nach dem onkologischen Plan einnehmen und nicht selbst absetzen. Knochenstabilität, Cholesterin und neue Gelenk- oder Knochenschmerzen mit dem Behandlungsteam besprechen.",
    sideEffects: "Hitzewallungen, Gelenk- oder Muskelschmerzen, Müdigkeit, Schwindel, Kopfschmerzen und eine Abnahme der Knochendichte können auftreten.",
    urgent: "Bei Brustschmerz oder Atemnot, einseitig geschwollenem Bein, plötzlicher starker Schwäche, Zeichen einer schweren allergischen Reaktion oder einem möglichen Knochenbruch sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Letrozol Aristo® 2,5 mg Filmtabletten (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/l/letrozol-aristo-25-mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "exemestan", name: "Exemestan", examples: "Referenzpräparat: Exemestan – 1 A Pharma® Filmtabletten", category: "Krebstherapie",
    purpose: "Exemestan wird nach den Wechseljahren bei hormonempfindlichem Brustkrebs eingesetzt, häufig nach einer vorherigen hormonellen Behandlung.",
    does: "Es hemmt dauerhaft ein Enzym, das Östrogen bildet. Dadurch steht hormonempfindlichen Brustkrebszellen weniger Östrogen als Wachstumsreiz zur Verfügung.",
    doesNot: "Es ist kein Schmerzmittel und behandelt nicht jede Form von Brustkrebs. Es ersetzt keine Krebsnachsorge oder Untersuchung neuer Beschwerden.",
    daily: "Regelmäßig nach dem onkologischen Plan einnehmen und nicht selbst absetzen. Knochenstabilität und neue Gelenk- oder Knochenschmerzen mit dem Behandlungsteam besprechen.",
    sideEffects: "Hitzewallungen, Müdigkeit, Übelkeit, Kopfschmerzen, Muskel- oder Gelenkschmerzen und eine Abnahme der Knochendichte können auftreten.",
    urgent: "Bei Brustschmerz oder Atemnot, einseitig geschwollenem Bein, Gelbfärbung von Haut oder Augen, Zeichen einer schweren allergischen Reaktion oder einem möglichen Knochenbruch sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Exemestan – 1 A Pharma® 25 mg Filmtabletten (Stand 05/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/e/exemestan-1a-pharma-25mg-filmtabletten", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "fulvestrant", name: "Fulvestrant", examples: "Referenzpräparat: Faslodex® Injektionslösung", category: "Krebstherapie",
    purpose: "Fulvestrant wird bei bestimmten hormonempfindlichen, fortgeschrittenen oder metastasierten Formen von Brustkrebs eingesetzt.",
    does: "Es blockiert Östrogen-Rezeptoren und verringert ihre Zahl. Dadurch kann das Wachstum hormonempfindlicher Krebszellen gebremst werden.",
    doesNot: "Es ist kein Mittel für eine Selbstbehandlung und behandelt nicht jede Form von Brustkrebs.",
    daily: "Die Injektion wird nach einem festen onkologischen Plan durch medizinisches Fachpersonal gegeben. Beschwerden an der Einstichstelle, Blutungen, Leberprobleme und neue Medikamente immer ansprechen.",
    sideEffects: "Schmerzen oder Entzündung an der Einstichstelle, Müdigkeit, Übelkeit, Kopfschmerzen, Hitzewallungen und erhöhte Leberwerte können auftreten.",
    urgent: "Bei Schwellung von Gesicht oder Hals, Atemnot, Fieber, starker oder anhaltender Blutung, Gelbfärbung von Haut oder Augen, schwerer Schwäche oder einer starken Reaktion nach der Injektion sofort medizinische Hilfe holen.",
    source: "EMA: Faslodex® – Produktinformation (abgerufen am 22.07.2026)", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/faslodex", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "enoxaparin", name: "Enoxaparin", examples: "Referenzpräparat: Clexane® Fertigspritzen", category: "Thrombosespritzen",
    purpose: "Enoxaparin wird eingesetzt, um Blutgerinnsel zu verhindern oder zu behandeln, zum Beispiel nach Operationen, bei eingeschränkter Beweglichkeit oder bestimmten Herz- und Gefäßerkrankungen.",
    does: "Es hemmt Teile der Blutgerinnung. Dadurch können Blutgerinnsel weniger leicht entstehen oder größer werden.",
    doesNot: "Es ist kein Schmerzmittel und löst ein bereits bestehendes Blutgerinnsel nicht selbst auf. Es schützt nicht sicher vor jeder Thrombose oder Embolie.",
    daily: "Stärke und Zweck der Fertigspritze sind individuell und nicht austauschbar. Nur nach dem verordneten Plan spritzen; keine Dosis selbst verändern. Andere Blutverdünner, Schmerzmittel wie Ibuprofen oder ASS und geplante Eingriffe immer vorher abklären.",
    sideEffects: "Blutergüsse oder Schmerzen an der Einstichstelle, Blutungen, niedrige Zahl der Blutplättchen und erhöhte Leberwerte können auftreten.",
    urgent: "Bei nicht stillbarer Blutung, Blut im Urin, schwarzem Stuhl, Bluterbrechen, plötzlich starken Kopfschmerzen, Ohnmacht, Atemnot, Brustschmerz oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Clexane® 6.000 I.E. (60 mg)/0,6 ml Injektionslösung (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/clexaneR-6000-i-e-60-mg-pro-06-ml-injektionsloesung/?drucken=an", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "tinzaparin", name: "Tinzaparin", examples: "Referenzpräparat: innohep® Fertigspritzen", category: "Thrombosespritzen",
    purpose: "Tinzaparin wird eingesetzt, um Blutgerinnsel zu verhindern oder zu behandeln, zum Beispiel nach Operationen oder bei bestimmten Erkrankungen mit erhöhtem Thromboserisiko.",
    does: "Es hemmt Teile der Blutgerinnung. Dadurch können Blutgerinnsel weniger leicht entstehen oder größer werden.",
    doesNot: "Es ist kein Schmerzmittel und löst ein bereits bestehendes Blutgerinnsel nicht selbst auf.",
    daily: "Stärke und Zweck der Fertigspritze sind individuell und nicht austauschbar. Nur nach dem verordneten Plan spritzen; keine Dosis selbst verändern. Andere Blutverdünner, Schmerzmittel wie Ibuprofen oder ASS und geplante Eingriffe immer vorher abklären.",
    sideEffects: "Blutergüsse oder Schmerzen an der Einstichstelle, Blutungen, niedrige Zahl der Blutplättchen und erhöhte Leberwerte können auftreten.",
    urgent: "Bei nicht stillbarer Blutung, Blut im Urin, schwarzem Stuhl, Bluterbrechen, plötzlich starken Kopfschmerzen, Ohnmacht, Atemnot, Brustschmerz oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: innohep® 4.500 Anti-Xa I.E. Injektionslösung (Stand 09/2025, abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/i/innohep-4500-anti-xa-ie-injektionsloesung?schrift=0.9", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "dalteparin", name: "Dalteparin", examples: "Referenzpräparat: Fragmin® P Fertigspritzen", category: "Thrombosespritzen",
    purpose: "Dalteparin wird eingesetzt, um Blutgerinnsel zu verhindern oder zu behandeln, zum Beispiel nach Operationen oder bei eingeschränkter Beweglichkeit.",
    does: "Es hemmt Teile der Blutgerinnung. Dadurch können Blutgerinnsel weniger leicht entstehen oder größer werden.",
    doesNot: "Es ist kein Schmerzmittel und löst ein bereits bestehendes Blutgerinnsel nicht selbst auf.",
    daily: "Stärke und Zweck der Fertigspritze sind individuell und nicht austauschbar. Nur nach dem verordneten Plan spritzen; keine Dosis selbst verändern. Andere Blutverdünner, Schmerzmittel wie Ibuprofen oder ASS und geplante Eingriffe immer vorher abklären.",
    sideEffects: "Blutergüsse oder Schmerzen an der Einstichstelle, Blutungen, niedrige Zahl der Blutplättchen und erhöhte Leberwerte können auftreten.",
    urgent: "Bei nicht stillbarer Blutung, Blut im Urin, schwarzem Stuhl, Bluterbrechen, plötzlich starken Kopfschmerzen, Ohnmacht, Atemnot, Brustschmerz oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Fragmin® P 2.500 I.E. Injektionslösung (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/fragminR-p-2500-ie-injektionsloesung", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "nadroparin", name: "Nadroparin", examples: "Referenzpräparat: Fraxiparine® Fertigspritzen", category: "Thrombosespritzen",
    purpose: "Nadroparin wird eingesetzt, um Blutgerinnsel zu verhindern oder zu behandeln, zum Beispiel nach Operationen, bei eingeschränkter Beweglichkeit oder einer tiefen Venenthrombose.",
    does: "Es hemmt Teile der Blutgerinnung. Dadurch können Blutgerinnsel weniger leicht entstehen oder größer werden.",
    doesNot: "Es ist kein Schmerzmittel und löst ein bereits bestehendes Blutgerinnsel nicht selbst auf.",
    daily: "Stärke und Zweck der Fertigspritze sind individuell und nicht austauschbar. Nur nach dem verordneten Plan spritzen; keine Dosis selbst verändern. Andere Blutverdünner, Schmerzmittel wie Ibuprofen oder ASS und geplante Eingriffe immer vorher abklären.",
    sideEffects: "Blutergüsse oder Schmerzen an der Einstichstelle, Blutungen, niedrige Zahl der Blutplättchen und selten schmerzhafte Hautveränderungen an der Einstichstelle können auftreten.",
    urgent: "Bei nicht stillbarer Blutung, Blut im Urin, schwarzem Stuhl, Bluterbrechen, schmerzhaften dunklen Hautveränderungen an der Einstichstelle, plötzlich starken Kopfschmerzen, Atemnot, Brustschmerz oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Fraxiparine® 0,4 Injektionslösung (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/f/fraxiparineR-04-3800-ie-anti-xa--04-ml-injektionsloesung", reviewStatus: "Quellenbasierter Entwurf"
  },
  {
    id: "fondaparinux", name: "Fondaparinux", examples: "Referenzpräparat: Arixtra® Fertigspritzen", category: "Thrombosespritzen",
    purpose: "Fondaparinux wird eingesetzt, um Blutgerinnsel zu verhindern oder zu behandeln, zum Beispiel nach größeren orthopädischen oder Bauchoperationen oder bei einer tiefen Venenthrombose.",
    does: "Es hemmt gezielt einen Teil der Blutgerinnung. Dadurch können Blutgerinnsel weniger leicht entstehen oder größer werden.",
    doesNot: "Es ist kein Schmerzmittel und löst ein bereits bestehendes Blutgerinnsel nicht selbst auf.",
    daily: "Stärke und Zweck der Fertigspritze sind individuell und nicht austauschbar. Nur nach dem verordneten Plan spritzen; keine Dosis selbst verändern. Andere Blutverdünner, Schmerzmittel wie Ibuprofen oder ASS und geplante Eingriffe immer vorher abklären.",
    sideEffects: "Blutungen, Blutergüsse oder Schmerzen an der Einstichstelle, Blutarmut, Übelkeit und erhöhte Leberwerte können auftreten.",
    urgent: "Bei nicht stillbarer Blutung, Blut im Urin, schwarzem Stuhl, Bluterbrechen, plötzlich starken Kopfschmerzen, Ohnmacht, Atemnot, Brustschmerz oder einer schweren allergischen Reaktion sofort medizinische Hilfe holen.",
    source: "Gebrauchsinformation: Arixtra® 7,5 mg/0,6 ml Injektionslösung (abgerufen am 22.07.2026)", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/a/arixtra-75-mg06-ml-injektionsloesung-fertigspritze?schrift=0.9", reviewStatus: "Quellenbasierter Entwurf"
  }
];

// Priorisierte Wirkstoff-Kandidaten für Stufe 1. Sie sind bewusst noch keine
// medizinischen Kurzfassungen und werden erst nach Quellen- und Fachprüfung veröffentlicht.
const pilotCandidates = [
  ["Enalapril", "Blutdrucksenker"], ["Lisinopril", "Blutdrucksenker"], ["Perindopril", "Blutdrucksenker"],
  ["Valsartan", "Blutdrucksenker"], ["Losartan", "Blutdrucksenker"], ["Telmisartan", "Blutdrucksenker"],
  ["Lercanidipin", "Blutdrucksenker"], ["Nifedipin", "Blutdrucksenker"], ["Bisoprolol", "Blutdrucksenker"],
  ["Metoprolol", "Blutdrucksenker"], ["Nebivolol", "Blutdrucksenker"], ["Hydrochlorothiazid", "Wassertablette"],
  ["Torasemid", "Wassertablette"], ["Furosemid", "Wassertablette"], ["Spironolacton", "Wassertablette"],
  ["Eplerenon", "Wassertablette"], ["Atorvastatin", "Cholesterinsenker"], ["Rosuvastatin", "Cholesterinsenker"],
  ["Simvastatin", "Cholesterinsenker"], ["Acetylsalicylsäure (ASS)", "Blutplättchenhemmer"], ["Clopidogrel", "Blutplättchenhemmer"],
  ["Apixaban", "Gerinnungshemmer"], ["Rivaroxaban", "Gerinnungshemmer"], ["Edoxaban", "Gerinnungshemmer"],
  ["Dabigatran", "Gerinnungshemmer"], ["Phenprocoumon", "Gerinnungshemmer"], ["Metformin", "Diabetesmittel"],
  ["Empagliflozin", "Diabetesmittel"], ["Dapagliflozin", "Diabetesmittel"], ["Sitagliptin", "Diabetesmittel"],
  ["Semaglutid", "Diabetesmittel"], ["Insulin glargin", "Diabetesmittel"], ["Paracetamol", "Schmerzmittel"],
  ["Ibuprofen", "Schmerzmittel"], ["Diclofenac", "Schmerzmittel"], ["Tramadol", "Schmerzmittel"],
  ["Oxycodon", "Schmerzmittel"], ["Fentanyl", "Schmerzmittel"], ["Buprenorphin", "Schmerzmittel"],
  ["Tilidin / Naloxon", "Schmerzmittel"], ["Pregabalin", "Nervenschmerzmittel"], ["Gabapentin", "Nervenschmerzmittel"],
  ["Duloxetin", "Antidepressivum / Nervenschmerzmittel"], ["Amitriptylin", "Antidepressivum / Nervenschmerzmittel"],
  ["Sertralin", "Antidepressivum"], ["Citalopram", "Antidepressivum"], ["Escitalopram", "Antidepressivum"],
  ["Mirtazapin", "Antidepressivum"], ["Lorazepam", "Beruhigungsmittel"], ["Zolpidem", "Schlafmittel"],
  ["Omeprazol", "Magensäurehemmer"], ["Esomeprazol", "Magensäurehemmer"], ["Lactulose", "Abführmittel"],
  ["Bisacodyl", "Abführmittel"], ["Natriumpicosulfat", "Abführmittel"], ["Ondansetron", "Mittel gegen Übelkeit"],
  ["Metoclopramid", "Mittel gegen Übelkeit"], ["Loperamid", "Mittel gegen Durchfall"], ["Salbutamol", "Atemwegsmedikament"],
  ["Budesonid", "Atemwegsmedikament"], ["Formoterol", "Atemwegsmedikament"], ["Tiotropium", "Atemwegsmedikament"],
  ["Ipratropium", "Atemwegsmedikament"], ["Beclometason", "Atemwegsmedikament"], ["Degarelix", "Krebstherapie"],
  ["Relugolix", "Krebstherapie"], ["Abirateron", "Krebstherapie"], ["Enzalutamid", "Krebstherapie"],
  ["Apalutamid", "Krebstherapie"], ["Darolutamid", "Krebstherapie"], ["Denosumab", "Knochen-Schutz / Krebstherapie"],
  ["Zoledronsäure", "Knochen-Schutz / Krebstherapie"], ["Prednisolon", "Kortison"], ["Dexamethason", "Kortison"],
  ["Levothyroxin", "Schilddrüsenhormon"], ["Allopurinol", "Gichtmittel"], ["Colchicin", "Gichtmittel"],
  ["Tamsulosin", "Urologisches Medikament"], ["Finasterid", "Urologisches Medikament"], ["Solifenacin", "Urologisches Medikament"],
  ["Mirabegron", "Urologisches Medikament"], ["Colecalciferol (Vitamin D)", "Vitamin / Knochen"],
  ["Alendronsäure", "Knochen-Schutz"], ["Eisen(II)-sulfat", "Eisenpräparat"], ["Folsäure", "Vitamin"],
  ["Cefuroxim", "Antibiotikum"], ["Amoxicillin", "Antibiotikum"], ["Doxycyclin", "Antibiotikum"],
  ["Nitrofurantoin", "Antibiotikum"], ["Aciclovir", "Virusmittel"], ["Cetirizin", "Allergiemittel"],
  ["Salmeterol", "Atemwegsmedikament"], ["Montelukast", "Atemwegsmedikament"],
  ["Baclofen", "Muskelentspannendes Mittel"], ["Levetiracetam", "Antiepileptikum"], ["Lamotrigin", "Antiepileptikum"],
  ["Donepezil", "Demenzmedikament"], ["Memantin", "Demenzmedikament"], ["Risperidon", "Antipsychotikum"]
];

// Kuratierte Handelsnamen für die Suche. Sie verweisen nur auf den Wirkstoff;
// Stärke, Darreichungsform und mögliche Kombinationen müssen an der Packung
// abgeglichen werden.
const commonBrandAliases = {
  // Handelsnamen dienen ausschließlich als Suchhilfe. Immer Wirkstoff, Stärke,
  // Darreichungsform und mögliche Kombinationspräparate auf der Packung abgleichen.
  metamizol: ["Novalgin", "Novaminsulfon", "Berlosin"], ramipril: ["Delix", "Triatec", "Vesdil"], candesartan: ["Atacand", "Blopress"], amlodipin: ["Norvasc"], perindopril: ["Coversum", "Prestarium"], nifedipin: ["Adalat"],
  atorvastatin: ["Sortis", "Lipitor"], rosuvastatin: ["Crestor"], simvastatin: ["Zocor"],
  "sacubitril-valsartan": ["Entresto"], ivabradin: ["Corlentor"], ticagrelor: ["Brilique"], prasugrel: ["Efient"], evolocumab: ["Repatha"], alirocumab: ["Praluent"], inclisiran: ["Leqvio"], vericiguat: ["Verquvo"], finerenon: ["Kerendia"], bempedoinsaeure: ["Nilemdo"], "icosapent-ethyl": ["Vazkepa"],
  apixaban: ["Eliquis"], rivaroxaban: ["Xarelto"], edoxaban: ["Lixiana"], dabigatran: ["Pradaxa"], phenprocoumon: ["Marcumar", "Falithrom"],
  metformin: ["Glucophage"], empagliflozin: ["Jardiance"], dapagliflozin: ["Forxiga"], sitagliptin: ["Januvia", "Xelevia"], semaglutid: ["Ozempic", "Rybelsus"], linagliptin: ["Trajenta"], pioglitazon: ["Actos"], acarbose: ["Glucobay"], "insulin-glargin": ["Lantus", "Abasaglar", "Toujeo"], "insulin-degludec": ["Tresiba"], "insulin-aspart": ["NovoRapid"], "insulin-lispro": ["Humalog"], dulaglutid: ["Trulicity"], tirzepatid: ["Mounjaro"], "insulin-glargin-lixisenatid": ["Suliqua"],
  "acetylsalicylsaeure-ass": ["Aspirin", "Aspirin protect", "Godamed"], clopidogrel: ["Plavix", "Iscover"], paracetamol: ["ben-u-ron", "ben-u-ron Zäpfchen", "Paracetamol BC", "Captin", "Perfalgan"],
  ibuprofen: ["Nurofen", "Ibuhexal", "Dolormin", "Ibuflam Kindersaft", "Ibuprofen Pädia"], diclofenac: ["Voltaren", "Diclac"], tramadol: ["Tramal", "Tramundin"], oxycodon: ["Oxygesic", "Oxycontin"], fentanyl: ["Durogesic", "Matrifen"], buprenorphin: ["Norspan", "Transtec"], "tilidin-naloxon": ["Valoron N", "Tilidin comp"], pregabalin: ["Lyrica"], gabapentin: ["Neurontin"],
  pantoprazol: ["Pantozol", "Pantozol Control"], esomeprazol: ["Nexium"], omeprazol: ["Antra", "Antra MUPS", "Omep"], macrogol: ["Movicol", "Laxido", "Laxbene", "Laxbene junior"], lactulose: ["Bifiteral"], bisacodyl: ["Dulcolax"], natriumpicosulfat: ["Dulcolax NP", "Laxoberal"], loperamid: ["Imodium"], metoclopramid: ["Paspertin", "MCP"], ondansetron: ["Zofran"],
  salbutamol: ["Sultanol", "Sultanol Dosieraerosol", "Ventolin"], budesonid: ["Pulmicort"], tiotropium: ["Spiriva"], ipratropium: ["Atrovent"], formoterol: ["Foradil", "Formatris"], beclometason: ["Junik"], salmeterol: ["Serevent"],
  "fluticasonfuroat-umeclidinium-vilanterol": ["Trelegy Ellipta"], "budesonid-formoterol": ["Symbicort"], "beclometason-formoterol": ["Foster"], "fluticason-salmeterol": ["Viani", "Seretide"], roflumilast: ["Daxas"], mometason: ["Nasonex", "Mometason Heumann"],
  loratadin: ["Lorano", "Clarityn", "Lorano akut"], cetirizin: ["Zyrtec", "Cetirizin Aristo Allergiesaft"], montelukast: ["Singulair"], tamsulosin: ["Omnic", "Alna"], finasterid: ["Proscar"], solifenacin: ["Vesikur"], mirabegron: ["Betmiga"], colecalciferol: ["Dekristol", "Vigantol"], alendronsaeure: ["Fosamax"], "eisenii-sulfat": ["Tardyferon", "Ferro sanol duodenal"], folsaeure: ["Folsan"], levothyroxin: ["Euthyrox", "L-Thyroxin", "Henning"], allopurinol: ["Zyloric"],
  desloratadin: ["Aerius", "Aerius Lösung", "Desloratadin Heumann", "Desloratadin Aristo Lösung"], fexofenadin: ["Telfast"], azithromycin: ["Zithromax"], clarithromycin: ["Klacid"], cotrimoxazol: ["Cotrim forte-ratiopharm"], fosfomycin: ["Monuril", "Fosfomycin Aristo"], ciprofloxacin: ["Ciprobay"], valaciclovir: ["Valtrex"], fluconazol: ["Diflucan"], terbinafin: ["Lamisil"], nystatin: ["Nystatin Lederle"], mesalazin: ["Salofalk", "Pentasa"], pankreatin: ["Kreon", "Pangrol"], ursodeoxycholsaeure: ["Ursofalk"],
  dimenhydrinat: ["Vomex", "VomiSaft", "Vomex A"], "xylometazolin-dexpanthenol": ["Septanasal für Kinder", "Otriven Protect"],
  azathioprin: ["Azathioprin HEXAL", "Azafalk"], vedolizumab: ["Entyvio"], ustekinumab: ["Stelara"], infliximab: ["Remicade", "Remsima"], "budesonid-darm": ["Budenofalk", "Entocort"],
  rizatriptan: ["Maxalt", "Rizatriptan PUREN"], eletriptan: ["Relpax"], propranolol: ["Dociton", "Obsidan", "Propranolol PUREN"], erenumab: ["Aimovig"], atogepant: ["Aquipta"],
  "mesalazin-rektal": ["Salofalk Rektalschaum", "Salofalk Klysmen", "Salofalk Zäpfchen"], tofacitinib: ["Xeljanz"], upadacitinib: ["Rinvoq"], ozanimod: ["Zeposia"], filgotinib: ["Jyseleca"],
  "mycophenolat-mofetil": ["CellCept", "Mycophenolat mofetil Teva"], rituximab: ["MabThera", "Rixathon", "Truxima"], cyclophosphamid: ["Endoxan", "Cyclophosphamid HEXAL"], nintedanib: ["Ofev"], pirfenidon: ["Esbriet"],
  tamoxifen: ["Nolvadex", "Tamoxifen HEXAL"], anastrozol: ["Arimidex", "Anastrozol Aristo"], letrozol: ["Femara", "Letrozol Aristo", "Letroblock"], exemestan: ["Aromasin", "Exemestan – 1 A Pharma"], fulvestrant: ["Faslodex", "Fulvestrant Mylan"],
  enoxaparin: ["Clexane", "Enoxaparin Inhixa"], tinzaparin: ["innohep"], dalteparin: ["Fragmin"], nadroparin: ["Fraxiparine"], fondaparinux: ["Arixtra"],
  abirateron: ["Zytiga"], apalutamid: ["Erleada"], enzalutamid: ["Xtandi"], darolutamid: ["Nubeqa"], degarelix: ["Firmagon"], relugolix: ["Orgovyx"], denosumab: ["Prolia", "Xgeva"], zoledronsaeure: ["Zometa", "Aclasta"],
  olaparib: ["Lynparza"], talazoparib: ["Talzenna"], docetaxel: ["Taxotere"], cabazitaxel: ["Jevtana"], "radium-223-dichlorid": ["Xofigo"], "lutetium-177-vipivotid-tetraxetan": ["Pluvicto"], pembrolizumab: ["Keytruda"], nivolumab: ["Opdivo"], abemaciclib: ["Verzenios"], palbociclib: ["Ibrance"], ribociclib: ["Kisqali"], goserelin: ["Zoladex"], triptorelin: ["Pamorelin", "Decapeptyl"], bicalutamid: ["Casodex"],
  hydrocortison: ["Plenadren", "Hydrocortison Jenapharm"], methylprednisolon: ["Urbason", "Medrol"], filgrastim: ["Neupogen", "Zarzio"], pegfilgrastim: ["Neulasta", "Ziextenzo"], "epoetin-alfa": ["Eprex"], "darbepoetin-alfa": ["Aranesp"],
  leuprorelin: ["Eligard", "Enantone", "Trenantone", "Leuprolin-ratiopharm"], hydrochlorothiazid: ["Esidrex"], bisoprolol: ["Concor", "Concor COR"], furosemid: ["Lasix"], spironolacton: ["Aldactone", "Verospiron"], enalapril: ["Xanef"], valsartan: ["Diovan"], metoprolol: ["Beloc", "Beloc ZOK"], torasemid: ["Torem"], lisinopril: ["Acerbon"], losartan: ["Lorzaar"], telmisartan: ["Micardis", "Kinzalmono"], lercanidipin: ["Carmen"], nebivolol: ["Nebilet"], eplerenon: ["Inspra"],
  sertralin: ["Zoloft", "Gladem"], duloxetin: ["Cymbalta", "Ariclaim"], amitriptylin: ["Saroten"], citalopram: ["Cipramil"], escitalopram: ["Cipralex"], mirtazapin: ["Remeron"], lorazepam: ["Tavor", "Tavor Expidet"], zolpidem: ["Stilnox", "Bikalm"],
  venlafaxin: ["Trevilor", "Efexor"], fluoxetin: ["Fluctin"], bupropion: ["Elontril", "Zyban"], quetiapin: ["Seroquel"], olanzapin: ["Zyprexa"], aripiprazol: ["Abilify"], haloperidol: ["Haldol"], promethazin: ["Atosil"], melatonin: ["Circadin"], zopiclon: ["Ximovan"],
  amoxicillin: ["Amoxypen"], cefuroxim: ["Elobact"], doxycyclin: ["Vibramycin"], aciclovir: ["Zovirax"], nitrofurantoin: ["Furadantin", "Nifurantin"], levetiracetam: ["Keppra"], lamotrigin: ["Lamictal"], baclofen: ["Lioresal"], colchicin: ["Colchysat"],
  carbamazepin: ["Tegretal"], valproinsaeure: ["Ergenyl", "Orfiril"], topiramat: ["Topamax"], lacosamid: ["Vimpat"], pramipexol: ["Sifrol"], ropinirol: ["Requip"], "levodopa-benserazid": ["Madopar"], "levodopa-carbidopa": ["Nacom", "Sinemet"], sumatriptan: ["Imigran"], tapentadol: ["Palexia"],
  prednisolon: ["Decortin"], dexamethason: ["Fortecortin"], donepezil: ["Aricept"], memantin: ["Ebixa", "Axura"], risperidon: ["Risperdal"],
  methotrexat: ["Metex", "Lantarel"], adalimumab: ["Humira", "Amgevita", "Hyrimoz"], etanercept: ["Enbrel", "Benepali"], tocilizumab: ["RoActemra"], secukinumab: ["Cosentyx"], hydroxychloroquin: ["Quensyl"], leflunomid: ["Arava"], sulfasalazin: ["Azulfidine RA"], febuxostat: ["Adenuric"], risedronat: ["Actonel"], ibandronsaeure: ["Bonviva"],
  latanoprost: ["Xalatan"], "timolol-augen": ["Tim-Ophtal"], "dorzolamid-timolol": ["Cosopt"], brimonidin: ["Alphagan"], oxybutynin: ["Dridase"], fesoterodin: ["Toviaz"], dutasterid: ["Avodart"], sildenafil: ["Viagra"], tadalafil: ["Cialis"]
};

const medications = [
  ...reviewedDrafts.map((medication) => ({ ...medication, aliases: commonBrandAliases[medication.id] ?? [], reviewStatus: (medication.reviewStatus ?? "Entwurf – fachlich zu prüfen").replace(" – Prüfung durch Sonja ausstehend", "") })),
  ...pilotCandidates.filter(([name]) => !reviewedDrafts.some((medication) => medication.name === name)).map(([name, category]) => ({
    id: name.toLocaleLowerCase("de-DE").replaceAll(" ", "-").replaceAll("/", "-"),
    name,
    examples: "Priorisierter Wirkstoff-Kandidat für Stufe 1",
    category,
    aliases: [],
    reviewStatus: "Best Guess – Quellencheck offen"
  }))
];

const sourceRegistry = {
  "Abirateron": {
    label: "EMA: Abiraterone Accord – Produktinformation",
    url: "https://www.ema.europa.eu/en/medicines/human/EPAR/abiraterone-accord",
    note: "Die EMA beschreibt Abirateron als Krebstherapie bei metastasiertem Prostatakrebs; die konkrete deutsche Packungsbeilage und Kombinationstherapie müssen trotzdem geprüft werden."
  },
  "Enzalutamid": {
    label: "EMA: Xtandi – Produktinformation",
    url: "https://www.ema.europa.eu/en/medicines/human/EPAR/xtandi",
    note: "Die EMA beschreibt Enzalutamid als hormonwirksame Krebstherapie bei Prostatakrebs; die konkrete deutsche Packungsbeilage und Kombinationstherapie müssen trotzdem geprüft werden."
  }
};

const defaultSource = {
  label: "BfArM: Arzneimittelinformationen / PharmNet.Bund",
  url: "https://www.bfarm.de/DE/Arzneimittel/Arzneimittelinformationen/_artikel.html",
  note: "PharmNet.Bund stellt für in Deutschland zugelassene Arzneimittel amtliche Daten und vielfach Gebrauchs- bzw. Fachinformationen bereit. Der konkrete Wirkstoff, das Präparat, die Stärke und die Darreichungsform müssen dort noch abgeglichen werden."
};

// Stufe 1: Präparate sind von Wirkstoffkarten getrennt. Das verhindert, dass
// Handelsname, Stärke und Darreichungsform unbemerkt miteinander vermischt werden.
// "Produktinformation abgeglichen" bedeutet nur: Handelsname und Wirkstoff wurden
// gegen die verlinkte Produktinformation geprüft; die Packung bleibt maßgeblich.
const verifiedPreparations = [
  { tradeName: "VomiSaft", medicationId: "dimenhydrinat", strength: "24 mg Dimenhydrinat pro Einzeldosisflasche", dosageForm: "Lösung zum Einnehmen", audience: "Kindervariante", safetyNote: "Laut Gebrauchsinformation für Kinder von 2 bis 12 Jahren. Alter, Körpergewicht und konkrete Packung vor jeder Anwendung prüfen; Überdosierung kann insbesondere bei kleinen Kindern lebensbedrohlich sein. Die App berechnet keine Dosis.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "PatientenInfo-Service: VomiSaft 24 mg", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/uv/vomisaftR-24-mg-loesung-zum-einnehmen" },
  { tradeName: "Septanasal für Kinder", medicationId: "xylometazolin-dexpanthenol", strength: "0,5 mg/ml Xylometazolin + 50 mg/ml Dexpanthenol", dosageForm: "Nasenspray", audience: "Kindervariante", safetyNote: "Laut Gebrauchsinformation für Kinder von 2 bis 6 Jahren. Nicht länger oder häufiger als vorgesehen anwenden; bei fehlender Besserung nach 3 Tagen ärztlich abklären. Die App berechnet keine Dosis.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "PatientenInfo-Service: Septanasal für Kinder", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/septanasalR-fuer-kinder-05-mgml--50-mgml-nasenspray-loesung" },
  { tradeName: "Cetirizin Aristo Allergiesaft", medicationId: "cetirizin", strength: "1 mg/ml Cetirizin", dosageForm: "Lösung zum Einnehmen", audience: "Kindervariante", safetyNote: "Laut Gebrauchsinformation für Kinder ab 2 Jahren und Erwachsene. Alter, Nierenfunktion, konkrete Packung und der ärztliche bzw. apothekerliche Plan sind maßgeblich; die App berechnet keine Dosis.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "PatientenInfo-Service: Cetirizin Aristo Allergiesaft", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/c/cetirizin-aristo-allergiesaft-1-mgml-loesung-zum-einnehmen" },
  { tradeName: "Desloratadin Aristo Lösung", medicationId: "desloratadin", strength: "0,5 mg/ml Desloratadin", dosageForm: "Lösung zum Einnehmen", audience: "Kindervariante", safetyNote: "Die passende Menge hängt von Alter und konkreter Packung ab. Messhilfe und Packungsbeilage verwenden; die App berechnet keine Dosis. Bei Kindern unter 1 Jahr ist diese Referenzvariante nicht vorgesehen.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "PatientenInfo-Service: Desloratadin Aristo Lösung", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/d/desloratadin-aristo-05-mgml-loesung-zum-einnehmen" },
  { tradeName: "Paracetamol BC 125 mg Zäpfchen", medicationId: "paracetamol", strength: "125 mg Paracetamol", dosageForm: "Zäpfchen", audience: "Kindervariante", safetyNote: "Laut Gebrauchsinformation für Kinder von 6 Monaten bis 2 Jahren (7–12 kg). Die konkrete Packung, das Körpergewicht und der ärztliche bzw. apothekerliche Plan sind maßgeblich; die App berechnet keine Dosis.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "PatientenInfo-Service: Paracetamol BC 125 mg Zäpfchen", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/pq/paracetamol-bc-125-mg-zaepfchen" },
  { tradeName: "Ibuflam Kindersaft 20 mg/ml", medicationId: "ibuprofen", strength: "20 mg/ml Ibuprofen", dosageForm: "Saft zum Einnehmen", audience: "Kindervariante", safetyNote: "Konzentration, Körpergewicht, Alter und die konkrete Packung sind vor jeder Anwendung zu prüfen. Bei Erbrechen, Durchfall oder geringer Trinkmenge ist wegen des Risikos für Nierenprobleme ärztlicher oder apothekerlicher Rat wichtig; die App berechnet keine Dosis.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "PatientenInfo-Service: Ibuflam Kindersaft 20 mg/ml", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/i/ibuflam-kindersaft-20mgml-gegen-fieber-und-schmerzen" },
  { tradeName: "Ibuprofen Pädia 75 mg Zäpfchen", medicationId: "ibuprofen", strength: "75 mg Ibuprofen", dosageForm: "Zäpfchen", audience: "Kindervariante", safetyNote: "Laut Gebrauchsinformation für Kinder ab 8 Monaten. Nicht bei schwerer Austrocknung anwenden; Alter, Körpergewicht und konkrete Packung vor jeder Anwendung prüfen. Die App berechnet keine Dosis.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "PatientenInfo-Service: Ibuprofen Pädia 75 mg Zäpfchen", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/i/ibuprofen-paedia-75-mg-zaepfchen" },
  { tradeName: "Sultanol Dosier-Aerosol", medicationId: "salbutamol", strength: "100 Mikrogramm pro Sprühstoß", dosageForm: "Dosieraerosol zur Inhalation", audience: "Kinder nur unter Aufsicht und nach ärztlicher Vorschrift", safetyNote: "Die Inhalationstechnik muss gezeigt und regelmäßig geprüft werden. Ein steigender Bedarf oder zunehmende Atemnot sind ein Warnzeichen; nicht selbst die Anwendung erhöhen.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "PatientenInfo-Service: Sultanol Dosier-Aerosol", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/s/sultanol-dosier-aerosol-100-mikrogrammdosis-druckgasinhalation-suspension" },
  { tradeName: "Laxbene", medicationId: "macrogol", strength: "Stärke auf der Packung prüfen", dosageForm: "Kinder- oder Erwachsenenvariante", audience: "Altersbereich und Darreichungsform prüfen", safetyNote: "Laxbene ist Macrogol 4000. Erst die konkrete Packung zuordnen; die App berechnet keine Dosis.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "Laxbene: Gebrauchsinformationen", sourceUrl: "https://laxbene.de/service/downloads" },
  { tradeName: "Laxbene junior 4 g", medicationId: "macrogol", strength: "4 g Macrogol 4000", dosageForm: "Pulver zur Herstellung einer Lösung zum Einnehmen", audience: "Kindervariante", safetyNote: "Laut Gebrauchsinformation für Kinder von 6 Monaten bis 8 Jahren. Alter, konkrete Packung und Verordnung vor jeder Anwendung prüfen; die App berechnet keine Dosis.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "Laxbene: Gebrauchsinformationen", sourceUrl: "https://laxbene.de/service/downloads" },
  { tradeName: "Laxbene 10 g", medicationId: "macrogol", strength: "10 g Macrogol 4000", dosageForm: "Pulver zur Herstellung einer Lösung zum Einnehmen", audience: "Für Kinder ab 8 Jahren und Erwachsene", safetyNote: "Laut Gebrauchsinformation für Kinder ab 8 Jahren und Erwachsene. Alter, konkrete Packung und Verordnung vor jeder Anwendung prüfen; die App berechnet keine Dosis.", status: "Produktinformation abgeglichen", checkedOn: "22.07.2026", sourceLabel: "Laxbene: Gebrauchsinformationen", sourceUrl: "https://laxbene.de/service/downloads" },
  { tradeName: "Novalgin Tropfen", medicationId: "metamizol", strength: "500 mg/ml", dosageForm: "Tropfen zum Einnehmen", status: "Produktinformation abgeglichen", checkedOn: "21.07.2026", sourceLabel: "PatientenInfo-Service: Novalgin Tropfen", sourceUrl: "https://www.patienteninfo-service.de/a-z-liste/n/novalginR-tropfen?schrift=0.9" },
  { tradeName: "Eliquis", medicationId: "apixaban", strength: "2,5 mg oder 5 mg", dosageForm: "Filmtabletten", status: "Produktinformation abgeglichen", checkedOn: "21.07.2026", sourceLabel: "EMA: Eliquis – Produktinformation", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/eliquis" },
  { tradeName: "Xarelto", medicationId: "rivaroxaban", strength: "Stärke abhängig von der Verordnung", dosageForm: "Tabletten oder Granulat zur Suspension", status: "Produktinformation abgeglichen", checkedOn: "21.07.2026", sourceLabel: "EMA: Xarelto – Produktinformation", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/xarelto" },
  { tradeName: "Pradaxa", medicationId: "dabigatran", strength: "Stärke abhängig von der Verordnung", dosageForm: "Kapseln", status: "Produktinformation abgeglichen", checkedOn: "21.07.2026", sourceLabel: "EMA: Pradaxa – Produktinformation", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/pradaxa" },
  { tradeName: "Zytiga", medicationId: "abirateron", strength: "Stärke abhängig von der Verordnung", dosageForm: "Tabletten", status: "Produktinformation abgeglichen", checkedOn: "21.07.2026", sourceLabel: "EMA: Zytiga – Produktinformation", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/zytiga" },
  { tradeName: "Xtandi", medicationId: "enzalutamid", strength: "Stärke abhängig von der Verordnung", dosageForm: "Tabletten oder Kapseln", status: "Produktinformation abgeglichen", checkedOn: "21.07.2026", sourceLabel: "EMA: Xtandi – Produktinformation", sourceUrl: "https://www.ema.europa.eu/en/medicines/human/EPAR/xtandi" }
];

const aliasPreparations = Object.entries(commonBrandAliases).flatMap(([medicationId, aliases]) => aliases.map((tradeName) => ({
  tradeName,
  medicationId,
  strength: "Stärke auf der Packung prüfen",
  dosageForm: "Darreichungsform auf der Packung prüfen",
  status: "Handelsname zugeordnet – Packungsabgleich offen",
  sourceLabel: defaultSource.label,
  sourceUrl: defaultSource.url
})));

const preparations = [
  ...verifiedPreparations,
  ...aliasPreparations.filter((candidate) => !verifiedPreparations.some((verified) =>
    verified.tradeName.toLocaleLowerCase("de-DE") === candidate.tradeName.toLocaleLowerCase("de-DE")
  ))
];

const editorialProfiles = {
  "Blutdrucksenker": {
    purpose: "Redaktionsentwurf: Mittel dieser Gruppe werden häufig eingesetzt, um erhöhten Blutdruck zu senken. Die genaue zugelassene Anwendung bitte am konkreten Präparat prüfen.",
    does: "Es kann den Blutdruck senken. Die Wirkung ist oft nicht unmittelbar spürbar.",
    doesNot: "Es ist kein Mittel für eine Selbstbehandlung von plötzlich auftretender Atemnot, starkem Brustschmerz oder einer akuten Notfallsituation.",
    daily: "Als Prüfpunkt aufnehmen: Schwindel, Schwäche und Sturzrisiko – besonders zu Beginn oder bei niedrigem Blutdruck.",
    risk: "Prüfen: konkrete Gegenanzeigen, Nieren-/Kaliumkontrollen und Wechselwirkungen anhand der aktuellen Gebrauchsinformation.",
    urgent: "Prüfen und gegebenenfalls klar nennen: Ohnmacht, Atemnot, Schwellung von Gesicht/Mund oder neu auftretender starker Brustschmerz."
  },
  "Wassertablette": {
    purpose: "Redaktionsentwurf: Mittel dieser Gruppe können helfen, überschüssige Flüssigkeit auszuscheiden. Die genaue Anwendung bitte am Präparat prüfen.",
    does: "Es kann die Urinmenge erhöhen und dadurch Flüssigkeitseinlagerungen oder Blutdruck beeinflussen.",
    doesNot: "Es behandelt nicht selbstständig die Ursache neuer Atemnot, starker Schwellungen oder rascher Gewichtszunahme.",
    daily: "Als Prüfpunkt aufnehmen: häufiger Harndrang, Schwindel, Schwäche und ausreichende Trinkmenge nach ärztlicher Vorgabe.",
    risk: "Prüfen: Salz-/Mineralstoffwerte, Nierenwerte und die individuelle Einnahmezeit.",
    urgent: "Prüfen und gegebenenfalls klar nennen: Ohnmacht, ausgeprägte Schwäche, Verwirrtheit oder deutlich weniger Urin."
  },
  "Gerinnungshemmer": {
    purpose: "Redaktionsentwurf: Mittel dieser Gruppe werden eingesetzt, um Blutgerinnseln vorzubeugen oder sie zu behandeln. Die zugelassene Anwendung ist produktabhängig.",
    does: "Es verringert die Gerinnungsfähigkeit des Blutes.",
    doesNot: "Es ist kein gewöhnliches Schmerzmittel und soll nicht ohne Rücksprache mit anderen Mitteln kombiniert oder unterbrochen werden.",
    daily: "Als Prüfpunkt aufnehmen: Blutergüsse und die Information anderer Behandelnder vor Eingriffen oder Zahnbehandlungen.",
    risk: "Prüfen: Blutungsrisiko, Wechselwirkungen, Nierenfunktion und Vorgehen bei vergessener Einnahme.",
    urgent: "Prüfen und gegebenenfalls klar nennen: ungewöhnliche/starke Blutungen, Blut im Stuhl oder Urin, Erbrechen von Blut oder Sturz auf den Kopf."
  },
  "Blutplättchenhemmer": {
    purpose: "Redaktionsentwurf: Mittel dieser Gruppe können verhindern, dass Blutplättchen leicht zusammenhaften. Die genaue Anwendung bitte prüfen.",
    does: "Es kann der Bildung bestimmter Blutgerinnsel vorbeugen.",
    doesNot: "Es ist nicht mit einem Schmerzmittel gleichzusetzen und darf nicht eigenständig abgesetzt werden.",
    daily: "Als Prüfpunkt aufnehmen: vermehrte Blutergüsse und Rücksprache vor Eingriffen.",
    risk: "Prüfen: Blutungsrisiko, Magen-Darm-Risiken und Kombinationen mit Schmerzmitteln oder Gerinnungshemmern.",
    urgent: "Prüfen und gegebenenfalls klar nennen: starke oder ungewöhnliche Blutungen, schwarzer Stuhl oder Erbrechen von Blut."
  },
  "Schmerzmittel": {
    purpose: "Redaktionsentwurf: Der Wirkstoff wird zur Linderung von Schmerzen eingesetzt. Die konkrete Schmerzart und Anwendung bitte prüfen.",
    does: "Es kann Schmerzen lindern; einige Wirkstoffe dieser Gruppe können zusätzlich Fieber oder Entzündung beeinflussen.",
    doesNot: "Es behandelt nicht automatisch die Ursache der Schmerzen oder beschleunigt eine Heilung.",
    daily: "Als Prüfpunkt aufnehmen: Müdigkeit, Schwindel, Magenbeschwerden, Verstopfung oder Einschränkungen beim Autofahren – je nach Wirkstoff.",
    risk: "Prüfen: Wechselwirkungen, Nieren-/Leberrisiken, Blutungsrisiko und sichere Kombination mit anderen Schmerzmitteln.",
    urgent: "Prüfen und gegebenenfalls klar nennen: Atemnot, starke allergische Reaktion, schwarzer Stuhl, Verwirrtheit oder ungewöhnlich starke Benommenheit."
  },
  "Magensäurehemmer": {
    purpose: "Redaktionsentwurf: Mittel dieser Gruppe können Magensäure verringern. Die genaue Ursache der Beschwerden bleibt davon getrennt zu beurteilen.",
    does: "Es kann säurebedingte Beschwerden lindern.",
    doesNot: "Es erklärt oder behandelt nicht automatisch neue Schluckbeschwerden, Blutungen, Gewichtsverlust oder starke Schmerzen.",
    daily: "Als Prüfpunkt aufnehmen: Bauchbeschwerden, Durchfall oder Verstopfung sowie Nutzenkontrolle bei längerer Anwendung.",
    risk: "Prüfen: Dauer der Anwendung, Wechselwirkungen und produktspezifische Warnhinweise.",
    urgent: "Prüfen und gegebenenfalls klar nennen: Blut im Erbrochenen, schwarzer Stuhl, zunehmende Schluckbeschwerden oder starke Schmerzen."
  },
  "Abführmittel": {
    purpose: "Redaktionsentwurf: Mittel dieser Gruppe werden bei Verstopfung eingesetzt. Die genaue Anwendung ist produktabhängig.",
    does: "Es kann den Stuhl weicher machen oder die Darmtätigkeit anregen.",
    doesNot: "Es behandelt nicht die Ursache einer neuen, schweren oder anhaltenden Verstopfung.",
    daily: "Als Prüfpunkt aufnehmen: Bauchkrämpfe, Blähungen, Durchfall und ausreichende Flüssigkeit nach ärztlicher Vorgabe.",
    risk: "Prüfen: Dauer der Anwendung, Flüssigkeits-/Salzhaushalt und Wechselwirkungen mit anderen Medikamenten.",
    urgent: "Prüfen und gegebenenfalls klar nennen: starke Bauchschmerzen, Erbrechen, aufgeblähter Bauch, Blut im Stuhl oder kein Stuhlgang mit fehlenden Winden."
  },
  "Krebstherapie": {
    purpose: "Redaktionsentwurf: Dieser Wirkstoff kann Teil einer Krebstherapie sein. Die genaue Tumorart, Behandlungsabsicht und Kombination müssen aus dem individuellen Plan stammen.",
    does: "Er kann auf Krebszellen oder die Hormonsteuerung der Erkrankung wirken – die konkrete Wirkung bitte anhand des Präparats prüfen.",
    doesNot: "Es ist kein Mittel gegen akute Schmerzen, Schluckbeschwerden oder andere neue Beschwerden und ersetzt deren Untersuchung nicht.",
    daily: "Als Prüfpunkt aufnehmen: Müdigkeit, Infektzeichen, Stimmung, Haut, Verdauung und weitere therapietypische Beschwerden – nur nach produktspezifischer Prüfung konkret benennen.",
    risk: "Prüfen: notwendige Blutwerte, Wechselwirkungen, Warnzeichen und direkte Kontaktwege zum onkologischen Team.",
    urgent: "Prüfen und gegebenenfalls klar nennen: Fieber, schwere Atemnot, starke Blutung, neue neurologische Symptome oder deutlich zunehmende Beschwerden."
  },
  "Diabetesmittel": {
    purpose: "Redaktionsentwurf: Mittel dieser Gruppe werden zur Behandlung eines erhöhten Blutzuckers eingesetzt. Die genaue Anwendung bitte prüfen.",
    does: "Es kann den Blutzucker über unterschiedliche Wege senken.",
    doesNot: "Es ersetzt nicht die individuelle Anleitung zu Ernährung, Messungen oder dem Vorgehen bei Krankheitstagen.",
    daily: "Als Prüfpunkt aufnehmen: Unterzuckerung nur dort nennen, wo sie für den konkreten Wirkstoff relevant ist; außerdem Trinkmenge und Magen-Darm-Beschwerden prüfen.",
    risk: "Prüfen: Nierenfunktion, Wechselwirkungen und Hinweise für akute Erkrankungen/Operationen.",
    urgent: "Prüfen und gegebenenfalls klar nennen: Bewusstseinsstörung, schwere Schwäche, anhaltendes Erbrechen oder Zeichen einer schweren Unterzuckerung."
  },
  "Atemwegsmedikament": {
    purpose: "Redaktionsentwurf: Mittel dieser Gruppe können die Atmung unterstützen oder Entzündung in den Atemwegen behandeln. Die genaue Rolle bitte prüfen.",
    does: "Es kann Atemwege erweitern oder Entzündung in den Atemwegen beeinflussen – abhängig vom Wirkstoff.",
    doesNot: "Nicht jedes Mittel ist für akute Atemnot gedacht; das muss am konkreten Präparat klar erklärt werden.",
    daily: "Als Prüfpunkt aufnehmen: richtige Inhalationstechnik, Zittern/Herzklopfen oder Mundpflege je nach Wirkstoff.",
    risk: "Prüfen: Akut- oder Dauermittel, maximale Anwendung und produktbezogene Nebenwirkungen.",
    urgent: "Prüfen und gegebenenfalls klar nennen: starke oder zunehmende Atemnot, bläuliche Lippen oder fehlende Wirkung des Notfallplans."
  }
};

function generalProfileFor(medication) {
  return {
    purpose: `${medication.name} gehört in dieser Übersicht zur Gruppe „${medication.category}“. Es wird je nach konkretem Präparat zur Behandlung der Beschwerden eingesetzt, für die diese Wirkstoffgruppe zugelassen ist.`,
    does: "Die Wirkung hängt vom Wirkstoff und der Darreichungsform ab. Die Karte soll erklären, welche Beschwerden dadurch gelindert oder beeinflusst werden können.",
    doesNot: "Das Medikament ersetzt keine Abklärung neuer, starker oder schnell zunehmender Beschwerden und behandelt nicht automatisch deren Ursache.",
    daily: "Achten Sie darauf, ob nach Beginn oder einer Änderung der Einnahme neue Beschwerden auftreten. Bei Müdigkeit, Schwindel oder Konzentrationsproblemen vorsichtig mit Autofahren, Maschinen und Sturzrisiko sein.",
    risk: "Nebenwirkungen und Wechselwirkungen sind je nach Wirkstoff und Präparat unterschiedlich. Die Packungsbeilage des konkreten Präparats und die Beratung in der Apotheke sind entscheidend.",
    urgent: "Bei Atemnot, Schwellung von Gesicht oder Rachen, Ohnmacht, starker Blutung, heftigen Schmerzen oder einer raschen deutlichen Verschlechterung sofort medizinische Hilfe holen."
  };
}

function readableText(text) {
  return text
    .replace(/^Redaktionsentwurf:\s*/, "")
    .replace(/^Als Prüfpunkt aufnehmen:\s*/, "")
    .replace(/^Prüfen und gegebenenfalls klar nennen:\s*/, "")
    .replace(/^Prüfen:\s*/, "");
}

const list = document.querySelector("#medication-list");
const detail = document.querySelector("#detail-view");
const search = document.querySelector("#search-input");
const status = document.querySelector("#search-status");
const categoryFilter = document.querySelector("#category-filter");

const categories = [...new Set(medications.map((medication) => medication.category))].sort((a, b) => a.localeCompare(b, "de"));
categoryFilter.insertAdjacentHTML("beforeend", categories.map((category) => `<option value="${category}">${category}</option>`).join(""));

function renderList(query = "") {
  const normalizeForSearch = (value) => value
    .toLocaleLowerCase("de-DE")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
  const normalizedQuery = normalizeForSearch(query);
  const matches = medications.filter((medication) =>
    normalizeForSearch([medication.name, medication.examples, medication.category, ...medication.aliases].join(" ")).includes(normalizedQuery)
    && (!categoryFilter.value || medication.category === categoryFilter.value)
  ).map((medication) => ({
    ...medication,
    matchedPreparation: normalizedQuery
      ? preparations.find((preparation) => preparation.medicationId === medication.id && normalizeForSearch(preparation.tradeName) === normalizedQuery)
      : undefined,
    matchedAlias: normalizedQuery
      ? medication.aliases.find((alias) => normalizeForSearch(alias).includes(normalizedQuery))
      : undefined
  }));
  status.textContent = normalizedQuery || categoryFilter.value
    ? `${matches.length} Treffer`
    : "";
  status.hidden = !(normalizedQuery || categoryFilter.value);
  list.innerHTML = matches.length
    ? matches.map((medication) => `
      <button class="medication-card" data-id="${medication.id}" type="button">
        <div class="medication-card__top"><h3>${medication.name}</h3><span class="pill">${medication.category}</span></div>
        <p>${medication.examples}</p>
        ${preparationMatchText(medication.matchedPreparation, medication.matchedAlias, medication.name)}
        <p><span class="pill ${medication.reviewStatus.startsWith("Best Guess") ? "pill--pending" : ""}">${medication.reviewStatus}</span></p>
      </button>`).join("")
    : "<p>Kein passender Eintrag. Bitte Handelsname, Wirkstoff sowie Stärke und Darreichungsform auf der Packung prüfen.</p>";
}

function preparationMatchText(preparation, alias, medicationName) {
  if (preparation?.status === "Produktinformation abgeglichen") {
    return `<p class="alias-match">Präparat gefunden: ${preparation.tradeName} → ${medicationName} · ${preparation.strength}, ${preparation.dosageForm}.${preparation.audience ? ` ${preparation.audience}.` : ""} Quelle abgeglichen am ${preparation.checkedOn}.</p>`;
  }
  if (preparation || alias) {
    return `<p class="alias-match">Gefunden über Handelsname: ${(preparation ?? { tradeName: alias }).tradeName} → ${medicationName} · Stärke und Darreichungsform auf der Packung sowie in PharmNet.Bund prüfen.</p>`;
  }
  return "";
}

function preparationPanel(medication) {
  const linkedPreparations = preparations.filter((preparation) => preparation.medicationId === medication.id);
  const verified = linkedPreparations.filter((preparation) => preparation.status === "Produktinformation abgeglichen");
  const pendingCount = linkedPreparations.length - verified.length;
  if (!linkedPreparations.length) return "";
  return `<article class="info-card info-card--neutral preparation-panel">
    <h3>Präparate und Handelsnamen</h3>
    ${verified.length ? `<ul class="preparation-list">${verified.map((preparation) => `<li><strong>${preparation.tradeName}</strong><br>${preparation.strength} · ${preparation.dosageForm}${preparation.audience ? `<br><strong>${preparation.audience}</strong>` : ""}${preparation.safetyNote ? `<br><span class="preparation-note">${preparation.safetyNote}</span>` : ""}<br><a href="${preparation.sourceUrl}" target="_blank" rel="noreferrer">${preparation.sourceLabel}</a> · abgeglichen am ${preparation.checkedOn}</li>`).join("")}</ul>` : ""}
    ${pendingCount ? `<p>${pendingCount} weitere Handelsnamen sind als Suchhilfe hinterlegt. Ihre konkrete Packungsvariante muss noch in <a href="${defaultSource.url}" target="_blank" rel="noreferrer">PharmNet.Bund</a> abgeglichen werden.</p>` : ""}
    <p class="preparation-note">Auch bei abgeglichener Zuordnung gilt: Nicht selbst wechseln, absetzen oder dosieren. Entscheidend sind Wirkstoff(e), Stärke und Darreichungsform auf der tatsächlichen Packung.</p>
  </article>`;
}

function openDetail(id) {
  const medication = medications.find((item) => item.id === id);
  if (!medication) return;
  if (medication.reviewStatus.startsWith("Best Guess")) {
    renderPendingDetail(medication);
    return;
  }
  detail.innerHTML = `
    <button class="back-button" id="back-button" type="button">← Zurück zur Suche</button>
    <div class="detail-header"><p class="eyebrow">${medication.category}</p><h2>${medication.name}</h2><p class="detail-meta">${medication.examples}</p></div>
    <div class="cards">
      ${card("Wofür ist es da?", medication.purpose, "positive")}
      ${card("Was tut es?", medication.does, "positive")}
      ${card("Was tut es nicht?", medication.doesNot, "neutral")}
      ${card("Im Alltag wichtig", medication.daily, "warning")}
      ${card("Mögliche Nebenwirkungen", medication.sideEffects, "warning")}
      ${card("Sofort Hilfe holen", medication.urgent, "urgent")}
      ${preparationPanel(medication)}
    </div>
    <p class="source"><strong>Prüfstatus: ${medication.reviewStatus}.</strong> Quelle: <a href="${medication.sourceUrl}" target="_blank" rel="noreferrer">${medication.source}</a>. Die konkrete Gebrauchsinformation des verordneten Präparats bleibt maßgeblich.</p>`;
  list.hidden = true;
  status.hidden = true;
  detail.hidden = false;
  detail.scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelector("#back-button").focus();
}

function renderPendingDetail(medication) {
  const profile = editorialProfiles[medication.category] ?? generalProfileFor(medication);
  const source = sourceRegistry[medication.name] ?? defaultSource;
  detail.innerHTML = `
    <button class="back-button" id="back-button" type="button">← Zurück zur Suche</button>
    <div class="detail-header"><p class="eyebrow">${medication.category}</p><h2>${medication.name}</h2><p class="detail-meta">${medication.examples}</p></div>
    <div class="cards">
      ${card("Wofür ist es da?", readableText(profile.purpose), "positive")}
      ${card("Was tut es?", readableText(profile.does), "positive")}
      ${card("Was tut es nicht?", readableText(profile.doesNot), "neutral")}
      ${card("Im Alltag wichtig", readableText(profile.daily), "warning")}
      ${card("Nebenwirkungen und Risiken", readableText(profile.risk), "warning")}
      ${card("Sofort Hilfe holen", readableText(profile.urgent), "urgent")}
      ${preparationPanel(medication)}
    </div>
    <p class="source"><strong>Prüfstatus: Best Guess auf Quellenbasis.</strong> Grundlage: <a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>. ${source.note}</p>
    <p class="source"><strong>Vor Veröffentlichung prüfen:</strong> Wirkstoff, konkretes Produkt, Stärke, Darreichungsform, aktuelle Gebrauchsinformation und alle Aussagen durch Apotheke oder ärztliches Fachpersonal abgleichen.</p>`;
  list.hidden = true;
  status.hidden = true;
  detail.hidden = false;
  detail.scrollIntoView({ behavior: "smooth", block: "start" });
  document.querySelector("#back-button").focus();
}

function card(title, text, style) {
  return `<article class="info-card info-card--${style}"><h3>${title}</h3><p>${text}</p></article>`;
}

search.addEventListener("input", (event) => renderList(event.target.value));
categoryFilter.addEventListener("change", () => renderList(search.value));
list.addEventListener("click", (event) => {
  const button = event.target.closest("[data-id]");
  if (button) openDetail(button.dataset.id);
});
detail.addEventListener("click", (event) => {
  if (event.target.id !== "back-button") return;
  detail.hidden = true;
  list.hidden = false;
  renderList(search.value);
  search.focus();
});

renderList();
