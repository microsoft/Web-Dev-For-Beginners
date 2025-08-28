<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "05666cecb8983a72cf0ce1d18932b5b7",
  "translation_date": "2025-08-27T23:07:12+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "sl"
}
-->
# Uvod v GitHub

Ta lekcija zajema osnove GitHuba, platforme za gostovanje in upravljanje sprememb v vaši kodi.

![Uvod v GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

## Predhodni kviz
[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/3)

## Uvod

V tej lekciji bomo obravnavali:

- sledenje delu, ki ga opravljate na svojem računalniku
- delo na projektih z drugimi
- kako prispevati k odprtokodni programski opremi

### Predpogoji

Preden začnete, preverite, ali je Git nameščen. V terminal vnesite:  
`git --version`

Če Git ni nameščen, [prenesite Git](https://git-scm.com/downloads). Nato nastavite svoj lokalni Git profil v terminalu:
* `git config --global user.name "vaše-ime"`
* `git config --global user.email "vaš-email"`

Če želite preveriti, ali je Git že konfiguriran, lahko vnesete:
`git config --list`

Poleg tega boste potrebovali GitHub račun, urejevalnik kode (na primer Visual Studio Code) in odprt terminal (ali ukazni poziv).

Obiščite [github.com](https://github.com/) in ustvarite račun, če ga še nimate, ali se prijavite in izpolnite svoj profil.

✅ GitHub ni edini repozitorij kode na svetu; obstajajo tudi drugi, vendar je GitHub najbolj znan.

### Priprava

Potrebovali boste mapo s projektom kode na svojem lokalnem računalniku (prenosniku ali PC-ju) in javni repozitorij na GitHubu, ki bo služil kot primer, kako prispevati k projektom drugih.

---

## Upravljanje kode

Recimo, da imate lokalno mapo s projektom kode in želite začeti slediti svojemu napredku z uporabo git-a – sistema za nadzor različic. Nekateri primerjajo uporabo git-a s pisanjem ljubezenskega pisma svojemu prihodnjemu jazu. Ko boste čez dneve, tedne ali mesece prebirali svoja sporočila o potrditvah (commit messages), se boste lahko spomnili, zakaj ste sprejeli določeno odločitev, ali pa "razveljavili" spremembo – seveda, če pišete dobra sporočila o potrditvah.

### Naloga: Ustvarite repozitorij in potrdite kodo  

> Oglejte si video
> 
> [![Osnove Git in GitHub videa](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Ustvarite repozitorij na GitHubu**. Na GitHub.com, v zavihku repozitoriji ali v zgornji desni navigacijski vrstici poiščite gumb **nov repozitorij**.

   1. Dajte svojemu repozitoriju (mapi) ime.
   1. Izberite **ustvari repozitorij**.

1. **Pomaknite se do svoje delovne mape**. V terminalu preklopite na mapo (imenovano tudi imenik), ki ji želite začeti slediti. Vnesite:

   ```bash
   cd [name of your folder]
   ```

1. **Inicializirajte git repozitorij**. V svojem projektu vnesite:

   ```bash
   git init
   ```

1. **Preverite stanje**. Če želite preveriti stanje svojega repozitorija, vnesite:

   ```bash
   git status
   ```

   Izpis lahko izgleda nekako takole:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Običajno ukaz `git status` pove stvari, kot so, katere datoteke so pripravljene za _shranjevanje_ v repozitorij ali imajo spremembe, ki jih morda želite ohraniti.

1. **Dodajte vse datoteke za sledenje**  
   To se imenuje tudi priprava datotek/dodajanje datotek v pripravljalno območje.

   ```bash
   git add .
   ```

   Ukaz `git add` z argumentom `.` označuje, da so vse vaše datoteke in spremembe pripravljene za sledenje.

1. **Dodajte izbrane datoteke za sledenje**

   ```bash
   git add [file or folder name]
   ```

   To nam omogoča dodajanje samo izbranih datotek v pripravljalno območje, ko ne želimo potrditi vseh datotek naenkrat.

1. **Odstranite vse datoteke iz pripravljalnega območja**

   ```bash
   git reset
   ```

   Ta ukaz nam omogoča, da odstranimo vse datoteke iz pripravljalnega območja naenkrat.

1. **Odstranite določeno datoteko iz pripravljalnega območja**

   ```bash
   git reset [file or folder name]
   ```

   Ta ukaz nam omogoča, da odstranimo samo določeno datoteko iz pripravljalnega območja, ki je ne želimo vključiti v naslednjo potrditev.

1. **Ohranite svoje delo**. Na tej točki ste dodali datoteke v tako imenovano _pripravljalno območje_. To je mesto, kjer Git sledi vašim datotekam. Da bi spremembo naredili trajno, morate _potrditi_ datoteke. To storite tako, da ustvarite _potrditev_ z ukazom `git commit`. _Potrditev_ predstavlja točko shranjevanja v zgodovini vašega repozitorija. Vnesite naslednje, da ustvarite _potrditev_:

   ```bash
   git commit -m "first commit"
   ```

   To potrdi vse vaše datoteke in doda sporočilo "prva potrditev". Za prihodnja sporočila o potrditvah boste želeli biti bolj opisni, da jasno izrazite, kakšno spremembo ste naredili.

1. **Povežite svoj lokalni Git repozitorij z GitHubom**. Git repozitorij je koristen na vašem računalniku, vendar boste na neki točki želeli imeti varnostno kopijo svojih datotek nekje drugje in povabiti druge ljudi, da delajo z vami na vašem repozitoriju. Eden takšnih odličnih krajev je GitHub. Spomnite se, da smo že ustvarili repozitorij na GitHubu, zato moramo le povezati naš lokalni Git repozitorij z GitHubom. Ukaz `git remote add` bo to storil. Vnesite naslednji ukaz:

   > Opomba: Preden vnesete ukaz, pojdite na stran svojega GitHub repozitorija, da najdete URL repozitorija. Uporabili ga boste v spodnjem ukazu. Zamenjajte ```https://github.com/username/repository_name.git``` z vašim GitHub URL-jem.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   To ustvari _oddaljeno povezavo_, imenovano "origin", ki kaže na GitHub repozitorij, ki ste ga ustvarili prej.

1. **Pošljite lokalne datoteke na GitHub**. Do sedaj ste ustvarili _povezavo_ med lokalnim repozitorijem in GitHub repozitorijem. Pošljimo te datoteke na GitHub z naslednjim ukazom `git push`, kot sledi:

   > Opomba: Vaše ime veje je lahko privzeto drugačno od ```main```.

   ```bash
   git push -u origin main
   ```

   To pošlje vaše potrditve v vaši veji "main" na GitHub.

2. **Dodajte več sprememb**. Če želite nadaljevati z dodajanjem sprememb in njihovim pošiljanjem na GitHub, boste morali uporabiti naslednje tri ukaze:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Nasvet: Morda boste želeli sprejeti datoteko `.gitignore`, da preprečite, da bi se datoteke, ki jih ne želite slediti, prikazale na GitHubu – na primer tista datoteka z opombami, ki jo shranjujete v isti mapi, vendar nima mesta v javnem repozitoriju. Predloge za `.gitignore` datoteke lahko najdete na [.gitignore templates](https://github.com/github/gitignore).

#### Sporočila o potrditvah

Odličen naslov sporočila o potrditvi Git dopolni naslednji stavek:  
Če se uporabi, bo ta potrditev <vaš naslov sporočila tukaj>.

Za naslov uporabite ukazni, sedanjik: "spremeni" namesto "spremenjeno" ali "spreminja".  
Kot pri naslovu, tudi v telesu (neobvezno) uporabite ukazni, sedanjik. Telo naj vključuje motivacijo za spremembo in kontrast s prejšnjim vedenjem. Razlagate `zakaj`, ne `kako`.

✅ Vzemite si nekaj minut za brskanje po GitHubu. Ali lahko najdete res odlično sporočilo o potrditvi? Ali lahko najdete res minimalno? Katere informacije se vam zdijo najpomembnejše in najbolj koristne za sporočanje v sporočilu o potrditvi?

### Naloga: Sodelujte

Glavni razlog za objavo stvari na GitHubu je omogočiti sodelovanje z drugimi razvijalci.

## Delo na projektih z drugimi

> Oglejte si video
>
> [![Osnove Git in GitHub videa](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

V svojem repozitoriju se pomaknite na `Insights > Community`, da vidite, kako se vaš projekt primerja s priporočenimi standardi skupnosti.

   Tukaj je nekaj stvari, ki lahko izboljšajo vaš GitHub repozitorij:
   - **Opis**. Ali ste dodali opis za svoj projekt?
   - **README**. Ali ste dodali README? GitHub ponuja smernice za pisanje [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Smernice za prispevanje**. Ali ima vaš projekt [smernice za prispevanje](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon)?
   - **Kodeks ravnanja**. [Kodeks ravnanja](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/).
   - **Licenca**. Morda najpomembneje, [licenca](https://docs.github.com/articles/adding-a-license-to-a-repository/).

Vsi ti viri bodo koristili pri uvajanju novih članov ekipe. To so običajno stvari, ki jih novi sodelavci pregledajo, preden sploh pogledajo vašo kodo, da ugotovijo, ali je vaš projekt pravo mesto za njihovo porabo časa.

✅ README datoteke, čeprav zahtevajo čas za pripravo, pogosto zanemarjajo zaposleni vzdrževalci. Ali lahko najdete primer posebej opisne README datoteke? Opomba: obstajajo nekateri [orodja za pomoč pri ustvarjanju dobrih README datotek](https://www.makeareadme.com/), ki jih morda želite preizkusiti.

### Naloga: Združite nekaj kode

Dokumenti o prispevanju pomagajo ljudem prispevati k projektu. Pojasnjujejo, kakšne vrste prispevkov iščete in kako poteka proces. Sodelavci bodo morali opraviti vrsto korakov, da bodo lahko prispevali k vašemu repozitoriju na GitHubu:

1. **Forkanje vašega repozitorija**. Verjetno boste želeli, da ljudje _forkajo_ vaš projekt. Forkanje pomeni ustvarjanje replike vašega repozitorija na njihovem GitHub profilu.
1. **Kloniranje**. Od tam bodo klonirali projekt na svoj lokalni računalnik.
1. **Ustvarjanje veje**. Želeli boste, da ustvarijo _vejo_ za svoje delo.
1. **Osredotočite spremembo na eno področje**. Prosite sodelavce, naj se osredotočijo na eno stvar naenkrat – tako so možnosti, da lahko _združite_ njihovo delo, večje. Predstavljajte si, da napišejo popravek napake, dodajo novo funkcijo in posodobijo več testov – kaj, če želite ali lahko implementirate le 2 od 3 ali 1 od 3 sprememb?

✅ Predstavljajte si situacijo, kjer so veje še posebej ključne za pisanje in dostavo dobre kode. Katere primere uporabe si lahko zamislite?

> Opomba: Bodite sprememba, ki jo želite videti v svetu, in ustvarite veje za svoje delo. Vsaka potrditev, ki jo naredite, bo narejena na veji, na kateri ste trenutno "prijavljeni". Uporabite `git status`, da vidite, na kateri veji ste.

Pojdimo skozi potek dela sodelavca. Predpostavimo, da je sodelavec že _forkal_ in _kloniral_ repozitorij, tako da ima Git repozitorij pripravljen za delo na svojem lokalnem računalniku:

1. **Ustvarite vejo**. Uporabite ukaz `git branch`, da ustvarite vejo, ki bo vsebovala spremembe, ki jih nameravajo prispevati:

   ```bash
   git branch [branch-name]
   ```

1. **Preklopite na delovno vejo**. Preklopite na določeno vejo in posodobite delovni imenik z ukazom `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Opravite delo**. Na tej točki želite dodati svoje spremembe. Ne pozabite o tem obvestiti Git z naslednjimi ukazi:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Poskrbite, da boste svoji potrditvi dali dobro ime, tako za vas kot za vzdrževalca repozitorija, ki mu pomagate.

1. **Združite svoje delo z vejo `main`**. Na neki točki ste končali z delom in želite združiti svoje delo z vejo `main`. Veja `main` se je medtem morda spremenila, zato se prepričajte, da jo najprej posodobite na najnovejšo različico z naslednjimi ukazi:

   ```bash
   git switch main
   git pull
   ```

   Na tej točki želite zagotoviti, da se morebitni _konflikti_, situacije, kjer Git ne more zlahka _združiti_ sprememb, zgodijo v vaši delovni veji. Zato zaženite naslednje ukaze:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   To bo prineslo vse spremembe iz `main` v vašo vejo in upajmo, da boste lahko nadaljevali. Če ne, vam bo VS Code pokazal, kje je Git _zmeden_, in preprosto spremenite prizadete datoteke, da določite, katera vsebina je najbolj natančna.

1. **Pošljite svoje delo na GitHub**. Pošiljanje vašega dela na GitHub pomeni dve stvari. Potiskanje vaše veje v vaš repozitorij in nato odpiranje PR (Pull Request).

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Zgornji ukaz ustvari vejo v vašem forked repozitoriju.

1. **Odprite PR**. Nato želite odpreti PR. To storite tako, da se pomaknete do forked repozitorija na GitHubu. Videli boste indikacijo na GitHubu, kjer vas vpraša, ali želite ustvariti nov PR, kliknete to in preusmerjeni boste na vmesnik, kjer lahko spremenite naslov sporočila o potrditvi, mu daste bolj primerno opis. Zdaj bo vzdrževalec repozitorija, ki ste ga forkali, videl ta PR in _držimo pesti_, da ga bo cenil in _združil_ vaš PR. Zdaj ste sodelavec, bravo :)

1. **Počistite**. Velja za dobro prakso, da _počistite_ po uspešnem združevanju PR. Želite počistiti tako lokalno vejo kot vejo, ki ste jo potisnili na GitHub. Najprej jo izbrišimo lokalno z naslednjim ukazom:

   ```bash
   git branch -d [branch-name]
   ```
Pojdi na GitHub stran za razvejan repozitorij in odstrani oddaljeno vejo, ki si jo pravkar potisnil nanjo.

`Pull request` se zdi kot nenavadna fraza, saj v resnici želiš potisniti svoje spremembe v projekt. Vendar mora vzdrževalec (lastnik projekta) ali osrednja ekipa preučiti tvoje spremembe, preden jih združi z "glavno" vejo projekta, zato v bistvu zahtevaš odločitev o spremembi od vzdrževalca.

Pull request je mesto, kjer primerjaš in razpravljaš o razlikah, uvedenih na veji, z ocenami, komentarji, integriranimi testi in še več. Dober pull request sledi približno istim pravilom kot sporočilo ob commitu. Lahko dodaš referenco na težavo v sledilniku težav, na primer, ko tvoje delo odpravi težavo. To se naredi z uporabo `#`, ki mu sledi številka tvoje težave. Na primer `#97`.

🤞Držimo pesti, da vsi pregledi uspejo in da lastnik(i) projekta združijo tvoje spremembe v projekt🤞

Posodobi svojo trenutno lokalno delovno vejo z vsemi novimi commit-i iz ustrezne oddaljene veje na GitHubu:

`git pull`

## Kako prispevati k odprtokodni programski opremi

Najprej poiščimo repozitorij (ali **repo**) na GitHubu, ki te zanima in h kateremu bi rad prispeval spremembo. Njegovo vsebino boš želel kopirati na svoj računalnik.

✅ Dober način za iskanje repozitorijev, prijaznih za začetnike, je [iskanje po oznaki 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopiraj repo lokalno](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.sl.png)

Obstaja več načinov za kopiranje kode. Eden od načinov je "kloniranje" vsebine repozitorija z uporabo HTTPS, SSH ali GitHub CLI (Command Line Interface).

Odpri svoj terminal in kloniraj repozitorij na naslednji način:
`git clone https://github.com/ProjectURL`

Za delo na projektu preklopi v pravo mapo:
`cd ProjectURL`

Celoten projekt lahko odpreš tudi z [Codespaces](https://github.com/features/codespaces), vgrajenim urejevalnikom kode / oblačnim razvojnim okoljem GitHuba, ali z [GitHub Desktop](https://desktop.github.com/).

Nazadnje lahko kodo preneseš v zipani mapi.

### Nekaj zanimivosti o GitHubu

Na GitHubu lahko označiš z zvezdico, spremljaš ali "forkaš" kateri koli javni repozitorij. Svoje označene repozitorije najdeš v spustnem meniju zgoraj desno. To je kot zaznamovanje, vendar za kodo.

Projekti imajo sledilnik težav, večinoma na GitHubu v zavihku "Issues", razen če ni navedeno drugače, kjer ljudje razpravljajo o težavah, povezanih s projektom. Zavihek Pull Requests je mesto, kjer ljudje razpravljajo in ocenjujejo spremembe, ki so v teku.

Projekti imajo lahko tudi razprave v forumih, poštnih seznamih ali klepetalnih kanalih, kot so Slack, Discord ali IRC.

✅ Razglej se po svojem novem GitHub repozitoriju in preizkusi nekaj stvari, kot so urejanje nastavitev, dodajanje informacij v repozitorij in ustvarjanje projekta (na primer Kanban deske). Možnosti je veliko!

---

## 🚀 Izziv

Sodeluj s prijateljem pri delu na kodi drug drugega. Ustvari projekt skupaj, forkaj kodo, ustvari veje in združi spremembe.

## Kviz po predavanju
[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/4)

## Pregled in samostojno učenje

Preberi več o [prispevanju k odprtokodni programski opremi](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git goljufija](https://training.github.com/downloads/github-git-cheat-sheet/).

Vadi, vadi, vadi. GitHub ima odlične učne poti, ki so na voljo prek [skills.github.com](https://skills.github.com):

- [Prvi teden na GitHubu](https://skills.github.com/#first-week-on-github)

Najdeš lahko tudi bolj napredne tečaje.

## Naloga

Dokončaj [tečaj Prvi teden na GitHubu](https://skills.github.com/#first-week-on-github).

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.