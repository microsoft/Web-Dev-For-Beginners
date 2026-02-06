# Sündmustepõhine programmeerimine - Ehita tippimismäng

```mermaid
journey
    title Teie trükkimismängu arenduslugu
    section Alus
      Määra mängu struktuur: 3: Student
      Kujunda kasutajaliides: 4: Student
      Sea üles HTML elemendid: 4: Student
    section Funktsionaalsus
      Töötle kasutaja sisendit: 4: Student
      Jälgi aega: 5: Student
      Arvuta täpsus: 5: Student
    section Omadused
      Lisa visuaalne tagasiside: 5: Student
      Rakenda mängulogiika: 5: Student
      Lihvi kogemust: 5: Student
```
## Sissejuhatus

Siin on midagi, mida iga arendaja teab, aga harva räägib: kiirelt tippimine on supervõime! 🚀 Mõtle selle peale – mida kiiremini suudad oma ideed ajust koodiredaktorisse viia, seda rohkem saab su loovus voolata. See on nagu otsetee su mõtete ja ekraani vahel.

```mermaid
pie title Mängu Funktsioonid
    "Reaalajas Tagasiside" : 25
    "Tulemuste Jälgimine" : 20
    "Interaktiivne Kasutajaliides" : 20
    "Taimerisüsteem" : 15
    "Tsitaatide Haldamine" : 10
    "Tulemuste Kuvamine" : 10
```
Tahad teada üht parimat viisi selle oskuse arendamiseks? Arvasid õigesti – hakkame mängu ehitama!

```mermaid
flowchart LR
    A[Mängija alustab mängu] --> B[Juhuslik tsitaat kuvatud]
    B --> C[Mängija sisestab tähed]
    C --> D{Kas täht on õige?}
    D -->|Jah| E[Roheline esiletõst]
    D -->|Ei| F[Punane esiletõst]
    E --> G[Täpsuse uuendamine]
    F --> G
    G --> H{Tsitaat valmis?}
    H -->|Ei| C
    H -->|Jah| I[Sõnade arv minutis arvutatud]
    I --> J[Tulemuste kuvamine]
    J --> K[Kas mängida uuesti?]
    K -->|Jah| B
    K -->|Ei| L[Mäng läbi]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> Loome koos laheda tippimismängu!

Oled valmis panema kogu selle JavaScripti, HTMLi ja CSSi oskuse tööle, mida oled õppinud? Me ehitame tippimismängu, mis paneb sind proovile juhuslike tsitaatidega legendaarse detektiivi [Sherlock Holmesi](https://en.wikipedia.org/wiki/Sherlock_Holmes) loomingust. Mäng jälgib, kui kiiresti ja täpselt sa tippida suudad – ja usu mind, see on palju sõltuvust tekitavam, kui arvad!

```mermaid
mindmap
  root((Tippimise mängu arendus))
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

## Mida sul peab olema oskusteavet

```mermaid
flowchart TD
    A[Kasutaja Tegevus] --> B{Sündmuse Tüüp?}
    B -->|Vajutuse Klahv| C[Klaviatuuri Sündmus]
    B -->|Nupu Klikk| D[Hiire Sündmus]
    B -->|Taimer| E[Aja Sündmus]
    
    C --> F[Tähe Kontrollimine]
    D --> G[Mängu Algus/Reset]
    E --> H[Taimeri Uuendamine]
    
    F --> I{Õige?}
    I -->|Jah| J[Esile Roheline]
    I -->|Ei| K[Esile Punane]
    
    J --> L[Skoori Uuendamine]
    K --> L
    L --> M[Mängu Seisu Kontrollimine]
    
    G --> N[Uue Tsitaadi Loomine]
    H --> O[Aja Kuvamine]
    
    M --> P{Mäng Lõpetatud?}
    P -->|Jah| Q[Tulemuste Kuvamine]
    P -->|Ei| R[Mängu Jätkamine]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```
Enne sukeldumist veendu, et tunneksid neid kontseptsioone (ära muretse, kui vajad kiiret värskendust – me kõik oleme seal olnud!):

- Tekstisisendi ja nupukontrollide loomine
- CSS ja stiilide määramine klasside abil  
- JavaScripti alused
  - Massiivide loomine
  - Juhuslike arvude genereerimine
  - Praeguse aja hankimine

Kui mõni neist tundub pisut roostes, pole see üldse probleem! Mõnikord on parim viis oma teadmisi tugevdada see, kui sukeldud projekti ja hakkad asju lahendama jooksvalt.

### 🔄 **Pedagoogiline kontrollpunkt**
**Põhioskuste hindamine**: Enne arenduse alustamist veendu, et mõistad:
- ✅ Kuidas HTML vormid ja sisendi elemendid töötavad
- ✅ CSS klassid ja dünaamiline stiilimine
- ✅ JavaScripti sündmuste kuulajad ja käsitlejad
- ✅ Massiivide manipuleerimine ja juhuslik valik
- ✅ Aja mõõtmine ja arvutused

**Kiire enesetest**: Kas suudad selgitada, kuidas need kontseptsioonid interaktiivses mängus koos toimivad?
- **Sündmused** käivituvad, kui kasutajad elementidega suhtlevad
- **Käsitlejad** töötlevad neid sündmusi ja uuendavad mängu seisundit
- **CSS** annab visuaalset tagasisidet kasutaja tegevustele
- **Ajastus** võimaldab mõõta sooritust ja mängu edenemist

```mermaid
quadrantChart
    title Trükkimise mängu oskuste arendamine
    x-axis Algaja --> Ekspert
    y-axis Staatiline --> Interaktiivne
    quadrant-1 Täiustatud mängud
    quadrant-2 Reaalajas rakendused
    quadrant-3 Põhilised lehed
    quadrant-4 Interaktiivsed saidid
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```
## Hakakem seda asja ehitama!

[Tippimismängu loomine sündmustepõhise programmeerimise abil](./typing-game/README.md)

### ⚡ **Mida saad teha järgmise 5 minutiga**
- [ ] Ava oma brauseri konsool ja proovi kuulata klaviatuuri sündmusi `addEventListener` abil
- [ ] Loo lihtne HTML leht sisendväljaga ja testi tippimise tuvastamist
- [ ] Harjuta stringide manipuleerimist, võrreldes tippitud teksti sihttekstiga
- [ ] Katseta `setTimeout`i, et aru saada ajafunktsioonidest

### 🎯 **Mida saad selle tunni jooksul saavutada**
- [ ] Täida peatunni test ja saa aru sündmustepõhisest programmeerimisest
- [ ] Ehita lihtne versioon tippimismängust koos sõnade valideerimisega
- [ ] Lisa visuaalne tagasiside korrektsel ja valel tippimisel
- [ ] Rakenda lihtne punktisüsteem kiiruse ja täpsuse põhjal
- [ ] Stiilita oma mäng CSS-iga, et muuta see visuaalselt atraktiivseks

### 📅 **Sinu nädalane mänguarendus**
- [ ] Valmista terve tippimismäng koos kõigi funktsioonide ja lihviga
- [ ] Lisa raskusastmed erineva sõnakompleksusega
- [ ] Rakenda kasutajastatistika jälgimist (WPM, täpsus aja jooksul)
- [ ] Loo heliefektid ja animatsioonid parema kasutajakogemuse jaoks
- [ ] Tee mäng mobiilseadmete jaoks puutetundlikuks
- [ ] Jaga oma mängu internetis ja kogu kasutajate tagasisidet

### 🌟 **Sinu kuu pikkune interaktiivne arendus**
- [ ] Ehitada mitu mängu, mis uurivad erinevaid interaktsioonimustreid
- [ ] Õpi mängutsüklitest, seisundihaldusest ja jõudluse optimeerimisest
- [ ] Panusta avatud lähtekoodiga mänguarendusprojektidesse
- [ ] Valda keerukaid ajastamise kontseptsioone ja sujuvaid animatsioone
- [ ] Koosta portfoolio erinevatest interaktiivsetest rakendustest
- [ ] Juhenda teisi, kes on huvitatud mänguarendusest ja kasutajate interaktsioonist

## 🎯 Sinu tippimismängu meisterlikkuse ajagraafik

```mermaid
timeline
    title Mänguarenduse õppimise edenemine
    
    section Seadistamine (10 minutit)
        Projekti struktuur: HTML alus
                         : CSS kujunduse seadistamine
                         : JavaScript faili loomine
        
    section Kasutajaliides (20 minutit)
        Interaktiivsed elemendid: Sisendväljad
                                : Nupuvajutuse juhtelemendid
                                : Kuvamisalad
                                : Reageeriv paigutus
        
    section Sündmuste käitlemine (25 minutit)
        Kasutaja interaktsioon: Klaviatuuri sündmused
                             : Hiire sündmused
                             : Reaalajas tagasiside
                             : Oleku haldamine
        
    section Mänguloogika (30 minutit)
        Põhifunktsionaalsus: Tsitaatide genereerimine
                          : Tähemärkide võrdlus
                          : Täpsuse arvutamine
                          : Taimeri rakendamine
        
    section Jõudluse jälgimine (35 minutit)
        Mõõdikud & analüütika: Sõnade minutis arvutamine
                             : Vigade jälgimine
                             : Edenemise visualiseerimine
                             : Tulemuste kuvamine
        
    section Viimistlus & täiustamine (45 minutit)
        Kasutajakogemus: Visuaalne tagasiside
                       : Heliefektid
                       : Animatsioonid
                       : Juurdepääsetavuse funktsioonid
        
    section Täiustatud omadused (1 nädal)
        Laiendatud funktsionaalsus: Raskeaste tasemed
                                  : Tabelid
                                  : Kohandatud tsitaadid
                                  : Mitmikmängu võimalused
        
    section Professionaalsed oskused (1 kuu)
        Mänguarendus: Jõudluse optimeerimine
                      : Koodi arhitektuur
                      : Testimise strateegiad
                      : Deploy mustrid
```
### 🛠️ Sinu mänguarenduse tööriistakasti kokkuvõte

Pärast selle projekti lõpetamist oled valdanud:
- **Sündmustepõhine programmeerimine**: reageerivad kasutajaliidesed, mis vastavad sisendile
- **Reaalajas tagasiside**: kohesed visuaalsed ja jõudluslikud uuendused
- **Jõudluse mõõtmine**: täpsed ajastus- ja punktisüsteemid
- **Mänguseisundi haldus**: rakenduse voo ja kasutajakogemuse kontrollimine
- **Interaktiivne disain**: kaasahaaravate ja sõltuvusttekitavate kasutajakogemuste loomine
- **Moodne veebipõhine API**: brauserivõimaluste kasutamine rikkalike interaktsioonide jaoks
- **Juurdepääsetavuse mustrid**: kaasav disain kõigile kasutajatele

**Reaalmaailma rakendused**: Need oskused kehtivad otseselt järgmistes valdkondades:
- **Veebirakendused**: igasugused interaktiivsed liidesed või juhtpaneelid
- **Haridustarkvara**: õppimisplatvormid ja oskuste hindamise tööriistad
- **Tootlikkustööriistad**: tekstiredaktorid, IDEd ja koostöö tarkvara
- **Mängutööstus**: brauserimängud ja interaktiivne meelelahutus
- **Mobiiliarendus**: puutetundlikud liidesed ja žestide käsitlemine

**Järgmine tase**: oled valmis avastama keerukamaid mänguraamistikke, reaalajas mitmikmängusüsteeme või keerulisi interaktiivseid rakendusi!

## Tänusõnad

Kirjutas ♥️ [Christopher Harrison](http://www.twitter.com/geektrainer)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud tehisintellekti tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame täpsust, tuleb arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument oma algkeeles tuleks pidada autoriteetseks allikaks. Kriitilise teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tingitud arusaamatuste või valesti tõlgendamise eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->