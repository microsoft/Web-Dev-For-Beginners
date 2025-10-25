<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-24T22:11:43+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "ro"
}
-->
# Refactorizarea codului și sarcina de documentare

## Obiective de învățare

Prin completarea acestei sarcini, vei exersa abilități esențiale de dezvoltare software pe care dezvoltatorii profesioniști le folosesc zilnic. Vei învăța să organizezi codul pentru a fi ușor de întreținut, să reduci duplicarea prin abstractizare și să documentezi munca ta pentru viitorii dezvoltatori (inclusiv pentru tine!).

Codul curat și bine documentat este esențial pentru proiectele reale de dezvoltare web, unde mai mulți dezvoltatori colaborează și bazele de cod evoluează în timp.

## Prezentarea sarcinii

Fișierul `app.js` al aplicației tale bancare a crescut semnificativ, incluzând funcționalități de autentificare, înregistrare și dashboard. Este momentul să refactorizezi acest cod folosind practici profesionale de dezvoltare pentru a îmbunătăți lizibilitatea, întreținerea și pentru a reduce duplicarea.

## Instrucțiuni

Transformă codul actual din `app.js` implementând aceste trei tehnici de refactorizare esențiale:

### 1. Extrage constantele de configurare

**Sarcină**: Creează o secțiune de configurare în partea de sus a fișierului cu constante reutilizabile.

**Ghid de implementare:**
- Extrage URL-ul de bază al API-ului serverului (în prezent hardcodificat în mai multe locuri)
- Creează constante pentru mesajele de eroare care apar în mai multe funcții
- Ia în considerare extragerea căilor de rutare și a ID-urilor elementelor utilizate în mod repetat

**Structură exemplu:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Creează o funcție unificată pentru cereri

**Sarcină**: Construiește o funcție reutilizabilă `sendRequest()` care elimină codul duplicat dintre `createAccount()` și `getAccount()`.

**Cerințe:**
- Să gestioneze atât cererile GET, cât și cele POST
- Să includă gestionarea corespunzătoare a erorilor
- Să suporte diferite puncte de acces URL
- Să accepte opțional date pentru corpul cererii

**Ghid pentru semnătura funcției:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Adaugă documentație profesională pentru cod

**Sarcină**: Documentează codul cu comentarii clare și utile care explică "de ce"-ul logicii tale.

**Standarde de documentare:**
- Adaugă documentație pentru funcții care explică scopul, parametrii și valorile returnate
- Include comentarii inline pentru logica complexă sau regulile de afaceri
- Grupează funcțiile legate între ele cu anteturi de secțiuni
- Explică orice modele de cod neobișnuite sau soluții specifice browserului

**Stil de documentare exemplu:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Criterii de succes

Codul refactorizat ar trebui să demonstreze aceste practici profesionale de dezvoltare:

### Implementare exemplară
- ✅ **Constante**: Toate șirurile magice și URL-urile sunt extrase în constante clar denumite
- ✅ **Principiul DRY**: Logica comună a cererilor este consolidată într-o funcție reutilizabilă `sendRequest()`
- ✅ **Documentație**: Funcțiile au comentarii JSDoc clare care explică scopul și parametrii
- ✅ **Organizare**: Codul este grupat logic cu anteturi de secțiuni și formatare consecventă
- ✅ **Gestionarea erorilor**: Gestionarea erorilor este îmbunătățită folosind noua funcție de cerere

### Implementare adecvată
- ✅ **Constante**: Majoritatea valorilor repetate sunt extrase, cu câteva valori hardcodate rămase
- ✅ **Factorizare**: Funcția de bază `sendRequest()` este creată, dar poate să nu gestioneze toate cazurile limită
- ✅ **Comentarii**: Funcțiile cheie sunt documentate, deși unele explicații ar putea fi mai complete
- ✅ **Lizibilitate**: Codul este, în general, bine organizat, cu unele zone care necesită îmbunătățiri

### Necesită îmbunătățiri
- ❌ **Constante**: Multe șiruri magice și URL-uri rămân hardcodate în întregul fișier
- ❌ **Duplicare**: Rămâne o duplicare semnificativă a codului între funcțiile similare
- ❌ **Documentație**: Comentarii lipsă sau inadecvate care nu explică scopul codului
- ❌ **Organizare**: Codul nu are o structură clară și grupare logică

## Testarea codului refactorizat

După refactorizare, asigură-te că aplicația bancară funcționează corect:

1. **Testează toate fluxurile utilizatorului**: Înregistrare, autentificare, afișarea dashboard-ului și gestionarea erorilor
2. **Verifică cererile API**: Confirmă că funcția `sendRequest()` funcționează atât pentru crearea, cât și pentru recuperarea conturilor
3. **Testează scenariile de eroare**: Testează cu credențiale invalide și erori de rețea
4. **Revizuiește ieșirea din consolă**: Asigură-te că nu au fost introduse erori noi în timpul refactorizării

## Ghid de trimitere

Trimite fișierul refactorizat `app.js` cu:
- Anteturi clare de secțiuni care organizează diferite funcționalități
- Formatare și indentare consecventă a codului
- Documentație JSDoc completă pentru toate funcțiile
- Un comentariu scurt în partea de sus care explică abordarea ta de refactorizare

**Provocare bonus**: Creează un fișier simplu de documentare a codului (`CODE_STRUCTURE.md`) care explică arhitectura aplicației tale și modul în care funcțiile diferite lucrează împreună.

## Conexiune cu lumea reală

Această sarcină reflectă tipul de întreținere a codului pe care dezvoltatorii profesioniști o efectuează în mod regulat. În mediile industriale:
- **Recenziile de cod** evaluează lizibilitatea și întreținerea, la fel ca această sarcină
- **Datoria tehnică** se acumulează atunci când codul nu este refactorizat și documentat regulat
- **Colaborarea în echipă** depinde de un cod clar și bine documentat pe care noii membri ai echipei îl pot înțelege
- **Corectarea erorilor** este mult mai ușoară în bazele de cod bine organizate, cu abstractizări corespunzătoare

Abilitățile pe care le exersezi aici - extragerea constantelor, eliminarea duplicării și scrierea unei documentații clare - sunt fundamentale pentru dezvoltarea software profesională.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegerile sau interpretările greșite care pot apărea din utilizarea acestei traduceri.