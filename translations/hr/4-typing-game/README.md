<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efa2ab875b8bb5a7883816506da6b6d2",
  "translation_date": "2026-01-07T08:42:46+00:00",
  "source_file": "4-typing-game/README.md",
  "language_code": "hr"
}
-->
# Programiranje vođeno događajima - Izgradite igru tipkanja

```mermaid
journey
    title Vaše Putovanje Razvoja Igre Tipkanja
    section Osnove
      Planirajte strukturu igre: 3: Student
      Dizajnirajte korisničko sučelje: 4: Student
      Postavite HTML elemente: 4: Student
    section Funkcionalnost
      Obradite korisnički unos: 4: Student
      Pratite vrijeme: 5: Student
      Izračunajte točnost: 5: Student
    section Značajke
      Dodajte vizualnu povratnu informaciju: 5: Student
      Implementirajte logiku igre: 5: Student
      Usavršite iskustvo: 5: Student
```
## Uvod

Evo nečega što svaki programer zna, ali o tome rijetko govori: brzo tipkanje je supermoć! 🚀 Razmislite o tome - što brže možete prenijeti svoje ideje iz mozga u uređivač koda, to vaša kreativnost može bolje teći. To je kao imati izravan kanal između vaših misli i ekrana.

```mermaid
pie title Značajke Igre
    "Povratne informacije u stvarnom vremenu" : 25
    "Praćenje izvedbe" : 20
    "Interaktivno sučelje" : 20
    "Sustav tajmera" : 15
    "Upravljanje citatima" : 10
    "Prikaz rezultata" : 10
```
Želite li znati jedan od najboljih načina za unaprijediti ovu vještinu? Pogodili ste - izgradit ćemo igru!

```mermaid
flowchart LR
    A[Igrač započinje igru] --> B[Prikazuje se nasumični citat]
    B --> C[Igrač upisuje znakove]
    C --> D{Je li znak točan?}
    D -->|Da| E[Zeleno isticanje]
    D -->|Ne| F[Crveno isticanje]
    E --> G[Ažuriraj točnost]
    F --> G
    G --> H{Je li citat završen?}
    H -->|Ne| C
    H -->|Da| I[Izračunaj WPM]
    I --> J[Prikaži rezultate]
    J --> K[Želiš li igrati opet?]
    K -->|Da| B
    K -->|Ne| L[Kraj igre]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> Hajde da zajedno stvorimo sjajnu igru tipkanja!

Spremni ste primijeniti sve te vještine JavaScript-a, HTML-a i CSS-a koje ste učili? Izgradit ćemo igru tipkanja koja će vas izazivati sa slučajnim citatima legendarnog detektiva [Sherlocka Holmesa](https://en.wikipedia.org/wiki/Sherlock_Holmes). Igra će pratiti koliko brzo i točno možete tipkati - i vjerujte mi, to je zaraznije nego što mislite!

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

## Što trebate znati

```mermaid
flowchart TD
    A[Korisnička radnja] --> B{Vrsta događaja?}
    B -->|Pritisak tipke| C[Događaj s tipkovnice]
    B -->|Klik gumba| D[Događaj miša]
    B -->|Timer| E[Vremenski događaj]
    
    C --> F[Provjeri znak]
    D --> G[Pokreni/Resetiraj igru]
    E --> H[Ažuriraj timer]
    
    F --> I[Tocno?]
    I -->|Da| J[Istakni zeleno]
    I -->|Ne| K[Istakni crveno]
    
    J --> L[Ažuriraj rezultat]
    K --> L
    L --> M[Provjeri stanje igre]
    
    G --> N[Generiraj novi citat]
    H --> O[Prikaži vrijeme]
    
    M --> P[Je li igra gotova?]
    P -->|Da| Q[Prikaži rezultate]
    P -->|Ne| R[Nastavi igru]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```
Prije nego što krenemo, pobrinite se da ste upoznati s ovim pojmovima (ne brinite ako trebate brz podsjetnik - svi smo tamo bili!):

- Kreiranje tekstualnih unosa i kontrola gumba
- CSS i postavljanje stilova pomoću klasa  
- Osnove JavaScripta
  - Kreiranje niza
  - Kreiranje slučajnog broja
  - Dohvaćanje trenutačnog vremena

Ako vam je nešto od ovoga malo zaboravljeno, to je potpuno u redu! Ponekad je najbolji način da učvrstite svoje znanje skočiti u projekt i učiti usput.

### 🔄 **Pedagoška provjera**
**Procjena osnova**: Prije početka razvoja, provjerite razumijete li:
- ✅ Kako HTML forme i elementi za unos funkcioniraju
- ✅ CSS klase i dinamičko stiliziranje
- ✅ JavaScript događaje i handlere
- ✅ Manipulaciju nizovima i slučajan odabir
- ✅ Mjerenje vremena i izračune

**Brzi samoprovjeru**: Možete li objasniti kako ovi koncepti zajedno rade u interaktivnoj igri?
- **Događaji** se pokreću kad korisnici stupaju u interakciju s elementima
- **Handleri** obrađuju te događaje i ažuriraju stanje igre
- **CSS** pruža vizualnu povratnu informaciju za korisničke radnje
- **Mjerenje vremena** omogućuje praćenje performansi i napredak igre

```mermaid
quadrantChart
    title Razvoj Vještina u Igrama Tipkanja
    x-axis Početnik --> Ekspert
    y-axis Statično --> Interaktivno
    quadrant-1 Napredne Igre
    quadrant-2 Aplikacije u stvarnom vremenu
    quadrant-3 Osnovne Stranice
    quadrant-4 Interaktivni Sajtovi
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```
## Izgradimo ovo!

[Izrada igre tipkanja pomoću programiranja vođenog događajima](./typing-game/README.md)

### ⚡ **Što možete raditi u sljedećih 5 minuta**
- [ ] Otvorite konzolu preglednika i pokušajte slušati tipkovne događaje s `addEventListener`
- [ ] Kreirajte jednostavnu HTML stranicu s poljem za unos i testirajte detekciju tipkanja
- [ ] Vježbajte manipulaciju nizovima uspoređujući uneseni tekst s ciljnim tekstom
- [ ] Eksperimentirajte s `setTimeout` da razumijete funkcije vremenskog upravljanja

### 🎯 **Što možete postići u sljedećem satu**
- [ ] Završite kviz nakon lekcije i razumite programiranje vođeno događajima
- [ ] Izradite osnovnu verziju igre tipkanja s validacijom riječi
- [ ] Dodajte vizualnu povratnu informaciju za točno i netočno tipkanje
- [ ] Implementirajte jednostavan sustav bodovanja na temelju brzine i točnosti
- [ ] Stilizirajte svoju igru CSS-om da bi bila vizualno privlačna

### 📅 **Vaš tjedan razvoja igre**
- [ ] Dovršite punu igru tipkanja sa svim značajkama i poliranjem
- [ ] Dodajte razine težine s različitim složenostima riječi
- [ ] Implementirajte praćenje korisničkih statistika (WPM, točnost tijekom vremena)
- [ ] Kreirajte zvučne efekte i animacije za bolje korisničko iskustvo
- [ ] Učinite svoju igru prilagođenom za mobilne uređaje s dodirnim zaslonima
- [ ] Podijelite svoju igru na mreži i prikupite povratne informacije korisnika

### 🌟 **Vaš mjesečni interaktivni razvoj**
- [ ] Izradite više igara koje istražuju različite obrasce interakcije
- [ ] Naučite o game loopovima, upravljanju stanjima i optimizaciji performansi
- [ ] Doprinosite open source projektima razvoja igara
- [ ] Usavršite napredne koncepte mjerenja vremena i glatkih animacija
- [ ] Kreirajte portfolio koji prikazuje razne interaktivne aplikacije
- [ ] Mentorirajte druge zainteresirane za razvoj igara i korisničku interakciju

## 🎯 Vaš vremenski plan za savladavanje igre tipkanja

```mermaid
timeline
    title Napredak u učenju razvoja igara
    
    section Postavljanje (10 minuta)
        Struktura projekta: HTML temelj
                         : CSS postavljanje stilova
                         : Kreiranje JavaScript datoteke
        
    section Korisničko sučelje (20 minuta)
        Interaktivni elementi: Polja za unos
                            : Kontrole gumba
                            : Područja za prikaz
                            : Odzivan raspored
        
    section Obrada događaja (25 minuta)
        Interakcija korisnika: Tipkovni događaji
                        : Događaji miša
                        : Povratne informacije u stvarnom vremenu
                        : Upravljanje stanjem
        
    section Logika igre (30 minuta)
        Osnovna funkcionalnost: Generiranje citata
                          : Usporedba znakova
                          : Izračun točnosti
                          : Implementacija štoperice
        
    section Praćenje performansi (35 minuta)
        Metrike i analitika: Izračun WPM
                           : Praćenje pogrešaka
                           : Vizualizacija napretka
                           : Prikaz rezultata
        
    section Dorada i unaprjeđenje (45 minuta)
        Korisničko iskustvo: Vizualne povratne informacije
                       : Zvučni efekti
                       : Animacije
                       : Značajke pristupačnosti
        
    section Napredne značajke (1 tjedan)
        Proširena funkcionalnost: Razine težine
                              : ljestvice najboljih
                              : Prilagođeni citati
                              : Opcije za više igrača
        
    section Profesionalne vještine (1 mjesec)
        Razvoj igara: Optimizacija performansi
                        : Arhitektura koda
                        : Strategije testiranja
                        : Obrasci implementacije
```
### 🛠️ Sažetak vašeg alata za razvoj igre

Nakon dovršetka ovog projekta savladat ćete:
- **Programiranje vođeno događajima**: Reagirajući korisnički sučelja koja odgovaraju na unos
- **Povratnu informaciju u stvarnom vremenu**: Trenutna vizualna i izvedbena ažuriranja
- **Mjerenje performansi**: Precizni sustavi mjerenja vremena i bodovanja
- **Upravljanje stanjem igre**: Kontrola tijeka aplikacije i korisničkog iskustva
- **Interaktivni dizajn**: Stvaranje zanimljivih, zaraznih korisničkih iskustava
- **Moderne web API-jeve**: Korištenje mogućnosti preglednika za bogate interakcije
- **Obrasce pristupačnosti**: Uključivi dizajn za sve korisnike

**Primjene u stvarnom svijetu**: Ove vještine direktno se primjenjuju na:
- **Web aplikacije**: Bilo koje interaktivno sučelje ili nadzorna ploča
- **Obrazovni softver**: Platforme za učenje i alati za procjenu vještina
- **Alati za produktivnost**: Tekstualni uređivači, IDE-i i softver za suradnju
- **Industrija igara**: Igre unutar preglednika i interaktivna zabava
- **Mobilni razvoj**: Sučelja na dodir i upravljanje gestama

**Sljedeća razina**: Spremni ste istražiti napredne okvire za igre, sustave za multiplayer u stvarnom vremenu ili složene interaktivne aplikacije!

## Zasluge

Napisao s ljubavlju ♥️ [Christopher Harrison](http://www.twitter.com/geektrainer)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Ograničenje odgovornosti**:  
Ovaj je dokument preveden korištenjem AI prevoditeljske usluge [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo postići točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za kritične informacije preporučuje se profesionalni ljudski prijevod. Ne prihvaćamo odgovornost za bilo kakva nesporazume ili pogrešna tumačenja proizašla iz korištenja ovog prijevoda.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->