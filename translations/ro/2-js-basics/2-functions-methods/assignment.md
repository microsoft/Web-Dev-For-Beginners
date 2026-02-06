# Distracție cu Funcții

## Instrucțiuni

În această temă, vei exersa crearea diferitelor tipuri de funcții pentru a consolida conceptele pe care le-ai învățat despre funcțiile JavaScript, parametrii, valorile implicite și declarațiile de returnare.

Creează un fișier JavaScript numit `functions-practice.js` și implementează următoarele funcții:

### Partea 1: Funcții de bază
1. **Creează o funcție numită `sayHello`** care nu primește niciun parametru și pur și simplu afișează "Hello!" în consolă.

2. **Creează o funcție numită `introduceYourself`** care primește un parametru `name` și afișează un mesaj de genul "Hi, my name is [name]" în consolă.

### Partea 2: Funcții cu parametri impliciți
3. **Creează o funcție numită `greetPerson`** care primește doi parametri: `name` (obligatoriu) și `greeting` (opțional, implicit "Hello"). Funcția ar trebui să afișeze un mesaj de genul "[greeting], [name]!" în consolă.

### Partea 3: Funcții care returnează valori
4. **Creează o funcție numită `addNumbers`** care primește doi parametri (`num1` și `num2`) și returnează suma lor.

5. **Creează o funcție numită `createFullName`** care primește parametrii `firstName` și `lastName` și returnează numele complet ca un singur șir de caractere.

### Partea 4: Combină totul
6. **Creează o funcție numită `calculateTip`** care primește doi parametri: `billAmount` (obligatoriu) și `tipPercentage` (opțional, implicit 15). Funcția ar trebui să calculeze și să returneze suma bacșișului.

### Partea 5: Testează funcțiile tale
Adaugă apeluri de funcții pentru a testa fiecare dintre funcțiile tale și afișează rezultatele folosind `console.log()`.

**Exemple de apeluri de testare:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Criterii de evaluare

| Criteriu | Exemplară | Adecvată | Necesită îmbunătățiri |
| -------- | --------- | -------- | --------------------- |
| **Crearea funcțiilor** | Toate cele 6 funcții sunt implementate corect cu sintaxă și convenții de denumire adecvate | 4-5 funcții sunt implementate corect cu mici probleme de sintaxă | 3 sau mai puține funcții implementate sau erori majore de sintaxă |
| **Parametri și valori implicite** | Folosește corect parametrii obligatorii, parametrii opționali și valorile implicite conform specificațiilor | Folosește corect parametrii, dar pot exista probleme cu valorile implicite | Implementarea parametrilor este incorectă sau lipsă |
| **Valori returnate** | Funcțiile care ar trebui să returneze valori fac acest lucru corect, iar funcțiile care nu ar trebui să returneze valori doar execută acțiuni | Majoritatea valorilor returnate sunt corecte, cu mici probleme | Probleme semnificative cu declarațiile de returnare |
| **Calitatea codului** | Cod curat, bine organizat, cu nume de variabile semnificative și indentare corespunzătoare | Codul funcționează, dar ar putea fi mai curat sau mai bine organizat | Codul este dificil de citit sau structurat prost |
| **Testare** | Toate funcțiile sunt testate cu apeluri de funcții adecvate, iar rezultatele sunt afișate clar | Majoritatea funcțiilor sunt testate adecvat | Testarea funcțiilor este limitată sau incorectă |

## Provocări Bonus (Opțional)

Dacă vrei să te provoci mai mult:

1. **Creează o versiune cu funcție săgeată** a uneia dintre funcțiile tale
2. **Creează o funcție care acceptă o altă funcție ca parametru** (cum ar fi exemplele `setTimeout` din lecție)
3. **Adaugă validarea inputului** pentru a te asigura că funcțiile tale gestionează corect intrările invalide

---

> 💡 **Sfat**: Amintește-ți să deschizi consola dezvoltatorului browserului (F12) pentru a vedea rezultatele declarațiilor tale `console.log()`!

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru neînțelegerile sau interpretările greșite care pot apărea din utilizarea acestei traduceri.