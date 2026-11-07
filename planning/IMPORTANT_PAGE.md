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
- Die Kategorie wird zusätzlich als kleines farbiges Label direkt neben dem Eintragstitel angezeigt. Die Kategorie-Farbe dient der schnellen Orientierung und bleibt visuell klar von der Prioritätsfarbe des linken Kartenstreifens unterscheidbar; die konkrete Farbpalette und das Label-Design werden später festgelegt.
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
