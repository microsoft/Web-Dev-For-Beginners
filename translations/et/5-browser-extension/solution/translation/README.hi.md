<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-10-11T12:17:49+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "et"
}
-->
# Carbon Trigger brauserilaiend: Valmis kood

Elektritarbimise jälgimiseks kasutades tmrow CO2 Signal API-d, on loodud brauserilaiend, mis tuletab teile meelde, kui intensiivne on teie piirkonna elektritarbimine. Selle laiendi kasutamine aitab teil teha otsuseid oma tegevuste kohta, tuginedes sellele teabele.

![Laiendi ekraanipilt ](../../../../../translated_images/et/extension-screenshot.0e7f5bfa110e92e3.png)

## Alustamine

Teil peab olema [npm](https://npmjs.com) installitud. Laadige selle koodi koopia alla oma arvutisse.

Paigaldage kõik vajalikud paketid:

```
npm install
```

Looge laiend veebipakiga:

```
npm run build
```

Edge'i brauseris installimiseks kasutage brauseri paremas ülanurgas asuvat "kolme punkti" menüüd, et leida laiendite paneel. Sealt valige "Laadi lahti pakitud" ja avage 'dist' kaust, kui seda küsitakse. Laiend laaditakse. Selle kasutamiseks vajate CO2 Signal API-d ([saate API võtme e-posti teel siit](https://www.co2snal.com/) – sisestage oma e-post selle lehe kastikesse) ja [oma piirkonna koodi](http://api.electricitymap.org/v3/zones) [Electricity Map](https://www.electricitymap.org/map) lehelt (näiteks Bostonis kasutan 'US-NEISO').

![installimine](../../../../../translated_images/et/install-on-edge.78634f02842c4828.png)

Kui API võti ja piirkond on laiendi liidesesse sisestatud, peaks brauserilaiendi ribal olev värviline täpp muutuma, et kajastada teie piirkonna energiatarbimist, ning andma teile indikatsiooni, millised energiamahukad tegevused sobivad teie kasutuseks. Selle "täpi" süsteemi idee sain California heitkoguste jaoks loodud [Energy Lollipop laiendist](https://energylollipop.com/).

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.