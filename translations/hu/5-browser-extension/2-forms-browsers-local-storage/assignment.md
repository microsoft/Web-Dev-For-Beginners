<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-24T20:38:13+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "hu"
}
-->
# Fogadj örökbe egy API-t

## Áttekintés

Az API-k végtelen lehetőségeket nyitnak meg a kreatív webfejlesztés számára! Ebben a feladatban válassz egy külső API-t, és készíts egy böngészőbővítményt, amely valódi problémát old meg, vagy értékes funkciót nyújt a felhasználóknak.

## Útmutató

### 1. lépés: Válassz egy API-t
Válassz egy API-t ebből az összeállított [ingyenes nyilvános API-k listájából](https://github.com/public-apis/public-apis). Fontold meg ezeket a kategóriákat:

**Népszerű opciók kezdőknek:**
- **Szórakozás**: [Dog CEO API](https://dog.ceo/dog-api/) véletlenszerű kutyás képekhez
- **Időjárás**: [OpenWeatherMap](https://openweathermap.org/api) aktuális időjárási adatokhoz
- **Idézetek**: [Quotable API](https://quotable.io/) inspiráló idézetekhez
- **Hírek**: [NewsAPI](https://newsapi.org/) aktuális hírekhez
- **Érdekes tények**: [Numbers API](http://numbersapi.com/) érdekes számadatokhoz

### 2. lépés: Tervezd meg a bővítményedet
Mielőtt kódolni kezdenél, válaszolj ezekre a tervezési kérdésekre:
- Milyen problémát old meg a bővítményed?
- Ki a célfelhasználó?
- Milyen adatokat fogsz tárolni a helyi tárolóban?
- Hogyan kezeled az API hibáit vagy korlátozásait?

### 3. lépés: Készítsd el a bővítményedet
A bővítményednek tartalmaznia kell:

**Kötelező funkciók:**
- Űrlapmezők a szükséges API paraméterekhez
- API integráció megfelelő hibakezeléssel
- Helyi tároló a felhasználói preferenciákhoz vagy API kulcsokhoz
- Tiszta, reszponzív felhasználói felület
- Betöltési állapotok és visszajelzés a felhasználóknak

**Kódolási követelmények:**
- Használj modern JavaScript (ES6+) funkciókat
- Használj async/await-et az API hívásokhoz
- Alkalmazz megfelelő hibakezelést try/catch blokkokkal
- Adj értelmes kommenteket a kódodhoz
- Kövesd az egységes kódformázást

### 4. lépés: Teszteld és finomítsd
- Teszteld a bővítményedet különböző bemenetekkel
- Kezeld a szélsőséges eseteket (nincs internetkapcsolat, érvénytelen API válaszok)
- Biztosítsd, hogy a bővítmény működjön böngésző újraindítása után is
- Adj felhasználóbarát hibaüzeneteket

## Bónusz kihívások

Emeld magasabb szintre a bővítményedet:
- Adj hozzá több API végpontot a gazdagabb funkcionalitás érdekében
- Valósíts meg adatgyorsítótárat az API hívások csökkentésére
- Hozz létre billentyűparancsokat gyakori műveletekhez
- Adj hozzá adatexport/import funkciókat
- Valósíts meg felhasználói testreszabási lehetőségeket

## Beküldési követelmények

1. **Működő böngészőbővítmény**, amely sikeresen integrálódik a választott API-val
2. **README fájl**, amely tartalmazza:
   - Melyik API-t választottad és miért
   - Hogyan telepíthető és használható a bővítmény
   - Bármilyen szükséges API kulcs vagy beállítás
   - Képernyőképek a bővítmény működéséről
3. **Tiszta, kommentált kód**, amely követi a modern JavaScript gyakorlatokat

## Értékelési szempontok

| Kritérium | Kiváló (90-100%) | Jó (80-89%) | Fejlődő (70-79%) | Kezdő (60-69%) |
|-----------|------------------|-------------|------------------|----------------|
| **API integráció** | Hibátlan API integráció átfogó hibakezeléssel és szélsőséges esetek kezelésével | Sikeres API integráció alapvető hibakezeléssel | Az API működik, de korlátozott hibakezeléssel | Jelentős problémák az API integrációval |
| **Kódminőség** | Tiszta, jól kommentált modern JavaScript, amely követi a legjobb gyakorlatokat | Jó kódstruktúra megfelelő kommentekkel | A kód működik, de jobb szervezésre szorul | Gyenge kódminőség minimális kommentekkel |
| **Felhasználói élmény** | Kidolgozott felület kiváló betöltési állapotokkal és felhasználói visszajelzéssel | Jó felület alapvető felhasználói visszajelzéssel | Alapvető felület, amely megfelelően működik | Gyenge felhasználói élmény zavaros felülettel |
| **Helyi tároló** | Kifinomult helyi tároló használat adatellenőrzéssel és kezelésével | Megfelelő helyi tároló implementáció kulcsfunkciókhoz | Alapvető helyi tároló implementáció | Minimális vagy helytelen helyi tároló használat |
| **Dokumentáció** | Átfogó README telepítési útmutatóval és képernyőképekkel | Jó dokumentáció, amely a legtöbb követelményt lefedi | Alapvető dokumentáció, amely hiányos részleteket tartalmaz | Gyenge vagy hiányzó dokumentáció |

## Kezdési tippek

1. **Kezdd egyszerűen**: Válassz egy API-t, amely nem igényel bonyolult hitelesítést
2. **Olvasd el a dokumentációt**: Alaposan értsd meg a választott API végpontjait és válaszait
3. **Tervezd meg a felületet**: Vázold fel a bővítményed felületét, mielőtt kódolni kezdenél
4. **Tesztelj gyakran**: Építs lépésről lépésre, és teszteld minden funkciót, ahogy hozzáadod
5. **Kezeld a hibákat**: Mindig számíts arra, hogy az API hívások sikertelenek lehetnek, és tervezz ennek megfelelően

## Források

- [Böngészőbővítmény dokumentáció](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Fetch API útmutató](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Helyi tároló oktatóanyag](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON feldolgozás és kezelés](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Érezd jól magad, és alkoss valami hasznosat és kreatívat! 🚀

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.