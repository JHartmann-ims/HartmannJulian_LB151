# Projekt-Dokumentation

✍️ Ihr Nachname

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
| 12.01.2023      | 0.0.1   | Die Dokumentation gestartet und Überlegungen zum Projekt gemacht. |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

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

In diesem Projekt werde ich das Framework "ReactJS" benutzen.

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
| 15    |    Muss         |  Rand    |  Als Entwickler möchte ich Transaktionsmanagement und Sicherheitsaspekte einsetzen |
| 16    |    Muss         |  Rand    |  Als Entwickler möchte ich die Applikation mit einer session-basierten, professionellen 4-Tier-Architektur implementieren, mit einem Webserver-Layer, einem Templating-System, HTML5 und CSS, und einem Business Logic Layer, der die einzige Verbindung zur Datenbank hat  |

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
| 1    |                 |      | Als ein 🤷‍♂️ möchte ich 🤷‍♂️, damit 🤷‍♂️ |
| ...  |                 |      |                                    |

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
