<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-24T20:59:28+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "cs"
}
-->
# Projekt terárium, část 2: Úvod do CSS

![Úvod do CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.cs.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

Pamatujete si, jak vaše HTML terárium vypadalo docela základně? Díky CSS můžeme tuto jednoduchou strukturu proměnit v něco vizuálně přitažlivého.

Pokud je HTML jako stavba rámu domu, pak je CSS všechno, co dává domu útulnost – barvy stěn, uspořádání nábytku, osvětlení a způsob, jakým místnosti spolu ladí. Přemýšlejte o tom, jak se palác ve Versailles proměnil ze skromné lovecké chaty v jeden z nejvelkolepějších světových paláců díky pečlivé pozornosti věnované dekoraci a uspořádání.

Dnes proměníme vaše terárium z funkčního na elegantní. Naučíte se přesně umisťovat prvky, vytvářet rozvržení, která reagují na různé velikosti obrazovek, a vytvořit vizuální přitažlivost, která činí webové stránky poutavými.

Na konci této lekce uvidíte, jak strategické CSS stylování může dramaticky zlepšit váš projekt. Pojďme přidat vašemu teráriu trochu stylu.

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/17)

## Začínáme s CSS

CSS je často považováno za nástroj pro „zkrášlování“, ale jeho účel je mnohem širší. CSS je jako režisér filmu – ovládáte nejen to, jak vše vypadá, ale také jak se to pohybuje, reaguje na interakce a přizpůsobuje různým situacím.

Moderní CSS je neuvěřitelně schopné. Můžete psát kód, který automaticky upravuje rozvržení pro telefony, tablety a stolní počítače. Můžete vytvářet plynulé animace, které vedou pozornost uživatelů tam, kde je to potřeba. Výsledky mohou být opravdu působivé, když vše funguje dohromady.

> 💡 **Tip od profíka**: CSS se neustále vyvíjí s novými funkcemi a schopnostmi. Vždy zkontrolujte [CanIUse.com](https://caniuse.com), abyste ověřili podporu prohlížečů pro novější funkce CSS, než je použijete v produkčních projektech.

**Co v této lekci zvládneme:**
- **Vytvoříme** kompletní vizuální design pro vaše terárium pomocí moderních CSS technik
- **Prozkoumáme** základní koncepty jako kaskáda, dědičnost a CSS selektory
- **Implementujeme** strategie pro responzivní umístění a rozvržení
- **Postavíme** kontejner terária pomocí CSS tvarů a stylování

### Předpoklady

Měli byste mít dokončenou HTML strukturu vašeho terária z předchozí lekce a být připraveni ji stylovat.

> 📺 **Video zdroj**: Podívejte se na tento užitečný video průvodce
>
> [![CSS Basics Tutorial](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Nastavení vašeho CSS souboru

Než začneme stylovat, musíme propojit CSS s naším HTML. Toto propojení říká prohlížeči, kde najít pokyny pro stylování našeho terária.

Ve složce terária vytvořte nový soubor nazvaný `style.css` a poté jej propojte v sekci `<head>` vašeho HTML dokumentu:

```html
<link rel="stylesheet" href="./style.css" />
```

**Co tento kód dělá:**
- **Vytváří** propojení mezi vašimi HTML a CSS soubory
- **Říká** prohlížeči, aby načetl a aplikoval styly z `style.css`
- **Používá** atribut `rel="stylesheet"` k určení, že se jedná o CSS soubor
- **Odkazuje** na cestu k souboru pomocí `href="./style.css"`

## Porozumění kaskádě CSS

Přemýšleli jste někdy, proč se CSS nazývá „kaskádové“ stylové listy? Styly se kaskádovitě šíří jako vodopád a někdy si navzájem konkurují.

Představte si, jak fungují vojenské příkazy – generální rozkaz může říkat „všichni vojáci nosí zelenou“, ale specifický rozkaz pro vaši jednotku může říkat „na ceremonii noste slavnostní modrou uniformu“. Specifičtější instrukce má přednost. CSS se řídí podobnou logikou a pochopení této hierarchie značně usnadňuje ladění.

### Experimentování s prioritou kaskády

Podívejme se na kaskádu v praxi vytvořením konfliktu stylů. Nejprve přidejte inline styl do vašeho tagu `<h1>`:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Co tento kód dělá:**
- **Aplikuje** červenou barvu přímo na element `<h1>` pomocí inline stylování
- **Používá** atribut `style` k vložení CSS přímo do HTML
- **Vytváří** styl s nejvyšší prioritou pro tento konkrétní element

Poté přidejte toto pravidlo do vašeho souboru `style.css`:

```css
h1 {
  color: blue;
}
```

**V tomto případě jsme:**
- **Definovali** CSS pravidlo, které cílí na všechny `<h1>` elementy
- **Nastavili** barvu textu na modrou pomocí externího stylového listu
- **Vytvořili** pravidlo s nižší prioritou ve srovnání s inline styly

✅ **Kontrola znalostí**: Jaká barva se zobrazí ve vaší webové aplikaci? Proč tato barva vyhrává? Dokážete si představit scénáře, kdy byste chtěli přepsat styly?

> 💡 **Pořadí priorit CSS (od nejvyšší k nejnižší):**
> 1. **Inline styly** (atribut style)
> 2. **ID** (#myId)
> 3. **Třídy** (.myClass) a atributy
> 4. **Selektory elementů** (h1, div, p)
> 5. **Výchozí nastavení prohlížeče**

## CSS dědičnost v praxi

CSS dědičnost funguje jako genetika – elementy dědí určité vlastnosti od svých rodičovských elementů. Pokud nastavíte rodinu fontů na elementu body, celý text uvnitř automaticky použije stejný font. Je to podobné jako u Habsburské rodiny, kde se jejich charakteristická čelist objevovala napříč generacemi, aniž by byla specifikována pro každého jednotlivce.

Nicméně ne všechno se dědí. Textové styly jako fonty a barvy se dědí, ale vlastnosti rozvržení jako okraje a rámečky nikoliv. Stejně jako děti mohou dědit fyzické rysy, ale ne módní vkus svých rodičů.

### Pozorování dědičnosti fontů

Podívejme se na dědičnost v praxi nastavením rodiny fontů na elementu `<body>`:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Rozbor toho, co se zde děje:**
- **Nastavuje** rodinu fontů pro celou stránku cílením na element `<body>`
- **Používá** zásobník fontů s alternativními možnostmi pro lepší kompatibilitu prohlížečů
- **Aplikuje** moderní systémové fonty, které vypadají skvěle na různých operačních systémech
- **Zajišťuje**, že všechny podřízené elementy dědí tento font, pokud není specificky přepsán

Otevřete nástroje pro vývojáře vašeho prohlížeče (F12), přejděte na kartu Elements a zkontrolujte váš `<h1>` element. Uvidíte, že dědí rodinu fontů z body:

![děděný font](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.cs.png)

✅ **Čas na experiment**: Zkuste nastavit další dědičné vlastnosti na `<body>` jako `color`, `line-height` nebo `text-align`. Co se stane s vaším nadpisem a dalšími elementy?

> 📝 **Dědičné vlastnosti zahrnují**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Nedědičné vlastnosti zahrnují**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Ovládnutí CSS selektorů

CSS selektory jsou vaším způsobem, jak cílit na konkrétní elementy pro stylování. Fungují jako přesné pokyny – místo „dům“ můžete říct „modrý dům s červenými dveřmi na Maple Street“.

CSS nabízí různé způsoby, jak být specifický, a výběr správného selektoru je jako výběr vhodného nástroje pro daný úkol. Někdy potřebujete stylovat všechny dveře v sousedství, jindy jen jedny konkrétní dveře.

### Selektory elementů (tagy)

Selektory elementů cílí na HTML elementy podle jejich názvu tagu. Jsou ideální pro nastavení základních stylů, které se aplikují široce na celé stránce:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #3a241d;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
```

**Porozumění těmto stylům:**
- **Nastavuje** konzistentní typografii na celé stránce pomocí selektoru `body`
- **Odstraňuje** výchozí okraje a odsazení prohlížeče pro lepší kontrolu
- **Styluje** všechny nadpisové elementy barvou, zarovnáním a rozestupy
- **Používá** jednotky `rem` pro škálovatelné, přístupné velikosti fontů

Zatímco selektory elementů fungují dobře pro obecné stylování, budete potřebovat specifičtější selektory pro stylování jednotlivých komponent, jako jsou rostliny ve vašem teráriu.

### ID selektory pro jedinečné elementy

ID selektory používají symbol `#` a cílí na elementy s konkrétními atributy `id`. Protože ID musí být na stránce jedinečné, jsou ideální pro stylování jednotlivých, speciálních elementů, jako jsou naše levé a pravé kontejnery pro rostliny.

Vytvořme stylování pro kontejnery na stranách terária, kde budou rostliny umístěny:

```css
#left-container {
  background-color: #f5f5f5;
  width: 15%;
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#right-container {
  background-color: #f5f5f5;
  width: 15%;
  right: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}
```

**Co tento kód provádí:**
- **Umísťuje** kontejnery na krajní levé a pravé okraje pomocí `absolute` umístění
- **Používá** jednotky `vh` (výška okna) pro responzivní výšku, která se přizpůsobuje velikosti obrazovky
- **Aplikuje** `box-sizing: border-box`, aby se odsazení zahrnulo do celkové šířky
- **Odstraňuje** zbytečné jednotky `px` z nulových hodnot pro čistší kód
- **Nastavuje** jemnou barvu pozadí, která je příjemnější pro oči než ostrá šedá

✅ **Výzva kvality kódu**: Všimněte si, jak tento CSS porušuje princip DRY (Don't Repeat Yourself). Dokážete jej přepracovat pomocí ID i třídy?

**Vylepšený přístup:**
```html
<div id="left-container" class="container"></div>
<div id="right-container" class="container"></div>
```

```css
.container {
  background-color: #f5f5f5;
  width: 15%;
  top: 0;
  position: absolute;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

#left-container {
  left: 0;
}

#right-container {
  right: 0;
}
```

### Třídní selektory pro opakované styly

Třídní selektory používají symbol `.` a jsou ideální, když chcete aplikovat stejné styly na více elementů. Na rozdíl od ID mohou být třídy znovu použity v celém vašem HTML, což je ideální pro konzistentní stylové vzory.

V našem teráriu potřebuje každá rostlina podobné stylování, ale také individuální umístění. Použijeme kombinaci tříd pro sdílené styly a ID pro jedinečné umístění.

**Zde je HTML struktura pro každou rostlinu:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.cs.png" />
</div>
```

**Klíčové prvky vysvětleny:**
- **Používá** `class="plant-holder"` pro konzistentní stylování kontejnerů napříč všemi rostlinami
- **Aplikuje** `class="plant"` pro sdílené stylování a chování obrázků
- **Zahrnuje** jedinečné `id="plant1"` pro individuální umístění a interakci s JavaScriptem
- **Poskytuje** popisný alternativní text pro přístupnost čteček obrazovky

Nyní přidejte tyto styly do vašeho souboru `style.css`:

```css
.plant-holder {
  position: relative;
  height: 13%;
  left: -0.6rem;
}

.plant {
  position: absolute;
  max-width: 150%;
  max-height: 150%;
  z-index: 2;
  transition: transform 0.3s ease;
}

.plant:hover {
  transform: scale(1.05);
}
```

**Rozbor těchto stylů:**
- **Vytváří** relativní umístění pro držák rostliny, aby se vytvořil kontext umístění
- **Nastavuje** výšku každého držáku rostlin na 13 %, což zajišťuje, že všechny rostliny se vejdou vertikálně bez posouvání
- **Posouvá** držáky mírně doleva, aby lépe vycentroval rostliny v jejich kontejnerech
- **Umožňuje** rostlinám škálovat responzivně pomocí vlastností `max-width` a `max-height`
- **Používá** `z-index` k vrstvení rostlin nad ostatními elementy v teráriu
- **Přidává** jemný efekt při najetí myší pomocí CSS přechodů pro lepší interakci s uživatelem

✅ **Kritické myšlení**: Proč potřebujeme jak selektory `.plant-holder`, tak `.plant`? Co by se stalo, kdybychom se pokusili použít pouze jeden?

> 💡 **Designový vzor**: Kontejner (`.plant-holder`) ovládá rozvržení a umístění, zatímco obsah (`.plant`) ovládá vzhled a škálování. Toto oddělení činí kód lépe udržovatelným a flexibilním.

## Porozumění CSS umístění

CSS umístění je jako být režisérem divadelního představení – určujete, kde každý herec stojí a jak se pohybuje po jevišti. Někteří herci následují standardní formaci, zatímco jiní potřebují specifické umístění pro dramatický efekt.

Jakmile pochopíte umístění, mnoho výzev rozvržení se stane zvládnutelnými. Potřebujete navigační lištu, která zůstane nahoře, zatímco uživatelé scrollují? Umístění to vyřeší. Chcete tooltip, který se objeví na konkrétním místě? To je také umístění.

### Pět hodnot umístění

| Hodnota umístění | Chování | Použití |
|------------------|---------|---------|
| `static` | Výchozí tok, ignoruje top/left/right/bottom | Normální rozvržení dokumentu |
| `relative` | Umístěno relativně k normální pozici | Malé úpravy, vytvoření kontextu umístění |
| `absolute` | Umístěno relativně k nejbližšímu umístěnému předkovi | Přesné umístění, překryvy |
| `fixed` | Umístěno relativně k oknu prohlížeče | Navigační lišty, plovoucí elementy |
| `sticky` | Přepíná mezi relativním a fixním podle scrollování | Hlavičky, které se přilepí při scrollování |

### Umístění v našem teráriu

Naše terárium používá strategickou kombinaci typů umístění k vytvoření požadovaného rozvržení:

```css
/* Container positioning */
.container {
  position: absolute; /* Removes from normal flow */
  /* ... other styles ... */
}

/* Plant holder positioning */
.plant-holder {
  position: relative; /* Creates positioning context */
  /* ... other styles ... */
}

/* Plant positioning */
.plant {
  position: absolute; /* Allows precise placement within holder */
  /* ... other styles ... */
}
```

**Porozumění strategii umístění:**
- **Absolutní kontejnery** jsou odstraněny z normálního toku dokumentu a připnuty k okrajům obrazovky
- **Relativní držáky rostlin** vytvářejí kontext umístění, zatímco zůstávají v toku dokumentu
- **Absolutní rostliny** mohou být přesně umístěny uvnitř jejich relativních kontejnerů
- **Tato kombinace** umožňuje rostlinám se vertikálně skládat, zatímco jsou individuálně umístitelné

> 🎯 **Proč na tom záleží**: Elementy `plant` potřebují absolutní umístění, aby se staly přetahovatelnými v další lekci. Absolutní umístění je odstraní z normálního toku rozvržení, což umožňuje interakce typu drag-and-drop.

✅ **Čas na experiment**: Zkuste změnit hodnoty umístění a pozorujte výsledky:
- Co se stane, pokud změníte `.container` z `absolute` na `relative`?
- Jak se změní rozvr
Pojďme postavit terárium krok za krokem. Každá část využívá absolutní pozicování a rozměry založené na procentech pro responzivní design:

```css
.jar-walls {
  height: 80%;
  width: 60%;
  background: #d1e1df;
  border-radius: 1rem;
  position: absolute;
  bottom: 0.5%;
  left: 20%;
  opacity: 0.5;
  z-index: 1;
  box-shadow: inset 0 0 2rem rgba(0, 0, 0, 0.1);
}

.jar-top {
  width: 50%;
  height: 5%;
  background: #d1e1df;
  position: absolute;
  bottom: 80.5%;
  left: 25%;
  opacity: 0.7;
  z-index: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.jar-bottom {
  width: 50%;
  height: 1%;
  background: #d1e1df;
  position: absolute;
  bottom: 0;
  left: 25%;
  opacity: 0.7;
  border-radius: 0 0 0.5rem 0.5rem;
}

.dirt {
  width: 60%;
  height: 5%;
  background: #3a241d;
  position: absolute;
  border-radius: 0 0 1rem 1rem;
  bottom: 1%;
  left: 20%;
  opacity: 0.7;
  z-index: -1;
}
```

**Pochopení konstrukce terária:**
- **Používá** rozměry založené na procentech pro responzivní škálování na všech velikostech obrazovky
- **Umísťuje** prvky absolutně, aby je přesně naskládalo a zarovnalo
- **Aplikuje** různé hodnoty průhlednosti pro vytvoření efektu průhledného skla
- **Implementuje** vrstvení pomocí `z-index`, aby rostliny vypadaly, že jsou uvnitř nádoby
- **Přidává** jemný box-shadow a propracovaný border-radius pro realističtější vzhled

### Responzivní design s procenty

Všimněte si, jak všechny rozměry používají procenta místo pevných hodnot v pixelech:

**Proč na tom záleží:**
- **Zajišťuje**, že se terárium proporčně přizpůsobí jakékoli velikosti obrazovky
- **Udržuje** vizuální vztahy mezi komponentami nádoby
- **Poskytuje** konzistentní zážitek od mobilních telefonů po velké stolní monitory
- **Umožňuje**, aby se design přizpůsobil bez narušení vizuálního rozvržení

### Použití CSS jednotek v praxi

Používáme jednotky `rem` pro border-radius, které se škálují relativně k základní velikosti písma. To vytváří přístupnější designy, které respektují uživatelské preference velikosti písma. Více se dozvíte v oficiální specifikaci [CSS relative units](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ **Vizuální experimentování**: Zkuste upravit tyto hodnoty a sledujte jejich efekt:
- Změňte průhlednost nádoby z 0.5 na 0.8 – jak to ovlivní vzhled skla?
- Upravte barvu hlíny z `#3a241d` na `#8B4513` – jaký to má vizuální dopad?
- Změňte `z-index` hlíny na 2 – co se stane s vrstvením?

---

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Vytvořte CSS animaci, která způsobí, že se rostliny v teráriu jemně pohupují ze strany na stranu, čímž simulují přirozený efekt vánku. Tím si procvičíte CSS animace, transformace a klíčové snímky a zároveň zvýšíte vizuální přitažlivost svého terária.

**Zadání:** Přidejte CSS animace klíčových snímků, aby se rostliny v teráriu jemně pohupovaly ze strany na stranu. Vytvořte animaci pohupování, která mírně otáčí každou rostlinu (o 2-3 stupně) doleva a doprava s trváním 3-4 sekundy, a aplikujte ji na třídu `.plant`. Ujistěte se, že animace se opakuje nekonečně a má funkci zjemnění pro přirozený pohyb.

Více o [režimu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) se dozvíte zde.

## 🚀 Výzva: Přidání odrazů na skle

Připraveni vylepšit své terárium realistickými odrazy na skle? Tato technika přidá hloubku a realismus do designu.

Vytvoříte jemné odlesky, které simulují, jak se světlo odráží od skleněných povrchů. Tento přístup je podobný tomu, jak renesanční malíři jako Jan van Eyck používali světlo a odrazy, aby malované sklo vypadalo trojrozměrně. O to se snažíte:

![hotové terárium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.cs.png)

**Vaše výzva:**
- **Vytvořte** jemné bílé nebo světle zbarvené oválné tvary pro odrazy na skle
- **Umístěte** je strategicky na levou stranu nádoby
- **Aplikujte** vhodné efekty průhlednosti a rozmazání pro realistický odraz světla
- **Použijte** `border-radius` k vytvoření organických, bublinovitých tvarů
- **Experimentujte** s přechody nebo box-shadow pro lepší realismus

## Kvíz po přednášce

[Kvíz po přednášce](https://ff-quizzes.netlify.app/web/quiz/18)

## Rozšiřte své znalosti CSS

CSS se může zpočátku zdát složité, ale pochopení těchto základních konceptů poskytuje pevný základ pro pokročilejší techniky.

**Vaše další oblasti učení CSS:**
- **Flexbox** - zjednodušuje zarovnání a rozložení prvků
- **CSS Grid** - poskytuje výkonné nástroje pro vytváření složitých rozvržení
- **CSS proměnné** - snižují opakování a zlepšují udržovatelnost
- **Responzivní design** - zajišťuje, že weby fungují dobře na různých velikostech obrazovek

### Interaktivní vzdělávací zdroje

Procvičte si tyto koncepty s těmito zábavnými, interaktivními hrami:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Ovládněte Flexbox prostřednictvím zábavných výzev
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Naučte se CSS Grid pěstováním virtuálních mrkví
- 🎯 [CSS Battle](https://cssbattle.dev/) - Otestujte své CSS dovednosti pomocí kódovacích výzev

### Další vzdělávání

Pro komplexní základy CSS dokončete tento modul Microsoft Learn: [Style your HTML app with CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Zadání

[Refaktoring CSS](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.