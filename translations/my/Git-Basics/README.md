<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T16:00:29+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "my"
}
-->
## Git အခြေခံများ - ဝက်ဘ်ဒီဗယ်လော့ပင်း စတင်သူများအတွက်👶

## `Git` ဆိုတာဘာလဲ?
      1. Git က အခြေခံထားတဲ့ version control system တစ်ခုဖြစ်ပါတယ်။
      2. Codebase အပြည့်အစုံနဲ့ အတိတ်မှတ်တမ်းတွေကို developer တစ်ဦးချင်းစီရဲ့ ကွန်ပျူတာမှာ သိမ်းဆည်းထားနိုင်ပြီး 
         branch တွေဖွင့်တာနဲ့ merge လုပ်တာတွေကို လွယ်ကူစွာလုပ်ဆောင်နိုင်ပါတယ်။
      3. Computer file တွေမှာ ပြောင်းလဲမှုတွေကို ထိန်းသိမ်းဖို့ Version Control System (VCS) အနေနဲ့ အသုံးပြုပါတယ်။

* Distributed version control
* Developer များစွာအကြား အလုပ်ကို စည်းရုံးပေါင်းစည်းပေးခြင်း  
* ဘယ်သူက ဘာပြောင်းလဲမှုတွေ လုပ်ခဲ့ပြီး ဘယ်အချိန်မှာလုပ်ခဲ့လဲဆိုတာ သိနိုင်ခြင်း
* အချိန်မရွေး ပြန်လည်ပြောင်းလဲနိုင်ခြင်း
* Local & remote repos

## Git ရဲ့ အဓိကအကြောင်းအရာများ
* Code ရဲ့ အတိတ်မှတ်တမ်းကို ထိန်းသိမ်းပေးခြင်း
* ဖိုင်တွေကို "snapshot" အနေနဲ့ သိမ်းဆည်းပေးခြင်း
* "commit" လုပ်တဲ့အခါမှာ snapshot ကို သင်ဆုံးဖြတ်နိုင်ခြင်း
* အချိန်မရွေး snapshot ကို ပြန်လည်ကြည့်ရှုနိုင်ခြင်း
* commit လုပ်မယ့်အခါ ဖိုင်တွေကို stage လုပ်နိုင်ခြင်း

### Git နဲ့ GitHub အကြားကွာခြားချက်

| Git | GitHub |
| ------- | ----------- |
| Git က software | GitHub က cloud service |
| Git ကို local system မှာ install လုပ်ထားရမယ် | GitHub က web မှာ host လုပ်ထားတာ |
| Command-line tool | Graphical user interface |
| Git ကို Linux က maintain လုပ်ထားတာ | GitHub ကို Microsoft က maintain လုပ်ထားတာ |
| Version control နဲ့ code sharing အပေါ် အာရုံစိုက်ထားတာ | Centralized source code hosting အပေါ် အာရုံစိုက်ထားတာ |
| Git က open-source licensed | GitHub မှာ free-tier နဲ့ pay-for-use tier ပါဝင်တယ် |
| Git ကို 2005 ခုနှစ်မှာ release လုပ်ခဲ့တယ် | GitHub ကို 2008 ခုနှစ်မှာ release လုပ်ခဲ့တယ် |

## Git Install လုပ်ခြင်း
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* Mac အတွက် [Download](http://git-scm.com/download/mac)
* Windows အတွက် [Download](http://git-scm.com/download/win)

### Install လုပ်နည်းအဆင့်များ:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. ထို့နောက် Next > Next > Next > <b>Install</b> ကို ဆက်လက်လုပ်ဆောင်ပါ။
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Install လုပ်ပြီးနောက် git ကို git bash အသုံးပြု configure လုပ်ရန်လိုအပ်ပါတယ်
  1. `git config --global user.name 'YourName'`
  2. `git config --global user.email 'YourEmail'`
___

## Git Commands
___

### Project ရယူခြင်းနှင့် ဖန်တီးခြင်း

| Command | Description |
| ------- | ----------- |
| `git init` | Local Git repository ကို initialize လုပ်ခြင်း |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Remote repository ရဲ့ local copy တစ်ခု ဖန်တီးခြင်း |

### Snapshot အခြေခံများ

| Command | Description |
| ------- | ----------- |
| `git status` | Status ကို စစ်ဆေးခြင်း |
| `git add [file-name.txt]` | File ကို staging area ထဲထည့်ခြင်း |
| `git add -A` | အသစ်ထည့်ထားတဲ့ file တွေ၊ ပြောင်းလဲထားတဲ့ file တွေကို staging area ထဲထည့်ခြင်း |
| `git commit -m "[commit message]"` | Changes တွေကို commit လုပ်ခြင်း |
| `git rm -r [file-name.txt]` | File (folder) ကို ဖျက်ခြင်း |
| `git push` | Remote repository သို့ push လုပ်ခြင်း |
| `git pull` | Remote repository မှ နောက်ဆုံး changes တွေကို pull လုပ်ခြင်း |

### Branching & Merging

| Command | Description |
| ------- | ----------- |
| `git branch` | Branch တွေကို စစ်ဆေးခြင်း (current branch ကို * နဲ့ပြထားသည်) |
| `git branch -a` | Branch အားလုံးကို စစ်ဆေးခြင်း (local နဲ့ remote) |
| `git branch [branch name]` | Branch အသစ်ဖန်တီးခြင်း |
| `git branch -D [branch name]` | Branch ကို ဖျက်ခြင်း |
| `git push origin --delete [branch name]` | Remote branch ကို ဖျက်ခြင်း |
| `git checkout -b [branch name]` | Branch အသစ်ဖန်တီးပြီး switch လုပ်ခြင်း |
| `git checkout -b [branch name] origin/[branch name]` | Remote branch ကို clone လုပ်ပြီး switch လုပ်ခြင်း |
| `git branch -m [old branch name] [new branch name]` | Local branch ကို rename လုပ်ခြင်း |
| `git checkout [branch name]` | Branch ကို switch လုပ်ခြင်း |
| `git checkout -` | နောက်ဆုံး switch လုပ်ထားတဲ့ branch ကို ပြန်သွားခြင်း |
| `git checkout -- [file-name.txt]` | File ရဲ့ changes တွေကို ဖျက်ခြင်း |
| `git merge [branch name]` | Active branch ထဲကို branch တစ်ခုကို merge လုပ်ခြင်း |
| `git merge [source branch] [target branch]` | Target branch ထဲကို source branch ကို merge လုပ်ခြင်း |
| `git stash` | Dirty working directory ထဲမှာ changes တွေကို stash လုပ်ခြင်း |
| `git stash clear` | Stashed entries အားလုံးကို ဖျက်ခြင်း |

### Project တွေကို Share လုပ်ခြင်းနှင့် Update လုပ်ခြင်း

| Command | Description |
| ------- | ----------- |
| `git push origin [branch name]` | Remote repository သို့ branch ကို push လုပ်ခြင်း |
| `git push -u origin [branch name]` | Remote repository သို့ changes တွေကို push လုပ်ပြီး branch ကို မှတ်ထားခြင်း |
| `git push` | Remote repository သို့ changes တွေကို push လုပ်ခြင်း (မှတ်ထားတဲ့ branch) |
| `git push origin --delete [branch name]` | Remote branch ကို ဖျက်ခြင်း |
| `git pull` | Local repository ကို နောက်ဆုံး commit အတိုင်း update လုပ်ခြင်း |
| `git pull origin [branch name]` | Remote repository မှ changes တွေကို pull လုပ်ခြင်း |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Remote repository ကို ထည့်သွင်းခြင်း |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Repository ရဲ့ origin branch ကို SSH သို့ ပြောင်းခြင်း |

### Inspection & Comparison

| Command | Description |
| ------- | ----------- |
| `git log` | Changes တွေကို ကြည့်ရှုခြင်း |
| `git log --summary` | Changes တွေကို အသေးစိတ်ကြည့်ရှုခြင်း |
| `git log --oneline` | Changes တွေကို အကျဉ်းချုပ်ကြည့်ရှုခြင်း |
| `git diff [source branch] [target branch]` | Merge လုပ်မယ့်အခါ Changes တွေကို Preview ကြည့်ရှုခြင်း |

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရားရှိသော ရင်းမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။