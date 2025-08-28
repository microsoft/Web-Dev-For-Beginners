<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "23f088add24f0f1fa51014a9e27ea280",
  "translation_date": "2025-08-28T07:53:25+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 3: Adăugarea Mișcării

## Chestionar Pre-Lecție

[Chestionar pre-lecție](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/33)

Jocurile nu sunt prea distractive până când nu ai extratereștri care se mișcă pe ecran! În acest joc, vom folosi două tipuri de mișcări:

- **Mișcare prin tastatură/mouse**: când utilizatorul interacționează cu tastatura sau mouse-ul pentru a muta un obiect pe ecran.
- **Mișcare indusă de joc**: când jocul mută un obiect la un anumit interval de timp.

Deci, cum mutăm lucrurile pe un ecran? Totul se rezumă la coordonatele carteziene: schimbăm locația (x, y) a obiectului și apoi redesenăm ecranul.

De obicei, ai nevoie de următorii pași pentru a realiza *mișcarea* pe un ecran:

1. **Setează o locație nouă** pentru un obiect; acest lucru este necesar pentru a percepe obiectul ca fiind mutat.
2. **Curăță ecranul**, ecranul trebuie curățat între desene. Putem face acest lucru desenând un dreptunghi pe care îl umplem cu o culoare de fundal.
3. **Redesenează obiectul** la noua locație. Procedând astfel, reușim în cele din urmă să mutăm obiectul dintr-o locație în alta.

Iată cum poate arăta acest lucru în cod:

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

✅ Poți să te gândești la un motiv pentru care redesenarea eroului de mai multe cadre pe secundă ar putea genera costuri de performanță? Citește despre [alternative la acest model](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Gestionarea evenimentelor de tastatură

Gestionezi evenimentele atașând evenimente specifice la cod. Evenimentele de tastatură sunt declanșate pe întreaga fereastră, în timp ce evenimentele de mouse, cum ar fi un `click`, pot fi conectate la clicul pe un element specific. Vom folosi evenimente de tastatură pe tot parcursul acestui proiect.

Pentru a gestiona un eveniment, trebuie să folosești metoda `addEventListener()` a ferestrei și să îi oferi doi parametri de intrare. Primul parametru este numele evenimentului, de exemplu `keyup`. Al doilea parametru este funcția care ar trebui să fie invocată ca rezultat al producerii evenimentului.

Iată un exemplu:

```javascript
window.addEventListener('keyup', (evt) => {
  // `evt.key` = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
})
```

Pentru evenimentele de tastatură, există două proprietăți pe eveniment pe care le poți folosi pentru a vedea ce tastă a fost apăsată:

- `key`, aceasta este o reprezentare sub formă de șir a tastei apăsate, de exemplu `ArrowUp`
- `keyCode`, aceasta este o reprezentare numerică, de exemplu `37`, corespunde cu `ArrowLeft`.

✅ Manipularea evenimentelor de tastatură este utilă și în afara dezvoltării de jocuri. La ce alte utilizări te poți gândi pentru această tehnică?

### Taste speciale: un avertisment

Există unele taste *speciale* care afectează fereastra. Asta înseamnă că, dacă asculți un eveniment `keyup` și folosești aceste taste speciale pentru a muta eroul, se va efectua și o derulare orizontală. Din acest motiv, s-ar putea să vrei să *dezactivezi* acest comportament implicit al browserului pe măsură ce îți dezvolți jocul. Ai nevoie de un cod ca acesta:

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

Codul de mai sus va asigura că tastele săgeți și tasta spațiu au comportamentul *implicit* dezactivat. Mecanismul de *dezactivare* are loc atunci când apelăm `e.preventDefault()`.

## Mișcare indusă de joc

Putem face lucrurile să se miște singure folosind temporizatoare precum funcțiile `setTimeout()` sau `setInterval()` care actualizează locația obiectului la fiecare tic, sau interval de timp. Iată cum poate arăta acest lucru:

```javascript
let id = setInterval(() => {
  //move the enemy on the y axis
  enemy.y += 10;
})
```

## Bucla jocului

Bucla jocului este un concept care reprezintă, în esență, o funcție care este invocată la intervale regulate. Se numește bucla jocului deoarece tot ceea ce ar trebui să fie vizibil pentru utilizator este desenat în cadrul buclei. Bucla jocului folosește toate obiectele de joc care fac parte din joc, desenându-le pe toate, cu excepția cazului în care, dintr-un motiv anume, nu mai fac parte din joc. De exemplu, dacă un obiect este un inamic care a fost lovit de un laser și explodează, nu mai face parte din bucla curentă a jocului (vei învăța mai multe despre acest lucru în lecțiile următoare).

Iată cum poate arăta o buclă de joc, exprimată în cod:

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

Bucla de mai sus este invocată la fiecare `200` de milisecunde pentru a redesena canvas-ul. Ai posibilitatea să alegi cel mai bun interval care are sens pentru jocul tău.

## Continuarea Jocului Spațial

Vei lua codul existent și îl vei extinde. Poți începe fie cu codul pe care l-ai finalizat în partea I, fie să folosești codul din [Partea II - starter](../../../../6-space-game/3-moving-elements-around/your-work).

- **Mutarea eroului**: vei adăuga cod pentru a te asigura că poți muta eroul folosind tastele săgeți.
- **Mutarea inamicilor**: va trebui, de asemenea, să adaugi cod pentru a te asigura că inamicii se mișcă de sus în jos la un anumit ritm.

## Pași recomandați

Găsește fișierele care au fost create pentru tine în subfolderul `your-work`. Ar trebui să conțină următoarele:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Îți începi proiectul în folderul `your_work` tastând:

```bash
cd your-work
npm start
```

Comanda de mai sus va porni un server HTTP la adresa `http://localhost:5000`. Deschide un browser și introdu acea adresă; în acest moment ar trebui să afișeze eroul și toți inamicii; nimic nu se mișcă - încă!

### Adaugă cod

1. **Adaugă obiecte dedicate** pentru `hero`, `enemy` și `game object`, acestea ar trebui să aibă proprietăți `x` și `y`. (Amintește-ți secțiunea despre [Moștenire sau compoziție](../README.md)).

   *INDICIU* `game object` ar trebui să fie cel care are `x` și `y` și abilitatea de a se desena pe un canvas.

   >sfat: începe prin a adăuga o nouă clasă GameObject cu constructorul său definit astfel, și apoi desenează-l pe canvas:
  
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

    Acum, extinde acest GameObject pentru a crea Hero și Enemy.
    
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

2. **Adaugă gestionari de evenimente pentru taste** pentru a gestiona navigarea cu tastele (mută eroul sus/jos/stânga/dreapta).

   *AMINTEȘTE-ȚI* că este un sistem cartezian, colțul din stânga sus este `0,0`. De asemenea, amintește-ți să adaugi cod pentru a opri *comportamentul implicit*.

   >sfat: creează funcția ta onKeyDown și atașeaz-o la fereastră:

   ```javascript
    let onKeyDown = function (e) {
	      console.log(e.keyCode);
	        ...add the code from the lesson above to stop default behavior
	      }
    };

    window.addEventListener("keydown", onKeyDown);
   ```
    
   Verifică consola browserului în acest moment și urmărește tastele apăsate care sunt înregistrate.

3. **Implementează** [Modelul Pub-Sub](../README.md), acesta va menține codul tău curat pe măsură ce urmezi părțile rămase.

   Pentru a face această ultimă parte, poți:

   1. **Adaugă un ascultător de evenimente** pe fereastră:

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

    1. **Creează o clasă EventEmitter** pentru a publica și a te abona la mesaje:

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

    1. **Adaugă constante** și configurează EventEmitter:

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

    1. **Inițializează jocul**

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

1. **Configurează bucla jocului**

   Refactorizează funcția window.onload pentru a inițializa jocul și a configura o buclă de joc la un interval potrivit. Vei adăuga și o rază laser:

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

5. **Adaugă cod** pentru a muta inamicii la un anumit interval.

    Refactorizează funcția `createEnemies()` pentru a crea inamicii și a-i adăuga în noua clasă gameObjects:

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
    
    și adaugă o funcție `createHero()` pentru a face un proces similar pentru erou.
    
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

    și, în final, adaugă o funcție `drawGameObjects()` pentru a începe desenarea:

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```

    Inamicii tăi ar trebui să înceapă să avanseze spre nava ta spațială!

---

## 🚀 Provocare

După cum poți vedea, codul tău poate deveni un "cod spaghetti" atunci când începi să adaugi funcții, variabile și clase. Cum poți organiza mai bine codul astfel încât să fie mai ușor de citit? Schițează un sistem pentru a-ți organiza codul, chiar dacă acesta rămâne într-un singur fișier.

## Chestionar Post-Lecție

[Chestionar post-lecție](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/34)

## Recapitulare și Studiu Individual

Deși scriem jocul nostru fără a folosi framework-uri, există multe framework-uri bazate pe JavaScript pentru dezvoltarea de jocuri pe canvas. Alocă timp pentru a face [cercetări despre acestea](https://github.com/collections/javascript-game-engines).

## Temă

[Comentează-ți codul](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.