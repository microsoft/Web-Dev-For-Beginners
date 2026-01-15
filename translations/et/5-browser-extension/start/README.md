<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-10-11T12:19:43+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "et"
}
-->
# Carbon Trigger Browser Extension: Algkood

Kasutades tmrow'i CO2 Signal API-d elektritarbimise jälgimiseks, loo brauserilaiendus, mis annab sulle otse brauseris meeldetuletuse selle kohta, kui suur on sinu piirkonna elektritarbimise koormus. Selle laienduse juhuslik kasutamine aitab sul teha teadlikke otsuseid oma tegevuste osas, lähtudes sellest infost.

![laienduse ekraanipilt](../../../../translated_images/et/extension-screenshot.0e7f5bfa110e92e3.png)

## Alustamine

Sul peab olema [npm](https://npmjs.com) paigaldatud. Laadi selle koodi koopia alla oma arvutisse kausta.

Paigalda kõik vajalikud paketid:

```
npm install
```

Koosta laiendus, kasutades webpacki:

```
npm run build
```

Edge'i brauseris paigaldamiseks kasuta brauseri paremas ülanurgas asuvat 'kolme punkti' menüüd, et leida Laienduste paneel. Sealt vali 'Laadi lahti pakkimata', et laadida uus laiendus. Avanevas dialoogis vali 'dist' kaust ja laiendus laetakse. Kasutamiseks vajad CO2 Signal API jaoks API-võtit ([hankige see e-posti teel siit](https://www.co2signal.com/) - sisesta oma e-post sellel lehel olevasse kasti) ja [oma piirkonna koodi](http://api.electricitymap.org/v3/zones), mis vastab [Electricity Map](https://www.electricitymap.org/map) andmetele (näiteks Bostonis kasutan 'US-NEISO').

![paigaldamine](../../../../translated_images/et/install-on-edge.78634f02842c4828.png)

Kui API-võti ja piirkonna kood on sisestatud laienduse liidesesse, peaks brauserilaienduse ribal olev värviline täpp muutuma, et kajastada sinu piirkonna energiatarbimist. See annab sulle vihje, millised energiamahukad tegevused oleksid sobivad. Selle 'täpi' süsteemi idee sain [Energy Lollipop laiendusest](https://energylollipop.com/) California heitmete jaoks.

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.