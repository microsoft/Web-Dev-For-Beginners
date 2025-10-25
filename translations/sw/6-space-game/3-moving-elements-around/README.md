<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-24T19:39:43+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 3: Kuongeza Mwendo

Fikiria kuhusu michezo unayoipenda – kinachovutia si tu picha nzuri, bali ni jinsi kila kitu kinavyosogea na kujibu vitendo vyako. Kwa sasa, mchezo wako wa anga ni kama mchoro mzuri, lakini tunakaribia kuongeza mwendo ambao utauleta uhai.

Wahandisi wa NASA walipokuwa wakipanga kompyuta ya mwongozo kwa misheni za Apollo, walikumbana na changamoto kama hiyo: jinsi ya kufanya chombo cha anga kujibu maelekezo ya rubani huku kikidumisha marekebisho ya mwelekeo kiotomatiki? Kanuni tutakazojifunza leo zinaakisi dhana hizo – kusimamia mwendo unaodhibitiwa na mchezaji sambamba na tabia za mfumo wa kiotomatiki.

Katika somo hili, utajifunza jinsi ya kufanya vyombo vya anga visogee kwenye skrini, kujibu amri za mchezaji, na kuunda mifumo ya mwendo laini. Tutavunja kila kitu katika dhana zinazoweza kudhibitiwa ambazo zinajengwa kwa urahisi.

Mwisho wa somo, wachezaji watakuwa wakiruka chombo chao cha shujaa kwenye skrini huku vyombo vya adui vikifanya doria juu. Muhimu zaidi, utaelewa kanuni za msingi zinazowezesha mifumo ya mwendo ya michezo.

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/33)

## Kuelewa Mwendo wa Mchezo

Michezo huja hai wakati vitu vinapoanza kusogea, na kuna njia mbili za msingi ambazo hii hutokea:

- **Mwendo unaodhibitiwa na mchezaji**: Unapobonyeza kitufe au kubofya panya, kitu husogea. Hii ni uhusiano wa moja kwa moja kati yako na ulimwengu wa mchezo.
- **Mwendo wa kiotomatiki**: Wakati mchezo wenyewe unapoamua kusogeza vitu – kama vile vyombo vya adui vinavyohitaji kufanya doria kwenye skrini bila kujali unachofanya.

Kufanya vitu visogee kwenye skrini ya kompyuta ni rahisi kuliko unavyofikiria. Kumbuka zile kuratibu za x na y kutoka darasa la hesabu? Hicho ndicho tunachofanya hapa. Wakati Galileo alipokuwa akifuatilia miezi ya Jupiter mnamo 1610, kimsingi alikuwa akifanya jambo hilo hilo – kuchora nafasi kwa muda ili kuelewa mifumo ya mwendo.

Kusogeza vitu kwenye skrini ni kama kuunda uhuishaji wa flipbook – unahitaji kufuata hatua hizi tatu rahisi:

1. **Sasisha nafasi** – Badilisha mahali ambapo kitu chako kinapaswa kuwa (labda kisogeze pikseli 5 kulia)
2. **Futa fremu ya zamani** – Safisha skrini ili usione mabaki ya roho kila mahali
3. **Chora fremu mpya** – Weka kitu chako mahali pake mpya

Fanya hivi haraka vya kutosha, na boom! Unapata mwendo laini unaohisi wa asili kwa wachezaji.

Hivi ndivyo inavyoweza kuonekana kwenye msimbo:

```javascript
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**Hii ndiyo msimbo unavyofanya:**
- **Husogeza** kuratibu ya x ya shujaa kwa pikseli 5 ili kuisogeza kwa usawa
- **Hufuta** eneo lote la canvas ili kuondoa fremu ya awali
- **Hujaza** eneo la canvas na rangi ya nyuma nyeusi
- **Huchora tena** picha ya shujaa mahali pake mpya

✅ Je, unaweza kufikiria sababu kwa nini kuchora tena shujaa wako mara nyingi kwa sekunde kunaweza kusababisha gharama za utendaji? Soma kuhusu [mbadala wa muundo huu](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Kushughulikia Matukio ya Kibodi

Hapa ndipo tunapounganisha pembejeo za mchezaji na vitendo vya mchezo. Wakati mtu anapobonyeza spacebar kufyatua laser au kugusa kitufe cha mshale ili kuepuka asteroid, mchezo wako unahitaji kugundua na kujibu pembejeo hiyo.

Matukio ya kibodi hutokea katika kiwango cha dirisha, ikimaanisha dirisha lako lote la kivinjari linasikiliza mibofyo hiyo ya vitufe. Mibofyo ya panya, kwa upande mwingine, inaweza kuhusishwa na vipengele maalum (kama kubofya kitufe). Kwa mchezo wetu wa anga, tutazingatia udhibiti wa kibodi kwa sababu hiyo ndiyo inawapa wachezaji hisia ya arcade ya kawaida.

Hii inanikumbusha jinsi waendeshaji wa telegraph katika miaka ya 1800 walivyohitaji kutafsiri pembejeo za msimbo wa morse kuwa ujumbe wenye maana – tunafanya kitu kama hicho, kutafsiri mibofyo ya vitufe kuwa amri za mchezo.

Ili kushughulikia tukio unahitaji kutumia njia ya `addEventListener()` ya dirisha na kuipatia vigezo viwili vya pembejeo. Kigezo cha kwanza ni jina la tukio, kwa mfano `keyup`. Kigezo cha pili ni kazi ambayo inapaswa kuitwa kama matokeo ya tukio kutokea.

Hapa kuna mfano:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Kufafanua kinachotokea hapa:**
- **Husikiliza** matukio ya kibodi kwenye dirisha lote
- **Hukamata** kitu cha tukio ambacho kina taarifa kuhusu kitufe kilichobonyezwa
- **Hukagua** kama kitufe kilichobonyezwa kinalingana na kitufe maalum (katika kesi hii, mshale wa juu)
- **Hutekeleza** msimbo wakati hali inapotimizwa

Kwa matukio ya vitufe kuna mali mbili kwenye tukio unazoweza kutumia kuona kitufe kilichobonyezwa:

- `key` - hii ni mwakilishi wa maandishi wa kitufe kilichobonyezwa, kwa mfano `'ArrowUp'`
- `keyCode` - hii ni mwakilishi wa namba, kwa mfano `37`, inahusiana na `ArrowLeft`

✅ Udanganyifu wa matukio ya vitufe ni muhimu nje ya ukuzaji wa michezo. Je, unaweza kufikiria matumizi mengine ya mbinu hii?

### Vitufe Maalum: Tahadhari!

Baadhi ya vitufe vina tabia za kujengwa ndani ya kivinjari ambazo zinaweza kuingilia mchezo wako. Vitufe vya mshale husogeza ukurasa na spacebar husogeza chini – tabia ambazo hutaki wakati mtu anajaribu kuendesha chombo chake cha anga.

Tunaweza kuzuia tabia hizi za msingi na kuruhusu mchezo wetu kushughulikia pembejeo badala yake. Hii ni sawa na jinsi waandaaji wa kompyuta wa mapema walivyohitaji kuzuia usumbufu wa mfumo ili kuunda tabia maalum – tunafanya tu katika kiwango cha kivinjari. Hivi ndivyo:

```javascript
const onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

**Kuelewa msimbo huu wa kuzuia:**
- **Hukagua** namba za vitufe maalum ambazo zinaweza kusababisha tabia zisizohitajika za kivinjari
- **Huzuia** kitendo cha msingi cha kivinjari kwa vitufe vya mshale na spacebar
- **Huruhusu** vitufe vingine kufanya kazi kawaida
- **Hutumia** `e.preventDefault()` kuzuia tabia ya kujengwa ndani ya kivinjari

## Mwendo Unaosababishwa na Mchezo

Sasa hebu tuzungumze kuhusu vitu vinavyosogea bila pembejeo ya mchezaji. Fikiria kuhusu vyombo vya adui vinavyosogea kwenye skrini, risasi zinazopaa kwa mistari ya moja kwa moja, au mawingu yanayozunguka nyuma. Mwendo huu wa kiotomatiki hufanya ulimwengu wa mchezo wako kuhisi hai hata wakati hakuna mtu anayegusa udhibiti.

Tunatumia vipima muda vilivyojengwa ndani ya JavaScript kusasisha nafasi kwa vipindi vya kawaida. Dhana hii ni sawa na jinsi saa za pendulum zinavyofanya kazi – utaratibu wa kawaida unaosababisha vitendo vya wakati thabiti. Hivi ndivyo inavyoweza kuwa rahisi:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Hii ndiyo msimbo wa mwendo unavyofanya:**
- **Huunda** kipima muda kinachoendesha kila milisekunde 100
- **Husogeza** kuratibu ya y ya adui kwa pikseli 10 kila wakati
- **Huhifadhi** kitambulisho cha muda ili tuweze kukisimamisha baadaye ikiwa inahitajika
- **Husogeza** adui chini kwenye skrini kiotomatiki

## Mzunguko wa Mchezo

Hii ndiyo dhana inayounganisha kila kitu – mzunguko wa mchezo. Ikiwa mchezo wako ungekuwa filamu, mzunguko wa mchezo ungekuwa projektor ya filamu, ikionyesha fremu baada ya fremu haraka sana kiasi kwamba kila kitu kinaonekana kusogea kwa laini.

Kila mchezo una moja ya mizunguko hii inayoendesha nyuma ya pazia. Ni kazi inayosasisha vitu vyote vya mchezo, kuchora tena skrini, na kurudia mchakato huu kila mara. Hii inafuatilia shujaa wako, maadui wote, risasi yoyote inayoruka – hali nzima ya mchezo.

Dhana hii inanikumbusha jinsi waandaaji wa filamu wa mapema kama Walt Disney walivyohitaji kuchora tena wahusika fremu kwa fremu ili kuunda dhana ya mwendo. Tunafanya jambo hilo hilo, tu kwa msimbo badala ya penseli.

Hivi ndivyo mzunguko wa mchezo unavyoweza kuonekana, ukielezwa kwa msimbo:

```javascript
const gameLoopId = setInterval(() => {
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
  }
  gameLoop();
}, 200);
```

**Kuelewa muundo wa mzunguko wa mchezo:**
- **Hufuta** eneo lote la canvas ili kuondoa fremu ya awali
- **Hujaza** mandharinyuma na rangi thabiti
- **Huchora** vitu vyote vya mchezo katika nafasi zao za sasa
- **Hurudia** mchakato huu kila milisekunde 200 ili kuunda uhuishaji laini
- **Husimamia** kiwango cha fremu kwa kudhibiti muda wa vipindi

## Kuendelea na Mchezo wa Anga

Sasa tutaongeza mwendo kwenye eneo tuli ulilojenga hapo awali. Tunakaribia kuubadilisha kutoka picha ya skrini hadi uzoefu wa kuingiliana. Tutafanya kazi kupitia hatua kwa hatua ili kuhakikisha kila kipande kinajengwa juu ya kingine.

Chukua msimbo kutoka mahali tulipoishia katika somo la awali (au anza na msimbo katika folda ya [Sehemu ya II- mwanzo](../../../../6-space-game/3-moving-elements-around/your-work) ikiwa unahitaji mwanzo mpya).

**Hivi ndivyo tunavyounda leo:**
- **Udhibiti wa shujaa**: Vitufe vya mshale vitaendesha chombo chako cha anga kwenye skrini
- **Mwendo wa adui**: Vyombo hivyo vya kigeni vitaanza kusonga mbele

Tuanzishe utekelezaji wa vipengele hivi.

## Hatua Zinazopendekezwa

Tafuta faili ambazo zimeundwa kwako katika folda ndogo ya `your-work`. Inapaswa kuwa na yafuatayo:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Unaanza mradi wako katika folda ya `your-work` kwa kuandika:

```bash
cd your-work
npm start
```

**Hii amri inavyofanya:**
- **Inasogeza** kwenye saraka ya mradi wako
- **Inaanzisha** HTTP Server kwenye anwani `http://localhost:5000`
- **Inahudumia** faili zako za mchezo ili uweze kuzijaribu kwenye kivinjari

Hapo juu itaanzisha HTTP Server kwenye anwani `http://localhost:5000`. Fungua kivinjari na ingiza anwani hiyo, kwa sasa inapaswa kuonyesha shujaa na maadui wote; hakuna kinachosogea - bado!

### Ongeza Msimbo

1. **Ongeza vitu maalum** kwa `shujaa`, `adui`, na `kitu cha mchezo`, vinapaswa kuwa na mali za `x` na `y`. (Kumbuka sehemu ya [Urithi au muundo](../README.md)).

   *KIDOKEZO* `kitu cha mchezo` kinapaswa kuwa na `x` na `y` na uwezo wa kujichora kwenye canvas.

   > **Kidokezo**: Anza kwa kuongeza darasa jipya la `GameObject` na ueleze mjenzi wake kama ilivyo hapa chini, kisha ujichore kwenye canvas:

    ```javascript
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    **Kuelewa darasa hili la msingi:**
    - **Hufafanua** mali za kawaida ambazo vitu vyote vya mchezo vinashiriki (nafasi, ukubwa, picha)
    - **Hujumuisha** bendera ya `dead` kufuatilia kama kitu kinapaswa kuondolewa
    - **Hutoa** njia ya `draw()` inayochora kitu kwenye canvas
    - **Huanzisha** thamani za msingi kwa mali zote ambazo madarasa ya watoto yanaweza kubadilisha

    Sasa, panua `GameObject` kuunda `Hero` na `Enemy`:
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 75;
        this.type = "Hero";
        this.speed = 5;
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = "Enemy";
        const id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y);
            clearInterval(id);
          }
        }, 300);
      }
    }
    ```

    **Dhana muhimu katika madarasa haya:**
    - **Hurithi** kutoka `GameObject` kwa kutumia neno kuu `extends`
    - **Huita** mjenzi wa mzazi kwa `super(x, y)`
    - **Huanzisha** vipimo maalum na mali kwa kila aina ya kitu
    - **Hutekeleza** mwendo wa kiotomatiki kwa maadui kwa kutumia `setInterval()`

2. **Ongeza wahandaji wa matukio ya vitufe** kushughulikia urambazaji wa vitufe (sogeza shujaa juu/chini kushoto/kulia)

   *KUMBUKA* ni mfumo wa cartesian, juu-kushoto ni `0,0`. Pia kumbuka kuongeza msimbo wa kuzuia *tabia ya msingi*

   > **Kidokezo**: Unda kazi yako ya `onKeyDown` na uambatanishe kwenye dirisha:

   ```javascript
   const onKeyDown = function (e) {
     console.log(e.keyCode);
     // Add the code from the lesson above to stop default behavior
     switch (e.keyCode) {
       case 37:
       case 39:
       case 38:
       case 40: // Arrow keys
       case 32:
         e.preventDefault();
         break; // Space
       default:
         break; // do not block other keys
     }
   };

   window.addEventListener("keydown", onKeyDown);
   ```
    
   **Hii wahandaji wa matukio unavyofanya:**
   - **Husikiliza** matukio ya kubonyeza vitufe kwenye dirisha lote
   - **Hurekodi** namba ya kitufe ili kukusaidia kufuatilia vitufe vinavyobonyezwa
   - **Huzuia** tabia ya msingi ya kivinjari kwa vitufe vya mshale na spacebar
   - **Huruhusu** vitufe vingine kufanya kazi kawaida
   
   Angalia console ya kivinjari chako kwa wakati huu, na uone mibofyo ya vitufe ikirekodiwa. 

3. **Tekeleza** [Mfumo wa Pub sub](../README.md), hii itafanya msimbo wako kuwa safi unapofuata sehemu zinazobaki.

   Mfumo wa Chapisha-Jisajili husaidia kupanga msimbo wako kwa kutenganisha ugunduzi wa tukio na usimamizi wa tukio. Hii inafanya msimbo wako kuwa wa moduli zaidi na rahisi kudumisha.

   Ili kufanya sehemu hii ya mwisho, unaweza:

   1. **Ongeza msikilizaji wa tukio** kwenye dirisha:

       ```javascript
       window.addEventListener("keyup", (evt) => {
         if (evt.key === "ArrowUp") {
           eventEmitter.emit(Messages.KEY_EVENT_UP);
         } else if (evt.key === "ArrowDown") {
           eventEmitter.emit(Messages.KEY_EVENT_DOWN);
         } else if (evt.key === "ArrowLeft") {
           eventEmitter.emit(Messages.KEY_EVENT_LEFT);
         } else if (evt.key === "ArrowRight") {
           eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
         }
       });
       ```

   **Hii mfumo wa tukio unavyofanya:**
   - **Hugundua** pembejeo ya kibodi na kuibadilisha kuwa matukio maalum ya mchezo
   - **Hutenganisha** ugunduzi wa pembejeo na mantiki ya mchezo
   - **Hufanya** iwe rahisi kubadilisha udhibiti baadaye bila kuathiri msimbo wa mchezo
   - **Huruhusu** mifumo mingi kujibu pembejeo moja

   2. **Unda darasa la EventEmitter** kuchapisha na kujisajili kwa ujumbe:

       ```javascript
       class EventEmitter {
         constructor() {
           this.listeners = {};
         }
       
         on(message, listener) {
           if (!this.listeners[message]) {
             this.listeners[message] = [];
           }
           this.listeners[message].push(listener);
         }
       
   3. **Ongeza constants** na weka EventEmitter:

       ```javascript
       const Messages = {
         KEY_EVENT_UP: "KEY_EVENT_UP",
         KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
         KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
         KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
       };
       
       let heroImg, 
           enemyImg, 
           laserImg,
           canvas, ctx, 
           gameObjects = [], 
           hero, 
           eventEmitter = new EventEmitter();
       ```

   **Kuelewa usanidi:**
   - **Hufafanua** constants za ujumbe ili kuepuka makosa ya herufi na kufanya mabadiliko ya msimbo kuwa rahisi
   - **Hutangaza** vigezo vya picha, muktadha wa canvas, na hali ya mchezo
   - **Huunda** EventEmitter ya kimataifa kwa mfumo wa pub-sub
   - **Huanzisha** safu ya kushikilia vitu vyote vya mchezo

   4. **Anzisha mchezo**

       ```javascript
       function initGame() {
         gameObjects = [];
         createEnemies();
         createHero();
       
         eventEmitter.on(Messages.KEY_EVENT_UP, () => {
           hero.y -= 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
           hero.y += 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
           hero.x -= 5;
         });
       
4. **Sanidi mzunguko wa mchezo**

   Rekebisha kazi ya `window.onload` ili kuanzisha mchezo na kusanidi mzunguko wa mchezo kwa muda mzuri. Pia utaongeza boriti ya laser:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      const gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100);
    };
    ```

   **Kuelewa usanidi wa mchezo:**
   - **Husubiri** ukurasa kupakia kikamilifu kabla ya kuanza
   - **Hupata** kipengele cha canvas na muktadha wake wa uchoraji wa 2D
   - **Hupakia** mali zote za picha kwa njia isiyo ya moja kwa moja kwa kutumia `await`
   - **Huanza** mzunguko wa mchezo unaoendesha kwa vipindi vya milisekunde 100 (10 FPS)
   - **Hufuta** na kuchora tena skrini nzima kila fremu

5. **Ongeza msimbo** kusogeza maadui kwa muda fulani

    Rekebisha kazi ya `createEnemies()` ili kuunda maadui na kuwasukuma kwenye darasa jipya la gameObjects:

    ```javascript
    function createEnemies() {
      const MONSTER_TOTAL = 5;
      const MONSTER_WIDTH = MONSTER_TOTAL * 98;
      const START_X = (canvas.width - MONSTER_WIDTH) / 2;
      const STOP_X = START_X + MONSTER_WIDTH;
    
      for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          const enemy = new Enemy(x, y);
          enemy.img = enemyImg;
          gameObjects.push(enemy);
        }
      }
    }
    ```

    **Hii uundaji wa maadui unavyofanya:**
    - **Huhesabu** nafasi za kuweka maadui katikati ya skrini
- **Inaunda** gridi ya maadui kwa kutumia mikondo iliyopachikwa
- **Inapeana** picha ya adui kwa kila kitu cha adui
- **Inaongeza** kila adui kwenye safu ya vitu vya mchezo ya kimataifa

na ongeza kazi ya `createHero()` kufanya mchakato sawa kwa shujaa.

    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

**Kile uundaji wa shujaa unafanya:**
- **Inaweka** shujaa katikati ya chini ya skrini
- **Inapeana** picha ya shujaa kwa kitu cha shujaa
- **Inaongeza** shujaa kwenye safu ya vitu vya mchezo kwa ajili ya kuonyesha

na hatimaye, ongeza kazi ya `drawGameObjects()` kuanza kuchora:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

**Kuelewa kazi ya kuchora:**
- **Inapitia** vitu vyote vya mchezo kwenye safu
- **Inaita** njia ya `draw()` kwa kila kitu
- **Inapita** muktadha wa canvas ili vitu viweze kujionyesha

Maadui wako wanapaswa kuanza kusonga mbele kuelekea chombo cha anga cha shujaa wako!
}
}
    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```

na hatimaye, ongeza kazi ya `drawGameObjects()` kuanza kuchora:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

Maadui wako wanapaswa kuanza kusonga mbele kuelekea chombo cha anga cha shujaa wako!

---

## Changamoto ya Wakala wa GitHub Copilot 🚀

Hapa kuna changamoto itakayoboresha ubora wa mchezo wako: kuongeza mipaka na udhibiti laini. Kwa sasa, shujaa wako anaweza kuruka nje ya skrini, na harakati zinaweza kuhisi kuwa na ukakasi.

**Dhamira Yako:** Fanya chombo chako cha anga kihisi kuwa halisi zaidi kwa kutekeleza mipaka ya skrini na harakati laini. Hii ni sawa na jinsi mifumo ya udhibiti wa ndege ya NASA inavyopunguza chombo cha anga kisizidi vigezo salama vya operesheni.

**Hapa kuna unachopaswa kujenga:** Unda mfumo unaohakikisha chombo cha anga cha shujaa wako kinabaki kwenye skrini, na fanya udhibiti uhisi laini. Wakati wachezaji wanashikilia kitufe cha mshale, chombo kinapaswa kuteleza kwa mfululizo badala ya kusonga hatua kwa hatua. Fikiria kuongeza maoni ya kuona wakati chombo kinapofikia mipaka ya skrini – labda athari ndogo kuonyesha ukingo wa eneo la kucheza.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## 🚀 Changamoto

Mpangilio wa msimbo unakuwa muhimu zaidi kadri miradi inavyokua. Unaweza kuwa umeona faili yako ikijaa na kazi, vigezo, na madarasa vyote vikiwa vimechanganyika. Hii inanikumbusha jinsi wahandisi walivyopanga msimbo wa misheni ya Apollo kwa kuunda mifumo wazi na inayoweza kudumishwa ambayo timu nyingi zingeweza kufanya kazi nayo kwa wakati mmoja.

**Dhamira yako:**
Fikiria kama mbunifu wa programu. Je, ungepanga msimbo wako vipi ili miezi sita kutoka sasa, wewe (au mwenzako) uweze kuelewa kinachoendelea? Hata kama kila kitu kinabaki kwenye faili moja kwa sasa, unaweza kuunda mpangilio bora:

- **Kugroup kazi zinazohusiana** pamoja na vichwa vya maoni vilivyo wazi
- **Kutenganisha majukumu** - weka mantiki ya mchezo tofauti na uonyeshaji
- **Kutumia majina ya kawaida** kwa vigezo na kazi
- **Kuunda moduli** au namespaces ili kupanga vipengele tofauti vya mchezo wako
- **Kuongeza nyaraka** zinazoelezea madhumuni ya kila sehemu kuu

**Maswali ya kutafakari:**
- Ni sehemu gani za msimbo wako ni ngumu zaidi kuelewa unaporudi kuzitazama?
- Je, ungepanga msimbo wako vipi ili iwe rahisi kwa mtu mwingine kuchangia?
- Nini kingetokea ikiwa ungependa kuongeza vipengele vipya kama nguvu za ziada au aina tofauti za maadui?

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/34)

## Mapitio na Kujisomea

Tumekuwa tukijenga kila kitu kutoka mwanzo, ambayo ni nzuri kwa kujifunza, lakini hapa kuna siri kidogo – kuna mifumo ya ajabu ya JavaScript huko nje ambayo inaweza kushughulikia kazi nyingi za msingi kwa ajili yako. Mara tu unapohisi kuwa na ujasiri na misingi tuliyojadili, inafaa [kuchunguza kinachopatikana](https://github.com/collections/javascript-game-engines).

Fikiria mifumo kama kuwa na kisanduku cha zana kilichojaa badala ya kutengeneza kila zana kwa mkono. Inaweza kutatua changamoto nyingi za mpangilio wa msimbo tulizozungumzia, pamoja na kutoa vipengele ambavyo vingechukua wiki kujenga mwenyewe.

**Mambo ya kuchunguza:**
- Jinsi injini za mchezo zinavyopanga msimbo – utashangazwa na mifumo ya busara wanayotumia
- Mbinu za utendaji kwa kufanya michezo ya canvas iende laini kama siagi  
- Vipengele vya kisasa vya JavaScript vinavyoweza kufanya msimbo wako kuwa safi zaidi na rahisi kudumisha
- Njia tofauti za kusimamia vitu vya mchezo na uhusiano wao

## Kazi

[Toa maoni kwenye msimbo wako](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.