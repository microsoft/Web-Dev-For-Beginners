<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-24T21:50:30+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "sk"
}
-->
# Projekt rozšírenia prehliadača, časť 2: Volanie API, použitie lokálneho úložiska

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/25)

## Úvod

Pamätáte si rozšírenie prehliadača, ktoré ste začali vytvárať? Momentálne máte pekne vyzerajúci formulár, ale je v podstate statický. Dnes ho oživíme tým, že ho prepojíme so skutočnými dátami a dáme mu pamäť.

Premýšľajte o počítačoch riadiaceho strediska misie Apollo - nezobrazovali len pevné informácie. Neustále komunikovali s vesmírnou loďou, aktualizovali sa telemetrickými údajmi a pamätali si kritické parametre misie. Takýto dynamický systém dnes budeme budovať. Vaše rozšírenie sa pripojí na internet, získa skutočné environmentálne údaje a zapamätá si vaše nastavenia na budúce použitie.

Integrácia API môže znieť zložito, ale v skutočnosti ide len o to, naučiť váš kód komunikovať s inými službami. Či už získavate údaje o počasí, príspevky zo sociálnych médií alebo informácie o uhlíkovej stope, ako to dnes urobíme, všetko je to o vytváraní týchto digitálnych spojení. Preskúmame tiež, ako môžu prehliadače uchovávať informácie - podobne ako knižnice používajú kartotéky na zapamätanie, kde sa nachádzajú knihy.

Na konci tejto lekcie budete mať rozšírenie prehliadača, ktoré získava skutočné údaje, ukladá preferencie používateľa a poskytuje plynulý zážitok. Poďme na to!

✅ Sledujte očíslované segmenty v príslušných súboroch, aby ste vedeli, kam umiestniť svoj kód.

## Nastavenie prvkov na manipuláciu v rozšírení

Predtým, než váš JavaScript môže manipulovať s rozhraním, potrebuje odkazy na konkrétne HTML prvky. Predstavte si to ako teleskop, ktorý musí byť nasmerovaný na konkrétne hviezdy - predtým, než Galileo mohol študovať Jupiterove mesiace, musel najprv nájsť a zaostriť na samotný Jupiter.

Vo vašom súbore `index.js` vytvoríme premenné `const`, ktoré zachytia odkazy na každý dôležitý prvok formulára. Je to podobné ako keď vedci označujú svoje vybavenie - namiesto toho, aby hľadali po celej laboratóriu, môžu priamo pristupovať k tomu, čo potrebujú.

```javascript
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

**Čo tento kód robí:**
- **Zachytáva** prvky formulára pomocou `document.querySelector()` s CSS selektormi
- **Vytvára** odkazy na vstupné polia pre názov regiónu a API kľúč
- **Nadväzuje** spojenie s prvkami na zobrazenie výsledkov údajov o uhlíkovej spotrebe
- **Nastavuje** prístup k prvkom UI, ako sú indikátory načítania a chybové hlásenia
- **Ukladá** každý odkaz na prvok do premennej `const` pre jednoduché opakované použitie v kóde

## Pridanie poslucháčov udalostí

Teraz urobíme vaše rozšírenie citlivé na akcie používateľa. Poslucháči udalostí sú spôsob, akým váš kód monitoruje interakcie používateľa. Predstavte si ich ako operátorov v skorých telefónnych ústredniach - počúvali prichádzajúce hovory a spájali správne obvody, keď niekto chcel uskutočniť spojenie.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**Pochopenie týchto konceptov:**
- **Pripojí** poslucháč na odoslanie formulára, ktorý sa spustí, keď používateľ stlačí Enter alebo klikne na odoslanie
- **Pripojí** poslucháč na kliknutie na tlačidlo vymazania pre resetovanie formulára
- **Prenáša** objekt udalosti `(e)` do funkcií spracovania pre dodatočnú kontrolu
- **Volá** funkciu `init()` okamžite na nastavenie počiatočného stavu vášho rozšírenia

✅ Všimnite si skrátenú syntax šípkových funkcií použitú tu. Tento moderný prístup v JavaScripte je čistejší než tradičné výrazy funkcií, ale oba fungujú rovnako dobre!

## Vytvorenie funkcií inicializácie a resetovania

Vytvorme logiku inicializácie vášho rozšírenia. Funkcia `init()` je ako navigačný systém lode kontrolujúci svoje prístroje - určuje aktuálny stav a upravuje rozhranie podľa toho. Kontroluje, či niekto už vaše rozšírenie použil, a načíta jeho predchádzajúce nastavenia.

Funkcia `reset()` poskytuje používateľom nový začiatok - podobne ako vedci resetujú svoje prístroje medzi experimentmi, aby zabezpečili čisté údaje.

```javascript
function init() {
	// Check if user has previously saved API credentials
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	// Set extension icon to generic green (placeholder for future lesson)
	// TODO: Implement icon update in next lesson

	if (storedApiKey === null || storedRegion === null) {
		// First-time user: show the setup form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		// Returning user: load their saved data automatically
		displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
}

function reset(e) {
	e.preventDefault();
	// Clear stored region to allow user to choose a new location
	localStorage.removeItem('regionName');
	// Restart the initialization process
	init();
}
```

**Rozdelenie toho, čo sa tu deje:**
- **Načítava** uložený API kľúč a región z lokálneho úložiska prehliadača
- **Kontroluje**, či ide o prvého používateľa (žiadne uložené údaje) alebo vracajúceho sa používateľa
- **Zobrazuje** formulár nastavenia pre nových používateľov a skrýva ostatné prvky rozhrania
- **Automaticky načítava** uložené údaje pre vracajúcich sa používateľov a zobrazuje možnosť resetovania
- **Spravuje** stav používateľského rozhrania na základe dostupných údajov

**Kľúčové koncepty o lokálnom úložisku:**
- **Uchováva** údaje medzi reláciami prehliadača (na rozdiel od session storage)
- **Ukladá** údaje ako páry kľúč-hodnota pomocou `getItem()` a `setItem()`
- **Vracia** `null`, keď pre daný kľúč neexistujú žiadne údaje
- **Poskytuje** jednoduchý spôsob, ako si zapamätať preferencie a nastavenia používateľa

> 💡 **Pochopenie úložiska prehliadača**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) je ako dať vášmu rozšíreniu trvalú pamäť. Predstavte si, ako staroveká knižnica v Alexandrii uchovávala zvitky - informácie zostali dostupné, aj keď vedci odišli a vrátili sa.
>
> **Kľúčové vlastnosti:**
> - **Uchováva** údaje aj po zatvorení prehliadača
> - **Prežije** reštarty počítača a havárie prehliadača
> - **Poskytuje** značný úložný priestor pre preferencie používateľa
> - **Ponúka** okamžitý prístup bez oneskorení siete

> **Dôležitá poznámka**: Vaše rozšírenie prehliadača má svoje vlastné izolované lokálne úložisko, ktoré je oddelené od bežných webových stránok. To poskytuje bezpečnosť a zabraňuje konfliktom s inými webovými stránkami.

Uložené údaje si môžete prezrieť otvorením nástrojov pre vývojárov prehliadača (F12), prechodom na kartu **Application** a rozbalením sekcie **Local Storage**.

![Panel lokálneho úložiska](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.sk.png)

> ⚠️ **Bezpečnostné upozornenie**: V produkčných aplikáciách ukladanie API kľúčov do LocalStorage predstavuje bezpečnostné riziká, pretože JavaScript môže k týmto údajom pristupovať. Na účely učenia je tento prístup v poriadku, ale skutočné aplikácie by mali používať bezpečné serverové úložisko pre citlivé údaje.

## Spracovanie odoslania formulára

Teraz spracujeme, čo sa stane, keď niekto odošle váš formulár. Predvolene prehliadače obnovia stránku pri odoslaní formulára, ale my tento proces zachytíme, aby sme vytvorili plynulejší zážitok.

Tento prístup odráža spôsob, akým riadiace stredisko spracováva komunikáciu s vesmírnou loďou - namiesto resetovania celého systému pri každom prenose udržujú nepretržitú prevádzku a zároveň spracovávajú nové informácie.

Vytvorte funkciu, ktorá zachytí udalosť odoslania formulára a extrahuje vstup používateľa:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**V uvedenom sme:**
- **Zabránili** predvolenému správaniu odoslania formulára, ktoré by obnovilo stránku
- **Extrahovali** hodnoty vstupov používateľa z polí API kľúča a regiónu
- **Preniesli** údaje z formulára do funkcie `setUpUser()` na spracovanie
- **Udržali** správanie aplikácie na jednej stránke tým, že sme sa vyhli obnoveniu stránky

✅ Pamätajte, že vaše HTML polia formulára obsahujú atribút `required`, takže prehliadač automaticky overí, že používateľ poskytol API kľúč a región pred spustením tejto funkcie.

## Nastavenie preferencií používateľa

Funkcia `setUpUser` je zodpovedná za uloženie poverení používateľa a iniciovanie prvého volania API. Tým sa vytvorí plynulý prechod od nastavenia k zobrazovaniu výsledkov.

```javascript
function setUpUser(apiKey, regionName) {
	// Save user credentials for future sessions
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	
	// Update UI to show loading state
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	
	// Fetch carbon usage data with user's credentials
	displayCarbonUsage(apiKey, regionName);
}
```

**Krok za krokom, čo sa tu deje:**
- **Ukladá** API kľúč a názov regiónu do lokálneho úložiska pre budúce použitie
- **Zobrazuje** indikátor načítania, aby informoval používateľov, že sa načítavajú údaje
- **Vymazáva** všetky predchádzajúce chybové hlásenia z rozhrania
- **Zobrazuje** tlačidlo vymazania, aby mohli používatelia neskôr resetovať svoje nastavenia
- **Iniciuje** volanie API na získanie skutočných údajov o uhlíkovej spotrebe

Táto funkcia vytvára plynulý používateľský zážitok tým, že koordinovane spravuje uchovávanie údajov a aktualizácie používateľského rozhrania.

## Zobrazenie údajov o uhlíkovej spotrebe

Teraz pripojíme vaše rozšírenie k externým zdrojom údajov prostredníctvom API. Tým sa vaše rozšírenie transformuje zo samostatného nástroja na niečo, čo môže pristupovať k informáciám v reálnom čase z celého internetu.

**Pochopenie API**

[API](https://www.webopedia.com/TERM/A/API.html) sú spôsob, akým medzi sebou komunikujú rôzne aplikácie. Predstavte si ich ako telegrafný systém, ktorý spájal vzdialené mestá v 19. storočí - operátori posielali požiadavky na vzdialené stanice a dostávali odpovede s požadovanými informáciami. Kedykoľvek kontrolujete sociálne médiá, pýtate sa hlasového asistenta otázku alebo používate aplikáciu na doručovanie, API uľahčujú tieto výmeny údajov.

**Kľúčové koncepty o REST API:**
- **REST** znamená 'Representational State Transfer'
- **Používa** štandardné HTTP metódy (GET, POST, PUT, DELETE) na interakciu s údajmi
- **Vracia** údaje v predvídateľných formátoch, zvyčajne JSON
- **Poskytuje** konzistentné, URL-based koncové body pre rôzne typy požiadaviek

✅ [CO2 Signal API](https://www.co2signal.com/), ktoré použijeme, poskytuje údaje o intenzite uhlíka v elektrických sieťach po celom svete v reálnom čase. To pomáha používateľom pochopiť environmentálny dopad ich spotreby elektriny!

> 💡 **Pochopenie asynchrónneho JavaScriptu**: Kľúčové slovo [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) umožňuje vášmu kódu spracovávať viacero operácií súčasne. Keď požadujete údaje zo servera, nechcete, aby sa celé rozšírenie zastavilo - to by bolo ako zastavenie všetkých operácií riadenia letovej prevádzky pri čakaní na odpoveď jedného lietadla.
>
> **Kľúčové výhody:**
> - **Udržuje** odozvu rozšírenia počas načítania údajov
> - **Umožňuje** pokračovanie vykonávania iného kódu počas sieťových požiadaviek
> - **Zlepšuje** čitateľnosť kódu v porovnaní s tradičnými vzormi spätného volania
> - **Umožňuje** elegantné spracovanie chýb pri problémoch so sieťou

Tu je krátke video o `async`:

[![Async a Await na správu sľubov](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async a Await na správu sľubov")

> 🎥 Kliknite na obrázok vyššie pre video o async/await.

Vytvorte funkciu na získanie a zobrazenie údajov o uhlíkovej spotrebe:

```javascript
// Modern fetch API approach (no external dependencies needed)
async function displayCarbonUsage(apiKey, region) {
	try {
		// Fetch carbon intensity data from CO2 Signal API
		const response = await fetch('https://api.co2signal.com/v1/latest', {
			method: 'GET',
			headers: {
				'auth-token': apiKey,
				'Content-Type': 'application/json'
			},
			// Add query parameters for the specific region
			...new URLSearchParams({ countryCode: region }) && {
				url: `https://api.co2signal.com/v1/latest?countryCode=${region}`
			}
		});

		// Check if the API request was successful
		if (!response.ok) {
			throw new Error(`API request failed: ${response.status}`);
		}

		const data = await response.json();
		const carbonData = data.data;

		// Calculate rounded carbon intensity value
		const carbonIntensity = Math.round(carbonData.carbonIntensity);

		// Update the user interface with fetched data
		loading.style.display = 'none';
		form.style.display = 'none';
		myregion.textContent = region.toUpperCase();
		usage.textContent = `${carbonIntensity} grams (grams CO₂ emitted per kilowatt hour)`;
		fossilfuel.textContent = `${carbonData.fossilFuelPercentage.toFixed(2)}% (percentage of fossil fuels used to generate electricity)`;
		results.style.display = 'block';

		// TODO: calculateColor(carbonIntensity) - implement in next lesson

	} catch (error) {
		console.error('Error fetching carbon data:', error);
		
		// Show user-friendly error message
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we couldn\'t fetch data for that region. Please check your API key and region code.';
	}
}
```

**Rozdelenie toho, čo sa tu deje:**
- **Používa** moderné API `fetch()` namiesto externých knižníc ako Axios pre čistejší kód bez závislostí
- **Implementuje** správne overenie chýb pomocou `response.ok`, aby sa chyby API zachytili včas
- **Spracováva** asynchrónne operácie pomocou `async/await` pre čitateľnejší tok kódu
- **Autentifikuje** sa s CO2 Signal API pomocou hlavičky `auth-token`
- **Analyzuje** údaje JSON z odpovede a extrahuje informácie o intenzite uhlíka
- **Aktualizuje** viacero prvkov UI s formátovanými environmentálnymi údajmi
- **Poskytuje** používateľsky prívetivé chybové hlásenia, keď volania API zlyhajú

**Kľúčové moderné koncepty JavaScriptu:**
- **Šablónové literály** so syntaxou `${}` pre čisté formátovanie reťazcov
- **Spracovanie chýb** s blokmi try/catch pre robustné aplikácie
- **Async/await** vzor pre elegantné spracovanie sieťových požiadaviek
- **Destrukturalizácia objektov** na extrakciu konkrétnych údajov z odpovedí API
- **Reťazenie metód** pre viacnásobné manipulácie s DOM

✅ Táto funkcia demonštruje niekoľko dôležitých konceptov webového vývoja - komunikáciu s externými servermi, spracovanie autentifikácie, spracovanie údajov, aktualizáciu rozhraní a elegantné spracovanie chýb. Toto sú základné zručnosti, ktoré profesionálni vývojári pravidelne používajú.

🎉 **Čo ste dosiahli:** Vytvorili ste rozšírenie prehliadača, ktoré:
- **Pripája sa** na internet a získava skutočné environmentálne údaje
- **Uchováva** nastavenia používateľa medzi reláciami
- **Spracováva** chyby elegantne namiesto zlyhania
- **Poskytuje** plynulý, profesionálny používateľský zážitok

Otestujte svoju prácu spustením `npm run build` a obnovením vášho rozšírenia v prehliadači. Teraz máte funkčný sledovač uhlíkovej stopy. V ďalšej lekcii pridáme funkciu dynamických ikon na dokončenie rozšírenia.

---

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vylepšite rozšírenie prehliadača pridaním zlepšení spracovania chýb a funkcií používateľského zážitku. Táto výzva vám pomôže precvičiť prácu s API, lokálnym úložiskom a manipuláciou s DOM pomocou moderných JavaScriptových vzorov.

**Výzva:** Vytvorte vylepšenú verziu funkcie displayCarbonUsage, ktorá zahŕňa: 1) Mechanizmus opakovania pre zlyhané volania API s exponenciálnym oneskorením, 2) Validáciu vstupu pre kód regiónu pred vykonaním volania API,
V tejto lekcii ste sa naučili o LocalStorage a API, oboch veľmi užitočných pre profesionálneho webového vývojára. Dokážete si predstaviť, ako tieto dve veci spolupracujú? Premýšľajte o tom, ako by ste navrhli webovú stránku, ktorá by uchovávala položky na použitie prostredníctvom API.

## Úloha

[Prijmite API](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.