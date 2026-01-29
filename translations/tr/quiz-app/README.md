# Quiz uygulaması

Bu quizler, https://aka.ms/webdev-beginners adresindeki veri bilimi müfredatının ders öncesi ve sonrası quizleridir.

## Çeviri bir quiz seti ekleme

Bir quiz çevirisi eklemek için, `assets/translations` klasörlerinde eşleşen quiz yapıları oluşturun. Orijinal quizler `assets/translations/en` klasöründe bulunur. Quizler birkaç gruba ayrılmıştır. Numaralandırmayı doğru quiz bölümüyle hizalamayı unutmayın. Bu müfredatta toplam 40 quiz bulunmaktadır ve numaralandırma 0'dan başlar.

  
<details>
<summary>Bir çeviri dosyasının yapısı şu şekildedir:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

Çevirileri düzenledikten sonra, çeviri klasöründeki index.js dosyasını düzenleyerek tüm dosyaları `en` klasöründeki kurallara uygun şekilde içe aktarın.

`assets/translations` klasöründeki `index.js` dosyasını düzenleyerek yeni çevrilmiş dosyaları içe aktarın.

Örneğin, çeviri JSON dosyanız `ex.json` ise, 'ex' çeviri anahtarı olarak belirleyin ve aşağıdaki gibi içe aktarın:

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## Quiz Uygulamasını Yerel Olarak Çalıştırma

### Gereksinimler

- Bir GitHub hesabı
- [Node.js ve Git](https://nodejs.org/)

### Kurulum ve Ayarlar

1. Bu [şablondan](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) bir depo oluşturun.

1. Yeni deponuzu klonlayın ve quiz-app dizinine gidin:

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm paketlerini ve bağımlılıklarını yükleyin:

   ```bash
   npm install
   ```

### Uygulamayı Derleme

1. Çözümü derlemek için şu komutu çalıştırın:

   ```bash
   npm run build
   ```

### Uygulamayı Başlatma

1. Çözümü çalıştırmak için şu komutu çalıştırın:

    ```bash
    npm run dev
    ```

### [Opsiyonel] Kod Denetimi

1. Kodun denetlendiğinden emin olmak için şu komutu çalıştırın:

    ```bash
    npm run lint
    ```

## Quiz uygulamasını Azure'a Dağıtma 

### Gereksinimler
- Bir Azure Aboneliği. Ücretsiz bir abonelik için [buradan](https://aka.ms/azure-free) kaydolabilirsiniz.

    _Bu quiz uygulamasını dağıtmanın tahmini maliyeti: ÜCRETSİZ_

[![Azure'a Dağıt](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Yukarıdaki bağlantı üzerinden Azure'da oturum açtıktan sonra, bir abonelik ve kaynak grubu seçin, ardından:

- Statik Web Uygulaması detayları: Bir ad girin ve bir barındırma planı seçin.
- GitHub Girişi: Dağıtım kaynağınızı GitHub olarak ayarlayın, ardından giriş yapın ve formdaki gerekli alanları doldurun:
    - *Organizasyon* – Organizasyonunuzu seçin.
    - *Depo* – Web Dev for Beginners müfredat deposunu seçin.
    - *Dal* - Bir dal seçin (main).
- Derleme Ön Ayarları: Azure Static Web Apps, uygulamanızda kullanılan çerçeveyi algılamak için bir algılama algoritması kullanır.
    - *Uygulama konumu* - ./quiz-app
    - *Api konumu* -
    - *Çıktı konumu* - dist
- Dağıtım: 'Gözden Geçir + Oluştur' ve ardından 'Oluştur' seçeneğine tıklayın.

    Dağıtım tamamlandıktan sonra, deponuzun *.github* dizininde bir iş akışı dosyası oluşturulacaktır. Bu iş akışı dosyası, uygulamanın Azure'a yeniden dağıtımını tetikleyecek olayların talimatlarını içerir, örneğin, _**main** dalına bir **push**_ gibi.

    <details>
    <summary>Örnek İş Akışı Dosyası</summary>
    İşte GitHub Actions iş akışı dosyasının nasıl görünebileceğine dair bir örnek:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- Dağıtımdan Sonra: Dağıtım tamamlandıktan sonra 'Dağıtıma Git' ve ardından 'Uygulamayı tarayıcıda görüntüle' seçeneğine tıklayın.

GitHub Action (iş akışı) başarıyla çalıştırıldıktan sonra, canlı sayfayı yenileyerek uygulamanızı görüntüleyebilirsiniz.

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.