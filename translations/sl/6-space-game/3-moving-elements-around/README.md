<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-25T00:41:17+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "sl"
}
-->
# Zgradite vesoljsko igro, 3. del: Dodajanje gibanja

Pomislite na svoje najljubše igre – tisto, kar jih naredi privlačne, niso le lepa grafika, ampak način, kako se vse premika in odziva na vaše ukaze. Trenutno je vaša vesoljska igra kot čudovita slika, vendar jo bomo zdaj oživili z gibanjem.

Ko so inženirji NASA programirali računalnik za vodenje misij Apollo, so se soočili s podobnim izzivom: kako narediti vesoljsko plovilo, da se odziva na ukaze pilota, hkrati pa samodejno ohranja smerne popravke? Načela, ki jih bomo danes spoznali, odražajo te iste koncepte – upravljanje gibanja, ki ga nadzoruje igralec, skupaj z avtomatskimi sistemskimi vedenji.

V tej lekciji se boste naučili, kako narediti vesoljske ladje, da drsijo po zaslonu, se odzivajo na ukaze igralca in ustvarjajo gladke vzorce gibanja. Vse bomo razčlenili na obvladljive koncepte, ki se naravno nadgrajujejo.

Na koncu bodo igralci lahko upravljali svojo junakovo ladjo po zaslonu, medtem ko sovražne ladje patruljirajo nad njimi. Še pomembneje pa je, da boste razumeli osnovna načela, ki poganjajo sisteme gibanja v igrah.

## Predhodni kviz

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/33)

## Razumevanje gibanja v igrah

Igre zaživijo, ko se stvari začnejo premikati, in obstajata dva osnovna načina, kako se to zgodi:

- **Gibanje, ki ga nadzoruje igralec**: Ko pritisnete tipko ali kliknete miško, se nekaj premakne. To je neposredna povezava med vami in vašim igralnim svetom.
- **Samodejno gibanje**: Ko se stvari premikajo same od sebe – na primer sovražne ladje, ki patruljirajo po zaslonu, ne glede na to, ali kaj počnete ali ne.

Premikanje predmetov na računalniškem zaslonu je preprostejše, kot si morda mislite. Se spomnite tistih koordinat x in y iz matematike? Točno s tem se ukvarjamo tukaj. Ko je Galileo leta 1610 sledil Jupitrovim lunam, je v bistvu počel isto – risal je položaje skozi čas, da bi razumel vzorce gibanja.

Premikanje stvari na zaslonu je kot ustvarjanje animacije v obliki listkov – slediti morate tem trem preprostim korakom:

1. **Posodobite položaj** – Spremenite, kje naj bo vaš objekt (morda ga premaknite za 5 pik v desno)
2. **Izbrišite star okvir** – Počistite zaslon, da ne vidite povsod sledi
3. **Narišite nov okvir** – Postavite svoj objekt na novo mesto

Če to storite dovolj hitro, bum! Imate gladko gibanje, ki se igralcem zdi naravno.

Tako lahko to izgleda v kodi:

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

**Kaj ta koda počne:**
- **Posodobi** x-koordinato junaka za 5 pik, da se premakne vodoravno
- **Počisti** celotno območje platna, da odstrani prejšnji okvir
- **Zapolni** platno s črno barvo ozadja
- **Ponovno nariše** sliko junaka na novem položaju

✅ Ali lahko pomislite na razlog, zakaj bi večkratno risanje junaka v sekundi lahko povzročilo stroške zmogljivosti? Preberite o [alternativah temu vzorcu](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Upravljanje dogodkov na tipkovnici

Tu povežemo vhod igralca z akcijo v igri. Ko nekdo pritisne preslednico za izstrelitev laserja ali pritisne puščično tipko za izogib asteroidu, mora vaša igra zaznati in se odzvati na ta vhod.

Dogodki na tipkovnici se zgodijo na ravni okna, kar pomeni, da celotno okno brskalnika posluša te pritiske tipk. Kliki miške pa so lahko vezani na določene elemente (na primer klik na gumb). Za našo vesoljsko igro se bomo osredotočili na nadzor s tipkovnico, saj to igralcem daje tisti klasični občutek arkadne igre.

To me spominja na to, kako so telegrafisti v 19. stoletju morali prevesti vhod v Morsejevi kodi v smiselna sporočila – počnemo nekaj podobnega, prevajamo pritiske tipk v ukaze igre.

Za obravnavo dogodka morate uporabiti metodo `addEventListener()` okna in ji podati dva vhodna parametra. Prvi parameter je ime dogodka, na primer `keyup`. Drugi parameter je funkcija, ki naj se izvede kot rezultat dogodka.

Tukaj je primer:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Razčlenitev, kaj se tukaj zgodi:**
- **Posluša** dogodke na tipkovnici na celotnem oknu
- **Zajame** objekt dogodka, ki vsebuje informacije o tem, katera tipka je bila pritisnjena
- **Preveri**, ali pritisnjena tipka ustreza določeni tipki (v tem primeru puščici navzgor)
- **Izvede** kodo, ko je pogoj izpolnjen

Za dogodke na tipkovnici obstajata dve lastnosti na dogodku, ki ju lahko uporabite za ugotovitev, katera tipka je bila pritisnjena:

- `key` - to je nizovna predstavitev pritisnjene tipke, na primer `'ArrowUp'`
- `keyCode` - to je številčna predstavitev, na primer `37`, kar ustreza `ArrowLeft`

✅ Manipulacija dogodkov na tipkovnici je uporabna tudi zunaj razvoja iger. Katere druge uporabe lahko zamislite za to tehniko?

### Posebne tipke: opozorilo!

Nekatere tipke imajo vgrajena vedenja brskalnika, ki lahko motijo vašo igro. Puščične tipke premikajo stran, preslednica pa skoči navzdol – vedenja, ki jih ne želite, ko nekdo poskuša upravljati svojo vesoljsko ladjo.

Ta privzeta vedenja lahko preprečimo in pustimo, da naša igra obravnava vhod. To je podobno, kot so morali zgodnji računalniški programerji preglasiti sistemske prekinitve, da so ustvarili prilagojena vedenja – mi to počnemo na ravni brskalnika. Tukaj je, kako:

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

**Razumevanje te kode za preprečevanje:**
- **Preveri** določene kode tipk, ki lahko povzročijo neželeno vedenje brskalnika
- **Prepreči** privzeto delovanje brskalnika za puščične tipke in preslednico
- **Dovoli**, da druge tipke delujejo normalno
- **Uporabi** `e.preventDefault()`, da ustavi vgrajeno vedenje brskalnika

## Gibanje, ki ga povzroči igra

Zdaj pa se pogovorimo o predmetih, ki se premikajo brez vnosa igralca. Pomislite na sovražne ladje, ki križarijo po zaslonu, krogle, ki letijo v ravnih linijah, ali oblake, ki se premikajo v ozadju. To samodejno gibanje naredi vaš igralni svet živ, tudi ko nihče ne upravlja kontrol.

Uporabljamo vgrajene časovnike JavaScripta za posodabljanje položajev v rednih intervalih. Ta koncept je podoben temu, kako delujejo nihalne ure – redni mehanizem, ki sproži dosledne, časovno določene akcije. Tukaj je, kako preprosto je lahko:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Kaj ta koda za gibanje počne:**
- **Ustvari** časovnik, ki se izvaja vsakih 100 milisekund
- **Posodobi** y-koordinato sovražnika za 10 pik ob vsakem zagonu
- **Shrani** ID intervala, da ga lahko kasneje ustavimo, če je potrebno
- **Premakne** sovražnika navzdol po zaslonu samodejno

## Zanka igre

Tukaj je koncept, ki vse povezuje – zanka igre. Če bi bila vaša igra film, bi bila zanka igre projektor, ki prikazuje okvir za okvirjem tako hitro, da se vse zdi, da se gladko premika.

Vsaka igra ima eno od teh zank, ki teče v ozadju. To je funkcija, ki posodablja vse predmete igre, ponovno riše zaslon in ta proces neprekinjeno ponavlja. S tem spremlja vašega junaka, vse sovražnike, vse leteče laserje – celotno stanje igre.

Ta koncept me spominja na to, kako so zgodnji filmski animatorji, kot je Walt Disney, morali ponovno narisati like okvir za okvirjem, da so ustvarili iluzijo gibanja. Mi počnemo isto, le da s kodo namesto s svinčniki.

Tukaj je, kako običajno izgleda zanka igre, izražena v kodi:

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

**Razumevanje strukture zanke igre:**
- **Počisti** celotno platno, da odstrani prejšnji okvir
- **Zapolni** ozadje s polno barvo
- **Nariše** vse predmete igre na njihovih trenutnih položajih
- **Ponavlja** ta proces vsakih 200 milisekund za ustvarjanje gladke animacije
- **Upravlja** hitrost okvirjev z nadzorovanjem časovnih intervalov

## Nadaljevanje vesoljske igre

Zdaj bomo dodali gibanje v statično sceno, ki ste jo zgradili prej. Spremenili jo bomo iz posnetka zaslona v interaktivno izkušnjo. Delali bomo korak za korakom, da zagotovimo, da se vsak del gradi na prejšnjem.

Pridobite kodo, kjer smo končali v prejšnji lekciji (ali začnite s kodo v mapi [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work), če potrebujete svež začetek).

**Tukaj je, kaj bomo danes zgradili:**
- **Nadzor junaka**: Puščične tipke bodo upravljale vašo vesoljsko ladjo po zaslonu
- **Gibanje sovražnikov**: Tiste vesoljske ladje bodo začele napadati

Začnimo z implementacijo teh funkcij.

## Priporočeni koraki

Poiščite datoteke, ki so bile ustvarjene za vas v podmapi `your-work`. Vsebujejo naj naslednje:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Svoj projekt začnite v mapi `your-work` tako, da vnesete:

```bash
cd your-work
npm start
```

**Kaj ta ukaz počne:**
- **Premakne** se v vašo projektno mapo
- **Zažene** HTTP strežnik na naslovu `http://localhost:5000`
- **Postreže** vaše datoteke igre, da jih lahko preizkusite v brskalniku

Zgornji ukaz bo zagnal HTTP strežnik na naslovu `http://localhost:5000`. Odprite brskalnik in vnesite ta naslov, trenutno bi moral prikazati junaka in vse sovražnike; nič se še ne premika!

### Dodajte kodo

1. **Dodajte namenske objekte** za `hero`, `enemy` in `game object`, ki naj imajo lastnosti `x` in `y`. (Spomnite se dela o [Dedovanju ali kompoziciji](../README.md)).

   *NAMIG* `game object` naj bo tisti z `x` in `y` ter zmožnostjo, da se nariše na platno.

   > **Nasvet**: Začnite z dodajanjem novega razreda `GameObject` z njegovim konstruktorjem, kot je prikazano spodaj, nato pa ga narišite na platno:

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

    **Razumevanje tega osnovnega razreda:**
    - **Določa** skupne lastnosti, ki jih delijo vsi predmeti igre (položaj, velikost, slika)
    - **Vključuje** zastavico `dead` za sledenje, ali naj se predmet odstrani
    - **Ponuja** metodo `draw()`, ki upodobi predmet na platnu
    - **Nastavi** privzete vrednosti za vse lastnosti, ki jih lahko podrazredi preglasijo

    Zdaj razširite ta razred `GameObject`, da ustvarite `Hero` in `Enemy`:
    
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

    **Ključni koncepti v teh razredih:**
    - **Podeduje** od `GameObject` z uporabo ključne besede `extends`
    - **Pokliče** konstruktor starša z `super(x, y)`
    - **Nastavi** specifične dimenzije in lastnosti za vsako vrsto predmeta
    - **Izvede** samodejno gibanje za sovražnike z uporabo `setInterval()`

2. **Dodajte obdelovalce dogodkov na tipkovnici** za upravljanje navigacije (premikanje junaka gor/dol levo/desno)

   *SPOMNITE SE*, da je to kartezični sistem, zgornji levi kot je `0,0`. Prav tako ne pozabite dodati kode za ustavitev *privzetega vedenja*.

   > **Nasvet**: Ustvarite svojo funkcijo `onKeyDown` in jo povežite z oknom:

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
    
   **Kaj ta obdelovalec dogodkov počne:**
   - **Posluša** dogodke pritiska tipk na celotnem oknu
   - **Zabeleži** kodo tipke, da vam pomaga pri odpravljanju napak, katere tipke so bile pritisnjene
   - **Prepreči** privzeto vedenje brskalnika za puščične tipke in preslednico
   - **Dovoli**, da druge tipke delujejo normalno
   
   Preverite konzolo brskalnika na tej točki in opazujte, kako se pritiski tipk beležijo.

3. **Implementirajte** [Vzorec objavi-naroči](../README.md), to bo ohranilo vašo kodo čisto, ko boste sledili preostalim delom.

   Vzorec objavi-naroči pomaga organizirati vašo kodo z ločevanjem zaznavanja dogodkov od njihove obdelave. To naredi vašo kodo bolj modularno in lažjo za vzdrževanje.

   Za izvedbo tega zadnjega dela lahko:

   1. **Dodate poslušalca dogodkov** na okno:

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

   **Kaj ta sistem dogodkov počne:**
   - **Zazna** vhod tipkovnice in ga pretvori v prilagojene dogodke igre
   - **Loči** zaznavanje vhodov od logike igre
   - **Olajša** spreminjanje kontrol kasneje brez vpliva na kodo igre
   - **Omogoča**, da se več sistemov odzove na isti vhod

   2. **Ustvarite razred EventEmitter** za objavljanje in naročanje na sporočila:

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
       
   3. **Dodajte konstante** in nastavite EventEmitter:

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

   **Razumevanje nastavitve:**
   - **Določa** sporočilne konstante, da se izognete tipkarskim napakam in olajšate refaktoriranje
   - **Deklarira** spremenljivke za slike, kontekst platna in stanje igre
   - **Ustvari** globalni EventEmitter za sistem objavi-naroči
   - **Inicializira** polje za shranjevanje vseh predmetov igre

   4. **Inicializirajte igro**

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
       
4. **Nastavite zanko igre**

   Refaktorirajte funkcijo `window.onload`, da inicializira igro in nastavi zanko igre na ustrezen interval. Dodali boste tudi laserski žarek:

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

   **Razumevanje nastavitve igre:**
   - **Počaka**, da se stran popolnoma naloži, preden začne
   - **Pridobi** element platna in njegov 2D kontekst za upodabljanje
   - **Naloži** vse slikovne vire asinhrono z uporabo `await`
   - **Začne** zanko igre, ki teče v intervalih 100 ms (10 FPS)
   - **Počisti** in ponovno nariše celoten zaslon vsak okvir

5. **Dodajte kodo** za premikanje sovražnikov v določenem intervalu

    Refaktorirajte funkcijo `createEnemies()`, da ustvari sovražnike in jih potisne v nov razred gameObjects:

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

    **Kaj počne ustvarjanje sovražnikov:**
    - **Izračuna** položaje za centriranje sovražnikov na zaslonu
- **Ustvari** mrežo sovražnikov z uporabo ugnezdenih zank  
- **Dodeli** sliko sovražnika vsakemu objektu sovražnika  
- **Doda** vsakega sovražnika v globalno tabelo objektov igre  

in dodajte funkcijo `createHero()`, ki bo izvedla podoben proces za junaka.  

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
  
**Kaj naredi ustvarjanje junaka:**  
- **Postavi** junaka na spodnji sredinski del zaslona  
- **Dodeli** sliko junaka objektu junaka  
- **Doda** junaka v tabelo objektov igre za upodabljanje  

in na koncu dodajte funkcijo `drawGameObjects()`, da začnete risanje:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Razumevanje funkcije risanja:**  
- **Iterira** skozi vse objekte igre v tabeli  
- **Pokliče** metodo `draw()` na vsakem objektu  
- **Posreduje** kontekst platna, da se objekti lahko sami upodobijo  

Vaši sovražniki naj začnejo napredovati proti vesoljski ladji junaka!  
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
  
in na koncu dodajte funkcijo `drawGameObjects()`, da začnete risanje:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Vaši sovražniki naj začnejo napredovati proti vesoljski ladji junaka!  

---

## Izziv GitHub Copilot Agent 🚀  

Tukaj je izziv, ki bo izboljšal dodelanost vaše igre: dodajanje meja in gladkih kontrol. Trenutno lahko vaš junak odleti izven zaslona, premikanje pa je lahko nekoliko sunkovito.  

**Vaša naloga:** Naredite, da bo vaša vesoljska ladja delovala bolj realistično, tako da implementirate meje zaslona in tekoče premikanje. To je podobno kot sistemi za nadzor letenja NASA, ki preprečujejo vesoljskim plovilom, da bi presegla varne operativne parametre.  

**Kaj morate zgraditi:** Ustvarite sistem, ki bo ohranjal vesoljsko ladjo junaka na zaslonu, in poskrbite, da bodo kontrole gladke. Ko igralci držijo pritisnjeno puščično tipko, naj ladja drsi neprekinjeno, namesto da se premika v diskretnih korakih. Razmislite o dodajanju vizualne povratne informacije, ko ladja doseže meje zaslona – morda subtilen učinek, ki označuje rob igralnega območja.  

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.  

## 🚀 Izziv  

Organizacija kode postaja vse bolj pomembna, ko projekti rastejo. Morda ste opazili, da je vaša datoteka postala prenatrpana s funkcijami, spremenljivkami in razredi, ki so vsi pomešani skupaj. To me spominja na to, kako so inženirji, ki so organizirali kodo za misijo Apollo, morali ustvariti jasne, vzdržljive sisteme, na katerih so lahko hkrati delale različne ekipe.  

**Vaša naloga:**  
Razmišljajte kot programski arhitekt. Kako bi organizirali svojo kodo, da bi jo čez šest mesecev vi (ali vaš sodelavec) lahko razumeli? Tudi če vse ostane v eni datoteki za zdaj, lahko ustvarite boljšo organizacijo:  

- **Združevanje povezanih funkcij** skupaj z jasnimi komentarji  
- **Ločevanje odgovornosti** - ločite logiko igre od upodabljanja  
- **Uporaba doslednih poimenovanj** za spremenljivke in funkcije  
- **Ustvarjanje modulov** ali imenikov za organizacijo različnih vidikov vaše igre  
- **Dodajanje dokumentacije**, ki pojasnjuje namen vsakega glavnega dela  

**Vprašanja za razmislek:**  
- Kateri deli vaše kode so najtežje razumljivi, ko se vrnete k njim?  
- Kako bi lahko organizirali svojo kodo, da bi bilo lažje, da nekdo drug prispeva?  
- Kaj bi se zgodilo, če bi želeli dodati nove funkcije, kot so dodatne moči ali različne vrste sovražnikov?  

## Kviz po predavanju  

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/34)  

## Pregled in samostojno učenje  

Vse gradimo od začetka, kar je odlično za učenje, vendar tukaj je majhna skrivnost – obstajajo neverjetni JavaScript ogrodja, ki lahko opravijo veliko težkega dela namesto vas. Ko se boste počutili udobno z osnovami, ki smo jih obravnavali, je vredno [raziskati, kaj je na voljo](https://github.com/collections/javascript-game-engines).  

Pomislite na ogrodja kot na dobro založen komplet orodij, namesto da bi vsako orodje izdelali sami. Rešijo lahko veliko tistih izzivov organizacije kode, o katerih smo govorili, poleg tega pa ponujajo funkcije, ki bi jih sami gradili tedne.  

**Stvari, ki jih je vredno raziskati:**  
- Kako igralni pogoni organizirajo kodo – presenečeni boste nad pametnimi vzorci, ki jih uporabljajo  
- Triki za zmogljivost, da igre na platnu tečejo gladko kot maslo  
- Sodobne funkcije JavaScripta, ki lahko naredijo vašo kodo čistejšo in bolj vzdržljivo  
- Različni pristopi k upravljanju objektov igre in njihovih odnosov  

## Naloga  

[Komentirajte svojo kodo](assignment.md)  

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.