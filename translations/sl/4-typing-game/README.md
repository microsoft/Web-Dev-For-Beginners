<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efa2ab875b8bb5a7883816506da6b6d2",
  "translation_date": "2026-01-07T09:46:14+00:00",
  "source_file": "4-typing-game/README.md",
  "language_code": "sl"
}
-->
# Programiranje na dogodek - Naredi igro tipkanja

```mermaid
journey
    title Vaša pot razvoja igre tipkanja
    section Osnova
      Načrtuj strukturo igre: 3: Student
      Oblikuj uporabniški vmesnik: 4: Student
      Nastavi HTML elemente: 4: Student
    section Funkcionalnost
      Obdelaj uporabniški vnos: 4: Student
      Spremljaj čas: 5: Student
      Izračunaj natančnost: 5: Student
    section Značilnosti
      Dodaj vizualne povratne informacije: 5: Student
      Izvedi logiko igre: 5: Student
      Izboljšaj izkušnjo: 5: Student
```
## Uvod

Tukaj je nekaj, kar vsak razvijalec ve, a redko govori o tem: hitro tipkanje je supermoč! 🚀 Pomisli - čim hitreje lahko svoje ideje preneseš iz možganov v urejevalnik kode, tem bolje lahko tvoja ustvarjalnost teče. To je kot da bi imel neposredno povezavo med svojimi mislimi in zaslonom.

```mermaid
pie title Funkcije igre
    "Povratne informacije v realnem času" : 25
    "Sledenje uspešnosti" : 20
    "Interaktivni vmesnik" : 20
    "Sistem časovnika" : 15
    "Upravljanje citatov" : 10
    "Prikaz rezultatov" : 10
```
Želiš vedeti enega najboljših načinov, da to veščino izboljšaš? Uganil si - zgradili bomo igro!

```mermaid
flowchart LR
    A[Igralec začne igro] --> B[Prikazan naključni citat]
    B --> C[Igralec vnaša znake]
    C --> D{Je znak pravilen?}
    D -->|Da| E[Zeleno označeno]
    D -->|Ne| F[Rdeče označeno]
    E --> G[Posodobi natančnost]
    F --> G
    G --> H{Ali je citat dokončan?}
    H -->|Ne| C
    H -->|Da| I[Izračunaj WPM]
    I --> J[Prikaži rezultate]
    J --> K[Želite igrati ponovno?]
    K -->|Da| B
    K -->|Ne| L[Konec igre]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> Skupaj ustvarimo odlično igro tipkanja!

Pripravljen, da uporabiš vse tiste veščine JavaScript, HTML in CSS, ki si jih pridobil? Zgradili bomo igro tipkanja, ki te bo izzivala z naključnimi citati legendarnega detektiva [Sherlocka Holmesa](https://en.wikipedia.org/wiki/Sherlock_Holmes). Igra bo spremljala, kako hitro in natančno lahko tipkaš - in verjemi, bolj je zasvojljiva, kot si misliš!

```mermaid
mindmap
  root((Razvoj igre tipkanja))
    User Interface
      Input Elements
      Visual Feedback
      Responsive Design
      Accessibility
    Game Logic
      Quote Selection
      Timer Management
      Accuracy Tracking
      Score Calculation
    Event Handling
      Keyboard Input
      Button Clicks
      Real-time Updates
      Game State Changes
    Performance Metrics
      Words Per Minute
      Character Accuracy
      Error Tracking
      Progress Display
    User Experience
      Immediate Feedback
      Clear Instructions
      Engaging Content
      Achievement System
```
![demo](../../../4-typing-game/images/demo.gif)

## Kaj moraš znati

```mermaid
flowchart TD
    A[Uporabniška Akcija] --> B{Vrsta Dogodka?}
    B -->|Pritisek Tipke| C[Dogodek Tipkovnice]
    B -->|Klik Gumba| D[Mišin Dogodek]
    B -->|Časovnik| E[Časovni Dogodek]
    
    C --> F[Preveri Znak]
    D --> G[Zaženi/Ponastavi Igro]
    E --> H[Posodobi Časovnik]
    
    F --> I{Pravilno?}
    I -->|Da| J[Označi Zeleno]
    I -->|Ne| K[Označi Rdeče]
    
    J --> L[Posodobi Rezultat]
    K --> L
    L --> M[Preveri Stanje Igre]
    
    G --> N[Generiraj Nov Citát]
    H --> O[Prikaži Čas]
    
    M --> P{Je Igara Končana?}
    P -->|Da| Q[Prikaži Rezultate]
    P -->|Ne| R[Nadaljuj Igro]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```
Preden začnemo, poskrbi, da ti ti koncepti niso tuji (brez skrbi, če potrebuješ hitro osvežitev - vsi smo bili tam!):

- Ustvarjanje tekstovnih vnosov in gumbov
- CSS in nastavljanje stilov s pomočjo razredov  
- Osnove JavaScript-a
  - Ustvarjanje polja (array)
  - Ustvarjanje naključne številke
  - Pridobivanje trenutnega časa

Če ti je katera od teh stvari nekoliko pozabljena, nič hudega! Včasih je najboljši način, da utrdiš znanje, da se lotiš projekta in stvari rešuješ sproti.

### 🔄 **Pedagoški pregled**
**Preverjanje osnov**: Pred začetkom razvoja preveri, če razumeš:
- ✅ Kako delujejo HTML obrazci in vhodni elementi
- ✅ CSS razredi in dinamično oblikovanje
- ✅ JavaScript poslušalci dogodkov in obdelovalci
- ✅ Manipulacija polj in naključen izbor
- ✅ Merjenje časa in izračuni

**Hiter samopreizkus**: Lahko pojasniš, kako ti koncepti sodelujejo v interaktivni igri?
- **Dogodki** se sprožijo, ko uporabniki sodelujejo z elementi
- **Obdelovalci** obdelujejo dogodke in posodabljajo stanje igre
- **CSS** ponuja vizualno povratno informacijo za uporabniška dejanja
- **Časovna meritev** omogoča merjenje uspešnosti in napredovanje igre

```mermaid
quadrantChart
    title Razvoj spretnosti v tipkalnih igrah
    x-axis Začetnik --> Strokovnjak
    y-axis Statično --> Interaktivno
    quadrant-1 Napredne igre
    quadrant-2 Aplikacije v realnem času
    quadrant-3 Osnovne strani
    quadrant-4 Interaktivna mesta
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```
## Gremo zgradit to stvar!

[Ustvarjanje igre tipkanja z uporabo programiranja na dogodke](./typing-game/README.md)

### ⚡ **Kaj lahko narediš v naslednjih 5 minutah**
- [ ] Odpri konzolo brskalnika in poslušaj dogodke tipkovnice z `addEventListener`
- [ ] Ustvari preprosto HTML stran z vhodnim poljem in preizkusi zaznavanje tipkanja
- [ ] Vadite manipulacijo nizov z primerjavo vtipkanega besedila z ciljanim besedilom
- [ ] Eksperimentiraj z `setTimeout`, da razumeš časovne funkcije

### 🎯 **Kaj lahko dosežeš v tem času**
- [ ] Zaključi kviz po lekciji in razumi programiranje na dogodke
- [ ] Zgradi osnovno različico igre tipkanja z validacijo besed
- [ ] Dodaj vizualno povratno informacijo za pravilno in nepravilno tipkanje
- [ ] Izvedi preprost sistem točkovanja glede na hitrost in natančnost
- [ ] Oblikuj svojo igro s CSS, da bo vizualno privlačna

### 📅 **Tvoj tedenski razvoj igre**
- [ ] Dokončaj celotno igro tipkanja z vsemi funkcijami in dodelavo
- [ ] Dodaj stopnje težavnosti z različno kompleksnostjo besed
- [ ] Izvedi sledenje statistikam uporabnika (WPM, natančnost skozi čas)
- [ ] Ustvari zvočne učinke in animacije za boljšo uporabniško izkušnjo
- [ ] Naredi igro občutljivo na mobilne naprave za naprave na dotik
- [ ] Deli igro na spletu in zberi povratne informacije uporabnikov

### 🌟 **Tvoj mesečni interaktivni razvoj**
- [ ] Zgradi več iger, ki raziskujejo različne vzorce interakcije
- [ ] Nauči se o igračnih zankah, upravljanju stanja in optimizaciji zmogljivosti
- [ ] Prispevaj k odprtokodnim projektom za razvoj iger
- [ ] Obvladaj napredne časovne koncepte in gladke animacije
- [ ] Ustvari portfelj, ki prikazuje različne interaktivne aplikacije
- [ ] Mentoriraj druge, ki jih zanima razvoj iger in uporabniške interakcije

## 🎯 Tvoj načrt obvladovanja igre tipkanja

```mermaid
timeline
    title Napredek učenja razvoja iger
    
    section Nastavitev (10 minut)
        Struktura projekta: Osnova HTML
                         : Nastavitev CSS stilov
                         : Ustvarjanje JavaScript datoteke
        
    section Uporabniški vmesnik (20 minut)
        Interaktivni elementi: Vhodna polja
                            : Gumbi za upravljanje
                            : Prikazni deli
                            : Prilagodljiva ureditev
        
    section Obdelava dogodkov (25 minut)
        Interakcija uporabnika: Tipkovni dogodki
                             : Miškini dogodki
                             : Povratne informacije v realnem času
                             : Upravljanje stanja
        
    section Logika igre (30 minut)
        Jedrna funkcionalnost: Generiranje citatov
                             : Primerjava znakov
                             : Izračun natančnosti
                             : Implementacija časovnika
        
    section Spremljanje zmogljivosti (35 minut)
        Merila in analitika: Izračun WPM
                           : Sledenje napakam
                           : Vizualizacija napredka
                           : Prikaz rezultatov
        
    section Izboljšave in dodelave (45 minut)
        Uporniška izkušnja: Vizualne povratne informacije
                          : Zvočni učinki
                          : Animacije
                          : Funkcije dostopnosti
        
    section Napredne funkcije (1 teden)
        Razširjena funkcionalnost: Raven težavnosti
                                 : Lestvice najboljših
                                 : Prilagojeni citati
                                 : Večigralske možnosti
        
    section Poklicne veščine (1 mesec)
        Razvoj iger: Optimizacija zmogljivosti
                    : Arhitektura kode
                    : Strategije testiranja
                    : Vzorce uvajanja
```
### 🛠️ Povzetek orodij za razvoj tvoje igre

Po zaključku tega projekta boš obvladal:
- **Programiranje na dogodke**: odzivni uporabniški vmesniki, ki reagirajo na vnos
- **Povratne informacije v realnem času**: trenutno vizualno in zmogljivostno posodabljanje
- **Merjenje zmogljivosti**: natančni časovni in točkovni sistemi
- **Upravljanje stanja igre**: nadzor poteka aplikacije in uporabniške izkušnje
- **Interaktivni dizajn**: ustvarjanje privlačnih, zasvojljivih uporabniških izkušenj
- **Sodobni spletni vmesniki API**: uporaba zmožnosti brskalnika za bogate interakcije
- **Vzorce dostopnosti**: vključujoč dizajn za vse uporabnike

**Praktične uporabe**: Te veščine so neposredno uporabne za:
- **Spletne aplikacije**: vsak interaktivni vmesnik ali nadzorna plošča
- **Izobraževalna programska oprema**: učne platforme in orodja za ocenjevanje znanja
- **Produktivnostna orodja**: urejevalniki besedil, IDE-ji in programska oprema za sodelovanje
- **Industrija iger**: brskalniške igre in interaktivna zabava
- **Mobilni razvoj**: vmesniki na dotik in upravljanje gest

**Naslednji korak**: Pripravljen si raziskati napredne igre okvire, sistem za večigralstvo v realnem času ali zahtevne interaktivne aplikacije!

## Zahvale

Napisal z ♥️ [Christopher Harrison](http://www.twitter.com/geektrainer)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Omejitev odgovornosti**:
Ta dokument je bil preveden z uporabo storitve za avtomatski prevod AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas opozarjamo, da avtomatski prevodi lahko vsebujejo napake ali netočnosti. Originalni dokument v izvirnem jeziku velja za uradni vir. Za ključne informacije priporočamo strokovni človeški prevod. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->