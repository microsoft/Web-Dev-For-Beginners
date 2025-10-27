<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T21:18:24+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "sk"
}
-->
# Základy JavaScriptu: Rozhodovanie

![Základy JavaScriptu - Rozhodovanie](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.sk.png)

> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

Premýšľali ste niekedy nad tým, ako aplikácie robia inteligentné rozhodnutia? Napríklad ako navigačný systém vyberá najrýchlejšiu trasu alebo ako termostat rozhoduje, kedy zapnúť kúrenie? Toto je základný koncept rozhodovania v programovaní.

Rovnako ako analytický stroj Charlesa Babbagea bol navrhnutý tak, aby vykonával rôzne sekvencie operácií na základe podmienok, moderné programy v JavaScripte musia robiť rozhodnutia na základe rôznych okolností. Táto schopnosť vetvenia a rozhodovania je to, čo premieňa statický kód na responzívne, inteligentné aplikácie.

V tejto lekcii sa naučíte, ako implementovať podmienenú logiku vo svojich programoch. Preskúmame podmienené príkazy, operátory porovnania a logické výrazy, ktoré umožňujú vášmu kódu vyhodnotiť situácie a primerane na ne reagovať.

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/11)

Schopnosť robiť rozhodnutia a kontrolovať tok programu je základným aspektom programovania. Táto sekcia sa zaoberá tým, ako kontrolovať cestu vykonávania vašich JavaScriptových programov pomocou Boolean hodnôt a podmienenej logiky.

[![Rozhodovanie](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Rozhodovanie")

> 🎥 Kliknite na obrázok vyššie pre video o rozhodovaní.

> Túto lekciu si môžete prejsť na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Krátke opakovanie o Booleanoch

Predtým, než sa pustíme do rozhodovania, si zopakujme hodnoty Boolean z našej predchádzajúcej lekcie. Pomenované po matematikovi Georgeovi Booleovi, tieto hodnoty predstavujú binárne stavy – buď `true` alebo `false`. Nie je tu žiadna nejasnosť, žiadna stredná cesta.

Tieto binárne hodnoty tvoria základ všetkej výpočtovej logiky. Každé rozhodnutie, ktoré váš program urobí, sa nakoniec redukuje na Boolean hodnotenie.

Vytvorenie Boolean premenných je jednoduché:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Týmto vytvoríte dve premenné s explicitnými Boolean hodnotami.

✅ Booleany sú pomenované po anglickom matematikovi, filozofovi a logikovi Georgeovi Booleovi (1815–1864).

## Operátory porovnania a Booleany

V praxi len zriedka nastavujete Boolean hodnoty manuálne. Namiesto toho ich generujete vyhodnocovaním podmienok: "Je toto číslo väčšie ako tamto?" alebo "Sú tieto hodnoty rovnaké?"

Operátory porovnania umožňujú tieto vyhodnotenia. Porovnávajú hodnoty a vracajú Boolean výsledky na základe vzťahu medzi operandmi.

| Symbol | Popis                                                                                                                                                   | Príklad            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Menej ako**: Porovnáva dve hodnoty a vracia `true`, ak je hodnota na ľavej strane menšia ako na pravej                                                | `5 < 6 // true`    |
| `<=`   | **Menej alebo rovné**: Porovnáva dve hodnoty a vracia `true`, ak je hodnota na ľavej strane menšia alebo rovná ako na pravej                            | `5 <= 6 // true`   |
| `>`    | **Väčšie ako**: Porovnáva dve hodnoty a vracia `true`, ak je hodnota na ľavej strane väčšia ako na pravej                                               | `5 > 6 // false`   |
| `>=`   | **Väčšie alebo rovné**: Porovnáva dve hodnoty a vracia `true`, ak je hodnota na ľavej strane väčšia alebo rovná ako na pravej                           | `5 >= 6 // false`  |
| `===`  | **Striktná rovnosť**: Porovnáva dve hodnoty a vracia `true`, ak sú hodnoty na pravej a ľavej strane rovnaké A majú rovnaký dátový typ                   | `5 === 6 // false` |
| `!==`  | **Nerovnosť**: Porovnáva dve hodnoty a vracia opačnú Boolean hodnotu, než by vrátil operátor striktná rovnosť                                           | `5 !== 6 // true`  |

✅ Otestujte svoje znalosti napísaním niekoľkých porovnaní v konzole vášho prehliadača. Prekvapili vás niektoré vrátené údaje?

## Príkaz If

Príkaz `if` je ako kladenie otázky vo vašom kóde. "Ak je táto podmienka pravdivá, urob túto vec." Je to pravdepodobne najdôležitejší nástroj, ktorý budete používať na rozhodovanie v JavaScripte.

Takto to funguje:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Podmienka ide do zátvoriek a ak je `true`, JavaScript vykoná kód vo vnútri zložených zátvoriek. Ak je `false`, JavaScript jednoducho preskočí celý blok.

Často budete používať operátory porovnania na vytvorenie týchto podmienok. Pozrime sa na praktický príklad:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Keďže `1000 >= 800` sa vyhodnotí ako `true`, kód vo vnútri bloku sa vykoná a v konzole sa zobrazí "Kupujem nový laptop!".

## Príkaz If..Else

Ale čo ak chcete, aby váš program urobil niečo iné, keď je podmienka nepravdivá? Tu prichádza na rad `else` – je to ako mať záložný plán.

Príkaz `else` vám umožňuje povedať "ak táto podmienka nie je pravdivá, urob namiesto toho túto inú vec."

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

Teraz, keďže `500 >= 800` je `false`, JavaScript preskočí prvý blok a namiesto toho vykoná blok `else`. V konzole uvidíte "Ešte si nemôžem dovoliť nový laptop!".

✅ Otestujte svoje pochopenie tohto kódu a nasledujúceho kódu jeho spustením v konzole prehliadača. Zmeňte hodnoty premenných currentMoney a laptopPrice, aby ste zmenili vrátený `console.log()`.

## Príkaz Switch

Niekedy potrebujete porovnať jednu hodnotu s viacerými možnosťami. Aj keď by ste mohli zreťaziť niekoľko príkazov `if..else`, tento prístup sa stáva neprehľadným. Príkaz `switch` poskytuje čistejšiu štruktúru na spracovanie viacerých diskrétnych hodnôt.

Koncept pripomína mechanické prepínacie systémy používané v skorých telefónnych ústredniach – jedna vstupná hodnota určuje, ktorou konkrétnou cestou sa vykonávanie bude uberať.

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

Takto je štruktúrovaný:
- JavaScript vyhodnotí výraz raz
- Prejde každým `case`, aby našiel zhodu
- Keď nájde zhodu, vykoná daný blok kódu
- Príkaz `break` povie JavaScriptu, aby zastavil a opustil switch
- Ak žiadny case nesedí, vykoná sa blok `default` (ak ho máte)

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

V tomto príklade JavaScript vidí, že `dayNumber` je `2`, nájde zodpovedajúci `case 2`, nastaví `dayName` na "Utorok" a potom opustí switch. Výsledok? V konzole sa zobrazí "Dnes je utorok".

✅ Otestujte svoje pochopenie tohto kódu a nasledujúceho kódu jeho spustením v konzole prehliadača. Zmeňte hodnoty premennej a, aby ste zmenili vrátený `console.log()`.

## Logické operátory a Booleany

Komplexné rozhodnutia často vyžadujú vyhodnotenie viacerých podmienok súčasne. Rovnako ako Boolean algebra umožňuje matematikom kombinovať logické výrazy, programovanie poskytuje logické operátory na prepojenie viacerých Boolean podmienok.

Tieto operátory umožňujú sofistikovanú podmienenú logiku kombinovaním jednoduchých hodnotení true/false.

| Symbol | Popis                                                                                     | Príklad                                                                 |
| ------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logické AND**: Porovnáva dva Boolean výrazy. Vracia true **iba** ak sú obe strany true   | `(5 > 3) && (5 < 10) // Obe strany sú pravdivé. Vracia true`            |
| `\|\|` | **Logické OR**: Porovnáva dva Boolean výrazy. Vracia true, ak je aspoň jedna strana true   | `(5 > 10) \|\| (5 < 10) // Jedna strana je nepravdivá, druhá je pravdivá. Vracia true` |
| `!`    | **Logické NOT**: Vracia opačnú hodnotu Boolean výrazu                                     | `!(5 > 10) // 5 nie je väčšie ako 10, takže "!" to zmení na true`       |

Tieto operátory vám umožňujú kombinovať podmienky užitočnými spôsobmi:
- AND (`&&`) znamená, že obe podmienky musia byť pravdivé
- OR (`||`) znamená, že aspoň jedna podmienka musí byť pravdivá  
- NOT (`!`) prevráti true na false (a naopak)

## Podmienky a rozhodnutia s logickými operátormi

Pozrime sa na tieto logické operátory v akcii s realistickejším príkladom:

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

V tomto príklade: vypočítame cenu so zľavou 20 % (640), potom vyhodnotíme, či naše dostupné prostriedky pokrývajú buď plnú cenu ALEBO cenu so zľavou. Keďže 600 spĺňa prahovú hodnotu zľavovej ceny 640, podmienka sa vyhodnotí ako true.

### Operátor negácie

Niekedy je jednoduchšie premýšľať o tom, kedy niečo NIE je pravdivé. Napríklad namiesto otázky "Je používateľ prihlásený?" môžete chcieť položiť otázku "Nie je používateľ prihlásený?" Operátor výkričník (`!`) prevráti logiku za vás.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Operátor `!` je ako povedať "opakom je..." – ak je niečo `true`, `!` to zmení na `false`, a naopak.

### Ternárne výrazy

Pre jednoduché podmienené priradenia JavaScript poskytuje **ternárny operátor**. Tento stručný zápis vám umožňuje napísať podmienený výraz na jednom riadku, čo je užitočné, keď potrebujete priradiť jednu z dvoch hodnôt na základe podmienky.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Číta sa to ako otázka: "Je táto podmienka pravdivá? Ak áno, použite túto hodnotu. Ak nie, použite tamtú hodnotu."

Nižšie je konkrétnejší príklad:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Venujte chvíľu čítaniu tohto kódu niekoľkokrát. Rozumiete tomu, ako tieto operátory fungujú?

Tento riadok hovorí: "Je `firstNumber` väčšie ako `secondNumber`? Ak áno, vložte `firstNumber` do `biggestNumber`. Ak nie, vložte `secondNumber` do `biggestNumber`."

Ternárny operátor je len kratší spôsob, ako napísať tradičný príkaz `if..else`:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Oba prístupy prinášajú identické výsledky. Ternárny operátor ponúka stručnosť, zatiaľ čo tradičná štruktúra if-else môže byť čitateľnejšia pri zložitejších podmienkach.

---



## 🚀 Výzva

Vytvorte program, ktorý je najskôr napísaný s logickými operátormi, a potom ho prepíšte pomocou ternárneho výrazu. Ktorá syntax vám vyhovuje viac?

---

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vytvorte komplexný kalkulátor známok, ktorý demonštruje viacero konceptov rozhodovania z tejto lekcie, vrátane príkazov if-else, switch, logických operátorov a ternárnych výrazov.

**Zadanie:** Napíšte program v JavaScripte, ktorý zoberie číselné skóre študenta (0-100) a určí jeho písmenkovú známku podľa nasledujúcich kritérií:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Menej ako 60

Požiadavky:
1. Použite príkaz if-else na určenie písmenkovej známky
2. Použite logické operátory na kontrolu, či študent prešiel (známka >= 60) A má vyznamenanie (známka >= 90)
3. Použite príkaz switch na poskytnutie konkrétnej spätnej väzby pre každú písmenkovú známku
4. Použite ternárny operátor na určenie, či je študent oprávnený na ďalší kurz (známka >= 70)
5. Zahrňte validáciu vstupu, aby ste zabezpečili, že skóre je medzi 0 a 100

Otestujte svoj program s rôznymi skóre vrátane hraničných prípadov, ako sú 59, 60, 89, 90 a neplatné vstupy.

Viac o [režime agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) sa dozviete tu.


## Kvíz po prednáške

[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/12)

## Opakovanie a samostatné štúdium

Prečítajte si viac o mnohých operátoroch dostupných používateľovi [na MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Prejdite si skvelý [prehľad operátorov od Josha Comeaua](https://joshwcomeau.com/operator-lookup/)!

## Zadanie

[Operátory](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.