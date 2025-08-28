<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2e83e38c35dc003f046d7cc0bbfd4920",
  "translation_date": "2025-08-28T07:56:56+00:00",
  "source_file": "6-space-game/4-collision-detection/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 4: Adăugarea unui Laser și Detectarea Coliziunilor

## Chestionar Pre-Lecție

[Chestionar pre-lecție](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/35)

În această lecție vei învăța cum să tragi cu lasere folosind JavaScript! Vom adăuga două lucruri în jocul nostru:

- **Un laser**: acest laser este tras din nava eroului tău și se deplasează vertical în sus
- **Detectarea coliziunilor**, ca parte a implementării capacității de a *trage*, vom adăuga și câteva reguli interesante de joc:
   - **Laserul lovește inamicul**: Inamicul moare dacă este lovit de un laser
   - **Laserul lovește partea de sus a ecranului**: Un laser este distrus dacă lovește partea de sus a ecranului
   - **Coliziunea dintre inamic și erou**: Un inamic și eroul sunt distruși dacă se lovesc unul de altul
   - **Inamicul lovește partea de jos a ecranului**: Un inamic și eroul sunt distruși dacă inamicul ajunge în partea de jos a ecranului

Pe scurt, tu -- *eroul* -- trebuie să lovești toți inamicii cu un laser înainte ca aceștia să ajungă în partea de jos a ecranului.

✅ Fă puțină cercetare despre primul joc pe calculator scris vreodată. Ce funcționalitate avea?

Să fim eroici împreună!

## Detectarea coliziunilor

Cum facem detectarea coliziunilor? Trebuie să ne gândim la obiectele din joc ca la niște dreptunghiuri care se mișcă. De ce, te-ai putea întreba? Ei bine, imaginea folosită pentru a desena un obiect de joc este un dreptunghi: are un `x`, `y`, `lățime` și `înălțime`.

Dacă două dreptunghiuri, adică un erou și un inamic, *se intersectează*, ai o coliziune. Ce ar trebui să se întâmple atunci depinde de regulile jocului. Pentru a implementa detectarea coliziunilor, ai nevoie de următoarele:

1. O metodă de a obține o reprezentare dreptunghiulară a unui obiect de joc, ceva de genul:

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

2. O funcție de comparație, care poate arăta astfel:

   ```javascript
   function intersectRect(r1, r2) {
     return !(r2.left > r1.right ||
       r2.right < r1.left ||
       r2.top > r1.bottom ||
       r2.bottom < r1.top);
   }
   ```

## Cum distrugem lucruri

Pentru a distruge lucruri într-un joc, trebuie să informezi jocul că nu ar mai trebui să deseneze acel obiect în bucla jocului care se declanșează la un anumit interval. O modalitate de a face acest lucru este să marchezi un obiect de joc ca fiind *mort* atunci când se întâmplă ceva, astfel:

```javascript
// collision happened
enemy.dead = true
```

Apoi poți elimina obiectele *moarte* înainte de a redesena ecranul, astfel:

```javascript
gameObjects = gameObject.filter(go => !go.dead);
```

## Cum tragem cu un laser

Tragerea cu un laser înseamnă să răspunzi la un eveniment de tastatură și să creezi un obiect care se mișcă într-o anumită direcție. Prin urmare, trebuie să parcurgem următorii pași:

1. **Creează un obiect laser**: din partea de sus a navei eroului, care, odată creat, începe să se deplaseze în sus spre partea de sus a ecranului.
2. **Atașează cod la un eveniment de tastatură**: trebuie să alegem o tastă de pe tastatură care să reprezinte acțiunea de a trage cu laserul.
3. **Creează un obiect de joc care arată ca un laser** atunci când tasta este apăsată.

## Cooldown pentru laser

Laserul trebuie să fie tras de fiecare dată când apeși o tastă, cum ar fi *space*. Pentru a preveni ca jocul să producă prea multe lasere într-un timp scurt, trebuie să rezolvăm acest lucru. Soluția este implementarea unui așa-numit *cooldown*, un cronometru, care asigură că un laser poate fi tras doar la anumite intervale. Poți implementa acest lucru astfel:

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

✅ Consultă lecția 1 din seria jocului spațial pentru a-ți reaminti despre *cooldowns*.

## Ce să construiești

Vei lua codul existent (pe care ar fi trebuit să-l cureți și să-l refactorizezi) din lecția anterioară și îl vei extinde. Poți începe fie cu codul din partea a II-a, fie cu codul din [Partea III - starter](../../../../../../../../../your-work).

> sfat: laserul cu care vei lucra este deja în folderul tău de resurse și este referit de codul tău

- **Adaugă detectarea coliziunilor**, când un laser se ciocnește cu ceva, următoarele reguli ar trebui să se aplice:
   1. **Laserul lovește inamicul**: inamicul moare dacă este lovit de un laser
   2. **Laserul lovește partea de sus a ecranului**: Un laser este distrus dacă lovește partea de sus a ecranului
   3. **Coliziunea dintre inamic și erou**: un inamic și eroul sunt distruși dacă se lovesc unul de altul
   4. **Inamicul lovește partea de jos a ecranului**: Un inamic și eroul sunt distruși dacă inamicul ajunge în partea de jos a ecranului

## Pași recomandați

Găsește fișierele care au fost create pentru tine în subfolderul `your-work`. Acesta ar trebui să conțină următoarele:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Pornește proiectul din folderul `your_work` tastând:

```bash
cd your-work
npm start
```

Comanda de mai sus va porni un server HTTP la adresa `http://localhost:5000`. Deschide un browser și introdu acea adresă, iar în acest moment ar trebui să afișeze eroul și toți inamicii, dar nimic nu se mișcă - încă :).

### Adaugă cod

1. **Configurează o reprezentare dreptunghiulară a obiectului tău de joc pentru a gestiona coliziunile** Codul de mai jos îți permite să obții o reprezentare dreptunghiulară a unui `GameObject`. Editează clasa GameObject pentru a o extinde:

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

2. **Adaugă cod care verifică coliziunile** Aceasta va fi o funcție nouă care testează dacă două dreptunghiuri se intersectează:

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

3. **Adaugă capacitatea de a trage cu laserul**
   1. **Adaugă un mesaj pentru evenimentul de tastatură**. Tasta *space* ar trebui să creeze un laser chiar deasupra navei eroului. Adaugă trei constante în obiectul Messages:

       ```javascript
        KEY_EVENT_SPACE: "KEY_EVENT_SPACE",
        COLLISION_ENEMY_LASER: "COLLISION_ENEMY_LASER",
        COLLISION_ENEMY_HERO: "COLLISION_ENEMY_HERO",
       ```

   1. **Gestionează tasta space**. Editează funcția `window.addEventListener` pentru evenimentul keyup pentru a gestiona tasta space:

      ```javascript
        } else if(evt.keyCode === 32) {
          eventEmitter.emit(Messages.KEY_EVENT_SPACE);
        }
      ```

    1. **Adaugă ascultători**. Editează funcția `initGame()` pentru a te asigura că eroul poate trage când tasta space este apăsată:

       ```javascript
       eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if (hero.canFire()) {
          hero.fire();
        }
       ```

       și adaugă o nouă funcție `eventEmitter.on()` pentru a asigura comportamentul atunci când un inamic se ciocnește cu un laser:

          ```javascript
          eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
            first.dead = true;
            second.dead = true;
          })
          ```

   1. **Mișcă obiectul**, Asigură-te că laserul se deplasează treptat spre partea de sus a ecranului. Vei crea o nouă clasă Laser care extinde `GameObject`, așa cum ai făcut înainte: 
   
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

   1. **Gestionează coliziunile**, Implementează regulile de coliziune pentru laser. Adaugă o funcție `updateGameObjects()` care testează obiectele care se ciocnesc:

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

      Asigură-te că adaugi `updateGameObjects()` în bucla jocului din `window.onload`.

   4. **Implementează cooldown** pentru laser, astfel încât să poată fi tras doar la anumite intervale.

      În cele din urmă, editează clasa Hero astfel încât să poată gestiona cooldown-ul:

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

În acest moment, jocul tău are ceva funcționalitate! Poți naviga cu tastele săgeți, trage cu laserul folosind tasta space, iar inamicii dispar când îi lovești. Bravo!

---

## 🚀 Provocare

Adaugă o explozie! Uită-te la resursele jocului din [repo-ul Space Art](../../../../6-space-game/solution/spaceArt/readme.txt) și încearcă să adaugi o explozie atunci când laserul lovește un extraterestru.

## Chestionar Post-Lecție

[Chestionar post-lecție](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/36)

## Recapitulare și Studiu Individual

Experimentează cu intervalele din jocul tău de până acum. Ce se întâmplă când le schimbi? Citește mai multe despre [evenimentele de temporizare în JavaScript](https://www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/).

## Temă

[Explorează coliziunile](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.