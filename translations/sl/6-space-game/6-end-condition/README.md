<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46bcdd9a0174031655a49bb062aa279c",
  "translation_date": "2025-10-25T00:42:48+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "sl"
}
-->
# Zgradite vesoljsko igro, 6. del: Konec in ponovni začetek

Vsaka odlična igra potrebuje jasne pogoje za konec in gladek mehanizem za ponovni začetek. Zgradili ste impresivno vesoljsko igro z gibanjem, bojevanjem in točkovanjem – zdaj je čas, da dodate zadnje elemente, ki jo naredijo popolno.

Vaša igra trenutno teče neskončno, podobno kot sonde Voyager, ki jih je NASA izstrelila leta 1977 – še vedno potujejo skozi vesolje desetletja kasneje. Čeprav je to primerno za raziskovanje vesolja, igre potrebujejo določene končne točke, da ustvarijo zadovoljivo izkušnjo.

Danes bomo implementirali ustrezne pogoje za zmago/poraz in sistem za ponovni začetek. Do konca te lekcije boste imeli izpopolnjeno igro, ki jo bodo igralci lahko dokončali in ponovno igrali, podobno kot klasične arkadne igre, ki so definirale to področje.

## Predlekcijski kviz

[Predlekcijski kviz](https://ff-quizzes.netlify.app/web/quiz/39)

## Razumevanje pogojev za konec igre

Kdaj naj se vaša igra konča? To temeljno vprašanje je oblikovalo oblikovanje iger že od zgodnje arkadne dobe. Pac-Man se konča, ko vas ujamejo duhovi ali ko počistite vse pike, medtem ko se Space Invaders konča, ko vesoljci dosežejo dno ali ko jih vse uničite.

Kot ustvarjalec igre določite pogoje za zmago in poraz. Za našo vesoljsko igro so tukaj preverjeni pristopi, ki ustvarjajo privlačno igranje:

- **Uničenje `N` sovražnih ladij**: Pogosto je v igrah, ki so razdeljene na različne nivoje, potrebno uničiti `N` sovražnih ladij, da dokončate nivo.
- **Vaša ladja je uničena**: Obstajajo igre, kjer izgubite igro, če je vaša ladja uničena. Pogost pristop je tudi koncept življenj. Vsakič, ko je vaša ladja uničena, se odšteje eno življenje. Ko izgubite vsa življenja, izgubite igro.
- **Zbrali ste `N` točk**: Drug pogost pogoj za konec igre je zbiranje točk. Kako pridobite točke, je odvisno od vas, vendar je pogosto, da se točke dodelijo za različne aktivnosti, kot je uničenje sovražne ladje ali zbiranje predmetov, ki jih ladje *izpustijo*, ko so uničene.
- **Dokončanje nivoja**: To lahko vključuje več pogojev, kot so uničenje `X` sovražnih ladij, zbiranje `Y` točk ali morda zbiranje določenega predmeta.

## Implementacija funkcionalnosti za ponovni začetek igre

Dobre igre spodbujajo ponovno igranje s pomočjo gladkih mehanizmov za ponovni začetek. Ko igralci dokončajo igro (ali doživijo poraz), pogosto želijo takoj poskusiti znova – bodisi da izboljšajo svoj rezultat ali svojo igro.

Tetris je popoln primer: ko vaši bloki dosežejo vrh, lahko takoj začnete novo igro, ne da bi morali navigirati po zapletenih menijih. Zgradili bomo podoben sistem za ponovni začetek, ki bo čisto ponastavil stanje igre in igralce hitro vrnil v akcijo.

✅ **Razmislek**: Pomislite na igre, ki ste jih igrali. Pod kakšnimi pogoji se končajo in kako vas spodbudijo k ponovnemu začetku? Kaj naredi izkušnjo ponovnega začetka gladko in kaj frustrirajočo?

## Kaj boste zgradili

Implementirali boste zadnje funkcije, ki bodo vaš projekt spremenile v popolno igralno izkušnjo. Ti elementi ločujejo izpopolnjene igre od osnovnih prototipov.

**Danes bomo dodali:**

1. **Pogoj za zmago**: Uničite vse sovražnike in si privoščite pravo slavje (zaslužili ste si!)
2. **Pogoj za poraz**: Izgubite vsa življenja in se soočite s porazom na zaslonu
3. **Mehanizem za ponovni začetek**: Pritisnite Enter, da se takoj vrnete v igro – ker ena igra nikoli ni dovolj
4. **Upravljanje stanja**: Vsakič začnite na novo – brez preostalih sovražnikov ali čudnih napak iz prejšnje igre

## Začetek

Pripravimo vaše razvojno okolje. Vse datoteke vaše vesoljske igre iz prejšnjih lekcij naj bodo pripravljene.

**Vaš projekt naj izgleda nekako takole:**

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

**Zaženite svoj razvojni strežnik:**

```bash
cd your-work
npm start
```

**Ta ukaz:**
- Zažene lokalni strežnik na `http://localhost:5000`
- Pravilno postreže vaše datoteke
- Samodejno osveži, ko naredite spremembe

Odprite `http://localhost:5000` v svojem brskalniku in preverite, ali vaša igra deluje. Premikati bi se morali, streljati in interagirati s sovražniki. Ko to potrdite, lahko nadaljujemo z implementacijo.

> 💡 **Profesionalni nasvet**: Da se izognete opozorilom v Visual Studio Code, deklarirajte `gameLoopId` na vrhu datoteke kot `let gameLoopId;` namesto da ga deklarirate znotraj funkcije `window.onload`. To sledi sodobnim najboljšim praksam deklaracije spremenljivk v JavaScriptu.

## Koraki implementacije

### Korak 1: Ustvarite funkcije za sledenje končnim pogojem

Potrebujemo funkcije, ki spremljajo, kdaj naj se igra konča. Podobno kot senzorji na Mednarodni vesoljski postaji, ki nenehno spremljajo kritične sisteme, bodo te funkcije neprestano preverjale stanje igre.

```javascript
function isHeroDead() {
  return hero.life <= 0;
}

function isEnemiesDead() {
  const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
  return enemies.length === 0;
}
```

**Kaj se dogaja v ozadju:**
- **Preverja**, ali je naš junak izgubil vsa življenja (auč!)
- **Šteje**, koliko sovražnikov je še živih
- **Vrne** `true`, ko je bojišče očiščeno sovražnikov
- **Uporablja** preprosto logiko true/false za enostavnost
- **Filtrira** vse objekte igre, da najde preživele

### Korak 2: Posodobite obdelovalce dogodkov za končne pogoje

Zdaj bomo te preveritve pogojev povezali s sistemom dogodkov igre. Vsakič, ko pride do trka, bo igra ocenila, ali sproži končni pogoj. To ustvari takojšnjo povratno informacijo za ključne dogodke v igri.

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

**Kaj se tukaj dogaja:**
- **Laser zadene sovražnika**: Oba izgineta, pridobite točke in preverimo, ali ste zmagali
- **Sovražnik zadene vas**: Izgubite življenje in preverimo, ali ste še živi
- **Pametno razvrščanje**: Najprej preverimo poraz (nihče ne želi hkrati zmagati in izgubiti!)
- **Takojšnje reakcije**: Takoj ko se zgodi nekaj pomembnega, igra to zazna

### Korak 3: Dodajte nove konstantne sporočilne tipe

Dodati boste morali nove tipe sporočil v vaš objekt `Messages`. Te konstante pomagajo ohranjati doslednost in preprečujejo tipkarske napake v vašem sistemu dogodkov.

```javascript
GAME_END_LOSS: "GAME_END_LOSS",
GAME_END_WIN: "GAME_END_WIN",
```

**V zgornjem primeru smo:**
- **Dodali** konstante za dogodke konca igre, da ohranimo doslednost
- **Uporabili** opisna imena, ki jasno označujejo namen dogodka
- **Sledili** obstoječemu poimenovalnemu konvenciji za tipe sporočil

### Korak 4: Implementirajte kontrole za ponovni začetek

Zdaj boste dodali kontrole na tipkovnici, ki igralcem omogočajo ponovni začetek igre. Tipka Enter je naravna izbira, saj je pogosto povezana s potrjevanjem dejanj in začetkom novih iger.

**Dodajte zaznavanje tipke Enter v obstoječi poslušalec dogodkov za pritisk tipk:**

```javascript
else if(evt.key === "Enter") {
   eventEmitter.emit(Messages.KEY_EVENT_ENTER);
}
```

**Dodajte novo konstantno sporočilo:**

```javascript
KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
```

**Kaj morate vedeti:**
- **Razširi** obstoječi sistem obdelave dogodkov na tipkovnici
- **Uporablja** tipko Enter kot sprožilec za ponovni začetek za intuitivno uporabniško izkušnjo
- **Oddaja** prilagojen dogodek, ki ga lahko poslušajo drugi deli vaše igre
- **Ohranja** enak vzorec kot vaše druge kontrole na tipkovnici

### Korak 5: Ustvarite sistem za prikaz sporočil

Vaša igra mora jasno komunicirati rezultate igralcem. Ustvarili bomo sistem sporočil, ki prikazuje stanje zmage in poraza z barvno kodiranim besedilom, podobno kot terminalski vmesniki zgodnjih računalniških sistemov, kjer je zelena označevala uspeh, rdeča pa napake.

**Ustvarite funkcijo `displayMessage()`:**

```javascript
function displayMessage(message, color = "red") {
  ctx.font = "30px Arial";
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}
```

**Korak za korakom, kaj se dogaja:**
- **Nastavi** velikost in družino pisave za jasno, berljivo besedilo
- **Uporabi** parameter barve z "rdečo" kot privzeto za opozorila
- **Poravna** besedilo vodoravno in navpično na platnu
- **Uporablja** sodobne privzete parametre JavaScripta za prilagodljive možnosti barv
- **Izkoristi** kontekst 2D platna za neposredno upodabljanje besedila

**Ustvarite funkcijo `endGame()`:**

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

**Kaj ta funkcija počne:**
- **Zamrzne** vse na mestu – ni več premikanja ladij ali laserjev
- **Vzame** majhen premor (200 ms), da se zadnji okvir dokončno nariše
- **Očisti** zaslon in ga obarva črno za dramatičen učinek
- **Prikaže** različna sporočila za zmagovalce in poražence
- **Barvno kodira** novice – zeleno za dobro, rdeče za... no, ne tako dobro
- **Pove** igralcem, kako se takoj vrniti v igro

### Korak 6: Implementirajte funkcionalnost za ponovni začetek igre

Sistem za ponovni začetek mora popolnoma očistiti trenutno stanje igre in inicializirati novo sejo igre. To zagotavlja, da igralci začnejo na novo, brez preostalih podatkov iz prejšnje igre.

**Ustvarite funkcijo `resetGame()`:**

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

**Razumevanje posameznih delov:**
- **Preveri**, ali trenutno teče zanka igre, preden začne ponovni zagon
- **Počisti** obstoječo zanko igre, da ustavi vse trenutne aktivnosti igre
- **Odstrani** vse poslušalce dogodkov, da prepreči uhajanje pomnilnika
- **Ponovno inicializira** stanje igre s svežimi objekti in spremenljivkami
- **Začne** novo zanko igre z vsemi bistvenimi funkcijami igre
- **Ohranja** enak interval 100 ms za dosledno delovanje igre

**Dodajte obdelovalec dogodkov za tipko Enter v vašo funkcijo `initGame()`:**

```javascript
eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
  resetGame();
});
```

**Dodajte metodo `clear()` v vaš razred EventEmitter:**

```javascript
clear() {
  this.listeners = {};
}
```

**Ključne točke za zapomniti:**
- **Povezuje** pritisk tipke Enter s funkcionalnostjo za ponovni začetek igre
- **Registrira** tega poslušalca dogodkov med inicializacijo igre
- **Omogoča** čist način za odstranitev vseh poslušalcev dogodkov med ponovnim zagonom
- **Preprečuje** uhajanje pomnilnika z brisanjem obdelovalcev dogodkov med igrami
- **Ponastavi** objekt poslušalcev na prazno stanje za svežo inicializacijo

## Čestitke! 🎉

👽 💥 🚀 Uspešno ste zgradili popolno igro od začetka. Tako kot programerji, ki so ustvarili prve video igre v 70-ih letih, ste preoblikovali vrstice kode v interaktivno izkušnjo z ustreznimi mehanizmi igre in povratnimi informacijami za uporabnika. 🚀 💥 👽

**Dosegli ste:**
- **Implementirali** popolne pogoje za zmago in poraz z uporabniškimi povratnimi informacijami
- **Ustvarili** brezhiben sistem za ponovni začetek za neprekinjeno igranje
- **Oblikovali** jasno vizualno komunikacijo za stanja igre
- **Upravljali** kompleksne prehode stanja igre in čiščenje
- **Sestavili** vse komponente v skladno, igrabilno igro

## GitHub Copilot Agent izziv 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Izboljšajte vesoljsko igro z implementacijo sistema napredovanja nivojev z naraščajočo težavnostjo in dodatnimi funkcijami.

**Navodilo:** Ustvarite sistem večnivojske vesoljske igre, kjer ima vsak nivo več sovražnih ladij z večjo hitrostjo in zdravjem. Dodajte množitelj točkovanja, ki se povečuje z vsakim nivojem, in implementirajte dodatke (kot so hitri streli ali ščit), ki se naključno pojavijo, ko so sovražniki uničeni. Vključite bonus za dokončanje nivoja in na zaslonu prikažite trenutni nivo skupaj z obstoječimi točkami in življenji.

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## 🚀 Izziv za dodatne izboljšave

**Dodajte zvok svoji igri**: Izboljšajte izkušnjo igranja z implementacijo zvočnih učinkov! Razmislite o dodajanju zvoka za:

- **Streljanje laserjev**, ko igralec strelja
- **Uničenje sovražnika**, ko so ladje zadete
- **Poškodbe junaka**, ko igralec prejme udarce
- **Zmagovalno glasbo**, ko je igra dobljena
- **Zvok poraza**, ko je igra izgubljena

**Primer implementacije zvoka:**

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

**Kaj morate vedeti:**
- **Ustvari** zvočne objekte za različne zvočne učinke
- **Ponastavi** `currentTime`, da omogoči hitre zvočne učinke
- **Upošteva** politike samodejnega predvajanja brskalnika z sprožitvijo zvokov prek interakcij uporabnika
- **Upravlja** glasnost in časovno usklajenost zvoka za boljšo izkušnjo igre

> 💡 **Učni vir**: Raziščite ta [zvočni peskovnik](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play), da se naučite več o implementaciji zvoka v JavaScript igrah.

## Po predavanju kviz

[Po predavanju kviz](https://ff-quizzes.netlify.app/web/quiz/40)

## Pregled in samostojno učenje

Vaša naloga je ustvariti nov vzorčni primer igre, zato raziščite nekaj zanimivih iger, da vidite, kakšno igro bi lahko zgradili.

## Naloga

[Zgradite vzorčno igro](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve AI za prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije je priporočljivo profesionalno človeško prevajanje. Ne odgovarjamo za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.