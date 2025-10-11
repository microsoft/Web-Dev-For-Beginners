<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:50:22+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "pa"
}
-->
## ਵੈੱਬ-ਡਿਵੈਲਪਰ ਸ਼ੁਰੂਆਤੀ ਲਈ GIT ਦੇ ਬੁਨਿਆਦੀ ਪਾਠ👶

## `Git` ਕੀ ਹੈ?
1. Git ਇੱਕ ਵੰਡਿਆ ਹੋਇਆ ਵਰਜਨ ਕੰਟਰੋਲ ਸਿਸਟਮ ਹੈ।
2. ਪੂਰਾ ਕੋਡਬੇਸ ਅਤੇ ਇਤਿਹਾਸ ਹਰ ਡਿਵੈਲਪਰ ਦੇ ਕੰਪਿਊਟਰ 'ਤੇ ਉਪਲਬਧ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਆਸਾਨ ਬ੍ਰਾਂਚਿੰਗ ਅਤੇ ਮਰਜਿੰਗ ਸੰਭਵ ਹੁੰਦੀ ਹੈ।
3. ਇਹ ਕੰਪਿਊਟਰ ਫਾਈਲਾਂ ਵਿੱਚ ਤਬਦੀਲੀਆਂ ਨੂੰ ਟ੍ਰੈਕ ਕਰਨ ਲਈ ਵਰਜਨ ਕੰਟਰੋਲ ਸਿਸਟਮ (VCS) ਵਜੋਂ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

* ਵੰਡਿਆ ਹੋਇਆ ਵਰਜਨ ਕੰਟਰੋਲ
* ਕਈ ਡਿਵੈਲਪਰਾਂ ਦੇ ਕੰਮ ਨੂੰ ਸਹਿਮਤ ਕਰਦਾ ਹੈ  
* ਕਿਸ ਨੇ ਕੀ ਤਬਦੀਲੀਆਂ ਕੀਤੀਆਂ ਅਤੇ ਕਦੋਂ
* ਕਿਸੇ ਵੀ ਸਮੇਂ ਵਾਪਸ ਜਾ ਸਕਦੇ ਹੋ
* ਲੋਕਲ ਅਤੇ ਰਿਮੋਟ ਰਿਪੋਜ਼

## GIT ਦੇ ਮੂਲ ਸਿਧਾਂਤ
* ਕੋਡ ਇਤਿਹਾਸ ਨੂੰ ਟ੍ਰੈਕ ਕਰਦਾ ਹੈ
* ਤੁਹਾਡੇ ਫਾਈਲਾਂ ਦੇ "ਸਨੈਪਸ਼ਾਟ" ਲੈਂਦਾ ਹੈ
* ਤੁਸੀਂ "ਕਮਿਟ" ਕਰਕੇ ਸਨੈਪਸ਼ਾਟ ਲੈਣ ਦਾ ਫੈਸਲਾ ਕਰਦੇ ਹੋ
* ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ ਕਿਸੇ ਵੀ ਸਨੈਪਸ਼ਾਟ 'ਤੇ ਜਾ ਸਕਦੇ ਹੋ
* ਤੁਸੀਂ ਕਮਿਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਫਾਈਲਾਂ ਨੂੰ ਸਟੇਜ ਕਰ ਸਕਦੇ ਹੋ

### Git ਅਤੇ GitHub ਵਿੱਚ ਅੰਤਰ

| Git | GitHub |
| ------- | ----------- |
| Git ਇੱਕ ਸੌਫਟਵੇਅਰ ਹੈ | GitHub ਇੱਕ ਕਲਾਉਡ ਸੇਵਾ ਹੈ |
| Git ਸਿਸਟਮ 'ਤੇ ਲੋਕਲ ਤੌਰ 'ਤੇ ਇੰਸਟਾਲ ਕੀਤਾ ਜਾਂਦਾ ਹੈ | GitHub ਵੈੱਬ 'ਤੇ ਹੋਸਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ |
| ਇਹ ਇੱਕ ਕਮਾਂਡ-ਲਾਈਨ ਟੂਲ ਹੈ | ਇਹ ਇੱਕ ਗ੍ਰਾਫਿਕਲ ਯੂਜ਼ਰ ਇੰਟਰਫੇਸ ਹੈ |
| Git ਨੂੰ Linux ਦੁਆਰਾ ਸੰਭਾਲਿਆ ਜਾਂਦਾ ਹੈ | GitHub ਨੂੰ Microsoft ਦੁਆਰਾ ਸੰਭਾਲਿਆ ਜਾਂਦਾ ਹੈ |
| ਇਹ ਵਰਜਨ ਕੰਟਰੋਲ ਅਤੇ ਕੋਡ ਸਾਂਝਾ ਕਰਨ 'ਤੇ ਕੇਂਦ੍ਰਿਤ ਹੈ | ਇਹ ਕੇਂਦ੍ਰਿਤ ਸਰੋਤ ਕੋਡ ਹੋਸਟਿੰਗ 'ਤੇ ਕੇਂਦ੍ਰਿਤ ਹੈ |
| Git ਖੁੱਲੇ-ਸਰੋਤ ਲਾਇਸੰਸ ਹੈ | GitHub ਵਿੱਚ ਮੁਫ਼ਤ-ਟੀਅਰ ਅਤੇ ਭੁਗਤਾਨ-ਵਰਤੋਂ ਟੀਅਰ ਸ਼ਾਮਲ ਹੈ |
| Git 2005 ਵਿੱਚ ਜਾਰੀ ਕੀਤਾ ਗਿਆ ਸੀ | GitHub 2008 ਵਿੱਚ ਜਾਰੀ ਕੀਤਾ ਗਿਆ ਸੀ |

## GIT ਇੰਸਟਾਲੇਸ਼ਨ
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* Mac ਲਈ [Download](http://git-scm.com/download/mac)
* Windows ਲਈ [Download](http://git-scm.com/download/win)

### ਇੰਸਟਾਲੇਸ਼ਨ ਪ੍ਰਕਿਰਿਆ ਦੇ ਕਦਮ:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. ਫਿਰ Next > Next > Next > <b>Install</b> 'ਤੇ ਜਾਰੀ ਰੱਖੋ
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### ਇੰਸਟਾਲੇਸ਼ਨ ਤੋਂ ਬਾਅਦ, ਸਾਨੂੰ git ਨੂੰ git bash ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਕਨਫਿਗਰ ਕਰਨ ਦੀ ਲੋੜ ਹੈ
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git Commands
___

### ਪ੍ਰਾਜੈਕਟ ਪ੍ਰਾਪਤ ਕਰਨਾ ਅਤੇ ਬਣਾਉਣਾ

| Command | Description |
| ------- | ----------- |
| `git init` | ਇੱਕ ਲੋਕਲ Git ਰਿਪੋਜ਼ਟਰੀ ਸ਼ੁਰੂ ਕਰੋ |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | ਇੱਕ ਰਿਮੋਟ ਰਿਪੋਜ਼ਟਰੀ ਦੀ ਲੋਕਲ ਕਾਪੀ ਬਣਾਓ |

### ਬੁਨਿਆਦੀ ਸਨੈਪਸ਼ਾਟਿੰਗ

| Command | Description |
| ------- | ----------- |
| `git status` | ਸਥਿਤੀ ਚੈੱਕ ਕਰੋ |
| `git add [file-name.txt]` | ਇੱਕ ਫਾਈਲ ਨੂੰ ਸਟੇਜਿੰਗ ਖੇਤਰ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ |
| `git add -A` | ਸਾਰੀਆਂ ਨਵੀਆਂ ਅਤੇ ਬਦਲੀਆਂ ਫਾਈਲਾਂ ਨੂੰ ਸਟੇਜਿੰਗ ਖੇਤਰ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ |
| `git commit -m "[commit message]"` | ਤਬਦੀਲੀਆਂ ਕਮਿਟ ਕਰੋ |
| `git rm -r [file-name.txt]` | ਇੱਕ ਫਾਈਲ (ਜਾਂ ਫੋਲਡਰ) ਹਟਾਓ |
| `git push` | ਰਿਮੋਟ ਰਿਪੋਜ਼ਟਰੀ 'ਤੇ ਪੂਸ਼ ਕਰੋ |
| `git pull` | ਰਿਮੋਟ ਰਿਪੋਜ਼ਟਰੀ ਤੋਂ ਤਾਜ਼ਾ ਤਬਦੀਲੀਆਂ ਖਿੱਚੋ |

### ਬ੍ਰਾਂਚਿੰਗ ਅਤੇ ਮਰਜਿੰਗ

| Command | Description |
| ------- | ----------- |
| `git branch` | ਬ੍ਰਾਂਚਾਂ ਦੀ ਸੂਚੀ (ਤਾਰਾ ਮੌਜੂਦਾ ਬ੍ਰਾਂਚ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ) |
| `git branch -a` | ਸਾਰੀਆਂ ਬ੍ਰਾਂਚਾਂ ਦੀ ਸੂਚੀ (ਲੋਕਲ ਅਤੇ ਰਿਮੋਟ) |
| `git branch [branch name]` | ਇੱਕ ਨਵੀਂ ਬ੍ਰਾਂਚ ਬਣਾਓ |
| `git branch -D [branch name]` | ਇੱਕ ਬ੍ਰਾਂਚ ਮਿਟਾਓ |
| `git push origin --delete [branch name]` | ਇੱਕ ਰਿਮੋਟ ਬ੍ਰਾਂਚ ਮਿਟਾਓ |
| `git checkout -b [branch name]` | ਇੱਕ ਨਵੀਂ ਬ੍ਰਾਂਚ ਬਣਾਓ ਅਤੇ ਇਸ 'ਤੇ ਸਵਿੱਚ ਕਰੋ |
| `git checkout -b [branch name] origin/[branch name]` | ਇੱਕ ਰਿਮੋਟ ਬ੍ਰਾਂਚ ਕਲੋਨ ਕਰੋ ਅਤੇ ਇਸ 'ਤੇ ਸਵਿੱਚ ਕਰੋ |
| `git branch -m [old branch name] [new branch name]` | ਇੱਕ ਲੋਕਲ ਬ੍ਰਾਂਚ ਦਾ ਨਾਮ ਬਦਲੋ |
| `git checkout [branch name]` | ਇੱਕ ਬ੍ਰਾਂਚ 'ਤੇ ਸਵਿੱਚ ਕਰੋ |
| `git checkout -` | ਪਿਛਲੀ ਚੈੱਕ ਕੀਤੀ ਗਈ ਬ੍ਰਾਂਚ 'ਤੇ ਸਵਿੱਚ ਕਰੋ |
| `git checkout -- [file-name.txt]` | ਇੱਕ ਫਾਈਲ ਵਿੱਚ ਤਬਦੀਲੀਆਂ ਰੱਦ ਕਰੋ |
| `git merge [branch name]` | ਇੱਕ ਬ੍ਰਾਂਚ ਨੂੰ ਸਰਗਰਮ ਬ੍ਰਾਂਚ ਵਿੱਚ ਮਰਜ ਕਰੋ |
| `git merge [source branch] [target branch]` | ਇੱਕ ਬ੍ਰਾਂਚ ਨੂੰ ਟਾਰਗਟ ਬ੍ਰਾਂਚ ਵਿੱਚ ਮਰਜ ਕਰੋ |
| `git stash` | ਗੰਦੇ ਵਰਕਿੰਗ ਡਾਇਰੈਕਟਰੀ ਵਿੱਚ ਤਬਦੀਲੀਆਂ ਸਟੈਸ਼ ਕਰੋ |
| `git stash clear` | ਸਾਰੀਆਂ ਸਟੈਸ਼ ਕੀਤੀਆਂ ਐਂਟਰੀਆਂ ਹਟਾਓ |

### ਪ੍ਰਾਜੈਕਟ ਸਾਂਝੇ ਕਰਨਾ ਅਤੇ ਅਪਡੇਟ ਕਰਨਾ

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | ਆਪਣੀ ਰਿਮੋਟ ਰਿਪੋਜ਼ਟਰੀ 'ਤੇ ਇੱਕ ਬ੍ਰਾਂਚ ਪੂਸ਼ ਕਰੋ |
| `git push -u origin [branch name]` | ਰਿਮੋਟ ਰਿਪੋਜ਼ਟਰੀ 'ਤੇ ਤਬਦੀਲੀਆਂ ਪੂਸ਼ ਕਰੋ (ਅਤੇ ਬ੍ਰਾਂਚ ਨੂੰ ਯਾਦ ਰੱਖੋ) |
| `git push` | ਰਿਮੋਟ ਰਿਪੋਜ਼ਟਰੀ 'ਤੇ ਤਬਦੀਲੀਆਂ ਪੂਸ਼ ਕਰੋ (ਯਾਦ ਰੱਖੀ ਗਈ ਬ੍ਰਾਂਚ) |
| `git push origin --delete [branch name]` | ਇੱਕ ਰਿਮੋਟ ਬ੍ਰਾਂਚ ਮਿਟਾਓ |
| `git pull` | ਲੋਕਲ ਰਿਪੋਜ਼ਟਰੀ ਨੂੰ ਸਭ ਤੋਂ ਨਵੀਂ ਕਮਿਟ 'ਤੇ ਅਪਡੇਟ ਕਰੋ |
| `git pull origin [branch name]` | ਰਿਮੋਟ ਰਿਪੋਜ਼ਟਰੀ ਤੋਂ ਤਬਦੀਲੀਆਂ ਖਿੱਚੋ |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | ਇੱਕ ਰਿਮੋਟ ਰਿਪੋਜ਼ਟਰੀ ਸ਼ਾਮਲ ਕਰੋ |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | ਇੱਕ ਰਿਪੋਜ਼ਟਰੀ ਦੀ ਮੂਲ ਬ੍ਰਾਂਚ ਨੂੰ SSH 'ਤੇ ਸੈਟ ਕਰੋ |

### ਜਾਂਚ ਅਤੇ ਤੁਲਨਾ

| Command | Description |
| ------- | ----------- |
| `git log` | ਤਬਦੀਲੀਆਂ ਵੇਖੋ |
| `git log --summary` | ਤਬਦੀਲੀਆਂ ਵੇਖੋ (ਵਿਸਤਾਰ ਨਾਲ) |
| `git log --oneline` | ਤਬਦੀਲੀਆਂ ਵੇਖੋ (ਸੰਖੇਪ ਵਿੱਚ) |
| `git diff [source branch] [target branch]` | ਮਰਜ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤਬਦੀਲੀਆਂ ਦਾ ਪੂਰਵ ਦਰਸ਼ਨ |

---

**ਅਸਵੀਕਰਤੀ**:  
ਇਹ ਦਸਤਾਵੇਜ਼ AI ਅਨੁਵਾਦ ਸੇਵਾ [Co-op Translator](https://github.com/Azure/co-op-translator) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦ ਕੀਤਾ ਗਿਆ ਹੈ। ਹਾਲਾਂਕਿ ਅਸੀਂ ਸਹੀ ਹੋਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਾਂ, ਕਿਰਪਾ ਕਰਕੇ ਧਿਆਨ ਦਿਓ ਕਿ ਸਵੈਚਾਲਿਤ ਅਨੁਵਾਦਾਂ ਵਿੱਚ ਗਲਤੀਆਂ ਜਾਂ ਅਸੁਚੀਤਤਾਵਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਇਸ ਦੀ ਮੂਲ ਭਾਸ਼ਾ ਵਿੱਚ ਮੌਜੂਦ ਅਸਲ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਅਧਿਕਾਰਤ ਸਰੋਤ ਮੰਨਿਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਮਹੱਤਵਪੂਰਨ ਜਾਣਕਾਰੀ ਲਈ, ਪੇਸ਼ੇਵਰ ਮਨੁੱਖੀ ਅਨੁਵਾਦ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਇਸ ਅਨੁਵਾਦ ਦੀ ਵਰਤੋਂ ਤੋਂ ਪੈਦਾ ਹੋਣ ਵਾਲੇ ਕਿਸੇ ਵੀ ਗਲਤਫਹਿਮੀ ਜਾਂ ਗਲਤ ਵਿਆਖਿਆ ਲਈ ਅਸੀਂ ਜ਼ਿੰਮੇਵਾਰ ਨਹੀਂ ਹਾਂ।