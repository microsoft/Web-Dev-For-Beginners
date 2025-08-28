<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-28T04:08:54+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "cs"
}
-->
# Základy JavaScriptu: Datové typy

![Základy JavaScriptu - Datové typy](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.cs.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz před lekcí
[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/7)

Tato lekce pokrývá základy JavaScriptu, jazyka, který zajišťuje interaktivitu na webu.

> Tuto lekci si můžete projít na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Proměnné](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Proměnné v JavaScriptu")

[![Datové typy v JavaScriptu](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Datové typy v JavaScriptu")

> 🎥 Klikněte na obrázky výše pro videa o proměnných a datových typech

Začněme s proměnnými a datovými typy, které je naplňují!

## Proměnné

Proměnné uchovávají hodnoty, které lze používat a měnit v průběhu vašeho kódu.

Vytvoření a **deklarace** proměnné má následující syntaxi **[klíčové slovo] [název]**. Skládá se ze dvou částí:

- **Klíčové slovo**. Klíčová slova mohou být `let` nebo `var`.  

✅ Klíčové slovo `let` bylo zavedeno v ES6 a poskytuje proměnné tzv. _blokový rozsah_. Doporučuje se používat `let` místo `var`. Blokové rozsahy probereme podrobněji v dalších částech.
- **Název proměnné**, což je název, který si sami zvolíte.

### Úkol - práce s proměnnými

1. **Deklarujte proměnnou**. Deklarujme proměnnou pomocí klíčového slova `let`:

    ```javascript
    let myVariable;
    ```

   `myVariable` byla nyní deklarována pomocí klíčového slova `let`. Momentálně nemá žádnou hodnotu.

1. **Přiřaďte hodnotu**. Uložte hodnotu do proměnné pomocí operátoru `=`, následovaného očekávanou hodnotou.

    ```javascript
    myVariable = 123;
    ```

   > Poznámka: použití `=` v této lekci znamená, že používáme "přiřazovací operátor", který slouží k nastavení hodnoty proměnné. Neoznačuje rovnost.

   `myVariable` byla nyní *inicializována* s hodnotou 123.

1. **Refaktorujte**. Nahraďte svůj kód následujícím příkazem.

    ```javascript
    let myVariable = 123;
    ```

    Výše uvedené se nazývá _explicitní inicializace_, kdy je proměnná deklarována a zároveň jí je přiřazena hodnota.

1. **Změňte hodnotu proměnné**. Změňte hodnotu proměnné následujícím způsobem:

   ```javascript
   myVariable = 321;
   ```

   Jakmile je proměnná deklarována, můžete její hodnotu kdykoli změnit ve svém kódu pomocí operátoru `=` a nové hodnoty.

   ✅ Vyzkoušejte to! Můžete psát JavaScript přímo ve svém prohlížeči. Otevřete okno prohlížeče a přejděte do Nástrojů pro vývojáře. V konzoli najdete výzvu; napište `let myVariable = 123`, stiskněte Enter, poté napište `myVariable`. Co se stane? Poznámka: o těchto konceptech se dozvíte více v následujících lekcích.

## Konstanty

Deklarace a inicializace konstanty se řídí stejnými principy jako u proměnné, s výjimkou klíčového slova `const`. Konstanty se obvykle deklarují velkými písmeny.

```javascript
const MY_VARIABLE = 123;
```

Konstanty jsou podobné proměnným, s dvěma výjimkami:

- **Musí mít hodnotu**. Konstanty musí být inicializovány, jinak při spuštění kódu dojde k chybě.
- **Referenci nelze změnit**. Referenci konstanty nelze po inicializaci změnit, jinak při spuštění kódu dojde k chybě. Podívejme se na dva příklady:
   - **Jednoduchá hodnota**. Následující NENÍ povoleno:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Reference objektu je chráněna**. Následující NENÍ povoleno.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Hodnota objektu není chráněna**. Následující JE povoleno:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Výše měníte hodnotu objektu, ale ne samotnou referenci, což je povoleno.

   > Poznámka: `const` znamená, že reference je chráněna před přepisem. Hodnota však není _neměnná_ a může se změnit, zejména pokud jde o složitou strukturu, jako je objekt.

## Datové typy

Proměnné mohou uchovávat mnoho různých typů hodnot, jako jsou čísla a text. Tyto různé typy hodnot jsou známé jako **datový typ**. Datové typy jsou důležitou součástí vývoje softwaru, protože pomáhají vývojářům rozhodovat, jak by měl být kód napsán a jak by měl software fungovat. Navíc některé datové typy mají jedinečné vlastnosti, které pomáhají transformovat nebo extrahovat další informace z hodnoty.

✅ Datové typy jsou také označovány jako primitivní datové typy JavaScriptu, protože jsou nejnižší úrovní datových typů poskytovaných jazykem. Existuje 7 primitivních datových typů: string, number, bigint, boolean, undefined, null a symbol. Udělejte si chvíli na představu, co každý z těchto primitivů může představovat. Co je `zebra`? A co `0`? `true`?

### Čísla

V předchozí části byla hodnota `myVariable` datového typu číslo.

`let myVariable = 123;`

Proměnné mohou uchovávat všechny typy čísel, včetně desetinných nebo záporných čísel. Čísla lze také používat s aritmetickými operátory, které jsou popsány v [další části](../../../../2-js-basics/1-data-types).

### Aritmetické operátory

Existuje několik typů operátorů, které lze použít při provádění aritmetických funkcí, a některé z nich jsou uvedeny zde:

| Symbol | Popis                                                                   | Příklad                          |
| ------ | ----------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Sčítání**: Vypočítá součet dvou čísel                                 | `1 + 2 //očekávaný výsledek je 3`   |
| `-`    | **Odčítání**: Vypočítá rozdíl dvou čísel                                | `1 - 2 //očekávaný výsledek je -1`  |
| `*`    | **Násobení**: Vypočítá součin dvou čísel                                | `1 * 2 //očekávaný výsledek je 2`   |
| `/`    | **Dělení**: Vypočítá podíl dvou čísel                                   | `1 / 2 //očekávaný výsledek je 0.5` |
| `%`    | **Zbytek**: Vypočítá zbytek z dělení dvou čísel                         | `1 % 2 //očekávaný výsledek je 1`   |

✅ Vyzkoušejte to! Vyzkoušejte aritmetickou operaci v konzoli svého prohlížeče. Překvapily vás výsledky?

### Řetězce

Řetězce jsou sady znaků, které se nacházejí mezi jednoduchými nebo dvojitými uvozovkami.

- `'Toto je řetězec'`
- `"Toto je také řetězec"`
- `let myString = 'Toto je hodnota řetězce uložená v proměnné';`

Nezapomeňte použít uvozovky při psaní řetězce, jinak JavaScript předpokládá, že jde o název proměnné.

### Formátování řetězců

Řetězce jsou textové a čas od času budou vyžadovat formátování.

Pro **spojení** dvou nebo více řetězců, nebo jejich spojení dohromady, použijte operátor `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Proč v JavaScriptu `1 + 1 = 2`, ale `'1' + '1' = 11?` Zamyslete se nad tím. A co `'1' + 1`?

**Šablonové literály** jsou další způsob formátování řetězců, kromě uvozovek se používá zpětný apostrof. Cokoli, co není prostý text, musí být umístěno do zástupných symbolů `${ }`. To zahrnuje jakékoli proměnné, které mohou být řetězce.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Svých formátovacích cílů můžete dosáhnout oběma způsoby, ale šablonové literály budou respektovat jakékoli mezery a zalomení řádků.

✅ Kdy byste použili šablonový literál místo prostého řetězce?

### Booleovské hodnoty

Booleovské hodnoty mohou mít pouze dvě hodnoty: `true` nebo `false`. Booleovské hodnoty mohou pomoci rozhodnout, které řádky kódu by se měly spustit, když jsou splněny určité podmínky. V mnoha případech [operátory](../../../../2-js-basics/1-data-types) pomáhají nastavit hodnotu booleovské hodnoty a často si všimnete a napíšete proměnné, které jsou inicializovány nebo jejich hodnoty aktualizovány pomocí operátoru.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Proměnná může být považována za 'pravdivou', pokud se vyhodnotí jako booleovská hodnota `true`. Zajímavé je, že v JavaScriptu jsou [všechny hodnoty pravdivé, pokud nejsou definovány jako nepravdivé](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Výzva

JavaScript je známý svými překvapivými způsoby, jak občas zacházet s datovými typy. Proveďte trochu výzkumu o těchto 'záludnostech'. Například: citlivost na velikost písmen může být zrádná! Vyzkoušejte toto ve své konzoli: `let age = 1; let Age = 2; age == Age` (vyhodnotí `false` -- proč?). Jaké další záludnosti můžete najít?

## Kvíz po lekci
[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/8)

## Přehled & Samostudium

Podívejte se na [tento seznam cvičení v JavaScriptu](https://css-tricks.com/snippets/javascript/) a zkuste jedno. Co jste se naučili?

## Zadání

[Procvičování datových typů](assignment.md)

---

**Upozornění**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o co největší přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro kritické informace se doporučuje profesionální lidský překlad. Nezodpovídáme za jakékoli nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.