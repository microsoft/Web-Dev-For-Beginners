# AGENTS.md

## Projekto apžvalga

Tai yra mokymo programos saugykla, skirta pradedantiesiems mokyti interneto kūrimo pagrindų. Mokymo programa yra visapusiškas 12 savaičių kursas, sukurtas Microsoft Cloud Advocates, apimantis 24 praktinius užsiėmimus apie JavaScript, CSS ir HTML.

### Pagrindinės sudedamosios dalys

- **Mokomasis turinys**: 24 struktūruotos pamokos, organizuotos pagal projektus
- **Praktiniai projektai**: Terarium, Rašymo žaidimas, Naršyklės plėtinys, Kosminis žaidimas, Banko programa, Kodo redaktorius ir AI pokalbių asistentas
- **Interaktyvūs testai**: 48 testai po 3 klausimus kiekviename (prieš ir po pamokos vertinimai)
- **Daugiakalbė palaikymas**: automatizuoti vertimai į daugiau nei 50 kalbų per GitHub Actions
- **Technologijos**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektams)

### Architektūra

- Mokomoji saugykla su pamokomis pagrįsta struktūra
- Kiekviena pamoka turi savo aplanką su README, kodo pavyzdžiais ir sprendimais
- Atskiri projektai atskiruose kataloguose (quiz-app, įvairūs pamokų projektai)
- Vertimų sistema naudojant GitHub Actions (co-op-translator)
- Dokumentacija pateikiama per Docsify ir prieinama PDF formatu

## Diegimo komandos

Ši saugykla skirta pirmiausia mokomajam turiniui vartoti. Dirbant su konkrečiais projektais:

### Pagrindinės saugyklos diegimas

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Testų programėlės diegimas (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Paleisti kūrimo serverį
npm run build      # Kurti gamybai
npm run lint       # Vykdyti ESLint
```

### Banko projekto API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Paleisti API serverį
npm run lint       # Vykdyti ESLint
npm run format     # Formatuoti su Prettier
```

### Naršyklės plėtinių projektai

```bash
cd 5-browser-extension/solution
npm install
# Vadovaukitės naršyklės specifinėmis plėtinių įkėlimo instrukcijomis
```

### Kosminio žaidimo projektai

```bash
cd 6-space-game/solution
npm install
# Atidarykite index.html naršyklėje arba naudokite Live Server
```

### Pokalbių projekto (Python backend) diegimas

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nustatykite GITHUB_TOKEN aplinkos kintamąjį
python api.py
```

## Kūrimo darbo eiga

### Turinio kūrėjams

1. **Padarykite saugyklos fork’ą** į savo GitHub paskyrą
2. **Klonuokite savo fork’ą** vietoje
3. **Sukurkite naują šaką** savo pakeitimams
4. Redaguokite pamokų turinį arba kodo pavyzdžius
5. Išbandykite kodo pakeitimus susijusiuose projekto kataloguose
6. Pateikite pull request’us pagal indėlio taisykles

### Mokiniams

1. Padarykite fork’ą arba klonuokite saugyklą
2. Sekite pamokų katalogus nuosekliai
3. Skaitykite README failus kiekvienoje pamokoje
4. Užbaikite priešpamokinius testus adresu https://ff-quizzes.netlify.app/web/
5. Dirbkite su kodo pavyzdžiais pamokų aplankuose
6. Atlikite užduotis ir iššūkius
7. Išbandykite po pamokos testus

### Tiesioginis kūrimas

- **Dokumentacija**: paleiskite `docsify serve` pagrindiniame kataloge (3000 portas)
- **Testų programėlė**: paleiskite `npm run dev` quiz-app kataloge
- **Projektai**: naudokite VS Code Live Server plėtinį HTML projektams
- **API projektai**: paleiskite `npm start` atitinkamuose API kataloguose

## Testavimo instrukcijos

### Testų programėlės testavimas

```bash
cd quiz-app
npm run lint       # Patikrinkite kodo stiliaus problemas
npm run build      # Patvirtinkite, kad sukūrimas pavyksta
```

### Banko API testavimas

```bash
cd 7-bank-project/api
npm run lint       # Patikrinkite kodo stiliaus klaidas
node server.js     # Patikrinkite, ar serveris paleidžiamas be klaidų
```

### Bendras testavimo metodas

- Tai yra mokomoji saugykla be išsamiai automatizuotų testų
- Rankinis testavimas orientuotas į:
  - Kodo pavyzdžių veikimą be klaidų
  - Nuorodų dokumentacijoje veikimą
  - Sėkmingą projektų surinkimą
  - Pavyzdžių atitikimą geriausioms praktikoms

### Patikrinimai prieš pateikiant pakeitimus

- Paleiskite `npm run lint` kataloguose su package.json
- Patikrinkite, ar markdown nuorodos veikia
- Išbandykite kodo pavyzdžius naršyklėje arba Node.js
- Įsitikinkite, kad vertimai išlaiko struktūrą

## Kodo stiliaus gairės

### JavaScript

- Naudokite modernią ES6+ sintaksę
- Laikykitės standartinių ESLint konfigūracijų projektuose
- Naudokite prasmingus kintamųjų ir funkcijų pavadinimus mokomajam aiškumui
- Rašykite komentarus, paaiškinančius koncepcijas mokiniams
- Formatuokite naudodami Prettier, jei konfigūruota

### HTML/CSS

- Semantiniai HTML5 elementai
- Atsakingo dizaino principai
- Aiškios klasių vardų konvencijos
- Komentarai paaiškinantys CSS technikas mokiniams

### Python

- PEP 8 stiliaus gairės
- Aiškūs, mokomieji kodo pavyzdžiai
- Tipų užuominos, kur naudingos mokymuisi

### Markdown dokumentacija

- Aiški antraščių hierarchija
- Kodo blokai su kalbos žymėjimu
- Nuorodos į papildomus šaltinius
- Ekrano nuotraukos ir paveikslėliai `images/` kataloguose
- Alt tekstas paveikslėliams prieinamumui

### Failų organizavimas

- Pamokos numeruojamos nuosekliai (1-getting-started-lessons, 2-js-basics ir kt.)
- Kiekvienas projektas turi `solution/` ir dažnai `start/` arba `your-work/` katalogus
- Paveikslėliai saugomi kiekvienos pamokos `images/` aplankuose
- Vertimai saugomi `translations/{kalbos-kodas}/` struktūroje

## Surinkimas ir diegimas

### Testų programėlės diegimas (Azure Static Web Apps)

Quiz-app sukonfigūruotas Azure Static Web Apps diegimui:

```bash
cd quiz-app
npm run build      # Sukuria dist/ aplanką
# Diegia per GitHub Actions darbo eigą, kai į pagrindinę šaką įdedama nauja versija
```

Azure Static Web Apps konfigūracija:
- **Programėlės vieta**: `/quiz-app`
- **Išvesties vieta**: `dist`
- **Darbo eiga**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentacijos PDF generavimas

```bash
npm install                    # Įdiekite docsify-to-pdf
npm run convert               # Generuoti PDF iš dokumentų
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Įdiekite Docsify globaliai
docsify serve                 # Tiekite per localhost:3000
```

### Projektams būdingi surinkimo veiksmai

Kiekviename projekto kataloge gali būti savas surinkimo procesas:
- Vue projektai: `npm run build` sukuria gamybinius paketus
- Statiniai projektai: nėra surinkimo žingsnio, failai tiesiogiai tiekiami

## Pull request gairės

### Pavadinimų formatas

Naudokite aiškius, aprašomuosius pavadinimus, nurodančius pakeitimo sritį:
- `[Quiz-app] Įdėti naują testą pamokai X`
- `[Lesson-3] Ištaisytas rašybos klaida terariumo projekte`
- `[Translation] Įterptas ispaniškas vertimas pamokai 5`
- `[Docs] Atnaujintos diegimo instrukcijos`

### Būtini patikrinimai

Prieš pateikiant PR:

1. **Kodo kokybė**:
   - Paleiskite `npm run lint` paveiktuose projekto kataloguose
   - Ištaisyti visus lint klaidų ir įspėjimų pranešimus

2. **Surinkimo patikra**:
   - Jei taikoma, paleiskite `npm run build`
   - Užtikrinkite, kad nėra surinkimo klaidų

3. **Nuorodų tikrinimas**:
   - Išbandykite visas markdown nuorodas
   - Patikrinkite paveikslėlių nuorodas

4. **Turinio peržiūra**:
   - Redagavimas dėl rašybos ir gramatikos
   - Užtikrinkite, kad kodo pavyzdžiai yra teisingi ir mokomieji
   - Patikrinkite, ar vertimai išlaiko originalią prasmę

### Indėlio reikalavimai

- Sutikite su Microsoft CLA (automatizuotas patikrinimas pirmam PR)
- Laikykitės [Microsoft atvirojo kodo elgesio kodekso](https://opensource.microsoft.com/codeofconduct/)
- Žr. [CONTRIBUTING.md](./CONTRIBUTING.md) dėl išsamesnių gairių
- Nurodykite problemų numerius PR aprašyme, jei taikoma

### Peržiūros procesas

- PR peržiūri prižiūrėtojai ir bendruomenė
- Prioritetas skiriamas mokomajam aiškumui
- Kodo pavyzdžiai turi atitikti dabartines geriausias praktikas
- Vertimai peržiūrimi dėl tikslumo ir kultūrinės tinkamumo

## Vertimų sistema

### Automatizuotas vertimas

- Naudoja GitHub Actions su co-op-translator darbo eiga
- Automatiškai verčia į daugiau nei 50 kalbų
- Šaltinio failai pagrindiniuose kataloguose
- Išversti failai saugomi `translations/{kalbos-kodas}/` kataloguose

### Rankinių vertimų patobulinimų pridėjimas

1. Raskite failą `translations/{kalbos-kodas}/`
2. Atlikite patobulinimus saugodami struktūrą
3. Įsitikinkite, kad kodo pavyzdžiai veikia
4. Išbandykite lokalizuotą testų turinį

### Vertimų metaduomenys

Išversti failai turi metaduomenų antraštę:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Derinimas ir trikčių šalinimas

### Dažnos problemos

**Testų programėlė nepaleidžiama**:
- Patikrinkite Node.js versiją (rekomenduojama v14+)
- Ištrinkite `node_modules` ir `package-lock.json`, vėl paleiskite `npm install`
- Pasitikrinkite, ar nėra prievado konflikto (numatyta: Vite naudoja 5173 prievadą)

**API serveris nepaleidžiamas**:
- Patikrinkite, ar Node.js versija atitinka reikalavimus (node >=10)
- Įsitikinkite, kad prievadas nėra užimtas
- Užtikrinkite, kad įdiegti visi priklausymai su `npm install`

**Naršyklės plėtinys nesikrauna**:
- Patikrinkite, ar manifest.json tinkamai suformatuotas
- Peržiūrėkite naršyklės konsolę dėl klaidų
- Laikykitės naršyklės specifinių plėtinių diegimo instrukcijų

**Python pokalbių projekto problemos**:
- Įsitikinkite, kad įdiegtas OpenAI paketas: `pip install openai`
- Patikrinkite, ar nustatytas GITHUB_TOKEN aplinkos kintamasis
- Patikrinkite GitHub modelių prieigos leidimus

**Docsify nesuteikia dokumentacijos**:
- Įdiekite docsify-cli globaliai: `npm install -g docsify-cli`
- Paleiskite iš saugyklos šaknies katalogo
- Įsitikinkite, kad egzistuoja `docs/_sidebar.md`

### Kūrimo aplinkos patarimai

- Naudokite VS Code su Live Server plėtiniu HTML projektams
- Įdiekite ESLint ir Prettier plėtinius vientisam formatavimui
- Naudokite naršyklės DevTools JavaScript derinimui
- Vue projektams įdiekite Vue DevTools naršyklės plėtinį

### Veikimo optimizavimas

- Daug išverstų failų (daugiau nei 50 kalbų) reiškia, kad pilni klonai yra dideli
- Naudokite seklią klonavimą, jei dirbate tik su turiniu: `git clone --depth 1`
- Vertimus išskirkite iš paieškų dirbant su anglų turiniu
- Surinkimo procesai gali būti lėtesni pirmą kartą (npm install, Vite build)

## Saugumo svarstymai

### Aplinkos kintamieji

- API raktai niekada neturėtų būti įtraukti į saugyklą
- Naudokite `.env` failus (jau įtraukti į `.gitignore`)
- Dokumentuokite reikalingus aplinkos kintamuosius projekto README

### Python projektai

- Naudokite virtualias aplinkas: `python -m venv venv`
- Laikykite priklausomybes atnaujintas
- GitHub token’ai turi turėti tik minimalias reikalingas teises

### GitHub modelių prieiga

- Reikia asmeninių prieigos tokenų (PAT) GitHub modeliams
- Token’us saugokite kaip aplinkos kintamuosius
- Niekada nenaudokite commit’inant tokenų ar prisijungimo duomenų

## Papildomos pastabos

### Tikslinė auditorija

- Visi pradedantieji interneto kūrime
- Studentai ir savarankiškai besimokantys
- Mokytojai, naudojantys mokymo programą klasėse
- Turinys pritaikytas prieinamumui ir palaipsniui įgyjamam įgūdžių augimui

### Mokymosi filosofija

- Mokymasis per projektus
- Dažni žinių patikrinimai (testai)
- Praktiniai kodo rašymo pratimai
- Realūs pritaikymo pavyzdžiai
- Dėmesys pagrindams prieš technologijų karkasus

### Saugyklos priežiūra

- Aktyvi mokinių ir prisidėjusiųjų bendruomenė
- Reguliarūs atnaujinimai priklausomybių ir turinio srityje
- Problemos ir diskusijos stebimos prižiūrėtojų
- Vertimų atnaujinimai automatiškai per GitHub Actions

### Susiję ištekliai

- [Microsoft Learn moduliai](https://docs.microsoft.com/learn/)
- [Studentų centras](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekomenduojamas mokiniams
- Papildomi kursai: Generatyvinis AI, Duomenų mokslas, ML, IoT programos

### Darbas su konkrečiais projektais

Išsamias instrukcijas žr. README failuose:
- `quiz-app/README.md` - Vue 3 testų programėlė
- `7-bank-project/README.md` - Banko programa su autentifikacija
- `5-browser-extension/README.md` - Naršyklės plėtinio kūrimas
- `6-space-game/README.md` - Canvas pagrindu sukurtas žaidimas
- `9-chat-project/README.md` - AI pokalbių asistento projektas

### Monorepo struktūra

Nors tai nėra tradicinis monorepozitorijus, ši saugykla talpina kelis nepriklausomus projektus:
- Kiekviena pamoka yra savarankiška
- Projektai nesidalija priklausomybėmis
- Dirbkite su atskirais projektais nesutrigdami kitų
- Klonuokite visą repo norėdami turėti visą mokymo programą

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojamas profesionalus žmogaus vertimas. Mes neatsakome už bet kokius nesusipratimus ar neteisingus aiškinimus, atsirandančius naudojant šį vertimą.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->