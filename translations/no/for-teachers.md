<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-03T10:00:12+00:00",
  "source_file": "for-teachers.md",
  "language_code": "no"
}
-->
### For lærere

Du er velkommen til å bruke dette pensumet i klasserommet ditt. Det fungerer sømløst med GitHub Classroom og ledende LMS-plattformer, og det kan også brukes som et frittstående repo med studentene dine.

### Bruk med GitHub Classroom

For å administrere leksjoner og oppgaver per kohort, opprett ett repository per leksjon slik at GitHub Classroom kan knytte hver oppgave uavhengig.

- Fork dette repoet til organisasjonen din.
- Opprett et separat repo for hver leksjon ved å trekke ut hver leksjonsmappe til sitt eget repository.
  - Alternativ A: Opprett tomme repos (ett per leksjon) og kopier innholdet fra leksjonsmappen inn i hver.
  - Alternativ B: Bruk en metode som bevarer Git-historikken (f.eks. del en mappe inn i et nytt repo) hvis du trenger opprinnelse.
- I GitHub Classroom, opprett en oppgave per leksjon og pek den til det tilsvarende leksjonsrepoet.
- Anbefalte innstillinger:
  - Repository-synlighet: privat for studentarbeid.
  - Bruk startkode fra standardgrenen til leksjonsrepoet.
  - Legg til maler for Issues og Pull Requests for quizzer og innleveringer.
  - Konfigurer eventuelt autogradering og tester hvis leksjonene dine inkluderer dette.
- Konvensjoner som hjelper:
  - Repository-navn som lesson-01-intro, lesson-02-html, osv.
  - Etiketter: quiz, assignment, needs-review, late, resubmission.
  - Tags/releases per kohort (f.eks. v2025-term1).

Tips: Unngå å lagre repositories inne i synkroniserte mapper (f.eks. OneDrive/Google Drive) for å forhindre Git-konflikter på Windows.

### Bruk med Moodle, Canvas eller Blackboard

Dette pensumet inkluderer importbare pakker for vanlige LMS-arbeidsflyter.

- Moodle: Bruk Moodle-opplastingsfilen [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz) for å laste inn hele kurset.
- Common Cartridge: Bruk Common Cartridge-filen [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) for bredere LMS-kompatibilitet.
- Notater:
  - Moodle Cloud har begrenset støtte for Common Cartridge. Foretrekk Moodle-filen ovenfor, som også kan lastes opp til Canvas.
  - Etter import, gjennomgå moduler, frister og quiz-innstillinger for å tilpasse til din terminplan.

![Moodle](../../translated_images/no/moodle.94eb93d714a50cb2.png)
> Pensumet i et Moodle-klasserom

![Canvas](../../translated_images/no/canvas.fbd605ff8e5b8aff.png)
> Pensumet i Canvas

### Bruk repoet direkte (uten Classroom)

Hvis du foretrekker å ikke bruke GitHub Classroom, kan du kjøre kurset direkte fra dette repoet.

- Synkrone/online formater (Zoom/Teams):
  - Kjør korte mentorledede oppvarminger; bruk grupperom for quizzer.
  - Annonser et tidsvindu for quizzer; studentene sender inn svar som GitHub Issues.
  - For samarbeidsoppgaver, jobber studentene i offentlige leksjonsrepoer og åpner Pull Requests.
- Private/asynkrone formater:
  - Studentene forker hver leksjon til sine egne **private** repoer og legger deg til som samarbeidspartner.
  - De sender inn via Issues (quizzer) og Pull Requests (oppgaver) på ditt klasseromsrepo eller deres private forks.

### Beste praksis

- Gi en orienteringsleksjon om Git/GitHub-grunnleggende, Issues og PRs.
- Bruk sjekklister i Issues for oppgaver/quizzer med flere steg.
- Legg til CONTRIBUTING.md og CODE_OF_CONDUCT.md for å sette klasseromsnormer.
- Legg til tilgjengelighetsnotater (alt-tekst, bildetekster) og tilby utskrivbare PDF-er.
- Versjoner innholdet ditt per termin og frys leksjonsrepoer etter publisering.

### Tilbakemeldinger og støtte

Vi ønsker at dette pensumet skal fungere for deg og studentene dine. Vennligst åpne en ny Issue i dette repoet for feil, forespørsler eller forbedringer, eller start en diskusjon i Teacher Corner.

---

**Ansvarsfraskrivelse**:  
Dette dokumentet er oversatt ved hjelp av AI-oversettelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selv om vi tilstreber nøyaktighet, vær oppmerksom på at automatiske oversettelser kan inneholde feil eller unøyaktigheter. Det originale dokumentet på sitt opprinnelige språk bør anses som den autoritative kilden. For kritisk informasjon anbefales profesjonell menneskelig oversettelse. Vi er ikke ansvarlige for eventuelle misforståelser eller feiltolkninger som oppstår ved bruk av denne oversettelsen.