# AGENTS.md

## Muhtasari wa Mradi

Hii ni hifadhidata ya mtaala wa elimu kwa kufundisha misingi ya maendeleo ya wavuti kwa wanaoanza. Mtaala ni kozi kamilifu ya wiki 12 iliyotengenezwa na Wakili wa Wingu wa Microsoft, ukiwa na masomo 24 ya vitendo yanayohusisha JavaScript, CSS, na HTML.

### Vipengele Muhimu

- **Yaliyomo ya Kielimu**: Masomo 24 yaliyoandaliwa kwa muundo wa miradi
- **Miradi ya Vitendo**: Terrarium, Mchezo wa Kuandika, Kiendelezi cha Kivinjari, Mchezo wa Anga, App ya Benki, Mhariri wa Nambari, na Msaidizi wa Chat wa AI
- **Mitihani ya Kuingiliana**: Mitihani 48 yenye maswali 3 kila moja (uchunguzi kabla/baada ya somo)
- **Msaada wa Lugha Nyingi**: Tafsiri za kiotomatiki kwa lugha 50+ kupitia GitHub Actions
- **Teknolojia**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (kwa miradi ya AI)

### Muundo

- Hifadhidata ya kielimu yenye muundo wa somo
- Kila folda ya somo ina README, mifano ya msimbo, na suluhisho
- Miradi huru katika folda tofauti (quiz-app, miradi mbalimbali ya somo)
- Mfumo wa tafsiri ukitumia GitHub Actions (co-op-translator)
- Nyaraka hutolewa kupitia Docsify na zinapatikana kama PDF

## Amri za Kuanzisha

Hifadhidata hii ni kwa lengo la matumizi ya yaliyomo kielimu. Kwa kazi na miradi maalum:

### Kuanzisha Hifadhidata Kuu

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Kuanzisha Quiz App (Vue 3 + Vite)

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
npm run format     # Panga kwa Prettier
```

### Miradi ya Kiendelezi cha Kivinjari

```bash
cd 5-browser-extension/solution
npm install
# Fuata maelekezo ya upakiaji wa programu-jalizi maalum za kivinjari
```

### Miradi ya Mchezo wa Anga

```bash
cd 6-space-game/solution
npm install
# Fungua index.html katika kivinjari au tumia Live Server
```

### Mradi wa Chat (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Weka variable ya mazingira ya GITHUB_TOKEN
python api.py
```

## Mtiririko wa Maendeleo

### Kwa Wasaidizi wa Maudhui

1. **Fungua 'fork' ya hifadhidata** kwenye akaunti yako ya GitHub
2. **Nakili fork yako** ndani ya kompyuta
3. **Tengeneza tawi jipya** kwa mabadiliko yako
4. Fanya mabadiliko kwa yaliyomo ya somo au mifano ya msimbo
5. Jaribu mabadiliko yoyote ya msimbo katika folda zinazohusiana za mradi
6. Wasilisha mahitaji ya kusukuma ikifuata miongozo ya michango

### Kwa Wanafunzi

1. Fikia 'fork' au nakili hifadhidata
2. Tembea folda za masomo kwa mfuatano
3. Soma faili za README kwa kila somo
4. Kamilisha mitihani ya kabla ya somo kwenye https://ff-quizzes.netlify.app/web/
5. Fanya kazi kupitia mifano ya msimbo kwenye folda za masomo
6. Kamilisha majukumu na changamoto
7. Fanya mitihani ya baada ya somo

### Maendeleo ya Moja kwa Moja

- **Nyaraka**: Endesha `docsify serve` kwenye mzizi (bandari 3000)
- **Quiz App**: Endesha `npm run dev` kwenye folda ya quiz-app
- **Miradi**: Tumia VS Code Live Server kwa miradi ya HTML
- **Miradi ya API**: Endesha `npm start` kwenye folda husika za API

## Maelekezo ya Upimaji

### Upimaji wa Quiz App

```bash
cd quiz-app
npm run lint       # Angalia matatizo ya mtindo wa msimbo
npm run build      # Thibitisha ujenzi unafanikiwa
```

### Upimaji wa API ya Benki

```bash
cd 7-bank-project/api
npm run lint       # Angalia matatizo ya mtindo wa msimbo
node server.js     # Thibitisha server inaanza bila makosa
```

### Mbinu ya Upimaji kwa Juu

- Hii ni hifadhidata ya elimu bila majaribio ya kiotomatiki ya kina
- Upimaji wa mkono unazingatia:
  - Mifano ya msimbo inatimia bila makosa
  - Viungo kwenye nyaraka vinatumika ipasavyo
  - Ujenzi wa mradi hufanyika kwa mafanikio
  - Mifano inafuata mbinu bora

### Ukaguzi wa Kabla ya Kuwasilisha

- Endesha `npm run lint` katika folda zenye package.json
- Hakiki viungo vya markdown ni sahihi
- Jaribu mifano ya msimbo katika kivinjari au Node.js
- Angalia tafsiri zinahifadhi muundo mzuri

## Miongozo ya Mtindo wa Msimbo

### JavaScript

- Tumia sintaksia ya kisasa ya ES6+
- Fuata usanidi wa ESLint uliowekwa katika miradi
- Tumia majina ya maana kwa mabadiliko na kazi kwa ufafanuzi wa kielimu
- Ongeza maelezo kuelezea dhana kwa wanafunzi
- Panga kwa Prettier pale panapopangizwa

### HTML/CSS

- Vipengele vya semantic vya HTML5
- Kanuni za muundo unaobadilika (responsive)
- Mazingira ya majina ya darasa yaliyobainishwa wazi
- Maelezo ya mbinu za CSS kwa wanafunzi

### Python

- Miongozo ya mtindo wa PEP 8
- Mifano wazi, ya kielimu
- Vidokezo vya aina walivyonufaika na kujifunza

### Nyaraka za Markdown

- Hieraki ya vichwa vya habari
- Sehemu za msimbo zenye lugha
- Viungo vya rasilimali za ziada
- Picha na manyumbulizo kwenye folda za `images/`
- Nyaraka za alt kwa picha kwa upatikanaji

### Mpangilio wa Faili

- Masomo namba mfuatano (1-getting-started-lessons, 2-js-basics, n.k)
- Mradi wowote una folda za `solution/` na mara nyingi `start/` au `your-work/`
- Picha huhifadhiwa katika folda maalum za masomo `images/`
- Tafsiri katika muundo wa `translations/{language-code}/`

## Ujenzi na Uenezaji

### Uenezaji wa Quiz App (Azure Static Web Apps)

quiz-app imepangiliwa kwa uenezaji wa Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Inaunda folda ya dist/
# Inaweka kupitia mtiririko wa kazi wa GitHub Actions wakati wa kusukuma kwenye main
```

Mipangilio ya Azure Static Web Apps:
- **Mahali pa App**: `/quiz-app`
- **Mahali pa Matokeo**: `dist`
- **Mtiririko wa Kazi**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Uundaji wa PDF za Nyaraka

```bash
npm install                    # Sanidi docsify-to-pdf
npm run convert               # Tengeneza PDF kutoka kwa docs
```

### Nyaraka za Docsify

```bash
npm install -g docsify-cli    # Sakinisha Docsify kwa ulimwengu mzima
docsify serve                 # Hudumia kwenye localhost:3000
```

### Ujenzi Maalum wa Miradi

Kila folda ya mradi inaweza kuwa na mchakato wake wa ujenzi:
- Miradi ya Vue: `npm run build` huunda vifurushi vya uzalishaji
- Miradi ya static: Hakuna hatua ya ujenzi, tengeneza faili moja kwa moja

## Miongozo ya Ombi la Kujoshea (Pull Request)

### Muundo wa Kichwa

Tumia vichwa wazi na vinaonesha eneo la mabadiliko:
- `[Quiz-app] Ongeza mtihani mpya kwa somo X`
- `[Lesson-3] Rekebisha kosa la tahajia katika mradi wa terrarium`
- `[Translation] Ongeza tafsiri ya Kihispania kwa somo 5`
- `[Docs] Sasisha maelekezo ya kuanzisha`

### Uchunguzi Unaohitajika

Kabla ya kuwasilisha PR:

1. **Ubora wa Msimbo**:
   - Endesha `npm run lint` katika folda za miradi zilizohusika
   - Rekebisha makosa na onyo zote za lint

2. **Uhakiki wa Ujenzi**:
   - Endesha `npm run build` inapohitajika
   - Hakikisha hakuna makosa ya ujenzi

3. **Uhakiki wa Viungo**:
   - Jaribu viungo vyote vya markdown
   - Thibitisha marejeleo ya picha yanatumika

4. **Mapitio ya Maudhui**:
   - Soma kwa usahihi ya tahajia na sarufi
   - Hakikisha mifano ya msimbo ni sahihi na ya kielimu
   - Hakikisha tafsiri zinahifadhi maana asili

### Mahitaji ya Michango

- Kubali Microsoft CLA (ukaguzi wa kiotomatiki kwenye PR ya kwanza)
- Fuata [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Angalia [CONTRIBUTING.md](./CONTRIBUTING.md) kwa miongozo kamili
- Rejelea nambari za masuala katika maelezo ya PR kama zinahusika

### Mchakato wa Mapitio

- PR hupitiwa na wasimamizi na jamii
- Uwazi wa elimu unaheshimiwa
- Mifano ya msimbo inapaswa kufuata mbinu bora za sasa
- Tafsiri hupitiwa kwa usahihi na utamaduni unaofaa

## Mfumo wa Tafsiri

### Tafsiri ya Kiotomatiki

- Inatumia GitHub Actions na mtiririko wa co-op-translator
- Hutoa tafsiri kwa lugha zaidi ya 50 kiotomatiki
- Faili za asili ziko katika folda kuu
- Faili za tafsiri ziko `translations/{language-code}/`

### Kuongeza Maboresho ya Tafsiri ya Mkono

1. Tafuta faili katika `translations/{language-code}/`
2. Fanya maboresho huku ukihifadhi muundo
3. Hakikisha mifano ya msimbo inabaki kazi
4. Jaribu maudhui ya mtihani uliobadilishwa kwa lugha husika

### Metadata ya Tafsiri

Faili za tafsiri zina kiambatisho cha metadata:
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

## Ufungaji na Utatuzi wa Matatizo

### Masuala ya Kawaida

**Quiz app haianzi**:
- Angalia toleo la Node.js (v14+ inashauriwa)
- Futa `node_modules` na `package-lock.json`, endesha tena `npm install`
- Angalia migongano ya bandari (kawaida: Vite hutumia bandari 5173)

**Server ya API haianzi**:
- Thibitisha toleo la Node.js linakidhi (node >=10)
- Angalia kama bandari tayari inatumika
- Hakikisha utegemezi wote umewekwa kwa `npm install`

**Kiendelezi cha kivinjari hakifungui**:
- Thibitisha manifest.json imeandikwa vizuri
- Angalia console ya kivinjari kwa makosa
- Fuata maelekezo maalum ya usakinishaji wa kiendelezi cha kivinjari

**Matatizo ya mradi wa chat wa Python**:
- Hakikisha kifurushi cha OpenAI kimesakinishwa: `pip install openai`
- Thibitisha GITHUB_TOKEN imewekwa kwa mazingira
- Angalia ruhusa za kupata GitHub Models

**Docsify haionyeshi nyaraka**:
- Sakinisha docsify-cli kimataifa: `npm install -g docsify-cli`
- Endesha kutoka folda ya mzizi ya hifadhidata
- Hakiki kuwepo kwa `docs/_sidebar.md`

### Vidokezo vya Mazingira ya Maendeleo

- Tumia VS Code yenye upanuzi wa Live Server kwa miradi ya HTML
- Sakinisha upanuzi wa ESLint na Prettier kwa muundo thabiti
- Tumia zana za DevTools za kivinjari kutatua masuala ya JavaScript
- Kwa miradi ya Vue, sakinisha upanuzi wa Vue DevTools wa kivinjari

### Mambo ya Kuangalia Utendaji

- Idadi kubwa ya faili za tafsiri (lugha 50+) maana clones kamili zina ukubwa mkubwa
- Tumia clone dhaifu ukifanya kazi tu na yaliyomo: `git clone --depth 1`
- Epuka tafutiza tafsiri unapotaka kufanya kazi na maudhui ya Kiingereza
- Mchakato wa ujenzi unaweza kuchukua muda kwenye mwanzoni (npm install, ujenzi Vite)

## Masuala ya Usalama

### Vigezo vya Mazingira

- Funguo za API hazipaswi kuwekwa kwenye hifadhidata
- Tumia faili za `.env` (zimenaswa katika `.gitignore`)
- Eleza vigezo vya mazingira vinavyohitajika katika README za miradi

### Miradi ya Python

- Tumia mazingira ya kudanganya (virtual environments): `python -m venv venv`
- Sasisha utegemezi mara kwa mara
- Tokeni za GitHub ziwe na ruhusa ndogo inayohitajika

### Kufikia GitHub Models

- Tokeni za Ufikiaji wa Kibinafsi (PAT) zinahitajika kwa GitHub Models
- Tokeni zihifadhiwe kama vigezo vya mazingira
- Usiwekee tokeni au nyaraka kwenye hifadhidata

## Vidokezo Zaidi

### Walengwa

- Wanaoanza kabisa kwenye maendeleo ya wavuti
- Wanafunzi na wanaojifunza peke yao
- Walimu wanaotumia mtaala darasani
- Yaliyomo yameundwa kwa njia inayofanikisha upatikanaji na kujifunza hatua kwa hatua

### Falsafa ya Elimu

- Njia ya kujifunza kupitia miradi
- Mikakati ya mara kwa mara ya kukagua maarifa (mitihani)
- Mazoezi ya vitendo vya uandishi wa msimbo
- Mifano halisi ya matumizi
- Kuzingatia misingi kabla ya mifumo ya kazi (frameworks)

### Usimamizi wa Hifadhidata

- Jamii hai ya wanafunzi na wasaidizi
- Sasisho la mara kwa mara la utegemezi na yaliyomo
- Masuala na majadiliano yanadhibitiwa na wasimamizi
- Sasisho za tafsiri kwa kutumia GitHub Actions kiotomatiki

### Rasilimali Zinazohusiana

- [Microsoft Learn modules](https://docs.microsoft.com/learn/)
- [Rasilimali za Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inayopendekezwa kwa wanafunzi
- Kozi za ziada: AI ya Kutengeneza, Sayansi ya Data, ML, kozi za IoT zinapatikana

### Kazi na Miradi Maalum

Kwa maelekezo ya kina kuhusu miradi binafsi, rejelea faili za README katika:
- `quiz-app/README.md` - Programu ya quiz ya Vue 3
- `7-bank-project/README.md` - Programu ya benki yenye uthibitishaji
- `5-browser-extension/README.md` - Maendeleo ya kiendelezi cha kivinjari
- `6-space-game/README.md` - Maendeleo ya mchezo wa Canvas
- `9-chat-project/README.md` - Mradi wa msaidizi wa chat AI

### Muundo wa Monorepo

Ingawa sio monorepo ya kawaida, hifadhidata hii ina miradi kadhaa huru:
- Kila somo lina muundo wake
- Miradi haishiriki utegemezi
- Fanya kazi kwenye miradi binafsi bila kuathiri mingine
- Nakili hifadhidata nzima kwa uzoefu kamili wa mtaala

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Kipengele cha Kutolewa Wajibu**:
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kwamba tafsiri za moja kwa moja zinaweza kuwa na makosa au usahihi mdogo. Hati ya asili katika lugha yake ya asili inapaswa kuchukuliwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya mtaalamu wa binadamu inapendekezwa. Hatuwezi kuwajibika kwa kutoelewana au tafsiri potovu zinazotokana na matumizi ya tafsiri hii.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->