# Mängu kavandamine: Disainimustrite rakendamine

## Ülesande ülevaade

Pane oma äsjane disainimustrite tundmine proovile, luues lihtsa mängu prototüübi! See ülesanne aitab sul harjutada nii arhitektuurimustreid (pärimine või kompositsioon) kui ka pub/sub kommunikatsioonisüsteemi, mida sa õppetükis õppisid.

## Juhised

Loo lihtne mängu kujutus, mis demonstreerib selle õppetüki disainimustreid. Sinu mäng peaks olema funktsionaalne, kuid keerulisi graafikaid pole vaja – keskendu alusstruktuurile ja kommunikatsioonimustritele.

### Nõuded

**Vali oma arhitektuurimuster:**
- **Variant A**: Kasuta klassipõhist pärimist (nt `GameObject` → `Movable` → `Hero` näide)
- **Variant B**: Kasuta kompositsiooni (nt tehasefunktsiooni lähenemine segatud käitumistega)

**Rakenda kommunikatsioon:**
- **Lisa** `EventEmitter` klass pub/sub sõnumside jaoks
- **Sea üles** vähemalt 2–3 erinevat sõnumitüüpi (nt `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Ühenda** kasutajasisend (klaviatuur/hiir) mängusündmustega läbi sündmuste süsteemi

**Mänguelemendid, mida lisada:**
- Vähemalt üks mängijakontrolli all olev tegelane
- Vähemalt üks teine mänguobjekt (vaenlane, kogutav ese või keskkonnaelement)
- Põhiline objektide vaheline interaktsioon (kokkupõrge, kogumine või suhtlus)

### Soovitatud mänguideed

**Lihtsad mängud, mida kaaluda:**
- **Mao mäng** – mao sektorid järgivad pead, toit ilmub juhuslikult
- **Pongi variatsioon** – rekett reageerib sisendile, pall põrkab seintelt
- **Kogumise mäng** – mängija liigub ja kogub esemeid, vältides takistusi
- **Tornikaitse algus** – tornid tuvastavad ja tulistavad liikuvate vaenlaste pihta

### Koodi struktuuri juhised

```javascript
// Näidise algusstruktuur
const Messages = {
  // Määratle siin oma mängusõnumid
};

class EventEmitter {
  // Sinu sündmussüsteemi rakendus
}

// Vali kas klassipõhine VÕI kompositsioonil põhinev lähenemine
// Klassipõhine näide:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// Või kompositsiooni näide:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Oma rakenduse testimine

**Kontrolli oma koodi toimimist järgmistega:**
- **Testi**, et objektid liiguvad või muutuvad sündmuste käivitumisel
- **Veendu**, et mitu objekti saavad sama sündmuse peale reageerida
- **Kontrolli**, et saad lisada uusi käitumisi ilma olemasolevat koodi muutmata
- **Tagamaks**, et klaviatuuri/hiire sisend käivitab mängusündmused korrektselt

## Esitamise juhised

**Sinu esitus peaks sisaldama:**
1. **JavaScript faili(de)** sinu mängu rakendusega
2. **HTML faili**, et mängu käivitada ja testida (võib olla lihtne)
3. **Kommentaare** selle kohta, millise mustri valisid ja miks
4. **Lühikest dokumentatsiooni** sõnumitüüpide kohta ja mida nad teevad

## Hindamiskriteeriumid

| Kriteerium | Näidismenukas (3 punkti) | Piisav (2 punkti) | Vajab paranemist (1 punkt) |
|------------|--------------------------|-------------------|----------------------------|
| **Arhitektuurimuster** | Rakendab õigesti kas pärimist VÕI kompositsiooni selge klassi/objekti hierarhiaga | Kasutab valitud mustrit mõningate puudustega või ebajärjekindlusega | Püüab mustrit kasutada, kuid rakendusel on tõsised vead |
| **Pub/Sub rakendus** | EventEmitter töötab korrektselt mitme sõnumitüübiga ja korraliku sündmuste vooga | Põhiline pub/sub süsteem töötab mõne sündmusetöötlusega | Sündmuste süsteem olemas, kuid ei tööta usaldusväärselt |
| **Mängu funktsionaalsus** | Kolm või enam interaktiivset elementi, mis suhtlevad sündmuste kaudu | Kaks interaktiivset elementi põhilise sündmuste suhtlusega | Üks element reageerib sündmustele või põhitasemel interaktsioon |
| **Koodi kvaliteet** | Puhas, hästi kommenteeritud kood loogilise korraldusega ja moodsa JavaScriptiga | Üldiselt hästi organiseeritud kood sobivate kommentaaridega | Kood töötab, kuid puudub korraldus või selged kommentaarid |

**Boonuspunkte:**
- **Loomingulised mängumehhaanika lahendused**, mis näitavad mustrite huvitavaid kasutusviise
- **Mitmed sisendmeetodid** (klaviatuur JA hiire sündmused)
- **Laiendatav arhitektuur**, mida oleks lihtne uute funktsioonidega täiendada

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellekti tõlke teenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, palun arvestage, et automatiseeritud tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle emakeeles tuleks pidada autoriteetseks allikaks. Oluliste andmete puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta ühegi arusaamatuse või valesti tõlgendamise eest, mis tuleneb selle tõlke kasutamisest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->