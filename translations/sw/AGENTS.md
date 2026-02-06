# AGENTS.md

## Muhtasari wa Mradi

Hii ni hazina ya mtaala wa elimu kwa kufundisha misingi ya maendeleo ya wavuti kwa wanaoanza. Mtaala huu ni kozi kamili ya wiki 12 iliyotengenezwa na Microsoft Cloud Advocates, ikijumuisha masomo 24 ya vitendo yanayohusu JavaScript, CSS, na HTML.

### Vipengele Muhimu

- **Maudhui ya Elimu**: Masomo 24 yaliyopangwa katika moduli za mradi
- **Miradi ya Vitendo**: Terrarium, Mchezo wa Kuandika, Ongezaji la Kivinjari, Mchezo wa Anga, Programu ya Benki, Mhariri wa Msimbo, na Msaidizi wa Mazungumzo ya AI
- **Maswali ya Kuchunguza**: Maswali 48 yenye maswali 3 kila moja (tathmini kabla/baada ya somo)
- **Msaada wa Lugha Nyingi**: Tafsiri za moja kwa moja kwa lugha 50+ kupitia GitHub Actions
- **Teknolojia**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (kwa miradi ya AI)

### Muundo

- Hazina ya elimu yenye muundo wa masomo
- Kila folda ya somo ina README, mifano ya msimbo, na suluhisho
- Miradi huru katika saraka tofauti (quiz-app, miradi mbalimbali ya somo)
- Mfumo wa utafsiri unatumia GitHub Actions (co-op-translator)
- Nyaraka zinatolewa kupitia Docsify na zinapatikana kama PDF

## Amri za Usanidi

Hazina hii ni kwa matumizi ya maudhui ya elimu hasa. Kwa kufanya kazi na miradi maalum:

### Usanidi Mkuu wa Hazina

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Usanidi wa Programu ya Maswali (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Anzisha seva ya maendeleo
npm run build      # Tengeneza kwa ajili ya uzalishaji
npm run lint       # Endesha ESLint
```

### API ya Mradi wa Benki (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Anza seva ya API
npm run lint       # Endesha ESLint
npm run format     # Fomati kwa Prettier
```

### Miradi ya Ongezaji la Kivinjari

```bash
cd 5-browser-extension/solution
npm install
# Fuata maagizo ya kupakia nyongeza maalum za kivinjari
```

### Miradi ya Mchezo wa Anga

```bash
cd 6-space-game/solution
npm install
# Fungua index.html katika kivinjari au tumia Seva ya Moja kwa Moja
```

### Mradi wa Mazungumzo (Python Sehemu ya Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Weka kigezo cha mazingira cha GITHUB_TOKEN
python api.py
```

## Mchakato wa Maendeleo

### Kwa Wasaidizi wa Maudhui

1. **Fokea hazina** kwenye akaunti yako ya GitHub
2. **Nakili fokea yako** ndani ya kompyuta
3. **Tengeneza tawi jipya** kwa mabadiliko yako
4. Fanya mabadiliko kwa maudhui ya somo au mifano ya msimbo
5. Jaribu mabadiliko yoyote ya msimbo katika saraka husika za miradi
6. Tuma maombi ya kuunganisha kufuata miongozo ya mchango

### Kwa Wanafunzi

1. Fokea au nakili hazina
2. Pitia saraka za masomo moja baada ya nyingine
3. Soma faili za README kwa kila somo
4. Kamilisha maswali kabla ya somo kwenye https://ff-quizzes.netlify.app/web/
5. Fanya kazi kupitia mifano ya msimbo katika folda za somo
6. Kamilisha kazi na changamoto
7. Fanya maswali baada ya somo

### Maendeleo Moja kwa Moja

- **Nyaraka**: Endesha `docsify serve` kwenye mzizi (bandari 3000)
- **Programu ya Maswali**: Endesha `npm run dev` kwenye saraka ya quiz-app
- **Miradi**: Tumia ugani wa VS Code Live Server kwa miradi ya HTML
- **Miradi ya API**: Endesha `npm start` kwenye saraka husika za API

## Maelekezo ya Upimaji

### Upimaji wa Programu ya Maswali

```bash
cd quiz-app
npm run lint       # Angalia kwa masuala ya mtindo wa msimbo
npm run build      # Thibitisha kuwa ujenzi unafaulu
```

### Upimaji wa API ya Benki

```bash
cd 7-bank-project/api
npm run lint       # Angalia masuala ya mtindo wa msimbo
node server.js     # Thibitisha server inaanza bila makosa
```

### Mbinu ya Upimaji kwa Ujumla

- Hii ni hazina ya elimu isiyo na majaribio ya kiotomatiki kamili
- Upimaji wa mikono unazingatia:
  - Mifano ya msimbo inaendeshwa bila makosa
  - Viungo katika nyaraka vinafanya kazi ipasavyo
  - Ujenzi wa mradi hufanikiwa vizuri
  - Mifano inafuata mbinu bora

### Ukaguzi Kabla ya Kuwasilisha

- Endesha `npm run lint` katika saraka zilizo na package.json
- Hakiki viungo vya markdown ni halali
- Jaribu mifano ya msimbo kwenye kivinjari au Node.js
- Hakiki kuwa tafsiri zinatunza muundo sahihi

## Miongozo ya Mtindo wa Msimbo

### JavaScript

- Tumia sintaksia ya kisasa ES6+
- Fuata usanidi wa ESLint uliotolewa katika miradi
- Tumia majina ya maana kwa toleo na kazi kwa uwazi wa elimu
- Ongeza maelezo ya kufafanua dhana kwa wanafunzi
- Tunga msimbo kwa kutumia Prettier pale inapobidi

### HTML/CSS

- Vipengele vya HTML5 vya kihisia
- Kanuni za muundo unaojibadilisha
- Vigezo vya wazi vya majina ya darasa
- Maelezo ya njia za CSS kwa walimu na wanafunzi

### Python

- Miongozo ya mtindo wa PEP 8
- Mifano ya msimbo wazi na ya kielimu
- Mawazo ya aina mahali panaposaidia kujifunza

### Nyaraka za Markdown

- Mpangilio wazi wa vichwa vya habari
- Bloksi za msimbo zenye lugha iliyoelezwa
- Viungo kwa rasilimali za ziada
- Picha na skrini katika saraka `images/`
- Matini za alt kwa picha kwa upatikanaji

### Muundo wa Faili

- Masomo yamepangwa nambari kwa mfuatano (1-getting-started-lessons, 2-js-basics, nk.)
- Kila mradi una saraka za `solution/` na mara nyingi `start/` au `your-work/`
- Picha zimetunzwa katika folda maalum za `images/` kwa somo
- Tafsiri ziko katika muundo wa `translations/{language-code}/`

## Ujenzi na Uenezaji

### Uenezaji wa Programu ya Maswali (Azure Static Web Apps)

Programu ya maswali imepangwa kwa ajili ya uenezaji wa Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Inaunda folda ya dist/
# Inaweka kupitia mtiririko wa kazi wa GitHub Actions wakati wa kusukuma kwenye main
```

Mpangilio wa Azure Static Web Apps:
- **Mahali pa programu**: `/quiz-app`
- **Mahali pa matokeo**: `dist`
- **Mchakato wa kazi**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Uundaji wa PDF za Nyaraka

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
- Miradi ya Vue: `npm run build` huvuta vifurushi kwa uzalishaji
- Miradi ya hatua zisizobadilika: Hakuna hatua ya ujenzi, hudumisha faili moja kwa moja

## Miongozo ya Maombi ya Kuunganisha

### Mtindo wa Kichwa

Tumia vichwa wazi na vinavyoeleza eneo la mabadiliko:
- `[Quiz-app] Ongeza swali jipya kwa somo X`
- `[Lesson-3] Rekebisha makosa ya tahajia katika mradi wa terrarium`
- `[Translation] Ongeza tafsiri ya Kihispania kwa somo 5`
- `[Docs] Sasisha maelekezo ya usanidi`

### Ukaguzi Inayohitajika

Kabla ya kuwasilisha PR:

1. **Ubora wa Msimbo**:
   - Endesha `npm run lint` katika saraka zilizoathirika
   - Rekebisha makosa na onyo zote za lint

2. **Uhakiki wa Ujenzi**:
   - Endesha `npm run build` kama inahitajika
   - Hakikisha hakuna makosa ya ujenzi

3. **Uhakiki wa Viungo**:
   - Jaribu viungo vyote vya markdown
   - Hakiki rejea za picha zinafanya kazi

4. **Mapitio ya Maudhui**:
   - Soma kwa makini tahajia na sarufi
   - Hakikisha mifano ya msimbo ni sahihi na ya kielimu
   - Hakiki tafsiri zinatunza maana asili

### Mahitaji ya Mchango

- Kubali Microsoft CLA (ukaguzi wa moja kwa moja kwenye PR ya kwanza)
- Fuata [Kanuni ya Maadili ya Chanzo Huria ya Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Soma [CONTRIBUTING.md](./CONTRIBUTING.md) kwa miongozo ya kina
- Taja namba za masuala katika maelezo ya PR inapowezekana

### Mchakato wa Ukaguzi

- PR hupitiwa na wasimamizi na jamii
- Uwazi wa elimu unazingatiwa zaidi
- Mifano ya msimbo inapaswa kufuata mbinu bora za sasa
- Tafsiri hupitiwa kwa usahihi na utofauti wa kitamaduni

## Mfumo wa Utafsiri

### Utafsiri wa Moja kwa Moja

- Inatumia GitHub Actions kwa mtiririko wa co-op-translator
- Hutatiliza tafsiri kwa lugha 50+ moja kwa moja
- Faili za chanzo ziko katika saraka kuu
- Faili za tafsiri ziko katika saraka za `translations/{language-code}/`

### Kuongeza Maboresho ya Utafsiri kwa Mkono

1. Pata faili ndani ya `translations/{language-code}/`
2. Fanya maboresho huku ukidumisha muundo
3. Hakikisha mifano ya msimbo bado inafanya kazi
4. Jaribu maudhui yaliyotafsiriwa ya maswali yoyote

### Metadata ya Utafsiri

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

## Utatuzi na Urekebishaji

### Masuala Yanayojitokeza Mara kwa Mara

**Programu ya maswali haianzi**:
- Kagua toleo la Node.js (v14+ inapendekezwa)
- Futa `node_modules` na `package-lock.json`, endesha `npm install` tena
- Angalia migongano ya bandari (kawaida: Vite hutumia bandari 5173)

**Seva ya API haianzi**:
- Thibitisha toleo la Node.js linakidhi (node >=10)
- Angalia kama bandari tayari inatumika
- Hakikisha viongezi vyote vimewekwa kwa `npm install`

**Ongezaji la kivinjari halipatiki**:
- Hakiki kuwa manifest.json imeandikwa ipasavyo
- Angalia makosa kwenye console ya kivinjari
- Fuata maelekezo ya usakinishaji wa ongezaji kwa kivinjari husika

**Masuala ya mradi wa mazungumzo wa Python**:
- Hakikisha kifurushi cha OpenAI kimewekwa: `pip install openai`
- Hakiki kuwa GITHUB_TOKEN imewekwa katika mazingira
- Angalia ruhusa za GitHub Models

**Docsify haionyeshi nyaraka**:
- Sakinisha docsify-cli duniani kote: `npm install -g docsify-cli`
- Endesha kutoka na saraka kuu ya hazina
- Hakiki kuwa `docs/_sidebar.md` ipo

### Vidokezo vya Mazingira ya Maendeleo

- Tumia VS Code na ugani wa Live Server kwa miradi ya HTML
- Sakinisha ugani wa ESLint na Prettier kwa muundo thabiti
- Tumia DevTools za kivinjari kwa kurekebisha JavaScript
- Kwa miradi ya Vue, sakinisha ugani wa Vue DevTools kwa kivinjari

### Mambo ya Kuzingatia Kuhusu Utendaji

- Idadi kubwa ya faili za tafsiri (lugha 50+) huleta nakala kubwa
- Tumia nakala finyu ikiwa unafanya kazi tu na maudhui: `git clone --depth 1`
- Zuia tafsiri kutoka kwenye utafutaji unapoangalia maudhui ya Kiingereza
- Mchakato wa ujenzi unaweza kuwa polepole mwanzoni (npm install, ujenzi wa Vite)

## Mambo ya Usalama

### Mabadiliko ya Mazingira

- Funguo za API hazipaswi kuwekwa kwenye hazina
- Tumia faili za `.env` (ziko tayari `.gitignore`)
- Andika mabadiliko ya mazingira yanayohitajika katika README za miradi

### Miradi ya Python

- Tumia mazingira ya kubuni ya virtual: `python -m venv venv`
- Sasisha viongezi mara kwa mara
- Tokeni za GitHub zipate ruhusa ndogo tu zinazohitajika

### Kupata GitHub Models

- Tokeni za Kufikia Kibinafsi (PAT) zinahitajika kwa GitHub Models
- Tokeni ziwe kwenye mabadiliko ya mazingira
- Kamwe usiweka tokeni au nywila katika hazina

## Vidokezo Zaidi

### Walengwa

- Waanzilishi wa maendeleo ya wavuti
- Wanafunzi na kujifunza kwa kujitegemea
- Walimu wanaotumia mtaala darasani
- Maudhui yamebuniwa kwa upatikanaji na hatua za kujifunza polepole

### Falsafa ya Elimu

- Mbinu ya kujifunza kwa mradi
- Dharura za maarifa mara kwa mara (maswali)
- Mazoezi ya kufanyia kazi kwa mikono
- Mifano halisi ya matumizi
- Kuzingatia misingi kabla ya mfumo wa kazi

### Matunzo ya Hazina

- Jamii hai ya wanafunzi na wachangiaji
- Sasisho za mara kwa mara za viongezi na maudhui
- Masuala na majadiliano hupitiwa na wasimamizi
- Sasisho za tafsiri zinafanywa moja kwa moja kupitia GitHub Actions

### Rasilimali Zinazohusiana

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Student Hub resources](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inayopendekezwa kwa wanafunzi
- Kozi za ziada: AI ya Kizazi, Sayansi ya Data, ML, na mtaala wa IoT zinapatikana

### Kufanya Kazi na Miradi Maalum

Kwa maelekezo ya kina kuhusu miradi binafsi, rejea faili za README katika:
- `quiz-app/README.md` - Programu ya maswali ya Vue 3
- `7-bank-project/README.md` - Programu ya benki yenye uthibitishaji
- `5-browser-extension/README.md` - Maendeleo ya ongezaji la kivinjari
- `6-space-game/README.md` - Maendeleo ya mchezo wa Canvas
- `9-chat-project/README.md` - Mradi wa msaidizi wa mazungumzo wa AI

### Muundo wa Monorepo

Ingawa si monorepo ya kawaida, hazina hii ina miradi huru mbalimbali:
- Kila somo ni huru mwenyewe
- Miradi haiungiwi kwa viongezi vya kawaida
- Fanya kazi kwenye miradi binafsi bila kuathiri mingine
- Nakili hazina nzima kwa uzoefu kamili wa mtaala

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Angalizo**:
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi usahihi, tafadhali fahamu kwamba tafsiri za kiotomatiki zinaweza kuwa na makosa au upungufu wa usahihi. Hati ya asili kwa lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu na binadamu inapendekezwa. Hatubeba dhamana kwa maelewano au tafsiri potofu zinazotokana na matumizi ya tafsiri hii.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->