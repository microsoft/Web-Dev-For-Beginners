<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-24T23:48:44+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "hr"
}
-->
# Zabava s funkcijama

## Upute

U ovom zadatku vježbat ćete kreiranje različitih vrsta funkcija kako biste učvrstili koncepte koje ste naučili o JavaScript funkcijama, parametrima, zadanim vrijednostima i povratnim vrijednostima.

Napravite JavaScript datoteku pod nazivom `functions-practice.js` i implementirajte sljedeće funkcije:

### Dio 1: Osnovne funkcije
1. **Napravite funkciju pod nazivom `sayHello`** koja ne prima nikakve parametre i jednostavno ispisuje "Hello!" u konzolu.

2. **Napravite funkciju pod nazivom `introduceYourself`** koja prima parametar `name` i ispisuje poruku poput "Hi, my name is [name]" u konzolu.

### Dio 2: Funkcije s zadanim parametrima
3. **Napravite funkciju pod nazivom `greetPerson`** koja prima dva parametra: `name` (obavezno) i `greeting` (opcionalno, zadano "Hello"). Funkcija bi trebala ispisati poruku poput "[greeting], [name]!" u konzolu.

### Dio 3: Funkcije koje vraćaju vrijednosti
4. **Napravite funkciju pod nazivom `addNumbers`** koja prima dva parametra (`num1` i `num2`) i vraća njihov zbroj.

5. **Napravite funkciju pod nazivom `createFullName`** koja prima parametre `firstName` i `lastName` te vraća puno ime kao jedan string.

### Dio 4: Kombinacija svega
6. **Napravite funkciju pod nazivom `calculateTip`** koja prima dva parametra: `billAmount` (obavezno) i `tipPercentage` (opcionalno, zadano 15). Funkcija bi trebala izračunati i vratiti iznos napojnice.

### Dio 5: Testirajte svoje funkcije
Dodajte pozive funkcija kako biste testirali svaku od njih i prikazali rezultate koristeći `console.log()`.

**Primjeri poziva za testiranje:**
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

## Rubrika

| Kriterij | Izvrsno | Zadovoljavajuće | Potrebno poboljšanje |
| -------- | --------- | -------- | ----------------- |
| **Kreiranje funkcija** | Svih 6 funkcija ispravno je implementirano s pravilnom sintaksom i konvencijama imenovanja | 4-5 funkcija ispravno je implementirano s manjim sintaktičkim pogreškama | 3 ili manje funkcija implementirano ili značajne sintaktičke pogreške |
| **Parametri i zadane vrijednosti** | Ispravno se koriste obavezni parametri, opcionalni parametri i zadane vrijednosti kako je navedeno | Parametri se koriste ispravno, ali mogu postojati problemi s zadanim vrijednostima | Neispravna ili nedostajuća implementacija parametara |
| **Povratne vrijednosti** | Funkcije koje bi trebale vraćati vrijednosti to čine ispravno, a funkcije koje ne bi trebale vraćati vrijednosti samo izvršavaju radnje | Većina povratnih vrijednosti je ispravna uz manje probleme | Značajni problemi s povratnim vrijednostima |
| **Kvaliteta koda** | Čist, dobro organiziran kod s smislenim nazivima varijabli i pravilnom uvlakom | Kod radi, ali mogao bi biti čišći ili bolje organiziran | Kod je teško čitljiv ili loše strukturiran |
| **Testiranje** | Sve funkcije su testirane s odgovarajućim pozivima funkcija i rezultati su jasno prikazani | Većina funkcija je adekvatno testirana | Ograničeno ili netočno testiranje funkcija |

## Dodatni izazovi (opcionalno)

Ako želite dodatno izazvati sebe:

1. **Napravite verziju funkcije koristeći strelicu (arrow function)**
2. **Napravite funkciju koja prihvaća drugu funkciju kao parametar** (poput primjera `setTimeout` iz lekcije)
3. **Dodajte validaciju unosa** kako biste osigurali da vaše funkcije pravilno obrađuju nevažeće unose

---

> 💡 **Savjet**: Ne zaboravite otvoriti konzolu preglednika (F12) kako biste vidjeli izlaz vaših `console.log()` izjava!

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.