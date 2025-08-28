<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c63675cfaf1d223b37bb9fecbfe7c252",
  "translation_date": "2025-08-26T22:23:19+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "sv"
}
-->
# Introduktion till programmeringsspråk och verktyg för utvecklare

Den här lektionen täcker grunderna i programmeringsspråk. Ämnena som tas upp här gäller för de flesta moderna programmeringsspråk idag. I avsnittet "Verktyg för utvecklare" kommer du att lära dig om användbar programvara som hjälper dig som utvecklare.

![Intro Programmering](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.sv.png)  
> Sketchnote av [Tomomi Imura](https://twitter.com/girlie_mac)

## Förkunskapstest  
[Förkunskapstest](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Introduktion

I den här lektionen kommer vi att gå igenom:

- Vad är programmering?  
- Typer av programmeringsspråk  
- Grundläggande element i ett program  
- Användbar programvara och verktyg för den professionella utvecklaren  

> Du kan ta den här lektionen på [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Vad är programmering?

Programmering (även kallat kodning) är processen att skriva instruktioner för en enhet, som en dator eller mobil enhet. Vi skriver dessa instruktioner med ett programmeringsspråk, som sedan tolkas av enheten. Dessa uppsättningar av instruktioner kan kallas olika saker, men *program*, *datorprogram*, *applikation (app)* och *körbar fil* är några vanliga namn.

Ett *program* kan vara vad som helst som är skrivet med kod; webbplatser, spel och mobilappar är exempel på program. Även om det är möjligt att skapa ett program utan att skriva kod, tolkas den underliggande logiken av enheten, och den logiken är troligen skriven med kod. Ett program som *kör* eller *exekverar* kod utför instruktioner. Enheten du läser den här lektionen på kör ett program för att visa den på din skärm.

✅ Gör lite efterforskning: Vem anses vara världens första datorprogrammerare?

## Programmeringsspråk

Programmeringsspråk gör det möjligt för utvecklare att skriva instruktioner för en enhet. Enheter kan bara förstå binär kod (1:or och 0:or), och för *de flesta* utvecklare är det inte ett särskilt effektivt sätt att kommunicera. Programmeringsspråk är medlet för kommunikation mellan människor och datorer.

Programmeringsspråk finns i olika format och kan ha olika syften. Till exempel används JavaScript främst för webbapplikationer, medan Bash används främst för operativsystem.

*Lågnivåspråk* kräver vanligtvis färre steg än *högnivåspråk* för att en enhet ska tolka instruktioner. Det som gör högnivåspråk populära är dock deras läsbarhet och stöd. JavaScript anses vara ett högnivåspråk.

Följande kod visar skillnaden mellan ett högnivåspråk med JavaScript och ett lågnivåspråk med ARM-assembleringskod.

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

Tro det eller ej, *de gör samma sak*: skriver ut en Fibonacci-sekvens upp till 10.

✅ En Fibonacci-sekvens [definieras](https://en.wikipedia.org/wiki/Fibonacci_number) som en uppsättning tal där varje tal är summan av de två föregående, med start från 0 och 1. De första 10 talen i Fibonacci-sekvensen är 0, 1, 1, 2, 3, 5, 8, 13, 21 och 34.

## Element i ett program

En enskild instruktion i ett program kallas för ett *uttryck* och har vanligtvis ett tecken eller en radbrytning som markerar var instruktionen slutar, eller *terminerar*. Hur ett program terminerar varierar mellan olika språk.

Uttryck i ett program kan förlita sig på data som tillhandahålls av en användare eller från andra källor för att utföra instruktioner. Data kan ändra hur ett program beter sig, så programmeringsspråk har ett sätt att tillfälligt lagra data för senare användning. Dessa kallas *variabler*. Variabler är uttryck som instruerar en enhet att spara data i sitt minne. Variabler i program liknar variabler i algebra, där de har ett unikt namn och deras värde kan ändras över tid.

Det finns en möjlighet att vissa uttryck inte exekveras av en enhet. Detta är vanligtvis avsiktligt när det skrivs av utvecklaren eller av misstag när ett oväntat fel inträffar. Denna typ av kontroll över en applikation gör den mer robust och underhållbar. Vanligtvis sker dessa förändringar i kontroll när vissa villkor uppfylls. Ett vanligt uttryck som används i modern programmering för att styra hur ett program körs är `if..else`-uttrycket.

✅ Du kommer att lära dig mer om denna typ av uttryck i kommande lektioner.

## Verktyg för utvecklare

[![Verktyg för utvecklare](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Verktyg för utvecklare")

> 🎥 Klicka på bilden ovan för en video om verktyg

I det här avsnittet kommer du att lära dig om några programvaror som du kan finna mycket användbara när du börjar din professionella utvecklarresa.

En **utvecklingsmiljö** är en unik uppsättning verktyg och funktioner som en utvecklare ofta använder när de skriver programvara. Några av dessa verktyg har anpassats för en utvecklares specifika behov och kan ändras över tid om utvecklaren ändrar prioriteringar i arbete, personliga projekt eller när de använder ett annat programmeringsspråk. Utvecklingsmiljöer är lika unika som utvecklarna som använder dem.

### Editorer

Ett av de mest avgörande verktygen för mjukvaruutveckling är editorn. Editorer är där du skriver din kod och ibland där du kör din kod.

Utvecklare förlitar sig på editorer av några ytterligare skäl:

- *Felsökning* hjälper till att hitta buggar och fel genom att gå igenom koden rad för rad. Vissa editorer har felsökningsfunktioner; de kan anpassas och läggas till för specifika programmeringsspråk.  
- *Syntaxmarkering* lägger till färger och textformatering till koden, vilket gör den lättare att läsa. De flesta editorer tillåter anpassad syntaxmarkering.  
- *Tillägg och integrationer* är specialverktyg för utvecklare, skapade av utvecklare. Dessa verktyg är inte inbyggda i baseditorn. Till exempel dokumenterar många utvecklare sin kod för att förklara hur den fungerar. De kan installera ett stavningskontrolltillägg för att hitta stavfel i dokumentationen. De flesta tillägg är avsedda för användning inom en specifik editor, och de flesta editorer har ett sätt att söka efter tillgängliga tillägg.  
- *Anpassning* gör det möjligt för utvecklare att skapa en unik utvecklingsmiljö som passar deras behov. De flesta editorer är extremt anpassningsbara och kan också tillåta utvecklare att skapa egna tillägg.

#### Populära editorer och tillägg för webbutveckling

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)  
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)  
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)  
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  
- [Atom](https://atom.io/)  
  - [spell-check](https://atom.io/packages/spell-check)  
  - [teletype](https://atom.io/packages/teletype)  
  - [atom-beautify](https://atom.io/packages/atom-beautify)  
- [Sublimetext](https://www.sublimetext.com/)  
  - [emmet](https://emmet.io/)  
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)  

### Webbläsare

Ett annat viktigt verktyg är webbläsaren. Webbutvecklare förlitar sig på webbläsaren för att se hur deras kod körs på webben. Den används också för att visa de visuella elementen på en webbsida som skrivs i editorn, som HTML.

Många webbläsare har *utvecklarverktyg* (DevTools) som innehåller en uppsättning användbara funktioner och information för att hjälpa utvecklare att samla in och fånga viktig information om deras applikation. Till exempel: Om en webbsida har fel kan det ibland vara användbart att veta när de inträffade. DevTools i en webbläsare kan konfigureras för att fånga denna information.

#### Populära webbläsare och DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)  
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)  
- [Firefox](https://developer.mozilla.org/docs/Tools)  

### Kommandoradsverktyg

Vissa utvecklare föredrar en mindre grafisk vy för sina dagliga uppgifter och förlitar sig på kommandoraden för att uppnå detta. Att skriva kod kräver en betydande mängd skrivande, och vissa utvecklare föredrar att inte avbryta sitt flöde på tangentbordet. De använder kortkommandon för att växla mellan skrivbordsfönster, arbeta med olika filer och använda verktyg. De flesta uppgifter kan utföras med en mus, men en fördel med att använda kommandoraden är att mycket kan göras med kommandoradsverktyg utan att behöva växla mellan mus och tangentbord. En annan fördel med kommandoraden är att den är konfigurerbar, och du kan spara en anpassad konfiguration, ändra den senare och importera den till andra utvecklingsmaskiner. Eftersom utvecklingsmiljöer är så unika för varje utvecklare kommer vissa att undvika att använda kommandoraden, vissa kommer att förlita sig helt på den, och vissa föredrar en blandning av de två.

### Populära alternativ för kommandoraden

Alternativen för kommandoraden skiljer sig beroende på vilket operativsystem du använder.

*💻 = förinstallerat på operativsystemet.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻  
- [Kommandoraden](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (även känd som CMD) 💻  
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)  
- [mintty](https://mintty.github.io/)  

#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻  
- [iTerm](https://iterm2.com/)  
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)  

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻  
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)  
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)  

#### Populära kommandoradsverktyg

- [Git](https://git-scm.com/) (💻 på de flesta operativsystem)  
- [NPM](https://www.npmjs.com/)  
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)  

### Dokumentation

När en utvecklare vill lära sig något nytt vänder de sig oftast till dokumentation för att lära sig hur man använder det. Utvecklare förlitar sig ofta på dokumentation för att guida dem genom hur man använder verktyg och språk korrekt, och även för att få djupare kunskap om hur det fungerar.

#### Populär dokumentation om webbutveckling

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), från Mozilla, utgivarna av webbläsaren [Firefox](https://www.mozilla.org/firefox/)  
- [Frontend Masters](https://frontendmasters.com/learn/)  
- [Web.dev](https://web.dev), från Google, utgivarna av [Chrome](https://www.google.com/chrome/)  
- [Microsofts egna utvecklardokumentation](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), för [Microsoft Edge](https://www.microsoft.com/edge)  
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)  

✅ Gör lite efterforskning: Nu när du känner till grunderna i en webbutvecklares miljö, jämför och kontrastera den med en webbdesigners miljö.

---

## 🚀 Utmaning

Jämför några programmeringsspråk. Vilka är några av de unika egenskaperna hos JavaScript jämfört med Java? Hur är det med COBOL jämfört med Go?

## Efterföreläsningstest  
[Efterföreläsningstest](https://ff-quizzes.netlify.app/web/quiz/2)

## Repetition & Självstudier

Studera lite om de olika språken som finns tillgängliga för programmerare. Försök att skriva en rad i ett språk och skriv sedan om den i två andra. Vad lärde du dig?

## Uppgift

[Läsa dokumentationen](assignment.md)

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör du vara medveten om att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.