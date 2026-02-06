# AGENTS.md

## Projekto apžvalga

Tai yra mokomojo turinio saugykla, skirta mokyti pradedančiuosius pagrindų apie interneto kūrimą. Mokymo programa yra visapusiškas 12 savaičių kursas, sukurtas Microsoft Cloud Advocates komandos, kuriame yra 24 praktinės pamokos, apimančios JavaScript, CSS ir HTML.

### Pagrindinės sudedamosios dalys

- **Mokymo turinys**: 24 struktūruotos pamokos, suskirstytos į projektų modulius
- **Praktiniai projektai**: Terrarium, Raidžių spausdinimo žaidimas, Naršyklės plėtinys, Kosminis žaidimas, Banko programa, Kodo redaktorius ir DI pokalbių asistentas
- **Interaktyvūs testai**: 48 testai po 3 klausimus kiekviename (prieš pamoką ir po pamokos)
- **Daugiakalbė parama**: Automatiniai vertimai į daugiau nei 50 kalbų naudojant GitHub Actions
- **Technologijos**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (DI projektams)

### Architektūra

- Mokomojo turinio saugykla su pamokomis struktūroje
- Kiekviename pamokų kataloge yra README, kodo pavyzdžiai ir sprendimai
- Atskirti projektai atskiruose kataloguose (quiz-app, įvairūs pamokų projektai)
- Vertimų sistema su GitHub Actions (co-op-translator)
- Dokumentacija pateikiama per Docsify ir galima kaip PDF

## Nustatymo komandos

Ši saugykla skirta pirmiausia mokymuisi. Dirbant su konkrečiais projektais:

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
npm run build      # Sukurti gamybai
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
# Vadovaukitės naršyklės konkrečiais plėtinių įkėlimo nurodymais
```

### Kosminio žaidimo projektai

```bash
cd 6-space-game/solution
npm install
# Atidarykite index.html naršyklėje arba naudokite Live Server
```

### Pokalbių projekto (Python backend) nustatymas

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nustatyti GITHUB_TOKEN aplinkos kintamąjį
python api.py
```

## Vystymo darbo eiga

### Turinį prisidedantiems

1. **Fork'inkite saugyklą** į savo GitHub paskyrą
2. **Klonuokite savo fork'ą** vietoje
3. **Sukurkite naują šaką** savo pakeitimams
4. Keiskite pamokų turinį arba kodo pavyzdžius
5. Testuokite kodo pakeitimus atitinkamuose projekto kataloguose
6. Pateikite pull request pagal kontributavimo taisykles

### Mokiniams

1. Fork'inkite arba klonuokite saugyklą
2. Sekite per pamokų katalogus iš eilės
3. Skaitykite kiekvienos pamokos README failus
4. Užbaikite priešpamokos testus adresu https://ff-quizzes.netlify.app/web/
5. Dirbkite su kodo pavyzdžiais pamokų kataloguose
6. Atlikite užduotis ir iššūkius
7. Laikykite popamokos testus

### Gyvas vystymas

- **Dokumentacija**: Paleiskite `docsify serve` pagrindiniame kataloge (3000 portas)
- **Quiz App**: Paleiskite `npm run dev` quiz-app kataloge
- **Projektai**: Naudokite VS Code Live Server plėtinį HTML projektams
- **API projektai**: Paleiskite `npm start` atitinkamuose API kataloguose

## Testavimo instrukcijos

### Quiz App testavimas

```bash
cd quiz-app
npm run lint       # Patikrinkite kodo stiliaus problemas
npm run build      # Patvirtinkite, kad statyba sėkminga
```

### Banko API testavimas

```bash
cd 7-bank-project/api
npm run lint       # Patikrinkite kodo stiliaus problemas
node server.js     # Patikrinkite, ar serveris paleidžiamas be klaidų
```

### Bendras testavimo metodas

- Tai yra mokomoji saugykla be išsamių automatinių testų
- Rankinis testavimas apima:
  - Kodo pavyzdžiai veikia be klaidų
  - Dokumentacijos nuorodos veikia tinkamai
  - Projektų kompiliacijos baigiamos sėkmingai
  - Pavyzdžiai atitinka gerąsias praktikas

### Patikrinimai prieš pateikiant

- Paleiskite `npm run lint` kataloguose su package.json
- Patikrinkite, ar markdown nuorodos yra galiojančios
- Testuokite kodo pavyzdžius naršyklėje arba Node.js
- Įsitikinkite, kad vertimai išlaiko tinkamą struktūrą

## Kodo stiliaus gairės

### JavaScript

- Naudokite modernią ES6+ sintaksę
- Laikykitės standartinių ESLint konfigūracijų projektuose
- Naudokite prasmingus kintamųjų ir funkcijų pavadinimus mokymosi aiškumui
- Rašykite komentarus, paaiškinančius koncepcijas mokiniams
- Formatuokite naudodami Prettier, kur jis yra nustatytas

### HTML/CSS

- Semantiniai HTML5 elementai
- Reaguojančio dizaino principai
- Aiškios klasių pavadinimų konvencijos
- Komentarai, paaiškinantys CSS technikas mokiniams

### Python

- Laikytis PEP 8 stiliaus gairių
- Aiškūs mokomieji kodo pavyzdžiai
- Naudokite tipų užuominas ten, kur tai padeda mokantis

### Markdown dokumentacija

- Aiški antraščių hierarchija
- Kodo blokai nurodant kalbą
- Nuorodos į papildomus šaltinius
- Ekrano nuotraukos ir vaizdai `images/` kataloguose
- Alternatyvus tekstas vaizdams dėl prieinamumo

### Failų organizavimas

- Pamokos numeruojamos iš eilės (1-getting-started-lessons, 2-js-basics ir kt.)
- Kiekviename projekte yra `solution/` ir dažnai `start/` arba `your-work/` katalogai
- Vaizdai saugomi pamokai skirtuose `images/` aplankuose
- Vertimai saugomi `translations/{language-code}/` struktūroje

## Konstravimas ir diegimas

### Quiz App diegimas (Azure Static Web Apps)

quiz-app yra sukonfigūruotas Azure Static Web Apps diegimui:

```bash
cd quiz-app
npm run build      # Sukuria dist/ aplanką
# Diegia per GitHub Actions darbo eigą į main pusę stumiant
```

Azure Static Web Apps konfigūracija:
- **Taikomosios programos vieta**: `/quiz-app`
- **Išvesties vieta**: `dist`
- **Darbo eiga**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### PDF dokumentacijos generavimas

```bash
npm install                    # Įdiekite docsify-to-pdf
npm run convert               # Generuoti PDF iš dokumentų
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Įdiekite Docsify globaliai
docsify serve                 # Pateikite tarnybą adresu localhost:3000
```

### Projektams skirtas konstravimas

Kiekvienas projekto katalogas gali turėti savo konstravimo procesą:
- Vue projektai: `npm run build` sukuria produkcinės versijos paketus
- Statiniai projektai: be konstravimo žingsnio, failai talpinami tiesiogiai

## Pull Request gairės

### Antraštės formatas

Naudokite aiškias, apibūdinančias antraštes, nurodančias pokyčių sritį:
- `[Quiz-app] Pridėti naują testą pamokai X`
- `[Lesson-3] Pataisyti rašybos klaidą terrarium projekte`
- `[Translation] Pridėti ispanų vertimą 5 pamokai`
- `[Docs] Atnaujinti nustatymo instrukcijas`

### Būtinos patikros

Prieš pateikiant PR:

1. **Kodo kokybė**:
   - Paleiskite `npm run lint` atitinkamuose projekto kataloguose
   - Ištaisykite visas lint klaidas ir įspėjimus

2. **Konstravimo tikrinimas**:
   - Jei taikoma, paleiskite `npm run build`
   - Užtikrinkite, kad konstravimo metu nėra klaidų

3. **Nuorodų patikra**:
   - Patikrinkite visas markdown nuorodas
   - Patvirtinkite, kad vaizdų nuorodos veikia

4. **Turinio peržiūra**:
   - Tikrinkite rašybą ir gramatiką
   - Įsitikinkite, kad kodo pavyzdžiai yra teisingi ir mokomieji
   - Patikrinkite, kad vertimai išlaiko pradinę reikšmę

### Indėlio reikalavimai

- Sutinkate su Microsoft CLA (automatinė patikra pirmame PR)
- Laikykitės [Microsoft Open Source elgesio taisyklių](https://opensource.microsoft.com/codeofconduct/)
- Žr. [CONTRIBUTING.md](./CONTRIBUTING.md) su išsamiais gairėmis
- Nurodykite problemos numerius PR aprašyme, jei taikoma

### Peržiūros procesas

- PR peržiūri palaikytojai ir bendruomenė
- Prioritetas mokymosi aiškumui
- Kodo pavyzdžiai turi atitikti dabartines gerąsias praktikas
- Vertimai peržiūrimi dėl tikslumo ir kultūrinio atitikimo

## Vertimų sistema

### Automatinis vertimas

- Naudojamos GitHub Actions su co-op-translator darbo eiga
- Automatiškai verčia į daugiau nei 50 kalbų
- Šaltinio failai pagrindiniuose kataloguose
- Išversti failai saugomi `translations/{language-code}/` kataloguose

### Rankinių vertimo patobulinimų pridėjimas

1. Suraskite failą `translations/{language-code}/`
2. Atlikite patobulinimus išlaikydami struktūrą
3. Įsitikinkite, kad kodo pavyzdžiai lieka veikiantys
4. Testuokite lokalizuotą testų turinį

### Vertimų meta duomenys

Išversti failai turi meta duomenų antraštę:
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

**Quiz app nepaleidžiamas**:
- Patikrinkite Node.js versiją (rekomenduojama v14+)
- Ištrinkite `node_modules` ir `package-lock.json`, paleiskite `npm install` iš naujo
- Patikrinkite prievadų konfliktus (numatytasis: Vite naudoja 5173 portą)

**API serveris nepaleidžiamas**:
- Įsitikinkite, kad Node.js versija yra pakankama (node >=10)
- Patikrinkite ar prievadas neužimtas
- Įsitikinkite, kad visos priklausomybės įdiegtos su `npm install`

**Naršyklės plėtinys nesikrauna**:
- Patikrinkite, ar manifest.json yra tinkamai suformatuotas
- Patikrinkite naršyklės konsolę dėl klaidų
- Sekite naršyklės specifines plėtinio diegimo instrukcijas

**Python pokalbių projekto problemos**:
- Įdiekite OpenAI paketą: `pip install openai`
- Įsitikinkite, kad GITHUB_TOKEN aplinkos kintamasis yra nustatytas
- Patikrinkite prieigos leidimus GitHub modeliams

**Docsify nepateikia dokumentacijos**:
- Įdiekite docsify-cli globaliai: `npm install -g docsify-cli`
- Paleiskite iš saugyklos šakninio katalogo
- Įsitikinkite, kad `docs/_sidebar.md` egzistuoja

### Vystymo aplinkos patarimai

- Naudokite VS Code su Live Server plėtiniu HTML projektams
- Diekite ESLint ir Prettier plėtinius vienodam formatavimui
- Naudokitės naršyklės DevTools JavaScript derinimui
- Vue projektams įdiekite Vue DevTools naršyklės plėtinį

### Veikimo efektyvumo aspektai

- Daug išverstų failų (50+ kalbų) reiškia didelį pilną klonavimą
- Naudokite "shallow clone", jei dirbate tik su turiniu: `git clone --depth 1`
- Išskirkite vertimus paieškose dirbdami su anglų turiniu
- Konstravimo procesai gali būti lėti pirmą kartą (npm install, Vite build)

## Saugumo aspektai

### Aplinkos kintamieji

- API raktai niekada neturėtų būti įsipareigoti į repositoriją
- Naudokite `.env` failus (jau įtrauktus į `.gitignore`)
- Dokumentuokite reikiamus aplinkos kintamuosius projektų README

### Python projektai

- Naudokite virtualias aplinkas: `python -m venv venv`
- Laikykite priklausomybes atnaujintas
- GitHub žetonai turi turėti minimalų reikiamą leidimą

### GitHub modelių prieiga

- Reikia asmeninių prieigos žetonų (PAT) GitHub modeliams
- Žetonus laikykite kaip aplinkos kintamuosius
- Niekada neįsipareigokite žetonų ar prisijungimų

## Papildomos pastabos

### Tikslinė auditorija

- Visiškai pradedantieji interneto kūrime
- Studentai ir savimokos siekiantys asmenys
- Mokytojai, naudojantys mokymo programą klasėse
- Turinys sukurtas prieinamumui ir žingsniniam įgūdžių lavinimui

### Mokomoji filosofija

- Mokymasis per projektus
- Dažni žinių patikrinimai (testai)
- Praktiniai kodavimo pratimai
- Realaus pasaulio taikymo pavyzdžiai
- Akcentas ant pagrindų prieš perėjimą prie karkasų

### Saugyklos priežiūra

- Aktyvi mokinių ir prisidėjusių bendruomenė
- Reguliarūs priklausomybių ir turinio atnaujinimai
- Problemos ir diskusijos stebimos palaikytojų
- Vertimų atnaujinimai automatiniai per GitHub Actions

### Susiję šaltiniai

- [Microsoft Learn moduliai](https://docs.microsoft.com/learn/)
- [Student Hub resursai](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekomenduojamas mokiniams
- Papildomi kursai: Generative AI, Duomenų mokslas, ML, IoT mokymo programos prieinamos

### Darbas su konkrečiais projektais

Išsamias instrukcijas apie atskirus projektus žr. README failuose:
- `quiz-app/README.md` - Vue 3 testų taikomoji programa
- `7-bank-project/README.md` - Banko programa su autentifikacija
- `5-browser-extension/README.md` - Naršyklės plėtinių vystymas
- `6-space-game/README.md` - Canvas pagrindu sukurtas žaidimas
- `9-chat-project/README.md` - DI pokalbių asistento projektas

### Monorepo struktūra

Nors tai nėra tradicinis monorepo, ši saugykla talpina kelis nepriklausomus projektus:
- Kiekviena pamoka yra savarankiška
- Projektai nesidalina priklausomybėmis
- Dirbkite su atskirais projektais nepaveikdami kitų
- Klonuokite visą repositoriją, kad gautumėte pilną mokymo programą

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės atsisakymas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojama pasitelkti profesionalų žmogaus vertimą. Mes neatsakome už bet kokius nesusipratimus ar neteisingus supratimus, kylančius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->