# Lag en Spillprototype: Bruk Designmønstre

## Oppgaveoversikt

Bruk din nyervervede kunnskap om designmønstre til å lage en enkel spillprototype! Denne oppgaven hjelper deg med å øve på både arkitektoniske mønstre (arv eller komposisjon) og pub/sub-kommunikasjonssystemet du lærte om i leksjonen.

## Instruksjoner

Lag en enkel spillrepresentasjon som demonstrerer designmønstrene fra denne leksjonen. Spillet ditt skal være funksjonelt, men trenger ikke komplekse grafikk – fokuser på den underliggende arkitekturen og kommunikasjonsmønstrene.

### Krav

**Velg ditt arkitekturmønster:**
- **Alternativ A**: Bruk klassebasert arv (som eksempelet `GameObject` → `Movable` → `Hero`)
- **Alternativ B**: Bruk komposisjon (som fabrikkfunksjonstilnærmingen med blandede oppføringer)

**Implementer kommunikasjon:**
- **Inkluder** en `EventEmitter`-klasse for pub/sub-meldingssystem
- **Sett opp** minst 2-3 forskjellige meldingstyper (som `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Koble** brukerinput (tastatur/mus) til spillhendelser gjennom hendelsessystemet

**Spillelementer som skal inkluderes:**
- Minst én spillerstyrt karakter
- Minst én annen spillelement (fiende, samlegjenstand eller miljøelement)
- Grunnleggende interaksjon mellom objekter (kollisjon, samling eller kommunikasjon)

### Forslag til spillideer

**Enkle spill å vurdere:**
- **Snake-spill** – Slangesegmenter følger hodet, mat dukker opp tilfeldig
- **Pong-variant** – Racketen reagerer på input, ballen spretter mot veggene
- **Samlespill** – Spilleren beveger seg rundt og samler gjenstander mens den unngår hindringer
- **Tower Defense-grunnleggende** – Tårn oppdager og skyter på bevegelige fiender

### Retningslinjer for kodens struktur

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

### Testing av implementeringen

**Bekreft at koden din fungerer ved å:**
- **Teste** at objekter beveger seg eller endres når hendelser utløses
- **Bekrefte** at flere objekter kan reagere på samme hendelse
- **Sjekke** at du kan legge til nye oppføringer uten å endre eksisterende kode
- **Sikre** at tastatur/mus-input utløser spillhendelser riktig

## Retningslinjer for innlevering

**Din innlevering bør inkludere:**
1. **JavaScript-fil(er)** med din spillimplementering
2. **HTML-fil** for å kjøre og teste spillet ditt (kan være enkel)
3. **Kommentarer** som forklarer hvilket mønster du valgte og hvorfor
4. **Kort dokumentasjon** av meldingstypene og hva de gjør

## Vurderingskriterier

| Kriterier | Fremragende (3 poeng) | Tilfredsstillende (2 poeng) | Trenger forbedring (1 poeng) |
|-----------|-----------------------|-----------------------------|-----------------------------|
| **Arkitekturmønster** | Implementerer korrekt enten arv ELLER komposisjon med klar klasse-/objekthierarki | Bruker valgt mønster med mindre problemer eller inkonsekvenser | Forsøker å bruke mønster, men implementeringen har betydelige problemer |
| **Pub/Sub-implementering** | EventEmitter fungerer korrekt med flere meldingstyper og riktig hendelsesflyt | Grunnleggende pub/sub-system fungerer med noe hendelseshåndtering | Hendelsessystemet er til stede, men fungerer ikke pålitelig |
| **Spillfunksjonalitet** | Tre eller flere interaktive elementer som kommuniserer gjennom hendelser | To interaktive elementer med grunnleggende hendelseskommunikasjon | Ett element reagerer på hendelser eller grunnleggende interaksjon |
| **Kodekvalitet** | Ren, godt kommentert kode med logisk organisering og moderne JavaScript | Generelt godt organisert kode med tilstrekkelige kommentarer | Koden fungerer, men mangler organisering eller tydelig kommentering |

**Ekstrapoeng:**
- **Kreative spillmekanikker** som viser interessante bruk av mønstrene
- **Flere inputmetoder** (tastatur OG musehendelser)
- **Skalerbar arkitektur** som er enkel å utvide med nye funksjoner

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.