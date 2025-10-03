<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T09:43:36+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "tr"
}
-->
***

# Bir Kod Editörü Kullanmak: [VSCode.dev](https://vscode.dev) ile Ustalık

**Hoş geldiniz!**  
Bu ders, sizi [VSCode.dev](https://vscode.dev)—güçlü, web tabanlı kod editörü—kullanımında temel seviyeden ileri seviyeye taşıyor. Kod düzenleme, projeleri yönetme, değişiklikleri takip etme, eklentiler yükleme ve profesyonel gibi iş birliği yapmayı öğrenerek, tarayıcınızdan hiçbir kurulum gerektirmeden çalışabileceksiniz.

***

## Öğrenme Hedefleri

Bu dersin sonunda şunları yapabileceksiniz:

- Herhangi bir projede, her yerde bir kod editörünü verimli bir şekilde kullanmak
- Dahili sürüm kontrolü ile çalışmalarınızı sorunsuz bir şekilde takip etmek
- Editör özelleştirmeleri ve eklentilerle geliştirme iş akışınızı kişiselleştirmek ve hızlandırmak

***

## Ön Koşullar

Başlamak için, dünya çapında kod depolarını yönetmenizi ve iş birliği yapmanızı sağlayan **ücretsiz bir [GitHub](https://github.com) hesabına kaydolun**. Henüz bir hesabınız yoksa, [buradan oluşturabilirsiniz](https://github.com/).

***

## Neden Web Tabanlı Bir Kod Editörü Kullanmalı?

VSCode.dev gibi bir **kod editörü**, kod yazma, düzenleme ve yönetme için komuta merkezinizdir. Kullanıcı dostu arayüzü, birçok özelliği ve tarayıcı üzerinden anında erişimi ile şunları yapabilirsiniz:

- Herhangi bir cihazda projeleri düzenleyin
- Kurulum zahmetinden kurtulun
- Anında iş birliği yapın ve katkıda bulunun

VSCode.dev ile rahat ettiğinizde, her yerden, her zaman kodlama görevlerini üstlenmeye hazır olacaksınız.

***

## VSCode.dev ile Başlangıç

**[VSCode.dev](https://vscode.dev)** adresine gidin—kurulum yok, indirme yok. GitHub ile oturum açmak, ayarlarınızı, eklentilerinizi ve depolarınızı senkronize etme dahil tam erişim sağlar. İstenirse, GitHub hesabınızı bağlayın.

Yükleme tamamlandıktan sonra çalışma alanınız şu şekilde görünecektir:

![Varsayılan VSCode.dev](../images/default-vscode-dev üç ana bölümden oluşur, soldan sağa:
- **Etkinlik çubuğu:** 🔎 (Arama), ⚙️ (Ayarlar), dosyalar, kaynak kontrolü gibi simgeler.
- **Kenar çubuğu:** Etkinlik çubuğundaki seçilen simgeye göre bağlam değiştirir (varsayılan olarak *Gezgin* dosyaları gösterir).
- **Editör/kod alanı:** Sağdaki en büyük bölüm—kod düzenleyeceğiniz ve görüntüleyeceğiniz yer.

Özellikleri keşfetmek için simgelere tıklayın, ancak yerinizi korumak için _Gezgin_ bölümüne geri dönün.

***

## Bir GitHub Deposu Açma

### Yöntem 1: Editörden

1. [VSCode.dev](https://vscode.dev) adresine gidin. **"Open Remote Repository"** seçeneğine tıklayın.

   ![Uzaktan depo aç](../../../../8-code-editor/images/open-remote-repository _Komut Paleti_ni (Ctrl-Shift-P veya Mac'te Cmd-Shift-P) kullanın.

   ![Palet Menüsü](../images/palette-menu.png uzaktan depo aç.”
   - Seçeneği seçin.
   - GitHub depo URL'nizi yapıştırın (ör. `https://github.com/microsoft/Web-Dev-For-Beginners`) ve Enter'a basın.

Başarılı olursa, tüm proje yüklenmiş ve düzenlemeye hazır olacaktır!

***

### Yöntem 2: URL ile Anında

Herhangi bir GitHub depo URL'sini doğrudan VSCode.dev'de açmak için `github.com` kısmını `vscode.dev/github` ile değiştirin.  
Örneğin:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Bu özellik, herhangi bir projeye hızlı erişimi süper kolaylaştırır.

***

## Projenizde Dosyaları Düzenleme

Depo açıldıktan sonra şunları yapabilirsiniz:

### 1. **Yeni Bir Dosya Oluştur**
- *Gezgin* kenar çubuğunda, istediğiniz klasöre gidin veya kök dizini kullanın.
- _‘Yeni dosya ...’_ simgesine tıklayın.
- Dosyanıza bir ad verin, **Enter** tuşuna basın ve dosyanız anında görünür.

![Yeni bir dosya oluştur](../images/create-new-file 2. **Dosyaları Düzenle ve Kaydet**

- *Gezgin* bölümünde bir dosyaya tıklayarak kod alanında açın.
- Gerekli değişiklikleri yapın.
- VSCode.dev değişikliklerinizi otomatik olarak kaydeder, ancak manuel olarak kaydetmek için Ctrl+S tuşuna basabilirsiniz.

![Bir dosyayı düzenle](../images/edit-a-file.png. **Sürüm Kontrolü ile Değişiklikleri Takip Et ve İşle**

VSCode.dev, entegre **Git** sürüm kontrolüne sahiptir!

- _'Kaynak Kontrolü'_ simgesine tıklayarak yapılan tüm değişiklikleri görüntüleyin.
- `Changes` klasöründeki dosyalar eklemeleri (yeşil) ve silmeleri (kırmızı) gösterir.  
  ![Değişiklikleri görüntüle](../images/working-tree.png dosyaların yanındaki `+` simgesine tıklayarak değişiklikleri işleme hazırlayın.
- **İstenmeyen** değişiklikleri geri alma simgesine tıklayarak iptal edin.
- Açıklayıcı bir işlem mesajı yazın, ardından onay işaretine tıklayarak işlemi tamamlayın ve gönderin.

GitHub'daki deponuza geri dönmek için sol üstteki hamburger menüsünü seçin.

![Değişiklikleri aşamalandır ve işle](../images/edit-vscode.dev Eklentilerle Güçlendirme

Eklentiler, VSCode.dev'e diller, temalar, hata ayıklayıcılar ve üretkenlik araçları eklemenizi sağlar—kodlama hayatınızı daha kolay ve eğlenceli hale getirir.

### Eklentileri Gözden Geçirme ve Yönetme

- Etkinlik çubuğundaki **Eklentiler simgesine** tıklayın.
- _'Marketplace'te Eklentileri Ara'_ kutusunda bir eklenti arayın.

  ![Eklenti detayları](../images/extension-details:
  - **Yüklü:** Eklediğiniz tüm eklentiler
  - **Popüler:** Sektör favorileri
  - **Önerilen:** İş akışınıza uygun öneriler

  ![Eklentileri görüntüle](

  

***

### 1. **Eklentileri Yükleme**

- Arama kutusuna eklentinin adını girin, üzerine tıklayın ve detayları editörde inceleyin.
- Kenar çubuğundaki _veya_ ana kod alanındaki **mavi Yükle düğmesine** basın.

  ![Eklentileri yükle](../images/install-extension 2. **Eklentileri Özelleştirme**

- Yüklü eklentinizi bulun.
- **Dişli simgesine** tıklayın → _Eklenti Ayarları_ seçeneğini seçerek davranışları istediğiniz gibi ayarlayın.

  ![Eklenti ayarlarını değiştir](../images/extension-settings 3. **Eklentileri Yönetme**
Şunları yapabilirsiniz:

- **Devre Dışı Bırak:** Bir eklentiyi geçici olarak kapatın ancak yüklü tutun
- **Kaldır:** Artık ihtiyaç duymuyorsanız kalıcı olarak kaldırın

  Eklentiyi bulun, Dişli simgesine tıklayın ve ‘Devre Dışı Bırak’ veya ‘Kaldır’ seçeneğini seçin ya da kod alanındaki mavi düğmeleri kullanın.

***

## Ödev

Becerilerinizi test edin: [VSCode.dev kullanarak bir özgeçmiş web sitesi oluşturun](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Daha Fazla Keşif ve Kendi Kendine Çalışma

- [Resmi VSCode Web Belgeleri](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) ile daha derine dalın.
- Gelişmiş çalışma alanı özelliklerini, klavye kısayollarını ve ayarları keşfedin.

***

**Artık VSCode.dev kullanarak her yerden, herhangi bir cihazda kod yazmaya, oluşturmaya ve iş birliği yapmaya hazırsınız!**

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.