<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-28T07:55:15+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 5: Scor și Vieți

## Chestionar Pre-Lecție

[Chestionar pre-lecție](https://ff-quizzes.netlify.app/web/quiz/37)

În această lecție, vei învăța cum să adaugi un sistem de scor într-un joc și cum să calculezi viețile.

## Afișarea textului pe ecran

Pentru a putea afișa scorul jocului pe ecran, trebuie să știi cum să plasezi text pe ecran. Răspunsul este utilizarea metodei `fillText()` pe obiectul canvas. De asemenea, poți controla alte aspecte, cum ar fi fontul utilizat, culoarea textului și chiar alinierea acestuia (stânga, dreapta, centru). Mai jos este un exemplu de cod care afișează text pe ecran.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Citește mai multe despre [cum să adaugi text pe un canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) și simte-te liber să-l faci să arate mai interesant!

## Viața, ca un concept de joc

Conceptul de viață într-un joc este doar un număr. În contextul unui joc spațial, este obișnuit să atribui un set de vieți care sunt scăzute una câte una atunci când nava ta suferă daune. Este plăcut să poți arăta o reprezentare grafică a acestora, cum ar fi mini-nave sau inimi, în loc de un număr.

## Ce să construiești

Adaugă următoarele în jocul tău:

- **Scorul jocului**: Pentru fiecare navă inamică distrusă, eroul ar trebui să primească puncte, sugerăm 100 de puncte per navă. Scorul jocului ar trebui să fie afișat în colțul din stânga jos.
- **Viață**: Nava ta are trei vieți. Pierzi o viață de fiecare dată când o navă inamică se ciocnește de tine. Scorul vieții ar trebui să fie afișat în colțul din dreapta jos și să fie reprezentat grafic prin următoarea imagine ![imagine viață](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.ro.png).

## Pași recomandați

Localizează fișierele care au fost create pentru tine în subfolderul `your-work`. Acesta ar trebui să conțină următoarele:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Pornește proiectul tău din folderul `your_work` tastând:

```bash
cd your-work
npm start
```

Comanda de mai sus va porni un server HTTP la adresa `http://localhost:5000`. Deschide un browser și introdu această adresă; în acest moment ar trebui să afișeze eroul și toți inamicii, iar când apeși săgețile stânga și dreapta, eroul se mișcă și poate doborî inamicii.

### Adaugă cod

1. **Copiază resursele necesare** din folderul `solution/assets/` în folderul `your-work`; vei adăuga resursa `life.png`. Adaugă `lifeImg` în funcția `window.onload`: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Adaugă `lifeImg` în lista de resurse:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Adaugă variabile**. Adaugă cod care să reprezinte scorul total (0) și viețile rămase (3), afișează aceste scoruri pe ecran.

3. **Extinde funcția `updateGameObjects()`**. Extinde funcția `updateGameObjects()` pentru a gestiona coliziunile cu inamicii:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Adaugă `life` și `points`**. 
   1. **Inițializează variabilele**. Sub `this.cooldown = 0` în clasa `Hero`, setează viața și punctele:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Afișează variabilele pe ecran**. Desenează aceste valori pe ecran:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Adaugă metode în bucla jocului**. Asigură-te că adaugi aceste funcții în funcția `window.onload` sub `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementează regulile jocului**. Implementează următoarele reguli:

   1. **Pentru fiecare coliziune între erou și inamic**, scade o viață.
   
      Extinde clasa `Hero` pentru a face această scădere:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Pentru fiecare laser care lovește un inamic**, crește scorul jocului cu 100 de puncte.

      Extinde clasa `Hero` pentru a face această creștere:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Adaugă aceste funcții în emițătoarele de evenimente pentru coliziuni:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Fă puțină cercetare pentru a descoperi alte jocuri create folosind JavaScript/Canvas. Care sunt trăsăturile lor comune?

La finalul acestei lucrări, ar trebui să vezi micile nave 'viață' în colțul din dreapta jos, punctele în colțul din stânga jos și ar trebui să vezi cum numărul de vieți scade când te ciocnești cu inamicii și cum punctele cresc când dobori inamicii. Bravo! Jocul tău este aproape complet.

---

## 🚀 Provocare

Codul tău este aproape complet. Poți să-ți imaginezi următorii pași?

## Chestionar Post-Lecție

[Chestionar post-lecție](https://ff-quizzes.netlify.app/web/quiz/38)

## Recapitulare și Studiu Individual

Cercetează câteva modalități prin care poți crește sau scădea scorurile și viețile în jocuri. Există câteva motoare de joc interesante, cum ar fi [PlayFab](https://playfab.com). Cum ar putea utilizarea unuia dintre acestea să îmbunătățească jocul tău?

## Temă

[Construiește un Joc cu Scor](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.