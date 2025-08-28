<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7aa6e4f270d38d9cb17f2b5bd86b863d",
  "translation_date": "2025-08-27T20:39:53+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "fi"
}
-->
# Koodieditorin käyttö

Tässä oppitunnissa käsitellään [VSCode.dev](https://vscode.dev)-verkkopohjaisen koodieditorin perusteita, jotta voit tehdä muutoksia koodiisi ja osallistua projektiin asentamatta mitään tietokoneellesi.

## Oppimistavoitteet

Tässä oppitunnissa opit:

- Käyttämään koodieditoria koodiprojektissa
- Seuraamaan muutoksia versionhallinnan avulla
- Mukauttamaan editoria kehitystyötä varten

### Esivaatimukset

Ennen kuin aloitat, sinun tulee luoda tili [GitHubissa](https://github.com). Siirry [GitHubiin](https://github.com/) ja luo tili, jos sinulla ei vielä ole sellaista.

### Johdanto

Koodieditori on olennainen työkalu ohjelmien kirjoittamiseen ja yhteistyöhön olemassa olevien koodiprojektien parissa. Kun ymmärrät editorin perusteet ja osaat hyödyntää sen ominaisuuksia, voit soveltaa niitä koodin kirjoittamisessa.

## Aloittaminen VSCode.devillä

[VSCode.dev](https://vscode.dev) on verkkopohjainen koodieditori. Sen käyttö ei vaadi mitään asennuksia, aivan kuten minkä tahansa verkkosivun avaaminen. Aloittaaksesi editorin käytön, avaa seuraava linkki: [https://vscode.dev](https://vscode.dev). Jos et ole kirjautunut sisään [GitHubiin](https://github.com/), seuraa ohjeita kirjautuaksesi sisään tai luodaksesi uuden tilin ja kirjaudu sitten sisään.

Kun editori latautuu, sen pitäisi näyttää suunnilleen tältä:

![Oletusnäkymä VSCode.dev](../../../../translated_images/default-vscode-dev.5d06881d65c1b3234ce50cd9ed3b0028e6031ad5f5b441bcbed96bfa6311f6d0.fi.png)

Siinä on kolme pääosaa, vasemmalta oikealle:

1. _Toimintopalkki_, joka sisältää joitakin kuvakkeita, kuten suurennuslasin 🔎, rattaan ⚙️ ja muutamia muita.
2. Laajennettu toimintopalkki, joka oletuksena näyttää _Explorerin_, kutsutaan myös _sivupalkiksi_.
3. Koodialue oikealla.

Klikkaa kutakin kuvaketta nähdäksesi eri valikot. Kun olet valmis, klikkaa _Exploreria_, jotta palaat alkuun.

Kun alat luoda koodia tai muokata olemassa olevaa koodia, se tapahtuu suurimmassa alueessa oikealla. Käytät tätä aluetta myös olemassa olevan koodin tarkasteluun, mitä teet seuraavaksi.

## GitHub-repositorion avaaminen

Ensimmäinen asia, mitä tarvitset, on GitHub-repositorion avaaminen. Repositorion avaamiseen on useita tapoja. Tässä osiossa näet kaksi erilaista tapaa avata repositorio, jotta voit aloittaa muutosten tekemisen.

### 1. Editorin avulla

Käytä editoria avataksesi etärepositorio. Kun siirryt [VSCode.dev](https://vscode.dev)-sivustolle, näet _"Open Remote Repository"_ -painikkeen:

![Avaa etärepositorio](../../../../translated_images/open-remote-repository.bd9c2598b8949e7fc283cdfc8f4050c6205a7c7c6d3f78c4b135115d037d6fa2.fi.png)

Voit myös käyttää komentopalettia. Komentopaletti on syöttökenttä, johon voit kirjoittaa minkä tahansa komennon tai toiminnon löytääksesi oikean komennon suoritettavaksi. Käytä ylävasemman valikkoa, valitse _View_ ja sitten _Command Palette_, tai käytä seuraavaa pikanäppäintä: Ctrl-Shift-P (MacOS:lla Command-Shift-P).

![Palettivalikko](../../../../translated_images/palette-menu.4946174e07f426226afcdad707d19b8d5150e41591c751c45b5dee213affef91.fi.png)

Kun valikko avautuu, kirjoita _open remote repository_ ja valitse ensimmäinen vaihtoehto. Näet useita repositorioita, joihin kuulut tai joita olet avannut äskettäin. Voit myös käyttää täydellistä GitHub-URL-osoitetta valitaksesi yhden. Käytä seuraavaa URL-osoitetta ja liitä se kenttään:

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ Jos onnistut, näet kaikki tämän repositorion tiedostot ladattuina tekstieditoriin.

### 2. URL-osoitteen avulla

Voit myös käyttää suoraan URL-osoitetta ladataksesi repositorion. Esimerkiksi nykyisen repositorion täydellinen URL-osoite on [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners), mutta voit korvata GitHub-verkkotunnuksen `VSCode.dev/github`-osoitteella ja ladata repositorion suoraan. Tuloksena oleva URL-osoite olisi [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners).

## Tiedostojen muokkaaminen

Kun olet avannut repositorion selaimessa/vscode.devissä, seuraava vaihe on tehdä päivityksiä tai muutoksia projektiin.

### 1. Luo uusi tiedosto

Voit luoda tiedoston joko olemassa olevan kansion sisälle tai juurihakemistoon/kansioon. Luodaksesi uuden tiedoston, avaa sijainti/hakemisto, johon haluat tiedoston tallennettavan, ja valitse _'New file ...'_ -kuvake toimintopalkista _(vasemmalla)_, anna tiedostolle nimi ja paina Enter.

![Luo uusi tiedosto](../../../../translated_images/create-new-file.2814e609c2af9aeb6c6fd53156c503ac91c3d538f9cac63073b2dd4a7631f183.fi.png)

### 2. Muokkaa ja tallenna tiedosto repositoriossa

VSCode.dev on hyödyllinen, kun haluat tehdä nopeita päivityksiä projektiisi lataamatta mitään ohjelmistoa paikallisesti. Päivittääksesi koodiasi, klikkaa 'Explorer'-kuvaketta, joka sijaitsee myös toimintopalkissa, nähdäksesi tiedostot ja kansiot repositoriossa. Valitse tiedosto avataksesi sen koodialueella, tee muutokset ja tallenna.

![Muokkaa tiedostoa](../../../../translated_images/edit-a-file.52c0ee665ef19f08119d62d63f395dfefddc0a4deb9268d73bfe791f52c5807a.fi.png)

Kun olet valmis päivittämään projektisi, valitse _`source control`_ -kuvake, joka sisältää kaikki tekemäsi muutokset repositoriossa.

Nähdäksesi tekemäsi muutokset projektiin, valitse tiedosto(t) `Changes`-kansiosta laajennetussa toimintopalkissa. Tämä avaa 'Working Tree', jossa voit visuaalisesti nähdä tekemäsi muutokset tiedostoon. Punainen osoittaa projektista poistettuja osia, kun taas vihreä merkitsee lisäyksiä.

![Näytä muutokset](../../../../translated_images/working-tree.c58eec08e6335c79cc708c0c220c0b7fea61514bd3c7fb7471905a864aceac7c.fi.png)

Jos olet tyytyväinen tekemiisi muutoksiin, vie hiiri `Changes`-kansion päälle ja klikkaa `+`-painiketta lisätäksesi muutokset. Muutosten lisääminen tarkoittaa niiden valmistelua GitHubiin sitouttamista varten.

Jos et kuitenkaan ole tyytyväinen joihinkin muutoksiin ja haluat hylätä ne, vie hiiri `Changes`-kansion päälle ja valitse `undo`-kuvake.

Kirjoita sitten `commit message` _(Kuvaus tekemästäsi muutoksesta projektiin)_, klikkaa `check icon` sitouttaaksesi ja lähettääksesi muutokset.

Kun olet valmis työskentelemään projektisi parissa, valitse vasemman yläkulman `hamburger menu icon` palataksesi repositorioon github.comissa.

![Lisää & sitouta muutokset](../../../../8-code-editor/images/edit-vscode.dev.gif)

## Laajennusten käyttö

Laajennusten asentaminen VSCodeen mahdollistaa uusien ominaisuuksien lisäämisen ja mukautetut kehitysympäristöasetukset editoriisi, mikä parantaa kehitystyönkulkuasi. Nämä laajennukset auttavat myös lisäämään tukea useille ohjelmointikielille ja ovat usein joko yleisiä laajennuksia tai kielikohtaisia laajennuksia.

Selaa kaikkia saatavilla olevia laajennuksia klikkaamalla _`Extensions icon`_ toimintopalkissa ja aloita kirjoittamalla laajennuksen nimi tekstikenttään, joka on merkitty _'Search Extensions in Marketplace'_.
Näet listan laajennuksista, joista jokainen sisältää **laajennuksen nimen, julkaisijan nimen, yhden lauseen kuvauksen, latausten määrän** ja **tähtiluokituksen**.

![Laajennuksen tiedot](../../../../translated_images/extension-details.9f8f1fd4e9eb2de5069ae413119eb8ee43172776383ebe2f7cf640e11df2e106.fi.png)

Voit myös tarkastella kaikkia aiemmin asennettuja laajennuksia laajentamalla _`Installed folder`_, suosittuja laajennuksia, joita useimmat kehittäjät käyttävät, _`Popular folder`_ ja sinulle suositeltuja laajennuksia joko saman työtilan käyttäjien tai äskettäin avattujen tiedostojen perusteella _`recommended folder`_.

![Näytä laajennukset](../../../../translated_images/extensions.eca0e0c7f59a10b5c88be7fe24b3e32cca6b6058b35a49026c3a9d80b1813b7c.fi.png)

### 1. Asenna laajennuksia

Asentaaksesi laajennuksen, kirjoita laajennuksen nimi hakukenttään ja klikkaa sitä nähdäksesi lisätietoja laajennuksesta koodialueella, kun se ilmestyy laajennettuun toimintopalkkiin.

Voit joko klikata _sinistä asennuspainiketta_ laajennetussa toimintopalkissa tai käyttää asennuspainiketta, joka ilmestyy koodialueelle, kun valitset laajennuksen ladataksesi lisätietoja.

![Asenna laajennuksia](../../../../8-code-editor/images/install-extension.gif)

### 2. Mukauta laajennuksia

Laajennuksen asentamisen jälkeen saatat haluta muokata sen toimintaa ja mukauttaa sitä mieltymystesi mukaan. Voit tehdä tämän valitsemalla Laajennukset-kuvakkeen, ja tällä kertaa laajennuksesi näkyy _Installed folder_-kansiossa, klikkaa _**Gear icon**_ ja siirry _Extensions Setting_.

![Muokkaa laajennuksen asetuksia](../../../../translated_images/extension-settings.21c752ae4f4cdb78a867f140ccd0680e04619d0c44bb4afb26373e54b829d934.fi.png)

### 3. Hallitse laajennuksia

Laajennuksen asentamisen ja käytön jälkeen vscode.dev tarjoaa vaihtoehtoja laajennuksen hallintaan eri tarpeiden mukaan. Esimerkiksi voit:

- **Poistaa käytöstä:** _(Voit tilapäisesti poistaa laajennuksen käytöstä, kun et enää tarvitse sitä, mutta et halua poistaa sitä kokonaan)_

    Valitse asennettu laajennus laajennetussa toimintopalkissa > klikkaa Gear-kuvaketta > valitse 'Disable' tai 'Disable (Workspace)' **TAI** Avaa laajennus koodialueella ja klikkaa sinistä Disable-painiketta.

   
- **Poista:** Valitse asennettu laajennus laajennetussa toimintopalkissa > klikkaa Gear-kuvaketta > valitse 'Uninstall' **TAI** Avaa laajennus koodialueella ja klikkaa sinistä Uninstall-painiketta.

---

## Tehtävä
[Luo ansioluettelosivusto käyttämällä vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

## Kertaus & Itseopiskelu

Lue lisää [VSCode.devistä](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) ja sen muista ominaisuuksista.

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäistä asiakirjaa sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.