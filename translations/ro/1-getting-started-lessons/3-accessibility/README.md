<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-27T22:30:25+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "ro"
}
-->
# Crearea paginilor web accesibile

![Totul despre accesibilitate](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.ro.png)  
> Sketchnote de [Tomomi Imura](https://twitter.com/girlie_mac)

## Test înainte de lecție  
[Test înainte de lecție](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> Puterea Web-ului constă în universalitatea sa. Accesul pentru toți, indiferent de dizabilitate, este un aspect esențial.  
>  
> \- Sir Timothy Berners-Lee, Director W3C și inventatorul World Wide Web

Acest citat subliniază perfect importanța creării site-urilor accesibile. O aplicație care nu poate fi accesată de toți este, prin definiție, exclusivistă. Ca dezvoltatori web, ar trebui să avem mereu accesibilitatea în minte. Concentrându-ne pe acest aspect de la început, veți fi pe drumul cel bun pentru a vă asigura că toată lumea poate accesa paginile pe care le creați. În această lecție, veți învăța despre instrumentele care vă pot ajuta să vă asigurați că resursele web sunt accesibile și cum să construiți având accesibilitatea în vedere.

> Puteți parcurge această lecție pe [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Instrumente de utilizat

### Cititoare de ecran

Unul dintre cele mai cunoscute instrumente de accesibilitate sunt cititoarele de ecran.

[Cititoarele de ecran](https://en.wikipedia.org/wiki/Screen_reader) sunt utilizate frecvent de persoanele cu deficiențe de vedere. Pe măsură ce ne asigurăm că un browser transmite corect informațiile pe care dorim să le împărtășim, trebuie să ne asigurăm și că un cititor de ecran face același lucru.

La nivel de bază, un cititor de ecran va citi o pagină de sus în jos, în mod auditiv. Dacă pagina dvs. este doar text, cititorul va transmite informațiile într-un mod similar cu un browser. Desigur, paginile web sunt rareori doar text; ele vor conține linkuri, grafice, culori și alte componente vizuale. Trebuie să aveți grijă ca aceste informații să fie citite corect de un cititor de ecran.

Fiecare dezvoltator web ar trebui să se familiarizeze cu un cititor de ecran. După cum am subliniat mai sus, acesta este clientul pe care utilizatorii dvs. îl vor folosi. La fel cum sunteți familiarizat cu modul în care funcționează un browser, ar trebui să învățați cum funcționează un cititor de ecran. Din fericire, cititoarele de ecran sunt integrate în majoritatea sistemelor de operare.

Unele browsere au, de asemenea, instrumente și extensii integrate care pot citi textul cu voce tare sau pot oferi funcții de navigare de bază, cum ar fi [aceste instrumente de accesibilitate pentru browserul Edge](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Acestea sunt, de asemenea, instrumente importante de accesibilitate, dar funcționează foarte diferit de cititoarele de ecran și nu ar trebui confundate cu instrumentele de testare pentru cititoare de ecran.

✅ Încercați un cititor de ecran și un cititor de text pentru browser. Pe Windows, [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) este inclus implicit, iar [JAWS](https://webaim.org/articles/jaws/) și [NVDA](https://www.nvaccess.org/about-nvda/) pot fi instalate. Pe macOS și iOS, [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) este instalat implicit.

### Zoom

Un alt instrument utilizat frecvent de persoanele cu deficiențe de vedere este funcția de zoom. Cel mai simplu tip de zoom este zoom-ul static, controlat prin `Control + semnul plus (+)` sau prin reducerea rezoluției ecranului. Acest tip de zoom determină redimensionarea întregii pagini, astfel încât utilizarea [designului responsiv](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) este importantă pentru a oferi o experiență bună utilizatorului la niveluri de zoom crescute.

Un alt tip de zoom se bazează pe software specializat pentru a mări o zonă a ecranului și a o deplasa, similar cu utilizarea unei lupe reale. Pe Windows, [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) este integrat, iar [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) este un software de mărire terț cu mai multe funcții și o bază de utilizatori mai mare. Atât macOS, cât și iOS au un software de mărire integrat numit [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Verificatoare de contrast

Culorile de pe site-uri web trebuie alese cu grijă pentru a răspunde nevoilor utilizatorilor daltoni sau persoanelor care au dificultăți în a vedea culorile cu contrast redus.

✅ Testați un site web pe care îl utilizați frecvent pentru utilizarea culorilor cu o extensie de browser, cum ar fi [verificatorul de contrast al culorilor WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Ce descoperiți?

### Lighthouse

În zona de instrumente pentru dezvoltatori din browserul dvs., veți găsi instrumentul Lighthouse. Acest instrument este important pentru a obține o primă vedere asupra accesibilității (precum și a altor analize) unui site web. Deși este important să nu vă bazați exclusiv pe Lighthouse, un scor de 100% este foarte util ca punct de referință.

✅ Găsiți Lighthouse în panoul de instrumente pentru dezvoltatori al browserului dvs. și rulați o analiză pe orice site. Ce descoperiți?

## Proiectarea pentru accesibilitate

Accesibilitatea este un subiect relativ vast. Pentru a vă ajuta, există numeroase resurse disponibile.

- [Accessible U - Universitatea din Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Deși nu vom putea acoperi fiecare aspect al creării site-urilor accesibile, mai jos sunt câteva principii de bază pe care veți dori să le implementați. Proiectarea unei pagini accesibile de la început este **întotdeauna** mai ușoară decât revenirea la o pagină existentă pentru a o face accesibilă.

## Principii bune de afișare

### Palete de culori sigure

Oamenii văd lumea în moduri diferite, iar acest lucru include culorile. Când selectați o schemă de culori pentru site-ul dvs., ar trebui să vă asigurați că este accesibilă pentru toți. Un instrument excelent pentru generarea paletelor de culori este [Color Safe](http://colorsafe.co/).

✅ Identificați un site web care are probleme majore în utilizarea culorilor. De ce?

### Utilizați HTML-ul corect

Cu CSS și JavaScript, este posibil să faceți ca orice element să arate ca orice tip de control. `<span>` ar putea fi utilizat pentru a crea un `<button>`, iar `<b>` ar putea deveni un hyperlink. Deși acest lucru ar putea fi considerat mai ușor de stilizat, nu transmite nimic unui cititor de ecran. Utilizați HTML-ul corespunzător atunci când creați controale pe o pagină. Dacă doriți un hyperlink, utilizați `<a>`. Utilizarea HTML-ului corect pentru controlul potrivit se numește utilizarea HTML-ului semantic.

✅ Accesați orice site web și verificați dacă designerii și dezvoltatorii utilizează HTML-ul corect. Puteți găsi un buton care ar trebui să fie un link? Indiciu: faceți clic dreapta și alegeți 'View Page Source' în browserul dvs. pentru a vedea codul de bază.

### Creați o ierarhie descriptivă a titlurilor

Utilizatorii de cititoare de ecran [se bazează foarte mult pe titluri](https://webaim.org/projects/screenreadersurvey8/#finding) pentru a găsi informații și a naviga printr-o pagină. Scrierea unui conținut descriptiv pentru titluri și utilizarea etichetelor semantice pentru titluri sunt importante pentru crearea unui site ușor de navigat pentru utilizatorii de cititoare de ecran.

### Utilizați indicii vizuale bune

CSS oferă control complet asupra aspectului oricărui element de pe o pagină. Puteți crea casete de text fără contur sau hyperlinkuri fără subliniere. Din păcate, eliminarea acestor indicii poate face mai dificil pentru cineva care depinde de ele să recunoască tipul de control.

## Importanța textului pentru linkuri

Hyperlinkurile sunt esențiale pentru navigarea pe web. Prin urmare, asigurarea că un cititor de ecran poate citi corect linkurile permite tuturor utilizatorilor să navigheze pe site-ul dvs.

### Cititoarele de ecran și linkurile

Așa cum v-ați aștepta, cititoarele de ecran citesc textul linkurilor în același mod în care ar citi orice alt text de pe pagină. Având în vedere acest lucru, textul demonstrat mai jos ar putea părea perfect acceptabil.

> Pinguinul mic, cunoscut uneori sub numele de pinguin zână, este cel mai mic pinguin din lume. [Click aici](https://en.wikipedia.org/wiki/Little_penguin) pentru mai multe informații.

> Pinguinul mic, cunoscut uneori sub numele de pinguin zână, este cel mai mic pinguin din lume. Vizitați https://en.wikipedia.org/wiki/Little_penguin pentru mai multe informații.

> **NOTE** După cum urmează să citiți, nu ar trebui **niciodată** să creați linkuri care arată ca cele de mai sus.

Amintiți-vă, cititoarele de ecran sunt o interfață diferită de browsere, cu un set diferit de funcții.

### Problema utilizării URL-ului

Cititoarele de ecran citesc textul. Dacă un URL apare în text, cititorul de ecran va citi URL-ul. În general, URL-ul nu transmite informații semnificative și poate suna enervant. Este posibil să fi experimentat acest lucru dacă telefonul dvs. a citit vreodată cu voce tare un mesaj text cu un URL.

### Problema cu "click aici"

Cititoarele de ecran au, de asemenea, capacitatea de a citi doar hyperlinkurile de pe o pagină, la fel cum o persoană văzătoare ar scana o pagină pentru linkuri. Dacă textul linkului este mereu "click aici", utilizatorul va auzi doar "click aici, click aici, click aici, click aici, click aici, ..." Toate linkurile devin acum indistincte.

### Text bun pentru linkuri

Textul bun pentru linkuri descrie pe scurt ce se află pe partea cealaltă a linkului. În exemplul de mai sus despre pinguinii mici, linkul duce la pagina Wikipedia despre specie. Fraza *pinguini mici* ar fi un text perfect pentru link, deoarece clarifică ce va învăța cineva dacă face clic pe link - pinguini mici.

> Pinguinul [mic](https://en.wikipedia.org/wiki/Little_penguin), cunoscut uneori sub numele de pinguin zână, este cel mai mic pinguin din lume.

✅ Navigați pe web câteva minute pentru a găsi pagini care utilizează strategii obscure de linkuri. Comparați-le cu alte site-uri care au linkuri mai bune. Ce învățați?

#### Note pentru motoarele de căutare

Ca bonus suplimentar pentru asigurarea accesibilității site-ului dvs., veți ajuta motoarele de căutare să navigheze pe site-ul dvs. Motoarele de căutare utilizează textul linkurilor pentru a învăța subiectele paginilor. Deci, utilizarea unui text bun pentru linkuri ajută pe toată lumea!

### ARIA

Imaginați-vă următoarea pagină:

| Produs       | Descriere          | Comandă      |  
| ------------ | ------------------ | ------------ |  
| Widget       | [Descriere](../../../../1-getting-started-lessons/3-accessibility/')   | [Comandă](../../../../1-getting-started-lessons/3-accessibility/') |  
| Super widget | [Descriere](../../../../1-getting-started-lessons/3-accessibility/')   | [Comandă](../../../../1-getting-started-lessons/3-accessibility/') |  

În acest exemplu, duplicarea textului pentru descriere și comandă are sens pentru cineva care folosește un browser. Totuși, cineva care folosește un cititor de ecran ar auzi doar cuvintele *descriere* și *comandă* repetate fără context.

Pentru a sprijini aceste tipuri de scenarii, HTML acceptă un set de atribute cunoscute sub numele de [Aplicații Internet Accesibile și Bogate (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Aceste atribute vă permit să oferiți informații suplimentare cititoarelor de ecran.

> **NOTE**: La fel ca multe aspecte ale HTML-ului, suportul pentru browsere și cititoare de ecran poate varia. Totuși, majoritatea clienților principali acceptă atributele ARIA.

Puteți utiliza `aria-label` pentru a descrie linkul atunci când formatul paginii nu vă permite. Descrierea pentru widget ar putea fi setată astfel:

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ În general, utilizarea marcajului semantic, așa cum este descris mai sus, depășește utilizarea ARIA, dar uneori nu există un echivalent semantic pentru diverse widgeturi HTML. Un exemplu bun este un Arbore. Nu există un echivalent HTML pentru un arbore, așa că identificați `<div>` generic pentru acest element cu un rol și valori ARIA corespunzătoare. [Documentația MDN despre ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) conține informații mai utile.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Imagini

Este evident că cititoarele de ecran nu pot citi automat ce se află într-o imagine. Asigurarea accesibilității imaginilor nu necesită mult efort - acesta este scopul atributului `alt`. Toate imaginile semnificative ar trebui să aibă un `alt` care să descrie ce sunt.  
Imaginile care sunt pur decorative ar trebui să aibă atributul `alt` setat la un șir gol: `alt=""`. Acest lucru împiedică cititoarele de ecran să anunțe inutil imaginea decorativă.

✅ După cum v-ați aștepta, motoarele de căutare nu pot înțelege ce se află într-o imagine. Ele folosesc, de asemenea, textul alt. Deci, din nou, asigurarea accesibilității paginii dvs. oferă bonusuri suplimentare!

## Tastatura

Unii utilizatori nu pot folosi un mouse sau un trackpad, bazându-se în schimb pe interacțiuni cu tastatura pentru a trece de la un element la altul. Este important ca site-ul dvs. web să prezinte conținutul într-o ordine logică, astfel încât un utilizator de tastatură să poată accesa fiecare element interactiv pe măsură ce se deplasează în josul documentului. Dacă construiți paginile web cu marcaj semantic și utilizați CSS pentru a stiliza aspectul vizual, site-ul dvs. ar trebui să fie navigabil cu tastatura, dar este important să testați acest aspect manual. Aflați mai multe despre [strategiile de navigare cu tastatura](https://webaim.org/techniques/keyboard/).

✅ Accesați orice site web și încercați să navigați prin el folosind doar tastatura. Ce funcționează, ce nu funcționează? De ce?

## Rezumat

Un web accesibil doar pentru unii nu este cu adevărat un 'world-wide web'. Cel mai bun mod de a vă asigura că site-urile pe care le creați sunt accesibile este să încorporați cele mai bune practici de accesibilitate de la început. Deși sunt implicate pași suplimentari, încorporarea acestor abilități în fluxul dvs. de lucru acum va însemna că toate paginile pe care le creați vor fi accesibile.

---

## 🚀 Provocare

Luați acest HTML și rescrieți-l pentru a fi cât mai accesibil posibil, având în vedere strategiile pe care le-ați învățat.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Test după lecție  
[Test după lecție](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## Recapitulare și studiu individual
Multe guverne au legi referitoare la cerințele de accesibilitate. Documentează-te despre legile privind accesibilitatea din țara ta. Ce este acoperit și ce nu? Un exemplu este [acest site web guvernamental](https://accessibility.blog.gov.uk/).

## Temă

[Analizează un site web inaccesibil](assignment.md)

Credite: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) de Instrument

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.