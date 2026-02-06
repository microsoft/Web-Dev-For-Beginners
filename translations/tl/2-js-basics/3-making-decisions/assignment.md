# Paggawa ng Desisyon: Tagaproseso ng Grado ng Mag-aaral

## Mga Layunin sa Pagkatuto

Sa gawaing ito, magpapraktis ka ng mga konsepto sa paggawa ng desisyon mula sa araling ito sa pamamagitan ng paggawa ng programang nagpoproseso ng mga grado ng mag-aaral mula sa iba't ibang sistema ng pag-grado. Gagamit ka ng `if...else` statements, mga comparison operator, at mga logical operator upang matukoy kung aling mga mag-aaral ang pumasa sa kanilang mga kurso.

## Ang Hamon

Ikaw ay nagtatrabaho para sa isang paaralan na kamakailan lamang ay nagsanib sa isa pang institusyon. Ngayon, kailangan mong iproseso ang mga grado ng mag-aaral mula sa dalawang magkaibang sistema ng pag-grado at tukuyin kung sino ang mga pumasa. Ito ay isang perpektong pagkakataon upang magpraktis ng lohikal na kondisyon!

### Pag-unawa sa mga Sistema ng Pag-grado

#### Unang Sistema ng Pag-grado (Numeriko)
- Ang mga grado ay ibinibigay bilang mga numero mula 1-5
- **Pumasa na grado**: 3 pataas (3, 4, o 5)
- **Bagsak na grado**: Mas mababa sa 3 (1 o 2)

#### Ikalawang Sistema ng Pag-grado (Mga Letra)
- Ang mga grado ay gumagamit ng mga letra: `A`, `A-`, `B`, `B-`, `C`, `C-`
- **Pumasa na mga grado**: `A`, `A-`, `B`, `B-`, `C`, `C-` (lahat ng nakalistang grado ay pumasa)
- **Tandaan**: Ang sistemang ito ay walang mga bagsak na grado tulad ng `D` o `F`

### Ang Iyong Gagawin

Batay sa sumusunod na array na `allStudents` na kumakatawan sa lahat ng mag-aaral at kanilang mga grado, bumuo ng bagong array na `studentsWhoPass` na naglalaman ng lahat ng mag-aaral na pumasa ayon sa kani-kanilang sistema ng pag-grado.

```javascript
let allStudents = [
  'A',    // Letter grade - passing
  'B-',   // Letter grade - passing  
  1,      // Numeric grade - failing
  4,      // Numeric grade - passing
  5,      // Numeric grade - passing
  2       // Numeric grade - failing
];

let studentsWhoPass = [];
```

### Hakbang-hakbang na Paraan

1. **Mag-set up ng loop** upang dumaan sa bawat grado sa array na `allStudents`
2. **Suriin ang uri ng grado** (ito ba ay numero o string?)
3. **I-apply ang naaangkop na mga patakaran sa sistema ng pag-grado**:
   - Para sa mga numero: suriin kung ang grado ay >= 3
   - Para sa mga string: suriin kung ito ay isa sa mga wastong pumasa na letra ng grado
4. **Idagdag ang mga pumasa na grado** sa array na `studentsWhoPass`

### Mga Kapaki-pakinabang na Teknik sa Code

Gamitin ang mga konsepto ng JavaScript mula sa aralin:

- **typeof operator**: `typeof grade === 'number'` upang suriin kung ito ay numeriko na grado
- **Comparison operators**: `>=` upang ikumpara ang mga numeriko na grado
- **Logical operators**: `||` upang suriin ang maraming kondisyon ng letra ng grado
- **if...else statements**: upang pamahalaan ang iba't ibang sistema ng pag-grado
- **Array methods**: `.push()` upang idagdag ang mga pumasa na grado sa iyong bagong array

### Inaasahang Output

Kapag pinatakbo mo ang iyong programa, ang `studentsWhoPass` ay dapat maglaman ng: `['A', 'B-', 4, 5]`

**Bakit pumasa ang mga gradong ito:**
- `'A'` at `'B-'` ay wastong mga letra ng grado (lahat ng letra ng grado sa sistemang ito ay pumasa)
- `4` at `5` ay mga numeriko na grado >= 3
- `1` at `2` ay bagsak dahil ang mga ito ay numeriko na grado < 3

## Pagsubok sa Iyong Solusyon

Subukan ang iyong code sa iba't ibang senaryo:

```javascript
// Test with different grade combinations
let testGrades1 = ['A-', 3, 'C', 1, 'B'];
let testGrades2 = [5, 'A', 2, 'C-', 4];

// Your solution should work with any combination of valid grades
```

## Mga Hamon na Bonus

Kapag natapos mo na ang pangunahing gawain, subukan ang mga extension na ito:

1. **Magdagdag ng validation**: Suriin ang mga hindi wastong grado (tulad ng negatibong numero o hindi wastong mga letra)
2. **Bilangin ang mga istatistika**: Kalkulahin kung ilan ang pumasa kumpara sa mga bumagsak
3. **Pag-convert ng grado**: I-convert ang lahat ng grado sa isang solong numeriko na sistema (A=5, B=4, C=3, atbp.)

## Rubric

| Pamantayan | Napakahusay (4) | Mahusay (3) | Paunlad (2) | Nagsisimula (1) |
|------------|-----------------|-------------|-------------|-----------------|
| **Pag-andar** | Ang programa ay tamang nakikilala ang lahat ng pumasa na grado mula sa parehong sistema | Ang programa ay gumagana na may kaunting isyu o edge cases | Ang programa ay bahagyang gumagana ngunit may mga lohikal na error | Ang programa ay may malalaking error o hindi tumatakbo |
| **Estruktura ng Code** | Malinis, maayos na organisadong code na may tamang if...else na lohika | Magandang estruktura na may naaangkop na mga conditional statement | Katanggap-tanggap na estruktura na may ilang isyu sa organisasyon | Mahinang estruktura, mahirap sundan ang lohika |
| **Paggamit ng mga Konsepto** | Epektibong ginagamit ang mga comparison operator, logical operator, at conditional statements | Magandang paggamit ng mga konsepto ng aralin na may kaunting kakulangan | Bahagyang paggamit ng mga konsepto ng aralin ngunit kulang sa mahahalagang elemento | Limitadong paggamit ng mga konsepto ng aralin |
| **Paglutas ng Problema** | Nagpapakita ng malinaw na pag-unawa sa problema at eleganteng paraan ng solusyon | Magandang paraan ng paglutas ng problema na may solidong lohika | Katanggap-tanggap na paraan ng paglutas na may kaunting kalituhan | Hindi malinaw na paraan, hindi nagpapakita ng pag-unawa |

## Mga Alituntunin sa Pagsusumite

1. **Subukan ang iyong code** nang lubusan gamit ang mga ibinigay na halimbawa
2. **Magdagdag ng mga komento** na nagpapaliwanag ng iyong lohika, lalo na para sa mga conditional statement
3. **I-verify ang output** na tumutugma sa inaasahang resulta: `['A', 'B-', 4, 5]`
4. **Isaalang-alang ang mga edge cases** tulad ng mga walang laman na array o hindi inaasahang uri ng data

> 💡 **Tip**: Magsimula nang simple! Siguraduhing gumagana muna ang pangunahing functionality, pagkatapos ay magdagdag ng mas sopistikadong mga tampok. Tandaan, ang layunin ay magpraktis ng lohika sa paggawa ng desisyon gamit ang mga tool na natutunan mo sa araling ito.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.