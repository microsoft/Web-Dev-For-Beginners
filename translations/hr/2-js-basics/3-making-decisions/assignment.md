<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-24T23:49:53+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "hr"
}
-->
# Donošenje odluka: Procesor ocjena učenika

## Ciljevi učenja

U ovom zadatku vježbat ćete koncepte donošenja odluka iz ove lekcije izradom programa koji obrađuje ocjene učenika iz različitih sustava ocjenjivanja. Koristit ćete `if...else` naredbe, operatore usporedbe i logičke operatore kako biste odredili koji učenici prolaze svoje predmete.

## Izazov

Radite u školi koja se nedavno spojila s drugom ustanovom. Sada trebate obraditi ocjene učenika iz dva potpuno različita sustava ocjenjivanja i odrediti koji učenici prolaze. Ovo je savršena prilika za vježbanje uvjetne logike!

### Razumijevanje sustava ocjenjivanja

#### Prvi sustav ocjenjivanja (Numerički)
- Ocjene se daju kao brojevi od 1 do 5
- **Prolazna ocjena**: 3 i više (3, 4 ili 5)
- **Neprolazna ocjena**: Manje od 3 (1 ili 2)

#### Drugi sustav ocjenjivanja (Slovna ocjena)
- Ocjene se izražavaju slovima: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Prolazne ocjene**: `A`, `A-`, `B`, `B-`, `C`, `C-` (sve navedene ocjene su prolazne)
- **Napomena**: Ovaj sustav ne uključuje neprolazne ocjene poput `D` ili `F`

### Vaš zadatak

S obzirom na sljedeći niz `allStudents` koji predstavlja sve učenike i njihove ocjene, konstruirajte novi niz `studentsWhoPass` koji sadrži sve učenike koji prolaze prema njihovim odgovarajućim sustavima ocjenjivanja.

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

### Koraci za rješavanje

1. **Postavite petlju** za prolazak kroz svaku ocjenu u nizu `allStudents`
2. **Provjerite tip ocjene** (je li broj ili string?)
3. **Primijenite odgovarajuća pravila sustava ocjenjivanja**:
   - Za brojeve: provjerite je li ocjena >= 3
   - Za stringove: provjerite je li jedna od valjanih prolaznih slovnih ocjena
4. **Dodajte prolazne ocjene** u niz `studentsWhoPass`

### Korisne tehnike kodiranja

Koristite ove JavaScript koncepte iz lekcije:

- **typeof operator**: `typeof grade === 'number'` za provjeru je li ocjena numerička
- **Operatori usporedbe**: `>=` za usporedbu numeričkih ocjena
- **Logički operatori**: `||` za provjeru više uvjeta za slovne ocjene
- **if...else naredbe**: za rukovanje različitim sustavima ocjenjivanja
- **Metode niza**: `.push()` za dodavanje prolaznih ocjena u novi niz

### Očekivani rezultat

Kada pokrenete svoj program, `studentsWhoPass` bi trebao sadržavati: `['A', 'B-', 4, 5]`

**Zašto ove ocjene prolaze:**
- `'A'` i `'B-'` su valjane slovne ocjene (sve slovne ocjene u ovom sustavu su prolazne)
- `4` i `5` su numeričke ocjene >= 3
- `1` i `2` ne prolaze jer su numeričke ocjene < 3

## Testiranje vašeg rješenja

Testirajte svoj kod s različitim scenarijima:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Dodatni izazovi

Nakon što završite osnovni zadatak, pokušajte s ovim proširenjima:

1. **Dodajte validaciju**: Provjerite nevaljane ocjene (poput negativnih brojeva ili nevaljanih slova)
2. **Izračunajte statistiku**: Izračunajte koliko učenika prolazi, a koliko ne prolazi
3. **Pretvorba ocjena**: Pretvorite sve ocjene u jedinstveni numerički sustav (A=5, B=4, C=3, itd.)

## Rubrika

| Kriterij | Izvrsno (4) | Dobro (3) | Razvijajuće (2) | Početno (1) |
|----------|-------------|-----------|-----------------|-------------|
| **Funkcionalnost** | Program ispravno identificira sve prolazne ocjene iz oba sustava | Program radi s manjim problemima ili rubnim slučajevima | Program djelomično radi, ali ima logičke greške | Program ima značajne greške ili se ne pokreće |
| **Struktura koda** | Čist, dobro organiziran kod s pravilnom if...else logikom | Dobra struktura s odgovarajućim uvjetnim naredbama | Prihvatljiva struktura s nekim organizacijskim problemima | Loša struktura, teško je pratiti logiku |
| **Korištenje koncepata** | Učinkovito koristi operatore usporedbe, logičke operatore i uvjetne naredbe | Dobro korištenje koncepata iz lekcije s manjim nedostacima | Djelomično korištenje koncepata iz lekcije, ali nedostaju ključni elementi | Ograničeno korištenje koncepata iz lekcije |
| **Rješavanje problema** | Pokazuje jasno razumijevanje problema i elegantan pristup rješenju | Dobar pristup rješavanju problema s solidnom logikom | Zadovoljavajuće rješavanje problema s nekim nejasnoćama | Nejasan pristup, ne pokazuje razumijevanje |

## Upute za predaju

1. **Temeljito testirajte svoj kod** s priloženim primjerima
2. **Dodajte komentare** koji objašnjavaju vašu logiku, posebno za uvjetne naredbe
3. **Provjerite izlaz** kako bi odgovarao očekivanim rezultatima: `['A', 'B-', 4, 5]`
4. **Razmotrite rubne slučajeve** poput praznih nizova ili neočekivanih tipova podataka

> 💡 **Savjet**: Počnite jednostavno! Prvo osigurajte da osnovna funkcionalnost radi, a zatim dodajte složenije značajke. Zapamtite, cilj je vježbati logiku donošenja odluka pomoću alata koje ste naučili u ovoj lekciji.

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.