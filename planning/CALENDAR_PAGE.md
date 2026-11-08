# Calendar — Konzept und Entscheidungsprotokoll

## Status
Planung begonnen. Die Monatsansicht und die Prioritätsdarstellung sind festgelegt; weitere Details werden schrittweise gemeinsam entschieden. Die Calendar-Seite ist im aktuellen Stand noch ein Platzhalter und wird erst nach Abschluss der Planung implementiert.

## Abgrenzung
- Dieses Dokument beschreibt ausschließlich die Calendar-Seite.
- **Deadlines sind ausdrücklich zurückgestellt** und werden zu einem späteren Zeitpunkt separat geplant. Sie sind kein Bestandteil dieser Ausbaustufe.
- Allgemeine bzw. seitenübergreifende Funktionen werden gesammelt und erst in der zentralen Abschlussphase behandelt.
- Schedule wird anschließend als eigener Bereich geplant; Calendar-Entscheidungen werden nicht automatisch auf Schedule übertragen.

## Bestätigte Entscheidungen — Hauptansicht
- Die Hauptansicht ist eine klassische Monatsansicht.
- Es gibt keine zusätzliche Seitenleiste mit Termindetails und keine zusätzlichen Informationskarten als zweite Hauptansicht.
- Die Monatsansicht hat sieben Spalten und beginnt mit Montag.
- Der angezeigte Monat kann über Vor- und Zurück-Steuerung gewechselt werden.
- Termine und Ereignisse werden direkt im jeweiligen Tagesfeld dargestellt.
- Die sichtbaren Kalendereinträge zeigen ausschließlich ihren **Titel**.
- Wenn an einem Tag mehrere Einträge liegen, werden ihre Titel untereinander angezeigt.
- Die Monatsansicht bleibt bewusst schlicht und übersichtlich.

## Bestätigte Entscheidungen — Tagesfenster
- Ein Klick auf einen Tag in der Monatsansicht öffnet ein kleines Fenster mit den Terminen und Ereignissen dieses Tages.
- Innerhalb dieses Fensters können Einträge hinzugefügt werden.
- Zusätzlich gibt es oben rechts in der Calendar-Ansicht ein kleines **Plus-Symbol (+)** zum Hinzufügen eines neuen Eintrags. Das Symbol und seine Platzierung orientieren sich am Hinzufügen-Symbol im Important-Fenster.
- Beim schnellen Hinzufügen über das Plus-Symbol wird ein passendes Datum vorausgewählt: das aktuell ausgewählte Datum bzw. der ausgewählte Kalendertag; wenn kein Tag ausgewählt ist, standardmäßig das heutige Datum.
- Das vorausgewählte Datum bleibt im Formular jederzeit änderbar. Über eine Datumsauswahl kann **jedes beliebige Datum** gewählt werden.
- Ein Klick auf einen bestehenden Termineintrag öffnet zunächst dessen **Detailansicht**. Er wechselt nicht direkt in den Bearbeitungsmodus.
- In der Detailansicht befindet sich ein **Drei-Punkte-Menü (⋯)** mit den Aktionen **Bearbeiten** und **Löschen**.
- **Bearbeiten** öffnet das Bearbeitungsformular für den ausgewählten Eintrag.
- **Löschen** erfordert eine Sicherheitsbestätigung, bevor der Eintrag endgültig entfernt wird.
- Die Detailansicht zeigt: **Titel, Datum, Uhrzeit, Priorität und eine optionale Beschreibung**.
- **Mehrtägige Termine sind möglich.** Ein Termin kann daher über ein Start- und Enddatum laufen und wird in der Monatsansicht über die betroffenen Tage hinweg berücksichtigt.
- Zusätzlich gibt es **ganztägige Termine ohne erforderliche Uhrzeitangabe**. Das gilt auch für mehrtägige ganztägige Termine.
- Termine können **wiederkehrend** angelegt werden, mindestens mit den Wiederholungen wöchentlich, monatlich und jährlich.
- Wiederholungen benötigen standardmäßig kein festgelegtes Enddatum. Sie laufen weiter, bis der Nutzer sie manuell löscht.
- Die Beschreibung ist freiwillig; die übrigen genannten Angaben gehören zur regulären Terminansicht.
- Das Tagesfenster ist eine kompakte Detail- und Bearbeitungsansicht; die Monatsansicht bleibt die zentrale Hauptansicht.

## Bestätigte Entscheidungen — Wichtigkeit / Priorität
- Beim Anlegen eines Kalendertermins bzw. Ereignisses kann optional eine Wichtigkeit/Priorität festgelegt werden. Ein Eintrag darf auch ohne Priorität gespeichert werden und wird dann neutral dargestellt.
- Calendar übernimmt dafür das bereits in Important verwendete vierstufige Prioritätssystem. Es soll kein zweites, abweichendes Wichtigkeitssystem entstehen.
- Die Stufen und Farben entsprechen exakt Important:
  1. **Dringend** — Rot
  2. **Wichtig** — Orange
  3. **Vorläufig** — Blau
  4. **Unbefristet** — Grün
- Die Priorität dient in der Monatsansicht zur farblichen Unterscheidung der Einträge.
- Die sichtbaren Einträge bleiben textlich auf den Titel beschränkt; die Prioritätsfarbe liefert die zusätzliche visuelle Orientierung.

## Noch nicht festgelegt
- Die genaue Form der farblichen Kennzeichnung im Tagesfeld (z. B. farbiger Punkt, schmaler Streifen oder dezente Titel-Akzentfarbe).
- Die genauen Formularfelder zum Erstellen und Bearbeiten eines Eintrags.
- Die genaue Gestaltung des Tagesfensters und seiner Empty-State-Darstellung.
- Bei wiederkehrenden Terminen kann beim Löschen zwischen **Nur diesen Termin löschen** und **Gesamte Serie löschen** gewählt werden.
- Beim Bearbeiten eines einzelnen Vorkommens kann ebenfalls zwischen **Nur diesen Termin bearbeiten** und **Gesamte Serie bearbeiten** unterschieden werden.
- Eine Suchfunktion für Kalendereinträge ist vorgesehen. Sie durchsucht die Titel von Terminen und Ereignissen und berücksichtigt **vergangene, aktuelle und zukünftige** Einträge. Suchergebnisse können direkt geöffnet werden und führen in die Detailansicht des jeweiligen Eintrags.
- Zusätzlich zur Suche werden Filter nach Priorität angeboten: **Dringend, Wichtig, Vorläufig, Unbefristet und Ohne Priorität**. Damit lassen sich Einträge gezielt nach ihrer Wichtigkeitsstufe eingrenzen.
- Weitere Ansichten sind noch nicht beschlossen.

## Umsetzungsregeln
- Die Seite muss innerhalb der bestehenden globalen App-Shell bleiben.
- Keine eigene Headbar oder Sidebar und keine lokalen Kopien globaler Navigation.
- Das globale Designsystem aus `DESIGN_SYSTEM.md` ist einzuhalten: gemeinsame Inhaltsbreite, Typografie, Abstände, Kartenradien und responsive Regeln.
- Die Calendar-Implementierung soll erst erfolgen, wenn die seitenspezifischen Entscheidungen ausreichend geklärt sind.
- Offene globale Themen werden nicht vorgezogen, sondern für die zentrale Abschlussphase vorgemerkt.

## Änderungsprotokoll
- 2026-11-08: Monatsansicht als einzige Hauptansicht bestätigt; Montag als Wochenbeginn; Einträge zeigen nur Titel; mehrere Einträge erscheinen untereinander.
- 2026-11-08: Wichtigkeit/Priorität soll pro Kalendereintrag festgelegt werden können; die vier Stufen und Farben werden aus Important übernommen.
- 2026-11-08: Deadlines ausdrücklich aus dem aktuellen Calendar-Umfang ausgeschlossen und auf einen späteren Zeitpunkt verschoben.
- 2026-11-08: Klick auf einen Kalendertag öffnet ein kompaktes Tagesfenster mit den Einträgen dieses Tages; Einträge können dort hinzugefügt werden.
- 2026-11-08: Klick auf einen bestehenden Eintrag öffnet zunächst Details; Bearbeiten und Löschen liegen im Drei-Punkte-Menü; Löschen wird durch eine Sicherheitsabfrage geschützt.
- 2026-11-08: Detailansicht zeigt Titel, Datum, Uhrzeit und Priorität sowie eine optionale Beschreibung.
- 2026-11-08: Mehrtägige Termine werden unterstützt.
- 2026-11-08: Ganztägige Termine ohne Uhrzeitangabe werden ebenfalls unterstützt.
- 2026-11-08: Wiederkehrende Termine werden unterstützt; wöchentliche, monatliche und jährliche Wiederholung sind vorgesehen. Sie laufen ohne verpflichtendes Enddatum weiter, bis sie manuell gelöscht werden.
- 2026-11-08: Bei einer Wiederholungsserie kann ein einzelnes Vorkommen unabhängig von der Serie gelöscht oder bearbeitet werden. Beim Löschen bzw. Bearbeiten wird jeweils zwischen dem einzelnen Termin und der gesamten Serie unterschieden.
- 2026-11-08: Die Priorität ist optional. Einträge ohne Priorität werden neutral dargestellt.
- 2026-11-08: Eine Suche nach Termintiteln wird ergänzt. Sie findet vergangene, aktuelle und zukünftige Einträge; Suchergebnisse lassen sich direkt öffnen und zeigen die Detailansicht des jeweiligen Eintrags.
- 2026-11-08: Zusätzlich werden Prioritätsfilter für Dringend, Wichtig, Vorläufig, Unbefristet und Ohne Priorität angeboten.
- 2026-11-08: Zusätzlich zum Hinzufügen im Tagesfenster gibt es oben rechts in der Calendar-Ansicht ein kleines Plus-Symbol (+), angelehnt an das Important-Fenster. Das Datum wird passend zum aktuellen Kontext vorausgewählt (ausgewählter Tag, sonst heute), kann im Formular aber geändert werden; jedes beliebige Datum ist auswählbar.
