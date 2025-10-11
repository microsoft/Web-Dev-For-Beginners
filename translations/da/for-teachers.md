<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-03T09:57:07+00:00",
  "source_file": "for-teachers.md",
  "language_code": "da"
}
-->
### For undervisere

Du er velkommen til at bruge dette pensum i din undervisning. Det fungerer problemfrit med GitHub Classroom og førende LMS-platforme, og det kan også bruges som et selvstændigt repo med dine elever.

### Brug med GitHub Classroom

For at administrere lektioner og opgaver pr. hold, opret et repository pr. lektion, så GitHub Classroom kan tilknytte hver opgave uafhængigt.

- Fork dette repo til din organisation.
- Opret et separat repo for hver lektion ved at udtrække hver lektionmappe til sit eget repository.
  - Mulighed A: Opret tomme repos (et pr. lektion) og kopier indholdet af lektionmappen ind i hver.
  - Mulighed B: Brug en metode, der bevarer Git-historikken (f.eks. split en mappe til et nyt repo), hvis du har brug for oprindelse.
- I GitHub Classroom, opret en opgave pr. lektion og peg den til det tilsvarende lektionrepo.
- Anbefalede indstillinger:
  - Repository-synlighed: privat for elevarbejde.
  - Brug startkode fra lektionrepoets standardgren.
  - Tilføj issue- og pull request-skabeloner til quizzer og indsendelser.
  - Konfigurer eventuelt autogradering og tests, hvis dine lektioner inkluderer dem.
- Konventioner, der hjælper:
  - Repository-navne som lesson-01-intro, lesson-02-html osv.
  - Labels: quiz, assignment, needs-review, late, resubmission.
  - Tags/releases pr. hold (f.eks. v2025-term1).

Tip: Undgå at gemme repositories i synkroniserede mapper (f.eks. OneDrive/Google Drive) for at forhindre Git-konflikter på Windows.

### Brug med Moodle, Canvas eller Blackboard

Dette pensum inkluderer importbare pakker til almindelige LMS-arbejdsgange.

- Moodle: Brug Moodle-uploadfilen [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz) til at indlæse hele kurset.
- Common Cartridge: Brug Common Cartridge-filen [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) for bredere LMS-kompatibilitet.
- Bemærkninger:
  - Moodle Cloud har begrænset Common Cartridge-support. Foretræk Moodle-filen ovenfor, som også kan uploades til Canvas.
  - Efter import, gennemgå moduler, deadlines og quizindstillinger for at matche din terminsplan.

![Moodle](../../translated_images/moodle.94eb93d714a50cb2c97435b408017dee224348b61bc86203ffd43a4f4e57b95f.da.png)
> Pensum i et Moodle-klasselokale

![Canvas](../../translated_images/canvas.fbd605ff8e5b8aff567d398528ce113db304446b90b9cad55c654de3fdfcda34.da.png)
> Pensum i Canvas

### Brug repoet direkte (uden Classroom)

Hvis du foretrækker ikke at bruge GitHub Classroom, kan du køre kurset direkte fra dette repo.

- Synkrone/online formater (Zoom/Teams):
  - Kør korte mentorledede opvarmninger; brug breakout rooms til quizzer.
  - Annoncer et tidsvindue for quizzer; elever indsender svar som GitHub Issues.
  - Til samarbejdsopgaver arbejder elever i offentlige lektionrepos og åbner pull requests.
- Private/asynkrone formater:
  - Elever forker hver lektion til deres egne **private** repos og tilføjer dig som samarbejdspartner.
  - De indsender via Issues (quizzer) og Pull Requests (opgaver) på dit klasselokale-repo eller deres private forks.

### Bedste praksis

- Giv en introduktionslektion om Git/GitHub-grundlæggende, Issues og PRs.
- Brug tjeklister i Issues til opgaver/quizzer med flere trin.
- Tilføj CONTRIBUTING.md og CODE_OF_CONDUCT.md for at sætte klasselokalenormer.
- Tilføj tilgængelighedsnoter (alt-tekst, undertekster) og tilbyd printbare PDF'er.
- Versionér dit indhold pr. termin og frys lektionrepos efter offentliggørelse.

### Feedback og support

Vi ønsker, at dette pensum skal fungere for dig og dine elever. Opret venligst et nyt Issue i dette repository for fejl, forespørgsler eller forbedringer, eller start en diskussion i Teacher Corner.

---

**Ansvarsfraskrivelse**:  
Dette dokument er blevet oversat ved hjælp af AI-oversættelsestjenesten [Co-op Translator](https://github.com/Azure/co-op-translator). Selvom vi bestræber os på nøjagtighed, skal det bemærkes, at automatiserede oversættelser kan indeholde fejl eller unøjagtigheder. Det originale dokument på dets oprindelige sprog bør betragtes som den autoritative kilde. For kritisk information anbefales professionel menneskelig oversættelse. Vi påtager os ikke ansvar for misforståelser eller fejltolkninger, der måtte opstå som følge af brugen af denne oversættelse.