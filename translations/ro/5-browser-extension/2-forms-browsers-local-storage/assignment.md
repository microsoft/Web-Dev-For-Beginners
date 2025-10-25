<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-24T22:20:36+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "ro"
}
-->
# Adoptă un API

## Prezentare generală

APIs deschid posibilități nesfârșite pentru dezvoltarea web creativă! În această temă, vei alege un API extern și vei construi o extensie de browser care rezolvă o problemă reală sau oferă funcționalități valoroase utilizatorilor.

## Instrucțiuni

### Pasul 1: Alege API-ul
Selectează un API din această [listă de API-uri publice gratuite](https://github.com/public-apis/public-apis). Ia în considerare aceste categorii:

**Opțiuni populare pentru începători:**
- **Divertisment**: [Dog CEO API](https://dog.ceo/dog-api/) pentru imagini aleatorii cu câini
- **Vreme**: [OpenWeatherMap](https://openweathermap.org/api) pentru date meteo actuale
- **Citate**: [Quotable API](https://quotable.io/) pentru citate inspiraționale
- **Știri**: [NewsAPI](https://newsapi.org/) pentru titluri de știri actuale
- **Curiozități**: [Numbers API](http://numbersapi.com/) pentru fapte interesante despre numere

### Pasul 2: Planifică Extensia
Înainte de a începe să scrii codul, răspunde la aceste întrebări de planificare:
- Ce problemă rezolvă extensia ta?
- Cine este utilizatorul țintă?
- Ce date vei stoca în local storage?
- Cum vei gestiona eșecurile API sau limitele de rată?

### Pasul 3: Construiește Extensia
Extensia ta ar trebui să includă:

**Funcționalități necesare:**
- Formulare pentru introducerea parametrilor necesari API-ului
- Integrare API cu gestionarea corespunzătoare a erorilor
- Stocare locală pentru preferințele utilizatorului sau cheile API
- Interfață curată și receptivă
- Stări de încărcare și feedback pentru utilizator

**Cerințe de cod:**
- Folosește caracteristici moderne JavaScript (ES6+)
- Implementează async/await pentru apelurile API
- Include gestionarea corespunzătoare a erorilor cu blocuri try/catch
- Adaugă comentarii semnificative care explică codul tău
- Urmează un format consistent al codului

### Pasul 4: Testează și Perfecționează
- Testează extensia ta cu diverse intrări
- Gestionează cazurile limită (fără internet, răspunsuri API invalide)
- Asigură-te că extensia funcționează după repornirea browserului
- Adaugă mesaje de eroare prietenoase pentru utilizator

## Provocări Bonus

Du extensia ta la următorul nivel:
- Adaugă mai multe puncte de acces API pentru funcționalități mai bogate
- Implementează cache de date pentru a reduce apelurile API
- Creează scurtături de tastatură pentru acțiuni comune
- Adaugă funcționalități de export/import de date
- Implementează opțiuni de personalizare pentru utilizatori

## Cerințe de predare

1. **Extensie de browser funcțională** care se integrează cu succes cu API-ul ales
2. **Fișier README** care explică:
   - Ce API ai ales și de ce
   - Cum să instalezi și să folosești extensia
   - Orice chei API sau configurări necesare
   - Capturi de ecran ale extensiei în acțiune
3. **Cod curat și comentat** care respectă practicile moderne JavaScript

## Criterii de evaluare

| Criterii | Exemplary (90-100%) | Proficient (80-89%) | Developing (70-79%) | Beginning (60-69%) |
|----------|---------------------|---------------------|---------------------|--------------------|
| **Integrare API** | Integrare API impecabilă cu gestionarea completă a erorilor și a cazurilor limită | Integrare API reușită cu gestionarea de bază a erorilor | API funcționează, dar are gestionare limitată a erorilor | Integrarea API are probleme semnificative |
| **Calitatea codului** | JavaScript modern, curat, bine comentat, care respectă cele mai bune practici | Structură bună a codului cu comentarii adecvate | Codul funcționează, dar necesită o organizare mai bună | Calitate slabă a codului, cu comentarii minime |
| **Experiența utilizatorului** | Interfață finisată cu stări de încărcare excelente și feedback pentru utilizator | Interfață bună cu feedback de bază pentru utilizator | Interfață de bază care funcționează adecvat | Experiență slabă pentru utilizator, interfață confuză |
| **Stocare locală** | Utilizare sofisticată a stocării locale cu validare și gestionare a datelor | Implementare corectă a stocării locale pentru funcționalități cheie | Implementare de bază a stocării locale | Utilizare minimă sau incorectă a stocării locale |
| **Documentație** | README cuprinzător cu instrucțiuni de configurare și capturi de ecran | Documentație bună care acoperă majoritatea cerințelor | Documentație de bază care lipsește unele detalii | Documentație slabă sau lipsă |

## Sfaturi pentru început

1. **Începe simplu**: Alege un API care nu necesită autentificare complexă
2. **Citește documentația**: Înțelege bine punctele de acces și răspunsurile API-ului ales
3. **Planifică interfața**: Schițează interfața extensiei înainte de a începe să scrii codul
4. **Testează frecvent**: Construiește incremental și testează fiecare funcționalitate pe măsură ce o adaugi
5. **Gestionează erorile**: Presupune întotdeauna că apelurile API pot eșua și planifică în consecință

## Resurse

- [Documentație pentru extensii de browser](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Ghid Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial despre stocarea locală](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Parcurgerea și gestionarea JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Distracție plăcută construind ceva util și creativ! 🚀

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.