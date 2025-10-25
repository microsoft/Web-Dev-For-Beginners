<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "90a3c32c3377f83ab750c2447c77ab98",
  "translation_date": "2025-10-24T23:49:30+00:00",
  "source_file": "2-js-basics/3-making-decisions/README.md",
  "language_code": "hr"
}
-->
# Osnove JavaScripta: Donošenje odluka

![Osnove JavaScripta - Donošenje odluka](../../../../translated_images/webdev101-js-decisions.69e1b20f272dd1f0b1cb2f8adaff3ed2a77c4f91db96d8a0594132a353fa189a.hr.png)

> Sketchnote autorice [Tomomi Imura](https://twitter.com/girlie_mac)

Jeste li se ikada zapitali kako aplikacije donose pametne odluke? Kao, na primjer, kako navigacijski sustav odabire najbržu rutu ili kako termostat odlučuje kada uključiti grijanje? Ovo je osnovni koncept donošenja odluka u programiranju.

Baš kao što je Analitički stroj Charlesa Babbagea bio dizajniran da slijedi različite sekvence operacija na temelju uvjeta, moderni JavaScript programi moraju donositi odluke na temelju različitih okolnosti. Ova sposobnost grananja i donošenja odluka ono je što statični kod pretvara u responzivne, inteligentne aplikacije.

U ovoj lekciji naučit ćete kako implementirati uvjetnu logiku u svoje programe. Istražit ćemo uvjetne naredbe, operatore usporedbe i logičke izraze koji omogućuju vašem kodu da procijeni situacije i odgovarajuće reagira.

## Kviz prije predavanja

[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/11)

Sposobnost donošenja odluka i kontroliranja toka programa temeljni je aspekt programiranja. Ovaj odjeljak pokriva kako kontrolirati put izvršavanja vaših JavaScript programa koristeći Booleove vrijednosti i uvjetnu logiku.

[![Donošenje odluka](https://img.youtube.com/vi/SxTp8j-fMMY/0.jpg)](https://youtube.com/watch?v=SxTp8j-fMMY "Donošenje odluka")

> 🎥 Kliknite na sliku iznad za video o donošenju odluka.

> Ovu lekciju možete pronaći na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-if-else/?WT.mc_id=academic-77807-sagibbon)!

## Kratki podsjetnik o Booleovim vrijednostima

Prije nego što istražimo donošenje odluka, prisjetimo se Booleovih vrijednosti iz prethodne lekcije. Nazvane po matematičaru Georgeu Booleu, ove vrijednosti predstavljaju binarna stanja – ili `true` ili `false`. Nema nejasnoća, nema sredine.

Ove binarne vrijednosti čine temelj sve računalne logike. Svaka odluka koju vaš program donosi u konačnici se svodi na Booleovu evaluaciju.

Stvaranje Booleovih varijabli je jednostavno:

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

Ovo stvara dvije varijable s eksplicitnim Booleovim vrijednostima.

✅ Booleove vrijednosti su nazvane po engleskom matematičaru, filozofu i logičaru Georgeu Booleu (1815.–1864.).

## Operatori usporedbe i Booleove vrijednosti

U praksi rijetko ćete ručno postavljati Booleove vrijednosti. Umjesto toga, generirat ćete ih evaluacijom uvjeta: "Je li ovaj broj veći od onog?" ili "Jesu li ove vrijednosti jednake?"

Operatori usporedbe omogućuju ove evaluacije. Oni uspoređuju vrijednosti i vraćaju Booleove rezultate na temelju odnosa između operanada.

| Simbol | Opis                                                                                                                                                   | Primjer            |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `<`    | **Manje od**: Uspoređuje dvije vrijednosti i vraća Booleovu vrijednost `true` ako je vrijednost na lijevoj strani manja od one na desnoj                 | `5 < 6 // true`    |
| `<=`   | **Manje ili jednako**: Uspoređuje dvije vrijednosti i vraća Booleovu vrijednost `true` ako je vrijednost na lijevoj strani manja ili jednaka onoj na desnoj | `5 <= 6 // true`   |
| `>`    | **Veće od**: Uspoređuje dvije vrijednosti i vraća Booleovu vrijednost `true` ako je vrijednost na lijevoj strani veća od one na desnoj                  | `5 > 6 // false`   |
| `>=`   | **Veće ili jednako**: Uspoređuje dvije vrijednosti i vraća Booleovu vrijednost `true` ako je vrijednost na lijevoj strani veća ili jednaka onoj na desnoj | `5 >= 6 // false`  |
| `===`  | **Stroga jednakost**: Uspoređuje dvije vrijednosti i vraća Booleovu vrijednost `true` ako su vrijednosti na desnoj i lijevoj strani jednake I iste vrste | `5 === 6 // false` |
| `!==`  | **Nejednakost**: Uspoređuje dvije vrijednosti i vraća suprotnu Booleovu vrijednost od one koju bi vratio operator stroge jednakosti                     | `5 !== 6 // true`  |

✅ Provjerite svoje znanje pisanjem nekoliko usporedbi u konzoli vašeg preglednika. Iznenađuje li vas neki od vraćenih podataka?

## If naredba

Naredba `if` je poput postavljanja pitanja u vašem kodu. "Ako je ovaj uvjet istinit, onda učini ovu stvar." To je vjerojatno najvažniji alat koji ćete koristiti za donošenje odluka u JavaScriptu.

Evo kako to funkcionira:

```javascript
if (condition) {
  // Condition is true. Code in this block will run.
}
```

Uvjet ide unutar zagrada, a ako je `true`, JavaScript izvršava kod unutar vitičastih zagrada. Ako je `false`, JavaScript jednostavno preskače cijeli taj blok.

Često ćete koristiti operatore usporedbe za stvaranje ovih uvjeta. Pogledajmo praktičan primjer:

```javascript
let currentMoney = 1000;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
}
```

Budući da `1000 >= 800` evaluira na `true`, kod unutar bloka se izvršava, prikazujući "Kupujem novi laptop!" u konzoli.

## If..Else naredba

Ali što ako želite da vaš program učini nešto drugo kada uvjet nije ispunjen? Tu dolazi `else` – to je poput rezervnog plana.

Naredba `else` vam omogućuje da kažete "ako ovaj uvjet nije istinit, učini ovu drugu stvar umjesto toga."

```javascript
let currentMoney = 500;
let laptopPrice = 800;

if (currentMoney >= laptopPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

Sada, budući da je `500 >= 800` `false`, JavaScript preskače prvi blok i umjesto toga izvršava `else` blok. Vidjet ćete "Još si ne mogu priuštiti novi laptop!" u konzoli.

✅ Testirajte svoje razumijevanje ovog koda i sljedećeg koda pokretanjem u konzoli preglednika. Promijenite vrijednosti varijabli currentMoney i laptopPrice kako biste promijenili vraćeni `console.log()`.

## Switch naredba

Ponekad trebate usporediti jednu vrijednost s više opcija. Iako biste mogli povezati nekoliko `if..else` naredbi, ovaj pristup postaje nezgrapan. Naredba `switch` pruža čišću strukturu za rukovanje s više diskretnih vrijednosti.

Koncept nalikuje mehaničkim sustavima prebacivanja koji su se koristili u ranim telefonskim centralama – jedna ulazna vrijednost određuje koji specifičan put izvršenja slijedi.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Evo kako je strukturirana:
- JavaScript evaluira izraz jednom
- Pregledava svaki `case` kako bi pronašao podudaranje
- Kada pronađe podudaranje, izvršava taj blok koda
- `break` govori JavaScriptu da stane i izađe iz switch-a
- Ako nijedan slučaj ne odgovara, izvršava `default` blok (ako ga imate)

```javascript
// Program using switch statement for day of week
let dayNumber = 2;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown day";
    break;
}
console.log(`Today is ${dayName}`);
```

U ovom primjeru, JavaScript vidi da je `dayNumber` `2`, pronalazi odgovarajući `case 2`, postavlja `dayName` na "Utorak" i zatim izlazi iz switch-a. Rezultat? "Danas je utorak" se prikazuje u konzoli.

✅ Testirajte svoje razumijevanje ovog koda i sljedećeg koda pokretanjem u konzoli preglednika. Promijenite vrijednosti varijable a kako biste promijenili vraćeni `console.log()`.

## Logički operatori i Booleove vrijednosti

Složene odluke često zahtijevaju evaluaciju više uvjeta istovremeno. Baš kao što Booleova algebra omogućuje matematičarima kombiniranje logičkih izraza, programiranje pruža logičke operatore za povezivanje više Booleovih uvjeta.

Ovi operatori omogućuju sofisticiranu uvjetnu logiku kombiniranjem jednostavnih evaluacija true/false.

| Simbol | Opis                                                                                     | Primjer                                                                 |
| ------ | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `&&`   | **Logički AND**: Uspoređuje dva Booleova izraza. Vraća true **samo** ako su obje strane istinite | `(5 > 3) && (5 < 10) // Obje strane su istinite. Vraća true` |
| `\|\|` | **Logički OR**: Uspoređuje dva Booleova izraza. Vraća true ako je barem jedna strana istinita | `(5 > 10) \|\| (5 < 10) // Jedna strana je false, druga je true. Vraća true` |
| `!`    | **Logički NOT**: Vraća suprotnu vrijednost Booleovog izraza                             | `!(5 > 10) // 5 nije veće od 10, pa "!" čini da bude true`         |

Ovi operatori omogućuju kombiniranje uvjeta na koristan način:
- AND (`&&`) znači da oba uvjeta moraju biti istinita
- OR (`||`) znači da barem jedan uvjet mora biti istinit  
- NOT (`!`) preokreće true u false (i obrnuto)

## Uvjeti i odluke s logičkim operatorima

Pogledajmo ove logičke operatore u akciji s realističnijim primjerom:

```javascript
let currentMoney = 600;
let laptopPrice = 800;
let laptopDiscountPrice = laptopPrice - (laptopPrice * 0.2); // Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice) {
  // Condition is true. Code in this block will run.
  console.log("Getting a new laptop!");
} else {
  // Condition is false. Code in this block will run.
  console.log("Can't afford a new laptop, yet!");
}
```

U ovom primjeru: izračunavamo cijenu s popustom od 20% (640), zatim procjenjujemo pokrivaju li naša dostupna sredstva cijenu ili cijenu s popustom. Budući da 600 zadovoljava prag cijene s popustom od 640, uvjet se evaluira kao true.

### Operator negacije

Ponekad je lakše razmišljati o tome kada nešto NIJE istinito. Kao, umjesto da pitate "Je li korisnik prijavljen?", možda želite pitati "Je li korisnik NIJE prijavljen?" Operator uskličnika (`!`) preokreće logiku za vas.

```javascript
if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}
```

Operator `!` je poput izreke "suprotno od..." – ako je nešto `true`, `!` to čini `false`, i obrnuto.

### Ternarni izrazi

Za jednostavne uvjetne dodjele, JavaScript pruža **ternarni operator**. Ova sažeta sintaksa omogućuje vam pisanje uvjetnog izraza u jednom retku, korisno kada trebate dodijeliti jednu od dvije vrijednosti na temelju uvjeta.

```javascript
let variable = condition ? returnThisIfTrue : returnThisIfFalse;
```

Čita se kao pitanje: "Je li ovaj uvjet istinit? Ako da, koristi ovu vrijednost. Ako ne, koristi onu vrijednost."

Ispod je konkretniji primjer:

```javascript
let firstNumber = 20;
let secondNumber = 10;
let biggestNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
```

✅ Odvojite trenutak da nekoliko puta pročitate ovaj kod. Razumijete li kako ovi operatori funkcioniraju?

Evo što ovaj redak govori: "Je li `firstNumber` veći od `secondNumber`? Ako da, stavi `firstNumber` u `biggestNumber`. Ako ne, stavi `secondNumber` u `biggestNumber`."

Ternarni operator je samo kraći način pisanja ove tradicionalne `if..else` naredbe:

```javascript
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
```

Oba pristupa daju identične rezultate. Ternarni operator nudi sažetost, dok tradicionalna struktura if-else može biti čitljivija za složene uvjete.

---



## 🚀 Izazov

Napravite program koji je prvo napisan s logičkim operatorima, a zatim ga prepišite koristeći ternarni izraz. Koja vam sintaksa više odgovara?

---

## Izazov GitHub Copilot Agent 🚀

Koristite način rada Agent za dovršavanje sljedećeg izazova:

**Opis:** Napravite sveobuhvatan kalkulator ocjena koji demonstrira više koncepata donošenja odluka iz ove lekcije, uključujući if-else naredbe, switch naredbe, logičke operatore i ternarne izraze.

**Zadatak:** Napišite JavaScript program koji uzima studentski numerički rezultat (0-100) i određuje njihovu ocjenu prema sljedećim kriterijima:
- A: 90-100
- B: 80-89  
- C: 70-79
- D: 60-69
- F: Ispod 60

Zahtjevi:
1. Koristite if-else naredbu za određivanje ocjene
2. Koristite logičke operatore za provjeru prolazi li student (ocjena >= 60) I ima li pohvalu (ocjena >= 90)
3. Koristite switch naredbu za pružanje specifičnih povratnih informacija za svaku ocjenu
4. Koristite ternarni operator za određivanje je li student kvalificiran za sljedeći tečaj (ocjena >= 70)
5. Uključite validaciju unosa kako biste osigurali da je rezultat između 0 i 100

Testirajte svoj program s različitim rezultatima, uključujući granične slučajeve poput 59, 60, 89, 90 i nevažeće unose.

Saznajte više o [načinu rada Agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.


## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/12)

## Pregled i samostalno učenje

Pročitajte više o mnogim dostupnim operatorima za korisnika [na MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators).

Prođite kroz sjajan [pregled operatora](https://joshwcomeau.com/operator-lookup/) od Josha Comeaua!

## Zadatak

[Operatori](assignment.md)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije nastale korištenjem ovog prijevoda.