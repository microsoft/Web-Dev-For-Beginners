<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2026-01-08T09:26:17+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "et"
}
-->
# Analüüsi saidi jõudlust

## Ülesande ülevaade

Jõudluse analüüs on kaasaegsete veebiarendajate jaoks oluline oskus. Selles ülesandes viid läbi põhjaliku reaalse veebisaidi jõudluse audit, kasutades nii brauseripõhiseid tööriistu kui ka kolmanda osapoole teenuseid, et tuvastada kitsaskohad ning pakkuda optimeerimisstrateegiaid.

Sinu ülesanne on esitada üksikasjalik jõudlusaruanne, mis demonstreerib sinu arusaamist veebijõudluse põhimõtetest ja võimet kasutada professionaalseid analüüsitööriistu tõhusalt.

## Ülesande juhised

**Vali analüüsitav veebisait** – vali üks järgmistest valikutest:
- Populaarne sait, mida tihti kasutad (uudiste sait, sotsiaalmeedia, e-kaubandus)
- Avatud lähtekoodiga projekti veebisait (GitHubi lehed, dokumentatsioonisaidid)
- Kohaliku ettevõtte veebisait või portfoolio
- Omaenda projekt või varasem kursusetöö

**Tee mitmetööriistaline analüüs** vähemalt kolmel erineval viisil:
- **Brauseri arendustööriistad** – kasuta Chrome/Edge Performance vahekaarti detailsseks profiilimiseks
- **Veebipõhised auditeerimistööriistad** – kasuta Lighthouse’i, GTmetrixi või WebPageTesti
- **Võrguanalüüs** – vaata ressursi laadimist, failisuurusi ja päringumustreid

**Dokumenteeri oma leid** põhjalikus aruandes, mis sisaldab:

### Jõudlusmõõdikute analüüs
- **Laadimisaja mõõtmised** mitmetest tööriistadest ja vaatenurkadest
- **Core Web Vitals'i** skoorid (LCP, FID, CLS) ja nende tähendus
- **Ressursside jaotus** näidates, millised varad mõjutavad kõige rohkem laadimisaega
- **Võrgu „kaskaadanalüüs“** blokeerivate ressursside tuvastamiseks

### Probleemide tuvastamine
- **Spetsiifilised jõudluse kitsaskohad** koos toetavate andmetega
- **Põhjalik juurpõhjuste analüüs**, miks iga probleem tekib
- **Kasutajamõju hindamine**, kuidas probleemid mõjutavad päris kasutajaid
- **Prioriteedijärjestus** probleemide raskuse ja lahendamistiiside põhjal

### Optimeerimissoovitused
- **Konkreetseid, teostatavaid parendusi** koos oodatava mõjuga
- **Rakendamisstrateegiad** iga soovitatud muudatuse jaoks
- **Kaasaegsed parimad praktikad** (nt aeglane laadimine, kompressioon jne)
- **Tööriistad ja meetodid** jõudluse pidevaks jälgimiseks

## Uurimisnõuded

**Ära piirdu ainult brauseri tööriistadega** – laienda analüüsi kasutades:

**Kolmanda osapoole auditeerimisteenuseid:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) – põhjalikud auditeerimised
- [GTmetrix](https://gtmetrix.com/) – jõudluse ja optimeerimise ülevaated
- [WebPageTest](https://www.webpagetest.org/) – pärismaailma testimistingimused
- [Pingdom](https://tools.pingdom.com/) – globaalne jõudluse jälgimine

**Spetsialiseeritud analüüsitööriistad:**
- [Bundle Analyzer](https://bundlephobia.com/) – JavaScripti paketi suuruse analüüs
- [Image optimization tools](https://squoosh.app/) – pildivara optimeerimisvõimalused
- [Security headers analysis](https://securityheaders.com/) – turvapealkirjade mõju jõudlusele

## Tulemustes esitatav vorming

Koosta professionaalne aruanne (2–3 lehekülge), mis sisaldab:

1. **Juhtkokkuvõte** – peamised leiud ja soovituste ülevaade
2. **Metoodika** – kasutatud tööriistad ja testimisviis
3. **Praegune jõudluse hinnang** – alusnäitajad ja mõõtmised
4. **Tuvastatud probleemid** – detailne probleemide analüüs koos toetavate andmetega
5. **Soovitused** – prioriseeritud parendusstrateegiad
6. **Rakendusplaan** – samm-sammuline optimeerimise kava

**Lisa visuaalne tõendusmaterjal:**
- Ekraanipildid jõudlustööriistadest ja mõõdikutest
- Jõudluse andmeid näitavad tabelid või graafikud
- Võimalusel enne/järgne olukorra võrdlused
- Võrgu kaskaadid ja ressursside jaotused

## Hindamiskriteeriumid

| Kriteerium | Näidustav (90-100%) | Piisav (70-89%) | Vajab parandamist (50-69%) |
| -------- | ------------------- | ----------------- | -------------------------- |
| **Analüüsi sügavus** | Põhjalik analüüs 4+ tööriistaga, detailsete mõõdikutega, juurpõhjuste analüüs ja kasutajamõju hindamine | Hea analüüs 3 tööriistaga selgete mõõdikutega ja baastasemel probleemide tuvastamine | Põhiline analüüs 2 tööriistaga, piiratud sügavusega ja minimaalsete probleemide tuvastamisega |
| **Tööriistade mitmekesisus** | Kasutab brauseri tööriistu + 3+ kolmanda osapoole teenust võrdleva analüüsi ja igast saadud teadmistega | Kasutab brauseri tööriistu + 2 kolmanda osapoole teenust mõningase võrdleva analüüsiga | Kasutab brauseri tööriistu + 1 kolmanda osapoole teenust piiratud võrdlusega |
| **Probleemide tuvastamine** | Tuvastab 5+ konkreetset jõudlusprobleemi detailse juurpõhjuste analüüsi ja kvantifitseeritud mõjuga | Tuvastab 3-4 jõudlusprobleemi hea analüüsi ja osalise mõjuhinnanguga | Tuvastab 1-2 jõudlusprobleemi põhianalüüsiga |
| **Soovitused** | Esitab konkreetseid, teostatavaid soovitusi rakendusdetailidega, oodatava mõjuga ja kaasaegsete parimate praktikatega | Esitab häid soovitusi mõningate rakendusjuhiste ja oodatavate tulemustega | Esitab põhilisi soovitusi piiratud rakendusdetailidega |
| **Professionaalne esitus** | Hästi organiseeritud aruanne selge struktuuri, visuaalse tõenduse, juhtkokkuvõtte ja professionaalse vormindusega | Hea organiseeritus, mõningane visuaalne tõendus ja selge struktuur | Põhiline organiseeritus minimaalse visuaalse tõendusega |

## Õpitulemused

Selle ülesande täitmisel demonstreerid oma võimet:
- **Rakendada** professionaalseid jõudluse analüüsitööriistu ja –metoodikaid
- **Tuvastada** jõudluse kitsaskohti andmepõhise analüüsi abil
- **Analüüsida** koodi kvaliteedi ja kasutajakogemuse seost
- **Soovitada** konkreetseid ja teostatavaid optimeerimisstrateegiaid
- **Suhelda** tehnilisi leide professionaalses vormis

See ülesanne kinnistab õpitud jõudluse kontseptsioone, arendades praktilisi oskusi, mida kasutad kogu veebiarenduskarjääri jooksul.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud tehisintellekti tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, tuleb arvestada, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument halduskeeles tuleks lugeda autoriteetseks allikaks. Kriitilise tähtsusega teabe jaoks on soovitatav kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->