<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acb5ae00cde004304296bb97da8ff4c3",
  "translation_date": "2025-08-29T12:54:27+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "sl"
}
-->
# Projekt Terrarij, 2. del: Uvod v CSS

![Uvod v CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

## Kviz pred predavanjem

[Kviz pred predavanjem](https://ff-quizzes.netlify.app/web/quiz/17)

### Uvod

CSS ali kaskadne stilske predloge rešujejo pomemben problem spletnega razvoja: kako narediti vašo spletno stran vizualno privlačno. Oblikovanje vaših aplikacij jih naredi bolj uporabne in estetsko privlačne; CSS lahko uporabite tudi za ustvarjanje odzivnega spletnega oblikovanja (RWD) – kar omogoča, da vaše aplikacije izgledajo dobro ne glede na velikost zaslona, na katerem so prikazane. CSS ni namenjen zgolj lepšemu videzu aplikacij; njegova specifikacija vključuje tudi animacije in transformacije, ki omogočajo napredne interakcije v vaših aplikacijah. Skupina za delo na CSS pomaga vzdrževati trenutne specifikacije CSS; njihovo delo lahko spremljate na [spletnem mestu World Wide Web Consortium](https://www.w3.org/Style/CSS/members).

> Opomba: CSS je jezik, ki se razvija, tako kot vse na spletu, in ne vsi brskalniki podpirajo novejše dele specifikacije. Vedno preverite svoje implementacije s pomočjo [CanIUse.com](https://caniuse.com).

V tej lekciji bomo dodali sloge našemu spletnemu terariju in se naučili več o več konceptih CSS: kaskadi, dedovanju, uporabi selektorjev, pozicioniranju in uporabi CSS za gradnjo postavitev. Med procesom bomo oblikovali terarij in ustvarili dejanski terarij.

### Predpogoj

HTML za vaš terarij mora biti že pripravljen in pripravljen za oblikovanje.

> Oglejte si video

> 
> [![Osnove Git in GitHub videa](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Naloga

V svoji mapi za terarij ustvarite novo datoteko z imenom `style.css`. To datoteko uvozite v razdelek `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## Kaskada

Kaskadne stilske predloge vključujejo idejo, da se slogi 'kaskadno' uporabljajo, tako da je uporaba sloga vodena s svojo prioriteto. Slogi, ki jih določi avtor spletnega mesta, imajo prednost pred tistimi, ki jih določi brskalnik. Slogi, določeni 'v vrstici', imajo prednost pred tistimi, ki so določeni v zunanji stilski predlogi.

### Naloga

Dodajte vrstični slog "color: red" svoji oznaki `<h1>`:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Nato dodajte naslednjo kodo v svojo datoteko `style.css`:

```CSS
h1 {
 color: blue;
}
```

✅ Katera barva se prikaže v vaši spletni aplikaciji? Zakaj? Ali lahko najdete način za preglasitev slogov? Kdaj bi to želeli storiti ali zakaj ne?

---

## Dedovanje

Slogi se dedujejo od slogov prednika do potomca, tako da gnezdeni elementi dedujejo sloge svojih staršev.

### Naloga

Nastavite pisavo telesa na določeno pisavo in preverite pisavo gnezdenega elementa:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Odprite konzolo brskalnika na zavihku 'Elements' in opazujte pisavo H1. Deduje svojo pisavo od telesa, kot je navedeno v brskalniku:

![dedovana pisava](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.sl.png)

✅ Ali lahko naredite, da gnezden slog deduje drugačno lastnost?

---

## CSS selektorji

### Oznake

Do zdaj ima vaša datoteka `style.css` oblikovane le nekaj oznak, aplikacija pa izgleda precej nenavadno:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Tak način oblikovanja oznake vam omogoča nadzor nad edinstvenimi elementi, vendar morate nadzorovati sloge mnogih rastlin v svojem terariju. Da bi to dosegli, morate uporabiti CSS selektorje.

### Id-ji

Dodajte nekaj sloga za postavitev levega in desnega vsebnika. Ker je le en levi vsebnik in le en desni vsebnik, so v označbi dobili id-je. Za njihovo oblikovanje uporabite `#`:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Tukaj ste te vsebnike postavili z absolutnim pozicioniranjem na skrajno levo in desno stran zaslona ter uporabili odstotke za njihovo širino, da se lahko prilagodijo majhnim mobilnim zaslonom.

✅ Ta koda je precej ponavljajoča, zato ni "DRY" (Don't Repeat Yourself); ali lahko najdete boljši način za oblikovanje teh id-jev, morda z id-jem in razredom? Spremeniti bi morali označbo in preoblikovati CSS:

```html
<div id="left-container" class="container"></div>
```

### Razredi

V zgornjem primeru ste oblikovali dva edinstvena elementa na zaslonu. Če želite, da se slogi uporabljajo za več elementov na zaslonu, lahko uporabite CSS razrede. To storite za postavitev rastlin v levem in desnem vsebniku.

Opazite, da ima vsaka rastlina v HTML označbi kombinacijo id-jev in razredov. Id-ji se tukaj uporabljajo za JavaScript, ki ga boste kasneje dodali za manipulacijo postavitve rastlin v terariju. Razredi pa dajejo vsem rastlinam določen slog.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Dodajte naslednje v svojo datoteko `style.css`:

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Pomembno v tem odlomku je mešanje relativnega in absolutnega pozicioniranja, kar bomo obravnavali v naslednjem razdelku. Oglejte si, kako so višine obravnavane z odstotki:

Višino nosilca rastlin nastavite na 13 %, kar je dobra številka, da so vse rastline prikazane v vsakem navpičnem vsebniku brez potrebe po drsenju.

Nosilec rastlin premaknete v levo, da so rastline bolj centrirane znotraj vsebnika. Slike imajo veliko prozornega ozadja, da so bolj vlečljive, zato jih je treba potisniti v levo, da se bolje prilegajo zaslonu.

Rastlini sami določite največjo širino 150 %. To omogoča, da se zmanjša, ko se brskalnik zmanjša. Poskusite spremeniti velikost brskalnika; rastline ostanejo v svojih vsebnikih, vendar se zmanjšajo, da se prilegajo.

Prav tako je opazna uporaba z-indexa, ki nadzoruje relativno višino elementa (tako da rastline sedijo na vsebniku in se zdijo, kot da so v terariju).

✅ Zakaj potrebujete tako nosilec rastlin kot selektor CSS za rastline?

## CSS pozicioniranje

Mešanje lastnosti pozicioniranja (obstajajo statično, relativno, fiksno, absolutno in lepljivo pozicioniranje) je lahko nekoliko zapleteno, vendar vam ob pravilni uporabi omogoča dober nadzor nad elementi na vaših straneh.

Absolutno pozicionirani elementi so pozicionirani glede na najbližje pozicionirane prednike, in če jih ni, so pozicionirani glede na telo dokumenta.

Relativno pozicionirani elementi so pozicionirani na podlagi navodil CSS za prilagoditev njihove postavitve glede na njihov začetni položaj.

V našem primeru je `plant-holder` relativno pozicioniran element, ki je pozicioniran znotraj absolutno pozicioniranega vsebnika. Rezultat tega je, da so stranski vsebniki pritrjeni levo in desno, nosilec rastlin pa je gnezden, prilagaja se znotraj stranskih vsebnikov in omogoča prostor za postavitev rastlin v navpično vrsto.

> Sama `plant` ima tudi absolutno pozicioniranje, kar je potrebno, da je vlečljiva, kot boste odkrili v naslednji lekciji.

✅ Eksperimentirajte s spreminjanjem vrst pozicioniranja stranskih vsebnikov in nosilca rastlin. Kaj se zgodi?

## CSS postavitve

Zdaj boste uporabili, kar ste se naučili, za izdelavo samega terarija, vse z uporabo CSS!

Najprej oblikujte otroke `.terrarium` div kot zaobljen pravokotnik z uporabo CSS:

```CSS
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
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
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

Opazite uporabo odstotkov tukaj. Če zmanjšate brskalnik, lahko vidite, kako se kozarec prav tako prilagaja. Prav tako opazite odstotke za širine in višine elementov kozarca ter kako je vsak element absolutno pozicioniran v sredini, pritrjen na dno pogleda.

Uporabljamo tudi `rem` za border-radius, dolžino, relativno na pisavo. Več o tej vrsti relativnega merjenja preberite v [CSS specifikaciji](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Poskusite spremeniti barve in prosojnost kozarca v primerjavi s tistimi od zemlje. Kaj se zgodi? Zakaj?

---

## 🚀Izziv

Dodajte 'mehurček' sijaja na spodnje levo območje kozarca, da bo videti bolj steklen. Oblikovali boste `.jar-glossy-long` in `.jar-glossy-short`, da bosta videti kot odsevni sijaj. Tukaj je, kako bi izgledalo:

![končni terarij](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.sl.png)

Za dokončanje kviza po predavanju pojdite skozi ta modul Learn: [Oblikujte svojo HTML aplikacijo s CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/18)

## Pregled in samostojno učenje

CSS se zdi varljivo preprost, vendar se pri poskusu popolnega oblikovanja aplikacije za vse brskalnike in vse velikosti zaslonov pojavijo številni izzivi. CSS-Grid in Flexbox sta orodji, ki sta bila razvita, da bi delo naredila nekoliko bolj strukturirano in zanesljivo. O teh orodjih se učite z igranjem [Flexbox Froggy](https://flexboxfroggy.com/) in [Grid Garden](https://codepip.com/games/grid-garden/).

## Naloga

[CSS preoblikovanje](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za strojno prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo strokovno človeško prevajanje. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.