# Carbon Trigger Browser Extension: Kumpletong Kodigo

Gamit ang tmrow's CO2 Signal API para subaybayan ang paggamit ng kuryente, gumawa ng browser extension upang magkaroon ka ng paalala sa iyong browser tungkol sa bigat ng paggamit ng kuryente sa iyong rehiyon. Ang paggamit ng extension na ito nang ad hoc ay makakatulong sa iyo na gumawa ng mas maingat na desisyon sa iyong mga aktibidad batay sa impormasyong ito.

![screenshot ng extension](../../../../translated_images/tl/extension-screenshot.0e7f5bfa110e92e3.webp)

## Pagsisimula

Kailangan mong magkaroon ng [npm](https://npmjs.com) na naka-install. I-download ang kopya ng kodigong ito sa isang folder sa iyong computer.

I-install ang lahat ng kinakailangang package:

```
npm install
```

I-build ang extension gamit ang webpack:

```
npm run build
```

Para i-install sa Edge, gamitin ang menu na 'three dot' sa kanang itaas na bahagi ng browser upang hanapin ang Extensions panel. Mula roon, piliin ang 'Load Unpacked' upang mag-load ng bagong extension. Buksan ang 'dist' folder kapag lumitaw ang prompt, at mai-load ang extension. Upang magamit ito, kakailanganin mo ng API key para sa CO2 Signal's API ([kumuha dito sa pamamagitan ng email](https://www.co2signal.com/) - ilagay ang iyong email sa kahon sa pahinang ito) at ang [code para sa iyong rehiyon](http://api.electricitymap.org/v3/zones) na tumutugma sa [Electricity Map](https://www.electricitymap.org/map) (halimbawa, sa Boston, ginagamit ko ang 'US-NEISO').

![pag-install](../../../../translated_images/tl/install-on-edge.78634f02842c4828.webp)

Kapag na-input na ang API key at rehiyon sa interface ng extension, ang kulay ng tuldok sa browser extension bar ay magbabago upang ipakita ang paggamit ng enerhiya sa iyong rehiyon at magbibigay ng ideya kung anong mga aktibidad na mabigat sa enerhiya ang angkop na gawin. Ang konsepto sa likod ng sistemang 'tuldok' na ito ay inspirasyon mula sa [Energy Lollipop extension](https://energylollipop.com/) para sa emissions sa California.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.