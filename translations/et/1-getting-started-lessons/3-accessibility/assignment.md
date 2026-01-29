# Terviklik veebisaidi ligipääsetavuse audit

## Juhised

Selles ülesandes viid läbi professionaalse taseme ligipääsetavuse auditi reaalsel veebisaidil, rakendades õpitud põhimõtteid ja tehnikaid. See praktiline kogemus süvendab sinu arusaamist ligipääsetavuse tõketest ja lahendustest.

Vali veebisait, mis tundub sisaldavat ligipääsetavusega seotud probleeme — see annab sulle rohkem õppimisvõimalusi kui juba täiusliku saidi analüüsimine. Sobivad kandidaadid võivad olla vanemad veebisaidid, keerukad veebirakendused või saidid rikkaliku multimeedia sisuga.

### 1. etapp: Strateegiline manuaalne hindamine

Enne automatiseeritud tööriistade kasutamist vii läbi põhjalik manuaalne hindamine. See kasutajakeskne lähenemine paljastab sageli probleeme, mida tööriistad ei tuvasta, ning aitab mõista tegelikku kasutajakogemust.

**🔍 Olulised hindamiskriteeriumid:**

**Navigatsioon ja struktuur:**
- Kas kogu saidil saab navigeerida ainult klaviatuuri abil (Tab, Shift+Tab, Enter, Space, nooleklahvid)?
- Kas fookuse indikaatorid on selgelt nähtavad kõigil interaktiivsetel elementidel?
- Kas pealkirjastruktuur (H1-H6) loob loogilise sisuvälja?
- Kas on olemas otseühendused (skip links) põhisisu juurde hüppamiseks?

**Visuaalne ligipääsetavus:**
- Kas kogu saidil on piisav värvikontrast (vähemalt 4.5:1 normaalse teksti jaoks)?
- Kas sait tugineb ainult värvile olulise info edastamisel?
- Kas kõigil piltidel on sobiv alternatiivtekst?
- Kas paigutus säilib funktsionaalsena ka 200% suumimisel?

**Sisu ja kommunikatsioon:**
- Kas esineb ebamääraseid linkide tekste nagu "kliki siia"?
- Kas sisu ja funktsionaalsust on võimalik mõista ilma visuaalsete vihjeteta?
- Kas vormiväljadel on korrektsed sildid ja need on õigesti rühmitatud?
- Kas veateated on selged ja abistavad?

**Interaktiivsed elemendid:**
- Kas kõik nupud ja vormikontrollid töötavad ainult klaviatuuri abil?
- Kas dünaamilisi sisumuutuseid teatatakse ekraanilugeritele?
- Kas modaalaknad ja keerukad vidinad järgivad korrektsed ligipääsetavuse mustrid?

📝 **Kinnita oma leiud** konkreetsete näidete, ekraanipiltide ja lehekülgede URL-idega. Märgi nii probleemid kui ka hästi toimivad aspektid.

### 2. etapp: Põhjalik automatiseeritud testimine

Kinnita ja täienda oma manuaalseid leide tööstusharu standarditele vastavate ligipääsetavuse testimisvahenditega. Iga tööriist keskendub erinevatele tugevustele, seega annab mitme tööriista kasutamine täieliku ülevaate.

**🛠️ Vajalikud testimisvahendid:**

1. **Lighthouse Accessibility Audit** (Chrome/Edge DevTools’is sees)
   - Käivita audit mitmel lehel
   - Keskendu spetsiifilistele mõõdikutulemustele ja soovitustele
   - Märgi ligipääsetavuse skoor ja rikkumised

2. **axe DevTools** (brauserilaiendus – tööstusharu standard)
   - Detailsem veatuvastus võrreldes Lighthouse’iga
   - Pakub koodinäiteid paranduste jaoks
   - Testib WCAG 2.1 kriteeriumide vastu

3. **WAVE Web Accessibility Evaluator** (brauserilaiendus)
   - Visuaalne ligipääsetavuse elementide kujutis
   - Tõstab esile vigu ja tugevaid külgi
   - Hea lehekülje struktuuri mõistmiseks

4. **Värvikontrasti analüsaatorid**
   - WebAIM Contrast Checker värvipaaride jaoks
   - Brauserilaiendused kogu lehele analüüsi tegemiseks
   - Kontrollib nii WCAG AA kui AAA standardite vastu

**🎧 Reaalseid abitehnoloogiaid testides:**
- **Ekraanilugeri testimine**: kasuta NVDA (Windows), VoiceOver (Mac) või TalkBack (Android)
- **Ainult klaviatuuri navigeerimine**: eemalda hiir ja navigeeri kogu sait
- **Suumimise testimine**: testi funktsionaalsust 200% ja 400% suumimisel
- **Hääljuhtimise testimine**: kui võimalik, kasuta hääljuhtimise tööriistu

**📊 Korralda tulemused** põhiandmetega tabelis:
- Probleemi kirjeldus ja asukoht
- Tõsiduse tase (Kriitiline/Kõrge/Keskmine/Madala tähtsusega)
- Rikutud WCAG edu kriteeriumid
- Tööriist, mis tuvastas vea
- Ekraanipildid ja tõendid

### 3. etapp: Täielik leidude dokumenteerimine

Koosta professionaalne ligipääsetavuse auditiraport, mis demonstreerib sinu teadmisi tehnilistest probleemidest ja nende inimlikust mõjust.

**📋 Nõutavad aruande osad:**

1. **Juht kokkuvõte** (1 lehekülg)
   - Veebisaidi URL ja lühikirjeldus
   - Üldine ligipääsetavuse küpsusaste
   - 3 kõige kriitilisemat probleemi
   - Hinnang kasutajatele puude või piirangutega

2. **Metoodika** (½ lehekülge)
   - Testimislähenemine ja kasutatud tööriistad
   - Hindatud lehed ja seadme/brauseri kombinatsioonid
   - Rakendatud standardid (WCAG 2.1 AA)

3. **Detailne leidude ülevaade** (2-3 lehekülge)
   - Probleemid WCAG printsiipide järgi kategoriseeritud (Tajutav, Kasutatav, Mõistetav, Vastupidav)
   - Lisa ekraanipildid ja konkreetsed näited
   - Tõsta esile leitud positiivsed ligipääsetavuse omadused
   - Võrdlus automatiseeritud tööriistade leidudega

4. **Kasutajamõju hindamine** (1 lehekülg)
   - Kuidas mõjutasid tuvastatud probleemid erinevate puuetega kasutajaid
   - Stsenaariumid reaalse kasutajakogemuse kirjeldamiseks
   - Äriline mõju (õiguslik risk, SEO, kasutajate arvu laienemine)

**📸 Tõendite kogumine:**
- Ekraanipildid ligipääsetavuse rikkumistest
- Ekraanivideod probleemsetest kasutuslugudest
- Tööriistade aruanded (PDF-formaadis)
- Koodi näited probleemidest

### 4. etapp: Professionaalne paranduskava

Koosta strateegiline ja prioriseeritud plaan ligipääsetavuse probleemide lahendamiseks. See näitab su võimet mõelda professionaalse veebiarendajana, arvestades reaalmaailma äripiiranguid.

**🎯 Koosta detailne parendusettepanekute nimekiri (vähemalt 10 probleemi):**

**Iga tuvastatud probleemi kohta esita:**

- **Probleemi kirjeldus**: Selge selgitus, mis on valesti ja miks see on probleemne
- **WCAG viide**: Täpne rikutud edu kriteerium (nt "2.4.4 Link Purpose (In Context) - tase A")
- **Kasutaja mõju**: Kuidas see mõjutab eri tüüpi puuetega inimesi
- **Lahendus**: Täpsed koodimuudatused, disainitäiustused või protsessi parandused
- **Prioriteedi tase**: Kriitiline (blokeerib põhilise kasutuse)/Kõrge (oluline takistus)/Keskmine (kasutatavusprobleem)/Madal (täiendus)
- **Rakendamise keerukus**: Ajahinnang/keerukuse tase (Kiire võit / Mõõdukas pingutus / Suur ümberkujundus)
- **Testimise kontroll**: Kuidas kontrollida, et parandused toimivad

**Näidise parendusettepanek:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strateegilised juurutusetapid:**

- **1. etapp (0–2 nädalat)**: Kriitilised probleemid, mis blokeerivad põhifunktsionaalsuse
- **2. etapp (1–2 kuud)**: Kõrge prioriteediga parendused parema kasutajakogemuse jaoks
- **3. etapp (3–6 kuud)**: Keskmise prioriteediga täiustused ja protsessi parandused
- **4. etapp (pidev)**: Pidev jälgimine ja täiustamine

## Hindamisrubriik

Sinu ligipääsetavuse auditit hinnatakse nii tehnilise täpsuse kui professionaalse esituse alusel:

| Kriteerium                      | Suurepärane (90–100%)                                                | Hea (80–89%)                                             | Rahuldav (70–79%)                                        | Parandamist vajav (<70%)                               |
|--------------------------------|--------------------------------------------------------------------|----------------------------------------------------------|---------------------------------------------------------|--------------------------------------------------------|
| **Manuaalse testimise sügavus**| Terviklik hindamine kõigi POUR põhimõtete alusel, detailsete tähelepanekute ja kasutajastsenaariumitega | Hea katvus enamikus ligipääsetavuse valdkondades selgete leidude ja mõningase kasutajamõju analüüsiga | Põhihindamine võtmevaldkondades piisavate tähelepanekutega | Piiratud testimine, pealiskaudsed tähelepanekud, minimaalne kasutajamõju analüüs |
| **Tööriistade kasutus ja analüüs** | Kasutab kõiki vajalikke tööriistu tõhusalt, võrdleb leide, sisaldab selget tõendusmaterjali, analüüsib tööriistade piiranguid | Kasutab enamust tööriistu hea dokumentatsiooni ja mõningase võrdlusega ning piisava tõendusmaterjaliga | Kasutab vajalikke tööriistu põhilise dokumentatsiooniga ja mõne tõendiga | Vähe tööriistade kasutamist, halb dokumentatsioon või tõendite puudumine |
| **Probleemide tuvastamine ja kategoriseerimine** | Tuvastab 15+ konkreetset probleemi kõigis WCAG printsiipides, täpne jaotus tõsiduse alusel, näitab sügavat arusaamist | Tuvastab 10–14 probleemi enamikes WCAG printsiipides, hea kategoriseerimine ja arusaamine | Tuvastab 7–9 probleemi piisava WCAG katvusega ja baasjaotusega | Tuvastab <7 probleemi, piiratud ulatus või halb kategooriajaotus |
| **Lahenduste kvaliteet ja teostatavus** | 10+ detailset ja rakendatavat lahendust täpse WCAG-viitega, realistlike rakendusaegade ja kontrollmeetoditega | 8–9 hästi arendatud lahendust enamasti täpse viitega ja hea rakendusdetailiga | 6–7 baaslahendust mõningase detailiga ja üldiselt realistlike lähenemistega | <6 lahendust või ebapiisav detail, ebareaalsed rakendused |
| **Professionaalne suhtlus**       | Raport on suurepäraselt organiseeritud, selgelt kirjutatud, sisaldab juhtkonnale suunatud kokkuvõtet, kasutab sobivat tehnilist keelt ja järgib äridokumentide standardeid | Hästi organiseeritud, hea kirjutamisstiiliga, sisaldab enamust nõutud osadest, sobiv toon | Täiesti organiseeritud, vastuvõetava kirjutusega, sisaldab baasnõudeid | Kehv organiseeritus, ebaselge kirjutis või oluliste osade puudumine |
| **Reaalmaailma rakendamine**       | Demonstreerib arusaamist ärilisest mõjust, õiguslikest tingimustest, kasutajate mitmekesisusest ja praktilistest rakendusväljakutsetest | Näitab head praktilist arusaamist mõningase ärikontekstiga | Baasline arusaam reaalsest rakendusest | Piiratud seos praktiliste rakendustega |

## Täiustatud väljakutse valikud

**🚀 Õpilastele, kes otsivad lisaväljakutset:**

- **Võrdlev analüüs**: Auditeeri 2–3 konkureerivat veebisaiti ja võrdle nende ligipääsetavuse küpsust
- **Mobiilse ligipääsetavuse fookus**: Süvitsi mobiilide spetsiifiliste ligipääsetavusprobleemide tuvastamine Android TalkBacki või iOS VoiceOveriga
- **Rahvusvaheline perspektiiv**: Uuri ja rakenda erinevate riikide ligipääsetavuse standardeid (EN 301 549, Section 508, ADA)
- **Ligipääsetavuse avalduse ülevaade**: Hinda veebisaidi olemasolevat ligipääsetavuse avaldust (kui on) võrreldes enda leidudega

## Tarnitavad materjalid

Esita terviklik ligipääsetavuse auditiraport, mis tõestab professionaalset analüüsi ja praktilist rakendusplaani:

**📄 Lõpparuanne peab sisaldama:**

1. **Juhtkonnale kokkuvõte** (1 lehekülg)
   - Veebisaidi ülevaade ja ligipääsetavuse küpsuse hindamine
   - Põhitulemuste kokkuvõte äri mõjuga
   - Soovitatud prioriteetsed meetmed

2. **Metoodika ja ulatus** (1 lehekülg)
   - Testimislähenemine, kasutatud tööriistad, hindamiskriteeriumid
   - Hindatud lehed/sektsioonid ja piirangud
   - Standardite järgimise raamistik (WCAG 2.1 AA)

3. **Detailne leidude aruanne** (3–4 lehekülge)
   - Manuaalse testimise tähelepanekud kasutajastsenaariumitega
   - Automatiseeritud tööriistade tulemused võrdlusega
   - Probleemid WCAG printsiipide järgi koos tõenditega
   - Leitud positiivsed ligipääsetavuse omadused

4. **Strateegiline paranduskava** (3–4 lehekülge)
   - Prioriseeritud parendusettepanekud (vähemalt 10)
   - Rakenduse ajakava koos pingutuse hinnangutega
   - Edu mõõdikud ja kontrollmeetodid
   - Pikemaajaline ligipääsetavuse hooldusstrateegia

5. **Tõendid** (Lisaosad)
   - Ligipääsetavuse rikkumiste ja testimise tööriistade ekraanipildid
   - Koodi näited probleemidest ja lahendustest
   - Tööriistade aruanded ja auditite kokkuvõtted
   - Ekraanilugerite testimise märkmed või salvestised

**📊 Vormistusnõuded:**
- **Dokumendi formaat**: PDF (professionaalne esitlus)
- **Sõnade arv**: 2500–3500 sõna (välja arvatud lisaosad ja ekraanipildid)
- **Visuaalsed elemendid**: Lisa ekraanipildid, skeemid ja näited kogu raportis
- **Tsitaadid**: Viita WCAG juhistele ja ligipääsetavuse ressurssidele korrektselt

**💡 Tipid tipptasemeks:**
- Kasuta professionaalset aruandefromatte koos ühtsete pealkirjade ja stiiliga
- Lisa sisukord lihtsaks navigeerimiseks
- Tasakaalusta tehnilist täpsust selge, ärilisele kommunikatsioonile sobiva keelekasutusega
- Näita nii tehnilist teostamist kui kasutajamõju mõistmist

## Õpitulemused

Pärast selle tervikliku ligipääsetavuse auditi läbiviimist oled arendanud olulisi professionaalseid oskusi:

**🎯 Tehnilised pädevused:**
- **Ligipääsetavuse testimise meistriklass**: Tööstusharu standarditele vastavate manuaalsete ja automatiseeritud testimismeetodite valdamine
- **WCAG rakendamine**: Praktiline kogemus veebisisu ligipääsetavuse juhiste rakendamisel reaalsetes olukordades
- **Abitehnoloogiate mõistmine**: Praktika ekraanilugerite ja klaviatuuriga navigeerimisega
- **Probleem–lahendus kaardistamine**: Võime tuvastada ligipääsetavuse takistusi ja kavandada konkreetseid ning teostatavaid parandusi

**💼 Professionaalsed oskused:**
- **Tehniline kommunikatsioon**: Kogemus professionaalsete ligipääsetavuse aruannete kirjutamisel mitmekesisele sihtgrupile
- **Strateegiline planeerimine**: Võime seada prioriteete ligipääsetavuse parendamisel kasutajamõju ja rakendamise teostatavuse alusel
- **Kvaliteedi tagamine**: Ligipääsetavuse testimise mõistmine arendusprotsessi osana
- **Riskihindamine**: Õiguslike, äriliste ja eetiliste aspektide hindamine ligipääsetavuse nõuetele vastavuses

**🌍 Kaasaegse disaini mõtteviis:**
- **Kasutaja empaatia**: Sügav arusaam mitmekesistest kasutajate vajadustest ja abitehnoloogia interaktsioonidest
- **Universaalse disaini põhimõtted**: Tunnistus, et ligipääsetav disain kasu toob kõigile kasutajatele, mitte ainult puuetega inimestele
- **Jätkuv täiustamine**: Raamistik ligipääsetavuse pidevaks hindamiseks ja arendamiseks
- **Eestkoste oskused**: Enesekindlus ligipääsetavuse parimate tavade propageerimisel tulevikuprojektides ja meeskondades

**🚀 Karjääriplaan:**  
See ülesanne peegeldab reaalmaailma ligipääsetavuse konsultatsiooniprojekte, andes sulle portfooliot vääriva kogemuse, mis tõestab:  
- Süsteemset probleemide lahendamise lähenemist  
- Tähelepanu nii tehnilistele detailidele kui ärilisele mõjule  
- Selget keeruliste tehniliste kontseptsioonide edastamist  
- Õiguslike ja eetiliste kohustuste mõistmist veebiarenduses  

Täitmisel oled valmis olulisel määral kaasa aitama ligipääsetavuse algatustes igas veebiarenduse rollis ja propageerima kaasava disaini põhimõtteid kogu oma karjääri vältel.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellekti tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüdleme täpsuse poole, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Olulise info puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tekkida võivate arusaamatuste ega valesti tõlgendamise eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->