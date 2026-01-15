<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-28T03:45:59+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "sw"
}
-->
# Kiongezo cha Kivinjari cha Carbon Trigger: Msimbo Uliokamilika

Kutumia API ya CO2 Signal ya tmrow kufuatilia matumizi ya umeme, tunajenga kiongezo cha kivinjari ili kukukumbusha jinsi matumizi ya umeme katika eneo lako yalivyo mazito kupitia kivinjari chako. Kutumia kiongezo hiki kwa muda mfupi kutakusaidia kufanya maamuzi kuhusu shughuli zako kulingana na taarifa hii.

![Picha ya skrini ya kiongezo](../../../../../translated_images/sw/extension-screenshot.0e7f5bfa110e92e3.png)

## Kuanza

Unahitaji kusakinisha [npm](https://npmjs.com). Pakua nakala ya msimbo huu kwenye folda kwenye kompyuta yako.

Sakinisha vifurushi vyote muhimu:

```
npm install
```

Tengeneza kiongezo kwa kutumia webpack:

```
npm run build
```

Ili kusakinisha kwenye Edge, tumia menyu ya 'nukta tatu' kwenye kona ya juu kulia ya kivinjari ili kupata paneli ya viongezo. Kutoka hapo, chagua 'Load unpacked' ili kupakia kiongezo kipya. Fungua folda ya 'dist' kwenye prompt, na kiongezo kitapakiwa. Ili kutumia, utahitaji API key ya CO2 Signal ([ipate kupitia barua pepe hapa](https://www.co2snal.com/) - weka barua pepe yako kwenye kisanduku cha ukurasa huo) na [msimbo wa eneo lako](http://api.electricitymap.org/v3/zones) kutoka [ramani ya umeme](https://www.electricitymap.org/map) (kwa mfano, huko Boston, ninatumia 'US-NEISO').

![kusakinisha](../../../../../translated_images/sw/install-on-edge.78634f02842c4828.png)

Baada ya API key na msimbo wa eneo kuingizwa kwenye kiolesura cha kiongezo, nukta ya rangi kwenye bar ya viongezo vya kivinjari inapaswa kubadilika ili kuonyesha matumizi ya nishati ya eneo lako na kukupa kiashiria cha shughuli nzito za nishati zinazofaa kwa utendaji wako. Wazo la mfumo huu wa 'nukta' lilinipatia na [kiongezo cha Energy Lollipop](https://energylollipop.com/) kwa uzalishaji wa California.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.