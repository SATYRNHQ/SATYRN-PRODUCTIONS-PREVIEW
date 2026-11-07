# Important Page — Konzept

## Status
Konzeptphase — keine Änderungen an der Website-Implementierung, bis der Nutzer die Seite ausdrücklich freigibt.

## Aktueller Repository-Stand (nur Bestandsaufnahme)
- Navigationseintrag: `Important` (Seiten-ID: `page-important`).
- Die Seite ist derzeit ein Platzhalter.
- Im bestehenden lokalen Tool-Kontext sind mögliche Eingabefelder angelegt; diese sind keine bestätigten Produktentscheidungen.

## Kategorien — inhaltlich festgelegt
1. **Unternehmensinformationen** — umfasst Unternehmensstruktur und interne Abläufe, Markenidentität und langfristige Ausrichtung, Geschäftsmodelle und Einnahmequellen sowie allgemeine Unternehmensgrundsätze.
2. **Geschäftspartner & Kooperationen** — umfasst bestehende und potenzielle Geschäftspartner, auch wenn noch keine Zusammenarbeit besteht, sowie Kooperationsvereinbarungen, gemeinsame Projekte, Geschäftsbeziehungen und wichtige Informationen zu einzelnen Partnern.
3. **Strategic Moves** — umfasst getroffene, verworfene und später rückgängig gemachte unternehmerische Entscheidungen sowie deren Hintergründe, damit Entscheidungswege nachvollziehbar bleiben.
4. **Future Blueprints** — umfasst konkrete zukünftige Vorhaben, ausgearbeitete Ideen und Pläne, die SATYRN später umsetzen möchte; keine aktiven Aufgaben oder Termine.
5. **Sonstiges** — ausschließlich wichtige Informationen, die in keine der vier anderen Kategorien passen. Die Kategorie ist als Auffangkategorie gedacht und soll nicht die reguläre Zuordnung ersetzen.

## Noch offen — gemeinsam festlegen
- Konkrete visuelle Ausgestaltung der Karten und Prioritätsmarkierungen
- Suche und weitere Sortiermöglichkeiten
- Verknüpfungen zu Projekten oder anderen HQ-Bereichen
- Leere Ansicht, Beispielinhalte und responsive Verhalten
- Weitere optionale Metadaten neben den bereits festgelegten Feldern
- Genaue Formulierung der Löschbestätigung

## Bestätigte Entscheidungen und Änderungsprotokoll
- Important ist eine zentrale Sammlung wichtiger Informationen, die dauerhaft festgehalten und später wieder nachgeschlagen werden können; keine zweite Task- oder Deadline-Liste.
- Es können sowohl einzelne wichtige Ereignisse und Hinweise als auch langfristige unternehmensinterne Grundinformationen gesammelt werden.
- Jeder Eintrag muss genau einer Kategorie zugeordnet werden.
- Alle fünf Kategorien sollen auf der Important-Seite grundsätzlich aufgelistet sein.
- Einträge sollen nach Kategorie filterbar sein. Der Filter soll ermöglichen, einzelne Kategorien ein- und auszublenden.
- **Jeder Eintrag muss zwingend genau eine Prioritätsstufe haben.** Ein Eintrag ohne Priorität kann nicht gespeichert werden. So bleibt die Übersicht klar strukturiert.
- Die vier festgelegten Prioritätsstufen und Farben sind:
  1. **Dringend** — Rot
  2. **Wichtig** — Orange
  3. **Vorläufig** — Blau
  4. **Unbefristet** — Grün
- Die Prioritätsstufen werden im Erstellen-/Bearbeiten-Fenster als vier auswählbare Felder dargestellt. Die Namen selbst erscheinen jeweils in ihrer zugehörigen Farbe: Dringend rot, Wichtig orange, Vorläufig blau und Unbefristet grün.
- Die vier Auswahlfelder werden nebeneinander angeordnet, sofern die verfügbare Breite ausreicht; bei schmalen Ansichten dürfen sie sinnvoll umbrechen.
- Die Priorität ist beim Erstellen verpflichtend und kann beim späteren Bearbeiten geändert werden.
- Die Kategorie wird im Erstellen-/Bearbeiten-Fenster über ein Dropdown-Menü ausgewählt, das alle fünf festgelegten Kategorien enthält. Die Kategorie ist verpflichtend.
- Das Beschreibungsfeld ist ein größeres, mehrzeiliges Textfeld, damit auch ausführliche Informationen, Hintergründe und Entscheidungsgründe eingetragen werden können. Die Beschreibung bleibt optional.
- Das optionale Ereignisdatum wird über einen normalen Datumsauswähler mit Kalender-Popup festgelegt.
- Die Reihenfolge der Prioritätsstufen entspricht der oben aufgeführten Reihenfolge: Dringend vor Wichtig, Wichtig vor Vorläufig und Vorläufig vor Unbefristet.
- Innerhalb derselben Prioritätsstufe werden Einträge anhand ihres **Ereignisdatums** sortiert, nicht anhand des Erstellungsdatums.
- Zukünftige Ereignisse stehen vor bereits vergangenen Ereignissen. Unter den zukünftigen Ereignissen steht das nächstliegende Datum zuerst. Beispiel: Ist heute der 7., steht ein Ereignis am 10. vor einem Ereignis am 12. Die Sortierung wird dynamisch anhand des aktuellen Datums bestimmt.
- Bereits vergangene Ereignisse bleiben sichtbar und werden so sortiert, dass das am längsten zurückliegende Ereignis zuerst erscheint; je länger ein Ereignis zurückliegt, desto weiter oben steht es innerhalb der Gruppe vergangener Ereignisse.
- Einträge ohne Ereignisdatum stehen innerhalb ihrer jeweiligen Prioritätsstufe ganz unten.
- **Dringend** und **Wichtig** müssen auf einen Blick klar unterscheidbar sein. Bestätigte Gestaltungsrichtung: Dringend erhält einen deutlich kräftigeren roten Akzent und ein Ausrufezeichen als Warnsymbol. Wichtig erhält einen orangefarbenen Akzent, aber ohne Warnsymbol und mit zurückhaltenderer Wirkung. Die genauen visuellen Details werden beim späteren Seitendesign festgelegt.
- Das Ausblenden von Kategorien über den Filter ändert weder die Kategorie noch die Priorität der Einträge. Die Prioritätssortierung bleibt innerhalb der jeweils sichtbaren Einträge wirksam.
- Die Einträge werden als rechteckige Karten untereinander dargestellt, nicht als kompakte Tabellen- oder Listenzeilen.
- Die Karten sollen Titel, Kategorie und Priorität auf einen Blick erkennen lassen. Eine Beschreibung wird als Vorschau angezeigt, sofern vorhanden; ein Ereignisdatum erscheint nur, wenn eines hinterlegt wurde.
- **Jeder Eintrag muss einen Titel haben.** Das Titelfeld ist beim Erstellen verpflichtend; ein Eintrag kann nicht ohne Titel gespeichert werden.
- Eine Beschreibung ist optional.
- Das Ereignisdatum ist optional und bezeichnet, wann das Ereignis stattfindet; es ist kein Erstellungsdatum.
- Einträge sollen nach dem Erstellen jederzeit bearbeitet werden können.
- Einträge sollen gelöscht werden können.
- **Vor dem endgültigen Löschen eines Eintrags soll eine Sicherheitsabfrage erscheinen.** Diese wird als kleines, zentriertes Bestätigungsfenster innerhalb des zentralen Inhaltsbereichs dargestellt. Sie bietet die Aktionen **„Abbrechen“** und einen deutlich roten **„Endgültig löschen“**-Button. Die genaue Formulierung der Abfrage wird später festgelegt.
- Ereignisse und Termine, die als Kalendertermine geführt werden, gehören in den Calendar und sollen nicht als eigene Kategorie in Important dupliziert werden.
- Die fünf Kategorien und ihre inhaltlichen Abgrenzungen sind festgelegt: Unternehmensinformationen; Geschäftspartner & Kooperationen; Strategic Moves; Future Blueprints; Sonstiges.
- Unternehmensinformationen umfasst Unternehmensstruktur und interne Abläufe, Markenidentität und langfristige Ausrichtung, Geschäftsmodelle und Einnahmequellen sowie allgemeine Unternehmensgrundsätze.
- Geschäftspartner & Kooperationen umfasst bestehende und potenzielle Partner, Kooperationsvereinbarungen, gemeinsame Projekte und Geschäftsbeziehungen sowie wichtige Informationen zu einzelnen Partnern.
- Strategic Moves umfasst auch verworfene und später rückgängig gemachte Entscheidungen, damit die Entwicklung und Gründe nachvollziehbar bleiben.
- Future Blueprints umfasst konkrete zukünftige Vorhaben, ausgearbeitete Ideen und Pläne, die SATYRN später umsetzen möchte; laufende Aufgaben und Termine gehören in die dafür vorgesehenen HQ-Bereiche.
- Sonstiges ist ausschließlich für wichtige Informationen vorgesehen, die in keine der anderen vier Kategorien passen.

## Bestätigte Entscheidung — Eintrag hinzufügen
- Oben rechts auf der Important-Seite befindet sich ein grünes Plus-Symbol.
- Ein Klick öffnet ein Overlay/Pop-up mittig im zentralen Inhaltsbereich.
- Die Important-Seite bleibt darunter geöffnet und sichtbar; es wird keine neue Seite oder separates Browserfenster geöffnet.
- Das Overlay dient zum Anlegen und Bearbeiten eines Eintrags.
- Headbar und Sidebars bleiben unangetastet und werden nicht überlagert.
- **Am unteren Rand des Erstellen-/Bearbeiten-Fensters befinden sich zwei Aktionsbuttons: „Abbrechen“ und „Speichern“.**
- „Abbrechen“ schließt das Fenster, ohne die vorgenommenen Änderungen zu speichern.
- „Speichern“ speichert den neuen oder bearbeiteten Eintrag. Pflichtfelder müssen dafür vollständig ausgefüllt sein.
- Das Fenster kann zusätzlich über ein **X-Symbol oben rechts** geschlossen werden.
- Das Fenster kann außerdem jederzeit mit der **Escape-Taste** geschlossen werden.
- Sowohl das X-Symbol als auch Escape schließen das Fenster ohne Speichern; nicht gespeicherte Änderungen werden verworfen.
- **Wenn beim Schließen über X oder Escape ungespeicherte Änderungen vorhanden sind, erscheint zuerst eine Sicherheitsabfrage.** Der Nutzer kann wählen, ob er im Formular bleiben und weiterbearbeiten oder die Änderungen verwerfen und das Fenster schließen möchte.
- Die Sicherheitsabfrage erscheint nur, wenn tatsächlich ungespeicherte Änderungen vorliegen. Ohne Änderungen wird das Fenster direkt geschlossen.
- **Ein Klick auf den abgedunkelten Hintergrund außerhalb des Overlays schließt das Fenster nicht.** Das Overlay wird ausschließlich über die vorgesehenen Bedienelemente (X, Escape oder Abbrechen) geschlossen; bei ungespeicherten Änderungen gilt die bestätigte Sicherheitsabfrage.

## Bestätigte Entscheidung — Eintragskarten
- Längere Beschreibungen werden auf den Karten zunächst eingeklappt dargestellt und können bei Bedarf durch den Nutzer ausgeklappt werden. Dadurch bleibt die Übersicht kompakt, während ausführliche Informationen direkt auf der Seite zugänglich bleiben.
- Ausgeklappte Beschreibungen können wieder eingeklappt werden. Dafür wechselt die Bedienoption beispielsweise von **„Mehr anzeigen“** zu **„Weniger anzeigen“**.
- Beim Ausklappen wächst die jeweilige Karte dynamisch in der Höhe, sodass der vollständige Beschreibungstext innerhalb der Karte angezeigt wird. Die übrigen Karten werden im Layout entsprechend nach unten verschoben; Inhalte überlagern sich nicht.
- Oben rechts auf jeder Eintragskarte befindet sich ein Drei-Punkte-Menü (⋮), über das die Aktionen **„Bearbeiten“** und **„Löschen“** erreichbar sind. Beim Löschen bleibt die bereits festgelegte Sicherheitsabfrage vor dem endgültigen Entfernen bestehen.
- Das Drei-Punkte-Menü ist **dauerhaft sichtbar** und erscheint nicht erst beim Darüberfahren mit der Maus (Hover).

- Auf der Important-Seite gibt es eine Suchleiste, mit der sämtliche Einträge anhand ihres Titels oder Beschreibungstextes durchsucht werden können.

- Zusätzlich zum Kategorienfilter gibt es einen Prioritätsfilter, mit dem einzelne Prioritätsstufen ein- und ausgeblendet werden können. Suchbegriff, Kategorienfilter und Prioritätsfilter wirken gemeinsam; die festgelegte Prioritäts- und Ereignisdatums-Sortierung bleibt für die sichtbaren Einträge bestehen.

- Suchleiste sowie Kategorien- und Prioritätsfilter sind direkt oben auf der Important-Seite sichtbar und nicht erst in einem separaten Filter-Menü verborgen.

- Important-Einträge sollen später mit passenden anderen HQ-Bereichen (z. B. Projects oder Business) verknüpft werden können. Die konkrete Auswahl der verknüpfbaren Bereiche und die Darstellung der Verknüpfungen werden noch festgelegt.

- Die Verknüpfungen zu anderen HQ-Bereichen können direkt beim Erstellen und Bearbeiten eines Important-Eintrags über ein eigenes Auswahlfeld hinzugefügt bzw. geändert werden. Die konkrete Auswahl der Bereiche und die Bedienung des Auswahlfeldes werden später definiert.
- Pro Important-Eintrag können mehrere Verknüpfungen gleichzeitig bestehen, auch zu mehreren Einträgen desselben HQ-Bereichs (z. B. zwei Projects und ein Business-Bereich), sofern diese später als auswählbare Ziele angeboten werden.
- Wenn noch keine Important-Einträge vorhanden sind, wird statt einer leeren Fläche eine dezente Willkommens-/Empty-State-Ansicht angezeigt. Sie enthält den Hinweis „Noch keine wichtigen Informationen vorhanden“ und eine Möglichkeit, direkt den ersten Eintrag zu erstellen.
- Zum ersten Verständnis und zur Demonstration der Oberfläche werden zunächst einige klar als Beispiele gekennzeichnete Beispieldatensätze angezeigt; sie dürfen nicht wie echte Unternehmensinformationen wirken.
- Sobald der Nutzer den ersten eigenen Important-Eintrag erstellt, verschwinden die Beispieldatensätze automatisch. Sie werden nicht mit echten Einträgen vermischt.
- Die Important-Seite passt sich responsiv an kleinere Bildschirm- und Fenstergrößen an. Karten, Suchleiste, Filter, Auswahlfelder und Menüs müssen vollständig zugänglich bleiben und dürfen nicht abgeschnitten werden oder sich überlagern; Bedienelemente dürfen bei Bedarf sinnvoll umbrechen bzw. untereinander angeordnet werden.
- Die Eintragskarten erhalten ein deutlich hervorgehobenes, visuell markantes Design statt einer schlichten, neutralen Darstellung. Kategorie und Priorität werden durch gut erkennbare farbige Akzente hervorgehoben; die genaue Anordnung und Ausgestaltung wird im weiteren Designprozess festgelegt.
- Die Priorität wird auf jeder Eintragskarte durch einen schmalen, gut sichtbaren farbigen Streifen am linken Kartenrand dargestellt. Die Karte selbst behält einen neutralen Hintergrund; die Prioritätsfarbe wird nicht flächig auf die gesamte Karte gelegt.
- Zusätzlich zum farbigen Prioritätsstreifen wird die jeweilige Priorität auf jeder Eintragskarte ausdrücklich als Textlabel angezeigt (z. B. „Dringend“, „Wichtig“, „Vorläufig“ oder „Unbefristet“). Das Label verwendet die zugehörige Prioritätsfarbe und bleibt klar vom Kategorie-Label unterscheidbar.
- Das Prioritäts-Textlabel wird auf der Eintragskarte in einer eigenen Zeile direkt unter dem Titel angezeigt, nicht neben dem Kategorie-Label.
- Das Prioritäts-Textlabel wird als kleines farbiges Badge mit dezentem, zur jeweiligen Prioritätsfarbe passendem Hintergrund gestaltet; es steht in der eigenen Zeile direkt unter dem Titel.
- Die Kategorie wird zusätzlich als kleines farbiges Label direkt neben dem Eintragstitel angezeigt. Die Kategorie-Farbe dient der schnellen Orientierung und bleibt visuell klar von der Prioritätsfarbe des linken Kartenstreifens unterscheidbar; die konkrete Farbpalette und das Label-Design werden später festgelegt.
- Das Kategorie-Label direkt neben dem Titel wird ebenfalls als kleines Badge mit dezentem, zur jeweiligen Kategorie-Farbe passendem Hintergrund gestaltet. Es bleibt optisch klar vom Prioritäts-Badge in der Zeile darunter unterscheidbar.
- Kategorie- und Prioritäts-Badges erhalten abgerundete Ecken statt einer kantigen, technischen Form.
- Jede Eintragskarte erhält zusätzlich zum farbigen Kategorie-Label ein kleines, zur jeweiligen Kategorie passendes Symbol. Symbol und Label unterstützen gemeinsam die schnelle visuelle Orientierung; die konkreten Symbole werden bei der späteren Designausarbeitung festgelegt.

## Bestätigte Kategorie-Farben und Symbole
- **Unternehmensinformationen:** Stahlblau, Symbol `building-2`.
- **Geschäftspartner & Kooperationen:** Gold, Symbol `handshake`.
- **Strategic Moves:** Violett, Symbol `landmark`.
- **Future Blueprints:** Türkis, Symbol `telescope`.
- **Sonstiges:** Silbergrau, Symbol `layers`.
- Die Kategorie-Farben und Symbole werden für die Kategorie-Labels und die visuelle Orientierung auf den Eintragskarten verwendet. Sie bleiben klar unterscheidbar von den vier Prioritätsfarben.

- Wenn ein Eintrag ein Ereignisdatum besitzt, wird es auf der Karte als kleines Kalender-Label mit Kalender-Symbol und lesbarem Datum angezeigt. Einträge ohne Ereignisdatum zeigen dieses Label nicht an.

- Zusätzlich zum konkreten Kalenderdatum wird eine relative Zeitangabe angezeigt, sofern ein Ereignisdatum gesetzt ist: bei zukünftigen Ereignissen z. B. „In 3 Tagen“, bei vergangenen Ereignissen z. B. „Vor 5 Tagen“. Die Angabe wird dynamisch anhand des aktuellen Datums berechnet und aktualisiert.

- Einträge mit der Priorität **Dringend** erhalten zusätzlich ein deutlich sichtbares Warnsymbol direkt neben dem Titel. Dieses Symbol ergänzt den roten Prioritätsstreifen und hebt Dringend klar von Wichtig ab; Wichtig erhält kein Warnsymbol.

- Eine Änderungsinformation wird nur angezeigt, wenn ein Eintrag nach seiner ursprünglichen Erstellung tatsächlich bearbeitet wurde. Dann erscheint beispielsweise „Zuletzt geändert: 06.11.2026“. Bei unveränderten, neu erstellten Einträgen wird keine Erstellungs- oder Änderungsinformation eingeblendet.

- Das Erstellen- und Bearbeiten-Fenster verwenden dieselbe große, breite Fenstergröße und dasselbe Layout. Beim Bearbeiten werden die vorhandenen Eintragsdaten in den gleichen Formularfeldern vorausgefüllt; es gibt kein separates oder anders gestaltetes Bearbeitungsfenster.

## Bestätigte Formularstruktur
- Das Formular im Erstellen-/Bearbeiten-Fenster wird in klar getrennte, übersichtlich beschriftete Bereiche gegliedert:
  1. **Grundinformationen** — Titel und Kategorie.
  2. **Inhalt** — Beschreibung und optionales Ereignisdatum.
  3. **Priorität** — Auswahl einer der vier verpflichtenden Prioritätsstufen.
  4. **Verknüpfungen** — Auswahl mehrerer passender Einträge bzw. Bereiche aus dem HQ.
- Die Bereiche sollen die Orientierung erleichtern und optisch sauber voneinander getrennt sein. Erstellen und Bearbeiten verwenden dieselbe Formularstruktur.

- **Layout-Empfehlung:** Das große Formular nutzt ein hybrides Zwei-Spalten-Layout. Oben stehen **Grundinformationen** und **Priorität** nebeneinander. Darunter folgen **Inhalt** und **Verknüpfungen** jeweils über die gesamte verfügbare Breite. So wird die Fensterbreite sinnvoll genutzt, während die Beschreibung und die Auswahl mehrerer Verknüpfungen genügend Platz behalten. Auf schmaleren Ansichten wechseln die Bereiche automatisch in eine Spalte.

## Verknüpfungsauswahl im Formular (bestätigt)
- Im Abschnitt „Verknüpfungen“ gibt es ein Suchfeld mit Dropdown.
- Über die Suche können sowohl HQ-Bereiche als auch konkrete Einträge gefunden werden.
- Mehrere Verknüpfungen können gleichzeitig ausgewählt werden.
- Mehrere Einträge aus demselben HQ-Bereich sind zulässig.
- Ausgewählte Verknüpfungen bleiben sichtbar und können einzeln wieder entfernt werden.

- Ausgewählte Verknüpfungen werden auch direkt auf der Important-Eintragskarte angezeigt, damit die zugehörigen HQ-Bereiche bzw. konkreten Einträge bereits in der Übersicht erkennbar sind.

- Verknüpfungen werden auf der Eintragskarte als kleine, anklickbare Labels dargestellt. Jedes Label zeigt das passende Bereichssymbol und den Namen des verknüpften Eintrags; ein Klick führt direkt zum jeweiligen Zielbereich bzw. Eintrag.

- Auf einer Eintragskarte werden höchstens drei Verknüpfungs-Labels direkt angezeigt. Weitere Verknüpfungen werden kompakt als „+X weitere“ zusammengefasst und können bei Bedarf aufgeklappt werden.

- Beim Aufklappen von „+X weitere“ werden die zusätzlichen Verknüpfungs-Labels direkt innerhalb derselben Eintragskarte eingeblendet, nicht in einem separaten Pop-up.

- Verknüpfungen werden intern über eine stabile, eindeutige ID des Zieleintrags gespeichert, nicht über dessen angezeigten Namen. Dadurch bleiben Verknüpfungen bei einer späteren Umbenennung bestehen. Wird ein Zieleintrag innerhalb des HQ verschoben, soll die Verknüpfung ebenfalls erhalten bleiben, solange seine ID unverändert bleibt.

- Wird ein verknüpfter Zieleintrag endgültig gelöscht, werden seine Verknüpfungen automatisch aus allen anderen Einträgen entfernt. Es bleiben keine ungültigen Links oder leeren Verknüpfungs-Labels zurück; die übrigen Einträge bleiben unverändert erhalten und es erscheint dafür keine zusätzliche Fehlermeldung.

- **Text der Löschbestätigung:** Überschrift „Eintrag endgültig löschen?“; Nachricht „Möchtest du diesen Important-Eintrag wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.“; Aktionen „Abbrechen“ und „Endgültig löschen“, wobei „Endgültig löschen“ deutlich rot gestaltet wird.

- Die Beispieldatensätze umfassen zunächst fünf realistische Beispiele, je eines pro Kategorie: „SATYRN Brand Identity“ (Unternehmensinformationen), „Potenzielle Artist-Kooperation“ (Geschäftspartner & Kooperationen), „Fokus auf Producer-Dienstleistungen“ (Strategic Moves), „Eigenes SATYRN Studio“ (Future Blueprints) und „Interne Unternehmensnotiz“ (Sonstiges). Jeder Beispieldatensatz trägt eine dezente, aber erkennbare Kennzeichnung „BEISPIEL“. Sobald der erste eigene Important-Eintrag gespeichert wird, verschwinden alle Beispieldatensätze automatisch.

- Die fünf Beispieldatensätze verwenden unterschiedliche Prioritäten, damit die Sortierung direkt sichtbar wird: **Dringend** — „Potenzielle Artist-Kooperation“; **Wichtig** — „SATYRN Brand Identity“; **Vorläufig** — „Fokus auf Producer-Dienstleistungen“; **Unbefristet** — „Eigenes SATYRN Studio“ und „Interne Unternehmensnotiz“. Damit sind alle vier Prioritätsstufen vertreten.

- Die Beispieldatensätze erhalten relative Ereignisdaten, die bei ihrer Darstellung anhand des aktuellen Datums berechnet werden: **Dringend — „Potenzielle Artist-Kooperation“:** in 3 Tagen; **Wichtig — „SATYRN Brand Identity“:** in 10 Tagen; **Vorläufig — „Fokus auf Producer-Dienstleistungen“:** vor 5 Tagen; **Unbefristet — „Eigenes SATYRN Studio“:** vor 30 Tagen; **Unbefristet — „Interne Unternehmensnotiz“:** kein Ereignisdatum. So lassen sich zukünftige, vergangene und undatierte Einträge demonstrieren, ohne dass die Beispieldaten mit der Zeit veralten.

- Jeder Beispieldatensatz erhält eine realistische, wie eine interne SATYRN-Unternehmensnotiz formulierte Beschreibung. Die Beschreibungen verwenden bewusst unterschiedliche Längen: kurze Texte, die vollständig sichtbar sind, mittellange Texte sowie lange Texte, die zunächst gekürzt und über „Mehr anzeigen“ vollständig aufgeklappt werden können. Alle bleiben klar als Beispiele gekennzeichnet.

- Die Beispieldatensätze demonstrieren auch die Änderungsinformation: **„SATYRN Brand Identity“** zeigt „Zuletzt geändert“ mit einem dynamisch berechneten Datum von vor 2 Tagen; **„Eigenes SATYRN Studio“** zeigt die Angabe mit einem dynamisch berechneten Datum von vor 7 Tagen. Die übrigen drei Beispieldatensätze zeigen keine Änderungsinformation. Die Datumsanzeige verwendet das Format `DD.MM.YYYY`.

- Die Beispieldatensätze demonstrieren unterschiedliche Verknüpfungen zu ebenfalls klar als Beispieldaten gekennzeichneten Zielen: **„SATYRN Brand Identity“** wird mit einem Beispielprojekt verknüpft; **„Potenzielle Artist-Kooperation“** mit einem Beispielprojekt und einem Business-Beispieleintrag; **„Fokus auf Producer-Dienstleistungen“** mit zwei unterschiedlichen Beispielprojekten; **„Eigenes SATYRN Studio“** mit einem Business-Beispieleintrag; **„Interne Unternehmensnotiz“** erhält keine Verknüpfung. Die Beispieldaten dürfen nicht mit echten HQ-Datensätzen verwechselt werden.

- Auch in der Empty-State-Ansicht bleibt das grüne Plus-Symbol oben rechts auf der Important-Seite dauerhaft sichtbar. Der Nutzer kann damit jederzeit einen neuen Eintrag starten; zusätzlich bietet die Empty-State-Ansicht eine direkte Möglichkeit, den ersten Eintrag zu erstellen.

- Die Empty-State-Ansicht erhält zusätzlich eine dezente, hochwertige Grafik passend zum dunklen SATYRN-HQ-Design. Die Grafik soll den leeren Informations-/Archivbereich visuell unterstützen, aber zurückhaltend bleiben und die Überschrift, Erklärung sowie die Möglichkeit zum Erstellen des ersten Eintrags nicht überlagern oder davon ablenken.

- **Empty-State-Grafik — Stilrichtung bestätigt:** Die Grafik „The Digital Archive“ orientiert sich am tatsächlichen SATYRN-HQ-Farbschema **Gold, Grün und Schwarz** statt an Stahlblau/Türkis. Vorgesehene Optik: tiefschwarzer bzw. anthrazitfarbener Hintergrund, hochwertige rauchglasartige und metallische Archiv-Elemente, dezente goldene Highlights und gezielte grüne Lichtakzente. Das Motiv bleibt abstrakt, minimalistisch und luxuriös-futuristisch, ohne Menschen, Schrift oder überladene Details. Die konkrete Ausarbeitung erfolgt in der späteren Designphase.

- Beim Darüberfahren mit der Maus leuchtet die Eintragskarte ausschließlich ganz leicht auf. Der dezente Hover-Effekt orientiert sich an der SATYRN-HQ-Farbwelt Gold und Grün; die Karte wird dabei nicht angehoben oder verschoben. Der Effekt darf weder vom Inhalt ablenken noch die Prioritäts- und Kategoriekennzeichnung überlagern.

- Eintragskarten lassen sich zusätzlich durch Anklicken ihrer freien Kartenfläche insgesamt aus- und wieder einklappen. Das Aus- und Einklappen ist damit nicht ausschließlich an den Textlink „Mehr anzeigen“ gebunden. Der bestehende „Mehr anzeigen“-/„Weniger anzeigen“-Mechanismus für lange Beschreibungen bleibt ebenfalls erhalten. Interaktive Elemente innerhalb der Karte (z. B. Drei-Punkte-Menü, Verknüpfungs-Labels und deren Aktionen) lösen beim Anklicken ausschließlich ihre eigene Funktion aus und dürfen nicht versehentlich das Ein- oder Ausklappen der Karte auslösen.

- Mehrere Eintragskarten dürfen gleichzeitig ausgeklappt bleiben. Das Ausklappen einer Karte klappt bereits geöffnete andere Karten nicht automatisch ein.

- Beim Ausklappen einer Karte werden sämtliche zu diesem Eintrag gehörenden Informationen vollständig sichtbar: insbesondere die komplette Beschreibung, alle Verknüpfungen (auch über die zunächst angezeigten drei hinaus), Datums-/Änderungsangaben und weitere vorhandene Eintragsdetails.

## Karten-Ausklappzustand
- Mehrere Eintragskarten dürfen gleichzeitig ausgeklappt bleiben.
- Beim Ausklappen einer Karte werden alle Informationen des Eintrags sichtbar.
- Nach einem Neuladen der Seite sind alle Karten wieder eingeklappt; der Ausklappzustand wird nicht dauerhaft gespeichert.

## Standardzustand der Prioritätsfilter
- Beim Öffnen der Important-Seite sind standardmäßig alle vier Prioritäten aktiviert.
- Nutzer können einzelne Prioritäten bei Bedarf ausblenden; die übrigen Filter- und Sortierregeln bleiben unverändert.

## Darstellung der Prioritätsfilter
- Prioritätsfilter werden als kleine Checkboxen mit farbigen Namen dargestellt.
- Die Namen verwenden die jeweilige Prioritätsfarbe: Dringend rot, Wichtig orange, Vorläufig blau und Unbefristet grün.

## Darstellung der Kategorienfilter
- Die fünf Kategorienfilter werden ebenfalls als kleine Checkboxen dargestellt.
- Die Kategorienamen verwenden ihre jeweilige Kategorie-Farbe: Stahlblau, Gold, Violett, Türkis und Silbergrau.

## Gruppierung der Filter
- Kategorien- und Prioritätsfilter stehen in zwei klar getrennten Gruppen.
- Gruppe 1: Kategorien mit fünf farbigen Checkboxen.
- Gruppe 2: Priorität mit vier farbigen Checkboxen.

## Filter-Gruppenaktionen
- Beide Filtergruppen erhalten jeweils einen kleinen Button „Alle“.
- Der Button aktiviert alle Checkboxen innerhalb seiner jeweiligen Gruppe (Kategorien oder Priorität).

- Neben „Alle“ erhält jede Filtergruppe auch einen Button „Keine“, der sämtliche Checkboxen dieser Gruppe deaktiviert.

## Verhalten bei vollständig deaktivierter Filtergruppe
- Wenn in einer Filtergruppe „Keine“ gewählt wird, werden alle Einträge ausgeblendet, die zu den deaktivierten Optionen dieser Gruppe gehören.
- Die andere Filtergruppe bleibt unabhängig davon aktiv und funktionsfähig; beide Gruppen wirken weiterhin gemeinsam auf die angezeigten Einträge.

## Suchfeld-Steuerung
- Das Suchfeld erhält einen kleinen X-Button, mit dem der aktuelle Suchtext sofort vollständig gelöscht werden kann.

## Suchverhalten
- Die Suche filtert Einträge automatisch bereits während des Tippens; Enter ist nicht erforderlich.

## Suchumfang
- Die Live-Suche durchsucht neben Titel und Beschreibung auch die Namen der verknüpften Einträge, beispielsweise Projekte und Geschäftspartner.

## Trefferanzahl
- Oberhalb der Eintragskarten wird die aktuelle Anzahl der angezeigten Treffer angezeigt, z. B. „12 Einträge gefunden“.
- Die Zahl aktualisiert sich automatisch passend zu Suche und aktiven Kategorie- sowie Prioritätsfiltern.

## Filter zurücksetzen
- Es gibt einen Button „Filter zurücksetzen“.
- Er leert den Suchtext und aktiviert alle fünf Kategorien sowie alle vier Prioritäten wieder (Standardzustand).

- Der Button „Filter zurücksetzen“ steht rechts neben dem Suchfeld.

## Visuelles Feedback der Filter
- Aktivierte Filter werden dezent in ihrer jeweiligen Kategorie- bzw. Prioritätsfarbe hervorgehoben.
- Beim Darüberfahren mit der Maus (Hover) erhalten Filter ebenfalls einen leichten, farblich passenden Leuchteffekt.
- Der Effekt bleibt subtil und fügt sich in den SATYRN-HQ-Stil ein.

## Keine-Ergebnisse-Zustand
- Wenn Suche und/oder Filter keine Einträge ergeben, erscheint ein eigener, dezenter Empty-State mit passender Grafik.
- Überschrift: „Keine Einträge gefunden“.
- Hinweistext: „Passe deine Suche oder Filter an, um Ergebnisse zu finden.“

- Unter dem Hinweistext erscheint zusätzlich ein Button „Filter zurücksetzen“, der Suche, Kategorien und Prioritäten auf den Standardzustand zurücksetzt.

## Anordnung des oberen Seitenbereichs
- Suchfeld und Button „Filter zurücksetzen“ stehen in der obersten Zeile.
- Darunter stehen Kategorienfilter und Prioritätsfilter nebeneinander in zwei klar getrennten Bereichen.
- Die Trefferanzahl wird unter den Filterbereichen und oberhalb der Eintragskarten angezeigt.
- Bei schmalen Fenstern dürfen die beiden Filterbereiche untereinander umbrechen, damit die Bedienung übersichtlich bleibt.

- Die nebeneinanderliegenden Filterbereiche „Kategorien“ und „Priorität“ erhalten jeweils eine dezente eigene Hintergrundfläche bzw. Umrandung, passend zum dunklen SATYRN-HQ-Design.

- Die Überschrift „Kategorien“ erhält ein kleines passendes Symbol; die Überschrift „Priorität“ ebenfalls. Beide Symbole bleiben dezent und fügen sich in das SATYRN-HQ-Design ein.

## Scroll-Verhalten des Filterbereichs
- Suchfeld, Filterbereiche und Trefferanzahl scrollen normal mit der Seite nach oben aus dem Sichtfeld.
- Sie bleiben nicht sticky oder dauerhaft am oberen Rand fixiert.

## Kartenbreite
- Jede Important-Eintragskarte nutzt die volle verfügbare Breite des zentralen Inhaltsbereichs.
- Karten werden untereinander in einer Spalte angezeigt.

## Karten-Ecken
- Die Important-Karten erhalten mittelstark abgerundete Ecken: modern und hochwertig, ohne zu weich oder übermäßig rund zu wirken.

## Kartenoberfläche
- Important-Karten verwenden eine dunkle Glasoptik (Dark Glass) mit leichtem metallischem Rand und subtilen Lichtreflexen.
- Die Oberfläche bleibt hochwertig und zurückhaltend; Texte und farbige Kategorie-/Prioritätsmarkierungen müssen klar lesbar bleiben.

- Der metallische Kartenrand verwendet eine dezente Mischung aus Gold und Grün, passend zur gold-grün-schwarzen SATYRN-HQ-Identität.

- Die Kartenoberfläche erhält einen sehr dezenten inneren Lichtverlauf: von dunklem Schwarz oben links zu einem kaum sichtbaren Grün-Gold-Schimmer unten rechts.

- Die Karten erhalten einen leichten, weichen Schatten, der sie dezent vom Seitenhintergrund abhebt, ohne einen starken schwebenden Effekt zu erzeugen.

## Abstand zwischen Karten
- Die Important-Karten erhalten einen mittleren Abstand: klar voneinander getrennt, aber ohne unnötig viel Leerraum.

## Innenabstand der Karten
- Die Karten erhalten einen mittleren Innenabstand rundherum: Inhalte stehen angenehm vom Rand entfernt, ohne unnötig viel Platz zu verbrauchen.

## Kartenanimation beim Öffnen und Ausklappen
- Beim erstmaligen Öffnen der Important-Seite erscheinen die Karten direkt vollständig sichtbar; sie erhalten keine zusätzliche Einblendanimation.
- Beim Ausklappen und Einklappen einer Karte wird die Höhenänderung dagegen sauber und flüssig animiert. Die Inhalte entfalten sich ohne Springen oder Überlappen; darunterliegende Karten verschieben sich ebenfalls flüssig an ihre neue Position.
- Die Animation bleibt dezent und funktional, ohne übertriebene Effekte.

## Position neu erstellter Einträge
- Direkt nach dem Speichern wird ein neu erstellter Eintrag zunächst ganz oben innerhalb seiner gewählten Prioritätsgruppe angezeigt.
- Anschließend gilt die festgelegte dynamische Sortierung anhand des Ereignisdatums innerhalb der Prioritätsgruppe.

## Löschanimation
- Nach Bestätigung der endgültigen Löschung verschwindet die betroffene Karte mit einer kurzen, dezenten Ausblendanimation.
- Die Animation bleibt ruhig und hochwertig; sie darf andere Karten oder deren Inhalte nicht überlagern.

## Aktualisierung nach dem Bearbeiten
- Änderungen an einem Eintrag werden nach dem Speichern direkt in der betroffenen Karte und den zugehörigen Ansichten aktualisiert.
- Dafür ist kein Neuladen der gesamten Seite erforderlich.

## Visuelle Hervorhebung neu gespeicherter Einträge
- Neu gespeicherte Einträge erhalten keine zusätzliche temporäre Hervorhebung; die normale Prioritäts- und Kartenoptik reicht aus.

## Such- und Filterzustand beim erneuten Öffnen
- Beim erneuten Öffnen bzw. Zurückkehren zur Important-Seite starten Suche und Filter immer im Standardzustand: Suchfeld leer, alle fünf Kategorien und alle vier Prioritäten aktiviert.
- Der zuvor verwendete Such- und Filterzustand wird nicht beibehalten.

## Kennzeichnung neu erstellter Einträge
- Neu erstellte Einträge erhalten am Kartenrand eine kleine Kennzeichnung mit dem Text „Neu“.
- Die Kennzeichnung leuchtet dezent und passend zur gold-grün-schwarzen SATYRN-HQ-Optik.
- Sie ist eine kleine Orientierungshilfe und darf Prioritätsstreifen, Titel oder andere Karteninformationen nicht verdrängen oder überdecken.

## Verhalten der Kennzeichnung „Neu“
- Die Kennzeichnung „Neu“ bleibt sichtbar, bis der Nutzer den betreffenden Eintrag zum ersten Mal öffnet.
- Beim ersten Öffnen des Eintrags wird die Kennzeichnung entfernt; sie erscheint für diesen Eintrag danach nicht erneut.

## Erstes Öffnen eines neuen Eintrags
- Wird ein neu erstellter Eintrag zum ersten Mal geöffnet, klappt sich die Karte automatisch vollständig aus.
- Gleichzeitig wird die Kennzeichnung „Neu“ dauerhaft entfernt.

## Geöffnete Karten beim Seitenwechsel
- Beim Wechsel von der Important-Seite zu einer anderen HQ-Seite werden alle aktuell ausgeklappten Important-Karten geschlossen.
- Bei der Rückkehr zur Important-Seite starten alle Karten eingeklappt.

## Prioritätsstatistik
- Die Important-Seite erhält eine kompakte Statistik mit der Anzahl der Einträge je Prioritätsstufe: Dringend, Wichtig, Vorläufig und Unbefristet.
- Die Zahlen aktualisieren sich automatisch, wenn Einträge erstellt, bearbeitet oder gelöscht werden.
- Die Statistik orientiert sich visuell an den jeweiligen Prioritätsfarben und bleibt dezent, damit Suche, Filter und Eintragskarten im Mittelpunkt stehen.

## Darstellung und Position der Prioritätsstatistik
- Die Prioritätsstatistik steht unterhalb der Filterbereiche und direkt oberhalb der Eintragskarten.
- Statt einer reinen Zahlenreihe wird ein kompaktes Kreisdiagramm verwendet, das die Verteilung der Einträge auf Dringend, Wichtig, Vorläufig und Unbefristet zeigt.
- Die vier Prioritäten bleiben zusätzlich mit ihren Namen und aktuellen Anzahlen erkennbar; Farben entsprechen den festgelegten Prioritätsfarben.
- Das Diagramm aktualisiert sich automatisch bei Erstellung, Bearbeitung und Löschung von Einträgen sowie passend zur aktuell sichtbaren Ergebnisliste.

## Interaktion mit dem Prioritäts-Kreisdiagramm
- Ein Klick auf ein Segment des Kreisdiagramms aktiviert direkt den zugehörigen Prioritätsfilter.
- Die übrigen Such- und Kategorie-Filter bleiben unverändert; die Ergebnisliste und Trefferanzahl aktualisieren sich entsprechend.
- Das ausgewählte Segment erhält eine dezente visuelle Hervorhebung. Ein erneuter Klick auf dasselbe Segment deaktiviert diesen Prioritätsfilter wieder.

## Gesamtzahl im Zentrum des Kreisdiagramms
- In der Mitte des Prioritäts-Kreisdiagramms wird die Gesamtzahl der aktuell angezeigten Einträge dargestellt.
- Die Zahl aktualisiert sich dynamisch entsprechend der aktiven Suche sowie Kategorie- und Prioritätsfilter.

## Hover-Informationen im Prioritäts-Kreisdiagramm
- Beim Darüberfahren mit der Maus über ein Segment erscheint eine dezente Zusatzinformation mit Prioritätsname und aktueller Anzahl, z. B. „Dringend – 3 Einträge“.
- Die Anzeige verwendet die jeweilige Prioritätsfarbe und bleibt kompakt, gut lesbar und unaufdringlich.
