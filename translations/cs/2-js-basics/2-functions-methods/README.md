<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71f7d7dafa1c7194d79ddac87f669ff9",
  "translation_date": "2026-01-07T03:29:03+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "cs"
}
-->
# Základy JavaScriptu: Metody a funkce

![JavaScript Basics - Functions](../../../../translated_images/cs/webdev101-js-functions.be049c4726e94f8b.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

```mermaid
journey
    title Vaše dobrodružství s JavaScript funkcemi
    section Základy
      Syntaxe funkce: 5: You
      Volání funkcí: 4: You
      Parametry a argumenty: 5: You
    section Pokročilé koncepty
      Návratové hodnoty: 4: You
      Výchozí parametry: 5: You
      Kompozice funkcí: 4: You
    section Moderní JavaScript
      Šipkové funkce: 5: You
      Anonymní funkce: 4: You
      Funkce vyššího řádu: 5: You
```
## Přednáškový kvíz
[Přednáškový kvíz](https://ff-quizzes.netlify.app)

Opakované psaní stejného kódu je jednou z nejčastějších frustrací při programování. Funkce tento problém řeší tím, že vám umožní zabalit kód do znovupoužitelných bloků. Fungují jako standardizované součástky, které udělaly výrobní linku Henryho Forda revoluční – jakmile vytvoříte spolehlivou komponentu, můžete ji použít kdekoliv, aniž byste ji museli znovu stavět od nuly.

Funkce vám umožní seskupit části kódu, abyste je mohli znovu využívat v celém programu. Místo kopírování a vkládání stejné logiky všude můžete funkci vytvořit jednou a volat ji kdykoli potřeba. Tento přístup udržuje váš kód organizovaný a usnadňuje aktualizace.

V této lekci se naučíte, jak si vytvořit vlastní funkce, předávat jim informace a získat užitečné výsledky zpět. Objevíte rozdíl mezi funkcemi a metodami, naučíte se moderní syntaxi a uvidíte, jak funkce mohou spolupracovat s jinými funkcemi. Tyto koncepty budeme budovat krok za krokem.

[![Metody a funkce](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metody a funkce")

> 🎥 Klikněte na obrázek výše pro video o metodách a funkcích.

> Tuto lekci si můžete projít na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

```mermaid
mindmap
  root((JavaScript Funkce))
    Základní Pojmy
      Deklarace
        Tradiční syntaxe
        Syntax šipkové funkce
      Volání
        Použití závorek
        Závorky jsou povinné
    Parametry
      Vstupní Hodnoty
        Více parametrů
        Výchozí hodnoty
      Argumenty
        Předané hodnoty
        Může být jakýkoliv typ
    Návratové Hodnoty
      Výstupní Data
        příkaz return
        Ukončení funkce
      Použití Výsledků
        Uložit do proměnných
        Řetězit funkce
    Pokročilé Vzory
      Vyššířádové
        Funkce jako parametry
        Callbacks
      Anonymní
        Jméno není potřeba
        Definice inline
```
## Funkce

Funkce je samostatný blok kódu, který provádí konkrétní úkol. Zapouzdřuje logiku, kterou můžete spustit, kdykoli je potřeba.

Místo psaní stejného kódu několikrát v celém programu ho můžete zabalit do funkce a volat ji vždy, když to potřebujete. Tento přístup udržuje kód přehledný a usnadňuje aktualizace. Představte si jen, jak náročná by byla údržba, pokud byste potřebovali změnit logiku roztroušenou na 20 různých místech v kódu.

Důležité je funkce pojmenovávat výstižně. Dobře pojmenovaná funkce jasně říká, co dělá – když vidíte `cancelTimer()`, hned víte, co ta funkce provede, stejně jako jasně označené tlačítko vám přesně řekne, co se stane po kliknutí.

## Vytvoření a volání funkce

Podívejme se, jak si funkci vytvořit. Syntax má konzistentní vzor:

```javascript
function nameOfFunction() { // definice funkce
 // definice/tělo funkce
}
```

Rozložme si to:
- Klíčové slovo `function` říká JavaScriptu "Hej, tvořím funkci!"
- `nameOfFunction` je místo, kde dáte funkci popisný název
- Kulaté závorky `()` jsou místo, kde mohou být parametry (k tomu se brzy dostaneme)
- Složené závorky `{}` obsahují skutečný kód, který se spustí, když funkci zavoláte

Vytvořme jednoduchou funkci pozdravu, abychom to viděli v praxi:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Tato funkce vypíše "Hello, world!" do konzole. Jakmile ji definujete, můžete ji použít tolikrát, kolikrát chcete.

Pro spuštění (neboli "volání") funkce napište její jméno následované závorkami. JavaScript vám dovolí definovat funkci před nebo po jejím zavolání – JavaScript engine se postará o pořadí spuštění.

```javascript
// volání naší funkce
displayGreeting();
```

Když tento řádek spustíte, vykoná se veškerý kód uvnitř funkce `displayGreeting`, zobrazí se "Hello, world!" v konzoli vašeho prohlížeče. Můžete tuto funkci volat opakovaně.

### 🧠 **Základní kontrola funkcí: Vytvoření vašich prvních funkcí**

**Podívejme se, jak vám jdou základní funkce:**
- Dokážete vysvětlit, proč používáme složené závorky `{}` při definici funkcí?
- Co se stane, když napíšete `displayGreeting` bez závorek?
- Proč byste chtěli jednu funkci volat vícekrát?

```mermaid
flowchart TD
    A["✏️ Definovat funkci"] --> B["📦 Zabalit kód"]
    B --> C["🏷️ Pojmenujte ji"]
    C --> D["📞 Zavolejte ji podle potřeby"]
    D --> E["🔄 Znovu použít kdekoli"]
    
    F["💡 Výhody"] --> F1["Žádné opakování kódu"]
    F --> F2["Snadná údržba"]
    F --> F3["Jasná organizace"]
    F --> F4["Jednodušší testování"]
    
    style A fill:#e3f2fd
    style E fill:#e8f5e8
    style F fill:#fff3e0
```
> **Poznámka:** V těchto lekcích jste používali **metody**. `console.log()` je metoda – v podstatě funkce, která patří objektu `console`. Klíčový rozdíl je ten, že metody jsou připojené k objektům, zatímco funkce stojí samostatně. Mnoho vývojářů tyto termíny v běžné řeči zaměňuje.

### Nejlepší postupy při psaní funkcí

Zde je pár rad, jak psát skvělé funkce:

- Dávejte funkcím jasné, výstižné názvy – vaše budoucí já vám poděkuje!
- Používejte **camelCase** u víceslovných názvů (například `calculateTotal` místo `calculate_total`)
- Každá funkce by měla dělat jednu věc dobře

## Předávání informací do funkce

Naše funkce `displayGreeting` je omezená – umí zobrazit jen „Hello, world!“ pro každého. Parametry nám umožňují dělat funkce flexibilnější a užitečnější.

**Parametry** fungují jako zástupná místa, kam můžete při každém volání vložit jiné hodnoty. Takže stejná funkce může s různými informacemi fungovat pokaždé jinak.

Parametry vypisujete do závorek při definici funkce, více parametrů oddělíte čárkou:

```javascript
function name(param, param2, param3) {

}
```

Každý parametr je jako zástupné místo – když někdo funkci zavolá, dodá skutečné hodnoty, které se do těchto míst dosadí.

Aktualizujme pozdrav, aby přijímal jméno:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Všimněte si, že používáme zpětné apostrofy (`` ` ``) a `${}`, abychom jméno vložili přímo do zprávy – tomu se říká šablonový literál a je to opravdu užitečný způsob vytváření textu s proměnnými.

Teď, když funkci zavoláme, můžeme předat libovolné jméno:

```javascript
displayGreeting('Christopher');
// zobrazí "Ahoj, Christopher!" po spuštění
```

JavaScript vezme řetězec `'Christopher'`, přiřadí ho parametru `name` a vytvoří personalizovanou zprávu "Hello, Christopher!"

```mermaid
flowchart LR
    A["🎯 Volání funkce"] --> B["📥 Parametry"]
    B --> C["⚙️ Tělo funkce"]
    C --> D["📤 Výsledek"]
    
    A1["displayGreeting('Alice')"] --> A
    B1["name = 'Alice'"] --> B
    C1["Vzorový řetězec\n\`Ahoj, \${name}!\`"] --> C
    D1["'Ahoj, Alice!'"] --> D
    
    E["🔄 Typy parametrů"] --> E1["Řetězce"]
    E --> E2["Čísla"]
    E --> E3["Booleovské hodnoty"]
    E --> E4["Objekty"]
    E --> E5["Funkce"]
    
    style A fill:#e3f2fd
    style C fill:#e8f5e8
    style D fill:#fff3e0
    style E fill:#f3e5f5
```
## Výchozí hodnoty

Co když chceme, aby některé parametry byly nepovinné? Tady přicházejí na řadu výchozí hodnoty!

Řekněme, že chceme umožnit uživatelům přizpůsobit oslovení, ale pokud ho neuvedou, použijeme "Hello" jako výchozí. Výchozí hodnoty nastavíte pomocí rovná se, podobně jako při přiřazování proměnné:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Tady je `name` stále povinné, ale `salutation` má záložní hodnotu `'Hello'`, pokud nikdo nezadá oslovení.

Funkci tak můžeme volat dvěma způsoby:

```javascript
displayGreeting('Christopher');
// zobrazuje "Ahoj, Christopher"

displayGreeting('Christopher', 'Hi');
// zobrazuje "Čau, Christopher"
```

V prvním volání JavaScript použije výchozí „Hello“, protože jsme neurčili oslovení. Ve druhém volání naopak použije naše vlastní „Hi“. Tato flexibilita dělá funkce přizpůsobivé různým situacím.

### 🎛️ **Kontrola osvojení parametrů: Udělejte funkce flexibilními**

**Otestujte své znalosti parametrů:**
- Jaký je rozdíl mezi parametrem a argumentem?
- Proč jsou výchozí hodnoty užitečné v reálném programování?
- Dokážete předpovědět, co se stane, když předáte více argumentů než parametrů?

```mermaid
stateDiagram-v2
    [*] --> NoParams: funkce greet() {}
    [*] --> WithParams: funkce greet(jméno) {}
    [*] --> WithDefaults: funkce greet(jméno, pozdrav='Ahoj') {}
    
    NoParams --> Static: Stejný výstup vždy
    WithParams --> Dynamic: Mění se dle vstupu
    WithDefaults --> Flexible: Volitelná úprava
    
    Static --> [*]
    Dynamic --> [*]
    Flexible --> [*]
    
    note right of WithDefaults
        Nejflexibilnější přístup
        Zpětně kompatibilní
    end note
```
> **Profesionální tip**: Výchozí parametry činí vaše funkce uživatelsky přívětivější. Uživatelé mohou rychle začít s rozumnými hodnotami, ale přitom mají možnost přizpůsobit si je podle potřeby!

## Návratové hodnoty

Dosud naše funkce pouze vypisovaly zprávy do konzole, ale co když chcete, aby funkce něco spočítala a vrátila výsledek?

Tady přicházejí na řadu **návratové hodnoty**. Místo pouhého zobrazení hodnoty může funkce zaslat hodnotu zpět, aby ji bylo možné uložit do proměnné nebo použít v jiných částech kódu.

Pro vrácení hodnoty použijte klíčové slovo `return` následované tím, co chcete vrátit:

```javascript
return myVariable;
```

Důležité: Když funkce narazí na `return`, okamžitě přestane běžet a pošle hodnotu zpět tomu, kdo ji volal.

Upravme naši pozdravovou funkci tak, aby zprávu vracela místo toho, aby ji tiskla:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Místo tisku pozdrav vytvoří a vrátí nám zprávu.

Vrácenou hodnotu můžeme uložit do proměnné stejně jako jinou hodnotu:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Nyní `greetingMessage` obsahuje "Hello, Christopher" a můžeme ji použít kdekoli v kódu – zobrazit na webu, vložit do emailu, nebo předat další funkci.

```mermaid
flowchart TD
    A["🔧 Zpracování funkce"] --> B{"návratový příkaz?"}
    B -->|Ano| C["📤 Návratová hodnota"]
    B -->|Ne| D["📭 Návrat undefined"]
    
    C --> E["💾 Uložit do proměnné"]
    C --> F["🔗 Použít ve výrazu"]
    C --> G["📞 Předat funkci"]
    
    D --> H["⚠️ Obvykle neužitečné"]
    
    I["📋 Použití návratové hodnoty"] --> I1["Vypočítat výsledky"]
    I --> I2["Ověřit vstup"]
    I --> I3["Transformovat data"]
    I --> I4["Vytvořit objekty"]
    
    style C fill:#e8f5e8
    style D fill:#ffebee
    style I fill:#e3f2fd
```
### 🔄 **Kontrola návratových hodnot: Získávání výsledků**

**Zhodnoťte porozumění návratovým hodnotám:**
- Co se stane s kódem po příkazu `return` ve funkci?
- Proč je často lepší vracet hodnoty než jen vypisovat do konzole?
- Může funkce vracet různé typy hodnot (řetězec, číslo, boolean)?

```mermaid
pie title "Běžné typy návratových hodnot"
    "Řetězce" : 30
    "Čísla" : 25
    "Objekty" : 20
    "Booleovské hodnoty" : 15
    "Pole" : 10
```
> **Klíčová poznámka**: Funkce, které vracejí hodnoty, jsou všestrannější, protože volající rozhoduje, co s výsledkem udělá. To dělá váš kód modulární a snadno znovupoužitelný!

## Funkce jako parametry funkcí

Funkce můžete předávat jako parametry do jiných funkcí. Tato koncepce může na začátku působit složitě, ale je to mocná vlastnost umožňující flexibilní programovací vzory.

Tento vzor je velmi běžný, když chcete říct: „když se něco stane, udělej toto“. Například „když timer skončí, spusť tento kód“ nebo „když uživatel klikne na tlačítko, zavolej tuto funkci“.

Podívejme se na `setTimeout`, což je vestavěná funkce, která počká stanovenou dobu a pak spustí nějaký kód. Musíme jí říct, který kód spustit – perfektní případ pro předání funkce!

Zkuste tento kód – po 3 sekundách uvidíte zprávu:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// hodnota časovače je v milisekundách
setTimeout(displayDone, 3000);
```

Všimněte si, že předáváme `displayDone` (bez závorek) do `setTimeout`. Funkci sami nevoláme – jdeme ji předat `setTimeout` a říct „zavolej to za 3 sekundy“.

### Anonymní funkce

Někdy potřebujete funkci jen pro jednu věc a nechcete jí dávat jméno. Zvažte to – pokud funkci použijete jen jednou, proč zahlcovat kód dalším názvem?

JavaScript umožňuje vytvářet **anonymní funkce** – funkce bez jména, které definujete tam, kde je potřebujete.

Tady je, jak můžeme přepsat náš timerový příklad s anonymní funkcí:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Dosáhli jsme stejného výsledku, ale funkce je definována přímo uvnitř volání `setTimeout`, není tedy potřeba samostatná deklarace funkce.

### Šipkové funkce

Moderní JavaScript nabízí ještě kratší zápis funkcí, nazývaný **šipkové funkce**. Používají `=>` (vypadá jako šipka – chápete?) a jsou velmi populární mezi vývojáři.

Šipkové funkce umožňují vynechat klíčové slovo `function` a napsat kód stručněji.

Tady je náš timerový příklad s šipkovou funkcí:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

`()` jsou místo pro parametry (v tomto případě prázdné), následuje šipka `=>` a tělo funkce ve složených závorkách. To poskytuje stejnou funkcionalitu s kratší syntaxí.

```mermaid
flowchart LR
    A["📝 Styly funkcí"] --> B["Tradiční"]
    A --> C["Šipkové"]
    A --> D["Anonymní"]
    
    B --> B1["function name() {}"]
    B --> B2["Zvednuté (Hoisted)"]
    B --> B3["Pojmenované"]
    
    C --> C1["const name = () => {}"]
    C --> C2["Stručná syntaxe"]
    C --> C3["Moderní styl"]
    
    D --> D1["function() {}"]
    D --> D2["Bez jména"]
    D --> D3["Jednorázové použití"]
    
    E["⏰ Kdy použít"] --> E1["Tradiční: Opakovaně použitelné funkce"]
    E --> E2["Šipkové: Krátké zpětné volání"]
    E --> E3["Anonymní: Obslužné rutiny událostí"]
    
    style A fill:#e3f2fd
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e0f2f1
```
### Kdy použít kterou strategii

Kdy která metoda? Praktická rada: pokud funkci budete používat vícekrát, pojmenujte ji a definujte zvlášť. Pokud je jen pro jednorázové použití, uvažujte o anonymní funkci. Obě varianty – šipkové i tradiční – jsou platné, ale šipkové funkce jsou dominantní v moderních kódech.

### 🎨 **Ovládání stylů funkcí: Výběr správné syntaxe**

**Otestujte své porozumění syntaxi:**
- Kdy byste dali přednost šipkovým funkcím před tradiční syntaxí?
- Jaká je hlavní výhoda anonymních funkcí?
- Dokážete uvést situaci, kdy je lepší pojmenovaná funkce než anonymní?

```mermaid
quadrantChart
    title Matice rozhodování o výběru funkce
    x-axis Jednoduché --> Složitější
    y-axis Jednorázové použití --> Opakovaně použitelné
    quadrant-1 Šipkové funkce
    quadrant-2 Pojmenované funkce
    quadrant-3 Anonymní funkce
    quadrant-4 Tradiční funkce
    
    Event Handlers: [0.3, 0.2]
    Utility Functions: [0.7, 0.8]
    Callbacks: [0.2, 0.3]
    Class Methods: [0.8, 0.7]
    Mathematical Operations: [0.4, 0.6]
```
> **Moderní trend**: Šipkové funkce jsou čím dál častější volbou mnoha vývojářů díky stručné syntaxi, ale tradiční funkce mají stále své místo!

---



## 🚀 Výzva

Dokážete jednou větou vysvětlit rozdíl mezi funkcemi a metodami? Zkuste to!

## GitHub Copilot Agent Výzva 🚀

Použijte režim Agent k vyřešení následující výzvy:

**Popis:** Vytvořte užitečnou knihovnu matematických funkcí, která demonstruje různé koncepty funkcí probrané v této lekci, včetně parametrů, výchozích hodnot, návratových hodnot a šipkových funkcí.

**Zadání:** Vytvořte JavaScript soubor `mathUtils.js`, který bude obsahovat následující funkce:
1. Funkci `add`, která přijímá dva parametry a vrací jejich součet
2. Funkci `multiply` s výchozími hodnotami parametrů (druhý parametr má výchozí hodnotu 1)
3. Šipkovou funkci `square`, která přijímá číslo a vrací jeho druhou mocninu
4. Funkci `calculate`, která přijímá jinou funkci jako parametr a dvě čísla a aplikuje danou funkci na tato čísla
5. Ukázky volání všech funkcí s vhodnými testovacími případy

Více se o [agent režimu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dozvíte zde.

## Po-přednáškový kvíz
[Po-přednáškový kvíz](https://ff-quizzes.netlify.app)

## Přehled a samostudium

Stojí za to [si přečíst trochu víc o šipkových funkcích](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), protože se čím dál více používají v kódech. Procvičte si psaní funkce a pak ji přepište s touto syntaxí.

## Úkol

[Zábava s funkcemi](assignment.md)

---

## 🧰 **Souhrn vašeho JavaScriptového nástroje funkcí**

```mermaid
graph TD
    A["🎯 JavaScript Funkce"] --> B["📋 Deklarace funkce"]
    A --> C["📥 Parametry"]
    A --> D["📤 Návratové hodnoty"]
    A --> E["🎨 Moderní syntaxe"]
    
    B --> B1["funkce jméno() {}"]
    B --> B2["Popisné pojmenování"]
    B --> B3["Znovupoužitelné bloky kódu"]
    
    C --> C1["Vstupní data"]
    C --> C2["Výchozí hodnoty"]
    C --> C3["Vícenásobné parametry"]
    
    D --> D1["return příkaz"]
    D --> D2["Ukončení funkce"]
    D --> D3["Předání dat zpět"]
    
    E --> E1["Šipkové funkce: () =>"]
    E --> E2["Anonymní funkce"]
    E --> E3["Funkce vyššího řádu"]
    
    F["⚡ Klíčové výhody"] --> F1["Znovupoužitelnost kódu"]
    F --> F2["Lepší organizace"]
    F --> F3["Snadnější testování"]
    F --> F4["Modulární design"]
    
    style A fill:#e3f2fd
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e0f2f1
    style F fill:#fce4ec
```
---

## 🚀 Váš časový plán osvojení JavaScriptových funkcí

### ⚡ **Co zvládnete za následujících 5 minut**
- [ ] Napsat jednoduchou funkci, která vrací vaše oblíbené číslo
- [ ] Vytvořit funkci se dvěma parametry, která je sečte together
- [ ] Zkuste převést tradiční funkci na zápis pomocí arrow funkce
- [ ] Procvičte si úkol: vysvětlete rozdíl mezi funkcemi a metodami

### 🎯 **Co můžete v této hodině dokázat**
- [ ] Dokončit kvíz po lekci a zkontrolovat si nejasné koncepty
- [ ] Vytvořit knihovnu matematických utilit z výzvy GitHub Copilot
- [ ] Vytvořit funkci, která používá jinou funkci jako parametr
- [ ] Procvičit psaní funkcí s výchozími parametry
- [ ] Experimentovat s template literály ve vracených hodnotách funkcí

### 📅 **Váš týdenní mistr funkcí**
- [ ] Dokončit úkol "Zábava s funkcemi" s nápaditostí
- [ ] Refaktorovat trochu opakujícího se kódu, který jste napsali, do znovupoužitelných funkcí
- [ ] Vytvořit malou kalkulačku využívající pouze funkce (bez globálních proměnných)
- [ ] Procvičovat arrow funkce se způsoby pole jako `map()` a `filter()`
- [ ] Vytvořit kolekci utilitních funkcí pro běžné úkoly
- [ ] Studovat funkce vyššího řádu a koncepty funkcionálního programování

### 🌟 **Vaše měsíční transformace**
- [ ] Ovládnout pokročilé koncepty funkcí jako closure a rozsah (scope)
- [ ] Vytvořit projekt, který intenzivně používá kompozici funkcí
- [ ] Přispět do open source vylepšením dokumentace funkcí
- [ ] Naučit někoho dalšího o funkcích a různých stylech zápisu
- [ ] Prozkoumat funkcionální programovací paradigma v JavaScriptu
- [ ] Vytvořit osobní knihovnu znovupoužitelných funkcí pro budoucí projekty

### 🏆 **Závěrečná kontrola šampiona funkcí**

**Oslavte své mistrovství ve funkcích:**
- Jaká je nejužitečnější funkce, kterou jste zatím vytvořili?
- Jak vás učení o funkcích změnilo v pohledu na organizaci kódu?
- Který zápis funkcí preferujete a proč?
- Jaký reálný problém byste vyřešili napsáním funkce?

```mermaid
journey
    title Vývoj Vaší Sebejistoty ve Funkcích
    section Dnes
      Zmatení Syntaxí: 3: You
      Pochopení Základů: 4: You
      Psaní Jednoduchých Funkcí: 5: You
    section Tento Týden
      Používání Parametrů: 4: You
      Vrácení Hodnot: 5: You
      Moderní Syntax: 5: You
    section Příští Měsíc
      Kompozice Funkcí: 5: You
      Pokročilé Vzory: 5: You
      Vyučování Ostatních: 5: You
```
> 🎉 **Ovládli jste jeden z nejsilnějších konceptů programování!** Funkce jsou stavebními kameny větších programů. Každá aplikace, kterou kdy vytvoříte, bude používat funkce k organizaci, znovupoužití a struktuře kódu. Nyní rozumíte, jak zabalit logiku do znovupoužitelných komponent, což z vás dělá efektivnějšího a účinnějšího programátora. Vítejte ve světě modulárního programování! 🚀

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o vyloučení odpovědnosti**:
Tento dokument byl přeložen pomocí AI překladatelské služby [Co-op Translator](https://github.com/Azure/co-op-translator). Přestože usilujeme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Originální dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Nejsme odpovědní za jakékoli nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->