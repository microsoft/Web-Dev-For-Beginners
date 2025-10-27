<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2025-10-24T21:41:02+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "sk"
}
-->
# Refaktorizácia kódu a zadanie dokumentácie

## Ciele učenia

Dokončením tohto zadania si osvojíte základné zručnosti softvérového vývoja, ktoré profesionálni vývojári používajú denne. Naučíte sa organizovať kód pre lepšiu udržiavateľnosť, znižovať duplicitu prostredníctvom abstrakcie a dokumentovať svoju prácu pre budúcich vývojárov (vrátane vás samotných!).

Čistý, dobre zdokumentovaný kód je kľúčový pre reálne projekty webového vývoja, kde spolupracuje viacero vývojárov a kódové základne sa časom vyvíjajú.

## Prehľad zadania

Súbor `app.js` vašej bankovej aplikácie sa značne rozrástol vďaka funkciám prihlásenia, registrácie a dashboardu. Je čas refaktorovať tento kód pomocou profesionálnych vývojárskych postupov na zlepšenie čitateľnosti, udržiavateľnosti a zníženie duplicity.

## Pokyny

Transformujte aktuálny kód `app.js` implementáciou týchto troch hlavných techník refaktorizácie:

### 1. Extrahovanie konfiguračných konštánt

**Úloha**: Vytvorte konfiguračnú sekciu na začiatku súboru s opakovane použiteľnými konštantami.

**Pokyny na implementáciu:**
- Extrahujte základnú URL adresu serverového API (aktuálne je pevne zakódovaná na viacerých miestach)
- Vytvorte konštanty pre chybové hlásenia, ktoré sa objavujú vo viacerých funkciách
- Zvážte extrahovanie ciest k routám a ID elementov, ktoré sa používajú opakovane

**Príklad štruktúry:**
```javascript
// Configuration constants
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```

### 2. Vytvorenie jednotnej funkcie pre požiadavky

**Úloha**: Vytvorte opakovane použiteľnú funkciu `sendRequest()`, ktorá eliminuje duplicitný kód medzi funkciami `createAccount()` a `getAccount()`.

**Požiadavky:**
- Spracovanie GET aj POST požiadaviek
- Zahrnutie správneho spracovania chýb
- Podpora rôznych URL endpointov
- Akceptovanie voliteľných údajov v tele požiadavky

**Pokyny k podpisu funkcie:**
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Your implementation here
}
```

### 3. Pridanie profesionálnej dokumentácie kódu

**Úloha**: Dokumentujte svoj kód jasnými a užitočnými komentármi, ktoré vysvetľujú "prečo" za vašou logikou.

**Štandardy dokumentácie:**
- Pridajte dokumentáciu funkcií, ktorá vysvetľuje účel, parametre a návratové hodnoty
- Zahrňte inline komentáre pre zložité logiky alebo obchodné pravidlá
- Skupinujte súvisiace funkcie spolu s nadpismi sekcií
- Vysvetlite akékoľvek nejasné vzory kódu alebo špecifické prehliadačové obmedzenia

**Príklad štýlu dokumentácie:**
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

## Kritériá úspechu

Váš refaktorovaný kód by mal demonštrovať tieto profesionálne vývojárske postupy:

### Vzorová implementácia
- ✅ **Konštanty**: Všetky magické reťazce a URL adresy sú extrahované do jasne pomenovaných konštánt
- ✅ **DRY princíp**: Spoločná logika požiadaviek je konsolidovaná do opakovane použiteľnej funkcie `sendRequest()`
- ✅ **Dokumentácia**: Funkcie majú jasné JSDoc komentáre vysvetľujúce účel a parametre
- ✅ **Organizácia**: Kód je logicky usporiadaný s nadpismi sekcií a konzistentným formátovaním
- ✅ **Spracovanie chýb**: Zlepšené spracovanie chýb pomocou novej funkcie požiadaviek

### Dostatočná implementácia
- ✅ **Konštanty**: Väčšina opakovaných hodnôt je extrahovaná, s niekoľkými zostávajúcimi pevne zakódovanými hodnotami
- ✅ **Faktorizácia**: Základná funkcia `sendRequest()` je vytvorená, ale nemusí spracovať všetky okrajové prípady
- ✅ **Komentáre**: Kľúčové funkcie sú zdokumentované, hoci niektoré vysvetlenia by mohli byť podrobnejšie
- ✅ **Čitateľnosť**: Kód je všeobecne dobre organizovaný s niektorými oblasťami na zlepšenie

### Potrebuje zlepšenie
- ❌ **Konštanty**: Mnoho magických reťazcov a URL adries zostáva pevne zakódovaných v celom súbore
- ❌ **Duplicita**: Významná duplicita kódu zostáva medzi podobnými funkciami
- ❌ **Dokumentácia**: Chýbajúce alebo nedostatočné komentáre, ktoré nevysvetľujú účel kódu
- ❌ **Organizácia**: Kód nemá jasnú štruktúru a logické usporiadanie

## Testovanie vášho refaktorovaného kódu

Po refaktorizácii sa uistite, že vaša banková aplikácia stále funguje správne:

1. **Testujte všetky používateľské toky**: Registrácia, prihlásenie, zobrazenie dashboardu a spracovanie chýb
2. **Overte API volania**: Uistite sa, že vaša funkcia `sendRequest()` funguje pre vytváranie aj získavanie účtov
3. **Skontrolujte chybové scenáre**: Testujte s neplatnými prihlasovacími údajmi a chybami siete
4. **Preskúmajte výstup konzoly**: Uistite sa, že počas refaktorizácie neboli zavedené nové chyby

## Pokyny na odovzdanie

Odošlite svoj refaktorovaný súbor `app.js` s:
- Jasnými nadpismi sekcií organizujúcimi rôzne funkcie
- Konzistentným formátovaním a odsadením kódu
- Kompletnou JSDoc dokumentáciou pre všetky funkcie
- Stručným komentárom na začiatku, ktorý vysvetľuje váš prístup k refaktorizácii

**Bonusová výzva**: Vytvorte jednoduchý súbor dokumentácie kódu (`CODE_STRUCTURE.md`), ktorý vysvetľuje architektúru vašej aplikácie a ako spolupracujú rôzne funkcie.

## Spojenie s reálnym svetom

Toto zadanie odráža typ údržby kódu, ktorú profesionálni vývojári vykonávajú pravidelne. V priemyselnom prostredí:
- **Recenzie kódu** hodnotia čitateľnosť a udržiavateľnosť, podobne ako toto zadanie
- **Technický dlh** sa hromadí, keď kód nie je pravidelne refaktorovaný a dokumentovaný
- **Tímová spolupráca** závisí od jasného, dobre zdokumentovaného kódu, ktorý môžu pochopiť noví členovia tímu
- **Opravy chýb** sú oveľa jednoduchšie v dobre organizovaných kódových základniach s vhodnými abstrakciami

Zručnosti, ktoré tu precvičujete - extrahovanie konštánt, eliminácia duplicity a písanie jasnej dokumentácie - sú základom profesionálneho softvérového vývoja.

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.