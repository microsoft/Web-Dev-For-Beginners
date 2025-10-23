<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "32bd800759c3e943c38ad9ae6e1f51e0",
  "translation_date": "2025-10-22T23:59:52+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "tr"
}
-->
# Bankacılık Uygulaması Yapımı Bölüm 4: Durum Yönetimi Kavramları

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/47)

## Giriş

Durum yönetimi, Voyager uzay aracındaki navigasyon sistemi gibidir – her şey sorunsuz çalıştığında, varlığını neredeyse fark etmezsiniz. Ancak işler ters gittiğinde, yıldızlararası uzaya ulaşmak ile kozmik boşlukta kaybolmak arasındaki farkı yaratır. Web geliştirmede, durum uygulamanızın hatırlaması gereken her şeyi temsil eder: kullanıcı giriş durumu, form verileri, gezinme geçmişi ve geçici arayüz durumları.

Bankacılık uygulamanız basit bir giriş formundan daha karmaşık bir uygulamaya dönüştükçe, muhtemelen bazı yaygın zorluklarla karşılaştınız. Sayfayı yenileyin ve kullanıcılar beklenmedik bir şekilde çıkış yapar. Tarayıcıyı kapatın ve tüm ilerleme kaybolur. Bir sorunu ayıklayın ve aynı veriyi farklı şekillerde değiştiren birden fazla işlev arasında kaybolursunuz.

Bunlar kötü kodlamanın işaretleri değil – uygulamalar belirli bir karmaşıklık eşiğine ulaştığında ortaya çıkan doğal büyüme sancılarıdır. Her geliştirici, uygulamaları "konsept kanıtı"ndan "üretime hazır" hale geçerken bu zorluklarla karşılaşır.

Bu derste, bankacılık uygulamanızı güvenilir, profesyonel bir uygulamaya dönüştüren merkezi bir durum yönetim sistemi uygulayacağız. Veri akışlarını tahmin edilebilir bir şekilde yönetmeyi, kullanıcı oturumlarını uygun şekilde sürdürmeyi ve modern web uygulamalarının gerektirdiği akıcı kullanıcı deneyimini oluşturmayı öğreneceksiniz.

## Ön Koşullar

Durum yönetimi kavramlarına dalmadan önce, geliştirme ortamınızın düzgün bir şekilde ayarlandığından ve bankacılık uygulamanızın temelinin hazır olduğundan emin olmanız gerekir. Bu ders, bu serinin önceki bölümlerindeki kavramlar ve kod üzerine doğrudan inşa edilmiştir.

Devam etmeden önce aşağıdaki bileşenlerin hazır olduğundan emin olun:

**Gerekli Kurulum:**
- [Veri alma dersi](../3-data/README.md)'ni tamamlayın - uygulamanızın hesap verilerini başarıyla yükleyip görüntülemesi gerekiyor
- [Node.js](https://nodejs.org) 'i arka uç API'sini çalıştırmak için sisteminize kurun
- Hesap veri işlemlerini yönetmek için [sunucu API'sını](../api/README.md) yerel olarak başlatın

**Ortamınızı Test Etme:**

API sunucunuzun doğru çalıştığını aşağıdaki komutu bir terminalde çalıştırarak doğrulayın:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

**Bu komut ne yapar:**
- **Bir GET isteği gönderir** yerel API sunucunuza
- **Bağlantıyı test eder** ve sunucunun yanıt verdiğini doğrular
- **API sürüm bilgilerini döndürür** her şey düzgün çalışıyorsa

---

## Mevcut Durum Sorunlarını Teşhis Etme

Sherlock Holmes'un bir suç mahallini incelemesi gibi, kullanıcı oturumlarının kaybolması gizemini çözmeden önce mevcut uygulamamızda tam olarak neler olduğunu anlamamız gerekiyor.

Mevcut durum yönetimi zorluklarını ortaya çıkaran basit bir deney yapalım:

**🧪 Bu Tanı Testini Deneyin:**
1. Bankacılık uygulamanıza giriş yapın ve kontrol paneline gidin
2. Tarayıcı sayfasını yenileyin
3. Giriş durumunuza ne olduğunu gözlemleyin

Eğer giriş ekranına geri yönlendirildiyseniz, klasik durum devamlılığı sorununu keşfettiniz demektir. Bu davranış, mevcut uygulamamızın kullanıcı verilerini her sayfa yüklemesinde sıfırlanan JavaScript değişkenlerinde saklamasından kaynaklanır.

**Mevcut Uygulama Sorunları:**

[Önceki dersten](../3-data/README.md) basit `account` değişkeni, hem kullanıcı deneyimini hem de kodun sürdürülebilirliğini etkileyen üç önemli sorun yaratır:

| Sorun | Teknik Sebep | Kullanıcı Etkisi |
|-------|--------------|------------------|
| **Oturum Kaybı** | Sayfa yenileme JavaScript değişkenlerini sıfırlar | Kullanıcılar sık sık yeniden kimlik doğrulaması yapmak zorunda kalır |
| **Dağınık Güncellemeler** | Birden fazla işlev doğrudan durumu değiştirir | Hata ayıklama giderek zorlaşır |
| **Eksik Temizlik** | Çıkış tüm durum referanslarını temizlemez | Potansiyel güvenlik ve gizlilik endişeleri |

**Mimari Zorluk:**

Titanik'in bölümlere ayrılmış tasarımı gibi, bireysel sorunları çözmek, altta yatan mimari sorunu ele almayacaktır. Kapsamlı bir durum yönetimi çözümüne ihtiyacımız var.

> 💡 **Burada aslında neyi başarmaya çalışıyoruz?**

[Durum yönetimi](https://en.wikipedia.org/wiki/State_management) aslında iki temel bulmacayı çözmekle ilgilidir:

1. **Verim Nerede?**: Hangi bilgilere sahip olduğumuzu ve nereden geldiğini takip etmek
2. **Herkes Aynı Sayfada mı?**: Kullanıcıların gördüklerinin gerçekte olanlarla eşleştiğinden emin olmak

**Planımız:**

Kendi etrafımızda dönmek yerine, **merkezi bir durum yönetimi** sistemi oluşturacağız. Bunu, tüm önemli şeylerin sorumluluğunu üstlenen gerçekten organize bir kişi gibi düşünün:

![HTML, kullanıcı eylemleri ve durum arasındaki veri akışını gösteren şema](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.tr.png)

**Bu veri akışını anlamak:**
- **Merkezi hale getirir** tüm uygulama durumunu tek bir yerde
- **Yönlendirir** tüm durum değişikliklerini kontrol edilen işlevler aracılığıyla
- **UI'nin** mevcut durumla senkronize kalmasını sağlar
- **Net ve tahmin edilebilir bir veri yönetimi modeli sunar**

> 💡 **Profesyonel Görüş**: Bu ders temel kavramlara odaklanmaktadır. Karmaşık uygulamalar için [Redux](https://redux.js.org) gibi kütüphaneler daha gelişmiş durum yönetimi özellikleri sunar. Bu temel ilkeleri anlamak, herhangi bir durum yönetimi kütüphanesini ustalıkla kullanmanıza yardımcı olacaktır.

> ⚠️ **İleri Seviye Konu**: Durum değişiklikleri tarafından tetiklenen otomatik UI güncellemelerini ele almayacağız, çünkü bu [Reaktif Programlama](https://en.wikipedia.org/wiki/Reactive_programming) kavramlarını içerir. Bunu öğrenme yolculuğunuz için mükemmel bir sonraki adım olarak düşünebilirsiniz!

### Görev: Durum Yapısını Merkezileştirme

Dağınık durum yönetimimizi merkezi bir sisteme dönüştürmeye başlayalım. Bu ilk adım, takip eden tüm iyileştirmeler için temeli oluşturur.

**Adım 1: Merkezi Bir Durum Nesnesi Oluşturun**

Basit `account` tanımını şu şekilde değiştirin:

```js
let account = null;
```

Yapılandırılmış bir durum nesnesiyle değiştirin:

```js
let state = {
  account: null
};
```

**Bu değişikliğin önemi:**
- **Merkezi hale getirir** tüm uygulama verilerini tek bir yerde
- **Daha fazla durum özelliği eklemek için** yapıyı hazırlar
- **Durum ve diğer değişkenler arasında** net bir sınır oluşturur
- **Uygulamanız büyüdükçe ölçeklenebilir bir model oluşturur**

**Adım 2: Durum Erişim Modellerini Güncelleyin**

İşlevlerinizi yeni durum yapısını kullanacak şekilde güncelleyin:

**`register()` ve `login()` işlevlerinde**, şu satırı değiştirin:
```js
account = ...
```

Şununla:
```js
state.account = ...
```

**`updateDashboard()` işlevinde**, şu satırı en üste ekleyin:
```js
const account = state.account;
```

**Bu güncellemelerin sağladıkları:**
- **Mevcut işlevselliği korur** ve yapıyı iyileştirir
- **Daha sofistike durum yönetimi için** kodunuzu hazırlar
- **Durum verilerine erişim için** tutarlı modeller oluşturur
- **Merkezi durum güncellemeleri için** temel oluşturur

> 💡 **Not**: Bu yeniden yapılandırma sorunlarımızı hemen çözmez, ancak güçlü iyileştirmeler için gerekli temeli oluşturur!

## Kontrollü Durum Güncellemelerini Uygulama

Durumumuzu merkezileştirdikten sonra, veri değişiklikleri için kontrollü mekanizmalar oluşturma adımına geçiyoruz. Bu yaklaşım, tahmin edilebilir durum değişikliklerini ve daha kolay hata ayıklamayı sağlar.

Temel ilke hava trafik kontrolüne benzer: birden fazla işlevin durumu bağımsız olarak değiştirmesine izin vermek yerine, tüm değişiklikleri tek bir kontrol edilen işlev aracılığıyla yönlendireceğiz. Bu model, veri değişikliklerinin ne zaman ve nasıl gerçekleştiği konusunda net bir denetim sağlar.

**Değiştirilemez Durum Yönetimi:**

`state` nesnemizi [*değiştirilemez*](https://en.wikipedia.org/wiki/Immutable_object) olarak ele alacağız, yani doğrudan değiştirmeyeceğiz. Bunun yerine, her değişiklik, güncellenmiş verilerle yeni bir durum nesnesi oluşturur.

Bu yaklaşım, doğrudan değişikliklere kıyasla başlangıçta verimsiz görünebilir, ancak hata ayıklama, test etme ve uygulama tahmin edilebilirliğini koruma açısından önemli avantajlar sağlar.

**Değiştirilemez durum yönetiminin faydaları:**

| Fayda | Açıklama | Etki |
|-------|----------|------|
| **Tahmin Edilebilirlik** | Değişiklikler yalnızca kontrol edilen işlevler aracılığıyla gerçekleşir | Hata ayıklama ve test daha kolay |
| **Geçmiş Takibi** | Her durum değişikliği yeni bir nesne oluşturur | Geri al/yeniden yap işlevselliğini mümkün kılar |
| **Yan Etki Önleme** | Kazara değişiklikler olmaz | Gizemli hataları önler |
| **Performans Optimizasyonu** | Durumun gerçekten değiştiğini kolayca tespit eder | Verimli UI güncellemelerini mümkün kılar |

**JavaScript'te `Object.freeze()` ile Değiştirilemezlik:**

JavaScript [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) sağlar, nesne değişikliklerini önlemek için:

```js
const immutableState = Object.freeze({ account: userData });
// Any attempt to modify immutableState will throw an error
```

**Burada olanları açıklamak:**
- **Doğrudan özellik atamalarını veya silmelerini önler**
- **Değişiklik girişimlerinde** istisnalar oluşturur
- **Durum değişikliklerinin kontrol edilen işlevlerden geçmesini sağlar**
- **Durumun nasıl güncellenebileceği konusunda** net bir sözleşme oluşturur

> 💡 **Derinlemesine İnceleme**: [MDN belgelerinde](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze) *yüzeysel* ve *derin* değiştirilemez nesneler arasındaki farkı öğrenin. Bu ayrımı anlamak, karmaşık durum yapıları için çok önemlidir.

### Görev

Yeni bir `updateState()` işlevi oluşturalım:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Bu işlevde, [*yayılma (`...`) operatörünü*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals) kullanarak önceki durumdan veri kopyalayıp yeni bir durum nesnesi oluşturuyoruz. Ardından, durum nesnesinin belirli bir özelliğini yeni verilerle [köşeli parantez notasyonu](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` kullanarak değiştiriyoruz. Son olarak, `Object.freeze()` kullanarak nesneyi değişikliklere karşı kilitliyoruz. Şu anda yalnızca `account` özelliği duruma kaydedilmiş durumda, ancak bu yaklaşımla duruma ihtiyacınız olan kadar çok özellik ekleyebilirsiniz.

Durum başlatmasını da güncelleyerek başlangıç durumunun da dondurulduğundan emin olun:

```js
let state = Object.freeze({
  account: null
});
```

Ardından, `register` işlevini güncelleyerek `state.account = result;` atamasını şu şekilde değiştirin:

```js
updateState('account', result);
```

Aynı işlemi `login` işlevi için yaparak `state.account = data;` satırını şu şekilde değiştirin:

```js
updateState('account', data);
```

Şimdi, kullanıcı *Çıkış Yap* düğmesine tıkladığında hesap verilerinin temizlenmemesi sorununu düzeltme fırsatını değerlendireceğiz.

Yeni bir `logout()` işlevi oluşturun:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

`updateDashboard()` içinde, yönlendirme `return navigate('/login');` satırını `return logout();` ile değiştirin.

Yeni bir hesap kaydetmeyi, çıkış yapmayı ve tekrar giriş yapmayı deneyerek her şeyin hala düzgün çalıştığını kontrol edin.

> İpucu: Tüm durum değişikliklerini görmek için `updateState()` işlevinin altına `console.log(state)` ekleyebilir ve tarayıcınızın geliştirme araçlarındaki konsolu açabilirsiniz.

## Veri Kalıcılığını Uygulama

Daha önce belirlediğimiz oturum kaybı sorunu, kullanıcı durumunu tarayıcı oturumları arasında koruyan bir kalıcılık çözümü gerektirir. Bu, uygulamamızı geçici bir deneyimden güvenilir, profesyonel bir araca dönüştürür.

Atomik saatlerin güç kesintileri sırasında bile hassas zamanı koruyarak kritik durumu uçucu olmayan bellekte saklaması gibi, web uygulamalarının da tarayıcı oturumları ve sayfa yenilemeleri arasında temel kullanıcı verilerini korumak için kalıcı depolama mekanizmalarına ihtiyacı vardır.

**Veri Kalıcılığı için Stratejik Sorular:**

Kalıcılığı uygulamadan önce, bu kritik faktörleri göz önünde bulundurun:

| Soru | Bankacılık Uygulaması Bağlamı | Karar Etkisi |
|------|-------------------------------|--------------|
| **Veriler hassas mı?** | Hesap bakiyesi, işlem geçmişi | Güvenli depolama yöntemlerini seçin |
| **Ne kadar süreyle kalıcı olmalı?** | Giriş durumu vs. geçici UI tercihleri | Uygun depolama süresini seçin |
| **Sunucu bunu ihtiyaç duyuyor mu?** | Kimlik doğrulama jetonları vs. UI ayarları | Paylaşım gereksinimlerini belirleyin |

**Tarayıcı Depolama Seçenekleri:**

Modern tarayıcılar, farklı kullanım durumları için tasarlanmış birkaç depolama mekanizması sağlar:

**Birincil Depolama API'leri:**

1. **[`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage)**: Kalıcı [Anahtar/Değer depolama](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)
   - **Tarayıcı oturumları arasında** verileri kalıcı olarak saklar  
   - **Tarayıcı yeniden başlatmalarında ve bilgisayar yeniden başlatmalarında** verileri korur
   - **Belirli web sitesi alanına** özgüdür
   - **Kullanıcı tercihleri ve giriş durumları için** mükemmeldir

2. **[`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)**: Geçici oturum depolama
   - **localStorage ile aynı şekilde çalışır** aktif oturumlar sırasında
   - **Tarayıcı sekmesi kapandığında** otomatik olarak temizlenir
   - **Geçici veriler için idealdir** ve kalıcı olmamalıdır

3. **[HTTP Çerezleri](https://developer.mozilla.org/docs/Web/HTTP/Cookies)**: Sunucu ile paylaşılan depolama
   - **Her sunucu isteğiyle** otomatik olarak gönderilir
   - **Kimlik doğrulama** jetonları için mükemmeldir
   - **Boyut olarak sınırlıdır** ve performansı etkileyebilir

**Veri Serileştirme Gereksinimi:**

Hem `localStorage` hem de `sessionStorage` yalnızca [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) depolar:

```js
// Convert objects to JSON strings for storage
const accountData = { user: 'john', balance: 150 };
localStorage.setItem('account', JSON.stringify(accountData));

// Parse JSON strings back to objects when retrieving
const savedAccount = JSON.parse(localStorage.getItem('account'));
```

**Serileştirmeyi anlamak:**
- **JavaScript nesnelerini JSON stringlerine dönüştürür** [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) kullanarak
- **JSON'dan nesneleri yeniden oluşturur** [`JSON.parse()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) kullanarak
- **Karmaşık iç içe geçmiş nesneleri ve dizileri** otomatik olarak işler
- **Fonksiyonlar, tanımsız değerler ve döngüsel referanslarda** başarısız olur
> 💡 **Gelişmiş Seçenek**: Büyük veri setlerine sahip karmaşık çevrimdışı uygulamalar için [`IndexedDB` API'sini](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) düşünün. Bu API, tam bir istemci tarafı veritabanı sağlar ancak daha karmaşık bir uygulama gerektirir.

### Görev: localStorage Kalıcılığını Uygulama

Kullanıcıların açıkça çıkış yapana kadar oturumlarını koruyabilmesi için kalıcı bir depolama sistemi uygulayalım. Hesap verilerini tarayıcı oturumları arasında saklamak için `localStorage` kullanacağız.

**Adım 1: Depolama Yapılandırmasını Tanımlayın**

```js
const storageKey = 'savedAccount';
```

**Bu sabitin sağladıkları:**
- **Saklanan verilerimiz için** tutarlı bir tanımlayıcı oluşturur
- **Depolama anahtar referanslarında** yazım hatalarını önler
- **Depolama anahtarını değiştirmeyi** kolaylaştırır
- **Bakımı kolay kod için** en iyi uygulamaları takip eder

**Adım 2: Otomatik Kalıcılık Ekleyin**

`updateState()` fonksiyonunun sonuna şu satırı ekleyin:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

**Burada olanların açıklaması:**
- **Hesap nesnesini** depolama için bir JSON stringine dönüştürür
- **Veriyi** tutarlı depolama anahtarı kullanarak kaydeder
- **Durum değişiklikleri olduğunda** otomatik olarak çalışır
- **Saklanan verilerin** her zaman mevcut durumla senkronize olmasını sağlar

> 💡 **Mimari Avantajı**: Tüm durum güncellemelerini `updateState()` üzerinden merkezileştirdiğimiz için, kalıcılık eklemek yalnızca bir satır kod gerektirdi. Bu, iyi mimari kararların gücünü gösterir!

**Adım 3: Uygulama Yüklemesinde Durumu Geri Yükleme**

Kaydedilen verileri geri yüklemek için bir başlatma fonksiyonu oluşturun:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

**Başlatma sürecini anlama:**
- **localStorage'dan** daha önce kaydedilmiş hesap verilerini alır
- **JSON stringini** tekrar bir JavaScript nesnesine dönüştürür
- **Durumu** kontrollü güncelleme fonksiyonumuzu kullanarak günceller
- **Kullanıcının oturumunu** sayfa yüklemesinde otomatik olarak geri yükler
- **Durumun** kullanılabilir olmasını sağlamak için rota güncellemelerinden önce çalışır

**Adım 4: Varsayılan Rotayı Optimize Etme**

Varsayılan rotayı kalıcılıktan yararlanacak şekilde güncelleyin:

`updateRoute()` içinde şunu değiştirin:
```js
// Replace: return navigate('/login');
return navigate('/dashboard');
```

**Bu değişikliğin mantıklı olmasının nedeni:**
- **Yeni kalıcılık sistemimizden** etkili bir şekilde yararlanır
- **Gösterge panelinin** kimlik doğrulama kontrollerini ele almasına izin verir
- **Kaydedilmiş bir oturum yoksa** otomatik olarak girişe yönlendirir
- **Daha sorunsuz bir kullanıcı deneyimi oluşturur**

**Uygulamanızı Test Etme:**

1. Bankacılık uygulamanıza giriş yapın
2. Tarayıcı sayfasını yenileyin
3. Giriş yapmış ve gösterge panelinde olduğunuzu doğrulayın
4. Tarayıcınızı kapatıp tekrar açın
5. Uygulamanıza geri dönün ve hala giriş yapmış olduğunuzu doğrulayın

🎉 **Başarı Kilidi Açıldı**: Kalıcı durum yönetimini başarıyla uyguladınız! Uygulamanız artık profesyonel bir web uygulaması gibi davranıyor.

## Kalıcılığı Veri Tazeliği ile Dengelemek

Kalıcılık sistemimiz kullanıcı oturumlarını başarıyla koruyor, ancak yeni bir zorluk ortaya çıkarıyor: veri bayatlığı. Birden fazla kullanıcı veya uygulama aynı sunucu verisini değiştirdiğinde, yerel önbelleğe alınmış bilgiler güncelliğini yitirir.

Bu durum, hem depolanmış yıldız haritalarına hem de mevcut göksel gözlemlere güvenen Viking denizcilerine benzer. Haritalar tutarlılık sağlarken, denizciler değişen koşulları hesaba katmak için taze gözlemlere ihtiyaç duyar. Benzer şekilde, uygulamamızın hem kalıcı kullanıcı durumuna hem de güncel sunucu verilerine ihtiyacı var.

**🧪 Veri Tazeliği Sorununu Keşfetmek:**

1. `test` hesabını kullanarak gösterge paneline giriş yapın
2. Başka bir kaynaktan işlem simüle etmek için terminalde şu komutu çalıştırın:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

3. Tarayıcıdaki gösterge paneli sayfasını yenileyin
4. Yeni işlemi görüp görmediğinizi gözlemleyin

**Bu testin gösterdikleri:**
- **Yerel depolamanın** "bayat" (güncel olmayan) hale gelebileceğini gösterir
- **Uygulamanızın dışında** veri değişikliklerinin gerçekleştiği gerçek dünya senaryolarını simüle eder
- **Kalıcılık ile veri tazeliği arasındaki gerilimi** ortaya çıkarır

**Veri Bayatlığı Sorunu:**

| Sorun | Sebep | Kullanıcı Etkisi |
|-------|-------|------------------|
| **Bayat Veri** | localStorage otomatik olarak süresi dolmaz | Kullanıcılar güncel olmayan bilgiler görür |
| **Sunucu Değişiklikleri** | Diğer uygulamalar/kullanıcılar aynı veriyi değiştirir | Platformlar arasında tutarsız görünümler |
| **Önbellek vs. Gerçeklik** | Yerel önbellek sunucu durumuyla eşleşmez | Kötü kullanıcı deneyimi ve kafa karışıklığı |

**Çözüm Stratejisi:**

Kalıcılığın faydalarını korurken veri doğruluğunu sağlamak için "yüklemede yenileme" modelini uygulayacağız. Bu yaklaşım, sorunsuz kullanıcı deneyimini korurken veri doğruluğunu sağlar.

### Görev: Veri Yenileme Sistemi Uygulama

Kalıcı durum yönetimimizin avantajlarını korurken, sunucudan otomatik olarak taze veri çeken bir sistem oluşturacağız.

**Adım 1: Hesap Verisi Güncelleyici Oluşturma**

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

**Bu fonksiyonun mantığını anlama:**
- **Kullanıcının** şu anda giriş yapıp yapmadığını kontrol eder (state.account mevcut)
- **Geçerli bir oturum bulunmazsa** çıkışa yönlendirir
- **Mevcut `getAccount()` fonksiyonunu kullanarak** sunucudan taze hesap verilerini çeker
- **Sunucu hatalarını** geçersiz oturumları çıkış yaparak zarif bir şekilde ele alır
- **Durumu** kontrollü güncelleme sistemimizi kullanarak taze verilerle günceller
- **`updateState()` fonksiyonu aracılığıyla** otomatik localStorage kalıcılığını tetikler

**Adım 2: Gösterge Paneli Yenileme İşleyicisi Oluşturma**

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

**Bu yenileme fonksiyonunun sağladıkları:**
- **Veri yenileme ve UI güncelleme sürecini** koordine eder
- **Taze verilerin** yüklenmesini bekler ve ardından ekranı günceller
- **Gösterge panelinin** en güncel bilgileri göstermesini sağlar
- **Veri yönetimi ve UI güncellemeleri arasında** temiz bir ayrım korur

**Adım 3: Rota Sistemi ile Entegrasyon**

Rota yapılandırmanızı otomatik yenilemeyi tetikleyecek şekilde güncelleyin:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

**Bu entegrasyon nasıl çalışır:**
- **Her seferinde** gösterge paneli rotası yüklendiğinde yenileme fonksiyonunu çalıştırır
- **Kullanıcılar gösterge paneline** yöneldiğinde her zaman taze verilerin gösterilmesini sağlar
- **Mevcut rota yapısını korurken** veri tazeliği ekler
- **Rota özelinde başlatma için** tutarlı bir model sağlar

**Veri Yenileme Sisteminizi Test Etme:**

1. Bankacılık uygulamanıza giriş yapın
2. Daha önceki curl komutunu çalıştırarak yeni bir işlem oluşturun
3. Gösterge paneli sayfasını yenileyin veya başka bir yere gidip geri dönün
4. Yeni işlemin hemen göründüğünü doğrulayın

🎉 **Mükemmel Denge Sağlandı**: Uygulamanız artık kalıcı durumun sorunsuz deneyimini, taze sunucu verilerinin doğruluğu ile birleştiriyor!

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Bankacılık uygulaması için geri al/yeniden yap işlevselliği içeren kapsamlı bir durum yönetim sistemi uygulayın. Bu meydan okuma, durum geçmişi takibi, değişmez güncellemeler ve kullanıcı arayüzü senkronizasyonu gibi gelişmiş durum yönetimi kavramlarını uygulamanıza yardımcı olacaktır.

**Talimat:** Gelişmiş bir durum yönetim sistemi oluşturun ve şunları içermesini sağlayın: 1) Tüm önceki durumları takip eden bir durum geçmişi dizisi, 2) Önceki durumlara geri dönebilen geri al ve yeniden yap fonksiyonları, 3) Gösterge panelinde geri al/yeniden yap işlemleri için UI düğmeleri, 4) Bellek sorunlarını önlemek için maksimum 10 durum geçmişi sınırı, ve 5) Kullanıcı çıkış yaptığında geçmişin düzgün bir şekilde temizlenmesi. Geri al/yeniden yap işlevselliğinin hesap bakiyesi değişiklikleriyle çalıştığından ve tarayıcı yenilemeleri arasında kalıcı olduğundan emin olun.

Daha fazla bilgi için [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hakkında buradan bilgi edinin.

## 🚀 Meydan Okuma: Depolama Optimizasyonu

Uygulamanız artık kullanıcı oturumlarını, veri yenilemeyi ve durum yönetimini etkili bir şekilde ele alıyor. Ancak, mevcut yaklaşımımızın depolama verimliliğini işlevsellikle en iyi şekilde dengeleyip dengelemediğini düşünün.

Satranç ustalarının temel taşlar ile feda edilebilir piyonlar arasındaki farkı ayırt etmesi gibi, etkili durum yönetimi, hangi verilerin kalıcı olması gerektiğini ve hangilerinin her zaman sunucudan taze alınması gerektiğini belirlemeyi gerektirir.

**Optimizasyon Analizi:**

Mevcut localStorage uygulamanızı değerlendirin ve şu stratejik soruları göz önünde bulundurun:
- Kullanıcı kimlik doğrulamasını sürdürmek için gereken minimum bilgi nedir?
- Hangi veriler o kadar sık değişiyor ki yerel önbellekleme çok az fayda sağlıyor?
- Depolama optimizasyonu, kullanıcı deneyimini bozmadan performansı nasıl artırabilir?

**Uygulama Stratejisi:**
- **Kalıcı olması gereken** temel verileri belirleyin (muhtemelen sadece kullanıcı kimliği)
- **localStorage uygulamanızı** yalnızca kritik oturum verilerini saklayacak şekilde değiştirin
- **Gösterge paneli ziyaretlerinde** her zaman sunucudan taze verilerin yüklendiğinden emin olun
- **Optimize edilmiş yaklaşımınızın** aynı kullanıcı deneyimini koruduğunu test edin

**Gelişmiş Düşünce:**
- **Tam hesap verilerini saklamak ile sadece kimlik doğrulama tokenlerini saklamak arasındaki** ödünleşimleri karşılaştırın
- **Kararlarınızı ve gerekçelerinizi** gelecekteki ekip üyeleri için belgeleyin

Bu meydan okuma, hem kullanıcı deneyimini hem de uygulama verimliliğini düşünen profesyonel bir geliştirici gibi düşünmenize yardımcı olacaktır. Farklı yaklaşımları denemek için zaman ayırın!

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/48)

## Ödev

["İşlem ekleme" diyaloğunu uygulayın](assignment.md)

İşte ödevi tamamladıktan sonra ortaya çıkan örnek sonuç:

!["İşlem ekleme" diyaloğunu gösteren ekran görüntüsü](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.tr.png)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul edilmez.