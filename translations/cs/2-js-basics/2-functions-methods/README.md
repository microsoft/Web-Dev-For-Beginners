<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-24T20:41:34+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "cs"
}
-->
# Základy JavaScriptu: Metody a funkce

![Základy JavaScriptu - Funkce](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.cs.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz před lekcí
[Kvíz před lekcí](https://ff-quizzes.netlify.app)

Opakované psaní stejného kódu je jedním z nejčastějších zdrojů frustrace při programování. Funkce tento problém řeší tím, že umožňují balit kód do znovupoužitelných bloků. Představte si funkce jako standardizované součástky, které učinily montážní linku Henryho Forda revoluční – jakmile vytvoříte spolehlivou komponentu, můžete ji použít kdekoli, aniž byste ji museli znovu vytvářet od začátku.

Funkce umožňují seskupit části kódu, které můžete znovu použít v celém programu. Místo kopírování a vkládání stejné logiky všude můžete funkci vytvořit jednou a volat ji, kdykoli je potřeba. Tento přístup udržuje váš kód organizovaný a usnadňuje jeho aktualizace.

V této lekci se naučíte, jak vytvořit vlastní funkce, předávat jim informace a získávat užitečné výsledky zpět. Objevíte rozdíl mezi funkcemi a metodami, naučíte se moderní syntaxi a uvidíte, jak mohou funkce spolupracovat s jinými funkcemi. Tyto koncepty budeme budovat krok za krokem.

[![Metody a funkce](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metody a funkce")

> 🎥 Klikněte na obrázek výše pro video o metodách a funkcích.

> Tuto lekci si můžete projít na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funkce

Funkce je samostatný blok kódu, který provádí konkrétní úkol. Obsahuje logiku, kterou můžete spustit, kdykoli je to potřeba.

Místo psaní stejného kódu několikrát v celém programu ho můžete zabalit do funkce a volat ji, kdykoli ji potřebujete. Tento přístup udržuje váš kód čistý a usnadňuje jeho aktualizaci. Představte si, jak náročné by bylo provést změny v logice, která je rozptýlená na 20 různých místech vašeho kódu.

Je důležité pojmenovávat své funkce popisně. Dobře pojmenovaná funkce jasně sděluje svůj účel – když vidíte `cancelTimer()`, okamžitě pochopíte, co dělá, stejně jako jasně označené tlačítko vám řekne, co se stane, když na něj kliknete.

## Vytvoření a volání funkce

Podívejme se, jak vytvořit funkci. Syntaxe následuje konzistentní vzor:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Rozložme si to:
- Klíčové slovo `function` říká JavaScriptu "Hej, vytvářím funkci!"
- `nameOfFunction` je místo, kde dáte své funkci popisné jméno
- Závorky `()` jsou místo, kam můžete přidat parametry (k tomu se brzy dostaneme)
- Složené závorky `{}` obsahují skutečný kód, který se spustí, když funkci zavoláte

Vytvořme jednoduchou funkci pro pozdrav, abychom to viděli v praxi:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Tato funkce vypíše "Hello, world!" do konzole. Jakmile ji definujete, můžete ji použít tolikrát, kolikrát je potřeba.

Pro spuštění (nebo "volání") vaší funkce napište její jméno následované závorkami. JavaScript vám umožňuje definovat funkci před nebo po jejím volání – JavaScriptový engine se postará o pořadí provádění.

```javascript
// calling our function
displayGreeting();
```

Když spustíte tento řádek, provede se veškerý kód uvnitř vaší funkce `displayGreeting`, který zobrazí "Hello, world!" v konzoli vašeho prohlížeče. Tuto funkci můžete volat opakovaně.

> **Poznámka:** V průběhu těchto lekcí jste používali **metody**. `console.log()` je metoda – v podstatě funkce, která patří k objektu `console`. Klíčový rozdíl je v tom, že metody jsou připojeny k objektům, zatímco funkce stojí samostatně. Mnoho vývojářů tyto termíny používá zaměnitelně v neformální konverzaci.

### Nejlepší postupy při psaní funkcí

Zde je několik tipů, které vám pomohou psát skvělé funkce:

- Dávejte svým funkcím jasná, popisná jména – vaše budoucí já vám poděkuje!
- Používejte **camelCasing** pro víceslovná jména (například `calculateTotal` místo `calculate_total`)
- Každou funkci zaměřte na to, aby dobře vykonávala jednu věc

## Předávání informací funkci

Naše funkce `displayGreeting` je omezená – může zobrazit pouze "Hello, world!" pro všechny. Parametry nám umožňují učinit funkce flexibilnějšími a užitečnějšími.

**Parametry** fungují jako zástupné symboly, kam můžete při každém použití funkce vložit různé hodnoty. Tímto způsobem může stejná funkce pracovat s různými informacemi při každém volání.

Parametry uvádíte do závorek při definování funkce, přičemž více parametrů oddělujete čárkami:

```javascript
function name(param, param2, param3) {

}
```

Každý parametr funguje jako zástupný symbol – když někdo zavolá vaši funkci, poskytne skutečné hodnoty, které se vloží na tato místa.

Aktualizujme naši funkci pro pozdrav tak, aby přijímala jméno osoby:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Všimněte si, jak používáme zpětné uvozovky (`` ` ``) a `${}` k vložení jména přímo do naší zprávy – tomu se říká šablonová literálka a je to opravdu užitečný způsob, jak sestavit řetězce s proměnnými.

Nyní, když zavoláme naši funkci, můžeme předat jakékoli jméno:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript vezme řetězec `'Christopher'`, přiřadí ho k parametru `name` a vytvoří personalizovanou zprávu "Hello, Christopher!"

## Výchozí hodnoty

Co když chceme, aby některé parametry byly volitelné? Zde přicházejí na řadu výchozí hodnoty!

Řekněme, že chceme, aby si lidé mohli přizpůsobit slovo pozdravu, ale pokud žádné nezadají, použijeme jako záložní možnost "Hello". Výchozí hodnoty můžete nastavit pomocí znaménka rovná se, stejně jako při nastavování proměnné:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Zde je `name` stále povinné, ale `salutation` má záložní hodnotu `'Hello'`, pokud nikdo neposkytne jiný pozdrav.

Nyní můžeme tuto funkci volat dvěma různými způsoby:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Při prvním volání JavaScript použije výchozí "Hello", protože jsme nespecifikovali pozdrav. Při druhém volání použije náš vlastní "Hi". Tato flexibilita činí funkce přizpůsobivými různým scénářům.

## Návratové hodnoty

Naše funkce dosud pouze vypisovaly zprávy do konzole, ale co když chcete, aby funkce něco vypočítala a vrátila vám výsledek?

Zde přicházejí na řadu **návratové hodnoty**. Místo pouhého zobrazení něčeho může funkce vrátit hodnotu, kterou můžete uložit do proměnné nebo použít v jiných částech svého kódu.

K odeslání hodnoty zpět použijete klíčové slovo `return` následované tím, co chcete vrátit:

```javascript
return myVariable;
```

Zde je důležité: když funkce narazí na příkaz `return`, okamžitě přestane běžet a vrátí tuto hodnotu tomu, kdo ji zavolal.

Upravme naši funkci pro pozdrav tak, aby místo vypisování zprávy ji vracela:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Nyní místo vypisování pozdravu tato funkce vytvoří zprávu a předá ji zpět.

K použití vrácené hodnoty ji můžeme uložit do proměnné stejně jako jakoukoli jinou hodnotu:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Nyní `greetingMessage` obsahuje "Hello, Christopher" a můžeme ji použít kdekoli v našem kódu – k zobrazení na webové stránce, zahrnutí do e-mailu nebo předání jiné funkci.

## Funkce jako parametry pro funkce

Funkce mohou být předány jako parametry jiným funkcím. I když se tento koncept může zpočátku zdát složitý, je to mocná funkce, která umožňuje flexibilní programovací vzory.

Tento vzor je velmi běžný, když chcete říct "když se něco stane, udělej tuto jinou věc." Například "když časovač skončí, spusť tento kód" nebo "když uživatel klikne na tlačítko, zavolej tuto funkci."

Podívejme se na `setTimeout`, což je vestavěná funkce, která čeká určitou dobu a poté spustí nějaký kód. Musíme jí říct, jaký kód má spustit – ideální případ pro předání funkce!

Vyzkoušejte tento kód – po 3 sekundách uvidíte zprávu:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Všimněte si, jak předáváme `displayDone` (bez závorek) do `setTimeout`. Funkci nevoláme sami – předáváme ji `setTimeout` a říkáme "zavolej ji za 3 sekundy."

### Anonymní funkce

Někdy potřebujete funkci jen pro jednu věc a nechcete jí dávat jméno. Přemýšlejte o tom – pokud používáte funkci pouze jednou, proč zbytečně přidávat další jméno do svého kódu?

JavaScript vám umožňuje vytvářet **anonymní funkce** – funkce bez jmen, které můžete definovat přímo tam, kde je potřebujete.

Zde je, jak můžeme přepsat náš příklad s časovačem pomocí anonymní funkce:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Toto dosahuje stejného výsledku, ale funkce je definována přímo v rámci volání `setTimeout`, což eliminuje potřebu samostatné deklarace funkce.

### Funkce s tučnou šipkou

Moderní JavaScript má ještě kratší způsob psaní funkcí, který se nazývá **arrow functions**. Používají `=>` (které vypadá jako šipka – chápete?) a jsou mezi vývojáři velmi populární.

Arrow functions vám umožňují vynechat klíčové slovo `function` a psát stručnější kód.

Zde je náš příklad s časovačem pomocí arrow functions:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

`()` je místo, kam by šly parametry (v tomto případě prázdné), pak následuje šipka `=>` a nakonec tělo funkce ve složených závorkách. Toto poskytuje stejnou funkčnost s stručnější syntaxí.

### Kdy použít kterou strategii

Kdy byste měli použít který přístup? Praktická směrnice: pokud budete funkci používat vícekrát, dejte jí jméno a definujte ji samostatně. Pokud je to pro jeden konkrétní účel, zvažte anonymní funkci. Oba přístupy – arrow functions i tradiční syntaxe – jsou platné, i když arrow functions jsou běžné v moderních JavaScriptových kódech.

---



## 🚀 Výzva

Dokážete jednou větou vysvětlit rozdíl mezi funkcemi a metodami? Zkuste to!

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vytvořte knihovnu užitečných matematických funkcí, která demonstruje různé koncepty funkcí pokryté v této lekci, včetně parametrů, výchozích hodnot, návratových hodnot a arrow functions.

**Zadání:** Vytvořte JavaScriptový soubor s názvem `mathUtils.js`, který obsahuje následující funkce:
1. Funkci `add`, která přijímá dva parametry a vrací jejich součet
2. Funkci `multiply` s výchozími hodnotami parametrů (druhý parametr má výchozí hodnotu 1)
3. Arrow function `square`, která přijímá číslo a vrací jeho druhou mocninu
4. Funkci `calculate`, která přijímá jinou funkci jako parametr a dvě čísla, poté aplikuje tuto funkci na tato čísla
5. Demonstrujte volání každé funkce s vhodnými testovacími případy

Více o [režimu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) se dozvíte zde.

## Kvíz po lekci
[Kvíz po lekci](https://ff-quizzes.netlify.app)

## Přehled & Samostudium

Stojí za to [přečíst si něco více o arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), protože jsou stále více používány v kódech. Procvičte si psaní funkce a poté její přepis pomocí této syntaxe.

## Úkol

[Zábava s funkcemi](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.