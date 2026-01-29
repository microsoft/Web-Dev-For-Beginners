# AGENTS.md

## Muhtasari wa Mradi

Hii ni hifadhi ya mtaala wa elimu kwa ajili ya kufundisha misingi ya maendeleo ya wavuti kwa wanaoanza. Mtaala huu ni kozi ya kina ya wiki 12 iliyotengenezwa na Microsoft Cloud Advocates, yenye masomo 24 ya vitendo yanayofunika JavaScript, CSS, na HTML.

### Vipengele Muhimu

- **Yaliyomo ya Elimu**: Masomo 24 yaliyopangwa kwa utaratibu katika moduli za miradi
- **Miradi ya Vitendo**: Terrarium, Mchezo wa Kuandika, Kiendelezi cha Kivinjari, Mchezo wa Anga, Programu ya Benki, Mhariri wa Nambari, na Msaidizi wa Gumzo wa AI
- **Maswali ya Maingiliano**: Maswali 48 yenye maswali 3 kila moja (tathmini kabla/baada ya somo)
- **Msaada wa Lugha Nyingi**: Tafsiri za kiotomatiki kwa zaidi ya lugha 50 kupitia GitHub Actions
- **Teknolojia**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (kwa miradi ya AI)

### Miundombinu

- Hifadhi ya elimu yenye muundo wa msingi wa masomo
- Kila folda ya somo ina README, mifano ya nambari, na suluhisho
- Miradi huru katika saraka tofauti (quiz-app, miradi mbalimbali ya somo)
- Mfumo wa tafsiri ukitumia GitHub Actions (co-op-translator)
- Nyaraka zinatolewa kupitia Docsify na zinapatikana kama PDF

## Amri za Usanidi

Hifadhi hii ni hasa kwa ajili ya matumizi ya yaliyomo ya elimu. Kwa kufanya kazi na miradi maalum:

### Usanidi wa Hifadhi Kuu

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Usanidi wa Programu ya Maswali (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API ya Mradi wa Benki (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Miradi ya Kiendelezi cha Kivinjari

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Miradi ya Mchezo wa Anga

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Mradi wa Gumzo (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Mtiririko wa Maendeleo

### Kwa Wanaochangia Yaliyomo

1. **Fork hifadhi** kwenye akaunti yako ya GitHub
2. **Clone fork yako** kwenye kompyuta yako
3. **Unda tawi jipya** kwa mabadiliko yako
4. Fanya mabadiliko kwenye yaliyomo ya somo au mifano ya nambari
5. Jaribu mabadiliko yoyote ya nambari katika saraka husika za mradi
6. Tuma maombi ya kuvuta ukifuata miongozo ya mchango

### Kwa Wanafunzi

1. Fork au clone hifadhi
2. Tembelea saraka za masomo kwa utaratibu
3. Soma faili za README kwa kila somo
4. Kamilisha maswali ya kabla ya somo kwenye https://ff-quizzes.netlify.app/web/
5. Fanya kazi kupitia mifano ya nambari katika folda za masomo
6. Kamilisha kazi na changamoto
7. Fanya maswali ya baada ya somo

### Maendeleo ya Moja kwa Moja

- **Nyaraka**: Endesha `docsify serve` kwenye mzizi (bandari 3000)
- **Programu ya Maswali**: Endesha `npm run dev` kwenye saraka ya quiz-app
- **Miradi**: Tumia kiendelezi cha Live Server cha VS Code kwa miradi ya HTML
- **Miradi ya API**: Endesha `npm start` kwenye saraka husika za API

## Maelekezo ya Kupima

### Upimaji wa Programu ya Maswali

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Upimaji wa API ya Benki

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Njia ya Jumla ya Upimaji

- Hii ni hifadhi ya elimu bila majaribio ya kiotomatiki ya kina
- Upimaji wa mikono unalenga:
  - Mifano ya nambari inaendeshwa bila makosa
  - Viungo katika nyaraka vinafanya kazi ipasavyo
  - Ujenzi wa mradi unakamilika kwa mafanikio
  - Mifano inafuata mbinu bora

### Ukaguzi Kabla ya Kuwasilisha

- Endesha `npm run lint` katika saraka zilizo na package.json
- Hakikisha viungo vya markdown ni halali
- Jaribu mifano ya nambari kwenye kivinjari au Node.js
- Hakikisha tafsiri zinadumisha muundo sahihi

## Miongozo ya Mtindo wa Nambari

### JavaScript

- Tumia sintaksia ya kisasa ya ES6+
- Fuata usanidi wa kawaida wa ESLint uliotolewa katika miradi
- Tumia majina ya maana kwa vigezo na kazi kwa uwazi wa elimu
- Ongeza maelezo yanayofafanua dhana kwa wanafunzi
- Fomati ukitumia Prettier pale inapowekwa

### HTML/CSS

- Vipengele vya semantic vya HTML5
- Kanuni za muundo wa msikivu
- Mipangilio ya wazi ya majina ya darasa
- Maelezo yanayofafanua mbinu za CSS kwa wanafunzi

### Python

- Miongozo ya mtindo wa PEP 8
- Mifano ya nambari iliyo wazi na ya kielimu
- Vidokezo vya aina pale vinaposaidia kujifunza

### Nyaraka za Markdown

- Hierarkia ya wazi ya vichwa
- Vitalu vya nambari vilivyo na maelezo ya lugha
- Viungo kwa rasilimali za ziada
- Picha na michoro katika saraka za `images/`
- Maandishi mbadala kwa picha kwa upatikanaji

### Mpangilio wa Faili

- Masomo yamepangwa kwa namba kwa utaratibu (1-getting-started-lessons, 2-js-basics, nk.)
- Kila mradi una `solution/` na mara nyingi `start/` au `your-work/` saraka
- Picha zimehifadhiwa katika folda maalum za `images/` za somo
- Tafsiri katika muundo wa `translations/{language-code}/`

## Ujenzi na Upelekaji

### Upelekaji wa Programu ya Maswali (Azure Static Web Apps)

Programu ya quiz-app imewekwa kwa ajili ya upelekaji wa Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Usanidi wa Azure Static Web Apps:
- **Mahali pa Programu**: `/quiz-app`
- **Mahali pa Matokeo**: `dist`
- **Mtiririko wa Kazi**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Uzalishaji wa PDF wa Nyaraka

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Nyaraka za Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Ujenzi Maalum wa Mradi

Kila saraka ya mradi inaweza kuwa na mchakato wake wa ujenzi:
- Miradi ya Vue: `npm run build` huunda vifurushi vya uzalishaji
- Miradi ya Stata: Hakuna hatua ya ujenzi, tumia faili moja kwa moja

## Miongozo ya Maombi ya Kuvuta

### Muundo wa Kichwa

Tumia vichwa vya wazi, vya kuelezea vinavyoonyesha eneo la mabadiliko:
- `[Quiz-app] Ongeza maswali mapya kwa somo X`
- `[Lesson-3] Rekebisha hitilafu ya tahajia katika mradi wa terrarium`
- `[Translation] Ongeza tafsiri ya Kihispania kwa somo la 5`
- `[Docs] Sasisha maelekezo ya usanidi`

### Ukaguzi Unaohitajika

Kabla ya kuwasilisha PR:

1. **Ubora wa Nambari**:
   - Endesha `npm run lint` katika saraka za mradi zilizoathirika
   - Rekebisha makosa na onyo yote ya linting

2. **Uthibitishaji wa Ujenzi**:
   - Endesha `npm run build` ikiwa inahitajika
   - Hakikisha hakuna makosa ya ujenzi

3. **Uthibitishaji wa Viungo**:
   - Jaribu viungo vyote vya markdown
   - Hakikisha marejeleo ya picha yanafanya kazi

4. **Ukaguzi wa Yaliyomo**:
   - Hakiki tahajia na sarufi
   - Hakikisha mifano ya nambari ni sahihi na ya kielimu
   - Hakikisha tafsiri zinadumisha maana ya awali

### Mahitaji ya Mchango

- Kubali Microsoft CLA (ukaguzi wa kiotomatiki kwenye PR ya kwanza)
- Fuata [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tazama [CONTRIBUTING.md](./CONTRIBUTING.md) kwa miongozo ya kina
- Rejelea namba za masuala katika maelezo ya PR ikiwa inahitajika

### Mchakato wa Mapitio

- PRs hupitiwa na wasimamizi na jamii
- Uwiano wa elimu unapewa kipaumbele
- Mifano ya nambari inapaswa kufuata mbinu bora za sasa
- Tafsiri hupitiwa kwa usahihi na kufaa kwa kitamaduni

## Mfumo wa Tafsiri

### Tafsiri ya Kiotomatiki

- Inatumia GitHub Actions na mtiririko wa kazi wa co-op-translator
- Hutafsiri kwa zaidi ya lugha 50 kiotomatiki
- Faili za chanzo katika saraka kuu
- Faili zilizotafsiriwa katika muundo wa `translations/{language-code}/`

### Kuongeza Maboresho ya Tafsiri ya Mwongozo

1. Tafuta faili katika `translations/{language-code}/`
2. Fanya maboresho huku ukidumisha muundo
3. Hakikisha mifano ya nambari inabaki kufanya kazi
4. Jaribu maudhui yoyote ya maswali yaliyotafsiriwa

### Metadata ya Tafsiri

Faili zilizotafsiriwa zinajumuisha kichwa cha metadata:
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

## Usuluhishi wa Hitilafu na Utatuzi

### Masuala ya Kawaida

**Programu ya maswali haianzi**:
- Hakikisha toleo la Node.js (v14+ linapendekezwa)
- Futa `node_modules` na `package-lock.json`, kisha endesha `npm install` tena
- Angalia migongano ya bandari (chaguo-msingi: Vite hutumia bandari 5173)

**Seva ya API haianzi**:
- Hakikisha toleo la Node.js linakidhi kiwango cha chini (node >=10)
- Angalia kama bandari tayari inatumika
- Hakikisha utegemezi wote umewekwa na `npm install`

**Kiendelezi cha kivinjari hakipakii**:
- Hakikisha manifest.json imeundwa ipasavyo
- Angalia makosa kwenye console ya kivinjari
- Fuata maelekezo maalum ya usakinishaji wa kiendelezi cha kivinjari

**Masuala ya mradi wa gumzo la Python**:
- Hakikisha kifurushi cha OpenAI kimewekwa: `pip install openai`
- Hakikisha mazingira ya GITHUB_TOKEN yamewekwa
- Angalia ruhusa za ufikiaji wa GitHub Models

**Docsify haifanyi kazi**:
- Sakinisha docsify-cli kimataifa: `npm install -g docsify-cli`
- Endesha kutoka kwenye saraka ya mzizi ya hifadhi
- Hakikisha `docs/_sidebar.md` ipo

### Vidokezo vya Mazingira ya Maendeleo

- Tumia VS Code na kiendelezi cha Live Server kwa miradi ya HTML
- Sakinisha viendelezi vya ESLint na Prettier kwa fomati thabiti
- Tumia DevTools za kivinjari kwa utatuzi wa nambari za JavaScript
- Kwa miradi ya Vue, sakinisha kiendelezi cha Vue DevTools kwenye kivinjari

### Mazingatio ya Utendaji

- Idadi kubwa ya faili zilizotafsiriwa (lugha 50+) inamaanisha clones kamili ni kubwa
- Tumia clone ya kina ikiwa unafanya kazi tu kwenye yaliyomo: `git clone --depth 1`
- Ondoa tafsiri kutoka kwa utafutaji unapofanya kazi kwenye yaliyomo ya Kiingereza
- Michakato ya ujenzi inaweza kuwa polepole kwenye uendeshaji wa kwanza (npm install, Vite build)

## Mazingatio ya Usalama

### Vigezo vya Mazingira

- Funguo za API hazipaswi kamwe kujitolea kwenye hifadhi
- Tumia faili za `.env` (tayari ziko kwenye `.gitignore`)
- Andika nyaraka za vigezo vya mazingira vinavyohitajika katika README za mradi

### Miradi ya Python

- Tumia mazingira ya kawaida: `python -m venv venv`
- Weka utegemezi umesasishwa
- Tokeni za GitHub zinapaswa kuwa na ruhusa za chini zinazohitajika

### Ufikiaji wa GitHub Models

- Tokeni za Ufikiaji wa Kibinafsi (PAT) zinahitajika kwa GitHub Models
- Tokeni zinapaswa kuhifadhiwa kama vigezo vya mazingira
- Usijitolee kamwe tokeni au hati za siri

## Vidokezo vya Ziada

### Watazamaji Wanaolengwa

- Wanaoanza kabisa katika maendeleo ya wavuti
- Wanafunzi na wanaojifunza wenyewe
- Walimu wanaotumia mtaala darasani
- Yaliyomo yameundwa kwa upatikanaji na ujenzi wa ujuzi wa hatua kwa hatua

### Falsafa ya Elimu

- Njia ya kujifunza kwa msingi wa mradi
- Ukaguzi wa maarifa wa mara kwa mara (maswali)
- Mazoezi ya vitendo ya nambari
- Mifano ya matumizi ya ulimwengu halisi
- Kuzingatia misingi kabla ya mifumo

### Matengenezo ya Hifadhi

- Jamii hai ya wanafunzi na wachangiaji
- Sasisho za mara kwa mara kwa utegemezi na yaliyomo
- Masuala na mijadala inafuatiliwa na wasimamizi
- Sasisho za tafsiri zinafanywa kiotomatiki kupitia GitHub Actions

### Rasilimali Zinazohusiana

- [Moduli za Microsoft Learn](https://docs.microsoft.com/learn/)
- [Rasilimali za Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inapendekezwa kwa wanafunzi
- Kozi za ziada: Generative AI, Sayansi ya Takwimu, ML, mtaala wa IoT unapatikana

### Kufanya Kazi na Miradi Mahususi

Kwa maelekezo ya kina juu ya miradi ya mtu binafsi, rejelea faili za README katika:
- `quiz-app/README.md` - Programu ya maswali ya Vue 3
- `7-bank-project/README.md` - Programu ya benki yenye uthibitishaji
- `5-browser-extension/README.md` - Maendeleo ya kiendelezi cha kivinjari
- `6-space-game/README.md` - Maendeleo ya mchezo wa msingi wa Canvas
- `9-chat-project/README.md` - Mradi wa msaidizi wa gumzo la AI

### Muundo wa Monorepo

Ingawa si monorepo ya jadi, hifadhi hii ina miradi huru mingi:
- Kila somo ni huru
- Miradi haishiriki utegemezi
- Fanya kazi kwenye miradi ya mtu binafsi bila kuathiri mingine
- Clone hifadhi nzima kwa uzoefu kamili wa mtaala

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.