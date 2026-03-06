# AGENTS.md

## Projekto apžvalga

Tai mokymo programos saugykla, skirta pradedantiesiems mokyti pagrindinius interneto plėtros pagrindus. Programa – tai išsamus 12 savaičių kursas, sukurtas Microsoft Cloud Advocates, apimantis 24 praktines pamokas apie JavaScript, CSS ir HTML.

### Pagrindiniai komponentai

- **Mokymo turinys**: 24 struktūruotos pamokos, organizuotos projektinėmis moduliais
- **Praktiniai projektai**: Terariumas, Rašymo žaidimas, Naršyklės plėtinys, Kosmoso žaidimas, Banko programa, Kodo redaktorius ir DI pokalbių padėjėjas
- **Interaktyvūs klausimynai**: 48 testai po 3 klausimus (prieš ir po pamokų vertinimai)
- **Daugiakalbė palaikymas**: Automatiniai vertimai į daugiau nei 50 kalbų per GitHub Actions
- **Technologijos**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (DI projektams)

### Architektūra

- Mokomoji saugykla su pamoka pagrįsta struktūra
- Kiekviename pamokos aplanke yra README, kodo pavyzdžiai ir sprendimai
- Atskirai stovintys projektai atskirose direktorijose (quiz-app, įvairūs pamokų projektai)
- Vertimų sistema naudojant GitHub Actions (co-op-translator)
- Dokumentacija patiekiama per Docsify ir prieinama PDF formatu

## Nustatymo komandos

Ši saugykla skirta daugiausia mokomajam turiniui vartoti. Dirbant su konkrečiais projektais:

### Pagrindinės saugyklos nustatymas

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App nustatymas (Vue 3 + Vite)

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
# Vykdykite naršyklės specifines plėtinių įkėlimo instrukcijas
```

### Kosmoso žaidimo projektai

```bash
cd 6-space-game/solution
npm install
# Atidarykite index.html naršyklėje arba naudokite Live Server
```

### Pokalbių projekto (Python Backend) nustatymas

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nustatykite GITHUB_TOKEN aplinkos kintamąjį
python api.py
```

## Kūrimo darbo eiga

### Turinį kuriantiems

1. **Padarykite saugyklos fork'ą** į savo GitHub paskyrą
2. **Klonuokite savo fork'ą** lokaliai
3. **Sukurkite naują šaką** pakeitimams
4. Keiskite pamokų turinį arba kodo pavyzdžius
5. Išbandykite kodo pakeitimus atitinkamų projektų direktorijose
6. Pateikite pull request pagal bendradarbiavimo taisykles

### Mokinėms ir mokiniams

1. Padarykite fork'ą arba klonuokite saugyklą
2. Sekite pamokų direktorijas iš eilės
3. Skaitykite kiekvienos pamokos README bylas
4. Atlikite priešpamokinius testus adresu https://ff-quizzes.netlify.app/web/
5. Dirbkite su kodo pavyzdžiais pamokų aplankuose
6. Atlikite pratimus ir iššūkius
7. Atlikite po pamokų testus

### Gyvas vystymas

- **Dokumentacija**: Vykdykite `docsify serve` pagrindiniame aplanke (prievadas 3000)
- **Quiz App**: Vykdykite `npm run dev` quiz-app kataloge
- **Projektai**: Naudokite VS Code Live Server plėtinį HTML projektams
- **API projektai**: Vykdykite `npm start` atitinkamose API direktorijose

## Testavimo instrukcijos

### Quiz App testavimas

```bash
cd quiz-app
npm run lint       # Patikrinkite kodo stiliaus problemas
npm run build      # Patvirtinkite, kad kūrimas pavyksta
```

### Banko API testavimas

```bash
cd 7-bank-project/api
npm run lint       # Patikrinkite kodo stiliaus klaidas
node server.js     # Patvirtinkite, kad serveris paleidžiamas be klaidų
```

### Bendras testavimo metodas

- Tai mokomoji saugykla be išsamų automatizuotų testų
- Rankinis testavimas sutelktas į:
  - Kodo pavyzdžiai veikia be klaidų
  - Dokumentacijos nuorodos veikia tinkamai
  - Projektų kūrimas vyksta sklandžiai
  - Pavyzdžiai atitinka geriausią praktiką

### Prieš pateikiant tikrinimai

- Vykdykite `npm run lint` kataloguose su package.json
- Patikrinkite ar markdown nuorodos galioja
- Išbandykite kodo pavyzdžius naršyklėje arba Node.js
- Užtikrinkite, kad vertimai išlaiko tinkamą struktūrą

## Kodo stiliaus gairės

### JavaScript

- Naudokite modernią ES6+ sintaksę
- Laikykitės projektų pateiktų ESLint konfigūracijų
- Naudokite prasmingus kintamųjų ir funkcijų pavadinimus mokymo aiškumui
- Pridėkite komentarus, aiškinančius sąvokas mokiniams
- Formatuokite naudojant Prettier, jei yra konfigūracijos

### HTML/CSS

- Semantinės HTML5 žymos
- Reaguojantis dizainas
- Aiškios klasių vardų konvencijos
- Komentarai, paaiškinantys CSS technikas mokiniams

### Python

- PEP 8 stiliaus gairės
- Aiškūs, mokomieji kodo pavyzdžiai
- Tipų anotacijos, naudingos mokantis

### Markdown dokumentacija

- Aiški antraščių hierarchija
- Kodo blokai su kalbos nurodymu
- Nuorodos į papildomus išteklius
- Ekrano nuotraukos ir paveikslėliai `images/` kataloguose
- Paveikslėlių alt tekstai prieinamumui

### Failų organizavimas

- Pamokos pažymėtos skaičiais (1-getting-started-lessons, 2-js-basics, ir tt)
- Kiekviename projekte yra `solution/` ir dažnai `start/` arba `your-work/` katalogai
- Paveikslėliai saugomi pamoka specifiniuose `images/` aplankuose
- Vertimai kataloguose `translations/{language-code}/`

## Kūrimas ir diegimas

### Quiz App diegimas (Azure Static Web Apps)

quiz-app sukonfigūruotas Azure Static Web Apps diegimui:

```bash
cd quiz-app
npm run build      # Sukuria dist/ aplanką
# Diegia per GitHub Actions darbo eigą po nurodymo į main branch
```

Azure Static Web Apps konfigūracija:
- **Programos vieta**: `/quiz-app`
- **Išvesties vieta**: `dist`
- **Darbo eiga**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentacijos PDF generavimas

```bash
npm install                    # Įdiekite docsify-to-pdf
npm run convert               # Generuoti PDF iš docs
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Įdiekite Docsify globally
docsify serve                 # Tiekite localhost:3000
```

### Projektų specifiniai kūrimo procesai

Kiekvienas projekto katalogas gali turėti savo kūrimo procesą:
- Vue projektai: `npm run build` sukuria gamybinius paketus
- Statiniai projektai: nėra kūrimo žingsnio, failai patiekiami tiesiogiai

## Pull Request gairės

### Pavadinimų formatas

Naudokite aiškius, aprašomuosius pavadinimus, nurodančius keitimo sritį:
- `[Quiz-app] Pridėti naują testą pamokai X`
- `[Lesson-3] Ištaisyta rašybos klaida terariumo projekte`
- `[Translation] Pridėtas ispanų kalbos vertimas 5 pamokai`
- `[Docs] Atnaujintos diegimo instrukcijos`

### Būtini patikrinimai

Prieš pateikiant PR:

1. **Kodo kokybė**:
   - Vykdykite `npm run lint` paveiktuose projekto kataloguose
   - Ištaisykite visus lint klaidų ir įspėjimų pranešimus

2. **Kūrimo patikra**:
   - Vykdykite `npm run build` jei taikoma
   - Įsitikinkite, kad nėra kūrimo klaidų

3. **Nuorodų tikrinimas**:
   - Išbandykite visas markdown nuorodas
   - Patikrinkite, ar paveikslėlių nuorodos veikia

4. **Turinio peržiūra**:
   - Patikrinkite rašybą ir gramatiką
   - Užtikrinkite, kad kodo pavyzdžiai yra teisingi ir mokomieji
   - Patvirtinkite, kad vertimai išlaikė pradinę prasmę

### Bendradarbiavimo reikalavimai

- Sutinkate su Microsoft CLA (automatinis tikrinimas pirmame PR)
- Laikykitės [Microsoft atvirojo kodo elgesio kodekso](https://opensource.microsoft.com/codeofconduct/)
- Žr. [CONTRIBUTING.md](./CONTRIBUTING.md) su išsamiomis gairėmis
- Nurodykite susijusių klausimų numerius PR aprašyme, jei taikoma

### Peržiūros procesas

- PR peržiūri prižiūrėtojai ir bendruomenė
- Skiriamas pirmenybė mokomajam aiškumui
- Kodo pavyzdžiai turi atitikti dabartinę geriausią praktiką
- Vertimai vertinami dėl tikslumo ir kultūrinės tinkamumo

## Vertimo sistema

### Automatizuotas vertimas

- Naudoja GitHub Actions su co-op-translator darbo eiga
- Automatiškai verčia į daugiau nei 50 kalbų
- Šaltiniai yra pagrindiniuose kataloguose
- Išversti failai saugomi `translations/{language-code}/` kataloguose

### Rankinis vertimo patobulinimas

1. Suraskite failą `translations/{language-code}/`
2. Atlikite patobulinimus išlaikydami struktūrą
3. Užtikrinkite, kad kodo pavyzdžiai išlieka veikiantys
4. Išbandykite vietinius testų klausimus

### Vertimo metaduomenys

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

**Quiz app nepaleidžiamas**:
- Patikrinkite Node.js versiją (rekomenduojama v14+)
- Ištrinkite `node_modules` ir `package-lock.json`, paleiskite `npm install` iš naujo
- Patikrinkite prievado konfliktus (numatytas Vite naudoja prievadą 5173)

**API serveris nepakraunamas**:
- Patikrinkite, ar Node.js versija atitinka minimalų reikalavimą (node >=10)
- Patikrinkite, ar prievadas neužimtas
- Įsitikinkite, kad visos priklausomybės įdiegtos per `npm install`

**Naršyklės plėtinys neįsikrauna**:
- Patikrinkite, ar manifest.json tinkamai suformatuotas
- Peržiūrėkite naršyklės konsolės klaidas
- Laikykitės naršyklės specifinių plėtinių diegimo instrukcijų

**Python pokalbių projekto problemos**:
- Įsitikinkite, kad įdiegtas OpenAI paketas: `pip install openai`
- Patikrinkite, ar nustatytas GITHUB_TOKEN aplinkos kintamasis
- Patikrinkite GitHub modelių prieigos teises

**Docsify neaptarnauja dokumentų**:
- Įdiekite docsify-cli globaliai: `npm install -g docsify-cli`
- Vykdykite iš saugyklos šaknies direktorijos
- Patikrinkite, ar yra `docs/_sidebar.md`

### Vystymo aplinkos patarimai

- Naudokite VS Code su Live Server plėtiniu HTML projektams
- Įdiekite ESLint ir Prettier plėtinius vientisam formatavimui
- Naudokite naršyklės kūrėjų įrankius JavaScript derinimui
- Vue projektams įdiekite Vue DevTools naršyklės plėtinį

### Veikimo našumo aspektai

- Daug vertimų failų (50+ kalbų) reiškia, kad viso repo klonavimas užima daug vietos
- Naudokite seklaus klonavimą, jei dirbate tik su turiniu: `git clone --depth 1`
- Išjunkite vertimų paieškas dirbant su anglų turiniu
- Kūrimo procesai gali būti lėti pirmu paleidimu (npm install, Vite build)

## Saugumo aspektai

### Aplinkos kintamieji

- API raktai neturėtų būti commit’inami į saugyklą
- Naudokite `.env` failus (jau įtraukti į `.gitignore`)
- Reikalingi aplinkos kintamieji dokumentuojami projekto README

### Python projektai

- Naudokite virtualias aplinkas: `python -m venv venv`
- Laikykite priklausomybes atnaujintas
- GitHub tokenai turi turėti minimalias reikalingas teises

### GitHub modelių prieiga

- Reikalingi asmeniniai prieigos tokenai (PAT) GitHub modeliams
- Tokenai turėtų būti laikomi aplinkos kintamuosiuose
- Niekada neįtraukti tokenų ar kredencialų į saugyklą

## Papildomos pastabos

### Tikslinė auditorija

- Visiškai pradedantieji interneto kūrimo srityje
- Studentai ir savarankiški besimokantieji
- Mokytojai, naudojantys programą klasėje
- Turinys skirtas prieinamumui ir laipsniškam įgūdžių ugdymui

### Mokymo filosofija

- Projektu pagrįstas mokymas
- Dažni žinių patikrinimai (testai)
- Praktiniai programavimo pratimai
- Tikros pasaulio taikymo pavyzdžiai
- Dėmesys pagrindams prieš frameworks

### Saugyklos priežiūra

- Aktyvi mokinių ir kūrėjų bendruomenė
- Reguliarūs priklausomybių ir turinio atnaujinimai
- Prižiūrėtojai stebi issues ir diskusijas
- Vertimų atnaujinimai automatizuoti per GitHub Actions

### Susiję ištekliai

- [Microsoft Learn moduliai](https://docs.microsoft.com/learn/)
- [Student Hub ištekliai](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekomenduojamas besimokantiesiems
- Papildomi kursai: Generatyvioji DI, Duomenų mokslas, ML, IoT mokymo programos

### Darbas su konkrečiais projektais

Išsamios instrukcijos apie atskirus projektus yra README bylose:
- `quiz-app/README.md` - Vue 3 testų aplikacija
- `7-bank-project/README.md` - Banko programa su autentifikacija
- `5-browser-extension/README.md` - Naršyklės plėtinių kūrimas
- `6-space-game/README.md` - Žaidimo „Canvas“ technologija kūrimas
- `9-chat-project/README.md` - DI pokalbių padėjėjo projektas

### Monorepo struktūra

Nors tai nėra tradicinė monorepo saugykla, ji turi kelis nepriklausomus projektus:
- Kiekviena pamoka yra savarankiška
- Projektai nesidalija priklausomybėmis
- Dirbkite su atskirais projektais neįtakojant kitų
- Klonuokite visą saugyklą, jei norite pilno mokymo turinio

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų arba netikslumų. Pirminis dokumentas originalia kalba turi būti laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojamas profesionalus žmogaus atliktas vertimas. Mes neatsakome už jokius nesusipratimus ar neteisingus aiškinimus, kylančius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->