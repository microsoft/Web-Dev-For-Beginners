<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "effe56ba51c38d7bdfad1ea38288666b",
  "translation_date": "2025-10-24T19:13:39+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "sw"
}
-->
# Unda Tovuti ya Resume Kutumia VSCode.dev

Badilisha matarajio yako ya kazi kwa kujenga tovuti ya kitaalamu ya resume inayowasilisha ujuzi na uzoefu wako kwa njia ya kisasa na ya kuvutia. Badala ya kutuma PDF za kawaida, fikiria kuwapa waajiri tovuti maridadi na inayojibadilisha kulingana na kifaa, inayodhihirisha sifa zako na uwezo wako wa maendeleo ya wavuti.

Kazi hii ya vitendo itakusaidia kutumia ujuzi wako wa VSCode.dev huku ukitengeneza kitu chenye manufaa halisi kwa kazi yako. Utapitia mchakato mzima wa maendeleo ya wavuti – kuanzia kuunda hifadhi hadi kupeleka – yote ndani ya kivinjari chako.

Kwa kukamilisha mradi huu, utakuwa na uwepo wa mtandaoni wa kitaalamu ambao unaweza kushirikishwa kwa urahisi na waajiri watarajiwa, kusasishwa kadri ujuzi wako unavyokua, na kubadilishwa ili kuendana na chapa yako binafsi. Hii ni aina ya mradi wa vitendo unaoonyesha ujuzi halisi wa maendeleo ya wavuti.

## Malengo ya Kujifunza

Baada ya kukamilisha kazi hii, utaweza:

- **Kuunda** na kusimamia mradi kamili wa maendeleo ya wavuti ukitumia VSCode.dev
- **Kujenga** tovuti ya kitaalamu ukitumia vipengele vya HTML vya kimantiki
- **Kustaili** muundo unaojibadilisha kwa kutumia mbinu za kisasa za CSS
- **Kutumia** vipengele vya maingiliano ukitumia teknolojia za msingi za wavuti
- **Kupeleka** tovuti ya moja kwa moja inayoweza kufikiwa kupitia URL inayoshirikika
- **Kuonyesha** mbinu bora za kudhibiti toleo wakati wa mchakato wa maendeleo

## Mahitaji ya Awali

Kabla ya kuanza kazi hii, hakikisha una:

- Akaunti ya GitHub (unda moja kwenye [github.com](https://github.com/) ikiwa unahitaji)
- Kukamilisha somo la VSCode.dev linalohusu urambazaji wa kiolesura na operesheni za msingi
- Uelewa wa msingi wa muundo wa HTML na dhana za ustaili wa CSS

## Kuanzisha Mradi na Kuunda Hifadhi

Tuanzishe msingi wa mradi wako. Mchakato huu unafanana na mtiririko wa kazi halisi ambapo miradi huanza na uanzishaji sahihi wa hifadhi na upangaji wa muundo.

### Hatua ya 1: Unda Hifadhi Yako ya GitHub

Kuanzisha hifadhi maalum kunahakikisha mradi wako umeandaliwa vizuri na kudhibitiwa toleo tangu mwanzo.

1. **Tembelea** [GitHub.com](https://github.com) na uingie kwenye akaunti yako
2. **Bonyeza** kitufe cha kijani "New" au ikoni ya "+" kwenye kona ya juu kulia
3. **Taja** hifadhi yako `my-resume` (au chagua jina la kibinafsi kama `john-smith-resume`)
4. **Ongeza** maelezo mafupi: "Tovuti ya kitaalamu ya resume iliyojengwa kwa HTML na CSS"
5. **Chagua** "Public" ili kufanya resume yako ipatikane kwa waajiri watarajiwa
6. **Angalia** "Add a README file" ili kuunda maelezo ya awali ya mradi
7. **Bonyeza** "Create repository" ili kukamilisha uanzishaji

> 💡 **Kidokezo cha Kutaja Hifadhi**: Tumia majina yanayoelezea, ya kitaalamu yanayoonyesha wazi madhumuni ya mradi. Hii husaidia wakati wa kushirikisha na waajiri au wakati wa ukaguzi wa portfolio.

### Hatua ya 2: Anzisha Muundo wa Mradi

Kwa kuwa VSCode.dev inahitaji angalau faili moja kufungua hifadhi, tutaunda faili yetu kuu ya HTML moja kwa moja kwenye GitHub kabla ya kubadilisha kwa mhariri wa wavuti.

1. **Bonyeza** kiungo cha "creating a new file" kwenye hifadhi yako mpya
2. **Andika** `index.html` kama jina la faili
3. **Ongeza** muundo huu wa awali wa HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <h1>Your Name</h1>
    <p>Professional Resume Website</p>
</body>
</html>
```

4. **Andika** ujumbe wa kujitolea: "Ongeza muundo wa awali wa HTML"
5. **Bonyeza** "Commit new file" ili kuhifadhi mabadiliko yako

![Kuunda faili ya awali kwenye GitHub](../../../../translated_images/new-file-github.com.c886796d800e8056561829a181be1382c5303da9d902d8b2dd82b68a4806e21f.sw.png)

**Hiki ndicho uanzishaji huu wa awali unakamilisha:**
- **Unaunda** muundo sahihi wa hati ya HTML5 na vipengele vya kimantiki
- **Unajumuisha** tagi ya meta ya viewport kwa utangamano wa muundo unaojibadilisha
- **Unaweka** kichwa cha ukurasa kinachoonekana kwenye tabo za kivinjari
- **Unaunda** msingi wa upangaji wa maudhui ya kitaalamu

## Kufanya Kazi Ndani ya VSCode.dev

Sasa kwa kuwa msingi wa hifadhi yako umeanzishwa, hebu tubadilishe kwa VSCode.dev kwa kazi kuu ya maendeleo. Mhariri huu wa wavuti unatoa zana zote zinazohitajika kwa maendeleo ya wavuti ya kitaalamu.

### Hatua ya 3: Fungua Mradi Wako Kwenye VSCode.dev

1. **Tembelea** [vscode.dev](https://vscode.dev) kwenye tabo mpya ya kivinjari
2. **Bonyeza** "Open Remote Repository" kwenye skrini ya kukaribisha
3. **Nakili** URL ya hifadhi yako kutoka GitHub na ubandike kwenye kisanduku cha ingizo

   Muundo: `https://github.com/your-username/my-resume`
   
   *Badilisha `your-username` na jina halisi la mtumiaji wa GitHub*

4. **Bonyeza** Enter ili kupakia mradi wako

✅ **Kiashiria cha mafanikio**: Unapaswa kuona faili za mradi wako kwenye upau wa kando wa Explorer na `index.html` ikipatikana kwa kuhariri kwenye eneo kuu la mhariri.

![Mradi umepakiwa kwenye VSCode.dev](../../../../translated_images/project-on-vscode.dev.e79815a9a95ee7feac72ebe5c941c91279716be37c575dbdbf2f43bea2c7d8b6.sw.png)

**Unachokiona kwenye kiolesura:**
- **Upau wa kando wa Explorer**: **Unaonyesha** faili za hifadhi yako na muundo wa folda
- **Eneo la mhariri**: **Linaonyesha** maudhui ya faili zilizochaguliwa kwa kuhariri
- **Upau wa shughuli**: **Unatoa** ufikiaji wa vipengele kama Udhibiti wa Chanzo na Viendelezi
- **Upau wa hali**: **Unaonyesha** hali ya muunganisho na taarifa za tawi la sasa

### Hatua ya 4: Jenga Maudhui ya Resume Yako

Badilisha maudhui ya mfano kwenye `index.html` na muundo kamili wa resume. HTML hii inatoa msingi wa uwasilishaji wa kitaalamu wa sifa zako.

<details>
<summary><b>Muundo Kamili wa Resume ya HTML</b></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <header id="header">
        <h1>Your Full Name</h1>
        <hr>
        <p class="role">Your Professional Title</p>
        <hr>
    </header>
    
    <main>
        <article id="mainLeft">
            <section>
                <h2>CONTACT</h2>
                <p>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:your.email@domain.com">your.email@domain.com</a>
                </p>
                <p>
                    <i class="fab fa-github" aria-hidden="true"></i>
                    <a href="https://github.com/your-username">github.com/your-username</a>
                </p>
                <p>
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                    <a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a>
                </p>
            </section>
            
            <section>
                <h2>SKILLS</h2>
                <ul>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control (Git)</li>
                    <li>Problem Solving</li>
                </ul>
            </section>
            
            <section>
                <h2>EDUCATION</h2>
                <h3>Your Degree or Certification</h3>
                <p>Institution Name</p>
                <p>Start Date - End Date</p>
            </section>
        </article>
        
        <article id="mainRight">
            <section>
                <h2>ABOUT</h2>
                <p>Write a compelling summary that highlights your passion for web development, key achievements, and career goals. This section should give employers insight into your personality and professional approach.</p>
            </section>
            
            <section>
                <h2>WORK EXPERIENCE</h2>
                <div class="job">
                    <h3>Job Title</h3>
                    <p class="company">Company Name | Start Date – End Date</p>
                    <ul>
                        <li>Describe a key accomplishment or responsibility</li>
                        <li>Highlight specific skills or technologies used</li>
                        <li>Quantify impact where possible (e.g., "Improved efficiency by 25%")</li>
                    </ul>
                </div>
                
                <div class="job">
                    <h3>Previous Job Title</h3>
                    <p class="company">Previous Company | Start Date – End Date</p>
                    <ul>
                        <li>Focus on transferable skills and achievements</li>
                        <li>Demonstrate growth and learning progression</li>
                        <li>Include any leadership or collaboration experiences</li>
                    </ul>
                </div>
            </section>
            
            <section>
                <h2>PROJECTS</h2>
                <div class="project">
                    <h3>Project Name</h3>
                    <p>Brief description of what the project accomplishes and technologies used.</p>
                    <a href="#" target="_blank">View Project</a>
                </div>
            </section>
        </article>
    </main>
</body>
</html>
```
</details>

**Mwongozo wa ubinafsishaji:**
- **Badilisha** maandishi yote ya mfano na taarifa zako halisi
- **Rekebisha** sehemu kulingana na kiwango chako cha uzoefu na mwelekeo wa kazi
- **Ongeza** au ondoa sehemu kama inavyohitajika (mfano, Vyeti, Kazi za Kujitolea, Lugha)
- **Jumuisha** viungo vya wasifu wako halisi na miradi

### Hatua ya 5: Unda Faili Zinazosaidia

Tovuti za kitaalamu zinahitaji muundo wa faili uliopangwa. Unda stylesheet ya CSS na faili za usanidi zinazohitajika kwa mradi kamili.

1. **Hover** juu ya jina la folda ya mradi wako kwenye upau wa kando wa Explorer
2. **Bonyeza** ikoni ya "New File" (📄+) inayojitokeza
3. **Unda** faili hizi moja baada ya nyingine:
   - `style.css` (kwa ustaili na muundo)
   - `codeswing.json` (kwa usanidi wa kiendelezi cha hakikisho)

**Kuunda faili ya CSS (`style.css`):**

<details>
<summary><b>Ustaili wa CSS wa Kitaalamu</b></summary>

```css
/* Modern Resume Styling */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    background-color: #f9f9f9;
}

/* Header Styling */
header {
    text-align: center;
    margin-bottom: 3em;
    padding: 2em;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 3em;
    letter-spacing: 0.1em;
    margin-bottom: 0.2em;
    font-weight: 300;
}

.role {
    font-size: 1.3em;
    font-weight: 300;
    margin: 1em 0;
}

/* Main Content Layout */
main {
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 3em;
    margin-top: 3em;
    background: white;
    padding: 2em;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Typography */
h2 {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 1em;
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 0.3em;
}

h3 {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.5em;
    color: #444;
}

/* Section Styling */
section {
    margin-bottom: 2.5em;
}

#mainLeft {
    border-right: 1px solid #e0e0e0;
    padding-right: 2em;
}

/* Contact Links */
section a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
}

section a:hover {
    color: #764ba2;
    text-decoration: underline;
}

/* Icons */
i {
    margin-right: 0.8em;
    width: 20px;
    text-align: center;
    color: #667eea;
}

/* Lists */
ul {
    list-style: none;
    padding-left: 0;
}

li {
    margin: 0.5em 0;
    padding: 0.3em 0;
    position: relative;
}

li:before {
    content: "▸";
    color: #667eea;
    margin-right: 0.5em;
}

/* Work Experience */
.job, .project {
    margin-bottom: 2em;
    padding-bottom: 1.5em;
    border-bottom: 1px solid #f0f0f0;
}

.company {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5em;
}

/* Responsive Design */
@media (max-width: 768px) {
    main {
        grid-template-columns: 1fr;
        gap: 2em;
    }
    
    #mainLeft {
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
        padding-right: 0;
        padding-bottom: 2em;
    }
    
    h1 {
        font-size: 2.2em;
    }
    
    body {
        padding: 10px;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
        font-size: 12pt;
    }
    
    header {
        background: none;
        color: black;
        box-shadow: none;
    }
    
    main {
        box-shadow: none;
    }
}
```
</details>

**Kuunda faili ya usanidi (`codeswing.json`):**

```json
{
    "scripts": [],
    "styles": []
}
```

**Kuelewa vipengele vya CSS:**
- **Inatumia** CSS Grid kwa muundo wa kitaalamu unaojibadilisha
- **Inatekeleza** mpangilio wa rangi za kisasa na vichwa vya gradient
- **Inajumuisha** athari za hover na mabadiliko laini kwa maingiliano
- **Inatoa** muundo unaojibadilisha unaofanya kazi kwenye saizi zote za kifaa
- **Inaongeza** mitindo inayofaa kuchapisha kwa kizazi cha PDF

### Hatua ya 6: Sakinisha na Sanidi Viendelezi

Viendelezi vinaboresha uzoefu wako wa maendeleo kwa kutoa uwezo wa hakikisho la moja kwa moja na zana bora za mtiririko wa kazi. Kiendelezi cha CodeSwing ni muhimu sana kwa miradi ya maendeleo ya wavuti.

**Kusakinisha Kiendelezi cha CodeSwing:**

1. **Bonyeza** ikoni ya Viendelezi (🧩) kwenye Upau wa Shughuli
2. **Tafuta** "CodeSwing" kwenye kisanduku cha utafutaji cha soko
3. **Chagua** kiendelezi cha CodeSwing kutoka kwa matokeo ya utafutaji
4. **Bonyeza** kitufe cha bluu cha "Install"

![Kusakinisha kiendelezi cha CodeSwing](../../../../8-code-editor/images/install-extension.gif)

**CodeSwing inatoa nini:**
- **Inaruhusu** hakikisho la moja kwa moja la tovuti yako unavyohariri
- **Inaonyesha** mabadiliko kwa wakati halisi bila kuhitaji kuhuisha kwa mikono
- **Inasaidia** aina mbalimbali za faili ikiwa ni pamoja na HTML, CSS, na JavaScript
- **Inatoa** uzoefu wa mazingira ya maendeleo yaliyojumuishwa

**Matokeo ya haraka baada ya usakinishaji:**
Mara tu CodeSwing itakaposakinishwa, utaona hakikisho la moja kwa moja la tovuti yako ya resume likijitokeza kwenye mhariri. Hii inakuwezesha kuona jinsi tovuti yako inavyoonekana unavyofanya mabadiliko.

![Kiendelezi cha CodeSwing kikionyesha hakikisho la moja kwa moja](../../../../translated_images/after-codeswing-extension-pb.0ebddddcf73b550994947a9084e35e2836c713ae13839d49628e3c764c1cfe83.sw.png)

**Kuelewa kiolesura kilichoboreshwa:**
- **Muonekano wa mgawanyiko**: **Unaonyesha** msimbo wako upande mmoja na hakikisho la moja kwa moja upande mwingine
- **Sasisho za wakati halisi**: **Zinaonyesha** mabadiliko mara moja unapoandika
- **Hakikisho la maingiliano**: **Linaruhusu** kujaribu viungo na maingiliano
- **Simulizi ya simu**: **Inatoa** uwezo wa kupima muundo unaojibadilisha

### Hatua ya 7: Udhibiti wa Toleo na Uchapishaji

Sasa kwa kuwa tovuti yako ya resume imekamilika, tumia Git kuhifadhi kazi yako na kuifanya ipatikane mtandaoni.

**Kujitolea mabadiliko yako:**

1. **Bonyeza** ikoni ya Udhibiti wa Chanzo (🌿) kwenye Upau wa Shughuli
2. **Kagua** faili zote ulizounda na kurekebisha kwenye sehemu ya "Changes"
3. **Stage** mabadiliko yako kwa kubonyeza ikoni ya "+" karibu na kila faili
4. **Andika** ujumbe wa kujitolea unaoelezea, kama:
   - "Ongeza tovuti kamili ya resume na muundo unaojibadilisha"
   - "Tekeleza ustaili wa kitaalamu na muundo wa maudhui"
5. **Bonyeza** alama ya tiki (✓) ili kujitolea na kusukuma mabadiliko yako

**Mifano ya ujumbe wa kujitolea bora:**
- "Ongeza maudhui ya resume ya kitaalamu na ustaili"
- "Tekeleza muundo unaojibadilisha kwa utangamano wa simu"
- "Sasisha taarifa za mawasiliano na viungo vya miradi"

> 💡 **Kidokezo cha Kitaalamu**: Ujumbe mzuri wa kujitolea husaidia kufuatilia mabadiliko ya mradi wako na kuonyesha umakini wa maelezo – sifa ambazo waajiri wanathamini.

**Kupata tovuti yako iliyochapishwa:**
Mara tu unapojitolea, unaweza kurudi kwenye hifadhi yako ya GitHub ukitumia menyu ya hamburger (☰) kwenye kona ya juu kushoto. Tovuti yako ya resume sasa inadhibitiwa toleo na iko tayari kupelekwa au kushirikishwa.

## Matokeo na Hatua Zifuatazo

**Hongera! 🎉** Umefanikiwa kuunda tovuti ya kitaalamu ya resume ukitumia VSCode.dev. Mradi wako unaonyesha:
**Ujuzi wa kiufundi ulioonyeshwa:**
- **Usimamizi wa hifadhi**: Umeunda na kupanga muundo kamili wa mradi
- **Maendeleo ya wavuti**: Umejenga tovuti inayojibadilisha ukitumia HTML5 na CSS3 ya kisasa
- **Udhibiti wa toleo**: Umetekeleza mtiririko sahihi wa Git na ujumbe wa kujitolea wa maana
- **Ustadi wa zana**: Umetumia kwa ufanisi kiolesura cha VSCode.dev na mfumo wa viendelezi

**Matokeo ya kitaalamu yaliyopatikana:**
- **Uwepo wa mtandaoni**: URL inayoshirikika inayowasilisha sifa zako
- **Muundo wa kisasa**: Njia mbadala ya kuvutia ya resume za PDF za kawaida
- **Ujuzi unaoonekana**: Ushahidi halisi wa uwezo wako wa maendeleo ya wavuti
- **Usasishaji rahisi**: Msingi unaoweza kuboreshwa na kubadilishwa kila wakati

### Chaguzi za Upelekwaji

Ili kufanya resume yako ipatikane kwa waajiri, zingatia chaguzi hizi za kuhifadhi:

**GitHub Pages (Inapendekezwa):**
1. Nenda kwenye Mipangilio ya hifadhi yako kwenye GitHub
2. Tembea hadi sehemu ya "Pages"
3. Chagua "Deploy from a branch" na chagua "main"
4. Tovuti yako itapatikana kwenye `https://your-username.github.io/my-resume`

**Majukwaa mbadala:**
- **Netlify**: Upelekwaji wa kiotomatiki na vikoa maalum
- **Vercel**: Upelekwaji wa haraka na vipengele vya kisasa vya kuhifadhi
- **GitHub Codespaces**: Mazingira ya maendeleo yenye hakikisho lililojengwa ndani

### Mapendekezo ya Uboreshaji

Endelea kukuza ujuzi wako kwa kuongeza vipengele hivi:

**Uboreshaji wa kiufundi:**
- **Maingiliano ya JavaScript**: Ongeza kusogeza laini au vipengele vya maingiliano
- **Kubadilisha hali ya giza**: Tekeleza kubadilisha mandhari kwa upendeleo wa mtumiaji
- **Fomu ya mawasiliano**: Ruhusu mawasiliano ya moja kwa moja kutoka kwa waajiri watarajiwa
- **Uboreshaji wa SEO**: Ongeza tagi za meta na data iliyopangwa kwa mwonekano bora wa utafutaji

**Uboreshaji wa maudhui:**
- **Portfolio ya miradi**: Unganisha na hifadhi za GitHub na maonyesho ya moja kwa moja
- **Uwasilishaji wa ujuzi**: Unda upau wa maendeleo au mifumo ya ukadiriaji wa ujuzi
- **Sehemu ya ushuhuda**: Jumuisha mapendekezo kutoka kwa wenzako au wakufunzi
- **Muungano wa blogu**: Ongeza sehemu ya blogu kuonyesha safari yako ya kujifunza

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Boresha tovuti yako ya resume kwa vipengele vya hali ya juu vinavyoonyesha uwezo wa kitaalamu wa maendeleo ya wavuti na kanuni za kisasa za muundo.

**Maelekezo:** Ukijenga juu ya tovuti yako ya resume iliyopo, tekeleza vipengele hivi vya hali ya juu:
1. Ongeza kubadilisha mandhari ya giza/nuru na mabadiliko laini
2. Unda sehemu ya ujuzi wa maingiliano yenye upau wa maendeleo unaoonyesha michoro
3. Tekeleza fomu ya mawasiliano yenye uthibitishaji wa fomu
4. Ongeza sehemu ya portfolio ya miradi yenye athari za hover na popups za modal
5. Jumuisha sehemu ya blogu yenye angalau machapisho 3 ya mfano kuhusu safari yako ya kujifunza
6. Boresha SEO kwa tagi sahihi za meta, data iliyopangwa, na utendaji
7. Peleka tovuti iliyoboreshwa ukitumia GitHub Pages au Netlify
8. Andika maelezo ya vipengele vyote vipya kwenye README.md yako na picha za skrini

Tovuti yako iliyoboreshwa inapaswa kuonyesha umahiri wa mazoea ya kisasa ya maendeleo ya wavuti ikiwa ni pamoja na muundo unaojibadilisha, maingiliano ya JavaScript, na mtiririko wa kazi wa
- **Ufikiaji**: Jifunze miongozo ya WCAG kwa muundo wa wavuti unaojumuisha kila mtu  
- **Utendaji**: Chunguza zana kama Lighthouse kwa uboreshaji  
- **SEO**: Elewa misingi ya uboreshaji wa injini za utafutaji  

**Maendeleo ya Kitaaluma:**  
- **Ujenzi wa Portfolio**: Tengeneza miradi ya ziada kuonyesha ujuzi tofauti  
- **Chanzo Huria**: Changia miradi iliyopo ili kupata uzoefu wa kushirikiana  
- **Mitandao**: Shiriki tovuti yako ya wasifu katika jumuiya za watengenezaji kwa maoni  
- **Kujifunza Endelevu**: Endelea kufuatilia mitindo na teknolojia za maendeleo ya wavuti  

---

**Hatua Zako Zifuatazo:** Shiriki tovuti yako ya wasifu na marafiki, familia, au washauri kwa maoni. Tumia mapendekezo yao kuboresha na kuboresha muundo wako. Kumbuka, mradi huu si tu wasifu – ni onyesho la ukuaji wako kama mtengenezaji wa wavuti!

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.