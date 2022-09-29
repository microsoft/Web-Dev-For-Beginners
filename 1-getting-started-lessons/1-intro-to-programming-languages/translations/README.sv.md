# Introduktion till programmeringsspråk och branschens verktyg

Den här lektionen täcker grunderna i programmeringsspråk. Ämnena som tas upp här gäller de flesta moderna programmeringsspråk idag. I avsnittet "Tools of the Trade" får du lära dig om användbar programvara som hjälper dig som utvecklare.

![Introprogrammering](../../sketchnotes/webdev101-programming.png)
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz före föreläsningen
[Frågesport före föreläsning](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1)

## Introduktion

I den här lektionen tar vi upp:

- Vad är programmering?
- Typer av programmeringsspråk
- Grundläggande element i ett program
- Användbar programvara och verktyg för den professionella utvecklaren

> Du kan ta den här lektionen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming?WT.mc_id=academic-13441-cxa)!

## Vad är programmering?

Programmering (även känd som kodning) är processen att skriva instruktioner för en enhet som en dator eller mobil enhet. Vi skriver dessa instruktioner med ett programmeringsspråk, som sedan tolkas av enheten. Dessa uppsättningar instruktioner kan hänvisas till med olika namn, men *program*, *datorprogram*, *applikation (app)* och *körbar* är några populära namn.

Ett *program* kan vara vad som helst som är skrivet med kod; webbplatser, spel och telefonappar är program. Även om det är möjligt att skapa ett program utan att skriva kod, tolkas den underliggande logiken av enheten och den logiken skrevs med största sannolikhet med kod. Ett program som *kör* eller *kör* kod utför instruktioner. Enheten som du använder för att läsa den här lektionen med kör ett program för att skriva ut den på din skärm.

✅ Gör lite research: vem anses ha varit världens första datorprogrammerare?

## Programmeringsspråk

Programmeringsspråk gör det möjligt för utvecklare att skriva instruktioner för en enhet. Enheter kan bara förstå binärt (1:or och 0:or), och för *de flesta* utvecklare är det inte ett särskilt effektivt sätt att kommunicera. Programmeringsspråk är redskapet för kommunikation mellan människor och datorer.

Programmeringsspråk finns i olika format och kan tjäna olika syften. JavaScript används till exempel främst för webbapplikationer, medan Bash främst används för operativsystem.

*Lågnivåspråk* kräver vanligtvis färre steg än *språk på hög nivå* för en enhet att tolka instruktioner. Men det som gör högnivåspråk populära är deras läsbarhet och stöd. JavaScript anses vara ett språk på hög nivå.

Följande kod illustrerar skillnaden mellan ett språk på hög nivå med JavaScript och ett språk på låg nivå med ARM-monteringskod.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Tro det eller ej, *de gör båda samma sak*: skriver ut en Fibonacci-sekvens upp till 10.

✅ En Fibonacci-sekvens är [definierad](https://en.wikipedia.org/wiki/Fibonacci_number) som en uppsättning tal så att varje tal är summan av de två föregående, med start från 0 och 1.

## Elementen i ett program

En enskild instruktion i ett program kallas ett *påstående* och kommer vanligtvis att ha ett tecken eller radavstånd som markerar var instruktionen slutar, eller *avslutar*. Hur ett program avslutas varierar med varje språk.

Uttalanden inom ett program kan förlita sig på data som tillhandahålls av en användare eller någon annanstans för att utföra instruktioner. Data kan förändra hur ett program beter sig, så programmeringsspråk kommer med ett sätt att tillfälligt lagra data så att de kan användas senare. Dessa kallas *variabler*. Variabler är satser som instruerar en enhet att spara data i dess minne. Variabler i program liknar variabler i algebra, där de har ett unikt namn och deras värde kan ändras med tiden.

Det finns en chans att vissa uttalanden inte kommer att exekveras av en enhet. Detta är vanligtvis designat när det är skrivet av utvecklaren eller av misstag när ett oväntat fel inträffar. Denna typ av kontroll över en applikation gör den mer robust och underhållbar. Vanligtvis sker dessa förändringar i kontroll när vissa villkor är uppfyllda. En vanlig sats som används i modern programmering för att kontrollera hur ett program körs är satsen `if..else`.

✅ Du kommer att lära dig mer om denna typ av uttalande i efterföljande lektioner.

## Tools of the Trade

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 Klicka på bilden ovan för att se en video om verktyg

I det här avsnittet kommer du att lära dig om en del programvara som du kan tycka är mycket användbar när du börjar din professionella utvecklingsresa.

En **utvecklingsmiljö** är en unik uppsättning verktyg och funktioner som en utvecklare ofta använder när han skriver programvara. Vissa av dessa verktyg har skräddarsytts för en utvecklares specifika behov och kan förändras över tiden om den utvecklaren ändrar prioriteringar i arbete, personliga projekt eller när de använder ett annat programmeringsspråk. Utvecklingsmiljöer är lika unika som utvecklarna som använder dem.

### Programutvecklingsmiljö

Ett av de mest avgörande verktygen för mjukvaruutveckling är programutvecklingsmiljön. Programutvecklingsmiljön är där du skriver din kod och ibland där du kör din kod.

Utvecklare förlitar sig på programutvecklingsmiljön av ytterligare några skäl:

- *Debugging* hjälper till att hitta buggar och fel genom att stega igenom koden rad för rad. Vissa programutvecklingsmiljöer har felsökningsfunktioner; de kan anpassas och läggas till för specifika programmeringsspråk.
- *Syntaxmarkering* lägger till färger och textformatering i koden, vilket gör det lättare att läsa. De flesta redigerare tillåter anpassad syntaxmarkering.
- *Extensions and integrations* är specialiserade verktyg för utvecklare, av utvecklare. Dessa verktyg var inte inbyggda i basredigeraren. Till exempel dokumenterar många utvecklare sin kod för att förklara hur den fungerar. De kan installera ett stavningskontrolltillägg för att hitta stavfel i dokumentationen. De flesta tillägg är avsedda att användas inom en specifik redigerare, och de flesta redigerare har ett sätt att söka efter tillgängliga tillägg.
- *Anpassning* gör det möjligt för utvecklare att skapa en unik utvecklingsmiljö som passar deras behov. De flesta redigerare är extremt anpassningsbara och kan också tillåta utvecklare att skapa anpassade tillägg.

#### Populära programutvecklingsmiljöer och webbutvecklingstillägg

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### Webbläsare

Ett annat avgörande verktyg är webbläsaren. Webbutvecklare förlitar sig på webbläsaren för att se hur deras kod körs på webben. Det används också för att visa de visuella elementen på en webbsida som är skrivna i editorn, som HTML-kod.

Många webbläsare kommer med *utvecklarverktyg* (DevTools) som innehåller en uppsättning användbara funktioner och information som hjälper utvecklare att samla in och fånga viktig information om sin applikation. Till exempel: Om en webbsida har fel kan det ibland vara bra att veta när de inträffade. DevTools i en webbläsare kan konfigureras för att fånga denna information.

#### Populära webbläsare och utvecklingsverktyg

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Kommandoradsverktyg

Vissa utvecklare föredrar en mindre grafisk vy för sina dagliga uppgifter och förlitar sig på kommandoraden för att uppnå detta. Att skriva kod kräver en betydande mängd skrivning och vissa utvecklare föredrar att inte störa flödet på tangentbordet. De kommer att använda kortkommandon för att växla mellan skrivbordsfönster, arbeta med olika filer och använda verktyg. De flesta uppgifter kan utföras med en mus, men en fördel med att använda kommandoraden är att mycket kan göras med kommandoradsverktyg utan att behöva byta mellan mus och tangentbord. En annan fördel med kommandoraden är att de är konfigurerbara och du kan spara en anpassad konfiguration, ändra den senare och importera den till andra utvecklingsmaskiner. Eftersom utvecklingsmiljöer är så unika för varje utvecklare, kommer vissa att undvika att använda kommandoraden, vissa kommer att förlita sig helt på den och vissa föredrar en blandning av de två.

### Populära kommandoradsalternativ

Alternativen för kommandoraden kommer att variera beroende på vilket operativsystem du använder.

*💻 = kommer förinstallerat på operativsystemet.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Populära kommandoradsverktyg

- [Git](https://git-scm.com/) (💻 on most operating systems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentation

När en utvecklare vill lära sig något nytt, kommer de troligen att vända sig till dokumentation för att lära sig hur man använder det. Utvecklare förlitar sig ofta på dokumentation för att vägleda dem genom hur man använder verktyg och språk på rätt sätt, och även för att få djupare kunskap om hur det fungerar.

#### Populär dokumentation inom webbutveckling

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), from Mozilla, the publishers of the [Firefox](https://www.mozilla.org/firefox/) browser
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), from Google, publishers of [Chrome](https://www.google.com/chrome/)
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), for [Microsoft Edge](https://www.microsoft.com/edge)

✅ Gör lite efterforskning: Nu när du känner till grunderna i en webbutvecklares miljö, jämför och kontrastera den med en webbdesigners miljö.

---

## 🚀 Utmaning

Jämför några programmeringsspråk. Vilka är några av de unika egenskaperna hos JavaScript vs Java? Vad sägs om COBOL vs. Go?

## Quiz efter föreläsningen

[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Återblick och självstudier

Studera lite om de olika språk som är tillgängliga för programmeraren. Försök att skriva en rad på ett språk och skriv sedan om den på två andra. Vad lärde du dig?

## Inlämningsuppgift

[Reading the Docs](assignment.sv.md)