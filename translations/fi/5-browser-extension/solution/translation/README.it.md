<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-27T20:53:45+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "fi"
}
-->
# Carbon Trigger -selainlaajennus: koodi alkuun pääsemiseksi

Tässä projektissa käytetään tmrow:n Signal CO2 -rajapintaa sähköenergian käytön seuraamiseen. Tarkoituksena on luoda selainlaajennus, joka muistuttaa suoraan selaimessa, kuinka kuormittavaa sähköenergian käyttö on omalla alueella. Tämän laajennuksen avulla voi arvioida omia toimintojaan näiden tietojen perusteella.

![laajennuksen näkymä](../../../../../translated_images/fi/extension-screenshot.0e7f5bfa110e92e3.webp)

## Aloittaminen

Varmista, että [npm](https://npmjs.com) on asennettu. Lataa tämän koodin kopio tietokoneellesi.

Asenna kaikki tarvittavat paketit:

```
npm install
```

Luo laajennus webpackilla:

```
npm run build
```

Asentaaksesi laajennuksen Edge-selaimeen, käytä selaimen oikeassa yläkulmassa olevaa "kolmen pisteen" valikkoa ja etsi Laajennukset-paneeli. Jos kehittäjätila ei ole vielä käytössä, ota se käyttöön (vasemmassa alakulmassa). Valitse "Lataa purkamaton" lisätäksesi uuden laajennuksen. Avaa "dist"-kansio kehotteessa, ja laajennus ladataan. Käyttöä varten tarvitset API-avaimen CO2 Signal -rajapintaan (voit [hankkia sen sähköpostitse täältä](https://www.co2signal.com/) - syötä sähköpostiosoitteesi sivulla olevaan kenttään) sekä [alueesi koodin](http://api.electricitymap.org/v3/zones), joka vastaa [sähkökarttaa](https://www.electricitymap.org/map) (esimerkiksi Bostonissa "US-NEISO").

![asennus](../../../../../translated_images/fi/install-on-edge.78634f02842c4828.webp)

Kun API-avain ja alue on syötetty laajennuksen käyttöliittymään, selaimen laajennuspalkissa oleva väripiste muuttuu heijastamaan alueen energiankäyttöä. Se antaa myös vihjeitä siitä, mitkä korkean energiankulutuksen toiminnot olisivat sopivia suorittaa. Tämän "pistejärjestelmän" konsepti on peräisin [Energy Lollipop -laajennuksesta](https://energylollipop.com/), joka seuraa Kalifornian päästöjä.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.