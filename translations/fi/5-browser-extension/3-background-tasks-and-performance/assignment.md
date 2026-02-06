# Analysoi sivuston suorituskykyä

## Tehtävän yleiskatsaus

Suorituskyvyn analysointi on tärkeä taito nykyaikaisille web-kehittäjille. Tässä tehtävässä suoritat kattavan suorituskykyarvion oikeasta verkkosivustosta käyttäen sekä selaimen työkaluja että kolmannen osapuolen palveluita tunnistaaksesi pullonkaulat ja ehdottaaksesi optimointistrategioita.

Tehtäväsi on laatia yksityiskohtainen suorituskykyraportti, joka osoittaa ymmärryksesi verkkosuorituskyvyn periaatteista ja kyvyn käyttää ammattimaisia analysointityökaluja tehokkaasti.

## Tehtävän ohjeet

**Valitse analysoitava verkkosivusto** - valitse jokin seuraavista vaihtoehdoista:
- Suosittu verkkosivusto, jota käytät usein (uutissivusto, sosiaalinen media, verkkokauppa)
- Avoimen lähdekoodin projektin verkkosivusto (GitHub-sivut, dokumentaatiosivustot)
- Paikallisen yrityksen verkkosivusto tai portfoliosivusto
- Oma projektisi tai aiempi kurssityösi

**Tee monityökaluanalyysi** käyttäen vähintään kolmea eri lähestymistapaa:
- **Selaimen DevTools** - Käytä Chrome/Edge Performance-välilehteä yksityiskohtaiseen profilointiin
- **Verkkopohjaiset auditointityökalut** - Kokeile Lighthousea, GTmetrixiä tai WebPageTestiä
- **Verkkoanalyysi** - Tutki resurssien latausta, tiedostokokoja ja pyyntökuvioita

**Dokumentoi havaintosi** kattavassa raportissa, joka sisältää:

### Suorituskykymetriikoiden analyysi
- **Latausaikamittaukset** useista työkaluista ja näkökulmista
- **Core Web Vitals** -pisteet (LCP, FID, CLS) ja niiden merkitys
- **Resurssien erittely** osoittaen, mitkä elementit vaikuttavat eniten latausaikaan
- **Verkkovesiputousanalyysi** tunnistaen estävät resurssit

### Ongelman tunnistaminen
- **Tietyt suorituskyvyn pullonkaulat** tukidatan kanssa
- **Perimmäisten syiden analyysi** selittäen, miksi kukin ongelma ilmenee
- **Käyttäjävaikutusten arviointi** kuvaillen, miten ongelmat vaikuttavat todellisiin käyttäjiin
- **Ongelmien priorisointi** vakavuuden ja korjaamisen vaikeuden perusteella

### Optimointisuositukset
- **Tarkat, toteutettavissa olevat parannukset** ja niiden odotettu vaikutus
- **Toteutusstrategiat** kullekin suositellulle muutokselle
- **Nykyaikaiset parhaat käytännöt**, joita voidaan soveltaa (lazy loading, pakkaus jne.)
- **Työkalut ja tekniikat** jatkuvaan suorituskyvyn seurantaan

## Tutkimusvaatimukset

**Älä luota pelkästään selaintyökaluihin** - laajenna analyysiäsi käyttäen:

**Kolmannen osapuolen auditointipalveluita:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Kattavat auditoinnit
- [GTmetrix](https://gtmetrix.com/) - Suorituskyky- ja optimointinäkemykset
- [WebPageTest](https://www.webpagetest.org/) - Testaus todellisissa olosuhteissa
- [Pingdom](https://tools.pingdom.com/) - Globaali suorituskyvyn seuranta

**Erikoistuneet analyysityökalut:**
- [Bundle Analyzer](https://bundlephobia.com/) - JavaScript-pakettikoon analyysi
- [Kuvan optimointityökalut](https://squoosh.app/) - Resurssien optimointimahdollisuudet
- [Tietoturvaotsikoiden analyysi](https://securityheaders.com/) - Tietoturvan vaikutus suorituskykyyn

## Toimitusmuoto

Laadi ammattimainen raportti (2-3 sivua), joka sisältää:

1. **Yhteenveto** - Keskeiset havainnot ja suositusten yleiskatsaus
2. **Metodologia** - Käytetyt työkalut ja testausmenetelmä
3. **Nykyinen suorituskyvyn arviointi** - Perusmittarit ja tulokset
4. **Tunnistetut ongelmat** - Yksityiskohtainen ongelma-analyysi tukidatan kanssa
5. **Suositukset** - Priorisoidut parannusstrategiat
6. **Toteutussuunnitelma** - Askeltasoinen optimointisuunnitelma

**Sisällytä visuaalista näyttöä:**
- Kuvakaappauksia suorituskykytyökaluista ja metriikoista
- Kaavioita tai grafiikkaa, jotka esittävät suorituskykytietoja
- Ennen/jälkeen vertailuja, jos mahdollista
- Verkkovesiputouskaavioita ja resurssien erittelyjä

## Arviointikriteerit

| Kriteeri | Erinomainen (90-100%) | Hyvä (70-89%) | Parannettavaa (50-69%) |
| -------- | --------------------- | ------------- | ---------------------- |
| **Analyysin syvyys** | Kattava analyysi käyttäen 4+ työkalua yksityiskohtaisilla metriikoilla, perimmäisten syiden analyysillä ja käyttäjävaikutusten arvioinnilla | Hyvä analyysi käyttäen 3 työkalua selkeillä metriikoilla ja perustason ongelmatunnistuksella | Perustason analyysi käyttäen 2 työkalua rajallisella syvyydellä ja vähäisellä ongelmatunnistuksella |
| **Työkalujen monipuolisuus** | Käyttää selaintyökaluja + 3+ kolmannen osapuolen palvelua vertailevalla analyysillä ja näkemyksillä | Käyttää selaintyökaluja + 2 kolmannen osapuolen palvelua jonkinlaisella vertailevalla analyysillä | Käyttää selaintyökaluja + 1 kolmannen osapuolen palvelua rajallisella vertailulla |
| **Ongelman tunnistaminen** | Tunnistaa 5+ erityistä suorituskykyongelmaa yksityiskohtaisella perimmäisten syiden analyysillä ja mitatulla vaikutuksella | Tunnistaa 3-4 suorituskykyongelmaa hyvällä analyysillä ja jonkinlaisella vaikutuksen mittauksella | Tunnistaa 1-2 suorituskykyongelmaa perustason analyysillä |
| **Suositukset** | Tarjoaa tarkkoja, toteutettavissa olevia suosituksia toteutustiedoilla, odotetuilla vaikutuksilla ja nykyaikaisilla parhailla käytännöillä | Tarjoaa hyviä suosituksia joillakin toteutusohjeilla ja odotetuilla tuloksilla | Tarjoaa perustason suosituksia rajallisilla toteutustiedoilla |
| **Ammattimainen esitys** | Hyvin jäsennelty raportti selkeällä rakenteella, visuaalisella näytöllä, yhteenvedolla ja ammattimaisella ulkoasulla | Hyvä jäsentely joillakin visuaalisilla elementeillä ja selkeällä rakenteella | Perustason jäsentely vähäisellä visuaalisella näytöllä |

## Oppimistulokset

Tämän tehtävän suorittamalla osoitat kykysi:
- **Soveltaa** ammattimaisia suorituskyvyn analysointityökaluja ja menetelmiä
- **Tunnistaa** suorituskyvyn pullonkauloja datalähtöisen analyysin avulla
- **Analysoida** koodin laadun ja käyttäjäkokemuksen välistä suhdetta
- **Suositella** tarkkoja, toteutettavissa olevia optimointistrategioita
- **Viestittää** teknisiä havaintoja ammattimaisessa muodossa

Tämä tehtävä vahvistaa oppitunnilla opittuja suorituskykykonsepteja samalla kun kehität käytännön taitoja, joita tarvitset koko web-kehitysurasi aikana.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.