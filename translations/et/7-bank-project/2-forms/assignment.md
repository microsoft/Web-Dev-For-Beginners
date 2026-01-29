# Stiilista oma panga rakendus kaasaegse CSS-iga

## Projekti ülevaade

Muuda oma funktsionaalne pangarakendus visuaalselt köitvaks, professionaalse väljanägemisega veebirakenduseks, kasutades kaasaegseid CSS-tehnikaid. Sa lood ühtse disainisüsteemi, mis parandab kasutajakogemust, säilitades samal ajal ligipääsetavuse ja reageeriva disaini põhimõtted.

See ülesanne seab sulle väljakutse rakendada kaasaegseid veebidisaini mustreid, realiseerida järjepidev visuaalne identiteet ning luua liides, mida kasutajad leiavad nii atraktiivseks kui ka intuitiivseks navigeerida.

## Juhised

### Samm 1: Seadista oma stiilileht

**Loo oma CSS aluspõhi:**

1. **Loo** uus fail nimega `styles.css` oma projekti juurkaustas  
2. **Seo** stiilileht oma `index.html` failiga:  
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
  
3. **Alusta** CSS lähtestuse ja kaasaegsete vaikimisi seadistustega:  
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
  

### Samm 2: Disainisüsteemi nõuded

**Rakenda need olulised disainielemendid:**

#### Värvipalett
- **Põhivärv**: Vali professionaalne värv nuppudele ja esiletõstmiseks  
- **Teisene värv**: Komplementeeriv toon aktsentide ja teiseste toimingute jaoks  
- **Neutraalvärvid**: Hallid teksti, piiride ja taustade jaoks  
- **Õnnestumise/Tõrke värvid**: Roheline õnnestumise olekute, punane tõrgete jaoks  

#### Tüpograafia
- **Pealkirjade hierarhia**: Selge erinevus H1, H2 ja H3 elementide vahel  
- **Põhitekst**: Loetav fondisuurus (vähemalt 16px) ja sobiv reavahe  
- **Vormide sildid**: Selge ja ligipääsetav tekstistiil  

#### Paigutus ja vahed
- **Järjepidev vahe**: Kasuta vaheteskaalat (8px, 16px, 24px, 32px)  
- **Võrgu süsteem**: Korraldatud paigutus vormide ja sisulõikude jaoks  
- **Reageeriv disain**: Mobiilist lähtuv lähenemine murdepunktidega  

### Samm 3: Komponentide stiilimine

**Stiilista need konkreetsed komponendid:**

#### Vormid
- **Sisendväljad**: Professionaalsed piirid, fookuse olekud ja valideerimise stiilid  
- **Nupud**: Hover-efektid, keelatud olekud ja laadimise indikaatorid  
- **Sildid**: Selge positsioneerimine ja kohustuslike väljade indikaatorid  
- **Tõrketeated**: Nähtav tõrke stiil ja abistavad sõnumid  

#### Navigeerimine
- **Päis**: Puhtalt kujundatud ja bränditud navigeerimisala  
- **Lingid**: Selged hover-olekud ja aktiivsed indikaatorid  
- **Logo/Pealkiri**: Eriline brändinguelement  

#### Sisu alad
- **Lõigud**: Selge visuaalne eristus erinevate alade vahel  
- **Kaardid**: Kaardipõhiste paigutuste korral lisa varje ja piire  
- **Taustad**: Sobiv valge ruumi ja õrnade taustade kasutus  

### Samm 4: Täiendavad funktsioonid (valikuline)

**Kaalu nende arenenud funktsioonide rakendamist:**  
- **Tume režiim**: Lüliti hele ja tume teema vahel  
- **Animatsioonid**: Õrnad üleminekud ja mikrointeraktsioonid  
- **Laadimise olekud**: Visuaalne tagasiside vormi esitamisel  
- **Reageerivad pildid**: Optimeeritud pildid erinevate ekraanisuuruste jaoks  

## Disaini inspiratsioon

**Kaasaegse pangarakenduse omadused:**  
- **Puhas, minimalistlik disain** rohke valge ruumiga  
- **Professionaalsed värviskeemid** (sinised, rohelised või peened neutraalsed toonid)  
- **Selge visuaalne hierarhia** silmapaistvate üleskutse nuppudega  
- **Ligipääsetavad kontrastsussuhted** WCAG juhistega kooskõlas  
- **Mobiilile reageerivad paigutused**, mis töötavad kõigil seadmetel  

## Tehnilised nõuded

### CSS organiseerimine  
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
  
### Ligipääsetavuse nõuded  
- **Värvikontrast**: Tagada vähemalt 4.5:1 suhe tavalise teksti jaoks  
- **Fookuse indikaatorid**: Nähtavad fookuse olekud klaviatuuriga navigeerimisel  
- **Vormisildid**: Nõuetekohaselt seotud sisendväljaga  
- **Reageeriv disain**: Kasutatav ekraanidel laiusega 320px kuni 1920px  

## Hindamiskriteeriumid

| Kriteerium | Silmapaistev (A) | Hea (B) | Arenev (C) | Parandamist vajav (F) |
|------------|------------------|---------|------------|-----------------------|
| **Disainisüsteem** | Rakendab terviklikku disainisüsteemi järjepidevate värvide, tüpograafia ja vahedega kogu ulatuses | Kasutab järjepidevat stiili selgete disainimustrite ja hea visuaalse hierarhiaga | Põhiline stiilimine mõnede järjepidevuse probleemide või puuduvate disainielementidega | Vähene stiilimine ebaühtlaste või vastuoluliste disainivalikutega |
| **Kasutajakogemus** | Loob intuitiivse, professionaalse liidese hea kasutusmugavuse ja visuaalse atraktiivsusega | Tagab hea kasutajakogemuse selge navigeerimise ja loetava sisuga | Põhiline kasutatavus, vajab mõningaid UX parandusi | Kehv kasutatavus, navigeerimine või lugemine keeruline |
| **Tehniline teostus** | Kasutab kaasaegseid CSS-tehnikaid, organiseeritud koodi ja parimaid tavasid | Rakendab CSS-i efektiivselt hea organisatsiooni ja sobivate meetoditega | CSS töötab korrektsete funktsioonidega, kuid võib puududa korralik organiseeritus või kaasaegsed lähenemised | Kehv CSS-i teostus tehniliste probleemide või brauserite ühilduvusega |
| **Reageeriv disain** | Täielikult reageeriv disain, mis toimib hästi kõigil seadmete suurustel | Hea reageeriv käitumine, mõne väikese probleemiga mõnedel ekraanisuurustel | Põhiline reageeriv teostus, mõnede paigutusprobleemidega | Puudub reageerivus või olulised probleemid mobiilseadmetel |
| **Ligipääsetavus** | Vastab WCAG juhistele suurepärase klaviatuuriga navigeerimise ja ekraanilugerite toega | Head ligipääsetavuse praktikad korraliku kontrasti ja fookuse indikaatoritega | Põhilised ligipääsetavuse kaalutlused, mõned elemendid puuduvad | Kehv ligipääsetavus, raskused erivajadustega kasutajatele |

## Esitamise juhised

**Esituses peab olema:**
- **styles.css**: Sinu täielik stiilileht  
- **Uuendatud HTML**: Kõik tehtud HTML muudatused  
- **Ekraanipildid**: Kujutised sinu disainist töölaual ja mobiilis  
- **README**: Lühike kirjeldus sinu disainivalikutest ja värvipaletist  

**Boonuspunktid**:  
- **CSS kohandatud omadused** hooldatava teemade toetuseks  
- **Täpsemad CSS funktsioonid** nagu Grid, Flexbox või CSS animatsioonid  
- **Jõudlus kaalutlused** nagu optimeeritud CSS ja minimaalne failisuurus  
- **Mitme brauseri testimine** tagamaks ühilduvus erinevates brauserites  

> 💡 **Pro nõuanne**: Alusta esmalt mobiilidisainist ja seejärel täiusta suuremate ekraanide jaoks. See mobiilist lähtuv lähenemine tagab, et sinu rakendus töötab hästi kõikidel seadmetel ja järgib kaasaegseid veebiarenduse parimaid tavasid.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:  
See dokument on tõlgitud, kasutades tehisintellekti tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, arvestage palun, et automatiseeritud tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument sinu emakeeles tuleks pidada autoriteetseks tõendusmaterjaliks. Olulise teabe korral soovitatakse professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->