# Omfattande granskning av webbplatsens tillgänglighet

## Instruktioner

I denna uppgift ska du genomföra en professionell tillgänglighetsgranskning av en verklig webbplats, med tillämpning av de principer och tekniker du har lärt dig. Denna praktiska erfarenhet kommer att fördjupa din förståelse för tillgänglighetshinder och lösningar.

Välj en webbplats som verkar ha tillgänglighetsproblem—detta ger dig fler lärandemöjligheter än att analysera en redan perfekt webbplats. Bra kandidater inkluderar äldre webbplatser, komplexa webbapplikationer eller webbplatser med rikt multimedia-innehåll.

### Fas 1: Strategisk manuell utvärdering

Innan du använder automatiska verktyg, utför en omfattande manuell bedömning. Denna människocentrerade metod avslöjar ofta problem som verktyg missar och hjälper dig att förstå den verkliga användarupplevelsen.

**🔍 Viktiga utvärderingskriterier:**

**Navigering och struktur:**
- Kan du navigera på hela webbplatsen med endast tangentbordet (Tab, Shift+Tab, Enter, Space, piltangenter)?
- Är fokusindikatorer tydligt synliga på alla interaktiva element?
- Skapar rubrikstrukturen (H1-H6) en logisk innehållsöversikt?
- Finns det genvägslänkar för att hoppa till huvudinnehållet?

**Visuell tillgänglighet:**
- Finns det tillräcklig färgkontrast på hela webbplatsen (minst 4.5:1 för normal text)?
- Förlitar sig webbplatsen enbart på färg för att förmedla viktig information?
- Har alla bilder lämplig alternativ text?
- Förblir layouten funktionell när den zoomas till 200%?

**Innehåll och kommunikation:**
- Finns det några "klicka här" eller tvetydiga länktexter?
- Kan du förstå innehållet och funktionaliteten utan visuella ledtrådar?
- Är formulärfält korrekt märkta och grupperade?
- Är felmeddelanden tydliga och hjälpsamma?

**Interaktiva element:**
- Fungerar alla knappar och formulärkontroller med endast tangentbord?
- Meddelas dynamiska innehållsförändringar till skärmläsare?
- Följer modala dialoger och komplexa widgets korrekta tillgänglighetsmönster?

📝 **Dokumentera dina fynd** med specifika exempel, skärmdumpar och sidans URL:er. Notera både problem och saker som är väl utförda.

### Fas 2: Omfattande automatiserad testning

Validera och utöka dina manuella fynd med hjälp av branschstandardiserade tillgänglighetstestverktyg. Varje verktyg har olika styrkor, så att använda flera verktyg ger dig en komplett täckning.

**🛠️ Obligatoriska testverktyg:**

1. **Lighthouse Accessibility Audit** (inbyggt i Chrome/Edge DevTools)
   - Kör granskning på flera sidor
   - Fokusera på specifika mätvärden och rekommendationer
   - Notera din tillgänglighetspoäng och specifika överträdelser

2. **axe DevTools** (webbläsartillägg - branschstandard)
   - Mer detaljerad identifiering av problem än Lighthouse
   - Ger specifika kodexempel för lösningar
   - Testar mot WCAG 2.1-kriterier

3. **WAVE Web Accessibility Evaluator** (webbläsartillägg)
   - Visuell representation av tillgänglighetsfunktioner
   - Markerar både fel och positiva funktioner
   - Utmärkt för att förstå sidstruktur

4. **Färgkontrastanalysatorer**
   - WebAIM Contrast Checker för specifika färgpar
   - Webbläsartillägg för analys av hela sidan
   - Testa mot både WCAG AA och AAA-standarder

**🎧 Testning med verklig hjälpmedelsteknik:**
- **Skärmläsartestning**: Använd NVDA (Windows), VoiceOver (Mac) eller TalkBack (Android)
- **Navigering med endast tangentbord**: Koppla bort musen och navigera på hela webbplatsen
- **Zoomtestning**: Testa funktionalitet vid 200% och 400% zoomnivåer
- **Röststyrningstestning**: Om tillgängligt, prova röstnavigeringsverktyg

**📊 Organisera dina resultat** genom att skapa ett huvudark med:
- Problembeskrivning och plats
- Allvarlighetsgrad (Kritisk/Hög/Medel/Låg)
- Överträdda WCAG-kriterier
- Verktyg som upptäckte problemet
- Skärmdumpar och bevis

### Fas 3: Omfattande dokumentation av fynd

Skapa en professionell tillgänglighetsgranskningsrapport som visar din förståelse för både tekniska problem och deras mänskliga påverkan.

**📋 Obligatoriska rapportavsnitt:**

1. **Sammanfattning** (1 sida)
   - Webbplatsens URL och kort beskrivning
   - Övergripande tillgänglighetsmognadsnivå
   - De 3 mest kritiska problemen
   - Beräknad påverkan på användare med funktionsnedsättningar

2. **Metodologi** (½ sida)
   - Testmetod och använda verktyg
   - Utvärderade sidor och enheter/webbläsarkombinationer
   - Utvärderade standarder (WCAG 2.1 AA)

3. **Detaljerade fynd** (2-3 sidor)
   - Problem kategoriserade efter WCAG-princip (Uppfattningsbar, Hanterbar, Begriplig, Robust)
   - Inkludera skärmdumpar och specifika exempel
   - Notera positiva tillgänglighetsfunktioner du hittade
   - Korsreferera med automatiserade verktygsresultat

4. **Bedömning av användarpåverkan** (1 sida)
   - Hur identifierade problem påverkar användare med olika funktionsnedsättningar
   - Scenarier som beskriver verkliga användarupplevelser
   - Affärspåverkan (juridisk risk, SEO, användarbasexpansion)

**📸 Insamling av bevis:**
- Skärmdumpar av tillgänglighetsöverträdelser
- Skärminspelningar av problematiska användarflöden
- Verktygsrapporter (spara som PDF)
- Kodexempel som visar problem

### Fas 4: Professionell åtgärdsplan

Utveckla en strategisk, prioriterad plan för att åtgärda tillgänglighetsproblem. Detta visar din förmåga att tänka som en professionell webbutvecklare som hanterar verkliga affärsbegränsningar.

**🎯 Skapa detaljerade förbättringsrekommendationer (minst 10 problem):**

**För varje identifierat problem, ange:**

- **Problembeskrivning**: Tydlig förklaring av vad som är fel och varför det är problematiskt
- **WCAG-referens**: Specifika överträdda kriterier (t.ex. "2.4.4 Länkens syfte (i kontext) - Nivå A")
- **Användarpåverkan**: Hur detta påverkar personer med olika funktionsnedsättningar
- **Lösning**: Specifika kodändringar, designmodifieringar eller processförbättringar
- **Prioritetsnivå**: Kritisk (hindrar grundläggande användning) / Hög (betydande hinder) / Medel (användbarhetsproblem) / Låg (förbättring)
- **Implementeringsinsats**: Tids-/komplexitetsuppskattning (Snabb lösning / Måttlig insats / Större omarbetning)
- **Testverifiering**: Hur man verifierar att lösningen fungerar

**Exempel på förbättringsförslag:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strategiska implementeringsfaser:**

- **Fas 1 (0-2 veckor)**: Kritiska problem som hindrar grundläggande funktionalitet
- **Fas 2 (1-2 månader)**: Högprioriterade förbättringar för bättre användarupplevelse
- **Fas 3 (3-6 månader)**: Förbättringar med medelhög prioritet och processförbättringar
- **Fas 4 (Löpande)**: Kontinuerlig övervakning och förbättring

## Utvärderingskriterier

Din tillgänglighetsgranskning kommer att bedömas utifrån både teknisk noggrannhet och professionell presentation:

| Kriterier | Utmärkt (90-100%) | Bra (80-89%) | Tillfredsställande (70-79%) | Behöver förbättras (<70%) |
|-----------|-------------------|--------------|-----------------------------|---------------------------|
| **Djup i manuell testning** | Omfattande utvärdering som täcker alla POUR-principer med detaljerade observationer och användarscenarier | Bra täckning av de flesta tillgänglighetsområden med tydliga fynd och viss analys av användarpåverkan | Grundläggande utvärdering som täcker nyckelområden med tillräckliga observationer | Begränsad testning med ytliga observationer och minimal användarpåverkan |
| **Användning av verktyg och analys** | Använder alla obligatoriska verktyg effektivt, korsrefererar fynd, inkluderar tydliga bevis och analyserar verktygens begränsningar | Använder de flesta verktyg med bra dokumentation, viss korsreferens och tillräckliga bevis | Använder obligatoriska verktyg med grundläggande dokumentation och viss bevisning | Minimal användning av verktyg, dålig dokumentation eller saknade bevis |
| **Identifiering och kategorisering av problem** | Identifierar 15+ specifika problem över alla WCAG-principer, kategoriserar korrekt efter allvarlighetsgrad, visar djup förståelse | Identifierar 10-14 problem över de flesta WCAG-principer, bra kategorisering, visar solid förståelse | Identifierar 7-9 problem med tillräcklig WCAG-täckning och grundläggande kategorisering | Identifierar <7 problem med begränsat omfång eller dålig kategorisering |
| **Lösningens kvalitet och genomförbarhet** | 10+ detaljerade, genomförbara lösningar med korrekta WCAG-referenser, realistiska tidslinjer och verifieringsmetoder | 8-9 välutvecklade lösningar med mestadels korrekta referenser och bra implementeringsdetaljer | 6-7 grundläggande lösningar med viss detalj och generellt realistiska tillvägagångssätt | <6 lösningar eller otillräckliga detaljer, orealistiska implementeringar |
| **Professionell kommunikation** | Rapporten är utmärkt organiserad, tydligt skriven, inkluderar sammanfattning, använder lämpligt tekniskt språk och följer affärsdokumentstandarder | Välorganiserad med bra skrivkvalitet, inkluderar de flesta obligatoriska avsnitt, lämplig ton | Tillräckligt organiserad med acceptabel skrivkvalitet, inkluderar grundläggande obligatoriska avsnitt | Dålig organisation, otydligt språk eller saknar viktiga avsnitt |
| **Användning i verkligheten** | Visar förståelse för affärspåverkan, juridiska överväganden, användarmångfald och praktiska implementeringsutmaningar | Visar god förståelse för praktiska tillämpningar med viss affärskontext | Grundläggande förståelse för verkliga tillämpningar | Begränsad koppling till praktiska tillämpningar |

## Avancerade utmaningsalternativ

**🚀 För studenter som söker extra utmaning:**

- **Jämförande analys**: Granska 2-3 konkurrerande webbplatser och jämför deras tillgänglighetsmognad
- **Fokus på mobil tillgänglighet**: Fördjupa dig i mobil-specifika tillgänglighetsproblem med Android TalkBack eller iOS VoiceOver
- **Internationellt perspektiv**: Undersök och tillämpa tillgänglighetsstandarder från olika länder (EN 301 549, Section 508, ADA)
- **Granskning av tillgänglighetsdeklaration**: Utvärdera webbplatsens befintliga tillgänglighetsdeklaration (om sådan finns) mot dina fynd

## Leveranser

Skicka in en omfattande tillgänglighetsgranskningsrapport som visar professionell analys och praktisk implementeringsplanering:

**📄 Krav för slutrapporten:**

1. **Sammanfattning** (1 sida)
   - Översikt över webbplatsen och bedömning av tillgänglighetsmognad
   - Sammanfattning av nyckelfynd med affärspåverkan
   - Rekommenderade prioriterade åtgärder

2. **Metodologi och omfattning** (1 sida)
   - Testmetod, använda verktyg och utvärderingskriterier
   - Utvärderade sidor/sektioner och eventuella begränsningar
   - Ramverk för standardefterlevnad (WCAG 2.1 AA)

3. **Detaljerad fyndrapport** (3-4 sidor)
   - Observationer från manuell testning med användarscenarier
   - Resultat från automatiserade verktyg med korsreferenser
   - Problem organiserade efter WCAG-principer med bevis
   - Identifierade positiva tillgänglighetsfunktioner

4. **Strategisk åtgärdsplan** (3-4 sidor)
   - Prioriterade förbättringsrekommendationer (minst 10)
   - Implementeringstidslinje med insatsuppskattningar
   - Framgångsmått och verifieringsmetoder
   - Långsiktig strategi för tillgänglighetsunderhåll

5. **Stödjande bevis** (Bilagor)
   - Skärmdumpar av tillgänglighetsöverträdelser och testverktyg
   - Kodexempel som visar problem och lösningar
   - Verktygsrapporter och granskningssammanfattningar
   - Anteckningar eller inspelningar från skärmläsartestning

**📊 Formatkrav:**
- **Dokumentformat**: PDF (professionell presentation)
- **Ordantal**: 2,500-3,500 ord (exklusive bilagor och skärmdumpar)
- **Visuella element**: Inkludera skärmdumpar, diagram och exempel genomgående
- **Referenser**: Hänvisa till WCAG-riktlinjer och tillgänglighetsresurser på lämpligt sätt

**💡 Tips för excellens:**
- Använd professionell rapportformatering med konsekventa rubriker och stil
- Inkludera en innehållsförteckning för enkel navigering
- Balansera teknisk noggrannhet med tydligt, affärsmässigt språk
- Visa förståelse för både teknisk implementering och användarpåverkan

## Lärandemål

Efter att ha genomfört denna omfattande tillgänglighetsgranskning kommer du ha utvecklat viktiga professionella färdigheter:

**🎯 Tekniska kompetenser:**
- **Tillgänglighetstestning**: Färdighet med branschstandardiserade manuella och automatiserade testmetoder
- **WCAG-tillämpning**: Praktisk erfarenhet av att tillämpa Web Content Accessibility Guidelines i verkliga scenarier
- **Förståelse för hjälpmedelsteknik**: Praktisk erfarenhet av skärmläsare och tangentbordsnavigering
- **Problem-lösning-kartläggning**: Förmåga att identifiera tillgänglighetshinder och utveckla specifika, genomförbara åtgärdsstrategier

**💼 Professionella färdigheter:**
- **Teknisk kommunikation**: Erfarenhet av att skriva professionella tillgänglighetsrapporter för olika intressenter
- **Strategisk planering**: Förmåga att prioritera tillgänglighetsförbättringar baserat på användarpåverkan och genomförbarhet
- **Kvalitetssäkring**: Förståelse för tillgänglighetstestning som en del av utvecklingslivscykeln
- **Riskbedömning**: Insikt i juridiska, affärsmässiga och etiska konsekvenser av tillgänglighetsefterlevnad

**🌍 Inkluderande designmentalitet:**
- **Användarempati**: Djup förståelse för olika användarbehov och interaktioner med hjälpmedelsteknik
- **Universella designprinciper**: Erkännande av att tillgänglig design gynnar alla användare, inte bara de med funktionsnedsättningar
- **Kontinuerlig förbättring**: Ramverk för löpande tillgänglighetsbedömning och förbättring
- **Färdigheter i att förespråka**: Självförtroende att främja bästa praxis för tillgänglighet i framtida projekt och team

**🚀 Karriärförberedelse:**
Denna uppgift speglar verkliga konsultprojekt för tillgänglighet, vilket ger dig erfarenhet som är värd att inkludera i din portfolio och som visar:
- Systematisk problemlösningsförmåga
- Uppmärksamhet på både tekniska detaljer och affärspåverkan
- Tydlig kommunikation av komplexa tekniska koncept
- Förståelse för juridiska och etiska ansvar inom webbutveckling

Efter avslutad uppgift kommer du att vara redo att bidra meningsfullt till tillgänglighetsinitiativ i vilken webbutvecklingsroll som helst och förespråka inkluderande designpraxis

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess ursprungliga språk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.