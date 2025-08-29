<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9029f96b0e034839c1799f4595e4bb66",
  "translation_date": "2025-08-29T11:14:32+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "sk"
}
-->
# Základy JavaScriptu: Polia a cykly

![Základy JavaScriptu - Polia](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.sk.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz pred prednáškou
[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/13)

Táto lekcia pokrýva základy JavaScriptu, jazyka, ktorý poskytuje interaktivitu na webe. V tejto lekcii sa naučíte o poliach a cykloch, ktoré sa používajú na manipuláciu s dátami.

[![Polia](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Polia")

[![Cykly](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Cykly")

> 🎥 Kliknite na obrázky vyššie pre videá o poliach a cykloch.

> Túto lekciu si môžete prejsť na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Polia

Práca s dátami je bežnou úlohou v akomkoľvek jazyku, a je oveľa jednoduchšia, keď sú dáta organizované v štruktúrovanom formáte, ako sú polia. V poliach sú dáta uložené v štruktúre podobnej zoznamu. Jednou z hlavných výhod polí je, že môžete uložiť rôzne typy dát do jedného poľa.

✅ Polia sú všade okolo nás! Dokážete si predstaviť reálny príklad poľa, ako napríklad pole solárnych panelov?

Syntax pre pole je pár hranatých zátvoriek.

```javascript
let myArray = [];
```

Toto je prázdne pole, ale polia môžu byť deklarované už naplnené dátami. Viaceré hodnoty v poli sú oddelené čiarkou.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Hodnotám v poli je priradená jedinečná hodnota nazývaná **index**, celé číslo, ktoré je priradené na základe jeho vzdialenosti od začiatku poľa. V príklade vyššie má reťazcová hodnota "Chocolate" index 0 a index "Rocky Road" je 4. Použite index s hranatými zátvorkami na získanie, zmenu alebo vloženie hodnôt poľa.

✅ Prekvapuje vás, že polia začínajú na indexe nula? V niektorých programovacích jazykoch indexy začínajú na 1. Je za tým zaujímavá história, ktorú si môžete [prečítať na Wikipédii](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Index môžete využiť na zmenu hodnoty, napríklad takto:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

A môžete vložiť novú hodnotu na daný index takto:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ Bežnejší spôsob pridávania hodnôt do poľa je pomocou operátorov poľa, ako je array.push()

Ak chcete zistiť, koľko položiek je v poli, použite vlastnosť `length`.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Vyskúšajte si to sami! Použite konzolu vášho prehliadača na vytvorenie a manipuláciu s vlastným poľom.

## Cykly

Cykly nám umožňujú vykonávať opakujúce sa alebo **iteratívne** úlohy, a môžu ušetriť veľa času a kódu. Každá iterácia môže byť odlišná vo svojich premenných, hodnotách a podmienkach. V JavaScripte existujú rôzne typy cyklov, ktoré majú malé rozdiely, ale v podstate robia to isté: prechádzajú dáta.

### For cyklus

Cyklus `for` vyžaduje 3 časti na iteráciu:
- `counter` Premenná, ktorá je zvyčajne inicializovaná číslom, ktoré počíta počet iterácií
- `condition` Výraz, ktorý používa porovnávacie operátory na zastavenie cyklu, keď je `false`
- `iteration-expression` Spúšťa sa na konci každej iterácie, zvyčajne sa používa na zmenu hodnoty počítadla
  
```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Spustite tento kód v konzole prehliadača. Čo sa stane, keď urobíte malé zmeny v počítadle, podmienke alebo výraze iterácie? Dokážete ho spustiť opačne, vytvoriť odpočítavanie?

### While cyklus

Na rozdiel od syntaxe cyklu `for`, cykly `while` vyžadujú iba podmienku, ktorá zastaví cyklus, keď sa podmienka stane `false`. Podmienky v cykloch zvyčajne závisia od iných hodnôt, ako sú počítadlá, a musia byť spravované počas cyklu. Počiatočné hodnoty počítadiel musia byť vytvorené mimo cyklu a akékoľvek výrazy na splnenie podmienky, vrátane zmeny počítadla, musia byť udržiavané vo vnútri cyklu.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Prečo by ste si vybrali for cyklus namiesto while cyklu? 17 tisíc divákov malo rovnakú otázku na StackOverflow, a niektoré názory [môžu byť pre vás zaujímavé](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Cykly a polia

Polia sa často používajú s cyklami, pretože väčšina podmienok vyžaduje dĺžku poľa na zastavenie cyklu, a index môže byť tiež hodnotou počítadla.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ Experimentujte s prechádzaním poľa, ktoré si sami vytvoríte, v konzole vášho prehliadača. 

---

## 🚀 Výzva

Existujú aj iné spôsoby prechádzania polí než for a while cykly. Existujú [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) a [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Prepíšte svoj cyklus poľa pomocou jednej z týchto techník.

## Kvíz po prednáške
[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/14)

## Prehľad a samostatné štúdium

Polia v JavaScripte majú mnoho metód, ktoré sú mimoriadne užitočné na manipuláciu s dátami. [Prečítajte si o týchto metódach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) a vyskúšajte niektoré z nich (ako push, pop, slice a splice) na poli, ktoré si sami vytvoríte.

## Zadanie

[Prejdite pole pomocou cyklu](assignment.md)

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby na automatický preklad [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, upozorňujeme, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za záväzný zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nezodpovedáme za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.