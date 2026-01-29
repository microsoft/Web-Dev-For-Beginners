# Zábava s funkciami

## Pokyny

V tejto úlohe si precvičíte vytváranie rôznych typov funkcií, aby ste si upevnili koncepty, ktoré ste sa naučili o JavaScriptových funkciách, parametroch, predvolených hodnotách a návratových hodnotách.

Vytvorte JavaScriptový súbor s názvom `functions-practice.js` a implementujte nasledujúce funkcie:

### Časť 1: Základné funkcie
1. **Vytvorte funkciu s názvom `sayHello`**, ktorá neberie žiadne parametre a jednoducho vypíše "Hello!" do konzoly.

2. **Vytvorte funkciu s názvom `introduceYourself`**, ktorá berie parameter `name` a vypíše správu ako "Ahoj, volám sa [name]" do konzoly.

### Časť 2: Funkcie s predvolenými parametrami
3. **Vytvorte funkciu s názvom `greetPerson`**, ktorá berie dva parametre: `name` (povinný) a `greeting` (voliteľný, predvolená hodnota je "Hello"). Funkcia by mala vypísať správu ako "[greeting], [name]!" do konzoly.

### Časť 3: Funkcie, ktoré vracajú hodnoty
4. **Vytvorte funkciu s názvom `addNumbers`**, ktorá berie dva parametre (`num1` a `num2`) a vráti ich súčet.

5. **Vytvorte funkciu s názvom `createFullName`**, ktorá berie parametre `firstName` a `lastName` a vráti celé meno ako jeden reťazec.

### Časť 4: Skombinujte všetko dokopy
6. **Vytvorte funkciu s názvom `calculateTip`**, ktorá berie dva parametre: `billAmount` (povinný) a `tipPercentage` (voliteľný, predvolená hodnota je 15). Funkcia by mala vypočítať a vrátiť výšku sprepitného.

### Časť 5: Otestujte svoje funkcie
Pridajte volania funkcií na otestovanie každej z vašich funkcií a zobrazte výsledky pomocou `console.log()`.

**Príklady volaní testov:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Hodnotiace kritériá

| Kritérium | Vynikajúce | Dostatočné | Potrebuje zlepšenie |
| --------- | ---------- | ---------- | ------------------- |
| **Vytvorenie funkcií** | Všetkých 6 funkcií je správne implementovaných s vhodnou syntaxou a názvami | 4-5 funkcií je správne implementovaných s drobnými syntaktickými chybami | 3 alebo menej funkcií je implementovaných alebo majú vážne syntaktické chyby |
| **Parametre a predvolené hodnoty** | Správne používa povinné parametre, voliteľné parametre a predvolené hodnoty podľa špecifikácie | Parametre sú použité správne, ale môžu mať problémy s predvolenými hodnotami | Nesprávna alebo chýbajúca implementácia parametrov |
| **Návratové hodnoty** | Funkcie, ktoré by mali vracať hodnoty, to robia správne, a funkcie, ktoré by nemali vracať hodnoty, vykonávajú iba akcie | Väčšina návratových hodnôt je správna s drobnými problémami | Významné problémy s návratovými hodnotami |
| **Kvalita kódu** | Čistý, dobre organizovaný kód s významnými názvami premenných a správnym odsadením | Kód funguje, ale mohol by byť čistejší alebo lepšie organizovaný | Kód je ťažko čitateľný alebo zle štruktúrovaný |
| **Testovanie** | Všetky funkcie sú testované vhodnými volaniami funkcií a výsledky sú jasne zobrazené | Väčšina funkcií je testovaná dostatočne | Obmedzené alebo nesprávne testovanie funkcií |

## Bonusové výzvy (voliteľné)

Ak sa chcete ešte viac vyzvať:

1. **Vytvorte verziu funkcie pomocou šípkovej funkcie** jednej z vašich funkcií
2. **Vytvorte funkciu, ktorá prijíma inú funkciu ako parameter** (ako príklady `setTimeout` z lekcie)
3. **Pridajte validáciu vstupu**, aby vaše funkcie správne spracovali neplatné vstupy

---

> 💡 **Tip**: Nezabudnite otvoriť vývojársku konzolu vášho prehliadača (F12), aby ste videli výstup vašich `console.log()` príkazov!

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.