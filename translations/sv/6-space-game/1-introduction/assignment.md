<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2025-10-23T21:48:52+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "sv"
}
-->
# Skapa ett Spel: Använd Designmönster

## Uppdragsöversikt

Använd din nyvunna kunskap om designmönster för att skapa en enkel spelprototyp! Denna uppgift hjälper dig att öva både arkitektoniska mönster (arv eller komposition) och pub/sub-kommunikationssystemet som du lärde dig om i lektionen.

## Instruktioner

Skapa en enkel spelrepresentation som demonstrerar designmönstren från denna lektion. Ditt spel ska vara funktionellt men behöver inte ha komplex grafik – fokusera på den underliggande arkitekturen och kommunikationsmönstren.

### Krav

**Välj ditt arkitekturmönster:**
- **Alternativ A**: Använd klassbaserat arv (som exemplet `GameObject` → `Movable` → `Hero`)
- **Alternativ B**: Använd komposition (som fabriksfunktionsmetoden med blandade beteenden)

**Implementera kommunikation:**
- **Inkludera** en `EventEmitter`-klass för pub/sub-meddelanden
- **Ställ in** minst 2-3 olika meddelandetyper (som `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Koppla** användarinmatning (tangentbord/mus) till spelehändelser via händelsesystemet

**Spelelement att inkludera:**
- Minst en spelarkontrollerad karaktär
- Minst ett annat spelobjekt (fiende, samlingsobjekt eller miljöelement)
- Grundläggande interaktion mellan objekt (kollision, insamling eller kommunikation)

### Förslag på spelidéer

**Enkla spel att överväga:**
- **Snake Game** – Ormsegment följer huvudet, mat dyker upp slumpmässigt
- **Pong-variant** – Paddeln reagerar på inmatning, bollen studsar mot väggarna
- **Samlingsspel** – Spelaren rör sig runt och samlar föremål medan hen undviker hinder
- **Tower Defense-grunder** – Torn upptäcker och skjuter på rörliga fiender

### Riktlinjer för kodstruktur

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

### Testa din implementation

**Verifiera att din kod fungerar genom att:**
- **Testa** att objekt rör sig eller ändras när händelser triggas
- **Bekräfta** att flera objekt kan reagera på samma händelse
- **Kontrollera** att du kan lägga till nya beteenden utan att ändra befintlig kod
- **Säkerställa** att tangentbords-/musinmatning korrekt triggar spelehändelser

## Inlämningsinstruktioner

**Din inlämning ska inkludera:**
1. **JavaScript-fil(er)** med din spelimplementation
2. **HTML-fil** för att köra och testa ditt spel (kan vara enkel)
3. **Kommentarer** som förklarar vilket mönster du valde och varför
4. **Kort dokumentation** av dina meddelandetyper och vad de gör

## Bedömningskriterier

| Kriterier | Exemplariskt (3 poäng) | Tillräckligt (2 poäng) | Behöver förbättras (1 poäng) |
|-----------|-------------------------|-------------------------|-----------------------------|
| **Arkitekturmönster** | Implementerar korrekt antingen arv ELLER komposition med tydlig klass-/objekthierarki | Använder valt mönster med mindre problem eller inkonsekvenser | Försöker använda mönstret men implementationen har betydande problem |
| **Pub/Sub-implementation** | EventEmitter fungerar korrekt med flera meddelandetyper och korrekt händelseflöde | Grundläggande pub/sub-system fungerar med viss händelsehantering | Händelsesystem finns men fungerar inte pålitligt |
| **Spelfunktionalitet** | Tre eller fler interaktiva element som kommunicerar via händelser | Två interaktiva element med grundläggande händelsekommunikation | Ett element reagerar på händelser eller grundläggande interaktion |
| **Kodkvalitet** | Ren, välkommenterad kod med logisk organisering och modern JavaScript | Generellt välorganiserad kod med tillräckliga kommentarer | Koden fungerar men saknar organisering eller tydliga kommentarer |

**Bonuspoäng:**
- **Kreativa spelmekaniker** som visar intressanta användningar av mönstren
- **Flera inmatningsmetoder** (tangentbord OCH mus)
- **Skalbar arkitektur** som skulle vara lätt att utöka med nya funktioner

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.