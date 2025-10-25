<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-24T22:09:24+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "ro"
}
-->
# Exercițiu Practic HTML: Crearea unui Mockup de Blog

## Obiective de Învățare

Aplică cunoștințele tale de HTML prin proiectarea și codarea structurii complete a unei pagini principale de blog. Acest exercițiu practic va consolida conceptele de HTML semantic, cele mai bune practici de accesibilitate și abilitățile de organizare profesională a codului pe care le vei folosi pe parcursul carierei tale în dezvoltarea web.

**Prin finalizarea acestui exercițiu, vei:**
- Exersa planificarea layout-urilor site-urilor înainte de codare
- Utiliza elementele HTML semantice în mod corespunzător
- Crea markup accesibil și bine structurat
- Dezvolta obiceiuri profesionale de codare prin comentarii și organizare

## Cerințele Proiectului

### Partea 1: Planificarea Designului (Mockup Vizual)

**Creează un mockup vizual al paginii principale a blogului tău care să includă:**
- Header cu titlul site-ului și navigație
- Zona principală de conținut cu cel puțin 2-3 previzualizări ale postărilor de blog
- Sidebar cu informații suplimentare (secțiunea despre, postări recente, categorii)
- Footer cu informații de contact sau linkuri

**Opțiuni pentru Crearea Mockup-ului:**
- **Schită desenată manual**: Folosește hârtie și creion, apoi fotografiază sau scanează designul
- **Instrumente digitale**: Figma, Adobe XD, Canva, PowerPoint sau orice aplicație de desen
- **Instrumente de wireframe**: Balsamiq, MockFlow sau software similar de wireframing

**Etichetează secțiunile mockup-ului** cu elementele HTML pe care intenționezi să le folosești (ex.: "Header - `<header>`", "Postări Blog - `<article>`").

### Partea 2: Planificarea Elementelor HTML

**Creează o listă care să asocieze fiecare secțiune a mockup-ului cu elemente HTML specifice:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Elemente Necesare:**
HTML-ul tău trebuie să conțină cel puțin 10 elemente semantice diferite din această listă:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Partea 3: Implementarea HTML

**Codifică pagina principală a blogului respectând aceste standarde:**

1. **Structura Documentului**: Include DOCTYPE, html, head și body corespunzătoare
2. **Markup Semantic**: Folosește elementele HTML pentru scopul lor destinat
3. **Accesibilitate**: Include text alternativ adecvat pentru imagini și text semnificativ pentru linkuri
4. **Calitatea Codului**: Folosește indentarea consistentă și comentarii semnificative
5. **Conținut**: Include conținut realist pentru blog (poți folosi text de umplere)

**Structură HTML Exemplu:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Partea 4: Reflecție

**Scrie o scurtă reflecție (3-5 propoziții) care să abordeze:**
- Care elemente HTML te-au făcut să te simți cel mai încrezător?
- Ce provocări ai întâmpinat în timpul planificării sau codării?
- Cum te-a ajutat HTML-ul semantic să îți organizezi conținutul?
- Ce ai face diferit la următorul proiect HTML?

## Lista de Verificare pentru Trimitere

**Înainte de a trimite, asigură-te că ai:**
- [ ] Mockup vizual cu elemente HTML etichetate
- [ ] Fișier HTML complet cu structura documentului corectă
- [ ] Cel puțin 10 elemente HTML semantice utilizate corespunzător
- [ ] Comentarii semnificative care explică structura codului
- [ ] Sintaxă HTML validă (testează în browser)
- [ ] Reflecție scrisă care abordează întrebările din prompt

## Rubrica de Evaluare

| Criterii | Exemplară (4) | Proficientă (3) | În Dezvoltare (2) | Început (1) |
|----------|---------------|----------------|----------------|---------------|
| **Planificare & Design** | Mockup detaliat, bine etichetat, care arată o înțelegere clară a layout-ului și structurii semantice HTML | Mockup clar cu majoritatea secțiunilor etichetate corespunzător | Mockup de bază cu unele etichetări, arată o înțelegere generală | Mockup minim sau neclar, lipsesc identificările corespunzătoare ale secțiunilor |
| **Utilizarea HTML Semantic** | Folosește 10+ elemente semantice corespunzător, demonstrează o înțelegere profundă a structurii HTML și accesibilității | Folosește 8-9 elemente semantice corect, arată o bună înțelegere a markup-ului semantic | Folosește 6-7 elemente semantice, unele confuzii despre utilizarea corespunzătoare | Folosește mai puțin de 6 elemente sau utilizează greșit elementele semantice |
| **Calitatea & Organizarea Codului** | Cod extrem de bine organizat, cu indentare corectă, comentarii cuprinzătoare și sintaxă HTML perfectă | Cod bine organizat, cu o bună indentare, comentarii utile și sintaxă validă | Cod în mare parte organizat, cu unele comentarii, probleme minore de sintaxă | Organizare slabă, comentarii minime, multiple erori de sintaxă |
| **Accesibilitate & Cele Mai Bune Practici** | Considerații excelente de accesibilitate, text alternativ semnificativ, ierarhie corectă a titlurilor, respectă toate cele mai bune practici HTML moderne | Caracteristici bune de accesibilitate, utilizare adecvată a titlurilor și textului alternativ, respectă majoritatea practicilor | Unele considerații de accesibilitate, text alternativ și structură de titluri de bază | Caracteristici limitate de accesibilitate, structură slabă a titlurilor, nu respectă cele mai bune practici |
| **Reflecție & Învățare** | Reflecție profundă care demonstrează o înțelegere profundă a conceptelor HTML și o analiză atentă a procesului de învățare | Reflecție bună care arată înțelegerea conceptelor cheie și o anumită conștientizare a procesului de învățare | Reflecție de bază cu o înțelegere limitată a conceptelor HTML sau a procesului de învățare | Reflecție minimă sau lipsă, arată puțină înțelegere a conceptelor învățate |

## Resurse de Învățare

**Referințe Esențiale:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Ghid complet pentru toate elementele HTML
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Înțelegerea markup-ului semantic
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Crearea conținutului web accesibil
- [HTML Validator](https://validator.w3.org/) - Verifică sintaxa HTML

**Sfaturi Profesionale pentru Succes:**
- Începe cu mockup-ul înainte de a scrie orice cod
- Folosește instrumentele de dezvoltare ale browserului pentru a inspecta structura HTML
- Testează pagina ta pe diferite dimensiuni de ecran (chiar și fără CSS)
- Citește HTML-ul tău cu voce tare pentru a verifica dacă structura are sens logic
- Gândește-te cum ar interpreta structura paginii un cititor de ecran

> 💡 **Reține**: Acest exercițiu se concentrează pe structura și semantica HTML. Nu te îngrijora de stilizarea vizuală – pentru asta există CSS! Pagina ta poate arăta simplu, dar ar trebui să fie bine structurată și semnificativă.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.