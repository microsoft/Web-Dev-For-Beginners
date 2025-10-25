<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-24T21:47:54+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "sk"
}
-->
# Vytvorenie ukážkovej hry

## Prehľad zadania

Teraz, keď ste zvládli podmienky ukončenia hry a funkciu reštartu vo vašej vesmírnej hre, je čas aplikovať tieto koncepty na úplne nový herný zážitok. Navrhnete a vytvoríte vlastnú hru, ktorá demonštruje rôzne vzory podmienok ukončenia a mechanizmy reštartu.

Toto zadanie vás vyzýva k tomu, aby ste kreatívne premýšľali o dizajne hry a zároveň si precvičili technické zručnosti, ktoré ste sa naučili. Preskúmate rôzne scenáre víťazstva a porážky, implementujete hráčsky progres a vytvoríte pútavé zážitky z reštartu.

## Požiadavky na projekt

### Základné funkcie hry

Vaša hra musí obsahovať nasledujúce základné prvky:

**Rôznorodosť podmienok ukončenia**: Implementujte aspoň dva rôzne spôsoby, ako môže hra skončiť:
- **Víťazstvo na základe bodov**: Hráč dosiahne cieľové skóre alebo nazbiera konkrétne predmety
- **Porážka na základe života**: Hráč stratí všetky dostupné životy alebo body zdravia
- **Splnenie cieľa**: Porazenie všetkých nepriateľov, nazbieranie konkrétnych predmetov alebo dosiahnutie cieľov
- **Na základe času**: Hra končí po stanovenom čase alebo keď odpočítavanie dosiahne nulu

**Funkcia reštartu**: 
- **Vymazanie stavu hry**: Odstránenie všetkých predchádzajúcich herných objektov a resetovanie premenných
- **Reinicializácia systémov**: Začiatok odznova s novými štatistikami hráča, nepriateľmi a cieľmi
- **Používateľsky prívetivé ovládanie**: Poskytnutie jasných pokynov na reštartovanie hry

**Spätná väzba hráčovi**:
- **Správy o víťazstve**: Oslávte úspechy hráča pozitívnou spätnou väzbou
- **Správy o porážke**: Poskytnite povzbudivé správy, ktoré motivujú k opätovnému hraniu
- **Indikátory progresu**: Zobrazte aktuálne skóre, životy alebo stav cieľov

### Nápady na hry a inšpirácia

Vyberte si jeden z týchto konceptov hier alebo si vytvorte vlastný:

#### 1. Konzolová dobrodružná hra
Vytvorte textovú adventúru s bojovými mechanikami:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Kľúčové funkcie na implementáciu:**
- **Boj na ťahy** s rôznymi možnosťami útoku
- **Body zdravia** pre hráča aj nepriateľov
- **Inventárny systém** na zbieranie mincí alebo predmetov
- **Rôzne typy nepriateľov** s rôznou obtiažnosťou
- **Podmienka víťazstva** pri porazení všetkých nepriateľov

#### 2. Zberateľská hra
- **Cieľ**: Zbierajte konkrétne predmety a vyhýbajte sa prekážkam
- **Podmienky ukončenia**: Dosiahnite cieľový počet nazbieraných predmetov alebo stratíte všetky životy
- **Progres**: Predmety sa stávajú ťažšie dostupné, ako hra pokračuje

#### 3. Logická hra
- **Cieľ**: Riešte stále náročnejšie hádanky
- **Podmienky ukončenia**: Dokončite všetky úrovne alebo vám dôjdu ťahy/čas
- **Reštart**: Reset na prvú úroveň s vymazaným progresom

#### 4. Obranná hra
- **Cieľ**: Chráňte svoju základňu pred vlnami nepriateľov
- **Podmienky ukončenia**: Prežite všetky vlny (víťazstvo) alebo základňa je zničená (porážka)
- **Progres**: Vlny nepriateľov sa stávajú ťažšími a početnejšími

## Pokyny na implementáciu

### Začíname

1. **Naplánujte si dizajn hry**:
   - Nakreslite základný herný cyklus
   - Jasne definujte svoje podmienky ukončenia
   - Identifikujte, aké údaje je potrebné resetovať pri reštarte

2. **Nastavte štruktúru projektu**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Vytvorte základný herný cyklus**:
   - Inicializujte stav hry
   - Spracujte vstupy od používateľa
   - Aktualizujte hernú logiku
   - Skontrolujte podmienky ukončenia
   - Zobrazte aktuálny stav

### Technické požiadavky

**Používajte moderný JavaScript**: 
- Používajte `const` a `let` na deklaráciu premenných
- Používajte šípkové funkcie, kde je to vhodné
- Implementujte funkcie ES6+ ako šablónové literály a deštrukturalizáciu

**Architektúra založená na udalostiach**:
- Vytvorte obslužné funkcie udalostí pre interakcie používateľa
- Implementujte zmeny stavu hry prostredníctvom udalostí
- Používajte poslucháče udalostí pre funkciu reštartu

**Praktiky čistého kódu**:
- Píšte funkcie s jednou zodpovednosťou
- Používajte popisné názvy premenných a funkcií
- Pridajte komentáre vysvetľujúce logiku hry a pravidlá
- Organizujte kód do logických sekcií

## Požiadavky na odovzdanie

### Výstupy

1. **Kompletné súbory hry**: Všetky súbory HTML, CSS a JavaScript potrebné na spustenie vašej hry
2. **README.md**: Dokumentácia vysvetľujúca:
   - Ako hrať vašu hru
   - Aké podmienky ukončenia ste implementovali
   - Pokyny na reštartovanie
   - Akékoľvek špeciálne funkcie alebo mechaniky
3. **Komentáre v kóde**: Jasné vysvetlenia vašej hernej logiky a algoritmov

### Kontrolný zoznam testovania

Pred odovzdaním overte, že vaša hra:

- [ ] **Beží bez chýb** v konzole prehliadača
- [ ] **Implementuje viacero podmienok ukončenia** podľa špecifikácie
- [ ] **Správne sa reštartuje** s čistým resetom stavu
- [ ] **Poskytuje jasnú spätnú väzbu** hráčom o stave hry
- [ ] **Používa moderný JavaScript** syntax a najlepšie praktiky
- [ ] **Obsahuje komplexnú dokumentáciu** v README.md

## Hodnotiaca tabuľka

| Kritérium | Vynikajúce (4) | Dobré (3) | Rozvíjajúce sa (2) | Začiatočnícke (1) |
|-----------|----------------|-----------|--------------------|-------------------|
| **Funkčnosť hry** | Kompletná hra s viacerými podmienkami ukončenia, plynulým reštartom a vylešteným herným zážitkom | Kompletná hra so základnými podmienkami ukončenia a funkčným mechanizmom reštartu | Čiastočná hra s niektorými implementovanými podmienkami ukončenia, reštart môže mať drobné problémy | Neúplná hra s obmedzenou funkčnosťou a významnými chybami |
| **Kvalita kódu** | Čistý, dobre organizovaný kód používajúci moderné praktiky JavaScriptu, komplexné komentáre a výborná štruktúra | Dobrá organizácia kódu s modernou syntaxou, primerané komentáre a jasná štruktúra | Základná organizácia kódu s niektorými modernými praktikami, minimálne komentáre | Slabá organizácia kódu, zastaraná syntax, chýbajúce komentáre a štruktúra |
| **Používateľský zážitok** | Intuitívna hrateľnosť s jasnými pokynmi, výbornou spätnou väzbou a pútavým zážitkom z ukončenia/reštartu | Dobrá hrateľnosť s primeranými pokynmi a spätnou väzbou, funkčné ukončenie/reštart | Základná hrateľnosť s minimálnymi pokynmi, obmedzená spätná väzba o stave hry | Mätúca hrateľnosť s nejasnými pokynmi a slabou spätnou väzbou |
| **Technická implementácia** | Preukazuje majstrovstvo v konceptoch vývoja hier, spracovaní udalostí a správe stavu | Ukazuje solídne pochopenie konceptov hier s dobrou implementáciou | Základné pochopenie s prijateľnou implementáciou | Obmedzené pochopenie so slabou implementáciou |
| **Dokumentácia** | Komplexný README s jasnými pokynmi, dobre zdokumentovaný kód a dôkazy o dôkladnom testovaní | Dobrá dokumentácia s jasnými pokynmi a primeranými komentármi v kóde | Základná dokumentácia s minimálnymi pokynmi | Slabá alebo chýbajúca dokumentácia |

### Hodnotiaca škála
- **Vynikajúce (16-20 bodov)**: Prekračuje očakávania s kreatívnymi funkciami a vyleštenou implementáciou
- **Dobré (12-15 bodov)**: Spĺňa všetky požiadavky so solídnym prevedením
- **Rozvíjajúce sa (8-11 bodov)**: Spĺňa väčšinu požiadaviek s drobnými problémami
- **Začiatočnícke (4-7 bodov)**: Spĺňa niektoré požiadavky, ale potrebuje výrazné zlepšenie

## Dodatočné zdroje na učenie

- [MDN Príručka vývoja hier](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Tutoriály vývoja hier](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Dokumentácia Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Princípy dizajnu hier](https://www.gamasutra.com/blogs/)

> 💡 **Tip**: Začnite jednoducho a postupne pridávajte funkcie. Dobre vyleštená jednoduchá hra je lepšia ako komplexná hra s chybami!

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.