<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "888609c48329c280ca2477d2df40f2e5",
  "translation_date": "2025-08-28T04:06:57+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "cs"
}
-->
# Základy JavaScriptu: Rozhodování

![Základy JavaScriptu - Rozhodování](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.cs.png)

> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/11)

Rozhodování a řízení pořadí, ve kterém váš kód běží, činí váš kód znovupoužitelným a robustním. Tato sekce pokrývá syntaxi pro řízení toku dat v JavaScriptu a její význam při použití s datovými typy Boolean.

[![Rozhodování](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Rozhodování")

> 🎥 Klikněte na obrázek výše pro video o rozhodování.

> Tuto lekci si můžete projít na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Krátké shrnutí o Booleanech

Boolean může mít pouze dvě hodnoty: `true` nebo `false`. Booleany pomáhají rozhodovat, které řádky kódu by měly běžet, když jsou splněny určité podmínky.

Nastavte svůj boolean na hodnotu true nebo false takto:

`let myTrueBool = true`  
`let myFalseBool = false`

✅ Booleany jsou pojmenovány po anglickém matematikovi, filozofovi a logikovi Georgeovi Boolovi (1815–1864).

## Operátory porovnání a Booleany

Operátory se používají k vyhodnocení podmínek porovnáním, které vytvoří hodnotu Boolean. Následuje seznam často používaných operátorů.

| Symbol | Popis                                                                                                                                                        | Příklad            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `<`    | **Menší než**: Porovná dvě hodnoty a vrátí hodnotu `true`, pokud je hodnota na levé straně menší než na pravé                                                | `5 < 6 // true`    |
| `<=`   | **Menší nebo rovno**: Porovná dvě hodnoty a vrátí hodnotu `true`, pokud je hodnota na levé straně menší nebo rovna pravé                                     | `5 <= 6 // true`   |
| `>`    | **Větší než**: Porovná dvě hodnoty a vrátí hodnotu `true`, pokud je hodnota na levé straně větší než na pravé                                                | `5 > 6 // false`   |
| `>=`   | **Větší nebo rovno**: Porovná dvě hodnoty a vrátí hodnotu `true`, pokud je hodnota na levé straně větší nebo rovna pravé                                     | `5 >= 6 // false`  |
| `===`  | **Striktní rovnost**: Porovná dvě hodnoty a vrátí hodnotu `true`, pokud jsou hodnoty na pravé a levé straně stejné A mají stejný datový typ                  | `5 === 6 // false` |
| `!==`  | **Nerovnost**: Porovná dvě hodnoty a vrátí opačnou hodnotu Boolean, než by vrátil operátor striktní rovnosti                                                | `5 !== 6 // true`  |

✅ Ověřte si své znalosti tím, že napíšete několik porovnání do konzole vašeho prohlížeče. Překvapí vás některá vrácená data?

## If Statement

Příkaz `if` spustí kód mezi svými bloky, pokud je podmínka pravdivá.

```javascript
if (condition) {
  //Condition is true. Code in this block will run.
}
```

Logické operátory se často používají k vytvoření podmínky.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

## If..Else Statement

Příkaz `else` spustí kód mezi svými bloky, když je podmínka nepravdivá. Je volitelný s příkazem `if`.

```javascript
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

✅ Otestujte své porozumění tomuto kódu a následujícímu kódu tím, že ho spustíte v konzoli prohlížeče. Změňte hodnoty proměnných `currentMoney` a `laptopPrice`, abyste změnili vrácený `console.log()`.

## Switch Statement

Příkaz `switch` se používá k provádění různých akcí na základě různých podmínek. Použijte příkaz `switch` k výběru jednoho z mnoha bloků kódu, které mají být vykonány.

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

```javascript
// program using switch statement
let a = 2;

switch (a) {
  case 1:
    a = "one";
    break;
  case 2:
    a = "two";
    break;
  default:
    a = "not found";
    break;
}
console.log(`The value is ${a}`);
```

✅ Otestujte své porozumění tomuto kódu a následujícímu kódu tím, že ho spustíte v konzoli prohlížeče. Změňte hodnoty proměnné `a`, abyste změnili vrácený `console.log()`.

## Logické operátory a Booleany

Rozhodování může vyžadovat více než jedno porovnání a může být spojeno pomocí logických operátorů k vytvoření hodnoty Boolean.

| Symbol | Popis                                                                                     | Příklad                                                                 |
| ------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logické AND**: Porovná dvě Boolean výrazy. Vrátí true **pouze**, pokud jsou obě strany pravdivé | `(5 > 6) && (5 < 6 ) //Jedna strana je nepravdivá, druhá je pravdivá. Vrací false` |
| `\|\|` | **Logické OR**: Porovná dvě Boolean výrazy. Vrátí true, pokud je alespoň jedna strana pravdivá | `(5 > 6) \|\| (5 < 6) //Jedna strana je nepravdivá, druhá je pravdivá. Vrací true` |
| `!`    | **Logické NOT**: Vrátí opačnou hodnotu Boolean výrazu                                   | `!(5 > 6) // 5 není větší než 6, ale "!" vrátí true`                   |

## Podmínky a rozhodování s logickými operátory

Logické operátory mohou být použity k vytvoření podmínek v příkazech `if..else`.

```javascript
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - laptopPrice * 0.2; //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  //Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  //Condition is true. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

### Operátor negace

Doposud jste viděli, jak můžete použít příkaz `if...else` k vytvoření podmíněné logiky. Cokoliv, co jde do `if`, musí být vyhodnoceno jako true/false. Použitím operátoru `!` můžete _negovat_ výraz. Vypadalo by to takto:

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

### Ternární výrazy

`if...else` není jediný způsob, jak vyjádřit rozhodovací logiku. Můžete také použít něco, co se nazývá ternární operátor. Syntaxe vypadá takto:

```javascript
let variable = condition ? <return this if true> : <return this if false>
```

Níže je konkrétnější příklad:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Věnujte chvíli čtení tohoto kódu několikrát. Rozumíte tomu, jak tyto operátory fungují?

Výše uvedené říká:

- pokud je `firstNumber` větší než `secondNumber`
- pak přiřaďte `firstNumber` k `biggestNumber`
- jinak přiřaďte `secondNumber`.

Ternární výraz je jen kompaktní způsob, jak napsat následující kód:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

---

## 🚀 Výzva

Vytvořte program, který je nejprve napsán s logickými operátory, a poté ho přepište pomocí ternárního výrazu. Která syntaxe vám vyhovuje více?

---

## Kvíz po lekci

[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/12)

## Přehled & Samostudium

Přečtěte si více o mnoha operátorech dostupných uživateli [na MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Projděte si skvělý [přehled operátorů](https://joshwcomeau.com/operator-lookup/) od Joshe Comeaua!

## Úkol

[Operátory](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádné nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.