<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-25T00:09:08+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "hr"
}
-->
# Stilizirajte svoju aplikaciju za bankarstvo modernim CSS-om

## Pregled projekta

Pretvorite svoju funkcionalnu aplikaciju za bankarstvo u vizualno privlačnu, profesionalno dizajniranu web aplikaciju koristeći moderne CSS tehnike. Kreirat ćete kohezivan dizajnerski sustav koji poboljšava korisničko iskustvo, uz održavanje principa pristupačnosti i responzivnog dizajna.

Ovaj zadatak izaziva vas da primijenite suvremene obrasce web dizajna, implementirate dosljedan vizualni identitet i kreirate sučelje koje će korisnicima biti privlačno i intuitivno za navigaciju.

## Upute

### Korak 1: Postavljanje vašeg stilskog lista

**Kreirajte osnovu za svoj CSS:**

1. **Kreirajte** novu datoteku pod nazivom `styles.css` u korijenu vašeg projekta
2. **Povežite** stilski list u svojoj datoteci `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Započnite** s CSS resetom i modernim zadanim postavkama:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```

### Korak 2: Zahtjevi dizajnerskog sustava

**Implementirajte ove osnovne dizajnerske elemente:**

#### Paleta boja
- **Primarna boja**: Odaberite profesionalnu boju za gumbe i istaknute dijelove
- **Sekundarna boja**: Komplementarna boja za akcente i sekundarne radnje
- **Neutralne boje**: Nijanse sive za tekst, okvire i pozadine
- **Boje za uspjeh/greške**: Zelena za uspješne radnje, crvena za greške

#### Tipografija
- **Hijerarhija naslova**: Jasna razlika između elemenata H1, H2 i H3
- **Tekst tijela**: Čitljiva veličina fonta (minimalno 16px) i odgovarajuća visina linije
- **Oznake obrazaca**: Jasno i pristupačno oblikovanje teksta

#### Izgled i razmaci
- **Dosljedni razmaci**: Koristite razmjerne skale (8px, 16px, 24px, 32px)
- **Sustav mreže**: Organizirani izgled za obrasce i odjeljke sadržaja
- **Responzivni dizajn**: Pristup prilagođen mobilnim uređajima s prekidnim točkama

### Korak 3: Stiliziranje komponenti

**Stilizirajte ove specifične komponente:**

#### Obrasci
- **Polja za unos**: Profesionalni okviri, stanja fokusa i oblikovanje validacije
- **Gumbi**: Efekti prelaska mišem, stanja onemogućeno i indikatori učitavanja
- **Oznake**: Jasno pozicioniranje i indikatori obaveznih polja
- **Poruke o greškama**: Vidljivo oblikovanje grešaka i korisne poruke

#### Navigacija
- **Zaglavlje**: Čist, brendiran navigacijski prostor
- **Linkovi**: Jasna stanja prelaska mišem i aktivni indikatori
- **Logo/Naslov**: Prepoznatljiv element brenda

#### Područja sadržaja
- **Sekcije**: Jasna vizualna podjela između različitih područja
- **Kartice**: Ako koristite izgled temeljen na karticama, uključite sjene i okvire
- **Pozadine**: Prikladna upotreba praznog prostora i suptilnih pozadina

### Korak 4: Poboljšane značajke (opcionalno)

**Razmislite o implementaciji ovih naprednih značajki:**
- **Tamni način rada**: Prebacivanje između svijetlih i tamnih tema
- **Animacije**: Suptilni prijelazi i mikro-interakcije
- **Stanja učitavanja**: Vizualna povratna informacija tijekom slanja obrazaca
- **Responzivne slike**: Optimizirane slike za različite veličine zaslona

## Inspiracija za dizajn

**Karakteristike modernih aplikacija za bankarstvo:**
- **Čist, minimalistički dizajn** s puno praznog prostora
- **Profesionalne sheme boja** (plave, zelene ili sofisticirane neutralne boje)
- **Jasna vizualna hijerarhija** s istaknutim gumbima za poziv na akciju
- **Pristupačni kontrastni omjeri** koji zadovoljavaju WCAG smjernice
- **Responzivni izgledi** koji rade na svim uređajima

## Tehnički zahtjevi

### Organizacija CSS-a
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```

### Zahtjevi pristupačnosti
- **Kontrast boja**: Osigurajte omjer kontrasta od najmanje 4.5:1 za normalni tekst
- **Indikatori fokusa**: Vidljiva stanja fokusa za navigaciju tipkovnicom
- **Oznake obrazaca**: Ispravno povezane s unosima
- **Responzivni dizajn**: Upotrebljiv na zaslonima širine od 320px do 1920px

## Rubrika za ocjenjivanje

| Kriterij | Izvrsno (A) | Dobro (B) | Razvija se (C) | Potrebno poboljšanje (F) |
|----------|-------------|-----------|----------------|--------------------------|
| **Dizajnerski sustav** | Implementira sveobuhvatan dizajnerski sustav s dosljednim bojama, tipografijom i razmacima | Koristi dosljedno oblikovanje s jasnim dizajnerskim obrascima i dobrom vizualnom hijerarhijom | Osnovno oblikovanje primijenjeno s nekim problemima dosljednosti ili nedostajućim elementima dizajna | Minimalno oblikovanje s nedosljednim ili sukobljenim dizajnerskim odabirima |
| **Korisničko iskustvo** | Stvara intuitivno, profesionalno sučelje s izvrsnom upotrebljivošću i vizualnom privlačnošću | Pruža dobro korisničko iskustvo s jasnom navigacijom i čitljivim sadržajem | Osnovna upotrebljivost s potrebom za poboljšanjem UX-a | Loša upotrebljivost, teško za navigaciju ili čitanje |
| **Tehnička implementacija** | Koristi moderne CSS tehnike, organiziranu strukturu koda i slijedi najbolje prakse | Učinkovito implementira CSS s dobrom organizacijom i odgovarajućim tehnikama | CSS radi ispravno, ali može nedostajati organizacija ili moderni pristupi | Loša implementacija CSS-a s tehničkim problemima ili problemima kompatibilnosti preglednika |
| **Responzivni dizajn** | Potpuno responzivan dizajn koji odlično funkcionira na svim veličinama uređaja | Dobro responzivno ponašanje s manjim problemima na nekim veličinama zaslona | Osnovna responzivna implementacija s nekim problemima izgleda | Nije responzivan ili značajni problemi na mobilnim uređajima |
| **Pristupačnost** | Zadovoljava WCAG smjernice s izvrsnom navigacijom tipkovnicom i podrškom za čitače ekrana | Dobre prakse pristupačnosti s odgovarajućim kontrastom i indikatorima fokusa | Osnovna razmatranja pristupačnosti s nekim nedostajućim elementima | Loša pristupačnost, teško za korisnike s invaliditetom |

## Smjernice za predaju

**Uključite u svoju predaju:**
- **styles.css**: Vaš kompletan stilski list
- **Ažurirani HTML**: Sve izmjene HTML-a koje ste napravili
- **Snimke zaslona**: Slike koje prikazuju vaš dizajn na desktopu i mobilnim uređajima
- **README**: Kratak opis vaših dizajnerskih odabira i palete boja

**Dodatni bodovi za:**
- **CSS prilagođena svojstva** za održivo tematsko oblikovanje
- **Napredne CSS značajke** poput Grid-a, Flexbox-a ili CSS animacija
- **Razmatranja performansi** poput optimiziranog CSS-a i minimalne veličine datoteke
- **Testiranje na različitim preglednicima** za osiguranje kompatibilnosti na različitim preglednicima

> 💡 **Savjet**: Započnite s dizajnom za mobilne uređaje, a zatim ga prilagodite za veće zaslone. Ovaj pristup prilagođen mobilnim uređajima osigurava da vaša aplikacija dobro funkcionira na svim uređajima i slijedi najbolje prakse modernog web razvoja.

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije nastale korištenjem ovog prijevoda.