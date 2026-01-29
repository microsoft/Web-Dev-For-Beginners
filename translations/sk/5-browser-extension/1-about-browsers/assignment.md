# Zadanie: Upraviť dizajn rozšírenia prehliadača

## Prehľad

Teraz, keď ste vytvorili HTML štruktúru pre vaše rozšírenie prehliadača na sledovanie uhlíkovej stopy, je čas urobiť ho vizuálne atraktívnym a užívateľsky prívetivým. Skvelý dizajn zlepšuje používateľskú skúsenosť a robí vaše rozšírenie profesionálnejším a pútavejším.

Vaše rozšírenie už obsahuje základné CSS štýly, ale toto zadanie vás vyzýva, aby ste vytvorili jedinečnú vizuálnu identitu, ktorá odráža váš osobný štýl a zároveň zachováva vynikajúcu použiteľnosť.

## Pokyny

### Časť 1: Analyzujte aktuálny dizajn

Pred vykonaním zmien preskúmajte existujúcu štruktúru CSS:

1. **Nájdite** CSS súbory vo vašom projekte rozšírenia
2. **Preskúmajte** aktuálny prístup k štýlovaniu a farebnú schému
3. **Identifikujte** oblasti na zlepšenie rozloženia, typografie a vizuálnej hierarchie
4. **Zvážte**, ako dizajn podporuje ciele používateľa (jednoduché vyplnenie formulára a jasné zobrazenie údajov)

### Časť 2: Navrhnite vlastné štýlovanie

Vytvorte súdržný vizuálny dizajn, ktorý zahŕňa:

**Farebná schéma:**
- Vyberte primárnu farebnú paletu, ktorá odráža environmentálne témy
- Zabezpečte dostatočný kontrast pre prístupnosť (použite nástroje ako WebAIM's contrast checker)
- Zvážte, ako budú farby vyzerať v rôznych témach prehliadača

**Typografia:**
- Vyberte čitateľné písma, ktoré dobre fungujú pri malých veľkostiach rozšírenia
- Vytvorte jasnú hierarchiu s vhodnými veľkosťami a hrúbkami písma
- Zabezpečte, aby text zostal čitateľný v svetlých aj tmavých témach prehliadača

**Rozloženie a rozstupy:**
- Zlepšite vizuálnu organizáciu prvkov formulára a zobrazenia údajov
- Pridajte vhodné odsadenia a medzery pre lepšiu čitateľnosť
- Zvážte princípy responzívneho dizajnu pre rôzne veľkosti obrazovky

### Časť 3: Implementujte svoj dizajn

Upravte CSS súbory na implementáciu vášho dizajnu:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Kľúčové oblasti na štýlovanie:**
- **Prvky formulára**: Polia na zadávanie údajov, štítky a tlačidlo na odoslanie
- **Zobrazenie výsledkov**: Kontajner na údaje, štýlovanie textu a stavy načítania
- **Interaktívne prvky**: Efekty pri prechode myšou, stavy tlačidiel a prechody
- **Celkové rozloženie**: Rozstupy kontajnerov, farby pozadia a vizuálna hierarchia

### Časť 4: Testovanie a doladenie

1. **Vytvorte** svoje rozšírenie pomocou `npm run build`
2. **Načítajte** aktualizované rozšírenie do vášho prehliadača
3. **Otestujte** všetky vizuálne stavy (zadávanie do formulára, načítanie, zobrazenie výsledkov, chyby)
4. **Overte** prístupnosť pomocou nástrojov pre vývojárov v prehliadači
5. **Doladte** svoje štýly na základe skutočného používania

## Kreatívne výzvy

### Základná úroveň
- Aktualizujte farby a písma na vytvorenie súdržnej témy
- Zlepšite rozstupy a zarovnanie v celom rozhraní
- Pridajte jemné efekty pri prechode myšou na interaktívne prvky

### Stredná úroveň
- Navrhnite vlastné ikony alebo grafiku pre vaše rozšírenie
- Implementujte plynulé prechody medzi rôznymi stavmi
- Vytvorte jedinečnú animáciu načítania pre API volania

### Pokročilá úroveň
- Navrhnite viacero možností témy (svetlá/tmavá/vysoký kontrast)
- Implementujte responzívny dizajn pre rôzne veľkosti okien prehliadača
- Pridajte mikrointerakcie, ktoré zlepšujú používateľskú skúsenosť

## Pokyny na odovzdanie

Vaše dokončené zadanie by malo obsahovať:

- **Upravené CSS súbory** s vaším vlastným štýlovaním
- **Snímky obrazovky**, ktoré zobrazujú vaše rozšírenie v rôznych stavoch (formulár, načítanie, výsledky)
- **Krátky popis** (2-3 vety), ktorý vysvetľuje vaše dizajnové rozhodnutia a ako zlepšujú používateľskú skúsenosť

## Hodnotiaca tabuľka

| Kritérium | Vynikajúce (4) | Dostačujúce (3) | Rozvíjajúce sa (2) | Začiatočnícke (1) |
|-----------|----------------|-----------------|--------------------|-------------------|
| **Vizuálny dizajn** | Kreatívny, súdržný dizajn, ktorý zlepšuje použiteľnosť a odráža silné dizajnové princípy | Dobré dizajnové rozhodnutia s konzistentným štýlovaním a jasnou vizuálnou hierarchiou | Základné zlepšenia dizajnu s niektorými problémami konzistencie | Minimálne zmeny štýlu alebo nekonzistentný dizajn |
| **Funkčnosť** | Všetky štýly fungujú perfektne vo všetkých stavoch a prostrediach prehliadača | Štýly fungujú dobre s menšími problémami v okrajových prípadoch | Väčšina štýlov je funkčná s niektorými problémami zobrazenia | Významné problémy so štýlovaním, ktoré ovplyvňujú použiteľnosť |
| **Kvalita kódu** | Čistý, dobre organizovaný CSS s významnými názvami tried a efektívnymi selektormi | Dobrá štruktúra CSS s vhodným použitím selektorov a vlastností | Prijateľný CSS s niektorými problémami organizácie | Slabá štruktúra CSS alebo príliš zložitý štýl |
| **Prístupnosť** | Vynikajúci kontrast farieb, čitateľné písma a zohľadnenie používateľov so zdravotným postihnutím | Dobré prístupové praktiky s menšími oblasťami na zlepšenie | Základné zohľadnenie prístupnosti s niektorými problémami | Obmedzená pozornosť venovaná požiadavkám na prístupnosť |

## Tipy na úspech

> 💡 **Dizajnový tip**: Začnite s jemnými zmenami a postupne prejdite k výraznejšiemu štýlovaniu. Malé zlepšenia v typografii a rozstupoch často majú veľký vplyv na vnímanú kvalitu.

**Najlepšie praktiky, ktoré treba dodržiavať:**
- **Testujte** svoje rozšírenie v svetlých aj tmavých témach prehliadača
- **Používajte** relatívne jednotky (em, rem) pre lepšiu škálovateľnosť
- **Udržujte** konzistentné rozstupy pomocou vlastností CSS
- **Zvážte**, ako bude váš dizajn vyzerať pre používateľov s rôznymi vizuálnymi potrebami
- **Validujte** svoj CSS, aby ste sa uistili, že dodržiava správnu syntax

> ⚠️ **Bežná chyba**: Neobetujte použiteľnosť kvôli vizuálnej atraktivite. Vaše rozšírenie by malo byť krásne aj funkčné.

**Nezabudnite:**
- **Zachovať** dôležité informácie ľahko čitateľné
- **Zabezpečiť**, aby tlačidlá a interaktívne prvky boli ľahko klikateľné
- **Udržiavať** jasnú vizuálnu spätnú väzbu pre akcie používateľa
- **Testovať** svoj dizajn s reálnymi údajmi, nielen s textom zástupcu

Veľa šťastia pri vytváraní rozšírenia prehliadača, ktoré bude funkčné aj vizuálne ohromujúce!

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.