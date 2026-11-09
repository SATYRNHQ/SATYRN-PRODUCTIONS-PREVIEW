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
- Die Wochentage werden platzsparend abgekürzt dargestellt: **Mo, Di, Mi, Do, Fr, Sa, So**.
- Die Tageszahlen des aktuell angezeigten Monats werden visuell deutlicher hervorgehoben. Tage aus dem vorherigen bzw. nächsten Monat, die zur Vervollständigung des Monatsrasters sichtbar sind, erscheinen dezenter.
- Der heutige Tag wird innerhalb der Monatsansicht zusätzlich durch eine dezente farbige Markierung hervorgehoben.
- Der angezeigte Monat kann über Vor- und Zurück-Steuerung gewechselt werden.
- Termine und Ereignisse werden direkt im jeweiligen Tagesfeld dargestellt.
- Die sichtbaren Kalendereinträge zeigen ausschließlich ihren **Titel**.
- Wenn an einem Tag mehrere Einträge liegen, werden ihre Titel untereinander angezeigt.
- Pro Tagesfeld werden höchstens **drei Termineinträge** direkt angezeigt.
- Mehrtägige Terminbalken bleiben **immer sichtbar** und werden nicht durch das Platzlimit oder den Hinweis „+ weitere“ ausgeblendet. Dadurch können in einem Tagesfeld bei Bedarf mehr als drei sichtbare Einträge erscheinen.
- Mehrtägige Terminbalken werden innerhalb der Tagesfelder **immer oberhalb der normalen Termine** angeordnet. Normale Termine erscheinen darunter.
- An Wochen- und Monatsgrenzen erhält jeder sichtbare Abschnitt eines mehrtägigen Terminbalkens **abgerundete Ecken an beiden Enden**. Die Abschnitte bleiben durch ihre Position und Gestaltung als zusammengehöriger Termin erkennbar. Gibt es weitere Einträge, erscheint darunter ein Hinweis mit der Anzahl, z. B. **„+2 weitere“**. Über das Tagesfenster lassen sich alle Einträge des Tages ansehen.
- Normale Termine innerhalb eines Tages werden unterhalb der mehrtägigen Terminbalken chronologisch sortiert: **Ganztägige Termine stehen zuerst**, danach folgen Termine mit Uhrzeit vom frühesten zum spätesten.
- Haben mehrere normale Termine dieselbe Startzeit, werden sie zusätzlich nach Priorität sortiert: **Dringend → Wichtig → Vorläufig → Unbefristet → Ohne Priorität**.
- Termine, die sich zeitlich überschneiden, erhalten eine **dezente visuelle Kennzeichnung**, damit die Überschneidung erkennbar ist, ohne die Monatsansicht zu überladen.
- Eine Schaltfläche mit der exakten Beschriftung **„Aktuelles Datum“** springt jederzeit zum heutigen Datum bzw. in den Monat, in dem das heutige Datum liegt.
- Die Monatsansicht bleibt bewusst schlicht und übersichtlich.
- Samstage und Sonntage werden optisch exakt wie die übrigen Wochentage behandelt: keine abweichende Hintergrundfarbe und keine besondere Hervorhebung. Termine und Prioritäten werden unabhängig vom Wochentag gleich dargestellt.
- Beim Öffnen der Calendar-Seite wird immer automatisch der **aktuelle Monat** angezeigt; ein zuvor manuell aufgerufener anderer Monat wird nicht als Startmonat beibehalten.

## Bestätigte Entscheidungen — Schriftgröße normaler Termineinträge
- Die Termintitel innerhalb der farbigen Balken verwenden **eine mittelgroße Schrift (Variante B)**: gut lesbar, aber weiterhin platzsparend.

## Bestätigte Entscheidungen — Optik normaler Termineinträge
- Normale Termine werden in der Monatsansicht als **kompakte, leicht abgerundete farbige Balken** mit dem Termintitel dargestellt (Variante A).
- Die Balkenfarbe richtet sich nach der jeweiligen Priorität des Termins und verwendet exakt das bereits festgelegte Farbsystem: **Dringend = Rot, Wichtig = Orange, Vorläufig = Blau, Unbefristet = Grün**.
- Termine ohne Priorität erhalten eine neutrale, zurückhaltende Darstellung.
- Die Schrift im Balken bleibt gut lesbar; die Prioritätsfarbe wird für den Balken-Hintergrund verwendet.

## Bestätigte Entscheidungen — Abstände zwischen Termineinträgen
- Normale Termine innerhalb eines Tagesfeldes erhalten **Variante B: einen moderaten Abstand**. Dadurch bleiben einzelne Einträge klar unterscheidbar, ohne unnötig viel Platz zu verbrauchen.
- Die Abstände sollen über alle Tagesfelder hinweg konsistent sein.

## Bestätigte Entscheidungen — Höhe der Tagesfelder
- Die Tagesfelder in der Monatsansicht verwenden **Variante B: eine etwas höhere, gleichmäßige Höhe**. So bleibt das Raster ruhig und einheitlich, bietet aber mehr Platz für Termine als eine sehr kompakte Darstellung.
- Die Tagesfelder wachsen nicht individuell abhängig von der Anzahl der Termine; für normale Termine gilt weiterhin die festgelegte Begrenzung mit dem Hinweis „+ weitere“. Mehrtägige Terminbalken bleiben gemäß der bestehenden Sonderregel immer sichtbar.

## Bestätigte Entscheidungen — obere Kalenderleiste
- Die obere Kalenderleiste folgt **Variante C**: Der Monatstitel steht links; Monatsnavigation (Zurück/Vor), die Schaltfläche **„Aktuelles Datum“** und das Plus-Symbol stehen rechts in derselben oberen Zeile.
- Direkt darunter befindet sich eine eigene Such- und Filterleiste: zuerst das Suchfeld, darunter die Prioritätsfilter.
- Die Prioritätsfilter bleiben direkt sichtbar und verwenden die bereits festgelegten fünf Kategorien.
- Unter der Such- und Filterleiste beginnt das Kalender-Raster. Die Wochentagskürzel **Mo, Di, Mi, Do, Fr, Sa, So** stehen jeweils exakt über der zugehörigen Datumsspalte; die Datumszahlen sind innerhalb ihrer Spalten ausgerichtet.
- Die vereinbarte Anordnung ist bewusst klar getrennt: Navigation oben, Suche und Prioritäten darunter, Monatsraster anschließend.

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
- Mehrtägige Termine werden in der Monatsansicht **als zusammenhängender Eintrag über die betroffenen Tage hinweg** dargestellt. Anfang und Ende des Eintrags sind visuell erkennbar, damit der durchgehende Zeitraum als ein einzelner Termin verständlich bleibt.
- Diese zusammenhängende Darstellung bleibt auch **über Monatsgrenzen hinweg** erhalten. Liegt ein Termin beispielsweise vom 29. November bis zum 3. Dezember, wird er in beiden Monatsansichten jeweils mit dem passenden Abschnitt dargestellt; der Zusammenhang zwischen Anfang und Ende bleibt erkennbar.
- Innerhalb einer Kalenderwoche wird ein mehrtägiger Termin als **ein durchgehender Balken über die betroffenen Tagesfelder** dargestellt, statt an jedem Tag als separater Eintrag aufzutauchen. Die Darstellung wird an Wochen- bzw. Monatsgrenzen passend aufgeteilt, der Zusammenhang des Termins bleibt dabei visuell erhalten.
- Wenn sich mehrere mehrtägige Termine zeitlich überschneiden, werden ihre Balken in **unterschiedlichen Zeilen untereinander** dargestellt. Jeder Termin behält dadurch seinen eigenen, durchgehenden und eindeutig erkennbaren Balken.
- Ein mehrtägiger Terminbalken bleibt über seinen gesamten Zeitraum durchgehend sichtbar, auch wenn an einzelnen Tagen innerhalb dieses Zeitraums weitere Termine stattfinden. Zusätzliche Termine werden separat dargestellt, ohne den mehrtägigen Balken zu unterbrechen.
- Der **Titel eines mehrtägigen Balkens erscheint nur am ersten Tag** des Termins. Auf den weiteren betroffenen Tagen wird der Titel nicht wiederholt; die Balkenfläche bleibt dort frei. Anfang und Ende des Balkens bleiben visuell erkennbar.
- Die Prioritätsfarbe eines mehrtägigen Termins bleibt **über die gesamte Länge des Balkens einheitlich**. Der schmale farbige Prioritätsstreifen bzw. die entsprechende Farbcodierung wird nicht je Tag verändert.
- Zusätzlich gibt es **ganztägige Termine ohne erforderliche Uhrzeitangabe**. Das gilt auch für mehrtägige ganztägige Termine.
- Termine können **wiederkehrend** angelegt werden, mindestens mit den Wiederholungen wöchentlich, monatlich und jährlich.
- Mehrtägige Termine können ebenfalls wiederkehrend angelegt werden. Die festgelegte Dauer wird auf jedes Vorkommen der Wiederholungsserie angewendet (z. B. jährlich vom 8. bis zum 10. November).
- Wiederholungen benötigen standardmäßig kein festgelegtes Enddatum. Sie laufen weiter, bis der Nutzer sie manuell löscht.
- Für jede Wiederholungsserie kann optional ein **Enddatum** festgelegt werden (z. B. „jeden Montag bis zum 31. Dezember“). Ohne ein solches Enddatum läuft die Serie unbegrenzt weiter, bis sie manuell gelöscht wird.
- Einzelne Vorkommen einer Wiederholungsserie können als **Ausnahme übersprungen** werden, ohne die übrige Serie zu verändern. Das ausgelassene Vorkommen wird dann nicht im Kalender angezeigt; alle anderen Termine der Serie bleiben bestehen.
- Ein einzelnes Vorkommen kann außerdem **individuell bearbeitet** werden, ohne die übrige Wiederholungsserie zu verändern. Dazu gehören insbesondere Datum und Uhrzeit; die Änderung gilt ausschließlich für dieses Vorkommen.
- Beim Bearbeiten der **gesamten Wiederholungsserie** können auch die Wiederholungseinstellungen geändert werden, z. B. von wöchentlich auf monatlich. Die neue Regel gilt für die Serie insgesamt; bereits festgelegte individuelle Ausnahmen bzw. Änderungen einzelner Vorkommen sollen dabei erhalten bleiben, soweit sie weiterhin sinnvoll zugeordnet werden können.
- Im Bearbeitungsfenster einer Wiederholungsserie kann außerdem festgelegt werden, dass Änderungen an der Wiederholungsregel **erst ab einem bestimmten Datum bzw. ab einem ausgewählten Vorkommen** gelten (z. B. ab dem 1. Dezember dienstags statt montags). Diese Möglichkeit wird direkt in den bestehenden Bearbeitungsablauf integriert und nicht als separate Funktion außerhalb des Bearbeitungsfensters umgesetzt.
- Während der Einrichtung einer Wiederholung wird eine kurze, verständliche **Zusammenfassung der gewählten Regel** angezeigt (z. B. „Jeden Montag und Donnerstag bis zum 31. Dezember“).
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
- Die Prioritätsfarbe wird durch einen **schmalen farbigen Streifen** am Termineintrag dargestellt. Der Titel selbst bleibt in der normalen Textfarbe.
- Wiederkehrende Termine erhalten in der Monatsansicht zusätzlich eine **kleine, dezente Kennzeichnung** (z. B. ein Wiederholungs-Symbol), damit sie von einzelnen Terminen unterscheidbar sind. Die Kennzeichnung bleibt zurückhaltend und überlädt die kompakte Monatsansicht nicht. Das Wiederholungs-Symbol wird außerdem im **Tagesfenster** und in der **Detailansicht** des jeweiligen Termins angezeigt.
- Die sichtbaren Einträge bleiben textlich auf den Titel beschränkt; die Prioritätsfarbe liefert die zusätzliche visuelle Orientierung.

## Noch nicht festgelegt
- Das Erstellungs- und Bearbeitungsformular wird in **übersichtliche, klar voneinander getrennte Abschnitte** gegliedert. Die Angaben werden nicht als eine einzige lange, ungegliederte Feldliste dargestellt.
- Bei der Wiederholung **„Wöchentlich“** können ein oder mehrere konkrete Wochentage ausgewählt werden (z. B. Montag und Donnerstag). Die Wiederholung erfolgt an allen ausgewählten Wochentagen.
- Bei der Wiederholung **„Monatlich“** kann gewählt werden, ob der Termin an einem festen Monatstag (z. B. am 8. jedes Monats) oder an einer bestimmten relativen Wochentagsposition (z. B. am ersten Montag jedes Monats) stattfindet.
- Bei der Wiederholung **„Jährlich“** kann entweder ein festes Datum (z. B. der 8. November jedes Jahres) oder eine relative Wochentagsposition innerhalb eines Monats (z. B. der zweite Montag im November jedes Jahres) gewählt werden.
- Das Formular erhält drei feste Abschnitte:
  1. **Allgemeines** — Titel, optionale Beschreibung und Priorität.
  2. **Datum & Uhrzeit** — Startdatum, Enddatum sowie Uhrzeit bzw. Ganztägig-Option.
- Beim Erstellen eines neuen Termins wird das **Startdatum** standardmäßig auf das heutige Datum gesetzt. Das **Enddatum ist optional und bleibt standardmäßig leer**; solange kein Enddatum festgelegt wird, gilt der Termin als eintägig am Startdatum. Ein optionales Enddatum kann bei mehrtägigen Terminen ergänzt werden.
- Bei normalen Terminen mit Uhrzeit sind **Startzeit und Endzeit verpflichtend**; beide müssen ausgefüllt sein. Standardmäßig werden **09:00 Uhr als Startzeit** und **10:00 Uhr als Endzeit** vorausgewählt. Beide Uhrzeiten bleiben manuell änderbar. Bei ganztägigen Terminen entfallen beide Uhrzeitfelder.
- Die Option **„Ganztägig“** wird als Checkbox direkt im Abschnitt **„Datum & Uhrzeit“** angezeigt. Bei Aktivierung werden keine Uhrzeiten benötigt.
  3. **Wiederholung** — keine Wiederholung, wöchentlich, monatlich oder jährlich.
- Der Abschnitt **Wiederholung** ist standardmäßig eingeklappt. Er wird erst aufgeklappt, wenn eine Wiederholung aktiviert bzw. eingerichtet werden soll; bei „Keine Wiederholung“ bleibt er geschlossen.
- Die genaue Gestaltung des Tagesfensters und seiner Empty-State-Darstellung.
- Bei wiederkehrenden Terminen kann beim Löschen zwischen **Nur diesen Termin löschen** und **Gesamte Serie löschen** gewählt werden.
- Beim Bearbeiten eines einzelnen Vorkommens kann ebenfalls zwischen **Nur diesen Termin bearbeiten** und **Gesamte Serie bearbeiten** unterschieden werden.
- Eine Suchfunktion für Kalendereinträge ist vorgesehen. Sie durchsucht die Titel von Terminen und Ereignissen und berücksichtigt **vergangene, aktuelle und zukünftige** Einträge. Suchergebnisse können direkt geöffnet werden und führen in die Detailansicht des jeweiligen Eintrags.
- Eine gut erkennbare, aber optisch zurückhaltende Schaltfläche **„Alle zurücksetzen“** steht bei Suche und Prioritätsfiltern zur Verfügung. Sie leert den Suchbegriff und deaktiviert alle Prioritätsfilter gleichzeitig, sodass wieder sämtliche Termine angezeigt werden.
- Die Schaltfläche **„Alle zurücksetzen“** ist nur sichtbar bzw. aktiv, wenn mindestens ein Suchbegriff oder Prioritätsfilter gesetzt ist; ohne aktive Suche und Filter wird sie ausgeblendet bzw. deaktiviert.
- Aktivierte Prioritätsfilter werden gegenüber nicht ausgewählten Checkboxen etwas deutlicher hervorgehoben. Die Hervorhebung bleibt dezent und verwendet weiterhin die jeweilige Prioritätsfarbe, ohne die gesamte Filterfläche kräftig einzufärben.
- Suche und Prioritätsfilter wirken **gleichzeitig**: Die Suche grenzt die Einträge nach Titel ein, während die aktivierten Prioritätsfilter die erlaubten Kategorien bestimmen. Angezeigt werden nur Einträge, die beide Bedingungen erfüllen.
- Zusätzlich zur Suche werden Filter nach Priorität angeboten: **Dringend, Wichtig, Vorläufig, Unbefristet und Ohne Priorität**. Mehrere Prioritätsfilter können gleichzeitig ausgewählt werden; die Ergebnisse zeigen dann Einträge, die zu mindestens einer der ausgewählten Kategorien gehören.
- Weitere Ansichten sind noch nicht beschlossen.


## Ergänzung — Plus-Button im Tagesfenster

- Auch im geöffneten Tagesfenster gibt es oben rechts einen kleinen **Plus-Button**. Er öffnet direkt das Formular zum Erstellen eines neuen Termins; das Datum des ausgewählten Tages ist dabei vorausgewählt.

## Ergänzung — leeres Tagesfenster

- Wenn ein ausgewählter Tag keine Termine enthält, wird im Tagesfenster **keine erklärende Leerstandsmeldung** angezeigt. Die Ansicht bleibt schlicht; das Hinzufügen eines Eintrags ist weiterhin über die vorhandene Plus-Funktion möglich.

## Ergänzung — Sortierung im Tagesfenster

- Auch im Tagesfenster werden Termine chronologisch sortiert: ganztägige Termine zuerst, danach Termine mit Uhrzeit vom frühesten zum spätesten.

## Ergänzung — Anzeige mehrtägiger Termine im Tagesfenster

- Im Tagesfenster wird ein mehrtägiger Termin nicht zusätzlich mit seinem vollständigen Zeitraum beschriftet; die Tagesansicht bleibt auf den ausgewählten Tag bezogen.

## Ergänzung — Prioritätsdarstellung im Tagesfenster

- Im Tagesfenster wird die Priorität eines Termineintrags ebenfalls durch denselben schmalen farbigen Streifen wie in der Monatsansicht dargestellt; der Titel bleibt in normaler Textfarbe.

## Umsetzungsregeln
- Die Seite muss innerhalb der bestehenden globalen App-Shell bleiben.
- Keine eigene Headbar oder Sidebar und keine lokalen Kopien globaler Navigation.
- Das globale Designsystem aus `DESIGN_SYSTEM.md` ist einzuhalten: gemeinsame Inhaltsbreite, Typografie, Abstände, Kartenradien und responsive Regeln.
- Die Calendar-Implementierung soll erst erfolgen, wenn die seitenspezifischen Entscheidungen ausreichend geklärt sind.
- Offene globale Themen werden nicht vorgezogen, sondern für die zentrale Abschlussphase vorgemerkt.

## Änderungsprotokoll
- 2026-11-08: Aktivierte Prioritätsfilter werden dezent stärker hervorgehoben als nicht ausgewählte Checkboxen; die jeweilige Prioritätsfarbe bleibt erkennbar.
- 2026-11-08: „Alle zurücksetzen“ wird nur bei aktiver Suche oder mindestens einem aktiven Prioritätsfilter angezeigt bzw. aktiviert.
- 2026-11-08: Eine Schaltfläche „Alle zurücksetzen“ leert Suche und sämtliche Prioritätsfilter gleichzeitig.
- 2026-11-08: Mehrtägige Terminbalken bleiben auch bei Überschreitung des normalen Platzlimits immer sichtbar und werden nicht hinter „+ weitere“ verborgen.
- 2026-11-08: An Wochen- und Monatsgrenzen erhalten die sichtbaren Abschnitte mehrtägiger Terminbalken jeweils abgerundete Ecken an beiden Enden.
- 2026-11-08: Mehrtägige Terminbalken zählen zum Platzlimit des Tagesfeldes und können bei zu vielen Einträgen ebenfalls hinter „+ weitere“ verborgen werden; sie bleiben im Tagesfenster zugänglich.
- 2026-11-08: Zeitlich überlappende mehrtägige Termine werden in separaten Zeilen untereinander dargestellt, damit alle Balken klar erkennbar bleiben.
- 2026-11-08: Mehrtägige Terminbalken bleiben auch bei weiteren Terminen innerhalb ihres Zeitraums durchgehend; zusätzliche Termine werden separat angezeigt und unterbrechen den Balken nicht.
- 2026-11-08: Ein Klick auf einen mehrtägigen Terminbalken öffnet unabhängig von der angeklickten Stelle dieselbe Detailansicht des gesamten Termins.
- 2026-11-08: Die Prioritätsfarbe eines mehrtägigen Termins bleibt über die gesamte Länge des zusammenhängenden Balkens einheitlich.
- 2026-11-08: Der Titel eines mehrtägigen Terminbalkens wird nur am ersten Tag angezeigt und auf den folgenden Tagen nicht wiederholt.
- 2026-11-08: Mehrtägige Termine werden innerhalb einer Kalenderwoche als durchgehender Balken über die betroffenen Tagesfelder dargestellt; an Wochen- und Monatsgrenzen wird der Balken passend aufgeteilt und der Zusammenhang bleibt erkennbar.
- 2026-11-08: Die zusammenhängende Darstellung mehrtägiger Termine bleibt auch über Monatsgrenzen hinweg erhalten; der jeweilige Abschnitt erscheint in jeder betroffenen Monatsansicht.
- 2026-11-08: Mehrtägige Termine werden in der Monatsansicht als zusammenhängender Eintrag über alle betroffenen Tage dargestellt; Anfang und Ende des Eintrags bleiben visuell erkennbar.
- 2026-11-08: Das Wiederholungs-Symbol wird nicht nur in der Monatsansicht, sondern auch im Tagesfenster und in der Detailansicht angezeigt.
- 2026-11-08: Wiederkehrende Termine erhalten in der Monatsansicht eine kleine, dezente Kennzeichnung, damit sie von Einzelterminen unterscheidbar sind.
- 2026-11-08: Änderungen an einer Wiederholungsserie können im Bearbeitungsfenster wahlweise erst ab einem festgelegten Datum bzw. einem ausgewählten Vorkommen gelten.
- 2026-11-08: Beim Bearbeiten einer gesamten Wiederholungsserie können auch die Wiederholungseinstellungen geändert werden, z. B. von wöchentlich auf monatlich.
- 2026-11-08: Ein einzelnes Vorkommen einer Wiederholungsserie kann unabhängig von der Serie individuell bearbeitet werden, insbesondere hinsichtlich Datum und Uhrzeit.
- 2026-11-08: Einzelne Vorkommen einer Wiederholungsserie können als Ausnahme übersprungen werden, ohne die übrige Serie zu verändern.
- 2026-11-08: Beim Einrichten einer Wiederholung wird eine kurze verständliche Zusammenfassung der gewählten Regel angezeigt, einschließlich der ausgewählten Wochentage bzw. Wiederholungsart und eines optionalen Enddatums.
- 2026-11-08: Für Wiederholungsserien kann optional ein Enddatum festgelegt werden. Ohne Enddatum läuft die Serie unbegrenzt weiter, bis sie manuell gelöscht wird.
- 2026-11-08: Bei wöchentlicher Wiederholung können ein oder mehrere Wochentage individuell ausgewählt werden, z. B. Montag und Donnerstag.
- 2026-11-08: Bei monatlicher Wiederholung kann zwischen einem festen Monatstag (z. B. dem 8.) und einer relativen Wochentagsposition (z. B. dem ersten Montag des Monats) gewählt werden.
- 2026-11-08: Bei jährlicher Wiederholung kann zwischen einem festen Kalenderdatum (z. B. dem 8. November) und einer relativen Wochentagsposition innerhalb eines Monats (z. B. dem zweiten Montag im November) gewählt werden.
- 2026-11-08: Mehrtägige Termine können wiederkehrend angelegt werden; die festgelegte Dauer gilt für jedes Vorkommen der Serie.
- 2026-11-08: Die drei Formularabschnitte wurden festgelegt: **Allgemeines** (Titel, optionale Beschreibung, Priorität), **Datum & Uhrzeit** (Startdatum, Enddatum, Uhrzeit bzw. Ganztägig) und **Wiederholung** (keine, wöchentlich, monatlich, jährlich).
- 2026-11-08: Der Abschnitt **Wiederholung** ist im Formular standardmäßig eingeklappt und wird erst geöffnet, wenn eine Wiederholung aktiviert bzw. eingerichtet werden soll.
- 2026-11-08: Beim Erstellen eines neuen Termins ist das Startdatum standardmäßig auf heute gesetzt. Das optionale Enddatum bleibt zunächst leer; ohne Enddatum gilt der Termin als eintägig am Startdatum.
- 2026-11-08: Bei normalen Terminen sind Start- und Endzeit verpflichtend. Standardwerte sind 09:00 Uhr bis 10:00 Uhr; beide Werte bleiben änderbar. Bei ganztägigen Terminen werden keine Uhrzeiten benötigt.
- 2026-11-08: Die Option „Ganztägig“ erscheint als Checkbox direkt im Abschnitt „Datum & Uhrzeit“; bei Aktivierung werden keine Uhrzeiten benötigt.
- 2026-11-08: Das Erstellungs- und Bearbeitungsformular wird in übersichtliche, klar voneinander getrennte Abschnitte gegliedert, statt alle Angaben als eine einzige lange Feldliste darzustellen.
- 2026-11-08: Monatsansicht als einzige Hauptansicht bestätigt; Montag als Wochenbeginn; Wochentage werden abgekürzt (Mo–So); Tageszahlen des angezeigten Monats werden gegenüber den angrenzenden Tagen aus Vor- und Folgemonat hervorgehoben; Einträge zeigen nur Titel; mehrere Einträge erscheinen untereinander.
- 2026-11-08: Der heutige Tag erhält zusätzlich eine dezente farbige Hervorhebung in der Monatsansicht.
- 2026-11-08: Wochenenden erhalten keine eigene optische Gestaltung; Samstag und Sonntag werden wie alle anderen Wochentage dargestellt.
- 2026-11-08: In einem Tagesfeld werden maximal drei Einträge direkt angezeigt; zusätzliche Einträge werden über einen Hinweis wie „+2 weitere“ kenntlich gemacht und können im Tagesfenster vollständig eingesehen werden.
- 2026-11-08: Termine eines Tages werden chronologisch sortiert; ganztägige Termine stehen vor den Terminen mit Uhrzeit, die anschließend vom frühesten zum spätesten folgen.
- 2026-11-08: Zeitlich überschneidende Termine erhalten eine dezente visuelle Kennzeichnung.
- 2026-11-08: Beim Öffnen der Calendar-Seite startet die Ansicht stets im aktuellen Monat. Eine Schaltfläche „Aktuelles Datum“ springt jederzeit zurück zum heutigen Datum bzw. dessen Monat.
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
- 2026-11-08: Die Priorität wird in der Monatsansicht durch einen schmalen farbigen Streifen am Termineintrag kenntlich gemacht; der Titel bleibt in normaler Textfarbe.
- 2026-11-08: Eine Suche nach Termintiteln wird ergänzt. Sie findet vergangene, aktuelle und zukünftige Einträge; Suchergebnisse lassen sich direkt öffnen und zeigen die Detailansicht des jeweiligen Eintrags.
- 2026-11-08: Zusätzlich werden Prioritätsfilter für Dringend, Wichtig, Vorläufig, Unbefristet und Ohne Priorität angeboten. Mehrere Filter können gleichzeitig aktiv sein; Treffer aus den ausgewählten Kategorien werden gemeinsam angezeigt.
- 2026-11-08: Suche und Prioritätsfilter werden kombiniert angewendet. Angezeigt werden nur Einträge, die sowohl zum Suchbegriff als auch zu mindestens einem der aktivierten Prioritätsfilter passen.
- 2026-11-08: Zusätzlich zum Hinzufügen im Tagesfenster gibt es oben rechts in der Calendar-Ansicht ein kleines Plus-Symbol (+), angelehnt an das Important-Fenster. Das Datum wird passend zum aktuellen Kontext vorausgewählt (ausgewählter Tag, sonst heute), kann im Formular aber geändert werden; jedes beliebige Datum ist auswählbar.
- 2026-11-08: Mehrtägige Terminbalken werden innerhalb der Tagesfelder stets oberhalb der normalen Termine dargestellt; normale Termine erscheinen darunter.
- 2026-11-08: Die normalen Termine unterhalb der mehrtägigen Balken bleiben chronologisch sortiert: ganztägige zuerst, danach nach Startzeit.
- 2026-11-08: Bei gleicher Startzeit werden normale Termine zusätzlich nach Priorität sortiert: Dringend, Wichtig, Vorläufig, Unbefristet, anschließend ohne Priorität.

- 2026-11-08: Haben normale Termine dieselbe Startzeit und dieselbe Priorität, wird zusätzlich nach Erstellungszeit sortiert: Der älter erstellte Termin erscheint zuerst.

- 2026-11-08: Mehrtägige Terminbalken unterliegen ebenfalls der aktiven Suche und den Prioritätsfiltern. Wenn ein mehrtägiger Termin die Filterkriterien nicht erfüllt, wird sein Balken in der Monatsansicht ausgeblendet.

- 2026-11-08: Aktive Suchbegriffe und Prioritätsfilter bleiben beim Wechsel zwischen Monaten erhalten; sie werden nicht automatisch zurückgesetzt.

- 2026-11-08: Beim Verlassen der Calendar-Seite werden aktive Suchbegriffe und Prioritätsfilter zurückgesetzt. Beim erneuten Öffnen startet Calendar ohne zuvor gesetzte Suche oder Filter; innerhalb der geöffneten Seite bleiben sie beim Monatswechsel weiterhin aktiv.

- 2026-11-08: Suchleiste und Prioritätsfilter sind in der Calendar-Ansicht standardmäßig dauerhaft sichtbar; sie werden nicht erst über ein separates Filter-Symbol geöffnet.

- 2026-11-08: Prioritätsfilter werden als neutrale Checkboxen mit kleinen farbigen Markierungen dargestellt. Die Checkboxen bleiben optisch zurückhaltend; die Markierungen verwenden die jeweiligen Prioritätsfarben (Dringend Rot, Wichtig Orange, Vorläufig Blau, Unbefristet Grün). „Ohne Priorität“ erhält keine zusätzliche Prioritätsfarbe.

- Title search is case-insensitive: uppercase and lowercase letters are treated equally.
- Search normalizes German umlauts and common transliterations: „ä“ matches „ae“, „ö“ matches „oe“, „ü“ matches „ue“, and „ß“ matches „ss“ (e.g. „Munchen“ finds „München“).
- Multiple search terms are supported: entries match when they contain all entered terms, even if the terms are not adjacent (e.g. „Geburt Mama“ finds „Geburtstag Mama“).
- Title search uses partial matching: entering part of a title (e.g. „Geburts“) also finds matching entries such as „Geburtstag Mama“.

## Global search standard — collected for the central closing phase

The following search behaviors are intended as a shared standard for every page that has a search function, not as Calendar-only behavior. They are recorded here as a source decision and must be consolidated with the other cross-page topics during the central closing phase. Do not implement the shared rollout during page-specific work.

- 2026-11-09: Für Tage ohne Termine wird im Tagesfenster auf eine erklärende Leerstandsmeldung verzichtet; die Ansicht bleibt schlicht und das Hinzufügen bleibt möglich.

- 2026-11-09: Die chronologische Sortierung gilt auch im Tagesfenster: ganztägige Termine zuerst, anschließend nach Startzeit.

- 2026-11-09: Mehrtägige Termine werden im Tagesfenster nicht zusätzlich mit ihrem vollständigen Zeitraum beschriftet.

- 2026-11-09: Die Prioritätsfarbe wird im Tagesfenster ebenfalls durch einen schmalen farbigen Streifen dargestellt, passend zur Monatsansicht.


## Tagesfenster – Darstellung der Termine
- Gewählt wurde **Variante B: einzelne kompakte Terminkarten** statt einer einfachen Zeilenliste.
- Jeder Termin erhält eine eigene, klar abgegrenzte Karte mit abgerundeten Ecken.
- Die Priorität wird wie bereits festgelegt durch denselben schmalen farbigen Streifen dargestellt; der Titel bleibt in normaler Textfarbe.
- Die Karten sollen kompakt bleiben, damit auch mehrere Termine im Tagesfenster übersichtlich sichtbar sind.

- Die Uhrzeit wird in den Terminkarten wie in der besprochenen Veranschaulichung angeordnet; keine abweichende alternative Darstellung.


## Termin-Detailansicht
- Die Detailansicht eines Termins öffnet sich als **großes Pop-up**.
- Das Pop-up liegt über dem Kalender; der Kalender im Hintergrund bleibt unverändert und wird nicht durch eine Seitenansicht oder ein neues Layout ersetzt.
- Im Pop-up werden Titel, Datum und Uhrzeit, Priorität sowie eine vorhandene Beschreibung angezeigt.
- Das Drei-Punkte-Menü (⋯) oben rechts bietet weiterhin **Bearbeiten** und **Löschen**.

- Das Termin-Detail-Pop-up lässt sich auf drei Arten schließen: Klick auf den abgedunkelten Bereich außerhalb des Fensters, Drücken der **Escape-Taste** oder Klick auf ein **X** im Pop-up.

- Das Pop-up erhält beim Öffnen und Schließen eine **kleine, dezente Animation**; sie soll ruhig und kurz sein und den Ablauf nicht verzögern.

- Für die Größe der Termin-Detailansicht wurde **Variante A – groß und breit** gewählt. Das Pop-up soll großzügigen Platz bieten und wie ein eigener Arbeitsbereich wirken, während der Kalender dahinter unverändert bleibt.


- Für die Anordnung der Inhalte im großen Termin-Detail-Pop-up wurde **Variante A – zweispaltig** gewählt: Der Titel steht oben über die gesamte Breite. Darunter werden die Angaben in zwei nebeneinanderliegenden Bereichen angeordnet: links **Datum & Uhrzeit** sowie **Priorität**, rechts die optionale **Beschreibung**. Dadurch wird die Breite des Pop-ups sinnvoll genutzt und die Detailansicht wirkt wie ein übersichtlicher Arbeitsbereich.

- 2026-11-09: Für das große Termin-Detail-Pop-up wurde Variante A (zweispaltige Inhaltsanordnung) gewählt: Titel oben über volle Breite; darunter links Datum/Uhrzeit und Priorität, rechts die optionale Beschreibung.


## Ergänzung — Menü der Termin-Detailansicht

- Das Drei-Punkte-Menü (⋯) mit den Aktionen **Bearbeiten** und **Löschen** wird optisch und in seiner Bedienung **genau wie das entsprechende Menü im Important-Fenster** gestaltet. Calendar übernimmt hierfür die bestehende Darstellung und Interaktion, statt ein eigenes Menüdesign einzuführen.

- 2026-11-09: Das Drei-Punkte-Menü der Termin-Detailansicht (Bearbeiten/Löschen) wird exakt wie das entsprechende Menü im Important-Fenster gestaltet und bedient.


## Ergänzung — Sicherheitsabfrage beim Löschen

- Die Sicherheitsabfrage vor dem endgültigen Löschen eines Kalendereintrags wird **genau wie auf den anderen Seiten** gestaltet und bedient. Es wird kein abweichender, nur für Calendar geltender Bestätigungsdialog eingeführt.

- 2026-11-09: Die Lösch-Sicherheitsabfrage in Calendar übernimmt exakt den seitenübergreifend bereits verwendeten Dialog.


## Ergänzung — Erstellungs- und Bearbeitungsformular

- Das Formular zum Erstellen und Bearbeiten von Kalendereinträgen übernimmt **das bestehende Formular-Design und die vertraute Bedienung aus Important**.
- Es wird um die bereits für Calendar festgelegten zusätzlichen Felder und Funktionen erweitert. Die drei Abschnitte bleiben: **Allgemeines**, **Datum & Uhrzeit** und **Wiederholung**.
- Das bestehende Important-Formular dient als gestalterische und funktionale Grundlage; Calendar erhält kein vollständig eigenständiges Formularsystem.

- 2026-11-09: Das Calendar-Erstellungs- und Bearbeitungsformular übernimmt das Formular aus Important und wird um die Calendar-spezifischen Felder und Wiederholungsfunktionen erweitert.


## Ergänzung — Größe des Erstellungs- und Bearbeitungsformulars

- Das Formular zum Erstellen und Bearbeiten eines Kalendereintrags öffnet sich als **großes Pop-up (Variante A)** und bietet großzügigen Platz für die drei Formularabschnitte und die umfangreichen Wiederholungsoptionen.
- Der Kalender bleibt dabei im Hintergrund erhalten; das Formular wirkt als fokussierter Arbeitsbereich.

- 2026-11-09: Für das Calendar-Erstellungs- und Bearbeitungsformular wurde Variante A gewählt: ein großes Pop-up mit großzügigem Platz.


## Ergänzung — Schließen des Erstellungs- und Bearbeitungsformulars

- Das große Calendar-Formular lässt sich auf dieselben drei Arten schließen wie das Termin-Detail-Pop-up: über das **X** im Fenster, durch Drücken der **Escape-Taste** oder durch einen Klick auf den abgedunkelten Bereich außerhalb des Fensters.
- Der Kalender im Hintergrund bleibt dabei unverändert erhalten.

- 2026-11-09: Das große Calendar-Erstellungs- und Bearbeitungsformular kann per X, Escape-Taste und Klick außerhalb auf den Overlay-Bereich geschlossen werden.


### Create/edit form popup animation
- The create/edit form uses the same subtle, short opening and closing animation as the event detail popup.


### Create/edit form initial focus
- When the create/edit form opens, automatically focus the Title field so the user can start typing immediately.


### Create/edit form — unsaved changes protection
- If the user attempts to close the create/edit form while it contains unsaved changes, show a confirmation dialog before discarding them.
- The user must be able to choose whether to keep editing or discard the unsaved changes and close the form.
- Closing without unsaved changes continues to work directly through the X button, Escape key, or outside-overlay click.

- 2026-11-09: Confirmed a safety prompt whenever the create/edit form is closed with unsaved changes, allowing the user to keep editing or discard changes.


### Save confirmation feedback
- After successfully saving a calendar entry, show a brief, subtle confirmation message, for example **„Termin gespeichert“**.
- Show the confirmation only after the save operation succeeds; it must not imply success when saving fails.

- 2026-11-09: Confirmed brief, subtle success feedback after a calendar entry has been saved successfully.


### Success feedback after editing and deleting
- After successfully editing an existing calendar entry, show the same brief, subtle success feedback, for example **„Änderungen gespeichert“**.
- After successfully deleting a calendar entry, show the same style of feedback, for example **„Termin gelöscht“**.
- As with creation, only show success feedback after the respective operation has actually succeeded.

- 2026-11-09: Confirmed matching brief, subtle success feedback after successful editing and deletion, in addition to creation.


### Success feedback duration
- Success messages after creating, editing, or deleting a calendar entry disappear automatically after approximately **3 seconds**.
- The messages remain subtle and do not require the user to dismiss them manually.

- 2026-11-09: Confirmed that calendar success messages automatically disappear after approximately 3 seconds.


### Success notification position
- Calendar success notifications always appear in the same fixed position: **bottom-right of the screen**.
- Keep this placement consistent for successful creation, editing, and deletion.

- 2026-11-09: Confirmed a consistent bottom-right screen position for all Calendar success notifications.


### Success notification icon
- Each successful Calendar action notification includes a small, subtle **green checkmark** icon.
- Keep the icon consistent for successful creation, editing, and deletion.

- 2026-11-09: Confirmed a small green checkmark icon in all Calendar success notifications.


### Error notification appearance
- Calendar error notifications use the same fixed **bottom-right** position as success notifications.
- They use a subtle **red warning icon** instead of the green success checkmark.
- Keep the visual style consistent with the success notifications while making the error state clearly distinguishable.

- 2026-11-09: Confirmed that Calendar error notifications appear bottom-right with a subtle red warning icon.


### Error notification duration
- Calendar error notifications remain visible for **5 seconds** and then disappear automatically.
- This is slightly longer than the 3-second success notifications so the user has more time to read the error.

- 2026-11-09: Confirmed automatic dismissal of Calendar error notifications after 5 seconds.


### Error notification actions
- Calendar error notifications do **not** include an „Erneut versuchen“ button.
- They remain informational; the user can correct the issue and initiate the action again through the normal interface.

- 2026-11-09: Confirmed that Calendar error notifications do not offer a retry button.


### Multiple simultaneous error notifications
- If multiple Calendar errors occur at the same time, their notifications are **stacked vertically** in the bottom-right notification area.
- Notifications must not overlap or cover one another; each error remains independently readable and follows the established 5-second automatic dismissal behavior.

- 2026-11-09: Confirmed that simultaneous Calendar error notifications stack vertically without overlapping.


### Shared success and error notification stack
- Success and error notifications use the **same bottom-right notification stack**.
- If both types occur simultaneously, they are stacked together vertically in the order they appear, without overlapping.
- Each notification retains its own icon, message, and automatic dismissal duration (success: approximately 3 seconds; error: 5 seconds).

- 2026-11-09: Confirmed that success and error notifications share one vertically stacked bottom-right area.


### Notification animations
- Calendar success and error notifications use a **subtle, short animation** when appearing and disappearing.
- Keep the animation understated and consistent for both notification types; it must not delay the notification's message or automatic dismissal.

- 2026-11-09: Confirmed subtle, short entrance and exit animations for Calendar success and error notifications.


### Manually dismissing notifications
- Every Calendar success and error notification includes a small **X** control so the user can dismiss it manually before its automatic timeout.
- Manual dismissal removes only the selected notification and does not affect the others in the shared stack.
- Automatic dismissal remains enabled (success: approximately 3 seconds; error: 5 seconds).

- 2026-11-09: Confirmed manual dismissal via a small X for individual Calendar success and error notifications.


### Mobile adaptation — deferred
- Mobile-specific layout and responsive adaptation for the Calendar are **deferred until a much later project phase**.
- Do not expand the current Calendar planning or implementation into mobile-specific behavior now; revisit it during the later mobile optimization phase.

- 2026-11-09: User explicitly deferred mobile support/adaptation until much later in the SATYRN HQ project.


### Desktop window responsiveness
- The Calendar desktop layout flexibly adapts to different desktop browser/window sizes and grows or contracts to use the available space.
- This decision applies to desktop layouts only; mobile-specific adaptation remains deferred to the later mobile phase.

- 2026-11-09: Confirmed that the Calendar layout should flexibly adapt to available desktop window space.


### Narrow desktop window behavior
- If the available desktop window becomes too narrow to display the seven calendar columns clearly, provide **horizontal scrolling** for the calendar area.
- Preserve the seven-column month grid and its readability rather than squeezing the weekday columns too tightly.
- This is desktop behavior; mobile-specific adaptation remains deferred.

- 2026-11-09: Confirmed horizontal scrolling for the Calendar when a desktop window is too narrow to show all seven weekday columns clearly.


### Horizontal scrollbar visibility
- The horizontal scrollbar appears only when needed: it is shown when the desktop calendar area overflows horizontally because the seven weekday columns cannot fit clearly; otherwise it remains hidden.


## Ergänzung — lange Termintitel in der Monatsansicht
- Wenn ein Termintitel nicht vollständig in den farbigen Terminbalken passt, wird er am Ende abgeschnitten und mit **„…“** gekennzeichnet (Variante A).
- Die Balkenhöhe bleibt dadurch kompakt und einheitlich; der Kalender wird nicht durch mehrzeilige Titel aufgeweitet.

- 2026-11-09: Für zu lange Termintitel in der Monatsansicht wurde das Abschneiden mit Auslassungszeichen („…“) gewählt.


## Ergänzung — vollständiger Titel bei langen Terminnamen
- Beim Darüberfahren mit der Maus wird **kein zusätzlicher Tooltip** eingeblendet.
- In der Monatsansicht bleibt ein zu langer Titel mit „…“ abgeschnitten.
- Beim Anklicken des Termineintrags öffnet sich wie festgelegt das Termin-Detail-Pop-up; dort wird der **vollständige Titel** angezeigt.

- 2026-11-09: Kein Tooltip für abgeschnittene Termintitel. Der vollständige Titel wird beim Öffnen des Termin-Detail-Pop-ups angezeigt.


## Ergänzung — Breite normaler Terminbalken
- Alle normalen Terminbalken innerhalb eines Tagesfeldes erhalten **dieselbe einheitliche volle Breite** (Variante A), unabhängig von der Länge des Termintitels.
- Die Titel werden innerhalb dieser festen Balkenbreite dargestellt und bei Bedarf gemäß der bestehenden Regel mit „…“ abgeschnitten.

- 2026-11-09: Einheitliche volle Breite für alle normalen Terminbalken innerhalb eines Tagesfeldes bestätigt.


## Ergänzung — seitlicher Randabstand normaler Terminbalken
- Normale Terminbalken erhalten **Variante B: einen mittleren, gut sichtbaren Abstand** zum linken und rechten Rand des Tagesfeldes.
- Alle Balken bleiben innerhalb eines Tagesfeldes gleich breit und verwenden denselben seitlichen Abstand.

- 2026-11-09: Mittlerer seitlicher Randabstand (Variante B) für normale Terminbalken gewählt.


## Ergänzung — Rundung normaler Terminbalken
- Normale Terminbalken erhalten **Variante A: leicht abgerundete Ecken**. Sie wirken dadurch weich, bleiben aber klar als kompakte Balken erkennbar.
- 2026-11-09: Leichte Rundung (Variante A) für normale Terminbalken gewählt.


## Ergänzung — Vertikaler Abstand zwischen normalen Terminbalken
- Zwischen mehreren normalen Terminbalken gilt **Variante B: mittlerer vertikaler Abstand**. Die Einträge bleiben kompakt, sind aber klar voneinander getrennt.
- 2026-11-09: Mittlerer vertikaler Abstand (Variante B) gewählt.


## Ergänzung — Textausrichtung in normalen Terminbalken
- Der Titel in normalen Terminbalken ist **Variante A: linksbündig mit etwas Innenabstand** ausgerichtet.
- 2026-11-09: Linksbündige Textausrichtung mit Innenabstand (Variante A) gewählt.


## Ergänzung — vertikale Textausrichtung in normalen Terminbalken
- Der Termintitel wird **vertikal mittig** im normalen Terminbalken ausgerichtet (Variante A).
- 2026-11-09: Vertikale Mittelausrichtung des Titels (Variante A) gewählt.


## Ergänzung — vertikaler Innenabstand normaler Terminbalken
- Normale Terminbalken erhalten **Variante B: einen mittleren vertikalen Innenabstand**. Der Titel bleibt vertikal mittig ausgerichtet; oberhalb und unterhalb des Textes ist etwas Luft, ohne dass die Balken unnötig hoch wirken.
- 2026-11-09: Mittlerer vertikaler Innenabstand (Variante B) gewählt.


## Ergänzung — Mindesthöhe normaler Terminbalken
- Normale Terminbalken erhalten **Variante B: eine mittlere Mindesthöhe**. Sie bleiben kompakt, bieten aber ausreichend Platz für den Titel und den festgelegten mittleren vertikalen Innenabstand.
- 2026-11-09: Mittlere Mindesthöhe (Variante B) gewählt.


## Ergänzung — Abstand zwischen Tageszahl und erstem Termin
- Zwischen der Tageszahl und dem ersten Terminbalken wird **Variante B: ein mittlerer Abstand** verwendet. So bleiben Datum und Termine klar unterscheidbar, ohne unnötig viel Platz zu verbrauchen.
- 2026-11-09: Mittlerer Abstand (Variante B) gewählt.


## Ergänzung — Position der Tageszahl
- Die Tageszahl steht **Variante C: oben mittig** in der Tageszelle.
- 2026-11-09: Oben mittige Position (Variante C) gewählt.


## Ergänzung — Schriftgröße der Tageszahl
- Die Tageszahl erhält **Variante B: eine mittlere, gut lesbare Schriftgröße**. Die Zahl bleibt oben mittig positioniert und klar erkennbar, ohne übermäßig hervorzustechen.
- 2026-11-09: Mittlere Schriftgröße (Variante B) gewählt.


## Ergänzung — Schriftgewicht der Tageszahl
- Die Tageszahl erhält **Variante B: Medium** – etwas kräftiger als normale Schrift, aber nicht fett. Die mittlere Schriftgröße und die Position oben mittig bleiben bestehen.
- 2026-11-09: Schriftgewicht Medium (Variante B) gewählt.


## Ergänzung — Farbgestaltung der Tageszahlen
- Gewählt wurde eine **Kombination aus Variante B und C**: Die Tageszahlen des aktuell angezeigten Monats bleiben etwas kräftiger und klarer lesbar; Tage aus dem vorherigen bzw. nächsten Monat erscheinen dezenter. Der heutige Tag erhält zusätzlich eine dezente farbige Hervorhebung.
- 2026-11-09: Kombination aus B und C für die Tageszahlen bestätigt.


## Ergänzung — Hervorhebung des heutigen Datums
- Für den heutigen Tag wird **Variante A: ein dezenter farbiger Kreis hinter der Tageszahl** verwendet.
- Die Tageszahl sitzt **exakt horizontal und vertikal zentriert** im Kreis; der Kreis ist gleichmäßig um die Zahl ausgerichtet.
- 2026-11-09: Farbiger Kreis (Variante A) mit exakt mittig zentrierter Tageszahl bestätigt.


## Ergänzung — Größe des Heute-Kreises
- Der farbige Kreis um die heutige Tageszahl erhält **Variante B: mittlere Größe**.
- Er bietet etwas gleichmäßigen Abstand rund um die Zahl, bleibt aber dezent.
- Die Tageszahl bleibt horizontal und vertikal exakt zentriert.
- 2026-11-09: Mittlere Kreisgröße (Variante B) bestätigt.


## Ergänzung — Farbe des Heute-Kreises
- Der Kreis hinter der heutigen Tageszahl verwendet die **jeweils aktive Akzentfarbe der SATYRN-Oberfläche**.
- Die mittlere Kreisgröße und die exakt horizontale und vertikale Zentrierung der Tageszahl bleiben bestehen.
- 2026-11-09: Verwendung der aktiven Akzentfarbe bestätigt.


## Ergänzung — Heute-Markierung beim Monatswechsel
- Der Heute-Kreis wird **nur dann angezeigt, wenn der heutige Tag im aktuell angezeigten Kalendermonat liegt**.
- Beim Wechsel zu einem anderen Monat wird kein Heute-Kreis auf einem anderen Datum oder außerhalb des Monats angezeigt.
- 2026-11-09: Bestätigt.


## Ergänzung — Markierung des ausgewählten Tages
- Ein angeklickter bzw. aktuell ausgewählter Tag erhält **Variante B: eine dezente Hintergrundfarbe für die gesamte Tageszelle**.
- Diese Markierung unterscheidet sich von der Heute-Markierung: Heute behält seinen Akzentfarben-Kreis hinter der Tageszahl.
- Beide Markierungen können gleichzeitig sichtbar sein, wenn der heutige Tag ausgewählt ist.
- 2026-11-09: Variante B bestätigt.


## Ergänzung — Farbe des ausgewählten Tages
- Der Hintergrund der ausgewählten Tageszelle verwendet ebenfalls die **aktive Akzentfarbe**, jedoch mit deutlich geringerer Deckkraft als der Heute-Kreis.
- Dadurch bleibt die Auswahl dezent und unterscheidbar von der Heute-Markierung.
- 2026-11-09: Bestätigt.


## Ergänzung — Anzahl ausgewählter Tage
- Es kann immer nur **ein Tag gleichzeitig** ausgewählt sein.
- Wird ein anderer Tag angeklickt, wechselt die Auswahl direkt auf diesen Tag; die vorherige Tageszelle verliert ihre Auswahlmarkierung.
- 2026-11-09: Bestätigt.


## Ergänzung — Aufheben der Tagesauswahl

- Die Markierung des ausgewählten Tages wird aufgehoben, wenn außerhalb des Kalenderbereichs geklickt wird.
- Ein Klick auf einen anderen Tag innerhalb des Kalenders verschiebt die Auswahl direkt auf diesen Tag; es bleibt weiterhin höchstens ein Tag ausgewählt.
- Die Heute-Markierung (Akzentfarben-Kreis hinter der Tageszahl) bleibt unabhängig von der Auswahl bestehen.
- 2026-11-09: Bestätigt.
