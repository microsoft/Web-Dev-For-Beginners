<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05666cecb8983a72cf0ce1d18932b5b7",
  "translation_date": "2025-08-28T12:04:42+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "lt"
}
-->
# Įvadas į GitHub

Šioje pamokoje aptarsime pagrindinius GitHub, platformos, skirtos talpinti ir valdyti kodo pakeitimus, aspektus.

![Įvadas į GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.lt.png)
> Iliustracija: [Tomomi Imura](https://twitter.com/girlie_mac)

## Klausimynas prieš paskaitą
[Klausimynas prieš paskaitą](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## Įvadas

Šioje pamokoje aptarsime:

- kaip sekti savo darbą kompiuteryje
- kaip dirbti su kitais projektuose
- kaip prisidėti prie atvirojo kodo programinės įrangos

### Reikalavimai

Prieš pradėdami, patikrinkite, ar jūsų kompiuteryje įdiegtas Git. Terminale įveskite:  
`git --version`

Jei Git nėra įdiegtas, [atsisiųskite Git](https://git-scm.com/downloads). Tada terminale sukonfigūruokite savo vietinį Git profilį:
* `git config --global user.name "jūsų-vardas"`
* `git config --global user.email "jūsų-el.paštas"`

Norėdami patikrinti, ar Git jau sukonfigūruotas, galite įvesti:  
`git config --list`

Taip pat jums reikės GitHub paskyros, kodo redaktoriaus (pvz., Visual Studio Code) ir atidaryto terminalo (arba komandų eilutės).

Eikite į [github.com](https://github.com/), susikurkite paskyrą, jei dar neturite, arba prisijunkite ir užpildykite savo profilį.

✅ GitHub nėra vienintelė kodo saugykla pasaulyje; yra ir kitų, tačiau GitHub yra geriausiai žinoma.

### Pasiruošimas

Jums reikės aplanko su kodo projektu jūsų vietiniame kompiuteryje (nešiojamame ar stacionariame) ir viešos saugyklos GitHub, kuri bus naudojama kaip pavyzdys, kaip prisidėti prie kitų projektų.

---

## Kodo valdymas

Tarkime, turite aplanką su kodo projektu savo kompiuteryje ir norite pradėti sekti savo progresą naudodami git – versijų valdymo sistemą. Kai kurie žmonės lygina git naudojimą su meilės laiško rašymu sau ateityje. Skaitydami savo commit žinutes po dienų, savaičių ar mėnesių, galėsite prisiminti, kodėl priėmėte tam tikrą sprendimą, arba „atsukti“ pakeitimą atgal – jei rašysite geras commit žinutes.

### Užduotis: Sukurkite saugyklą ir commit'inkite kodą  

> Peržiūrėkite vaizdo įrašą  
> 
> [![Git ir GitHub pagrindai](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Sukurkite saugyklą GitHub**. GitHub.com, skirtuke „Repositories“ arba viršutiniame dešiniajame navigacijos juostos kampe, raskite mygtuką **new repo**.

   1. Suteikite savo saugyklai (aplankui) pavadinimą.
   1. Pasirinkite **create repository**.

1. **Eikite į savo darbo aplanką**. Terminale pereikite į aplanką (dar vadinamą direktorija), kurį norite pradėti sekti. Įveskite:

   ```bash
   cd [name of your folder]
   ```

1. **Inicializuokite git saugyklą**. Savo projekte įveskite:

   ```bash
   git init
   ```

1. **Patikrinkite būseną**. Norėdami patikrinti savo saugyklos būseną, įveskite:

   ```bash
   git status
   ```

   Rezultatas gali atrodyti maždaug taip:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Paprastai `git status` komanda nurodo, kurie failai yra paruošti _išsaugojimui_ saugykloje arba kuriuose yra pakeitimų, kuriuos galbūt norėsite išsaugoti.

1. **Pridėkite visus failus sekimui**  
   Tai dar vadinama failų paruošimu (staging) arba pridėjimu į paruošimo zoną.

   ```bash
   git add .
   ```

   Komanda `git add` su `.` argumentu nurodo, kad visi jūsų failai ir pakeitimai bus sekami.

1. **Pridėkite pasirinktus failus sekimui**

   ```bash
   git add [file or folder name]
   ```

   Tai leidžia pridėti tik pasirinktus failus į paruošimo zoną, kai nenorite commit'inti visų failų iš karto.

1. **Atšaukite visų failų paruošimą**

   ```bash
   git reset
   ```

   Ši komanda leidžia atšaukti visų failų paruošimą iš karto.

1. **Atšaukite konkretaus failo paruošimą**

   ```bash
   git reset [file or folder name]
   ```

   Ši komanda leidžia atšaukti tik konkretaus failo paruošimą, jei nenorite jo įtraukti į kitą commit'ą.

1. **Išsaugokite savo darbą**. Šiuo metu pridėjote failus į vadinamąją _paruošimo zoną_. Tai vieta, kur Git seka jūsų failus. Norėdami padaryti pakeitimus nuolatinius, turite juos _commit'inti_. Tai padaryti galite naudodami komandą `git commit`. Commit'as reiškia išsaugojimo tašką jūsų saugyklos istorijoje. Įveskite šią komandą, kad sukurtumėte commit'ą:

   ```bash
   git commit -m "first commit"
   ```

   Ši komanda commit'ina visus jūsų failus, pridėdama žinutę „first commit“. Ateities commit žinutėse norėsite būti išsamesni, kad aprašytumėte, kokio tipo pakeitimus atlikote.

1. **Sujunkite savo vietinę Git saugyklą su GitHub**. Git saugykla yra naudinga jūsų kompiuteryje, tačiau tam tikru momentu norėsite turėti failų atsarginę kopiją kažkur kitur ir taip pat pakviesti kitus žmones dirbti su jūsų saugykla. Viena iš puikių vietų tai padaryti yra GitHub. Prisiminkite, kad jau sukūrėme saugyklą GitHub, todėl vienintelis dalykas, kurį reikia padaryti, yra sujungti vietinę Git saugyklą su GitHub. Komanda `git remote add` tai padarys. Įveskite šią komandą:

   > Pastaba: prieš įvesdami komandą, eikite į savo GitHub saugyklos puslapį ir raskite saugyklos URL. Jį naudosite žemiau esančioje komandoje. Pakeiskite ```https://github.com/username/repository_name.git``` savo GitHub URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Tai sukuria _nuotolinį ryšį_ (remote), pavadintą „origin“, kuris nurodo į anksčiau sukurtą GitHub saugyklą.

1. **Išsiųskite vietinius failus į GitHub**. Iki šiol sukūrėte _ryšį_ tarp vietinės saugyklos ir GitHub saugyklos. Dabar išsiųskime šiuos failus į GitHub naudodami komandą `git push`, kaip parodyta:

   > Pastaba: jūsų šakos pavadinimas pagal numatymą gali skirtis nuo ```main```.

   ```bash
   git push -u origin main
   ```

   Tai išsiunčia jūsų commit'us iš „main“ šakos į GitHub.

2. **Pridėkite daugiau pakeitimų**. Jei norite tęsti pakeitimų darymą ir jų siuntimą į GitHub, jums tereikės naudoti šias tris komandas:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Patarimas: taip pat galite naudoti `.gitignore` failą, kad išvengtumėte failų, kurių nenorite sekti, rodymo GitHub – pavyzdžiui, užrašų failo, kurį laikote tame pačiame aplanke, bet kuris neturėtų būti viešoje saugykloje. `.gitignore` failų šablonus galite rasti čia: [.gitignore templates](https://github.com/github/gitignore).

#### Commit žinutės

Puiki Git commit žinutės antraštė užbaigia šį sakinį:  
Jei pritaikyta, šis commit'as <jūsų antraštė čia>

Antraštėje naudokite liepiamąją, esamąją laiką: „keisti“, o ne „pakeitė“ ar „keičia“.  
Kaip ir antraštėje, kūne (neprivaloma) taip pat naudokite liepiamąją, esamąją laiką. Kūnas turėtų apimti motyvaciją pakeitimui ir palyginti tai su ankstesniu elgesiu. Jūs paaiškinate „kodėl“, o ne „kaip“.

✅ Skirkite kelias minutes naršymui GitHub. Ar galite rasti tikrai puikią commit žinutę? O gal labai minimalią? Kokios informacijos, jūsų manymu, svarbiausia ir naudingiausia pateikti commit žinutėje?

### Užduotis: Bendradarbiaukite

Pagrindinė priežastis, kodėl talpiname dalykus GitHub, yra galimybė bendradarbiauti su kitais kūrėjais.

## Darbas su kitais projektuose

> Peržiūrėkite vaizdo įrašą  
>
> [![Git ir GitHub pagrindai](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Savo saugykloje eikite į `Insights > Community`, kad pamatytumėte, kaip jūsų projektas atitinka rekomenduojamus bendruomenės standartus.

   Štai keletas dalykų, kurie gali pagerinti jūsų GitHub saugyklą:
   - **Aprašymas**. Ar pridėjote savo projekto aprašymą?
   - **README**. Ar pridėjote README? GitHub pateikia gaires, kaip parašyti [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Gairės prisidėjimui**. Ar jūsų projektas turi [prisidėjimo gaires](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Elgesio kodeksas**. Ar pridėjote [elgesio kodeksą](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)?
   - **Licencija**. Galbūt svarbiausia – [licencija](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Visi šie ištekliai padės naujiems komandos nariams įsitraukti. Tai yra dalykai, kuriuos nauji prisidėtojai dažniausiai peržiūri prieš net žiūrėdami į jūsų kodą, kad sužinotų, ar jūsų projektas yra tinkama vieta jų laikui skirti.

✅ README failai, nors jų paruošimas užtrunka, dažnai yra pamirštami užimtų prižiūrėtojų. Ar galite rasti ypač išsamų pavyzdį? Pastaba: yra keletas [įrankių, padedančių kurti gerus README](https://www.makeareadme.com/), kuriuos galbūt norėsite išbandyti.

### Užduotis: Sujunkite kodą

Prisidėjimo dokumentai padeda žmonėms prisidėti prie projekto. Jie paaiškina, kokio tipo prisidėjimų ieškote ir kaip veikia procesas. Prisidėtojai turės atlikti kelis veiksmus, kad galėtų prisidėti prie jūsų saugyklos GitHub:

1. **Fork'inimas**. Tikriausiai norėsite, kad žmonės _fork'intų_ jūsų projektą. Fork'inimas reiškia jūsų saugyklos kopijos sukūrimą jų GitHub profilyje.
1. **Klonavimas**. Iš ten jie klonuos projektą į savo vietinį kompiuterį.
1. **Šakos sukūrimas**. Paprašykite jų sukurti _šaką_ savo darbui.
1. **Dėmesys vienai sričiai**. Paprašykite prisidėtojų sutelkti dėmesį į vieną dalyką vienu metu – taip padidėja tikimybė, kad galėsite _sujungti_ jų darbą. Įsivaizduokite, kad jie pataiso klaidą, prideda naują funkciją ir atnaujina kelis testus – o kas, jei norite arba galite įgyvendinti tik 2 iš 3 ar 1 iš 3 pakeitimų?

✅ Įsivaizduokite situaciją, kurioje šakos yra ypač svarbios rašant ir diegiant gerą kodą. Kokius naudojimo atvejus galite sugalvoti?

> Pastaba: būkite pokytis, kurį norite matyti pasaulyje, ir kurkite šakas savo darbui taip pat. Visi commit'ai, kuriuos atliksite, bus padaryti šakoje, kurioje šiuo metu esate „prisijungę“. Naudokite `git status`, kad pamatytumėte, kurioje šakoje esate.

Pereikime per prisidėtojo darbo eigą. Tarkime, prisidėtojas jau _fork'ino_ ir _klonavo_ saugyklą, todėl jie turi Git saugyklą, paruoštą darbui savo vietiniame kompiuteryje:

1. **Sukurkite šaką**. Naudokite komandą `git branch`, kad sukurtumėte šaką, kurioje bus pakeitimai, kuriuos jie ketina prisidėti:

   ```bash
   git branch [branch-name]
   ```

1. **Pereikite į darbo šaką**. Pereikite į nurodytą šaką ir atnaujinkite darbo katalogą naudodami `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Atlikite darbą**. Šiuo metu norite pridėti savo pakeitimus. Nepamirškite apie juos pranešti Git naudodami šias komandas:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Įsitikinkite, kad suteikėte savo commit'ui gerą pavadinimą – tiek dėl savęs, tiek dėl saugyklos prižiūrėtojo, kuriam padedate.

1. **Sujunkite savo darbą su „main“ šaka**. Tam tikru momentu baigsite darbą ir norėsite sujungti savo darbą su „main“ šaka. „Main“ šaka galėjo pasikeisti tuo metu, todėl įsitikinkite, kad pirmiausia ją atnaujinote naudodami šias komandas:

   ```bash
   git switch main
   git pull
   ```

   Šiuo metu norite įsitikinti, kad visi _konfliktai_, situacijos, kai Git negali lengvai _sujungti_ pakeitimų, įvyksta jūsų darbo šakoje. Todėl paleiskite šias komandas:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Tai įtrauks visus pakeitimus iš „main“ į jūsų šaką, ir tikėkimės, kad galėsite tiesiog tęsti darbą. Jei ne, VS Code nurodys, kur Git yra _suklaidintas_, ir jūs tiesiog pakeisite paveiktus failus, kad nurodytumėte, kuris turinys yra tiksliausias.

1. **Išsiųskite savo darbą į GitHub**. Savo darbo siuntimas į GitHub reiškia du dalykus: šakos išsiuntimą į jūsų fork'intą saugyklą ir PR (Pull Request) atidarymą.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Aukščiau pateikta komanda sukuria šaką jūsų fork'intoje saugykloje.

1. **Atidarykite PR**. Tada norite atidaryti PR. Tai padarysite, eidami į fork'intą saugyklą GitHub. Pamatysite indikaciją GitHub, kurioje klausiama, ar norite sukurti naują PR. Spustelėkite tai ir būsite nukreipti į sąsają, kurioje galite pakeisti commit žinutės pavadinimą, suteikti tinkamesnį aprašymą. Dabar saugyklos, kurią fork'inote, prižiūrėtojas pamatys šį PR ir _tikėkimės_, įvertins ir _sujungs_ jūsų PR. Dabar esate prisidėtojas, valio :)

1. **Išvalykite**. Laikoma gera praktika _išvalyti_ po sėkmingo PR sujungimo. Norite išvalyti tiek savo vietinę šaką, tiek šaką, kurią išsiuntėte į GitHub. Pirmiausia iš
Įsitikinkite, kad einate į „GitHub“ puslapį, kuriame yra jūsų „forked“ saugykla, ir pašalinkite nuotolinę šaką, kurią ką tik įkėlėte.

`Pull request` atrodo kaip keistas terminas, nes iš tikrųjų jūs norite įkelti savo pakeitimus į projektą. Tačiau projekto prižiūrėtojas (projekto savininkas) arba pagrindinė komanda turi apsvarstyti jūsų pakeitimus prieš juos sujungiant su projekto „main“ šaka, todėl iš esmės jūs prašote prižiūrėtojo priimti sprendimą dėl pakeitimo.

Pull request yra vieta, kur galima palyginti ir aptarti skirtumus, atsiradusius šakoje, kartu su apžvalgomis, komentarais, integruotais testais ir dar daugiau. Geras pull request laikosi maždaug tų pačių taisyklių kaip ir commit žinutė. Galite pridėti nuorodą į problemą (issue) problemų sekimo sistemoje, jei jūsų darbas, pavyzdžiui, išsprendžia problemą. Tai daroma naudojant `#`, po kurio eina jūsų problemos numeris. Pavyzdžiui, `#97`.

🤞Tikėkimės, kad visi patikrinimai praeis sėkmingai ir projekto savininkas (-ai) sujungs jūsų pakeitimus su projektu🤞

Atnaujinkite savo dabartinę vietinę darbo šaką su visais naujais commit'ais iš atitinkamos nuotolinės šakos „GitHub“:

`git pull`

## Kaip prisidėti prie atvirojo kodo

Pirmiausia, raskime jus dominančią „GitHub“ saugyklą (arba **repo**), prie kurios norėtumėte prisidėti pakeitimu. Jums reikės nukopijuoti jos turinį į savo kompiuterį.

✅ Geras būdas rasti „pradedantiesiems draugiškas“ saugyklas yra [ieškoti pagal žymą „good-first-issue“](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Nukopijuokite saugyklą lokaliai](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.lt.png)

Yra keli būdai nukopijuoti kodą. Vienas iš jų yra „klonuoti“ saugyklos turinį naudojant HTTPS, SSH arba „GitHub CLI“ (komandinės eilutės sąsają).

Atidarykite terminalą ir klonuokite saugyklą taip:
`git clone https://github.com/ProjectURL`

Norėdami dirbti su projektu, pereikite į tinkamą aplanką:
`cd ProjectURL`

Taip pat galite atidaryti visą projektą naudodami [Codespaces](https://github.com/features/codespaces), „GitHub“ integruotą kodo redaktorių / debesų kūrimo aplinką, arba [GitHub Desktop](https://desktop.github.com/).

Galiausiai, galite atsisiųsti kodą kaip suspaustą aplanką.

### Keletas įdomesnių dalykų apie „GitHub“

Galite pažymėti žvaigždute, stebėti ir/arba „forkinti“ bet kurią viešą saugyklą „GitHub“. Savo pažymėtas saugyklas galite rasti viršutiniame dešiniajame išskleidžiamajame meniu. Tai tarsi žymėjimas, bet skirtas kodui.

Projektai turi problemų sekimo sistemą, dažniausiai „GitHub“ skiltyje „Issues“, nebent nurodyta kitaip, kur žmonės aptaria su projektu susijusias problemas. O skiltyje „Pull Requests“ žmonės aptaria ir peržiūri vykdomus pakeitimus.

Projektai taip pat gali turėti diskusijas forumuose, el. pašto sąrašuose arba pokalbių kanaluose, tokiuose kaip „Slack“, „Discord“ ar IRC.

✅ Apžiūrėkite savo naują „GitHub“ saugyklą ir išbandykite keletą dalykų, pvz., nustatymų redagavimą, informacijos pridėjimą prie savo saugyklos ir projekto kūrimą (pvz., Kanban lentą). Galite nuveikti daug!

---

## 🚀 Iššūkis

Dirbkite poroje su draugu prie vienas kito kodo. Sukurkite projektą kartu, forkinkite kodą, kurkite šakas ir sujunkite pakeitimus.

## Po paskaitos testas
[Po paskaitos testas](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)

## Peržiūra ir savarankiškas mokymasis

Skaitykite daugiau apie [prisidėjimą prie atvirojo kodo programinės įrangos](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git atmintinė](https://training.github.com/downloads/github-git-cheat-sheet/).

Praktikuokitės, praktikuokitės, praktikuokitės. „GitHub“ turi puikių mokymosi kelių, pasiekiamų per [skills.github.com](https://skills.github.com):

- [Pirma savaitė „GitHub“](https://skills.github.com/#first-week-on-github)

Taip pat rasite pažangesnių kursų.

## Užduotis

Užbaikite [Pirmos savaitės „GitHub“ kursą](https://skills.github.com/#first-week-on-github).

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, kylančius dėl šio vertimo naudojimo.