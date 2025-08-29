<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2326d04e194a10aa760b51f5e5a1f61d",
  "translation_date": "2025-08-29T10:47:15+00:00",
  "source_file": "5-browser-extension/1-about-browsers/README.md",
  "language_code": "cs"
}
-->
# Projekt rozšíření prohlížeče, část 1: Vše o prohlížečích

![Sketchnote prohlížeče](../../../../translated_images/browser.60317c9be8b7f84adce43e30bff8d47a1ae15793beab762317b2bc6b74337c1a.cs.jpg)
> Sketchnote od [Wassim Chegham](https://dev.to/wassimchegham/ever-wondered-what-happens-when-you-type-in-a-url-in-an-address-bar-in-a-browser-3dob)

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/23)

### Úvod

Rozšíření prohlížeče přidávají do prohlížeče další funkce. Než však začnete jedno vytvářet, měli byste se nejprve dozvědět něco o tom, jak prohlížeče fungují.

### O prohlížeči

V této sérii lekcí se naučíte, jak vytvořit rozšíření prohlížeče, které bude fungovat v prohlížečích Chrome, Firefox a Edge. V této části zjistíte, jak prohlížeče fungují, a vytvoříte základní strukturu rozšíření prohlížeče.

Co je to vlastně prohlížeč? Je to softwarová aplikace, která umožňuje koncovému uživateli přistupovat k obsahu ze serveru a zobrazovat jej na webových stránkách.

✅ Trocha historie: první prohlížeč se jmenoval 'WorldWideWeb' a byl vytvořen Sirem Timothym Berners-Leem v roce 1990.

![rané prohlížeče](../../../../translated_images/earlybrowsers.d984b711cdf3a42ddac919d46c4b5ca7232f68ccfbd81395e04e5a64c0015277.cs.jpg)
> Některé rané prohlížeče, via [Karen McGrane](https://www.slideshare.net/KMcGrane/week-4-ixd-history-personal-computing)

Když se uživatel připojí k internetu pomocí adresy URL (Uniform Resource Locator), obvykle prostřednictvím Hypertext Transfer Protocol pomocí adresy `http` nebo `https`, prohlížeč komunikuje s webovým serverem a načte webovou stránku.

V tomto okamžiku zobrazovací modul prohlížeče stránku vykreslí na zařízení uživatele, což může být mobilní telefon, stolní počítač nebo notebook.

Prohlížeče také dokážou ukládat obsah do mezipaměti, takže jej není nutné pokaždé načítat ze serveru. Mohou zaznamenávat historii prohlížení uživatele, ukládat 'cookies', což jsou malé datové soubory obsahující informace o aktivitě uživatele, a mnoho dalšího.

Je velmi důležité si uvědomit, že prohlížeče nejsou všechny stejné! Každý prohlížeč má své silné a slabé stránky a profesionální webový vývojář musí rozumět tomu, jak zajistit, aby webové stránky fungovaly dobře napříč různými prohlížeči. To zahrnuje přizpůsobení malým obrazovkám, jako jsou mobilní telefony, i uživatelům, kteří jsou offline.

Velmi užitečná webová stránka, kterou byste si měli uložit do záložek v jakémkoli prohlížeči, který preferujete, je [caniuse.com](https://www.caniuse.com). Při vytváření webových stránek je velmi užitečné používat seznamy podporovaných technologií na caniuse, abyste mohli co nejlépe podpořit své uživatele.

✅ Jak zjistíte, které prohlížeče jsou nejpopulárnější mezi uživateli vašeho webu? Zkontrolujte svou analytiku – můžete nainstalovat různé analytické nástroje jako součást svého vývojového procesu a ty vám ukážou, které prohlížeče jsou nejvíce používány.

## Rozšíření prohlížeče

Proč byste chtěli vytvořit rozšíření prohlížeče? Je to užitečný nástroj, který si můžete připojit k prohlížeči, když potřebujete rychlý přístup k úkolům, které často opakujete. Například pokud často potřebujete kontrolovat barvy na různých webových stránkách, můžete si nainstalovat rozšíření pro výběr barev. Pokud máte potíže s pamatováním hesel, můžete použít rozšíření pro správu hesel.

Vytváření rozšíření prohlížeče je také zábavné. Obvykle se zaměřují na omezený počet úkolů, které zvládají velmi dobře.

✅ Jaká jsou vaše oblíbená rozšíření prohlížeče? Jaké úkoly plní?

### Instalace rozšíření

Než začnete vytvářet, podívejte se na proces vytváření a nasazení rozšíření prohlížeče. I když se jednotlivé prohlížeče v tomto procesu mírně liší, postup je podobný v Chrome a Firefoxu jako v tomto příkladu pro Edge:

![snímek obrazovky prohlížeče Edge zobrazující otevřenou stránku edge://extensions a otevřené nastavení](../../../../translated_images/install-on-edge.d68781acaf0b3d3dada8b7507cde7a64bf74b7040d9818baaa9070668e819f90.cs.png)

> Poznámka: Ujistěte se, že jste zapnuli režim vývojáře a povolili rozšíření z jiných obchodů.

V podstatě bude proces následující:

- vytvořte své rozšíření pomocí `npm run build` 
- v prohlížeči přejděte na panel rozšíření pomocí tlačítka "Nastavení a další" (ikona `...`) v pravém horním rohu
- pokud jde o novou instalaci, zvolte `load unpacked` pro nahrání nového rozšíření z jeho složky sestavení (v našem případě je to `/dist`) 
- nebo klikněte na `reload`, pokud znovu načítáte již nainstalované rozšíření

✅ Tyto pokyny se týkají rozšíření, která si sami vytvoříte; pro instalaci rozšíření, která byla vydána v obchodě s rozšířeními prohlížeče, byste měli přejít do těchto [obchodů](https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home) a nainstalovat rozšíření dle vašeho výběru.

### Začněte

Vytvoříte rozšíření prohlížeče, které zobrazí uhlíkovou stopu vašeho regionu, včetně spotřeby energie a zdroje této energie. Rozšíření bude obsahovat formulář, který shromáždí API klíč, abyste mohli přistupovat k API CO2 Signal.

**Potřebujete:**

- [API klíč](https://www.co2signal.com/); zadejte svůj e-mail do pole na této stránce a klíč vám bude zaslán
- [kód vašeho regionu](http://api.electricitymap.org/v3/zones) odpovídající [Electricity Map](https://www.electricitymap.org/map) (například v Bostonu používám 'US-NEISO').
- [výchozí kód](../../../../5-browser-extension/start). Stáhněte si složku `start`; budete doplňovat kód v této složce.
- [NPM](https://www.npmjs.com) - NPM je nástroj pro správu balíčků; nainstalujte jej lokálně a balíčky uvedené ve vašem souboru `package.json` budou připraveny k použití ve vašem webovém projektu

✅ Více o správě balíčků se dozvíte v tomto [vynikajícím modulu Learn](https://docs.microsoft.com/learn/modules/create-nodejs-project-dependencies/?WT.mc_id=academic-77807-sagibbon)

Věnujte chvíli prozkoumání kódu:

dist
    -|manifest.json (zde jsou nastaveny výchozí hodnoty)
    -|index.html (zde je HTML front-endu)
    -|background.js (zde je background JS)
    -|main.js (sestavený JS)
src
    -|index.js (zde bude váš JS kód)

✅ Jakmile budete mít svůj API klíč a kód regionu připravený, uložte si je někam do poznámek pro budoucí použití.

### Vytvořte HTML pro rozšíření

Toto rozšíření má dvě zobrazení. Jedno pro zadání API klíče a kódu regionu:

![snímek obrazovky dokončeného rozšíření otevřeného v prohlížeči, zobrazující formulář s poli pro název regionu a API klíč.](../../../../translated_images/1.b6da8c1394b07491afeb6b2a8e5aca73ebd3cf478e27bcc9aeabb187e722648e.cs.png)

A druhé pro zobrazení uhlíkové stopy regionu:

![snímek obrazovky dokončeného rozšíření zobrazující hodnoty uhlíkové stopy a procento fosilních paliv pro region US-NEISO.](../../../../translated_images/2.1dae52ff0804224692cd648afbf2342955d7afe3b0101b617268130dfb427f55.cs.png)

Začněme vytvořením HTML pro formulář a jeho stylováním pomocí CSS.

Ve složce `/dist` vytvořte formulář a oblast pro výsledky. V souboru `index.html` vyplňte vyznačenou oblast formuláře:

```HTML
<form class="form-data" autocomplete="on">
	<div>
		<h2>New? Add your Information</h2>
	</div>
	<div>
		<label for="region">Region Name</label>
		<input type="text" id="region" required class="region-name" />
	</div>
	<div>
		<label for="api">Your API Key from tmrow</label>
		<input type="text" id="api" required class="api-key" />
	</div>
	<button class="search-btn">Submit</button>
</form>	
```
Toto je formulář, kde budou vaše uložené informace zadány a uloženy do místního úložiště.

Dále vytvořte oblast pro výsledky; pod poslední značku formuláře přidejte několik divů:

```HTML
<div class="result">
	<div class="loading">loading...</div>
	<div class="errors"></div>
	<div class="data"></div>
	<div class="result-container">
		<p><strong>Region: </strong><span class="my-region"></span></p>
		<p><strong>Carbon Usage: </strong><span class="carbon-usage"></span></p>
		<p><strong>Fossil Fuel Percentage: </strong><span class="fossil-fuel"></span></p>
	</div>
	<button class="clear-btn">Change region</button>
</div>
```
V tomto okamžiku můžete zkusit sestavení. Ujistěte se, že jste nainstalovali závislosti balíčků tohoto rozšíření:

```
npm install
```

Tento příkaz použije npm, správce balíčků Node, k instalaci webpacku pro proces sestavení vašeho rozšíření. Výstup tohoto procesu můžete vidět v `/dist/main.js` - uvidíte, že kód byl sloučen.

Prozatím by se mělo rozšíření sestavit a pokud jej nasadíte do Edge jako rozšíření, zobrazí se vám formulář úhledně zobrazený.

Gratulujeme, udělali jste první kroky k vytvoření rozšíření prohlížeče. V dalších lekcích jej uděláte funkčnějším a užitečnějším.

---

## 🚀 Výzva

Podívejte se na obchod s rozšířeními prohlížeče a nainstalujte si jedno do svého prohlížeče. Můžete zkoumat jeho soubory zajímavými způsoby. Co objevíte?

## Kvíz po lekci

[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/24)

## Přehled a samostudium

V této lekci jste se dozvěděli něco o historii webového prohlížeče; využijte této příležitosti k tomu, abyste se dozvěděli více o tom, jak si vynálezci World Wide Webu představovali jeho využití, přečtením dalších informací o jeho historii. Některé užitečné stránky zahrnují:

[Historie webových prohlížečů](https://www.mozilla.org/firefox/browsers/browser-history/)

[Historie webu](https://webfoundation.org/about/vision/history-of-the-web/)

[Rozhovor s Timem Berners-Leem](https://www.theguardian.com/technology/2019/mar/12/tim-berners-lee-on-30-years-of-the-web-if-we-dream-a-little-we-can-get-the-web-we-want)

## Zadání 

[Upravte styl svého rozšíření](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o co největší přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.