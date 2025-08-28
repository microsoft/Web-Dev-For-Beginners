<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-28T04:35:31+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "cs"
}
-->
# Vytváření přístupných webových stránek

![Vše o přístupnosti](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.cs.png)  
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz před lekcí  
[Kvíz před lekcí](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> Síla webu spočívá v jeho univerzálnosti. Přístup pro každého, bez ohledu na postižení, je zásadní aspekt.  
>  
> \- Sir Timothy Berners-Lee, ředitel W3C a vynálezce World Wide Webu  

Tento citát dokonale zdůrazňuje důležitost vytváření přístupných webových stránek. Aplikace, která není přístupná všem, je ze své podstaty vylučující. Jako weboví vývojáři bychom měli mít přístupnost vždy na paměti. Pokud se na ni zaměříte již od začátku, budete na dobré cestě k tomu, aby vaše stránky byly přístupné pro všechny. V této lekci se naučíte, jaké nástroje vám mohou pomoci zajistit přístupnost vašich webových prostředků a jak přístupnost zohlednit při vývoji.  

> Tuto lekci si můžete projít na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Nástroje, které můžete použít

### Čtečky obrazovky

Jedním z nejznámějších nástrojů pro přístupnost jsou čtečky obrazovky.

[Čtečky obrazovky](https://en.wikipedia.org/wiki/Screen_reader) jsou běžně používané klienty pro osoby se zrakovým postižením. Stejně jako se snažíme zajistit, aby prohlížeč správně zobrazoval informace, které chceme sdílet, musíme také zajistit, aby čtečka obrazovky dělala totéž.

V nejzákladnější podobě čtečka obrazovky čte stránku odshora dolů nahlas. Pokud je vaše stránka pouze textová, čtečka předá informace podobně jako prohlížeč. Webové stránky však zřídka obsahují pouze text; obvykle obsahují odkazy, grafiku, barvy a další vizuální prvky. Je třeba dbát na to, aby čtečka obrazovky tyto informace správně interpretovala.

Každý webový vývojář by se měl seznámit s čtečkou obrazovky. Jak bylo uvedeno výše, je to klient, který vaši uživatelé budou používat. Stejně jako znáte fungování prohlížeče, měli byste se naučit, jak funguje čtečka obrazovky. Naštěstí jsou čtečky obrazovky součástí většiny operačních systémů.

Některé prohlížeče mají také vestavěné nástroje a rozšíření, která dokážou číst text nahlas nebo poskytovat základní navigační funkce, například [tyto nástroje zaměřené na přístupnost v prohlížeči Edge](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Tyto nástroje jsou také důležité, ale fungují velmi odlišně od čteček obrazovky a neměly by být zaměňovány za nástroje pro testování čteček obrazovky.

✅ Vyzkoušejte čtečku obrazovky a čtečku textu v prohlížeči. Ve Windows je standardně zahrnuta [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon), dále lze nainstalovat [JAWS](https://webaim.org/articles/jaws/) a [NVDA](https://www.nvaccess.org/about-nvda/). Na macOS a iOS je standardně nainstalován [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10).

### Přiblížení (Zoom)

Dalším nástrojem, který běžně používají lidé se zrakovým postižením, je přiblížení. Nejzákladnější typ přiblížení je statický zoom, ovládaný pomocí `Control + znaménko plus (+)` nebo snížením rozlišení obrazovky. Tento typ přiblížení zvětší celou stránku, takže použití [responsivního designu](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) je důležité pro zajištění dobrého uživatelského zážitku při vyšších úrovních přiblížení.

Další typ přiblížení spoléhá na specializovaný software, který zvětšuje jednu oblast obrazovky a posouvá ji, podobně jako při použití skutečné lupy. Ve Windows je vestavěný [Lupa](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198), zatímco [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) je software třetí strany s více funkcemi a širší uživatelskou základnou. Na macOS a iOS je vestavěný software pro zvětšení obrazovky nazvaný [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Kontrola kontrastu

Barvy na webových stránkách je třeba pečlivě vybírat, aby vyhovovaly potřebám uživatelů s barvoslepostí nebo osob, které mají potíže s viděním barev s nízkým kontrastem.

✅ Otestujte oblíbenou webovou stránku na použití barev pomocí rozšíření prohlížeče, například [kontroloru kontrastu WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Co jste zjistili?

### Lighthouse

V oblasti vývojářských nástrojů vašeho prohlížeče najdete nástroj Lighthouse. Tento nástroj je důležitý pro získání prvního pohledu na přístupnost (a další analýzy) webové stránky. I když není vhodné spoléhat se výhradně na Lighthouse, skóre 100 % je velmi užitečné jako základní ukazatel.

✅ Najděte Lighthouse v panelu vývojářských nástrojů vašeho prohlížeče a spusťte analýzu na libovolné stránce. Co jste zjistili?

## Navrhování pro přístupnost

Přístupnost je poměrně rozsáhlé téma. Naštěstí existuje mnoho zdrojů, které vám mohou pomoci.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

I když nebudeme schopni pokrýt všechny aspekty vytváření přístupných stránek, níže jsou uvedeny některé základní principy, které byste měli implementovat. Navrhování přístupné stránky od začátku je **vždy** jednodušší než zpětné úpravy existující stránky.

## Zásady dobrého zobrazení

### Bezpečné barevné palety

Lidé vidí svět různými způsoby, což zahrnuje i barvy. Při výběru barevného schématu pro váš web byste měli zajistit, že bude přístupné pro všechny. Skvělým [nástrojem pro generování barevných palet je Color Safe](http://colorsafe.co/).

✅ Najděte webovou stránku, která má velké problémy s použitím barev. Proč?

### Používejte správné HTML

Pomocí CSS a JavaScriptu je možné vytvořit jakýkoli prvek, který vypadá jako jakýkoli typ ovládacího prvku. `<span>` by mohl být použit k vytvoření `<button>` a `<b>` by se mohl stát hypertextovým odkazem. I když to může být považováno za jednodušší pro stylování, čtečce obrazovky to nic neřekne. Používejte správné HTML při vytváření ovládacích prvků na stránce. Pokud chcete hypertextový odkaz, použijte `<a>`. Používání správného HTML pro správný ovládací prvek se nazývá využívání sémantického HTML.

✅ Navštivte libovolnou webovou stránku a zjistěte, zda designéři a vývojáři používají HTML správně. Najdete tlačítko, které by mělo být odkazem? Tip: Klikněte pravým tlačítkem a vyberte 'Zobrazit zdroj stránky' ve vašem prohlížeči, abyste se podívali na základní kód.

### Vytvořte popisnou hierarchii nadpisů

Uživatelé čteček obrazovky [se silně spoléhají na nadpisy](https://webaim.org/projects/screenreadersurvey8/#finding) při hledání informací a navigaci na stránce. Psaní popisného obsahu nadpisů a používání sémantických značek nadpisů je důležité pro vytvoření snadno navigovatelné stránky pro uživatele čteček obrazovky.

### Používejte dobré vizuální nápovědy

CSS nabízí úplnou kontrolu nad vzhledem jakéhokoli prvku na stránce. Můžete vytvořit textová pole bez obrysu nebo hypertextové odkazy bez podtržení. Bohužel odstranění těchto nápověd může ztížit rozpoznání typu ovládacího prvku pro někoho, kdo na nich závisí.

## Důležitost textu odkazů

Hypertextové odkazy jsou klíčové pro navigaci na webu. Proto je důležité zajistit, aby čtečka obrazovky mohla správně číst odkazy, což umožní všem uživatelům navigovat na vašem webu.

### Čtečky obrazovky a odkazy

Jak byste očekávali, čtečky obrazovky čtou text odkazů stejným způsobem jako jakýkoli jiný text na stránce. S tímto na paměti se může zdát, že níže uvedený text je zcela přijatelný.

> Malý tučňák, někdy známý jako pohádkový tučňák, je nejmenší tučňák na světě. [Klikněte zde](https://en.wikipedia.org/wiki/Little_penguin) pro více informací.

> Malý tučňák, někdy známý jako pohádkový tučňák, je nejmenší tučňák na světě. Navštivte https://en.wikipedia.org/wiki/Little_penguin pro více informací.

> **NOTE** Jak se brzy dozvíte, nikdy byste neměli vytvářet odkazy, které vypadají jako výše uvedené.

Pamatujte, že čtečky obrazovky jsou jiné rozhraní než prohlížeče a mají jinou sadu funkcí.

### Problém s použitím URL

Čtečky obrazovky čtou text. Pokud se v textu objeví URL, čtečka obrazovky přečte URL. Obecně řečeno, URL nepředává smysluplné informace a může znít nepříjemně. Možná jste to zažili, pokud vám telefon někdy nahlas přečetl textovou zprávu s URL.

### Problém s "klikněte zde"

Čtečky obrazovky mají také schopnost číst pouze hypertextové odkazy na stránce, podobně jako by vidící osoba procházela stránku a hledala odkazy. Pokud je text odkazu vždy "klikněte zde", uživatel uslyší pouze "klikněte zde, klikněte zde, klikněte zde, klikněte zde, klikněte zde, ..." Všechny odkazy jsou nyní nerozlišitelné.

### Dobrý text odkazu

Dobrý text odkazu stručně popisuje, co je na druhé straně odkazu. V uvedeném příkladu o malých tučňácích odkazuje odkaz na stránku Wikipedie o tomto druhu. Fráze *malý tučňák* by byla ideálním textem odkazu, protože jasně říká, co se uživatel dozví, pokud na odkaz klikne - malý tučňák.

> [Malý tučňák](https://en.wikipedia.org/wiki/Little_penguin), někdy známý jako pohádkový tučňák, je nejmenší tučňák na světě.

✅ Procházejte web několik minut a najděte stránky, které používají nejasné strategie odkazování. Porovnejte je s jinými, lépe propojenými stránkami. Co jste zjistili?

#### Poznámky k vyhledávačům

Jako bonus za zajištění přístupnosti vašeho webu pomůžete také vyhledávačům navigovat na vašem webu. Vyhledávače používají text odkazů k pochopení témat stránek. Používání dobrého textu odkazů tedy pomáhá všem!

### ARIA

Představte si následující stránku:

| Produkt      | Popis             | Objednat     |
| ------------ | ----------------- | ------------ |
| Widget       | [Popis](../../../../1-getting-started-lessons/3-accessibility/')      | [Objednat](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [Popis](../../../../1-getting-started-lessons/3-accessibility/')      | [Objednat](../../../../1-getting-started-lessons/3-accessibility/') |

V tomto příkladu dává smysl duplikovat text "popis" a "objednat" pro někoho, kdo používá prohlížeč. Uživatel čtečky obrazovky by však slyšel pouze slova *popis* a *objednat* opakovaně bez kontextu.

Pro podporu těchto scénářů HTML podporuje sadu atributů známých jako [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Tyto atributy umožňují poskytovat čtečkám obrazovky další informace.

> **NOTE**: Stejně jako u mnoha aspektů HTML se podpora prohlížečů a čteček obrazovky může lišit. Většina hlavních klientů však atributy ARIA podporuje.

Pomocí `aria-label` můžete popsat odkaz, když formát stránky neumožňuje jinak. Popis pro widget by mohl být nastaven jako:

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Obecně platí, že používání sémantického označení, jak bylo popsáno výše, má přednost před použitím ARIA, ale někdy neexistuje sémantický ekvivalent pro různé HTML widgety. Dobrým příkladem je stromová struktura. Pro tento prvek neexistuje HTML ekvivalent, takže generický `<div>` označíte správnou rolí a hodnotami ARIA. [Dokumentace MDN o ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) obsahuje další užitečné informace.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Obrázky

Je samozřejmé, že čtečky obrazovky nemohou automaticky přečíst, co je na obrázku. Zajištění přístupnosti obrázků nevyžaduje mnoho práce - právě k tomu slouží atribut `alt`. Všechny smysluplné obrázky by měly mít atribut `alt`, který popisuje, co představují.  
Obrázky, které jsou čistě dekorativní, by měly mít atribut `alt` nastavený na prázdný řetězec: `alt=""`. Tím se zabrání tomu, aby čtečky obrazovky zbytečně oznamovaly dekorativní obrázek.

✅ Jak byste očekávali, vyhledávače také nemohou pochopit, co je na obrázku. Používají také text alt. Takže opět, zajištění přístupnosti vaší stránky přináší další výhody!

## Klávesnice

Někteří uživatelé nemohou používat myš nebo trackpad a spoléhají se na interakce pomocí klávesnice, aby se mohli pohybovat mezi jednotlivými prvky. Je důležité, aby váš web prezentoval obsah v logickém pořadí, aby uživatel klávesnice mohl přistupovat ke každému interaktivnímu prvku při pohybu dolů dokumentem. Pokud vytváříte své webové stránky s použitím sémantického označení a používáte CSS k úpravě jejich vizuálního rozvržení, váš web by měl být navigovatelný pomocí klávesnice, ale je důležité tento aspekt manuálně otestovat. Další informace o [strategiích navigace pomocí klávesnice](https://webaim.org/techniques/keyboard/).

✅ Navštivte libovolnou webovou stránku a zkuste ji procházet pouze pomocí klávesnice. Co funguje, co nefunguje? Proč?

## Shrnutí

Web přístupný pouze některým není skutečně "celosvětový web". Nejlepší způsob, jak zajistit, že vámi vytvořené stránky budou přístupné, je začlenit osvědčené postupy přístupnosti již od začátku. I když to vyžaduje další kroky, začlenění těchto dovedností do vaše
Mnoho vlád má zákony týkající se požadavků na přístupnost. Přečtěte si o zákonech o přístupnosti ve vaší zemi. Co je zahrnuto a co není? Příkladem může být [tato vládní webová stránka](https://accessibility.blog.gov.uk/).

## Zadání

[Analyzujte nepřístupný web](assignment.md)

Poděkování: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) od Instrument

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádné nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.