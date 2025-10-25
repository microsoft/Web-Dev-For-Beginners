<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-24T23:55:51+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "hr"
}
-->
# Uvod u GitHub

Pozdrav, budući programeru! 👋 Spreman si pridružiti se milijunima kodera diljem svijeta? Iskreno sam uzbuđen što ti mogu predstaviti GitHub – zamisli ga kao društvenu mrežu za programere, samo što umjesto dijeljenja fotografija ručka dijelimo kod i zajedno gradimo nevjerojatne stvari!

Ono što me apsolutno oduševljava: svaka aplikacija na tvom mobitelu, svaka web stranica koju posjetiš i većina alata koje ćeš naučiti koristiti izgrađeni su od strane timova programera koji surađuju na platformama poput GitHuba. Ona glazbena aplikacija koju obožavaš? Netko poput tebe je pridonio njenom razvoju. Ona igra koju ne možeš prestati igrati? Da, vjerojatno je izgrađena uz suradnju na GitHubu. A sada ćeš TI naučiti kako postati dio te nevjerojatne zajednice!

Znam da ti se ovo na početku može činiti previše – iskreno, sjećam se kad sam prvi put gledao GitHub stranicu i mislio "Što ovo sve znači?" Ali evo u čemu je stvar: svaki programer je započeo točno tamo gdje si ti sada. Do kraja ove lekcije imat ćeš vlastiti GitHub repozitorij (zamisli ga kao svoj osobni projekt u oblaku), znat ćeš kako spremiti svoj rad, podijeliti ga s drugima, pa čak i pridonijeti projektima koje koriste milijuni ljudi.

Krenut ćemo na ovo putovanje zajedno, korak po korak. Bez žurbe, bez pritiska – samo ti, ja i neki stvarno cool alati koji će postati tvoji novi najbolji prijatelji!

![Uvod u GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.hr.png)
> Sketchnote autorice [Tomomi Imura](https://twitter.com/girlie_mac)

## Kviz prije predavanja
[Pre-lecture quiz](https://ff-quizzes.netlify.app)

## Uvod

Prije nego što zaronimo u stvarno uzbudljive stvari, pripremimo tvoje računalo za malo GitHub magije! Zamisli ovo kao organiziranje svojih umjetničkih potrepština prije nego što stvoriš remek-djelo – imati prave alate spremne čini sve puno lakšim i zabavnijim.

Provest ću te kroz svaki korak postavljanja osobno i obećavam da nije ni približno zastrašujuće kako se možda čini na prvi pogled. Ako nešto odmah ne shvatiš, to je potpuno normalno! Sjećam se kad sam prvi put postavljao svoje razvojno okruženje i osjećao se kao da pokušavam čitati drevne hijeroglife. Svaki programer je bio točno tamo gdje si ti sada, pitajući se radi li sve ispravno. Spoiler: ako si ovdje i učiš, već radiš ispravno! 🌟

U ovoj lekciji pokrit ćemo:

- praćenje rada na tvom računalu
- rad na projektima s drugima
- kako pridonijeti softveru otvorenog koda

### Preduvjeti

Pripremimo tvoje računalo za malo GitHub magije! Ne brini – ovo postavljanje je nešto što trebaš učiniti samo jednom, a onda si spreman za cijelo svoje kodersko putovanje.

U redu, krenimo s osnovama! Prvo, trebamo provjeriti je li Git već instaliran na tvom računalu. Git je poput super-pametnog asistenta koji pamti svaku promjenu koju napraviš u svom kodu – puno bolje od paničnog pritiskanja Ctrl+S svake dvije sekunde (svi smo to radili!).

Provjerimo je li Git već instaliran tako da upišemo ovu čarobnu naredbu u terminal:
`git --version`

Ako Git još nije instaliran, nema problema! Samo posjeti [download Git](https://git-scm.com/downloads) i preuzmi ga. Kad ga instaliraš, trebamo Gitu predstaviti tebe kako treba:

> 💡 **Prvo postavljanje**: Ove naredbe govore Gitu tko si ti. Ove informacije bit će pridružene svakoj promjeni koju napraviš, pa odaberi ime i e-mail s kojima se osjećaš ugodno dijeliti javno.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Za provjeru je li Git već konfiguriran možeš upisati:
```bash
git config --list
```

Trebat će ti i GitHub račun, uređivač koda (poput Visual Studio Code-a), i trebat ćeš otvoriti svoj terminal (ili: command prompt).

Posjeti [github.com](https://github.com/) i kreiraj račun ako ga već nemaš, ili se prijavi i popuni svoj profil.

💡 **Moderni savjet**: Razmisli o postavljanju [SSH ključeva](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) ili korištenju [GitHub CLI](https://cli.github.com/) za lakšu autentifikaciju bez lozinki.

✅ GitHub nije jedini repozitorij koda na svijetu; postoje i drugi, ali GitHub je najpoznatiji.

### Priprema

Trebat će ti mapa s kodnim projektom na tvom lokalnom računalu (laptop ili PC) i javni repozitorij na GitHubu, koji će poslužiti kao primjer kako pridonijeti projektima drugih.

### Čuvanje tvog koda

Razgovarajmo o sigurnosti na trenutak – ali ne brini, nećemo te preplaviti strašnim stvarima! Zamisli ove sigurnosne prakse kao zaključavanje auta ili kuće. To su jednostavne navike koje postaju prirodne i štite tvoj trud.

Pokazat ćemo ti moderne, sigurne načine rada s GitHubom od samog početka. Na taj način razvijaš dobre navike koje će ti koristiti tijekom cijele karijere u kodiranju.

Kad radiš s GitHubom, važno je slijediti najbolje sigurnosne prakse:

| Područje sigurnosti | Najbolja praksa | Zašto je važno |
|---------------------|-----------------|----------------|
| **Autentifikacija** | Koristi SSH ključeve ili osobne pristupne tokene | Lozinke su manje sigurne i postupno se ukidaju |
| **Dvofaktorska autentifikacija** | Omogući 2FA na svom GitHub računu | Dodaje dodatni sloj zaštite računa |
| **Sigurnost repozitorija** | Nikad ne objavljuj osjetljive informacije | API ključevi i lozinke ne bi trebali biti u javnim repozitorijima |
| **Upravljanje ovisnostima** | Omogući Dependabot za ažuriranja | Održava tvoje ovisnosti sigurnima i ažuriranima |

> ⚠️ **Važan sigurnosni podsjetnik**: Nikada ne objavljuj API ključeve, lozinke ili druge osjetljive informacije u bilo kojem repozitoriju. Koristi varijable okruženja i `.gitignore` datoteke za zaštitu osjetljivih podataka.

**Postavljanje moderne autentifikacije:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Savjet profesionalaca**: SSH ključevi eliminiraju potrebu za stalnim unosom lozinki i sigurniji su od tradicionalnih metoda autentifikacije.

---

## Upravljanje kodom kao profesionalac

U redu, OVO je trenutak kad stvari postaju stvarno uzbudljive! 🎉 Sada ćemo naučiti kako pratiti i upravljati svojim kodom kao pravi profesionalci, i iskreno, ovo je jedna od mojih najdražih stvari za podučavanje jer je prava promjena u igri.

Zamisli ovo: pišeš nevjerojatnu priču i želiš pratiti svaku verziju, svaki briljantni edit i svaki "čekaj, ovo je genijalno!" trenutak. To je upravo ono što Git radi za tvoj kod! To je kao da imaš najnevjerojatniju bilježnicu koja pamti SVE – svaki pritisak tipke, svaku promjenu, svaki "ups, sve sam pokvario" trenutak koji možeš odmah poništiti.

Iskreno, ovo može na početku djelovati zbunjujuće. Kad sam počeo, mislio sam "Zašto jednostavno ne mogu spremiti svoje datoteke kao inače?" Ali vjeruj mi: kad ti Git postane jasan (i hoće!), imat ćeš jedan od onih trenutaka kad pomisliš "Kako sam IKADA kodirao bez ovoga?" To je kao da otkriješ da možeš letjeti nakon što si cijeli život hodao!

Recimo da imaš mapu lokalno s nekim kodnim projektom i želiš početi pratiti svoj napredak koristeći git - sustav za kontrolu verzija. Neki ljudi uspoređuju korištenje gita s pisanjem ljubavnog pisma svom budućem ja. Čitajući svoje poruke o promjenama danima, tjednima ili mjesecima kasnije, moći ćeš se prisjetiti zašto si donio određenu odluku ili "vratiti" promjenu – naravno, ako napišeš dobre poruke o promjenama.

### Zadatak: Kreiraj svoj prvi repozitorij!

> 🎯 **Tvoj zadatak (i jako sam uzbuđen zbog toga!)**: Zajedno ćemo kreirati tvoj prvi GitHub repozitorij! Kad završimo, imat ćeš svoj mali kutak interneta gdje će živjeti tvoj kod, i napravit ćeš svoju prvu "promjenu" (to je programerski izraz za pametno spremanje svog rada).
>
> Ovo je zaista poseban trenutak – službeno se pridružuješ globalnoj zajednici programera! Još se sjećam uzbuđenja kad sam kreirao svoj prvi repozitorij i pomislio "Wow, stvarno ovo radim!"

Prođimo kroz ovu avanturu zajedno, korak po korak. Uzmi si vremena za svaki dio – nema nagrade za žurbu, i obećavam da će svaki korak imati smisla. Zapamti, svaki koderski superstar kojeg se diviš jednom je bio točno tamo gdje si ti, spreman kreirati svoj prvi repozitorij. Kako je to cool?

> Pogledaj video
> 
> [![Osnove Gita i GitHuba video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Krenimo zajedno:**

1. **Kreiraj svoj repozitorij na GitHubu**. Posjeti GitHub.com i potraži onaj svijetlo zeleni gumb **New** (ili znak **+** u gornjem desnom kutu). Klikni na njega i odaberi **New repository**.

   Evo što trebaš učiniti:
   1. Daj svom repozitoriju ime – neka bude nešto što ti ima smisla!
   1. Dodaj opis ako želiš (to pomaže drugima da razumiju o čemu se radi u tvom projektu)
   1. Odluči želiš li da bude javan (da ga svi mogu vidjeti) ili privatan (samo za tebe)
   1. Preporučujem da označiš okvir za dodavanje README datoteke – to je kao naslovna stranica tvog projekta
   1. Klikni **Create repository** i proslavi – upravo si kreirao svoj prvi repozitorij! 🎉

2. **Navigiraj do svoje projektne mape**. Sada otvorimo tvoj terminal (ne brini, nije tako strašan kako izgleda!). Moramo reći tvom računalu gdje se nalaze tvoje projektne datoteke. Upiši ovu naredbu:

   ```bash
   cd [name of your folder]
   ```

   **Što ovdje radimo:**
   - U osnovi kažemo "Hej računalo, odvedi me do moje projektne mape"
   - Ovo je kao otvaranje određene mape na tvom desktopu, ali to radimo tekstualnim naredbama
   - Zamijeni `[ime tvoje mape]` stvarnim imenom tvoje projektne mape

3. **Pretvori svoju mapu u Git repozitorij**. Ovdje se događa magija! Upiši:

   ```bash
   git init
   ```

   **Evo što se upravo dogodilo (prilično cool stvari!):**
   - Git je upravo stvorio skrivenu `.git` mapu u tvom projektu – nećeš je vidjeti, ali tamo je!
   - Tvoja obična mapa sada je "repozitorij" koji može pratiti svaku promjenu koju napraviš
   - Zamisli to kao da svojoj mapi daješ supermoći da pamti sve

4. **Provjeri što se događa**. Pogledaj što Git misli o tvom projektu trenutno:

   ```bash
   git status
   ```

   **Razumijevanje onoga što ti Git govori:**
   
   Možda ćeš vidjeti nešto što izgleda ovako:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Ne paničari! Evo što to znači:**
   - Datoteke u **crvenom** su datoteke koje imaju promjene, ali još nisu spremne za spremanje
   - Datoteke u **zelenom** (kad ih vidiš) su spremne za spremanje
   - Git ti pomaže tako što ti točno govori što možeš učiniti sljedeće

   > 💡 **Savjet profesionalaca**: Naredba `git status` je tvoj najbolji prijatelj! Koristi je kad god si zbunjen oko toga što se događa. To je kao da pitaš Git "Hej, koja je situacija trenutno?"

5. **Pripremi svoje datoteke za spremanje** (to se zove "staging"):

   ```bash
   git add .
   ```

   **Što smo upravo učinili:**
   - Rekli smo Gitu "Hej, želim uključiti SVE svoje datoteke u sljedeće spremanje"
   - `.` je kao da kažeš "sve u ovoj mapi"
   - Sada su tvoje datoteke "pripremljene" i spremne za sljedeći korak

   **Želiš biti selektivniji?** Možeš dodati samo određene datoteke:

   ```bash
   git add [file or folder name]
   ```

   **Zašto bi to želio učiniti?**
   - Ponekad želiš spremiti povezane promjene zajedno
   - Pomaže ti organizirati svoj rad u logične cjeline
   - Olakšava razumijevanje što se promijenilo i kada

   **Promijenio si mišljenje?** Nema problema! Možeš ukloniti datoteke iz pripreme ovako:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Ne brini – ovo ne briše tvoj rad, samo uklanja datoteke iz "spremne za spremanje" hrpe.

6. **Trajno spremi svoj rad** (napravi svoju prvu promjenu!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Čestitamo! Upravo si napravio svoju prvu promjenu!**
   
   **Evo što se upravo dogodilo:**
   - Git je napravio "snimku" svih pripremljenih datoteka u ovom trenutku
   - Tvoja poruka o promjeni "prva promjena" objašnjava o čemu se radi u ovoj točki spremanja
   - Git je ovoj snimci dao jedinstveni ID kako bi je uvijek mogao pronaći kasnije
   - Službeno si počeo pratiti povijest svog projekta!

   > 💡 **Buduće poruke o promjenama**: Za svoje sljedeće promjene budi detaljniji! Umjesto "ažurirano", probaj "Dodana kontakt forma na početnu stranicu" ili "Popravljen bug u navigacijskom izborniku". Tvoj budući ja će ti biti zahvalan!

7. **Poveži svoj lokalni projekt s GitHubom**. Trenutno tvoj projekt postoji samo na tvom računalu. Povežimo ga s tvojim GitHub repozitorijem kako bi ga mogao podijeliti sa svijetom!

   Prvo, idi na stranicu svog GitHub repozitorija i kopiraj URL. Zatim se vrati ovdje i upiši:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Zamijeni taj URL stvarnim URL-om svog repozitorija!)

   **Što smo upravo učinili:**
- Stvorili smo vezu između vašeg lokalnog projekta i vašeg GitHub repozitorija  
- "Origin" je samo nadimak za vaš GitHub repozitorij – kao da dodajete kontakt u svoj telefon  
- Sada vaš lokalni Git zna kamo poslati vaš kod kad budete spremni podijeliti ga  

💡 **Lakši način**: Ako imate instaliran GitHub CLI, ovo možete učiniti jednim naredbom:  
   ```bash
   gh repo create my-repo --public --push --source=.
   ```
  
8. **Pošaljite svoj kod na GitHub** (veliki trenutak!):  

   ```bash
   git push -u origin main
   ```
  
**🚀 To je to! Prenosite svoj kod na GitHub!**  

**Što se događa:**  
- Vaši commitovi putuju s vašeg računala na GitHub  
- Zastavica `-u` postavlja trajnu vezu kako bi budući pushovi bili lakši  
- "main" je naziv vaše primarne grane (kao glavni folder)  
- Nakon ovoga, za buduće prijenose samo trebate upisati `git push`!  

💡 **Brza napomena**: Ako se vaša grana zove drugačije (npr. "master"), koristite taj naziv. Možete provjeriti pomoću `git branch --show-current`.  

9. **Vaš novi dnevni ritam kodiranja** (ovdje postaje zarazno!):  

Od sada, kad god napravite promjene u svom projektu, slijedite ovaj jednostavan trokorak:  

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```
  
**Ovo postaje vaš ritam kodiranja:**  
- Napravite sjajne promjene u svom kodu ✨  
- Dodajte ih s `git add` ("Hej Git, obrati pažnju na ove promjene!")  
- Spremite ih s `git commit` i opisnom porukom (budući vi će vam biti zahvalan!)  
- Podijelite ih sa svijetom koristeći `git push` 🚀  
- Ponavljajte – ozbiljno, ovo postaje prirodno kao disanje!  

Obožavam ovaj način rada jer je poput stvaranja više točaka za spremanje u videoigri. Napravili ste promjenu koja vam se sviđa? Commitajte je! Želite isprobati nešto rizično? Nema problema – uvijek se možete vratiti na posljednji commit ako nešto pođe po zlu!  

> 💡 **Savjet**: Možda biste također trebali razmisliti o korištenju `.gitignore` datoteke kako biste spriječili da se datoteke koje ne želite pratiti pojave na GitHubu - poput bilješki koje čuvate u istom folderu, ali nemaju mjesto u javnom repozitoriju. Možete pronaći predloške za `.gitignore` datoteke na [.gitignore templates](https://github.com/github/gitignore) ili stvoriti jednu koristeći [gitignore.io](https://www.toptal.com/developers/gitignore).  

#### Moderni Git radni procesi  

Razmislite o usvajanju ovih modernih praksi:  

- **Konvencionalni commitovi**: Koristite standardizirani format poruka commitova poput `feat:`, `fix:`, `docs:`, itd. Saznajte više na [conventionalcommits.org](https://www.conventionalcommits.org/)  
- **Atomski commitovi**: Neka svaki commit predstavlja jednu logičku promjenu  
- **Česti commitovi**: Commitajte često s opisnim porukama umjesto velikih, rijetkih commitova  

#### Poruke commitova  

Sjajna poruka u subject liniji Git commita završava sljedeću rečenicu:  
Ako se primijeni, ovaj commit će <ovdje ide vaš subject>.  

Za subject koristite imperativ, sadašnje vrijeme: "promijeni" umjesto "promijenio" ili "mijenja".  
Kao i u subjectu, u tijelu (opcionalno) također koristite imperativ, sadašnje vrijeme. Tijelo bi trebalo uključivati motivaciju za promjenu i usporediti je s prethodnim ponašanjem. Objašnjavate `zašto`, a ne `kako`.  

✅ Odvojite nekoliko minuta i istražite GitHub. Možete li pronaći zaista sjajnu poruku commita? Možete li pronaći vrlo minimalnu? Koje informacije smatrate najvažnijima i najkorisnijima za prenošenje u poruci commita?  

## Suradnja s drugima (najzabavniji dio!)  

Pripremite se jer OVO je trenutak kada GitHub postaje apsolutno magičan! 🪄 Savladali ste upravljanje vlastitim kodom, ali sada ulazimo u moj apsolutno najdraži dio – suradnju s nevjerojatnim ljudima iz cijelog svijeta.  

Zamislite ovo: probudite se sutra i vidite da je netko iz Tokija poboljšao vaš kod dok ste spavali. Zatim netko iz Berlina ispravi grešku na kojoj ste zapeli. Do poslijepodneva, programer iz São Paula dodao je funkciju o kojoj niste ni razmišljali. To nije znanstvena fantastika – to je samo utorak u GitHub svemiru!  

Ono što me zaista uzbuđuje jest da su vještine suradnje koje ćete naučiti? Točno iste radne procese koje timovi u Googleu, Microsoftu i vašim omiljenim startupima koriste svaki dan. Ne učite samo cool alat – učite tajni jezik koji omogućuje cijelom softverskom svijetu da surađuje.  

Ozbiljno, jednom kad doživite uzbuđenje kad vam netko spoji prvi pull request, shvatit ćete zašto programeri postaju toliko strastveni oko open sourcea. To je kao da ste dio najvećeg, najkreativnijeg timskog projekta na svijetu!  

> Pogledajte video  
>  
> [![Osnove Gita i GitHuba video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)  

Glavni razlog za postavljanje stvari na GitHub bio je omogućiti suradnju s drugim programerima.  

U svom repozitoriju, idite na `Insights > Community` kako biste vidjeli kako se vaš projekt uspoređuje s preporučenim standardima zajednice.  

Želite li da vaš repozitorij izgleda profesionalno i privlačno? Posjetite svoj repozitorij i kliknite na `Insights > Community`. Ova sjajna značajka pokazuje kako se vaš projekt uspoređuje s onim što GitHub zajednica smatra "dobrim praksama za repozitorij".  

> 🎯 **Učinite svoj projekt sjajnim**: Dobro organiziran repozitorij s dobrom dokumentacijom je poput čistog, privlačnog izloga. Pokazuje ljudima da vam je stalo do vašeg rada i potiče druge da doprinesu!  

**Evo što čini repozitorij izvrsnim:**  

| Što dodati | Zašto je važno | Što vam donosi |
|------------|----------------|----------------|
| **Opis** | Prvi dojam je važan! | Ljudi odmah znaju što vaš projekt radi |
| **README** | Prednja stranica vašeg projekta | Kao ljubazni vodič za nove posjetitelje |
| **Smjernice za doprinos** | Pokazuje da ste otvoreni za pomoć | Ljudi znaju točno kako vam mogu pomoći |
| **Kodeks ponašanja** | Stvara prijateljski prostor | Svi se osjećaju dobrodošli sudjelovati |
| **Licenca** | Pravna jasnoća | Drugi znaju kako mogu koristiti vaš kod |
| **Sigurnosna politika** | Pokazuje da ste odgovorni | Demonstrira profesionalne prakse |

> 💡 **Profesionalni savjet**: GitHub nudi predloške za sve ove datoteke. Kada stvarate novi repozitorij, označite okvire za automatsko generiranje ovih datoteka.  

**Moderne značajke GitHuba koje treba istražiti:**  

🤖 **Automatizacija & CI/CD:**  
- **GitHub Actions** za automatizirano testiranje i implementaciju  
- **Dependabot** za automatsko ažuriranje ovisnosti  

💬 **Zajednica & Upravljanje projektima:**  
- **GitHub Discussions** za razgovore u zajednici izvan problema  
- **GitHub Projects** za upravljanje projektima u kanban stilu  
- **Pravila zaštite grana** za provođenje standarda kvalitete koda  

Sve ove resurse koristit će novi članovi tima. A to su obično stvari koje novi suradnici pregledavaju prije nego što uopće pogledaju vaš kod, kako bi saznali je li vaš projekt pravo mjesto za njihovo ulaganje vremena.  

✅ README datoteke, iako zahtijevaju vrijeme za pripremu, često se zanemaruju od strane zauzetih održavatelja. Možete li pronaći primjer posebno opisne README datoteke? Napomena: postoje neki [alati za pomoć pri izradi dobrih README datoteka](https://www.makeareadme.com/) koje biste mogli isprobati.  

### Zadatak: Spojite neki kod  

Dokumentacija za doprinos pomaže ljudima da doprinesu projektu. Objašnjava koje vrste doprinosa tražite i kako proces funkcionira. Suradnici će morati proći kroz niz koraka kako bi mogli doprinijeti vašem repozitoriju na GitHubu:  

1. **Forkanje vašeg repozitorija** Vjerojatno ćete htjeti da ljudi _forkaju_ vaš projekt. Forkanje znači stvaranje replike vašeg repozitorija na njihovom GitHub profilu.  
1. **Kloniranje**. Nakon toga će klonirati projekt na svoj lokalni stroj.  
1. **Stvaranje grane**. Želite zamoliti suradnike da stvore _granu_ za svoj rad.  
1. **Usmjeravanje promjena na jedno područje**. Zamolite suradnike da se usredotoče na jednu stvar odjednom - na taj način su veće šanse da možete _spojiti_ njihov rad. Zamislite da napišu ispravak greške, dodaju novu funkciju i ažuriraju nekoliko testova - što ako želite, ili možete implementirati samo 2 od 3, ili 1 od 3 promjene?  

✅ Zamislite situaciju u kojoj su grane posebno kritične za pisanje i isporuku dobrog koda. Koje slučajeve upotrebe možete zamisliti?  

> Napomena, budite promjena koju želite vidjeti u svijetu i stvorite grane za svoj vlastiti rad također. Svaki commit koji napravite bit će napravljen na grani na kojoj trenutno radite. Koristite `git status` da vidite na kojoj ste grani.  

Prođimo kroz radni proces suradnika. Pretpostavimo da je suradnik već _forkao_ i _klonirao_ repozitorij tako da ima Git repozitorij spreman za rad na svom lokalnom stroju:  

1. **Stvorite granu**. Koristite naredbu `git branch` za stvaranje grane koja će sadržavati promjene koje namjeravaju doprinijeti:  

   ```bash
   git branch [branch-name]
   ```
  
   > 💡 **Moderni pristup**: Također možete stvoriti i prebaciti se na novu granu jednom naredbom:  
   ```bash
   git switch -c [branch-name]
   ```
  
1. **Prebacite se na radnu granu**. Prebacite se na određenu granu i ažurirajte radni direktorij pomoću `git switch`:  

   ```bash
   git switch [branch-name]
   ```
  
   > 💡 **Moderna napomena**: `git switch` je moderna zamjena za `git checkout` pri promjeni grana. Jasnija je i sigurnija za početnike.  

1. **Radite na promjenama**. U ovom trenutku želite dodati svoje promjene. Ne zaboravite obavijestiti Git o tome pomoću sljedećih naredbi:  

   ```bash
   git add .
   git commit -m "my changes"
   ```
  
   > ⚠️ **Kvaliteta poruke commita**: Pobrinite se da svom commitu date dobro ime, kako za sebe tako i za održavatelja repozitorija kojem pomažete. Budite specifični o tome što ste promijenili!  

1. **Spojite svoj rad s `main` granom**. U nekom trenutku završavate s radom i želite spojiti svoj rad s onim iz `main` grane. `main` grana se možda promijenila u međuvremenu pa se pobrinite da je prvo ažurirate na najnoviju verziju pomoću sljedećih naredbi:  

   ```bash
   git switch main
   git pull
   ```
  
   U ovom trenutku želite osigurati da se svi _konflikti_, situacije u kojima Git ne može lako _spojiti_ promjene, dogode u vašoj radnoj grani. Stoga pokrenite sljedeće naredbe:  

   ```bash
   git switch [branch_name]
   git merge main
   ```
  
   Naredba `git merge main` donijet će sve promjene iz `main` u vašu granu. Nadamo se da možete samo nastaviti. Ako ne, VS Code će vam pokazati gdje je Git _zbunjen_ i samo izmijenite zahvaćene datoteke kako biste odredili koji sadržaj je najtočniji.  

   💡 **Moderna alternativa**: Razmislite o korištenju `git rebase` za čišću povijest:  
   ```bash
   git rebase main
   ```
  
   Ovo ponovno reproducira vaše commitove na vrhu najnovije main grane, stvarajući linearnu povijest.  

1. **Pošaljite svoj rad na GitHub**. Slanje vašeg rada na GitHub znači dvije stvari. Pushing vaše grane na vaš repozitorij i zatim otvaranje PR-a, Pull Requesta.  

   ```bash
   git push --set-upstream origin [branch-name]
   ```
  
   Gornja naredba stvara granu na vašem forkiranom repozitoriju.  

1. **Otvorite PR**. Zatim želite otvoriti PR. To radite tako da odete na forkirani repozitorij na GitHubu. Vidjet ćete oznaku na GitHubu gdje vas pita želite li stvoriti novi PR, kliknite na to i bit ćete preusmjereni na sučelje gdje možete promijeniti naslov poruke commita, dati mu prikladniji opis. Sada će održavatelj repozitorija koji ste forkali vidjeti ovaj PR i _držimo palčeve_ da će cijeniti i _spojiti_ vaš PR. Sada ste suradnik, bravo :)  

   💡 **Moderni savjet**: PR-ove možete stvoriti i pomoću GitHub CLI:  
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```
  
   🔧 **Najbolje prakse za PR-ove**:  
   - Povežite se s povezanim problemima koristeći ključne riječi poput "Fixes #123"  
   - Dodajte snimke zaslona za promjene korisničkog sučelja  
   - Zatražite specifične recenzente  
   - Koristite nacrte PR-ova za rad u tijeku  
   - Osigurajte da svi CI testovi prođu prije nego zatražite recenziju  

1. **Očistite**. Smatra se dobrom praksom _očistiti_ nakon što uspješno spojite PR. Želite očistiti i svoju lokalnu granu i granu koju ste poslali na GitHub. Prvo je izbrišite lokalno pomoću sljedeće naredbe:  

   ```bash
   git branch -d [branch-name]
   ```
  
   Pobrinite se da odete na GitHub stranicu za forkirani repozitorij i uklonite udaljenu granu koju ste upravo poslali.  

`Pull request` se čini kao smiješan izraz jer zapravo želite gurnuti svoje promjene u projekt. No, održavatelj (vlasnik projekta) ili glavni tim mora razmotriti vaše promjene prije nego ih spoji s "main" granom projekta, pa zapravo tražite odluku o promjeni od održavatelja.  

Pull request je mjesto za usporedbu i raspravu o razlikama uvedenim na grani uz recenzije, komentare, integrirane testove i još mnogo toga. Dobar pull request otprilike slijedi ista pravila kao i poruka commita. Možete dodati referencu na problem u trackeru problema, kada vaš rad, na primjer, rješava problem. To se radi pomoću `#` nakon kojeg slijedi broj vašeg problema. Na primjer `#97`.  
🤞Držimo palčeve da svi provjeri prođu i da vlasnik(i) projekta spoje vaše promjene u projekt🤞

Ažurirajte svoju trenutnu lokalnu radnu granu sa svim novim commitovima iz odgovarajuće udaljene grane na GitHubu:

`git pull`

## Doprinos otvorenom kodu (Vaša prilika da ostavite trag!)

Jeste li spremni za nešto što će vas potpuno oduševiti? 🤯 Razgovarajmo o doprinosu projektima otvorenog koda – i već se naježim od uzbuđenja što ću ovo podijeliti s vama!

Ovo je vaša prilika da postanete dio nečeg zaista izvanrednog. Zamislite da poboljšavate alate koje milijuni programera koriste svaki dan ili da popravljate grešku u aplikaciji koju vaši prijatelji obožavaju. To nije samo san – to je ono što doprinos otvorenom kodu predstavlja!

Evo što mi svaki put izazove trnce: svaki alat koji ste dosad koristili – vaš editor koda, okviri koje ćemo istraživati, pa čak i preglednik u kojem ovo čitate – započeo je s nekim poput vas koji je napravio svoj prvi doprinos. Taj briljantni programer koji je izradio vaš omiljeni VS Code dodatak? Nekada je bio početnik koji je drhtavim rukama kliknuo "create pull request", baš kao što ćete i vi uskoro učiniti.

A evo najljepšeg dijela: zajednica otvorenog koda je poput najvećeg grupnog zagrljaja na internetu. Većina projekata aktivno traži nove suradnike i ima probleme označene kao "good first issue" posebno za ljude poput vas! Voditelji projekata iskreno se uzbude kad vide nove suradnike jer se sjećaju svojih prvih koraka.

Ovdje ne učite samo programirati – pripremate se za pridruživanje globalnoj obitelji graditelja koji se svakog dana bude s mišlju "Kako možemo učiniti digitalni svijet malo boljim?" Dobrodošli u klub! 🌟

Prvo, pronađimo repozitorij (ili **repo**) na GitHubu koji vas zanima i kojem želite doprinijeti nekom promjenom. Želite kopirati njegov sadržaj na svoje računalo.

✅ Dobar način za pronalazak repozitorija prilagođenih početnicima je [pretraživanje prema oznaci 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopiraj repo lokalno](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.hr.png)

Postoji nekoliko načina za kopiranje koda. Jedan od načina je "kloniranje" sadržaja repozitorija, koristeći HTTPS, SSH ili GitHub CLI (Command Line Interface).

Otvorite svoj terminal i klonirajte repozitorij ovako:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

Za rad na projektu, prebacite se u odgovarajuću mapu:
`cd ProjectURL`

Također možete otvoriti cijeli projekt koristeći:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - GitHubovo razvojno okruženje u oblaku s VS Codeom u pregledniku
- **[GitHub Desktop](https://desktop.github.com/)** - GUI aplikacija za Git operacije  
- **[GitHub.dev](https://github.dev)** - Pritisnite tipku `.` na bilo kojem GitHub repozitoriju da biste otvorili VS Code u pregledniku
- **VS Code** s ekstenzijom za GitHub Pull Requests

Na kraju, možete preuzeti kod u zipanoj mapi.

### Nekoliko zanimljivih stvari o GitHubu

Možete označiti zvjezdicom, pratiti i/ili "forkati" bilo koji javni repozitorij na GitHubu. Svoje označene repozitorije možete pronaći u padajućem izborniku u gornjem desnom kutu. To je poput označavanja stranica, ali za kod.

Projekti imaju alat za praćenje problema, uglavnom na GitHubu u kartici "Issues", osim ako nije drugačije navedeno, gdje ljudi raspravljaju o problemima vezanim za projekt. A kartica Pull Requests je mjesto gdje ljudi raspravljaju i pregledavaju promjene koje su u tijeku.

Projekti također mogu imati rasprave na forumima, mailing listama ili chat kanalima poput Slacka, Discorda ili IRC-a.

🔧 **Moderni GitHub alati**:
- **GitHub Discussions** - Ugrađeni forum za razgovore zajednice
- **GitHub Sponsors** - Financijska podrška voditeljima projekata  
- **Security tab** - Izvješća o ranjivostima i sigurnosne obavijesti
- **Actions tab** - Pregled automatiziranih tijekova rada i CI/CD procesa
- **Insights tab** - Analitika o suradnicima, commitovima i zdravlju projekta
- **Projects tab** - GitHubovi ugrađeni alati za upravljanje projektima

✅ Pogledajte svoj novi GitHub repo i isprobajte nekoliko stvari, poput uređivanja postavki, dodavanja informacija u repo, stvaranja projekta (poput Kanban ploče) i postavljanja GitHub Actions za automatizaciju. Puno toga možete učiniti!

---

## 🚀 Izazov 

Dobro, vrijeme je da testirate svoje nove GitHub supermoći! 🚀 Evo izazova koji će sve učiniti jasnim na najzadovoljavajući način:

Pozovite prijatelja (ili člana obitelji koji vas uvijek pita što radite s tim "računalnim stvarima") i krenite na zajedničku avanturu kodiranja! Ovo je mjesto gdje se događa prava magija – stvorite projekt, neka ga oni forkaju, napravite nekoliko grana i spojite promjene kao profesionalci kakvi postajete.

Neću lagati – vjerojatno ćete se smijati u nekom trenutku (posebno kad oboje pokušate promijeniti isti redak), možda ćete se češati po glavi u zbunjenosti, ali sigurno ćete imati one nevjerojatne "aha!" trenutke koji čine sve učenje vrijednim. Osim toga, postoji nešto posebno u dijeljenju tog prvog uspješnog spajanja s nekim drugim – to je poput male proslave koliko ste daleko stigli!

Još nemate partnera za kodiranje? Bez brige! GitHub zajednica prepuna je nevjerojatno gostoljubivih ljudi koji se sjećaju kako je bilo biti nov. Potražite repozitorije s oznakom "good first issue" – oni vam doslovno poručuju "Hej početnici, dođite učiti s nama!" Kako je to sjajno?

## Kviz nakon predavanja
[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/en/)

## Pregled i nastavak učenja

Uf! 🎉 Pogledajte se – upravo ste savladali osnove GitHuba kao pravi šampion! Ako vam se mozak sada osjeća malo preopterećeno, to je potpuno normalno i iskreno dobar znak. Upravo ste naučili alate za koje mi je trebalo tjednima da se osjećam ugodno kad sam počinjao.

Git i GitHub su nevjerojatno moćni (kao, stvarno moćni), i svaki programer kojeg poznajem – uključujući one koji sada izgledaju kao čarobnjaci – morao je vježbati i malo se mučiti prije nego što je sve kliknulo. Činjenica da ste prošli ovu lekciju znači da ste već na putu da savladate neke od najvažnijih alata u programerskom alatu.

Evo nekoliko fantastičnih resursa koji će vam pomoći da vježbate i postanete još bolji:

- [Vodič za doprinos softveru otvorenog koda](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Vaša karta za ostavljanje traga
- [Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/) – Držite ovo pri ruci za brzu referencu!

I zapamtite: praksa donosi napredak, ne savršenstvo! Što više koristite Git i GitHub, to će vam postati prirodnije. GitHub je stvorio neke nevjerojatne interaktivne tečajeve koji vam omogućuju vježbanje u sigurnom okruženju:

- [Uvod u GitHub](https://github.com/skills/introduction-to-github)
- [Komunikacija pomoću Markdowna](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Upravljanje sukobima pri spajanju](https://github.com/skills/resolve-merge-conflicts)

**Osjećate se avanturistički? Pogledajte ove moderne alate:**
- [Dokumentacija za GitHub CLI](https://cli.github.com/manual/) – Za trenutke kad želite biti čarobnjak komandne linije
- [Dokumentacija za GitHub Codespaces](https://docs.github.com/en/codespaces) – Kodirajte u oblaku!
- [Dokumentacija za GitHub Actions](https://docs.github.com/en/actions) – Automatizirajte sve
- [Najbolje prakse za Git](https://www.atlassian.com/git/tutorials/comparing-workflows) – Poboljšajte svoj radni tijek 

## Izazov s GitHub Copilot Agentom 🚀

Koristite Agent način rada za dovršavanje sljedećeg izazova:

**Opis:** Stvorite suradnički projekt web razvoja koji demonstrira kompletan GitHub tijek rada koji ste naučili u ovoj lekciji. Ovaj izazov pomoći će vam da vježbate stvaranje repozitorija, značajke suradnje i moderne Git tijekove rada u stvarnom scenariju.

**Zadatak:** Stvorite novi javni GitHub repozitorij za jednostavan projekt "Resursi za web razvoj". Repozitorij bi trebao uključivati dobro strukturiranu README.md datoteku koja navodi korisne alate i resurse za web razvoj, organizirane po kategorijama (HTML, CSS, JavaScript itd.). Postavite repozitorij s odgovarajućim standardima zajednice, uključujući licencu, smjernice za doprinos i kodeks ponašanja. Stvorite najmanje dvije grane za značajke: jednu za dodavanje CSS resursa i drugu za JavaScript resurse. Napravite commitove na svakoj grani s opisnim porukama commitova, a zatim stvorite pull requestove za spajanje promjena natrag u glavnu granu. Omogućite GitHub značajke poput Issues, Discussions i postavite osnovni GitHub Actions tijek rada za automatizirane provjere.

## Zadatak 

Vaša misija, ako je odlučite prihvatiti: Završite [Uvod u GitHub](https://github.com/skills/introduction-to-github) tečaj na GitHub Skills. Ovaj interaktivni tečaj omogućit će vam da vježbate sve što ste naučili u sigurnom, vođenom okruženju. Osim toga, dobit ćete cool značku kad završite! 🏅

**Osjećate se spremni za više izazova?**
- Postavite SSH autentifikaciju za svoj GitHub račun (bez više lozinki!)
- Pokušajte koristiti GitHub CLI za svoje svakodnevne Git operacije
- Stvorite repozitorij s GitHub Actions tijekom rada
- Istražite GitHub Codespaces otvaranjem ovog repozitorija u uređivaču temeljenom na oblaku

Zapamtite: svaki stručnjak je jednom bio početnik. Možete vi to! 💪

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.