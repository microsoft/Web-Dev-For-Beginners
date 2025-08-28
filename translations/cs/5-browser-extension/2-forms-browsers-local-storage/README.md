<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e10f168beac4e7b05e30e0eb5c92bf11",
  "translation_date": "2025-08-28T03:51:12+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "cs"
}
-->
# Projekt rozšíření prohlížeče, část 2: Volání API, použití místního úložiště

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/25)

### Úvod

V této lekci budete volat API odesláním formuláře vašeho rozšíření prohlížeče a zobrazovat výsledky v rozšíření. Navíc se naučíte, jak ukládat data do místního úložiště prohlížeče pro budoucí použití.

✅ Postupujte podle očíslovaných segmentů v příslušných souborech, abyste věděli, kam umístit svůj kód.

### Nastavení prvků pro manipulaci v rozšíření:

Do této chvíle jste vytvořili HTML pro formulář a `<div>` pro výsledky vašeho rozšíření prohlížeče. Od této chvíle budete pracovat v souboru `/src/index.js` a postupně rozšiřovat své rozšíření. Odkazujte na [předchozí lekci](../1-about-browsers/README.md) ohledně nastavení projektu a procesu sestavení.

Pracujte ve svém souboru `index.js` a začněte vytvořením několika `const` proměnných, které budou držet hodnoty spojené s různými poli:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

Všechna tato pole jsou odkazována podle jejich CSS třídy, jak jste je nastavili v HTML v předchozí lekci.

### Přidání posluchačů událostí

Dále přidejte posluchače událostí pro formulář a tlačítko pro vymazání, které resetuje formulář, aby se při odeslání formuláře nebo kliknutí na tlačítko reset něco stalo. Na konec souboru přidejte volání inicializace aplikace:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ Všimněte si zkráceného zápisu pro poslouchání událostí odeslání nebo kliknutí a jak je událost předána funkcím handleSubmit nebo reset. Dokážete napsat ekvivalent tohoto zkráceného zápisu v delším formátu? Který preferujete?

### Vytvoření funkcí init() a reset():

Nyní vytvoříte funkci, která inicializuje rozšíření, nazvanou init():

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```
V této funkci je zajímavá logika. Při jejím čtení, vidíte, co se děje?

- jsou nastaveny dvě `const`, které kontrolují, zda uživatel uložil APIKey a regionální kód do místního úložiště.
- pokud je některá z těchto hodnot null, zobrazí se formulář změnou jeho stylu na 'block'.
- skryjí se výsledky, načítání a clearBtn a nastaví se jakýkoli chybový text na prázdný řetězec.
- pokud existuje klíč a region, spustí se rutina:
  - volání API pro získání dat o uhlíkové spotřebě
  - skrytí oblasti výsledků
  - skrytí formuláře
  - zobrazení tlačítka reset

Než budete pokračovat, je užitečné se naučit o velmi důležitém konceptu dostupném v prohlížečích: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage je užitečný způsob ukládání řetězců v prohlížeči jako `key-value` pár. Tento typ webového úložiště lze manipulovat pomocí JavaScriptu pro správu dat v prohlížeči. LocalStorage nevyprší, zatímco SessionStorage, jiný typ webového úložiště, se vymaže při zavření prohlížeče. Různé typy úložišť mají své výhody a nevýhody.

> Poznámka - vaše rozšíření prohlížeče má své vlastní místní úložiště; hlavní okno prohlížeče je jiná instance a chová se odděleně.

Nastavíte hodnotu APIKey jako řetězec, například, a můžete vidět, že je nastavena v Edge tím, že "inspektujete" webovou stránku (můžete kliknout pravým tlačítkem na prohlížeč a inspektovat) a přejdete na kartu Aplikace, kde uvidíte úložiště.

![Panel místního úložiště](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.cs.png)

✅ Zamyslete se nad situacemi, kdy byste NECHTĚLI ukládat některá data do LocalStorage. Obecně je umístění API klíčů do LocalStorage špatný nápad! Vidíte proč? V našem případě, protože naše aplikace je čistě pro učení a nebude nasazena do obchodu s aplikacemi, použijeme tuto metodu.

Všimněte si, že používáte Web API pro manipulaci s LocalStorage, buď pomocí `getItem()`, `setItem()`, nebo `removeItem()`. Je široce podporováno napříč prohlížeči.

Než vytvoříte funkci `displayCarbonUsage()`, která je volána v `init()`, vytvořte funkci pro zpracování počátečního odeslání formuláře.

### Zpracování odeslání formuláře

Vytvořte funkci nazvanou `handleSubmit`, která přijímá argument události `(e)`. Zastavte šíření události (v tomto případě chceme zastavit obnovení prohlížeče) a zavolejte novou funkci `setUpUser`, předávající argumenty `apiKey.value` a `region.value`. Tímto způsobem použijete dvě hodnoty, které jsou přivedeny prostřednictvím počátečního formuláře, když jsou příslušná pole vyplněna.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```
✅ Osvěžte si paměť - HTML, které jste nastavili v poslední lekci, má dvě vstupní pole, jejichž `hodnoty` jsou zachyceny prostřednictvím `const`, které jste nastavili na začátku souboru, a obě jsou `povinné`, takže prohlížeč zastaví uživatele od zadání null hodnot.

### Nastavení uživatele

Pokračujeme funkcí `setUpUser`, zde nastavíte hodnoty místního úložiště pro apiKey a regionName. Přidejte novou funkci:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```
Tato funkce nastaví zprávu o načítání, která se zobrazí během volání API. V tomto bodě jste dospěli k vytvoření nejdůležitější funkce tohoto rozšíření prohlížeče!

### Zobrazení uhlíkové spotřeby

Konečně je čas dotázat se API!

Než budeme pokračovat, měli bychom diskutovat o API. API, nebo [Application Programming Interfaces](https://www.webopedia.com/TERM/A/API.html), jsou klíčovým prvkem nástrojů webového vývojáře. Poskytují standardní způsoby, jak programy interagují a komunikují mezi sebou. Například pokud vytváříte webovou stránku, která potřebuje dotazovat databázi, někdo mohl vytvořit API, které můžete použít. Zatímco existuje mnoho typů API, jedním z nejpopulárnějších je [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ Termín 'REST' znamená 'Representational State Transfer' a zahrnuje použití různě konfigurovaných URL pro získání dat. Udělejte si malý průzkum o různých typech API dostupných vývojářům. Který formát vás oslovuje?

Existují důležité věci, které je třeba poznamenat o této funkci. Nejprve si všimněte klíčového slova [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Psát své funkce tak, aby běžely asynchronně, znamená, že čekají na dokončení akce, jako je vrácení dat, než budou pokračovat.

Zde je rychlé video o `async`:

[![Async a Await pro správu slibů](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async a Await pro správu slibů")

> 🎥 Klikněte na obrázek výše pro video o async/await.

Vytvořte novou funkci pro dotazování API C02Signal:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

Toto je velká funkce. Co se zde děje?

- podle osvědčených postupů používáte klíčové slovo `async`, aby se tato funkce chovala asynchronně. Funkce obsahuje blok `try/catch`, protože vrátí slib, když API vrátí data. Protože nemáte kontrolu nad rychlostí, jakou API odpoví (může vůbec neodpovědět!), musíte tuto nejistotu řešit voláním asynchronně. 
- dotazujete API co2signal, abyste získali data o vašem regionu, pomocí vašeho API klíče. K použití tohoto klíče musíte použít typ autentizace v parametrech hlavičky.
- jakmile API odpoví, přiřadíte různé prvky jeho odpovědi k částem obrazovky, které jste nastavili pro zobrazení těchto dat.
- pokud dojde k chybě nebo pokud neexistuje žádný výsledek, zobrazíte chybovou zprávu.

✅ Použití asynchronních programovacích vzorů je další velmi užitečný nástroj ve vašem arzenálu. Přečtěte si [o různých způsobech](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function), jak můžete tento typ kódu konfigurovat.

Gratulujeme! Pokud sestavíte své rozšíření (`npm run build`) a obnovíte jej v panelu rozšíření, máte funkční rozšíření! Jediná věc, která nefunguje, je ikona, a to opravíte v další lekci.

---

## 🚀 Výzva

Diskutovali jsme o několika typech API v těchto lekcích. Vyberte webové API a podrobně prozkoumejte, co nabízí. Například se podívejte na API dostupná v prohlížečích, jako je [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). Co podle vás dělá skvělé API?

## Kvíz po lekci

[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/26)

## Přehled a samostudium

V této lekci jste se naučili o LocalStorage a API, obojí velmi užitečné pro profesionálního webového vývojáře. Dokážete si představit, jak tyto dvě věci spolupracují? Přemýšlejte o tom, jak byste navrhli webovou stránku, která by ukládala položky pro použití API.

## Úkol

[Adoptujte API](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o co největší přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.