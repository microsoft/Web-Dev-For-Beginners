<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e375c2aeb94e2407f2667633d39580bd",
  "translation_date": "2025-08-28T04:16:58+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "cs"
}
-->
# Projekt Terrárium, část 2: Úvod do CSS

![Úvod do CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.cs.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/17)

### Úvod

CSS, neboli Cascading Style Sheets, řeší důležitý problém webového vývoje: jak udělat, aby váš web vypadal hezky. Stylování aplikací je činí uživatelsky přívětivějšími a vizuálně atraktivnějšími; pomocí CSS můžete také vytvořit responzivní webový design (RWD) – díky tomu budou vaše aplikace vypadat dobře bez ohledu na velikost obrazovky, na které jsou zobrazeny. CSS není jen o vzhledu aplikace; jeho specifikace zahrnuje animace a transformace, které umožňují sofistikované interakce. CSS Working Group pomáhá udržovat aktuální specifikace CSS; jejich práci můžete sledovat na [stránkách World Wide Web Consortium](https://www.w3.org/Style/CSS/members).

> Poznámka: CSS je jazyk, který se vyvíjí, stejně jako vše na webu, a ne všechny prohlížeče podporují novější části specifikace. Vždy ověřte své implementace na [CanIUse.com](https://caniuse.com).

V této lekci přidáme styly do našeho online terrária a naučíme se více o několika konceptech CSS: kaskádě, dědičnosti, použití selektorů, pozicování a využití CSS k tvorbě rozvržení. V průběhu vytvoříme rozvržení terrária a samotné terrárium.

### Předpoklady

Měli byste mít připravený HTML pro vaše terrárium, který je připravený ke stylování.

> Podívejte se na video

> 
> [![Video o základech Git a GitHub](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Úkol

Ve složce terrária vytvořte nový soubor s názvem `style.css`. Importujte tento soubor do sekce `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## Kaskáda

Cascading Style Sheets zahrnují myšlenku, že styly "kaskádují", což znamená, že aplikace stylu je řízena jeho prioritou. Styly nastavené autorem webu mají přednost před těmi, které nastaví prohlížeč. Styly nastavené "inline" mají přednost před těmi, které jsou nastaveny v externím stylovém souboru.

### Úkol

Přidejte inline styl "color: red" do vašeho tagu `<h1>`:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Poté přidejte následující kód do vašeho souboru `style.css`:

```CSS
h1 {
 color: blue;
}
```

✅ Která barva se zobrazí ve vaší webové aplikaci? Proč? Dokážete najít způsob, jak přepsat styly? Kdy byste to chtěli udělat, nebo proč ne?

---

## Dědičnost

Styly se dědí od předka k potomkovi, takže vnořené prvky dědí styly svých rodičů.

### Úkol

Nastavte font těla na daný font a zkontrolujte font vnořeného prvku:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}
```

Otevřete konzoli prohlížeče na záložce 'Elements' a pozorujte font H1. Dědí svůj font z těla, jak je uvedeno v prohlížeči:

![zděděný font](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.cs.png)

✅ Dokážete nastavit vnořenému stylu jinou vlastnost?

---

## Selektory CSS

### Tagy

Doposud váš soubor `style.css` obsahuje pouze několik stylovaných tagů a aplikace vypadá dost zvláštně:

```CSS
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Tento způsob stylování tagu vám dává kontrolu nad unikátními prvky, ale potřebujete kontrolovat styly mnoha rostlin ve vašem terráriu. K tomu musíte využít selektory CSS.

### Ids

Přidejte nějaký styl pro rozvržení levého a pravého kontejneru. Protože existuje pouze jeden levý kontejner a jeden pravý kontejner, jsou v označení HTML označeny id. Pro jejich stylování použijte `#`:

```CSS
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Zde jste umístili tyto kontejnery absolutním pozicováním na krajní levý a pravý okraj obrazovky a použili procenta pro jejich šířku, aby se mohly přizpůsobit malým mobilním obrazovkám.

✅ Tento kód je dost opakující se, tedy není "DRY" (Don't Repeat Yourself); dokážete najít lepší způsob, jak stylovat tyto id, možná pomocí id a třídy? Museli byste změnit označení HTML a refaktorovat CSS:

```html
<div id="left-container" class="container"></div>
```

### Třídy

V předchozím příkladu jste stylovali dva unikátní prvky na obrazovce. Pokud chcete, aby styly platily pro mnoho prvků na obrazovce, můžete použít CSS třídy. Udělejte to pro rozvržení rostlin v levém a pravém kontejneru.

Všimněte si, že každá rostlina v označení HTML má kombinaci id a tříd. Id jsou zde používány JavaScriptem, který přidáte později, aby manipuloval s umístěním rostlin v terráriu. Třídy však dávají všem rostlinám daný styl.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Přidejte následující do vašeho souboru `style.css`:

```CSS
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Pozoruhodné v tomto úryvku je směs relativního a absolutního pozicování, které pokryjeme v další sekci. Podívejte se na způsob, jakým jsou výšky zpracovány pomocí procent:

Nastavili jste výšku držáku rostlin na 13 %, což je dobré číslo, aby všechny rostliny byly zobrazeny v každém vertikálním kontejneru bez nutnosti posouvání.

Držák rostlin je posunut doleva, aby rostliny byly více vycentrovány v jejich kontejneru. Obrázky mají velké množství průhledného pozadí, aby byly lépe přetahovatelné, takže je třeba je posunout doleva, aby lépe seděly na obrazovce.

Poté je samotné rostlině dána maximální šířka 150 %. To jí umožňuje zmenšit se, jak se prohlížeč zmenšuje. Zkuste změnit velikost prohlížeče; rostliny zůstávají ve svých kontejnerech, ale zmenšují se, aby se vešly.

Také je pozoruhodné použití z-indexu, který ovládá relativní výšku prvku (takže rostliny sedí na vrcholu kontejneru a vypadají, že sedí uvnitř terrária).

✅ Proč potřebujete jak selektor pro držák rostlin, tak selektor pro rostlinu?

## Pozicování CSS

Míchání vlastností pozicování (existují statické, relativní, pevné, absolutní a lepivé pozice) může být trochu složité, ale pokud je provedeno správně, dává vám dobrou kontrolu nad prvky na vašich stránkách.

Absolutně pozicované prvky jsou pozicovány relativně k jejich nejbližším pozicovaným předkům, a pokud žádní nejsou, jsou pozicovány podle těla dokumentu.

Relativně pozicované prvky jsou pozicovány na základě pokynů CSS, které upravují jejich umístění od jejich počáteční pozice.

V našem příkladu je `plant-holder` relativně pozicovaný prvek, který je pozicován uvnitř absolutně pozicovaného kontejneru. Výsledné chování je, že postranní kontejnery jsou připnuty vlevo a vpravo, a `plant-holder` je vnořený, upravující se uvnitř postranních kontejnerů, čímž vytváří prostor pro rostliny, aby byly umístěny ve vertikálním sloupci.

> Samotná `plant` má také absolutní pozicování, což je nezbytné pro její přetahovatelnost, jak zjistíte v další lekci.

✅ Experimentujte s přepínáním typů pozicování postranních kontejnerů a `plant-holder`. Co se stane?

## Rozvržení CSS

Nyní použijete, co jste se naučili, k vytvoření samotného terrária, vše pomocí CSS!

Nejprve stylujte děti divu `.terrarium` jako zaoblený obdélník pomocí CSS:

```CSS
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
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
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

Všimněte si použití procent zde. Pokud zmenšíte svůj prohlížeč, můžete vidět, jak se nádoba také zmenšuje. Také si všimněte šířek a výšek procent pro prvky nádoby a jak je každý prvek absolutně pozicován ve středu, připnutý ke spodní části viewportu.

Používáme také `rem` pro border-radius, což je délka relativní k fontu. Přečtěte si více o tomto typu relativního měření ve [specifikaci CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths).

✅ Zkuste změnit barvy nádoby a její průhlednost oproti barvám hlíny. Co se stane? Proč?

---

## 🚀Výzva

Přidejte "bublinkový" lesk do levé spodní oblasti nádoby, aby vypadala více jako skleněná. Budete stylovat `.jar-glossy-long` a `.jar-glossy-short`, aby vypadaly jako odražený lesk. Takto by to mělo vypadat:

![hotové terrárium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.cs.png)

Pro dokončení kvízu po lekci projděte tento modul Learn: [Stylování HTML aplikace pomocí CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Kvíz po lekci

[Kvíz po lekci](https://ff-quizzes.netlify.app/web/quiz/18)

## Recenze a samostudium

CSS se zdá být klamně jednoduché, ale existuje mnoho výzev při pokusu o stylování aplikace dokonale pro všechny prohlížeče a všechny velikosti obrazovek. CSS-Grid a Flexbox jsou nástroje, které byly vyvinuty, aby byla práce trochu strukturovanější a spolehlivější. Naučte se o těchto nástrojích hraním [Flexbox Froggy](https://flexboxfroggy.com/) a [Grid Garden](https://codepip.com/games/grid-garden/).

## Zadání

[Refaktorování CSS](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.