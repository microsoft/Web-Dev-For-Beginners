<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-11T11:46:56+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "et"
}
-->
***

# Koodi redaktori kasutamine: [VSCode.dev](https://vscode.dev) valdamine

**Tere tulemast!**  
See õppetund viib teid [VSCode.dev](https://vscode.dev)—võimsa veebipõhise koodi redaktori—põhitõdedest kuni edasijõudnud kasutamiseni. Õpite enesekindlalt koodi redigeerima, projekte haldama, muudatusi jälgima, laiendusi installima ja professionaalselt koostööd tegema—kõike seda otse oma brauserist, ilma et oleks vaja midagi installida.

***

## Õppe-eesmärgid

Selle õppetunni lõpuks oskate:

- Tõhusalt kasutada koodi redaktorit mis tahes projekti jaoks, igal pool
- Sujuvalt jälgida oma tööd sisseehitatud versioonihalduse abil
- Kohandada ja täiustada oma arenduskeskkonda redaktori seadistuste ja laiendustega

***

## Eeltingimused

Alustamiseks **registreerige tasuta [GitHubi](https://github.com) konto**, mis võimaldab teil hallata koodirepositooriume ja teha koostööd üle maailma. Kui teil pole veel kontot, [looge see siin](https://github.com/).

***

## Miks kasutada veebipõhist koodi redaktorit?

**Koodi redaktor**, nagu VSCode.dev, on teie juhtimiskeskus koodi kirjutamiseks, redigeerimiseks ja haldamiseks. Intuitiivse liidese, rohkete funktsioonide ja brauseri kaudu kohese juurdepääsuga saate:

- Redigeerida projekte mis tahes seadmes
- Vältida installimisega seotud tülikust
- Koostööd teha ja panustada koheselt

Kui olete VSCode.dev-iga mugav, olete valmis lahendama koodiga seotud ülesandeid igal ajal ja igal pool.

***

## VSCode.dev kasutamise alustamine

Liikuge **[VSCode.dev](https://vscode.dev)** lehele—ei installimist, ei allalaadimist. GitHubiga sisselogimine avab täieliku juurdepääsu, sealhulgas teie seadistuste, laienduste ja repositooriumide sünkroonimise. Kui küsitakse, ühendage oma GitHubi konto.

Pärast laadimist näeb teie tööruum välja selline:

![Vaikimisi VSCode.dev](../images/default-vscode-dev Kolm põhiosa vasakult paremale:
- **Tegevusriba:** Ikonid nagu 🔎 (Otsing), ⚙️ (Seaded), failid, versioonihaldus jne.
- **Külgriba:** Muutub vastavalt valitud tegevusriba ikoonile (vaikimisi *Explorer*, et näidata faile).
- **Redaktori/koodi ala:** Suurim osa paremal—koht, kus tegelikult koodi redigeerite ja vaatate.

Klõpsake ikoonidel, et funktsioone uurida, kuid naaske _Explorer_ juurde, et oma koht säilitada.

***

## GitHubi repositooriumi avamine

### Meetod 1: Redaktori kaudu

1. Minge [VSCode.dev](https://vscode.dev) lehele. Klõpsake **"Open Remote Repository."**

   ![Ava kaugrepositoorium](../../../../8-code-editor/images/open-remote-repository Kasutage _Command Palette_ (Ctrl-Shift-P või Cmd-Shift-P Macis).

   ![Paleti menüü](../images/palette-menu.png Ava kaugrepositoorium.”
   - Valige see valik.
   - Kleepige oma GitHubi repo URL (nt `https://github.com/microsoft/Web-Dev-For-Beginners`) ja vajutage Enter.

Kui õnnestub, näete kogu projekti laadituna ja redigeerimiseks valmis!

***

### Meetod 2: Kohene avamine URL-i kaudu

Muutke mis tahes GitHubi repo URL, et avada see otse VSCode.dev-is, asendades `github.com` `vscode.dev/github`-iga.  
Näiteks:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

See funktsioon kiirendab mis tahes projekti kiiret avamist.

***

## Failide redigeerimine projektis

Kui teie repo on avatud, saate:

### 1. **Luua uue faili**
- *Explorer* külgribal liikuge soovitud kausta või kasutage juurkausta.
- Klõpsake _‘New file ...’_ ikooni.
- Pange failile nimi, vajutage **Enter**, ja fail ilmub koheselt.

![Loo uus fail](../images/create-new-file 2. **Redigeeri ja salvesta faile**

- Klõpsake *Explorer* failil, et avada see koodialas.
- Tehke vajalikud muudatused.
- VSCode.dev salvestab muudatused automaatselt, kuid saate käsitsi salvestada, vajutades Ctrl+S.

![Redigeeri faili](../images/edit-a-file.png. **Jälgi ja kinnita muudatusi versioonihaldusega**

VSCode.dev sisaldab integreeritud **Git** versioonihaldust!

- Klõpsake _'Source Control'_ ikooni, et näha kõiki tehtud muudatusi.
- Failid `Changes` kaustas näitavad lisamisi (roheline) ja kustutamisi (punane).  
  ![Vaata muudatusi](../images/working-tree.png Muudatused, klõpsates `+` failide kõrval, et valmistada ette kinnitamiseks.
- **Loobu** soovimatutest muudatustest, klõpsates tagasivõtuikooni.
- Sisestage selge kinnitussõnum, seejärel klõpsake linnukest, et kinnitada ja lükata muudatused üles.

Tagasi GitHubi repositooriumisse naasmiseks valige vasakpoolne hamburgerimenüü.

![Etapp ja kinnita muudatused](../images/edit-vscode.dev Laiendustega

Laiendused võimaldavad lisada keeli, teemasid, silureid ja tootlikkuse tööriistu VSCode.dev-ile—muutes teie koodikirjutamise lihtsamaks ja lõbusamaks.

### Laienduste sirvimine ja haldamine

- Klõpsake **Laienduste ikooni** tegevusribal.
- Otsige laiendust _'Search Extensions in Marketplace'_ kastis.

  ![Laienduse üksikasjad](../images/extension-details:
  - **Paigaldatud**: Kõik lisatud laiendused
  - **Populaarsed**: Tööstuse lemmikud
  - **Soovitatud**: Kohandatud teie töövoo jaoks

  ![Vaata laiendusi](

  

***

### 1. **Installi laiendused**

- Sisestage laienduse nimi otsingusse, klõpsake seda ja vaadake üksikasju redaktoris.
- Vajutage **sinist Installi nuppu** külgribal _või_ peamises koodialas.

  ![Installi laiendused](../images/install-extension 2. **Kohanda laiendusi**

- Leidke oma paigaldatud laiendus.
- Klõpsake **Hammasratta ikooni** → valige _Extension Settings_, et peenhäälestada käitumist vastavalt oma eelistustele.

  ![Muuda laienduse seadeid](../images/extension-settings 3. **Halda laiendusi**
Saate:

- **Keelata:** Ajutiselt välja lülitada laienduse, säilitades selle paigaldatuna
- **Desinstallida:** Püsivalt eemaldada, kui seda enam ei vajata

  Leidke laiendus, vajutage Hammasratta ikooni ja valige ‘Disable’ või ‘Uninstall,’ või kasutage siniseid nuppe koodialas.

***

## Ülesanne

Proovige oma oskusi: [Looge CV veebisait, kasutades vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Edasine uurimine ja iseseisev õppimine

- Süvenege [ametlikesse VSCode veebidokumentidesse](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Avastage edasijõudnud tööruumi funktsioone, kiirklahve ja seadeid.

***

**Nüüd olete valmis koodi kirjutama, looma ja koostööd tegema—igal pool, igas seadmes, kasutades VSCode.dev-i!**

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.