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
4. **Future Blueprints** — umfasst konkrete zukünftige Vorhaben, ausgearbeitete Ideen und Pläne, die SATYRN später umsetzen möchte; keine laufenden Aufgaben oder Termine.
5. **Sonstiges** — ausschließlich wichtige Informationen, die in keine der vier anderen Kategorien passen. Die Kategorie ist als Auffangkategorie gedacht und soll nicht die reguläre Zuordnung ersetzen.

## Noch offen — gemeinsam festlegen
- Konkreter Seitenaufbau und Anordnung der Karten
- Chronologische Sortierrichtung (aufsteigend oder absteigend)
- Verhalten von Einträgen ohne Ereignisdatum innerhalb ihrer Prioritätsstufe
- Konkrete visuelle Ausgestaltung der Karten und Prioritätsmarkierungen
- Erstellen, Bearbeiten und Löschen im Detail
- Suche und weitere Sortiermöglichkeiten
- Verknüpfungen zu Projekten oder anderen HQ-Bereichen
- Leere Ansicht, Beispielinhalte und responsive Verhalten
- Ob und wie Einträge weitere optionale Metadaten erhalten

## Bestätigte Entscheidungen und Änderungsprotokoll
- Important ist eine zentrale Sammlung wichtiger Informationen, die dauerhaft festgehalten und später wieder nachgeschlagen werden können; keine zweite Task- oder Deadline-Liste.
- Es können sowohl einzelne wichtige Ereignisse und Hinweise als auch langfristige unternehmensinterne Grundinformationen gesammelt werden.
- Jeder Eintrag muss genau einer Kategorie zugeordnet werden.
- Alle fünf Kategorien sollen auf der Important-Seite grundsätzlich aufgelistet sein.
- Einträge sollen nach Kategorie filterbar sein. Der Filter soll ermöglichen, einzelne Kategorien ein- und auszublenden.
- Einträge können eine Priorität erhalten. Die Priorität wirkt kategorienübergreifend: Höher priorisierte Einträge werden automatisch weiter oben angezeigt, unabhängig davon, welcher Kategorie sie angehören.
- Die vier festgelegten Prioritätsstufen und Farben sind:
  1. **Dringend** — Rot
  2. **Wichtig** — Orange
  3. **Vorläufig** — Blau
  4. **Unbefristet** — Grün
- Die Reihenfolge der Prioritätsstufen entspricht der oben aufgeführten Reihenfolge: Dringend vor Wichtig, Wichtig vor Vorläufig und Vorläufig vor Unbefristet.
- Innerhalb derselben Prioritätsstufe sollen die Einträge chronologisch nach ihrem **Ereignisdatum** sortiert werden, nicht nach dem Erstellungsdatum.
- Die Sortierrichtung (aufsteigend/absteigend) und der Umgang mit Einträgen ohne Ereignisdatum sind noch offen.
- **Dringend** und **Wichtig** müssen auf einen Blick klar unterscheidbar sein. Bestätigte Gestaltungsrichtung: Dringend erhält einen deutlich kräftigeren roten Akzent und ein Ausrufezeichen als Warnsymbol. Wichtig erhält einen orangefarbenen Akzent, aber ohne Warnsymbol und mit zurückhaltenderer Wirkung. Die genauen visuellen Details werden beim späteren Seitendesign festgelegt.
- Das Ausblenden von Kategorien über den Filter ändert weder die Kategorie noch die Priorität der Einträge. Die Prioritätssortierung bleibt innerhalb der jeweils sichtbaren Einträge wirksam.
- Die Einträge werden als rechteckige Karten untereinander dargestellt, nicht als kompakte Tabellen- oder Listenzeilen.
- Die Karten sollen Titel, Kategorie und Priorität auf einen Blick erkennen lassen. Eine Beschreibung wird als Vorschau angezeigt, sofern vorhanden; ein Ereignisdatum erscheint nur, wenn eines hinterlegt wurde.
- Ereignisse und Termine, die als Kalendertermine geführt werden, gehören in den Calendar und sollen nicht als eigene Kategorie in Important dupliziert werden.
- Die fünf Kategorien und ihre inhaltlichen Abgrenzungen sind festgelegt: Unternehmensinformationen; Geschäftspartner & Kooperationen; Strategic Moves; Future Blueprints; Sonstiges.
- Unternehmensinformationen umfasst Unternehmensstruktur und interne Abläufe, Markenidentität und langfristige Ausrichtung, Geschäftsmodelle und Einnahmequellen sowie allgemeine Unternehmensgrundsätze.
- Geschäftspartner & Kooperationen umfasst bestehende und potenzielle Partner, Kooperationsvereinbarungen, gemeinsame Projekte und Geschäftsbeziehungen sowie wichtige Informationen zu einzelnen Partnern.
- Strategic Moves umfasst auch verworfene und später rückgängig gemachte Entscheidungen, damit die Entwicklung und Gründe nachvollziehbar bleiben.
- Future Blueprints umfasst konkrete zukünftige Vorhaben, ausgearbeitete Ideen und Pläne, die SATYRN später umsetzen möchte; laufende Aufgaben und Termine gehören in die dafür vorgesehenen HQ-Bereiche.
- Sonstiges ist ausschließlich für wichtige Informationen vorgesehen, die in keine der anderen vier Kategorien passen.
- Das Ereignisdatum ist optional und bezeichnet, wann das Ereignis stattfindet; es ist kein Erstellungsdatum.
- Die Beschreibung ist optional.

## Bestätigte Entscheidung — Eintrag hinzufügen
- Oben rechts auf der Important-Seite befindet sich ein grünes Plus-Symbol.
- Ein Klick öffnet ein Overlay/Pop-up mittig im zentralen Inhaltsbereich.
- Die Important-Seite bleibt darunter geöffnet und sichtbar; es wird keine neue Seite oder separates Browserfenster geöffnet.
- Das Overlay dient zum Anlegen und Bearbeiten eines Eintrags.
- Headbar und Sidebars bleiben unangetastet und werden nicht überlagert.
