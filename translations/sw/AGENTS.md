# AGENTS.md

## Muhtasari wa Mradi

Huu ni hifadhidata ya mtaala wa kielimu kwa kufundisha misingi ya maendeleo ya wavuti kwa wanaoanza. Mtaala ni kozi kamili ya wiki 12 iliyotengenezwa na Microsoft Cloud Advocates, inayojumuisha masomo 24 ya vitendo yanayochukua JavaScript, CSS, na HTML.

### Vipengele Muhimu

- **Maudhui ya Kielimu**: Masomo 24 yaliyoandaliwa kwa mfululizo katika moduli za miradi
- **Miradi ya Vitendo**: Terrarium, Mchezo wa Kuandika, Kiongezeo cha Kivinjari, Mchezo wa Anga, Programu ya Benki, Mhariri wa Msimbo, na Msaidizi wa AI wa Mazungumzo
- **Mtihani wa Kuelewa**: Mitihani 48 yenye maswali 3 kila moja (kipimo kabla/baada ya somo)
- **Msaada wa Lugha Nyingi**: Tafsiri za kiotomatiki kwa lugha zaidi ya 50 kupitia GitHub Actions
- **Teknolojia**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (kwa miradi ya AI)

### Mifumo ya Ujenzi

- Hifadhidata ya kielimu yenye muundo wa masomo
- Kila saraka ya somo ina README, mifano ya msimbo, na suluhisho
- Miradi huru katika saraka tofauti (quiz-app, miradi mbalimbali ya somo)
- Mfumo wa tafsiri unaotumia GitHub Actions (co-op-translator)
- Nyaraka zinatolewa kwa kupitia Docsify na zinapatikana kama PDF

## Amri za Kuanzisha

Hifadhidata hii ni kwa matumizi hasa ya maudhui ya kielimu. Kwa kufanya kazi na miradi maalum:

### Usanidi wa Hifadhidata Kuu

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Usanidi wa Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Anza seva ya maendeleo
npm run build      # Jenga kwa ajili ya uzalishaji
npm run lint       # Endesha ESLint
```

### API ya Mradi wa Benki (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Anzisha seva ya API
npm run lint       # Endesha ESLint
npm run format     # Fomati kwa Prettier
```

### Miradi ya Kiongezeo cha Kivinjari

```bash
cd 5-browser-extension/solution
npm install
# Fuata maelekezo maalum ya pili ya upakiaji ya kivinjari
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

## Mchakato wa Maendeleo

### Kwa Watoa Maudhui

1. **Fungua hifadhidata** kwa akaunti yako ya GitHub
2. **Dondoa nakala ya hifadhidata** mahali pako pa kazi
3. **Tengeneza tawi jipya** kwa mabadiliko yako
4. Fanya mabadiliko kwenye maudhui ya somo au mifano ya msimbo
5. Jaribu mabadiliko ya msimbo katika saraka za miradi husika
6. Wasilisha maombi ya Pull Requests kufuatilia miongozo ya michango

### Kwa Wanafunzi

1. Fanya fork au clone hifadhidata
2. Tembelea saraka za masomo mfululizo
3. Soma mafaili ya README kwa kila somo
4. Kamilisha mtihani wa kuelewa kabla ya somo kwenye https://ff-quizzes.netlify.app/web/
5. Fanya kazi kupitia mifano ya msimbo katika saraka za somo
6. Kamilisha mazoezi na changamoto
7. Chukua mitihani ya kuelewa baada ya somo

### Maendeleo Moja kwa Moja

- **Nyaraka**: Endesha `docsify serve` kwenye mzizi (bandari 3000)
- **Quiz App**: Endesha `npm run dev` katika saraka ya quiz-app
- **Miradi**: Tumia kiendelezi cha VS Code Live Server kwa miradi ya HTML
- **Miradi ya API**: Endesha `npm start` katika saraka husika za API

## Maelekezo ya Kupima

### Kupima Quiz App

```bash
cd quiz-app
npm run lint       # Angalia kwa masuala ya mtindo wa msimbo
npm run build      # Thibitisha ujenzi unafanikiwa
```

### Kupima API ya Benki

```bash
cd 7-bank-project/api
npm run lint       # Kagua kwa matatizo ya mtindo wa msimbo
node server.js     # Hakikisha seva inaanza bila makosa
```

### Mbinu za Kupima kwa Jumla

- Hii ni hifadhidata ya kielimu bila vipimo vya kiotomatiki kamilifu
- Kupima kwa mkono kunazingatia:
  - Mifano ya msimbo inafanya kazi bila makosa
  - Viungo katika nyaraka vinatumika kikamilifu
  - Ujenzi wa miradi unakamilika kwa mafanikio
  - Mifano inafuata mbinu bora

### Ukaguzi Kabla ya Kuwasilisha

- Endesha `npm run lint` katika saraka zenye package.json
- Hakiki viungo vya markdown kama vinavyofaa
- Jaribu mifano ya msimbo katika kivinjari au Node.js
- Hakikisha tafsiri zinaifuata muundo mzuri

## Miongozo ya Mtindo wa Msimbo

### JavaScript

- Tumia sarufi za kisasa za ES6+
- Fuata usanidi wa ESLint uliotolewa katika miradi
- Tumia majina ya maana kwa mabadiliko na kazi kwa ufafanuzi wa kielimu
- Ongeza maelezo kuelezea dhana kwa wanafunzi
- Panga kwa kutumia Prettier pale panapowezekana

### HTML/CSS

- Vipengele vya maana vya HTML5
- Kanuni za muundo unaobadilika katika skrini tofauti
- Mipangilio wazi ya majina ya madarasa
- Maelezo kuelezea mbinu za CSS kwa wanafunzi

### Python

- Miongozo ya mtindo wa PEP 8
- Mifano ya msimbo iliyo wazi na ya kielimu
- Dalili za aina inapofaa kwa ajili ya kujifunza

### Nyaraka za Markdown

- Hieraki wazi ya vichwa
- Vizuizi vya msimbo vyenye lugha ya kuainisha
- Viungo vya rasilimali za ziada
- Picha na picha ndogo katika saraka za `images/`
- Maandishi ya alt kwa picha kwa ajili ya ufikiaji rahisi

### Usanidi wa Faili

- Masomo nambari mfululizo (1-getting-started-lessons, 2-js-basics, nk.)
- Kila mradi una saraka za `solution/` na mara nyingi `start/` au `your-work/`
- Picha huhifadhiwa katika saraka za `images/` za masomo binafsi
- Tafsiri zinaweza kupatikana katika muundo wa `translations/{language-code}/`

## Ujenzi na Uenezaji

### Uenezaji wa Quiz App (Azure Static Web Apps)

quiz-app imewekwa kwa ajili ya uenezaji wa Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Inaunda folda ya dist/
# Inaweka kupitia workflow ya GitHub Actions wakati wa kushinikiza kwenye main
```

Usanidi wa Azure Static Web Apps:
- **Mahali pa App**: `/quiz-app`
- **Mahali pa matokeo**: `dist`
- **Mchakato**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Uundaji wa PDF wa Nyaraka

```bash
npm install                    # Sakinisha docsify-to-pdf
npm run convert               # Tengeneza PDF kutoka kwa docs
```

### Nyaraka za Docsify

```bash
npm install -g docsify-cli    # Sakinisha Docsify kimataifa
docsify serve                 # Tumikia kwenye localhost:3000
```

### Ujenzi wa Miradi Maalum

Kila saraka ya mradi inaweza kuwa na mchakato wake wa ujenzi:
- Miradi ya Vue: `npm run build` hutengeneza vifurushi vya uzalishaji
- Miradi ya Static: Hakuna hatua ya ujenzi, hudumu faili moja kwa moja

## Miongozo ya Maombi ya Pull

### Muundo wa Kichwa

Tumia vichwa wazi, vinavyoelezea eneo la mabadiliko:
- `[Quiz-app]ongeza mtihani mpya wa somo X`
- `[Lesson-3]rekebisha makosa ya herufi katika mradi wa terrarium`
- `[Translation]ongeza tafsiri ya Kihispania kwa somo 5`
- `[Docs]sasisha maelekezo ya usanidi`

### Ukaguzi Unaohitajika

Kabla ya kuwasilisha PR:

1. **Ubora wa Msimbo**:
   - Endesha `npm run lint` katika saraka za miradi zilizoathirika
   - Rekebisha makosa na onyo zote za lint

2. **Uhakiki wa Ujenzi**:
   - Endesha `npm run build` ikiwa inafaa
   - Hakikisha hakuna makosa ya ujenzi

3. **Uhakiki wa Viungo**:
   - Jaribu viungo vyote vya markdown
   - Hakiki marejeleo ya picha yanafanya kazi

4. **Ukaguzi wa Maudhui**:
   - Soma kwa makini kwa makosa ya sarufi na tahajia
   - Hakikisha mifano ya msimbo ni sahihi na ya kielimu
   - Hakiki tafsiri zinahifadhi maana asilia

### Mahitaji ya Michango

- Kubali CLA ya Microsoft (ukaguzi wa moja kwa moja kwenye PR ya kwanza)
- Fuata Kanuni ya Maadili ya Chanzo Huria ya Microsoft [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tazama [CONTRIBUTING.md](./CONTRIBUTING.md) kwa miongozo ya kina
- Taja nambari za masuala katika maelezo ya PR ikiwa inahitajika

### Mchakato wa Ukaguzi

- PR hupitiwa na watunza na jamii
- Ufafanuzi wa kielimu unazingatiwa kipaumbele
- Mifano ya msimbo inapaswa kufuata mbinu bora za sasa
- Tafsiri hupitiwa kwa usahihi na uangalifu wa kitamaduni

## Mfumo wa Tafsiri

### Tafsiri za Kiotomatiki

- Inatumia GitHub Actions na mchakato wa co-op-translator
- Hutatfsiri kwa lugha zaidi ya 50 kiotomatiki
- Faili za chanzo ziko katika saraka kuu
- Faili za tafsiri ziko katika saraka za `translations/{language-code}/`

### Kuongeza Maboresho ya Tafsiri za Mkono

1. Tafuta faili katika `translations/{language-code}/`
2. Fanya maboresho huku ukihifadhi muundo
3. Hakikisha mifano ya msimbo bado inafanya kazi
4. Jaribu maudhui ya mtihani yaliyotafsiriwa

### Metadata ya Tafsiri

Faili za tafsiri zina kichwa cha metadata:
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

## Ugunduzi na Utatuzi wa Matatizo

### Masuala ya Kawaida

**Programu ya Quiz haianzi**:
- Angalia toleo la Node.js (inapendekezwa v14+)
- Futa `node_modules` na `package-lock.json`, endesha tena `npm install`
- Angalia mkatano wa bandari (chaguo-msingi: Vite hutumia bandari 5173)

**Server ya API haianzi**:
- Hakiki toleo la Node.js linatosha (node >=10)
- Hakiki kama bandari tayari imetumika
- Hakikisha utegemezi wote umewekwa kwa `npm install`

**Kiongezeo cha kivinjari hakianzi**:
- Hakiki json ya manifest ni sahihi
- Angalia makosa kwenye console ya kivinjari
- Fuata maelekezo ya usakinishaji ya kiongezeo cha kivinjari

**Masuala ya mradi wa mazungumzo ya Python**:
- Hakikisha kifurushi cha OpenAI kimewekwa: `pip install openai`
- Hakiki maadili ya mazingira ya GITHUB_TOKEN yamewekwa
- Angalia ruhusa za kufikia GitHub Models

**Docsify hautumikii nyaraka**:
- Sakinisha docsify-cli kimataifa: `npm install -g docsify-cli`
- Endesha kutoka saraka kuu ya hifadhidata
- Hakiki kama `docs/_sidebar.md` ipo

### Vidokezo vya Mazingira ya Maendeleo

- Tumia VS Code na kiendelezi cha Live Server kwa miradi ya HTML
- Sakinisha kiendelezi cha ESLint na Prettier kwa mtindo thabiti
- Tumia DevTools za kivinjari kwa ugunduzi wa makosa ya JavaScript
- Kwa miradi ya Vue, sakinisha kiendelezi cha Vue DevTools kwa kivinjari

### Mambo ya Utendaji

- Idadi kubwa ya faili zilizotafsiriwa (lugha 50+) hufanya nakala kamili kuwa kubwa
- Tumia nakala ya kina kidogo ikiwa unafanya kazi pekee na maudhui: `git clone --depth 1`
- Epuka tafutaji za tafsiri unaporatibu kazi kwa maudhui ya Kiingereza
- Mchakato wa ujenzi unaweza kuwa polepole mara ya kwanza (npm install, Vite build)

## Mambo ya Usalama

### Vigezo vya Mazingira

- Mofadhi za API hazipaswi kuwekwa hifadhidanini
- Tumia faili za `.env` (ziko katika `.gitignore`)
- Andika vigezo vya mazingira vinavyohitajika katika README za miradi

### Miradi ya Python

- Tumia mazingira ya kipengele: `python -m venv venv`
- Endelea kusasisha utegemezi
- Vidhibiti vya GitHub vinapaswa kuwa na ruhusa ndogo zinazohitajika

### Ufikiaji wa GitHub Models

- Vidhibiti vya Ufikiaji wa Binafsi (PAT) vinahitajika kwa GitHub Models
- Vidhibiti vinapaswa kuhifadhiwa kama vigezo vya mazingira
- Kamwe usiweka vidhibiti au nyaraka za siri kwenye hifadhidata

## Vidokezo Ziada

### Watu Wanaolengwa

- Wanaoanza kabisa katika maendeleo ya wavuti
- Wanafunzi na wanaojifunza pekee
- Walimu wanaotumia mtaala huyu kwenye madarasa
- Maudhui yameundwa kwa ufikiaji rahisi na kujenga ujuzi kwa hatua

### Falsafa ya Elimu

- Mbinu za kujifunza kupitia mradi
- Ukaguzi wa mara kwa mara wa maarifa (mitihani)
- Mazoezi ya coding ya vitendo
- Mifano ya matumizi halisi duniani
- Kipaumbele katika misingi kabla ya mifumo ya kielekezi

### Matengenezo ya Hifadhidata

- Jamii hai ya wanafunzi na wachangiaji
- Sasisho za mara kwa mara kwa utegemezi na maudhui
- Masuala na majadiliano huangaliwa na watunza
- Sasisho za tafsiri kiotomatiki kupitia GitHub Actions

### Rasilimali Zinazohusiana

- [Moduli za Microsoft Learn](https://docs.microsoft.com/learn/)
- [Rasilimali za Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inashauriwa kwa wanafunzi
- Kozi za ziada: AI ya kuzalisha, Sayansi ya Data, ML, IoT zinazopatikana

### Kufanya Kazi na Miradi Maalum

Kwa maagizo ya kina juu ya miradi binafsi, rejelea mafaili ya README katika:
- `quiz-app/README.md` - Programu ya quiz ya Vue 3
- `7-bank-project/README.md` - Programu ya benki yenye uthibitishaji
- `5-browser-extension/README.md` - Maendeleo ya kiongezeo cha kivinjari
- `6-space-game/README.md` - Maendeleo ya mchezo wa canvas
- `9-chat-project/README.md` - Mradi wa msaidizi wa mazungumzo wa AI

### Muundo wa Monorepo

Ingawa si monorepo ya kawaida, hifadhidata hii ina miradi huru mingi:
- Kila somo lina utaratibu wake binafsi
- Miradi haigawani utegemezi
- Fanya kazi kwenye miradi binafsi bila kuathiri mingine
- Dondoa hifadhidata yote kwa uzoefu kamili wa mtaala

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Kumbusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Wakati tunajitahidi kwa usahihi, tafadhali fahamu kwamba tafsiri za kiotomatiki zinaweza kuwa na makosa au kasoro. Hati ya asili katika lugha yake ya asili inapaswa kuchukuliwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatubebei dhamana kwa kutokuelewana au tafsiri potofu zinazotokana na matumizi ya tafsiri hii.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->