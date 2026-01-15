<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-27T22:26:31+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "tl"
}
-->
# Carbon Trigger Browser Extension: Kumpletong Kodigo

Gamit ang CO2 Signal API ng tmrow para subaybayan ang paggamit ng kuryente, gumawa ng isang browser extension upang magkaroon ka ng paalala direkta sa iyong browser tungkol sa konsumo ng kuryente sa iyong rehiyon. Ang paggamit ng extension na ito ay makakatulong sa iyo na gumawa ng mga desisyon tungkol sa iyong mga aktibidad batay sa impormasyong ito.

![screenshot ng extension](../../../../../translated_images/tl/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Pagsisimula

Kailangan mong magkaroon ng [npm](https://npmjs.com) na naka-install. I-download ang kopya ng kodigong ito sa isang folder sa iyong computer.

I-install ang lahat ng kinakailangang mga pakete:

```
npm install
```

I-build ang extension gamit ang webpack:

```
npm run build
```

Para i-install sa Edge, gamitin ang menu na 'tatlong tuldok' sa kanang itaas na bahagi ng browser upang hanapin ang panel ng Mga Extension. Mula doon, piliin ang 'Load unpacked' upang mag-load ng bagong extension. Buksan ang folder na 'dist' kapag hiniling, at mai-load ang extension. Para magamit ito, kakailanganin mo ng API key para sa CO2 Signal API ([kumuha dito sa pamamagitan ng email](https://www.co2signal.com/) - ilagay ang iyong email sa kahon sa pahinang ito) at ang [code para sa iyong rehiyon](http://api.electricitymap.org/v3/zones) na tumutugma sa [Electricity Map](https://www.electricitymap.org/map) (halimbawa, sa Boston, ginagamit ko ang 'US-NEISO').

![pag-install](../../../../../translated_images/tl/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Kapag nailagay na ang API key at rehiyon sa interface ng extension, ang kulay ng tuldok sa extension bar ng browser ay dapat magbago upang ipakita ang paggamit ng enerhiya sa iyong rehiyon at magbigay sa iyo ng indikasyon tungkol sa mga aktibidad na may mataas na konsumo ng enerhiya na angkop para sa iyo. Ang konsepto sa likod ng sistemang ito ng "mga tuldok" ay nakuha ko mula sa [Energy Lollipop extension](https://energylollipop.com/) para sa mga emisyon sa California.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.