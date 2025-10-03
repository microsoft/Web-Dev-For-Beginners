<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T09:55:46+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "sv"
}
-->
***

# Använda en kodredigerare: Mästra [VSCode.dev](https://vscode.dev)

**Välkommen!**  
Den här lektionen tar dig från grunderna till avancerad användning av [VSCode.dev](https://vscode.dev)—den kraftfulla, webbaserade kodredigeraren. Du kommer att lära dig att redigera kod med självförtroende, hantera projekt, spåra ändringar, installera tillägg och samarbeta som ett proffs—allt direkt från din webbläsare, utan att behöva installera något.

***

## Lärandemål

I slutet av denna lektion kommer du att kunna:

- Effektivt använda en kodredigerare för vilket projekt som helst, var som helst
- Sömlöst spåra ditt arbete med inbyggd versionskontroll
- Anpassa och förbättra din utvecklingsarbetsflöde med redigerarinställningar och tillägg

***

## Förkunskaper

För att komma igång, **registrera dig för ett gratis [GitHub](https://github.com)-konto**, vilket låter dig hantera kodarkiv och samarbeta globalt. Om du inte har ett konto ännu, [skapa ett här](https://github.com/).

***

## Varför använda en webbaserad kodredigerare?

En **kodredigerare** som VSCode.dev är ditt kontrollcenter för att skriva, redigera och hantera kod. Med ett intuitivt gränssnitt, massor av funktioner och omedelbar åtkomst via webbläsaren kan du:

- Redigera projekt på vilken enhet som helst
- Undvika besväret med installationer
- Samarbeta och bidra direkt

När du är bekväm med VSCode.dev kommer du att vara redo att ta itu med kodningsuppgifter var som helst, när som helst.

***

## Kom igång med VSCode.dev

Navigera till **[VSCode.dev](https://vscode.dev)**—ingen installation, inga nedladdningar. Genom att logga in med GitHub får du full åtkomst, inklusive synkronisering av dina inställningar, tillägg och arkiv. Om du blir ombedd, anslut ditt GitHub-konto.

När du har laddat, kommer din arbetsyta att se ut så här:

![Standard VSCode.dev](../images/default-vscode-dev har tre huvudsektioner från vänster till höger:
- **Aktivitetsfält:** Ikoner som 🔎 (Sök), ⚙️ (Inställningar), filer, versionskontroll, etc.
- **Sidofält:** Ändrar kontext baserat på den ikon som valts i aktivitetsfältet (standard är *Utforskaren* för att visa filer).
- **Redigerings-/kodområde:** Den största sektionen till höger—där du faktiskt redigerar och visar kod.

Klicka igenom ikonerna för att utforska funktioner, men återgå till _Utforskaren_ för att hålla dig på rätt plats.

***

## Öppna ett GitHub-arkiv

### Metod 1: Från redigeraren

1. Gå till [VSCode.dev](https://vscode.dev). Klicka på **"Open Remote Repository."**

   ![Öppna fjärrarkiv](../../../../8-code-editor/images/open-remote-repository använd _Kommandopaletten_ (Ctrl-Shift-P, eller Cmd-Shift-P på Mac).

   ![Palettmeny](../images/palette-menu.png öppna fjärrarkiv.”
   - Välj alternativet.
   - Klistra in din GitHub-repo-URL (t.ex. `https://github.com/microsoft/Web-Dev-For-Beginners`) och tryck på Enter.

Om det lyckas, kommer du att se hela projektet laddat och redo att redigeras!

***

### Metod 2: Direkt via URL

Förvandla vilken GitHub-repo-URL som helst för att öppna direkt i VSCode.dev genom att ersätta `github.com` med `vscode.dev/github`.  
Exempel:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Denna funktion ger snabb åtkomst till VILKET projekt som helst.

***

## Redigera filer i ditt projekt

När ditt arkiv är öppet kan du:

### 1. **Skapa en ny fil**
- I *Utforskaren*-sidofältet, navigera till önskad mapp eller använd roten.
- Klicka på ikonen _‘Ny fil ...’_.
- Namnge din fil, tryck på **Enter**, och din fil visas direkt.

![Skapa en ny fil](../images/create-new-file 2. **Redigera och spara filer**

- Klicka på en fil i *Utforskaren* för att öppna den i kodområdet.
- Gör dina ändringar efter behov.
- VSCode.dev sparar automatiskt dina ändringar, men du kan trycka på Ctrl+S för att spara manuellt.

![Redigera en fil](../images/edit-a-file.png. **Spåra & commit ändringar med versionskontroll**

VSCode.dev har integrerad **Git** versionskontroll!

- Klicka på _'Versionskontroll'_ ikonen för att visa alla gjorda ändringar.
- Filer i `Ändringar`-mappen visar tillägg (grönt) och borttagningar (rött).  
  ![Visa ändringar](../images/working-tree.png ändringar genom att klicka på `+` bredvid filer för att förbereda för commit.
- **Ångra** oönskade ändringar genom att klicka på ångra-ikonen.
- Skriv ett tydligt commit-meddelande, klicka sedan på bockmarkeringen för att commit och pusha.

För att återgå till ditt arkiv på GitHub, välj hamburgermenyn längst upp till vänster.

![Stage & commit ändringar](../images/edit-vscode.dev Med tillägg

Tillägg låter dig lägga till språk, teman, felsökare och produktivitetsverktyg till VSCode.dev—vilket gör ditt kodningsliv enklare och roligare.

### Bläddra och hantera tillägg

- Klicka på **Tilläggsikonen** i aktivitetsfältet.
- Sök efter ett tillägg i _'Sök tillägg i Marketplace'_ rutan.

  ![Tilläggsdetaljer](../images/extension-details:
  - **Installerade**: Alla tillägg du har lagt till
  - **Populära**: Branschfavoriter
  - **Rekommenderade**: Skräddarsydda för ditt arbetsflöde

  ![Visa tillägg](

  

***

### 1. **Installera tillägg**

- Ange tilläggets namn i sökfältet, klicka på det och granska detaljerna i redigeraren.
- Tryck på **den blå Installera-knappen** i sidofältet _eller_ i huvudkodområdet.

  ![Installera tillägg](../images/install-extension 2. **Anpassa tillägg**

- Hitta ditt installerade tillägg.
- Klicka på **Gear-ikonen** → välj _Tilläggsinställningar_ för att finjustera beteenden efter dina önskemål.

  ![Ändra tilläggsinställningar](../images/extension-settings 3. **Hantera tillägg**
Du kan:

- **Inaktivera:** Tillfälligt stänga av ett tillägg medan det fortfarande är installerat
- **Avinstallera:** Ta bort det permanent om det inte längre behövs

  Hitta tillägget, tryck på Gear-ikonen och välj ‘Inaktivera’ eller ‘Avinstallera,’ eller använd de blå knapparna i kodområdet.

***

## Uppgift

Testa dina färdigheter: [Skapa en CV-webbplats med vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Vidare utforskning och självstudier

- Fördjupa dig med [de officiella VSCode Web Docs](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Utforska avancerade arbetsytfunktioner, kortkommandon och inställningar.

***

**Nu är du redo att koda, skapa och samarbeta—var som helst, på vilken enhet som helst, med VSCode.dev!**

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.