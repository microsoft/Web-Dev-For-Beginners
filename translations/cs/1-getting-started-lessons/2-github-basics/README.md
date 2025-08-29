<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "361249da70432ddfd4741c917d1a6f50",
  "translation_date": "2025-08-29T11:01:46+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "cs"
}
-->
# Úvod do GitHubu

Tato lekce pokrývá základy GitHubu, platformy pro hostování a správu změn ve vašem kódu.

![Úvod do GitHubu](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.cs.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz před lekcí
[Kvíz před lekcí](https://ff-quizzes.netlify.app)

## Úvod

V této lekci se naučíte:

- sledovat práci, kterou děláte na svém počítači
- pracovat na projektech s ostatními
- jak přispívat do open source softwaru

### Předpoklady

Než začnete, zkontrolujte, zda máte nainstalovaný Git. V terminálu zadejte: 
`git --version`

Pokud Git není nainstalován, [stáhněte Git](https://git-scm.com/downloads). Poté nastavte svůj lokální Git profil v terminálu:
* `git config --global user.name "vaše-jméno"`
* `git config --global user.email "váš-email"`

Pro kontrolu, zda je Git již nakonfigurován, můžete zadat:
`git config --list`

Budete také potřebovat účet na GitHubu, editor kódu (například Visual Studio Code) a otevřít svůj terminál (nebo příkazový řádek).

Přejděte na [github.com](https://github.com/) a vytvořte si účet, pokud ho ještě nemáte, nebo se přihlaste a vyplňte svůj profil. 

✅ GitHub není jediným úložištěm kódu na světě; existují i další, ale GitHub je nejznámější.

### Příprava

Budete potřebovat složku s projektem kódu na svém lokálním počítači (notebooku nebo PC) a veřejné úložiště na GitHubu, které poslouží jako příklad, jak přispívat do projektů ostatních.  

---

## Správa kódu

Představte si, že máte lokální složku s nějakým projektem kódu a chcete začít sledovat svůj pokrok pomocí gitu - systému pro správu verzí. Někteří lidé přirovnávají používání gitu k psaní milostného dopisu svému budoucímu já. Čtením vašich zpráv o commitech po dnech, týdnech nebo měsících si budete schopni vybavit, proč jste udělali určité rozhodnutí, nebo "vrátit zpět" změnu - to vše za předpokladu, že píšete dobré zprávy o commitech.

### Úkol: Vytvořte úložiště a commitujte kód  

> Podívejte se na video
> 
> [![Video o základech Gitu a GitHubu](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Vytvořte úložiště na GitHubu**. Na GitHub.com, na záložce úložiště nebo z navigačního panelu vpravo nahoře, najděte tlačítko **new repo**.

   1. Dejte svému úložišti (složce) název.
   1. Vyberte **create repository**.

1. **Přejděte do své pracovní složky**. V terminálu přepněte do složky (také známé jako adresář), kterou chcete začít sledovat. Zadejte:

   ```bash
   cd [name of your folder]
   ```

1. **Inicializujte git úložiště**. Ve svém projektu zadejte:

   ```bash
   git init
   ```

1. **Zkontrolujte stav**. Pro kontrolu stavu svého úložiště zadejte:

   ```bash
   git status
   ```

   Výstup může vypadat nějak takto:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Typicky příkaz `git status` vám řekne například, které soubory jsou připraveny k _uložení_ do úložiště nebo mají změny, které byste mohli chtít zachovat.

1. **Přidejte všechny soubory ke sledování**
   Toto se také nazývá staging souborů/přidávání souborů do staging oblasti.

   ```bash
   git add .
   ```

   Argument `git add` plus `.` označuje, že všechny vaše soubory a změny jsou připraveny ke sledování. 

1. **Přidejte vybrané soubory ke sledování**

   ```bash
   git add [file or folder name]
   ```

   To nám pomáhá přidat pouze vybrané soubory do staging oblasti, když nechceme commitovat všechny soubory najednou.

1. **Zrušte staging všech souborů**

   ```bash
   git reset
   ```

   Tento příkaz nám pomáhá zrušit staging všech souborů najednou.

1. **Zrušte staging konkrétního souboru**

   ```bash
   git reset [file or folder name]
   ```

   Tento příkaz nám pomáhá zrušit staging pouze konkrétního souboru najednou, který nechceme zahrnout do dalšího commitu.

1. **Uložení vaší práce**. V tomto bodě jste přidali soubory do tzv. _staging oblasti_. Místa, kde Git sleduje vaše soubory. Aby byla změna trvalá, musíte _commitnout_ soubory. K tomu vytvoříte _commit_ pomocí příkazu `git commit`. _Commit_ představuje bod uložení v historii vašeho úložiště. Zadejte následující pro vytvoření _commitu_:

   ```bash
   git commit -m "first commit"
   ```

   Tento příkaz commitne všechny vaše soubory a přidá zprávu "first commit". Pro budoucí zprávy o commitech budete chtít být více popisní, abyste sdělili, jaký typ změny jste provedli.

1. **Propojte své lokální Git úložiště s GitHubem**. Git úložiště je dobré na vašem počítači, ale v určitém bodě budete chtít mít zálohu svých souborů někde jinde a také pozvat ostatní, aby s vámi pracovali na vašem úložišti. Jedním z takových skvělých míst je GitHub. Pamatujte, že jsme již vytvořili úložiště na GitHubu, takže jediná věc, kterou musíme udělat, je propojit naše lokální Git úložiště s GitHubem. Příkaz `git remote add` to udělá. Zadejte následující příkaz:

   > Poznámka: Než zadáte příkaz, přejděte na stránku svého GitHub úložiště a najděte URL úložiště. Použijete ho v níže uvedeném příkazu. Nahraďte ```https://github.com/username/repository_name.git``` svým GitHub URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Tento příkaz vytvoří _remote_, nebo spojení, nazvané "origin", které ukazuje na GitHub úložiště, které jste vytvořili dříve.

1. **Odešlete lokální soubory na GitHub**. Doposud jste vytvořili _spojení_ mezi lokálním úložištěm a GitHub úložištěm. Pošlete tyto soubory na GitHub pomocí následujícího příkazu `git push`, takto: 
   
   > Poznámka: Název vaší větve může být ve výchozím nastavení odlišný od ```main```.

   ```bash
   git push -u origin main
   ```

   Tento příkaz odešle vaše commity ve větvi "main" na GitHub.

2. **Přidání dalších změn**. Pokud chcete pokračovat v provádění změn a jejich odesílání na GitHub, budete potřebovat použít následující tři příkazy:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tip: Možná budete chtít přijmout soubor `.gitignore`, abyste zabránili tomu, aby se soubory, které nechcete sledovat, objevily na GitHubu - například ten soubor s poznámkami, který ukládáte ve stejné složce, ale nemá místo ve veřejném úložišti. Šablony pro soubory `.gitignore` najdete na [.gitignore templates](https://github.com/github/gitignore).

#### Zprávy o commitech

Skvělý předmět zprávy o commitu dokončuje následující větu:
Pokud bude aplikováno, tento commit <váš předmět zde>

Pro předmět použijte rozkazovací způsob v přítomném čase: "změnit" místo "změněno" nebo "změny". 
Stejně jako v předmětu, i v těle (volitelném) použijte rozkazovací způsob v přítomném čase. Tělo by mělo zahrnovat motivaci pro změnu a kontrastovat to s předchozím chováním. Vysvětlujete `proč`, ne `jak`.

✅ Věnujte pár minut prohlížení GitHubu. Najdete opravdu skvělou zprávu o commitu? Najdete opravdu minimalistickou? Jaké informace si myslíte, že jsou nejdůležitější a nejužitečnější pro sdělení ve zprávě o commitu?

### Úkol: Spolupracujte

Hlavním důvodem pro umístění věcí na GitHub bylo umožnit spolupráci s ostatními vývojáři.

## Práce na projektech s ostatními

> Podívejte se na video
>
> [![Video o základech Gitu a GitHubu](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Ve svém úložišti přejděte na `Insights > Community`, abyste viděli, jak váš projekt odpovídá doporučeným komunitním standardům.

   Zde jsou některé věci, které mohou zlepšit vaše GitHub úložiště:
   - **Popis**. Přidali jste popis svého projektu?
   - **README**. Přidali jste README? GitHub poskytuje pokyny pro psaní [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Pokyny pro přispívání**. Má váš projekt [pokyny pro přispívání](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Kodex chování**. Má váš projekt [Kodex chování](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)?
   - **Licence**. A možná nejdůležitější, má váš projekt [licenci](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Všechny tyto zdroje budou přínosem pro onboarding nových členů týmu. A to jsou typicky věci, na které se noví přispěvatelé dívají, než se vůbec podívají na váš kód, aby zjistili, zda je váš projekt tím správným místem, kde by měli trávit svůj čas.

✅ README soubory, i když jejich příprava zabere čas, jsou často opomíjeny zaneprázdněnými správci. Najdete příklad obzvláště popisného README? Poznámka: existují některé [nástroje pro vytvoření dobrých README](https://www.makeareadme.com/), které byste mohli vyzkoušet.

### Úkol: Sloučte nějaký kód

Dokumenty pro přispívání pomáhají lidem přispívat do projektu. Vysvětlují, jaké typy příspěvků hledáte a jak proces funguje. Přispěvatelé budou muset projít sérií kroků, aby mohli přispět do vašeho úložiště na GitHubu:

1. **Forkování vašeho úložiště**. Pravděpodobně budete chtít, aby lidé _forkovali_ váš projekt. Forkování znamená vytvoření repliky vašeho úložiště na jejich GitHub profilu.
1. **Klonování**. Odtud si projekt naklonují na svůj lokální počítač. 
1. **Vytvoření větve**. Budete chtít požádat je, aby vytvořili _větev_ pro svou práci. 
1. **Zaměření změny na jednu oblast**. Požádejte přispěvatele, aby se soustředili na jednu věc najednou - tím se zvýší šance, že budete moci _sloučit_ jejich práci. Představte si, že opraví chybu, přidají novou funkci a aktualizují několik testů - co když chcete, nebo můžete implementovat pouze 2 ze 3, nebo 1 ze 3 změn?

✅ Představte si situaci, kdy jsou větve obzvláště důležité pro psaní a doručování dobrého kódu. Jaké případy použití vás napadají?

> Poznámka: Buďte změnou, kterou chcete vidět ve světě, a vytvářejte větve i pro svou vlastní práci. Jakékoliv commity, které provedete, budou provedeny na větvi, na kterou jste aktuálně "přepnuti". Použijte `git status`, abyste viděli, na které větvi se nacházíte.

Pojďme projít workflow přispěvatele. Předpokládejme, že přispěvatel již _forkoval_ a _klonoval_ úložiště, takže má Git úložiště připravené k práci na svém lokálním počítači:

1. **Vytvoření větve**. Použijte příkaz `git branch` k vytvoření větve, která bude obsahovat změny, které chtějí přispět:

   ```bash
   git branch [branch-name]
   ```

1. **Přepnutí na pracovní větev**. Přepněte na specifikovanou větev a aktualizujte pracovní adresář pomocí `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Práce**. V tomto bodě chcete přidat své změny. Nezapomeňte o tom informovat Git pomocí následujících příkazů:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Ujistěte se, že dáváte svému commitu dobrý název, pro vaše dobro i pro správce úložiště, na kterém pomáháte.

1. **Sloučení vaší práce s větví `main`**. V určitém bodě jste hotovi s prací a chcete sloučit svou práci s větví `main`. Větev `main` se mezitím mohla změnit, takže se ujistěte, že ji nejprve aktualizujete na nejnovější pomocí následujících příkazů:

   ```bash
   git switch main
   git pull
   ```

   V tomto bodě se chcete ujistit, že jakékoliv _konflikty_, situace, kdy Git nemůže snadno _sloučit_ změny, se objeví ve vaší pracovní větvi. Proto spusťte následující příkazy:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Tento příkaz přinese všechny změny z `main` do vaší větve a doufejme, že můžete pokračovat. Pokud ne, VS Code vám ukáže, kde je Git _zmatený_, a vy jen upravíte dotčené soubory, abyste určili, který obsah je nejpřesnější.

1. **Odeslání vaší práce na GitHub**. Odeslání vaší práce na GitHub znamená dvě věci. Pushnutí vaší větve do vašeho úložiště a poté otevření PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Výše uvedený příkaz vytvoří větev na vašem forkovaném úložišti.

1. **Otevření PR**. Dále chcete otevřít PR. Uděláte to tak, že přejdete na forkované úložiště na GitHubu. Na GitHubu uvidíte indikaci, kde se vás ptá, zda chcete vytvořit nový PR, kliknete na to a budete přesměrováni na rozhraní, kde můžete změnit název zprávy o commitu, dát jí vhodnější popis. Nyní správce úložiště, které jste forkovali, uvidí tento PR a _držte palce_, že ho ocení a _sloučí_ váš PR. Nyní jste přispěvatel, hurá :)

1. **Úklid**. Je považováno za dobrý zvyk _uklidit_ po úspěšném sloučení PR. Chcete uklidit jak svou lokální větev, tak větev, kterou jste pushnuli na GitHub. Nejprve ji smažte lokálně pomocí následujícího příkazu: 

   ```bash
   git branch -d [branch-name]
   ```

   Ujistěte se, že přejdete na stránku GitHubu pro forkované úložiště a odstraníte vzdálenou větev, kterou jste právě pushnuli.
`Pull request` se může zdát jako zvláštní termín, protože ve skutečnosti chcete své změny "pushnout" do projektu. Ale správce (vlastník projektu) nebo hlavní tým musí vaše změny zvážit, než je sloučí s "hlavní" větví projektu, takže ve skutečnosti žádáte správce o rozhodnutí ohledně změny.

Pull request je místo, kde můžete porovnávat a diskutovat o rozdílech zavedených na větvi pomocí recenzí, komentářů, integrovaných testů a dalších nástrojů. Dobrý pull request se řídí přibližně stejnými pravidly jako zpráva o commitu. Můžete přidat odkaz na problém v issue trackeru, například když vaše práce řeší nějaký problém. To se provádí pomocí `#` následovaného číslem problému. Například `#97`.

🤞Držte palce, aby všechny kontroly prošly a vlastník(y) projektu vaše změny sloučili do projektu🤞

Aktualizujte svou aktuální lokální pracovní větev o všechny nové commity z odpovídající vzdálené větve na GitHubu:

`git pull`

## Jak přispět do open source

Nejprve si najděte na GitHubu repozitář (nebo **repo**), který vás zajímá a do kterého byste chtěli přispět změnou. Budete chtít zkopírovat jeho obsah na svůj počítač.

✅ Dobrým způsobem, jak najít repozitáře vhodné pro začátečníky, je [vyhledávání podle tagu 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Zkopírování repozitáře lokálně](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.cs.png)

Existuje několik způsobů, jak zkopírovat kód. Jedním z nich je "klonování" obsahu repozitáře pomocí HTTPS, SSH nebo GitHub CLI (Command Line Interface).

Otevřete terminál a klonujte repozitář takto:
`git clone https://github.com/ProjectURL`

Pro práci na projektu přepněte do správné složky:
`cd ProjectURL`

Celý projekt můžete také otevřít pomocí [Codespaces](https://github.com/features/codespaces), integrovaného editoru kódu / cloudového vývojového prostředí GitHubu, nebo [GitHub Desktop](https://desktop.github.com/).

Nakonec si můžete kód stáhnout v zazipované složce.

### Několik dalších zajímavostí o GitHubu

Na GitHubu můžete "označit hvězdičkou", sledovat nebo "forknout" jakýkoli veřejný repozitář. Své označené repozitáře najdete v rozbalovací nabídce v pravém horním rohu. Je to jako záložky, ale pro kód.

Projekty mají issue tracker, většinou na GitHubu v záložce "Issues", pokud není uvedeno jinak, kde lidé diskutují o problémech souvisejících s projektem. A záložka Pull Requests je místem, kde lidé diskutují a recenzují změny, které jsou v procesu.

Projekty mohou mít také diskuse ve fórech, mailing listech nebo chatovacích kanálech jako Slack, Discord nebo IRC.

✅ Prozkoumejte svůj nový GitHub repozitář a vyzkoušejte si pár věcí, jako je úprava nastavení, přidání informací do repozitáře a vytvoření projektu (například Kanban boardu). Možností je spousta!

---

## 🚀 Výzva

Spárujte se s kamarádem a pracujte na kódu toho druhého. Vytvořte projekt společně, forkněte kód, vytvořte větve a sloučte změny.

## Kvíz po přednášce
[Kvíz po přednášce](https://ff-quizzes.netlify.app/web/en/)

## Recenze a samostudium

Přečtěte si více o [přispívání do open source softwaru](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git tahák](https://training.github.com/downloads/github-git-cheat-sheet/).

Cvičte, cvičte, cvičte. GitHub nabízí skvělé vzdělávací cesty prostřednictvím [skills.github.com](https://skills.github.com):

- [První týden na GitHubu](https://skills.github.com/#first-week-on-github)

Najdete tam i pokročilejší kurzy.

## Zadání

Dokončete [kurz První týden na GitHubu](https://skills.github.com/#first-week-on-github)

---

**Upozornění**:  
Tento dokument byl přeložen pomocí služby pro automatický překlad [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o co největší přesnost, mějte prosím na paměti, že automatické překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za závazný zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné výklady vyplývající z použití tohoto překladu.