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
- **Desktop:** Timer, Session-Status und wichtigste Aktionen sind ohne unnötiges Scrollen erreichbar. Die gesamte Focus-Mode-Funktionalität steht zur Verfügung.
- **Tablet:** Das Layout darf sich responsiv an den verfügbaren Platz anpassen. Eine vollständige Optimierung aller Focus-Mode-Funktionen für Tablets ist gegenüber der PC-Version nachrangig.
- **Smartphone:** Eine vollständige Bedienung von Focus Mode ist ausdrücklich nicht vorgesehen. Keine Smartphone-spezifische Timersteuerung, Sticky-Timer-Ansicht oder Session-Verwaltung planen.
- Die spätere Smartphone-Nutzung der Website soll sich zunächst ausschließlich auf das schnelle Festhalten/Sammeln von Ideen beschränken. Diese Quick-Capture-Funktion wird als eigener, websiteweiter Mobil-Anwendungsfall geplant; Details gehören nicht in die Focus-Mode-Bedienung.
- Auf dem Smartphone erfasste Ideen sollen später auch am PC verfügbar sein. Die konkrete Erfassung, Ablage und Synchronisierung wird im übergreifenden Konzept für Quick Capture festgelegt.
- Bereits festgelegte Tastaturkürzel gelten im PC-Focus-Fenster: Leertaste für Pause/Fortsetzen und `R` für Reset mit Sicherheitsabfrage. Sie werden nicht ausgelöst, während in einem Text- oder Eingabefeld geschrieben wird.
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