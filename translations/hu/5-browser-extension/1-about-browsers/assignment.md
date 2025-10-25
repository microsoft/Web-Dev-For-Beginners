<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2025-10-24T20:39:35+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "hu"
}
-->
# Feladat: Alakítsd át a böngészőbővítményed stílusát

## Áttekintés

Most, hogy elkészítetted a szénlábnyom böngészőbővítményed HTML struktúráját, itt az ideje, hogy vizuálisan vonzóvá és felhasználóbaráttá tedd. A jó dizájn javítja a felhasználói élményt, és professzionálisabbá, valamint érdekesebbé teszi a bővítményt.

A bővítményed alap CSS stílusokkal érkezik, de ez a feladat arra ösztönöz, hogy egyedi vizuális identitást hozz létre, amely tükrözi a személyes stílusodat, miközben kiváló használhatóságot biztosít.

## Útmutató

### 1. rész: A jelenlegi dizájn elemzése

Mielőtt változtatásokat végeznél, vizsgáld meg a meglévő CSS struktúrát:

1. **Keresd meg** a CSS fájlokat a bővítmény projektedben
2. **Tekintsd át** a jelenlegi stílusmegközelítést és színsémát
3. **Azonosítsd** a fejlesztési lehetőségeket az elrendezésben, tipográfiában és vizuális hierarchiában
4. **Fontold meg**, hogyan támogatja a dizájn a felhasználói célokat (könnyű űrlapkitöltés és egyértelmű adatmegjelenítés)

### 2. rész: Saját stílus tervezése

Hozz létre egy összefüggő vizuális dizájnt, amely tartalmazza:

**Színséma:**
- Válassz egy elsődleges színpalettát, amely környezetvédelmi témákat tükröz
- Biztosíts megfelelő kontrasztot az akadálymentesség érdekében (használj eszközöket, mint például a WebAIM kontrasztellenőrzője)
- Fontold meg, hogyan fognak a színek kinézni különböző böngésző témákban

**Tipográfia:**
- Válassz jól olvasható betűtípusokat, amelyek kis bővítményméreteknél is jól működnek
- Alakíts ki egyértelmű hierarchiát megfelelő betűméretekkel és -súlyokkal
- Biztosítsd, hogy a szöveg világos és sötét böngésző témákban is olvasható maradjon

**Elrendezés és térközök:**
- Javítsd az űrlapelemek és az adatmegjelenítés vizuális szervezettségét
- Adj megfelelő paddinget és margókat a jobb olvashatóság érdekében
- Fontold meg a reszponzív dizájn elveit különböző képernyőméretekhez

### 3. rész: A dizájn megvalósítása

Módosítsd a CSS fájlokat a dizájnod megvalósításához:

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

**Kulcsfontosságú területek a stílushoz:**
- **Űrlapelemek**: Beviteli mezők, címkék és küldés gomb
- **Eredmények megjelenítése**: Adattároló, szövegstílus és betöltési állapotok
- **Interaktív elemek**: Hover-effektek, gombállapotok és átmenetek
- **Általános elrendezés**: Tároló térközei, háttérszínek és vizuális hierarchia

### 4. rész: Tesztelés és finomítás

1. **Építsd** meg a bővítményt az `npm run build` paranccsal
2. **Töltsd be** a frissített bővítményt a böngésződbe
3. **Teszteld** az összes vizuális állapotot (űrlapkitöltés, betöltés, eredmények megjelenítése, hibák)
4. **Ellenőrizd** az akadálymentességet a böngésző fejlesztői eszközeivel
5. **Finomítsd** a stílusokat a tényleges használat alapján

## Kreatív kihívások

### Alap szint
- Frissítsd a színeket és betűtípusokat, hogy összefüggő témát hozz létre
- Javítsd a térközöket és igazítást az interfész egészén
- Adj finom hover-effekteket az interaktív elemekhez

### Középszint
- Tervezd meg egyedi ikonokat vagy grafikákat a bővítményedhez
- Valósíts meg sima átmeneteket a különböző állapotok között
- Készíts egyedi betöltési animációt az API-hívásokhoz

### Haladó szint
- Tervezd meg többféle témaopciót (világos/sötét/magas kontraszt)
- Valósíts meg reszponzív dizájnt különböző böngészőablak méretekhez
- Adj mikrointerakciókat, amelyek javítják a felhasználói élményt

## Beküldési irányelvek

A kész feladatodnak tartalmaznia kell:

- **Módosított CSS fájlokat** az egyedi stílusoddal
- **Képernyőképeket**, amelyek bemutatják a bővítményt különböző állapotokban (űrlap, betöltés, eredmények)
- **Rövid leírást** (2-3 mondat), amely elmagyarázza a dizájnválasztásaidat és hogyan javítják a felhasználói élményt

## Értékelési szempontok

| Kritérium | Kiemelkedő (4) | Jó (3) | Fejlődő (2) | Kezdő (1) |
|-----------|----------------|---------|-------------|-----------|
| **Vizuális dizájn** | Kreatív, összefüggő dizájn, amely javítja a használhatóságot és erős dizájnelvűséget tükröz | Jó dizájnválasztások, következetes stílus és egyértelmű vizuális hierarchia | Alapvető dizájnjavítások némi következetlenséggel | Minimális stílusváltoztatások vagy következetlen dizájn |
| **Funkcionalitás** | Minden stílus tökéletesen működik különböző állapotokban és böngésző környezetekben | A stílusok jól működnek, kisebb problémák előfordulhatnak szélsőséges esetekben | A legtöbb stílus működőképes, néhány megjelenítési probléma van | Jelentős stílusproblémák, amelyek befolyásolják a használhatóságot |
| **Kódminőség** | Tiszta, jól szervezett CSS, jelentős osztálynevekkel és hatékony szelektorokkal | Jó CSS struktúra, megfelelő szelektorok és tulajdonságok használata | Elfogadható CSS némi szervezési problémával | Gyenge CSS struktúra vagy túl bonyolult stílus |
| **Akadálymentesség** | Kiváló színkontraszt, olvasható betűtípusok és figyelem a fogyatékkal élő felhasználókra | Jó akadálymentességi gyakorlatok, kisebb javítási lehetőségekkel | Alapvető akadálymentességi szempontok, néhány problémával | Korlátozott figyelem az akadálymentességi követelményekre |

## Tippek a sikerhez

> 💡 **Dizájn tipp**: Kezdd apró változtatásokkal, és fokozatosan haladj a drámaibb stílusok felé. A tipográfiában és térközökben végzett kisebb javítások gyakran nagy hatással vannak az észlelt minőségre.

**Követendő legjobb gyakorlatok:**
- **Teszteld** a bővítményt világos és sötét böngésző témákban
- **Használj** relatív egységeket (em, rem) a jobb skálázhatóság érdekében
- **Tartsd meg** a következetes térközöket CSS egyéni tulajdonságokkal
- **Fontold meg**, hogyan fog kinézni a dizájn a különböző vizuális igényű felhasználók számára
- **Ellenőrizd** a CSS-t, hogy megfeleljen a megfelelő szintaxisnak

> ⚠️ **Gyakori hiba**: Ne áldozd fel a használhatóságot a vizuális vonzerőért. A bővítményed legyen egyszerre szép és funkcionális.

**Ne feledd:**
- **Tartsd meg** a fontos információkat könnyen olvashatónak
- **Biztosítsd**, hogy a gombok és interaktív elemek könnyen kattinthatók legyenek
- **Tartsd meg** az egyértelmű vizuális visszajelzést a felhasználói műveletekhez
- **Teszteld** a dizájnt valós adatokkal, nem csak helykitöltő szöveggel

Sok sikert egy olyan böngészőbővítmény létrehozásához, amely egyszerre funkcionális és vizuálisan lenyűgöző!

---

**Felelősség kizárása**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Kritikus információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.