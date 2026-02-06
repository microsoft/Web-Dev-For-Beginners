# Tehtävä: Tyylittele selaimen laajennuksesi uudelleen

## Yleiskatsaus

Nyt kun olet rakentanut HTML-rakenteen hiilijalanjäljen selaimen laajennukselle, on aika tehdä siitä visuaalisesti houkutteleva ja käyttäjäystävällinen. Hyvä suunnittelu parantaa käyttökokemusta ja tekee laajennuksestasi ammattimaisemman ja kiinnostavamman.

Laajennuksesi sisältää perus-CSS-tyylit, mutta tässä tehtävässä sinua haastetaan luomaan ainutlaatuinen visuaalinen identiteetti, joka heijastaa omaa tyyliäsi samalla kun säilytät erinomaisen käytettävyyden.

## Ohjeet

### Osa 1: Analysoi nykyinen suunnittelu

Ennen muutosten tekemistä tutki olemassa olevaa CSS-rakennetta:

1. **Etsi** CSS-tiedostot laajennusprojektistasi
2. **Tarkista** nykyinen tyylittelytapa ja värimaailma
3. **Tunnista** parannuskohteet asettelussa, typografiassa ja visuaalisessa hierarkiassa
4. **Pohdi**, miten suunnittelu tukee käyttäjän tavoitteita (helppo lomakkeen täyttö ja selkeä datan esitys)

### Osa 2: Suunnittele oma tyylisi

Luo yhtenäinen visuaalinen suunnittelu, joka sisältää:

**Värimaailma:**
- Valitse ensisijainen väripaletti, joka heijastaa ympäristöteemoja
- Varmista riittävä kontrasti saavutettavuuden kannalta (käytä työkaluja, kuten WebAIM:n kontrastitarkistinta)
- Mieti, miltä värit näyttävät eri selainten teemoissa

**Typografia:**
- Valitse helposti luettavat fontit, jotka toimivat hyvin pienissä laajennuskoissa
- Luo selkeä hierarkia sopivilla fonttikokoilla ja -painoilla
- Varmista, että teksti pysyy luettavana sekä vaaleissa että tummissa selainten teemoissa

**Asettelu ja välistys:**
- Paranna lomake-elementtien ja datan esityksen visuaalista järjestystä
- Lisää sopivaa täyttöä ja marginaaleja paremman luettavuuden saavuttamiseksi
- Huomioi responsiivisen suunnittelun periaatteet eri näyttökokoja varten

### Osa 3: Toteuta suunnittelusi

Muokkaa CSS-tiedostoja toteuttaaksesi suunnittelusi:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Keskeiset tyyliteltävät alueet:**
- **Lomake-elementit**: Syöttökentät, etiketit ja lähetä-painike
- **Tulosten esitys**: Datakontaineri, tekstin tyylittely ja lataustilat
- **Interaktiiviset elementit**: Hover-efektit, painikkeiden tilat ja siirtymät
- **Yleinen asettelu**: Kontainerin välistys, taustavärit ja visuaalinen hierarkia

### Osa 4: Testaa ja hienosäädä

1. **Rakenna** laajennuksesi komennolla `npm run build`
2. **Lataa** päivitetty laajennus selaimeesi
3. **Testaa** kaikki visuaaliset tilat (lomakkeen täyttö, lataus, tulosten esitys, virheet)
4. **Varmista** saavutettavuus selaimen kehittäjätyökaluilla
5. **Hienosäädä** tyylejäsi todellisen käytön perusteella

## Luovia haasteita

### Perustaso
- Päivitä värit ja fontit luodaksesi yhtenäisen teeman
- Paranna välistystä ja kohdistusta käyttöliittymän läpi
- Lisää hienovaraisia hover-efektejä interaktiivisiin elementteihin

### Keskitaso
- Suunnittele mukautettuja kuvakkeita tai grafiikoita laajennuksellesi
- Toteuta sulavat siirtymät eri tilojen välillä
- Luo ainutlaatuinen latausanimaatio API-kutsuille

### Edistynyt taso
- Suunnittele useita teema-asetuksia (vaalea/tumma/korkea kontrasti)
- Toteuta responsiivinen suunnittelu eri selaimen ikkunakokoja varten
- Lisää mikrointeraktioita, jotka parantavat käyttökokemusta

## Palautusohjeet

Valmiin tehtävän tulee sisältää:

- **Muokatut CSS-tiedostot** omalla tyylittelylläsi
- **Näyttökuvat**, jotka esittävät laajennuksesi eri tiloissa (lomake, lataus, tulokset)
- **Lyhyt kuvaus** (2-3 lausetta), jossa selität suunnittelupäätöksesi ja miten ne parantavat käyttökokemusta

## Arviointikriteerit

| Kriteeri | Erinomainen (4) | Hyvä (3) | Kehittyvä (2) | Alkuvaiheessa (1) |
|----------|-----------------|----------|---------------|-------------------|
| **Visuaalinen suunnittelu** | Luova, yhtenäinen suunnittelu, joka parantaa käytettävyyttä ja heijastaa vahvoja suunnitteluperiaatteita | Hyvät suunnitteluratkaisut, joissa on johdonmukainen tyylittely ja selkeä visuaalinen hierarkia | Perusparannuksia suunnittelussa, joitakin johdonmukaisuusongelmia | Vähäisiä tyylimuutoksia tai epäjohdonmukainen suunnittelu |
| **Toiminnallisuus** | Kaikki tyylit toimivat täydellisesti eri tiloissa ja selaimen ympäristöissä | Tyylit toimivat hyvin, mutta joitakin ongelmia reunatapauksissa | Useimmat tyylit toimivat, mutta joitakin näyttöongelmia | Merkittäviä tyyliongelmia, jotka vaikuttavat käytettävyyteen |
| **Koodin laatu** | Siisti, hyvin organisoitu CSS, jossa on merkitykselliset luokkanimet ja tehokkaat valitsimet | Hyvä CSS-rakenne, jossa on asianmukainen valitsimien ja ominaisuuksien käyttö | Hyväksyttävä CSS, jossa on joitakin organisointiongelmia | Huono CSS-rakenne tai liian monimutkainen tyylittely |
| **Saavutettavuus** | Erinomainen värikontrasti, luettavat fontit ja huomio käyttäjille, joilla on erityistarpeita | Hyvät saavutettavuuskäytännöt, joissa on pieniä parannuskohteita | Perussaavutettavuuden huomiointi, mutta joitakin ongelmia | Vähäinen huomio saavutettavuusvaatimuksiin |

## Vinkkejä onnistumiseen

> 💡 **Suunnitteluvinkki**: Aloita hienovaraisista muutoksista ja etene kohti dramaattisempaa tyylittelyä. Pienet parannukset typografiassa ja välistyksessä vaikuttavat usein merkittävästi koettuun laatuun.

**Parhaat käytännöt:**
- **Testaa** laajennustasi sekä vaaleissa että tummissa selainten teemoissa
- **Käytä** suhteellisia yksiköitä (em, rem) paremman skaalautuvuuden saavuttamiseksi
- **Säilytä** johdonmukainen välistys käyttämällä CSS-mukautettuja ominaisuuksia
- **Pohdi**, miltä suunnittelusi näyttää käyttäjille, joilla on erilaisia visuaalisia tarpeita
- **Vahvista** CSS:si varmistaaksesi, että se noudattaa oikeaa syntaksia

> ⚠️ **Yleinen virhe**: Älä uhraa käytettävyyttä visuaalisen houkuttelevuuden vuoksi. Laajennuksesi tulisi olla sekä kaunis että toimiva.

**Muista:**
- **Pidä** tärkeä tieto helposti luettavana
- **Varmista**, että painikkeet ja interaktiiviset elementit ovat helppoja klikata
- **Säilytä** selkeä visuaalinen palaute käyttäjän toimille
- **Testaa** suunnittelusi oikealla datalla, ei pelkästään paikkamerkkitekstillä

Onnea selaimen laajennuksen luomisessa, joka on sekä toimiva että visuaalisesti upea!

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.