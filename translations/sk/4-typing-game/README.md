# Event-Driven Programming - Vytvorenie hry na písanie

```mermaid
journey
    title Vývojová cesta tvojej hry na písanie
    section Základy
      Naplánuj štruktúru hry: 3: Student
      Navrhni používateľské rozhranie: 4: Student
      Nastav HTML prvky: 4: Student
    section Funkcionalita
      Spracuj vstup používateľa: 4: Student
      Sleduj časovanie: 5: Student
      Vypočítaj presnosť: 5: Student
    section Funkcie
      Pridaj vizuálnu spätnú väzbu: 5: Student
      Implementuj hernú logiku: 5: Student
      Vylepši zážitok: 5: Student
```
## Úvod

Tu je niečo, čo každý vývojár pozná, ale zriedka o tom hovorí: rýchle písanie je superschopnosť! 🚀 Premyslite si to - čím rýchlejšie dokážete dostať svoje myšlienky z hlavy do kódu, tým viac môže plynúť vaša kreativita. Je to ako mať priamy kanál medzi vašimi myšlienkami a obrazovkou.

```mermaid
pie title Herné funkcie
    "Reálne spätná väzba" : 25
    "Sledovanie výkonu" : 20
    "Interaktívne používateľské rozhranie" : 20
    "Systém časovača" : 15
    "Správa citátov" : 10
    "Zobrazenie výsledkov" : 10
```
Chcete vedieť jeden z najlepších spôsobov, ako zlepšiť túto zručnosť? Uhádli ste to - postavíme hru!

```mermaid
flowchart LR
    A[Hráč začne hru] --> B[Náhodný citát zobrazený]
    B --> C[Hráč zadáva znaky]
    C --> D{Znak správny?}
    D -->|Áno| E[Zelené zvýraznenie]
    D -->|Nie| F[Červené zvýraznenie]
    E --> G[Aktualizovať presnosť]
    F --> G
    G --> H{Citát dokončený?}
    H -->|Nie| C
    H -->|Áno| I[Vypočítať počet slov za minútu]
    I --> J[Zobraziť výsledky]
    J --> K[Zahrať znova?]
    K -->|Áno| B
    K -->|Nie| L[Koniec hry]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> Poďme spolu vytvoriť skvelú hru na písanie!

Pripraveni využiť všetky tie zručnosti z JavaScriptu, HTML a CSS, ktoré ste sa naučili? Postavíme hru na písanie, ktorá vás vyzve náhodnými citátmi od legendárneho detektíva [Sherlocka Holmesa](https://en.wikipedia.org/wiki/Sherlock_Holmes). Hra bude sledovať, ako rýchlo a presne dokážete písať – a verte mi, je to viac návykové, než si myslíte!

```mermaid
mindmap
  root((Vývoj hry na písanie))
    User Interface
      Vstupné prvky
      Vizuálna spätná väzba
      Responzívny dizajn
      Prístupnosť
    Game Logic
      Výber citátu
      Správa časovača
      Sledovanie presnosti
      Výpočet skóre
    Event Handling
      Klávesnicový vstup
      Kliknutia na tlačidlá
      Aktualizácie v reálnom čase
      Zmeny herného stavu
    Performance Metrics
      Slová za minútu
      Presnosť znakov
      Sledovanie chýb
      Zobrazenie pokroku
    User Experience
      Okamžitá spätná väzba
      Jasné pokyny
      Pútavý obsah
      Systém dosiahnutí
```
![demo](../../../4-typing-game/images/demo.gif)

## Čo by ste mali ovládať

```mermaid
flowchart TD
    A[Akcia používateľa] --> B{Typ udalosti?}
    B -->|Stlačenie klávesu| C[Udalosť klávesnice]
    B -->|Kliknutie tlačidla| D[Udalosť myši]
    B -->|Časovač| E[Udalosť času]
    
    C --> F[Skontrolovať znak]
    D --> G[Spustiť/Resetovať hru]
    E --> H[Aktualizovať časovač]
    
    F --> I{Správne?}
    I -->|Áno| J[Zvýrazniť zelenou]
    I -->|Nie| K[Zvýrazniť červenou]
    
    J --> L[Aktualizovať skóre]
    K --> L
    L --> M[Skontrolovať stav hry]
    
    G --> N[Vygenerovať nový citát]
    H --> O[Zobraziť čas]
    
    M --> P{Hra dokončená?}
    P -->|Áno| Q[Zobraziť výsledky]
    P -->|Nie| R[Pokračovať v hre]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```
Predtým, než sa pustíme do práce, uistite sa, že ovládate tieto koncepty (neobávajte sa, ak potrebujete rýchly refresh – všetci sme to už zažili!):

- Vytváranie textových vstupov a tlačidiel
- CSS a nastavovanie štýlov pomocou tried  
- Základy JavaScriptu
  - Vytváranie polí
  - Generovanie náhodného čísla
  - Získanie aktuálneho času

Ak niečo z toho cítite trochu zakríknuto, to je úplne v poriadku! Niekedy je najlepším spôsobom, ako si vedomosti upevniť, skočiť do projektu a zisťovať veci za pochodu.

### 🔄 **Pedagogická kontrola**
**Základné hodnotenie**: Pred začiatkom vývoja sa uistite, že rozumiete:
- ✅ Ako fungujú HTML formuláre a vstupné prvky
- ✅ Triedy CSS a dynamické štýlovanie
- ✅ JavaScript event listenery a handlery
- ✅ Manipulácia s poľami a náhodný výber
- ✅ Meranie času a výpočty

**Rýchly self-test**: Dokážete vysvetliť, ako tieto koncepty spolupracujú v interaktívnej hre?
- **Udalosti** sa spúšťajú, keď používatelia interagujú s prvkami
- **Handlery** spracovávajú tieto udalosti a aktualizujú stav hry
- **CSS** poskytuje vizuálnu spätnú väzbu pre akcie používateľa
- **Časovanie** umožňuje meranie výkonu a postup hry

```mermaid
quadrantChart
    title Vývoj zručností v hre na písanie
    x-axis Začiatočník --> Expert
    y-axis Statické --> Interaktívne
    quadrant-1 Pokročilé hry
    quadrant-2 Aplikácie v reálnom čase
    quadrant-3 Základné stránky
    quadrant-4 Interaktívne stránky
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```
## Poďme na to!

[Vytváranie hry na písanie pomocou event-driven programovania](./typing-game/README.md)

### ⚡ **Čo môžete urobiť počas nasledujúcich 5 minút**
- [ ] Otvorte konzolu vo vašom prehliadači a skúste počúvať na klávesové udalosti pomocou `addEventListener`
- [ ] Vytvorte jednoduchú HTML stránku s textovým poľom a otestujte detekciu písania
- [ ] Precvičujte manipuláciu s reťazcami porovnaním napísaného textu s cieľovým textom
- [ ] Experimentujte s `setTimeout`, aby ste pochopili časovacie funkcie

### 🎯 **Čo môžete dosiahnuť za hodinu**
- [ ] Dokončite kvíz po lekcii a pochopte event-driven programovanie
- [ ] Vytvorte základnú verziu hry na písanie s overením slov
- [ ] Pridajte vizuálnu spätnú väzbu pre správne a nesprávne písanie
- [ ] Implementujte jednoduchý systém bodovania na základe rýchlosti a presnosti
- [ ] Štylizujte svoju hru pomocou CSS, aby bola vizuálne príťažlivá

### 📅 **Váš týždeň vývoja hry**
- [ ] Dokončite kompletnú hru na písanie so všetkými funkciami a vylepšeniami
- [ ] Pridajte úrovne obtiažnosti s rôznou komplexnosťou slov
- [ ] Implementujte sledovanie štatistík používateľa (WPM, presnosť v čase)
- [ ] Vytvorte zvukové efekty a animácie pre lepší zážitok používateľa
- [ ] Urobte hru responzívnou pre mobilné zariadenia s dotykovým ovládaním
- [ ] Zdieľajte svoju hru online a získajte spätnú väzbu od používateľov

### 🌟 **Váš mesačný interaktívny vývoj**
- [ ] Vytvorte viac hier skúmajúcich rôzne vzory interakcií
- [ ] Naučte sa o herných slučkách, správe stavu a optimalizácii výkonu
- [ ] Prispievajte do open source projektov zameraných na vývoj hier
- [ ] Ovládnite pokročilé koncepty časovania a plynulé animácie
- [ ] Vytvorte portfólio s rôznymi interaktívnymi aplikáciami
- [ ] Mentorujte iných, ktorí majú záujem o vývoj hier a používateľskú interakciu

## 🎯 Časová os vašej majstrovskej hry na písanie

```mermaid
timeline
    title Pokrok v učení vývoja hier
    
    section Nastavenie (10 minút)
        Štruktúra projektu: Základ HTML
                            : Nastavenie štýlov CSS
                            : Vytvorenie súboru JavaScript
        
    section Používateľské rozhranie (20 minút)
        Interaktívne prvky: Vstupné polia
                           : Ovládacie tlačidlá
                           : Zobrazovacie oblasti
                           : Responzívne rozloženie
        
    section Spracovanie udalostí (25 minút)
        Interakcia používateľa: Klávesové udalosti
                              : Myšové udalosti
                              : Spätná väzba v reálnom čase
                              : Správa stavu
        
    section Herná logika (30 minút)
        Základná funkčnosť: Generovanie citátov
                           : Porovanie znakov
                           : Výpočet presnosti
                           : Implementácia časovača
        
    section Sledovanie výkonu (35 minút)
        Metriky a analýzy: Výpočet WPM
                          : Sledovanie chýb
                          : Vizualizácia pokroku
                          : Zobrazovanie výsledkov
        
    section Vylepšenie a dolaďovanie (45 minút)
        Používateľský zážitok: Vizuálna spätná väzba
                              : Zvukové efekty
                              : Animácie
                              : Funkcie prístupnosti
        
    section Pokročilé funkcie (1 týždeň)
        Rozšírená funkčnosť: Úrovne obtiažnosti
                             : Rebríčky
                             : Vlastné citáty
                             : Možnosti multiplayera
        
    section Profesionálne zručnosti (1 mesiac)
        Vývoj hier: Optimalizácia výkonu
                    : Architektúra kódu
                    : Testovacie stratégie
                    : Vzory nasadenia
```
### 🛠️ Súhrn vašich nástrojov na vývoj hry

Po dokončení tohto projektu budete ovládať:
- **Event-Driven Programovanie**: Reaktívne používateľské rozhrania reagujúce na vstupy
- **Spätná väzba v reálnom čase**: Okamžité vizuálne a výkonové aktualizácie
- **Meranie výkonu**: Presné systémy časovania a bodovania
- **Správa stavu hry**: Riadenie toku aplikácie a používateľského zážitku
- **Interaktívny dizajn**: Tvorba pútavých, návykových používateľských zážitkov
- **Moderné webové API**: Využívanie schopností prehliadača pre bohaté interakcie
- **Vzorové prístupy k prístupnosti**: Inkluzívny dizajn pre všetkých používateľov

**Aplikácie v reálnom svete**: Tieto zručnosti sa priamo uplatnia v:
- **Webové aplikácie**: Akékoľvek interaktívne rozhrania alebo dashboardy
- **Vzdelávací softvér**: Vzdelávacie platformy a nástroje pre hodnotenie zručností
- **Produktívne nástroje**: Textové editory, IDE a kolaboračný softvér
- **Herný priemysel**: Browserové hry a interaktívna zábava
- **Mobilný vývoj**: Rozhrania ovládané dotykom a spracovanie gest

**Ďalší level**: Ste pripravení preskúmať pokročilé herné frameworky, real-time multiplayer systémy alebo komplexné interaktívne aplikácie!

## Autorské práva

Napísané s ♥️ od [Christophera Harrisona](http://www.twitter.com/geektrainer)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Upozornenie**:  
Tento dokument bol preložený pomocou AI prekladateľskej služby [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď usilovne dbáme o presnosť, vezmite prosím na vedomie, že automatické preklady môžu obsahovať chyby alebo nepresnosti. Originálny dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nepochopenia alebo nesprávne interpretácie vzniknuté použitím tohto prekladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->