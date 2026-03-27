# AGENTS.md

## Projekto apžvalga

Tai mokomasis mokymo planas, skirtas pradedantiesiems mokyti pagrindus apie interneto kūrimą. Šis mokymo planas yra išsamus 12 savaičių kursas, sukurtas Microsoft Cloud Advocates komandos, apimantis 24 praktinius užsiėmimus apie JavaScript, CSS ir HTML.

### Pagrindinės dalys

- **Mokomoji medžiaga**: 24 struktūrizuoti užsiėmimai, suskirstyti į projektinius modulius  
- **Praktiniai projektai**: Terariumas, Spausdinimo žaidimas, Naršyklės plėtinys, Kosmoso žaidimas, Banko programa, Kodo redaktorius ir AI pokalbių asistentas  
- **Interaktyvūs testai**: 48 testai po 3 klausimus kiekviename (prieš ir po pamokos vertinimai)  
- **Daugiakalbė palaikymas**: Automatiniai vertimai į daugiau nei 50 kalbų per GitHub Actions  
- **Technologijos**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (AI projektams)  

### Architektūra

- Mokomasis saugykla su pamokų struktūra  
- Kiekviename pamokos kataloge yra README, kodo pavyzdžiai ir sprendimai  
- Atskiri savarankiški projektai skirtinguose kataloguose (quiz-app, įvairūs pamokų projektai)  
- Vertimų sistema, naudojanti GitHub Actions (co-op-translator)  
- Dokumentacija teikiama per Docsify ir prieinama PDF formatu  

## Sąrankos komandos

Ši saugykla pirmiausia skirta mokomosios medžiagos naudojimui. Darbas su konkrečiais projektais:

### Pagrindinė saugyklos sąranka

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```
  
### Quiz App sąranka (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Paleisti kūrimo serverį
npm run build      # Statyti gamybai
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
# Laikykitės naršyklės specifinių plėtinių įkėlimo instrukcijų
```
  
### Kosmoso žaidimo projektai

```bash
cd 6-space-game/solution
npm install
# Atidarykite index.html naršyklėje arba naudokite Live Server
```
  
### Pokalbių projekto (Python backend) sąranka

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nustatykite GITHUB_TOKEN aplinkos kintamąjį
python api.py
```
  
## Kūrimo darbo eiga

### Turinio prisidedantiems

1. **Sukurti atšaką** saugyklos savo GitHub paskyroje  
2. **Klonuoti atšaką** lokaliai  
3. **Sukurti naują šaką** savo pakeitimams  
4. Redaguoti pamokų turinį arba kodo pavyzdžius  
5. Išbandyti kodo pakeitimus atitinkamuose projekto kataloguose  
6. Pateikti pakeitimų užklausas pagal prisidėjimo gaires  

### Mokiniams

1. Atšaka arba klonas saugyklos  
2. Sekti pamokų katalogus eilės tvarka  
3. Skaityti kiekvieno užsiėmimo README failus  
4. Atlikti testus prieš pamoką adresu https://ff-quizzes.netlify.app/web/  
5. Dirbti su kodo pavyzdžiais pamokų kataloguose  
6. Atlikti užduotis ir iššūkius  
7. Atlikti testus po pamokos  

### Tiesioginis kūrimas

- **Dokumentacija**: paleisti `docsify serve` šakniniame kataloge (prievadas 3000)  
- **Quiz App**: paleisti `npm run dev` quiz-app kataloge  
- **Projektai**: naudoti VS Code Live Server plėtinį HTML projektams  
- **API projektai**: paleisti `npm start` atitinkamuose API kataloguose  

## Testavimo instrukcijos

### Quiz App testavimas

```bash
cd quiz-app
npm run lint       # Patikrinkite kodo stiliaus problemas
npm run build      # Patvirtinkite, kad kūrimas sėkmingas
```
  
### Banko API testavimas

```bash
cd 7-bank-project/api
npm run lint       # Patikrinti kodo stiliaus problemas
node server.js     # Patvirtinti, kad serveris startuoja be klaidų
```
  
### Bendras testavimo požiūris

- Tai mokomasis saugykla be išsamių automatinių testų  
- Rankinis testavimas daugiausia sutelktas į:  
  - Kodo pavyzdžiai veikia be klaidų  
  - Dokumentacijos nuorodos veikia tinkamai  
  - Projektų kūrimas sėkmingas  
  - Pavyzdžiai atitinka gerąsias praktikas  

### Prieš pateikiant patikrinimai

- Paleisti `npm run lint` kataloguose su package.json  
- Patikrinti, ar markdown nuorodos galioja  
- Išbandyti kodo pavyzdžius naršyklėje arba Node.js  
- Patvirtinti, kad vertimai išlaiko tinkamą struktūrą  

## Kodo stiliaus gairės

### JavaScript

- Naudoti modernią ES6+ sintaksę  
- Laikytis standartinių ESLint konfigūracijų projektuose  
- Naudoti prasmingus kintamųjų ir funkcijų pavadinimus mokymuisi  
- Pridėti komentarus, paaiškinančius sąvokas mokiniams  
- Formatuoti naudojant Prettier, kur tai konfigūruota  

### HTML/CSS

- Semantiški HTML5 elementai  
- Reaguojantis dizainas  
- Aiškios klasių pavadinimų konvencijos  
- Komentarai, paaiškinantys CSS metodikas mokiniams  

### Python

- PEP 8 stiliaus gairės  
- Aiškūs, mokomieji kodo pavyzdžiai  
- Rekomenduojami tipų užuominomis, kur naudingas mokymuisi  

### Markdown dokumentacija

- Aiški antraščių hierarchija  
- Kodo blokai su kalbos nurodymu  
- Nuorodos į papildomus išteklius  
- Ekrano nuotraukos ir vaizdai `images/` kataloguose  
- Alternatyvus tekstas vaizdams prieinamumui  

### Failų organizavimas

- Pamokos numeruotos seka (1-getting-started-lessons, 2-js-basics ir t.t.)  
- Kiekviename projekte yra `solution/` ir dažnai `start/` arba `your-work/` katalogai  
- Vaizdai saugomi konkrečių pamokų `images/` aplankuose  
- Vertimai `translations/{language-code}/` struktūroje  

## Kūrimas ir diegimas

### Quiz App diegimas (Azure Static Web Apps)

quiz-app konfigūruotas Azure Static Web Apps diegimui:

```bash
cd quiz-app
npm run build      # Sukuria dist/ aplanką
# Diegia per GitHub Actions darbo eigą į pagrindinę šaką paspaudus
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
docsify serve                 # Aptarnauti localhost:3000
```
  
### Projektų specifiniai kūrimo procesai

Kiekvienas projekto katalogas gali turėti savą kūrimo procesą:  
- Vue projektai: `npm run build` sukuria produkcinius paketus  
- Statiniai projektai: Nereikia kūrimo žingsnio, failai tiekiami tiesiogiai  

## Pull Request gairės

### Pavadinimo formatas

Naudoti aiškius, apibūdinančius pavadinimus, nurodančius pakeitimo sritį:  
- `[Quiz-app] Add new quiz for lesson X`  
- `[Lesson-3] Fix typo in terrarium project`  
- `[Translation] Add Spanish translation for lesson 5`  
- `[Docs] Update setup instructions`  

### Reikalingi patikrinimai

Prieš pateikiant PR:  

1. **Kodo kokybė**:  
   - Paleisti `npm run lint` paveiktuose projekto kataloguose  
   - Ištaisyti visas lint klaidas ir įspėjimus  

2. **Kūrimo patikra**:  
   - Jeigu taikoma, paleisti `npm run build`  
   - Užtikrinti, kad nebūtų kūrimo klaidų  

3. **Nuorodų tikrinimas**:  
   - Išbandyti visas markdown nuorodas  
   - Patikrinti, ar vaizdų nuorodos veikia  

4. **Turinio peržiūra**:  
   - Taisyti rašybos ir gramatikos klaidas  
   - Užtikrinti, kad kodo pavyzdžiai būtų teisingi ir mokomieji  
   - Patikrinti, kad vertimai atitinka originalią prasmę  

### Prisidėjimo reikalavimai

- Sutikti su Microsoft CLA (automatinis patikrinimas pirmo PR metu)  
- Laikytis [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)  
- Perskaityti [CONTRIBUTING.md](./CONTRIBUTING.md) išsamioms gairėms  
- Nurodyti atitinkamus problemų numerius PR aprašyme, jei taikoma  

### Peržiūros procesas

- PR peržiūri prižiūrėtojai ir bendruomenė  
- Prioritetas skiriamas mokymosi aiškumui  
- Kodo pavyzdžiai turi atitikti dabartines gerąsias praktikas  
- Vertimai tikrinami dėl tikslumo ir kultūrinio atitikimo  

## Vertimų sistema

### Automatizuoti vertimai

- Naudoja GitHub Actions su co-op-translator darbo eiga  
- Automatiškai verčia į daugiau nei 50 kalbų  
- Šaltinių failai pagrindiniuose kataloguose  
- Išversti failai `translations/{language-code}/` kataloguose  

### Rankinių vertimų patobulinimų pridėjimas

1. Rasti failą `translations/{language-code}/` kataloge  
2. Atlikti pataisas, išlaikant struktūrą  
3. Užtikrinti, kad kodo pavyzdžiai veiktų  
4. Išbandyti lokalizuotą testų turinį  

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

**Quiz app nepaleidžiamas**:  
- Patikrinti Node.js versiją (rekomenduojama v14+)  
- Ištrinti `node_modules` ir `package-lock.json`, paleisti `npm install` iš naujo  
- Patikrinti prievadų konfliktus (numatyta: Vite naudoja 5173 prievadą)  

**API serveris nepaleidžiamas**:  
- Patvirtinti, kad Node.js versija atitinka reikalavimus (node >=10)  
- Patikrinti, ar prievadas nėra užimtas  
- Įsitikinti, kad visos priklausomybės įdiegtos su `npm install`  

**Naršyklės plėtinys neužsikrauna**:  
- Patikrinti, ar manifest.json formatas teisingas  
- Peržiūrėti naršyklės konsolę klaidų  
- Vadovautis naršyklės plėtinio diegimo instrukcijomis  

**Python pokalbių projekto problemos**:  
- Įsitikinti, kad įdiegta OpenAI biblioteka: `pip install openai`  
- Patikrinti, ar nustatytas GITHUB_TOKEN aplinkos variable  
- Patikrinti GitHub Models prieigos leidimus  

**Docsify nedemonstruoja dokumentų**:  
- Įdiegti docsify-cli globaliai: `npm install -g docsify-cli`  
- Paleisti iš saugyklos šaknies  
- Patikrinti, ar egzistuoja `docs/_sidebar.md`  

### Kūrimo aplinkos patarimai

- Naudoti VS Code su Live Server plėtiniu HTML projektams  
- Įdiegti ESLint ir Prettier plėtinius nuosekliam formatavimui  
- Naudoti naršyklės DevTools JavaScript derinimui  
- Vue projektams įdiegti Vue DevTools naršyklės plėtinį  

### Veikimo našumas

- Daug išverstų failų (daugiau nei 50 kalbų) reiškia didelius klonus  
- Naudoti sekliu klonavimą, jei dirbama tik su turiniu: `git clone --depth 1`  
- Išskirti vertimus paieškose dirbant su anglų kalba  
- Kūrimo procesai gali būti lėti pirmo paleidimo metu (npm install, Vite build)  

## Saugumo aspektai

### Aplinkos kintamieji

- API raktai neturi būti saugomi saugykloje  
- Naudoti `.env` failus (jau įtraukta į `.gitignore`)  
- Dokumentuoti reikalingus aplinkos kintamuosius README failuose  

### Python projektai

- Naudoti virtualias aplinkas: `python -m venv venv`  
- Laikyti priklausomybes atnaujintas  
- GitHub tokenai turi turėti minimalias reikalingas teises  

### GitHub Models prieiga

- Reikalingi asmeniniai prieigos tokenai (PAT) GitHub Models  
- Tokenai laikomi aplinkos kintamuosiuose  
- Niekuomet neįtraukti tokenų ar prisijungimo duomenų į saugyklą  

## Papildomos pastabos

### Tikslinė auditorija

- Absoliutūs pradedantieji interneto kūrime  
- Studentai ir savarankiški mokymosi dalyviai  
- Mokytojai, naudojantys mokymo planą klasėse  
- Turinys pritaikytas prieinamumui ir palaipsniui įgūdžių ugdymui  

### Mokymosi filosofija

- Projektinis mokymasis  
- Dažni žinių patikrinimai (testai)  
- Praktiniai programavimo užsiėmimai  
- Realūs taikymo pavyzdžiai  
- Dėmesys pagrindams prieš karkasus  

### Saugyklos priežiūra

- Aktyvi mokinių ir prisidedančių bendruomenė  
- Reguliarūs priklausomybių ir turinio atnaujinimai  
- Problemos ir diskusijos prižiūrimos vykdytojų  
- Vertimų atnaujinimai automatizuoti per GitHub Actions  

### Susiję ištekliai

- [Microsoft Learn moduliai](https://docs.microsoft.com/learn/)  
- [Studentų centro ištekliai](https://docs.microsoft.com/learn/student-hub/)  
- Rekomenduojama naudoti [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) mokymuisi  
- Papildomi kursai: generatyvus AI, duomenų mokslas, ML, IoT   

### Darbas su konkrečiais projektais

Išsamias instrukcijas apie atskirus projektus žr. README failuose:  
- `quiz-app/README.md` - Vue 3 viktorinos programa  
- `7-bank-project/README.md` - Banko programa su autentifikacija  
- `5-browser-extension/README.md` - Naršyklės plėtinių kūrimas  
- `6-space-game/README.md` - Canvas pagrindu veikiantis žaidimas  
- `9-chat-project/README.md` - AI pokalbių asistento projektas  

### Monorepo struktūra

Nors nėra tradicinė monorepo saugykla, ši saugykla talpina kelis nepriklausomus projektus:  
- Kiekviena pamoka savaime užbaigta  
- Projektai nesidalina priklausomybėmis  
- Galima dirbti su atskirais projektais nepaveikiant kitų  
- Norint gauti pilną mokymo patirtį, rekomenduojama klonuoti visą saugyklą  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatizuoti vertimai gali turėti klaidų arba netikslumų. Originalus dokumentas gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritiniais atvejais rekomenduojama naudotis profesionalių žmonių vertimais. Mes neatsakome už bet kokius nesusipratimus ar neteisingas interpretacijas, kylančias iš šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->