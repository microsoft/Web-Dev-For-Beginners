<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T09:58:53+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "da"
}
-->
***

# Brug af en kodeeditor: Bliv ekspert i [VSCode.dev](https://vscode.dev)

**Velkommen!**  
Denne lektion tager dig fra det grundlæggende til avanceret brug af [VSCode.dev](https://vscode.dev)—den kraftfulde, webbaserede kodeeditor. Du lærer at redigere kode med selvtillid, administrere projekter, spore ændringer, installere udvidelser og samarbejde som en professionel—alt sammen direkte fra din browser, uden behov for installation.

***

## Læringsmål

Ved afslutningen af denne lektion vil du kunne:

- Effektivt bruge en kodeeditor til ethvert projekt, hvor som helst
- Problemfrit spore dit arbejde med indbygget versionskontrol
- Tilpasse og optimere din udviklingsarbejdsgang med editorindstillinger og udvidelser

***

## Forudsætninger

For at komme i gang skal du **tilmelde dig en gratis [GitHub](https://github.com)-konto**, som giver dig mulighed for at administrere kodearkiver og samarbejde globalt. Hvis du ikke har en konto endnu, [opret en her](https://github.com/).

***

## Hvorfor bruge en webbaseret kodeeditor?

En **kodeeditor** som VSCode.dev er dit kommandocenter til at skrive, redigere og administrere kode. Med en intuitiv grænseflade, masser af funktioner og øjeblikkelig adgang via browseren kan du:

- Redigere projekter på enhver enhed
- Undgå besværet med installationer
- Samarbejde og bidrage med det samme

Når du er fortrolig med VSCode.dev, vil du være klar til at tackle kodningsopgaver hvor som helst, når som helst.

***

## Kom godt i gang med VSCode.dev

Gå til **[VSCode.dev](https://vscode.dev)**—ingen installation, ingen downloads. Når du logger ind med GitHub, får du fuld adgang, inklusive synkronisering af dine indstillinger, udvidelser og arkiver. Hvis du bliver bedt om det, skal du forbinde din GitHub-konto.

Når du har indlæst, vil din arbejdsplads se sådan ud:

![Standard VSCode.dev](../images/default-vscode-dev har tre kerneområder fra venstre mod højre:
- **Aktivitetslinje:** Ikoner som 🔎 (Søg), ⚙️ (Indstillinger), filer, kildekontrol osv.
- **Sidebar:** Skifter kontekst baseret på det valgte ikon i aktivitetslinjen (standard er *Explorer* til visning af filer).
- **Editor/kodeområde:** Det største område til højre—hvor du faktisk redigerer og ser kode.

Klik på ikonerne for at udforske funktionerne, men vend tilbage til _Explorer_ for at holde styr på dit sted.

***

## Åbning af et GitHub-arkiv

### Metode 1: Fra editoren

1. Gå til [VSCode.dev](https://vscode.dev). Klik på **"Open Remote Repository."**

   ![Åbn fjernarkiv](../../../../8-code-editor/images/open-remote-repository brug _Command Palette_ (Ctrl-Shift-P eller Cmd-Shift-P på Mac).

   ![Palette-menu](../images/palette-menu.pngopen remote repository.”
   - Vælg muligheden.
   - Indsæt din GitHub repo URL (f.eks. `https://github.com/microsoft/Web-Dev-For-Beginners`) og tryk Enter.

Hvis det lykkes, vil du se hele projektet indlæst og klar til redigering!

***

### Metode 2: Direkte via URL

Transformér enhver GitHub repo URL til at åbne direkte i VSCode.dev ved at erstatte `github.com` med `vscode.dev/github`.  
F.eks.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Denne funktion giver lynhurtig adgang til ethvert projekt.

***

## Redigering af filer i dit projekt

Når dit arkiv er åbent, kan du:

### 1. **Oprette en ny fil**
- I *Explorer*-sidebaren skal du navigere til den ønskede mappe eller bruge roden.
- Klik på _‘Ny fil ...’_ ikonet.
- Navngiv din fil, tryk **Enter**, og din fil vises med det samme.

![Opret en ny fil](../images/create-new-file 2. **Rediger og gem filer**

- Klik på en fil i *Explorer* for at åbne den i kodeområdet.
- Foretag de nødvendige ændringer.
- VSCode.dev gemmer automatisk dine ændringer, men du kan trykke Ctrl+S for at gemme manuelt.

![Rediger en fil](../images/edit-a-file.png. **Spor & commit ændringer med versionskontrol**

VSCode.dev har integreret **Git** versionskontrol!

- Klik på _'Source Control'_ ikonet for at se alle foretagne ændringer.
- Filer i `Changes`-mappen viser tilføjelser (grøn) og sletninger (rød).  
  ![Se ændringer](../images/working-tree.png ændringer ved at klikke på `+` ved siden af filer for at forberede til commit.
- **Forkast** uønskede ændringer ved at klikke på fortryd-ikonet.
- Skriv en klar commit-besked, og klik derefter på fluebenet for at committe og pushe.

For at vende tilbage til dit arkiv på GitHub skal du vælge hamburger-menuen øverst til venstre.

![Stage & commit ændringer](../images/edit-vscode.dev Op med udvidelser

Udvidelser giver dig mulighed for at tilføje sprog, temaer, debuggere og produktivitetsværktøjer til VSCode.dev—hvilket gør dit kodningsliv lettere og sjovere.

### Gennemse og administrere udvidelser

- Klik på **Udvidelsesikonet** i aktivitetslinjen.
- Søg efter en udvidelse i _'Search Extensions in Marketplace'_ boksen.

  ![Udvidelsesdetaljer](../images/extension-details:
  - **Installeret**: Alle udvidelser, du har tilføjet
  - **Populær**: Branchens favoritter
  - **Anbefalet**: Skræddersyet til din arbejdsgang

  ![Se udvidelser](

  

***

### 1. **Installer udvidelser**

- Indtast udvidelsens navn i søgefeltet, klik på den, og gennemgå detaljerne i editoren.
- Tryk på **den blå Installér-knap** i sidebar _eller_ i hovedkodeområdet.

  ![Installer udvidelser](../images/install-extension 2. **Tilpas udvidelser**

- Find din installerede udvidelse.
- Klik på **Gear-ikonet** → vælg _Extension Settings_ for at finjustere funktioner efter dine præferencer.

  ![Rediger udvidelsesindstillinger](../images/extension-settings 3. **Administrer udvidelser**
Du kan:

- **Deaktivere:** Midlertidigt slå en udvidelse fra, mens den stadig er installeret
- **Afinstallere:** Fjerne den permanent, hvis den ikke længere er nødvendig

  Find udvidelsen, tryk på Gear-ikonet, og vælg ‘Deaktiver’ eller ‘Afinstaller,’ eller brug de blå knapper i kodeområdet.

***

## Opgave

Test dine færdigheder: [Opret et CV-websted ved hjælp af vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Yderligere udforskning og selvstudie

- Gå dybere med [de officielle VSCode Web Docs](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Udforsk avancerede arbejdspladsfunktioner, tastaturgenveje og indstillinger.

***

**Nu er du klar til at kode, skabe og samarbejde—fra hvor som helst, på enhver enhed, ved hjælp af VSCode.dev!**

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på at sikre nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for eventuelle misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.