<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "eb358f3f4c2c082f9f3a4f98efa1d337",
  "translation_date": "2025-10-24T21:49:42+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/README.md",
  "language_code": "sk"
}
-->
# Projekt rozšírenia prehliadača, časť 3: Naučte sa o pozadí úloh a výkone

Premýšľali ste niekedy nad tým, prečo niektoré rozšírenia prehliadača pôsobia svižne a pohotovo, zatiaľ čo iné sú pomalé? Tajomstvo spočíva v tom, čo sa deje v zákulisí. Zatiaľ čo používatelia klikajú na rozhranie vášho rozšírenia, na pozadí prebieha celý svet procesov, ktoré ticho spravujú načítavanie údajov, aktualizácie ikon a systémové zdroje.

Toto je naša posledná lekcia zo série o rozšíreniach prehliadača a naučíme sa, ako zabezpečiť hladký chod vášho sledovača uhlíkovej stopy. Pridáte dynamické aktualizácie ikon a naučíte sa, ako identifikovať problémy s výkonom skôr, než sa stanú problémom. Je to ako doladenie pretekárskeho auta - malé optimalizácie môžu mať obrovský vplyv na to, ako všetko funguje.

Keď skončíme, budete mať vyleštené rozšírenie a pochopíte princípy výkonu, ktoré odlišujú dobré webové aplikácie od skvelých. Poďme sa ponoriť do sveta optimalizácie prehliadača.

## Kvíz pred prednáškou

[Prednáškový kvíz](https://ff-quizzes.netlify.app/web/quiz/27)

### Úvod

V našich predchádzajúcich lekciách ste vytvorili formulár, pripojili ho k API a zvládli asynchrónne načítavanie údajov. Vaše rozšírenie sa pekne formuje.

Teraz musíme pridať posledné úpravy - napríklad zmenu farby ikony rozšírenia na základe údajov o uhlíkovej stope. Pripomína mi to, ako NASA musela optimalizovať každý systém na vesmírnej lodi Apollo. Nemohli si dovoliť žiadne zbytočné cykly alebo pamäť, pretože na výkone záviseli životy. Aj keď naše rozšírenie prehliadača nie je až tak kritické, platia rovnaké princípy - efektívny kód vytvára lepšie používateľské zážitky.

## Základy webového výkonu

Keď váš kód beží efektívne, ľudia môžu *cítiť* rozdiel. Poznáte ten moment, keď sa stránka načíta okamžite alebo animácia plynie hladko? To je práca dobrého výkonu.

Výkon nie je len o rýchlosti - je to o vytváraní webových zážitkov, ktoré pôsobia prirodzene namiesto nemotorných a frustrujúcich. V raných dňoch výpočtovej techniky mala Grace Hopper na svojom stole nanosekundu (kus drôtu dlhý asi stopu), aby ukázala, ako ďaleko svetlo cestuje za jednu miliardtinu sekundy. Bol to jej spôsob, ako vysvetliť, prečo každý mikrosekunda záleží v počítačoch. Poďme preskúmať detektívne nástroje, ktoré vám pomôžu zistiť, čo spomaľuje veci.

> "Výkon webových stránok je o dvoch veciach: ako rýchlo sa stránka načíta a ako rýchlo na nej beží kód." -- [Zack Grossbart](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)

Téma, ako urobiť vaše webové stránky neuveriteľne rýchle na všetkých druhoch zariadení, pre všetkých druhov používateľov, v všetkých druhoch situácií, je neprekvapivo rozsiahla. Tu sú niektoré body, ktoré treba mať na pamäti pri budovaní štandardného webového projektu alebo rozšírenia prehliadača.

Prvým krokom pri optimalizácii vašej stránky je pochopenie toho, čo sa vlastne deje pod kapotou. Našťastie váš prehliadač má výkonné detektívne nástroje zabudované priamo v sebe.

Ak chcete otvoriť Nástroje pre vývojárov v Edge, kliknite na tri bodky v pravom hornom rohu, potom prejdite na Viac nástrojov > Nástroje pre vývojárov. Alebo použite klávesovú skratku: `Ctrl` + `Shift` + `I` na Windows alebo `Option` + `Command` + `I` na Macu. Keď ste tam, kliknite na kartu Výkon - tu budete robiť svoje vyšetrovanie.

**Tu je vaša detektívna sada na výkon:**
- **Otvorte** Nástroje pre vývojárov (budete ich používať neustále ako vývojár!)
- **Prejdite** na kartu Výkon - myslite na to ako na fitness tracker vašej webovej aplikácie
- **Stlačte** tlačidlo Záznam a sledujte svoju stránku v akcii
- **Študujte** výsledky, aby ste zistili, čo spomaľuje veci

Vyskúšajme si to. Otvorte webovú stránku (Microsoft.com funguje dobre na tento účel) a kliknite na tlačidlo 'Záznam'. Teraz obnovte stránku a sledujte, ako profiler zachytáva všetko, čo sa deje. Keď zastavíte nahrávanie, uvidíte podrobný rozpis toho, ako prehliadač 'skriptuje', 'vykresľuje' a 'maľuje' stránku. Pripomína mi to, ako riadiace stredisko monitoruje každý systém počas štartu rakety - získate údaje v reálnom čase o tom, čo sa presne deje a kedy.

✅ [Dokumentácia Microsoftu](https://docs.microsoft.com/microsoft-edge/devtools-guide/performance/?WT.mc_id=academic-77807-sagibbon) obsahuje množstvo ďalších podrobností, ak sa chcete ponoriť hlbšie.

> Tip: Pred testovaním vymažte vyrovnávaciu pamäť prehliadača, aby ste videli, ako vaša stránka funguje pre návštevníkov, ktorí ju navštívia prvýkrát - zvyčajne je to dosť odlišné od opakovaných návštev!

Vyberte prvky časovej osi profilu, aby ste priblížili udalosti, ktoré sa dejú počas načítania vašej stránky.

Získajte snímku výkonu vašej stránky výberom časti časovej osi profilu a pozrite si panel so súhrnom:

![Edge profiler snapshot](../../../../translated_images/snapshot.97750180ebcad73794a3594b36925eb5c8dbaac9e03fec7f9b974188c9ac63c7.sk.png)

Skontrolujte panel denníka udalostí, aby ste zistili, či nejaká udalosť trvala dlhšie ako 15 ms:

![Edge event log](../../../../translated_images/log.804026979f3707e00eebcfa028b2b5a88cec6292f858767bb6703afba65a7d9c.sk.png)

✅ Spoznajte svoj profiler! Otvorte nástroje pre vývojárov na tejto stránke a zistite, či existujú nejaké úzke miesta. Ktorý asset sa načítava najpomalšie? Najrýchlejšie?

## Na čo sa zamerať pri profilovaní

Spustenie profileru je len začiatok - skutočná zručnosť spočíva v tom, vedieť, čo vám tie farebné grafy vlastne hovoria. Nebojte sa, naučíte sa ich čítať. Skúsení vývojári sa naučili rozpoznať varovné signály skôr, než sa stanú plnohodnotnými problémami.

Poďme hovoriť o obvyklých podozrivých - problémoch s výkonom, ktoré sa často vkrádajú do webových projektov. Rovnako ako Marie Curie musela starostlivo monitorovať úrovne radiácie vo svojom laboratóriu, musíme sledovať určité vzory, ktoré naznačujú, že sa problémy blížia. Ich včasné zachytenie vám (a vašim používateľom) ušetrí veľa frustrácie.

**Veľkosti assetov**: Webové stránky sa v priebehu rokov stávajú "ťažšími" a veľa tejto extra váhy pochádza z obrázkov. Je to, akoby sme do našich digitálnych kufrov balili stále viac a viac.

✅ Pozrite si [Internetový archív](https://httparchive.org/reports/page-weight), aby ste videli, ako sa veľkosti stránok časom zväčšovali - je to dosť odhaľujúce.

**Ako udržať vaše assety optimalizované:**
- **Komprimujte** obrázky! Moderné formáty ako WebP môžu dramaticky znížiť veľkosť súborov
- **Poskytujte** správnu veľkosť obrázkov pre každé zariadenie - nie je potrebné posielať obrovské obrázky pre desktop na telefóny
- **Minimalizujte** váš CSS a JavaScript - každý bajt sa počíta
- **Používajte** lazy loading, aby sa obrázky stiahli iba vtedy, keď sa k nim používateľ skutočne posunie

**Prechody DOM**: Prehliadač musí vytvoriť svoj Document Object Model na základe kódu, ktorý napíšete, takže je v záujme dobrého výkonu stránky udržiavať značky minimálne, používať a štýlovať len to, čo stránka potrebuje. Napríklad nadbytočný CSS spojený so stránkou by mohol byť optimalizovaný; štýly, ktoré sa používajú iba na jednej stránke, nemusia byť zahrnuté v hlavnom štýle.

**Kľúčové stratégie pre optimalizáciu DOM:**
- **Minimalizujte** počet HTML prvkov a úrovní vnorenia
- **Odstráňte** nepoužívané pravidlá CSS a efektívne konsolidujte štýlové súbory
- **Organizujte** CSS tak, aby sa načítalo len to, čo je potrebné pre každú stránku
- **Štruktúrujte** HTML semanticky pre lepšie spracovanie prehliadačom

**JavaScript**: Každý vývojár JavaScriptu by mal sledovať 'render-blocking' skripty, ktoré sa musia načítať predtým, než môže byť zvyšok DOM prechádzaný a vykreslený do prehliadača. Zvážte použitie `defer` s vašimi inline skriptami (ako je to urobené v module Terrarium).

**Moderné techniky optimalizácie JavaScriptu:**
- **Používajte** atribút `defer` na načítanie skriptov po parsovaní DOM
- **Implementujte** rozdelenie kódu na načítanie iba potrebného JavaScriptu
- **Aplikujte** lazy loading pre nekritickú funkcionalitu
- **Minimalizujte** používanie ťažkých knižníc a frameworkov, ak je to možné

✅ Vyskúšajte niektoré stránky na [webovej stránke na testovanie rýchlosti stránok](https://www.webpagetest.org/), aby ste sa dozvedeli viac o bežných kontrolách, ktoré sa vykonávajú na určenie výkonu stránok.

Teraz, keď máte predstavu o tom, ako prehliadač vykresľuje assety, ktoré mu posielate, pozrime sa na posledné veci, ktoré musíte urobiť, aby ste dokončili svoje rozšírenie:

### Vytvorte funkciu na výpočet farby

Teraz vytvoríme funkciu, ktorá premení číselné údaje na zmysluplné farby. Myslite na to ako na systém semaforu - zelená pre čistú energiu, červená pre vysokú uhlíkovú intenzitu.

Táto funkcia vezme údaje o CO2 z nášho API a určí, ktorá farba najlepšie reprezentuje environmentálny dopad. Je to podobné ako keď vedci používajú farebné kódovanie v tepelných mapách na vizualizáciu zložitých vzorov údajov - od teplôt oceánov po formovanie hviezd. Pridajme to do `/src/index.js`, hneď za tými premennými `const`, ktoré sme nastavili skôr:

```javascript
function calculateColor(value) {
	// Define CO2 intensity scale (grams per kWh)
	const co2Scale = [0, 150, 600, 750, 800];
	// Corresponding colors from green (clean) to dark brown (high carbon)
	const colors = ['#2AA364', '#F5EB4D', '#9E4229', '#381D02', '#381D02'];

	// Find the closest scale value to our input
	const closestNum = co2Scale.sort((a, b) => {
		return Math.abs(a - value) - Math.abs(b - value);
	})[0];
	
	console.log(`${value} is closest to ${closestNum}`);
	
	// Find the index for color mapping
	const num = (element) => element > closestNum;
	const scaleIndex = co2Scale.findIndex(num);

	const closestColor = colors[scaleIndex];
	console.log(scaleIndex, closestColor);

	// Send color update message to background script
	chrome.runtime.sendMessage({ action: 'updateIcon', value: { color: closestColor } });
}
```

**Rozdelenie tejto šikovnej malej funkcie:**
- **Nastaví** dve polia - jedno pre úrovne CO2, druhé pre farby (zelená = čistá, hnedá = špinavá!)
- **Nájde** najbližšiu zhodu s našou skutočnou hodnotou CO2 pomocou šikovného triedenia polí
- **Získa** zodpovedajúcu farbu pomocou metódy findIndex()
- **Odošle** správu na pozadí skriptu Chrome s našou vybranou farbou
- **Používa** šablónové literály (tie spätné úvodzovky) na čistejšie formátovanie reťazcov
- **Udržuje** všetko organizované pomocou deklarácií const

API `chrome.runtime` [API](https://developer.chrome.com/extensions/runtime) je ako nervový systém vášho rozšírenia - spravuje všetku komunikáciu a úlohy na pozadí:

> "Použite API chrome.runtime na získanie stránky na pozadí, vrátenie podrobností o manifeste a počúvanie a reagovanie na udalosti v životnom cykle aplikácie alebo rozšírenia. Toto API môžete tiež použiť na konverziu relatívnej cesty URL na plne kvalifikované URL."

**Prečo je API Chrome Runtime tak užitočné:**
- **Umožňuje** rôznym častiam vášho rozšírenia komunikovať medzi sebou
- **Spravuje** prácu na pozadí bez zamrznutia používateľského rozhrania
- **Riadi** udalosti životného cyklu vášho rozšírenia
- **Uľahčuje** odosielanie správ medzi skriptmi

✅ Ak vyvíjate toto rozšírenie pre prehliadač Edge, môže vás prekvapiť, že používate API chrome. Novšie verzie prehliadača Edge bežia na engine prehliadača Chromium, takže môžete využiť tieto nástroje.

> **Tip**: Ak chcete profilovať rozšírenie prehliadača, spustite nástroje pre vývojárov priamo z rozšírenia, pretože ide o samostatnú inštanciu prehliadača. Tým získate prístup k špecifickým metrikám výkonu rozšírenia.

### Nastavte predvolenú farbu ikony

Skôr než začneme načítavať skutočné údaje, dajme nášmu rozšíreniu východiskový bod. Nikto nemá rád pohľad na prázdnu alebo nefunkčne vyzerajúcu ikonu. Začneme zelenou farbou, aby používatelia vedeli, že rozšírenie funguje od okamihu, keď ho nainštalujú.

V funkcii `init()` nastavme túto predvolenú zelenú ikonu:

```javascript
chrome.runtime.sendMessage({
	action: 'updateIcon',
	value: {
		color: 'green',
	},
});
```

**Čo táto inicializácia dosahuje:**
- **Nastaví** neutrálnu zelenú farbu ako predvolený stav
- **Poskytne** okamžitú vizuálnu spätnú väzbu pri načítaní rozšírenia
- **Zavádza** komunikačný vzor so skriptom na pozadí
- **Zabezpečuje**, že používatelia vidia funkčné rozšírenie pred načítaním údajov

### Zavolajte funkciu, vykonajte volanie

Teraz spojme všetko dohromady, aby sa pri príchode nových údajov o CO2 vaša ikona automaticky aktualizovala na správnu farbu. Je to ako spojiť posledný obvod v elektronickom zariadení - zrazu všetky jednotlivé komponenty fungujú ako jeden systém.

Pridajte tento riadok hneď po získaní údajov o CO2 z API:

```javascript
// After retrieving CO2 data from the API
// let CO2 = data.data[0].intensity.actual;
calculateColor(CO2);
```

**Táto integrácia dosahuje:**
- **Spojí** tok údajov z API so systémom vizuálnych indikátorov
- **Spustí** aktualizácie ikon automaticky pri príchode nových údajov
- **Zabezpečí** vizuálnu spätnú väzbu v reálnom čase na základe aktuálnej uhlíkovej intenzity
- **Udržiava** oddelenie zodpovedností medzi načítavaním údajov a logikou zobrazenia

A nakoniec, v `/dist/background.js`, pridajte poslucháča pre tieto volania akcií na pozadí:

```javascript
// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
	if (msg.action === 'updateIcon') {
		chrome.action.setIcon({ imageData: drawIcon(msg.value) });
	}
});

// Draw dynamic icon using Canvas API
// Borrowed from energy lollipop extension - nice feature!
function drawIcon(value) {
	// Create an offscreen canvas for better performance
	const canvas = new OffscreenCanvas(200, 200);
	const context = canvas.getContext('2d');

	// Draw a colored circle representing carbon intensity
	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	// Return the image data for the browser icon
	return context.getImageData(50, 50, 100, 100);
}
```

**Čo tento skript na pozadí robí:**
- **Počúva** správy z vášho hlavného skriptu (ako recepčná prijímajúca hovory)
- **Spracováva** požiadavky 'updateIcon' na zmenu ikony na paneli nástrojov
- **Vytvára** nové ikony za behu pomocou Canvas API
- **Kreslí** jednoduchý farebný kruh, ktorý zobrazuje aktuálnu uhlíkovú intenzitu
- **Aktualizuje** váš panel nástrojov prehliadača s novou ikonou
- **Používa** OffscreenCanvas pre hladký výkon (bez blokovania UI)

✅ Viac o Canvas API sa dozviete v [lekci
Tu je zaujímavá detektívna misia: vyberte si niekoľko open source webových stránok, ktoré existujú už roky (napríklad Wikipedia, GitHub alebo Stack Overflow) a preskúmajte ich históriu commitov. Dokážete nájsť, kde vykonali zlepšenia výkonu? Aké problémy sa stále opakovali?

**Váš prístup k vyšetrovaniu:**
- **Vyhľadajte** v commit správach slová ako "optimalizovať," "výkon" alebo "rýchlejšie"
- **Hľadajte** vzory - opravujú stále rovnaké typy problémov?
- **Identifikujte** bežné príčiny, ktoré spomaľujú webové stránky
- **Zdieľajte** svoje zistenia - ostatní vývojári sa učia z príkladov z reálneho sveta

## Kvíz po prednáške

[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/28)

## Prehľad a samostatné štúdium

Zvážte prihlásenie sa na [newsletter o výkone](https://perf.email/)

Preskúmajte niektoré spôsoby, akými prehliadače hodnotia výkon webu, tým, že si prejdete záložky výkonu vo svojich webových nástrojoch. Nájdete nejaké zásadné rozdiely?

## Zadanie

[Analyzujte stránku z hľadiska výkonu](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.