<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-27T22:23:25+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "tl"
}
-->
# Carbon Trigger Browser Extension: Panimulang Code

Gamit ang tmrow's C02 Signal API para subaybayan ang paggamit ng kuryente, gumawa ng browser extension upang magkaroon ka ng paalala sa iyong browser tungkol sa bigat ng paggamit ng kuryente sa iyong rehiyon. Ang paggamit ng extension na ito nang ad hoc ay makakatulong sa iyo na gumawa ng mas maingat na desisyon sa iyong mga aktibidad batay sa impormasyong ito.

![extension screenshot](../../../../translated_images/tl/extension-screenshot.0e7f5bfa110e92e3.webp)

## Pagsisimula

Kailangan mong magkaroon ng [npm](https://npmjs.com) na naka-install. I-download ang kopya ng code na ito sa isang folder sa iyong computer.

I-install ang lahat ng kinakailangang package:

```
npm install
```

I-build ang extension gamit ang webpack:

```
npm run build
```

Para i-install sa Edge, gamitin ang menu na 'three dot' sa kanang itaas na bahagi ng browser upang hanapin ang Extensions panel. Mula doon, piliin ang 'Load Unpacked' upang mag-load ng bagong extension. Buksan ang 'dist' folder sa prompt at maglo-load ang extension. Para magamit ito, kakailanganin mo ng API key para sa CO2 Signal's API ([kumuha dito sa pamamagitan ng email](https://www.co2signal.com/) - ilagay ang iyong email sa kahon sa pahinang ito) at ang [code para sa iyong rehiyon](http://api.electricitymap.org/v3/zones) na tumutugma sa [Electricity Map](https://www.electricitymap.org/map) (halimbawa, sa Boston, ginagamit ko ang 'US-NEISO').

![installing](../../../../translated_images/tl/install-on-edge.78634f02842c4828.webp)

Kapag na-input na ang API key at rehiyon sa interface ng extension, ang kulay ng tuldok sa browser extension bar ay dapat magbago upang ipakita ang paggamit ng enerhiya sa iyong rehiyon at magbigay ng gabay kung anong mga aktibidad na mabigat sa enerhiya ang angkop na gawin. Ang konsepto sa likod ng sistemang 'dot' na ito ay ibinigay sa akin ng [Energy Lollipop extension](https://energylollipop.com/) para sa emissions sa California.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.