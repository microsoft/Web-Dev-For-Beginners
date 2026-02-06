# AGENTS.md

## Projekto apžvalga

Tai yra edukacinis mokymo planas, skirtas pradedantiesiems mokyti interneto kūrimo pagrindų. Mokymo programa yra išsami 12 savaičių kursų programa, sukurta Microsoft Cloud Advocates, apimanti 24 praktines pamokas apie JavaScript, CSS ir HTML.

### Pagrindiniai komponentai

- **Edukacinis turinys**: 24 struktūruotos pamokos, organizuotos į projektinius modulius
- **Praktiniai projektai**: Terariumas, Rašymo žaidimas, Naršyklės plėtinys, Kosmoso žaidimas, Banko programa, Kodo redaktorius ir DI pokalbių asistentas
- **Interaktyvūs testai**: 48 testai su po 3 klausimus kiekviename (prieš/post pamoką įvertinimai)
- **Daugiakalbystė**: Automatiniai vertimai į 50+ kalbų per GitHub Actions
- **Technologijos**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (DI projektams)

### Architektūra

- Edukacinis saugykla su pamokų struktūra
- Kiekvienas pamokos katalogas turi README, kodo pavyzdžius ir sprendimus
- Atskiri projektai atskiruose kataloguose (quiz-app, įvairūs pamokų projektai)
- Vertimų sistema naudojant GitHub Actions (co-op-translator)
- Dokumentacija tiekiama per Docsify ir prieinama kaip PDF

## Paleidimo komandos

Ši saugykla daugiausia skirta edukaciniam turiniui vartoti. Dirbant su konkrečiais projektais:

### Pagrindinės saugyklos paleidimas

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Quiz App paleidimas (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Paleiskite kūrimo serverį
npm run build      # Sukurkite gamybai
npm run lint       # Vykdykite ESLint
```

### Banko projekto API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Paleisti API serverį
npm run lint       # Paleisti ESLint
npm run format     # Formatuoti su Prettier
```

### Naršyklės plėtinių projektai

```bash
cd 5-browser-extension/solution
npm install
# Sekite naršyklės specifines plėtinių įkėlimo instrukcijas
```

### Kosmoso žaidimo projektai

```bash
cd 6-space-game/solution
npm install
# Atidarykite index.html naršyklėje arba naudokite Live Server
```

### Pokalbių projekto (Python backend) paleidimas

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nustatykite GITHUB_TOKEN aplinkos kintamąjį
python api.py
```

## Kūrimo darbo eiga

### Turinį prisidedantiesiems

1. **Padarykite saugyklos fork'ą** savo GitHub paskyroje
2. **Klonuokite savo fork'ą** lokaliai
3. **Sukurkite naują šaką** savo pakeitimams
4. Keiskite pamokų turinį ar kodo pavyzdžius
5. Išbandykite kodo pakeitimus atitinkamuose projektų kataloguose
6. Pateikite pull request pagal indėlio taisykles

### Moksleiviams

1. Padarykite fork arba klonuokite saugyklą
2. Sekite pamokų katalogus paeiliui
3. Skaitykite kiekvienos pamokos README failus
4. Atlikite priešpamokinius testus adresu https://ff-quizzes.netlify.app/web/
5. Dirbkite su kodo pavyzdžiais pamokų kataloguose
6. Atlikite užduotis ir iššūkius
7. Atlikite po pamokos testus

### Tiesioginė plėtra

- **Dokumentacija**: vykdykite `docsify serve` šaknyje (portas 3000)
- **Quiz App**: vykdykite `npm run dev` quiz-app kataloge
- **Projektai**: naudokite VS Code Live Server plėtinį HTML projektams
- **API projektai**: vykdykite `npm start` atitinkamuose API kataloguose

## Testavimo instrukcijos

### Quiz App testavimas

```bash
cd quiz-app
npm run lint       # Patikrinkite kodo stiliaus problemas
npm run build      # Patikrinkite, ar sėkmingai sukompiliuota
```

### Banko API testavimas

```bash
cd 7-bank-project/api
npm run lint       # Patikrinti kodo stiliaus problemas
node server.js     # Patvirtinti, kad serveris paleidžiamas be klaidų
```

### Bendra testavimo tvarka

- Tai edukacinė saugykla be išsamios automatizuotos testavimo sistemos
- Rankinis testavimas orientuotas į:
  - Kodo pavyzdžiai veikia be klaidų
  - Dokumentacijos nuorodos veikia tinkamai
  - Projektų surinkimai sėkmingi
  - Pavyzdžiai atitinka geriausias praktikas

### Prieš pateikiant patikrinimus

- Vykdykite `npm run lint` kataloguose su package.json
- Patikrinkite, ar markdown nuorodos galioja
- Testuokite kodo pavyzdžius naršyklėje ar Node.js aplinkoje
- Įsitikinkite, kad vertimai išlaiko tinkamą struktūrą

## Kodo stiliaus gaires

### JavaScript

- Naudokite modernią ES6+ sintaksę
- Laikykitės ESLint konfigūracijų projektuose
- Naudokite prasmingus kintamųjų ir funkcijų vardus edukaciniam aiškumui
- Rašykite komentarus paaiškinančius koncepcijas mokiniams
- Formatuokite su Prettier, jei jis konfigūruotas

### HTML/CSS

- Semantiški HTML5 elementai
- Responsyvus dizainas
- Aiškios klasės pavadinimų konvencijos
- Komentarai paaiškinantys CSS technikas mokiniams

### Python

- PEP 8 stiliaus gairės
- Aiškūs, edukaciniai kodo pavyzdžiai
- Tipų užuominos, kur mokymuisi naudingos

### Markdown dokumentacija

- Aiški antraščių hierarchija
- Kodo blokai su kalbos nurodymu
- Nuorodos į papildomus šaltinius
- Ekrano kopijos ir vaizdai `images/` kataloguose
- Alt tekstas paveikslėliams dėl prieinamumo

### Failų organizavimas

- Pamokos sunumeruotos paeiliui (1-getting-started-lessons, 2-js-basics ir t.t.)
- Kiekvienas projektas turi `solution/` ir dažnai `start/` arba `your-work/` katalogus
- Vaizdai saugomi pamokai pritaikytuose `images/` aplankuose
- Vertimai pagal kalbas kataloguose `translations/{language-code}/`

## Surinkimas ir diegimas

### Quiz App diegimas (Azure Static Web Apps)

Quiz-app sukonfigūruotas Azure Static Web Apps diegimui:

```bash
cd quiz-app
npm run build      # Sukuria dist/ aplanką
# Diegia per GitHub Actions darbų eigą, kai į pagrindinį šaką nusiunčiama naujinimų
```

Azure Static Web Apps konfigūracija:
- **Programos vieta**: `/quiz-app`
- **Išvesties vieta**: `dist`
- **Darbo eiga**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### PDF dokumentacijos generavimas

```bash
npm install                    # Įdiekite docsify-to-pdf
npm run convert               # Sugeneruoti PDF iš dokumentų
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Įdiekite Docsify globaliai
docsify serve                 # Paleiskite localhost:3000 adresu
```

### Projektų specifiniai surinkimai

Kiekvienas projekto katalogas gali turėti savo surinkimo procesą:
- Vue projektai: `npm run build` kuria gamybinius paketus
- Statiniai projektai: jokių surinkimo žingsnių, failai tiekiami tiesiogiai

## Pull request gairės

### Pavadinimo formatas

Naudokite aiškius, aprašomuosius pavadinimus, nurodančius pokyčių sritį:
- `[Quiz-app] Pridėtas naujas testas pamokai X`
- `[Lesson-3] Ištaisyta rašybos klaida terariumo projekte`
- `[Translation] Pridėtas ispanų vertimas pamokai 5`
- `[Docs] Atnaujintos diegimo instrukcijos`

### Būtini patikrinimai

Prieš pateikiant PR:

1. **Kodo kokybė**:
   - Vykdykite `npm run lint` paveiktuose projekto kataloguose
   - Ištaisyti visi lint klaidos ir įspėjimai

2. **Surinkimo patvirtinimas**:
   - Jeigu taikoma, paleiskite `npm run build`
   - Įsitikinkite, kad nėra surinkimo klaidų

3. **Nuorodų patikra**:
   - Patikrinkite visas markdown nuorodas
   - Patvirtinkite, kad paveikslėlių nuorodos veikia

4. **Turinio peržiūra**:
   - Patikrinkite rašybą ir gramatiką
   - Įsitikinkite, kad kodo pavyzdžiai yra teisingi ir edukaciniai
   - Patvirtinkite, kad vertimai išlaiko originalią prasmę

### Indėlio reikalavimai

- Sutinkate su Microsoft CLA (automatinis patikrinimas pirmame PR)
- Laikykitės [Microsoft atvirojo kodo elgesio kodekso](https://opensource.microsoft.com/codeofconduct/)
- Žr. [CONTRIBUTING.md](./CONTRIBUTING.md) išsamioms gairėms
- Nurodykite susijusių issue numerius PR aprašyme, jei taikoma

### Peržiūros procesas

- PR peržiūri prižiūrėtojai ir bendruomenė
- Prioritetas teikiamas edukacinės aiškumo užtikrinimui
- Kodo pavyzdžiai turėtų atitikti dabartines geriausias praktikas
- Vertimai tikrinami dėl tikslumo ir kultūrinio tinkamumo

## Vertimų sistema

### Automatinis vertimas

- Naudoja GitHub Actions su co-op-translator darbo eiga
- Automatiškai verčia į 50+ kalbų
- Šaltiniai pagrindiniuose kataloguose
- Išversti failai kataloguose `translations/{language-code}/`

### Rankinių vertimų patobulinimai

1. Raskite failą kataloge `translations/{language-code}/`
2. Atlikite patobulinimus išlaikydami struktūrą
3. Užtikrinkite, kad kodo pavyzdžiai išlieka funkcionuojantys
4. Testuokite bet kokį lokalizuotą testų turinį

### Vertimų metaduomenys

Išverstų failų antraštė metadata:
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
- Ištrinkite `node_modules` ir `package-lock.json`, vėl vykdykite `npm install`
- Patikrinkite ar nėra uosto konflikto (numatytas: Vite naudoja portą 5173)

**API serveris nepaleidžiamas**:
- Patikrinkite, ar Node.js versija atitinka reikalavimus (node >=10)
- Patikrinkite ar uostas neužimtas
- Užtikrinkite, kad visos priklausomybės įdiegtos su `npm install`

**Naršyklės plėtinys nepasirodo**:
- Patikrinkite, ar manifest.json tinkamai suformatuotas
- Peržiūrėkite naršyklės konsolėje klaidas
- Laikykitės naršyklės plėtinio diegimo instrukcijų

**Python pokalbių projekto problemos**:
- Užtikrinkite, kad įdiegta OpenAI biblioteka: `pip install openai`
- Patikrinkite, ar GITHUB_TOKEN aplinkos kintamasis nustatytas
- Patikrinkite prieigą prie GitHub modelių leidimų

**Docsify nedeliveruoja dokumentacijos**:
- Įdiekite docsify-cli globaliai: `npm install -g docsify-cli`
- Paleiskite iš saugyklos šaknies katalogo
- Patikrinkite, kad egzistuoja `docs/_sidebar.md`

### Kūrimo aplinkos patarimai

- Naudokite VS Code su Live Server plėtiniu HTML projektams
- Įdiekite ESLint ir Prettier plėtinius nuosekliam formatavimui
- Naudokite naršyklės DevTools JavaScript derinimui
- Vue projektams įdiekite Vue DevTools naršyklės plėtinį

### Veikimo našumo aspektai

- Daug išverstų failų (50+ kalbų) reiškia, kad pilni klonai yra dideli
- Naudokite seklų klonavimą, jei dirbate tik su turiniu: `git clone --depth 1`
- Išskirkite vertimus iš paieškų, kai dirbate su anglų turiniu
- Surinkimo procesai gali būti lėti pirmais paleidimais (npm install, Vite build)

## Saugumo aspektai

### Aplinkos kintamieji

- API raktai neturi būti įtraukiami į saugyklą
- Naudokite `.env` failus (jie jau įtraukti į `.gitignore`)
- Dokumentuokite reikiamus aplinkos kintamuosius projekto README failuose

### Python projektai

- Naudokite virtualias aplinkas: `python -m venv venv`
- Laikykite priklausomybes atnaujintas
- GitHub tokenai turėtų turėti minimalius būtinus leidimus

### GitHub modelių prieiga

- Asmeniniai prieigos tokenai (PAT) reikalingi GitHub modeliams
- Tokenai turi būti saugomi kaip aplinkos kintamieji
- Niekada neįtraukti tokenų ar prisijungimo duomenų į saugyklą

## Papildomos pastabos

### Tikslinė auditorija

- Visiškai pradedantieji interneto kūrime
- Studentai ir savarankiški mokiniai
- Mokytojai, naudojantys mokymo programą klasėse
- Turinys skirtas prieinamumui ir įgūdžių palaipsniui vystymui

### Edukacinė filosofija

- Mokymasis per projektus
- Dažni žinių patikrinimai (testai)
- Praktiniai kodo uždaviniai
- Realaus pasaulio taikymo pavyzdžiai
- Dėmesys pagrindams prieš keruklius

### Saugyklos priežiūra

- Aktyvi mokinių ir prisidedančiųjų bendruomenė
- Reguliarūs priklausomybių ir turinio atnaujinimai
- Problemų ir diskusijų stebėjimą atlieka prižiūrėtojai
- Vertimų atnaujinimai automatiškai per GitHub Actions

### Susiję ištekliai

- [Microsoft Learn moduliai](https://docs.microsoft.com/learn/)
- [Studentų centras](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekomenduojamas mokiniams
- Papildomi kursai: Generatyvus AI, Duomenų mokslas, ML, IoT programos prieinamos

### Darbas su konkrečiais projektais

Išsamias instrukcijas apie atskirus projektus rasite README failuose:
- `quiz-app/README.md` - Vue 3 testų aplikacija
- `7-bank-project/README.md` - Banko programa su autentifikacija
- `5-browser-extension/README.md` - Naršyklės plėtinio kūrimas
- `6-space-game/README.md` - Canvas pagrindu žaidimo kūrimas
- `9-chat-project/README.md` - DI pokalbių asistento projektas

### Monorepo struktūra

Nors tai nėra tradicinis monorepo, ši saugykla talpina kelis nepriklausomus projektus:
- Kiekviena pamoka yra savarankiška
- Projektai nesidalina priklausomybėmis
- Darbas su atskirais projektais nekeičia kitų
- Klonuokite visą saugyklą, jei norite pilnos mokymo programos patirties

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatizuoti vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojamas profesionalus vertimas žmogaus. Mes neatsakome už bet kokius nesusipratimus ar klaidingus interpretavimus, kylančius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->