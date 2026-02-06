# Uitgebreide toegankelijkheidsaudit van een website

## Instructies

In deze opdracht voer je een professionele toegankelijkheidsaudit uit van een echte website, waarbij je de principes en technieken toepast die je hebt geleerd. Deze praktische ervaring zal je begrip van toegankelijkheidsbarrières en oplossingen verdiepen.

Kies een website die toegankelijkheidsproblemen lijkt te hebben—dit biedt meer leermogelijkheden dan het analyseren van een al perfecte site. Goede kandidaten zijn oudere websites, complexe webapplicaties of sites met rijke multimedia-inhoud.

### Fase 1: Strategische handmatige evaluatie

Voordat je automatische tools gebruikt, voer je een uitgebreide handmatige beoordeling uit. Deze mensgerichte aanpak onthult vaak problemen die tools missen en helpt je de echte gebruikerservaring te begrijpen.

**🔍 Essentiële evaluatiecriteria:**

**Navigatie en structuur:**
- Kun je de hele site navigeren met alleen het toetsenbord (Tab, Shift+Tab, Enter, Spatie, pijltjestoetsen)?
- Zijn focusindicatoren duidelijk zichtbaar op alle interactieve elementen?
- Creëert de koppenstructuur (H1-H6) een logische inhoudelijke opbouw?
- Zijn er skiplinks om naar de hoofdinhoud te springen?

**Visuele toegankelijkheid:**
- Is er voldoende kleurcontrast op de hele site (minimaal 4.5:1 voor normale tekst)?
- Vertrouwt de site uitsluitend op kleur om belangrijke informatie over te brengen?
- Hebben alle afbeeldingen een geschikte alternatieve tekst?
- Blijft de lay-out functioneel bij 200% inzoomen?

**Inhoud en communicatie:**
- Zijn er "klik hier"-links of andere vage linkteksten?
- Kun je de inhoud en functionaliteit begrijpen zonder visuele aanwijzingen?
- Zijn formuliervelden correct gelabeld en gegroepeerd?
- Zijn foutmeldingen duidelijk en behulpzaam?

**Interactieve elementen:**
- Werken alle knoppen en formulierbesturingen alleen met het toetsenbord?
- Worden dynamische inhoudsveranderingen aangekondigd aan schermlezers?
- Volgen modale dialogen en complexe widgets de juiste toegankelijkheidspatronen?

📝 **Documenteer je bevindingen** met specifieke voorbeelden, screenshots en URL's van pagina's. Noteer zowel problemen als goed uitgevoerde aspecten.

### Fase 2: Uitgebreid automatisch testen

Valideer en breid je handmatige bevindingen uit met behulp van industriestandaard toegankelijkheidstesttools. Elke tool heeft verschillende sterke punten, dus het gebruik van meerdere tools biedt volledige dekking.

**🛠️ Vereiste testtools:**

1. **Lighthouse Accessibility Audit** (ingebouwd in Chrome/Edge DevTools)
   - Voer audits uit op meerdere pagina's
   - Focus op specifieke statistieken en aanbevelingen
   - Noteer je toegankelijkheidsscore en specifieke overtredingen

2. **axe DevTools** (browserextensie - industriestandaard)
   - Gedetailleerdere probleemdetectie dan Lighthouse
   - Biedt specifieke codevoorbeelden voor oplossingen
   - Test tegen WCAG 2.1-criteria

3. **WAVE Web Accessibility Evaluator** (browserextensie)
   - Visuele weergave van toegankelijkheidskenmerken
   - Markeert zowel fouten als positieve kenmerken
   - Geweldig voor het begrijpen van de paginavormgeving

4. **Kleurcontrastanalysers**
   - WebAIM Contrast Checker voor specifieke kleurparen
   - Browserextensies voor analyse van de hele pagina
   - Test tegen zowel WCAG AA- als AAA-standaarden

**🎧 Testen met echte ondersteunende technologie:**
- **Schermlezer testen**: Gebruik NVDA (Windows), VoiceOver (Mac) of TalkBack (Android)
- **Navigatie met alleen toetsenbord**: Koppel je muis los en navigeer door de hele site
- **Zoom testen**: Test functionaliteit bij 200% en 400% zoomniveaus
- **Stemgestuurde navigatie testen**: Probeer indien beschikbaar stemnavigatietools

**📊 Organiseer je resultaten** door een masterspreadsheet te maken met:
- Beschrijving en locatie van het probleem
- Ernstniveau (Kritiek/Hoog/Middelmatig/Laag)
- Overtreden WCAG-succescriteria
- Tool die het probleem heeft gedetecteerd
- Screenshots en bewijs

### Fase 3: Uitgebreide documentatie van bevindingen

Maak een professionele toegankelijkheidsauditrapportage die je begrip van zowel technische problemen als hun menselijke impact aantoont.

**📋 Vereiste rapportsecties:**

1. **Samenvatting** (1 pagina)
   - URL van de website en korte beschrijving
   - Algemeen toegankelijkheidsniveau
   - Top 3 meest kritieke problemen
   - Geschatte impact op gebruikers met een beperking

2. **Methodologie** (½ pagina)
   - Testaanpak en gebruikte tools
   - Geëvalueerde pagina's en apparaat/browsercombinaties
   - Beoordeelde standaarden (WCAG 2.1 AA)

3. **Gedetailleerde bevindingen** (2-3 pagina's)
   - Problemen gecategoriseerd per WCAG-principe (Waarneembaar, Bedienbaar, Begrijpelijk, Robuust)
   - Inclusief screenshots en specifieke voorbeelden
   - Noteer positieve toegankelijkheidskenmerken die je hebt gevonden
   - Kruisverwijzing met resultaten van automatische tools

4. **Beoordeling van gebruikersimpact** (1 pagina)
   - Hoe geïdentificeerde problemen gebruikers met verschillende beperkingen beïnvloeden
   - Scenario's die echte gebruikerservaringen beschrijven
   - Bedrijfseffecten (juridisch risico, SEO, uitbreiding gebruikersbasis)

**📸 Verzameling van bewijs:**
- Screenshots van toegankelijkheidsovertredingen
- Schermopnames van problematische gebruikersstromen
- Toolrapporten (opslaan als PDF's)
- Codevoorbeelden die problemen aantonen

### Fase 4: Professioneel verbeterplan

Ontwikkel een strategisch, geprioriteerd plan om toegankelijkheidsproblemen op te lossen. Dit toont je vermogen om te denken als een professionele webontwikkelaar die echte zakelijke beperkingen aanpakt.

**🎯 Maak gedetailleerde verbeteringsaanbevelingen (minimaal 10 problemen):**

**Voor elk geïdentificeerd probleem, geef:**

- **Probleembeschrijving**: Duidelijke uitleg van wat er mis is en waarom het problematisch is
- **WCAG-referentie**: Specifieke overtreden succescriteria (bijv. "2.4.4 Doel van links (in context) - Niveau A")
- **Impact op gebruikers**: Hoe dit mensen met verschillende beperkingen beïnvloedt
- **Oplossing**: Specifieke codewijzigingen, ontwerpaanpassingen of procesverbeteringen
- **Prioriteitsniveau**: Kritiek (blokkeert basisgebruik) / Hoog (significante barrière) / Middelmatig (bruikbaarheidsprobleem) / Laag (verbetering)
- **Implementatie-inspanning**: Tijd/complexiteitsschatting (Snelle winst / Gemiddelde inspanning / Grote herstructurering)
- **Testverificatie**: Hoe te verifiëren dat de oplossing werkt

**Voorbeeld van een verbeteringsinvoer:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strategische implementatiefasen:**

- **Fase 1 (0-2 weken)**: Kritieke problemen die basisfunctionaliteit blokkeren
- **Fase 2 (1-2 maanden)**: Verbeteringen met hoge prioriteit voor een betere gebruikerservaring
- **Fase 3 (3-6 maanden)**: Verbeteringen met gemiddelde prioriteit en procesverbeteringen
- **Fase 4 (Doorlopend)**: Voortdurende monitoring en verbetering

## Beoordelingscriteria

Je toegankelijkheidsaudit wordt beoordeeld op zowel technische nauwkeurigheid als professionele presentatie:

| Criteria | Uitstekend (90-100%) | Goed (80-89%) | Voldoende (70-79%) | Verbetering nodig (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Diepgang handmatige test** | Uitgebreide evaluatie die alle POUR-principes dekt met gedetailleerde observaties en gebruikersscenario's | Goede dekking van de meeste toegankelijkheidsgebieden met duidelijke bevindingen en enige analyse van gebruikersimpact | Basisbeoordeling die belangrijke gebieden dekt met voldoende observaties | Beperkte tests met oppervlakkige observaties en minimale gebruikersimpactanalyse |
| **Gebruik van tools & analyse** | Gebruikt alle vereiste tools effectief, kruisverwijst bevindingen, bevat duidelijk bewijs en analyseert beperkingen van tools | Gebruikt de meeste tools met goede documentatie, enige kruisverwijzing en voldoende bewijs | Gebruikt vereiste tools met basisdocumentatie en enig bewijs | Minimale toolgebruik, slechte documentatie of ontbrekend bewijs |
| **Probleemidentificatie & categorisatie** | Identificeert 15+ specifieke problemen over alle WCAG-principes, categoriseert nauwkeurig op ernst, toont diep begrip | Identificeert 10-14 problemen over de meeste WCAG-principes, goede categorisatie, toont solide begrip | Identificeert 7-9 problemen met voldoende WCAG-dekking en basiscategorisatie | Identificeert <7 problemen met beperkte reikwijdte of slechte categorisatie |
| **Kwaliteit & haalbaarheid van oplossingen** | 10+ gedetailleerde, uitvoerbare oplossingen met nauwkeurige WCAG-referenties, realistische implementatietijdlijnen en verificatiemethoden | 8-9 goed ontwikkelde oplossingen met meestal nauwkeurige referenties en goede implementatiedetails | 6-7 basisoplossingen met enige details en over het algemeen realistische benaderingen | <6 oplossingen of onvoldoende details, onrealistische implementaties |
| **Professionele communicatie** | Rapport is uitstekend georganiseerd, duidelijk geschreven, bevat samenvatting, gebruikt geschikte technische taal en volgt zakelijke documentstandaarden | Goed georganiseerd met goede schrijfkwaliteit, bevat de meeste vereiste secties, geschikte toon | Voldoende georganiseerd met acceptabele schrijfstijl, bevat basisvereiste secties | Slechte organisatie, onduidelijke schrijfstijl of ontbrekende belangrijke secties |
| **Toepassing in de praktijk** | Toont begrip van zakelijke impact, juridische overwegingen, gebruikersdiversiteit en praktische implementatie-uitdagingen | Toont goed begrip van praktische toepassingen met enige zakelijke context | Basisbegrip van praktische toepassingen | Beperkte verbinding met praktische toepassingen |

## Opties voor gevorderde uitdaging

**🚀 Voor studenten die extra uitdaging zoeken:**

- **Vergelijkende analyse**: Voer een audit uit van 2-3 concurrerende websites en vergelijk hun toegankelijkheidsniveau
- **Focus op mobiele toegankelijkheid**: Verdiep je in mobiele specifieke toegankelijkheidsproblemen met Android TalkBack of iOS VoiceOver
- **Internationaal perspectief**: Onderzoek en pas toegankelijkheidsnormen toe uit verschillende landen (EN 301 549, Section 508, ADA)
- **Evaluatie toegankelijkheidsverklaring**: Beoordeel de bestaande toegankelijkheidsverklaring van de website (indien aanwezig) aan de hand van je bevindingen

## Op te leveren documenten

Dien een uitgebreide toegankelijkheidsauditrapportage in die een professionele analyse en praktische implementatieplanning aantoont:

**📄 Vereisten voor het eindrapport:**

1. **Samenvatting** (1 pagina)
   - Overzicht van de website en beoordeling van toegankelijkheidsniveau
   - Samenvatting van belangrijke bevindingen met bedrijfseffect
   - Aanbevolen prioritaire acties

2. **Methodologie en scope** (1 pagina)
   - Testaanpak, gebruikte tools en evaluatiecriteria
   - Geëvalueerde pagina's/secties en eventuele beperkingen
   - Kader voor naleving van standaarden (WCAG 2.1 AA)

3. **Gedetailleerd bevindingenrapport** (3-4 pagina's)
   - Observaties van handmatige tests met gebruikersscenario's
   - Resultaten van automatische tools met kruisverwijzing
   - Problemen georganiseerd per WCAG-principes met bewijs
   - Geïdentificeerde positieve toegankelijkheidskenmerken

4. **Strategisch verbeterplan** (3-4 pagina's)
   - Geprioriteerde verbeteringsaanbevelingen (minimaal 10)
   - Implementatietijdlijn met inspanningsschattingen
   - Succesindicatoren en verificatiemethoden
   - Langetermijnstrategie voor toegankelijkheidsbeheer

5. **Ondersteunend bewijs** (bijlagen)
   - Screenshots van toegankelijkheidsovertredingen en testtools
   - Codevoorbeelden die problemen en oplossingen aantonen
   - Toolrapporten en auditoverzichten
   - Aantekeningen of opnames van schermlezer-tests

**📊 Formaatvereisten:**
- **Documentformaat**: PDF (professionele presentatie)
- **Aantal woorden**: 2.500-3.500 woorden (exclusief bijlagen en screenshots)
- **Visuele elementen**: Voeg screenshots, diagrammen en voorbeelden toe
- **Bronvermelding**: Verwijs naar WCAG-richtlijnen en toegankelijkheidsbronnen waar nodig

**💡 Tips voor uitmuntendheid:**
- Gebruik professionele rapportopmaak met consistente koppen en stijlen
- Voeg een inhoudsopgave toe voor eenvoudige navigatie
- Combineer technische nauwkeurigheid met duidelijke, zakelijke taal
- Toon begrip van zowel technische implementatie als gebruikersimpact

## Leerresultaten

Na het voltooien van deze uitgebreide toegankelijkheidsaudit, ontwikkel je essentiële professionele vaardigheden:

**🎯 Technische competenties:**
- **Beheersing van toegankelijkheidstesten**: Vaardigheid in handmatige en automatische testmethoden volgens de industriestandaard
- **Toepassing van WCAG**: Praktische ervaring met het toepassen van Web Content Accessibility Guidelines in echte situaties
- **Begrip van ondersteunende technologie**: Praktische ervaring met schermlezers en toetsenbordnavigatie
- **Probleem-oplossingsmapping**: Vermogen om toegankelijkheidsbarrières te identificeren en specifieke, uitvoerbare verbeteringsstrategieën te ontwikkelen

**💼 Professionele vaardigheden:**
- **Technische communicatie**: Ervaring met het schrijven van professionele toegankelijkheidsrapporten voor diverse belanghebbenden
- **Strategische planning**: Vermogen om toegankelijkheidsverbeteringen te prioriteren op basis van gebruikersimpact en uitvoerbaarheid
- **Kwaliteitsborging**: Begrip van toegankelijkheidstesten als onderdeel van de ontwikkelingscyclus
- **Risicobeoordeling**: Inzicht in juridische, zakelijke en ethische implicaties van toegankelijkheidsnaleving

**🌍 Inclusief ontwerp mindset:**
- **Gebruikersempathie**: Diep begrip van diverse gebruikersbehoeften en interacties met ondersteunende technologie
- **Universele ontwerpprincipes**: Erkenning dat toegankelijk ontwerp alle gebruikers ten goede komt, niet alleen mensen met beperkingen
- **Voortdurende verbetering**: Kader voor voortdurende toegankelijkheidsbeoordeling en verbetering
- **Advocacy vaardigheden**: Vertrouwen om toegankelijkheidsbest practices te promoten in toekomstige projecten en teams

**🚀 Carrièrevoorbereiding:**
Deze opdracht weerspiegelt echte toegankelijkheidsadviesprojecten en biedt je portfolio-waardige ervaring die aantoont:
- Systematische probleemoplossingsaanpak
- Aandacht voor zowel technische details als bedrijfseffecten
- Duidelijke communicatie van complexe technische concepten
- Begrip van juridische en ethische verantwoordelijkheden in webontwikkeling

Na voltooiing ben je voorbereid om betekenisvol bij te dragen aan toegankelijkheidsinitiatieven in elke webontwikkelingsrol en om inclusieve ontwerppraktijken te promoten gedurende je carrière.

---

**Disclaimer**:  
Dit document is vertaald met behulp van de AI-vertalingsservice [Co-op Translator](https://github.com/Azure/co-op-translator). Hoewel we streven naar nauwkeurigheid, dient u zich ervan bewust te zijn dat geautomatiseerde vertalingen fouten of onnauwkeurigheden kunnen bevatten. Het originele document in de oorspronkelijke taal moet worden beschouwd als de gezaghebbende bron. Voor kritieke informatie wordt professionele menselijke vertaling aanbevolen. Wij zijn niet aansprakelijk voor eventuele misverstanden of verkeerde interpretaties die voortvloeien uit het gebruik van deze vertaling.