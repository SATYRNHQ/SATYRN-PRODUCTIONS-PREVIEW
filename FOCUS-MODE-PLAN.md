# SATYRN PRODUCTIONS HQ – Focus Mode Plan

> Status: Konzeptionsphase – noch keine Umsetzung freigegeben.
> Dieses Dokument sammelt die bisher gemeinsam bestätigten Anforderungen. Der bestehende Website-Code bleibt während der Planung unangetastet.

## 1. Grundaufbau und Seitenlayout

Die Focus-Mode-Seite besteht aus fünf Bereichen:

1. **Current Session** – aktive Session, Timer, Ziel und Fortschritt.
2. **Session Setup** – Session vorbereiten und konfigurieren.
3. **Task Queue** – Aufgaben für kommende Fokus-Sessions.
4. **Statistics** – Tages-, Wochen-, Monats- und persönliche Auswertungen.
5. **Session History** – vergangene Sessions und deren Details.

Vorgesehene Anordnung:
- Oben: Current Session mit zentralem Timer.
- Mitte: Session Setup und Task Queue nebeneinander.
- Unten: Statistics und Session History.

Die History soll nicht dauerhaft als großer Bereich auf der Hauptseite erscheinen. Stattdessen gibt es oben rechts neben dem Seitentitel eine kleine, dezente Leiste mit Uhr-/Verlauf-Icon und der Beschriftung **History**. Ein Klick öffnet die vollständige History.

### Informationshierarchie und Sichtbarkeit am PC
- **Hauptebene – Current Session:** Der Bereich mit aktivem Timer, Session-Status und Fokusziel bildet den klaren visuellen Mittelpunkt. Die wichtigste Timeraktion und die jeweils relevante nächste Aktion sind unmittelbar erreichbar.
- Session-Wechsel, Notizen und Distraction Log sind direkt aus dem Current-Session-Bereich erreichbar, ohne eine andere Seite öffnen zu müssen.
- **Zweite Ebene – Arbeitsbereich:** Session Setup und Task Queue werden auf dem Desktop nebeneinander in zwei Spalten angeordnet. Session Setup enthält die Einstellungen für Ziel, Kategorie, Priorität und Dauer; die Task Queue zeigt kommende Aufgaben und Sessions.
- **Dritte Ebene – Analyse:** Statistics werden darunter kompakt dargestellt. Die vollständige Session History bleibt über den separaten History-Zugang erreichbar und nimmt nicht dauerhaft einen großen Bereich der Hauptseite ein.
- Die Informationshierarchie vermeidet unnötige Leerflächen und hält häufig benötigte Informationen direkt sichtbar.
- Weniger häufig benötigte Detailinformationen dürfen innerhalb ihres jeweiligen Bereichs aufklappbar sein; wichtige Aktionen und Statusinformationen dürfen dadurch nicht versteckt werden.
- Während einer Fokusphase gilt weiterhin der bereits definierte Distraction-Free-Modus: Der Timer steht im Mittelpunkt, Task Queue und Statistiken werden eingeklappt bzw. ausgeblendet; Notizen und Distraction Log bleiben erreichbar.
- Die Desktop-Anordnung ist die maßgebliche Layoutvariante. Auf kleineren Bildschirmen darf sie sich responsiv anpassen, ohne eine vollständige Smartphone-Bedienung von Focus Mode vorzusehen.


### Größenverhältnisse und Flächenaufteilung am PC
- **Current Session:** nimmt im normalen Desktop-Layout die volle verfügbare Inhaltsbreite ein und erhält den größten visuellen Stellenwert. Der Timer steht innerhalb dieses Bereichs zentral und bekommt ausreichend Platz für Zeitanzeige, Status, Fokusziel und direkte Aktionen.
- **Session Setup und Task Queue:** werden darunter nebeneinander in zwei Spalten dargestellt. Beide Bereiche erhalten grundsätzlich ungefähr gleich viel Platz. Wenn die Inhalte es erfordern, darf die Task Queue etwas mehr Breite erhalten, damit längere Aufgabennamen und Aufgabeninformationen gut lesbar bleiben.
- **Statistics:** werden unterhalb der beiden Arbeitsbereiche kompakt dargestellt und sollen den Current-Session-Bereich nicht verdrängen.
- **Session History:** bleibt über den separaten History-Zugang erreichbar und erhält keinen dauerhaft reservierten großen Platz im Hauptlayout.
- Es werden keine starren Pixelbreiten festgelegt. Die Bereiche nutzen die verfügbare Fensterbreite sinnvoll und passen sich responsiv an unterschiedliche Desktop-Fenstergrößen an.
- Die Anordnung soll unnötige Leerflächen vermeiden und zugleich ausreichend Abstand sowie gute Lesbarkeit gewährleisten.


### Abstände und Innenabstände am PC
- Zwischen den Hauptbereichen wird ein einheitlicher, gut erkennbarer Abstand verwendet. Die Bereiche sollen klar voneinander getrennt sein, ohne dass die Seite unnötig auseinandergezogen wirkt.
- Innerhalb der einzelnen Bereiche gibt es konsistente Innenabstände zwischen Überschrift, Inhalt und Bedienelementen.
- **Current Session:** erhält etwas großzügigere Innenabstände, damit Timer, Status, Fokusziel und Aktionen ausreichend Raum haben und nicht eingeengt wirken.
- **Session Setup und Task Queue:** verwenden aufeinander abgestimmte Innenabstände und beginnen auf derselben visuellen Höhe.
- **Statistics:** werden kompakter gehalten, bleiben aber gut lesbar und bedienbar.
- Für die gesamte PC-Ansicht gilt ein einheitliches Abstandssystem. Einzelne Abstände werden nicht willkürlich voneinander abweichend festgelegt.
- Abstände passen sich bei veränderter Fensterbreite sinnvoll an. Dabei bleiben klare Gruppierung, Lesbarkeit und eine effiziente Flächennutzung erhalten.


### Einbindung in das globale HQ-Layout
- Focus Mode und die Session History werden im zentralen Workspace des bestehenden SATYRN-HQ-Shells dargestellt. Sie bauen keine eigene, konkurrierende Seitenstruktur auf.
- Die globale **HEADBAR** bleibt über dem gesamten Seiteninhalt bestehen. Sie enthält die sechs Bereiche **Dashboard**, **Dreams**, **Opportunities**, **Projects**, **Network** und **Settings**; das Palm-Symbol sitzt exakt mittig und dient als Home-Schaltfläche.
- Die linke Sidebar bleibt den zeitlichen und planerischen Themen vorbehalten. Die rechte Sidebar bleibt den finanziellen Themen vorbehalten.
- Beide Sidebars haben dieselbe Breite und dasselbe Interaktionsverhalten: identisches Hover-Aufklappen, identische Verzögerungen beim Öffnen und Schließen, Navigation mit Icon und Bezeichnung, smaragdgrüne Kennzeichnung des aktiven Bereichs sowie abgestimmte Animationen und Übergänge.
- Beide Sidebars lassen sich unabhängig voneinander bedienen. Das Aufklappen der einen Sidebar darf die andere nicht unbeabsichtigt verändern.
- Die bisherige alte, konkurrierende Sidebar-Struktur wird nicht zusätzlich angezeigt. Focus Mode und Session History nutzen ausschließlich den gemeinsamen HQ-Shell und dessen zentrale Inhaltsfläche.
- Die Inhaltsbreite von Focus Mode richtet sich nach dem tatsächlich verfügbaren zentralen Workspace zwischen den beiden Sidebars; Timer, Session Setup, Task Queue, Statistics und History werden innerhalb dieser Fläche responsiv angeordnet.

## 2. Current Session und Timer



### Kategorieänderung bei maximal zwei offenen Sessions
- Die Begrenzung von maximal zwei offenen Sessions gilt anhand der aktuell eingestellten Kategorie der Focus-Session.
- Die Kategorien der verknüpften Important-Aufgaben beeinflussen diese Begrenzung nicht.
- Wird die Kategorie einer offenen Session geändert, prüft Focus Mode vor dem Übernehmen, ob in der Zielkategorie bereits zwei andere offene Sessions existieren.
- Ist das Limit erreicht, wird die Kategorieänderung verhindert und die bisherige Kategorie bleibt unverändert.
- Die Änderung wird erst möglich, wenn in der Zielkategorie wieder ein Platz frei ist.

### Timerdarstellung
- Große, gut lesbare Zeitanzeige.
- Kreisförmiger Fortschrittsindikator mit flüssiger Animation.
- Verbleibende Zeit ist die Hauptanzeige.
- Zusätzlich kleine Anzeige der bereits vergangenen Zeit.
- Dynamischer Status oberhalb der Zeitanzeige, jederzeit eindeutig sichtbar:
  - `FOCUS` – eine Fokusphase läuft aktiv.
  - `BREAK` – die konfigurierte Pause läuft; es wird nicht zwischen Short Break und Long Break unterschieden.
  - `PAUSED` – die Session wurde manuell pausiert und kann fortgesetzt werden.
  - `INTERRUPTED` – die Session wurde unterbrochen und bleibt wiederaufnehmbar.
  - `COMPLETED` – die Session wurde erfolgreich abgeschlossen.
  - `EXPIRED` – die aktuelle Fokus- oder Pausenzeit ist abgelaufen und wartet auf die vorgesehene nächste Aktion.
- Die Statusdarstellung unterscheidet aktive, pausierte, unterbrochene und abgeschlossene Zustände auch optisch klar voneinander.
- Das aktuelle Fokusziel wird direkt im Timerbereich angezeigt und kann bei Bedarf während der Session geändert werden.


### Visuelle Gestaltung des Timers
- Die verbleibende Zeit wird sehr groß und zentral dargestellt und bildet den visuellen Schwerpunkt des Current-Session-Bereichs.
- Ein klar erkennbarer kreisförmiger Fortschrittsring umgibt die Zeitanzeige und aktualisiert sich flüssig entsprechend dem tatsächlichen Timerfortschritt.
- Der aktuelle Status (z. B. `FOCUS`, `BREAK`, `PAUSED`) steht gut sichtbar oberhalb der Zeitanzeige.
- Das aktuelle Fokusziel wird direkt unterhalb der Zeitanzeige dargestellt, damit jederzeit klar ist, woran gearbeitet wird.
- Die bereits vergangene Zeit wird kleiner und ergänzend angezeigt; sie konkurriert nicht mit der verbleibenden Zeit um Aufmerksamkeit.
- Die primäre Aktion **Pause/Resume** befindet sich unmittelbar unter oder neben der Zeitanzeige. Weitere Aktionen wie **Reset**, **Complete Session** und **Interrupt** sind klar davon getrennt und übersichtlich angeordnet.
- Die Gestaltung wirkt ruhig, hochwertig und aufgeräumt. Der Timer bleibt eindeutig der Mittelpunkt, ohne durch zusätzliche Anzeigen oder Bedienelemente überladen zu werden.


### Farbkonzept und visuelle Timerzustände
- Die Timerzustände verwenden eine gemeinsame, ruhige SATYRN-Farbwelt. Jeder Zustand erhält eine eigene, eindeutig wiedererkennbare Akzentfarbe:
  - `FOCUS`: SATYRN-Akzentfarbe (Türkis) für aktive Konzentration.
  - `BREAK`: sanftes Grün für Erholung und Pause.
  - `PAUSED`: warmes Amber für eine bewusst angehaltene Session.
  - `INTERRUPTED`: gedämpftes Orange für eine unterbrochene, weiterhin offene Session.
  - `COMPLETED`: sattes Grün für einen erfolgreich abgeschlossenen Zustand.
  - `EXPIRED`: neutrales Grau mit Amber-Akzent für einen beendeten Zeitabschnitt, der auf die nächste Aktion wartet.
- Die jeweilige Zustandsfarbe wird konsistent für Fortschrittsring, Statusanzeige und dezente Akzente verwendet.
- Der dunkle, hochwertige Hintergrund und die bestehende SATYRN-Designsprache bleiben erhalten.
- Es werden keine grellen Vollflächen oder übermäßig leuchtenden Farben eingesetzt. Die Akzente sollen ruhig, hochwertig und gut unterscheidbar wirken.
- Farbe ist nie der einzige Informationsträger: Statusbeschriftungen, Symbole und ausreichende Kontraste machen jeden Zustand auch unabhängig von der Farbwahrnehmung eindeutig.
- Die Farbzuordnung bleibt in Focus Mode, Session History und Statistics konsistent.
- Die SATYRN-Akzentfarbe für `FOCUS` wird mit dem bestehenden Website-Design abgestimmt, damit kein abweichendes Farbsystem entsteht.


### Animationen und visuelle Übergänge
- Der kreisförmige Timer-Fortschrittsring bewegt sich gleichmäßig und bildet den tatsächlichen Zeitfortschritt ab.
- Beim automatischen Übergang von `FOCUS` zu `BREAK` erfolgt ein sanfter visueller Übergang einschließlich des Wechsels von Türkis zu Grün.
- Beim Pausieren stoppt die Fortschrittsanimation unmittelbar; der Status wechselt sichtbar zu `PAUSED` und der zugehörigen Amber-Farbe.
- Beim Fortsetzen wird die Animation flüssig anhand des tatsächlichen Timerstands weitergeführt.
- `INTERRUPTED` erhält eine dezente visuelle Hervorhebung, die den unterbrochenen, weiterhin offenen Zustand klar erkennen lässt.
- `COMPLETED` wird durch eine kurze, zurückhaltende Abschlussanimation kenntlich gemacht.
- Bei `EXPIRED` erfolgt ein klarer, ruhiger visueller Übergang mit einem eindeutigen Hinweis auf die erwartete nächste Aktion.
- Animationen bleiben insgesamt ruhig, hochwertig und zurückhaltend. Hektische, übermäßig auffällige oder dekorative Effekte werden vermieden.
- Animationen dürfen Timersteuerung, Eingaben oder andere Bedienaktionen niemals verzögern. Die tatsächliche Zeitmessung und Zustandslogik sind unabhängig von Animationen.
- Die Systemeinstellung für reduzierte Bewegung (`prefers-reduced-motion`) wird respektiert. Bei aktivierter Reduzierung werden Animationen minimiert oder durch unmittelbare, gut erkennbare Zustandswechsel ersetzt.


### Visuelle Anordnung der Session-Steuerung
- **Pause / Resume:** Die primäre Timeraktion ist der größte und auffälligste Button. Sie befindet sich unmittelbar unter oder neben der Zeitanzeige und ist mit einem Klick erreichbar.
- **Complete Session:** Bleibt gut sichtbar, ist aber visuell gegenüber Pause/Resume nachrangig. Die Aktion schließt die Session erfolgreich ab.
- **Interrupt:** Wird als eigenständige Aktion dargestellt und klar von **Complete Session** unterschieden, damit eine Unterbrechung nicht mit einem erfolgreichen Abschluss verwechselt wird.
- **Reset:** Wird zurückhaltender gestaltet und räumlich von den regulären Hauptaktionen getrennt. Vor dem Zurücksetzen ist eine Sicherheitsabfrage erforderlich.
- **Skip Break:** Wird nur während einer laufenden oder manuell pausierten Pause angeboten.
- **Verwerfen:** Wird ausschließlich für eine unterbrochene Session angeboten und erfordert eine separate Sicherheitsabfrage.
- Die verfügbaren Aktionen richten sich jederzeit nach dem aktuellen Session-Status. Nicht zulässige oder nicht sinnvolle Aktionen werden nicht angezeigt bzw. sind nicht bedienbar.
- Die visuelle Hierarchie macht die wichtigste Aktion sofort erkennbar, verhindert Verwechslungen und reduziert das Risiko versehentlicher Datenverluste.

### Darstellung der Session-Informationen
- Das **Fokusziel** wird direkt im Current-Session-Bereich unterhalb der Zeitanzeige gut lesbar und prominent dargestellt.
- Der **Session-Name** ist klar erkennbar, bleibt aber visuell dem Fokusziel und dem Timer untergeordnet.
- Die **Kategorie** wird als dezentes, farbiges Label angezeigt. Die dafür verwendete Farbe entspricht dem bestehenden Kategoriensystem der Important-Seite.
- Die **Priorität** wird als kleines, eindeutiges Symbol bzw. Label entsprechend dem bestehenden Prioritätssystem der Important-Seite dargestellt.
- Der **aktuelle Session-Status** bleibt jederzeit sichtbar und verwendet die bereits festgelegte Statusbeschriftung und Zustandsfarbe.
- Die kompakte Übersicht der offenen Sessions zeigt pro Eintrag mindestens Session-Name bzw. Fokusziel sowie den aktuellen Status. Kategorie und Priorität dürfen ergänzend erscheinen, sofern die Übersicht dadurch nicht überladen wird.
- Fokusziel, Kategorie und Priorität bleiben während einer laufenden Session änderbar. Für Kategorieänderungen gelten unverändert die bestehende Begrenzung von maximal zwei offenen Sessions pro Kategorie und die dazugehörige Prüfung vor dem Übernehmen.
- Die Informationsdarstellung bleibt ruhig und übersichtlich. Sie ergänzt den Timer, ohne mit der Zeitanzeige um Aufmerksamkeit zu konkurrieren.

### Timersteuerung und Ablauf
- Die primären Aktionen sind direkt im Focus-Fenster erreichbar. Sichtbarkeit und Verfügbarkeit richten sich nach dem aktuellen Session-Status.
- Verfügbare Aktionen je Zustand:
  | Zustand | Direkt verfügbare Aktionen |
  |---|---|
  | Fokus läuft | **Pause**, **Reset**, **Complete Session**, **Interrupt** |
  | Manuell pausiert | **Resume**, **Reset**, **Complete Session**, **Interrupt** |
  | Pause läuft | **Pause**, **Skip Break**, **Interrupt** |
  | Pause manuell pausiert | **Resume**, **Skip Break**, **Interrupt** |
  | Unterbrochen | **Resume**, **Verwerfen** |
  | Fokuszeit ohne eingestellte Pause abgelaufen | **EXPIRED** – nächste Fokusphase manuell starten |
  | Pausenzeit abgelaufen | **EXPIRED** – nächste Fokusphase manuell starten |
  | Fokuszeit mit eingestellter Pause abgelaufen | Automatischer Wechsel zu **BREAK**; keine Bestätigung erforderlich |
- Nicht zum aktuellen Zustand passende Aktionen werden nicht angeboten bzw. sind nicht bedienbar.
- **Reset** und endgültiges **Verwerfen** erfordern jeweils eine separate Sicherheitsabfrage.
- **Interrupt** bleibt klar von **Complete Session** und **Reset** getrennt: Eine Unterbrechung erhält die Session zur späteren Fortsetzung; Complete Session schließt sie erfolgreich ab.
- Fokus- und Pausentimer können jederzeit pausiert und an derselben Stelle fortgesetzt werden.
- Während einer Pause beziehen sich **Pause** und **Resume** ausschließlich auf den Pausentimer. **Skip Break** beendet die Pause und wartet auf den manuellen Start der nächsten Fokusphase. **Interrupt** unterbricht die gesamte Session und erhält sie zur späteren Wiederaufnahme.
- Ein Session-Reset ist während einer Pause nicht verfügbar; Reset bezieht sich auf die Fokusphase und kann nur in einem dafür vorgesehenen Fokuszustand ausgelöst werden.
- Ein Reset-Button ist vorhanden. Vor dem Zurücksetzen erscheint eine Sicherheitsabfrage.
- Eine Session kann vorzeitig mit **Complete Session** erfolgreich abgeschlossen werden. Die tatsächliche Dauer wird gespeichert und in History sowie Statistiken berücksichtigt.
- Eine Session kann unterbrochen werden, ohne sie endgültig abzuschließen. Sie bleibt als offene, wiederaufnehmbare Session erhalten und wird in der History als unterbrochen dokumentiert; die tatsächlich investierte Fokuszeit bleibt erhalten. Das endgültige Verwerfen ist eine getrennte Aktion.
- **Complete Session** ist davon getrennt: Damit kann eine Session auch vor Ablauf des Timers bewusst erfolgreich beendet werden. Sie verschwindet dann aus der offenen Liste und wird in History sowie Statistiken übernommen.
- Wenn eine Fokusphase endet, wechselt der Timer automatisch in die eingestellte Pause. Bei der bewusst gewählten Option „Keine Pause“ wird keine Pause gestartet; der Timer wartet stattdessen auf den manuellen Start der nächsten Fokusphase.
- Nach Ende der Pause wartet der Timer auf einen manuellen Start der nächsten Fokusphase.
- Die Pause kann über **Skip Break** übersprungen werden. Danach wartet der Timer auf den manuellen Start der nächsten Fokusphase.
- Vor Beginn einer Fokusphase gibt es einen kurzen Countdown: `3 – 2 – 1 – FOCUS`.

### Sichtbare Timer-Endzustände im Focus-Fenster
- Jeder Timer-Endzustand wird direkt im Focus-Fenster eindeutig angezeigt und mit einer kurzen, passenden Handlungsaufforderung verbunden.
- **Fokuszeit abgelaufen – Pause eingestellt:** Der Fokusabschnitt endet und der Timer wechselt direkt in den Status `BREAK`; der Übergang wird visuell deutlich angezeigt. `EXPIRED` wird für diesen automatischen Übergang nicht zwischengeschaltet.
- **Fokuszeit abgelaufen – keine Pause:** Der Status wechselt auf `EXPIRED`; es wird keine Pause gestartet und das Focus-Fenster zeigt an, dass die nächste Fokusphase manuell gestartet werden kann.
- **Pause abgelaufen:** Der Status wechselt auf `EXPIRED`; das Fenster zeigt klar an, dass die Pause beendet ist und auf den manuellen Start der nächsten Fokusphase wartet.
- `EXPIRED` bedeutet im Focus-Fenster immer, dass ein Zeitabschnitt beendet ist und eine bewusste nächste Aktion erwartet wird. Bei einem automatischen Übergang von Fokus zu Pause wird `EXPIRED` nicht angezeigt.
- **Skip Break:** Nach dem Überspringen der Pause wird deutlich angezeigt, dass die nächste Fokusphase manuell gestartet werden kann.
- Eine abgelaufene Pause oder ein abgeschlossener Fokusabschnitt startet niemals selbstständig eine weitere Fokusphase.
- Die visuelle Meldung und die angebotene Aktion müssen zum tatsächlichen Zustand passen; es darf keine mehrdeutige oder veraltete Aufforderung angezeigt werden.

### Session-Wechsel direkt im Focus-Fenster
- Im Focus-Fenster ist eine kompakte Liste aller offenen Sessions direkt erreichbar; zum Wechseln muss nicht erst eine andere Website-Seite geöffnet werden.
- Jede Session zeigt ihren Namen bzw. ihr Fokusziel und einen klar erkennbaren Status: laufend, pausiert oder unterbrochen.
- Die Liste übernimmt die bereits festgelegte Sortierung: laufende Session zuerst, danach pausierte und anschließend unterbrochene Sessions; innerhalb eines Status steht die zuletzt aktive Session weiter oben.
- Beim Auswählen einer anderen Session wird die bisher laufende Session automatisch pausiert, bevor die ausgewählte Session geladen wird.
- Das bloße Auswählen bzw. Laden einer pausierten oder unterbrochenen Session startet ihren Timer nicht automatisch. Eine solche Session wird erst durch die ausdrückliche Aktion **Resume** fortgesetzt.
- Beim Wechsel werden der gespeicherte Timerstand und sämtliche Session-Daten wiederhergestellt, insbesondere Notizen, Distraction Log, Unteraufgaben und Verknüpfungen.
- Es darf weiterhin nur ein Timer gleichzeitig laufen. Ein Session-Wechsel setzt keine Session zurück und darf keine gespeicherten oder noch nicht synchronisierten Änderungen verlieren.
- Die bestehenden Regeln für maximale Anzahl, Status, Sortierung und Wiederaufnahme offener Sessions gelten unverändert.

### Timer im Hintergrund und beim Tab-Wechsel
- Der Timer läuft zuverlässig weiter, wenn der Nutzer zu einem anderen Browser-Tab wechselt, den Browser minimiert oder in einem anderen Programm arbeitet.
- Die Zeitmessung basiert auf verlässlichen Zeitstempeln bzw. einer absoluten Zeitreferenz und nicht darauf, dass eine Animation oder ein JavaScript-Intervall im Vordergrund kontinuierlich ausgeführt wird.
- Beim Zurückkehren in den Focus-Tab wird der tatsächliche Timerstand unmittelbar korrekt dargestellt; Hintergrunddrosselung des Browsers darf die gemessene Dauer nicht verfälschen.
- Timer-Ende und ein dadurch vorgesehener Wechsel in die konfigurierte Pause werden auch bei inaktivem Tab korrekt verarbeitet. Es startet dadurch keine neue Fokusphase automatisch.
- Benachrichtigungen über Timer-Ende oder Pausenwechsel werden pro Ereignis höchstens einmal ausgelöst. Ist der Tab im Hintergrund, wird eine geeignete Browser-Benachrichtigung verwendet, sofern der Nutzer die Berechtigung erteilt hat; andernfalls wird der Zustand beim Zurückkehren klar angezeigt.
- Beim erneuten Aktivieren des Tabs werden Timerstatus, verbleibende Zeit und verfügbare Aktionen mit dem tatsächlichen Session-Zustand abgeglichen.
- Der Wechsel zwischen Focus Mode und anderen Programmen (z. B. FL Studio) darf den Timer weder pausieren noch zurücksetzen.

### Nutzung mit mehreren Monitoren
- Focus Mode kann unabhängig davon genutzt werden, auf welchem Monitor das Browserfenster geöffnet ist.
- Eine typische Nutzung ist Focus Mode auf einem zweiten Bildschirm und die jeweilige Arbeitssoftware (z. B. FL Studio) auf dem Hauptbildschirm.
- Das Verschieben des Browserfensters zwischen Monitoren darf Timer, Session-Zustand, Notizen oder Speicherstatus nicht zurücksetzen oder verändern.
- Die Oberfläche passt sich an die tatsächlich verfügbare Fenstergröße und den Viewport an, nicht an eine fest angenommene Monitorauflösung.
- Timer, Status und wichtigste Aktionen bleiben bei üblichen Fenstergrößen gut lesbar und erreichbar. Bei schmalem oder teilweise verdecktem Fenster darf das Layout sinnvoll umbrechen bzw. scrollen, ohne Funktionen zu verlieren.
- Es wird keine bestimmte Monitoranzahl, Auflösung oder Anordnung vorausgesetzt. Es gibt keine automatische Fensterpositionierung oder erzwungene Vollbilddarstellung.
- Die Bedienung und Zeitmessung bleiben auch dann zuverlässig, wenn Focus Mode auf einem Monitor geöffnet ist und der Nutzer auf einem anderen Monitor arbeitet.

### Pausen-Erinnerung
- Zum Beginn einer Pause gibt es einen kurzen, angenehmen Doppelton.
- Beim Ende der Pause gibt es ebenfalls einen kurzen Doppelton.
- Keine Dauertöne.
- Zusätzlich erscheint eine deutliche visuelle Benachrichtigung.

### Fokus- und Pausendauern
Vordefinierte Modi:
| Modus | Fokusdauer | Pause |
|---|---:|---:|
| Pomodoro | 25 Minuten | 5 Minuten |
| Extended | 50 Minuten | 10 Minuten |
| Deep Work | 90 Minuten | 15 Minuten |
| Long Session | 2 Stunden | 20 Minuten |
| Marathon | 3 Stunden | 30 Minuten |
| Custom | frei einstellbar | frei einstellbar |

Auch längere Sessions sind pausierbar. Der Wechsel in die Pause erfolgt nach dem eingestellten Intervall automatisch.

### Notizen und Ablenkungen
- Einklappbarer Notizbereich im Current Session-Bereich.
- Notizen werden automatisch gespeichert und mit der jeweiligen Session verknüpft.
- Notizen sind später in der Session History abrufbar.
- Separater **Distraction Log**, um Ablenkungen schnell festzuhalten.
- Distraction-Log-Einträge werden automatisch gespeichert.
- Einträge können später bearbeitet und gelöscht werden.
- Das Distraction Log bleibt auch nachträglich über die Session History zugänglich.

### Anordnung und Bedienung von Notizen und Distraction Log
- **Notizen** und **Distraction Log** sind direkt im Current-Session-Bereich erreichbar, ohne die Focus-Mode-Seite verlassen zu müssen.
- Beide Funktionen werden als getrennte, aufklappbare Bereiche dargestellt, damit der Timer im normalen Layout übersichtlich bleibt.
- Der Notizbereich enthält ein ausreichend großes Textfeld für Gedanken, Ideen und Arbeitsnotizen. Notizen werden automatisch gespeichert und bleiben dauerhaft mit der jeweiligen Session verknüpft.
- Der Distraction Log ist ein eigener Bereich neben oder unter den Notizen. Eine Ablenkung kann mit einem Klick als neuer Eintrag hinzugefügt werden; eine kurze Beschreibung ist optional.
- Jeder Distraction-Log-Eintrag erhält automatisch einen Zeitstempel und kann nachträglich bearbeitet oder gelöscht werden.
- Notizen und Distraction-Log-Einträge bleiben in der Session History abrufbar.
- Im Distraction-Free-Modus bleiben beide Bereiche erreichbar, verdrängen aber nicht den Timer als visuellen Mittelpunkt.
- Für beide Funktionen gelten die bereits festgelegten Regeln zum automatischen Speichern, lokalen Zwischenspeichern und zur Synchronisierung. Ein Session-Wechsel darf keine Änderungen verlieren.

### Speicherstatus im Focus-Fenster
- Im Focus-Fenster ist jederzeit ein kompakter, gut erkennbarer Speicherstatus sichtbar.
- Der Status unterscheidet eindeutig:
  - `SAVED` – alle Änderungen sind erfolgreich gespeichert und synchronisiert.
  - `SAVING` – Änderungen werden gerade gespeichert bzw. synchronisiert.
  - `UNSAVED` – Änderungen warten noch auf die Speicherung oder Synchronisierung.
  - `SAVE ERROR` – die Speicherung oder Synchronisierung ist fehlgeschlagen.
- Notizen, Distraction-Log-Einträge und Änderungen an der offenen Session werden automatisch gespeichert.
- Bei Verbindungsproblemen bleiben Änderungen lokal erhalten und werden nach Wiederherstellung der Verbindung erneut synchronisiert.
- Ein Session-Wechsel darf keine noch nicht gespeicherten Änderungen verlieren; der Speicherstatus muss dabei korrekt berücksichtigt werden.
- Bei einem Speicherfehler wird eine verständliche Meldung angezeigt. Betroffene Änderungen bleiben, soweit technisch möglich, lokal erhalten und können erneut gespeichert werden.


### Website schließen bei fehlgeschlagener Speicherung
- Änderungen werden zunächst lokal dauerhaft zwischengespeichert, bevor bzw. während die Synchronisierung mit dem zentralen Datenstand erfolgt.
- Schlägt die zentrale Speicherung oder Synchronisierung fehl, bleiben lokal erfolgreich gesicherte Änderungen beim Schließen und erneuten Öffnen der Website erhalten und werden später erneut synchronisiert.
- Beim erneuten Öffnen wird sichtbar darauf hingewiesen, wenn noch nicht synchronisierte Änderungen vorhanden sind; der Speicherstatus bleibt bis zur erfolgreichen Synchronisierung entsprechend **UNSAVED** bzw. **SAVE ERROR**.
- Ist bereits das lokale Zwischenspeichern fehlgeschlagen, wird dies ausdrücklich als kritischer Speicherfehler angezeigt. Solange die Seite geöffnet ist, bleiben die Änderungen soweit technisch möglich im Arbeitsspeicher erhalten; vor einer vom Nutzer ausgelösten Navigation wird nach Möglichkeit gewarnt.
- Es wird nicht behauptet, dass Änderungen nach einem Browser- oder Geräteabsturz wiederherstellbar sind, wenn sie zuvor nicht dauerhaft lokal gespeichert werden konnten.
- Ein erneuter Speicher- oder Synchronisierungsversuch darf vorhandene Änderungen nicht stillschweigend überschreiben oder doppelt anlegen.


### Wiederherstellung nach unerwartetem Absturz oder Stromausfall
- Focus Mode speichert den Session-Zustand und Änderungen fortlaufend in einem dauerhaft verfügbaren lokalen Zwischenspeicher.
- Nach einem unerwarteten Browser-, Tab- oder Geräteabsturz bzw. Stromausfall wird beim nächsten Öffnen automatisch der letzte erfolgreich lokal gespeicherte Zustand wiederhergestellt.
- Timerstatus und verbleibende Zeit werden anhand der gespeicherten Zeitinformationen und der tatsächlich verstrichenen Zeit korrekt rekonstruiert; es erfolgt kein automatischer Neustart einer Fokus- oder Pausenphase.
- Änderungen, die vor dem Absturz noch nicht erfolgreich lokal gespeichert wurden, können nicht garantiert wiederhergestellt werden. Der wiederhergestellte Stand wird deshalb klar als letzter lokal gesicherter Stand erkennbar gemacht.
- Noch nicht zentral synchronisierte, aber lokal gesicherte Änderungen werden nach Wiederherstellung erneut zur Synchronisierung vorgemerkt.
- Die Wiederherstellung darf keine doppelten Sessions, doppelten Zeitabschnitte oder widersprüchlichen Timerzustände erzeugen.


### Fehler bei vollem oder nicht verfügbarem lokalem Speicher
- Focus Mode erkennt, wenn der lokale Speicher voll ist, das Speicherlimit erreicht wurde oder der Browser den Zugriff auf den lokalen Speicher verweigert.
- In diesem Fall erscheint eine deutliche, verständliche Warnung. Der Speicherstatus darf betroffene Änderungen nicht fälschlich als **SAVED** anzeigen.
- Solange die Seite geöffnet ist, bleiben neue Änderungen soweit technisch möglich im Arbeitsspeicher erhalten; die Anwendung versucht die Speicherung nach Behebung des Problems erneut.
- Ist eine Internetverbindung verfügbar, darf Focus Mode zusätzlich versuchen, Änderungen direkt zentral zu synchronisieren. Eine zentrale Synchronisierung gilt erst nach bestätigter erfolgreicher Speicherung als abgeschlossen.
- Bereits lokal oder zentral erfolgreich gespeicherte Sessions, History-Einträge und Nutzerdaten werden nicht automatisch gelöscht, um Speicherplatz freizugeben.
- Die Warnung erklärt in verständlicher Sprache, dass lokal nicht dauerhaft gesicherte Änderungen bei einem Schließen oder Absturz der Seite verloren gehen können, und nennt geeignete nächste Schritte (z. B. Speicherplatz freigeben oder Browserzugriff auf den Speicher wieder ermöglichen).
- Sobald der Speicher wieder verfügbar ist, werden ausstehende Änderungen erneut gespeichert und synchronisiert; der Status wechselt erst nach bestätigter Sicherung zurück auf **SAVED**.

### Bedienbarkeit und Gerätepriorität
- Der PC/Desktop ist die primäre Arbeitsumgebung für Focus Mode. Das vollständige Arbeiten mit Timer, Sessions, Task Queue, Notizen, Statistiken und History wird auf die PC-Bedienung ausgelegt.
- **Mausbedienung am PC:**
  - Die primäre Timeraktion (Pause/Resume) und die jeweils wichtigste nächste Aktion stehen direkt unter bzw. unmittelbar neben der Zeitanzeige.
  - Offene Sessions können mit einem Klick über die kompakte Session-Liste gewechselt werden.
  - Das Notizfeld ist direkt aus dem Current-Session-Bereich erreichbar, ohne eine andere Seite öffnen zu müssen.
  - Aufgaben aus der Task Queue können direkt ausgewählt und der aktuellen Session zugeordnet werden.
  - Wichtige Aktionen und Informationen dürfen nicht ausschließlich beim Darüberfahren mit der Maus (Hover) sichtbar oder erreichbar sein.
  - Sicherheitsrelevante Aktionen wie Reset und endgültiges Verwerfen erfordern eine eindeutige, separate Bestätigung, damit versehentliche Klicks nicht zu Datenverlust führen.
- **Desktop:** Timer, Session-Status und wichtigste Aktionen sind ohne unnötiges Scrollen erreichbar. Die gesamte Focus-Mode-Funktionalität steht zur Verfügung.
- **Tablet:** Das Layout darf sich responsiv an den verfügbaren Platz anpassen. Eine vollständige Optimierung aller Focus-Mode-Funktionen für Tablets ist gegenüber der PC-Version nachrangig.
- **Smartphone:** Eine vollständige Bedienung von Focus Mode ist ausdrücklich nicht vorgesehen. Keine Smartphone-spezifische Timersteuerung, Sticky-Timer-Ansicht oder Session-Verwaltung planen.
- Die spätere Smartphone-Nutzung der Website soll sich zunächst ausschließlich auf das schnelle Festhalten/Sammeln von Ideen beschränken. Diese Quick-Capture-Funktion wird als eigener, websiteweiter Mobil-Anwendungsfall geplant; Details gehören nicht in die Focus-Mode-Bedienung.
- Auf dem Smartphone erfasste Ideen sollen später auch am PC verfügbar sein. Die konkrete Erfassung, Ablage und Synchronisierung wird im übergreifenden Konzept für Quick Capture festgelegt.
- Für die PC-Bedienung gelten folgende Tastaturkürzel:
  - `Leertaste`: aktive Fokus- oder Pausenphase pausieren bzw. fortsetzen.
  - `R`: Fokusphase zurücksetzen; die bestehende Sicherheitsabfrage bleibt verpflichtend.
  - `N`: Notizfeld öffnen bzw. den Eingabefokus dorthin setzen.
  - `[`: vorherige offene Session auswählen.
  - `]`: nächste offene Session auswählen.
- Session-Wechsel per Tastatur folgt denselben Regeln wie per Maus: Eine laufende Session wird pausiert; die ausgewählte Session startet nicht automatisch.
- Tastaturkürzel werden nicht ausgelöst, solange in einem Text- oder Eingabefeld geschrieben wird oder ein anderes Bedienelement die Eingabe verarbeitet.
- Alle PC-Aktionen bleiben zusätzlich über klar beschriftete, sichtbare Bedienelemente erreichbar; die Bedienung ist nicht ausschließlich von Tastaturkürzeln abhängig.
- Statusanzeigen, Beschriftungen und Bedienelemente müssen ausreichend kontrastreich und eindeutig erkennbar sein. Der aktuelle Tastaturfokus muss sichtbar sein.
- Aktionen dürfen nicht durch Doppelklicks oder schnelle Mehrfachbetätigung unbeabsichtigt mehrfach ausgeführt werden. Während eine Aktion verarbeitet wird, wird eine weitere identische Auslösung zuverlässig verhindert.
- Die allgemeinen Website-Regeln für Responsive Layout, Tastaturbedienung und Barrierefreiheit werden wiederverwendet; es werden keine widersprüchlichen Sonderregeln nur für das Focus-Fenster eingeführt.

### Distraction-Free-Modus
- Wird beim Start einer Fokusphase automatisch aktiviert.
- Timer steht im Mittelpunkt.
- Task Queue und Statistiken werden währenddessen eingeklappt bzw. ausgeblendet.
- Notizen und Distraction Log bleiben erreichbar.
- Der Modus kann jederzeit manuell verlassen werden.
- Nach Ende der Session kehrt die normale Ansicht zurück.
- Ein separater Fullscreen-Modus wird nicht vorgesehen.

## 3. Session Setup

### Aufgaben und Ziele
- Eine Aufgabe kann direkt aus der Important-/Task-Liste ausgewählt werden.
- Alternativ kann ein eigenes Fokusziel eingegeben werden.
- Die ausgewählte Aufgabe wird im Current Session-Bereich angezeigt.
- Eine Aufgabe wird nach einer Session **nicht automatisch** als erledigt markiert.
- Stattdessen erhält sie einen Aktivitätshinweis, dass daran im Focus Mode gearbeitet wurde, z. B. `Worked on in Focus Mode`.
- Die Aktivität wird mit Datum und investierter Zeit dokumentiert.
- Eine Aufgabe kann beliebig viele Focus-Sessions sammeln.
- Die investierte Zeit und Session-Anzahl werden pro Aufgabe addiert und angezeigt, z. B. `4 Sessions · 2h 15min focused`.

### Kategorie und Priorität
Vorgesehene Kategorien:
- Music Production
- Mixing & Mastering
- Content Creation
- Business
- Learning
- Organisation

Eigene Kategorien sollen später ergänzt werden können.
- Jede Kategorie erhält eine eigene Farbe.
- Das Farbsystem soll mit der Important-Seite übereinstimmen.
- Kategorienfarben werden in Setup, History und Statistiken wiederverwendet.
- Die Prioritätsstufen, Farben und Darstellung werden exakt von der Important-Seite übernommen.

## 4. Task Queue

### Aufgabenanzeige
- Die Task Queue zeigt offene Aufgaben in einer klaren, kompakten und gut scannbaren Liste.
- Der Aufgabenname ist die wichtigste Information.
- Kategorie und Priorität werden als dezente Zusatzinformationen angezeigt und verwenden das bestehende Farbsystem der Important-Seite.
- Eine geplante Dauer kann optional angezeigt werden, sofern für die Aufgabe eine Dauer hinterlegt ist.
- Erledigte Aufgaben werden optisch eindeutig von offenen Aufgaben unterschieden und können in einem separaten, einklappbaren Bereich angezeigt werden.
- Die Übersicht zeigt außerdem die aktuelle Anzahl offener Aufgaben.

### Sortierung und Reihenfolge
- Standardmäßig werden offene Aufgaben nach Priorität sortiert.
- Aufgaben mit gleicher Priorität werden standardmäßig nach Erstellungsdatum sortiert.
- Die Reihenfolge kann manuell per Drag & Drop angepasst werden.
- Sobald eine manuelle Reihenfolge festgelegt wurde, bleibt sie gespeichert und wird bei späteren Aufrufen wiederhergestellt.
- Die manuelle Reihenfolge hat Vorrang vor der automatischen Standardsortierung, bis der Nutzer die Standardsortierung erneut auswählt.

### Aufgaben einer Session zuordnen
- Eine Aufgabe kann direkt aus der Task Queue mit einem Klick ausgewählt und der aktuellen Session zugeordnet werden.
- Die ausgewählte Aufgabe wird als Fokusziel im Current-Session-Bereich angezeigt.
- Die Zuordnung einer Aufgabe zu einer Session markiert sie nicht als erledigt und entfernt sie nicht aus der Task Queue.
- Eine Aufgabe bleibt in der offenen Liste, bis sie ausdrücklich als erledigt markiert oder entfernt wird.
- Nach einer Focus-Session wird die investierte Zeit automatisch für die zugeordnete Aufgabe dokumentiert. Die Aufgabe wird dadurch nicht automatisch als erledigt markiert.
- Die bereits festgelegte Aufgabenhistorie aus dem Session Setup gilt weiterhin: Datum, investierte Zeit und Anzahl der zugehörigen Focus-Sessions werden pro Aufgabe gesammelt und angezeigt.

## 5. Statistics

### Tagesstatistik
- Gesamte Fokuszeit des aktuellen Tages.
- Anzahl erfolgreich abgeschlossener Sessions.
- Durchschnittliche Dauer abgeschlossener Sessions.
- Anzahl unterbrochener Sessions.
- Die Tageswerte beziehen sich auf den lokalen Kalendertag des Nutzers.

### Wochenstatistik
- Fokuszeit pro Tag innerhalb der aktuellen Woche.
- Gesamte Fokuszeit der Woche.
- Anzahl erfolgreich abgeschlossener Sessions.
- Vergleich der Fokuszeit mit der Vorwoche.
- Die tägliche Verteilung wird in einem übersichtlichen Diagramm dargestellt.

### Monatsstatistik
- Gesamte Fokuszeit des aktuellen Monats.
- Anzahl erfolgreich abgeschlossener Sessions.
- Durchschnittliche Fokuszeit pro Tag.
- Vergleich der Fokuszeit mit dem Vormonat.
- Der Monatsverlauf wird bei Bedarf als Diagramm dargestellt.

### Kategorien-Auswertung
- Fokuszeit wird pro Kategorie ausgewertet.
- Der prozentuale Anteil jeder Kategorie an der gesamten erfassten Fokuszeit wird angezeigt.
- Die Auswertung macht sichtbar, auf welche Kategorien die meiste Fokuszeit entfällt.
- Es werden dieselben Kategorienamen und Farben wie auf der Important-Seite und im Session Setup verwendet.

### Darstellung und Bedienung
- Die wichtigsten Kennzahlen erscheinen kompakt im Statistics-Bereich unterhalb von Session Setup und Task Queue.
- Wochen- und Monatsverläufe werden durch gut lesbare Diagramme ergänzt.
- Ausführlichere Auswertungen und Detailwerte können bei Bedarf aufgeklappt werden.
- Die Darstellung folgt dem bestehenden SATYRN-Farbsystem und verwendet die festgelegten Kategorienfarben konsistent.
- Statistiken berücksichtigen die tatsächlich erfasste Fokuszeit. Pausenzeit wird nicht als Fokuszeit gezählt.
- Erfolgreich abgeschlossene und unterbrochene Sessions bleiben in den jeweils passenden Kennzahlen unterscheidbar.

## 6. Session History

### Gemeinsame chronologische Übersicht
- Abgeschlossene und unterbrochene Sessions erscheinen gemeinsam in einer chronologischen Liste.
- Standardmäßig werden die neuesten Sessions zuerst angezeigt; ältere Einträge folgen darunter.
- Der Status jeder Session ist direkt in der Liste eindeutig erkennbar.
- Über Statusfilter können gezielt abgeschlossene oder unterbrochene Sessions angezeigt werden.
- Die History wird über den bereits vorgesehenen **History**-Zugang oben rechts neben dem Seitentitel geöffnet und erhält eine eigene übersichtliche Ansicht.

### Informationen in der Session-Übersicht
- Session-Name und Fokusziel.
- Datum und zeitliche Einordnung.
- Kategorie und Priorität entsprechend dem bestehenden System der Important-Seite.
- Tatsächlich investierte Fokuszeit und – sofern relevant – geplante Dauer.
- Eindeutiger Session-Status, insbesondere **COMPLETED** oder **INTERRUPTED**.

### Session-Details
- Jeder History-Eintrag lässt sich öffnen, um die vollständigen Informationen der Session einzusehen.
- Die Detailansicht enthält die zugehörigen Notizen und den Distraction Log.
- Verknüpfte Aufgaben aus Important bzw. der Task Queue bleiben erkennbar und direkt erreichbar.
- Zeitinformationen und Session-Aktivitäten werden nachvollziehbar dargestellt.

### Suche und Filter
- Sessions können anhand ihres Session-Namens oder Fokusziels gesucht werden.
- Filter sind für Zeitraum, Kategorie, Status und Priorität vorgesehen.
- Filter lassen sich kombinieren, damit auch größere Verlaufsdaten übersichtlich durchsuchbar bleiben.
- Ohne aktive Filter gilt weiterhin die chronologische Standardsortierung mit den neuesten Sessions zuerst.

### Aktionen innerhalb der Session History
- **Session erneut öffnen:** Ein History-Eintrag kann in einer Detailansicht vollständig angesehen werden. Eine vergangene Session kann außerdem als Grundlage für eine neue Session verwendet werden; dadurch wird eine neue Session angelegt und der ursprüngliche Verlauf nicht verändert.
- **Details bearbeiten:** Session-Name, Fokusziel, Kategorie und Priorität können nachträglich angepasst werden.
- **Notizen bearbeiten:** Gespeicherte Session-Notizen können ergänzt oder korrigiert werden.
- **Distraction Log verwalten:** Frühere Einträge können nachträglich bearbeitet oder gelöscht werden.
- **Session löschen:** Das endgültige Löschen einer Session erfordert eine separate, eindeutige Sicherheitsabfrage.
- **Verknüpfte Aufgabe öffnen:** Eine mit der Session verbundene Important-Aufgabe kann direkt aus der History geöffnet werden.
- Nachträgliche Änderungen an Session-Details verändern nicht die bereits gespeicherten Fokuszeiten, Zeitabschnitte oder den historischen Zeitverlauf.

### Aufbau und visuelle Gestaltung der Session-Detailansicht
- Die Detailansicht folgt einer klaren Informationshierarchie: **Session-Identität → Zeitübersicht → Zeitverlauf → Arbeitsdetails → Notizen und Distraction Log → Aktionen**.
- **Kopfbereich:** Session-Name und Fokusziel stehen prominent oben. Status, Datum, Kategorie und Priorität sind direkt erkennbar, bleiben aber dem Session-Namen untergeordnet.
- **Zeitübersicht:** Direkt unter dem Kopfbereich werden die wichtigsten Kennzahlen in drei gut lesbaren Kennzahlenfeldern dargestellt:
  - tatsächlich investierte Fokuszeit,
  - geplante Dauer,
  - Anzahl der Fokusabschnitte.
- **Zeitverlauf:** Alle Fokus- und Pausenabschnitte werden chronologisch und nachvollziehbar dargestellt. Start- und Endzeiten sowie Dauer sind pro Abschnitt erkennbar. Unterbrechungen werden im Verlauf ebenfalls eindeutig markiert, sofern sie aufgetreten sind.
- Fokusphasen, Pausen und Unterbrechungen erhalten unterschiedliche, konsistente visuelle Kennzeichnungen entsprechend dem bereits festgelegten SATYRN-Farbkonzept. Farbe ist nicht der einzige Informationsträger; Beschriftungen und Symbole sorgen zusätzlich für eindeutige Zuordnung.
- **Arbeitsdetails:** Kategorie, Priorität und verknüpfte Important-Aufgabe werden in einem eigenen, übersichtlichen Bereich angezeigt. Verknüpfte Aufgaben können direkt geöffnet werden.
- **Notizen und Distraction Log:** Beide erscheinen als getrennte, aufklappbare Bereiche unterhalb der Arbeitsdetails. Inhalte bleiben bearbeitbar, soweit die jeweiligen History-Aktionen dies erlauben.
- **Aktionen:** Am unteren Ende der Detailansicht stehen die bereits festgelegten Aktionen zur Verfügung: Session als Vorlage für eine neue Session verwenden, Details bearbeiten und Session löschen. Das Löschen erfordert weiterhin eine separate Sicherheitsabfrage.
- Die Gestaltung bleibt ruhig, hochwertig und kompakt. Kennzahlen und Zeitverlauf sind schnell erfassbar; ausführlichere Inhalte können bei Bedarf aufgeklappt werden.
- Die Detailansicht verwendet die bestehenden SATYRN-Farben, Kategorienfarben und Statuskennzeichnungen konsistent mit Focus Mode, Statistics und der Session-Übersicht.

### Aufbau und visuelle Gestaltung der Session-History-Übersicht
- Die History-Übersicht beginnt mit einer kompakten Kennzahlenzeile für die Gesamtzahl der Sessions, die gesamte tatsächliche Fokuszeit und die Anzahl abgeschlossener Sessions.
- Darunter befinden sich die Suche und die Filter. Die Suche ist gut sichtbar und erlaubt die Suche nach Session-Name oder Fokusziel. Statusfilter sind direkt erreichbar; weitere Filter für Zeitraum, Kategorie und Priorität sind übersichtlich gruppiert und kombinierbar.
- Die aktive Sortierung wird sichtbar angezeigt. Standardmäßig gilt: neueste Sessions zuerst.
- Die Sessions werden als vertikale, kompakte Einträge dargestellt und nach Datum gruppiert. Jeder Eintrag zeigt:
  - Session-Name als primäre Information,
  - Status als klar erkennbare Kennzeichnung,
  - Kategorie und Priorität,
  - tatsächliche Fokuszeit und geplante Dauer,
  - Anzahl der Fokusabschnitte,
  - Fokusziel, sofern Platz und Lesbarkeit dies sinnvoll erlauben.
- Abgeschlossene und unterbrochene Sessions sind durch die bereits festgelegten Statusfarben und zusätzliche Beschriftungen eindeutig unterscheidbar. Farbe ist nie der einzige Informationsträger.
- Ein Klick auf einen Session-Eintrag öffnet die zugehörige Detailansicht. Die Einträge erhalten eine klare, dezente Hover- und Fokus-Rückmeldung, ohne wichtige Informationen oder Aktionen ausschließlich bei Hover anzuzeigen.
- Die Übersicht verwendet eine ruhige, hochwertige Karten-/Listenoptik mit klarer Typografie, kompakten Abständen und den bestehenden SATYRN-Farben. Die Einträge sollen schnell scanbar sein und auch bei vielen Sessions übersichtlich bleiben.
- Die Kennzahlen oben dienen der schnellen Orientierung; die vollständige Auswertung und Diagramme verbleiben im Bereich Statistics.
- Bei vielen Einträgen wird die Liste in überschaubare Seiten bzw. Abschnitte aufgeteilt. Die Navigation zeigt die aktuelle Position und ermöglicht das Weiterblättern.
- Alle dargestellten Kennzahlen und Einträge verwenden echte gespeicherte Daten; Beispielwerte aus Designvorlagen sind keine Produktivdaten.

### Zeitraum-Filter
- Der Zeitraum-Filter bietet folgende Schnelloptionen:
  - **Heute**
  - **Letzte 7 Tage**
  - **Letzte 30 Tage**
  - **Dieser Monat**
  - **Benutzerdefinierter Zeitraum** mit frei wählbarem Von- und Bis-Datum.
- Ohne aktive Zeitraum-Auswahl werden Sessions aus dem gesamten verfügbaren Verlauf angezeigt.
- Der Zeitraum-Filter lässt sich mit Kategorie-, Status- und Prioritätsfiltern kombinieren.
- Die gewählte Zeitspanne und alle weiteren aktiven Filter bleiben sichtbar, damit jederzeit nachvollziehbar ist, welche Sessions gerade angezeigt werden.

### Kategorie-Filter
- Der Kategorie-Filter verwendet exakt dieselben Kategorienamen und Farben wie das bestehende System der Important-Seite.
- Die aktuell vorgesehenen Kategorien sind **Music Production**, **Mixing & Mastering**, **Content Creation**, **Business**, **Learning** und **Organisation**. Später ergänzte eigene Kategorien werden automatisch ebenfalls im Filter berücksichtigt.
- Es können mehrere Kategorien gleichzeitig ausgewählt werden. Eine Session wird angezeigt, wenn sie zu mindestens einer der ausgewählten Kategorien gehört.
- **Alle Kategorien** ist die Standardauswahl und zeigt den vollständigen Verlauf unabhängig von der Kategorie.
- Aktive Kategorieauswahlen werden oberhalb der Ergebnisliste sichtbar angezeigt und können dort einzeln wieder entfernt werden.
- Der Kategorie-Filter lässt sich mit Zeitraum-, Status- und Prioritätsfiltern kombinieren.

### Status-Filter
- Der Status-Filter bietet die Auswahl **Alle**, **Abgeschlossen** und **Unterbrochen**.
- **Alle** ist die Standardauswahl und zeigt abgeschlossene sowie unterbrochene Sessions.
- Die Auswahl kann direkt im Bereich der Session-History-Filter geändert werden.
- Der aktive Statusfilter bleibt sichtbar und lässt sich zusammen mit Zeitraum-, Kategorie- und Prioritätsfiltern verwenden.
- Status wird immer zusätzlich durch eine eindeutige Textbezeichnung dargestellt; Farbe allein vermittelt den Status nicht.

### Prioritäts-Filter
- Der Prioritäts-Filter übernimmt exakt dieselben Prioritätsstufen und Farben wie das bestehende Important-System.
- **Alle Prioritäten** ist die Standardauswahl und zeigt Sessions unabhängig von ihrer Priorität.
- Es können mehrere Prioritätsstufen gleichzeitig ausgewählt werden. Angezeigt werden Sessions, die mindestens einer der ausgewählten Stufen entsprechen.
- Aktive Prioritätsauswahlen werden oberhalb der Ergebnisliste sichtbar angezeigt und können einzeln entfernt werden.
- Der Prioritäts-Filter lässt sich mit Zeitraum-, Kategorie- und Statusfiltern kombinieren.
- Priorität wird immer auch durch eine eindeutige Textbezeichnung vermittelt; Farbe allein reicht nicht aus.

### Filter zurücksetzen
- Oberhalb der Session-Ergebnisse gibt es eine gut auffindbare, aber visuell zurückhaltende Schaltfläche **Filter zurücksetzen**.
- Ein Klick setzt Zeitraum-, Kategorie-, Status- und Prioritätsfilter gemeinsam auf ihre jeweiligen Standardwerte zurück.
- Nach dem Zurücksetzen werden wieder alle verfügbaren Sessions angezeigt; die Standardsortierung **Neueste zuerst** bleibt bestehen.
- Die Schaltfläche wird nur dann aktiv bzw. angeboten, wenn mindestens ein Filter vom Standard abweicht.
- Die Filtersteuerung einschließlich der Zurücksetzen-Schaltfläche bleibt innerhalb der Session-History im zentralen Workspace und berücksichtigt jederzeit die globale HEADBAR und beide Sidebars.

### Seitennavigation der Session-History
- Die Session-History verwendet eine klassische Seitennavigation statt automatischem Nachladen beim Scrollen.
- Unterhalb der Ergebnisliste stehen **Zurück** und **Weiter** sowie anklickbare Seitenzahlen zur Verfügung.
- Die aktuelle Seite ist eindeutig hervorgehoben; nicht verfügbare Navigationsaktionen sind klar deaktiviert.
- Beim Wechsel der Seite bleiben die aktuell gesetzten Suchbegriffe, Filter und die Sortierung erhalten.
- Nach einer Änderung der Filter oder des Suchbegriffs wird die Ergebnisliste aktualisiert und auf eine gültige Ergebnisseite zurückgesetzt, damit keine leere Seite außerhalb der verfügbaren Treffer angezeigt wird.
- Die Seitennavigation ist kompakt gestaltet und fügt sich in den zentralen Workspace zwischen HEADBAR und den beiden Sidebars ein.

### Anzahl der Sessions pro History-Seite
- Standardmäßig werden **20 Sessions pro Seite** angezeigt.
- Optional kann die Anzahl auf **10**, **20** oder **50 Sessions pro Seite** umgestellt werden.
- Die gewählte Anzahl bleibt beim Wechsel zwischen History-Seiten sowie beim Anwenden von Suche und Filtern erhalten.
- Wird die Anzahl pro Seite geändert, beginnt die Anzeige wieder auf Seite 1, damit die Navigation eindeutig bleibt.
