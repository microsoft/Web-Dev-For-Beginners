<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2025-10-25T00:16:41+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "hr"
}
-->
# Zadatak: Preoblikujte svoju ekstenziju za preglednik

## Pregled

Sada kada ste izradili HTML strukturu za svoju ekstenziju za preglednik koja prati ugljični otisak, vrijeme je da je učinite vizualno privlačnom i jednostavnom za korištenje. Dobar dizajn poboljšava korisničko iskustvo i čini vašu ekstenziju profesionalnijom i zanimljivijom.

Vaša ekstenzija dolazi s osnovnim CSS stilovima, ali ovaj zadatak izaziva vas da stvorite jedinstveni vizualni identitet koji odražava vaš osobni stil, uz održavanje izvrsne upotrebljivosti.

## Upute

### 1. dio: Analizirajte trenutni dizajn

Prije nego što napravite promjene, proučite postojeću strukturu CSS-a:

1. **Pronađite** CSS datoteke u svom projektu ekstenzije
2. **Pregledajte** trenutni pristup stiliziranju i shemu boja
3. **Identificirajte** područja za poboljšanje u rasporedu, tipografiji i vizualnoj hijerarhiji
4. **Razmotrite** kako dizajn podržava ciljeve korisnika (jednostavno ispunjavanje obrazaca i jasno prikazivanje podataka)

### 2. dio: Dizajnirajte vlastiti stil

Stvorite koherentan vizualni dizajn koji uključuje:

**Shema boja:**
- Odaberite primarnu paletu boja koja odražava ekološke teme
- Osigurajte dovoljan kontrast za pristupačnost (koristite alate poput WebAIM-ovog provjerivača kontrasta)
- Razmotrite kako će boje izgledati u različitim temama preglednika

**Tipografija:**
- Odaberite čitljive fontove koji dobro funkcioniraju na malim veličinama ekstenzije
- Uspostavite jasnu hijerarhiju s odgovarajućim veličinama i težinama fontova
- Osigurajte da tekst ostane čitljiv u svijetlim i tamnim temama preglednika

**Raspored i razmak:**
- Poboljšajte vizualnu organizaciju elemenata obrazaca i prikaza podataka
- Dodajte odgovarajuće razmake i margine za bolju čitljivost
- Razmotrite principe responzivnog dizajna za različite veličine ekrana

### 3. dio: Implementirajte svoj dizajn

Izmijenite CSS datoteke kako biste implementirali svoj dizajn:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Ključna područja za stiliziranje:**
- **Elementi obrazaca**: Polja za unos, oznake i gumb za slanje
- **Prikaz rezultata**: Kontejner za podatke, stiliziranje teksta i stanja učitavanja
- **Interaktivni elementi**: Efekti na hover, stanja gumba i prijelazi
- **Opći raspored**: Razmaci kontejnera, boje pozadine i vizualna hijerarhija

### 4. dio: Testirajte i doradite

1. **Izgradite** svoju ekstenziju pomoću `npm run build`
2. **Učitajte** ažuriranu ekstenziju u svoj preglednik
3. **Testirajte** sva vizualna stanja (unos u obrazac, učitavanje, prikaz rezultata, greške)
4. **Provjerite** pristupačnost pomoću alata za razvoj preglednika
5. **Doradite** svoje stilove na temelju stvarne upotrebe

## Kreativni izazovi

### Osnovna razina
- Ažurirajte boje i fontove kako biste stvorili kohezivnu temu
- Poboljšajte razmake i poravnanje u cijelom sučelju
- Dodajte suptilne hover efekte interaktivnim elementima

### Srednja razina
- Dizajnirajte prilagođene ikone ili grafike za svoju ekstenziju
- Implementirajte glatke prijelaze između različitih stanja
- Stvorite jedinstvenu animaciju učitavanja za API pozive

### Napredna razina
- Dizajnirajte više opcija tema (svijetla/tamna/visoki kontrast)
- Implementirajte responzivni dizajn za različite veličine prozora preglednika
- Dodajte mikro-interakcije koje poboljšavaju korisničko iskustvo

## Smjernice za predaju

Vaš dovršeni zadatak trebao bi uključivati:

- **Izmijenjene CSS datoteke** s vašim prilagođenim stilovima
- **Snimke zaslona** koje prikazuju vašu ekstenziju u različitim stanjima (obrazac, učitavanje, rezultati)
- **Kratak opis** (2-3 rečenice) koji objašnjava vaše dizajnerske odluke i kako poboljšavaju korisničko iskustvo

## Rubrika za ocjenjivanje

| Kriterij | Izvrsno (4) | Dobro (3) | Osnovno (2) | Početno (1) |
|----------|-------------|-----------|-------------|-------------|
| **Vizualni dizajn** | Kreativan, kohezivan dizajn koji poboljšava upotrebljivost i odražava snažne dizajnerske principe | Dobri dizajnerski izbori s dosljednim stiliziranjem i jasnom vizualnom hijerarhijom | Osnovna poboljšanja dizajna s nekim problemima dosljednosti | Minimalne promjene stiliziranja ili nedosljedan dizajn |
| **Funkcionalnost** | Svi stilovi savršeno funkcioniraju u različitim stanjima i okruženjima preglednika | Stilovi dobro funkcioniraju uz manje probleme u rubnim slučajevima | Većina stilova funkcionalna uz neke probleme prikaza | Značajni problemi sa stiliziranjem koji utječu na upotrebljivost |
| **Kvaliteta koda** | Čist, dobro organiziran CSS s smislenim nazivima klasa i učinkovitim selektorima | Dobra struktura CSS-a s odgovarajućom upotrebom selektora i svojstava | Prihvatljiv CSS s nekim problemima organizacije | Loša struktura CSS-a ili prekomplicirano stiliziranje |
| **Pristupačnost** | Izvrstan kontrast boja, čitljivi fontovi i razmatranje korisnika s invaliditetom | Dobre prakse pristupačnosti uz manje područja za poboljšanje | Osnovna razmatranja pristupačnosti uz neke probleme | Ograničena pažnja prema zahtjevima pristupačnosti |

## Savjeti za uspjeh

> 💡 **Savjet za dizajn**: Započnite s suptilnim promjenama i postupno prelazite na dramatičnije stiliziranje. Male promjene u tipografiji i razmacima često imaju veliki utjecaj na percepciju kvalitete.

**Najbolje prakse koje treba slijediti:**
- **Testirajte** svoju ekstenziju u svijetlim i tamnim temama preglednika
- **Koristite** relativne jedinice (em, rem) za bolju skalabilnost
- **Održavajte** dosljedne razmake koristeći prilagođena svojstva CSS-a
- **Razmotrite** kako će vaš dizajn izgledati korisnicima s različitim vizualnim potrebama
- **Provjerite** svoj CSS kako biste osigurali da slijedi pravilnu sintaksu

> ⚠️ **Uobičajena pogreška**: Nemojte žrtvovati upotrebljivost zbog vizualne privlačnosti. Vaša ekstenzija treba biti i lijepa i funkcionalna.

**Zapamtite:**
- **Održavajte** važnu informaciju lako čitljivom
- **Osigurajte** da su gumbi i interaktivni elementi jednostavni za klik
- **Održavajte** jasnu vizualnu povratnu informaciju za korisničke akcije
- **Testirajte** svoj dizajn s stvarnim podacima, a ne samo s tekstom rezerviranog mjesta

Sretno u stvaranju ekstenzije za preglednik koja je i funkcionalna i vizualno zadivljujuća!

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.