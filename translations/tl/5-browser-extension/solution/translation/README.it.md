<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-27T22:25:19+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "tl"
}
-->
# Carbon Trigger Browser Extension: Code to Get Started

Gagamitin ang Signal CO2 API ng tmrow upang subaybayan ang paggamit ng kuryente at lumikha ng isang browser extension na magbibigay ng paalala direkta sa iyong browser kung gaano kabigat ang paggamit ng kuryente sa iyong rehiyon. Ang paggamit ng extension na ito ay makakatulong sa iyo na suriin ang iyong mga aktibidad batay sa impormasyong ito.

![screenshot ng extension](../../../../../translated_images/tl/extension-screenshot.0e7f5bfa110e92e3.png)

## Paano Magsimula

Kailangang naka-install ang [npm](https://npmjs.com). I-download ang kopya ng code na ito sa isang folder sa iyong computer.

I-install ang lahat ng kinakailangang mga package:

```
npm install
```

Gumawa ng extension gamit ang webpack:

```
npm run build
```

Para i-install sa Edge, gamitin ang menu na "tatlong tuldok" sa kanang itaas na bahagi ng browser upang mahanap ang panel ng Mga Extension. Kung hindi pa naka-activate, i-on ang Developer Mode (nasa ibabang kaliwa). Piliin ang "Load unpacked" upang mag-load ng bagong extension. Buksan ang folder na "dist" sa prompt, at ang extension ay mai-load. Upang magamit ito, kakailanganin mo ng API key para sa CO2 Signal API (maaari kang [kumuha nito sa pamamagitan ng email](https://www.co2signal.com/) - ilagay ang iyong email sa kahon sa pahinang ito) at ang [code para sa iyong rehiyon](http://api.electricitymap.org/v3/zones) na tumutugma sa [electricity map](https://www.electricitymap.org/map) (halimbawa, sa Boston, "US-NEISO").

![pag-install](../../../../../translated_images/tl/install-on-edge.78634f02842c4828.png)

Kapag nailagay na ang API key at rehiyon sa interface ng extension, ang kulay ng tuldok sa extension bar ng browser ay magbabago upang ipakita ang paggamit ng enerhiya sa rehiyon at magbibigay ng ideya kung aling mga aktibidad na mataas ang konsumo ng enerhiya ang angkop na gawin. Ang konsepto sa likod ng sistemang ito ng "mga tuldok" ay hango sa [Energy Lollipop extension](https://energylollipop.com/) para sa mga emisyon sa California.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.