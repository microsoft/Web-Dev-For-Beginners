<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-24T14:17:22+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 5: Skor dan Nyawa

## Kuis Pra-Kuliah

[Kuis pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/37)

Siap membuat game luar angkasa Anda terasa seperti game sungguhan? Mari tambahkan sistem skor dan pengelolaan nyawa - mekanik inti yang mengubah game arcade awal seperti Space Invaders dari sekadar demonstrasi menjadi hiburan yang adiktif. Di sinilah game Anda menjadi benar-benar bisa dimainkan.

## Menampilkan Teks di Layar - Suara Game Anda

Untuk menampilkan skor Anda, kita perlu belajar cara merender teks di kanvas. Metode `fillText()` adalah alat utama Anda untuk ini - teknik yang sama yang digunakan dalam game arcade klasik untuk menunjukkan skor dan informasi status.

Anda memiliki kendali penuh atas tampilan teks:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Pelajari lebih dalam tentang [menambahkan teks ke kanvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - Anda mungkin akan terkejut dengan seberapa kreatif Anda bisa bermain dengan font dan gaya!

## Nyawa - Lebih dari Sekadar Angka

Dalam desain game, "nyawa" mewakili margin kesalahan pemain. Konsep ini berasal dari mesin pinball, di mana Anda mendapatkan beberapa bola untuk dimainkan. Dalam video game awal seperti Asteroids, nyawa memberikan izin kepada pemain untuk mengambil risiko dan belajar dari kesalahan.

Representasi visual sangat penting - menampilkan ikon kapal alih-alih hanya "Nyawa: 3" menciptakan pengenalan visual langsung, mirip dengan cara kabinet arcade awal menggunakan ikonografi untuk berkomunikasi melintasi hambatan bahasa.

## Membangun Sistem Penghargaan Game Anda

Sekarang kita akan mengimplementasikan sistem umpan balik inti yang membuat pemain tetap terlibat:

- **Sistem skor**: Setiap kapal musuh yang dihancurkan memberikan 100 poin (angka bulat lebih mudah dihitung secara mental oleh pemain). Skor ditampilkan di sudut kiri bawah.
- **Penghitung nyawa**: Pahlawan Anda memulai dengan tiga nyawa - standar yang ditetapkan oleh game arcade awal untuk menyeimbangkan tantangan dengan kemampuan bermain. Setiap tabrakan dengan musuh mengurangi satu nyawa. Kita akan menampilkan sisa nyawa di sudut kanan bawah menggunakan ikon kapal ![gambar nyawa](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.id.png).

## Mari Mulai Membangun!

Pertama, siapkan ruang kerja Anda. Navigasikan ke file di folder `your-work`. Anda seharusnya melihat file-file ini:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Untuk menguji game Anda, jalankan server pengembangan dari folder `your_work`:

```bash
cd your-work
npm start
```

Ini akan menjalankan server lokal di `http://localhost:5000`. Buka alamat ini di browser Anda untuk melihat game Anda. Uji kontrol dengan tombol panah dan coba tembak musuh untuk memastikan semuanya berfungsi.

### Saatnya Coding!

1. **Ambil aset visual yang Anda butuhkan**. Salin aset `life.png` dari folder `solution/assets/` ke folder `your-work`. Kemudian tambahkan lifeImg ke fungsi window.onload Anda:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Jangan lupa tambahkan `lifeImg` ke daftar aset Anda:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Siapkan variabel game Anda**. Tambahkan beberapa kode untuk melacak total skor Anda (dimulai dari 0) dan sisa nyawa (dimulai dari 3). Kita akan menampilkan ini di layar sehingga pemain selalu tahu posisi mereka.

3. **Implementasikan deteksi tabrakan**. Perluas fungsi `updateGameObjects()` Anda untuk mendeteksi saat musuh bertabrakan dengan pahlawan Anda:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Tambahkan pelacakan nyawa dan poin ke Pahlawan Anda**. 
   1. **Inisialisasi penghitung**. Di bawah `this.cooldown = 0` dalam kelas `Hero` Anda, siapkan nyawa dan poin:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Tampilkan nilai-nilai ini kepada pemain**. Buat fungsi untuk menggambar nilai-nilai ini di layar:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Hubungkan semuanya ke loop game Anda**. Tambahkan fungsi-fungsi ini ke fungsi window.onload Anda tepat setelah `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementasikan konsekuensi dan penghargaan dalam game**. Sekarang kita akan menambahkan sistem umpan balik yang membuat tindakan pemain menjadi bermakna:

   1. **Tabrakan mengurangi nyawa**. Setiap kali pahlawan Anda menabrak musuh, Anda harus kehilangan satu nyawa.
   
      Tambahkan metode ini ke kelas `Hero` Anda:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Menembak musuh menghasilkan poin**. Setiap tembakan yang berhasil memberikan 100 poin, memberikan umpan balik positif langsung untuk tembakan yang akurat.

      Perluas kelas Hero Anda dengan metode peningkatan ini:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Sekarang hubungkan fungsi-fungsi ini ke peristiwa tabrakan:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Penasaran dengan game lain yang dibuat dengan JavaScript dan Canvas? Lakukan eksplorasi - Anda mungkin akan terkejut dengan apa yang mungkin dilakukan!

Setelah mengimplementasikan fitur-fitur ini, uji game Anda untuk melihat sistem umpan balik lengkap dalam aksi. Anda seharusnya melihat ikon nyawa di sudut kanan bawah, skor Anda di sudut kiri bawah, dan menyaksikan bagaimana tabrakan mengurangi nyawa sementara tembakan yang berhasil meningkatkan skor Anda.

Game Anda sekarang memiliki mekanik penting yang membuat game arcade awal begitu menarik - tujuan yang jelas, umpan balik langsung, dan konsekuensi yang bermakna untuk tindakan pemain.

---

## Tantangan GitHub Copilot Agent 🚀

Gunakan mode Agent untuk menyelesaikan tantangan berikut:

**Deskripsi:** Tingkatkan sistem skor game luar angkasa dengan mengimplementasikan fitur skor tertinggi dengan penyimpanan yang persisten dan mekanik bonus skor.

**Prompt:** Buat sistem skor tertinggi yang menyimpan skor terbaik pemain ke localStorage. Tambahkan poin bonus untuk pembunuhan musuh berturut-turut (sistem kombo) dan implementasikan nilai poin yang berbeda untuk jenis musuh yang berbeda. Sertakan indikator visual saat pemain mencapai skor tertinggi baru dan tampilkan skor tertinggi saat ini di layar game.

## 🚀 Tantangan

Sekarang Anda memiliki game yang berfungsi dengan skor dan nyawa. Pertimbangkan fitur tambahan apa yang mungkin meningkatkan pengalaman pemain.

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/38)

## Tinjauan & Studi Mandiri

Ingin menjelajahi lebih banyak? Teliti pendekatan berbeda untuk sistem skor dan nyawa dalam game. Ada mesin game yang menarik di luar sana seperti [PlayFab](https://playfab.com) yang menangani skor, papan peringkat, dan perkembangan pemain. Bagaimana integrasi sesuatu seperti itu dapat membawa game Anda ke tingkat berikutnya?

## Tugas

[Bangun Game dengan Sistem Skor](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.