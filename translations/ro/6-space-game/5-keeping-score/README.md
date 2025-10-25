<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-24T22:19:09+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 5: Scor și Vieți

## Chestionar Pre-Lecție

[Chestionar pre-lecție](https://ff-quizzes.netlify.app/web/quiz/37)

Ești pregătit să faci ca jocul tău spațial să se simtă ca un joc adevărat? Hai să adăugăm puncte de scor și gestionarea vieților - mecanici de bază care au transformat jocurile arcade timpurii precum Space Invaders din simple demonstrații în divertisment captivant. Aici jocul tău devine cu adevărat jucabil.

## Afișarea Textului pe Ecran - Vocea Jocului Tău

Pentru a afișa scorul, trebuie să învățăm cum să redăm text pe canvas. Metoda `fillText()` este instrumentul tău principal pentru asta - este aceeași tehnică folosită în jocurile arcade clasice pentru a afișa scoruri și informații de stare.

Ai control complet asupra aspectului textului:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Află mai multe despre [adăugarea textului pe un canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - s-ar putea să fii surprins de cât de creativ poți fi cu fonturile și stilurile!

## Viețile - Mai Mult Decât Doar un Număr

În designul jocurilor, o "viață" reprezintă marja de eroare a jucătorului. Acest concept datează de la mașinile de pinball, unde primeai mai multe bile pentru a juca. În jocurile video timpurii precum Asteroids, viețile le ofereau jucătorilor permisiunea de a-și asuma riscuri și de a învăța din greșeli.

Reprezentarea vizuală contează semnificativ - afișarea unor pictograme cu nave în loc de simplul "Vieți: 3" creează o recunoaștere vizuală imediată, similar cu modul în care cabinetele arcade timpurii foloseau iconografia pentru a comunica dincolo de barierele lingvistice.

## Construirea Sistemului de Recompense al Jocului Tău

Acum vom implementa sistemele de feedback de bază care mențin jucătorii implicați:

- **Sistem de scor**: Fiecare navă inamică distrusă oferă 100 de puncte (numerele rotunde sunt mai ușor de calculat mental pentru jucători). Scorul va fi afișat în colțul din stânga jos.
- **Contor de vieți**: Eroul tău începe cu trei vieți - un standard stabilit de jocurile arcade timpurii pentru a echilibra provocarea cu jucabilitatea. Fiecare coliziune cu un inamic costă o viață. Vom afișa viețile rămase în colțul din dreapta jos folosind pictograme cu nave ![imagine viață](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.ro.png).

## Să Începem Construcția!

Mai întâi, configurează-ți spațiul de lucru. Navighează la fișierele din subfolderul `your-work`. Ar trebui să vezi aceste fișiere:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Pentru a testa jocul, pornește serverul de dezvoltare din folderul `your_work`:

```bash
cd your-work
npm start
```

Acest lucru va rula un server local la `http://localhost:5000`. Deschide această adresă în browser pentru a-ți vedea jocul. Testează controalele cu tastele săgeți și încearcă să tragi în inamici pentru a verifica dacă totul funcționează.

### E timpul să scriem cod!

1. **Obține resursele vizuale de care ai nevoie**. Copiază fișierul `life.png` din folderul `solution/assets/` în folderul tău `your-work`. Apoi adaugă `lifeImg` în funcția ta window.onload: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Nu uita să adaugi `lifeImg` în lista ta de resurse:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Configurează variabilele jocului tău**. Adaugă ceva cod pentru a urmări scorul total (începând de la 0) și viețile rămase (începând de la 3). Le vom afișa pe ecran astfel încât jucătorii să știe mereu unde se află.

3. **Implementează detectarea coliziunilor**. Extinde funcția ta `updateGameObjects()` pentru a detecta când inamicii se ciocnesc cu eroul tău:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Adaugă urmărirea vieților și punctelor pentru Eroul tău**. 
   1. **Inițializează contoarele**. Sub `this.cooldown = 0` în clasa ta `Hero`, configurează viețile și punctele:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Afișează aceste valori jucătorului**. Creează funcții pentru a desena aceste valori pe ecran:

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

   1. **Integrează totul în bucla jocului tău**. Adaugă aceste funcții în funcția ta window.onload imediat după `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementează consecințele și recompensele jocului**. Acum vom adăuga sistemele de feedback care fac acțiunile jucătorului semnificative:

   1. **Coliziunile costă vieți**. De fiecare dată când eroul tău se ciocnește cu un inamic, ar trebui să pierzi o viață.
   
      Adaugă această metodă în clasa ta `Hero`:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Împușcarea inamicilor aduce puncte**. Fiecare lovitură reușită oferă 100 de puncte, oferind un feedback pozitiv imediat pentru o țintire precisă.

      Extinde clasa Hero cu această metodă de incrementare:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Acum conectează aceste funcții la evenimentele de coliziune:

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

✅ Curios despre alte jocuri construite cu JavaScript și Canvas? Fă câteva cercetări - s-ar putea să fii uimit de ceea ce este posibil!

După ce implementezi aceste funcții, testează-ți jocul pentru a vedea sistemul complet de feedback în acțiune. Ar trebui să vezi pictogramele vieților în colțul din dreapta jos, scorul tău în colțul din stânga jos și să observi cum coliziunile reduc viețile, în timp ce loviturile reușite îți cresc scorul.

Jocul tău are acum mecanicile esențiale care au făcut jocurile arcade timpurii atât de captivante - obiective clare, feedback imediat și consecințe semnificative pentru acțiunile jucătorului.

---

## Provocarea Agentului GitHub Copilot 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Îmbunătățește sistemul de scor al jocului spațial implementând o funcție de scor maxim cu stocare persistentă și mecanici de punctaj bonus.

**Instrucțiuni:** Creează un sistem de scor maxim care salvează cel mai bun scor al jucătorului în localStorage. Adaugă puncte bonus pentru eliminări consecutive de inamici (sistem de combo) și implementează valori diferite de punctaj pentru diferite tipuri de inamici. Include un indicator vizual atunci când jucătorul atinge un nou scor maxim și afișează scorul maxim curent pe ecranul jocului.



## 🚀 Provocare

Acum ai un joc funcțional cu scor și vieți. Gândește-te ce alte funcții ar putea îmbunătăți experiența jucătorului.

## Chestionar Post-Lecție

[Chestionar post-lecție](https://ff-quizzes.netlify.app/web/quiz/38)

## Recapitulare & Studiu Individual

Vrei să explorezi mai mult? Cercetează diferite abordări pentru sistemele de scor și vieți în jocuri. Există motoare de joc fascinante precum [PlayFab](https://playfab.com) care gestionează scoruri, clasamente și progresul jucătorilor. Cum ar putea integrarea unui astfel de sistem să ducă jocul tău la nivelul următor?

## Temă

[Construiește un Joc cu Scor](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.