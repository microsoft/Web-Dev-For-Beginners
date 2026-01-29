# Izrada igre: Primjena dizajnerskih obrazaca

## Pregled zadatka

Iskoristite svoje novo stečeno znanje o dizajnerskim obrascima kako biste stvorili jednostavan prototip igre! Ovaj zadatak pomoći će vam da vježbate i arhitektonske obrasce (nasljeđivanje ili kompozicija) i pub/sub komunikacijski sustav koji ste naučili u lekciji.

## Upute

Napravite jednostavnu reprezentaciju igre koja demonstrira dizajnerske obrasce iz ove lekcije. Vaša igra treba biti funkcionalna, ali ne mora imati složenu grafiku – fokusirajte se na temeljnu arhitekturu i komunikacijske obrasce.

### Zahtjevi

**Odaberite arhitektonski obrazac:**
- **Opcija A**: Koristite nasljeđivanje klasa (poput primjera `GameObject` → `Movable` → `Hero`)
- **Opcija B**: Koristite kompoziciju (poput pristupa tvornice funkcija s kombiniranim ponašanjima)

**Implementirajte komunikaciju:**
- **Uključite** klasu `EventEmitter` za pub/sub razmjenu poruka
- **Postavite** barem 2-3 različite vrste poruka (poput `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Povežite** unos korisnika (tipkovnica/miš) s događajima u igri putem sustava događaja

**Elementi igre koje treba uključiti:**
- Najmanje jedan lik kojim upravlja igrač
- Najmanje jedan drugi objekt u igri (neprijatelj, predmet za skupljanje ili element okruženja)
- Osnovna interakcija između objekata (sudar, skupljanje ili komunikacija)

### Predložene ideje za igru

**Jednostavne igre koje možete razmotriti:**
- **Igra zmije** – Segmenti zmije prate glavu, hrana se nasumično pojavljuje
- **Varijacija Pong-a** – Reket reagira na unos, lopta se odbija od zidova
- **Igra skupljanja** – Igrač se kreće i skuplja predmete dok izbjegava prepreke
- **Osnove obrane tornjeva** – Tornjevi otkrivaju i pucaju na pokretne neprijatelje

### Smjernice za strukturu koda

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testiranje implementacije

**Provjerite radi li vaš kod:**
- **Testiranjem** da se objekti pomiču ili mijenjaju kada se događaji pokrenu
- **Potvrdom** da više objekata može reagirati na isti događaj
- **Provjerom** da možete dodati nova ponašanja bez mijenjanja postojećeg koda
- **Osiguravanjem** da unos putem tipkovnice/miša ispravno pokreće događaje u igri

## Smjernice za predaju

**Vaša predaja treba uključivati:**
1. **JavaScript datoteke** s implementacijom vaše igre
2. **HTML datoteku** za pokretanje i testiranje vaše igre (može biti jednostavna)
3. **Komentare** koji objašnjavaju koji ste obrazac odabrali i zašto
4. **Kratku dokumentaciju** o vrstama poruka i njihovoj funkciji

## Rubrika

| Kriterij | Izvrsno (3 boda) | Zadovoljavajuće (2 boda) | Potrebno poboljšanje (1 bod) |
|----------|------------------|-------------------------|------------------------------|
| **Arhitektonski obrazac** | Ispravno implementira nasljeđivanje ILI kompoziciju s jasnom hijerarhijom klasa/objekata | Koristi odabrani obrazac s manjim problemima ili nedosljednostima | Pokušava koristiti obrazac, ali implementacija ima značajne probleme |
| **Pub/Sub implementacija** | EventEmitter ispravno radi s više vrsta poruka i pravilnim protokom događaja | Osnovni pub/sub sustav radi s nekim rukovanjem događajima | Sustav događaja prisutan, ali ne radi pouzdano |
| **Funkcionalnost igre** | Tri ili više interaktivnih elemenata koji komuniciraju putem događaja | Dva interaktivna elementa s osnovnom komunikacijom događaja | Jedan element reagira na događaje ili osnovnu interakciju |
| **Kvaliteta koda** | Čist, dobro komentiran kod s logičnom organizacijom i modernim JavaScriptom | Općenito dobro organiziran kod s adekvatnim komentarima | Kod radi, ali nedostaje organizacija ili jasni komentari |

**Dodatni bodovi:**
- **Kreativna mehanika igre** koja pokazuje zanimljivu primjenu obrazaca
- **Višestruke metode unosa** (tipkovnica I događaji miša)
- **Skalabilna arhitektura** koja se lako može proširiti novim značajkama

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.