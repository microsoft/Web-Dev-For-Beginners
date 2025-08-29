<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f0c88c3e2cefa8952d356f802b1e47ca",
  "translation_date": "2025-08-29T11:20:59+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "sk"
}
-->
# Vytváranie prístupných webových stránok

![Všetko o prístupnosti](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.sk.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz pred prednáškou
[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/)

> Sila webu spočíva v jeho univerzálnosti. Prístup pre každého, bez ohľadu na postihnutie, je nevyhnutným aspektom.
>
> \- Sir Timothy Berners-Lee, riaditeľ W3C a vynálezca World Wide Web

Tento citát dokonale zdôrazňuje dôležitosť vytvárania prístupných webových stránok. Aplikácia, ktorá nie je prístupná pre všetkých, je zo svojej podstaty vylučujúca. Ako weboví vývojári by sme mali mať prístupnosť vždy na pamäti. Ak sa na to zameriate už od začiatku, budete na dobrej ceste zabezpečiť, že všetci budú mať prístup k stránkam, ktoré vytvoríte. V tejto lekcii sa naučíte o nástrojoch, ktoré vám môžu pomôcť zabezpečiť prístupnosť vašich webových zdrojov, a ako stavať s ohľadom na prístupnosť.

> Túto lekciu si môžete prejsť na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Nástroje, ktoré môžete použiť

### Čítačky obrazovky

Jedným z najznámejších nástrojov na prístupnosť sú čítačky obrazovky.

[Čítačky obrazovky](https://en.wikipedia.org/wiki/Screen_reader) sú bežne používané klientmi so zrakovým postihnutím. Rovnako ako sa snažíme zabezpečiť, aby prehliadač správne sprostredkoval informácie, ktoré chceme zdieľať, musíme zabezpečiť, aby to isté dokázala aj čítačka obrazovky.

V základnej podobe čítačka obrazovky číta stránku odhora nadol nahlas. Ak je vaša stránka čisto textová, čítačka sprostredkuje informácie podobne ako prehliadač. Samozrejme, webové stránky zriedka obsahujú iba text; obsahujú odkazy, grafiku, farby a ďalšie vizuálne prvky. Je potrebné dbať na to, aby tieto informácie boli čítačkou obrazovky správne interpretované.

Každý webový vývojár by sa mal oboznámiť s čítačkou obrazovky. Ako bolo uvedené vyššie, je to klient, ktorý vaši používatelia využijú. Rovnako ako poznáte fungovanie prehliadača, mali by ste sa naučiť, ako funguje čítačka obrazovky. Našťastie sú čítačky obrazovky zabudované vo väčšine operačných systémov.

Niektoré prehliadače majú tiež zabudované nástroje a rozšírenia, ktoré dokážu čítať text nahlas alebo poskytovať základné navigačné funkcie, ako napríklad [tieto nástroje zamerané na prístupnosť v prehliadači Edge](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Tieto nástroje sú tiež dôležité, ale fungujú veľmi odlišne od čítačiek obrazovky a nemali by byť považované za nástroje na testovanie čítačiek obrazovky.

✅ Vyskúšajte čítačku obrazovky a čítačku textu v prehliadači. Vo Windows je predvolene zahrnutý [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon), a môžete si nainštalovať aj [JAWS](https://webaim.org/articles/jaws/) alebo [NVDA](https://www.nvaccess.org/about-nvda/). Na macOS a iOS je predvolene nainštalovaný [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10).

### Priblíženie (Zoom)

Ďalším nástrojom, ktorý často používajú ľudia so zrakovým postihnutím, je priblíženie. Najzákladnejší typ priblíženia je statické priblíženie, ovládané pomocou `Control + znamienko plus (+)` alebo znížením rozlíšenia obrazovky. Tento typ priblíženia spôsobí, že sa celá stránka zväčší, takže použitie [responzívneho dizajnu](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) je dôležité na zabezpečenie dobrého používateľského zážitku pri zvýšených úrovniach priblíženia.

Ďalší typ priblíženia využíva špecializovaný softvér na zväčšenie jednej oblasti obrazovky a posúvanie, podobne ako pri použití skutočnej lupy. Vo Windows je zabudovaný [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198), a [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) je softvér tretích strán s viacerými funkciami a väčšou používateľskou základňou. Na macOS a iOS je zabudovaný softvér na zväčšenie s názvom [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Kontrola kontrastu

Farby na webových stránkach musia byť starostlivo vybrané, aby vyhovovali potrebám používateľov s farbosleposťou alebo ľudí, ktorí majú problémy so zrakom pri nízkom kontraste farieb.

✅ Otestujte webovú stránku, ktorú radi používate, z hľadiska použitia farieb pomocou rozšírenia prehliadača, ako je [kontrola kontrastu WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Čo ste sa naučili?

### Lighthouse

V oblasti nástrojov pre vývojárov vo vašom prehliadači nájdete nástroj Lighthouse. Tento nástroj je dôležitý na získanie prvého pohľadu na prístupnosť (ako aj iné analýzy) webovej stránky. Aj keď sa na Lighthouse nemožno spoliehať výlučne, skóre 100 % je veľmi užitočné ako základ.

✅ Nájdite Lighthouse v paneli nástrojov pre vývojárov vášho prehliadača a spustite analýzu na akejkoľvek stránke. Čo ste zistili?

## Navrhovanie s ohľadom na prístupnosť

Prístupnosť je pomerne rozsiahla téma. Na pomoc existuje množstvo dostupných zdrojov.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Aj keď nebudeme schopní pokryť každý aspekt vytvárania prístupných stránok, nižšie sú uvedené niektoré základné princípy, ktoré budete chcieť implementovať. Navrhovanie prístupnej stránky od začiatku je **vždy** jednoduchšie, ako sa vracať k existujúcej stránke a robiť ju prístupnou.

## Dobré princípy zobrazenia

### Bezpečné farebné palety

Ľudia vidia svet rôznymi spôsobmi, a to zahŕňa aj farby. Pri výbere farebnej schémy pre vašu stránku by ste mali zabezpečiť, že bude prístupná pre všetkých. Skvelým [nástrojom na generovanie farebných paliet je Color Safe](http://colorsafe.co/).

✅ Identifikujte webovú stránku, ktorá má veľmi problematické použitie farieb. Prečo?

### Používajte správne HTML

Pomocou CSS a JavaScriptu je možné akýkoľvek prvok vyzerať ako akýkoľvek typ ovládacieho prvku. `<span>` by sa mohol použiť na vytvorenie `<button>`, a `<b>` by sa mohol stať hypertextovým odkazom. Aj keď by to mohlo byť považované za jednoduchšie na štýlovanie, čítačke obrazovky to nič nehovorí. Používajte vhodné HTML pri vytváraní ovládacích prvkov na stránke. Ak chcete hypertextový odkaz, použite `<a>`. Používanie správneho HTML pre správny ovládací prvok sa nazýva používanie sémantického HTML.

✅ Prejdite na akúkoľvek webovú stránku a zistite, či dizajnéri a vývojári používajú HTML správne. Nájdete tlačidlo, ktoré by malo byť odkazom? Tip: kliknite pravým tlačidlom myši a vyberte 'Zobraziť zdroj stránky' vo vašom prehliadači, aby ste si pozreli základný kód.

### Vytvorte popisnú hierarchiu nadpisov

Používatelia čítačiek obrazovky [sa veľmi spoliehajú na nadpisy](https://webaim.org/projects/screenreadersurvey8/#finding) pri hľadaní informácií a navigácii na stránke. Písanie popisného obsahu nadpisov a používanie sémantických značiek nadpisov je dôležité pre vytvorenie ľahko navigovateľnej stránky pre používateľov čítačiek obrazovky.

### Používajte dobré vizuálne stopy

CSS ponúka úplnú kontrolu nad vzhľadom akéhokoľvek prvku na stránke. Môžete vytvoriť textové polia bez obrysu alebo hypertextové odkazy bez podčiarknutia. Bohužiaľ, odstránenie týchto stôp môže sťažiť niekomu, kto sa na ne spolieha, rozpoznať typ ovládacieho prvku.

## Dôležitosť textu odkazov

Hypertextové odkazy sú jadrom navigácie na webe. Preto zabezpečenie, že čítačka obrazovky dokáže správne čítať odkazy, umožňuje všetkým používateľom navigovať na vašej stránke.

### Čítačky obrazovky a odkazy

Ako by ste očakávali, čítačky obrazovky čítajú text odkazov rovnakým spôsobom, ako čítajú akýkoľvek iný text na stránke. S týmto na pamäti sa text uvedený nižšie môže zdať úplne prijateľný.

> Malý tučniak, niekedy známy ako vílí tučniak, je najmenší tučniak na svete. [Kliknite sem](https://en.wikipedia.org/wiki/Little_penguin) pre viac informácií.

> Malý tučniak, niekedy známy ako vílí tučniak, je najmenší tučniak na svete. Navštívte https://en.wikipedia.org/wiki/Little_penguin pre viac informácií.

> **NOTE** Ako sa chystáte čítať, nikdy by ste nemali vytvárať odkazy, ktoré vyzerajú ako vyššie uvedené.

Pamätajte, že čítačky obrazovky sú iné rozhranie ako prehliadače s inou sadou funkcií.

### Problém s použitím URL

Čítačky obrazovky čítajú text. Ak sa v texte objaví URL, čítačka obrazovky prečíta URL. Vo všeobecnosti URL neobsahuje zmysluplné informácie a môže znieť nepríjemne. Možno ste to zažili, ak váš telefón niekedy nahlas prečítal textovú správu s URL.

### Problém s "kliknite sem"

Čítačky obrazovky majú tiež schopnosť čítať iba hypertextové odkazy na stránke, podobne ako by vidiaci človek prehľadával stránku kvôli odkazom. Ak je text odkazu vždy "kliknite sem", všetko, čo používateľ bude počuť, je "kliknite sem, kliknite sem, kliknite sem, kliknite sem, kliknite sem, ..." Všetky odkazy sú teraz nerozoznateľné.

### Dobrý text odkazu

Dobrý text odkazu stručne opisuje, čo je na druhej strane odkazu. V uvedenom príklade o malých tučniakoch odkazuje odkaz na stránku Wikipédie o tomto druhu. Fráza *malý tučniak* by bola ideálnym textom odkazu, pretože jasne hovorí, čo sa niekto dozvie, ak klikne na odkaz - malý tučniak.

> [Malý tučniak](https://en.wikipedia.org/wiki/Little_penguin), niekedy známy ako vílí tučniak, je najmenší tučniak na svete.

✅ Surfujte po webe niekoľko minút a nájdite stránky, ktoré používajú nejasné stratégie odkazovania. Porovnajte ich s inými, lepšie prepojenými stránkami. Čo ste sa naučili?

#### Poznámky k vyhľadávačom

Ako bonus za zabezpečenie prístupnosti vašej stránky pomôžete aj vyhľadávačom navigovať na vašej stránke. Vyhľadávače používajú text odkazov na pochopenie tém stránok. Takže používanie dobrého textu odkazov pomáha všetkým!

### ARIA

Predstavte si nasledujúcu stránku:

| Produkt      | Popis             | Objednávka   |
| ------------ | ----------------- | ------------ |
| Widget       | [Popis](../../../../1-getting-started-lessons/3-accessibility/')      | [Objednávka](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [Popis](../../../../1-getting-started-lessons/3-accessibility/')      | [Objednávka](../../../../1-getting-started-lessons/3-accessibility/') |

V tomto príklade duplikovanie textu popisu a objednávky dáva zmysel pre niekoho, kto používa prehliadač. Avšak niekto, kto používa čítačku obrazovky, by počul iba slová *popis* a *objednávka* opakovane bez kontextu.

Na podporu týchto typov scenárov HTML podporuje sadu atribútov známych ako [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Tieto atribúty vám umožňujú poskytnúť čítačkám obrazovky ďalšie informácie.

> **NOTE**: Rovnako ako pri mnohých aspektoch HTML, podpora prehliadačov a čítačiek obrazovky sa môže líšiť. Väčšina hlavných klientov však podporuje atribúty ARIA.

Môžete použiť `aria-label` na popis odkazu, keď formát stránky neumožňuje inak. Popis pre widget by mohol byť nastavený ako

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Vo všeobecnosti používanie sémantického označenia, ako je opísané vyššie, prevažuje nad používaním ARIA, ale niekedy neexistuje sémantický ekvivalent pre rôzne HTML widgety. Dobrým príkladom je strom. Neexistuje HTML ekvivalent pre strom, takže identifikujete generický `<div>` pre tento prvok s vhodnou rolou a hodnotami ARIA. [Dokumentácia MDN o ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) obsahuje viac užitočných informácií.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Obrázky

Je samozrejmé, že čítačky obrazovky nedokážu automaticky prečítať, čo je na obrázku. Zabezpečenie prístupnosti obrázkov nevyžaduje veľa práce - práve na to slúži atribút `alt`. Všetky významné obrázky by mali mať `alt`, ktorý popisuje, čo zobrazujú. Obrázky, ktoré sú čisto dekoratívne, by mali mať atribút `alt` nastavený na prázdny reťazec: `alt=""`. Tým sa zabráni tomu, aby čítačky obrazovky zbytočne oznamovali dekoratívny obrázok.

✅ Ako by ste očakávali, vyhľadávače tiež nedokážu pochopiť, čo je na obrázku. Používajú tiež text alt. Takže opäť, zabezpečenie prístupnosti vašej stránky prináša ďalšie výhody!

## Klávesnica

Niektorí používatelia nemôžu používať myš alebo trackpad a namiesto toho sa spoliehajú na interakcie pomocou klávesnice, aby prechádzali z jedného prvku na druhý. Je dôležité, aby vaša webová stránka prezentovala obsah v logickom poradí, aby používateľ klávesnice mohol pristupovať ku každému interaktívnemu prvku, keď sa posúva dokumentom. Ak vytvárate svoje webové stránky so sémantickým označením a používate CSS na štýlovanie ich vizuálneho rozloženia, vaša stránka by mala byť navigovateľná pomocou klávesnice, ale je dôležité
Mnohé vlády majú zákony týkajúce sa požiadaviek na prístupnosť. Preštudujte si zákony o prístupnosti vo vašej krajine. Čo je pokryté a čo nie? Príkladom je [táto vládna webová stránka](https://accessibility.blog.gov.uk/).

## Zadanie

[Analyzujte neprístupnú webovú stránku](assignment.md)

Kredity: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) od Instrument

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby na automatický preklad [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, upozorňujeme, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za záväzný zdroj. Pre dôležité informácie odporúčame profesionálny preklad vykonaný človekom. Nezodpovedáme za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.