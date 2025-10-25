<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-24T19:42:30+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 4: Kuongeza Laser na Kugundua Migongano

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/35)

Fikiria wakati katika Star Wars ambapo torpedoes za proton za Luke zilipiga sehemu ya kutolea moshi ya Death Star. Kugundua migongano kwa usahihi kulibadilisha hatima ya galaksi! Katika michezo, kugundua migongano hufanya kazi kwa njia sawa - huamua wakati vitu vinapokutana na kinachotokea baadaye.

Katika somo hili, utaongeza silaha za laser kwenye mchezo wako wa anga na kutekeleza kugundua migongano. Kama vile wapangaji wa NASA wanavyohesabu njia za vyombo vya anga ili kuepuka uchafu, utajifunza kugundua wakati vitu vya mchezo vinapokutana. Tutavunja hili katika hatua zinazoweza kudhibitiwa ambazo zinajengwa juu ya kila moja.

Mwisho wa somo, utakuwa na mfumo wa mapigano unaofanya kazi ambapo laser zinaharibu maadui na migongano husababisha matukio ya mchezo. Kanuni hizi za kugundua migongano hutumika katika kila kitu kutoka kwa simulizi za fizikia hadi interfaces za wavuti zinazoshirikiana.

✅ Fanya utafiti kidogo kuhusu mchezo wa kwanza kabisa wa kompyuta uliowahi kuandikwa. Je, ulikuwa na uwezo gani?

## Kugundua Migongano

Kugundua migongano hufanya kazi kama sensa za ukaribu kwenye moduli ya mwezi ya Apollo - kila wakati huchunguza umbali na kutoa tahadhari wakati vitu vinapokaribiana sana. Katika michezo, mfumo huu huamua wakati vitu vinapokutana na kinachotakiwa kutokea baadaye.

Njia tutakayotumia inachukulia kila kitu cha mchezo kama mstatili, sawa na jinsi mifumo ya udhibiti wa trafiki ya anga inavyotumia maumbo ya kijiometri rahisi kufuatilia ndege. Njia hii ya mstatili inaweza kuonekana rahisi, lakini ni bora kiuhesabu na inafanya kazi vizuri kwa hali nyingi za mchezo.

### Uwakilishi wa Mstatili

Kila kitu cha mchezo kinahitaji mipaka ya kuratibu, sawa na jinsi rover ya Mars Pathfinder ilivyopanga eneo lake kwenye uso wa Mars. Hivi ndivyo tunavyofafanua mipaka hii ya kuratibu:

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

**Hebu tuvunje hili:**
- **Ukingo wa juu**: Hapo ndipo kitu chako kinaanza wima (nafasi yake ya y)
- **Ukingo wa kushoto**: Hapo ndipo kinaanza mlalo (nafasi yake ya x)
- **Ukingo wa chini**: Ongeza urefu kwenye nafasi ya y - sasa unajua kinaishia wapi!
- **Ukingo wa kulia**: Ongeza upana kwenye nafasi ya x - na umepata mipaka kamili

### Algorithimu ya Mstatili

Kugundua migongano ya mistatili hutumia mantiki sawa na jinsi Teleskopu ya Anga ya Hubble inavyodhibiti kama vitu vya angani vinakutana katika uwanja wake wa maoni. Algorithimu huchunguza kutengana:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Jaribio la kutengana hufanya kazi kama mifumo ya rada:**
- Je, mstatili 2 uko kabisa upande wa kulia wa mstatili 1?
- Je, mstatili 2 uko kabisa upande wa kushoto wa mstatili 1?
- Je, mstatili 2 uko kabisa chini ya mstatili 1?
- Je, mstatili 2 uko kabisa juu ya mstatili 1?

Ikiwa hakuna mojawapo ya hali hizi ni kweli, mistatili lazima iwe inakutana. Njia hii inaakisi jinsi waendeshaji wa rada wanavyodhibiti kama ndege mbili ziko umbali salama.

## Kusimamia Mzunguko wa Maisha ya Vitu

Wakati laser inapopiga adui, vitu vyote viwili vinahitaji kuondolewa kwenye mchezo. Hata hivyo, kufuta vitu katikati ya mzunguko kunaweza kusababisha ajali - somo lililojifunza kwa njia ngumu katika mifumo ya kompyuta ya mapema kama Kompyuta ya Mwongozo ya Apollo. Badala yake, tunatumia njia ya "kuweka alama kwa kufutwa" ambayo huondoa vitu kwa usalama kati ya fremu.

Hivi ndivyo tunavyoweka alama kwa kitu ili kuondolewa:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Kwa nini njia hii inafanya kazi:**
- Tunaweka alama kwa kitu kama "kimekufa" lakini hatukifuti mara moja
- Hii inaruhusu fremu ya mchezo ya sasa kumalizika kwa usalama
- Hakuna ajali kutoka kwa kujaribu kutumia kitu ambacho tayari kimeondolewa!

Kisha chuja vitu vilivyowekwa alama kabla ya mzunguko wa uonyeshaji unaofuata:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Kile uchujaji huu unachofanya:**
- Huunda orodha mpya yenye vitu "hai" pekee
- Hutupa chochote kilichowekwa alama kama kimekufa
- Huweka mchezo wako ukiendelea vizuri
- Huzuia kujaa kwa kumbukumbu kutokana na vitu vilivyoharibiwa

## Kutekeleza Mitambo ya Laser

Vitu vya laser katika michezo hufanya kazi kwa kanuni sawa na torpedoes za photon katika Star Trek - ni vitu tofauti vinavyosafiri kwa mistari ya moja kwa moja hadi vinapopiga kitu. Kila bonyeza ya spacebar huunda kitu kipya cha laser kinachosogea kwenye skrini.

Ili kufanya kazi hii, tunahitaji kuratibu vipande kadhaa tofauti:

**Vipengele muhimu vya kutekeleza:**
- **Unda** vitu vya laser vinavyozaliwa kutoka kwa nafasi ya shujaa
- **Shughulikia** pembejeo za kibodi ili kuchochea uundaji wa laser
- **Simamia** harakati za laser na mzunguko wa maisha
- **Tekeleza** uwakilishi wa kuona kwa vitu vya laser

## Kutekeleza Udhibiti wa Kiwango cha Kufyatua

Viwango vya kufyatua visivyo na kikomo vingezidi injini ya mchezo na kufanya mchezo kuwa rahisi sana. Mifumo halisi ya silaha inakabiliwa na vikwazo sawa - hata phasers za USS Enterprise zilihitaji muda wa kujazwa tena kati ya risasi.

Tutatekeleza mfumo wa kupoa ambao unazuia kufyatua haraka-haraka huku ukidumisha udhibiti wa haraka:

```javascript
class Cooldown {
  constructor(time) {
    this.cool = false;
    setTimeout(() => {
      this.cool = true;
    }, time);
  }
}

class Weapon {
  constructor() {
    this.cooldown = null;
  }
  
  fire() {
    if (!this.cooldown || this.cooldown.cool) {
      // Create laser projectile
      this.cooldown = new Cooldown(500);
    } else {
      // Weapon is still cooling down
    }
  }
}
```

**Jinsi kupoa kunavyofanya kazi:**
- Wakati inaundwa, silaha huanza "moto" (haiwezi kufyatua bado)
- Baada ya muda wa kusubiri, inakuwa "baridi" (tayari kufyatua)
- Kabla ya kufyatua, tunakagua: "Je, silaha ni baridi?"
- Hii inazuia kubonyeza mara kwa mara huku ikidumisha udhibiti wa haraka

✅ Rejelea somo la 1 katika mfululizo wa mchezo wa anga ili kujikumbusha kuhusu vipindi vya kupoa.

## Kujenga Mfumo wa Kugundua Migongano

Utaongeza msimbo uliopo wa mchezo wako wa anga ili kuunda mfumo wa kugundua migongano. Kama mfumo wa kuepuka migongano wa Kituo cha Kimataifa cha Anga, mchezo wako utafuatilia kila wakati nafasi za vitu na kujibu mikutano.

Kuanzia na msimbo wa somo lako la awali, utaongeza kugundua migongano na sheria maalum zinazodhibiti mwingiliano wa vitu.

> 💡 **Ushauri wa Kitaalam**: Sprite ya laser tayari imejumuishwa kwenye folda yako ya mali na inarejelewa kwenye msimbo wako, tayari kutekelezwa.

### Sheria za Migongano za Kutekeleza

**Mitambo ya mchezo ya kuongeza:**
1. **Laser inapiga adui**: Kitu cha adui kinaharibiwa kinapopigwa na laser
2. **Laser inapopiga mipaka ya skrini**: Laser huondolewa inapofikia ukingo wa juu wa skrini
3. **Migongano ya adui na shujaa**: Vitu vyote viwili vinaharibiwa vinapokutana
4. **Adui anafikia chini**: Hali ya mchezo kuisha wakati maadui wanapofikia chini ya skrini

## Kuweka Mazingira ya Maendeleo

Habari njema - tayari tumeweka msingi mwingi kwa ajili yako! Mali zote za mchezo wako na muundo wa msingi zinasubiri kwenye folda ya `your-work`, tayari kwako kuongeza vipengele vya kugundua migongano.

### Muundo wa Mradi

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Kuelewa muundo wa faili:**
- **Inajumuisha** picha zote za sprite zinazohitajika kwa vitu vya mchezo
- **Inajumuisha** hati kuu ya HTML na faili ya programu ya JavaScript
- **Inatoa** usanidi wa kifurushi kwa seva ya maendeleo ya ndani

### Kuanza Seva ya Maendeleo

Elekea kwenye folda ya mradi wako na anzisha seva ya ndani:

```bash
cd your-work
npm start
```

**Mfululizo huu wa amri:**
- **Hubadilisha** folda hadi folda ya mradi wako wa kazi
- **Huanzisha** seva ya HTTP ya ndani kwenye `http://localhost:5000`
- **Hutoa** faili za mchezo wako kwa majaribio na maendeleo
- **Huwezesha** maendeleo ya moja kwa moja na upakiaji wa kiotomatiki

Fungua kivinjari chako na elekea `http://localhost:5000` ili kuona hali ya sasa ya mchezo wako na shujaa na maadui wakionyeshwa kwenye skrini.

### Utekelezaji Hatua kwa Hatua

Kama njia ya kimfumo NASA ilivyotumia kuandika programu ya chombo cha anga cha Voyager, tutatekeleza kugundua migongano kwa utaratibu, tukijenga kila kipengele hatua kwa hatua.

#### 1. Ongeza Mipaka ya Migongano ya Mstatili

Kwanza, hebu tufundishe vitu vya mchezo wetu jinsi ya kuelezea mipaka yao. Ongeza njia hii kwenye darasa lako la `GameObject`:

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

**Njia hii inakamilisha:**
- **Huunda** kitu cha mstatili chenye mipaka sahihi ya kuratibu
- **Huhesabu** ukingo wa chini na wa kulia kwa kutumia nafasi pamoja na vipimo
- **Hurejesha** kitu tayari kwa algorithimu za kugundua migongano
- **Hutoa** interface ya kawaida kwa vitu vyote vya mchezo

#### 2. Tekeleza Kugundua Migongano

Sasa hebu tuunde mpelelezi wa migongano - kazi inayoweza kusema wakati mistatili miwili inakutana:

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

**Algorithimu hii inafanya kazi kwa:**
- **Inajaribu** hali nne za kutengana kati ya mistatili
- **Inarejesha** `false` ikiwa hali yoyote ya kutengana ni kweli
- **Inaonyesha** migongano wakati hakuna kutengana
- **Inatumia** mantiki ya kukanusha kwa majaribio ya migongano yenye ufanisi

#### 3. Tekeleza Mfumo wa Kufyatua Laser

Hapa ndipo mambo yanapokuwa ya kusisimua! Hebu tuweke mfumo wa kufyatua laser.

##### Aina za Ujumbe

Kwanza, hebu tueleze aina za ujumbe ili sehemu tofauti za mchezo wetu ziweze kuwasiliana:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Aina hizi za ujumbe zinatoa:**
- **Husanifisha** majina ya matukio katika programu
- **Huwezesha** mawasiliano thabiti kati ya mifumo ya mchezo
- **Huzuia** makosa ya herufi katika usajili wa vishikaji vya matukio

##### Ushughulikiaji wa Pembejeo za Kibodi

Ongeza utambuzi wa kitufe cha nafasi kwenye msikilizaji wa matukio ya kibodi:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Msikilizaji huu wa pembejeo:**
- **Hutambua** bonyeza za kitufe cha nafasi kwa kutumia keyCode 32
- **Hutoa** ujumbe wa tukio uliosanifishwa
- **Huwezesha** mantiki ya kufyatua iliyotenganishwa

##### Usajili wa Msikilizaji wa Matukio

Sajili tabia ya kufyatua katika kazi yako ya `initGame()`:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Msikilizaji wa matukio huu:**
- **Huitikia** matukio ya kitufe cha nafasi
- **Hukagua** hali ya kupoa ya kufyatua
- **Huchochea** uundaji wa laser inapowezekana

Ongeza usimamizi wa migongano kwa mwingiliano wa laser na adui:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Msimamizi wa migongano huu:**
- **Hupokea** data ya tukio la migongano na vitu vyote viwili
- **Huweka alama** vitu vyote viwili kwa kuondolewa
- **Hakikisha** usafi sahihi baada ya migongano

#### 4. Unda Darasa la Laser

Tekeleza laser inayosafiri juu na kusimamia mzunguko wake wa maisha:

```javascript
class Laser extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 9;
    this.height = 33;
    this.type = 'Laser';
    this.img = laserImg;
    
    let id = setInterval(() => {
      if (this.y > 0) {
        this.y -= 15;
      } else {
        this.dead = true;
        clearInterval(id);
      }
    }, 100);
  }
}
```

**Utekelezaji wa darasa hili:**
- **Hupanua** GameObject ili kurithi utendaji wa msingi
- **Huweka** vipimo vinavyofaa kwa sprite ya laser
- **Huunda** harakati za moja kwa moja za juu kwa kutumia `setInterval()`
- **Hushughulikia** kujiharibu inapofikia juu ya skrini
- **Husimamia** muda wake wa uhuishaji na usafi

#### 5. Tekeleza Mfumo wa Kugundua Migongano

Unda kazi kamili ya kugundua migongano:

```javascript
function updateGameObjects() {
  const enemies = gameObjects.filter(go => go.type === 'Enemy');
  const lasers = gameObjects.filter(go => go.type === "Laser");
  
  // Test laser-enemy collisions
  lasers.forEach((laser) => {
    enemies.forEach((enemy) => {
      if (intersectRect(laser.rectFromGameObject(), enemy.rectFromGameObject())) {
        eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
          first: laser,
          second: enemy,
        });
      }
    });
  });

  // Remove destroyed objects
  gameObjects = gameObjects.filter(go => !go.dead);
}
```

**Mfumo huu wa migongano:**
- **Huchuja** vitu vya mchezo kwa aina kwa majaribio yenye ufanisi
- **Hujaribu** kila laser dhidi ya kila adui kwa mikutano
- **Hutoa** matukio ya migongano wakati mikutano inatokea
- **Husafisha** vitu vilivyoharibiwa baada ya usindikaji wa migongano

> ⚠️ **Muhimu**: Ongeza `updateGameObjects()` kwenye mzunguko wako mkuu wa mchezo katika `window.onload` ili kuwezesha kugundua migongano.

#### 6. Ongeza Mfumo wa Kupoa kwa Darasa la Shujaa

Boresha darasa la Shujaa na mitambo ya kufyatua na udhibiti wa kiwango:

```javascript
class Hero extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.width = 99;
    this.height = 75;
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

**Kuelewa darasa la Shujaa lililoboreshwa:**
- **Huanzisha** kipima muda cha kupoa kwa sifuri (tayari kufyatua)
- **Huunda** vitu vya laser vilivyowekwa juu ya meli ya shujaa
- **Huweka** kipindi cha kupoa ili kuzuia kufyatua haraka-haraka
- **Hupunguza** kipima muda cha kupoa kwa kutumia masasisho ya msingi wa muda
- **Hutoa** ukaguzi wa hali ya kufyatua kupitia njia ya `canFire()`

### Kupima Utekelezaji Wako

Mchezo wako wa anga sasa una mfumo kamili wa kugundua migongano na mitambo ya mapigano. 🚀 Jaribu uwezo mpya:
- **Elekea** kwa kutumia funguo za mshale ili kuthibitisha udhibiti wa harakati
- **Fyatua laser** kwa spacebar - angalia jinsi kupoa kunavyozuia kubonyeza mara kwa mara
- **Angalia migongano** wakati laser zinapopiga maadui, zikichochea kuondolewa
- **Thibitisha usafi** wakati vitu vilivyoharibiwa vinatoweka kutoka kwenye mchezo

Umefanikiwa kutekeleza mfumo wa kugundua migongano kwa kutumia kanuni zile zile za hisabati zinazotumika katika urambazaji wa vyombo vya anga na roboti.

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Boresha mfumo wa kugundua migongano kwa kutekeleza nguvu za ziada zinazozaliwa kwa nasibu na kutoa uwezo wa muda mfupi zinapokusanywa na meli ya shujaa.

**Kichocheo:** Unda darasa la PowerUp linalopanua GameObject na utekeleze kugundua migongano kati ya shujaa na nguvu za ziada. Ongeza angalau aina mbili za nguvu za ziada: moja inayoongeza kiwango cha kufyatua (kupunguza kupoa) na nyingine inayounda ngao ya muda mfupi. Jumuisha mantiki ya kuzalisha nguvu za ziada kwa vipindi vya nasibu na nafasi.

---

## 🚀 Changamoto

Ongeza mlipuko! Angalia mali za mchezo katika [repo ya Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) na jaribu kuongeza mlipuko wakati laser inapopiga mgeni.

## Maswali ya Baada ya Somo

[Maswali ya baada ya somo](https://ff-quizzes.netlify.app/web/quiz/36)

## Mapitio na Kujisomea

Jaribu vipindi katika mchezo wako hadi sasa. Nini kinatokea unapovibadilisha? Soma zaidi kuhusu [matukio ya muda ya JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Kazi

[Chunguza migongano](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya kiasili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.