<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-24T21:16:29+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "sk"
}
-->
# Základy JavaScriptu: Dátové typy

![Základy JavaScriptu - Dátové typy](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.sk.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

Dátové typy sú jedným zo základných konceptov v JavaScripte, s ktorými sa stretnete v každom programe, ktorý napíšete. Predstavte si dátové typy ako systém usporiadania, ktorý používali starovekí knihovníci v Alexandrii – mali špecifické miesta pre zvitky obsahujúce poéziu, matematiku a historické záznamy. JavaScript organizuje informácie podobným spôsobom, s rôznymi kategóriami pre rôzne druhy údajov.

V tejto lekcii preskúmame základné dátové typy, ktoré sú nevyhnutné pre fungovanie JavaScriptu. Naučíte sa pracovať s číslami, textom, hodnotami pravda/nepravda a pochopíte, prečo je výber správneho typu kľúčový pre vaše programy. Tieto koncepty sa môžu na začiatku zdať abstraktné, ale s praxou sa stanú samozrejmosťou.

Porozumenie dátovým typom vám pomôže lepšie pochopiť všetko ostatné v JavaScripte. Rovnako ako architekti potrebujú pochopiť rôzne stavebné materiály predtým, než postavia katedrálu, tieto základy budú podporovať všetko, čo budete v budúcnosti vytvárať.

## Kvíz pred prednáškou
[Kvíz pred prednáškou](https://ff-quizzes.netlify.app/web/)

Táto lekcia pokrýva základy JavaScriptu, jazyka, ktorý poskytuje interaktivitu na webe.

> Túto lekciu si môžete prejsť na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Premenné](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Premenné v JavaScripte")

[![Dátové typy v JavaScripte](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Dátové typy v JavaScripte")

> 🎥 Kliknite na obrázky vyššie pre videá o premenných a dátových typoch

Začnime s premennými a dátovými typmi, ktoré ich napĺňajú!

## Premenné

Premenné sú základné stavebné bloky v programovaní. Rovnako ako označené nádoby, ktoré stredovekí alchymisti používali na uchovávanie rôznych látok, premenné vám umožňujú ukladať informácie a dať im popisný názov, aby ste ich mohli neskôr použiť. Potrebujete si zapamätať vek niekoho? Uložte ho do premennej nazvanej `age`. Chcete sledovať meno používateľa? Uchovajte ho v premennej nazvanej `userName`.

Zameriame sa na moderný prístup k vytváraniu premenných v JavaScripte. Techniky, ktoré sa tu naučíte, predstavujú roky vývoja jazyka a najlepšie praktiky vyvinuté programátorskou komunitou.

Vytvorenie a **deklarácia** premennej má nasledujúcu syntax **[kľúčové slovo] [názov]**. Skladá sa z dvoch častí:

- **Kľúčové slovo**. Použite `let` pre premenné, ktoré sa môžu meniť, alebo `const` pre hodnoty, ktoré zostávajú rovnaké.
- **Názov premennej**, je to popisný názov, ktorý si sami vyberiete.

✅ Kľúčové slovo `let` bolo zavedené v ES6 a poskytuje vašej premennej tzv. _blokový rozsah_. Odporúča sa používať `let` alebo `const` namiesto staršieho kľúčového slova `var`. Blokové rozsahy si podrobnejšie vysvetlíme v ďalších častiach.

### Úloha - práca s premennými

1. **Deklarujte premennú**. Začnime vytvorením našej prvej premennej:

    ```javascript
    let myVariable;
    ```

   **Čo to dosiahne:**
   - Toto hovorí JavaScriptu, aby vytvoril úložné miesto nazvané `myVariable`
   - JavaScript alokuje miesto v pamäti pre túto premennú
   - Premenná momentálne nemá žiadnu hodnotu (undefined)

2. **Priraďte hodnotu**. Teraz vložme niečo do našej premennej:

    ```javascript
    myVariable = 123;
    ```

   **Ako funguje priradenie:**
   - Operátor `=` priraďuje hodnotu 123 našej premennej
   - Premenná teraz obsahuje túto hodnotu namiesto toho, aby bola undefined
   - Túto hodnotu môžete používať v celom kóde pomocou `myVariable`

   > Poznámka: použitie `=` v tejto lekcii znamená, že používame "priraďovací operátor", ktorý slúži na nastavenie hodnoty premennej. Neoznačuje rovnosť.

3. **Urobte to šikovne**. Vlastne, spojme tieto dva kroky:

    ```javascript
    let myVariable = 123;
    ```

    **Tento prístup je efektívnejší:**
    - Deklarujete premennú a priraďujete hodnotu v jednom vyjadrení
    - Toto je štandardná prax medzi vývojármi
    - Skracuje dĺžku kódu a zároveň zachováva jeho prehľadnosť

4. **Zmeňte názor**. Čo ak chceme uložiť iné číslo?

   ```javascript
   myVariable = 321;
   ```

   **Pochopenie prepisovania hodnoty:**
   - Premenná teraz obsahuje 321 namiesto 123
   - Predchádzajúca hodnota je nahradená – premenné uchovávajú iba jednu hodnotu naraz
   - Táto zmena je kľúčovou vlastnosťou premenných deklarovaných pomocou `let`

   ✅ Vyskúšajte to! Môžete písať JavaScript priamo vo vašom prehliadači. Otvorte okno prehliadača a prejdite na Nástroje pre vývojárov. V konzole nájdete výzvu; napíšte `let myVariable = 123`, stlačte Enter, potom napíšte `myVariable`. Čo sa stane? Poznámka: o týchto konceptoch sa dozviete viac v nasledujúcich lekciách.

## Konštanty

Niekedy potrebujete uložiť informácie, ktoré by sa počas vykonávania programu nikdy nemali meniť. Predstavte si konštanty ako matematické princípy, ktoré Euclid stanovil v starovekom Grécku – raz dokázané a zdokumentované, zostali pevné pre všetky budúce odkazy.

Konštanty fungujú podobne ako premenné, ale s dôležitým obmedzením: akonáhle im priradíte hodnotu, nemôžete ju zmeniť. Táto nemennosť pomáha predchádzať náhodným zmenám kritických hodnôt vo vašom programe.

Deklarácia a inicializácia konštanty nasleduje rovnaké koncepty ako premenná, s výnimkou kľúčového slova `const`. Konštanty sa zvyčajne deklarujú veľkými písmenami.

```javascript
const MY_VARIABLE = 123;
```

**Čo tento kód robí:**
- **Vytvára** konštantu nazvanú `MY_VARIABLE` s hodnotou 123
- **Používa** konvenciu veľkých písmen pre konštanty
- **Zabraňuje** akýmkoľvek budúcim zmenám tejto hodnoty

Konštanty majú dve hlavné pravidlá:

- **Musíte im hneď priradiť hodnotu** – prázdne konštanty nie sú povolené!
- **Hodnotu nemôžete nikdy zmeniť** – JavaScript vyhodí chybu, ak sa o to pokúsite. Pozrime sa, čo tým myslíme:

   **Jednoduchá hodnota** - Nasledujúce NIE je povolené:
   
      ```javascript
      const PI = 3;
      PI = 4; // nie je povolené
      ```

   **Čo si treba zapamätať:**
   - **Pokusy** o prepisovanie konštanty spôsobia chybu
   - **Chráni** dôležité hodnoty pred náhodnými zmenami
   - **Zabezpečuje**, že hodnota zostane konzistentná počas celého programu
 
   **Referencie na objekt sú chránené** - Nasledujúce NIE je povolené:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // nie je povolené
      ```

   **Pochopenie týchto konceptov:**
   - **Zabraňuje** nahradeniu celého objektu novým
   - **Chráni** referenciu na pôvodný objekt
   - **Zachováva** identitu objektu v pamäti

    **Hodnota objektu nie je chránená** - Nasledujúce JE povolené:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // povolené
      ```

      **Rozbor toho, čo sa tu deje:**
      - **Mení** hodnotu vlastnosti vo vnútri objektu
      - **Zachováva** rovnakú referenciu na objekt
      - **Ukazuje**, že obsah objektu sa môže meniť, zatiaľ čo referencia zostáva konštantná

   > Poznámka, `const` znamená, že referencia je chránená pred prepisovaním. Hodnota však nie je _nemenná_ a môže sa meniť, najmä ak ide o zložitejšiu štruktúru, ako je objekt.

## Dátové typy

JavaScript organizuje informácie do rôznych kategórií nazývaných dátové typy. Tento koncept odráža spôsob, akým starovekí učenci kategorizovali vedomosti – Aristoteles rozlišoval medzi rôznymi typmi uvažovania, pričom vedel, že logické princípy nemožno aplikovať rovnomerne na poéziu, matematiku a prírodnú filozofiu.

Dátové typy sú dôležité, pretože rôzne operácie fungujú s rôznymi druhmi informácií. Rovnako ako nemôžete vykonávať aritmetiku na mene osoby alebo abecedne zoradiť matematickú rovnicu, JavaScript vyžaduje vhodný dátový typ pre každú operáciu. Pochopenie tohto faktu zabraňuje chybám a robí váš kód spoľahlivejším.

Premenné môžu uchovávať mnoho rôznych typov hodnôt, ako sú čísla a text. Tieto rôzne typy hodnôt sú známe ako **dátové typy**. Dátové typy sú dôležitou súčasťou vývoja softvéru, pretože pomáhajú vývojárom rozhodovať o tom, ako by mal byť kód napísaný a ako by mal softvér fungovať. Okrem toho majú niektoré dátové typy jedinečné vlastnosti, ktoré pomáhajú transformovať alebo extrahovať ďalšie informácie z hodnoty.

✅ Dátové typy sa tiež označujú ako primitívne dátové typy JavaScriptu, pretože sú najnižšou úrovňou dátových typov, ktoré jazyk poskytuje. Existuje 7 primitívnych dátových typov: string, number, bigint, boolean, undefined, null a symbol. Na chvíľu si predstavte, čo každý z týchto primitívov môže predstavovať. Čo je to `zebra`? A čo `0`? `true`?

### Čísla

Čísla sú najjednoduchším dátovým typom v JavaScripte. Či už pracujete s celými číslami ako 42, desatinnými číslami ako 3.14 alebo zápornými číslami ako -5, JavaScript ich spracováva jednotne.

Pamätáte si našu premennú z predchádzajúceho? Tých 123, ktoré sme uložili, bolo vlastne dátový typ číslo:

```javascript
let myVariable = 123;
```

**Kľúčové vlastnosti:**
- JavaScript automaticky rozpoznáva číselné hodnoty
- Môžete vykonávať matematické operácie s týmito premennými
- Nie je potrebné explicitne deklarovať typ

Premenné môžu uchovávať všetky typy čísel, vrátane desatinných alebo záporných čísel. Čísla môžu byť tiež použité s aritmetickými operátormi, ktoré sú pokryté v [nasledujúcej sekcii](../../../../2-js-basics/1-data-types).

### Aritmetické operátory

Aritmetické operátory vám umožňujú vykonávať matematické výpočty v JavaScripte. Tieto operátory fungujú tak, ako by ste očakávali od tradičnej matematiky: plus pre sčítanie, mínus pre odčítanie a podobne.

Existuje niekoľko typov operátorov, ktoré môžete použiť pri vykonávaní aritmetických funkcií, a niektoré sú uvedené tu:

| Symbol | Popis                                                                    | Príklad                          |
| ------ | ------------------------------------------------------------------------ | -------------------------------- |
| `+`    | **Sčítanie**: Vypočíta súčet dvoch čísel                                 | `1 + 2 //očakávaný výsledok je 3`   |
| `-`    | **Odčítanie**: Vypočíta rozdiel dvoch čísel                              | `1 - 2 //očakávaný výsledok je -1`  |
| `*`    | **Násobenie**: Vypočíta súčin dvoch čísel                                | `1 * 2 //očakávaný výsledok je 2`   |
| `/`    | **Delenie**: Vypočíta podiel dvoch čísel                                 | `1 / 2 //očakávaný výsledok je 0.5` |
| `%`    | **Zvyšok**: Vypočíta zvyšok z delenia dvoch čísel                        | `1 % 2 //očakávaný výsledok je 1`   |

✅ Vyskúšajte to! Skúste vykonať aritmetickú operáciu v konzole vášho prehliadača. Prekvapili vás výsledky?

### Reťazce

V JavaScripte sú textové údaje reprezentované ako reťazce. Termín "reťazec" pochádza z konceptu znakov spojených dohromady v sekvencii, podobne ako pisári v stredovekých kláštoroch spájali písmená na tvorbu slov a viet vo svojich rukopisoch.

Reťazce sú základom webového vývoja. Každý kúsok textu zobrazený na webovej stránke – používateľské mená, označenia tlačidiel, chybové hlásenia, obsah – je spracovaný ako textové údaje. Porozumenie reťazcom je nevyhnutné pre vytváranie funkčných používateľských rozhraní.

Reťazce sú sady znakov, ktoré sa nachádzajú medzi jednoduchými alebo dvojitými úvodzovkami.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Pochopenie týchto konceptov:**
- **Používa** buď jednoduché úvodzovky `'` alebo dvojité úvodzovky `"` na definovanie reťazcov
- **Ukladá** textové údaje, ktoré môžu obsahovať písmená, čísla a symboly
- **Priraďuje** hodnoty reťazcov premenným na neskoršie použitie
- **Vyžaduje** úvodzovky na rozlíšenie textu od názvov premenných

Pamätajte, že pri písaní reťazca musíte použiť úvodzovky, inak JavaScript predpokladá, že ide o názov premennej.

### Formátovanie reťazcov

Manipulácia s reťazcami vám umožňuje kombinovať textové prvky, začleniť premenné a vytvárať dynamický obsah, ktorý reaguje na stav programu. Táto technika vám umožňuje programovo vytvárať text.

Často potrebujete spojiť viacero reťazcov – tento proces sa nazýva zreťazenie.

Na **zreťazenie** dvoch alebo viacerých reťazcov, alebo ich spojenie, použite operátor `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Krok za krokom, čo sa deje:**
- **Kombinuje** viacero reťazcov pomocou operátora `+`
- **Spojuje** reťazce priamo
Môžete dosiahnuť svoje ciele formátovania pomocou oboch metód, ale šablónové literály budú rešpektovať medzery a zalomenia riadkov.

✅ Kedy by ste použili šablónový literál namiesto obyčajného reťazca?

### Booleany

Booleany predstavujú najjednoduchšiu formu dát: môžu obsahovať iba jednu z dvoch hodnôt – `true` alebo `false`. Tento binárny logický systém má korene v práci Georgea Boolea, matematika z 19. storočia, ktorý vyvinul Booleovu algebru.

Napriek svojej jednoduchosti sú booleany nevyhnutné pre logiku programovania. Umožňujú vášmu kódu robiť rozhodnutia na základe podmienok – či je používateľ prihlásený, či bolo kliknuté na tlačidlo alebo či boli splnené určité kritériá.

Booleany môžu mať iba dve hodnoty: `true` alebo `false`. Booleany môžu pomôcť rozhodnúť, ktoré riadky kódu by sa mali vykonať, keď sú splnené určité podmienky. V mnohých prípadoch [operátory](../../../../2-js-basics/1-data-types) pomáhajú nastaviť hodnotu Booleanu a často si všimnete a napíšete premenné, ktoré sa inicializujú alebo ich hodnoty sa aktualizujú pomocou operátora.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**V uvedenom príklade sme:**
- **Vytvorili** premennú, ktorá uchováva Boolean hodnotu `true`
- **Ukázali**, ako uchovávať Boolean hodnotu `false`
- **Použili** presné kľúčové slová `true` a `false` (bez úvodzoviek)
- **Pripravili** tieto premenné na použitie v podmienkových výrazoch

✅ Premenná môže byť považovaná za 'pravdivú', ak sa vyhodnotí ako Boolean `true`. Zaujímavé je, že v JavaScripte sú [všetky hodnoty pravdivé, pokiaľ nie sú definované ako nepravdivé](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vytvorte správcu osobných informácií, ktorý demonštruje všetky typy dát JavaScriptu, ktoré ste sa naučili v tejto lekcii, pričom spracováva scenáre reálneho sveta.

**Zadanie:** Vytvorte program v JavaScripte, ktorý vytvorí objekt používateľského profilu obsahujúci: meno osoby (string), vek (number), status študenta (boolean), obľúbené farby ako pole a objekt adresy s vlastnosťami ulica, mesto a PSČ. Zahrňte funkcie na zobrazenie informácií o profile a aktualizáciu jednotlivých polí. Uistite sa, že demonštrujete zreťazenie reťazcov, šablónové literály, aritmetické operácie s vekom a logiku Boolean pre status študenta.

Viac o [režime agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) sa dozviete tu.

## 🚀 Výzva

JavaScript má niektoré správania, ktoré môžu vývojárov prekvapiť. Tu je klasický príklad na preskúmanie: skúste napísať toto do konzoly vášho prehliadača: `let age = 1; let Age = 2; age == Age` a pozorujte výsledok. Vráti `false` – dokážete určiť prečo?

Toto predstavuje jedno z mnohých správaní JavaScriptu, ktoré stojí za to pochopiť. Znalosť týchto zvláštností vám pomôže písať spoľahlivejší kód a efektívnejšie riešiť problémy.

## Kvíz po prednáške
[Kvíz po prednáške](https://ff-quizzes.netlify.app)

## Prehľad a samostatné štúdium

Pozrite si [tento zoznam cvičení z JavaScriptu](https://css-tricks.com/snippets/javascript/) a vyskúšajte jedno. Čo ste sa naučili?

## Zadanie

[Praktické cvičenia na typy dát](assignment.md)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.