# Tema de Refactorizare CSS

## Obiectiv

Transformă proiectul tău de terariu pentru a utiliza tehnici moderne de layout CSS! Refactorizează abordarea actuală de poziționare absolută pentru a implementa **Flexbox** sau **CSS Grid** pentru un design mai ușor de întreținut și mai receptiv. Această temă te provoacă să aplici standardele moderne CSS, menținând în același timp atractivitatea vizuală a terariului tău.

Înțelegerea momentului și modului de utilizare a diferitelor metode de layout este o abilitate esențială în dezvoltarea web modernă. Acest exercițiu face legătura între tehnicile tradiționale de poziționare și sistemele contemporane de layout CSS.

## Instrucțiuni pentru temă

### Faza 1: Analiză și Planificare
1. **Revizuiește codul actual al terariului tău** - Identifică elementele care folosesc poziționarea absolută
2. **Alege metoda de layout** - Decide dacă Flexbox sau CSS Grid se potrivește mai bine obiectivelor tale de design
3. **Schițează noua structură de layout** - Planifică modul în care containerele și elementele plantelor vor fi organizate

### Faza 2: Implementare
1. **Creează o versiune nouă** a proiectului tău de terariu într-un folder separat
2. **Actualizează structura HTML** după cum este necesar pentru a susține metoda de layout aleasă
3. **Refactorizează CSS-ul** pentru a utiliza Flexbox sau CSS Grid în loc de poziționare absolută
4. **Menține consistența vizuală** - Asigură-te că plantele și borcanul terariului apar în aceleași poziții
5. **Implementează comportamentul receptiv** - Layout-ul tău ar trebui să se adapteze elegant la diferite dimensiuni de ecran

### Faza 3: Testare și Documentare
1. **Testare cross-browser** - Verifică dacă designul funcționează în Chrome, Firefox, Edge și Safari
2. **Testare receptivă** - Verifică layout-ul pe ecrane de mobil, tabletă și desktop
3. **Documentare** - Adaugă comentarii în CSS explicând alegerile tale de layout
4. **Capturi de ecran** - Capturează terariul tău în diferite browsere și dimensiuni de ecran

## Cerințe Tehnice

### Implementarea Layout-ului
- **Alege UNA**: Implementează fie Flexbox, fie CSS Grid (nu ambele pentru aceleași elemente)
- **Design Receptiv**: Utilizează unități relative (`rem`, `em`, `%`, `vw`, `vh`) în loc de pixeli fixați
- **Accesibilitate**: Menține o structură HTML semantică adecvată și text alternativ
- **Calitatea Codului**: Folosește convenții de denumire consistente și organizează CSS-ul logic

### Funcționalități CSS Moderne de Inclus
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Cerințe de Suport pentru Browsere
- **Chrome/Edge**: Ultimele 2 versiuni
- **Firefox**: Ultimele 2 versiuni  
- **Safari**: Ultimele 2 versiuni
- **Browsere mobile**: iOS Safari, Chrome Mobile

## Livrabile

1. **Fișier HTML actualizat** cu o structură semantică îmbunătățită
2. **Fișier CSS refactorizat** utilizând tehnici moderne de layout
3. **Colecție de capturi de ecran** care arată compatibilitatea cross-browser:
   - Vizualizare desktop (1920x1080)
   - Vizualizare tabletă (768x1024) 
   - Vizualizare mobil (375x667)
   - Cel puțin 2 browsere diferite
4. **Fișier README.md** care documentează:
   - Alegerea metodei de layout (Flexbox vs Grid) și motivarea
   - Provocările întâmpinate în timpul refactorizării
   - Note despre compatibilitatea cu browserele
   - Instrucțiuni pentru rularea codului

## Criterii de Evaluare

| Criteriu | Exemplary (4) | Proficient (3) | Developing (2) | Beginning (1) |
|----------|---------------|----------------|---------------|---------------|
| **Implementarea Layout-ului** | Utilizare magistrală a Flexbox/Grid cu funcționalități avansate; complet receptiv | Implementare corectă cu un comportament receptiv bun | Implementare de bază cu probleme minore de receptivitate | Implementare incompletă sau incorectă a layout-ului |
| **Calitatea Codului** | CSS curat, bine organizat, cu comentarii semnificative și denumiri consistente | Organizare bună cu câteva comentarii | Organizare adecvată cu comentarii minime | Organizare slabă; greu de înțeles |
| **Compatibilitate Cross-Browser** | Consistență perfectă în toate browserele cerute, cu capturi de ecran | Compatibilitate bună cu diferențe minore documentate | Unele probleme de compatibilitate care nu afectează funcționalitatea | Probleme majore de compatibilitate sau testare lipsă |
| **Design Receptiv** | Abordare excepțională "mobile-first" cu puncte de întrerupere fluide | Comportament receptiv bun cu puncte de întrerupere adecvate | Funcționalități receptive de bază cu unele probleme de layout | Comportament receptiv limitat sau defect |
| **Documentare** | README cuprinzător, cu explicații detaliate și perspective | Documentare bună care acoperă toate elementele cerute | Documentare de bază cu explicații minime | Documentare incompletă sau lipsă |

## Resurse Utile

### Ghiduri pentru Metode de Layout
- 📖 [Ghid complet pentru Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Ghid complet pentru CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Alege instrumentul potrivit](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Instrumente de Testare a Browserelor
- 🛠️ [Modul Responsiv din Browser DevTools](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Suport pentru funcționalități](https://caniuse.com/)
- 🛠️ [BrowserStack - Testare cross-browser](https://www.browserstack.com/)

### Instrumente pentru Calitatea Codului
- ✅ [Validator CSS](https://jigsaw.w3.org/css-validator/)
- ✅ [Validator HTML](https://validator.w3.org/)
- ✅ [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Provocări Bonus

🌟 **Layout-uri Avansate**: Implementează atât Flexbox, cât și Grid în diferite părți ale designului tău  
🌟 **Integrarea Animațiilor**: Adaugă tranziții sau animații CSS care să funcționeze cu noul tău layout  
🌟 **Modul Întunecat**: Implementează un schimbător de teme bazat pe proprietăți personalizate CSS  
🌟 **Interogări pentru Containere**: Utilizează tehnici moderne de interogare a containerelor pentru receptivitate la nivel de componentă  

> 💡 **Reține**: Scopul nu este doar să funcționeze, ci să înțelegi DE CE metoda de layout aleasă este cea mai bună soluție pentru această provocare de design!

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegerile sau interpretările greșite care pot apărea din utilizarea acestei traduceri.