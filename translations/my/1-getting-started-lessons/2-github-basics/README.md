<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "361249da70432ddfd4741c917d1a6f50",
  "translation_date": "2025-08-28T18:53:20+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "my"
}
-->
# GitHub အကြောင်းမိတ်ဆက်

ဒီသင်ခန်းစာမှာ GitHub ရဲ့ အခြေခံအချက်တွေကို လေ့လာပါမယ်။ GitHub က သင့်ရဲ့ ကုဒ်ကို host လုပ်ပြီး ပြောင်းလဲမှုတွေကို စီမံခန့်ခွဲဖို့ platform တစ်ခုဖြစ်ပါတယ်။

![Intro to GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.my.png)
> [Tomomi Imura](https://twitter.com/girlie_mac) ရဲ့ Sketchnote

## သင်ခန်းစာမတိုင်မီ Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app)

## မိတ်ဆက်

ဒီသင်ခန်းစာမှာ အောက်ပါအချက်တွေကို လေ့လာပါမယ်-

- သင့်စက်မှာ လုပ်ဆောင်မှုတွေကို tracking လုပ်ခြင်း
- အခြားသူတွေနဲ့ ပရောဂျက်တွေမှာ အတူတူလုပ်ဆောင်ခြင်း
- open source software တွေကို ဘယ်လိုအကူအညီပေးနိုင်မလဲ

### လိုအပ်ချက်များ

စတင်မလုပ်ခင် Git install လုပ်ထားမထား စစ်ဆေးဖို့လိုအပ်ပါတယ်။ Terminal မှာ `git --version` လို့ ရိုက်ပါ။

Git install မလုပ်ထားရင် [Git ကို ဒေါင်းလုပ်လုပ်ပါ](https://git-scm.com/downloads)။ ပြီးရင် Terminal မှာ သင့်ရဲ့ Git profile ကို setup လုပ်ပါ:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Git configuration ရှိမရှိ စစ်ဆေးဖို့ `git config --list` လို့ ရိုက်ပါ။

GitHub account တစ်ခု၊ code editor (Visual Studio Code ကောင်းကောင်း) တစ်ခု၊ Terminal (command prompt) ကို ဖွင့်ထားဖို့ လိုအပ်ပါတယ်။

[github.com](https://github.com/) ကို သွားပြီး account တစ်ခုဖွင့်ပါ၊ မဖွင့်ရသေးရင် ဖွင့်ပါ၊ ဖွင့်ပြီးရင် profile ကို ဖြည့်ပါ။

✅ GitHub က ကမ္ဘာ့တစ်ခုတည်းသော code repository မဟုတ်ပါဘူး၊ အခြား platform တွေရှိပေမယ့် GitHub က အများဆုံး အသိအကျွမ်းရရှိထားပါတယ်။

### ပြင်ဆင်မှု

သင့်ရဲ့ local machine (laptop သို့မဟုတ် PC) မှာ code project ပါတဲ့ folder တစ်ခုလိုအပ်ပါတယ်။ GitHub မှာ public repository တစ်ခုလည်း လိုအပ်ပါတယ်။ ဒါက အခြားသူတွေရဲ့ project တွေကို ဘယ်လိုအကူအညီပေးရမလဲဆိုတာကို သင်ခန်းစာအနေနဲ့ အသုံးပြုနိုင်ပါတယ်။

---

## Code စီမံခန့်ခွဲမှု

သင့် local folder မှာ code project တစ်ခုရှိပြီး git (version control system) ကို အသုံးပြုပြီး သင့်ရဲ့ လုပ်ဆောင်မှုတွေကို tracking လုပ်ချင်တယ်ဆိုပါစို့။ git ကို အသုံးပြုတာကို အချို့လူတွေက "သင့်ရဲ့ အနာဂတ်ကိုချစ်တဲ့ စာရေးခြင်း" လို့ နှိုင်းယှဉ်တယ်။ commit messages တွေကို ရက်ပေါင်းများစွာ၊ လများစွာ၊ နှစ်များစွာအကြာမှာ ပြန်ဖတ်တဲ့အခါ သင့်ရဲ့ ဆုံးဖြတ်ချက်ကို ဘာကြောင့်လုပ်ခဲ့တာလဲ၊ သို့မဟုတ် ပြောင်းလဲမှုကို "rollback" လုပ်ဖို့ အလွယ်တကူ သတိရနိုင်ပါတယ်။

### Task: Repository တစ်ခုဖန်တီးပြီး code commit လုပ်ပါ  

> ဗီဒီယိုကို ကြည့်ပါ
> 
> [![Git and GitHub basics video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **GitHub မှာ repository တစ်ခုဖန်တီးပါ**။ GitHub.com မှာ repositories tab မှာ သို့မဟုတ် navigation bar ရဲ့ အပေါ်ယာဘက်မှာ **new repo** button ကို ရှာပါ။

   1. သင့် repository (folder) ကို နာမည်ပေးပါ။
   1. **create repository** ကို ရွေးပါ။

1. **သင့်ရဲ့ လုပ်ဆောင်မှု folder ကို ရှာပါ**။ Terminal မှာ သင့်ရဲ့ folder (directory) ကို ရွေးပါ။ အောက်ပါ command ကို ရိုက်ပါ:

   ```bash
   cd [name of your folder]
   ```

1. **Git repository ကို initialize လုပ်ပါ**။ သင့် project မှာ အောက်ပါ command ကို ရိုက်ပါ:

   ```bash
   git init
   ```

1. **Status ကို စစ်ဆေးပါ**။ Repository ရဲ့ status ကို စစ်ဆေးဖို့ အောက်ပါ command ကို ရိုက်ပါ:

   ```bash
   git status
   ```

   output က အောက်ပါအတိုင်း ဖြစ်နိုင်ပါတယ်:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   `git status` command က သင့်ရဲ့ repo မှာ save လုပ်ဖို့ ပြင်ဆင်ထားတဲ့ file တွေ၊ သို့မဟုတ် ပြောင်းလဲမှုရှိတဲ့ file တွေကို ပြသနိုင်ပါတယ်။

1. **File အားလုံးကို tracking လုပ်ပါ**
   ဒါကို staging files/ adding files to the staging area လို့လည်း ခေါ်ပါတယ်။

   ```bash
   git add .
   ```

   `git add` နဲ့ `.` argument က သင့်ရဲ့ file အားလုံးကို tracking လုပ်ဖို့ အညွှန်းပေးပါတယ်။

1. **ရွေးချယ်ထားတဲ့ file တွေကို tracking လုပ်ပါ**

   ```bash
   git add [file or folder name]
   ```

   ဒီ command က သင့်ရဲ့ next commit မှာ file အားလုံးကို tracking မလုပ်ချင်တဲ့အခါ ရွေးချယ်ထားတဲ့ file တွေကိုသာ staging area မှာ ထည့်နိုင်ပါတယ်။

1. **File အားလုံးကို unstaging လုပ်ပါ**

   ```bash
   git reset
   ```

   ဒီ command က file အားလုံးကို unstaging လုပ်ဖို့ အသုံးပြုနိုင်ပါတယ်။

1. **File တစ်ခုကို unstaging လုပ်ပါ**

   ```bash
   git reset [file or folder name]
   ```

   ဒီ command က next commit မှာ ထည့်မလိုတဲ့ file တစ်ခုကို unstaging လုပ်ဖို့ အသုံးပြုနိုင်ပါတယ်။

1. **သင့်ရဲ့ လုပ်ဆောင်မှုကို အတည်ပြုပါ**။ ဒီအချိန်မှာ သင့်ရဲ့ file တွေကို staging area မှာ ထည့်ပြီး Git က tracking လုပ်နေပါတယ်။ ပြောင်းလဲမှုကို permanent လုပ်ဖို့ commit လုပ်ဖို့လိုအပ်ပါတယ်။ Commit လုပ်ဖို့ `git commit` command ကို အသုံးပြုပါ။ Commit က သင့် repo ရဲ့ သမိုင်းမှာ save point တစ်ခုကို ကိုယ်စားပြုပါတယ်။ အောက်ပါ command ကို ရိုက်ပါ:

   ```bash
   git commit -m "first commit"
   ```

   ဒီ command က သင့်ရဲ့ file အားလုံးကို commit လုပ်ပြီး "first commit" message ကို ထည့်ပါမယ်။ အနာဂတ် commit messages တွေမှာ သင့်ရဲ့ ပြောင်းလဲမှုအမျိုးအစားကို ဖော်ပြဖို့ ပိုမိုဖော်ပြနိုင်တဲ့ description ကို အသုံးပြုပါ။

1. **Local Git repo ကို GitHub နဲ့ ချိတ်ဆက်ပါ**။ Git repo ကို သင့်စက်မှာ အသုံးပြုနိုင်ပေမယ့် တစ်ချိန်မှာ file တွေကို backup လုပ်ဖို့ သို့မဟုတ် အခြားသူတွေကို သင့် repo မှာ အလုပ်လုပ်ဖို့ ဖိတ်ခေါ်ဖို့ GitHub ကို အသုံးပြုချင်ပါလိမ့်မယ်။ GitHub မှာ repo တစ်ခုဖန်တီးပြီးသားဖြစ်တဲ့အတွက် local Git repo ကို GitHub နဲ့ ချိတ်ဆက်ဖို့ command `git remote add` ကို အသုံးပြုပါ။ အောက်ပါ command ကို ရိုက်ပါ:

   > သတိပြုပါ၊ command ကို ရိုက်မလုပ်ခင် GitHub repo page ကို သွားပြီး repository URL ကို ရှာပါ။ အောက်ပါ command မှာ ```https://github.com/username/repository_name.git``` ကို သင့် GitHub URL နဲ့ အစားထိုးပါ။

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   ဒီ command က "origin" လို့ခေါ်တဲ့ remote connection တစ်ခုကို ဖန်တီးပြီး သင့် GitHub repository ကို ချိတ်ဆက်ပါမယ်။

1. **Local file တွေကို GitHub ကို ပို့ပါ**။ အခုအချိန်မှာ local repo နဲ့ GitHub repo အကြား connection တစ်ခုဖန်တီးပြီးသားဖြစ်ပါတယ်။ File တွေကို GitHub ကို ပို့ဖို့ `git push` command ကို အသုံးပြုပါ:

   > သတိပြုပါ၊ သင့် branch name က ```main``` နဲ့ default အနေနဲ့ မတူနိုင်ပါတယ်။

   ```bash
   git push -u origin main
   ```

   ဒီ command က သင့်ရဲ့ "main" branch ရဲ့ commits တွေကို GitHub ကို ပို့ပါမယ်။

2. **အခြားပြောင်းလဲမှုတွေကို ထည့်ပါ**။ ပြောင်းလဲမှုတွေကို ဆက်လက်လုပ်ဆောင်ပြီး GitHub ကို push လုပ်ချင်ရင် အောက်ပါ command သုံးခုကို အသုံးပြုရပါမယ်:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tip, `.gitignore` file တစ်ခုကို အသုံးပြုပြီး GitHub မှာ tracking မလုပ်ချင်တဲ့ file တွေကို ဖယ်ရှားနိုင်ပါတယ်။ ဥပမာ- သင့် folder မှာရှိတဲ့ notes file တစ်ခုက public repository မှာ မပါသင့်တဲ့ file ဖြစ်နိုင်ပါတယ်။ `.gitignore` file templates တွေကို [.gitignore templates](https://github.com/github/gitignore) မှာ ရှာနိုင်ပါတယ်။

#### Commit messages

Git commit subject line က အောက်ပါ စာကြောင်းကို ပြည့်စုံစေပါမယ်:
If applied, this commit will <your subject line here>

Subject မှာ imperative, present tense ကို အသုံးပြုပါ: "change" မဟုတ် "changed" သို့မဟုတ် "changes" မဟုတ်ပါ။  
Subject အတိုင်း body (optional) မှာလည်း imperative, present tense ကို အသုံးပြုပါ။ Body မှာ ပြောင်းလဲမှုရဲ့ motivation ကို ဖော်ပြပြီး ယခင်အခြေအနေနဲ့ နှိုင်းယှဉ်ပါ။ `why` ကို ရှင်းပြတာဖြစ်ပြီး `how` ကို မဟုတ်ပါ။

✅ GitHub ကို အချိန်အနည်းငယ် သွားလေ့လာပါ။ Commit message ကောင်းတစ်ခုကို ရှာနိုင်ပါသလား? အနည်းဆုံး message တစ်ခုကို ရှာနိုင်ပါသလား? Commit message မှာ ဘယ်အချက်တွေက အရေးကြီးပြီး အသုံးဝင်တယ်လို့ သင်ထင်ပါသလဲ?

### Task: အတူတူလုပ်ဆောင်ပါ

GitHub မှာ အရာတွေကို ထည့်သွင်းတာရဲ့ အဓိကရည်ရွယ်ချက်က အခြား developer တွေနဲ့ အတူတူလုပ်ဆောင်နိုင်ဖို့ ဖြစ်ပါတယ်။

## အခြားသူတွေနဲ့ ပရောဂျက်တွေမှာ အလုပ်လုပ်ခြင်း

> ဗီဒီယိုကို ကြည့်ပါ
>
> [![Git and GitHub basics video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

သင့် repository မှာ `Insights > Community` ကို သွားပြီး သင့် project က recommended community standards တွေနဲ့ ဘယ်လိုနှိုင်းယှဉ်နိုင်လဲဆိုတာကို ကြည့်ပါ။

   GitHub repo ကို တိုးတက်အောင်လုပ်နိုင်တဲ့ အချက်တွေက:
   - **Description**. သင့် project အတွက် description ထည့်ထားပါသလား?
   - **README**. README ထည့်ထားပါသလား? GitHub က [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon) ရေးဖို့ လမ်းညွှန်ချက်ပေးပါတယ်။
   - **Contributing guideline**. သင့် project မှာ [contributing guidelines](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon) ရှိပါသလား?
   - **Code of Conduct**. [Code of Conduct](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/) ရှိပါသလား?
   - **License**. အရေးကြီးဆုံးအနေနဲ့ [license](https://docs.github.com/articles/adding-a-license-to-a-repository/) ရှိပါသလား?

ဒီ resource တွေက အသစ် join လုပ်တဲ့ team member တွေကို အကျိုးရှိစေပါမယ်။ Contributor တွေက သင့် code ကို မကြည့်ခင် project ရဲ့ အခြေအနေကို ကြည့်ပြီး သင့် project က သူတို့ရဲ့ အချိန်ကို သုံးဖို့ သင့်တော်တဲ့နေရာလားဆိုတာကို စဉ်းစားပါမယ်။

✅ README file တွေက ပြင်ဆင်ဖို့ အချိန်ယူရတယ်၊ ဒါပေမယ့် 忙နေတဲ့ maintainer တွေက often neglect လုပ်တတ်ပါတယ်။ အလွန်ဖော်ပြချက်ကောင်းတဲ့ README file တစ်ခုကို ရှာနိုင်ပါသလား? Note: [README file ကောင်းတွေ ဖန်တီးဖို့ tools](https://www.makeareadme.com/) တွေရှိပါတယ်၊ သင်စမ်းသုံးချင်နိုင်ပါတယ်။

### Task: Code တစ်ချို့ကို Merge လုပ်ပါ

Contributing docs တွေက လူတွေ project ကို အကူအညီပေးဖို့ လမ်းညွှန်ပါတယ်။ ဘယ်အမျိုးအစားအကူအညီတွေကို ရှာနေတယ်ဆိုတာနဲ့ process ဘယ်လိုလုပ်ရမယ်ဆိုတာကို ရှင်းပြပါတယ်။ Contributors တွေ GitHub repo မှာ အကူအညီပေးဖို့ အောက်ပါအဆင့်တွေကို လိုက်နာရပါမယ်:

1. **Forking your repo**. Contributor တွေ project ကို _fork_ လုပ်ဖို့လိုအပ်ပါတယ်။ Forking က သင့် repository ရဲ့ replica ကို သူတို့ရဲ့ GitHub profile မှာ ဖန်တီးတာဖြစ်ပါတယ်။
1. **Clone**. Forked project ကို သူတို့ရဲ့ local machine မှာ clone လုပ်ပါ။
1. **Create a branch**. Contributor တွေ သူတို့ရဲ့ အလုပ်အတွက် _branch_ တစ်ခုဖန်တီးဖို့လိုအပ်ပါတယ်။
1. **Focus their change on one area**. Contributor တွေကို တစ်ခါ commit မှာ တစ်ခုတည်းသော အရာကို အာရုံစိုက်ဖို့ တိုက်တွန်းပါ။ ဒါက သူတို့ရဲ့ အလုပ်ကို merge လုပ်နိုင်တဲ့ အခွင့်အရေးကို မြှင့်တင်ပါမယ်။ ဥပမာ- bug fix တစ်ခုရေး၊ feature အသစ်တစ်ခုထည့်၊ test အချို့ကို update လုပ်တယ်ဆိုပါစို့။ သင့်အနေနဲ့ ၃ ခုထဲက ၂ ခု သို့မဟုတ် ၁ ခုကိုသာ implement လုပ်ချင်ရင် ဘာဖြစ်မလဲ?

✅ Branch တွေက ကောင်းတဲ့ code ရေးပြီး publish လုပ်ဖို့ အရေးကြီးတဲ့ အခြေအနေတွေကို စဉ်းစားပါ။ ဘယ်လို use case တွေကို သင်စဉ်းစားနိုင်ပါသလဲ?

> Note, သင်လိုချင်တဲ့ ပြောင်းလဲမှုကို သင်ကိုယ်တိုင် branch တွေဖန်တီးပြီး လုပ်ဆောင်ပါ။ သင့်ရဲ့ commit တွေကို သင့်ရဲ့ "checked out" လုပ်ထားတဲ့ branch မှာသာ လုပ်ပါမယ်။ `git status` ကို အသုံးပြုပြီး သင့်ရဲ့ branch ကို စစ်ဆေးပါ။

Contributor workflow ကို လေ့လာကြပါစို့။ Contributor က repo ကို _fork_ လုပ်ပြီး _clone_ လုပ်ထားပြီး local machine မှာ Git repo တစ်ခုရှိပြီးသားဖြစ်တယ်လို့ ယူဆပါ:

1. **Branch တစ်ခုဖန်တီးပါ**. Contributor ရဲ့ ပြောင်းလဲမှုတွေကို ထည့်သွင်းမယ့် branch ကို ဖန်တီးဖို့ `git branch` command ကို အသုံးပြုပါ:

   ```bash
   git branch [branch-name]
   ```

1. **Working branch ကို switch လုပ်ပါ**. သတ်မှတ်ထားတဲ့ branch ကို switch လုပ်ပြီး working directory ကို update လုပ်ဖို့ `git switch` ကို အသုံးပြုပါ:

   ```bash
   git switch [branch-name]
   ```

1. **အလုပ်လုပ်ပါ**. အခုအချိန်မှာ ပြောင်းလဲမှုတွေကို ထည့်သွင်းပါ။ Git ကို အောက်ပါ command တွေကို အသုံးပြုပြီး ပြောင်းလဲမှုတွေကို သိစေပါ:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Commit ကို နာမည်ကောင်းပေးဖို့ မမေ့ပါနဲ့၊ သင့်အတွက်သာမက repo maintainer အတွက်လည်း အရေးကြီးပါတယ်။

1. **Main branch နဲ့ အလုပ်ကို ပေါင်းစည်းပါ**. Contributor က အလုပ်ပြီးဆုံးပြီး `main` branch နဲ့ အလုပ်ကို ပေါင်းစည်းချင်ပါတယ်။ `main` branch က meantime မှာ ပြောင်းလဲမှုရှိနိုင်ပါတယ်၊ ဒါကြောင့် အောက်ပါ command တွေကို အသုံးပြုပြီး update လုပ်ပါ:

   ```bash
   git switch main
   git pull
   ```

   အခုအချိန်မှာ conflict ဖြစ်နိုင်တဲ့အခြေအနေတွေကို working branch မှာဖြစ်စေဖို့လိုအပ်ပါတယ်။ အောက်ပါ command တွေကို အသုံးပြုပါ:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   ဒီ command က `main` branch ရဲ့ ပြောင်းလဲမှုတွေကို contributor ရဲ့ branch မှာ ထည့်သွင်းပါမယ်။ Conflict ဖြစ်ရင် VS Code က Git ရဲ့ _confusion_ ကို ပြသပြီး သင့်
`Pull request` ဆိုတာ အရမ်းအဆန်းထင်ရတယ်၊ အကြောင်းကတော့ သင်တကယ်တော့ သင့်ပြောင်းလဲမှုတွေကို ပရောဂျက်ထဲသို့ push လုပ်ချင်တာပါ။ ဒါပေမယ့် maintainer (ပရောဂျက်ပိုင်ရှင်) သို့မဟုတ် core team က သင့်ပြောင်းလဲမှုတွေကို ပရောဂျက်ရဲ့ "main" branch နဲ့ပေါင်းစည်းမယ့်အခါ အတည်ပြုဖို့လိုပါတယ်။ ဒါကြောင့် သင်က maintainer ကို ပြောင်းလဲမှုအပေါ်ဆုံးဖြတ်ချက်တစ်ခုကို တောင်းဆိုနေတဲ့အရာဖြစ်ပါတယ်။

Pull request က branch တစ်ခုမှာ ပြောင်းလဲမှုတွေကို နှိုင်းယှဉ်ပြီး ဆွေးနွေးဖို့နေရာတစ်ခုဖြစ်ပါတယ်။ Review, comment, integrated tests နဲ့ အခြားအရာတွေပါဝင်ပါတယ်။ Pull request တစ်ခုက commit message တစ်ခုလိုပဲ စည်းမျဉ်းတွေကိုလိုက်နာသင့်ပါတယ်။ သင့်အလုပ်က ဥပမာအားဖြင့် issue တစ်ခုကို ဖြေရှင်းပေးတယ်ဆိုရင် issue tracker မှာ issue တစ်ခုကို reference ထည့်နိုင်ပါတယ်။ ဒါကို `#` နဲ့ သင့် issue ရဲ့ နံပါတ်ကို ထည့်ရေးရပါတယ်။ ဥပမာ `#97` လိုပါ။

🤞အားလုံးအဆင်ပြေပြီး project owner(s) က သင့်ပြောင်းလဲမှုတွေကို ပရောဂျက်ထဲ merge လုပ်ပေးပါစေ🤞

GitHub ရဲ့ remote branch နဲ့ သင့် local working branch ကို အားလုံးနောက်ဆုံး commit တွေနဲ့ update လုပ်ပါ:

`git pull`

## Open Source ကို ဘယ်လိုပံ့ပိုးမလဲ

ပထမဦးဆုံး GitHub မှာ သင့်စိတ်ဝင်စားတဲ့ repository (သို့မဟုတ် **repo**) တစ်ခုကို ရှာဖွေပြီး ပြောင်းလဲမှုတစ်ခုကို ပံ့ပိုးချင်ပါတယ်။ အဲဒီ repo ရဲ့ အကြောင်းအရာတွေကို သင့်စက်ထဲကို ကူးယူချင်ပါလိမ့်မယ်။

✅ 'Beginner-friendly' repo တွေကို ရှာဖွေဖို့ နည်းလမ်းက [good-first-issue ဆိုတဲ့ tag နဲ့ ရှာဖွေပါ](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)။

![Repo တစ်ခုကို locally ကူးယူခြင်း](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.my.png)

Code ကို ကူးယူဖို့ နည်းလမ်းအများကြီးရှိပါတယ်။ နည်းလမ်းတစ်ခုက repository ရဲ့ အကြောင်းအရာတွေကို HTTPS, SSH, သို့မဟုတ် GitHub CLI (Command Line Interface) ကို အသုံးပြုပြီး "clone" လုပ်ခြင်းဖြစ်ပါတယ်။

Terminal ကို ဖွင့်ပြီး repository ကို အောက်ပါအတိုင်း clone လုပ်ပါ:
`git clone https://github.com/ProjectURL`

Project ပေါ်မှာ အလုပ်လုပ်ဖို့ အမှန်တကယ် folder ကို ပြောင်းပါ:
`cd ProjectURL`

GitHub ရဲ့ embedded code editor / cloud development environment ဖြစ်တဲ့ [Codespaces](https://github.com/features/codespaces) သို့မဟုတ် [GitHub Desktop](https://desktop.github.com/) ကို အသုံးပြုပြီးလည်း project တစ်ခုလုံးကို ဖွင့်နိုင်ပါတယ်။

နောက်ဆုံးအနေနဲ့ code ကို zipped folder အနေနဲ့ download လုပ်နိုင်ပါတယ်။

### GitHub အကြောင်း စိတ်ဝင်စားစရာ အချက်အချို့

GitHub မှာ public repository မည်သည့်အရာကိုမဆို star, watch, သို့မဟုတ် "fork" လုပ်နိုင်ပါတယ်။ သင့် starred repositories တွေကို အပေါ်ညာဘက် drop-down menu မှာ ရှာနိုင်ပါတယ်။ Bookmark လုပ်တာလိုပဲ၊ ဒါပေမယ့် code အတွက်ပါ။

Projects တွေမှာ issue tracker ရှိပါတယ်၊ အများအားဖြင့် GitHub ရဲ့ "Issues" tab မှာရှိပြီး project နဲ့ပတ်သက်တဲ့ ပြဿနာတွေကို ဆွေးနွေးကြပါတယ်။ Pull Requests tab မှာတော့ လက်ရှိ ပြောင်းလဲမှုတွေကို ဆွေးနွေးပြီး ပြန်လည်သုံးသပ်ကြပါတယ်။

Projects တွေမှာ forum, mailing list, သို့မဟုတ် Slack, Discord, IRC လို chat channel တွေမှာလည်း ဆွေးနွေးမှုတွေရှိနိုင်ပါတယ်။

✅ သင့် GitHub repo အသစ်ကို လေ့လာပြီး settings ကို ပြင်ဆင်ခြင်း၊ repo မှာ အချက်အလက်ထည့်ခြင်း၊ project တစ်ခု (ဥပမာ Kanban board) ဖန်တီးခြင်းလို အရာတွေကို စမ်းကြည့်ပါ။ လုပ်လို့ရတဲ့အရာတွေ အများကြီးရှိပါတယ်!

---

## 🚀 စိန်ခေါ်မှု

သူငယ်ချင်းတစ်ဦးနဲ့ တွဲဖက်ပြီး တစ်ဦးရဲ့ code ကို တစ်ဦးက အလုပ်လုပ်ပါ။ ပူးပေါင်းပြီး project တစ်ခု ဖန်တီးပါ၊ code ကို fork လုပ်ပါ၊ branch တွေ ဖန်တီးပါ၊ ပြောင်းလဲမှုတွေကို merge လုပ်ပါ။

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/en/)

## ပြန်လည်သုံးသပ်ခြင်းနှင့် ကိုယ်တိုင်လေ့လာခြင်း

[Open source software ကို ဘယ်လိုပံ့ပိုးမလဲ](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) ဆိုတာကို ပိုမိုဖတ်ရှုပါ။

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/) ကိုလည်း ကြည့်ပါ။

လေ့ကျင့်ပါ၊ လေ့ကျင့်ပါ၊ လေ့ကျင့်ပါ။ GitHub မှာ [skills.github.com](https://skills.github.com) မှတဆင့် လေ့လာရေးလမ်းကြောင်းတွေ ရှိပါတယ်:

- [GitHub ပေါ်မှာ ပထမဆုံးအပတ်](https://skills.github.com/#first-week-on-github)

ပိုမိုအဆင့်မြင့်တဲ့ သင်တန်းတွေကိုလည်း ရှာတွေ့နိုင်ပါမယ်။

## လုပ်ဆောင်ရန်

[GitHub ပေါ်မှာ ပထမဆုံးအပတ် သင်တန်း](https://skills.github.com/#first-week-on-github) ကို ပြီးမြောက်ပါ။

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း၊ အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းစာရွက်စာတမ်းကို ၎င်း၏ မူရင်းဘာသာစကားဖြင့် အာဏာတရားရှိသော အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူ့ဘာသာပြန်ပညာရှင်များမှ ပရော်ဖက်ရှင်နယ် ဘာသာပြန်မှုကို အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားလွဲမှုများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။