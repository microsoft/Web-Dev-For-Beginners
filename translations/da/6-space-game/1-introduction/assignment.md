<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2025-10-23T22:12:34+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "da"
}
-->
# Mock op et spil: Anvend designmønstre

## Opgaveoversigt

Brug din nyvundne viden om designmønstre til at lave en simpel spilprototype! Denne opgave vil hjælpe dig med at øve både arkitektoniske mønstre (arv eller komposition) og det pub/sub-kommunikationssystem, du lærte om i lektionen.

## Instruktioner

Lav en simpel spilrepræsentation, der demonstrerer designmønstrene fra denne lektion. Dit spil skal være funktionelt, men behøver ikke komplekse grafik \u2013 fokusér på den underliggende arkitektur og kommunikationsmønstre.

### Krav

**Vælg dit arkitekturmønster:**
- **Mulighed A**: Brug klassebaseret arv (som eksemplet `GameObject` → `Movable` → `Hero`)
- **Mulighed B**: Brug komposition (som fabriksfunktionstilgangen med blandede adfærdsmønstre)

**Implementér kommunikation:**
- **Inkluder** en `EventEmitter`-klasse til pub/sub-beskeder
- **Opsæt** mindst 2-3 forskellige beskedtyper (som `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Forbind** brugerinput (tastatur/mus) til spilbegivenheder gennem begivenhedssystemet

**Spilelementer, der skal inkluderes:**
- Mindst én spillerstyret karakter
- Mindst én anden spilobjekt (fjende, samlbar genstand eller miljøelement)
- Grundlæggende interaktion mellem objekter (kollision, indsamling eller kommunikation)

### Forslag til spilidéer

**Enkle spil at overveje:**
- **Slangespil** \u2013 Slangesegmenter følger hovedet, mad spawner tilfældigt
- **Pong-variation** \u2013 Paddel reagerer på input, bolden hopper mod væggene
- **Samlerspil** \u2013 Spilleren bevæger sig rundt og samler genstande, mens han undgår forhindringer
- **Grundlæggende Tower Defense** \u2013 Tårne opdager og skyder mod bevægelige fjender

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

### Test din implementering

**Bekræft, at din kode fungerer ved:**
- **Test** af, at objekter bevæger sig eller ændrer sig, når begivenheder udløses
- **Bekræft** at flere objekter kan reagere på den samme begivenhed
- **Kontrollér** at du kan tilføje nye adfærdsmønstre uden at ændre eksisterende kode
- **Sikre** at tastatur/mus-input korrekt udløser spilbegivenheder

## Retningslinjer for aflevering

**Din aflevering skal inkludere:**
1. **JavaScript-fil(er)** med din spilimplementering
2. **HTML-fil** til at køre og teste dit spil (kan være simpel)
3. **Kommentarer** der forklarer, hvilket mønster du valgte og hvorfor
4. **Kort dokumentation** af dine beskedtyper og hvad de gør

## Bedømmelseskriterier

| Kriterier | Fremragende (3 point) | Tilstrækkelig (2 point) | Kræver forbedring (1 point) |
|-----------|-----------------------|-------------------------|-----------------------------|
| **Arkitekturmønster** | Implementerer korrekt enten arv ELLER komposition med klar klasse-/objekthierarki | Bruger det valgte mønster med mindre problemer eller inkonsistenser | Forsøger at bruge mønsteret, men implementeringen har betydelige problemer |
| **Pub/Sub-implementering** | EventEmitter fungerer korrekt med flere beskedtyper og korrekt begivenhedsflow | Grundlæggende pub/sub-system fungerer med noget begivenhedshåndtering | Begivenhedssystemet er til stede, men fungerer ikke pålideligt |
| **Spilfunktionalitet** | Tre eller flere interaktive elementer, der kommunikerer gennem begivenheder | To interaktive elementer med grundlæggende begivenhedskommunikation | Ét element reagerer på begivenheder eller grundlæggende interaktion |
| **Kodekvalitet** | Ren, velkommenteret kode med logisk organisering og moderne JavaScript | Generelt velorganiseret kode med tilstrækkelige kommentarer | Koden fungerer, men mangler organisering eller klare kommentarer |

**Bonuspoint:**
- **Kreative spilmekanikker** der viser interessante anvendelser af mønstrene
- **Flere inputmetoder** (tastatur OG musebegivenheder)
- **Skalerbar arkitektur** der ville være nem at udvide med nye funktioner

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.