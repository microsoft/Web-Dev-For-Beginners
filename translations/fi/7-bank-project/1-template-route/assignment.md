<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-23T00:35:48+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "fi"
}
-->
# Paranna reititystä

## Ohjeet

Nyt kun olet rakentanut perusreititysjärjestelmän, on aika kehittää sitä ammattimaisilla ominaisuuksilla, jotka parantavat käyttäjäkokemusta ja tarjoavat parempia työkaluja kehittäjille. Todelliset sovellukset tarvitsevat enemmän kuin pelkkää mallien vaihtamista – ne vaativat dynaamisia sivun otsikoita, elinkaarikoukkuja ja laajennettavia arkkitehtuureja.

Tässä tehtävässä laajennat reitityksen toteutusta kahdella olennaisella ominaisuudella, jotka ovat yleisiä tuotantokäytössä olevissa verkkosovelluksissa. Nämä parannukset tekevät pankkisovelluksestasi viimeistellymmän ja luovat pohjan tuleville toiminnallisuuksille.

Reittien määrittely sisältää tällä hetkellä vain käytettävän mallin ID:n. Mutta uuden sivun näyttäminen vaatii joskus hieman enemmän. Parannetaan reitityksen toteutusta kahdella lisäominaisuudella:

### Ominaisuus 1: Dynaamiset sivun otsikot
**Tavoite:** Anna jokaiselle mallille otsikko ja päivitä ikkunan otsikko tällä uudella otsikolla, kun malli vaihtuu.

**Miksi tämä on tärkeää:**
- **Parantaa** käyttäjäkokemusta näyttämällä kuvailevia selaimen välilehtiotsikoita
- **Lisää** saavutettavuutta ruudunlukijoille ja apuvälineille  
- **Tarjoaa** parempaa kirjanmerkki- ja selaushistoriakontekstia
- **Noudattaa** ammattimaisia verkkokehityksen parhaita käytäntöjä

**Toteutustapa:**
- **Laajenna** reittien objektia sisällyttämään otsikkotiedot jokaiselle reitille
- **Muokkaa** `updateRoute()`-funktiota päivittämään `document.title` dynaamisesti
- **Testaa**, että otsikot vaihtuvat oikein siirryttäessä näkymien välillä

### Ominaisuus 2: Reitin elinkaarikoukut  
**Tavoite:** Lisää mahdollisuus suorittaa koodia mallin vaihtamisen jälkeen. Haluamme tulostaa `'Dashboard is shown'` kehittäjäkonsoliin aina, kun dashboard-sivu näytetään.

**Miksi tämä on tärkeää:**
- **Mahdollistaa** mukautetun logiikan suorittamisen, kun tietyt reitit latautuvat
- **Tarjoaa** koukkuja analytiikkaa, lokitusta tai alustuskoodia varten
- **Luo** pohjan monimutkaisemmille reittikäyttäytymisille
- **Havainnollistaa** observer-mallia verkkokehityksessä

**Toteutustapa:**
- **Lisää** reittikonfiguraatioihin valinnainen callback-funktio-ominaisuus
- **Suorita** callback-funktio (jos määritelty) mallin renderöinnin jälkeen
- **Varmista**, että ominaisuus toimii kaikilla reiteillä, joilla on määritelty callback
- **Testaa**, että konsoliviesti ilmestyy dashboard-sivulla vieraillessa

## Arviointikriteerit

| Kriteeri | Erinomainen                                                                                                                          | Riittävä                                                                                                                                                                                  | Parannettavaa                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Molemmat ominaisuudet on toteutettu ja toimivat. Otsikon ja koodin lisäys toimii myös uudelle reitille, joka lisätään `routes`-määrittelyyn. | Molemmat ominaisuudet toimivat, mutta toiminta on kovakoodattu eikä konfiguroitavissa `routes`-määrittelyn kautta. Kolmannen reitin lisääminen otsikon ja koodin lisäyksellä ei toimi tai toimii osittain. | Toinen ominaisuuksista puuttuu tai ei toimi kunnolla. |

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.