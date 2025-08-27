<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-27T22:12:27+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "tl"
}
-->
# Ipatupad ang "Magdagdag ng transaksyon" na dialog

## Mga Instruksyon

Ang ating bank app ay kulang pa ng isang mahalagang tampok: ang kakayahang maglagay ng mga bagong transaksyon. Gamitin ang lahat ng natutunan mo sa apat na nakaraang aralin upang ipatupad ang isang "Magdagdag ng transaksyon" na dialog:

- Magdagdag ng "Magdagdag ng transaksyon" na button sa dashboard page
- Puwedeng gumawa ng bagong page na may HTML template, o gumamit ng JavaScript upang ipakita/itago ang dialog HTML nang hindi umaalis sa dashboard page (maaari mong gamitin ang [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) na property para dito, o mga CSS class)
- Siguraduhing maayos ang [keyboard at screen reader accessibility](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) para sa dialog
- Ipatupad ang isang HTML form upang tanggapin ang input na data
- Gumawa ng JSON data mula sa form data at ipadala ito sa API
- I-update ang dashboard page gamit ang bagong data

Tingnan ang [server API specifications](../api/README.md) upang malaman kung aling API ang kailangan mong tawagan at kung ano ang inaasahang JSON format.

Narito ang isang halimbawa ng resulta matapos makumpleto ang gawain:

![Screenshot na nagpapakita ng halimbawa ng "Magdagdag ng transaksyon" na dialog](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.tl.png)

## Rubric

| Pamantayan | Natatangi                                                                                       | Katanggap-tanggap                                                                                                      | Kailangan ng Pagpapabuti                    |
| ---------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|            | Ang pagdaragdag ng transaksyon ay ganap na naipatupad ayon sa lahat ng pinakamahusay na kasanayan na nakita sa mga aralin. | Ang pagdaragdag ng transaksyon ay naipatupad, ngunit hindi sumusunod sa pinakamahusay na kasanayan na nakita sa mga aralin, o gumagana lamang nang bahagya. | Ang pagdaragdag ng transaksyon ay hindi gumagana. |

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, pakitandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.