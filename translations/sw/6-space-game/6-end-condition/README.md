<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-24T19:41:28+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 6: Mwisho na Kuanzisha Upya

Kila mchezo mzuri unahitaji masharti ya mwisho yaliyo wazi na mfumo laini wa kuanzisha upya. Umejenga mchezo wa anga wa kuvutia wenye harakati, mapigano, na alama - sasa ni wakati wa kuongeza vipande vya mwisho vinavyoufanya uhisi kamili.

Mchezo wako kwa sasa unaendelea bila kikomo, kama vile vyombo vya Voyager vilivyozinduliwa na NASA mwaka 1977 - bado vinasafiri angani miongo kadhaa baadaye. Ingawa hilo ni sawa kwa uchunguzi wa anga, michezo inahitaji mwisho ulioelezwa ili kuunda uzoefu wa kuridhisha.

Leo, tutaweka masharti sahihi ya kushinda/kushindwa na mfumo wa kuanzisha upya. Mwisho wa somo hili, utakuwa na mchezo uliosuguliwa ambao wachezaji wanaweza kukamilisha na kucheza tena, kama michezo ya arcade ya zamani iliyofafanua sekta hiyo.

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/39)

## Kuelewa Masharti ya Mwisho wa Mchezo

Mchezo wako unapaswa kumalizika lini? Swali hili la msingi limeunda muundo wa michezo tangu enzi za arcade za mapema. Pac-Man unamalizika unapokamatwa na roho au unapomaliza nukta zote, wakati Space Invaders unamalizika pale wageni wanapofika chini au unawaangamiza wote.

Kama muundaji wa mchezo, unafafanua masharti ya ushindi na kushindwa. Kwa mchezo wetu wa anga, hapa kuna mbinu zilizothibitishwa zinazounda uchezaji wa kuvutia:

- **`N` Meli za adui zimeangamizwa**: Ni kawaida sana ikiwa unagawanya mchezo katika viwango tofauti ambapo unahitaji kuangamiza `N` meli za adui ili kukamilisha kiwango.
- **Meli yako imeangamizwa**: Kuna michezo ambapo unapoteza mchezo ikiwa meli yako imeangamizwa. Mbinu nyingine ya kawaida ni kuwa na dhana ya maisha. Kila wakati meli yako inapoharibiwa inapunguza maisha. Mara maisha yote yanapopotea basi unapoteza mchezo.
- **Umekusanya alama `N`**: Sharti lingine la kawaida la mwisho ni kukusanya alama. Jinsi unavyopata alama ni juu yako lakini ni kawaida kupeana alama kwa shughuli mbalimbali kama kuangamiza meli ya adui au labda kukusanya vitu ambavyo vinaanguka wakati vinaharibiwa.
- **Kukamilisha kiwango**: Hii inaweza kuhusisha masharti kadhaa kama `X` meli za adui zimeangamizwa, `Y` alama zimekusanywa au labda kipengele maalum kimekusanywa.

## Kutekeleza Mfumo wa Kuanzisha Upya Mchezo

Michezo mizuri inahamasisha uchezaji tena kupitia mifumo laini ya kuanzisha upya. Wakati wachezaji wanakamilisha mchezo (au wanashindwa), mara nyingi wanataka kujaribu tena mara moja - iwe ni kushinda alama yao au kuboresha utendaji wao.

Tetris inadhihirisha hili kikamilifu: wakati vizuizi vyako vinapofika juu, unaweza kuanza mchezo mpya mara moja bila kupitia menyu ngumu. Tutajenga mfumo wa kuanzisha upya unaosafisha hali ya mchezo na kuwarudisha wachezaji kwenye hatua haraka.

✅ **Tafakari**: Fikiria kuhusu michezo uliyocheza. Masharti gani yanamaliza mchezo, na unachochewa vipi kuanzisha upya? Nini hufanya uzoefu wa kuanzisha upya uhisi laini dhidi ya kufadhaisha?

## Kile Utakachojenga

Utatekeleza vipengele vya mwisho vinavyogeuza mradi wako kuwa uzoefu kamili wa mchezo. Vipengele hivi vinatofautisha michezo iliyosuguliwa kutoka kwa prototypes za msingi.

**Hivi ndivyo tunavyoongeza leo:**

1. **Sharti la ushindi**: Angamiza maadui wote na upate sherehe sahihi (umestahili!)
2. **Sharti la kushindwa**: Poteza maisha na ukubali kushindwa na skrini ya kushindwa
3. **Mfumo wa kuanzisha upya**: Bonyeza Enter kurudi mara moja - kwa sababu mchezo mmoja haukutoshi
4. **Usimamizi wa hali**: Mwanzo safi kila wakati - hakuna maadui waliobaki au hitilafu za ajabu kutoka mchezo wa mwisho

## Kujiandaa

Tayarishe mazingira yako ya maendeleo. Unapaswa kuwa na faili zote za mchezo wa anga kutoka masomo ya awali tayari.

**Mradi wako unapaswa kuonekana kama hivi:**

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

**Anzisha seva yako ya maendeleo:**

```bash
cd your-work
npm start
```

**Amri hii:**
- Inaendesha seva ya ndani kwenye `http://localhost:5000`
- Inahudumia faili zako vizuri
- Inasasisha kiotomatiki unapofanya mabadiliko

Fungua `http://localhost:5000` kwenye kivinjari chako na hakikisha mchezo wako unaendelea. Unapaswa kuwa na uwezo wa kusonga, kupiga risasi, na kuingiliana na maadui. Mara tu unapothibitisha, tunaweza kuendelea na utekelezaji.

> 💡 **Ushauri wa Kitaalamu**: Ili kuepuka maonyo katika Visual Studio Code, tangaza `gameLoopId` juu ya faili yako kama `let gameLoopId;` badala ya kutangaza ndani ya kazi ya `window.onload`. Hii inafuata mbinu bora za kisasa za kutangaza vigezo vya JavaScript.

## Hatua za Utekelezaji

### Hatua ya 1: Unda Kazi za Kufuatilia Masharti ya Mwisho

Tunahitaji kazi za kufuatilia wakati mchezo unapaswa kumalizika. Kama sensa kwenye Kituo cha Kimataifa cha Anga zinazofuatilia mifumo muhimu kila wakati, kazi hizi zitakagua hali ya mchezo mara kwa mara.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Hivi ndivyo kinachotokea nyuma ya pazia:**
- **Inakagua** kama shujaa wetu hana maisha (pole!)
- **Inahesabu** ni maadui wangapi bado wako hai na wanapambana
- **Inarudisha** `true` wakati uwanja wa vita uko wazi kwa maadui
- **Inatumia** mantiki rahisi ya kweli/siyo ili kuweka mambo rahisi
- **Inachuja** kupitia vitu vyote vya mchezo kutafuta walionusurika

### Hatua ya 2: Sasisha Vishikilia Matukio kwa Masharti ya Mwisho

Sasa tutaunganisha ukaguzi wa masharti haya na mfumo wa matukio wa mchezo. Kila wakati mgongano unapotokea, mchezo utatathmini kama unachochea sharti la mwisho. Hii inaunda maoni ya haraka kwa matukio muhimu ya mchezo.

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

**Kinachotokea hapa:**
- **Laser inagonga adui**: Wote wanatoweka, unapata alama, na tunakagua kama umeshinda
- **Adui anakugonga**: Unapoteza maisha, na tunakagua kama bado uko hai
- **Mpangilio mzuri**: Tunakagua kushindwa kwanza (hakuna anayependa kushinda na kushindwa kwa wakati mmoja!)
- **Majibu ya haraka**: Mara tu kitu muhimu kinapotokea, mchezo unajua kuhusu hilo

### Hatua ya 3: Ongeza Aina Mpya za Ujumbe

Utahitaji kuongeza aina mpya za ujumbe kwenye kitu chako cha `Messages`. Aina hizi za ujumbe husaidia kudumisha uthabiti na kuzuia makosa ya herufi katika mfumo wako wa matukio.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**Katika hapo juu, tume:**
- **Ongeza** aina za ujumbe kwa matukio ya mwisho wa mchezo ili kudumisha uthabiti
- **Tumia** majina yanayoelezea wazi madhumuni ya tukio
- **Fuata** muundo wa majina uliopo kwa aina za ujumbe

### Hatua ya 4: Tekeleza Udhibiti wa Kuanzisha Upya

Sasa utaongeza udhibiti wa kibodi unaoruhusu wachezaji kuanzisha upya mchezo. Kitufe cha Enter ni chaguo la asili kwani kinahusishwa sana na kuthibitisha vitendo na kuanzisha michezo mipya.

**Ongeza utambuzi wa kitufe cha Enter kwenye msikilizaji wako wa tukio la keydown uliopo:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Ongeza aina mpya ya ujumbe:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Unachohitaji kujua:**
- **Inapanua** mfumo wako uliopo wa kushughulikia matukio ya kibodi
- **Inatumia** kitufe cha Enter kama kichocheo cha kuanzisha upya kwa uzoefu wa mtumiaji wa angavu
- **Inatoa** tukio maalum ambalo sehemu nyingine za mchezo wako zinaweza kusikiliza
- **Inadumisha** muundo sawa na udhibiti wako mwingine wa kibodi

### Hatua ya 5: Unda Mfumo wa Kuonyesha Ujumbe

Mchezo wako unahitaji kuwasiliana matokeo wazi kwa wachezaji. Tutaunda mfumo wa ujumbe unaoonyesha hali za ushindi na kushindwa kwa kutumia maandishi yenye rangi, sawa na interface za terminal za kompyuta za mapema ambapo kijani kilionyesha mafanikio na nyekundu ilionyesha makosa.

**Unda kazi ya `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Hatua kwa hatua, kinachotokea:**
- **Inaset** ukubwa wa fonti na familia kwa maandishi yanayosomeka wazi
- **Inatumia** parameter ya rangi na "nyekundu" kama chaguo-msingi kwa maonyo
- **Inasogeza** maandishi katikati ya usawa na wima kwenye canvas
- **Inatumia** parameter za kisasa za JavaScript kwa chaguo za rangi zinazobadilika
- **Inatumia** muktadha wa 2D wa canvas kwa uonyeshaji wa maandishi moja kwa moja

**Unda kazi ya `endGame()`:**

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

**Kazi hii inafanya:**
- **Inagandisha** kila kitu mahali pake - hakuna meli au laser zinazohama
- **Inachukua** pause ndogo (200ms) kuruhusu fremu ya mwisho kumaliza kuchora
- **Inafuta** skrini na kuipaka rangi nyeusi kwa athari ya kushangaza
- **Inaonyesha** ujumbe tofauti kwa washindi na walioshindwa
- **Inapaka rangi** habari - kijani kwa nzuri, nyekundu kwa... vizuri, si nzuri
- **Inawaambia** wachezaji jinsi ya kurudi kwenye mchezo

### Hatua ya 6: Tekeleza Mfumo wa Kuanzisha Upya Mchezo

Mfumo wa kuanzisha upya unahitaji kusafisha kabisa hali ya mchezo wa sasa na kuanzisha kikao kipya cha mchezo. Hii inahakikisha wachezaji wanapata mwanzo safi bila data yoyote iliyobaki kutoka mchezo wa awali.

**Unda kazi ya `resetGame()`:**

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

**Hebu tuelewe kila sehemu:**
- **Inakagua** kama mzunguko wa mchezo unaendelea kabla ya kuanzisha upya
- **Inafuta** mzunguko wa mchezo uliopo ili kusimamisha shughuli zote za mchezo wa sasa
- **Inaondoa** wasikilizaji wote wa matukio ili kuzuia uvujaji wa kumbukumbu
- **Inaanzisha upya** hali ya mchezo na vitu na vigezo vipya
- **Inaanzisha** mzunguko mpya wa mchezo na kazi zote muhimu za mchezo
- **Inadumisha** muda wa 100ms kwa utendaji wa mchezo thabiti

**Ongeza msikilizaji wa tukio la kitufe cha Enter kwenye kazi yako ya `initGame()`:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Ongeza njia ya `clear()` kwenye darasa lako la EventEmitter:**

```javascript
clear() {
  this.listeners = {};
}
```

**Mambo muhimu ya kukumbuka:**
- **Inaunganisha** bonyeza kitufe cha Enter na utendaji wa kuanzisha upya mchezo
- **Inasajili** msikilizaji wa tukio hili wakati wa kuanzisha mchezo
- **Inatoa** njia safi ya kuondoa wasikilizaji wote wa matukio wakati wa kuanzisha upya
- **Inazuia** uvujaji wa kumbukumbu kwa kusafisha wasikilizaji wa matukio kati ya michezo
- **Inaanzisha upya** kitu cha wasikilizaji kuwa hali tupu kwa uanzishaji safi

## Hongera! 🎉

👽 💥 🚀 Umefanikiwa kujenga mchezo kamili kutoka mwanzo. Kama waandaaji wa programu waliounda michezo ya video ya kwanza katika miaka ya 1970, umegeuza mistari ya msimbo kuwa uzoefu wa mwingiliano wenye mechanics sahihi za mchezo na maoni ya mtumiaji. 🚀 💥 👽

**Umefanikiwa:**
- **Kutekeleza** masharti kamili ya kushinda na kushindwa na maoni ya mtumiaji
- **Kuunda** mfumo laini wa kuanzisha upya kwa uchezaji endelevu
- **Kubuni** mawasiliano ya wazi ya kuona kwa hali za mchezo
- **Kusimamia** mabadiliko magumu ya hali ya mchezo na usafishaji
- **Kukusanya** vipengele vyote kuwa mchezo unaoweza kuchezwa kikamilifu

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Boresha mchezo wa anga kwa kutekeleza mfumo wa maendeleo ya viwango na ugumu unaoongezeka na vipengele vya bonasi.

**Kichocheo:** Unda mfumo wa mchezo wa viwango vingi ambapo kila kiwango kina meli zaidi za adui zenye kasi na afya iliyoongezeka. Ongeza kipengele cha kuzidisha alama kinachoongezeka na kila kiwango, na tekeleza nguvu za ziada (kama risasi za haraka au kinga) zinazojitokeza kwa bahati nasibu wakati maadui wanaharibiwa. Ongeza bonasi ya kukamilisha kiwango na onyesha kiwango cha sasa kwenye skrini pamoja na alama na maisha yaliyopo.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## 🚀 Changamoto ya Kuboresha Hiari

**Ongeza Sauti kwenye Mchezo Wako**: Boresha uzoefu wa uchezaji kwa kutekeleza athari za sauti! Fikiria kuongeza sauti kwa:

- **Risasi za laser** wakati mchezaji anapiga
- **Uharibifu wa adui** wakati meli zinapigwa
- **Madhara kwa shujaa** wakati mchezaji anapigwa
- **Muziki wa ushindi** wakati mchezo unashinda
- **Sauti ya kushindwa** wakati mchezo unapotea

**Mfano wa utekelezaji wa sauti:**

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

**Unachohitaji kujua:**
- **Inaunda** vitu vya Sauti kwa athari tofauti za sauti
- **Inaseti upya** `currentTime` kuruhusu athari za sauti za haraka
- **Inashughulikia** sera za autoplay za kivinjari kwa kuchochea sauti kutoka kwa mwingiliano wa mtumiaji
- **Inasimamia** sauti na muda wa sauti kwa uzoefu bora wa mchezo

> 💡 **Rasilimali ya Kujifunza**: Chunguza [sandbox ya sauti](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) ili kujifunza zaidi kuhusu kutekeleza sauti katika michezo ya JavaScript.

## Maswali ya Baada ya Somo

[Maswali ya baada ya somo](https://ff-quizzes.netlify.app/web/quiz/40)

## Mapitio na Kujisomea

Kazi yako ni kuunda sampuli mpya ya mchezo, kwa hivyo chunguza baadhi ya michezo ya kuvutia huko nje ili kuona ni aina gani ya mchezo unaweza kujenga.

## Kazi

[Jenga Sampuli ya Mchezo](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.