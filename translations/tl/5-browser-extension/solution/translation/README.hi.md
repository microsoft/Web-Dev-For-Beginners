<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-27T22:24:41+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "tl"
}
-->
# Carbon Trigger Browser Extension: Kumpletong Code

Gamit ang CO2 Signal API ng tmrow para subaybayan ang paggamit ng kuryente, gumawa ng isang browser extension na magbibigay sa iyo ng paalala kung gaano kabigat ang paggamit ng kuryente sa iyong lugar habang ginagamit ang iyong browser. Ang extension na ito ay makakatulong sa iyo na gumawa ng mga desisyon batay sa impormasyong ito para sa iyong mga aktibidad.

![Screenshot ng Extension](../../../../../translated_images/tl/extension-screenshot.0e7f5bfa110e92e3.webp)

## Pagsisimula

Kailangan mong i-install ang [npm](https://npmjs.com). I-download ang kopya ng code na ito sa isang folder sa iyong computer.

I-install ang lahat ng kinakailangang package:

```
npm install
```

Gumawa ng extension gamit ang webpack:

```
npm run build
```

Para i-install sa Edge, gamitin ang 'tatlong tuldok' na menu sa kanang itaas ng browser para hanapin ang extension panel. Mula doon, piliin ang 'Load Unpacked' para mag-load ng bagong extension. Sa prompt, buksan ang 'dist' folder at ma-load ang extension. Para magamit ito, kakailanganin mo ng API key mula sa CO2 Signal ([makukuha dito sa pamamagitan ng email](https://www.co2signal.com/) - ilagay ang iyong email sa kahon sa page na iyon) at [code para sa iyong lugar](http://api.electricitymap.org/v3/zones) mula sa [Electricity Map](https://www.electricitymap.org/map) (halimbawa, sa Boston, ginagamit ko ang 'US-NEISO').

![Pag-install](../../../../../translated_images/tl/install-on-edge.78634f02842c4828.webp)

Kapag na-input na ang API key at lugar sa extension interface, ang makikita mong makulay na tuldok sa browser extension bar ay magbabago upang ipakita ang paggamit ng enerhiya sa iyong lugar. Magbibigay ito sa iyo ng indikasyon kung ang mga energy-intensive na aktibidad ay angkop sa iyong kasalukuyang sitwasyon. Ang konsepto ng 'dot' system na ito ay inspirasyon ng [Energy Lollipop Extension](https://energylollipop.com/) para sa emissions sa California.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.