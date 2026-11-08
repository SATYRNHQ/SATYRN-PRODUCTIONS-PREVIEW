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
- Ein Klick auf einen bestehenden Termineintrag öffnet zunächst dessen **Detailansicht**. Er wechselt nicht direkt in den Bearbeitungsmodus.
- In der Detailansicht befindet sich ein **Drei-Punkte-Menü (⋯)** mit den Aktionen **Bearbeiten** und **Löschen**.
- **Bearbeiten** öffnet das Bearbeitungsformular für den ausgewählten Eintrag.
- **Löschen** erfordert eine Sicherheitsbestätigung, bevor der Eintrag endgültig entfernt wird.
- Das Tagesfenster ist eine kompakte Detail- und Bearbeitungsansicht; die Monatsansicht bleibt die zentrale Hauptansicht.

## Bestätigte Entscheidungen — Wichtigkeit / Priorität
- Beim Anlegen eines Kalendertermins bzw. Ereignisses soll eine Wichtigkeit/Priorität festgelegt werden können.
- Calendar übernimmt dafür das bereits in Important verwendete vierstufige Prioritätssystem. Es soll kein zweites, abweichendes Wichtigkeitssystem entstehen.
- Die Stufen und Farben entsprechen exakt Important:
  1. **Dringend** — Rot
  2. **Wichtig** — Orange
  3. **Vorläufig** — Blau
  4. **Unbefristet** — Grün
- Die Priorität dient in der Monatsansicht zur farblichen Unterscheidung der Einträge.
- Die sichtbaren Einträge bleiben textlich auf den Titel beschränkt; die Prioritätsfarbe liefert die zusätzliche visuelle Orientierung.

## Noch nicht festgelegt
- Ob die Priorität beim Erstellen verpflichtend sein muss oder optional bleibt.
- Die genaue Form der farblichen Kennzeichnung im Tagesfeld (z. B. farbiger Punkt, schmaler Streifen oder dezente Titel-Akzentfarbe).
- Die genauen Formularfelder zum Erstellen und Bearbeiten eines Eintrags.
- Die genaue Gestaltung des Tagesfensters und seiner Empty-State-Darstellung.
- Suche, Filter und weitere Ansichten sind noch nicht beschlossen.

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
