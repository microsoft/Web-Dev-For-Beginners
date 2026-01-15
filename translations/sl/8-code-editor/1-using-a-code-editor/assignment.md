<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "effe56ba51c38d7bdfad1ea38288666b",
  "translation_date": "2025-10-25T00:21:02+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "sl"
}
-->
# Ustvarite spletno stran z življenjepisom z uporabo VSCode.dev

Izboljšajte svoje karierne možnosti z izdelavo profesionalne spletne strani z življenjepisom, ki interaktivno in sodobno prikazuje vaše veščine in izkušnje. Namesto pošiljanja tradicionalnih PDF-jev si zamislite, da bi kadrovnikom ponudili elegantno, odzivno spletno stran, ki prikazuje vaše kvalifikacije in sposobnosti spletnega razvoja.

Ta praktična naloga vam omogoča, da uporabite vse svoje veščine v VSCode.dev in hkrati ustvarite nekaj, kar je resnično koristno za vašo kariero. Izkušnje boste pridobili skozi celoten proces spletnega razvoja – od ustvarjanja repozitorija do objave – vse znotraj vašega brskalnika.

Z dokončanjem tega projekta boste imeli profesionalno spletno prisotnost, ki jo lahko enostavno delite s potencialnimi delodajalci, posodabljate, ko se vaše veščine razvijajo, in prilagodite svoji osebni znamki. To je natanko takšen praktičen projekt, ki prikazuje resnične veščine spletnega razvoja.

## Cilji učenja

Po zaključku te naloge boste sposobni:

- **Ustvariti** in upravljati celoten projekt spletnega razvoja z uporabo VSCode.dev
- **Strukturirati** profesionalno spletno stran z uporabo semantičnih HTML elementov
- **Oblikovati** odzivne postavitve z modernimi CSS tehnikami
- **Implementirati** interaktivne funkcije z osnovnimi spletnimi tehnologijami
- **Objaviti** živo spletno stran, dostopno prek deljivega URL-ja
- **Demonstrirati** najboljše prakse upravljanja verzij skozi celoten razvojni proces

## Predpogoji

Pred začetkom te naloge poskrbite, da imate:

- GitHub račun (ustvarite ga na [github.com](https://github.com/), če ga še nimate)
- Zaključen tečaj VSCode.dev, ki pokriva navigacijo po vmesniku in osnovne operacije
- Osnovno razumevanje HTML strukture in konceptov CSS oblikovanja

## Nastavitev projekta in ustvarjanje repozitorija

Začnimo z vzpostavitvijo temeljev vašega projekta. Ta proces posnema delovne tokove resničnega razvoja, kjer se projekti začnejo z ustrezno inicializacijo repozitorija in načrtovanjem strukture.

### Korak 1: Ustvarite svoj GitHub repozitorij

Vzpostavitev namenskega repozitorija zagotavlja, da je vaš projekt od začetka pravilno organiziran in pod nadzorom verzij.

1. **Pojdite** na [GitHub.com](https://github.com) in se prijavite v svoj račun
2. **Kliknite** zeleni gumb "New" ali ikono "+" v zgornjem desnem kotu
3. **Poimenujte** svoj repozitorij `my-resume` (ali izberite osebno ime, kot je `john-smith-resume`)
4. **Dodajte** kratek opis: "Profesionalna spletna stran z življenjepisom, izdelana z HTML in CSS"
5. **Izberite** "Public", da bo vaš življenjepis dostopen potencialnim delodajalcem
6. **Označite** "Add a README file", da ustvarite začetni opis projekta
7. **Kliknite** "Create repository", da dokončate nastavitev

> 💡 **Nasvet za poimenovanje repozitorija**: Uporabljajte opisna, profesionalna imena, ki jasno nakazujejo namen projekta. To je koristno pri deljenju z delodajalci ali med pregledi portfelja.

### Korak 2: Inicializirajte strukturo projekta

Ker VSCode.dev zahteva vsaj eno datoteko za odpiranje repozitorija, bomo glavno HTML datoteko ustvarili neposredno na GitHubu, preden preklopimo na spletni urejevalnik.

1. **Kliknite** povezavo "creating a new file" v vašem novem repozitoriju
2. **Vnesite** `index.html` kot ime datoteke
3. **Dodajte** to začetno HTML strukturo:

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

4. **Napišite** sporočilo za commit: "Dodaj začetno HTML strukturo"
5. **Kliknite** "Commit new file", da shranite spremembe

![Ustvarjanje začetne datoteke na GitHubu](../../../../translated_images/sl/new-file-github.com.c886796d800e8056.png)

**Kaj doseže ta začetna nastavitev:**
- **Vzpostavi** pravilno strukturo dokumenta HTML5 s semantičnimi elementi
- **Vključuje** meta oznako za združljivost odzivnega oblikovanja
- **Nastavi** opisni naslov strani, ki se prikaže v zavihkih brskalnika
- **Ustvari** temelje za profesionalno organizacijo vsebine

## Delo v VSCode.dev

Zdaj, ko je temelj vašega repozitorija vzpostavljen, preidimo na VSCode.dev za glavno razvojno delo. Ta spletni urejevalnik ponuja vsa orodja, potrebna za profesionalni spletni razvoj.

### Korak 3: Odprite svoj projekt v VSCode.dev

1. **Pojdite** na [vscode.dev](https://vscode.dev) v novem zavihku brskalnika
2. **Kliknite** "Open Remote Repository" na uvodnem zaslonu
3. **Kopirajte** URL svojega repozitorija z GitHuba in ga prilepite v vnosno polje

   Format: `https://github.com/your-username/my-resume`
   
   *Zamenjajte `your-username` z vašim dejanskim GitHub uporabniškim imenom*

4. **Pritisnite** Enter, da naložite svoj projekt

✅ **Indikator uspeha**: Videti bi morali datoteke svojega projekta v stranski vrstici Explorer in `index.html`, ki je na voljo za urejanje v glavnem urejevalnem območju.

![Projekt naložen v VSCode.dev](../../../../translated_images/sl/project-on-vscode.dev.e79815a9a95ee7fe.png)

**Kaj boste videli v vmesniku:**
- **Stranska vrstica Explorer**: **Prikazuje** datoteke vašega repozitorija in strukturo map
- **Urejevalno območje**: **Prikazuje** vsebino izbranih datotek za urejanje
- **Aktivnostna vrstica**: **Omogoča** dostop do funkcij, kot so nadzor verzij in razširitve
- **Statusna vrstica**: **Prikazuje** stanje povezave in informacije o trenutni veji

### Korak 4: Zgradite vsebino svojega življenjepisa

Zamenjajte vsebino z nadomestnim besedilom v datoteki `index.html` s celovito strukturo življenjepisa. Ta HTML bo osnova za profesionalno predstavitev vaših kvalifikacij.

<details>
<summary><b>Celovita HTML struktura življenjepisa</b></summary>

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

**Smernice za prilagoditev:**
- **Zamenjajte** ves nadomestni tekst s svojimi dejanskimi podatki
- **Prilagodite** razdelke glede na svojo raven izkušenj in karierni fokus
- **Dodajte** ali odstranite razdelke po potrebi (npr. Certifikati, Prostovoljno delo, Jeziki)
- **Vključite** povezave do svojih dejanskih profilov in projektov

### Korak 5: Ustvarite podporne datoteke

Profesionalne spletne strani zahtevajo organizirane strukture datotek. Ustvarite CSS slogovno datoteko in konfiguracijske datoteke, potrebne za celoten projekt.

1. **Pomaknite se** nad ime mape projekta v stranski vrstici Explorer
2. **Kliknite** ikono "New File" (📄+), ki se prikaže
3. **Ustvarite** te datoteke eno za drugo:
   - `style.css` (za oblikovanje in postavitev)
   - `codeswing.json` (za konfiguracijo razširitve za predogled)

**Ustvarjanje CSS datoteke (`style.css`):**

<details>
<summary><b>Profesionalno CSS oblikovanje</b></summary>

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

**Ustvarjanje konfiguracijske datoteke (`codeswing.json`):**

```json
{
    "scripts": [],
    "styles": []
}
```

**Razumevanje funkcij CSS:**
- **Uporablja** CSS Grid za odzivno, profesionalno postavitev
- **Izvaja** sodobne barvne sheme z gradientnimi naslovi
- **Vključuje** učinke ob prehodu miške in gladke prehode za interaktivnost
- **Omogoča** odzivno oblikovanje, ki deluje na vseh velikostih naprav
- **Dodaja** sloge, prijazne za tiskanje, za generiranje PDF-jev

### Korak 6: Namestitev in konfiguracija razširitev

Razširitve izboljšajo vašo izkušnjo razvoja z omogočanjem funkcij, kot so predogledi v živo in izboljšana orodja za delovni tok. Razširitev CodeSwing je še posebej uporabna za projekte spletnega razvoja.

**Namestitev razširitve CodeSwing:**

1. **Kliknite** ikono Razširitve (🧩) v Aktivnostni vrstici
2. **Poiščite** "CodeSwing" v iskalnem polju tržnice
3. **Izberite** razširitev CodeSwing iz rezultatov iskanja
4. **Kliknite** modri gumb "Install"

![Namestitev razširitve CodeSwing](../../../../8-code-editor/images/install-extension.gif)

**Kaj omogoča CodeSwing:**
- **Omogoča** predogled vaše spletne strani v živo med urejanjem
- **Prikazuje** spremembe v realnem času brez ročnega osveževanja
- **Podpira** več vrst datotek, vključno z HTML, CSS in JavaScript
- **Nudi** izkušnjo integriranega razvojnega okolja

**Takojšnji rezultati po namestitvi:**
Ko je CodeSwing nameščen, se bo v urejevalniku prikazal predogled vaše spletne strani z življenjepisom v živo. To vam omogoča, da vidite, kako vaša stran izgleda, medtem ko jo spreminjate.

![Razširitev CodeSwing prikazuje predogled v živo](../../../../translated_images/sl/after-codeswing-extension-pb.0ebddddcf73b5509.png)

**Razumevanje izboljšanega vmesnika:**
- **Razdeljen pogled**: **Prikazuje** vašo kodo na eni strani in predogled v živo na drugi
- **Posodobitve v realnem času**: **Odražajo** spremembe takoj, ko jih vnesete
- **Interaktivni predogled**: **Omogoča** testiranje povezav in interakcij
- **Simulacija mobilnih naprav**: **Omogoča** testiranje odzivnega oblikovanja

### Korak 7: Upravljanje verzij in objava

Zdaj, ko je vaša spletna stran z življenjepisom dokončana, uporabite Git za shranjevanje svojega dela in omogočite dostop do nje na spletu.

**Shranjevanje sprememb:**

1. **Kliknite** ikono Source Control (🌿) v Aktivnostni vrstici
2. **Preglejte** vse datoteke, ki ste jih ustvarili in spremenili v razdelku "Changes"
3. **Dodajte** svoje spremembe s klikom na ikono "+" poleg vsake datoteke
4. **Napišite** opisno sporočilo za commit, na primer:
   - "Dodaj popolno spletno stran z življenjepisom z odzivnim oblikovanjem"
   - "Izvedi profesionalno oblikovanje in strukturo vsebine"
5. **Kliknite** kljukico (✓), da potrdite in potisnete svoje spremembe

**Primeri učinkovitih sporočil za commit:**
- "Dodaj profesionalno vsebino življenjepisa in oblikovanje"
- "Izvedi odzivno oblikovanje za mobilno združljivost"
- "Posodobi kontaktne informacije in povezave do projektov"

> 💡 **Profesionalni nasvet**: Dobri opisi commitov pomagajo slediti razvoju vašega projekta in kažejo na pozornost do podrobnosti – lastnosti, ki jih delodajalci cenijo.

**Dostop do objavljene strani:**
Ko je commit izveden, se lahko vrnete v svoj GitHub repozitorij z uporabo hamburger menija (☰) v zgornjem levem kotu. Vaša spletna stran z življenjepisom je zdaj pod nadzorom verzij in pripravljena za objavo ali deljenje.

## Rezultati in naslednji koraki

**Čestitke! 🎉** Uspešno ste ustvarili profesionalno spletno stran z življenjepisom z uporabo VSCode.dev. Vaš projekt prikazuje:
**Prikazane tehnične veščine:**
- **Upravljanje repozitorija**: Ustvarili in organizirali ste celotno strukturo projekta
- **Spletni razvoj**: Zgradili ste odzivno spletno stran z uporabo modernih HTML5 in CSS3
- **Upravljanje verzij**: Izvedli ste ustrezen Git delovni tok z jasnimi commit sporočili
- **Obvladovanje orodij**: Učinkovito ste uporabili vmesnik VSCode.dev in sistem razširitev

**Doseženi profesionalni rezultati:**
- **Spletna prisotnost**: Deljiv URL, ki prikazuje vaše kvalifikacije
- **Sodoben format**: Interaktivna alternativa tradicionalnim PDF življenjepisom
- **Dokazane veščine**: Konkretni dokazi o vaših sposobnostih spletnega razvoja
- **Enostavne posodobitve**: Temelj, ki ga lahko nenehno izboljšujete in prilagajate

### Možnosti objave

Da bo vaš življenjepis dostopen delodajalcem, razmislite o teh možnostih gostovanja:

**GitHub Pages (Priporočeno):**
1. Pojdite v Nastavitve svojega repozitorija na GitHubu
2. Pomaknite se do razdelka "Pages"
3. Izberite "Deploy from a branch" in izberite "main"
4. Vaša stran bo dostopna na `https://your-username.github.io/my-resume`

**Alternativne platforme:**
- **Netlify**: Samodejna objava s prilagojenimi domenami
- **Vercel**: Hitro objavljanje s sodobnimi funkcijami gostovanja
- **GitHub Codespaces**: Razvojno okolje z vgrajenim predogledom

### Predlogi za izboljšave

Nadaljujte z razvojem svojih veščin z dodajanjem teh funkcij:

**Tehnične izboljšave:**
- **Interaktivnost z JavaScriptom**: Dodajte gladko pomikanje ali interaktivne elemente
- **Preklop na temni način**: Uvedite preklapljanje tem za uporabniške preference
- **Kontaktni obrazec**: Omogočite neposredno komunikacijo s potencialnimi delodajalci
- **Optimizacija SEO**: Dodajte meta oznake in strukturirane podatke za boljšo vidnost v iskalnikih

**Vsebinski dodatki:**
- **Portfelj projektov**: Povezave do GitHub repozitorijev in živih predstavitev
- **Vizualizacija veščin**: Ustvarite grafične prikaze napredka ali sisteme ocenjevanja veščin
- **Razdelek za priporočila**: Vključite priporočila sodelavcev ali mentorjev
- **Integracija bloga**: Dodajte razdelek za blog, da pokažete svojo učno pot

## Izziv z GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Izboljšajte svojo spletno stran z življenjepisom z naprednimi funkcijami, ki prikazujejo profesionalne sposobnosti spletnega razvoja in sodobna oblikovalska načela.

**Navodilo:** Na podlagi obstoječe spletne strani z življenjepisom implementirajte te napredne funkcije:
1. Dodajte preklop med temno/svetlo temo z gladkimi prehodi
2. Ustvarite interaktivni razdelek veščin z animiranimi grafičnimi prikazi
3. Implementirajte kontaktni obrazec z validacijo obrazca
4. Dodajte razdelek portfelja projektov z učinki ob prehodu miške in modalnimi okni
5. Vključite razdelek za blog z vsaj 3 vzorčnimi objavami o vaši učni poti
6. Optimizirajte za SEO z ustreznimi meta oznakami, strukturiranimi podatki in zmogljivostjo
7. Objavite izboljšano stran z uporabo GitHub Pages ali Netlify
8. Dokumentirajte vse nove funkcije v svojem README.md z zaslonskimi posnetki

Vaša izboljšana spletna stran naj prikazuje obvladovanje sodobnih praks spletnega razvoja, vključno z odzivnim oblikovanjem, interaktivnostjo z JavaScriptom in profesionalnimi delovnimi tokovi objave.

## Razširitev izziva

Pripravljeni na nadaljnji razvoj svojih veščin? Poskusite te napredne izzive:

**📱 Redizajn za mobil
- **Dostopnost**: Spoznajte smernice WCAG za vključujoče oblikovanje spletnih strani
- **Zmogljivost**: Raziščite orodja, kot je Lighthouse, za optimizacijo
- **SEO**: Razumite osnove optimizacije za iskalnike

**Profesionalni razvoj:**
- **Izgradnja portfelja**: Ustvarite dodatne projekte za prikaz raznolikih veščin
- **Odprta koda**: Prispevajte k obstoječim projektom za pridobivanje izkušenj pri sodelovanju
- **Povezovanje**: Delite svojo spletno stran z življenjepisom v skupnostih razvijalcev za povratne informacije
- **Nenehno učenje**: Bodite na tekočem z trendi in tehnologijami spletnega razvoja

---

**Vaši naslednji koraki:** Delite svojo spletno stran z življenjepisom s prijatelji, družino ali mentorji za povratne informacije. Uporabite njihove predloge za izboljšanje in nadgradnjo svojega dizajna. Ne pozabite, ta projekt ni le življenjepis – je prikaz vašega razvoja kot spletnega razvijalca!

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.