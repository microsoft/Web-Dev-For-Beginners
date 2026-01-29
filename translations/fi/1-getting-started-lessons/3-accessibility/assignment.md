# Kattava verkkosivuston saavutettavuusauditointi

## Ohjeet

Tässä tehtävässä suoritat ammattitasoisen saavutettavuusauditoinnin oikealle verkkosivustolle, soveltaen oppimiasi periaatteita ja tekniikoita. Tämä käytännön kokemus syventää ymmärrystäsi saavutettavuuden esteistä ja ratkaisuista.

Valitse verkkosivusto, jossa näyttää olevan saavutettavuusongelmia—tämä tarjoaa enemmän oppimismahdollisuuksia kuin jo täydellisen sivuston analysointi. Hyviä ehdokkaita ovat vanhemmat verkkosivustot, monimutkaiset verkkosovellukset tai sivustot, joissa on runsaasti multimediaa.

### Vaihe 1: Strateginen manuaalinen arviointi

Ennen kuin käytät automaattisia työkaluja, suorita kattava manuaalinen arviointi. Tämä ihmiskeskeinen lähestymistapa paljastaa usein ongelmia, joita työkalut eivät havaitse, ja auttaa ymmärtämään todellista käyttäjäkokemusta.

**🔍 Keskeiset arviointikriteerit:**

**Navigointi ja rakenne:**
- Voitko navigoida koko sivustolla pelkästään näppäimistöllä (Tab, Shift+Tab, Enter, Space, nuolinäppäimet)?
- Ovatko kohdistusindikaattorit selvästi näkyvissä kaikissa interaktiivisissa elementeissä?
- Luoko otsikkorakenne (H1-H6) loogisen sisällön jäsennyksen?
- Onko sivustolla ohituslinkkejä, joilla voi siirtyä suoraan pääsisältöön?

**Visuaalinen saavutettavuus:**
- Onko sivustolla riittävä värikontrasti (vähintään 4.5:1 normaalille tekstille)?
- Perustuuko sivusto pelkästään väreihin tärkeän tiedon välittämisessä?
- Onko kaikilla kuvilla asianmukainen vaihtoehtoinen teksti?
- Pysyykö asettelu toimivana, kun sitä zoomataan 200 %?

**Sisältö ja viestintä:**
- Onko sivustolla "klikkaa tästä" -tyyppisiä tai epäselviä linkkitekstejä?
- Voiko sisällön ja toiminnallisuuden ymmärtää ilman visuaalisia vihjeitä?
- Ovatko lomakekentät asianmukaisesti nimettyjä ja ryhmiteltyjä?
- Ovatko virheilmoitukset selkeitä ja hyödyllisiä?

**Interaktiiviset elementit:**
- Toimivatko kaikki painikkeet ja lomakekontrollit pelkästään näppäimistöllä?
- Ilmoitetaanko dynaamiset sisällön muutokset ruudunlukijoille?
- Noudattavatko modaalidialogit ja monimutkaiset widgetit asianmukaisia saavutettavuusmalleja?

📝 **Dokumentoi havaintosi** konkreettisten esimerkkien, kuvakaappausten ja sivustojen URL-osoitteiden avulla. Kirjaa sekä ongelmat että hyvin toteutetut asiat.

### Vaihe 2: Kattava automaattinen testaus

Vahvista ja laajenna manuaalisia havaintojasi käyttämällä alan standardien mukaisia saavutettavuustestityökaluja. Jokaisella työkalulla on omat vahvuutensa, joten useiden työkalujen käyttö tarjoaa kattavamman analyysin.

**🛠️ Vaaditut testityökalut:**

1. **Lighthouse Accessibility Audit** (sisäänrakennettu Chrome/Edge DevTools)
   - Suorita auditointi useilla sivuilla
   - Keskity erityisiin mittareihin ja suosituksiin
   - Kirjaa saavutettavuuspisteet ja erityiset rikkomukset

2. **axe DevTools** (selaimen laajennus - alan standardi)
   - Yksityiskohtaisempi ongelmien tunnistus kuin Lighthouse
   - Tarjoaa konkreettisia koodiesimerkkejä korjauksille
   - Testaa WCAG 2.1 -kriteerien mukaisesti

3. **WAVE Web Accessibility Evaluator** (selaimen laajennus)
   - Visuaalinen esitys saavutettavuusominaisuuksista
   - Korostaa sekä virheet että positiiviset ominaisuudet
   - Erinomainen sivuston rakenteen ymmärtämiseen

4. **Värikontrastianalyysityökalut**
   - WebAIM Contrast Checker yksittäisille väripareille
   - Selaimen laajennukset koko sivun analyysiin
   - Testaa sekä WCAG AA- että AAA-standardien mukaisesti

**🎧 Testaus oikeilla apuvälineillä:**
- **Ruudunlukijatestaus**: Käytä NVDA (Windows), VoiceOver (Mac) tai TalkBack (Android)
- **Vain näppäimistön käyttö**: Irrota hiiri ja navigoi koko sivustolla
- **Zoomaus**: Testaa toiminnallisuus 200 % ja 400 % zoomaustasoilla
- **Puheohjaustestaus**: Jos mahdollista, kokeile puheohjaustyökaluja

**📊 Järjestä tuloksesi** luomalla päätaulukko, jossa on:
- Ongelman kuvaus ja sijainti
- Vakavuustaso (Kriittinen/Korkea/Keskitaso/Matala)
- WCAG:n rikottu menestyskriteeri
- Työkalu, joka havaitsi ongelman
- Kuvakaappaukset ja todisteet

### Vaihe 3: Kattava havaintojen dokumentointi

Luo ammattimainen saavutettavuusauditointiraportti, joka osoittaa ymmärryksesi sekä teknisistä ongelmista että niiden vaikutuksesta käyttäjiin.

**📋 Raportin vaaditut osiot:**

1. **Yhteenveto** (1 sivu)
   - Verkkosivuston URL ja lyhyt kuvaus
   - Yleinen saavutettavuuden taso
   - Kolme kriittisintä ongelmaa
   - Arvioitu vaikutus vammaisiin käyttäjiin

2. **Metodologia** (½ sivu)
   - Testausmenetelmä ja käytetyt työkalut
   - Arvioidut sivut ja laite/selainyhdistelmät
   - Arvioidut standardit (WCAG 2.1 AA)

3. **Yksityiskohtaiset havainnot** (2-3 sivua)
   - Ongelmat jaoteltuna WCAG-periaatteiden mukaan (Havaittava, Käytettävä, Ymmärrettävä, Kestävä)
   - Sisältää kuvakaappauksia ja konkreettisia esimerkkejä
   - Huomioi löydetyt positiiviset saavutettavuusominaisuudet
   - Ristiinviittaukset automaattisten työkalujen tuloksiin

4. **Käyttäjävaikutusten arviointi** (1 sivu)
   - Kuinka tunnistetut ongelmat vaikuttavat eri vammaisuuksiin
   - Todellisia käyttäjäkokemuksia kuvaavat skenaariot
   - Liiketoiminnalliset vaikutukset (oikeudelliset riskit, SEO, käyttäjäkunnan laajentaminen)

**📸 Todisteiden kerääminen:**
- Kuvakaappauksia saavutettavuusongelmista
- Näytön tallenteita ongelmallisista käyttäjäpoluista
- Työkaluraportteja (tallenna PDF-muodossa)
- Koodiesimerkkejä, jotka osoittavat ongelmat

### Vaihe 4: Ammattimainen korjaussuunnitelma

Laadi strateginen, priorisoitu suunnitelma saavutettavuusongelmien korjaamiseksi. Tämä osoittaa kykysi ajatella kuin oikea verkkokehittäjä, joka huomioi liiketoiminnan rajoitteet.

**🎯 Laadi yksityiskohtaiset parannusehdotukset (vähintään 10 ongelmaa):**

**Jokaiselle tunnistetulle ongelmalle anna:**

- **Ongelman kuvaus**: Selkeä selitys siitä, mikä on vialla ja miksi se on ongelmallista
- **WCAG-viite**: Rikottu menestyskriteeri (esim. "2.4.4 Linkin tarkoitus (kontekstissa) - Taso A")
- **Käyttäjävaikutus**: Kuinka tämä vaikuttaa eri vammaisuuksiin
- **Ratkaisu**: Konkreettiset koodimuutokset, suunnittelumuutokset tai prosessiparannukset
- **Prioriteettitaso**: Kriittinen (estää peruskäytön) / Korkea (merkittävä este) / Keskitaso (käytettävyysongelma) / Matala (parannus)
- **Toteutuksen vaativuus**: Aika/vaativuuden arvio (Nopea ratkaisu / Kohtalainen vaiva / Suuri uudistus)
- **Testauksen varmistus**: Kuinka varmistaa, että korjaus toimii

**Esimerkki parannusehdotuksesta:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strategiset toteutusvaiheet:**

- **Vaihe 1 (0-2 viikkoa)**: Kriittiset ongelmat, jotka estävät perustoiminnallisuuden
- **Vaihe 2 (1-2 kuukautta)**: Korkean prioriteetin parannukset paremman käyttäjäkokemuksen saavuttamiseksi
- **Vaihe 3 (3-6 kuukautta)**: Keskitasoiset parannukset ja prosessien kehittäminen
- **Vaihe 4 (Jatkuva)**: Jatkuva seuranta ja parantaminen

## Arviointikriteerit

Saavutettavuusauditointisi arvioidaan sekä teknisen tarkkuuden että ammattimaisen esityksen perusteella:

| Kriteeri | Erinomainen (90-100%) | Hyvä (80-89%) | Tyydyttävä (70-79%) | Parannettavaa (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Manuaalisen testauksen syvyys** | Kattava arviointi, joka kattaa kaikki POUR-periaatteet yksityiskohtaisilla havainnoilla ja käyttäjäskenaarioilla | Hyvä kattavuus useimmista saavutettavuusalueista selkeillä havainnoilla ja joillakin käyttäjävaikutusten analyyseilla | Perusarviointi, joka kattaa keskeiset alueet riittävillä havainnoilla | Rajoitettu testaus, pinnalliset havainnot ja vähäinen käyttäjävaikutusten huomiointi |
| **Työkalujen käyttö ja analyysi** | Käyttää kaikkia vaadittuja työkaluja tehokkaasti, ristiinviittaa havainnot, sisältää selkeät todisteet ja analysoi työkalujen rajoituksia | Käyttää useimpia työkaluja hyvällä dokumentaatiolla, jonkin verran ristiinviittausta ja riittäviä todisteita | Käyttää vaadittuja työkaluja perusdokumentaatiolla ja joillakin todisteilla | Vähäinen työkalujen käyttö, huono dokumentaatio tai puuttuvat todisteet |
| **Ongelman tunnistaminen ja luokittelu** | Tunnistaa 15+ erityistä ongelmaa kaikista WCAG-periaatteista, luokittelee tarkasti vakavuuden mukaan, osoittaa syvää ymmärrystä | Tunnistaa 10-14 ongelmaa useimmista WCAG-periaatteista, hyvä luokittelu, osoittaa vankkaa ymmärrystä | Tunnistaa 7-9 ongelmaa riittävällä WCAG-kattavuudella ja perusluokittelulla | Tunnistaa <7 ongelmaa rajatulla laajuudella tai huonolla luokittelulla |
| **Ratkaisujen laatu ja toteutettavuus** | 10+ yksityiskohtaista, toteuttamiskelpoista ratkaisua tarkkojen WCAG-viitteiden, realististen aikataulujen ja varmistusmenetelmien kanssa | 8-9 hyvin kehitettyä ratkaisua, joissa enimmäkseen tarkat viitteet ja hyvät toteutustiedot | 6-7 perusratkaisua joillakin yksityiskohdilla ja yleensä realistisilla lähestymistavoilla | <6 ratkaisua tai riittämättömät yksityiskohdat, epärealistiset toteutukset |
| **Ammattimainen viestintä** | Raportti on erinomaisesti järjestetty, selkeästi kirjoitettu, sisältää yhteenvedon, käyttää asianmukaista teknistä kieltä ja noudattaa liiketoimintadokumenttien standardeja | Hyvin järjestetty, hyvä kirjoituslaatu, sisältää useimmat vaaditut osiot, asianmukainen sävy | Riittävästi järjestetty, hyväksyttävä kirjoitus, sisältää perusvaatimukset | Huono järjestely, epäselvä kirjoitus tai puuttuvat keskeiset osiot |
| **Reaaliaikainen soveltaminen** | Osoittaa ymmärrystä liiketoiminnallisista vaikutuksista, oikeudellisista näkökohdista, käyttäjien monimuotoisuudesta ja käytännön toteutushaasteista | Osoittaa hyvää ymmärrystä käytännön sovelluksista joillakin liiketoimintakonteksteilla | Perustason ymmärrys reaaliaikaisista sovelluksista | Rajoitettu yhteys käytännön sovelluksiin |

## Edistyneet haastevaihtoehdot

**🚀 Lisähaasteita haluaville opiskelijoille:**

- **Vertailuanalyysi**: Auditoi 2-3 kilpailevaa verkkosivustoa ja vertaa niiden saavutettavuuden tasoa
- **Mobiilisaavutettavuuden tarkastelu**: Syvenny mobiilikohtaisiin saavutettavuusongelmiin käyttämällä Android TalkBackia tai iOS VoiceOveria
- **Kansainvälinen näkökulma**: Tutki ja sovella eri maiden saavutettavuusstandardeja (EN 301 549, Section 508, ADA)
- **Saavutettavuuslausunnon arviointi**: Arvioi verkkosivuston olemassa oleva saavutettavuuslausunto (jos sellainen on) havaintojesi perusteella

## Toimitettavat materiaalit

Toimita kattava saavutettavuusauditointiraportti, joka osoittaa ammattitason analyysin ja käytännön toteutussuunnittelun:

**📄 Lopullisen raportin vaatimukset:**

1. **Yhteenveto** (1 sivu)
   - Verkkosivuston yleiskuvaus ja saavutettavuuden tason arviointi
   - Keskeisten havaintojen yhteenveto liiketoiminnallisilla vaikutuksilla
   - Suositellut ensisijaiset toimenpiteet

2. **Metodologia ja laajuus** (1 sivu)
   - Testausmenetelmä, käytetyt työkalut ja arviointikriteerit
   - Arvioidut sivut/osiot ja mahdolliset rajoitukset
   - Standardien noudattamisen viitekehys (WCAG 2.1 AA)

3. **Yksityiskohtainen havaintoraportti** (3-4 sivua)
   - Manuaalisen testauksen havainnot käyttäjäskenaarioilla
   - Automaattisten työkalujen tulokset ristiinviittauksilla
   - Ongelmat jaoteltuna WCAG-periaatteiden mukaan todisteineen
   - Tunnistetut positiiviset saavutettavuusominaisuudet

4. **Strateginen korjaussuunnitelma** (3-4 sivua)
   - Priorisoidut parannusehdotukset (vähintään 10)
   - Toteutusaikataulu vaivaarvioineen
   - Onnistumisen mittarit ja varmistusmenetelmät
   - Pitkän aikavälin saavutettavuuden ylläpitostrategia

5. **Tukimateriaali** (Liitteet)
   - Kuvakaappauksia saavutettavuusongelmista ja testityökaluista
   - Koodiesimerkkejä, jotka osoittavat ongelmat ja ratkaisut
   - Työkaluraportit ja auditointiyhteenvedot
   - Ruudunlukijatestauksen muistiinpanot tai tallenteet

**📊 Muotovaatimukset:**
- **Dokumentin muoto**: PDF (ammattimainen esitys)
- **Sanamäärä**: 2,500-3,500 sanaa (pois lukien liitteet ja kuvakaappaukset)
- **Visuaaliset elementit**: Sisällytä kuvakaappauksia, kaavioita ja esimerkkejä
- **Viittaukset**: Viittaa WCAG-ohjeisiin ja saavutettavuusresursseihin asianmukaisesti

**💡 Vinkkejä erinomaisuuteen:**
- Käytä ammattimaista raporttimuotoilua yhtenäisillä otsikoilla ja tyylillä
- Sisällytä sisällysluettelo helppoa navigointia varten
- Tasapainota tekninen tarkkuus selkeän, liiketoimintaan sopivan kielen kanssa
- Osoita ymmärrystä sekä teknisestä toteutuksesta että käyttäjävaikutuksista

## Oppimistavoitteet

Tämän kattavan saavutettavuusauditoinnin suorittamisen jälkeen olet kehittänyt olennaisia ammattitaitoja:

**🎯 Tekninen osaaminen:**
- **Saavut

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.