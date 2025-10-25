<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-25T00:13:16+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, dio 4: Dodavanje lasera i otkrivanje sudara

## Kviz prije predavanja

[Pre-predavački kviz](https://ff-quizzes.netlify.app/web/quiz/35)

Sjetite se trenutka u Star Warsu kada su protonski torpedi Lukea pogodili ispušni otvor Zvijezde smrti. Ta precizna detekcija sudara promijenila je sudbinu galaksije! U igrama, detekcija sudara funkcionira na isti način - određuje kada objekti međusobno djeluju i što se događa nakon toga.

U ovoj lekciji dodat ćete lasersko oružje svojoj svemirskoj igri i implementirati detekciju sudara. Baš kao što NASA-ini planeri misija izračunavaju putanje svemirskih letjelica kako bi izbjegli krhotine, naučit ćete otkriti kada se objekti u igri presijecaju. Razložit ćemo to na korake koji se mogu lako pratiti.

Na kraju, imat ćete funkcionalni sustav borbe u kojem laseri uništavaju neprijatelje, a sudari pokreću događaje u igri. Isti principi detekcije sudara koriste se u svemu, od simulacija fizike do interaktivnih web sučelja.

✅ Malo istražite o prvoj računalnoj igri ikada napisanoj. Koja je bila njezina funkcionalnost?

## Detekcija sudara

Detekcija sudara funkcionira poput senzora blizine na lunarnom modulu Apollo - stalno provjerava udaljenosti i pokreće upozorenja kada se objekti previše približe. U igrama, ovaj sustav određuje kada objekti međusobno djeluju i što bi se trebalo dogoditi.

Pristup koji ćemo koristiti tretira svaki objekt igre kao pravokutnik, slično kako sustavi za kontrolu zračnog prometa koriste pojednostavljene geometrijske oblike za praćenje zrakoplova. Ova metoda pravokutnika može se činiti osnovnom, ali je računalno učinkovita i dobro funkcionira za većinu scenarija u igrama.

### Predstavljanje pravokutnika

Svaki objekt igre treba granice koordinata, slično kako je rover Mars Pathfinder mapirao svoju lokaciju na površini Marsa. Evo kako definiramo te granice koordinata:

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

**Razložimo ovo:**
- **Gornji rub**: To je samo mjesto gdje vaš objekt počinje vertikalno (njegova y pozicija)
- **Lijevi rub**: Mjesto gdje počinje horizontalno (njegova x pozicija)
- **Donji rub**: Dodajte visinu na y poziciju - sada znate gdje završava!
- **Desni rub**: Dodajte širinu na x poziciju - i imate kompletne granice

### Algoritam presijecanja

Otkrivanje presijecanja pravokutnika koristi logiku sličnu onoj kako svemirski teleskop Hubble određuje preklapanje nebeskih objekata u svom vidnom polju. Algoritam provjerava razdvojenost:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Test razdvojenosti funkcionira poput radarskih sustava:**
- Je li pravokutnik 2 potpuno desno od pravokutnika 1?
- Je li pravokutnik 2 potpuno lijevo od pravokutnika 1?
- Je li pravokutnik 2 potpuno ispod pravokutnika 1?
- Je li pravokutnik 2 potpuno iznad pravokutnika 1?

Ako nijedan od ovih uvjeta nije istinit, pravokutnici se moraju preklapati. Ovaj pristup odražava način na koji operateri radara određuju jesu li dva zrakoplova na sigurnoj udaljenosti.

## Upravljanje životnim ciklusom objekata

Kada laser pogodi neprijatelja, oba objekta moraju biti uklonjena iz igre. Međutim, brisanje objekata usred petlje može uzrokovati rušenje - lekcija naučena na teži način u ranim računalnim sustavima poput Apollo Guidance Computer. Umjesto toga, koristimo pristup "označavanja za brisanje" koji sigurno uklanja objekte između okvira.

Evo kako označavamo nešto za uklanjanje:

```javascript
// Mark object for removal
enemy.dead = true;
```

**Zašto ovaj pristup funkcionira:**
- Označavamo objekt kao "mrtav", ali ga ne brišemo odmah
- To omogućuje trenutnom okviru igre da se sigurno završi
- Nema rušenja zbog pokušaja korištenja nečega što je već uklonjeno!

Zatim filtriramo označene objekte prije sljedećeg ciklusa renderiranja:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Što ovo filtriranje radi:**
- Stvara svježi popis samo s "živim" objektima
- Izbacuje sve što je označeno kao mrtvo
- Održava vašu igru glatkom
- Sprječava nakupljanje uništenih objekata u memoriji

## Implementacija mehanike lasera

Projektili lasera u igrama funkcioniraju na istom principu kao fotonski torpedi u Zvjezdanim stazama - to su diskretni objekti koji putuju ravno dok ne udare u nešto. Svaki pritisak na razmaknicu stvara novi laserski objekt koji se kreće preko ekrana.

Da bi ovo funkcioniralo, trebamo koordinirati nekoliko različitih dijelova:

**Ključne komponente za implementaciju:**
- **Stvaranje** laserskih objekata koji se pojavljuju iz pozicije heroja
- **Rukovanje** unosom s tipkovnice za pokretanje stvaranja lasera
- **Upravljanje** kretanjem lasera i životnim ciklusom
- **Implementacija** vizualnog prikaza za laserske projektile

## Implementacija kontrole brzine pucanja

Neograničene brzine pucanja preopteretile bi motor igre i učinile igru prelaganom. Pravi sustavi oružja suočavaju se sa sličnim ograničenjima - čak su i fazeri USS Enterprisea trebali vrijeme za ponovno punjenje između pucanja.

Implementirat ćemo sustav hlađenja koji sprječava prekomjerno pucanje, a istovremeno održava responzivne kontrole:

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

**Kako sustav hlađenja funkcionira:**
- Kada se stvori, oružje postaje "vruće" (ne može pucati još)
- Nakon isteka vremena, postaje "hladno" (spremno za pucanje)
- Prije pucanja provjeravamo: "Je li oružje hladno?"
- Ovo sprječava prekomjerno klikanje, a istovremeno održava responzivne kontrole

✅ Pogledajte lekciju 1 u seriji svemirske igre kako biste se podsjetili na sustave hlađenja.

## Izgradnja sustava detekcije sudara

Proširit ćete postojeći kod svoje svemirske igre kako biste stvorili sustav detekcije sudara. Kao automatizirani sustav izbjegavanja sudara Međunarodne svemirske postaje, vaša igra će kontinuirano pratiti pozicije objekata i reagirati na presijecanja.

Počevši od koda iz prethodne lekcije, dodat ćete detekciju sudara s posebnim pravilima koja upravljaju interakcijama objekata.

> 💡 **Pro Savjet**: Sprite za laser već je uključen u vašu mapu s resursima i referenciran u vašem kodu, spreman za implementaciju.

### Pravila sudara za implementaciju

**Mehanika igre za dodavanje:**
1. **Laser pogodi neprijatelja**: Objekt neprijatelja se uništava kada ga pogodi laserski projektil
2. **Laser pogodi granicu ekrana**: Laser se uklanja kada dosegne gornji rub ekrana
3. **Sudar neprijatelja i heroja**: Oba objekta se uništavaju kada se presijeku
4. **Neprijatelj dosegne dno**: Uvjet za kraj igre kada neprijatelji dosegnu donji rub ekrana

## Postavljanje vašeg razvojnog okruženja

Dobre vijesti - već smo postavili većinu temelja za vas! Svi vaši resursi igre i osnovna struktura čekaju u podmapi `your-work`, spremni za dodavanje cool značajki sudara.

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

**Razumijevanje strukture datoteka:**
- **Sadrži** sve slike spriteova potrebne za objekte igre
- **Uključuje** glavni HTML dokument i JavaScript aplikacijsku datoteku
- **Pruža** konfiguraciju paketa za lokalni razvojni server

### Pokretanje razvojnog servera

Navigirajte do svoje mape projekta i pokrenite lokalni server:

```bash
cd your-work
npm start
```

**Ova sekvenca naredbi:**
- **Mijenja** direktorij na vašu radnu mapu projekta
- **Pokreće** lokalni HTTP server na `http://localhost:5000`
- **Poslužuje** vaše datoteke igre za testiranje i razvoj
- **Omogućuje** razvoj uživo s automatskim osvježavanjem

Otvorite svoj preglednik i idite na `http://localhost:5000` kako biste vidjeli trenutno stanje svoje igre s prikazanim herojem i neprijateljima na ekranu.

### Implementacija korak po korak

Kao sustavni pristup koji je NASA koristila za programiranje svemirske letjelice Voyager, implementirat ćemo detekciju sudara metodično, gradeći svaki komponent korak po korak.

#### 1. Dodavanje granica sudara pravokutnika

Prvo, naučimo naše objekte igre kako opisati svoje granice. Dodajte ovu metodu svojoj klasi `GameObject`:

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

**Ova metoda omogućuje:**
- **Stvara** objekt pravokutnika s preciznim granicama koordinata
- **Izračunava** donje i desne rubove koristeći poziciju plus dimenzije
- **Vraća** objekt spreman za algoritme detekcije sudara
- **Pruža** standardizirano sučelje za sve objekte igre

#### 2. Implementacija detekcije presijecanja

Sada kreirajmo našeg detektiva sudara - funkciju koja može reći kada se dva pravokutnika preklapaju:

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

**Ovaj algoritam funkcionira tako da:**
- **Testira** četiri uvjeta razdvojenosti između pravokutnika
- **Vraća** `false` ako je bilo koji uvjet razdvojenosti istinit
- **Ukazuje** na sudar kada ne postoji razdvojenost
- **Koristi** logiku negacije za učinkovito testiranje presijecanja

#### 3. Implementacija sustava za pucanje lasera

Evo gdje postaje uzbudljivo! Postavimo sustav za pucanje lasera.

##### Konstantne poruke

Prvo, definirajmo neke vrste poruka kako bi različiti dijelovi naše igre mogli međusobno komunicirati:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Ove konstante omogućuju:**
- **Standardiziraju** nazive događaja u cijeloj aplikaciji
- **Omogućuju** dosljednu komunikaciju između sustava igre
- **Sprječavaju** tipografske pogreške u registraciji rukovatelja događajima

##### Rukovanje unosom s tipkovnice

Dodajte detekciju pritiska razmaknice svom slušatelju događaja na tipkovnici:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Ovaj rukovatelj unosa:**
- **Detektira** pritiske razmaknice koristeći keyCode 32
- **Emitira** standardiziranu poruku događaja
- **Omogućuje** odvojenu logiku pucanja

##### Postavljanje slušatelja događaja

Registrirajte ponašanje pucanja u svojoj funkciji `initGame()`:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Ovaj slušatelj događaja:**
- **Reagira** na događaje pritiska razmaknice
- **Provjerava** status hlađenja za pucanje
- **Pokreće** stvaranje lasera kada je dopušteno

Dodajte rukovanje sudarima za interakcije između lasera i neprijatelja:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Ovaj rukovatelj sudara:**
- **Prima** podatke o događaju sudara s oba objekta
- **Označava** oba objekta za uklanjanje
- **Osigurava** pravilno čišćenje nakon sudara

#### 4. Kreiranje klase Laser

Implementirajte laserski projektil koji se kreće prema gore i upravlja vlastitim životnim ciklusom:

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

**Ova implementacija klase:**
- **Proširuje** GameObject za nasljeđivanje osnovne funkcionalnosti
- **Postavlja** odgovarajuće dimenzije za sprite lasera
- **Stvara** automatsko kretanje prema gore koristeći `setInterval()`
- **Rukuje** samouništenjem kada dosegne vrh ekrana
- **Upravlja** vlastitim vremenskim animacijama i čišćenjem

#### 5. Implementacija sustava detekcije sudara

Kreirajte sveobuhvatnu funkciju za detekciju sudara:

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

**Ovaj sustav sudara:**
- **Filtrira** objekte igre po tipu za učinkovito testiranje
- **Testira** svaki laser protiv svakog neprijatelja za presijecanja
- **Emitira** događaje sudara kada se otkriju presijecanja
- **Čisti** uništene objekte nakon obrade sudara

> ⚠️ **Važno**: Dodajte `updateGameObjects()` u glavnu petlju igre u `window.onload` kako biste omogućili detekciju sudara.

#### 6. Dodavanje sustava hlađenja u klasu Hero

Poboljšajte klasu Hero s mehanikom pucanja i ograničenjem brzine:

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

**Razumijevanje poboljšane klase Hero:**
- **Inicijalizira** timer hlađenja na nulu (spremno za pucanje)
- **Stvara** objekte lasera pozicionirane iznad herojske letjelice
- **Postavlja** period hlađenja kako bi spriječio prekomjerno pucanje
- **Smanjuje** timer hlađenja koristeći ažuriranja temeljena na intervalu
- **Pruža** provjeru statusa pucanja kroz metodu `canFire()`

### Testiranje vaše implementacije

Vaša svemirska igra sada ima kompletan sustav detekcije sudara i mehaniku borbe. 🚀 Testirajte ove nove mogućnosti:
- **Navigirajte** strelicama kako biste provjerili kontrole kretanja
- **Pucajte lasere** razmaknicom - primijetite kako sustav hlađenja sprječava prekomjerno klikanje
- **Promatrajte sudare** kada laseri pogode neprijatelje, pokrećući uklanjanje
- **Provjerite čišćenje** kako uništeni objekti nestaju iz igre

Uspješno ste implementirali sustav detekcije sudara koristeći iste matematičke principe koji vode navigaciju svemirskih letjelica i robotiku.

## GitHub Copilot Agent izazov 🚀

Koristite Agent način za dovršavanje sljedećeg izazova:

**Opis:** Poboljšajte sustav detekcije sudara implementacijom power-upova koji se nasumično pojavljuju i pružaju privremene sposobnosti kada ih pokupi herojska letjelica.

**Zadatak:** Kreirajte klasu PowerUp koja proširuje GameObject i implementirajte detekciju sudara između heroja i power-upova. Dodajte najmanje dvije vrste power-upova: jedan koji povećava brzinu pucanja (smanjuje hlađenje) i drugi koji stvara privremeni štit. Uključite logiku za stvaranje power-upova u nasumičnim intervalima i pozicijama.

---

## 🚀 Izazov

Dodajte eksploziju! Pogledajte resurse igre u [repozitoriju Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) i pokušajte dodati eksploziju kada laser pogodi vanzemaljca.

## Kviz nakon predavanja

[Post-predavački kviz](https://ff-quizzes.netlify.app/web/quiz/36)

## Pregled i samostalno učenje

Eksperimentirajte s intervalima u svojoj igri do sada. Što se događa kada ih promijenite? Pročitajte više o [JavaScript vremenskim događajima](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Zadatak

[Istražite sudare](assignment.md)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije nastale korištenjem ovog prijevoda.