<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3e0da5eb9b275fe3cb431033c1413ec2",
  "translation_date": "2025-10-24T23:51:20+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "hr"
}
-->
# Uvod u programske jezike i moderne alate za razvoj

Hej, budući programeru! 👋 Mogu li ti reći nešto što me svaki dan iznova oduševljava? Upravo ćeš otkriti da programiranje nije samo rad s računalima – to je kao da imaš stvarne supermoći za ostvarivanje svojih najluđih ideja!

Znaš onaj trenutak kad koristiš svoju omiljenu aplikaciju i sve savršeno funkcionira? Kad pritisneš gumb i dogodi se nešto apsolutno magično što te natjera da pomisliš "wow, kako su to napravili?" Pa, netko baš poput tebe – vjerojatno sjedeći u svom omiljenom kafiću u 2 ujutro s trećim espressom – napisao je kod koji je stvorio tu magiju. I evo što će te oduševiti: do kraja ove lekcije ne samo da ćeš razumjeti kako su to napravili, već ćeš jedva čekati da i sam pokušaš!

Gledaj, potpuno razumijem ako ti se programiranje trenutno čini zastrašujuće. Kad sam ja počeo, iskreno sam mislio da moraš biti neki genijalac iz matematike ili da programiraš od svoje pete godine. Ali evo što mi je potpuno promijenilo perspektivu: programiranje je baš kao učenje razgovora na novom jeziku. Počneš s "bok" i "hvala", zatim prijeđeš na naručivanje kave, i prije nego što shvatiš, vodiš duboke filozofske rasprave! Osim što u ovom slučaju razgovaraš s računalima, a iskreno? Ona su najstrpljiviji sugovornici koje ćeš ikada imati – nikada ne osuđuju tvoje pogreške i uvijek su spremna pokušati ponovno!

Danas ćemo istražiti nevjerojatne alate koji moderni web razvoj ne čine samo mogućim, već i ozbiljno zaraznim. Govorim o istim editorima, preglednicima i radnim procesima koje svakodnevno koriste programeri u Netflixu, Spotifyju i tvojoj omiljenoj indie aplikacijskoj studiji. I evo dijela koji će te natjerati na ples od sreće: većina ovih profesionalnih alata, standardnih u industriji, potpuno je besplatna!

![Uvod u programiranje](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.hr.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Provjerimo što već znaš!

Prije nego što zaronimo u zabavne stvari, zanima me – što već znaš o ovom svijetu programiranja? I slušaj, ako gledaš ova pitanja i misliš "doslovno nemam pojma o ničemu od ovoga," to nije samo u redu, to je savršeno! To znači da si točno na pravom mjestu. Zamisli ovaj kviz kao istezanje prije treninga – samo zagrijavamo moždane mišiće!

[Odgovori na kviz prije lekcije](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Avantura koju ćemo zajedno proći

Ok, iskreno, jedva čekam da krenemo u istraživanje! Stvarno, volio bih vidjeti tvoje lice kad ti neki od ovih pojmova postanu jasni. Evo nevjerojatnog putovanja koje ćemo zajedno proći:

- **Što je zapravo programiranje (i zašto je najkul stvar ikad!)** – Otkrit ćemo kako je kod doslovno nevidljiva magija koja pokreće sve oko tebe, od alarma koji nekako zna da je ponedjeljak ujutro do algoritma koji savršeno odabire tvoje preporuke na Netflixu
- **Programski jezici i njihove nevjerojatne osobnosti** – Zamisli da ulaziš na zabavu gdje svaka osoba ima potpuno različite supermoći i načine rješavanja problema. Takav je svijet programskih jezika, i obožavat ćeš ih upoznati!
- **Temeljni građevni blokovi koji stvaraju digitalnu magiju** – Zamisli ih kao ultimativni kreativni LEGO set. Kad shvatiš kako se ti dijelovi uklapaju, shvatit ćeš da doslovno možeš izgraditi sve što ti mašta zamisli
- **Profesionalni alati koji će te natjerati da se osjećaš kao da si dobio čarobni štapić** – Ne dramatiziram – ovi alati će te stvarno natjerati da se osjećaš kao da imaš supermoći, a najbolji dio? To su isti alati koje koriste profesionalci!

> 💡 **Evo što je važno**: Nemoj ni pomisliti da danas moraš sve zapamtiti! Trenutno samo želim da osjetiš uzbuđenje zbog onoga što je moguće. Detalji će se prirodno zalijepiti kako budemo zajedno vježbali – tako se događa pravo učenje!

> Ovu lekciju možeš pratiti na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Što je zapravo *programiranje*?

Dobro, idemo se pozabaviti pitanjem od milijun dolara: što je zapravo programiranje?

Ispričat ću ti priču koja mi je potpuno promijenila način razmišljanja o tome. Prošli tjedan pokušavao sam objasniti mami kako koristiti daljinski upravljač za naš novi pametni TV. Uhvatim se kako govorim stvari poput "Pritisni crveni gumb, ali ne veliki crveni gumb, mali crveni gumb s lijeve strane... ne, s tvoje lijeve strane... ok, sad ga drži dvije sekunde, ne jednu, ne tri..." Zvuči poznato? 😅

To je programiranje! To je umjetnost davanja nevjerojatno detaljnih, korak-po-korak uputa nečemu što je vrlo moćno, ali treba sve savršeno objašnjeno. Osim što umjesto objašnjavanja mami (koja može pitati "koji crveni gumb?!"), objašnjavaš računalu (koje samo radi točno ono što mu kažeš, čak i ako to što si rekao nije baš ono što si mislio).

Evo što me oduševilo kad sam prvi put naučio ovo: računala su zapravo prilično jednostavna u svojoj srži. Doslovno razumiju samo dvije stvari – 1 i 0, što je u osnovi samo "da" i "ne" ili "uključeno" i "isključeno." To je to! Ali evo gdje postaje magično – ne moramo govoriti u 1 i 0 kao da smo u Matrixu. Tu dolaze **programski jezici** u pomoć. Oni su kao najbolji prevoditelj na svijetu koji uzima tvoje savršeno normalne ljudske misli i pretvara ih u jezik računala.

I evo što me još uvijek oduševljava svako jutro kad se probudim: doslovno *sve* digitalno u tvom životu počelo je s nekim baš poput tebe, vjerojatno sjedeći u pidžami s šalicom kave, tipkajući kod na svom laptopu. Onaj Instagram filter koji te čini savršenim? Netko je to kodirao. Preporuka koja te dovela do tvoje nove omiljene pjesme? Programer je izradio taj algoritam. Aplikacija koja ti pomaže podijeliti račun za večeru s prijateljima? Da, netko je pomislio "ovo je dosadno, kladim se da to mogu riješiti" i onda... uspio!

Kad naučiš programirati, ne samo da stječeš novu vještinu – postaješ dio ove nevjerojatne zajednice rješavača problema koji provode svoje dane razmišljajući: "Što ako mogu izgraditi nešto što će nekome uljepšati dan?" Iskreno, postoji li išta bolje od toga?

✅ **Zanimljiva činjenica**: Evo nečega super zanimljivog što možeš istražiti kad imaš slobodnog vremena – tko misliš da je bio prvi programer na svijetu? Dat ću ti trag: možda nije osoba koju očekuješ! Priča o toj osobi je apsolutno fascinantna i pokazuje da je programiranje oduvijek bilo vezano uz kreativno rješavanje problema i razmišljanje izvan okvira.

## Programski jezici su poput različitih okusa magije

Dobro, ovo će zvučati čudno, ali ostani sa mnom – programski jezici su jako slični različitim vrstama glazbe. Razmisli: imaš jazz, koji je gladak i improvizacijski, rock koji je snažan i direktan, klasičnu glazbu koja je elegantna i strukturirana, i hip-hop koji je kreativan i izražajan. Svaki stil ima svoj ugođaj, svoju zajednicu strastvenih obožavatelja, i svaki je savršen za različita raspoloženja i prilike.

Programski jezici funkcioniraju na potpuno isti način! Ne bi koristio isti jezik za izradu zabavne mobilne igre kao što bi koristio za obradu ogromnih količina podataka o klimi, baš kao što ne bi puštao death metal na satu joge (pa, na većini satova joge! 😄).

Ali evo što me svaki put oduševi kad razmišljam o tome: ti jezici su kao da imaš najstrpljivijeg, najpametnijeg prevoditelja na svijetu koji sjedi odmah pored tebe. Možeš izraziti svoje ideje na način koji je prirodan za ljudski mozak, a oni se brinu o svim nevjerojatno složenim zadacima prevođenja toga u 1 i 0 koje računala zapravo razumiju. To je kao da imaš prijatelja koji savršeno vlada i "ljudskom kreativnošću" i "računalnom logikom" – i nikad se ne umara, nikad ne treba pauzu za kavu i nikad te ne osuđuje što postavljaš isto pitanje dva puta!

### Popularni programski jezici i njihova primjena

| Jezik | Najbolje za | Zašto je popularan |
|-------|-------------|--------------------|
| **JavaScript** | Web razvoj, korisnička sučelja | Radi u preglednicima i pokreće interaktivne web stranice |
| **Python** | Znanost o podacima, automatizacija, AI | Jednostavan za čitanje i učenje, moćne biblioteke |
| **Java** | Poslovne aplikacije, Android aplikacije | Neovisan o platformi, robustan za velike sustave |
| **C#** | Windows aplikacije, razvoj igara | Snažna podrška Microsoft ekosustava |
| **Go** | Cloud usluge, backend sustavi | Brz, jednostavan, dizajniran za modernu računalnu obradu |

### Visokorazinski vs. niskorazinski jezici

Dobro, ovo je iskreno koncept koji mi je slomio mozak kad sam prvi put počeo učiti, pa ću podijeliti analogiju koja mi je konačno pomogla da shvatim – i stvarno se nadam da će pomoći i tebi!

Zamisli da posjećuješ zemlju čiji jezik ne govoriš, a očajnički trebaš pronaći najbliži WC (svi smo to prošli, zar ne? 😅):

- **Niskorazinsko programiranje** je kao da tako dobro naučiš lokalni dijalekt da možeš razgovarati s bakom koja prodaje voće na uglu koristeći kulturne reference, lokalni sleng i unutarnje šale koje samo netko tko je tamo odrastao može razumjeti. Super impresivno i nevjerojatno učinkovito... ako slučajno tečno govoriš! Ali prilično je neodoljivo kad samo pokušavaš pronaći WC.

- **Visokorazinsko programiranje** je kao da imaš tog nevjerojatnog lokalnog prijatelja koji te jednostavno razumije. Možeš reći "Stvarno trebam pronaći WC" na običnom jeziku, a oni se pobrinu za sve kulturne prijevode i daju ti upute na način koji savršeno ima smisla za tvoj mozak koji nije lokalni.

U programerskim terminima:
- **Niskorazinski jezici** (poput Assemblyja ili C-a) omogućuju ti da vodiš nevjerojatno detaljne razgovore s računalnim hardverom, ali moraš razmišljati kao stroj, što je... pa, recimo da je to prilično velik mentalni zaokret!
- **Visokorazinski jezici** (poput JavaScripta, Pythona ili C#) omogućuju ti da razmišljaš kao čovjek dok oni rješavaju sve tehničke detalje u pozadini. Osim toga, imaju nevjerojatno gostoljubive zajednice pune ljudi koji se sjećaju kako je bilo biti početnik i stvarno žele pomoći!

Pogodi koje ću ti predložiti da započneš? 😉 Visokorazinski jezici su kao pomoćni kotači koje nikada zapravo ne želiš skinuti jer čine cijelo iskustvo toliko ugodnijim!

### Dopusti mi da ti pokažem zašto su visokorazinski jezici toliko prijateljski

Dobro, pokazat ću ti nešto što savršeno demonstrira zašto sam se zaljubio u visokorazinske jezike, ali prvo – trebaš mi nešto obećati. Kad vidiš prvi primjer koda, nemoj paničariti! Trebao bi izgledati zastrašujuće. To je upravo poanta koju želim pokazati!

Pogledat ćemo potpuno isti zadatak napisan na dva potpuno različita načina. Oba stvaraju ono što se zove Fibonacci niz – to je prekrasan matematički uzorak gdje je svaki broj zbroj prethodna dva: 0, 1, 1, 2, 3, 5, 8, 13... (Zanimljivost: ovaj uzorak doslovno možeš pronaći svugdje u prirodi – spirale sjemenki suncokreta, uzorci češera, čak i način na koji se galaksije formiraju!)

Spreman vidjeti razliku? Idemo!

**Visokorazinski jezik (JavaScript) – Prijateljski za ljude:**

```javascript
// Step 1: Basic Fibonacci setup
const fibonacciCount = 10;
let current = 0;
let next = 1;

console.log('Fibonacci sequence:');
```

**Evo što ovaj kod radi:**
- **Deklarira** konstantu za određivanje koliko Fibonacci brojeva želimo generirati
- **Inicijalizira** dvije varijable za praćenje trenutnog i sljedećeg broja u nizu
- **Postavlja** početne vrijednosti (0 i 1) koje definiraju Fibonacci uzorak
- **Prikazuje** poruku zaglavlja za identifikaciju našeg izlaza

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

**Razlaganje onoga što se ovdje događa:**
- **Petlja** kroz svaku poziciju u našem nizu koristeći `for` petlju
- **Prikazuje** svaki broj s njegovom pozicijom koristeći formatiranje predloška
- **Izračunava** sljedeći Fibonacci broj zbrajanjem trenutnih i sljedećih vrijednosti
- **Ažurira** naše varijable za praćenje kako bi prešli na sljedeću iteraciju

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

**U gore navedenom, mi smo:**
- **Stvorili** funkciju koja se može ponovno koristiti koristeći modernu sintaksu streličaste funkcije
- **Izgradili** niz za pohranu cijelog niza umjesto prikazivanja jednog po jednog
- **Koristili** indeksiranje niza za izračunavanje svakog novog broja iz prethodnih vrijednosti
- **Vratili** cijeli niz za fleksibilnu upotrebu u drugim dijelovima našeg programa

**Niskorazinski jezik (ARM Assembly) – Prijateljski za računalo:**

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

Primijeti kako verzija u JavaScriptu gotovo čita kao upute na engleskom jeziku, dok verzija u Assemblyju koristi zagonetne naredbe koje izravno upravljaju procesorom računala. Obje obavljaju potpuno isti zadatak, ali visokorazinski jezik je mnogo lakši za razumijevanje, pisanje i održavanje.

**Ključne razlike koje ćeš primijetiti:**
- **Čitljivost**: JavaScript koristi opisne nazive poput `fibonacciCount`, dok Assembly koristi zagonetne oznake poput `r0`, `r1`
- **Komentari**: Visokorazinski jezici potiču objašnjavajuće komentare koji čine kod samodokumentirajućim
- **Struktura**: Logički tok JavaScripta odgovara načinu na koji ljudi razmišljaju o problemima korak po korak
- **Održavanje**: Ažuriranje verzije u JavaScriptu za različite zahtjeve je jednostavno i jasno
✅ **O Fibonacci nizu**: Ovaj apsolutno prekrasan brojčani uzorak (gdje je svaki broj zbroj prethodna dva: 0, 1, 1, 2, 3, 5, 8...) pojavljuje se doslovno *svugdje* u prirodi! Možete ga pronaći u spiralama suncokreta, uzorcima na češerima, zakrivljenosti školjki nautilusa, pa čak i u načinu na koji grane drveća rastu. Nevjerojatno je kako nam matematika i kodiranje mogu pomoći da razumijemo i ponovno stvorimo uzorke koje priroda koristi za stvaranje ljepote!


## Građevni blokovi koji stvaraju čaroliju

Dobro, sada kada ste vidjeli kako izgledaju programski jezici u praksi, razložimo osnovne dijelove koji čine doslovno svaki program ikada napisan. Zamislite ih kao osnovne sastojke vašeg omiljenog recepta – kada shvatite što svaki od njih radi, moći ćete čitati i pisati kod u gotovo svakom jeziku!

To je pomalo kao učenje gramatike programiranja. Sjećate se iz škole kada ste učili o imenima, glagolima i kako sastaviti rečenice? Programiranje ima svoju verziju gramatike, i iskreno, puno je logičnija i opraštajuća nego što je to ikada bila engleska gramatika! 😄

### Izjave: Korak-po-korak upute

Počnimo s **izjavama** – one su poput pojedinačnih rečenica u razgovoru s vašim računalom. Svaka izjava govori računalu da učini jednu specifičnu stvar, poput davanja uputa: "Skreni lijevo ovdje," "Zaustavi se na crvenom svjetlu," "Parkiraj na tom mjestu."

Ono što volim kod izjava je koliko su obično čitljive. Pogledajte ovo:

```javascript
// Basic statements that perform single actions
const userName = "Alex";                    
console.log("Hello, world!");              
const sum = 5 + 3;                         
```

**Što ovaj kod radi:**
- **Deklarira** konstantnu varijablu za pohranu korisničkog imena
- **Prikazuje** poruku dobrodošlice na konzoli
- **Izračunava** i pohranjuje rezultat matematičke operacije

```javascript
// Statements that interact with web pages
document.title = "My Awesome Website";      
document.body.style.backgroundColor = "lightblue";
```

**Korak po korak, evo što se događa:**
- **Mijenja** naslov web stranice koji se pojavljuje na kartici preglednika
- **Mijenja** boju pozadine cijelog tijela stranice

### Varijable: Memorijski sustav vašeg programa

Dobro, **varijable** su iskreno jedan od mojih apsolutno najdražih koncepata za podučavanje jer su toliko slične stvarima koje već svakodnevno koristite!

Razmislite na trenutak o popisu kontakata na vašem telefonu. Ne pamtite brojeve svih – umjesto toga, spremate "Mama," "Najbolji prijatelj" ili "Pizzeria koja dostavlja do 2 ujutro" i dopuštate telefonu da zapamti stvarne brojeve. Varijable rade potpuno isto! One su poput označenih spremnika u kojima vaš program može pohraniti informacije i kasnije ih dohvatiti koristeći ime koje ima smisla.

Evo što je stvarno cool: varijable se mogu mijenjati dok vaš program radi (otuda naziv "varijabla" – vidite li što su napravili?). Baš kao što biste mogli ažurirati kontakt za pizzeriju kada otkrijete još bolju, varijable se mogu ažurirati dok vaš program uči nove informacije ili dok se situacije mijenjaju!

Dopustite mi da vam pokažem koliko ovo može biti jednostavno:

```javascript
// Step 1: Creating basic variables
const siteName = "Weather Dashboard";        
let currentWeather = "sunny";               
let temperature = 75;                       
let isRaining = false;                      
```

**Razumijevanje ovih koncepata:**
- **Pohranite** nepromjenjive vrijednosti u `const` varijable (poput imena stranice)
- **Koristite** `let` za vrijednosti koje se mogu mijenjati tijekom programa
- **Dodijelite** različite tipove podataka: stringove (tekst), brojeve i booleane (true/false)
- **Odaberite** opisna imena koja objašnjavaju što svaka varijabla sadrži

```javascript
// Step 2: Working with objects to group related data
const weatherData = {                       
  location: "San Francisco",
  humidity: 65,
  windSpeed: 12
};
```

**U gore navedenom, učinili smo sljedeće:**
- **Stvorili** objekt za grupiranje povezanih informacija o vremenu
- **Organizirali** više dijelova podataka pod jednim imenom varijable
- **Koristili** parove ključ-vrijednost za jasno označavanje svakog dijela informacija

```javascript
// Step 3: Using and updating variables
console.log(`${siteName}: Today is ${currentWeather} and ${temperature}°F`);
console.log(`Wind speed: ${weatherData.windSpeed} mph`);

// Updating changeable variables
currentWeather = "cloudy";                  
temperature = 68;                          
```

**Razumimo svaki dio:**
- **Prikazujemo** informacije koristeći template literale sa sintaksom `${}`
- **Pristupamo** svojstvima objekta koristeći točku (`weatherData.windSpeed`)
- **Ažuriramo** varijable deklarirane s `let` kako bi odražavale promjenjive uvjete
- **Kombiniramo** više varijabli za stvaranje smislenih poruka

```javascript
// Step 4: Modern destructuring for cleaner code
const { location, humidity } = weatherData; 
console.log(`${location} humidity: ${humidity}%`);
```

**Što trebate znati:**
- **Izvucite** specifična svojstva iz objekata koristeći destrukturiranje
- **Stvorite** nove varijable automatski s istim imenima kao ključevi objekta
- **Pojednostavite** kod izbjegavanjem ponavljajuće točke

### Tok kontrole: Naučite svoj program da razmišlja

Dobro, ovdje programiranje postaje apsolutno nevjerojatno! **Tok kontrole** je u osnovi učenje vašeg programa kako donositi pametne odluke, baš kao što to radite svaki dan, a da o tome ni ne razmišljate.

Zamislite ovo: jutros ste vjerojatno prošli kroz nešto poput "Ako pada kiša, uzet ću kišobran. Ako je hladno, obući ću jaknu. Ako kasnim, preskočit ću doručak i uzeti kavu putem." Vaš mozak prirodno slijedi ovu logiku "ako-onda" desetke puta svaki dan!

To je ono što programe čini inteligentnima i živima, umjesto da samo slijede dosadan, predvidljiv scenarij. Oni zapravo mogu pogledati situaciju, procijeniti što se događa i reagirati na odgovarajući način. To je kao da svom programu dajete mozak koji se može prilagoditi i donositi odluke!

Želite vidjeti kako ovo prekrasno funkcionira? Dopustite mi da vam pokažem:

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

**Što ovaj kod radi:**
- **Provjerava** ispunjava li korisnikovu dob zahtjev za glasanje
- **Izvršava** različite blokove koda na temelju rezultata uvjeta
- **Izračunava** i prikazuje koliko dugo do ispunjenja uvjeta za glasanje ako je mlađi od 18 godina
- **Pruža** specifične, korisne povratne informacije za svaki scenarij

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

**Razlaganje onoga što se ovdje događa:**
- **Kombinira** više uvjeta koristeći operator `&&` (i)
- **Stvara** hijerarhiju uvjeta koristeći `else if` za više scenarija
- **Rješava** sve moguće slučajeve s konačnom `else` izjavom
- **Pruža** jasne, korisne povratne informacije za svaki različiti scenarij

```javascript
// Step 3: Concise conditional with ternary operator
const votingStatus = userAge >= 18 ? "Can vote" : "Cannot vote yet";
console.log(`Status: ${votingStatus}`);
```

**Što trebate zapamtiti:**
- **Koristite** ternarni operator (`? :`) za jednostavne uvjete s dvije opcije
- **Napišite** uvjet prvo, zatim `?`, zatim rezultat za true, zatim `:`, zatim rezultat za false
- **Primijenite** ovaj obrazac kada trebate dodijeliti vrijednosti na temelju uvjeta

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

**Ovaj kod postiže sljedeće:**
- **Uspoređuje** vrijednost varijable s više specifičnih slučajeva
- **Grupira** slične slučajeve zajedno (radni dani naspram vikenda)
- **Izvršava** odgovarajući blok koda kada se pronađe podudaranje
- **Uključuje** `default` slučaj za rukovanje neočekivanim vrijednostima
- **Koristi** `break` izjave kako bi spriječio nastavak koda na sljedeći slučaj

> 💡 **Analogija iz stvarnog života**: Zamislite tok kontrole kao da imate najstrpljiviji GPS koji vam daje upute. Mogao bi reći "Ako je gužva na glavnoj ulici, idite autocestom. Ako je gradilište blokiralo autocestu, pokušajte slikovitu rutu." Programi koriste potpuno istu vrstu logike uvjeta kako bi inteligentno reagirali na različite situacije i uvijek korisnicima pružili najbolje moguće iskustvo.

✅ **Što slijedi**: Imat ćemo apsolutno fantastično vrijeme dublje istražujući ove koncepte dok nastavljamo ovo nevjerojatno putovanje zajedno! Trenutno se samo usredotočite na osjećaj uzbuđenja zbog svih nevjerojatnih mogućnosti koje su pred vama. Specifične vještine i tehnike prirodno će se usvojiti dok zajedno vježbamo – obećavam da će ovo biti puno zabavnije nego što možda očekujete!


## Alati zanata

Dobro, ovo je iskreno trenutak kada postajem toliko uzbuđen da se jedva mogu suzdržati! 🚀 Upravo ćemo razgovarati o nevjerojatnim alatima koji će vas natjerati da se osjećate kao da ste upravo dobili ključeve digitalnog svemirskog broda.

Znate kako kuhar ima one savršeno uravnotežene noževe koji se osjećaju kao produžetak njihovih ruku? Ili kako glazbenik ima onu jednu gitaru koja kao da pjeva čim je dotakne? Pa, programeri imaju svoju verziju tih čarobnih alata, i evo što će vas apsolutno oduševiti – većina njih je potpuno besplatna!

Praktički poskakujem na stolici razmišljajući o tome da ovo podijelim s vama jer su potpuno revolucionirali način na koji gradimo softver. Govorimo o AI-pokretanim asistentima za kodiranje koji mogu pomoći u pisanju vašeg koda (ne šalim se!), oblačnim okruženjima gdje možete graditi cijele aplikacije doslovno bilo gdje s Wi-Fi-jem, i alatima za otklanjanje grešaka toliko sofisticiranim da su poput rendgenskog vida za vaše programe.

I evo dijela koji mi još uvijek izaziva trnce: ovo nisu "početnički alati" koje ćete prerasti. Ovo su točno isti profesionalni alati koje programeri u Googleu, Netflixu i onom indie studiju aplikacija koji volite koriste upravo u ovom trenutku. Osjećat ćete se kao pravi profesionalac koristeći ih!


### Uređivači koda i IDE-ovi: Vaši novi digitalni najbolji prijatelji

Razgovarajmo o uređivačima koda – oni će vam ozbiljno postati nova omiljena mjesta za druženje! Zamislite ih kao svoje osobno svetište za kodiranje gdje ćete provoditi većinu svog vremena izrađujući i usavršavajući svoje digitalne kreacije.

Ali evo što je apsolutno magično kod modernih uređivača: oni nisu samo fancy uređivači teksta. Oni su poput najbriljantnijeg, najpodržavajućeg mentora za kodiranje koji sjedi odmah pored vas 24/7. Hvataju vaše tipografske pogreške prije nego što ih uopće primijetite, predlažu poboljšanja koja vas čine genijem, pomažu vam razumjeti što svaki dio koda radi, a neki od njih čak mogu predvidjeti što ćete napisati i ponuditi da dovrše vaše misli!

Sjećam se kad sam prvi put otkrio automatsko dovršavanje – doslovno sam se osjećao kao da živim u budućnosti. Počnete nešto tipkati, a vaš uređivač kaže: "Hej, jesi li mislio na ovu funkciju koja radi točno ono što ti treba?" To je kao da imate čitača misli kao svog prijatelja za kodiranje!

**Što čini ove uređivače tako nevjerojatnima?**

Moderni uređivači koda nude impresivan niz značajki dizajniranih za povećanje vaše produktivnosti:

| Značajka | Što radi | Zašto pomaže |
|----------|----------|--------------|
| **Isticanje sintakse** | Boji različite dijelove vašeg koda | Olakšava čitanje koda i pronalaženje grešaka |
| **Automatsko dovršavanje** | Predlaže kod dok tipkate | Ubrzava kodiranje i smanjuje tipografske pogreške |
| **Alati za otklanjanje grešaka** | Pomažu vam pronaći i popraviti greške | Štedi sate vremena za rješavanje problema |
| **Ekstenzije** | Dodaju specijalizirane značajke | Prilagodite svoj uređivač za bilo koju tehnologiju |
| **AI asistenti** | Predlažu kod i objašnjenja | Ubrzavaju učenje i produktivnost |

> 🎥 **Video resurs**: Želite vidjeti ove alate u akciji? Pogledajte ovaj [video o alatima zanata](https://youtube.com/watch?v=69WJeXGBdxg) za sveobuhvatan pregled.

#### Preporučeni uređivači za web razvoj

**[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)** (Besplatno)
- Najpopularniji među web programerima
- Izvrsan ekosustav ekstenzija
- Ugrađeni terminal i Git integracija
- **Obavezne ekstenzije**:
  - [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) - AI-pokretani prijedlozi koda
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) - Suradnja u stvarnom vremenu
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Automatsko formatiranje koda
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Hvata tipografske pogreške u vašem kodu

**[JetBrains WebStorm](https://www.jetbrains.com/webstorm/)** (Plaćeno, besplatno za studente)
- Napredni alati za otklanjanje grešaka i testiranje
- Inteligentno automatsko dovršavanje koda
- Ugrađena kontrola verzija

**IDE-ovi temeljeni na oblaku** (Različite cijene)
- [GitHub Codespaces](https://github.com/features/codespaces) - Cijeli VS Code u vašem pregledniku
- [Replit](https://replit.com/) - Odlično za učenje i dijeljenje koda
- [StackBlitz](https://stackblitz.com/) - Trenutni, full-stack web razvoj

> 💡 **Savjet za početak**: Započnite s Visual Studio Code – besplatan je, široko korišten u industriji i ima ogromnu zajednicu koja stvara korisne vodiče i ekstenzije.


### Web preglednici: Vaš tajni laboratorij za razvoj

Dobro, pripremite se da vam um bude potpuno oduševljen! Znate kako ste koristili preglednike za pregledavanje društvenih mreža i gledanje videozapisa? Pa, ispada da su cijelo vrijeme skrivali ovaj nevjerojatni tajni laboratorij za programere, samo čekajući da ga otkrijete!

Svaki put kada desnom tipkom miša kliknete na web stranicu i odaberete "Inspect Element," otvarate skriveni svijet alata za programere koji su iskreno moćniji od nekog skupog softvera za koji sam nekada plaćao stotine dolara. To je kao da otkrijete da vaša obična kuhinja skriva profesionalni laboratorij za kuhare iza tajnog panela!

Prvi put kad mi je netko pokazao DevTools preglednika, proveo sam oko tri sata samo klikajući i govoreći "ČEKAJ, MOŽE LI TO TAKOĐER?!" Možete doslovno uređivati bilo koju web stranicu u stvarnom vremenu, vidjeti koliko brzo sve učitava, testirati kako vaša stranica izgleda na različitim uređajima, pa čak i otklanjati greške u JavaScriptu kao pravi profesionalac. To je apsolutno nevjerojatno!

**Evo zašto su preglednici vaše tajno oružje:**

Kada kreirate web stranicu ili web aplikaciju, trebate vidjeti kako izgleda i ponaša se u stvarnom svijetu. Preglednici ne samo da prikazuju vaš rad, već pružaju detaljne povratne informacije o performansama, pristupačnosti i potencijalnim problemima.

#### Alati za programere u preglednicima (DevTools)

Moderni preglednici uključuju sveobuhvatne razvojne suite:

| Kategorija alata | Što radi | Primjer upotrebe |
|------------------|----------|------------------|
| **Inspektor elemenata** | Pregled i uređivanje HTML/CSS-a u stvarnom vremenu |
| **Konzola** | Pregledajte poruke o pogreškama i testirajte JavaScript | Rješavajte probleme i eksperimentirajte s kodom |
| **Monitor mreže** | Pratite kako se resursi učitavaju | Optimizirajte performanse i vrijeme učitavanja |
| **Provjera pristupačnosti** | Testirajte inkluzivni dizajn | Osigurajte da vaša stranica radi za sve korisnike |
| **Simulator uređaja** | Pregledajte na različitim veličinama ekrana | Testirajte responzivni dizajn bez potrebe za više uređaja |

#### Preporučeni preglednici za razvoj

- **[Chrome](https://developers.google.com/web/tools/chrome-devtools/)** - DevTools standard u industriji s opsežnom dokumentacijom
- **[Firefox](https://developer.mozilla.org/docs/Tools)** - Izvrsni alati za CSS Grid i pristupačnost
- **[Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)** - Temeljen na Chromiumu s Microsoftovim resursima za razvoj

> ⚠️ **Važan savjet za testiranje**: Uvijek testirajte svoje web stranice u više preglednika! Ono što savršeno funkcionira u Chromeu može izgledati drugačije u Safariju ili Firefoxu. Profesionalni programeri testiraju na svim glavnim preglednicima kako bi osigurali dosljedno korisničko iskustvo.

### Alati naredbenog retka: Vaša ulaznica u svijet programerskih supermoći

Dobro, budimo potpuno iskreni o naredbenom retku, jer želim da ovo čujete od nekoga tko to stvarno razumije. Kad sam ga prvi put vidio – samo taj zastrašujući crni ekran s trepćućim tekstom – doslovno sam pomislio: "Ne, apsolutno ne! Ovo izgleda kao nešto iz hakerskog filma iz 80-ih, i definitivno nisam dovoljno pametan za ovo!" 😅

Ali evo što bih volio da mi je netko tada rekao, a što vam sada govorim: naredbeni redak nije strašan – zapravo je kao da imate direktan razgovor s vašim računalom. Zamislite to kao razliku između naručivanja hrane putem fancy aplikacije s slikama i jelovnicima (što je lijepo i jednostavno) i ulaska u vaš omiljeni lokalni restoran gdje kuhar točno zna što volite i može pripremiti nešto savršeno samo ako kažete "iznenadi me nečim nevjerojatnim."

Naredbeni redak je mjesto gdje programeri postaju pravi čarobnjaci. Utipkate nekoliko naizgled magičnih riječi (ok, to su samo naredbe, ali osjećaju se magično!), pritisnete enter, i BOOM – stvorili ste cijele strukture projekata, instalirali moćne alate iz cijelog svijeta ili postavili svoju aplikaciju na internet za milijune ljudi. Kad jednom okusite tu moć, postaje prilično zarazno!

**Zašto će vam naredbeni redak postati omiljeni alat:**

Iako su grafička sučelja izvrsna za mnoge zadatke, naredbeni redak briljira u automatizaciji, preciznosti i brzini. Mnogi razvojni alati prvenstveno rade putem sučelja naredbenog retka, a učenje kako ih učinkovito koristiti može dramatično poboljšati vašu produktivnost.

```bash
# Step 1: Create and navigate to project directory
mkdir my-awesome-website
cd my-awesome-website
```

**Što ovaj kod radi:**
- **Stvara** novi direktorij pod nazivom "my-awesome-website" za vaš projekt
- **Navigira** u novostvoreni direktorij kako biste mogli početi raditi

```bash
# Step 2: Initialize project with package.json
npm init -y

# Install modern development tools
npm install --save-dev vite prettier eslint
npm install --save-dev @eslint/js
```

**Korak po korak, evo što se događa:**
- **Inicijalizira** novi Node.js projekt s osnovnim postavkama pomoću `npm init -y`
- **Instalira** Vite kao moderan alat za izradu za brzi razvoj i produkcijske verzije
- **Dodaje** Prettier za automatsko formatiranje koda i ESLint za provjeru kvalitete koda
- **Koristi** zastavicu `--save-dev` kako bi označio ove alate kao ovisnosti samo za razvoj

```bash
# Step 3: Create project structure and files
mkdir src assets
echo '<!DOCTYPE html><html><head><title>My Site</title></head><body><h1>Hello World</h1></body></html>' > index.html

# Start development server
npx vite
```

**Ovdje smo:**
- **Organizirali** naš projekt stvaranjem zasebnih mapa za izvorni kod i resurse
- **Generirali** osnovnu HTML datoteku s pravilnom strukturom dokumenta
- **Pokrenuli** Vite razvojni server za automatsko osvježavanje i zamjenu modula u stvarnom vremenu

#### Osnovni alati naredbenog retka za web razvoj

| Alat | Svrha | Zašto vam je potreban |
|------|-------|-----------------------|
| **[Git](https://git-scm.com/)** | Kontrola verzija | Pratite promjene, surađujte s drugima, sigurnosno kopirajte svoj rad |
| **[Node.js & npm](https://nodejs.org/)** | JavaScript runtime i upravljanje paketima | Pokrenite JavaScript izvan preglednika, instalirajte moderne alate za razvoj |
| **[Vite](https://vitejs.dev/)** | Alat za izradu i razvojni server | Izuzetno brz razvoj s automatskim osvježavanjem modula |
| **[ESLint](https://eslint.org/)** | Kvaliteta koda | Automatski pronađite i ispravite probleme u vašem JavaScriptu |
| **[Prettier](https://prettier.io/)** | Formatiranje koda | Održavajte vaš kod dosljedno formatiranim i čitljivim |

#### Opcije specifične za platformu

**Windows:**
- **[Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)** - Moderan terminal s naprednim značajkama
- **[PowerShell](https://docs.microsoft.com/powershell/?WT.mc_id=academic-77807-sagibbon)** 💻 - Moćno skriptno okruženje
- **[Command Prompt](https://docs.microsoft.com/windows-server/administration/windows-commands/?WT.mc_id=academic-77807-sagibbon)** 💻 - Tradicionalni Windows naredbeni redak

**macOS:**
- **[Terminal](https://support.apple.com/guide/terminal/)** 💻 - Ugrađena aplikacija za terminal
- **[iTerm2](https://iterm2.com/)** - Poboljšani terminal s naprednim značajkama

**Linux:**
- **[Bash](https://www.gnu.org/software/bash/)** 💻 - Standardna Linux ljuska
- **[KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)** - Napredni emulator terminala

> 💻 = Predinstalirano na operativnom sustavu

> 🎯 **Put učenja**: Započnite s osnovnim naredbama poput `cd` (promjena direktorija), `ls` ili `dir` (popis datoteka) i `mkdir` (stvaranje mape). Vježbajte s modernim naredbama za radni tijek poput `npm install`, `git status` i `code .` (otvara trenutni direktorij u VS Code). Kako postajete sve ugodniji, prirodno ćete usvojiti naprednije naredbe i tehnike automatizacije.

### Dokumentacija: Vaš mentor za učenje koji je uvijek dostupan

Evo male tajne koja će vas učiniti sigurnijima u vašim počecima: čak i najiskusniji programeri provode velik dio svog vremena čitajući dokumentaciju. I to nije zato što ne znaju što rade – to je zapravo znak mudrosti!

Zamislite dokumentaciju kao pristup najstrpljivijim, najinformiranijim učiteljima na svijetu koji su dostupni 24/7. Imate problem u 2 ujutro? Dokumentacija je tu s toplim virtualnim zagrljajem i točno onim odgovorom koji vam treba. Želite naučiti o nekoj cool novoj značajci o kojoj svi pričaju? Dokumentacija vas podržava s korak-po-korak primjerima. Pokušavate razumjeti zašto nešto funkcionira na određeni način? Pogodili ste – dokumentacija je spremna objasniti to na način koji će vam konačno kliknuti!

**Evo gdje se događa prava magija:**

Profesionalni programeri provode značajan dio svog vremena čitajući dokumentaciju – ne zato što ne znaju što rade, već zato što se svijet web razvoja razvija tako brzo da je za ostanak u tijeku potrebno stalno učenje. Kvalitetna dokumentacija pomaže vam razumjeti ne samo *kako* nešto koristiti, već *zašto* i *kada* to koristiti.

#### Ključni resursi za dokumentaciju

**[Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web)**
- Zlatni standard za dokumentaciju web tehnologija
- Sveobuhvatni vodiči za HTML, CSS i JavaScript
- Uključuje informacije o kompatibilnosti preglednika
- Sadrži praktične primjere i interaktivne demonstracije

**[Web.dev](https://web.dev)** (od Googlea)
- Najbolje prakse za moderni web razvoj
- Vodiči za optimizaciju performansi
- Principi pristupačnosti i inkluzivnog dizajna
- Studije slučaja iz stvarnih projekata

**[Microsoft Developer Documentation](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers)**
- Resursi za razvoj u pregledniku Edge
- Vodiči za progresivne web aplikacije
- Uvidi u razvoj na više platformi

**[Frontend Masters Learning Paths](https://frontendmasters.com/learn/)**
- Strukturirani kurikulumi za učenje
- Video tečajevi od stručnjaka iz industrije
- Praktične vježbe kodiranja

> 📚 **Strategija učenja**: Ne pokušavajte zapamtiti dokumentaciju – umjesto toga, naučite kako je učinkovito pretraživati. Označite često korištene reference i vježbajte korištenje funkcija pretraživanja kako biste brzo pronašli specifične informacije.

✅ **Razmislite o ovome**: Evo nečega zanimljivog za razmisliti – kako mislite da se alati za izradu web stranica (razvoj) razlikuju od alata za dizajniranje njihovog izgleda (dizajn)? To je kao razlika između arhitekta koji dizajnira prekrasnu kuću i izvođača radova koji je zapravo gradi. Oba su ključna, ali trebaju različite alate! Ovakvo razmišljanje zaista će vam pomoći da vidite širu sliku o tome kako web stranice nastaju.

## Izazov GitHub Copilot Agent 🚀

Koristite način rada Agent za dovršavanje sljedećeg izazova:

**Opis:** Istražite značajke modernog uređivača koda ili IDE-a i pokažite kako može poboljšati vaš radni tijek kao web programera.

**Zadatak:** Odaberite uređivač koda ili IDE (kao što su Visual Studio Code, WebStorm ili cloud-based IDE). Nabrojite tri značajke ili ekstenzije koje vam pomažu u pisanju, otklanjanju grešaka ili održavanju koda. Za svaku navedite kratko objašnjenje kako koristi vašem radnom tijeku.

---

## 🚀 Izazov

**Spremni za svoju prvu detektivsku misiju?**

Sada kada imate ovu sjajnu osnovu, imam avanturu koja će vam pomoći da vidite koliko je svijet programiranja raznolik i fascinantan. I slušajte – ovo nije o tome da odmah počnete pisati kod, pa nema pritiska! Zamislite se kao detektiva programskih jezika na svom prvom uzbudljivom zadatku!

**Vaša misija, ako je odlučite prihvatiti:**
1. **Postanite istraživač jezika**: Odaberite tri programska jezika iz potpuno različitih svjetova – možda jedan za izradu web stranica, jedan za kreiranje mobilnih aplikacija i jedan za analizu podataka za znanstvenike. Pronađite primjere istog jednostavnog zadatka napisanog u svakom jeziku. Obećavam, bit ćete apsolutno zadivljeni koliko različito mogu izgledati dok rade potpuno istu stvar!

2. **Otkrijte njihove priče o nastanku**: Što čini svaki jezik posebnim? Evo zanimljive činjenice – svaki pojedini programski jezik stvoren je jer je netko pomislio: "Znate što? Mora postojati bolji način za rješavanje ovog specifičnog problema." Možete li otkriti koji su to problemi bili? Neke od ovih priča su zaista fascinantne!

3. **Upoznajte zajednice**: Provjerite koliko su zajednice svakog jezika gostoljubive i strastvene. Neke imaju milijune programera koji dijele znanje i pomažu jedni drugima, dok su druge manje, ali izuzetno povezane i podržavajuće. Oduševit će vas različite osobnosti ovih zajednica!

4. **Slijedite svoj instinkt**: Koji vam je jezik trenutno najpristupačniji? Ne stresirajte se oko donošenja "savršene" odluke – samo slušajte svoje instinkte! Ovdje nema pogrešnog odgovora, a uvijek možete istražiti druge kasnije.

**Bonus detektivski zadatak**: Pokušajte otkriti koje velike web stranice ili aplikacije su izgrađene s svakim jezikom. Garantiram da ćete biti iznenađeni kad saznate što pokreće Instagram, Netflix ili onu mobilnu igru koju ne možete prestati igrati!

> 💡 **Zapamtite**: Ne pokušavate postati stručnjak u bilo kojem od ovih jezika danas. Samo upoznajete susjedstvo prije nego što odlučite gdje želite postaviti svoj "ured". Uzmite si vremena, zabavite se i pustite da vas vodi znatiželja!

## Proslavimo što ste otkrili!

Wow, upili ste toliko nevjerojatnih informacija danas! Iskreno sam uzbuđen vidjeti koliko se toga zadržalo s vama. I zapamtite – ovo nije test gdje morate sve savršeno znati. Ovo je više kao proslava svih cool stvari koje ste naučili o ovom fascinantnom svijetu u koji ćete uskoro zaroniti!

[Odgovorite na kviz nakon lekcije](https://ff-quizzes.netlify.app/web/)

## Pregled i samostalno učenje

**Uzmite si vremena za istraživanje i uživajte u tome!**

Danas ste prešli puno toga, i to je nešto na što možete biti ponosni! Sada dolazi zabavni dio – istraživanje tema koje su pobudile vašu znatiželju. Zapamtite, ovo nije domaća zadaća – ovo je avantura!

**Dublje istražite ono što vas zanima:**

**Isprobajte programske jezike:**
- Posjetite službene web stranice 2-3 jezika koji su vam privukli pažnju. Svaki od njih ima svoju osobnost i priču!
- Isprobajte online platforme za kodiranje poput [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) ili [Replit](https://replit.com/). Ne bojte se eksperimentirati – ne možete ništa pokvariti!
- Pročitajte kako je nastao vaš omiljeni jezik. Ozbiljno, neke od ovih priča su fascinantne i pomoći će vam da razumijete zašto jezici funkcioniraju na način na koji funkcioniraju.

**Upoznajte se s novim alatima:**
- Preuzmite Visual Studio Code ako već niste – besplatan je i svidjet će vam se!
- Provedite nekoliko minuta pregledavajući tržište ekstenzija. To je kao trgovina aplikacijama za vaš uređivač koda!
- Otvorite Developer Tools u vašem pregledniku i samo klikajte okolo. Ne brinite o tome da sve razumijete – samo se upoznajte s onim što je tamo.

**Pridružite se zajednici:**
- Pratite neke zajednice programera na [Dev.to](https://dev.to/), [Stack Overflow](https://stackoverflow.com/) ili [GitHub](https://github.com/). Programerska zajednica izuzetno je gostoljubiva prema početnicima!
- Pogledajte neke videozapise o kodiranju za početnike na YouTubeu. Postoji toliko sjajnih kreatora koji se sjećaju kako je to bilo kad su tek počinjali.
- Razmislite o pridruživanju lokalnim meetupima ili online zajednicama. Vjerujte mi, developeri vole pomagati početnicima!

> 🎯 **Slušajte, evo što želim da zapamtite**: Ne očekuje se da preko noći postanete čarobnjak za kodiranje! Trenutno samo upoznajete ovaj nevjerojatan novi svijet kojem ćete postati dio. Uzmite si vremena, uživajte u putovanju i zapamtite – svaki developer kojeg se divite nekada je bio točno tamo gdje ste vi sada, osjećajući uzbuđenje i možda malo preplavljenosti. To je potpuno normalno i znači da radite sve kako treba!



## Zadatak

[Čitanje dokumentacije](assignment.md)

> 💡 **Mali poticaj za vaš zadatak**: Bilo bi mi jako drago vidjeti da istražujete neke alate koje još nismo pokrili! Preskočite editore, preglednike i alate naredbenog retka o kojima smo već razgovarali – postoji cijeli nevjerojatan svemir fantastičnih alata za razvoj koji samo čekaju da ih otkrijete. Potražite one koji se aktivno održavaju i imaju živahne, korisne zajednice (takvi obično imaju najbolje tutorijale i najpodržavajuće ljude kad se neizbježno zaglavite i trebate prijateljsku pomoć).

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.