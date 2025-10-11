<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a362efd06d64d4134a0cfe8515a86d34",
  "translation_date": "2025-10-03T11:43:45+00:00",
  "source_file": "AGENTS.md",
  "language_code": "lt"
}
-->
# AGENTS.md

## Projekto apžvalga

Tai yra mokymo programa, skirta pradedantiesiems mokyti interneto kūrimo pagrindų. Mokymo programa yra išsamus 12 savaičių kursas, sukurtas Microsoft Cloud Advocates, apimantis 24 praktines pamokas apie JavaScript, CSS ir HTML.

### Pagrindiniai komponentai

- **Mokomoji medžiaga**: 24 struktūruotos pamokos, suskirstytos į projektų pagrindu sukurtus modulius
- **Praktiniai projektai**: Terariumas, Rašymo žaidimas, Naršyklės plėtinys, Kosmoso žaidimas, Banko programa, Kodo redaktorius ir AI pokalbių asistentas
- **Interaktyvūs testai**: 48 testai, kiekviename po 3 klausimus (prieš/pamokos vertinimai)
- **Daugiakalbė parama**: Automatiniai vertimai į daugiau nei 50 kalbų naudojant GitHub Actions
- **Technologijos**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektams)

### Architektūra

- Mokomoji saugykla su pamokų pagrindu sukurta struktūra
- Kiekviename pamokos aplanke yra README, kodo pavyzdžiai ir sprendimai
- Savarankiški projektai atskiruose kataloguose (quiz-app, įvairūs pamokų projektai)
- Vertimo sistema naudojant GitHub Actions (co-op-translator)
- Dokumentacija pateikiama per Docsify ir prieinama kaip PDF

## Nustatymo komandos

Ši saugykla skirta daugiausia mokomosios medžiagos naudojimui. Norint dirbti su konkrečiais projektais:

### Pagrindinės saugyklos nustatymas

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Testų programos nustatymas (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### Banko projekto API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Naršyklės plėtinių projektai

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Kosmoso žaidimo projektai

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Pokalbių projektas (Python backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Kūrimo darbo eiga

### Turinio kūrėjams

1. **Fork saugyklą** į savo GitHub paskyrą
2. **Klonuokite savo fork** lokaliai
3. **Sukurkite naują šaką** savo pakeitimams
4. Atlikite pakeitimus pamokų turinyje ar kodo pavyzdžiuose
5. Išbandykite kodo pakeitimus atitinkamuose projektų kataloguose
6. Pateikite pull requests laikydamiesi įnašų gairių

### Mokiniams

1. Fork arba klonuokite saugyklą
2. Eikite per pamokų katalogus nuosekliai
3. Skaitykite README failus kiekvienai pamokai
4. Atlikite prieš pamoką testus adresu https://ff-quizzes.netlify.app/web/
5. Dirbkite su kodo pavyzdžiais pamokų aplankuose
6. Atlikite užduotis ir iššūkius
7. Atlikite po pamokos testus

### Tiesioginis kūrimas

- **Dokumentacija**: Paleiskite `docsify serve` šakniniame kataloge (portas 3000)
- **Testų programa**: Paleiskite `npm run dev` quiz-app kataloge
- **Projektai**: Naudokite VS Code Live Server plėtinį HTML projektams
- **API projektai**: Paleiskite `npm start` atitinkamuose API kataloguose

## Testavimo instrukcijos

### Testų programos testavimas

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Banko API testavimas

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Bendras testavimo požiūris

- Tai yra mokomoji saugykla be išsamių automatizuotų testų
- Rankinis testavimas apima:
  - Kodo pavyzdžiai veikia be klaidų
  - Nuorodos dokumentacijoje veikia teisingai
  - Projektų kūrimas sėkmingai užbaigtas
  - Pavyzdžiai atitinka geriausią praktiką

### Prieš pateikimą patikrinimai

- Paleiskite `npm run lint` kataloguose su package.json
- Patikrinkite, ar markdown nuorodos yra galiojančios
- Testuokite kodo pavyzdžius naršyklėje arba Node.js
- Įsitikinkite, kad vertimai išlaiko tinkamą struktūrą

## Kodo stiliaus gairės

### JavaScript

- Naudokite modernią ES6+ sintaksę
- Laikykitės standartinių ESLint konfigūracijų, pateiktų projektuose
- Naudokite prasmingus kintamųjų ir funkcijų pavadinimus mokymosi aiškumui
- Pridėkite komentarus, paaiškinančius koncepcijas mokiniams
- Formatuokite naudodami Prettier, kur tai nustatyta

### HTML/CSS

- Semantiniai HTML5 elementai
- Atsako dizaino principai
- Aiškūs klasių pavadinimų konvencijos
- Komentarai, paaiškinantys CSS technikas mokiniams

### Python

- PEP 8 stiliaus gairės
- Aiškūs, mokomieji kodo pavyzdžiai
- Tipų užuominos, kur jos naudingos mokymuisi

### Markdown dokumentacija

- Aiški antraščių hierarchija
- Kodo blokai su kalbos specifikacija
- Nuorodos į papildomus išteklius
- Ekrano nuotraukos ir vaizdai `images/` kataloguose
- Alt tekstas vaizdams dėl prieinamumo

### Failų organizavimas

- Pamokos numeruojamos nuosekliai (1-getting-started-lessons, 2-js-basics ir t.t.)
- Kiekvienas projektas turi `solution/` ir dažnai `start/` arba `your-work/` katalogus
- Vaizdai saugomi pamokų specifiniuose `images/` aplankuose
- Vertimai `translations/{language-code}/` struktūroje

## Kūrimas ir diegimas

### Testų programos diegimas (Azure Static Web Apps)

Testų programa sukonfigūruota Azure Static Web Apps diegimui:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Azure Static Web Apps konfigūracija:
- **Programos vieta**: `/quiz-app`
- **Išvesties vieta**: `dist`
- **Darbo eiga**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentacijos PDF generavimas

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Projektų specifiniai kūrimai

Kiekvienas projekto katalogas gali turėti savo kūrimo procesą:
- Vue projektai: `npm run build` sukuria produkcijos paketus
- Statiniai projektai: Nėra kūrimo žingsnio, tiesiogiai aptarnaukite failus

## Pull Request gairės

### Pavadinimo formatas

Naudokite aiškius, aprašomuosius pavadinimus, nurodančius pakeitimų sritį:
- `[Quiz-app] Pridėti naują testą pamokai X`
- `[Lesson-3] Ištaisyti klaidą terariumo projekte`
- `[Translation] Pridėti ispanų vertimą pamokai 5`
- `[Docs] Atnaujinti nustatymo instrukcijas`

### Reikalingi patikrinimai

Prieš pateikiant PR:

1. **Kodo kokybė**:
   - Paleiskite `npm run lint` paveiktuose projektų kataloguose
   - Ištaisykite visas linting klaidas ir įspėjimus

2. **Kūrimo patikrinimas**:
   - Paleiskite `npm run build`, jei taikoma
   - Įsitikinkite, kad nėra kūrimo klaidų

3. **Nuorodų patikrinimas**:
   - Testuokite visas markdown nuorodas
   - Patikrinkite, ar vaizdų nuorodos veikia

4. **Turinio peržiūra**:
   - Patikrinkite rašybą ir gramatiką
   - Įsitikinkite, kad kodo pavyzdžiai yra teisingi ir mokomieji
   - Patikrinkite, ar vertimai išlaiko originalią prasmę

### Įnašo reikalavimai

- Sutikite su Microsoft CLA (automatinis patikrinimas pirmame PR)
- Laikykitės [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Žiūrėkite [CONTRIBUTING.md](./CONTRIBUTING.md) dėl išsamių gairių
- Nurodykite problemų numerius PR aprašyme, jei taikoma

### Peržiūros procesas

- PR peržiūrimi palaikytojų ir bendruomenės
- Mokymo aiškumas yra prioritetas
- Kodo pavyzdžiai turėtų laikytis dabartinės geriausios praktikos
- Vertimai peržiūrimi dėl tikslumo ir kultūrinio tinkamumo

## Vertimo sistema

### Automatinis vertimas

- Naudoja GitHub Actions su co-op-translator darbo eiga
- Automatiškai verčia į daugiau nei 50 kalbų
- Šaltinio failai pagrindiniuose kataloguose
- Išversti failai `translations/{language-code}/` kataloguose

### Rankinių vertimo patobulinimų pridėjimas

1. Suraskite failą `translations/{language-code}/`
2. Patobulinkite išlaikydami struktūrą
3. Įsitikinkite, kad kodo pavyzdžiai išlieka funkcionalūs
4. Testuokite bet kokį lokalizuotą testų turinį

### Vertimo metaduomenys

Išversti failai apima metaduomenų antraštę:
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

**Testų programa nepasileidžia**:
- Patikrinkite Node.js versiją (rekomenduojama v14+)
- Ištrinkite `node_modules` ir `package-lock.json`, paleiskite `npm install` iš naujo
- Patikrinkite portų konfliktus (numatytasis: Vite naudoja portą 5173)

**API serveris nepasileidžia**:
- Įsitikinkite, kad Node.js versija atitinka minimumą (node >=10)
- Patikrinkite, ar portas jau naudojamas
- Įsitikinkite, kad visos priklausomybės įdiegtos su `npm install`

**Naršyklės plėtinys neįsikrauna**:
- Patikrinkite, ar manifest.json tinkamai suformatuotas
- Patikrinkite naršyklės konsolę dėl klaidų
- Laikykitės naršyklės specifinių plėtinio diegimo instrukcijų

**Python pokalbių projekto problemos**:
- Įsitikinkite, kad OpenAI paketas įdiegtas: `pip install openai`
- Patikrinkite, ar GITHUB_TOKEN aplinkos kintamasis nustatytas
- Patikrinkite GitHub Models prieigos leidimus

**Docsify nepateikia dokumentų**:
- Įdiekite docsify-cli globaliai: `npm install -g docsify-cli`
- Paleiskite iš saugyklos šaknies katalogo
- Patikrinkite, ar `docs/_sidebar.md` egzistuoja

### Kūrimo aplinkos patarimai

- Naudokite VS Code su Live Server plėtiniu HTML projektams
- Įdiekite ESLint ir Prettier plėtinius dėl nuoseklaus formatavimo
- Naudokite naršyklės DevTools JavaScript derinimui
- Vue projektams įdiekite Vue DevTools naršyklės plėtinį

### Našumo svarstymai

- Didelis išverstų failų skaičius (50+ kalbų) reiškia, kad pilni klonai yra dideli
- Naudokite seklią kloną, jei dirbate tik su turiniu: `git clone --depth 1`
- Išskirkite vertimus iš paieškų, kai dirbate su anglų turiniu
- Kūrimai gali būti lėti pirmą kartą (npm install, Vite build)

## Saugumo svarstymai

### Aplinkos kintamieji

- API raktai niekada neturėtų būti įtraukti į saugyklą
- Naudokite `.env` failus (jau įtraukti į `.gitignore`)
- Dokumentuokite reikalingus aplinkos kintamuosius projekto README failuose

### Python projektai

- Naudokite virtualias aplinkas: `python -m venv venv`
- Laikykite priklausomybes atnaujintas
- GitHub raktai turėtų turėti minimaliai reikalingus leidimus

### GitHub Models prieiga

- Asmeniniai prieigos raktai (PAT) reikalingi GitHub Models
- Raktai turėtų būti saugomi kaip aplinkos kintamieji
- Niekada neįtraukite raktų ar prisijungimo duomenų

## Papildomos pastabos

### Tikslinė auditorija

- Visiški pradedantieji interneto kūrime
- Studentai ir savarankiškai besimokantys
- Mokytojai, naudojantys mokymo programą klasėse
- Turinys sukurtas prieinamumui ir laipsniškam įgūdžių ugdymui

### Mokymo filosofija

- Projektų pagrindu mokymosi požiūris
- Dažni žinių patikrinimai (testai)
- Praktiniai kodavimo pratimai
- Realūs taikymo pavyzdžiai
- Dėmesys pagrindams prieš pereinant prie karkasų

### Saugyklos priežiūra

- Aktyvi mokinių ir įnašų bendruomenė
- Reguliarūs priklausomybių ir turinio atnaujinimai
- Problemos ir diskusijos stebimos palaikytojų
- Vertimo atnaujinimai automatizuoti per GitHub Actions

### Susiję ištekliai

- [Microsoft Learn moduliai](https://docs.microsoft.com/learn/)
- [Studentų centro ištekliai](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekomenduojamas mokiniams
- Papildomi kursai: Generatyvinis AI, Duomenų mokslas, ML, IoT mokymo programos prieinamos

### Darbas su specifiniais projektais

Dėl išsamių instrukcijų apie atskirus projektus, žiūrėkite README failus:
- `quiz-app/README.md` - Vue 3 testų programa
- `7-bank-project/README.md` - Banko programa su autentifikacija
- `5-browser-extension/README.md` - Naršyklės plėtinio kūrimas
- `6-space-game/README.md` - Žaidimo kūrimas naudojant Canvas
- `9-chat-project/README.md` - AI pokalbių asistento projektas

### Monorepo struktūra

Nors tai nėra tradicinis monorepo, ši saugykla apima kelis nepriklausomus projektus:
- Kiekviena pamoka yra savarankiška
- Projektai nesidalina priklausomybėmis
- Dirbkite su atskirais projektais, nepažeisdami kitų
- Klonuokite visą saugyklą, kad gautumėte pilną mokymo programos patirtį

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus aiškinimus, kylančius dėl šio vertimo naudojimo.