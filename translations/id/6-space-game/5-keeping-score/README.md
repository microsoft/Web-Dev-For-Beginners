<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-27T22:34:33+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 5: Skor dan Nyawa

## Kuis Pra-Pelajaran

[Kuis pra-pelajaran](https://ff-quizzes.netlify.app/web/quiz/37)

Dalam pelajaran ini, Anda akan belajar cara menambahkan skor ke dalam game dan menghitung nyawa.

## Menampilkan teks di layar

Untuk dapat menampilkan skor game di layar, Anda perlu tahu cara meletakkan teks di layar. Caranya adalah dengan menggunakan metode `fillText()` pada objek canvas. Anda juga dapat mengontrol aspek lain seperti font yang digunakan, warna teks, dan bahkan perataan teks (kiri, kanan, tengah). Berikut adalah beberapa kode untuk menggambar teks di layar.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Baca lebih lanjut tentang [cara menambahkan teks ke canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), dan jangan ragu untuk membuatnya terlihat lebih menarik!

## Nyawa, sebagai konsep dalam game

Konsep memiliki nyawa dalam game hanyalah sebuah angka. Dalam konteks game luar angkasa, biasanya diberikan sejumlah nyawa yang berkurang satu per satu saat kapal Anda terkena serangan. Akan lebih menarik jika Anda dapat menampilkan representasi grafis seperti kapal kecil atau hati daripada hanya angka.

## Apa yang akan dibuat

Mari tambahkan hal-hal berikut ke dalam game Anda:

- **Skor game**: Untuk setiap kapal musuh yang dihancurkan, pemain utama harus mendapatkan poin, kami menyarankan 100 poin per kapal. Skor game harus ditampilkan di bagian kiri bawah.
- **Nyawa**: Kapal Anda memiliki tiga nyawa. Anda kehilangan satu nyawa setiap kali kapal musuh bertabrakan dengan Anda. Skor nyawa harus ditampilkan di bagian kanan bawah dan dibuat dari grafik berikut ![gambar nyawa](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.id.png).

## Langkah yang disarankan

Temukan file yang telah dibuat untuk Anda di sub folder `your-work`. Folder tersebut harus berisi:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Mulailah proyek Anda di folder `your_work` dengan mengetik:

```bash
cd your-work
npm start
```

Perintah di atas akan memulai HTTP Server pada alamat `http://localhost:5000`. Buka browser dan masukkan alamat tersebut, saat ini seharusnya menampilkan pemain utama dan semua musuh, dan saat Anda menekan tombol panah kiri dan kanan, pemain utama bergerak dan dapat menembak musuh.

### Tambahkan kode

1. **Salin aset yang diperlukan** dari folder `solution/assets/` ke folder `your-work`; Anda akan menambahkan aset `life.png`. Tambahkan lifeImg ke fungsi window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Tambahkan `lifeImg` ke daftar aset:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Tambahkan variabel**. Tambahkan kode yang merepresentasikan total skor (0) dan nyawa yang tersisa (3), tampilkan skor ini di layar.

3. **Perluas fungsi `updateGameObjects()`**. Perluas fungsi `updateGameObjects()` untuk menangani tabrakan dengan musuh:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Tambahkan `life` dan `points`**. 
   1. **Inisialisasi variabel**. Di bawah `this.cooldown = 0` dalam kelas `Hero`, tetapkan nyawa dan poin:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Gambar variabel di layar**. Tampilkan nilai-nilai ini di layar:

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

   1. **Tambahkan metode ke Game loop**. Pastikan Anda menambahkan fungsi-fungsi ini ke fungsi window.onload di bawah `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Terapkan aturan game**. Terapkan aturan game berikut:

   1. **Untuk setiap tabrakan antara pemain utama dan musuh**, kurangi satu nyawa.
   
      Perluas kelas `Hero` untuk melakukan pengurangan ini:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Untuk setiap laser yang mengenai musuh**, tambahkan skor game sebesar 100 poin.

      Perluas kelas Hero untuk melakukan penambahan ini:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Tambahkan fungsi-fungsi ini ke Collision Event Emitters:

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

✅ Lakukan sedikit riset untuk menemukan game lain yang dibuat menggunakan JavaScript/Canvas. Apa saja ciri-ciri umum mereka?

Pada akhir pekerjaan ini, Anda seharusnya dapat melihat kapal kecil 'nyawa' di bagian kanan bawah, poin di bagian kiri bawah, dan Anda akan melihat jumlah nyawa berkurang saat Anda bertabrakan dengan musuh serta poin bertambah saat Anda menembak musuh. Bagus sekali! Game Anda hampir selesai.

---

## 🚀 Tantangan

Kode Anda hampir selesai. Bisakah Anda membayangkan langkah berikutnya?

## Kuis Pasca-Pelajaran

[Kuis pasca-pelajaran](https://ff-quizzes.netlify.app/web/quiz/38)

## Tinjauan & Studi Mandiri

Teliti beberapa cara untuk menambah dan mengurangi skor game serta nyawa. Ada beberapa mesin game menarik seperti [PlayFab](https://playfab.com). Bagaimana penggunaan salah satu dari mesin ini dapat meningkatkan game Anda?

## Tugas

[Buat Game dengan Skor](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.