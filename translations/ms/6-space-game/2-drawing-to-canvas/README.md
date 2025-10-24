<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-24T14:39:16+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "ms"
}
-->
# Bina Permainan Angkasa Bahagian 2: Lukis Hero dan Raksasa pada Kanvas

API Kanvas adalah salah satu ciri paling berkuasa dalam pembangunan web untuk mencipta grafik dinamik dan interaktif terus dalam pelayar anda. Dalam pelajaran ini, kita akan mengubah elemen HTML `<canvas>` kosong itu menjadi dunia permainan yang dipenuhi dengan hero dan raksasa. Anggaplah kanvas sebagai papan seni digital anda di mana kod menjadi visual.

Kita akan membina berdasarkan apa yang anda pelajari dalam pelajaran sebelumnya, dan kini kita akan mendalami aspek visual. Anda akan belajar cara memuat dan memaparkan sprite permainan, meletakkan elemen dengan tepat, dan mencipta asas visual untuk permainan angkasa anda. Ini menjembatani jurang antara halaman web statik dan pengalaman interaktif yang dinamik.

Menjelang akhir pelajaran ini, anda akan mempunyai adegan permainan lengkap dengan kapal hero anda yang diletakkan dengan betul dan formasi musuh yang bersedia untuk bertempur. Anda akan memahami bagaimana permainan moden memaparkan grafik dalam pelayar dan memperoleh kemahiran untuk mencipta pengalaman visual interaktif anda sendiri. Mari kita terokai grafik kanvas dan hidupkan permainan angkasa anda!

## Kuiz Pra-Pelajaran

[Kuiz pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/31)

## Kanvas

Jadi, apakah sebenarnya elemen `<canvas>` ini? Ia adalah penyelesaian HTML5 untuk mencipta grafik dan animasi dinamik dalam pelayar web. Tidak seperti imej atau video biasa yang statik, kanvas memberi anda kawalan pada tahap piksel terhadap segala yang muncul di skrin. Ini menjadikannya sempurna untuk permainan, visualisasi data, dan seni interaktif. Anggaplah ia sebagai permukaan lukisan yang boleh diprogramkan di mana JavaScript menjadi berus lukisan anda.

Secara lalai, elemen kanvas kelihatan seperti segi empat kosong dan telus pada halaman anda. Tetapi di situlah potensi terletak! Kuasa sebenar muncul apabila anda menggunakan JavaScript untuk melukis bentuk, memuat imej, mencipta animasi, dan membuat sesuatu bertindak balas terhadap interaksi pengguna. Ia serupa dengan bagaimana perintis grafik komputer awal di Bell Labs pada tahun 1960-an perlu memprogram setiap piksel untuk mencipta animasi digital pertama.

✅ Baca [lebih lanjut tentang API Kanvas](https://developer.mozilla.org/docs/Web/API/Canvas_API) di MDN.

Berikut adalah cara ia biasanya diisytiharkan, sebagai sebahagian daripada badan halaman:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Apa yang dilakukan oleh kod ini:**
- **Menetapkan** atribut `id` supaya anda boleh merujuk elemen kanvas tertentu ini dalam JavaScript
- **Menentukan** `width` dalam piksel untuk mengawal saiz mendatar kanvas
- **Menetapkan** `height` dalam piksel untuk menentukan dimensi menegak kanvas

## Melukis Geometri Mudah

Sekarang anda tahu apa itu elemen kanvas, mari kita terokai cara sebenarnya melukis di atasnya! Kanvas menggunakan sistem koordinat yang mungkin terasa biasa dari kelas matematik, tetapi ada satu kelainan penting yang khusus untuk grafik komputer.

Kanvas menggunakan koordinat Cartesian dengan paksi x (mendatar) dan paksi y (menegak) untuk meletakkan segala yang anda lukis. Tetapi inilah perbezaan utama: tidak seperti sistem koordinat dari kelas matematik, titik asal `(0,0)` bermula di sudut kiri atas, dengan nilai x meningkat apabila anda bergerak ke kanan dan nilai y meningkat apabila anda bergerak ke bawah. Pendekatan ini berasal dari paparan komputer awal di mana pancaran elektron mengimbas dari atas ke bawah, menjadikan kiri atas sebagai titik permulaan semula jadi.

![grid kanvas](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.ms.png)
> Imej dari [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Untuk melukis pada elemen kanvas, anda akan mengikuti proses tiga langkah yang sama yang membentuk asas semua grafik kanvas. Setelah anda melakukannya beberapa kali, ia menjadi kebiasaan:

1. **Dapatkan rujukan** kepada elemen Kanvas anda dari DOM (sama seperti elemen HTML lain)
2. **Dapatkan konteks rendering 2D** – ini menyediakan semua kaedah lukisan
3. **Mulakan melukis!** Gunakan kaedah terbina dalam konteks untuk mencipta grafik anda

Berikut adalah cara ia kelihatan dalam kod:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Mari kita pecahkan langkah demi langkah:**
- Kita **ambil** elemen kanvas kita menggunakan IDnya dan simpan dalam pemboleh ubah
- Kita **dapatkan** konteks rendering 2D – ini adalah alat kita yang penuh dengan kaedah lukisan
- Kita **beritahu** kanvas bahawa kita mahu mengisi sesuatu dengan warna merah menggunakan sifat `fillStyle`
- Kita **lukis** segi empat bermula dari sudut kiri atas (0,0) yang lebar dan tinggi 200 piksel

✅ API Kanvas kebanyakannya memberi tumpuan kepada bentuk 2D, tetapi anda juga boleh melukis elemen 3D ke laman web; untuk ini, anda mungkin menggunakan [API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Anda boleh melukis pelbagai perkara dengan API Kanvas seperti:

- **Bentuk geometrik**, kami telah menunjukkan cara melukis segi empat, tetapi ada banyak lagi yang boleh anda lukis.
- **Teks**, anda boleh melukis teks dengan mana-mana fon dan warna yang anda inginkan.
- **Imej**, anda boleh melukis imej berdasarkan aset imej seperti .jpg atau .png sebagai contoh.

✅ Cuba! Anda tahu cara melukis segi empat, bolehkah anda melukis bulatan pada halaman? Lihat beberapa lukisan Kanvas yang menarik di CodePen. Berikut adalah [contoh yang sangat mengagumkan](https://codepen.io/dissimulate/pen/KrAwx).

## Muat dan Lukis Aset Imej

Melukis bentuk asas berguna untuk permulaan, tetapi kebanyakan permainan memerlukan imej sebenar! Sprite, latar belakang, dan tekstur adalah apa yang memberikan daya tarikan visual kepada permainan. Memuat dan memaparkan imej pada kanvas berfungsi secara berbeza daripada melukis bentuk geometrik, tetapi ia mudah difahami setelah anda memahami prosesnya.

Kita perlu mencipta objek `Image`, memuat fail imej kita (ini berlaku secara asinkron, bermaksud "di latar belakang"), dan kemudian melukisnya ke kanvas setelah ia sedia. Pendekatan ini memastikan imej anda dipaparkan dengan betul tanpa menghalang aplikasi anda semasa ia dimuat.

### Pemuatan Imej Asas

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Apa yang berlaku dalam kod ini:**
- Kita **cipta** objek Imej baru untuk memegang sprite atau tekstur kita
- Kita **beritahu** ia fail imej mana yang perlu dimuat dengan menetapkan laluan sumber
- Kita **dengar** acara muat supaya kita tahu dengan tepat bila imej sedia untuk digunakan

### Cara Lebih Baik untuk Memuat Imej

Berikut adalah cara yang lebih mantap untuk mengendalikan pemuatan imej yang biasa digunakan oleh pembangun profesional. Kita akan membungkus pemuatan imej dalam fungsi berasaskan Janji – pendekatan ini, yang dipopularkan apabila Janji JavaScript menjadi standard dalam ES6, menjadikan kod anda lebih teratur dan mengendalikan ralat dengan baik:

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

**Apa yang telah kita lakukan di sini:**
- **Membungkus** semua logik pemuatan imej itu dalam Janji supaya kita boleh mengendalikannya dengan lebih baik
- **Menambah** pengendalian ralat yang sebenarnya memberitahu kita apabila sesuatu tidak kena
- **Menggunakan** sintaks async/await moden kerana ia lebih mudah dibaca
- **Termasuk** blok try/catch untuk mengendalikan sebarang masalah pemuatan dengan baik

Setelah imej anda dimuat, melukisnya ke kanvas sebenarnya agak mudah:

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

**Mari kita lalui langkah demi langkah:**
- Kita **muat** kedua-dua imej hero dan raksasa kita di latar belakang menggunakan await
- Kita **ambil** elemen kanvas kita dan dapatkan konteks rendering 2D yang kita perlukan
- Kita **letakkan** imej hero tepat di tengah menggunakan beberapa matematik koordinat cepat
- Kita **letakkan** imej raksasa di sudut kiri atas untuk memulakan formasi musuh kita
- Kita **tangkap** sebarang ralat yang mungkin berlaku semasa pemuatan atau rendering

## Kini Masa untuk Mula Membina Permainan Anda

Sekarang kita akan menggabungkan semuanya untuk mencipta asas visual permainan angkasa anda. Anda mempunyai pemahaman yang kukuh tentang asas kanvas dan teknik pemuatan imej, jadi bahagian praktikal ini akan membimbing anda melalui pembinaan skrin permainan lengkap dengan sprite yang diletakkan dengan betul.

### Apa yang Perlu Dibina

Anda akan membina halaman web dengan elemen Kanvas. Ia harus memaparkan skrin hitam `1024*768`. Kami telah menyediakan dua imej untuk anda:

- Kapal hero

   ![Kapal hero](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.ms.png)

- 5*5 raksasa

   ![Kapal raksasa](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.ms.png)

### Langkah yang Disyorkan untuk Memulakan Pembangunan

Cari fail permulaan yang telah dibuat untuk anda dalam sub folder `your-work`. Struktur projek anda harus mengandungi:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Apa yang anda ada:**
- **Sprite permainan** berada dalam folder `assets/` supaya semuanya kekal teratur
- **Fail HTML utama anda** menyediakan elemen kanvas dan mempersiapkan segalanya
- **Fail JavaScript** di mana anda akan menulis semua magik rendering permainan anda
- **Fail package.json** yang menyediakan pelayan pembangunan supaya anda boleh menguji secara tempatan

Buka folder ini dalam Visual Studio Code untuk memulakan pembangunan. Anda memerlukan persekitaran pembangunan tempatan dengan Visual Studio Code, NPM, dan Node.js dipasang. Jika anda belum memasang `npm` pada komputer anda, [berikut adalah cara untuk memasangnya](https://www.npmjs.com/get-npm).

Mulakan pelayan pembangunan anda dengan menavigasi ke folder `your-work`:

```bash
cd your-work
npm start
```

**Perintah ini melakukan beberapa perkara yang cukup hebat:**
- **Memulakan** pelayan tempatan di `http://localhost:5000` supaya anda boleh menguji permainan anda
- **Menyajikan** semua fail anda dengan betul supaya pelayar anda boleh memuatnya dengan betul
- **Memantau** fail anda untuk perubahan supaya anda boleh membangun dengan lancar
- **Memberikan anda** persekitaran pembangunan profesional untuk menguji segalanya

> 💡 **Nota**: Pelayar anda akan menunjukkan halaman kosong pada mulanya – itu dijangka! Apabila anda menambah kod, segarkan pelayar anda untuk melihat perubahan anda. Pendekatan pembangunan iteratif ini serupa dengan bagaimana NASA membina komputer panduan Apollo – menguji setiap komponen sebelum mengintegrasikannya ke dalam sistem yang lebih besar.

### Tambah kod

Tambah kod yang diperlukan ke `your-work/app.js` untuk melengkapkan tugas berikut:

1. **Lukis kanvas dengan latar belakang hitam**
   > 💡 **Cara melakukannya**: Cari TODO dalam `/app.js` dan tambahkan hanya dua baris. Tetapkan `ctx.fillStyle` kepada hitam, kemudian gunakan `ctx.fillRect()` bermula dari (0,0) dengan dimensi kanvas anda. Mudah!

2. **Muat tekstur permainan**
   > 💡 **Cara melakukannya**: Gunakan `await loadAsset()` untuk memuat imej pemain dan musuh anda. Simpan dalam pemboleh ubah supaya anda boleh menggunakannya kemudian. Ingat – ia tidak akan muncul sehingga anda benar-benar melukisnya!

3. **Lukis kapal hero di posisi tengah-bawah**
   > 💡 **Cara melakukannya**: Gunakan `ctx.drawImage()` untuk meletakkan hero anda. Untuk koordinat x, cuba `canvas.width / 2 - 45` untuk meletakkannya di tengah, dan untuk koordinat y gunakan `canvas.height - canvas.height / 4` untuk meletakkannya di kawasan bawah.

4. **Lukis formasi 5×5 kapal musuh**
   > 💡 **Cara melakukannya**: Cari fungsi `createEnemies` dan sediakan gelung bersarang. Anda perlu melakukan beberapa matematik untuk jarak dan posisi, tetapi jangan risau – saya akan tunjukkan caranya!

Pertama, tetapkan pemalar untuk susun atur formasi musuh yang betul:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Mari kita pecahkan apa yang dilakukan oleh pemalar ini:**
- Kita **tetapkan** 5 musuh setiap baris dan lajur (grid 5×5 yang bagus)
- Kita **tentukan** berapa banyak ruang untuk diletakkan antara musuh supaya mereka tidak kelihatan sempit
- Kita **kira** betapa luasnya keseluruhan formasi kita
- Kita **tentukan** di mana untuk bermula dan berhenti supaya formasi kelihatan berpusat

Kemudian, cipta gelung bersarang untuk melukis formasi musuh:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Apa yang dilakukan oleh gelung bersarang ini:**
- Gelung luar **bergerak** dari kiri ke kanan merentasi formasi kita
- Gelung dalam **bergerak** dari atas ke bawah untuk mencipta barisan yang kemas
- Kita **lukis** setiap sprite musuh pada koordinat x,y yang kita kira
- Segalanya kekal **berjarak sama rata** supaya kelihatan profesional dan teratur

## Hasil

Hasil akhir sepatutnya kelihatan seperti ini:

![Skrin hitam dengan hero dan 5*5 raksasa](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.ms.png)

## Penyelesaian

Sila cuba menyelesaikannya sendiri terlebih dahulu tetapi jika anda tersangkut, lihat [penyelesaian](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)

---

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk melengkapkan cabaran berikut:

**Penerangan:** Tingkatkan kanvas permainan angkasa anda dengan menambah kesan visual dan elemen interaktif menggunakan teknik API Kanvas yang telah anda pelajari.

**Arahan:** Cipta fail baru bernama `enhanced-canvas.html` dengan kanvas yang memaparkan bintang animasi di latar belakang, bar kesihatan berdenyut untuk kapal hero, dan kapal musuh yang perlahan-lahan bergerak ke bawah. Sertakan kod JavaScript yang melukis bintang berkelip menggunakan posisi dan opasiti rawak, melaksanakan bar kesihatan yang berubah warna berdasarkan tahap kesihatan (hijau > kuning > merah), dan menganimasikan kapal musuh untuk bergerak ke bawah skrin pada kelajuan yang berbeza.

Ketahui lebih lanjut tentang [mod ejen](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Cabaran

Anda telah belajar tentang melukis dengan API Kanvas yang berfokuskan 2D; lihat [API WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API), dan cuba lukis objek 3D.

## Kuiz Pasca-Pelajaran

[Kuiz pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/32)

## Kajian & Pembelajaran Sendiri

Ketahui lebih lanjut tentang API Kanvas dengan [membacanya](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Tugasan

[Bermain dengan API Kanvas](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.