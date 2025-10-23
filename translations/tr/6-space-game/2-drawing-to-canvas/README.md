<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-23T00:06:20+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 2: Kahraman ve Canavarları Tuvale Çizmek

Canvas API, tarayıcınızda dinamik ve etkileşimli grafikler oluşturmak için web geliştirme dünyasının en güçlü özelliklerinden biridir. Bu derste, boş HTML `<canvas>` öğesini kahramanlar ve canavarlarla dolu bir oyun dünyasına dönüştüreceğiz. Tuvali, kodun görselleştiği dijital bir sanat tahtası olarak düşünebilirsiniz.

Önceki derste öğrendiklerinizin üzerine inşa ediyoruz ve şimdi görsel yönlere dalıyoruz. Oyun sprite'larını nasıl yükleyeceğinizi ve görüntüleyeceğinizi, öğeleri tam olarak nasıl konumlandıracağınızı ve uzay oyununuz için görsel temeli nasıl oluşturacağınızı öğreneceksiniz. Bu, statik web sayfaları ile dinamik, etkileşimli deneyimler arasındaki boşluğu doldurur.

Bu dersin sonunda, kahraman geminizin doğru bir şekilde konumlandırıldığı ve düşman oluşumlarının savaşa hazır olduğu eksiksiz bir oyun sahnesine sahip olacaksınız. Modern oyunların tarayıcılarda grafiklerini nasıl oluşturduğunu anlayacak ve kendi etkileşimli görsel deneyimlerinizi oluşturma becerisi kazanacaksınız. Haydi, canvas grafiklerini keşfedelim ve uzay oyununuza hayat verelim!

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas Nedir?

Peki, `<canvas>` öğesi tam olarak nedir? Bu, HTML5'in web tarayıcılarında dinamik grafikler ve animasyonlar oluşturmak için sunduğu bir çözümdür. Statik olan normal resimler veya videoların aksine, canvas ekranda görünen her şey üzerinde piksel düzeyinde kontrol sağlar. Bu, oyunlar, veri görselleştirmeleri ve etkileşimli sanat için mükemmel bir araçtır. JavaScript'in fırçanız olduğu programlanabilir bir çizim yüzeyi olarak düşünebilirsiniz.

Varsayılan olarak, bir canvas öğesi sayfanızda boş, şeffaf bir dikdörtgen gibi görünür. Ancak işte potansiyel burada yatıyor! Gerçek gücü, JavaScript kullanarak şekiller çizdiğinizde, görüntüleri yüklediğinizde, animasyonlar oluşturduğunuzda ve kullanıcı etkileşimlerine yanıt verdiğinizde ortaya çıkar. Bu, 1960'larda Bell Labs'taki erken dönem bilgisayar grafikleri öncülerinin ilk dijital animasyonları oluşturmak için her pikseli programlamak zorunda kalmasına benzer.

✅ MDN'de [Canvas API hakkında daha fazla bilgi edinin](https://developer.mozilla.org/docs/Web/API/Canvas_API).

Genellikle, sayfanın gövdesinde şu şekilde tanımlanır:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Bu kodun yaptığı şeyler:**
- **`id` özelliğini ayarlar**, böylece bu belirli canvas öğesine JavaScript'te referans verebilirsiniz
- **Genişliği piksel cinsinden tanımlar**, canvas'ın yatay boyutunu kontrol eder
- **Yüksekliği piksel cinsinden belirler**, canvas'ın dikey boyutlarını belirler

## Basit Geometri Çizimi

Artık canvas öğesinin ne olduğunu bildiğinize göre, üzerinde gerçekten çizim yapmayı keşfedelim! Canvas, matematik dersinden tanıdık gelebilecek bir koordinat sistemi kullanır, ancak bilgisayar grafikleriyle ilgili önemli bir fark vardır.

Canvas, x ekseni (yatay) ve y ekseni (dikey) ile her şeyi konumlandırmak için Kartezyen koordinatlar kullanır. Ancak önemli bir fark var: Matematik dersindeki koordinat sisteminden farklı olarak, başlangıç noktası `(0,0)` sol üst köşede başlar, x değerleri sağa doğru hareket ettikçe artar ve y değerleri aşağıya doğru hareket ettikçe artar. Bu yaklaşım, elektron ışınlarının yukarıdan aşağıya tarandığı erken dönem bilgisayar ekranlarından kaynaklanır ve sol üst köşeyi doğal başlangıç noktası yapar.

![canvas'ın ızgarası](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.tr.png)
> Görsel [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) üzerinden alınmıştır.

Canvas öğesi üzerinde çizim yapmak için aşağıdaki üç adımlı süreci takip edeceksiniz. Bunu birkaç kez yaptığınızda, alışkanlık haline gelir:

1. **Canvas öğesine referans alın** – DOM'dan diğer HTML öğeleri gibi
2. **2D render bağlamını alın** – bu, tüm çizim yöntemlerini sağlar
3. **Çizmeye başlayın!** Bağlamın yerleşik yöntemlerini kullanarak grafiklerinizi oluşturun

Kodda nasıl göründüğüne bakalım:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Adım adım açıklayalım:**
- Canvas öğemizi **alıyoruz** ve bir değişkende saklıyoruz
- 2D render bağlamını **alıyoruz** – bu, çizim yöntemleriyle dolu araç setimiz
- Canvas'a kırmızıyla doldurmak istediğimizi `fillStyle` özelliği ile **söylüyoruz**
- Sol üst köşeden (0,0) başlayarak 200 piksel genişliğinde ve yüksekliğinde bir dikdörtgen **çiziyoruz**

✅ Canvas API çoğunlukla 2D şekillere odaklanır, ancak bir web sitesine 3D öğeler de çizebilirsiniz; bunun için [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) kullanabilirsiniz.

Canvas API ile şunları çizebilirsiniz:

- **Geometrik şekiller**, dikdörtgen çizmenin nasıl yapıldığını gösterdik, ancak çizebileceğiniz daha birçok şey var.
- **Metin**, istediğiniz yazı tipi ve renkte metin çizebilirsiniz.
- **Görseller**, .jpg veya .png gibi bir görsel varlığından bir görsel çizebilirsiniz.

✅ Deneyin! Dikdörtgen çizmeyi öğrendiniz, bir sayfaya bir daire çizebilir misiniz? CodePen'deki bazı ilginç Canvas çizimlerine göz atın. İşte [özellikle etkileyici bir örnek](https://codepen.io/dissimulate/pen/KrAwx).

## Görsel Varlık Yükleme ve Çizme

Temel şekiller çizmek başlangıç için faydalıdır, ancak çoğu oyun gerçek görsellere ihtiyaç duyar! Sprite'lar, arka planlar ve dokular, oyunlara görsel çekicilik kazandırır. Görselleri canvas üzerine yüklemek ve görüntülemek, geometrik şekiller çizmekten farklı çalışır, ancak süreci anladığınızda oldukça basittir.

Bir `Image` nesnesi oluşturmalı, görsel dosyamızı yüklemeli (bu işlem "arka planda" yani asenkron olarak gerçekleşir) ve ardından hazır olduğunda canvas üzerine çizmeliyiz. Bu yaklaşım, uygulamanızın yükleme sırasında engellenmeden görsellerin düzgün bir şekilde görüntülenmesini sağlar.

### Temel Görsel Yükleme

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Bu kodda neler oluyor:**
- Sprite veya dokumuzu tutmak için yepyeni bir Image nesnesi **oluşturuyoruz**
- Hangi görsel dosyasını yükleyeceğimizi kaynak yolunu ayarlayarak **söylüyoruz**
- Görselin ne zaman kullanılmaya hazır olduğunu bilmek için yükleme olayını **dinliyoruz**

### Görselleri Daha İyi Yükleme Yöntemi

Profesyonel geliştiricilerin sıkça kullandığı daha sağlam bir görsel yükleme yöntemi işte burada. Görsel yüklemeyi Promise tabanlı bir fonksiyon içinde saracağız – bu yaklaşım, ES6 ile JavaScript Promises standart hale geldiğinde popülerleşti, kodunuzu daha düzenli hale getirir ve hataları zarif bir şekilde ele alır:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**Burada yaptıklarımız:**
- Tüm görsel yükleme mantığını bir Promise içinde **sardık**, böylece daha iyi yönetebiliriz
- Bir şeyler ters gittiğinde bize gerçekten haber veren hata işleme **ekledik**
- Modern async/await sözdizimini **kullandık**, çünkü okunması çok daha temiz
- Yükleme aksaklıklarını zarif bir şekilde ele almak için try/catch blokları **ekledik**

Görselleriniz yüklendikten sonra, onları canvas üzerine çizmek aslında oldukça basittir:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**Adım adım açıklayalım:**
- Kahraman ve canavar görsellerimizi arka planda await kullanarak **yüklüyoruz**
- Canvas öğemizi **alıyoruz** ve ihtiyacımız olan 2D render bağlamını alıyoruz
- Kahraman görselini hızlı bir koordinat matematiği kullanarak tam ortasına **konumlandırıyoruz**
- Canavar görselini sol üst köşeye **yerleştiriyoruz** ve düşman oluşumumuzu başlatıyoruz
- Yükleme veya render sırasında meydana gelebilecek hataları **yakalamak** için önlem alıyoruz

## Şimdi Oyununuzu İnşa Etme Zamanı

Şimdi her şeyi bir araya getirerek uzay oyununuzun görsel temelini oluşturacağız. Canvas temelleri ve görsel yükleme teknikleri hakkında sağlam bir anlayışa sahipsiniz, bu uygulamalı bölüm size doğru konumlandırılmış sprite'larla eksiksiz bir oyun ekranı oluşturma konusunda rehberlik edecek.

### Ne Yapılacak?

Bir Canvas öğesi içeren bir web sayfası oluşturacaksınız. `1024*768` boyutlarında siyah bir ekran çizmelisiniz. Size iki görsel sağladık:

- Kahraman gemisi

   ![Kahraman gemisi](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.tr.png)

- 5*5 canavar

   ![Canavar gemisi](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.tr.png)

### Geliştirmeye Başlamak İçin Önerilen Adımlar

Sizin için `your-work` alt klasöründe oluşturulmuş başlangıç dosyalarını bulun. Proje yapınız şu şekilde olmalıdır:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Elinizde olanlar:**
- **Oyun sprite'ları** `assets/` klasöründe bulunur, böylece her şey düzenli kalır
- **Ana HTML dosyanız** canvas öğesini ayarlar ve her şeyi hazırlar
- **Bir JavaScript dosyası**, tüm oyun renderleme sihrinizi yazacağınız yer
- **Bir package.json**, yerel bir geliştirme sunucusu kurar, böylece yerel olarak test yapabilirsiniz

Bu klasörü Visual Studio Code'da açarak geliştirmeye başlayın. Visual Studio Code, NPM ve Node.js yüklü bir yerel geliştirme ortamına ihtiyacınız olacak. Bilgisayarınızda `npm` kurulumu yoksa, [nasıl kuracağınızı buradan öğrenebilirsiniz](https://www.npmjs.com/get-npm).

Geliştirme sunucunuzu `your-work` klasörüne giderek başlatın:

```bash
cd your-work
npm start
```

**Bu komut oldukça havalı şeyler yapar:**
- **Yerel bir sunucu başlatır** `http://localhost:5000` adresinde, böylece oyununuzu test edebilirsiniz
- **Tüm dosyalarınızı düzgün bir şekilde sunar**, böylece tarayıcınız onları doğru şekilde yükleyebilir
- **Dosyalarınızı izler**, böylece sorunsuz bir şekilde geliştirme yapabilirsiniz
- **Size** her şeyi test etmek için profesyonel bir geliştirme ortamı sağlar

> 💡 **Not**: Tarayıcınız başlangıçta boş bir sayfa gösterecek – bu beklenen bir durum! Kod ekledikçe, değişikliklerinizi görmek için tarayıcınızı yenileyin. Bu yinelemeli geliştirme yaklaşımı, NASA'nın Apollo yönlendirme bilgisayarını inşa etme şekline benzer – her bir bileşeni daha büyük sisteme entegre etmeden önce test etmek.

### Kod Ekleme

`your-work/app.js` dosyasına aşağıdaki görevleri tamamlamak için gerekli kodu ekleyin:

1. **Siyah arka planlı bir canvas çizin**
   > 💡 **Nasıl yapılır**: `/app.js` içinde bir TODO bulun ve sadece iki satır ekleyin. `ctx.fillStyle`'ı siyah olarak ayarlayın, ardından canvas boyutlarınızla (0,0) başlayarak `ctx.fillRect()` kullanın. Kolay!

2. **Oyun dokularını yükleyin**
   > 💡 **Nasıl yapılır**: Kahraman ve düşman görsellerinizi yüklemek için `await loadAsset()` kullanın. Daha sonra kullanabilmek için bunları değişkenlerde saklayın. Unutmayın – aslında onları çizene kadar görünmeyecekler!

3. **Kahraman gemisini merkez-alt konumuna çizin**
   > 💡 **Nasıl yapılır**: Kahramanınızı konumlandırmak için `ctx.drawImage()` kullanın. X koordinatı için `canvas.width / 2 - 45` deneyin ve Y koordinatı için `canvas.height - canvas.height / 4` kullanarak alt bölgeye yerleştirin.

4. **5×5 düşman gemisi oluşumu çizin**
   > 💡 **Nasıl yapılır**: `createEnemies` fonksiyonunu bulun ve iç içe bir döngü kurun. Aralık ve konumlandırma için biraz matematik yapmanız gerekecek, ancak endişelenmeyin – size tam olarak nasıl yapılacağını göstereceğim!

Öncelikle, uygun düşman oluşum düzeni için sabitler belirleyin:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Bu sabitlerin yaptığı şeyler:**
- Satır ve sütun başına 5 düşman **ayarlar** (güzel bir 5×5 ızgara)
- Düşmanlar arasında ne kadar boşluk bırakılacağını **tanımlar**, böylece sıkışık görünmezler
- Tüm oluşumun ne kadar geniş olacağını **hesaplar**
- Oluşumun merkezlenmiş görünmesi için nereden başlayıp nerede duracağını **belirler**

Sonra, düşman oluşumunu çizmek için iç içe döngüler oluşturun:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Bu iç içe döngünün yaptığı şeyler:**
- Dış döngü, oluşum boyunca soldan sağa **hareket eder**
- İç döngü, düzenli satırlar oluşturmak için yukarıdan aşağıya **gider**
- Her bir düşman sprite'ını hesapladığımız tam x,y koordinatlarında **çizeriz**
- Her şey **eşit aralıklı** kalır, böylece profesyonel ve düzenli görünür

## Sonuç

Tamamlanmış sonuç şu şekilde görünmelidir:

![Siyah ekran, kahraman ve 5*5 canavarlar](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.tr.png)

## Çözüm

Önce kendiniz çözmeyi deneyin, ancak takılırsanız bir [çözüm](../../../../6-space-game/2-drawing-to-canvas/solution/app.js) inceleyebilirsiniz.

---

## GitHub Copilot Agent Challenge 🚀

Agent modunu kullanarak aşağıdaki meydan okumayı tamamlayın:

**Açıklama:** Canvas API tekniklerini kullanarak uzay oyununuzun tuvalini görsel efektler ve etkileşimli öğeler ekleyerek geliştirin.

**İstek:** `enhanced-canvas.html` adlı yeni bir dosya oluşturun ve arka planda animasyonlu yıldızlar, kahraman gemisi için nabız atan bir sağlık çubuğu ve yavaşça aşağıya doğru hareket eden düşman gemileri içeren bir tuval oluşturun. Rastgele pozisyonlar ve opaklık kullanarak yanıp sönen yıldızlar çizen, sağlık seviyesine göre renk değiştiren (yeşil > sarı > kırmızı) bir sağlık çubuğu uygulayan ve düşman gemilerini farklı hızlarda ekranın aşağısına doğru hareket ettiren JavaScript kodu ekleyin.

[Agent modu](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hakkında daha fazla bilgi edinin.

## 🚀 Meydan Okuma

2D odaklı Canvas API ile çizim yapmayı öğrendiniz; [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)'ye bir göz atın ve bir 3D nesne çizmeyi deneyin.

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/32)

## Gözden Geçirme ve Kendi Kendine Çalışma

Canvas API hakkında daha fazla bilgi edinmek için [buradan okuyabilirsiniz](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Ödev

[Canvas API ile oynayın](assignment.md)

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.