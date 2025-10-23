<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "acad15f3164cd6348e065ff38619aae9",
  "translation_date": "2025-10-22T23:51:11+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "tr"
}
-->
# GitHub'a Giriş

Merhaba, geleceğin yazılımcısı! 👋 Dünyanın dört bir yanındaki milyonlarca kodlayıcıya katılmaya hazır mısın? Seni GitHub ile tanıştırmak için gerçekten çok heyecanlıyım – bunu programcılar için bir sosyal medya platformu olarak düşünebilirsin, ama öğle yemeği fotoğrafları paylaşmak yerine kodlarımızı paylaşıyor ve birlikte harika şeyler inşa ediyoruz!

Beni gerçekten hayrete düşüren şey şu: Telefonundaki her uygulama, ziyaret ettiğin her web sitesi ve kullanmayı öğreneceğin araçların çoğu, GitHub gibi platformlarda iş birliği yapan geliştirici ekipler tarafından oluşturuldu. Sevdiğin o müzik uygulaması mı? Senin gibi biri ona katkıda bulundu. Elinden bırakamadığın o oyun mu? Evet, muhtemelen GitHub iş birliğiyle yapıldı. Ve şimdi SEN bu harika topluluğun bir parçası olmayı öğreneceksin!

Bu başta biraz fazla gelebilir – açıkçası, ilk GitHub sayfama bakıp "Bu ne anlama geliyor?" diye düşündüğümü hatırlıyorum. Ama işin güzel yanı şu: Her bir geliştirici tam olarak senin şu anda bulunduğun yerden başladı. Bu dersin sonunda, kendi GitHub deposuna (bunu bulut üzerindeki kişisel proje vitrinine benzetebilirsin) sahip olacaksın ve çalışmalarını nasıl kaydedeceğini, başkalarıyla nasıl paylaşacağını ve milyonlarca insanın kullandığı projelere nasıl katkıda bulunacağını öğreneceksin.

Bu yolculuğu birlikte, adım adım gerçekleştireceğiz. Acele yok, baskı yok – sadece sen, ben ve birazdan en iyi arkadaşların olacak harika araçlar!

![GitHub'a Giriş](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.tr.png)
> Sketchnote: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Test
[Ders öncesi testi](https://ff-quizzes.netlify.app)

## Giriş

Heyecan verici şeylere dalmadan önce, bilgisayarını biraz GitHub büyüsü için hazırlayalım! Bunu, bir şaheser yaratmadan önce sanat malzemelerini düzenlemek gibi düşün – doğru araçlara sahip olmak her şeyi çok daha kolay ve eğlenceli hale getirir.

Her bir kurulum adımında sana rehberlik edeceğim ve ilk bakışta göründüğü kadar korkutucu olmadığını garanti ediyorum. Bir şey hemen anlam ifade etmiyorsa, bu tamamen normal! İlk geliştirme ortamımı kurduğumu ve eski hiyeroglifleri okumaya çalışıyormuşum gibi hissettiğimi hatırlıyorum. Her bir geliştirici tam olarak senin şu anda bulunduğun yerdeydi, acaba doğru mu yapıyorum diye düşünüyordu. Spoiler: Eğer burada öğreniyorsan, zaten doğru yoldasın! 🌟

Bu derste şunları ele alacağız:

- Bilgisayarında yaptığın çalışmaları takip etmek
- Başkalarıyla projeler üzerinde çalışmak
- Açık kaynak yazılımlara nasıl katkıda bulunulacağını öğrenmek

### Ön Koşullar

Bilgisayarını biraz GitHub büyüsü için hazırlayalım! Merak etme – bu kurulum sadece bir kez yapman gereken bir şey ve sonrasında tüm kodlama yolculuğun için hazırsın.

Tamam, hadi temelden başlayalım! Öncelikle, Git'in bilgisayarında zaten yüklü olup olmadığını kontrol etmemiz gerekiyor. Git, kodunda yaptığın her bir değişikliği hatırlayan süper zeki bir asistan gibi – her iki saniyede bir Ctrl+S tuşuna panikle basmaktan çok daha iyi (hepimiz oradaydık!).

Git'in zaten yüklü olup olmadığını görmek için terminaline şu sihirli komutu yaz:
`git --version`

Eğer Git henüz yüklü değilse, endişelenme! Sadece [Git'i indir](https://git-scm.com/downloads) ve yükle. Yükledikten sonra, Git'i sana düzgün bir şekilde tanıtmamız gerekiyor:

> 💡 **İlk Kurulum**: Bu komutlar Git'e kim olduğunu söyler. Bu bilgi, yaptığın her bir commit'e eklenecek, bu yüzden paylaşmaktan rahat olacağın bir isim ve e-posta seç.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

Git'in zaten yapılandırılmış olup olmadığını kontrol etmek için şunu yazabilirsin:
```bash
git config --list
```

Ayrıca bir GitHub hesabına, bir kod düzenleyiciye (örneğin Visual Studio Code) ve terminalini (veya: komut istemi) açman gerekecek.

[github.com](https://github.com/) adresine git ve henüz yapmadıysan bir hesap oluştur ya da giriş yap ve profilini doldur.

💡 **Modern ipucu**: Daha kolay kimlik doğrulama için [SSH anahtarları](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) kurmayı veya [GitHub CLI](https://cli.github.com/) kullanmayı düşün.

✅ GitHub dünyadaki tek kod deposu değil; başka seçenekler de var, ancak GitHub en bilinenidir.

### Hazırlık

Yerel bilgisayarında (laptop veya PC) bir kod projesi içeren bir klasöre ve başkalarının projelerine nasıl katkıda bulunacağını göstermek için bir örnek olarak hizmet edecek bir GitHub'da herkese açık bir depoya ihtiyacın olacak.

### Kodunu Güvende Tutmak

Güvenlik hakkında biraz konuşalım – ama endişelenme, seni korkutacak şeylerle boğmayacağız! Bu güvenlik uygulamalarını, arabanı ya da evini kilitlemek gibi düşün. Bunlar, basit alışkanlıklar ve zamanla doğal hale gelir, böylece emeğini korumuş olursun.

GitHub ile çalışırken, en başından itibaren modern ve güvenli yöntemleri göstereceğiz. Bu şekilde, kodlama kariyerin boyunca sana iyi hizmet edecek alışkanlıklar geliştireceksin.

GitHub ile çalışırken güvenlik en iyi uygulamalarını takip etmek önemlidir:

| Güvenlik Alanı | En İyi Uygulama | Neden Önemlidir |
|----------------|----------------|-----------------|
| **Kimlik Doğrulama** | SSH anahtarları veya Kişisel Erişim Jetonları kullan | Şifreler daha az güvenlidir ve kullanımdan kaldırılıyor |
| **İki Faktörlü Kimlik Doğrulama** | GitHub hesabında 2FA'yı etkinleştir | Hesabına ekstra bir koruma katmanı ekler |
| **Depo Güvenliği** | Hassas bilgileri asla commit etme | API anahtarları ve şifreler asla herkese açık depolarda olmamalıdır |
| **Bağımlılık Yönetimi** | Güncellemeler için Dependabot'u etkinleştir | Bağımlılıklarını güvenli ve güncel tutar |

> ⚠️ **Kritik Güvenlik Hatırlatması**: API anahtarlarını, şifreleri veya diğer hassas bilgileri hiçbir zaman bir depoya commit etme. Hassas verileri korumak için ortam değişkenlerini ve `.gitignore` dosyalarını kullan.

**Modern Kimlik Doğrulama Ayarı:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Profesyonel İpucu**: SSH anahtarları, şifreleri tekrar tekrar girme ihtiyacını ortadan kaldırır ve geleneksel kimlik doğrulama yöntemlerinden daha güvenlidir.

---

## Kodunu Profesyonel Gibi Yönetmek

Tamam, İŞTE şimdi işler gerçekten heyecanlanıyor! 🎉 Kodunu profesyoneller gibi nasıl takip edeceğini ve yöneteceğini öğrenmek üzereyiz ve dürüst olmak gerekirse, bu öğretmeyi en sevdiğim şeylerden biri çünkü gerçekten oyunun kurallarını değiştiriyor.

Şöyle düşün: Harika bir hikaye yazıyorsun ve her taslağı, her parlak düzenlemeyi ve her "vay, bu harika bir fikir!" anını takip etmek istiyorsun. Git'in kodun için yaptığı tam olarak bu! Her şeyi – her tuş vuruşunu, her değişikliği, her "aman, her şeyi mahvettim" anını hatırlayan inanılmaz bir zaman yolculuğu defteri gibi.

Dürüst olacağım – bu başta biraz bunaltıcı gelebilir. Ben başladığımda, "Neden dosyalarımı normal bir şekilde kaydedemiyorum ki?" diye düşünmüştüm. Ama bana güven: Git'i anladığında (ve anlayacaksın!), "Bunu nasıl daha önce yapmadım?" diyeceğin bir aydınlanma anı yaşayacaksın. Bu, hayatın boyunca yürüyerek gittiğin bir yerde uçabileceğini keşfetmek gibi bir şey!

Diyelim ki yerel olarak bir kod projesi içeren bir klasörün var ve git – versiyon kontrol sistemi – kullanarak ilerlemeni takip etmek istiyorsun. Bazı insanlar git kullanmayı gelecekteki kendine bir aşk mektubu yazmakla karşılaştırır. Commit mesajlarını günler, haftalar ya da aylar sonra okuduğunda, neden bir karar verdiğini hatırlayabilir ya da bir değişikliği "geri alabilirsin" – tabii ki iyi "commit mesajları" yazdığında.

### Görev: İlk Deponu Oluştur!

> 🎯 **Görevin (ve bu konuda çok heyecanlıyım!)**: Hadi birlikte ilk GitHub deponu oluşturalım! Buradan ayrıldığında, kodunun yaşayacağı kendi küçük internet köşene sahip olacaksın ve ilk "commit"ini yapmış olacaksın (bu, geliştirici dilinde çalışmalarını gerçekten akıllı bir şekilde kaydetmek anlamına gelir).
>
> Bu gerçekten çok özel bir an – küresel geliştirici topluluğuna resmi olarak katılmak üzeresin! İlk depomu oluşturduğumda hissettiğim heyecanı ve "Vay, bunu gerçekten yapıyorum!" diye düşündüğümü hâlâ hatırlıyorum.

Bu macerayı birlikte, adım adım inceleyelim. Her bir kısmı acele etmeden yap – acele etmenin bir ödülü yok ve her bir adımın anlamlı olacağına söz veriyorum. Unutma, hayran olduğun her kodlama yıldızı bir zamanlar tam olarak senin bulunduğun yerdeydi, ilk depolarını oluşturmak üzereydi. Ne kadar havalı, değil mi?

> Video'yu izle
> 
> [![Git ve GitHub temelleri videosu](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Bunu Birlikte Yapalım:**

1. **GitHub'da deponu oluştur**. GitHub.com'a git ve o parlak yeşil **New** düğmesini (veya sağ üst köşedeki **+** işaretini) bul. Tıkla ve **New repository** seçeneğini seç.

   İşte yapman gerekenler:
   1. Depoya bir ad ver – senin için anlamlı bir şey olsun!
   1. İstersen bir açıklama ekle (bu, projenin ne hakkında olduğunu başkalarına anlatmaya yardımcı olur)
   1. Depoyu herkese açık (herkes görebilir) mi yoksa özel (sadece senin için) mi yapmak istediğine karar ver
   1. README dosyası eklemek için kutuyu işaretlemeni öneririm – bu, projenin ön sayfası gibidir
   1. **Create repository** düğmesine tıkla ve kutla – ilk deponu oluşturdun! 🎉

2. **Proje klasörüne git**. Şimdi terminalini açalım (merak etme, göründüğü kadar korkutucu değil!). Bilgisayarına proje dosyalarının nerede olduğunu söylememiz gerekiyor. Şu komutu yaz:

   ```bash
   cd [name of your folder]
   ```

   **Burada ne yapıyoruz:**
   - Temelde "Hey bilgisayar, beni proje klasörüme götür" diyoruz
   - Bu, masaüstünde belirli bir klasörü açmak gibi, ama bunu metin komutlarıyla yapıyoruz
   - `[name of your folder]` kısmını proje klasörünün gerçek adıyla değiştir

3. **Klasörünü bir Git deposuna dönüştür**. İşte sihir burada başlıyor! Şunu yaz:

   ```bash
   git init
   ```

   **İşte olanlar (oldukça havalı şeyler!):**
   - Git, projenin içinde gizli bir `.git` klasörü oluşturdu – göremeyeceksin, ama orada!
   - Normal klasörün artık yaptığın her değişikliği takip edebilen bir "depo" oldu
   - Bunu, klasörüne her şeyi hatırlama süper gücü vermek gibi düşün

4. **Durumu kontrol et**. Şimdi Git'in projen hakkında ne düşündüğünü görelim:

   ```bash
   git status
   ```

   **Git'in sana söylediklerini anlama:**
   
   Şuna benzer bir şey görebilirsin:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **Panik yapma! Bu şu anlama geliyor:**
   - **Kırmızı** dosyalar, değişiklik yapılmış ama henüz kaydedilmeye hazır olmayan dosyalardır
   - **Yeşil** dosyalar (gördüğünde) kaydedilmeye hazırdır
   - Git, bir sonraki adımda tam olarak ne yapabileceğini sana söylüyor

   > 💡 **İpucu**: `git status` komutu en iyi arkadaşın! Ne olup bittiğini anlamadığında her zaman kullanabilirsin. Bu, Git'e "Hey, şu an durum nedir?" diye sormak gibi bir şey.

5. **Dosyalarını kaydetmeye hazırla** (buna "sahneleme" denir):

   ```bash
   git add .
   ```

   **Az önce ne yaptık:**
   - Git'e "Hey, bu klasördeki TÜM dosyaları bir sonraki kayda dahil etmek istiyorum" dedik
   - `.` işareti, "bu klasördeki her şey" demek
   - Şimdi dosyaların "sahnelendi" ve bir sonraki adım için hazır

   **Daha seçici mi olmak istiyorsun?** Sadece belirli dosyaları ekleyebilirsin:

   ```bash
   git add [file or folder name]
   ```

   **Neden bunu yapmak isteyebilirsin?**
   - Bazen ilgili değişiklikleri bir arada kaydetmek istersin
   - Çalışmalarını mantıklı parçalara ayırmana yardımcı olur
   - Ne zaman ve neyin değiştiğini anlamayı kolaylaştırır

   **Fikrini mi değiştirdin?** Sorun değil! Dosyaları sahneden çıkarmak için şunu yapabilirsin:

   ```bash
   # Unstage everything
   git reset
   
   # Unstage just one file
   git reset [file name]
   ```

   Endişelenme – bu, çalışmalarını silmez, sadece dosyaları "kayda hazır" yığından çıkarır.

6. **Çalışmalarını kalıcı olarak kaydet** (ilk commit'ini yap!):

   ```bash
   git commit -m "first commit"
   ```

   **🎉 Tebrikler! İlk commit'ini yaptın!**
   
   **İşte olanlar:**
   - Git, bu tam anda sahnelenmiş tüm dosyalarının bir "anlık görüntüsünü" aldı
   - "first commit" mesajın, bu kayıt noktasının ne hakkında olduğunu açıklar
   - Git, bu anlık görüntüye her zaman bulabileceğin benzersiz bir kimlik verdi
   - Projenin geçmişini izlemeye resmen başladın!

   > 💡 **Gelecekteki commit mesajları**: Bir sonraki commit'lerin için daha açıklayıcı ol! "Güncellenmiş şeyler" yerine "Ana sayfaya iletişim formu eklendi" veya "Gezinme menüsü hatası düzeltildi" gibi şeyler yaz. Gelecekteki kendin sana teşekkür edecek!

7. **Yerel projenizi GitHub'a bağlayın**. Şu anda, projen sadece bilgisayarında var. Hadi bunu GitHub deposuna bağlayalım, böylece dünyayla paylaşabilirsin!

   Öncelikle, GitHub depo sayfana git ve URL'yi kopyala. Sonra buraya dön ve şunu yaz:

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```
   
   (Bu URL'yi gerçek depo URL'inle değiştir!) 

   **Az önce ne yaptık:**
- Yerel projeniz ile GitHub deposu arasında bir bağlantı oluşturduk.  
- "Origin", GitHub deponuz için sadece bir takma ad – telefonunuza bir kişi eklemek gibi düşünün.  
- Artık yerel Git'iniz, kodunuzu paylaşmaya hazır olduğunuzda nereye göndereceğini biliyor.  

💡 **Daha kolay bir yol**: Eğer GitHub CLI yüklüyse, bunu tek bir komutla yapabilirsiniz:  
   ```bash
   gh repo create my-repo --public --push --source=.
   ```
  
8. **Kodunuzu GitHub'a gönderin** (büyük an!):  

   ```bash
   git push -u origin main
   ```
  
   **🚀 İşte bu! Kodunuzu GitHub'a yüklüyorsunuz!**  

   **Neler oluyor:**  
   - Commit'leriniz bilgisayarınızdan GitHub'a doğru yolculuğa çıkıyor.  
   - `-u` bayrağı, gelecekteki gönderimlerin daha kolay olması için kalıcı bir bağlantı kurar.  
   - "main", ana dalınızın adı (ana klasör gibi düşünün).  
   - Bundan sonra, gelecekteki yüklemeler için sadece `git push` yazabilirsiniz!  

   💡 **Hızlı not**: Eğer dalınızın adı başka bir şeyse (örneğin "master"), o adı kullanın. `git branch --show-current` komutuyla kontrol edebilirsiniz.  

9. **Yeni günlük kodlama ritminiz** (işte bağımlılık burada başlıyor!):  

   Bundan sonra, projenizde değişiklik yaptığınızda, bu basit üç adımlı dansı yapacaksınız:  

   ```bash
   git add .
   git commit -m "describe what you changed"
   git push
   ```
  
   **Bu sizin kodlama kalp atışınız olacak:**  
   - Kodunuza harika değişiklikler yapın ✨  
   - `git add` ile sahneleyin ("Hey Git, bu değişikliklere dikkat et!")  
   - `git commit` ve açıklayıcı bir mesajla kaydedin (gelecekteki siz size teşekkür edecek!)  
   - Kodunuzu dünyayla paylaşmak için `git push` kullanın 🚀  
   - Tekrar edin – cidden, bu nefes almak kadar doğal hale gelecek!  

   Bu iş akışını seviyorum çünkü bu, bir video oyununda birden fazla kayıt noktası olması gibi. Sevdiğiniz bir değişiklik mi yaptınız? Commit yapın! Riskli bir şey denemek mi istiyorsunuz? Sorun değil – işler ters giderse her zaman son commit'inize geri dönebilirsiniz!  

   > 💡 **İpucu**: Ayrıca, GitHub'da görünmesini istemediğiniz dosyaların (örneğin, aynı klasörde sakladığınız ancak herkese açık bir depoda yeri olmayan not dosyaları gibi) izlenmesini önlemek için bir `.gitignore` dosyası kullanmayı düşünebilirsiniz. `.gitignore` dosyaları için şablonları [.gitignore templates](https://github.com/github/gitignore) adresinde bulabilir veya [gitignore.io](https://www.toptal.com/developers/gitignore) kullanarak bir tane oluşturabilirsiniz.  

#### Modern Git iş akışları  

Bu modern uygulamaları benimsemeyi düşünün:  

- **Conventional Commits**: `feat:`, `fix:`, `docs:` gibi standart bir commit mesajı formatı kullanın. Daha fazla bilgi için [conventionalcommits.org](https://www.conventionalcommits.org/) adresine göz atın.  
- **Atomik commit'ler**: Her bir commit'in tek bir mantıksal değişikliği temsil etmesini sağlayın.  
- **Sık commit'ler**: Büyük ve seyrek commit'ler yerine, açıklayıcı mesajlarla sık sık commit yapın.  

#### Commit mesajları  

Harika bir Git commit başlık satırı şu cümleyi tamamlar:  
Eğer uygulanırsa, bu commit <buraya başlık satırınızı yazın> yapacak.  

Başlık için emir kipinde, geniş zaman kullanın: "değiştir" (change), "değiştirildi" (changed) veya "değiştiriyor" (changes) değil.  
Başlıkta olduğu gibi, gövdede de (isteğe bağlı) emir kipinde, geniş zaman kullanın. Gövde, değişikliğin nedenini içermeli ve bunu önceki davranışla karşılaştırmalıdır. Burada `nasıl` değil, `neden` sorusunu açıklıyorsunuz.  

✅ GitHub'da biraz dolaşmak için birkaç dakikanızı ayırın. Gerçekten harika bir commit mesajı bulabilir misiniz? Peki ya çok basit bir tane? Bir commit mesajında iletilmesi en önemli ve faydalı bilgilerin neler olduğunu düşünüyorsunuz?  

## Diğerleriyle Çalışmak (Eğlenceli Kısım!)  

Şapkanızı sıkıca tutun çünkü GİTMEK ÜZEREYİZ! 🪄 Kendi kodunuzu yönetmeyi başardınız, ama şimdi en sevdiğim kısma dalıyoruz – dünyanın dört bir yanından harika insanlarla iş birliği yapmaya.  

Şöyle bir hayal edin: Yarın uyanıyorsunuz ve Tokyo'dan biri siz uyurken kodunuzu geliştirmiş. Sonra Berlin'den biri, takıldığınız bir hatayı düzeltmiş. Öğleden sonra, São Paulo'dan bir geliştirici, sizin aklınıza bile gelmeyen bir özellik eklemiş. Bu bilim kurgu değil – bu sadece GitHub evreninde sıradan bir Salı!  

Beni gerçekten heyecanlandıran şey, şimdi öğreneceğiniz iş birliği becerilerinin, Google, Microsoft ve en sevdiğiniz startuplardaki ekiplerin her gün kullandığı TAM olarak aynı iş akışları olması. Sadece havalı bir araç öğrenmiyorsunuz – tüm yazılım dünyasının birlikte çalışmasını sağlayan gizli dili öğreniyorsunuz.  

Cidden, birinin ilk pull request'inizi birleştirdiği anı yaşadığınızda, geliştiricilerin neden açık kaynak konusunda bu kadar tutkulu olduğunu anlayacaksınız. Bu, dünyanın en büyük, en yaratıcı ekip projesinin bir parçası olmak gibi bir şey!  

> Video'yu izleyin  
>  
> [![Git ve GitHub temelleri videosu](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)  

GitHub'a bir şeyler koymanın ana nedeni, diğer geliştiricilerle iş birliği yapmayı mümkün kılmaktı.  

Depo sayfanızda, `Insights > Community` sekmesine giderek projenizin önerilen topluluk standartlarına nasıl uyduğunu görebilirsiniz.  

Depo sayfanızın profesyonel ve davetkar görünmesini mi istiyorsunuz? Depo sayfanıza gidin ve `Insights > Community` sekmesine tıklayın. Bu harika özellik, projenizin GitHub topluluğunun "iyi depo uygulamaları" olarak gördüğü şeylere nasıl uyduğunu gösterir.  

> 🎯 **Projenizi Parlatın**: İyi organize edilmiş bir depo ve iyi bir dokümantasyon, temiz ve davetkar bir vitrin gibi. İnsanlara işinize önem verdiğinizi gösterir ve başkalarının katkıda bulunmasını sağlar!  

**Bir depoyu harika yapan şeyler:**  

| Eklenmesi Gerekenler | Neden Önemli | Size Faydası |
|-----------------------|--------------|--------------|
| **Açıklama** | İlk izlenim önemlidir! | İnsanlar projenizin ne yaptığını hemen anlar |
| **README** | Projenizin ön sayfası | Yeni ziyaretçiler için dostça bir rehber gibi |
| **Katkı Rehberi** | Yardıma açık olduğunuzu gösterir | İnsanlar size nasıl yardımcı olabileceklerini bilir |
| **Davranış Kuralları** | Dostça bir ortam yaratır | Herkesin katılımını teşvik eder |
| **Lisans** | Hukuki netlik sağlar | Başkaları kodunuzu nasıl kullanabileceklerini bilir |
| **Güvenlik Politikası** | Sorumlu olduğunuzu gösterir | Profesyonel uygulamaları sergiler |  

> 💡 **Profesyonel İpucu**: GitHub, bu dosyaların tümü için şablonlar sağlar. Yeni bir depo oluştururken, bu dosyaları otomatik olarak oluşturmak için kutucukları işaretleyin.  

**Keşfedilecek Modern GitHub Özellikleri:**  

🤖 **Otomasyon & CI/CD:**  
- Otomatik test ve dağıtım için **GitHub Actions**  
- Otomatik bağımlılık güncellemeleri için **Dependabot**  

💬 **Topluluk & Proje Yönetimi:**  
- Sorunların ötesinde topluluk sohbetleri için **GitHub Discussions**  
- Kanban tarzı proje yönetimi için **GitHub Projects**  
- Kod kalitesi standartlarını sağlamak için **Dal koruma kuralları**  

Tüm bu kaynaklar, yeni ekip üyelerinin işe alım sürecine fayda sağlayacaktır. Ve bunlar genellikle yeni katkıda bulunanların, projeye zaman ayırmaya değer olup olmadığını anlamak için kodunuza bakmadan önce incelediği şeylerdir.  

✅ README dosyaları, hazırlanması zaman alsa da, genellikle meşgul yöneticiler tarafından ihmal edilir. Özellikle açıklayıcı bir örnek bulabilir misiniz? Not: [İyi README'ler oluşturmanıza yardımcı olacak araçlar](https://www.makeareadme.com/) da var, bunları denemek isteyebilirsiniz.  

### Görev: Biraz kod birleştirin  

Katkı belgeleri, insanların projeye katkıda bulunmasına yardımcı olur. Hangi tür katkılara ihtiyacınız olduğunu ve sürecin nasıl işlediğini açıklar. Katkıda bulunanların, GitHub'daki deponuza katkıda bulunabilmeleri için bir dizi adımı izlemeleri gerekecektir:  

1. **Depoyu çatallama**. İnsanların projenizi _fork_ etmelerini isteyebilirsiniz. Fork etmek, deponuzun kendi GitHub profillerinde bir kopyasını oluşturmak anlamına gelir.  
1. **Klonlama**. Buradan projeyi yerel makinelerine klonlayacaklar.  
1. **Bir dal oluşturma**. Çalışmaları için bir _dal_ oluşturmalarını isteyeceksiniz.  
1. **Değişikliklerini bir alana odaklama**. Katkıda bulunanlardan katkılarını bir seferde bir şeye odaklamalarını isteyin – bu şekilde, çalışmalarını birleştirme şansınız daha yüksek olur. Örneğin, bir hata düzeltmesi yazdıklarını, yeni bir özellik eklediklerini ve birkaç testi güncellediklerini hayal edin – ya 3'ten sadece 2'sini ya da 1'ini uygulamak isterseniz veya uygulayabilirseniz?  

✅ Dalların iyi kod yazma ve gönderme açısından özellikle kritik olduğu bir durumu hayal edin. Hangi kullanım durumlarını düşünebilirsiniz?  

> Not, dünyada görmek istediğiniz değişim olun ve kendi çalışmalarınız için de dallar oluşturun. Yaptığınız tüm commit'ler, şu anda "checkout" yaptığınız dalda yapılacaktır. Hangi dalda olduğunuzu görmek için `git status` kullanın.  

Bir katkıda bulunan iş akışını inceleyelim. Katkıda bulunanın zaten _fork_ ve _clone_ işlemlerini yaptığını ve yerel makinesinde çalışmaya hazır bir Git deposu olduğunu varsayalım:  

1. **Bir dal oluşturun**. Katkıda bulunmayı düşündükleri değişiklikleri içerecek bir dal oluşturmak için `git branch` komutunu kullanın:  

   ```bash
   git branch [branch-name]
   ```
  
   > 💡 **Modern Yaklaşım**: Yeni bir dal oluşturup ona geçiş yapmak için tek bir komut da kullanabilirsiniz:  
   ```bash
   git switch -c [branch-name]
   ```
  
1. **Çalışma dalına geçin**. Belirtilen dala geçin ve çalışma dizinini `git switch` ile güncelleyin:  

   ```bash
   git switch [branch-name]
   ```
  
   > 💡 **Modern Not**: `git switch`, dallar arasında geçiş yaparken `git checkout`un modern bir alternatifidir. Daha net ve yeni başlayanlar için daha güvenlidir.  

1. **Çalışmaya başlayın**. Bu noktada değişikliklerinizi eklemek istersiniz. Aşağıdaki komutlarla Git'e bunu bildirmeyi unutmayın:  

   ```bash
   git add .
   git commit -m "my changes"
   ```
  
   > ⚠️ **Commit Mesajı Kalitesi**: Commit'inize hem sizin hem de yardım ettiğiniz deponun yöneticisi için iyi bir isim verin. Yaptığınız değişiklikler hakkında spesifik olun!  

1. **Çalışmanızı `main` dalıyla birleştirin**. Bir noktada çalışmanızı tamamladınız ve bunu `main` dalının çalışmasıyla birleştirmek istiyorsunuz. Bu arada `main` dalı değişmiş olabilir, bu yüzden önce aşağıdaki komutlarla en son haline güncellediğinizden emin olun:  

   ```bash
   git switch main
   git pull
   ```
  
   Bu noktada, herhangi bir _çakışma_, yani Git'in değişiklikleri kolayca _birleştiremediği_ durumların çalışma dalınızda gerçekleştiğinden emin olmak istersiniz. Bu nedenle aşağıdaki komutları çalıştırın:  

   ```bash
   git switch [branch_name]
   git merge main
   ```
  
   `git merge main` komutu, `main` dalından tüm değişiklikleri dalınıza getirecektir. Umarız sorunsuz bir şekilde devam edebilirsiniz. Eğer edemezseniz, VS Code, Git'in _kafasının karıştığı_ yerleri size gösterecek ve etkilenen dosyaları değiştirerek hangi içeriğin en doğru olduğunu belirtebilirsiniz.  

   💡 **Modern alternatif**: Daha temiz bir geçmiş için `git rebase` kullanmayı düşünün:  
   ```bash
   git rebase main
   ```
  
   Bu, commit'lerinizi en son main dalının üzerine yeniden oynatır ve lineer bir geçmiş oluşturur.  

1. **Çalışmanızı GitHub'a gönderin**. Çalışmanızı GitHub'a göndermek iki şey anlamına gelir. Dalınızı deponuza itmek ve ardından bir PR (Pull Request) açmak.  

   ```bash
   git push --set-upstream origin [branch-name]
   ```
  
   Yukarıdaki komut, dalı fork edilmiş deponuza oluşturur.  

1. **Bir PR açın**. Sonraki adım, bir PR açmaktır. Bunu, GitHub'daki fork edilmiş deponuza giderek yapabilirsiniz. GitHub'da yeni bir PR oluşturmak isteyip istemediğinizi soran bir gösterge göreceksiniz, buna tıklayın ve commit mesajı başlığını değiştirebileceğiniz, daha uygun bir açıklama ekleyebileceğiniz bir arayüze yönlendirilirsiniz. Fork ettiğiniz deponun yöneticisi bu PR'ı görecek ve _parmaklarınızı çaprazlayın_ PR'ınızı beğenip _birleştirecek_. Artık bir katkıda bulundunuz, yaşasın :)  

   💡 **Modern ipucu**: PR'ları GitHub CLI kullanarak da oluşturabilirsiniz:  
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```
  
   🔧 **PR'ler için en iyi uygulamalar**:  
   - "Fixes #123" gibi anahtar kelimeler kullanarak ilgili sorunlara bağlantı verin.  
   - Kullanıcı arayüzü değişiklikleri için ekran görüntüleri ekleyin.  
   - Belirli inceleyiciler isteyin.  
   - Devam eden işler için taslak PR'lar kullanın.  
   - İnceleme talep etmeden önce tüm CI kontrollerinin geçtiğinden emin olun.  

1. **Temizlik yapın**. Bir PR'ı başarıyla birleştirdikten sonra _temizlik_ yapmak iyi bir uygulama olarak kabul edilir. Hem yerel dalınızı hem de GitHub'a ittiğiniz dalı temizlemek istersiniz. Önce aşağıdaki komutla yerel olarak silin:  

   ```bash
   git branch -d [branch-name]
   ```
  
   Daha sonra, fork edilmiş deponun GitHub sayfasına gidin ve az önce oraya ittiğiniz uzak dalı kaldırın.  

`Pull request` (çekme isteği) biraz garip bir terim gibi görünebilir çünkü aslında değişikliklerinizi projeye itmek istiyorsunuz. Ancak yönetici (proje sahibi) veya çekirdek ekip, projedeki "main" dalıyla birleştirmeden önce değişikliklerinizi değerlendirmelidir, bu yüzden aslında bir yöneticiden bir değişiklik kararı talep ediyorsunuz.  

Bir pull request, bir dalda yapılan değişiklikleri karşılaştırmak ve tartışmak için bir yerdir; incelemeler, yorumlar, entegre testler ve daha fazlasını içerir. İyi bir pull request, bir commit mesajıyla aynı kuralları yaklaşık olarak takip eder. Örneğin, çalışmanız bir sorunu çözdüğünde, bu soruna bir referans ekleyebilirsiniz. Bu, bir `#` işareti ve ardından sorunun numarası ile yapılır. Örneğin `#97`.  
🤞Tüm kontrollerin geçtiğini ve proje sahibinin değişikliklerinizi projeye dahil ettiğini umuyorum🤞

GitHub'daki ilgili uzak dalda yapılan tüm yeni commit'lerle mevcut yerel çalışma dalınızı güncelleyin:

`git pull`

## Açık Kaynağa Katkıda Bulunmak (Etki Yaratma Şansınız!)

Hazır mısınız? Çünkü bu sizi gerçekten şaşırtacak! 🤯 Açık kaynak projelerine katkıda bulunmaktan bahsedelim – bunu sizinle paylaşmayı düşündükçe tüylerim diken diken oluyor!

Bu, gerçekten olağanüstü bir şeyin parçası olma şansınız. Milyonlarca geliştiricinin her gün kullandığı araçları geliştirdiğinizi veya arkadaşlarınızın sevdiği bir uygulamadaki bir hatayı düzelttiğinizi hayal edin. Bu sadece bir hayal değil – açık kaynak katkısının tam olarak ne olduğu bu!

Her düşündüğümde beni heyecanlandıran şey şu: öğrendiğiniz her bir araç – kod editörünüz, keşfedeceğimiz framework'ler, hatta şu anda bu yazıyı okuduğunuz tarayıcı – bir zamanlar sizin gibi biri tarafından yapılan ilk katkıyla başladı. En sevdiğiniz VS Code uzantısını geliştiren o parlak geliştirici? Bir zamanlar titreyen ellerle "pull request oluştur" düğmesine tıklayan bir acemiydi, tıpkı sizin yapacağınız gibi.

Ve işte en güzel kısmı: açık kaynak topluluğu internetin en büyük grup sarılması gibi. Çoğu proje yeni başlayanları aktif olarak arar ve "good first issue" etiketiyle işaretlenmiş sorunlar, özellikle sizin gibi insanlar için hazırlanmıştır! Proje sahipleri, yeni katkıda bulunanları gördüklerinde gerçekten heyecanlanır çünkü kendi ilk adımlarını hatırlarlar.

Burada sadece kod yazmayı öğrenmiyorsunuz – dijital dünyayı biraz daha iyi hale getirmek için her gün uyanan küresel bir yapıcılar ailesine katılmaya hazırlanıyorsunuz. Kulübe hoş geldiniz! 🌟

Öncelikle, GitHub'da ilginizi çeken ve değişiklik yapmak istediğiniz bir depo (**repo**) bulalım. İçeriğini bilgisayarınıza kopyalamak isteyeceksiniz.

✅ 'Yeni başlayanlar için uygun' depoları bulmanın iyi bir yolu [‘good-first-issue’ etiketiyle arama yapmak](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/)dır.

![Bir depoyu yerel olarak kopyalayın](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.tr.png)

Kod kopyalamanın birkaç yolu vardır. Bir yol, HTTPS, SSH veya GitHub CLI (Komut Satırı Arayüzü) kullanarak deponun içeriğini "klonlamaktır".

Terminalinizi açın ve depoyu şu şekilde klonlayın:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

Projede çalışmak için doğru klasöre geçin:
`cd ProjectURL`

Ayrıca tüm projeyi şu yollarla açabilirsiniz:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - Tarayıcıda VS Code ile GitHub'ın bulut geliştirme ortamı
- **[GitHub Desktop](https://desktop.github.com/)** - Git işlemleri için bir GUI uygulaması  
- **[GitHub.dev](https://github.dev)** - Herhangi bir GitHub deposunda `.` tuşuna basarak tarayıcıda VS Code'u açın
- **VS Code** ve GitHub Pull Requests uzantısı ile

Son olarak, kodu sıkıştırılmış bir klasör olarak indirebilirsiniz.

### GitHub hakkında birkaç ilginç şey

GitHub'daki herhangi bir genel depoyu yıldızlayabilir, izleyebilir ve/veya "fork" yapabilirsiniz. Yıldızladığınız depoları sağ üst açılır menüde bulabilirsiniz. Bu, kod için yer imi eklemek gibidir.

Projelerin bir sorun izleyicisi vardır, genellikle GitHub'da "Issues" sekmesinde belirtilir, burada insanlar projeyle ilgili sorunları tartışır. Ve Pull Requests sekmesi, devam eden değişikliklerin tartışıldığı ve gözden geçirildiği yerdir.

Projeler ayrıca forumlarda, e-posta listelerinde veya Slack, Discord veya IRC gibi sohbet kanallarında tartışmalara sahip olabilir.

🔧 **Modern GitHub özellikleri**:
- **GitHub Discussions** - Topluluk sohbetleri için yerleşik forum
- **GitHub Sponsors** - Proje sahiplerini finansal olarak destekleme  
- **Security tab** - Güvenlik açıkları raporları ve güvenlik tavsiyeleri
- **Actions tab** - Otomatik iş akışlarını ve CI/CD süreçlerini görün
- **Insights tab** - Katkıda bulunanlar, commit'ler ve proje sağlığı hakkında analizler
- **Projects tab** - GitHub'ın yerleşik proje yönetim araçları

✅ Yeni GitHub deponuzda biraz dolaşın ve ayarları düzenlemek, deponuza bilgi eklemek, bir proje oluşturmak (örneğin bir Kanban tahtası gibi) ve otomasyon için GitHub Actions'ı ayarlamak gibi birkaç şey deneyin. Yapabileceğiniz çok şey var!

---

## 🚀 Meydan Okuma 

Tamam, şimdi yeni GitHub süper güçlerinizi test etme zamanı! 🚀 İşte her şeyi en tatmin edici şekilde anlamanızı sağlayacak bir meydan okuma:

Bir arkadaşınızı (veya sürekli "bu bilgisayar işleriyle ne yapıyorsun?" diye soran bir aile üyenizi) kapın ve birlikte bir kodlama macerasına atılın! İşte gerçek sihrin gerçekleştiği yer – bir proje oluşturun, onların fork yapmasına izin verin, birkaç dal oluşturun ve değişiklikleri birleştirin, tıpkı profesyoneller gibi.

Yalan söylemeyeceğim – muhtemelen bir noktada güleceksiniz (özellikle ikiniz aynı satırı değiştirmeye çalıştığınızda), belki kafanız karışacak, ama kesinlikle tüm öğrenmeyi değerli kılan o harika "aha!" anlarını yaşayacaksınız. Ayrıca, ilk başarılı birleştirmeyi başka biriyle paylaşmanın özel bir yanı var – ne kadar ilerlediğinizi kutlamanın küçük bir yolu gibi!

Henüz bir kodlama arkadaşınız yok mu? Hiç sorun değil! GitHub topluluğu, yeni olmanın nasıl bir şey olduğunu hatırlayan inanılmaz derecede misafirperver insanlarla dolu. "good first issue" etiketli depoları arayın – temelde "Hey yeni başlayanlar, bizimle öğrenin!" diyorlar. Ne kadar harika, değil mi?

## Ders Sonrası Quiz
[Ders sonrası quiz](https://ff-quizzes.netlify.app/web/en/)

## Gözden Geçirme ve Öğrenmeye Devam Etme

Vay! 🎉 Bakın size – GitHub temellerini bir şampiyon gibi fethettiniz! Şu anda beyniniz biraz dolu hissediyorsa, bu tamamen normal ve aslında iyi bir işaret. Başlangıçta anlamam haftalar süren araçları yeni öğrendiniz.

Git ve GitHub inanılmaz derecede güçlüdür (cidden çok güçlüdür) ve tanıdığım her geliştirici – şu anda sihirbaz gibi görünenler dahil – her şeyin oturması için biraz pratik yapıp tökezlemek zorunda kaldı. Bu dersi tamamlamış olmanız, bir geliştiricinin araç setindeki en önemli araçlardan bazılarını öğrenme yolunda olduğunuz anlamına geliyor.

İşte pratik yapmanıza ve daha da harika olmanıza yardımcı olacak bazı harika kaynaklar:

- [Açık kaynak yazılıma katkıda bulunma rehberi](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution) – Fark yaratma yol haritanız
- [Git kopya kağıdı](https://training.github.com/downloads/github-git-cheat-sheet/) – Hızlı başvuru için elinizin altında bulundurun!

Ve unutmayın: pratik mükemmellik değil, ilerleme sağlar! Git ve GitHub'ı ne kadar çok kullanırsanız, o kadar doğal hale gelir. GitHub, güvenli bir ortamda pratik yapmanıza olanak tanıyan bazı harika etkileşimli kurslar oluşturdu:

- [GitHub'a Giriş](https://github.com/skills/introduction-to-github)
- [Markdown ile İletişim Kurma](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Birleştirme Çatışmalarını Yönetme](https://github.com/skills/resolve-merge-conflicts)

**Macera arıyorsanız, bu modern araçlara göz atın:**
- [GitHub CLI belgeleri](https://cli.github.com/manual/) – Komut satırı sihirbazı gibi hissetmek için
- [GitHub Codespaces belgeleri](https://docs.github.com/en/codespaces) – Bulutta kod yazın!
- [GitHub Actions belgeleri](https://docs.github.com/en/actions) – Her şeyi otomatikleştirin
- [Git en iyi uygulamaları](https://www.atlassian.com/git/tutorials/comparing-workflows) – İş akışı oyununu geliştirin 

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Bu derste öğrendiğiniz GitHub iş akışını tamamen gösteren işbirlikçi bir web geliştirme projesi oluşturun. Bu meydan okuma, depo oluşturma, işbirliği özellikleri ve modern Git iş akışlarını gerçek dünya senaryosunda uygulamanıza yardımcı olacak.

**Talimat:** Basit bir "Web Geliştirme Kaynakları" projesi için yeni bir genel GitHub deposu oluşturun. Depo, kategorilere göre düzenlenmiş (HTML, CSS, JavaScript, vb.) yararlı web geliştirme araçlarını ve kaynaklarını listeleyen iyi yapılandırılmış bir README.md dosyasını içermelidir. Depoyu uygun topluluk standartlarıyla ayarlayın, bir lisans, katkı yönergeleri ve bir davranış kuralları ekleyin. CSS kaynaklarını eklemek için bir dal ve JavaScript kaynaklarını eklemek için başka bir dal oluşturun. Her bir dala açıklayıcı commit mesajlarıyla commit yapın, ardından değişiklikleri ana dala birleştirmek için pull request'ler oluşturun. Issues, Discussions gibi GitHub özelliklerini etkinleştirin ve otomatik kontroller için temel bir GitHub Actions iş akışı ayarlayın.

## Ödev 

Göreviniz, kabul etmeyi seçerseniz: GitHub Skills'deki [GitHub'a Giriş](https://github.com/skills/introduction-to-github) kursunu tamamlayın. Bu etkileşimli kurs, öğrendiklerinizi güvenli, rehberli bir ortamda uygulamanıza olanak tanır. Ayrıca, bitirdiğinizde harika bir rozet kazanacaksınız! 🏅

**Daha fazla meydan okumaya hazır mısınız?**
- GitHub hesabınız için SSH kimlik doğrulamasını ayarlayın (artık şifre yok!)
- Günlük Git işlemleriniz için GitHub CLI kullanmayı deneyin
- GitHub Actions iş akışı olan bir depo oluşturun
- Bu depoyu bulut tabanlı bir editörde açarak GitHub Codespaces'ı keşfedin

Unutmayın: her uzman bir zamanlar acemiydi. Bunu başarabilirsiniz! 💪

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.