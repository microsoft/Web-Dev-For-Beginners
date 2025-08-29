<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T12:50:42+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "sl"
}
-->
# Zgradite vesoljsko igro, 4. del: Dodajanje laserja in zaznavanje trkov

## Kviz pred predavanjem

[Kviz pred predavanjem](https://ff-quizzes.netlify.app/web/quiz/35)

V tej lekciji se boste naučili, kako streljati laserje z JavaScriptom! V igro bomo dodali dve stvari:

- **Laser**: laser, ki ga izstreli ladja vašega junaka in se premika navpično navzgor
- **Zaznavanje trkov**, kot del implementacije sposobnosti *streljanja* bomo dodali nekaj pravil igre:
   - **Laser zadene sovražnika**: Sovražnik umre, če ga zadene laser
   - **Laser zadene zgornji del zaslona**: Laser se uniči, če zadene zgornji del zaslona
   - **Trk med sovražnikom in junakom**: Sovražnik in junak se uničita, če trčita drug v drugega
   - **Sovražnik zadene spodnji del zaslona**: Sovražnik in junak se uničita, če sovražnik doseže spodnji del zaslona

Na kratko, vi -- *junak* -- morate zadeti vse sovražnike z laserjem, preden se premaknejo na spodnji del zaslona.

✅ Raziskujte o prvi računalniški igri, ki je bila kdaj napisana. Kakšna je bila njena funkcionalnost?

Bodimo junaki skupaj!

## Zaznavanje trkov

Kako zaznamo trke? Na naše igralne objekte moramo gledati kot na pravokotnike, ki se premikajo. Zakaj, se morda sprašujete? No, slika, ki jo uporabljamo za risanje igralnega objekta, je pravokotnik: ima `x`, `y`, `širino` in `višino`.

Če se dva pravokotnika, npr. junak in sovražnik, *prekrivata*, imamo trk. Kaj se zgodi potem, je odvisno od pravil igre. Za implementacijo zaznavanja trkov potrebujete naslednje:

1. Način za pridobitev pravokotne predstavitve igralnega objekta, nekaj takega:

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

2. Primerjalno funkcijo, ki lahko izgleda takole:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Kako uničimo stvari

Za uničenje stvari v igri morate igri sporočiti, da določenega predmeta ne sme več risati v zanki igre, ki se sproži v določenem intervalu. To lahko storite tako, da označite igralni objekt kot *mrtvega*, ko se zgodi nekaj, na primer:

```javascript
// collision happened
enemy.dead = true
```

Nato lahko odstranite *mrtve* objekte, preden ponovno narišete zaslon, na primer:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Kako izstrelimo laser

Izstrelitev laserja pomeni odziv na dogodek pritiska tipke in ustvarjanje objekta, ki se premika v določeni smeri. Zato moramo izvesti naslednje korake:

1. **Ustvarite objekt laserja**: iz vrha ladje našega junaka, ki se ob ustvarjanju začne premikati navzgor proti vrhu zaslona.
2. **Pripnite kodo na dogodek tipke**: izberemo tipko na tipkovnici, ki predstavlja igralčevo streljanje laserja.
3. **Ustvarite igralni objekt, ki izgleda kot laser**, ko je tipka pritisnjena.

## Časovna omejitev za laser

Laser mora biti izstreljen vsakič, ko pritisnete tipko, na primer *preslednico*. Da preprečimo, da bi igra v kratkem času ustvarila preveč laserjev, moramo to popraviti. Popravek je izveden z implementacijo tako imenovane *časovne omejitve*, časovnika, ki zagotavlja, da se laser lahko izstreli le ob določenih intervalih. To lahko implementirate na naslednji način:

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

✅ Oglejte si lekcijo 1 v seriji vesoljske igre, da se spomnite, kako delujejo *časovne omejitve*.

## Kaj bomo zgradili

Vzemite obstoječo kodo (ki ste jo morali očistiti in preoblikovati) iz prejšnje lekcije in jo razširite. Lahko začnete s kodo iz 2. dela ali uporabite kodo iz [3. dela - začetna koda](../../../../../../../../../your-work).

> nasvet: laser, s katerim boste delali, je že v vaši mapi z viri in ga koda že referencira

- **Dodajte zaznavanje trkov**, ko laser trči v nekaj, naj veljajo naslednja pravila:
   1. **Laser zadene sovražnika**: sovražnik umre, če ga zadene laser
   2. **Laser zadene zgornji del zaslona**: laser se uniči, če zadene zgornji del zaslona
   3. **Trk med sovražnikom in junakom**: sovražnik in junak se uničita, če trčita drug v drugega
   4. **Sovražnik zadene spodnji del zaslona**: sovražnik in junak se uničita, če sovražnik doseže spodnji del zaslona

## Priporočeni koraki

Poiščite datoteke, ki so bile ustvarjene za vas v podmapi `your-work`. Vsebujejo naslednje:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Projekt začnete v mapi `your_work` tako, da vnesete:

```bash
cd your-work
npm start
```

Zgornji ukaz bo zagnal HTTP strežnik na naslovu `http://localhost:5000`. Odprite brskalnik in vnesite ta naslov, trenutno bi moral prikazati junaka in vse sovražnike, nič se še ne premika :).

### Dodajte kodo

1. **Nastavite pravokotno predstavitev vašega igralnega objekta za zaznavanje trkov** Spodnja koda omogoča pridobitev pravokotne predstavitve `GameObject`. Uredite razred GameObject, da ga razširite:

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

2. **Dodajte kodo za preverjanje trkov** To bo nova funkcija, ki preverja, ali se dva pravokotnika prekrivata:

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

3. **Dodajte sposobnost streljanja laserja**
   1. **Dodajte sporočilo za dogodek tipke**. Tipka *preslednica* naj ustvari laser tik nad ladjo junaka. Dodajte tri konstante v objekt Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Obdelajte tipko preslednica**. Uredite funkcijo `window.addEventListener` za dogodek `keyup`, da obdelate preslednico:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Dodajte poslušalce dogodkov**. Uredite funkcijo `initGame()`, da zagotovite, da junak lahko strelja, ko je pritisnjena preslednica:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       in dodajte novo funkcijo `eventEmitter.on()`, da zagotovite vedenje, ko sovražnik trči z laserjem:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Premik objekta**, Poskrbite, da se laser postopoma premika proti vrhu zaslona. Ustvarili boste nov razred Laser, ki razširja `GameObject`, kot ste to že storili prej: 
   
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

   1. **Obdelajte trke**, Implementirajte pravila trkov za laser. Dodajte funkcijo `updateGameObjects()`, ki preverja trke med objekti:

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

      Poskrbite, da dodate `updateGameObjects()` v zanko igre v `window.onload`.

   4. **Implementirajte časovno omejitev** za laser, da se lahko izstreli le ob določenih intervalih.

      Na koncu uredite razred Hero, da omogočite časovno omejitev:

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

Na tej točki ima vaša igra nekaj funkcionalnosti! Lahko se premikate s puščičnimi tipkami, streljate laser s preslednico, in sovražniki izginejo, ko jih zadete. Odlično opravljeno!

---

## 🚀 Izziv

Dodajte eksplozijo! Oglejte si igralne vire v [repozitoriju Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) in poskusite dodati eksplozijo, ko laser zadene vesoljca.

## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/36)

## Pregled in samostojno učenje

Eksperimentirajte z intervali v vaši igri do sedaj. Kaj se zgodi, ko jih spremenite? Preberite več o [časovnih dogodkih v JavaScriptu](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Naloga

[Raziščite trke](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna napačna razumevanja ali napačne interpretacije, ki bi nastale zaradi uporabe tega prevoda.