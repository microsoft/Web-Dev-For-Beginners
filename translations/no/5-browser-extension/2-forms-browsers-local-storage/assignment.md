<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-23T22:39:47+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "no"
}
-->
# Adopter en API

## Oversikt

API-er åpner opp for uendelige muligheter innen kreativ webutvikling! I denne oppgaven skal du velge en ekstern API og lage en nettleserutvidelse som løser et reelt problem eller gir verdifull funksjonalitet til brukerne.

## Instruksjoner

### Steg 1: Velg din API
Velg en API fra denne kuraterte [listen over gratis offentlige API-er](https://github.com/public-apis/public-apis). Vurder disse kategoriene:

**Populære alternativer for nybegynnere:**
- **Underholdning**: [Dog CEO API](https://dog.ceo/dog-api/) for tilfeldige hundebilder
- **Vær**: [OpenWeatherMap](https://openweathermap.org/api) for nåværende værdata
- **Sitater**: [Quotable API](https://quotable.io/) for inspirerende sitater
- **Nyheter**: [NewsAPI](https://newsapi.org/) for aktuelle overskrifter
- **Morsomme fakta**: [Numbers API](http://numbersapi.com/) for interessante tallfakta

### Steg 2: Planlegg utvidelsen din
Før du begynner å kode, svar på disse planleggingsspørsmålene:
- Hvilket problem løser utvidelsen din?
- Hvem er målgruppen din?
- Hvilke data vil du lagre i lokal lagring?
- Hvordan vil du håndtere API-feil eller grenseverdier?

### Steg 3: Bygg utvidelsen din
Utvidelsen din bør inkludere:

**Obligatoriske funksjoner:**
- Skjemainndata for nødvendige API-parametere
- API-integrasjon med riktig feilhåndtering
- Lokal lagring for brukerpreferanser eller API-nøkler
- Rent, responsivt brukergrensesnitt
- Lastetilstander og tilbakemeldinger til brukeren

**Krav til kode:**
- Bruk moderne JavaScript (ES6+) funksjoner
- Implementer async/await for API-kall
- Inkluder riktig feilhåndtering med try/catch-blokker
- Legg til meningsfulle kommentarer som forklarer koden din
- Følg en konsekvent kodeformatering

### Steg 4: Test og finpuss
- Test utvidelsen din med ulike inndata
- Håndter spesialtilfeller (ingen internett, ugyldige API-responser)
- Sørg for at utvidelsen fungerer etter at nettleseren startes på nytt
- Legg til brukervennlige feilmeldinger

## Ekstra utfordringer

Ta utvidelsen din til neste nivå:
- Legg til flere API-endepunkter for rikere funksjonalitet
- Implementer datacaching for å redusere API-kall
- Lag hurtigtaster for vanlige handlinger
- Legg til funksjoner for eksport/import av data
- Implementer tilpasningsmuligheter for brukeren

## Krav til innlevering

1. **Fungerende nettleserutvidelse** som integreres med den valgte API-en
2. **README-fil** som forklarer:
   - Hvilken API du valgte og hvorfor
   - Hvordan installere og bruke utvidelsen din
   - Eventuelle API-nøkler eller oppsett som kreves
   - Skjermbilder av utvidelsen i bruk
3. **Ren, kommentert kode** som følger moderne JavaScript-praksis

## Vurderingskriterier

| Kriterier | Eksemplarisk (90-100%) | Godt (80-89%) | Under utvikling (70-79%) | Begynnende (60-69%) |
|-----------|-------------------------|---------------|--------------------------|---------------------|
| **API-integrasjon** | Feilfri API-integrasjon med omfattende feilhåndtering og håndtering av spesialtilfeller | Vellykket API-integrasjon med grunnleggende feilhåndtering | API fungerer, men har begrenset feilhåndtering | API-integrasjon har betydelige problemer |
| **Kodekvalitet** | Ren, godt kommentert moderne JavaScript som følger beste praksis | God kodestruktur med tilstrekkelige kommentarer | Koden fungerer, men trenger bedre organisering | Dårlig kodekvalitet med minimale kommentarer |
| **Brukeropplevelse** | Polert grensesnitt med utmerkede lastetilstander og tilbakemeldinger | Godt grensesnitt med grunnleggende tilbakemeldinger | Grunnleggende grensesnitt som fungerer tilstrekkelig | Dårlig brukeropplevelse med forvirrende grensesnitt |
| **Lokal lagring** | Sofistikert bruk av lokal lagring med datavalidering og administrasjon | Riktig implementering av lokal lagring for nøkkelfunksjoner | Grunnleggende implementering av lokal lagring | Minimal eller feilaktig bruk av lokal lagring |
| **Dokumentasjon** | Omfattende README med oppsettsinstruksjoner og skjermbilder | God dokumentasjon som dekker de fleste krav | Grunnleggende dokumentasjon med manglende detaljer | Dårlig eller manglende dokumentasjon |

## Tips for å komme i gang

1. **Start enkelt**: Velg en API som ikke krever kompleks autentisering
2. **Les dokumentasjonen**: Forstå API-endepunktene og responsene til den valgte API-en grundig
3. **Planlegg grensesnittet ditt**: Skisser utvidelsens grensesnitt før du begynner å kode
4. **Test ofte**: Bygg gradvis og test hver funksjon etter hvert som du legger den til
5. **Håndter feil**: Anta alltid at API-kall kan mislykkes og planlegg deretter

## Ressurser

- [Dokumentasjon for nettleserutvidelser](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Fetch API Guide](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Lokal lagring veiledning](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON Parsing og håndtering](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Ha det gøy med å bygge noe nyttig og kreativt! 🚀

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiserte oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på dets opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.