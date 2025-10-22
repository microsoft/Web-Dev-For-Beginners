<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-22T15:16:29+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "tl"
}
-->
# Mga Pangunahing Kaalaman sa JavaScript: Mga Uri ng Data

![Mga Pangunahing Kaalaman sa JavaScript - Mga Uri ng Data](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

Ang mga uri ng data ay isa sa mga pangunahing konsepto sa JavaScript na makikita mo sa bawat programang isusulat mo. Isipin ang mga uri ng data na parang sistema ng pag-aayos na ginamit ng mga sinaunang librarian sa Alexandria – may partikular na lugar para sa mga scroll na naglalaman ng tula, matematika, at mga tala ng kasaysayan. Ang JavaScript ay nag-aayos ng impormasyon sa katulad na paraan gamit ang iba't ibang kategorya para sa iba't ibang uri ng data.

Sa araling ito, tatalakayin natin ang mga pangunahing uri ng data na nagpapagana sa JavaScript. Matututuhan mo kung paano hawakan ang mga numero, teksto, mga halaga ng true/false, at mauunawaan kung bakit mahalaga ang tamang pagpili ng uri para sa iyong mga programa. Maaaring mukhang abstrakto ang mga konseptong ito sa simula, ngunit sa pagsasanay, magiging natural na ito sa iyo.

Ang pag-unawa sa mga uri ng data ay magpapalinaw sa lahat ng iba pang aspeto ng JavaScript. Tulad ng mga arkitekto na kailangang maunawaan ang iba't ibang materyales sa pagtatayo bago magtayo ng katedral, ang mga pundasyong ito ang susuporta sa lahat ng iyong itatayo sa hinaharap.

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/)

Saklaw ng araling ito ang mga pangunahing kaalaman sa JavaScript, ang wika na nagbibigay ng interaktibidad sa web.

> Maaari mong kunin ang araling ito sa [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Mga Variable](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Mga Variable sa JavaScript")

[![Mga Uri ng Data sa JavaScript](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Mga Uri ng Data sa JavaScript")

> 🎥 I-click ang mga larawan sa itaas para sa mga video tungkol sa mga variable at uri ng data

Simulan natin sa mga variable at ang mga uri ng data na bumubuo sa mga ito!

## Mga Variable

Ang mga variable ay pangunahing bahagi ng programming. Tulad ng mga garapon na may label na ginamit ng mga alkemista noong medieval para mag-imbak ng iba't ibang sangkap, ang mga variable ay nagbibigay-daan sa iyo na mag-imbak ng impormasyon at bigyan ito ng deskriptibong pangalan para magamit mo ito sa hinaharap. Kailangang tandaan ang edad ng isang tao? I-imbak ito sa isang variable na tinatawag na `age`. Gusto mong subaybayan ang pangalan ng isang user? Itago ito sa isang variable na tinatawag na `userName`.

Tututukan natin ang modernong paraan ng paggawa ng mga variable sa JavaScript. Ang mga teknik na matututunan mo dito ay kumakatawan sa mga taon ng ebolusyon ng wika at pinakamahusay na kasanayan na binuo ng komunidad ng programming.

Ang paggawa at **pagdeklara** ng isang variable ay may sumusunod na syntax **[keyword] [name]**. Binubuo ito ng dalawang bahagi:

- **Keyword**. Gamitin ang `let` para sa mga variable na maaaring magbago, o `const` para sa mga halaga na mananatiling pareho.
- **Pangalan ng variable**, ito ay isang deskriptibong pangalan na pipiliin mo.

✅ Ang keyword na `let` ay ipinakilala sa ES6 at nagbibigay sa iyong variable ng tinatawag na _block scope_. Inirerekomenda na gamitin mo ang `let` o `const` sa halip na ang mas lumang keyword na `var`. Tatalakayin natin ang block scopes nang mas malalim sa mga susunod na bahagi.

### Gawain - Paggamit ng mga Variable

1. **Magdeklara ng isang variable**. Magsimula tayo sa paggawa ng ating unang variable:

    ```javascript
    let myVariable;
    ```

   **Ano ang nagagawa nito:**
   - Sinasabi nito sa JavaScript na gumawa ng isang storage location na tinatawag na `myVariable`
   - Naglalaan ang JavaScript ng espasyo sa memorya para sa variable na ito
   - Ang variable ay kasalukuyang walang halaga (undefined)

2. **Bigyan ito ng halaga**. Ngayon, maglagay tayo ng isang bagay sa ating variable:

    ```javascript
    myVariable = 123;
    ```

   **Paano gumagana ang assignment:**
   - Ang operator na `=` ay nag-a-assign ng halaga na 123 sa ating variable
   - Ang variable ay ngayon naglalaman ng halagang ito sa halip na undefined
   - Maaari mong i-reference ang halagang ito sa buong code gamit ang `myVariable`

   > Tandaan: ang paggamit ng `=` sa araling ito ay nangangahulugan na gumagamit tayo ng "assignment operator", na ginagamit upang magtakda ng halaga sa isang variable. Hindi ito nangangahulugang pagkakapantay-pantay.

3. **Gawin ito sa mas matalinong paraan**. Sa totoo lang, pagsamahin natin ang dalawang hakbang na iyon:

    ```javascript
    let myVariable = 123;
    ```

    **Mas epektibo ang pamamaraang ito:**
    - Nagdeklara ka ng variable at nag-a-assign ng halaga sa isang statement
    - Ito ang karaniwang kasanayan sa mga developer
    - Binabawasan nito ang haba ng code habang pinapanatili ang kalinawan

4. **Magbago ng isip**. Paano kung gusto nating mag-imbak ng ibang numero?

   ```javascript
   myVariable = 321;
   ```

   **Pag-unawa sa reassignment:**
   - Ang variable ay ngayon naglalaman ng 321 sa halip na 123
   - Ang dating halaga ay napalitan – ang mga variable ay nag-iimbak lamang ng isang halaga sa isang pagkakataon
   - Ang mutability na ito ang pangunahing katangian ng mga variable na idineklara gamit ang `let`

   ✅ Subukan ito! Maaari kang magsulat ng JavaScript mismo sa iyong browser. Buksan ang isang browser window at pumunta sa Developer Tools. Sa console, makikita mo ang isang prompt; i-type ang `let myVariable = 123`, pindutin ang return, pagkatapos ay i-type ang `myVariable`. Ano ang nangyayari? Tandaan, matututunan mo ang higit pa tungkol sa mga konseptong ito sa mga susunod na aralin.

## Mga Constants

Minsan kailangan mong mag-imbak ng impormasyon na hindi dapat magbago habang tumatakbo ang programa. Isipin ang mga constants na parang mga prinsipyo ng matematika na itinatag ni Euclid sa sinaunang Greece – kapag napatunayan at naitala, nananatili itong hindi nagbabago para sa lahat ng hinaharap na sanggunian.

Ang mga constants ay gumagana nang katulad sa mga variable, ngunit may mahalagang limitasyon: kapag na-assign mo na ang kanilang halaga, hindi na ito maaaring baguhin. Ang immutability na ito ay tumutulong na maiwasan ang mga aksidenteng pagbabago sa mga kritikal na halaga sa iyong programa.

Ang deklarasyon at initialization ng isang constant ay sumusunod sa parehong mga konsepto ng isang variable, maliban sa paggamit ng keyword na `const`. Karaniwang idinedeklara ang mga constants gamit ang lahat ng uppercase na letra.

```javascript
const MY_VARIABLE = 123;
```

**Ano ang ginagawa ng code na ito:**
- **Gumagawa** ng constant na pinangalanang `MY_VARIABLE` na may halagang 123
- **Gumagamit** ng uppercase naming convention para sa mga constants
- **Pinipigilan** ang anumang mga pagbabago sa halagang ito sa hinaharap

Ang mga constants ay may dalawang pangunahing tuntunin:

- **Dapat mong bigyan ito ng halaga kaagad** – walang mga empty constants na pinapayagan!
- **Hindi mo maaaring baguhin ang halagang iyon** – magtapon ng error ang JavaScript kung susubukan mo. Tingnan natin ang ibig kong sabihin:

   **Simpleng halaga** - Ang sumusunod ay HINDI pinapayagan:
   
      ```javascript
      const PI = 3;
      PI = 4; // hindi pinapayagan
      ```

   **Ano ang dapat tandaan:**
   - **Mga pagtatangka** na i-reassign ang isang constant ay magdudulot ng error
   - **Pinoprotektahan** ang mahahalagang halaga mula sa aksidenteng pagbabago
   - **Tinitiyak** na ang halaga ay nananatiling pare-pareho sa buong programa
 
   **Ang reference ng object ay protektado** - Ang sumusunod ay HINDI pinapayagan:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // hindi pinapayagan
      ```

   **Pag-unawa sa mga konseptong ito:**
   - **Pinipigilan** ang pagpapalit ng buong object ng bago
   - **Pinoprotektahan** ang reference sa orihinal na object
   - **Pinapanatili** ang pagkakakilanlan ng object sa memorya

    **Ang halaga ng object ay hindi protektado** - Ang sumusunod ay PINAPAYAGAN:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // pinapayagan
      ```

      **Pag-unawa sa nangyayari dito:**
      - **Binabago** ang halaga ng property sa loob ng object
      - **Pinapanatili** ang parehong reference ng object
      - **Ipinapakita** na ang mga nilalaman ng object ay maaaring magbago habang ang reference ay nananatiling pareho

   > Tandaan, ang `const` ay nangangahulugan na ang reference ay protektado mula sa reassignment. Ang halaga ay hindi _immutable_ at maaaring magbago, lalo na kung ito ay isang kumplikadong construct tulad ng isang object.

## Mga Uri ng Data

Ang JavaScript ay nag-aayos ng impormasyon sa iba't ibang kategorya na tinatawag na mga uri ng data. Ang konseptong ito ay kahalintulad sa kung paano ikinategorya ng mga sinaunang iskolar ang kaalaman – pinagkaiba ni Aristotle ang iba't ibang uri ng pangangatwiran, alam na ang mga prinsipyo ng lohika ay hindi maaaring pantay na ilapat sa tula, matematika, at natural na pilosopiya.

Mahalaga ang mga uri ng data dahil ang iba't ibang operasyon ay gumagana sa iba't ibang uri ng impormasyon. Tulad ng hindi mo maaaring magsagawa ng arithmetic sa pangalan ng isang tao o mag-ayos ng isang equation sa matematika, ang JavaScript ay nangangailangan ng tamang uri ng data para sa bawat operasyon. Ang pag-unawa dito ay nakakaiwas sa mga error at nagpapabuti sa pagiging maaasahan ng iyong code.

Ang mga variable ay maaaring mag-imbak ng maraming iba't ibang uri ng halaga, tulad ng mga numero at teksto. Ang iba't ibang uri ng mga halagang ito ay kilala bilang **uri ng data**. Ang mga uri ng data ay mahalagang bahagi ng pagbuo ng software dahil nakakatulong ito sa mga developer na magdesisyon kung paano dapat isulat ang code at kung paano dapat tumakbo ang software. Bukod dito, ang ilang mga uri ng data ay may natatanging mga tampok na tumutulong sa pagbabago o pagkuha ng karagdagang impormasyon sa isang halaga.

✅ Ang mga Uri ng Data ay tinutukoy din bilang mga primitive ng data sa JavaScript, dahil ang mga ito ang pinakamababang antas ng mga uri ng data na ibinibigay ng wika. Mayroong 7 primitive na uri ng data: string, number, bigint, boolean, undefined, null, at symbol. Maglaan ng sandali upang mailarawan kung ano ang maaaring kumatawan sa bawat isa sa mga primitive na ito. Ano ang `zebra`? Paano naman ang `0`? `true`?

### Mga Numero

Ang mga numero ang pinakasimple sa mga uri ng data sa JavaScript. Kung nagtatrabaho ka man sa mga buong numero tulad ng 42, mga decimal tulad ng 3.14, o mga negatibong numero tulad ng -5, pare-pareho ang paghawak ng JavaScript sa mga ito.

Tandaan ang ating variable mula kanina? Ang 123 na ating iniimbak ay talagang isang uri ng data na numero:

```javascript
let myVariable = 123;
```

**Mga pangunahing katangian:**
- Awtomatikong kinikilala ng JavaScript ang mga numerong halaga
- Maaari kang magsagawa ng mga operasyong matematika gamit ang mga variable na ito
- Walang kinakailangang explicit na deklarasyon ng uri

Ang mga variable ay maaaring mag-imbak ng lahat ng uri ng mga numero, kabilang ang mga decimal o negatibong numero. Ang mga numero ay maaari ring gamitin sa mga arithmetic operator, na tatalakayin sa [susunod na seksyon](../../../../2-js-basics/1-data-types).

### Mga Arithmetic Operator

Ang mga arithmetic operator ay nagbibigay-daan sa iyo na magsagawa ng mga kalkulasyong matematika sa JavaScript. Ang mga operator na ito ay sumusunod sa parehong mga prinsipyo na ginamit ng mga matematikong sa loob ng maraming siglo – ang parehong mga simbolo na lumitaw sa mga gawa ng mga iskolar tulad ni Al-Khwarizmi, na bumuo ng notasyong algebra.

Ang mga operator ay gumagana tulad ng inaasahan mo mula sa tradisyunal na matematika: plus para sa addition, minus para sa subtraction, at iba pa.

Mayroong ilang mga uri ng operator na maaaring gamitin kapag nagsasagawa ng mga arithmetic function, at ilan ay nakalista dito:

| Simbolo | Paglalarawan                                                              | Halimbawa                          |
| ------- | ------------------------------------------------------------------------- | ---------------------------------- |
| `+`     | **Addition**: Kinakalkula ang kabuuan ng dalawang numero                  | `1 + 2 //inaasahang sagot ay 3`    |
| `-`     | **Subtraction**: Kinakalkula ang pagkakaiba ng dalawang numero            | `1 - 2 //inaasahang sagot ay -1`   |
| `*`     | **Multiplication**: Kinakalkula ang produkto ng dalawang numero           | `1 * 2 //inaasahang sagot ay 2`    |
| `/`     | **Division**: Kinakalkula ang quotient ng dalawang numero                 | `1 / 2 //inaasahang sagot ay 0.5`  |
| `%`     | **Remainder**: Kinakalkula ang natitira mula sa division ng dalawang numero| `1 % 2 //inaasahang sagot ay 1`    |

✅ Subukan ito! Subukan ang isang arithmetic operation sa console ng iyong browser. Ikaw ba ay nagulat sa mga resulta?

### Mga String

Sa JavaScript, ang tekstuwal na data ay kinakatawan bilang mga string. Ang terminong "string" ay nagmula sa konsepto ng mga karakter na magkakasunod na pinagsama-sama, tulad ng paraan ng mga tagasulat sa mga monasteryo noong medieval na nag-uugnay ng mga letra upang bumuo ng mga salita at pangungusap sa kanilang mga manuskrito.

Ang mga string ay mahalaga sa web development. Ang bawat piraso ng teksto na ipinapakita sa isang website – mga username, label ng button, mga mensahe ng error, nilalaman – ay hinahawakan bilang string data. Ang pag-unawa sa mga string ay mahalaga para sa paggawa ng functional na user interfaces.

Ang mga string ay mga set ng mga karakter na nakapaloob sa pagitan ng single o double quotes.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Pag-unawa sa mga konseptong ito:**
- **Gumagamit** ng single quotes `'` o double quotes `"` upang tukuyin ang mga string
- **Nag-iimbak** ng tekstuwal na data na maaaring maglaman ng mga letra, numero, at simbolo
- **Nag-a-assign** ng mga halaga ng string sa mga variable para magamit sa hinaharap
- **Nangangailangan** ng mga quotes upang maiba ang teksto mula sa mga pangalan ng variable

Tandaan na gumamit ng mga quotes kapag nagsusulat ng string, kung hindi, iisipin ng JavaScript na ito ay pangalan ng variable.

### Pag-format ng mga String

Ang manipulasyon ng string ay nagbibigay-daan sa iyo na pagsamahin ang mga elemento ng teksto, isama ang mga variable, at lumikha ng dynamic na nilalaman na tumutugon sa estado ng programa. Ang teknik na ito ay nagbibigay-daan sa iyo na bumuo ng teksto nang programmatically.

Kadalasan kailangan mong pagsamahin ang maraming string – ang prosesong ito ay tinatawag na concatenation.

Upang **i-concatenate** ang dalawa o higit pang mga string, o pagsamahin ang mga ito, gamitin ang operator na `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Hakbang-hakbang, narito ang nangyayari:**
- **Pinagsasama** ang maraming string gamit ang operator na `+`
- **Pinagsasama** ang mga string nang direkta nang walang mga espasyo sa unang halimbawa
- **Nagdaragdag** ng mga espasyo `" "` sa pagitan ng mga string para sa readability
- **Naglalagay** ng mga bantas tulad ng mga kuwit upang lumikha ng tamang pag-format

✅ Bakit `1 + 1 = 2` sa JavaScript, ngunit `'1' + '1' = 11?` Pag-isipan ito. Paano naman ang `'1' + 1`?

**Template literals** ay isa pang paraan upang mag-format ng mga string, maliban sa halip na quotes, ginagamit ang backtick. Anumang hindi plain text ay kailangang ilagay sa loob ng mga placeholder `${ }`. Kasama rito ang anumang mga variable na maaaring mga string.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Unawain natin ang bawat bahagi:**
- **Gumagamit** ng backticks `` ` `` sa halip na regular na quotes upang lumikha ng template literals
- **Nag-eembed** ng mga variable nang direkta gamit ang placeholder syntax na `${}`
- **Pinapanatili** ang mga espasyo at pag-format nang eksakto tulad ng isinulat
- **Nagbibigay** ng mas
Maaari mong makamit ang iyong mga layunin sa pag-format gamit ang alinmang paraan, ngunit ang template literals ay igagalang ang anumang espasyo at mga linya ng pag-break.

✅ Kailan mo gagamitin ang template literal kumpara sa plain string?

### Booleans

Ang Booleans ay kumakatawan sa pinakasimpleng anyo ng data: maaari lamang itong maglaman ng isa sa dalawang halaga – `true` o `false`. Ang sistemang binary logic na ito ay nagmula sa gawa ni George Boole, isang matematikong noong ika-19 na siglo na bumuo ng Boolean algebra.

Sa kabila ng kanilang pagiging simple, mahalaga ang booleans para sa lohika ng programa. Pinapayagan nila ang iyong code na gumawa ng desisyon batay sa mga kondisyon – kung naka-log in ang isang user, kung na-click ang isang button, o kung natugunan ang ilang pamantayan.

Ang Booleans ay maaari lamang magkaroon ng dalawang halaga: `true` o `false`. Ang Booleans ay makakatulong sa paggawa ng desisyon kung aling mga linya ng code ang dapat tumakbo kapag natugunan ang ilang mga kondisyon. Sa maraming kaso, ang [operators](../../../../2-js-basics/1-data-types) ay tumutulong sa pagtatakda ng halaga ng Boolean at madalas mong mapapansin at isusulat ang mga variable na ini-initialize o ang kanilang mga halaga ay ina-update gamit ang operator.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**Sa itaas, ginawa natin ang sumusunod:**
- **Lumikha** ng variable na nag-iimbak ng Boolean value na `true`
- **Ipinakita** kung paano mag-imbak ng Boolean value na `false`
- **Ginamit** ang eksaktong mga keyword na `true` at `false` (hindi kailangan ng quotes)
- **Ipinaghanda** ang mga variable na ito para sa paggamit sa mga conditional statements

✅ Ang isang variable ay maaaring ituring na 'truthy' kung ito ay nag-e-evaluate sa boolean na `true`. Nakakatuwa, sa JavaScript, [lahat ng mga halaga ay truthy maliban kung tinukoy bilang falsy](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang tapusin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng personal information manager na nagpapakita ng lahat ng uri ng JavaScript data na natutunan mo sa araling ito habang hinahawakan ang mga totoong senaryo ng data.

**Prompt:** Gumawa ng JavaScript program na lumilikha ng isang user profile object na naglalaman ng: pangalan ng tao (string), edad (number), status bilang estudyante (boolean), mga paboritong kulay bilang array, at isang address object na may mga property na street, city, at zip code. Isama ang mga function upang ipakita ang impormasyon ng profile at i-update ang mga indibidwal na field. Siguraduhing ipakita ang string concatenation, template literals, arithmetic operations gamit ang edad, at boolean logic para sa status bilang estudyante.

Alamin pa ang tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## 🚀 Hamon

Ang JavaScript ay may ilang mga behavior na maaaring magulat ang mga developer. Narito ang isang klasikong halimbawa upang tuklasin: subukang i-type ito sa iyong browser console: `let age = 1; let Age = 2; age == Age` at obserbahan ang resulta. Nagbabalik ito ng `false` – kaya mo bang tukuyin kung bakit?

Ito ay kumakatawan sa isa sa maraming mga behavior ng JavaScript na mahalagang maunawaan. Ang pagiging pamilyar sa mga quirks na ito ay makakatulong sa iyo na magsulat ng mas maaasahang code at mas epektibong mag-debug ng mga isyu.

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app)

## Review at Pag-aaral sa Sarili

Tingnan ang [listahan ng mga JavaScript exercises](https://css-tricks.com/snippets/javascript/) at subukan ang isa. Ano ang natutunan mo?

## Takdang-Aralin

[Data Types Practice](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.