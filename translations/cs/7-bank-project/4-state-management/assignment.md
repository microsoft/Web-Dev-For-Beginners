<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-24T21:02:04+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "cs"
}
-->
# Implementace dialogu „Přidat transakci“

## Přehled

Vaše bankovní aplikace nyní disponuje solidním systémem správy stavu a uchovávání dat, ale chybí jí klíčová funkce, kterou skutečné bankovní aplikace potřebují: možnost, aby uživatelé mohli přidávat vlastní transakce. V tomto úkolu implementujete kompletní dialog „Přidat transakci“, který se bezproblémově integruje s vaším stávajícím systémem správy stavu.

Tento úkol spojuje vše, co jste se naučili ve čtyřech lekcích o bankovnictví: HTML šablony, práci s formuláři, integraci API a správu stavu.

## Cíle učení

Splněním tohoto úkolu:
- **Vytvoříte** uživatelsky přívětivé rozhraní dialogu pro zadávání dat
- **Implementujete** přístupný design formuláře s podporou klávesnice a čteček obrazovky
- **Integrujete** nové funkce do vašeho stávajícího systému správy stavu
- **Procvičíte** komunikaci s API a zpracování chyb
- **Aplikujete** moderní vzory webového vývoje na reálnou funkci

## Pokyny

### Krok 1: Tlačítko „Přidat transakci“

**Vytvořte** tlačítko „Přidat transakci“ na stránce dashboardu, které uživatelé snadno najdou a použijí.

**Požadavky:**
- **Umístěte** tlačítko na logické místo na dashboardu
- **Použijte** jasný, akční text tlačítka
- **Stylujte** tlačítko tak, aby odpovídalo vašemu stávajícímu designu UI
- **Zajistěte**, že tlačítko bude přístupné pomocí klávesnice

### Krok 2: Implementace dialogu

Vyberte jednu ze dvou možností pro implementaci dialogu:

**Možnost A: Samostatná stránka**
- **Vytvořte** novou HTML šablonu pro formulář transakce
- **Přidejte** novou trasu do vašeho systému směrování
- **Implementujte** navigaci na stránku formuláře a zpět

**Možnost B: Modální dialog (doporučeno)**
- **Použijte** JavaScript k zobrazení/skrytí dialogu bez opuštění dashboardu
- **Implementujte** pomocí vlastnosti [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) nebo CSS tříd
- **Vytvořte** plynulý uživatelský zážitek s řádnou správou zaměření

### Krok 3: Implementace přístupnosti

**Zajistěte**, že váš dialog splňuje [standardy přístupnosti pro modální dialogy](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Navigace pomocí klávesnice:**
- **Podporujte** klávesu Escape pro zavření dialogu
- **Uzamkněte** zaměření uvnitř dialogu, když je otevřený
- **Vraťte** zaměření na tlačítko, které dialog otevřelo, když je zavřený

**Podpora čteček obrazovky:**
- **Přidejte** vhodné ARIA štítky a role
- **Oznamte** otevření/zavření dialogu čtečkám obrazovky
- **Poskytněte** jasné štítky polí formuláře a chybové zprávy

### Krok 4: Vytvoření formuláře

**Navrhněte** HTML formulář, který sbírá data o transakci:

**Povinná pole:**
- **Datum**: Kdy transakce proběhla
- **Popis**: Na co byla transakce určena
- **Částka**: Hodnota transakce (kladná pro příjem, záporná pro výdaje)

**Funkce formuláře:**
- **Validujte** vstupy uživatele před odesláním
- **Poskytněte** jasné chybové zprávy pro neplatná data
- **Zahrňte** užitečný text nápovědy a štítky
- **Stylujte** konzistentně s vaším stávajícím designem

### Krok 5: Integrace API

**Propojte** váš formulář s backendovým API:

**Kroky implementace:**
- **Projděte** [specifikace serverového API](../api/README.md) pro správný koncový bod a formát dat
- **Vytvořte** JSON data z vašich vstupů formuláře
- **Odešlete** data na API s vhodným zpracováním chyb
- **Zobrazte** uživateli zprávy o úspěchu/neúspěchu
- **Zpracujte** síťové chyby elegantně

### Krok 6: Integrace správy stavu

**Aktualizujte** váš dashboard s novou transakcí:

**Požadavky na integraci:**
- **Obnovte** data účtu po úspěšném přidání transakce
- **Aktualizujte** zobrazení dashboardu bez nutnosti znovu načítat stránku
- **Zajistěte**, že nová transakce se zobrazí okamžitě
- **Udržujte** správnou konzistenci stavu během celého procesu

## Technické specifikace

**Detaily API koncového bodu:**
Podívejte se na [dokumentaci serverového API](../api/README.md) pro:
- Požadovaný formát JSON pro data transakce
- HTTP metodu a URL koncového bodu
- Očekávaný formát odpovědi
- Zpracování chybových odpovědí

**Očekávaný výsledek:**
Po dokončení tohoto úkolu by vaše bankovní aplikace měla mít plně funkční funkci „Přidat transakci“, která vypadá a chová se profesionálně:

![Screenshot zobrazující příklad dialogu „Přidat transakci“](../../../../translated_images/dialog.93bba104afeb79f1.cs.png)

## Testování vaší implementace

**Funkční testování:**
1. **Ověřte**, že tlačítko „Přidat transakci“ je jasně viditelné a přístupné
2. **Otestujte**, že se dialog správně otevírá a zavírá
3. **Potvrďte**, že validace formuláře funguje pro všechna povinná pole
4. **Zkontrolujte**, že úspěšné transakce se okamžitě zobrazí na dashboardu
5. **Zajistěte**, že zpracování chyb funguje pro neplatná data a problémy se sítí

**Testování přístupnosti:**
1. **Projděte** celý proces pouze pomocí klávesnice
2. **Otestujte** s čtečkou obrazovky, zda jsou správně oznamovány události
3. **Ověřte**, že správa zaměření funguje správně
4. **Zkontrolujte**, že všechny prvky formuláře mají vhodné štítky

## Hodnotící kritéria

| Kritérium | Vynikající | Dostatečné | Potřebuje zlepšení |
| --------- | ---------- | ---------- | ------------------ |
| **Funkčnost** | Funkce přidání transakce funguje bezchybně s vynikajícím uživatelským zážitkem a dodržuje všechny nejlepší postupy z lekcí | Funkce přidání transakce funguje správně, ale nemusí dodržovat některé nejlepší postupy nebo má drobné problémy s použitelností | Funkce přidání transakce funguje částečně nebo má významné problémy s použitelností |
| **Kvalita kódu** | Kód je dobře organizovaný, dodržuje zavedené vzory, obsahuje správné zpracování chyb a bezproblémově se integruje se stávající správou stavu | Kód funguje, ale může mít problémy s organizací nebo nekonzistentní vzory se stávající základnou kódu | Kód má významné strukturální problémy nebo se dobře neintegruje se stávajícími vzory |
| **Přístupnost** | Plná podpora navigace pomocí klávesnice, kompatibilita s čtečkami obrazovky a dodržování pokynů WCAG s vynikající správou zaměření | Základní funkce přístupnosti implementovány, ale mohou chybět některé funkce navigace pomocí klávesnice nebo čteček obrazovky | Omezené nebo žádné zohlednění přístupnosti |
| **Uživatelský zážitek** | Intuitivní, propracované rozhraní s jasnou zpětnou vazbou, plynulými interakcemi a profesionálním vzhledem | Dobrý uživatelský zážitek s drobnými oblastmi pro zlepšení zpětné vazby nebo vizuálního designu | Špatný uživatelský zážitek s matoucím rozhraním nebo nedostatkem zpětné vazby |

## Další výzvy (volitelné)

Jakmile splníte základní požadavky, zvažte tyto vylepšení:

**Rozšířené funkce:**
- **Přidejte** kategorie transakcí (jídlo, doprava, zábava atd.)
- **Implementujte** validaci vstupů s okamžitou zpětnou vazbou
- **Vytvořte** klávesové zkratky pro pokročilé uživatele
- **Přidejte** možnost úpravy a mazání transakcí

**Pokročilá integrace:**
- **Implementujte** funkci zpět pro nedávno přidané transakce
- **Přidejte** hromadný import transakcí z CSV souborů
- **Vytvořte** vyhledávání a filtrování transakcí
- **Implementujte** funkci exportu dat

Tyto volitelné funkce vám pomohou procvičit pokročilé koncepty webového vývoje a vytvořit kompletnější bankovní aplikaci!

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.