<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-24T22:14:38+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "ro"
}
-->
# Stilizează aplicația ta bancară cu CSS modern

## Prezentare generală a proiectului

Transformă aplicația ta bancară funcțională într-o aplicație web atractivă și profesională folosind tehnici moderne de CSS. Vei crea un sistem de design coerent care îmbunătățește experiența utilizatorului, menținând în același timp principiile de accesibilitate și design responsiv.

Această sarcină te provoacă să aplici modele contemporane de design web, să implementezi o identitate vizuală consecventă și să creezi o interfață pe care utilizatorii o vor găsi atât atrăgătoare, cât și intuitivă.

## Instrucțiuni

### Pasul 1: Configurează fișierul de stiluri

**Creează fundația CSS:**

1. **Creează** un fișier nou numit `styles.css` în directorul principal al proiectului.
2. **Conectează** fișierul de stiluri în fișierul `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Începe** cu resetarea CSS și setările moderne implicite:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```


### Pasul 2: Cerințe pentru sistemul de design

**Implementează aceste elemente esențiale de design:**

#### Paleta de culori
- **Culoare primară**: Alege o culoare profesională pentru butoane și evidențieri.
- **Culoare secundară**: O culoare complementară pentru accente și acțiuni secundare.
- **Culori neutre**: Nuanțe de gri pentru text, borduri și fundaluri.
- **Culori de succes/eroare**: Verde pentru stările de succes, roșu pentru erori.

#### Tipografie
- **Ierarhia titlurilor**: Distincție clară între elementele H1, H2 și H3.
- **Textul corpului**: Dimensiune de font ușor de citit (minimum 16px) și înălțime de linie adecvată.
- **Etichete pentru formulare**: Stilizare clară și accesibilă a textului.

#### Layout și spațiere
- **Spațiere consecventă**: Utilizează o scală de spațiere (8px, 16px, 24px, 32px).
- **Sistem de grilă**: Layout organizat pentru formulare și secțiuni de conținut.
- **Design responsiv**: Abordare orientată spre dispozitive mobile, cu puncte de întrerupere.

### Pasul 3: Stilizarea componentelor

**Stilizează aceste componente specifice:**

#### Formulare
- **Câmpuri de introducere**: Borduri profesionale, stări de focus și stilizare pentru validare.
- **Butoane**: Efecte de hover, stări dezactivate și indicatori de încărcare.
- **Etichete**: Poziționare clară și indicatori pentru câmpuri obligatorii.
- **Mesaje de eroare**: Stilizare vizibilă pentru erori și mesaje utile.

#### Navigare
- **Antet**: Zonă de navigare curată și personalizată.
- **Linkuri**: Stări clare de hover și indicatori activi.
- **Logo/Titlu**: Element distinctiv de branding.

#### Zone de conținut
- **Secțiuni**: Separare vizuală clară între diferite zone.
- **Carduri**: Dacă folosești layout-uri bazate pe carduri, include umbre și borduri.
- **Fundaluri**: Utilizare adecvată a spațiului alb și fundaluri subtile.

### Pasul 4: Funcționalități avansate (opțional)

**Ia în considerare implementarea acestor funcționalități avansate:**
- **Mod întunecat**: Posibilitatea de a comuta între teme deschise și întunecate.
- **Animații**: Tranziții subtile și micro-interacțiuni.
- **Stări de încărcare**: Feedback vizual în timpul trimiterii formularelor.
- **Imagini responsive**: Optimizarea imaginilor pentru diferite dimensiuni de ecran.

## Inspirație pentru design

**Caracteristici ale aplicațiilor bancare moderne:**
- **Design curat și minimalist** cu mult spațiu alb.
- **Scheme de culori profesionale** (albastru, verde sau nuanțe neutre sofisticate).
- **Ierarhie vizuală clară** cu butoane de tip call-to-action proeminente.
- **Raport de contrast accesibil** conform ghidurilor WCAG.
- **Layout-uri responsive** care funcționează pe toate dispozitivele.

## Cerințe tehnice

### Organizarea CSS
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```


### Cerințe de accesibilitate
- **Contrastul culorilor**: Asigură un raport de cel puțin 4.5:1 pentru textul normal.
- **Indicatori de focus**: Stări de focus vizibile pentru navigarea cu tastatura.
- **Etichete pentru formulare**: Asociate corect cu câmpurile de introducere.
- **Design responsiv**: Utilizabil pe ecrane de la 320px la 1920px lățime.

## Grila de evaluare

| Criterii | Exemplară (A) | Proficient (B) | În dezvoltare (C) | Necesită îmbunătățiri (F) |
|----------|---------------|----------------|-------------------|--------------------------|
| **Sistem de design** | Implementează un sistem de design cuprinzător, cu culori, tipografie și spațiere consecvente | Folosește stiluri consecvente cu modele de design clare și o bună ierarhie vizuală | Stilizare de bază aplicată, cu unele probleme de consistență sau elemente de design lipsă | Stilizare minimă, cu alegeri de design inconsistente sau conflictuale |
| **Experiența utilizatorului** | Creează o interfață intuitivă, profesională, cu o utilizabilitate excelentă și un aspect vizual atrăgător | Oferă o experiență bună utilizatorului, cu navigare clară și conținut ușor de citit | Utilizabilitate de bază, cu necesitatea unor îmbunătățiri ale UX | Utilizabilitate slabă, dificil de navigat sau citit |
| **Implementare tehnică** | Folosește tehnici moderne de CSS, structură organizată a codului și respectă cele mai bune practici | Implementează CSS eficient, cu o bună organizare și tehnici adecvate | CSS funcționează corect, dar poate lipsi organizarea sau abordările moderne | Implementare CSS slabă, cu probleme tehnice sau de compatibilitate între browsere |
| **Design responsiv** | Design complet responsiv care funcționează excelent pe toate dimensiunile de dispozitive | Comportament responsiv bun, cu probleme minore pe unele dimensiuni de ecran | Implementare responsivă de bază, cu unele probleme de layout | Neresponsiv sau probleme semnificative pe dispozitivele mobile |
| **Accesibilitate** | Respectă ghidurile WCAG, cu navigare excelentă prin tastatură și suport pentru cititoare de ecran | Practici bune de accesibilitate, cu contrast și indicatori de focus adecvați | Considerații de accesibilitate de bază, cu unele elemente lipsă | Accesibilitate slabă, dificil de utilizat pentru persoanele cu dizabilități |

## Ghid de trimitere

**Include în trimiterea ta:**
- **styles.css**: Fișierul complet de stiluri.
- **HTML actualizat**: Orice modificări HTML pe care le-ai făcut.
- **Capturi de ecran**: Imagini care arată designul tău pe desktop și mobil.
- **README**: Descriere succintă a alegerilor tale de design și a paletei de culori.

**Puncte bonus pentru:**
- **Proprietăți CSS personalizate** pentru tematică ușor de întreținut.
- **Funcționalități avansate CSS** precum Grid, Flexbox sau animații CSS.
- **Considerații de performanță** precum CSS optimizat și dimensiuni minime ale fișierelor.
- **Testare pe mai multe browsere** pentru a asigura compatibilitatea pe diferite browsere.

> 💡 **Sfat util**: Începe cu designul pentru mobil, apoi îmbunătățește pentru ecrane mai mari. Această abordare orientată spre mobil asigură că aplicația ta funcționează bine pe toate dispozitivele și respectă cele mai bune practici de dezvoltare web moderne.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.