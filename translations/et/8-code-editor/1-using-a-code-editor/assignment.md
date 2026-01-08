<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "effe56ba51c38d7bdfad1ea38288666b",
  "translation_date": "2026-01-08T09:05:05+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "et"
}
-->
# Loo CV veebileht kasutades VSCode.dev

Muuda oma karjääriväljavaateid, luues professionaalse CV veebilehe, mis tutvustab sinu oskusi ja kogemusi interaktiivses, moodsas vormingus. Traditsiooniliste PDF-de saatmise asemel kujuta ette, et võimaldad värbajatel kasutada stiilset, reageerivat veebilehte, mis demonstreerib nii sinu kvalifikatsiooni kui ka veebiarenduse võimeid.

See praktiline ülesanne paneb proovile kõik sinu VSCode.dev oskused, luues samal ajal midagi tõeliselt kasulikku sinu karjääri jaoks. Sa koged kogu veebiarenduse tööd — alates hoidla loomisest kuni juurutamiseni — kõik otse brauseris.

Selle projekti lõpetamisel on sul olemas professionaalne veebipõhine kohalolek, mida saab kergesti jagada potentsiaalsete tööandjatega, uuendada vastavalt oskuste kasvule ning kohandada oma isikliku brändiga. See on just selline praktiline projekt, mis demonstreerib reaalse maailma veebiarenduse oskusi.

## Õpieesmärgid

Pärast selle ülesande lõpetamist oskad:

- **Luuа** ja hallata täielikku veebiarendusprojekti, kasutades VSCode.dev-i
- **Struktureerida** professionaalset veebilehte, kasutades semantilisi HTML elemente
- **Stiilida** reageerivaid paigutusi kaasaegsete CSS tehnikatega
- **Teostada** interaktiivseid funktsioone, kasutades põhilisi veebitehnoloogiaid
- **Juurutada** eluvat veebisaiti, mis on ligipääsetav jagatava URL-i kaudu
- **Näidata** versioonikontrolli parimaid tavasid kogu arendusprotsessi vältel

## Eeltingimused

Enne selle ülesande alustamist veendu, et Sul on:

- GitHub konto (vajadusel loo see aadressil [github.com](https://github.com/))
- Läbitud VSCode.dev õppetund, mis käsitleb liidese navigeerimist ja põhilisi toiminguid
- Põhiline arusaam HTML struktuurist ja CSS stiilidest

## Projekti seadistamine ja hoidla loomine

Alustame oma projekti vundamendi seadistamisest. See protsess peegeldab reaalseid arendusvooge, kus projektid algavad korrapärase hoidla initsialiseerimise ja struktuuri planeerimisega.

### Samm 1: Loo oma GitHubi hoidla

Pühendatud hoidla loomine tagab, et su projekt on algusest peale hästi organiseeritud ja versioonikontrolli all.

1. **Mine** aadressile [GitHub.com](https://github.com) ja logi sisse
2. **Klõpsa** rohelisele nupule "New" või "+” ikoonile paremas ülanurgas
3. **Nimeta** oma hoidla `my-resume` (või vali isikupärane nimi nagu `john-smith-resume`)
4. **Lisa** lühike kirjeldus: "Professionaalne CV veebileht, ehitatud HTML ja CSS-iga"
5. **Vali** "Public", et su CV oleks ligipääsetav potentsiaalsetele tööandjatele
6. **Märgi** "Add a README file" algse projekti kirjelduse loomiseks
7. **Klõpsa** "Create repository", et seadistamine lõpetada

> 💡 **Hoidla nime valiku nõuanne**: Kasuta kirjeldavaid, professionaalseid nimesid, mis selgelt näitavad projekti eesmärki. See aitab tööandjale jagamisel või portfoolio ülevaatamisel.

### Samm 2: Initsialiseeri projekti struktuur

Kuna VSCode.dev vajab hoidla avamiseks vähemalt ühe faili olemasolu, loome oma põhisisu HTML faili otse GitHubis enne veebiredaktorisse vahetamist.

1. **Klõpsa** lingil "creating a new file" uues hoidlas
2. **Kirjuta** faili nimeks `index.html`
3. **Lisa** see algne HTML struktuur:

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

4. **Kirjuta** commit sõnum: "Add initial HTML structure"
5. **Klõpsa** "Commit new file", et muudatused salvestada

![Create initial file on GitHub](../../../../translated_images/new-file-github.com.c886796d800e8056.et.png)

**Selle algse seadistusega saavutad:**
- **Korrektse HTML5 dokumendi struktuuri, kasutades semantilisi elemente**
- **Lisatakse viewport meta silt, mis tagab reageeriva disaini ühilduvuse**
- **Seadistatakse kirjeldav lehe pealkiri, mis kuvatakse brauseri vahekaardil**
- **Luua vundament professionaalse sisu organiseerimiseks**

## Töö VSCode.dev keskkonnas

Nüüd, kui hoidla vundament on paigas, liigume edasi VSCode.dev keskkonda põhitöödeks. See veebipõhine redaktor pakub kõiki vajalikke tööriistu professionaalseks veebiarenduseks.

### Samm 3: Ava oma projekt VSCode.dev-is

1. **Mine** [vscode.dev](https://vscode.dev) uues brauseri vahelehes
2. **Klõpsa** tervituskuval "Open Remote Repository"
3. **Kopeeri** oma hoidla URL GitHubist ja kleebi see sisestusväljale

   Vorming: `https://github.com/your-username/my-resume`
   
   *Asenda `your-username` oma tegeliku GitHubi kasutajanimega*

4. **Vajuta** Enter, et laadida oma projekt

✅ **Õnnestumise märguanne**: Peaksid nägema oma projekti faile Explorer küljeribal ning `index.html` faili, mida saad põhiredaktoris muuta.

![Project loaded in VSCode.dev](../../../../translated_images/project-on-vscode.dev.e79815a9a95ee7fe.et.png)

**Liidese põhielemendid:**
- **Explorer küljeriba**: **Kuvab** sinu hoidla failid ja kaustastruktuuri
- **Redaktori ala**: **Näitab** valitud failide sisu redigeerimiseks
- **Activity bar**: **Pakkuv** ligipääsu tööriistadele nagu Source Control ja Extensions
- **Status bar**: **Näitab** ühenduse olekut ja praegust haru infot

### Samm 4: Koosta oma CV sisu

Asenda `index.html` kohatäite sisu põhjaliku CV struktuuriga. See HTML on vundament professionaalse kvalifikatsiooni esitamiseks.

<details>
<summary><b>Täielik HTML CV struktuur</b></summary>

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

**Kohandamise juhised:**
- **Asenda** kogu kohatäidetekst oma tegelike andmetega
- **Kohanda** sektsioone vastavalt kogemuste tasemele ja karjääri fookusele
- **Lisa** või eemalda sektsioone vastavalt vajadusele (nt Sertifikaadid, Vabatahtlik töö, Keeled)
- **Lisa** lingid oma tegelikele profiilidele ja projektidele

### Samm 5: Loo tugifailid

Professionaalsed veebilehed vajavad organiseeritud failistruktuuri. Loo CSS stiilileht ja konfiguratsioonifailid, mis on projekti jaoks vajalikud.

1. **Hõljuta** hiirt oma projekti kausta nime kohal Exploreri küljeribal
2. **Klõpsa** ilmuvale “New File” ikoonile (📄+)
3. **Loo** failid ükshaaval:
   - `style.css` (stiilide ja paigutuse jaoks)
   - `codeswing.json` (eelvaate laienduse konfiguratsiooniks)

**CSS faili loomine (`style.css`):**

<details>
<summary><b>Professionaalne CSS stiil</b></summary>

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

**Konfiguratsioonifaili loomine (`codeswing.json`):**

```json
{
    "scripts": [],
    "styles": []
}
```

**CSS omaduste mõistmine:**
- **Kasutab** CSS Grid-i reageeriva ja professionaalse paigutuse loomiseks
- **Rakendab** kaasaegseid värviskeeme gradientsetega päisetes
- **Lisas** hover-efektid ja sujuvad üleminekud interaktiivsuse tagamiseks
- **Pakub** reageerivat disaini, mis töötab kõigil seadmetel
- **Lisab** printimiseks sobilikke stiile PDF genereerimiseks

### Samm 6: Paigalda ja seadista laiendused

Laiendused parandavad sinu arenduskogemust, pakkudes live eelvaate võimalusi ning töövoo täiustusi. CodeSwing laiendus on eriti kasulik veebiarendusprojektide puhul.

**CodeSwing laienduse paigaldamine:**

1. **Klõpsa** Activity Bari laienduste ikoonile (🧩)
2. **Otsi** turuotsingus "CodeSwing"
3. **Vali** otsingutulemustest CodeSwing laiendus
4. **Klõpsa** sinisel "Install" nupul

![Installing the CodeSwing extension](../../../../8-code-editor/images/install-extension.gif)

**Mida CodeSwing pakub:**
- **Võimaldab** sinu veebilehe live eelvaadet redigeerimise ajal
- **Kuvab** muudatused reaalajas, ilma käsitsi värskenduseta
- **Toetab** mitut failitüüpi, sh HTML, CSS ja JavaScript
- **Tagab** integreeritud arenduskeskkonna kogemuse

**Kiired tulemused pärast paigaldamist:**
Kui CodeSwing on paigaldatud, näed redaktoris oma CV veebilehe live eelvaadet. See võimaldab täpselt näha, kuidas su sait muudatustega muutub.

![CodeSwing extension showing live preview](../../../../translated_images/after-codeswing-extension-pb.0ebddddcf73b5509.et.png)

**Täiustatud liidese mõistmine:**
- **Poolitatud vaade**: **Näitab** vasakul koodi ja paremal live eelvaadet
- **Reaalajas värskendus**: **Kajastab** muudatusi kohe sisestamisel
- **Interaktiivne eelvaade**: **Lubab** testida linke ja kasutaja funktsioone
- **Mobiilsimulatsioon**: **Pakkumasi** reageeriva disaini testimise võimalust

### Samm 7: Versioonikontroll ja avaldamine

Nüüd kui su CV veebileht on valmis, kasuta Giti töö salvestamiseks ja kättesaadavaks tegemiseks veebis.

**Muudatuste kinnitamine:**

1. **Klõpsa** Source Control ikoonile (🌿) Activity Baril
2. **Vaata üle** kõik loodud ja muudetud failid sektsioonis "Changes"
3. **Paiguta** muudatused stseeni, klõpsates "+" ikooni iga faili kõrval
4. **Kirjuta** kirjeldav commit sõnum, näiteks:
   - "Add complete resume website with responsive design"
   - "Implement professional styling and content structure"
5. **Klõpsa** linnukesel (✓), et commit teha ja muudatused üles laadida

**Tõhusad commit sõnumite näited:**
- "Add professional resume content and styling"
- "Implement responsive design for mobile compatibility"
- "Update contact information and project links"

> 💡 **Professionaalne nõuanne**: Hea commit sõnum aitab jälgida projekti arengut ja näitab detaile hindavat suhtumist – omadused, mida tööandjad väärtustavad.

**Avaldatud saidi ligipääs:**
Kui oled commiti teinud, saad naasta oma GitHubi hoidla juurde, kasutades vasakus ülanurgas menüüd (☰). Sinu CV veebileht on nüüd versioonikontrolli all ja valmis avaldamiseks või jagamiseks.

## Tulemused ja järgmised sammud

**Palju õnne! 🎉** Oled edukalt loonud professionaalse CV veebilehe kasutades VSCode.dev-i. Sinu projekt demonstreerib:

**Näidatud tehnilised oskused:**
- **Hoidla haldamine**: Loodud ja organiseeritud täielik projektistruktuur
- **Veebiarendus**: Valmistatud reageeriv veebisait kaasaegse HTML5 ja CSS3-ga
- **Versioonikontroll**: Rakendatud korrektne Git töövoog mõttekate commitidega
- **Tööriistade valdamine**: Tulemuslikult kasutatud VSCode.dev liidest ja laiendussüsteemi

**Saavutatud professionaalsed tulemused:**
- **Veebipõhine kohalolek**: Jagatav URL, mis tutvustab su kvalifikatsiooni
- **Moodne vorming**: Interaktiivne alternatiiv traditsioonilistele PDF CV-dele
- **Demonstratiivsed oskused**: Konkreetne tõend su veebiarenduse võimete kohta
- **Lihtne uuendamine**: Vundament, mida saab pidevalt täiustada ja kohandada

### Juurutamise valikud

Selleks, et su CV oleks kättesaadav tööandjatele, kaalu järgmisi hostinguvõimalusi:

**GitHub Pages (Soovitatav):**
1. Mine oma hoidla Settings sektsiooni GitHubis
2. Kerige alla "Pages" sektsioonini
3. Vali "Deploy from a branch" ja valida "main"
4. Sinu sait on seejärel ligipääsetav aadressil `https://your-username.github.io/my-resume`

**Alternatiivsed platvormid:**
- **Netlify**: Automaatne juurutus koos kohandatud domeenidega
- **Vercel**: Kiire juurutus kaasaegsete hostimisteenustega
- **GitHub Codespaces**: Arenduskeskkond koos sisseehitatud eelvaatega

### Täiendamise soovitused

Jätka oma oskuste arendamist, lisades järgmised funktsioonid:

**Tehnilised täiustused:**
- **JavaScripti interaktiivsus**: Lisada sujuv kerimine või interaktiivsed elemendid
- **Tume/režiimi lüliti**: Rakendada teema vahetus kasutajasoovile vastavalt
- **Kontaktivorm**: Võimaldada otsekontakti potentsiaalsete tööandjatega
- **SEO optimeerimine**: Lisa meta sildid ja struktureeritud andmed parema otsitavuse tagamiseks

**Sisulised täiustused:**
- **Projektide portfell**: Lisa lingid GitHubi hoidlatesse ja elavatele demo projektidele
- **Oskuste visualiseerimine**: Loo edenemisribad või oskuste hinnangusüsteemid
- **Soovituste sektsioon**: Lisa soovitusi kolleegidelt või juhendajatelt
- **Blogi integreerimine**: Lisa blogi sektsioon, kus jagad oma õpikogemusi

## GitHub Copilot Agent Väljakutse 🚀

Kasuta Agent režiimi järgmise väljakutse täitmiseks:

**Kirjeldus:** Täienda oma CV veebilehte täiustatud funktsioonidega, mis demonstreerivad professionaalseid veebiarenduse võimeid ja kaasaegseid disainipõhimõtteid.

**Sisselõige:** Põhinedes oma olemasoleval CV veebilehel, tee järgmised täiustused:
1. Lisa tume/hele teema lüliti sujuvate üleminekutega
2. Loo interaktiivne oskuste sektsioon animeeritud edenemisriba liigutustega
3. Rakenda kontaktivorm koos valiidatsiooniga
4. Lisa projektide portfooli sektsioon hover efektide ja modaalakendega
5. Lisa blogi sektsioon vähemalt 3 näidispostitusega oma õpikogemusest
6. Optimiseeri SEO jaoks sobivate meta siltide, struktureeritud andmete ja jõudlusega
7. Avalda täiustatud sait GitHub Pages või Netlify abil
8. Dokumenteeri kõik uued funktsioonid README.md-s koos ekraanipiltidega

Sinu täiustatud veebileht peaks tõestama kaasaegsete veebiarenduse praktikate meisterlikkust, sealhulgas reageerivat disaini, JavaScripti interaktiivsust ja professionaalset juurutamist.

## Väljakutse laiendus

Valmis oma oskusi veelgi süvendama? Proovi neid edasijõudnuid väljakutseid:

**📱 Mobiiilipõhine ümberkujundus:** Ehita sait täielikult ümber mobiili esimesena lähenemisega, kasutades CSS Gridi ja Flexboxi

**🔍 SEO optimeerimine:** Rakenda põhjalik SEO sh meta sildid, struktureeritud andmed ja jõudluse optimeerimine

**🌐 Mitmekeelne tugi:** Lisa rahvusvahelistumise funktsioonid mitme keele toetamiseks

**📊 Analüütika integreerimine:** Lisa Google Analytics külastajate kaasamise jälgimiseks ja sisu optimeerimiseks

**🚀 Jõudluse parandamine:** Saavuta täiuslikud Lighthouse skoorid kõigis kategooriates

## Ülevaade ja endaõpe

Täienda oma teadmisi nende ressurssidega:

**Täiustatud VSCode.dev funktsioonid:**
- [VSCode.dev Dokumentatsioon](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) — Täielik juhend veebipõhiseks redigeerimiseks
- [GitHub Codespaces](https://docs.github.com/en/codespaces) — Pilvepõhised arenduskeskkonnad

**Veebiarenduse parimad tavad:**
- **Reageeriv disain**: Õpi CSS Gridi ja Flexboxi kaasaegsete paigutuste jaoks
- **Juurdepääsetavus**: Õpi WCAG juhiseid kaasava veebidisaini jaoks  
- **Tõhusus**: Uuri optimeerimiseks tööriistu nagu Lighthouse  
- **SEO**: Sissejuhatus otsingumootorite optimeerimise põhialustesse  

**Professionaalne areng:**  
- **Portfoolio loomine**: Loo täiendavaid projekte mitmekesiste oskuste demonstreerimiseks  
- **Avatud lähtekoodiga panustamine**: Panusta olemasolevatesse projektidesse koostöökogemuse saamiseks  
- **Võrgustike loomine**: Jaga oma CV-veebisaiti arendajate kogukondades tagasiside saamiseks  
- **Jätkuv õppimine**: Hoia end kursis veebiarenduse trendide ja tehnoloogiatega  

---

**Sinu järgmised sammud:** Jaga oma CV-veebisaiti sõprade, pere või mentoritega tagasiside saamiseks. Kasuta nende ettepanekuid, et oma disaini täiustada ja edasi arendada. Pea meeles, see projekt ei ole ainult CV – see on sinu kasv veebiarendajana!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:  
See dokument on tõlgitud, kasutades tehisintellekti tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, palun arvestage, et automatiseeritud tõlgetes võib esineda vigu või ebatäpsusi. Originaaldokument tema emakeeles tuleks käsitleda autoriteetse allikana. Olulise teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta käesoleva tõlke kasutamisest tingitud arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->