<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a9a161871de7706cb0e23b1bd0c74559",
  "translation_date": "2025-08-29T10:04:51+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 3: Kuongeza Mwendo

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/33)

Michezo huwa si ya kufurahisha sana hadi pale unapokuwa na viumbe wa kigeni wakizunguka kwenye skrini! Katika mchezo huu, tutatumia aina mbili za mwendo:

- **Mwendo wa Kibodi/Panya**: pale mtumiaji anaposhirikiana na kibodi au panya kuhamisha kitu kwenye skrini.
- **Mwendo unaosababishwa na mchezo**: pale mchezo unapohamisha kitu kwa muda fulani.

Kwa hiyo, tunahamasishaje vitu kwenye skrini? Yote yanahusu kuratibu za cartesian: tunabadilisha eneo (x,y) la kitu na kisha kuchora upya skrini.

Kwa kawaida unahitaji hatua zifuatazo kufanikisha *mwendo* kwenye skrini:

1. **Weka eneo jipya** kwa kitu; hii inahitajika ili mtumiaji aone kitu kimehamishwa.
2. **Futa skrini**, skrini inahitaji kufutwa kati ya michoro. Tunaweza kuifuta kwa kuchora mstatili ambao tunaujaza na rangi ya mandharinyuma.
3. **Chora upya kitu** kwenye eneo jipya. Kwa kufanya hivi tunafanikisha kuhamisha kitu kutoka eneo moja hadi jingine.

Hivi ndivyo inavyoweza kuonekana kwenye msimbo:

```javascript
//set the hero's location
hero.x += 5;
// clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

✅ Je, unaweza kufikiria sababu kwa nini kuchora tena shujaa wako mara nyingi kwa sekunde kunaweza kusababisha gharama za utendaji? Soma kuhusu [mbadala wa muundo huu](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Kushughulikia matukio ya kibodi

Unashughulikia matukio kwa kuambatanisha matukio maalum na msimbo. Matukio ya kibodi yanachochewa kwenye dirisha zima, ilhali matukio ya panya kama `click` yanaweza kuunganishwa na kubonyeza kipengele maalum. Tutatumia matukio ya kibodi katika mradi huu.

Ili kushughulikia tukio, unahitaji kutumia mbinu ya dirisha `addEventListener()` na kuipatia vigezo viwili vya pembejeo. Kigezo cha kwanza ni jina la tukio, kwa mfano `keyup`. Kigezo cha pili ni kazi ambayo inapaswa kuitwa kama matokeo ya tukio kutokea.

Hii ni mfano:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Kwa matukio ya funguo kuna mali mbili kwenye tukio unazoweza kutumia kuona ni funguo gani ilibonyezwa:

- `key`, hii ni mwakilishi wa maandishi wa funguo iliyobonyezwa, kwa mfano `ArrowUp`
- `keyCode`, hii ni mwakilishi wa nambari, kwa mfano `37`, inahusiana na `ArrowLeft`.

✅ Udhibiti wa matukio ya funguo ni muhimu nje ya ukuzaji wa michezo. Ni matumizi gani mengine unayoweza kufikiria kwa mbinu hii?

### Funguo maalum: tahadhari

Kuna funguo *maalum* ambazo huathiri dirisha. Hii inamaanisha kwamba ikiwa unasikiliza tukio la `keyup` na unatumia funguo hizi maalum kuhamisha shujaa wako, pia itafanya skrini kusogea kwa usawa. Kwa sababu hiyo, unaweza kutaka *kuzima* tabia hii ya kujengwa ya kivinjari unapojenga mchezo wako. Unahitaji msimbo kama huu:

```javascript
let onKeyDown = function (e) {
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

Msimbo hapo juu utahakikisha kwamba funguo za mishale na funguo ya nafasi zimezimwa tabia yao ya *kawaida*. Utaratibu wa *kuzima* hutokea tunapopiga `e.preventDefault()`.

## Mwendo unaosababishwa na mchezo

Tunaweza kufanya vitu viweze kusogea vyenyewe kwa kutumia vipima muda kama `setTimeout()` au `setInterval()` ambavyo husasisha eneo la kitu kwa kila muda uliowekwa. Hivi ndivyo inavyoweza kuonekana:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Mzunguko wa mchezo

Mzunguko wa mchezo ni dhana ambayo kimsingi ni kazi inayochochewa kwa vipindi vya kawaida. Inaitwa mzunguko wa mchezo kwa sababu kila kitu kinachopaswa kuonekana kwa mtumiaji kinachorwa ndani ya mzunguko. Mzunguko wa mchezo hutumia vitu vyote vya mchezo ambavyo ni sehemu ya mchezo, kuchora vyote isipokuwa kwa sababu fulani havipaswi kuwa sehemu ya mchezo tena. Kwa mfano, ikiwa kitu ni adui aliyepigwa na boriti ya laser na kulipuka, hakitakuwa tena sehemu ya mzunguko wa mchezo wa sasa (utajifunza zaidi kuhusu hili katika masomo yanayofuata).

Hivi ndivyo mzunguko wa mchezo unavyoweza kuonekana, ukionyeshwa kwa msimbo:

```javascript
let gameLoopId = setInterval(() =>
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
}, 200);
```

Mzunguko hapo juu unachochewa kila `200` milisekunde kuchora tena canvas. Una uwezo wa kuchagua muda bora unaofaa kwa mchezo wako.

## Kuendelea na Mchezo wa Anga

Utachukua msimbo uliopo na kuupanua. Ama anza na msimbo uliokamilisha wakati wa sehemu ya I au tumia msimbo katika [Sehemu ya II - mwanzo](../../../../6-space-game/3-moving-elements-around/your-work).

- **Kuhamisha shujaa**: utaongeza msimbo kuhakikisha unaweza kuhamisha shujaa kwa kutumia funguo za mishale.
- **Kuhamisha maadui**: pia utahitaji kuongeza msimbo kuhakikisha maadui wanahama kutoka juu kwenda chini kwa kasi fulani.

## Hatua Zinazopendekezwa

Tafuta faili ambazo zimeundwa kwa ajili yako katika folda ndogo ya `your-work`. Inapaswa kuwa na yafuatayo:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Anzisha mradi wako katika folda ya `your_work` kwa kuandika:

```bash
cd your-work
npm start
```

Hii itaanzisha Seva ya HTTP kwenye anwani `http://localhost:5000`. Fungua kivinjari na ingiza anwani hiyo, kwa sasa inapaswa kuonyesha shujaa na maadui wote; hakuna kinachosogea - bado!

### Ongeza msimbo

1. **Ongeza vitu maalum** kwa `hero` na `enemy` na `game object`, vinapaswa kuwa na mali za `x` na `y`. (Kumbuka sehemu kuhusu [Urithi au muundo](../README.md)).

   *KIDOKEZO* `game object` kinapaswa kuwa na mali za `x` na `y` na uwezo wa kujichora kwenye canvas.

   >kidokezo: anza kwa kuongeza darasa jipya la GameObject na uweke constructor kama ilivyo hapa chini, kisha ichore kwenye canvas:
  
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

    Sasa, panua GameObject hii kuunda Hero na Enemy.
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        ...it needs an x, y, type, and speed
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        (this.width = 98), (this.height = 50);
        this.type = "Enemy";
        let id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y)
            clearInterval(id);
          }
        }, 300)
      }
    }
    ```

2. **Ongeza wahandaji wa matukio ya funguo** kushughulikia urambazaji wa funguo (hamisha shujaa juu/chini kushoto/kulia)

   *KUMBUKA* ni mfumo wa cartesian, kona ya juu-kushoto ni `0,0`. Pia kumbuka kuongeza msimbo wa kusimamisha *tabia ya kawaida*

   >kidokezo: unda kazi yako ya onKeyDown na uambatanishe kwenye dirisha:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Angalia koni ya kivinjari chako kwa wakati huu, na uangalie funguo zinazobonyezwa.

3. **Tekeleza** [Mfumo wa Pub sub](../README.md), hii itahakikisha msimbo wako unakuwa safi unapofuata sehemu zinazobaki.

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

    1. **Unda darasa la EventEmitter** kuchapisha na kujiunga na ujumbe:

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
        
          emit(message, payload = null) {
            if (this.listeners[message]) {
              this.listeners[message].forEach((l) => l(message, payload));
            }
          }
        }
        ```

    1. **Ongeza constants** na uweke EventEmitter:

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

    1. **Anzisha mchezo**

    ```javascript
    function initGame() {
      gameObjects = [];
      createEnemies();
      createHero();
    
      eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y -=5 ;
      })
    
      eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y += 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x -= 5;
      });
    
      eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x += 5;
      });
    }
    ```

1. **Sanidi mzunguko wa mchezo**

   Rekebisha kazi ya window.onload ili kuanzisha mchezo na kusanidi mzunguko wa mchezo kwa muda mzuri. Pia utaongeza boriti ya laser:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      let gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100)
      
    };
    ```

5. **Ongeza msimbo** wa kuhamisha maadui kwa muda fulani

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

    na hatimaye, ongeza kazi ya `drawGameObjects()` kuanza kuchora:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Maadui wako wanapaswa kuanza kusonga kuelekea kwenye chombo cha anga cha shujaa wako!

---

## 🚀 Changamoto

Kama unavyoona, msimbo wako unaweza kuwa 'msimbo wa tambi' unapoongeza kazi, vigezo, na madarasa. Unawezaje kupanga msimbo wako vizuri ili uweze kusomeka zaidi? Chora mfumo wa kupanga msimbo wako, hata kama bado uko kwenye faili moja.

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/34)

## Mapitio na Kujisomea

Ingawa tunaandika mchezo wetu bila kutumia fremu, kuna fremu nyingi za canvas zinazotegemea JavaScript kwa ukuzaji wa michezo. Chukua muda kufanya [usomaji kuhusu hizi](https://github.com/collections/javascript-game-engines).

## Kazi

[Toa maoni kwenye msimbo wako](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia huduma ya tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.