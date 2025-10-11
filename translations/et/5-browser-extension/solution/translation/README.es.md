<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-10-11T12:17:15+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "et"
}
-->
# Carbon Trigger brauserilaiend: Täielik kood

Kasutades tmrow CO2 signaali API-d elektritarbimise jälgimiseks, looge brauserilaiend, mis annab teile otse brauseris meeldetuletuse teie piirkonna elektritarbimise kohta. Selle ad hoc laiendi kasutamine aitab teil teha otsuseid oma tegevuste kohta, tuginedes sellele teabele.

![laiendi ekraanipilt](../../../../../translated_images/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.et.png)

## Alustamine

Teil peab olema [npm](https://npmjs.com) installitud. Laadige selle koodi koopia alla oma arvutisse.

Paigaldage kõik vajalikud paketid:

```
npm install
```

Koostage laiend webpacki abil:

```
npm run build
```

Edge'i brauseris installimiseks kasutage brauseri paremas ülanurgas asuvat 'kolme punkti' menüüd, et leida laienduste paneel. Sealt valige 'Laadi lahti pakitud', et laadida uus laiend. Kui küsitakse, avage kaust 'dist' ja laiend laaditakse. Kasutamiseks vajate CO2 signaali API võtit ([hankige see siit e-posti teel](https://www.co2signal.com/) - sisestage oma e-posti aadress selle lehe kasti) ja [oma piirkonna koodi](http://api.electricitymap.org/v3/zones), mis vastab [Electricity Mapile](https://www.electricitymap.org/map) (näiteks Bostonis kasutan 'US-NEISO').

![installimine](../../../../../translated_images/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.et.png)

Kui API võti ja piirkond on laiendi liideses sisestatud, peaks värvipunkt brauseri laiendusribal muutuma, et kajastada teie piirkonna energiatarbimist ja anda teile näitaja kõrge energiatarbimisega tegevuste kohta, mis oleksid teile sobivad. Selle "punktisüsteemi" kontseptsiooni sain [Energy Lollipop laiendist](https://energylollipop.com/) California heitkoguste jaoks.

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.