<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-24T19:20:07+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "sw"
}
-->
# Utangulizi wa GitHub

Habari, mtaalamu wa baadaye! 👋 Uko tayari kujiunga na mamilioni ya waandaaji programu duniani? Nimefurahi sana kukutambulisha kwa GitHub – fikiria kama mtandao wa kijamii kwa waandaaji programu, isipokuwa badala ya kushiriki picha za chakula chako cha mchana, tunashiriki misimbo na kujenga mambo ya ajabu pamoja!

Hili ndilo linanivutia sana: kila programu kwenye simu yako, kila tovuti unayotembelea, na zana nyingi utakazojifunza kutumia zilitengenezwa na timu za waandaaji programu wakishirikiana kwenye majukwaa kama GitHub. Hiyo programu ya muziki unayoipenda? Mtu kama wewe alichangia kuijenga. Hiyo mchezo usiyoweza kuacha kucheza? Ndio, labda ilijengwa kwa ushirikiano wa GitHub. Na sasa WEWE unakwenda kujifunza jinsi ya kuwa sehemu ya jamii hiyo ya ajabu!

Najua hii inaweza kuonekana kama mengi mwanzoni – kwa kweli, nakumbuka nilipotazama ukurasa wangu wa kwanza wa GitHub nikifikiria "Hii yote ina maana gani?" Lakini jambo ni hili: kila mtaalamu wa programu alianza mahali ulipo sasa. Mwishoni mwa somo hili, utakuwa na hifadhi yako mwenyewe ya GitHub (fikiria kama maonyesho ya mradi wako binafsi mtandaoni), na utajua jinsi ya kuhifadhi kazi yako, kushiriki na wengine, na hata kuchangia miradi inayotumiwa na mamilioni ya watu.

Tutachukua safari hii pamoja, hatua kwa hatua. Hakuna haraka, hakuna shinikizo – ni wewe, mimi, na zana za kuvutia ambazo zitakuwa marafiki zako wapya wa karibu!

![Utangulizi wa GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Maswali ya Awali ya Somo
[Maswali ya awali ya somo](https://ff-quizzes.netlify.app)

## Utangulizi

Kabla ya kuingia kwenye mambo ya kusisimua, hebu tuandae kompyuta yako kwa ajili ya uchawi wa GitHub! Fikiria hili kama kupanga vifaa vyako vya sanaa kabla ya kuunda kazi ya sanaa – kuwa na zana sahihi tayari hufanya kila kitu kuwa rahisi na cha kufurahisha zaidi.

Nitakutembeza hatua kwa hatua katika kila hatua ya maandalizi, na naahidi siyo ngumu kama inavyoonekana mwanzoni. Ikiwa kuna kitu hakieleweki mara moja, ni kawaida kabisa! Nakumbuka nilipokuwa naandaa mazingira yangu ya kwanza ya maendeleo na kuhisi kama nilikuwa najaribu kusoma maandishi ya kale. Kila mtaalamu wa programu amewahi kuwa mahali ulipo sasa, akijiuliza kama anafanya sawa. Siri ni kwamba: ikiwa uko hapa unajifunza, tayari unafanya sawa! 🌟

Katika somo hili, tutajadili:

- kufuatilia kazi unayofanya kwenye kompyuta yako
- kufanya kazi kwenye miradi na wengine
- jinsi ya kuchangia programu za chanzo huria

### Mahitaji ya Awali

Hebu tuandae kompyuta yako kwa ajili ya uchawi wa GitHub! Usijali – maandalizi haya ni kitu unachohitaji kufanya mara moja tu, na kisha utakuwa tayari kwa safari yako yote ya programu.

Sawa, hebu tuanze na msingi! Kwanza, tunahitaji kuangalia kama Git tayari ipo kwenye kompyuta yako. Git kimsingi ni kama kuwa na msaidizi mwenye akili nyingi anayekumbuka kila mabadiliko unayofanya kwenye misimbo yako – bora zaidi kuliko kubonyeza Ctrl+S kila sekunde mbili (sote tumewahi kufanya hivyo!).

Hebu tuone kama Git tayari imewekwa kwa kuandika amri hii ya kichawi kwenye terminal yako:
`git --version`

Ikiwa Git bado haipo, usijali! Nenda tu kwenye [download Git](https://git-scm.com/downloads) na ipakue. Mara tu unapokuwa umeiweka, tunahitaji kuitambulisha Git kwako vizuri:

> 💡 **Maandalizi ya Mara ya Kwanza**: Amri hizi zinaambia Git wewe ni nani. Taarifa hii itaambatanishwa na kila commit unayofanya, kwa hivyo chagua jina na barua pepe unayojisikia vizuri kushiriki hadharani.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Ili kuangalia kama Git tayari imewekwa unaweza kuandika:
```bash
git config --list
```

Pia utahitaji akaunti ya GitHub, mhariri wa misimbo (kama Visual Studio Code), na utahitaji kufungua terminal yako (au: command prompt).

Tembelea [github.com](https://github.com/) na unda akaunti ikiwa bado huna, au ingia na ujaze wasifu wako.

💡 **Ushauri wa Kisasa**: Fikiria kuweka [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) au kutumia [GitHub CLI](https://cli.github.com/) kwa urahisi wa uthibitisho bila nywila.

✅ GitHub siyo hifadhi pekee ya misimbo duniani; kuna nyingine, lakini GitHub ndiyo inayojulikana zaidi.

### Maandalizi

Utahitaji folda yenye mradi wa misimbo kwenye kompyuta yako ya ndani (laptop au PC), na hifadhi ya umma kwenye GitHub, ambayo itatumika kama mfano wa jinsi ya kuchangia miradi ya wengine.

### Kuhifadhi Misimbo Yako Salama

Hebu tuzungumze kuhusu usalama kwa muda – lakini usijali, hatutakufanya uhisi kuzidiwa na mambo ya kutisha! Fikiria mazoea haya ya usalama kama kufunga gari lako au nyumba yako. Ni tabia rahisi zinazokuwa za kawaida na kulinda kazi yako ngumu.

Tutakuonyesha njia za kisasa, salama za kufanya kazi na GitHub tangu mwanzo. Kwa njia hii, utajenga tabia nzuri ambazo zitakusaidia vizuri katika kazi yako ya programu.

Unapofanya kazi na GitHub, ni muhimu kufuata mazoea bora ya usalama:

| Eneo la Usalama | Mazoea Bora | Kwa Nini Ni Muhimu |
|------------------|-------------|--------------------|
| **Uthibitisho** | Tumia SSH keys au Personal Access Tokens | Nywila si salama sana na zinatolewa |
| **Uthibitisho wa Hatua Mbili** | Washa 2FA kwenye akaunti yako ya GitHub | Inaongeza safu ya ziada ya ulinzi wa akaunti |
| **Usalama wa Hifadhi** | Usikubali taarifa nyeti | Funguo za API na nywila hazipaswi kuwa kwenye hifadhi za umma |
| **Usimamizi wa Vitegemezi** | Washa Dependabot kwa masasisho | Inahakikisha vitegemezi vyako ni salama na vimesasishwa |

> ⚠️ **Kumbusho Muhimu la Usalama**: Usikubali funguo za API, nywila, au taarifa nyingine nyeti kwenye hifadhi yoyote. Tumia mazingira ya kutofautisha na faili za `.gitignore` kulinda data nyeti.

**Maandalizi ya Kisasa ya Uthibitisho:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Ushauri wa Wataalamu**: SSH keys huondoa hitaji la kuingiza nywila mara kwa mara na ni salama zaidi kuliko njia za jadi za uthibitisho.

---

## Kusimamia Misimbo Yako Kama Mtaalamu

Sawa, HII ndiyo sehemu ambapo mambo yanakuwa ya kusisimua sana! 🎉 Tunakaribia kujifunza jinsi ya kufuatilia na kusimamia misimbo yako kama wataalamu wanavyofanya, na kwa kweli, hii ni moja ya mambo ninayopenda kufundisha kwa sababu ni mabadiliko makubwa.

Fikiria hivi: unaandika hadithi ya kushangaza, na unataka kufuatilia kila rasimu, kila mabadiliko mazuri, na kila "subiri, hiyo ni nzuri!" wakati njiani. Hivyo ndivyo Git inavyofanya kwa misimbo yako! Ni kama kuwa na daftari la kusafiri kwa wakati ambalo linakumbuka KILA KITU – kila neno, kila mabadiliko, kila "oops, hiyo iliharibu kila kitu" ambalo unaweza kurekebisha mara moja.

Nitakuwa mkweli – hii inaweza kuhisi kuzidiwa mwanzoni. Nilipoanza, nilifikiria "Kwa nini siwezi tu kuhifadhi faili zangu kama kawaida?" Lakini niamini: mara Git itakapokufungukia (na itafunguka!), utakuwa na moja ya nyakati hizo za mwangaza ambapo unafikiria "Nilifanyaje programu bila hii?" Ni kama kugundua unaweza kuruka wakati umekuwa ukitembea kila mahali maisha yako yote!

Tuseme una folda ya ndani yenye mradi wa misimbo na unataka kuanza kufuatilia maendeleo yako ukitumia git - mfumo wa kudhibiti toleo. Watu wengine hulinganisha kutumia git na kuandika barua ya mapenzi kwa nafsi yako ya baadaye. Kusoma ujumbe wa commit siku, wiki, au miezi baadaye utaweza kukumbuka kwa nini ulifanya uamuzi, au "kurudisha nyuma" mabadiliko - yaani, unapokuwa unaandika ujumbe mzuri wa "commit".

### Kazi: Unda Hifadhi Yako ya Kwanza!

> 🎯 **Dhamira Yako (na ninasisimka kwa ajili yako!)**: Tunakwenda kuunda hifadhi yako ya kwanza ya GitHub pamoja! Kufikia mwisho wa hapa, utakuwa na kona yako ndogo ya mtandao ambapo misimbo yako inaishi, na utakuwa umefanya "commit" yako ya kwanza (hiyo ni lugha ya waandaaji programu kwa kuhifadhi kazi yako kwa njia ya akili sana).
>
> Hii ni wakati maalum sana – unakaribia kujiunga rasmi na jamii ya kimataifa ya waandaaji programu! Bado nakumbuka msisimko wa kuunda hifadhi yangu ya kwanza na kufikiria "Wow, kweli ninafanya hili!"

Hebu tuendelee na safari hii pamoja, hatua kwa hatua. Chukua muda wako kwa kila sehemu – hakuna zawadi kwa haraka, na naahidi kila hatua itakuwa na maana. Kumbuka, kila nyota wa programu unayempenda aliwahi kukaa mahali ulipo, akijiandaa kuunda hifadhi yake ya kwanza. Si hilo ni la kuvutia?

> Tazama video
> 
> [![Video ya misingi ya Git na GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Hebu Tufanye Hili Pamoja:**

1. **Unda hifadhi yako kwenye GitHub**. Nenda GitHub.com na tafuta kitufe cha kijani kibichi **New** (au alama ya **+** kwenye kona ya juu kulia). Bonyeza na uchague **New repository**.

   Hivi ndivyo unavyofanya:
   1. Peana hifadhi yako jina – lifanye kuwa na maana kwako!
   1. Ongeza maelezo ikiwa unataka (hii husaidia wengine kuelewa mradi wako unahusu nini)
   1. Amua ikiwa unataka iwe ya umma (kila mtu anaweza kuiona) au ya binafsi (kwa ajili yako tu)
   1. Ninapendekeza kuangalia kisanduku cha kuongeza faili ya README – ni kama ukurasa wa mbele wa mradi wako
   1. Bonyeza **Create repository** na sherehekea – umeunda hifadhi yako ya kwanza! 🎉

2. **Elekea kwenye folda ya mradi wako**. Sasa hebu tufungue terminal yako (usijali, si ya kutisha kama inavyoonekana!). Tunahitaji kuambia kompyuta yako mahali faili za mradi wako zipo. Andika amri hii:

   ```bash
   cd [name of your folder]
   ```

   **Tunachofanya hapa:**
   - Kimsingi tunasema "Hey kompyuta, nipeleke kwenye folda ya mradi wangu"
   - Hii ni kama kufungua folda maalum kwenye desktop yako, lakini tunafanya kwa amri za maandishi
   - Badilisha `[name of your folder]` na jina halisi la folda ya mradi wako

3. **Geuza folda yako kuwa hifadhi ya Git**. Hapa ndipo uchawi unapotokea! Andika:

   ```bash
   git init
   ```

   **Hapa ndipo kilichotokea (mambo ya kuvutia!):**
   - Git imeunda folda ya siri `.git` kwenye mradi wako – huwezi kuiona, lakini ipo!
   - Folda yako ya kawaida sasa ni "hifadhi" inayoweza kufuatilia kila mabadiliko unayofanya
   - Fikiria kama kutoa folda yako nguvu za kipekee za kukumbuka kila kitu

4. **Angalia kinachoendelea**. Hebu tuone Git inafikiria nini kuhusu mradi wako kwa sasa:

   ```bash
   git status
   ```

   **Kuelewa kinachosemwa na Git:**
   
   Unaweza kuona kitu kinachoonekana kama hiki:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Usiogope! Hii inamaanisha:**
   - Faili za **nyekundu** ni faili ambazo zina mabadiliko lakini haziko tayari kuhifadhiwa bado
   - Faili za **kijani** (ukiziona) ziko tayari kuhifadhiwa
   - Git inakuwa msaada kwa kukuambia hasa unachoweza kufanya baadaye

   > 💡 **Ushauri wa Wataalamu**: Amri ya `git status` ni rafiki yako bora! Tumia wakati wowote unapochanganyikiwa kuhusu kinachoendelea. Ni kama kuuliza Git "Hey, hali ikoje sasa?"

5. **Andaa faili zako kwa kuhifadhi** (hii inaitwa "staging"):

   ```bash
   git add .
   ```

   **Tulichofanya:**
   - Tuliambia Git "Hey, nataka niweke FAILI ZOTE kwenye hifadhi inayofuata"
   - `.` ni kama kusema "kila kitu kwenye folda hii"
   - Sasa faili zako ziko "staged" na ziko tayari kwa hatua inayofuata

   **Unataka kuchagua zaidi?** Unaweza kuongeza faili maalum tu:

   ```bash
   git add [file or folder name]
   ```

   **Kwa nini unaweza kutaka kufanya hivi?**
   - Wakati mwingine unataka kuhifadhi mabadiliko yanayohusiana pamoja
   - Inakusaidia kupanga kazi yako katika sehemu za kimantiki
   - Inafanya iwe rahisi kuelewa kilichobadilika na lini

   **Umebadilisha mawazo?** Usijali! Unaweza kuondoa faili kutoka kwa "staged" kama hivi:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Usijali – hii haifuti kazi yako, inachukua tu faili kutoka kwenye "hifadhi inayofuata".

6. **Hifadhi kazi yako milele** (kutengeneza commit yako ya kwanza!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Hongera! Umefanya commit yako ya kwanza!**
   
   **Hapa ndipo kilichotokea:**
   - Git ilichukua "picha" ya faili zako zote zilizowekwa kwenye hatua hii halisi
   - Ujumbe wako wa commit "first commit" unaelezea kuhusu hatua hii ya kuhifadhi
   - Git ilitoa ID ya kipekee kwa picha hii ili uweze kuipata wakati wowote baadaye
   - Umeanza rasmi kufuatilia historia ya mradi wako!

   > 💡 **Ujumbe wa commit wa baadaye**: Kwa commit zako zijazo, kuwa na maelezo zaidi! Badala ya "updated stuff", jaribu "Ongeza fomu ya mawasiliano kwenye ukurasa wa mwanzo" au "Rekebisha hitilafu ya menyu ya urambazaji". Nafsi yako ya baadaye itakushukuru!

7. **Unganisha mradi wako wa ndani na GitHub**. Kwa sasa, mradi wako upo tu kwenye kompyuta yako. Hebu tuunganishe na hifadhi yako ya GitHub ili uweze kushiriki na dunia!

   Kwanza, nenda kwenye ukurasa wa hifadhi yako ya GitHub na nakili URL. Kisha rudi hapa na andika:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Badilisha URL hiyo na URL halisi ya hifadhi yako!) 

   **Hapa ndipo kilichotokea:**
   - Tumeunda muunganisho kati ya mradi wako wa ndani na hifadhi yako ya GitHub
   - "Origin" ni jina la utani tu kwa hifadhi yako ya GitHub – ni kama kuongeza mawasiliano kwenye simu yako
   - Sasa Git yako ya ndani inajua wapi pa kutuma msimbo wako unapokuwa tayari kuushiriki

   💡 **Njia rahisi zaidi**: Ikiwa umeweka GitHub CLI, unaweza kufanya hili kwa amri moja:
   ```bash
   gh repo create my-repo --public --push --source=.
   ```

8. **Tuma msimbo wako kwenye GitHub** (wakati mkubwa!):

   ```bash
   git push -u origin main
   ```

   **🚀 Hii ndiyo! Unapakia msimbo wako kwenye GitHub!**
   
   **Kinachotokea:**
   - Mabadiliko yako yanatoka kwenye kompyuta yako kwenda GitHub
   - Bendera ya `-u` inaweka muunganisho wa kudumu ili usukumo wa baadaye uwe rahisi
   - "main" ni jina la tawi lako kuu (kama folda kuu)
   - Baada ya hili, unaweza tu kuandika `git push` kwa upakiaji wa baadaye!

   💡 **Kumbuka haraka**: Ikiwa tawi lako linaitwa kitu kingine (kama "master"), tumia jina hilo. Unaweza kuangalia kwa `git branch --show-current`.

9. **Mpangilio wako mpya wa kila siku wa usimbaji** (hapa ndipo inakuwa ya kuvutia!):

   Kuanzia sasa, kila unapofanya mabadiliko kwenye mradi wako, una hatua hizi tatu rahisi za kufuata:

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```

   **Hii inakuwa mapigo ya moyo wa usimbaji wako:**
   - Fanya mabadiliko mazuri kwenye msimbo wako ✨
   - Yape nafasi kwa `git add` ("Hey Git, zingatia mabadiliko haya!")
   - Yahifadhi kwa `git commit` na ujumbe wa kuelezea (wewe wa baadaye atakushukuru!)
   - Yashiriki na dunia kwa kutumia `git push` 🚀
   - Rudia tena – kwa kweli, hii inakuwa ya kawaida kama kupumua!

   Napenda mtiririko huu kwa sababu ni kama kuwa na sehemu nyingi za kuhifadhi katika mchezo wa video. Umefanya mabadiliko unayopenda? Yathibitishe! Unataka kujaribu kitu hatari? Hakuna shida – unaweza kurudi kwenye uhifadhi wako wa mwisho ikiwa mambo yataenda vibaya!

   > 💡 **Kidokezo**: Unaweza pia kutaka kutumia faili ya `.gitignore` ili kuzuia faili ambazo hutaki kufuatilia zisionekane kwenye GitHub - kama faili ya maelezo unayohifadhi kwenye folda hiyo hiyo lakini haina nafasi kwenye hifadhi ya umma. Unaweza kupata templeti za faili za `.gitignore` kwenye [.gitignore templates](https://github.com/github/gitignore) au kuunda moja kwa kutumia [gitignore.io](https://www.toptal.com/developers/gitignore).

#### Mitiririko ya kisasa ya Git

Fikiria kutumia mbinu hizi za kisasa:

- **Conventional Commits**: Tumia muundo wa ujumbe wa uhifadhi uliosimamiwa kama `feat:`, `fix:`, `docs:`, nk. Jifunze zaidi kwenye [conventionalcommits.org](https://www.conventionalcommits.org/)
- **Atomic commits**: Fanya kila uhifadhi uwakilishe mabadiliko moja ya kimantiki
- **Frequent commits**: Hifadhi mara kwa mara na ujumbe wa kuelezea badala ya uhifadhi mkubwa, wa nadra

#### Ujumbe wa uhifadhi

Mstari mzuri wa somo la uhifadhi wa Git unakamilisha sentensi ifuatayo:
Ikiwa itatumika, uhifadhi huu uta <weka mstari wako wa somo hapa>

Kwa somo tumia hali ya amri, wakati wa sasa: "badilisha" si "imebadilishwa" wala "inabadilisha". 
Kama ilivyo kwenye somo, kwenye mwili (hiari) pia tumia hali ya amri, wakati wa sasa. Mwili unapaswa kujumuisha motisha ya mabadiliko na kulinganisha hii na tabia ya awali. Unafafanua `kwa nini`, si `jinsi`.

✅ Chukua dakika chache kuzunguka GitHub. Je, unaweza kupata ujumbe mzuri wa uhifadhi? Je, unaweza kupata mmoja wa kiwango cha chini sana? Ni taarifa gani unadhani ni muhimu zaidi na ya manufaa kufikisha kwenye ujumbe wa uhifadhi?

## Kufanya kazi na Wengine (Sehemu ya Kufurahisha!)

Shikilia kofia yako kwa sababu HII ndiyo ambapo GitHub inakuwa ya kichawi kabisa! 🪄 Umejifunza kusimamia msimbo wako mwenyewe, lakini sasa tunaingia kwenye sehemu ninayopenda zaidi – kushirikiana na watu wa ajabu kutoka kote ulimwenguni.

Fikiria hili: unaamka kesho na kuona kwamba mtu huko Tokyo ameboresha msimbo wako wakati ulikuwa umelala. Kisha mtu huko Berlin anarekebisha hitilafu ambayo umekuwa ukikwama nayo. Kufikia alasiri, msanidi programu huko São Paulo ameongeza kipengele ambacho hata hukuwahi kufikiria. Hiyo siyo hadithi ya kisayansi – hiyo ni Jumanne tu katika ulimwengu wa GitHub!

Kinachonifanya niwe na furaha sana ni kwamba ujuzi wa kushirikiana unaojifunza sasa? Hizi ni mbinu SAWA ambazo timu huko Google, Microsoft, na kampuni unazozipenda hutumia kila siku. Hujifunzi tu zana nzuri – unajifunza lugha ya siri inayofanya ulimwengu mzima wa programu kufanya kazi pamoja.

Kwa kweli, mara tu unapopata msisimko wa kuwa na mtu kuunganisha ombi lako la kwanza la kuvuta, utaelewa kwa nini wasanidi programu wanakuwa na shauku sana kuhusu chanzo wazi. Ni kama kuwa sehemu ya mradi mkubwa zaidi, wa ubunifu zaidi wa timu duniani!

> Tazama video
>
> [![Video ya misingi ya Git na GitHub](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Sababu kuu ya kuweka vitu kwenye GitHub ilikuwa kufanya iwezekane kushirikiana na wasanidi programu wengine.

Katika hifadhi yako, nenda kwenye `Insights > Community` ili kuona jinsi mradi wako unavyolinganishwa na viwango vya jamii vinavyopendekezwa.

Unataka kufanya hifadhi yako ionekane kitaalamu na ya kuvutia? Nenda kwenye hifadhi yako na bonyeza `Insights > Community`. Kipengele hiki kizuri kinaonyesha jinsi mradi wako unavyolinganishwa na kile jamii ya GitHub inachokiona kama "mazoea mazuri ya hifadhi."

> 🎯 **Kufanya Mradi Wako Kung'aa**: Hifadhi iliyoandaliwa vizuri na nyaraka nzuri ni kama kuwa na duka safi, la kuvutia. Inaonyesha watu kwamba unajali kazi yako na inawafanya wengine kutaka kuchangia!

**Hivi ndivyo hifadhi inavyokuwa ya ajabu:**

| Kitu cha Kuongeza | Kwa Nini Ni Muhimu | Kinachokufanyia |
|-------------------|-------------------|-----------------|
| **Maelezo** | Muonekano wa kwanza ni muhimu! | Watu wanajua mara moja mradi wako unafanya nini |
| **README** | Ukurasa wa mbele wa mradi wako | Kama mwongozo wa kirafiki kwa wageni wapya |
| **Miongozo ya Kuchangia** | Inaonyesha unakaribisha msaada | Watu wanajua hasa jinsi wanavyoweza kukusaidia |
| **Kanuni za Maadili** | Inaunda nafasi ya kirafiki | Kila mtu anahisi kukaribishwa kushiriki |
| **Leseni** | Uwazi wa kisheria | Wengine wanajua jinsi wanavyoweza kutumia msimbo wako |
| **Sera ya Usalama** | Inaonyesha unawajibika | Inaonyesha mazoea ya kitaalamu |

> 💡 **Kidokezo cha Kitaalamu**: GitHub hutoa templeti za faili zote hizi. Unapounda hifadhi mpya, angalia masanduku ili kuunda faili hizi moja kwa moja.

**Vipengele vya Kisasa vya GitHub vya Kuchunguza:**

🤖 **Otomatiki & CI/CD:**
- **GitHub Actions** kwa majaribio ya kiotomatiki na usambazaji
- **Dependabot** kwa masasisho ya kiotomatiki ya utegemezi

💬 **Jamii & Usimamizi wa Mradi:**
- **GitHub Discussions** kwa mazungumzo ya jamii zaidi ya masuala
- **GitHub Projects** kwa usimamizi wa mradi wa mtindo wa kanban
- **Sheria za ulinzi wa tawi** za kutekeleza viwango vya ubora wa msimbo

Rasilimali hizi zote zitasaidia kuingiza wanachama wapya wa timu. Na hizi ndizo kawaida vitu ambavyo wachangiaji wapya huangalia kabla hata ya kuangalia msimbo wako, ili kujua ikiwa mradi wako ni mahali sahihi pa kutumia muda wao.

✅ Faili za README, ingawa zinachukua muda kuandaa, mara nyingi hupuuzwa na waangalizi wenye shughuli nyingi. Je, unaweza kupata mfano wa moja iliyoelezea hasa? Kumbuka: kuna [zana za kusaidia kuunda README nzuri](https://www.makeareadme.com/) ambazo unaweza kupenda kujaribu.

### Kazi: Unganisha msimbo fulani

Nyaraka za kuchangia husaidia watu kuchangia mradi. Inaelezea ni aina gani za michango unayotafuta na jinsi mchakato unavyofanya kazi. Wachangiaji watahitaji kupitia mfululizo wa hatua ili waweze kuchangia kwenye hifadhi yako ya GitHub:

1. **Kufork hifadhi yako** Labda utataka watu _kufork_ mradi wako. Kufork inamaanisha kuunda nakala ya hifadhi yako kwenye wasifu wao wa GitHub.
1. **Clone**. Kutoka hapo wataiga mradi kwenye kompyuta yao ya ndani. 
1. **Unda tawi**. Utataka kuwaomba waunde _tawi_ kwa kazi yao. 
1. **Kuzingatia mabadiliko yao kwenye eneo moja**. Waombe wachangiaji kuzingatia michango yao kwenye kitu kimoja kwa wakati mmoja - kwa njia hiyo nafasi za kuweza _kuunganisha_ kazi yao ni kubwa. Fikiria wanaandika marekebisho ya hitilafu, kuongeza kipengele kipya, na kusasisha majaribio kadhaa - vipi ikiwa unataka, au unaweza tu kutekeleza 2 kati ya 3, au 1 kati ya 3 mabadiliko?

✅ Fikiria hali ambapo matawi ni muhimu sana kwa kuandika na kusafirisha msimbo mzuri. Ni matumizi gani unayoweza kufikiria?

> Kumbuka, kuwa mabadiliko unayotaka kuona duniani, na unda matawi kwa kazi yako mwenyewe pia. Uhifadhi wowote unaofanya utakuwa kwenye tawi ambalo umechagua "kuingia" kwa sasa. Tumia `git status` kuona ni tawi gani hilo.

Hebu tuendelee kupitia mtiririko wa mchango wa mchangiaji. Fikiria mchangiaji tayari ame _fork_ na _clone_ hifadhi hivyo ana hifadhi ya Git tayari kufanyiwa kazi, kwenye kompyuta yake ya ndani:

1. **Unda tawi**. Tumia amri `git branch` kuunda tawi ambalo litakuwa na mabadiliko wanayokusudia kuchangia:

   ```bash
   git branch [branch-name]
   ```

   > 💡 **Njia ya Kisasa**: Unaweza pia kuunda na kubadili tawi jipya kwa amri moja:
   ```bash
   git switch -c [branch-name]
   ```

1. **Badilisha kwenye tawi la kazi**. Badilisha kwenye tawi lililobainishwa na usasishe saraka ya kazi kwa `git switch`:

   ```bash
   git switch [branch-name]
   ```

   > 💡 **Kumbuka ya Kisasa**: `git switch` ni mbadala wa kisasa wa `git checkout` wakati wa kubadilisha matawi. Ni wazi zaidi na salama kwa wanaoanza.

1. **Fanya kazi**. Kwa wakati huu unataka kuongeza mabadiliko yako. Usisahau kumwambia Git kuhusu hilo kwa amri zifuatazo:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   > ⚠️ **Ubora wa Ujumbe wa Uhifadhi**: Hakikisha unatoa uhifadhi wako jina zuri, kwa ajili yako na kwa msimamizi wa hifadhi unayesaidia. Kuwa maalum kuhusu kile ulichobadilisha!

1. **Unganisha kazi yako na tawi la `main`**. Wakati fulani unamaliza kazi na unataka kuunganisha kazi yako na ile ya tawi la `main`. Tawi la `main` linaweza kuwa limebadilika wakati huo kwa hivyo hakikisha unalisasisha kwanza na amri zifuatazo:

   ```bash
   git switch main
   git pull
   ```

   Kwa wakati huu unataka kuhakikisha kwamba mizozo yoyote, hali ambapo Git haiwezi _kuunganisha_ mabadiliko kwa urahisi inatokea kwenye tawi lako la kazi. Kwa hivyo endesha amri zifuatazo:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Amri ya `git merge main` italeta mabadiliko yote kutoka `main` kwenye tawi lako. Tunatumaini unaweza tu kuendelea. Ikiwa sivyo, VS Code itakuonyesha wapi Git _imechanganyikiwa_ na unarekebisha faili zilizoathiriwa ili kusema ni maudhui gani yaliyo sahihi zaidi.

   💡 **Njia mbadala ya kisasa**: Fikiria kutumia `git rebase` kwa historia safi zaidi:
   ```bash
   git rebase main
   ```
   Hii inacheza tena uhifadhi wako juu ya tawi kuu la hivi karibuni, ikitengeneza historia ya mstari.

1. **Tuma kazi yako kwenye GitHub**. Kutuma kazi yako kwenye GitHub inamaanisha mambo mawili. Kusukuma tawi lako kwenye hifadhi yako na kisha kufungua PR, Ombi la Kuvuta.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Amri hapo juu inaunda tawi kwenye hifadhi yako ya kufork.

1. **Fungua PR**. Kisha, unataka kufungua PR. Unafanya hivyo kwa kwenda kwenye hifadhi ya kufork kwenye GitHub. Utaona dalili kwenye GitHub ambapo inauliza ikiwa unataka kuunda PR mpya, unabonyeza hiyo na unapelekwa kwenye kiolesura ambapo unaweza kubadilisha kichwa cha ujumbe wa uhifadhi, kutoa maelezo yanayofaa zaidi. Sasa msimamizi wa hifadhi uliyofork ataona PR hii na _vidole vimevukwa_ wataithamini na _kuunganisha_ PR yako. Sasa wewe ni mchangiaji, hongera :)

   💡 **Kidokezo cha Kisasa**: Unaweza pia kuunda PRs kwa kutumia GitHub CLI:
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   🔧 **Mazoea bora kwa PRs**:
   - Unganisha masuala yanayohusiana kwa kutumia maneno kama "Fixes #123"
   - Ongeza picha za skrini kwa mabadiliko ya UI
   - Omba wakaguzi maalum
   - Tumia PR za rasimu kwa kazi inayofanyika
   - Hakikisha ukaguzi wote wa CI unakamilika kabla ya kuomba ukaguzi

1. **Safisha**. Inachukuliwa kuwa mazoea mazuri _kusafisha_ baada ya kufanikiwa kuunganisha PR. Unataka kusafisha tawi lako la ndani na tawi ulilosukuma kwenye GitHub. Kwanza hebu tulifute kwa ndani kwa amri ifuatayo:

   ```bash
   git branch -d [branch-name]
   ```

   Hakikisha unakwenda kwenye ukurasa wa GitHub wa hifadhi ya kufork na kuondoa tawi la mbali ulilosukuma kwake.

`Pull request` inaonekana kama neno la kijinga kwa sababu kwa kweli unataka kusukuma mabadiliko yako kwenye mradi. Lakini msimamizi (mmiliki wa mradi) au timu kuu inahitaji kuzingatia mabadiliko yako kabla ya kuunganisha na tawi "kuu" la mradi, kwa hivyo kwa kweli unaomba uamuzi wa mabadiliko kutoka kwa msimamizi.  

Ombi la kuvuta ni mahali pa kulinganisha na kujadili tofauti zilizoletwa kwenye tawi na ukaguzi, maoni, majaribio yaliyojumuishwa, na zaidi. Ombi zuri la kuvuta linafuata takriban sheria sawa na ujumbe wa uhifadhi. Unaweza kuongeza rejeleo kwa suala kwenye ufuatiliaji wa masuala, wakati kazi yako kwa mfano inarekebisha suala. Hii inafanywa kwa kutumia `#` ikifuatiwa na namba ya suala lako. Kwa mfano `#97`.
🤞Vidole vimevukwa kwamba ukaguzi wote utapita na mmiliki wa mradi ataunganisha mabadiliko yako kwenye mradi🤞

Sasisha tawi lako la kazi la ndani na mabadiliko yote mapya kutoka kwenye tawi la mbali linalolingana kwenye GitHub:

`git pull`

## Kuchangia kwa Open Source (Fursa Yako ya Kuleta Mabadiliko!)

Je, uko tayari kwa kitu ambacho kitakushangaza kabisa? 🤯 Hebu tuzungumze kuhusu kuchangia kwenye miradi ya open source – na ninapata msisimko tu kufikiria kushiriki hili nawe!

Hii ni fursa yako ya kuwa sehemu ya kitu cha kipekee sana. Fikiria kuboresha zana ambazo mamilioni ya watengenezaji hutumia kila siku, au kurekebisha hitilafu kwenye programu ambayo marafiki zako wanapenda. Hiyo si ndoto tu – hiyo ndiyo maana ya kuchangia kwenye open source!

Hiki ndicho kinachonipa msisimko kila ninapofikiria: kila zana moja uliyojifunza nayo – mhariri wako wa msimbo, mifumo tutakayoichunguza, hata kivinjari unachosoma hiki ndani – ilianza na mtu kama wewe akifanya mchango wake wa kwanza. Yule mtengenezaji mahiri aliyeunda kiendelezi unachopenda cha VS Code? Wakati mmoja walikuwa mwanzilishi akibonyeza "create pull request" kwa mikono inayotetemeka, kama vile unavyotarajia kufanya.

Na hapa ndipo sehemu nzuri zaidi: jamii ya open source ni kama kukumbatiana kwa pamoja kwa mtandao. Miradi mingi hutafuta kwa bidii wanaoanza na ina masuala yaliyopewa alama "good first issue" mahsusi kwa watu kama wewe! Walezi wa miradi wanapendezwa sana wanapoona wachangiaji wapya kwa sababu wanakumbuka hatua zao za kwanza.

Hujifunzi tu kuandika msimbo hapa – unajiandaa kujiunga na familia ya kimataifa ya wajenzi wanaoamka kila siku wakifikiria "Tunawezaje kuboresha ulimwengu wa kidijitali kidogo zaidi?" Karibu kwenye klabu! 🌟

Kwanza, hebu tupate hifadhi (au **repo**) kwenye GitHub inayokuvutia na ambayo ungependa kuchangia mabadiliko. Utataka kunakili yaliyomo kwenye mashine yako.

✅ Njia nzuri ya kupata hifadhi zinazofaa kwa wanaoanza ni [kutafuta kwa alama 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Nakili hifadhi kwa ndani](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.sw.png)

Kuna njia kadhaa za kunakili msimbo. Njia moja ni "kuiga" yaliyomo ya hifadhi, kwa kutumia HTTPS, SSH, au kutumia GitHub CLI (Command Line Interface).

Fungua terminal yako na iga hifadhi kama hivi:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

Ili kufanya kazi kwenye mradi, nenda kwenye folda sahihi:
`cd ProjectURL`

Unaweza pia kufungua mradi mzima kwa kutumia:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - Mazingira ya maendeleo ya wingu ya GitHub na VS Code kwenye kivinjari
- **[GitHub Desktop](https://desktop.github.com/)** - Programu ya GUI kwa operesheni za Git  
- **[GitHub.dev](https://github.dev)** - Bonyeza kitufe cha `.` kwenye hifadhi yoyote ya GitHub kufungua VS Code kwenye kivinjari
- **VS Code** na kiendelezi cha GitHub Pull Requests

Mwisho, unaweza kupakua msimbo kwenye folda iliyobanwa.

### Mambo machache ya kuvutia kuhusu GitHub

Unaweza kuweka nyota, kutazama na/au "fork" hifadhi yoyote ya umma kwenye GitHub. Unaweza kupata hifadhi zako zilizowekewa nyota kwenye menyu ya kushuka ya juu-kulia. Ni kama kuweka alama ya kurasa, lakini kwa msimbo.

Miradi ina kifuatilia masuala, mara nyingi kwenye GitHub katika kichupo cha "Issues" isipokuwa imeonyeshwa vinginevyo, ambapo watu hujadili masuala yanayohusiana na mradi. Na kichupo cha Pull Requests ni mahali ambapo watu hujadili na kukagua mabadiliko yanayoendelea.

Miradi inaweza pia kuwa na majadiliano katika vikao, orodha za barua pepe, au njia za mazungumzo kama Slack, Discord au IRC.

🔧 **Vipengele vya kisasa vya GitHub**:
- **GitHub Discussions** - Jukwaa la mazungumzo ya jamii lililojengwa ndani
- **GitHub Sponsors** - Kusaidia walezi kifedha  
- **Kichupo cha Usalama** - Ripoti za udhaifu na ushauri wa usalama
- **Kichupo cha Actions** - Tazama mtiririko wa kazi otomatiki na CI/CD
- **Kichupo cha Insights** - Takwimu kuhusu wachangiaji, ahadi, na afya ya mradi
- **Kichupo cha Projects** - Zana za usimamizi wa miradi zilizojengwa ndani ya GitHub

✅ Angalia hifadhi yako mpya ya GitHub na jaribu mambo kadhaa, kama kuhariri mipangilio, kuongeza taarifa kwenye hifadhi yako, kuunda mradi (kama bodi ya Kanban), na kuweka GitHub Actions kwa otomatiki. Kuna mengi unaweza kufanya!

---

## 🚀 Changamoto 

Sawa, ni wakati wa kujaribu nguvu zako mpya za GitHub! 🚀 Hapa kuna changamoto itakayokufanya uelewe kila kitu kwa njia ya kuridhisha zaidi:

Chukua rafiki (au yule mwanafamilia ambaye kila mara huuliza unafanya nini na "vitu vyote vya kompyuta" hivi) na anza safari ya pamoja ya kuandika msimbo! Hapa ndipo uchawi halisi hutokea – unda mradi, wacha waifork, tengeneza matawi kadhaa, na unganisha mabadiliko kama wataalamu mnaokuwa.

Sitakuficha – labda mtacheka wakati fulani (hasa mnapojaribu kubadilisha mstari mmoja), labda mtashangaa kidogo, lakini hakika mtakuwa na nyakati za "aha!" za kushangaza zinazofanya kujifunza yote kuwa na thamani. Zaidi ya hayo, kuna kitu maalum kuhusu kushiriki muunganiko wa kwanza uliofanikiwa na mtu mwingine – ni kama sherehe ndogo ya jinsi mlivyofika mbali!

Huna rafiki wa kuandika msimbo bado? Usijali kabisa! Jamii ya GitHub imejaa watu wenye ukarimu sana wanaokumbuka jinsi ilivyokuwa kuwa mpya. Tafuta hifadhi zilizo na lebo za "good first issue" – kimsingi zinasema "Hey wanaoanza, njoo mjifunze nasi!" Hiyo ni ya kushangaza kiasi gani?

## Jaribio la Baada ya Somo
[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/en/)

## Mapitio & Endelea Kujifunza

Phew! 🎉 Tazama wewe – umeshinda misingi ya GitHub kama bingwa halisi! Ikiwa ubongo wako unahisi umejaa kidogo sasa, hiyo ni kawaida kabisa na kwa kweli ni ishara nzuri. Umejifunza zana ambazo zilinichukua wiki kujisikia vizuri nazo nilipoanza.

Git na GitHub ni zana zenye nguvu sana (kama, nguvu sana), na kila mtengenezaji ninayemjua – ikiwa ni pamoja na wale wanaoonekana kama wachawi sasa – walilazimika kufanya mazoezi na kujikwaa kidogo kabla ya kila kitu kuingia akilini. Ukweli kwamba umemaliza somo hili ina maana tayari uko njiani kuelekea kufahamu baadhi ya zana muhimu zaidi katika mkoba wa zana wa mtengenezaji.

Hapa kuna rasilimali za kushangaza kabisa zitakazokusaidia kufanya mazoezi na kuwa bora zaidi:

- [Mwongozo wa kuchangia kwa programu ya open source](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Ramani yako ya kuleta mabadiliko
- [Karatasi ya mkato ya Git](https://training.github.com/downloads/github-git-cheat-sheet/) – Weka hii karibu kwa marejeleo ya haraka!

Na kumbuka: mazoezi huleta maendeleo, si ukamilifu! Kadri unavyotumia Git na GitHub, ndivyo inavyokuwa ya kawaida zaidi. GitHub imeunda kozi za maingiliano za kushangaza zinazokuruhusu kufanya mazoezi katika mazingira salama:

- [Utangulizi wa GitHub](https://github.com/skills/introduction-to-github)
- [Wasiliana kwa kutumia Markdown](https://github.com/skills/communicate-using-markdown)  
- [Kurasa za GitHub](https://github.com/skills/github-pages)
- [Kusimamia migogoro ya muunganiko](https://github.com/skills/resolve-merge-conflicts)

**Unahisi kuwa na ujasiri? Angalia zana hizi za kisasa:**
- [Nyaraka za GitHub CLI](https://cli.github.com/manual/) – Kwa wakati unataka kujisikia kama mchawi wa mstari wa amri
- [Nyaraka za GitHub Codespaces](https://docs.github.com/en/codespaces) – Andika msimbo kwenye wingu!
- [Nyaraka za GitHub Actions](https://docs.github.com/en/actions) – Otematiki kila kitu
- [Mazoea bora ya Git](https://www.atlassian.com/git/tutorials/comparing-workflows) – Pandisha kiwango cha mtiririko wako wa kazi 

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Unda mradi wa maendeleo ya wavuti wa kushirikiana unaoonyesha mtiririko kamili wa GitHub uliyojifunza katika somo hili. Changamoto hii itakusaidia kufanya mazoezi ya uundaji wa hifadhi, vipengele vya ushirikiano, na mtiririko wa kazi wa Git wa kisasa katika hali halisi.

**Kichocheo:** Unda hifadhi mpya ya umma ya GitHub kwa mradi rahisi wa "Rasilimali za Maendeleo ya Wavuti". Hifadhi inapaswa kujumuisha faili ya README.md iliyopangwa vizuri inayoorodhesha zana na rasilimali muhimu za maendeleo ya wavuti, zilizopangwa kwa kategoria (HTML, CSS, JavaScript, nk). Weka hifadhi na viwango sahihi vya jamii ikiwa ni pamoja na leseni, miongozo ya kuchangia, na kanuni za maadili. Unda angalau matawi mawili ya vipengele: moja kwa kuongeza rasilimali za CSS na nyingine kwa rasilimali za JavaScript. Fanya ahadi kwa kila tawi na ujumbe wa ahadi unaoelezea, kisha unda maombi ya muunganiko ili kuunganisha mabadiliko kurudi kwenye tawi kuu. Washa vipengele vya GitHub kama Masuala, Majadiliano, na weka mtiririko wa kazi wa GitHub Actions wa ukaguzi wa otomatiki.

## Kazi 

Dhamira yako, ikiwa utaamua kuikubali: Kamilisha kozi ya [Utangulizi wa GitHub](https://github.com/skills/introduction-to-github) kwenye Ujuzi wa GitHub. Kozi hii ya maingiliano itakuruhusu kufanya mazoezi ya kila kitu ulichojifunza katika mazingira salama, yanayoongozwa. Zaidi ya hayo, utapata beji nzuri unapomaliza! 🏅

**Unahisi kuwa tayari kwa changamoto zaidi?**
- Weka uthibitisho wa SSH kwa akaunti yako ya GitHub (hakuna nywila tena!)
- Jaribu kutumia GitHub CLI kwa operesheni zako za kila siku za Git
- Unda hifadhi yenye mtiririko wa kazi wa GitHub Actions
- Chunguza GitHub Codespaces kwa kufungua hifadhi hii katika mhariri wa wingu

Kumbuka: kila mtaalamu alikuwa mwanzilishi. Unaweza kufanya hili! 💪

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.