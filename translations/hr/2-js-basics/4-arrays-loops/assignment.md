# Zadatak: Polja i Petlje

## Upute

Dovršite sljedeće vježbe kako biste uvježbali rad s poljima i petljama. Svaka vježba se nadovezuje na koncepte iz lekcije i potiče vas da primijenite različite vrste petlji i metode polja.

### Vježba 1: Generator uzorka brojeva
Napravite program koji ispisuje svaki treći broj između 1-20 i prikazuje ga u konzoli.

**Zahtjevi:**
- Koristite `for` petlju s prilagođenim inkrementom
- Prikazujte brojeve u formatu koji je jednostavan za korisnika
- Dodajte opisne komentare koji objašnjavaju vašu logiku

**Očekivani izlaz:**
```
3, 6, 9, 12, 15, 18
```

> **Savjet:** Modificirajte izraz za iteraciju u vašoj for petlji kako biste preskočili brojeve.

### Vježba 2: Analiza polja
Napravite polje s najmanje 8 različitih brojeva i napišite funkcije za analizu podataka.

**Zahtjevi:**
- Napravite polje pod nazivom `numbers` s najmanje 8 vrijednosti
- Napišite funkciju `findMaximum()` koja vraća najveći broj
- Napišite funkciju `findMinimum()` koja vraća najmanji broj  
- Napišite funkciju `calculateSum()` koja vraća zbroj svih brojeva
- Testirajte svaku funkciju i prikažite rezultate

**Dodatni izazov:** Napravite funkciju koja pronalazi drugi najveći broj u polju.

### Vježba 3: Obrada polja stringova
Napravite polje svojih omiljenih filmova/knjiga/pjesama i uvježbajte različite vrste petlji.

**Zahtjevi:**
- Napravite polje s najmanje 5 string vrijednosti
- Koristite tradicionalnu `for` petlju za prikaz stavki s brojevima (1. Naziv stavke)
- Koristite `for...of` petlju za prikaz stavki velikim slovima
- Koristite metodu `forEach()` za brojanje i prikaz ukupnog broja znakova

**Primjer izlaza:**
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

### Vježba 4: Filtriranje podataka (Napredno)
Napravite program koji obrađuje polje objekata koji predstavljaju studente.

**Zahtjevi:**
- Napravite polje s najmanje 5 objekata studenata s svojstvima: `name`, `age`, `grade`
- Koristite petlje za pronalaženje studenata koji imaju 18 ili više godina
- Izračunajte prosječnu ocjenu svih studenata
- Napravite novo polje koje sadrži samo studente s ocjenama iznad 85

**Primjer strukture:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testiranje vašeg koda

Testirajte svoje programe na sljedeći način:
1. Pokrenite svaku vježbu u konzoli vašeg preglednika
2. Provjerite odgovaraju li izlazi očekivanim rezultatima
3. Testirajte s različitim skupovima podataka
4. Provjerite kako vaš kod reagira na rubne slučajeve (prazna polja, pojedinačni elementi)

## Smjernice za predaju

Uključite sljedeće u svoju predaju:
- Dobro komentiran JavaScript kod za svaku vježbu
- Snimke zaslona ili tekstualni izlaz koji prikazuje rad vaših programa
- Kratko objašnjenje koju vrstu petlje ste odabrali za svaki zadatak i zašto

## Rubrika

| Kriterij | Izvrsno (3 boda) | Zadovoljavajuće (2 boda) | Potrebno poboljšanje (1 bod) |
| -------- | ---------------- | ----------------------- | --------------------------- |
| **Funkcionalnost** | Sve vježbe ispravno dovršene s dodatnim izazovima | Sve potrebne vježbe rade ispravno | Neke vježbe nisu dovršene ili sadrže greške |
| **Kvaliteta koda** | Čist, dobro organiziran kod s opisnim nazivima varijabli | Kod radi, ali može biti čišći | Kod je neuredan ili teško razumljiv |
| **Komentari** | Sveobuhvatni komentari koji objašnjavaju logiku i odluke | Osnovni komentari prisutni | Minimalno ili bez komentara |
| **Upotreba petlji** | Pokazuje razumijevanje različitih vrsta petlji na odgovarajući način | Ispravna upotreba petlji, ali ograničena raznolikost | Neispravna ili neučinkovita upotreba petlji |
| **Testiranje** | Dokazi temeljitog testiranja s više scenarija | Osnovno testiranje prikazano | Malo dokaza o testiranju |

## Pitanja za razmišljanje

Nakon dovršetka vježbi, razmislite:
1. Koja vrsta petlje vam se činila najprirodnijom za korištenje i zašto?
2. S kojim ste se izazovima susreli prilikom rada s poljima?
3. Kako bi se ove vještine mogle primijeniti u stvarnim projektima web razvoja?
4. Što biste učinili drugačije da morate optimizirati svoj kod za performanse?

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.