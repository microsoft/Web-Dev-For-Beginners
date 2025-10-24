<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2025-10-23T22:13:29+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "da"
}
-->
# Analyser en hjemmeside for ydeevne

## Opgaveoversigt

Ydeevneanalyse er en afgørende færdighed for moderne webudviklere. I denne opgave skal du udføre en omfattende ydeevneundersøgelse af en rigtig hjemmeside ved hjælp af både browserbaserede værktøjer og tredjepartstjenester for at identificere flaskehalse og foreslå optimeringsstrategier.

Din opgave er at levere en detaljeret ydeevnerapport, der demonstrerer din forståelse af principperne for webydeevne og din evne til effektivt at bruge professionelle analyseværktøjer.

## Opgaveinstruktioner

**Vælg en hjemmeside** til analyse - vælg en af følgende muligheder:
- En populær hjemmeside, du ofte bruger (nyhedsside, sociale medier, e-handel)
- En open source-projekthjemmeside (GitHub-sider, dokumentationssider)
- En lokal virksomheds hjemmeside eller porteføljeside
- Dit eget projekt eller tidligere kursusarbejde

**Udfør en analyse med flere værktøjer** ved at bruge mindst tre forskellige tilgange:
- **Browser DevTools** - Brug Chrome/Edge Performance-fanen til detaljeret profilering
- **Online auditværktøjer** - Prøv Lighthouse, GTmetrix eller WebPageTest
- **Netværksanalyse** - Undersøg ressourceindlæsning, filstørrelser og anmodningsmønstre

**Dokumentér dine fund** i en omfattende rapport, der inkluderer:

### Analyse af ydeevnemålinger
- **Indlæsningstidsmålinger** fra flere værktøjer og perspektiver
- **Core Web Vitals**-scores (LCP, FID, CLS) og deres betydning
- **Ressourceopdeling**, der viser hvilke aktiver der bidrager mest til indlæsningstiden
- **Netværksvandfaldsanalyse**, der identificerer blokerende ressourcer

### Problemanalyse
- **Specifikke ydeevneflaskehalse** med understøttende data
- **Årsagsanalyse**, der forklarer, hvorfor hvert problem opstår
- **Brugerpåvirkningsvurdering**, der beskriver, hvordan problemer påvirker rigtige brugere
- **Prioriteringsrangering** af problemer baseret på alvorlighed og sværhedsgrad ved løsning

### Optimeringsanbefalinger
- **Specifikke, handlingsorienterede forbedringer** med forventet effekt
- **Implementeringsstrategier** for hver anbefalet ændring
- **Moderne bedste praksis**, der kan anvendes (lazy loading, komprimering osv.)
- **Værktøjer og teknikker** til løbende ydeevneovervågning

## Forskningskrav

**Stol ikke kun på browserværktøjer** - udvid din analyse ved hjælp af:

**Tredjeparts audit-tjenester:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Omfattende audits
- [GTmetrix](https://gtmetrix.com/) - Indsigt i ydeevne og optimering
- [WebPageTest](https://www.webpagetest.org/) - Test under virkelige forhold
- [Pingdom](https://tools.pingdom.com/) - Global ydeevneovervågning

**Specialiserede analyseværktøjer:**
- [Bundle Analyzer](https://bundlephobia.com/) - Analyse af JavaScript-pakkestørrelser
- [Image optimization tools](https://squoosh.app/) - Muligheder for optimering af aktiver
- [Security headers analysis](https://securityheaders.com/) - Sikkerhedsindvirkning på ydeevne

## Format for leverancer

Opret en professionel rapport (2-3 sider), der inkluderer:

1. **Resumé** - Oversigt over nøglefund og anbefalinger
2. **Metodologi** - Brugte værktøjer og testtilgang
3. **Nuværende ydeevnevurdering** - Grundlæggende målinger og resultater
4. **Identificerede problemer** - Detaljeret problemanalyse med understøttende data
5. **Anbefalinger** - Prioriterede forbedringsstrategier
6. **Implementeringsplan** - Trinvise optimeringsplaner

**Inkluder visuelle beviser:**
- Skærmbilleder af ydeevneværktøjer og målinger
- Diagrammer eller grafer, der viser ydeevnedata
- Før/efter sammenligninger, hvor det er muligt
- Netværksvandfaldsdiagrammer og ressourceopdelinger

## Bedømmelseskriterier

| Kriterier | Fremragende (90-100%) | Tilstrækkelig (70-89%) | Kræver forbedring (50-69%) |
| --------- | --------------------- | ---------------------- | -------------------------- |
| **Analyse dybde** | Omfattende analyse med 4+ værktøjer med detaljerede målinger, årsagsanalyse og vurdering af brugerpåvirkning | God analyse med 3 værktøjer med klare målinger og grundlæggende problemidentifikation | Grundlæggende analyse med 2 værktøjer med begrænset dybde og minimal problemidentifikation |
| **Værktøjsdiversitet** | Brug af browserværktøjer + 3+ tredjepartstjenester med sammenlignende analyse og indsigt fra hver | Brug af browserværktøjer + 2 tredjepartstjenester med noget sammenlignende analyse | Brug af browserværktøjer + 1 tredjepartstjeneste med begrænset sammenligning |
| **Problemidentifikation** | Identificerer 5+ specifikke ydeevneproblemer med detaljeret årsagsanalyse og kvantificeret påvirkning | Identificerer 3-4 ydeevneproblemer med god analyse og noget påvirkningsmåling | Identificerer 1-2 ydeevneproblemer med grundlæggende analyse |
| **Anbefalinger** | Giver specifikke, handlingsorienterede anbefalinger med implementeringsdetaljer, forventet effekt og moderne bedste praksis | Giver gode anbefalinger med noget implementeringsvejledning og forventede resultater | Giver grundlæggende anbefalinger med begrænsede implementeringsdetaljer |
| **Professionel præsentation** | Velorganiseret rapport med klar struktur, visuelle beviser, resumé og professionel formatering | God organisering med nogle visuelle beviser og klar struktur | Grundlæggende organisering med minimal visuel dokumentation |

## Læringsmål

Ved at gennemføre denne opgave vil du demonstrere din evne til at:
- **Anvende** professionelle ydeevneanalyseværktøjer og metoder
- **Identificere** ydeevneflaskehalse ved hjælp af datadrevet analyse
- **Analysere** forholdet mellem kodekvalitet og brugeroplevelse
- **Anbefale** specifikke, handlingsorienterede optimeringsstrategier
- **Kommunikere** tekniske fund i et professionelt format

Denne opgave styrker de ydeevnekoncepter, der er lært i lektionen, samtidig med at den opbygger praktiske færdigheder, du vil bruge gennem hele din karriere som webudvikler.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal du være opmærksom på, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi er ikke ansvarlige for eventuelle misforståelser eller fejltolkninger, der opstår som følge af brugen af denne oversættelse.