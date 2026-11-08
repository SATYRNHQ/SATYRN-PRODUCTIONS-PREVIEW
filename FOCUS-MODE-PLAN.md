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
- Anzahl unterbrochener, weiterhin offener Sessions.
- Anzahl endgültig verworfener Sessions.
- Produktivste Kategorie des Tages.



### Vergleich mit dem Vortag
- Die Daily Statistics vergleichen die heutige gesamte Fokuszeit automatisch mit der des vorherigen Kalendertages.
- Anzeige der Fokuszeit beider Tage sowie der absoluten und prozentualen Veränderung.
- Bei weniger Fokuszeit wird der Rückgang entsprechend dargestellt.
- Wenn am Vortag keine Fokuszeit erfasst wurde, erscheint ein neutraler Hinweis statt einer irreführenden Prozentangabe.
- Der Vergleich aktualisiert sich automatisch im Tagesverlauf.

### Eindeutige Session-Status in den Statistiken
- Die Statistik unterscheidet drei Statusgruppen:
  1. **Abgeschlossen:** erfolgreich beendete Sessions, einschließlich vorzeitig mit „Complete Session“ abgeschlossener Sessions.
  2. **Unterbrochen:** weiterhin offene Sessions, die später fortgesetzt werden können.
  3. **Endgültig verworfen:** Sessions, die ausdrücklich verworfen wurden und nicht mehr fortgesetzt werden können.
- Diese drei Werte werden getrennt in den Tages-, Wochen-, Monats- und Gesamtstatistiken angezeigt.
- Eine nur pausierte Session wird nicht als unterbrochen oder verworfen gezählt; sie bleibt eine offene Session im Status „Pausiert“.

### Weekly Statistics
- Fokuszeit pro Tag von Montag bis Sonntag.
- Balkendiagramm zum Vergleich der Tage.
- Gesamtfokuszeit der Woche.
- Anzahl abgeschlossener, unterbrochener und endgültig verworfener Sessions.
- Produktivster Wochentag.


### Vergleich mit der Vorwoche
- Die Weekly Statistics vergleichen die gesamte Fokuszeit der ausgewählten Woche automatisch mit der direkten Vorwoche.
- Anzeige der Fokuszeit beider Wochen sowie der absoluten und prozentualen Veränderung.
- Bei weniger Fokuszeit wird der Rückgang entsprechend dargestellt.
- Wenn in der Vorwoche keine Fokuszeit erfasst wurde, erscheint ein neutraler Hinweis statt einer irreführenden Prozentangabe.
- Der Vergleich aktualisiert sich automatisch beim Wechsel der ausgewählten Woche.

### Monthly Statistics
- Gesamte Fokuszeit des ausgewählten Monats.
- Fokuszeit pro Tag im Monatsverlauf mit übersichtlicher Vergleichsansicht.
- Anzahl abgeschlossener, unterbrochener und endgültig verworfener Sessions.
- Produktivste Kategorie des Monats.
- Produktivster Tag des Monats.
- Navigation zwischen Monaten; die Monatsstatistik passt zur Monthly Focus Map.


### Vergleich mit dem Vormonat
- Die Monthly Statistics vergleichen die gesamte Fokuszeit des ausgewählten Monats automatisch mit dem direkten Vormonat.
- Anzeige der Fokuszeit beider Monate sowie der absoluten und prozentualen Veränderung, z. B. „12 % mehr Fokuszeit als im Vormonat“.
- Bei weniger Fokuszeit wird die Veränderung entsprechend als Rückgang dargestellt.
- Wenn im Vormonat keine Fokuszeit erfasst wurde, wird statt einer irreführenden Prozentangabe ein neutraler Hinweis angezeigt.
- Der Vergleich aktualisiert sich automatisch beim Wechsel des ausgewählten Monats.



### Kategorie-Filter für Statistiken
- In den Daily, Weekly, Monthly und Overall Statistics kann nach einer einzelnen Kategorie oder nach mehreren Kategorien gleichzeitig gefiltert werden.
- Zusätzlich gibt es die Ansicht „Alle Kategorien“ als Standard.
- Mehrfachauswahl ermöglicht beispielsweise die gemeinsame Analyse von Music Production und Mixing & Mastering.
- Bei mehreren ausgewählten Kategorien werden Fokuszeiten und Session-Anzahlen dieser Kategorien gemeinsam ausgewertet; jede Session wird dabei nur einmal gezählt.
- Die Filteroptionen übernehmen automatisch die Kategorien aus dem gemeinsamen SATYRN-Kategoriensystem einschließlich eigener Dashboard-Kategorien.
- Bei Auswahl einer oder mehrerer Kategorien beziehen sich Fokuszeiten, Session-Anzahlen, Produktivitätswerte und Rekorde auf die ausgewählten Kategorien.
- Zeitvergleiche bleiben auf denselben Zeitraum und dieselbe Kategorieauswahl bezogen; die Vergleichsperiode verwendet also exakt dieselben ausgewählten Kategorien.
- Die Kategorieauswahl ist in allen Statistik-Zeiträumen konsistent und ohne Seitenwechsel erreichbar.


### Bedienung der Kategorie-Mehrfachauswahl
- Die Kategorie-Mehrfachauswahl in den Statistiken übernimmt die Bedienlogik und das visuelle Auswahlverhalten des Important-Tabs.
- Kategorien werden als farbige Auswahl-Chips bzw. Auswahl-Elemente mit eindeutig erkennbarem ausgewähltem Zustand dargestellt.
- Mehrere Kategorien können unabhängig voneinander aktiviert und deaktiviert werden.
- Die Auswahl unterstützt auch „Alle Kategorien“ als Standardansicht; die Bedienung bleibt über Daily, Weekly, Monthly und Overall konsistent.


### Kategorieauswahl beim Wechsel der Statistik-Zeiträume
- Die aktuell ausgewählte Kategorie bzw. Kategorie-Kombination bleibt beim Wechsel zwischen Daily, Weekly, Monthly und Overall erhalten.
- Auch „Alle Kategorien“ bleibt als Auswahl erhalten, wenn diese Ansicht aktiv ist.
- Die Auswahl wird nicht bei jedem Zeitraumwechsel zurückgesetzt; sie ändert sich nur durch eine bewusste neue Auswahl des Nutzers.


### Kategorie-Filter zurücksetzen
- Die Statistik-Filter erhalten eine gut erreichbare Aktion „Filter zurücksetzen“.
- Aktiviert setzt sie die Kategorieauswahl auf „Alle Kategorien“ zurück.
- Die Aktion verändert keine Sessions oder gespeicherten Daten, sondern ausschließlich den aktiven Statistik-Filter.
- Sie ist in Daily, Weekly, Monthly und Overall konsistent verfügbar.


### Frei wählbarer Statistik-Zeitraum
- Zusätzlich zu Daily, Weekly, Monthly und Overall gibt es einen frei wählbaren Zeitraum mit Start- und Enddatum.
- Der Zeitraum wird über eine Datumsbereich-Auswahl festgelegt; das Enddatum darf nicht vor dem Startdatum liegen.
- Alle passenden Statistikwerte, Diagramme, Kategorieauswertungen und Session-Anzahlen werden auf den gewählten Zeitraum begrenzt.
- Die bestehende Kategorie-Mehrfachauswahl bleibt auch für den frei wählbaren Zeitraum nutzbar und wird beim Wechsel zwischen den Statistik-Ansichten nicht zurückgesetzt.
- Der frei gewählte Zeitraum verändert keine gespeicherten Sessions oder die vordefinierten Daily-, Weekly-, Monthly- und Overall-Ansichten.

### Visuelle Kennzeichnung der Zeitvergleiche
- Die Vergleichswerte in Daily, Weekly und Monthly Statistics erhalten eine dezente visuelle Kennzeichnung mit Richtungspfeil und Farbe.
- Grün mit Pfeil nach oben bei mehr Fokuszeit, Rot mit Pfeil nach unten bei weniger Fokuszeit und eine neutrale Darstellung bei unveränderter Fokuszeit.
- Die absolute und prozentuale Veränderung bleibt zusätzlich als Text sichtbar; die Bedeutung ist also nicht allein von der Farbe abhängig.
- Bei fehlender Vergleichsbasis wird der neutrale Hinweis ohne irreführenden Richtungspfeil angezeigt.

### Overall Statistics
- Gesamte jemals erfasste Fokuszeit.
- Gesamtanzahl abgeschlossener, unterbrochener und endgültig verworfener Sessions.
- Produktivste Kategorie über den gesamten erfassten Zeitraum.
- Durchschnittliche Fokuszeit pro Tag mit Aktivität.
- Durchschnittliche Dauer abgeschlossener Sessions.
- Die Gesamtstatistik berücksichtigt alle gespeicherten Sessions und wird nach Änderungen an Sessions automatisch aktualisiert.


### Statistik-Export
- Die Statistiken erhalten eine Exportfunktion, mit der die aktuell ausgewerteten Daten als CSV-Datei heruntergeladen werden können.
- Der Export berücksichtigt den aktiven Statistik-Zeitraum (Daily, Weekly, Monthly, Overall oder frei gewählter Zeitraum) sowie die aktuell ausgewählte Kategorie bzw. Kategorie-Kombination.
- Exportiert werden die relevanten Kennzahlen und zugrunde liegenden Auswertungswerte in einer strukturierten, tabellarisch nutzbaren CSV-Datei.
- Der Export verändert keine gespeicherten Sessions oder Statistikdaten.


### PDF-Export der Statistiken
- Zusätzlich zum CSV-Export gibt es einen PDF-Export der aktuell angezeigten Statistik-Auswertung.
- Der PDF-Bericht berücksichtigt den aktiven Statistik-Zeitraum und die ausgewählte Kategorie bzw. Kategorie-Kombination.
- Der Bericht enthält die wichtigsten Kennzahlen, Vergleichswerte (sofern für die jeweilige Ansicht vorgesehen) und passende Diagramme in einem übersichtlichen, druckbaren Layout.
- Beim frei gewählten Zeitraum wird kein zusätzlicher Vergleich mit einem vorherigen Zeitraum ergänzt.
- Der PDF-Export verändert keine gespeicherten Sessions oder Statistikdaten.


### PDF-Bericht: SATYRN-Branding und Metadaten
- Jeder PDF-Statistikbericht enthält automatisch das SATYRN-Logo und den Schriftzug im bestehenden SATYRN-HQ-Design.
- Das Erstellungsdatum des Berichts wird gut lesbar ausgewiesen.
- Branding und Metadaten werden konsistent in das druckfreundliche PDF-Layout integriert, ohne die Kennzahlen und Diagramme zu überladen.


### PDF-Export: Berichtsumfang
- Vor dem PDF-Export kann zwischen zwei Berichtsumfängen gewählt werden:
  - **Kompakter Bericht:** eine übersichtliche Seite mit den wichtigsten Kennzahlen und dem gewählten Zeitraum bzw. den ausgewählten Kategorien.
  - **Ausführlicher Bericht:** mehrseitiger Bericht mit allen relevanten Kennzahlen, Diagrammen, Vergleichswerten (sofern für die jeweilige Ansicht vorgesehen) und Details der aktuellen Auswertung.
- Beide Varianten enthalten das SATYRN-Branding und das Erstellungsdatum.
- Beide Varianten berücksichtigen dieselben aktiven Zeitraum- und Kategorie-Filter.


### Gemeinsamer Statistik-Export
- CSV- und PDF-Export werden über einen gemeinsamen Button „Exportieren“ aufgerufen.
- Der Button öffnet ein kompaktes Auswahlfenster mit den Formaten CSV und PDF.
- Bei PDF kann im selben Ablauf zwischen kompaktem und ausführlichem Bericht gewählt werden.
- Der Export übernimmt die aktuell aktiven Zeitraum- und Kategorie-Filter.
- Das Auswahlfenster folgt dem bestehenden SATYRN-HQ-Design und lässt sich ohne Export schließen.


### Vorschau vor dem Statistik-Export
- Vor dem Herunterladen kann eine Vorschau des gewählten Exports geöffnet werden.
- Die Vorschau zeigt die tatsächlich enthaltenen Kennzahlen, Diagramme, den ausgewählten Zeitraum, die aktiven Kategorien sowie das SATYRN-Branding.
- Bei PDF wird die Vorschau im gewählten Umfang (kompakt oder ausführlich) dargestellt.
- Bei CSV werden die enthaltenen Spalten und ein übersichtlicher Ausschnitt der exportierten Datensätze angezeigt.
- Aus der Vorschau kann der Nutzer den Export bestätigen oder zurückkehren, um Format bzw. Berichtsumfang zu ändern.
- Die Vorschau verändert keine gespeicherten Sessions oder Statistikdaten.


### Eigenständiges Vorschaufenster für Exporte
- Die Export-Vorschau öffnet sich in einem eigenen Fenster bzw. Modal und nicht innerhalb des Export-Auswahlfensters.
- Das Export-Auswahlfenster führt zur Vorschau; von dort kann der Nutzer den Export bestätigen oder zur Formatauswahl zurückkehren.
- Die Vorschau besitzt eine klare eigene Kopfzeile sowie gut erreichbare Aktionen zum Exportieren und Zurückkehren.
- Das Fenster folgt dem SATYRN-HQ-Modalverhalten und bleibt innerhalb des verfügbaren Viewports bedienbar.


### Verhalten des Export-Vorschaufensters
- Das eigenständige Vorschaufenster übernimmt das Modalverhalten des Fensters zum Erstellen einer Aufgabe im Important-Tab.
- Ein Klick außerhalb des Fensters schließt es nicht.
- Esc und die Schließen-/Zurück-Aktion folgen dem entsprechenden Schließablauf des Important-Modals.
- Falls innerhalb der Vorschau Änderungen an Exportoptionen vorgenommen wurden, die noch nicht bestätigt sind, erscheint vor dem Verwerfen eine Sicherheitsabfrage.
- „Weiter bearbeiten“ behält die vorgenommenen Einstellungen; „Änderungen verwerfen“ verwirft sie und kehrt zur Exportauswahl zurück.
- Der eigentliche Export wird ausschließlich durch die ausdrückliche Bestätigung über „Exportieren“ gestartet.


### Seitennavigation in der PDF-Vorschau
- Die PDF-Vorschau bietet bei mehrseitigen Berichten eine Seitennavigation.
- Nutzer können bequem zur vorherigen bzw. nächsten Seite wechseln und die aktuelle Seitenzahl im Verhältnis zur Gesamtseitenzahl sehen.
- Die Navigation ist auch bei längeren ausführlichen Berichten gut erreichbar.
- Bei einem einseitigen kompakten Bericht wird keine unnötige Seitennavigation eingeblendet.


### Zoom in der PDF-Vorschau
- Die PDF-Vorschau bietet einen Zoom-Regler, mit dem Texte und Diagramme vergrößert und verkleinert werden können.
- Zusätzlich gibt es eine Aktion „An Seite anpassen“, um die aktuelle PDF-Seite wieder vollständig in den Vorschau-Bereich einzupassen.
- Der Zoom verändert ausschließlich die Darstellung in der Vorschau, nicht das exportierte PDF.
- Die Seitennavigation bleibt auch bei verändertem Zoom bedienbar.


### Standard-Zoom beim Öffnen der PDF-Vorschau
- Beim Öffnen der PDF-Vorschau wird automatisch „An Seite anpassen“ aktiviert.
- Der Nutzer kann den Zoom anschließend jederzeit manuell verändern.
- Beim erneuten Öffnen startet die Vorschau wieder mit „An Seite anpassen“.

### Fokusziele
- Individuell einstellbares Tagesziel.
- Individuell einstellbares Wochenziel.
- Fortschrittsbalken und Prozentanzeige für beide Ziele.
- Anzeige der noch fehlenden Fokuszeit.
- Ziele können jederzeit angepasst werden.


### Rekord für längste zusammenhängende Fokuszeit
- In den Overall Statistics wird die längste zusammenhängende Fokuszeit als persönlicher Rekord angezeigt.
- Angezeigt werden die erreichte Dauer und das Datum, an dem der Rekord erzielt wurde.
- Als zusammenhängend gilt die tatsächlich erfasste Fokuszeit einer Session; reguläre Pausen zählen nicht zur Fokuszeit und setzen den Rekord nicht künstlich herauf.
- Der Rekord wird automatisch aktualisiert, wenn eine Session einen neuen Höchstwert erreicht.

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




### Hauptaufgabe bei der Session-Erstellung
- Die Auswahl einer Hauptaufgabe ist beim Erstellen einer Focus-Session optional.
- Eine Session kann direkt ohne Hauptaufgabe gestartet werden und zunächst als Free Focus laufen.
- Wenn mehrere Important-Aufgaben mit der Session verknüpft sind, kann eine davon als Hauptaufgabe festgelegt werden. Die bestehenden Regeln für zusätzliche Aufgaben und den automatischen Wechsel gelten dann.
- Es wird keine Aufgabe automatisch zur Hauptaufgabe gemacht, nur weil die Session ohne Hauptaufgabe gestartet wurde.

### Hauptaufgabe und zusätzliche Important-Aufgaben
- Eine Focus-Session mit mehreren verknüpften Important-Aufgaben kann genau eine davon als Hauptaufgabe festlegen; die übrigen sind zusätzliche Aufgaben.
- Die Hauptaufgabe wird in der Session klar hervorgehoben, bleibt aber Teil derselben Verknüpfungs- und Synchronisierungslogik.
- Haupt- und zusätzliche Aufgaben können unabhängig voneinander als erledigt markiert werden.
- Wird die Hauptaufgabe erledigt, wird sie in Important als erledigt markiert und aus der aktiven Aufgabenliste der Focus-Session ausgeblendet. Noch offene zusätzliche Aufgaben bleiben verknüpft und können später separat bearbeitet werden.
- Das Erledigen der Hauptaufgabe beendet die Focus-Session nicht automatisch und erledigt keine zusätzlichen Aufgaben.
- Die Session-History bewahrt die damalige Hauptaufgabe sowie den Status aller verknüpften Aufgaben nachvollziehbar auf.
- Die Hauptaufgabe kann bei Bedarf manuell unter den noch offenen verknüpften Aufgaben geändert werden.


### Visuelle Hervorhebung der Hauptaufgabe
- Die Hauptaufgabe wird im Focus Mode als größeres, klar hervorgehobenes Aufgabenelement dargestellt.
- Zusätzliche verknüpfte Aufgaben erscheinen darunter kompakter und visuell zurückhaltender.
- Die Darstellung bleibt im Premium-Dark-Design und nutzt die bestehenden Kategorie- und Prioritätsfarben aus Important.
- Die Hervorhebung dient der Orientierung und erzeugt keine zusätzliche Priorität neben der bereits festgelegten Prioritätslogik.


### Automatischer Wechsel der Hauptaufgabe
- Sobald die aktuelle Hauptaufgabe als erledigt markiert wird, wird automatisch die nächste noch offene zusätzliche Aufgabe zur Hauptaufgabe.
- Die neue Hauptaufgabe erhält unmittelbar die hervorgehobene Darstellung; die übrigen offenen Aufgaben bleiben zusätzliche Aufgaben.
- Der automatische Wechsel erledigt, entfernt oder verändert keine der übrigen Aufgaben.
- Sind keine offenen zusätzlichen Aufgaben mehr vorhanden, gibt es keine Hauptaufgabe mehr in dieser Session.


### Reihenfolge zusätzlicher Aufgaben per Drag & Drop
- Zusätzliche verknüpfte Aufgaben können per Drag & Drop frei sortiert werden.
- Die festgelegte Reihenfolge bestimmt, welche offene Zusatzaufgabe nach Erledigung der aktuellen Hauptaufgabe automatisch zur neuen Hauptaufgabe wird.
- Die Reihenfolge bleibt beim Pausieren, Unterbrechen und Fortsetzen der Session erhalten.
- Erledigte oder entfernte Aufgaben werden aus der aktiven Reihenfolge genommen; die verbleibende Reihenfolge rückt entsprechend zusammen.
- Die Sortierung verändert keine Prioritäten oder Daten der verknüpften Important-Aufgaben.


### Hauptaufgabe manuell wechseln
- Der Nutzer kann jederzeit selbst eine andere offene zusätzliche Aufgabe zur Hauptaufgabe machen.
- Der Wechsel erfolgt über eine Auswahl der offenen Zusatzaufgaben und muss vor der Übernahme bestätigt werden.
- Bei Abbrechen bleibt die bisherige Hauptaufgabe unverändert.
- Nach Bestätigung wird die ausgewählte Aufgabe zur hervorgehobenen Hauptaufgabe; die bisherige Hauptaufgabe wird entsprechend der Aufgabenreihenfolge als zusätzliche Aufgabe einsortiert.
- Die manuelle Änderung beeinflusst nicht den Erledigungsstatus oder die Priorität der Aufgaben.
- Die Sicherheitsabfrage folgt dem einheitlichen Sicherheitsabfrage-System aus dem Important-Tab.


### Spätere Dashboard-Analytics: durchschnittliche Erledigungsdauer nach Priorität
- Für das spätere Dashboard soll ausgewertet werden, wie lange Aufgaben durchschnittlich bis zur Erledigung benötigen, aufgeschlüsselt nach ihrer jeweiligen Priorität.
- Die Auswertung soll als Grundlage für Analytics und realistische Wahrscheinlichkeits-/Zeitprognosen dienen.
- Dafür müssen mindestens Erstellungszeitpunkt, Erledigungszeitpunkt und die relevante Prioritätsinformation einer Aufgabe nachvollziehbar gespeichert werden.
- Diese Kennzahl ist als spätere Dashboard-Anforderung vorgemerkt und gehört nicht zur aktuellen Focus-Mode-Umsetzung.
- Die genaue Berechnung (z. B. Umgang mit zwischenzeitlichen Prioritätsänderungen und pausierten Aufgaben) wird bei der Dashboard-Planung festgelegt.

### Keine neuen Important-Aufgaben während einer laufenden Focus-Session
- Während einer laufenden, pausierten oder unterbrochenen Focus-Session können keine neuen Important-Aufgaben nachträglich mit dieser Session verknüpft werden.
- Neue Einfälle oder Aufgaben werden stattdessen in den Session-Notizen festgehalten.
- Wenn eine notierte Aufgabe später bearbeitet werden soll, wird dafür eine eigene Focus-Session gestartet und die Aufgabe dort verknüpft.
- Bereits bestehende Verknüpfungen und alle festgelegten Synchronisierungs-, Prioritäts- und Hauptaufgabenregeln bleiben unverändert.


### Verknüpfte Aufgaben ohne Hauptaufgabe
- Eine Focus-Session darf ohne ausgewählte Hauptaufgabe gestartet werden.
- Bereits mit der Session verknüpfte, offene Important-Aufgaben werden auch dann als zusätzliche Aufgaben angezeigt.
- Es gibt in diesem Fall keine hervorgehobene Hauptaufgabe; alle verknüpften Aufgaben erscheinen in der zusätzlichen Aufgabenliste.
- Die bestehenden Regeln für Reihenfolge, Erledigen, Synchronisierung und spätere Auswahl einer Hauptaufgabe gelten weiterhin.


### Hauptaufgabe während einer laufenden Session wechseln
- Während einer laufenden, pausierten oder unterbrochenen Session kann eine offene zusätzliche Aufgabe manuell zur Hauptaufgabe gemacht werden.
- Der Wechsel erfordert eine Sicherheitsabfrage im gleichen Stil wie die Bestätigungsabfragen im Important-Bereich.
- Nach Bestätigung wird die bisherige Hauptaufgabe entsprechend der bestehenden Aufgabenreihenfolge als zusätzliche Aufgabe einsortiert; die ausgewählte Aufgabe wird hervorgehoben.
- Aufgabenstatus, Verknüpfungen, Notizen, Ablenkungsprotokoll und Zeitdaten bleiben unverändert.

### Focus-Session direkt über das Important-Drei-Punkte-Menü starten
- Im Drei-Punkte-Menü einer Important-Aufgabe gibt es eine Aktion, um direkt eine Focus-Session mit dieser Aufgabe vorzubereiten.
- Die Aktion öffnet die Focus-Session-Vorbereitung; die Session startet nicht sofort.
- Titel, Beschreibung und weitere für Focus relevante Aufgabendaten werden automatisch aus Important übernommen.
- Die Focus-Session wird automatisch mit der ausgewählten Important-Aufgabe verknüpft.
- Die übernommenen Angaben können vor dem Start in der Vorbereitung angepasst werden.
- Die Focus- und Pausendauer müssen vor dem Start ausdrücklich ausgewählt bzw. bestätigt werden; es wird keine Session mit ungeprüften Standardzeiten sofort gestartet.
- Die bestehende Prioritäts-, Kategorie- und Synchronisierungslogik für verknüpfte Aufgaben gilt weiterhin.

### Hauptaufgabe beim Schnellstart aus Important
- Wird eine Focus-Session über das Drei-Punkte-Menü einer Important-Aufgabe vorbereitet, wird diese Aufgabe automatisch als Hauptaufgabe vorausgewählt.
- Die Aufgabe bleibt bis zum tatsächlichen Session-Start in der Vorbereitung bearbeitbar; die Hauptaufgabe kann dort bei Bedarf geändert werden.
- Die automatische Vorauswahl hebt die Pflicht zur Prüfung bzw. Anpassung der Focus- und Pausendauer vor dem Start nicht auf.


### Kategorie beim Schnellstart aus Important übernehmen
- Beim Schnellstart einer Focus-Session über eine Important-Aufgabe wird auch deren Kategorie automatisch übernommen.
- Die übernommene Kategorie ist in der Focus-Vorbereitung weiterhin änderbar.
- Die bestehende Synchronisierung und Farbzuordnung für verknüpfte Aufgaben bleibt bestehen.


### Beschreibung als Session-Ziel übernehmen
- Beim Schnellstart aus Important wird die Aufgabenbeschreibung automatisch auch als Session-Ziel übernommen.
- Das Session-Ziel bleibt in der Focus-Vorbereitung ein eigenes, bearbeitbares Feld und kann unabhängig von der ursprünglichen Important-Beschreibung angepasst werden.
- Die ursprüngliche Beschreibung der verknüpften Important-Aufgabe bleibt als Aufgabendetail erhalten und wird durch Änderungen am Session-Ziel nicht überschrieben.


### Unteraufgaben beim Schnellstart aus Important übernehmen
- Beim Schnellstart einer Focus-Session aus einer Important-Aufgabe werden deren Unteraufgaben automatisch in die Session übernommen.
- Unteraufgaben werden in der Vorbereitung angezeigt und bleiben entsprechend der bestehenden Focus-Regeln bearbeitbar.
- Die bestehende Synchronisierung von Änderungen an verknüpften Important-Unteraufgaben gilt weiterhin für offene Sessions; abgeschlossene Sessions behalten ihren Snapshot.


### Unteraufgabenstatus beim Schnellstart übernehmen
- Beim Schnellstart werden auch die aktuellen Erledigt-/Offen-Status aller übernommenen Important-Unteraufgaben übernommen.
- Bereits erledigte Unteraufgaben erscheinen in der Focus-Session direkt als erledigt; offene bleiben offen.
- Die bestehende Synchronisierung von Statusänderungen zwischen Important und offenen verknüpften Focus-Sessions bleibt maßgeblich.


### Geschätzte Aufgabendauer beim Schnellstart übernehmen
- Falls für die Important-Aufgabe eine geschätzte Dauer hinterlegt ist, wird sie beim Schnellstart in die Focus-Vorbereitung übernommen.
- Die übernommene Schätzung dient als vorausgefüllter Wert und kann vor dem Start angepasst werden.
- Die Focus- und Pausendauer des Timers müssen weiterhin separat geprüft bzw. bestätigt werden; die Aufgabenschätzung ersetzt diese Timer-Einstellungen nicht.
- Ist keine Schätzung hinterlegt, bleibt das entsprechende Feld leer.


### Fälligkeitsfrist beim Schnellstart anzeigen
- Falls für die Important-Aufgabe eine Fälligkeitsfrist hinterlegt ist, wird sie beim Schnellstart in der Focus-Vorbereitung angezeigt.
- Die Fälligkeitsfrist wird informativ übernommen und verändert weder Timer-Einstellungen noch Session-Ziel.
- Die Frist bleibt mit der verknüpften Important-Aufgabe verbunden und folgt der bestehenden Synchronisierungslogik.
- Ist keine Fälligkeitsfrist hinterlegt, wird keine angezeigt.


### Fälligkeitsfrist während der Focus-Session anzeigen
- Eine vorhandene Fälligkeitsfrist bleibt auch während der laufenden Focus-Session sichtbar.
- Sie wird direkt unter der Hauptaufgabe angezeigt; gibt es keine Hauptaufgabe, erscheint sie dezent im Aufgabenbereich der Session.
- Die Anzeige ist informativ und verändert weder Timer noch Session-Ziel.
- Änderungen an der Fälligkeitsfrist in der verknüpften Important-Aufgabe werden gemäß der bestehenden Synchronisierungslogik übernommen.


### Überfällige Aufgaben in der Focus-Session kennzeichnen
- Ist die Fälligkeitsfrist einer verknüpften Important-Aufgabe überschritten und die Aufgabe noch offen, wird sie in der Focus-Session dezent rot gekennzeichnet.
- Die Kennzeichnung erscheint bei der Fälligkeitsanzeige unter der Hauptaufgabe bzw. im Aufgabenbereich, wenn keine Hauptaufgabe ausgewählt ist.
- Die Darstellung bleibt zurückhaltend und verändert weder Priorität noch Session-Verhalten oder Timer.
- Sobald die Aufgabe erledigt oder die Frist angepasst wird, wird die Überfällig-Kennzeichnung entsprechend aktualisiert.


### Fälligkeitsanzeige zur Important-Aufgabe verlinken
- Die Fälligkeitsanzeige in der Focus-Session ist anklickbar.
- Ein Klick öffnet direkt die zugehörige Aufgabe im Important-Bereich, damit Details oder die Fälligkeitsfrist dort bearbeitet werden können.
- Die Focus-Session bleibt dabei erhalten und läuft unverändert weiter.


### Änderungen in Important sofort in der Focus-Ansicht aktualisieren
- Änderungen an einer verknüpften Important-Aufgabe werden unmittelbar in der Focus-Ansicht aktualisiert, auch wenn die Bearbeitung während einer laufenden Focus-Session erfolgt.
- Das gilt insbesondere für Titel, Beschreibung, Kategorie, Priorität, Unteraufgaben und Fälligkeitsfrist gemäß den bestehenden Synchronisierungsregeln.
- Die Aktualisierung darf den laufenden Timer, Session-Status, Session-Notizen, das Ablenkungsprotokoll oder die erfassten Zeitdaten nicht zurücksetzen oder verändern.
- Die Bearbeitung in Important bleibt optional; die Focus-Session kann unverändert weiterlaufen.


### Zurück-zur-Session-Navigation aus Important
- Wird eine verknüpfte Important-Aufgabe über die Fälligkeitsanzeige in Focus geöffnet, erscheint im Important-Bereich eine gut sichtbare Aktion „Zurück zur Focus-Session“.
- Die Aktion führt direkt zur zuvor geöffneten Focus-Session zurück.
- Der aktuelle Session-Zustand bleibt während des Wechsels erhalten; Timer und Session werden nicht neu gestartet oder zurückgesetzt.
- Bei mehreren offenen Sessions führt die Aktion genau zur Session, aus der die Aufgabe geöffnet wurde.


### Zurück-zur-Session-Zugriff seitenübergreifend verfügbar
- Die Rückkehr zur zuletzt verlassenen Focus-Session bleibt auch beim Wechsel auf andere SATYRN-HQ-Seiten verfügbar.
- Eine dezente, seitenübergreifende Aktion „Zurück zur Focus-Session“ führt zur exakt zugehörigen offenen Session.
- Die Aktion wird nur angezeigt, solange eine passende offene Session existiert, und verändert deren Timer- oder Session-Zustand nicht.


### Focus-Rückkehrbutton mit kleinem Session-Fenster
- Die seitenübergreifende Aktion „Zurück zur Focus-Session“ zeigt ein kleines, dezentes Info-Fenster bzw. Popover.
- Darin werden der Session-Status (läuft, pausiert oder unterbrochen) und passende zeitliche Informationen angezeigt.
- Bei laufender Session wird die verbleibende Focus-Zeit angezeigt; bei pausierter oder unterbrochener Session die Zeit seit der letzten Pause bzw. Unterbrechung.
- Das Fenster bietet weiterhin den direkten Rücksprung zur exakt zugehörigen Session.
- Die Anzeige aktualisiert sich passend zum Session-Zustand und bleibt kompakt, damit sie andere Seiten nicht stört.


### Hauptaufgabentitel im Focus-Rückkehrfenster
- Das kleine Info-Fenster des seitenübergreifenden Focus-Rückkehrbuttons zeigt zusätzlich ausschließlich den Titel der aktuellen Hauptaufgabe.
- Beschreibung und weitere Aufgabendetails werden dort nicht angezeigt.
- Ist keine Hauptaufgabe ausgewählt, wird an dieser Stelle kein Aufgabentitel angezeigt.


### Focus-Rückkehrfenster per Hover anzeigen
- Das kleine Info-Fenster öffnet sich bereits beim Darüberfahren mit der Maus über den seitenübergreifenden Focus-Rückkehrbutton.
- Der Klick auf den Button führt weiterhin direkt zur zugehörigen Focus-Session.
- Auf Touch-Geräten ohne Hover wird das Info-Fenster durch Antippen des Buttons bzw. eines separaten Info-Bereichs zugänglich gemacht, ohne den direkten Rücksprung unklar zu machen.


### Sichtbarkeit des Focus-Rückkehrbuttons
- Der seitenübergreifende Button „Zurück zur Focus-Session“ wird nur angezeigt, wenn sich der Nutzer außerhalb der Focus-Seite befindet und eine passende offene Session existiert.
- Auf der Focus-Seite selbst wird dieser zusätzliche Rückkehrbutton ausgeblendet.
- Beim Wechsel auf eine andere SATYRN-HQ-Seite wird er wieder eingeblendet, solange die zugehörige Session offen ist.


### Darstellung und Schließverhalten der Session-Vorbereitung
- Die Session-Vorbereitung erscheint als eigenes Modal/Fenster innerhalb der Focus-Seite – nach demselben Interaktions- und Schließverhalten wie das Erstellen einer neuen Aufgabe auf der Important-Seite.
- Die Vorbereitung ist kein dauerhaft eingeblendeter Seitenbereich.
- Das Fenster enthält die für die Session relevanten Einstellungen und übernommenen Aufgabendaten; der Timer startet erst nach ausdrücklicher Bestätigung.
- Gestaltung und Bedienung orientieren sich an der bestehenden Important-Erstellungsmaske, bleiben aber auf die Focus-Session zugeschnitten.
- Ein Klick auf den Hintergrund außerhalb des Modals schließt es nicht.
- `Esc` und die Schaltfläche „Abbrechen“ lösen denselben Schließvorgang aus.
- Wenn seit dem Öffnen Änderungen vorgenommen wurden, erscheint vor dem Schließen eine Sicherheitsabfrage zum Verwerfen der Änderungen.
- Wenn keine Änderungen vorgenommen wurden, schließt sich das Modal direkt ohne zusätzliche Abfrage.
- In der Sicherheitsabfrage kann das Verwerfen abgebrochen werden; dann bleibt das Modal mit allen Eingaben geöffnet. Erst die ausdrückliche Bestätigung verwirft die Änderungen und schließt das Modal.
- Das Starten bestätigt die Vorbereitung und startet die Session; es ist kein Schließvorgang mit Verwerfen.


### Einheitliche Eingabefelder und Validierung
- Die Eingabefelder in der Session-Vorbereitung verwenden dieselbe Gestaltung, Bedienlogik und Validierung wie die entsprechenden Felder auf der Important-Seite.
- Wo Felder oder Daten zwischen Important und Focus verknüpft sind, werden gemeinsame Regeln und kompatible Datenstrukturen verwendet, damit Übernahme und Synchronisierung konsistent funktionieren.
- Focus-spezifische Felder bleiben eigenständig und überschreiben keine Quelldaten der Important-Aufgabe.


### Synchronisierung erst beim Start der Session
- Änderungen und Einstellungen, die während der Session-Vorbereitung an übernommenen/verknüpften Aufgabendaten vorgenommen werden, werden zunächst nur als Vorbereitung behandelt.
- Die Synchronisierung bzw. Übernahme in die aktive Verknüpfung mit Important wird erst durch ausdrückliches Starten der Session wirksam.
- Wird die Vorbereitung abgebrochen, werden keine Änderungen an der ursprünglichen Important-Aufgabe vorgenommen.


### Zusammenfassung vor dem endgültigen Session-Start
- Nach Abschluss der Session-Vorbereitung wird vor dem tatsächlichen Start eine kompakte Zusammenfassung der übernommenen und geänderten Daten angezeigt.
- Die Zusammenfassung dient als letzte Kontrolle; erst die ausdrückliche Bestätigung startet die Session und aktiviert die Verknüpfung/Synchronisierung mit Important.
- Bei Rückkehr zur Bearbeitung bleiben die Eingaben der Vorbereitung erhalten.


### Platzierung der Start-Zusammenfassung
- Die abschließende Zusammenfassung erscheint direkt im bestehenden Session-Vorbereitungsfenster und nicht in einem separaten Bestätigungs-Popup.
- Die Start-Schaltfläche befindet sich bei dieser Zusammenfassung; erst ihre ausdrückliche Betätigung startet die Session.
- Die Vorbereitung bleibt bis zur Bestätigung im selben Fenster bearbeitbar.


### Scrollverhalten und Positionierung des Vorbereitungsfensters
- Das Vorbereitungsfenster bleibt im Viewport sauber zentriert und orientiert sich an der bestehenden Modal-Positionierung der Important-Seite.
- Bei umfangreichen Inhalten scrollt der Inhaltsbereich innerhalb des Fensters; die Aktionsleiste mit Starten und Abbrechen bleibt unten fest sichtbar.
- Beim Scrollen darf der Fensterinhalt nicht über die obere Headbar hinausragen bzw. vor ihr liegen: Er wird an der Headbar begrenzt und verschwindet beim Scrollen dahinter.
- Zentrierung, Ebenenreihenfolge und Scrollverhalten sollen mit dem bestehenden Layout der Important-Seite konsistent bleiben.


### Responsive Fensterhöhe
- Die Höhe des Session-Vorbereitungsfensters passt sich automatisch an den verfügbaren Bildschirmplatz an.
- Auf kleineren Monitoren bleibt das Fenster innerhalb des sichtbaren Bereichs; der Inhaltsbereich wird entsprechend scrollbar.
- Die feste Aktionsleiste mit Starten und Abbrechen bleibt erreichbar, ohne dass das Fenster die Headbar überlagert.


### Mobile-Darstellung des Vorbereitungsfensters
- Auch auf Smartphones wird die Session-Vorbereitung als Modal dargestellt und nicht als separate Vollbildseite.
- Das Modal passt Breite und Höhe an den verfügbaren Bildschirmplatz an; Inhalte bleiben intern scrollbar und die Aktionsleiste bleibt erreichbar.
- Die Darstellung bleibt klar als überlagerndes Fenster erkennbar und berücksichtigt sichere Bildschirmabstände.


### Animation des Vorbereitungsfensters
- Öffnen und Schließen des Session-Vorbereitungsmodals verwenden dieselbe Animation und dasselbe Timing wie das Modal auf der Important-Seite.
- Bewegungsablauf und Übergänge bleiben konsistent mit dem bestehenden SATYRN-HQ-Modalverhalten.


### Hervorgehobene Hauptaufgabe in der Session-Vorbereitung
- Die Hauptaufgabe steht ganz oben im Session-Vorbereitungsfenster.
- Sie wird optisch deutlich hervorgehoben und folgt derselben visuellen Hierarchie wie die Hauptaufgabe in der aktiven Focus-Ansicht.
- Zusätzliche Aufgaben werden darunter nachgeordnet dargestellt.


### Kompakte Liste zusätzlicher Aufgaben in der Vorbereitung
- Zusätzliche Aufgaben erscheinen direkt unter der hervorgehobenen Hauptaufgabe als kompakte Liste.
- Jeder Eintrag zeigt Kategorie-Icon, die aus Important übernommene Prioritätsfarbe und den Aufgabennamen.
- Die Liste bleibt visuell der Hauptaufgabe untergeordnet und nutzt die bestehenden Kategorie- und Prioritätsdarstellungen von Important.


### Hauptaufgabe vor dem Start wechseln
- In der Session-Vorbereitung kann die Hauptaufgabe vor dem Start geändert werden.
- Eine andere bereits verknüpfte, offene zusätzliche Aufgabe kann als neue Hauptaufgabe ausgewählt werden.
- Die bisherige Hauptaufgabe wird dadurch zur zusätzlichen Aufgabe; Reihenfolge und Aufgabendaten bleiben erhalten.
- Die Auswahl ändert keine Priorität und verändert nicht die ursprünglichen Important-Aufgabendaten.


### Sicherheitsabfrage beim Wechsel der Hauptaufgabe vor dem Start
- Das Ändern der Hauptaufgabe in der Session-Vorbereitung erfordert eine Sicherheitsabfrage.
- Die Abfrage verwendet denselben Bestätigungsstil und Ablauf wie beim Wechsel der Hauptaufgabe während einer laufenden Focus-Session.
- Erst nach ausdrücklicher Bestätigung wird die neue Hauptaufgabe übernommen; bei Abbruch bleibt die bisherige Zuordnung unverändert.


### Zusätzliche Aufgaben in der Vorbereitung sortieren
- Zusätzliche Aufgaben können bereits im Session-Vorbereitungsfenster per Drag & Drop sortiert werden.
- Die Reihenfolge wird für die Session übernommen und bestimmt auch, welche offene zusätzliche Aufgabe bei Abschluss der Hauptaufgabe als Nächstes zur Hauptaufgabe wird.
- Das Sortieren verändert weder Prioritäten noch die Quelldaten der verknüpften Important-Aufgaben.


### Zusätzliche Aufgaben aus der Vorbereitung entfernen
- Einzelne zusätzliche Aufgaben können im Session-Vorbereitungsfenster aus der geplanten Session entfernt werden.
- Das Entfernen löst nur die Verknüpfung mit dieser Session; die ursprüngliche Important-Aufgabe bleibt bestehen und unverändert.
- Die übrigen Aufgaben und ihre Reihenfolge bleiben erhalten; eine entfernte Aufgabe wird nicht automatisch gelöscht oder anderweitig verändert.


### Weitere Important-Aufgaben in der Vorbereitung hinzufügen
- Im Session-Vorbereitungsfenster können weitere bereits bestehende, offene Important-Aufgaben zur geplanten Session hinzugefügt werden.
- Die hinzugefügten Aufgaben erscheinen zunächst als zusätzliche Aufgaben und können vor dem Start sortiert oder zur Hauptaufgabe gemacht werden.
- Die Verknüpfung und Synchronisierung werden erst beim ausdrücklichen Start der Session wirksam; bei Abbruch bleiben die ursprünglichen Important-Aufgaben unverändert.
- Diese Möglichkeit gilt nur während der Vorbereitung. Nach dem Start können keine neuen Important-Aufgaben zu dieser Session hinzugefügt werden.


### Suche beim Hinzufügen von Important-Aufgaben
- Beim Hinzufügen weiterer Important-Aufgaben steht direkt im Auswahlbereich eine Suchfunktion zur Verfügung.
- Die Suche filtert bestehende offene Important-Aufgaben live anhand ihres Aufgabennamens.
- Bereits zur geplanten Session hinzugefügte Aufgaben werden nicht erneut als auswählbare Treffer angeboten.


### Angaben in den Suchergebnissen für Important-Aufgaben
- Jeder Suchtreffer zeigt neben dem Aufgabennamen auch das Kategorie-Icon bzw. die Kategorie sowie die Priorität in der bestehenden Important-Farbgebung.
- Die Angaben dienen der schnellen Unterscheidung und ändern keine Aufgabendaten.


### Session ohne Hauptaufgabe mit zusätzlichen Important-Aufgaben
- Die Session kann ohne Hauptaufgabe gestartet werden und trotzdem bereits verknüpfte bzw. während der Vorbereitung ausgewählte offene Important-Aufgaben als zusätzliche Aufgaben enthalten.
- In diesem Fall wird keine Aufgabe automatisch zur Hauptaufgabe gemacht; die zusätzlichen Aufgaben bleiben in ihrer festgelegten Reihenfolge sichtbar.
- Eine Hauptaufgabe kann bei Bedarf vor dem Start oder später während der Session nach dem bestehenden Bestätigungsablauf festgelegt werden.


### Kategorie der Focus-Session
- Wenn eine Hauptaufgabe mit Important-Verknüpfung vorhanden ist, übernimmt die Focus-Session grundsätzlich deren Kategorie.
- Zusätzliche Aufgaben dürfen anderen Kategorien angehören; sie ändern die Session-Kategorie nicht.
- Gibt es keine Hauptaufgabe, wird die Kategorie für die Focus-Session manuell ausgewählt.
- Die Kategorie kann während der Session-Vorbereitung vor dem Start angepasst werden; die Änderung überschreibt nicht die Kategorie der ursprünglichen Important-Aufgabe.


### Priorität der Focus-Session bei mehreren Verknüpfungen
- Bei einer oder mehreren verknüpften Important-Aufgaben übernimmt die Focus-Session automatisch die höchste aktuelle Priorität aller verknüpften offenen Aufgaben.
- Ändern sich Prioritäten oder Verknüpfungen während der Vorbereitung, wird die Session-Priorität entsprechend neu berechnet.
- Die Priorität der ursprünglichen Important-Aufgaben wird dadurch nicht verändert.
- Ohne verknüpfte Important-Aufgabe wird die Priorität der Focus-Session manuell ausgewählt.


### Sichtbare Session-Priorität in der Vorbereitung
- Die aktuelle Priorität der Focus-Session wird im Vorbereitungsfenster sichtbar direkt neben der Session-Kategorie angezeigt.
- Die Darstellung verwendet den bestehenden Prioritätsindikator und die zugehörige Farbe aus Important.
- Bei verknüpften Aufgaben aktualisiert sich die Anzeige entsprechend der höchsten aktuellen Priorität; ohne Verknüpfung zeigt sie die manuell ausgewählte Priorität.


### Manuelle Kategorie-Änderung trotz verknüpfter Hauptaufgabe
- Die Kategorie der Focus-Session bleibt im Vorbereitungsfenster manuell änderbar, auch wenn eine Hauptaufgabe mit Important verknüpft ist.
- Die manuelle Auswahl gilt nur für die Focus-Session und überschreibt nicht die Kategorie der ursprünglichen Important-Aufgabe.
- Wird die Hauptaufgabe vor dem Start gewechselt, wird die Kategorie der Focus-Session zunächst aus der neuen Hauptaufgabe übernommen; eine danach vorgenommene manuelle Auswahl bleibt als Session-spezifische Einstellung bestehen.


### Gemeinsame benutzerdefinierte Kategorien aus dem Dashboard
- Benutzerdefinierte Kategorien, die später im Dashboard erstellt werden, erscheinen automatisch auch in der Kategorie-Auswahl von Focus.
- Focus verwendet dieselben Kategoriebezeichnungen, Icons und Farben wie die übrigen Bereiche.
- Das Erstellen, Bearbeiten oder Entfernen einer gemeinsamen Kategorie wird zentral übernommen; bestehende historische Sessions behalten ihre gespeicherte Kategorie-Darstellung, soweit dies für korrekte Statistiken erforderlich ist.


### Farbige Kategorie-Auswahl
- Die Kategorie-Auswahl im Session-Vorbereitungsfenster wird als direkt sichtbare Auswahl mit farbigen Kategorie-Karten bzw. Kacheln dargestellt, nicht als Dropdown.
- Jede Karte zeigt das Kategorie-Icon und den Kategorienamen und verwendet die gemeinsame Farbe aus dem Dashboard/Important.
- Die aktuell ausgewählte Kategorie ist eindeutig hervorgehoben; die Auswahl bleibt auch bei benutzerdefinierten Kategorien einheitlich.


### Responsives Raster der Kategorie-Kacheln
- Die farbigen Kategorie-Kacheln werden in einem flexiblen Raster nebeneinander angeordnet.
- Das Raster passt Spaltenzahl und Kachelbreite automatisch an die verfügbare Breite des Vorbereitungsfensters an.
- Auf schmalen Bildschirmen ordnen sich die Kacheln passend um; Beschriftungen und Auswahlzustand bleiben gut erkennbar.


### Manuelle Prioritätsauswahl ohne Important-Verknüpfung
- Wenn eine Focus-Session mit keiner Important-Aufgabe verknüpft ist, kann die Priorität manuell ausgewählt werden.
- Die Auswahl verwendet dieselben farbigen Prioritäts-Kacheln und dieselbe Bedienlogik wie auf der Important-Seite.
- Die ausgewählte Priorität wird in der Session angezeigt und verändert keine Important-Aufgaben.


### Flexible Anordnung der Prioritäts-Kacheln
- Die Prioritäts-Kacheln werden in einem flexiblen Raster nebeneinander angeordnet.
- Das Raster passt sich automatisch an die verfügbare Fensterbreite an und ordnet die Kacheln auf kleineren Bildschirmen beziehungsweise Smartphones passend um.
- Darstellung, Farben und Auswahlzustand bleiben an die Prioritätsauswahl auf der Important-Seite angelehnt.


### Anordnung von Kategorie und Priorität
- Kategorie-Auswahl und Prioritäts-Auswahl stehen im Session-Vorbereitungsfenster untereinander, nicht nebeneinander.
- Beide Bereiche behalten jeweils ihr eigenes flexibles Kachelraster und passen sich unabhängig an die verfügbare Breite an.


### Sichtbare Auswahlmarkierung
- Ausgewählte Kategorie- und Prioritäts-Kacheln zeigen zusätzlich einen kleinen Haken als eindeutige Auswahlmarkierung.
- Die bestehende farbliche Hervorhebung der ausgewählten Kachel bleibt erhalten; der Haken ergänzt sie lediglich.


### Standard-Priorität für freie Focus-Sessions
- Für freie Focus-Sessions ohne verknüpfte Important-Aufgabe ist standardmäßig die blaue Prioritätsstufe „Vorläufig“ ausgewählt.
- Die Priorität kann im Session-Vorbereitungsfenster manuell geändert werden.
- Bei verknüpften Important-Aufgaben gelten weiterhin die dortigen Prioritätsregeln: höchste aktuelle Priorität der verknüpften Aufgaben; keine Überschreibung der Quellaufgaben.


### Dauerhaft sichtbare Kategorie und Priorität
- Die ausgewählte Kategorie und Priorität bleiben im Session-Vorbereitungsfenster sichtbar, auch wenn der Nutzer weitere Einstellungen bearbeitet.
- Beide Auswahlbereiche bleiben an ihrer festgelegten Position untereinander; die aktuelle Auswahl samt farblicher Hervorhebung und Haken bleibt erkennbar.


### Kategorie und Priorität bleiben ausgeklappt
- Kategorie- und Prioritäts-Auswahl bleiben im Session-Vorbereitungsfenster immer vollständig geöffnet.
- Beide Bereiche sind nicht einklappbar, damit die Grundeinstellungen jederzeit sichtbar und direkt änderbar bleiben.


### Darstellung der Session-Dauer-Presets
- Die Session-Dauer-Presets werden schlicht und übersichtlich als Auswahlbuttons dargestellt, nicht als aufwendig gestaltete oder farbige Kacheln.
- Jeder Button zeigt klar die Fokusdauer und die zugehörige Pausenzeit.
- Die Auswahl des eigenen „Custom“-Presets bleibt ebenfalls schlicht und konsistent.


### Individuelle Fokus- und Pausendauer
- Beim Preset „Custom“ können Fokusdauer und Pausendauer in zwei separaten Eingabefeldern frei eingestellt werden.
- Auch bei allen festen Presets bleibt die Pausendauer individuell änderbar; die voreingestellte Pausenzeit dient jeweils nur als Startwert.
- Die Fokusdauer der festen Presets bleibt durch die Preset-Auswahl vorgegeben. Für eine frei wählbare Fokusdauer wird „Custom“ verwendet.
- Änderungen gelten für die neu vorbereitete Session und verändern nicht die gespeicherten Preset-Standardwerte.


### Eine feste Pause pro Session-Preset
- Jedes Session-Preset hat genau eine vorgesehene Pausendauer; es gibt keinen automatischen Wechsel zwischen Kurz- und Langpausen.
- Die Pausendauer bleibt wie festgelegt individuell änderbar.
- Der Focus-Modus bleibt auf konzentrierte Arbeitszeit ausgerichtet; zusätzliche oder wechselnde Pausenmodelle werden bewusst vermieden.


### Option „Keine Pause“
- Bei jedem Preset kann die vorgesehene Pause auf „Keine Pause“ gestellt werden.
- Das ist eine bewusst auswählbare Option und nicht nur ein numerischer Wert von 0 Minuten.
- Wird „Keine Pause“ gewählt, startet nach Ende der Fokusdauer keine automatische Pause; die Session wartet entsprechend dem bestehenden Ablauf auf die nächste bewusste Aktion.


### Standardauswahl beim Öffnen der Session-Vorbereitung
- Beim Öffnen der Session-Vorbereitung wird standardmäßig wieder das festgelegte Standard-Preset vorausgewählt, statt automatisch die zuletzt verwendete Dauer zu übernehmen.
- Individuelle Presets können separat erstellt und gespeichert werden; sie bleiben unabhängig von der Standardauswahl verfügbar.


### Eigene Presets benennen
- Nutzerdefinierte Session-Presets können einen frei wählbaren Namen erhalten, zum Beispiel „Morning Grind“, „Beatmaking“ oder „Deep Focus“.
- Name, Fokusdauer und Pauseneinstellung werden gemeinsam im Preset gespeichert.


### Eigene Presets bearbeiten und löschen
- Eigene gespeicherte Presets können nachträglich bearbeitet und gelöscht werden.
- Beim Bearbeiten lassen sich Name, Fokusdauer und Pauseneinstellung ändern.
- Das Löschen eines eigenen Presets erfordert eine Bestätigung, damit es nicht versehentlich entfernt wird.
- Die fest eingebauten Standard-Presets bleiben davon unberührt.


### Eigene Farbe für benutzerdefinierte Presets
- Beim Erstellen eines eigenen Session-Presets kann der Nutzer eine Farbe selbst aus einer bereitgestellten Farbpalette auswählen.
- Die ausgewählte Farbe wird zusammen mit Name, Fokusdauer und Pauseneinstellung gespeichert.
- Die Farbe dient der visuellen Kennzeichnung des eigenen Presets und verändert keine Kategorie- oder Prioritätsfarben.
- Die Preset-Farbe kann beim nachträglichen Bearbeiten geändert werden.


### Live-Vorschau für die Preset-Farbe
- Während der Nutzer beim Erstellen oder Bearbeiten eines eigenen Presets eine Farbe aus der Palette auswählt, wird eine direkte Vorschau des Preset-Buttons beziehungsweise der Preset-Kachel mit dieser Farbe angezeigt.
- Die Vorschau aktualisiert sich unmittelbar bei jeder Farbänderung und zeigt die Wirkung vor dem Speichern.


### Icons für Session-Presets
- Session-Presets erhalten zusätzlich zum Namen und zur Farbe ein eigenes Icon.
- Die fest eingebauten Presets bekommen passende, einheitlich gestaltete Icons; das Marathon-Preset erhält beispielsweise ein Flammen-Icon.
- Beim Erstellen und Bearbeiten eigener Presets kann der Nutzer ein Icon aus einer bereitgestellten Icon-Auswahl wählen.
- Die Icon-Auswahl wird zusammen mit Name, Farbe, Fokusdauer und Pauseneinstellung gespeichert.
- Die Live-Vorschau zeigt auch das aktuell ausgewählte Icon; Änderungen werden unmittelbar dargestellt.


### Minimalistischer Icon-Stil
- Alle Preset-Icons verwenden einen schlichten, minimalistischen Linienstil passend zum Premium-Design von SATYRN HQ (Lucide-ähnlich).
- Standard- und eigene Presets verwenden denselben Icon-Stil und eine einheitliche visuelle Größe.


### Separater Bereich „Meine Presets“
- Fest eingebaute Session-Presets und nutzerdefinierte Presets werden in der Auswahl klar getrennt dargestellt.
- Eigene Presets erscheinen gesammelt in einem separaten Bereich mit der Überschrift „Meine Presets“.
- Die Standard-Presets bleiben im eigenen Bereich darüber beziehungsweise davor sichtbar.


### Alphabetische Sortierung eigener Presets
- Eigene Presets im Bereich „Meine Presets“ werden alphabetisch nach ihrem Namen sortiert.
- Die Sortierung aktualisiert sich automatisch, wenn ein Preset umbenannt oder neu erstellt wird.


### Lokale Speicherung eigener Presets
- Eigene Session-Presets werden lokal auf dem verwendeten Gerät beziehungsweise Browser gespeichert.
- Eine Synchronisierung eigener Presets zwischen verschiedenen Geräten ist nicht erforderlich.
- Die Presets bleiben bei erneutem Öffnen von SATYRN HQ im selben Browser verfügbar, solange dessen lokale Website-Daten nicht gelöscht werden.


### Zeiteingabe im Format Stunden und Minuten
- Fokus- und Pausendauer werden in einer kompakten digitalen Zeitdarstellung eingegeben, mit getrennten Stunden- und Minutenwerten im Format „HH:MM“.
- Beispiele: Fokusdauer „03:00 h“ für drei Stunden und Pausendauer „00:20“ für zwanzig Minuten.
- Stunden und Minuten sind direkt bearbeitbar; die Eingabe bleibt auch für kurze Dauern gut lesbar.
- Bei Auswahl „Keine Pause“ wird die Pauseneingabe deaktiviert beziehungsweise ausgeblendet.


### Minuten-Schritte bei der Zeiteingabe
- Minutenwerte für Fokus- und Pausendauer werden in 5-Minuten-Schritten eingestellt.
- Die Stunden bleiben separat einstellbar; die Zeitanzeige verwendet weiterhin das kompakte HH:MM-Format.


### Plus- und Minus-Steuerung der Dauer
- Neben den Stunden- und Minutenfeldern gibt es Plus- und Minus-Schaltflächen zum bequemen Erhöhen und Verringern der Dauer.
- Die Minuten-Schaltflächen verändern den Wert in 5-Minuten-Schritten; die Stunden lassen sich separat anpassen.
- Die Eingabe bleibt zusätzlich direkt editierbar.


### Automatische Wiederholung bei Plus-/Minus-Schaltflächen
- Werden die Plus- und Minus-Schaltflächen gedrückt gehalten, verändert sich die Dauer automatisch fortlaufend.
- Jeder Schritt verändert die Minuten um 5 Minuten; Stunden können entsprechend über die Stundeneingabe bzw. deren Steuerelement angepasst werden.
- Ein kurzer Klick verändert den Wert ebenfalls einmalig.


### Beschleunigte Wiederholung bei längerem Gedrückthalten
- Beim Gedrückthalten wiederholen Plus und Minus die Änderung zunächst in einem angenehmen Grundtempo.
- Nach kurzer Haltezeit erhöht sich die Wiederholgeschwindigkeit automatisch, damit auch größere Zeiträume schnell eingestellt werden können.
- Ein kurzer Klick verändert den Wert weiterhin nur einmalig.


### Untergrenze der Zeiteingabe
- Die Dauer kann nicht unter 00:00 sinken.
- Beim Erreichen von 00:00 wird die Minus-Schaltfläche deaktiviert bzw. die Änderung gestoppt; negative Zeitwerte sind nicht möglich.


### Obergrenze der Zeiteingabe
- Für Fokus- und Pausendauer gibt es keine feste maximale Eingabegrenze.
- Die Dauer kann über die Plus-Schaltfläche bzw. direkte Eingabe beliebig weit erhöht werden.


### Automatische Normalisierung der Zeiteingabe
- Fokus- und Pausendauer werden bei der Eingabe automatisch auf ein gültiges Stunden-Minuten-Format normalisiert.
- Minutenwerte ab 60 werden in Stunden umgerechnet, z. B. 75 Minuten zu 01:15.
- Die Umrechnung erfolgt ohne Änderung der tatsächlich eingestellten Gesamtdauer.


### Nicht übernommene Zeiteingaben beim Schließen
- Wird das Vorbereitungsfenster verlassen, während eine Zeiteingabe noch nicht übernommen wurde, erscheint eine Warnung.
- Die Warnung folgt dem bereits festgelegten Bestätigungsablauf für ungespeicherte Änderungen: Weiter bearbeiten oder Änderungen verwerfen.
- Beim Weiterbearbeiten bleiben die eingegebenen Werte erhalten; beim Verwerfen werden nicht übernommene Änderungen verworfen.


### Einheitliche Zeiteingabe in eigenen Presets
- Beim Erstellen und Bearbeiten eigener Presets funktionieren die Zeiteingaben identisch zur Session-Vorbereitung.
- Direkte Eingabe, Plus-/Minus-Schaltflächen, 5-Minuten-Schritte, automatische Wiederholung mit Beschleunigung, Untergrenze 00:00, unbegrenzte Obergrenze und automatische Normalisierung gelten auch dort.
- Nicht übernommene Änderungen werden beim Verlassen des Preset-Editors nach dem bestehenden Bestätigungsablauf behandelt.


### Prüfung doppelter Preset-Namen
- Beim Speichern eines eigenen Presets wird geprüft, ob bereits ein Preset mit demselben Namen existiert.
- Doppelte Namen werden verhindert; die Oberfläche weist verständlich darauf hin und fordert zur Wahl eines anderen Namens auf.
- Beim Bearbeiten eines Presets bleibt dessen eigener aktueller Name zulässig.


### Explizites Speichern eigener Presets
- Ein neu erstelltes oder bearbeitetes eigenes Preset wird erst dauerhaft übernommen, wenn der Nutzer ausdrücklich auf „Speichern“ klickt.
- Bis dahin bleiben Änderungen Entwürfe im Editor und verändern die gespeicherten Presets nicht.
- Wird der Editor vor dem Speichern verlassen, greift die bereits festgelegte Warnung für nicht übernommene Änderungen.


### Bestätigung nach dem Speichern eigener Presets
- Nach erfolgreichem Speichern eines eigenen Presets erscheint eine kurze Bestätigung, z. B. „Preset erfolgreich gespeichert“.
- Die Bestätigung wird dezent im bestehenden SATYRN-HQ-Benachrichtigungsstil angezeigt.


### Preset-Editor nach erfolgreichem Speichern schließen
- Nach erfolgreichem Speichern eines eigenen Presets schließt sich der Preset-Editor automatisch.
- Die kurze Erfolgsmeldung „Preset erfolgreich gespeichert“ bleibt sichtbar, auch wenn der Editor geschlossen wurde.


### Einheitliche Darstellung eigener und standardmäßiger Presets
- Eigene Presets verwenden dieselbe Grundgestaltung und Button-Größe wie die fest eingebauten Standard-Presets.
- Jedes eigene Preset zeigt seinen individuellen Namen, das gewählte Icon, die eigene Preset-Farbe sowie Fokus- und Pausendauer.
- Eigene Presets erscheinen alphabetisch sortiert im separaten Bereich „Meine Presets“ unterhalb der Standard-Presets.
- Auswahl und Aktivierung funktionieren genauso wie bei den Standard-Presets.


### Visuelle Hervorhebung des ausgewählten Presets
- Das aktuell ausgewählte Preset wird deutlich, aber dezent hervorgehoben.
- Die Hervorhebung verwendet einen farblich passenden Rahmen und ein kleines Häkchen.
- Bei eigenen Presets orientiert sich die Hervorhebung an der individuell gewählten Preset-Farbe; bei Standard-Presets an deren Gestaltung.


### Hover-Effekt für Preset-Buttons
- Beim Darüberfahren mit der Maus erhalten Preset-Buttons einen dezenten Hover-Effekt und werden leicht heller.
- Der Effekt bleibt zurückhaltend und passt zur jeweiligen Preset-Farbe.
- Auf Touch-Geräten wird kein Hover-Zustand vorausgesetzt; Auswahl und Hervorhebung funktionieren dort direkt über Antippen.


### Trennlinie zwischen Standard- und eigenen Presets
- Die fest eingebauten Standard-Presets und der Bereich „Meine Presets“ werden durch eine dezente horizontale Trennlinie voneinander abgegrenzt.
- Die Trennlinie fügt sich unauffällig in das dunkle SATYRN-HQ-Design ein.


### Preset-Erstellung über Plus-Symbol
- Neben der Überschrift „Meine Presets“ befindet sich ein kleines Plus-Symbol zum Erstellen eines eigenen Presets.
- Das Plus-Symbol öffnet den bereits geplanten Preset-Editor.
- Die Erstellung und Speicherung folgen dem festgelegten Ablauf mit explizitem Klick auf „Speichern“.


### Plus-Symbol auch bei leerem Preset-Bereich
- Das Plus-Symbol neben „Meine Presets“ bleibt immer sichtbar, auch wenn noch keine eigenen Presets vorhanden sind.
- Der Bereich zeigt in diesem Fall weiterhin die Möglichkeit, direkt das erste eigene Preset anzulegen.


### Preset-Aktionen über Drei-Punkte-Menü
- Jedes eigene Preset erhält in der Auswahl ein kleines Drei-Punkte-Menü.
- Darüber kann das Preset direkt bearbeitet oder gelöscht werden.
- Bearbeiten öffnet den bestehenden Preset-Editor mit den gespeicherten Werten.
- Löschen erfordert die bereits festgelegte Sicherheitsbestätigung.
- Standard-Presets erhalten kein solches Menü und bleiben unveränderbar.


### Sichtbarkeit des Drei-Punkte-Menüs
- Das Drei-Punkte-Menü eigener Presets wird auf Desktop-Geräten erst beim Darüberfahren mit der Maus sichtbar.
- Auf Touch-Geräten ohne Hover bleibt das Menü über eine klar erkennbare, kompakte Aktion erreichbar.


### Preset erst nach bestätigtem Löschen entfernen
- Ein eigenes Preset bleibt in der Auswahl sichtbar, solange die Löschbestätigung noch nicht ausdrücklich bestätigt wurde.
- Erst nach bestätigter Löschung wird das Preset entfernt.
- Wird der Löschdialog abgebrochen, bleibt das Preset unverändert erhalten.


### Einheitlicher Editor für Erstellen und Bearbeiten
- Das Bearbeiten eines eigenen Presets öffnet denselben Editor wie das Erstellen eines Presets.
- Layout, Aufbau und Bedienung sind identisch; beim Bearbeiten werden die aktuell gespeicherten Preset-Werte vorausgefüllt.
- Änderungen werden erst nach ausdrücklichem Klick auf „Speichern“ übernommen.


### Alphabetische Neusortierung nach Preset-Bearbeitung
- Wird beim Bearbeiten der Name eines eigenen Presets geändert und gespeichert, wird es automatisch an seiner neuen alphabetischen Position im Bereich „Meine Presets“ einsortiert.
- Die Sortierung wird direkt nach erfolgreichem Speichern aktualisiert.


### Informationsanzeige beim Hover über Presets
- Beim Darüberfahren mit der Maus über einen Preset-Button erscheint eine dezente Informationsanzeige.
- Sie zeigt den vollständigen Preset-Namen sowie Fokus- und Pausendauer.
- Die Anzeige ist rein informativ und verändert weder Auswahl noch Einstellungen des Presets.
- Auf Touch-Geräten wird die Information über eine geeignete alternative Interaktion zugänglich gemacht, ohne die Preset-Auswahl zu erschweren.


### Responsives Raster für die Preset-Auswahl
- Die Preset-Auswahl passt ihr Raster automatisch an die verfügbare Bildschirmbreite an.
- Desktop: mehrere Preset-Buttons nebeneinander.
- Tablet: entsprechend weniger Spalten, mit weiterhin gut lesbaren Buttons.
- Smartphone: standardmäßig zwei Spalten; bei sehr schmalen Displays eine Spalte.
- Der Bereich „Meine Presets“ verwendet dieselbe responsive Anordnung.
- Es gibt keine horizontale Scrollleiste für die Preset-Auswahl.


### Responsive Anordnung der Preset-Auswahl
- Die Preset-Auswahl passt sich automatisch an die verfügbare Bildschirmbreite an.
- Auf Desktop werden die Preset-Schaltflächen in mehreren übersichtlichen Spalten dargestellt; auf Tablet und Smartphone reduziert sich die Spaltenzahl automatisch.
- Auf Smartphones bleiben die Schaltflächen gut antippbar und zeigen Name, Fokusdauer sowie Pausendauer weiterhin lesbar an.
- Standard-Presets und eigene Presets verwenden dasselbe responsive Raster; die Trennlinie und der Bereich „Meine Presets“ bleiben erhalten.
- Kein horizontales Scrollen für die Preset-Auswahl; bei geringer Breite werden die Schaltflächen in weitere Zeilen umgebrochen.

## 8. Umsetzungsregeln

- Dieses Dokument wird während der weiteren Planung fortlaufend ergänzt.
- Noch keine Änderungen am Website-Code, solange die Planung nicht vollständig abgeschlossen und ausdrücklich freigegeben ist.
- Vor der Umsetzung werden offene Detailfragen geklärt und der vollständige Plan gemeinsam bestätigt.
- Bei der späteren Implementierung müssen bestehende Datenstrukturen und die tatsächliche Important-Integration geprüft werden; keine Annahmen über lokale Speicherformate treffen.
