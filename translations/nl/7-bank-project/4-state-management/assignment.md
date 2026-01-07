<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-23T00:59:43+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "nl"
}
-->
# Implementatie van de "Transactie Toevoegen" Dialoog

## Overzicht

Je bankapp heeft nu een solide state management en gegevensopslag, maar mist een cruciale functie die echte bankapps nodig hebben: de mogelijkheid voor gebruikers om hun eigen transacties toe te voegen. In deze opdracht implementeer je een complete "Transactie Toevoegen" dialoog die naadloos integreert met je bestaande state management systeem.

Deze opdracht brengt alles samen wat je hebt geleerd in de vier banklessen: HTML templating, formulierverwerking, API-integratie en state management.

## Leerdoelen

Door deze opdracht te voltooien, leer je:
- **Een** gebruiksvriendelijke dialooginterface te maken voor gegevensinvoer
- **Een** toegankelijk formulierontwerp te implementeren met ondersteuning voor toetsenbord en schermlezers
- **Nieuwe functies** te integreren met je bestaande state management systeem
- **API-communicatie** en foutafhandeling te oefenen
- **Moderne webontwikkelingspatronen** toe te passen op een realistische functie

## Instructies

### Stap 1: Transactie Toevoegen-knop

**Maak** een "Transactie Toevoegen"-knop op je dashboardpagina die gebruikers gemakkelijk kunnen vinden en gebruiken.

**Vereisten:**
- **Plaats** de knop op een logische locatie op het dashboard
- **Gebruik** duidelijke, actiegerichte knoptekst
- **Stijl** de knop zodat deze past bij je bestaande UI-ontwerp
- **Zorg ervoor** dat de knop toegankelijk is via het toetsenbord

### Stap 2: Implementatie van de Dialoog

Kies een van de twee benaderingen om je dialoog te implementeren:

**Optie A: Afzonderlijke Pagina**
- **Maak** een nieuwe HTML-template voor het transactieformulier
- **Voeg** een nieuwe route toe aan je routeringssysteem
- **Implementeer** navigatie naar en van de formulierpagina

**Optie B: Modale Dialoog (Aanbevolen)**
- **Gebruik** JavaScript om de dialoog te tonen/verbergen zonder het dashboard te verlaten
- **Implementeer** dit met behulp van de [`hidden` eigenschap](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) of CSS-klassen
- **Creëer** een soepele gebruikerservaring met correcte focusbeheer

### Stap 3: Implementatie van Toegankelijkheid

**Zorg ervoor** dat je dialoog voldoet aan de [toegankelijkheidsnormen voor modale dialogen](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Toetsenbordnavigatie:**
- **Ondersteun** de Escape-toets om de dialoog te sluiten
- **Beperk** de focus tot de dialoog wanneer deze geopend is
- **Herstel** de focus naar de triggerknop wanneer de dialoog gesloten is

**Ondersteuning voor schermlezers:**
- **Voeg** geschikte ARIA-labels en -rollen toe
- **Meld** het openen/sluiten van de dialoog aan schermlezers
- **Voorzie** duidelijke labels en foutmeldingen voor formuliervelden

### Stap 4: Formuliercreatie

**Ontwerp** een HTML-formulier dat transactiegegevens verzamelt:

**Vereiste velden:**
- **Datum**: Wanneer de transactie plaatsvond
- **Beschrijving**: Waar de transactie voor was
- **Bedrag**: Waarde van de transactie (positief voor inkomsten, negatief voor uitgaven)

**Formuliereigenschappen:**
- **Valideer** gebruikersinvoer vóór verzending
- **Geef** duidelijke foutmeldingen voor ongeldige gegevens
- **Voeg** nuttige voorbeeldtekst en labels toe
- **Stijl** het formulier consistent met je bestaande ontwerp

### Stap 5: API-integratie

**Verbind** je formulier met de backend-API:

**Implementatiestappen:**
- **Bekijk** de [server API-specificaties](../api/README.md) voor het juiste eindpunt en gegevensformaat
- **Maak** JSON-gegevens van je formulierinvoer
- **Verzend** de gegevens naar de API met passende foutafhandeling
- **Toon** succes-/foutmeldingen aan de gebruiker
- **Behandel** netwerkfouten op een nette manier

### Stap 6: Integratie met State Management

**Werk** je dashboard bij met de nieuwe transactie:

**Integratievereisten:**
- **Ververs** de accountgegevens na succesvolle toevoeging van een transactie
- **Werk** de dashboardweergave bij zonder een pagina opnieuw te laden
- **Zorg ervoor** dat de nieuwe transactie onmiddellijk verschijnt
- **Behoud** een correcte consistentie van de state gedurende het proces

## Technische Specificaties

**API Eindpunt Details:**
Raadpleeg de [server API-documentatie](../api/README.md) voor:
- Vereiste JSON-formaat voor transactiegegevens
- HTTP-methode en eindpunt-URL
- Verwacht responsformaat
- Foutafhandelingsspecificaties

**Verwacht Resultaat:**
Na het voltooien van deze opdracht moet je bankapp een volledig functionele "Transactie Toevoegen"-functie hebben die er professioneel uitziet en zich professioneel gedraagt:

![Screenshot van een voorbeeld "Transactie Toevoegen" dialoog](../../../../translated_images/dialog.93bba104afeb79f1.nl.png)

## Testen van je Implementatie

**Functionele Testen:**
1. **Controleer** of de "Transactie Toevoegen"-knop duidelijk zichtbaar en toegankelijk is
2. **Test** of de dialoog correct opent en sluit
3. **Bevestig** dat formuliervalidatie werkt voor alle vereiste velden
4. **Controleer** of succesvolle transacties onmiddellijk op het dashboard verschijnen
5. **Zorg ervoor** dat foutafhandeling werkt voor ongeldige gegevens en netwerkproblemen

**Toegankelijkheidstesten:**
1. **Navigeer** door de volledige flow met alleen het toetsenbord
2. **Test** met een schermlezer om te zorgen voor correcte meldingen
3. **Controleer** of focusbeheer correct werkt
4. **Controleer** of alle formelementen geschikte labels hebben

## Evaluatierubric

| Criteria | Uitmuntend | Voldoende | Verbetering Nodig |
| -------- | ---------- | --------- | ----------------- |
| **Functionaliteit** | De functie "Transactie Toevoegen" werkt perfect met een uitstekende gebruikerservaring en volgt alle best practices uit de lessen | De functie "Transactie Toevoegen" werkt correct, maar volgt mogelijk niet alle best practices of heeft kleine gebruiksproblemen | De functie "Transactie Toevoegen" werkt gedeeltelijk of heeft aanzienlijke gebruiksproblemen |
| **Codekwaliteit** | Code is goed georganiseerd, volgt gevestigde patronen, bevat correcte foutafhandeling en integreert naadloos met het bestaande state management | Code werkt, maar kan enkele organisatieproblemen of inconsistente patronen met de bestaande codebasis hebben | Code heeft aanzienlijke structurele problemen of integreert niet goed met bestaande patronen |
| **Toegankelijkheid** | Volledige ondersteuning voor toetsenbordnavigatie, compatibiliteit met schermlezers en volgt WCAG-richtlijnen met uitstekend focusbeheer | Basis toegankelijkheidsfuncties geïmplementeerd, maar mist mogelijk enkele toetsenbordnavigatie- of schermlezerfuncties | Beperkte of geen aandacht voor toegankelijkheid |
| **Gebruikerservaring** | Intuïtieve, gepolijste interface met duidelijke feedback, soepele interacties en een professionele uitstraling | Goede gebruikerservaring met kleine verbeterpunten in feedback of visueel ontwerp | Slechte gebruikerservaring met een verwarrende interface of gebrek aan gebruikersfeedback |

## Aanvullende Uitdagingen (Optioneel)

Als je de basisvereisten hebt voltooid, overweeg dan deze verbeteringen:

**Uitgebreide Functies:**
- **Voeg** transactiecategorieën toe (eten, vervoer, entertainment, etc.)
- **Implementeer** invoervalidatie met realtime feedback
- **Maak** sneltoetsen voor gevorderde gebruikers
- **Voeg** mogelijkheden toe voor het bewerken en verwijderen van transacties

**Geavanceerde Integratie:**
- **Implementeer** een undo-functie voor recent toegevoegde transacties
- **Voeg** bulkimport van transacties toe via CSV-bestanden
- **Maak** zoek- en filtermogelijkheden voor transacties
- **Implementeer** een functie voor het exporteren van gegevens

Deze optionele functies helpen je om meer geavanceerde webontwikkelingsconcepten te oefenen en een completere bankapplicatie te creëren!

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.