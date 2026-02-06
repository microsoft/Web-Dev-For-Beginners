# Átfogó webes akadálymentességi audit

## Útmutató

Ebben a feladatban egy professzionális szintű akadálymentességi auditot kell elvégezned egy valódi weboldalon, alkalmazva az eddig tanult elveket és technikákat. Ez a gyakorlati tapasztalat mélyíti az akadálymentességi problémák és megoldások megértését.

Válassz egy weboldalt, amely láthatóan akadálymentességi problémákkal küzd – ez több tanulási lehetőséget kínál, mint egy már tökéletes oldal elemzése. Jó jelöltek lehetnek régebbi weboldalak, összetett webalkalmazások vagy gazdag multimédiás tartalommal rendelkező oldalak.

### 1. fázis: Stratégiai manuális értékelés

Mielőtt automatikus eszközökhöz nyúlnál, végezz átfogó manuális értékelést. Ez az emberközpontú megközelítés gyakran olyan problémákat tár fel, amelyeket az eszközök nem vesznek észre, és segít megérteni a valódi felhasználói élményt.

**🔍 Alapvető értékelési kritériumok:**

**Navigáció és struktúra:**
- Az egész oldalon navigálni tudsz kizárólag billentyűzettel (Tab, Shift+Tab, Enter, Space, nyílbillentyűk)?
- Láthatóak a fókuszjelzők minden interaktív elemen?
- A címsorok (H1-H6) logikus tartalmi vázlatot alkotnak?
- Vannak "ugrás a fő tartalomhoz" linkek?

**Vizuális akadálymentesség:**
- Megfelelő a színkontraszt az oldalon (minimum 4.5:1 normál szöveg esetén)?
- Az oldal kizárólag színre támaszkodik fontos információk közléséhez?
- Minden képhez tartozik megfelelő alternatív szöveg?
- A layout funkcionális marad, ha 200%-ra nagyítod?

**Tartalom és kommunikáció:**
- Vannak "kattints ide" vagy homályos link szövegek?
- Érthető a tartalom és a funkcionalitás vizuális támpontok nélkül?
- A űrlapmezők megfelelően vannak címkézve és csoportosítva?
- Az hibaüzenetek egyértelműek és hasznosak?

**Interaktív elemek:**
- Minden gomb és űrlapvezérlő működik kizárólag billentyűzettel?
- A dinamikus tartalomváltozások be vannak jelentve a képernyőolvasóknak?
- A modális párbeszédablakok és összetett widgetek követik a megfelelő akadálymentességi mintákat?

📝 **Dokumentáld az eredményeidet** konkrét példákkal, képernyőképekkel és oldalak URL-jeivel. Jegyezd fel a problémákat és a jól megvalósított elemeket is.

### 2. fázis: Átfogó automatikus tesztelés

Most validáld és bővítsd a manuális megállapításaidat iparági szabványú akadálymentességi tesztelő eszközök segítségével. Minden eszköznek megvannak a maga erősségei, így több eszköz használata teljes körű lefedettséget biztosít.

**🛠️ Kötelező tesztelő eszközök:**

1. **Lighthouse Accessibility Audit** (beépítve a Chrome/Edge DevTools-ba)
   - Futtass auditot több oldalon
   - Koncentrálj a konkrét mutatókra és ajánlásokra
   - Jegyezd fel az akadálymentességi pontszámot és a konkrét hibákat

2. **axe DevTools** (böngészőbővítmény - iparági szabvány)
   - Részletesebb hibadetektálás, mint a Lighthouse
   - Konkrét kódpéldákat nyújt a javításokhoz
   - WCAG 2.1 kritériumok szerint tesztel

3. **WAVE Web Accessibility Evaluator** (böngészőbővítmény)
   - Az akadálymentességi funkciók vizuális ábrázolása
   - Hibák és pozitív jellemzők kiemelése
   - Kiváló az oldalstruktúra megértéséhez

4. **Színkontraszt elemzők**
   - WebAIM Contrast Checker specifikus színpárokhoz
   - Böngészőbővítmények az oldal teljes körű elemzéséhez
   - Tesztelés WCAG AA és AAA szabványok szerint

**🎧 Valós segítő technológiai tesztelés:**
- **Képernyőolvasó tesztelés**: Használj NVDA-t (Windows), VoiceOver-t (Mac) vagy TalkBack-et (Android)
- **Csak billentyűzetes navigáció**: Húzd ki az egeret, és navigálj az egész oldalon
- **Nagyítás tesztelése**: Teszteld a funkcionalitást 200% és 400% nagyítási szinteken
- **Hangvezérlés tesztelése**: Ha elérhető, próbáld ki a hangvezérlési eszközöket

**📊 Szervezd az eredményeidet** egy fő táblázatba:
- Probléma leírása és helye
- Súlyossági szint (Kritikus/Magas/Közepes/Alacsony)
- Megsértett WCAG sikerkritérium
- Az eszköz, amely észlelte a problémát
- Képernyőképek és bizonyítékok

### 3. fázis: Átfogó megállapítások dokumentálása

Készíts egy professzionális akadálymentességi audit jelentést, amely bemutatja a technikai problémák és azok emberi hatásának megértését.

**📋 Kötelező jelentés szakaszok:**

1. **Vezetői összefoglaló** (1 oldal)
   - Weboldal URL és rövid leírás
   - Általános akadálymentességi érettségi szint
   - 3 legkritikusabb probléma
   - Becslés a fogyatékkal élő felhasználókra gyakorolt hatásról

2. **Módszertan** (½ oldal)
   - Tesztelési megközelítés és használt eszközök
   - Értékelt oldalak és eszköz/böngésző kombinációk
   - Értékelt szabványok (WCAG 2.1 AA)

3. **Részletes megállapítások** (2-3 oldal)
   - Problémák kategorizálása WCAG elvek szerint (Észlelhető, Működtethető, Érthető, Robusztus)
   - Képernyőképek és konkrét példák
   - Pozitív akadálymentességi jellemzők megjegyzése
   - Automatikus eszközök eredményeinek keresztellenőrzése

4. **Felhasználói hatás értékelése** (1 oldal)
   - Az azonosított problémák hatása különböző fogyatékossággal élő felhasználókra
   - Szenáriók, amelyek leírják a valós felhasználói élményeket
   - Üzleti hatás (jogi kockázat, SEO, felhasználói bázis bővítése)

**📸 Bizonyítékgyűjtés:**
- Képernyőképek az akadálymentességi problémákról
- Képernyőfelvételek problémás felhasználói folyamatokról
- Eszközjelentések (PDF formátumban mentve)
- Kódpéldák, amelyek bemutatják a problémákat

### 4. fázis: Professzionális javítási terv

Készíts egy stratégiai, prioritásos tervet az akadálymentességi problémák megoldására. Ez bemutatja, hogy képes vagy úgy gondolkodni, mint egy professzionális webfejlesztő, aki valódi üzleti korlátokkal szembesül.

**🎯 Készíts részletes javítási javaslatokat (minimum 10 probléma):**

**Minden azonosított problémához adj meg:**

- **Probléma leírása**: Egyértelmű magyarázat arról, hogy mi a hiba, és miért problémás
- **WCAG hivatkozás**: Megsértett sikerkritérium (pl. "2.4.4 Link Purpose (In Context) - A szint")
- **Felhasználói hatás**: Hogyan érinti ez a különböző fogyatékossággal élő embereket
- **Megoldás**: Konkrét kódváltoztatások, tervezési módosítások vagy folyamatjavítások
- **Prioritási szint**: Kritikus (alapvető használatot blokkol) / Magas (jelentős akadály) / Közepes (használhatósági probléma) / Alacsony (fejlesztés)
- **Megvalósítási erőfeszítés**: Idő/komplexitás becslés (Gyors megoldás / Közepes erőfeszítés / Jelentős átalakítás)
- **Tesztelési ellenőrzés**: Hogyan ellenőrizhető, hogy a javítás működik

**📈 Stratégiai megvalósítási fázisok:**

- **1. fázis (0-2 hét)**: Kritikus problémák, amelyek blokkolják az alapvető funkcionalitást
- **2. fázis (1-2 hónap)**: Magas prioritású fejlesztések a jobb felhasználói élmény érdekében
- **3. fázis (3-6 hónap)**: Közepes prioritású fejlesztések és folyamatjavítások
- **4. fázis (Folyamatos)**: Folyamatos monitorozás és fejlesztés

## Értékelési szempontok

Az akadálymentességi auditot technikai pontosság és professzionális prezentáció alapján értékeljük:

| Kritérium | Kiváló (90-100%) | Jó (80-89%) | Megfelelő (70-79%) | Fejlesztésre szorul (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Manuális tesztelés mélysége** | Átfogó értékelés, amely lefedi az összes POUR elvet részletes megfigyelésekkel és felhasználói szcenáriókkal | Jó lefedettség a legtöbb akadálymentességi területen, világos megállapításokkal és némi felhasználói hatáselemzéssel | Alapvető értékelés, amely lefedi a kulcsfontosságú területeket, megfelelő megfigyelésekkel | Korlátozott tesztelés, felszínes megfigyelések és minimális felhasználói hatás figyelembevétele |
| **Eszközhasználat és elemzés** | Minden szükséges eszköz hatékony használata, eredmények keresztellenőrzése, egyértelmű bizonyítékok és az eszközök korlátainak elemzése | A legtöbb eszköz használata jó dokumentációval, némi keresztellenőrzéssel és megfelelő bizonyítékokkal | Szükséges eszközök használata alapvető dokumentációval és némi bizonyítékkal | Minimális eszközhasználat, gyenge dokumentáció vagy hiányzó bizonyítékok |
| **Probléma azonosítása és kategorizálása** | 15+ konkrét probléma azonosítása az összes WCAG elv mentén, pontos kategorizálás, mély megértés | 10-14 probléma azonosítása a legtöbb WCAG elv mentén, jó kategorizálás, szilárd megértés | 7-9 probléma azonosítása megfelelő WCAG lefedettséggel és alapvető kategorizálással | <7 probléma azonosítása korlátozott terjedelemmel vagy gyenge kategorizálással |
| **Megoldások minősége és megvalósíthatósága** | 10+ részletes, cselekvésre alkalmas megoldás pontos WCAG hivatkozásokkal, reális megvalósítási időkerettel és ellenőrzési módszerekkel | 8-9 jól kidolgozott megoldás, többnyire pontos hivatkozásokkal és jó megvalósítási részletekkel | 6-7 alapvető megoldás némi részlettel és általában reális megközelítésekkel | <6 megoldás vagy elégtelen részletezés, irreális megvalósítások |
| **Professzionális kommunikáció** | Kiválóan szervezett, világosan megírt jelentés, amely tartalmazza a vezetői összefoglalót, megfelelő technikai nyelvezetet használ, és követi az üzleti dokumentumok szabványait | Jól szervezett, jó írásminőség, tartalmazza a legtöbb szükséges szakaszt, megfelelő hangnem | Megfelelően szervezett, elfogadható írásminőség, tartalmazza az alapvető szükséges szakaszokat | Gyenge szervezés, nem egyértelmű írás, vagy hiányzó kulcsszakaszok |
| **Valós alkalmazás** | Mély megértés az üzleti hatásokról, jogi szempontokról, felhasználói sokszínűségről és gyakorlati megvalósítási kihívásokról | Jó megértés a gyakorlati alkalmazásokról némi üzleti kontextussal | Alapvető megértés a valós alkalmazásokról | Korlátozott kapcsolat a gyakorlati alkalmazásokkal |

## Haladó kihívási lehetőségek

**🚀 Haladó kihívást kereső diákok számára:**

- **Összehasonlító elemzés**: Auditálj 2-3 versenytárs weboldalt, és hasonlítsd össze akadálymentességi érettségüket
- **Mobil akadálymentességi fókusz**: Mélyebb elemzés mobil-specifikus akadálymentességi problémákról Android TalkBack vagy iOS VoiceOver használatával
- **Nemzetközi perspektíva**: Kutass és alkalmazz különböző országok akadálymentességi szabványait (EN 301 549, Section 508, ADA)
- **Akadálymentességi nyilatkozat értékelése**: Értékeld a weboldal meglévő akadálymentességi nyilatkozatát (ha van) az eredményeid alapján

## Leadandó anyagok

Nyújts be egy átfogó akadálymentességi audit jelentést, amely professzionális szintű elemzést és gyakorlati megvalósítási tervet mutat be:

**📄 Végleges jelentés követelményei:**

1. **Vezetői összefoglaló** (1 oldal)
   - Weboldal áttekintése és akadálymentességi érettségi szint értékelése
   - Kulcsfontosságú megállapítások összefoglalása üzleti hatással
   - Ajánlott prioritási intézkedések

2. **Módszertan és hatókör** (1 oldal)
   - Tesztelési megközelítés, használt eszközök és értékelési kritériumok
   - Értékelt oldalak/szakaszok és esetleges korlátozások
   - Szabványok megfelelőségi keretrendszere (WCAG 2.1 AA)

3. **Részletes megállapítások jelentése** (3-4 oldal)
   - Manuális tesztelési megfigyelések felhasználói szcenáriókkal
   - Automatikus eszközök eredményei keresztellenőrzéssel
   - Problémák WCAG elvek szerint szervezve, bizonyítékokkal
   - Azonosított pozitív akadálymentességi jellemzők

4. **Stratégiai javítási terv** (3-4 oldal)
   - Prioritásos fejlesztési javaslatok (minimum 10)
   - Megvalósítási idővonal erőfeszítés becslésekkel
   - Sikerességi mutatók és ellenőrzési módszerek
   - Hosszú távú akadálymentességi karbantartási stratégia

5. **Támogató bizonyítékok** (Mellékletek)
   - Képernyőképek az akadálymentességi problémákról és tesztelő eszközökről
   - Kódpéldák, amelyek bemutatják a problémákat és megoldásokat
   - Eszközjelentések és audit összefoglalók
  

---

**Felelősségi nyilatkozat**:  
Ez a dokumentum az [Co-op Translator](https://github.com/Azure/co-op-translator) AI fordítási szolgáltatás segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.