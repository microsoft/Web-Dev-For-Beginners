<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:05:12+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "fi"
}
-->
***

# Koodieditorin käyttö: Hallitse [VSCode.dev](https://vscode.dev)

**Tervetuloa!**  
Tämä oppitunti vie sinut perusteista edistyneeseen käyttöön [VSCode.dev](https://vscode.dev)—tehokas, verkkopohjainen koodieditori. Opit muokkaamaan koodia itsevarmasti, hallitsemaan projekteja, seuraamaan muutoksia, asentamaan laajennuksia ja tekemään yhteistyötä kuin ammattilainen—kaikki suoraan selaimesta, ilman asennuksia.

***

## Oppimistavoitteet

Oppitunnin lopussa osaat:

- Käyttää koodieditoria tehokkaasti missä tahansa projektissa, missä tahansa
- Seurata työtäsi saumattomasti sisäänrakennetulla versionhallinnalla
- Personoida ja tehostaa kehitystyötäsi editorin mukautuksilla ja laajennuksilla

***

## Esivaatimukset

Aloittaaksesi, **rekisteröidy ilmaiseksi [GitHub](https://github.com)-tilille**, joka mahdollistaa koodivarastojen hallinnan ja maailmanlaajuisen yhteistyön. Jos sinulla ei vielä ole tiliä, [luo yksi täällä](https://github.com/).

***

## Miksi käyttää verkkopohjaista koodieditoria?

**Koodieditori**, kuten VSCode.dev, on komentokeskuksesi koodin kirjoittamiseen, muokkaamiseen ja hallintaan. Intuitiivisen käyttöliittymän, lukemattomien ominaisuuksien ja välittömän selaimen kautta tapahtuvan pääsyn ansiosta voit:

- Muokata projekteja millä tahansa laitteella
- Välttää asennusten vaivaa
- Tehdä yhteistyötä ja osallistua välittömästi

Kun olet perehtynyt VSCode.dev:iin, olet valmis tarttumaan koodaushaasteisiin mistä tahansa, milloin tahansa.

***

## Aloittaminen VSCode.dev:in kanssa

Siirry **[VSCode.dev](https://vscode.dev)**-sivustolle—ei asennuksia, ei latauksia. Kirjautuminen GitHubilla avaa täyden pääsyn, mukaan lukien asetusten, laajennusten ja varastojen synkronoinnin. Jos sinua pyydetään, yhdistä GitHub-tilisi.

Kun editori latautuu, työtilasi näyttää tältä:

![Oletus VSCode.dev](../images/default-vscode-dev sisältää kolme pääosaa vasemmalta oikealle:
- **Toimintopalkki:** Kuvakkeet, kuten 🔎 (Haku), ⚙️ (Asetukset), tiedostot, versionhallinta jne.
- **Sivupalkki:** Muuttaa kontekstia valitun toimintopalkin kuvakkeen mukaan (oletuksena *Explorer* näyttää tiedostot).
- **Editorin/koodin alue:** Suurin osa oikealla—paikka, jossa muokkaat ja tarkastelet koodia.

Klikkaa kuvakkeita tutkiaksesi ominaisuuksia, mutta palaa _Explorer_-osioon pysyäksesi kartalla.

***

## GitHub-varaston avaaminen

### Menetelmä 1: Editorista

1. Siirry [VSCode.dev](https://vscode.dev)-sivustolle. Klikkaa **"Open Remote Repository."**

   ![Avaa etävarasto](../../../../8-code-editor/images/open-remote-repository käytä _Command Palette_-valikkoa (Ctrl-Shift-P tai Cmd-Shift-P Macilla).

   ![Palettivalikko](../images/palette-menu.pngavaa etävarasto.”
   - Valitse vaihtoehto.
   - Liitä GitHub-varastosi URL-osoite (esim. `https://github.com/microsoft/Web-Dev-For-Beginners`) ja paina Enter.

Jos onnistuu, näet koko projektin ladattuna ja valmiina muokattavaksi!

***

### Menetelmä 2: Välittömästi URL-osoitteen kautta

Muuta mikä tahansa GitHub-varaston URL-osoite avautumaan suoraan VSCode.dev:ssä korvaamalla `github.com` `vscode.dev/github`:illa.  
Esim.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Tämä ominaisuus nopeuttaa pääsyä mihin tahansa projektiin.

***

## Tiedostojen muokkaaminen projektissasi

Kun varastosi on avattu, voit:

### 1. **Luoda uuden tiedoston**
- *Explorer*-sivupalkissa, siirry haluamaasi kansioon tai käytä juurihakemistoa.
- Klikkaa _‘New file ...’_ -kuvaketta.
- Nimeä tiedostosi, paina **Enter**, ja tiedostosi ilmestyy välittömästi.

![Luo uusi tiedosto](../images/create-new-file 2. **Muokkaa ja tallenna tiedostoja**

- Klikkaa tiedostoa *Explorer*-osiossa avataksesi sen koodialueella.
- Tee tarvittavat muutokset.
- VSCode.dev tallentaa muutokset automaattisesti, mutta voit painaa Ctrl+S tallentaaksesi manuaalisesti.

![Muokkaa tiedostoa](../images/edit-a-file.png. **Seuraa & sitoudu muutoksiin versionhallinnalla**

VSCode.dev sisältää integroidun **Git**-versionhallinnan!

- Klikkaa _'Source Control'_ -kuvaketta nähdäksesi kaikki tehdyt muutokset.
- Tiedostot `Changes`-kansiossa näyttävät lisäykset (vihreä) ja poistot (punainen).  
  ![Näytä muutokset](../images/working-tree.png muutokset klikkaamalla `+` tiedostojen vieressä valmistellaksesi sitoumusta.
- **Hylkää** ei-toivotut muutokset klikkaamalla kumoa-kuvaketta.
- Kirjoita selkeä sitoumusviesti ja klikkaa valintamerkkiä sitoutuaksesi ja lähettääksesi.

Palataksesi varastoosi GitHubissa, valitse hampurilaisvalikko vasemmasta yläkulmasta.

![Valmistele & sitoudu muutoksiin](../images/edit-vscode.dev Laajennusten käyttö

Laajennukset mahdollistavat kielten, teemojen, virheenkorjaajien ja tuottavuustyökalujen lisäämisen VSCode.dev:iin—tehden koodauselämästäsi helpompaa ja hauskempaa.

### Laajennusten selaaminen ja hallinta

- Klikkaa **Laajennukset-kuvaketta** toimintopalkissa.
- Etsi laajennusta _'Search Extensions in Marketplace'_ -laatikossa.

  ![Laajennuksen tiedot](../images/extension-details:
  - **Asennetut**: Kaikki lisäämäsi laajennukset
  - **Suositut**: Alan suosikit
  - **Suositellut**: Työskentelytapasi mukaan räätälöidyt

  ![Näytä laajennukset](

  

***

### 1. **Asenna laajennuksia**

- Syötä laajennuksen nimi hakukenttään, klikkaa sitä ja tarkista tiedot editorissa.
- Paina **sinistä Asenna-painiketta** sivupalkissa _tai_ pääkoodialueella.

  ![Asenna laajennuksia](../images/install-extension 2. **Mukauta laajennuksia**

- Etsi asennettu laajennuksesi.
- Klikkaa **Hammasratas-kuvaketta** → valitse _Extension Settings_ hienosäätääksesi asetuksia mielesi mukaan.

  ![Muokkaa laajennusasetuksia](../images/extension-settings 3. **Hallitse laajennuksia**
Voit:

- **Poistaa käytöstä:** Sammuttaa laajennuksen väliaikaisesti säilyttäen sen asennettuna
- **Poistaa:** Poistaa sen pysyvästi, jos et enää tarvitse sitä

  Etsi laajennus, paina Hammasratas-kuvaketta ja valitse ‘Disable’ tai ‘Uninstall,’ tai käytä sinisiä painikkeita koodialueella.

***

## Tehtävä

Testaa taitosi: [Luo ansioluettelosivusto käyttäen vscode.dev:ia](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Lisätutkimus ja itseopiskelu

- Sukella syvemmälle [virallisilla VSCode Web -dokumenteilla](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Tutki edistyneitä työtilan ominaisuuksia, pikanäppäimiä ja asetuksia.

***

**Nyt olet valmis koodaamaan, luomaan ja tekemään yhteistyötä—mistä tahansa, millä tahansa laitteella, käyttäen VSCode.dev:ia!**

---

**Vastuuvapauslauseke**:  
Tämä asiakirja on käännetty käyttämällä tekoälypohjaista käännöspalvelua [Co-op Translator](https://github.com/Azure/co-op-translator). Vaikka pyrimme tarkkuuteen, huomioithan, että automaattiset käännökset voivat sisältää virheitä tai epätarkkuuksia. Alkuperäinen asiakirja sen alkuperäisellä kielellä tulisi pitää ensisijaisena lähteenä. Kriittisen tiedon osalta suositellaan ammattimaista ihmiskäännöstä. Emme ole vastuussa väärinkäsityksistä tai virhetulkinnoista, jotka johtuvat tämän käännöksen käytöstä.