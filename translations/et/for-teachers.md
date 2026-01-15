<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-11T11:36:13+00:00",
  "source_file": "for-teachers.md",
  "language_code": "et"
}
-->
### Õpetajatele

Olete oodatud kasutama seda õppekava oma klassiruumis. See töötab sujuvalt koos GitHub Classroomi ja juhtivate LMS platvormidega ning seda saab kasutada ka iseseisva repona koos oma õpilastega.

### Kasutamine GitHub Classroomiga

Et hallata õppetunde ja ülesandeid iga grupi jaoks eraldi, looge iga õppetunni jaoks eraldi repositoorium, et GitHub Classroom saaks iga ülesande iseseisvalt siduda.

- Forkige see repo oma organisatsiooni.
- Looge iga õppetunni jaoks eraldi repo, eraldades iga õppetunni kausta omaette repositooriumiks.
  - Variant A: Looge tühjad repositooriumid (üks iga õppetunni jaoks) ja kopeerige õppetunni kausta sisu igasse.
  - Variant B: Kasutage Git ajaloo säilitamise meetodit (nt jagage kaust uueks repoks), kui vajate päritolu jälgimist.
- GitHub Classroomis looge iga õppetunni jaoks eraldi ülesanne ja suunake see vastava õppetunni repole.
- Soovitatavad seaded:
  - Repositooriumi nähtavus: privaatne õpilaste töö jaoks.
  - Kasutage õppetunni repo vaikimisi haru lähtekoodi.
  - Lisage probleemide ja pull requestide mallid viktoriinide ja esituste jaoks.
  - Soovi korral seadistage automaatne hindamine ja testid, kui teie õppetunnid neid sisaldavad.
- Kasulikud konventsioonid:
  - Repositooriumi nimed nagu lesson-01-intro, lesson-02-html jne.
  - Sildid: quiz, assignment, needs-review, late, resubmission.
  - Sildid/väljalasked iga grupi kohta (nt v2025-term1).

Näpunäide: Vältige repositooriumide salvestamist sünkroonitud kaustadesse (nt OneDrive/Google Drive), et vältida Git konflikte Windowsis.

### Kasutamine Moodle'i, Canvas'i või Blackboardiga

See õppekava sisaldab importitavaid pakette, mis sobivad tavaliste LMS töövoogudega.

- Moodle: Kasutage Moodle'i üleslaadimisfaili [Moodle'i üleslaadimisfail](../../../../../../../teaching-files/webdev-moodle.mbz), et laadida kogu kursus.
- Common Cartridge: Kasutage Common Cartridge'i faili [Common Cartridge'i fail](../../../../../../../teaching-files/webdev-common-cartridge.imscc), et tagada laiem LMS ühilduvus.
- Märkused:
  - Moodle Cloudil on piiratud Common Cartridge'i tugi. Eelistage ülaltoodud Moodle'i faili, mida saab samuti Canvas'isse üles laadida.
  - Pärast importimist vaadake üle moodulid, tähtaegade ja viktoriinide seaded, et need vastaksid teie semestri ajakavale.

![Moodle](../../translated_images/et/moodle.94eb93d714a50cb2.png)
> Õppekava Moodle'i klassiruumis

![Canvas](../../translated_images/et/canvas.fbd605ff8e5b8aff.png)
> Õppekava Canvas'is

### Repositooriumi otsene kasutamine (ilma Classroomita)

Kui te ei soovi kasutada GitHub Classroomi, saate kursust otse sellest repost käivitada.

- Sünkroonsed/veebipõhised formaadid (Zoom/Teams):
  - Korraldage lühikesi mentorite juhitud soojendusi; kasutage viktoriinide jaoks eraldi ruume.
  - Teatage viktoriinide ajavahemik; õpilased esitavad vastused GitHubi probleemidena.
  - Koostööülesannete jaoks töötavad õpilased avalikes õppetundide repos ja avavad pull requeste.
- Privaatne/asünkroonne formaat:
  - Õpilased forkivad iga õppetunni oma **privaatsetesse** repodesse ja lisavad teid kaastöötajaks.
  - Nad esitavad vastused probleemide (viktoriinid) ja pull requestide (ülesanded) kaudu teie klassiruumi repole või oma privaatsetele forkidele.

### Parimad praktikad

- Korraldage sissejuhatav õppetund Git/GitHubi põhitõdede, probleemide ja PR-de kohta.
- Kasutage probleemides kontroll-loendeid mitmeastmeliste viktoriinide/ülesannete jaoks.
- Lisage CONTRIBUTING.md ja CODE_OF_CONDUCT.md, et kehtestada klassiruumi normid.
- Lisage ligipääsetavuse märkused (alt tekst, subtiitrid) ja pakkuda prinditavaid PDF-e.
- Versioonige oma sisu iga semestri jaoks ja külmutage õppetundide reposid pärast avaldamist.

### Tagasiside ja tugi

Me soovime, et see õppekava töötaks teie ja teie õpilaste jaoks. Palun avage selles repoes uus probleem, et teatada vigadest, esitada taotlusi või parandusettepanekuid, või alustage arutelu õpetajate nurgas.

---

**Lahtiütlus**:  
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palume arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Algne dokument selle algses keeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitame kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti tõlgenduste eest.