<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4fa20c513e367e9cdd401bf49ae16e33",
  "translation_date": "2025-08-26T00:47:52+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "tr"
}
-->
# Bir Bankacılık Uygulaması Geliştirme Bölüm 4: Durum Yönetimi Kavramları

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/47)

### Giriş

Bir web uygulaması büyüdükçe, tüm veri akışlarını takip etmek zorlaşır. Veriyi hangi kod alıyor, hangi sayfa tüketiyor, nerede ve ne zaman güncellenmesi gerekiyor... Kodun karmaşık hale gelmesi ve bakımının zorlaşması kolaydır. Bu durum, özellikle uygulamanızın farklı sayfaları arasında veri paylaşmanız gerektiğinde, örneğin kullanıcı verileriyle, daha da belirgin hale gelir. *Durum yönetimi* kavramı her tür programda her zaman var olmuştur, ancak web uygulamaları karmaşıklıkta büyüdükçe, geliştirme sırasında düşünülmesi gereken önemli bir nokta haline gelmiştir.

Bu son bölümde, oluşturduğumuz uygulamayı gözden geçirerek durumun nasıl yönetildiğini yeniden düşüneceğiz. Bu, tarayıcı yenilemesini herhangi bir noktada desteklemeyi ve kullanıcı oturumları arasında verilerin kalıcılığını sağlamayı içerecek.

### Ön Koşul

Bu ders için web uygulamasının [veri çekme](../3-data/README.md) bölümünü tamamlamış olmanız gerekiyor. Ayrıca [Node.js](https://nodejs.org) kurmanız ve [sunucu API'sini](../api/README.md) yerel olarak çalıştırmanız gerekiyor, böylece hesap verilerini yönetebilirsiniz.

Sunucunun düzgün çalıştığını test etmek için bir terminalde şu komutu çalıştırabilirsiniz:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Durum yönetimini yeniden düşünmek

[Önceki derste](../3-data/README.md), uygulamamızda şu anda oturum açmış kullanıcının banka verilerini içeren global `account` değişkeni ile temel bir durum kavramını tanıttık. Ancak, mevcut uygulamamızda bazı eksiklikler var. Gösterge panelindeyken sayfayı yenilemeyi deneyin. Ne oluyor?

Mevcut kodda 3 sorun var:

- Durum kalıcı değil, çünkü tarayıcı yenilemesi sizi giriş sayfasına geri götürüyor.
- Durumu değiştiren birden fazla işlev var. Uygulama büyüdükçe, bu değişiklikleri takip etmek zorlaşabilir ve birini güncellemeyi unutmak kolaydır.
- Durum temizlenmiyor, bu yüzden *Çıkış Yap*'a tıkladığınızda bile giriş sayfasında olsanız da hesap verileri hala orada duruyor.

Bu sorunları tek tek ele almak için kodumuzu güncelleyebiliriz, ancak bu daha fazla kod tekrarı yaratır ve uygulamayı daha karmaşık ve bakımını zor hale getirir. Ya da birkaç dakika durup stratejimizi yeniden düşünebiliriz.

> Burada gerçekten hangi sorunları çözmeye çalışıyoruz?

[Durum yönetimi](https://en.wikipedia.org/wiki/State_management), şu iki temel sorunu çözmek için iyi bir yaklaşım bulmakla ilgilidir:

- Bir uygulamadaki veri akışlarını nasıl anlaşılır hale getirebiliriz?
- Durum verilerini her zaman kullanıcı arayüzüyle (ve tersi) nasıl senkronize tutabiliriz?

Bu sorunları çözdüğünüzde, karşılaşabileceğiniz diğer sorunlar ya zaten çözülmüş olur ya da çözülmesi daha kolay hale gelir. Bu sorunları çözmek için birçok olası yaklaşım vardır, ancak biz **verileri ve bunları değiştirme yollarını merkezileştiren** yaygın bir çözümle ilerleyeceğiz. Veri akışları şu şekilde olacaktır:

![HTML, kullanıcı eylemleri ve durum arasındaki veri akışlarını gösteren şema](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.tr.png)

> Burada, verilerin otomatik olarak görünümü tetiklediği kısmı ele almayacağız, çünkü bu daha ileri düzey [Reaktif Programlama](https://en.wikipedia.org/wiki/Reactive_programming) kavramlarına bağlıdır. Derinlemesine bir dalış yapmak isterseniz bu iyi bir takip konusudur.

✅ Durum yönetimi için farklı yaklaşımlara sahip birçok kütüphane vardır, [Redux](https://redux.js.org) popüler bir seçenektir. Büyük web uygulamalarında karşılaşabileceğiniz potansiyel sorunları ve bunların nasıl çözülebileceğini öğrenmek için kullanılan kavramlara ve desenlere göz atabilirsiniz.

### Görev

Biraz yeniden düzenleme ile başlayacağız. `account` tanımını şu şekilde değiştirin:

```js
let account = null;
```

Şununla değiştirin:

```js
let state = {
  account: null
};
```

Fikir, tüm uygulama verilerimizi tek bir durum nesnesinde *merkezileştirmektir*. Şu anda durum içinde yalnızca `account` var, bu yüzden çok fazla değişiklik olmuyor, ancak bu, gelecekteki geliştirmeler için bir yol açıyor.

Ayrıca bunu kullanan işlevleri de güncellememiz gerekiyor. `register()` ve `login()` işlevlerinde, `account = ...` ifadesini `state.account = ...` ile değiştirin.

`updateDashboard()` işlevinin başına şu satırı ekleyin:

```js
const account = state.account;
```

Bu yeniden düzenleme tek başına çok fazla iyileştirme getirmedi, ancak fikir, sonraki değişiklikler için bir temel oluşturmaktı.

## Veri değişikliklerini izleme

Artık verilerimizi saklamak için `state` nesnesini oluşturduğumuza göre, bir sonraki adım güncellemeleri merkezileştirmektir. Amaç, herhangi bir değişikliği ve ne zaman gerçekleştiğini takip etmeyi kolaylaştırmaktır.

`state` nesnesinde değişiklik yapılmasını önlemek için, onu [*değişmez*](https://en.wikipedia.org/wiki/Immutable_object) olarak düşünmek de iyi bir uygulamadır, yani hiç değiştirilemez. Bu aynı zamanda, içinde bir şey değiştirmek istiyorsanız yeni bir durum nesnesi oluşturmanız gerektiği anlamına gelir. Bunu yaparak, potansiyel olarak istenmeyen [yan etkilerden](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) korunma sağlarsınız ve uygulamanızda geri al/yeniden yap gibi yeni özellikler uygulama olasılıklarını açarsınız. Ayrıca hata ayıklamayı kolaylaştırır. Örneğin, duruma yapılan her değişikliği kaydedebilir ve bir hatanın kaynağını anlamak için değişikliklerin geçmişini tutabilirsiniz.

JavaScript'te [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) kullanarak bir nesnenin değişmez bir sürümünü oluşturabilirsiniz. Değişmez bir nesnede değişiklik yapmaya çalışırsanız, bir istisna oluşur.

✅ *Yüzeysel* ve *derin* değişmez nesne arasındaki farkı biliyor musunuz? [Buradan](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze) okuyabilirsiniz.

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

Bu işlevde, yeni bir durum nesnesi oluşturuyor ve önceki durumdan verileri [*yayılma (`...`) operatörü*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals) kullanarak kopyalıyoruz. Daha sonra, durum nesnesinin belirli bir özelliğini [köşeli parantez notasyonu](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` kullanarak yeni verilerle değiştiriyoruz. Son olarak, `Object.freeze()` kullanarak nesneyi değişikliklere karşı kilitliyoruz. Şu anda durum içinde yalnızca `account` özelliği saklanıyor, ancak bu yaklaşımla duruma ihtiyaç duyduğunuz kadar çok özellik ekleyebilirsiniz.

`state` başlatmasını da güncelleyerek başlangıç durumunun da dondurulduğundan emin olun:

```js
let state = Object.freeze({
  account: null
});
```

Bundan sonra, `register` işlevini güncelleyerek `state.account = result;` atamasını şu şekilde değiştirin:

```js
updateState('account', result);
```

Aynısını `login` işlevi için yapın, `state.account = data;` ifadesini şu şekilde değiştirin:

```js
updateState('account', data);
```

Şimdi kullanıcı *Çıkış Yap* düğmesine tıkladığında hesap verilerinin temizlenmemesi sorununu düzeltme fırsatını değerlendirelim.

Yeni bir `logout()` işlevi oluşturun:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

`updateDashboard()` içinde, `return navigate('/login');` yönlendirmesini `return logout();` ile değiştirin.

Yeni bir hesap kaydedip, çıkış yapıp tekrar giriş yaparak her şeyin hala düzgün çalıştığını kontrol edin.

> İpucu: Tüm durum değişikliklerini görmek için `updateState()` işlevinin altına `console.log(state)` ekleyebilir ve tarayıcınızın geliştirme araçlarındaki konsolu açabilirsiniz.

## Durumu kalıcı hale getirme

Çoğu web uygulamasının düzgün çalışabilmesi için verileri kalıcı hale getirmesi gerekir. Tüm kritik veriler genellikle bir veritabanında saklanır ve bir sunucu API'si aracılığıyla erişilir, bizim durumumuzda olduğu gibi kullanıcı hesap verileri. Ancak bazen, daha iyi bir kullanıcı deneyimi sağlamak veya yükleme performansını artırmak için tarayıcınızda çalışan istemci uygulamasında bazı verileri kalıcı hale getirmek de ilginç olabilir.

Tarayıcınızda veri kalıcı hale getirmek istediğinizde, kendinize sormanız gereken birkaç önemli soru vardır:

- *Veriler hassas mı?* Kullanıcı şifreleri gibi hassas verileri istemcide saklamaktan kaçınmalısınız.
- *Bu verileri ne kadar süreyle saklamanız gerekiyor?* Bu verilere yalnızca mevcut oturum için mi erişmeyi planlıyorsunuz yoksa sonsuza kadar mı saklamak istiyorsunuz?

Bir web uygulamasında bilgi saklamanın, neyi başarmak istediğinize bağlı olarak birden fazla yolu vardır. Örneğin, bir arama sorgusunu saklamak ve kullanıcılar arasında paylaşılabilir hale getirmek için URL'leri kullanabilirsiniz. Ayrıca, verilerin sunucuyla paylaşılması gerekiyorsa, örneğin [kimlik doğrulama](https://en.wikipedia.org/wiki/Authentication) bilgileri gibi, [HTTP çerezlerini](https://developer.mozilla.org/docs/Web/HTTP/Cookies) kullanabilirsiniz.

Bir diğer seçenek, veri saklamak için tarayıcı API'lerinden birini kullanmaktır. İki tanesi özellikle ilginçtir:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): belirli bir web sitesine özgü verileri farklı oturumlar arasında kalıcı hale getiren bir [Anahtar/Değer deposu](https://en.wikipedia.org/wiki/Key%E2%80%93value_database). Burada saklanan veriler asla sona ermez.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): bu, `localStorage` ile aynı şekilde çalışır, ancak içinde saklanan veriler oturum sona erdiğinde (tarayıcı kapatıldığında) temizlenir.

Unutmayın ki bu iki API yalnızca [dizeleri](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) saklamanıza izin verir. Karmaşık nesneleri saklamak istiyorsanız, bunları [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) kullanarak [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) formatına dönüştürmeniz gerekir.

✅ Bir sunucuyla çalışmayan bir web uygulaması oluşturmak istiyorsanız, istemcide bir veritabanı oluşturmak için [`IndexedDB` API'sini](https://developer.mozilla.org/docs/Web/API/IndexedDB_API) kullanmak da mümkündür. Bu, gelişmiş kullanım durumları veya önemli miktarda veri saklamanız gerektiğinde ayrılmıştır, çünkü kullanımı daha karmaşıktır.

### Görev

Kullanıcılarımızın *Çıkış Yap* düğmesine açıkça tıklayana kadar oturumlarının açık kalmasını istiyoruz, bu yüzden hesap verilerini saklamak için `localStorage` kullanacağız. İlk olarak, verilerimizi saklamak için kullanacağımız bir anahtar tanımlayalım.

```js
const storageKey = 'savedAccount';
```

Daha sonra `updateState()` işlevinin sonuna şu satırı ekleyin:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Bununla birlikte, kullanıcı hesap verileri kalıcı hale gelecek ve daha önce tüm durum güncellemelerini merkezileştirdiğimiz için her zaman güncel olacak. İşte bu noktada, önceki yeniden düzenlemelerimizin faydasını görmeye başlıyoruz 🙂.

Veriler kaydedildiği için, uygulama yüklendiğinde bunları geri yüklemekle de ilgilenmemiz gerekiyor. Daha fazla başlatma koduna sahip olmaya başlayacağımız için, `app.js`'in altındaki önceki kodumuzu da içeren yeni bir `init` işlevi oluşturmak iyi bir fikir olabilir:

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

Burada kaydedilen verileri alıyoruz ve eğer varsa durumu buna göre güncelliyoruz. Bunu *rota güncellemesinden önce* yapmak önemlidir, çünkü sayfa güncellemesi sırasında duruma bağlı kod olabilir.

Artık *Gösterge Paneli* sayfasını uygulamamızın varsayılan sayfası yapabiliriz, çünkü artık hesap verilerini kalıcı hale getiriyoruz. Eğer veri bulunamazsa, gösterge paneli zaten *Giriş* sayfasına yönlendirme yapıyor. `updateRoute()` içinde, yedek `return navigate('/login');` ifadesini `return navigate('/dashboard');` ile değiştirin.

Şimdi uygulamada oturum açın ve sayfayı yenilemeyi deneyin. Gösterge panelinde kalmalısınız. Bu güncellemeyle tüm başlangıç sorunlarımızı ele aldık...

## Verileri yenileme

...Ama aynı zamanda yeni bir sorun yaratmış olabiliriz. Oops!

`test` hesabını kullanarak gösterge paneline gidin, ardından yeni bir işlem oluşturmak için bir terminalde şu komutu çalıştırın:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Şimdi tarayıcıda gösterge paneli sayfasını yenilemeyi deneyin. Ne oluyor? Yeni işlemi görüyor musunuz?

Durum, `localStorage` sayesinde süresiz olarak kalıcı hale geldi, ancak bu aynı zamanda, uygulamadan çıkış yapıp tekrar giriş yapana kadar asla güncellenmediği anlamına geliyor!

Bunu düzeltmek için olası bir strateji, gösterge paneli her yüklendiğinde hesap verilerini yeniden yüklemek olabilir, böylece eski verilerden kaçınılır.

### Görev

Yeni bir `updateAccountData` işlevi oluşturun:

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

`refresh` adında başka bir işlev oluşturun:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Bu işlev hesap verilerini günceller ve ardından gösterge paneli sayfasının HTML'sini günceller. Bu, gösterge paneli rotası yüklendiğinde çağırmamız gereken şeydir. Rota tanımını şu şekilde güncelleyin:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Şimdi gösterge panelini yenilemeyi deneyin, güncellenmiş hesap verilerini göstermesi gerekir.

---

## 🚀 Zorluk

Artık gösterge paneli her yüklendiğinde hesap verilerini yeniden yüklüyoruz, sizce *tüm hesap* verilerini kalıcı hale getirmemiz hala gerekli mi?

Uygulamanın çalışması için kesinlikle gerekli olan verileri `localStorage`'da saklamak ve yüklemek için neyi değiştirebileceğinizi birlikte çalışarak deneyin.

## Ders Sonrası Test
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/48)

## Ödev

["İşlem ekle" diyalog kutusunu uygula](assignment.md)

İşte ödevi tamamladıktan sonra elde edeceğiniz örnek bir sonuç:

![Örnek "İşlem ekle" diyalog kutusunu gösteren ekran görüntüsü](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.tr.png)

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dilindeki hali, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.