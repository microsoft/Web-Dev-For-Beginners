# AGENTS.md

## Muhtasari wa Mradi

Hii ni hifadhi ya mtaala wa kielimu kwa ajili ya kufundisha misingi ya maendeleo ya wavuti kwa wanaoanza. Mtaala ni kozi kamili ya wiki 12 iliyoandaliwa na Microsoft Cloud Advocates, ikiwa na masomo 24 ya mazoezi juu ya JavaScript, CSS, na HTML.

### Vipengele Muhimu

- **Mada za Elimu**: Masomo 24 yaliyopangwa kwa muundo wa moduli za mradi
- **Miradi ya Vitendo**: Terrarium, Mchezo wa Kuandika, Kiendelezi cha Kivinjari, Mchezo wa Anga, Programu ya Benki, Mhariri wa Msimbo, na Msaidizi wa AI wa Mazungumzo
- **Maswali ya Maingiliano**: Maswali 48 yenye maswali 3 kila moja (tathmini kabla/baada ya somo)
- **Msaada wa Lugha Mbalimbali**: Tafsiri za moja kwa moja za lugha zaidi ya 50 kupitia GitHub Actions
- **Teknolojia**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (kwa miradi ya AI)

### Usanifu

- Hifadhi ya kielimu yenye muundo wa masomo
- Kila folda ya somo ina README, mifano ya msimbo, na suluhisho
- Miradi huru katika saraka tofauti (quiz-app, miradi mbalimbali ya somo)
- Mfumo wa tafsiri ukitumia GitHub Actions (co-op-translator)
- Nyaraka zinatolewa kupitia Docsify na zinapatikana kama PDF

## Amri za Usanidi

Hifadhi hii ni kwa matumizi ya masomo hasa. Kwa kufanya kazi na miradi maalum:

### Usanidi wa Hifadhi Kuu

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Usanidi wa Programu ya Quiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Anza seva ya maendeleo
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

### Miradi ya Kiendelezi cha Kivinjari

```bash
cd 5-browser-extension/solution
npm install
# Fuata maagizo ya kupakua programu-jalizi maalum za kivinjari
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
# Weka tofauti ya mazingira ya GITHUB_TOKEN
python api.py
```

## Mtiririko wa Maendeleo

### Kwa Wachangiaji wa Maudhui

1. **Fungua hifadhi ili iwe yako** kwenye akaunti yako ya GitHub
2. **Nakili hifadhi yako** ndani ya kompyuta yako
3. **Tengeneza tawi jipya** kwa mabadiliko yako
4. Fanya mabadiliko kwenye maudhui ya somo au mifano ya msimbo
5. Jaribu mabadiliko ya msimbo katika saraka za miradi husika
6. Wasilisha maombi ya kuunganisha ikifuata miongozo ya mchango

### Kwa Wanafunzi

1. Fungua au nakili hifadhi
2. Tembea kwenye saraka za masomo kwa mpangilio
3. Soma faili za README kwa somo kila moja
4. Kamilisha maswali ya kabla ya somo kwenye https://ff-quizzes.netlify.app/web/
5. Fanya kazi kupitia mifano ya msimbo kwenye folda za masomo
6. Kamilisha kazi na changamoto
7. Fanya maswali ya baada ya somo

### Maendeleo ya Moja kwa Moja

- **Nyaraka**: Endesha `docsify serve` kwenye mzizi (bandari 3000)
- **Programu ya Quiz**: Endesha `npm run dev` kwenye saraka ya quiz-app
- **Miradi**: Tumia nyongeza ya VS Code Live Server kwa miradi ya HTML
- **Miradi ya API**: Endesha `npm start` katika saraka husika za API

## Maelekezo ya Vipimo

### Vipimo vya Programu ya Quiz

```bash
cd quiz-app
npm run lint       # Angalia matatizo ya mtindo wa msimbo
npm run build      # Thibitisha ujenzi unafanikiwa
```

### Vipimo vya API ya Benki

```bash
cd 7-bank-project/api
npm run lint       # Angalia kwa matatizo ya mtindo wa msimbo
node server.js     # Thibitisha seva inaanza bila makosa
```

### Mbinu ya Jumla ya Vipimo

- Hii ni hifadhi ya kielimu isiyo na vipimo kamili vya moja kwa moja
- Vipimo vya manuari vinaangazia:
  - Mifano ya msimbo inafanya kazi bila makosa
  - Viungo katika nyaraka vinafanya kazi vizuri
  - Ujenzi wa miradi unakamilika bila hitilafu
  - Mifano inafuata mbinu bora za maendeleo

### Ukaguzi Kabla ya Kuwasilisha

- Endesha `npm run lint` kwenye saraka zilizo na package.json
- Hakiki viungo vya markdown viko sahihi
- Jaribu mifano ya msimbo kivinjari au Node.js
- Angalia tafsiri zilidumisha muundo bora

## Miongozo ya Mtindo wa Msimbo

### JavaScript

- Tumia muundo wa kisasa wa ES6+
- Fuata usanidi wa ESLint uliowekwa katika miradi
- Tumia majina yanayoeleweka ya vigezo na kazi kwa uwazi wa kielimu
- Ongeza maelezo kuelezea dhana kwa wanafunzi
- Panga msimbo kwa kutumia Prettier pale panapowezekana

### HTML/CSS

- Vipengele vya HTML5 vyenye maana
- Kanuni za muundo wa kujibadilisha (responsive)
- Matumizi safi ya majina ya darasa
- Maelezo yanayofafanua mbinu za CSS kwa wanafunzi

### Python

- Miongozo ya mtindo wa PEP 8
- Mifano ya msimbo wazi na ya kielimu
- Aina za data (type hints) pale panaposaidia kujifunza

### Nyaraka za Markdown

- Mnara wa vichwa ulio wazi
- Vizuizi vya msimbo vyenye lugha elekezi
- Viungo kwa rasilimali za ziada
- Picha na skrini katika saraka za `images/`
- Maandishi ya alt kwa picha kwa upatikanaji

### Muundo wa Faili

- Masomo yamepitishwa nambari kwa mpangilio (1-getting-started-lessons, 2-js-basics, nk)
- Kila mradi una saraka za `solution/` na mara nyingi `start/` au `your-work/`
- Picha zinahifadhiwa katika saraka maalum za picha za somo `images/`
- Tafsiri zinapatikana katika muundo wa `translations/{language-code}/`

## Ujenzi na Uenezaji

### Uenezaji wa Programu ya Quiz (Azure Static Web Apps)

quiz-app imewekwa kwa ajili ya uenezaji wa Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Inaunda folda ya dist/
# Inaweka kupitia workflow ya GitHub Actions wakati wa kusukuma kwenye main
```

Mipangilio ya Azure Static Web Apps:
- **Mahali pa app**: `/quiz-app`
- **Mahali pa pato**: `dist`
- **Mtiririko wa kazi**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

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
- Miradi ya Vue: `npm run build` huunda vifurushi vya uzalishaji
- Miradi ya static: Hakuna hatua ya ujenzi, hudumu faili moja kwa moja

## Miongozo ya Maombi ya Kuunganisha (Pull Request)

### Muundo wa Kichwa

Tumia vichwa wazi na vinavyoeleza eneo la mabadiliko:
- `[Quiz-app] Ongeza mashindano mapya kwa somo X`
- `[Lesson-3] Rekebisha tahajia kwenye mradi wa terrarium`
- `[Translation] Ongeza tafsiri ya Kihispania kwa somo 5`
- `[Docs] Sasisha maelekezo ya usanidi`

### Ukaguzi Unaotakiwa

Kabla ya kuwasilisha PR:

1. **Ubora wa Msimbo**:
   - Endesha `npm run lint` kwenye saraka za miradi husika
   - Rekebisha makosa yote ya lint na onyo

2. **Uhakiki wa Ujenzi**:
   - Endesha `npm run build` kama inahitajika
   - Hakikisha hakuna hitilafu za ujenzi

3. **Uhakiki wa Viungo**:
   - Jaribu viungo vyote vya markdown
   - Hakiki kumbukumbu za picha zinafanya kazi

4. **Mapitio ya Maudhui**:
   - Soma kwa usahihi tahajia na sarufi
   - Hakikisha mifano ya msimbo ni sahihi na ya kielimu
   - Hakiki tafsiri zinadumisha maana halisi

### Mahitaji ya Mchango

- Kubali CLA ya Microsoft (ukaguzi wa moja kwa moja katika PR ya kwanza)
- Fuata [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Angalia [CONTRIBUTING.md](./CONTRIBUTING.md) kwa miongozo ya kina
- Taja nambari za matatizo katika maelezo ya PR kama zinahusika

### Mchakato wa Mapitio

- PR hupitiwa na waendelezaji na jumuiya
- Uwiano wa uelewa wa kielimu unaangaliwa zaidi
- Mifano ya msimbo inapaswa kufuata mbinu bora za sasa
- Tafsiri hupitiwa kwa usahihi na unafaa wa kitamaduni

## Mfumo wa Tafsiri

### Tafsiri ya Moja kwa Moja

- Inatumia GitHub Actions na mtiririko wa co-op-translator
- Hutoa tafsiri za lugha 50+ moja kwa moja
- Faili za chanzo ziko kwenye saraka kuu
- Faili za tafsiri ziko katika saraka za `translations/{language-code}/`

### Kuongeza Maboresho ya Tafsiri kwa Mkono

1. Tafuta faili katika `translations/{language-code}/`
2. Fanya maboresho huku ukihifadhi muundo
3. Hakikisha mifano ya msimbo inaendelea kufanya kazi
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

## Uardishaji na Utatuzi wa Matatizo

### Matatizo ya Kawaida

**Programu ya quiz haianzi**:
- Angalia toleo la Node.js (inapendekezwa v14+)
- Futa `node_modules` na `package-lock.json`, kisha endesha `npm install` tena
- Angalia mgogoro wa bandari (kawaida: Vite hutumia bandari 5173)

**Seva ya API haianzi**:
- Hakikisha toleo la Node.js ni angalau (node >=10)
- Angalia kama bandari inatumika tayari
- Hakikisha kila tegemezi imewekwa kwa kuendesha `npm install`

**Kiendelezi cha kivinjari hakizimwi**:
- Hakikisha `manifest.json` imeandikwa kwa usahihi
- Angalia konsole ya kivinjari kwa makosa
- Fuata maelekezo maalum ya usakinishaji wa kiendelezi kwa kivinjari husika

**Matatizo ya mradi wa mazumgumzo wa Python**:
- Hakikisha kifurushi cha OpenAI kimewekwa: `pip install openai`
- Hakikisha mazingira ya GITHUB_TOKEN yamewekwa
- Angalia ruhusa za ufikiaji wa Modeli za GitHub

**Docsify haionyeshi nyaraka**:
- Sakinisha docsify-cli kimataifa: `npm install -g docsify-cli`
- Endesha kutoka saraka kuu ya hifadhi
- Hakikisha `docs/_sidebar.md` ipo

### Vidokezo vya Mazingira ya Maendeleo

- Tumia VS Code na nyongeza ya Live Server kwa miradi ya HTML
- Sakinisha nyongeza za ESLint na Prettier kwa upangaji thabiti
- Tumia DevTools za kivinjari kwa uardishaji wa JavaScript
- Kwa miradi ya Vue, sakinisha nyongeza ya Vue DevTools kwa kivinjari

### Mambo ya Kuzingatia Utendaji

- Idadi kubwa ya faili za tafsiri (lugha 50+) hufanya nakala kamili kuwa kubwa
- Tumia nakala nyepesi ikiwa unafanya kazi kwenye maudhui pekee: `git clone --depth 1`
- Tenga tafsiri kutoka kwenye utafutaji ukiwa unafanya kazi na maudhui ya Kiingereza
- Mchakato wa ujenzi unaweza kuwa polepole mara ya kwanza (npm install, Vite build)

## Mambo ya Usalama

### Mazingira ya Mabadiliko ya Mazingira (Environment Variables)

- Funguo za API hazipaswi kuwekwa kwenye hifadhi
- Tumia faili za `.env` (zipo tayari kwenye `.gitignore`)
- Elezea mabadiliko yanayohitajika ya mazingira katika README za miradi

### Miradi ya Python

- Tumia mazingira pepepe (virtual environments): `python -m venv venv`
- Hifadhi tegemezi zikiwa zimeboreshwa
- Tokeni za GitHub zinapaswa kuwa na ruhusa chache zinazohitajika

### Ufikiaji wa Modeli za GitHub

- Haja Tokeni za Ufikiaji wa Kibinafsi (PAT) kwa Modeli za GitHub
- Tokeni zihifadhiwe kama mabadiliko ya mazingira
- Tokeni au nywila zisizowekwa kwenye hifadhi

## Vidokezo Zaidi

### Walengwa wa Mtaala

- Wanaoanza kabisa kwenye maendeleo ya wavuti
- Wanafunzi na wanaojifunza binafsi
- Walimu wanaotumia mtaala darasani
- Maudhui yameundwa kwa upatikanaji na ujenzi wa ujuzi kwa hatua

### Falsafa ya Elimu

- Mbinu ya kujifunza kwa miradi
- Vipimo vya mara kwa mara vya maarifa (maswali)
- Mazoezi ya vitendo ya uandishi wa msimbo
- Mifano halisi ya matumizi duniani
- Lengo ni misingi kabla ya mifumo

### Matunzo ya Hifadhi

- Jamii yenye shughuli ya wanafunzi na wachangiaji
- Sasisho za mara kwa mara za tegemezi na maudhui
- Masuala na mijadala hufuatiliwa na waendelezaji
- Sasisho za tafsiri zinasasishwa kiotomatiki kwa GitHub Actions

### Rasilimali Zinazohusiana

- [Moduli za Microsoft Learn](https://docs.microsoft.com/learn/)
- [Rasilimali za Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inapendekezwa kwa wanafunzi
- Kozi za ziada: AI ya kizazi, Sayansi ya Takwimu, ML, masomo ya IoT yanapatikana

### Kazi na Miradi Maalum

Kwa maelekezo ya kina ya miradi binafsi, rejea faili za README katika:
- `quiz-app/README.md` - programu ya quiz ya Vue 3
- `7-bank-project/README.md` - programu ya benki yenye uthibitisho
- `5-browser-extension/README.md` - maendeleo ya kiendelezi cha kivinjari
- `6-space-game/README.md` - maendeleo ya mchezo wa canvas
- `9-chat-project/README.md` - mradi wa msaidizi wa mazungumzo AI

### Muundo wa Monorepo

Ingawa si monorepo ya kawaida, hifadhi hii ina miradi mingi huru:
- Kila somo ni huru na lina muundo wake
- Miradi haigawani tegemezi
- Fanya kazi kwenye miradi binafsi bila kuathiri mingine
- Nakili hifadhi nzima kwa uzoefu kamili wa mtaala

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Taarifa ya Kutojibika**:
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuwa sahihi, tafadhali fahamu kwamba tafsiri za kiotomatiki zinaweza kuwa na makosa au upotoshaji. Hati ya asili katika lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha kuaminika. Kwa taarifa muhimu, tafsiri ya mtaalamu wa lugha inashauriwa. Hatubebwi na dhamana kwa maelewano au tafsiri potofu zinazotokana na matumizi ya tafsiri hii.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->