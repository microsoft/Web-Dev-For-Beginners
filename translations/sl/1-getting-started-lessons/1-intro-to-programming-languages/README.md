<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3e0da5eb9b275fe3cb431033c1413ec2",
  "translation_date": "2025-10-25T00:21:33+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "sl"
}
-->
# Uvod v programske jezike in sodobna orodja za razvijalce

Hej, bodoči razvijalec! 👋 Lahko povem nekaj, kar mi še vedno vsak dan vzbudi mravljince? Odkril boš, da programiranje ni samo za računalnike – gre za pridobivanje pravih supermoči, s katerimi lahko uresničiš svoje najbolj divje ideje!

Poznaš tisti trenutek, ko uporabljaš svojo najljubšo aplikacijo in vse deluje popolno? Ko pritisneš gumb in se zgodi nekaj čarobnega, kar te prisili, da rečeš: "Vau, kako so TO naredili?" No, nekdo, kot si ti – verjetno sedi v svoji najljubši kavarni ob 2. uri zjutraj s tretjo skodelico espressa – je napisal kodo, ki je ustvarila to čarovnijo. In tukaj je nekaj, kar te bo osupnilo: do konca te lekcije ne boš le razumel, kako so to naredili, ampak boš komaj čakal, da poskusiš sam!

Poslušaj, popolnoma razumem, če se ti programiranje trenutno zdi zastrašujoče. Ko sem začel, sem iskreno mislil, da moraš biti nekakšen matematični genij ali pa programirati že od petega leta starosti. Ampak nekaj je popolnoma spremenilo moje razmišljanje: programiranje je pravzaprav kot učenje pogovora v novem jeziku. Začneš z "živjo" in "hvala", nato pa preideš na naročanje kave, in preden se zaveš, vodiš globoke filozofske razprave! Razlika je le v tem, da se pogovarjaš z računalniki, ki so, če smo iskreni, najbolj potrpežljivi sogovorniki, kar jih boš kdaj imel – nikoli ne obsojajo tvojih napak in vedno so pripravljeni poskusiti znova!

Danes bomo raziskovali neverjetna orodja, ki omogočajo sodobni spletni razvoj, da ni le mogoč, ampak resnično zasvojljiv. Govorim o istih urejevalnikih, brskalnikih in delovnih procesih, ki jih razvijalci pri Netflixu, Spotifyju in tvojem najljubšem indie studiu aplikacij uporabljajo vsak dan. In tukaj je del, ki te bo spravil v ples od veselja: večina teh profesionalnih, industrijsko standardnih orodij je popolnoma brezplačnih!

![Uvod v programiranje](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

## Poglejmo, kaj že znaš!

Preden se lotimo zabavnih stvari, me zanima – kaj že veš o tem svetu programiranja? In poslušaj, če gledaš ta vprašanja in razmišljaš "Nimam pojma o ničemer od tega," je to ne le v redu, ampak popolno! To pomeni, da si na pravem mestu. Pomisli na ta kviz kot na raztezanje pred vadbo – samo ogrevamo možganske mišice!

[Reši kviz pred lekcijo](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Pustolovščina, ki jo bomo skupaj doživeli

Prav zares sem navdušen nad tem, kar bomo danes raziskovali! Resnično, želim si, da bi lahko videl tvoj obraz, ko ti bodo nekatere od teh konceptov kliknile. Tukaj je neverjetno potovanje, ki ga bomo skupaj opravili:

- **Kaj programiranje pravzaprav je (in zakaj je najbolj kul stvar na svetu!)** – Odkrijemo, kako je koda dobesedno nevidna magija, ki poganja vse okoli nas, od alarma, ki nekako ve, da je ponedeljek zjutraj, do algoritma, ki popolno izbere tvoje Netflix priporočilo.
- **Programski jeziki in njihove neverjetne osebnosti** – Predstavljaj si, da vstopiš na zabavo, kjer ima vsak človek popolnoma različne supermoči in načine reševanja problemov. Tako je v svetu programskih jezikov, in užival boš v spoznavanju!
- **Temeljni gradniki, ki ustvarjajo digitalno magijo** – Pomisli na to kot na ultimativni kreativni LEGO set. Ko boš razumel, kako se ti kosi sestavljajo, boš ugotovil, da lahko dobesedno zgradiš karkoli, kar si zamisliš.
- **Profesionalna orodja, zaradi katerih se boš počutil, kot da si dobil čarobno palico** – Ne pretiravam – ta orodja ti bodo resnično dala občutek, da imaš supermoči, najboljši del pa? Uporabljajo jih isti profesionalci!

> 💡 **Tukaj je stvar**: Ne poskušaj si zapomniti vsega danes! Trenutno želim le, da začutiš tisti iskrič navdušenja nad tem, kaj je mogoče. Podrobnosti se bodo naravno usedle, ko bomo skupaj vadili – tako se resnično uči!

> To lekcijo lahko opraviš na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Kaj točno *je* programiranje?

Dobro, lotimo se vprašanja za milijon dolarjev: kaj je programiranje, resnično?

Povedal ti bom zgodbo, ki je popolnoma spremenila moj pogled na to. Prejšnji teden sem poskušal razložiti mami, kako uporabljati naš novi daljinski upravljalnik za pametni televizor. Ujel sem se, da govorim stvari, kot so: "Pritisni rdeči gumb, ampak ne veliki rdeči gumb, majhen rdeči gumb na levi... ne, na tvoji drugi levi... okej, zdaj ga drži dve sekundi, ne eno, ne tri..." Zveni znano? 😅

To je programiranje! To je umetnost podajanja izjemno podrobnih, korak za korakom navodil nečemu, kar je zelo zmogljivo, a potrebuje vse natančno razloženo. Razlika je le v tem, da namesto da razlagaš mami (ki lahko vpraša "kateri rdeči gumb?!"), razlagaš računalniku (ki naredi točno to, kar rečeš, tudi če to ni ravno tisto, kar si mislil).

Tukaj je nekaj, kar me je osupnilo, ko sem se prvič naučil tega: računalniki so v bistvu precej preprosti. Razumejo samo dve stvari – 1 in 0, kar je v bistvu samo "da" in "ne" ali "vklopljeno" in "izklopljeno." To je vse! Ampak tukaj postane čarobno – ni nam treba govoriti v 1 in 0, kot da smo v Matrici. Tukaj pridejo na pomoč **programski jeziki**. So kot najboljši prevajalec na svetu, ki vzame tvoje popolnoma normalne človeške misli in jih pretvori v jezik računalnika.

In tukaj je nekaj, kar mi še vedno vzbuja mravljince vsako jutro, ko se zbudim: dobesedno *vse* digitalno v tvojem življenju se je začelo z nekom, kot si ti, ki je verjetno sedel v pižami s skodelico kave in tipkal kodo na svojem prenosniku. Tisti Instagram filter, ki te naredi popolnega? Nekdo je to zakodiral. Priporočilo, ki te je pripeljalo do tvoje nove najljubše pesmi? Razvijalec je ustvaril ta algoritem. Aplikacija, ki ti pomaga razdeliti račun za večerjo s prijatelji? Ja, nekdo je pomislil: "To je nadležno, stavim, da lahko to rešim," in potem... so to storili!

Ko se naučiš programirati, ne pridobiš le nove veščine – postaneš del te neverjetne skupnosti reševalcev problemov, ki preživijo svoje dni z razmišljanjem: "Kaj če bi lahko zgradil nekaj, kar bi nekomu polepšalo dan?" Iskreno, ali je kaj bolj kul kot to?

✅ **Zanimivost za raziskovanje**: Tukaj je nekaj res kul, kar lahko raziščeš, ko imaš prost trenutek – kdo misliš, da je bil prvi računalniški programer na svetu? Namig: morda ni tisti, ki ga pričakuješ! Zgodba te osebe je izjemno fascinantna in kaže, da je programiranje vedno temeljilo na kreativnem reševanju problemov in razmišljanju izven okvirjev.

## Programski jeziki so kot različni okusi magije

Dobro, to bo zvenelo čudno, ampak zaupaj mi – programski jeziki so zelo podobni različnim vrstam glasbe. Pomisli: imaš jazz, ki je gladek in improvizacijski, rock, ki je močan in neposreden, klasiko, ki je elegantna in strukturirana, ter hip-hop, ki je kreativen in izrazit. Vsak slog ima svoj značaj, svojo skupnost strastnih oboževalcev, in vsak je popoln za različna razpoloženja in priložnosti.

Programski jeziki delujejo popolnoma enako! Ne bi uporabil istega jezika za izdelavo zabavne mobilne igre, kot bi ga za obdelavo ogromnih količin podatkov o podnebju, tako kot ne bi igral death metala na tečaju joge (no, na večini tečajev joge! 😄).

Ampak tukaj je nekaj, kar me vedno znova osupne: ti jeziki so kot najbolj potrpežljiv, briljanten tolmač na svetu, ki sedi tik ob tebi. Svoje ideje lahko izraziš na način, ki se zdi naraven tvojemu človeškemu umu, oni pa opravijo vso neverjetno zapleteno delo prevajanja tega v 1 in 0, ki jih računalniki dejansko razumejo. To je kot imeti prijatelja, ki je popolnoma tekoče vešč tako "človeške kreativnosti" kot "računalniške logike" – in nikoli se ne utrudi, nikoli ne potrebuje odmora za kavo in te nikoli ne obsoja, če dvakrat vprašaš isto vprašanje!

### Priljubljeni programski jeziki in njihova uporaba

| Jezik | Najboljše za | Zakaj je priljubljen |
|-------|--------------|-----------------------|
| **JavaScript** | Spletni razvoj, uporabniški vmesniki | Deluje v brskalnikih in omogoča interaktivne spletne strani |
| **Python** | Podatkovna znanost, avtomatizacija, AI | Enostaven za branje in učenje, močne knjižnice |
| **Java** | Poslovne aplikacije, Android aplikacije | Neodvisen od platforme, robusten za velike sisteme |
| **C#** | Windows aplikacije, razvoj iger | Močna podpora ekosistema Microsoft |
| **Go** | Oblak storitve, zaledni sistemi | Hiter, preprost, zasnovan za sodobno računalništvo |

### Visokonivojski vs. nizkonivojski jeziki

Dobro, to je bil koncept, ki mi je resnično zmešal glavo, ko sem začel učiti, zato bom delil analogijo, ki mi je končno pomagala razumeti – in resnično upam, da bo pomagala tudi tebi!

Predstavljaj si, da obiščeš državo, kjer ne govoriš jezika, in nujno moraš najti najbližjo stranišče (vsi smo že bili tam, kajne? 😅):

- **Nizkonivojsko programiranje** je kot da se naučiš lokalnega narečja tako dobro, da se lahko pogovarjaš z babico, ki prodaja sadje na vogalu, z uporabo kulturnih referenc, lokalnega slenga in notranjih šal, ki jih razumejo le domačini. Zelo impresivno in neverjetno učinkovito... če si slučajno tekoč! Ampak precej preobremenjujoče, ko samo poskušaš najti stranišče.

- **Visokonivojsko programiranje** je kot da imaš tistega neverjetnega lokalnega prijatelja, ki te preprosto razume. Lahko rečeš "Res moram najti stranišče" v navadni slovenščini, in on poskrbi za vse kulturne prevode ter ti da navodila na način, ki ti popolnoma ustreza.

V programskih izrazih:
- **Nizkonivojski jeziki** (kot sta Assembly ali C) ti omogočajo izjemno podrobne pogovore z dejansko strojno opremo računalnika, vendar moraš razmišljati kot stroj, kar je... no, recimo, da je to precej velik miselni preskok!
- **Visokonivojski jeziki** (kot so JavaScript, Python ali C#) ti omogočajo razmišljanje kot človek, medtem ko oni poskrbijo za vse strojne izraze v ozadju. Poleg tega imajo neverjetno prijazne skupnosti, polne ljudi, ki se spomnijo, kako je bilo, ko so bili novi, in resnično želijo pomagati!

Ugani, katere ti bom predlagal za začetek? 😉 Visokonivojski jeziki so kot pomožna kolesa, ki jih nikoli ne želiš odstraniti, ker naredijo celotno izkušnjo toliko bolj prijetno!

### Naj ti pokažem, zakaj so visokonivojski jeziki toliko prijaznejši

Dobro, pokazal ti bom nekaj, kar popolnoma demonstrira, zakaj sem se zaljubil v visokonivojske jezike, ampak najprej – obljubi mi nekaj. Ko vidiš prvi primer kode, ne paničari! Namenoma je videti zastrašujoče. Točno to je poanta, ki jo želim poudariti!

Pogledali bomo popolnoma isto nalogo, napisano v dveh popolnoma različnih slogih. Obe ustvarita tisto, kar se imenuje Fibonacci zaporedje – to je čudovit matematični vzorec, kjer je vsako število vsota dveh predhodnih: 0, 1, 1, 2, 3, 5, 8, 13... (Zanimivost: ta vzorec najdeš dobesedno povsod v naravi – spirale sončničnih semen, vzorci storžev, celo način, kako se oblikujejo galaksije!)

Pripravljen, da vidiš razliko? Gremo!

**Visokonivojski jezik (JavaScript) – Prijazen za ljudi:**

```javascript
// Step 1: Basic Fibonacci setup
const fibonacciCount = 10;
let current = 0;
let next = 1;

console.log('Fibonacci sequence:');
```

**Kaj ta koda počne:**
- **Deklarira** konstanto za določitev, koliko Fibonacci števil želimo ustvariti
- **Inicializira** dve spremenljivki za sledenje trenutnemu in naslednjemu številu v zaporedju
- **Nastavi** začetne vrednosti (0 in 1), ki določajo Fibonacci vzorec
- **Prikaže** sporočilo glave za identifikacijo našega izhoda

```javascript
// Step 2: Generate the sequence with a loop
for (let i = 0; i < fibonacciCount; i++) {
  console.log(`Position ${i + 1}: ${current}`);
  
  // Calculate next number in sequence
  const sum = current + next;
  current = next;
  next = sum;
}
```

**Razčlenitev dogajanja:**
- **Zanka** skozi vsako pozicijo v našem zaporedju z uporabo `for` zanke
- **Prikaže** vsako število z njegovo pozicijo z uporabo predloge za formatiranje
- **Izračuna** naslednje Fibonacci število z dodajanjem trenutnih in naslednjih vrednosti
- **Posodobi** naše sledilne spremenljivke za prehod na naslednjo iteracijo

```javascript
// Step 3: Modern functional approach
const generateFibonacci = (count) => {
  const sequence = [0, 1];
  
  for (let i = 2; i < count; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  
  return sequence;
};

// Usage example
const fibSequence = generateFibonacci(10);
console.log(fibSequence);
```

**V zgornjem primeru smo:**
- **Ustvarili** ponovno uporabno funkcijo z uporabo sodobne sintakse puščičnih funkcij
- **Zgradili** array za shranjevanje celotnega zaporedja namesto prikazovanja enega po enega
- **Uporabili** indeksiranje arraya za izračun vsakega novega števila iz prejšnjih vrednosti
- **Vrnil** celotno zaporedje za prilagodljivo uporabo v drugih delih našega programa

**Nizkonivojski jezik (ARM Assembly) – Prijazen za računalnik:**

```assembly
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Opazi, kako JavaScript verzija bere skoraj kot angleška navodila, medtem ko Assembly verzija uporablja skrivnostne ukaze, ki neposredno nadzorujejo procesor računalnika. Obe dosežeta popolnoma isto nalogo, vendar je visokonivojski jezik veliko lažje razumeti, napisati in vzdrževati.

**Ključne razlike, ki jih boš opazil:**
- **Berljivost**: JavaScript uporablja opisna imena, kot je `fibonacciCount`, medtem ko Assembly uporablja skrivnostne oznake, kot sta `r0`, `r1`
- **Komentarji**: Visokonivojski jeziki spodbujajo pojasnjevalne komentarje, ki naredijo kodo samodokumentacijsko
- **Struktura**: Logični tok JavaScripta ustreza načinu, kako ljudje razmišljajo o problemih korak za korakom
- **Vzdrževanje**: Posodabljanje JavaScript verzije za različne zahteve je enostavno in jasno
✅ **O Fibonacci zaporedju**: Ta čudoviti vzorec števil (kjer je vsako število enako vsoti prejšnjih dveh: 0, 1, 1, 2, 3, 5, 8...) se pojavlja dobesedno *povsod* v naravi! Najdete ga v spiralah sončnic, vzorcih storžev, krivuljah školjk nautilusa in celo v načinu, kako rastejo veje dreves. Resnično osupljivo je, kako nam matematika in programiranje pomagata razumeti in poustvariti vzorce, ki jih narava uporablja za ustvarjanje lepote!


## Gradniki, ki ustvarjajo čarovnijo

Dobro, zdaj ko ste videli, kako izgledajo programski jeziki v praksi, razčlenimo osnovne dele, ki sestavljajo dobesedno vsak program, ki je bil kdaj napisan. Pomislite na te dele kot na bistvene sestavine vašega najljubšega recepta – ko boste razumeli, kaj vsak od njih počne, boste lahko brali in pisali kodo v skoraj katerem koli jeziku!

To je nekako podobno učenju slovnice programiranja. Se spomnite, ko ste v šoli učili o samostalnikih, glagolih in kako sestaviti stavke? Programiranje ima svojo različico slovnice, ki je iskreno veliko bolj logična in prizanesljiva kot angleška slovnica! 😄

### Stavki: Navodila korak za korakom

Začnimo z **stavki** – ti so kot posamezni stavki v pogovoru z vašim računalnikom. Vsak stavek računalniku pove, naj naredi nekaj specifičnega, podobno kot dajete navodila: "Tu zavij levo," "Ustavi se pri rdeči luči," "Parkiraj na tistem mestu."

Kar mi je všeč pri stavkih, je, kako berljivi so običajno. Poglejte to:

```javascript
// Basic statements that perform single actions
const userName = "Alex";                    
console.log("Hello, world!");              
const sum = 5 + 3;                         
```

**Kaj ta koda počne:**
- **Deklarira** konstantno spremenljivko za shranjevanje uporabnikovega imena
- **Prikaže** pozdravno sporočilo na konzoli
- **Izračuna** in shrani rezultat matematične operacije

```javascript
// Statements that interact with web pages
document.title = "My Awesome Website";      
document.body.style.backgroundColor = "lightblue";
```

**Korak za korakom, kaj se dogaja:**
- **Spremeni** naslov spletne strani, ki se pojavi na zavihku brskalnika
- **Spremeni** barvo ozadja celotnega telesa strani

### Spremenljivke: Spominski sistem vašega programa

Dobro, **spremenljivke** so iskreno eden mojih najljubših konceptov za poučevanje, ker so tako podobne stvarem, ki jih že vsak dan uporabljate!

Pomislite na seznam stikov na vašem telefonu. Ne pomnite telefonskih številk vseh – namesto tega shranite "Mama," "Najboljši prijatelj" ali "Picerija, ki dostavlja do 2. ure zjutraj" in pustite telefonu, da si zapomni dejanske številke. Spremenljivke delujejo popolnoma enako! So kot označene posode, kjer vaš program lahko shrani informacije in jih kasneje pridobi z uporabo imena, ki dejansko ima smisel.

Tukaj je nekaj res kul: spremenljivke se lahko spreminjajo, medtem ko vaš program teče (od tod ime "spremenljivka" – vidite, kaj so naredili?). Tako kot bi posodobili kontakt za picerijo, ko odkrijete še boljšo, se lahko spremenljivke posodabljajo, ko vaš program pridobi nove informacije ali ko se situacije spremenijo!

Naj vam pokažem, kako čudovito preprosto je to lahko:

```javascript
// Step 1: Creating basic variables
const siteName = "Weather Dashboard";        
let currentWeather = "sunny";               
let temperature = 75;                       
let isRaining = false;                      
```

**Razumevanje teh konceptov:**
- **Shranjevanje** nespremenljivih vrednosti v `const` spremenljivke (kot ime strani)
- **Uporaba** `let` za vrednosti, ki se lahko spreminjajo skozi program
- **Dodeljevanje** različnih tipov podatkov: nizov (besedilo), številk in logičnih vrednosti (true/false)
- **Izbira** opisnih imen, ki pojasnjujejo, kaj vsaka spremenljivka vsebuje

```javascript
// Step 2: Working with objects to group related data
const weatherData = {                       
  location: "San Francisco",
  humidity: 65,
  windSpeed: 12
};
```

**V zgornjem primeru smo:**
- **Ustvarili** objekt za združevanje povezanih informacij o vremenu
- **Organizirali** več kosov podatkov pod eno ime spremenljivke
- **Uporabili** pare ključ-vrednost za jasno označevanje vsakega kosa informacij

```javascript
// Step 3: Using and updating variables
console.log(`${siteName}: Today is ${currentWeather} and ${temperature}°F`);
console.log(`Wind speed: ${weatherData.windSpeed} mph`);

// Updating changeable variables
currentWeather = "cloudy";                  
temperature = 68;                          
```

**Razumimo vsak del:**
- **Prikaz** informacij z uporabo predlognih literarnih izrazov s sintakso `${}`
- **Dostop** do lastnosti objekta z uporabo točkovne notacije (`weatherData.windSpeed`)
- **Posodobitev** spremenljivk, deklariranih z `let`, da odražajo spreminjajoče se pogoje
- **Kombiniranje** več spremenljivk za ustvarjanje smiselnih sporočil

```javascript
// Step 4: Modern destructuring for cleaner code
const { location, humidity } = weatherData; 
console.log(`${location} humidity: ${humidity}%`);
```

**Kaj morate vedeti:**
- **Izvlečenje** specifičnih lastnosti iz objektov z uporabo destrukturirajoče dodelitve
- **Ustvarjanje** novih spremenljivk samodejno z istimi imeni kot ključi objektov
- **Poenostavitev** kode z izogibanjem ponavljajoči se točkovni notaciji

### Tok nadzora: Naučite svoj program razmišljati

Dobro, tukaj programiranje postane resnično osupljivo! **Tok nadzora** je v bistvu učenje vašega programa, kako sprejemati pametne odločitve, točno tako kot vi vsak dan, ne da bi o tem sploh razmišljali.

Predstavljajte si to: danes zjutraj ste verjetno razmišljali nekaj takega: "Če dežuje, bom vzel dežnik. Če je hladno, bom oblekel jakno. Če zamujam, bom preskočil zajtrk in vzel kavo na poti." Vaši možgani naravno sledijo tej logiki "če-potem" več desetkrat na dan!

To je tisto, kar naredi programe inteligentne in žive, namesto da bi samo sledili nekemu dolgočasnemu, predvidljivemu scenariju. Dejansko lahko pogledajo situacijo, ocenijo, kaj se dogaja, in ustrezno reagirajo. To je kot da bi vašemu programu dali možgane, ki se lahko prilagajajo in sprejemajo odločitve!

Želite videti, kako čudovito to deluje? Naj vam pokažem:

```javascript
// Step 1: Basic conditional logic
const userAge = 17;

if (userAge >= 18) {
  console.log("You can vote!");
} else {
  const yearsToWait = 18 - userAge;
  console.log(`You'll be able to vote in ${yearsToWait} year(s).`);
}
```

**Kaj ta koda počne:**
- **Preveri**, ali uporabnikova starost ustreza zahtevi za glasovanje
- **Izvede** različne bloke kode glede na rezultat pogoja
- **Izračuna** in prikaže, koliko časa do upravičenosti za glasovanje, če je mlajši od 18 let
- **Ponuja** specifične, koristne povratne informacije za vsak scenarij

```javascript
// Step 2: Multiple conditions with logical operators
const userAge = 17;
const hasPermission = true;

if (userAge >= 18 && hasPermission) {
  console.log("Access granted: You can enter the venue.");
} else if (userAge >= 16) {
  console.log("You need parent permission to enter.");
} else {
  console.log("Sorry, you must be at least 16 years old.");
}
```

**Razčlenitev dogajanja:**
- **Kombinira** več pogojev z uporabo operatorja `&&` (in)
- **Ustvari** hierarhijo pogojev z uporabo `else if` za več scenarijev
- **Obravnava** vse možne primere z zadnjo izjavo `else`
- **Ponuja** jasne, uporabne povratne informacije za vsak različni scenarij

```javascript
// Step 3: Concise conditional with ternary operator
const votingStatus = userAge >= 18 ? "Can vote" : "Cannot vote yet";
console.log(`Status: ${votingStatus}`);
```

**Kaj si morate zapomniti:**
- **Uporaba** ternarnega operatorja (`? :`) za preproste pogoje z dvema možnostma
- **Pisanje** pogoja najprej, sledi `?`, nato rezultat za true, nato `:`, nato rezultat za false
- **Uporaba** tega vzorca, ko morate dodeliti vrednosti na podlagi pogojev

```javascript
// Step 4: Handling multiple specific cases
const dayOfWeek = "Tuesday";

switch (dayOfWeek) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday - time to work!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend - time to relax!");
    break;
  default:
    console.log("Invalid day of the week");
}
```

**Ta koda doseže naslednje:**
- **Primerja** vrednost spremenljivke z več specifičnimi primeri
- **Združuje** podobne primere skupaj (delovni dnevi proti vikendom)
- **Izvede** ustrezen blok kode, ko je najdena ujemajoča se vrednost
- **Vključuje** primer `default` za obravnavo nepričakovanih vrednosti
- **Uporablja** izjave `break`, da prepreči nadaljevanje kode na naslednji primer

> 💡 **Resnična analogija**: Pomislite na tok nadzora kot na najbolj potrpežljiv GPS na svetu, ki vam daje navodila. Lahko reče: "Če je promet na Glavni ulici, pojdite po avtocesti. Če je gradnja na avtocesti, poskusite slikovito pot." Programi uporabljajo točno takšno vrsto pogojne logike, da inteligentno reagirajo na različne situacije in vedno uporabnikom ponudijo najboljšo možno izkušnjo.

✅ **Kaj sledi**: Imeli bomo absolutno zabavo, ko bomo še bolj poglobili te koncepte in nadaljevali to neverjetno potovanje skupaj! Trenutno se osredotočite na občutek navdušenja nad vsemi neverjetnimi možnostmi, ki so pred vami. Specifične veščine in tehnike se bodo naravno utrdile, ko bomo skupaj vadili – obljubim, da bo to veliko bolj zabavno, kot si morda mislite!


## Orodja za delo

Dobro, to je iskreno trenutek, ko sem tako navdušen, da se komaj zadržujem! 🚀 Govorili bomo o neverjetnih orodjih, ki vam bodo dala občutek, kot da ste pravkar dobili ključe digitalne vesoljske ladje.

Veste, kako ima kuhar tiste popolno uravnotežene nože, ki se zdijo kot podaljšek njegovih rok? Ali kako ima glasbenik tisto eno kitaro, ki se zdi, da poje, ko se je dotakne? No, razvijalci imamo svojo različico teh čarobnih orodij, in tukaj je tisto, kar vas bo popolnoma osupnilo – večina jih je popolnoma brezplačnih!

Skoraj poskakujem na stolu, ko razmišljam o tem, da jih delim z vami, ker so popolnoma revolucionirali način, kako gradimo programsko opremo. Govorimo o asistentih za kodiranje, ki jih poganja umetna inteligenca in lahko pomagajo pisati vašo kodo (ne šalim se!), oblačnih okoljih, kjer lahko gradite celotne aplikacije dobesedno kjerkoli z Wi-Fi povezavo, in orodjih za odpravljanje napak, ki so tako sofisticirana, da so kot rentgenski vid za vaše programe.

In tukaj je del, ki mi še vedno daje mravljince: to niso "začetniška orodja," ki jih boste prerasli. To so točno ista profesionalna orodja, ki jih razvijalci pri Googlu, Netflixu in tisti indie aplikacijski studiji, ki ga obožujete, uporabljajo prav ta trenutek. Počutili se boste kot pravi profesionalec, ko jih boste uporabljali!


### Urejevalniki kode in IDE-ji: Vaši novi digitalni najboljši prijatelji

Pogovorimo se o urejevalnikih kode – ti bodo resnično postali vaši novi najljubši kraji za druženje! Pomislite nanje kot na vaše osebno svetišče za kodiranje, kjer boste preživeli večino svojega časa pri ustvarjanju in izpopolnjevanju svojih digitalnih stvaritev.

Ampak tukaj je tisto, kar je pri sodobnih urejevalnikih resnično čarobno: niso samo fancy urejevalniki besedila. So kot da bi imeli najbolj briljantnega, podpornega mentorja za kodiranje, ki sedi poleg vas 24/7. Ujamejo vaše tipkarske napake, preden jih sploh opazite, predlagajo izboljšave, zaradi katerih izgledate kot genij, pomagajo razumeti, kaj vsak kos kode počne, in nekateri celo predvidijo, kaj boste napisali, ter ponudijo, da dokončajo vaše misli!

Spomnim se, ko sem prvič odkril samodokončanje – dobesedno sem se počutil, kot da živim v prihodnosti. Začnete tipkati nekaj, in vaš urejevalnik reče: "Hej, ste morda mislili na to funkcijo, ki počne točno tisto, kar potrebujete?" To je kot imeti bralca misli kot svojega kodirnega prijatelja!

**Kaj naredi te urejevalnike tako neverjetne?**

Sodobni urejevalniki kode ponujajo impresiven nabor funkcij, zasnovanih za povečanje vaše produktivnosti:

| Funkcija | Kaj počne | Zakaj pomaga |
|----------|-----------|--------------|
| **Označevanje sintakse** | Barva različne dele vaše kode | Olajša branje kode in iskanje napak |
| **Samodokončanje** | Predlaga kodo med tipkanjem | Pospeši kodiranje in zmanjša tipkarske napake |
| **Orodja za odpravljanje napak** | Pomagajo najti in popraviti napake | Prihrani ure časa za odpravljanje težav |
| **Razširitve** | Dodajo specializirane funkcije | Prilagodite svoj urejevalnik za katero koli tehnologijo |
| **AI asistenti** | Predlagajo kodo in razlage | Pospešijo učenje in produktivnost |

> 🎥 **Video vir**: Želite videti ta orodja v akciji? Oglejte si ta [video o orodjih za delo](https://youtube.com/watch?v=69WJeXGBdxg) za celovit pregled.

#### Priporočeni urejevalniki za spletni razvoj

**[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)** (Brezplačno)
- Najbolj priljubljen med spletnimi razvijalci
- Odlična ekosistem razširitev
- Vgrajen terminal in Git integracija
- **Obvezne razširitve**:
  - [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) - Predlogi kode, ki jih poganja AI
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) - Sodelovanje v realnem času
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Samodejno oblikovanje kode
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Ujame tipkarske napake v vaši kodi

**[JetBrains WebStorm](https://www.jetbrains.com/webstorm/)** (Plačljivo, brezplačno za študente)
- Napredna orodja za odpravljanje napak in testiranje
- Inteligentno samodokončanje kode
- Vgrajen nadzor različic

**IDE-ji v oblaku** (Različne cene)
- [GitHub Codespaces](https://github.com/features/codespaces) - Celoten VS Code v vašem brskalniku
- [Replit](https://replit.com/) - Odlično za učenje in deljenje kode
- [StackBlitz](https://stackblitz.com/) - Takojšnji, celovit spletni razvoj

> 💡 **Nasvet za začetek**: Začnite z Visual Studio Code – je brezplačen, široko uporabljen v industriji in ima ogromno skupnost, ki ustvarja koristne vadnice in razširitve.


### Spletni brskalniki: Vaš skrivni laboratorij za razvoj

Dobro, pripravite se, da boste popolnoma osupnili! Veste, kako ste uporabljali brskalnike za brskanje po družbenih omrežjih in gledanje videov? No, izkaže se, da so ves ta čas skrivali neverjeten skrivni laboratorij za razvijalce, ki samo čaka, da ga odkrijete!

Vsakič, ko z desno tipko miške kliknete na spletno stran in izberete "Preglej element," odpirate skriti svet orodij za razvijalce, ki so iskreno bolj zmogljiva od nekaterih dragih programov, za katere sem včasih plačeval stotine evrov. To je kot odkritje, da vaša običajna kuhinja skriva profesionalni laboratorij za kuharje za skrivnim panelom!

Ko mi je nekdo prvič pokazal DevTools v brskalniku, sem porabil približno tri ure samo za klikanje in govorjenje "ČAKAJ, TO LAHKO NAREDI TUDI?!" Lahko dobesedno urejate katero koli spletno stran v realnem času, vidite, kako hitro se vse nalaga, testirate, kako vaša stran izgleda na različnih napravah, in celo odpravljate napake v JavaScriptu kot pravi profesionalec. To je resnično osupljivo!

**Zakaj so brskalniki vaše skrivno orožje:**

Ko ustvarite spletno stran ali spletno aplikacijo, morate videti, kako izgleda in se obnaša v resničnem svetu. Brskalniki ne samo da prikazujejo vaše delo, ampak tudi zagotavljajo podrobne povratne informacije o zmogljivosti, dostopnosti in morebitnih tež
| **Konzola** | Oglejte si sporočila o napakah in preizkusite JavaScript | Odpravljajte težave in eksperimentirajte s kodo |
| **Monitor omrežja** | Spremljajte, kako se nalagajo viri | Optimizirajte zmogljivost in čas nalaganja |
| **Preverjanje dostopnosti** | Testirajte vključujočo zasnovo | Poskrbite, da bo vaša stran delovala za vse uporabnike |
| **Simulator naprav** | Predogled na različnih velikostih zaslonov | Testirajte odzivno zasnovo brez več naprav |

#### Priporočeni brskalniki za razvoj

- **[Chrome](https://developers.google.com/web/tools/chrome-devtools/)** - Industrijski standard DevTools z obsežno dokumentacijo
- **[Firefox](https://developer.mozilla.org/docs/Tools)** - Odlična orodja za CSS Grid in dostopnost
- **[Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)** - Zgrajen na Chromiumu z Microsoftovimi razvojnimi viri

> ⚠️ **Pomemben nasvet za testiranje**: Svoje spletne strani vedno testirajte v več brskalnikih! Kar deluje popolno v Chromu, je lahko videti drugače v Safariju ali Firefoxu. Profesionalni razvijalci testirajo v vseh večjih brskalnikih, da zagotovijo dosledno uporabniško izkušnjo.

### Orodja ukazne vrstice: Vaša vrata do razvijalskih supermoči

Priznajmo si, ko sem prvič videl ukazno vrstico – tisti strašljivi črni zaslon z utripajočim besedilom – sem si mislil: "Ne, absolutno ne! To izgleda kot nekaj iz hekerskega filma iz 80-ih, in jaz zagotovo nisem dovolj pameten za to!" 😅

Ampak tukaj je tisto, kar bi si želel, da bi mi takrat nekdo povedal, in kar vam zdaj povem: ukazna vrstica ni strašljiva – pravzaprav je kot neposreden pogovor z vašim računalnikom. Pomislite na to kot na razliko med naročanjem hrane prek elegantne aplikacije s slikami in meniji (kar je lepo in enostavno) ter obiskom vaše najljubše lokalne restavracije, kjer kuhar točno ve, kaj imate radi, in lahko pripravi nekaj popolnega, če mu rečete: "Preseneti me z nečim odličnim."

Ukazna vrstica je kraj, kamor se razvijalci zatečejo, da se počutijo kot pravi čarovniki. Vtipkate nekaj na videz čarobnih besed (v redu, to so samo ukazi, ampak vseeno se zdijo čarobni!), pritisnete enter in BUM – ustvarili ste celotne strukture projektov, namestili zmogljiva orodja z vsega sveta ali objavili svojo aplikacijo na internetu, da jo lahko vidi na milijone ljudi. Ko enkrat okusite to moč, je to resnično precej zasvojljivo!

**Zakaj bo ukazna vrstica postala vaše najljubše orodje:**

Čeprav so grafični vmesniki odlični za številne naloge, ukazna vrstica blesti pri avtomatizaciji, natančnosti in hitrosti. Mnoga razvojna orodja delujejo predvsem prek vmesnikov ukazne vrstice, in učenje njihove učinkovite uporabe lahko dramatično izboljša vašo produktivnost.

```bash
# Step 1: Create and navigate to project directory
mkdir my-awesome-website
cd my-awesome-website
```

**Kaj ta koda naredi:**
- **Ustvari** novo mapo z imenom "my-awesome-website" za vaš projekt
- **Premakne** se v novo ustvarjeno mapo, da začnete z delom

```bash
# Step 2: Initialize project with package.json
npm init -y

# Install modern development tools
npm install --save-dev vite prettier eslint
npm install --save-dev @eslint/js
```

**Korak za korakom, kaj se dogaja:**
- **Inicializira** nov projekt Node.js z privzetimi nastavitvami z uporabo `npm init -y`
- **Namesti** Vite kot sodobno orodje za gradnjo za hitro razvijanje in produkcijske gradnje
- **Doda** Prettier za samodejno oblikovanje kode in ESLint za preverjanje kakovosti kode
- **Uporabi** zastavico `--save-dev`, da označi te odvisnosti kot samo za razvoj

```bash
# Step 3: Create project structure and files
mkdir src assets
echo '<!DOCTYPE html><html><head><title>My Site</title></head><body><h1>Hello World</h1></body></html>' > index.html

# Start development server
npx vite
```

**V zgornjem primeru smo:**
- **Organizirali** naš projekt z ustvarjanjem ločenih map za izvorno kodo in vire
- **Generirali** osnovno HTML datoteko z ustrezno strukturo dokumenta
- **Začeli** Vite strežnik za razvoj za samodejno osveževanje in zamenjavo modulov v živo

#### Ključna orodja ukazne vrstice za spletni razvoj

| Orodje | Namen | Zakaj ga potrebujete |
|-------|-------|-----------------------|
| **[Git](https://git-scm.com/)** | Nadzor različic | Sledite spremembam, sodelujte z drugimi, varnostno kopirajte svoje delo |
| **[Node.js & npm](https://nodejs.org/)** | JavaScript runtime & upravljanje paketov | Poganjajte JavaScript zunaj brskalnikov, namestite sodobna razvojna orodja |
| **[Vite](https://vitejs.dev/)** | Orodje za gradnjo & strežnik za razvoj | Izjemno hitro razvijanje z zamenjavo modulov v živo |
| **[ESLint](https://eslint.org/)** | Kakovost kode | Samodejno poiščite in popravite težave v vašem JavaScriptu |
| **[Prettier](https://prettier.io/)** | Oblikovanje kode | Ohranite svojo kodo dosledno oblikovano in berljivo |

#### Možnosti glede na platformo

**Windows:**
- **[Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)** - Sodobna, funkcionalna terminalska aplikacija
- **[PowerShell](https://docs.microsoft.com/powershell/?WT.mc_id=academic-77807-sagibbon)** 💻 - Zmogljivo okolje za skriptiranje
- **[Command Prompt](https://docs.microsoft.com/windows-server/administration/windows-commands/?WT.mc_id=academic-77807-sagibbon)** 💻 - Tradicionalna ukazna vrstica za Windows

**macOS:**
- **[Terminal](https://support.apple.com/guide/terminal/)** 💻 - Vgrajena terminalska aplikacija
- **[iTerm2](https://iterm2.com/)** - Izboljšan terminal z naprednimi funkcijami

**Linux:**
- **[Bash](https://www.gnu.org/software/bash/)** 💻 - Standardna Linux lupina
- **[KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)** - Napreden terminalski emulator

> 💻 = Prednameščeno v operacijskem sistemu

> 🎯 **Učna pot**: Začnite z osnovnimi ukazi, kot so `cd` (sprememba mape), `ls` ali `dir` (seznam datotek) in `mkdir` (ustvarjanje mape). Vadite sodobne delovne ukaze, kot so `npm install`, `git status` in `code .` (odpre trenutno mapo v VS Code). Ko se boste počutili bolj samozavestni, boste naravno osvojili bolj napredne ukaze in tehnike avtomatizacije.

### Dokumentacija: Vaš mentor za učenje, ki je vedno na voljo

Naj vam zaupam majhno skrivnost, ki vas bo pomirila glede začetniških korakov: tudi najbolj izkušeni razvijalci velik del svojega časa preživijo ob branju dokumentacije. In to ni zato, ker ne vedo, kaj počnejo – to je pravzaprav znak modrosti!

Pomislite na dokumentacijo kot na dostop do najbolj potrpežljivih, izkušenih učiteljev na svetu, ki so na voljo 24/7. Imate težavo ob 2. uri zjutraj? Dokumentacija je tam z virtualnim objemom in točno tistim odgovorom, ki ga potrebujete. Želite izvedeti več o kakšni novi funkciji, o kateri vsi govorijo? Dokumentacija vam bo pomagala s korak za korakom primeri. Poskušate razumeti, zakaj nekaj deluje tako, kot deluje? Uganili ste – dokumentacija je pripravljena, da vam to razloži na način, ki ga boste končno razumeli!

**Tu se zgodi prava čarovnija:**

Profesionalni razvijalci velik del svojega časa posvetijo branju dokumentacije – ne zato, ker ne vedo, kaj počnejo, ampak ker se svet spletnega razvoja tako hitro spreminja, da je za ohranjanje aktualnosti potrebno nenehno učenje. Kakovostna dokumentacija vam pomaga razumeti ne le *kako* nekaj uporabiti, ampak tudi *zakaj* in *kdaj* to uporabiti.

#### Ključni viri dokumentacije

**[Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web)**
- Zlati standard za dokumentacijo spletnih tehnologij
- Celoviti vodiči za HTML, CSS in JavaScript
- Vključuje informacije o združljivosti brskalnikov
- Ponuja praktične primere in interaktivne demonstracije

**[Web.dev](https://web.dev)** (Google)
- Najboljše prakse sodobnega spletnega razvoja
- Vodiči za optimizacijo zmogljivosti
- Načela dostopnosti in vključujoče zasnove
- Študije primerov iz resničnih projektov

**[Microsoft Developer Documentation](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers)**
- Viri za razvoj brskalnika Edge
- Vodiči za progresivne spletne aplikacije
- Vpogledi v razvoj na več platformah

**[Frontend Masters Learning Paths](https://frontendmasters.com/learn/)**
- Strukturirani učni načrti
- Video tečaji od strokovnjakov iz industrije
- Praktične vaje kodiranja

> 📚 **Strategija učenja**: Ne poskušajte si zapomniti dokumentacije – namesto tega se naučite, kako jo učinkovito uporabljati. Označite pogosto uporabljene reference in vadite uporabo funkcij iskanja za hitro iskanje specifičnih informacij.

✅ **Hrana za razmislek**: Tukaj je nekaj zanimivega za razmislek – kako mislite, da se orodja za izdelavo spletnih strani (razvoj) razlikujejo od orodij za oblikovanje njihovega videza (oblikovanje)? To je kot razlika med arhitektom, ki oblikuje čudovito hišo, in izvajalcem, ki jo dejansko zgradi. Oboje je ključnega pomena, vendar potrebujeta različne sklope orodij! Takšno razmišljanje vam bo resnično pomagalo videti širšo sliko, kako spletne strani zaživijo.

## Izziv GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Raziščite funkcije sodobnega urejevalnika kode ali IDE in pokažite, kako lahko izboljša vaš delovni proces kot spletni razvijalec.

**Navodilo:** Izberite urejevalnik kode ali IDE (kot so Visual Studio Code, WebStorm ali IDE v oblaku). Naštejte tri funkcije ali razširitve, ki vam pomagajo pri pisanju, odpravljanju napak ali vzdrževanju kode. Za vsako podajte kratko razlago, kako koristi vašemu delovnemu procesu.

---

## 🚀 Izziv

**Pripravljeni na svojo prvo nalogo, detektiv?**

Zdaj, ko imate to čudovito osnovo, imam za vas pustolovščino, ki vam bo pomagala videti, kako neverjetno raznolik in fascinanten je svet programiranja. In poslušajte – to ni o tem, da bi že pisali kodo, zato brez pritiska! Pomislite na sebe kot na detektiva programskih jezikov na svojem prvem vznemirljivem primeru!

**Vaša misija, če jo sprejmete:**
1. **Postanite raziskovalec jezikov**: Izberite tri programske jezike iz popolnoma različnih svetov – morda enega, ki gradi spletne strani, enega, ki ustvarja mobilne aplikacije, in enega, ki obdeluje podatke za znanstvenike. Poiščite primere iste preproste naloge, napisane v vsakem jeziku. Obljubim, da boste popolnoma presenečeni, kako različno lahko izgledajo, medtem ko opravljajo popolnoma isto stvar!

2. **Razkrijte njihove izvorne zgodbe**: Kaj naredi vsak jezik poseben? Tukaj je zanimivo dejstvo – vsak posamezen programski jezik je bil ustvarjen, ker je nekdo pomislil: "Veste kaj? Mora obstajati boljši način za reševanje tega specifičnega problema." Ali lahko ugotovite, kaj so bili ti problemi? Nekatere od teh zgodb so resnično fascinantne!

3. **Spoznajte skupnosti**: Oglejte si, kako prijazne in strastne so skupnosti vsakega jezika. Nekatere imajo milijone razvijalcev, ki delijo znanje in si pomagajo, druge so manjše, a izjemno povezane in podporne. Z veseljem boste videli različne osebnosti teh skupnosti!

4. **Sledite svojemu občutku**: Kateri jezik se vam trenutno zdi najbolj dostopen? Ne obremenjujte se z iskanjem "popolne" izbire – samo poslušajte svoje instinkte! Tukaj ni napačnega odgovora, in kasneje lahko vedno raziščete druge.

**Bonus detektivsko delo**: Poskusite odkriti, katere velike spletne strani ali aplikacije so zgrajene s posameznim jezikom. Zagotavljam vam, da boste presenečeni, ko boste izvedeli, kaj poganja Instagram, Netflix ali tisto mobilno igro, ki je ne morete nehati igrati!

> 💡 **Zapomnite si**: Ne poskušate postati strokovnjak v katerem koli od teh jezikov danes. Samo spoznavate okolje, preden se odločite, kje želite začeti. Vzemite si čas, uživajte v tem in pustite, da vas vodi radovednost!

## Praznujmo, kaj ste odkrili!

O moj bog, danes ste absorbirali toliko neverjetnih informacij! Resnično sem navdušen, da vidim, koliko tega čudovitega potovanja se je prijelo. In zapomnite si – to ni test, kjer morate vse narediti popolno. To je bolj kot praznovanje vseh kul stvari, ki ste se jih naučili o tem fascinantnem svetu, v katerega se boste podali!

[Rešite kviz po lekciji](https://ff-quizzes.netlify.app/web/)

## Pregled & Samostojno učenje

**Vzemite si čas za raziskovanje in uživajte v tem!**

Danes ste prehodili dolgo pot, in to je nekaj, na kar ste lahko ponosni! Zdaj prihaja zabavni del – raziskovanje tem, ki so vzbudile vašo radovednost. Zapomnite si, to ni domača naloga – to je pustolovščina!

**Poglobite se v tisto, kar vas navdušuje:**

**Praktično spoznajte programske jezike:**
- Obiščite uradne spletne strani 2-3 jezikov, ki so pritegnili vašo pozornost. Vsak ima svojo osebnost in zgodbo!
- Preizkusite nekaj spletnih igrišč za kodiranje, kot so [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) ali [Replit](https://replit.com/). Ne bojte se eksperimentirati – ničesar ne morete pokvariti!
- Preberite, kako je nastal vaš najljubši jezik. Resno, nekatere od teh izvornih zgodb so fascinantne in vam bodo pomagale razumeti, zakaj jeziki delujejo tako, kot delujejo.

**Postanite domači z novimi orodji:**
- Prenesite Visual Studio Code, če ga še niste – brezplačen je in zagotovo vam bo všeč!
- Preživite nekaj minut z brskanjem po tržnici razširitev. To je kot trgovina z aplikacijami za vaš urejevalnik kode!
- Odprite orodja za razvijalce v vašem brskalniku in samo klikajte naokoli. Ne skrbite, če ne razumete vsega – samo spoznajte, kaj je tam.

**Pridružite se skupnosti:**
- Sledite nekaterim razvijalskim skupnostim na [Dev.to](https://dev.to/), [Stack Overflow](https://stackoverflow.com/) ali [GitHub](https://github.com/). Razvijalska skupnost je izjemno prijazna do začetnikov!
- Oglejte si nekaj videoposnetkov o programiranju za začetnike na YouTubu. Obstaja toliko odličnih ustvarjalcev, ki se spomnijo, kako je, ko šele začenjaš.
- Razmislite o pridružitvi lokalnim srečanjem ali spletnim skupnostim. Verjemite mi, razvijalci radi pomagajo novincem!

> 🎯 **Poslušajte, tukaj je, kar želim, da si zapomnite**: Od vas se ne pričakuje, da boste čez noč postali mojster programiranja! Trenutno šele spoznavate ta neverjetni novi svet, katerega del boste kmalu postali. Vzemite si čas, uživajte v poti in ne pozabite – vsak razvijalec, ki ga občudujete, je bil nekoč točno tam, kjer ste zdaj vi, poln navdušenja in morda malo zmeden. To je povsem normalno in pomeni, da ste na pravi poti!



## Naloga

[Branje dokumentacije](assignment.md)

> 💡 **Majhen namig za vašo nalogo**: Resnično bi si želel, da raziščete nekaj orodij, ki jih še nismo obravnavali! Preskočite urejevalnike, brskalnike in orodja za ukazno vrstico, o katerih smo že govorili – obstaja cel neverjeten svet čudovitih razvojnih orodij, ki samo čakajo, da jih odkrijete. Poiščite tista, ki so aktivno vzdrževana in imajo živahne, podporne skupnosti (ta običajno ponujajo najboljše vadnice in najbolj prijazne ljudi, ko se neizogibno zataknete in potrebujete pomoč).

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.