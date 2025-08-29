<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T16:51:21+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "lt"
}
-->
# Sukurkite kosminį žaidimą, 4 dalis: pridėkime lazerį ir aptikime susidūrimus

## Klausimai prieš paskaitą

[Klausimai prieš paskaitą](https://ff-quizzes.netlify.app/web/quiz/35)

Šioje pamokoje išmoksite šaudyti lazeriais naudodami JavaScript! Į žaidimą pridėsime du dalykus:

- **Lazerį**: šis lazeris bus iššautas iš herojaus laivo ir judės vertikaliai aukštyn.
- **Susidūrimų aptikimą**, kaip dalį šaudymo funkcionalumo, taip pat pridėsime keletą žaidimo taisyklių:
   - **Lazeris pataiko į priešą**: priešas miršta, jei jį pataiko lazeris.
   - **Lazeris pataiko į ekrano viršų**: lazeris sunaikinamas, jei pataiko į ekrano viršutinę dalį.
   - **Priešo ir herojaus susidūrimas**: priešas ir herojus sunaikinami, jei susiduria vienas su kitu.
   - **Priešas pasiekia ekrano apačią**: priešas ir herojus sunaikinami, jei priešas pasiekia ekrano apačią.

Trumpai tariant, jūs – *herojus* – turite pataikyti į visus priešus lazeriu, kol jie nepasiekia ekrano apačios.

✅ Pasidomėkite apie pirmąjį kada nors sukurtą kompiuterinį žaidimą. Kokios buvo jo funkcijos?

Būkime herojiški kartu!

## Susidūrimų aptikimas

Kaip aptikti susidūrimus? Turime galvoti apie žaidimo objektus kaip apie stačiakampius, kurie juda. Kodėl? Na, vaizdas, naudojamas žaidimo objektui piešti, yra stačiakampis: jis turi `x`, `y`, `plotį` ir `aukštį`.

Jei du stačiakampiai, t.y. herojus ir priešas, *susikerta*, įvyksta susidūrimas. Kas turėtų nutikti, priklauso nuo žaidimo taisyklių. Norint įgyvendinti susidūrimų aptikimą, reikia:

1. Būdo gauti stačiakampio reprezentaciją žaidimo objektui, kažkas panašaus į tai:

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

2. Palyginimo funkcijos, kuri gali atrodyti taip:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Kaip sunaikinti objektus

Norint sunaikinti objektus žaidime, reikia pranešti žaidimui, kad jis nebeturėtų piešti šio objekto žaidimo cikle, kuris vyksta tam tikru intervalu. Vienas būdas tai padaryti – pažymėti žaidimo objektą kaip *mirusį*, kai kažkas nutinka, pavyzdžiui:

```javascript
// collision happened
enemy.dead = true
```

Tada galite pašalinti *mirusius* objektus prieš atnaujindami ekraną, pavyzdžiui:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Kaip iššauti lazerį

Lazerio iššovimas reiškia reakciją į klavišo paspaudimą ir objekto sukūrimą, kuris juda tam tikra kryptimi. Todėl reikia atlikti šiuos veiksmus:

1. **Sukurti lazerio objektą**: iš herojaus laivo viršaus, kuris sukūrimo metu pradeda judėti aukštyn link ekrano viršaus.
2. **Priskirti kodą klavišo įvykiui**: reikia pasirinkti klavišą klaviatūroje, kuris reprezentuos žaidėjo šaudymą lazeriu.
3. **Sukurti žaidimo objektą, kuris atrodo kaip lazeris**, kai paspaudžiamas klavišas.

## Lazerio šaudymo pertraukos

Lazeris turi būti iššaunamas kiekvieną kartą, kai paspaudžiamas klavišas, pavyzdžiui, *tarpas*. Kad žaidimas nesukurtų per daug lazerių per trumpą laiką, reikia tai išspręsti. Sprendimas – įgyvendinti vadinamąją *pertrauką*, laikmatį, kuris užtikrina, kad lazeris gali būti iššaunamas tik tam tikru dažniu. Tai galite įgyvendinti taip:

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

✅ Peržiūrėkite pirmąją pamoką apie kosminį žaidimą, kad prisimintumėte apie *pertraukas*.

## Ką sukurti

Turėsite paimti esamą kodą (kurį turėjote išvalyti ir pertvarkyti) iš ankstesnės pamokos ir jį išplėsti. Galite pradėti nuo II dalies kodo arba naudoti kodą iš [III dalies pradžios](../../../../../../../../../your-work).

> patarimas: lazeris, su kuriuo dirbsite, jau yra jūsų išteklių aplanke ir nurodytas jūsų kode

- **Pridėkite susidūrimų aptikimą**, kai lazeris susiduria su kažkuo, turėtų būti taikomos šios taisyklės:
   1. **Lazeris pataiko į priešą**: priešas miršta, jei jį pataiko lazeris.
   2. **Lazeris pataiko į ekrano viršų**: lazeris sunaikinamas, jei pataiko į ekrano viršutinę dalį.
   3. **Priešo ir herojaus susidūrimas**: priešas ir herojus sunaikinami, jei susiduria vienas su kitu.
   4. **Priešas pasiekia ekrano apačią**: priešas ir herojus sunaikinami, jei priešas pasiekia ekrano apačią.

## Rekomenduojami žingsniai

Raskite failus, kurie buvo sukurti jums aplanke `your-work`. Jame turėtų būti:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Pradėkite savo projektą aplanke `your_work` įvesdami:

```bash
cd your-work
npm start
```

Aukščiau pateiktas kodas paleis HTTP serverį adresu `http://localhost:5000`. Atidarykite naršyklę ir įveskite šį adresą, šiuo metu turėtų būti matomas herojus ir visi priešai, tačiau niekas dar nejuda :).

### Pridėkite kodą

1. **Sukurkite stačiakampio reprezentaciją savo žaidimo objektui, kad galėtumėte aptikti susidūrimus** Žemiau pateiktas kodas leidžia gauti stačiakampio reprezentaciją `GameObject`. Redaguokite savo `GameObject` klasę, kad ją išplėstumėte:

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

2. **Pridėkite kodą, kuris tikrina susidūrimus** Tai bus nauja funkcija, kuri testuoja, ar du stačiakampiai susikerta:

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

3. **Pridėkite lazerio šaudymo funkcionalumą**
   1. **Pridėkite klavišo įvykio pranešimą**. *Tarpas* turėtų sukurti lazerį tiesiai virš herojaus laivo. Pridėkite tris konstantas į `Messages` objektą:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Tvarkykite tarpo klavišą**. Redaguokite `window.addEventListener` funkciją, kad ji tvarkytų tarpo klavišą:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Pridėkite klausytojus**. Redaguokite `initGame()` funkciją, kad užtikrintumėte, jog herojus gali šaudyti paspaudus tarpo klavišą:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       ir pridėkite naują `eventEmitter.on()` funkciją, kad užtikrintumėte elgesį, kai priešas susiduria su lazeriu:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Judinkite objektą**, Užtikrinkite, kad lazeris palaipsniui judėtų ekrano viršaus link. Sukurkite naują `Laser` klasę, kuri išplečia `GameObject`, kaip darėte anksčiau: 
   
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

   1. **Tvarkykite susidūrimus**, Įgyvendinkite lazerio susidūrimo taisykles. Pridėkite `updateGameObjects()` funkciją, kuri testuoja susidūrimus tarp objektų:

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

      Įsitikinkite, kad pridėjote `updateGameObjects()` į savo žaidimo ciklą `window.onload`.

   4. **Įgyvendinkite pertrauką** lazeriui, kad jis galėtų būti iššaunamas tik tam tikru dažniu.

      Galiausiai, redaguokite `Hero` klasę, kad ji galėtų turėti pertrauką:

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

Šiuo metu jūsų žaidimas turi tam tikrą funkcionalumą! Galite naviguoti naudodami rodyklių klavišus, šaudyti lazeriu paspaudę tarpo klavišą, o priešai dingsta, kai juos pataikote. Puikiai padirbėta!

---

## 🚀 Iššūkis

Pridėkite sprogimą! Pažvelkite į žaidimo išteklius [Space Art repo](../../../../6-space-game/solution/spaceArt/readme.txt) ir pabandykite pridėti sprogimą, kai lazeris pataiko į ateivį.

## Klausimai po paskaitos

[Klausimai po paskaitos](https://ff-quizzes.netlify.app/web/quiz/36)

## Apžvalga ir savarankiškas mokymasis

Eksperimentuokite su intervalais savo žaidime. Kas nutinka, kai juos pakeičiate? Skaitykite daugiau apie [JavaScript laiko įvykius](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Užduotis

[Susipažinkite su susidūrimais](assignment.md)

---

**Atsakomybės atsisakymas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.