<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-25T00:19:42+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "sl"
}
-->
# Osnove JavaScripta: Sprejemanje odločitev

![Osnove JavaScripta - Sprejemanje odločitev](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.sl.png)

> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

Ste se kdaj spraševali, kako aplikacije sprejemajo pametne odločitve? Na primer, kako navigacijski sistem izbere najhitrejšo pot ali kako termostat odloči, kdaj vklopiti ogrevanje? To je temeljni koncept sprejemanja odločitev v programiranju.

Tako kot je Babbageov analitični stroj zasnovan za izvajanje različnih zaporedij operacij glede na pogoje, morajo sodobni programi v JavaScriptu sprejemati odločitve glede na različne okoliščine. Ta sposobnost razvejanja in sprejemanja odločitev je tisto, kar statično kodo spremeni v odzivne, inteligentne aplikacije.

V tej lekciji se boste naučili, kako v svoje programe vključiti pogojno logiko. Raziskali bomo pogojne stavke, operaterje primerjave in logične izraze, ki omogočajo vaši kodi, da oceni situacije in ustrezno reagira.

## Predhodni kviz

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/11)

Sposobnost sprejemanja odločitev in nadzorovanja toka programa je temeljni vidik programiranja. Ta razdelek pokriva, kako nadzorovati potek izvajanja vaših JavaScript programov z uporabo logičnih vrednosti in pogojne logike.

[![Sprejemanje odločitev](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Sprejemanje odločitev")

> 🎥 Kliknite zgornjo sliko za video o sprejemanju odločitev.

> To lekcijo lahko opravite na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Kratek povzetek o logičnih vrednostih

Preden raziščemo sprejemanje odločitev, se vrnimo k logičnim vrednostim iz naše prejšnje lekcije. Poimenovane po matematiku Georgeu Booleu, te vrednosti predstavljajo binarna stanja – bodisi `true` ali `false`. Ni dvoumnosti, ni srednje poti.

Te binarne vrednosti so osnova vse računalniške logike. Vsaka odločitev, ki jo sprejme vaš program, se na koncu zmanjša na logično oceno.

Ustvarjanje logičnih spremenljivk je preprosto:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

To ustvari dve spremenljivki z eksplicitnimi logičnimi vrednostmi.

✅ Logične vrednosti so poimenovane po angleškem matematiku, filozofu in logiku Georgeu Booleu (1815–1864).

## Operaterji primerjave in logične vrednosti

V praksi redko ročno nastavljate logične vrednosti. Namesto tega jih ustvarite z ocenjevanjem pogojev: "Ali je to število večje od tistega?" ali "Ali sta ti vrednosti enaki?"

Operaterji primerjave omogočajo te ocene. Primerjajo vrednosti in vrnejo logične rezultate glede na razmerje med operandi.

| Simbol | Opis                                                                                                                                                   | Primer              |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `<`    | **Manj kot**: Primerja dve vrednosti in vrne logično vrednost `true`, če je vrednost na levi strani manjša od vrednosti na desni                        | `5 < 6 // true`     |
| `<=`   | **Manj kot ali enako**: Primerja dve vrednosti in vrne logično vrednost `true`, če je vrednost na levi strani manjša ali enaka vrednosti na desni       | `5 <= 6 // true`    |
| `>`    | **Več kot**: Primerja dve vrednosti in vrne logično vrednost `true`, če je vrednost na levi strani večja od vrednosti na desni                          | `5 > 6 // false`    |
| `>=`   | **Več kot ali enako**: Primerja dve vrednosti in vrne logično vrednost `true`, če je vrednost na levi strani večja ali enaka vrednosti na desni         | `5 >= 6 // false`   |
| `===`  | **Stroga enakost**: Primerja dve vrednosti in vrne logično vrednost `true`, če sta vrednosti na desni in levi enaki IN sta istega podatkovnega tipa.    | `5 === 6 // false`  |
| `!==`  | **Neenakost**: Primerja dve vrednosti in vrne nasprotno logično vrednost, kot bi jo vrnil operater stroge enakosti                                      | `5 !== 6 // true`   |

✅ Preverite svoje znanje tako, da napišete nekaj primerjav v konzoli brskalnika. Vas je kateri od vrnjenih podatkov presenetil?

## If stavek

Stavek `if` je kot vprašanje v vaši kodi. "Če je ta pogoj resničen, potem naredi to stvar." Verjetno je to najpomembnejše orodje, ki ga boste uporabljali za sprejemanje odločitev v JavaScriptu.

Tukaj je, kako deluje:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Pogoj gre znotraj oklepajev, in če je `true`, JavaScript zažene kodo znotraj zavitih oklepajev. Če je `false`, JavaScript preprosto preskoči celoten blok.

Pogosto boste uporabili operaterje primerjave za ustvarjanje teh pogojev. Poglejmo praktičen primer:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Ker `1000 >= 800` oceni kot `true`, se koda znotraj bloka izvede in v konzoli prikaže "Kupujem nov prenosnik!".

## If..Else stavek

Kaj pa, če želite, da vaš program naredi nekaj drugega, ko je pogoj napačen? Tukaj pride v poštev `else` – to je kot rezervni načrt.

Stavek `else` vam omogoča, da rečete "če ta pogoj ni resničen, naredi nekaj drugega."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Zdaj, ker je `500 >= 800` `false`, JavaScript preskoči prvi blok in namesto tega zažene `else` blok. V konzoli boste videli "Še ne morem si privoščiti novega prenosnika!"

✅ Preizkusite svoje razumevanje te kode in naslednje kode tako, da jo zaženete v konzoli brskalnika. Spremenite vrednosti spremenljivk currentMoney in laptopPrice, da spremenite vrnjeni `console.log()`.

## Switch stavek

Včasih morate primerjati eno vrednost z več možnostmi. Čeprav bi lahko povezali več stavkov `if..else`, ta pristop postane neroden. Stavek `switch` ponuja bolj čisto strukturo za obravnavo več diskretnih vrednosti.

Koncept je podoben mehanskim preklopnim sistemom, ki so se uporabljali v zgodnjih telefonskih centralah – ena vhodna vrednost določa, katero specifično pot bo sledilo izvajanje.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Tukaj je, kako je strukturiran:
- JavaScript oceni izraz enkrat
- Pregleda vsak `case`, da najde ujemanje
- Ko najde ujemanje, zažene ta blok kode
- `break` pove JavaScriptu, naj se ustavi in zapusti switch
- Če noben case ne ustreza, zažene `default` blok (če ga imate)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

V tem primeru JavaScript vidi, da je `dayNumber` `2`, najde ustrezni `case 2`, nastavi `dayName` na "Torek" in nato izstopi iz switch. Rezultat? "Danes je torek" se prikaže v konzoli.

✅ Preizkusite svoje razumevanje te kode in naslednje kode tako, da jo zaženete v konzoli brskalnika. Spremenite vrednosti spremenljivke a, da spremenite vrnjeni `console.log()`.

## Logični operaterji in logične vrednosti

Kompleksne odločitve pogosto zahtevajo ocenjevanje več pogojev hkrati. Tako kot logična algebra omogoča matematikom združevanje logičnih izrazov, programiranje ponuja logične operaterje za povezovanje več logičnih pogojev.

Ti operaterji omogočajo sofisticirano pogojno logiko z združevanjem preprostih ocen true/false.

| Simbol | Opis                                                                                     | Primer                                                                 |
| ------ | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `&&`   | **Logični IN**: Primerja dva logična izraza. Vrne true **samo**, če sta obe strani resnični | `(5 > 3) && (5 < 10) // Obe strani sta resnični. Vrne true` |
| `\|\|` | **Logični ALI**: Primerja dva logična izraza. Vrne true, če je vsaj ena stran resnična     | `(5 > 10) \|\| (5 < 10) // Ena stran je napačna, druga resnična. Vrne true` |
| `!`    | **Logični NE**: Vrne nasprotno vrednost logičnega izraza                                  | `!(5 > 10) // 5 ni večje od 10, zato "!" naredi true`         |

Ti operaterji vam omogočajo združevanje pogojev na koristen način:
- IN (`&&`) pomeni, da morata biti oba pogoja resnična
- ALI (`||`) pomeni, da mora biti vsaj en pogoj resničen  
- NE (`!`) obrne true v false (in obratno)

## Pogoji in odločitve z logičnimi operaterji

Poglejmo te logične operaterje v akciji z bolj realističnim primerom:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

V tem primeru: izračunamo 20% popust (640), nato ocenimo, ali naša razpoložljiva sredstva pokrivajo bodisi polno ceno ALI ceno s popustom. Ker 600 ustreza pragu cene s popustom 640, se pogoj oceni kot true.

### Operater negacije

Včasih je lažje razmišljati o tem, kdaj nekaj NI resnično. Na primer, namesto da vprašate "Ali je uporabnik prijavljen?", bi morda želeli vprašati "Ali uporabnik NI prijavljen?" Operater klicaja (`!`) obrne logiko za vas.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Operater `!` je kot da bi rekli "nasprotno od..." – če je nekaj `true`, `!` naredi `false`, in obratno.

### Ternarni izrazi

Za preproste pogojne dodelitve JavaScript ponuja **ternarni operater**. Ta jedrnata sintaksa vam omogoča, da napišete pogojni izraz v eni vrstici, kar je uporabno, ko morate dodeliti eno od dveh vrednosti glede na pogoj.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Beri kot vprašanje: "Ali je ta pogoj resničen? Če da, uporabi to vrednost. Če ne, uporabi tisto vrednost."

Spodaj je bolj otipljiv primer:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Vzemite si minuto, da to kodo preberete večkrat. Ali razumete, kako ti operaterji delujejo?

Tukaj ta vrstica pravi: "Ali je `firstNumber` večji od `secondNumber`? Če da, postavi `firstNumber` v `biggestNumber`. Če ne, postavi `secondNumber` v `biggestNumber`."

Ternarni operater je le krajši način za zapis tradicionalnega stavka `if..else`:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Oba pristopa proizvedeta enake rezultate. Ternarni operater ponuja jedrnatost, medtem ko je tradicionalna struktura if-else morda bolj berljiva za kompleksne pogoje.

---

## 🚀 Izziv

Ustvarite program, ki je najprej napisan z logičnimi operaterji, nato pa ga prepišite z uporabo ternarnega izraza. Katera sintaksa vam je ljubša?

---

## Izziv GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Ustvarite obsežen kalkulator ocen, ki prikazuje več konceptov sprejemanja odločitev iz te lekcije, vključno z if-else stavki, switch stavki, logičnimi operaterji in ternarnimi izrazi.

**Navodilo:** Napišite JavaScript program, ki sprejme študentovo numerično oceno (0-100) in določi njegovo črkovno oceno z uporabo naslednjih kriterijev:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Pod 60

Zahteve:
1. Uporabite if-else stavek za določitev črkovne ocene
2. Uporabite logične operaterje za preverjanje, ali študent opravi (ocena >= 60) IN ima odliko (ocena >= 90)
3. Uporabite switch stavek za podajanje specifičnih povratnih informacij za vsako črkovno oceno
4. Uporabite ternarni operater za določitev, ali je študent upravičen do naslednjega tečaja (ocena >= 70)
5. Vključite preverjanje vnosa, da zagotovite, da je ocena med 0 in 100

Preizkusite svoj program z različnimi ocenami, vključno z mejami, kot so 59, 60, 89, 90, in neveljavnimi vnosi.

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## Po-lecturni kviz

[Po-lecturni kviz](https://ff-quizzes.netlify.app/web/quiz/12)

## Pregled & Samostojno učenje

Preberite več o številnih operaterjih, ki so na voljo uporabniku [na MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Prebrskajte čudovit [pregled operaterjev Josha Comeaua](https://joshwcomeau.com/operator-lookup/)!

## Naloga

[Operaterji](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.