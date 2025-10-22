<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-22T15:40:59+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Space Game Bahagi 6: Pagtapos at Pag-restart

Ang bawat mahusay na laro ay nangangailangan ng malinaw na kondisyon ng pagtatapos at maayos na mekanismo ng pag-restart. Nakagawa ka na ng kahanga-hangang space game na may galaw, labanan, at pag-score - ngayon ay oras na para idagdag ang mga huling bahagi upang ito'y maging kumpleto.

Ang iyong laro ay kasalukuyang tumatakbo nang walang katapusan, tulad ng Voyager probes na inilunsad ng NASA noong 1977 - patuloy na naglalakbay sa kalawakan dekada na ang nakalipas. Bagamat ito'y maayos para sa eksplorasyon ng kalawakan, ang mga laro ay nangangailangan ng tiyak na mga endpoint upang lumikha ng kasiya-siyang karanasan.

Ngayon, magpapatupad tayo ng tamang kondisyon ng panalo/pagkatalo at sistema ng pag-restart. Sa pagtatapos ng araling ito, magkakaroon ka ng pinakinis na laro na maaaring tapusin at ulitin ng mga manlalaro, tulad ng mga klasikong arcade games na nagbigay-daan sa medium.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/39)

## Pag-unawa sa Kondisyon ng Pagtatapos ng Laro

Kailan dapat matapos ang iyong laro? Ang pangunahing tanong na ito ay humubog sa disenyo ng laro mula pa noong panahon ng mga arcade. Ang Pac-Man ay nagtatapos kapag nahuli ka ng mga multo o nalinis mo ang lahat ng mga tuldok, habang ang Space Invaders ay nagtatapos kapag ang mga alien ay umabot sa ibaba o nawasak mo silang lahat.

Bilang tagalikha ng laro, ikaw ang magtatakda ng mga kondisyon ng tagumpay at pagkatalo. Para sa ating space game, narito ang mga napatunayang paraan upang lumikha ng nakaka-engganyong gameplay:

- **`N` Mga barko ng kaaway ang nawasak**: Karaniwan ito kung hinahati mo ang laro sa iba't ibang antas kung saan kailangan mong wasakin ang `N` barko ng kaaway upang makumpleto ang isang antas.
- **Ang iyong barko ay nawasak**: May mga laro kung saan talo ka kapag ang iyong barko ay nawasak. Isa pang karaniwang paraan ay ang konsepto ng buhay. Tuwing ang iyong barko ay nawasak, nababawasan ang isang buhay. Kapag naubos na ang lahat ng buhay, talo ka na.
- **Nakolekta mo ang `N` puntos**: Isa pang karaniwang kondisyon ng pagtatapos ay ang pagkolekta ng puntos. Paano ka makakakuha ng puntos ay depende sa iyo, ngunit karaniwan itong ibinibigay sa iba't ibang aktibidad tulad ng pagwasak sa barko ng kaaway o pagkolekta ng mga item na bumabagsak kapag sila'y nawasak.
- **Nakumpleto ang isang antas**: Maaaring kabilang dito ang ilang kondisyon tulad ng `X` barko ng kaaway na nawasak, `Y` puntos na nakolekta, o maaaring isang tiyak na item ang nakolekta.

## Pagpapatupad ng Pag-restart ng Laro

Ang magagandang laro ay naghihikayat ng replayability sa pamamagitan ng maayos na mekanismo ng pag-restart. Kapag natapos ng mga manlalaro ang isang laro (o natalo), madalas nilang gustong subukan ulit agad - upang talunin ang kanilang score o pagbutihin ang kanilang performance.

Ang Tetris ay perpektong halimbawa nito: kapag ang iyong mga bloke ay umabot sa itaas, maaari kang agad magsimula ng bagong laro nang hindi dumadaan sa mga komplikadong menu. Gagawa tayo ng katulad na sistema ng pag-restart na maayos na magre-reset ng estado ng laro at agad na maibabalik ang mga manlalaro sa aksyon.

✅ **Pagmuni-muni**: Isipin ang mga larong nilaro mo. Sa anong mga kondisyon sila nagtatapos, at paano ka hinihikayat na mag-restart? Ano ang nagpapadama ng maayos na karanasan sa pag-restart kumpara sa nakakainis?

## Ano ang Iyong Itatayo

Ipapatupad mo ang mga huling tampok na magpapabago sa iyong proyekto sa isang kumpletong karanasan sa laro. Ang mga elementong ito ang nagtatangi sa mga pinakinis na laro mula sa mga simpleng prototype.

**Narito ang idadagdag natin ngayon:**

1. **Kondisyon ng tagumpay**: Wasakin ang lahat ng kaaway at makakuha ng tamang selebrasyon (karapat-dapat ka dito!)
2. **Kondisyon ng pagkatalo**: Maubos ang buhay at harapin ang musika gamit ang defeat screen
3. **Mekanismo ng pag-restart**: Pindutin ang Enter upang agad bumalik - dahil hindi sapat ang isang laro
4. **Pamamahala ng estado**: Malinis na simula sa bawat oras - walang natirang kaaway o kakaibang glitches mula sa nakaraang laro

## Pagsisimula

Ihanda ang iyong development environment. Dapat mayroon kang lahat ng iyong space game files mula sa mga nakaraang aralin.

**Ang iyong proyekto ay dapat magmukhang ganito:**

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

**Simulan ang iyong development server:**

```bash
cd your-work
npm start
```

**Ang utos na ito:**
- Nagpapatakbo ng lokal na server sa `http://localhost:5000`
- Maayos na nagsisilbi sa iyong mga file
- Awtomatikong nagre-refresh kapag may mga pagbabago

Buksan ang `http://localhost:5000` sa iyong browser at tiyaking tumatakbo ang iyong laro. Dapat kang makagalaw, makaputok, at makipag-ugnayan sa mga kaaway. Kapag nakumpirma, maaari na tayong magpatuloy sa pagpapatupad.

> 💡 **Pro Tip**: Upang maiwasan ang mga babala sa Visual Studio Code, ideklara ang `gameLoopId` sa itaas ng iyong file bilang `let gameLoopId;` sa halip na ideklara ito sa loob ng `window.onload` function. Sinusunod nito ang modernong JavaScript variable declaration best practices.

## Mga Hakbang sa Pagpapatupad

### Hakbang 1: Gumawa ng Mga Function para sa Pagsubaybay sa Kondisyon ng Pagtatapos

Kailangan natin ng mga function upang subaybayan kung kailan dapat matapos ang laro. Tulad ng mga sensor sa International Space Station na patuloy na nagmo-monitor ng mga kritikal na sistema, ang mga function na ito ay patuloy na susuriin ang estado ng laro.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Narito ang nangyayari sa ilalim:**
- **Sinusuri** kung ang ating hero ay naubusan ng buhay (ouch!)
- **Binibilang** kung ilan pang kaaway ang buhay at lumalaban
- **Nagbabalik** ng `true` kapag malinis na ang battlefield mula sa mga kaaway
- **Gumagamit** ng simpleng true/false logic upang panatilihing direkta ang mga bagay
- **Nagsasala** sa lahat ng game objects upang hanapin ang mga nakaligtas

### Hakbang 2: I-update ang Event Handlers para sa Kondisyon ng Pagtatapos

Ngayon ay ikokonekta natin ang mga pagsusuri ng kondisyon sa event system ng laro. Tuwing may nagaganap na banggaan, susuriin ng laro kung ito'y nag-trigger ng kondisyon ng pagtatapos. Ito'y lumilikha ng agarang feedback para sa mga kritikal na kaganapan sa laro.

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
    first.dead = true;
    second.dead = true;
    hero.incrementPoints();

    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
    enemy.dead = true;
    hero.decrementLife();
    if (isHeroDead())  {
      eventEmitter.emit(Messages.GAME_END_LOSS);
      return; // loss before victory
    }
    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.GAME_END_WIN, () => {
    endGame(true);
});
  
eventEmitter.on(Messages.GAME_END_LOSS, () => {
  endGame(false);
});
```

**Narito ang nangyayari:**
- **Laser tumama sa kaaway**: Parehong nawawala, nakakakuha ka ng puntos, at sinusuri kung nanalo ka
- **Kaaway tumama sa iyo**: Nawawala ka ng buhay, at sinusuri kung buhay ka pa
- **Matalinong pagkakasunod-sunod**: Sinusuri muna ang pagkatalo (walang gustong manalo at matalo nang sabay!)
- **Agarang reaksyon**: Kapag may mahalagang nangyari, alam ito ng laro

### Hakbang 3: Magdagdag ng Bagong Constants para sa Mensahe

Kailangan mong magdagdag ng mga bagong uri ng mensahe sa iyong `Messages` constant object. Ang mga constants na ito ay tumutulong sa pagpapanatili ng pagkakapare-pareho at pag-iwas sa mga typo sa iyong event system.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**Sa itaas, ginawa natin:**
- **Nagdagdag** ng constants para sa mga event ng pagtatapos ng laro upang mapanatili ang pagkakapare-pareho
- **Gumamit** ng mga deskriptibong pangalan na malinaw na nagpapahiwatig ng layunin ng event
- **Sinunod** ang umiiral na naming convention para sa mga uri ng mensahe

### Hakbang 4: Magpatupad ng Kontrol para sa Pag-restart

Ngayon ay magdadagdag ka ng keyboard controls na magpapahintulot sa mga manlalaro na i-restart ang laro. Ang Enter key ay natural na pagpipilian dahil karaniwan itong nauugnay sa pag-apruba ng mga aksyon at pagsisimula ng mga bagong laro.

**Magdagdag ng Enter key detection sa iyong umiiral na keydown event listener:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Idagdag ang bagong constant para sa mensahe:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Ang kailangan mong malaman:**
- **Pinalawak** ang umiiral na sistema ng paghawak ng keyboard event
- **Ginamit** ang Enter key bilang trigger para sa pag-restart para sa intuitive na karanasan ng user
- **Naglabas** ng custom na event na maaaring pakinggan ng ibang bahagi ng iyong laro
- **Pinanatili** ang parehong pattern tulad ng iyong iba pang keyboard controls

### Hakbang 5: Gumawa ng Sistema ng Pag-display ng Mensahe

Ang iyong laro ay kailangang malinaw na makipag-usap ng resulta sa mga manlalaro. Gagawa tayo ng sistema ng mensahe na nagpapakita ng mga estado ng tagumpay at pagkatalo gamit ang color-coded na teksto, katulad ng mga terminal interface ng mga unang computer system kung saan ang berde ay nagpapahiwatig ng tagumpay at pula ay nagpapahiwatig ng error.

**Gumawa ng `displayMessage()` function:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Hakbang-hakbang, narito ang nangyayari:**
- **Itinatakda** ang font size at family para sa malinaw at nababasang teksto
- **Nag-aaplay** ng color parameter na may "red" bilang default para sa mga babala
- **Ine-center** ang teksto nang pahalang at patayo sa canvas
- **Gumagamit** ng modernong default parameters ng JavaScript para sa flexible na color options
- **Ginagamit** ang canvas 2D context para sa direktang pag-render ng teksto

**Gumawa ng `endGame()` function:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (win) {
      displayMessage(
        "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
        "green"
      );
    } else {
      displayMessage(
        "You died !!! Press [Enter] to start a new game Captain Pew Pew"
      );
    }
  }, 200)  
}
```

**Ang ginagawa ng function na ito:**
- **Pinipigil** ang lahat ng galaw - wala nang gumagalaw na barko o laser
- **Nagbibigay** ng maliit na pause (200ms) upang matapos ang huling frame na ma-drawing
- **Nililinis** ang screen at pinipinturahan ito ng itim para sa dramatikong epekto
- **Nagpapakita** ng iba't ibang mensahe para sa mga nanalo at natalo
- **Nagbibigay ng kulay** sa balita - berde para sa maganda, pula para sa... hindi maganda
- **Sinasabi** sa mga manlalaro kung paano agad bumalik sa laro

### Hakbang 6: Magpatupad ng Pag-reset ng Laro

Ang sistema ng pag-reset ay kailangang ganap na linisin ang kasalukuyang estado ng laro at mag-initialize ng bagong session ng laro. Tinitiyak nito na ang mga manlalaro ay makakakuha ng malinis na simula nang walang natirang data mula sa nakaraang laro.

**Gumawa ng `resetGame()` function:**

```javascript
function resetGame() {
  if (gameLoopId) {
    clearInterval(gameLoopId);
    eventEmitter.clear();
    initGame();
    gameLoopId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawPoints();
      drawLife();
      updateGameObjects();
      drawGameObjects(ctx);
    }, 100);
  }
}
```

**Unawain ang bawat bahagi:**
- **Sinusuri** kung may kasalukuyang game loop bago mag-reset
- **Nililinis** ang umiiral na game loop upang ihinto ang lahat ng kasalukuyang aktibidad ng laro
- **Inaalis** ang lahat ng event listeners upang maiwasan ang memory leaks
- **Ini-reinitialize** ang estado ng laro gamit ang mga bagong object at variable
- **Sinisimulan** ang bagong game loop na may lahat ng mahahalagang function ng laro
- **Pinapanatili** ang parehong 100ms interval para sa pare-parehong performance ng laro

**Idagdag ang Enter key event handler sa iyong `initGame()` function:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Idagdag ang `clear()` method sa iyong EventEmitter class:**

```javascript
clear() {
  this.listeners = {};
}
```

**Mga mahalagang punto na dapat tandaan:**
- **Ikokonekta** ang Enter key press sa functionality ng pag-reset ng laro
- **Ire-rehistro** ang event listener na ito sa panahon ng initialization ng laro
- **Nagbibigay** ng malinis na paraan upang alisin ang lahat ng event listeners kapag nag-reset
- **Pinipigilan** ang memory leaks sa pamamagitan ng pag-clear ng event handlers sa pagitan ng mga laro
- **Ire-reset** ang listeners object sa isang empty state para sa sariwang initialization

## Binabati kita! 🎉

👽 💥 🚀 Matagumpay mong naitayo ang isang kumpletong laro mula sa simula. Tulad ng mga programmer na lumikha ng mga unang video games noong 1970s, na-transform mo ang mga linya ng code sa isang interactive na karanasan na may tamang game mechanics at user feedback. 🚀 💥 👽

**Na-accomplish mo:**
- **Naipatupad** ang kumpletong kondisyon ng panalo at pagkatalo na may user feedback
- **Nilikha** ang seamless restart system para sa tuloy-tuloy na gameplay
- **Dinisenyo** ang malinaw na visual communication para sa mga estado ng laro
- **Pinamahalaan** ang mga kumplikadong transition ng estado ng laro at cleanup
- **Pinagsama-sama** ang lahat ng components sa isang cohesive, playable na laro

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang space game sa pamamagitan ng pagpapatupad ng sistema ng level progression na may tumataas na kahirapan at bonus features.

**Prompt:** Gumawa ng multi-level space game system kung saan ang bawat level ay may mas maraming barko ng kaaway na may mas mataas na bilis at health. Magdagdag ng scoring multiplier na tumataas sa bawat level, at magpatupad ng power-ups (tulad ng rapid fire o shield) na random na lumalabas kapag nawasak ang mga kaaway. Isama ang level completion bonus at ipakita ang kasalukuyang level sa screen kasama ang umiiral na score at buhay.

Alamin ang higit pa tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## 🚀 Opsyonal na Hamon sa Pagpapahusay

**Magdagdag ng Audio sa Iyong Laro**: Pagandahin ang karanasan sa gameplay sa pamamagitan ng pagpapatupad ng mga sound effects! Isaalang-alang ang pagdagdag ng audio para sa:

- **Laser shots** kapag nagpaputok ang manlalaro
- **Pagkawasak ng kaaway** kapag tinamaan ang mga barko
- **Pinsala sa hero** kapag tinamaan ang manlalaro
- **Victory music** kapag nanalo ang laro
- **Defeat sound** kapag natalo ang laro

**Halimbawa ng pagpapatupad ng audio:**

```javascript
// Create audio objects
const laserSound = new Audio('assets/laser.wav');
const explosionSound = new Audio('assets/explosion.wav');

// Play sounds during game events
function playLaserSound() {
  laserSound.currentTime = 0; // Reset to beginning
  laserSound.play();
}
```

**Ang kailangan mong malaman:**
- **Gumagawa** ng Audio objects para sa iba't ibang sound effects
- **Ire-reset** ang `currentTime` upang payagan ang mabilisang pag-play ng sound effects
- **Hinahawakan** ang autoplay policies ng browser sa pamamagitan ng pag-trigger ng sounds mula sa user interactions
- **Pinamamahalaan** ang audio volume at timing para sa mas mahusay na karanasan sa laro

> 💡 **Learning Resource**: Tuklasin ang [audio sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) upang matuto pa tungkol sa pagpapatupad ng audio sa JavaScript games.

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/40)

## Review & Self Study

Ang iyong assignment ay gumawa ng bagong sample na laro, kaya't mag-explore ng ilang mga kawili-wiling laro upang makita kung anong uri ng laro ang maaari mong buuin.

## Assignment

[Build a Sample Game](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.