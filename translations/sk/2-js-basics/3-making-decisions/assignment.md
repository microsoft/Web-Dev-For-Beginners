<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ffe366b2d1f037b99fbadbe1dc81083d",
  "translation_date": "2025-10-24T21:18:49+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "sk"
}
-->
# Rozhodovanie: Procesor študentských známok

## Ciele učenia

V tejto úlohe si precvičíte koncepty rozhodovania z tejto lekcie tým, že vytvoríte program na spracovanie študentských známok z rôznych hodnotiacich systémov. Použijete príkazy `if...else`, porovnávacie operátory a logické operátory na určenie, ktorí študenti prešli svoje kurzy.

## Výzva

Pracujete pre školu, ktorá sa nedávno zlúčila s inou inštitúciou. Teraz musíte spracovať študentské známky z dvoch úplne odlišných hodnotiacich systémov a určiť, ktorí študenti prešli. Toto je ideálna príležitosť na precvičenie podmieneného logického myslenia!

### Pochopenie hodnotiacich systémov

#### Prvý hodnotiaci systém (Číselný)
- Známky sú uvedené ako čísla od 1 do 5
- **Prechodná známka**: 3 a vyššie (3, 4 alebo 5)
- **Neúspešná známka**: Menej ako 3 (1 alebo 2)

#### Druhý hodnotiaci systém (Písmenové známky)
- Známky sú uvedené písmenami: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Prechodné známky**: `A`, `A-`, `B`, `B-`, `C`, `C-` (všetky uvedené známky sú prechodné)
- **Poznámka**: Tento systém neobsahuje neúspešné známky ako `D` alebo `F`

### Vaša úloha

Na základe nasledujúceho poľa `allStudents`, ktoré reprezentuje všetkých študentov a ich známky, vytvorte nové pole `studentsWhoPass`, ktoré bude obsahovať všetkých študentov, ktorí prešli podľa ich príslušných hodnotiacich systémov.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Postupný prístup

1. **Nastavte cyklus**, ktorý prejde každú známku v poli `allStudents`
2. **Skontrolujte typ známky** (je to číslo alebo reťazec?)
3. **Použite pravidlá príslušného hodnotiaceho systému**:
   - Pre čísla: skontrolujte, či je známka >= 3
   - Pre reťazce: skontrolujte, či je to jedna z platných prechodných písmenových známok
4. **Pridajte prechodné známky** do poľa `studentsWhoPass`

### Užitočné techniky kódu

Použite tieto koncepty JavaScriptu z lekcie:

- **typeof operátor**: `typeof grade === 'number'` na kontrolu, či je to číselná známka
- **Porovnávacie operátory**: `>=` na porovnanie číselných známok
- **Logické operátory**: `||` na kontrolu viacerých podmienok písmenových známok
- **if...else príkazy**: na spracovanie rôznych hodnotiacich systémov
- **Metódy poľa**: `.push()` na pridanie prechodných známok do nového poľa

### Očakávaný výstup

Keď spustíte svoj program, pole `studentsWhoPass` by malo obsahovať: `['A', 'B-', 4, 5]`

**Prečo tieto známky prešli:**
- `'A'` a `'B-'` sú platné písmenové známky (všetky písmenové známky v tomto systéme sú prechodné)
- `4` a `5` sú číselné známky >= 3
- `1` a `2` neprešli, pretože sú číselné známky < 3

## Testovanie vášho riešenia

Otestujte svoj kód s rôznymi scenármi:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Bonusové výzvy

Keď dokončíte základnú úlohu, vyskúšajte tieto rozšírenia:

1. **Pridajte validáciu**: Skontrolujte neplatné známky (ako záporné čísla alebo neplatné písmená)
2. **Počítajte štatistiky**: Vypočítajte, koľko študentov prešlo a koľko neprešlo
3. **Konverzia známok**: Konvertujte všetky známky na jeden číselný systém (A=5, B=4, C=3, atď.)

## Hodnotiace kritériá

| Kritérium | Vynikajúce (4) | Dobré (3) | Rozvíjajúce sa (2) | Začiatočnícke (1) |
|-----------|----------------|-----------|--------------------|-------------------|
| **Funkčnosť** | Program správne identifikuje všetky prechodné známky z oboch systémov | Program funguje s menšími problémami alebo okrajovými prípadmi | Program čiastočne funguje, ale má logické chyby | Program má významné chyby alebo nefunguje |
| **Štruktúra kódu** | Čistý, dobre organizovaný kód s vhodnou logikou if...else | Dobrá štruktúra s primeranými podmienenými príkazmi | Prijateľná štruktúra s niektorými organizačnými problémami | Slabá štruktúra, ťažko sledovateľná logika |
| **Použitie konceptov** | Efektívne využíva porovnávacie operátory, logické operátory a podmienené príkazy | Dobré využitie konceptov lekcie s menšími nedostatkami | Čiastočné využitie konceptov lekcie, ale chýbajú kľúčové prvky | Obmedzené využitie konceptov lekcie |
| **Riešenie problémov** | Jasne ukazuje pochopenie problému a elegantný prístup k riešeniu | Dobrý prístup k riešeniu problémov s pevnou logikou | Primerané riešenie problémov s určitým zmätkom | Nejasný prístup, neukazuje pochopenie |

## Pokyny na odovzdanie

1. **Dôkladne otestujte svoj kód** s poskytnutými príkladmi
2. **Pridajte komentáre**, ktoré vysvetľujú vašu logiku, najmä pre podmienené príkazy
3. **Overte, že výstup** zodpovedá očakávaným výsledkom: `['A', 'B-', 4, 5]`
4. **Zvážte okrajové prípady**, ako prázdne polia alebo neočakávané typy údajov

> 💡 **Tip**: Začnite jednoducho! Najskôr zabezpečte základnú funkčnosť, potom pridajte sofistikovanejšie funkcie. Pamätajte, že cieľom je precvičiť logiku rozhodovania pomocou nástrojov, ktoré ste sa naučili v tejto lekcii.

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.