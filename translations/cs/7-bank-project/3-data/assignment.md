<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-24T21:04:26+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "cs"
}
-->
# Refaktorování kódu a úkol dokumentace

## Cíle učení

Splněním tohoto úkolu si procvičíte základní dovednosti softwarového vývoje, které profesionální vývojáři používají každý den. Naučíte se organizovat kód pro lepší udržovatelnost, snížit duplicitu pomocí abstrakce a dokumentovat svou práci pro budoucí vývojáře (včetně sebe!).

Čistý, dobře zdokumentovaný kód je klíčový pro reálné projekty webového vývoje, kde spolupracuje více vývojářů a kódové základny se časem vyvíjejí.

## Přehled úkolu

Soubor `app.js` vaší bankovní aplikace se výrazně rozrostl díky funkcím přihlášení, registrace a dashboardu. Je čas tento kód refaktorovat pomocí profesionálních vývojářských postupů, aby se zlepšila čitelnost, udržovatelnost a snížila duplicita.

## Pokyny

Přeměňte svůj aktuální kód `app.js` implementací těchto tří základních technik refaktorování:

### 1. Extrahování konfiguračních konstant

**Úkol**: Vytvořte konfigurační sekci na začátku souboru s opakovaně použitelnými konstantami.

**Pokyny k implementaci:**
- Extrahujte základní URL serverového API (aktuálně je pevně zakódováno na několika místech)
- Vytvořte konstanty pro chybové zprávy, které se objevují v několika funkcích
- Zvažte extrahování cest k routám a ID prvků, které se opakovaně používají

**Příklad struktury:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Vytvoření jednotné funkce pro požadavky

**Úkol**: Vytvořte opakovaně použitelnou funkci `sendRequest()`, která eliminuje duplicitní kód mezi `createAccount()` a `getAccount()`.

**Požadavky:**
- Zpracovávejte jak GET, tak POST požadavky
- Zahrňte správné zpracování chyb
- Podporujte různé URL endpointy
- Přijímejte volitelná data těla požadavku

**Pokyny k podpisu funkce:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Přidání profesionální dokumentace kódu

**Úkol**: Dokumentujte svůj kód jasnými, užitečnými komentáři, které vysvětlují "proč" za vaší logikou.

**Standardy dokumentace:**
- Přidejte dokumentaci funkcí vysvětlující účel, parametry a návratové hodnoty
- Zahrňte inline komentáře pro složitou logiku nebo obchodní pravidla
- Seskupte související funkce dohromady pomocí záhlaví sekcí
- Vysvětlete jakékoli nejasné vzory kódu nebo specifické úpravy pro prohlížeče

**Příklad stylu dokumentace:**
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Prevent default form submission to handle with JavaScript
  event.preventDefault();
  
  // Your implementation...
}
```

## Kritéria úspěchu

Váš refaktorovaný kód by měl demonstrovat tyto profesionální vývojářské postupy:

### Vynikající implementace
- ✅ **Konstanty**: Všechny magické řetězce a URL jsou extrahovány do jasně pojmenovaných konstant
- ✅ **Princip DRY**: Společná logika požadavků je konsolidována do opakovaně použitelné funkce `sendRequest()`
- ✅ **Dokumentace**: Funkce mají jasné JSDoc komentáře vysvětlující účel a parametry
- ✅ **Organizace**: Kód je logicky seskupený s záhlavími sekcí a konzistentním formátováním
- ✅ **Zpracování chyb**: Zlepšené zpracování chyb pomocí nové funkce požadavků

### Přiměřená implementace
- ✅ **Konstanty**: Většina opakovaných hodnot je extrahována, s drobnými pevně zakódovanými hodnotami
- ✅ **Faktorizace**: Základní funkce `sendRequest()` vytvořena, ale nemusí zpracovávat všechny okrajové případy
- ✅ **Komentáře**: Klíčové funkce jsou zdokumentovány, i když některá vysvětlení by mohla být podrobnější
- ✅ **Čitelnost**: Kód je obecně dobře organizovaný, s některými oblastmi pro zlepšení

### Potřebuje zlepšení
- ❌ **Konstanty**: Mnoho magických řetězců a URL zůstává pevně zakódováno v celém souboru
- ❌ **Duplicita**: Významná duplicita kódu zůstává mezi podobnými funkcemi
- ❌ **Dokumentace**: Chybějící nebo nedostatečné komentáře, které nevysvětlují účel kódu
- ❌ **Organizace**: Kód postrádá jasnou strukturu a logické seskupení

## Testování vašeho refaktorovaného kódu

Po refaktorování se ujistěte, že vaše bankovní aplikace stále funguje správně:

1. **Otestujte všechny uživatelské toky**: Registrace, přihlášení, zobrazení dashboardu a zpracování chyb
2. **Ověřte API volání**: Ověřte, že vaše funkce `sendRequest()` funguje jak pro vytvoření účtu, tak pro jeho načtení
3. **Zkontrolujte scénáře chyb**: Otestujte s neplatnými přihlašovacími údaji a chybami sítě
4. **Projděte výstup konzole**: Ujistěte se, že během refaktorování nebyly zavedeny žádné nové chyby

## Pokyny k odevzdání

Odevzdejte svůj refaktorovaný soubor `app.js` s:
- Jasnými záhlavími sekcí organizujícími různé funkce
- Konzistentním formátováním a odsazením kódu
- Kompletní JSDoc dokumentací pro všechny funkce
- Stručným komentářem na začátku, který vysvětluje váš přístup k refaktorování

**Bonusová výzva**: Vytvořte jednoduchý soubor dokumentace kódu (`CODE_STRUCTURE.md`), který vysvětluje architekturu vaší aplikace a jak spolupracují různé funkce.

## Spojení s reálným světem

Tento úkol odráží typ údržby kódu, kterou profesionální vývojáři provádějí pravidelně. V průmyslovém prostředí:
- **Revize kódu** hodnotí čitelnost a udržovatelnost, stejně jako tento úkol
- **Technický dluh** se hromadí, když kód není pravidelně refaktorován a dokumentován
- **Týmová spolupráce** závisí na jasném, dobře zdokumentovaném kódu, kterému mohou noví členové týmu porozumět
- **Opravy chyb** jsou mnohem jednodušší v dobře organizovaných kódových základnách s řádnými abstrakcemi

Dovednosti, které si zde procvičujete - extrahování konstant, eliminace duplicity a psaní jasné dokumentace - jsou základními prvky profesionálního softwarového vývoje.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.