<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-25T00:43:35+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "sl"
}
-->
# Ustvari vesoljsko igro, 4. del: Dodajanje laserja in zaznavanje trkov

## Predavanje - kviz

[Predavanje - kviz](https://ff-quizzes.netlify.app/web/quiz/35)

Pomislite na trenutek v Vojni zvezd, ko so protonski torpedi Lukea zadeli izpušni kanal Zvezde smrti. To natančno zaznavanje trka je spremenilo usodo galaksije! V igrah zaznavanje trkov deluje na enak način - določa, kdaj objekti medsebojno vplivajo in kaj se zgodi potem.

V tej lekciji boste svoji vesoljski igri dodali lasersko orožje in implementirali zaznavanje trkov. Tako kot načrtovalci misij pri NASA-i izračunajo trajektorije vesoljskih plovil, da se izognejo ostankom, se boste naučili zaznati, kdaj se objekti v igri prekrivajo. Razdelili bomo to na obvladljive korake, ki se gradijo drug na drugem.

Na koncu boste imeli delujoč bojni sistem, kjer laserji uničujejo sovražnike, trki pa sprožijo dogodke v igri. Ti isti principi zaznavanja trkov se uporabljajo v vsem, od simulacij fizike do interaktivnih spletnih vmesnikov.

✅ Naredite malo raziskave o prvi računalniški igri, ki je bila kdaj napisana. Kakšna je bila njena funkcionalnost?

## Zaznavanje trkov

Zaznavanje trkov deluje kot senzorji bližine na lunarnem modulu Apollo - nenehno preverja razdalje in sproži opozorila, ko se objekti preveč približajo. V igrah ta sistem določa, kdaj objekti medsebojno vplivajo in kaj naj se zgodi potem.

Pristop, ki ga bomo uporabili, obravnava vsak objekt v igri kot pravokotnik, podobno kot sistemi za nadzor zračnega prometa uporabljajo poenostavljene geometrijske oblike za sledenje letalom. Ta metoda s pravokotniki se morda zdi osnovna, vendar je računsko učinkovita in dobro deluje v večini scenarijev iger.

### Predstavitev pravokotnika

Vsak objekt v igri potrebuje meje koordinat, podobno kot je rover Mars Pathfinder kartiral svojo lokacijo na površju Marsa. Tukaj je, kako definiramo te meje koordinat:

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

**Razčlenimo to:**
- **Zgornji rob**: To je točno tam, kjer se vaš objekt začne vertikalno (njegova y pozicija)
- **Levi rob**: Kjer se začne horizontalno (njegova x pozicija)
- **Spodnji rob**: Dodajte višino k y poziciji - zdaj veste, kje se konča!
- **Desni rob**: Dodajte širino k x poziciji - in imate celotno mejo

### Algoritem za prekrivanje

Zaznavanje prekrivanja pravokotnikov uporablja logiko, podobno kot Hubbleov vesoljski teleskop določa, ali se nebesni objekti prekrivajo v njegovem vidnem polju. Algoritem preverja ločitev:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Test ločitve deluje kot radarski sistemi:**
- Ali je pravokotnik 2 popolnoma desno od pravokotnika 1?
- Ali je pravokotnik 2 popolnoma levo od pravokotnika 1?
- Ali je pravokotnik 2 popolnoma pod pravokotnikom 1?
- Ali je pravokotnik 2 popolnoma nad pravokotnikom 1?

Če noben od teh pogojev ni resničen, se pravokotniki morajo prekrivati. Ta pristop odraža, kako radarski operaterji določajo, ali sta dve letali na varni razdalji.

## Upravljanje življenjskega cikla objektov

Ko laser zadene sovražnika, je treba oba objekta odstraniti iz igre. Vendar pa lahko brisanje objektov med zanko povzroči zrušitve - lekcija, ki so se je naučili na težek način v zgodnjih računalniških sistemih, kot je Apollo Guidance Computer. Namesto tega uporabljamo pristop "označi za brisanje", ki varno odstrani objekte med okvirji.

Tukaj je, kako nekaj označimo za odstranitev:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Zakaj ta pristop deluje:**
- Objekt označimo kot "mrtvega", vendar ga ne izbrišemo takoj
- To omogoča varno dokončanje trenutnega okvirja igre
- Brez zrušitev zaradi poskusov uporabe nečesa, kar je že odstranjeno!

Nato filtriramo označene objekte pred naslednjim ciklom upodabljanja:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Kaj to filtriranje naredi:**
- Ustvari svež seznam samo z "živimi" objekti
- Odstrani vse, kar je označeno kot mrtvo
- Ohranja nemoteno delovanje igre
- Preprečuje kopičenje uničenih objektov v pomnilniku

## Implementacija laserske mehanike

Laserski projektili v igrah delujejo po istem principu kot fotonski torpedi v Zvezdnih stezah - so ločeni objekti, ki potujejo v ravnih linijah, dokler ne zadenejo nečesa. Vsak pritisk na preslednico ustvari nov laserski objekt, ki se premika po zaslonu.

Da bi to delovalo, moramo uskladiti nekaj različnih delov:

**Ključne komponente za implementacijo:**
- **Ustvarjanje** laserskih objektov, ki se pojavijo na poziciji junaka
- **Obravnava** vnosa s tipkovnice za sprožitev ustvarjanja laserja
- **Upravljanje** gibanja laserja in življenjskega cikla
- **Implementacija** vizualne predstavitve laserskih projektilov

## Implementacija nadzora hitrosti streljanja

Neomejene hitrosti streljanja bi preobremenile igralni motor in naredile igro prelahko. Pravi orožni sistemi se soočajo s podobnimi omejitvami - tudi fazerji USS Enterprise so potrebovali čas za ponovno polnjenje med streli.

Implementirali bomo sistem ohlajanja, ki preprečuje prekomerno streljanje, hkrati pa ohranja odzivne kontrole:

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

**Kako deluje ohlajanje:**
- Ko je ustvarjeno, je orožje "vroče" (še ne more streljati)
- Po preteku časovnega obdobja postane "hladno" (pripravljeno za streljanje)
- Pred streljanjem preverimo: "Ali je orožje hladno?"
- To preprečuje prekomerno streljanje, hkrati pa ohranja odzivnost kontrol

✅ Oglejte si lekcijo 1 v seriji vesoljske igre, da se spomnite o sistemih ohlajanja.

## Gradnja sistema za zaznavanje trkov

Razširili boste obstoječo kodo svoje vesoljske igre, da ustvarite sistem za zaznavanje trkov. Tako kot avtomatizirani sistem za izogibanje trkom na Mednarodni vesoljski postaji bo vaša igra neprestano spremljala pozicije objektov in se odzivala na prekrivanja.

Začeli bomo s kodo iz prejšnje lekcije in dodali zaznavanje trkov s specifičnimi pravili, ki urejajo interakcije med objekti.

> 💡 **Koristen nasvet**: Sprite za laser je že vključen v vašo mapo z viri in referenciran v vaši kodi, pripravljen za implementacijo.

### Pravila za zaznavanje trkov

**Mehanika igre za dodajanje:**
1. **Laser zadene sovražnika**: Sovražni objekt je uničen, ko ga zadene laserski projektil
2. **Laser zadene mejo zaslona**: Laser se odstrani, ko doseže zgornji rob zaslona
3. **Trk sovražnika in junaka**: Oba objekta sta uničena, ko se prekrivata
4. **Sovražnik doseže dno**: Pogoj za konec igre, ko sovražniki dosežejo spodnji rob zaslona

## Priprava razvojnega okolja

Dobra novica - večino osnov smo že pripravili za vas! Vsi vaši viri igre in osnovna struktura vas čakajo v podmapi `your-work`, pripravljeni za dodajanje kul funkcij zaznavanja trkov.

### Struktura projekta

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Razumevanje strukture datotek:**
- **Vsebuje** vse slike sprite, potrebne za objekte igre
- **Vključuje** glavni HTML dokument in datoteko JavaScript aplikacije
- **Ponuja** konfiguracijo paketa za lokalni razvojni strežnik

### Zagon razvojnega strežnika

Pomaknite se do mape projekta in zaženite lokalni strežnik:

```bash
cd your-work
npm start
```

**Ta zaporedje ukazov:**
- **Spremeni** mapo na vašo delovno mapo projekta
- **Zažene** lokalni HTTP strežnik na `http://localhost:5000`
- **Postreže** datoteke vaše igre za testiranje in razvoj
- **Omogoča** razvoj v živo z avtomatskim osveževanjem

Odprite brskalnik in se pomaknite na `http://localhost:5000`, da si ogledate trenutno stanje igre z junakom in sovražniki, upodobljenimi na zaslonu.

### Korak za korakom implementacija

Tako kot sistematičen pristop, ki ga je NASA uporabila za programiranje vesoljskega plovila Voyager, bomo zaznavanje trkov implementirali metodično, gradili vsak komponent korak za korakom.

#### 1. Dodajte meje trkov pravokotnikov

Najprej naučimo naše objekte v igri, kako opisati svoje meje. Dodajte to metodo v svoj razred `GameObject`:

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

**Ta metoda omogoča:**
- **Ustvari** objekt pravokotnika s točnimi mejami koordinat
- **Izračuna** spodnje in desne robove z uporabo pozicije plus dimenzij
- **Vrne** objekt, pripravljen za algoritme zaznavanja trkov
- **Ponuja** standardiziran vmesnik za vse objekte igre

#### 2. Implementirajte zaznavanje prekrivanja

Zdaj ustvarimo našega detektiva trkov - funkcijo, ki lahko pove, kdaj se dva pravokotnika prekrivata:

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

**Ta algoritem deluje tako, da:**
- **Preverja** štiri pogoje ločitve med pravokotniki
- **Vrne** `false`, če je kateri koli pogoj ločitve resničen
- **Indicira** trk, ko ni ločitve
- **Uporablja** logiko negacije za učinkovito testiranje prekrivanja

#### 3. Implementirajte sistem streljanja laserjev

Tukaj postane zanimivo! Nastavimo sistem streljanja laserjev.

##### Konstantne sporočilne vrednosti

Najprej definirajmo nekaj vrst sporočil, da se lahko različni deli naše igre medsebojno sporazumevajo:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Te konstante omogočajo:**
- **Standardizirajo** imena dogodkov po celotni aplikaciji
- **Omogočajo** dosledno komunikacijo med sistemi igre
- **Preprečujejo** tipkarske napake pri registraciji obdelovalcev dogodkov

##### Obdelava vnosa s tipkovnice

Dodajte zaznavanje pritiska na preslednico v vaš poslušalec dogodkov na tipkovnici:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Ta obdelovalec vnosa:**
- **Zazna** pritiske na preslednico z uporabo keyCode 32
- **Oddaja** standardizirano sporočilo dogodka
- **Omogoča** ločeno logiko streljanja

##### Nastavitev poslušalca dogodkov

Registrirajte vedenje streljanja v funkciji `initGame()`:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Ta poslušalec dogodkov:**
- **Reagira** na dogodke pritiska na preslednico
- **Preverja** status ohlajanja streljanja
- **Sproži** ustvarjanje laserja, ko je to dovoljeno

Dodajte obdelavo trkov za interakcije med laserjem in sovražnikom:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Ta obdelovalec trkov:**
- **Prejme** podatke o dogodku trka z obema objektoma
- **Označi** oba objekta za odstranitev
- **Zagotovi** pravilno čiščenje po trku

#### 4. Ustvarite razred Laser

Implementirajte laserski projektil, ki se premika navzgor in upravlja svoj življenjski cikel:

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

**Ta implementacija razreda:**
- **Razširi** GameObject za podedovanje osnovne funkcionalnosti
- **Nastavi** ustrezne dimenzije za sprite laserja
- **Ustvari** samodejno gibanje navzgor z uporabo `setInterval()`
- **Obravnava** samouničenje ob dosegi vrha zaslona
- **Upravlja** svoj čas animacije in čiščenje

#### 5. Implementirajte sistem zaznavanja trkov

Ustvarite celovit sistem za zaznavanje trkov:

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

**Ta sistem zaznavanja trkov:**
- **Filtrira** objekte igre po vrsti za učinkovito testiranje
- **Preverja** vsak laser proti vsakemu sovražniku za prekrivanja
- **Oddaja** dogodke trkov, ko so prekrivanja zaznana
- **Čisti** uničene objekte po obdelavi trkov

> ⚠️ **Pomembno**: Dodajte `updateGameObjects()` v glavno zanko igre v `window.onload`, da omogočite zaznavanje trkov.

#### 6. Dodajte sistem ohlajanja v razred Hero

Izboljšajte razred Hero z mehaniko streljanja in omejevanjem hitrosti:

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

**Razumevanje izboljšanega razreda Hero:**
- **Inicializira** časovnik ohlajanja na nič (pripravljen za streljanje)
- **Ustvari** laserske objekte, postavljene nad ladjo junaka
- **Nastavi** obdobje ohlajanja za preprečevanje prekomernega streljanja
- **Zmanjšuje** časovnik ohlajanja z uporabo posodobitev na osnovi intervalov
- **Omogoča** preverjanje statusa streljanja prek metode `canFire()`

### Testiranje vaše implementacije

Vaša vesoljska igra zdaj vključuje popolno zaznavanje trkov in mehaniko bojevanja. 🚀 Preizkusite te nove funkcionalnosti:
- **Premikajte se** s puščičnimi tipkami, da preverite kontrole gibanja
- **Streljajte laserje** s preslednico - opazite, kako ohlajanje preprečuje prekomerno streljanje
- **Opazujte trke**, ko laserji zadenejo sovražnike, kar sproži odstranitev
- **Preverite čiščenje**, ko uničeni objekti izginejo iz igre

Uspešno ste implementirali sistem zaznavanja trkov z uporabo istih matematičnih principov, ki usmerjajo navigacijo vesoljskih plovil in robotike.

## GitHub Copilot Agent izziv 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Izboljšajte sistem zaznavanja trkov z implementacijo dodatkov, ki se naključno pojavijo in junaku prinesejo začasne sposobnosti, ko jih pobere.

**Navodilo:** Ustvarite razred PowerUp, ki razširi GameObject, in implementirajte zaznavanje trkov med junakom in dodatki. Dodajte vsaj dve vrsti dodatkov: enega, ki poveča hitrost streljanja (zmanjša čas ohlajanja), in drugega, ki ustvari začasni ščit. Vključite logiko za pojavljanje dodatkov v naključnih intervalih in pozicijah.

---

## 🚀 Izziv

Dodajte eksplozijo! Oglejte si vire igre v [repozitoriju Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) in poskusite dodati eksplozijo, ko laser zadene vesoljca.

## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/36)

## Pregled in samostojno učenje

Eksperimentirajte z intervali v svoji igri do sedaj. Kaj se zgodi, ko jih spremenite? Preberite več o [časovnih dogodkih v JavaScriptu](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Naloga

[Raziščite trke](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.