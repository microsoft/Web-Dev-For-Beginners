# Tapahtumapohjainen ohjelmointi - Rakenna kirjoituspeli

```mermaid
journey
    title Your Typing Game Development Journey
    section Foundation
      Plan game structure: 3: Student
      Design user interface: 4: Student
      Setup HTML elements: 4: Student
    section Functionality
      Handle user input: 4: Student
      Track timing: 5: Student
      Calculate accuracy: 5: Student
    section Features
      Add visual feedback: 5: Student
      Implement game logic: 5: Student
      Polish experience: 5: Student
```

## Johdanto

Tässä on jotain, mitä jokainen kehittäjä tietää, mutta harvoin puhuu: nopea kirjoittaminen on supervoima! 🚀 Mieti sitä - mitä nopeammin saat ideasi siirtymään aivoistasi koodieditoriin, sitä paremmin luovuutesi pääsee valloilleen. Se on kuin suora yhteys ajatustesi ja näytön välillä.

```mermaid
pie title Game Features
    "Real-time Feedback" : 25
    "Performance Tracking" : 20
    "Interactive UI" : 20
    "Timer System" : 15
    "Quote Management" : 10
    "Results Display" : 10
```

Haluatko tietää yhden parhaista tavoista kehittää tätä taitoa? Arvasit oikein - aiomme rakentaa pelin!

```mermaid
flowchart LR
    A[Player starts game] --> B[Random quote displayed]
    B --> C[Player types characters]
    C --> D{Character correct?}
    D -->|Yes| E[Green highlight]
    D -->|No| F[Red highlight]
    E --> G[Update accuracy]
    F --> G
    G --> H{Quote complete?}
    H -->|No| C
    H -->|Yes| I[Calculate WPM]
    I --> J[Display results]
    J --> K[Play again?]
    K -->|Yes| B
    K -->|No| L[Game over]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```

> Luodaan yhdessä mahtava kirjoituspeli!

Oletko valmis hyödyntämään kaikkia niitä JavaScript-, HTML- ja CSS-taitoja, joita olet oppinut? Aiomme rakentaa kirjoituspelin, joka haastaa sinut satunnaisilla lainauksilla legendaariselta etsivältä [Sherlock Holmesilta](https://en.wikipedia.org/wiki/Sherlock_Holmes). Peli seuraa, kuinka nopeasti ja tarkasti pystyt kirjoittamaan - ja usko pois, se on koukuttavampaa kuin luuletkaan!

```mermaid
mindmap
  root((Typing Game Development))
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

## Mitä sinun tulee tietää

```mermaid
flowchart TD
    A[User Action] --> B{Event Type?}
    B -->|Key Press| C[Keyboard Event]
    B -->|Button Click| D[Mouse Event]
    B -->|Timer| E[Time Event]
    
    C --> F[Check Character]
    D --> G[Start/Reset Game]
    E --> H[Update Timer]
    
    F --> I{Correct?}
    I -->|Yes| J[Highlight Green]
    I -->|No| K[Highlight Red]
    
    J --> L[Update Score]
    K --> L
    L --> M[Check Game State]
    
    G --> N[Generate New Quote]
    H --> O[Display Time]
    
    M --> P{Game Complete?}
    P -->|Yes| Q[Show Results]
    P -->|No| R[Continue Game]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```

Ennen kuin sukellamme projektiin, varmista, että hallitset nämä käsitteet (ei haittaa, jos tarvitset nopean kertauksen - me kaikki olemme olleet siinä tilanteessa!):

- Tekstisyötteen ja painikkeiden luominen
- CSS ja tyylien asettaminen luokkien avulla  
- JavaScriptin perusteet
  - Taulukon luominen
  - Satunnaisen numeron luominen
  - Nykyisen ajan hakeminen

Jos jokin näistä tuntuu hieman epävarmalta, se on täysin ok! Joskus paras tapa vahvistaa osaamistasi on hypätä projektiin ja oppia asioita matkan varrella.

### 🔄 **Pedagoginen tarkistus**
**Perustason arviointi**: Ennen kehityksen aloittamista varmista, että ymmärrät:
- ✅ Kuinka HTML-lomakkeet ja syöte-elementit toimivat
- ✅ CSS-luokat ja dynaaminen tyylittely
- ✅ JavaScriptin tapahtumakuuntelijat ja käsittelijät
- ✅ Taulukon käsittely ja satunnaisvalinta
- ✅ Ajan mittaus ja laskelmat

**Nopea itsearviointi**: Voitko selittää, miten nämä käsitteet toimivat yhdessä interaktiivisessa pelissä?
- **Tapahtumat** aktivoituvat, kun käyttäjät ovat vuorovaikutuksessa elementtien kanssa
- **Käsittelijät** käsittelevät tapahtumia ja päivittävät pelin tilaa
- **CSS** tarjoaa visuaalista palautetta käyttäjän toimista
- **Ajastus** mahdollistaa suorituskyvyn mittaamisen ja pelin etenemisen

```mermaid
quadrantChart
    title Typing Game Skills Development
    x-axis Beginner --> Expert
    y-axis Static --> Interactive
    quadrant-1 Advanced Games
    quadrant-2 Real-time Apps
    quadrant-3 Basic Pages
    quadrant-4 Interactive Sites
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```

## Rakennetaan tämä peli!

[Kirjoituspelin luominen tapahtumapohjaisen ohjelmoinnin avulla](./typing-game/README.md)

### ⚡ **Mitä voit tehdä seuraavan 5 minuutin aikana**
- [ ] Avaa selaimen konsoli ja kokeile kuunnella näppäimistötapahtumia `addEventListener`-toiminnolla
- [ ] Luo yksinkertainen HTML-sivu syötekentällä ja testaa kirjoituksen tunnistusta
- [ ] Harjoittele merkkijonojen käsittelyä vertaamalla kirjoitettua tekstiä kohdetekstiin
- [ ] Kokeile `setTimeout`-toimintoa ymmärtääksesi ajastustoimintoja

### 🎯 **Mitä voit saavuttaa tämän tunnin aikana**
- [ ] Suorita oppitunnin jälkeinen testi ja ymmärrä tapahtumapohjainen ohjelmointi
- [ ] Rakenna pelin perusversio, jossa on sanan validointi
- [ ] Lisää visuaalista palautetta oikeasta ja väärästä kirjoituksesta
- [ ] Toteuta yksinkertainen pistelaskujärjestelmä nopeuden ja tarkkuuden perusteella
- [ ] Tyylittele pelisi CSS:n avulla, jotta se näyttää houkuttelevalta

### 📅 **Viikon mittainen pelikehitys**
- [ ] Viimeistele koko kirjoituspeli kaikilla ominaisuuksilla ja viimeistelyillä
- [ ] Lisää vaikeustasoja, joissa on vaihteleva sanan monimutkaisuus
- [ ] Toteuta käyttäjätilastojen seuranta (WPM, tarkkuus ajan myötä)
- [ ] Luo äänitehosteita ja animaatioita paremman käyttäjäkokemuksen saavuttamiseksi
- [ ] Tee pelistäsi mobiiliystävällinen kosketuslaitteille
- [ ] Jaa pelisi verkossa ja kerää palautetta käyttäjiltä

### 🌟 **Kuukauden mittainen interaktiivinen kehitys**
- [ ] Rakenna useita pelejä, jotka tutkivat erilaisia vuorovaikutusmalleja
- [ ] Opettele pelisilmukoita, tilanhallintaa ja suorituskyvyn optimointia
- [ ] Osallistu avoimen lähdekoodin pelikehitysprojekteihin
- [ ] Hallitse edistyneitä ajastuskäsitteitä ja sulavia animaatioita
- [ ] Luo portfolio, joka esittelee erilaisia interaktiivisia sovelluksia
- [ ] Mentoroi muita, jotka ovat kiinnostuneita pelikehityksestä ja käyttäjävuorovaikutuksesta

## 🎯 Kirjoituspelin hallinnan aikajana

```mermaid
timeline
    title Game Development Learning Progression
    
    section Setup (10 minutes)
        Project Structure: HTML foundation
                         : CSS styling setup
                         : JavaScript file creation
        
    section User Interface (20 minutes)
        Interactive Elements: Input fields
                            : Button controls
                            : Display areas
                            : Responsive layout
        
    section Event Handling (25 minutes)
        User Interaction: Keyboard events
                        : Mouse events
                        : Real-time feedback
                        : State management
        
    section Game Logic (30 minutes)
        Core Functionality: Quote generation
                          : Character comparison
                          : Accuracy calculation
                          : Timer implementation
        
    section Performance Tracking (35 minutes)
        Metrics & Analytics: WPM calculation
                           : Error tracking
                           : Progress visualization
                           : Results display
        
    section Polish & Enhancement (45 minutes)
        User Experience: Visual feedback
                       : Sound effects
                       : Animations
                       : Accessibility features
        
    section Advanced Features (1 week)
        Extended Functionality: Difficulty levels
                              : Leaderboards
                              : Custom quotes
                              : Multiplayer options
        
    section Professional Skills (1 month)
        Game Development: Performance optimization
                        : Code architecture
                        : Testing strategies
                        : Deployment patterns
```

### 🛠️ Pelikehityksen työkalupakin yhteenveto

Kun olet suorittanut tämän projektin, hallitset:
- **Tapahtumapohjainen ohjelmointi**: Käyttäjän syötteisiin reagoivat käyttöliittymät
- **Reaaliaikainen palaute**: Välittömät visuaaliset ja suorituskyvyn päivitykset
- **Suorituskyvyn mittaus**: Tarkka ajastus- ja pistelaskujärjestelmä
- **Pelitilan hallinta**: Sovelluksen kulun ja käyttäjäkokemuksen hallinta
- **Interaktiivinen suunnittelu**: Houkuttelevien ja koukuttavien käyttäjäkokemusten luominen
- **Modernit verkkosovellusrajapinnat**: Selaimen ominaisuuksien hyödyntäminen rikkaisiin vuorovaikutuksiin
- **Saavutettavuusmallit**: Kaikille käyttäjille sopiva inklusiivinen suunnittelu

**Todelliset sovellukset**: Nämä taidot soveltuvat suoraan:
- **Verkkosovellukset**: Kaikki interaktiiviset käyttöliittymät tai hallintapaneelit
- **Opetusohjelmistot**: Oppimisalustat ja taitojen arviointityökalut
- **Tuottavuustyökalut**: Tekstieditorit, IDE:t ja yhteistyöohjelmistot
- **Peliteollisuus**: Selaimen pelit ja interaktiivinen viihde
- **Mobiilikehitys**: Kosketuspohjaiset käyttöliittymät ja eleiden käsittely

**Seuraava taso**: Olet valmis tutkimaan edistyneitä pelikehyksiä, reaaliaikaisia moninpelijärjestelmiä tai monimutkaisia interaktiivisia sovelluksia!

## Kiitokset

Kirjoittanut ♥️:lla [Christopher Harrison](http://www.twitter.com/geektrainer)

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.