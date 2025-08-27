<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "41be8d35e7f30aa9dad10773c35e89c4",
  "translation_date": "2025-08-27T22:40:04+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "ms"
}
-->
# Bina Permainan Angkasa Bahagian 2: Lukis Hero dan Raksasa pada Kanvas

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/31)

## Kanvas

Kanvas adalah elemen HTML yang secara lalai tidak mempunyai kandungan; ia adalah ruang kosong. Anda perlu menambah kandungan dengan melukis di atasnya.

✅ Baca [lebih lanjut tentang API Kanvas](https://developer.mozilla.org/docs/Web/API/Canvas_API) di MDN.

Berikut adalah cara ia biasanya diisytiharkan, sebagai sebahagian daripada badan halaman:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Di atas, kita menetapkan `id`, `width` dan `height`.

- `id`: tetapkan ini supaya anda boleh mendapatkan rujukan apabila anda perlu berinteraksi dengannya.
- `width`: ini adalah lebar elemen.
- `height`: ini adalah tinggi elemen.

## Melukis geometri ringkas

Kanvas menggunakan sistem koordinat Cartesian untuk melukis objek. Oleh itu, ia menggunakan paksi x dan paksi y untuk menyatakan lokasi sesuatu objek. Lokasi `0,0` adalah kedudukan kiri atas, dan kanan bawah adalah apa yang anda tetapkan sebagai LEBAR dan TINGGI kanvas.

![grid kanvas](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.ms.png)
> Imej dari [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Untuk melukis pada elemen kanvas, anda perlu melalui langkah-langkah berikut:

1. **Dapatkan rujukan** kepada elemen Kanvas.
1. **Dapatkan rujukan** kepada elemen Konteks yang berada di atas elemen kanvas.
1. **Lakukan operasi lukisan** menggunakan elemen konteks.

Kod untuk langkah-langkah di atas biasanya kelihatan seperti ini:

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

✅ API Kanvas kebanyakannya memberi tumpuan kepada bentuk 2D, tetapi anda juga boleh melukis elemen 3D pada laman web; untuk ini, anda mungkin menggunakan [API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Anda boleh melukis pelbagai jenis objek dengan API Kanvas seperti:

- **Bentuk geometri**, kami telah menunjukkan cara melukis segi empat tepat, tetapi terdapat banyak lagi yang boleh anda lukis.
- **Teks**, anda boleh melukis teks dengan mana-mana fon dan warna yang anda inginkan.
- **Imej**, anda boleh melukis imej berdasarkan aset imej seperti .jpg atau .png sebagai contoh.

✅ Cuba! Anda tahu cara melukis segi empat tepat, bolehkah anda melukis bulatan pada halaman? Lihat beberapa lukisan Kanvas yang menarik di CodePen. Berikut adalah [contoh yang sangat mengagumkan](https://codepen.io/dissimulate/pen/KrAwx).

## Muat dan lukis aset imej

Anda memuatkan aset imej dengan mencipta objek `Image` dan menetapkan sifat `src`nya. Kemudian anda mendengar acara `load` untuk mengetahui bila ia sedia digunakan. Kodnya kelihatan seperti ini:

### Muat aset

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // image loaded and ready to be used
}
```

### Corak muat aset

Adalah disyorkan untuk membungkus kod di atas dalam struktur seperti ini, supaya ia lebih mudah digunakan dan anda hanya cuba memanipulasinya apabila ia dimuat sepenuhnya:

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

Untuk melukis aset permainan pada skrin, kod anda akan kelihatan seperti ini:

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

## Kini masa untuk mula membina permainan anda

### Apa yang perlu dibina

Anda akan membina laman web dengan elemen Kanvas. Ia harus memaparkan skrin hitam `1024*768`. Kami telah menyediakan dua imej untuk anda:

- Kapal hero

   ![Kapal hero](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.ms.png)

- 5*5 raksasa

   ![Kapal raksasa](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.ms.png)

### Langkah yang disyorkan untuk memulakan pembangunan

Cari fail yang telah dibuat untuk anda dalam sub folder `your-work`. Ia sepatutnya mengandungi perkara berikut:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Buka salinan folder ini dalam Visual Studio Code. Anda perlu mempunyai persekitaran pembangunan tempatan yang disediakan, sebaiknya dengan Visual Studio Code dengan NPM dan Node dipasang. Jika anda tidak mempunyai `npm` disediakan pada komputer anda, [berikut cara melakukannya](https://www.npmjs.com/get-npm).

Mulakan projek anda dengan menavigasi ke folder `your_work`:

```bash
cd your-work
npm start
```

Perintah di atas akan memulakan HTTP Server pada alamat `http://localhost:5000`. Buka pelayar dan masukkan alamat tersebut. Ia adalah halaman kosong buat masa ini, tetapi itu akan berubah.

> Nota: untuk melihat perubahan pada skrin anda, muat semula pelayar anda.

### Tambah kod

Tambah kod yang diperlukan ke `your-work/app.js` untuk menyelesaikan perkara berikut:

1. **Lukis** kanvas dengan latar belakang hitam  
   > petua: tambah dua baris di bawah TODO yang sesuai dalam `/app.js`, tetapkan elemen `ctx` menjadi hitam dan koordinat atas/kiri pada 0,0 serta tinggi dan lebar sama dengan kanvas.
2. **Muat** tekstur  
   > petua: tambah imej pemain dan musuh menggunakan `await loadTexture` dan masukkan laluan imej. Anda belum akan melihatnya di skrin!
3. **Lukis** hero di tengah-tengah skrin di bahagian bawah  
   > petua: gunakan API `drawImage` untuk melukis heroImg pada skrin, tetapkan `canvas.width / 2 - 45` dan `canvas.height - canvas.height / 4)`;
4. **Lukis** 5*5 raksasa  
   > petua: Kini anda boleh nyahkomen kod untuk melukis musuh pada skrin. Seterusnya, pergi ke fungsi `createEnemies` dan bina ia.

   Mula-mula, tetapkan beberapa pemalar:

    ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    kemudian, buat gelung untuk melukis array raksasa ke skrin:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Hasil

Hasil akhir sepatutnya kelihatan seperti ini:

![Skrin hitam dengan hero dan 5*5 raksasa](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.ms.png)

## Penyelesaian

Sila cuba menyelesaikannya sendiri terlebih dahulu, tetapi jika anda buntu, lihat [penyelesaian](../../../../6-space-game/2-drawing-to-canvas/solution/app.js).

---

## 🚀 Cabaran

Anda telah belajar tentang melukis dengan API Kanvas yang berfokuskan 2D; lihat [API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API), dan cuba melukis objek 3D.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/32)

## Kajian & Pembelajaran Kendiri

Ketahui lebih lanjut tentang API Kanvas dengan [membacanya](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Tugasan

[Bermain dengan API Kanvas](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.