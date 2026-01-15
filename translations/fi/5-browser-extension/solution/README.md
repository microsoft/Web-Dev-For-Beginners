<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-27T20:51:28+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "fi"
}
-->
# Carbon Trigger -selainlaajennus: Valmis koodi

Käyttämällä tmrow:n CO2 Signal -API:ta sähkönkulutuksen seuraamiseen voit rakentaa selainlaajennuksen, joka muistuttaa sinua suoraan selaimessa siitä, kuinka kuormittavaa alueesi sähkönkulutus on. Tämän laajennuksen satunnainen käyttö auttaa sinua tekemään päätöksiä toimistasi tämän tiedon perusteella.

![laajennuksen kuvakaappaus](../../../../translated_images/fi/extension-screenshot.0e7f5bfa110e92e3.webp)

## Aloittaminen

Sinun tulee asentaa [npm](https://npmjs.com). Lataa kopio tästä koodista tietokoneesi kansioon.

Asenna kaikki tarvittavat paketit:

```
npm install
```

Rakenna laajennus webpackilla:

```
npm run build
```

Asentaaksesi laajennuksen Edge-selaimeen, käytä selaimen oikean yläkulman 'kolmen pisteen' valikkoa löytääksesi Laajennukset-paneelin. Valitse sieltä 'Lataa purkamaton' ladataksesi uuden laajennuksen. Avaa 'dist'-kansio kehotteessa, ja laajennus latautuu. Käyttääksesi sitä tarvitset API-avaimen CO2 Signal -API:lle ([hanki avain sähköpostitse täältä](https://www.co2signal.com/) - syötä sähköpostiosoitteesi tämän sivun laatikkoon) sekä [alueesi koodin](http://api.electricitymap.org/v3/zones), joka vastaa [Electricity Map](https://www.electricitymap.org/map) -karttaa (esimerkiksi Bostonissa käytän koodia 'US-NEISO').

![asennus](../../../../translated_images/fi/install-on-edge.78634f02842c4828.webp)

Kun API-avain ja alueen koodi on syötetty laajennuksen käyttöliittymään, selaimen laajennuspalkin värillinen piste muuttuu heijastamaan alueesi energiankulutusta ja antaa sinulle vihjeitä siitä, mitkä energiaintensiiviset toiminnot olisivat sopivia suorittaa. Tämän 'pistejärjestelmän' konsepti tuli minulle [Energy Lollipop -laajennuksesta](https://energylollipop.com/) Kalifornian päästöjen seuraamiseen.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.