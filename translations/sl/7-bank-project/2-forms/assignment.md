<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-25T00:39:51+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "sl"
}
-->
# Oblikujte svojo bančno aplikacijo z modernim CSS

## Pregled projekta

Preoblikujte svojo funkcionalno bančno aplikacijo v vizualno privlačno, profesionalno spletno aplikacijo z uporabo sodobnih tehnik CSS. Ustvarili boste koheziven oblikovalski sistem, ki izboljša uporabniško izkušnjo, hkrati pa ohranja načela dostopnosti in odzivnega oblikovanja.

Ta naloga vas izziva, da uporabite sodobne vzorce spletnega oblikovanja, uvedete dosledno vizualno identiteto in ustvarite vmesnik, ki bo uporabnikom privlačen in intuitiven za navigacijo.

## Navodila

### Korak 1: Priprava vašega slogovnega lista

**Ustvarite osnovo za vaš CSS:**

1. **Ustvarite** novo datoteko z imenom `styles.css` v korenskem direktoriju vašega projekta.
2. **Povežite** slogovni list v vaši datoteki `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Začnite** z resetiranjem CSS in sodobnimi privzetimi nastavitvami:
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

### Korak 2: Zahteve oblikovalskega sistema

**Uvedite te ključne oblikovalske elemente:**

#### Barvna paleta
- **Primarna barva**: Izberite profesionalno barvo za gumbe in poudarke.
- **Sekundarna barva**: Komplementarna barva za poudarke in sekundarne akcije.
- **Nevtralne barve**: Odtenki sive za besedilo, obrobe in ozadja.
- **Barve za uspeh/napake**: Zelena za uspešne stanja, rdeča za napake.

#### Tipografija
- **Hierarhija naslovov**: Jasna razlika med elementi H1, H2 in H3.
- **Besedilo telesa**: Berljiva velikost pisave (najmanj 16px) in ustrezna višina vrstice.
- **Oznake obrazcev**: Jasno, dostopno oblikovanje besedila.

#### Postavitev in razmiki
- **Dosledni razmiki**: Uporabite lestvico razmikov (8px, 16px, 24px, 32px).
- **Mrežni sistem**: Organizirana postavitev za obrazce in vsebinske sekcije.
- **Odzivno oblikovanje**: Pristop "najprej mobilno" z določenimi prelomnimi točkami.

### Korak 3: Oblikovanje komponent

**Oblikujte te specifične komponente:**

#### Obrazci
- **Vnosna polja**: Profesionalne obrobe, stanja fokusa in oblikovanje validacije.
- **Gumbi**: Učinki ob prehodu miške, stanja onemogočenosti in indikatorji nalaganja.
- **Oznake**: Jasna postavitev in indikatorji obveznih polj.
- **Sporočila o napakah**: Vidno oblikovanje napak in koristna sporočila.

#### Navigacija
- **Glava**: Čisto, blagovno znamko označeno navigacijsko območje.
- **Povezave**: Jasna stanja ob prehodu miške in aktivni indikatorji.
- **Logotip/Naslov**: Prepoznaven element blagovne znamke.

#### Vsebinska območja
- **Sekcije**: Jasna vizualna ločitev med različnimi območji.
- **Kartice**: Če uporabljate postavitve na osnovi kartic, vključite sence in obrobe.
- **Ozadja**: Ustrezna uporaba praznega prostora in subtilnih ozadij.

### Korak 4: Izboljšane funkcije (neobvezno)

**Razmislite o uvedbi teh naprednih funkcij:**
- **Temni način**: Preklapljanje med svetlimi in temnimi temami.
- **Animacije**: Subtilni prehodi in mikro-interakcije.
- **Stanja nalaganja**: Vizualna povratna informacija med pošiljanjem obrazcev.
- **Odzivne slike**: Optimizirane slike za različne velikosti zaslona.

## Navdih za oblikovanje

**Značilnosti sodobnih bančnih aplikacij:**
- **Čist, minimalističen dizajn** z veliko praznega prostora.
- **Profesionalne barvne sheme** (modre, zelene ali prefinjeni nevtralni odtenki).
- **Jasna vizualna hierarhija** z vidnimi gumbi za poziv k akciji.
- **Dostopni kontrastni razmerji**, ki ustrezajo smernicam WCAG.
- **Odzivne postavitve**, ki delujejo na vseh napravah.

## Tehnične zahteve

### Organizacija CSS
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

### Zahteve za dostopnost
- **Barvni kontrast**: Zagotovite razmerje vsaj 4,5:1 za običajno besedilo.
- **Indikatorji fokusa**: Vidna stanja fokusa za navigacijo s tipkovnico.
- **Oznake obrazcev**: Pravilno povezane z vnosnimi polji.
- **Odzivno oblikovanje**: Uporabno na zaslonih od 320px do 1920px širine.

## Ocenjevalna lestvica

| Kriterij | Odlično (A) | Dobro (B) | Razvijajoče (C) | Potrebno izboljšanje (F) |
|----------|-------------|-----------|-----------------|--------------------------|
| **Oblikovalski sistem** | Uvede celovit oblikovalski sistem z doslednimi barvami, tipografijo in razmiki | Uporablja dosledno oblikovanje z jasnimi vzorci in dobro vizualno hierarhijo | Osnovno oblikovanje z nekaj težavami pri doslednosti ali manjkajočimi elementi | Minimalno oblikovanje z nedoslednimi ali nasprotujočimi si oblikovalskimi odločitvami |
| **Uporabniška izkušnja** | Ustvari intuitiven, profesionalen vmesnik z odlično uporabnostjo in vizualno privlačnostjo | Zagotavlja dobro uporabniško izkušnjo z jasno navigacijo in berljivo vsebino | Osnovna uporabnost z nekaj potrebnimi izboljšavami UX | Slaba uporabnost, težko za navigacijo ali branje |
| **Tehnična izvedba** | Uporablja sodobne tehnike CSS, organizirano strukturo kode in sledi najboljšim praksam | Učinkovito izvaja CSS z dobro organizacijo in ustreznimi tehnikami | CSS deluje pravilno, vendar morda manjka organizacija ali sodobni pristopi | Slaba izvedba CSS z tehničnimi težavami ali težavami združljivosti brskalnika |
| **Odzivno oblikovanje** | Popolnoma odzivno oblikovanje, ki odlično deluje na vseh velikostih naprav | Dobro odzivno vedenje z manjšimi težavami na nekaterih velikostih zaslona | Osnovna odzivna izvedba z nekaj težavami pri postavitvi | Ni odzivno ali pomembne težave na mobilnih napravah |
| **Dostopnost** | Ustreza smernicam WCAG z odlično navigacijo s tipkovnico in podporo za bralnike zaslona | Dobre prakse dostopnosti z ustreznim kontrastom in indikatorji fokusa | Osnovne dostopnostne zahteve z nekaj manjkajočimi elementi | Slaba dostopnost, težko za uporabnike z invalidnostjo |

## Smernice za oddajo

**Vključite v svojo oddajo:**
- **styles.css**: Vaš celoten slogovni list.
- **Posodobljen HTML**: Vse spremembe HTML, ki ste jih naredili.
- **Posnetki zaslona**: Slike, ki prikazujejo vaš dizajn na namizju in mobilnih napravah.
- **README**: Kratek opis vaših oblikovalskih odločitev in barvne palete.

**Bonus točke za:**
- **CSS lastnosti po meri** za bolj vzdržno tematsko oblikovanje.
- **Napredne funkcije CSS**, kot so Grid, Flexbox ali CSS animacije.
- **Premisleki o zmogljivosti**, kot so optimiziran CSS in minimalna velikost datoteke.
- **Testiranje združljivosti med brskalniki**, ki zagotavlja delovanje v različnih brskalnikih.

> 💡 **Nasvet**: Začnite z oblikovanjem za mobilne naprave, nato pa ga izboljšajte za večje zaslone. Ta pristop "najprej mobilno" zagotavlja, da vaša aplikacija dobro deluje na vseh napravah in sledi najboljšim praksam sodobnega spletnega razvoja.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.