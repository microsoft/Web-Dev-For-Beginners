<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89f7f9f800ce7c9f149e98baaae8491a",
  "translation_date": "2025-10-11T11:59:50+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "et"
}
-->
# Terrariumiprojekt, 1. osa: Sissejuhatus HTML-i

![Sissejuhatus HTML-i](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.et.png)
> Sketchnote autorilt [Tomomi Imura](https://twitter.com/girlie_mac)

## Loengu-eelne viktoriin

[Loengu-eelne viktoriin](https://ff-quizzes.netlify.app/web/quiz/15)


> Vaata videot

> 
> [![Git ja GitHubi põhialuste video](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### Sissejuhatus

HTML ehk HyperText Markup Language on veebilehe "skelett". Kui CSS "riietab" HTML-i ja JavaScript toob selle ellu, siis HTML on veebirakenduse keha. HTML-i süntaks peegeldab seda ideed, sisaldades "head", "body" ja "footer" silte.

Selles õppetükis kasutame HTML-i, et luua virtuaalse terrariumi liidese "skelett". Sellel on pealkiri ja kolm veergu: paremal ja vasakul veerus asuvad lohistatavad taimed ning keskel ala, mis kujutab klaasist terrariumi. Õppetüki lõpuks näete taimi veergudes, kuid liides näeb välja veidi kummaline; ärge muretsege, järgmises osas lisate CSS-i stiilid, et liides paremini välja näeks.

### Ülesanne

Looge oma arvutis kaust nimega 'terrarium' ja selle sees fail nimega 'index.html'. Seda saab teha Visual Studio Code'is, avades uue VS Code'i akna, klõpsates 'open folder' ja navigeerides oma uude kausta. Klõpsake Explorer paneelil väikest 'file' nuppu ja looge uus fail:

![Explorer VS Code'is](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.et.png)

Või

Kasutage neid käske oma git bashis:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` või `nano index.html`

> index.html failid näitavad brauserile, et see on kausta vaikimisi fail; URL-id nagu `https://anysite.com/test` võivad olla üles ehitatud kaustastruktuuri abil, mis sisaldab kausta nimega `test` ja selle sees `index.html`; `index.html` ei pea URL-is ilmuma.

---

## DocType ja html sildid

HTML-faili esimene rida on selle doctype. On veidi üllatav, et see rida peab olema faili kõige ülemises osas, kuid see ütleb vanematele brauseritele, et leht tuleb renderdada standardrežiimis, järgides praegust HTML-i spetsifikatsiooni.

> Näpunäide: VS Code'is saate sildi kohal hõljuda ja saada teavet selle kasutamise kohta MDN Reference juhenditest.

Teine rida peaks olema `<html>` sildi avamissilt, millele järgneb selle sulgemissilt `</html>`. Need sildid on teie liidese juurelemendid.

### Ülesanne

Lisage need read oma `index.html` faili ülaossa:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ DocType'i määramisega päringustringi abil saab määrata erinevaid režiime: [Quirks Mode ja Standards Mode](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). Need režiimid toetasid väga vanu brausereid, mida tänapäeval tavaliselt ei kasutata (Netscape Navigator 4 ja Internet Explorer 5). Võite jääda standardse doctype deklaratsiooni juurde.

---

## Dokumendi 'head'

HTML-dokumendi 'head' ala sisaldab olulist teavet teie veebilehe kohta, mida tuntakse ka kui [metaandmed](https://developer.mozilla.org/docs/Web/HTML/Element/meta). Meie puhul edastame veebiserverile, kuhu see leht renderdamiseks saadetakse, järgmised neli asja:

-   lehe pealkiri
-   lehe metaandmed, sealhulgas:
    -   'character set', mis näitab, millist märgistikku lehel kasutatakse
    -   brauseri teave, sealhulgas `x-ua-compatible`, mis näitab, et IE=edge brauserit toetatakse
    -   teave selle kohta, kuidas vaateaken peaks käituma, kui see laaditakse. Vaateakna seadmine algtasemele 1 kontrollib suumi taset, kui leht esmakordselt laaditakse.

### Ülesanne

Lisage 'head' plokk oma dokumendile `<html>` siltide vahele.

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ Mis juhtuks, kui määraksite vaateakna meta sildi selliselt: `<meta name="viewport" content="width=600">`? Lugege rohkem [vaateakna](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag) kohta.

---

## Dokumendi `body`

### HTML-sildid

HTML-is lisate oma .html faili sildid, et luua veebilehe elemente. Igal sildil on tavaliselt avamis- ja sulgemissilt, näiteks: `<p>hello</p>` tähistamaks lõiku. Looge oma liidese keha, lisades `<body>` sildid `<html>` siltide paari sisse; teie märgistus näeb nüüd välja selline:

### Ülesanne

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

Nüüd saate hakata oma lehte üles ehitama. Tavaliselt kasutatakse `<div>` silte, et luua lehe eraldi elemente. Loome rea `<div>` elemente, mis sisaldavad pilte.

### Pildid

Üks HTML-silt, mis ei vaja sulgemissilti, on `<img>` silt, kuna sellel on `src` element, mis sisaldab kogu teavet, mida leht vajab elemendi renderdamiseks.

Looge oma rakenduses kaust nimega `images` ja lisage sinna kõik pildid [lähtekoodi kaustast](../../../../3-terrarium/solution/images); (seal on 14 taimepilti).

### Ülesanne

Lisage need taimepildid kahe veeru vahele `<body></body>` siltide sees:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="../../../../translated_images/plant1.d87946a2ca70cc4316bda6e6c3af7210fbe9ada5539a7885141a9ce0efaf7be3.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="../../../../translated_images/plant2.8daa1606c9c1ad896bb171212c7d1d882e504b76b8ec3a2d1c337d775cf50dc3.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="../../../../translated_images/plant3.8b0d484381a2a2a77c5c06ad97ab6ae5b7023da8c6c7678b0183bc0e46ea17a7.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="../../../../translated_images/plant4.656e16ae1df37be2af5f4e7b5ab6c5decc432c3d3ec2eb98b904ddbecad49db0.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="../../../../translated_images/plant5.2b41b9355f11ebccd62d327f5f14e56531ecda9c6f970bc89e386ee9f0273bb0.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="../../../../translated_images/plant6.3d1827d03b6569946be13ae5da1f32947ae56732638a43757a7c616a6adccc5d.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="../../../../translated_images/plant7.8152c302ac97f621a6c595bdf3939103568f9efc7d3b06a0f02a1ea66f479de0.et.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="../../../../translated_images/plant8.38d6428174ffa850a47cd1b81d528fa528adda7d23f3ae0bb42f4a27356ca5e6.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="../../../../translated_images/plant9.f0e38d3327c37fc29cd2734d48d20c2cf69300898ece6d46708829e02ce540e3.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="../../../../translated_images/plant10.b159d6d6e985595f56d86b4b38061b8e7b4c9969c210c199fe967269cf935e7f.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="../../../../translated_images/plant11.2a03a1c2ec8ea84ef3a80c06cc6883f3960fbb669f2c0b0bd824ba33d7eb7d32.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="../../../../translated_images/plant12.60e9b53e538fbaf3e5797ebf800acb483baf5639e6cf378292ac2321ab8a5ea9.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="../../../../translated_images/plant13.07a51543c820bcf57f67a9a6c0acbd6211ff795e2e67a42a9718224534e95fab.et.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="../../../../translated_images/plant14.6e486371ba7d36ba3520d9828887993cb4c3edad8bdd8ff9b1b315717ff8cb63.et.png" />
		</div>
	</div>
</div>
```

> Märkus: Spanid vs. Divid. Divid on 'block' elemendid ja spanid 'inline'. Mis juhtuks, kui muudaksite need divid spanideks?

Selle märgistusega ilmuvad taimed ekraanile. See näeb välja üsna halb, kuna neid pole veel CSS-i abil stiliseeritud, ja me teeme seda järgmises õppetükis.

Igal pildil on alt-tekst, mis ilmub isegi siis, kui te ei näe või ei saa pilti renderdada. See on oluline atribuut, mida lisada juurdepääsetavuse tagamiseks. Õppige juurdepääsetavuse kohta rohkem tulevastes õppetundides; praegu pidage meeles, et alt-atribuut pakub alternatiivset teavet pildi kohta, kui kasutaja mingil põhjusel ei saa seda vaadata (aeglane ühendus, viga src atribuudis või kui kasutaja kasutab ekraanilugejat).

✅ Kas märkasite, et igal pildil on sama alt-silt? Kas see on hea tava? Miks või miks mitte? Kas saate seda koodi parandada?

---

## Semantiline märgistus

Üldiselt on eelistatav kasutada tähenduslikku 'semantikat' HTML-i kirjutamisel. Mida see tähendab? See tähendab, et kasutate HTML-silte, et esindada andmete või interaktsiooni tüüpi, milleks need on loodud. Näiteks lehe peamine pealkirja tekst peaks kasutama `<h1>` silti.

Lisage järgmine rida kohe pärast `<body>` sildi avamist:

```html
<h1>My Terrarium</h1>
```

Semantilise märgistuse kasutamine, näiteks pealkirjade `<h1>` ja loendite `<ul>` renderdamine, aitab ekraanilugejatel lehel navigeerida. Üldiselt peaksid nupud olema kirjutatud `<button>` ja loendid `<li>` kujul. Kuigi on _võimalik_ kasutada spetsiaalselt stiliseeritud `<span>` elemente klõpsukäsitlejatega nuppude jäljendamiseks, on parem, kui puudega kasutajad saavad tehnoloogiate abil kindlaks teha, kus lehel nupp asub, ja sellega suhelda, kui element ilmub nupuna. Sel põhjusel proovige kasutada semantilist märgistust nii palju kui võimalik.

✅ Vaadake ekraanilugejat ja [kuidas see veebilehega suhtleb](https://www.youtube.com/watch?v=OUDV1gqs9GA). Kas näete, miks mittesemantiline märgistus võib kasutajat frustreerida?

## Terrarium

Liidese viimane osa hõlmab märgistuse loomist, mis stiliseeritakse terrariumi loomiseks.

### Ülesanne:

Lisage see märgistus viimase `</div>` sildi kohale:

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

✅ Kuigi lisasite selle märgistuse ekraanile, ei näe te midagi renderdumas. Miks?

---

## 🚀Väljakutse

HTML-is on mõned vanad 'vanemad' sildid, millega on endiselt lõbus mängida, kuigi te ei tohiks kasutada vananenud silte nagu [need sildid](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) oma märgistuses. Kas saate kasutada vana `<marquee>` silti, et muuta h1 pealkiri horisontaalselt kerivaks? (kui teete seda, ärge unustage seda hiljem eemaldada)

## Loengu-järgne viktoriin

[Loengu-järgne viktoriin](https://ff-quizzes.netlify.app/web/quiz/16)

## Ülevaade ja iseseisev õppimine

HTML on 'proovitud ja tõeline' ehitussüsteem, mis on aidanud veebist kujundada selle, mis see täna on. Uurige veidi selle ajalugu, õppides vanu ja uusi silte. Kas saate aru, miks mõned sildid vananenuks muutusid ja mõned lisati? Milliseid silte võiks tulevikus tutvustada?

Lisateavet veebilehtede ja mobiilseadmete jaoks saitide loomise kohta leiate [Microsoft Learnist](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon).


## Ülesanne

[Harjutage HTML-i: Looge blogi makett](assignment.md)

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.