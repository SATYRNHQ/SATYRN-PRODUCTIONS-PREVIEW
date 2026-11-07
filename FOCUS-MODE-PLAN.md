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

### Timerdarstellung
- Große, gut lesbare Zeitanzeige.
- Kreisförmiger Fortschrittsindikator mit flüssiger Animation.
- Verbleibende Zeit ist die Hauptanzeige.
- Zusätzlich kleine Anzeige der bereits vergangenen Zeit.
- Dynamischer Status oberhalb der Zeitanzeige:
  - `FOCUS SESSION`
  - `SHORT BREAK`
  - `LONG BREAK`
  - `PAUSED`
- Das aktuelle Fokusziel wird direkt im Timerbereich angezeigt und kann bei Bedarf während der Session geändert werden.

### Timersteuerung und Ablauf
- Timer ist jederzeit pausierbar und kann an derselben Stelle fortgesetzt werden.
- Ein Reset-Button ist vorhanden. Vor dem Zurücksetzen erscheint eine Sicherheitsabfrage.
- Eine Session kann vorzeitig mit **Complete Session** erfolgreich abgeschlossen werden. Die tatsächliche Dauer wird gespeichert und in History sowie Statistiken berücksichtigt.
- Eine Session kann unterbrochen bzw. abgebrochen werden, ohne sie endgültig abzuschließen. Sie bleibt als offene, wiederaufnehmbare Session erhalten und wird zusätzlich in der History als unterbrochen dokumentiert; die tatsächlich investierte Fokuszeit bleibt erhalten.
- **Complete Session** ist davon getrennt: Damit kann eine Session auch vor Ablauf des Timers bewusst erfolgreich beendet werden. Sie verschwindet dann aus der offenen Liste und wird in History sowie Statistiken übernommen.
- Wenn eine Fokusphase endet, wechselt der Timer automatisch in die Pause.
- Nach Ende der Pause wartet der Timer auf einen manuellen Start der nächsten Fokusphase.
- Die Pause kann über **Skip Break** übersprungen werden. Danach wartet der Timer auf den manuellen Start der nächsten Fokusphase.
- Vor Beginn einer Fokusphase gibt es einen kurzen Countdown: `3 – 2 – 1 – FOCUS`.

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

### Session-Ziel und Aufgabenstruktur
- Zusätzlich zur Aufgabe gibt es ein separates Freitextfeld für ein konkretes Session-Ziel bzw. die geplanten Arbeitsschritte.
- Das Ziel erscheint im Current Session-Bereich und wird mit der Session gespeichert.
- Pro Session gibt es eine Hauptaufgabe und optional mehrere Unteraufgaben.
- Unteraufgaben können einzeln abgehakt werden; ihr Fortschritt wird angezeigt.
- Die Hauptaufgabe bleibt mit der Important-/Task-Liste verknüpft.

### Free Focus
- Sessions können ohne ausgewählte Aufgabe gestartet werden.
- Ein eigenes Fokusziel ist optional.
- Kategorie und Priorität können trotzdem ausgewählt werden.
- Free-Focus-Sessions werden regulär in History und Statistiken erfasst.
- Notizen und Distraction Log funktionieren ebenfalls.

### Session Templates
- Häufig verwendete Session-Vorlagen können erstellt, gespeichert, bearbeitet und gelöscht werden.
- Vorlagen können mit einem Klick geladen werden.
- Gespeichert werden können Fokus- und Pausendauer sowie Kategorie, Priorität, Hauptaufgabe und Unteraufgaben.
- Jede Vorlage erhält ein eigenes Icon.
- Die jeweilige Kategorie-Farbe wird übernommen.

## 4. Task Queue

- Offene Aufgaben aus Important können in der Queue angezeigt werden.
- Aufgaben können gezielt hinzugefügt und wieder entfernt werden.
- Die Queue bleibt mit der Aufgabenverwaltung synchronisiert.
- Aufgaben werden durch die Queue nicht automatisch als erledigt markiert.
- Reihenfolge kann per Drag & Drop geändert werden.
- Die Queue-Reihenfolge verändert nicht die ursprüngliche Reihenfolge in Important.
- Jede Aufgabe zeigt bisherige Focus-Sessions und insgesamt investierte Fokuszeit, z. B. `3 Sessions · 1h 40min`.
- Button **Start Next Task**: übernimmt die nächste Aufgabe als Fokusziel und füllt Session Setup mit den zugehörigen Angaben voraus.
- Das vorausgefüllte Ziel kann vor dem Start angepasst werden.
- Filter nach Kategorie, Priorität und Status (offen oder in Bearbeitung); zusätzlich eine Option, alle Aufgaben anzuzeigen.
- Suchfeld zur Suche nach Aufgabennamen; Ergebnisse aktualisieren sich während der Eingabe und funktionieren zusammen mit den Filtern.

## 5. Statistics

### Daily Statistics
- Gesamte Fokuszeit heute.
- Anzahl erfolgreich abgeschlossener Sessions.
- Anzahl abgebrochener Sessions.
- Produktivste Kategorie des Tages.

### Weekly Statistics
- Fokuszeit pro Tag von Montag bis Sonntag.
- Balkendiagramm zum Vergleich der Tage.
- Gesamtfokuszeit der Woche.
- Erfolgreiche und abgebrochene Sessions.
- Produktivster Wochentag.

### Fokusziele
- Individuell einstellbares Tagesziel.
- Individuell einstellbares Wochenziel.
- Fortschrittsbalken und Prozentanzeige für beide Ziele.
- Anzeige der noch fehlenden Fokuszeit.
- Ziele können jederzeit angepasst werden.

### Focus Streak
- Die Streak erhöht sich, wenn das selbst festgelegte Tagesziel erreicht wird.
- Anzeige der aktuellen und längsten Streak.
- Kalenderübersicht mit erreichten Tageszielen.
- Ein nicht erreichtes Tagesziel unterbricht die Streak.
- Das Tagesziel bleibt anpassbar.

### Monthly Focus Map
- Monatskalender mit farblicher Darstellung der täglichen Fokusaktivität.
- Farbintensität richtet sich nach der täglichen Fokuszeit.
- Tage ohne Aktivität bleiben neutral.
- Erreichte Tagesziele werden besonders markiert.
- Klick auf einen Tag öffnet dessen Tagesstatistiken.
- Navigation zwischen Monaten.

### Category Breakdown
- Fokuszeit pro Kategorie und prozentualer Anteil.
- Kreisdiagramm mit Legende.
- Zeitraum auswählbar: Woche, Monat oder Gesamtzeit.
- Es werden dieselben Kategorienfarben wie auf der Important-Seite verwendet.

### Productivity by Time
- Auswertung der Fokuszeit nach Tageszeiten: morgens, mittags, nachmittags und abends.
- Anzeige der produktivsten Tageszeit.
- Vergleich der Fokuszeit zwischen diesen Zeiträumen.

### Personal Records
- Längste Fokus-Session.
- Meiste Fokuszeit an einem Tag.
- Meiste Fokuszeit in einer Woche.
- Meiste erfolgreich abgeschlossene Sessions an einem Tag.
- Datum des jeweiligen Rekords.
- Automatische Aktualisierung.

## 6. Session History

- Alle Sessions werden chronologisch dokumentiert.
- Erfolgreiche und abgebrochene Sessions erhalten unterschiedliche Statusanzeigen.
- Unterbrochene bzw. pausierte Sessions sollen nachvollziehbar sein.
- Die tatsächliche Fokusdauer wird gespeichert.
- History wird über die kleine Leiste oben rechts neben dem Seitentitel geöffnet, nicht als dauerhaft großer Bereich auf der Hauptseite.
- Jede Session ist anklickbar und öffnet eine Detailansicht.
- Die Detailansicht zeigt – soweit für die Session vorhanden – Ziel, Kategorie, Priorität, Notizen, Distraction-Log-Einträge und Unteraufgaben.



### Edit sessions in History
- Individual sessions can be edited after they have been recorded.
- Editable details include notes, focus goal, and category.
- Editing a historical session updates its saved record and relevant statistics consistently.

### History search
- Search field to find sessions by task name or focus goal.
- Search results update while typing.
- Search works together with the status, category, and time-period filters.

### History filters
- Filter by session status: **All Sessions**, **Completed**, **Interrupted**, **Abandoned**, and **Paused**.
- Filter by category.
- Filter by time period/date range.
- Filters can be combined so sessions can be narrowed down by status, category, and period together.


### Sessions löschen
- Einzelne Sessions können über ihre Detailansicht bzw. das Session-Menü gelöscht werden.
- Das Löschen folgt demselben Prinzip wie auf der Important-Seite: Vor dem Löschen erscheint eine separate Sicherheitsabfrage.
- **Abbrechen** schließt die Abfrage und lässt die Session unverändert bestehen.
- **Löschen** bestätigt die Aktion und entfernt die Session aus der History und den gespeicherten Daten.
- Die Löschaktion wird visuell dezent animiert; es gibt keinen zusätzlichen Papierkorb- oder Wiederherstellungsbereich.

### Sessions duplizieren
- Einzelne Sessions können aus der History heraus dupliziert werden.
- Beim Duplizieren werden die Session-Einstellungen als neue Vorbereitung übernommen, z. B. Fokusziel, Kategorie, Priorität, Fokus-/Pausendauer und Unteraufgaben.
- Die Duplikation startet **keinen Timer** und erzeugt keine rückwirkend abgeschlossene Session.
- Die neue Session kann vor dem Start angepasst werden.
- Historische Notizen und Distraction-Log-Einträge werden nicht in die neue Session kopiert.

### Session-Favoriten
- Sessions können in der History als Favorit markiert und wieder aus den Favoriten entfernt werden.
- Favoriten erhalten eine dezente visuelle Kennzeichnung (z. B. Sternsymbol).
- Die History bietet einen Filter, um ausschließlich favorisierte Sessions anzuzeigen.
- Favoritenstatus bleibt beim Bearbeiten einer Session erhalten und wird beim Duplizieren nicht automatisch übernommen.

### History-Export
- Die Session History kann als CSV-Datei exportiert werden.
- Der Export berücksichtigt die aktuell gewählten History-Filter und die Suche, damit gezielt passende Sessions exportiert werden können.
- Exportiert werden die verfügbaren strukturierten Session-Daten, z. B. Datum, Start-/Endzeit, tatsächliche Fokusdauer, Status, Fokusziel, verknüpfte Aufgabe, Kategorie, Priorität und Favoritenstatus.
- Notizen und Distraction-Log-Einträge werden ebenfalls als eigene CSV-Felder aufgenommen, soweit vorhanden.
- Der Export lädt eine Datei herunter und verändert oder löscht keine gespeicherten Sessions.

### JSON-Backup und Wiederherstellung
- Zusätzlich zum CSV-Export gibt es einen vollständigen JSON-Export der Focus-Mode-Daten.
- Der JSON-Export dient als Backup und enthält Sessions sowie zugehörige Daten wie Notizen, Distraction-Log-Einträge, Unteraufgaben, Favoritenstatus und Session-Einstellungen.
- Ein JSON-Import kann ein zuvor exportiertes Backup wiederherstellen.
- Vor dem Import wird eine Vorschau angezeigt und ausdrücklich bestätigt, welche Daten importiert werden.
- Beim Import werden vorhandene Daten nicht stillschweigend überschrieben. Es gibt eine klare Auswahl zwischen dem Zusammenführen mit vorhandenen Daten und dem vollständigen Ersetzen nach deutlicher Sicherheitsabfrage.
- Importierte Datensätze werden auf gültige Struktur geprüft; ungültige Dateien werden mit verständlicher Fehlermeldung abgelehnt.

### Automatische Backup-Erinnerung
- Focus Mode erinnert regelmäßig daran, ein JSON-Backup der Focus-Daten zu exportieren.
- Standardintervall: einmal pro Woche.
- Die Erinnerung erscheint dezent innerhalb der Website und startet keinen Export automatisch.
- Nach einem erfolgreichen JSON-Export wird die Erinnerung als erledigt markiert und das nächste Erinnerungsintervall beginnt.
- Die Erinnerung kann in den Focus-Mode-Einstellungen deaktiviert werden.

### Focus-Mode-Einstellungen
- Eigene Einstellungssektion innerhalb des Focus Mode.
- Standard-Fokusdauer und Standard-Pausendauer können festgelegt werden.
- Timer-Töne können aktiviert/deaktiviert werden; die Lautstärke bzw. Tonwiedergabe soll anpassbar sein, soweit technisch zuverlässig möglich.
- Visuelle Benachrichtigungen und Pausen-Erinnerungen können angepasst werden.
- Distraction-Free-Modus: automatischen Start bei Fokusbeginn ein-/ausschalten.
- Backup-Erinnerung: aktivieren/deaktivieren und Erinnerungsintervall festlegen.
- Tages- und Wochenziele können von hier aus angepasst werden.
- Änderungen an Einstellungen gelten für zukünftige Sessions und verändern keine bereits gespeicherten historischen Sessions.

## 7. Design und Konsistenz

- Premium-SATYRN-HQ-Stil, passend zum bestehenden dunklen Design.
- Farben und Prioritätsdarstellung der Important-Seite werden wiederverwendet.
- Kategorienfarben sind über Session Setup, Queue, History und Statistiken hinweg konsistent.
- Ruhige, übersichtliche Darstellung; während des Fokus möglichst wenig Ablenkung.

### Theme-Umfang
- Es wird kein separates Theme-Menü und kein alternatives Focus-Mode-Theme vorgesehen.
- Focus Mode verwendet das reguläre Premium-SATYRN-HQ-Design.
- Die Ablenkungsreduktion erfolgt über den bereits geplanten Distraction-Free-Modus und nicht über ein zusätzliches Theme.

### Smartphone- und Tablet-Unterstützung
- Focus Mode soll grundsätzlich auch auf Smartphones nutzbar sein.
- Die mobile Optimierung ist sinnvoll, aber keine zwingende Voraussetzung für jede einzelne Funktion.
- Priorität haben eine gut lesbare Timeranzeige sowie einfach erreichbare Start-, Pause- und Fortsetzen-Steuerungen.
- Komplexere Bereiche wie Statistiken, Task Queue und History dürfen auf kleineren Displays kompakter oder in aufklappbaren Ansichten dargestellt werden.
- Die Desktop-Version bleibt die primäre und vollständigste Ansicht.


### Tastaturkürzel
- Focus Mode unterstützt Tastaturkürzel für häufige Timer-Aktionen.
- Leertaste: laufende Fokus- oder Pausenphase pausieren bzw. fortsetzen.
- `R`: Reset-Vorgang starten; vor dem Zurücksetzen erscheint weiterhin die Sicherheitsabfrage.
- Tastaturkürzel dürfen nicht versehentlich ausgelöst werden, während der Nutzer in einem Textfeld oder anderen Eingabefeld tippt.
- Die Bedienung über sichtbare Buttons bleibt jederzeit möglich.



### Tastaturkürzel-Hilfe und Legende
- Neben dem Focus-Mode-Titel gibt es ein kleines `?`-Symbol, das ein Hilfefenster mit einer vollständigen Legende aller verfügbaren Tastaturkürzel öffnet.
- Die Legende zeigt übersichtlich jede Taste bzw. Tastenkombination und erklärt die zugehörige Aktion.
- Das Hilfefenster lässt sich jederzeit wieder schließen.
- Tastaturkürzel werden nicht ausgelöst, während der Nutzer in Eingabe-, Text- oder Suchfeldern schreibt.
- Bereits festgelegt: Leertaste = Pause/Fortsetzen; `R` = Reset mit Sicherheitsabfrage.


### Individuelle Tastaturbelegung
- Zusätzlich zur Kürzel-Legende gibt es einen Editor für eigene Tastaturbelegungen.
- Nutzer können unterstützte Aktionen auf andere Tasten bzw. Tastenkombinationen legen.
- Der Editor zeigt die aktuelle Belegung und ermöglicht das Ändern sowie Zurücksetzen auf Standardwerte.
- Konflikte, etwa wenn dieselbe Tastenkombination mehreren Aktionen zugewiesen wird, werden erkannt und verständlich angezeigt.
- Sicherheits- und Eingabefeld-Regeln bleiben bestehen: keine versehentlichen Auslösungen beim Tippen und keine Umgehung von Sicherheitsabfragen.


### Speicherung eigener Tastaturbelegungen
- Individuelle Tastaturbelegungen werden dauerhaft im Browser gespeichert und bleiben nach einem Browser-Neustart erhalten.
- Änderungen gelten auch für zukünftige Focus-Mode-Sitzungen.
- Ein Zurücksetzen auf Standardwerte ist jederzeit möglich.
- Die Belegungen werden in einem späteren Backup-Konzept berücksichtigt, sofern die Focus-Mode-Einstellungen exportiert werden.


### Prüfung der Tastaturbelegungen
- Beim Öffnen von Focus Mode werden die gespeicherten Tastaturbelegungen automatisch auf Konflikte und ungültige Zuordnungen geprüft.
- Bei Problemen erscheint eine verständliche Warnung mit den betroffenen Aktionen und Tasten.
- Der Nutzer kann die Belegungen direkt im Tastaturkürzel-Editor korrigieren oder auf Standardwerte zurücksetzen.
- Eine fehlerhafte individuelle Belegung darf die übrige Focus-Mode-Bedienung nicht blockieren.


### Inaktivitäts-Erinnerungen
- Wenn Focus Mode nicht aktiv genutzt wird und keine Session läuft, kann er dezent an einen möglichen Neustart erinnern.
- Erinnerungszeitpunkte: nach 5 Minuten, nach 15 Minuten, nach 30 Minuten und anschließend im Stundenrhythmus.
- Die Erinnerungen sollen unaufdringlich sein und keine laufende Session unterbrechen.
- Die Erinnerungsfunktion soll in den Focus-Mode-Einstellungen deaktivierbar sein.


### Website-weite Inaktivitäts-Erinnerungen
- Focus-Mode-Inaktivitäts-Erinnerungen dürfen auch angezeigt werden, wenn der Nutzer gerade eine andere Seite innerhalb von SATYRN HQ geöffnet hat.
- Die Erinnerung soll dezent und seitenübergreifend innerhalb der Website erscheinen, ohne den aktuellen Arbeitsbereich zu blockieren.
- Die Erinnerungslogik darf nicht mehrfach parallel laufen, nur weil der Nutzer zwischen Website-Seiten wechselt.


### Aktion in Inaktivitäts-Erinnerungen
- Jede Focus-Mode-Inaktivitäts-Erinnerung enthält einen Button „Jetzt fokussieren“.
- Der Button führt direkt zur Focus-Mode-Seite.
- Die Erinnerung selbst bleibt dezent und blockiert nicht die aktuell geöffnete Seite.


### Erinnerung zurückstellen
- Jede Inaktivitäts-Erinnerung bietet neben „Jetzt fokussieren“ auch „Später erinnern“.
- Beim Zurückstellen wird die aktuelle Erinnerung vorübergehend ausgeblendet und zu einem später festzulegenden Zeitpunkt erneut angezeigt.
- Standarddauer: 15 Minuten. Danach wird die Erinnerung erneut angezeigt, sofern Focus Mode weiterhin nicht aktiv genutzt wird.


### Erinnerungen nach längeren Pausen
- Nach einer längeren Pause kann Focus Mode an den Wiedereinstieg erinnern.
- Es gibt Erinnerungen nach 30 Minuten und nach 60 Minuten Pause.
- Die Erinnerung enthält ebenfalls eine Aktion, mit der direkt eine neue Fokussitzung gestartet werden kann.
- Die Pausenerinnerungen bleiben dezent und können in den Focus-Mode-Einstellungen angepasst oder deaktiviert werden.


### Website-weite Pausenerinnerungen
- Erinnerungen nach 30 und 60 Minuten Pause können auf jeder Seite innerhalb von SATYRN HQ erscheinen, nicht nur im Focus Mode.
- Sie werden dezent eingeblendet und blockieren den aktuell geöffneten Arbeitsbereich nicht.
- Beim Seitenwechsel dürfen keine doppelten Erinnerungen oder parallelen Timer entstehen.


### Erscheinungsbild der Erinnerungen
- Inaktivitäts- und Pausenerinnerungen erscheinen als kleine Benachrichtigung oben rechts auf der Website.
- Gestaltung im dunklen Premium-SATYRN-HQ-Stil mit dezenter Akzentfarbe und passender Uhr- oder Fokus-Ikone.
- Kurzer, verständlicher Hinweistext sowie die passenden Aktionen, z. B. „Jetzt fokussieren“ und „Später erinnern“.
- Dezente Ein- und Ausblendanimation.
- Wenn keine Aktion erfolgt, verschwindet die Benachrichtigung nach etwa 10 Sekunden automatisch.


### Benachrichtigungsübersicht
- Automatisch ausgeblendete Focus-Mode-Erinnerungen bleiben in einer Benachrichtigungsübersicht erhalten.
- Die Übersicht ist über ein kleines Glocken-Symbol erreichbar und kann von jeder SATYRN-HQ-Seite geöffnet werden.
- Einzelne Benachrichtigungen können dort erneut geöffnet bzw. aufgerufen werden.
- Einzelne Benachrichtigungen können vom Nutzer gelöscht werden.
- Das automatische Ausblenden nach 10 Sekunden löscht eine Benachrichtigung nicht.


### Ungelesene Benachrichtigungen
- Das Glocken-Symbol zeigt einen kleinen Zähler für ungelesene Benachrichtigungen.
- Der Zähler aktualisiert sich automatisch, wenn neue Benachrichtigungen eingehen oder als gelesen markiert werden.
- Das Öffnen bzw. Aufrufen einer Benachrichtigung markiert sie als gelesen.
- Gelöschte Benachrichtigungen werden nicht mehr mitgezählt.


### Benachrichtigungen gesammelt als gelesen markieren
- In der Benachrichtigungsübersicht gibt es die Aktion „Alle als gelesen markieren“.
- Die Aktion markiert alle aktuell ungelesenen Benachrichtigungen auf einmal als gelesen.
- Bereits gelöschte Benachrichtigungen bleiben unberücksichtigt.


### Alle Benachrichtigungen löschen
- Die Benachrichtigungsübersicht bietet zusätzlich die Aktion „Alle löschen“.
- Vor dem endgültigen Löschen wird eine Sicherheitsabfrage angezeigt.
- Bei Abbruch bleiben alle Benachrichtigungen unverändert erhalten.
- Bei Bestätigung werden alle Benachrichtigungen aus der Übersicht entfernt und der Ungelesen-Zähler entsprechend aktualisiert.


### Benachrichtigungskategorien
- Benachrichtigungen werden in der Übersicht visuell nach Kategorien getrennt dargestellt, z. B. Focus-Erinnerungen, Pausenerinnerungen und Systemmeldungen.
- Die Kategorien erscheinen als getrennte Abschnitte innerhalb derselben Übersicht.
- Es gibt keine zusätzlichen Filter oder Filtersteuerungen für diese Kategorien.
- Ungelesen-Zähler, Einzel-Löschen, „Alle als gelesen markieren“ und „Alle löschen“ funktionieren weiterhin über alle Kategorien hinweg.


### Sortierung der Benachrichtigungen
- Innerhalb jeder Benachrichtigungskategorie stehen die neuesten Einträge immer oben.
- Die Sortierung aktualisiert sich automatisch, sobald eine neue Benachrichtigung eingeht.


### Visuelle Unterscheidung gelesen/ungelesen
- Ungelesene Benachrichtigungen werden etwas deutlicher hervorgehoben.
- Gelesene Benachrichtigungen erscheinen optisch dezenter, bleiben aber gut lesbar und weiterhin aufrufbar.
- Die Darstellung bleibt konsistent mit dem Premium-SATYRN-HQ-Design.


### Keine zusätzliche Glocken-Animation
- Bei neuen Benachrichtigungen gibt es keine zusätzliche Animation am Glocken-Symbol.
- Das kleine Pop-up oben rechts ist bereits die sichtbare Benachrichtigung und reicht als Hinweis auf neue Einträge aus.


### Wiederherstellung einer laufenden Session
- Laufende Focus Sessions werden bei Seitenneuladen, versehentlichem Schließen des Tabs oder Schließen des Browsers automatisch mit ihrem aktuellen Zustand gespeichert.
- Beim erneuten Öffnen von SATYRN HQ wird die Session wiederhergestellt und kann an derselben Stelle fortgesetzt werden.
- Die verbleibende Zeit wird anhand der tatsächlichen verstrichenen Zeit berechnet, damit ein geschlossenes Fenster den Timer nicht künstlich anhält.
- Auch Session-Status, gewähltes Fokusziel und zugehörige Session-Daten bleiben erhalten.


### Verhalten bei Verbindungsverlust
- Focus Mode soll während eines vorübergehenden Internet- bzw. Verbindungsverlusts lokal weiterlaufen.
- Session-Zustand, Timerfortschritt und währenddessen erfasste Daten werden lokal zwischengespeichert.
- Sobald die Verbindung wieder verfügbar ist, werden die zwischengespeicherten Änderungen mit dem zentralen Datenstand synchronisiert.
- Während der Offline-Phase soll die Bedienung der laufenden Session möglichst uneingeschränkt bleiben.
- Die Synchronisierung darf keine doppelten Sessions oder verlorenen Änderungen verursachen.


### Mehrere geöffnete Tabs
- Wird SATYRN HQ in mehreren Browser-Tabs geöffnet, zeigen alle Tabs denselben aktuellen Focus-Session-Status und Timerstand an.
- Änderungen an der Session werden zwischen den geöffneten Tabs synchron gehalten.
- Es darf nur eine aktive Steuerungsinstanz für dieselbe Session geben; mehrere Tabs dürfen keine voneinander unabhängigen Timer oder widersprüchlichen Session-Zustände erzeugen.
- Start-, Pause-, Fortsetzen- und Reset-Aktionen müssen tabübergreifend konsistent verarbeitet werden.


### Gleichzeitige Aktionen in mehreren Tabs
- Werden in mehreren Tabs nahezu gleichzeitig unterschiedliche Aktionen ausgeführt, gilt die zuletzt ausgeführte gültige Aktion.
- Der neue Zustand wird zeitnah an alle anderen geöffneten Tabs übertragen.
- Vorhandene Zustände dürfen dabei nicht unbemerkt überschrieben werden; widersprüchliche Aktionen müssen konsistent aufgelöst werden.


### Wiederaufnahme-Hinweis beim Öffnen
- Beim Öffnen von Focus Mode wird automatisch geprüft, ob eine gespeicherte laufende oder unterbrochene Session vorhanden ist.
- Falls eine Session wiederaufgenommen werden kann, erscheint eine dezente Meldung mit der Möglichkeit, sie fortzusetzen.
- Die Session wird nicht ohne Zustimmung automatisch fortgesetzt.
- Die Wiederaufnahme stellt den gespeicherten Zustand und die anhand der tatsächlichen verstrichenen Zeit berechnete Restzeit wieder her.


### Aktionen im Wiederaufnahme-Hinweis
- Die Wiederaufnahme-Meldung bietet drei klare Aktionen:
  - **Fortsetzen**: Die gespeicherte Session an der korrekten Stelle weiterführen.
  - **Pausieren**: Die Session bleibt erhalten, der Timer wird angehalten und kann später fortgesetzt werden.
  - **Session verwerfen**: Die Session wird als abgebrochen behandelt und entsprechend in der History dokumentiert; vor dem Verwerfen erscheint eine Sicherheitsabfrage.
- Die Meldung startet oder verwirft niemals eine Session ohne ausdrückliche Auswahl.


### Anzeige der Unterbrechungsdauer
- In der Wiederaufnahme-Meldung wird angezeigt, wie lange die letzte Aktivität zurückliegt, z. B. „Letzte Aktivität vor 2 Stunden“.
- Die Zeitangabe dient nur zur Orientierung und verändert weder den gespeicherten Session-Status noch die Timerberechnung.


### Sicherheitsabfrage beim Verwerfen
- Vor dem Verwerfen einer wiederhergestellten Session erscheint eine separate Sicherheitsabfrage, z. B. „Möchtest du diese Session wirklich endgültig abbrechen?“
- **Abbrechen** schließt die Abfrage und erhält die Session unverändert.
- **Session verwerfen** bestätigt den Abbruch; die Session wird mit ihrem tatsächlichen Verlauf als abgebrochen in der History gespeichert.
- Es gibt kein stilles oder versehentliches Verwerfen durch bloßes Schließen der Meldung.


### Langfristige Wiederaufnahme
- Eine gespeicherte laufende oder pausierte Session bleibt auch dann zur Wiederaufnahme verfügbar, wenn SATYRN HQ erst mehrere Tage später erneut geöffnet wird.
- Es gibt keinen automatischen zeitlichen Ablauf, der eine solche Session allein wegen ihres Alters löscht oder verwirft.
- Beim Wiederöffnen werden weiterhin die tatsächliche verstrichene Zeit, der gespeicherte Status und die verfügbaren Aktionen korrekt angezeigt.


### Mehrere offene Sessions pro Kategorie
- Mehrere offene bzw. unterbrochene Sessions dürfen gleichzeitig bestehen.
- Pro Kategorie/Bereich sind maximal zwei offene Sessions erlaubt.
- Die Begrenzung gilt getrennt für jede Kategorie, z. B. Music Production, Mixing & Mastering, Content Creation, Business, Learning und Organisation.
- Eine dritte offene Session in derselben Kategorie kann erst angelegt werden, wenn eine der beiden bestehenden Sessions abgeschlossen oder verworfen wurde.
- Sessions in anderen Kategorien bleiben davon unberührt.


### Übersicht und Wechsel zwischen offenen Sessions
- Alle offenen Sessions werden in der Focus-Übersicht als kompakte Liste angezeigt.
- Jede Zeile zeigt mindestens Ziel/Aufgabe, Kategorie und aktuellen Status.
- Zwischen offenen Sessions kann jederzeit gewechselt werden.
- Beim Wechsel wird die bisherige Session nicht automatisch beendet oder verworfen; ihr Zustand bleibt erhalten.
- Die jeweils ausgewählte Session wird im großen Timer-Bereich angezeigt und kann dort gesteuert werden.


### Nur ein laufender Timer gleichzeitig
- Es darf zu jedem Zeitpunkt maximal ein Timer aktiv laufen – auch dann, wenn mehrere offene Sessions vorhanden sind.
- Andere offene Sessions behalten ihren jeweiligen Zustand (z. B. pausiert oder unterbrochen).
- Beim Starten einer anderen Session wird ein aktuell laufender Timer automatisch pausiert, bevor der neue Timer startet.
- Es werden niemals zwei Sessions parallel zeitlich hochgezählt.


### Sortierung der offenen Sessions
- Die offene Session-Liste wird nach Status sortiert.
- Eine laufende Session steht ganz oben.
- Danach folgen pausierte Sessions, anschließend unterbrochene bzw. wiederherstellbare Sessions.
- Innerhalb desselben Status steht die zuletzt aktive Session weiter oben.


### Umgang mit abgeschlossenen Sessions
- Sobald eine Session abgeschlossen wird, verschwindet sie aus der Liste der offenen Sessions.
- Abgeschlossene Sessions bleiben vollständig in der Session History erhalten.
- Ihre Daten fließen außerdem in die Focus-Statistiken ein.
- Die Session wird dadurch nicht gelöscht; sie ist weiterhin über History und Statistiken nachvollziehbar.


### Unterschied zwischen Unterbrechen und vorzeitigem Abschließen
- **Unterbrechen/Abbrechen:** Die Session bleibt offen und kann später fortgesetzt werden. Sie wird in der offenen Session-Liste als unterbrochen angezeigt und zusätzlich in der History nachvollziehbar dokumentiert.
- **Vorzeitig abschließen (Complete Session):** Die Session gilt als erfolgreich abgeschlossen, auch wenn die geplante Dauer noch nicht erreicht wurde. Sie verschwindet aus der offenen Liste und fließt in History und Statistiken ein.
- Eine Unterbrechung darf nicht automatisch als endgültiger Abbruch oder als erfolgreiche Session gewertet werden.


### Eigener History-Status für unterbrochene Sessions
- Unterbrochene Sessions erhalten in der History einen eigenen Status **Unterbrochen**.
- Dieser Status ist klar von **Pausiert** getrennt.
- **Pausiert** bedeutet: Die Session wurde regulär pausiert und kann fortgesetzt werden.
- **Unterbrochen** bedeutet: Die Session wurde verlassen oder unterbrochen und bleibt zur späteren Wiederaufnahme offen.
- Der Status ist in der History als eigener Filter verfügbar.


### Wiederaufnahme einer unterbrochenen Session
- Beim Fortsetzen einer unterbrochenen Session wird sie exakt mit ihrem gespeicherten Zustand wiederhergestellt.
- Timerstand und verbleibende Zeit werden korrekt weitergeführt; die tatsächliche vergangene Zeit seit der Unterbrechung wird berücksichtigt.
- Session-Ziel, Kategorie, Priorität, Notizen, Distraction Log und Unteraufgaben bleiben erhalten.
- Die Session wird nach dem Fortsetzen wieder als laufend bzw. bei manuellem Pausieren als pausiert angezeigt.


### Hinweis beim Fortsetzen
- Beim Fortsetzen einer unterbrochenen Session erscheint ein kleiner, dezenter Hinweis mit der Dauer der Unterbrechung, z. B. **„Session vor 2 Stunden unterbrochen“**.
- Der Hinweis ist informativ und blockiert den Start bzw. die Wiederaufnahme nicht.
- Die Anzeige verwendet die tatsächliche Zeit seit der letzten Unterbrechung.


### Dauer von Pause und Unterbrechung in der offenen Liste
- Bei pausierten Sessions wird angezeigt, wie lange sie bereits pausiert sind.
- Bei unterbrochenen Sessions wird angezeigt, wie lange sie bereits unterbrochen sind.
- Die Dauer wird laufend bzw. bei erneuter Anzeige aktuell berechnet und kompakt dargestellt, z. B. **„pausiert seit 15 Min.“** oder **„unterbrochen seit 2 Std.“**.
- Bei laufenden Sessions wird stattdessen der aktuelle Timerstatus angezeigt.


### Offene Sessions umbenennen
- Offene Sessions können jederzeit manuell umbenannt werden.
- Das Umbenennen ändert nur den angezeigten Session-Namen bzw. das Fokusziel.
- Notizen, Distraction Log, Unteraufgaben, Zeitdaten und bisherige Statistikdaten bleiben erhalten.
- Die Änderung wird in der bestehenden Session gespeichert und beim Fortsetzen sowie in der History berücksichtigt.


### Priorität einer Focus-Session
- Ist eine Session mit einer Aufgabe aus Important verknüpft, übernimmt sie automatisch deren aktuelle Priorität.
- Die übernommene Priorität wird mit den bestehenden Important-Prioritätsfarben dargestellt.
- Ist keine Important-Aufgabe verknüpft (Free Focus bzw. eigenes Fokusziel), kann die Priorität für die Session individuell ausgewählt werden.
- Es gibt keine automatische Standard-Hochstufung auf eine hohe Priorität.


### Synchronisierung geänderter Prioritäten aus Important
- Wird die Priorität einer verknüpften Aufgabe in Important geändert, wird die Priorität aller dazugehörigen offenen Focus-Sessions automatisch aktualisiert.
- Die Aktualisierung gilt für laufende, pausierte und unterbrochene offene Sessions.
- Bereits abgeschlossene Sessions behalten ihre zum Abschluss gespeicherte Priorität und werden rückwirkend nicht verändert.


### Verhalten beim Löschen verknüpfter Important-Aufgaben
- Wird eine Important-Aufgabe gelöscht, bleiben alle damit verknüpften offenen Focus-Sessions erhalten.
- Diese Sessions werden automatisch von der gelöschten Aufgabe entkoppelt und als unabhängige Sessions weitergeführt.
- Session-Ziel, Kategorie, Priorität, Timerstand, Notizen, Distraction Log und Unteraufgaben bleiben erhalten.
- Die Sessions können weiterhin pausiert, unterbrochen, fortgesetzt oder abgeschlossen werden.
- Die gelöschte Important-Aufgabe wird dadurch nicht wiederhergestellt und die Focus-Session bleibt eigenständig bearbeitbar.


### Kennzeichnung ehemals verknüpfter Aufgaben
- Wird eine Important-Aufgabe gelöscht und eine offene Focus-Session dadurch entkoppelt, bleibt der ursprüngliche Aufgabenname als Information in der Session erhalten.
- Die Session zeigt deutlich eine Kennzeichnung wie **„Ursprünglich verknüpft mit: [Aufgabenname] – Aufgabe gelöscht / nicht mehr verknüpft“**.
- Die Kennzeichnung ist rein informativ; sie stellt keine aktive Verknüpfung dar und die gelöschte Aufgabe wird nicht wiederhergestellt.
- Die Session bleibt unabhängig bearbeitbar.


### Ehemalige Verknüpfung in der History erhalten
- Die Kennzeichnung einer gelöschten bzw. nicht mehr aktiven Important-Verknüpfung bleibt auch nach dem erfolgreichen Abschluss der Focus-Session in der History erhalten.
- Der ursprüngliche Aufgabenname und der Hinweis **„Aufgabe gelöscht / nicht mehr verknüpft“** bleiben in den Session-Details sichtbar.
- Die Kennzeichnung bleibt rein historisch und erzeugt keine neue Verknüpfung.


### Manuelles erneutes Verknüpfen einer Session
- Eine entkoppelte offene Focus-Session kann jederzeit manuell mit einer anderen bestehenden Important-Aufgabe verknüpft werden.
- Es findet keine automatische Neuverknüpfung statt.
- Vor dem Verknüpfen wählt der Nutzer die gewünschte Important-Aufgabe ausdrücklich aus.
- Nach erfolgreicher Verknüpfung übernimmt die offene Session die aktuelle Priorität der ausgewählten Important-Aufgabe.
- Die bisherige historische Information über die frühere Verknüpfung bleibt nachvollziehbar erhalten.


### Bestätigung beim manuellen Verknüpfen
- Vor dem Übernehmen einer neuen manuellen Verknüpfung erscheint eine kurze Sicherheitsabfrage.
- Die Abfrage nennt die ausgewählte Important-Aufgabe und bestätigt, dass die Session damit verknüpft wird.
- **Abbrechen** lässt die bisherige Verknüpfung bzw. den entkoppelten Zustand unverändert.
- **Verknüpfen** bestätigt die neue Verknüpfung.


### Manuelles Trennen einer Important-Verknüpfung
- Eine offene Focus-Session kann jederzeit manuell von ihrer verknüpften Important-Aufgabe getrennt werden, ohne die Important-Aufgabe selbst zu löschen.
- Die Session bleibt vollständig erhalten und wird zu einer freien Focus-Session.
- Die bisherige Verknüpfung bleibt als historische Information sichtbar (z. B. „Ursprünglich verknüpft mit: [Aufgabenname] – nicht mehr verknüpft“).
- Nach dem Trennen kann die Priorität der freien Session manuell festgelegt werden.


### Sicherheitsabfrage beim manuellen Trennen einer Important-Verknüpfung
- Beim manuellen Trennen einer Focus-Session von einer Important-Aufgabe erscheint eine Sicherheitsabfrage.
- Gestaltung, Aufbau, Formulierungsstil und Verhalten entsprechen dem bestehenden Sicherheitsabfrage-System im Important-Tab.
- Die Abfrage macht klar, welche Verknüpfung getrennt wird, und bietet die entsprechenden Bestätigen-/Abbrechen-Aktionen.
- Bei Abbrechen bleibt die Verknüpfung unverändert; bei Bestätigen wird nur die Verknüpfung gelöst, nicht die Important-Aufgabe gelöscht.
- Diese Vorgabe gilt einheitlich für alle Sicherheitsabfragen im Focus Mode: Sie sollen dem Sicherheitsabfrage-System im Important-Tab folgen.


### Mehrere Important-Aufgaben mit einer Focus-Session verknüpfen
- Eine Focus-Session kann gleichzeitig mit mehreren bestehenden Important-Aufgaben verknüpft werden.
- Der Nutzer wählt die verknüpften Aufgaben manuell aus; es werden keine Aufgaben automatisch hinzugefügt.
- Alle Verknüpfungen werden in der Session sichtbar dargestellt und bleiben bei Pause, Unterbrechung, Fortsetzung und in der History erhalten.
- Einzelne Verknüpfungen können manuell getrennt werden, ohne die jeweilige Important-Aufgabe zu löschen; dabei gelten die einheitlichen Sicherheitsabfragen aus dem Important-Tab.
- Wird eine verknüpfte Important-Aufgabe gelöscht, bleibt die Focus-Session bestehen und nur diese Verknüpfung wird gelöst; die bisher festgelegte historische Kennzeichnung bleibt erhalten.


### Priorität bei mehreren verknüpften Important-Aufgaben
- Sind mehrere Important-Aufgaben mit einer Focus-Session verknüpft, übernimmt die Session automatisch die höchste Priorität unter allen verknüpften Aufgaben.
- Ändert sich die Priorität einer verknüpften Aufgabe, wird die höchste Priorität neu ermittelt und auf die offene Focus-Session übertragen.
- Wird eine Verknüpfung gelöst oder eine verknüpfte Aufgabe gelöscht, wird die Priorität anhand der verbleibenden Verknüpfungen neu berechnet.
- Sind keine Important-Aufgaben mehr verknüpft, kann die Priorität der freien Focus-Session manuell festgelegt werden.
- Abgeschlossene Sessions behalten weiterhin die Priorität, die sie zum Abschlusszeitpunkt hatten.


### Verknüpfte Important-Aufgaben einzeln erledigen
- Innerhalb einer Focus-Session können einzelne verknüpfte Important-Aufgaben unabhängig voneinander als erledigt markiert werden.
- Die Erledigung wird mit dem Important-Tab synchronisiert; die Aufgabe erhält dort ebenfalls den Status erledigt.
- Das Erledigen einer einzelnen Aufgabe schließt weder die Focus-Session noch die übrigen verknüpften Aufgaben ab.
- Die erledigte Aufgabe bleibt als erledigt gekennzeichnet in der Session sichtbar und die Verknüpfung bleibt nachvollziehbar.
- Für diese Aktion gelten die einheitlichen Sicherheitsabfragen aus dem Important-Tab.


### Anzeige erledigter verknüpfter Aufgaben
- Sobald eine verknüpfte Important-Aufgabe als erledigt markiert wird, wird sie automatisch aus der sichtbaren Aufgabenliste der Focus-Session ausgeblendet.
- Die Erledigung und die frühere Verknüpfung bleiben in den zugehörigen Daten und in der History nachvollziehbar.
- Das automatische Ausblenden verändert weder den Status noch den Ablauf der Focus-Session oder anderer verknüpfter Aufgaben.


### Erledigte verknüpfte Aufgaben in der History einsehen
- Erledigte, zuvor mit einer Focus-Session verknüpfte Important-Aufgaben können in der History der jeweiligen Session wieder eingesehen werden.
- Sie werden dort als erledigt gekennzeichnet und bleiben mit ihrer ursprünglichen Verknüpfung nachvollziehbar.
- Das erneute Einblenden in der History fügt sie nicht zurück zur aktiven Aufgabenliste der Focus-Session hinzu.


### Synchronisierung bearbeiteter Important-Aufgaben
- Änderungen an einer verknüpften Important-Aufgabe, insbesondere Titel und Beschreibung, werden automatisch in den offenen verknüpften Focus-Sessions übernommen.
- Die Synchronisierung gilt für laufende, pausierte und unterbrochene Sessions.
- Bereits abgeschlossene Sessions behalten den Aufgabenstand, der zum Abschlusszeitpunkt galt.
- Wird eine Aufgabe umbenannt oder ihre Beschreibung geändert, bleiben Session-Notizen, Distraction Log, Unteraufgaben und Zeitdaten unverändert.
- Bei mehreren verknüpften Aufgaben wird jede Aufgabe mit ihren jeweils aktuellen Angaben separat dargestellt.


### Synchronisierung von Important-Unteraufgaben
- Änderungen an Unteraufgaben einer verknüpften Important-Aufgabe werden automatisch in allen offenen verknüpften Focus-Sessions synchronisiert.
- Neu hinzugefügte, bearbeitete und entfernte Unteraufgaben werden entsprechend übernommen.
- Der Erledigungsstatus einzelner Unteraufgaben wird ebenfalls synchronisiert.
- Die Synchronisierung gilt für laufende, pausierte und unterbrochene Sessions; abgeschlossene Sessions behalten den Stand zum Abschlusszeitpunkt.
- Eigene Focus-Notizen, das Distraction Log und andere Session-Daten bleiben davon unberührt.


### Hinweis, wenn alle verknüpften Important-Aufgaben erledigt sind
- Sobald alle mit einer offenen Focus-Session verknüpften Important-Aufgaben erledigt sind, erkennt Focus Mode dies automatisch.
- Es erscheint eine dezente Benachrichtigung, dass alle verknüpften Aufgaben abgeschlossen sind.
- Die Benachrichtigung beendet oder verändert die Focus-Session nicht automatisch; der Nutzer entscheidet selbst, ob er weiterarbeitet oder die Session abschließt.
- Die Benachrichtigung folgt dem einheitlichen Toast-/Benachrichtigungssystem und den Gestaltungsregeln des Focus Mode.
- Bei einer Session ohne verknüpfte Important-Aufgaben wird dieser Hinweis nicht angezeigt.


### Important-Aufgaben während einer Focus-Session hinzufügen
- Während einer laufenden, pausierten oder unterbrochenen Focus-Session können jederzeit weitere bestehende Important-Aufgaben hinzugefügt werden, ohne die Session verlassen zu müssen.
- Neue Verknüpfungen werden direkt in der Session angezeigt und unterliegen den bestehenden Bestätigungs- und Synchronisierungsregeln.
- Die Priorität der offenen Session wird nach dem Hinzufügen anhand der höchsten Priorität aller aktuell verknüpften Aufgaben neu berechnet.
- Das Hinzufügen von Aufgaben startet oder beendet die Session nicht und verändert keine bestehenden Notizen, Zeitdaten oder Unteraufgaben.


### Auswahl und Bestätigung beim Hinzufügen weiterer Important-Aufgaben
- Weitere Important-Aufgaben werden während einer Focus-Session über ein kleines Auswahlfenster hinzugefügt.
- Das Auswahlfenster zeigt offene Important-Aufgaben; bereits mit dieser Session verknüpfte Aufgaben werden ausgeblendet, damit keine doppelten Verknüpfungen entstehen.
- Der Nutzer kann mehrere Aufgaben auswählen und die Auswahl anschließend mit „Hinzufügen“ bestätigen.
- Erst nach dieser Bestätigung werden die ausgewählten Aufgaben mit der Session verknüpft.
- Das Auswahlfenster kann ohne Änderungen geschlossen werden; bestehende Verknüpfungen und Session-Daten bleiben unverändert.

## 8. Umsetzungsregeln

- Dieses Dokument wird während der weiteren Planung fortlaufend ergänzt.
- Noch keine Änderungen am Website-Code, solange die Planung nicht vollständig abgeschlossen und ausdrücklich freigegeben ist.
- Vor der Umsetzung werden offene Detailfragen geklärt und der vollständige Plan gemeinsam bestätigt.
- Bei der späteren Implementierung müssen bestehende Datenstrukturen und die tatsächliche Important-Integration geprüft werden; keine Annahmen über lokale Speicherformate treffen.
