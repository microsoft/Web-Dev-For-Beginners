<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "effe56ba51c38d7bdfad1ea38288666b",
  "translation_date": "2025-10-22T15:20:11+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "tl"
}
-->
# Gumawa ng Website ng Resume Gamit ang VSCode.dev

Palawakin ang iyong mga oportunidad sa karera sa pamamagitan ng paggawa ng isang propesyonal na website ng resume na nagpapakita ng iyong mga kakayahan at karanasan sa isang interaktibo at modernong format. Sa halip na magpadala ng tradisyunal na PDF, isipin ang pagbibigay sa mga recruiter ng isang makinis at responsive na website na nagpapakita ng iyong mga kwalipikasyon at kakayahan sa web development.

Ang hands-on na proyektong ito ay magpapalawak ng iyong mga kasanayan sa VSCode.dev habang gumagawa ng isang bagay na tunay na kapaki-pakinabang para sa iyong karera. Mararanasan mo ang kumpletong workflow ng web development – mula sa paglikha ng repository hanggang sa deployment – lahat sa loob ng iyong browser.

Sa pagtatapos ng proyektong ito, magkakaroon ka ng isang propesyonal na online presence na madaling maibahagi sa mga potensyal na employer, ma-update habang lumalago ang iyong mga kakayahan, at ma-customize upang tumugma sa iyong personal na brand. Ito ang uri ng praktikal na proyekto na nagpapakita ng mga tunay na kasanayan sa web development.

## Mga Layunin sa Pag-aaral

Pagkatapos makumpleto ang proyektong ito, magagawa mo ang:

- **Gumawa** at mag-manage ng kumpletong proyekto sa web development gamit ang VSCode.dev
- **Mag-istruktura** ng propesyonal na website gamit ang semantic HTML elements
- **Mag-style** ng responsive layouts gamit ang modernong teknolohiya ng CSS
- **Magpatupad** ng interaktibong features gamit ang basic na web technologies
- **Mag-deploy** ng live na website na ma-access sa pamamagitan ng shareable URL
- **Magpakita** ng best practices sa version control sa buong proseso ng development

## Mga Kinakailangan

Bago simulan ang proyektong ito, tiyakin na mayroon ka ng:

- Isang GitHub account (gumawa ng isa sa [github.com](https://github.com/) kung kinakailangan)
- Natapos na ang VSCode.dev lesson tungkol sa interface navigation at basic operations
- Pangunahing kaalaman sa HTML structure at CSS styling concepts

## Setup ng Proyekto at Paglikha ng Repository

Simulan natin sa pag-set up ng pundasyon ng iyong proyekto. Ang prosesong ito ay sumasalamin sa mga workflow ng tunay na mundo kung saan nagsisimula ang mga proyekto sa tamang initialization ng repository at pagpaplano ng istruktura.

### Hakbang 1: Gumawa ng Iyong GitHub Repository

Ang pag-set up ng dedikadong repository ay nagsisiguro na ang iyong proyekto ay maayos na naka-organize at naka-version control mula sa simula.

1. **Pumunta** sa [GitHub.com](https://github.com) at mag-sign in sa iyong account
2. **I-click** ang berdeng "New" button o ang "+" icon sa kanang itaas na bahagi
3. **Pangalanan** ang iyong repository `my-resume` (o pumili ng personalized na pangalan tulad ng `juan-dela-cruz-resume`)
4. **Magdagdag** ng maikling deskripsyon: "Propesyonal na website ng resume na ginawa gamit ang HTML at CSS"
5. **Piliin** ang "Public" upang gawing accessible ang iyong resume sa mga potensyal na employer
6. **I-check** ang "Add a README file" upang gumawa ng initial na deskripsyon ng proyekto
7. **I-click** ang "Create repository" upang tapusin ang setup

> 💡 **Tip sa Pagpangalan ng Repository**: Gumamit ng mga deskriptibo at propesyonal na pangalan na malinaw na nagpapahiwatig ng layunin ng proyekto. Nakakatulong ito kapag ibinabahagi sa mga employer o sa panahon ng portfolio review.

### Hakbang 2: I-initialize ang Istruktura ng Proyekto

Dahil ang VSCode.dev ay nangangailangan ng kahit isang file upang buksan ang repository, gagawa tayo ng pangunahing HTML file nang direkta sa GitHub bago lumipat sa web editor.

1. **I-click** ang "creating a new file" link sa iyong bagong repository
2. **I-type** ang `index.html` bilang filename
3. **Idagdag** ang initial na HTML structure:

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

4. **Maglagay** ng commit message: "Magdagdag ng initial HTML structure"
5. **I-click** ang "Commit new file" upang i-save ang iyong mga pagbabago

![Paglikha ng initial file sa GitHub](../../../../translated_images/tl/new-file-github.com.c886796d800e8056.png)

**Narito ang nagagawa ng initial setup na ito:**
- **Nag-eestablish** ng tamang HTML5 document structure gamit ang semantic elements
- **Naglalaman** ng viewport meta tag para sa compatibility ng responsive design
- **Nagse-set** ng deskriptibong page title na lumalabas sa browser tabs
- **Lumilikha** ng pundasyon para sa propesyonal na content organization

## Paggawa sa VSCode.dev

Ngayon na ang pundasyon ng iyong repository ay na-set up, lumipat tayo sa VSCode.dev para sa pangunahing development work. Ang web-based editor na ito ay nagbibigay ng lahat ng tools na kailangan para sa propesyonal na web development.

### Hakbang 3: Buksan ang Iyong Proyekto sa VSCode.dev

1. **Pumunta** sa [vscode.dev](https://vscode.dev) sa bagong browser tab
2. **I-click** ang "Open Remote Repository" sa welcome screen
3. **Kopyahin** ang URL ng iyong repository mula sa GitHub at i-paste ito sa input field

   Format: `https://github.com/your-username/my-resume`
   
   *Palitan ang `your-username` ng iyong aktwal na GitHub username*

4. **Pindutin** ang Enter upang i-load ang iyong proyekto

✅ **Indicator ng Tagumpay**: Makikita mo ang mga file ng iyong proyekto sa Explorer sidebar at ang `index.html` na available para i-edit sa pangunahing editor area.

![Proyekto na naka-load sa VSCode.dev](../../../../translated_images/tl/project-on-vscode.dev.e79815a9a95ee7fe.png)

**Ano ang makikita mo sa interface:**
- **Explorer sidebar**: **Ipinapakita** ang mga file ng iyong repository at istruktura ng folder
- **Editor area**: **Ipinapakita** ang content ng napiling file para sa pag-edit
- **Activity bar**: **Nagbibigay** ng access sa mga feature tulad ng Source Control at Extensions
- **Status bar**: **Nagpapakita** ng connection status at impormasyon ng kasalukuyang branch

### Hakbang 4: Gawin ang Nilalaman ng Iyong Resume

Palitan ang placeholder content sa `index.html` ng komprehensibong istruktura ng resume. Ang HTML na ito ang magiging pundasyon para sa propesyonal na presentasyon ng iyong mga kwalipikasyon.

<details>
<summary><b>Kumpletong HTML Resume Structure</b></summary>

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

**Mga gabay sa customization:**
- **Palitan** ang lahat ng placeholder text ng iyong aktwal na impormasyon
- **I-adjust** ang mga seksyon batay sa iyong antas ng karanasan at pokus sa karera
- **Magdagdag** o magtanggal ng mga seksyon kung kinakailangan (hal., Certifications, Volunteer Work, Languages)
- **Isama** ang mga link sa iyong aktwal na mga profile at proyekto

### Hakbang 5: Gumawa ng Mga Suportang File

Ang mga propesyonal na website ay nangangailangan ng maayos na istruktura ng file. Gumawa ng CSS stylesheet at mga configuration file na kinakailangan para sa kumpletong proyekto.

1. **I-hover** ang pangalan ng folder ng iyong proyekto sa Explorer sidebar
2. **I-click** ang "New File" icon (📄+) na lumalabas
3. **Gumawa** ng mga file na ito isa-isa:
   - `style.css` (para sa styling at layout)
   - `codeswing.json` (para sa preview extension configuration)

**Paglikha ng CSS file (`style.css`):**

<details>
<summary><b>Propesyonal na CSS Styling</b></summary>

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

**Paglikha ng configuration file (`codeswing.json`):**

```json
{
    "scripts": [],
    "styles": []
}
```

**Pag-unawa sa mga feature ng CSS:**
- **Gumagamit** ng CSS Grid para sa responsive at propesyonal na layout structure
- **Nagpapatupad** ng modernong color schemes gamit ang gradient headers
- **Naglalaman** ng hover effects at smooth transitions para sa interactivity
- **Nagbibigay** ng responsive design na gumagana sa lahat ng device sizes
- **Nagdadagdag** ng print-friendly styles para sa PDF generation

### Hakbang 6: Mag-install at Mag-configure ng Extensions

Ang mga extension ay nagpapahusay sa iyong development experience sa pamamagitan ng pagbibigay ng live preview capabilities at mas pinahusay na workflow tools. Ang CodeSwing extension ay partikular na kapaki-pakinabang para sa mga proyekto sa web development.

**Pag-install ng CodeSwing Extension:**

1. **I-click** ang Extensions icon (🧩) sa Activity Bar
2. **Maghanap** ng "CodeSwing" sa marketplace search box
3. **Piliin** ang CodeSwing extension mula sa search results
4. **I-click** ang asul na "Install" button

![Pag-install ng CodeSwing extension](../../../../8-code-editor/images/install-extension.gif)

**Ano ang ibinibigay ng CodeSwing:**
- **Nagpapagana** ng live preview ng iyong website habang ini-edit
- **Ipinapakita** ang mga pagbabago sa real-time nang walang manual refresh
- **Sumusuporta** sa iba't ibang uri ng file kabilang ang HTML, CSS, at JavaScript
- **Nagbibigay** ng integrated development environment experience

**Mga agarang resulta pagkatapos ng pag-install:**
Kapag na-install ang CodeSwing, makikita mo ang live preview ng iyong resume website na lumalabas sa editor. Pinapayagan ka nitong makita kung paano eksaktong magmumukha ang iyong site habang gumagawa ng mga pagbabago.

![CodeSwing extension na nagpapakita ng live preview](../../../../translated_images/tl/after-codeswing-extension-pb.0ebddddcf73b5509.png)

**Pag-unawa sa pinahusay na interface:**
- **Split view**: **Ipinapakita** ang iyong code sa isang bahagi at ang live preview sa kabila
- **Real-time updates**: **Nagpapakita** ng mga pagbabago agad habang nagta-type
- **Interactive preview**: **Pinapayagan** kang subukan ang mga link at interaksyon
- **Mobile simulation**: **Nagbibigay** ng testing capabilities para sa responsive design

### Hakbang 7: Version Control at Pag-publish

Ngayon na ang iyong resume website ay kumpleto na, gamitin ang Git upang i-save ang iyong trabaho at gawing available online.

**Pag-commit ng iyong mga pagbabago:**

1. **I-click** ang Source Control icon (🌿) sa Activity Bar
2. **I-review** ang lahat ng file na iyong ginawa at binago sa "Changes" section
3. **I-stage** ang iyong mga pagbabago sa pamamagitan ng pag-click sa "+" icon sa tabi ng bawat file
4. **Maglagay** ng deskriptibong commit message, tulad ng:
   - "Magdagdag ng kumpletong resume website na may responsive design"
   - "Magpatupad ng propesyonal na styling at content structure"
5. **I-click** ang checkmark (✓) upang i-commit at i-push ang iyong mga pagbabago

**Mga halimbawa ng epektibong commit message:**
- "Magdagdag ng propesyonal na resume content at styling"
- "Magpatupad ng responsive design para sa mobile compatibility"
- "I-update ang contact information at project links"

> 💡 **Propesyonal na Tip**: Ang magagandang commit messages ay tumutulong sa pagsubaybay sa ebolusyon ng iyong proyekto at nagpapakita ng atensyon sa detalye – mga katangiang pinahahalagahan ng mga employer.

**Pag-access sa iyong published site:**
Kapag na-commit na, maaari kang bumalik sa iyong GitHub repository gamit ang hamburger menu (☰) sa kaliwang itaas na bahagi. Ang iyong resume website ay ngayon naka-version control at handa na para sa deployment o pagbabahagi.

## Mga Resulta at Susunod na Hakbang

**Congratulations! 🎉** Matagumpay mong nagawa ang isang propesyonal na website ng resume gamit ang VSCode.dev. Ang iyong proyekto ay nagpapakita ng:
**Mga teknikal na kasanayan na ipinakita:**
- **Pamamahala ng repository**: Gumawa at nag-organize ng kumpletong istruktura ng proyekto
- **Web development**: Gumawa ng responsive na website gamit ang modernong HTML5 at CSS3
- **Version control**: Nagpatupad ng tamang Git workflow na may makabuluhang commits
- **Tool proficiency**: Epektibong ginamit ang interface ng VSCode.dev at sistema ng extension

**Mga propesyonal na resulta na naabot:**
- **Online presence**: Isang shareable URL na nagpapakita ng iyong mga kwalipikasyon
- **Modernong format**: Isang interaktibong alternatibo sa tradisyunal na PDF resumes
- **Mga kasanayan na maipapakita**: Kongkretong ebidensya ng iyong kakayahan sa web development
- **Madaling pag-update**: Isang pundasyon na maaari mong patuloy na pagbutihin at i-customize

### Mga Opsyon sa Deployment

Upang gawing accessible ang iyong resume sa mga employer, isaalang-alang ang mga hosting options na ito:

**GitHub Pages (Inirerekomenda):**
1. Pumunta sa Settings ng iyong repository sa GitHub
2. Mag-scroll sa "Pages" section
3. Piliin ang "Deploy from a branch" at piliin ang "main"
4. Ang iyong site ay magiging available sa `https://your-username.github.io/my-resume`

**Mga alternatibong platform:**
- **Netlify**: Automatic deployment na may custom domains
- **Vercel**: Mabilis na deployment na may modernong hosting features
- **GitHub Codespaces**: Development environment na may built-in preview

### Mga Mungkahi para sa Pagpapahusay

Ipagpatuloy ang pag-develop ng iyong mga kasanayan sa pamamagitan ng pagdaragdag ng mga feature na ito:

**Mga teknikal na pagpapabuti:**
- **JavaScript interactivity**: Magdagdag ng smooth scrolling o interaktibong elemento
- **Dark mode toggle**: Magpatupad ng theme switching para sa user preference
- **Contact form**: Pahintulutan ang direktang komunikasyon mula sa mga potensyal na employer
- **SEO optimization**: Magdagdag ng meta tags at structured data para sa mas mahusay na visibility sa search

**Mga pagpapahusay sa nilalaman:**
- **Project portfolio**: Mag-link sa mga GitHub repositories at live demonstrations
- **Skills visualization**: Gumawa ng progress bars o skill rating systems
- **Testimonials section**: Isama ang mga rekomendasyon mula sa mga kasamahan o instructor
- **Blog integration**: Magdagdag ng blog section upang ipakita ang iyong learning journey

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang iyong resume website gamit ang advanced na features na nagpapakita ng propesyonal na kakayahan sa web development at modernong design principles.

**Prompt:** Batay sa iyong umiiral na resume website, ipatupad ang mga advanced na features na ito:
1. Magdagdag ng dark/light theme toggle na may smooth transitions
2. Gumawa ng interaktibong skills section na may animated progress bars
3. Magpatupad ng contact form na may form validation
4. Magdagdag ng projects portfolio section na may hover effects at modal popups
5. Isama ang blog section na may hindi bababa sa 3 sample posts tungkol sa iyong learning journey
6. I-optimize para sa SEO gamit ang tamang meta tags, structured data, at performance
7. I-deploy ang enhanced site gamit ang GitHub Pages o Netlify
8. I-dokumento ang lahat ng bagong features sa iyong README.md na may screenshots

Ang iyong enhanced website ay dapat magpakita ng mastery ng modernong web development practices kabilang ang responsive design, JavaScript interactivity, at propesyonal na deployment workflows.

## Extension ng Hamon

Handa ka bang palawakin pa ang iyong mga kasanayan? Subukan ang mga advanced na hamon na ito:

**📱 Mobile-First Redesign:** Ganap na muling buuin ang iyong site gamit ang mobile-first approach na may CSS Grid at Flexbox

**🔍 SEO Optimization:** Magpatupad ng komprehensibong SEO kabilang ang meta tags, structured data, at performance optimization

**🌐 Multi-language Support:** Magdagdag ng internationalization features upang suportahan ang maraming wika

**📊 Analytics Integration:** Magdagdag ng Google Analytics upang subaybayan ang engagement ng bisita at i-optimize ang iyong content

**🚀 Performance Optimization:** Makamit ang perfect Lighthouse scores sa lahat ng kategorya

## Review at Pag-aaral sa Sarili

Palawakin ang iyong kaalaman gamit ang mga resources na ito:

**Advanced na Mga Feature ng VSCode.dev:**
- [Dokumentasyon ng VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) - Kumpletong gabay sa web-based editing
- [GitHub Codespaces](https://docs.github.com/en/codespaces) - Cloud development environments

**Mga Best Practices sa Web Development:**
- **Responsive Design**: Pag-aralan ang CSS Grid at Flexbox para sa modernong layouts
- **Accessibility**: Alamin ang mga gabay ng WCAG para sa inklusibong disenyo ng web  
- **Performance**: Tuklasin ang mga tool tulad ng Lighthouse para sa optimisasyon  
- **SEO**: Unawain ang mga pangunahing kaalaman sa search engine optimization  

**Propesyonal na Pag-unlad:**  
- **Pagbuo ng Portfolio**: Gumawa ng karagdagang mga proyekto upang maipakita ang iba't ibang kasanayan  
- **Open Source**: Mag-ambag sa mga umiiral na proyekto upang makakuha ng karanasan sa pakikipagtulungan  
- **Networking**: Ibahagi ang iyong website ng resume sa mga komunidad ng developer para sa feedback  
- **Patuloy na Pag-aaral**: Manatiling updated sa mga uso at teknolohiya sa web development  

---

**Ang Iyong Susunod na Hakbang:** Ibahagi ang iyong website ng resume sa mga kaibigan, pamilya, o mentor para sa feedback. Gamitin ang kanilang mga mungkahi upang ulitin at pagandahin ang iyong disenyo. Tandaan, ang proyektong ito ay hindi lamang isang resume – ito ay isang patunay ng iyong pag-unlad bilang isang web developer!

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi eksaktong pagsasalin. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na awtoritatibong pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.