<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ea65b75e488aa33a3cc5cb1c6c3f047a",
  "translation_date": "2025-10-03T13:56:16+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "tr"
}
-->
# GitHub'a Giriş

Bu ders, kodunuzu barındırmak ve değişiklikleri yönetmek için kullanılan GitHub'ın temel bilgilerini kapsar.

![GitHub'a Giriş](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test
[Ders öncesi testi](https://ff-quizzes.netlify.app)

## Giriş

Bu derste şunları öğreneceğiz:

- Makinenizde yaptığınız çalışmaları takip etmek
- Başkalarıyla projeler üzerinde çalışmak
- Açık kaynak yazılıma nasıl katkıda bulunulacağı

### Ön Koşullar

Başlamadan önce, Git'in yüklü olup olmadığını kontrol etmeniz gerekiyor. Terminalde şu komutu yazın: 
`git --version`

Eğer Git yüklü değilse, [Git'i indirin](https://git-scm.com/downloads). Ardından, terminalde yerel Git profilinizi ayarlayın:
* `git config --global user.name "adınız"`
* `git config --global user.email "e-posta adresiniz"`

Git'in zaten yapılandırılmış olup olmadığını kontrol etmek için şu komutu yazabilirsiniz:
`git config --list`

Ayrıca bir GitHub hesabına, bir kod düzenleyiciye (örneğin Visual Studio Code) ve terminalinizi (veya komut istemini) açmanız gerekecek.

[github.com](https://github.com/) adresine gidin ve henüz yapmadıysanız bir hesap oluşturun veya giriş yaparak profilinizi doldurun.

✅ GitHub dünyadaki tek kod deposu değildir; başka seçenekler de vardır, ancak GitHub en bilinenidir.

### Hazırlık

Yerel makinenizde (laptop veya PC) bir kod projesi içeren bir klasöre ve başkalarının projelerine nasıl katkıda bulunacağınızı göstermek için bir örnek olarak kullanılacak bir GitHub'da halka açık bir depoya ihtiyacınız olacak.

---

## Kod Yönetimi

Diyelim ki yerel olarak bir kod projesi içeren bir klasörünüz var ve ilerlemenizi Git - sürüm kontrol sistemi - kullanarak takip etmek istiyorsunuz. Bazı insanlar Git kullanmayı gelecekteki kendinize bir aşk mektubu yazmaya benzetir. Günler, haftalar veya aylar sonra commit mesajlarınızı okuduğunuzda neden bir karar verdiğinizi hatırlayabilir veya bir değişikliği "geri alabilirsiniz" - tabii ki iyi "commit mesajları" yazdığınızda.

### Görev: Bir depo oluşturun ve kodu commit edin  

> Videoyu izleyin
> 
> [![Git ve GitHub Temelleri Videosu](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **GitHub'da bir depo oluşturun**. GitHub.com'da, depolar sekmesinde veya sağ üstteki gezinme çubuğundan **yeni depo** düğmesini bulun.

   1. Depoya (klasöre) bir ad verin.
   1. **Depo oluştur** seçeneğini seçin.

1. **Çalışma klasörünüze gidin**. Terminalinizde, takip etmek istediğiniz klasöre (dizin olarak da bilinir) geçin. Şu komutu yazın:

   ```bash
   cd [name of your folder]
   ```

1. **Bir git deposu başlatın**. Projenizde şu komutu yazın:

   ```bash
   git init
   ```

1. **Durumu kontrol edin**. Depo durumunu kontrol etmek için şu komutu yazın:

   ```bash
   git status
   ```

   Çıktı şu şekilde görünebilir:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Genellikle `git status` komutu, repo için _kaydedilmeye hazır_ olan dosyalar veya üzerinde değişiklik yapılmış ve kalıcı hale getirilmesi gereken dosyalar gibi bilgileri verir.

1. **Tüm dosyaları takibe ekleyin**
   Bu işlem, dosyaları sahneleme alanına eklemek olarak da adlandırılır.

   ```bash
   git add .
   ```

   `git add` ve `.` argümanı, tüm dosyalarınızı ve değişikliklerinizi takibe ekler.

1. **Seçili dosyaları takibe ekleyin**

   ```bash
   git add [file or folder name]
   ```

   Bu komut, tüm dosyaları bir kerede commit etmek istemediğinizde yalnızca seçili dosyaları sahneleme alanına eklemenize yardımcı olur.

1. **Tüm dosyaları sahneleme alanından çıkarın**

   ```bash
   git reset
   ```

   Bu komut, tüm dosyaları bir kerede sahneleme alanından çıkarmanıza yardımcı olur.

1. **Belirli bir dosyayı sahneleme alanından çıkarın**

   ```bash
   git reset [file or folder name]
   ```

   Bu komut, yalnızca bir dosyayı sahneleme alanından çıkarmanıza yardımcı olur.

1. **Çalışmanızı kalıcı hale getirin**. Bu noktada dosyaları _sahneleme alanına_ eklediniz. Git dosyalarınızı burada takip ediyor. Değişikliği kalıcı hale getirmek için dosyaları _commit_ etmeniz gerekiyor. Bunu yapmak için `git commit` komutunu kullanarak bir _commit_ oluşturun. Bir _commit_, depo geçmişinizde bir kayıt noktasıdır. Şu komutu yazarak bir _commit_ oluşturun:

   ```bash
   git commit -m "first commit"
   ```

   Bu, tüm dosyalarınızı "ilk commit" mesajıyla commit eder. Gelecekteki commit mesajlarınızda, yaptığınız değişiklik türünü açıklamak için daha açıklayıcı bir açıklama kullanmak isteyeceksiniz.

1. **Yerel Git deponuzu GitHub ile bağlayın**. Bir Git deposu makinenizde iyidir, ancak bir noktada dosyalarınızın bir yedeğini bir yerde tutmak ve ayrıca başkalarını deponuzda sizinle çalışmaya davet etmek isteyeceksiniz. Bunun için harika bir yer GitHub'dır. Daha önce GitHub'da bir depo oluşturduğumuzu hatırlayın, bu yüzden yapmamız gereken tek şey yerel Git depomuzu GitHub ile bağlamaktır. `git remote add` komutu bunu yapacaktır. Şu komutu yazın:

   > Not: Komutu yazmadan önce GitHub depo sayfanıza giderek depo URL'sini bulun. Aşağıdaki komutta bu URL'yi kullanacaksınız. ```https://github.com/kullanıcı_adı/depo_adı.git``` kısmını GitHub URL'nizle değiştirin.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Bu, daha önce oluşturduğunuz GitHub deposuna işaret eden "origin" adlı bir _uzaktan bağlantı_ oluşturur.

1. **Yerel dosyaları GitHub'a gönderin**. Şimdiye kadar yerel depo ile GitHub deposu arasında bir _bağlantı_ oluşturduk. Bu dosyaları GitHub'a göndermek için `git push` komutunu şu şekilde kullanın:
   
   > Not: Varsayılan dal adınız ```main```den farklı olabilir.

   ```bash
   git push -u origin main
   ```

   Bu, "main" dalınızdaki commit'lerinizi GitHub'a gönderir. Komutta `-u` ile birlikte `upstream` dalını ayarlamak, yerel dalınız ile uzak dal arasında bir bağlantı kurar, böylece gelecekte dal adını belirtmeden git push veya git pull komutlarını kullanabilirsiniz. Git, otomatik olarak upstream dalını kullanır ve gelecekteki komutlarda dal adını açıkça belirtmeniz gerekmez.

2. **Daha fazla değişiklik eklemek**. Değişiklik yapmaya ve bunları GitHub'a göndermeye devam etmek istiyorsanız, sadece şu üç komutu kullanmanız yeterli olacaktır:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > İpucu: `.gitignore` dosyasını benimsemek isteyebilirsiniz. Bu dosya, GitHub'da takip etmek istemediğiniz dosyaların görünmesini engeller - örneğin, aynı klasörde sakladığınız ancak halka açık bir depoda yeri olmayan notlar dosyası. `.gitignore` dosyaları için şablonları [.gitignore şablonları](https://github.com/github/gitignore) adresinde bulabilirsiniz.

#### Commit Mesajları

Harika bir Git commit başlık satırı şu cümleyi tamamlar:
Eğer uygulanırsa, bu commit <buraya başlık satırınızı yazın> yapacaktır.

Başlıkta emir kipini ve şimdiki zamanı kullanın: "değiştir" değil "değiştirildi" veya "değişiklikler". 
Başlıkta olduğu gibi, gövdede (isteğe bağlı) de emir kipini ve şimdiki zamanı kullanın. Gövde, değişikliğin motivasyonunu ve bunu önceki davranışla karşılaştırmayı içermelidir. `neden`i açıklıyorsunuz, `nasıl`ı değil.

✅ GitHub'da biraz gezinin. Harika bir commit mesajı bulabilir misiniz? Çok minimal bir tane bulabilir misiniz? Sizce commit mesajında iletilmesi gereken en önemli ve faydalı bilgi nedir?

### Görev: İşbirliği Yapın

GitHub'a bir şeyler koymanın ana nedeni, diğer geliştiricilerle işbirliği yapmayı mümkün kılmaktır.

## Başkalarıyla Projeler Üzerinde Çalışmak

> Videoyu izleyin
>
> [![Git ve GitHub Temelleri Videosu](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Depo içinde, `Insights > Community` bölümüne giderek projenizin önerilen topluluk standartlarına nasıl uyduğunu görebilirsiniz.

   GitHub deponuzu geliştirebilecek bazı şeyler şunlardır:
   - **Açıklama**. Projeniz için bir açıklama eklediniz mi?
   - **README**. Bir README eklediniz mi? GitHub, [README yazma](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon) konusunda rehberlik sağlar.
   - **Katkı yönergeleri**. Projenizde [katkı yönergeleri](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon) var mı?
   - **Davranış Kuralları**. Bir [Davranış Kuralları](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/) var mı?
   - **Lisans**. Belki de en önemlisi, bir [lisans](https://docs.github.com/articles/adding-a-license-to-a-repository/) var mı?

Tüm bu kaynaklar, yeni ekip üyelerinin projeye dahil olmasına fayda sağlar. Ve bunlar genellikle yeni katkıda bulunanların kodunuza bakmadan önce projenizin zamanlarını harcamaları için doğru yer olup olmadığını anlamak için baktıkları şeylerdir.

✅ README dosyaları, hazırlanması zaman almasına rağmen, genellikle meşgul bakımcılar tarafından ihmal edilir. Özellikle açıklayıcı bir README örneği bulabilir misiniz? Not: [README oluşturmak için araçlar](https://www.makeareadme.com/) var, bunları denemek isteyebilirsiniz.

### Görev: Kod Birleştirin

Katkı belgeleri, insanların projeye katkıda bulunmasına yardımcı olur. Hangi tür katkılar aradığınızı ve sürecin nasıl işlediğini açıklar. Katkıda bulunanlar, GitHub'daki deponuza katkıda bulunabilmek için bir dizi adımı takip etmek zorunda kalacaklar:

1. **Depoyu çatallama**. İnsanların projenizi _çatallamasını_ isteyeceksiniz. Çatallama, deponuzun GitHub profillerinde bir kopyasını oluşturmak anlamına gelir.
1. **Klonlama**. Buradan projeyi yerel makinesine klonlayacaklar.
1. **Dal oluşturma**. Çalışmaları için bir _dal_ oluşturmalarını isteyeceksiniz.
1. **Değişikliklerini bir alana odaklama**. Katkıda bulunanlardan katkılarını bir seferde bir şeye odaklamalarını isteyin - böylece çalışmalarını _birleştirme_ olasılığınız daha yüksek olur. Diyelim ki bir hata düzeltmesi yazıyorlar, yeni bir özellik ekliyorlar ve birkaç testi güncelliyorlar - ya 3 değişiklikten sadece 2'sini veya 1'ini uygulamak istiyorsanız?

✅ Dalların iyi kod yazmak ve göndermek için özellikle kritik olduğu bir durumu hayal edin. Hangi kullanım durumlarını düşünebilirsiniz?

> Not: Dünyada görmek istediğiniz değişim olun ve kendi çalışmalarınız için de dallar oluşturun. Yaptığınız commit'ler, şu anda "checkout" yaptığınız dalda yapılacaktır. Hangi dalda olduğunuzu görmek için `git status` kullanın.

Bir katkıda bulunanın iş akışını inceleyelim. Katkıda bulunanın zaten depoyu _çatalladığı_ ve _klonladığı_ ve yerel makinesinde çalışmaya hazır bir Git deposuna sahip olduğunu varsayalım:

1. **Dal oluşturma**. `git branch` komutunu kullanarak katkıda bulunmayı düşündükleri değişiklikleri içerecek bir dal oluşturun:

   ```bash
   git branch [branch-name]
   ```

1. **Çalışma dalına geçiş yapma**. Belirtilen dala geçin ve çalışma dizinini `git switch` ile güncelleyin:

   ```bash
   git switch [branch-name]
   ```

1. **Çalışma yapma**. Bu noktada değişikliklerinizi eklemek istiyorsunuz. Git'e bunu şu komutlarla bildirmeyi unutmayın:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Commit'inize iyi bir ad verdiğinizden emin olun, hem sizin hem de yardım ettiğiniz depo bakımcısı için.

1. **Çalışmanızı `main` dalıyla birleştirme**. Bir noktada çalışmanızı tamamladınız ve bunu `main` dalıyla birleştirmek istiyorsunuz. Bu arada `main` dalı değişmiş olabilir, bu yüzden önce aşağıdaki komutlarla en son haline güncellediğinizden emin olun:

   ```bash
   git switch main
   git pull
   ```

   Bu noktada, herhangi bir _çakışmanın_, Git'in değişiklikleri kolayca _birleştiremediği_ durumların çalışma dalınızda gerçekleştiğinden emin olun. Bu nedenle şu komutları çalıştırın:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   `git merge main` komutu, `main` dalından tüm değişiklikleri dalınıza getirir. Umarız devam edebilirsiniz. Eğer edemezseniz, VS Code, Git'in _kafasının karıştığı_ yerleri size gösterecek ve etkilenen dosyaları değiştirerek hangi içeriğin en doğru olduğunu belirteceksiniz.

   Farklı bir dala geçmek için modern `git switch` komutunu kullanın:
   ```bash
   git switch [branch_name]


1. **Çalışmanızı GitHub'a gönderin**. Çalışmanızı GitHub'a göndermek iki şey anlamına gelir. Dalınızı deponuza itmek ve ardından bir PR (Pull Request) açmak.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Yukarıdaki komut, çatallanan deponuzda dalı oluşturur.
1. **Bir PR Açın**. Şimdi bir PR açmak istiyorsunuz. Bunu GitHub'daki çatalladığınız repo'ya giderek yapabilirsiniz. GitHub'da yeni bir PR oluşturmak isteyip istemediğinizi soran bir gösterge göreceksiniz, buna tıklayın ve sizi commit mesaj başlığını değiştirebileceğiniz, daha uygun bir açıklama ekleyebileceğiniz bir arayüze yönlendirecek. Çatalladığınız repo'nun sahibi bu PR'ı görecek ve _parmaklar çapraz_ umarız PR'ınızı beğenip _birleştirecek_. Artık bir katkıcı oldunuz, yaşasın :)

1. **Temizlik Yapın**. Bir PR'ı başarıyla birleştirdikten sonra _temizlik yapmak_ iyi bir uygulama olarak kabul edilir. Hem yerel dalınızı hem de GitHub'a gönderdiğiniz dalı temizlemek istersiniz. Önce aşağıdaki komutla yerel olarak silelim:

   ```bash
   git branch -d [branch-name]
   ```

   Ardından GitHub'daki çatalladığınız repo sayfasına gidin ve az önce gönderdiğiniz uzak dalı kaldırın.

`Pull request` (Çekme isteği) biraz garip bir terim gibi görünüyor çünkü aslında değişikliklerinizi projeye göndermek istiyorsunuz. Ancak repo sahibi (proje sahibi) veya çekirdek ekip, değişikliklerinizi projedeki "ana" dal ile birleştirmeden önce değerlendirmelidir, bu yüzden aslında bir değişiklik kararı talep ediyorsunuz.

Bir çekme isteği, bir dalda yapılan değişiklikleri incelemek ve tartışmak için yorumlar, entegre testler ve daha fazlasıyla bir yerdir. İyi bir çekme isteği, yaklaşık olarak bir commit mesajı ile aynı kuralları takip eder. Örneğin, çalışmanız bir sorunu çözdüğünde, sorun izleyicisine bir referans ekleyebilirsiniz. Bu, `#` işareti ve ardından sorun numarası kullanılarak yapılır. Örneğin `#97`.

🤞Parmaklar çapraz, umarız tüm kontroller geçer ve proje sahibi(leri) değişikliklerinizi projeye birleştirir🤞

GitHub'daki ilgili uzak dalda yapılan tüm yeni commit'lerle mevcut yerel çalışma dalınızı güncelleyin:

`git pull`

## Açık Kaynağa Nasıl Katkıda Bulunulur

Öncelikle, GitHub'da ilginizi çeken ve değişiklik yapmak istediğiniz bir depo (**repo**) bulalım. İçeriğini bilgisayarınıza kopyalamak isteyeceksiniz.

✅ 'Yeni başlayanlar için uygun' repoları bulmanın iyi bir yolu [‘good-first-issue’ etiketiyle arama yapmaktır](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Bir repoyu yerel olarak kopyalayın](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.tr.png)

Kod kopyalamanın birkaç yolu vardır. Bir yol, HTTPS, SSH veya GitHub CLI (Komut Satırı Arayüzü) kullanarak repoyu "klonlamaktır".

Terminalinizi açın ve repoyu şu şekilde klonlayın:
`git clone https://github.com/ProjectURL`

Projede çalışmak için doğru klasöre geçin:
`cd ProjectURL`

Ayrıca projeyi [Codespaces](https://github.com/features/codespaces), GitHub'ın entegre kod editörü / bulut geliştirme ortamı veya [GitHub Desktop](https://desktop.github.com/) kullanarak açabilirsiniz.

Son olarak, kodu sıkıştırılmış bir klasör olarak indirebilirsiniz.

### GitHub Hakkında Birkaç İlginç Bilgi

GitHub'daki herhangi bir açık repo'yu yıldızlayabilir, izleyebilir ve/veya "çatallayabilirsiniz". Yıldızladığınız repoları sağ üst açılır menüde bulabilirsiniz. Bu, kod için bir tür yer imi gibidir.

Projelerde genellikle GitHub'daki "Issues" sekmesinde (aksi belirtilmedikçe) bir sorun izleyici bulunur, burada insanlar projeyle ilgili sorunları tartışır. Ve Çekme İstekleri sekmesi, devam eden değişikliklerin tartışıldığı ve incelendiği yerdir.

Projelerde ayrıca forumlarda, e-posta listelerinde veya Slack, Discord veya IRC gibi sohbet kanallarında tartışmalar olabilir.

✅ Yeni GitHub repo'nuzda biraz dolaşın ve ayarları düzenlemek, repoya bilgi eklemek ve bir proje (örneğin bir Kanban panosu) oluşturmak gibi birkaç şey deneyin. Yapabileceğiniz çok şey var!

---

## 🚀 Meydan Okuma

Bir arkadaşınızla eşleşerek birbirinizin kodu üzerinde çalışın. Ortak bir proje oluşturun, kodu çatallayın, dallar oluşturun ve değişiklikleri birleştirin.

## Ders Sonrası Test
[Ders sonrası test](https://ff-quizzes.netlify.app/web/en/)

## Gözden Geçirme ve Kendi Kendine Çalışma

[Açık kaynak yazılıma katkıda bulunma](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) hakkında daha fazla okuyun.

[Git hile sayfası](https://training.github.com/downloads/github-git-cheat-sheet/).

Pratik yapın, pratik yapın, pratik yapın. GitHub'da [skills.github.com](https://skills.github.com) üzerinden harika öğrenme yolları mevcuttur:

- [GitHub'da İlk Hafta](https://skills.github.com/#first-week-on-github)

Ayrıca daha ileri düzey kurslar da bulabilirsiniz.

## Ödev

[GitHub'da İlk Hafta kursunu](https://skills.github.com/#first-week-on-github) tamamlayın.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluğu sağlamak için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul edilmemektedir.