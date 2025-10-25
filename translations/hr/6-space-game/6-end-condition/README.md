<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-25T00:12:30+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, dio 6: Kraj i ponovno pokretanje

Svaka sjajna igra treba jasne uvjete završetka i glatki mehanizam za ponovno pokretanje. Izgradili ste impresivnu svemirsku igru s kretanjem, borbom i bodovanjem - sada je vrijeme da dodate završne dijelove koji će je učiniti potpunom.

Vaša igra trenutno traje beskonačno, poput sondi Voyager koje je NASA lansirala 1977. godine - još uvijek putuju svemirom desetljećima kasnije. Iako je to u redu za istraživanje svemira, igre trebaju definirane završetke kako bi pružile zadovoljavajuće iskustvo.

Danas ćemo implementirati odgovarajuće uvjete pobjede/poraza i sustav za ponovno pokretanje. Do kraja ove lekcije imat ćete uglađenu igru koju igrači mogu završiti i ponovno igrati, baš poput klasičnih arkadnih igara koje su definirale medij.

## Kviz prije predavanja

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/39)

## Razumijevanje uvjeta završetka igre

Kada bi vaša igra trebala završiti? Ovo temeljno pitanje oblikovalo je dizajn igara još od ranih dana arkadnih igara. Pac-Man završava kada vas uhvate duhovi ili očistite sve točke, dok Space Invaders završava kada vanzemaljci stignu do dna ili ih sve uništite.

Kao kreator igre, vi definirate uvjete pobjede i poraza. Za našu svemirsku igru, evo provjerenih pristupa koji stvaraju zanimljivu igru:

- **Uništeno je `N` neprijateljskih brodova**: Često se događa da, ako podijelite igru na različite razine, morate uništiti `N` neprijateljskih brodova kako biste završili razinu.
- **Vaš brod je uništen**: Postoje igre u kojima gubite igru ako je vaš brod uništen. Drugi uobičajeni pristup je koncept života. Svaki put kada je vaš brod uništen, oduzima se jedan život. Kada izgubite sve živote, gubite igru.
- **Prikupili ste `N` bodova**: Još jedan uobičajeni uvjet završetka je prikupljanje bodova. Kako ćete dobiti bodove ovisi o vama, ali često se bodovi dodjeljuju za razne aktivnosti poput uništavanja neprijateljskog broda ili prikupljanja predmeta koje neprijatelji ispuste kada su uništeni.
- **Završili ste razinu**: To može uključivati nekoliko uvjeta, kao što su uništenje `X` neprijateljskih brodova, prikupljanje `Y` bodova ili možda prikupljanje određenog predmeta.

## Implementacija funkcionalnosti za ponovno pokretanje igre

Dobre igre potiču ponovnu igrivost kroz glatke mehanizme za ponovno pokretanje. Kada igrači završe igru (ili dožive poraz), često žele odmah pokušati ponovno - bilo da poboljšaju svoj rezultat ili izvedbu.

Tetris je savršen primjer: kada blokovi dosegnu vrh, možete odmah započeti novu igru bez navigacije kroz složene izbornike. Izgradit ćemo sličan sustav za ponovno pokretanje koji čisto resetira stanje igre i brzo vraća igrače u akciju.

✅ **Razmišljanje**: Razmislite o igrama koje ste igrali. Pod kojim uvjetima završavaju i kako vas potiču na ponovno pokretanje? Što čini iskustvo ponovnog pokretanja glatkim, a što frustrirajućim?

## Što ćete izgraditi

Implementirat ćete završne značajke koje će vaš projekt pretvoriti u cjelovito iskustvo igre. Ovi elementi razlikuju uglađene igre od osnovnih prototipova.

**Evo što danas dodajemo:**

1. **Uvjet pobjede**: Uništite sve neprijatelje i dobijte zasluženu proslavu!
2. **Uvjet poraza**: Ostajete bez života i suočavate se s porazom na ekranu.
3. **Mehanizam za ponovno pokretanje**: Pritisnite Enter za povratak u igru - jer jedna igra nikad nije dovoljna.
4. **Upravljanje stanjem**: Čista ploča svaki put - bez preostalih neprijatelja ili čudnih grešaka iz prethodne igre.

## Početak rada

Pripremimo vaše razvojno okruženje. Trebali biste imati sve datoteke svoje svemirske igre iz prethodnih lekcija spremne.

**Vaš projekt trebao bi izgledati otprilike ovako:**

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

**Pokrenite svoj razvojni server:**

```bash
cd your-work
npm start
```

**Ova naredba:**
- Pokreće lokalni server na `http://localhost:5000`
- Ispravno poslužuje vaše datoteke
- Automatski osvježava kada napravite promjene

Otvorite `http://localhost:5000` u svom pregledniku i provjerite radi li vaša igra. Trebali biste se moći kretati, pucati i komunicirati s neprijateljima. Kada to potvrdite, možemo nastaviti s implementacijom.

> 💡 **Profesionalni savjet**: Kako biste izbjegli upozorenja u Visual Studio Codeu, deklarirajte `gameLoopId` na vrhu svoje datoteke kao `let gameLoopId;` umjesto da ga deklarirate unutar funkcije `window.onload`. Ovo slijedi moderne najbolje prakse deklaracije varijabli u JavaScriptu.

## Koraci implementacije

### Korak 1: Kreiranje funkcija za praćenje uvjeta završetka

Potrebne su nam funkcije koje će pratiti kada bi igra trebala završiti. Poput senzora na Međunarodnoj svemirskoj postaji koji stalno prate kritične sustave, ove funkcije će kontinuirano provjeravati stanje igre.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Što se događa u pozadini:**
- **Provjerava** je li naš junak ostao bez života (au!)
- **Broji** koliko je neprijatelja još uvijek živo
- **Vraća** `true` kada je bojno polje čisto od neprijatelja
- **Koristi** jednostavnu logiku true/false za jednostavnost
- **Filtrira** sve objekte igre kako bi pronašao preživjele

### Korak 2: Ažuriranje rukovatelja događajima za uvjete završetka

Sada ćemo povezati ove provjere uvjeta s sustavom događaja igre. Svaki put kada se dogodi sudar, igra će procijeniti hoće li to pokrenuti uvjet završetka. Ovo stvara trenutnu povratnu informaciju za ključne događaje u igri.

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

**Što se ovdje događa:**
- **Laser pogađa neprijatelja**: Oboje nestaju, dobivate bodove i provjeravamo jeste li pobijedili.
- **Neprijatelj pogađa vas**: Gubite život i provjeravamo jeste li još uvijek u igri.
- **Pametno redoslijed**: Prvo provjeravamo poraz (nitko ne želi pobijediti i izgubiti u isto vrijeme!)
- **Trenutne reakcije**: Čim se dogodi nešto važno, igra to odmah registrira.

### Korak 3: Dodavanje novih konstanti poruka

Morat ćete dodati nove vrste poruka u svoj objekt `Messages`. Ove konstante pomažu u održavanju dosljednosti i sprječavanju tipografskih pogrešaka u vašem sustavu događaja.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**U gore navedenom, mi smo:**
- **Dodali** konstante za događaje završetka igre radi održavanja dosljednosti
- **Koristili** opisne nazive koji jasno označavaju svrhu događaja
- **Slijedili** postojeću konvenciju imenovanja za vrste poruka

### Korak 4: Implementacija kontrola za ponovno pokretanje

Sada ćete dodati kontrole tipkovnice koje omogućuju igračima ponovno pokretanje igre. Tipka Enter prirodan je izbor jer se obično povezuje s potvrđivanjem radnji i pokretanjem novih igara.

**Dodajte detekciju tipke Enter u postojeći slušatelj događaja pritiska tipki:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Dodajte novu konstantu poruke:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Što trebate znati:**
- **Proširuje** vaš postojeći sustav rukovanja događajima na tipkovnici
- **Koristi** tipku Enter kao okidač za ponovno pokretanje radi intuitivnog korisničkog iskustva
- **Emitira** prilagođeni događaj koji drugi dijelovi vaše igre mogu slušati
- **Održava** isti obrazac kao i vaše ostale kontrole tipkovnice

### Korak 5: Kreiranje sustava za prikaz poruka

Vaša igra treba jasno komunicirati rezultate igračima. Kreirat ćemo sustav poruka koji prikazuje stanja pobjede i poraza koristeći tekst u boji, slično terminalskim sučeljima ranih računalnih sustava gdje je zelena označavala uspjeh, a crvena signalizirala pogreške.

**Kreirajte funkciju `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Korak po korak, evo što se događa:**
- **Postavlja** veličinu i obitelj fonta za jasan, čitljiv tekst
- **Primjenjuje** parametar boje s "crvenom" kao zadanim za upozorenja
- **Centrira** tekst horizontalno i vertikalno na platnu
- **Koristi** moderne JavaScript zadane parametre za fleksibilne opcije boja
- **Koristi** 2D kontekst platna za izravno prikazivanje teksta

**Kreirajte funkciju `endGame()`:**

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

**Što ova funkcija radi:**
- **Zamrzava** sve na mjestu - nema više kretanja brodova ili lasera
- **Uzima** kratku pauzu (200ms) kako bi se posljednji kadar završio
- **Briše** ekran i boji ga crno za dramatičan efekt
- **Prikazuje** različite poruke za pobjednike i gubitnike
- **Kodira** vijesti bojama - zeleno za dobro, crveno za... pa, ne tako dobro
- **Govori** igračima kako se vratiti u igru

### Korak 6: Implementacija funkcionalnosti za resetiranje igre

Sustav za resetiranje mora potpuno očistiti trenutno stanje igre i inicijalizirati novu sesiju igre. To osigurava da igrači započnu svježe, bez preostalih podataka iz prethodne igre.

**Kreirajte funkciju `resetGame()`:**

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

**Razumijmo svaki dio:**
- **Provjerava** je li trenutna petlja igre aktivna prije resetiranja
- **Briše** postojeću petlju igre kako bi zaustavila sve trenutne aktivnosti igre
- **Uklanja** sve slušatelje događaja kako bi spriječila curenje memorije
- **Ponovno inicijalizira** stanje igre s novim objektima i varijablama
- **Pokreće** novu petlju igre sa svim bitnim funkcijama igre
- **Održava** isti interval od 100ms za dosljedne performanse igre

**Dodajte rukovatelja događajem za tipku Enter u svoju funkciju `initGame()`:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Dodajte metodu `clear()` u svoju klasu EventEmitter:**

```javascript
clear() {
  this.listeners = {};
}
```

**Ključne točke za zapamtiti:**
- **Povezuje** pritisak tipke Enter s funkcionalnošću za resetiranje igre
- **Registrira** ovog slušatelja događaja tijekom inicijalizacije igre
- **Pruža** čist način za uklanjanje svih slušatelja događaja tijekom resetiranja
- **Sprječava** curenje memorije čišćenjem rukovatelja događaja između igara
- **Resetira** objekt slušatelja na prazno stanje za svježu inicijalizaciju

## Čestitamo! 🎉

👽 💥 🚀 Uspješno ste izgradili kompletnu igru od temelja. Poput programera koji su stvorili prve video igre 1970-ih, transformirali ste linije koda u interaktivno iskustvo s odgovarajućim mehanikama igre i povratnim informacijama korisnika. 🚀 💥 👽

**Postigli ste:**
- **Implementirali** potpune uvjete pobjede i poraza s povratnim informacijama korisnika
- **Kreirali** besprijekoran sustav za ponovno pokretanje za kontinuiranu igrivost
- **Dizajnirali** jasnu vizualnu komunikaciju za stanja igre
- **Upravljali** složenim prijelazima stanja igre i čišćenjem
- **Sastavili** sve komponente u koherentnu, igrivu igru

## Izazov GitHub Copilot Agent 🚀

Koristite Agent mode za dovršavanje sljedećeg izazova:

**Opis:** Poboljšajte svemirsku igru implementacijom sustava napredovanja kroz razine s povećanjem težine i dodatnim značajkama.

**Zadatak:** Kreirajte sustav svemirske igre s više razina gdje svaka razina ima više neprijateljskih brodova s povećanom brzinom i zdravljem. Dodajte množitelj bodova koji se povećava sa svakom razinom i implementirajte pojačanja (poput brzog pucanja ili štita) koja se nasumično pojavljuju kada se neprijatelji unište. Uključite bonus za završetak razine i prikaz trenutne razine na ekranu uz postojeći rezultat i živote.

Saznajte više o [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.

## 🚀 Izazov za dodatno poboljšanje

**Dodajte zvuk svojoj igri**: Poboljšajte iskustvo igranja implementacijom zvučnih efekata! Razmislite o dodavanju zvuka za:

- **Pucanje lasera** kada igrač puca
- **Uništenje neprijatelja** kada su brodovi pogođeni
- **Oštećenje heroja** kada igrač primi udarac
- **Pobjedničku glazbu** kada je igra osvojena
- **Zvuk poraza** kada je igra izgubljena

**Primjer implementacije zvuka:**

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

**Što trebate znati:**
- **Kreira** audio objekte za različite zvučne efekte
- **Resetira** `currentTime` kako bi omogućio brzo ponavljanje zvučnih efekata
- **Rukuje** pravilima automatske reprodukcije preglednika pokretanjem zvukova iz korisničkih interakcija
- **Upravlja** glasnoćom i vremenom zvuka za bolje iskustvo igre

> 💡 **Resurs za učenje**: Istražite ovaj [audio sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) kako biste saznali više o implementaciji zvuka u JavaScript igrama.

## Kviz nakon predavanja

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/40)

## Pregled i samostalno učenje

Vaš zadatak je stvoriti novu uzornu igru, pa istražite neke zanimljive igre kako biste vidjeli kakvu biste igru mogli izgraditi.

## Zadatak

[Izgradite uzornu igru](assignment.md)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.