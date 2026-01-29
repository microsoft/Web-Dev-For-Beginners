## Misingi ya GIT kwa wanaoanza web-dev👶

## Git ni nini?
1. Git ni mfumo wa kudhibiti toleo uliosambazwa.
2. Msingi mzima wa msimbo na historia unapatikana kwenye kompyuta ya kila msanidi, 
   ambayo hurahisisha matawi na kuunganisha.
3. Inatumika kama Mfumo wa Kudhibiti Toleo (VCS) kwa kufuatilia mabadiliko katika faili za kompyuta.

* Mfumo wa kudhibiti toleo uliosambazwa
* Huratibu kazi kati ya wasanidi wengi  
* Nani alifanya mabadiliko gani na lini
* Rudisha nyuma wakati wowote
* Repos za ndani na za mbali

## DHANA ZA GIT
* Hufuatilia historia ya msimbo
* Huchukua "picha za haraka" za faili zako
* Wewe huamua lini kuchukua picha ya haraka kwa kufanya "commit"
* Unaweza kutembelea picha yoyote ya haraka wakati wowote
* Unaweza kuweka faili kabla ya kufanya commit

### Tofauti Kati ya Git na GitHub

| Git | GitHub |
| ------- | ----------- |
| Git ni programu | GitHub ni huduma ya wingu |
| Git imewekwa ndani ya mfumo | GitHub inapatikana mtandaoni |
| Ni zana ya mstari wa amri | Ni kiolesura cha mtumiaji cha picha |
| Git inasimamiwa na Linux | GitHub inasimamiwa na Microsoft |
| Inalenga kudhibiti toleo na kushiriki msimbo | Inalenga kuhifadhi msimbo wa chanzo kwa njia ya kati |
| Git ina leseni ya chanzo huria | GitHub ina kiwango cha bure na kiwango cha kulipia |
| Git ilitolewa mwaka 2005 | GitHub ilitolewa mwaka 2008 |

## Usakinishaji wa GIT
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Pakua](http://git-scm.com/download/mac) kwa Mac
* [Pakua](http://git-scm.com/download/win) kwa Windows

### Hatua za Mchakato wa Usakinishaji:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Kisha Endelea Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Baada ya Usakinishaji Tunahitaji Kuseti Git kwa kutumia Git Bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Amri za Git
___

### Kupata & Kuunda Miradi

| Amri | Maelezo |
| ------- | ----------- |
| `git init` | Anzisha repo ya Git ya ndani |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Unda nakala ya ndani ya repo ya mbali |

### Snapshot za Msingi

| Amri | Maelezo |
| ------- | ----------- |
| `git status` | Angalia hali |
| `git add [file-name.txt]` | Ongeza faili kwenye eneo la staging |
| `git add -A` | Ongeza faili zote mpya na zilizobadilishwa kwenye eneo la staging |
| `git commit -m "[commit message]"` | Fanya commit ya mabadiliko |
| `git rm -r [file-name.txt]` | Ondoa faili (au folda) |
| `git push` | Tuma kwenye Repo ya Mbali |
| `git pull` | Pata Mabadiliko ya Hivi Karibuni Kutoka Repo ya Mbali |

### Matawi & Kuunganisha

| Amri | Maelezo |
| ------- | ----------- |
| `git branch` | Orodhesha matawi (nyota inaonyesha tawi la sasa) |
| `git branch -a` | Orodhesha matawi yote (ya ndani na ya mbali) |
| `git branch [branch name]` | Unda tawi jipya |
| `git branch -D [branch name]` | Futa tawi |
| `git push origin --delete [branch name]` | Futa tawi la mbali |
| `git checkout -b [branch name]` | Unda tawi jipya na ubadilishe kwenda kwake |
| `git checkout -b [branch name] origin/[branch name]` | Nakili tawi la mbali na ubadilishe kwenda kwake |
| `git branch -m [old branch name] [new branch name]` | Badilisha jina la tawi la ndani |
| `git checkout [branch name]` | Badilisha kwenda tawi |
| `git checkout -` | Badilisha kwenda tawi lililochaguliwa mwisho |
| `git checkout -- [file-name.txt]` | Futa mabadiliko kwenye faili |
| `git merge [branch name]` | Unganisha tawi kwenye tawi linalotumika |
| `git merge [source branch] [target branch]` | Unganisha tawi kwenye tawi lengwa |
| `git stash` | Hifadhi mabadiliko kwenye saraka ya kazi chafu |
| `git stash clear` | Ondoa hifadhi zote |

### Kushiriki & Kusasisha Miradi

| Amri | Maelezo |
| ------- | ----------- |
| `git push origin [branch name]` | Tuma tawi kwenye repo yako ya mbali |
| `git push -u origin [branch name]` | Tuma mabadiliko kwenye repo ya mbali (na kumbuka tawi) |
| `git push` | Tuma mabadiliko kwenye repo ya mbali (tawi lililokumbukwa) |
| `git push origin --delete [branch name]` | Futa tawi la mbali |
| `git pull` | Sasisha repo ya ndani hadi commit ya hivi karibuni |
| `git pull origin [branch name]` | Pata mabadiliko kutoka repo ya mbali |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Ongeza repo ya mbali |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Weka tawi la asili la repo kwenye SSH |

### Ukaguzi & Ulinganisho

| Amri | Maelezo |
| ------- | ----------- |
| `git log` | Tazama mabadiliko |
| `git log --summary` | Tazama mabadiliko (kwa undani) |
| `git log --oneline` | Tazama mabadiliko (kwa ufupi) |
| `git diff [source branch] [target branch]` | Angalia mabadiliko kabla ya kuunganisha |

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.