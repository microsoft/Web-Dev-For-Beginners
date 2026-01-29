# Exerciții cu Arrays și Buclă

## Instrucțiuni

Completează următoarele exerciții pentru a exersa lucrul cu arrays și bucle. Fiecare exercițiu se bazează pe concepte din lecție și te încurajează să aplici diferite tipuri de bucle și metode pentru arrays.

### Exercițiul 1: Generator de model numeric
Creează un program care listează fiecare al 3-lea număr între 1 și 20 și îl afișează în consolă.

**Cerințe:**
- Folosește o buclă `for` cu un increment personalizat
- Afișează numerele într-un format ușor de citit
- Adaugă comentarii descriptive care explică logica ta

**Rezultat așteptat:**
```
3, 6, 9, 12, 15, 18
```

> **Sfat:** Modifică expresia de iterare din bucla `for` pentru a sări peste numere.

### Exercițiul 2: Analiza unui Array
Creează un array cu cel puțin 8 numere diferite și scrie funcții pentru a analiza datele.

**Cerințe:**
- Creează un array numit `numbers` cu cel puțin 8 valori
- Scrie o funcție `findMaximum()` care returnează cel mai mare număr
- Scrie o funcție `findMinimum()` care returnează cel mai mic număr  
- Scrie o funcție `calculateSum()` care returnează suma tuturor numerelor
- Testează fiecare funcție și afișează rezultatele

**Provocare Bonus:** Creează o funcție care găsește al doilea cel mai mare număr din array.

### Exercițiul 3: Procesarea unui Array de Stringuri
Creează un array cu filmele/cărțile/melodiile tale preferate și exersează diferite tipuri de bucle.

**Cerințe:**
- Creează un array cu cel puțin 5 valori de tip string
- Folosește o buclă tradițională `for` pentru a afișa elementele cu numere (1. Numele Elementului)
- Folosește o buclă `for...of` pentru a afișa elementele cu litere mari
- Folosește metoda `forEach()` pentru a număra și afișa numărul total de caractere

**Exemplu de Rezultat:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Exercițiul 4: Filtrarea Datelor (Avansat)
Creează un program care procesează un array de obiecte ce reprezintă studenți.

**Cerințe:**
- Creează un array cu cel puțin 5 obiecte de tip student, fiecare având proprietăți: `name`, `age`, `grade`
- Folosește bucle pentru a găsi studenții care au 18 ani sau mai mult
- Calculează media notelor tuturor studenților
- Creează un nou array care conține doar studenții cu note mai mari de 85

**Structură Exemplu:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testarea Codului

Testează programele tale prin:
1. Rularea fiecărui exercițiu în consola browserului
2. Verificarea că rezultatele corespund celor așteptate
3. Testarea cu seturi de date diferite
4. Verificarea că codul tău gestionează cazurile limită (arrays goale, elemente unice)

## Ghid de Predare

Include următoarele în predarea ta:
- Cod JavaScript bine comentat pentru fiecare exercițiu
- Capturi de ecran sau rezultate text care arată rularea programelor tale
- O scurtă explicație despre ce tip de buclă ai ales pentru fiecare sarcină și de ce

## Criterii de Evaluare

| Criteriu | Exemplary (3 puncte) | Adequate (2 puncte) | Needs Improvement (1 punct) |
| -------- | -------------------- | ------------------- | --------------------------- |
| **Funcționalitate** | Toate exercițiile completate corect, inclusiv provocările bonus | Toate exercițiile obligatorii funcționează corect | Unele exerciții incomplete sau conțin erori |
| **Calitatea Codului** | Cod curat, bine organizat, cu nume de variabile descriptive | Codul funcționează, dar ar putea fi mai bine organizat | Codul este dezordonat sau greu de înțeles |
| **Comentarii** | Comentarii cuprinzătoare care explică logica și deciziile | Comentarii de bază prezente | Comentarii minime sau inexistente |
| **Utilizarea Buclelor** | Demonstrează înțelegerea diferitelor tipuri de bucle în mod corespunzător | Folosește bucle corect, dar cu varietate limitată | Utilizarea incorectă sau ineficientă a buclelor |
| **Testare** | Dovezi ale testării amănunțite cu mai multe scenarii | Testare de bază demonstrată | Puține dovezi ale testării |

## Întrebări de Reflecție

După ce ai completat exercițiile, ia în considerare:
1. Ce tip de buclă ți s-a părut cel mai natural de utilizat și de ce?
2. Ce provocări ai întâmpinat când ai lucrat cu arrays?
3. Cum ar putea aceste abilități să se aplice în proiecte reale de dezvoltare web?
4. Ce ai face diferit dacă ar trebui să optimizezi codul pentru performanță?

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.