<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-25T00:33:00+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "sl"
}
-->
# Projekt Terrarij, 2. del: Uvod v CSS

![Uvod v CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

Se spomnite, kako je vaš HTML terrarij izgledal precej osnovno? S CSS-jem bomo to preprosto strukturo spremenili v nekaj vizualno privlačnega.

Če je HTML kot gradnja okvirja hiše, potem je CSS vse, kar hiši daje občutek domačnosti - barve sten, razporeditev pohištva, osvetlitev in kako se prostori med seboj povezujejo. Pomislite, kako se je palača Versailles začela kot preprosta lovska koča, nato pa je skrbna pozornost do dekoracije in postavitve spremenila v eno najveličastnejših zgradb na svetu.

Danes bomo vaš terrarij spremenili iz funkcionalnega v izpopolnjenega. Naučili se boste, kako natančno postaviti elemente, ustvariti postavitve, ki se prilagajajo različnim velikostim zaslona, in ustvariti vizualno privlačnost, ki naredi spletne strani privlačne.

Do konca te lekcije boste videli, kako lahko strateško oblikovanje s CSS-jem dramatično izboljša vaš projekt. Dodajmo nekaj stila vašemu terrariju.

## Predavanje - kviz

[Predavanje - kviz](https://ff-quizzes.netlify.app/web/quiz/17)

## Začetek z CSS-jem

CSS pogosto dojemamo kot nekaj, kar "naredi stvari lepe," vendar ima veliko širši namen. CSS je kot režiser filma - nadzorujete ne le, kako vse izgleda, ampak tudi, kako se premika, odziva na interakcijo in prilagaja različnim situacijam.

Sodobni CSS je izjemno zmogljiv. Lahko napišete kodo, ki samodejno prilagodi postavitve za telefone, tablice in namizne računalnike. Lahko ustvarite gladke animacije, ki usmerjajo pozornost uporabnikov na pravo mesto. Rezultati so lahko precej impresivni, ko vse deluje skupaj.

> 💡 **Nasvet za profesionalce**: CSS se nenehno razvija z novimi funkcijami in zmogljivostmi. Vedno preverite [CanIUse.com](https://caniuse.com), da preverite podporo brskalnika za nove funkcije CSS, preden jih uporabite v produkcijskih projektih.

**Kaj bomo dosegli v tej lekciji:**
- **Ustvarili** popolno vizualno zasnovo za vaš terrarij z uporabo sodobnih tehnik CSS
- **Raziskali** temeljne koncepte, kot so kaskada, dedovanje in CSS selektorji
- **Izvedli** strategije za odzivno pozicioniranje in postavitev
- **Zgradili** posodo za terrarij z uporabo oblik in stilov CSS

### Predpogoj

Dokončati morate HTML strukturo za vaš terrarij iz prejšnje lekcije in jo pripraviti za oblikovanje.

> 📺 **Video vir**: Oglejte si ta koristen video vodič
>
> [![Osnove CSS vadnica](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Nastavitev vaše CSS datoteke

Preden začnemo z oblikovanjem, moramo povezati CSS z našim HTML-jem. Ta povezava brskalniku pove, kje najde navodila za oblikovanje našega terrarija.

V mapi terrarija ustvarite novo datoteko z imenom `style.css`, nato jo povežite v razdelku `<head>` vašega HTML dokumenta:

```html
<link rel="stylesheet" href="./style.css" />
```

**Kaj ta koda naredi:**
- **Ustvari** povezavo med vašimi HTML in CSS datotekami
- **Pove** brskalniku, naj naloži in uporabi stile iz `style.css`
- **Uporabi** atribut `rel="stylesheet"`, da določi, da gre za CSS datoteko
- **Navaja** pot do datoteke z `href="./style.css"`

## Razumevanje kaskade CSS

Ste se kdaj spraševali, zakaj se CSS imenuje "kaskadni" slogovni listi? Slogi se kaskadno spuščajo kot slap, včasih pa si med seboj nasprotujejo.

Pomislite, kako delujejo vojaške poveljniške strukture - splošni ukaz lahko pravi "vsi vojaki naj nosijo zeleno," vendar lahko specifičen ukaz vaši enoti pravi "za slovesnost nosite modre uniforme." Bolj specifična navodila imajo prednost. CSS sledi podobni logiki, razumevanje te hierarhije pa močno olajša odpravljanje napak.

### Eksperimentiranje s prednostjo kaskade

Poglejmo kaskado v akciji z ustvarjanjem konflikta slogov. Najprej dodajte slog v vrstici v vaš `<h1>` element:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Kaj ta koda naredi:**
- **Uporabi** rdečo barvo neposredno na elementu `<h1>` z uporabo sloga v vrstici
- **Uporabi** atribut `style`, da vgradi CSS neposredno v HTML
- **Ustvari** slogovno pravilo z najvišjo prednostjo za ta specifičen element

Nato dodajte to pravilo v vašo datoteko `style.css`:

```css
h1 {
  color: blue;
}
```

**V zgornjem smo:**
- **Določili** CSS pravilo, ki cilja na vse `<h1>` elemente
- **Nastavili** barvo besedila na modro z uporabo zunanjega slogovnega lista
- **Ustvarili** pravilo z nižjo prednostjo v primerjavi s slogi v vrstici

✅ **Preverjanje znanja**: Katera barva se prikaže v vaši spletni aplikaciji? Zakaj ta barva zmaga? Ali lahko pomislite na scenarije, kjer bi želeli preglasiti sloge?

> 💡 **Prednostni vrstni red CSS (od najvišje do najnižje):**
> 1. **Slogi v vrstici** (atribut style)
> 2. **ID-ji** (#myId)
> 3. **Razredi** (.myClass) in atributi
> 4. **Selektorji elementov** (h1, div, p)
> 5. **Privzete nastavitve brskalnika**

## CSS dedovanje v praksi

CSS dedovanje deluje kot genetika - elementi podedujejo določene lastnosti od svojih nadrejenih elementov. Če nastavite družino pisav na elementu body, bo ves tekst znotraj samodejno uporabljal isto pisavo. To je podobno, kot se je značilna čeljust družine Habsburg pojavila skozi generacije, ne da bi bila določena za vsakega posameznika.

Vendar pa se ne podeduje vse. Slogi besedila, kot so pisave in barve, se podedujejo, vendar lastnosti postavitve, kot so robovi in obrobe, ne. Tako kot otroci lahko podedujejo fizične lastnosti, ne pa modnih izbir svojih staršev.

### Opazovanje dedovanja pisave

Poglejmo dedovanje v akciji z nastavitvijo družine pisav na elementu `<body>`:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Razčlenitev, kaj se zgodi tukaj:**
- **Nastavi** družino pisav za celotno stran z ciljanjem na element `<body>`
- **Uporabi** sklad pisav z rezervnimi možnostmi za boljšo združljivost brskalnika
- **Uporabi** sodobne sistemske pisave, ki izgledajo odlično na različnih operacijskih sistemih
- **Zagotovi**, da vsi podrejeni elementi podedujejo to pisavo, razen če je posebej preglasena

Odprite orodja za razvijalce v brskalniku (F12), pojdite na zavihek Elements in preverite vaš `<h1>` element. Videli boste, da podeduje družino pisav od body:

![podedovana pisava](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.sl.png)

✅ **Čas za eksperiment**: Poskusite nastaviti druge podedljive lastnosti na `<body>`, kot so `color`, `line-height` ali `text-align`. Kaj se zgodi z vašim naslovom in drugimi elementi?

> 📝 **Podedljive lastnosti vključujejo**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Nepodedljive lastnosti vključujejo**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Obvladovanje CSS selektorjev

CSS selektorji so vaš način ciljanja specifičnih elementov za oblikovanje. Delujejo kot dajanje natančnih navodil - namesto da rečete "hiša," lahko rečete "modra hiša z rdečimi vrati na ulici Maple."

CSS ponuja različne načine, kako biti specifičen, in izbira pravega selektorja je kot izbira ustreznega orodja za nalogo. Včasih morate oblikovati vsaka vrata v soseski, včasih pa samo ena specifična vrata.

### Selektorji elementov (oznake)

Selektorji elementov ciljajo na HTML elemente po njihovem imenu oznake. So popolni za nastavitev osnovnih slogov, ki se široko uporabljajo po vaši strani:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Razumevanje teh slogov:**
- **Nastavi** dosledno tipografijo po celotni strani z uporabo selektorja `body`
- **Odstrani** privzete robove in odstavke brskalnika za boljši nadzor
- **Oblikuje** vse elemente naslovov z barvo, poravnavo in razmikom
- **Uporabi** enote `rem` za prilagodljivo, dostopno velikost pisave

Medtem ko selektorji elementov dobro delujejo za splošno oblikovanje, boste potrebovali bolj specifične selektorje za oblikovanje posameznih komponent, kot so rastline v vašem terrariju.

### ID selektorji za edinstvene elemente

ID selektorji uporabljajo simbol `#` in ciljajo na elemente s specifičnimi atributi `id`. Ker morajo biti ID-ji edinstveni na strani, so popolni za oblikovanje posameznih, posebnih elementov, kot so naši levi in desni vsebniki za rastline.

Ustvarimo oblikovanje za stranske vsebnike našega terrarija, kjer bodo rastline:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Kaj ta koda doseže:**
- **Postavi** vsebnike na skrajne leve in desne robove z uporabo `absolute` pozicioniranja
- **Uporabi** enote `vh` (višina pogleda) za odzivno višino, ki se prilagaja velikosti zaslona
- **Uporabi** `box-sizing: border-box`, da je odstavanje vključeno v skupno širino
- **Odstrani** nepotrebne enote `px` iz ničelnih vrednosti za čistejšo kodo
- **Nastavi** subtilno barvo ozadja, ki je prijaznejša očem kot ostra siva

✅ **Izziv kakovosti kode**: Opazite, kako ta CSS krši načelo DRY (Don't Repeat Yourself). Ali ga lahko preoblikujete z uporabo ID-ja in razreda?

**Izboljšan pristop:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Razredni selektorji za ponovno uporabne sloge

Razredni selektorji uporabljajo simbol `.` in so popolni, ko želite uporabiti iste sloge na več elementih. Za razliko od ID-jev se razredi lahko ponovno uporabijo po celotnem HTML-ju, kar jih naredi idealne za dosledne vzorce oblikovanja.

V našem terrariju vsaka rastlina potrebuje podobno oblikovanje, vendar tudi individualno pozicioniranje. Uporabili bomo kombinacijo razredov za skupne sloge in ID-jev za edinstveno pozicioniranje.

**Tukaj je struktura HTML za vsako rastlino:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.sl.png" />
</div>
```

**Ključni elementi razloženi:**
- **Uporabi** `class="plant-holder"` za dosledno oblikovanje vsebnika med vsemi rastlinami
- **Uporabi** `class="plant"` za skupno oblikovanje in vedenje slike
- **Vključi** edinstven `id="plant1"` za individualno pozicioniranje in interakcijo z JavaScript
- **Zagotovi** opisni alt tekst za dostopnost bralnikov zaslona

Zdaj dodajte te sloge v vašo datoteko `style.css`:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Razčlenitev teh slogov:**
- **Ustvari** relativno pozicioniranje za nosilec rastline, da vzpostavi kontekst pozicioniranja
- **Nastavi** vsak nosilec rastline na 13% višine, kar zagotavlja, da se vse rastline prilegajo navpično brez drsenja
- **Premakne** nosilce rahlo levo, da bolje centrirajo rastline znotraj njihovih vsebnikov
- **Omogoči** rastlinam, da se odzivno prilagajajo z lastnostmi `max-width` in `max-height`
- **Uporabi** `z-index`, da se rastline plastijo nad drugimi elementi v terrariju
- **Doda** subtilen učinek ob prehodu z miško za boljšo interakcijo z uporabnikom

✅ **Kritično razmišljanje**: Zakaj potrebujemo oba selektorja `.plant-holder` in `.plant`? Kaj bi se zgodilo, če bi poskušali uporabiti samo enega?

> 💡 **Vzorec oblikovanja**: Vsebnik (`.plant-holder`) nadzoruje postavitev in pozicioniranje, medtem ko vsebina (`.plant`) nadzoruje videz in prilagodljivost. Ta ločitev naredi kodo bolj vzdržljivo in prilagodljivo.

## Razumevanje CSS pozicioniranja

CSS pozicioniranje je kot biti režiser na odru - usmerjate, kje stoji vsak igralec in kako se premika po odru. Nekateri igralci sledijo standardni formaciji, medtem ko drugi potrebujejo specifično pozicioniranje za dramatičen učinek.

Ko razumete pozicioniranje, postanejo številni izzivi postavitve obvladljivi. Potrebujete navigacijsko vrstico, ki ostane na vrhu, medtem ko uporabniki drsijo? Pozicioniranje to omogoča. Želite pojavno okno, ki se prikaže na specifični lokaciji? Tudi to je pozicioniranje.

### Pet vrednosti pozicioniranja

| Vrednost pozicioniranja | Vedenje | Primer uporabe |
|-------------------------|---------|----------------|
| `static` | Privzeti tok, ignorira top/left/right/bottom | Normalna postavitev dokumenta |
| `relative` | Pozicionirano glede na svoj normalen položaj | Majhne prilagoditve, ustvarjanje konteksta pozicioniranja |
| `absolute` | Pozicionirano glede na najbližjega pozicioniranega prednika | Natančno postavljanje, prekrivanja |
| `fixed` | Pozicionirano glede na pogled | Navigacijske vrstice, plavajoči elementi |
| `sticky` | Preklaplja med relativnim in fiksnim glede na drsenje | Glave, ki se držijo med drsenjem |

### Pozicioniranje v našem terrariju

Naš terrarij uporablja strateško kombinacijo vrst pozicioniranja za ustvarjanje želene postavitve:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Razumevanje strategije pozicioniranja:**
- **Absolutni vsebniki** so odstranjeni iz normalnega toka dokumenta in pripeti na robove zaslona
- **Relativni nosilci rastlin** ustvarjajo kontekst pozicioniranja, medtem ko ostajajo v toku dokumenta
- **Absolutne rastline** se lahko natančno pozicionirajo znotraj svojih relativnih vsebnikov
- **Ta kombinacija** omogoča, da se rastline zložijo navpično, medtem ko so individualno pozicionirane

> 🎯 **Zakaj je to pomembno**: Elementi `plant` potrebujejo absolutno pozicioniranje, da postanejo premični v naslednji lekciji. Absolutno pozicioniranje jih odstrani iz normalnega toka postavitve, kar omogoča interakcije povleci in spusti.

✅ **Čas za eksperiment**: Poskusite spremeniti vrednosti pozicioniranja in opazujte rezultate:
- Kaj se zgodi, če spremenite `.container` iz `absolute` v `relative`?
- Kako se spremeni postavitev, če `.plant-holder` uporablja `absolute` namesto `relative`?
- Kaj se zgodi, ko preklopite `.plant` na `relative` pozicioniranje?

## Gradnja terrarija s CSS-jem

Zdaj bomo zgradili steklen kozarec samo z uporabo CSS-ja - brez slik ali grafične programske opreme.

Ustvarjanje realističnega videza stekla, senc in globinskih učinkov z uporabo pozicioniranja in prosojnosti prikazuje vizualne zmogljivosti CSS-ja. Ta tehnika odraža, kako so arhitekti v gibanju Bauhaus uporabljali preproste geometrijske oblike za ustvarjanje kompleksnih, lepih struktur. Ko boste
Sestavimo terarij v kozarcu korak za korakom. Vsak del uporablja absolutno pozicioniranje in dimenzioniranje na osnovi odstotkov za odziven dizajn:

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**Razumevanje konstrukcije terarija:**
- **Uporablja** dimenzije na osnovi odstotkov za odzivno prilagajanje na vseh velikostih zaslonov
- **Pozicionira** elemente absolutno, da jih natančno zloži in poravna
- **Uporablja** različne vrednosti prosojnosti za učinek steklene transparentnosti
- **Izvaja** slojevanje z `z-index`, da rastline izgledajo znotraj kozarca
- **Dodaja** subtilne sence in prefinjen zaobljen rob za bolj realističen videz

### Odziven dizajn z odstotki

Opazite, kako vse dimenzije uporabljajo odstotke namesto fiksnih vrednosti v pikah:

**Zakaj je to pomembno:**
- **Zagotavlja**, da se terarij proporcionalno prilagaja na katerem koli zaslonu
- **Ohranja** vizualne odnose med komponentami kozarca
- **Omogoča** dosledno izkušnjo od mobilnih telefonov do velikih namiznih monitorjev
- **Dovoljuje**, da se dizajn prilagodi brez razbijanja vizualne postavitve

### CSS enote v praksi

Uporabljamo enote `rem` za zaobljen rob, ki se prilagajajo glede na velikost osnovne pisave. To omogoča bolj dostopne dizajne, ki upoštevajo uporabnikove preference pisave. Več o [relativnih enotah CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths) si lahko preberete v uradni specifikaciji.

✅ **Vizualni eksperiment**: Poskusite spremeniti te vrednosti in opazujte učinke:
- Spremenite prosojnost kozarca iz 0.5 na 0.8 – kako to vpliva na videz stekla?
- Prilagodite barvo zemlje iz `#3a241d` na `#8B4513` – kakšen vizualni učinek ima to?
- Spremenite `z-index` zemlje na 2 – kaj se zgodi s slojevanjem?

---

## Izziv GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Ustvarite CSS animacijo, ki naredi, da se rastline v terariju nežno zibajo sem in tja, simulirajoč učinek naravnega vetra. To vam bo pomagalo vaditi CSS animacije, transformacije in ključne okvirje ter izboljšati vizualno privlačnost vašega terarija.

**Navodilo:** Dodajte CSS animacije ključnih okvirjev, da rastline v terariju nežno nihajo levo in desno. Ustvarite animacijo nihanja, ki rahlo (2-3 stopinje) zavrti vsako rastlino levo in desno z dolžino trajanja 3-4 sekunde, ter jo uporabite na razredu `.plant`. Poskrbite, da se animacija neskončno ponavlja in ima funkcijo lajšanja za naravno gibanje.

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## 🚀 Izziv: Dodajanje odsevov na steklu

Pripravljeni, da izboljšate svoj terarij z realističnimi odsevi na steklu? Ta tehnika bo dodala globino in realizem dizajnu.

Ustvarili boste subtilne poudarke, ki simulirajo, kako se svetloba odbija od steklenih površin. Ta pristop je podoben tistemu, ki so ga uporabljali renesančni slikarji, kot je Jan van Eyck, da so naslikano steklo naredili tridimenzionalno. Tukaj je vaš cilj:

![končni terarij](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.sl.png)

**Vaš izziv:**
- **Ustvarite** subtilne bele ali svetlo obarvane ovalne oblike za odseve na steklu
- **Pozicionirajte** jih strateško na levi strani kozarca
- **Uporabite** ustrezne učinke prosojnosti in zameglitve za realističen odsev svetlobe
- **Uporabite** `border-radius` za ustvarjanje organskih, mehurčkastih oblik
- **Eksperimentirajte** z gradienti ali sencami za izboljšan realizem

## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/18)

## Razširite svoje znanje CSS

CSS se na začetku lahko zdi zapleten, vendar razumevanje teh osnovnih konceptov zagotavlja trdno podlago za bolj napredne tehnike.

**Vaša naslednja področja učenja CSS:**
- **Flexbox** - poenostavi poravnavo in razporeditev elementov
- **CSS Grid** - ponuja močna orodja za ustvarjanje kompleksnih postavitev
- **CSS spremenljivke** - zmanjšajo ponavljanje in izboljšajo vzdrževanje
- **Odziven dizajn** - zagotavlja, da spletna mesta dobro delujejo na različnih velikostih zaslonov

### Interaktivni učni viri

Vadite te koncepte z zabavnimi, praktičnimi igrami:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Obvladajte Flexbox skozi zabavne izzive
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Naučite se CSS Grid z gojenjem virtualnih korenčkov
- 🎯 [CSS Battle](https://cssbattle.dev/) - Preizkusite svoje CSS spretnosti z izzivi kodiranja

### Dodatno učenje

Za celovite osnove CSS dokončajte ta modul Microsoft Learn: [Oblikujte svojo HTML aplikacijo s CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Naloga

[CSS Refactoring](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatski prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.