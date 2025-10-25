<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-25T00:11:08+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, dio 3: Dodavanje kretanja

Razmislite o svojim omiljenim igrama – ono što ih čini privlačnima nisu samo lijepe grafike, već način na koji se sve kreće i reagira na vaše akcije. Trenutno je vaša svemirska igra poput prekrasne slike, ali uskoro ćemo dodati kretanje koje će je oživjeti.

Kada su NASA-ini inženjeri programirali računalo za navođenje Apollo misija, suočili su se sa sličnim izazovom: kako učiniti da svemirska letjelica reagira na unos pilota, a istovremeno automatski održava korekcije kursa? Principi koje ćemo danas naučiti odražavaju te iste koncepte – upravljanje kretanjem koje kontrolira igrač uz automatsko ponašanje sustava.

U ovoj lekciji naučit ćete kako učiniti da svemirski brodovi klize po ekranu, reagiraju na naredbe igrača i stvaraju glatke uzorke kretanja. Sve ćemo razložiti na razumljive koncepte koji se prirodno nadovezuju jedan na drugi.

Na kraju, igrači će moći upravljati svojim herojskim brodom po ekranu dok neprijateljski brodovi patroliraju iznad. Još važnije, razumjet ćete osnovne principe koji pokreću sustave kretanja u igrama.

## Kviz prije predavanja

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/33)

## Razumijevanje kretanja u igrama

Igre oživljavaju kada se stvari počnu kretati, a postoje dva osnovna načina na koja se to događa:

- **Kretanje kontrolirano od strane igrača**: Kada pritisnete tipku ili kliknete mišem, nešto se pomakne. Ovo je izravna veza između vas i svijeta igre.
- **Automatsko kretanje**: Kada sama igra odluči pomaknuti stvari – poput onih neprijateljskih brodova koji trebaju patrolirati ekranom bez obzira na vaše radnje.

Pomicanje objekata na ekranu računala jednostavnije je nego što mislite. Sjećate li se onih x i y koordinata iz matematike? Upravo s njima radimo ovdje. Kada je Galileo 1610. pratio Jupiterove mjesece, u biti je radio isto – bilježio je položaje tijekom vremena kako bi razumio uzorke kretanja.

Pomicanje stvari na ekranu je poput stvaranja animacije u obliku flipbooka – trebate slijediti ova tri jednostavna koraka:

1. **Ažurirajte položaj** – Promijenite gdje bi vaš objekt trebao biti (možda ga pomaknite 5 piksela udesno)
2. **Izbrišite stari okvir** – Očistite ekran kako ne biste vidjeli sablasne tragove posvuda
3. **Nacrtajte novi okvir** – Postavite svoj objekt na njegovo novo mjesto

Ako to radite dovoljno brzo, bum! Dobivate glatko kretanje koje se igračima čini prirodnim.

Evo kako to može izgledati u kodu:

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

**Što ovaj kod radi:**
- **Ažurira** x-koordinatu heroja za 5 piksela kako bi se pomaknuo vodoravno
- **Briše** cijelo područje platna kako bi uklonio prethodni okvir
- **Ispunjava** platno crnom bojom pozadine
- **Ponovno crta** sliku heroja na njegovom novom položaju

✅ Možete li smisliti razlog zašto ponovno crtanje vašeg heroja mnogo puta u sekundi može uzrokovati troškove performansi? Pročitajte o [alternativama ovom obrascu](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Rukovanje događajima na tipkovnici

Ovdje povezujemo unos igrača s akcijom u igri. Kada netko pritisne razmaknicu za ispaljivanje lasera ili pritisne strelicu za izbjegavanje asteroida, vaša igra mora otkriti i reagirati na taj unos.

Događaji na tipkovnici događaju se na razini prozora, što znači da cijeli prozor vašeg preglednika sluša te pritiske tipki. Klikovi mišem, s druge strane, mogu se vezati za određene elemente (poput klikanja na gumb). Za našu svemirsku igru, fokusirat ćemo se na kontrole tipkovnice jer one igračima daju taj klasični arkadni osjećaj.

Ovo me podsjeća na to kako su telegrafisti u 1800-ima morali prevoditi unos Morseove abecede u smislene poruke – radimo nešto slično, prevodimo pritiske tipki u naredbe igre.

Za rukovanje događajem trebate koristiti metodu `addEventListener()` prozora i pružiti joj dva ulazna parametra. Prvi parametar je naziv događaja, na primjer `keyup`. Drugi parametar je funkcija koja bi se trebala pozvati kao rezultat događaja.

Evo primjera:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Razlaganje onoga što se ovdje događa:**
- **Sluša** događaje na tipkovnici na cijelom prozoru
- **Hvata** objekt događaja koji sadrži informacije o tome koja je tipka pritisnuta
- **Provjerava** odgovara li pritisnuta tipka određenoj tipki (u ovom slučaju, strelici gore)
- **Izvršava** kod kada je uvjet ispunjen

Za događaje na tipkama postoje dva svojstva na događaju koja možete koristiti za provjeru koja je tipka pritisnuta:

- `key` - ovo je tekstualni prikaz pritisnute tipke, na primjer `'ArrowUp'`
- `keyCode` - ovo je brojčani prikaz, na primjer `37`, što odgovara `ArrowLeft`

✅ Manipulacija događajima na tipkama korisna je i izvan razvoja igara. Koje druge primjene možete zamisliti za ovu tehniku?

### Posebne tipke: upozorenje!

Neke tipke imaju ugrađene funkcije preglednika koje mogu ometati vašu igru. Strelice pomiču stranicu, a razmaknica skrolira prema dolje – ponašanja koja ne želite kada netko pokušava upravljati svojim svemirskim brodom.

Možemo spriječiti ova zadana ponašanja i dopustiti našoj igri da upravlja unosom. Ovo je slično tome kako su rani računalni programeri morali nadjačati sistemske prekide kako bi stvorili prilagođena ponašanja – mi to radimo na razini preglednika. Evo kako:

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

**Razumijevanje ovog koda za sprječavanje:**
- **Provjerava** specifične kodove tipki koji bi mogli uzrokovati neželjeno ponašanje preglednika
- **Sprječava** zadanu akciju preglednika za strelice i razmaknicu
- **Dopušta** ostalim tipkama da normalno funkcioniraju
- **Koristi** `e.preventDefault()` za zaustavljanje ugrađenog ponašanja preglednika

## Kretanje inducirano igrom

Sada ćemo razgovarati o objektima koji se kreću bez unosa igrača. Razmislite o neprijateljskim brodovima koji krstare ekranom, mecima koji lete ravno ili oblacima koji lebde u pozadini. Ovo autonomno kretanje čini vaš svijet igre živim čak i kada nitko ne dodiruje kontrole.

Koristimo ugrađene JavaScript timere za ažuriranje položaja u redovitim intervalima. Ovaj koncept je sličan načinu na koji rade klatna u satovima – redoviti mehanizam koji pokreće dosljedne, vremenski određene radnje. Evo kako to može izgledati:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Što ovaj kod za kretanje radi:**
- **Stvara** timer koji se pokreće svakih 100 milisekundi
- **Ažurira** y-koordinatu neprijatelja za 10 piksela svaki put
- **Pohranjuje** ID intervala kako bismo ga kasnije mogli zaustaviti ako je potrebno
- **Pomiče** neprijatelja prema dolje na ekranu automatski

## Petlja igre

Evo koncepta koji sve povezuje – petlja igre. Ako je vaša igra film, petlja igre bila bi projektor filma, prikazujući kadar za kadrom tako brzo da se sve čini kao glatko kretanje.

Svaka igra ima jednu od ovih petlji koja radi u pozadini. To je funkcija koja ažurira sve objekte igre, ponovno crta ekran i kontinuirano ponavlja ovaj proces. Ovo prati vašeg heroja, sve neprijatelje, sve lasere koji lete okolo – cijelo stanje igre.

Ovaj koncept me podsjeća na to kako su rani animatori poput Walta Disneya morali ponovno crtati likove kadar po kadar kako bi stvorili iluziju kretanja. Mi radimo isto, samo s kodom umjesto olovaka.

Evo kako tipična petlja igre može izgledati, izražena u kodu:

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

**Razumijevanje strukture petlje igre:**
- **Briše** cijelo platno kako bi uklonila prethodni okvir
- **Ispunjava** pozadinu čvrstom bojom
- **Crta** sve objekte igre na njihovim trenutnim položajima
- **Ponavlja** ovaj proces svakih 200 milisekundi kako bi stvorila glatku animaciju
- **Upravlja** brzinom kadrova kontroliranjem intervalnog vremena

## Nastavak svemirske igre

Sada ćemo dodati kretanje u statičnu scenu koju ste prethodno izgradili. Pretvorit ćemo je iz snimke zaslona u interaktivno iskustvo. Proći ćemo kroz ovo korak po korak kako bismo osigurali da se svaki dio nadovezuje na prethodni.

Preuzmite kod odakle smo stali u prethodnoj lekciji (ili započnite s kodom u [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work) mapi ako trebate svježi početak).

**Evo što danas gradimo:**
- **Kontrole heroja**: Strelice će upravljati vašim svemirskim brodom po ekranu
- **Kretanje neprijatelja**: Ti vanzemaljski brodovi će započeti svoj napad

Krenimo s implementacijom ovih značajki.

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

Svoj projekt započnite u mapi `your-work` upisivanjem:

```bash
cd your-work
npm start
```

**Što ova naredba radi:**
- **Navigira** do direktorija vašeg projekta
- **Pokreće** HTTP poslužitelj na adresi `http://localhost:5000`
- **Poslužuje** datoteke vaše igre kako biste ih mogli testirati u pregledniku

Gore navedeno će pokrenuti HTTP poslužitelj na adresi `http://localhost:5000`. Otvorite preglednik i unesite tu adresu, trenutno bi trebao prikazati heroja i sve neprijatelje; ništa se još ne miče!

### Dodavanje koda

1. **Dodajte namjenske objekte** za `heroja`, `neprijatelja` i `objekt igre`, oni bi trebali imati svojstva `x` i `y`. (Sjetite se dijela o [Nasljeđivanju ili kompoziciji](../README.md)).

   *SAVJET* `objekt igre` trebao bi biti onaj s `x` i `y` te sposobnošću da se nacrta na platnu.

   > **Savjet**: Započnite dodavanjem nove klase `GameObject` s konstruktorom definiranim kao dolje, a zatim ga nacrtajte na platnu:

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

    **Razumijevanje ove osnovne klase:**
    - **Definira** zajednička svojstva koja dijele svi objekti igre (položaj, veličina, slika)
    - **Uključuje** zastavicu `dead` za praćenje treba li objekt biti uklonjen
    - **Pruža** metodu `draw()` koja prikazuje objekt na platnu
    - **Postavlja** zadane vrijednosti za sva svojstva koja podklase mogu nadjačati

    Sada proširite ovaj `GameObject` kako biste stvorili `Hero` i `Enemy`:
    
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

    **Ključni koncepti u ovim klasama:**
    - **Nasljeđuje** od `GameObject` koristeći ključnu riječ `extends`
    - **Poziva** konstruktor roditelja s `super(x, y)`
    - **Postavlja** specifične dimenzije i svojstva za svaku vrstu objekta
    - **Implementira** automatsko kretanje za neprijatelje koristeći `setInterval()`

2. **Dodajte rukovatelje događajima na tipkama** za upravljanje navigacijom (pomicanje heroja gore/dolje lijevo/desno)

   *ZAPAMTITE* to je kartezijanski sustav, gornji lijevi kut je `0,0`. Također zapamtite dodati kod za zaustavljanje *zadanog ponašanja*

   > **Savjet**: Kreirajte svoju funkciju `onKeyDown` i povežite je s prozorom:

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
    
   **Što ovaj rukovatelj događajima radi:**
   - **Sluša** događaje pritiska tipki na cijelom prozoru
   - **Bilježi** kod tipke kako bi vam pomogao u otkrivanju koje se tipke pritišću
   - **Sprječava** zadano ponašanje preglednika za strelice i razmaknicu
   - **Dopušta** ostalim tipkama da normalno funkcioniraju
   
   Provjerite konzolu preglednika u ovom trenutku i pratite pritiske tipki koji se bilježe. 

3. **Implementirajte** [Pub sub pattern](../README.md), ovo će održati vaš kod čistim dok slijedite preostale dijelove.

   Obrazac Publish-Subscribe pomaže organizirati vaš kod razdvajanjem otkrivanja događaja od rukovanja događajima. Ovo čini vaš kod modularnijim i lakšim za održavanje.

   Za ovaj posljednji dio možete:

   1. **Dodati slušatelja događaja** na prozor:

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

   **Što ovaj sustav događaja radi:**
   - **Otkriva** unos s tipkovnice i pretvara ga u prilagođene događaje igre
   - **Razdvaja** otkrivanje unosa od logike igre
   - **Omogućuje** jednostavnu promjenu kontrola kasnije bez utjecaja na kod igre
   - **Dopušta** više sustava da reagiraju na isti unos

   2. **Kreirajte klasu EventEmitter** za objavljivanje i pretplatu na poruke:

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
       
   3. **Dodajte konstante** i postavite EventEmitter:

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

   **Razumijevanje postavke:**
   - **Definira** konstante poruka kako bi se izbjegle pogreške u pisanju i olakšalo refaktoriranje
   - **Deklarira** varijable za slike, kontekst platna i stanje igre
   - **Stvara** globalni event emitter za sustav pub-sub
   - **Inicijalizira** niz za pohranu svih objekata igre

   4. **Inicijalizirajte igru**

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
       
4. **Postavite petlju igre**

   Refaktorirajte funkciju `window.onload` kako biste inicijalizirali igru i postavili petlju igre na dobar interval. Također ćete dodati laserski zrak:

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

   **Razumijevanje postavke igre:**
   - **Čeka** da se stranica potpuno učita prije početka
   - **Dohvaća** element platna i njegov 2D kontekst za crtanje
   - **Učitava** sve slikovne resurse asinkrono koristeći `await`
   - **Pokreće** petlju igre koja radi u intervalima od 100 ms (10 FPS)
   - **Briše** i ponovno crta cijeli ekran svaki kadar

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

    **Što radi stvaranje neprijatelja:**
    - **Izračunava** položaje za centriranje neprijatelja na ekranu
- **Stvara** mrežu neprijatelja koristeći ugniježđene petlje  
- **Dodjeljuje** sliku neprijatelja svakom objektu neprijatelja  
- **Dodaje** svakog neprijatelja u globalni niz objekata igre  

i dodajte funkciju `createHero()` koja će obaviti sličan proces za heroja.  

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
  
**Što radi kreacija heroja:**  
- **Pozicionira** heroja na dno, u sredinu ekrana  
- **Dodjeljuje** sliku heroja objektu heroja  
- **Dodaje** heroja u niz objekata igre za prikaz  

i na kraju, dodajte funkciju `drawGameObjects()` za početak crtanja:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Razumijevanje funkcije crtanja:**  
- **Iterira** kroz sve objekte igre u nizu  
- **Poziva** metodu `draw()` na svakom objektu  
- **Prosljeđuje** kontekst platna kako bi se objekti mogli sami prikazati  

Vaši neprijatelji trebali bi početi napredovati prema vašem svemirskom brodu heroja!  
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
  
i na kraju, dodajte funkciju `drawGameObjects()` za početak crtanja:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Vaši neprijatelji trebali bi početi napredovati prema vašem svemirskom brodu heroja!  

---

## Izazov GitHub Copilot Agent 🚀  

Evo izazova koji će poboljšati završnu obradu vaše igre: dodavanje granica i glatkih kontrola. Trenutno vaš heroj može odletjeti izvan ekrana, a kretanje može djelovati trzavo.  

**Vaša misija:** Učinite da vaš svemirski brod djeluje realističnije implementacijom granica ekrana i fluidnog kretanja. To je slično načinu na koji NASA-ini sustavi za kontrolu leta sprječavaju svemirske letjelice da prekorače sigurne operativne parametre.  

**Što treba izgraditi:** Stvorite sustav koji drži svemirski brod heroja na ekranu i učinite da kontrole djeluju glatko. Kada igrači drže pritisnutu tipku sa strelicom, brod bi trebao kliziti kontinuirano, umjesto da se kreće u diskretnim koracima. Razmislite o dodavanju vizualne povratne informacije kada brod dosegne granice ekrana – možda suptilni efekt koji označava rub područja igre.  

Saznajte više o [agent modu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.  

## 🚀 Izazov  

Organizacija koda postaje sve važnija kako projekti rastu. Možda ste primijetili da vaš dokument postaje pretrpan funkcijama, varijablama i klasama koje su sve izmiješane. To me podsjeća na način na koji su inženjeri organizirali kod za misiju Apollo, stvarajući jasne, održive sustave na kojima su istovremeno mogle raditi različite ekipe.  

**Vaša misija:**  
Razmišljajte kao softverski arhitekt. Kako biste organizirali svoj kod tako da ga za šest mjeseci vi (ili vaš kolega) možete razumjeti? Čak i ako sve ostane u jednoj datoteci za sada, možete stvoriti bolju organizaciju:  

- **Grupiranje povezanih funkcija** zajedno s jasnim zaglavljima komentara  
- **Razdvajanje odgovornosti** - odvojite logiku igre od prikaza  
- **Korištenje dosljednih konvencija imenovanja** za varijable i funkcije  
- **Stvaranje modula** ili prostora imena za organizaciju različitih aspekata vaše igre  
- **Dodavanje dokumentacije** koja objašnjava svrhu svakog glavnog dijela  

**Pitanja za razmišljanje:**  
- Koji su dijelovi vašeg koda najteži za razumjeti kada se vratite na njih?  
- Kako biste mogli organizirati svoj kod da ga drugi lakše razumiju i doprinesu?  
- Što bi se dogodilo ako biste željeli dodati nove značajke poput pojačanja ili različitih vrsta neprijatelja?  

## Kviz nakon predavanja  

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/34)  

## Pregled i samostalno učenje  

Sve gradimo od nule, što je fantastično za učenje, ali evo male tajne – postoje nevjerojatni JavaScript okviri koji mogu obaviti velik dio posla za vas. Kada se osjećate ugodno s osnovama koje smo obradili, vrijedi [istražiti što je dostupno](https://github.com/collections/javascript-game-engines).  

Razmislite o okvirima kao o dobro opremljenoj kutiji s alatima, umjesto da svaki alat izrađujete ručno. Oni mogu riješiti mnoge od onih izazova organizacije koda o kojima smo govorili, plus ponuditi značajke koje bi vam inače trebale tjedni da ih sami izradite.  

**Stvari koje vrijedi istražiti:**  
- Kako game engine-i organiziraju kod – bit ćete zadivljeni pametnim obrascima koje koriste  
- Trikovi za performanse kako bi igre na platnu radile glatko kao maslac  
- Moderne značajke JavaScripta koje mogu učiniti vaš kod čišćim i lakšim za održavanje  
- Različiti pristupi upravljanju objektima igre i njihovim odnosima  

## Zadatak  

[Komentirajte svoj kod](assignment.md)  

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.