<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-23T22:30:39+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "no"
}
-->
# Implementere "Legg til transaksjon"-dialog

## Oversikt

Din bankapp har nå solid tilstandshåndtering og datalagring, men mangler en viktig funksjon som ekte bankapper trenger: muligheten for brukere til å legge til egne transaksjoner. I denne oppgaven skal du implementere en komplett "Legg til transaksjon"-dialog som integreres sømløst med ditt eksisterende tilstandshåndteringssystem.

Denne oppgaven samler alt du har lært i de fire bankleksjonene: HTML-templating, håndtering av skjemaer, API-integrasjon og tilstandshåndtering.

## Læringsmål

Ved å fullføre denne oppgaven vil du:
- **Lage** et brukervennlig dialoggrensesnitt for dataregistrering
- **Implementere** tilgjengelig skjema-design med støtte for tastatur og skjermleser
- **Integrere** nye funksjoner med ditt eksisterende tilstandshåndteringssystem
- **Øve på** API-kommunikasjon og feilhåndtering
- **Bruke** moderne webutviklingsmønstre på en funksjon fra virkeligheten

## Instruksjoner

### Steg 1: Legg til transaksjonsknapp

**Lag** en "Legg til transaksjon"-knapp på dashbordet som brukerne enkelt kan finne og bruke.

**Krav:**
- **Plasser** knappen på et logisk sted på dashbordet
- **Bruk** tydelig, handlingsorientert knappetekst
- **Stil** knappen slik at den matcher ditt eksisterende UI-design
- **Sørg for** at knappen er tilgjengelig med tastatur

### Steg 2: Implementering av dialog

Velg en av disse to tilnærmingene for å implementere dialogen:

**Alternativ A: Separat side**
- **Lag** en ny HTML-mal for transaksjonsskjemaet
- **Legg til** en ny rute i ditt rutingssystem
- **Implementer** navigasjon til og fra skjema-siden

**Alternativ B: Modal dialog (Anbefalt)**
- **Bruk** JavaScript for å vise/skjule dialogen uten å forlate dashbordet
- **Implementer** ved hjelp av [`hidden`-egenskapen](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) eller CSS-klasser
- **Lag** en jevn brukeropplevelse med riktig fokusstyring

### Steg 3: Implementering av tilgjengelighet

**Sørg for** at dialogen oppfyller [tilgjengelighetsstandarder for modale dialoger](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Tastaturnavigasjon:**
- **Støtt** Escape-tasten for å lukke dialogen
- **Fang** fokus innenfor dialogen når den er åpen
- **Returner** fokus til utløserknappen når den er lukket

**Skjermleserstøtte:**
- **Legg til** passende ARIA-etiketter og roller
- **Informer** skjermlesere om åpning/lukking av dialogen
- **Gi** klare etiketter for skjemaelementer og feilmeldinger

### Steg 4: Opprettelse av skjema

**Design** et HTML-skjema som samler inn transaksjonsdata:

**Obligatoriske felt:**
- **Dato**: Når transaksjonen fant sted
- **Beskrivelse**: Hva transaksjonen gjelder
- **Beløp**: Transaksjonsverdi (positiv for inntekt, negativ for utgifter)

**Skjemafunksjoner:**
- **Valider** brukerinput før innsending
- **Gi** klare feilmeldinger for ugyldige data
- **Inkluder** hjelpsom plassholdertekst og etiketter
- **Stil** skjemaet i tråd med ditt eksisterende design

### Steg 5: API-integrasjon

**Koble** skjemaet til backend-APIet:

**Implementeringssteg:**
- **Gå gjennom** [server-API-spesifikasjonene](../api/README.md) for riktig endepunkt og dataformat
- **Opprett** JSON-data fra skjemaets input
- **Send** dataene til APIet med passende feilhåndtering
- **Vis** suksess-/feilmeldinger til brukeren
- **Håndter** nettverksfeil på en god måte

### Steg 6: Integrasjon med tilstandshåndtering

**Oppdater** dashbordet med den nye transaksjonen:

**Integrasjonskrav:**
- **Oppdater** kontodataene etter vellykket transaksjonsregistrering
- **Oppdater** dashbordvisningen uten å kreve en sideoppdatering
- **Sørg for** at den nye transaksjonen vises umiddelbart
- **Oppretthold** riktig tilstandskonsistens gjennom hele prosessen

## Tekniske spesifikasjoner

**API-endepunktdetaljer:**
Se [server-API-dokumentasjonen](../api/README.md) for:
- Obligatorisk JSON-format for transaksjonsdata
- HTTP-metode og endepunkt-URL
- Forventet responsformat
- Feilresponshåndtering

**Forventet resultat:**
Etter å ha fullført denne oppgaven, skal bankappen din ha en fullt funksjonell "Legg til transaksjon"-funksjon som ser profesjonell ut og fungerer som den skal:

![Skjermbilde som viser et eksempel på "Legg til transaksjon"-dialog](../../../../translated_images/dialog.93bba104afeb79f1.no.png)

## Testing av implementeringen

**Funksjonell testing:**
1. **Bekreft** at "Legg til transaksjon"-knappen er tydelig synlig og tilgjengelig
2. **Test** at dialogen åpnes og lukkes riktig
3. **Bekreft** at skjemaets validering fungerer for alle obligatoriske felt
4. **Sjekk** at vellykkede transaksjoner vises umiddelbart på dashbordet
5. **Sørg for** at feilhåndtering fungerer for ugyldige data og nettverksproblemer

**Tilgjengelighetstesting:**
1. **Naviger** gjennom hele flyten kun ved bruk av tastaturet
2. **Test** med en skjermleser for å sikre riktige annonseringer
3. **Bekreft** at fokusstyring fungerer korrekt
4. **Sjekk** at alle skjemaelementer har passende etiketter

## Evalueringsrubrikk

| Kriterier | Fremragende | Tilfredsstillende | Trenger forbedring |
| --------- | ----------- | ----------------- | ------------------ |
| **Funksjonalitet** | "Legg til transaksjon"-funksjonen fungerer feilfritt med utmerket brukeropplevelse og følger alle beste praksiser fra leksjonene | "Legg til transaksjon"-funksjonen fungerer korrekt, men kan mangle noen beste praksiser eller ha mindre brukervennlighetsproblemer | "Legg til transaksjon"-funksjonen fungerer delvis eller har betydelige brukervennlighetsproblemer |
| **Kodekvalitet** | Koden er godt organisert, følger etablerte mønstre, inkluderer riktig feilhåndtering og integreres sømløst med eksisterende tilstandshåndtering | Koden fungerer, men kan ha noen organisasjonsproblemer eller inkonsekvente mønstre med den eksisterende kodebasen | Koden har betydelige strukturelle problemer eller integreres dårlig med eksisterende mønstre |
| **Tilgjengelighet** | Full støtte for tastaturnavigasjon, skjermleserkompatibilitet og følger WCAG-retningslinjer med utmerket fokusstyring | Grunnleggende tilgjengelighetsfunksjoner implementert, men kan mangle noen tastaturnavigasjons- eller skjermleserfunksjoner | Begrenset eller ingen tilgjengelighetsvurderinger implementert |
| **Brukeropplevelse** | Intuitivt, polert grensesnitt med tydelig tilbakemelding, jevne interaksjoner og profesjonelt utseende | God brukeropplevelse med mindre forbedringsområder i tilbakemelding eller visuell design | Dårlig brukeropplevelse med forvirrende grensesnitt eller mangel på tilbakemelding |

## Ekstra utfordringer (valgfritt)

Når du har fullført de grunnleggende kravene, kan du vurdere disse forbedringene:

**Utvidede funksjoner:**
- **Legg til** transaksjonskategorier (mat, transport, underholdning, etc.)
- **Implementer** inputvalidering med sanntids tilbakemelding
- **Lag** hurtigtaster for erfarne brukere
- **Legg til** mulighet for redigering og sletting av transaksjoner

**Avansert integrasjon:**
- **Implementer** angrefunksjon for nylig lagrede transaksjoner
- **Legg til** bulkimport av transaksjoner fra CSV-filer
- **Lag** søke- og filtreringsfunksjoner for transaksjoner
- **Implementer** dataeksportfunksjonalitet

Disse valgfrie funksjonene vil hjelpe deg med å øve på mer avanserte webutviklingskonsepter og skape en mer komplett bankapplikasjon!

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi streber etter nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.