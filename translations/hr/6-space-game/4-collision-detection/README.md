<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T12:33:19+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, dio 4: Dodavanje lasera i detekcija sudara

## Kviz prije predavanja

[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/35)

U ovoj lekciji naučit ćete kako pucati lasere pomoću JavaScripta! Dodati ćemo dvije stvari u našu igru:

- **Laser**: ovaj laser se ispaljuje iz broda vašeg junaka i kreće se vertikalno prema gore
- **Detekcija sudara**, kao dio implementacije mogućnosti *pucanja*, dodati ćemo i neka pravila igre:
   - **Laser pogodi neprijatelja**: Neprijatelj umire ako ga pogodi laser
   - **Laser pogodi vrh ekrana**: Laser se uništava ako pogodi gornji dio ekrana
   - **Sudar neprijatelja i junaka**: Neprijatelj i junak se uništavaju ako se sudare
   - **Neprijatelj pogodi dno ekrana**: Neprijatelj i junak se uništavaju ako neprijatelj pogodi dno ekrana

Ukratko, vi -- *junak* -- morate pogoditi sve neprijatelje laserom prije nego što stignu do dna ekrana.

✅ Istražite malo o prvoj računalnoj igri ikada napisanoj. Koja je bila njezina funkcionalnost?

Budimo heroji zajedno!

## Detekcija sudara

Kako provodimo detekciju sudara? Moramo razmišljati o našim objektima u igri kao o pravokutnicima koji se kreću. Zašto, pitate se? Pa, slika koja se koristi za crtanje objekta u igri je pravokutnik: ima `x`, `y`, `širinu` i `visinu`.

Ako se dva pravokutnika, tj. junak i neprijatelj *presijeku*, imate sudar. Što bi se tada trebalo dogoditi ovisi o pravilima igre. Za implementaciju detekcije sudara trebate sljedeće:

1. Način za dobivanje pravokutne reprezentacije objekta u igri, nešto poput ovoga:

   ```javascript
   rectFromGameObject() {
     return {
       top: this.y,
       left: this.x,
       bottom: this.y + this.height,
       right: this.x + this.width
     }
   }
   ```

2. Funkciju za usporedbu, koja može izgledati ovako:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Kako uništiti stvari

Da biste uništili stvari u igri, morate obavijestiti igru da više ne treba crtati taj objekt u petlji igre koja se pokreće u određenim intervalima. Jedan način za to je označiti objekt igre kao *mrtav* kada se nešto dogodi, ovako:

```javascript
// collision happened
enemy.dead = true
```

Zatim možete izdvojiti *mrtve* objekte prije ponovnog crtanja ekrana, ovako:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Kako ispaliti laser

Ispaljivanje lasera znači reagiranje na događaj pritiska tipke i stvaranje objekta koji se kreće u određenom smjeru. Stoga trebamo provesti sljedeće korake:

1. **Stvoriti objekt lasera**: s vrha broda našeg junaka, koji nakon stvaranja počinje se kretati prema gore, prema vrhu ekrana.
2. **Povezati kod s događajem pritiska tipke**: trebamo odabrati tipku na tipkovnici koja predstavlja igrača koji ispaljuje laser.
3. **Stvoriti objekt igre koji izgleda kao laser** kada se pritisne tipka.

## Pauza između ispaljivanja lasera

Laser treba ispaliti svaki put kad pritisnete tipku, na primjer *razmaknicu*. Kako bismo spriječili da igra proizvodi previše lasera u kratkom vremenu, moramo to popraviti. Rješenje je implementacija tzv. *pauze*, timera, koji osigurava da se laser može ispaliti samo u određenim intervalima. To možete implementirati na sljedeći način:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time)
  }
}

class Weapon {
  constructor {
  }
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // produce a laser
      this.cooldown = new Cooldown(500);
    } else {
      // do nothing - it hasn't cooled down yet.
    }
  }
}
```

✅ Pogledajte lekciju 1 u seriji svemirske igre kako biste se podsjetili na *pauze*.

## Što izgraditi

Uzet ćete postojeći kod (koji ste trebali očistiti i refaktorirati) iz prethodne lekcije i proširiti ga. Možete započeti s kodom iz dijela II ili koristiti kod iz [Dio III - početni kod](../../../../../../../../../your-work).

> savjet: laser s kojim ćete raditi već se nalazi u vašoj mapi s resursima i referenciran je u vašem kodu

- **Dodajte detekciju sudara**, kada laser sudari s nečim, trebaju se primijeniti sljedeća pravila:
   1. **Laser pogodi neprijatelja**: neprijatelj umire ako ga pogodi laser
   2. **Laser pogodi vrh ekrana**: laser se uništava ako pogodi gornji dio našeg ekrana
   3. **Sudar neprijatelja i junaka**: neprijatelj i junak se uništavaju ako se sudare
   4. **Neprijatelj pogodi dno ekrana**: neprijatelj i junak se uništavaju ako neprijatelj pogodi dno ekrana

## Preporučeni koraci

Pronađite datoteke koje su stvorene za vas u podmapi `your-work`. Trebale bi sadržavati sljedeće:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Započnite svoj projekt u mapi `your_work` tako da upišete:

```bash
cd your-work
npm start
```

Gornji kod će pokrenuti HTTP server na adresi `http://localhost:5000`. Otvorite preglednik i unesite tu adresu, trenutno bi trebao prikazati junaka i sve neprijatelje, ništa se još ne kreće :).

### Dodajte kod

1. **Postavite pravokutnu reprezentaciju vašeg objekta igre za rukovanje sudarima** Sljedeći kod omogućuje vam dobivanje pravokutne reprezentacije `GameObject`. Uredite svoju klasu GameObject kako biste je proširili:

    ```javascript
    rectFromGameObject() {
        return {
          top: this.y,
          left: this.x,
          bottom: this.y + this.height,
          right: this.x + this.width,
        };
      }
    ```

2. **Dodajte kod koji provjerava sudar** Ovo će biti nova funkcija koja testira presijecaju li se dva pravokutnika:

    ```javascript
    function intersectRect(r1, r2) {
      return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top
      );
    }
    ```

3. **Dodajte mogućnost ispaljivanja lasera**
   1. **Dodajte poruku za događaj pritiska tipke**. Tipka *razmaknica* trebala bi stvoriti laser odmah iznad broda junaka. Dodajte tri konstante u objekt Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Rukujte tipkom razmaknica**. Uredite funkciju `window.addEventListener` za pritisak tipke kako biste rukovali razmaknicom:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Dodajte slušatelje**. Uredite funkciju `initGame()` kako biste osigurali da junak može pucati kada se pritisne razmaknica:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       i dodajte novu funkciju `eventEmitter.on()` kako biste osigurali ponašanje kada neprijatelj sudari s laserom:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Pomaknite objekt**, Osigurajte da se laser postupno pomiče prema vrhu ekrana. Stvorit ćete novu klasu Laser koja proširuje `GameObject`, kao što ste već radili:

      ```javascript
        class Laser extends GameObject {
        constructor(x, y) {
          super(x,y);
          (this.width = 9), (this.height = 33);
          this.type = 'Laser';
          this.img = laserImg;
          let id = setInterval(() => {
            if (this.y > 0) {
              this.y -= 15;
            } else {
              this.dead = true;
              clearInterval(id);
            }
          }, 100)
        }
      }
      ```

   1. **Rukujte sudarima**, Implementirajte pravila sudara za laser. Dodajte funkciju `updateGameObjects()` koja testira sudare objekata za pogotke:

      ```javascript
      function updateGameObjects() {
        const enemies = gameObjects.filter(go => go.type === 'Enemy');
        const lasers = gameObjects.filter((go) => go.type === "Laser");
      // laser hit something
        lasers.forEach((l) => {
          enemies.forEach((m) => {
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
              first: l,
              second: m,
            });
          }
         });
      });

        gameObjects = gameObjects.filter(go => !go.dead);
      }  
      ```

      Pobrinite se da dodate `updateGameObjects()` u svoju petlju igre u `window.onload`.

   4. **Implementirajte pauzu** za laser, tako da se može ispaliti samo u određenim intervalima.

      Na kraju, uredite klasu Hero kako bi mogla imati pauzu:

       ```javascript
      class Hero extends GameObject {
        constructor(x, y) {
          super(x, y);
          (this.width = 99), (this.height = 75);
          this.type = "Hero";
          this.speed = { x: 0, y: 0 };
          this.cooldown = 0;
        }
        fire() {
          gameObjects.push(new Laser(this.x + 45, this.y - 10));
          this.cooldown = 500;
    
          let id = setInterval(() => {
            if (this.cooldown > 0) {
              this.cooldown -= 100;
            } else {
              clearInterval(id);
            }
          }, 200);
        }
        canFire() {
          return this.cooldown === 0;
        }
      }
      ```

U ovom trenutku, vaša igra ima neku funkcionalnost! Možete se kretati pomoću tipki sa strelicama, ispaliti laser pomoću razmaknice, a neprijatelji nestaju kada ih pogodite. Bravo!

---

## 🚀 Izazov

Dodajte eksploziju! Pogledajte resurse igre u [repozitoriju Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) i pokušajte dodati eksploziju kada laser pogodi vanzemaljca.

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/36)

## Pregled i samostalno učenje

Eksperimentirajte s intervalima u svojoj igri do sada. Što se događa kada ih promijenite? Pročitajte više o [JavaScript vremenskim događajima](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Zadatak

[Istražite sudare](assignment.md)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za bilo kakva pogrešna tumačenja ili nesporazume koji proizlaze iz korištenja ovog prijevoda.