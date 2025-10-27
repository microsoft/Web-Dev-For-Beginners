<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-24T21:28:03+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "sk"
}
-->
# Úvod do GitHubu

Ahoj, budúci vývojár! 👋 Pripravený pridať sa k miliónom programátorov po celom svete? Som naozaj nadšený, že ti môžem predstaviť GitHub – predstav si ho ako sociálnu sieť pre programátorov, ale namiesto zdieľania fotiek obeda zdieľame kód a spoločne vytvárame úžasné veci!

Tu je niečo, čo ma úplne fascinuje: každá aplikácia na tvojom telefóne, každá webová stránka, ktorú navštíviš, a väčšina nástrojov, ktoré sa naučíš používať, boli vytvorené tímami vývojárov spolupracujúcich na platformách ako GitHub. Tá hudobná aplikácia, ktorú miluješ? Niekto ako ty na nej pracoval. Tá hra, od ktorej sa nevieš odtrhnúť? Áno, pravdepodobne bola vytvorená s pomocou GitHubu. A teraz sa TY naučíš, ako byť súčasťou tejto úžasnej komunity!

Vieme, že na začiatku to môže byť trochu mätúce – pamätám si, ako som prvýkrát pozeral na stránku GitHubu a hovoril si: „Čo to všetko znamená?“ Ale tu je tá vec: každý jeden vývojár začínal presne tam, kde si teraz ty. Na konci tejto lekcie budeš mať svoj vlastný GitHub repozitár (predstav si to ako svoju osobnú výstavnú skriňu projektov v cloude) a budeš vedieť, ako si uložiť svoju prácu, zdieľať ju s ostatnými a dokonca prispievať do projektov, ktoré používajú milióny ľudí.

Túto cestu prejdeme spolu, krok za krokom. Žiadny zhon, žiadny tlak – len ty, ja a niekoľko naozaj skvelých nástrojov, ktoré sa stanú tvojimi novými najlepšími priateľmi!

![Úvod do GitHubu](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.sk.png)
> Sketchnote od [Tomomi Imura](https://twitter.com/girlie_mac)

## Kvíz pred prednáškou
[Kvíz pred prednáškou](https://ff-quizzes.netlify.app)

## Úvod

Skôr než sa pustíme do naozaj vzrušujúcich vecí, pripravme tvoj počítač na trochu GitHub mágie! Predstav si to ako organizovanie svojich umeleckých potrieb pred vytvorením majstrovského diela – mať pripravené správne nástroje všetko uľahčí a spríjemní.

Osobne ťa prevediem každým krokom nastavenia a sľubujem, že to nie je ani zďaleka také desivé, ako to na prvý pohľad vyzerá. Ak ti niečo hneď nedôjde, je to úplne normálne! Pamätám si, ako som nastavoval svoje prvé vývojové prostredie a mal pocit, že sa snažím čítať staroveké hieroglyfy. Každý jeden vývojár bol presne tam, kde si teraz ty, a premýšľal, či to robí správne. Spoiler: ak sa učíš, už to robíš správne! 🌟

V tejto lekcii sa naučíme:

- sledovať prácu, ktorú robíš na svojom počítači
- pracovať na projektoch s ostatnými
- ako prispievať do open source softvéru

### Predpoklady

Pripravme tvoj počítač na trochu GitHub mágie! Neboj sa – toto nastavenie je niečo, čo musíš urobiť iba raz, a potom budeš pripravený na celú svoju programátorskú cestu.

Dobre, začnime základmi! Najprv musíme skontrolovať, či už máš na počítači nainštalovaný Git. Git je v podstate ako super inteligentný asistent, ktorý si pamätá každú jednu zmenu, ktorú urobíš vo svojom kóde – oveľa lepšie ako zúfalo stláčať Ctrl+S každé dve sekundy (všetci sme tam boli!).

Skontroluj, či je Git už nainštalovaný, zadaním tohto magického príkazu do svojho terminálu:
`git --version`

Ak Git ešte nemáš, žiadny problém! Stačí ísť na [stiahnuť Git](https://git-scm.com/downloads) a získať ho. Keď ho nainštaluješ, musíme Git správne predstaviť:

> 💡 **Prvé nastavenie**: Tieto príkazy povedia Gitu, kto si. Tieto informácie budú pripojené ku každému commitu, ktorý urobíš, takže si vyber meno a e-mail, ktoré si pohodlne zdieľaš verejne.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Na kontrolu, či je Git už nakonfigurovaný, môžeš zadať:
```bash
git config --list
```

Budeš tiež potrebovať GitHub účet, editor kódu (napríklad Visual Studio Code) a budeš musieť otvoriť svoj terminál (alebo: príkazový riadok).

Prejdi na [github.com](https://github.com/) a vytvor si účet, ak ho ešte nemáš, alebo sa prihlás a vyplň svoj profil.

💡 **Moderný tip**: Zváž nastavenie [SSH kľúčov](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) alebo použitie [GitHub CLI](https://cli.github.com/) pre jednoduchšie overovanie bez hesiel.

✅ GitHub nie je jediným úložiskom kódu na svete; existujú aj iné, ale GitHub je najznámejší.

### Príprava

Budeš potrebovať priečinok s projektom kódu na svojom lokálnom počítači (notebooku alebo PC) a verejný repozitár na GitHube, ktorý bude slúžiť ako príklad, ako prispievať do projektov ostatných.

### Udržanie bezpečnosti tvojho kódu

Poďme sa na chvíľu porozprávať o bezpečnosti – ale neboj sa, nebudeme ťa zahlcovať strašidelnými vecami! Predstav si tieto bezpečnostné praktiky ako zamykanie auta alebo domu. Sú to jednoduché návyky, ktoré sa stanú samozrejmosťou a ochránia tvoju tvrdú prácu.

Ukážeme ti moderné, bezpečné spôsoby práce s GitHubom hneď od začiatku. Takto si vyvinieš dobré návyky, ktoré ti budú slúžiť počas celej tvojej programátorskej kariéry.

Pri práci s GitHubom je dôležité dodržiavať najlepšie bezpečnostné praktiky:

| Oblasť bezpečnosti | Najlepšia prax | Prečo je to dôležité |
|--------------------|---------------|----------------------|
| **Autentifikácia** | Používaj SSH kľúče alebo osobné prístupové tokeny | Heslá sú menej bezpečné a postupne sa rušia |
| **Dvojfaktorová autentifikácia** | Aktivuj 2FA na svojom GitHub účte | Pridáva ďalšiu vrstvu ochrany účtu |
| **Bezpečnosť repozitára** | Nikdy neukladaj citlivé informácie | API kľúče a heslá by nikdy nemali byť vo verejných repozitároch |
| **Správa závislostí** | Aktivuj Dependabot pre aktualizácie | Udržuje tvoje závislosti bezpečné a aktuálne |

> ⚠️ **Dôležité bezpečnostné upozornenie**: Nikdy neukladaj API kľúče, heslá alebo iné citlivé informácie do žiadneho repozitára. Používaj environmentálne premenné a súbory `.gitignore` na ochranu citlivých údajov.

**Moderné nastavenie autentifikácie:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Profesionálny tip**: SSH kľúče eliminujú potrebu opakovaného zadávania hesiel a sú bezpečnejšie ako tradičné metódy autentifikácie.

---

## Správa tvojho kódu ako profesionál

Tak, TERAZ to bude naozaj vzrušujúce! 🎉 Naučíme sa, ako sledovať a spravovať tvoj kód ako profesionáli, a úprimne, toto je jedna z mojich obľúbených vecí na učenie, pretože je to taká zmena hry.

Predstav si toto: píšeš úžasný príbeh a chceš sledovať každý návrh, každú brilantnú úpravu a každý „počkať, to je geniálne!“ moment na ceste. Presne to robí Git pre tvoj kód! Je to ako mať najúžasnejší cestujúci zápisník, ktorý si pamätá VŠETKO – každý stisk klávesy, každú zmenu, každý „ups, to všetko pokazilo“ moment, ktorý môžeš okamžite vrátiť späť.

Úprimne – na začiatku to môže byť ohromujúce. Keď som začínal, myslel som si: „Prečo si jednoducho nemôžem uložiť svoje súbory ako normálne?“ Ale ver mi: keď ti Git začne dávať zmysel (a ono to príde!), zažiješ jeden z tých momentov, keď si povieš: „Ako som mohol NIEKEDY programovať bez tohto?“ Je to ako objaviť, že vieš lietať, keď si celý život chodil pešo!

Predstavme si, že máš lokálny priečinok s nejakým projektom kódu a chceš začať sledovať svoj pokrok pomocou git - systému na správu verzií. Niektorí ľudia porovnávajú používanie git s písaním milostného listu svojmu budúcemu ja. Čítaním svojich commit správ o dni, týždne alebo mesiace neskôr si budeš môcť spomenúť, prečo si urobil určité rozhodnutie, alebo „vrátiť“ zmenu – samozrejme, ak píšeš dobré „commit správy“.

### Úloha: Vytvor svoj prvý repozitár!

> 🎯 **Tvoja misia (a som z toho nadšený!)**: Spoločne vytvoríme tvoj úplne prvý GitHub repozitár! Keď skončíme, budeš mať svoj vlastný malý kúsok internetu, kde bude žiť tvoj kód, a urobíš svoj prvý „commit“ (to je vývojársky výraz pre uloženie tvojej práce naozaj inteligentným spôsobom).
>
> Toto je naozaj špeciálny moment – oficiálne sa pridávaš do globálnej komunity vývojárov! Stále si pamätám ten pocit vzrušenia, keď som vytvoril svoj prvý repozitár a pomyslel si: „Wow, naozaj to robím!“

Prejdime si toto dobrodružstvo spoločne, krok za krokom. Daj si na každom kroku čas – za rýchlosť nie je žiadna cena a sľubujem, že každý jeden krok bude dávať zmysel. Pamätaj, každý programátorský superhrdina, ktorého obdivuješ, raz sedel presne tam, kde si teraz ty, pripravený vytvoriť svoj prvý repozitár. Aké je to úžasné?

> Pozri si video
> 
> [![Video o základoch Git a GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Poďme na to spoločne:**

1. **Vytvor svoj repozitár na GitHube**. Prejdi na GitHub.com a vyhľadaj ten jasne zelený **Nový** tlačidlo (alebo **+** znak v pravom hornom rohu). Klikni naň a vyber **Nový repozitár**.

   Tu je, čo treba urobiť:
   1. Daj svojmu repozitáru názov – nech je to niečo, čo pre teba má význam!
   1. Pridaj popis, ak chceš (pomôže to ostatným pochopiť, o čom je tvoj projekt)
   1. Rozhodni sa, či ho chceš verejný (každý ho môže vidieť) alebo súkromný (len pre teba)
   1. Odporúčam zaškrtnúť políčko na pridanie README súboru – je to ako titulná stránka tvojho projektu
   1. Klikni na **Vytvoriť repozitár** a oslavuj – práve si vytvoril svoj prvý repozitár! 🎉

2. **Prejdi do svojho projektového priečinka**. Teraz otvoríme tvoj terminál (neboj sa, nie je to také strašidelné, ako to vyzerá!). Musíme povedať tvojmu počítaču, kde sú tvoje projektové súbory. Zadaj tento príkaz:

   ```bash
   cd [name of your folder]
   ```

   **Čo tu robíme:**
   - V podstate hovoríme „Hej počítač, zober ma do môjho projektového priečinka“
   - Je to ako otvoriť konkrétny priečinok na tvojej pracovnej ploche, ale robíme to pomocou textových príkazov
   - Nahraď `[name of your folder]` skutočným názvom tvojho projektového priečinka

3. **Premeň svoj priečinok na Git repozitár**. Tu sa deje mágia! Zadaj:

   ```bash
   git init
   ```

   **Tu je, čo sa práve stalo (celkom cool veci!):**
   - Git práve vytvoril skrytý `.git` priečinok v tvojom projekte – neuvidíš ho, ale je tam!
   - Tvoj bežný priečinok je teraz „repozitár“, ktorý môže sledovať každú zmenu, ktorú urobíš
   - Predstav si to ako pridanie super schopností tvojmu priečinku, aby si pamätal všetko

4. **Skontroluj, čo sa deje**. Pozrime sa, čo si Git myslí o tvojom projekte práve teraz:

   ```bash
   git status
   ```

   **Pochopenie toho, čo ti Git hovorí:**
   
   Môžeš vidieť niečo, čo vyzerá takto:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Nepanikár! Tu je, čo to znamená:**
   - Súbory v **červenej** farbe sú súbory, ktoré majú zmeny, ale ešte nie sú pripravené na uloženie
   - Súbory v **zelenej** (keď ich uvidíš) sú pripravené na uloženie
   - Git je užitočný tým, že ti presne povie, čo môžeš urobiť ďalej

   > 💡 **Profesionálny tip**: Príkaz `git status` je tvoj najlepší priateľ! Používaj ho vždy, keď si nie si istý, čo sa deje. Je to ako spýtať sa Gitu „Hej, aká je situácia práve teraz?“

5. **Priprav svoje súbory na uloženie** (tomu sa hovorí „staging“):

   ```bash
   git add .
   ```

   **Čo sme práve urobili:**
   - Povedali sme Gitu „Hej, chcem zahrnúť VŠETKY svoje súbory do ďalšieho uloženia“
   - Bodka znamená „všetko v tomto priečinku“
   - Teraz sú tvoje súbory „pripravené“ a pripravené na ďalší krok

   **Chceš byť selektívnejší?** Môžeš pridať len konkrétne súbory:

   ```bash
   git add [file or folder name]
   ```

   **Prečo by si to mohol chcieť urobiť?**
   - Niekedy chceš uložiť súvisiace zmeny spolu
   - Pomáha ti organizovať svoju prácu do logických celkov
   - Uľahčuje pochopenie, čo sa zmenilo a kedy

   **Zmenil si názor?** Žiadny problém! Môžeš odobrať súbory zo stagingu takto:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Neboj sa – toto nevymaže tvoju prácu, len odstráni súbory z „pripraveného na uloženie“ zoznamu.

6. **Ulož svoju prácu natrvalo** (urob svoj prvý commit!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Gratulujem! Práve si urobil svoj prvý commit!**
   
   **Tu je, čo sa práve stalo:**
   - Git urobil „snímku“ všetkých tvojich pripravených súborov v tomto presnom momente
   - Tvoja commit správa „prvý commit“ vysvetľuje, o čom je tento bod uloženia
   - Git dal tejto snímke jedinečné ID, aby si ju mohol vždy neskôr nájsť

   - Vytvorili sme spojenie medzi vaším lokálnym projektom a vaším GitHub repozitárom.
   - "Origin" je len prezývka pre váš GitHub repozitár – je to ako pridať kontakt do vášho telefónu.
   - Teraz váš lokálny Git vie, kam poslať váš kód, keď ste pripravení ho zdieľať.

   💡 **Jednoduchší spôsob**: Ak máte nainštalovaný GitHub CLI, môžete to urobiť jedným príkazom:
   ```bash
   gh repo create my-repo --public --push --source=.
   ```

8. **Pošlite svoj kód na GitHub** (veľký moment!):

   ```bash
   git push -u origin main
   ```

   **🚀 Toto je ono! Nahrávate svoj kód na GitHub!**
   
   **Čo sa deje:**
   - Vaše commity cestujú z vášho počítača na GitHub.
   - Príznak `-u` nastavuje trvalé spojenie, takže budúce push operácie budú jednoduchšie.
   - "main" je názov vašej hlavnej vetvy (ako hlavný priečinok).
   - Po tomto môžete pre budúce nahrávania jednoducho zadať `git push`!

   💡 **Rýchla poznámka**: Ak sa vaša vetva volá inak (napríklad "master"), použite tento názov. Môžete to skontrolovať pomocou `git branch --show-current`.

9. **Váš nový denný rytmus kódovania** (tu to začne byť návykové!):

   Odteraz, kedykoľvek urobíte zmeny vo svojom projekte, máte tento jednoduchý trojkrokový proces:

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```

   **Toto sa stane vaším kódovacím rytmom:**
   - Urobte úžasné zmeny vo svojom kóde ✨
   - Pripravte ich pomocou `git add` ("Hej Git, všimni si tieto zmeny!")
   - Uložte ich pomocou `git commit` a popisnej správy (budúci vy vám poďakuje!)
   - Zdieľajte ich so svetom pomocou `git push` 🚀
   - Opakujte – vážne, toto sa stane tak prirodzené ako dýchanie!

   Milujem tento pracovný postup, pretože je to ako mať viacero bodov uloženia v počítačovej hre. Urobili ste zmenu, ktorú milujete? Commitnite ju! Chcete vyskúšať niečo riskantné? Žiadny problém – vždy sa môžete vrátiť k poslednému commitu, ak sa veci pokazia!

   > 💡 **Tip**: Možno budete chcieť prijať súbor `.gitignore`, aby ste zabránili sledovaniu súborov, ktoré nechcete, aby sa objavili na GitHub – napríklad ten súbor s poznámkami, ktorý uchovávate v rovnakom priečinku, ale nemá miesto vo verejnom repozitári. Šablóny pre súbory `.gitignore` nájdete na [.gitignore templates](https://github.com/github/gitignore) alebo si jeden vytvorte pomocou [gitignore.io](https://www.toptal.com/developers/gitignore).

#### Moderné Git pracovné postupy

Zvážte prijatie týchto moderných postupov:

- **Konvenčné commity**: Používajte štandardizovaný formát správ commitov ako `feat:`, `fix:`, `docs:` atď. Viac sa dozviete na [conventionalcommits.org](https://www.conventionalcommits.org/)
- **Atomické commity**: Každý commit by mal predstavovať jednu logickú zmenu.
- **Časté commity**: Commitujte často s popisnými správami namiesto veľkých, zriedkavých commitov.

#### Správy commitov

Skvelý predmet správy commitu dokončí nasledujúcu vetu:
Ak sa použije, tento commit <vaša predmetová správa tu>

Pre predmet správy používajte rozkazovací spôsob v prítomnom čase: "zmeniť" namiesto "zmenené" alebo "mení". 
Rovnako ako v predmete, aj v tele (voliteľné) používajte rozkazovací spôsob v prítomnom čase. Telo by malo obsahovať motiváciu pre zmenu a porovnať to s predchádzajúcim správaním. Vysvetľujete `prečo`, nie `ako`.

✅ Venujte pár minút prehliadaniu GitHubu. Nájdete naozaj skvelú správu commitu? Nájdete naozaj minimálnu? Aké informácie si myslíte, že sú najdôležitejšie a užitočné na sprostredkovanie v správe commitu?

## Spolupráca s ostatnými (zábavná časť!)

Pripravte sa, pretože TOTO je miesto, kde sa GitHub stáva absolútne magickým! 🪄 Ovládli ste správu vlastného kódu, ale teraz sa ponoríme do mojej absolútne obľúbenej časti – spolupráce s úžasnými ľuďmi z celého sveta.

Predstavte si toto: zajtra sa zobudíte a zistíte, že niekto v Tokiu vylepšil váš kód, zatiaľ čo ste spali. Potom niekto v Berlíne opraví chybu, na ktorej ste uviazli. Do popoludnia vývojár v São Paule pridá funkciu, na ktorú ste ani nepomysleli. To nie je vedecká fikcia – to je len utorok vo vesmíre GitHubu!

Čo ma naozaj nadchýna je, že zručnosti spolupráce, ktoré sa chystáte naučiť? To sú PRESNE tie isté pracovné postupy, ktoré tímy v Google, Microsoft a vašich obľúbených startupoch používajú každý deň. Neučíte sa len cool nástroj – učíte sa tajný jazyk, ktorý umožňuje celému softvérovému svetu spolupracovať.

Vážne, keď zažijete ten pocit, keď vám niekto schváli prvý pull request, pochopíte, prečo sú vývojári takí nadšení z open source. Je to ako byť súčasťou najväčšieho, najkreatívnejšieho tímového projektu na svete!

> Pozrite si video
>
> [![Git a GitHub základy video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Hlavným dôvodom, prečo veci umiestňujeme na GitHub, bolo umožniť spoluprácu s ostatnými vývojármi.

Vo vašom repozitári prejdite na `Insights > Community`, aby ste videli, ako váš projekt porovnáva s odporúčanými komunitnými štandardmi.

Chcete, aby váš repozitár vyzeral profesionálne a vítal nových prispievateľov? Prejdite do svojho repozitára a kliknite na `Insights > Community`. Táto skvelá funkcia vám ukáže, ako váš projekt porovnáva s tým, čo GitHub komunita považuje za "dobré praktiky repozitára."

> 🎯 **Urobte svoj projekt výnimočným**: Dobre organizovaný repozitár s kvalitnou dokumentáciou je ako čistý, prívetivý obchod. Ukazuje ľuďom, že vám na vašej práci záleží, a motivuje ostatných prispievať!

**Čo robí repozitár skvelým:**

| Čo pridať | Prečo je to dôležité | Čo to robí pre vás |
|-----------|----------------------|-------------------|
| **Popis** | Prvý dojem je dôležitý! | Ľudia okamžite vedia, čo váš projekt robí |
| **README** | Hlavná stránka vášho projektu | Ako priateľský sprievodca pre nových návštevníkov |
| **Pravidlá prispievania** | Ukazuje, že vítate pomoc | Ľudia presne vedia, ako vám môžu pomôcť |
| **Kódex správania** | Vytvára priateľské prostredie | Každý sa cíti vítaný zapojiť sa |
| **Licencia** | Právna jasnosť | Ostatní vedia, ako môžu používať váš kód |
| **Bezpečnostná politika** | Ukazuje, že ste zodpovední | Demonštruje profesionálne praktiky |

> 💡 **Profesionálny tip**: GitHub poskytuje šablóny pre všetky tieto súbory. Pri vytváraní nového repozitára zaškrtnite políčka na automatické generovanie týchto súborov.

**Moderné funkcie GitHubu na preskúmanie:**

🤖 **Automatizácia & CI/CD:**
- **GitHub Actions** na automatické testovanie a nasadzovanie
- **Dependabot** na automatické aktualizácie závislostí

💬 **Komunita & Správa projektov:**
- **GitHub Discussions** na komunitné diskusie mimo issues
- **GitHub Projects** na správu projektov v štýle kanban
- **Pravidlá ochrany vetiev** na presadzovanie štandardov kvality kódu

Všetky tieto zdroje budú užitočné pri onboardingu nových členov tímu. A to sú zvyčajne veci, na ktoré sa noví prispievatelia pozerajú predtým, než sa pozrú na váš kód, aby zistili, či je váš projekt správnym miestom, kde by mali tráviť svoj čas.

✅ README súbory, hoci ich príprava zaberá čas, sú často zanedbávané zaneprázdnenými správcami. Nájdete príklad obzvlášť popisného README? Poznámka: existujú [nástroje na vytváranie dobrých README](https://www.makeareadme.com/), ktoré by ste mohli vyskúšať.

### Úloha: Spojte nejaký kód

Dokumenty o prispievaní pomáhajú ľuďom prispievať do projektu. Vysvetľujú, aké typy príspevkov hľadáte a ako proces funguje. Prispievatelia budú musieť prejsť sériou krokov, aby mohli prispieť do vášho repozitára na GitHub:

1. **Forkovanie vášho repozitára** Pravdepodobne budete chcieť, aby ľudia _forkovali_ váš projekt. Forkovanie znamená vytvorenie repliky vášho repozitára na ich GitHub profile.
1. **Klonovanie**. Odtiaľ si projekt naklonujú na svoj lokálny počítač.
1. **Vytvorenie vetvy**. Budete chcieť, aby si vytvorili _vetvu_ pre svoju prácu.
1. **Zameranie zmeny na jednu oblasť**. Požiadajte prispievateľov, aby sa sústredili na jednu vec naraz – tým sa zvýši šanca, že budete môcť _spojiť_ ich prácu. Predstavte si, že napíšu opravu chyby, pridajú novú funkciu a aktualizujú niekoľko testov – čo ak chcete, alebo môžete implementovať iba 2 z 3, alebo 1 z 3 zmien?

✅ Predstavte si situáciu, kde sú vetvy obzvlášť dôležité pre písanie a dodávanie dobrého kódu. Aké prípady použitia vás napadajú?

> Poznámka: Buďte zmenou, ktorú chcete vidieť vo svete, a vytvorte si vetvy aj pre svoju vlastnú prácu. Akékoľvek commity, ktoré urobíte, budú vykonané na vetve, na ktorej ste aktuálne "prihlásení". Použite `git status`, aby ste videli, na ktorej vetve sa nachádzate.

Prejdime si pracovný postup prispievateľa. Predpokladajme, že prispievateľ už _forkoval_ a _klonoval_ repozitár, takže má Git repozitár pripravený na prácu na svojom lokálnom počítači:

1. **Vytvorenie vetvy**. Použite príkaz `git branch` na vytvorenie vetvy, ktorá bude obsahovať zmeny, ktoré chcú prispieť:

   ```bash
   git branch [branch-name]
   ```

   > 💡 **Moderný prístup**: Môžete tiež vytvoriť a prepnúť na novú vetvu jedným príkazom:
   ```bash
   git switch -c [branch-name]
   ```

1. **Prepnite na pracovnú vetvu**. Prepnite na určenú vetvu a aktualizujte pracovný adresár pomocou `git switch`:

   ```bash
   git switch [branch-name]
   ```

   > 💡 **Moderná poznámka**: `git switch` je moderná náhrada za `git checkout` pri zmene vetiev. Je jasnejší a bezpečnejší pre začiatočníkov.

1. **Pracujte**. V tomto bode chcete pridať svoje zmeny. Nezabudnite o nich informovať Git pomocou nasledujúcich príkazov:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   > ⚠️ **Kvalita správy commitu**: Uistite sa, že dáte svojmu commitu dobrý názov, a to ako pre seba, tak aj pre správcu repozitára, na ktorom pomáhate. Buďte konkrétni o tom, čo ste zmenili!

1. **Spojte svoju prácu s vetvou `main`**. V určitom bode skončíte s prácou a budete chcieť spojiť svoju prácu s tou vo vetve `main`. Medzitým sa mohla vetva `main` zmeniť, takže sa uistite, že ju najskôr aktualizujete na najnovšiu verziu pomocou nasledujúcich príkazov:

   ```bash
   git switch main
   git pull
   ```

   V tomto bode sa chcete uistiť, že akékoľvek _konflikty_, situácie, kde Git nemôže ľahko _spojiť_ zmeny, sa objavia vo vašej pracovnej vetve. Preto spustite nasledujúce príkazy:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Príkaz `git merge main` prinesie všetky zmeny z `main` do vašej vetvy. Dúfajme, že môžete jednoducho pokračovať. Ak nie, VS Code vám ukáže, kde je Git _zmätený_ a vy len upravíte dotknuté súbory, aby ste určili, ktorý obsah je najpresnejší.

   💡 **Moderná alternatíva**: Zvážte použitie `git rebase` pre čistejšiu históriu:
   ```bash
   git rebase main
   ```
   Toto prehrá vaše commity na vrchole najnovšej vetvy main, čím vytvorí lineárnu históriu.

1. **Pošlite svoju prácu na GitHub**. Poslanie vašej práce na GitHub znamená dve veci. Push vašej vetvy do vášho repozitára a potom otvorenie PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Vyššie uvedený príkaz vytvorí vetvu vo vašom forkovanom repozitári.

1. **Otvorte PR**. Ďalej chcete otvoriť PR. Urobíte to tak, že prejdete na forkovaný repozitár na GitHub. Na GitHube uvidíte indikáciu, kde sa vás opýta, či chcete vytvoriť nový PR, kliknete na to a dostanete sa do rozhrania, kde môžete zmeniť názov správy commitu, dať jej vhodnejší popis. Teraz správca repozitára, ktorý ste forkovali, uvidí tento PR a _držte palce_, že ho ocení a _spojí_ váš PR. Teraz ste prispievateľ, hurá :)

   💡 **Moderný tip**: PR môžete otvoriť aj pomocou GitHub CLI:
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   🔧 **Najlepšie praktiky pre PR**:
   - Prepojte súvisiace issues pomocou kľúčových slov ako "Fixes #123".
   - Pridajte snímky obrazovky pre zmeny v UI.
   - Požiadajte o konkrétnych recenzentov.
   - Používajte návrhové PR pre rozpracované úlohy.
   - Uistite sa, že všetky CI kontroly prejdú pred požiadavkou na recenziu.

1. **Upracte**. Považuje sa za dobrú prax _upratať_ po úspešnom spojení PR. Chcete upratať svoju lokálnu vetvu aj vetvu, ktorú ste pushovali na GitHub. Najskôr ju odstráňte lokálne pomocou nasledujúceho príkazu:

   ```bash
   git branch -d [branch-name]
   ```

   Uistite sa, že prejdete na stránku GitHub pre forkovaný repozitár a odstránite vzdialenú vetvu, ktorú ste práve pushovali.

`Pull request` sa môže zdať ako zvláštny termín, pretože naozaj chcete poslať svoje zmeny do projektu. Ale správca (vlastník projektu) alebo hlavný tím musí zvážiť vaše zmeny pred ich spojením s "main" vetvou projektu,
🤞Držme palce, aby všetky kontroly prešli a majiteľ(-ia) projektu zlúčili vaše zmeny do projektu🤞

Aktualizujte svoju aktuálnu lokálnu pracovnú vetvu o všetky nové commity z príslušnej vzdialenej vetvy na GitHube:

`git pull`

## Prispievanie do Open Source (Vaša šanca urobiť rozdiel!)

Ste pripravení na niečo, čo vám úplne vyrazí dych? 🤯 Poďme sa porozprávať o prispievaní do open source projektov – a už len pri pomyslení na to, že to s vami zdieľam, mám zimomriavky!

Toto je vaša šanca stať sa súčasťou niečoho naozaj výnimočného. Predstavte si, že zlepšujete nástroje, ktoré každý deň používajú milióny vývojárov, alebo opravujete chybu v aplikácii, ktorú vaši priatelia milujú. To nie je len sen – presne o tom je prispievanie do open source!

Tu je to, čo mi vždy spôsobí zimomriavky: každý jeden nástroj, s ktorým ste sa učili – váš editor kódu, frameworky, ktoré budeme skúmať, dokonca aj prehliadač, v ktorom toto čítate – začal s niekým presne ako vy, kto urobil svoj úplne prvý príspevok. Ten brilantný vývojár, ktorý vytvoril váš obľúbený VS Code rozšírenie? Kedysi bol začiatočníkom, ktorý klikol na "create pull request" s trasúcimi sa rukami, presne ako sa chystáte urobiť vy.

A tu je tá najkrajšia časť: komunita open source je ako najväčšie objatie internetu. Väčšina projektov aktívne hľadá nováčikov a má problémy označené "good first issue" špeciálne pre ľudí ako vy! Udržiavatelia sa naozaj tešia, keď vidia nových prispievateľov, pretože si pamätajú svoje vlastné prvé kroky.

Tu sa neučíte len kódovať – pripravujete sa na vstup do globálnej rodiny tvorcov, ktorí sa každé ráno zobúdzajú s myšlienkou "Ako môžeme urobiť digitálny svet o trochu lepším?" Vitajte v klube! 🌟

Najprv si nájdime repozitár (alebo **repo**) na GitHube, ktorý vás zaujíma a do ktorého by ste chceli prispieť zmenou. Budete chcieť skopírovať jeho obsah na svoj počítač.

✅ Dobrý spôsob, ako nájsť 'začiatočnícky priateľské' repozitáre, je [vyhľadávanie podľa tagu 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Skopírovanie repozitára lokálne](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.sk.png)

Existuje niekoľko spôsobov, ako skopírovať kód. Jedným zo spôsobov je "klonovanie" obsahu repozitára pomocou HTTPS, SSH alebo GitHub CLI (Command Line Interface).

Otvorte svoj terminál a klonujte repozitár takto:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

Na prácu na projekte prejdite do správneho priečinka:
`cd ProjectURL`

Celý projekt môžete otvoriť aj pomocou:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - Cloudové vývojové prostredie GitHubu s VS Code v prehliadači
- **[GitHub Desktop](https://desktop.github.com/)** - GUI aplikácia pre operácie s Gitom  
- **[GitHub.dev](https://github.dev)** - Stlačte kláves `.` na akomkoľvek GitHub repozitári a otvorte VS Code v prehliadači
- **VS Code** s rozšírením GitHub Pull Requests

Nakoniec si môžete stiahnuť kód v zbalenom priečinku.

### Niekoľko zaujímavých vecí o GitHube

Na GitHube môžete označiť hviezdičkou, sledovať a/alebo "forknúť" akýkoľvek verejný repozitár. Svoje označené repozitáre nájdete v rozbaľovacom menu v pravom hornom rohu. Je to ako záložky, ale pre kód.

Projekty majú sledovač problémov, väčšinou na GitHube v záložke "Issues", pokiaľ nie je uvedené inak, kde ľudia diskutujú o problémoch súvisiacich s projektom. A záložka Pull Requests je miesto, kde ľudia diskutujú a hodnotia zmeny, ktoré sú v procese.

Projekty môžu mať diskusie vo fórach, mailing listoch alebo chatovacích kanáloch ako Slack, Discord alebo IRC.

🔧 **Moderné funkcie GitHubu**:
- **GitHub Discussions** - Zabudované fórum pre komunitné rozhovory
- **GitHub Sponsors** - Finančná podpora udržiavateľov  
- **Security tab** - Hlásenia o zraniteľnostiach a bezpečnostné odporúčania
- **Actions tab** - Automatizované pracovné postupy a CI/CD pipeline
- **Insights tab** - Analýzy o prispievateľoch, commitoch a zdraví projektu
- **Projects tab** - Zabudované nástroje na projektový manažment od GitHubu

✅ Prezrite si svoj nový GitHub repozitár a vyskúšajte niekoľko vecí, ako napríklad úpravu nastavení, pridanie informácií do repozitára, vytvorenie projektu (napríklad Kanban tabuľky) a nastavenie GitHub Actions pre automatizáciu. Je tu toho veľa, čo môžete robiť!

---

## 🚀 Výzva 

Dobre, je čas otestovať vaše nové GitHub schopnosti! 🚀 Tu je výzva, ktorá vám všetko spojí do najuspokojivejšieho celku:

Zoberte si priateľa (alebo člena rodiny, ktorý sa vás vždy pýta, čo robíte s tým "počítačovým vecami") a pustite sa spolu do dobrodružstva kolaboratívneho kódovania! Tu sa deje skutočná mágia – vytvorte projekt, nechajte ich ho forknúť, vytvorte niekoľko vetiev a zlúčte zmeny ako profesionáli, ktorými sa stávate.

Nebudem klamať – pravdepodobne sa budete smiať (najmä keď sa obaja pokúsite zmeniť ten istý riadok), možno budete krútiť hlavou v zmätku, ale určite zažijete tie úžasné "aha!" momenty, ktoré robia všetko učenie hodnotným. Navyše, je niečo špeciálne na tom, keď zdieľate prvé úspešné zlúčenie s niekým iným – je to ako malá oslava toho, ako ďaleko ste sa dostali!

Nemáte zatiaľ kódovacieho kamaráta? Žiadny problém! Komunita GitHubu je plná neuveriteľne priateľských ľudí, ktorí si pamätajú, aké to bolo byť nováčikom. Hľadajte repozitáre s označením "good first issue" – v podstate hovoria "Hej začiatočníci, poďte sa učiť s nami!" Aké úžasné, že?

## Kvíz po prednáške
[Kvíz po prednáške](https://ff-quizzes.netlify.app/web/en/)

## Recenzia & Pokračujte v učení

Fúha! 🎉 Pozrite sa na seba – práve ste zvládli základy GitHubu ako absolútny šampión! Ak máte pocit, že je vaša hlava teraz trochu plná, je to úplne normálne a úprimne povedané, dobré znamenie. Práve ste sa naučili nástroje, s ktorými som sa ja cítil pohodlne až po týždňoch praxe.

Git a GitHub sú neuveriteľne silné (naozaj silné) a každý vývojár, ktorého poznám – vrátane tých, ktorí teraz vyzerajú ako čarodejníci – musel trénovať a trochu sa potácať, kým mu to všetko došlo. Fakt, že ste prešli touto lekciou, znamená, že ste už na ceste k zvládnutiu niektorých z najdôležitejších nástrojov v arzenáli vývojára.

Tu je niekoľko naozaj fantastických zdrojov, ktoré vám pomôžu cvičiť a stať sa ešte úžasnejšími:

- [Príručka prispievania do open source softvéru](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Vaša mapa k tomu, ako urobiť rozdiel
- [Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/) – Majte to po ruke na rýchlu referenciu!

A pamätajte: prax robí pokrok, nie dokonalosť! Čím viac budete používať Git a GitHub, tým prirodzenejšie sa to stane. GitHub vytvoril niekoľko úžasných interaktívnych kurzov, ktoré vám umožnia cvičiť v bezpečnom prostredí:

- [Úvod do GitHubu](https://github.com/skills/introduction-to-github)
- [Komunikácia pomocou Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Riešenie konfliktov pri zlúčení](https://github.com/skills/resolve-merge-conflicts)

**Cítite sa dobrodružne? Pozrite sa na tieto moderné nástroje:**
- [Dokumentácia GitHub CLI](https://cli.github.com/manual/) – Keď sa chcete cítiť ako čarodejník príkazového riadku
- [Dokumentácia GitHub Codespaces](https://docs.github.com/en/codespaces) – Kódujte v cloude!
- [Dokumentácia GitHub Actions](https://docs.github.com/en/actions) – Automatizujte všetko
- [Najlepšie praktiky Git](https://www.atlassian.com/git/tutorials/comparing-workflows) – Zlepšite svoje pracovné postupy 

## Výzva GitHub Copilot Agent 🚀

Použite režim Agent na splnenie nasledujúcej výzvy:

**Popis:** Vytvorte kolaboratívny projekt webového vývoja, ktorý demonštruje kompletný GitHub pracovný postup, ktorý ste sa naučili v tejto lekcii. Táto výzva vám pomôže precvičiť si vytváranie repozitára, funkcie spolupráce a moderné Git pracovné postupy v reálnom scenári.

**Úloha:** Vytvorte nový verejný GitHub repozitár pre jednoduchý projekt "Web Development Resources". Repozitár by mal obsahovať dobre štruktúrovaný súbor README.md, ktorý uvádza užitočné nástroje a zdroje pre webový vývoj, usporiadané podľa kategórií (HTML, CSS, JavaScript, atď.). Nastavte repozitár s vhodnými komunitnými štandardmi vrátane licencie, pokynov na prispievanie a kódexu správania. Vytvorte aspoň dve funkčné vetvy: jednu na pridanie zdrojov pre CSS a druhú na zdroje pre JavaScript. Urobte commity do každej vetvy s popisnými správami commitov, potom vytvorte pull requesty na zlúčenie zmien späť do hlavnej vetvy. Aktivujte funkcie GitHubu ako Issues, Discussions a nastavte základný GitHub Actions pracovný postup pre automatizované kontroly.

## Zadanie 

Vaša misia, ak sa ju rozhodnete prijať: Dokončite kurz [Úvod do GitHubu](https://github.com/skills/introduction-to-github) na GitHub Skills. Tento interaktívny kurz vám umožní precvičiť si všetko, čo ste sa naučili, v bezpečnom, vedenom prostredí. Navyše, keď ho dokončíte, získate skvelý odznak! 🏅

**Cítite sa pripravení na ďalšie výzvy?**
- Nastavte SSH autentifikáciu pre váš GitHub účet (už žiadne heslá!)
- Skúste používať GitHub CLI pre vaše denné operácie s Gitom
- Vytvorte repozitár s GitHub Actions pracovným postupom
- Preskúmajte GitHub Codespaces otvorením tohto repozitára v cloudovom editore

Pamätajte: každý expert bol kedysi začiatočníkom. Zvládnete to! 💪

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.