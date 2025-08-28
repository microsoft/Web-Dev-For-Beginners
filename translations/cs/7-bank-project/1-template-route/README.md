<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8da1b5e2c63f749808858c53f37b8ce7",
  "translation_date": "2025-08-28T03:37:25+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "cs"
}
-->
# Vytvoření bankovní aplikace, část 1: HTML šablony a trasy ve webové aplikaci

## Kvíz před lekcí

[Kvíz před lekcí](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/41)

### Úvod

Od příchodu JavaScriptu do prohlížečů se webové stránky stávají interaktivnějšími a složitějšími než kdy dříve. Webové technologie se nyní běžně používají k vytváření plně funkčních aplikací, které běží přímo v prohlížeči, a nazýváme je [webové aplikace](https://en.wikipedia.org/wiki/Web_application). Protože jsou webové aplikace vysoce interaktivní, uživatelé nechtějí čekat na úplné načtení stránky pokaždé, když provedou nějakou akci. Proto se používá JavaScript k přímé aktualizaci HTML pomocí DOM, aby se zajistil plynulejší uživatelský zážitek.

V této lekci položíme základy pro vytvoření bankovní webové aplikace, přičemž použijeme HTML šablony k vytvoření více obrazovek, které lze zobrazit a aktualizovat bez nutnosti znovu načítat celou HTML stránku.

### Předpoklady

Pro testování webové aplikace, kterou v této lekci vytvoříme, potřebujete lokální webový server. Pokud ho nemáte, můžete nainstalovat [Node.js](https://nodejs.org) a použít příkaz `npx lite-server` z vaší složky projektu. Tím vytvoříte lokální webový server a otevřete svou aplikaci v prohlížeči.

### Příprava

Na svém počítači vytvořte složku s názvem `bank` a uvnitř ní soubor s názvem `index.html`. Začneme s tímto HTML [boilerplate](https://en.wikipedia.org/wiki/Boilerplate_code):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## HTML šablony

Pokud chcete vytvořit více obrazovek pro webovou stránku, jedním řešením by bylo vytvořit jeden HTML soubor pro každou obrazovku, kterou chcete zobrazit. Toto řešení však přináší určité nevýhody:

- Při přepínání obrazovek musíte znovu načíst celé HTML, což může být pomalé.
- Je obtížné sdílet data mezi různými obrazovkami.

Dalším přístupem je mít pouze jeden HTML soubor a definovat více [HTML šablon](https://developer.mozilla.org/docs/Web/HTML/Element/template) pomocí elementu `<template>`. Šablona je znovupoužitelný HTML blok, který není prohlížečem zobrazen, a musí být instancován za běhu pomocí JavaScriptu.

### Úkol

Vytvoříme bankovní aplikaci se dvěma obrazovkami: přihlašovací stránkou a dashboardem. Nejprve přidáme do těla HTML zástupný prvek, který použijeme k instancování různých obrazovek naší aplikace:

```html
<div id="app">Loading...</div>
```

Dáváme mu `id`, aby bylo později snazší ho najít pomocí JavaScriptu.

> Tip: protože obsah tohoto prvku bude nahrazen, můžeme do něj vložit zprávu nebo indikátor načítání, který se zobrazí během načítání aplikace.

Dále přidáme pod HTML šablonu pro přihlašovací stránku. Prozatím do ní vložíme pouze nadpis a sekci obsahující odkaz, který použijeme k navigaci.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Poté přidáme další HTML šablonu pro stránku dashboardu. Tato stránka bude obsahovat různé sekce:

- Hlavičku s nadpisem a odkazem pro odhlášení
- Aktuální zůstatek na bankovním účtu
- Seznam transakcí, zobrazený v tabulce

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Tip: při vytváření HTML šablon, pokud chcete vidět, jak budou vypadat, můžete zakomentovat řádky `<template>` a `</template>` obklopením pomocí `<!-- -->`.

✅ Proč si myslíte, že používáme atributy `id` na šablonách? Mohli bychom použít něco jiného, například třídy?

## Zobrazení šablon pomocí JavaScriptu

Pokud zkusíte svůj aktuální HTML soubor v prohlížeči, uvidíte, že se zasekne na zobrazení `Loading...`. To je proto, že musíme přidat nějaký JavaScriptový kód, který instancuje a zobrazí HTML šablony.

Instancování šablony se obvykle provádí ve 3 krocích:

1. Získání elementu šablony v DOM, například pomocí [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Klonování elementu šablony pomocí [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Připojení k DOM pod viditelný prvek, například pomocí [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Proč musíme šablonu klonovat před jejím připojením k DOM? Co si myslíte, že by se stalo, kdybychom tento krok přeskočili?

### Úkol

Vytvořte nový soubor s názvem `app.js` ve složce projektu a importujte tento soubor do sekce `<head>` vašeho HTML:

```html
<script src="app.js" defer></script>
```

Nyní v `app.js` vytvoříme novou funkci `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

To, co zde děláme, je přesně 3 kroky popsané výše. Instancujeme šablonu s `id` `templateId` a její klonovaný obsah vložíme do našeho zástupného prvku aplikace. Všimněte si, že musíme použít `cloneNode(true)`, abychom zkopírovali celý podstrom šablony.

Nyní zavolejte tuto funkci s jednou ze šablon a podívejte se na výsledek.

```js
updateRoute('login');
```

✅ Jaký je účel tohoto kódu `app.innerHTML = '';`? Co se stane bez něj?

## Vytváření tras

Když mluvíme o webové aplikaci, nazýváme *Routing* záměr mapovat **URL** na konkrétní obrazovky, které by měly být zobrazeny. Na webové stránce s více HTML soubory se to děje automaticky, protože cesty k souborům se odrážejí v URL. Například s těmito soubory ve vaší složce projektu:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Pokud vytvoříte webový server s `mywebsite` jako kořen, mapování URL bude:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Nicméně, pro naši webovou aplikaci používáme jeden HTML soubor obsahující všechny obrazovky, takže toto výchozí chování nám nepomůže. Musíme tuto mapu vytvořit ručně a aktualizovat zobrazenou šablonu pomocí JavaScriptu.

### Úkol

Použijeme jednoduchý objekt k implementaci [mapy](https://en.wikipedia.org/wiki/Associative_array) mezi cestami URL a našimi šablonami. Přidejte tento objekt na začátek vašeho souboru `app.js`.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Nyní trochu upravíme funkci `updateRoute`. Místo toho, abychom přímo předávali `templateId` jako argument, chceme ho získat nejprve pohledem na aktuální URL a poté použít naši mapu k získání odpovídající hodnoty `templateId`. Můžeme použít [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) k získání pouze části cesty z URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Zde jsme namapovali trasy, které jsme deklarovali, na odpovídající šablonu. Můžete vyzkoušet, že to funguje správně, změnou URL ručně ve vašem prohlížeči.

✅ Co se stane, pokud zadáte neznámou cestu do URL? Jak bychom to mohli vyřešit?

## Přidání navigace

Dalším krokem pro naši aplikaci je přidání možnosti navigace mezi stránkami bez nutnosti ručně měnit URL. To zahrnuje dvě věci:

1. Aktualizaci aktuálního URL
2. Aktualizaci zobrazené šablony na základě nového URL

Druhou část jsme již vyřešili pomocí funkce `updateRoute`, takže musíme zjistit, jak aktualizovat aktuální URL.

Budeme muset použít JavaScript a konkrétně [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), který umožňuje aktualizovat URL a vytvořit nový záznam v historii prohlížení, aniž by se HTML znovu načítalo.

> Poznámka: Zatímco HTML prvek kotvy [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) může být použit samostatně k vytvoření hypertextových odkazů na různé URL, ve výchozím nastavení způsobí, že prohlížeč znovu načte HTML. Je nutné zabránit tomuto chování při zpracování tras pomocí vlastního JavaScriptu, použitím funkce preventDefault() na události kliknutí.

### Úkol

Vytvořme novou funkci, kterou můžeme použít k navigaci v naší aplikaci:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Tato metoda nejprve aktualizuje aktuální URL na základě zadané cesty, poté aktualizuje šablonu. Vlastnost `window.location.origin` vrací kořen URL, což nám umožňuje rekonstruovat kompletní URL ze zadané cesty.

Nyní, když máme tuto funkci, můžeme se postarat o problém, který máme, pokud cesta neodpovídá žádné definované trase. Upravením funkce `updateRoute` přidáme záložní trasu na jednu z existujících tras, pokud nemůžeme najít shodu.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Pokud nelze najít trasu, nyní přesměrujeme na stránku `login`.

Nyní vytvořme funkci pro získání URL při kliknutí na odkaz a zabránění výchozímu chování odkazu prohlížeče:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Dokončeme navigační systém přidáním vazeb na naše odkazy *Login* a *Logout* v HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

Objekt `event` výše zachytí událost `click` a předá ji naší funkci `onLinkClick`.

Pomocí atributu [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) připojte událost `click` k JavaScriptovému kódu, zde volání funkce `navigate()`.

Zkuste kliknout na tyto odkazy, nyní byste měli být schopni navigovat mezi různými obrazovkami vaší aplikace.

✅ Metoda `history.pushState` je součástí standardu HTML5 a je implementována ve [všech moderních prohlížečích](https://caniuse.com/?search=pushState). Pokud vytváříte webovou aplikaci pro starší prohlížeče, existuje trik, který můžete použít místo této API: použití [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) před cestou vám umožní implementovat trasování, které funguje s běžnou navigací kotvy a nenačítá stránku znovu, protože jeho účelem bylo vytvořit interní odkazy na stránce.

## Zpracování tlačítek zpět a vpřed v prohlížeči

Použití `history.pushState` vytváří nové záznamy v historii navigace prohlížeče. Můžete to zkontrolovat podržením *tlačítka zpět* vašeho prohlížeče, mělo by zobrazit něco jako toto:

![Screenshot historie navigace](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.cs.png)

Pokud zkusíte několikrát kliknout na tlačítko zpět, uvidíte, že se aktuální URL mění a historie se aktualizuje, ale stále se zobrazuje stejná šablona.

To je proto, že aplikace neví, že je potřeba zavolat `updateRoute()` pokaždé, když se historie změní. Pokud se podíváte na [dokumentaci `history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), můžete vidět, že pokud se stav změní - což znamená, že jsme se přesunuli na jiné URL - je vyvolána událost [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event). Použijeme to k vyřešení tohoto problému.

### Úkol

Abychom zajistili, že zobrazená šablona bude aktualizována, když se historie prohlížeče změní, připojíme novou funkci, která volá `updateRoute()`. Uděláme to na konci našeho souboru `app.js`:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Poznámka: zde jsme použili [arrow function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) k deklaraci našeho obslužného programu události `popstate` pro stručnost, ale běžná funkce by fungovala stejně.

Zde je video o arrow funkcích:

[![Arrow Functions](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Arrow Functions")

> 🎥 Klikněte na obrázek výše pro video o arrow funkcích.

Nyní zkuste použít tlačítka zpět a vpřed ve vašem prohlížeči a zkontrolujte, že zobrazená trasa je tentokrát správně aktualizována.

---

## 🚀 Výzva

Přidejte novou šablonu a trasu pro třetí stránku, která zobrazuje kredity této aplikace.

## Kvíz po lekci

[Kvíz po lekci](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/42)

## Přehled a samostudium

Trasování je jednou z překvapivě složitých částí vývoje webu, zejména když se web přesouvá od chování při obnovování stránky k obnovování stránky v aplikacích typu Single Page Application. Přečtěte si něco o [tom, jak služba Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) řeší trasování. Dokážete vysvětlit, proč jsou některá rozhodnutí popsaná v tomto dokumentu nezbytná?

## Zadání

[Vylepšete trasování](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.