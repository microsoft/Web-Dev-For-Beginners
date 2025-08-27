<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-27T22:04:39+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "tl"
}
-->
# I-refactor at lagyan ng komento ang iyong code

## Mga Instruksyon

Habang lumalaki ang iyong codebase, mahalagang i-refactor ang iyong code nang madalas upang mapanatili itong madaling basahin at maayos sa paglipas ng panahon. Magdagdag ng mga komento at i-refactor ang iyong `app.js` upang mapabuti ang kalidad ng code:

- I-extract ang mga constants, tulad ng server API base URL
- I-factorize ang magkakatulad na code: halimbawa, maaari kang gumawa ng `sendRequest()` function upang pagsamahin ang code na ginagamit sa parehong `createAccount()` at `getAccount()`
- Ayusin ang code upang mas madali itong basahin, at magdagdag ng mga komento

## Rubric

| Pamantayan | Napakahusay                                                                                                                                                 | Katamtaman                                                                                       | Kailangan ng Pagpapabuti                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
|            | Ang code ay may mga komento, maayos na nakaorganisa sa iba't ibang seksyon, at madaling basahin. Ang mga constants ay na-extract at may na-factorize na `sendRequest()` function. | Malinis ang code ngunit maaari pang mapabuti sa pamamagitan ng mas maraming komento, pag-extract ng constants, o pag-factorize. | Magulo ang code, walang mga komento, hindi na-extract ang constants, at hindi na-factorize ang code. |

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, pakitandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa orihinal nitong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.