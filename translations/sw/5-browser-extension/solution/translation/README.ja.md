<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-28T03:46:57+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "sw"
}
-->
# Kiongezo cha Kivinjari cha Carbon Trigger: Msimbo Uliokamilika

Tunajenga kiongezo cha kivinjari kinachotumia API ya CO2 Signal ya tmrow ili kufuatilia matumizi ya nishati katika eneo lako. Kiongezo hiki kitaonyesha ukumbusho kwenye kivinjari chako kuhusu kiwango cha matumizi ya nishati katika eneo lako. Kwa kutumia kiongezo hiki kwa njia ya ad hoc, unaweza kufanya maamuzi kuhusu shughuli zako kulingana na taarifa hii.

![picha ya kiongezo](../../../../../translated_images/sw/extension-screenshot.0e7f5bfa110e92e3.png)

## Kuanza

Unahitaji kuwa na [npm](https://npmjs.com) iliyosakinishwa. Pakua nakala ya msimbo huu kwenye folda kwenye kompyuta yako.

Sakinisha vifurushi vyote vinavyohitajika.

```
npm install
```

Jenga kiongezo kutoka webpack.

```
npm run build
```

Ili kusakinisha kwenye Edge, tafuta paneli ya "Viongezo" kutoka kwenye menyu ya "alama tatu" kwenye kona ya juu kulia ya kivinjari. Kutoka hapo, chagua "Load Unpacked" na upakie kiongezo kipya. Fungua folda ya "dist" unapoulizwa, na kiongezo kitawekwa. Ili kutumia, unahitaji API key ya CO2 Signal ([pata moja hapa kupitia barua pepe](https://www.co2signal.com/) - ingiza barua pepe yako kwenye kisanduku cha ukurasa huo) na [code ya eneo lako](http://api.electricitymap.org/v3/zones) inayolingana na [Electricity Map](https://www.electricitymap.org/map) (kwa mfano, Boston hutumia 'US-NEISO').

![kusakinisha](../../../../../translated_images/sw/install-on-edge.78634f02842c4828.png)

Baada ya kuingiza API key na eneo kwenye kiolesura cha kiongezo, nukta yenye rangi itakayoonekana kwenye upau wa viongezo vya kivinjari chako itabadilika ili kuonyesha kiwango cha matumizi ya nishati katika eneo lako. Hii itakusaidia kuamua ni shughuli gani zinazohitaji nishati zinafaa kufanywa. Wazo la mfumo huu wa "nukta" lilitokana na [Energy Lollipop extension](https://energylollipop.com/) kwa ajili ya uzalishaji wa California.

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutokuelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.