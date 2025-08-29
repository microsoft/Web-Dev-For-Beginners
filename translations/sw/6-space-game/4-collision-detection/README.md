<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a6ce295ff03bb49df7a3e17e6e7100a0",
  "translation_date": "2025-08-29T10:05:46+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 4: Kuongeza Laser na Kugundua Migongano

## Jaribio la Kabla ya Somo

[Jaribio la kabla ya somo](https://ff-quizzes.netlify.app/web/quiz/35)

Katika somo hili utajifunza jinsi ya kufyatua laser kwa kutumia JavaScript! Tutaongeza vitu viwili kwenye mchezo wetu:

- **Laser**: laser hii inafyatuliwa kutoka kwenye chombo cha shujaa wako na kuelekea juu wima.
- **Ugunduzi wa migongano**, kama sehemu ya kutekeleza uwezo wa *kufyatua*, tutaongeza sheria nzuri za mchezo:
   - **Laser inapogonga adui**: Adui hufa ikiwa atagongwa na laser.
   - **Laser inapogonga juu ya skrini**: Laser huharibiwa ikiwa itagonga sehemu ya juu ya skrini.
   - **Adui na shujaa wanapogongana**: Adui na shujaa huharibiwa wanapogongana.
   - **Adui anapogonga chini ya skrini**: Adui na shujaa huharibiwa ikiwa adui atafika chini ya skrini.

Kwa ufupi, wewe -- *shujaa* -- unahitaji kuwaua maadui wote kwa kutumia laser kabla hawajafika chini ya skrini.

✅ Fanya utafiti kidogo kuhusu mchezo wa kwanza kabisa wa kompyuta uliowahi kuandikwa. Ulikuwa na uwezo gani?

Tuwe mashujaa pamoja!

## Ugunduzi wa Migongano

Tunawezaje kugundua migongano? Tunahitaji kufikiria vitu vya mchezo wetu kama miraba inayosogea. Kwa nini? Kwa sababu picha inayotumika kuchora kitu cha mchezo ni mstatili: ina `x`, `y`, `upana` na `urefu`.

Ikiwa miraba miwili, yaani shujaa na adui *itakutana*, kuna mgongano. Kinachotakiwa kutokea baada ya hapo kinategemea sheria za mchezo. Ili kutekeleza ugunduzi wa migongano unahitaji yafuatayo:

1. Njia ya kupata uwakilishi wa mstatili wa kitu cha mchezo, kitu kama hiki:

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

2. Kazi ya kulinganisha, kazi hii inaweza kuonekana kama hii:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Tunaharibu Vitu Vipi

Ili kuharibu vitu kwenye mchezo, unahitaji kuufahamisha mchezo kwamba haupaswi tena kuchora kipengele hiki kwenye mzunguko wa mchezo unaotokea kwa muda fulani. Njia ya kufanya hivi ni kuweka alama kwa kitu cha mchezo kama *kimekufa* pale kitu fulani kinapotokea, kama hivi:

```javascript
// collision happened
enemy.dead = true
```

Kisha unaweza kuondoa vitu *vilivyokufa* kabla ya kuchora skrini tena, kama hivi:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Tunafyatuaje Laser

Kufyatua laser kunamaanisha kujibu tukio la kubonyeza kitufe na kuunda kitu kinachosogea kuelekea upande fulani. Kwa hivyo tunahitaji kufanya hatua zifuatazo:

1. **Unda kitu cha laser**: kutoka juu ya chombo cha shujaa wako, ambacho mara tu kinapoundwa huanza kusogea juu kuelekea sehemu ya juu ya skrini.
2. **Ambatanisha msimbo kwenye tukio la kitufe**: tunahitaji kuchagua kitufe kwenye kibodi kinachowakilisha mchezaji anayefyatua laser.
3. **Unda kitu cha mchezo kinachoonekana kama laser** wakati kitufe kinapobonyezwa.

## Muda wa Kupumzika kwa Laser

Laser inapaswa kufyatuliwa kila wakati unapobonyeza kitufe, kama vile *space* kwa mfano. Ili kuzuia mchezo kuzalisha laser nyingi sana kwa muda mfupi, tunahitaji kurekebisha hili. Suluhisho ni kwa kutekeleza kinachoitwa *cooldown*, kipima muda, kinachohakikisha kwamba laser inaweza kufyatuliwa mara chache tu. Unaweza kutekeleza hivyo kwa njia ifuatayo:

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

✅ Rejea somo la 1 katika mfululizo wa mchezo wa anga ili kujikumbusha kuhusu *cooldowns*.

## Nini cha Kujenga

Utachukua msimbo uliopo (ambao unapaswa kuwa umesafishwa na kupangwa upya) kutoka somo lililopita, na kuupanua. Ama anza na msimbo kutoka sehemu ya II au tumia msimbo katika [Sehemu ya III - mwanzo](../../../../../../../../../your-work).

> kidokezo: laser utakayofanyia kazi tayari ipo kwenye folda yako ya mali na imerejelewa na msimbo wako

- **Ongeza ugunduzi wa migongano**, wakati laser inapogongana na kitu sheria zifuatazo zinapaswa kutumika:
   1. **Laser inapogonga adui**: adui hufa ikiwa atagongwa na laser.
   2. **Laser inapogonga juu ya skrini**: Laser huharibiwa ikiwa itagonga sehemu ya juu ya skrini yetu.
   3. **Adui na shujaa wanapogongana**: adui na shujaa huharibiwa wanapogongana.
   4. **Adui anapogonga chini ya skrini**: Adui na shujaa huharibiwa ikiwa adui atafika chini ya skrini.

## Hatua Zinazopendekezwa

Tafuta faili zilizoundwa kwa ajili yako kwenye folda ndogo ya `your-work`. Inapaswa kuwa na yafuatayo:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Anzisha mradi wako kwenye folda ya `your_work` kwa kuandika:

```bash
cd your-work
npm start
```

Hii itaanzisha HTTP Server kwenye anwani `http://localhost:5000`. Fungua kivinjari na uweke anwani hiyo, kwa sasa inapaswa kuonyesha shujaa na maadui wote, hakuna kinachosogea - bado :).

### Ongeza Msimbo

1. **Sanidi uwakilishi wa mstatili wa kitu chako cha mchezo, ili kushughulikia migongano** Msimbo hapa chini unakuruhusu kupata uwakilishi wa mstatili wa `GameObject`. Hariri darasa lako la GameObject ili kulipanua:

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

2. **Ongeza msimbo unaokagua migongano** Hii itakuwa kazi mpya inayojaribu kama miraba miwili inakutana:

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

3. **Ongeza uwezo wa kufyatua laser**
   1. **Ongeza ujumbe wa tukio la kitufe**. Kitufe cha *space* kinapaswa kuunda laser juu kidogo ya chombo cha shujaa. Ongeza vigezo vitatu kwenye kitu cha Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Shughulikia kitufe cha space**. Hariri kazi ya `window.addEventListener` keyup ili kushughulikia space:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Ongeza wasikilizaji**. Hariri kazi ya `initGame()` ili kuhakikisha kwamba shujaa anaweza kufyatua wakati kitufe cha space kinapobonyezwa:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       na ongeza kazi mpya ya `eventEmitter.on()` ili kuhakikisha tabia wakati adui anakutana na laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Sogeza kitu**, Hakikisha laser inasogea kuelekea juu ya skrini hatua kwa hatua. Utaunda darasa jipya la Laser linalopanua `GameObject`, kama ulivyofanya hapo awali: 
   
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

   1. **Shughulikia migongano**, Tekeleza sheria za migongano kwa laser. Ongeza kazi ya `updateGameObjects()` inayojaribu vitu vinavyogongana kwa migongano:

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

      Hakikisha kuongeza `updateGameObjects()` kwenye mzunguko wa mchezo wako katika `window.onload`.

   4. **Tekeleza muda wa kupumzika** kwa laser, ili iweze kufyatuliwa mara chache tu.

      Hatimaye, hariri darasa la Hero ili liweze kupumzika:

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

Kwa hatua hii, mchezo wako una baadhi ya uwezo! Unaweza kusogea kwa kutumia mishale, kufyatua laser kwa kutumia space bar, na maadui wanatoweka unapowagonga. Hongera!

---

## 🚀 Changamoto

Ongeza mlipuko! Angalia mali za mchezo kwenye [repo ya Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) na jaribu kuongeza mlipuko wakati laser inapogonga mgeni.

## Jaribio la Baada ya Somo

[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/quiz/36)

## Mapitio na Kujisomea

Jaribu kubadilisha vipindi kwenye mchezo wako hadi sasa. Nini hutokea unapovibadilisha? Soma zaidi kuhusu [matukio ya muda ya JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Kazi

[Chunguza migongano](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.