# AGENTS.md

## Projekto apžvalga

Tai yra edukacinio mokymo programa, skirta mokyti pradedančiuosius internetinių svetainių kūrimo pagrindų. Programa yra išsami 12 savaičių trukmės kursas, sukurtas Microsoft Cloud Advocates komandos, apimantis 24 praktines pamokas, kuriose nagrinėjami JavaScript, CSS ir HTML.

### Pagrindinės sudedamosios dalys

- **Mokomoji medžiaga**: 24 struktūruotos pamokos, suskirstytos į projektų modulėlius
- **Praktiniai projektai**: Terariumas, Rašymo žaidimas, Naršyklės plėtinys, Kosminis žaidimas, Banko programa, Kodo redaktorius ir DI pokalbių asistentas
- **Interaktyvūs testai**: 48 testai po 3 klausimus kiekviename (testavimas prieš ir po pamokos)
- **Daugiakalbė palaikymas**: Automatiniai vertimai į daugiau nei 50 kalbų naudojant GitHub Actions
- **Technologijos**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (DI projektams)

### Architektūra

- Edukacinis saugyklos turinys su pamokomis
- Kiekvienos pamokos aplanke yra README failas, kodo pavyzdžiai ir sprendimai
- Atskiri projektai į atskirus katalogus (quiz-app, įvairūs pamokų projektai)
- Vertimo sistema naudojant GitHub Actions (co-op-translator)
- Dokumentacija pateikiama per Docsify ir prieinama PDF formatu

## Setup komandos

Ši saugykla daugiausiai skirta mokomosios medžiagos vartojimui. Darbui su konkrečiais projektais:

### Pagrindinio saugyklos nustatymas

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
# Vykdykite naršyklei būdingas plėtinių įkėlimo instrukcijas
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
# Nustatykite GITHUB_TOKEN aplinkos kintamąjį
python api.py
```

## Kūrimo darbo eiga

### Turinį kuriantiems

1. **Padalinkite saugyklą** į savo GitHub paskyrą
2. **Klonuokite savo fork** lokaliai
3. **Sukurkite naują šaką** savo pakeitimams
4. Redaguokite pamokų turinį arba kodo pavyzdžius
5. Testuokite kodo pakeitimus atitinkamuose projekto kataloguose
6. Pateikite pull requestus pagal indėlių taisykles

### Moksleiviams

1. Padalinkite arba klonuokite saugyklą
2. Sekite pamokų katalogus nuosekliai
3. Perskaitykite kiekvienos pamokos README failus
4. Atlikite priešpamokinius testus adresu https://ff-quizzes.netlify.app/web/
5. Dirbkite su kodo pavyzdžiais pamokų aplankuose
6. Atlikite užduotis ir iššūkius
7. Atlikite pasapmokinius testus

### Tiesioginė kūrimo eiga

- **Dokumentacija**: Paleiskite `docsify serve` šakniniame kataloge (port 3000)
- **Quiz App**: Paleiskite `npm run dev` quiz-app kataloge
- **Projektai**: Naudokite VS Code Live Server plėtinį HTML projektams
- **API projektai**: Paleiskite `npm start` atitinkamuose API kataloguose

## Testavimo instrukcijos

### Quiz App testavimas

```bash
cd quiz-app
npm run lint       # Patikrinkite kodo stiliaus problemas
npm run build      # Patikrinkite, ar paleidimas pavyksta
```

### Banko API testavimas

```bash
cd 7-bank-project/api
npm run lint       # Patikrinkite kodo stiliaus problemas
node server.js     # Patikrinkite, ar serveris paleidžiamas be klaidų
```

### Bendras testavimo principas

- Tai yra mokomojo pobūdžio saugykla be išsamios automatizuotos testavimo sistemos
- Rankinis testavimas orientuojamas į:
  - Kodo pavyzdžiai veikia be klaidų
  - Nuorodos dokumentacijoje veikia teisingai
  - Projekto sudarymas vyksta sėkmingai
  - Pavyzdžiai atitinka geriausias praktikas

### Patikrinimai prieš pateikiant

- Paleiskite `npm run lint` kataloguose su package.json
- Patikrinkite, ar markdown nuorodos yra galiojančios
- Testuokite kodo pavyzdžius naršyklėje ar Node.js aplinkoje
- Patikrinkite, ar vertimai išlaiko tinkamą struktūrą

## Kodo stiliaus gairės

### JavaScript

- Naudokite modernią ES6+ sintaksę
- Laikykitės standartinių ESLint konfigūracijų projektuose
- Vartokite prasmingus kintamųjų ir funkcijų pavadinimus mokomam aiškumui
- Pridėkite komentarus, aiškinančius koncepcijas mokiniams
- Formatavimui naudokite Prettier, jei sukonfigūruota

### HTML/CSS

- Naudokite semantinį HTML5 žymėjimą
- Taikykite lanksčius dizaino principus
- Aiškių klasės pavadinimų sistemos
- Komentarai, paaiškinantys CSS technikas mokiniams

### Python

- Laikykitės PEP 8 stiliaus gairių
- Aiškūs, mokomieji kodo pavyzdžiai
- Naudokite tipų užuominas mokymo tikslais

### Markdown dokumentacija

- Aiški antraščių hierarchija
- Kodo blokai su kalbos nurodymu
- Nuorodos į papildomus šaltinius
- Ekrano nuotraukos ir vaizdai `images/` kataloguose
- Alt tekstai vaizdams dėl prieinamumo

### Failų organizavimas

- Pamokos numeruotos nuosekliai (1-getting-started-lessons, 2-js-basics ir kt.)
- Kiekviename projekte yra `solution/`, dažnai ir `start/` arba `your-work/` katalogai
- Vaizdai laikomi konkrečių pamokų `images/` aplankuose
- Vertimai saugomi `translations/{kalbos-kodas}/` struktūroje

## Kūrimas ir diegimas

### Quiz App diegimas (Azure Static Web Apps)

quiz-app yra sukonfigūruotas Azure Static Web Apps diegimui:

```bash
cd quiz-app
npm run build      # Sukuria dist/ aplanką
# Diegia per GitHub Actions darbų eigą į main šaką įtraukus pakeitimus
```

Azure Static Web Apps konfigūracija:
- **App vieta**: `/quiz-app`
- **Išvesties vieta**: `dist`
- **Darbų eiga**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentacijos PDF generavimas

```bash
npm install                    # Įdiekite docsify-to-pdf
npm run convert               # Sugeneruoti PDF iš dokumentų
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Įdiekite Docsify globally
docsify serve                 # Aptarnauti localhost:3000
```

### Projektams specifiniai kūrimo veiksmai

Kiekvieno projekto katalogas gali turėti savo kūrimo procesą:
- Vue projektams: `npm run build` sukuria produkcijos paketus
- Statiniams projektams: nėra reikalo kurti – failus tiekti tiesiogiai

## Pull Request taisyklės

### Antraštės formatas

Naudokite aiškias ir išsamią antrastes, nurodančias keitimo sritį:
- `[Quiz-app] Pridėtas naujas testas pamokai X`
- `[Lesson-3] Sutvarkyta klaida terariumo projekte`
- `[Translation] Pridėta ispanų kalbos vertimas 5 pamokai`
- `[Docs] Atnaujintos diegimo instrukcijos`

### Būtini patikrinimai

Prieš pateikiant PR:

1. **Kodo kokybė**:
   - Paleiskite `npm run lint` paveiktuose projekto kataloguose
   - Ištaisykite visas lint klaidas ir perspėjimus

2. **Kūrimo patikrinimas**:
   - Paleiskite `npm run build` jei taikoma
   - Įsitikinkite, kad kūrimas vyksta be klaidų

3. **Nuorodų tikrinimas**:
   - Patikrinkite visas markdown nuorodas
   - Patikrinkite, ar paveikslėlių nuorodos veikia

4. **Turinio peržiūra**:
   - Patikrinkite rašybą ir gramatiką
   - Įsitikinkite, kad kodo pavyzdžiai teisingi ir mokomieji
   - Patikrinkite, ar vertimai išlaiko originalią prasmę

### Indėlio reikalavimai

- Sutikite su Microsoft CLA (automatinis patikrinimas pirmo PR metu)
- Laikykitės [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Skaitykite [CONTRIBUTING.md](./CONTRIBUTING.md) dėl detalių taisyklių
- Jei taikoma, nurodykite problemų numerius PR aprašyme

### Peržiūros procesas

- PR peržiūrimi prižiūrėtojų ir bendruomenės
- Prioritetas teikiamas mokymo aiškumui
- Kodo pavyzdžiai turi atitikti dabartines geriausias praktikas
- Vertimai peržiūrimi dėl tikslumo ir kultūrinės atitikties

## Vertimo sistema

### Automatinis vertimas

- Naudoja GitHub Actions su co-op-translator darbų eiga
- Automatiškai verčia į daugiau nei 50 kalbų
- Šaltinio failai pagrindiniuose kataloguose
- Išversti failai saugomi `translations/{kalbos-kodas}/` kataloguose

### Rankinių vertimų gerinimas

1. Suraskite failą `translations/{kalbos-kodas}/`
2. Atlikite patobulinimus išlaikydami struktūrą
3. Įsitikinkite, kad kodo pavyzdžiai veikia
4. Išbandykite lokalizuotus testus

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
- Ištrinkite `node_modules` ir `package-lock.json`, paleiskite `npm install` dar kartą
- Patikrinkite prievadų konfliktus (numatytasis: Vite naudoja port 5173)

**API serveris nepaleidžiamas**:
- Įsitikinkite, kad Node.js versija yra pakankama (node >=10)
- Patikrinkite, ar prievadas neužimtas
- Įsitikinkite, kad visos priklausomybės įdiegtos paleidus `npm install`

**Naršyklės plėtinys nesikrauna**:
- Patikrinkite, ar manifest.json teisingai suformatuotas
- Pažiūrėkite naršyklės konsolėje klaidas
- Vadovaukitės naršyklės plėtinių diegimo instrukcijomis

**Python pokalbių projekto problemos**:
- Įdiekite openai paketą: `pip install openai`
- Patikrinkite, ar nustatyta GITHUB_TOKEN aplinkos kintamasis
- Patikrinkite GitHub Models prieigos leidimus

**Docsify neatlieka dokumentacijos pateikimo**:
- Įdiekite docsify-cli globaliai: `npm install -g docsify-cli`
- Paleiskite iš saugyklos šaknies
- Patikrinkite, ar egzistuoja `docs/_sidebar.md`

### Kūrimo aplinkos patarimai

- Naudokite VS Code kartu su Live Server plėtiniu HTML projektams
- Įdiekite ESLint ir Prettier plėtinius dėl nuoseklaus formatavimo
- Naudokite naršyklės DevTools JavaScript derinimui
- Vue projektams įdiekite Vue DevTools naršyklės plėtinį

### Veikimo efektyvumo svarstymai

- Daug išverstų failų (daugiau nei 50 kalbų) reiškia didelius klonus
- Naudokite seklaus klonavimą, jei dirbate tik su turiniu: `git clone --depth 1`
- Prie anglų kalbos turinio nedarykite vertimų paieškų
- Kūrimo procesai gali būti lėti pirmą kartą (npm install, Vite build)

## Saugumo svarstymai

### Aplinkos kintamieji

- API raktai neturi būti įtraukti į saugyklą
- Naudokite `.env` failus (jau įtrauktus į `.gitignore`)
- Projekto README failuose dokumentuokite reikiamus aplinkos kintamuosius

### Python projektai

- Naudokite virtualias aplinkas: `python -m venv venv`
- Nuolat atnaujinkite priklausomybes
- GitHub tokenai turi turėti minimalias reikalingas teises

### GitHub Models prieiga

- Reikalingi Asmeninės prieigos raktai (PAT)
- Tokenai turi būti laikomi aplinkos kintamuosiuose
- Niekada neįtraukti tokenų ar kredencialų į saugyklą

## Papildomi pastabos

### Tikslinė auditorija

- Pilni pradedantieji internetinių svetainių kūrime
- Studentai ir savarankiški mokiniai
- Mokytojai, naudojantys programą klasėse
- Turinys sukurtas prieinamumui ir palaipsniui įgyjamai kompetencijai

### Edukacinė filosofija

- Projektine mokymosi metodika
- Dažni žinių tikrinimai (testai)
- Praktiniai kodo užduotys
- Realūs taikymo pavyzdžiai
- Dėmesys pagrindams prieš naudojant frameworks

### Saugyklos palaikymas

- Aktyvi mokinių ir prisidėjusių bendruomenė
- Reguliarūs priklausomybių ir turinio atnaujinimai
- Problemos ir diskusijos prižiūrimos
- Vertimų atnaujinimai automatiškai per GitHub Actions

### Susiję ištekliai

- [Microsoft Learn moduliai](https://docs.microsoft.com/learn/)
- [Student Hub ištekliai](https://docs.microsoft.com/learn/student-hub/)
- Rekomenduojama naudojant [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- Papildomi kursai: Generatyvus DIR, Duomenų mokslas, ML, IoT programos

### Darbas su konkrečiais projektais

Išsamioms instrukcijoms apie atskirus projektus žr. README failus:
- `quiz-app/README.md` - Vue 3 testavimo programa
- `7-bank-project/README.md` - Banko programa su autentifikacija
- `5-browser-extension/README.md` - Naršyklės plėtinių kūrimas
- `6-space-game/README.md` - Žaidimo su Canvas kūrimas
- `9-chat-project/README.md` - DI pokalbių asistento projektas

### Monorepo struktūra

Nors tai nėra tradicinis monorepo, ši saugykla talpina kelis nepriklausomus projektus:
- Kiekviena pamoka yra atskira
- Projektai nesidalina priklausomybėmis
- Dirbkite su atskiromis dalimis nedarydami įtakos kitoms
- Norint naudotis visa programa, reikalingas visos saugyklos klonavimas

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, atkreipkite dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turi būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojame naudotis profesionalaus žmogaus vertimu. Mes neatsakome už jokius nesusipratimus ar netinkamus aiškinimus, kylantčius iš šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->