# Luarea deciziilor: Procesor de note pentru studenți

## Obiective de învățare

În această temă, vei exersa conceptele de luare a deciziilor din această lecție prin construirea unui program care procesează notele studenților din diferite sisteme de notare. Vei folosi instrucțiuni `if...else`, operatori de comparație și operatori logici pentru a determina care studenți își promovează cursurile.

## Provocarea

Lucrezi pentru o școală care s-a unit recent cu o altă instituție. Acum trebuie să procesezi notele studenților din două sisteme de notare complet diferite și să determini care studenți promovează. Aceasta este o oportunitate perfectă pentru a exersa logica condițională!

### Înțelegerea sistemelor de notare

#### Primul sistem de notare (Numeric)
- Notele sunt exprimate ca numere de la 1 la 5
- **Notă de trecere**: 3 și mai mult (3, 4 sau 5)
- **Notă de picare**: Sub 3 (1 sau 2)

#### Al doilea sistem de notare (Note literale)
- Notele sunt exprimate prin litere: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Note de trecere**: `A`, `A-`, `B`, `B-`, `C`, `C-` (toate notele enumerate sunt de trecere)
- **Notă**: Acest sistem nu include note de picare precum `D` sau `F`

### Sarcina ta

Având următorul array `allStudents` care reprezintă toți studenții și notele lor, construiește un nou array `studentsWhoPass` care să conțină toți studenții care promovează conform sistemelor lor de notare respective.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Abordare pas cu pas

1. **Configurează un ciclu** pentru a parcurge fiecare notă din array-ul `allStudents`
2. **Verifică tipul notei** (este un număr sau un șir de caractere?)
3. **Aplică regulile corespunzătoare sistemului de notare**:
   - Pentru numere: verifică dacă nota >= 3
   - Pentru șiruri de caractere: verifică dacă este una dintre notele literale valide de trecere
4. **Adaugă notele de trecere** în array-ul `studentsWhoPass`

### Tehnici utile de codare

Folosește aceste concepte din lecție în JavaScript:

- **Operatorul typeof**: `typeof grade === 'number'` pentru a verifica dacă este o notă numerică
- **Operatori de comparație**: `>=` pentru a compara notele numerice
- **Operatori logici**: `||` pentru a verifica mai multe condiții de note literale
- **Instrucțiuni if...else**: pentru a gestiona diferite sisteme de notare
- **Metode pentru array-uri**: `.push()` pentru a adăuga notele de trecere în noul array

### Rezultatul așteptat

Când rulezi programul, `studentsWhoPass` ar trebui să conțină: `['A', 'B-', 4, 5]`

**De ce aceste note promovează:**
- `'A'` și `'B-'` sunt note literale valide (toate notele literale din acest sistem sunt de trecere)
- `4` și `5` sunt note numerice >= 3
- `1` și `2` pică deoarece sunt note numerice < 3

## Testarea soluției tale

Testează codul tău cu diferite scenarii:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Provocări suplimentare

După ce finalizezi tema de bază, încearcă aceste extensii:

1. **Adaugă validare**: Verifică pentru note invalide (cum ar fi numere negative sau litere invalide)
2. **Calculează statistici**: Determină câți studenți promovează vs. câți pică
3. **Conversia notelor**: Convertește toate notele într-un singur sistem numeric (A=5, B=4, C=3, etc.)

## Criterii de evaluare

| Criterii | Exemplară (4) | Proficient (3) | În dezvoltare (2) | Începător (1) |
|----------|---------------|----------------|--------------------|---------------|
| **Funcționalitate** | Programul identifică corect toate notele de trecere din ambele sisteme | Programul funcționează cu mici probleme sau cazuri limită | Programul funcționează parțial, dar are erori logice | Programul are erori semnificative sau nu rulează |
| **Structura codului** | Cod curat, bine organizat, cu logică adecvată if...else | Structură bună cu instrucțiuni condiționale adecvate | Structură acceptabilă cu unele probleme organizatorice | Structură slabă, logică dificil de urmărit |
| **Utilizarea conceptelor** | Folosește eficient operatorii de comparație, operatorii logici și instrucțiunile condiționale | Utilizare bună a conceptelor lecției cu mici lacune | Utilizare parțială a conceptelor lecției, dar lipsesc elemente cheie | Utilizare limitată a conceptelor lecției |
| **Rezolvarea problemei** | Demonstrează o înțelegere clară a problemei și o abordare elegantă a soluției | Abordare bună a rezolvării problemei cu logică solidă | Rezolvarea problemei este adecvată, dar cu unele confuzii | Abordare neclară, nu demonstrează înțelegerea problemei |

## Ghid de trimitere

1. **Testează codul tău** temeinic cu exemplele furnizate
2. **Adaugă comentarii** care explică logica ta, mai ales pentru instrucțiunile condiționale
3. **Verifică dacă rezultatul** se potrivește cu rezultatele așteptate: `['A', 'B-', 4, 5]`
4. **Ia în considerare cazurile limită** precum array-uri goale sau tipuri de date neașteptate

> 💡 **Sfat util**: Începe simplu! Fă ca funcționalitatea de bază să funcționeze mai întâi, apoi adaugă funcționalități mai sofisticate. Amintește-ți, scopul este să exersezi logica de luare a deciziilor cu instrumentele pe care le-ai învățat în această lecție.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.