<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bd3aa6d2b879c30ea496c43aec1c49ed",
  "translation_date": "2025-08-29T00:30:00+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "tr"
}
-->
# VSCode.dev kullanarak bir özgeçmiş web sitesi oluşturun

_Bir işe alım uzmanının özgeçmişinizi istemesi ve sizin ona bir URL göndermeniz ne kadar havalı olurdu?_ 😎

<!----
TODO: isteğe bağlı bir resim ekle
![Bir kod editörü kullanma](../../../../translated_images/webdev101-vscode-dev.f53c14e8dad231ea09d9e07a2db4a01551d2dc6cdf21225038389e11156af023.tr.png)
> Sketchnote by [Author name](https://example.com)
---->

<!---
## Ders Öncesi Quiz
[Ders öncesi quiz](https://ff-quizzes.netlify.app/web/quiz/3)
---->

## Amaçlar

Bu ödevi tamamladıktan sonra şunları öğreneceksiniz:

- Özgeçmişinizi sergilemek için bir web sitesi oluşturma

### Ön Koşullar

1. Bir GitHub hesabı. [GitHub](https://github.com/) adresine gidin ve henüz bir hesabınız yoksa bir hesap oluşturun.

## Adımlar

**Adım 1:** Yeni bir GitHub deposu oluşturun ve ona `my-resume` adını verin.

**Adım 2:** Depoda bir `index.html` dosyası oluşturun. github.com üzerinde en az bir dosya ekleyeceğiz çünkü vscode.dev üzerinde boş bir depo açamazsınız.

`Yeni bir dosya oluşturma` bağlantısına tıklayın, `index.html` adını yazın ve `Yeni dosyayı kaydet` düğmesini seçin.

![github.com üzerinde yeni bir dosya oluşturma](../../../../translated_images/new-file-github.com.c886796d800e8056561829a181be1382c5303da9d902d8b2dd82b68a4806e21f.tr.png)

**Adım 3:** [VSCode.dev](https://vscode.dev) adresini açın ve `Uzaktan Depo Aç` düğmesini seçin.

Özgeçmiş siteniz için yeni oluşturduğunuz deponun URL'sini kopyalayın ve giriş kutusuna yapıştırın:

_`your-username` kısmını GitHub kullanıcı adınızla değiştirin._

```
https://github.com/your-username/my-resume
```

✅ Başarılı olursa, projenizi ve metin editöründe tarayıcıda açılan `index.html` dosyasını göreceksiniz.

![Yeni bir dosya oluşturma](../../../../translated_images/project-on-vscode.dev.e79815a9a95ee7feac72ebe5c941c91279716be37c575dbdbf2f43bea2c7d8b6.tr.png)

**Adım 4:** `index.html` dosyasını açın, aşağıdaki kodu kod alanınıza yapıştırın ve kaydedin.

<details>
    <summary><b>Özgeçmiş web sitenizin içeriğinden sorumlu HTML kodu.</b></summary>
    
        <html>

            <head>
                <link href="style.css" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                <title>Adınız Buraya Gelecek!</title>
            </head>
            <body>
                <header id="header">
                    <!-- özgeçmiş başlığı, adınız ve unvanınız -->
                    <h1>Adınız Buraya Gelecek!</h1>
                    <hr>
                    Rolünüz!
                    <hr>
                </header>
                <main>
                    <article id="mainLeft">
                        <section>
                            <h2>İLETİŞİM</h2>
                            <!-- sosyal medya dahil iletişim bilgileri -->
                            <p>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:username@domain.top-level domain">E-posta adresinizi buraya yazın</a>
                            </p>
                            <p>
                                <i class="fab fa-github" aria-hidden="true"></i>
                                <a href="github.com/yourGitHubUsername">Kullanıcı adınızı buraya yazın!</a>
                            </p>
                            <p>
                                <i class="fab fa-linkedin" aria-hidden="true"></i>
                                <a href="linkedin.com/yourLinkedInUsername">Kullanıcı adınızı buraya yazın!</a>
                            </p>
                        </section>
                        <section>
                            <h2>BECERİLER</h2>
                            <!-- becerileriniz -->
                            <ul>
                                <li>Beceri 1!</li>
                                <li>Beceri 2!</li>
                                <li>Beceri 3!</li>
                                <li>Beceri 4!</li>
                            </ul>
                        </section>
                        <section>
                            <h2>EĞİTİM</h2>
                            <!-- eğitim bilgileriniz -->
                            <h3>Kursunuzu buraya yazın!</h3>
                            <p>
                                Kurumunuzu buraya yazın!
                            </p>
                            <p>
                                Başlangıç - Bitiş Tarihi
                            </p>
                        </section>            
                    </article>
                    <article id="mainRight">
                        <section>
                            <h2>HAKKINDA</h2>
                            <!-- kendiniz hakkında -->
                            <p>Kendiniz hakkında kısa bir yazı yazın!</p>
                        </section>
                        <section>
                            <h2>İŞ DENEYİMİ</h2>
                            <!-- iş deneyimleriniz -->
                            <h3>İş Unvanı</h3>
                            <p>
                                Kurum Adı Buraya Gelecek | Başlangıç Ayı – Bitiş Ayı
                            </p>
                            <ul>
                                    <li>Görev 1 - Ne yaptığınızı yazın!</li>
                                    <li>Görev 2 - Ne yaptığınızı yazın!</li>
                                    <li>Katkılarınızın sonuçlarını/etkisini yazın</li>
                                    
                            </ul>
                            <h3>İş Unvanı 2</h3>
                            <p>
                                Kurum Adı Buraya Gelecek | Başlangıç Ayı – Bitiş Ayı
                            </p>
                            <ul>
                                    <li>Görev 1 - Ne yaptığınızı yazın!</li>
                                    <li>Görev 2 - Ne yaptığınızı yazın!</li>
                                    <li>Katkılarınızın sonuçlarını/etkisini yazın</li>
                                    
                            </ul>
                        </section>
                    </article>
                </main>
            </body>
        </html>
</details>

HTML kodundaki _yer tutucu metni_ değiştirerek özgeçmiş bilgilerinizi ekleyin.

**Adım 5:** My-Resume klasörünün üzerine gelin, `Yeni Dosya ...` simgesine tıklayın ve projenizde 2 yeni dosya oluşturun: `style.css` ve `codeswing.json` dosyaları.

**Adım 6:** `style.css` dosyasını açın, aşağıdaki kodu yapıştırın ve kaydedin.

<details>
        <summary><b>Sitenin düzenini biçimlendirmek için CSS kodu.</b></summary>
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 16px;
                max-width: 960px;
                margin: auto;
            }
            h1 {
                font-size: 3em;
                letter-spacing: .6em;
                padding-top: 1em;
                padding-bottom: 1em;
            }

            h2 {
                font-size: 1.5em;
                padding-bottom: 1em;
            }

            h3 {
                font-size: 1em;
                padding-bottom: 1em;
            }
            main { 
                display: grid;
                grid-template-columns: 40% 60%;
                margin-top: 3em;
            }
            header {
                text-align: center;
                margin: auto 2em;
            }

            section {
                margin: auto 1em 4em 2em;
            }

            i {
                margin-right: .5em;
            }

            p {
                margin: .2em auto
            }

            hr {
                border: none;
                background-color: lightgray;
                height: 1px;
            }

            h1, h2, h3 {
                font-weight: 100;
                margin-bottom: 0;
            }
            #mainLeft {
                border-right: 1px solid lightgray;
            }
            
</details>

**Adım 6:** `codeswing.json` dosyasını açın, aşağıdaki kodu yapıştırın ve kaydedin.

    {
    "scripts": [],
    "styles": []
    }

**Adım 7:** Özgeçmiş web sitesini kod alanında görselleştirmek için `Codeswing uzantısını` yükleyin.

Etkinlik çubuğundaki _`Uzantılar`_ simgesine tıklayın ve Codeswing yazın. Uzantıyı yüklemek için genişletilmiş etkinlik çubuğundaki _mavi yükleme düğmesine_ tıklayın veya uzantıyı seçtiğinizde kod alanında görünen yükleme düğmesini kullanın. Uzantıyı yükledikten hemen sonra, projenizdeki değişiklikleri kod alanında gözlemleyin 😃

![Uzantıları yükleme](../../../../8-code-editor/images/install-extension.gif)

Uzantıyı yükledikten sonra ekranınızda göreceğiniz şey budur.

![Codeswing uzantısı çalışırken](../../../../translated_images/after-codeswing-extension-pb.0ebddddcf73b550994947a9084e35e2836c713ae13839d49628e3c764c1cfe83.tr.png)

Yaptığınız değişikliklerden memnunsanız, `Değişiklikler` klasörünün üzerine gelin ve değişiklikleri aşamalandırmak için `+` düğmesine tıklayın.

Bir commit mesajı yazın _(Projede yaptığınız değişikliğin açıklaması)_ ve değişikliklerinizi `onay işareti`ne tıklayarak kaydedin. Projenizde çalışmayı tamamladıktan sonra, GitHub'daki depoya geri dönmek için sol üstteki hamburger menü simgesini seçin.

Tebrikler 🎉 Sadece birkaç adımda vscode.dev kullanarak özgeçmiş web sitenizi oluşturdunuz.

## 🚀 Meydan Okuma

Değişiklik yapma izniniz olan bir uzak depo açın ve bazı dosyaları güncelleyin. Ardından, değişikliklerinizle yeni bir dal oluşturmayı ve bir Pull Request yapmayı deneyin.

<!----
## Ders Sonrası Quiz
[Ders sonrası quiz](https://ff-quizzes.netlify.app/web/quiz/4)
---->

## İnceleme ve Kendi Kendine Çalışma

[VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) ve diğer özellikleri hakkında daha fazla bilgi edinin.

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.