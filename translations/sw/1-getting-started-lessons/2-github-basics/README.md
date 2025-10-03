<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ea65b75e488aa33a3cc5cb1c6c3f047a",
  "translation_date": "2025-10-03T14:08:59+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "sw"
}
-->
# Utangulizi wa GitHub

Somo hili linahusu misingi ya GitHub, jukwaa la kuhifadhi na kusimamia mabadiliko ya msimbo wako.

![Utangulizi wa GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Maswali ya Awali ya Somo
[Maswali ya awali ya somo](https://ff-quizzes.netlify.app)

## Utangulizi

Katika somo hili, tutajadili:

- kufuatilia kazi unayofanya kwenye kompyuta yako
- kufanya kazi kwenye miradi na wengine
- jinsi ya kuchangia programu huria

### Mahitaji ya Awali

Kabla ya kuanza, hakikisha Git imewekwa. Katika terminal andika: 
`git --version`

Ikiwa Git haijawekwa, [pakua Git](https://git-scm.com/downloads). Kisha, weka wasifu wako wa Git wa ndani kwenye terminal:
* `git config --global user.name "jina-lako"`
* `git config --global user.email "barua-pepe-yako"`

Ili kuangalia kama Git tayari imewekwa unaweza kuandika:
`git config --list`

Pia utahitaji akaunti ya GitHub, mhariri wa msimbo (kama Visual Studio Code), na ufungue terminal yako (au: command prompt).

Tembelea [github.com](https://github.com/) na unda akaunti ikiwa bado huna, au ingia na ujaze wasifu wako. 

✅ GitHub si jukwaa pekee la kuhifadhi msimbo duniani; kuna mengine, lakini GitHub ndilo linalojulikana zaidi.

### Maandalizi

Utahitaji folda yenye mradi wa msimbo kwenye kompyuta yako ya ndani (laptop au PC), na hifadhi ya umma kwenye GitHub, ambayo itatumika kama mfano wa jinsi ya kuchangia miradi ya wengine.  

---

## Usimamizi wa Msimbo

Tuseme una folda ya ndani yenye mradi wa msimbo na unataka kuanza kufuatilia maendeleo yako kwa kutumia git - mfumo wa kudhibiti matoleo. Watu wengine hulinganisha kutumia git na kuandika barua ya mapenzi kwa nafsi yako ya baadaye. Ukisoma ujumbe wa "commit" siku, wiki, au miezi baadaye utaweza kukumbuka kwa nini ulifanya uamuzi fulani, au "kurudisha nyuma" mabadiliko - yaani, unapokuwa umeandika ujumbe mzuri wa "commit".

### Kazi: Unda hifadhi na uhifadhi msimbo  

> Tazama video
> 
> [![Video ya misingi ya Git na GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)


1. **Unda hifadhi kwenye GitHub**. Kwenye GitHub.com, katika tab ya hifadhi, au kutoka kwenye upau wa urambazaji juu-kulia, tafuta kitufe cha **new repo**.

   1. Peana jina kwa hifadhi yako (folda)
   1. Chagua **create repository**.

1. **Nenda kwenye folda unayofanyia kazi**. Katika terminal yako, badilisha hadi folda (inayojulikana pia kama directory) unayotaka kuanza kufuatilia. Andika:

   ```bash
   cd [name of your folder]
   ```

1. **Anzisha hifadhi ya git**. Katika mradi wako andika:

   ```bash
   git init
   ```

1. **Angalia hali**. Ili kuangalia hali ya hifadhi yako andika:

   ```bash
   git status
   ```

   matokeo yanaweza kuonekana kama hivi:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Kwa kawaida amri ya `git status` inakuambia vitu kama faili gani ziko tayari _kuhifadhiwa_ kwenye hifadhi au zina mabadiliko ambayo unaweza kutaka kuhifadhi.

1. **Ongeza faili zote kwa kufuatilia**
   Hii pia inaitwa kuweka faili kwenye eneo la staging.

   ```bash
   git add .
   ```

   Amri ya `git add` pamoja na hoja ya `.` inaonyesha kuwa faili zako zote na mabadiliko yako yamewekwa kwa kufuatilia. 

1. **Ongeza faili zilizochaguliwa kwa kufuatilia**

   ```bash
   git add [file or folder name]
   ```

   Hii inatusaidia kuongeza faili zilizochaguliwa tu kwenye eneo la staging wakati hatutaki kuhifadhi faili zote mara moja.

1. **Ondoa faili zote kutoka eneo la staging**

   ```bash
   git reset
   ```

   Amri hii inatusaidia kuondoa faili zote mara moja kutoka eneo la staging.

1. **Ondoa faili fulani kutoka eneo la staging**

   ```bash
   git reset [file or folder name]
   ```

   Amri hii inatusaidia kuondoa faili fulani tu mara moja ambayo hatutaki kujumuisha kwa "commit" inayofuata.

1. **Hifadhi kazi yako**. Kwa sasa umeongeza faili kwenye eneo linaloitwa _staging area_. Sehemu ambapo Git inafuatilia faili zako. Ili kufanya mabadiliko yawe ya kudumu unahitaji _kuhifadhi_ faili. Ili kufanya hivyo unaunda _commit_ kwa amri ya `git commit`. _Commit_ inawakilisha sehemu ya kuhifadhi katika historia ya hifadhi yako. Andika yafuatayo kuunda _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Hii inahifadhi faili zako zote, ikiongeza ujumbe "first commit". Kwa ujumbe wa "commit" wa baadaye utataka kuwa na maelezo zaidi ili kueleza aina ya mabadiliko uliyofanya.

1. **Unganisha hifadhi yako ya Git ya ndani na GitHub**. Hifadhi ya Git ni nzuri kwenye kompyuta yako lakini wakati fulani utataka kuwa na nakala ya faili zako mahali fulani na pia kuwaalika watu wengine kufanya kazi na wewe kwenye hifadhi yako. Mahali pazuri pa kufanya hivyo ni GitHub. Kumbuka tayari tumeunda hifadhi kwenye GitHub kwa hivyo tunachohitaji kufanya ni kuunganisha hifadhi yetu ya Git ya ndani na GitHub. Amri ya `git remote add` itafanya hivyo. Andika amri ifuatayo:

   > Kumbuka, kabla ya kuandika amri nenda kwenye ukurasa wa hifadhi yako ya GitHub ili kupata URL ya hifadhi. Utaitumia katika amri hapa chini. Badilisha ```https://github.com/username/repository_name.git``` na URL yako ya GitHub.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Hii inaunda _remote_, au muunganisho, unaoitwa "origin" unaoelekeza kwenye hifadhi ya GitHub uliyounda awali.

1. **Tuma faili za ndani kwenye GitHub**. Hadi sasa umeunda _muunganisho_ kati ya hifadhi ya ndani na hifadhi ya GitHub. Hebu tutume faili hizi kwenye GitHub kwa amri ifuatayo `git push`, kama hivi: 
   
   > Kumbuka, jina la tawi lako linaweza kuwa tofauti kwa chaguo-msingi kutoka ```main```.

   ```bash
   git push -u origin main
   ```

   Hii inatuma "commits" zako kwenye tawi lako la "main" kwenda GitHub. Kuweka tawi la `upstream` ikiwa ni pamoja na `-u` katika amri kunaanzisha kiungo kati ya tawi lako la ndani na tawi la mbali, kwa hivyo unaweza kutumia tu `git push` au `git pull` bila kutaja jina la tawi siku zijazo. Git itatumia moja kwa moja tawi la upstream na hutahitaji kutaja jina la tawi waziwazi katika amri za baadaye.

2. **Kuongeza mabadiliko zaidi**. Ikiwa unataka kuendelea kufanya mabadiliko na kuyasukuma kwenye GitHub utahitaji tu kutumia amri hizi tatu:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Kidokezo, Unaweza pia kutaka kutumia faili ya `.gitignore` ili kuzuia faili ambazo hutaki kufuatilia zisionekane kwenye GitHub - kama faili ya maelezo unayohifadhi kwenye folda hiyo hiyo lakini haina nafasi kwenye hifadhi ya umma. Unaweza kupata templeti za faili za `.gitignore` kwenye [.gitignore templates](https://github.com/github/gitignore).

#### Ujumbe wa Commit

Ujumbe mzuri wa Git commit unakamilisha sentensi ifuatayo:
Ikiwa itatumika, commit hii itafanya <ujumbe wako hapa>

Kwa somo tumia hali ya amri, wakati uliopo: "badilisha" si "ilibadilishwa" wala "inabadilisha". 
Kama ilivyo kwenye somo, katika mwili (hiari) pia tumia hali ya amri, wakati uliopo. Mwili unapaswa kujumuisha motisha ya mabadiliko na kulinganisha haya na tabia ya awali. Unafafanua `kwa nini`, si `jinsi`.

✅ Chukua dakika chache kuvinjari GitHub. Je, unaweza kupata ujumbe mzuri wa commit? Je, unaweza kupata ujumbe wa commit ulio rahisi sana? Ni taarifa gani unadhani ni muhimu zaidi na yenye manufaa kufikisha katika ujumbe wa commit?

### Kazi: Kushirikiana

Sababu kuu ya kuweka vitu kwenye GitHub ilikuwa kufanya iwezekane kushirikiana na watengenezaji wengine.

## Kufanya kazi kwenye miradi na wengine

> Tazama video
>
> [![Video ya misingi ya Git na GitHub](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Katika hifadhi yako, nenda kwenye `Insights > Community` ili kuona jinsi mradi wako unavyolinganishwa na viwango vya jamii vinavyopendekezwa.

   Hapa kuna mambo ambayo yanaweza kuboresha hifadhi yako ya GitHub:
   - **Maelezo**. Je, umeongeza maelezo kwa mradi wako?
   - **README**. Je, umeongeza README? GitHub inatoa mwongozo wa kuandika [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Mwongozo wa kuchangia**. Je, mradi wako una [miongozo ya kuchangia](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon), 
   - **Kanuni za Maadili**. [Kanuni za Maadili](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Leseni**. Labda muhimu zaidi, [leseni](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Rasilimali hizi zote zitasaidia kuingiza wanachama wapya wa timu. Na haya ni mambo ambayo wachangiaji wapya huangalia kabla hata ya kuangalia msimbo wako, ili kujua kama mradi wako ni mahali sahihi pa kutumia muda wao.

✅ Faili za README, ingawa zinachukua muda kuandaa, mara nyingi hupuuzwa na waangalizi wenye shughuli nyingi. Je, unaweza kupata mfano wa README iliyoelezea vizuri? Kumbuka: kuna baadhi ya [zana za kusaidia kuunda README nzuri](https://www.makeareadme.com/) ambazo unaweza kupenda kujaribu.

### Kazi: Unganisha msimbo

Nyaraka za kuchangia husaidia watu kuchangia mradi. Inaelezea aina gani za michango unayotafuta na jinsi mchakato unavyofanya kazi. Wachangiaji watahitaji kupitia mfululizo wa hatua ili waweze kuchangia kwenye hifadhi yako ya GitHub:


1. **Kufork hifadhi yako** Labda utataka watu _kufork_ mradi wako. Kufork kunamaanisha kuunda nakala ya hifadhi yako kwenye wasifu wao wa GitHub.
1. **Clone**. Kutoka hapo wata-clone mradi kwenye kompyuta yao ya ndani. 
1. **Unda tawi**. Utataka kuwaomba waunde _tawi_ kwa kazi yao. 
1. **Lenga mabadiliko yao kwenye eneo moja**. Waombe wachangiaji kulenga michango yao kwenye jambo moja kwa wakati mmoja - kwa njia hiyo nafasi ya kwamba unaweza _kuunganisha_ kazi yao ni kubwa. Fikiria wanaandika marekebisho ya hitilafu, kuongeza kipengele kipya, na kusasisha majaribio kadhaa - vipi ikiwa unataka, au unaweza kutekeleza 2 kati ya 3, au 1 kati ya 3 mabadiliko?

✅ Fikiria hali ambapo matawi ni muhimu sana kwa kuandika na kusafirisha msimbo mzuri. Ni matumizi gani unayoweza kufikiria?

> Kumbuka, kuwa mabadiliko unayotaka kuona duniani, na unda matawi kwa kazi yako mwenyewe pia. Mabadiliko yoyote unayofanya yatafanywa kwenye tawi ambalo kwa sasa umechagua "checked out". Tumia `git status` kuona ni tawi gani hilo.

Hebu tuendelee na mtiririko wa kazi wa mchangiaji. Fikiria mchangiaji tayari ame-_fork_ na _clone_ hifadhi kwa hivyo ana hifadhi ya Git tayari kufanyiwa kazi, kwenye kompyuta yake ya ndani:

1. **Unda tawi**. Tumia amri ya `git branch` kuunda tawi ambalo litakuwa na mabadiliko wanayokusudia kuchangia:

   ```bash
   git branch [branch-name]
   ```

1. **Badilisha hadi tawi la kazi**. Badilisha hadi tawi lililotajwa na sasisha folda ya kazi kwa `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Fanya kazi**. Kwa sasa unataka kuongeza mabadiliko yako. Usisahau kuambia Git kuhusu hilo kwa amri zifuatazo:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Hakikisha unatoa commit yako jina zuri, kwa manufaa yako mwenyewe na pia kwa msimamizi wa hifadhi unayesaidia.

1. **Unganisha kazi yako na tawi la `main`**. Wakati fulani umemaliza kufanya kazi na unataka kuunganisha kazi yako na ile ya tawi la `main`. Tawi la `main` linaweza kuwa limebadilika wakati huo kwa hivyo hakikisha unalisasisha kwanza hadi la hivi karibuni kwa amri zifuatazo:

   ```bash
   git switch main
   git pull
   ```

   Kwa sasa unataka kuhakikisha kuwa mizozo yoyote, hali ambapo Git haiwezi _kuunganisha_ mabadiliko kwa urahisi inatokea kwenye tawi lako la kazi. Kwa hivyo tumia amri zifuatazo:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Amri ya `git merge main` italeta mabadiliko yote kutoka `main` hadi kwenye tawi lako. Tunatumaini unaweza kuendelea tu. Ikiwa sivyo, VS Code itakuonyesha mahali ambapo Git ime-_changanyikiwa_ na unabadilisha faili zilizoathiriwa ili kusema ni maudhui gani yaliyo sahihi zaidi.

   Ili kubadilisha hadi tawi tofauti, tumia amri ya kisasa ya `git switch`:
   ```bash
   git switch [branch_name]

1. **Tuma kazi yako kwenye GitHub**. Kutuma kazi yako kwenye GitHub kunamaanisha mambo mawili. Kusukuma tawi lako kwenye hifadhi yako na kisha kufungua PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Amri hapo juu inaunda tawi kwenye hifadhi yako ya kufork.
1. **Fungua PR**. Hatua inayofuata ni kufungua PR. Unaweza kufanya hivyo kwa kwenda kwenye repo uliyoifork kwenye GitHub. Utapata maelezo kwenye GitHub yanayokuuliza kama unataka kuunda PR mpya, bonyeza hapo na utapelekwa kwenye kiolesura ambapo unaweza kubadilisha kichwa cha ujumbe wa commit, na kutoa maelezo yanayofaa zaidi. Sasa mtunzaji wa repo uliyoifork ataona PR hii na _kwa matumaini_ wataithamini na _kuunganisha_ PR yako. Sasa umekuwa mchangiaji, hongera! :)

1. **Safisha**. Inachukuliwa kuwa ni tabia nzuri _kusafisha_ baada ya kufanikisha kuunganisha PR. Unapaswa kusafisha tawi lako la ndani na tawi ulilolisukuma kwenye GitHub. Kwanza, futa tawi hilo kwa kutumia amri ifuatayo:

   ```bash
   git branch -d [branch-name]
   ```
  
   Hakikisha unatembelea ukurasa wa GitHub wa repo uliyoifork na kuondoa tawi la mbali ulilolisukuma.

`Pull request` linaweza kuonekana kama neno la ajabu kwa sababu kwa kweli unataka kusukuma mabadiliko yako kwenye mradi. Lakini mtunzaji (mmiliki wa mradi) au timu ya msingi inahitaji kuzingatia mabadiliko yako kabla ya kuyaunganisha na tawi kuu la mradi, kwa hivyo kwa kweli unatoa ombi la uamuzi wa mabadiliko kutoka kwa mtunzaji.

Pull request ni mahali pa kulinganisha na kujadili tofauti zilizotolewa kwenye tawi kwa kutumia ukaguzi, maoni, majaribio yaliyounganishwa, na zaidi. Pull request nzuri inafuata takriban sheria sawa na ujumbe wa commit. Unaweza kuongeza rejeleo kwa suala kwenye tracker ya masuala, kwa mfano ikiwa kazi yako inatatua suala. Hii inafanywa kwa kutumia `#` ikifuatiwa na namba ya suala lako. Kwa mfano `#97`.

🤞Kwa matumaini kwamba ukaguzi wote utapita na mmiliki wa mradi ataunganisha mabadiliko yako kwenye mradi🤞

Sasisha tawi lako la kazi la ndani na commit zote mpya kutoka kwenye tawi la mbali linalolingana kwenye GitHub:

`git pull`

## Jinsi ya kuchangia kwenye open source

Kwanza, tafuta repo kwenye GitHub inayokuvutia na ambayo ungependa kuchangia mabadiliko. Utataka kunakili yaliyomo kwenye mashine yako.

✅ Njia nzuri ya kupata repo zinazofaa kwa wanaoanza ni [kutafuta kwa tagi 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Nakili repo kwa ndani](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.sw.png)

Kuna njia kadhaa za kunakili msimbo. Njia moja ni "kuclone" yaliyomo kwenye repo, kwa kutumia HTTPS, SSH, au GitHub CLI (Command Line Interface).

Fungua terminal yako na clone repo kama ifuatavyo:  
`git clone https://github.com/ProjectURL`

Ili kufanya kazi kwenye mradi, nenda kwenye folda sahihi:  
`cd ProjectURL`

Unaweza pia kufungua mradi mzima kwa kutumia [Codespaces](https://github.com/features/codespaces), mhariri wa msimbo wa GitHub / mazingira ya maendeleo ya wingu, au [GitHub Desktop](https://desktop.github.com/).

Mwisho, unaweza kupakua msimbo katika folda iliyobanwa (zipped).

### Mambo machache ya kuvutia kuhusu GitHub

Unaweza ku-star, ku-watch, na/au "kufork" repo yoyote ya umma kwenye GitHub. Unaweza kupata repo zako ulizo-star kwenye menyu ya kushuka juu kulia. Ni kama kuweka alama ya kurasa, lakini kwa msimbo.

Miradi ina tracker ya masuala, mara nyingi kwenye GitHub katika tab ya "Issues" isipokuwa imeonyeshwa vinginevyo, ambapo watu wanajadili masuala yanayohusiana na mradi. Na tab ya Pull Requests ni mahali ambapo watu wanajadili na kukagua mabadiliko yanayoendelea.

Miradi inaweza pia kuwa na majadiliano katika vikao, orodha za barua pepe, au njia za mazungumzo kama Slack, Discord au IRC.

✅ Tazama repo yako mpya ya GitHub na jaribu mambo kadhaa, kama kuhariri mipangilio, kuongeza maelezo kwenye repo yako, na kuunda mradi (kama bodi ya Kanban). Kuna mengi unaweza kufanya!

---

## 🚀 Changamoto

Shirikiana na rafiki kufanya kazi kwenye msimbo wa kila mmoja. Unda mradi kwa kushirikiana, fork msimbo, unda matawi, na unganisha mabadiliko.

## Jaribio la Baada ya Somo  
[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/en/)

## Mapitio na Kujisomea

Soma zaidi kuhusu [kuchangia kwenye programu za open source](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Cheatsheet ya Git](https://training.github.com/downloads/github-git-cheat-sheet/).

Fanya mazoezi, mazoezi, mazoezi. GitHub ina njia nzuri za kujifunza zinazopatikana kupitia [skills.github.com](https://skills.github.com):

- [Wiki ya Kwanza kwenye GitHub](https://skills.github.com/#first-week-on-github)

Pia utapata kozi za hali ya juu zaidi.

## Kazi  

Kamilisha [kozi ya Wiki ya Kwanza kwenye GitHub](https://skills.github.com/#first-week-on-github)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuchukuliwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.