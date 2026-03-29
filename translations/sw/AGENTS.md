# AGENTS.md

## Muhtasari wa Mradi

Huu ni hazina ya mtaala wa elimu kwa kufundisha misingi ya maendeleo ya wavuti kwa wanaoanza. Mtaala huu ni kozi kamili ya wiki 12 iliyotengenezwa na Wataalamu wa Microsoft Cloud, ikijumuisha masomo 24 ya vitendo kuhusu JavaScript, CSS, na HTML.

### Vipengele Vikuu

- **Maudhui ya Elimu**: Masomo 24 yaliyopangwa katika moduli za mradi
- **Miradi ya Vitendo**: Terrarium, Mchezo wa Kuandika, Kiongezi cha Kivinjari, Mchezo wa Anga, Programu ya Benki, Mhariri wa Msimbo, na Msaidizi wa Mazungumzo wa AI
- **Mtihani wa Kuingiliana**: Maswali 48 yenye maswali 3 kila mmoja (vipimo kabla/baada ya somo)
- **Msaada wa Lugha Nyingi**: Tafsiri za moja kwa moja kwa lugha 50+ kupitia GitHub Actions
- **Teknolojia**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (kwa miradi ya AI)

### Miamala

- Hazina ya elimu yenye muundo wa masomo
- Kila folda ya somo ina README, mifano ya msimbo, na suluhisho
- Miradi huru katika folda tofauti (quiz-app, miradi mbalimbali ya somo)
- Mfumo wa tafsiri kutumia GitHub Actions (co-op-translator)
- Nyaraka zinatolewa kupitia Docsify na zinapatikana kama PDF

## Amri za Usanidi

Hazina hii ni kwa ajili ya matumizi ya maudhui ya elimu pekee. Kwa kazi na miradi maalum:

### Usanidi wa Hazina Kuu

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Usanidi wa Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Anzisha server ya maendeleo
npm run build      # Tengeneza kwa ajili ya uzalishaji
npm run lint       # Endesha ESLint
```

### Mradi wa API ya Benki (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Anzisha seva ya API
npm run lint       # Endesha ESLint
npm run format     # Panga kwa Prettier
```

### Miradi ya Kiongezi cha Kivinjari

```bash
cd 5-browser-extension/solution
npm install
# Fuata maelekezo ya upakiaji ya nyongeza za kivinjari maalum
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
# Weka variable ya mazingira ya GITHUB_TOKEN
python api.py
```

## Mchakato wa Maendeleo

### Kwa Wachangiaji wa Maudhui

1. **Fanya fork ya hazina** kwenye akaunti yako ya GitHub
2. **Clone fork yako** kwa ndani
3. **Tengeneza tawi jipya** kwa mabadiliko yako
4. Fanya mabadiliko kwenye maudhui ya somo au mifano ya msimbo
5. Jaribu mabadiliko yoyote ya msimbo katika folda za miradi husika
6. Wasilisha maombi ya pull baada ya kufuata miongozo ya mchango

### Kwa Wanafunzi

1. Fanya fork au clone ya hazina
2. Tembelea folda za masomo kwa mfululizo
3. Soma faili za README kwa kila somo
4. Kamilisha mitihani ya kabla ya somo kwenye https://ff-quizzes.netlify.app/web/
5. Fanya kazi kupitia mifano ya msimbo katika folda za masomo
6. Kamilisha kazi za nyumbani na changamoto
7. Fanya mitihani ya baada ya somo

### Maendeleo ya Moja kwa Moja

- **Nyaraka**: Endesha `docsify serve` kwenye mzizi (bandari 3000)
- **Quiz App**: Endesha `npm run dev` kwenye folda ya quiz-app
- **Miradi**: Tumia VS Code Live Server kwa miradi ya HTML
- **Miradi ya API**: Endesha `npm start` katika folda husika za API

## Maelekezo ya Kujaribu

### Kujaribu Quiz App

```bash
cd quiz-app
npm run lint       # Angalia matatizo ya mtindo wa msimbo
npm run build      # Thibitisha kuwa ujenzi unafanikiwa
```

### Kujaribu API ya Benki

```bash
cd 7-bank-project/api
npm run lint       # Angalia matatizo ya mtindo wa msimbo
node server.js     # Thibitisha seva inaanza bila makosa
```

### Mbinu ya Kujaribu kwa Jumla

- Hii ni hazina ya elimu bila majaribio ya moja kwa moja kamili
- Kujaribu kwa mkono kunaangazia:
  - Mifano ya msimbo inaendesha bila makosa
  - Viungo katika nyaraka vinafanya kazi vizuri
  - Miradi inajengwa kwa mafanikio
  - Mifano inafuata mbinu bora

### Ukaguzi Kabla ya Kuwasilisha

- Endesha `npm run lint` katika folda zilizo na package.json
- Hakiki viungo vya markdown ni sahihi
- Jaribu mifano ya msimbo katika kivinjari au Node.js
- Angalia tafsiri zinadumisha muundo sahihi

## Miongozo ya Mtindo wa Msimbo

### JavaScript

- Tumia sintaksia ya kisasa ya ES6+
- Fuata usanidi wa ESLint uliotolewa katika miradi
- Tumia majina yenye maana kwa mabadiliko na kazi kwa uwazi wa elimu
- Ongeza maelezo ya kuelezea dhana kwa wanafunzi
- Fomatoa kwa kutumia Prettier pale inapopangwa

### HTML/CSS

- Vipengele vya HTML5 vinavyofaa
- Kanuni za muundo unaojibadilisha (responsive)
- Miongozo wazi ya majina ya darasa
- Maelezo yanayobainisha mbinu za CSS kwa wanafunzi

### Python

- Miongozo ya mtindo wa PEP 8
- Mifano wazi, ya elimu ya msimbo
- Vidokezo vya aina ya data pale panaposaidia kujifunza

### Nyaraka za Markdown

- Mpangilio wazi wa vichwa
- Vizuizi vya msimbo na lugha iliyobainishwa
- Viungo kwa rasilimali za ziada
- Picha na skrini katika folda za `images/`
- Maandishi ya alt kwa picha kwa upatikanaji

### Mpangilio wa Faili

- Masomo yamewekwa nambari mfululizo (1-getting-started-lessons, 2-js-basics, n.k.)
- Kila mradi una folda ya `solution/` na mara nyingi `start/` au `your-work/`
- Picha zimehifadhiwa katika folda maalum za masomo `images/`
- Tafsiri ziko katika muundo wa folda `translations/{language-code}/`

## Ujenzi na Utoaji

### Utoaji wa Quiz App (Azure Static Web Apps)

Quiz-app imewekwa kwa ajili ya utoaji kwenye Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Inaunda folda ya dist/
# Inatekeleza kupitia mtiririko wa kazi wa GitHub Actions wakati wa kusukuma kwenye main
```

Mabadiliko ya Azure Static Web Apps:
- **Mahali pa App**: `/quiz-app`
- **Mahali pa Toa**: `dist`
- **Mchakato wa Kazi**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Uundaji wa PDF wa Nyaraka

```bash
npm install                    # Sakinisha docsify-to-pdf
npm run convert               # Tengeneza PDF kutoka kwa docs
```

### Nyaraka za Docsify

```bash
npm install -g docsify-cli    # Sambaza Docsify kimataifa
docsify serve                 # Tumikia kwenye localhost:3000
```

### Ujenzi wa Miradi Maalum

Kila folda ya mradi itaweza kuwa na mchakato wake wa ujenzi:
- Miradi ya Vue: `npm run build` huunda pakiti za uzalishaji
- Miradi ya static: Hakuna hatua ya ujenzi, hudumishwa faili moja kwa moja

## Miongozo ya Maombi ya Pull

### Muundo wa Kichwa

Tumia vichwa wazi, vinavyoelezea mabadiliko yaliyofanywa:
- `[Quiz-app] Ongeza mtihani mpya kwa somo X`
- `[Lesson-3] Rekebisha typo katika mradi wa terrarium`
- `[Translation] Ongeza tafsiri ya Kihispania kwa somo 5`
- `[Docs] Sasisha maelekezo ya usanidi`

### Ukaguzi unaohitajika

Kabla ya kuwasilisha PR:

1. **Ubora wa Msimbo**:
   - Endesha `npm run lint` katika folda za miradi zilizoathirika
   - Rekebisha makosa na tahadhari zote za lint

2. **Uhakiki wa Ujenzi**:
   - Endesha `npm run build` kama inahitajika
   - Hakikisha hakuna makosa ya ujenzi

3. **Uthibitisho wa Viungo**:
   - Jaribu viungo vyote vya markdown
   - Hakiki rejea za picha zinafanya kazi

4. **Ukaguzi wa Maudhui**:
   - Soma kwa makini spelling na sarufi
   - Hakikisha mifano ya msimbo ni sahihi na ya elimu
   - Thibitisha tafsiri zinahifadhi maana asili

### Masharti ya Mchango

- Kubali Microsoft CLA (ukaguzi wa moja kwa moja kwenye PR ya kwanza)
- Fuata [Kanuni ya Maadili ya Chanzo Huria ya Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Angalia [CONTRIBUTING.md](./CONTRIBUTING.md) kwa miongozo ya kina
- Taja nambari za masuala katika maelezo ya PR ikiwa zinahitajika

### Mchakato wa Ukaguzi

- PR zinakaguliwa na wasimamizi na jamii
- Uwazekano wa elimu unazingatiwa
- Mifano ya msimbo inapaswa kufuata mbinu bora za sasa
- Tafsiri zinakaguliwa kwa usahihi na kuzingatia tamaduni

## Mfumo wa Tafsiri

### Tafsiri za Moja kwa Moja

- Inatumia GitHub Actions na mtiririko wa kazi wa co-op-translator
- Hutoa tafsiri za lugha 50+ kiotomatiki
- Faili za asili ziko katika folda kuu
- Faili zilizotafsiriwa ziko katika folda `translations/{language-code}/`

### Kuongeza Maboresho ya Tafsiri kwa Mikono

1. Tafuta faili katika `translations/{language-code}/`
2. Fanya maboresho huku ukidumisha muundo
3. Hakikisha mifano ya msimbo inabaki pia kufanya kazi
4. Jaribu maudhui yoyote ya mtihani yaliyoko kwa lugha hiyo

### Meta Data ya Tafsiri

Faili zilizotafsiriwa zina kichwa cha meta data:
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

## Utambuzi na Utatuzi wa Matatizo

### Masuala Yaanayojitokeza Mara kwa Mara

**Quiz app haianzi**:
- Hakiki toleo la Node.js (v14+ inapendekezwa)
- Futa `node_modules` na `package-lock.json`, kisha endesha `npm install` tena
- Hakiki migongano ya bandari (Vite kwa kawaida hutumia bandari 5173)

**Seva ya API haishiriki**:
- Hakiki toleo la Node.js linakidhi angalau (node >=10)
- Angalia kama bandari tayari inatumika
- Hakikisha utegemezi wote umewekwa kwa kutumia `npm install`

**Kiongezi cha kivinjari hakitolei mzigo**:
- Hakiki muundo wa manifest.json upo sawa
- Hakiki vibao vya makosa (console) vya kivinjari
- Fuata maelekezo maalum ya usakinishaji wa kiongezi cha kivinjari

**Matatizo ya mradi wa mazungumzo ya Python**:
- Hakikisha kifurushi cha OpenAI kimesakinishwa: `pip install openai`
- Hakiki kwamba variable ya mazingira GITHUB_TOKEN imewekwa
- Angalia ruhusa za ufikiaji wa GitHub Models

**Docsify haiservi nyaraka**:
- Sakinisha docsify-cli kitaifa: `npm install -g docsify-cli`
- Endesha kutoka kwa mzizi wa hazina
- Hakiki kwamba `docs/_sidebar.md` ipo

### Vidokezo vya Mazingira ya Maendeleo

- Tumia VS Code na programu-jalizi ya Live Server kwa miradi ya HTML
- Sakinisha programu-jalizi za ESLint na Prettier kwa ulinganisho mzuri wa fomati
- Tumia DevTools za kivinjari kwa utambuzi wa makosa ya JavaScript
- Kwa miradi ya Vue, sakinisha programu-jalizi ya Vue DevTools ya kivinjari

### Mambo ya Kufikiria Kuhusu Utendaji

- Idadi kubwa ya faili zilizotafsiriwa (lugha 50+) inafanya kloni kamili kuwa kubwa
- Tumia shallow clone ikiwa unafanya kazi na maudhui pekee: `git clone --depth 1`
- Epuka tafsiri katika utafutaji wakati wa kazi za Kiingereza
- Michakato ya ujenzi inaweza kuchelewa mara ya kwanza (npm install, ujenzi wa Vite)

## Mambo ya Usalama

### Mabadiliko ya Mazingira

- Funguo za API hazipaswi kuwekwa kwenye hazina
- Tumia faili `.env` (zimeorodheshwa tayari katika `.gitignore`)
- Elezea mabadiliko ya mazingira yanayohitajika katika README za miradi

### Miradi ya Python

- Tumia mazingira ya virtual: `python -m venv venv`
- Shikilia utegemezi umeboreshwa
- Tokeni za GitHub ziwe na ruhusa ndogo zinazohitajika pekee

### Ufikiaji wa GitHub Models

- Tokeni za Ufikiaji wa Binafsi (PAT) zinahitajika kwa GitHub Models
- Tokeni zipo hifadhiwa kama mabadiliko ya mazingira
- Kamwe usiweka tokeni au vitambulisho kwenye hazina

## Vidokezo Zaidi

### Hadhira Lengwa

- Waanzilishi kamili wa maendeleo ya wavuti
- Wanafunzi na wanaojifunza peke yao
- Walimu wanaotumia mtaala darasani
- Maudhui yameundwa kwa upatikanaji na ukuaji wa ujuzi polepole

### Falsafa ya Elimu

- Mbinu za kujifunza kwa mradi
- Vipimo vya mara kwa mara vya maarifa (quiz)
- Mazoezi ya msimbo kwa vitendo
- Mifano ya matumizi halisi
- Kuzingatia misingi kabla ya fremu za kazi

### Matengenezo ya Hazina

- Jamii yenye shughuli za wanafunzi na wachangiaji
- Sasisho za mara kwa mara vya utegemezi na maudhui
- Masuala na majadiliano yanasimamiwa na wasimamizi
- Sasisho za tafsiri za moja kwa moja kupitia GitHub Actions

### Rasilimali Zinazohusiana

- [Moduli za Microsoft Learn](https://docs.microsoft.com/learn/)
- [Rasilimali za Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) inapendekezwa kwa wanafunzi
- Kozi za ziada: AI Inayotengeneza, Sayansi ya Data, ML, na mtaala wa IoT upo

### Kufanya Kazi na Miradi Maalum

Kwa maelekezo ya undani kuhusu miradi binafsi, rejelea faili za README katika:
- `quiz-app/README.md` - Programu ya quiz ya Vue 3
- `7-bank-project/README.md` - Programu ya benki yenye uthibitishaji
- `5-browser-extension/README.md` - Maendeleo ya kiongezi cha kivinjari
- `6-space-game/README.md` - Uundaji wa mchezo wa Canvas
- `9-chat-project/README.md` - Mradi wa msaidizi wa mazungumzo wa AI

### Muundo wa Monorepo

Ingawa si monorepo ya kawaida, hazina hii ina miradi huru mingi:
- Kila somo ni huru
- Miradi haiwasiliani katika utegemezi
- Fanya kazi kwenye miradi binafsi bila kuathiri mingine
- Clone hazina nzima kwa uzoefu wa mtaala kamili

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Tangazo la kutokujali**:
Nyaraka hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kwamba tafsiri za kiotomatiki zinaweza kuwa na makosa au utata. Nyaraka ya asili kwa lugha yake ya asili inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatuwajibiki kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->