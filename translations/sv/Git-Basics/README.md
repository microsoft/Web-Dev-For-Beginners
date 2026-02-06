## Grunderna i GIT för webbutvecklingsnybörjare👶

## Vad är `Git`?
1. Git är ett distribuerat versionskontrollsystem.  
2. Hela kodbasen och historiken finns tillgänglig på varje utvecklares dator,  
   vilket gör det enkelt att skapa och slå samman grenar.  
3. Det används som ett Versionskontrollsystem (VCS) för att spåra ändringar i datorfiler.  

* Distribuerad versionskontroll  
* Koordinerar arbete mellan flera utvecklare  
* Vem gjorde vilka ändringar och när  
* Återgå till tidigare versioner när som helst  
* Lokala och fjärrlagrade repositorier  

## GIT-KONCEPT  
* Håller koll på kodhistorik  
* Tar "ögonblicksbilder" av dina filer  
* Du bestämmer när du ska ta en ögonblicksbild genom att göra en "commit"  
* Du kan besöka vilken ögonblicksbild som helst när som helst  
* Du kan förbereda filer innan du gör en commit  

### Skillnad mellan Git & GitHub  

| Git | GitHub |  
| ------- | ----------- |  
| Git är en mjukvara | GitHub är en molntjänst |  
| Git installeras lokalt på systemet | GitHub är värd på webben |  
| Det är ett kommandoradsverktyg | Det är en grafisk användargränssnitt |  
| Git underhålls av Linux | GitHub underhålls av Microsoft |  
| Det fokuserar på versionskontroll och koddelning | Det fokuserar på centraliserad källkodshantering |  
| Git är open-source licensierad | GitHub har en gratisnivå och en betalnivå |  
| Git släpptes 2005 | GitHub släpptes 2008 |  

## GIT Installation  
* Linux (Debian)  
    `$sudo apt-get install git`  
* Linux (Fedora)  
    `$sudo yum install git`  
* [Ladda ner](http://git-scm.com/download/mac) för Mac  
* [Ladda ner](http://git-scm.com/download/win) för Windows  

### Installationssteg:  
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>  
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>  
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>  
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>  
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>  
6. Och sedan fortsätt Nästa > Nästa > Nästa > <b>Installera</b>  
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>  

### Efter installationen behöver vi konfigurera git med hjälp av git bash  
1. `git config --global user.name 'YourName'`  
2. `git config --global user.email 'YourEmail'`  
___  

## Git-kommandon  
___  

### Hämta & Skapa projekt  

| Kommando | Beskrivning |  
| ------- | ----------- |  
| `git init` | Initiera ett lokalt Git-repository |  
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Skapa en lokal kopia av ett fjärrrepository |  

### Grundläggande ögonblicksbilder  

| Kommando | Beskrivning |  
| ------- | ----------- |  
| `git status` | Kontrollera status |  
| `git add [file-name.txt]` | Lägg till en fil i stagingområdet |  
| `git add -A` | Lägg till alla nya och ändrade filer i stagingområdet |  
| `git commit -m "[commit message]"` | Commit ändringar |  
| `git rm -r [file-name.txt]` | Ta bort en fil (eller mapp) |  
| `git push` | Skicka till fjärrrepository |  
| `git pull` | Hämta senaste ändringar från fjärrrepository |  

### Grenar & Sammanfogning  

| Kommando | Beskrivning |  
| ------- | ----------- |  
| `git branch` | Lista grenar (stjärnan markerar den aktuella grenen) |  
| `git branch -a` | Lista alla grenar (lokala och fjärrlagrade) |  
| `git branch [branch name]` | Skapa en ny gren |  
| `git branch -D [branch name]` | Ta bort en gren |  
| `git push origin --delete [branch name]` | Ta bort en fjärrgren |  
| `git checkout -b [branch name]` | Skapa en ny gren och växla till den |  
| `git checkout -b [branch name] origin/[branch name]` | Klona en fjärrgren och växla till den |  
| `git branch -m [old branch name] [new branch name]` | Byt namn på en lokal gren |  
| `git checkout [branch name]` | Växla till en gren |  
| `git checkout -` | Växla till den senast utcheckade grenen |  
| `git checkout -- [file-name.txt]` | Ångra ändringar i en fil |  
| `git merge [branch name]` | Slå samman en gren med den aktiva grenen |  
| `git merge [source branch] [target branch]` | Slå samman en gren med en målgren |  
| `git stash` | Spara ändringar i en smutsig arbetskatalog |  
| `git stash clear` | Ta bort alla sparade poster |  

### Dela & Uppdatera projekt  

| Kommando | Beskrivning |  
| ------- | ----------- |  
| `git push origin [branch name]` | Skicka en gren till ditt fjärrrepository |  
| `git push -u origin [branch name]` | Skicka ändringar till fjärrrepository (och kom ihåg grenen) |  
| `git push` | Skicka ändringar till fjärrrepository (kom ihåg grenen) |  
| `git push origin --delete [branch name]` | Ta bort en fjärrgren |  
| `git pull` | Uppdatera lokalt repository till den senaste commit |  
| `git pull origin [branch name]` | Hämta ändringar från fjärrrepository |  
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Lägg till ett fjärrrepository |  
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Ställ in ett repositorys ursprungsgren till SSH |  

### Inspektion & Jämförelse  

| Kommando | Beskrivning |  
| ------- | ----------- |  
| `git log` | Visa ändringar |  
| `git log --summary` | Visa ändringar (detaljerat) |  
| `git log --oneline` | Visa ändringar (kortfattat) |  
| `git diff [source branch] [target branch]` | Förhandsgranska ändringar innan sammanfogning |  

---

**Ansvarsfriskrivning**:  
Detta dokument har översatts med hjälp av AI-översättningstjänsten [Co-op Translator](https://github.com/Azure/co-op-translator). Även om vi strävar efter noggrannhet, bör det noteras att automatiserade översättningar kan innehålla fel eller felaktigheter. Det ursprungliga dokumentet på dess originalspråk bör betraktas som den auktoritativa källan. För kritisk information rekommenderas professionell mänsklig översättning. Vi ansvarar inte för eventuella missförstånd eller feltolkningar som uppstår vid användning av denna översättning.