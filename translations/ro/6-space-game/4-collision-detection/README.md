<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4b1d441cfd31924084956000c0fee5a5",
  "translation_date": "2025-10-24T22:18:02+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 4: Adăugarea unui Laser și Detectarea Coliziunilor

## Quiz înainte de lecție

[Quiz înainte de lecție](https://ff-quizzes.netlify.app/web/quiz/35)

Gândește-te la momentul din Star Wars când torpilele protonice ale lui Luke au lovit portul de evacuare al Death Star. Acea detectare precisă a coliziunii a schimbat soarta galaxiei! În jocuri, detectarea coliziunilor funcționează la fel - determină când obiectele interacționează și ce se întâmplă în continuare.

În această lecție, vei adăuga arme laser jocului tău spațial și vei implementa detectarea coliziunilor. La fel cum planificatorii de misiuni NASA calculează traiectoriile navelor spațiale pentru a evita resturile, vei învăța să detectezi când obiectele din joc se intersectează. Vom împărți acest proces în pași ușor de gestionat care se construiesc unul pe celălalt.

La final, vei avea un sistem de luptă funcțional în care laserele distrug inamicii, iar coliziunile declanșează evenimente în joc. Aceste principii de coliziune sunt utilizate în tot, de la simulări fizice la interfețe web interactive.

✅ Fă puțină cercetare despre primul joc pe calculator scris vreodată. Care era funcționalitatea sa?

## Detectarea coliziunilor

Detectarea coliziunilor funcționează ca senzorii de proximitate de pe modulul lunar Apollo - verifică constant distanțele și declanșează alerte când obiectele se apropie prea mult. În jocuri, acest sistem determină când obiectele interacționează și ce ar trebui să se întâmple în continuare.

Abordarea pe care o vom folosi tratează fiecare obiect din joc ca un dreptunghi, similar modului în care sistemele de control al traficului aerian folosesc forme geometrice simplificate pentru a urmări aeronavele. Această metodă dreptunghiulară poate părea simplistă, dar este eficientă din punct de vedere computațional și funcționează bine pentru majoritatea scenariilor de joc.

### Reprezentarea dreptunghiului

Fiecare obiect din joc are nevoie de limite de coordonate, similar modului în care roverul Mars Pathfinder și-a cartografiat locația pe suprafața marțiană. Iată cum definim aceste limite:

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

**Să descompunem acest lucru:**
- **Marginea de sus**: Este locul unde începe obiectul pe verticală (poziția sa y)
- **Marginea din stânga**: Locul unde începe pe orizontală (poziția sa x)
- **Marginea de jos**: Adaugă înălțimea la poziția y - acum știi unde se termină!
- **Marginea din dreapta**: Adaugă lățimea la poziția x - și ai limitele complete

### Algoritmul de intersecție

Detectarea intersecțiilor dreptunghiurilor folosește o logică similară modului în care telescopul spațial Hubble determină dacă obiectele cerești se suprapun în câmpul său vizual. Algoritmul verifică separarea:

```javascript
function intersectRect(r1, r2) {
  return !(r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top);
}
```

**Testul de separare funcționează ca sistemele radar:**
- Este dreptunghiul 2 complet la dreapta dreptunghiului 1?
- Este dreptunghiul 2 complet la stânga dreptunghiului 1?
- Este dreptunghiul 2 complet sub dreptunghiul 1?
- Este dreptunghiul 2 complet deasupra dreptunghiului 1?

Dacă niciuna dintre aceste condiții nu este adevărată, dreptunghiurile trebuie să se suprapună. Această abordare reflectă modul în care operatorii radar determină dacă două aeronave sunt la distanțe sigure.

## Gestionarea ciclurilor de viață ale obiectelor

Când un laser lovește un inamic, ambele obiecte trebuie eliminate din joc. Totuși, ștergerea obiectelor în mijlocul unui ciclu poate cauza erori - o lecție învățată cu greu în sistemele informatice timpurii, cum ar fi Computerul de Ghidare Apollo. În schimb, folosim o abordare de "marcare pentru ștergere" care elimină în siguranță obiectele între cadre.

Iată cum marcăm ceva pentru eliminare:

```javascript
// Mark object for removal
enemy.dead = true;
```

**De ce funcționează această abordare:**
- Marcăm obiectul ca "mort", dar nu îl ștergem imediat
- Acest lucru permite finalizarea în siguranță a cadrului curent al jocului
- Fără erori cauzate de încercarea de a folosi ceva ce a fost deja eliminat!

Apoi filtrăm obiectele marcate înainte de următorul ciclu de redare:

```javascript
gameObjects = gameObjects.filter(go => !go.dead);
```

**Ce face acest filtru:**
- Creează o listă nouă doar cu obiectele "vii"
- Elimină tot ce este marcat ca mort
- Menține jocul funcțional fără probleme
- Previne acumularea de obiecte distruse în memorie

## Implementarea mecanicii laserului

Proiectilele laser din jocuri funcționează pe același principiu ca torpilele fotonice din Star Trek - sunt obiecte discrete care se deplasează în linie dreaptă până când lovesc ceva. Fiecare apăsare a tastei spațiu creează un nou obiect laser care se mișcă pe ecran.

Pentru ca acest lucru să funcționeze, trebuie să coordonăm câteva piese diferite:

**Componente cheie de implementat:**
- **Crearea** obiectelor laser care apar din poziția eroului
- **Gestionarea** intrării de la tastatură pentru a declanșa crearea laserului
- **Administrarea** mișcării și ciclului de viață al laserului
- **Implementarea** reprezentării vizuale pentru proiectilele laser

## Implementarea controlului ratei de tragere

Ratele de tragere nelimitate ar suprasolicita motorul jocului și ar face jocul prea ușor. Sistemele reale de arme se confruntă cu constrângeri similare - chiar și fazerele navei USS Enterprise aveau nevoie de timp pentru a se reîncărca între focuri.

Vom implementa un sistem de răcire care previne spam-ul de focuri rapide, menținând în același timp controalele receptive:

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

**Cum funcționează sistemul de răcire:**
- Când este creată, arma începe "fierbinte" (nu poate trage încă)
- După perioada de așteptare, devine "rece" (gata de tragere)
- Înainte de a trage, verificăm: "Este arma rece?"
- Acest lucru previne spam-ul de clicuri, menținând în același timp controalele receptive

✅ Consultă lecția 1 din seria de jocuri spațiale pentru a-ți aminti despre sistemele de răcire.

## Construirea sistemului de detectare a coliziunilor

Vei extinde codul existent al jocului spațial pentru a crea un sistem de detectare a coliziunilor. La fel ca sistemul automat de evitare a coliziunilor al Stației Spațiale Internaționale, jocul tău va monitoriza continuu pozițiile obiectelor și va răspunde la intersecții.

Pornind de la codul lecției anterioare, vei adăuga detectarea coliziunilor cu reguli specifice care guvernează interacțiunile obiectelor.

> 💡 **Sfat util**: Sprite-ul laser este deja inclus în folderul de resurse și referit în codul tău, gata de implementare.

### Reguli de coliziune de implementat

**Mecanici de joc de adăugat:**
1. **Laserul lovește inamicul**: Obiectul inamic este distrus când este lovit de un proiectil laser
2. **Laserul lovește marginea ecranului**: Laserul este eliminat când ajunge la marginea de sus a ecranului
3. **Coliziunea între inamic și erou**: Ambele obiecte sunt distruse când se intersectează
4. **Inamicul ajunge jos**: Condiție de sfârșit de joc când inamicii ajung la marginea de jos a ecranului

## Configurarea mediului de dezvoltare

Vești bune - am pregătit deja cea mai mare parte a bazei pentru tine! Toate resursele jocului și structura de bază sunt gata în subfolderul `your-work`, pregătite pentru a adăuga funcțiile interesante de coliziune.

### Structura proiectului

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

**Înțelegerea structurii fișierelor:**
- **Conține** toate imaginile sprite necesare pentru obiectele jocului
- **Include** documentul principal HTML și fișierul aplicației JavaScript
- **Oferă** configurația pachetului pentru serverul local de dezvoltare

### Pornirea serverului de dezvoltare

Navighează la folderul proiectului și pornește serverul local:

```bash
cd your-work
npm start
```

**Această secvență de comenzi:**
- **Schimbă** directorul către folderul proiectului tău de lucru
- **Pornește** un server HTTP local pe `http://localhost:5000`
- **Servește** fișierele jocului pentru testare și dezvoltare
- **Permite** dezvoltarea live cu reîncărcare automată

Deschide browserul și navighează la `http://localhost:5000` pentru a vedea starea actuală a jocului tău cu eroul și inamicii redați pe ecran.

### Implementare pas cu pas

La fel ca abordarea sistematică folosită de NASA pentru a programa nava spațială Voyager, vom implementa detectarea coliziunilor metodic, construind fiecare componentă pas cu pas.

#### 1. Adaugă limitele de coliziune ale dreptunghiului

Mai întâi, să învățăm obiectele din joc cum să-și descrie limitele. Adaugă această metodă la clasa `GameObject`:

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

**Această metodă realizează:**
- **Creează** un obiect dreptunghiular cu coordonate precise ale limitelor
- **Calculează** marginile de jos și de dreapta folosind poziția plus dimensiunile
- **Returnează** un obiect gata pentru algoritmii de detectare a coliziunilor
- **Oferă** o interfață standardizată pentru toate obiectele din joc

#### 2. Implementarea detectării intersecțiilor

Acum să creăm detectivul nostru de coliziuni - o funcție care poate spune când două dreptunghiuri se suprapun:

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

**Acest algoritm funcționează prin:**
- **Testează** patru condiții de separare între dreptunghiuri
- **Returnează** `false` dacă orice condiție de separare este adevărată
- **Indică** coliziunea când nu există separare
- **Folosește** logica de negație pentru testarea eficientă a intersecțiilor

#### 3. Implementarea sistemului de tragere cu laser

Acum lucrurile devin interesante! Să configurăm sistemul de tragere cu laser.

##### Constante de mesaje

Mai întâi, să definim câteva tipuri de mesaje pentru ca diferite părți ale jocului să comunice între ele:

```javascript
KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
```

**Aceste constante oferă:**
- **Standardizează** numele evenimentelor în întreaga aplicație
- **Permite** comunicarea consistentă între sistemele jocului
- **Previne** greșelile de tipar în înregistrarea handlerelor de evenimente

##### Gestionarea intrării de la tastatură

Adaugă detectarea tastei spațiu la listener-ul de evenimente pentru taste:

```javascript
} else if(evt.keyCode === 32) {
  eventEmitter.emit(Messages.KEY_EVENT_SPACE);
}
```

**Acest handler de intrare:**
- **Detectează** apăsările tastei spațiu folosind keyCode 32
- **Emite** un mesaj de eveniment standardizat
- **Permite** logica de tragere decuplată

##### Configurarea listener-ului de evenimente

Înregistrează comportamentul de tragere în funcția `initGame()`:

```javascript
eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
 if (hero.canFire()) {
   hero.fire();
 }
});
```

**Acest listener de evenimente:**
- **Răspunde** la evenimentele tastei spațiu
- **Verifică** starea de răcire a tragerii
- **Declanșează** crearea laserului când este permis

Adaugă gestionarea coliziunilor pentru interacțiunile laser-inamic:

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
  first.dead = true;
  second.dead = true;
});
```

**Acest handler de coliziuni:**
- **Primește** datele evenimentului de coliziune cu ambele obiecte
- **Marchează** ambele obiecte pentru eliminare
- **Asigură** curățarea corespunzătoare după coliziune

#### 4. Creează clasa Laser

Implementează un proiectil laser care se mișcă în sus și își gestionează propriul ciclu de viață:

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

**Această implementare a clasei:**
- **Extinde** GameObject pentru a moșteni funcționalitatea de bază
- **Setează** dimensiuni adecvate pentru sprite-ul laserului
- **Creează** mișcare automată în sus folosind `setInterval()`
- **Gestionează** autodistrugerea când ajunge la marginea de sus a ecranului
- **Administrează** propriul timp de animație și curățare

#### 5. Implementarea sistemului de detectare a coliziunilor

Creează o funcție cuprinzătoare de detectare a coliziunilor:

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

**Acest sistem de coliziuni:**
- **Filtrează** obiectele din joc după tip pentru testare eficientă
- **Testează** fiecare laser împotriva fiecărui inamic pentru intersecții
- **Emite** evenimente de coliziune când sunt detectate intersecții
- **Curăță** obiectele distruse după procesarea coliziunilor

> ⚠️ **Important**: Adaugă `updateGameObjects()` la bucla principală a jocului în `window.onload` pentru a activa detectarea coliziunilor.

#### 6. Adaugă sistemul de răcire la clasa Hero

Îmbunătățește clasa Hero cu mecanici de tragere și limitarea ratei de tragere:

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

**Înțelegerea clasei Hero îmbunătățite:**
- **Inițializează** temporizatorul de răcire la zero (gata de tragere)
- **Creează** obiecte laser poziționate deasupra navei eroului
- **Setează** perioada de răcire pentru a preveni tragerea rapidă
- **Scade** temporizatorul de răcire folosind actualizări bazate pe intervale
- **Oferă** verificarea stării de tragere prin metoda `canFire()`

### Testarea implementării

Jocul tău spațial are acum un sistem complet de detectare a coliziunilor și mecanici de luptă. 🚀 Testează aceste noi funcționalități:
- **Navighează** cu tastele săgeți pentru a verifica controalele de mișcare
- **Trage lasere** cu tasta spațiu - observă cum sistemul de răcire previne spam-ul de clicuri
- **Observă coliziunile** când laserele lovesc inamicii, declanșând eliminarea
- **Verifică curățarea** pe măsură ce obiectele distruse dispar din joc

Ai implementat cu succes un sistem de detectare a coliziunilor folosind aceleași principii matematice care ghidează navigația navelor spațiale și robotica.

## Provocarea Agentului GitHub Copilot 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Îmbunătățește sistemul de detectare a coliziunilor prin implementarea unor power-up-uri care apar aleator și oferă abilități temporare atunci când sunt colectate de nava eroului.

**Prompt:** Creează o clasă PowerUp care extinde GameObject și implementează detectarea coliziunilor între erou și power-up-uri. Adaugă cel puțin două tipuri de power-up-uri: unul care crește rata de tragere (reduce perioada de răcire) și altul care creează un scut temporar. Include logica de apariție care creează power-up-uri la intervale și poziții aleatorii.

---

## 🚀 Provocare

Adaugă o explozie! Aruncă o privire la resursele jocului din [repo-ul Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) și încearcă să adaugi o explozie când laserul lovește un extraterestru.

## Quiz după lecție

[Quiz după lecție](https://ff-quizzes.netlify.app/web/quiz/36)

## Recapitulare & Studiu individual

Experimentează cu intervalele din jocul tău de până acum. Ce se întâmplă când le modifici? Citește mai multe despre [evenimentele de temporizare în JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Temă

[Explorează coliziunile](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru neînțelegerile sau interpretările greșite care pot apărea din utilizarea acestei traduceri.