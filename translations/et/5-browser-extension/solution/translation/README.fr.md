<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-10-11T12:16:41+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "et"
}
-->
# Carbon Trigger brauserilaiend: Valmis kood

Kasutades tmrow CO2 Signal API-d elektritarbimise jälgimiseks, looge brauserilaiend, mis annab teile otse brauseris meeldetuletuse teie piirkonna elektritarbimise kohta. Selle ad hoc laiendi kasutamine aitab teil teha teadlikke otsuseid oma tegevuste kohta, tuginedes nendele andmetele.

![laiendi ekraanipilt](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.et.png)

## Alustamine

Teil peab olema [npm](https://npmjs.com) installitud. Laadige selle koodi koopia alla oma arvutisse.

Paigaldage kõik vajalikud paketid:

```
npm install
```

Ehitage laiend webpacki abil

```
npm run build
```

Edge'i brauseris installimiseks kasutage brauseri paremas ülanurgas asuvat 'kolme punkti' menüüd, et leida laienduste paneel. Sealt valige 'Laadi lahti pakitud laiend' uue laiendi laadimiseks. Avage 'dist' kaust, kui seda küsitakse, ja laiend laetakse. Kasutamiseks vajate API-võtit CO2 Signal API jaoks ([hankige see e-posti teel siit](https://www.co2signal.com/) - sisestage oma e-posti aadress sellel lehel olevasse kasti) ja [koodi oma piirkonna jaoks](http://api.electricitymap.org/v3/zones), mis vastab [Electricity Map'ile](https://www.electricitymap.org/map) (näiteks Bostonis kasutan 'US-NEISO').

![installimine](../../../../../translated_images/install-on-edge.78634f02842c4828.et.png)

Kui API-võti ja piirkond on sisestatud laiendi liidesesse, peaks värviline punkt brauseri laienduste ribal muutuma, et kajastada teie piirkonna energiatarbimist ja anda teile märku, milliseid energiamahukaid tegevusi oleks sobiv teha. Selle 'punktide' süsteemi idee sain [Energy Lollipop laiendist](https://energylollipop.com/) California heitkoguste jaoks.

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.