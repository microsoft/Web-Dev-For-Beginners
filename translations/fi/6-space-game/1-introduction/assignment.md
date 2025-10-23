<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2025-10-23T00:42:44+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "fi"
}
-->
# Luo peli: Käytä suunnittelumalleja

## Tehtävän yleiskatsaus

Hyödynnä uutta tietämystäsi suunnittelumalleista luomalla yksinkertainen peliprototyyppi! Tämä tehtävä auttaa sinua harjoittelemaan sekä arkkitehtuurimalleja (periytyminen tai koostaminen) että pub/sub-viestintäjärjestelmää, jonka opit oppitunnilla.

## Ohjeet

Luo yksinkertainen peliesitys, joka havainnollistaa tämän oppitunnin suunnittelumalleja. Pelisi tulisi olla toimiva, mutta sen ei tarvitse sisältää monimutkaista grafiikkaa – keskity sen sijaan taustalla olevaan arkkitehtuuriin ja viestintämalleihin.

### Vaatimukset

**Valitse arkkitehtuurimalli:**
- **Vaihtoehto A**: Käytä luokkapohjaista periytymistä (kuten esimerkissä `GameObject` → `Movable` → `Hero`)
- **Vaihtoehto B**: Käytä koostamista (kuten tehdasfunktiolähestymistapa yhdistetyillä käyttäytymisillä)

**Toteuta viestintä:**
- **Sisällytä** `EventEmitter`-luokka pub/sub-viestintää varten
- **Määritä** vähintään 2-3 erilaista viestityyppiä (kuten `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Yhdistä** käyttäjän syötteet (näppäimistö/hiiri) pelitapahtumiin tapahtumajärjestelmän kautta

**Pelielementit, jotka tulee sisällyttää:**
- Vähintään yksi pelaajan ohjaama hahmo
- Vähintään yksi muu pelin objekti (vihollinen, kerättävä esine tai ympäristöelementti)
- Perustoiminta objektien välillä (törmäys, keräys tai viestintä)

### Ehdotuksia peleiksi

**Yksinkertaisia pelejä harkittavaksi:**
- **Matopeli** – Matosegmentit seuraavat päätä, ruoka ilmestyy satunnaisesti
- **Pong-variantti** – Maila reagoi syötteeseen, pallo kimpoaa seinistä
- **Keräilijäpeli** – Pelaaja liikkuu keräten esineitä ja väistellen esteitä
- **Tower Defense -perusteet** – Tornit havaitsevat ja ampuvat liikkuvia vihollisia

### Koodirakenteen ohjeet

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Toteutuksen testaaminen

**Varmista, että koodisi toimii:**
- **Testaa**, että objektit liikkuvat tai muuttuvat, kun tapahtumia laukaistaan
- **Vahvista**, että useat objektit voivat reagoida samaan tapahtumaan
- **Tarkista**, että voit lisätä uusia käyttäytymisiä muuttamatta olemassa olevaa koodia
- **Varmista**, että näppäimistö/hiiri-syötteet laukaisevat pelitapahtumat oikein

## Palautusohjeet

**Palautuksesi tulisi sisältää:**
1. **JavaScript-tiedosto(t)** pelin toteutuksella
2. **HTML-tiedosto**, jolla peliä voi ajaa ja testata (voi olla yksinkertainen)
3. **Kommentit**, jotka selittävät, minkä mallin valitsit ja miksi
4. **Lyhyt dokumentaatio** viestityypeistä ja niiden toiminnasta

## Arviointikriteerit

| Kriteeri | Erinomainen (3 pistettä) | Riittävä (2 pistettä) | Parannettavaa (1 piste) |
|----------|--------------------------|-----------------------|-------------------------|
| **Arkkitehtuurimalli** | Toteuttaa oikein joko periytymisen TAI koostamisen selkeällä luokka/objektihierarkialla | Käyttää valittua mallia pienin puuttein tai epäjohdonmukaisuuksin | Yrittää käyttää mallia, mutta toteutuksessa on merkittäviä ongelmia |
| **Pub/Sub-toteutus** | EventEmitter toimii oikein useilla viestityypeillä ja asianmukaisella tapahtumavirtautuksella | Perustason pub/sub-järjestelmä toimii joillakin tapahtumilla | Tapahtumajärjestelmä on olemassa, mutta ei toimi luotettavasti |
| **Pelitoiminnallisuus** | Kolme tai enemmän interaktiivisia elementtejä, jotka kommunikoivat tapahtumien kautta | Kaksi interaktiivista elementtiä perusviestinnällä | Yksi elementti reagoi tapahtumiin tai perustoimintaan |
| **Koodin laatu** | Siisti, hyvin kommentoitu koodi, jossa on looginen järjestys ja moderni JavaScript | Yleisesti hyvin järjestetty koodi riittävillä kommenteilla | Koodi toimii, mutta puuttuu järjestystä tai selkeitä kommentteja |

**Bonus-pisteet:**
- **Luovat pelimekaniikat**, jotka esittelevät mielenkiintoisia tapoja käyttää malleja
- **Useita syöttötapoja** (näppäimistö JA hiiritapahtumat)
- **Laajennettava arkkitehtuuri**, jota olisi helppo laajentaa uusilla ominaisuuksilla

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.