<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-27T21:06:22+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "fi"
}
-->
# Toteuta "Lisää tapahtuma" -dialogi

## Ohjeet

Pankkisovelluksestamme puuttuu vielä yksi tärkeä ominaisuus: mahdollisuus lisätä uusia tapahtumia. 
Käyttäen kaikkea, mitä olet oppinut neljässä edellisessä oppitunnissa, toteuta "Lisää tapahtuma" -dialogi:

- Lisää "Lisää tapahtuma" -painike hallintapaneelin sivulle
- Luo joko uusi sivu HTML-mallilla tai käytä JavaScriptiä dialogin HTML:n näyttämiseen/piilottamiseen poistumatta hallintapaneelin sivulta (voit käyttää [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)-ominaisuutta tai CSS-luokkia tähän)
- Varmista, että käsittelet [näppäimistön ja ruudunlukijan saavutettavuuden](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) dialogille
- Toteuta HTML-lomake syötettävien tietojen vastaanottamiseksi
- Luo JSON-data lomakkeen tiedoista ja lähetä se API:lle
- Päivitä hallintapaneelin sivu uusilla tiedoilla

Katso [palvelimen API-määritykset](../api/README.md) nähdäksesi, mitä API:a sinun tulee kutsua ja mikä on odotettu JSON-muoto.

Tässä on esimerkkitulos tehtävän suorittamisen jälkeen:

![Näyttökuva, jossa näkyy esimerkki "Lisää tapahtuma" -dialogista](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.fi.png)

## Arviointikriteerit

| Kriteeri | Erinomainen                                                                                       | Riittävä                                                                                                                | Parannettavaa                                |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | Tapahtuman lisääminen on toteutettu täysin oppitunneilla nähtyjen parhaiden käytäntöjen mukaisesti. | Tapahtuman lisääminen on toteutettu, mutta ei oppitunneilla nähtyjen parhaiden käytäntöjen mukaisesti tai toimii vain osittain. | Tapahtuman lisääminen ei toimi lainkaan.     |

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.