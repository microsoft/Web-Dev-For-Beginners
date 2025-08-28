<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-27T22:26:12+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, dio 3: Dodavanje kretanja

## Kviz prije predavanja

[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/33)

Igre nisu baš zabavne dok nemate vanzemaljce koji se kreću po ekranu! U ovoj igri koristit ćemo dvije vrste kretanja:

- **Kretanje pomoću tipkovnice/miša**: kada korisnik koristi tipkovnicu ili miš za pomicanje objekta na ekranu.
- **Kretanje uzrokovano igrom**: kada igra pomiče objekt u određenim vremenskim intervalima.

Kako pomičemo stvari na ekranu? Sve se svodi na kartezijanske koordinate: mijenjamo lokaciju (x, y) objekta i zatim ponovno crtamo ekran.

Obično su potrebni sljedeći koraci za ostvarivanje *kretanja* na ekranu:

1. **Postavite novu lokaciju** za objekt; to je potrebno kako bi se objekt doživio kao da se pomaknuo.
2. **Očistite ekran**, ekran treba očistiti između crtanja. To možemo učiniti crtanjem pravokutnika koji ispunimo bojom pozadine.
3. **Ponovno nacrtajte objekt** na novoj lokaciji. Time konačno ostvarujemo pomicanje objekta s jedne lokacije na drugu.

Evo kako to može izgledati u kodu:

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

✅ Možete li smisliti razlog zašto ponovno crtanje vašeg heroja mnogo puta u sekundi može uzrokovati troškove performansi? Pročitajte o [alternativama ovom obrascu](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Rukovanje događajima tipkovnice

Događajima upravljate povezivanjem specifičnih događaja s kodom. Događaji tipkovnice aktiviraju se na cijelom prozoru, dok se događaji miša poput `click` mogu povezati s klikom na određeni element. Koristit ćemo događaje tipkovnice tijekom ovog projekta.

Za rukovanje događajem trebate koristiti metodu `addEventListener()` prozora i pružiti joj dva ulazna parametra. Prvi parametar je naziv događaja, na primjer `keyup`. Drugi parametar je funkcija koja bi se trebala pozvati kao rezultat događaja.

Evo primjera:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Za događaje tipki postoje dva svojstva na događaju koja možete koristiti za provjeru koja je tipka pritisnuta:

- `key`, ovo je tekstualni prikaz pritisnute tipke, na primjer `ArrowUp`.
- `keyCode`, ovo je brojčani prikaz, na primjer `37`, odgovara `ArrowLeft`.

✅ Manipulacija događajima tipki korisna je i izvan razvoja igara. Koje druge primjene možete zamisliti za ovu tehniku?

### Posebne tipke: upozorenje

Postoje neke *posebne* tipke koje utječu na prozor. To znači da ako slušate događaj `keyup` i koristite te posebne tipke za pomicanje heroja, također će se dogoditi horizontalno pomicanje. Zbog toga ćete možda htjeti *isključiti* ovo ugrađeno ponašanje preglednika dok gradite svoju igru. Trebate kod poput ovog:

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

Gornji kod osigurava da tipke sa strelicama i razmaknica imaju svoje *zadano* ponašanje isključeno. Mehanizam *isključivanja* događa se kada pozovemo `e.preventDefault()`.

## Kretanje uzrokovano igrom

Možemo učiniti da se stvari same kreću pomoću timera poput funkcija `setTimeout()` ili `setInterval()` koje ažuriraju lokaciju objekta na svakom taktu ili vremenskom intervalu. Evo kako to može izgledati:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Petlja igre

Petlja igre je koncept koji se u osnovi odnosi na funkciju koja se poziva u redovitim intervalima. Zove se petlja igre jer se sve što bi trebalo biti vidljivo korisniku crta unutar petlje. Petlja igre koristi sve objekte igre koji su dio igre, crtajući ih sve osim ako iz nekog razloga više ne bi trebali biti dio igre. Na primjer, ako je objekt neprijatelj kojeg je pogodio laser i eksplodirao, više nije dio trenutne petlje igre (o tome ćete više naučiti u sljedećim lekcijama).

Evo kako petlja igre obično izgleda, izražena u kodu:

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

Gornja petlja se poziva svakih `200` milisekundi za ponovno crtanje platna. Imate mogućnost odabrati najbolji interval koji ima smisla za vašu igru.

## Nastavak svemirske igre

Uzet ćete postojeći kod i proširiti ga. Možete započeti s kodom koji ste dovršili tijekom prvog dijela ili koristiti kod iz [Dio II - početni](../../../../6-space-game/3-moving-elements-around/your-work).

- **Pomicanje heroja**: dodati ćete kod kako biste omogućili pomicanje heroja pomoću tipki sa strelicama.
- **Pomicanje neprijatelja**: također ćete trebati dodati kod kako biste osigurali da se neprijatelji pomiču od vrha prema dnu određenom brzinom.

## Preporučeni koraci

Pronađite datoteke koje su stvorene za vas u podmapi `your-work`. Trebale bi sadržavati sljedeće:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Započnite svoj projekt u mapi `your_work` upisivanjem:

```bash
cd your-work
npm start
```

Gornji kod će pokrenuti HTTP poslužitelj na adresi `http://localhost:5000`. Otvorite preglednik i unesite tu adresu, trenutno bi trebao prikazati heroja i sve neprijatelje; ništa se još ne kreće!

### Dodajte kod

1. **Dodajte posvećene objekte** za `heroja`, `neprijatelja` i `objekt igre`, oni bi trebali imati svojstva `x` i `y`. (Sjetite se dijela o [Nasljeđivanju ili kompoziciji](../README.md)).

   *SAVJET* `objekt igre` trebao bi biti onaj s `x` i `y` te sposobnošću da se nacrta na platnu.

   >savjet: započnite dodavanjem nove klase GameObject s konstruktorom definiranim kao dolje, a zatim ga nacrtajte na platnu:
  
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

    Sada proširite ovaj GameObject kako biste stvorili Heroja i Neprijatelja.
    
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

2. **Dodajte rukovatelje događajima tipki** za upravljanje navigacijom tipki (pomicanje heroja gore/dolje lijevo/desno).

   *ZAPAMTITE* to je kartezijanski sustav, gornji lijevi kut je `0,0`. Također zapamtite da dodate kod za zaustavljanje *zadanog ponašanja*.

   >savjet: kreirajte svoju funkciju onKeyDown i povežite je s prozorom:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Provjerite konzolu preglednika u ovom trenutku i pratite pritiske tipki.

3. **Implementirajte** [Pub sub obrazac](../README.md), ovo će održati vaš kod čistim dok pratite preostale dijelove.

   Da biste dovršili ovaj zadnji dio, možete:

   1. **Dodajte slušatelja događaja** na prozor:

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

    1. **Kreirajte klasu EventEmitter** za objavljivanje i pretplatu na poruke:

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

    1. **Dodajte konstante** i postavite EventEmitter:

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

    1. **Inicijalizirajte igru**

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

1. **Postavite petlju igre**

   Refaktorirajte funkciju window.onload kako biste inicijalizirali igru i postavili petlju igre na dobar interval. Također ćete dodati laserski zrak:

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

5. **Dodajte kod** za pomicanje neprijatelja u određenim intervalima

    Refaktorirajte funkciju `createEnemies()` kako biste stvorili neprijatelje i dodali ih u novu klasu gameObjects:

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
    
    i dodajte funkciju `createHero()` za sličan proces za heroja.
    
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

    i na kraju, dodajte funkciju `drawGameObjects()` za početak crtanja:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Vaši neprijatelji bi trebali početi napredovati prema vašem svemirskom brodu heroja!

---

## 🚀 Izazov

Kao što možete vidjeti, vaš kod može postati 'spaghetti kod' kada počnete dodavati funkcije, varijable i klase. Kako možete bolje organizirati svoj kod kako bi bio čitljiviji? Osmislite sustav za organizaciju koda, čak i ako još uvijek ostaje u jednoj datoteci.

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/34)

## Pregled i samostalno učenje

Iako pišemo svoju igru bez korištenja okvira, postoji mnogo okvira za razvoj igara temeljenih na JavaScriptu za rad s platnom. Odvojite vrijeme za [čitanje o njima](https://github.com/collections/javascript-game-engines).

## Zadatak

[Komentirajte svoj kod](assignment.md)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.