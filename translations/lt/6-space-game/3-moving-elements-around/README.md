<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-28T11:32:26+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "lt"
}
-->
# Sukurkite Kosmoso Žaidimą 3 dalis: Judesio pridėjimas

## Prieš paskaitą testas

[Prieš paskaitą testas](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

Žaidimai nėra labai smagūs, kol ekrane nesimato judančių ateivių! Šiame žaidime naudosime dviejų tipų judesius:

- **Klaviatūros/pelės judesys**: kai vartotojas sąveikauja su klaviatūra ar pele, kad perkelti objektą ekrane.
- **Žaidimo sukeltas judesys**: kai žaidimas perkelia objektą tam tikru laiko intervalu.

Taigi, kaip mes judiname objektus ekrane? Viskas remiasi į Dekarto koordinates: keičiame objekto vietą (x, y) ir tada perpiešiame ekraną.

Paprastai reikia atlikti šiuos veiksmus, kad pasiektumėte *judesį* ekrane:

1. **Nustatyti naują vietą** objektui; tai būtina, kad objektas atrodytų kaip pajudėjęs.
2. **Išvalyti ekraną**, ekranas turi būti išvalytas tarp piešimų. Galime jį išvalyti nupiešdami stačiakampį su fono spalva.
3. **Perpiešti objektą** naujoje vietoje. Tai atlikę galiausiai pasiekiame objekto perkėlimą iš vienos vietos į kitą.

Štai kaip tai gali atrodyti kode:

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

✅ Ar galite sugalvoti priežastį, kodėl herojaus perpiešimas daug kartų per sekundę gali sukelti našumo problemų? Perskaitykite apie [alternatyvas šiam modeliui](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Klaviatūros įvykių valdymas

Įvykius valdote priskirdami konkrečius įvykius kodui. Klaviatūros įvykiai suaktyvinami visame lange, o pelės įvykiai, tokie kaip `click`, gali būti susieti su konkretaus elemento paspaudimu. Šiame projekte naudosime klaviatūros įvykius.

Norėdami valdyti įvykį, turite naudoti lango metodą `addEventListener()` ir pateikti jam du įvesties parametrus. Pirmasis parametras yra įvykio pavadinimas, pavyzdžiui, `keyup`. Antrasis parametras yra funkcija, kuri turėtų būti iškviečiama įvykio metu.

Štai pavyzdys:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Klavišų įvykiams yra dvi savybės, kurias galite naudoti norėdami pamatyti, kuris klavišas buvo paspaustas:

- `key`, tai yra paspausto klavišo simbolinė reprezentacija, pavyzdžiui, `ArrowUp`
- `keyCode`, tai yra skaitinė reprezentacija, pavyzdžiui, `37`, atitinkanti `ArrowLeft`.

✅ Klavišų įvykių valdymas yra naudingas ne tik žaidimų kūrime. Kokius kitus šios technikos panaudojimo būdus galite sugalvoti?

### Specialūs klavišai: įspėjimas

Yra keletas *specialių* klavišų, kurie veikia langą. Tai reiškia, kad jei klausotės `keyup` įvykio ir naudojate šiuos specialius klavišus, kad perkeltumėte savo herojų, jie taip pat atliks horizontalų slinkimą. Dėl šios priežasties, kurdami savo žaidimą, galbūt norėsite *išjungti* šį įmontuotą naršyklės elgesį. Tam reikia tokio kodo:

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

Aukščiau pateiktas kodas užtikrins, kad rodyklių klavišai ir tarpo klavišas turės *numatytąjį* elgesį išjungtą. *Išjungimo* mechanizmas įvyksta, kai iškviečiame `e.preventDefault()`.

## Žaidimo sukeltas judesys

Galime priversti objektus judėti patys naudodami laikmačius, tokius kaip `setTimeout()` arba `setInterval()`, kurie atnaujina objekto vietą kiekviename intervale. Štai kaip tai gali atrodyti:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Žaidimo ciklas

Žaidimo ciklas yra koncepcija, kuri iš esmės yra funkcija, iškviečiama reguliariais intervalais. Jis vadinamas žaidimo ciklu, nes viskas, kas turėtų būti matoma vartotojui, yra piešiama cikle. Žaidimo ciklas naudoja visus žaidimo objektus, kurie yra žaidimo dalis, piešdamas juos visus, nebent dėl kokios nors priežasties jie nebėra žaidimo dalis. Pavyzdžiui, jei objektas yra priešas, kurį pataikė lazeris ir jis susprogo, jis nebėra dabartinio žaidimo ciklo dalis (apie tai sužinosite daugiau vėlesnėse pamokose).

Štai kaip žaidimo ciklas paprastai atrodo, išreikštas kode:

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

Aukščiau pateiktas ciklas iškviečiamas kas `200` milisekundžių, kad perpieštų drobę. Galite pasirinkti geriausią intervalą, kuris tinka jūsų žaidimui.

## Tęsiame Kosmoso Žaidimą

Jūs paimsite esamą kodą ir jį išplėsite. Galite pradėti nuo kodo, kurį užbaigėte pirmoje dalyje, arba naudoti kodą iš [II dalies pradžios](../../../../6-space-game/3-moving-elements-around/your-work).

- **Herojaus judėjimas**: pridėsite kodą, kad galėtumėte judinti herojų naudodami rodyklių klavišus.
- **Priešų judėjimas**: taip pat reikės pridėti kodą, kad priešai judėtų iš viršaus į apačią tam tikru greičiu.

## Rekomenduojami žingsniai

Raskite failus, kurie buvo sukurti jums aplanke `your-work`. Jame turėtų būti:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Pradėkite savo projektą aplanke `your_work`, įvesdami:

```bash
cd your-work
npm start
```

Aukščiau pateiktas veiksmas paleis HTTP serverį adresu `http://localhost:5000`. Atidarykite naršyklę ir įveskite šį adresą, šiuo metu turėtų būti matomas herojus ir visi priešai; dar niekas nejuda!

### Pridėkite kodą

1. **Pridėkite specialius objektus** `hero`, `enemy` ir `game object`, jie turėtų turėti `x` ir `y` savybes. (Prisiminkite skyrių apie [Paveldėjimą arba kompoziciją](../README.md)).

   *PATARIMAS* `game object` turėtų būti tas, kuris turi `x` ir `y` bei galimybę piešti save ant drobės.

   >patarimas: pradėkite pridėdami naują GameObject klasę su jos konstruktoriaus apibrėžimu, kaip parodyta žemiau, ir tada nupieškite ją ant drobės:
  
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

    Dabar išplėskite šį GameObject, kad sukurtumėte Hero ir Enemy.
    
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

2. **Pridėkite klavišų įvykių valdiklius**, kad valdytumėte herojaus judėjimą aukštyn/žemyn kairėn/dešinėn.

   *ATMINKITE*, kad tai yra Dekarto sistema, viršutinis kairysis kampas yra `0,0`. Taip pat nepamirškite pridėti kodo, kad sustabdytumėte *numatytąjį elgesį*.

   >patarimas: sukurkite savo onKeyDown funkciją ir priskirkite ją langui:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Šiuo metu patikrinkite savo naršyklės konsolę ir stebėkite, kaip registruojami klavišų paspaudimai.

3. **Įgyvendinkite** [Pub sub modelį](../README.md), tai padės išlaikyti jūsų kodą švarų, kai tęsite likusias dalis.

   Norėdami atlikti šią paskutinę dalį, galite:

   1. **Pridėti įvykio klausiklį** prie lango:

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

    1. **Sukurti EventEmitter klasę**, kad galėtumėte skelbti ir prenumeruoti pranešimus:

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

    1. **Pridėti konstantas** ir nustatyti EventEmitter:

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

    1. **Inicijuoti žaidimą**

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

1. **Nustatyti žaidimo ciklą**

   Refaktoruokite window.onload funkciją, kad inicijuotumėte žaidimą ir nustatytumėte žaidimo ciklą tinkamu intervalu. Taip pat pridėsite lazerio spindulį:

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

5. **Pridėkite kodą**, kad priešai judėtų tam tikru intervalu.

    Refaktoruokite `createEnemies()` funkciją, kad sukurtumėte priešus ir įtrauktumėte juos į naują gameObjects klasę:

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
    
    ir pridėkite `createHero()` funkciją, kad atliktumėte panašų procesą herojui.
    
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

    ir galiausiai pridėkite `drawGameObjects()` funkciją, kad pradėtumėte piešimą:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Jūsų priešai turėtų pradėti artėti prie jūsų herojaus erdvėlaivio!

---

## 🚀 Iššūkis

Kaip matote, jūsų kodas gali tapti „spagečių kodu“, kai pradedate pridėti funkcijas, kintamuosius ir klases. Kaip galite geriau organizuoti savo kodą, kad jis būtų lengviau skaitomas? Nubraižykite sistemą, kaip organizuoti savo kodą, net jei jis vis dar yra viename faile.

## Po paskaitos testas

[Po paskaitos testas](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Peržiūra ir savarankiškas mokymasis

Nors mes rašome savo žaidimą nenaudodami karkasų, yra daug JavaScript pagrindu sukurtų drobės karkasų žaidimų kūrimui. Skirkite laiko [skaitymui apie juos](https://github.com/collections/javascript-game-engines).

## Užduotis

[Pakomentuokite savo kodą](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius dėl šio vertimo naudojimo.