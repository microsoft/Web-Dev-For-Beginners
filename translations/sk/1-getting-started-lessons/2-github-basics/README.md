<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "361249da70432ddfd4741c917d1a6f50",
  "translation_date": "2025-08-29T11:21:54+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "sk"
}
-->
# Úvod do GitHubu

Táto lekcia pokrýva základy GitHubu, platformy na hosťovanie a správu zmien vo vašom kóde.

![Úvod do GitHubu](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.sk.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz pred prednáškou
[Kvíz pred prednáškou](https://ff-quizzes.netlify.app)

## Úvod

V tejto lekcii sa naučíme:

- sledovať prácu, ktorú robíte na svojom počítači
- pracovať na projektoch s ostatnými
- ako prispievať do open source softvéru

### Požiadavky

Predtým, než začnete, skontrolujte, či máte nainštalovaný Git. V termináli zadajte:  
`git --version`

Ak Git nie je nainštalovaný, [stiahnite si Git](https://git-scm.com/downloads). Potom nastavte svoj lokálny Git profil v termináli:
* `git config --global user.name "vaše-meno"`
* `git config --global user.email "váš-email"`

Ak chcete skontrolovať, či je Git už nakonfigurovaný, môžete zadať:
`git config --list`

Budete tiež potrebovať účet na GitHube, editor kódu (napríklad Visual Studio Code) a otvorený terminál (alebo príkazový riadok).

Prejdite na [github.com](https://github.com/) a vytvorte si účet, ak ho ešte nemáte, alebo sa prihláste a vyplňte svoj profil.

✅ GitHub nie je jediným úložiskom kódu na svete; existujú aj iné, ale GitHub je najznámejší.

### Príprava

Budete potrebovať priečinok s projektom kódu na svojom lokálnom počítači (notebooku alebo PC) a verejné úložisko na GitHube, ktoré bude slúžiť ako príklad, ako prispievať do projektov iných.

---

## Správa kódu

Predstavte si, že máte lokálne priečinok s projektom kódu a chcete začať sledovať svoj pokrok pomocou systému na správu verzií git. Niektorí ľudia prirovnávajú používanie gitu k písaniu ľúbostného listu svojmu budúcemu ja. Čítaním svojich commit správ o dni, týždne alebo mesiace neskôr si budete môcť spomenúť, prečo ste urobili určité rozhodnutie, alebo "vrátiť" zmenu - samozrejme, ak píšete dobré "commit správy".

### Úloha: Vytvorte úložisko a commitnite kód  

> Pozrite si video
> 
> [![Základy Gitu a GitHubu video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Vytvorte úložisko na GitHube**. Na GitHub.com, v záložke úložísk alebo v navigačnom paneli vpravo hore, nájdite tlačidlo **new repo**.

   1. Dajte svojmu úložisku (priečinku) názov.
   1. Vyberte **create repository**.

1. **Prejdite do svojho pracovného priečinka**. V termináli prepnite do priečinka (tiež známeho ako adresár), ktorý chcete začať sledovať. Zadajte:

   ```bash
   cd [name of your folder]
   ```

1. **Inicializujte git úložisko**. Vo svojom projekte zadajte:

   ```bash
   git init
   ```

1. **Skontrolujte stav**. Ak chcete skontrolovať stav svojho úložiska, zadajte:

   ```bash
   git status
   ```

   výstup môže vyzerať nejako takto:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Typicky príkaz `git status` vám povie veci ako, ktoré súbory sú pripravené na _uloženie_ do úložiska alebo majú zmeny, ktoré by ste mohli chcieť zachovať.

1. **Pridajte všetky súbory na sledovanie**  
   Toto sa tiež nazýva staging súborov/pridávanie súborov do staging oblasti.

   ```bash
   git add .
   ```

   Argument `git add` spolu s `.` znamená, že všetky vaše súbory a zmeny budú sledované.

1. **Pridajte vybrané súbory na sledovanie**

   ```bash
   git add [file or folder name]
   ```

   Toto nám umožňuje pridať iba vybrané súbory do staging oblasti, keď nechceme commitnúť všetky súbory naraz.

1. **Zrušte staging všetkých súborov**

   ```bash
   git reset
   ```

   Tento príkaz nám umožňuje zrušiť staging všetkých súborov naraz.

1. **Zrušte staging konkrétneho súboru**

   ```bash
   git reset [file or folder name]
   ```

   Tento príkaz nám umožňuje zrušiť staging iba konkrétneho súboru naraz, ktorý nechceme zahrnúť do ďalšieho commitu.

1. **Uložte svoju prácu**. V tomto bode ste pridali súbory do tzv. _staging oblasti_. Miesto, kde Git sleduje vaše súbory. Aby ste zmenu urobili trvalou, musíte _commitnúť_ súbory. Na to vytvoríte _commit_ pomocou príkazu `git commit`. _Commit_ predstavuje bod uloženia v histórii vášho úložiska. Zadajte nasledujúce na vytvorenie _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Tento príkaz commitne všetky vaše súbory a pridá správu "first commit". Pre budúce commit správy budete chcieť byť viac popisní, aby ste vyjadrili, aký typ zmeny ste urobili.

1. **Prepojte svoje lokálne Git úložisko s GitHubom**. Git úložisko je užitočné na vašom počítači, ale v určitom bode budete chcieť mať zálohu svojich súborov niekde inde a tiež pozvať iných ľudí, aby s vami pracovali na vašom úložisku. Jedným z takých skvelých miest je GitHub. Pamätajte, že sme už vytvorili úložisko na GitHube, takže jediná vec, ktorú musíme urobiť, je prepojiť naše lokálne Git úložisko s GitHubom. Príkaz `git remote add` to urobí. Zadajte nasledujúci príkaz:

   > Poznámka: Predtým, než zadáte príkaz, prejdite na stránku svojho GitHub úložiska a nájdite URL úložiska. Použijete ho v nasledujúcom príkaze. Nahraďte ```https://github.com/username/repository_name.git``` svojou GitHub URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Tento príkaz vytvorí _remote_, alebo spojenie, s názvom "origin", ktoré ukazuje na GitHub úložisko, ktoré ste vytvorili skôr.

1. **Odošlite lokálne súbory na GitHub**. Doteraz ste vytvorili _spojenie_ medzi lokálnym úložiskom a GitHub úložiskom. Pošlime tieto súbory na GitHub pomocou nasledujúceho príkazu `git push`, takto: 
   
   > Poznámka: Názov vašej vetvy môže byť predvolene iný ako ```main```.

   ```bash
   git push -u origin main
   ```

   Tento príkaz odošle vaše commity vo vetve "main" na GitHub.

2. **Pridanie ďalších zmien**. Ak chcete pokračovať v robení zmien a ich odosielaní na GitHub, budete potrebovať použiť nasledujúce tri príkazy:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tip: Možno budete chcieť pridať aj `.gitignore` súbor, aby ste zabránili sledovaniu súborov, ktoré nechcete mať na GitHube - napríklad poznámkový súbor, ktorý si ukladáte v rovnakom priečinku, ale nemá miesto vo verejnom úložisku. Šablóny pre `.gitignore` súbory nájdete na [.gitignore templates](https://github.com/github/gitignore).

#### Commit správy

Skvelý predmet commit správy dokončí nasledujúcu vetu:  
Ak sa použije, tento commit bude <váš predmet správy tu>

Pre predmet používajte rozkazovací, prítomný čas: "zmeniť" namiesto "zmenené" alebo "mení".  
Rovnako ako v predmete, aj v tele (voliteľné) používajte rozkazovací, prítomný čas. Telo by malo obsahovať motiváciu pre zmenu a porovnať ju s predchádzajúcim správaním. Vysvetľujete `prečo`, nie `ako`.

✅ Strávte pár minút prehliadaním GitHubu. Nájdete skvelú commit správu? Nájdete veľmi stručnú? Aké informácie považujete za najdôležitejšie a najužitočnejšie na vyjadrenie v commit správe?

### Úloha: Spolupracujte

Hlavným dôvodom pre umiestnenie vecí na GitHub bolo umožniť spoluprácu s inými vývojármi.

## Práca na projektoch s ostatnými

> Pozrite si video
>
> [![Základy Gitu a GitHubu video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Vo svojom úložisku prejdite na `Insights > Community`, aby ste videli, ako váš projekt porovnáva s odporúčanými komunitnými štandardmi.

Tu je niekoľko vecí, ktoré môžu zlepšiť vaše GitHub úložisko:
- **Popis**. Pridali ste popis pre svoj projekt?
- **README**. Pridali ste README? GitHub poskytuje pokyny na písanie [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
- **Pravidlá prispievania**. Má váš projekt [pravidlá prispievania](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
- **Kódex správania**. Máte [kódex správania](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/)?
- **Licencia**. Možno najdôležitejšie, máte [licenciu](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Všetky tieto zdroje budú prínosom pre onboarding nových členov tímu. A to sú typicky veci, na ktoré sa noví prispievatelia pozerajú predtým, než sa pozrú na váš kód, aby zistili, či je váš projekt správnym miestom, kde by mali tráviť svoj čas.

✅ README súbory, hoci ich príprava zaberá čas, sú často zanedbávané zaneprázdnenými správcami. Nájdete príklad obzvlášť popisného README? Poznámka: existujú niektoré [nástroje na vytváranie dobrých README](https://www.makeareadme.com/), ktoré by ste mohli vyskúšať.

### Úloha: Spojte kód

Dokumenty o prispievaní pomáhajú ľuďom prispievať do projektu. Vysvetľujú, aké typy príspevkov hľadáte a ako proces funguje. Prispievatelia budú musieť prejsť sériou krokov, aby mohli prispieť do vášho úložiska na GitHube:

1. **Forkovanie vášho úložiska**. Pravdepodobne budete chcieť, aby ľudia _forkovali_ váš projekt. Forkovanie znamená vytvorenie repliky vášho úložiska na ich GitHub profile.
1. **Klonovanie**. Odtiaľ si projekt naklonujú na svoj lokálny počítač.
1. **Vytvorenie vetvy**. Budete chcieť, aby si vytvorili _vetvu_ pre svoju prácu.
1. **Zameranie zmien na jednu oblasť**. Požiadajte prispievateľov, aby sa sústredili na jednu vec naraz - tým sa zvýši šanca, že ich prácu budete môcť _spojiť_ s vašou. Predstavte si, že opravia chybu, pridajú novú funkciu a aktualizujú niekoľko testov - čo ak chcete alebo môžete implementovať iba 2 z 3, alebo 1 z 3 zmien?

✅ Predstavte si situáciu, kde sú vetvy obzvlášť dôležité pre písanie a doručovanie dobrého kódu. Aké prípady použitia si viete predstaviť?

> Poznámka: Buďte zmenou, ktorú chcete vidieť vo svete, a vytvárajte vetvy aj pre svoju vlastnú prácu. Akékoľvek commity, ktoré urobíte, budú urobené vo vetve, na ktorej ste aktuálne "checkoutnutí". Použite `git status`, aby ste videli, na ktorej vetve sa nachádzate.

Prejdime si pracovný postup prispievateľa. Predpokladajme, že prispievateľ už _forkol_ a _naklonoval_ úložisko, takže má Git úložisko pripravené na prácu na svojom lokálnom počítači:

1. **Vytvorte vetvu**. Použite príkaz `git branch` na vytvorenie vetvy, ktorá bude obsahovať zmeny, ktoré chcú prispieť:

   ```bash
   git branch [branch-name]
   ```

1. **Prepnite sa na pracovnú vetvu**. Prepnite sa na špecifikovanú vetvu a aktualizujte pracovný adresár pomocou `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Pracujte**. V tomto bode chcete pridať svoje zmeny. Nezabudnite o nich informovať Git pomocou nasledujúcich príkazov:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Uistite sa, že svoj commit pomenujete vhodne, pre svoje dobro aj pre správcu úložiska, na ktorom pomáhate.

1. **Spojte svoju prácu s vetvou `main`**. V určitom bode skončíte s prácou a budete chcieť spojiť svoju prácu s tou vo vetve `main`. Vetva `main` sa medzitým mohla zmeniť, takže sa uistite, že ju najskôr aktualizujete na najnovšiu verziu pomocou nasledujúcich príkazov:

   ```bash
   git switch main
   git pull
   ```

   V tomto bode sa chcete uistiť, že akékoľvek _konflikty_, situácie, kde Git nemôže ľahko _skombinovať_ zmeny, sa vyriešia vo vašej pracovnej vetve. Preto spustite nasledujúce príkazy:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Tento príkaz prinesie všetky zmeny z vetvy `main` do vašej vetvy a dúfajme, že budete môcť pokračovať. Ak nie, VS Code vám ukáže, kde je Git _zmätený_, a jednoducho upravíte dotknuté súbory, aby ste určili, ktorý obsah je najpresnejší.

1. **Odošlite svoju prácu na GitHub**. Odošlanie vašej práce na GitHub znamená dve veci. Pushnutie vašej vetvy do vášho úložiska a potom otvorenie PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Vyššie uvedený príkaz vytvorí vetvu vo vašom forknutom úložisku.

1. **Otvorte PR**. Ďalej chcete otvoriť PR. Urobíte to tak, že prejdete na forknuté úložisko na GitHube. Na GitHube uvidíte indikáciu, kde sa vás opýta, či chcete vytvoriť nový PR, kliknete na to a dostanete sa do rozhrania, kde môžete zmeniť názov commit správy, dať jej vhodnejší popis. Teraz správca úložiska, ktoré ste forkovali, uvidí tento PR a _držme palce_, že ho ocení a _spojí_ váš PR. Teraz ste prispievateľ, hurá :)

1. **Upracte**. Považuje sa za dobrú prax _upratať_ po úspešnom spojení PR. Chcete upratať svoju lokálnu vetvu aj vetvu, ktorú ste pushli na GitHub. Najskôr ju lokálne odstráňte pomocou nasledujúceho príkazu:

   ```bash
   git branch -d [branch-name]
   ```

   Uistite sa, že prejdete na stránku GitHub pre forknuté úložisko a odstránite vzdialenú vetvu, ktorú ste práve pushli.
`Pull request` sa môže zdať ako zvláštny termín, pretože v skutočnosti chcete svoje zmeny "pushnúť" do projektu. Avšak správca (vlastník projektu) alebo hlavný tím musí vaše zmeny zvážiť predtým, než ich zlúči s "hlavnou" vetvou projektu, takže v podstate žiadate správcu o rozhodnutie o zmene.

Pull request je miesto, kde môžete porovnať a diskutovať o rozdieloch zavedených vo vetve, a to prostredníctvom recenzií, komentárov, integrovaných testov a ďalších nástrojov. Dobrý pull request sa riadi približne rovnakými pravidlami ako správa pri commite. Môžete pridať odkaz na problém v issue trackeri, napríklad keď vaša práca rieši konkrétny problém. Toto sa robí použitím `#` nasledovaného číslom problému. Napríklad `#97`.

🤞Držíme palce, aby všetky kontroly prešli a vlastníci projektu zlúčili vaše zmeny do projektu🤞

Aktualizujte svoju aktuálnu lokálnu pracovnú vetvu všetkými novými commitmi z príslušnej vzdialenej vetvy na GitHube:

`git pull`

## Ako prispieť do open source

Najprv si nájdime repozitár (alebo **repo**) na GitHube, ktorý vás zaujíma a do ktorého by ste chceli prispieť zmenou. Budete chcieť skopírovať jeho obsah na svoj počítač.

✅ Dobrý spôsob, ako nájsť repozitáre vhodné pre začiatočníkov, je [vyhľadávať podľa značky 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Skopírovanie repozitára lokálne](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.sk.png)

Existuje niekoľko spôsobov, ako skopírovať kód. Jedným zo spôsobov je "klonovanie" obsahu repozitára pomocou HTTPS, SSH alebo GitHub CLI (Command Line Interface).

Otvorte svoj terminál a klonujte repozitár takto:
`git clone https://github.com/ProjectURL`

Ak chcete pracovať na projekte, prepnite sa do správneho priečinka:
`cd ProjectURL`

Celý projekt môžete otvoriť aj pomocou [Codespaces](https://github.com/features/codespaces), integrovaného editoru kódu / cloudového vývojového prostredia od GitHubu, alebo pomocou [GitHub Desktop](https://desktop.github.com/).

Nakoniec si môžete kód stiahnuť v zipovanom priečinku.

### Niekoľko ďalších zaujímavostí o GitHube

Na GitHube môžete "hviezdičkovať", sledovať alebo "forkovať" akýkoľvek verejný repozitár. Svoje označené repozitáre nájdete v rozbaľovacom menu v pravom hornom rohu. Je to ako záložky, ale pre kód.

Projekty majú issue tracker, väčšinou na GitHube v záložke "Issues", pokiaľ nie je uvedené inak, kde ľudia diskutujú o problémoch súvisiacich s projektom. Záložka Pull Requests je miestom, kde ľudia diskutujú a recenzujú zmeny, ktoré sú v procese.

Projekty môžu mať diskusie vo fórach, mailing listoch alebo chatovacích kanáloch ako Slack, Discord alebo IRC.

✅ Prezrite si svoj nový GitHub repozitár a vyskúšajte niekoľko vecí, ako napríklad úpravu nastavení, pridanie informácií do repozitára a vytvorenie projektu (napríklad Kanban board). Možností je veľa!

---

## 🚀 Výzva

Spojte sa s priateľom a pracujte na kóde toho druhého. Spoločne vytvorte projekt, forkujte kód, vytvorte vetvy a zlúčte zmeny.

## Kvíz po prednáške
[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/en/)

## Recenzia a samoštúdium

Prečítajte si viac o [prispievaní do open source softvéru](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Cvičte, cvičte, cvičte. GitHub ponúka skvelé vzdelávacie cesty dostupné cez [skills.github.com](https://skills.github.com):

- [Prvý týždeň na GitHube](https://skills.github.com/#first-week-on-github)

Nájdete tam aj pokročilejšie kurzy.

## Zadanie

Dokončite kurz [Prvý týždeň na GitHube](https://skills.github.com/#first-week-on-github)

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.