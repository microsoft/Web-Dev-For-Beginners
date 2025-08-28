<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-27T21:00:44+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "fi"
}
-->
# Refaktoroi ja kommentoi koodisi

## Ohjeet

Kun koodipohjasi kasvaa, on tärkeää refaktoroida koodia säännöllisesti, jotta se pysyy luettavana ja ylläpidettävänä ajan mittaan. Lisää kommentteja ja refaktoroi `app.js`-tiedostosi parantaaksesi koodin laatua:

- Erota vakioarvot, kuten palvelimen API:n perus-URL
- Yhdistä samankaltaista koodia: esimerkiksi voit luoda `sendRequest()`-funktion, joka kokoaa yhteen sekä `createAccount()`- että `getAccount()`-funktioissa käytetyn koodin
- Järjestä koodi uudelleen, jotta se on helpompi lukea, ja lisää kommentteja

## Arviointikriteerit

| Kriteeri | Erinomainen                                                                                                                                                   | Riittävä                                                                                         | Parantamisen varaa                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
|          | Koodi on kommentoitu, jaettu selkeisiin osioihin ja helppolukuinen. Vakioarvot on erotettu ja yhdistetty `sendRequest()`-funktio on luotu.                     | Koodi on siistiä, mutta sitä voisi vielä parantaa lisäämällä kommentteja, erottamalla vakioarvoja tai yhdistämällä koodia.          | Koodi on sekavaa, kommentoimatonta, vakioarvoja ei ole erotettu eikä koodia ole yhdistetty. |

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa tämän käännöksen käytöstä johtuvista väärinkäsityksistä tai virhetulkinnoista.