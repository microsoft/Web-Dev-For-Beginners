<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2026-01-07T12:18:52+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "lt"
}
-->
# Išsami interneto svetainės prieinamumo audito ataskaita

## Instrukcijos

Šiame užduotyje atliksite profesionalaus lygio prieinamumo auditą tikroje interneto svetainėje, taikydami įgytas principų ir metodų žinias. Praktinė patirtis pagilins jūsų supratimą apie prieinamumo kliūtis ir sprendimus.

Pasirinkite svetainę, kurioje, jūsų manymu, yra prieinamumo problemų – tai suteiks daugiau mokymosi galimybių nei nagrinėjant jau tobulą svetainę. Geros kandidatės yra senesnės svetainės, sudėtingos žiniatinklio programos arba turtingo multimedia turinio svetainės.

### 1-asis etapas: Strateginė rankinė vertinimo analizė

Prieš pasinaudodami automatizuotais įrankiais, atlikite išsamų rankinį vertinimą. Šis žmogaus centrinis požiūris dažnai atskleidžia problemas, kurių įrankiai nepastebi, ir padeda geriau suprasti tikrąją naudotojo patirtį.

**🔍 Būtini vertinimo kriterijai:**

**Naršymas ir struktūra:**
- Ar galite pereiti visą svetainę naudodamiesi tik klaviatūra (Tab, Shift+Tab, Enter, Space, rodyklių klavišais)?
- Ar visų interaktyvių elementų fokusavimo indikatoriai aiškiai matomi?
- Ar antraščių struktūra (H1-H6) sudaro logišką turinio santrauką?
- Ar yra praleidimo nuorodų, leidžiančių pereiti tiesiai prie pagrindinio turinio?

**Vaizdinė prieinamumas:**
- Ar svetainėje pakankamas spalvų kontrastas visur (minimaliai 4.5:1 įprastam tekstui)?
- Ar svetainė informacijos perdavimui pasikliauja tik spalva?
- Ar visos nuotraukos turi tinkamus alternatyvius aprašymus?
- Ar išdėstymas išlieka funkcionalus didinant vaizdą iki 200%?

**Turinys ir komunikacija:**
- Ar yra nuorodų su tekstais „paspausk čia“ ar neaiškiais užrašais?
- Ar galite suprasti turinį ir funkcijas be vaizdinių užuominų?
- Ar formų laukai tinkamai pažymėti ir suskirstyti grupėmis?
- Ar klaidų pranešimai aiškūs ir naudingi?

**Interaktyvūs elementai:**
- Ar visi mygtukai ir formų valdikliai veikia tik su klaviatūra?
- Ar dinamiški turinio pokyčiai pranešami ekrano skaitytuvams?
- Ar modaliniai dialogai ir sudėtingi valdikliai atitinka tinkamus prieinamumo modelius?

📝 **Fiksuokite savo pastebėjimus** su konkrečiais pavyzdžiais, ekrano kopijomis ir puslapio URL. Užfiksuokite tiek problemas, tiek geras praktikas.

### 2-asis etapas: Išsamus automatizuotas testavimas

Dabar patvirtinkite ir išplėskite savo rankinio vertinimo rezultatus naudodami pramonės standartų prieinamumo testavimo įrankius. Kiekvienas įrankis turi skirtingus privalumus, todėl kelių įrankių naudojimas užtikrina pilną aprėptį.

**🛠️ Privalomi testavimo įrankiai:**

1. **Lighthouse Prieinamumo Auditas** (integruotas į Chrome/Edge DevTools)
   - Atlikite auditą keliuose puslapiuose
   - Dėmesys specifiniams metrikoms ir rekomendacijoms
   - Užfiksuokite savo prieinamumo balą ir specifines pažeidimų vietas

2. **axe DevTools** (naršyklės plėtinys – pramonės standartas)
   - Detalesnė problemų aptikimas nei Lighthouse
   - Pateikia konkrečius kodo pavyzdžius sprendimams
   - Tikrina pagal WCAG 2.1 kriterijus

3. **WAVE Svetainės Prieinamumo Vertintojas** (naršyklės plėtinys)
   - Vizualinė prieinamumo savybių reprezentacija
   - Išryškina klaidas ir teigiamas savybes
   - Puikus puslapio struktūros supratimui

4. **Spalvų Kontrasto Analizatoriai**
   - WebAIM Kontrasto Tikrintuvas konkretiems spalvų deriniams
   - Naršyklės plėtiniai viso puslapio analizei
   - Testavimas pagal WCAG AA ir AAA standartus

**🎧 Tikri pagalbinės technologijos testavimai:**
- **Ekrano skaitytuvo testavimas**: naudokite NVDA (Windows), VoiceOver (Mac) arba TalkBack (Android)
- **Naršymas tik klaviatūra**: atjunkite pelę ir peržiūrėkite visą svetainę tik klaviatūra
- **Mastelio didinimo testavimas**: testuokite funkcionalumą 200% ir 400% padidinimo režimais
- **Balso valdymo testavimas**: jei įmanoma, išbandykite balso navigacijos įrankius

**📊 Organizuokite savo rezultatus** sudarydami pagrindinę lentelę su:
- Problemų aprašymu ir vieta
- Sunkumo lygiu (kritinė/didelė/vidutinė/maža)
- Pažeisto WCAG sėkmės kriterijaus
- Problemos aptikimo įrankiu
- Ekrano kopijomis ir įrodymais

### 3-iasis etapas: Išsamus rezultatų dokumentavimas

Paruoškite profesionalią prieinamumo audito ataskaitą, kuri demonstruoja jūsų supratimą tiek apie technines problemas, tiek apie jų poveikį žmonėms.

**📋 Būtinos ataskaitos dalys:**

1. **Vykdomoji santrauka** (1 puslapis)
   - Svetainės URL ir trumpas aprašymas
   - Bendras prieinamumo brandos lygis
   - 3 pagrindinės kritinės problemos
   - Numatomos įtakos neįgaliesiems naudotojams

2. **Metodologija** (½ puslapio)
   - Testavimo metodas ir naudoti įrankiai
   - Įvertinti puslapiai ir naudota įrenginių / naršyklių kombinacija
   - Naudoti standartai (WCAG 2.1 AA)

3. **Išsamūs radiniai** (2-3 puslapiai)
   - Problemų kategorizavimas pagal WCAG principus (Matomas, Veikiantis, Suprantamas, Patikimas)
   - Paveikslėliai ir konkretūs pavyzdžiai
   - Pastebėtos teigiamos prieinamumo savybės
   - Kryžminis patikrinimas su automatiniais įrankiais

4. **Vartotojo poveikio vertinimas** (1 puslapis)
   - Kaip identifikuotos problemos veikia skirtingų negalių turinčius vartotojus
   - Scenarijai, aprašantys realias naudotojų patirtis
   - Verslo poveikis (teisės rizika, SEO, vartotojų bazės plėtra)

**📸 Įrodymų rinkimas:**
- Ekrano kopijos su prieinamumo pažeidimais
- Ekrano įrašai su problematiška vartotojo eiga
- Įrankių ataskaitos (išsaugotos PDF formatu)
- Kodo pavyzdžiai, rodantys problemas

### 4-asis etapas: Profesionalus pataisymo planas

Parengite strateginį, prioritetinį prieinamumo problemų sprendimo planą. Tai parodys jūsų gebėjimą mąstyti kaip profesionalus interneto kūrėjas, sprendžiantis realius verslo iššūkius.

**🎯 Paruoškite detalias gerinimo rekomendacijas (mažiausiai 10 problemų):**

**Kiekvienai problemai pateikite:**

- **Problemos aprašymas**: Aiškus paaiškinimas, kas negerai ir kodėl tai problema
- **WCAG nuoroda**: Konkretus pažeistas sėkmės kriterijus (pvz., „2.4.4 Nuorodos paskirtis (kontekste) – A lygis“)
- **Vartotojo poveikis**: Kaip tai veikia skirtingas negalias turinčius žmones
- **Sprendimas**: Konkretūs kodo pakeitimai, dizaino modifikacijos ar procesų tobulinimai
- **Prioritetas**: Kritinis (blokuoja pagrindines funkcijas) / Didelis (ženklus barjeras) / Vidutinis (naudojimo problema) / Mažas (patobulinimas)
- **Įgyvendinimo pastangos**: Laiko / sudėtingumo įvertinimas (Greita pergalė / Vidutinės pastangos / Didelis pertvarkymas)
- **Testavimo patvirtinimas**: Kaip patikrinti, kad pataisa veikia

**Gero pavyzdžio įrašas:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strateginės įgyvendinimo fazės:**

- **1 fazė (0–2 savaitės)**: Kritinės problemos, blokuojančios pagrindinę funkcionalumą
- **2 fazė (1–2 mėnesiai)**: Aukšto prioriteto patobulinimai geresnei naudotojo patirčiai
- **3 fazė (3–6 mėnesiai)**: Vidutinio prioriteto papildymai ir procesų tobulinimas
- **4 fazė (nuolatinė)**: Nuolatinis stebėjimas ir tobulinimas

## Vertinimo rubrika

Jūsų prieinamumo auditui bus taikomas tiek techninio tikslumo, tiek profesionalaus pateikimo vertinimas:

| Kriterijus | Puikiai (90-100%) | Gerai (80-89%) | Patenkinamai (70-79%) | Reikia patobulinti (<70%) |
|------------|-------------------|----------------|----------------------|--------------------------|
| **Rankinis testavimas** | Išsamus vertinimas visų POUR principų su detalėmis ir naudotojų scenarijais | Geras pagrindinių prieinamumo sričių aprėptis, aiškūs radiniai ir kai kurie poveikio analizės elementai | Pagrindinis vertinimas su pakankamais pastebėjimais | Ribotas testavimas, paviršutiniški pastebėjimai ir minimalus poveikio vertinimas |
| **Įrankių naudojimas ir analizė** | Naudoja visus reikalingus įrankius efektyviai, kryžminis patikrinimas, aiškūs įrodymai, įrankių ribotumų analizė | Naudoja daugumą įrankių, geras dokumentavimas, tam tikras kryžminis patikrinimas, pakankami įrodymai | Naudoja įrankius su baziniu dokumentavimu ir tam tikrais įrodymais | Minimalus įrankių naudojimas, blogas dokumentavimas arba trūksta įrodymų |
| **Problemos identifikavimas ir kategorizavimas** | Nustato >15 specifinių problemų visiems WCAG principams, tiksliai kategorizuoja pagal sunkumą, demonstruoja gilų supratimą | Nustato 10-14 problemų daugumai WCAG principų, geras kategorizavimas, parodytas solidus supratimas | Nustato 7-9 problemas su pakankamu WCAG aprėpimu ir pagrindiniu kategorizavimu | Nustato <7 problemas su ribotu mastu ar blogu kategorizavimu |
| **Sprendimų kokybė ir įgyvendinamumas** | >10 detalių, praktiškų sprendimų su tiksliomis WCAG nuorodomis, realistiškomis įgyvendinimo gairėmis ir patvirtinimo būdais | 8-9 gerai parengti sprendimai su dauguma tikslių nuorodų ir geromis įgyvendinimo detalėmis | 6-7 baziniai sprendimai su šiek tiek detalių ir vidutiniškai realistiškais požiūriais | <6 sprendimai arba nepakankamos detalės, nerealiai įgyvendinami |
| **Profesionalus bendravimas** | Ataskaita puikiai organizuota, aiškiai parašyta, su vykdomąja santrauka, tinkama technine kalba ir verslo dokumentų standartais | Gerai organizuota su gera rašymo kokybe, turi daugumą būtinų skyrių, tinkamas tonas | Pakankamai organizuota, priimtinas rašymas, įtraukia pagrindinius skyrius | Prasta organizacija, neaiškus rašymas ar trūksta svarbių skyrių |
| **Tikro gyvenimo taikymas** | Parodo verslo poveikio, teisinių aspektų, naudotojų įvairovės ir praktinių įgyvendinimo iššūkių supratimą | Parodo gerą praktinį supratimą su tam tikru verslo kontekstu | Pagrindinis tikro gyvenimo taikymas | Ribotas ryšys su praktika |

## Pažangesni iššūkio variantai

**🚀 Studentams, siekiantiems didesnio iššūkio:**

- **Lyginamoji analizė**: Audituokite 2-3 konkuruojančias svetaines ir palyginkite jų prieinamumo brandą
- **Mobilios prieinamumo dėmesys**: Gilus mobiliajam pritaikyto prieinamumo problemų tyrimas naudojant Android TalkBack ar iOS VoiceOver
- **Tarptautinė perspektyva**: Tyrinėkite ir taikykite kitų šalių prieinamumo standartus (EN 301 549, Section 508, ADA)
- **Prieinamumo pareiškimo peržiūra**: Įvertinkite svetainės esamą prieinamumo pareiškimą (jei yra) remdamiesi savo rastais duomenimis

## Pristatomi darbai

Pateikite išsamią prieinamumo audito ataskaitą, kuri demonstruoja profesionalų analizės lygį ir praktinį įgyvendinimo planavimą:

**📄 Galutinės ataskaitos reikalavimai:**

1. **Vykdomoji santrauka** (1 puslapis)
   - Svetainės apžvalga ir prieinamumo brandos įvertinimas
   - Pagrindinių radinių santrauka su verslo poveikiu
   - Rekomenduojami prioritetiniai veiksmai

2. **Metodologija ir apimtis** (1 puslapis)
   - Testavimo požiūris, naudoti įrankiai, vertinimo kriterijai
   - Vertinti puslapiai/skyriai ir apribojimai
   - Standartų atitikties sistema (WCAG 2.1 AA)

3. **Išsamų radinių pranešimą** (3-4 puslapiai)
   - Rankinio testavimo pastebėjimai su naudotojų scenarijais
   - Automatinių įrankių rezultatai ir kryžminė analizė
   - Problemų išdėstymas pagal WCAG principus su įrodymais
   - Nustatytos teigiamos prieinamumo savybės

4. **Strateginis pataisymo planas** (3-4 puslapiai)
   - Prioritetinės gerinimo rekomendacijos (mažiausiai 10)
   - Įgyvendinimo laiko grafikas su pastangų įverčiais
   - Sėkmės rodikliai ir patvirtinimo metodai
   - Ilgalaikė prieinamumo priežiūros strategija

5. **Papildomi įrodymai** (Priedai)
   - Ekrano kopijos su prieinamumo pažeidimais ir testavimo įrankiais
   - Kodo pavyzdžiai, demonstruojantys problemas ir sprendimus
   - Įrankių ataskaitos ir audito santraukos
   - Ekrano skaitytuvo testavimo pastabos ar įrašai

**📊 Formato reikalavimai:**
- **Dokumento formatas**: PDF (profesionalus pateikimas)
- **Žodžių skaičius**: 2500-3500 žodžių (neįskaitant priedų ir ekrano kopijų)
- **Vizualiniai elementai**: Įtraukite ekrano kopijas, diagramas ir pavyzdžius per visą ataskaitą
- **Citavimas**: Tinkamai nurodykite WCAG gaires ir prieinamumo išteklius

**💡 Profesionali patarimai siekiant aukštų rezultatų:**
- Naudokite profesionalų ataskaitos formatavimą su nuosekliais antraščių stiliais
- Įtraukite turinio rodyklę patogiai navigacijai
- Derinkite techninį tikslumą su aiškia, verslui tinkama kalba
- Parodykite supratimą tiek apie techninį įgyvendinimą, tiek apie naudotojų poveikį

## Mokymosi rezultatai

Vykdami šią išsamią prieinamumo auditą, išsiugdysite būtinus profesionalius įgūdžius:

**🎯 Techniniai gebėjimai:**
- **Prieinamumo testavimo meistriškumas**: Praktinė patirtis su pramonės standartų rankinio ir automatizuoto testavimo metodais
- **WCAG taikymas**: Praktinis žiniatinklio turinio prieinamumo gairių taikymas realioms situacijoms
- **Pagalbinės technologijos supratimas**: Praktinė patirtis su ekrano skaitytuvais ir klaviatūros navigacija
- **Problemos ir sprendimo žemėlapiai**: Gebėjimas nustatyti prieinamumo kliūtis ir sukurti konkrečius, veiksmingus pataisymų planus

**💼 Profesiniai įgūdžiai:**
- **Techninis bendravimas**: Patirtis rašant profesionalias prieinamumo ataskaitas įvairiems suinteresuotiesiems asmenims
- **Strateginis planavimas**: Gebėjimas prioritetizuoti prieinamumo patobulinimus pagal naudotojo poveikį ir įgyvendinimo įmanomumą
- **Kokybės užtikrinimas**: Prieinamumo testavimo suvokimas kaip kūrimo proceso dalis
- **Rizikos vertinimas**: Teisinio, verslo ir etinio prieinamumo laikymosi svarbos suvokimas

**🌍 Įtraukus dizaino požiūris:**
- **Vartotojo empatija**: Gilus įvairių naudotojų poreikių ir pagalbinių technologijų sąveikos supratimas
- **Universalaus dizaino principai**: Supratimas, kad prieinamas dizainas naudingas visiems, ne tik neįgaliesiems
- **Nuolatinis tobulinimas**: Sistematinis prieinamumo vertinimas ir gerinimas
- **Advokacijos įgūdžiai**: Pasitikėjimas populiarinant prieinamumo gerąją praktiką būsimuose projektuose ir komandose

**🚀 Karjeros paruošimas:**
Ši užduotis atitinka realius prieinamumo konsultacijų projektus, suteikdama jums portfelyje vertingos patirties, kuri demonstruoja:
- Sisteminį problemų sprendimo požiūrį
- Dėmesį tiek techninėms detalėms, tiek verslo poveikiui
- Aiškų sudėtingų techninių koncepcijų pateikimą
- Supratimą apie teisinius ir etinius įsipareigojimus žiniatinklio kūrime

Baigę būsite pasiruošę reikšmingai prisidėti prie prieinamumo iniciatyvų bet kurioje žiniatinklio kūrimo srityje ir skatinti įtraukų dizainą visos karjeros metu.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Pradinė dokumento versija gimtąja kalba turi būti laikoma oficialiu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už bet kokius nesusipratimus ar klaidingas interpretacijas, atsiradusias dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->