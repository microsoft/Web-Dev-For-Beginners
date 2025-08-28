<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fc6aef8ecfdd5b0ad2afa6e6ba52bfde",
  "translation_date": "2025-08-28T11:42:17+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "lt"
}
-->
# JavaScript pagrindai: Duomenų tipai

![JavaScript pagrindai - Duomenų tipai](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.lt.png)
> Sketchnote sukūrė [Tomomi Imura](https://twitter.com/girlie_mac)

## Klausimai prieš paskaitą
[Klausimai prieš paskaitą](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/7)

Ši pamoka apima JavaScript pagrindus – kalbą, kuri suteikia interaktyvumo internete.

> Šią pamoką galite rasti [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Kintamieji](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Kintamieji JavaScript")

[![Duomenų tipai JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Duomenų tipai JavaScript")

> 🎥 Spustelėkite aukščiau esančius paveikslėlius, kad peržiūrėtumėte vaizdo įrašus apie kintamuosius ir duomenų tipus.

Pradėkime nuo kintamųjų ir duomenų tipų, kurie juos užpildo!

## Kintamieji

Kintamieji saugo reikšmes, kurias galima naudoti ir keisti visame jūsų kode.

Kintamojo **sukūrimas** ir **deklaravimas** turi tokią sintaksę: **[raktinis žodis] [pavadinimas]**. Jis susideda iš dviejų dalių:

- **Raktinis žodis**. Raktiniai žodžiai gali būti `let` arba `var`.  

✅ Raktinis žodis `let` buvo pristatytas ES6 ir suteikia jūsų kintamajam vadinamąjį _blokų sritį_. Rekomenduojama naudoti `let` vietoj `var`. Blokų sritis bus aptarta išsamiau vėlesnėse dalyse.
- **Kintamojo pavadinimas**, tai pavadinimas, kurį pasirenkate patys.

### Užduotis - darbas su kintamaisiais

1. **Deklaruokite kintamąjį**. Deklaruokime kintamąjį naudodami `let` raktinį žodį:

    ```javascript
    let myVariable;
    ```

   `myVariable` dabar yra deklaruotas naudojant `let` raktinį žodį. Šiuo metu jis neturi reikšmės.

1. **Priskirkite reikšmę**. Išsaugokite reikšmę kintamajame naudodami `=` operatorių, po kurio nurodoma reikšmė.

    ```javascript
    myVariable = 123;
    ```

   > Pastaba: šioje pamokoje `=` reiškia "priskyrimo operatorių", naudojamą reikšmei priskirti kintamajam. Jis nereiškia lygybės.

   `myVariable` dabar yra *inicializuotas* su reikšme 123.

1. **Refaktorizuokite**. Pakeiskite savo kodą šiuo teiginiu.

    ```javascript
    let myVariable = 123;
    ```

    Aukščiau pateiktas pavyzdys vadinamas _aiški inicializacija_, kai kintamasis deklaruojamas ir tuo pačiu metu jam priskiriama reikšmė.

1. **Pakeiskite kintamojo reikšmę**. Pakeiskite kintamojo reikšmę šiuo būdu:

   ```javascript
   myVariable = 321;
   ```

   Kai kintamasis yra deklaruotas, jo reikšmę galite pakeisti bet kuriuo metu savo kode naudodami `=` operatorių ir naują reikšmę.

   ✅ Išbandykite! JavaScript galite rašyti tiesiai savo naršyklėje. Atidarykite naršyklės langą ir eikite į kūrėjų įrankius. Konsolėje rasite komandų eilutę; įveskite `let myVariable = 123`, paspauskite Enter, tada įveskite `myVariable`. Kas nutinka? Atkreipkite dėmesį, kad daugiau apie šias sąvokas sužinosite vėlesnėse pamokose.

## Konstantos

Konstantos deklaravimas ir inicializavimas vyksta taip pat kaip kintamųjų, išskyrus tai, kad naudojamas `const` raktinis žodis. Konstantos paprastai deklaruojamos didžiosiomis raidėmis.

```javascript
const MY_VARIABLE = 123;
```

Konstantos yra panašios į kintamuosius, tačiau yra dvi išimtys:

- **Privalo turėti reikšmę**. Konstantos turi būti inicializuotos, kitaip vykdant kodą įvyks klaida.
- **Nuorodos negalima keisti**. Konstantos nuorodos negalima keisti po inicializavimo, kitaip vykdant kodą įvyks klaida. Pažvelkime į du pavyzdžius:
   - **Paprasta reikšmė**. Šis veiksmas NĖRA leidžiamas:
   
      ```javascript
      const PI = 3;
      PI = 4; // not allowed
      ```
 
   - **Objekto nuoroda yra apsaugota**. Šis veiksmas NĖRA leidžiamas.
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // not allowed
      ```

    - **Objekto reikšmė nėra apsaugota**. Šis veiksmas YRA leidžiamas:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // allowed
      ```

      Aukščiau pateiktame pavyzdyje jūs keičiate objekto reikšmę, bet ne pačią nuorodą, todėl tai leidžiama.

   > Pastaba: `const` reiškia, kad nuoroda yra apsaugota nuo perrašymo. Tačiau reikšmė nėra _nekintama_ ir gali keistis, ypač jei tai sudėtinga struktūra, pvz., objektas.

## Duomenų tipai

Kintamieji gali saugoti įvairių tipų reikšmes, pvz., skaičius ir tekstą. Šie įvairūs reikšmių tipai vadinami **duomenų tipais**. Duomenų tipai yra svarbi programinės įrangos kūrimo dalis, nes jie padeda programuotojams priimti sprendimus, kaip kodas turėtų būti parašytas ir kaip programinė įranga turėtų veikti. Be to, kai kurie duomenų tipai turi unikalių savybių, kurios padeda transformuoti arba išgauti papildomą informaciją iš reikšmės.

✅ Duomenų tipai taip pat vadinami JavaScript duomenų primityvais, nes jie yra žemiausio lygio duomenų tipai, kuriuos teikia kalba. Yra 7 primityvūs duomenų tipai: string, number, bigint, boolean, undefined, null ir symbol. Skirkite minutę ir įsivaizduokite, ką kiekvienas iš šių primityvų galėtų reikšti. Kas yra `zebra`? O kaip `0`? `true`?

### Skaičiai

Ankstesniame skyriuje `myVariable` reikšmė buvo skaičiaus duomenų tipas.

`let myVariable = 123;`

Kintamieji gali saugoti visų tipų skaičius, įskaitant dešimtainius ar neigiamus skaičius. Skaičiai taip pat gali būti naudojami su aritmetiniais operatoriais, aptartais [kitame skyriuje](../../../../2-js-basics/1-data-types).

### Aritmetiniai operatoriai

Yra keli operatorių tipai, kuriuos galima naudoti atliekant aritmetines funkcijas, ir kai kurie iš jų pateikti čia:

| Simbolis | Aprašymas                                                               | Pavyzdys                          |
| -------- | ----------------------------------------------------------------------- | --------------------------------- |
| `+`      | **Sudėtis**: Apskaičiuoja dviejų skaičių sumą                           | `1 + 2 //tikėtinas atsakymas yra 3`   |
| `-`      | **Atimtis**: Apskaičiuoja dviejų skaičių skirtumą                       | `1 - 2 //tikėtinas atsakymas yra -1`  |
| `*`      | **Daugyba**: Apskaičiuoja dviejų skaičių sandaugą                       | `1 * 2 //tikėtinas atsakymas yra 2`   |
| `/`      | **Dalyba**: Apskaičiuoja dviejų skaičių dalmenį                         | `1 / 2 //tikėtinas atsakymas yra 0.5` |
| `%`      | **Liekana**: Apskaičiuoja dviejų skaičių dalybos liekaną                | `1 % 2 //tikėtinas atsakymas yra 1`   |

✅ Išbandykite! Išbandykite aritmetinę operaciją savo naršyklės konsolėje. Ar rezultatai jus nustebino?

### Eilutės

Eilutės yra simbolių rinkiniai, kurie yra tarp viengubų arba dvigubų kabučių.

- `'Tai yra eilutė'`
- `"Tai taip pat yra eilutė"`
- `let myString = 'Tai yra eilutės reikšmė, saugoma kintamajame';`

Nepamirškite naudoti kabučių rašydami eilutę, kitaip JavaScript laikys ją kintamojo pavadinimu.

### Eilučių formatavimas

Eilutės yra tekstinės ir kartais reikės jas formatuoti.

Norėdami **sujungti** dvi ar daugiau eilučių, naudokite `+` operatorių.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!

```

✅ Kodėl `1 + 1 = 2` JavaScript, bet `'1' + '1' = 11?` Pagalvokite apie tai. O kaip `'1' + 1`?

**Šablonų literatai** yra dar vienas būdas formatuoti eilutes, išskyrus tai, kad vietoj kabučių naudojama atgalinė kabutė. Viskas, kas nėra paprastas tekstas, turi būti dedama į vietos rezervatorius `${ }`. Tai apima bet kokius kintamuosius, kurie gali būti eilutės.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

Galite pasiekti savo formatavimo tikslus naudodami bet kurį metodą, tačiau šablonų literatai gerbs bet kokias tarpus ir eilutės pertraukas.

✅ Kada naudotumėte šablonų literatą, o kada paprastą eilutę?

### Buliai

Buliai gali turėti tik dvi reikšmes: `true` arba `false`. Buliai gali padėti priimti sprendimus, kurios kodo eilutės turėtų būti vykdomos, kai tam tikros sąlygos yra įvykdytos. Daugeliu atvejų [operatoriai](../../../../2-js-basics/1-data-types) padeda nustatyti buliaus reikšmę, ir dažnai pastebėsite bei rašysite kintamuosius, kurie yra inicializuojami arba jų reikšmės atnaujinamos naudojant operatorių.

- `let myTrueBool = true`
- `let myFalseBool = false`

✅ Kintamasis gali būti laikomas 'teisingu', jei jis įvertinamas kaip buliaus `true`. Įdomu tai, kad JavaScript [visos reikšmės yra teisingos, nebent apibrėžtos kaip klaidingos](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## 🚀 Iššūkis

JavaScript garsėja savo netikėtais būdais kartais tvarkyti duomenų tipus. Šiek tiek pasidomėkite šiais 'netikėtumais'. Pavyzdžiui: didžiųjų ir mažųjų raidžių jautrumas gali sukelti problemų! Išbandykite tai savo konsolėje: `let age = 1; let Age = 2; age == Age` (rezultatas `false` – kodėl?). Kokius kitus netikėtumus galite rasti?

## Klausimai po paskaitos
[Klausimai po paskaitos](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/8)

## Apžvalga ir savarankiškas mokymasis

Pažvelkite į [šį JavaScript užduočių sąrašą](https://css-tricks.com/snippets/javascript/) ir išbandykite vieną. Ką išmokote?

## Užduotis

[Duomenų tipų praktika](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.