<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-25T00:33:55+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "sl"
}
-->
# Projekt Terrarij, 1. del: Uvod v HTML

![Uvod v HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, ali HyperText Markup Language, je osnova vsakega spletnega mesta, ki ste ga kdaj obiskali. Pomislite na HTML kot na okostje, ki daje strukturo spletnim stranem – določa, kam gre vsebina, kako je organizirana in kaj predstavlja vsak del. Medtem ko bo CSS kasneje "oblekel" vaš HTML z barvami in postavitvami, JavaScript pa ga bo oživil z interaktivnostjo, HTML zagotavlja osnovno strukturo, ki omogoča vse ostalo.

V tej lekciji boste ustvarili HTML strukturo za vmesnik virtualnega terarija. Ta praktični projekt vas bo naučil osnovnih konceptov HTML, medtem ko boste gradili nekaj vizualno privlačnega. Naučili se boste, kako organizirati vsebino z uporabo semantičnih elementov, delati s slikami in ustvariti osnovo za interaktivno spletno aplikacijo.

Do konca te lekcije boste imeli delujočo HTML stran, ki prikazuje slike rastlin v organiziranih stolpcih, pripravljeno za oblikovanje v naslednji lekciji. Ne skrbite, če bo na začetku videti osnovno – to je točno tisto, kar naj bi HTML storil, preden CSS doda vizualni sijaj.

## Predhodni kviz

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Poglejte in se naučite**: Oglejte si ta koristen video pregled
> 
> [![Video o osnovah HTML](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Priprava vašega projekta

Preden se lotimo pisanja HTML kode, si pripravimo ustrezno delovno okolje za projekt terarija. Ustvarjanje organizirane strukture datotek že na začetku je ključna navada, ki vam bo koristila skozi celotno pot spletnega razvoja.

### Naloga: Ustvarite strukturo projekta

Ustvarili boste namensko mapo za projekt terarija in dodali svojo prvo HTML datoteko. Tukaj sta dva pristopa, ki ju lahko uporabite:

**Možnost 1: Uporaba Visual Studio Code**
1. Odprite Visual Studio Code
2. Kliknite "File" → "Open Folder" ali uporabite `Ctrl+K, Ctrl+O` (Windows/Linux) ali `Cmd+K, Cmd+O` (Mac)
3. Ustvarite novo mapo z imenom `terrarium` in jo izberite
4. V podoknu Explorer kliknite ikono "New File"
5. Poimenujte datoteko `index.html`

![Raziskovalec VS Code prikazuje ustvarjanje nove datoteke](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.sl.png)

**Možnost 2: Uporaba ukazov v terminalu**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Kaj ti ukazi naredijo:**
- **Ustvarijo** novo mapo z imenom `terrarium` za vaš projekt
- **Premaknejo** v mapo terrarium
- **Ustvarijo** prazno datoteko `index.html`
- **Odprejo** datoteko v Visual Studio Code za urejanje

> 💡 **Nasvet**: Ime datoteke `index.html` je posebno v spletnem razvoju. Ko nekdo obišče spletno mesto, brskalniki samodejno iščejo `index.html` kot privzeto stran za prikaz. To pomeni, da bo URL, kot je `https://mysite.com/projects/`, samodejno prikazal datoteko `index.html` iz mape `projects`, ne da bi bilo treba v URL-ju navesti ime datoteke.

## Razumevanje strukture HTML dokumenta

Vsak HTML dokument sledi določeni strukturi, ki jo brskalniki potrebujejo za pravilno razumevanje in prikaz. Pomislite na to strukturo kot na uradno pismo – ima zahtevane elemente v določenem vrstnem redu, ki pomagajo prejemniku (v tem primeru brskalniku) pravilno obdelati vsebino.

Začnimo z dodajanjem osnovne osnove, ki jo potrebuje vsak HTML dokument.

### Deklaracija DOCTYPE in korenski element

Prvi dve vrstici vsake HTML datoteke služita kot "uvod" dokumenta brskalniku:

```html
<!DOCTYPE html>
<html></html>
```

**Razumevanje, kaj ta koda naredi:**
- **Deklarira** vrsto dokumenta kot HTML5 z uporabo `<!DOCTYPE html>`
- **Ustvari** korenski element `<html>`, ki bo vseboval vso vsebino strani
- **Vzpostavi** sodobne spletne standarde za pravilno upodabljanje brskalnika
- **Zagotovi** dosleden prikaz v različnih brskalnikih in napravah

> 💡 **Nasvet za VS Code**: Premaknite miško nad katero koli oznako HTML v VS Code, da si ogledate koristne informacije iz MDN Web Docs, vključno s primeri uporabe in podrobnostmi o združljivosti brskalnika.

> 📚 **Več o tem**: Deklaracija DOCTYPE preprečuje, da bi brskalniki vstopili v "quirks mode", ki se je uporabljal za podporo zelo starim spletnim mestom. Sodobni spletni razvoj uporablja preprosto deklaracijo `<!DOCTYPE html>` za zagotavljanje [upodabljanja skladnega s standardi](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Dodajanje osnovnih metapodatkov dokumenta

Odsek `<head>` v HTML dokumentu vsebuje ključne informacije, ki jih brskalniki in iskalniki potrebujejo, vendar jih obiskovalci neposredno ne vidijo na strani. Pomislite nanj kot na "zakulisne" informacije, ki pomagajo vaši spletni strani pravilno delovati in se pravilno prikazovati na različnih napravah in platformah.

Ti metapodatki povedo brskalnikom, kako prikazati vašo stran, katero kodiranje znakov uporabiti in kako ravnati z različnimi velikostmi zaslona – vse bistveno za ustvarjanje profesionalnih, dostopnih spletnih strani.

### Naloga: Dodajte glavo dokumenta

Vstavite ta odsek `<head>` med vaše začetne in zaključne oznake `<html>`:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Razčlenitev, kaj vsak element doseže:**
- **Nastavi** naslov strani, ki se pojavi v zavihkih brskalnika in rezultatih iskanja
- **Določi** kodiranje znakov UTF-8 za pravilno prikazovanje besedila po vsem svetu
- **Zagotovi** združljivost s sodobnimi različicami Internet Explorerja
- **Konfigurira** odzivno oblikovanje z nastavitvijo pogleda, ki ustreza širini naprave
- **Nadzoruje** začetno raven povečave za prikaz vsebine v naravni velikosti

> 🤔 **Razmislite o tem**: Kaj bi se zgodilo, če bi nastavili meta oznako pogleda, kot je ta: `<meta name="viewport" content="width=600">`? To bi prisililo stran, da je vedno široka 600 pik, kar bi porušilo odzivno oblikovanje! Več o [pravilni konfiguraciji pogleda](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Gradnja telesa dokumenta

Element `<body>` vsebuje vso vidno vsebino vaše spletne strani – vse, kar bodo uporabniki videli in s čimer bodo interagirali. Medtem ko je odsek `<head>` zagotavljal navodila brskalniku, odsek `<body>` vsebuje dejansko vsebino: besedilo, slike, gumbe in druge elemente, ki ustvarjajo vaš uporabniški vmesnik.

Dodajmo strukturo telesa in razumimo, kako HTML oznake delujejo skupaj za ustvarjanje smiselne vsebine.

### Razumevanje strukture HTML oznak

HTML uporablja parne oznake za definiranje elementov. Večina oznak ima začetno oznako, kot je `<p>`, in končno oznako, kot je `</p>`, z vsebino vmes: `<p>Pozdravljen, svet!</p>`. To ustvari element odstavka, ki vsebuje besedilo "Pozdravljen, svet!".

### Naloga: Dodajte element telesa

Posodobite svojo HTML datoteko, da vključuje element `<body>`:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

**Kaj zagotavlja ta popolna struktura:**
- **Vzpostavi** osnovni okvir HTML5 dokumenta
- **Vključuje** osnovne metapodatke za pravilno upodabljanje brskalnika
- **Ustvari** prazno telo, pripravljeno za vašo vidno vsebino
- **Sledi** najboljšim praksam sodobnega spletnega razvoja

Zdaj ste pripravljeni dodati vidne elemente vašega terarija. Uporabili bomo elemente `<div>` kot vsebnike za organizacijo različnih delov vsebine in elemente `<img>` za prikaz slik rastlin.

### Delo s slikami in vsebniškimi elementi postavitve

Slike so v HTML-ju posebne, ker uporabljajo "samozapiralne" oznake. Za razliko od elementov, kot je `<p></p>`, ki obdajajo vsebino, oznaka `<img>` vsebuje vse potrebne informacije znotraj same oznake z atributi, kot sta `src` za pot datoteke slike in `alt` za dostopnost.

Preden dodate slike v svoj HTML, boste morali pravilno organizirati datoteke projekta tako, da ustvarite mapo za slike in dodate grafike rastlin.

**Najprej pripravite svoje slike:**
1. Ustvarite mapo z imenom `images` znotraj mape projekta terrarium
2. Prenesite slike rastlin iz [mape rešitev](../../../../3-terrarium/solution/images) (skupaj 14 slik rastlin)
3. Kopirajte vse slike rastlin v novo mapo `images`

### Naloga: Ustvarite postavitev prikaza rastlin

Zdaj dodajte slike rastlin, organizirane v dveh stolpcih, med oznake `<body></body>`:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.sl.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.sl.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.sl.png" />
		</div>
	</div>
</div>
```

**Korak za korakom, kaj se dogaja v tej kodi:**
- **Ustvari** glavni vsebnik strani z `id="page"`, ki bo vseboval vso vsebino
- **Vzpostavi** dva vsebnika stolpcev: `left-container` in `right-container`
- **Organizira** 7 rastlin v levem stolpcu in 7 rastlin v desnem stolpcu
- **Ovije** vsako sliko rastline v div `plant-holder` za individualno pozicioniranje
- **Uporabi** dosledna imena razredov za oblikovanje s CSS v naslednji lekciji
- **Dodeli** edinstvene ID-je vsaki sliki rastline za interakcijo z JavaScript kasneje
- **Vključi** pravilne poti datotek, ki kažejo na mapo slik

> 🤔 **Razmislite o tem**: Opazite, da imajo vse slike trenutno enak alt besedilo "rastlina". To ni idealno za dostopnost. Uporabniki bralnikov zaslona bi slišali "rastlina" ponovljeno 14-krat, ne da bi vedeli, katera specifična rastlina je prikazana na vsaki sliki. Ali lahko razmislite o boljšem, bolj opisnem alt besedilu za vsako sliko?

> 📝 **Vrste HTML elementov**: Elementi `<div>` so "blokovni" in zavzamejo celotno širino, medtem ko so elementi `<span>` "v vrstici" in zavzamejo le potrebno širino. Kaj mislite, kaj bi se zgodilo, če bi vse te oznake `<div>` spremenili v oznake `<span>`?

S tem dodanim označevanjem se bodo rastline pojavile na zaslonu, čeprav še ne bodo videti polirane – za to je namenjen CSS v naslednji lekciji! Za zdaj imate trdno osnovo HTML, ki pravilno organizira vašo vsebino in sledi najboljšim praksam dostopnosti.

## Uporaba semantičnega HTML za dostopnost

Semantični HTML pomeni izbiro HTML elementov glede na njihov pomen in namen, ne le njihov videz. Ko uporabljate semantično označevanje, sporočate strukturo in pomen vaše vsebine brskalnikom, iskalnikom in pomožnim tehnologijam, kot so bralniki zaslona.

Ta pristop naredi vaše spletne strani bolj dostopne uporabnikom z invalidnostjo in pomaga iskalnikom bolje razumeti vašo vsebino. To je temeljno načelo sodobnega spletnega razvoja, ki ustvarja boljše izkušnje za vse.

### Dodajanje semantičnega naslova strani

Dodajmo ustrezno glavo na stran vašega terarija. Vstavite to vrstico takoj za začetno oznako `<body>`:

```html
<h1>My Terrarium</h1>
```

**Zakaj je semantično označevanje pomembno:**
- **Pomaga** bralnikom zaslona pri navigaciji in razumevanju strukture strani
- **Izboljša** optimizacijo za iskalnike (SEO) z jasnim hierarhičnim prikazom vsebine
- **Povečuje** dostopnost za uporabnike z motnjami vida ali kognitivnimi razlikami
- **Ustvarja** boljše uporabniške izkušnje na vseh napravah in platformah
- **Sledi** spletnim standardom in najboljšim praksam za profesionalni razvoj

**Primeri semantičnih in nesemantičnih izbir:**

| Namen | ✅ Semantična izbira | ❌ Nesemantična izbira |
|-------|---------------------|-----------------------|
| Glavni naslov | `<h1>Naslov</h1>` | `<div class="big-text">Naslov</div>` |
| Navigacija | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Gumb | `<button>Klikni me</button>` | `<span onclick="...">Klikni me</span>` |
| Vsebina članka | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Oglejte si v praksi**: Oglejte si [kako bralniki zaslona interagirajo s spletnimi stranmi](https://www.youtube.com/watch?v=OUDV1gqs9GA), da razumete, zakaj je semantično označevanje ključno za dostopnost. Opazite, kako pravilna struktura HTML pomaga uporabnikom pri učinkoviti navigaciji.

## Ustvarjanje vsebnika za terarij

Zdaj dodajmo HTML strukturo za sam terarij – stekleni vsebnik, kjer bodo rastline kasneje postavljene. Ta odsek prikazuje pomemben koncept: HTML zagotavlja strukturo, vendar brez CSS oblikovanja ti elementi še ne bodo vidni.

Označevanje terarija uporablja opisna imena razredov, ki bodo naredila CSS oblikovanje intuitivno in enostavno za vzdrževanje v naslednji lekciji.

### Naloga: Dodajte strukturo terarija

Vstavite to označevanje nad zadnjo oznako `</div>` (pred zaključnim tagom vsebnika strani):

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

**Razumevanje te strukture terarija:**
- **Ustvari** glavni vsebnik terarija z edinstvenim ID-jem za oblikovanje
- **Določi** ločene elemente za vsako vizualno komponento (zgornji del, stene, zemlja, dno)
- **Vključuje** ugnezdene elemente za učinke odseva stekla (sijajni elementi)
- **Uporablja** opisna imena razredov, ki jasno označujejo namen vsakega elementa
- **Pripravi** strukturo za CSS oblikovanje, ki bo ustvarilo videz steklenega terarija

> 🤔 **Opazite nekaj?**: Čeprav ste dodali to označevanje, na strani ne vidite nič novega! To popolnoma ponazarja, kako HTML zagotavlja strukturo, medtem ko CSS zagotavlja videz. Ti `<div>` elementi obstajajo, vendar še nimajo vizualnega oblikovanja – to prihaja v naslednji lekciji!

---

## Izziv za GitHub Copilot Agent

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Ustvarite semantično HTML strukturo za odsek vodnika za nego rastlin, ki bi ga lahko dodali projektu terarija.
**Poziv:** Ustvarite semantični HTML odsek, ki vključuje glavni naslov "Vodnik za nego rastlin", tri pododseke z naslovi "Zalivanje", "Potrebe po svetlobi" in "Nega zemlje", pri čemer vsak vsebuje odstavek informacij o negi rastlin. Uporabite ustrezne semantične HTML oznake, kot so `<section>`, `<h2>`, `<h3>` in `<p>`, da ustrezno strukturirate vsebino.

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si lahko preberete tukaj.

## Raziskovanje izziva zgodovine HTML

**Učenje o razvoju spleta**

HTML se je od svojega nastanka, ko je Tim Berners-Lee leta 1990 na CERN-u ustvaril prvi spletni brskalnik, močno razvil. Nekatere starejše oznake, kot je `<marquee>`, so zdaj zastarele, ker ne ustrezajo sodobnim standardom dostopnosti in načelom odzivnega oblikovanja.

**Preizkusite ta eksperiment:**
1. Začasno ovijte svoj naslov `<h1>` v oznako `<marquee>`: `<marquee><h1>Moj terarij</h1></marquee>`
2. Odprite svojo stran v brskalniku in opazujte učinek drsenja
3. Razmislite, zakaj je bila ta oznaka zastarela (namig: pomislite na uporabniško izkušnjo in dostopnost)
4. Odstranite oznako `<marquee>` in se vrnite k semantičnemu označevanju

**Vprašanja za razmislek:**
- Kako bi drseči naslov vplival na uporabnike z motnjami vida ali občutljivostjo na gibanje?
- Katere sodobne tehnike CSS bi lahko dosegle podobne vizualne učinke na bolj dostopen način?
- Zakaj je pomembno uporabljati trenutne spletne standarde namesto zastarelih elementov?

Raziskujte več o [zastarelih in opuščenih HTML elementih](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements), da razumete, kako se spletni standardi razvijajo za izboljšanje uporabniške izkušnje.


## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/16)

## Pregled in samostojno učenje

**Poglobite svoje znanje o HTML**

HTML je že več kot 30 let temelj spleta, ki se je razvil iz preprostega jezika za označevanje dokumentov v sofisticirano platformo za gradnjo interaktivnih aplikacij. Razumevanje tega razvoja vam pomaga ceniti sodobne spletne standarde in sprejemati boljše odločitve pri razvoju.

**Priporočene učne poti:**

1. **Zgodovina in razvoj HTML**
   - Raziskujte časovnico od HTML 1.0 do HTML5
   - Raziščite, zakaj so bile določene oznake opuščene (dostopnost, prijaznost mobilnim napravam, vzdržljivost)
   - Preučite nove funkcije HTML in predloge

2. **Poglobljeno o semantičnem HTML**
   - Preučite celoten seznam [semantičnih elementov HTML5](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Vadite prepoznavanje, kdaj uporabiti `<article>`, `<section>`, `<aside>` in `<main>`
   - Naučite se o atributih ARIA za izboljšano dostopnost

3. **Sodobni spletni razvoj**
   - Raziskujte [gradnjo odzivnih spletnih strani](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) na Microsoft Learn
   - Razumite, kako HTML integrira s CSS in JavaScript
   - Naučite se o najboljših praksah za spletno zmogljivost in SEO

**Vprašanja za razmislek:**
- Katere zastarele HTML oznake ste odkrili in zakaj so bile odstranjene?
- Katere nove funkcije HTML se predlagajo za prihodnje različice?
- Kako semantični HTML prispeva k dostopnosti spleta in SEO?


## Naloga

[Vadite svoj HTML: Ustvarite maketo bloga](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatski prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni prevod s strani človeka. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.