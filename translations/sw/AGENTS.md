# AGENTS.md

## Muhtasari wa Mradi

Hii ni hifadhi ya mtaala wa elimu kwa ajili ya kufundisha misingi ya maendeleo ya wavuti kwa wanaoanza. Mtaala ni kozi kamili ya wiki 12 iliyotengenezwa na Microsoft Cloud Advocates, ukiwa na masomo 24 ya vitendo yanayohusu JavaScript, CSS, na HTML.

### Vipengele Muhimu

- **Maudhui ya Elimu**: Masomo 24 yaliyopangwa katika moduli za mradi
- **Miradi ya Vitendo**: Terrarium, Mchezo wa Kuandika, Kiendelezi cha Kivinjari, Mchezo wa Anga, Programu ya Benki, Mhariri wa Msimbo, na Msaidizi wa Mazungumzo wa AI
- **Vikwazo vya Interakti**: Vikwazo 48 vyenye maswali 3 kila kimoja (tathmini kabla/baada ya somo)
- **Msaada wa Lugha Nyingi**: Tafsiri za moja kwa moja kwa lugha 50+ kupitia GitHub Actions
- **Teknolojia**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (kwa miradi ya AI)

### Usanifu

- Hifadhi ya elimu yenye muundo wa msingi wa masomo
- Kila folda ya somo ina README, mifano ya msimbo, na suluhisho
- Miradi huru katika saraka tofauti (quiz-app, miradi mbalimbali ya somo)
- Mfumo wa tafsiri ukitumia GitHub Actions (co-op-translator)
- Nyaraka zinatolewa kupitia Docsify na zinapatikana pia kama PDF

## Amri za Kusanidi

Hii hifadhi kwa kawaida ni kwa matumizi ya maudhui ya elimu. Kwa kufanya kazi na miradi maalum:

### Usanidi wa Hifadhi Kuu

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Usanidi wa Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Anzisha seva ya maendeleo
npm run build      # Tengeneza kwa ajili ya uzalishaji
npm run lint       # Endesha ESLint
```

### Bank Project API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Anzisha seva ya API
npm run lint       # Endesha ESLint
npm run format     # Panga kwa Prettier
```

### Miradi ya Kiendelezi cha Kivinjari

```bash
cd 5-browser-extension/solution
npm install
# Fuata maelekezo ya upakiaji ya programu-jalizi maalum kwa kivinjari
```

### Miradi ya Mchezo wa Anga

```bash
cd 6-space-game/solution
npm install
# Fungua index.html kwenye kivinjari au tumia Live Server
```

### Mradi wa Mazungumzo (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Weka mabadiliko ya mazingira ya GITHUB_TOKEN
python api.py
```

## Mtiririko wa Maendeleo

### Kwa Watoa Maudhui

1. **Fungua hifadhi** kwenye akaunti yako ya GitHub
2. **Nakili hifadhi yako** kwa kompyuta yako
3. **Unda tawi jipya** kwa mabadiliko yako
4. Fanya mabadiliko kwenye maudhui ya somo au mifano ya msimbo
5. Jaribu mabadiliko yoyote ya msimbo katika saraka husika za miradi
6. Wasilisha ombi la pull kufuata miongozo ya mchango

### Kwa Wanafunzi

1. Fanya fork au nakili hifadhi
2. Elekea kwenye saraka za masomo mfululizo
3. Soma faili za README kwa kila somo
4. Kamilisha vikwazo vya kabla ya somo kwenye https://ff-quizzes.netlify.app/web/
5. Fanya kazi kupitia mifano ya msimbo katika folda za masomo
6. Kamilisha kazi na changamoto
7. Fanya vikwazo vya baada ya somo

### Maendeleo Mtandaoni

- **Nyaraka**: Endesha `docsify serve` kwenye mzizi (bandari 3000)
- **Quiz App**: Endesha `npm run dev` katika saraka ya quiz-app
- **Miradi**: Tumia ugani wa VS Code Live Server kwa miradi ya HTML
- **Miradi ya API**: Endesha `npm start` katika saraka za API husika

## Maelekezo ya Kupima

### Kupima Quiz App

```bash
cd quiz-app
npm run lint       # Angalia kwa masuala ya mtindo wa msimbo
npm run build      # Thibitisha ujenzi unafanikiwa
```

### Kupima Bank API

```bash
cd 7-bank-project/api
npm run lint       # Angalia masuala ya mtindo wa msimbo
node server.js     # Hakiki kuwa seva inaanza bila makosa
```

### Njia ya Kupima kwa Jumla

- Hii ni hifadhi ya elimu isiyo na mitihani kamili ya moja kwa moja
- Upimaji wa mikono unazingatia:
  - Mifano ya msimbo inakimbia bila makosa
  - Viungo katika nyaraka vinafanya kazi vizuri
  - Ujenzi wa miradi unakamilika kwa mafanikio
  - Mifano inafuata mbinu bora

### Ukaguzi Kabla ya Kuwasilisha

- Endesha `npm run lint` katika saraka zilizo na package.json
- Thibitisha viungo vya markdown ni halali
- Jaribu mifano ya msimbo kwenye kivinjari au Node.js
- Angalia tafsiri zinadumisha muundo sahihi

## Miongozo ya Mtindo wa Msimbo

### JavaScript

- Tumia sintaksia ya kisasa ya ES6+
- Fuata usanidi wa ESLint uliotolewa kwenye miradi
- Tumia majina ya maana kwa vigezo na kazi kwa uwazi wa elimu
- Ongeza maelezo kwa kuelezea dhana kwa wanafunzi
- Panga kwa kutumia Prettier pale panapotolewa usanidi

### HTML/CSS

- Vipengele vya semantic vya HTML5
- Kanuni za usanifu wa majibu (responsive)
- Magodoro wazi ya majina ya darasa
- Maelezo yanayoelezea mbinu za CSS kwa wanafunzi

### Python

- Miongozo ya mtindo wa PEP 8
- Mifano ya msimbo wazi na ya kielimu
- Vidokezo vya aina pale panaposaidia kujifunza

### Nyaraka za Markdown

- Mlengo wazi wa vichwa vya habari
- Vizuizi vya msimbo vyenye utoaji lugha
- Viungo vya rasilimali za ziada
- Picha na skrini katika saraka za `images/`
- Maandishi mbadala kwa picha kwa ufikiaji

### Mpangilio wa Faili

- Masomo nambari mfululizo (1-getting-started-lessons, 2-js-basics, n.k.)
- Kila mradi una saraka za `solution/` na mara nyingi `start/` au `your-work/`
- Picha zinazohifadhiwa katika saraka za `images/` za somo husika
- Tafsiri katika muundo `translations/{language-code}/`

## Ujenzi na Utoaji

### Utoaji wa Quiz App (Azure Static Web Apps)

Quiz-app imewekwa kwa ajili ya utoaji wa Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Inaunda folda ya dist/
# Inapelekwa kupitia mtiririko wa kazi wa GitHub Actions wakati wa kusukuma kwenye main
```

Usanidi wa Azure Static Web Apps:
- **Mahali pa App**: `/quiz-app`
- **Mahali pa Matokeo**: `dist`
- **Mtiririko wa Kazi**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Uundaji wa PDF wa Nyaraka

```bash
npm install                    # Sakinisha docsify-to-pdf
npm run convert               # Tengeneza PDF kutoka kwa docs
```

### Nyaraka za Docsify

```bash
npm install -g docsify-cli    # Sakinisha Docsify kwa kiwango cha kimataifa
docsify serve                 # Hudumia kwenye localhost:3000
```

### Ujenzi wa Miradi Maalum

Kila saraka ya mradi inaweza kuwa na mchakato wake wa ujenzi:
- Miradi ya Vue: `npm run build` hutengeneza vifurushi vya uzalishaji
- Miradi isiyo na mabadiliko: Hakuna hatua ya kujenga, hudumisha faili moja kwa moja

## Miongozo ya Ombi la Pull

### Muundo wa Kichwa

Tumia vichwa vya wazi, vinaelezea eneo la mabadiliko:
- `[Quiz-app] Ongeza mtihani mpya wa somo X`
- `[Lesson-3] Rekebisha makosa ya kuandika katika mradi wa terrarium`
- `[Translation] Ongeza tafsiri ya Kihispania kwa somo 5`
- `[Docs] Sasisha maelekezo ya usanidi`

### Ukaguzi Unaotakiwa

Kabla ya kuwasilisha PR:

1. **Ubora wa Msimbo**:
   - Endesha `npm run lint` katika saraka za miradi zilizoathirika
   - Rekebisha makosa na onyo zote za lint

2. **Uhakiki wa Ujenzi**:
   - Endesha `npm run build` ikiwa inahitajika
   - Hakikisha hakuna makosa ya ujenzi

3. **Uthibitisho wa Viungo**:
   - Jaribu viungo vyote vya markdown
   - Thibitisha rejea za picha zinafanya kazi

4. **Ukaguzi wa Maudhui**:
   - Soma kwa uangalifu kwa makosa ya tahajia na sarufi
   - Hakikisha mifano ya msimbo ni sahihi na ya kielimu
   - Thibitisha tafsiri zinahifadhi maana asili

### Mahitaji ya Mchango

- Kubali Microsoft CLA (ukaguzi wa moja kwa moja kwenye PR ya kwanza)
- Fuata [Kanuni za Maadili za Chanzo Huria za Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Angalia [CONTRIBUTING.md](./CONTRIBUTING.md) kwa miongozo ya kina
- Rejea nambari za masuala katika maelezo ya PR ikiwa zinahitajika

### Mchakato wa Ukaguzi

- PR zinakaguliwa na waendelezaji na jamii
- Uwazo wa elimu unazingatiwa kwa upendeleo
- Mifano ya msimbo ifuate mbinu bora za sasa
- Tafsiri zinakaguliwa kwa usahihi na muafaka wa kitamaduni

## Mfumo wa Tafsiri

### Tafsiri ya Moja kwa Moja

- Inatumia GitHub Actions na mtiririko wa co-op-translator
- Inatafsiri kwa lugha 50+ kiotomatiki
- Faili za chanzo ziko kwenye saraka kuu
- Faili zilizotafsiriwa ziko `translations/{language-code}/`

### Kuongeza Maboresho ya Tafsiri ya Mikono

1. Tafuta faili katika `translations/{language-code}/`
2. Fanya maboresho huku ukidumisha muundo
3. Hakikisha mifano ya msimbo inabaki kufanya kazi
4. Jaribu maudhui ya mtihani ya mahali pale

### Metadata ya Tafsiri

Faili zilizotafsiriwa zina kichwa cha metadata:
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

## Ufafanuzi na Utatuzi wa Tatizo

### Masuala ya Kawaida

**Quiz app haiwezi kuanzishwa**:
- Angalia toleo la Node.js (v14+ linapendekezwa)
- Futa `node_modules` na `package-lock.json`, endesha tena `npm install`
- Angalia mzozo wa bandari (kawaida: Vite hutumia 5173)

**Seva ya API haianzi**:
- Hakiki toleo la Node.js linakidhi chini (node >=10)
- Angalia kama bandari tayari inatumika
- Hakikisha utegemezi wote umewekwa na `npm install`

**Kiendelezi cha kivinjari hakipaki**:
- Hakiki kuwa manifest.json imeandikwa vizuri
- Angalia konsole ya kivinjari kwa makosa
- Fuata maelekezo ya ufungaji ya kiendelezi maalum kwa kivinjari

**Masuala ya mradi wa mazungumzo wa Python**:
- Hakikisha kifurushi cha OpenAI kimesakinishwa: `pip install openai`
- Hakiki kuwa GITHUB_TOKEN iko katika mazingira
- Hakiki ruhusa za GitHub Models

**Docsify haipeani nyaraka**:
- Sakinisha docsify-cli kimataifa: `npm install -g docsify-cli`
- Endesha kutoka saraka kuu ya hifadhi
- Hakiki `docs/_sidebar.md` ipo

### Vidokezo vya Mazingira ya Maendeleo

- Tumia VS Code na ugani wa Live Server kwa miradi ya HTML
- Sakinisha ugani wa ESLint na Prettier kwa ulinganifu wa mtindo
- Tumia zana za msanidi wa kivinjari kwa utatuzi wa JavaScript
- Kwa miradi ya Vue, sakinisha ugani wa Vue DevTools kwa kivinjari

### Masuala ya Utendaji

- Idadi kubwa ya faili za tafsiri (lugha 50+) inafanya nakala kamili kukubwa
- Tumia nakala ya mfinyanzi ikiwa unafanya kazi tu na maudhui: `git clone --depth 1`
- Tenga tafsiri katika utafutaji unapoendelea na maudhui ya Kiingereza
- Michakato ya ujenzi inaweza kuwa polepole kwa mzunguko wa kwanza (`npm install`, Vite build)

## Masuala ya Usalama

### Mabadiliko ya Mazingira

- Funguo za API hazipaswi kuwekwa kwenye hifadhi
- Tumia faili za `.env` (zimedumuwa katika `.gitignore`)
- Andika mabadiliko ya mazingira yanayohitajika katika README za miradi

### Miradi ya Python

- Tumia mazingira ya virtual: `python -m venv venv`
- Dumuza utegemezi kwa toleo jipya
- Tokeni za GitHub ziwe na ruhusa ndogo zinazohitajika

### Upatikanaji wa GitHub Models

- Tokeni za Utafutaji wa Kibinafsi (PAT) zinahitajika kwa GitHub Models
- Tokeni zipangwe kama mabadiliko ya mazingira
- Kamwe usiweke tokeni au taarifa za siri kwenye hifadhi

## Vidokezo Zaidi

### Walengwa

- Wanaoanza kabisa katika maendeleo ya wavuti
- Wanafunzi na waajiri binafsi
- Walimu wanaotumia mtaala darasani
- Maudhui yameundwa kwa upatikanaji na ujenzi wa ujuzi hatua kwa hatua

### Falsafa ya Elimu

- Mbinu ya kujifunza kwa miradi
- Kupimwa mara kwa mara (vikwazo)
- Mazoezi ya kuandika msimbo kwa vitendo
- Mifano ya matumizi halisi
- Mtazamo wa misingi kabla ya mifumo ya kazi

### Utunzaji wa Hifadhi

- Jamii yenye uhai ya wanafunzi na wachangiaji
- Sasisho la mara kwa mara la utegemezi na maudhui
- Masuala na mijadala inaangaliwa na waendelezaji
- Sasisho la tafsiri hutekelezwa moja kwa moja kupitia GitHub Actions

### Rasilimali Zinazohusiana

- [Moduli za Microsoft Learn](https://docs.microsoft.com/learn/)
- [Rasilimali za Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inapendekezwa kwa wanafunzi
- Kozi za ziada: AI ya kuzalisha, Sayansi ya Data, ML, mtaala wa IoT unapatikana

### Kufanya Kazi na Miradi Maalumu

Kwa maelekezo ya kina kuhusu miradi, rejea faili za README katika:
- `quiz-app/README.md` - Programu ya quiz ya Vue 3
- `7-bank-project/README.md` - Programu ya benki yenye uthibitishaji
- `5-browser-extension/README.md` - Maendeleo ya kiendelezi cha kivinjari
- `6-space-game/README.md` - Maendeleo ya mchezo wa Canvas
- `9-chat-project/README.md` - Mradi wa msaidizi wa mazungumzo wa AI

### Muundo wa Monorepo

Ingawa sio monorepo ya kawaida, hifadhi hii ina miradi mingi huru:
- Kila somo ni huru
- Miradi haishiriki utegemezi
- Fanya kazi kwenye miradi binafsi bila kuathiri mingine
- Nakili hifadhi yote kwa uzoefu kamili wa mtaala

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Kiatli**:
Nyaraka hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au upungufu wa usahihi. Nyaraka ya asili katika lugha yake ya asili inapaswa kuchukuliwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu inayofanywa na watu inashauriwa. Hatubebwi wajibu kwa kutoelewana au tafsiri potofu zinazotokana na matumizi ya tafsiri hii.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->