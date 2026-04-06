# AGENTS.md

## Muhtasari wa Mradi

Huu ni hifadhidata ya mtaala wa elimu kwa kufundisha misingi ya maendeleo ya wavuti kwa wanaoanza. Mtaala ni kozi kamili ya wiki 12 iliyotengenezwa na Microsoft Cloud Advocates, ikijumuisha masomo 24 ya vitendo kuhusu JavaScript, CSS, na HTML.

### Vipengele Muhimu

- **Maudhui ya Elimu**: Masomo 24 yaliyopangiliwa kwa muundo wa moduli zinazotegemea miradi
- **Miradi ya Vitendo**: Terrarium, Mchezo wa Uandikaji, Kiongezi cha Kivinjari, Mchezo wa Anga, App ya Benki, Mhariri wa Nambari, na Msaidizi wa Mazungumzo wa AI
- **Mitihani ya Kuingiliana**: Mitihani 48 yenye maswali 3 kila moja (mapema/kwa baada ya somo)
- **Usaidi wa Lugha Nyingi**: Tafsiri za moja kwa moja kwa lugha zaidi ya 50 kupitia GitHub Actions
- **Teknolojia**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (kwa miradi ya AI)

### Miundo

- Hifadhidata ya elimu yenye muundo wa somo kwa somo
- Kila folda ya somo ina README, mifano ya nambari, na suluhisho
- Miradi huru katika saraka tofauti (quiz-app, miradi mbalimbali ya somo)
- Mfumo wa tafsiri ukitumia GitHub Actions (co-op-translator)
- Nyaraka zinatolewa kupitia Docsify na zinapatikana kama PDF

## Amri za Usanidi

Hifadhidata hii ni hasa kwa matumizi ya maudhui ya kielimu. Kwa kufanya kazi na miradi maalum:

### Usanidi Mkuu wa Hifadhidata

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

### API ya Mradi wa Benki (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Anzisha seva ya API
npm run lint       # Endesha ESLint
npm run format     # Panga kwa kutumia Prettier
```

### Miradi ya Kiongezi cha Kivinjari

```bash
cd 5-browser-extension/solution
npm install
# Fuata maelekezo ya kupakia ugani kwa kivinjari maalum
```

### Miradi ya Mchezo wa Anga

```bash
cd 6-space-game/solution
npm install
# Fungua index.html katika kivinjari au tumia Live Server
```

### Mradi wa Mazungumzo (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Weka mazingira ya mabadiliko ya GITHUB_TOKEN
python api.py
```

## Mtiririko wa Maendeleo

### Kwa Wachangiaji wa Maudhui

1. **Fungua hifadhidata** kwenye akaunti yako ya GitHub
2. **Dondoa hifadhidata hii** mahali pako pa kazi
3. **Tengeneza tawi jipya** kwa mabadiliko yako
4. Fanya mabadiliko kwenye maudhui ya somo au mifano ya nambari
5. Jaribu mabadiliko ya nambari katika saraka za miradi husika
6. Tuma ombi la mvutano kwa kufuata miongozo ya mchango

### Kwa Wanafunzi

1. Fungua au dondoa hifadhidata
2. Pitia saraka za masomo kwa mpangilio
3. Soma mafaili ya README kwa kila somo
4. Maliza mitihani ya kabla ya somo kwenye https://ff-quizzes.netlify.app/web/
5. Fanya kazi kwa mfano wa nambari katika folda za somo
6. Maliza kazi na changamoto
7. Fanya mitihani ya baada ya somo

### Maendeleo Unaioishi

- **Nyaraka**: Endesha `docsify serve` katika saraka kuu (bandari 3000)
- **Quiz App**: Endesha `npm run dev` katika saraka ya quiz-app
- **Miradi**: Tumia ugani wa VS Code Live Server kwa miradi ya HTML
- **Miradi ya API**: Endesha `npm start` katika saraka husika za API

## Maelekezo ya Kupima

### Upimaji wa Quiz App

```bash
cd quiz-app
npm run lint       # Angalia matatizo ya mtindo wa msimbo
npm run build      # Thibitisha ujenzi unafanikiwa
```

### Upimaji wa Bank API

```bash
cd 7-bank-project/api
npm run lint       # Angalia masuala ya mtindo wa msimbo
node server.js     # Thibitisha seva inaanza bila makosa
```

### Mbinu ya Upimaji kwa Jumla

- Hii ni hifadhidata ya elimu isiyo na majaribio ya moja kwa moja ya kina
- Upimaji wa mikono unalenga:
  - Mifano ya nambari iaendeshwe bila makosa
  - Viungo katika nyaraka vifanye kazi kwa usahihi
  - Ujenzi wa mradi ukamilike kwa mafanikio
  - Mifano ifuatilie mbinu bora

### Ukaguzi wa Kabla ya Kuwasilisha

- Endesha `npm run lint` katika saraka zenye package.json
- Hakiki viungo vya markdown viko sahihi
- Jaribu mifano ya nambari kwenye kivinjari au Node.js
- Hakiki tafsiri zihakikishe muundo unahifadhiwa

## Miongozo ya Mtindo wa Msimbo

### JavaScript

- Tumia msimbo wa kisasa wa ES6+
- Fuata mipangilio ya ESLint inayotolewa katika miradi
- Tumia majina ya maana kwa vigezo na kazi kwa uwazi wa kielimu
- Ongeza maelezo kuelezea dhana kwa wanafunzi
- Tumia Prettier kwa uundaji ikiwa imewekwa

### HTML/CSS

- Vipengele vya semantic vya HTML5
- Misingi ya muundo wa kujibadilisha (responsive)
- Miundo ya majina ya darasa wazi
- Maelezo yanayoelezea mbinu za CSS kwa wanafunzi

### Python

- Miongozo ya mtindo wa PEP 8
- Mifano ya nambari wazi, ya kielimu
- Maelezo ya aina pale yanaposaidia kujifunza

### Nyaraka za Markdown

- Muundo wazi wa vichwa
- Vizuizi vya msimbo na maelezo ya lugha
- Viungo vya rasilimali za ziada
- Picha za skrini na picha katika saraka `images/`
- Maandishi ya alt kwa picha kwa upatikanaji

### Mpangilio wa Faili

- Masomo yametambuliwa kwa mfuatano (1-getting-started-lessons, 2-js-basics, nk)
- Kila mradi una saraka za `solution/` na mara nyingi `start/` au `your-work/`
- Picha zinahifadhiwa katika saraka maalum za `images/` kwa somo
- Tafsiri ziko katika muundo wa `translations/{language-code}/`

## Ujenzi na Utoaji

### Utoaji wa Quiz App (Azure Static Web Apps)

quiz-app imewekwa kwa ajili ya utoaji wa Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Inaunda folda ya dist/
# Inaweka kupitia mtiririko wa kazi wa GitHub Actions wakati wa kusukuma kwenye main
```

Usanidi wa Azure Static Web Apps:
- **Mahali pa app**: `/quiz-app`
- **Mahali pa pato**: `dist`
- **Mtiririko wa kazi**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Uzalishaji PDF wa Nyaraka

```bash
npm install                    # Sakinisha docsify-to-pdf
npm run convert               # Tengeneza PDF kutoka kwa docs
```

### Nyaraka za Docsify

```bash
npm install -g docsify-cli    # Install Docsify ulimwenguni kote
docsify serve                 # Hudumia kwenye localhost:3000
```

### Ujenzi Maalum wa Miradi

Kila saraka ya mradi inaweza kuwa na mchakato wake wa ujenzi:
- Miradi ya Vue: `npm run build` hutengeneza vifurushi vya uzalishaji
- Miradi ya static: Hakuna hatua ya ujenzi, hudumu faili moja kwa moja

## Miongozo ya Ombi la Mvutano

### Muundo wa Kichwa

Tumia vichwa vya wazi vinavyoelezea eneo la mabadiliko:
- `[Quiz-app] Ongeza mtihani mpya kwa somo X`
- `[Lesson-3] Rekebisha tahajia katika mradi wa terrarium`
- `[Translation] Ongeza tafsiri ya Kihispania kwa somo 5`
- `[Docs] Sasisha maelekezo ya usanidi`

### Ukaguzi unaohitajika

Kabla ya kuwasilisha ombi:

1. **Ubora wa Msimbo**:
   - Endesha `npm run lint` katika saraka za mradi zilizoathirika
   - Rekebisha makosa na tahadhari zote za lint

2. **Uhakiki wa Ujenzi**:
   - Endesha `npm run build` ikiwa inahitajika
   - Hakikisha hakuna makosa ya ujenzi

3. **Uhakiki wa Viungo**:
   - Jaribu viungo vyote vya markdown
   - Hakiki marejeo ya picha yanafanya kazi

4. **Ukaguzi wa Maudhui**:
   - Soma tena kwa tahajia na sarufi
   - Hakikisha mifano ya nambari ni sahihi na ya kielimu
   - Hakiki tafsiri zihakikishe maana asili inahifadhiwa

### Mahitaji ya Mchango

- Kubali Microsoft CLA (ukaguzi wa moja kwa moja kwenye PR ya kwanza)
- Fuata [Kanuni ya Maadili ya Chanzo Huria ya Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Tazama [CONTRIBUTING.md](./CONTRIBUTING.md) kwa miongozo ya kina
- Taja nambari za masuala katika maelezo ya PR ikiwa zinahusika

### Mchakato wa Mapitio

- PR hupitiwa na watunza na jamii
- Uwiano wa elimu unapewa kipaumbele
- Mifano ya nambari ifuatilie mbinu bora za sasa
- Tafsiri hupitiwa kwa usahihi na ulinganishaji wa kitamaduni

## Mfumo wa Tafsiri

### Tafsiri ya Moja kwa Moja

- Inatumia GitHub Actions na mtiririko wa co-op-translator
- Hutoa tafsiri za lugha zaidi ya 50 moja kwa moja
- Faili za chanzo ziko katika saraka kuu
- Faili zilizotafsiriwa ziko katika saraka `translations/{language-code}/`

### Kuongeza Maboresho ya Tafsiri ya Mikono

1. Tafuta faili katika `translations/{language-code}/`
2. Fanya maboresho huku ukihifadhi muundo
3. Hakikisha mifano ya nambari inaendelea kufanya kazi
4. Jaribu maudhui ya mitihani ya eneo waliloitafsiriwa

### Meta-data ya Tafsiri

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

## Utafutaji na Utatuzi wa Matatizo

### Masuala ya Kawaida

**App ya quiz haianzi**:
- Angalia toleo la Node.js (v14+ inapendekezwa)
- Futa `node_modules` na `package-lock.json`, endesha `npm install` tena
- Hakiki mgongano wa bandari (kawaida: Vite hutumia bandari 5173)

**Server ya API haishi**:
- Thibitisha toleo la Node.js linakidhi minimum (node >=10)
- Angalia ikiwa bandari imeshatumika tayari
- Hakikisha tegemezi zote zimewekwa kwa `npm install`

**Kiongezi cha kivinjari hakianzi**:
- Hakiki kuwa manifest.json imepangwa kwa usahihi
- Angalia console ya kivinjari kwa makosa
- Fuata maelekezo ya usakinishaji wa kiongezi cha kivinjari maalum

**Masuala ya mradi wa mazungumzo wa Python**:
- Thibitisha kifurushi cha OpenAI kimesakinishwa: `pip install openai`
- Hakiki mazingira ya GITHUB_TOKEN yamewekwa
- Angalia ruhusa za GitHub Models

**Docsify haitumii nyaraka**:
- Sakinisha docsify-cli duniani: `npm install -g docsify-cli`
- Endesha kutoka saraka kuu ya hifadhidata
- Hakiki kuwa `docs/_sidebar.md` ipo

### Vidokezo vya Mazingira ya Maendeleo

- Tumia VS Code na ugani wa Live Server kwa miradi ya HTML
- Sakinisha ugani za ESLint na Prettier kwa uundaji thabiti
- Tumia DevTools za kivinjari kutatua matatizo ya JavaScript
- Kwa miradi ya Vue, sakinisha Vue DevTools ugani wa kivinjari

### Masharti ya Utendaji

- Idadi kubwa ya faili zilizotafsiriwa (zaidi ya 50) inasababisha vane kubwa kwa clone kamili
- Tumia shallow clone wakati unafanya kazi tu na maudhui: `git clone --depth 1`
- Epuka tafsiri wakati wa kufanya kazi na maudhui ya Kiingereza
- Mchakato wa ujenzi unaweza kuwa polepole kwa mara ya kwanza (npm install, ujenzi wa Vite)

## Mambo ya Usalama

### Mabadiliko ya Mazingira

- Funguo za API hazipaswi kung’olewa hifadhidatani
- Tumia faili za `.env` (zipo tayari katika `.gitignore`)
- Andika mabadiliko ya mazingira yanayohitajika katika README za miradi

### Miradi ya Python

- Tumia mazingira ya virtual: `python -m venv venv`
- Dumisha dependencies zikisasishwa
- Tokens za GitHub zisiwe na ruhusa zaidi ya zisizohitajika

### Ufikiaji wa GitHub Models

- Tokens za Ufikiaji Binafsi (PAT) zinahitajika kwa GitHub Models
- Tokens zihifadhiwe kama mabadiliko ya mazingira
- Kamwe usiweke tokens au nyaraka za usalama hifadhidatani

## Vidokezo Zaidi

### Hadhira Lengwa

- Waanzilishi kabisa wa maendeleo ya wavuti
- Wanafunzi na wanaojifunza peke yao
- Walimu wanaotumia mtaala katika madarasa
- Maudhui yamebuniwa kwa upatikanaji na kujenga ujuzi polepole

### Falsafa ya Elimu

- Mbinu ya kujifunza kwa mradi
- Vipimo vya mara kwa mara vya maarifa (quiz)
- Mazoezi ya kuandika msimbo kwa mikono
- Mifano ya matumizi halisi
- Kuzingatia misingi kabla ya mifumo ya kazi

### Matunzo ya Hifadhidata

- Jamii hai ya wanafunzi na wachangiaji
- Sasisho za mara kwa mara kwa tegemezi na maudhui
- Masuala na majadiliano yanatiliwa mkazo na watunza
- Sasisho za tafsiri kwa njia ya otomatiki kupitia GitHub Actions

### Rasilimali Zinazohusiana

- [Moduli za Microsoft Learn](https://docs.microsoft.com/learn/)
- [Rasilimali za Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inashauriwa kwa wanafunzi
- Kozi za ziada: AI ya kizazi, Sayansi ya Data, ML, IoT zinapatikana

### Kufanya Kazi na Miradi Maalum

Kwa maelekezo ya kina ya miradi binafsi, rejelea mafaili ya README katika:
- `quiz-app/README.md` - Programu ya kucheza quiz ya Vue 3
- `7-bank-project/README.md` - Programu ya benki yenye uthibitishaji
- `5-browser-extension/README.md` - Maendeleo ya kiongezi cha kivinjari
- `6-space-game/README.md` - Maendeleo ya mchezo wa Canvas
- `9-chat-project/README.md` - Mradi wa msaidizi wa mazungumzo wa AI

### Muundo wa Monorepo

Ingawa si monorepo ya kawaida, hifadhidata hii ina miradi kadhaa huru:
- Kila somo ni tegemezi la pekee
- Miradi haishiriki tegemezi
- Fanya kazi kwenye miradi binafsi bila kuathiri mingine
- Dondoa hifadhidata nzima kwa uzoefu kamili wa mtaala

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Angalizo**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Wakati tunajitahidi kwa usahihi, tafadhali fahamu kwamba tafsiri za kiotomatiki zinaweza kuwa na makosa au upungufu katika usahihi. Hati ya asili katika lugha yake ya asili inapaswa kuchukuliwa kama chanzo chenye mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatuwajibiki kwa mkanganyiko wowote au kutoelewana kunakotokana na matumizi ya tafsiri hii.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->