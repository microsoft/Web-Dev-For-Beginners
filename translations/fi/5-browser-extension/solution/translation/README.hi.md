<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-27T20:52:21+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "fi"
}
-->
# Carbon Trigger -selainlaajennus: Valmis koodi

Tmrow:n CO2 Signal API:n avulla seurataan sähkönkulutusta ja luodaan selainlaajennus, joka muistuttaa sinua siitä, kuinka kuormittavaa alueesi sähkönkäyttö on selaimessasi. Tämän laajennuksen käyttö auttaa sinua tekemään päätöksiä toiminnastasi tämän tiedon perusteella.

![Laajennuksen kuvakaappaus](../../../../../translated_images/fi/extension-screenshot.0e7f5bfa110e92e3.png)

## Aloittaminen

Sinun täytyy asentaa [npm](https://npmjs.com). Lataa tämän koodin kopio tietokoneellesi kansioon.

Asenna kaikki tarvittavat paketit:

```
npm install
```

Luo laajennus Webpackilla:

```
npm run build
```

Asentaaksesi sen Edge-selaimeen, käytä selaimen oikeassa yläkulmassa olevaa "kolmen pisteen" valikkoa löytääksesi laajennuspaneelin. Valitse sieltä "Lataa purkamaton" ladataksesi uuden laajennuksen. Avaa kehotteessa "dist"-kansio, ja laajennus latautuu. Käyttääksesi sitä, tarvitset CO2 Signal API -avaimen ([saatavilla sähköpostitse täältä](https://www.co2snal.com/) - syötä sähköpostiosoitteesi sivun laatikkoon) ja [alueesi koodin](http://api.electricitymap.org/v3/zones) [Electricity Map](https://www.electricitymap.org/map) -sivustolta (esimerkiksi Bostonissa käytän "US-NEISO").

![Asennus](../../../../../translated_images/fi/install-on-edge.78634f02842c4828.png)

Kun API-avain ja alue on syötetty laajennuksen käyttöliittymään, selaimen laajennuspalkissa oleva värillinen piste muuttuu heijastamaan alueesi energiankäyttöä ja antaa sinulle indikaattorin siitä, mitkä energiaintensiiviset toiminnot sopivat parhaiten suoritettavaksi. Tämän "piste"-järjestelmän idea tuli minulle Kalifornian päästöjen [Energy Lollipop -laajennuksesta](https://energylollipop.com/).

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.