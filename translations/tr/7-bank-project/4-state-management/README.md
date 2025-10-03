<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T13:00:56+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "tr"
}
-->
# Bir Bankacılık Uygulaması Oluşturma Bölüm 4: Durum Yönetimi Kavramları

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/47)

### Giriş

Bir web uygulaması büyüdükçe, tüm veri akışlarını takip etmek zorlaşır. Hangi kod veriyi alıyor, hangi sayfa bunu kullanıyor, nerede ve ne zaman güncellenmesi gerekiyor... karmaşık ve zor yönetilebilir bir kod yığınına dönüşmek kolaydır. Bu durum, özellikle uygulamanızın farklı sayfaları arasında veri paylaşmanız gerektiğinde, örneğin kullanıcı verileri gibi, daha da belirgin hale gelir. *Durum yönetimi* kavramı her tür programda her zaman var olmuştur, ancak web uygulamaları karmaşıklık açısından büyüdükçe, artık geliştirme sırasında düşünülmesi gereken önemli bir nokta haline gelmiştir.

Bu son bölümde, oluşturduğumuz uygulamayı gözden geçirerek durumun nasıl yönetildiğini yeniden düşüneceğiz. Bu, tarayıcı yenilemesini herhangi bir noktada desteklemeyi ve kullanıcı oturumları arasında verileri kalıcı hale getirmeyi sağlayacaktır.

### Ön Koşul

Bu ders için web uygulamasının [veri çekme](../3-data/README.md) bölümünü tamamlamış olmanız gerekiyor. Ayrıca [Node.js](https://nodejs.org) yüklemeniz ve [sunucu API'sini](../api/README.md) yerel olarak çalıştırmanız gerekiyor, böylece hesap verilerini yönetebilirsiniz.

Sunucunun düzgün çalıştığını test etmek için bir terminalde şu komutu çalıştırabilirsiniz:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Durum Yönetimini Yeniden Düşünmek

[Önceki derste](../3-data/README.md), uygulamamızda şu anda oturum açmış kullanıcıya ait banka verilerini içeren global `account` değişkeni ile temel bir durum kavramını tanıttık. Ancak, mevcut uygulamamızda bazı eksiklikler var. Dashboard sayfasındayken sayfayı yenilemeyi deneyin. Ne oluyor?

Mevcut kodda 3 sorun var:

- Durum kalıcı değil, tarayıcı yenilemesi sizi giriş sayfasına geri götürüyor.
- Durumu değiştiren birden fazla fonksiyon var. Uygulama büyüdükçe, değişiklikleri takip etmek zorlaşabilir ve birini güncellemeyi unutmak kolaydır.
- Durum temizlenmiyor, bu yüzden *Çıkış Yap* düğmesine tıkladığınızda, giriş sayfasında olsanız bile hesap verileri hala orada duruyor.

Bu sorunları tek tek ele almak için kodumuzu güncelleyebiliriz, ancak bu daha fazla kod tekrarı yaratır ve uygulamayı daha karmaşık ve zor yönetilebilir hale getirir. Ya da birkaç dakika durup stratejimizi yeniden düşünebiliriz.

> Burada gerçekten çözmeye çalıştığımız sorunlar nelerdir?

[Durum yönetimi](https://en.wikipedia.org/wiki/State_management), bu iki özel sorunu çözmek için iyi bir yaklaşım bulmakla ilgilidir:

- Bir uygulamadaki veri akışlarını nasıl anlaşılır hale getirebiliriz?
- Durum verilerini her zaman kullanıcı arayüzüyle (ve tam tersi) nasıl senkronize tutabiliriz?

Bu sorunları çözdüğünüzde, karşılaşabileceğiniz diğer sorunlar ya zaten çözülmüş olur ya da çözülmesi daha kolay hale gelir. Bu sorunları çözmek için birçok olası yaklaşım vardır, ancak biz **verileri ve bunları değiştirme yollarını merkezileştirme** içeren yaygın bir çözümle ilerleyeceğiz. Veri akışları şu şekilde olur:

![HTML, kullanıcı eylemleri ve durum arasındaki veri akışlarını gösteren şema](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.tr.png)

> Burada verilerin otomatik olarak görünümü güncelleme kısmını ele almayacağız, çünkü bu daha ileri düzey [Reaktif Programlama](https://en.wikipedia.org/wiki/Reactive_programming) kavramlarına bağlıdır. Derinlemesine bir inceleme yapmak istiyorsanız, bu iyi bir takip konusu olabilir.

✅ Durum yönetimi için farklı yaklaşımlara sahip birçok kütüphane var, [Redux](https://redux.js.org) popüler bir seçenek. Büyük web uygulamalarında karşılaşabileceğiniz potansiyel sorunları ve bunların nasıl çözülebileceğini öğrenmek için kullanılan kavramlara ve desenlere göz atabilirsiniz.

### Görev

Biraz yeniden düzenleme ile başlayacağız. `account` tanımını şu şekilde değiştirin:

```js
let account = null;
```

Şununla:

```js
let state = {
  account: null
};
```

Buradaki fikir, tüm uygulama verilerimizi tek bir durum nesnesinde *merkezileştirmek*. Şu anda durum içinde yalnızca `account` var, bu yüzden çok fazla değişiklik olmuyor, ancak gelişim için bir yol oluşturuyor.

Bunu kullanan fonksiyonları da güncellememiz gerekiyor. `register()` ve `login()` fonksiyonlarında, `account = ...` ifadesini `state.account = ...` ile değiştirin.

`updateDashboard()` fonksiyonunun başına şu satırı ekleyin:

```js
const account = state.account;
```

Bu yeniden düzenleme tek başına çok fazla iyileştirme sağlamadı, ancak sonraki değişiklikler için temel oluşturmayı amaçladı.

## Veri Değişikliklerini Takip Etmek

Artık verilerimizi saklamak için `state` nesnesini oluşturduğumuza göre, bir sonraki adım güncellemeleri merkezileştirmek. Amaç, herhangi bir değişikliği ve ne zaman gerçekleştiğini takip etmeyi kolaylaştırmaktır.

`state` nesnesinde değişiklik yapılmasını önlemek için, onu tamamen [*değişmez*](https://en.wikipedia.org/wiki/Immutable_object) olarak düşünmek de iyi bir uygulamadır, yani hiç değiştirilemez. Bu aynı zamanda, içinde bir şey değiştirmek istiyorsanız yeni bir durum nesnesi oluşturmanız gerektiği anlamına gelir. Bunu yaparak, potansiyel olarak istenmeyen [yan etkilerden](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) korunma sağlar ve uygulamanızda geri al/yeniden yap gibi yeni özellikler uygulama olasılıklarını açar, ayrıca hata ayıklamayı kolaylaştırır. Örneğin, duruma yapılan her değişikliği kaydedebilir ve bir hatanın kaynağını anlamak için değişikliklerin geçmişini tutabilirsiniz.

JavaScript'te [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) kullanarak bir nesnenin değişmez bir versiyonunu oluşturabilirsiniz. Değişmez bir nesneye değişiklik yapmaya çalışırsanız, bir istisna oluşur.

✅ *Yüzeysel* ve *derin* değişmez nesne arasındaki farkı biliyor musunuz? [Buradan](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze) okuyabilirsiniz.

### Görev

Yeni bir `updateState()` fonksiyonu oluşturalım:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Bu fonksiyonda, önceki durumdan veri kopyalayarak yeni bir durum nesnesi oluşturuyoruz ve ardından [köşeli parantez notasyonu](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` kullanarak durum nesnesinin belirli bir özelliğini yeni veriyle değiştiriyoruz. Son olarak, `Object.freeze()` kullanarak nesneyi değişikliklere karşı kilitliyoruz. Şu anda durum içinde yalnızca `account` özelliği saklanıyor, ancak bu yaklaşımla duruma ihtiyaç duyduğunuz kadar çok özellik ekleyebilirsiniz.

Durumun başlangıçta da kilitli olduğundan emin olmak için `state` başlatmasını güncelleyeceğiz:

```js
let state = Object.freeze({
  account: null
});
```

Bundan sonra, `register` fonksiyonunda `state.account = result;` atamasını şu şekilde değiştirin:

```js
updateState('account', result);
```

Aynı işlemi `login` fonksiyonunda yapın, `state.account = data;` ifadesini şu şekilde değiştirin:

```js
updateState('account', data);
```

Şimdi kullanıcı *Çıkış Yap* düğmesine tıkladığında hesap verilerinin temizlenmemesi sorununu düzeltme fırsatını değerlendireceğiz.

Yeni bir `logout()` fonksiyonu oluşturun:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

`updateDashboard()` içinde, `return navigate('/login');` yönlendirmesini `return logout();` ile değiştirin.

Yeni bir hesap kaydetmeyi, çıkış yapmayı ve tekrar giriş yapmayı deneyin, her şeyin hala düzgün çalıştığını kontrol edin.

> İpucu: Tüm durum değişikliklerini görmek için `updateState()` fonksiyonunun altına `console.log(state)` ekleyebilir ve tarayıcınızın geliştirme araçlarındaki konsolu açabilirsiniz.

## Durumu Kalıcı Hale Getirmek

Çoğu web uygulaması, doğru çalışabilmek için verileri kalıcı hale getirmeye ihtiyaç duyar. Tüm kritik veriler genellikle bir veritabanında saklanır ve bir sunucu API'si aracılığıyla erişilir, örneğin kullanıcı hesap verileri gibi. Ancak bazen, daha iyi bir kullanıcı deneyimi veya yükleme performansını artırmak için tarayıcıda çalışan istemci uygulamasında bazı verileri kalıcı hale getirmek de ilginç olabilir.

Tarayıcınızda veri kalıcı hale getirmek istediğinizde, kendinize sormanız gereken birkaç önemli soru vardır:

- *Veri hassas mı?* Kullanıcı şifreleri gibi hassas verileri istemcide saklamaktan kaçınmalısınız.
- *Bu veriyi ne kadar süreyle saklamanız gerekiyor?* Bu veriye yalnızca mevcut oturum için mi erişmeyi planlıyorsunuz yoksa sonsuza kadar mı saklamak istiyorsunuz?

Bir web uygulamasında bilgi saklamanın, ne elde etmek istediğinize bağlı olarak birçok yolu vardır. Örneğin, bir arama sorgusunu saklamak için URL'leri kullanabilir ve bunu kullanıcılar arasında paylaşılabilir hale getirebilirsiniz. Ayrıca, [kimlik doğrulama](https://en.wikipedia.org/wiki/Authentication) bilgileri gibi verilerin sunucuyla paylaşılması gerekiyorsa [HTTP çerezlerini](https://developer.mozilla.org/docs/Web/HTTP/Cookies) kullanabilirsiniz.

Veri saklamak için birçok tarayıcı API'si vardır. İkisi özellikle ilginçtir:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): belirli bir web sitesine özgü verileri farklı oturumlar arasında kalıcı hale getiren bir [Anahtar/Değer deposu](https://en.wikipedia.org/wiki/Key%E2%80%93value_database). İçindeki veriler asla sona ermez.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): bu, `localStorage` ile aynı şekilde çalışır, ancak içinde saklanan veriler oturum sona erdiğinde (tarayıcı kapatıldığında) temizlenir.

Her iki API'nin de yalnızca [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) saklamaya izin verdiğini unutmayın. Karmaşık nesneleri saklamak istiyorsanız, bunu [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) kullanarak [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) formatında serileştirmeniz gerekir.

✅ Bir sunucuyla çalışmayan bir web uygulaması oluşturmak istiyorsanız, istemcide bir veritabanı oluşturmak için [`IndexedDB` API'sini](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) kullanmak da mümkündür. Bu, ileri düzey kullanım durumları veya önemli miktarda veri saklamanız gerektiğinde ayrılmıştır, çünkü kullanımı daha karmaşıktır.

### Görev

Kullanıcılarımızın *Çıkış Yap* düğmesine açıkça tıklayana kadar oturumlarının açık kalmasını istiyoruz, bu yüzden hesap verilerini saklamak için `localStorage` kullanacağız. Öncelikle, verilerimizi saklamak için kullanacağımız bir anahtar tanımlayalım.

```js
const storageKey = 'savedAccount';
```

Ardından `updateState()` fonksiyonunun sonuna şu satırı ekleyin:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Bununla, kullanıcı hesap verileri kalıcı hale gelecek ve daha önce tüm durum güncellemelerini merkezileştirdiğimiz için her zaman güncel olacak. İşte önceki yeniden düzenlemelerimizin faydalarını görmeye başladığımız yer 🙂.

Veriler kaydedildiği için, uygulama yüklendiğinde bunları geri yüklemekle de ilgilenmemiz gerekiyor. Daha fazla başlatma koduna sahip olmaya başlayacağımız için, `app.js` dosyasının altındaki önceki kodumuzu da içeren yeni bir `init` fonksiyonu oluşturmak iyi bir fikir olabilir:

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

Burada kaydedilen verileri alıyoruz ve varsa durumu buna göre güncelliyoruz. Bunu *sayfayı güncellemeden önce* yapmak önemlidir, çünkü sayfa güncellemesi sırasında duruma güvenen kodlar olabilir.

Artık hesap verilerini kalıcı hale getirdiğimiz için *Dashboard* sayfasını uygulamamızın varsayılan sayfası yapabiliriz. Eğer veri bulunmazsa, dashboard zaten *Giriş* sayfasına yönlendirme işlemini gerçekleştiriyor. `updateRoute()` içinde, geri dönüş `return navigate('/login');` ifadesini `return navigate('/dashboard');` ile değiştirin.

Şimdi uygulamada oturum açın ve sayfayı yenilemeyi deneyin. Dashboard'da kalmalısınız. Bu güncelleme ile tüm başlangıç sorunlarımızı ele aldık...

## Verileri Yenilemek

...Ama aynı zamanda yeni bir sorun yaratmış olabiliriz. Oops!

`test` hesabını kullanarak dashboard'a gidin, ardından bir terminalde şu komutu çalıştırarak yeni bir işlem oluşturun:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Şimdi tarayıcıdaki dashboard sayfasını yenilemeyi deneyin. Ne oluyor? Yeni işlemi görüyor musunuz?

Durum `localStorage` sayesinde süresiz olarak kalıcı hale geldi, ancak bu aynı zamanda uygulamadan çıkış yapıp tekrar giriş yapana kadar hiç güncellenmediği anlamına geliyor!

Bunu düzeltmek için olası bir strateji, dashboard her yüklendiğinde hesap verilerini yeniden yüklemek olabilir, böylece eski verilerden kaçınılır.

### Görev

Yeni bir `updateAccountData` fonksiyonu oluşturun:

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

Bu yöntem, şu anda oturum açmış olduğumuzu kontrol eder ve ardından hesap verilerini sunucudan yeniden yükler.

`refresh` adında başka bir fonksiyon oluşturun:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Bu, hesap verilerini günceller ve ardından dashboard sayfasının HTML'sini günceller. Dashboard rotası yüklendiğinde çağırmamız gereken şey budur. Rota tanımını şu şekilde güncelleyin:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Şimdi dashboard'u yenilemeyi deneyin, güncellenmiş hesap verilerini göstermesi gerekir.

---

## 🚀 Zorluk

Artık dashboard her yüklendiğinde hesap verilerini yeniden yüklüyoruz, sizce *tüm hesap* verilerini kalıcı hale getirmemiz hala gerekli mi?

Birlikte çalışarak `localStorage`'da saklanan ve yüklenen verileri yalnızca uygulamanın çalışması için kesinlikle gerekli olanlarla sınırlamayı deneyin.

## Ders Sonrası Test
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/48)

## Ödev

["İşlem ekle" diyalog kutusunu uygulayın](assignment.md)

Ödevi tamamladıktan sonra ortaya çıkan örnek sonuç aşağıda gösterilmiştir:

!["İşlem ekle" diyalog kutusunun örnek ekran görüntüsü](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.tr.png)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.