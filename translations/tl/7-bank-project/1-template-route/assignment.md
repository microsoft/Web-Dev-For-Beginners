<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-27T22:15:46+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "tl"
}
-->
# Pagbutihin ang routing

## Mga Instruksyon

Ang deklarasyon ng mga ruta ay kasalukuyang naglalaman lamang ng template ID na gagamitin. Ngunit kapag nagpapakita ng bagong pahina, minsan ay kailangan ng kaunting dagdag. Pagbutihin natin ang ating routing implementation gamit ang dalawang karagdagang tampok:

- Magbigay ng mga pamagat sa bawat template at i-update ang pamagat ng window gamit ang bagong pamagat na ito kapag nagbago ang template.
- Magdagdag ng opsyon upang magpatakbo ng code pagkatapos magbago ang template. Gusto nating i-print ang `'Dashboard is shown'` sa developer console tuwing ipinapakita ang pahina ng dashboard.

## Rubric

| Pamantayan | Natatangi                                                                                                                          | Katanggap-tanggap                                                                                                                                                                                  | Kailangang Pagbutihin                                       |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|             | Ang dalawang tampok ay naipatupad at gumagana. Ang pagdaragdag ng pamagat at code ay gumagana rin para sa bagong ruta na idinagdag sa deklarasyon ng `routes`. | Ang dalawang tampok ay gumagana, ngunit ang pag-uugali ay hardcoded at hindi nako-configure sa pamamagitan ng deklarasyon ng `routes`. Ang pagdaragdag ng ikatlong ruta na may pamagat at pagdaragdag ng code ay hindi gumagana o gumagana nang bahagya. | Isa sa mga tampok ay nawawala o hindi gumagana nang maayos. |

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, pakitandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.