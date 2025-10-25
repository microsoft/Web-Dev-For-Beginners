<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T20:42:46+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "cs"
}
-->
# Základy JavaScriptu: Rozhodování

![Základy JavaScriptu - Rozhodování](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.cs.png)

> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

Přemýšleli jste někdy, jak aplikace dělají chytrá rozhodnutí? Například jak navigační systém vybírá nejrychlejší trasu nebo jak termostat rozhoduje, kdy zapnout topení? To je základní koncept rozhodování v programování.

Stejně jako byl analytický stroj Charlese Babbage navržen tak, aby prováděl různé sekvence operací na základě podmínek, moderní programy v JavaScriptu musí činit rozhodnutí na základě různých okolností. Tato schopnost větvení a rozhodování je tím, co proměňuje statický kód v responzivní a inteligentní aplikace.

V této lekci se naučíte, jak implementovat podmínkovou logiku ve svých programech. Prozkoumáme podmínkové příkazy, operátory porovnání a logické výrazy, které umožňují vašemu kódu vyhodnocovat situace a reagovat na ně odpovídajícím způsobem.

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/11)

Schopnost činit rozhodnutí a řídit tok programu je základním aspektem programování. Tato část pokrývá, jak řídit cestu provádění vašich JavaScriptových programů pomocí Booleovských hodnot a podmínkové logiky.

[![Rozhodování](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Rozhodování")

> 🎥 Klikněte na obrázek výše pro video o rozhodování.

> Tuto lekci si můžete projít na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Stručné opakování o Booleanech

Než se pustíme do rozhodování, pojďme si zopakovat Booleovské hodnoty z naší předchozí lekce. Pojmenované po matematikovi Georgeovi Boolovi, tyto hodnoty představují binární stavy – buď `true` nebo `false`. Žádná nejednoznačnost, žádná šedá zóna.

Tyto binární hodnoty tvoří základ veškeré výpočetní logiky. Každé rozhodnutí, které váš program učiní, se nakonec redukuje na Booleovské vyhodnocení.

Vytvoření Booleovských proměnných je jednoduché:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Tímto vytvoříte dvě proměnné s explicitními Booleovskými hodnotami.

✅ Booleovské hodnoty jsou pojmenovány po anglickém matematikovi, filozofovi a logikovi Georgeovi Boolovi (1815–1864).

## Operátory porovnání a Booleany

V praxi jen zřídka nastavujete Booleovské hodnoty ručně. Místo toho je generujete vyhodnocováním podmínek: „Je toto číslo větší než tamto?“ nebo „Jsou tyto hodnoty stejné?“

Operátory porovnání umožňují tato vyhodnocení. Porovnávají hodnoty a vracejí Booleovské výsledky na základě vztahu mezi operandy.

| Symbol | Popis                                                                                                                                                   | Příklad            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Menší než**: Porovná dvě hodnoty a vrátí Booleovskou hodnotu `true`, pokud je hodnota na levé straně menší než na pravé                               | `5 < 6 // true`    |
| `<=`   | **Menší nebo rovno**: Porovná dvě hodnoty a vrátí Booleovskou hodnotu `true`, pokud je hodnota na levé straně menší nebo rovna pravé                    | `5 <= 6 // true`   |
| `>`    | **Větší než**: Porovná dvě hodnoty a vrátí Booleovskou hodnotu `true`, pokud je hodnota na levé straně větší než na pravé                               | `5 > 6 // false`   |
| `>=`   | **Větší nebo rovno**: Porovná dvě hodnoty a vrátí Booleovskou hodnotu `true`, pokud je hodnota na levé straně větší nebo rovna pravé                    | `5 >= 6 // false`  |
| `===`  | **Přísná rovnost**: Porovná dvě hodnoty a vrátí Booleovskou hodnotu `true`, pokud jsou hodnoty na pravé a levé straně stejné A mají stejný datový typ. | `5 === 6 // false` |
| `!==`  | **Nerovnost**: Porovná dvě hodnoty a vrátí opačnou Booleovskou hodnotu, než by vrátil operátor přísné rovnosti                                          | `5 !== 6 // true`  |

✅ Ověřte si své znalosti tím, že napíšete několik porovnání do konzole vašeho prohlížeče. Překvapí vás některé vrácené hodnoty?

## Příkaz If

Příkaz `if` je jako kladení otázky ve vašem kódu. „Pokud je tato podmínka pravdivá, pak udělej tuto věc.“ Je to pravděpodobně nejdůležitější nástroj, který budete používat pro rozhodování v JavaScriptu.

Takto to funguje:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Podmínka jde do závorek a pokud je `true`, JavaScript spustí kód uvnitř složených závorek. Pokud je `false`, JavaScript tento blok jednoduše přeskočí.

Často budete používat operátory porovnání k vytvoření těchto podmínek. Podívejme se na praktický příklad:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Protože `1000 >= 800` vyhodnotí jako `true`, kód uvnitř bloku se provede a v konzoli se zobrazí „Kupujeme nový notebook!“.

## Příkaz If..Else

Ale co když chcete, aby váš program udělal něco jiného, když je podmínka nepravdivá? Právě zde přichází na řadu `else` – je to jako mít záložní plán.

Příkaz `else` vám umožňuje říct „pokud tato podmínka není pravdivá, udělej místo toho tuto jinou věc.“

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

Nyní, protože `500 >= 800` je `false`, JavaScript přeskočí první blok a místo toho spustí blok `else`. V konzoli uvidíte „Ještě si nemůžu dovolit nový notebook!“.

✅ Otestujte své pochopení tohoto kódu a následujícího kódu spuštěním v konzoli prohlížeče. Změňte hodnoty proměnných currentMoney a laptopPrice, abyste změnili vrácený výstup `console.log()`.

## Příkaz Switch

Někdy potřebujete porovnat jednu hodnotu s více možnostmi. I když byste mohli řetězit několik příkazů `if..else`, tento přístup se stává nepřehledným. Příkaz `switch` poskytuje čistší strukturu pro zpracování více diskrétních hodnot.

Koncept připomíná mechanické přepínací systémy používané v raných telefonních ústřednách – jedna vstupní hodnota určuje, kterou konkrétní cestou se provádění vydá.

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

Takto je strukturován:
- JavaScript vyhodnotí výraz jednou
- Prochází každý `case`, aby našel shodu
- Když najde shodu, spustí tento blok kódu
- `break` říká JavaScriptu, aby přestal a opustil switch
- Pokud žádný případ neodpovídá, spustí blok `default` (pokud ho máte)

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

V tomto příkladu JavaScript vidí, že `dayNumber` je `2`, najde odpovídající `case 2`, nastaví `dayName` na „Úterý“ a poté opustí switch. Výsledek? V konzoli se zobrazí „Dnes je úterý“.

✅ Otestujte své pochopení tohoto kódu a následujícího kódu spuštěním v konzoli prohlížeče. Změňte hodnoty proměnné a, abyste změnili vrácený výstup `console.log()`.

## Logické operátory a Booleany

Složitá rozhodnutí často vyžadují vyhodnocení více podmínek současně. Stejně jako Booleova algebra umožňuje matematikům kombinovat logické výrazy, programování poskytuje logické operátory pro propojení více Booleovských podmínek.

Tyto operátory umožňují sofistikovanou podmínkovou logiku kombinací jednoduchých true/false vyhodnocení.

| Symbol | Popis                                                                                     | Příklad                                                                 |
| ------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logické AND**: Porovná dvě Booleovské výrazy. Vrátí true **pouze**, pokud jsou obě strany pravdivé | `(5 > 3) && (5 < 10) // Obě strany jsou pravdivé. Vrací true` |
| `\|\|` | **Logické OR**: Porovná dvě Booleovské výrazy. Vrátí true, pokud je alespoň jedna strana pravdivá     | `(5 > 10) \|\| (5 < 10) // Jedna strana je nepravdivá, druhá pravdivá. Vrací true` |
| `!`    | **Logické NOT**: Vrátí opačnou hodnotu Booleovského výrazu                             | `!(5 > 10) // 5 není větší než 10, takže "!" to změní na true`         |

Tyto operátory vám umožňují kombinovat podmínky užitečnými způsoby:
- AND (`&&`) znamená, že obě podmínky musí být pravdivé
- OR (`||`) znamená, že alespoň jedna podmínka musí být pravdivá  
- NOT (`!`) převrací true na false (a naopak)

## Podmínky a rozhodování s logickými operátory

Podívejme se na tyto logické operátory v akci s realističtějším příkladem:

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

V tomto příkladu: vypočítáme cenu se slevou 20 % (640), poté vyhodnotíme, zda naše dostupné prostředky pokryjí buď plnou cenu, NEBO cenu se slevou. Protože 600 splňuje práh ceny se slevou 640, podmínka se vyhodnotí jako pravdivá.

### Operátor negace

Někdy je jednodušší přemýšlet o tom, kdy něco NENÍ pravdivé. Například místo otázky „Je uživatel přihlášen?“ se můžete zeptat „Není uživatel přihlášen?“ Operátor vykřičníku (`!`) vám logiku převrátí.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Operátor `!` je jako říct „opak od...“ – pokud je něco `true`, `!` to změní na `false` a naopak.

### Ternární výrazy

Pro jednoduché podmínkové přiřazení poskytuje JavaScript **ternární operátor**. Tato stručná syntaxe vám umožňuje napsat podmínkový výraz na jednom řádku, což je užitečné, když potřebujete přiřadit jednu ze dvou hodnot na základě podmínky.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Čte se to jako otázka: „Je tato podmínka pravdivá? Pokud ano, použij tuto hodnotu. Pokud ne, použij tamtu hodnotu.“

Níže je konkrétnější příklad:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Věnujte chvíli čtení tohoto kódu několikrát. Rozumíte, jak tyto operátory fungují?

Tento řádek říká: „Je `firstNumber` větší než `secondNumber`? Pokud ano, vlož `firstNumber` do `biggestNumber`. Pokud ne, vlož `secondNumber` do `biggestNumber`.“

Ternární operátor je jen kratší způsob, jak napsat tento tradiční příkaz `if..else`:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Oba přístupy produkují identické výsledky. Ternární operátor nabízí stručnost, zatímco tradiční struktura if-else může být čitelnější pro složitější podmínky.

---

## 🚀 Výzva

Vytvořte program, který je nejprve napsán s logickými operátory, a poté ho přepište pomocí ternárního výrazu. Která syntaxe vám vyhovuje více?

---

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vytvořte komplexní kalkulačku známek, která demonstruje více konceptů rozhodování z této lekce, včetně příkazů if-else, switch, logických operátorů a ternárních výrazů.

**Zadání:** Napište program v JavaScriptu, který vezme číselné skóre studenta (0-100) a určí jeho známku podle následujících kritérií:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Pod 60

Požadavky:
1. Použijte příkaz if-else k určení známky
2. Použijte logické operátory k ověření, zda student prošel (známka >= 60) A má vyznamenání (známka >= 90)
3. Použijte příkaz switch k poskytnutí specifické zpětné vazby pro každou známku
4. Použijte ternární operátor k určení, zda je student způsobilý pro další kurz (známka >= 70)
5. Zahrňte validaci vstupu, aby bylo skóre mezi 0 a 100

Otestujte svůj program s různými skóre včetně hraničních případů jako 59, 60, 89, 90 a neplatných vstupů.

Více o [režimu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) se dozvíte zde.

## Kvíz po lekci

[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/12)

## Přehled a samostudium

Přečtěte si více o mnoha operátorech dostupných uživateli [na MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Projděte si skvělý [přehled operátorů od Joshe Comeaua](https://joshwcomeau.com/operator-lookup/)!

## Zadání

[Operátory](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.