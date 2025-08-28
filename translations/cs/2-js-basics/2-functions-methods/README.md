<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b4612bbb9ace984f374fcc80e3e035ad",
  "translation_date": "2025-08-28T04:05:20+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "cs"
}
-->
# Základy JavaScriptu: Metody a funkce

![Základy JavaScriptu - Funkce](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.cs.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz před přednáškou
[Kvíz před přednáškou](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/9)

Když přemýšlíme o psaní kódu, vždy chceme zajistit, aby byl náš kód čitelný. I když to může znít paradoxně, kód se čte mnohem častěji, než se píše. Jedním ze základních nástrojů v arzenálu vývojáře pro zajištění udržovatelného kódu je **funkce**.

[![Metody a funkce](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metody a funkce")

> 🎥 Klikněte na obrázek výše pro video o metodách a funkcích.

> Tuto lekci si můžete projít na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funkce

Funkce je v podstatě blok kódu, který můžeme spustit na vyžádání. To je ideální pro situace, kdy potřebujeme provést stejný úkol vícekrát; místo duplicity logiky na různých místech (což by bylo obtížné aktualizovat, až přijde čas), ji můžeme centralizovat na jednom místě a volat ji, kdykoli potřebujeme operaci provést - funkce můžete dokonce volat z jiných funkcí!

Neméně důležitá je schopnost pojmenovat funkci. I když se to může zdát triviální, název poskytuje rychlý způsob dokumentace části kódu. Můžete si to představit jako štítek na tlačítku. Pokud kliknu na tlačítko s nápisem "Zrušit časovač", vím, že zastaví běžící hodiny.

## Vytvoření a volání funkce

Syntaxe funkce vypadá následovně:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Pokud bych chtěl vytvořit funkci pro zobrazení pozdravu, mohla by vypadat takto:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Kdykoli chceme funkci volat (nebo ji spustit), použijeme název funkce následovaný `()`. Stojí za zmínku, že funkce může být definována před nebo po jejím volání; JavaScriptový kompilátor ji pro vás najde.

```javascript
// calling our function
displayGreeting();
```

> **NOTE:** Existuje speciální typ funkce známý jako **metoda**, kterou už používáte! Ve skutečnosti jsme to viděli v našem příkladu výše, když jsme použili `console.log`. Rozdíl mezi metodou a funkcí je v tom, že metoda je připojena k objektu (v našem příkladu `console`), zatímco funkce je volně plovoucí. Mnoho vývojářů tyto termíny používá zaměnitelně.

### Nejlepší postupy pro funkce

Existuje několik osvědčených postupů, které je třeba mít na paměti při vytváření funkcí:

- Vždy používejte popisné názvy, abyste věděli, co funkce dělá
- Používejte **camelCasing** pro spojování slov
- Udržujte funkce zaměřené na konkrétní úkol

## Předávání informací funkci

Aby byla funkce více použitelná, často do ní budete chtít předat informace. Pokud vezmeme náš příklad `displayGreeting` výše, zobrazí pouze **Hello, world!**. Není to zrovna nejpraktičtější funkce, kterou byste mohli vytvořit. Pokud ji chceme udělat trochu flexibilnější, například umožnit někomu specifikovat jméno osoby, kterou chceme pozdravit, můžeme přidat **parametr**. Parametr (někdy nazývaný také **argument**) je dodatečná informace zaslaná funkci.

Parametry jsou uvedeny v části definice v závorkách a jsou odděleny čárkami, například takto:

```javascript
function name(param, param2, param3) {

}
```

Můžeme aktualizovat naši funkci `displayGreeting`, aby přijímala jméno a zobrazila ho.

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Když chceme funkci volat a předat jí parametr, specifikujeme ho v závorkách.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

## Výchozí hodnoty

Funkci můžeme udělat ještě flexibilnější přidáním více parametrů. Ale co když nechceme, aby bylo nutné zadat každou hodnotu? Pokud zůstaneme u našeho příkladu pozdravu, můžeme ponechat jméno jako povinné (potřebujeme vědět, koho zdravíme), ale chceme umožnit, aby byl samotný pozdrav přizpůsoben podle potřeby. Pokud někdo nechce pozdrav přizpůsobit, poskytneme místo toho výchozí hodnotu. Výchozí hodnotu parametru nastavíme podobně jako hodnotu proměnné - `parameterName = 'defaultValue'`. Celý příklad:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Když funkci voláme, můžeme se rozhodnout, zda chceme nastavit hodnotu pro `salutation`.

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

## Návratové hodnoty

Doposud funkce, kterou jsme vytvořili, vždy vypíše výstup do [konzole](https://developer.mozilla.org/docs/Web/API/console). Někdy to může být přesně to, co hledáme, zejména když vytváříme funkce, které budou volat jiné služby. Ale co když chci vytvořit pomocnou funkci pro provedení výpočtu a vrátit hodnotu zpět, abych ji mohl použít jinde?

To můžeme udělat pomocí **návratové hodnoty**. Návratová hodnota je vrácena funkcí a může být uložena do proměnné stejně jako bychom mohli uložit literální hodnotu, například řetězec nebo číslo.

Pokud funkce něco vrací, použije se klíčové slovo `return`. Klíčové slovo `return` očekává hodnotu nebo referenci toho, co se vrací, například takto:

```javascript
return myVariable;
```  

Můžeme vytvořit funkci pro vytvoření pozdravu a vrátit hodnotu zpět volajícímu.

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Při volání této funkce uložíme hodnotu do proměnné. Je to velmi podobné tomu, jak bychom nastavili proměnnou na statickou hodnotu (například `const name = 'Christopher'`).

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

## Funkce jako parametry pro funkce

Jak budete postupovat ve své programátorské kariéře, narazíte na funkce, které přijímají funkce jako parametry. Tento šikovný trik se běžně používá, když nevíme, kdy něco nastane nebo skončí, ale víme, že potřebujeme provést operaci v reakci na to.

Například [setTimeout](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout), který zahájí časovač a po jeho dokončení provede kód. Musíme mu říct, jaký kód chceme provést. Zní to jako ideální úkol pro funkci!

Pokud spustíte níže uvedený kód, po 3 sekundách uvidíte zprávu **3 sekundy uplynuly**.

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

### Anonymní funkce

Podívejme se znovu na to, co jsme vytvořili. Vytváříme funkci s názvem, která bude použita pouze jednou. Jak se naše aplikace stává složitější, můžeme si představit, že budeme vytvářet mnoho funkcí, které budou volány pouze jednou. To není ideální. Jak se ukazuje, ne vždy musíme poskytovat název!

Když předáváme funkci jako parametr, můžeme obejít její předchozí vytvoření a místo toho ji vytvořit jako součást parametru. Používáme stejné klíčové slovo `function`, ale místo toho ji vytvoříme jako parametr.

Přepišme výše uvedený kód tak, aby používal anonymní funkci:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Pokud spustíte náš nový kód, všimnete si, že dostaneme stejné výsledky. Vytvořili jsme funkci, ale nemuseli jsme jí dát název!

### Funkce s tučnou šipkou

Jednou z běžných zkratek v mnoha programovacích jazycích (včetně JavaScriptu) je schopnost používat tzv. **arrow** nebo **fat arrow** funkce. Používá speciální indikátor `=>`, který vypadá jako šipka - odtud název! Použitím `=>` můžeme přeskočit klíčové slovo `function`.

Přepišme náš kód ještě jednou, tentokrát s použitím funkce s tučnou šipkou:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

### Kdy použít kterou strategii

Nyní jste viděli, že máme tři způsoby, jak předat funkci jako parametr, a možná se ptáte, kdy použít který. Pokud víte, že budete funkci používat více než jednou, vytvořte ji normálně. Pokud ji budete používat pouze na jednom místě, je obecně nejlepší použít anonymní funkci. Zda použijete funkci s tučnou šipkou nebo tradiční syntaxi `function`, je na vás, ale všimnete si, že většina moderních vývojářů preferuje `=>`.

---

## 🚀 Výzva

Dokážete jednou větou vysvětlit rozdíl mezi funkcemi a metodami? Zkuste to!

## Kvíz po přednášce
[Kvíz po přednášce](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/10)

## Přehled a samostudium

Stojí za to [přečíst si něco více o funkcích s tučnou šipkou](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), protože jsou stále častěji používány v kódových základnách. Procvičte si psaní funkce a poté ji přepište pomocí této syntaxe.

## Úkol

[Zábava s funkcemi](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádné nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.