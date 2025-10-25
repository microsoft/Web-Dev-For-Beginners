<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-24T21:51:02+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "sk"
}
-->
# Prijmite API

## Prehľad

API otvárajú nekonečné možnosti pre kreatívny vývoj webu! V tejto úlohe si vyberiete externé API a vytvoríte rozšírenie pre prehliadač, ktoré rieši skutočný problém alebo poskytuje hodnotnú funkciu používateľom.

## Pokyny

### Krok 1: Vyberte si API
Vyberte si API z tohto kurátorského [zoznamu bezplatných verejných API](https://github.com/public-apis/public-apis). Zvážte tieto kategórie:

**Populárne možnosti pre začiatočníkov:**
- **Zábava**: [Dog CEO API](https://dog.ceo/dog-api/) na náhodné obrázky psov
- **Počasie**: [OpenWeatherMap](https://openweathermap.org/api) na aktuálne údaje o počasí
- **Citáty**: [Quotable API](https://quotable.io/) na inšpiratívne citáty
- **Správy**: [NewsAPI](https://newsapi.org/) na aktuálne titulky
- **Zaujímavosti**: [Numbers API](http://numbersapi.com/) na zaujímavé fakty o číslach

### Krok 2: Naplánujte si rozšírenie
Pred začatím kódovania odpovedzte na tieto plánovacie otázky:
- Aký problém vaše rozšírenie rieši?
- Kto je váš cieľový používateľ?
- Aké údaje budete ukladať do lokálneho úložiska?
- Ako budete riešiť zlyhania API alebo obmedzenia počtu požiadaviek?

### Krok 3: Vytvorte svoje rozšírenie
Vaše rozšírenie by malo obsahovať:

**Povinné funkcie:**
- Vstupné formuláre pre akékoľvek požadované parametre API
- Integráciu API s riadnym spracovaním chýb
- Lokálne úložisko na preferencie používateľov alebo API kľúče
- Čisté, responzívne používateľské rozhranie
- Stav načítania a spätnú väzbu pre používateľov

**Požiadavky na kód:**
- Používajte moderné funkcie JavaScriptu (ES6+)
- Implementujte async/await pre volania API
- Zahrňte riadne spracovanie chýb pomocou blokov try/catch
- Pridajte zmysluplné komentáre vysvetľujúce váš kód
- Dodržujte konzistentné formátovanie kódu

### Krok 4: Testovanie a doladenie
- Testujte svoje rozšírenie s rôznymi vstupmi
- Riešte hraničné prípady (bez internetu, neplatné odpovede API)
- Uistite sa, že vaše rozšírenie funguje po reštarte prehliadača
- Pridajte používateľsky prívetivé chybové hlásenia

## Bonusové výzvy

Posuňte svoje rozšírenie na vyššiu úroveň:
- Pridajte viacero koncových bodov API pre bohatšiu funkcionalitu
- Implementujte ukladanie údajov do cache na zníženie počtu volaní API
- Vytvorte klávesové skratky pre bežné akcie
- Pridajte funkcie exportu/importu údajov
- Implementujte možnosti prispôsobenia pre používateľov

## Požiadavky na odovzdanie

1. **Funkčné rozšírenie pre prehliadač**, ktoré úspešne integruje vybrané API
2. **README súbor**, ktorý vysvetľuje:
   - Ktoré API ste si vybrali a prečo
   - Ako nainštalovať a používať vaše rozšírenie
   - Akékoľvek potrebné API kľúče alebo nastavenia
   - Screenshoty vášho rozšírenia v akcii
3. **Čistý, komentovaný kód**, ktorý dodržiava moderné praktiky JavaScriptu

## Hodnotiace kritériá

| Kritérium | Vynikajúce (90-100%) | Dostatočné (80-89%) | Rozvíjajúce sa (70-79%) | Začiatočné (60-69%) |
|-----------|----------------------|---------------------|-------------------------|---------------------|
| **Integrácia API** | Bezchybná integrácia API s komplexným spracovaním chýb a riadením hraničných prípadov | Úspešná integrácia API so základným spracovaním chýb | API funguje, ale má obmedzené spracovanie chýb | Integrácia API má významné problémy |
| **Kvalita kódu** | Čistý, dobre komentovaný moderný JavaScript dodržiavajúci najlepšie praktiky | Dobrá štruktúra kódu s primeranými komentármi | Kód funguje, ale potrebuje lepšiu organizáciu | Slabá kvalita kódu s minimálnymi komentármi |
| **Používateľská skúsenosť** | Vyleštené rozhranie s vynikajúcimi stavmi načítania a spätnou väzbou pre používateľov | Dobré rozhranie so základnou spätnou väzbou | Základné rozhranie, ktoré funguje primerane | Slabá používateľská skúsenosť s mätúcim rozhraním |
| **Lokálne úložisko** | Sofistikované použitie lokálneho úložiska s validáciou a správou údajov | Správna implementácia lokálneho úložiska pre kľúčové funkcie | Základná implementácia lokálneho úložiska | Minimálne alebo nesprávne použitie lokálneho úložiska |
| **Dokumentácia** | Komplexný README s inštrukciami na nastavenie a screenshotmi | Dobrá dokumentácia pokrývajúca väčšinu požiadaviek | Základná dokumentácia, ktorá chýba v niektorých detailoch | Slabá alebo chýbajúca dokumentácia |

## Tipy na začiatok

1. **Začnite jednoducho**: Vyberte si API, ktoré nevyžaduje zložitú autentifikáciu
2. **Čítajte dokumentáciu**: Dôkladne pochopte koncové body a odpovede vášho vybraného API
3. **Naplánujte si UI**: Nakreslite rozhranie vášho rozšírenia pred začatím kódovania
4. **Testujte často**: Budujte postupne a testujte každú funkciu, keď ju pridáte
5. **Riešte chyby**: Vždy predpokladajte, že volania API môžu zlyhať, a plánujte podľa toho

## Zdroje

- [Dokumentácia k rozšíreniam prehliadača](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Sprievodca Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutoriál lokálneho úložiska](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Parsovanie a spracovanie JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Užite si tvorbu niečoho užitočného a kreatívneho! 🚀

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Aj keď sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.