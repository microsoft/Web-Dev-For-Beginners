<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-24T21:01:15+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "cs"
}
-->
# Vytvoření bankovní aplikace, část 4: Koncepty správy stavu

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/47)

## Úvod

Správa stavu je jako navigační systém na vesmírné lodi Voyager – když vše funguje hladce, sotva si ho všimnete. Ale když se něco pokazí, stává se rozdílem mezi dosažením mezihvězdného prostoru a ztracením se v kosmickém prázdnu. Ve webovém vývoji představuje stav vše, co si vaše aplikace musí pamatovat: stav přihlášení uživatele, data formulářů, historii navigace a dočasné stavy rozhraní.

Jak se vaše bankovní aplikace vyvinula z jednoduchého přihlašovacího formuláře do sofistikovanější aplikace, pravděpodobně jste narazili na některé běžné problémy. Obnovíte stránku a uživatelé jsou neočekávaně odhlášeni. Zavřete prohlížeč a veškerý pokrok zmizí. Při ladění problému procházíte více funkcí, které všechny různými způsoby upravují stejná data.

To nejsou známky špatného kódování – jsou to přirozené problémy, které se objevují, když aplikace dosáhnou určité úrovně složitosti. Každý vývojář čelí těmto výzvám, když se jeho aplikace posouvají z fáze "důkazu konceptu" do fáze "připraveno k produkci".

V této lekci implementujeme centralizovaný systém správy stavu, který promění vaši bankovní aplikaci v spolehlivou, profesionální aplikaci. Naučíte se spravovat tok dat předvídatelně, správně uchovávat uživatelské relace a vytvořit hladký uživatelský zážitek, který moderní webové aplikace vyžadují.

## Předpoklady

Než se ponoříme do konceptů správy stavu, je třeba mít správně nastavené vývojové prostředí a základ vaší bankovní aplikace. Tato lekce přímo navazuje na koncepty a kód z předchozích částí této série.

Ujistěte se, že máte připravené následující komponenty:

**Požadované nastavení:**
- Dokončete [lekci o získávání dat](../3-data/README.md) – vaše aplikace by měla úspěšně načítat a zobrazovat data účtu
- Nainstalujte [Node.js](https://nodejs.org) na váš systém pro spuštění backendového API
- Spusťte [server API](../api/README.md) lokálně pro zpracování operací s daty účtu

**Testování vašeho prostředí:**

Ověřte, že váš API server běží správně, spuštěním tohoto příkazu v terminálu:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Co tento příkaz dělá:**
- **Odesílá** GET požadavek na váš lokální API server
- **Testuje** připojení a ověřuje, zda server odpovídá
- **Vrací** informace o verzi API, pokud vše funguje správně

---

## Diagnostika aktuálních problémů se stavem

Jako Sherlock Holmes zkoumající místo činu musíme přesně pochopit, co se děje v naší aktuální implementaci, než budeme moci vyřešit záhadu mizejících uživatelských relací.

Proveďme jednoduchý experiment, který odhalí základní problémy správy stavu:

**🧪 Vyzkoušejte tento diagnostický test:**
1. Přihlaste se do své bankovní aplikace a přejděte na hlavní stránku
2. Obnovte stránku prohlížeče
3. Sledujte, co se stane s vaším stavem přihlášení

Pokud jste přesměrováni zpět na přihlašovací obrazovku, objevili jste klasický problém s uchováváním stavu. Toto chování nastává, protože naše aktuální implementace ukládá uživatelská data do JavaScriptových proměnných, které se při každém načtení stránky resetují.

**Problémy aktuální implementace:**

Jednoduchá proměnná `account` z naší [předchozí lekce](../3-data/README.md) vytváří tři významné problémy, které ovlivňují jak uživatelskou zkušenost, tak udržovatelnost kódu:

| Problém | Technická příčina | Dopad na uživatele |
|---------|-------------------|--------------------|
| **Ztráta relace** | Obnovení stránky vymaže JavaScriptové proměnné | Uživatelé se musí často znovu přihlašovat |
| **Rozptýlené aktualizace** | Více funkcí přímo upravuje stav | Ladění se stává stále obtížnějším |
| **Neúplné vyčištění** | Odhlášení nevymaže všechny odkazy na stav | Potenciální bezpečnostní a soukromé problémy |

**Architektonická výzva:**

Stejně jako při konstrukci Titaniku, kde se zdálo, že oddělené komory jsou robustní, dokud se nezaplavilo více komor najednou, řešení těchto problémů jednotlivě neřeší základní architektonický problém. Potřebujeme komplexní řešení správy stavu.

> 💡 **Co se vlastně snažíme dosáhnout?**

[Správa stavu](https://en.wikipedia.org/wiki/State_management) je ve skutečnosti o řešení dvou základních otázek:

1. **Kde jsou moje data?**: Sledování, jaké informace máme a odkud pocházejí
2. **Jsou všichni na stejné stránce?**: Zajištění, že to, co uživatelé vidí, odpovídá tomu, co se skutečně děje

**Náš plán:**

Místo toho, abychom se honili za problémy, vytvoříme **centralizovaný systém správy stavu**. Představte si to jako jednoho opravdu organizovaného člověka, který má na starosti všechny důležité věci:

![Schéma ukazující tok dat mezi HTML, uživatelskými akcemi a stavem](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.cs.png)

**Porozumění tomuto toku dat:**
- **Centralizuje** veškerý stav aplikace na jednom místě
- **Směřuje** všechny změny stavu přes kontrolované funkce
- **Zajišťuje**, že uživatelské rozhraní zůstane synchronizované s aktuálním stavem
- **Poskytuje** jasný, předvídatelný vzor pro správu dat

> 💡 **Profesionální pohled**: Tato lekce se zaměřuje na základní koncepty. Pro složitější aplikace poskytují knihovny jako [Redux](https://redux.js.org) pokročilejší funkce správy stavu. Porozumění těmto základním principům vám pomůže zvládnout jakoukoli knihovnu pro správu stavu.

> ⚠️ **Pokročilé téma**: Nebudeme se zabývat automatickými aktualizacemi uživatelského rozhraní vyvolanými změnami stavu, protože to zahrnuje koncepty [reaktivního programování](https://en.wikipedia.org/wiki/Reactive_programming). Považujte to za skvělý další krok ve vašem vzdělávacím procesu!

### Úkol: Centralizace struktury stavu

Začněme transformovat naši rozptýlenou správu stavu do centralizovaného systému. Tento první krok vytvoří základ pro všechny následující zlepšení.

**Krok 1: Vytvořte centralizovaný objekt stavu**

Nahraďte jednoduché deklarování `account`:

```js
let account = null;
```

Strukturovaným objektem stavu:

```js
let state = {
  account: null
};
```

**Proč na této změně záleží:**
- **Centralizuje** všechna data aplikace na jednom místě
- **Připravuje** strukturu pro přidání dalších vlastností stavu později
- **Vytváří** jasnou hranici mezi stavem a ostatními proměnnými
- **Zavádí** vzor, který se škáluje s růstem vaší aplikace

**Krok 2: Aktualizace vzorů přístupu ke stavu**

Aktualizujte své funkce tak, aby používaly novou strukturu stavu:

**Ve funkcích `register()` a `login()`**, nahraďte:
```js
account = ...
```

Tímto:
```js
state.account = ...
```

**Ve funkci `updateDashboard()`**, přidejte tento řádek na začátek:
```js
const account = state.account;
```

**Co tyto aktualizace přinášejí:**
- **Zachovávají** stávající funkčnost při zlepšení struktury
- **Připravují** váš kód na sofistikovanější správu stavu
- **Vytvářejí** konzistentní vzory pro přístup k datům stavu
- **Zavádějí** základ pro centralizované aktualizace stavu

> 💡 **Poznámka**: Toto refaktorování okamžitě nevyřeší naše problémy, ale vytvoří nezbytný základ pro silná zlepšení, která přijdou!

## Implementace kontrolovaných aktualizací stavu

S naším stavem centralizovaným je dalším krokem zavedení kontrolovaných mechanismů pro úpravy dat. Tento přístup zajišťuje předvídatelné změny stavu a snazší ladění.

Základní princip připomíná řízení leteckého provozu: místo toho, aby více funkcí nezávisle upravovalo stav, budeme všechny změny směrovat přes jednu kontrolovanou funkci. Tento vzor poskytuje jasný přehled o tom, kdy a jak dochází ke změnám dat.

**Správa neměnného stavu:**

Budeme zacházet s naším objektem `state` jako s [*neměnným*](https://en.wikipedia.org/wiki/Immutable_object), což znamená, že ho nikdy nebudeme upravovat přímo. Místo toho každá změna vytvoří nový objekt stavu s aktualizovanými daty.

I když se tento přístup může zpočátku zdát méně efektivní než přímé úpravy, poskytuje významné výhody pro ladění, testování a udržení předvídatelnosti aplikace.

**Výhody správy neměnného stavu:**

| Výhoda | Popis | Dopad |
|--------|-------|-------|
| **Předvídatelnost** | Změny probíhají pouze přes kontrolované funkce | Snazší ladění a testování |
| **Sledování historie** | Každá změna stavu vytvoří nový objekt | Umožňuje funkci zpět/znovu |
| **Prevence vedlejších efektů** | Žádné náhodné úpravy | Zabraňuje záhadným chybám |
| **Optimalizace výkonu** | Snadné zjištění, kdy se stav skutečně změnil | Umožňuje efektivní aktualizace UI |

**Neměnnost v JavaScriptu pomocí `Object.freeze()`:**

JavaScript poskytuje [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) k zabránění úprav objektů:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Rozbor toho, co se zde děje:**
- **Zabraňuje** přímému přiřazování nebo mazání vlastností
- **Vyvolává** výjimky při pokusech o úpravy
- **Zajišťuje**, že změny stavu musí probíhat přes kontrolované funkce
- **Vytváří** jasnou smlouvu o tom, jak lze stav aktualizovat

> 💡 **Hlubší pohled**: Přečtěte si o rozdílu mezi *mělkými* a *hlubokými* neměnnými objekty v [dokumentaci MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze). Porozumění tomuto rozdílu je klíčové pro složité struktury stavu.

### Úkol

Vytvořme novou funkci `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

V této funkci vytvoříme nový objekt stavu a zkopírujeme data z předchozího stavu pomocí [*operátoru rozprostření (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Poté přepíšeme konkrétní vlastnost objektu stavu novými daty pomocí [notace hranatých závorek](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` pro přiřazení. Nakonec objekt uzamkneme, aby se zabránilo úpravám pomocí `Object.freeze()`. V současné době máme v stavu uloženou pouze vlastnost `account`, ale s tímto přístupem můžete do stavu přidat tolik vlastností, kolik potřebujete.

Také aktualizujeme inicializaci `state`, abychom zajistili, že počáteční stav bude také zmrazen:

```js
let state = Object.freeze({
  account: null
});
```

Poté aktualizujte funkci `register` nahrazením přiřazení `state.account = result;`:

```js
updateState('account', result);
```

Uděláme totéž s funkcí `login`, kde nahradíme `state.account = data;`:

```js
updateState('account', data);
```

Nyní využijeme příležitosti k opravě problému, kdy se data účtu nevymažou, když uživatel klikne na *Odhlásit*.

Vytvořte novou funkci `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

Ve funkci `updateDashboard()` nahraďte přesměrování `return navigate('/login');` za `return logout();`;

Vyzkoušejte registraci nového účtu, odhlášení a opětovné přihlášení, abyste ověřili, že vše stále funguje správně.

> Tip: můžete se podívat na všechny změny stavu přidáním `console.log(state)` na konec `updateState()` a otevřením konzole v nástrojích pro vývojáře vašeho prohlížeče.

## Implementace uchovávání dat

Problém ztráty relace, který jsme identifikovali dříve, vyžaduje řešení uchovávání, které udržuje uživatelský stav napříč relacemi prohlížeče. To transformuje naši aplikaci z dočasného zážitku na spolehlivý, profesionální nástroj.

Představte si, jak atomové hodiny udržují přesný čas i během výpadků napájení tím, že ukládají kritický stav do nevolatilní paměti. Podobně webové aplikace potřebují mechanismy pro uchovávání dat, aby zachovaly důležitá uživatelská data napříč relacemi prohlížeče a obnovením stránky.

**Strategické otázky pro uchovávání dat:**

Než implementujete uchovávání, zvažte tyto klíčové faktory:

| Otázka | Kontext bankovní aplikace | Dopad rozhodnutí |
|--------|---------------------------|------------------|
| **Jsou data citlivá?** | Zůstatek na účtu, historie transakcí | Vyberte bezpečné metody uchovávání |
| **Jak dlouho by měla data přetrvávat?** | Stav přihlášení vs. dočasné preference UI | Zvolte vhodnou dobu uchovávání |
| **Potřebuje je server?** | Autentizační tokeny vs. nastavení UI | Určete požadavky na sdílení |

**Možnosti úložiště v prohlížeči:**

Moderní prohlížeče poskytují několik mechanismů úložiště, z nichž každý je navržen pro různé případy použití:

**Primární API úložiště:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Trvalé [úložiště klíč/hodnota](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Uchovává** data napříč relacemi prohlížeče na neurčito  
   - **Přežívá** restartování prohlížeče a počítače
   - **Vázáno** na konkrétní doménu webové stránky
   - **Ideální** pro uživatelské preference a stavy přihlášení

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Dočasné úložiště relací
   - **Funguje** identicky jako localStorage během aktivních relací
   - **Vymaže se** automaticky při zavření karty prohlížeče
   - **Ideální** pro dočasná data, která by neměla přetrvávat

3. **[HTTP Cookies](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Úložiště sdílené serverem
   - **Automaticky** se odesílá s každým požadavkem na server
   - **Ideální
> 💡 **Pokročilá možnost**: Pro komplexní offline aplikace s velkými datovými sadami zvažte použití [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Poskytuje plnohodnotnou databázi na straně klienta, ale vyžaduje složitější implementaci.

### Úkol: Implementace persistence pomocí localStorage

Implementujeme trvalé ukládání, aby uživatelé zůstali přihlášeni, dokud se explicitně neodhlásí. Použijeme `localStorage` k ukládání údajů o účtu napříč relacemi prohlížeče.

**Krok 1: Definujte konfiguraci úložiště**

```js
const storageKey = 'savedAccount';
```

**Co tato konstanta poskytuje:**
- **Vytváří** konzistentní identifikátor pro naše uložená data
- **Zabraňuje** překlepům v odkazech na klíče úložiště
- **Umožňuje** snadnou změnu klíče úložiště, pokud je to potřeba
- **Dodržuje** osvědčené postupy pro udržovatelný kód

**Krok 2: Přidejte automatickou persistenci**

Přidejte tento řádek na konec funkce `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Rozbor toho, co se zde děje:**
- **Převádí** objekt účtu na JSON řetězec pro uložení
- **Ukládá** data pomocí našeho konzistentního klíče úložiště
- **Provádí** se automaticky při každé změně stavu
- **Zajišťuje**, že uložená data jsou vždy synchronizována s aktuálním stavem

> 💡 **Výhoda architektury**: Protože jsme centralizovali všechny aktualizace stavu prostřednictvím `updateState()`, přidání persistence vyžadovalo pouze jeden řádek kódu. To ukazuje sílu dobrých architektonických rozhodnutí!

**Krok 3: Obnovte stav při načtení aplikace**

Vytvořte inicializační funkci pro obnovení uložených dat:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

**Porozumění procesu inicializace:**
- **Načítá** dříve uložená data účtu z localStorage
- **Parsuje** JSON řetězec zpět na JavaScriptový objekt
- **Aktualizuje** stav pomocí naší kontrolované funkce aktualizace
- **Obnovuje** uživatelskou relaci automaticky při načtení stránky
- **Provádí** se před aktualizací tras, aby byl stav dostupný

**Krok 4: Optimalizujte výchozí trasu**

Aktualizujte výchozí trasu, aby využívala persistenci:

V `updateRoute()` nahraďte:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Proč tato změna dává smysl:**
- **Efektivně využívá** náš nový systém persistence
- **Umožňuje** dashboardu provádět kontrolu autentizace
- **Automaticky přesměrovává** na přihlášení, pokud neexistuje uložená relace
- **Vytváří** plynulejší uživatelský zážitek

**Testování vaší implementace:**

1. Přihlaste se do své bankovní aplikace
2. Obnovte stránku v prohlížeči
3. Ověřte, že zůstáváte přihlášeni a na dashboardu
4. Zavřete a znovu otevřete prohlížeč
5. Vraťte se zpět do své aplikace a ověřte, že jste stále přihlášeni

🎉 **Úspěch odemčen**: Úspěšně jste implementovali správu trvalého stavu! Vaše aplikace se nyní chová jako profesionální webová aplikace.

## Vyvážení persistence a aktuálnosti dat

Náš systém persistence úspěšně udržuje uživatelské relace, ale přináší nový problém: zastaralost dat. Když více uživatelů nebo aplikací upravuje stejná data na serveru, místní uložené informace se stávají neaktuálními.

Tato situace připomíná vikingské navigátory, kteří se spoléhali na uložené hvězdné mapy i aktuální pozorování nebeských těles. Mapy poskytovaly konzistenci, ale navigátoři potřebovali čerstvá pozorování, aby zohlednili měnící se podmínky. Podobně naše aplikace potřebuje jak trvalý uživatelský stav, tak aktuální data ze serveru.

**🧪 Objevování problému zastaralosti dat:**

1. Přihlaste se na dashboard pomocí účtu `test`
2. Spusťte tento příkaz v terminálu, abyste simulovali transakci z jiného zdroje:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Obnovte stránku dashboardu v prohlížeči
4. Sledujte, zda vidíte novou transakci

**Co tento test ukazuje:**
- **Ukazuje**, jak může být localStorage "zastaralý" (neaktuální)
- **Simuluje** reálné scénáře, kdy dochází ke změnám dat mimo vaši aplikaci
- **Odhaluje** napětí mezi persistencí a aktuálností dat

**Výzva zastaralosti dat:**

| Problém | Příčina | Dopad na uživatele |
|---------|---------|--------------------|
| **Zastaralá data** | localStorage se nikdy automaticky nevyprší | Uživatelé vidí neaktuální informace |
| **Změny na serveru** | Jiné aplikace/uživatelé upravují stejná data | Nekonzistentní zobrazení napříč platformami |
| **Cache vs. realita** | Místní cache neodpovídá stavu serveru | Špatný uživatelský zážitek a zmatení |

**Strategie řešení:**

Implementujeme vzor "obnovy při načtení", který vyvažuje výhody persistence s potřebou aktuálních dat. Tento přístup zachovává plynulý uživatelský zážitek a zároveň zajišťuje přesnost dat.

### Úkol: Implementace systému obnovy dat

Vytvoříme systém, který automaticky načítá aktuální data ze serveru a zároveň zachovává výhody naší správy trvalého stavu.

**Krok 1: Vytvořte aktualizátor dat účtu**

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

**Porozumění logice této funkce:**
- **Kontroluje**, zda je uživatel aktuálně přihlášen (existuje state.account)
- **Přesměrovává** na odhlášení, pokud není nalezena platná relace
- **Načítá** aktuální data účtu ze serveru pomocí existující funkce `getAccount()`
- **Elegantně zpracovává** chyby serveru odhlášením neplatných relací
- **Aktualizuje** stav s aktuálními daty pomocí našeho kontrolovaného systému aktualizace
- **Spouští** automatickou persistenci localStorage prostřednictvím funkce `updateState()`

**Krok 2: Vytvořte obslužnou funkci pro obnovu dashboardu**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Co tato funkce obnovy zajišťuje:**
- **Koordinuje** proces obnovy dat a aktualizace uživatelského rozhraní
- **Čeká**, až budou načtena aktuální data, než aktualizuje zobrazení
- **Zajišťuje**, že dashboard zobrazuje nejaktuálnější informace
- **Udržuje** čisté oddělení mezi správou dat a aktualizací uživatelského rozhraní

**Krok 3: Integrace s trasovým systémem**

Aktualizujte konfiguraci tras, aby se obnova spouštěla automaticky:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Jak tato integrace funguje:**
- **Spouští** funkci obnovy pokaždé, když se načte trasa dashboardu
- **Zajišťuje**, že aktuální data jsou vždy zobrazena, když uživatelé přejdou na dashboard
- **Udržuje** stávající strukturu tras a zároveň přidává aktuálnost dat
- **Poskytuje** konzistentní vzor pro inicializaci specifickou pro trasu

**Testování vašeho systému obnovy dat:**

1. Přihlaste se do své bankovní aplikace
2. Spusťte curl příkaz z dřívějška, abyste vytvořili novou transakci
3. Obnovte stránku dashboardu nebo přejděte pryč a zpět
4. Ověřte, že se nová transakce okamžitě zobrazí

🎉 **Dokonalá rovnováha dosažena**: Vaše aplikace nyní kombinuje plynulý zážitek z trvalého stavu s přesností aktuálních dat ze serveru!

## Výzva GitHub Copilot Agent 🚀

Použijte režim Agent k dokončení následující výzvy:

**Popis:** Implementujte komplexní systém správy stavu s funkcionalitou undo/redo pro bankovní aplikaci. Tato výzva vám pomůže procvičit pokročilé koncepty správy stavu, včetně sledování historie stavu, neměnných aktualizací a synchronizace uživatelského rozhraní.

**Zadání:** Vytvořte rozšířený systém správy stavu, který zahrnuje: 1) Pole historie stavu, které sleduje všechny předchozí stavy, 2) Funkce undo a redo, které umožňují návrat k předchozím stavům, 3) Tlačítka v uživatelském rozhraní pro operace undo/redo na dashboardu, 4) Maximální limit historie na 10 stavů, aby se předešlo problémům s pamětí, a 5) Správné vyčištění historie při odhlášení uživatele. Zajistěte, aby funkce undo/redo fungovala se změnami zůstatku na účtu a přetrvávala i po obnovení prohlížeče.

Více o [režimu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) se dozvíte zde.

## 🚀 Výzva: Optimalizace úložiště

Vaše implementace nyní efektivně zpracovává uživatelské relace, obnovu dat a správu stavu. Zvažte však, zda náš současný přístup optimálně vyvažuje efektivitu úložiště s funkčností.

Stejně jako šachoví mistři rozlišují mezi klíčovými figurami a postradatelnými pěšci, efektivní správa stavu vyžaduje identifikaci dat, která musí být trvale uložena, oproti těm, která by měla být vždy aktuální ze serveru.

**Analýza optimalizace:**

Zhodnoťte svou aktuální implementaci localStorage a zvažte tyto strategické otázky:
- Jaké jsou minimální informace potřebné k udržení autentizace uživatele?
- Která data se mění tak často, že místní cache poskytuje jen malý přínos?
- Jak může optimalizace úložiště zlepšit výkon bez zhoršení uživatelského zážitku?

**Strategie implementace:**
- **Identifikujte** základní data, která musí být trvale uložena (pravděpodobně jen identifikace uživatele)
- **Upravte** svou implementaci localStorage tak, aby ukládala pouze kritická data relace
- **Zajistěte**, že aktuální data budou vždy načtena ze serveru při návštěvě dashboardu
- **Otestujte**, zda váš optimalizovaný přístup zachovává stejný uživatelský zážitek

**Pokročilé úvahy:**
- **Porovnejte** kompromisy mezi ukládáním úplných dat účtu a pouze autentizačních tokenů
- **Zdokumentujte** svá rozhodnutí a důvody pro budoucí členy týmu

Tato výzva vám pomůže myslet jako profesionální vývojář, který zvažuje jak uživatelský zážitek, tak efektivitu aplikace. Věnujte čas experimentování s různými přístupy!

## Kvíz po přednášce

[Kvíz po přednášce](https://ff-quizzes.netlify.app/web/quiz/48)

## Úkol

[Implementujte dialog "Přidat transakci"](assignment.md)

Zde je příklad výsledku po dokončení úkolu:

![Screenshot zobrazující příklad dialogu "Přidat transakci"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.cs.png)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.