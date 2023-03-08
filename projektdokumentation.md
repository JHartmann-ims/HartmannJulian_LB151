# Projekt-Dokumentation

✍️ Ihr Nachname

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 12.01.2023      | 0.0.1   | Die Dokumentation gestartet und Überlegungen zum Projekt gemacht. |
|  26.01.2023     | 0.0.2   | Tracer Bullet-Prototyp durchgeführt und an Prototyp für GUI gearbeitet    |
|  04.02.2023     | 0.0.3   | Prototyp für Gui fertiggestellt                                                             |
|    21.02.2023   | 0.0.4   | Projekt gestartet, Installation von allen Technologien                                                             |
|   22.02.2023    | 0.0.5   |    Für ein Design entschieden, Navbar erstellt                                                          |
|   23.02.2023    | 0.0.6   |    Content erstellt und layout                                                          |
|   07.03.2023    | 1.0.0   |    Implementierung von Spiellogik                                                          |
|   08.03.2023    | 1.0.1   |    Weiterführung Implementierung von Spiellogik und Einbindung der Datenbank                                                        |

# 0 Ihr Projekt

✍️ Beschreiben Sie Ihr Projekt in einem griffigen Satz.

Eine abgewandelte Version des Quiz vom Fernsehshow "Glücksrad" als Web-Applikation.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Benutzerinterface
* Tier 2 (Webserver): Das Senden der verschiedenen Aktionen vom Benutzer
* Tier 3 (Application Server): Stellt eine Verbindung zum Datenbank her; sendet die eingesendete Eingaben vom Benutzern zum Datenbank
* Tier 4 (Dataserver): Das Speichern der eingegebenen Daten und das Herabrufen von Daten.

# 2 Technologie

✍️ Beschreiben Sie für dieselben Tiers, welche Programmiersprache bzw. Technologie Sie verwenden möchten.

* Tier 1 (Presentation): HTML-in-JavaScript (JSX)
* Tier 2 (Webserver): Javascript, Chakra-UI
* Tier 3 (Application Server): Javascript
* Tier 4 (Dataserver): Firebase

In diesem Projekt werde ich das Framework "ReactJS" und für das CSS "Chakra UI" benutzen.

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 

Firebase bietet eine webbasierte Konsole, über die Entwickler auf die Datenbank zugreifen und sie verwalten können. In der Konsole können Sie Datensätze erstellen, bearbeiten und löschen, Abfragen erstellen und Indizes erstellen.

Das Interface ist in mehrere Bereiche unterteilt, wie z.B. Datenbank, Benutzer und Rollenverwaltung, Echtzeit-Ereignisse und Protokolle.

In der Datenbank-Registerkarte können Sie Ihre Datenstruktur definieren und Daten hinzufügen, bearbeiten oder löschen.

In der Registerkarte "Authentifizierung" können Sie Benutzerkonten erstellen und verwalten, Passwortrichtlinien festlegen und Authentifizierungsmethoden konfigurieren.

In der Registerkarte "Rules" können Sie Zugriffsregeln für Ihre Datenbank definieren, um sicherzustellen, dass nur autorisierte Benutzer auf bestimmte Daten zugreifen können.

In der Registerkarte "Echtzeit-Ereignisse" können Sie Ereignisse in Echtzeit überwachen und Abfragen erstellen, um bestimmte Daten zu extrahieren.

In der Registerkarte "Protokolle" können Sie die Aktivitäten in Ihrer Firebase-App nachverfolgen und Fehlerdiagnose durchführen.

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |    Muss         |  Funktional    | Als Administrator möchte ich mich durch Benutzername und Passwort authentifizieren können, um Zugang zur Verwaltung der Phrasen und Rätselwörter zu erhalten  |
| 2    |    Muss         |  Funktional    | Als Administrator möchte ich Phrasen und Rätselwörter hinzufügen, bearbeiten und löschen können  |
| 3    |    Muss         |  Funktional    | Als Administrator möchte ich Kategorien erstellen und jedes Wort oder jede Frage einer Kategorie zuordnen können  |
| 4    |    Muss         |  Funktional    |  Als Administrator möchte ich einzelne Einträge der Highscore-Liste löschen können |
| 5    |    Muss         |  Funktional    | Als Benutzer möchte ich einen Namen eingeben können, der auf der Highscore-Liste erscheint  |
| 6    |    Muss         |  Funktional    | Als Benutzer möchte ich meinen Kontostand und meine Lebenspunkte jederzeit sehen können  |
| 7    |    Muss         |  Funktional    |  Als Benutzer möchte ich erfahren, ob meine Antwort richtig oder falsch war |
| 8    |    Muss         |  Funktional    |  Als Benutzer möchte ich in der Highscore-Liste Rang, Name, Zeitpunkt des Spiels, Geldbetrag und Anzahl der Spielrunden sehen können |
| 9    |    Muss         |  Funktional    | Als Benutzer möchte ich kein Rätselwort oder keine Phrase mehr als einmal gestellt bekommen  |
| 10    |    Muss         |  Funktional    |  Als Benutzer möchte ich jederzeit entscheiden können, ob ich spielen oder meinen Gewinn in die Highscore-Liste übernehmen möchte |
| 11    |    Muss         |  Qualität    | Als Benutzer möchte ich ein Spiel mit einer spielbaren Anzahl von Wörtern und Fragen spielen können  |
| 12    |    Muss         |  Qualität    |  Als Benutzer möchte ich, dass die Anzahl der Spielrunden gezählt wird |
| 13    |    Kann         |  Rand    |  Als Benutzer möchte ich, dass einfache Formulareingaben, wie leere Textfelder, auf Client- und Serverseite überprüft werden |
| 14    |    Kann         |  Rand    |  Als Entwickler möchte ich die Wahl der Datenbank haben und eine Datenbankanbindung verwenden, die möglichst unabhängig vom tatsächlich eingesetzten Produkt ist |
| 15    |    Muss         |  Funktional    |  Als Benutzer möchte ich einen Vokal kaufen, falls ich nicht mehr weiter weiss. |
| 16    |    Muss         |  Rand    |  Als Entwickler möchte ich die Applikation mit einer session-basierten, professionellen 4-Tier-Architektur implementieren, mit einem Webserver-Layer, einem Templating-System, HTML5 und CSS, und einem Business Logic Layer, der die einzige Verbindung zur Datenbank hat  |

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| A    |     Kann            |   Funktional   |  Als Administrator möchte ich die Möglichkeit haben, mehrere Administratoren hinzuzufügen und zu verwalten   |
| B    |     Kann            |   Funktional   |   Als Benutzer möchte ich die Möglichkeit haben, mein Passwort zu ändern  |
| C    |     Kann            |   Qualität   |   Als Benutzer möchte ich die Möglichkeit haben, meinen Fortschritt im Spiel zu speichern und später fortzusetzen  |
| D    |     Kann            |   Funktional   |  Als Benutzer möchte ich die Möglichkeit haben, mein Profilbild hochzuladen   |
| E    |     Kann            |   Funktional   |  Als Benutzer möchte ich die Möglichkeit haben, mit Freunden zu spielen und unsere Highscore-Listen miteinander zu vergleichen   |
| F    |     Kann            |   Qualität   |  Als Benutzer möchte ich die Möglichkeit haben, zusätzliche In-App-Käufe zu tätigen, um zusätzliche Rätselwörter, Phrasen und Kategorien freizuschalten   |

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |      Erstelle einen Test-Administrator-Account        |    Benutzername: "testadmin", Passwort: "password"     |       Erfolgreiche Anmeldung als Administrator            |
| 1.2  |     Versuche eine Anmeldung ohne gültigen Administrator-Account         |    Benutzername: "invalid", Passwort: "invalid"     |         Fehlermeldung "Ungültiger Benutzername oder Passwort"          |
| 2.1  |     Fehlermeldung "Ungültiger Benutzername oder Passwort"         |  -       |     -               |
| 2.2  |       Füge ein neues Rätselwort hinzu       |    Wort: "Apfel", Kategorie: "Obst"     |         Rätselwort "Apfel" wurde erfolgreich hinzugefügt          |
| 2.3  |       Bearbeite ein vorhandenes Rätselwort       |  Wort: "Apfel", neue Kategorie: "Lebensmittel"       |       Rätselwort "Apfel" wurde erfolgreich bearbeitet            |
| 2.4  |    Lösche ein vorhandenes Rätselwort          |    Wort: "Apfel"     |       Rätselwort "Apfel" wurde erfolgreich gelöscht            |
| 3.1  |     Melde mich als Administrator an         |    -     |        -           |
| 3.2  |      Erstelle eine neue Kategorie        |    Kategorie: "Tiere"     |      Kategorie "Tiere" wurde erfolgreich erstellt             |
| 3.3  |       Zuordne ein Rätselwort einer Kategorie       |   Wort: "Hund", Kategorie: "Tiere"      |       Rätselwort "Hund" wurde erfolgreich der Kategorie "Tiere" zugeordnet            |
| 4.1  |     Melde mich als Administrator an         |    -     |        -           |
| 4.2  |      Lösche einen Eintrag aus der Highscore-Liste        |   Name: "Spieler1"      |         Eintrag von "Spieler1" wurde erfolgreich gelöscht          |
| 5.1  |      Starte ein neues Spiel        |    -     |        -           |
| 5.2  |      Gib einen Namen ein        |    Name: "Spieler1"     |        	Name "Spieler1" wurde erfolgreich eingegeben           |
| 6.1  |      Starte ein neues Spiel        |   -      |           -        |
| 6.2  |     Überprüfe den Kontostand         |    -     |        Kontostand wird korrekt angezeigt           |
| 7.1  |   Spiel gestartet und Wort schon ausgewählt         |   Buchstaben eingeben und absenden      |     Es wird mitgeteilt, ob man richtig oder falsch war      |
| 8.1  |   Highscore-Liste anzeigen         |   Klicken auf den Highscore-Button     |     Das System zeigt eine Liste der Spieler an, sortiert nach Rang. Jeder Eintrag enthält den Namen des Spielers, den Zeitpunkt des Spiels, den Geldbetrag und die Anzahl der Spielrunden.           |
| 9.1  |   Spiel gestartet und Kategorie ausgewählt       |   Starten eines neuen Spiels      |      Das System wählt ein zufälliges Rätselwort aus und stellt sicher, dass es nicht bereits in früheren Spielen verwendet wurde.          |
| 10.1  |  Nach Abschluss des Spiels         |   -      |       Das System gibt dem Spieler die Möglichkeit, seinen Gewinn in die Highscore-Liste zu übernehmen oder das Spiel zu beenden. Wenn der Spieler sich für die Highscore-Liste entscheidet, wird er aufgefordert, seinen Namen einzugeben.         |
| 11.1  |   Spiel mit spielbarer Anzahl von Wörtern und Fragen        |   Starten eines neuen Spiels     |    Das System stellt sicher, dass die Anzahl der Wörter und Fragen im Spiel angemessen ist und ein angenehmes Spielerlebnis bietet.            |
| 12.1  |   Zählen der Spielrunden      |   Nach Abschluss des Spiels      |     Das System zählt die Anzahl der Spielrunden und zeigt sie dem Spieler an.           |
| 13.1  |  Spiel gestartet        |  Ausfüllen eines Formulars und Absenden     |   Das System überprüft, ob alle erforderlichen Felder ausgefüllt wurden und ob die eingegebenen Daten gültig sind. Es gibt eine Fehlermeldung, wenn das Formular unvollständig ist oder die eingegebenen Daten ungültig sind.             |
| 14.1  |   	Wahl der Datenbank         |  Systemstart      |     Das System verwendet eine Datenbankanbindung, die möglichst unabhängig vom tatsächlich eingesetzten Produkt ist.           |
| 15.1  |   Spiel gestartet und Wort schon ausgewählt         |  Vokal kaufen drücken     |     Vokal wird hinzugefügt        |
| 16.1  |  	Implementierung einer session-basierten, professionellen 4-Tier-Architektur        |   Systemstart     |    Das System verwendet eine session-basierte, professionelle 4-Tier-Architektur mit einem Webserver-Layer, einem Templating-System, HTML5 und CSS, und einem Business Logic Layer, der die einzige Verbindung zur Datenbank hat.            |


✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

<img width="346" alt="Admin_mockUp" src="https://user-images.githubusercontent.com/69578060/220881883-8f81c937-bfbe-4cc2-8b1b-e67c9f282380.png">

<img width="344" alt="Quiz_MockUp" src="https://user-images.githubusercontent.com/69578060/220881897-84debd52-fe8e-4370-b764-bd4176975a9a.png">

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
|  6    |  08.03.2023     |     Man sieht seinen Kontostand         |
|   7   |   07.03.2023    |   Richtige Buchstaben werden im Wort angezeigt          |
|  9    |   08.03.2023    |    Es gibt nur ein Wort zur Auswahl          |
| 11     |   08.03.2023    |      Es gibt nur ein Wort zur Auswahl          |
| 13     |   08.03.2023    |    Sie werden Clientseitig überprüft         |
| 15     |   08.03.2023    |    Der Vokal wird nicht richtig hinzugefügt     |
| 16      |  08.03.2023     |    Verbindung zur Datenbank wird nicht ausgenützt         |



# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | nein |               -                            |
| 2  |     nein      |    -                                       |
| 3  |   nein        |       -                                    |
| 4  |    nein       |        -                                   |
| 5  |      nein       |        -                                   |
| 6  |      Ja     |        https://github.com/JHartmann-ims/HartmannJulian_LB151/blob/b42632cdba4bda591c1b362b78914691eb57a941/Gluecksrad_M151/src/components/Content.jsx#L97-L100                                   |
| 7  |        Ja   |              https://github.com/JHartmann-ims/HartmannJulian_LB151/blob/b42632cdba4bda591c1b362b78914691eb57a941/Gluecksrad_M151/src/components/Content.jsx#L74-L84                             |
| 8  |      nein       |                -                           |
| 9  |        Ja   |             Es kann nur einmal vorkommen, da es nur 1 Wort gibt.                              |
| 10  |    nein         |                 -                          |
| 11  |      Ja     |                Es gibt nur ein Wort.                           |
| 12  |    nein         |                    -                       |
| 13  |     Ja      |                https://github.com/JHartmann-ims/HartmannJulian_LB151/blob/b42632cdba4bda591c1b362b78914691eb57a941/Gluecksrad_M151/src/components/Content.jsx#L146-L158                           |
| 14  |     nein        |              -                             |
| 15  |     nein        |               Der gekaufte Vokal wird nicht richtig hinzugefügt.                           |
| 16  |      Ja      |      Die Verbindung zur Datenbank besteht, wird aber nicht benutzt.                                     |
| A |      nein       |                -                           |
| B  |       nein      |              -                             |
| C  |      nein       |              -                             |
| D  |      nein       |             -                              |
| E  |       nein      |            -                               |
| F  |     nein        |            -                               |

# 8 Testprotokoll

https://youtu.be/hVRVNaYWR7Y ✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |  08.03.2023     |   NOK       |   Julian Hartmann     |
| 1.2  | 08.03.2023       |  NOK          |   Julian Hartmann     |
| 2.1   |  08.03.2023      |  NOK          |   Julian Hartmann     |
|  2.2 |   08.03.2023     |  NOK          |   Julian Hartmann     |
| 2.3  |  08.03.2023      |   NOK         |  Julian Hartmann      |
| 2.4  |  08.03.2023      |   NOK         |   Julian Hartmann     |
| 3.1  |  08.03.2023      |    NOK        |   Julian Hartmann     |
|  3.2 |  08.03.2023      |   NOK         |   Julian Hartmann     |
| 3.3  |  08.03.2023      |   NOK         |   Julian Hartmann     |
| 4.1  |  08.03.2023      |   NOK         |   Julian Hartmann     |
| 4.2  |  08.03.2023      |   NOK         |  Julian Hartmann      |
| 5.1  |  08.03.2023      |  NOK          |  Julian Hartmann      |
| 5.2  |  08.03.2023      |  NOK          |  Julian Hartmann      |
| 6.1  |   08.03.2023     |   OK       |  Julian Hartmann      |
| 6.2  |  08.03.2023      |   OK       |  Julian Hartmann      |
| 7.1  |  08.03.2023      |   OK       |   Julian Hartmann     |
| 8.1  |  08.03.2023      |  NOK        |  Julian Hartmann      |
| 9.1  |  08.03.2023      |   NOK         |  Julian Hartmann      |
| 10.1  |  08.03.2023      |   NOK         |  Julian Hartmann      |
| 11.1  |  08.03.2023      |   NOK         |  Julian Hartmann      |
| 12.1  |  08.03.2023      |   NOK         |   Julian Hartmann     |
| 13.1  |  08.03.2023      |  NOK          |   Julian Hartmann     |
| 14.1  | 08.03.2023       |   NOK         |  Julian Hartmann      |
| 15.1  |  08.03.2023      |   OK       |  Julian Hartmann      |
| 16.1  |  08.03.2023      | NOK       |  Julian Hartmann      |

✍️ Am Anfang bin ich mit dem Projekt nicht so schnell vorangekommen, weil ich mehr an die Dokumentation gearbeitet habe. Später ist auch vieles im Weg gekommen, wie andere Projekte, Prüfungen oder Praktikumswoche. Deswegen musste ich oft Zeit opfern, damit ich mich auch andere wichtigen Sachen fokussieren konnte. Aus diesem Grund konnte ich leider am Ende nicht viele Features implementieren, die ich eigentlich geplant habe. Es ist sehr schade, denn ich habe mich sehr auf dieses Projekt gefreut. Beim nächsten Mal wäre es besser, einen eigenen Plan für mich zu machen, um die Zeit besser einzuteilen.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ Erledigt ] Ich habe die Rechtschreibung überprüft
- [ Erledigt ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ Erledigt ] Ich habe alle mit ✍️ markierten Teile ersetzt
