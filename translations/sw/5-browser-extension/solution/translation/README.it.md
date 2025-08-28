<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-28T03:46:28+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "sw"
}
-->
# Ugani wa Kivinjari wa Carbon Trigger: Msimbo wa Kuanza

Tutatumia API ya Signal CO2 kutoka tmrow kufuatilia matumizi ya umeme ili kuunda ugani wa kivinjari, hivyo kuwa na ukumbusho moja kwa moja kwenye kivinjari chako kuhusu jinsi matumizi ya umeme yalivyo mazito katika eneo lako. Kutumia ugani huu maalum kutasaidia kutathmini shughuli zako kulingana na taarifa hizi.

![picha ya ugani](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.sw.png)

## Kuanza

Ni muhimu kuwa na [npm](https://npmjs.com) iliyosakinishwa. Pakua nakala ya msimbo huu kwenye folda kwenye kompyuta yako.

Sakinisha vifurushi vyote vinavyohitajika:

```
npm install
```

Unda ugani kwa kutumia webpack:

```
npm run build
```

Ili kusakinisha kwenye Edge, tumia menyu ya "alama tatu" kwenye kona ya juu kulia ya kivinjari ili kupata paneli ya Ugani. Ikiwa haijawashwa tayari, washa Hali ya Msanidi Programu (chini kushoto). Chagua "Pakia isiyoshinikizwa" ili kupakia ugani mpya. Fungua folda ya "dist" kwenye dirisha la maelekezo, na ugani utawekwa. Ili kuitumia, utahitaji ufunguo wa API kwa API ya CO2 Signal (unaweza [kuupata hapa kupitia barua pepe](https://www.co2signal.com/) - weka barua pepe yako kwenye kisanduku kwenye ukurasa huu) na [msimbo wa eneo lako](http://api.electricitymap.org/v3/zones) unaolingana na [ramani ya umeme](https://www.electricitymap.org/map) (kwa mfano, huko Boston, "US-NEISO").

![usakinishaji](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.sw.png)

Mara tu ufunguo wa API na eneo vimeingizwa kwenye kiolesura cha ugani, nukta ya rangi kwenye upau wa ugani wa kivinjari inapaswa kubadilika ili kuonyesha matumizi ya nishati ya eneo hilo na kutoa mwongozo kuhusu shughuli za matumizi makubwa ya nishati zinazofaa kufanywa. Wazo la mfumo huu wa "nukta" lilitolewa na [ugani wa Energy Lollipop](https://energylollipop.com/) kwa uzalishaji wa California.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati asilia katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.