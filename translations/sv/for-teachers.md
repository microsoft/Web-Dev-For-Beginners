<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-03T09:53:51+00:00",
  "source_file": "for-teachers.md",
  "language_code": "sv"
}
-->
### För lärare

Du är välkommen att använda detta kursmaterial i ditt klassrum. Det fungerar smidigt med GitHub Classroom och ledande LMS-plattformar, och det kan även användas som en fristående repo med dina elever.

### Använd med GitHub Classroom

För att hantera lektioner och uppgifter per grupp, skapa en repository per lektion så att GitHub Classroom kan koppla varje uppgift separat.

- Forka denna repo till din organisation.
- Skapa en separat repo för varje lektion genom att extrahera varje lektionsmapp till sin egen repository.
  - Alternativ A: Skapa tomma repos (en per lektion) och kopiera innehållet från lektionsmappen till varje.
  - Alternativ B: Använd en metod som bevarar Git-historiken (t.ex. dela upp en mapp till en ny repo) om du behöver spårbarhet.
- I GitHub Classroom, skapa en uppgift per lektion och länka den till motsvarande lektionsrepo.
- Rekommenderade inställningar:
  - Repository-synlighet: privat för elevarbete.
  - Använd startkod från lektionsrepoets standardgren.
  - Lägg till mallar för issues och pull requests för quiz och inlämningar.
  - Konfigurera eventuellt autogradering och tester om dina lektioner innehåller detta.
- Konventioner som hjälper:
  - Repository-namn som lesson-01-intro, lesson-02-html, etc.
  - Etiketter: quiz, assignment, needs-review, late, resubmission.
  - Taggar/releaser per grupp (t.ex. v2025-term1).

Tips: Undvik att lagra repositories i synkroniserade mappar (t.ex. OneDrive/Google Drive) för att förhindra Git-konflikter på Windows.

### Använd med Moodle, Canvas eller Blackboard

Detta kursmaterial innehåller importbara paket för vanliga LMS-arbetsflöden.

- Moodle: Använd Moodle-uppladdningsfilen [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz) för att ladda hela kursen.
- Common Cartridge: Använd Common Cartridge-filen [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) för bredare LMS-kompatibilitet.
- Noteringar:
  - Moodle Cloud har begränsat stöd för Common Cartridge. Föredra Moodle-filen ovan, som också kan laddas upp i Canvas.
  - Efter import, granska moduler, förfallodatum och quizinställningar för att matcha ditt terminschema.

![Moodle](../../translated_images/sv/moodle.94eb93d714a50cb2.png)
> Kursmaterialet i ett Moodle-klassrum

![Canvas](../../translated_images/sv/canvas.fbd605ff8e5b8aff.png)
> Kursmaterialet i Canvas

### Använd repot direkt (utan Classroom)

Om du föredrar att inte använda GitHub Classroom kan du köra kursen direkt från detta repo.

- Synkrona/online-format (Zoom/Teams):
  - Kör korta mentorledda uppvärmningar; använd grupprum för quiz.
  - Annonsera ett tidsfönster för quiz; elever lämnar in svar som GitHub Issues.
  - För samarbetsuppgifter arbetar elever i offentliga lektionsrepos och öppnar pull requests.
- Privata/asynkrona format:
  - Elever forkar varje lektion till sina egna **privata** repos och lägger till dig som samarbetspartner.
  - De lämnar in via Issues (quiz) och Pull Requests (uppgifter) på ditt klassrumsrepo eller sina privata forks.

### Bästa praxis

- Ge en introduktionslektion om Git/GitHub-grunder, Issues och PRs.
- Använd checklistor i Issues för flerstegsquiz/uppgifter.
- Lägg till CONTRIBUTING.md och CODE_OF_CONDUCT.md för att sätta klassrumsnormer.
- Lägg till tillgänglighetsnoteringar (alt-text, bildtexter) och erbjud utskrivbara PDF:er.
- Versionshantera ditt innehåll per termin och frys lektionsrepos efter publicering.

### Feedback och support

Vi vill att detta kursmaterial ska fungera för dig och dina elever. Öppna gärna ett nytt Issue i detta repository för buggar, önskemål eller förbättringar, eller starta en diskussion i Teacher Corner.

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiska översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.