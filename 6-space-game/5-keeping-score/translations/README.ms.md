# Membina Permainan Angkasa Bahagian 5: Pemarkahan dan Kehidupan

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/37)

Dalam pelajaran ini, anda akan belajar bagaimana menambahkan skor pada permainan dan mengira kehidupan.

## Lukis teks di skrin

Untuk dapat memaparkan skor permainan di layar, Anda harus tahu cara meletakkan teks di layar. Jawapannya adalah menggunakan kaedah `fillText()` pada objek kanvas. Anda juga dapat mengawal aspek lain seperti fon apa yang hendak digunakan, warna teks dan juga penjajarannya (kiri, kanan, tengah). Di bawah ini terdapat beberapa kod yang melukis beberapa teks di skrin.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Baca lebih lanjut mengenai [cara menambahkan teks ke kanvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), dan jangan ragu untuk menjadikan teks anda kelihatan lebih menarik!

## Hidup, sebagai konsep permainan

Konsep mempunyai kehidupan dalam permainan hanya bilangan. Dalam konteks permainan ruang angkasa adalah biasa untuk menetapkan satu set nyawa yang dipotong satu demi satu ketika kapal anda mengalami kerosakan. Senang jika anda dapat menunjukkan gambaran grafik seperti miniships atau hati dan bukannya angka.

## Apakah yang anda perlu bina

Mari tambahkan yang berikut ke permainan anda:

- **Skor permainan**: Untuk setiap kapal musuh yang musnah, pahlawan harus diberikan beberapa mata, kami mencadangkan 100 mata setiap kapal. Skor permainan harus ditunjukkan di kiri bawah.
- **Kehidupan**: Kapal anda mempunyai tiga nyawa. Anda kehilangan nyawa setiap kali kapal musuh bertembung dengan anda. Skor hidup mesti dipaparkan di kanan bawah dan dibuat berdasarkan grafik berikut! [Gambar hidup](../solution/assets/life.png).

## Langkah yang disyorkan

Cari fail yang telah dibuat untuk anda dalam sub folder `your-work`. Ia harus mengandungi yang berikut:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Anda memulakan projek anda folder `your_work` dengan mengetik:

```bash
cd your-work
npm start
```

Perkara di atas akan memulakan Pelayan HTTP pada alamat `http://localhost:5000`. Buka penyemak imbas dan masukkan alamatnya, sekarang ia akan menjadikan pahlawan dan semua musuh, dan ketika anda menekan anak panah kiri dan kanan, pahlawan bergerak dan dapat menembak musuh.

### Tambahkan Kod

1. **Salin atas aset yang diperlukan** dari folder `solution/aset/` ke folder `your-work`; anda akan menambah aset `life.png`. Tambahkan lifeImg ke fungsi window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Tambahkan `lifeImg` ke senarai aset:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```

2. **Tambah pemboleh ubah**. Tambahkan kod yang mewakili jumlah skor anda (0) dan tinggal (3), paparkan skor ini di skrin.

3. **Panjangkan fungsi `updateGameObjects ()`**. Panjangkan fungsi `updateGameObjects ()` untuk menangani perlanggaran musuh:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Tambahkan `life` dan` point`**.
   1. **Memulakan pemboleh ubah**. Di bawah `this.cooldown = 0` di kelas `Hero`, tetapkan hidup dan mata:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

    1. **Lukis pemboleh ubah pada skrin**. Lukiskan nilai-nilai ini ke skrin:

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

        1. ** Tambahkan kaedah ke gelung Permainan **. Pastikan anda menambahkan fungsi ini ke fungsi window.onload anda di bawah `updateGameObjects()`:

               ```javascript
               drawPoints();
               drawLife();
               ``` 

1. **Melaksanakan peraturan permainan**. Laksanakan peraturan permainan berikut:

   1. **Untuk setiap pertembungan pahlawan dan musuh**, tolaklah nyawa.

    Lanjutkan kelas `Hero` untuk melakukan pemotongan ini:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

    2. **Untuk setiap laser yang menyerang musu**, tingkatkan skor permainan dengan 100 mata.

    Panjangkan kelas Wira untuk melakukan kenaikan ini:

        ```javascript
         incrementPoints() {
            this.points += 100;
          }
        ```

        Tambahkan fungsi ini ke Collision Event Emitter anda:

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

✅ Lakukan sedikit penyelidikan untuk mengetahui permainan lain yang dibuat menggunakan JavaScript/Canvas. Apakah sifat umum mereka?

Menjelang akhir kerja ini, anda akan melihat kapal-kapal kecil 'kehidupan' di kanan bawah, titik di kiri bawah, dan anda akan melihat pengurangan jumlah hayat anda semasa anda bertembung dengan musuh dan kenaikan mata anda ketika anda menembak musuh. Bagus! Permainan anda hampir selesai.

---

## 🚀 Cabaran

Kod anda hampir lengkap. Bolehkah anda membayangkan langkah seterusnya?

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/38)

## Mengkaji & Belajar Sendiri

Teliti beberapa cara yang boleh anda tambah dan mengurangkan skor dan kehidupan permainan. Terdapat beberapa enjin permainan yang menarik seperti [PlayFab](https://playfab.com). Bagaimana penggunaan salah satu daripadanya dapat meningkatkan permainan anda?

## Tugasan

[Bina Permainan Pemarkahan](assignment.ms.md)