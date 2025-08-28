<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c40a698395ee5102715f7880bba3f2e7",
  "translation_date": "2025-08-27T20:20:32+00:00",
  "source_file": "6-space-game/README.md",
  "language_code": "fi"
}
-->
# Rakenna avaruuspeli

Avaruuspeli, joka opettaa edistyneempiä JavaScriptin perusteita

Tässä oppitunnissa opit rakentamaan oman avaruuspelisi. Jos olet koskaan pelannut peliä "Space Invaders", tämä peli perustuu samaan ideaan: ohjata avaruusalusta ja ampua hirviöitä, jotka tulevat ylhäältä alas. Valmis peli näyttää tältä:

![Valmis peli](../../../6-space-game/images/pewpew.gif)

Näiden kuuden oppitunnin aikana opit seuraavaa:

- **Vuorovaikuttamaan** Canvas-elementin kanssa piirtääksesi asioita näytölle
- **Ymmärtämään** karteesista koordinaatistojärjestelmää
- **Oppimaan** Pub-Sub-mallin luodaksesi selkeän pelirakenteen, jota on helpompi ylläpitää ja laajentaa
- **Hyödyntämään** Async/Awaitia pelin resurssien lataamiseen
- **Käsittelemään** näppäimistötapahtumia

## Yleiskatsaus

- Teoria
   - [Johdanto pelien rakentamiseen JavaScriptillä](1-introduction/README.md)
- Käytäntö
   - [Piirtäminen canvasille](2-drawing-to-canvas/README.md)
   - [Elementtien liikuttaminen näytöllä](3-moving-elements-around/README.md)
   - [Törmäyksentunnistus](4-collision-detection/README.md)
   - [Pisteiden laskeminen](5-keeping-score/README.md)
   - [Pelin lopettaminen ja uudelleenkäynnistäminen](6-end-condition/README.md)

## Kiitokset

Tässä käytetyt resurssit ovat peräisin osoitteesta https://www.kenney.nl/.  
Jos olet kiinnostunut pelien rakentamisesta, nämä ovat todella hyviä resursseja. Monet niistä ovat ilmaisia, ja osa on maksullisia.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.