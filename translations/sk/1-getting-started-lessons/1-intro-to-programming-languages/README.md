<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3e0da5eb9b275fe3cb431033c1413ec2",
  "translation_date": "2025-10-24T21:23:08+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "sk"
}
-->
# Úvod do programovacích jazykov a moderných nástrojov pre vývojárov

Ahoj, budúci vývojár! 👋 Môžem ti povedať niečo, z čoho mám každý deň zimomriavky? Chystáš sa objaviť, že programovanie nie je len o počítačoch – je to o tom, že máš skutočné super schopnosti, ktoré ti umožnia oživiť tvoje najdivokejšie nápady!

Poznáš ten moment, keď používaš svoju obľúbenú aplikáciu a všetko funguje dokonale? Keď klikneš na tlačidlo a stane sa niečo úplne magické, čo ťa prinúti povedať: „Wow, ako to urobili?“ Nuž, niekto presne ako ty – pravdepodobne sediaci vo svojej obľúbenej kaviarni o druhej ráno s tretím espressom – napísal kód, ktorý vytvoril túto mágiu. A teraz príde niečo, čo ti vyrazí dych: na konci tejto lekcie nielenže pochopíš, ako to urobili, ale budeš mať chuť to vyskúšať sám!

Pozri, úplne chápem, ak sa ti programovanie teraz zdá zastrašujúce. Keď som začínal, úprimne som si myslel, že musíš byť nejaký matematický génius alebo programovať od piatich rokov. Ale tu je niečo, čo úplne zmenilo môj pohľad: programovanie je presne ako učenie sa rozprávať v novom jazyku. Začneš s „ahoj“ a „ďakujem“, potom sa naučíš objednať si kávu, a skôr než sa nazdáš, vedieš hlboké filozofické diskusie! Lenže v tomto prípade vedieš rozhovory s počítačmi, a úprimne? Sú to najtrpezlivejší partneri na rozhovor, akých kedy budeš mať – nikdy neodsudzujú tvoje chyby a vždy sú nadšení, že to môžeš skúsiť znova!

Dnes preskúmame neuveriteľné nástroje, ktoré robia moderný webový vývoj nielen možným, ale aj vážne návykovým. Hovorím o presne tých istých editoroch, prehliadačoch a pracovných postupoch, ktoré vývojári v Netflixe, Spotify a tvojom obľúbenom indie štúdiu používajú každý deň. A tu je časť, ktorá ťa prinúti tancovať od radosti: väčšina týchto profesionálnych nástrojov na úrovni priemyslu je úplne zadarmo!

![Úvod do programovania](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.sk.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Zistime, čo už vieš!

Skôr než sa pustíme do zábavy, som zvedavý – čo už vieš o tomto svete programovania? A počúvaj, ak sa na tieto otázky pozeráš a myslíš si „nemám ani najmenšie tušenie o ničom z toho,“ to nie je len v poriadku, je to dokonalé! To znamená, že si presne na správnom mieste. Mysli na tento kvíz ako na rozcvičku pred tréningom – len si rozcvičujeme mozgové svaly!

[Urobte si kvíz pred lekciou](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Dobrodružstvo, na ktoré sa spolu vydáme

Dobre, úprimne sa nemôžem dočkať toho, čo dnes preskúmame! Naozaj, prial by som si vidieť tvoj výraz, keď ti niektoré z týchto konceptov zapadnú. Tu je neuveriteľná cesta, na ktorú sa spolu vydáme:

- **Čo vlastne programovanie je (a prečo je to tá najúžasnejšia vec na svete!)** – Objavíme, ako je kód doslova neviditeľnou mágiou, ktorá poháňa všetko okolo teba, od budíka, ktorý nejako vie, že je pondelok ráno, až po algoritmus, ktorý dokonale vyberá tvoje odporúčania na Netflixe
- **Programovacie jazyky a ich úžasné osobnosti** – Predstav si, že vstúpiš na párty, kde má každý úplne odlišné super schopnosti a spôsoby riešenia problémov. Taký je svet programovacích jazykov a ich spoznávanie si zamiluješ!
- **Základné stavebné bloky, ktoré vytvárajú digitálnu mágiu** – Mysli na ne ako na ultimátnu kreatívnu LEGO sadu. Keď pochopíš, ako tieto kúsky do seba zapadajú, uvedomíš si, že môžeš doslova postaviť čokoľvek, čo si vysnívaš
- **Profesionálne nástroje, ktoré ti dajú pocit, že si práve dostal čarovnú paličku** – Nepreháňam – tieto nástroje ti skutočne dajú pocit, že máš super schopnosti, a najlepšie na tom? Sú to tie isté, ktoré používajú profesionáli!

> 💡 **Tu je vec**: Ani len nepomysli na to, že si dnes všetko zapamätáš! Teraz chcem len, aby si pocítil iskru nadšenia z toho, čo je možné. Detaily sa ti prirodzene vryjú do pamäti, keď budeme spolu cvičiť – takto sa totiž učí naozaj!

> Túto lekciu si môžeš prejsť na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Čo vlastne *je* programovanie?

Dobre, poďme sa pozrieť na otázku za milión: čo vlastne programovanie je?

Poviem ti príbeh, ktorý úplne zmenil môj pohľad na vec. Minulý týždeň som sa snažil vysvetliť mojej mame, ako používať nový diaľkový ovládač k našej inteligentnej televízii. Pristihol som sa, ako hovorím veci ako „Stlač červené tlačidlo, ale nie to veľké červené tlačidlo, to malé červené tlačidlo naľavo... nie, na tvojej druhej ľavej strane... dobre, teraz ho drž dve sekundy, nie jednu, nie tri...“ Znie to povedome? 😅

To je programovanie! Je to umenie dávať neuveriteľne detailné, krok za krokom inštrukcie niečomu, čo je veľmi mocné, ale potrebuje všetko vysvetliť úplne presne. Lenže namiesto vysvetľovania tvojej mame (ktorá sa môže opýtať „ktoré červené tlačidlo?!“), vysvetľuješ počítaču (ktorý urobí presne to, čo povieš, aj keď to, čo si povedal, nie je úplne to, čo si myslel).

Tu je niečo, čo mi vyrazilo dych, keď som sa to prvýkrát dozvedel: počítače sú v podstate dosť jednoduché. Doslova rozumejú len dvom veciam – 1 a 0, čo je v podstate len „áno“ a „nie“ alebo „zapnuté“ a „vypnuté.“ To je všetko! Ale tu prichádza tá mágia – nemusíme hovoriť v jednotkách a nulách, akoby sme boli v Matrixe. Tu prichádzajú na pomoc **programovacie jazyky**. Sú ako najlepší prekladateľ na svete, ktorý vezme tvoje úplne normálne ľudské myšlienky a preloží ich do jazyka počítača.

A tu je niečo, čo mi stále spôsobuje zimomriavky každé ráno, keď sa zobudím: doslova *všetko* digitálne v tvojom živote začalo s niekým presne ako ty, pravdepodobne sediacim v pyžame s šálkou kávy, píšucim kód na svojom notebooku. Ten Instagramový filter, ktorý ťa robí dokonalým? Niekto to naprogramoval. Odporúčanie, ktoré ťa priviedlo k tvojej novej obľúbenej piesni? Vývojár vytvoril ten algoritmus. Aplikácia, ktorá ti pomáha rozdeliť účet za večeru s priateľmi? Áno, niekto si pomyslel „to je otravné, stavím sa, že to dokážem vyriešiť“ a potom... to urobil!

Keď sa naučíš programovať, nezískavaš len novú zručnosť – stávaš sa súčasťou tejto neuveriteľnej komunity riešiteľov problémov, ktorí trávia dni premýšľaním: „Čo keby som mohol vytvoriť niečo, čo niekomu zlepší deň?“ Úprimne, je niečo lepšie ako to?

✅ **Hľadanie zaujímavých faktov**: Tu je niečo super zaujímavé, čo si môžeš vyhľadať, keď budeš mať chvíľu voľna – kto si myslíš, že bol prvým programátorom na svete? Dám ti nápovedu: možno to nie je ten, koho očakávaš! Príbeh tejto osoby je absolútne fascinujúci a ukazuje, že programovanie bolo vždy o kreatívnom riešení problémov a myslení mimo zaužívaných rámcov.

## Programovacie jazyky sú ako rôzne príchute mágie

Dobre, toto bude znieť divne, ale vydrž – programovacie jazyky sú veľmi podobné rôznym druhom hudby. Zamysli sa nad tým: máš jazz, ktorý je hladký a improvizačný, rock, ktorý je silný a priamočiary, klasiku, ktorá je elegantná a štruktúrovaná, a hip-hop, ktorý je kreatívny a expresívny. Každý štýl má svoju vlastnú atmosféru, svoju vlastnú komunitu vášnivých fanúšikov a každý je dokonalý pre rôzne nálady a príležitosti.

Programovacie jazyky fungujú presne tak isto! Nepoužil by si ten istý jazyk na vytvorenie zábavnej mobilnej hry, aký by si použil na spracovanie obrovského množstva údajov o klíme, rovnako ako by si nehral death metal na hodine jogy (no, na väčšine hodín jogy! 😄).

Ale tu je niečo, čo ma vždy ohromí, keď na to myslím: tieto jazyky sú ako mať najtrpezlivejšieho, najinteligentnejšieho tlmočníka na svete, ktorý sedí hneď vedľa teba. Môžeš vyjadriť svoje nápady spôsobom, ktorý je prirodzený pre ľudský mozog, a oni sa postarajú o všetku neuveriteľne zložitú prácu prekladu do jednotiek a núl, ktoré počítače skutočne rozumejú. Je to ako mať priateľa, ktorý je dokonale plynulý v „ľudskej kreativite“ aj „počítačovej logike“ – a nikdy sa neunaví, nikdy nepotrebuje prestávku na kávu a nikdy ťa neodsúdi za to, že sa pýtaš tú istú otázku dvakrát!

### Populárne programovacie jazyky a ich využitie

| Jazyk | Najlepšie na | Prečo je populárny |
|-------|--------------|---------------------|
| **JavaScript** | Webový vývoj, používateľské rozhrania | Beží v prehliadačoch a poháňa interaktívne webové stránky |
| **Python** | Dátová veda, automatizácia, AI | Jednoduchý na čítanie a učenie, silné knižnice |
| **Java** | Podnikové aplikácie, Android aplikácie | Nezávislý na platforme, robustný pre veľké systémy |
| **C#** | Windows aplikácie, vývoj hier | Silná podpora ekosystému Microsoft |
| **Go** | Cloudové služby, backend systémy | Rýchly, jednoduchý, navrhnutý pre moderné výpočty |

### Vysokoúrovňové vs. nízkoúrovňové jazyky

Dobre, toto bol úprimne koncept, ktorý mi na začiatku úplne zamotal hlavu, takže sa podelím o analógiu, ktorá mi to konečne objasnila – a naozaj dúfam, že pomôže aj tebe!

Predstav si, že navštíviš krajinu, kde nehovoríš jazykom, a zúfalo potrebuješ nájsť najbližšiu toaletu (všetci sme tam už boli, však? 😅):

- **Nízkoúrovňové programovanie** je ako naučiť sa miestny dialekt tak dobre, že dokážeš komunikovať s babičkou predávajúcou ovocie na rohu pomocou kultúrnych odkazov, miestneho slangu a vtipov, ktoré chápe len niekto, kto tam vyrastal. Super pôsobivé a neuveriteľne efektívne... ak si náhodou plynulý! Ale dosť ohromujúce, keď sa len snažíš nájsť toaletu.

- **Vysokoúrovňové programovanie** je ako mať toho úžasného miestneho priateľa, ktorý ťa chápe. Môžeš povedať „Naozaj potrebujem nájsť toaletu“ v obyčajnej angličtine a on sa postará o všetok kultúrny preklad a dá ti pokyny spôsobom, ktorý dáva dokonalý zmysel tvojmu ne-miestnemu mozgu.

V programovacích termínoch:
- **Nízkoúrovňové jazyky** (ako Assembly alebo C) ti umožňujú mať neuveriteľne detailné rozhovory s hardvérom počítača, ale musíš myslieť ako stroj, čo je... no, povedzme, že je to dosť veľká mentálna zmena!
- **Vysokoúrovňové jazyky** (ako JavaScript, Python alebo C#) ti umožňujú myslieť ako človek, zatiaľ čo oni sa postarajú o všetku reč strojov na pozadí. Navyše majú neuveriteľne priateľské komunity plné ľudí, ktorí si pamätajú, aké to bolo byť novým, a skutočne chcú pomôcť!

Hádaš, ktoré ti odporučím začať? 😉 Vysokoúrovňové jazyky sú ako mať pomocné kolieska, ktoré nikdy nechceš dať dole, pretože robia celý zážitok oveľa príjemnejším!

### Ukážem ti, prečo sú vysokoúrovňové jazyky oveľa priateľskejšie

Dobre, chystám sa ti ukázať niečo, čo dokonale demonštruje, prečo som sa zamiloval do vysokoúrovňových jazykov, ale najprv – potrebujem, aby si mi niečo sľúbil. Keď uvidíš ten prvý príklad kódu, nepanikár! Má vyzerať zastrašujúco. To je presne pointa, ktorú sa snažím vysvetliť!

Pozrieme sa na tú istú úlohu napísanú dvoma úplne odlišnými štýlmi. Oba vytvárajú takzvanú Fibonacciho postupnosť – je to krásny matematický vzor, kde každé číslo je súčtom dvoch predchádzajúcich: 0, 1, 1, 2, 3, 5, 8, 13... (Zaujímavý fakt: tento vzor nájdeš doslova všade v prírode – špirálach slnečnicových semien, vzoroch šišiek, dokonca aj v spôsobe, akým sa formujú galaxie!)

Pripravený vidieť rozdiel? Poďme na to!

**Vysokoúrovňový jazyk (JavaScript) – Priateľský pre človeka:**

```javascript
// Step 1: Basic Fibonacci setup
const fibonacciCount = 10;
let current = 0;
let next = 1;

console.log('Fibonacci sequence:');
```

**Čo tento kód robí:**
- **Deklaruje** konštantu na určenie, koľko Fibonacciho čísel chceme vygenerovať
- **Inicializuje** dve premenné na sledovanie aktuálneho a nasledujúceho čísla v postupnosti
- **Nastaví** počiatočné hodnoty (0 a 1), ktoré definujú Fibonacciho vzor
- **Zobrazí** hlavičku správy na identifikáciu nášho výstupu

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

**Rozdelenie toho, čo sa tu deje:**
- **Prechádza** každú pozíciu v našej postupnosti pomocou `for` cyklu
- **Zobrazí** každé číslo s jeho pozíciou pomocou formátovania šablónových literálov
- **Vypočíta** ďalšie Fibonacciho číslo pridaním aktuálnych a nasledujúcich hodnôt
- **Aktualizuje** naše sledovacie premenné na prechod do ďalšej iter
✅ **O Fibonacciho postupnosti**: Tento nádherný číselný vzor (kde každé číslo je súčtom dvoch predchádzajúcich: 0, 1, 1, 2, 3, 5, 8...) sa doslova objavuje *všade* v prírode! Nájdete ho v špirálach slnečníc, vzoroch šišiek, zakrivení ulít nautilusov a dokonca aj v tom, ako rastú vetvy stromov. Je neuveriteľné, ako nám matematika a kód môžu pomôcť pochopiť a znovu vytvoriť vzory, ktoré príroda používa na vytváranie krásy!


## Základné stavebné prvky, ktoré vytvárajú kúzlo

Dobre, teraz, keď ste videli, ako vyzerajú programovacie jazyky v praxi, rozoberme základné časti, ktoré tvoria doslova každý program, aký bol kedy napísaný. Myslite na ne ako na základné ingrediencie vášho obľúbeného receptu – keď pochopíte, čo každá z nich robí, budete schopní čítať a písať kód takmer v akomkoľvek jazyku!

Je to trochu ako učiť sa gramatiku programovania. Pamätáte si, keď ste sa v škole učili o podstatných menách, slovesách a o tom, ako skladať vety? Programovanie má svoju vlastnú verziu gramatiky, a úprimne, je oveľa logickejšia a zhovievavejšia než anglická gramatika! 😄

### Príkazy: Krok za krokom inštrukcie

Začnime s **príkazmi** – sú ako jednotlivé vety v rozhovore s vaším počítačom. Každý príkaz hovorí počítaču, aby urobil jednu konkrétnu vec, podobne ako dávanie pokynov: "Tu odboč doľava," "Zastav na červenej," "Zaparkuj na tom mieste."

Na príkazoch sa mi páči, aké sú zvyčajne čitateľné. Pozrite sa na toto:

```javascript
// Basic statements that perform single actions
const userName = "Alex";                    
console.log("Hello, world!");              
const sum = 5 + 3;                         
```

**Čo tento kód robí:**
- **Deklaruje** konštantnú premennú na uloženie mena používateľa
- **Zobrazí** uvítaciu správu na výstup konzoly
- **Vypočíta** a uloží výsledok matematickej operácie

```javascript
// Statements that interact with web pages
document.title = "My Awesome Website";      
document.body.style.backgroundColor = "lightblue";
```

**Krok za krokom, čo sa deje:**
- **Upraví** názov webovej stránky, ktorý sa zobrazuje na karte prehliadača
- **Zmení** farbu pozadia celého tela stránky

### Premenné: Pamäťový systém vášho programu

Dobre, **premenné** sú úprimne jedným z mojich najobľúbenejších konceptov na učenie, pretože sú tak podobné veciam, ktoré už každý deň používate!

Premýšľajte na chvíľu o zozname kontaktov vo vašom telefóne. Nepamätáte si telefónne čísla každého – namiesto toho si uložíte "Mama," "Najlepší priateľ" alebo "Pizzeria, ktorá doručuje do 2 rána" a necháte telefón, aby si pamätal skutočné čísla. Premenné fungujú presne tak isto! Sú ako označené kontajnery, kde váš program môže ukladať informácie a neskôr ich vyhľadať pomocou názvu, ktorý dáva zmysel.

Tu je naozaj skvelé: premenné sa môžu meniť, keď váš program beží (odtiaľ názov "premenné" – vidíte, čo tým mysleli?). Rovnako ako môžete aktualizovať kontakt na pizzeriu, keď objavíte ešte lepšiu, premenné sa môžu aktualizovať, keď váš program získava nové informácie alebo keď sa situácie menia!

Ukážem vám, aké krásne jednoduché to môže byť:

```javascript
// Step 1: Creating basic variables
const siteName = "Weather Dashboard";        
let currentWeather = "sunny";               
let temperature = 75;                       
let isRaining = false;                      
```

**Pochopenie týchto konceptov:**
- **Ukladajte** nemenné hodnoty do premenných `const` (napríklad názov stránky)
- **Používajte** `let` pre hodnoty, ktoré sa môžu meniť počas behu programu
- **Priraďujte** rôzne typy dát: reťazce (text), čísla a booleany (pravda/nepravda)
- **Vyberajte** popisné názvy, ktoré vysvetľujú, čo každá premenná obsahuje

```javascript
// Step 2: Working with objects to group related data
const weatherData = {                       
  location: "San Francisco",
  humidity: 65,
  windSpeed: 12
};
```

**V uvedenom sme:**
- **Vytvorili** objekt na zoskupenie súvisiacich informácií o počasí
- **Organizovali** viacero častí údajov pod jedným názvom premennej
- **Použili** páry kľúč-hodnota na jasné označenie každej časti informácií

```javascript
// Step 3: Using and updating variables
console.log(`${siteName}: Today is ${currentWeather} and ${temperature}°F`);
console.log(`Wind speed: ${weatherData.windSpeed} mph`);

// Updating changeable variables
currentWeather = "cloudy";                  
temperature = 68;                          
```

**Pochopme každú časť:**
- **Zobrazte** informácie pomocou šablónových literálov so syntaxou `${}`
- **Pristupujte** k vlastnostiam objektu pomocou bodkovej notácie (`weatherData.windSpeed`)
- **Aktualizujte** premenné deklarované pomocou `let`, aby odrážali meniace sa podmienky
- **Kombinujte** viacero premenných na vytvorenie zmysluplných správ

```javascript
// Step 4: Modern destructuring for cleaner code
const { location, humidity } = weatherData; 
console.log(`${location} humidity: ${humidity}%`);
```

**Čo potrebujete vedieť:**
- **Extrahujte** konkrétne vlastnosti z objektov pomocou deštrukturačného priradenia
- **Vytvárajte** nové premenné automaticky s rovnakými názvami ako kľúče objektov
- **Zjednodušte** kód tým, že sa vyhnete opakovanej bodkovej notácii

### Riadenie toku: Naučte svoj program myslieť

Dobre, tu sa programovanie stáva úplne ohromujúcim! **Riadenie toku** je v podstate učenie vášho programu, ako robiť inteligentné rozhodnutia, presne tak, ako to robíte každý deň bez toho, aby ste o tom premýšľali.

Predstavte si toto: dnes ráno ste pravdepodobne prešli niečím ako "Ak prší, vezmem si dáždnik. Ak je zima, oblečiem si bundu. Ak meškám, preskočím raňajky a vezmem si kávu cestou." Váš mozog prirodzene nasleduje túto logiku "ak-tak" desiatky krát každý deň!

Toto je to, čo robí programy inteligentnými a živými namiesto toho, aby len nasledovali nejaký nudný, predvídateľný scenár. Môžu sa skutočne pozrieť na situáciu, vyhodnotiť, čo sa deje, a reagovať primerane. Je to ako dať vášmu programu mozog, ktorý sa dokáže prispôsobiť a robiť rozhodnutia!

Chcete vidieť, ako krásne to funguje? Ukážem vám:

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

**Čo tento kód robí:**
- **Skontroluje**, či vek používateľa spĺňa požiadavku na hlasovanie
- **Vykoná** rôzne bloky kódu na základe výsledku podmienky
- **Vypočíta** a zobrazí, koľko času zostáva do možnosti hlasovania, ak je vek pod 18 rokov
- **Poskytne** konkrétnu, užitočnú spätnú väzbu pre každý scenár

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

**Rozdelenie toho, čo sa tu deje:**
- **Kombinujte** viacero podmienok pomocou operátora `&&` (a)
- **Vytvorte** hierarchiu podmienok pomocou `else if` pre viacero scenárov
- **Riešte** všetky možné prípady pomocou záverečného príkazu `else`
- **Poskytnite** jasnú, akčnú spätnú väzbu pre každú rôznu situáciu

```javascript
// Step 3: Concise conditional with ternary operator
const votingStatus = userAge >= 18 ? "Can vote" : "Cannot vote yet";
console.log(`Status: ${votingStatus}`);
```

**Čo si treba zapamätať:**
- **Používajte** ternárny operátor (`? :`) pre jednoduché podmienky s dvoma možnosťami
- **Napíšte** podmienku ako prvú, nasleduje `?`, potom výsledok pre pravdu, potom `:`, potom výsledok pre nepravdu
- **Používajte** tento vzor, keď potrebujete priradiť hodnoty na základe podmienok

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

**Tento kód dosahuje nasledovné:**
- **Porovnáva** hodnotu premennej s viacerými konkrétnymi prípadmi
- **Zoskupuje** podobné prípady dohromady (pracovné dni vs. víkendy)
- **Vykonáva** príslušný blok kódu, keď sa nájde zhoda
- **Zahŕňa** prípad `default` na riešenie neočakávaných hodnôt
- **Používa** príkazy `break`, aby zabránil pokračovaniu kódu do ďalšieho prípadu

> 💡 **Analógia zo skutočného života**: Myslite na riadenie toku ako na najtrpezlivejšiu GPS, ktorá vám dáva pokyny. Môže povedať: "Ak je na hlavnej ulici zápcha, choďte radšej po diaľnici. Ak je na diaľnici výstavba, skúste malebnú trasu." Programy používajú presne ten istý typ podmieneného logického myslenia, aby inteligentne reagovali na rôzne situácie a vždy poskytli používateľom čo najlepší zážitok.

✅ **Čo nás čaká ďalej**: Budeme mať absolútnu zábavu, keď sa budeme hlbšie ponárať do týchto konceptov, ako budeme pokračovať v tejto neuveriteľnej ceste spolu! Teraz sa len sústreďte na pocit vzrušenia z všetkých úžasných možností, ktoré vás čakajú. Konkrétne zručnosti a techniky sa prirodzene uchytia, keď budeme spolu cvičiť – sľubujem, že to bude oveľa zábavnejšie, než by ste si mohli myslieť!


## Nástroje remesla

Dobre, toto je úprimne čas, kedy som tak nadšený, že sa sotva dokážem ovládať! 🚀 Ideme hovoriť o neuveriteľných nástrojoch, ktoré vám dajú pocit, že ste práve dostali kľúče od digitálnej vesmírnej lode.

Viete, ako má šéfkuchár tie dokonale vyvážené nože, ktoré sa cítia ako predĺženie jeho rúk? Alebo ako má hudobník tú jednu gitaru, ktorá akoby spievala, keď sa jej dotkne? No, vývojári majú svoju vlastnú verziu týchto magických nástrojov, a tu je to, čo vás úplne ohromí – väčšina z nich je úplne zadarmo!

Doslova sa nemôžem dočkať, až sa s vami o tieto nástroje podelím, pretože úplne zmenili spôsob, akým vytvárame softvér. Hovoríme o asistentoch na písanie kódu poháňaných umelou inteligenciou, cloudových prostrediach, kde môžete vytvárať celé aplikácie doslova odkiaľkoľvek s Wi-Fi, a nástrojoch na ladenie tak sofistikovaných, že sú ako mať röntgenové videnie pre vaše programy.

A tu je časť, ktorá mi stále naháňa zimomriavky: toto nie sú "začiatočnícke nástroje," ktoré prerastiete. Toto sú presne tie isté profesionálne nástroje, ktoré vývojári v Google, Netflixe a v tom indie štúdiu, ktoré máte radi, používajú práve v tejto chvíli. Budete sa cítiť ako skutočný profesionál, keď ich budete používať!


### Editory kódu a IDE: Vaši noví digitálni najlepší priatelia

Poďme hovoriť o editoroch kódu – tieto sa vážne stanú vašimi novými obľúbenými miestami na trávenie času! Myslite na ne ako na vaše osobné kódovacie útočisko, kde strávite väčšinu času tvorbou a zdokonaľovaním vašich digitálnych výtvorov.

Ale tu je to, čo je na moderných editoroch absolútne magické: nie sú to len pekné textové editory. Sú ako mať najbrilantnejšieho, podporujúceho mentora kódovania, ktorý sedí vedľa vás 24/7. Chytajú vaše preklepy skôr, než si ich vôbec všimnete, navrhujú vylepšenia, ktoré vás urobia géniom, pomáhajú vám pochopiť, čo robí každý kúsok kódu, a niektoré z nich dokonca predpovedajú, čo sa chystáte napísať, a ponúkajú dokončiť vaše myšlienky!

Pamätám si, keď som prvýkrát objavil automatické dopĺňanie – doslova som mal pocit, že žijem v budúcnosti. Začnete niečo písať a váš editor povie: "Hej, mysleli ste na túto funkciu, ktorá robí presne to, čo potrebujete?" Je to ako mať čítača myšlienok ako kódovacieho kamaráta!

**Čo robí tieto editory tak úžasnými?**

Moderné editory kódu ponúkajú pôsobivú škálu funkcií navrhnutých na zvýšenie vašej produktivity:

| Funkcia | Čo robí | Prečo pomáha |
|---------|---------|--------------|
| **Zvýraznenie syntaxe** | Farebne odlišuje časti vášho kódu | Uľahčuje čítanie kódu a odhaľovanie chýb |
| **Automatické dopĺňanie** | Navrhuje kód počas písania | Urýchľuje kódovanie a znižuje počet preklepov |
| **Nástroje na ladenie** | Pomáhajú nájsť a opraviť chyby | Šetria hodiny času na riešenie problémov |
| **Rozšírenia** | Pridávajú špecializované funkcie | Prispôsobte si editor pre akúkoľvek technológiu |
| **AI asistenti** | Navrhujú kód a vysvetlenia | Urýchľujú učenie a produktivitu |

> 🎥 **Video zdroj**: Chcete vidieť tieto nástroje v akcii? Pozrite si [video Tools of the Trade](https://youtube.com/watch?v=69WJeXGBdxg) pre komplexný prehľad.

#### Odporúčané editory pre webový vývoj

**[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)** (Zdarma)
- Najpopulárnejší medzi webovými vývojármi
- Vynikajúci ekosystém rozšírení
- Vstavaný terminál a integrácia s Git
- **Nezabudnuteľné rozšírenia**:
  - [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) - Návrhy kódu poháňané AI
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) - Spolupráca v reálnom čase
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Automatické formátovanie kódu
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Zachytáva preklepy v kóde

**[JetBrains WebStorm](https://www.jetbrains.com/webstorm/)** (Platený, zdarma pre študentov)
- Pokročilé nástroje na ladenie a testovanie
- Inteligentné dopĺňanie kódu
- Vstavané riadenie verzií

**Cloudové IDE** (Rôzne ceny)
- [GitHub Codespaces](https://github.com/features/codespaces) - Plný VS Code vo vašom prehliadači
- [Replit](https://replit.com/) - Skvelé na učenie a zdieľanie kódu
- [StackBlitz](https://stackblitz.com/) - Okamžitý, full-stack webový vývoj

> 💡 **Tip na začiatok**: Začnite s Visual Studio Code – je zdarma, široko používaný v priemysle a má obrovskú komunitu, ktorá vytvára užitočné tutoriály a rozšírenia.


### Webové prehliadače: Vaše tajné vývojárske laboratórium

Dobre, pripravte sa na úplné ohromenie! Viete, ako ste používali prehliadače na prezeranie sociálnych médií a sledovanie videí? No, ukazuje sa, že celý čas skrývali toto neuveriteľné tajné vývojárske labor
| **Konzola** | Zobraziť chybové hlásenia a testovať JavaScript | Riešiť problémy a experimentovať s kódom |
| **Monitor siete** | Sledovať načítavanie zdrojov | Optimalizovať výkon a časy načítania |
| **Kontrola prístupnosti** | Testovať inkluzívny dizajn | Zabezpečiť, aby váš web fungoval pre všetkých používateľov |
| **Simulátor zariadení** | Náhľad na rôznych veľkostiach obrazovky | Testovať responzívny dizajn bez viacerých zariadení |

#### Odporúčané prehliadače na vývoj

- **[Chrome](https://developers.google.com/web/tools/chrome-devtools/)** - Štandardné vývojárske nástroje s rozsiahlymi dokumentáciami
- **[Firefox](https://developer.mozilla.org/docs/Tools)** - Skvelé nástroje pre CSS Grid a prístupnosť
- **[Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)** - Postavený na Chromium s vývojárskymi zdrojmi od Microsoftu

> ⚠️ **Dôležitý tip na testovanie**: Vždy testujte svoje webové stránky vo viacerých prehliadačoch! To, čo funguje perfektne v Chrome, môže vyzerať inak v Safari alebo Firefox. Profesionálni vývojári testujú vo všetkých hlavných prehliadačoch, aby zabezpečili konzistentný používateľský zážitok.

### Nástroje príkazového riadku: Vaša brána k vývojárskym super schopnostiam

Dobre, poďme byť úprimní ohľadom príkazového riadku, pretože chcem, aby ste to počuli od niekoho, kto tomu naozaj rozumie. Keď som ho prvýkrát videl – len tá strašidelná čierna obrazovka s blikajúcim textom – doslova som si pomyslel: "Nie, absolútne nie! Toto vyzerá ako niečo z hackerského filmu z 80. rokov a ja na to určite nemám dosť rozumu!" 😅

Ale tu je to, čo by som si prial, aby mi niekto vtedy povedal, a čo vám hovorím teraz: príkazový riadok nie je strašidelný – je to vlastne ako mať priamy rozhovor s vaším počítačom. Predstavte si to ako rozdiel medzi objednávaním jedla cez peknú aplikáciu s obrázkami a menu (čo je pekné a jednoduché) a vstupom do vašej obľúbenej miestnej reštaurácie, kde šéfkuchár presne vie, čo máte radi, a dokáže pripraviť niečo dokonalé len na základe vašich slov "prekvapte ma niečím úžasným."

Príkazový riadok je miesto, kam vývojári chodia, aby sa cítili ako absolútni čarodejníci. Napíšete pár zdanlivo magických slov (dobre, sú to len príkazy, ale pôsobia magicky!), stlačíte enter a BUM – vytvorili ste celé štruktúry projektov, nainštalovali výkonné nástroje z celého sveta alebo nasadili svoju aplikáciu na internet pre milióny ľudí. Keď raz ochutnáte túto silu, je to úprimne dosť návykové!

**Prečo sa príkazový riadok stane vaším obľúbeným nástrojom:**

Hoci grafické rozhrania sú skvelé na mnohé úlohy, príkazový riadok vyniká v automatizácii, presnosti a rýchlosti. Mnohé vývojárske nástroje fungujú primárne cez príkazové rozhrania a naučiť sa ich efektívne používať môže dramaticky zlepšiť vašu produktivitu.

```bash
# Step 1: Create and navigate to project directory
mkdir my-awesome-website
cd my-awesome-website
```
  
**Čo tento kód robí:**  
- **Vytvorí** nový adresár s názvom "my-awesome-website" pre váš projekt  
- **Presunie vás** do novovytvoreného adresára, aby ste mohli začať pracovať  

```bash
# Step 2: Initialize project with package.json
npm init -y

# Install modern development tools
npm install --save-dev vite prettier eslint
npm install --save-dev @eslint/js
```
  
**Krok za krokom, čo sa deje:**  
- **Inicializuje** nový projekt Node.js s predvolenými nastaveniami pomocou `npm init -y`  
- **Nainštaluje** Vite ako moderný nástroj na zostavovanie pre rýchly vývoj a produkčné zostavy  
- **Pridá** Prettier na automatické formátovanie kódu a ESLint na kontrolu kvality kódu  
- **Použije** príznak `--save-dev`, aby označil tieto závislosti ako určené len pre vývoj  

```bash
# Step 3: Create project structure and files
mkdir src assets
echo '<!DOCTYPE html><html><head><title>My Site</title></head><body><h1>Hello World</h1></body></html>' > index.html

# Start development server
npx vite
```
  
**V uvedenom sme:**  
- **Organizovali** náš projekt vytvorením samostatných priečinkov pre zdrojový kód a aktíva  
- **Vygenerovali** základný HTML súbor so správnou štruktúrou dokumentu  
- **Spustili** vývojový server Vite pre živé načítanie a nahrádzanie modulov za behu  

#### Základné nástroje príkazového riadku pre webový vývoj

| Nástroj | Účel | Prečo ho potrebujete |
|--------|------|-----------------------|
| **[Git](https://git-scm.com/)** | Kontrola verzií | Sledovať zmeny, spolupracovať s ostatnými, zálohovať svoju prácu |
| **[Node.js & npm](https://nodejs.org/)** | JavaScript runtime & správa balíkov | Spúšťať JavaScript mimo prehliadačov, inštalovať moderné vývojárske nástroje |
| **[Vite](https://vitejs.dev/)** | Nástroj na zostavovanie & vývojový server | Extrémne rýchly vývoj s nahrádzaním modulov za behu |
| **[ESLint](https://eslint.org/)** | Kvalita kódu | Automaticky nájsť a opraviť problémy vo vašom JavaScripte |
| **[Prettier](https://prettier.io/)** | Formátovanie kódu | Udržiavať váš kód konzistentne formátovaný a čitateľný |

#### Možnosti špecifické pre platformu

**Windows:**  
- **[Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)** - Moderný, funkciami nabitý terminál  
- **[PowerShell](https://docs.microsoft.com/powershell/?WT.mc_id=academic-77807-sagibbon)** 💻 - Výkonné skriptovacie prostredie  
- **[Command Prompt](https://docs.microsoft.com/windows-server/administration/windows-commands/?WT.mc_id=academic-77807-sagibbon)** 💻 - Tradičný príkazový riadok Windows  

**macOS:**  
- **[Terminal](https://support.apple.com/guide/terminal/)** 💻 - Vstavaná aplikácia terminálu  
- **[iTerm2](https://iterm2.com/)** - Vylepšený terminál s pokročilými funkciami  

**Linux:**  
- **[Bash](https://www.gnu.org/software/bash/)** 💻 - Štandardná Linuxová shell  
- **[KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)** - Pokročilý emulátor terminálu  

> 💻 = Predinštalované v operačnom systéme  

> 🎯 **Cesta učenia**: Začnite so základnými príkazmi ako `cd` (zmena adresára), `ls` alebo `dir` (zoznam súborov) a `mkdir` (vytvorenie priečinka). Precvičte si moderné príkazy ako `npm install`, `git status` a `code .` (otvorí aktuálny adresár vo VS Code). Ako sa budete cítiť pohodlnejšie, prirodzene si osvojíte pokročilejšie príkazy a techniky automatizácie.

### Dokumentácia: Váš vždy dostupný mentor učenia

Dobre, nechám vás na malom tajomstve, ktoré vás urobí oveľa pohodlnejšími ako začiatočníka: aj tí najskúsenejší vývojári trávia obrovskú časť svojho času čítaním dokumentácie. A to nie je preto, že by nevedeli, čo robia – je to vlastne znak múdrosti!

Predstavte si dokumentáciu ako prístup k najtrpezlivejším, najznalejším učiteľom na svete, ktorí sú k dispozícii 24/7. Máte problém o druhej ráno? Dokumentácia je tu s teplým virtuálnym objatím a presne tou odpoveďou, ktorú potrebujete. Chcete sa dozvedieť o nejakej skvelej novej funkcii, o ktorej všetci hovoria? Dokumentácia vás podporí krok za krokom. Snažíte sa pochopiť, prečo niečo funguje tak, ako funguje? Správne – dokumentácia je pripravená to vysvetliť spôsobom, ktorý vám konečne dá zmysel!

**Tu sa deje skutočná mágia:**

Profesionálni vývojári trávia významnú časť svojho času čítaním dokumentácie – nie preto, že by nevedeli, čo robia, ale preto, že svet webového vývoja sa vyvíja tak rýchlo, že zostať aktuálny vyžaduje neustále učenie. Skvelá dokumentácia vám pomôže pochopiť nielen *ako* niečo používať, ale *prečo* a *kedy* to používať.

#### Základné zdroje dokumentácie

**[Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web)**  
- Zlatý štandard pre dokumentáciu webových technológií  
- Komplexné príručky pre HTML, CSS a JavaScript  
- Obsahuje informácie o kompatibilite prehliadačov  
- Ponúka praktické príklady a interaktívne ukážky  

**[Web.dev](https://web.dev)** (od Google)  
- Najlepšie praktiky moderného webového vývoja  
- Príručky na optimalizáciu výkonu  
- Princípy prístupnosti a inkluzívneho dizajnu  
- Prípadové štúdie z reálnych projektov  

**[Microsoft Developer Documentation](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers)**  
- Zdroje na vývoj pre prehliadač Edge  
- Príručky pre progresívne webové aplikácie  
- Postrehy o vývoji naprieč platformami  

**[Frontend Masters Learning Paths](https://frontendmasters.com/learn/)**  
- Štruktúrované učebné osnovy  
- Video kurzy od odborníkov z odvetvia  
- Praktické cvičenia programovania  

> 📚 **Študijná stratégia**: Nesnažte sa memorovať dokumentáciu – namiesto toho sa naučte, ako ju efektívne prechádzať. Uložte si často používané referencie a precvičte si používanie funkcií vyhľadávania na rýchle nájdenie konkrétnych informácií.

✅ **Na zamyslenie**: Tu je niečo zaujímavé na premýšľanie – ako si myslíte, že sa nástroje na tvorbu webových stránok (vývoj) líšia od nástrojov na navrhovanie ich vzhľadu (dizajn)? Je to ako rozdiel medzi architektom, ktorý navrhuje krásny dom, a staviteľom, ktorý ho skutočne postaví. Obe úlohy sú kľúčové, ale potrebujú rôzne nástroje! Tento spôsob myslenia vám naozaj pomôže vidieť širší obraz toho, ako webové stránky ožívajú.

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Preskúmajte funkcie moderného editora kódu alebo IDE a ukážte, ako môže zlepšiť váš pracovný postup ako webového vývojára.

**Úloha:** Vyberte editor kódu alebo IDE (napríklad Visual Studio Code, WebStorm alebo cloudové IDE). Uveďte tri funkcie alebo rozšírenia, ktoré vám pomáhajú efektívnejšie písať, ladiť alebo udržiavať kód. Pre každú z nich poskytnite stručné vysvetlenie, ako prospieva vášmu pracovnému postupu.

---

## 🚀 Výzva

**Tak čo, detektív, pripravený na svoj prvý prípad?**

Teraz, keď máte tento úžasný základ, mám pre vás dobrodružstvo, ktoré vám pomôže vidieť, aký neuveriteľne rozmanitý a fascinujúci je svet programovania. A počúvajte – nejde o to, aby ste hneď začali písať kód, takže žiadny stres! Predstavte si seba ako detektíva programovacích jazykov na svojej prvej vzrušujúcej misii!

**Vaša misia, ak sa ju rozhodnete prijať:**
1. **Staňte sa prieskumníkom jazykov**: Vyberte si tri programovacie jazyky z úplne odlišných svetov – možno jeden na tvorbu webových stránok, jeden na tvorbu mobilných aplikácií a jeden na analýzu dát pre vedcov. Nájdite príklady toho istého jednoduchého úkonu napísaného v každom jazyku. Sľubujem, že budete úplne ohromení, ako odlišne môžu vyzerať, keď robia presne to isté!

2. **Odhaľte ich pôvodné príbehy**: Čo robí každý jazyk výnimočným? Tu je zaujímavý fakt – každý jeden programovací jazyk bol vytvorený, pretože niekto si pomyslel: "Viete čo? Musí existovať lepší spôsob, ako vyriešiť tento konkrétny problém." Dokážete zistiť, aké boli tie problémy? Niektoré z týchto príbehov sú naozaj fascinujúce!

3. **Spoznajte komunity**: Pozrite sa, aké priateľské a zanietené sú komunity každého jazyka. Niektoré majú milióny vývojárov, ktorí si navzájom zdieľajú vedomosti a pomáhajú si, iné sú menšie, ale neuveriteľne súdržné a podporujúce. Bude vás baviť sledovať rôzne osobnosti týchto komunít!

4. **Nasledujte svoj inštinkt**: Ktorý jazyk sa vám momentálne zdá najprístupnejší? Nestresujte sa tým, že musíte urobiť "dokonalý" výber – len počúvajte svoje inštinkty! Tu naozaj neexistuje nesprávna odpoveď a vždy môžete neskôr preskúmať ďalšie.

**Bonusová detektívna práca**: Zistite, aké veľké webové stránky alebo aplikácie sú vytvorené pomocou každého jazyka. Garantujem vám, že budete prekvapení, keď zistíte, čo poháňa Instagram, Netflix alebo tú mobilnú hru, ktorú nemôžete prestať hrať!

> 💡 **Pamätajte**: Nejde o to, aby ste sa dnes stali odborníkom na niektorý z týchto jazykov. Ide o to, aby ste sa zoznámili s prostredím, než sa rozhodnete, kde chcete začať. Dajte si čas, bavte sa a nechajte sa viesť svojou zvedavosťou!

## Oslávme, čo ste objavili!

No teda, absorbovali ste dnes toľko neuveriteľných informácií! Som naozaj nadšený, keď vidím, koľko z tejto úžasnej cesty vám zostalo v pamäti. A pamätajte – toto nie je test, kde musíte všetko zvládnuť dokonale. Je to skôr oslava všetkých skvelých vecí, ktoré ste sa naučili o tomto fascinujúcom svete, do ktorého sa chystáte ponoriť!

[Urobte si kvíz po lekcii](https://ff-quizzes.netlify.app/web/)

## Prehľad & Samoštúdium

**Dajte si čas na preskúmanie a užite si to!**

Dnes ste pokryli veľa tém, a to je niečo, na čo môžete byť hrdí! Teraz prichádza tá zábavná časť – preskúmať témy, ktoré vzbudili vašu zvedavosť. Pamätajte, toto nie je domáca úloha – je to dobrodružstvo!

**Ponorte sa hlbšie do toho, čo vás zaujíma:**

**Vyskúšajte programovacie jazyky:**  
- Navštívte oficiálne webové stránky 2-3 jazykov, ktoré vás zaujali. Každý z nich má svoju vlastnú osobnosť a príbeh!  
- Skúste niektoré online programovacie nástroje ako [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) alebo [Replit](https://replit.com/). Nebojte sa
- Pozrite si niektoré videá o programovaní pre začiatočníkov na YouTube. Existuje množstvo skvelých tvorcov, ktorí si pamätajú, aké to je začínať od nuly.  
- Zvážte účasť na miestnych stretnutiach alebo online komunitách. Verte mi, vývojári radi pomáhajú nováčikom!

> 🎯 **Počúvajte, toto si zapamätajte**: Neočakáva sa od vás, že sa stanete majstrom programovania zo dňa na deň! Momentálne sa len zoznamujete s týmto úžasným novým svetom, ktorého sa stanete súčasťou. Dajte si čas, užívajte si túto cestu a pamätajte – každý jeden vývojár, ktorého obdivujete, raz sedel presne tam, kde ste teraz vy, cítil sa nadšený a možno trochu zmätený. To je úplne normálne a znamená to, že to robíte správne!



## Úloha

[Čítanie dokumentácie](assignment.md)

> 💡 **Malé povzbudenie k vašej úlohe**: Veľmi by ma potešilo, keby ste preskúmali niektoré nástroje, ktoré sme ešte neprebrali! Vynechajte editory, prehliadače a nástroje príkazového riadku, o ktorých sme už hovorili – existuje celý neuveriteľný vesmír úžasných vývojárskych nástrojov, ktoré len čakajú na objavenie. Hľadajte také, ktoré sú aktívne udržiavané a majú živé, nápomocné komunity (tie zvyčajne majú najlepšie tutoriály a najpodporujúcejších ľudí, keď sa nevyhnutne zaseknete a budete potrebovať priateľskú pomoc).

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.