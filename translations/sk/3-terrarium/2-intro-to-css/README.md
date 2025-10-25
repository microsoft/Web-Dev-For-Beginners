<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "92c4431eac70670b0450b02c1d11279a",
  "translation_date": "2025-10-24T21:36:20+00:00",
  "source_file": "3-terrarium/2-intro-to-css/README.md",
  "language_code": "sk"
}
-->
# Projekt Terrárium, časť 2: Úvod do CSS

![Úvod do CSS](../../../../translated_images/webdev101-css.3f7af5991bf53a200d79e7257e5e450408d8ea97f5b531d31b2e3976317338ee.sk.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

Pamätáte si, ako vaše HTML terrárium vyzeralo dosť jednoducho? CSS je to, čo premení túto jednoduchú štruktúru na niečo vizuálne príťažlivé.

Ak je HTML ako stavba rámu domu, potom CSS je všetko, čo mu dodáva pocit domova - farby stien, usporiadanie nábytku, osvetlenie a ako miestnosti spolu ladia. Predstavte si, ako sa palác vo Versailles zmenil zo skromného loveckého zámočku na jeden z najkrajších palácov sveta vďaka starostlivej pozornosti venovanej dekorácii a usporiadaniu.

Dnes premeníme vaše terrárium z funkčného na elegantné. Naučíte sa presne umiestňovať prvky, vytvárať rozloženia, ktoré reagujú na rôzne veľkosti obrazovky, a vytvárať vizuálnu príťažlivosť, ktorá robí webové stránky pútavými.

Na konci tejto lekcie uvidíte, ako strategické štýlovanie pomocou CSS môže dramaticky zlepšiť váš projekt. Poďme pridať štýl vášmu terráriu.

## Kvíz pred prednáškou

[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/quiz/17)

## Začíname s CSS

CSS sa často považuje len za "skrášľovanie vecí", ale má oveľa širší účel. CSS je ako režisér filmu - kontrolujete nielen to, ako všetko vyzerá, ale aj ako sa pohybuje, reaguje na interakciu a prispôsobuje sa rôznym situáciám.

Moderné CSS je mimoriadne schopné. Môžete písať kód, ktorý automaticky upravuje rozloženia pre telefóny, tablety a stolné počítače. Môžete vytvárať plynulé animácie, ktoré vedú pozornosť používateľov tam, kde je to potrebné. Výsledky môžu byť veľmi pôsobivé, keď všetko spolu funguje.

> 💡 **Tip od profesionála**: CSS sa neustále vyvíja s novými funkciami a schopnosťami. Vždy si overte podporu prehliadačov pre novšie funkcie CSS na stránke [CanIUse.com](https://caniuse.com) pred ich použitím v produkčných projektoch.

**Čo dosiahneme v tejto lekcii:**
- **Vytvoríme** kompletný vizuálny dizajn pre vaše terrárium pomocou moderných techník CSS
- **Preskúmame** základné koncepty ako kaskáda, dedičnosť a selektory CSS
- **Implementujeme** stratégie responzívneho umiestnenia a rozloženia
- **Postavíme** kontajner terrária pomocou tvarov a štýlov CSS

### Predpoklady

Mali by ste mať dokončenú HTML štruktúru vášho terrária z predchádzajúcej lekcie a pripravenú na štýlovanie.

> 📺 **Video zdroj**: Pozrite si tento užitočný video návod
>
> [![Tutoriál základy CSS](https://img.youtube.com/vi/6yIdOIV9p1I/0.jpg)](https://www.youtube.com/watch?v=6yIdOIV9p1I)

### Nastavenie vášho CSS súboru

Predtým, než začneme so štýlovaním, musíme pripojiť CSS k nášmu HTML. Toto spojenie povie prehliadaču, kde nájde pokyny na štýlovanie pre naše terrárium.

V priečinku terrária vytvorte nový súbor s názvom `style.css` a potom ho prepojte v sekcii `<head>` vášho HTML dokumentu:

```html
<link rel="stylesheet" href="./style.css" />
```

**Čo tento kód robí:**
- **Vytvára** spojenie medzi vaším HTML a CSS súbormi
- **Hovorí** prehliadaču, aby načítal a aplikoval štýly zo súboru `style.css`
- **Používa** atribút `rel="stylesheet"` na určenie, že ide o CSS súbor
- **Odkazuje** na cestu k súboru pomocou `href="./style.css"`

## Pochopenie kaskády CSS

Premýšľali ste niekedy, prečo sa CSS nazýva "kaskádové" štýly? Štýly kaskádujú ako vodopád a niekedy si navzájom konkurujú.

Predstavte si, ako fungujú vojenské príkazy - generálny príkaz môže povedať "všetci vojaci nosia zelené", ale konkrétny príkaz pre vašu jednotku môže povedať "na ceremóniu noste modré uniformy". Konkrétnejší príkaz má prednosť. CSS sa riadi podobnou logikou a pochopenie tejto hierarchie robí ladenie oveľa zvládnuteľnejším.

### Experimentovanie s prioritou kaskády

Pozrime sa na kaskádu v praxi tým, že vytvoríme konflikt štýlov. Najprv pridajte inline štýl do vášho `<h1>` tagu:

```html
<h1 style="color: red">My Terrarium</h1>
```

**Čo tento kód robí:**
- **Aplikuje** červenú farbu priamo na `<h1>` element pomocou inline štýlovania
- **Používa** atribút `style` na vloženie CSS priamo do HTML
- **Vytvára** najvyššiu prioritu štýlového pravidla pre tento konkrétny element

Potom pridajte toto pravidlo do vášho súboru `style.css`:

```css
h1 {
  color: blue;
}
```

**V uvedenom sme:**
- **Definovali** pravidlo CSS, ktoré cieli na všetky `<h1>` elementy
- **Nastavili** farbu textu na modrú pomocou externého štýlového súboru
- **Vytvorili** pravidlo s nižšou prioritou v porovnaní s inline štýlmi

✅ **Kontrola vedomostí**: Aká farba sa zobrazí vo vašej webovej aplikácii? Prečo táto farba vyhráva? Dokážete si predstaviť scenáre, kde by ste chceli prepísať štýly?

> 💡 **Poradie priorít CSS (od najvyššej po najnižšiu):**
> 1. **Inline štýly** (atribút style)
> 2. **ID** (#myId)
> 3. **Triedy** (.myClass) a atribúty
> 4. **Selektory elementov** (h1, div, p)
> 5. **Predvolené nastavenia prehliadača**

## CSS dedičnosť v praxi

CSS dedičnosť funguje ako genetika - elementy dedia určité vlastnosti od svojich rodičovských elementov. Ak nastavíte rodinu písma na elemente body, všetok text vo vnútri automaticky použije rovnaké písmo. Je to podobné ako charakteristická čeľusť rodiny Habsburgovcov, ktorá sa objavovala naprieč generáciami bez toho, aby bola špecifikovaná pre každého jednotlivca.

Nie všetko sa však dedí. Štýly textu ako písma a farby sa dedia, ale vlastnosti rozloženia ako okraje a orámovania nie. Rovnako ako deti môžu zdediť fyzické črty, ale nie módne voľby svojich rodičov.

### Pozorovanie dedičnosti písma

Pozrime sa na dedičnosť v praxi nastavením rodiny písma na elemente `<body>`:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

**Rozbor toho, čo sa tu deje:**
- **Nastavuje** rodinu písma pre celú stránku cielením na element `<body>`
- **Používa** zásobník písiem s alternatívnymi možnosťami pre lepšiu kompatibilitu prehliadačov
- **Aplikuje** moderné systémové písma, ktoré vyzerajú skvele na rôznych operačných systémoch
- **Zabezpečuje**, že všetky podriadené elementy zdedia toto písmo, pokiaľ nie je špecificky prepísané

Otvorte nástroje pre vývojárov vo vašom prehliadači (F12), prejdite na kartu Elements a skontrolujte váš `<h1>` element. Uvidíte, že dedí rodinu písma z body:

![zdedené písmo](../../../../translated_images/1.cc07a5cbe114ad1d4728c35134584ac1b87db688eff83cf75985cf31fe0ed95c.sk.png)

✅ **Čas na experimentovanie**: Skúste nastaviť ďalšie dediteľné vlastnosti na `<body>` ako `color`, `line-height` alebo `text-align`. Čo sa stane s vaším nadpisom a ostatnými elementmi?

> 📝 **Dediteľné vlastnosti zahŕňajú**: `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
>
> **Nedediteľné vlastnosti zahŕňajú**: `margin`, `padding`, `border`, `width`, `height`, `position`

## Ovládnutie selektorov CSS

Selektory CSS sú vaším spôsobom, ako cieliť na konkrétne elementy pre štýlovanie. Fungujú ako presné pokyny - namiesto toho, aby ste povedali "dom", môžete povedať "modrý dom s červenými dverami na ulici Maple".

CSS poskytuje rôzne spôsoby, ako byť konkrétny, a výber správneho selektora je ako výber vhodného nástroja pre danú úlohu. Niekedy potrebujete štýlovať každé dvere v susedstve, a niekedy len jedny konkrétne dvere.

### Selektory elementov (tagy)

Selektory elementov cielia na HTML elementy podľa ich názvu tagu. Sú ideálne na nastavenie základných štýlov, ktoré sa aplikujú na celú stránku:

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

**Pochopenie týchto štýlov:**
- **Nastavuje** konzistentnú typografiu na celej stránke pomocou selektora `body`
- **Odstraňuje** predvolené okraje a výplne prehliadača pre lepšiu kontrolu
- **Štýluje** všetky nadpisové elementy farbou, zarovnaním a rozstupom
- **Používa** jednotky `rem` pre škálovateľné, prístupné veľkosti písma

Hoci selektory elementov fungujú dobre pre všeobecné štýlovanie, budete potrebovať konkrétnejšie selektory na štýlovanie jednotlivých komponentov, ako sú rastliny vo vašom terráriu.

### Selektory ID pre jedinečné elementy

Selektory ID používajú symbol `#` a cielia na elementy s konkrétnymi atribútmi `id`. Keďže ID musia byť na stránke jedinečné, sú ideálne na štýlovanie jednotlivých, špeciálnych elementov, ako sú naše kontajnery na rastliny na ľavej a pravej strane.

Vytvorme štýlovanie pre bočné kontajnery nášho terrária, kde budú umiestnené rastliny:

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

**Čo tento kód dosahuje:**
- **Umiestňuje** kontajnery na krajnú ľavú a pravú stranu pomocou `absolute` pozicionovania
- **Používa** jednotky `vh` (výška zobrazenia) pre responzívnu výšku, ktorá sa prispôsobuje veľkosti obrazovky
- **Aplikuje** `box-sizing: border-box`, aby sa výplne zahrnuli do celkovej šírky
- **Odstraňuje** nepotrebné jednotky `px` z nulových hodnôt pre čistejší kód
- **Nastavuje** jemnú farbu pozadia, ktorá je príjemnejšia pre oči ako ostrá šedá

✅ **Výzva na kvalitu kódu**: Všimnite si, ako tento CSS porušuje princíp DRY (Don't Repeat Yourself). Dokážete ho prepracovať pomocou ID aj triedy?

**Vylepšený prístup:**
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

### Selektory tried pre opakovateľné štýly

Selektory tried používajú symbol `.` a sú ideálne, keď chcete aplikovať rovnaké štýly na viaceré elementy. Na rozdiel od ID môžu byť triedy opakovane použité v celom HTML, čo ich robí ideálnymi pre konzistentné štýlové vzory.

V našom terráriu potrebuje každá rastlina podobné štýlovanie, ale aj individuálne umiestnenie. Použijeme kombináciu tried pre spoločné štýly a ID pre jedinečné umiestnenie.

**Tu je HTML štruktúra pre každú rastlinu:**
```html
<div class="plant-holder">
  <img class="plant" alt="Decorative plant for terrarium" id="plant1" src="../../../../translated_images/plant1.d18b18ffe73da18f8b1ac7aba73b4050af52f4a0c9174aeac464b85123fc2850.sk.png" />
</div>
```

**Kľúčové prvky vysvetlené:**
- **Používa** `class="plant-holder"` pre konzistentné štýlovanie kontajnerov pre všetky rastliny
- **Aplikuje** `class="plant"` pre spoločné štýlovanie a správanie obrázkov
- **Zahŕňa** jedinečné `id="plant1"` pre individuálne umiestnenie a interakciu s JavaScriptom
- **Poskytuje** popisný alt text pre prístupnosť čítačiek obrazovky

Teraz pridajte tieto štýly do vášho súboru `style.css`:

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

**Rozbor týchto štýlov:**
- **Vytvára** relatívne pozicionovanie pre držiak rastlín na vytvorenie kontextu pozicionovania
- **Nastavuje** výšku každého držiaka rastlín na 13%, čím zabezpečuje, že všetky rastliny sa zmestia vertikálne bez posúvania
- **Posúva** držiaky mierne doľava, aby lepšie centrovali rastliny v ich kontajneroch
- **Umožňuje** rastlinám škálovať responzívne pomocou vlastností `max-width` a `max-height`
- **Používa** `z-index` na vrstvenie rastlín nad ostatnými elementmi v terráriu
- **Pridáva** jemný efekt pri prechode myšou pomocou CSS pre lepšiu interakciu s používateľom

✅ **Kritické myslenie**: Prečo potrebujeme selektory `.plant-holder` aj `.plant`? Čo by sa stalo, keby sme sa pokúsili použiť iba jeden?

> 💡 **Dizajnový vzor**: Kontajner (`.plant-holder`) kontroluje rozloženie a pozicionovanie, zatiaľ čo obsah (`.plant`) kontroluje vzhľad a škálovanie. Tento oddelený prístup robí kód udržateľnejším a flexibilnejším.

## Pochopenie pozicionovania v CSS

Pozicionovanie v CSS je ako byť režisérom divadelnej hry - určujete, kde každý herec stojí a ako sa pohybuje po javisku. Niektorí herci nasledujú štandardné usporiadanie, zatiaľ čo iní potrebujú špecifické pozicionovanie pre dramatický efekt.

Keď pochopíte pozicionovanie, mnohé výzvy v rozložení sa stanú zvládnuteľnými. Potrebujete navigačný panel, ktorý zostane na vrchu, keď používateľ posúva stránku? Pozicionovanie to vyrieši. Chcete, aby sa tooltip objavil na konkrétnom mieste? To je tiež pozicionovanie.

### Päť hodnôt pozicionovania

| Hodnota pozicionovania | Správanie | Použitie |
|-------------------------|-----------|----------|
| `static` | Predvolený tok, ignoruje top/left/right/bottom | Normálne rozloženie dokumentu |
| `relative` | Umiestnené relatívne k svojej normálnej pozícii | Malé úpravy, vytvorenie kontextu pozicionovania |
| `absolute` | Umiestnené relatívne k najbližšiemu pozicionovanému predkovi | Presné umiestnenie, prekrytia |
| `fixed` | Umiestnené relatívne k zobrazeniu | Navigačné panely, plávajúce elementy |
| `sticky` | Prepína medzi relatívnym a fixným podľa posúvania | Hlavičky, ktoré sa držia pri posúvaní |

### Pozicionovanie v našom terráriu

Naše terrárium používa strategickú kombináciu typov pozicionovania na vytvorenie požadovaného rozloženia:

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

**Pochopenie stratégie pozicionovania:**
- **Absolútne kontajnery** sú odstránené z normálneho toku dokumentu a pripnuté na okraje obrazovky
- **Relatívne držiaky rastlín** vytvárajú kontext pozicionovania, pričom zostávajú v toku dokumentu
- **Absolútne rastliny** môžu byť presne umiestnené v rámci svoj
Poďme postaviť terárium krok za krokom. Každá časť používa absolútne pozicionovanie a veľkosti založené na percentách pre responzívny dizajn:

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

**Porozumenie konštrukcii terária:**
- **Používa** rozmery založené na percentách pre responzívne škálovanie na všetkých veľkostiach obrazovky
- **Pozicionuje** prvky absolútne, aby ich presne naskladal a zarovnal
- **Aplikuje** rôzne hodnoty opacity na vytvorenie efektu priehľadnosti skla
- **Implementuje** vrstvenie pomocou `z-index`, aby rastliny vyzerali, že sú vo vnútri nádoby
- **Pridáva** jemný box-shadow a upravený border-radius pre realistickejší vzhľad

### Responzívny dizajn s percentami

Všimnite si, ako všetky rozmery používajú percentá namiesto pevných pixelových hodnôt:

**Prečo je to dôležité:**
- **Zabezpečuje**, že terárium sa proporčne prispôsobí na akúkoľvek veľkosť obrazovky
- **Udržuje** vizuálne vzťahy medzi komponentmi nádoby
- **Poskytuje** konzistentný zážitok od mobilných telefónov po veľké stolné monitory
- **Umožňuje**, aby sa dizajn prispôsobil bez narušenia vizuálneho rozloženia

### Použitie jednotiek CSS

Používame jednotky `rem` pre border-radius, ktoré sa škálujú relatívne k veľkosti koreňového písma. To vytvára prístupnejšie návrhy, ktoré rešpektujú preferencie používateľov ohľadom veľkosti písma. Viac sa dozviete o [relatívnych jednotkách CSS](https://www.w3.org/TR/css-values-3/#font-relative-lengths) v oficiálnej špecifikácii.

✅ **Vizuálne experimentovanie**: Skúste upraviť tieto hodnoty a pozorujte účinky:
- Zmeňte opacitu nádoby z 0.5 na 0.8 – ako to ovplyvní vzhľad skla?
- Upravte farbu pôdy z `#3a241d` na `#8B4513` – aký vizuálny dopad to má?
- Zmeňte `z-index` pôdy na 2 – čo sa stane s vrstvením?

---

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vytvorte CSS animáciu, ktorá spôsobí, že rastliny v teráriu sa jemne kývajú zo strany na stranu, simulujúc efekt prirodzeného vánku. Pomôže vám to precvičiť si CSS animácie, transformácie a keyframes, pričom zvýšite vizuálnu atraktivitu vášho terária.

**Úloha:** Pridajte CSS animácie pomocou keyframes, aby rastliny v teráriu jemne kývali zo strany na stranu. Vytvorte animáciu kývania, ktorá mierne otáča každú rastlinu (o 2-3 stupne) doľava a doprava s trvaním 3-4 sekundy, a aplikujte ju na triedu `.plant`. Uistite sa, že animácia sa opakuje donekonečna a má funkciu easing pre prirodzený pohyb.

Viac sa dozviete o [režime agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tu.

## 🚀 Výzva: Pridanie odrazov na skle

Pripravení vylepšiť vaše terárium realistickými odrazmi na skle? Táto technika pridá hĺbku a realizmus do dizajnu.

Vytvoríte jemné zvýraznenia, ktoré simulujú, ako svetlo odráža od sklenených povrchov. Tento prístup je podobný tomu, ako renesanční maliari ako Jan van Eyck používali svetlo a odrazy na vytvorenie trojrozmerného vzhľadu maľovaného skla. Tu je váš cieľ:

![finished terrarium](../../../../translated_images/terrarium-final.2f07047ffc597d0a06b06cab28a77801a10dd12fdb6c7fc630e9c40665491c53.sk.png)

**Vaša úloha:**
- **Vytvorte** jemné biele alebo svetlé oválne tvary pre odrazy na skle
- **Pozicionujte** ich strategicky na ľavej strane nádoby
- **Aplikujte** vhodné efekty opacity a rozmazania pre realistický odraz svetla
- **Použite** `border-radius` na vytvorenie organických, bublinkových tvarov
- **Experimentujte** s gradientmi alebo box-shadow pre lepší realizmus

## Kvíz po prednáške

[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/quiz/18)

## Rozšírte svoje znalosti o CSS

CSS sa môže na začiatku zdať zložité, ale pochopenie týchto základných konceptov poskytuje pevný základ pre pokročilejšie techniky.

**Vaše ďalšie oblasti učenia sa CSS:**
- **Flexbox** - zjednodušuje zarovnávanie a rozloženie prvkov
- **CSS Grid** - poskytuje silné nástroje na vytváranie komplexných rozložení
- **CSS premenné** - znižujú opakovanie a zlepšujú udržiavateľnosť
- **Responzívny dizajn** - zabezpečuje, že stránky fungujú dobre na rôznych veľkostiach obrazovky

### Interaktívne vzdelávacie zdroje

Precvičte si tieto koncepty pomocou týchto zábavných, praktických hier:
- 🐸 [Flexbox Froggy](https://flexboxfroggy.com/) - Ovládnite Flexbox prostredníctvom zábavných výziev
- 🌱 [Grid Garden](https://codepip.com/games/grid-garden/) - Naučte sa CSS Grid pestovaním virtuálnych mrkiev
- 🎯 [CSS Battle](https://cssbattle.dev/) - Otestujte svoje CSS zručnosti pomocou kódovacích výziev

### Ďalšie vzdelávanie

Pre komplexné základy CSS dokončite tento modul na Microsoft Learn: [Štylizujte svoju HTML aplikáciu pomocou CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics/?WT.mc_id=academic-77807-sagibbon)

## Zadanie

[Refaktoring CSS](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.