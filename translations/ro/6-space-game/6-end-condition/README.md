<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-24T22:17:19+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Spațial Partea 6: Final și Restart

Fiecare joc grozav are nevoie de condiții clare de finalizare și un mecanism de restart fluid. Ai construit un joc spațial impresionant cu mișcare, luptă și punctaj - acum este momentul să adaugi piesele finale care îl fac să pară complet.

Jocul tău rulează în prezent la nesfârșit, la fel ca sondele Voyager lansate de NASA în 1977 - încă călătorind prin spațiu după decenii. Deși acest lucru este în regulă pentru explorarea spațială, jocurile au nevoie de puncte finale definite pentru a crea experiențe satisfăcătoare.

Astăzi, vom implementa condiții corecte de câștig/pierdere și un sistem de restart. Până la sfârșitul acestei lecții, vei avea un joc finisat pe care jucătorii îl pot finaliza și relua, la fel ca jocurile arcade clasice care au definit acest mediu.

## Test înainte de lecție

[Test înainte de lecție](https://ff-quizzes.netlify.app/web/quiz/39)

## Înțelegerea condițiilor de finalizare ale jocului

Când ar trebui să se termine jocul tău? Această întrebare fundamentală a modelat designul jocurilor încă din era arcade. Pac-Man se termină când ești prins de fantome sau când cureți toate punctele, în timp ce Space Invaders se termină când extratereștrii ajung jos sau când îi distrugi pe toți.

Ca creator al jocului, tu definești condițiile de victorie și înfrângere. Pentru jocul nostru spațial, iată câteva abordări dovedite care creează un gameplay captivant:

- **`N` nave inamice au fost distruse**: Este destul de comun ca, dacă împarți un joc în diferite niveluri, să fie necesar să distrugi `N` nave inamice pentru a finaliza un nivel.
- **Nava ta a fost distrusă**: Există cu siguranță jocuri în care pierzi dacă nava ta este distrusă. O altă abordare comună este conceptul de vieți. De fiecare dată când nava ta este distrusă, pierzi o viață. Odată ce toate viețile au fost pierdute, pierzi jocul.
- **Ai colectat `N` puncte**: O altă condiție comună de finalizare este să colectezi puncte. Modul în care obții punctele depinde de tine, dar este destul de comun să atribui puncte diverselor activități, cum ar fi distrugerea unei nave inamice sau colectarea obiectelor pe care acestea le lasă când sunt distruse.
- **Finalizarea unui nivel**: Acest lucru poate implica mai multe condiții, cum ar fi distrugerea a `X` nave inamice, colectarea a `Y` puncte sau poate colectarea unui obiect specific.

## Implementarea funcționalității de restart a jocului

Jocurile bune încurajează rejucabilitatea prin mecanisme de restart fluide. Când jucătorii finalizează un joc (sau sunt înfrânți), de multe ori vor să încerce din nou imediat - fie pentru a-și depăși scorul, fie pentru a-și îmbunătăți performanța.

Tetris exemplifică perfect acest lucru: când blocurile tale ajung în partea de sus, poți începe instantaneu un nou joc fără a naviga prin meniuri complicate. Vom construi un sistem de restart similar care resetează curat starea jocului și îi readuce pe jucători în acțiune rapid.

✅ **Reflecție**: Gândește-te la jocurile pe care le-ai jucat. În ce condiții se termină și cum ești îndemnat să le reîncepi? Ce face ca experiența de restart să fie fluidă versus frustrantă?

## Ce vei construi

Vei implementa funcțiile finale care transformă proiectul tău într-o experiență completă de joc. Aceste elemente disting jocurile finisate de prototipurile de bază.

**Iată ce adăugăm astăzi:**

1. **Condiție de victorie**: Distruge toți inamicii și bucură-te de o celebrare pe măsură (merită!)
2. **Condiție de înfrângere**: Rămâi fără vieți și confruntă-te cu un ecran de înfrângere
3. **Mecanism de restart**: Apasă Enter pentru a începe din nou - pentru că un joc nu este niciodată suficient
4. **Gestionarea stării**: Totul de la zero de fiecare dată - fără inamici rămași sau erori ciudate din jocul anterior

## Începem

Să pregătim mediul de dezvoltare. Ar trebui să ai toate fișierele jocului spațial din lecțiile anterioare pregătite.

**Proiectul tău ar trebui să arate cam așa:**

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

**Pornește serverul de dezvoltare:**

```bash
cd your-work
npm start
```

**Această comandă:**
- Rulează un server local pe `http://localhost:5000`
- Servește fișierele corect
- Se reîmprospătează automat când faci modificări

Deschide `http://localhost:5000` în browserul tău și verifică dacă jocul funcționează. Ar trebui să poți să te miști, să tragi și să interacționezi cu inamicii. Odată confirmat, putem continua cu implementarea.

> 💡 **Sfat util**: Pentru a evita avertismentele în Visual Studio Code, declară `gameLoopId` în partea de sus a fișierului ca `let gameLoopId;` în loc să-l declari în funcția `window.onload`. Acest lucru urmează cele mai bune practici de declarare a variabilelor în JavaScript modern.

## Pași de implementare

### Pasul 1: Creează funcții de urmărire a condițiilor de finalizare

Avem nevoie de funcții care să monitorizeze când ar trebui să se termine jocul. La fel ca senzorii de pe Stația Spațială Internațională care monitorizează constant sistemele critice, aceste funcții vor verifica continuu starea jocului.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Ce se întâmplă în spatele scenei:**
- **Verifică** dacă eroul nostru a rămas fără vieți (au!)
- **Numără** câți inamici sunt încă activi
- **Returnează** `true` când câmpul de luptă este liber de inamici
- **Folosește** logică simplă de tip adevărat/fals pentru a păstra lucrurile clare
- **Filtrează** toate obiectele din joc pentru a găsi supraviețuitorii

### Pasul 2: Actualizează gestionarea evenimentelor pentru condițiile de finalizare

Acum vom conecta aceste verificări ale condițiilor la sistemul de evenimente al jocului. De fiecare dată când are loc o coliziune, jocul va evalua dacă aceasta declanșează o condiție de finalizare. Acest lucru creează un feedback imediat pentru evenimentele critice ale jocului.

```javascript
eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
    first.dead = true;
    second.dead = true;
    hero.incrementPoints();

    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
    enemy.dead = true;
    hero.decrementLife();
    if (isHeroDead())  {
      eventEmitter.emit(Messages.GAME_END_LOSS);
      return; // loss before victory
    }
    if (isEnemiesDead()) {
      eventEmitter.emit(Messages.GAME_END_WIN);
    }
});

eventEmitter.on(Messages.GAME_END_WIN, () => {
    endGame(true);
});
  
eventEmitter.on(Messages.GAME_END_LOSS, () => {
  endGame(false);
});
```

**Ce se întâmplă aici:**
- **Laserul lovește inamicul**: Ambele dispar, primești puncte și verificăm dacă ai câștigat
- **Inamicul te lovește**: Pierzi o viață și verificăm dacă mai ești în joc
- **Ordine inteligentă**: Verificăm mai întâi înfrângerea (nimeni nu vrea să câștige și să piardă în același timp!)
- **Reacții instantanee**: De îndată ce se întâmplă ceva important, jocul știe despre asta

### Pasul 3: Adaugă noi constante pentru mesaje

Va trebui să adaugi noi tipuri de mesaje în obiectul constant `Messages`. Aceste constante ajută la menținerea consistenței și prevenirea greșelilor de scriere în sistemul de evenimente.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**În cele de mai sus, am:**
- **Adăugat** constante pentru evenimentele de finalizare a jocului pentru a menține consistența
- **Folosit** nume descriptive care indică clar scopul evenimentului
- **Urmat** convenția de denumire existentă pentru tipurile de mesaje

### Pasul 4: Implementarea controalelor de restart

Acum vei adăuga controale de tastatură care permit jucătorilor să reînceapă jocul. Tasta Enter este o alegere naturală, deoarece este asociată frecvent cu confirmarea acțiunilor și începerea unor jocuri noi.

**Adaugă detectarea tastei Enter la listener-ul existent pentru evenimentele de apăsare a tastelor:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Adaugă noua constantă de mesaj:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Ce trebuie să știi:**
- **Extinde** sistemul existent de gestionare a evenimentelor de tastatură
- **Folosește** tasta Enter ca declanșator pentru restart, pentru o experiență intuitivă
- **Emite** un eveniment personalizat pe care alte părți ale jocului îl pot asculta
- **Menține** același model ca celelalte controale de tastatură

### Pasul 5: Creează sistemul de afișare a mesajelor

Jocul tău trebuie să comunice clar rezultatele jucătorilor. Vom crea un sistem de mesaje care afișează stările de victorie și înfrângere folosind text colorat, similar interfețelor terminalelor primelor sisteme de calcul, unde verde indica succesul și roșu semnala erorile.

**Creează funcția `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Pas cu pas, iată ce se întâmplă:**
- **Setează** dimensiunea și familia fontului pentru un text clar și ușor de citit
- **Aplică** un parametru de culoare cu "roșu" ca implicit pentru avertismente
- **Centrează** textul orizontal și vertical pe canvas
- **Folosește** parametrii impliciți moderni din JavaScript pentru opțiuni flexibile de culoare
- **Utilizează** contextul 2D al canvas-ului pentru redarea directă a textului

**Creează funcția `endGame()`:**

```javascript
function endGame(win) {
  clearInterval(gameLoopId);

  // Set a delay to ensure any pending renders complete
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (win) {
      displayMessage(
        "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
        "green"
      );
    } else {
      displayMessage(
        "You died !!! Press [Enter] to start a new game Captain Pew Pew"
      );
    }
  }, 200)  
}
```

**Ce face această funcție:**
- **Îngheață** totul - fără nave sau lasere în mișcare
- **Ia** o mică pauză (200ms) pentru a permite ultimului cadru să se finalizeze
- **Curăță** ecranul și îl colorează în negru pentru un efect dramatic
- **Afișează** mesaje diferite pentru câștigători și învinși
- **Codifică** mesajele în culori - verde pentru bine, roșu pentru... ei bine, nu prea bine
- **Spune** jucătorilor exact cum să reînceapă

### Pasul 6: Implementarea funcționalității de resetare a jocului

Sistemul de resetare trebuie să curețe complet starea actuală a jocului și să inițializeze o sesiune nouă. Acest lucru asigură că jucătorii au un început curat, fără date rămase din jocul anterior.

**Creează funcția `resetGame()`:**

```javascript
function resetGame() {
  if (gameLoopId) {
    clearInterval(gameLoopId);
    eventEmitter.clear();
    initGame();
    gameLoopId = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawPoints();
      drawLife();
      updateGameObjects();
      drawGameObjects(ctx);
    }, 100);
  }
}
```

**Să înțelegem fiecare parte:**
- **Verifică** dacă un loop de joc rulează în prezent înainte de resetare
- **Curăță** loop-ul existent pentru a opri toate activitățile curente ale jocului
- **Elimină** toate listener-ele de evenimente pentru a preveni scurgerile de memorie
- **Reinițializează** starea jocului cu obiecte și variabile noi
- **Pornește** un nou loop de joc cu toate funcțiile esențiale ale jocului
- **Menține** același interval de 100ms pentru o performanță constantă a jocului

**Adaugă handler-ul pentru tasta Enter în funcția `initGame()`:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Adaugă metoda `clear()` în clasa EventEmitter:**

```javascript
clear() {
  this.listeners = {};
}
```

**Puncte cheie de reținut:**
- **Conectează** apăsarea tastei Enter la funcționalitatea de resetare a jocului
- **Înregistrează** acest listener de evenimente în timpul inițializării jocului
- **Oferă** o modalitate curată de a elimina toate listener-ele de evenimente între jocuri
- **Previne** scurgerile de memorie prin curățarea handler-elor de evenimente între jocuri
- **Resetează** obiectul listener-elor la o stare goală pentru o inițializare proaspătă

## Felicitări! 🎉

👽 💥 🚀 Ai reușit să construiești un joc complet de la zero. La fel ca programatorii care au creat primele jocuri video în anii '70, ai transformat linii de cod într-o experiență interactivă cu mecanici de joc și feedback pentru utilizatori. 🚀 💥 👽

**Ai realizat:**
- **Implementarea** condițiilor complete de câștig și pierdere cu feedback pentru utilizatori
- **Crearea** unui sistem de restart fluid pentru o experiență continuă de joc
- **Proiectarea** unei comunicări vizuale clare pentru stările jocului
- **Gestionarea** tranzițiilor complexe ale stării jocului și curățarea acestuia
- **Asamblarea** tuturor componentelor într-un joc coerent și jucabil

## Provocarea Agentului GitHub Copilot 🚀

Folosește modul Agent pentru a finaliza următoarea provocare:

**Descriere:** Îmbunătățește jocul spațial prin implementarea unui sistem de progresie pe niveluri cu dificultate crescută și funcții bonus.

**Prompt:** Creează un sistem de joc pe mai multe niveluri, în care fiecare nivel are mai multe nave inamice cu viteză și sănătate crescute. Adaugă un multiplicator de punctaj care crește cu fiecare nivel și implementează power-up-uri (cum ar fi foc rapid sau scut) care apar aleatoriu când inamicii sunt distruși. Include un bonus pentru finalizarea nivelului și afișează nivelul curent pe ecran alături de scorul și viețile existente.

Află mai multe despre [modul agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) aici.

## 🚀 Provocare opțională de îmbunătățire

**Adaugă sunet jocului tău**: Îmbunătățește experiența de joc prin implementarea efectelor sonore! Ia în considerare adăugarea de sunet pentru:

- **Focurile de laser** când jucătorul trage
- **Distrugerea inamicilor** când navele sunt lovite
- **Deteriorarea eroului** când jucătorul este lovit
- **Muzică de victorie** când jocul este câștigat
- **Sunet de înfrângere** când jocul este pierdut

**Exemplu de implementare audio:**

```javascript
// Create audio objects
const laserSound = new Audio('assets/laser.wav');
const explosionSound = new Audio('assets/explosion.wav');

// Play sounds during game events
function playLaserSound() {
  laserSound.currentTime = 0; // Reset to beginning
  laserSound.play();
}
```

**Ce trebuie să știi:**
- **Creează** obiecte Audio pentru diferite efecte sonore
- **Resetează** `currentTime` pentru a permite efecte sonore rapide
- **Gestionează** politicile de autoplay ale browserului prin declanșarea sunetelor din interacțiuni ale utilizatorului
- **Administrează** volumul și sincronizarea audio pentru o experiență mai bună de joc

> 💡 **Resursă de învățare**: Explorează acest [sandbox audio](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) pentru a învăța mai multe despre implementarea audio în jocurile JavaScript.

## Test după lecție

[Test după lecție](https://ff-quizzes.netlify.app/web/quiz/40)

## Recapitulare & Studiu individual

Tema ta este să creezi un joc nou, așa că explorează câteva dintre jocurile interesante existente pentru a vedea ce tip de joc ai putea construi.

## Temă

[Construiește un joc de probă](assignment.md)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.