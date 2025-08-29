<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T00:30:24+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "tr"
}
-->
# Oyun Oluşturma: Olaylar Kullanarak

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/21)

## Olay Tabanlı Programlama

Tarayıcı tabanlı bir uygulama oluştururken, kullanıcıların oluşturduğumuz şeyle etkileşim kurması için bir grafik kullanıcı arayüzü (GUI) sağlarız. Tarayıcıyla etkileşim kurmanın en yaygın yolu, çeşitli öğelere tıklamak ve yazı yazmaktır. Ancak bir geliştirici olarak karşılaştığımız zorluk, bu işlemleri ne zaman gerçekleştireceklerini bilmememizdir!

[Olay tabanlı programlama](https://en.wikipedia.org/wiki/Event-driven_programming), GUI'mizi oluşturmak için yapmamız gereken programlama türünün adıdır. Bu ifadeyi biraz daha açarsak, burada anahtar kelimenin **olay** olduğunu görürüz. Merriam-Webster'a göre [olay](https://www.merriam-webster.com/dictionary/event), "bir şeyin gerçekleşmesi" olarak tanımlanır. Bu, durumumuzu mükemmel bir şekilde açıklar. Bir şeyin gerçekleşeceğini ve buna yanıt olarak bir kod çalıştırmak istediğimizi biliyoruz, ancak bunun ne zaman olacağını bilmiyoruz.

Bir kod bölümünü çalıştırmak istediğimizi belirtmek için bir fonksiyon oluştururuz. [Prosedürel programlama](https://en.wikipedia.org/wiki/Procedural_programming) hakkında düşündüğümüzde, fonksiyonlar belirli bir sırayla çağrılır. Olay tabanlı programlamada da aynı şey geçerli olacak. Fark, fonksiyonların **nasıl** çağrılacağıdır.

Olayları (butona tıklama, yazı yazma vb.) işlemek için **olay dinleyicileri** kaydederiz. Olay dinleyicisi, bir olayın gerçekleşmesini bekleyen ve buna yanıt olarak çalışan bir fonksiyondur. Olay dinleyicileri, kullanıcı arayüzünü güncelleyebilir, sunucuya çağrılar yapabilir veya kullanıcının eylemine yanıt olarak yapılması gereken başka şeyleri gerçekleştirebilir. Bir olay dinleyiciyi [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) kullanarak ve çalıştırılacak bir fonksiyon sağlayarak ekleriz.

> **NOTE:** Olay dinleyicileri oluşturmanın birçok yolu olduğunu belirtmekte fayda var. Anonim fonksiyonlar kullanabilir veya adlandırılmış fonksiyonlar oluşturabilirsiniz. `click` özelliğini ayarlamak veya `addEventListener` kullanmak gibi çeşitli kısayollar kullanabilirsiniz. Egzersizimizde, web geliştiricilerinin en yaygın kullandığı teknik olduğu için `addEventListener` ve anonim fonksiyonlara odaklanacağız. Ayrıca `addEventListener` tüm olaylar için çalıştığı ve olay adı bir parametre olarak sağlanabildiği için en esnek yöntemdir.

### Yaygın Olaylar

Bir uygulama oluştururken dinleyebileceğiniz [birçok olay](https://developer.mozilla.org/docs/Web/Events) vardır. Temelde bir kullanıcının bir sayfada yaptığı her şey bir olay oluşturur, bu da istediğiniz deneyimi sunmak için size büyük bir güç sağlar. Neyse ki, genellikle yalnızca birkaç olay yeterli olur. İşte yaygın olanlardan bazıları (oyunumuzu oluştururken kullanacağımız iki olay dahil):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Kullanıcı bir şeye tıkladı, genellikle bir düğme veya bağlantı
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Kullanıcı sağ fare tuşuna tıkladı
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Kullanıcı bir metni seçti
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Kullanıcı bir metin girdi

## Oyunu Oluşturma

Olayların JavaScript'te nasıl çalıştığını keşfetmek için bir oyun oluşturacağız. Oyunumuz, bir oyuncunun yazma becerisini test edecek, ki bu tüm geliştiricilerin sahip olması gereken en az değer verilen becerilerden biridir. Hepimiz yazma pratiği yapmalıyız! Oyunun genel akışı şu şekilde olacak:

- Oyuncu başlat düğmesine tıklar ve yazması gereken bir alıntı ile karşılaşır
- Oyuncu alıntıyı bir metin kutusunda olabildiğince hızlı bir şekilde yazar
  - Her kelime tamamlandığında bir sonraki kelime vurgulanır
  - Oyuncu bir yazım hatası yaparsa, metin kutusu kırmızıya döner
  - Oyuncu alıntıyı tamamladığında, geçen süre ile bir başarı mesajı görüntülenir

Haydi oyunumuzu oluşturalım ve olaylar hakkında bilgi edinelim!

### Dosya Yapısı

Toplamda üç dosyaya ihtiyacımız olacak: **index.html**, **script.js** ve **style.css**. İşimizi kolaylaştırmak için bunları ayarlayarak başlayalım.

- Bir konsol veya terminal penceresi açarak aşağıdaki komutu girerek çalışmanız için yeni bir klasör oluşturun:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Visual Studio Code'u açın

```bash
code .
```

- Visual Studio Code'da klasöre aşağıdaki adlarla üç dosya ekleyin:
  - index.html
  - script.js
  - style.css

## Kullanıcı Arayüzünü Oluşturma

Gereksinimleri incelersek, HTML sayfamızda birkaç öğeye ihtiyacımız olduğunu biliyoruz. Bu, bir tarif gibi, bazı malzemelere ihtiyacımız var:

- Kullanıcının yazması gereken alıntıyı göstermek için bir yer
- Başarı mesajı gibi mesajları göstermek için bir yer
- Yazı yazmak için bir metin kutusu
- Başlat düğmesi

Her biri için JavaScript'te çalışabilmemiz için kimlikler ekleyeceğiz. Ayrıca oluşturacağımız CSS ve JavaScript dosyalarına referanslar ekleyeceğiz.

**index.html** adında yeni bir dosya oluşturun. Aşağıdaki HTML'yi ekleyin:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Uygulamayı Başlatma

Her zaman iteratif olarak geliştirmek ve şeylerin nasıl göründüğünü görmek en iyisidir. Uygulamamızı başlatalım. Visual Studio Code için harika bir uzantı olan [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon), uygulamanızı yerel olarak barındırır ve her kaydettiğinizde tarayıcıyı yeniler.

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) uzantısını yükleyin. Bağlantıyı takip ederek **Install** düğmesine tıklayın.
  - Tarayıcı sizi Visual Studio Code'u açmaya yönlendirecek, ardından Visual Studio Code uzantıyı yüklemenizi isteyecek
  - Gerekirse Visual Studio Code'u yeniden başlatın
- Yükleme tamamlandıktan sonra, Visual Studio Code'da Ctrl-Shift-P (veya Cmd-Shift-P) tuşlarına basarak komut paletini açın
- **Live Server: Open with Live Server** yazın
  - Live Server uygulamanızı barındırmaya başlayacak
- Bir tarayıcı açın ve **https://localhost:5500** adresine gidin
- Artık oluşturduğunuz sayfayı görmelisiniz!

Haydi biraz işlevsellik ekleyelim.

## CSS Ekleme

HTML'mizi oluşturduktan sonra, temel stil için CSS ekleyelim. Oyuncunun yazması gereken kelimeyi vurgulamak ve yazdıklarının yanlış olması durumunda metin kutusunu renklendirmek için iki sınıf kullanacağız.

**style.css** adında yeni bir dosya oluşturun ve aşağıdaki sözdizimini ekleyin.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ CSS söz konusu olduğunda, sayfanızı istediğiniz gibi düzenleyebilirsiniz. Sayfayı daha çekici hale getirmek için biraz zaman ayırın:

- Farklı bir yazı tipi seçin
- Başlıkları renklendirin
- Öğeleri yeniden boyutlandırın

## JavaScript

Kullanıcı arayüzümüzü oluşturduktan sonra, mantığı sağlayacak JavaScript'e odaklanma zamanı. Bunu birkaç adıma böleceğiz:

- [Sabitleri oluştur](../../../../4-typing-game/typing-game)
- [Oyunu başlatmak için olay dinleyici ekle](../../../../4-typing-game/typing-game)
- [Yazma işlemi için olay dinleyici ekle](../../../../4-typing-game/typing-game)

Ama önce, **script.js** adında yeni bir dosya oluşturun.

### Sabitleri Ekle

Programlamayı kolaylaştırmak için birkaç öğeye ihtiyacımız olacak. Yine, bir tarif gibi, işte ihtiyacımız olanlar:

- Tüm alıntıların listesini içeren bir dizi
- Mevcut alıntının tüm kelimelerini depolamak için boş bir dizi
- Oyuncunun şu anda yazdığı kelimenin dizinini depolamak için bir alan
- Oyuncunun başlat düğmesine tıkladığı zamanı depolamak için bir alan

Ayrıca kullanıcı arayüzü öğelerine referanslar eklemek isteyeceğiz:

- Metin kutusu (**typed-value**)
- Alıntı gösterimi (**quote**)
- Mesaj (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Oyununuza daha fazla alıntı ekleyin

> **NOTE:** `document.getElementById` kullanarak öğeleri istediğimiz zaman kodda alabiliriz. Bu öğelere düzenli olarak başvuracağımız için, string literal hatalarını önlemek adına sabitler kullanacağız. [Vue.js](https://vuejs.org/) veya [React](https://reactjs.org/) gibi frameworkler, kodunuzu merkezileştirme konusunda size yardımcı olabilir.

`const`, `let` ve `var` kullanımı hakkında bir video izlemek için bir dakika ayırın.

[![Değişken türleri](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Değişken türleri")

> 🎥 Yukarıdaki görüntüye tıklayarak değişkenler hakkında bir video izleyin.

### Başlatma Mantığını Ekle

Oyuna başlamak için oyuncu başlat düğmesine tıklayacak. Tabii ki, ne zaman başlat düğmesine tıklayacaklarını bilmiyoruz. İşte burada bir [olay dinleyici](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) devreye giriyor. Bir olay dinleyici, bir şeyin gerçekleşmesini (bir olay) dinlememize ve buna yanıt olarak kod çalıştırmamıza olanak tanır. Bizim durumumuzda, kullanıcı başlat düğmesine tıkladığında kod çalıştırmak istiyoruz.

Kullanıcı **başlat** düğmesine tıkladığında, bir alıntı seçmemiz, kullanıcı arayüzünü ayarlamamız ve mevcut kelime ve zamanlama için izleme ayarlarını yapmamız gerekiyor. Aşağıda eklemeniz gereken JavaScript bulunuyor; kod bloğunun ardından açıklıyoruz.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Kodun detaylarını inceleyelim!

- Kelime takibini ayarlama
  - [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) ve [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) kullanarak `quotes` dizisinden rastgele bir alıntı seçiyoruz
  - `quote`'u bir `words` dizisine dönüştürerek oyuncunun şu anda yazdığı kelimeyi takip edebiliyoruz
  - Oyuncu ilk kelimeyle başlayacağı için `wordIndex` 0 olarak ayarlanıyor
- Kullanıcı arayüzünü ayarlama
  - Her kelimeyi bir `span` öğesi içinde içeren bir `spanWords` dizisi oluşturuyoruz
    - Bu, ekranda kelimeyi vurgulamamıza olanak tanır
  - `quoteElement`'in `innerHTML`'ini güncellemek için diziyi `join` ile bir string haline getiriyoruz
    - Bu, alıntıyı oyuncuya gösterecek
  - İlk `span` öğesinin `className`'ini `highlight` olarak ayarlayarak onu sarı olarak vurguluyoruz
  - `messageElement`'i temizlemek için `innerText`'i `''` olarak ayarlıyoruz
- Metin kutusunu ayarlama
  - `typedValueElement` üzerindeki mevcut `value`'yi temizliyoruz
  - `typedValueElement`'e `focus` ayarlıyoruz
- Zamanlayıcıyı `getTime` çağırarak başlatıyoruz

### Yazma Mantığını Ekle

Oyuncu yazarken bir `input` olayı tetiklenir. Bu olay dinleyici, oyuncunun kelimeyi doğru yazıp yazmadığını kontrol edecek ve oyunun mevcut durumunu yönetecek. **script.js** dosyasına dönerek aşağıdaki kodu sona ekleyin. Ardından detaylarını açıklayacağız.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Kodun detaylarını inceleyelim! Öncelikle mevcut kelimeyi ve oyuncunun şu ana kadar yazdığı değeri alıyoruz. Ardından, mantık sıralı bir şekilde ilerliyor: alıntı tamamlandı mı, kelime tamamlandı mı, kelime doğru mu, yoksa bir hata mı var.

- Alıntı tamamlandı, `typedValue`'nin `currentWord`'e eşit olması ve `wordIndex`'in `words`'un `length`'inden bir eksik olmasıyla belirtilir
  - `elapsedTime`'i `startTime`'dan mevcut zamanı çıkararak hesaplıyoruz
  - `elapsedTime`'i 1.000'e bölerek milisaniyeden saniyeye dönüştürüyoruz
  - Bir başarı mesajı görüntülüyoruz
- Kelime tamamlandı, `typedValue`'nin bir boşlukla bitmesi (kelimenin sonu) ve `typedValue`'nin `currentWord`'e eşit olmasıyla belirtilir
  - Bir sonraki kelimeyi yazabilmek için `typedElement` üzerindeki `value`'yi `''` olarak ayarlıyoruz
  - Bir sonraki kelimeye geçmek için `wordIndex`'i artırıyoruz
  - `quoteElement`'in tüm `childNodes` öğelerini döngüye alarak `className`'i `''` olarak ayarlıyoruz ve varsayılan görünüme dönüyoruz
  - Şu anda yazılması gereken kelimenin `className`'ini `highlight` olarak ayarlıyoruz
- Kelime şu anda doğru yazılmış (ancak tamamlanmamış), `currentWord`'ün `typedValue` ile başlamasıyla belirtilir
  - `typedValueElement`'in varsayılan olarak görüntülenmesini sağlamak için `className`'i temizliyoruz
- Eğer buraya kadar geldiysek, bir hata var
  - `typedValueElement` üzerindeki `className`'i `error` olarak ayarlıyoruz

## Uygulamanızı Test Edin

Sonuna geldiniz! Son adım, uygulamanızın çalıştığından emin olmaktır. Bir deneyin! Hatalar konusunda endişelenmeyin; **tüm geliştiriciler** hata yapar. Mesajları inceleyin ve gerektiğinde hata ayıklayın.

**Başlat** düğmesine tıklayın ve yazmaya başlayın! Önceden gördüğümüz animasyona benzer bir şey görmelisiniz.

![Oyunun çalışırken animasyonu](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Zorluk

Daha fazla işlevsellik ekleyin

- Alıntı tamamlandığında `input` olay dinleyicisini devre dışı bırakın ve düğme tıklandığında yeniden etkinleştirin
- Oyuncu alıntıyı tamamladığında metin kutusunu devre dışı bırakın
- Başarı mesajını içeren bir modal diyalog kutusu görüntüleyin
- [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) kullanarak yüksek skorları saklayın
## Ders Sonrası Quiz

[Ders sonrası quiz](https://ff-quizzes.netlify.app/web/quiz/22)

## Gözden Geçirme ve Kendi Kendine Çalışma

Web tarayıcısı aracılığıyla geliştiricilere sunulan [tüm etkinlikleri](https://developer.mozilla.org/docs/Web/Events) okuyun ve her birini kullanacağınız senaryoları düşünün.

## Ödev

[Yeni bir klavye oyunu oluşturun](assignment.md)

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlama veya yanlış yorumlamalardan sorumlu değiliz.