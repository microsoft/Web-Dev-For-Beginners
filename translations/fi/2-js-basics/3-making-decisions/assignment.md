<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bf62b82567e6f9bdf4abda9ae0ccb64a",
  "translation_date": "2025-08-27T20:13:52+00:00",
  "source_file": "2-js-basics/3-making-decisions/assignment.md",
  "language_code": "fi"
}
-->
# Operaattorit

## Ohjeet

Kokeile operaattoreita. Tässä on ehdotus ohjelmasta, jonka voit toteuttaa:

Sinulla on joukko opiskelijoita kahdesta eri arvostelujärjestelmästä.

### Ensimmäinen arvostelujärjestelmä

Yksi arvostelujärjestelmä määrittelee arvosanat välillä 1-5, jossa 3 ja sitä korkeammat arvosanat tarkoittavat kurssin läpäisyä.

### Toinen arvostelujärjestelmä

Toisessa arvostelujärjestelmässä arvosanat ovat `A, A-, B, B-, C, C-`, jossa `A` on paras arvosana ja `C` on alin hyväksytty arvosana.

### Tehtävä

Annettuna seuraava taulukko `allStudents`, joka edustaa kaikkia opiskelijoita ja heidän arvosanojaan, rakenna uusi taulukko `studentsWhoPass`, joka sisältää kaikki kurssin läpäisseet opiskelijat.

> TIP, käytä for-silmukkaa, if...else-rakennetta ja vertailuoperaattoreita:

```javascript
let allStudents = [
  'A',
  'B-',
  1,
  4,
  5,
  2
]

let studentsWhoPass = [];
```

## Arviointikriteerit

| Kriteeri | Erinomainen                   | Riittävä                     | Parannusta vaativa              |
| -------- | ----------------------------- | ---------------------------- | ------------------------------- |
|          | Esitetty täydellinen ratkaisu | Esitetty osittainen ratkaisu | Esitetty ratkaisu sisältää virheitä |

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.