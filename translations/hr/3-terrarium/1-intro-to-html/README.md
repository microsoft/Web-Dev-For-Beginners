<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "20c72cf2e5b0050d38ca3cb14a75a9df",
  "translation_date": "2025-10-25T00:03:06+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "hr"
}
-->
# Projekt Terarij, 1. dio: Uvod u HTML

![Uvod u HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.hr.png)
> Sketchnote autorice [Tomomi Imura](https://twitter.com/girlie_mac)

HTML, ili HyperText Markup Language, temelj je svake web stranice koju ste ikada posjetili. Zamislite HTML kao kostur koji daje strukturu web stranicama – definira gdje ide sadržaj, kako je organiziran i što svaki dio predstavlja. Dok će CSS kasnije "ukrasiti" vaš HTML bojama i izgledom, a JavaScript ga oživjeti interaktivnošću, HTML pruža osnovnu strukturu koja omogućuje sve ostalo.

U ovoj lekciji kreirat ćete HTML strukturu za sučelje virtualnog terarija. Ovaj praktični projekt naučit će vas osnovnim HTML konceptima dok gradite nešto vizualno privlačno. Naučit ćete kako organizirati sadržaj koristeći semantičke elemente, raditi s slikama i stvoriti temelj za interaktivnu web aplikaciju.

Na kraju ove lekcije imat ćete funkcionalnu HTML stranicu koja prikazuje slike biljaka u organiziranim stupcima, spremnu za stiliziranje u sljedećoj lekciji. Ne brinite ako u početku izgleda osnovno – upravo to HTML treba raditi prije nego što CSS doda vizualni sjaj.

## Kviz prije predavanja

[Prethodni kviz](https://ff-quizzes.netlify.app/web/quiz/15)

> 📺 **Gledajte i učite**: Pogledajte ovaj koristan video pregled
> 
> [![Video o osnovama HTML-a](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

## Postavljanje vašeg projekta

Prije nego što zaronimo u HTML kod, postavimo odgovarajući radni prostor za vaš projekt terarija. Stvaranje organizirane strukture datoteka od početka ključna je navika koja će vam dobro doći tijekom vašeg putovanja u web razvoj.

### Zadatak: Kreirajte strukturu projekta

Kreirat ćete namjensku mapu za svoj projekt terarija i dodati svoju prvu HTML datoteku. Evo dva pristupa koja možete koristiti:

**Opcija 1: Korištenje Visual Studio Code-a**
1. Otvorite Visual Studio Code
2. Kliknite "File" → "Open Folder" ili koristite `Ctrl+K, Ctrl+O` (Windows/Linux) ili `Cmd+K, Cmd+O` (Mac)
3. Kreirajte novu mapu pod nazivom `terrarium` i odaberite je
4. U oknu Explorer kliknite ikonu "New File"
5. Nazovite svoju datoteku `index.html`

![VS Code Explorer prikazuje stvaranje nove datoteke](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.hr.png)

**Opcija 2: Korištenje naredbi u terminalu**
```bash
mkdir terrarium
cd terrarium
touch index.html
code index.html
```

**Što ove naredbe postižu:**
- **Kreiraju** novi direktorij pod nazivom `terrarium` za vaš projekt
- **Navigiraju** u direktorij terarija
- **Kreiraju** praznu datoteku `index.html`
- **Otvaraju** datoteku u Visual Studio Code-u za uređivanje

> 💡 **Savjet**: Naziv datoteke `index.html` je poseban u web razvoju. Kada netko posjeti web stranicu, preglednici automatski traže `index.html` kao zadanu stranicu za prikaz. To znači da će URL poput `https://mysite.com/projects/` automatski prikazati datoteku `index.html` iz mape `projects` bez potrebe za navođenjem naziva datoteke u URL-u.

## Razumijevanje strukture HTML dokumenta

Svaki HTML dokument slijedi određenu strukturu koju preglednici trebaju razumjeti i ispravno prikazati. Zamislite ovu strukturu kao formalno pismo – ima potrebne elemente u određenom redoslijedu koji pomažu primatelju (u ovom slučaju pregledniku) da pravilno obradi sadržaj.

Započnimo dodavanjem osnovnog temelja koji svaki HTML dokument treba.

### Deklaracija DOCTYPE-a i korijenski element

Prve dvije linije bilo koje HTML datoteke služe kao "uvod" dokumenta pregledniku:

```html
<!DOCTYPE html>
<html></html>
```

**Razumijevanje što ovaj kod radi:**
- **Deklarira** tip dokumenta kao HTML5 koristeći `<!DOCTYPE html>`
- **Kreira** korijenski element `<html>` koji će sadržavati sav sadržaj stranice
- **Uspostavlja** moderne web standarde za pravilno prikazivanje u preglednicima
- **Osigurava** dosljedan prikaz na različitim preglednicima i uređajima

> 💡 **Savjet za VS Code**: Pređite mišem preko bilo koje HTML oznake u VS Code-u kako biste vidjeli korisne informacije iz MDN Web Docs, uključujući primjere upotrebe i detalje o kompatibilnosti preglednika.

> 📚 **Saznajte više**: Deklaracija DOCTYPE sprječava preglednike da uđu u "quirks mode", koji se koristio za podršku vrlo starim web stranicama. Moderni web razvoj koristi jednostavnu deklaraciju `<!DOCTYPE html>` kako bi osigurao [prikaz u skladu sa standardima](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode).

## Dodavanje osnovnih metapodataka dokumenta

Odjeljak `<head>` HTML dokumenta sadrži ključne informacije koje su potrebne preglednicima i tražilicama, ali koje posjetitelji ne vide izravno na stranici. Zamislite ga kao "iza kulisa" informacije koje pomažu vašoj web stranici da pravilno funkcionira i da se ispravno prikazuje na različitim uređajima i platformama.

Ovi metapodaci govore preglednicima kako prikazati vašu stranicu, koju kodnu stranicu koristiti i kako se nositi s različitim veličinama zaslona – sve bitno za stvaranje profesionalnih, pristupačnih web stranica.

### Zadatak: Dodajte zaglavlje dokumenta

Umetnite ovaj odjeljak `<head>` između vaših otvarajućih i zatvarajućih `<html>` oznaka:

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

**Razlaganje što svaki element postiže:**
- **Postavlja** naslov stranice koji se pojavljuje na karticama preglednika i rezultatima pretraživanja
- **Određuje** UTF-8 kodnu stranicu za pravilno prikazivanje teksta širom svijeta
- **Osigurava** kompatibilnost s modernim verzijama Internet Explorera
- **Konfigurira** responzivni dizajn postavljanjem viewporta da odgovara širini uređaja
- **Kontrolira** početnu razinu zumiranja za prikaz sadržaja u prirodnoj veličini

> 🤔 **Razmislite o ovome**: Što bi se dogodilo da postavite meta oznaku viewporta ovako: `<meta name="viewport" content="width=600">`? To bi prisililo stranicu da uvijek bude široka 600 piksela, što bi narušilo responzivni dizajn! Saznajte više o [ispravnoj konfiguraciji viewporta](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

## Izgradnja tijela dokumenta

Element `<body>` sadrži sav vidljivi sadržaj vaše web stranice – sve što korisnici vide i s čime interagiraju. Dok je odjeljak `<head>` pružio upute pregledniku, odjeljak `<body>` sadrži stvarni sadržaj: tekst, slike, gumbe i druge elemente koji čine vaše korisničko sučelje.

Dodajmo strukturu tijela i razumijmo kako HTML oznake rade zajedno kako bi stvorile smislen sadržaj.

### Razumijevanje strukture HTML oznaka

HTML koristi parove oznaka za definiranje elemenata. Većina oznaka ima otvarajuću oznaku poput `<p>` i zatvarajuću oznaku poput `</p>`, s sadržajem između: `<p>Pozdrav svijete!</p>`. Ovo stvara element odlomka koji sadrži tekst "Pozdrav svijete!".

### Zadatak: Dodajte element tijela

Ažurirajte svoju HTML datoteku kako biste uključili element `<body>`:

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

**Evo što ova kompletna struktura pruža:**
- **Uspostavlja** osnovni okvir HTML5 dokumenta
- **Uključuje** osnovne metapodatke za pravilno prikazivanje u preglednicima
- **Kreira** prazno tijelo spremno za vaš vidljivi sadržaj
- **Slijedi** najbolje prakse modernog web razvoja

Sada ste spremni dodati vidljive elemente svog terarija. Koristit ćemo `<div>` elemente kao spremnike za organizaciju različitih dijelova sadržaja i `<img>` elemente za prikaz slika biljaka.

### Rad s slikama i spremnicima za raspored

Slike su posebne u HTML-u jer koriste "samozatvarajuće" oznake. Za razliku od elemenata poput `<p></p>` koji obuhvaćaju sadržaj, oznaka `<img>` sadrži sve potrebne informacije unutar same oznake koristeći atribute poput `src` za putanju datoteke slike i `alt` za pristupačnost.

Prije dodavanja slika u vaš HTML, trebate pravilno organizirati datoteke projekta tako da kreirate mapu za slike i dodate grafike biljaka.

**Prvo, postavite svoje slike:**
1. Kreirajte mapu pod nazivom `images` unutar mape projekta terarija
2. Preuzmite slike biljaka iz [mape rješenja](../../../../3-terrarium/solution/images) (ukupno 14 slika biljaka)
3. Kopirajte sve slike biljaka u svoju novu mapu `images`

### Zadatak: Kreirajte raspored prikaza biljaka

Sada dodajte slike biljaka organizirane u dva stupca između vaših oznaka `<body></body>`:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.hr.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.hr.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.hr.png" />
		</div>
	</div>
</div>
```

**Korak po korak, evo što se događa u ovom kodu:**
- **Kreira** glavni spremnik stranice s `id="page"` za držanje cijelog sadržaja
- **Uspostavlja** dva spremnika stupaca: `left-container` i `right-container`
- **Organizira** 7 biljaka u lijevom stupcu i 7 biljaka u desnom stupcu
- **Obuhvaća** svaku sliku biljke u `plant-holder` div za pojedinačno pozicioniranje
- **Primjenjuje** dosljedne nazive klasa za stiliziranje u sljedećoj lekciji
- **Dodjeljuje** jedinstvene ID-ove svakoj slici biljke za interakciju putem JavaScripta kasnije
- **Uključuje** ispravne putanje datoteka koje upućuju na mapu slika

> 🤔 **Razmislite o ovome**: Primijetite da sve slike trenutno imaju isti alt tekst "biljka". To nije idealno za pristupačnost. Korisnici čitača zaslona čuli bi "biljka" ponovljeno 14 puta bez da znaju koja specifična biljka je prikazana na svakoj slici. Možete li smisliti bolje, opisnije alt tekstove za svaku sliku?

> 📝 **Vrste HTML elemenata**: `<div>` elementi su "blok razine" i zauzimaju punu širinu, dok su `<span>` elementi "inline" i zauzimaju samo potrebnu širinu. Što mislite da bi se dogodilo da promijenite sve ove `<div>` oznake u `<span>` oznake?

S ovim dodanim oznakama, biljke će se pojaviti na ekranu, iako još neće izgledati dotjerano – za to je zadužen CSS u sljedećoj lekciji! Za sada imate čvrst HTML temelj koji pravilno organizira vaš sadržaj i slijedi najbolje prakse pristupačnosti.

## Korištenje semantičkog HTML-a za pristupačnost

Semantički HTML znači odabir HTML elemenata na temelju njihovog značenja i svrhe, a ne samo njihovog izgleda. Kada koristite semantičko označavanje, komunicirate strukturu i značenje svog sadržaja preglednicima, tražilicama i pomoćnim tehnologijama poput čitača zaslona.

Ovaj pristup čini vaše web stranice pristupačnijima korisnicima s invaliditetom i pomaže tražilicama da bolje razumiju vaš sadržaj. To je temeljno načelo modernog web razvoja koje stvara bolje iskustvo za sve.

### Dodavanje semantičkog naslova stranice

Dodajmo odgovarajući naslov vašoj stranici terarija. Umetnite ovu liniju odmah nakon vaše otvarajuće oznake `<body>`:

```html
<h1>My Terrarium</h1>
```

**Zašto je semantičko označavanje važno:**
- **Pomaže** čitačima zaslona da navigiraju i razumiju strukturu stranice
- **Poboljšava** optimizaciju za tražilice (SEO) razjašnjavanjem hijerarhije sadržaja
- **Povećava** pristupačnost za korisnike s oštećenjem vida ili kognitivnim razlikama
- **Stvara** bolje korisničko iskustvo na svim uređajima i platformama
- **Slijedi** web standarde i najbolje prakse za profesionalni razvoj

**Primjeri semantičkih i nesemantičkih izbora:**

| Svrha | ✅ Semantički izbor | ❌ Nesemantički izbor |
|-------|--------------------|-----------------------|
| Glavni naslov | `<h1>Naslov</h1>` | `<div class="big-text">Naslov</div>` |
| Navigacija | `<nav><ul><li></li></ul></nav>` | `<div class="menu"><div></div></div>` |
| Gumb | `<button>Klikni me</button>` | `<span onclick="...">Klikni me</span>` |
| Sadržaj članka | `<article><p></p></article>` | `<div class="content"><div></div></div>` |

> 🎥 **Pogledajte u akciji**: Pogledajte [kako čitači zaslona interagiraju s web stranicama](https://www.youtube.com/watch?v=OUDV1gqs9GA) kako biste razumjeli zašto je semantičko označavanje ključno za pristupačnost. Primijetite kako pravilna HTML struktura pomaže korisnicima da učinkovito navigiraju.

## Kreiranje spremnika za terarij

Sada dodajmo HTML strukturu za sam terarij – stakleni spremnik u kojem će biljke na kraju biti smještene. Ovaj odjeljak demonstrira važan koncept: HTML pruža strukturu, ali bez CSS stiliziranja, ti elementi još neće biti vidljivi.

Označavanje terarija koristi opisne nazive klasa koji će učiniti CSS stiliziranje intuitivnim i lakim za održavanje u sljedećoj lekciji.

### Zadatak: Dodajte strukturu terarija

Umetnite ovo označavanje iznad posljednje oznake `</div>` (prije zatvarajuće oznake spremnika stranice):

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

**Razumijevanje ove strukture terarija:**
- **Kreira** glavni spremnik terarija s jedinstvenim ID-om za stiliziranje
- **Definira** zasebne elemente za svaku vizualnu komponentu (vrh, zidovi, zemlja, dno)
- **Uključuje** ugniježđene elemente za efekte refleksije stakla (sjajni elementi)
- **Koristi** opisne nazive klasa koji jasno označavaju svrhu svakog elementa
- **Priprema** strukturu za CSS stiliziranje koje će stvoriti izgled staklenog terarija

> 🤔 **Primijetite nešto?**: Iako ste dodali ovo označavanje, ne vidite ništa novo na stranici! Ovo savršeno ilustrira kako HTML pruža strukturu dok CSS pruža izgled. Ovi `<div>` elementi postoje, ali još nemaju vizualno stiliziranje – to dolazi u sljedećoj lekciji!

---

## Izazov za GitHub Copilot agenta

Koristite način rada Agent za dovršavanje sljedećeg izazova:

**Opis:** Kreirajte semantičku HTML strukturu za odjeljak vodiča za njegu biljaka koji bi se mogao dodati projektu terarija.
**Zadatak:** Izradite semantički HTML odjeljak koji uključuje glavni naslov "Vodič za njegu biljaka", tri pododjeljka s naslovima "Zalijevanje", "Zahtjevi za svjetlom" i "Njega tla", od kojih svaki sadrži odlomak informacija o njezi biljaka. Koristite odgovarajuće semantičke HTML oznake poput `<section>`, `<h2>`, `<h3>` i `<p>` za pravilno strukturiranje sadržaja.

Saznajte više o [agent modu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.

## Istražite izazov povijesti HTML-a

**Učenje o evoluciji weba**

HTML se značajno razvio od kada je Tim Berners-Lee stvorio prvi web preglednik u CERN-u 1990. godine. Neki stariji tagovi poput `<marquee>` sada su zastarjeli jer ne funkcioniraju dobro s modernim standardima pristupačnosti i principima responzivnog dizajna.

**Isprobajte ovaj eksperiment:**
1. Privremeno obuhvatite svoj `<h1>` naslov oznakom `<marquee>`: `<marquee><h1>Moj terarij</h1></marquee>`
2. Otvorite svoju stranicu u pregledniku i promatrajte efekt pomicanja
3. Razmislite zašto je ovaj tag zastario (savjet: razmislite o korisničkom iskustvu i pristupačnosti)
4. Uklonite oznaku `<marquee>` i vratite se na semantičku oznaku

**Pitanja za razmišljanje:**
- Kako bi pomični naslov mogao utjecati na korisnike s oštećenjima vida ili osjetljivošću na pokrete?
- Koje moderne CSS tehnike mogu postići slične vizualne efekte na pristupačniji način?
- Zašto je važno koristiti trenutne web standarde umjesto zastarjelih elemenata?

Saznajte više o [zastarjelim i ukinutim HTML elementima](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) kako biste razumjeli kako se web standardi razvijaju za poboljšanje korisničkog iskustva.


## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/16)

## Pregled i samostalno učenje

**Produbite svoje znanje o HTML-u**

HTML je temelj weba već više od 30 godina, razvijajući se od jednostavnog jezika za označavanje dokumenata do sofisticirane platforme za izradu interaktivnih aplikacija. Razumijevanje ove evolucije pomaže vam cijeniti moderne web standarde i donositi bolje odluke u razvoju.

**Preporučeni putovi učenja:**

1. **Povijest i evolucija HTML-a**
   - Istražite vremenski slijed od HTML-a 1.0 do HTML5
   - Saznajte zašto su određeni tagovi ukinuti (pristupačnost, prilagođenost mobilnim uređajima, održivost)
   - Istražite nove značajke HTML-a i prijedloge

2. **Dubinsko proučavanje semantičkog HTML-a**
   - Proučite potpuni popis [semantičkih elemenata HTML5](https://developer.mozilla.org/docs/Web/HTML/Element)
   - Vježbajte prepoznavanje kada koristiti `<article>`, `<section>`, `<aside>` i `<main>`
   - Naučite o ARIA atributima za poboljšanu pristupačnost

3. **Moderni web razvoj**
   - Istražite [izradu responzivnih web stranica](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon) na Microsoft Learn
   - Razumite kako HTML integrira s CSS-om i JavaScriptom
   - Naučite o najboljim praksama za web performanse i SEO

**Pitanja za razmišljanje:**
- Koje ste zastarjele HTML oznake otkrili i zašto su uklonjene?
- Koje nove HTML značajke se predlažu za buduće verzije?
- Kako semantički HTML doprinosi web pristupačnosti i SEO-u?


## Zadatak

[Vježbajte svoj HTML: Izradite maketu bloga](assignment.md)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.