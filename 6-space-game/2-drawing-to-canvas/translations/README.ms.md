# Bina Permainan Angkasa Bahagian 2: Menarik Wira dan Monster ke Kanvas

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/31)

## Kanvas

Kanvas adalah elemen HTML yang secara lalai tidak mempunyai isi; itu batu tulis kosong. Anda perlu menambahkannya dengan melukisnya.

✅ Baca [lebih lanjut mengenai Canvas API](https://developer.mozilla.org/docs/Web/API/Canvas_API) di MDN.

Inilah cara ia dinyatakan secara umum, sebagai bahagian badan halaman:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

Di atas kita menetapkan `id`, `lebar` dan `tinggi`.

- `id`: tetapkan ini supaya anda dapat memperoleh rujukan apabila anda perlu berinteraksi dengannya.
- `lebar`: ini adalah lebar elemen.
- `tinggi`: ini adalah ketinggian elemen.

## Melukis geometri ringkas

Canvas menggunakan sistem koordinat kartesian untuk menarik sesuatu. Oleh itu ia menggunakan paksi-x dan paksi-y untuk menyatakan di mana sesuatu berada. Lokasi `0,0` adalah kedudukan kiri atas dan kanan bawah adalah yang anda katakan sebagai Luas dan TINGGI kanvas.

![grid kanvas](../canvas_grid.png)
> Imej dari [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Untuk menggunakan elemen kanvas, anda perlu melalui langkah-langkah berikut:

1. **Dapatkan rujukan** ke elemen Kanvas.
1. **Dapatkan rujukan** pada elemen Konteks yang terletak di elemen kanvas.
1. **Lakukan operasi menggambar** menggunakan elemen konteks.

Kod untuk langkah di atas biasanya kelihatan seperti:

```javascript
// melukis sebuah segi empat tepat berwarna merah
// 1. dapatkan rujukan kanvas
canvas = document.getElementById("myCanvas");

//2. tetapkan konteks ke 2D untuk melukis bentuk asas
ctx = canvas.getContext("2d");

//3. isi dengan warna merah
ctx.fillStyle = 'red';

//4. dan lukis sebuah segi empat tepat dengan parameter ini, tetapkan lokasi dan ukuran
ctx.fillRect(0,0, 200, 200) // x,y,luas,tinggi
```

✅ Canvas API kebanyakannya memfokuskan pada bentuk 2D, tetapi anda juga dapat menarik elemen 3D ke laman web; untuk ini, anda mungkin menggunakan [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Anda boleh menarik pelbagai perkara dengan Canvas API seperti:

- **Bentuk geometri**, kami sudah menunjukkan cara melukis segi empat tepat, tetapi masih banyak lagi yang dapat anda lukis.
- **Teks**, anda boleh menggambar teks dengan fon dan warna yang anda inginkan.
- **Imej**, anda boleh melukis gambar berdasarkan aset gambar seperti .jpg atau .png misalnya.

✅ Cubalah! Anda tahu melukis segi empat, bolehkah anda melukis bulatan ke halaman? Lihatlah beberapa lukisan Kanvas yang menarik di CodePen. Berikut adalah [contoh yang sangat mengagumkan](https://codepen.io/dissimulate/pen/KrAwx).

## Muat dan lukiskan aset gambar

Anda memuat aset gambar dengan membuat objek `Imej` dan menetapkan sifat `src`nya. Kemudian anda mendengar acara `load` untuk mengetahui kapan ia siap digunakan. Kodnya seperti ini:

### Muatkan aset

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // gambar dimuat dan siap digunakan
}
```

### Muatkan corak aset

Sebaiknya bungkus perkara di atas dengan konstruk seperti itu, jadi lebih mudah digunakan dan anda hanya mencuba memanipulasinya apabila dimuat sepenuhnya:

```javascript
function loadAsset(path) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      // gambar dimuat dan siap digunakan
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

Untuk menarik aset permainan ke skrin, kod anda akan kelihatan seperti ini:

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

## Kini tiba masanya untuk mula membina permainan anda

### Apa yang hendak dibina

Anda akan membina laman web dengan elemen Canvas. Ia harus menjadikan skrin hitam `1024*768` . Kami telah memberi anda dua gambar:

- Kapal wira

   ![Kapal wira](../solution/assets/player.png)

- 5 * 5 raksasa

   ![Monster ship](solution/assets/enemyShip.png)

### Langkah-langkah yang disarankan untuk memulakan pembangunan

Cari fail yang telah dibuat untuk anda dalam sub folder `your-work`. Ia harus mengandungi yang berikut:

```bash
-| assets
  -| enemyShip.png
  -| player.png
-| index.html
-| app.js
-| package.json
```

Buka salinan folder ini dalam Visual Studio Code. Anda perlu membuat persediaan persekitaran pembangunan tempatan, lebih baik dengan Visual Studio Code dengan NPM dan Node dipasang. Sekiranya anda tidak memasang `npm` di komputer anda, [berikut cara melakukannya](https://www.npmjs.com/get-npm).

Mulakan projek anda dengan menavigasi ke folder `your_work`:

```bash
cd your-work
npm start
```

Perkara di atas akan memulakan Pelayan HTTP pada alamat `http: // localhost: 5000`. Buka penyemak imbas dan masukkan alamat itu. Ini adalah halaman kosong sekarang, tetapi itu akan berubah

> Catatan: untuk melihat perubahan pada layar anda, muat semula penyemak imbas anda.

### Tambah Kod

Tambahkan kod yang diperlukan ke `your-work / app.js` untuk menyelesaikan perkara di bawah

1. ** Lukiskan kanvas dengan latar belakang hitam
   > tip: tambahkan dua baris di bawah TODO yang sesuai di `/ app.js`, tetapkan elemen` ctx` menjadi hitam dan koordinat atas / kiri berada pada 0,0 dan tinggi dan lebarnya sama dengan kanvas .
2. ** Muatkan tekstur **
   > tip: tambahkan gambar pemain dan musuh dengan menggunakan `menunggu loadTexture` dan melewati jalan gambar. Anda belum akan melihatnya di skrin!
3. ** Draw ** wira di tengah skrin di bahagian bawah
   > tip: gunakan API `drawImage` untuk menarik heroImg ke skrin, tetapkan` canvas.width / 2 - 45` dan `canvas.height - canvas.height / 4)`;
4. ** Draw ** 5 * 5 monster
   > tip: Sekarang anda boleh melepaskan kod untuk menarik musuh di layar. Seterusnya, pergi ke fungsi `createEnemies` dan bangunkan.

   Pertama, sediakan beberapa pemalar:

       ```javascript
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;
    ```

    kemudian, buat gelung untuk menarik susunan monster ke skrin:

    ```javascript
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
          ctx.drawImage(enemyImg, x, y);
        }
      }
    ```

## Keputusan

Hasil akhirnya akan kelihatan seperti:

![Skrin hitam dengan wira dan 5 * 5 monster](../partI-solution.png)

## Penyelesaian

Cuba selesaikannya sendiri terlebih dahulu tetapi jika anda buntu, lihatlah [solution](../solution/app.js)

---

## 🚀 Cabaran

Anda telah belajar melukis dengan Canvas API 2D; lihatlah [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API), dan cuba lukis objek 3D.

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/32)

## Mengkaji & Belajar Sendiri

Ketahui lebih lanjut mengenai Canvas API dengan [membaca mengenainya](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Tugasan

[Main dengan Canvas API](assignment.ms.md)