<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-22T15:17:49+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "tl"
}
-->
# Kasiyahan sa Mga Function

## Mga Instruksyon

Sa gawaing ito, magpapraktis kang gumawa ng iba't ibang uri ng function upang mapalakas ang mga konseptong natutunan mo tungkol sa mga JavaScript function, mga parameter, default na halaga, at mga return statement.

Gumawa ng JavaScript file na tinatawag na `functions-practice.js` at ipatupad ang mga sumusunod na function:

### Bahagi 1: Mga Pangunahing Function
1. **Gumawa ng function na tinatawag na `sayHello`** na walang tinatanggap na parameter at simpleng mag-log ng "Hello!" sa console.

2. **Gumawa ng function na tinatawag na `introduceYourself`** na tumatanggap ng parameter na `name` at mag-log ng mensahe tulad ng "Hi, my name is [name]" sa console.

### Bahagi 2: Mga Function na may Default na Parameter
3. **Gumawa ng function na tinatawag na `greetPerson`** na tumatanggap ng dalawang parameter: `name` (required) at `greeting` (opsyonal, default ay "Hello"). Ang function ay dapat mag-log ng mensahe tulad ng "[greeting], [name]!" sa console.

### Bahagi 3: Mga Function na Nagbabalik ng Halaga
4. **Gumawa ng function na tinatawag na `addNumbers`** na tumatanggap ng dalawang parameter (`num1` at `num2`) at ibinabalik ang kanilang kabuuan.

5. **Gumawa ng function na tinatawag na `createFullName`** na tumatanggap ng mga parameter na `firstName` at `lastName` at ibinabalik ang buong pangalan bilang isang string.

### Bahagi 4: Pagsasama-sama ng Lahat
6. **Gumawa ng function na tinatawag na `calculateTip`** na tumatanggap ng dalawang parameter: `billAmount` (required) at `tipPercentage` (opsyonal, default ay 15). Ang function ay dapat kalkulahin at ibalik ang halaga ng tip.

### Bahagi 5: Subukan ang Iyong Mga Function
Magdagdag ng mga tawag sa function upang subukan ang bawat isa sa iyong mga function at ipakita ang mga resulta gamit ang `console.log()`.

**Halimbawa ng mga tawag sa pagsubok:**
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

## Rubric

| Pamantayan | Napakahusay | Katamtaman | Kailangan ng Pagpapabuti |
| -------- | --------- | -------- | ----------------- |
| **Paglikha ng Function** | Lahat ng 6 na function ay tama ang implementasyon na may wastong syntax at tamang pangalan | 4-5 function ang tama ang implementasyon na may kaunting isyu sa syntax | 3 o mas kaunting function ang naipatupad o may malalaking isyu sa syntax |
| **Mga Parameter at Default na Halaga** | Tamang paggamit ng mga kinakailangang parameter, opsyonal na parameter, at default na halaga ayon sa itinakda | Tamang paggamit ng mga parameter ngunit maaaring may isyu sa default na halaga | Mali o kulang ang implementasyon ng mga parameter |
| **Mga Return Value** | Ang mga function na dapat magbalik ng halaga ay ginagawa ito nang tama, at ang mga function na hindi dapat magbalik ng halaga ay gumagawa lamang ng mga aksyon | Karamihan sa mga return value ay tama na may kaunting isyu | Malaking problema sa mga return statement |
| **Kalidad ng Code** | Malinis, maayos na code na may makabuluhang pangalan ng variable at tamang indentation | Gumagana ang code ngunit maaaring mas malinis o mas maayos | Mahirap basahin o hindi maayos ang pagkakaayos ng code |
| **Pagsubok** | Lahat ng function ay nasubukan gamit ang angkop na mga tawag sa function at malinaw na ipinakita ang mga resulta | Karamihan sa mga function ay nasubukan nang maayos | Limitado o maling pagsubok ng mga function |

## Mga Hamon na Bonus (Opsyonal)

Kung nais mong hamunin ang iyong sarili nang higit pa:

1. **Gumawa ng bersyon ng arrow function** ng isa sa iyong mga function
2. **Gumawa ng function na tumatanggap ng isa pang function bilang parameter** (tulad ng mga halimbawa ng `setTimeout` mula sa aralin)
3. **Magdagdag ng input validation** upang matiyak na ang iyong mga function ay maayos na humahawak sa mga maling input

---

> 💡 **Tip**: Tandaan na buksan ang developer console ng iyong browser (F12) upang makita ang output ng iyong mga `console.log()` na pahayag!

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.