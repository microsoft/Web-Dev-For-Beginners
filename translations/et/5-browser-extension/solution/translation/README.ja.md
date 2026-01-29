# Carbon Trigger brauserilaiendus: Valmis kood

Ehita brauserilaiendus, mis kasutab tmrow CO2 Signal API-d, et jälgida elektritarbimist ja kuvada meeldetuletusena, kui palju energiat sinu piirkonnas kasutatakse. Selle laienduse ad hoc kasutamine võimaldab sul oma tegevusi vastavalt sellele teabele planeerida.

![laienduse ekraanipilt](../../../../../translated_images/et/extension-screenshot.0e7f5bfa110e92e3.webp)

## Alustamine

Sul peab olema [npm](https://npmjs.com) installitud. Laadi selle koodi koopia alla oma arvuti kausta.

Paigalda kõik vajalikud paketid.

```
npm install
```

Ehita laiendus webpacki abil.

```
npm run build
```

Edge'i installimiseks leia brauseri paremas ülanurgas olevast "kolme punkti" menüüst "Laiendused" paneel. Sealt vali "Load Unpacked" ja laadi uus laiendus. Kui avaneb prompt, ava "dist" kaust, et laiendus laadida. Kasutamiseks vajad CO2 Signal API API-võtit ([hankige see siit e-posti teel](https://www.co2signal.com/) - sisesta oma e-post selle lehe kastikesse) ja [Electricity Map](https://www.electricitymap.org/map) vastavat [koodi oma piirkonna jaoks](http://api.electricitymap.org/v3/zones) (näiteks Bostonis kasutatakse 'US-NEISO').

![installimine](../../../../../translated_images/et/install-on-edge.78634f02842c4828.webp)

Kui sisestad API-võtme ja piirkonna laienduse liidesesse, muutub brauseri laiendusribal kuvatav värviline täpp, mis peegeldab sinu piirkonna energiatarbimist ja annab märku, milliseid energiat nõudvaid tegevusi on sobiv teha. Selle "täpi" süsteemi idee sain California osariigi emissioonide jaoks loodud [Energy Lollipop laiendusest](https://energylollipop.com/).

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.