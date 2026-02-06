# Naloga za prestrukturiranje CSS

## Cilj

Preoblikujte svoj projekt terarija z uporabo sodobnih tehnik postavitve CSS! Prestrukturirajte trenutni pristop absolutnega pozicioniranja in implementirajte **Flexbox** ali **CSS Grid** za bolj vzdržljivo in odzivno obliko. Ta naloga vas izziva, da uporabite sodobne CSS standarde, hkrati pa ohranite vizualno privlačnost vašega terarija.

Razumevanje, kdaj in kako uporabiti različne metode postavitve, je ključna veščina za sodobni spletni razvoj. Ta vaja povezuje tradicionalne tehnike pozicioniranja s sodobnimi CSS sistemi postavitve.

## Navodila za nalogo

### Faza 1: Analiza in načrtovanje
1. **Preglejte svojo trenutno kodo terarija** - Identificirajte elemente, ki trenutno uporabljajo absolutno pozicioniranje
2. **Izberite metodo postavitve** - Odločite se, ali Flexbox ali CSS Grid bolje ustreza vašim oblikovalskim ciljem
3. **Narišite novo strukturo postavitve** - Načrtujte, kako bodo organizirani kontejnerji in rastlinski elementi

### Faza 2: Implementacija
1. **Ustvarite novo različico** svojega projekta terarija v ločeni mapi
2. **Posodobite strukturo HTML** po potrebi, da podprete izbrano metodo postavitve
3. **Prestrukturirajte CSS**, da uporabite Flexbox ali CSS Grid namesto absolutnega pozicioniranja
4. **Ohranite vizualno skladnost** - Poskrbite, da se rastline in kozarec terarija pojavijo na istih mestih
5. **Implementirajte odzivno vedenje** - Vaša postavitev naj se elegantno prilagaja različnim velikostim zaslona

### Faza 3: Testiranje in dokumentacija
1. **Testiranje v različnih brskalnikih** - Preverite, ali vaša zasnova deluje v Chrome, Firefox, Edge in Safari
2. **Odzivno testiranje** - Preverite svojo postavitev na mobilnih, tabličnih in namiznih zaslonih
3. **Dokumentacija** - Dodajte komentarje v CSS, ki pojasnjujejo vaše odločitve glede postavitve
4. **Posnetki zaslona** - Zajemite svoj terarij v različnih brskalnikih in velikostih zaslona

## Tehnične zahteve

### Implementacija postavitve
- **Izberite ENO**: Implementirajte bodisi Flexbox ALI CSS Grid (ne oboje za iste elemente)
- **Odzivna zasnova**: Uporabite relativne enote (`rem`, `em`, `%`, `vw`, `vh`) namesto fiksnih pikslov
- **Dostopnost**: Ohranite pravilno semantično strukturo HTML in alt besedilo
- **Kakovost kode**: Uporabite dosledna poimenovanja in logično organizirajte CSS

### Sodobne CSS funkcije za vključitev
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Zahteve za podporo brskalnikov
- **Chrome/Edge**: Zadnji 2 različici
- **Firefox**: Zadnji 2 različici  
- **Safari**: Zadnji 2 različici
- **Mobilni brskalniki**: iOS Safari, Chrome Mobile

## Dostavni elementi

1. **Posodobljena datoteka HTML** z izboljšano semantično strukturo
2. **Prestrukturirana datoteka CSS** z uporabo sodobnih tehnik postavitve
3. **Zbirka posnetkov zaslona**, ki prikazuje združljivost med brskalniki:
   - Pogled na namizju (1920x1080)
   - Pogled na tablici (768x1024) 
   - Pogled na mobilnem telefonu (375x667)
   - Vsaj 2 različna brskalnika
4. **README.md datoteka**, ki dokumentira:
   - Vašo izbiro postavitve (Flexbox proti Grid) in razloge za to
   - Izzive, s katerimi ste se soočili med prestrukturiranjem
   - Opombe o združljivosti brskalnikov
   - Navodila za zagon vaše kode

## Ocenjevalna lestvica

| Merila | Odlično (4) | Dobro (3) | Povprečno (2) | Začetno (1) |
|--------|-------------|-----------|---------------|-------------|
| **Implementacija postavitve** | Mojstrska uporaba Flexbox/Grid z naprednimi funkcijami; popolnoma odzivno | Pravilna implementacija z dobro odzivnostjo | Osnovna implementacija z manjšimi težavami pri odzivnosti | Nepopolna ali nepravilna implementacija postavitve |
| **Kakovost kode** | Čist, dobro organiziran CSS z smiselno komentiranjem in doslednim poimenovanjem | Dobra organizacija z nekaj komentarji | Zadostna organizacija z minimalnimi komentarji | Slaba organizacija; težko razumljivo |
| **Združljivost med brskalniki** | Popolna skladnost v vseh zahtevanih brskalnikih s posnetki zaslona | Dobra združljivost z manjšimi dokumentiranimi razlikami | Nekatere težave z združljivostjo, ki ne motijo funkcionalnosti | Velike težave z združljivostjo ali manjkajoče testiranje |
| **Odzivna zasnova** | Izjemen pristop "mobile-first" z gladkimi prelomnimi točkami | Dobra odzivnost z ustreznimi prelomnimi točkami | Osnovne odzivne funkcije z nekaj težavami pri postavitvi | Omejena ali pokvarjena odzivna zasnova |
| **Dokumentacija** | Celovita README z podrobnimi razlagami in vpogledi | Dobra dokumentacija, ki pokriva vse zahtevane elemente | Osnovna dokumentacija z minimalnimi razlagami | Nepopolna ali manjkajoča dokumentacija |

## Koristni viri

### Vodniki za metode postavitve
- 📖 [Celovit vodnik za Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Celovit vodnik za CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox proti Grid - Izberite pravo orodje](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Orodja za testiranje brskalnikov
- 🛠️ [Način odzivnosti v orodjih za razvijalce brskalnika](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Podpora funkcij](https://caniuse.com/)
- 🛠️ [BrowserStack - Testiranje med brskalniki](https://www.browserstack.com/)

### Orodja za kakovost kode
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Dodatni izzivi

🌟 **Napredne postavitve**: Implementirajte Flexbox IN Grid v različnih delih vaše zasnove  
🌟 **Integracija animacij**: Dodajte CSS prehode ali animacije, ki delujejo z vašo novo postavitvijo  
🌟 **Temni način**: Implementirajte preklop teme na osnovi CSS lastnosti po meri  
🌟 **Poizvedbe kontejnerjev**: Uporabite sodobne tehnike poizvedb kontejnerjev za odzivnost na ravni komponent  

> 💡 **Ne pozabite**: Cilj ni le, da stvar deluje, ampak da razumete, ZAKAJ je izbrana metoda postavitve najboljša rešitev za ta specifičen oblikovalski izziv!

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve AI za prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.