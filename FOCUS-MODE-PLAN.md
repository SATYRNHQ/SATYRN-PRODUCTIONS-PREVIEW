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
- Abgebrochene Sessions gelten nicht als erfolgreich, werden aber separat in der History dokumentiert; die tatsächlich investierte Fokuszeit bleibt erhalten.
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
- Filter by session status: **All Sessions**, **Completed**, **Abandoned**, and **Paused**.
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

## 8. Umsetzungsregeln

- Dieses Dokument wird während der weiteren Planung fortlaufend ergänzt.
- Noch keine Änderungen am Website-Code, solange die Planung nicht vollständig abgeschlossen und ausdrücklich freigegeben ist.
- Vor der Umsetzung werden offene Detailfragen geklärt und der vollständige Plan gemeinsam bestätigt.
- Bei der späteren Implementierung müssen bestehende Datenstrukturen und die tatsächliche Important-Integration geprüft werden; keine Annahmen über lokale Speicherformate treffen.
