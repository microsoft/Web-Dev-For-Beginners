# Gumawa ng API

## Pangkalahatang-ideya

Ang mga API ay nagbibigay ng walang katapusang posibilidad para sa malikhaing web development! Sa gawaing ito, pipili ka ng isang external na API at gagawa ng browser extension na naglutas ng totoong problema o nagbibigay ng mahalagang functionality sa mga user.

## Mga Instruksyon

### Hakbang 1: Piliin ang Iyong API
Pumili ng API mula sa curated [listahan ng mga libreng pampublikong API](https://github.com/public-apis/public-apis). Isaalang-alang ang mga kategoryang ito:

**Mga sikat na opsyon para sa mga baguhan:**
- **Aliwan**: [Dog CEO API](https://dog.ceo/dog-api/) para sa random na mga larawan ng aso
- **Panahon**: [OpenWeatherMap](https://openweathermap.org/api) para sa kasalukuyang datos ng panahon
- **Mga Quote**: [Quotable API](https://quotable.io/) para sa mga inspirasyonal na quote
- **Balita**: [NewsAPI](https://newsapi.org/) para sa kasalukuyang mga headline
- **Mga Nakakatuwang Kaalaman**: [Numbers API](http://numbersapi.com/) para sa mga kawili-wiling kaalaman tungkol sa numero

### Hakbang 2: Planuhin ang Iyong Extension
Bago mag-code, sagutin ang mga tanong sa pagpaplano:
- Anong problema ang nilulutas ng iyong extension?
- Sino ang target na user mo?
- Anong datos ang itatago mo sa local storage?
- Paano mo haharapin ang mga pagkabigo sa API o mga limitasyon sa rate?

### Hakbang 3: Gawin ang Iyong Extension
Ang iyong extension ay dapat maglaman ng:

**Mga Kinakailangang Tampok:**
- Mga input ng form para sa anumang kinakailangang parameter ng API
- Integrasyon ng API na may tamang paghawak ng error
- Local storage para sa mga preference ng user o mga API key
- Malinis, responsive na user interface
- Loading states at feedback para sa user

**Mga Kinakailangan sa Code:**
- Gumamit ng modernong JavaScript (ES6+) na mga tampok
- Ipatupad ang async/await para sa mga tawag sa API
- Maglagay ng tamang paghawak ng error gamit ang try/catch blocks
- Magdagdag ng makabuluhang mga komento na nagpapaliwanag ng iyong code
- Sundin ang pare-parehong pag-format ng code

### Hakbang 4: Subukan at Pagandahin
- Subukan ang iyong extension gamit ang iba't ibang input
- Harapin ang mga edge case (walang internet, hindi wastong tugon ng API)
- Siguraduhing gumagana ang iyong extension pagkatapos ng pag-restart ng browser
- Magdagdag ng user-friendly na mga mensahe ng error

## Mga Hamon na Bonus

Dalhin ang iyong extension sa mas mataas na antas:
- Magdagdag ng maraming endpoint ng API para sa mas masaganang functionality
- Ipatupad ang caching ng datos upang mabawasan ang mga tawag sa API
- Gumawa ng mga shortcut sa keyboard para sa mga karaniwang aksyon
- Magdagdag ng mga tampok sa pag-export/import ng datos
- Ipatupad ang mga opsyon sa pagpapasadya para sa user

## Mga Kinakailangan sa Pagsusumite

1. **Gumaganang browser extension** na matagumpay na isinama sa napiling API
2. **README file** na nagpapaliwanag:
   - Aling API ang pinili mo at bakit
   - Paano i-install at gamitin ang iyong extension
   - Anumang API key o setup na kinakailangan
   - Mga screenshot ng iyong extension habang ginagamit
3. **Malinis, may komento na code** na sumusunod sa modernong mga kasanayan sa JavaScript

## Rubric

| Pamantayan | Napakahusay (90-100%) | Mahusay (80-89%) | Paunlarin (70-79%) | Nagsisimula (60-69%) |
|------------|-----------------------|------------------|--------------------|----------------------|
| **Integrasyon ng API** | Perpektong integrasyon ng API na may komprehensibong paghawak ng error at pamamahala ng edge case | Matagumpay na integrasyon ng API na may pangunahing paghawak ng error | Gumagana ang API ngunit may limitadong paghawak ng error | May malalaking isyu ang integrasyon ng API |
| **Kalidad ng Code** | Malinis, may komento na modernong JavaScript na sumusunod sa pinakamahusay na kasanayan | Magandang istruktura ng code na may sapat na mga komento | Gumagana ang code ngunit nangangailangan ng mas mahusay na organisasyon | Mahinang kalidad ng code na may kaunting mga komento |
| **Karanasan ng User** | Pinakinis na interface na may mahusay na loading states at feedback para sa user | Magandang interface na may pangunahing feedback para sa user | Pangunahing interface na gumagana nang maayos | Mahinang karanasan ng user na may nakakalitong interface |
| **Local Storage** | Sopistikadong paggamit ng local storage na may validation at pamamahala ng datos | Tamang implementasyon ng local storage para sa mga pangunahing tampok | Pangunahing implementasyon ng local storage | Minimal o maling paggamit ng local storage |
| **Dokumentasyon** | Komprehensibong README na may mga tagubilin sa setup at mga screenshot | Magandang dokumentasyon na sumasaklaw sa karamihan ng mga kinakailangan | Pangunahing dokumentasyon na kulang sa ilang detalye | Mahina o nawawalang dokumentasyon |

## Mga Tip sa Pagsisimula

1. **Magsimula nang simple**: Pumili ng API na hindi nangangailangan ng kumplikadong authentication
2. **Basahin ang mga dokumento**: Lubusang unawain ang mga endpoint at tugon ng napiling API
3. **Planuhin ang iyong UI**: Gumuhit ng sketch ng interface ng iyong extension bago mag-code
4. **Subukan nang madalas**: Bumuo nang paunti-unti at subukan ang bawat tampok habang idinadagdag
5. **Hawakan ang mga error**: Laging ipagpalagay na maaaring mabigo ang mga tawag sa API at magplano nang naaayon

## Mga Mapagkukunan

- [Dokumentasyon ng Browser Extension](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Gabay sa Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial sa Local Storage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Pag-parse at Paghawak ng JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Mag-enjoy sa paggawa ng isang bagay na kapaki-pakinabang at malikhaing! 🚀

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.