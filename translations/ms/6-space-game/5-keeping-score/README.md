<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "4e8250db84b027c9ff816b4e4c093457",
  "translation_date": "2025-08-27T22:34:50+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "ms"
}
-->
# Bina Permainan Angkasa Bahagian 5: Skor dan Nyawa

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/37)

Dalam pelajaran ini, anda akan belajar cara menambah skor dalam permainan dan mengira nyawa.

## Paparkan teks di skrin

Untuk memaparkan skor permainan di skrin, anda perlu tahu cara meletakkan teks di skrin. Jawapannya adalah dengan menggunakan kaedah `fillText()` pada objek kanvas. Anda juga boleh mengawal aspek lain seperti jenis fon yang digunakan, warna teks, dan penjajaran (kiri, kanan, tengah). Di bawah adalah kod untuk memaparkan teks di skrin.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Baca lebih lanjut tentang [cara menambah teks ke kanvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text), dan jangan ragu untuk menjadikannya lebih menarik!

## Nyawa, sebagai konsep permainan

Konsep nyawa dalam permainan hanyalah satu nombor. Dalam konteks permainan angkasa, adalah biasa untuk menetapkan beberapa nyawa yang akan berkurang satu demi satu apabila kapal anda mengalami kerosakan. Adalah lebih menarik jika anda boleh memaparkan representasi grafik seperti kapal kecil atau hati berbanding hanya nombor.

## Apa yang perlu dibina

Mari tambahkan perkara berikut ke dalam permainan anda:

- **Skor permainan**: Untuk setiap kapal musuh yang dimusnahkan, wira anda sepatutnya mendapat mata, kami mencadangkan 100 mata untuk setiap kapal. Skor permainan perlu dipaparkan di bahagian bawah kiri.
- **Nyawa**: Kapal anda mempunyai tiga nyawa. Anda akan kehilangan satu nyawa setiap kali kapal musuh bertembung dengan anda. Skor nyawa perlu dipaparkan di bahagian bawah kanan dan menggunakan grafik berikut ![imej nyawa](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.ms.png).

## Langkah yang disyorkan

Cari fail-fail yang telah disediakan untuk anda dalam sub folder `your-work`. Ia sepatutnya mengandungi perkara berikut:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Mulakan projek anda dalam folder `your_work` dengan menaip:

```bash
cd your-work
npm start
```

Arahan di atas akan memulakan HTTP Server pada alamat `http://localhost:5000`. Buka pelayar dan masukkan alamat tersebut, buat masa ini ia sepatutnya memaparkan wira dan semua musuh, dan apabila anda menekan anak panah kiri dan kanan, wira akan bergerak dan boleh menembak musuh.

### Tambah kod

1. **Salin aset yang diperlukan** dari folder `solution/assets/` ke dalam folder `your-work`; anda akan menambah aset `life.png`. Tambahkan lifeImg ke fungsi window.onload: 

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
  
2. **Tambah pembolehubah**. Tambahkan kod yang mewakili jumlah skor anda (0) dan nyawa yang tinggal (3), paparkan skor ini di skrin.

3. **Kembangkan fungsi `updateGameObjects()`**. Kembangkan fungsi `updateGameObjects()` untuk mengendalikan perlanggaran musuh:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Tambah `life` dan `points`**. 
   1. **Inisialisasi pembolehubah**. Di bawah `this.cooldown = 0` dalam kelas `Hero`, tetapkan life dan points:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Paparkan pembolehubah di skrin**. Paparkan nilai-nilai ini di skrin:

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

   1. **Tambah kaedah ke Gelung Permainan**. Pastikan anda menambah fungsi-fungsi ini ke fungsi window.onload di bawah `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Laksanakan peraturan permainan**. Laksanakan peraturan permainan berikut:

   1. **Untuk setiap perlanggaran wira dan musuh**, tolak satu nyawa.
   
      Kembangkan kelas `Hero` untuk melaksanakan pengurangan ini:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Untuk setiap laser yang mengenai musuh**, tambahkan 100 mata ke skor permainan.

      Kembangkan kelas Hero untuk melaksanakan penambahan ini:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Tambahkan fungsi-fungsi ini ke Collision Event Emitters anda:

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

✅ Lakukan sedikit penyelidikan untuk mengetahui permainan lain yang dicipta menggunakan JavaScript/Canvas. Apakah ciri-ciri umum mereka?

Pada akhir kerja ini, anda sepatutnya dapat melihat kapal kecil 'nyawa' di bahagian bawah kanan, mata di bahagian bawah kiri, dan anda akan melihat jumlah nyawa berkurang apabila anda bertembung dengan musuh dan mata bertambah apabila anda menembak musuh. Syabas! Permainan anda hampir siap.

---

## 🚀 Cabaran

Kod anda hampir siap. Bolehkah anda membayangkan langkah seterusnya?

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/38)

## Ulasan & Kajian Kendiri

Selidik beberapa cara untuk menambah dan mengurangkan skor permainan dan nyawa. Terdapat beberapa enjin permainan menarik seperti [PlayFab](https://playfab.com). Bagaimana penggunaan salah satu daripadanya dapat meningkatkan permainan anda?

## Tugasan

[Bina Permainan Skor](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.