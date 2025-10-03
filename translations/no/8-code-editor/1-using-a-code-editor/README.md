<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:01:53+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "no"
}
-->
***

# Bruke en kodeeditor: Mestre [VSCode.dev](https://vscode.dev)

**Velkommen!**  
Denne leksjonen tar deg fra grunnleggende til avansert bruk av [VSCode.dev](https://vscode.dev)—den kraftige, nettbaserte kodeeditoren. Du vil lære å redigere kode med selvtillit, administrere prosjekter, spore endringer, installere utvidelser og samarbeide som en proff—alt fra nettleseren, uten behov for installasjon.

***

## Læringsmål

Ved slutten av denne leksjonen vil du kunne:

- Effektivt bruke en kodeeditor på ethvert prosjekt, hvor som helst
- Sømløst spore arbeidet ditt med innebygd versjonskontroll
- Tilpasse og forbedre utviklingsarbeidsflyten din med editorinnstillinger og utvidelser

***

## Forutsetninger

For å komme i gang, **registrer deg for en gratis [GitHub](https://github.com)-konto**, som lar deg administrere koderepositorier og samarbeide globalt. Hvis du ikke har en konto ennå, [opprett en her](https://github.com/).

***

## Hvorfor bruke en nettbasert kodeeditor?

En **kodeeditor** som VSCode.dev er ditt kontrollsenter for å skrive, redigere og administrere kode. Med et intuitivt grensesnitt, mange funksjoner og umiddelbar tilgang via nettleseren kan du:

- Redigere prosjekter på hvilken som helst enhet
- Unngå bryet med installasjoner
- Samarbeide og bidra umiddelbart

Når du er komfortabel med VSCode.dev, vil du være klar til å takle kodingsoppgaver hvor som helst, når som helst.

***

## Komme i gang med VSCode.dev

Naviger til **[VSCode.dev](https://vscode.dev)**—ingen installasjon, ingen nedlastinger. Ved å logge inn med GitHub får du full tilgang, inkludert synkronisering av innstillinger, utvidelser og repositorier. Hvis du blir bedt om det, koble til GitHub-kontoen din.

Etter at arbeidsområdet er lastet inn, vil det se slik ut:

![Standard VSCode.dev](../images/default-vscode-dev har tre hovedseksjoner fra venstre til høyre:
- **Aktivitetslinje:** Ikoner som 🔎 (Søk), ⚙️ (Innstillinger), filer, kildekontroll osv.
- **Sidepanel:** Endrer kontekst basert på ikonet valgt i aktivitetslinjen (standard er *Utforsker* for å vise filer).
- **Editor/kodeområde:** Den største seksjonen til høyre—hvor du faktisk redigerer og ser kode.

Klikk gjennom ikonene for å utforske funksjoner, men gå tilbake til _Utforsker_ for å holde oversikten.

***

## Åpne et GitHub-repositorium

### Metode 1: Fra editoren

1. Gå til [VSCode.dev](https://vscode.dev). Klikk **"Open Remote Repository."**

   ![Åpne eksternt repositorium](../../../../8-code-editor/images/open-remote-repository bruk _Command Palette_ (Ctrl-Shift-P, eller Cmd-Shift-P på Mac).

   ![Palettmeny](../images/palette-menu.pngopen remote repository.”
   - Velg alternativet.
   - Lim inn URL-en til GitHub-repositoriet ditt (f.eks. `https://github.com/microsoft/Web-Dev-For-Beginners`) og trykk Enter.

Hvis det lykkes, vil du se hele prosjektet lastet inn og klart til redigering!

***

### Metode 2: Direkte via URL

Endre hvilken som helst GitHub-repo-URL for å åpne direkte i VSCode.dev ved å erstatte `github.com` med `vscode.dev/github`.  
F.eks.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Denne funksjonen gir lynrask tilgang til HVERT prosjekt.

***

## Redigere filer i prosjektet ditt

Når repositoriet ditt er åpnet, kan du:

### 1. **Opprette en ny fil**
- I *Utforsker*-sidepanelet, naviger til ønsket mappe eller bruk roten.
- Klikk på _‘Ny fil ...’_-ikonet.
- Navngi filen din, trykk **Enter**, og filen vises umiddelbart.

![Opprett en ny fil](../images/create-new-file 2. **Redigere og lagre filer**

- Klikk på en fil i *Utforsker* for å åpne den i kodeområdet.
- Gjør endringene dine etter behov.
- VSCode.dev lagrer automatisk endringene dine, men du kan trykke Ctrl+S for å lagre manuelt.

![Rediger en fil](../images/edit-a-file.png. **Spor & bekreft endringer med versjonskontroll**

VSCode.dev har integrert **Git**-versjonskontroll!

- Klikk på _'Kildekontroll'_-ikonet for å se alle endringer som er gjort.
- Filer i `Changes`-mappen viser tillegg (grønn) og slettinger (rød).  
  ![Se endringer](../images/working-tree.png endringer ved å klikke på `+` ved siden av filer for å forberede til bekreftelse.
- **Forkast** uønskede endringer ved å klikke på angre-ikonet.
- Skriv en tydelig bekreftelsesmelding, og klikk deretter på haken for å bekrefte og sende.

For å gå tilbake til repositoriet ditt på GitHub, velg hamburgermenyen øverst til venstre.

![Stage & bekreft endringer](../images/edit-vscode.dev Med utvidelser

Utvidelser lar deg legge til språk, temaer, feilsøkingsverktøy og produktivitetsverktøy til VSCode.dev—som gjør kodingslivet ditt enklere og morsommere.

### Bla gjennom og administrere utvidelser

- Klikk på **Utvidelsesikonet** i aktivitetslinjen.
- Søk etter en utvidelse i _'Search Extensions in Marketplace'_-boksen.

  ![Detaljer om utvidelser](../images/extension-details:
  - **Installert**: Alle utvidelser du har lagt til
  - **Populær**: Bransjefavoritter
  - **Anbefalt**: Skreddersydd til arbeidsflyten din

  ![Se utvidelser](

  

***

### 1. **Installere utvidelser**

- Skriv inn navnet på utvidelsen i søkefeltet, klikk på den, og se detaljer i editoren.
- Trykk på **den blå Installer-knappen** i sidepanelet _eller_ i hovedkodeområdet.

  ![Installer utvidelser](../images/install-extension 2. **Tilpasse utvidelser**

- Finn den installerte utvidelsen din.
- Klikk på **Gear-ikonet** → velg _Innstillinger for utvidelse_ for å finjustere oppførselen etter dine preferanser.

  ![Endre innstillinger for utvidelser](../images/extension-settings 3. **Administrere utvidelser**
Du kan:

- **Deaktivere:** Midlertidig slå av en utvidelse mens du beholder den installert
- **Avinstallere:** Fjerne den permanent hvis den ikke lenger er nødvendig

  Finn utvidelsen, trykk på Gear-ikonet, og velg ‘Deaktiver’ eller ‘Avinstaller,’ eller bruk de blå knappene i kodeområdet.

***

## Oppgave

Test ferdighetene dine: [Lag en CV-nettside ved hjelp av vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Videre utforskning og selvstudium

- Gå dypere med [de offisielle VSCode Web-dokumentene](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Utforsk avanserte arbeidsområdefunksjoner, hurtigtaster og innstillinger.

***

**Nå er du klar til å kode, skape og samarbeide—fra hvor som helst, på hvilken som helst enhet, ved hjelp av VSCode.dev!**

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.