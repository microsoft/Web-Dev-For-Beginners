## Mga Pangunahing Kaalaman sa GIT para sa mga Baguhan sa Web Development👶

## Ano ang `Git`?
1. Ang Git ay isang distributed version control system.
2. Ang buong codebase at kasaysayan ay nasa bawat computer ng developer, na nagpapadali sa pag-branch at pag-merge.
3. Ginagamit ito bilang Version Control System (VCS) para subaybayan ang mga pagbabago sa mga file ng computer.

* Distributed version control
* Nagkokoordina ng trabaho sa pagitan ng maraming developer  
* Sino ang gumawa ng mga pagbabago at kailan
* Maaaring bumalik sa anumang oras
* Lokal at remote na repos

## MGA KONSEPTO NG GIT
* Subaybayan ang kasaysayan ng code
* Kumukuha ng "snapshots" ng iyong mga file
* Ikaw ang magdedesisyon kung kailan kukuha ng snapshot sa pamamagitan ng paggawa ng "commit"
* Maaaring bisitahin ang anumang snapshot anumang oras
* Maaaring i-stage ang mga file bago mag-commit

### Pagkakaiba ng Git at GitHub

| Git | GitHub |
| ------- | ----------- |
| Ang Git ay isang software | Ang GitHub ay isang cloud service |
| Ang Git ay naka-install nang lokal sa sistema | Ang GitHub ay naka-host sa web |
| Ito ay isang command-line tool | Ito ay isang graphical user interface |
| Ang Git ay pinapanatili ng Linux | Ang GitHub ay pinapanatili ng Microsoft |
| Nakatuon ito sa version control at code sharing | Nakatuon ito sa centralized source code hosting |
| Ang Git ay open-source licensed | Ang GitHub ay may libreng-tier at pay-for-use tier |
| Ang Git ay inilabas noong 2005 | Ang GitHub ay inilabas noong 2008 |

## Pag-install ng GIT
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* [I-download](http://git-scm.com/download/mac) para sa Mac
* [I-download](http://git-scm.com/download/win) para sa Windows

### Mga Hakbang sa Proseso ng Pag-install:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Pagkatapos ay magpatuloy sa Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Pagkatapos ng Pag-install, Kailangan Nating I-configure ang Git gamit ang Git Bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Mga Utos ng Git
___

### Pagkuha at Paglikha ng Mga Proyekto

| Utos | Deskripsyon |
| ------- | ----------- |
| `git init` | I-initialize ang isang lokal na Git repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Gumawa ng lokal na kopya ng isang remote repository |

### Pangunahing Snapshotting

| Utos | Deskripsyon |
| ------- | ----------- |
| `git status` | Tingnan ang status |
| `git add [file-name.txt]` | Magdagdag ng file sa staging area |
| `git add -A` | Magdagdag ng lahat ng bagong at binagong file sa staging area |
| `git commit -m "[commit message]"` | I-commit ang mga pagbabago |
| `git rm -r [file-name.txt]` | Tanggalin ang isang file (o folder) |
| `git push` | I-push sa Remote Repository |
| `git pull` | Kunin ang Pinakabagong Mga Pagbabago Mula sa Remote Repository |

### Pag-branch at Pag-merge

| Utos | Deskripsyon |
| ------- | ----------- |
| `git branch` | Ilista ang mga branch (ang asterisk ay nagpapakita ng kasalukuyang branch) |
| `git branch -a` | Ilista ang lahat ng branch (lokal at remote) |
| `git branch [branch name]` | Gumawa ng bagong branch |
| `git branch -D [branch name]` | Tanggalin ang isang branch |
| `git push origin --delete [branch name]` | Tanggalin ang isang remote branch |
| `git checkout -b [branch name]` | Gumawa ng bagong branch at lumipat dito |
| `git checkout -b [branch name] origin/[branch name]` | Kopyahin ang isang remote branch at lumipat dito |
| `git branch -m [old branch name] [new branch name]` | Palitan ang pangalan ng isang lokal na branch |
| `git checkout [branch name]` | Lumipat sa isang branch |
| `git checkout -` | Lumipat sa huling branch na binuksan |
| `git checkout -- [file-name.txt]` | I-discard ang mga pagbabago sa isang file |
| `git merge [branch name]` | I-merge ang isang branch sa aktibong branch |
| `git merge [source branch] [target branch]` | I-merge ang isang branch sa target branch |
| `git stash` | I-stash ang mga pagbabago sa isang dirty working directory |
| `git stash clear` | Tanggalin ang lahat ng naka-stash na entry |

### Pagbabahagi at Pag-update ng Mga Proyekto

| Utos | Deskripsyon |
| ------- | ----------- |
| `git push origin [branch name]` | I-push ang isang branch sa iyong remote repository |
| `git push -u origin [branch name]` | I-push ang mga pagbabago sa remote repository (at tandaan ang branch) |
| `git push` | I-push ang mga pagbabago sa remote repository (natandaan na branch) |
| `git push origin --delete [branch name]` | Tanggalin ang isang remote branch |
| `git pull` | I-update ang lokal na repository sa pinakabagong commit |
| `git pull origin [branch name]` | Kunin ang mga pagbabago mula sa remote repository |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Magdagdag ng remote repository |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Itakda ang origin branch ng repository sa SSH |

### Pag-inspeksyon at Paghahambing

| Utos | Deskripsyon |
| ------- | ----------- |
| `git log` | Tingnan ang mga pagbabago |
| `git log --summary` | Tingnan ang mga pagbabago (detalyado) |
| `git log --oneline` | Tingnan ang mga pagbabago (maikli) |
| `git diff [source branch] [target branch]` | I-preview ang mga pagbabago bago mag-merge |

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.