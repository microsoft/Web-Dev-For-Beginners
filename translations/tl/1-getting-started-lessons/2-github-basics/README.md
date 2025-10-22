<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-22T15:23:57+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "tl"
}
-->
# Panimula sa GitHub

Kamusta, hinaharap na developer! 👋 Handa ka na bang sumali sa milyon-milyong coder sa buong mundo? Talagang excited akong ipakilala sa'yo ang GitHub – isipin mo ito bilang social media platform para sa mga programmer, pero sa halip na magbahagi ng mga larawan ng tanghalian, nagbabahagi tayo ng code at gumagawa ng mga kamangha-manghang bagay nang sama-sama!

Narito ang nakakabilib: bawat app sa iyong telepono, bawat website na binibisita mo, at karamihan sa mga tool na matututunan mong gamitin ay ginawa ng mga team ng developer na nagtutulungan sa mga platform tulad ng GitHub. Yung music app na mahal mo? May isang tao na tulad mo ang nag-ambag dito. Yung laro na hindi mo mabitawan? Oo, malamang ginawa gamit ang GitHub collaboration. At ngayon, IKAW ang matututo kung paano maging bahagi ng kamangha-manghang komunidad na ito!

Alam ko na maaaring mukhang marami ito sa simula – sa totoo lang, naaalala ko pa ang unang beses kong tumingin sa GitHub page at iniisip, "Ano ang ibig sabihin ng lahat ng ito?" Pero ganito kasi: bawat developer ay nagsimula sa eksaktong lugar kung nasaan ka ngayon. Sa pagtatapos ng araling ito, magkakaroon ka ng sarili mong GitHub repository (isipin mo ito bilang personal na showcase ng proyekto mo sa cloud), at malalaman mo kung paano i-save ang iyong trabaho, ibahagi ito sa iba, at mag-ambag sa mga proyekto na ginagamit ng milyon-milyong tao.

Sama-sama nating tatahakin ang paglalakbay na ito, hakbang-hakbang. Walang pagmamadali, walang pressure – ikaw, ako, at ilang napakagandang tools na magiging bagong matalik mong kaibigan!

![Panimula sa GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.tl.png)
> Sketchnote ni [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app)

## Panimula

Bago tayo sumabak sa mga talagang exciting na bagay, ihanda muna natin ang iyong computer para sa GitHub magic! Isipin mo ito na parang inaayos ang mga gamit mo sa sining bago gumawa ng obra maestra – ang pagkakaroon ng tamang tools ay nagpapadali at mas masaya ang lahat.

Personal kitang gagabayan sa bawat hakbang ng setup, at ipinapangako kong hindi ito kasing hirap ng iniisip mo. Kung may hindi agad maunawaan, normal lang 'yan! Naalala ko pa noong una kong i-set up ang development environment ko, parang nagbabasa ako ng sinaunang hieroglyphics. Bawat developer ay dumaan sa eksaktong nararamdaman mo ngayon, nagtataka kung tama ba ang ginagawa nila. Spoiler alert: kung nandito ka at nag-aaral, tama na ang ginagawa mo! 🌟

Sa araling ito, tatalakayin natin:

- paano subaybayan ang mga ginagawa mo sa iyong computer
- paano makipagtulungan sa mga proyekto kasama ang iba
- paano mag-ambag sa open source software

### Mga Kinakailangan

Ihanda natin ang iyong computer para sa GitHub magic! Huwag mag-alala – ang setup na ito ay isang beses lang gagawin, at pagkatapos nito, handa ka na para sa buong coding journey mo.

Sige, simulan natin sa pundasyon! Una, kailangan nating tingnan kung naka-install na ang Git sa iyong computer. Ang Git ay parang super-smart assistant na naaalala ang bawat pagbabago na ginawa mo sa code – mas magaling kaysa sa paulit-ulit na pag-hit ng Ctrl+S bawat dalawang segundo (lahat tayo nagawa na 'yan!).

Tingnan kung naka-install na ang Git sa pamamagitan ng pag-type ng magic command na ito sa iyong terminal:
`git --version`

Kung wala pa ang Git, walang problema! Pumunta lang sa [download Git](https://git-scm.com/downloads) at kunin ito. Kapag na-install mo na, kailangan nating ipakilala ang Git sa'yo nang maayos:

> 💡 **Unang Setup**: Ang mga command na ito ay nagsasabi sa Git kung sino ka. Ang impormasyong ito ay ilalagay sa bawat commit na gagawin mo, kaya pumili ng pangalan at email na komportable kang ibahagi sa publiko.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Para tingnan kung naka-configure na ang Git, maaari mong i-type:
```bash
git config --list
```

Kakailanganin mo rin ng GitHub account, isang code editor (tulad ng Visual Studio Code), at kailangan mong buksan ang iyong terminal (o: command prompt).

Pumunta sa [github.com](https://github.com/) at gumawa ng account kung wala ka pa, o mag-login at punan ang iyong profile.

💡 **Modernong Tip**: Isaalang-alang ang pag-setup ng [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) o paggamit ng [GitHub CLI](https://cli.github.com/) para sa mas madaling authentication nang walang password.

✅ Hindi lang GitHub ang code repository sa mundo; may iba pa, pero ang GitHub ang pinakakilala.

### Paghahanda

Kakailanganin mo ng folder na may code project sa iyong lokal na makina (laptop o PC), at isang public repository sa GitHub, na magsisilbing halimbawa kung paano mag-ambag sa mga proyekto ng iba.

### Panatilihing Ligtas ang Iyong Code

Pag-usapan natin ang seguridad sandali – pero huwag mag-alala, hindi kita pupunuin ng nakakatakot na bagay! Isipin mo ang mga security practices na ito na parang pag-lock ng iyong kotse o bahay. Simple lang ang mga ito, nagiging natural na ugali, at pinoprotektahan ang iyong pinaghirapan.

Ipapakita namin sa'yo ang modernong, secure na paraan ng paggamit ng GitHub mula sa simula. Sa ganitong paraan, makakabuo ka ng magagandang gawi na magagamit mo sa buong coding career mo.

Kapag gumagamit ng GitHub, mahalagang sundin ang mga best practices sa seguridad:

| Lugar ng Seguridad | Best Practice | Bakit Mahalaga |
|--------------------|---------------|----------------|
| **Authentication** | Gumamit ng SSH keys o Personal Access Tokens | Ang mga password ay hindi gaanong secure at unti-unting inaalis |
| **Two-Factor Authentication** | I-enable ang 2FA sa iyong GitHub account | Nagdadagdag ng karagdagang proteksyon sa account |
| **Repository Security** | Huwag kailanman mag-commit ng sensitibong impormasyon | Ang mga API keys at password ay hindi dapat nasa public repos |
| **Dependency Management** | I-enable ang Dependabot para sa updates | Pinapanatiling secure at up-to-date ang iyong dependencies |

> ⚠️ **Paalala sa Seguridad**: Huwag kailanman mag-commit ng API keys, password, o iba pang sensitibong impormasyon sa anumang repository. Gumamit ng environment variables at `.gitignore` files para protektahan ang sensitibong data.

**Modernong Authentication Setup:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Pro Tip**: Ang SSH keys ay nag-aalis ng pangangailangan na paulit-ulit na maglagay ng password at mas secure kaysa sa tradisyunal na authentication methods.

---

## Pamamahala ng Iyong Code na Parang Pro

Okay, DITO na nagiging exciting ang lahat! 🎉 Matututo tayo kung paano subaybayan at pamahalaan ang iyong code tulad ng mga propesyonal, at sa totoo lang, isa ito sa mga paborito kong ituro dahil sobrang game-changer nito.

Isipin mo ito: nagsusulat ka ng isang kamangha-manghang kwento, at gusto mong subaybayan ang bawat draft, bawat brilliant edit, at bawat "wait, ang galing nito!" moment sa daan. Ganyan ang ginagawa ng Git para sa iyong code! Parang may pinaka-kamangha-manghang time-traveling notebook na naaalala ang LAHAT – bawat keystroke, bawat pagbabago, bawat "oops, nasira ang lahat" moment na maaari mong agad na balikan.

Aaminin ko – maaaring mukhang nakakalito ito sa simula. Noong nagsimula ako, iniisip ko "Bakit hindi ko na lang i-save ang files ko nang normal?" Pero magtiwala ka sa akin: kapag naintindihan mo ang Git (at mangyayari 'yan!), magkakaroon ka ng lightbulb moment kung saan iisipin mo "Paano ako NAG-CODE nang wala ito?" Parang natuklasan mong kaya mong lumipad pagkatapos maglakad sa lahat ng lugar buong buhay mo!

Sabihin nating may folder ka sa lokal na makina na may code project at gusto mong simulan ang pagsubaybay sa iyong progreso gamit ang git - ang version control system. Ang iba ay ikinukumpara ang paggamit ng git sa pagsusulat ng love letter sa iyong hinaharap na sarili. Sa pagbabasa ng iyong commit messages sa mga darating na araw, linggo, o buwan, maaalala mo kung bakit mo ginawa ang isang desisyon, o "rollback" ang isang pagbabago – iyon ay, kapag nagsusulat ka ng magagandang "commit messages."

### Gawain: Gumawa ng Iyong Unang Repository!

> 🎯 **Ang Iyong Misyon (at sobrang excited ako para sa'yo!)**: Gagawa tayo ng iyong unang GitHub repository nang magkasama! Sa pagtatapos nito, magkakaroon ka ng sarili mong maliit na sulok sa internet kung saan nakatira ang iyong code, at magagawa mo ang iyong unang "commit" (developer speak para sa matalinong paraan ng pag-save ng iyong trabaho).
>
> Talagang espesyal ang sandaling ito – opisyal ka nang sasali sa global na komunidad ng mga developer! Naalala ko pa ang thrill ng paggawa ng unang repo ko at iniisip "Wow, ginagawa ko talaga ito!"

Sama-sama nating lakbayin ang adventure na ito, hakbang-hakbang. Dahan-dahan sa bawat bahagi – walang premyo sa pagmamadali, at ipinapangako kong bawat hakbang ay magkakaroon ng kahulugan. Tandaan, bawat coding superstar na hinahangaan mo ay minsang nakaupo sa eksaktong lugar kung nasaan ka ngayon, handang gumawa ng kanilang unang repository. Ang cool, 'di ba?

> Panoorin ang video
> 
> [![Git at GitHub basics video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Gawin Natin Ito Nang Magkasama:**

1. **Gumawa ng iyong repository sa GitHub**. Pumunta sa GitHub.com at hanapin ang maliwanag na berdeng **New** button (o ang **+** sign sa kanang itaas). I-click ito at piliin ang **New repository**.

   Narito ang gagawin:
   1. Bigyan ang iyong repository ng pangalan – gawing makabuluhan ito para sa'yo!
   1. Magdagdag ng description kung gusto mo (nakakatulong ito sa iba na maunawaan kung tungkol saan ang iyong proyekto)
   1. Magdesisyon kung gusto mo itong public (makikita ng lahat) o private (para sa'yo lang)
   1. Inirerekumenda kong i-check ang box para magdagdag ng README file – parang front page ito ng iyong proyekto
   1. I-click ang **Create repository** at magdiwang – ginawa mo na ang iyong unang repo! 🎉

2. **Pumunta sa iyong project folder**. Ngayon, buksan natin ang iyong terminal (huwag mag-alala, hindi ito nakakatakot tulad ng hitsura nito!). Kailangan nating sabihin sa iyong computer kung nasaan ang mga file ng iyong proyekto. I-type ang command na ito:

   ```bash
   cd [name of your folder]
   ```

   **Ang ginagawa natin dito:**
   - Karaniwang sinasabi natin sa computer, "Hoy computer, dalhin mo ako sa folder ng proyekto ko"
   - Parang binubuksan ang isang partikular na folder sa iyong desktop, pero ginagawa natin ito gamit ang text commands
   - Palitan ang `[name of your folder]` ng aktwal na pangalan ng iyong project folder

3. **Gawing Git repository ang iyong folder**. Dito na mangyayari ang magic! I-type:

   ```bash
   git init
   ```

   **Narito ang nangyari (sobrang cool na bagay!):**
   - Gumawa ang Git ng nakatagong `.git` folder sa iyong proyekto – hindi mo ito makikita, pero nandiyan ito!
   - Ang regular mong folder ay ngayon isang "repository" na maaaring subaybayan ang bawat pagbabago na ginagawa mo
   - Isipin mo ito na parang binibigyan mo ng superpowers ang iyong folder para maalala ang lahat

4. **Tingnan kung ano ang nangyayari**. Tingnan natin kung ano ang iniisip ng Git tungkol sa iyong proyekto ngayon:

   ```bash
   git status
   ```

   **Pag-unawa sa sinasabi ng Git:**
   
   Maaaring makakita ka ng ganito:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Huwag mag-panic! Narito ang ibig sabihin nito:**
   - Ang mga file na **pula** ay mga file na may mga pagbabago pero hindi pa handang i-save
   - Ang mga file na **berde** (kapag nakita mo sila) ay handa nang i-save
   - Ang Git ay tumutulong sa pamamagitan ng pagsasabi kung ano ang susunod na gagawin

   > 💡 **Pro tip**: Ang `git status` command ay ang iyong best friend! Gamitin ito anumang oras na nalilito ka sa nangyayari. Parang tinatanong mo ang Git, "Hoy, ano ang sitwasyon ngayon?"

5. **Ihanda ang iyong mga file para i-save** (tinatawag itong "staging"):

   ```bash
   git add .
   ```

   **Ang ginawa natin:**
   - Sinabi natin sa Git, "Hoy, gusto kong isama LAHAT ng file ko sa susunod na save"
   - Ang `.` ay parang sinasabi "lahat ng nasa folder na ito"
   - Ngayon, ang iyong mga file ay "staged" at handa na para sa susunod na hakbang

   **Gusto mo bang maging mas mapili?** Maaari mong idagdag ang partikular na mga file:

   ```bash
   git add [file or folder name]
   ```

   **Bakit mo gustong gawin ito?**
   - Minsan gusto mong i-save ang mga kaugnay na pagbabago nang sabay-sabay
   - Nakakatulong ito sa pag-organize ng iyong trabaho sa lohikal na mga bahagi
   - Pinapadali ang pag-unawa kung ano ang nagbago at kailan

   **Nagbago ang isip mo?** Walang problema! Maaari mong alisin ang mga file sa stage tulad nito:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Huwag mag-alala – hindi nito binubura ang iyong trabaho, tinatanggal lang nito ang mga file sa "ready to save" pile.

6. **I-save ang iyong trabaho nang permanente** (gawin ang iyong unang commit!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Congratulations! Ginawa mo na ang iyong unang commit!**
   
   **Narito ang nangyari:**
   - Kinuha ng Git ang "snapshot" ng lahat ng iyong staged files sa eksaktong sandaling ito
   - Ang iyong commit message na "first commit" ay nagpapaliwanag kung tungkol saan ang save point na ito
   - Binigyan ng Git ang snapshot na ito ng unique ID para palaging mahanap mo ito sa hinaharap
   - Opisyal mo nang sinimulan ang pagsubaybay sa kasaysayan ng iyong proyekto!

   > 💡 **Mga susunod na commit messages**: Para sa iyong mga susunod na commit, maging mas detalyado! Sa halip na "updated stuff", subukang "Dagdag ng contact form sa homepage" o "Ayusin ang bug sa navigation menu". Magpapasalamat ang hinaharap na sarili mo!

7. **Ikonekta ang iyong lokal na proyekto sa GitHub**. Sa ngayon, ang iyong proyekto ay nasa iyong computer lang. Ikonekta natin ito sa iyong GitHub repository para maibahagi mo ito sa mundo!

   Una, pumunta sa iyong GitHub repository page at kopyahin ang URL. Pagkatapos, bumalik dito at i-type:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Palitan ang URL na iyon ng aktwal na URL ng iyong repository!)

   **Narito ang ginawa natin:**
   - Nilikha namin ang koneksyon sa pagitan ng iyong lokal na proyekto at ng iyong GitHub repository
   - Ang "Origin" ay parang palayaw para sa iyong GitHub repository – parang pagdaragdag ng contact sa iyong telepono
   - Ngayon alam na ng iyong lokal na Git kung saan ipapadala ang iyong code kapag handa ka nang ibahagi ito

   💡 **Mas Madaling Paraan**: Kung may naka-install kang GitHub CLI, magagawa mo ito gamit ang isang command:
   ```bash
   gh repo create my-repo --public --push --source=.
   ```

8. **Ipadala ang iyong code sa GitHub** (ang malaking sandali!):

   ```bash
   git push -u origin main
   ```

   **🚀 Ito na! Ina-upload mo na ang iyong code sa GitHub!**
   
   **Ano ang nangyayari:**
   - Ang iyong mga commit ay naglalakbay mula sa iyong computer papunta sa GitHub
   - Ang `-u` flag ay nagse-set up ng permanenteng koneksyon para mas madali ang mga susunod na push
   - Ang "main" ay pangalan ng iyong pangunahing branch (parang pangunahing folder)
   - Pagkatapos nito, maaari mo na lang i-type ang `git push` para sa mga susunod na upload!

   💡 **Mabilis na Paalala**: Kung ang pangalan ng iyong branch ay iba (halimbawa "master"), gamitin ang pangalan na iyon. Maaari mong i-check gamit ang `git branch --show-current`.

9. **Ang iyong bagong pang-araw-araw na coding rhythm** (dito na nagiging masaya!):

   Simula ngayon, tuwing may gagawin kang pagbabago sa iyong proyekto, mayroon kang simpleng tatlong hakbang na proseso:

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```

   **Ito ang magiging ritmo ng iyong coding:**
   - Gumawa ng mga kahanga-hangang pagbabago sa iyong code ✨
   - I-stage ang mga ito gamit ang `git add` ("Hey Git, pansinin mo ang mga pagbabagong ito!")
   - I-save ang mga ito gamit ang `git commit` at maglagay ng detalyadong mensahe (magpapasalamat ka sa sarili mo sa hinaharap!)
   - Ibahagi ang mga ito sa mundo gamit ang `git push` 🚀
   - Ulitin lang – seryoso, magiging natural na ito sa'yo!

   Gustung-gusto ko ang workflow na ito dahil parang nagkakaroon ka ng maraming save points sa isang video game. Gumawa ng pagbabago na gusto mo? I-commit ito! Gusto mong subukan ang isang risky na bagay? Walang problema – palaging maaari kang bumalik sa iyong huling commit kung may hindi maganda.

   > 💡 **Tip**: Maaaring gusto mo ring gumamit ng `.gitignore` file para maiwasan ang pag-track ng mga file na ayaw mong makita sa GitHub - tulad ng mga notes file na nasa parehong folder pero walang lugar sa isang pampublikong repository. Makakahanap ka ng mga template para sa `.gitignore` files sa [.gitignore templates](https://github.com/github/gitignore) o gumawa ng isa gamit ang [gitignore.io](https://www.toptal.com/developers/gitignore).

#### Modernong Git workflows

Isaalang-alang ang paggamit ng mga modernong praktis:

- **Conventional Commits**: Gumamit ng standardized na format ng commit message tulad ng `feat:`, `fix:`, `docs:`, atbp. Alamin pa sa [conventionalcommits.org](https://www.conventionalcommits.org/)
- **Atomic commits**: Gawin ang bawat commit na kumakatawan sa isang lohikal na pagbabago
- **Frequent commits**: Mag-commit nang madalas na may detalyadong mga mensahe kaysa sa malalaking, madalang na mga commit

#### Mga Mensahe ng Commit

Ang isang mahusay na subject line ng Git commit ay dapat makumpleto ang sumusunod na pangungusap:
Kung ipapatupad, ang commit na ito ay <ilagay ang iyong subject line dito>

Para sa subject, gumamit ng imperative, present tense: "change" hindi "changed" o "changes". 
Tulad ng sa subject, sa body (opsyonal) gumamit din ng imperative, present tense. Ang body ay dapat maglaman ng motibasyon para sa pagbabago at ikumpara ito sa nakaraang behavior. Ipinaliwanag mo ang `bakit`, hindi ang `paano`.

✅ Maglaan ng ilang minuto para mag-surf sa GitHub. Makakakita ka ba ng talagang mahusay na commit message? Makakakita ka ba ng talagang minimal na isa? Anong impormasyon ang sa tingin mo ay pinakamahalaga at kapaki-pakinabang na ipahayag sa isang commit message?

## Pakikipagtulungan sa Iba (Ang Masayang Bahagi!)

Hawakan ang iyong sombrero dahil DITO nagiging sobrang magical ang GitHub! 🪄 Na-master mo na ang pamamahala ng sarili mong code, pero ngayon papasok tayo sa paborito kong bahagi – ang makipagtulungan sa mga kahanga-hangang tao mula sa iba't ibang panig ng mundo.

Isipin ito: paggising mo bukas, may isang tao sa Tokyo na nagpa-improve ng iyong code habang natutulog ka. Tapos may isang tao sa Berlin na nag-ayos ng bug na matagal mo nang sinusubukan. Sa hapon, may developer sa São Paulo na nagdagdag ng feature na hindi mo man lang naisip. Hindi ito science fiction – ito ang normal na araw sa mundo ng GitHub!

Ang talagang nakakapagpasaya sa akin ay ang mga kasanayan sa pakikipagtulungan na matututunan mo? Ito ang mismong mga workflow na ginagamit ng mga team sa Google, Microsoft, at sa mga paborito mong startup araw-araw. Hindi ka lang natututo ng cool na tool – natututo ka ng lihim na wika na nagpapagana sa buong mundo ng software.

Seryoso, kapag naranasan mo ang saya ng may nag-merge ng una mong pull request, maiintindihan mo kung bakit sobrang passionate ang mga developer sa open source. Parang bahagi ka ng pinakamalaking, pinaka-malikhain na team project sa mundo!

> Panoorin ang video
>
> [![Git at GitHub basics video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Ang pangunahing dahilan ng paglalagay ng mga bagay sa GitHub ay upang gawing posible ang pakikipagtulungan sa ibang mga developer.

Sa iyong repository, pumunta sa `Insights > Community` para makita kung paano ikinukumpara ang iyong proyekto sa mga inirerekomendang pamantayan ng komunidad.

Gusto mo bang gawing propesyonal at welcoming ang iyong repository? Pumunta sa iyong repository at i-click ang `Insights > Community`. Ipinapakita ng cool na feature na ito kung paano ikinukumpara ang iyong proyekto sa kung ano ang itinuturing ng komunidad ng GitHub na "magandang praktis sa repository."

> 🎯 **Pagpapaganda ng Iyong Proyekto**: Ang maayos na repository na may magandang dokumentasyon ay parang malinis, welcoming na tindahan. Ipinapakita nito na pinahahalagahan mo ang iyong trabaho at nakakaengganyo sa iba na mag-ambag!

**Narito ang mga bagay na nagpapaganda sa isang repository:**

| Ano ang Idadagdag | Bakit Mahalaga | Ano ang Nagagawa Nito Para sa Iyo |
|-------------------|----------------|-----------------------------------|
| **Description** | Mahalaga ang unang impresyon! | Malalaman agad ng mga tao kung ano ang ginagawa ng iyong proyekto |
| **README** | Front page ng iyong proyekto | Parang friendly na tour guide para sa mga bagong bisita |
| **Contributing Guidelines** | Ipinapakita na welcome ang tulong | Malalaman ng mga tao kung paano sila makakatulong |
| **Code of Conduct** | Lumilikha ng friendly na espasyo | Lahat ay komportableng makilahok |
| **License** | Legal na kalinawan | Malalaman ng iba kung paano nila magagamit ang iyong code |
| **Security Policy** | Ipinapakita na responsable ka | Nagpapakita ng propesyonal na praktis |

> 💡 **Pro Tip**: Nagbibigay ang GitHub ng mga template para sa lahat ng mga file na ito. Kapag gumagawa ng bagong repository, i-check ang mga kahon para awtomatikong makabuo ng mga file na ito.

**Mga Modernong Feature ng GitHub na Tuklasin:**

🤖 **Automation & CI/CD:**
- **GitHub Actions** para sa automated testing at deployment
- **Dependabot** para sa awtomatikong pag-update ng dependency

💬 **Community & Project Management:**
- **GitHub Discussions** para sa mga pag-uusap ng komunidad na lampas sa mga isyu
- **GitHub Projects** para sa kanban-style na project management
- **Branch protection rules** para sa pagpapatupad ng mga pamantayan sa kalidad ng code

Ang lahat ng mga resource na ito ay makakatulong sa onboarding ng mga bagong miyembro ng team. At ang mga ito ay karaniwang mga bagay na tinitingnan ng mga bagong contributor bago pa man tingnan ang iyong code, upang malaman kung ang iyong proyekto ay tamang lugar para sa kanila na maglaan ng oras.

✅ Ang mga README file, bagama't nangangailangan ng oras upang ihanda, ay madalas na napapabayaan ng mga abalang tagapangalaga. Makakakita ka ba ng halimbawa ng isang partikular na detalyado? Tandaan: may ilang [mga tool para tumulong gumawa ng magagandang README](https://www.makeareadme.com/) na maaaring gusto mong subukan.

### Gawain: Mag-merge ng code

Ang mga dokumento ng kontribusyon ay tumutulong sa mga tao na mag-ambag sa proyekto. Ipinapaliwanag nito kung anong mga uri ng kontribusyon ang hinahanap mo at kung paano gumagana ang proseso. Kailangang dumaan ang mga contributor sa isang serye ng mga hakbang upang makapag-ambag sa iyong repo sa GitHub:

1. **Forking ng iyong repo** Malamang gusto mong ipa-_fork_ ang iyong proyekto sa mga tao. Ang pag-fork ay nangangahulugan ng paggawa ng kopya ng iyong repository sa kanilang GitHub profile.
1. **Clone**. Mula doon, iko-clone nila ang proyekto sa kanilang lokal na makina.
1. **Gumawa ng branch**. Gusto mong hilingin sa kanila na gumawa ng _branch_ para sa kanilang trabaho.
1. **Mag-focus sa isang lugar**. Hilingin sa mga contributor na ituon ang kanilang mga kontribusyon sa isang bagay sa bawat pagkakataon - sa ganitong paraan mas mataas ang tsansa na ma-_merge_ ang kanilang trabaho. Isipin na nagsulat sila ng bug fix, nagdagdag ng bagong feature, at nag-update ng ilang test - paano kung gusto mo, o maaari mo lang ipatupad ang 2 sa 3, o 1 sa 3 pagbabago?

✅ Isipin ang isang sitwasyon kung saan ang mga branch ay partikular na mahalaga sa pagsusulat at pagpapadala ng magandang code. Anong mga use case ang naiisip mo?

> Tandaan, maging ang pagbabago na nais mong makita sa mundo, at gumawa ng mga branch para sa sarili mong trabaho. Ang anumang mga commit na gagawin mo ay gagawin sa branch na kasalukuyan mong "naka-check out". Gamitin ang `git status` upang makita kung aling branch iyon.

Balikan natin ang workflow ng isang contributor. Ipagpalagay na ang contributor ay naka-_fork_ at naka-_clone_ na ang repo kaya mayroon na silang Git repo na handa nang trabahuin sa kanilang lokal na makina:

1. **Gumawa ng branch**. Gamitin ang command na `git branch` upang gumawa ng branch na maglalaman ng mga pagbabagong nais nilang i-ambag:

   ```bash
   git branch [branch-name]
   ```

   > 💡 **Modernong Paraan**: Maaari ka ring gumawa at lumipat sa bagong branch gamit ang isang command:
   ```bash
   git switch -c [branch-name]
   ```

1. **Lumipat sa working branch**. Lumipat sa tinukoy na branch at i-update ang working directory gamit ang `git switch`:

   ```bash
   git switch [branch-name]
   ```

   > 💡 **Modernong Paalala**: Ang `git switch` ay modernong kapalit ng `git checkout` kapag nagpapalit ng branch. Mas malinaw at mas ligtas para sa mga baguhan.

1. **Gumawa ng trabaho**. Sa puntong ito, gusto mong idagdag ang iyong mga pagbabago. Huwag kalimutang ipaalam ito sa Git gamit ang mga sumusunod na command:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   > ⚠️ **Kalidad ng Commit Message**: Siguraduhing magbigay ka ng magandang pangalan sa iyong commit, para sa iyong kapakanan at sa tagapangalaga ng repo na tinutulungan mo. Maging tiyak tungkol sa kung ano ang binago mo!

1. **Pagsamahin ang iyong trabaho sa `main` branch**. Sa isang punto, tapos ka na sa iyong trabaho at gusto mong pagsamahin ang iyong trabaho sa `main` branch. Ang `main` branch ay maaaring nagbago sa pagitan kaya siguraduhing i-update muna ito sa pinakabago gamit ang mga sumusunod na command:

   ```bash
   git switch main
   git pull
   ```

   Sa puntong ito, gusto mong tiyakin na ang anumang _conflicts_, mga sitwasyon kung saan hindi madaling ma-_combine_ ng Git ang mga pagbabago, ay mangyayari sa iyong working branch. Kaya't patakbuhin ang mga sumusunod na command:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Ang `git merge main` command ay magdadala ng lahat ng mga pagbabago mula sa `main` papunta sa iyong branch. Sana ay magpatuloy ka na lang. Kung hindi, ipapakita sa iyo ng VS Code kung saan nalilito ang Git at babaguhin mo lang ang mga apektadong file upang sabihin kung aling nilalaman ang pinaka-tama.

   💡 **Modernong Alternatibo**: Isaalang-alang ang paggamit ng `git rebase` para sa mas malinis na history:
   ```bash
   git rebase main
   ```
   Ire-replay nito ang iyong mga commit sa ibabaw ng pinakabagong main branch, na lumilikha ng linear na history.

1. **Ipadala ang iyong trabaho sa GitHub**. Ang pagpapadala ng iyong trabaho sa GitHub ay nangangahulugan ng dalawang bagay. Ang pag-push ng iyong branch sa iyong repo at pagkatapos ay magbukas ng PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Ang command sa itaas ay lumilikha ng branch sa iyong forked repo.

1. **Magbukas ng PR**. Susunod, gusto mong magbukas ng PR. Gawin mo ito sa pamamagitan ng pagpunta sa forked repo sa GitHub. Makikita mo ang isang indikasyon sa GitHub kung saan tinatanong kung gusto mong gumawa ng bagong PR, i-click mo iyon at dadalhin ka sa isang interface kung saan maaari mong baguhin ang commit message title, magbigay ng mas angkop na deskripsyon. Ngayon makikita ng tagapangalaga ng repo na na-fork mo ang PR na ito at _fingers crossed_ maa-appreciate nila at ma-_merge_ ang iyong PR. Isa ka nang contributor, yay :)

   💡 **Modernong Tip**: Maaari ka ring gumawa ng PR gamit ang GitHub CLI:
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   🔧 **Mga Best Practices para sa PRs**:
   - I-link ang mga kaugnay na isyu gamit ang mga keyword tulad ng "Fixes #123"
   - Magdagdag ng screenshots para sa mga pagbabago sa UI
   - Mag-request ng partikular na mga reviewer
   - Gumamit ng draft PRs para sa work-in-progress
   - Siguraduhing pumasa ang lahat ng mga CI check bago mag-request ng review

1. **Linisin ang mga natapos na trabaho**. Itinuturing na magandang praktis ang _clean up_ pagkatapos mong matagumpay na ma-merge ang isang PR. Gusto mong linisin ang parehong iyong lokal na branch at ang branch na na-push mo sa GitHub. Una, tanggalin ito sa lokal gamit ang sumusunod na command:

   ```bash
   git branch -d [branch-name]
   ```

   Siguraduhing pumunta sa GitHub page para sa forked repo at tanggalin ang remote branch na na-push mo dito.

Ang `Pull request` ay tila isang nakakatawang termino dahil talagang gusto mong i-push ang iyong mga pagbabago sa proyekto. Pero ang tagapangalaga (project owner) o core team ay kailangang isaalang-alang ang iyong mga pagbabago bago ito i-merge sa "main" branch ng proyekto, kaya talagang humihiling ka ng desisyon sa pagbabago mula sa tagapangalaga.

Ang pull request ay lugar para ikumpara at talakayin ang mga pagkakaiba na ipinakilala sa isang branch gamit ang mga review, komento, integrated tests, at iba pa. Ang isang mahusay na pull request ay sumusunod sa halos parehong mga patakaran tulad ng isang commit message. Maaari kang magdagdag ng reference sa isang isyu sa issue tracker, kapag ang iyong trabaho halimbawa ay nag-aayos ng isang isyu. Ginagawa ito gamit ang `#` na sinusundan ng numero ng iyong isyu. Halimbawa `#97`.
🤞Sana lahat ng pagsusuri ay pumasa at i-merge ng mga may-ari ng proyekto ang iyong mga pagbabago sa proyekto🤞

I-update ang iyong kasalukuyang lokal na working branch gamit ang lahat ng bagong commit mula sa kaukulang remote branch sa GitHub:

`git pull`

## Pag-aambag sa Open Source (Ang Iyong Pagkakataon na Magkaroon ng Epekto!)

Handa ka na ba sa isang bagay na tiyak na magpapamangha sa'yo? 🤯 Pag-usapan natin ang pag-aambag sa mga open source na proyekto – nakakakilabot lang ang ideya na ibahagi ito sa'yo!

Ito ang iyong pagkakataon na maging bahagi ng isang bagay na talagang kahanga-hanga. Isipin mong mapabuti ang mga tools na ginagamit ng milyun-milyong developer araw-araw, o maayos ang isang bug sa isang app na mahal ng mga kaibigan mo. Hindi lang ito pangarap – ito ang essence ng pag-aambag sa open source!

Ito ang nagbibigay sa akin ng kilabot tuwing iniisip ko ito: bawat tool na natutunan mo – ang code editor mo, ang mga framework na pag-aaralan natin, kahit ang browser na binabasa mo ngayon – nagsimula sa isang tao na katulad mo na gumawa ng kanilang unang kontribusyon. Ang magaling na developer na gumawa ng paborito mong VS Code extension? Dati rin siyang baguhan na nanginginig ang kamay habang nagki-click ng "create pull request," tulad ng gagawin mo.

At ito ang pinakamagandang bahagi: ang open source na komunidad ay parang pinakamalaking group hug sa internet. Karamihan sa mga proyekto ay aktibong naghahanap ng mga baguhan at may mga isyung may tag na "good first issue" na partikular para sa mga tulad mo! Ang mga maintainer ay talagang nasasabik kapag nakikita nila ang mga bagong contributor dahil naaalala nila ang kanilang sariling unang hakbang.

Hindi ka lang natututo mag-code dito – naghahanda ka na sumali sa isang pandaigdigang pamilya ng mga tagabuo na araw-araw iniisip "Paano natin mapapabuti ang digital na mundo?" Maligayang pagdating sa club! 🌟

Una, maghanap tayo ng repository (o **repo**) sa GitHub na interesado ka at kung saan gusto mong mag-ambag ng pagbabago. Kakailanganin mong kopyahin ang mga nilalaman nito sa iyong makina.

✅ Isang magandang paraan para makahanap ng 'beginner-friendly' na mga repo ay ang [maghanap gamit ang tag na 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Kopyahin ang repo sa lokal](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.tl.png)

Maraming paraan para kopyahin ang code. Isa sa mga paraan ay ang "clone" ng mga nilalaman ng repository, gamit ang HTTPS, SSH, o ang GitHub CLI (Command Line Interface).

Buksan ang iyong terminal at i-clone ang repository tulad nito:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

Para magtrabaho sa proyekto, lumipat sa tamang folder:
`cd ProjectURL`

Maaari mo ring buksan ang buong proyekto gamit ang:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - Cloud development environment ng GitHub gamit ang VS Code sa browser
- **[GitHub Desktop](https://desktop.github.com/)** - Isang GUI application para sa mga operasyon ng Git  
- **[GitHub.dev](https://github.dev)** - Pindutin ang `.` key sa anumang GitHub repo para buksan ang VS Code sa browser
- **VS Code** gamit ang GitHub Pull Requests extension

Sa huli, maaari mong i-download ang code sa isang zipped folder.

### Ilang mga kawili-wiling bagay tungkol sa GitHub

Maaari kang mag-star, mag-watch, at/o "fork" ng anumang pampublikong repository sa GitHub. Makikita mo ang iyong mga starred repositories sa drop-down menu sa kanang itaas. Parang bookmarking, pero para sa code.

Ang mga proyekto ay may issue tracker, kadalasan sa GitHub sa "Issues" tab maliban kung may ibang indikasyon, kung saan pinag-uusapan ng mga tao ang mga isyu na may kaugnayan sa proyekto. At ang Pull Requests tab ay kung saan pinag-uusapan at nire-review ang mga pagbabago na nasa proseso.

Ang mga proyekto ay maaaring may diskusyon sa mga forum, mailing lists, o chat channels tulad ng Slack, Discord, o IRC.

🔧 **Mga modernong tampok ng GitHub**:
- **GitHub Discussions** - Built-in forum para sa mga pag-uusap ng komunidad
- **GitHub Sponsors** - Suportahan ang mga maintainer sa pinansyal na paraan  
- **Security tab** - Mga ulat ng kahinaan at mga security advisories
- **Actions tab** - Tingnan ang mga automated workflows at CI/CD pipelines
- **Insights tab** - Analytics tungkol sa mga contributor, commits, at kalusugan ng proyekto
- **Projects tab** - Mga built-in na tools ng GitHub para sa project management

✅ Maglibot sa iyong bagong GitHub repo at subukan ang ilang bagay, tulad ng pag-edit ng mga setting, pagdaragdag ng impormasyon sa iyong repo, paggawa ng proyekto (tulad ng Kanban board), at pag-set up ng GitHub Actions para sa automation. Maraming magagawa!

---

## 🚀 Hamon

Alright, oras na para subukan ang iyong bagong mga superpowers sa GitHub! 🚀 Narito ang isang hamon na magpapaklik sa lahat sa pinaka-satisfying na paraan:

Kumuha ng kaibigan (o ang kapamilya mong laging nagtatanong kung ano ang ginagawa mo sa "computer stuff" na ito) at magsimula ng isang collaborative coding adventure nang magkasama! Dito nangyayari ang tunay na magic – gumawa ng proyekto, hayaan silang i-fork ito, gumawa ng ilang branches, at i-merge ang mga pagbabago tulad ng mga propesyonal na nagiging ikaw.

Hindi ko itatago – malamang na tatawa kayo sa isang punto (lalo na kapag pareho kayong nag-try na baguhin ang parehong linya), maaaring magkamot ng ulo sa pagkalito, pero tiyak na magkakaroon kayo ng mga kamangha-manghang "aha!" moments na magpapahalaga sa lahat ng natutunan. Dagdag pa, may kakaibang saya sa pagbabahagi ng unang matagumpay na merge sa iba – parang maliit na selebrasyon ng kung gaano kalayo na ang narating mo!

Wala ka pang coding buddy? Walang problema! Ang komunidad ng GitHub ay puno ng mga tao na sobrang welcoming at naaalala kung paano maging baguhan. Maghanap ng mga repository na may label na "good first issue" – para bang sinasabi nila "Hey beginners, tara mag-aral tayo!" Ang galing, di ba?

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/en/)

## Review & Patuloy na Matuto

Whew! 🎉 Tingnan mo – na-master mo na ang mga basics ng GitHub na parang isang tunay na champion! Kung pakiramdam mo ay puno na ang utak mo ngayon, normal lang 'yan at sa totoo lang, magandang senyales. Natutunan mo ang mga tools na inabot ako ng ilang linggo para maging komportable noong nagsimula ako.

Ang Git at GitHub ay sobrang makapangyarihan (tulad ng, sobrang makapangyarihan), at bawat developer na kilala ko – kabilang ang mga mukhang wizard na ngayon – ay kailangang magpraktis at magkamali bago nila lubos na maunawaan. Ang katotohanan na natapos mo ang lesson na ito ay nangangahulugang nasa tamang landas ka na para ma-master ang ilan sa pinakamahalagang tools sa toolkit ng isang developer.

Narito ang ilang napakagandang resources para matulungan kang magpraktis at maging mas magaling pa:

- [Contributing to open source software guide](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Ang iyong roadmap para gumawa ng pagbabago
- [Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/) – Laging handy para sa mabilisang reference!

At tandaan: ang practice ay nagdudulot ng progreso, hindi perpeksyon! Habang mas ginagamit mo ang Git at GitHub, mas nagiging natural ito. Ang GitHub ay lumikha ng ilang kamangha-manghang interactive courses na magpapahintulot sa'yo na magpraktis sa isang ligtas na kapaligiran:

- [Introduction to GitHub](https://github.com/skills/introduction-to-github)
- [Communicate using Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Managing merge conflicts](https://github.com/skills/resolve-merge-conflicts)

**Gusto mo bang mag-explore pa? Subukan ang mga modernong tools na ito:**
- [GitHub CLI documentation](https://cli.github.com/manual/) – Para maramdaman mong isa kang command-line wizard
- [GitHub Codespaces documentation](https://docs.github.com/en/codespaces) – Mag-code sa cloud!
- [GitHub Actions documentation](https://docs.github.com/en/actions) – I-automate ang lahat ng bagay
- [Git best practices](https://www.atlassian.com/git/tutorials/comparing-workflows) – I-level up ang iyong workflow game 

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode para tapusin ang sumusunod na hamon:

**Deskripsyon:** Gumawa ng collaborative web development project na nagpapakita ng kumpletong GitHub workflow na natutunan mo sa lesson na ito. Ang hamon na ito ay makakatulong sa'yo na magpraktis ng repository creation, collaboration features, at modern Git workflows sa isang real-world na sitwasyon.

**Prompt:** Gumawa ng bagong pampublikong GitHub repository para sa isang simpleng "Web Development Resources" na proyekto. Ang repository ay dapat may maayos na naka-structure na README.md file na naglilista ng mga kapaki-pakinabang na web development tools at resources, na naka-organize ayon sa kategorya (HTML, CSS, JavaScript, etc.). I-set up ang repository na may tamang community standards kabilang ang isang lisensya, contributing guidelines, at code of conduct. Gumawa ng hindi bababa sa dalawang feature branches: isa para sa pagdaragdag ng CSS resources at isa para sa JavaScript resources. Gumawa ng mga commit sa bawat branch na may mga descriptive commit messages, pagkatapos ay gumawa ng mga pull requests para i-merge ang mga pagbabago pabalik sa main. I-enable ang mga tampok ng GitHub tulad ng Issues, Discussions, at mag-set up ng basic na GitHub Actions workflow para sa automated checks.

## Assignment 

Ang iyong misyon, kung pipiliin mong tanggapin ito: Tapusin ang [Introduction to GitHub](https://github.com/skills/introduction-to-github) course sa GitHub Skills. Ang interactive na course na ito ay magpapahintulot sa'yo na magpraktis ng lahat ng natutunan mo sa isang ligtas, guided na kapaligiran. Dagdag pa, makakakuha ka ng cool na badge kapag natapos mo ito! 🏅

**Handa ka na ba para sa mas maraming hamon?**
- I-set up ang SSH authentication para sa iyong GitHub account (wala nang password!)
- Subukan ang paggamit ng GitHub CLI para sa iyong pang-araw-araw na Git operations
- Gumawa ng repository na may GitHub Actions workflow
- I-explore ang GitHub Codespaces sa pamamagitan ng pagbukas ng mismong repository na ito sa isang cloud-based editor

Tandaan: bawat eksperto ay minsang naging baguhan. Kaya mo 'to! 💪

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.