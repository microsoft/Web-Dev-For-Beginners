<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-24T21:17:10+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "sk"
}
-->
# Základy JavaScriptu: Metódy a funkcie

![Základy JavaScriptu - Funkcie](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.sk.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz pred prednáškou
[Kvíz pred prednáškou](https://ff-quizzes.netlify.app)

Písanie rovnakého kódu opakovane je jednou z najčastejších frustrácií programovania. Funkcie tento problém riešia tým, že umožňujú zabaliť kód do opakovane použiteľných blokov. Predstavte si funkcie ako štandardizované časti, ktoré urobili revolúciu v montážnej linke Henryho Forda – keď raz vytvoríte spoľahlivú súčiastku, môžete ju použiť kdekoľvek bez nutnosti začínať od nuly.

Funkcie umožňujú zoskupiť časti kódu, aby ste ich mohli opakovane používať vo svojom programe. Namiesto kopírovania a vkladania rovnakého logického kódu všade môžete funkciu vytvoriť raz a zavolať ju vždy, keď je to potrebné. Tento prístup udržuje váš kód organizovaný a uľahčuje jeho aktualizáciu.

V tejto lekcii sa naučíte, ako vytvoriť vlastné funkcie, odovzdávať im informácie a získavať užitočné výsledky späť. Objavíte rozdiel medzi funkciami a metódami, naučíte sa moderné syntaktické prístupy a uvidíte, ako môžu funkcie spolupracovať s inými funkciami. Tieto koncepty budeme budovať krok za krokom.

[![Metódy a funkcie](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metódy a funkcie")

> 🎥 Kliknite na obrázok vyššie pre video o metódach a funkciách.

> Túto lekciu si môžete prejsť na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funkcie

Funkcia je samostatný blok kódu, ktorý vykonáva konkrétnu úlohu. Obsahuje logiku, ktorú môžete vykonať vždy, keď je to potrebné.

Namiesto písania rovnakého kódu viackrát vo vašom programe ho môžete zabaliť do funkcie a zavolať túto funkciu vždy, keď ju potrebujete. Tento prístup udržuje váš kód čistý a uľahčuje jeho aktualizáciu. Predstavte si, aké náročné by bolo upraviť logiku roztrúsenú na 20 rôznych miestach vo vašom kóde.

Je dôležité pomenovať svoje funkcie popisne. Dobre pomenovaná funkcia jasne komunikuje svoj účel – keď vidíte `cancelTimer()`, okamžite pochopíte, čo robí, rovnako ako jasne označené tlačidlo vám presne povie, čo sa stane, keď naň kliknete.

## Vytvorenie a volanie funkcie

Pozrime sa, ako vytvoriť funkciu. Syntaktický vzor je konzistentný:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Rozoberme si to:
- Kľúčové slovo `function` hovorí JavaScriptu: "Hej, vytváram funkciu!"
- `nameOfFunction` je miesto, kde dáte svojej funkcii popisné meno
- Zátvorky `()` sú miesto, kde môžete pridať parametre (k tomu sa dostaneme čoskoro)
- Zložené zátvorky `{}` obsahujú skutočný kód, ktorý sa spustí, keď zavoláte funkciu

Vytvorme jednoduchú funkciu na pozdrav, aby sme to videli v praxi:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Táto funkcia vypíše "Hello, world!" do konzoly. Keď ju raz definujete, môžete ju použiť toľkokrát, koľkokrát je to potrebné.

Na vykonanie (alebo "volanie") vašej funkcie napíšte jej názov, za ktorým nasledujú zátvorky. JavaScript vám umožňuje definovať funkciu pred alebo po jej volaní – JavaScriptový engine sa postará o poradie vykonávania.

```javascript
// calling our function
displayGreeting();
```

Keď spustíte tento riadok, vykoná sa všetok kód vo vašej funkcii `displayGreeting`, pričom sa v konzole vášho prehliadača zobrazí "Hello, world!". Túto funkciu môžete volať opakovane.

> **Poznámka:** Počas týchto lekcií ste používali **metódy**. `console.log()` je metóda – v podstate funkcia, ktorá patrí objektu `console`. Kľúčový rozdiel je v tom, že metódy sú pripojené k objektom, zatiaľ čo funkcie stoja samostatne. Mnoho vývojárov používa tieto pojmy neformálne zameniteľne.

### Najlepšie praktiky pri písaní funkcií

Tu je niekoľko tipov, ktoré vám pomôžu písať skvelé funkcie:

- Dajte svojim funkciám jasné, popisné názvy – vaša budúca verzia vám poďakuje!
- Používajte **camelCasing** pre názvy s viacerými slovami (napríklad `calculateTotal` namiesto `calculate_total`)
- Udržujte každú funkciu zameranú na vykonávanie jednej veci dobre

## Odovzdávanie informácií funkcii

Naša funkcia `displayGreeting` je obmedzená – dokáže zobraziť iba "Hello, world!" pre každého. Parametre nám umožňujú urobiť funkcie flexibilnejšie a užitočnejšie.

**Parametre** fungujú ako zástupné symboly, do ktorých môžete vložiť rôzne hodnoty pri každom použití funkcie. Týmto spôsobom môže tá istá funkcia pracovať s rôznymi informáciami pri každom volaní.

Parametre uvádzate v zátvorkách pri definovaní funkcie, pričom viaceré parametre oddeľujete čiarkami:

```javascript
function name(param, param2, param3) {

}
```

Každý parameter funguje ako zástupný symbol – keď niekto zavolá vašu funkciu, poskytne skutočné hodnoty, ktoré sa vložia na tieto miesta.

Aktualizujme našu funkciu na pozdrav tak, aby prijímala meno osoby:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Všimnite si, ako používame spätné úvodzovky (`` ` ``) a `${}` na vloženie mena priamo do našej správy – toto sa nazýva šablónový literál a je to veľmi praktický spôsob, ako vytvárať reťazce s premennými zmiešanými dovnútra.

Teraz, keď zavoláme našu funkciu, môžeme odovzdať akékoľvek meno:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript vezme reťazec `'Christopher'`, priradí ho k parametru `name` a vytvorí personalizovanú správu "Hello, Christopher!"

## Predvolené hodnoty

Čo ak chceme, aby niektoré parametre boli voliteľné? Tu prichádzajú na rad predvolené hodnoty!

Povedzme, že chceme, aby si ľudia mohli prispôsobiť slovo pozdravu, ale ak ho nešpecifikujú, použijeme ako záložné "Hello". Predvolené hodnoty môžete nastaviť pomocou znamienka rovnosti, rovnako ako pri nastavovaní premennej:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Tu je `name` stále povinné, ale `salutation` má záložnú hodnotu `'Hello'`, ak nikto neposkytne iný pozdrav.

Teraz môžeme túto funkciu zavolať dvoma rôznymi spôsobmi:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Pri prvom volaní JavaScript použije predvolené "Hello", pretože sme nešpecifikovali pozdrav. Pri druhom volaní použije náš vlastný "Hi". Táto flexibilita robí funkcie prispôsobiteľnými rôznym scenárom.

## Návratové hodnoty

Naše funkcie doteraz len vypisovali správy do konzoly, ale čo ak chcete, aby funkcia niečo vypočítala a vrátila vám výsledok?

Tu prichádzajú na rad **návratové hodnoty**. Namiesto toho, aby funkcia niečo len zobrazila, môže vám vrátiť hodnotu, ktorú môžete uložiť do premennej alebo použiť v iných častiach vášho kódu.

Na odoslanie hodnoty späť použijete kľúčové slovo `return`, za ktorým nasleduje to, čo chcete vrátiť:

```javascript
return myVariable;
```

Tu je niečo dôležité: keď funkcia narazí na príkaz `return`, okamžite prestane bežať a pošle túto hodnotu späť tomu, kto ju zavolal.

Upravme našu funkciu na pozdrav tak, aby namiesto vypisovania správy túto správu vrátila:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Teraz namiesto vypisovania pozdravu táto funkcia vytvorí správu a odovzdá ju späť nám.

Na použitie vrátenej hodnoty ju môžeme uložiť do premennej rovnako ako akúkoľvek inú hodnotu:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Teraz `greetingMessage` obsahuje "Hello, Christopher" a môžeme ho použiť kdekoľvek v našom kóde – na zobrazenie na webovej stránke, zahrnutie do e-mailu alebo odovzdanie inej funkcii.

## Funkcie ako parametre pre funkcie

Funkcie môžu byť odovzdané ako parametre iným funkciám. Aj keď sa tento koncept môže na začiatku zdať zložitý, je to silná funkcia, ktorá umožňuje flexibilné programovacie vzory.

Tento vzor je veľmi bežný, keď chcete povedať "keď sa niečo stane, urob túto inú vec." Napríklad "keď časovač skončí, spusti tento kód" alebo "keď používateľ klikne na tlačidlo, zavolaj túto funkciu."

Pozrime sa na `setTimeout`, čo je zabudovaná funkcia, ktorá čaká určitý čas a potom spustí nejaký kód. Musíme jej povedať, aký kód má spustiť – ideálny prípad na odovzdanie funkcie!

Vyskúšajte tento kód – po 3 sekundách uvidíte správu:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Všimnite si, ako odovzdávame `displayDone` (bez zátvoriek) do `setTimeout`. Funkciu nevoláme sami – odovzdávame ju `setTimeout` a hovoríme "zavolaj ju o 3 sekundy."

### Anonymné funkcie

Niekedy potrebujete funkciu len na jednu vec a nechcete jej dávať meno. Zamyslite sa nad tým – ak používate funkciu iba raz, prečo zahlcovať svoj kód ďalším menom?

JavaScript vám umožňuje vytvárať **anonymné funkcie** – funkcie bez mien, ktoré môžete definovať presne tam, kde ich potrebujete.

Tu je, ako môžeme prepísať náš príklad s časovačom pomocou anonymnej funkcie:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

Toto dosahuje rovnaký výsledok, ale funkcia je definovaná priamo v volaní `setTimeout`, čím sa eliminuje potreba samostatného vyhlásenia funkcie.

### Funkcie so šípkou

Moderný JavaScript má ešte kratší spôsob písania funkcií, nazývaný **arrow functions**. Používajú `=>` (čo vyzerá ako šípka – chápete?) a sú veľmi populárne medzi vývojármi.

Funkcie so šípkou vám umožňujú vynechať kľúčové slovo `function` a písať stručnejší kód.

Tu je náš príklad s časovačom pomocou funkcie so šípkou:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

`()` je miesto, kde by boli parametre (v tomto prípade prázdne), potom nasleduje šípka `=>` a nakoniec telo funkcie v zložených zátvorkách. Toto poskytuje rovnakú funkcionalitu s kratšou syntaxou.

### Kedy použiť jednotlivé stratégie

Kedy by ste mali použiť každý prístup? Praktická smernica: ak budete funkciu používať viackrát, dajte jej meno a definujte ju samostatne. Ak je to na jedno konkrétne použitie, zvážte anonymnú funkciu. Obe možnosti – funkcie so šípkou aj tradičná syntax – sú platné, aj keď funkcie so šípkou sú rozšírené v moderných JavaScriptových kódoch.

---



## 🚀 Výzva

Dokážete jednou vetou vysvetliť rozdiel medzi funkciami a metódami? Skúste to!

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vytvorte knižnicu užitočných matematických funkcií, ktorá demonštruje rôzne koncepty funkcií pokryté v tejto lekcii, vrátane parametrov, predvolených hodnôt, návratových hodnôt a funkcií so šípkou.

**Zadanie:** Vytvorte JavaScriptový súbor s názvom `mathUtils.js`, ktorý obsahuje nasledujúce funkcie:
1. Funkciu `add`, ktorá prijíma dva parametre a vracia ich súčet
2. Funkciu `multiply` s predvolenými hodnotami parametrov (druhý parameter predvolene 1)
3. Funkciu so šípkou `square`, ktorá prijíma číslo a vracia jeho druhú mocninu
4. Funkciu `calculate`, ktorá prijíma inú funkciu ako parameter a dve čísla, potom aplikuje túto funkciu na tieto čísla
5. Demonštrujte volanie každej funkcie s vhodnými testovacími prípadmi

Viac o [režime agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) sa dozviete tu.

## Kvíz po prednáške
[Kvíz po prednáške](https://ff-quizzes.netlify.app)

## Opakovanie a samostatné štúdium

Stojí za to [prečítať si trochu viac o funkciách so šípkou](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), pretože sa čoraz viac používajú v kódoch. Precvičte si písanie funkcie a potom ju prepíšte pomocou tejto syntaxe.

## Zadanie

[Zábava s funkciami](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.