<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9412a6afd024d4fe27c49bf824c73992",
  "translation_date": "2025-10-20T21:04:34+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "tl"
}
-->
# Panimula sa GitHub

Ang GitHub ay isa sa pinakamahalagang platform sa modernong web development, nagsisilbing pundasyon ng kolaborasyon para sa milyun-milyong developer sa buong mundo. Isipin ito bilang kombinasyon ng cloud storage para sa iyong code at isang social network para sa mga programmer – dito nagbabahagi ng trabaho ang mga developer, nagtutulungan sa mga proyekto, at nag-aambag sa open-source community na siyang nagpapatakbo ng malaking bahagi ng internet na ginagamit mo araw-araw.

Sa araling ito, matutuklasan mo kung paano binabago ng GitHub ang paraan ng pagtutulungan ng mga developer. Matututuhan mong subaybayan ang mga pagbabago sa iyong code, makipagtulungan sa iba nang walang kahirap-hirap, at mag-ambag sa mga proyektong ginagamit ng milyun-milyong tao. Hindi lang ito tungkol sa pag-iimbak ng code online – ito ay tungkol sa pagsali sa isang pandaigdigang komunidad ng mga developer at pag-aaral ng mga pangunahing workflow na ginagamit ng bawat propesyonal na developer.

Sa pagtatapos ng araling ito, magkakaroon ka ng sarili mong GitHub repository, maiintindihan kung paano pamahalaan ang mga pagbabago sa code gamit ang Git, at malalaman kung paano mag-ambag sa mga open-source na proyekto. Ang mga kasanayang ito ang magiging pundasyon mo sa pakikipagtulungan sa iba pang mga developer sa buong paglalakbay mo sa web development. Tara na at tuklasin ang kapangyarihan ng collaborative coding!

![Intro to GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app)

## Panimula

Bago tayo magsimula sa mga aktibidad sa GitHub, magtatag muna tayo ng pundasyon na kakailanganin mo para magtagumpay. Ang pag-unawa sa mga pangunahing konsepto at ang tamang pag-configure ng iyong development environment ay magpapadali sa iyong paglalakbay sa GitHub.

Sa seksyong ito, tatalakayin natin ang mahahalagang kaalaman at mga tool na kailangan ng bawat developer kapag nagtatrabaho sa GitHub. Huwag mag-alala kung may mga konseptong hindi pamilyar sa simula – gagabayan ka namin sa bawat hakbang at ipapaliwanag kung bakit mahalaga ang mga tool na ito para sa mga web developer.

Sa araling ito, tatalakayin natin:

- pagsubaybay sa trabaho mo sa iyong makina
- pakikipagtulungan sa mga proyekto kasama ang iba
- kung paano mag-ambag sa open-source software

### Mga Kinakailangan

Ang tamang pag-setup ng iyong development environment ay mahalaga para sa maayos na karanasan sa GitHub. Isipin ito bilang paghahanda ng iyong toolkit bago magsimula sa isang proyekto – ang tamang mga tool na naka-configure nang maayos ay makakatipid sa iyo ng oras at frustration sa hinaharap.

Siguraduhin nating mayroon ka ng lahat ng kailangan mo para epektibong makipagtulungan gamit ang Git at GitHub.

Bago ka magsimula, kailangan mong suriin kung naka-install na ang Git. Sa terminal, i-type:  
`git --version`

Kung hindi naka-install ang Git, [i-download ang Git](https://git-scm.com/downloads). Pagkatapos, i-setup ang iyong lokal na Git profile sa terminal:

> 💡 **Unang Setup**: Ang mga command na ito ay nagsasabi sa Git kung sino ka. Ang impormasyong ito ay ilalagay sa bawat commit na gagawin mo, kaya pumili ng pangalan at email na komportable kang ibahagi sa publiko.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Para suriin kung naka-configure na ang Git, maaari mong i-type:  
```bash
git config --list
```

Kakailanganin mo rin ng GitHub account, isang code editor (tulad ng Visual Studio Code), at kailangang buksan ang iyong terminal (o: command prompt).

Pumunta sa [github.com](https://github.com/) at gumawa ng account kung wala ka pa, o mag-login at punan ang iyong profile.

💡 **Modernong Tip**: Isaalang-alang ang pag-setup ng [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) o paggamit ng [GitHub CLI](https://cli.github.com/) para sa mas madaling authentication nang walang password.

✅ Hindi lang GitHub ang tanging code repository sa mundo; may iba pang mga platform, ngunit ang GitHub ang pinakakilala.

### Paghahanda

Kakailanganin mo ng folder na may code project sa iyong lokal na makina (laptop o PC), at isang pampublikong repository sa GitHub, na magsisilbing halimbawa kung paano mag-ambag sa mga proyekto ng iba.

### Mga Modernong Praktika sa Seguridad

Ang seguridad sa software development ay hindi lang mahalaga – ito ay esensyal. Habang sinisimulan mo ang iyong paglalakbay sa GitHub, ang pagtatag ng mga secure na praktika mula sa simula ay magpoprotekta sa iyong code, mga kasamahan, at mga proyektong inaambagan mo.

Ang mga modernong workflow sa development ay inuuna ang seguridad sa bawat hakbang. Tuklasin natin ang mga pangunahing praktika sa seguridad na dapat malaman ng bawat developer kapag nagtatrabaho sa GitHub at Git.

Kapag nagtatrabaho sa GitHub, mahalagang sundin ang mga pinakamahusay na praktika sa seguridad:

| Lugar ng Seguridad | Pinakamahusay na Praktika | Bakit Mahalaga |
|--------------------|--------------------------|---------------|
| **Authentication** | Gumamit ng SSH keys o Personal Access Tokens | Ang mga password ay hindi gaanong secure at unti-unting inaalis |
| **Two-Factor Authentication** | I-enable ang 2FA sa iyong GitHub account | Nagdadagdag ng karagdagang proteksyon sa account |
| **Seguridad ng Repository** | Huwag kailanman mag-commit ng sensitibong impormasyon | Ang mga API keys at password ay hindi dapat nasa pampublikong repos |
| **Pamamahala ng Dependency** | I-enable ang Dependabot para sa mga update | Pinapanatiling secure at updated ang iyong mga dependency |

> ⚠️ **Mahalagang Paalala sa Seguridad**: Huwag kailanman mag-commit ng mga API keys, password, o iba pang sensitibong impormasyon sa anumang repository. Gumamit ng environment variables at `.gitignore` files para protektahan ang sensitibong data.

**Modernong Setup ng Authentication:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Pro Tip**: Ang SSH keys ay nag-aalis ng pangangailangang maglagay ng password nang paulit-ulit at mas secure kaysa sa tradisyunal na mga paraan ng authentication.

---

## Pamamahala ng Code

Ngayon na nauunawaan mo ang kahalagahan ng GitHub at na-setup mo na ang iyong environment, simulan natin ang mga praktikal na kasanayan na gagamitin mo araw-araw bilang isang developer. Ang pamamahala ng code gamit ang Git ay parang pag-maintain ng detalyadong journal ng ebolusyon ng iyong proyekto – bawat pagbabago, desisyon, at milestone ay maingat na nasusubaybayan at naitatala.

Isipin ang Git bilang iyong time machine sa coding. Makikita mo kung ano ang nagbago, kailan ito nagbago, at bakit ito nagbago. Napakahalaga nito lalo na kapag nagtatrabaho sa mga komplikadong proyekto o nakikipagtulungan sa iba.

Halimbawa, mayroon kang folder sa iyong lokal na makina na may code project at gusto mong simulan ang pagsubaybay sa iyong progreso gamit ang git – ang version control system. Inihahambing ng iba ang paggamit ng git sa pagsusulat ng love letter para sa iyong hinaharap na sarili. Sa pagbabasa ng iyong commit messages makalipas ang ilang araw, linggo, o buwan, maaalala mo kung bakit mo ginawa ang isang desisyon, o "i-rollback" ang isang pagbabago – iyon ay, kung nagsusulat ka ng magagandang "commit messages."

### Gawain: Gumawa ng repository at mag-commit ng code  

> 🎯 **Layunin ng Pag-aaral**: Sa pagtatapos ng gawaing ito, makakagawa ka ng iyong unang GitHub repository at makakagawa ng iyong unang commit. Ito ang iyong unang hakbang sa mundo ng version control!

> Panoorin ang video
> 
> [![Git at GitHub basics video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Step-by-Step Workflow:**

1. **Gumawa ng repository sa GitHub**. Sa GitHub.com, sa tab ng repositories, o mula sa navigation bar sa itaas-kanan, hanapin ang **New** button (green button) o ang **+** dropdown at piliin ang **New repository**.

   1. Bigyan ng pangalan ang iyong repository (folder)
   1. Magdagdag ng description (opsyonal pero inirerekomenda)
   1. Piliin kung gagawin itong pampubliko o pribado
   1. Isaalang-alang ang pagdagdag ng README file, .gitignore, at lisensya
   1. Piliin ang **Create repository**.

1. **Pumunta sa iyong working folder**. Sa iyong terminal, lumipat sa folder (kilala rin bilang directory) na gusto mong simulan ang pagsubaybay. I-type:  
   ```bash
   cd [name of your folder]
   ```

   **Ano ang ginagawa ng command na ito:**
   - **Lumipat** sa directory ng iyong proyekto kung saan matatagpuan ang iyong mga code files
   - **Ihanda** ang environment para sa Git initialization at tracking

1. **I-initialize ang git repository**. Sa iyong proyekto, i-type:  
   ```bash
   git init
   ```

   **Hakbang-hakbang, narito ang nangyayari:**
   - **Gumawa** ng nakatagong `.git` folder na naglalaman ng lahat ng impormasyon sa version control
   - **I-transform** ang iyong karaniwang folder sa isang Git repository na maaaring mag-track ng mga pagbabago
   - **I-setup** ang pundasyon para sa version control sa iyong proyekto

1. **Suriin ang status**. Para suriin ang status ng iyong repository, i-type:  
   ```bash
   git status
   ```

   **Pag-unawa sa output:**
   
   Ang output ay maaaring ganito ang hitsura:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Ano ang dapat mong malaman tungkol sa output na ito:**
   - **Pulang teksto** ay karaniwang nagpapahiwatig ng mga file na may mga pagbabago ngunit hindi pa handa para sa commit
   - **Berdeng teksto** ay nagpapakita ng mga file na naka-stage at handa nang i-commit
   - **Mga kapaki-pakinabang na hint** ay ibinibigay tungkol sa mga susunod na command na maaari mong gamitin

   > 💡 **Pag-unawa sa Git Status**: Ang command na ito ang iyong matalik na kaibigan! Sinasabi nito sa iyo kung ano ang nakikita ng Git sa iyong proyekto at kung anong mga aksyon ang maaari mong gawin.

   Ang `git status` command ay nagsasabi sa iyo ng mga bagay tulad ng kung anong mga file ang handa nang _i-save_ sa repo o may mga pagbabago na maaaring gusto mong i-persist.

1. **I-add ang lahat ng file para sa tracking** (tinatawag ding staging files):  
   ```bash
   git add .
   ```

   **Ano ang ginagawa ng command na ito:**
   - **I-stage** ang lahat ng na-modify at bagong file sa iyong project directory
   - **Ihanda** ang mga file na ito para maisama sa iyong susunod na commit
   - **I-mark** ang mga file bilang handa para sa permanenteng snapshot na gagawin natin sa susunod

   Ang `git add` command na may `.` argument ay nagpapahiwatig na lahat ng iyong mga file at pagbabago ay handa nang i-track.

1. **I-add ang mga napiling file para sa tracking** (selective staging):  
   ```bash
   git add [file or folder name]
   ```

   **Kailan gagamitin ang selective staging:**
   - **Ayusin** ang mga kaugnay na pagbabago sa magkakahiwalay na commit para sa mas malinis na history
   - **Isama** lamang ang mga file na magkakaugnay nang lohikal
   - **Gumawa** ng mas makabuluhang commit messages sa pamamagitan ng pag-group ng kaugnay na trabaho

   > 💡 **Pro Tip**: Gumamit ng selective adding kapag gusto mong i-commit ang mga kaugnay na pagbabago nang magkakasama. Nagbibigay ito ng mas makabuluhang commit history.

1. **I-unstage ang mga file** (kung nagbago ang isip mo):  
   ```bash
   # Unstage all files
   git reset
   
   # Unstage a particular file
   git reset [file or folder name]
   ```

   **Pag-unawa sa unstaging:**
   - **Tanggalin** ang mga file mula sa staging area nang hindi nawawala ang iyong mga pagbabago
   - **Panatilihin** ang iyong mga pagbabago ngunit huwag isama ang mga ito sa susunod na commit
   - **Ayusin** kung ano ang gusto mong isama sa iyong commit

1. **I-persist ang iyong trabaho** (gumawa ng commit). Sa puntong ito, na-add mo na ang mga file sa tinatawag na _staging area_. Isang lugar kung saan sinusubaybayan ng Git ang iyong mga file. Para gawing permanente ang pagbabago, kailangan mong _i-commit_ ang mga file. Para gawin ito, gumawa ng _commit_ gamit ang `git commit` command. Ang _commit_ ay kumakatawan sa isang saving point sa history ng iyong repo. I-type ang sumusunod para gumawa ng _commit_:  
   ```bash
   git commit -m "first commit"
   ```

   **Ano ang nangyayari kapag nag-commit ka:**
   - **Gumawa** ng permanenteng snapshot ng lahat ng naka-stage na file sa puntong ito
   - **I-record** ang commit message para ipaliwanag kung anong mga pagbabago ang ginawa
   - **Mag-generate** ng unique identifier (hash) para sa partikular na set ng mga pagbabago
   - **Idagdag** ang snapshot na ito sa version history ng iyong proyekto

   > 💡 **Mga Tip sa Commit Message**: Ang iyong unang commit message ay maaaring simple, ngunit para sa mga susunod na commit, maging deskriptibo! Magandang halimbawa: "Magdagdag ng user login functionality" o "Ayusin ang bug sa navigation menu".

   Ang command na ito ay nagko-commit ng lahat ng iyong mga file, na may mensaheng "first commit". Para sa mga susunod na commit messages, mas mainam na maging mas deskriptibo upang maipakita ang uri ng pagbabago na iyong ginawa.

1. **Ikonekta ang iyong lokal na Git repo sa GitHub**. Ang Git repo ay maganda sa iyong makina ngunit sa isang punto, gusto mong magkaroon ng backup ng iyong mga file sa isang lugar at mag-imbita ng ibang tao na magtrabaho kasama mo sa iyong repo. Isa sa mga mahusay na lugar para gawin ito ay ang GitHub. Tandaan na gumawa na tayo ng repo sa GitHub kaya ang tanging kailangan nating gawin ay ikonekta ang lokal na Git repo sa GitHub. Ang command na `git remote add` ang gagawa nito. I-type ang sumusunod na command:

   > Tandaan, bago mo i-type ang command, pumunta sa iyong GitHub repo page para hanapin ang repository URL. Gagamitin mo ito sa command sa ibaba. Palitan ang `https://github.com/username/repository_name.git` ng iyong GitHub URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   **Hakbang-hakbang, narito ang nangyayari:**
   - **Gumawa** ng koneksyon na tinatawag na "origin" na tumutukoy sa iyong GitHub repository
   - **Ikonekta** ang iyong lokal na Git repository sa remote repository sa GitHub
   - **I-enable** ang kakayahang i-push ang iyong lokal na commits sa GitHub at i-pull ang mga pagbabago mula sa GitHub

   💡 **Modernong alternatibo**: Maaari mo ring gamitin ang GitHub CLI para gumawa at ikonekta ang iyong repository sa isang hakbang:  
   ```bash
   gh repo create my-repo --public --push --source=.
   ```

   Gumagawa ito ng isang _remote_, o koneksyon, na tinatawag na "origin" na tumutukoy sa GitHub repository na ginawa mo kanina.

1. **I-send ang lokal na mga file sa GitHub**. Sa ngayon, gumawa ka ng _connection_ sa pagitan ng lokal na repo at ng GitHub repo. I-send natin ang mga file na ito sa GitHub gamit ang sumusunod na command na `git push`, ganito:  
   ```bash
   git push -u origin main
   ```

   **Pag-unawa sa command na ito:**
   - **I-upload** ang iyong mga commit mula sa "main" branch sa GitHub
   - **I-set** ang upstream branch gamit ang `-u` para magtatag ng permanenteng link
   - **I-enable** ang mas simpleng future pushes nang hindi na kailangang tukuyin ang mga pangalan ng branch

   Ipinapadala nito ang iyong mga commit sa "main" branch sa GitHub. Ang pag-set ng `upstream` branch gamit ang `-u` sa command ay nagtatatag ng link sa pagitan ng iyong lokal na branch at ng remote branch, kaya maaari mo nang gamitin ang `git push` o `git pull` nang hindi na kailangang tukuyin ang pangalan ng branch sa hinaharap.
💡 **Tandaan**: Kung ang pangalan ng iyong default na branch ay iba (tulad ng "master"), palitan ang "main" ng aktwal na pangalan ng iyong branch. Maaari mong tingnan ang kasalukuyang branch gamit ang `git branch --show-current`.

2. **Para magdagdag ng higit pang mga pagbabago** (pang-araw-araw na workflow). Kung nais mong magpatuloy sa paggawa ng mga pagbabago at i-push ang mga ito sa GitHub, kakailanganin mo lamang gamitin ang tatlong sumusunod na utos:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   **Hakbang-hakbang, narito ang iyong pang-araw-araw na workflow:**
   - **I-stage** ang iyong mga binagong file gamit ang `git add .` (o magdagdag ng partikular na mga file)
   - **I-commit** ang iyong mga pagbabago gamit ang isang deskriptibong mensahe tungkol sa iyong nagawa
   - **I-push** sa GitHub upang ma-backup ang iyong trabaho at maibahagi ito sa iba

   > 💡 **Tip**: Maaaring gusto mo ring gumamit ng `.gitignore` file upang maiwasan ang mga file na hindi mo nais na i-track mula sa paglitaw sa GitHub - tulad ng file ng mga tala na iniimbak mo sa parehong folder ngunit walang lugar sa isang pampublikong repository. Maaari kang makahanap ng mga template para sa `.gitignore` files sa [.gitignore templates](https://github.com/github/gitignore) o gumawa ng isa gamit ang [gitignore.io](https://www.toptal.com/developers/gitignore).

#### Modernong Workflow ng Git

Isaalang-alang ang paggamit ng mga modernong praktis na ito:

- **Conventional Commits**: Gumamit ng standardized na format ng commit message tulad ng `feat:`, `fix:`, `docs:`, atbp. Alamin pa sa [conventionalcommits.org](https://www.conventionalcommits.org/)
- **Atomic commits**: Gawin ang bawat commit na kumakatawan sa isang lohikal na pagbabago
- **Frequent commits**: Mag-commit nang madalas gamit ang deskriptibong mga mensahe kaysa sa malalaking, bihirang mga commit

#### Mga Mensahe ng Commit

Ang isang mahusay na subject line ng Git commit ay dapat makumpleto ang sumusunod na pangungusap:
Kung ipapatupad, ang commit na ito ay <ang iyong subject line dito>

Para sa subject, gumamit ng imperative, present tense: "baguhin" hindi "binago" o "binabago". 
Tulad ng sa subject, sa katawan (opsyonal) ay gumamit din ng imperative, present tense. Ang katawan ay dapat maglaman ng motibasyon para sa pagbabago at ikumpara ito sa nakaraang behavior. Ipinaliwanag mo ang `bakit`, hindi ang `paano`.

✅ Maglaan ng ilang minuto upang mag-browse sa GitHub. Makakakita ka ba ng isang talagang mahusay na mensahe ng commit? Makakakita ka ba ng isang talagang minimal na mensahe? Anong impormasyon ang sa tingin mo ay pinakamahalaga at kapaki-pakinabang na iparating sa isang mensahe ng commit?

## Pagtatrabaho sa mga proyekto kasama ang iba

Ang pakikipagtulungan ang tunay na kinang ng GitHub. Habang mahalaga ang pamamahala ng sariling code, ang tunay na mahika ay nangyayari kapag ang mga developer ay nagtutulungan upang bumuo ng isang bagay na kamangha-mangha. Ginagawa ng GitHub ang solo coding bilang isang collaborative symphony kung saan maraming developer ang maaaring mag-ambag nang sabay-sabay nang hindi nagkakasalungatan.

Sa seksyong ito, matutunan mo kung paano gawing welcoming ang iyong mga proyekto para sa ibang mga developer at kung paano mag-ambag nang makabuluhan sa mga umiiral na proyekto. Ang mga kasanayan sa pakikipagtulungan na ito ang nagtatangi sa mga hobbyist na coder mula sa mga propesyonal na developer.

> Tingnan ang video
>
> [![Git at GitHub basics video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Ang pangunahing dahilan ng paglalagay ng mga bagay sa GitHub ay upang gawing posible ang pakikipagtulungan sa ibang mga developer.

Sa iyong repository, mag-navigate sa `Insights > Community` upang makita kung paano ikinukumpara ang iyong proyekto sa mga inirerekomendang pamantayan ng komunidad.

> 🎯 **Gawing Propesyonal ang Iyong Repository**: Ang isang mahusay na dokumentadong repository ay nakakaakit ng mas maraming kontribyutor at nagpapakita na pinahahalagahan mo ang kalidad ng code.

**Mahahalagang Elemento ng Repository:**

| Elemento | Layunin | Bakit Mahalaga |
|----------|---------|----------------|
| **Description** | Maikling buod ng iyong proyekto | Tumutulong sa mga tao na maunawaan kung ano ang ginagawa ng iyong proyekto sa isang sulyap |
| **README** | Detalyadong dokumentasyon ng proyekto | Ang unang bagay na binabasa ng mga tao - gawing kapansin-pansin! |
| **Contributing Guidelines** | Mga tagubilin para sa mga kontribyutor | Nagpapakita na bukas ka sa pakikipagtulungan at nagbibigay ng malinaw na mga inaasahan |
| **Code of Conduct** | Pamantayan ng pag-uugali ng komunidad | Lumilikha ng welcoming na kapaligiran para sa lahat ng kontribyutor |
| **License** | Mga pahintulot sa paggamit | Tinutukoy kung paano maaaring legal na gamitin ng iba ang iyong code |
| **Security Policy** | Proseso ng pag-uulat ng kahinaan | Nagpapakita na seryoso ka sa seguridad |

> 💡 **Pro Tip**: Nagbibigay ang GitHub ng mga template para sa lahat ng mga file na ito. Kapag gumagawa ng bagong repository, i-check ang mga kahon upang awtomatikong makabuo ng mga file na ito.

**Mga Modernong Tampok ng GitHub na Tuklasin:**

🤖 **Automation & CI/CD:**
- **GitHub Actions** para sa automated na testing at deployment
- **Dependabot** para sa awtomatikong pag-update ng dependency

💬 **Komunidad at Pamamahala ng Proyekto:**
- **GitHub Discussions** para sa mga pag-uusap ng komunidad na lampas sa mga isyu
- **GitHub Projects** para sa kanban-style na pamamahala ng proyekto
- **Branch protection rules** upang ipatupad ang mga pamantayan ng kalidad ng code

Ang lahat ng mga mapagkukunang ito ay makakatulong sa onboarding ng mga bagong miyembro ng koponan. At ang mga ito ay karaniwang mga bagay na tinitingnan ng mga bagong kontribyutor bago pa man tingnan ang iyong code, upang malaman kung ang iyong proyekto ay ang tamang lugar para sa kanila upang gugulin ang kanilang oras.

✅ Ang mga README files, bagama't nangangailangan ng oras upang ihanda, ay madalas na napapabayaan ng mga abalang tagapangalaga. Makakakita ka ba ng halimbawa ng isang partikular na deskriptibong README? Tandaan: mayroong ilang [mga tool upang makatulong sa paggawa ng mahusay na README](https://www.makeareadme.com/) na maaaring gusto mong subukan.

### Gawain: Pagsamahin ang ilang code

Ang mga dokumento ng kontribusyon ay tumutulong sa mga tao na mag-ambag sa proyekto. Ipinaliwanag nito kung anong mga uri ng kontribusyon ang hinahanap mo at kung paano gumagana ang proseso. Ang mga kontribyutor ay kailangang dumaan sa isang serye ng mga hakbang upang makapag-ambag sa iyong repo sa GitHub:

1. **Forking your repo** Malamang na gusto mong _i-fork_ ng mga tao ang iyong proyekto. Ang pag-fork ay nangangahulugan ng paggawa ng replika ng iyong repository sa kanilang GitHub profile.
1. **Clone**. Mula doon, i-clone nila ang proyekto sa kanilang lokal na makina.
1. **Gumawa ng branch**. Gusto mong hilingin sa kanila na gumawa ng _branch_ para sa kanilang trabaho.
1. **Pagtuunan ang pagbabago sa isang lugar**. Hilingin sa mga kontribyutor na ituon ang kanilang mga kontribusyon sa isang bagay sa bawat pagkakataon - sa ganitong paraan mas mataas ang tsansa na ma-_merge_ ang kanilang trabaho. Isipin na nagsulat sila ng pag-aayos ng bug, nagdagdag ng bagong feature, at nag-update ng ilang mga test - paano kung gusto mo, o maaari mo lamang ipatupad ang 2 sa 3, o 1 sa 3 pagbabago?

✅ Isipin ang isang sitwasyon kung saan ang mga branch ay partikular na kritikal sa pagsusulat at pagpapadala ng mahusay na code. Anong mga use case ang naiisip mo?

> Tandaan, maging ang pagbabago na nais mong makita sa mundo, at gumawa ng mga branch para sa iyong sariling trabaho. Ang anumang mga commit na gagawin mo ay gagawin sa branch na kasalukuyan mong "checked out". Gamitin ang `git status` upang makita kung aling branch iyon.

Puntahan natin ang workflow ng isang kontribyutor. Ipagpalagay na ang kontribyutor ay na-_fork_ at na-_clone_ na ang repo kaya mayroon na silang Git repo na handang trabahuin sa kanilang lokal na makina:

1. **Gumawa ng branch**. Gamitin ang utos na `git branch` upang gumawa ng branch na maglalaman ng mga pagbabago na nais nilang i-ambag:

   ```bash
   git branch [branch-name]
   ```

   > 💡 **Modernong Paraan**: Maaari ka ring gumawa at lumipat sa bagong branch sa isang utos:
   ```bash
   git switch -c [branch-name]
   ```

1. **Lumipat sa working branch**. Lumipat sa tinukoy na branch at i-update ang working directory gamit ang `git switch`:

   ```bash
   git switch [branch-name]
   ```

   > 💡 **Modernong Tala**: Ang `git switch` ay ang modernong kapalit ng `git checkout` kapag nagbabago ng mga branch. Mas malinaw at mas ligtas para sa mga baguhan.

1. **Gawin ang trabaho**. Sa puntong ito nais mong idagdag ang iyong mga pagbabago. Huwag kalimutang ipaalam ito sa Git gamit ang mga sumusunod na utos:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   > ⚠️ **Kalidad ng Commit Message**: Siguraduhing magbigay ka ng magandang pangalan sa iyong commit, para sa iyong kapakanan at sa tagapangalaga ng repo na iyong tinutulungan. Maging tiyak tungkol sa kung ano ang iyong binago!

1. **Pagsamahin ang iyong trabaho sa `main` branch**. Sa ilang punto tapos ka na sa pagtatrabaho at nais mong pagsamahin ang iyong trabaho sa `main` branch. Ang `main` branch ay maaaring nagbago sa pagitan kaya siguraduhing i-update muna ito sa pinakabago gamit ang mga sumusunod na utos:

   ```bash
   git switch main
   git pull
   ```

   Sa puntong ito nais mong tiyakin na ang anumang _conflicts_, mga sitwasyon kung saan hindi madaling ma-_combine_ ng Git ang mga pagbabago ay nangyayari sa iyong working branch. Kaya't patakbuhin ang mga sumusunod na utos:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Ang utos na `git merge main` ay magdadala ng lahat ng mga pagbabago mula sa `main` papunta sa iyong branch. Sana ay maaari kang magpatuloy. Kung hindi, ipapakita sa iyo ng VS Code kung saan nalilito ang Git at babaguhin mo lang ang mga apektadong file upang sabihin kung aling content ang pinaka-tama.

   💡 **Modernong alternatibo**: Isaalang-alang ang paggamit ng `git rebase` para sa mas malinis na history:
   ```bash
   git rebase main
   ```
   Ire-replay nito ang iyong mga commit sa ibabaw ng pinakabagong main branch, na lumilikha ng linear na history.

1. **Ipadala ang iyong trabaho sa GitHub**. Ang pagpapadala ng iyong trabaho sa GitHub ay nangangahulugan ng dalawang bagay. Ang pag-push ng iyong branch sa iyong repo at pagkatapos ay magbukas ng PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Ang utos sa itaas ay lumilikha ng branch sa iyong forked repo.

1. **Magbukas ng PR**. Susunod, nais mong magbukas ng PR. Ginagawa mo iyon sa pamamagitan ng pag-navigate sa forked repo sa GitHub. Makikita mo ang indikasyon sa GitHub kung saan tinatanong kung nais mong gumawa ng bagong PR, i-click mo iyon at dadalhin ka sa isang interface kung saan maaari mong baguhin ang commit message title, magbigay ng mas angkop na deskripsyon. Ngayon makikita ng tagapangalaga ng repo na iyong na-fork ang PR na ito at _fingers crossed_ maa-appreciate nila at _merge_ ang iyong PR. Ikaw ay isang kontribyutor na, yay :)

   💡 **Modernong tip**: Maaari ka ring gumawa ng PR gamit ang GitHub CLI:
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   🔧 **Pinakamahusay na praktis para sa PRs**:
   - I-link ang mga kaugnay na isyu gamit ang mga keyword tulad ng "Fixes #123"
   - Magdagdag ng mga screenshot para sa mga pagbabago sa UI
   - Humiling ng partikular na mga reviewer
   - Gumamit ng draft PRs para sa work-in-progress
   - Siguraduhing pumasa ang lahat ng CI checks bago humiling ng review

1. **Linisin**. Itinuturing na magandang praktis ang _linisin_ pagkatapos mong matagumpay na ma-merge ang isang PR. Nais mong linisin ang parehong iyong lokal na branch at ang branch na iyong na-push sa GitHub. Una, tanggalin ito nang lokal gamit ang sumusunod na utos:

   ```bash
   git branch -d [branch-name]
   ```

   Siguraduhing pumunta sa pahina ng GitHub para sa forked repo at alisin ang remote branch na iyong na-push dito.

Ang `Pull request` ay tila isang nakakatawang termino dahil talagang nais mong i-push ang iyong mga pagbabago sa proyekto. Ngunit ang tagapangalaga (may-ari ng proyekto) o core team ay kailangang isaalang-alang ang iyong mga pagbabago bago ito i-merge sa "main" branch ng proyekto, kaya't talagang humihiling ka ng desisyon sa pagbabago mula sa isang tagapangalaga.

Ang isang pull request ay ang lugar upang ihambing at talakayin ang mga pagkakaiba na ipinakilala sa isang branch gamit ang mga review, komento, integrated tests, at iba pa. Ang isang mahusay na pull request ay sumusunod sa halos parehong mga patakaran tulad ng isang commit message. Maaari kang magdagdag ng reference sa isang isyu sa issue tracker, kapag ang iyong trabaho halimbawa ay nag-aayos ng isang isyu. Ginagawa ito gamit ang isang `#` na sinusundan ng numero ng iyong isyu. Halimbawa `#97`.

🤞Fingers crossed na pumasa ang lahat ng checks at i-merge ng may-ari ng proyekto ang iyong mga pagbabago sa proyekto🤞

I-update ang iyong kasalukuyang lokal na working branch gamit ang lahat ng bagong commit mula sa kaukulang remote branch sa GitHub:

`git pull`

## Paano mag-ambag sa open source

Ang pag-aambag sa mga open source na proyekto ay isa sa mga pinaka-rewarding na karanasan sa web development. Ito ang iyong pagkakataon na magbigay pabalik sa komunidad, matuto mula sa mga bihasang developer, at gumawa ng tunay na epekto sa software na ginagamit ng libu-libo o kahit milyon-milyong tao.

Ang kagandahan ng kontribusyon sa open source ay lahat nagsimula bilang baguhan. Ang mga developer na lumikha ng mga tool na iyong ginagamit ngayon ay minsan ay nasa eksaktong lugar kung nasaan ka ngayon. Sa pamamagitan ng pag-aambag sa open source, nagiging bahagi ka ng patuloy na siklo ng pag-aaral at pagbabahagi na nagtutulak ng inobasyon sa web development.

Una, maghanap ng repository (o **repo**) sa GitHub na interesado ka at kung saan nais mong mag-ambag ng pagbabago. Nais mong kopyahin ang mga nilalaman nito sa iyong makina.

✅ Isang magandang paraan upang makahanap ng 'beginner-friendly' na mga repo ay ang [maghanap gamit ang tag na 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopyahin ang isang repo nang lokal](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.tl.png)

Mayroong ilang mga paraan ng pagkopya ng code. Isang paraan ay ang "i-clone" ang mga nilalaman ng repository, gamit ang HTTPS, SSH, o gamit ang GitHub CLI (Command Line Interface).

Buksan ang iyong terminal at i-clone ang repository tulad nito:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

Upang magtrabaho sa proyekto, lumipat sa tamang folder:
`cd ProjectURL`

Maaari mo ring buksan ang buong proyekto gamit ang:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - Cloud development environment ng GitHub na may VS Code sa browser
- **[GitHub Desktop](https://desktop.github.com/)** - Isang GUI application para sa mga operasyon ng Git  
- **[GitHub.dev](https://github.dev)** - Pindutin ang `.` key sa anumang GitHub repo upang buksan ang VS Code sa browser
- **VS Code** na may GitHub Pull Requests extension

Sa huli, maaari mong i-download ang code sa isang zipped folder.

### Ilang mas kawili-wiling bagay tungkol sa GitHub
Maaari mong i-star, i-watch, at/o "i-fork" ang anumang pampublikong repository sa GitHub. Makikita mo ang iyong mga starred repositories sa drop-down menu sa kanang itaas. Para itong pag-bookmark, pero para sa code.

Ang mga proyekto ay may issue tracker, kadalasan sa GitHub sa tab na "Issues" maliban kung may ibang indikasyon, kung saan pinag-uusapan ng mga tao ang mga isyu na may kaugnayan sa proyekto. At ang tab na Pull Requests ay kung saan pinag-uusapan at nire-review ng mga tao ang mga pagbabagong ginagawa.

Ang mga proyekto ay maaaring may diskusyon din sa mga forum, mailing lists, o mga chat channel tulad ng Slack, Discord, o IRC.

🔧 **Mga Modernong Tampok ng GitHub**:
- **GitHub Discussions** - Built-in na forum para sa mga pag-uusap ng komunidad
- **GitHub Sponsors** - Suportahan ang mga tagapangalaga ng proyekto sa pinansyal na paraan  
- **Security tab** - Mga ulat ng kahinaan at mga security advisories
- **Actions tab** - Tingnan ang mga automated workflows at CI/CD pipelines
- **Insights tab** - Analytics tungkol sa mga contributor, commits, at kalusugan ng proyekto
- **Projects tab** - Mga built-in na tools ng GitHub para sa pamamahala ng proyekto

✅ Maglibot sa iyong bagong GitHub repo at subukan ang ilang bagay, tulad ng pag-edit ng mga setting, pagdaragdag ng impormasyon sa iyong repo, paggawa ng proyekto (tulad ng Kanban board), at pag-set up ng GitHub Actions para sa automation. Maraming magagawa!

---

## 🚀 Hamon

Makipag-partner sa isang kaibigan upang magtrabaho sa code ng isa't isa. Gumawa ng proyekto nang magkasama, mag-fork ng code, gumawa ng mga branch, at pagsamahin ang mga pagbabago.

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/en/)

## Review at Pag-aaral sa Sarili

Magbasa pa tungkol sa [pag-aambag sa open source software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Magpraktis, magpraktis, magpraktis. May magagandang learning paths ang GitHub na makukuha sa [GitHub Skills](https://skills.github.com):

- [Introduction to GitHub](https://github.com/skills/introduction-to-github)
- [Communicate using Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Managing merge conflicts](https://github.com/skills/resolve-merge-conflicts)

**Karagdagang modernong resources**:
- [GitHub CLI documentation](https://cli.github.com/manual/)
- [GitHub Codespaces documentation](https://docs.github.com/en/codespaces)
- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [Git best practices](https://www.atlassian.com/git/tutorials/comparing-workflows) 

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang kumpletuhin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng collaborative na proyekto sa web development na nagpapakita ng kumpletong GitHub workflow na natutunan mo sa araling ito. Ang hamon na ito ay makakatulong sa iyo na magpraktis sa paggawa ng repository, mga tampok ng kolaborasyon, at modernong Git workflows sa isang tunay na sitwasyon.

**Prompt:** Gumawa ng bagong pampublikong GitHub repository para sa isang simpleng proyekto na "Web Development Resources". Ang repository ay dapat may kasamang maayos na nakaayos na README.md file na naglilista ng mga kapaki-pakinabang na tools at resources para sa web development, na nakaayos ayon sa mga kategorya (HTML, CSS, JavaScript, atbp.). I-set up ang repository na may tamang community standards kabilang ang isang lisensya, mga patnubay sa pag-aambag, at isang code of conduct. Gumawa ng hindi bababa sa dalawang feature branches: isa para sa pagdaragdag ng mga CSS resources at isa para sa mga JavaScript resources. Gumawa ng mga commit sa bawat branch na may mga deskriptibong commit messages, pagkatapos ay gumawa ng mga pull requests upang pagsamahin ang mga pagbabago pabalik sa main. I-enable ang mga tampok ng GitHub tulad ng Issues, Discussions, at mag-set up ng basic na GitHub Actions workflow para sa automated checks.

## Takdang-Aralin

Kumpletuhin ang [Introduction to GitHub](https://github.com/skills/introduction-to-github) na kurso sa GitHub Skills.

**Opsyonal na advanced na mga takdang-aralin**:
- I-set up ang SSH authentication para sa iyong GitHub account
- Subukang gamitin ang GitHub CLI para sa mga karaniwang operasyon
- Gumawa ng repository na may GitHub Actions workflow
- Tuklasin ang GitHub Codespaces sa pamamagitan ng pagbukas ng repository na ito sa isang codespace

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na awtoritatibong pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.