## GIT pagrindai pradedantiesiems web kūrėjams👶

## Kas yra `Git`?
1. Git yra paskirstyta versijų kontrolės sistema.
2. Visa kodų bazė ir istorija yra prieinama kiekvieno kūrėjo kompiuteryje, 
   todėl lengva kurti šakas ir jas sujungti.
3. Naudojama kaip versijų kontrolės sistema (VCS), skirta sekti pakeitimus kompiuterio failuose.

* Paskirstyta versijų kontrolė
* Koordinuoja darbą tarp kelių kūrėjų  
* Kas atliko kokius pakeitimus ir kada
* Galimybė grįžti atgal bet kuriuo metu
* Vietiniai ir nuotoliniai repozitorijai

## GIT KONCEPCIJOS
* Sekama kodo istorija
* "Fotografuoja" jūsų failus
* Jūs nusprendžiate, kada padaryti "nuotrauką", atlikdami "commit"
* Galite bet kada peržiūrėti bet kurią "nuotrauką"
* Galite paruošti failus prieš atlikdami commit

### Skirtumas tarp Git ir GitHub

| Git | GitHub |
| ------- | ----------- |
| Git yra programinė įranga | GitHub yra debesų paslauga |
| Git įdiegtas vietoje sistemoje | GitHub yra talpinamas internete |
| Tai komandų eilutės įrankis | Tai grafinė vartotojo sąsaja |
| Git prižiūri Linux | GitHub prižiūri Microsoft |
| Dėmesys versijų kontrolei ir kodo dalijimuisi | Dėmesys centralizuotam kodo talpinimui |
| Git yra atviro kodo licencijuotas | GitHub turi nemokamą ir mokamą versiją |
| Git išleistas 2005 m. | GitHub išleistas 2008 m. |

## GIT įdiegimas
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [Atsisiųsti](http://git-scm.com/download/mac) Mac
* [Atsisiųsti](http://git-scm.com/download/win) Windows

### Įdiegimo proceso žingsniai:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Tada tęskite Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Po įdiegimo reikia sukonfigūruoti Git naudojant Git Bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git komandos
___

### Projektų gavimas ir kūrimas

| Komanda | Aprašymas |
| ------- | ----------- |
| `git init` | Inicializuoti vietinį Git repozitorijų |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Sukurti vietinę nuotolinio repozitorijaus kopiją |

### Pagrindinis momentų fiksavimas

| Komanda | Aprašymas |
| ------- | ----------- |
| `git status` | Patikrinti būseną |
| `git add [file-name.txt]` | Pridėti failą į paruošimo zoną |
| `git add -A` | Pridėti visus naujus ir pakeistus failus į paruošimo zoną |
| `git commit -m "[commit message]"` | Įrašyti pakeitimus |
| `git rm -r [file-name.txt]` | Pašalinti failą (arba aplanką) |
| `git push` | Išsiųsti į nuotolinį repozitorijų |
| `git pull` | Atsisiųsti naujausius pakeitimus iš nuotolinio repozitorijaus |

### Šakų kūrimas ir sujungimas

| Komanda | Aprašymas |
| ------- | ----------- |
| `git branch` | Sąrašas šakų (žvaigždutė nurodo dabartinę šaką) |
| `git branch -a` | Sąrašas visų šakų (vietinių ir nuotolinių) |
| `git branch [branch name]` | Sukurti naują šaką |
| `git branch -D [branch name]` | Ištrinti šaką |
| `git push origin --delete [branch name]` | Ištrinti nuotolinę šaką |
| `git checkout -b [branch name]` | Sukurti naują šaką ir pereiti į ją |
| `git checkout -b [branch name] origin/[branch name]` | Nukopijuoti nuotolinę šaką ir pereiti į ją |
| `git branch -m [old branch name] [new branch name]` | Pervadinti vietinę šaką |
| `git checkout [branch name]` | Pereiti į šaką |
| `git checkout -` | Pereiti į paskutinę naudotą šaką |
| `git checkout -- [file-name.txt]` | Atsisakyti pakeitimų faile |
| `git merge [branch name]` | Sujungti šaką su aktyvia šaka |
| `git merge [source branch] [target branch]` | Sujungti šaką su tikslinė šaka |
| `git stash` | Išsaugoti pakeitimus nešvarioje darbo aplinkoje |
| `git stash clear` | Pašalinti visus išsaugotus įrašus |

### Projektų dalijimasis ir atnaujinimas

| Komanda | Aprašymas |
| ------- | ----------- |
| `git push origin [branch name]` | Išsiųsti šaką į nuotolinį repozitorijų |
| `git push -u origin [branch name]` | Išsiųsti pakeitimus į nuotolinį repozitorijų (ir prisiminti šaką) |
| `git push` | Išsiųsti pakeitimus į nuotolinį repozitorijų (prisiminta šaka) |
| `git push origin --delete [branch name]` | Ištrinti nuotolinę šaką |
| `git pull` | Atnaujinti vietinį repozitorijų iki naujausio commit |
| `git pull origin [branch name]` | Atsisiųsti pakeitimus iš nuotolinio repozitorijaus |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Pridėti nuotolinį repozitorijų |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Nustatyti repozitorijaus origin šaką į SSH |

### Inspekcija ir palyginimas

| Komanda | Aprašymas |
| ------- | ----------- |
| `git log` | Peržiūrėti pakeitimus |
| `git log --summary` | Peržiūrėti pakeitimus (detaliai) |
| `git log --oneline` | Peržiūrėti pakeitimus (trumpai) |
| `git diff [source branch] [target branch]` | Peržiūrėti pakeitimus prieš sujungimą |

---

**Atsakomybės atsisakymas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingus aiškinimus, kilusius dėl šio vertimo naudojimo.