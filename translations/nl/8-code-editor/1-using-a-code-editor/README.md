<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:08:23+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "nl"
}
-->
***

# Een code-editor gebruiken: Meester worden in [VSCode.dev](https://vscode.dev)

**Welkom!**  
Deze les neemt je mee van de basis tot het gevorderde gebruik van [VSCode.dev](https://vscode.dev)—de krachtige, webgebaseerde code-editor. Je leert hoe je vol vertrouwen code kunt bewerken, projecten kunt beheren, wijzigingen kunt bijhouden, extensies kunt installeren en als een professional kunt samenwerken—allemaal vanuit je browser, zonder installatie.

***

## Leerdoelen

Aan het einde van deze les kun je:

- Efficiënt een code-editor gebruiken voor elk project, waar je ook bent
- Naadloos je werk bijhouden met ingebouwde versiebeheer
- Je ontwikkelworkflow personaliseren en verbeteren met editor-aanpassingen en extensies

***

## Vereisten

Om te beginnen, **meld je aan voor een gratis [GitHub](https://github.com) account**, waarmee je code-repositories kunt beheren en wereldwijd kunt samenwerken. Als je nog geen account hebt, [maak er hier een aan](https://github.com/).

***

## Waarom een webgebaseerde code-editor gebruiken?

Een **code-editor** zoals VSCode.dev is jouw commandocentrum voor het schrijven, bewerken en beheren van code. Met een intuïtieve interface, talloze functies en directe toegang via de browser kun je:

- Projecten bewerken op elk apparaat
- Het gedoe van installaties vermijden
- Direct samenwerken en bijdragen

Zodra je vertrouwd bent met VSCode.dev, ben je klaar om codetaken overal en altijd aan te pakken.

***

## Aan de slag met VSCode.dev

Ga naar **[VSCode.dev](https://vscode.dev)**—geen installatie, geen downloads. Inloggen met GitHub geeft volledige toegang, inclusief het synchroniseren van je instellingen, extensies en repositories. Als daarom wordt gevraagd, verbind je je GitHub-account.

Na het laden ziet je werkruimte er zo uit:

![Standaard VSCode.dev](../images/default-vscode-dev heeft drie kernsecties van links naar rechts:
- **Activiteitenbalk:** De pictogrammen zoals 🔎 (Zoeken), ⚙️ (Instellingen), bestanden, versiebeheer, enz.
- **Zijbalk:** Verandert van context op basis van het geselecteerde pictogram in de activiteitenbalk (standaard *Verkenner* om bestanden te tonen).
- **Editor/codegebied:** Het grootste gedeelte aan de rechterkant—waar je daadwerkelijk code bewerkt en bekijkt.

Klik door de pictogrammen om functies te verkennen, maar keer terug naar de _Verkenner_ om je plek te behouden.

***

## Een GitHub-repository openen

### Methode 1: Vanuit de editor

1. Ga naar [VSCode.dev](https://vscode.dev). Klik op **"Open Remote Repository."**

   ![Open remote repository](../../../../8-code-editor/images/open-remote-repository gebruik het _Command Palette_ (Ctrl-Shift-P, of Cmd-Shift-P op Mac).

   ![Paletmenu](../images/palette-menu.pngopen remote repository.”
   - Selecteer de optie.
   - Plak de URL van je GitHub-repo (bijv. `https://github.com/microsoft/Web-Dev-For-Beginners`) en druk op Enter.

Als het succesvol is, zie je het hele project geladen en klaar om te bewerken!

***

### Methode 2: Direct via URL

Transformeer elke GitHub-repo-URL om direct te openen in VSCode.dev door `github.com` te vervangen door `vscode.dev/github`.  
Bijv.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Deze functie versnelt snelle toegang tot ELK project.

***

## Bestanden bewerken in je project

Zodra je repo is geopend, kun je:

### 1. **Een nieuw bestand maken**
- In de *Verkenner*-zijbalk, navigeer naar de gewenste map of gebruik de hoofdmap.
- Klik op het pictogram _‘Nieuw bestand ...’_.
- Geef je bestand een naam, druk op **Enter**, en je bestand verschijnt direct.

![Maak een nieuw bestand](../images/create-new-file 2. **Bestanden bewerken en opslaan**

- Klik op een bestand in de *Verkenner* om het te openen in het codegebied.
- Breng de gewenste wijzigingen aan.
- VSCode.dev slaat je wijzigingen automatisch op, maar je kunt handmatig opslaan door op Ctrl+S te drukken.

![Bewerk een bestand](../images/edit-a-file.png. **Wijzigingen bijhouden en vastleggen met versiebeheer**

VSCode.dev heeft geïntegreerd **Git** versiebeheer!

- Klik op het _'Source Control'_ pictogram om alle aangebrachte wijzigingen te bekijken.
- Bestanden in de `Changes` map tonen toevoegingen (groen) en verwijderingen (rood).  
  ![Bekijk wijzigingen](../images/working-tree.png wijzigingen door op het `+` naast bestanden te klikken om ze voor te bereiden op commit.
- **Verwijder** ongewenste wijzigingen door op het undo-pictogram te klikken.
- Typ een duidelijke commit-bericht en klik vervolgens op het vinkje om te committen en te pushen.

Om terug te keren naar je repository op GitHub, selecteer je het hamburgermenu linksboven.

![Wijzigingen voorbereiden en committen](../images/edit-vscode.dev uitbreiden met extensies

Extensies laten je talen, thema's, debuggers en productiviteitstools toevoegen aan VSCode.dev—waardoor je coderen eenvoudiger en leuker wordt.

### Extensies zoeken en beheren

- Klik op het **Extensies-pictogram** in de activiteitenbalk.
- Zoek naar een extensie in het _'Zoek extensies in Marketplace'_ vak.

  ![Details van extensies](../images/extension-details:
  - **Geïnstalleerd**: Alle extensies die je hebt toegevoegd
  - **Populair**: Favorieten uit de industrie
  - **Aanbevolen**: Afgestemd op jouw workflow

  ![Bekijk extensies](

  

***

### 1. **Extensies installeren**

- Voer de naam van de extensie in bij zoeken, klik erop en bekijk de details in de editor.
- Klik op de **blauwe Installeren-knop** in de zijbalk _of_ in het hoofdcodegebied.

  ![Extensies installeren](../images/install-extension 2. **Extensies aanpassen**

- Zoek je geïnstalleerde extensie.
- Klik op het **Tandwielpictogram** → selecteer _Extensie-instellingen_ om het gedrag naar wens aan te passen.

  ![Extensie-instellingen aanpassen](../images/extension-settings 3. **Extensies beheren**
Je kunt:

- **Uitschakelen:** Tijdelijk een extensie uitschakelen terwijl deze geïnstalleerd blijft
- **Verwijderen:** Permanent verwijderen als deze niet meer nodig is

  Zoek de extensie, klik op het tandwielpictogram en selecteer ‘Uitschakelen’ of ‘Verwijderen,’ of gebruik de blauwe knoppen in het codegebied.

***

## Opdracht

Test je vaardigheden: [Maak een cv-website met vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Verdere verkenning en zelfstudie

- Verdiep je met [de officiële VSCode Web Docs](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Verken geavanceerde werkruimtefuncties, sneltoetsen en instellingen.

***

**Nu ben je klaar om te coderen, creëren en samenwerken—vanuit overal, op elk apparaat, met VSCode.dev!**

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor cruciale informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.