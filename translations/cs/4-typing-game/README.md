<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efa2ab875b8bb5a7883816506da6b6d2",
  "translation_date": "2026-01-07T03:23:00+00:00",
  "source_file": "4-typing-game/README.md",
  "language_code": "cs"
}
-->
# Programování řízené událostmi - Vytvořte si hru na psaní

```mermaid
journey
    title Váš vývojový proces hry na psaní
    section Základy
      Naplánovat strukturu hry: 3: Student
      Navrhnout uživatelské rozhraní: 4: Student
      Nastavit HTML prvky: 4: Student
    section Funkce
      Zpracovat vstup uživatele: 4: Student
      Sledovat časování: 5: Student
      Vypočítat přesnost: 5: Student
    section Vlastnosti
      Přidat vizuální zpětnou vazbu: 5: Student
      Implementovat herní logiku: 5: Student
      Vylepšit zážitek: 5: Student
```
## Úvod

Toto je něco, co každý vývojář zná, ale zřídka o tom mluví: rychlé psaní je superpřemožitel! 🚀 Přemýšlejte o tom – čím rychleji dostanete své myšlenky z mozku do kódovacího editoru, tím volněji může proudit vaše tvořivost. Je to jako mít přímý kanál mezi svými myšlenkami a obrazovkou.

```mermaid
pie title Herní funkce
    "Zpětná vazba v reálném čase" : 25
    "Sledování výkonu" : 20
    "Interaktivní uživatelské rozhraní" : 20
    "Časovač" : 15
    "Správa citátů" : 10
    "Zobrazení výsledků" : 10
```
Chcete vědět jeden z nejlepších způsobů, jak tuto dovednost vylepšit? Uhádli jste – postavíme hru!

```mermaid
flowchart LR
    A[Hráč zahajuje hru] --> B[Náhodný citát zobrazen]
    B --> C[Hráč zadává znaky]
    C --> D{Je znak správný?}
    D -->|Ano| E[Zvýraznění zeleně]
    D -->|Ne| F[Zvýraznění červeně]
    E --> G[Aktualizace přesnosti]
    F --> G
    G --> H{Je citát dokončen?}
    H -->|Ne| C
    H -->|Ano| I[Vypočítat WPM]
    I --> J[Zobrazit výsledky]
    J --> K[Hrát znovu?]
    K -->|Ano| B
    K -->|Ne| L[Konec hry]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```
> Vytvořme spolu úžasnou hru na psaní!

Jste připraveni využít všechny ty dovednosti z JavaScriptu, HTML a CSS, které jste se naučili? Postavíme hru na psaní, která vás bude vybízet k psaní náhodných citátů od legendárního detektiva [Sherlocka Holmese](https://en.wikipedia.org/wiki/Sherlock_Holmes). Hra bude sledovat, jak rychle a přesně dokážete psát – a věřte mi, je to návykovější, než si myslíte!

```mermaid
mindmap
  root((Vývoj Hry na Psaní))
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

## Co byste měli znát

```mermaid
flowchart TD
    A[Uživatelská akce] --> B{Typ události?}
    B -->|Stisk klávesy| C[Událost z klávesnice]
    B -->|Kliknutí tlačítka| D[Událost myši]
    B -->|Časovač| E[Časová událost]
    
    C --> F[Zkontrolovat znak]
    D --> G[Start/Reset hry]
    E --> H[Aktualizovat časovač]
    
    F --> I{Správně?}
    I -->|Ano| J[Zvýraznit zeleně]
    I -->|Ne| K[Zvýraznit červeně]
    
    J --> L[Aktualizovat skóre]
    K --> L
    L --> M[Zkontrolovat stav hry]
    
    G --> N[Vygenerovat nový citát]
    H --> O[Zobrazit čas]
    
    M --> P{Hra dokončena?}
    P -->|Ano| Q[Zobrazit výsledky]
    P -->|Ne| R[Pokrčit hru]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```
Než začneme, ujistěte se, že se dobře orientujete v těchto pojmech (neobávejte se, pokud potřebujete rychlé osvěžení - všichni jsme tím prošli!):

- Vytváření textových vstupů a tlačítek
- CSS a nastavení stylů pomocí tříd  
- Základy JavaScriptu
  - Vytvoření pole (array)
  - Vytvoření náhodného čísla
  - Získání aktuálního času

Pokud je něco z toho trochu zapomenuté, to vůbec nevadí! Někdy je nejlepší upevnit si znalosti tak, že se pustíte do projektu a postupně to zjistíte.

### 🔄 **Pedagogická kontrola**
**Základní hodnocení**: Před zahájením vývoje si ověřte, že rozumíte:
- ✅ Jak fungují HTML formuláře a vstupní prvky
- ✅ CSS třídy a dynamické styly
- ✅ JavaScript posluchače událostí a jejich zpracování
- ✅ Práce s poli a náhodným výběrem
- ✅ Měření času a výpočty

**Rychlý test pro sebe**: Dokážete vysvětlit, jak tyto koncepty fungují společně v interaktivní hře?
- **Události** se spouštějí, když uživatelé interagují s prvky
- **Zpracovatelé** pracují s událostmi a aktualizují stav hry
- **CSS** poskytuje vizuální odezvu na uživatelské akce
- **Časování** umožňuje měřit výkon a postup hry

```mermaid
quadrantChart
    title Vývoj dovedností v psacích hrách
    x-axis Začátečník --> Expert
    y-axis Statický --> Interaktivní
    quadrant-1 Pokročilé hry
    quadrant-2 Aplikace v reálném čase
    quadrant-3 Základní stránky
    quadrant-4 Interaktivní weby
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```
## Postavme to!

[Vytvoření hry na psaní pomocí programování řízeného událostmi](./typing-game/README.md)

### ⚡ **Co můžete zvládnout za následujících 5 minut**
- [ ] Otevřete konzoli prohlížeče a zkoušejte poslouchat klávesové události pomocí `addEventListener`
- [ ] Vytvořte jednoduchou HTML stránku s textovým polem a otestujte detekci psaní
- [ ] Procvičte manipulaci s řetězci porovnáváním psaného textu s cílovým textem
- [ ] Experimentujte s `setTimeout` a pochopte časovací funkce

### 🎯 **Co můžete zvládnout za tuto hodinu**
- [ ] Dokončit kvíz po lekci a pochopit programování řízené událostmi
- [ ] Vytvořit základní verzi hry na psaní s ověřováním slov
- [ ] Přidat vizuální odezvu pro správné a chybné psaní
- [ ] Implementovat jednoduchý bodovací systém na základě rychlosti a přesnosti
- [ ] Na styl hry použít CSS, aby byla vizuálně přitažlivá

### 📅 **Týdenní vývoj hry**
- [ ] Dokončit kompletní hru se všemi funkcemi a vylepšeními
- [ ] Přidat úrovně obtížnosti s různou složitostí slov
- [ ] Implementovat sledování statistik uživatele (WPM, přesnost v čase)
- [ ] Vytvořit zvukové efekty a animace pro lepší uživatelský zážitek
- [ ] Umožnit mobilní responzivitu hry pro dotyková zařízení
- [ ] Sdílet hru online a sbírat zpětnou vazbu od uživatelů

### 🌟 **Měsíční interaktivní vývoj**
- [ ] Vyvinout více her zkoumajících různé vzory interakce
- [ ] Naučit se o herních cyklech, správě stavu a optimalizaci výkonu
- [ ] Přispívat do open source projektů na vývoj her
- [ ] Ovládnout pokročilé časové koncepty a plynulé animace
- [ ] Vytvořit portfolio s různými interaktivními aplikacemi
- [ ] Mentorovat ostatní zájemce o vývoj her a uživatelskou interakci

## 🎯 Časový plán zvládnutí hry na psaní

```mermaid
timeline
    title Postup učení vývoje her
    
    section Nastavení (10 minut)
        Projektová struktura: Základy HTML
                         : Nastavení stylování CSS
                         : Vytvoření JavaScript souboru
        
    section Uživatelské rozhraní (20 minut)
        Interaktivní prvky: Vstupní pole
                            : Ovládací tlačítka
                            : Zobrazovací oblasti
                            : Responzivní rozvržení
        
    section Zpracování událostí (25 minut)
        Uživatelská interakce: Klávesové události
                        : Události myši
                        : Zpětná vazba v reálném čase
                        : Správa stavu
        
    section Herní logika (30 minut)
        Základní funkčnost: Generování citátů
                          : Porovnání znaků
                          : Výpočet přesnosti
                          : Implementace časovače
        
    section Sledování výkonu (35 minut)
        Metriky & Analytika: Výpočet WPM
                           : Sledování chyb
                           : Vizualizace pokroku
                           : Zobrazení výsledků
        
    section Dokončení & Vylepšení (45 minut)
        Uživatelská zkušenost: Vizuální zpětná vazba
                       : Zvukové efekty
                       : Animace
                       : Funkce přístupnosti
        
    section Pokročilé funkce (1 týden)
        Rozšířená funkčnost: Úrovně obtížnosti
                              : Žebříčky
                              : Vlastní citáty
                              : Možnosti více hráčů
        
    section Profesionální dovednosti (1 měsíc)
        Vývoj her: Optimalizace výkonu
                        : Architektura kódu
                        : Testovací strategie
                        : Vzor nasazení
```
### 🛠️ Souhrn vašich nástrojů pro vývoj hry

Po dokončení tohoto projektu ovládnete:
- **Programování řízené událostmi**: Reagující uživatelská rozhraní reagující na vstup
- **Okamžitá zpětná vazba**: Okamžité vizuální a výkonnostní aktualizace
- **Měření výkonu**: Přesné systémy měření času a bodování
- **Správa stavu hry**: Kontrola toku aplikace a uživatelského zážitku
- **Interaktivní design**: Vytváření poutavých a návykových zážitků
- **Moderní webová API**: Využití schopností prohlížeče pro bohaté interakce
- **Přístupnost**: Inkluzivní design pro všechny uživatele

**Praktické využití**: Tyto dovednosti se přímo používají v:
- **Webových aplikacích**: Jakékoli interaktivní rozhraní nebo dashboard
- **Vzdělávacím softwaru**: Výukové platformy a nástroje pro hodnocení dovedností
- **Produktivních nástrojích**: Textové editory, IDE a software pro spolupráci
- **Herním průmyslu**: Prohlížečové hry a interaktivní zábava
- **Mobilním vývoji**: Rozhraní na dotyková zařízení a zpracování gest

**Další úroveň**: Jste připraveni prozkoumat pokročilé herní frameworky, realtime multiplayer systémy nebo složité interaktivní aplikace!

## Poděkování

Napsal s ♥️ [Christopher Harrison](http://www.twitter.com/geektrainer)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Prohlášení o vyloučení odpovědnosti**:  
Tento dokument byl přeložen pomocí AI překladatelské služby [Co-op Translator](https://github.com/Azure/co-op-translator). Přestože usilujeme o přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho mateřském jazyce by měl být považován za autoritativní zdroj. Pro zásadní informace se doporučuje profesionální lidský překlad. Nezodpovídáme za jakékoli nedorozumění nebo mylné výklady vyplývající z použití tohoto překladu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->