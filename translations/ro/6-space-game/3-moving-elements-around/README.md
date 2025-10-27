<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "022bbb5c869091b98f19e408e0c51d5d",
  "translation_date": "2025-10-24T22:15:58+00:00",
  "source_file": "6-space-game/3-moving-elements-around/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 3: Adăugarea Mișcării

Gândește-te la jocurile tale preferate – ceea ce le face captivante nu sunt doar grafica frumoasă, ci modul în care totul se mișcă și răspunde la acțiunile tale. În acest moment, jocul tău spațial este ca o pictură frumoasă, dar suntem pe cale să adăugăm mișcare care să-l aducă la viață.

Când inginerii NASA au programat computerul de ghidare pentru misiunile Apollo, s-au confruntat cu o provocare similară: cum faci ca o navă spațială să răspundă la comenzile pilotului, menținând în același timp corecțiile automate de curs? Principiile pe care le vom învăța astăzi reflectă aceleași concepte – gestionarea mișcării controlate de jucător alături de comportamentele automate ale sistemului.

În această lecție, vei învăța cum să faci navele spațiale să alunece pe ecran, să răspundă la comenzile jucătorului și să creezi modele de mișcare fluide. Vom împărți totul în concepte gestionabile care se construiesc în mod natural unul pe celălalt.

La final, jucătorii vor putea să-și piloteze nava erou pe ecran, în timp ce navele inamice patrulează deasupra. Mai important, vei înțelege principiile de bază care stau la baza sistemelor de mișcare din jocuri.

## Test înainte de lecție

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/33)

## Înțelegerea mișcării în jocuri

Jocurile prind viață atunci când lucrurile încep să se miște, iar în mod fundamental există două moduri prin care se întâmplă acest lucru:

- **Mișcare controlată de jucător**: Când apeși o tastă sau dai clic pe mouse, ceva se mișcă. Aceasta este conexiunea directă între tine și lumea jocului.
- **Mișcare automată**: Când jocul însuși decide să miște lucrurile – cum ar fi acele nave inamice care trebuie să patruleze pe ecran, indiferent dacă faci ceva sau nu.

A face obiectele să se miște pe un ecran de computer este mai simplu decât ai putea crede. Îți amintești de coordonatele x și y de la ora de matematică? Exact cu asta lucrăm aici. Când Galileo a urmărit lunile lui Jupiter în 1610, practic făcea același lucru – trasa poziții în timp pentru a înțelege modelele de mișcare.

Mișcarea obiectelor pe ecran este ca și cum ai crea o animație de tip flipbook – trebuie să urmezi acești trei pași simpli:

1. **Actualizează poziția** – Schimbă locul unde ar trebui să fie obiectul (poate mută-l 5 pixeli spre dreapta)
2. **Șterge cadrul vechi** – Curăță ecranul astfel încât să nu vezi urme fantomatice peste tot
3. **Desenează cadrul nou** – Plasează obiectul în noua sa poziție

Fă acest lucru suficient de rapid și boom! Ai o mișcare fluidă care se simte natural pentru jucători.

Iată cum poate arăta acest lucru în cod:

```javascript
// Set the hero's location
hero.x += 5;
// Clear the rectangle that hosts the hero
ctx.clearRect(0, 0, canvas.width, canvas.height);
// Redraw the game background and hero
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.drawImage(heroImg, hero.x, hero.y);
```

**Ce face acest cod:**
- **Actualizează** coordonata x a eroului cu 5 pixeli pentru a-l mișca orizontal
- **Șterge** întreaga zonă a canvas-ului pentru a elimina cadrul anterior
- **Umple** canvas-ul cu o culoare de fundal neagră
- **Redesenează** imaginea eroului în noua sa poziție

✅ Poți să te gândești la un motiv pentru care redesenarea eroului de mai multe ori pe secundă ar putea genera costuri de performanță? Citește despre [alternative la acest model](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas).

## Gestionarea evenimentelor de tastatură

Aici conectăm input-ul jucătorului la acțiunea din joc. Când cineva apasă bara de spațiu pentru a trage un laser sau apasă o săgeată pentru a evita un asteroid, jocul tău trebuie să detecteze și să răspundă la acel input.

Evenimentele de tastatură se întâmplă la nivelul ferestrei, ceea ce înseamnă că întreaga fereastră a browserului ascultă acele apăsări de taste. Click-urile de mouse, pe de altă parte, pot fi legate de elemente specifice (cum ar fi clicul pe un buton). Pentru jocul nostru spațial, ne vom concentra pe controalele de tastatură, deoarece acestea oferă jucătorilor acea senzație clasică de arcade.

Acest lucru îmi amintește de cum operatorii de telegraf din anii 1800 trebuiau să traducă input-ul codului Morse în mesaje semnificative – facem ceva similar, traducând apăsările de taste în comenzi pentru joc.

Pentru a gestiona un eveniment, trebuie să folosești metoda `addEventListener()` a ferestrei și să îi oferi doi parametri de intrare. Primul parametru este numele evenimentului, de exemplu `keyup`. Al doilea parametru este funcția care ar trebui să fie invocată ca urmare a producerii evenimentului.

Iată un exemplu:

```javascript
window.addEventListener('keyup', (evt) => {
  // evt.key = string representation of the key
  if (evt.key === 'ArrowUp') {
    // do something
  }
});
```

**Ce se întâmplă aici:**
- **Ascultă** evenimentele de tastatură pe întreaga fereastră
- **Capturează** obiectul evenimentului care conține informații despre ce tastă a fost apăsată
- **Verifică** dacă tasta apăsată corespunde unei taste specifice (în acest caz, săgeata sus)
- **Execută** codul atunci când condiția este îndeplinită

Pentru evenimentele de tastatură, există două proprietăți pe obiectul evenimentului pe care le poți folosi pentru a vedea ce tastă a fost apăsată:

- `key` - aceasta este o reprezentare sub formă de șir a tastei apăsate, de exemplu `'ArrowUp'`
- `keyCode` - aceasta este o reprezentare numerică, de exemplu `37`, corespunde cu `ArrowLeft`

✅ Manipularea evenimentelor de tastatură este utilă și în afara dezvoltării de jocuri. La ce alte utilizări te poți gândi pentru această tehnică?

### Taste speciale: un avertisment!

Unele taste au comportamente încorporate în browser care pot interfera cu jocul tău. Tastele săgeți derulează pagina, iar bara de spațiu sare în jos – comportamente pe care nu le dorești atunci când cineva încearcă să-și piloteze nava spațială.

Putem preveni aceste comportamente implicite și să lăsăm jocul nostru să gestioneze input-ul în schimb. Acest lucru este similar cu modul în care primii programatori de computere trebuiau să suprascrie întreruperile sistemului pentru a crea comportamente personalizate – doar că noi facem acest lucru la nivelul browserului. Iată cum:

```javascript
const onKeyDown = function (e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
    case 39:
    case 38:
    case 40: // Arrow keys
    case 32:
      e.preventDefault();
      break; // Space
    default:
      break; // do not block other keys
  }
};

window.addEventListener('keydown', onKeyDown);
```

**Înțelegerea acestui cod de prevenire:**
- **Verifică** codurile de taste specifice care ar putea cauza comportamente nedorite ale browserului
- **Previne** acțiunea implicită a browserului pentru tastele săgeți și bara de spațiu
- **Permite** altor taste să funcționeze normal
- **Folosește** `e.preventDefault()` pentru a opri comportamentul încorporat al browserului

## Mișcarea indusă de joc

Acum să vorbim despre obiectele care se mișcă fără input-ul jucătorului. Gândește-te la navele inamice care se deplasează pe ecran, gloanțele care zboară în linii drepte sau norii care se deplasează în fundal. Această mișcare autonomă face ca lumea jocului să pară vie, chiar și atunci când nimeni nu atinge controalele.

Folosim temporizatoarele încorporate ale JavaScript pentru a actualiza pozițiile la intervale regulate. Acest concept este similar cu modul în care funcționează ceasurile cu pendul – un mecanism regulat care declanșează acțiuni consistente, temporizate. Iată cât de simplu poate fi:

```javascript
const id = setInterval(() => {
  // Move the enemy on the y axis
  enemy.y += 10;
}, 100);
```

**Ce face acest cod de mișcare:**
- **Creează** un temporizator care rulează la fiecare 100 de milisecunde
- **Actualizează** coordonata y a inamicului cu 10 pixeli de fiecare dată
- **Stochează** ID-ul intervalului pentru a-l putea opri mai târziu, dacă este necesar
- **Mută** inamicul în jos pe ecran automat

## Bucla jocului

Iată conceptul care leagă totul – bucla jocului. Dacă jocul tău ar fi un film, bucla jocului ar fi proiectorul de film, arătând cadru după cadru atât de rapid încât totul pare să se miște lin.

Fiecare joc are una dintre aceste bucle care rulează în fundal. Este o funcție care actualizează toate obiectele din joc, redesenează ecranul și repetă acest proces continuu. Aceasta ține evidența eroului tău, a tuturor inamicilor, a oricăror lasere care zboară – întregul stadiu al jocului.

Acest concept îmi amintește de modul în care primii animatori de film, precum Walt Disney, trebuiau să redeseneze personajele cadru cu cadru pentru a crea iluzia mișcării. Facem același lucru, doar că folosim cod în loc de creioane.

Iată cum arată de obicei o buclă de joc, exprimată în cod:

```javascript
const gameLoopId = setInterval(() => {
  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawHero();
    drawEnemies();
    drawStaticObjects();
  }
  gameLoop();
}, 200);
```

**Înțelegerea structurii buclei jocului:**
- **Șterge** întreaga zonă a canvas-ului pentru a elimina cadrul anterior
- **Umple** fundalul cu o culoare solidă
- **Desenează** toate obiectele jocului în pozițiile lor curente
- **Repetă** acest proces la fiecare 200 de milisecunde pentru a crea o animație fluidă
- **Gestionează** rata cadrelor prin controlul intervalului de timp

## Continuarea Jocului Spațial

Acum vom adăuga mișcare scenei statice pe care ai construit-o anterior. Vom transforma aceasta dintr-un screenshot într-o experiență interactivă. Vom parcurge acest proces pas cu pas pentru a ne asigura că fiecare piesă se construiește pe cea anterioară.

Ia codul de unde am rămas în lecția anterioară (sau începe cu codul din folderul [Part II- starter](../../../../6-space-game/3-moving-elements-around/your-work) dacă ai nevoie de un început proaspăt).

**Iată ce construim astăzi:**
- **Controale pentru erou**: Tastele săgeți vor pilota nava ta spațială pe ecran
- **Mișcarea inamicilor**: Aceste nave extraterestre vor începe să avanseze

Să începem implementarea acestor funcționalități.

## Pași recomandați

Găsește fișierele care au fost create pentru tine în subfolderul `your-work`. Ar trebui să conțină următoarele:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Începe proiectul tău în folderul `your-work` tastând:

```bash
cd your-work
npm start
```

**Ce face această comandă:**
- **Navighează** către directorul proiectului tău
- **Pornește** un server HTTP la adresa `http://localhost:5000`
- **Servește** fișierele jocului tău astfel încât să le poți testa într-un browser

Comanda de mai sus va porni un server HTTP la adresa `http://localhost:5000`. Deschide un browser și introdu acea adresă, acum ar trebui să afișeze eroul și toți inamicii; nimic nu se mișcă – încă!

### Adaugă cod

1. **Adaugă obiecte dedicate** pentru `hero`, `enemy` și `game object`, acestea ar trebui să aibă proprietăți `x` și `y`. (Amintește-ți porțiunea despre [Moștenire sau compoziție](../README.md)).

   *INDICAȚIE* `game object` ar trebui să fie cel care are `x` și `y` și abilitatea de a se desena pe un canvas.

   > **Sfat**: Începe prin a adăuga o nouă clasă `GameObject` cu constructorul său definit astfel, și apoi desenează-l pe canvas:

    ```javascript
    class GameObject {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = "";
        this.width = 0;
        this.height = 0;
        this.img = undefined;
      }
    
      draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }
    ```

    **Înțelegerea acestei clase de bază:**
    - **Definește** proprietăți comune pe care toate obiectele jocului le împărtășesc (poziție, dimensiune, imagine)
    - **Include** un indicator `dead` pentru a urmări dacă obiectul ar trebui eliminat
    - **Oferă** o metodă `draw()` care redă obiectul pe canvas
    - **Setează** valori implicite pentru toate proprietățile pe care clasele copil le pot suprascrie

    Acum, extinde acest `GameObject` pentru a crea `Hero` și `Enemy`:
    
    ```javascript
    class Hero extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 75;
        this.type = "Hero";
        this.speed = 5;
      }
    }
    ```

    ```javascript
    class Enemy extends GameObject {
      constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = "Enemy";
        const id = setInterval(() => {
          if (this.y < canvas.height - this.height) {
            this.y += 5;
          } else {
            console.log('Stopped at', this.y);
            clearInterval(id);
          }
        }, 300);
      }
    }
    ```

    **Concepte cheie în aceste clase:**
    - **Moștenește** de la `GameObject` folosind cuvântul cheie `extends`
    - **Apelează** constructorul părinte cu `super(x, y)`
    - **Setează** dimensiuni și proprietăți specifice pentru fiecare tip de obiect
    - **Implementează** mișcarea automată pentru inamici folosind `setInterval()`

2. **Adaugă gestionare de evenimente pentru taste** pentru a gestiona navigarea cu tastele (mută eroul sus/jos, stânga/dreapta)

   *AMINTEȘTE-ȚI* că este un sistem cartezian, colțul din stânga sus este `0,0`. De asemenea, amintește-ți să adaugi cod pentru a opri *comportamentul implicit*.

   > **Sfat**: Creează funcția ta `onKeyDown` și atașeaz-o la fereastră:

   ```javascript
   const onKeyDown = function (e) {
     console.log(e.keyCode);
     // Add the code from the lesson above to stop default behavior
     switch (e.keyCode) {
       case 37:
       case 39:
       case 38:
       case 40: // Arrow keys
       case 32:
         e.preventDefault();
         break; // Space
       default:
         break; // do not block other keys
     }
   };

   window.addEventListener("keydown", onKeyDown);
   ```
    
   **Ce face acest handler de evenimente:**
   - **Ascultă** evenimentele de apăsare a tastelor pe întreaga fereastră
   - **Loghează** codul tastei pentru a te ajuta să depanezi ce taste sunt apăsate
   - **Previne** comportamentul implicit al browserului pentru tastele săgeți și bara de spațiu
   - **Permite** altor taste să funcționeze normal
   
   Verifică consola browserului în acest moment și urmărește apăsările de taste care sunt logate. 

3. **Implementează** [Modelul Pub-Sub](../README.md), acesta va menține codul tău curat pe măsură ce urmezi părțile rămase.

   Modelul Publish-Subscribe ajută la organizarea codului tău prin separarea detectării evenimentelor de gestionarea acestora. Acest lucru face codul mai modular și mai ușor de întreținut.

   Pentru a face această ultimă parte, poți:

   1. **Adaugă un ascultător de evenimente** pe fereastră:

       ```javascript
       window.addEventListener("keyup", (evt) => {
         if (evt.key === "ArrowUp") {
           eventEmitter.emit(Messages.KEY_EVENT_UP);
         } else if (evt.key === "ArrowDown") {
           eventEmitter.emit(Messages.KEY_EVENT_DOWN);
         } else if (evt.key === "ArrowLeft") {
           eventEmitter.emit(Messages.KEY_EVENT_LEFT);
         } else if (evt.key === "ArrowRight") {
           eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
         }
       });
       ```

   **Ce face acest sistem de evenimente:**
   - **Detectează** input-ul de la tastatură și îl convertește în evenimente personalizate ale jocului
   - **Separă** detectarea input-ului de logica jocului
   - **Face** ușoară schimbarea controalelor mai târziu fără a afecta codul jocului
   - **Permite** mai multor sisteme să răspundă la același input

   2. **Creează o clasă EventEmitter** pentru a publica și a subscrie la mesaje:

       ```javascript
       class EventEmitter {
         constructor() {
           this.listeners = {};
         }
       
         on(message, listener) {
           if (!this.listeners[message]) {
             this.listeners[message] = [];
           }
           this.listeners[message].push(listener);
         }
       
   3. **Adaugă constante** și configurează EventEmitter-ul:

       ```javascript
       const Messages = {
         KEY_EVENT_UP: "KEY_EVENT_UP",
         KEY_EVENT_DOWN: "KEY_EVENT_DOWN",
         KEY_EVENT_LEFT: "KEY_EVENT_LEFT",
         KEY_EVENT_RIGHT: "KEY_EVENT_RIGHT",
       };
       
       let heroImg, 
           enemyImg, 
           laserImg,
           canvas, ctx, 
           gameObjects = [], 
           hero, 
           eventEmitter = new EventEmitter();
       ```

   **Înțelegerea configurării:**
   - **Definește** constante de mesaje pentru a evita greșelile de scriere și pentru a face refactorizarea mai ușoară
   - **Declară** variabile pentru imagini, contextul canvas-ului și starea jocului
   - **Creează** un emitter global de evenimente pentru sistemul pub-sub
   - **Inițializează** un array pentru a ține toate obiectele jocului

   4. **Inițializează jocul**

       ```javascript
       function initGame() {
         gameObjects = [];
         createEnemies();
         createHero();
       
         eventEmitter.on(Messages.KEY_EVENT_UP, () => {
           hero.y -= 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
           hero.y += 5;
         });
       
         eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
           hero.x -= 5;
         });
       
4. **Configurează bucla jocului**

   Refactorizează funcția `window.onload` pentru a inițializa jocul și a configura o buclă de joc la un interval bun. Vei adăuga și o rază laser:

    ```javascript
    window.onload = async () => {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      heroImg = await loadTexture("assets/player.png");
      enemyImg = await loadTexture("assets/enemyShip.png");
      laserImg = await loadTexture("assets/laserRed.png");
    
      initGame();
      const gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGameObjects(ctx);
      }, 100);
    };
    ```

   **Înțelegerea configurării jocului:**
   - **Așteaptă** ca pagina să se încarce complet înainte de a începe
   - **Obține** elementul canvas și contextul său de redare 2D
   - **Încarcă** toate resursele de imagine asincron folosind
- **Creează** o grilă de inamici folosind bucle imbricate  
- **Atribuie** imaginea inamicului fiecărui obiect inamic  
- **Adaugă** fiecare inamic în array-ul global de obiecte ale jocului  

și adaugă o funcție `createHero()` pentru a realiza un proces similar pentru erou.  

    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```
  
**Ce face crearea eroului:**  
- **Poziționează** eroul în centrul de jos al ecranului  
- **Atribuie** imaginea eroului obiectului erou  
- **Adaugă** eroul în array-ul de obiecte ale jocului pentru redare  

și, în final, adaugă o funcție `drawGameObjects()` pentru a începe desenarea:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
**Înțelegerea funcției de desenare:**  
- **Iterează** prin toate obiectele jocului din array  
- **Apelează** metoda `draw()` pentru fiecare obiect  
- **Transmite** contextul canvas-ului astfel încât obiectele să se poată reda singure  

Inamicii tăi ar trebui să înceapă să avanseze spre nava spațială a eroului tău!  
}  
}  
    ```
    
    and add a `createHero()` function to do a similar process for the hero.
    
    ```javascript
    function createHero() {
      hero = new Hero(
        canvas.width / 2 - 45,
        canvas.height - canvas.height / 4
      );
      hero.img = heroImg;
      gameObjects.push(hero);
    }
    ```
  
și, în final, adaugă o funcție `drawGameObjects()` pentru a începe desenarea:  

    ```javascript
    function drawGameObjects(ctx) {
      gameObjects.forEach(go => go.draw(ctx));
    }
    ```
  
Inamicii tăi ar trebui să înceapă să avanseze spre nava spațială a eroului tău!  

---

## Provocarea Agentului GitHub Copilot 🚀  

Iată o provocare care va îmbunătăți aspectul jocului tău: adăugarea limitelor și a controlului fluid. În prezent, eroul tău poate zbura în afara ecranului, iar mișcarea poate părea sacadată.  

**Misiunea ta:** Fă ca nava spațială să se simtă mai realistă implementând limitele ecranului și o mișcare fluidă. Este similar cu modul în care sistemele de control al zborului NASA împiedică navele spațiale să depășească parametrii operaționali siguri.  

**Ce trebuie să construiești:** Creează un sistem care menține nava spațială a eroului pe ecran și face ca mișcările să fie fluide. Când jucătorii țin apăsată o săgeată, nava ar trebui să alunece continuu, nu să se miște în pași discreți. Ia în considerare adăugarea unui feedback vizual atunci când nava ajunge la limitele ecranului – poate un efect subtil pentru a indica marginea zonei de joc.  

Află mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.  

## 🚀 Provocare  

Organizarea codului devine din ce în ce mai importantă pe măsură ce proiectele cresc. Poate ai observat că fișierul tău devine aglomerat cu funcții, variabile și clase amestecate. Acest lucru îmi amintește de modul în care inginerii care organizau codul misiunii Apollo au trebuit să creeze sisteme clare și ușor de întreținut, pe care mai multe echipe să le poată folosi simultan.  

**Misiunea ta:**  
Gândește ca un arhitect software. Cum ți-ai organiza codul astfel încât, peste șase luni, tu (sau un coleg) să poată înțelege ce se întâmplă? Chiar dacă totul rămâne într-un singur fișier deocamdată, poți crea o organizare mai bună:  

- **Gruparea funcțiilor similare** împreună cu anteturi clare de comentarii  
- **Separarea responsabilităților** - păstrează logica jocului separată de redare  
- **Utilizarea convențiilor consistente** de denumire pentru variabile și funcții  
- **Crearea de module** sau spații de nume pentru organizarea diferitelor aspecte ale jocului  
- **Adăugarea de documentație** care explică scopul fiecărei secțiuni majore  

**Întrebări de reflecție:**  
- Care părți ale codului tău sunt cele mai greu de înțeles când te întorci la ele?  
- Cum ai putea să-ți organizezi codul pentru a fi mai ușor pentru altcineva să contribuie?  
- Ce s-ar întâmpla dacă ai dori să adaugi funcționalități noi, cum ar fi power-ups sau tipuri diferite de inamici?  

## Test de evaluare după lecție  

[Test de evaluare după lecție](https://ff-quizzes.netlify.app/web/quiz/34)  

## Recapitulare și studiu individual  

Am construit totul de la zero, ceea ce este fantastic pentru învățare, dar iată un mic secret – există câteva framework-uri JavaScript uimitoare care pot face o mare parte din munca grea pentru tine. Odată ce te simți confortabil cu elementele de bază pe care le-am acoperit, merită să [explorezi ce este disponibil](https://github.com/collections/javascript-game-engines).  

Gândește-te la framework-uri ca la un set de unelte bine echipat, în loc să faci fiecare unealtă manual. Ele pot rezolva multe dintre acele provocări de organizare a codului despre care am vorbit, plus oferă funcționalități care ar dura săptămâni să le construiești singur.  

**Lucruri care merită explorate:**  
- Cum organizează motoarele de joc codul – vei fi uimit de modelele ingenioase pe care le folosesc  
- Trucuri de performanță pentru a face jocurile pe canvas să ruleze fluid  
- Funcționalități moderne ale JavaScript care pot face codul tău mai curat și mai ușor de întreținut  
- Diferite abordări pentru gestionarea obiectelor jocului și a relațiilor dintre ele  

## Temă  

[Comentează codul tău](assignment.md)  

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegerile sau interpretările greșite care pot apărea din utilizarea acestei traduceri.