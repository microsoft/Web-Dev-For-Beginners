<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-25T00:20:05+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "sl"
}
-->
# Sprejemanje Odločitev: Procesor Študentskih Ocen

## Cilji Učenja

V tej nalogi boste vadili koncept sprejemanja odločitev iz te lekcije, tako da boste izdelali program, ki obdeluje študentske ocene iz različnih ocenjevalnih sistemov. Uporabili boste stavke `if...else`, primerjalne operaterje in logične operaterje za določanje, kateri študenti so opravili svoje predmete.

## Izziv

Delate na šoli, ki se je pred kratkim združila z drugo ustanovo. Zdaj morate obdelati študentske ocene iz dveh popolnoma različnih ocenjevalnih sistemov in določiti, kateri študenti so opravili. To je odlična priložnost za vadbo pogojne logike!

### Razumevanje Ocenjevalnih Sistemov

#### Prvi Ocenjevalni Sistem (Številčni)
- Ocene so podane kot številke od 1 do 5
- **Ocena za opravljen predmet**: 3 in več (3, 4 ali 5)
- **Ocena za neopravljeni predmet**: manj kot 3 (1 ali 2)

#### Drugi Ocenjevalni Sistem (Črkovne Ocene)
- Ocene so podane s črkami: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Ocene za opravljen predmet**: `A`, `A-`, `B`, `B-`, `C`, `C-` (vse navedene ocene so pozitivne)
- **Opomba**: Ta sistem ne vključuje negativnih ocen, kot sta `D` ali `F`

### Vaša Naloga

Glede na naslednjo tabelo `allStudents`, ki predstavlja vse študente in njihove ocene, sestavite novo tabelo `studentsWhoPass`, ki vsebuje vse študente, ki so opravili glede na njihov ocenjevalni sistem.

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

### Koraki za Reševanje

1. **Postavite zanko**, da prečesate vsako oceno v tabeli `allStudents`
2. **Preverite tip ocene** (ali je številka ali niz?)
3. **Uporabite ustrezna pravila ocenjevalnega sistema**:
   - Za številke: preverite, ali je ocena >= 3
   - Za nize: preverite, ali je ena od veljavnih pozitivnih črkovnih ocen
4. **Dodajte pozitivne ocene** v tabelo `studentsWhoPass`

### Koristne Tehnike Kodiranja

Uporabite te koncepte JavaScripta iz lekcije:

- **operator typeof**: `typeof grade === 'number'` za preverjanje, ali je ocena številčna
- **Primerjalni operaterji**: `>=` za primerjavo številčnih ocen
- **Logični operaterji**: `||` za preverjanje več pogojev za črkovne ocene
- **Stavki if...else**: za obravnavo različnih ocenjevalnih sistemov
- **Metode za tabele**: `.push()` za dodajanje pozitivnih ocen v novo tabelo

### Pričakovani Rezultat

Ko zaženete svoj program, bi morala tabela `studentsWhoPass` vsebovati: `['A', 'B-', 4, 5]`

**Zakaj te ocene veljajo za pozitivne:**
- `'A'` in `'B-'` sta veljavni črkovni oceni (vse črkovne ocene v tem sistemu so pozitivne)
- `4` in `5` sta številčni oceni >= 3
- `1` in `2` ne opravita, ker sta številčni oceni < 3

## Testiranje Vaše Rešitve

Preizkusite svojo kodo v različnih scenarijih:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Dodatni Izzivi

Ko dokončate osnovno nalogo, poskusite naslednje razširitve:

1. **Dodajte validacijo**: Preverite neveljavne ocene (kot so negativne številke ali neveljavne črke)
2. **Izračunajte statistiko**: Izračunajte, koliko študentov je opravilo v primerjavi s tistimi, ki niso
3. **Pretvorba ocen**: Pretvorite vse ocene v enoten številčni sistem (A=5, B=4, C=3 itd.)

## Merila za Ocenjevanje

| Merilo | Odlično (4) | Dobro (3) | Povprečno (2) | Začetno (1) |
|--------|-------------|-----------|---------------|-------------|
| **Funkcionalnost** | Program pravilno identificira vse pozitivne ocene iz obeh sistemov | Program deluje z manjšimi težavami ali robnimi primeri | Program deluje delno, vendar ima logične napake | Program ima velike napake ali ne deluje |
| **Struktura Kode** | Čista, dobro organizirana koda z ustrezno logiko if...else | Dobra struktura z ustreznimi pogojnimi stavki | Sprejemljiva struktura z nekaj organizacijskimi težavami | Slaba struktura, težko slediti logiki |
| **Uporaba Konceptov** | Učinkovita uporaba primerjalnih operaterjev, logičnih operaterjev in pogojnih stavkov | Dobra uporaba konceptov lekcije z manjšimi pomanjkljivostmi | Delna uporaba konceptov lekcije, vendar manjkajo ključni elementi | Omejena uporaba konceptov lekcije |
| **Reševanje Problemov** | Jasno razumevanje problema in eleganten pristop k rešitvi | Dober pristop k reševanju problemov s solidno logiko | Zadostno reševanje problemov z nekaj zmedenosti | Nejasen pristop, ne kaže razumevanja |

## Smernice za Oddajo

1. **Temeljito preizkusite svojo kodo** z danimi primeri
2. **Dodajte komentarje**, ki pojasnjujejo vašo logiko, še posebej za pogojne stavke
3. **Preverite, da se rezultat** ujema s pričakovanimi rezultati: `['A', 'B-', 4, 5]`
4. **Upoštevajte robne primere**, kot so prazne tabele ali nepričakovani tipi podatkov

> 💡 **Nasvet**: Začnite preprosto! Najprej poskrbite, da osnovna funkcionalnost deluje, nato pa dodajte bolj izpopolnjene funkcije. Ne pozabite, da je cilj vaditi logiko sprejemanja odločitev z orodji, ki ste se jih naučili v tej lekciji.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni prevod s strani človeka. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.