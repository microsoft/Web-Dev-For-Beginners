# AGENTS.md

## Muhtasari wa Mradi

Hii ni hifadhidata ya mtaala wa kielimu kwa kufundisha misingi ya maendeleo ya wavuti kwa wanaoanza. Mtaala huu ni kozi kamili ya wiki 12 iliyotengenezwa na Wakili wa Microsoft Cloud, ikiwa na masomo 24 ya vitendo yanayohusisha JavaScript, CSS, na HTML.

### Sehemu Muhimu

- **Maudhui ya Kielimu**: Masomo 24 yaliyopangwa katika moduli za miradi
- **Miradi ya Vitendo**: Terrarium, Mchezo wa Kutaipa, Kiongezi cha Kivinjari, Mchezo wa Anga, Programu ya Benki, Mhariri wa Msimbo, na Msaidizi wa Mazungumzo wa AI
- **Mitozo ya Kuingiliana**: Mitozo 48 yenye maswali 3 kila mmoja (vipimo kabla/baada ya somo)
- **Msaada wa Lugha Nyingi**: Tafsiri za kiotomatiki kwa lugha 50+ kupitia GitHub Actions
- **Teknolojia**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (kwa miradi ya AI)

### Miundo

- Hifadhidata ya kielimu yenye muundo wa masomo
- Kila folda ya somo ina README, mifano ya msimbo, na suluhisho
- Miradi huru katika folda tofauti (quiz-app, miradi mbalimbali ya masomo)
- Mfumo wa tafsiri ukitumia GitHub Actions (co-op-translator)
- Hati hutolewa kupitia Docsify na zinapatikana pia kama PDF

## Amri za Kuanzisha

Hifadhidata hii ni kwa ajili ya matumizi ya maudhui ya kielimu hasa. Kwa kufanya kazi na miradi maalum:

### Kuanzisha Hifadhidata Kuu

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Kuanzisha App ya Mitozo (Vue 3 + Vite)

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
npm run format     # Panga na Prettier
```

### Miradi ya Kiongezi cha Kivinjari

```bash
cd 5-browser-extension/solution
npm install
# Fuata maelekezo ya kupakia viendelezi maalum kwa kivinjari
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
# Weka variable ya mazingira ya GITHUB_TOKEN
python api.py
```

## Mtiririko wa Maendeleo

### Kwa Wachangia Maudhui

1. **Fungua hifadhidata** kwenye akaunti yako ya GitHub
2. **Nakili hifadhidata ya macho** kwa kompyuta yako
3. **Tengeneza tawi jipya** kwa mabadiliko yako
4. Fanya mabadiliko kwa maudhui ya somo au mifano ya msimbo
5. Jaribu mabadiliko yoyote ya msimbo katika folda husika za miradi
6. Wasilisha ombi la kuunganisha (pull request) ukizingatia miongozo ya mchango

### Kwa Wanafunzi

1. Fungua au nakili hifadhidata
2. Vuka kwenye folda za somo mfululizo
3. Soma faili za README za kila somo
4. Kamilisha mitihani kabla ya somo katika https://ff-quizzes.netlify.app/web/
5. Fanya kazi na mifano ya msimbo katika folda za masomo
6. Kamilisha majukumu na changamoto
7. Fanya mitihani baada ya somo

### Maendeleo ya Moja kwa Moja

- **Nyaraka**: Endesha `docsify serve` kutoka mzizi (bandari 3000)
- **App ya Mitozo**: Endesha `npm run dev` katika folda ya quiz-app
- **Miradi**: Tumia ugani wa VS Code Live Server kwa miradi ya HTML
- **Miradi ya API**: Endesha `npm start` katika folda husika za API

## Maelekezo ya Kupima

### Kupima App ya Mitozo

```bash
cd quiz-app
npm run lint       # Angalia matatizo ya mtindo wa msimbo
npm run build      # Hakiki ujenzi unafanikiwa
```

### Kupima API ya Benki

```bash
cd 7-bank-project/api
npm run lint       # Angalia matatizo ya mtindo wa msimbo
node server.js     # Hakiki seva inaanza bila makosa
```

### Njia ya Kupima kwa Ujumla

- Hii ni hifadhidata ya kielimu bila vipimo vya kiotomatiki kwa kina
- Ukaguzi wa mkono unalenga:
  - Mifano ya msimbo ifanyike bila makosa
  - Viungo katika nyaraka vifanye kazi ipasavyo
  - Ujenzi wa miradi ukamilike bila matatizo
  - Mifano ifuatane na mbinu bora

### Ukaguzi Kabla ya Kuwasilisha

- Endesha `npm run lint` katika folda zenye package.json
- Hakiki viungo vya markdown
- Jaribu mifano ya msimbo kwenye kivinjari au Node.js
- Hakiki tafsiri ziendelee na muundo sahihi

## Miongozo ya Mtindo wa Msimbo

### JavaScript

- Tumia msimbo wa kisasa ES6+
- Fuata mipangilio ya ESLint iliyopewa katika miradi
- Tumia majina yenye maana kwa mabadiliko na kazi kwa ufafanuzi wa kielimu
- Ongeza maelezo kuelezea dhana kwa wanafunzi
- Panga msimbo kwa Prettier pale panapopangwa

### HTML/CSS

- Matumizi ya vipengele vya semantic HTML5
- Kanuni za muundo unaojibadilisha (responsive design)
- Mamlaka ya jina la daraja kwa uwazi
- Maelezo yanayoelezea mbinu za CSS kwa wanafunzi

### Python

- Miongozo ya mtindo wa PEP 8
- Mifano wazi, ya kielimu ya msimbo
- Maelezo ya aina (type hints) mahali panaposaidia kujifunza

### Nyaraka za Markdown

- Mipangilio wazi ya vichwa vya habari
- Vipande vya msimbo vyenye ufafanuzi wa lugha
- Viungo kwa rasilimali za ziada
- Picha na skrini katika folda za `images/`
- Maelezo ya alt kwa picha kwa upatikanaji

### Mpangilio wa Faili

- Masomo yamepangiwa nambari mfululizo (1-getting-started-lessons, 2-js-basics, n.k.)
- Kila mradi una folda za `solution/` na mara nyingi `start/` au `your-work/`
- Picha zinahifadhiwa katika folda za somo maalum `images/`
- Tafsiri zinapatikana katika muundo wa `translations/{language-code}/`

## Ujenzi na Uenezaji

### Uenezaji wa App ya Mitozo (Azure Static Web Apps)

App ya quiz imewekwa kwa ajili ya uenezaji wa Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Inaunda folda ya dist/
# Inaendesha kupitia mtiririko wa GitHub Actions wakati wa kusukuma kwenye main
```

Mipangilio ya Azure Static Web Apps:
- **Mahali pa App**: `/quiz-app`
- **Mahali pa Matokeo**: `dist`
- **Mtiririko wa Kazi**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Kutengeneza PDF ya Nyaraka

```bash
npm install                    # Sakinisha docsify-to-pdf
npm run convert               # Tengeneza PDF kutoka kwa docs
```

### Nyaraka za Docsify

```bash
npm install -g docsify-cli    # Sakinisha Docsify kote
docsify serve                 # Hudumia kwenye localhost:3000
```

### Ujenzi Maalum wa Miradi

Kila folda ya mradi inaweza kuwa na mchakato wake wa ujenzi:
- Miradi ya Vue: `npm run build` huunda vifurushi vya uzalishaji
- Miradi ya statiki: Hakuna hatua ya kujenga, anuguza faili moja kwa moja

## Miongozo ya Maombi ya Kuunganisha

### Muundo wa Kichwa

Tumia vichwa wazi, vinavyoelezea sehemu ya mabadiliko:
- `[Quiz-app] Ongeza mtihani mpya kwa somo X`
- `[Lesson-3] Rekebisha tahajia katika mradi wa terrarium`
- `[Translation] Ongeza tafsiri ya Kihispania kwa somo 5`
- `[Docs] Sasisha maelekezo ya kuanzisha`

### Ukaguzi Unaotakiwa

Kabla ya kuwasilisha PR:

1. **Ubora wa Msimbo**:
   - Endesha `npm run lint` katika folda za miradi zilizoathirika
   - Rekebisha makosa na onyo zote za lint

2. **Thibitisha Ujenzi**:
   - Endesha `npm run build` inapohitajika
   - Hakikisha hakuna makosa ya ujenzi

3. **Thibitisha Viungo**:
   - Jaribu viungo vyote vya markdown
   - Thibitisha marejeleo ya picha yanafanya kazi

4. **Uhakiki wa Maudhui**:
   - Soma kwa tahajia na sarufi
   - Hakikisha mifano ya msimbo ni sahihi na ya kielimu
   - Thibitisha tafsiri zinadumisha maana halisi

### Mahitaji ya Mchango

- Kubali Microsoft CLA (ukaguzi wa kiotomatiki kwenye PR ya kwanza)
- Fuata [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Tazama [CONTRIBUTING.md](./CONTRIBUTING.md) kwa miongozo kamili
- Taja nambari za masuala kwenye maelezo ya PR inapobidi

### Mchakato wa Ukaguzi

- PR hukaguliwa na watunzaji na jamii
- Uwafafanuzi wa kielimu unazingatiwa zaidi
- Mifano ya msimbo ifuatane na mbinu bora za sasa
- Tafsiri hurejelewa kwa usahihi na muafaka wa kitamaduni

## Mfumo wa Tafsiri

### Tafsiri ya Kiotomatiki

- Inatumia GitHub Actions na mtiririko wa co-op-translator
- Hufasiri kwa lugha 50+ moja kwa moja
- Faili chanzo ziko kwenye folda kuu
- Faili zilizotafsiriwa ziko katika `translations/{language-code}/`

### Kuongeza Maboresho ya Tafsiri ya Mkono

1. Tafuta faili katika `translations/{language-code}/`
2. Fanya maboresho bila kubadilisha muundo
3. Hakikisha mifano ya msimbo bado inafanya kazi
4. Jaribu maudhui ya mtihani yaliyobinafsishwa

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

## Ugunduzi na Urekebishaji

### Masuala ya Kawaida

**App ya mitihani haianzi**:
- Angalia toleo la Node.js (v14+ linapendekezwa)
- Futa `node_modules` na `package-lock.json`, endesha tena `npm install`
- Angalia migongano ya bandari (kawaida: Vite hutumia bandari 5173)

**Seva ya API haianzi**:
- Hakiki toleo la Node.js kuwa la chini kabisa (node >=10)
- Angalia kama bandari tayari inatumika
- Hakikisha tegemezi zote zimesakinishwa kwa `npm install`

**Kiongezi cha kivinjari hakifanyi kazi**:
- Hakikisha manifest.json imeandikwa vizuri
- Angalia makosa kwenye konsole ya kivinjari
- Fuata maelekezo ya usakinishaji ya kivinjari husika

**Masuala ya mradi wa mazungumzo ya Python**:
- Hakikisha kifurushi cha OpenAI kimesanikishwa: `pip install openai`
- Hakiki mazingira ya GITHUB_TOKEN yamewekwa
- Angalia ruhusa za upatikanaji wa GitHub Models

**Docsify haileti nyaraka**:
- Sakinisha docsify-cli ulimwenguni: `npm install -g docsify-cli`
- Endesha kutoka folda ya hifadhidata mzizi
- Hakiki kuwa `docs/_sidebar.md` ipo

### Vidokezo vya Mazingira ya Maendeleo

- Tumia VS Code na ugani wa Live Server kwa miradi ya HTML
- Sakinisha ugani za ESLint na Prettier kwa panga msimbo mzuri
- Tumia DevTools za kivinjari kwa kufuatilia JavaScript
- Kwa miradi ya Vue, install ugani wa Vue DevTools wa kivinjari

### Mambo ya Kufikiria Kuhusu Utendaji

- Idadi kubwa ya faili zilizotafsiriwa (lugha 50+) husababisha nakala nzito
- Tumia shallow clone kama unafanya kazi tu na maudhui: `git clone --depth 1`
- Zuia tafsiri katika utafutaji unapotumia maudhui ya Kiingereza
- Mchakato wa ujenzi unaweza kuwa polepole mara ya kwanza (npm install, ujenzi wa Vite)

## Masuala ya Usalama

### Mabadiliko ya Mazingira

- Funguo za API hazipaswi kuwekwa hifadhidatani
- Tumia faili za `.env` (siku hizi ziko `.gitignore`)
- Elezea mabadiliko ya mazingira yanayohitajika kwenye README za miradi

### Miradi ya Python

- Tumia mazingira ya mtandao wa virtual: `python -m venv venv`
- Sasisha tegemezi mara kwa mara
- Tokeni za GitHub ziwe na idhini kidogo inayohitajika

### Upatikanaji wa GitHub Models

- Tokens za Upatikanaji wa Kibinafsi (PAT) zinahitajika kwa GitHub Models
- Tokens ziwekewe kama mabadiliko ya mazingira (environment variables)
- Usiweze kuweka tokens au nyaraka za usalama hifadhidatani

## Vidokezo Zaidi

### Walengwa

- Wanaoanza kabisa katika maendeleo ya wavuti
- Wanafunzi na wanaojifunza peke yao
- Walimu wanaotumia mtaala darasani
- Maudhui yameundwa kwa upatikanaji na uelekezaji wa hatua kwa hatua

### Falsafa ya Elimu

- Mbinu ya kujifunza kwa miradi
- Ukaguzi wa mara kwa mara wa maarifa (mitihani)
- Mazoezi ya msimbo ya vitendo
- Mifano halisi ya utekelezaji
- Lengo la msingi kabla ya majukwaa

### Matunzo ya Hifadhidata

- Jamii hai ya wanafunzi na wachangiaji
- Sasisho la mara kwa mara kwa tegemezi na maudhui
- Masuala na mijadala ikifuatiliwa na watunzaji
- Sasisho za tafsiri kwa njia ya kiotomatiki kupitia GitHub Actions

### Rasilimali Zinazohusiana

- [Moduli za Microsoft Learn](https://docs.microsoft.com/learn/)
- [Rasilimali za Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inapendekezwa kwa wanaojifunza
- Kozi za ziada: AI ya Asili, Sayansi ya Takwimu, ML, na mtaala wa IoT zinapatikana

### Kufanya Kazi na Miradi Maalum

Kwa maelekezo ya kina juu ya miradi binafsi, rejelea faili za README katika:
- `quiz-app/README.md` - Programu ya mtihani ya Vue 3
- `7-bank-project/README.md` - Programu ya benki yenye uthibitishaji
- `5-browser-extension/README.md` - Ukuaji wa kiongezi cha kivinjari
- `6-space-game/README.md` - Ukuaji wa mchezo wa Canvas
- `9-chat-project/README.md` - Mradi wa msaidizi wa mazungumzo wa AI

### Muundo wa Monorepo

Ingawa si monorepo ya kawaida, hifadhidata hii ina miradi huru mingi:
- Kila somo ni huru
- Miradi haiungi mkono tegemezi zao
- Fanya kazi kwenye miradi binafsi bila kuathiri mingine
- Nakili hifadhidata yote kwa uzoefu kamili wa mtaala

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Kiarifu cha Kutokujali**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali kumbuka kuwa tafsiri za moja kwa moja zinaweza kuwa na makosa au upungufu wa usahihi. Hati ya asili katika lugha yake ya mama inapaswa kuchukuliwa kama chanzo halali. Kwa taarifa muhimu, tafsiri ya mtaalamu wa kibinadamu inapendekezwa. Hatutawajibika kwa changamoto au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->