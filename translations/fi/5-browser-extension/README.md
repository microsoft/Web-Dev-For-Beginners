<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-27T20:42:33+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "fi"
}
-->
# Selaimen laajennuksen rakentaminen

Selaimen laajennusten rakentaminen on hauska ja mielenkiintoinen tapa pohtia sovellustesi suorituskykyä samalla kun luot erilaisen verkkovarannon. Tämä moduuli sisältää oppitunteja siitä, miten selaimet toimivat ja miten selaimen laajennus otetaan käyttöön, miten lomake rakennetaan, API kutsutaan ja paikallista tallennusta käytetään, sekä miten verkkosivustosi suorituskykyä arvioidaan ja parannetaan.

Rakennat selaimen laajennuksen, joka toimii Edgessä, Chromessa ja Firefoxissa. Tämä laajennus, joka on kuin pieni verkkosivusto, joka on räätälöity hyvin spesifiseen tehtävään, tarkistaa [C02 Signal API:n](https://www.co2signal.com) tietyn alueen sähkönkulutuksen ja hiilijalanjäljen, ja palauttaa lukeman alueen hiilijalanjäljestä.

Tätä laajennusta käyttäjä voi kutsua ad hoc -tyyliin, kun API-avain ja aluekoodi syötetään lomakkeeseen, jotta paikallinen sähkönkulutus voidaan määrittää ja tarjota dataa, joka voi vaikuttaa käyttäjän sähkönkäyttöpäätöksiin. Esimerkiksi voi olla suositeltavaa lykätä pyykin kuivausrummun käyttöä (hiili-intensiivinen toiminta) ajankohtaan, jolloin alueesi sähkönkulutus on korkealla.

### Aiheet

1. [Tietoa selaimesta](1-about-browsers/README.md)
2. [Lomakkeet ja paikallinen tallennus](2-forms-browsers-local-storage/README.md)
3. [Taustatehtävät ja suorituskyky](3-background-tasks-and-performance/README.md)

### Kiitokset

![vihreä selaimen laajennus](../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.fi.png)

## Kiitokset

Tämän verkkohiilitriggerin idea tuli Asim Hussainilta, Microsoftin Green Cloud Advocacy -tiimin johtajalta ja [Green Principles](https://principles.green/) -kirjoittajalta. Alun perin se oli [verkkosivustoprojekti](https://github.com/jlooper/green).

Selaimen laajennuksen rakenne sai vaikutteita [Adebola Adeniranin COVID-laajennuksesta](https://github.com/onedebos/covtension).

'Piste'-kuvakkeiden järjestelmän konsepti sai inspiraationsa [Energy Lollipop](https://energylollipop.com/) -selaimen laajennuksen kuvakerakenteesta, joka on suunniteltu Kalifornian päästöille.

Nämä oppitunnit kirjoitettiin ♥️:lla [Jen Looperin](https://www.twitter.com/jenlooper) toimesta.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.