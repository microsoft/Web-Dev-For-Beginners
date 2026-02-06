# Adoptera en API

## Översikt

API:er öppnar upp oändliga möjligheter för kreativ webbutveckling! I denna uppgift ska du välja en extern API och bygga en webbläsartillägg som löser ett verkligt problem eller erbjuder värdefull funktionalitet för användare.

## Instruktioner

### Steg 1: Välj din API
Välj en API från denna noggrant utvalda [lista över gratis offentliga API:er](https://github.com/public-apis/public-apis). Tänk på dessa kategorier:

**Populära alternativ för nybörjare:**
- **Underhållning**: [Dog CEO API](https://dog.ceo/dog-api/) för slumpmässiga hundbilder
- **Väder**: [OpenWeatherMap](https://openweathermap.org/api) för aktuella väderdata
- **Citat**: [Quotable API](https://quotable.io/) för inspirerande citat
- **Nyheter**: [NewsAPI](https://newsapi.org/) för aktuella rubriker
- **Roliga fakta**: [Numbers API](http://numbersapi.com/) för intressanta fakta om siffror

### Steg 2: Planera ditt tillägg
Innan du börjar koda, svara på dessa planeringsfrågor:
- Vilket problem löser ditt tillägg?
- Vem är din målgrupp?
- Vilka data kommer du att lagra i lokal lagring?
- Hur hanterar du API-fel eller begränsningar?

### Steg 3: Bygg ditt tillägg
Ditt tillägg bör innehålla:

**Obligatoriska funktioner:**
- Formulärfält för eventuella nödvändiga API-parametrar
- API-integration med korrekt felhantering
- Lokal lagring för användarinställningar eller API-nycklar
- Ren, responsiv användargränssnitt
- Laddningsstatus och användarfeedback

**Kodkrav:**
- Använd moderna JavaScript-funktioner (ES6+)
- Implementera async/await för API-anrop
- Inkludera korrekt felhantering med try/catch-block
- Lägg till meningsfulla kommentarer som förklarar din kod
- Följ en konsekvent kodformatering

### Steg 4: Testa och finslipa
- Testa ditt tillägg med olika inmatningar
- Hantera kantfall (ingen internetanslutning, ogiltiga API-svar)
- Säkerställ att ditt tillägg fungerar efter att webbläsaren startas om
- Lägg till användarvänliga felmeddelanden

## Bonusutmaningar

Ta ditt tillägg till nästa nivå:
- Lägg till flera API-endpoints för rikare funktionalitet
- Implementera datacaching för att minska API-anrop
- Skapa tangentbordsgenvägar för vanliga åtgärder
- Lägg till funktioner för dataexport/import
- Implementera användaranpassningsalternativ

## Inlämningskrav

1. **Fungerande webbläsartillägg** som framgångsrikt integreras med din valda API
2. **README-fil** som förklarar:
   - Vilken API du valde och varför
   - Hur man installerar och använder ditt tillägg
   - Eventuella API-nycklar eller inställningar som krävs
   - Skärmdumpar av ditt tillägg i användning
3. **Ren, kommenterad kod** som följer moderna JavaScript-principer

## Bedömningskriterier

| Kriterier | Exemplariskt (90-100%) | Godkänt (80-89%) | Utvecklingsstadium (70-79%) | Början (60-69%) |
|-----------|-------------------------|------------------|----------------------------|-----------------|
| **API-integration** | Felfri API-integration med omfattande felhantering och hantering av kantfall | Framgångsrik API-integration med grundläggande felhantering | API fungerar men har begränsad felhantering | API-integration har betydande problem |
| **Kodkvalitet** | Ren, välkommenterad modern JavaScript som följer bästa praxis | Bra kodstruktur med tillräckliga kommentarer | Koden fungerar men behöver bättre organisering | Dålig kodkvalitet med minimala kommentarer |
| **Användarupplevelse** | Polerat gränssnitt med utmärkt laddningsstatus och användarfeedback | Bra gränssnitt med grundläggande användarfeedback | Grundläggande gränssnitt som fungerar tillräckligt | Dålig användarupplevelse med förvirrande gränssnitt |
| **Lokal lagring** | Sofistikerad användning av lokal lagring med datavalidering och hantering | Korrekt implementering av lokal lagring för nyckelfunktioner | Grundläggande implementering av lokal lagring | Minimal eller felaktig användning av lokal lagring |
| **Dokumentation** | Omfattande README med installationsinstruktioner och skärmdumpar | Bra dokumentation som täcker de flesta krav | Grundläggande dokumentation som saknar vissa detaljer | Dålig eller saknad dokumentation |

## Tips för att komma igång

1. **Börja enkelt**: Välj en API som inte kräver komplex autentisering
2. **Läs dokumentationen**: Förstå noggrant din valda API:s endpoints och svar
3. **Planera ditt gränssnitt**: Skissa ditt tilläggs gränssnitt innan du börjar koda
4. **Testa ofta**: Bygg stegvis och testa varje funktion när du lägger till den
5. **Hantera fel**: Anta alltid att API-anrop kan misslyckas och planera därefter

## Resurser

- [Dokumentation för webbläsartillägg](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Guide till Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial för lokal lagring](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON-parsing och hantering](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Ha kul med att bygga något användbart och kreativt! 🚀

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.