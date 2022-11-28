# GitHub'a Giriş

Bu ders, kodunuzdaki değişiklikleri barındırmak ve yönetmek için bir platform olan GitHub'ın temellerini kapsar.

![GitHub'a Giriş](../../sketchnotes/webdev101-github.png)
> [Tomomi Imura] tarafından hazırlanan Sketchnote(https://twitter.com/girlie_mac)

## Ders Öncesi Sınav
[Ders öncesi sınav](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/3)

## Giriiş

Bu derste şunları ele alacağız:

- makinenizde yaptığınız işi takip etme
- başkalarıyla projeler üzerinde çalışmak
- açık kaynaklı yazılıma nasıl katkıda bulunulur

### Önkoşullar

Başlamadan önce Git'in kurulu olup olmadığını kontrol etmeniz gerekir. Terminal tipinde:
`git --version`

Git kurulu değilse [Git'i indirin](https://git-scm.com/downloads). Ardından, yerel Git profilinizi terminalde ayarlayın:
* `git config --global user.name "adınız"`
* `git config --global user.email "e-postanız"`

Git'in önceden yapılandırılmış olup olmadığını kontrol etmek için şunu yazabilirsiniz:
`git config --list`

Ayrıca bir GitHub hesabına, bir kod düzenleyiciye (Visual Studio Code gibi) ihtiyacınız olacak ve terminalinizi (veya: komut istemini) açmanız gerekecek.

[github.com](https://github.com/) adresine gidin ve henüz yapmadıysanız bir hesap oluşturun veya giriş yapın ve profilinizi doldurun.

✅ GitHub dünyadaki tek kod deposu değil; başkaları da var ama GitHub en çok bilineni

### Hazırlık

Hem yerel makinenizde (dizüstü bilgisayar veya PC) kod projesi olan bir klasöre hem de GitHub'da başkalarının projelerine nasıl katkıda bulunacağınıza örnek teşkil edecek bir genel havuza ihtiyacınız olacak.

---

## Kod yönetimi

Diyelim ki yerel olarak bir kod projesi içeren bir klasörünüz var ve sürüm kontrol sistemi olan git'i kullanarak ilerlemenizi izlemeye başlamak istiyorsunuz. Bazı insanlar git'i gelecekteki benliğinize bir aşk mektubu yazmaya benzetiyor. Taahhüt mesajlarınızı günler, haftalar veya aylar sonra okuyarak, neden bir karar verdiğinizi veya bir değişikliği "geri aldığınız" - yani, iyi "kabul mesajları" yazdığınızda hatırlayabileceksiniz.

### Görev: Bir depo oluşturun ve kod verin

> Videoya göz atın
>
> [![Git ve GitHub temel bilgileri videosu](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)


1. **GitHub'da depo oluşturun**. GitHub.com'da, depolar sekmesinde veya sağ üstteki gezinme çubuğundan **yeni depo** düğmesini bulun.

   1. Deponuza (klasörünüze) bir ad verin
   1. **Depo oluştur**'u seçin.

1. **Çalışma klasörünüze gidin**. Terminalinizde, izlemeye başlamak istediğiniz klasöre (dizin olarak da bilinir) geçin. Tip:

   ```bash
   cd [klasörünüzün adı]
   ```

1. **Git deposunu başlatın**. Proje türünüzde:

   ```bash
   git init
   ```

1. **Durumu kontrol edin**. Depo türünüzün durumunu kontrol etmek için:

   ```bash
   git durumu
   ```

   çıktı şöyle görünebilir:

   '''' çıktı
   Taahhüt için hazırlanmayan değişiklikler:
   (taahhüt edilecekleri güncellemek için "git add <file>..." kullanın)
   (çalışma dizinindeki değişiklikleri atmak için "git checkout -- <file>..." kullanın)

        değiştirildi: dosya.txt
        değiştirildi: file2.txt
   ```

   Tipik olarak bir 'git status' komutu, hangi dosyaların depoya _kaydedilmeye hazır olduğu veya üzerinde devam etmek isteyebileceğiniz değişiklikler olduğu gibi şeyler söyler.

1. **İzleme için tüm dosyaları ekleyin**
   Bu aynı zamanda hazırlama dosyaları/hazırlama alanına dosya ekleme olarak da adlandırılır.

   ```bash
   git ekle.
   ```

   `git add` artı `.` argümanı, tüm dosyalarınızın ve değişikliklerinizin izlenmek üzere olduğunu gösterir.

1. **Seçilen dosyaları izleme için ekleyin**

   ```bash
   git add [dosya veya klasör adı]
   ```

   Bu, tüm dosyaları bir kerede işlemek istemediğimizde hazırlama alanına yalnızca seçilen dosyaları eklememize yardımcı olur.

1. **Tüm dosyaların aşamasını kaldırın**

   ```bash
   git sıfırlama
   ```

   Bu komut, tüm dosyaları bir kerede kaldırmamıza yardımcı olur.

1. **Belirli bir dosyanın aşamasını kaldırın**

   ```bash
   git reset [dosya veya klasör adı]
   ```

   Bu komut, bir sonraki işleme dahil etmek istemediğimiz bir kerede yalnızca belirli bir dosyayı sahneden çıkarmamıza yardımcı olur.

1. **İşinize devam etmek**. Bu noktada dosyaları sözde _evreleme alanına_ eklediniz. Git'in dosyalarınızı izlediği bir yer. Değişikliği kalıcı hale getirmek için dosyaları _commit_ yapmanız gerekir. Bunu yapmak için 'git commit' komutuyla bir _commit_ oluşturursunuz. Bir _commit_, deponuzun geçmişinde bir tasarruf noktasını temsil eder. Bir _commit_ oluşturmak için aşağıdakini yazın:

```bash
   git commit -m "ilk taahhüt"
   ```

   Bu, "ilk taahhüt" mesajını ekleyerek tüm dosyalarınızı taahhüt eder. Gelecekteki taahhüt mesajları için, yaptığınız değişikliğin türünü belirtmek için açıklamanızda daha açıklayıcı olmak isteyeceksiniz.

1. **Yerel Git deponuzu GitHub ile bağlayın**. Bir Git deposu makinenizde iyidir, ancak bir noktada dosyalarınızı bir yerde yedeklemek ve diğer insanları deponuzda sizinle birlikte çalışmaya davet etmek istersiniz. Bunu yapmak için harika bir yer GitHub. GitHub'da zaten bir repo oluşturduğumuzu unutmayın, bu nedenle yapmamız gereken tek şey yerel Git depomuzu GitHub'a bağlamak. `git remote add` komutu tam da bunu yapacaktır. Aşağıdaki komutu yazın:

   > Not, komutu yazmadan önce depo URL'sini bulmak için GitHub depo sayfanıza gidin. Aşağıdaki komutta kullanacaksınız. ```https://github.com/username/repository_name.git``` kısmını GitHub URL'nizle değiştirin.

   ```bash
   git uzaktan kaynak ekle https://github.com/username/repository_name.git
   ```

   Bu, daha önce oluşturduğunuz GitHub deposunu işaret eden "Origin" adlı bir _remote_ veya bağlantı oluşturur.

1. **Yerel dosyaları GitHub'a gönderin**. Şimdiye kadar yerel depo ile GitHub deposu arasında bir _bağlantı_ oluşturdunuz. Bu dosyaları aşağıdaki gibi `git push` komutu ile GitHub'a gönderelim:
   
   > Şube adınız varsayılan olarak ```main```den farklı olabilir.

   ```bash
   git push -u kökenli ana
   ```

   Bu, "ana" şubenizdeki taahhütlerinizi GitHub'a gönderir.

2. **Daha fazla değişiklik eklemek için**. Değişiklik yapmaya ve bunları GitHub'a göndermeye devam etmek istiyorsanız, aşağıdaki üç komutu kullanmanız yeterlidir:

   ```bash
   git ekle.
   git commit -m "taahhüt mesajınızı buraya yazın"
   git itme
   ```

   > İpucu, İzlemek istemediğiniz dosyaların GitHub'da görünmesini önlemek için bir ".gitignore" dosyası da benimsemek isteyebilirsiniz - tıpkı aynı klasörde sakladığınız ancak genel bir depoda yeri olmayan notlar dosyası gibi. ".gitignore" dosyaları için şablonları [.gitignore şablonlarında](https://github.com/github/gitignore) bulabilirsiniz.

#### Mesaj gönder

Harika bir Git taahhüt konu satırı aşağıdaki cümleyi tamamlar:
Uygulanırsa, bu taahhüt <konu satırınız burada> olacaktır.

Konu için emir kipi, şimdiki zaman kullanın: "değişim" "değişmedi" veya "değişiklikler" değil.
Konuda olduğu gibi bedende de (isteğe bağlı) emir kipi, şimdiki zaman kullanılır. Vücut, değişim için motivasyonu içermeli ve bunu önceki davranışla karşılaştırmalıdır. "Nasıl"ı değil, "neden"i açıklıyorsunuz.

✅ GitHub'da gezinmek için birkaç dakikanızı ayırın. Gerçekten harika bir taahhüt mesajı bulabilir misin? Gerçekten minimal bir tane bulabilir misin? Bir taahhüt mesajında ​​iletilmesi gereken en önemli ve faydalı bilgilerin hangileri olduğunu düşünüyorsunuz?

### Görev: İşbirliği yapın

GitHub'a bir şeyler koymanın ana nedeni, diğer geliştiricilerle işbirliği yapmayı mümkün kılmaktı.

## Başkalarıyla projeler üzerinde çalışmak

> Videoya göz atın
>
> [![Git ve GitHub temel bilgileri videosu](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8 )

Projenizin önerilen topluluk standartlarıyla nasıl karşılaştırıldığını görmek için havuzunuzda 'Insights > Community'ye gidin.

   GitHub deponuzu iyileştirebilecek bazı şeyler şunlardır:
   - **Tanım**. Projeniz için bir açıklama eklediniz mi?
   - **BENİ OKU**. README eklediniz mi? GitHub, [BENİOKU](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon) yazmak için rehberlik sağlar.
   - **Katkıda bulunan kılavuz**. Projenizin [katkıda bulunan yönergeleri](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon) var mı?
   - **Davranış kodu**. a [Davranış Kuralları](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/),
   - **Lisans**. Belki de en önemlisi, bir [lisans](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Tüm bu kaynaklar, yeni ekip üyelerinin işe alınmasında fayda sağlayacaktır. Bunlar genellikle yeni katkıda bulunanların, projenizin zamanlarını harcamak için doğru yer olup olmadığını öğrenmek için kodunuza bakmadan önce baktığı türden şeylerdir.

✅ README dosyaları, hazırlanmaları zaman alsa da, genellikle meşgul bakımcılar tarafından ihmal edilir. Özellikle açıklayıcı bir örnek bulabilir misiniz? Not: Denemek isteyebileceğiniz bazı [iyi README'ler oluşturmaya yardımcı olacak araçlar](https://www.makeareadme.com/) vardır.

### Görev: Bazı kodları birleştirin

Katkıda bulunan dokümanlar, insanların projeye katkıda bulunmasına yardımcı olur. Ne tür katkılar aradığınızı ve sürecin nasıl çalıştığını açıklar. Katkıda bulunanların GitHub'daki deponuza katkıda bulunabilmeleri için bir dizi adımdan geçmeleri gerekecektir:


1. **Repo'nuzu çatallamak** Muhtemelen insanların projenizi _fork_ etmesini isteyeceksiniz. Forking, GitHub profillerinde deponuzun bir kopyasını oluşturmak anlamına gelir.
1. **Klon**. Oradan projeyi yerel makinelerine kopyalayacaklar.
1. **Bir dal oluşturun**. İsteyeceksin

```bash
   git şubesi [şube adı]
   ```

1. **Çalışan şubeye geçin**. Belirtilen şubeye geçin ve çalışma dizinini `git switch` ile güncelleyin:

   ```bash
   git anahtarı [dal adı]
   ```

1. **Çalışın**. Bu noktada değişikliklerinizi eklemek istiyorsunuz. Git'e aşağıdaki komutlarla bunu söylemeyi unutmayın:

   ```bash
   git ekle.
   git commit -m "değişikliklerim"
   ```

   Taahhüdünüze iyi bir isim verdiğinizden emin olun, hem kendi iyiliğiniz hem de yardım ettiğiniz deponun koruyucusu için.

1. **Çalışmanızı "ana" dal ile birleştirin**. Bir noktada çalışmayı bitirdiniz ve işinizi 'ana' dalınkiyle birleştirmek istiyorsunuz. Bu arada "ana" dal değişmiş olabilir, bu yüzden önce aşağıdaki komutları kullanarak en son güncellemeyi yaptığınızdan emin olun:

   ```bash
   git anahtarı ana
   git çek
   ```

   Bu noktada, herhangi bir _çatışma_, Git'in kolayca _birleştiremeyeceği_ durumların, çalışma dalınızda meydana geldiğinden emin olmak istersiniz. Bu nedenle aşağıdaki komutları çalıştırın:

   ```bash
   git anahtarı [dal_adı]
   git ana birleştirme
   ```

   Bu, 'ana'dan şubenize tüm değişiklikleri getirecek ve umarım devam edebilirsiniz. Değilse, VS Code size Git'in nerede _confused_ olduğunu söyler ve siz etkilenen dosyaları hangi içeriğin en doğru olduğunu söylemek için değiştirirsiniz.

1. **Çalışmanızı GitHub'a gönderin**. Çalışmanızı GitHub'a göndermek iki anlama gelir. Şubenizi deponuza itin ve ardından bir PR, Pull Request açın.

   ```bash
   git push --set-upstream Origin [dal adı]
   ```

   Yukarıdaki komut, çatallı deponuzda dalı oluşturur.

1. **Bir Halkla İlişkiler** açın. Ardından, bir PR açmak istiyorsunuz. Bunu GitHub'daki çatallı depoya giderek yaparsınız. GitHub'da yeni bir PR oluşturmak isteyip istemediğinizi soran bir gösterge göreceksiniz, buna tıklıyorsunuz ve taahhüt mesajı başlığını değiştirebileceğiniz, daha uygun bir açıklama verebileceğiniz bir arayüze yönlendiriliyorsunuz. Şimdi çatalladığınız reponun bakıcısı bu PR'ı görecek ve _parmakları geçti_ takdir edecek ve PR'nizi _birleştirecek. Artık katkıda bulunuyorsunuz, evet :)

1. **Temizlik**. Bir PR'ı başarıyla birleştirdikten sonra _temizlemek_ iyi bir uygulama olarak kabul edilir. Hem yerel şubenizi hem de GitHub'a gönderdiğiniz şubeyi temizlemek istiyorsunuz. Önce aşağıdaki komutla local olarak silelim:

   ```bash
   git branch -d [dal adı]
   ```

   Bir sonraki çatallı depo için GitHub sayfasına gittiğinizden ve az önce ittiğiniz uzak dalı kaldırdığınızdan emin olun.

'Pull request' aptalca bir terim gibi görünüyor çünkü gerçekten değişikliklerinizi projeye aktarmak istiyorsunuz. Ancak, bakımcı (proje sahibi) veya çekirdek ekibin, değişikliklerinizi projenin "ana" dalı ile birleştirmeden önce dikkate alması gerekir, bu nedenle gerçekten bir bakımcıdan bir değişiklik kararı talep ediyorsunuz.

Bir çekme talebi, incelemeler, yorumlar, entegre testler ve daha fazlasıyla bir dalda tanıtılan farklılıkları karşılaştırmak ve tartışmak için kullanılan yerdir. İyi bir çekme isteği, bir taahhüt mesajıyla kabaca aynı kuralları izler. Örneğin çalışmanız bir sorunu düzelttiğinde, sorun izleyicide bir soruna referans ekleyebilirsiniz. Bu, "#" ve ardından sorununuzun numarası kullanılarak yapılır. Örneğin "#97".

🤞Bütün kontrollerin geçtiği ve proje sahiplerinin değişikliklerinizi projede birleştirdiği konusunda temkinli olun🤞

Geçerli yerel çalışma şubenizi GitHub'daki ilgili uzak şubeden gelen tüm yeni taahhütlerle güncelleyin:

`git çekme`

## Açık kaynağa nasıl katkıda bulunulur

İlk olarak, GitHub'da ilginizi çeken ve bir değişikliğe katkıda bulunmak istediğiniz bir havuz (veya **repo**) bulalım. İçeriğini makinenize kopyalamak isteyeceksiniz.

✅ 'Yeni başlayanlar için uygun' depoları bulmanın iyi bir yolu ['iyi-ilk-sorun' etiketine göre arama yapmaktır](https://github.blog/2020-01-22-browse-good-first-issues- açık kaynağa katkıda bulunmak/).

![Bir depoyu yerel olarak kopyalayın](images/clone_repo.png)

Kodu kopyalamanın birkaç yolu vardır. Bir yol, HTTPS, SSH veya GitHub CLI (Komut Satırı Arayüzü) kullanarak deponun içeriğini "klonlamaktır".

Terminalinizi açın ve depoyu şu şekilde klonlayın:
`git klonu https://github.com/ProjectURL`

Proje üzerinde çalışmak için doğru klasöre geçin:
`cd ProjectURL`

Tüm projeyi [Codespaces](https://github.com/features/codespaces), GitHub'ın yerleşik kod düzenleyicisini/bulut geliştirme ortamını veya [GitHub Desktop](https://desktop.github.com/) kullanarak da açabilirsiniz. ).

Son olarak, kodu sıkıştırılmış bir klasörde indirebilirsiniz.

### GitHub hakkında birkaç ilginç şey daha

GitHub'da herhangi bir genel depoya yıldız ekleyebilir, izleyebilir ve/veya "çatallayabilirsiniz". Yıldızlı depolarınızı sağ üstteki açılır menüde bulabilirsiniz. Yer imi gibi, ancak kod için.

Projelerde, aksi belirtilmedikçe, çoğunlukla GitHub'da "Sorunlar" sekmesinde, insanların projeyle ilgili sorunları tartıştığı bir sorun izleyici bulunur. Ve Çekme İstekleri sekmesi, insanların devam etmekte olan değişiklikleri tartıştığı ve gözden geçirdiği yerdir.

Projeler ayrıca forumlarda, posta listelerinde veya sohbet kanallarında tartışılabilir Slack, Discord veya IRC gibi...

✅ Yeni GitHub deponuza bir göz atın ve ayarları düzenleme, deponuza bilgi ekleme ve bir proje oluşturma (Kanban panosu gibi) gibi birkaç şeyi deneyin. Yapabileceğiniz çok şey var!

---

## 🚀 Meydan Okuma

Birbirinizin kodu üzerinde çalışmak için bir arkadaşınızla eşleştirin. İşbirliği içinde bir proje oluşturun, kodu çatallayın, dallar oluşturun ve değişiklikleri birleştirin.

## Ders Sonrası Sınav
[Ders sonrası test](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/4)

## İnceleme ve Bireysel Çalışma

[Açık kaynaklı yazılıma katkıda bulunma](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) hakkında daha fazla bilgi edinin.

[Git hile sayfası](https://training.github.com/downloads/github-git-cheat-sheet/).

Pratik yapın, pratik yapın, pratik yapın. GitHub'ın [lab.github.com](https://lab.github.com/) üzerinden erişilebilen harika öğrenme yolları vardır:

- [GitHub'da İlk Hafta](https://lab.github.com/githubtraining/first-week-on-github)

Ayrıca daha gelişmiş laboratuvarlar bulacaksınız.

## Atama

[GitHub'da İlk Hafta eğitim laboratuvarını](https://lab.github.com/githubtraining/first-week-on-github) tamamlayın

