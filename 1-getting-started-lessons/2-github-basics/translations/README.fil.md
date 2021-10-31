# Panimula sa GitHub

Sinasaklaw ng araling ito ang mga pangunahing kaalaman ng GitHub, isang platform para mag-host at mamahala ng mga pagbabago sa iyong code.

![Intro to GitHub](../sketchnotes/webdev101-github.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pagsusulit bago ang lektura
[Pagsusulit bago ang lektura](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/3)

## Panimula

Sa araling ito, tatalakayin natin ang:

- pagsubaybay sa gawaing ginagawa mo sa iyong makina
- nagtatrabaho sa mga proyekto kasama ang iba
- paano mag-ambag sa open source software

### Mga kinakailangan

Bago ka magsimula, kakailanganin mong suriin kung naka-install ang Git. Sa uri ng terminal: 
`git --version`

Kung hindi naka-install ang Git, [download Git](https://git-scm.com/downloads). Pagkatapos, i-setup ang iyong lokal na profile sa Git sa terminal:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Upang tingnan kung naka-configure na ang Git maaari kang mag-type:
`git config --list`

Kakailanganin mo rin ang isang GitHub account, isang code editor (tulad ng Visual Studio Code), at kakailanganin mong buksan ang iyong terminal (or: command prompt).

Mag-navigate sa [github.com](https://github.com/) at gumawa ng account kung hindi mo pa nagagawa, o mag-log in at punan ang iyong profile. 

✅ Ang GitHub ay hindi lamang ang code repository sa mundo; may iba pa, ngunit ang GitHub ang pinakakilala

### Paghahanda

Kakailanganin mo ang parehong folder na may proyekto ng code sa iyong lokal na makina (laptop o PC), at isang pampublikong imbakan sa GitHub, na magsisilbing halimbawa kung paano mag-ambag sa mga proyekto ng iba.  

---

## Pamamahala ng code

Sabihin nating mayroon kang lokal na folder na may ilang proyekto ng code at gusto mong simulan ang pagsubaybay sa iyong pag-unlad gamit ang git - ang version control system. Inihambing ng ilang tao ang paggamit ng git sa pagsulat ng love letter sa iyong sarili sa hinaharap. Ang pagbabasa ng iyong mga commit na mensahe mga araw o linggo o buwan mamaya, maaalala mo kung bakit ka gumawa ng desisyon, o "rollback" ng isang pagbabago - iyon ay, kapag sumulat ka ng magagandang "commit messages".

### Gawain: Gumawa ng repository at mag-commit ng code

1. **Create repository on GitHub**. Sa GitHub.com, sa tab na mga repositoryo, o mula sa kanang bahagi ng navigation bar, hanapin ang **new repo** pindutan.

   1. Bigyan ng pangalan ang iyong repositoryo (folder).
   1. Piliin **create repository**.

1. **Navigate to your working folder**. Sa iyong terminal, lumipat sa folder (kilala rin bilang direktoryo) na gusto mong simulan ang pagsubaybay. Uri:

   ```bash
   cd [name of your folder]
   ```

1. **Initialize a git repository**. Sa uri ng iyong proyekto:

   ```bash
   git init
   ```

1. **Check status**. Upang suriin ang katayuan ng iyong uri ng imbakan:

   ```bash
   git status
   ```

   ang output ay maaaring magmukhang ganito:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Karaniwang ang `git status` Ang command ay nagsasabi sa iyo ng mga bagay tulad ng kung anong mga file ang handa na _save_ sa repo o may mga pagbabago dito na maaaring gusto mong magpatuloy.

1. **Idagdag ang lahat ng mga file para sa pagsubaybay**
   Tinatawag din itong staging file/pagdaragdag ng mga file sa staging area.

   ```bash
   git add .
   ```

   The `git add` plus `.` argument indicates that all your files & changes for tracking. 

1. **Magdagdag ng mga napiling file para sa pagsubaybay**

   ```bash
   git add [file or folder name]
   ```

   Nakakatulong ito sa amin na magdagdag lamang ng mga napiling file sa staging area kapag ayaw naming i-commit ang lahat ng file nang sabay-sabay.

1. **Alisin ang lahat ng mga file**

   ```bash
   git reset
   ```

   Ang command na ito ay tumutulong sa amin na i-unstage ang lahat ng mga file nang sabay-sabay.

1. **Alisin ang isang partikular na file**

   ```bash
   git reset [file or folder name]
   ```

   Tinutulungan kami ng command na ito na i-unstage lang ang isang partikular na file nang sabay-sabay na hindi namin gustong isama para sa susunod na commit.

1. **Ipagpatuloy ang iyong trabaho**. Sa puntong ito naidagdag mo ang mga file sa isang tinatawag na _staging area_. Isang lugar kung saan sinusubaybayan ng Git ang iyong mga file. Upang gawing permanente ang pagbabago kailangan mong gawin _commit_ ang mga papeles. Upang gawin ito, lumikha ka ng isang _commit_ kasama ang `git commit` atas. A _commit_ kumakatawan sa isang punto ng pag-save sa kasaysayan ng iyong repo. I-type ang sumusunod upang lumikha ng a _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Iko-commit nito ang lahat ng iyong file, idinaragdag ang mensaheng "first commit". Para sa mga commit na mensahe sa hinaharap, gugustuhin mong maging mas mapaglarawan sa iyong paglalarawan upang maihatid kung anong uri ng pagbabago ang iyong ginawa.

1. **Ikonekta ang iyong lokal na Git repo sa GitHub**. Ang isang Git repo ay mabuti sa iyong makina ngunit sa isang punto gusto mong magkaroon ng backup ng iyong mga file sa isang lugar at mag-imbita rin ng ibang mga tao na magtrabaho kasama mo sa iyong repo. Ang isang magandang lugar para gawin ito ay ang GitHub. Tandaan na nakagawa na kami ng repo sa GitHub kaya ang kailangan lang naming gawin ay ikonekta ang aming lokal na Git repo sa GitHub. Ang utos `git remote add` gagawin lang yan. I-type ang sumusunod na command:

   > Tandaan, bago mo i-type ang command pumunta sa iyong GitHub repo page para mahanap ang repository URL. Gagamitin mo ito sa utos sa ibaba. Palitan `repository_name` gamit ang iyong GitHub URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Lumilikha ito ng isang _remote_, o koneksyon, pinangalanan "origin" na tumuturo sa GitHub repository na ginawa mo kanina.

1. **Magpadala ng mga lokal na file sa GitHub**. Sa ngayon ay nakagawa ka ng isang _connection_ sa pagitan ng lokal na repo at ng GitHub repo. Ipadala natin ang mga file na ito sa GitHub gamit ang sumusunod na command `git push`, tulad nito: 

   ```bash
   git push -u origin main
   ```

   Ipinapadala nito ang iyong mga commit sa iyong "pangunahing" branch sa GitHub.

1. **Upang magdagdag ng higit pang mga pagbabago**. Kung gusto mong magpatuloy sa paggawa ng mga pagbabago at itulak ang mga ito sa GitHub kakailanganin mo lang gamitin ang sumusunod na tatlong utos:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tip, Baka gusto mo ring magpatibay ng isang `.gitignore` file upang maiwasan ang mga file na hindi mo gustong subaybayan mula sa paglabas sa GitHub - tulad ng mga talang iyon na iniimbak mo sa parehong folder ngunit walang lugar sa isang pampublikong imbakan. Makakahanap ka ng mga template para sa `.gitignore` files at [.gitignore templates](https://github.com/github/gitignore).

#### Mag-commit ng mga mensahe

Ang isang mahusay na linya ng paksa ng Git commit ay kumukumpleto sa sumusunod na pangungusap:
Kung inilapat, gagawin ng commit na ito <your subject line here>

Para sa paksa gamitin ang pautos, kasalukuyang panahunan: "pagbabago" hindi "binago" o "pagbabago". 
Tulad ng sa paksa, sa katawan (opsyonal) ay ginagamit din ang imperative, present tense. Dapat isama ng katawan ang motibasyon para sa pagbabago at ihambing ito sa nakaraang pag-uugali. Ipinapaliwanag mo ang `why`, hindi ang `how`.

✅ Maglaan ng ilang minuto upang mag-surf sa GitHub. Makakahanap ka ba ng talagang mahusay na commit message? Makakahanap ka ba ng talagang minimal? Anong impormasyon sa tingin mo ang pinakamahalaga at kapaki-pakinabang na ihatid sa isang commit message?

### Gawain: Magtulungan

Ang pangunahing dahilan ng paglalagay ng mga bagay sa GitHub ay upang gawing posible ang pakikipagtulungan sa ibang mga developer.

## Paggawa sa mga proyekto kasama ang iba

Sa iyong imbakan, mag-navigate sa `Insights > Community` upang makita kung paano inihahambing ang iyong proyekto sa mga inirerekomendang pamantayan ng komunidad.

   Narito ang ilang bagay na maaaring mapabuti ang iyong GitHub repo:
   - **Description**. Nagdagdag ka ba ng paglalarawan para sa iyong proyekto?
   - **README**. Nagdagdag ka ba ng README? Nagbibigay ang GitHub ng gabay para sa pagsulat ng a [README](https://docs.github.com/articles/about-readmes/).
   - **Contributing guideline**. Mayroon ba ang iyong proyekto [contributing guidelines](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Code of Conduct**. a [Code of Conduct](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **License**. Marahil ang pinakamahalaga, ang [license](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Makikinabang ang lahat ng mapagkukunang ito sa pag-onboard ng mga bagong miyembro ng team. At iyon ang karaniwang mga uri ng mga bagay na tinitingnan ng mga bagong kontribyutor bago man lang tingnan ang iyong code, upang malaman kung ang iyong proyekto ay ang tamang lugar para sa kanila na gugulin ang kanilang oras.

✅ Ang mga file ng README, bagama't nangangailangan sila ng oras upang maghanda, ay kadalasang napapabayaan ng mga abalang tagapangasiwa. Makakahanap ka ba ng isang halimbawa ng isang partikular na naglalarawan? Tandaan: may ilan [tools to help create good READMEs](https://www.makeareadme.com/) na baka gusto mong subukan.

### Gawain: Pagsamahin ang ilang code

Ang mga nag-aambag na doc ay tumutulong sa mga tao na mag-ambag sa proyekto. Ipinapaliwanag nito kung anong mga uri ng mga kontribusyon ang iyong hinahanap at kung paano gumagana ang proseso. Ang mga kontribyutor ay kailangang dumaan sa isang serye ng mga hakbang upang makapag-ambag sa iyong repo sa GitHub:


1. **Forking your repo** Malamang na gusto mo ang mga tao _fork_ your project. Ang ibig sabihin ng forking ay paggawa ng replica ng iyong repository sa kanilang profile sa GitHub.
1. **Clone**. Mula doon ay i-clone nila ang proyekto sa kanilang lokal na makina. 
1. **Create a branch**. Gusto mong hilingin sa kanila na lumikha ng isang _branch_ para sa kanilang trabaho. 
1. **Focus their change on one area**. Hilingin sa mga kontribyutor na ituon ang kanilang mga kontribusyon sa isang bagay sa isang pagkakataon - sa paraang iyon ang mga pagkakataong magagawa mo _merge_ sa kanilang trabaho ay mas mataas. Isipin na magsulat sila ng pag-aayos ng bug, magdagdag ng bagong feature, at mag-update ng ilang pagsubok - paano kung gusto mo, o maaari lang ipatupad ang 2 sa 3, o 1 sa 3 pagbabago?

✅ Isipin ang isang sitwasyon kung saan ang mga sangay ay partikular na kritikal sa pagsulat at pagpapadala ng magandang code. Anong mga use case ang maiisip mo?

> Tandaan, maging ang pagbabagong gusto mong makita sa mundo, at lumikha din ng mga sangay para sa iyong sariling gawain. Ang anumang commit na gagawin mo ay gagawin sa branch na kasalukuyan mong kinaroroonan “checked out” sa. Gamitin `git status` para makita kung saang branch yan.

Dumaan tayo sa isang daloy ng trabaho ng contributor. Ipagpalagay na ang nag-ambag ay mayroon na _forked_ at _cloned_ ang repo para magkaroon sila ng Git repo na handang gawin, sa kanilang lokal na makina:

1. **Create a branch**. Gamitin ang command `git branch` upang lumikha ng isang sangay na maglalaman ng mga pagbabagong ibig nilang i-ambag:

   ```bash
   git branch [branch-name]
   ```

1. **Switch to working branch**. Lumipat sa tinukoy na sangay at i-update ang gumaganang direktoryo gamit ang `git checkout`:

   ```bash
   git checkout [branch-name]
   ```

1. **Do work**. Sa puntong ito gusto mong idagdag ang iyong mga pagbabago. Huwag kalimutang sabihin kay Git ang tungkol dito gamit ang mga sumusunod na utos:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Siguraduhing bibigyan mo ng magandang pangalan ang iyong commit, para sa iyong kapakanan pati na rin ang maintainer ng repo na tinutulungan mo.

1. **Combine your work with the `main` branch**. Sa ilang mga punto ay tapos ka nang magtrabaho at gusto mong pagsamahin ang iyong trabaho sa iyong trabaho `main` sangay. Ang `main` maaaring nagbago ang branch samantala kaya siguraduhing i-update mo muna ito sa pinakabago gamit ang mga sumusunod na command:

   ```bash
   git checkout main
   git pull
   ```

   Sa puntong ito gusto mong tiyakin na anuman _conflicts_, mga sitwasyon kung saan hindi madali ang Git _combine_ ang mga pagbabago ay nangyayari sa iyong nagtatrabaho na sangay. Samakatuwid, patakbuhin ang sumusunod na mga atas:

   ```bash
   git checkout [branch_name]
   git merge main
   ```

   Dadalhin nito ang lahat ng pagbabago mula sa `main` into your branch and sana matuloy mo na lang. Kung hindi, sasabihin sa iyo ng VS Code kung nasaan ang Git _confused_ at babaguhin mo lang ang mga apektadong file para masabi kung aling content ang pinakatumpak.

1. **Send your work to GitHub**. Ang pagpapadala ng iyong trabaho sa GitHub ay nangangahulugan ng dalawang bagay. Itulak ang iyong sangay sa iyong repo at pagkatapos ay magbukas ng isang PR, Hiling na Hilahin.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Ang utos sa itaas ay lumilikha ng sangay sa iyong forked repo.

1. **Open a PR**. Susunod, gusto mong magbukas ng PR. Ginagawa mo iyon sa pamamagitan ng pag-navigate sa forked repo sa GitHub. Makakakita ka ng indikasyon sa GitHub kung saan itatanong nito kung gusto mong lumikha ng bagong PR, i-click mo iyon at dadalhin ka sa isang interface kung saan maaari mong baguhin ang pamagat ng commit message, bigyan ito ng mas angkop na paglalarawan. Ngayon ay makikita ng tagapangasiwa ng repo na iyong tinira ang PR na ito at _fingers crossed_ sila ay pahalagahan at _merge_ your PR. Isa ka na ngayong contributor, yay :)

1. **Clean up**. Ito ay itinuturing na mabuting kasanayan sa _clean up_ pagkatapos mong matagumpay na pagsamahin ang isang PR. Gusto mong linisin ang iyong lokal na sangay at ang sangay na itinulak mo sa GitHub. Una, tanggalin natin ito nang lokal gamit ang sumusunod na utos: 

   ```bash
   git branch -d [branch-name]
   ```

   Tiyaking pupunta ka sa pahina ng GitHub para sa susunod na forked repo at alisin ang malayong sangay na itinulak mo lang dito.

`Pull request` parang silly term kasi gusto mo talagang i-push yung mga pagbabago mo sa project. Ngunit kailangang isaalang-alang ng maintainer (may-ari ng proyekto) o pangunahing koponan ang iyong mga pagbabago bago ito isama sa "pangunahing" sangay ng proyekto, kaya talagang humihiling ka ng desisyon sa pagbabago mula sa isang maintainer.  

Ang pull request ay ang lugar upang paghambingin at pag-usapan ang mga pagkakaibang ipinakilala sa isang sangay na may mga review, komento, pinagsamang pagsubok, at higit pa. Ang isang mahusay na kahilingan sa paghila ay sumusunod sa halos kaparehong mga panuntunan gaya ng isang commit na mensahe. Maaari kang magdagdag ng reference sa isang isyu sa issue tracker, kapag ang iyong trabaho halimbawa ay nag-ayos ng isyu. Ginagawa ito gamit ang a `#` na sinusundan ng bilang ng iyong isyu. Halimbawa `#97`.

🤞Pinilit na ang lahat ng mga tseke ay pumasa at ang (mga) may-ari ng proyekto ay pinagsama ang iyong mga pagbabago sa proyekto🤞

I-update ang iyong kasalukuyang lokal na nagtatrabaho na sangay sa lahat ng mga bagong commit mula sa kaukulang remote na sangay sa GitHub:

`git pull`

## Paano mag-ambag sa open source

Una, maghanap tayo ng isang imbakan (o **repo**) sa GitHub ng interes sa iyo at kung saan mo gustong mag-ambag ng pagbabago. Gusto mong kopyahin ang mga nilalaman nito sa iyong makina.

✅ Ang isang mahusay na paraan upang makahanap ng 'beginner-friendly' repos ay ang [search by the tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copy a repo locally](images/clone_repo.png)

Mayroong ilang mga paraan ng pagkopya ng code. Ang isang paraan ay ang "i-clone" ang mga nilalaman ng repository, gamit ang HTTPS, SSH, o gamit ang GitHub CLI (Command Line Interface). 

Buksan ang iyong terminal at i-clone ang repositoryo tulad nito:
`git clone https://github.com/ProjectURL`

Upang magtrabaho sa proyekto, lumipat sa kanang folder:
`cd ProjectURL`

Maaari mo ring buksan ang buong proyekto gamit ang [Codespaces](https://github.com/features/codespaces), Ang naka-embed na code editor / cloud development environment ng GitHub, o [GitHub Desktop](https://desktop.github.com/).

Panghuli, maaari mong i-download ang code sa isang naka-zip na folder. 

### Ilang mas kawili-wiling bagay tungkol sa GitHub

Maaari mong lagyan ng star, panoorin at/o "i-fork" ang anumang pampublikong repository sa GitHub. Mahahanap mo ang iyong mga naka-star na repository sa kanang tuktok na drop-down na menu. Ito ay tulad ng pag-bookmark, ngunit para sa code. 

Ang mga proyekto ay may tagasubaybay ng isyu, karamihan ay nasa GitHub sa tab na "Issues" maliban kung iba ang ipinahiwatig, kung saan tinatalakay ng mga tao ang mga isyung nauugnay sa proyekto. At ang tab na Pull Requests ay kung saan tinatalakay at sinusuri ng mga tao ang mga pagbabagong kasalukuyang isinasagawa.

Maaaring magkaroon din ng talakayan ang mga proyekto sa mga forum, mailing list, o mga channel ng chat tulad ng Slack, Discord o IRC.

✅ Tingnan ang iyong bagong GitHub repo at subukan ang ilang bagay, tulad ng pag-edit ng mga setting, pagdaragdag ng impormasyon sa iyong repo, at paggawa ng proyekto (tulad ng Kanban board). Marami kang magagawa!

---

## 🚀 Hamon 

Ipares sa isang kaibigan para magtrabaho sa code ng isa't isa. Gumawa ng proyekto nang magkakasama, mag-fork ng code, gumawa ng mga sangay, at magsama ng mga pagbabago.

## Pagsusulit pagkatapos ng Lektura
[Post-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/4)

## Pagsusuri at Sariling pag-aaral

Magbasa pa tungkol sa [contributing to open source software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Magsanay, magsanay, magsanay. Ang GitHub ay may mahusay na mga landas sa pag-aaral na magagamit sa pamamagitan ng [lab.github.com](https://lab.github.com/):

- [First Week on GitHub](https://lab.github.com/githubtraining/first-week-on-github)

Makakahanap ka rin ng mas advanced na mga lab. 

## Takdang-aralin 

Kumpletuhin [the First Week on GitHub training lab](https://lab.github.com/githubtraining/first-week-on-github)
