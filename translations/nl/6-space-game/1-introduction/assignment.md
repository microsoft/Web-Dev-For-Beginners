# Maak een Game: Pas Design Patterns toe

## Overzicht van de Opdracht

Zet je nieuwe kennis van design patterns in door een eenvoudige gameprototype te maken! Deze opdracht helpt je om zowel architecturale patronen (inheritance of composition) als het pub/sub communicatiesysteem dat je in de les hebt geleerd, te oefenen.

## Instructies

Maak een eenvoudige gameweergave die de design patterns uit deze les demonstreert. Je game moet functioneel zijn, maar hoeft geen complexe graphics te hebben – focus op de onderliggende architectuur en communicatiepatronen.

### Vereisten

**Kies je architectuurpatroon:**
- **Optie A**: Gebruik klasse-gebaseerde inheritance (zoals het voorbeeld `GameObject` → `Movable` → `Hero`)
- **Optie B**: Gebruik composition (zoals de factory function aanpak met gemixte gedragingen)

**Implementeer communicatie:**
- **Voeg toe** een `EventEmitter`-klasse voor pub/sub messaging
- **Stel in** minstens 2-3 verschillende berichttypes (zoals `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Verbind** gebruikersinvoer (toetsenbord/muis) met game-events via het eventsysteem

**Game-elementen om op te nemen:**
- Minstens één door de speler bestuurbaar personage
- Minstens één ander gameobject (vijand, verzamelobject of omgevingsobject)
- Basisinteractie tussen objecten (botsing, verzameling of communicatie)

### Voorgestelde Game-ideeën

**Eenvoudige games om te overwegen:**
- **Snake Game** – Slangsegmenten volgen de kop, voedsel verschijnt willekeurig
- **Pong-variant** – Paddle reageert op invoer, bal stuitert tegen muren
- **Verzamelspel** – Speler beweegt rond en verzamelt items terwijl obstakels worden vermeden
- **Basis Tower Defense** – Torens detecteren en schieten op bewegende vijanden

### Richtlijnen voor Code Structuur

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testen van je Implementatie

**Controleer of je code werkt door:**
- **Te testen** of objecten bewegen of veranderen wanneer events worden geactiveerd
- **Te bevestigen** dat meerdere objecten kunnen reageren op hetzelfde event
- **Te controleren** dat je nieuwe gedragingen kunt toevoegen zonder bestaande code te wijzigen
- **Te zorgen** dat toetsenbord-/muisinvoer correct game-events activeert

## Richtlijnen voor Inleveren

**Je inzending moet bevatten:**
1. **JavaScript-bestand(en)** met je game-implementatie
2. **HTML-bestand** om je game te draaien en te testen (mag eenvoudig zijn)
3. **Commentaar** waarin je uitlegt welk patroon je hebt gekozen en waarom
4. **Korte documentatie** van je berichttypes en wat ze doen

## Rubriek

| Criteria | Uitmuntend (3 punten) | Voldoende (2 punten) | Verbetering nodig (1 punt) |
|----------|-----------------------|----------------------|----------------------------|
| **Architectuurpatroon** | Correct implementeert inheritance OF composition met duidelijke klasse-/objecthiërarchie | Gebruikt gekozen patroon met kleine problemen of inconsistenties | Probeert patroon te gebruiken, maar implementatie heeft aanzienlijke problemen |
| **Pub/Sub Implementatie** | EventEmitter werkt correct met meerdere berichttypes en juiste eventflow | Basis pub/sub-systeem werkt met enige eventafhandeling | Event-systeem aanwezig maar werkt niet betrouwbaar |
| **Gamefunctionaliteit** | Drie of meer interactieve elementen die communiceren via events | Twee interactieve elementen met basis eventcommunicatie | Eén element reageert op events of basisinteractie |
| **Codekwaliteit** | Schone, goed becommentarieerde code met logische organisatie en moderne JavaScript | Over het algemeen goed georganiseerde code met voldoende commentaar | Code werkt maar mist organisatie of duidelijke commentaar |

**Bonuspunten:**
- **Creatieve game-mechanica** die interessante toepassingen van de patronen laat zien
- **Meerdere invoermethoden** (toetsenbord EN muis-events)
- **Schaalbare architectuur** die gemakkelijk uit te breiden is met nieuwe functies

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.