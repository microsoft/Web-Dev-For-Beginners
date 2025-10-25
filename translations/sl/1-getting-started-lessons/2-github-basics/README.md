<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-25T00:26:16+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "sl"
}
-->
# Uvod v GitHub

Pozdravljen, bodoči razvijalec! 👋 Si pripravljen, da se pridružiš milijonom programerjev po vsem svetu? Resnično sem navdušen, da ti predstavim GitHub – pomisli nanj kot na družbeno omrežje za programerje, le da namesto deljenja fotografij kosila delimo kodo in skupaj gradimo neverjetne stvari!

Tukaj je nekaj, kar me resnično navdušuje: vsaka aplikacija na tvojem telefonu, vsaka spletna stran, ki jo obiščeš, in večina orodij, ki se jih boš naučil uporabljati, so bila ustvarjena s sodelovanjem ekip razvijalcev na platformah, kot je GitHub. Tista glasbena aplikacija, ki jo obožuješ? Nekdo, kot si ti, je prispeval k njej. Tista igra, ki je ne moreš odložiti? Ja, verjetno je bila ustvarjena s sodelovanjem na GitHubu. In zdaj se boš tudi TI naučil, kako postati del te neverjetne skupnosti!

Vem, da se ti na začetku morda zdi vse skupaj preveč – spomnim se, kako sem strmel v svojo prvo stran na GitHubu in razmišljal: "Kaj za vraga vse to pomeni?" Ampak tukaj je stvar: vsak razvijalec je začel točno tam, kjer si ti zdaj. Do konca te lekcije boš imel svoj lasten GitHub repozitorij (pomisli nanj kot na svojo osebno razstavo projektov v oblaku), vedel boš, kako shraniti svoje delo, ga deliti z drugimi in celo prispevati k projektom, ki jih uporablja na milijone ljudi.

To potovanje bomo opravili skupaj, korak za korakom. Brez hitenja, brez pritiska – samo ti, jaz in nekaj res kul orodij, ki bodo postala tvoji novi najboljši prijatelji!

![Uvod v GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

## Predhodni kviz
[Predhodni kviz](https://ff-quizzes.netlify.app)

## Uvod

Preden se potopimo v resnično vznemirljive stvari, pripravimo tvoj računalnik na nekaj čarovnije z GitHubom! Pomisli na to kot na organiziranje svojih umetniških pripomočkov pred ustvarjanjem mojstrovine – če imaš prava orodja pripravljena, je vse veliko bolj gladko in zabavno.

Osebno te bom vodil skozi vsak korak priprave, obljubim pa, da ni niti približno tako zastrašujoče, kot se morda zdi na prvi pogled. Če ti kaj ne bo takoj jasno, je to povsem normalno! Spomnim se, kako sem prvič postavljal svoje razvojno okolje in se počutil, kot da poskušam brati starodavne hieroglife. Vsak razvijalec je bil točno tam, kjer si ti zdaj, sprašujoč se, ali dela prav. Namig: če se učiš, že delaš prav! 🌟

V tej lekciji bomo obravnavali:

- sledenje delu, ki ga opraviš na svojem računalniku
- delo na projektih z drugimi
- kako prispevati k odprtokodni programski opremi

### Predpogoji

Pripravimo tvoj računalnik na nekaj čarovnije z GitHubom! Brez skrbi – to nastavitev moraš opraviti le enkrat, nato pa boš pripravljen na celotno svojo kodersko pot.

Začnimo z osnovami! Najprej moramo preveriti, ali je Git že nameščen na tvojem računalniku. Git je v bistvu kot super pametni asistent, ki si zapomni vsako spremembo, ki jo narediš v svoji kodi – veliko bolje kot panično pritiskanje Ctrl+S vsakih nekaj sekund (vsi smo že bili tam!).

Preverimo, ali je Git že nameščen, tako da v terminal vpišemo to magično ukazno vrstico:
`git --version`

Če Git še ni nameščen, brez skrbi! Pojdi na [download Git](https://git-scm.com/downloads) in ga prenesi. Ko ga namestiš, moramo Git pravilno predstaviti tebi:

> 💡 **Prva nastavitev**: Ti ukazi povedo Gitu, kdo si. Te informacije bodo priložene vsakemu "commitu", ki ga narediš, zato izberi ime in e-poštni naslov, ki ju boš z veseljem delil javno.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Za preverjanje, ali je Git že konfiguriran, lahko vpišeš:
```bash
git config --list
```

Poleg tega boš potreboval GitHub račun, urejevalnik kode (kot je Visual Studio Code) in odprt terminal (ali ukazno vrstico).

Obišči [github.com](https://github.com/) in ustvari račun, če ga še nimaš, ali se prijavi in izpolni svoj profil.

💡 **Sodobni nasvet**: Razmisli o nastavitvi [SSH ključev](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) ali uporabi [GitHub CLI](https://cli.github.com/) za lažjo avtentikacijo brez gesel.

✅ GitHub ni edini repozitorij za kodo na svetu; obstajajo tudi drugi, vendar je GitHub najbolj poznan.

### Priprava

Potreboval boš mapo s kodnim projektom na svojem lokalnem računalniku (prenosniku ali PC-ju) in javni repozitorij na GitHubu, ki bo služil kot primer, kako prispevati k projektom drugih.

### Varovanje tvoje kode

Pogovorimo se za trenutek o varnosti – brez skrbi, ne bomo te preobremenili s strašljivimi stvarmi! Pomisli na te varnostne prakse kot na zaklepanje avtomobila ali hiše. To so preproste navade, ki postanejo samoumevne in ohranjajo tvoje trdo delo zaščiteno.

Pokazali ti bomo sodobne, varne načine dela z GitHubom že od začetka. Tako boš razvil dobre navade, ki ti bodo koristile skozi celotno kariero kodiranja.

Pri delu z GitHubom je pomembno upoštevati najboljše varnostne prakse:

| Področje varnosti | Najboljša praksa | Zakaj je pomembno |
|-------------------|------------------|-------------------|
| **Avtentikacija** | Uporaba SSH ključev ali osebnih dostopnih žetonov | Gesla so manj varna in se postopoma opuščajo |
| **Dvofaktorska avtentikacija** | Omogoči 2FA na svojem GitHub računu | Doda dodatno plast zaščite računa |
| **Varnost repozitorija** | Nikoli ne objavljaj občutljivih informacij | API ključi in gesla ne smejo biti v javnih repozitorijih |
| **Upravljanje odvisnosti** | Omogoči Dependabot za posodobitve | Ohranja tvoje odvisnosti varne in posodobljene |

> ⚠️ **Pomemben varnostni opomnik**: Nikoli ne objavljaj API ključev, gesel ali drugih občutljivih informacij v nobenem repozitoriju. Uporabi okoljske spremenljivke in `.gitignore` datoteke za zaščito občutljivih podatkov.

**Sodobna nastavitev avtentikacije:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Nasvet profesionalcev**: SSH ključi odpravljajo potrebo po večkratnem vnašanju gesel in so bolj varni kot tradicionalne metode avtentikacije.

---

## Upravljanje tvoje kode kot profesionalec

Zdaj pa postaja resnično vznemirljivo! 🎉 Naučili se bomo, kako slediti in upravljati svojo kodo kot profesionalci, in iskreno, to je ena mojih najljubših stvari za poučevanje, ker je resnično prelomna.

Predstavljaj si tole: pišeš neverjetno zgodbo in želiš slediti vsakemu osnutku, vsaki briljantni spremembi in vsakemu "počakaj, to je genialno!" trenutku na poti. Točno to počne Git za tvojo kodo! Je kot imeti najbolj neverjeten časovni stroj, ki si zapomni VSE – vsak pritisk na tipko, vsako spremembo, vsak "ups, to je vse pokvarilo" trenutek, ki ga lahko takoj razveljaviš.

Priznam – na začetku se ti morda zdi vse skupaj preveč. Ko sem začel, sem si mislil: "Zakaj ne morem preprosto shraniti svojih datotek kot običajno?" Ampak zaupaj mi: ko ti Git klikne (in ti bo!), boš imel tisti trenutek, ko si misliš: "Kako sem KADARKOLI kodiral brez tega?" Je kot odkriti, da lahko letiš, ko si ves čas hodil povsod peš!

Recimo, da imaš lokalno mapo s kodnim projektom in želiš začeti slediti svojemu napredku z uporabo git-a – sistema za nadzor različic. Nekateri primerjajo uporabo git-a s pisanjem ljubezenskega pisma svojemu prihodnjemu jaz-u. Ko boš čez dneve, tedne ali mesece bral svoje "commit" sporočila, se boš lahko spomnil, zakaj si sprejel določeno odločitev, ali pa "razveljavil" spremembo – seveda, če pišeš dobra "commit" sporočila.

### Naloga: Ustvari svoj prvi repozitorij!

> 🎯 **Tvoja misija (in res sem navdušen zate!)**: Skupaj bomo ustvarili tvoj prvi GitHub repozitorij! Ko bomo končali, boš imel svoj mali kotiček na internetu, kjer bo živela tvoja koda, in naredil boš svoj prvi "commit" (to je razvijalski izraz za pametno shranjevanje svojega dela).
>
> To je resnično poseben trenutek – uradno se boš pridružil globalni skupnosti razvijalcev! Še vedno se spomnim vznemirjenja ob ustvarjanju svojega prvega repozitorija in misli: "Vau, res to počnem!"

Skupaj bomo prehodili to avanturo, korak za korakom. Vzemi si čas za vsak del – ni nagrade za hitenje, obljubim pa, da bo vsak korak imel smisel. Zapomni si, da je bil vsak koderski zvezdnik, ki ga občuduješ, nekoč točno tam, kjer si ti zdaj, pripravljen ustvariti svoj prvi repozitorij. Kako kul je to?

> Oglej si video
> 
> [![Osnove Git in GitHub videa](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Skupaj to opravimo:**

1. **Ustvari svoj repozitorij na GitHubu**. Pojdi na GitHub.com in poišči tisti svetlo zeleni gumb **New** (ali znak **+** v zgornjem desnem kotu). Klikni nanj in izberi **New repository**.

   Tukaj je, kaj storiti:
   1. Daj svojemu repozitoriju ime – naj bo nekaj, kar ti veliko pomeni!
   1. Dodaj opis, če želiš (to pomaga drugim razumeti, za kaj gre pri tvojem projektu)
   1. Odloči se, ali želiš, da je javno (vsi ga lahko vidijo) ali zasebno (samo zate)
   1. Priporočam, da označiš polje za dodajanje README datoteke – to je kot naslovna stran tvojega projekta
   1. Klikni **Create repository** in praznuj – pravkar si ustvaril svoj prvi repozitorij! 🎉

2. **Pomakni se do svoje projektne mape**. Zdaj pa odprimo tvoj terminal (brez skrbi, ni tako strašljivo, kot izgleda!). Moramo povedati tvojemu računalniku, kje so tvoje projektne datoteke. Vpiši ta ukaz:

   ```bash
   cd [name of your folder]
   ```

   **Kaj tukaj počnemo:**
   - V bistvu rečemo "Hej računalnik, pelji me do moje projektne mape"
   - To je kot odpiranje določene mape na tvoji namizni površini, le da to počnemo z besedilnimi ukazi
   - Zamenjaj `[ime tvoje mape]` z dejanskim imenom tvoje projektne mape

3. **Spremeni svojo mapo v Git repozitorij**. Tukaj se zgodi čarovnija! Vpiši:

   ```bash
   git init
   ```

   **Kaj se je pravkar zgodilo (zelo kul stvari!):**
   - Git je pravkar ustvaril skrito `.git` mapo v tvojem projektu – ne boš je videl, ampak je tam!
   - Tvoja običajna mapa je zdaj "repozitorij", ki lahko sledi vsaki spremembi, ki jo narediš
   - Pomisli na to kot na to, da svoji mapi daš supermoči, da si zapomni vse

4. **Preveri, kaj se dogaja**. Poglejmo, kaj Git misli o tvojem projektu trenutno:

   ```bash
   git status
   ```

   **Razumevanje, kaj ti Git sporoča:**
   
   Morda boš videl nekaj, kar izgleda takole:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Ne paničari! Tukaj je, kaj to pomeni:**
   - Datoteke v **rdeči** so datoteke, ki imajo spremembe, vendar še niso pripravljene za shranjevanje
   - Datoteke v **zeleni** (ko jih vidiš) so pripravljene za shranjevanje
   - Git je koristen, saj ti natančno pove, kaj lahko narediš naprej

   > 💡 **Nasvet profesionalcev**: Ukaz `git status` je tvoj najboljši prijatelj! Uporabi ga kadarkoli si zmeden glede tega, kaj se dogaja. To je kot vprašati Git "Hej, kakšna je situacija trenutno?"

5. **Pripravi svoje datoteke za shranjevanje** (to se imenuje "staging"):

   ```bash
   git add .
   ```

   **Kaj smo pravkar naredili:**
   - Povedali smo Gitu "Hej, želim vključiti VSE svoje datoteke v naslednje shranjevanje"
   - `.` je kot reči "vse v tej mapi"
   - Zdaj so tvoje datoteke "staged" in pripravljene na naslednji korak

   **Želiš biti bolj selektiven?** Lahko dodaš samo določene datoteke:

   ```bash
   git add [file or folder name]
   ```

   **Zakaj bi to želel storiti?**
   - Včasih želiš shraniti povezane spremembe skupaj
   - Pomaga ti organizirati svoje delo v logične sklope
   - Olajša razumevanje, kaj se je spremenilo in kdaj

   **Si premislil?** Brez skrbi! Datoteke lahko odstraniš iz "pripravljenih za shranjevanje" tako:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Brez skrbi – to ne izbriše tvojega dela, samo odstrani datoteke iz "pripravljenih za shranjevanje".

6. **Trajno shrani svoje delo** (naredi svoj prvi commit!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Čestitke! Pravkar si naredil svoj prvi commit!**
   
   **Kaj se je pravkar zgodilo:**
   - Git je naredil "posnetek" vseh tvojih pripravljenih datotek v tem trenutku
   - Tvoje sporočilo "prvi commit" pojasnjuje, za kaj gre pri tej točki shranjevanja
   - Git je temu posnetku dal edinstven ID, da ga lahko vedno najdeš kasneje
   - Uradno si začel slediti zgodovini svojega projekta!

   > 💡 **Prihodnja commit sporočila**: Za svoje naslednje commit-e bodi bolj opisni! Namesto "posodobljene stvari" poskusi "Dodaj kontaktni obrazec na domačo stran" ali "Popravi napako v navigacijskem meniju". Tvoj prihodnji jaz ti bo hvaležen!

7. **Poveži svoj lokalni projekt z GitHubom**. Trenutno tvoj projekt obstaja samo na tvojem računalniku. Povežimo ga z GitHub repozitorijem, da ga lahko deliš s svetom!

   Najprej pojdi na stran svojega GitHub repozitorija in kopiraj URL. Nato se vrni sem in vpiši:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Zamenjaj ta URL z dejanskim URL-jem svojega repozitorija!)

   **Kaj smo pravkar naredili:**
- Ustvarili smo povezavo med vašim lokalnim projektom in vašim GitHub repozitorijem.  
- "Origin" je le vzdevek za vaš GitHub repozitorij – podobno kot dodajanje stika v vaš telefon.  
- Zdaj vaš lokalni Git ve, kam poslati vašo kodo, ko ste pripravljeni, da jo delite.  

💡 **Lažji način**: Če imate nameščen GitHub CLI, lahko to storite z enim ukazom:  
   ```bash
   gh repo create my-repo --public --push --source=.
   ```
  
8. **Pošljite svojo kodo na GitHub** (veliki trenutek!):  

   ```bash
   git push -u origin main
   ```
  
**🚀 To je to! Nalagate svojo kodo na GitHub!**  

**Kaj se dogaja:**  
- Vaši commit-i potujejo z vašega računalnika na GitHub.  
- Zastavica `-u` vzpostavi trajno povezavo, da bo prihodnje pošiljanje lažje.  
- "main" je ime vaše primarne veje (kot glavni imenik).  
- Po tem lahko za prihodnje nalaganje preprosto vnesete `git push`!  

💡 **Hitro opozorilo**: Če se vaša veja imenuje drugače (npr. "master"), uporabite to ime. Preverite lahko z ukazom `git branch --show-current`.  

9. **Vaš novi dnevni ritem kodiranja** (tu postane zasvojljivo!):  

Od zdaj naprej, kadar koli naredite spremembe v svojem projektu, sledite temu preprostemu trikotnemu plesu:  

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```
  
**To postane vaš srčni utrip kodiranja:**  
- Naredite nekaj odličnih sprememb v svoji kodi ✨  
- Dodajte jih z `git add` ("Hej Git, opazi te spremembe!")  
- Shranite jih z `git commit` in dodajte opisno sporočilo (bodoči vi vam bo hvaležen!)  
- Delite jih s svetom z uporabo `git push` 🚀  
- Ponovite – resno, to postane tako naravno kot dihanje!  

Obožujem ta delovni proces, ker je kot imeti več točk shranjevanja v videoigri. Ste naredili spremembo, ki vam je všeč? Commitajte jo! Želite poskusiti nekaj tveganega? Ni problema – vedno se lahko vrnete na zadnji commit, če gre kaj narobe!  

> 💡 **Nasvet**: Morda boste želeli uporabiti datoteko `.gitignore`, da preprečite, da bi se datoteke, ki jih ne želite slediti, pojavile na GitHubu – na primer tisti zvezek z zapiski, ki ga hranite v isti mapi, vendar nima mesta v javnem repozitoriju. Predloge za `.gitignore` datoteke najdete na [.gitignore templates](https://github.com/github/gitignore) ali pa jo ustvarite z [gitignore.io](https://www.toptal.com/developers/gitignore).  

#### Sodobni Git delovni procesi  

Razmislite o uporabi teh sodobnih praks:  

- **Konvencionalni commit-i**: Uporabite standardiziran format sporočil commit-ov, kot so `feat:`, `fix:`, `docs:` itd. Več o tem na [conventionalcommits.org](https://www.conventionalcommits.org/)  
- **Atomski commit-i**: Naj vsak commit predstavlja eno logično spremembo.  
- **Pogosti commit-i**: Pogosto commitajte z opisnimi sporočili, namesto velikih, redkih commit-ov.  

#### Sporočila commit-ov  

Odličen naslov sporočila commit-a dopolni naslednji stavek:  
Če se uporabi, bo ta commit <vaš naslov tukaj>.  

Za naslov uporabite imperativni, sedanjik: "spremeni" in ne "spremenil" ali "spreminja".  
Tako kot v naslovu, tudi v telesu (neobvezno) uporabite imperativni, sedanjik. Telo naj vključuje motivacijo za spremembo in naj jo primerja s prejšnjim vedenjem. Pojasnjujete `zakaj`, ne `kako`.  

✅ Vzemite si nekaj minut in pobrskajte po GitHubu. Ali lahko najdete res odlično sporočilo commit-a? Ali lahko najdete res minimalno? Katere informacije se vam zdijo najpomembnejše in najbolj koristne za posredovanje v sporočilu commit-a?  

## Sodelovanje z drugimi (najbolj zabaven del!)  

Pripravite se, ker ZDAJ postane GitHub resnično magičen! 🪄 Obvladali ste upravljanje svoje kode, zdaj pa se podajamo v moj najljubši del – sodelovanje z neverjetnimi ljudmi z vsega sveta.  

Predstavljajte si to: jutri se zbudite in vidite, da je nekdo v Tokiu izboljšal vašo kodo, medtem ko ste spali. Nato nekdo v Berlinu popravi napako, na kateri ste obtičali. Do popoldneva pa razvijalec v São Paulu doda funkcijo, na katero sploh niste pomislili. To ni znanstvena fantastika – to je le običajen torek v vesolju GitHub!  

Kar me resnično navdušuje, je, da so veščine sodelovanja, ki se jih boste naučili, NATANKO isti delovni procesi, ki jih ekipe pri Googlu, Microsoftu in vaših najljubših startupih uporabljajo vsak dan. Ne učite se le kul orodja – učite se skrivnega jezika, ki omogoča, da celoten svet programske opreme deluje skupaj.  

Resno, ko boste doživeli vznemirjenje, ko bo nekdo združil vaš prvi pull request, boste razumeli, zakaj so razvijalci tako strastni glede odprtokodne programske opreme. To je kot biti del največjega, najbolj ustvarjalnega skupinskega projekta na svetu!  

> Oglejte si video  
>  
> [![Osnove Git-a in GitHub-a video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)  

Glavni razlog za objavo stvari na GitHubu je omogočiti sodelovanje z drugimi razvijalci.  

V svojem repozitoriju pojdite na `Insights > Community`, da vidite, kako se vaš projekt primerja s priporočenimi standardi skupnosti.  

Želite, da vaš repozitorij izgleda profesionalno in privlačno? Obiščite svoj repozitorij in kliknite na `Insights > Community`. Ta kul funkcija vam pokaže, kako se vaš projekt primerja s tem, kar GitHub skupnost smatra za "dobre prakse repozitorija".  

> 🎯 **Naj vaš projekt zasije**: Dobro organiziran repozitorij z dobro dokumentacijo je kot imeti čisto, privlačno trgovino. Pove ljudem, da vam je mar za vaše delo, in jih spodbuja, da prispevajo!  

**Kaj naredi repozitorij odličen:**  

| Kaj dodati | Zakaj je pomembno | Kaj naredi za vas |  
|------------|-------------------|-------------------|  
| **Opis** | Prvi vtis je pomemben! | Ljudje takoj vedo, kaj vaš projekt počne |  
| **README** | Prva stran vašega projekta | Kot prijazen vodič za nove obiskovalce |  
| **Smernice za prispevanje** | Pokaže, da sprejemate pomoč | Ljudje točno vedo, kako vam lahko pomagajo |  
| **Kodeks ravnanja** | Ustvari prijazen prostor | Vsi se počutijo dobrodošle za sodelovanje |  
| **Licenca** | Pravna jasnost | Drugi vedo, kako lahko uporabljajo vašo kodo |  
| **Varnostna politika** | Pokaže, da ste odgovorni | Dokazuje profesionalne prakse |  

> 💡 **Profesionalni nasvet**: GitHub ponuja predloge za vse te datoteke. Ko ustvarjate nov repozitorij, označite polja za samodejno generiranje teh datotek.  

**Sodobne funkcije GitHub-a za raziskovanje:**  

🤖 **Avtomatizacija & CI/CD:**  
- **GitHub Actions** za avtomatizirano testiranje in uvajanje  
- **Dependabot** za samodejne posodobitve odvisnosti  

💬 **Skupnost & upravljanje projektov:**  
- **GitHub Discussions** za pogovore skupnosti, ki presegajo težave  
- **GitHub Projects** za upravljanje projektov v slogu kanban  
- **Pravila za zaščito vej** za uveljavljanje standardov kakovosti kode  

Vsi ti viri bodo koristni pri uvajanju novih članov ekipe. In to so običajno stvari, ki jih novi sodelavci pregledajo, preden sploh pogledajo vašo kodo, da ugotovijo, ali je vaš projekt pravo mesto za njihovo sodelovanje.  

✅ README datoteke, čeprav zahtevajo čas za pripravo, pogosto zanemarijo zaposleni vzdrževalci. Ali lahko najdete primer posebej opisne? Opomba: obstajajo nekateri [orodja za pomoč pri ustvarjanju dobrih README-jev](https://www.makeareadme.com/), ki jih morda želite preizkusiti.  

### Naloga: Združite nekaj kode  

Dokumenti za prispevanje pomagajo ljudem prispevati k projektu. Pojasnjujejo, kakšne vrste prispevkov iščete in kako poteka proces. Sodelujoči bodo morali opraviti vrsto korakov, da bodo lahko prispevali k vašemu repozitoriju na GitHubu:  

1. **Forkanje vašega repozitorija** Verjetno boste želeli, da ljudje _forkajo_ vaš projekt. Forkanje pomeni ustvarjanje replike vašega repozitorija na njihovem GitHub profilu.  
1. **Kloniranje**. Od tam bodo projekt klonirali na svoj lokalni računalnik.  
1. **Ustvarjanje veje**. Želeli boste, da ustvarijo _vejo_ za svoje delo.  
1. **Osredotočite spremembo na eno področje**. Prosite sodelujoče, naj se osredotočijo na eno stvar naenkrat – tako bodo možnosti, da boste lahko _združili_ njihovo delo, večje. Predstavljajte si, da napišejo popravek napake, dodajo novo funkcijo in posodobijo več testov – kaj pa, če želite ali lahko implementirate le 2 od 3 ali 1 od 3 sprememb?  

✅ Predstavljajte si situacijo, kjer so veje še posebej pomembne za pisanje in dostavo dobre kode. Na katere primere uporabe se lahko spomnite?  

> Opomba: Bodite sprememba, ki jo želite videti v svetu, in ustvarite veje tudi za svoje delo. Vsak commit, ki ga naredite, bo narejen na veji, na kateri ste trenutno "prijavljeni". Uporabite `git status`, da vidite, na kateri veji ste.  

Pojdimo skozi delovni proces sodelujočega. Predpostavimo, da je sodelujoči že _forkal_ in _kloniral_ repozitorij, tako da ima Git repozitorij pripravljen za delo na svojem lokalnem računalniku:  

1. **Ustvarite vejo**. Uporabite ukaz `git branch`, da ustvarite vejo, ki bo vsebovala spremembe, ki jih nameravate prispevati:  

   ```bash
   git branch [branch-name]
   ```
  
   > 💡 **Sodobni pristop**: Vejo lahko ustvarite in se nanjo preklopite z enim ukazom:  
   ```bash
   git switch -c [branch-name]
   ```
  
1. **Preklopite na delovno vejo**. Preklopite na določeno vejo in posodobite delovni imenik z ukazom `git switch`:  

   ```bash
   git switch [branch-name]
   ```
  
   > 💡 **Sodobna opomba**: `git switch` je sodobna zamenjava za `git checkout` pri menjavi vej. Je bolj jasen in varnejši za začetnike.  

1. **Opravite delo**. Na tej točki želite dodati svoje spremembe. Ne pozabite o tem obvestiti Git z naslednjimi ukazi:  

   ```bash
   git add .
   git commit -m "my changes"
   ```
  
   > ⚠️ **Kakovost sporočila commit-a**: Poskrbite, da bo vaše sporočilo commit-a dobro poimenovano, tako za vas kot za vzdrževalca repozitorija, ki mu pomagate. Bodite specifični glede tega, kaj ste spremenili!  

1. **Združite svoje delo z vejo `main`**. Ko končate z delom, želite združiti svoje delo z delom veje `main`. Medtem se je veja `main` morda spremenila, zato se prepričajte, da jo najprej posodobite na najnovejšo različico z naslednjimi ukazi:  

   ```bash
   git switch main
   git pull
   ```
  
   Na tej točki se želite prepričati, da se morebitni _konflikti_, situacije, ko Git ne more zlahka _združiti_ sprememb, zgodijo v vaši delovni veji. Zato zaženite naslednje ukaze:  

   ```bash
   git switch [branch_name]
   git merge main
   ```
  
   Ukaz `git merge main` bo združil vse spremembe iz veje `main` v vašo vejo. Upajmo, da lahko preprosto nadaljujete. Če ne, vam bo VS Code pokazal, kje je Git _zmeden_, in preprosto spremenite prizadete datoteke, da določite, katera vsebina je najbolj natančna.  

   💡 **Sodobna alternativa**: Razmislite o uporabi `git rebase` za čistejšo zgodovino:  
   ```bash
   git rebase main
   ```
  
   To bo vaše commit-e ponovno predvajalo na vrhu najnovejše veje `main`, kar ustvari linearno zgodovino.  

1. **Pošljite svoje delo na GitHub**. Pošiljanje vašega dela na GitHub pomeni dve stvari. Potisnite svojo vejo v svoj repozitorij in nato odprite PR, Pull Request.  

   ```bash
   git push --set-upstream origin [branch-name]
   ```
  
   Zgornji ukaz ustvari vejo v vašem fork-anem repozitoriju.  

1. **Odprite PR**. Nato želite odpreti PR. To storite tako, da se pomaknete do fork-anega repozitorija na GitHubu. Na GitHubu boste videli oznako, ki vas vpraša, ali želite ustvariti nov PR, kliknite nanjo in preusmerjeni boste na vmesnik, kjer lahko spremenite naslov sporočila commit-a, dodate ustreznejši opis. Zdaj bo vzdrževalec repozitorija, ki ste ga forkali, videl ta PR in _držimo pesti_, da bo cenil in _združil_ vaš PR. Zdaj ste sodelujoči, juhu :)  

   💡 **Sodobni nasvet**: PR-je lahko ustvarite tudi z uporabo GitHub CLI:  
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```
  
   🔧 **Najboljše prakse za PR-je**:  
   - Povežite se s povezanimi težavami z uporabo ključnih besed, kot je "Fixes #123".  
   - Dodajte posnetke zaslona za spremembe uporabniškega vmesnika.  
   - Zahtevajte specifične pregledovalce.  
   - Uporabite osnutke PR-jev za delo v teku.  
   - Prepričajte se, da so vsi CI testi uspešno opravljeni, preden zahtevate pregled.  

1. **Pospravljanje**. Velja za dobro prakso, da _pospravite_ po uspešnem združevanju PR-ja. Želite pospraviti tako svojo lokalno vejo kot vejo, ki ste jo potisnili na GitHub. Najprej jo izbrišite lokalno z naslednjim ukazom:  

   ```bash
   git branch -d [branch-name]
   ```
  
   Nato se prepričajte, da ste na strani GitHub za fork-an repozitorij in odstranite oddaljeno vejo, ki ste jo pravkar potisnili vanj.  

`Pull request` se morda zdi smešen izraz, ker v resnici želite potisniti svoje spremembe v projekt. Toda vzdrževalec (lastnik projekta) ali osrednja ekipa mora razmisliti o vaših spremembah, preden jih združi z "glavno" vejo projekta, zato v resnici zahtevate odločitev o spremembi od vzdrževalca.  

Pull request je mesto za primerjavo in razpravo o razlikah, uvedenih na veji, z ocenami, komentarji, integriranimi testi in še več. Dober pull request sledi približno istim pravilom kot sporočilo commit-a. Lahko dodate referenco na težavo v sledilniku težav, ko vaše delo na primer odpravi težavo. To storite z uporabo `#`, ki mu sledi številka vaše težave. Na primer `#97`.
🤞Držimo pesti, da bodo vsi pregledi uspešni in da bodo lastniki projekta združili vaše spremembe v projekt🤞

Posodobite svojo trenutno lokalno delovno vejo z vsemi novimi potrditvami iz ustrezne oddaljene veje na GitHubu:

`git pull`

## Prispevanje k odprti kodi (Vaša priložnost, da naredite vtis!)

Ste pripravljeni na nekaj, kar vam bo popolnoma vzelo sapo? 🤯 Pogovorimo se o prispevanju k projektom odprte kode – in že ob misli na to, da to delim z vami, dobivam kurjo polt!

To je vaša priložnost, da postanete del nečesa resnično izjemnega. Predstavljajte si, da izboljšate orodja, ki jih vsak dan uporabljajo milijoni razvijalcev, ali popravite napako v aplikaciji, ki jo obožujejo vaši prijatelji. To ni le sanje – to je bistvo prispevanja k odprti kodi!

Tukaj je tisto, kar me vedno znova navduši: vsako orodje, s katerim se učite – vaš urejevalnik kode, ogrodja, ki jih bomo raziskovali, celo brskalnik, v katerem to berete – se je začelo z nekom, ki je bil točno tak kot vi, ko je naredil svoj prvi prispevek. Tisti briljantni razvijalec, ki je ustvaril vaš najljubši VS Code razširitev? Tudi on je bil nekoč začetnik, ki je z drhtečimi rokami kliknil "create pull request", tako kot boste vi kmalu.

In tukaj je najlepši del: skupnost odprte kode je kot največji objem na internetu. Večina projektov aktivno išče novince in ima težave označene kot "good first issue" posebej za ljudi, kot ste vi! Vzdrževalci so resnično navdušeni, ko vidijo nove prispevke, ker se spomnijo svojih prvih korakov.

Tukaj se ne učite le kodiranja – pripravljate se, da se pridružite globalni družini ustvarjalcev, ki se vsak dan zbudijo z mislijo "Kako lahko naredimo digitalni svet malo boljši?" Dobrodošli v klubu! 🌟

Najprej poiščimo repozitorij (ali **repo**) na GitHubu, ki vas zanima in h kateremu bi radi prispevali spremembo. Njegovo vsebino boste želeli kopirati na svoj računalnik.

✅ Dober način za iskanje 'prijaznih za začetnike' repozitorijev je [iskanje po oznaki 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopiraj repo lokalno](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.sl.png)

Obstaja več načinov za kopiranje kode. Eden od načinov je "kloniranje" vsebine repozitorija, z uporabo HTTPS, SSH ali GitHub CLI (Command Line Interface).

Odprite terminal in klonirajte repozitorij takole:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

Za delo na projektu preklopite v pravo mapo:
`cd ProjectURL`

Celoten projekt lahko odprete tudi z:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - GitHubovo okolje za razvoj v oblaku z VS Code v brskalniku
- **[GitHub Desktop](https://desktop.github.com/)** - GUI aplikacija za operacije z Gitom  
- **[GitHub.dev](https://github.dev)** - Pritisnite tipko `.` na katerem koli GitHub repozitoriju, da odprete VS Code v brskalniku
- **VS Code** z razširitvijo GitHub Pull Requests

Nazadnje lahko kodo prenesete v stisnjeni mapi.

### Nekaj zanimivosti o GitHubu

Na GitHubu lahko označite z zvezdico, spremljate in/ali "forkate" kateri koli javni repozitorij. Svoje označene repozitorije najdete v spustnem meniju zgoraj desno. To je kot shranjevanje zaznamkov, vendar za kodo.

Projekti imajo sledilnik težav, večinoma na GitHubu v zavihku "Issues", razen če ni navedeno drugače, kjer ljudje razpravljajo o težavah, povezanih s projektom. Zavihek Pull Requests je mesto, kjer ljudje razpravljajo in pregledujejo spremembe, ki so v teku.

Projekti imajo lahko tudi razprave na forumih, poštnih seznamih ali klepetalnicah, kot so Slack, Discord ali IRC.

🔧 **Sodobne funkcije GitHuba**:
- **GitHub Discussions** - Vgrajen forum za pogovore skupnosti
- **GitHub Sponsors** - Finančna podpora vzdrževalcem  
- **Zavihek Security** - Poročila o ranljivostih in varnostna obvestila
- **Zavihek Actions** - Pregled avtomatiziranih delovnih tokov in CI/CD procesov
- **Zavihek Insights** - Analitika o prispevkih, potrditvah in zdravju projekta
- **Zavihek Projects** - GitHubova vgrajena orodja za upravljanje projektov

✅ Oglejte si svoj novi GitHub repozitorij in preizkusite nekaj stvari, kot so urejanje nastavitev, dodajanje informacij v repozitorij, ustvarjanje projekta (na primer Kanban tabla) in nastavitev GitHub Actions za avtomatizacijo. Možnosti je veliko!

---

## 🚀 Izziv 

No, čas je, da preizkusite svoje nove GitHub supermoči! 🚀 Tukaj je izziv, ki bo vse skupaj povezal na najbolj zadovoljiv način:

Povabite prijatelja (ali družinskega člana, ki vas vedno sprašuje, kaj počnete z vsem tem "računalniškim delom") in se podajte na skupno kodirno pustolovščino! Tukaj se zgodi prava magija – ustvarite projekt, naj ga "forka", ustvarite nekaj vej in združite spremembe kot profesionalci, ki postajate.

Ne bom lagal – verjetno se boste na neki točki smejali (še posebej, ko bosta oba poskušala spremeniti isto vrstico), morda se boste praskali po glavi v zmedi, a zagotovo boste imeli tiste neverjetne trenutke "aha!", zaradi katerih je vse učenje vredno truda. Poleg tega je nekaj posebnega v tem, da delite prvi uspešen merge z nekom drugim – to je kot majhno praznovanje, kako daleč ste že prišli!

Nimate še kodirnega prijatelja? Brez skrbi! Skupnost na GitHubu je polna izjemno prijaznih ljudi, ki se spomnijo, kako je bilo biti nov. Poiščite repozitorije z oznako "good first issue" – v bistvu pravijo "Hej začetniki, pridite se učit z nami!" Kako super je to?

## Kviz po predavanju
[Kviz po predavanju](https://ff-quizzes.netlify.app/web/en/)

## Pregled & Nadaljnje učenje

Uau! 🎉 Poglejte se – pravkar ste osvojili osnove GitHuba kot pravi prvak! Če se vam zdi, da je vaš um trenutno malo poln, je to povsem normalno in pravzaprav dober znak. Pravkar ste se naučili orodij, za katera je meni osebno trajalo tedne, da sem se jih udobno naučil uporabljati.

Git in GitHub sta neverjetno zmogljiva (resnično zmogljiva), in vsak razvijalec, ki ga poznam – vključno s tistimi, ki se zdaj zdijo kot čarovniki – je moral vaditi in se malo spotikati, preden je vse skupaj kliknilo. Dejstvo, da ste uspešno zaključili to lekcijo, pomeni, da ste že na poti k obvladovanju nekaterih najpomembnejših orodij v razvijalčevem orodjarstvu.

Tukaj je nekaj resnično fantastičnih virov, ki vam bodo pomagali vaditi in postati še boljši:

- [Vodnik za prispevanje k odprti kodi](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Vaš načrt za ustvarjanje sprememb
- [Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/) – Imejte to pri roki za hiter pregled!

In ne pozabite: praksa prinaša napredek, ne popolnosti! Bolj kot uporabljate Git in GitHub, bolj naravno bo postalo. GitHub je ustvaril nekaj neverjetnih interaktivnih tečajev, ki vam omogočajo vadbo v varnem okolju:

- [Uvod v GitHub](https://github.com/skills/introduction-to-github)
- [Komuniciranje z uporabo Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Upravljanje konfliktov združevanja](https://github.com/skills/resolve-merge-conflicts)

**Se počutite pustolovsko? Oglejte si ta sodobna orodja:**
- [Dokumentacija GitHub CLI](https://cli.github.com/manual/) – Za trenutke, ko se želite počutiti kot čarovnik ukazne vrstice
- [Dokumentacija GitHub Codespaces](https://docs.github.com/en/codespaces) – Kodirajte v oblaku!
- [Dokumentacija GitHub Actions](https://docs.github.com/en/actions) – Avtomatizirajte vse
- [Najboljše prakse za Git](https://www.atlassian.com/git/tutorials/comparing-workflows) – Izboljšajte svoje delovne procese 

## Izziv z GitHub Copilot Agent 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Ustvarite skupni projekt spletnega razvoja, ki prikazuje celoten GitHub delovni tok, ki ste se ga naučili v tej lekciji. Ta izziv vam bo pomagal vaditi ustvarjanje repozitorija, funkcije sodelovanja in sodobne Git delovne tokove v resničnem scenariju.

**Navodilo:** Ustvarite nov javni GitHub repozitorij za preprost projekt "Viri za spletni razvoj". Repozitorij naj vključuje dobro strukturirano datoteko README.md, ki navaja uporabna orodja in vire za spletni razvoj, organizirane po kategorijah (HTML, CSS, JavaScript itd.). Nastavite repozitorij z ustreznimi standardi skupnosti, vključno z licenco, smernicami za prispevanje in kodeksom ravnanja. Ustvarite vsaj dve funkcijski veji: eno za dodajanje CSS virov in drugo za JavaScript vire. Naredite potrditve v vsaki veji z opisnimi sporočili o potrditvah, nato ustvarite pull requests za združitev sprememb nazaj v glavno vejo. Omogočite funkcije GitHuba, kot so Issues, Discussions, in nastavite osnovni delovni tok GitHub Actions za avtomatizirane preglede.

## Naloga 

Vaša misija, če jo sprejmete: Dokončajte tečaj [Uvod v GitHub](https://github.com/skills/introduction-to-github) na GitHub Skills. Ta interaktivni tečaj vam bo omogočil vadbo vsega, kar ste se naučili, v varnem, vodenem okolju. Poleg tega boste ob zaključku prejeli kul značko! 🏅

**Se počutite pripravljeni na več izzivov?**
- Nastavite SSH avtentikacijo za svoj GitHub račun (brez več gesel!)
- Poskusite uporabljati GitHub CLI za svoje dnevne operacije z Gitom
- Ustvarite repozitorij z delovnim tokom GitHub Actions
- Raziščite GitHub Codespaces tako, da odprete ta repozitorij v urejevalniku, ki temelji na oblaku

Ne pozabite: vsak strokovnjak je bil nekoč začetnik. Zmorete! 💪

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.