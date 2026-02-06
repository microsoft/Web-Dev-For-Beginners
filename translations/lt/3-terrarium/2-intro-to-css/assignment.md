# CSS Refaktorizavimo Užduotis

## Tikslas

Transformuokite savo terariumo projektą, kad naudotumėte modernias CSS išdėstymo technikas! Refaktorizuokite dabartinį absoliutaus pozicionavimo metodą, kad įgyvendintumėte **Flexbox** arba **CSS Grid**, siekiant lengviau prižiūrimo ir reaguojančio dizaino. Ši užduotis iššūkis jums pritaikyti modernius CSS standartus, išlaikant terariumo vizualinį patrauklumą.

Suprasti, kada ir kaip naudoti skirtingus išdėstymo metodus, yra svarbus įgūdis šiuolaikinėje interneto kūrime. Ši užduotis jungia tradicines pozicionavimo technikas su šiuolaikinėmis CSS išdėstymo sistemomis.

## Užduoties Instrukcijos

### 1 etapas: Analizė ir planavimas
1. **Peržiūrėkite dabartinį terariumo kodą** – identifikuokite, kurie elementai šiuo metu naudoja absoliutų pozicionavimą
2. **Pasirinkite išdėstymo metodą** – nuspręskite, ar Flexbox, ar CSS Grid geriau atitinka jūsų dizaino tikslus
3. **Nupieškite naują išdėstymo struktūrą** – suplanuokite, kaip bus organizuoti konteineriai ir augalų elementai

### 2 etapas: Įgyvendinimas
1. **Sukurkite naują projekto versiją** atskirame aplanke
2. **Atnaujinkite HTML struktūrą** pagal poreikį, kad palaikytumėte pasirinkimą išdėstymo metodą
3. **Refaktorizuokite CSS** naudodami Flexbox arba CSS Grid vietoje absoliutaus pozicionavimo
4. **Išlaikykite vizualinį nuoseklumą** – užtikrinkite, kad augalai ir terariumo stiklainis būtų tose pačiose vietose
5. **Įgyvendinkite reaguojančią elgseną** – jūsų išdėstymas turėtų sklandžiai prisitaikyti prie skirtingų ekrano dydžių

### 3 etapas: Testavimas ir dokumentacija
1. **Testavimas įvairiuose naršyklėse** – patikrinkite, ar dizainas veikia Chrome, Firefox, Edge ir Safari
2. **Reaguojamumo testavimas** – patikrinkite išdėstymą mobiliuosiuose telefonuose, planšetėse ir darbalaukio ekranuose
3. **Dokumentacija** – pridėkite CSS komentarus, paaiškinančius jūsų išdėstymo pasirinkimus
4. **Ekrano nuotraukos** – nufotografuokite savo terariumą skirtingose naršyklėse ir ekrano dydžiuose

## Techniniai reikalavimai

### Išdėstymo įgyvendinimas
- **Pasirinkite VIENĄ**: įgyvendinkite arba Flexbox, arba CSS Grid (ne abu tuo pačiu metu tiems patiems elementams)
- **Reaguojantis dizainas**: naudokite santykinius vienetus (`rem`, `em`, `%`, `vw`, `vh`), o ne fiksuotus pikselius
- **Prieinamumas**: išlaikykite tinkamą semantinę HTML struktūrą ir alt tekstą
- **Kodo kokybė**: naudokite nuoseklias vardų konvencijas ir logiškai organizuokite CSS

### Modernios CSS funkcijos, kurias reikia įtraukti
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

### Naršyklių palaikymo reikalavimai
- **Chrome/Edge**: paskutinės 2 versijos
- **Firefox**: paskutinės 2 versijos  
- **Safari**: paskutinės 2 versijos
- **Mobilios naršyklės**: iOS Safari, Chrome Mobile

## Pateikimas

1. **Atnaujintas HTML failas** su pagerinta semantine struktūra
2. **Refaktorizuotas CSS failas** naudojant modernias išdėstymo technikas
3. **Ekrano nuotraukų rinkinys**, rodantis suderinamumą įvairiose naršyklėse:
   - Darbalaukio rodinys (1920x1080)
   - Planšetės rodinys (768x1024) 
   - Mobiliojo rodinys (375x667)
   - Bent 2 skirtingos naršyklės
4. **README.md failas**, dokumentuojantis:
   - Jūsų išdėstymo pasirinkimą (Flexbox prieš Grid) ir motyvaciją
   - Refaktorizavimo metu keltas iššūkius
   - Pastabas apie naršyklių suderinamumą
   - Instrukcijas, kaip paleisti jūsų kodą

## Vertinimo kriterijai

| Kriterijus | Puikus (4) | Geras (3) | Tobulėjantis (2) | Pradinis (1) |
|------------|------------|-----------|------------------|--------------|
| **Išdėstymo įgyvendinimas** | Meistriškas Flexbox/Grid naudojimas su pažangiomis funkcijomis; visiškai reaguojantis | Tinkamas įgyvendinimas su gera reaguojančia elgsena | Pagrindinis įgyvendinimas su smulkiais reaguojamumo trūkumais | Nepilnas arba neteisingas išdėstymo įgyvendinimas |
| **Kodo kokybė** | Švarus, gerai organizuotas CSS su prasmingais komentarais ir nuosekliu vardijimu | Gera organizacija su kai kuriais komentarais | Pakankama organizacija su minimaliais komentarais | Prasta organizacija; sunku suprasti |
| **Suderinamumas tarp naršyklių** | Tobulas suderinamumas visuose reikalaujamose naršyklėse su ekrano nuotraukomis | Gera suderinamumas su minimaliomis skirtumų pastabomis | Kai kurių suderinamumo problemų, kurios neveikia funkcionalumo | Didelės suderinamumo problemos arba trūksta testavimo |
| **Reaguojantis dizainas** | Išskirtinis mobile-first požiūris su sklandžiais perėjimais | Gera reaguojanti elgsena su tinkamais perėjimais | Pagrindinės reaguojančios savybės su kai kuriomis išdėstymo problemomis | Ribota arba sugadinta reaguojanti elgsena |
| **Dokumentacija** | Išsami README su detaliais paaiškinimais ir įžvalgomis | Gera dokumentacija, apimanti visus reikalavimus | Pagrindinė dokumentacija su minimaliais paaiškinimais | Nepilna arba trūksta dokumentacijos |

## Naudingos Nuorodos

### Išdėstymo metodų vadovai
- 📖 [Pilnas Flexbox vadovas](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Pilnas CSS Grid vadovas](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid – pasirinkite tinkamą įrankį](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Naršyklių testavimo įrankiai
- 🛠️ [Naršyklių kūrimo įrankių reaguojantis režimas](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use – funkcijų palaikymas](https://caniuse.com/)
- 🛠️ [BrowserStack – daugiau naršyklių testavimas](https://www.browserstack.com/)

### Kodo kokybės įrankiai
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM kontrasto tikrintuvas](https://webaim.org/resources/contrastchecker/)

## Papildomi Iššūkiai

🌟 **Pažangūs išdėstymai**: įgyvendinkite tiek Flexbox, tiek Grid skirtingose dizaino dalyse  
🌟 **Animacijų integracija**: pridėkite CSS perėjimus arba animacijas, veikiančias su nauju išdėstymu  
🌟 **Tamsus režimas**: įgyvendinkite temų perjungimą, naudojant CSS pasirinktinius kintamuosius  
🌟 **Konteinerių užklausos**: naudokite modernias konteinerių užklausų technikas komponentų lygiu reaguojančiam dizainui  

> 💡 **Atminkite**: Svarbu ne tik padaryti, kad veiktų, bet ir suprasti, KODĖL jūsų pasirinktas išdėstymo metodas yra geriausias sprendimas šiam konkrečiam dizaino iššūkiui!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, atkreipkite dėmesį, kad automatinius vertimus gali klysti arba juose gali būti netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas oficialiu šaltiniu. Esant kritinei informacijai, rekomenduojamas profesionalus žmogaus vertimas. Mes neatsakome už jokius nesusipratimus ar neteisingus aiškinimus, kylančius naudojant šį vertimą.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->