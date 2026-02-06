# Pole a cykly - zadanie

## Pokyny

Dokončite nasledujúce cvičenia, aby ste si precvičili prácu s poľami a cyklami. Každé cvičenie nadväzuje na koncepty z lekcie a povzbudzuje vás k použitiu rôznych typov cyklov a metód pre pole.

### Cvičenie 1: Generátor číselného vzoru
Vytvorte program, ktorý vypíše každé tretie číslo medzi 1-20 a zobrazí ho v konzole.

**Požiadavky:**
- Použite cyklus `for` s vlastným inkrementom
- Zobrazte čísla v užívateľsky prívetivom formáte
- Pridajte popisné komentáre vysvetľujúce vašu logiku

**Očakávaný výstup:**
```
3, 6, 9, 12, 15, 18
```

> **Tip:** Upraviť výraz iterácie vo vašom cykle `for`, aby preskakoval čísla.

### Cvičenie 2: Analýza poľa
Vytvorte pole s minimálne 8 rôznymi číslami a napíšte funkcie na analýzu údajov.

**Požiadavky:**
- Vytvorte pole nazvané `numbers` s minimálne 8 hodnotami
- Napíšte funkciu `findMaximum()`, ktorá vráti najvyššie číslo
- Napíšte funkciu `findMinimum()`, ktorá vráti najnižšie číslo  
- Napíšte funkciu `calculateSum()`, ktorá vráti súčet všetkých čísel
- Otestujte každú funkciu a zobrazte výsledky

**Bonusová výzva:** Vytvorte funkciu, ktorá nájde druhé najvyššie číslo v poli.

### Cvičenie 3: Spracovanie poľa reťazcov
Vytvorte pole vašich obľúbených filmov/knih/piesní a precvičte si rôzne typy cyklov.

**Požiadavky:**
- Vytvorte pole s minimálne 5 reťazcovými hodnotami
- Použite tradičný cyklus `for` na zobrazenie položiek s číslami (1. Názov položky)
- Použite cyklus `for...of` na zobrazenie položiek vo veľkých písmenách
- Použite metódu `forEach()` na spočítanie a zobrazenie celkového počtu znakov

**Príklad výstupu:**
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```

### Cvičenie 4: Filtrovanie údajov (pokročilé)
Vytvorte program, ktorý spracováva pole objektov reprezentujúcich študentov.

**Požiadavky:**
- Vytvorte pole minimálne 5 objektov študentov s vlastnosťami: `name`, `age`, `grade`
- Použite cykly na nájdenie študentov, ktorí majú 18 rokov alebo viac
- Vypočítajte priemernú známku všetkých študentov
- Vytvorte nové pole obsahujúce iba študentov so známkami nad 85

**Príklad štruktúry:**
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Add more students...
];
```

## Testovanie vášho kódu

Testujte svoje programy:
1. Spustením každého cvičenia v konzole vášho prehliadača
2. Overením, že výstupy zodpovedajú očakávaným výsledkom
3. Testovaním s rôznymi dátovými sadami
4. Kontrolou, či váš kód zvláda hraničné prípady (prázdne polia, jednotlivé prvky)

## Pokyny na odovzdanie

Zahrňte do svojej odovzdávky:
- Dobre komentovaný JavaScript kód pre každé cvičenie
- Screenshoty alebo textový výstup zobrazujúci spustenie vašich programov
- Stručné vysvetlenie, aký typ cyklu ste si vybrali pre každú úlohu a prečo

## Hodnotiace kritériá

| Kritérium | Vynikajúce (3 body) | Dostatočné (2 body) | Potrebuje zlepšenie (1 bod) |
| --------- | ------------------- | ------------------- | --------------------------- |
| **Funkčnosť** | Všetky cvičenia správne dokončené vrátane bonusových výziev | Všetky požadované cvičenia fungujú správne | Niektoré cvičenia sú neúplné alebo obsahujú chyby |
| **Kvalita kódu** | Čistý, dobre organizovaný kód s popisnými názvami premenných | Kód funguje, ale mohol by byť čistejší | Kód je neprehľadný alebo ťažko pochopiteľný |
| **Komentáre** | Komplexné komentáre vysvetľujúce logiku a rozhodnutia | Základné komentáre sú prítomné | Minimálne alebo žiadne komentáre |
| **Použitie cyklov** | Demonštruje pochopenie rôznych typov cyklov vhodne | Používa cykly správne, ale obmedzená rozmanitosť | Nesprávne alebo neefektívne použitie cyklov |
| **Testovanie** | Dôkazy o dôkladnom testovaní s viacerými scenármi | Základné testovanie preukázané | Málo dôkazov o testovaní |

## Otázky na zamyslenie

Po dokončení cvičení zvážte:
1. Ktorý typ cyklu sa vám zdal najprirodzenejší na použitie a prečo?
2. Aké výzvy ste stretli pri práci s poľami?
3. Ako by sa tieto zručnosti mohli uplatniť v reálnych projektoch webového vývoja?
4. Čo by ste urobili inak, ak by ste museli optimalizovať svoj kód pre výkon?

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.