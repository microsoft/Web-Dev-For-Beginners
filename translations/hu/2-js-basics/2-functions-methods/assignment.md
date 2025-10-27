<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-24T19:51:25+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "hu"
}
-->
# Szórakozás a függvényekkel

## Útmutató

Ebben a feladatban különböző típusú függvények létrehozását fogod gyakorolni, hogy megerősítsd a JavaScript függvényekről, paraméterekről, alapértelmezett értékekről és visszatérési értékekről tanultakat.

Hozz létre egy JavaScript fájlt `functions-practice.js` néven, és valósítsd meg az alábbi függvényeket:

### 1. rész: Alapvető függvények
1. **Hozz létre egy `sayHello` nevű függvényt**, amely nem fogad paramétereket, és egyszerűen kiírja a konzolra: "Hello!".

2. **Hozz létre egy `introduceYourself` nevű függvényt**, amely egy `name` paramétert fogad, és kiír egy üzenetet a konzolra, például: "Szia, a nevem [name]".

### 2. rész: Függvények alapértelmezett paraméterekkel
3. **Hozz létre egy `greetPerson` nevű függvényt**, amely két paramétert fogad: `name` (kötelező) és `greeting` (opcionális, alapértelmezett értéke "Hello"). A függvénynek ki kell írnia egy üzenetet a konzolra, például: "[greeting], [name]!".

### 3. rész: Függvények, amelyek értéket adnak vissza
4. **Hozz létre egy `addNumbers` nevű függvényt**, amely két paramétert (`num1` és `num2`) fogad, és visszaadja azok összegét.

5. **Hozz létre egy `createFullName` nevű függvényt**, amely `firstName` és `lastName` paramétereket fogad, és visszaadja a teljes nevet egyetlen sztringként.

### 4. rész: Mindent összekeverve
6. **Hozz létre egy `calculateTip` nevű függvényt**, amely két paramétert fogad: `billAmount` (kötelező) és `tipPercentage` (opcionális, alapértelmezett értéke 15). A függvénynek ki kell számítania és vissza kell adnia a borravaló összegét.

### 5. rész: Teszteld a függvényeidet
Adj hozzá függvényhívásokat, hogy teszteld az összes függvényt, és jelenítsd meg az eredményeket a `console.log()` segítségével.

**Példa teszthívások:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Értékelési szempontok

| Kritérium | Kiváló | Megfelelő | Fejlesztésre szorul |
| --------- | ------- | --------- | ------------------- |
| **Függvények létrehozása** | Mind a 6 függvény helyesen van megvalósítva, megfelelő szintaxissal és elnevezési konvenciókkal | 4-5 függvény helyesen van megvalósítva, kisebb szintaxis hibákkal | 3 vagy kevesebb függvény van megvalósítva, vagy jelentős szintaxis hibák |
| **Paraméterek és alapértelmezett értékek** | A kötelező paraméterek, opcionális paraméterek és alapértelmezett értékek helyesen vannak használva | A paraméterek helyesen vannak használva, de lehetnek problémák az alapértelmezett értékekkel | Hibás vagy hiányzó paraméterek megvalósítása |
| **Visszatérési értékek** | Azok a függvények, amelyeknek vissza kell térniük értékkel, helyesen teszik, és azok, amelyeknek nem kell visszatérniük, csak műveleteket végeznek | A legtöbb visszatérési érték helyes, kisebb problémákkal | Jelentős problémák a visszatérési értékekkel |
| **Kódminőség** | Tiszta, jól szervezett kód, értelmes változónevekkel és megfelelő behúzással | A kód működik, de lehetne tisztább vagy jobban szervezett | A kód nehezen olvasható vagy rosszul strukturált |
| **Tesztelés** | Minden függvény tesztelve van megfelelő függvényhívásokkal, és az eredmények egyértelműen megjelennek | A legtöbb függvény megfelelően van tesztelve | Korlátozott vagy hibás függvénytesztelés |

## Bónusz kihívások (opcionális)

Ha szeretnéd magad tovább fejleszteni:

1. **Hozz létre egy nyílfüggvény verziót** az egyik függvényedből
2. **Hozz létre egy függvényt, amely egy másik függvényt fogad paraméterként** (például a `setTimeout` példákhoz hasonlóan a leckében)
3. **Adj hozzá bemeneti validációt**, hogy biztosítsd, hogy a függvényeid megfelelően kezeljék az érvénytelen bemeneteket

---

> 💡 **Tipp**: Ne felejtsd el megnyitni a böngésződ fejlesztői konzolját (F12), hogy lásd a `console.log()` utasítások kimenetét!

---

**Felelősség kizárása**:  
Ez a dokumentum az AI fordítási szolgáltatás [Co-op Translator](https://github.com/Azure/co-op-translator) segítségével lett lefordítva. Bár törekszünk a pontosságra, kérjük, vegye figyelembe, hogy az automatikus fordítások hibákat vagy pontatlanságokat tartalmazhatnak. Az eredeti dokumentum az eredeti nyelvén tekintendő hiteles forrásnak. Fontos információk esetén javasolt professzionális emberi fordítást igénybe venni. Nem vállalunk felelősséget semmilyen félreértésért vagy téves értelmezésért, amely a fordítás használatából eredhet.