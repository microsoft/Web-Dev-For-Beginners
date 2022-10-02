# GitHub-a giriş

Bu dərs kodunuza dəyişiklikləri qəbul etmək və idarə etmək üçün platforma olan GitHub-un əsaslarını əhatə edir.

![GitHub-a giriş](../../sketchnotes/webdev101-github.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Mühazirə öncəsi Viktorina
[Mühazirə öncəsi viktorina](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## Giriş

Bu dərsdə biz bunları əhatə edəcəyik:

- maşınınızda gördüyünüz işi izləmək
- başqaları ilə layihələr üzərində işləmək
- açıq mənbə proqram təminatına necə töhfə vermək olar

### İlkin şərtlər

Başlamazdan əvvəl Git-in quraşdırılıb-qurulmadığını yoxlamaq lazımdır. Terminal tipində:
`git --versiya`

Git quraşdırılmayıbsa, [Git-i endirin](https://git-scm.com/downloads). Sonra terminalda yerli Git profilinizi qurun:
* `git config --qlobal user.name "your-name"`
* `git config --qlobal user.email "your-email"`

Git-in artıq konfiqurasiya edilib-edilmədiyini yoxlamaq üçün aşağıdakıları yaza bilərsiniz:
`git config --list`

Sizə həmçinin GitHub hesabına, kod redaktoruna (Visual Studio Code kimi) ehtiyacınız olacaq və siz terminalınızı (və ya: əmr satırı) açmalısınız.

[github.com](https://github.com/) səhifəsinə keçin və əgər hələ belə etməmisinizsə hesab yaradın və ya daxil olub profilinizi doldurun.

✅ GitHub dünyada yeganə kod anbarı deyil; başqaları da var, lakin GitHub ən yaxşı tanınır

### Hazırlıq

Sizə həm yerli maşınınızda (noutbuk və ya kompüterinizdə) kod layihəsi olan qovluğa, həm də GitHub-da başqalarının layihələrinə necə töhfə verəcəyinizə nümunə olacaq ictimai depoya ehtiyacınız olacaq.

---

## Kodun idarə edilməsi

Deyək ki, sizdə hansısa kod layihəsi olan bir qovluq var və siz git - versiyaya nəzarət sistemindən istifadə edərək tərəqqinizi izləməyə başlamaq istəyirsiniz. Bəzi insanlar gitdən istifadəni gələcək özünə sevgi məktubu yazmaqla müqayisə edirlər. Günlər, həftələr və ya aylar sonra öhdəçilik mesajlarınızı oxuyaraq, niyə qərar verdiyinizi və ya dəyişikliyi "geri qaytardığınızı" xatırlaya biləcəksiniz, yəni yaxşı "təhsil mesajları" yazdığınız zaman.

### Tapşırıq: Anbar yaradın və kodu qəbul edin

> Videoya baxın
>
> [![Git və GitHub əsasları videosu](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)


1. **GitHub-da repozitoriya yaradın**. GitHub.com saytında, depolar sekmesinde və ya yuxarı sağdakı naviqasiya çubuğunda **yeni repo** düyməsini tapın.

   1. Repozitoriyanıza (qovluqunuza) ad verin
   1. **repository yaratmaq** seçin.

1. **İş qovluğunuza gedin**. Terminalınızda izləməyə başlamaq istədiyiniz qovluğa (kataloq kimi də tanınır) keçin. Növ:

   ``` bash
   cd [qovluqunuzun adı]
   ```

1. **Git repozitoriyasını işə salın**. Layihə növündə:

   ``` bash
   git init
   ```

1. **Statusu yoxlayın**. Repozitor tipinizin vəziyyətini yoxlamaq üçün:

   ``` bash
   git statusu
   ```

   çıxış belə görünə bilər:

   ``` çıxış
   Təhvil verilməmiş dəyişikliklər:
   (təhsil ediləcəkləri yeniləmək üçün "git add <file>..." istifadə edin)
   (iş kataloqunda dəyişiklikləri ləğv etmək üçün "git checkout -- <file>..." istifadə edin)

        dəyişdirilmiş: file.txt
        dəyişdirilmiş: file2.txt
   ```

   Tipik olaraq, `git status` əmri sizə hansı faylların repoda saxlanmağa hazır olduğunu və ya onlarda davam etmək istəyə biləcəyiniz dəyişiklikləri bildirir.

1. **İzləmə üçün bütün faylları əlavə edin**
   Buna səhnələşdirmə faylları / quruluş sahəsinə fayl əlavə etmək də deyilir.

   ``` bash
   git əlavə et.
   ```

   `git add` plus`.` arqumenti bütün fayllarınızın və dəyişikliklərinizin izlənildiyini göstərir.

1. **İzləmə üçün seçilmiş faylları əlavə edin**

   ``` bash
   git əlavə edin [fayl və ya qovluq adı]
   ```

   Bu, bütün faylları bir anda qəbul etmək istəmədiyimiz zaman səhnə sahəsinə yalnız seçilmiş faylları əlavə etməyə kömək edir.

1. **Bütün faylları ləğv edin**

   ``` bash
   git sıfırla
   ```

   Bu əmr bizə bütün faylları bir anda ləğv etməyə kömək edir.

1. **Müəyyən bir faylı ləğv edin**

   ``` bash
   git reset [fayl və ya qovluq adı]
   ```

   Bu əmr bizə yalnız növbəti öhdəliyə daxil etmək istəmədiyimiz xüsusi faylı bir anda ləğv etməyə kömək edir.

1. **İşinizi davam etdirmək**. Bu nöqtədə siz faylları _staging sahəsi_ adlanan yerə əlavə etdiniz. Git-in fayllarınızı izlədiyi yer. Dəyişikliyi qalıcı etmək üçün faylları _təhsil etməlisiniz. Bunun üçün siz `git commit` əmri ilə _commit_ yaratmalısınız. _commit_ repo tarixində qənaət nöqtəsini təmsil edir. _commit_ yaratmaq üçün aşağıdakıları yazın:

   ``` bash
   git commit -m "ilk öhdəlik"
   ```

   Bu, "ilk öhdəliyin" mesajını əlavə edərək bütün fayllarınızı öhdəsinə götürür. Gələcək öhdəçilik mesajları üçün, hansı növ dəyişikliyi etdiyinizi çatdırmaq üçün təsvirinizdə daha təsvirli olmaq istərdiniz.

1. **Yerli Git repo-nu GitHub ilə birləşdirin**. Git repo sizin maşınınızda yaxşıdır, lakin nə vaxtsa siz fayllarınızın ehtiyat nüsxəsini haradasa saxlamaq və digər insanları repoda sizinlə işləməyə dəvət etmək istəyirsiniz. Bunu etmək üçün belə gözəl yerlərdən biri GitHub-dır. Unutmayın ki, biz artıq GitHub-da repo yaratmışıq, ona görə etməli olduğumuz yeganə şey yerli Git repo-muzu GitHub ilə əlaqələndirməkdir. `git remote add` əmri məhz bunu edəcək.
aşağıdakı əmri verin:

   > Qeyd edək ki, əmri yazmadan əvvəl anbar URL-ni tapmaq üçün GitHub repo səhifənizə keçin. Aşağıdakı əmrdə istifadə edəcəksiniz. ```https://github.com/username/repository_name.git``` GitHub URL ilə əvəz edin.

   ``` bash
   git uzaqdan mənşəyi əlavə edin https://github.com/username/repository_name.git
   ```

   Bu, əvvəllər yaratdığınız GitHub repozitoriyasına işarə edən "mənşə" adlı _remote_ və ya əlaqə yaradır.

1. **Lokal faylları GitHub-a göndərin**. İndiyə qədər siz yerli repo ilə GitHub repo arasında _bağlantı yaratmısınız. Gəlin bu faylları aşağıdakı `git push` əmri ilə GitHub-a göndərək, məsələn:
   
   > Qeyd edək ki, filialınızın adı standart olaraq ```əsas```dən fərqli ola bilər.

   ``` bash
   git push -u mənşəli əsas
   ```

   Bu, "əsas" filialınızdakı öhdəliklərinizi GitHub-a göndərir.

2. **Daha çox dəyişiklik əlavə etmək üçün**. Dəyişikliklər etməyə və onları GitHub-a itələməyə davam etmək istəyirsinizsə, sadəcə olaraq aşağıdakı üç əmrdən istifadə etməlisiniz:

   ``` bash
   git əlavə et.
   git commit -m "məsləhət mesajınızı bura yazın"
   git push
   ```

   > İpucu, Siz həmçinin izləmək istəmədiyiniz faylların GitHub-da görünməsinin qarşısını almaq üçün `.gitignore` faylı qəbul etmək istəyə bilərsiniz - eyni qovluqda saxladığınız, lakin ictimai repozitoriyada yeri olmayan qeydlər faylı kimi. Siz `.gitignore` faylları üçün şablonları [.gitignore şablonlarında](https://github.com/github/gitignore) tapa bilərsiniz.

#### Mesajları qəbul edin

Böyük Git commit mövzu xətti aşağıdakı cümləni tamamlayır:
Tətbiq edilərsə, bu öhdəlik <burada mövzu xəttiniz> olacaq

Mövzu üçün imperativdən, indiki zamandan istifadə edin: "dəyişiklik" deyil, "dəyişikliklər" və ya "dəyişikliklər".
Mövzuda olduğu kimi, bədəndə də (isteğe bağlı) əmr, indiki zamandan istifadə edin. Bədən dəyişiklik üçün motivasiyanı ehtiva etməli və bunu əvvəlki davranışla müqayisə etməlidir. Siz 'necə' deyil, 'niyə' izah edirsiniz.

✅ GitHub ətrafında sörf etmək üçün bir neçə dəqiqənizi ayırın. Həqiqətən böyük bir öhdəlik mesajı tapa bilərsinizmi? Həqiqətən minimal birini tapa bilərsinizmi? Sizcə, öhdəlik mesajında ​​ötürmək üçün ən vacib və faydalı məlumat hansıdır?

### Tapşırıq: Əməkdaşlıq

GitHub-a əşyalar yerləşdirməyin əsas səbəbi digər tərtibatçılarla əməkdaşlığı mümkün etmək idi.

## Başqaları ilə layihələr üzərində işləmək

> Videoya baxın
>
> [![Git və GitHub əsasları videosu](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8 )

Layihənizin tövsiyə olunan icma standartları ilə necə müqayisə olunduğunu görmək üçün deponuzda "İnsanlar > İcma" bölməsinə keçin.

   GitHub repo-nu təkmilləşdirə biləcək bəzi şeylər bunlardır:
   - **Təsvir**. Layihəniz üçün təsvir əlavə etmisiniz?
   - **README**. README əlavə etmisiniz? GitHub [README] (https://docs.github.com/articles/about-readmes/) yazmaq üçün təlimat təqdim edir.
   - **Töhfə təlimatı**. Layihənizdə [töhfə verən təlimatlar](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/) varmı?
   - **Davranış Kodeksi**. a [Davranış Kodeksi](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/),
   - **Lisenziya**. Bəlkə də ən əsası, [lisenziya](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Bütün bu resurslar yeni komanda üzvlərinin işə cəlb edilməsindən faydalanacaq. Və bunlar adətən layihənizin vaxtlarını keçirmək üçün doğru yer olub-olmadığını öyrənmək üçün kodunuza baxmazdan əvvəl yeni töhfə verənlərin baxdıqları şeylərdir.

✅ README faylları, hazırlamaq üçün vaxt tələb etsə də, çox vaxt məşğul olanlar tərəfindən diqqətdən kənarda qalır. Xüsusilə təsviri bir nümunə tapa bilərsinizmi? Qeyd: cəhd edə biləcəyiniz bəzi [yaxşı README-lər yaratmağa kömək edəcək alətlər](https://www.makereadme.com/) var.

### Tapşırıq: Bəzi kodu birləşdirin

Töhfə verən sənədlər insanlara layihəyə töhfə verməyə kömək edir. Bu, axtardığınız töhfələrin hansı növlərini və prosesin necə işlədiyini izah edir. GitHub-da repoya töhfə verə bilmək üçün töhfə verənlər bir sıra addımlardan keçməlidirlər:


1. **Repo-nu çəngəlləmək** Çox güman ki, insanların layihənizi _çəngəlləməsini istəyəcəksiniz. Forking onların GitHub profilində anbarınızın replikasını yaratmaq deməkdir.
1. **Klon**. Oradan onlar layihəni yerli maşınlarına klonlayacaqlar.
1. **Filial yaradın**. Siz onlardan öz işləri üçün _filial yaratmalarını xahiş edəcəksiniz.
1. **Dəyişikliklərini bir sahəyə yönəldin**. Əmanətçilərdən öz töhfələrini hər dəfə bir şeyə cəmləmələrini xahiş edin - beləliklə, onların işində _birləşmək şansınız daha yüksəkdir. Təsəvvür edin ki, onlar bir səhv düzəliş yazırlar, yeni funksiya əlavə edirlər və bir neçə testi yeniləyirlər - əgər siz istəsəniz və ya yalnız 3-dən 2-ni və ya 3-dən 1-ni həyata keçirə bilsəniz necə olacaq?

✅ Filialların yaxşı kodun yazılması və göndərilməsi üçün xüsusilə vacib olduğu bir vəziyyəti təsəvvür edin. Hansı istifadə hallarını düşünə bilərsiniz?

> Qeyd edək ki, dünyada görmək istədiyiniz dəyişiklik olun və öz işiniz üçün də filiallar yaradın. Etdiyiniz hər hansı öhdəliklər hazırda “yoxlandığınız” filialda ediləcək. Hansı filialı görmək üçün `git status` istifadə edin.
> yəni.

Gəlin töhfə verən iş prosesindən keçək. Fərz edək ki, ianəçi artıq reponu _forked və _klonlaşdırıb ki, onların yerli maşınlarında işləməyə hazır Git repo olsun:

1. **Filial yaradın**. Dəyişiklikləri ehtiva edən filial yaratmaq üçün "git filialı" əmrindən istifadə edin:

   ``` bash
   git filialı [filial adı]
   ```

1. **İş filialına keçin**. Göstərilən filiala keçin və `git switch` ilə iş qovluğunu yeniləyin:

   ``` bash
   git switch [filial adı]
   ```

1. **İşlə məşğul olun**. Bu nöqtədə dəyişikliklərinizi əlavə etmək istəyirsiniz. Git-ə bu barədə aşağıdakı əmrlərlə məlumat verməyi unutmayın:

   ``` bash
   git əlavə et.
   git commit -m "dəyişikliklərim"
   ```

   Həm sizin, həm də kömək etdiyiniz repo sahibinin xatirinə öhdəliyinizə yaxşı bir ad verdiyinizə əmin olun.

1. **İşinizi “əsas” filialla birləşdirin**. Bir anda işinizi bitirdiniz və işinizi “əsas” filialın işi ilə birləşdirmək istəyirsiniz. Bu vaxt 'əsas' filial dəyişmiş ola bilər, ona görə də əvvəlcə aşağıdakı əmrlərlə onu ən son versiyaya yeniləməyinizə əmin olun:

   ``` bash
   git əsas keçid
   git çəkin
   ```

   Bu nöqtədə əmin olmaq istərdiniz ki, hər hansı _münaqişələrin_, Git-in asanlıqla birləşdirə bilmədiyi vəziyyətlərdə dəyişikliklərin sizin iş bölmənizdə baş verməsi. Buna görə də aşağıdakı əmrləri yerinə yetirin:

   ``` bash
   git keçidi [filial_adı]
   git merge main
   ```

   Bu, "əsas"dan filialınıza bütün dəyişiklikləri gətirəcək və ümid edirəm ki, siz davam edə bilərsiniz. Əgər belə deyilsə, VS Kodu sizə Git-in harada _qarışıq olduğunu söyləyəcək və siz hansı məzmunun daha dəqiq olduğunu söyləmək üçün təsirlənmiş faylları dəyişdirirsiniz.

1. **İşinizi GitHub-a göndərin**. İşinizi GitHub-a göndərmək iki şey deməkdir. Filialınızı repoya itələyin və sonra bir PR açın, Pull Sorğu.

   ``` bash
   git push --set-upstream mənşəyi [filial adı]
   ```

   Yuxarıdakı əmr çəngəlli repoda filial yaradır.

1. **PR açın**. Sonra, bir PR açmaq istəyirsən. Bunu GitHub-da çəngəlli repoya keçməklə edirsiniz. Siz GitHub-da yeni PR yaratmaq istəyib-istəmədiyinizi soruşan bir işarə görəcəksiniz, onu klikləyirsiniz və siz öhdəçilik mesajının başlığını dəyişdirə, ona daha uyğun təsvir verə biləcəyiniz bir interfeysə keçirsiniz. İndi çəngəllədiyiniz repo sahibi bu PR-ı görəcək və _barmaqları çarpazlaşacaqlar_ onlar qiymətləndirəcək və PR-nizi birləşdirəcəklər. Siz indi töhfə verənsiniz, ay :)

1. **Təmizləyin**. PR-ı uğurla birləşdirdikdən sonra təmizlənmək yaxşı təcrübə hesab olunur. Siz həm yerli filialınızı, həm də GitHub-a itələdiyiniz filialı təmizləmək istəyirsiniz. Əvvəlcə onu aşağıdakı əmrlə yerli olaraq silək:

   ``` bash
   git filialı -d [filial adı]
   ```

   Sonrakı çəngəlli repo üçün GitHub səhifəsinə getdiyinizə əmin olun və yenicə itələdiyiniz uzaq filialı çıxarın.

“Çəkmə sorğusu” axmaq bir termin kimi görünür, çünki həqiqətən siz layihəyə dəyişikliklərinizi təkan vermək istəyirsiniz. Lakin baxıcı (layihə sahibi) və ya əsas komanda dəyişikliklərinizi layihənin "əsas" filialı ilə birləşdirməzdən əvvəl nəzərə almalıdır, ona görə də siz həqiqətən də baxıcıdan dəyişiklik qərarını tələb edirsiniz.

Çəkmə sorğusu filialda təqdim olunan fərqləri rəylər, şərhlər, inteqrasiya edilmiş testlər və sairlə müqayisə etmək və müzakirə etmək üçün yerdir. Yaxşı çəkmə sorğusu təqribən öhdəçilik mesajı ilə eyni qaydalara əməl edir. Məsələn, işiniz problemi həll etdikdə, problem izləyicisində problemə istinad əlavə edə bilərsiniz. Bu, probleminizin nömrəsindən sonra `#` işarəsi ilə edilir. Məsələn, `#97`.

🤞Bütün yoxlamalardan keçdiyini və layihənin sahiblərinin dəyişikliklərinizi layihədə birləşdirdiyinə əmin olun🤞

GitHub-da müvafiq uzaq filialdan gələn bütün yeni öhdəliklərlə cari yerli işçi filialınızı yeniləyin:

`git pull`

## Açıq mənbəyə necə töhfə vermək olar

Əvvəlcə GitHub-da sizi maraqlandıran və dəyişikliyə töhfə vermək istədiyiniz anbarı (və ya **repo**) tapaq. Onun məzmununu maşınınıza köçürmək istəyəcəksiniz.

✅ 'Başlanğıclar üçün uyğun' repo tapmaq üçün yaxşı yol ['yaxşı-ilk-isue' etiketi ilə axtarış etməkdir](https://github.blog/2020-01-22-browse-good-first-issues- açıq mənbəyə töhfə verməyə-başlamaq/).

![Repo yerli olaraq kopyalayın](images/clone_repo.png)

Kodu köçürməyin bir neçə yolu var. Bir yol, HTTPS, SSH və ya GitHub CLI (Command Line Interface) istifadə edərək, deponun məzmununu "klonlaşdırmaq"dır.

Terminalınızı açın və deponu belə klonlayın:
`git clone https://github.com/ProjectURL`

Layihə üzərində işləmək üçün sağ qovluğa keçin:
`cd ProjectURL`

Siz həmçinin [Codespaces](https://github.com/features/codespaces), GitHub-un daxil edilmiş kod redaktoru / bulud inkişaf mühiti və ya [GitHub Desktop](https://desktop.github.com/) istifadə edərək bütün layihəni aça bilərsiniz. ).

Nəhayət, kodu sıxılmış qovluğa yükləyə bilərsiniz.

### GitHub haqqında daha bir neçə maraqlı şey

Siz GitHub-da istənilən ictimai deponu ulduzlaya, izləyə və/və ya "çəngəllə" bilərsiniz. Ulduzlu anbarlarınızı yuxarı sağdakı açılan menyuda tapa bilərsiniz. Bu, əlfəcinlərə bənzəyir, lakin kod üçün.
obyektlərin problem izləyicisi var, əsasən GitHub-da "Məsələlər" sekmesinde, başqa cür göstərilmədiyi təqdirdə, insanlar layihə ilə bağlı məsələləri müzakirə edirlər. Pull Sorğular sekmesi insanların davam edən dəyişiklikləri müzakirə etdiyi və nəzərdən keçirdiyi yerdir.

Layihələr forumlarda, poçt siyahılarında və ya Slack, Discord və ya IRC kimi söhbət kanallarında da müzakirə oluna bilər.

✅ Yeni GitHub repo-nuza nəzər salın və parametrləri redaktə etmək, repoya məlumat əlavə etmək və layihə yaratmaq (Kanban lövhəsi kimi) kimi bir neçə şeyi sınayın. Edə biləcəyiniz çox şey var!

---

## 🚀 Çağırış

Bir-birinizin kodu üzərində işləmək üçün dostunuzla cütləşin. Birgə layihə yaradın, kodu kəsin, filiallar yaradın və dəyişiklikləri birləşdirin.

## Mühazirədən Sonra Viktorina
[Mühazirədən sonrakı viktorina](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)

## İcmal və Özünü Tədqiqat

[Açıq mənbəli proqram təminatına töhfə vermək] (https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) haqqında ətraflı oxuyun.

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Təcrübə, məşq, məşq. GitHub [lab.github.com](https://lab.github.com/) vasitəsilə əla öyrənmə yollarına malikdir:

- [GitHub-da İlk Həftə](https://lab.github.com/githubtraining/first-week-on-github)

Siz həmçinin daha təkmil laboratoriyalar tapa bilərsiniz.

## Tapşırıq

[GitHub təlim laboratoriyasında Birinci Həftəni] tamamlayın (https://lab.github.com/githubtraining/first-week-on-github)
