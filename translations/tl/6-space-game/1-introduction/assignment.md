# Gumawa ng Laro: Mag-apply ng Design Patterns

## Pangkalahatang-ideya ng Takdang-Aralin

Gamitin ang iyong bagong kaalaman sa design patterns sa pamamagitan ng paggawa ng simpleng prototype ng laro! Ang takdang-aralin na ito ay makakatulong sa iyo na magsanay sa parehong architectural patterns (inheritance o composition) at ang pub/sub communication system na natutunan mo sa aralin.

## Mga Instruksyon

Gumawa ng simpleng representasyon ng laro na nagpapakita ng design patterns mula sa aralin. Ang iyong laro ay dapat gumana ngunit hindi kailangang magkaroon ng komplikadong graphics – mag-focus sa underlying architecture at communication patterns.

### Mga Kinakailangan

**Piliin ang Iyong Architecture Pattern:**
- **Opsyon A**: Gumamit ng class-based inheritance (tulad ng halimbawa na `GameObject` → `Movable` → `Hero`)
- **Opsyon B**: Gumamit ng composition (tulad ng factory function approach na may mixed behaviors)

**Ipatupad ang Komunikasyon:**
- **Isama** ang isang `EventEmitter` class para sa pub/sub messaging
- **Mag-set up** ng hindi bababa sa 2-3 iba't ibang uri ng mensahe (tulad ng `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Ikonekta** ang user input (keyboard/mouse) sa mga game events sa pamamagitan ng event system

**Mga Elemento ng Laro na Dapat Isama:**
- Hindi bababa sa isang karakter na kontrolado ng player
- Hindi bababa sa isang iba pang game object (kalaban, collectible, o environmental element)
- Pangunahing interaksyon sa pagitan ng mga object (collision, collection, o communication)

### Mga Iminungkahing Ideya ng Laro

**Mga Simpleng Laro na Maaaring Isaalang-alang:**
- **Snake Game** – Ang mga segment ng ahas ay sumusunod sa ulo, ang pagkain ay random na lumilitaw
- **Pong Variation** – Ang paddle ay tumutugon sa input, ang bola ay tumatalbog sa mga pader
- **Collector Game** – Ang player ay gumagalaw sa paligid upang mangolekta ng mga item habang iniiwasan ang mga hadlang
- **Tower Defense Basics** – Ang mga tore ay nakakakita at nagpapaputok sa mga gumagalaw na kalaban

### Mga Alituntunin sa Estruktura ng Code

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

### Pagsubok sa Iyong Implementasyon

**Siguraduhing gumagana ang iyong code sa pamamagitan ng:**
- **Pagsubok** na gumagalaw o nagbabago ang mga object kapag na-trigger ang mga event
- **Pagkumpirma** na maraming object ang maaaring tumugon sa parehong event
- **Pag-check** na maaari kang magdagdag ng bagong behaviors nang hindi binabago ang umiiral na code
- **Pagtiyak** na ang keyboard/mouse input ay maayos na nagti-trigger ng mga game event

## Mga Alituntunin sa Pagsumite

**Ang iyong isusumite ay dapat maglaman ng:**
1. **JavaScript file(s)** na may implementasyon ng iyong laro
2. **HTML file** para patakbuhin at subukan ang iyong laro (maaaring simple)
3. **Mga Komento** na nagpapaliwanag kung aling pattern ang iyong pinili at bakit
4. **Maikling dokumentasyon** ng iyong mga uri ng mensahe at kung ano ang ginagawa ng mga ito

## Rubric

| Pamantayan | Natatangi (3 puntos) | Katanggap-tanggap (2 puntos) | Kailangan ng Pagpapabuti (1 punto) |
|------------|----------------------|-----------------------------|------------------------------------|
| **Architecture Pattern** | Tamang naipatupad ang inheritance O composition na may malinaw na class/object hierarchy | Ginamit ang napiling pattern na may kaunting isyu o inconsistency | Sinubukang gamitin ang pattern ngunit may malalaking problema sa implementasyon |
| **Pub/Sub Implementation** | Gumagana nang maayos ang EventEmitter na may maraming uri ng mensahe at tamang daloy ng event | Gumagana ang basic pub/sub system na may ilang event handling | May event system ngunit hindi gumagana nang maayos |
| **Game Functionality** | Tatlo o higit pang interactive elements na nakikipag-ugnayan sa pamamagitan ng events | Dalawang interactive elements na may basic event communication | Isang element lang ang tumutugon sa events o may basic interaction |
| **Code Quality** | Malinis, may maayos na komento, lohikal na organisasyon, at modernong JavaScript | Karaniwang maayos ang organisasyon ng code na may sapat na komento | Gumagana ang code ngunit kulang sa organisasyon o malinaw na komento |

**Bonus Points:**
- **Malikhaing game mechanics** na nagpapakita ng kawili-wiling paggamit ng patterns
- **Maramihang input methods** (keyboard AT mouse events)
- **Scalable architecture** na madaling palawakin gamit ang bagong features

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.