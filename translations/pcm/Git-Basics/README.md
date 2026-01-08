<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2026-01-08T10:45:55+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "pcm"
}
-->
## Basics of GIT for web-dev beginners👶


## Wetin be `Git`?
      1. Git na one kind distributed version control system.
      2. Di whole codebase and history dey available for every developer computer, 
         wey dey allow easy branching and merging.
      3. Dem dey use am as Version Control System (VCS) to track changes for computer files.
      
* Distributed version control
* E dey coordinate work between many developers  
* Who change wetin and when
* Fit revert back anytime
* Local & remote repos

## CONCEPTS OF GIT
* E dey keep track of code history
* E dey take "snapshots" of your files
* Na you dey decide when to take snapshot by doing "commit"
* You fit go any snapshot anytime
* You fit stage files before you commit

### Difference Between Git & GitHub

| Git | GitHub |
| ------- | ----------- |
| Git na software | GitHub na cloud service |
| Git dey installed locally for system | GitHub dey hosted for web |
| Na command-line tool e be | Na graphical user interface e be |
| Linux dey maintain Git | Microsoft dey maintain GitHub |
| E focus on version control and code sharing | E focus on centralized source code hosting |
| Git get open-source license | GitHub get free-tier plus pay-for-use tier |
| Git release for 2005 | GitHub release for 2008 |


## GIT Installation
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* [Download](http://git-scm.com/download/mac) for Mac
* [Download](http://git-scm.com/download/win) for Windows


### Installation Process Steps: 
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. And then Continue Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>







 ### After you don install, we need configure git using git bash
  1. `git config --global user.name 'YourName'`
  2. `git config --global user.email 'YourEmail'`
___



## Git Commands
___

### Getting & Creating Projects

| Command | Description |
| ------- | ----------- |
| `git init` | Start local Git repository |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Make local copy of remote repository |

### Basic Snapshotting

| Command | Description |
| ------- | ----------- |
| `git status` | Check status |
| `git add [file-name.txt]` | Add file to staging area |
| `git add -A` | Add all new and changed files to staging area |
| `git commit -m "[commit message]"` | Commit changes |
| `git rm -r [file-name.txt]` | Remove file or folder |
| `git push` | Push To Remote Repository |
| `git pull` | Pull Latest Changes From Remote Repository |

### Branching & Merging

| Command | Description |
| ------- | ----------- |
| `git branch` | List branches (asterisk na current branch) |
| `git branch -a` | List all branches (local and remote) |
| `git branch [branch name]` | Create new branch |
| `git branch -D [branch name]` | Delete branch |
| `git push origin --delete [branch name]` | Delete remote branch |
| `git checkout -b [branch name]` | Create and switch to new branch |
| `git checkout -b [branch name] origin/[branch name]` | Clone remote branch and switch to am |
| `git branch -m [old branch name] [new branch name]` | Rename local branch |
| `git checkout [branch name]` | Switch to branch |
| `git checkout -` | Switch to last checked branch |
| `git checkout -- [file-name.txt]` | Discard changes to file |
| `git merge [branch name]` | Merge branch into active branch |
| `git merge [source branch] [target branch]` | Merge branch into target branch |
| `git stash` | Stash changes for dirty working directory |
| `git stash clear` | Remove all stashed entries |

### Sharing & Updating Projects

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Push branch to your remote repository |
| `git push -u origin [branch name]` | Push changes to remote and remember branch |
| `git push` | Push changes to remote (remembered branch) |
| `git push origin --delete [branch name]` | Delete remote branch |
| `git pull` | Update local repo to newest commit |
| `git pull origin [branch name]` | Pull changes from remote repository |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Add remote repository |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Set origin branch to SSH |

### Inspection & Comparison

| Command | Description |
| ------- | ----------- |
| `git log` | View changes |
| `git log --summary` | View changes (detailed) |
| `git log --oneline` | View changes (brief) |
| `git diff [source branch] [target branch]` | Preview changes before merging |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**:
Dis document na AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator) translate am. Even though we dey try make am correct, make you sabi say automated translation fit get some mistakes or no too clear. Di original document wey e dey for im correct language na di main correct source. If na serious information, better make person wey sabi do professional human translation do am. We no go take responsibility if pesin no understand well or e get wahala because of this translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->