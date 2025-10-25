<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-24T22:17:43+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "ro"
}
-->
# Construiește un Joc Demonstrativ

## Prezentare Generală a Temei

Acum că ai stăpânit condițiile de finalizare ale jocului și funcționalitatea de restart în jocul tău spațial, este momentul să aplici aceste concepte într-o experiență de joc complet nouă. Vei proiecta și construi propriul joc care să demonstreze diferite modele de condiții de finalizare și mecanisme de restart.

Această temă te provoacă să gândești creativ despre designul jocurilor, în timp ce exersezi abilitățile tehnice pe care le-ai învățat. Vei explora diferite scenarii de victorie și înfrângere, vei implementa progresul jucătorului și vei crea experiențe captivante de restart.

## Cerințele Proiectului

### Funcționalități de Bază ale Jocului

Jocul tău trebuie să includă următoarele elemente esențiale:

**Varietate în Condițiile de Finalizare**: Implementează cel puțin două moduri diferite prin care jocul se poate termina:
- **Victorie bazată pe puncte**: Jucătorul atinge un scor țintă sau colectează obiecte specifice
- **Înfrângere bazată pe vieți**: Jucătorul pierde toate viețile sau punctele de sănătate disponibile
- **Finalizare obiectiv**: Toți inamicii sunt învinși, obiectele specifice sunt colectate sau obiectivele sunt atinse
- **Bazat pe timp**: Jocul se termină după o durată setată sau când un cronometru ajunge la zero

**Funcționalitate de Restart**: 
- **Resetarea stării jocului**: Elimină toate obiectele de joc anterioare și resetează variabilele
- **Reinițializarea sistemelor**: Începe de la zero cu statistici noi ale jucătorului, inamici și obiective
- **Controale prietenoase pentru utilizator**: Oferă instrucțiuni clare pentru restartarea jocului

**Feedback pentru Jucător**:
- **Mesaje de victorie**: Celebrează realizările jucătorului cu feedback pozitiv
- **Mesaje de înfrângere**: Oferă mesaje încurajatoare care motivează reluarea jocului
- **Indicatori de progres**: Afișează scorul curent, viețile sau starea obiectivelor

### Idei de Joc și Inspirație

Alege unul dintre aceste concepte de joc sau creează propriul tău:

#### 1. Joc de Aventură pe Consolă
Creează o aventură bazată pe text cu mecanisme de luptă:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Funcționalități cheie de implementat:**
- **Luptă pe ture** cu opțiuni diferite de atac
- **Puncte de sănătate** pentru jucător și inamici
- **Sistem de inventar** pentru colectarea de monede sau obiecte
- **Tipuri multiple de inamici** cu dificultăți variate
- **Condiție de victorie** când toți inamicii sunt învinși

#### 2. Joc de Colecționare
- **Obiectiv**: Colectează obiecte specifice evitând obstacolele
- **Condiții de finalizare**: Ajunge la numărul țintă de obiecte colectate sau pierde toate viețile
- **Progresie**: Obiectele devin mai greu de atins pe măsură ce jocul continuă

#### 3. Joc de Puzzle
- **Obiectiv**: Rezolvă puzzle-uri din ce în ce mai dificile
- **Condiții de finalizare**: Completează toate nivelurile sau rămâi fără mișcări/timp
- **Restart**: Resetează la primul nivel cu progresul șters

#### 4. Joc de Apărare
- **Obiectiv**: Protejează-ți baza de valurile de inamici
- **Condiții de finalizare**: Supraviețuiește tuturor valurilor (victorie) sau baza este distrusă (înfrângere)
- **Progresie**: Valurile de inamici cresc în dificultate și număr

## Ghid de Implementare

### Începe

1. **Planifică designul jocului**:
   - Schițează bucla de bază a gameplay-ului
   - Definește clar condițiile de finalizare
   - Identifică ce date trebuie resetate la restart

2. **Configurează structura proiectului**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Creează bucla principală a jocului**:
   - Inițializează starea jocului
   - Gestionează input-ul utilizatorului
   - Actualizează logica jocului
   - Verifică condițiile de finalizare
   - Redă starea curentă

### Cerințe Tehnice

**Folosește JavaScript Modern**: 
- Aplică `const` și `let` pentru declarațiile de variabile
- Folosește funcții săgeată acolo unde este cazul
- Implementează funcționalități ES6+ precum șiruri de caractere template și destructurare

**Arhitectură Bazată pe Evenimente**:
- Creează gestionari de evenimente pentru interacțiunile utilizatorului
- Implementează schimbările stării jocului prin evenimente
- Folosește ascultători de evenimente pentru funcționalitatea de restart

**Practici de Cod Curat**:
- Scrie funcții cu responsabilități unice
- Folosește nume descriptive pentru variabile și funcții
- Adaugă comentarii care explică logica și regulile jocului
- Organizează codul în secțiuni logice

## Cerințe de Predare

### Livrabile

1. **Fișiere complete ale jocului**: Toate fișierele HTML, CSS și JavaScript necesare pentru rularea jocului
2. **README.md**: Documentație care explică:
   - Cum se joacă jocul
   - Ce condiții de finalizare ai implementat
   - Instrucțiuni pentru restart
   - Orice funcționalități sau mecanisme speciale
3. **Comentarii în cod**: Explicații clare ale logicii și algoritmilor jocului

### Listă de Verificare pentru Testare

Înainte de predare, verifică dacă jocul tău:

- [ ] **Rulează fără erori** în consola browserului
- [ ] **Implementează multiple condiții de finalizare** conform specificațiilor
- [ ] **Se restartează corect** cu resetarea completă a stării
- [ ] **Oferă feedback clar** jucătorilor despre starea jocului
- [ ] **Folosește sintaxa modernă JavaScript** și cele mai bune practici
- [ ] **Include documentație cuprinzătoare** în README.md

## Rubrica de Evaluare

| Criterii | Exemplară (4) | Proficientă (3) | În dezvoltare (2) | Începător (1) |
|----------|---------------|-----------------|-------------------|---------------|
| **Funcționalitatea Jocului** | Joc complet cu multiple condiții de finalizare, restart lin și experiență de joc bine finisată | Joc complet cu condiții de finalizare de bază și mecanism de restart funcțional | Joc parțial cu unele condiții de finalizare implementate, restartul poate avea probleme minore | Joc incomplet cu funcționalitate limitată și erori semnificative |
| **Calitatea Codului** | Cod curat, bine organizat, folosind practici moderne JavaScript, comentarii cuprinzătoare și structură excelentă | Organizare bună a codului cu sintaxă modernă, comentarii adecvate și structură clară | Organizare de bază a codului cu unele practici moderne, comentarii minime | Organizare slabă a codului, sintaxă depășită, lipsă de comentarii și structură |
| **Experiența Utilizatorului** | Gameplay intuitiv cu instrucțiuni clare, feedback excelent și experiență captivantă de finalizare/restart | Gameplay bun cu instrucțiuni adecvate și feedback funcțional, finalizare/restart funcțional | Gameplay de bază cu instrucțiuni minime, feedback limitat despre starea jocului | Gameplay confuz cu instrucțiuni neclare și feedback slab pentru utilizator |
| **Implementare Tehnică** | Demonstrează stăpânirea conceptelor de dezvoltare a jocurilor, gestionarea evenimentelor și administrarea stării | Arată o înțelegere solidă a conceptelor de joc cu o implementare bună | Înțelegere de bază cu o implementare acceptabilă | Înțelegere limitată cu o implementare slabă |
| **Documentație** | README cuprinzător cu instrucțiuni clare, cod bine documentat și dovezi de testare detaliate | Documentație bună cu instrucțiuni clare și comentarii adecvate în cod | Documentație de bază cu instrucțiuni minime | Documentație slabă sau lipsă |

### Scara de Notare
- **Exemplară (16-20 puncte)**: Depășește așteptările cu funcționalități creative și implementare bine finisată
- **Proficientă (12-15 puncte)**: Îndeplinește toate cerințele cu o execuție solidă
- **În dezvoltare (8-11 puncte)**: Îndeplinește majoritatea cerințelor cu probleme minore
- **Începător (4-7 puncte)**: Îndeplinește unele cerințe, dar necesită îmbunătățiri semnificative

## Resurse Suplimentare de Învățare

- [Ghidul de Dezvoltare a Jocurilor MDN](https://developer.mozilla.org/en-US/docs/Games)
- [Tutoriale de Dezvoltare a Jocurilor în JavaScript](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Documentația API Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Principii de Design pentru Jocuri](https://www.gamasutra.com/blogs/)

> 💡 **Sfat Util**: Începe simplu și adaugă funcționalități treptat. Un joc simplu și bine finisat este mai bun decât un joc complex plin de erori!

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.