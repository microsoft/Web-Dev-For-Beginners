<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-28T03:47:27+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "sw"
}
-->
# Upanuzi wa Kivinjari wa Carbon Trigger: Msimbo Kamili

Kwa kutumia API ya CO2 Signal ya tmrow kufuatilia matumizi ya umeme, tengeneza upanuzi wa kivinjari ili uweze kuwa na kikumbusho moja kwa moja kwenye kivinjari chako kuhusu matumizi ya umeme katika eneo lako. Kutumia upanuzi huu wa ad hoc kutakusaidia kufanya maamuzi kuhusu shughuli zako kwa kuzingatia taarifa hii.

![picha ya upanuzi](../../../../../translated_images/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.sw.png)

## Kuanza

Utahitaji kuwa na [npm](https://npmjs.com) imewekwa. Pakua nakala ya msimbo huu kwenye folda ya kompyuta yako.

Sakinisha vifurushi vyote muhimu:

```
npm install
```

Jenga upanuzi kutoka webpack:

```
npm run build
```

Ili kusakinisha kwenye Edge, tumia menyu ya 'alama tatu' kwenye kona ya juu kulia ya kivinjari ili kupata paneli ya Viongezi. Kutoka hapo, chagua 'Pakia bila kufungasha' ili kupakia upanuzi mpya. Fungua folda ya 'dist' unapoulizwa, na upanuzi utapakiwa. Ili kuitumia, utahitaji ufunguo wa API kwa API ya CO2 Signal ([pata hapa kwa barua pepe](https://www.co2signal.com/) - ingiza barua pepe yako kwenye kisanduku cha ukurasa huu) na [msimbo wa eneo lako](http://api.electricitymap.org/v3/zones) unaolingana na [Ramani ya Umeme](https://www.electricitymap.org/map) (kwa mfano, huko Boston, ninatumia 'US-NEISO').

![kusakinisha](../../../../../translated_images/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.sw.png)

Baada ya kuingiza ufunguo wa API na eneo kwenye kiolesura cha upanuzi, nukta ya rangi kwenye upau wa upanuzi wa kivinjari inapaswa kubadilika ili kuonyesha matumizi ya nishati ya eneo lako na kukupa kiashiria kuhusu shughuli za matumizi makubwa ya nishati ambazo zinaweza kufaa kwako. Wazo nyuma ya mfumo huu wa "nukta" nililipata kutoka kwa [upanuzi wa Energy Lollipop](https://energylollipop.com/) kwa uzalishaji wa California.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.