<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2026-01-07T11:50:41+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "lt"
}
-->
# Stilizuokite savo banko programėlę su moderniu CSS

## Projekto apžvalga

Paverskite savo funkcionalią bankininkystės programą vizualiai patrauklia, profesionaliai atrodančia žiniatinklio programėle, naudodami modernias CSS technikas. Sukursite vieningą dizaino sistemą, kuri pagerins naudotojo patirtį, išlaikant prieinamumo ir reagavimo principus.

Ši užduotis skatina taikyti šiuolaikinius tinklalapių dizaino modelius, įgyvendinti nuoseklią vizualinę tapatybę ir sukurti sąsają, kuri naudotojams atrodys tiek patraukli, tiek intuityvi naršyti.

## Instrukcijos

### 1 žingsnis: Paruoškite stiliaus lapą

**Sukurkite savo CSS pagrindą:**

1. **Sukurkite** naują failą pavadinimu `styles.css` jūsų projekto šaknyje  
2. **Susiekite** stiliaus lapą savo `index.html` faile:  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
  
3. **Pradėkite** nuo CSS atstatymo ir modernių numatytųjų reikšmių:  
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```


### 2 žingsnis: Dizaino sistemos reikalavimai

**Įgyvendinkite šiuos esminius dizaino elementus:**

#### Spalvų paletė
- **Pagrindinė spalva**: Pasirinkite profesionalią spalvą mygtukams ir paryškinimams  
- **Antrinė spalva**: Papildoma spalva akcentams ir antrinėms veiksmams  
- **Neutralios spalvos**: Pilkos teksto, kraštinių ir fono spalvai  
- **Sėkmės/Klaidos spalvos**: Žalia sėkmės būsenoms, raudona klaidoms  

#### Tipografija
- **Antraščių hierarchija**: Aiškus skirtumas tarp H1, H2 ir H3 elementų  
- **Teksto dalis**: Skaitomas šrifto dydis (mažiausiai 16px) ir tinkamas eilučių aukštis  
- **Formos etiketės**: Aiškus, prieinamas teksto stilius  

#### Išdėstymas ir tarpai
- **Nuoseklūs tarpai**: Naudokite tarpų skalę (8px, 16px, 24px, 32px)  
- **Tinklų sistema**: Organizuotas išdėstymas formoms ir turinio skyriams  
- **Reaguojantis dizainas**: Mobiliesiems pritaikytas požiūris su lūžio taškais  

### 3 žingsnis: Komponentų stilizavimas

**Stilizaukite šiuos konkrečius komponentus:**

#### Formos
- **Įvesties laukai**: Profesionalūs kraštai, fokusavimo būsena ir validavimo stilius  
- **Mygtukai**: Užvedimo efektai, išjungtos būsenos ir įkėlimo indikatoriai  
- **Etiketės**: Aiški padėtis ir būtinų laukų indikatoriai  
- **Klaidų pranešimai**: Matomas klaidos stilius ir naudingos žinutės  

#### Navigacija
- **Antraštė**: Švari, su prekės ženklu susijusi navigacijos zona  
- **Nuorodos**: Aiškūs užvedimo efektai ir aktyvūs indikatoriai  
- **Logotipas/Pavadinimas**: Išskirtinis prekinis ženklas  

#### Turinio sritys
- **Skyriai**: Aiškus vizualinis atskyrimas tarp skirtingų sričių  
- **Kortelės**: Jei naudojate kortelių pagrindu išdėstytą dizainą, įtraukite šešėlius ir kraštines  
- **Fonas**: Tinkamas baltos erdvės ir subtilių fonų naudojimas  

### 4 žingsnis: Patobulintos funkcijos (pasirenkama)

**Apsvarstykite šių pažangių funkcijų įgyvendinimą:**
- **Tamsioji tema**: Perjungimas tarp šviesios ir tamsios temų  
- **Animacijos**: Subtilūs perėjimai ir mikrointerakcijos  
- **Įkėlimo būsenos**: Vizualinis atsiliepimas formų siuntimo metu  
- **Reaguojančios nuotraukos**: Optimizuotos nuotraukos skirtingiems ekranų dydžiams  

## Dizaino įkvėpimas

**Šiuolaikinės banko programėlės charakteristikos:**
- **Švarus, minimalistinis dizainas** su gausia baltos erdvės  
- **Profesionalios spalvų schemos** (mėlynos, žalios arba rafinuotos neutralios spalvos)  
- **Aiški vizualinė hierarchija** su išskirtais raginimo veikti mygtukais  
- **Prieinami kontrastų santykiai** atitinkantys WCAG gaires  
- **Mobiliesiems pritaikyti išdėstymai** kurie veikia visuose įrenginiuose  

## Techniniai reikalavimai

### CSS organizavimas  
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```
  
### Prieinamumo reikalavimai  
- **Spalvų kontrastas**: Užtikrinkite bent 4.5:1 santykį įprastam tekstui  
- **Focus indikatoriai**: Matomi fokusavimo ženklai klaviatūros navigacijai  
- **Formos etiketės**: Tinkamai susietos su įvedimo laukais  
- **Reaguojantis dizainas**: Naudojamas ekranuose nuo 320px iki 1920px pločio  

## Vertinimo kriterijai

| Kriterijus | Puikiai (A) | Gerai (B) | Tobulėja (C) | Reikia tobulinti (F) |
|------------|-------------|-----------|--------------|---------------------|
| **Dizaino sistema** | Įgyvendina išsamų dizaino sistemą su nuosekliomis spalvomis, tipografija ir tarpais | Naudoja nuoseklų stilių su aiškiais dizaino modeliais ir geru vizualiniu hierarchijos lygmeniu | Pritaiko pagrindinį stilių, bet yra nuoseklumo trūkumų arba trūksta dizaino elementų | Minimalus stilizavimas su nesuderintais ar prieštaringais dizaino pasirinkimais |
| **Naudotojo patirtis** | Sukuria intuityvią, profesionalią sąsają su puikia naudojimo patirtimi ir vizualiu patrauklumu | Užtikrina gerą naudotojo patirtį su aiškia navigacija ir skaitomu turiniu | Pagrindinis naudotojo patogumas, reikalingi patobulinimai UX srityje | Prasta naudotojo patirtis, sunku naršyti ar skaityti |
| **Techninė įgyvendinimas** | Taiko šiuolaikines CSS technikas, tvarkingą kodo struktūrą ir geriausias praktikas | Efektyviai naudoja CSS su gera organizacija ir tinkamomis technikomis | CSS veikia tinkamai, bet gali trūkti organizuotumo ar modernių sprendimų | Prastas CSS įgyvendinimas su techninėmis problemomis arba naršyklių suderinamumo trūkumais |
| **Reaguojantis dizainas** | Visiškai reagavęs dizainas, kuris puikiai veikia visuose įrenginių dydžiuose | Gera reagavimo elgsena su nedidelėmis problemomis kai kuriuose ekrano dydžiuose | Pagrindinis reagavimas su kai kuriomis išdėstymo problemomis | Nereaguoja arba reikšmingos problemos mobiliuosiuose įrenginiuose |
| **Prieinamumas** | Atitinka WCAG gaires su puikiai veikiančia klaviatūros navigacija ir ekrano skaitytuvu palaikymu | Geros prieinamumo praktikos su tinkamu kontrastu ir fokusavimo indikatoriais | Pagrindinės prieinamumo gairės, bet trūksta kai kurių elementų | Prastas prieinamumas, sunku naudotis žmonėms su negalia |

## Pateikimo gairės

**Pateikite:**
- **styles.css**: Jūsų pilną stiliaus lapą  
- **Atnaujintą HTML**: Bet kokius HTML pakeitimus, kuriuos atlikote  
- **Ekrano nuotraukas**: Vaizdus, rodantys jūsų dizainą darbalaukyje ir mobiliajame įrenginyje  
- **README**: Trumpą aprašymą apie jūsų dizaino pasirinkimus ir spalvų paletę  

**Papildomi taškai už:**
- **CSS pasirinktines savybes** palaikant temų priežiūrą  
- **Pažangias CSS funkcijas** kaip Grid, Flexbox ar CSS animacijos  
- **Veikimo optimizavimą** kaip optimizuotas CSS ir minimalus failo dydis  
- **Daugiabrowserinį testavimą** užtikrinantį suderinamumą skirtingose naršyklėse  

> 💡 **Pro patarimas**: Pirmiausia kurkite mobiliųjų dizainą, tada tobulinkite didesniems ekranams. Šis mobiliųjų pirma metodas užtikrina, kad jūsų programėlė gerai veiks visuose įrenginiuose ir atitiks šiuolaikines interneto kūrimo geriausias praktikas.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Pirminis dokumentas originalia kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinėms informacijoms rekomenduojame pasitelkti profesionalaus žmogaus vertimą. Mes neatsakome už bet kokius nesusipratimus ar klaidingus aiškinimus, kylančius naudojant šį vertimą.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->