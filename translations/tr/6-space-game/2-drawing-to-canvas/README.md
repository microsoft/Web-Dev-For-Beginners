<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "056641280211e52fd0adb81b6058ec55",
  "translation_date": "2025-08-29T00:25:02+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "tr"
}
-->
# Uzay Oyunu Yapımı Bölüm 2: Kahraman ve Canavarları Tuvale Çizmek

## Ders Öncesi Test

[Ders öncesi test](https://ff-quizzes.netlify.app/web/quiz/31)

## Tuval (Canvas)

Tuval, varsayılan olarak içeriği olmayan bir HTML öğesidir; boş bir zemin gibidir. Üzerine çizim yaparak içerik eklemeniz gerekir.

✅ MDN'de [Canvas API hakkında daha fazla bilgi edinin](https://developer.mozilla.org/docs/Web/API/Canvas_API).

Genellikle sayfanın gövdesinde şu şekilde tanımlanır:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Yukarıda `id`, `width` ve `height` ayarlarını yapıyoruz.

- `id`: Tuval ile etkileşim kurmanız gerektiğinde bir referans alabilmek için bunu ayarlayın.
- `width`: Bu, öğenin genişliğidir.
- `height`: Bu, öğenin yüksekliğidir.

## Basit Geometri Çizimi

Tuval, bir şeyleri çizmek için kartezyen koordinat sistemini kullanır. Bu nedenle bir şeyin nerede bulunduğunu ifade etmek için x ve y eksenlerini kullanır. `0,0` konumu sol üst pozisyondur ve sağ alt köşe, tuvalin genişlik ve yüksekliği olarak belirttiğiniz değerdir.

![tuvalin ızgarası](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.tr.png)  
> Görsel [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) kaynağından alınmıştır.

Tuval öğesi üzerine çizim yapmak için aşağıdaki adımları takip etmeniz gerekir:

1. **Tuval öğesine bir referans alın.**
2. **Tuval öğesi üzerinde bulunan Context öğesine bir referans alın.**
3. **Context öğesini kullanarak bir çizim işlemi gerçekleştirin.**

Yukarıdaki adımların kodu genellikle şu şekilde görünür:

```javascript
// draws a red rectangle
//1. get the canvas reference
canvas = document.getElementById("myCanvas");

//2. set the context to 2D to draw basic shapes
ctx = canvas.getContext("2d");

//3. fill it with the color red
ctx.fillStyle = 'red';

//4. and draw a rectangle with these parameters, setting location and size
ctx.fillRect(0,0, 200, 200) // x,y,width, height
```

✅ Canvas API çoğunlukla 2D şekillere odaklanır, ancak bir web sitesine 3D öğeler de çizebilirsiniz; bunun için [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) kullanabilirsiniz.

Canvas API ile şunları çizebilirsiniz:

- **Geometrik şekiller**, dikdörtgen çizmenin nasıl yapıldığını gösterdik, ancak çizebileceğiniz çok daha fazla şey var.
- **Metin**, istediğiniz yazı tipi ve renkle metin çizebilirsiniz.
- **Görseller**, bir .jpg veya .png gibi bir görsel varlığından görsel çizebilirsiniz.

✅ Deneyin! Dikdörtgen çizmeyi biliyorsunuz, bir sayfaya daire çizebilir misiniz? CodePen'deki bazı ilginç Canvas çizimlerine göz atın. İşte [özellikle etkileyici bir örnek](https://codepen.io/dissimulate/pen/KrAwx).

## Görsel Varlık Yükleme ve Çizme

Bir görsel varlığı yüklemek için bir `Image` nesnesi oluşturup `src` özelliğini ayarlarsınız. Ardından, kullanıma hazır olduğunu bilmek için `load` olayını dinlersiniz. Kod şu şekilde görünür:

### Varlık Yükleme

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Varlık Yükleme Deseni

Yukarıdaki işlemi şu şekilde bir yapı içinde sarmalamanız önerilir, böylece kullanımı daha kolay olur ve yalnızca tamamen yüklendiğinde işlem yapmaya çalışırsınız:

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // image loaded and ready to be used
      resolve(img);
    }
  })
}

// use like so

async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')
}

```

Oyun varlıklarını ekrana çizmek için kodunuz şu şekilde görünür:

```javascript
async function run() {
  const heroImg = await loadAsset('hero.png')
  const monsterImg = await loadAsset('monster.png')

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  ctx.drawImage(heroImg, canvas.width/2,canvas.height/2);
  ctx.drawImage(monsterImg, 0,0);
}
```

## Artık Oyununuzu Yapmaya Başlama Zamanı

### Ne Yapılacak

Bir Canvas öğesi içeren bir web sayfası yapacaksınız. `1024*768` boyutlarında siyah bir ekran oluşturulmalı. Size iki görsel sağladık:

- Kahraman gemisi

   ![Kahraman gemisi](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.tr.png)

- 5*5 canavar

   ![Canavar gemisi](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.tr.png)

### Geliştirmeye Başlamak İçin Önerilen Adımlar

`your-work` alt klasöründe sizin için oluşturulmuş dosyaları bulun. Şunları içermelidir:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Bu klasörün bir kopyasını Visual Studio Code'da açın. Yerel bir geliştirme ortamı kurulu olmalı, tercihen Visual Studio Code ile NPM ve Node yüklü. Bilgisayarınızda `npm` kurulu değilse, [işte nasıl yapılacağı](https://www.npmjs.com/get-npm).

Projenize `your_work` klasörüne giderek başlayın:

```bash
cd your-work
npm start
```

Yukarıdaki işlem, `http://localhost:5000` adresinde bir HTTP Sunucusu başlatacaktır. Bir tarayıcı açın ve bu adresi girin. Şu anda boş bir sayfa görünecek, ancak bu değişecek.

> Not: Ekrandaki değişiklikleri görmek için tarayıcınızı yenileyin.

### Kod Ekleme

Aşağıdaki görevleri çözmek için `your-work/app.js` dosyasına gerekli kodu ekleyin:

1. **Tuvali** siyah bir arka planla çizin  
   > ipucu: `/app.js` dosyasındaki uygun TODO'nun altına iki satır ekleyin, `ctx` öğesini siyah olarak ayarlayın ve üst/sol koordinatları 0,0 olarak, yükseklik ve genişliği tuvalin boyutlarına eşit olarak ayarlayın.
2. **Dokuları** yükleyin  
   > ipucu: Görselleri `await loadTexture` kullanarak ve görsel yolunu geçirerek ekleyin. Henüz ekranda görünmeyecekler!
3. **Kahramanı** ekranın alt yarısının ortasına çizin  
   > ipucu: Kahraman görselini ekrana çizmek için `drawImage` API'sini kullanın, `canvas.width / 2 - 45` ve `canvas.height - canvas.height / 4)` ayarlarını yapın.
4. **5*5 canavarları** çizin  
   > ipucu: Şimdi canavarları ekrana çizmek için kodu yorumdan çıkarabilirsiniz. Ardından `createEnemies` fonksiyonuna gidin ve onu oluşturun.

   Öncelikle bazı sabitler ayarlayın:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    ardından, canavarlar dizisini ekrana çizmek için bir döngü oluşturun:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Sonuç

Tamamlanmış sonuç şu şekilde görünmelidir:

![Siyah ekran, kahraman ve 5*5 canavarlar](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.tr.png)

## Çözüm

Önce kendiniz çözmeyi deneyin, ancak takılırsanız [çözüme](../../../../6-space-game/2-drawing-to-canvas/solution/app.js) göz atabilirsiniz.

---

## 🚀 Meydan Okuma

2D odaklı Canvas API ile çizim yapmayı öğrendiniz; [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API)'ye bir göz atın ve 3D bir nesne çizmeyi deneyin.

## Ders Sonrası Test

[Ders sonrası test](https://ff-quizzes.netlify.app/web/quiz/32)

## Gözden Geçirme ve Kendi Kendine Çalışma

Canvas API hakkında daha fazla bilgi edinmek için [okuyun](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Ödev

[Canvas API ile oynayın](assignment.md)

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlama veya yanlış yorumlamalardan sorumlu değiliz.