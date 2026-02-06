# AGENTS.md

## Projekto apžvalga

Tai mokymo programos saugykla, skirta mokyti pradedančiuosius pagrindų apie interneto kūrimą. Programa yra išsami 12 savaičių kursas, sukurtas Microsoft Cloud Advocates, apimantis 24 praktinius užsiėmimus apie JavaScript, CSS ir HTML.

### Pagrindinės sudedamosios dalys

- **Mokomoji medžiaga**: 24 struktūrizuoti užsiėmimai, organizuoti į projektinius modulius
- **Praktiniai projektai**: Terariumas, Rašymo žaidimas, Naršyklės plėtinys, Kosminis žaidimas, Banko programa, Kodo redaktorius ir DI pokalbių asistentas
- **Interaktyvūs testai**: 48 testai po 3 klausimus kiekviename (prieš/po pamokos vertinimai)
- **Daugiakalbė palaikymas**: Automatizuoti vertimai į daugiau nei 50 kalbų per GitHub Actions
- **Technologijos**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (DI projektams)

### Architektūra

- Mokomoji saugykla su pamokų struktūra
- Kiekvienos pamokos aplanke yra README, kodo pavyzdžiai ir sprendimai
- Atskiri savarankiški projektai atskiruose kataloguose (quiz-app, įvairūs pamokų projektai)
- Vertimo sistema per GitHub Actions (co-op-translator)
- Dokumentacija pateikiama per Docsify ir prieinama PDF formatu

## Parengimo komandos

Ši saugykla skirta daugiausia mokomosios medžiagos naudojimui. Dirbant su konkrečiais projektais:

### Pagrindinės saugyklos parengimas

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App parengimas (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Paleisti kūrimo serverį
npm run build      # Kurti produkcijai
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

### Naršyklės plėtinio projektai

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

### Pokalbių projekto (Python backend) parengimas

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nustatyti GITHUB_TOKEN aplinkos kintamąjį
python api.py
```

## Gamybos eiga

### Turinio prisidėjėjams

1. **Sukurkite fork’ą** savo GitHub paskyroje
2. **Klonuokite fork’ą** vietoje
3. **Sukurkite naują šaką** savo pakeitimams
4. Redaguokite pamokų turinį arba kodo pavyzdžius
5. Išbandykite bet kokius kodo pakeitimus atitinkamuose projekto kataloguose
6. Pateikite pull request pagal prisidėjimo gaires

### Mokiniams

1. Sukurkite fork’ą arba klonuokite saugyklą
2. Eikite per pamokų katalogus paeiliui
3. Skaitykite kiekvienos pamokos README failus
4. Atlikite priešpamokinius testus https://ff-quizzes.netlify.app/web/
5. Dirbkite su kodo pavyzdžiais pamokų aplankuose
6. Atlikite užduotis ir iššūkius
7. Atlikite po pamokos testus

### Gyvas vystymas

- **Dokumentacija**: paleiskite `docsify serve` šakniniame kataloge (prievadas 3000)
- **Quiz App**: paleiskite `npm run dev` quiz-app kataloge
- **Projektai**: naudokite VS Code Live Server plėtinį HTML projektams
- **API projektai**: paleiskite `npm start` atitinkamuose API kataloguose

## Testavimo instrukcijos

### Quiz App testavimas

```bash
cd quiz-app
npm run lint       # Patikrinkite kodo stiliaus problemas
npm run build      # Patikrinkite, ar kūrimas pavyksta
```

### Banko API testavimas

```bash
cd 7-bank-project/api
npm run lint       # Patikrinkite kodo stiliaus problemas
node server.js     # Patikrinkite, ar serveris pradeda veikti be klaidų
```

### Bendras testavimo metodas

- Tai mokomoji saugykla be išsamių automatinių testų
- Rankinis testavimas orientuotas į:
  - Kodo pavyzdžių veikimui be klaidų
  - Dokumentacijos nuorodų veikimą
  - Projektų sėkmingą surinkimą
  - Pavyzdžių atitikimą geriausioms praktikoms

### Prieš pateikiant užklausą atlikti patikrinimai

- Paleiskite `npm run lint` kataloguose su package.json
- Patikrinkite, ar markdown nuorodos galioja
- Išbandykite kodo pavyzdžius naršyklėje arba Node.js aplinkoje
- Įsitikinkite, kad vertimai išlaiko tinkamą struktūrą

## Kodo stiliaus gairės

### JavaScript

- Naudokite šiuolaikinę ES6+ sintaksę
- Laikykitės standartinių ESLint konfigūracijų, pateiktų projektuose
- Naudokite prasmingus kintamųjų ir funkcijų pavadinimus mokymosi aiškumui
- Pridėkite komentarų, paaiškinančių sąvokas mokiniams
- Formatuokite naudodami Prettier ten, kur sukonfigūruota

### HTML/CSS

- Semantiški HTML5 elementai
- Reaguojančio dizaino principai
- Aiškios klasių vardų konvencijos
- Komentarai, paaiškinantys CSS technikas mokiniams

### Python

- PEP 8 stiliaus gairės
- Aiškūs mokomieji kodo pavyzdžiai
- Tipų anotacijos, kur naudingos mokymuisi

### Markdown dokumentacija

- Aiški antraščių hierarchija
- Kodo blokai su kalbos nurodymu
- Nuorodos į papildomus išteklius
- Ekrano nuotraukos ir paveikslėliai `images/` kataloguose
- Alt tekstai paveikslėliams dėl prieinamumo

### Failų organizavimas

- Pamokos sunumeruotos paeiliui (1-getting-started-lessons, 2-js-basics ir kt.)
- Kiekvienas projektas turi `solution/` ir dažnai `start/` arba `your-work/` katalogus
- Paveikslėliai saugomi pamokų specifiniuose `images/` aplankuose
- Vertimai kataloguose `translations/{language-code}/`

## Surinkimas ir diegimas

### Quiz App diegimas (Azure Static Web Apps)

quiz-app sukonfigūruotas Azure Static Web Apps diegimui:

```bash
cd quiz-app
npm run build      # Sukuria dist/ aplanką
# Diegia per GitHub Actions darbo eigą, paleistą po commit į main šaką
```

Azure Static Web Apps konfigūracija:
- **Programos vieta**: `/quiz-app`
- **Išvesties vieta**: `dist`
- **Darbo eiga**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentacijos PDF generavimas

```bash
npm install                    # Įdiekite docsify-to-pdf
npm run convert               # Sugeneruokite PDF iš dokumentų
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Įdiekite Docsify globaliai
docsify serve                 # Aptarnauti adresu localhost:3000
```

### Projektams specifiniai surinkimai

Kiekvienas projekto katalogas gali turėti savą surinkimo procesą:
- Vue projektai: `npm run build` sukuria gamybos paketus
- Statiški projektai: Nėra surinkimo žingsnio, failai aptarnaujami tiesiogiai

## Pull Request gairės

### Pavadinimų formatas

Naudokite aiškius aprašomuosius pavadinimus, nurodančius pakeitimo sritį:
- `[Quiz-app] Pridėti naują testą pamokai X`
- `[Lesson-3] Pataisyti klaidą terariumo projekte`
- `[Translation] Pridėti ispanų vertimą 5-ajai pamokai`
- `[Docs] Atnaujinti parengimo instrukcijas`

### Privalomi patikrinimai

Prieš pateikiant PR:

1. **Kodo kokybė**:
   - Paleiskite `npm run lint` paveiktuose projekto kataloguose
   - Ištaisykite visus lint klaidų ir įspėjimų

2. **Surinkimo patikra**:
   - Jei taikoma, paleiskite `npm run build`
   - Užtikrinkite, kad nėra surinkimo klaidų

3. **Nuorodų validacija**:
   - Patikrinkite visas markdown nuorodas
   - Pasitikrinkite paveikslėlių nuorodų veikimą

4. **Turinio peržiūra**:
   - Patikrinkite rašybą ir gramatiką
   - Užtikrinkite, kad kodo pavyzdžiai yra teisingi ir mokomieji
   - Patikrinkite, ar vertimai atitinka originalią prasmę

### Prisidėjimo reikalavimai

- Sutikite su Microsoft CLA (automatinis patikrinimas pirmame PR)
- Laikykitės [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Žiūrėkite [CONTRIBUTING.md](./CONTRIBUTING.md) detalias gaires
- Nurodykite problemų numerius PR aprašyme, jei taikoma

### Peržiūros procesas

- PR peržiūri prižiūrėtojai ir bendruomenė
- Prioritetas suteikiamas mokymo aiškumui
- Kodo pavyzdžiai turi atitikti dabartines geriausias praktikas
- Vertimai peržiūrimi dėl tikslumo ir kultūrinio atitikimo

## Vertimo sistema

### Automatizuotas vertimas

- Naudoja GitHub Actions su co-op-translator darbo eiga
- Automatiškai verčia į daugiau nei 50 kalbų
- Šaltinio failai pagrindiniuose kataloguose
- Išversti failai kataloguose `translations/{language-code}/`

### Rankinių vertimo patobulinimų pridėjimas

1. Suraskite failą kataloge `translations/{language-code}/`
2. Atlikite patobulinimus išlaikant struktūrą
3. Įsitikinkite, kad kodo pavyzdžiai lieka veikiantys
4. Išbandykite lokalizuotą testų turinį

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

## Derinimas ir problemų sprendimas

### Dažnos problemos

**Quiz aplikacija nesikrauna**:
- Patikrinkite Node.js versiją (rekomenduojama v14+)
- Ištrinkite `node_modules` ir `package-lock.json`, paleiskite `npm install` iš naujo
- Patikrinkite prievado konfliktus (pagal nutylėjimą Vite naudoja 5173 prievadą)

**API serveris nesikrauna**:
- Įsitikinkite, kad Node.js versija atitinka reikalavimus (node >=10)
- Patikrinkite, ar prievadas nėra užimtas
- Įsitikinkite, kad visos priklausomybės įdiegtos su `npm install`

**Naršyklės plėtinys nesikrauna**:
- Patikrinkite, ar manifest.json yra tinkamai suformatuotas
- Peržiūrėkite naršyklės konsolę klaidoms
- Sekite naršyklės plėtinių įdiegimo instrukcijas

**Python pokalbių projekto problemos**:
- Įdiekite OpenAI paketą: `pip install openai`
- Įsitikinkite, kad GITHUB_TOKEN aplinkos kintamasis nustatytas
- Patikrinkite GitHub modelių prieigos leidimus

**Docsify neaptarnauja dokumentų**:
- Įdiekite docsify-cli globaliai: `npm install -g docsify-cli`
- Paleiskite iš saugyklos šaknies katalogo
- Įsitikinkite, kad egzistuoja `docs/_sidebar.md`

### Vystymo aplinkos patarimai

- Naudokite VS Code su Live Server plėtiniu HTML projektams
- Įdiekite ESLint ir Prettier plėtinius nuolatiniam formatavimui
- Naudokite naršyklės kūrėjų įrankius JavaScript derinimui
- Vue projektams įdiekite Vue DevTools naršyklės plėtinį

### Veikimo efektyvumo aspektai

- Daug išverstų failų (50+ kalbų) reiškia didelius pilnus klonus
- Naudokite seklų klonavimą, jei dirbate tik su turiniu: `git clone --depth 1`
- Išskirkite vertimus iš paieškos, dirbant su anglų turiniu
- Surinkimo procesai gali būti lėti pirmą kartą (npm install, Vite build)

## Saugumo aspektai

### Aplinkos kintamieji

- API raktai niekada neturėtų būti įtraukti į saugyklą
- Naudokite `.env` failus (jau įtrauktus į `.gitignore`)
- Dokumentuokite reikiamus aplinkos kintamuosius projekto README

### Python projektai

- Naudokite virtualias aplinkas: `python -m venv venv`
- Laikykite priklausomybes atnaujintas
- GitHub tokenai turėtų turėti tik minimalias reikalingas teises

### GitHub modelių prieiga

- Asmeniniai prieigos tokenai (PAT) reikalingi GitHub modeliams
- Tokenai turi būti saugomi kaip aplinkos kintamieji
- Niekada neskelbkite tokenų ar prisijungimo duomenų

## Papildomos pastabos

### Tikslinė auditorija

- Visiškai pradedantieji interneto kūrime
- Studentai ir savarankiškai mokosi
- Mokytojai, naudojantys programą klasėse
- Turinio dizainas orientuotas į prieinamumą ir laipsnišką įgūdžių įgijimą

### Mokymosi filosofija

- Projektinis mokymosi metodas
- Dažni žinių patikrinimai (testai)
- Praktiniai programavimo užsiėmimai
- Tikro gyvenimo pritaikymo pavyzdžiai
- Fokusas į pagrindus prieš framework’us

### Saugyklos priežiūra

- Aktyvi mokinių ir prisidėjėjų bendruomenė
- Reguliarūs priklausomybių ir turinio atnaujinimai
- Problemos ir diskusijos prižiūrimos prižiūrėtojų
- Vertimų atnaujinimai automatizuoti per GitHub Actions

### Susiję ištekliai

- [Microsoft Learn moduliai](https://docs.microsoft.com/learn/)
- [Studentų centras](https://docs.microsoft.com/learn/student-hub/)
- Rekomenduojama naudoti [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Papildomi kursai: generatyvioji DI, duomenų mokslas, ML, IoT programos

### Darbas su konkrečiais projektais

Išsamios instrukcijos apie atskirus projektus pateiktos README failuose:
- `quiz-app/README.md` - Vue 3 testų programa
- `7-bank-project/README.md` - Banko programa su autentifikacija
- `5-browser-extension/README.md` - Naršyklės plėtinių vystymas
- `6-space-game/README.md` - Canvas pagrindu sukurtas žaidimas
- `9-chat-project/README.md` - DI pokalbių asistento projektas

### Monorepo struktūra

Nors tai nėra tradicinis monorepo, ši saugykla turi kelis nepriklausomus projektus:
- Kiekviena pamoka yra savarankiška
- Projektai neturi bendrų priklausomybių
- Galima dirbti su atskirais projektais neįtakojant kitų
- Klonuokite visą saugyklą pilnai programos patirčiai gauti

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatizuoti vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas gimtąja kalba laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus atliktą vertimą. Mes neatsakome už bet kokius nesusipratimus ar klaidingus aiškinimus, kilusius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->