# Naloga: Tabele in zanke

## Navodila

Izvedite naslednje vaje za vadbo dela s tabelami in zankami. Vsaka vaja temelji na konceptih iz lekcije in vas spodbuja k uporabi različnih vrst zank in metod za delo s tabelami.

### Naloga 1: Generator vzorcev števil
Ustvarite program, ki našteje vsako 3. število med 1 in 20 ter ga izpiše v konzolo.

**Zahteve:**
- Uporabite zanko `for` z lastnim povečanjem
- Prikazujte številke v uporabniku prijazni obliki
- Dodajte opisne komentarje, ki pojasnjujejo vašo logiko

**Pričakovani izhod:**
```
3, 6, 9, 12, 15, 18
```

> **Namig:** Spremenite izraz za iteracijo v zanki `for`, da preskočite številke.

### Naloga 2: Analiza tabele
Ustvarite tabelo z vsaj 8 različnimi številkami in napišite funkcije za analizo podatkov.

**Zahteve:**
- Ustvarite tabelo z imenom `numbers` z vsaj 8 vrednostmi
- Napišite funkcijo `findMaximum()`, ki vrne največje število
- Napišite funkcijo `findMinimum()`, ki vrne najmanjše število  
- Napišite funkcijo `calculateSum()`, ki vrne vsoto vseh števil
- Preizkusite vsako funkcijo in prikažite rezultate

**Dodatni izziv:** Ustvarite funkcijo, ki najde drugo največje število v tabeli.

### Naloga 3: Obdelava tabel z nizi
Ustvarite tabelo svojih najljubših filmov/knjig/pesmi in vadite različne vrste zank.

**Zahteve:**
- Ustvarite tabelo z vsaj 5 vrednostmi tipa niz
- Uporabite tradicionalno zanko `for`, da prikažete elemente s številkami (1. Ime elementa)
- Uporabite zanko `for...of`, da prikažete elemente z velikimi črkami
- Uporabite metodo `forEach()`, da preštejete in prikažete skupno število znakov

**Primer izhoda:**
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

### Naloga 4: Filtriranje podatkov (napredno)
Ustvarite program, ki obdeluje tabelo objektov, ki predstavljajo študente.

**Zahteve:**
- Ustvarite tabelo z vsaj 5 objekti študentov, ki imajo lastnosti: `name`, `age`, `grade`
- Uporabite zanke za iskanje študentov, ki so stari 18 let ali več
- Izračunajte povprečno oceno vseh študentov
- Ustvarite novo tabelo, ki vsebuje samo študente z ocenami nad 85

**Primer strukture:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testiranje kode

Testirajte svoje programe tako, da:
1. Zaženete vsako nalogo v konzoli vašega brskalnika
2. Preverite, ali se izhodi ujemajo s pričakovanimi rezultati
3. Testirate z različnimi nabori podatkov
4. Preverite, ali vaša koda obravnava robne primere (prazne tabele, posamezni elementi)

## Smernice za oddajo

Vključite naslednje v svojo oddajo:
- Dobro komentirano JavaScript kodo za vsako nalogo
- Posnetke zaslona ali besedilni izhod, ki prikazuje delovanje vaših programov
- Kratko razlago, katero vrsto zanke ste izbrali za vsako nalogo in zakaj

## Merila ocenjevanja

| Merilo | Odlično (3 točke) | Zadostno (2 točki) | Potrebno izboljšanje (1 točka) |
| ------- | ----------------- | ------------------ | ----------------------------- |
| **Funkcionalnost** | Vse naloge pravilno izvedene z dodatnimi izzivi | Vse zahtevane naloge delujejo pravilno | Nekatere naloge niso dokončane ali vsebujejo napake |
| **Kakovost kode** | Čista, dobro organizirana koda z opisnimi imeni spremenljivk | Koda deluje, vendar bi lahko bila bolj čista | Koda je neurejena ali težko razumljiva |
| **Komentarji** | Obsežni komentarji, ki pojasnjujejo logiko in odločitve | Prisotni osnovni komentarji | Minimalno ali brez komentarjev |
| **Uporaba zank** | Pravilna uporaba različnih vrst zank | Pravilna uporaba zank, vendar omejena raznolikost | Napačna ali neučinkovita uporaba zank |
| **Testiranje** | Dokazi o temeljitem testiranju z več scenariji | Osnovno testiranje prikazano | Malo dokazov o testiranju |

## Refleksijska vprašanja

Po zaključku nalog razmislite:
1. Katera vrsta zanke se vam je zdela najbolj naravna za uporabo in zakaj?
2. S kakšnimi izzivi ste se srečali pri delu s tabelami?
3. Kako bi te veščine lahko uporabili pri resničnih projektih spletnega razvoja?
4. Kaj bi naredili drugače, če bi morali optimizirati svojo kodo za zmogljivost?

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije je priporočljivo profesionalno človeško prevajanje. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.