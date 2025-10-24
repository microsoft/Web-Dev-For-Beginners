<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-24T14:41:52+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "ms"
}
-->
# Bina Permainan Angkasa Bahagian 5: Skor dan Nyawa

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/37)

Bersedia untuk menjadikan permainan angkasa anda terasa seperti permainan sebenar? Mari kita tambahkan sistem skor dan pengurusan nyawa - mekanik utama yang mengubah permainan arked awal seperti Space Invaders daripada demonstrasi ringkas kepada hiburan yang mengasyikkan. Inilah saat permainan anda menjadi benar-benar boleh dimainkan.

## Melukis Teks di Skrin - Suara Permainan Anda

Untuk memaparkan skor anda, kita perlu belajar cara memaparkan teks pada kanvas. Kaedah `fillText()` adalah alat utama anda untuk ini - ia adalah teknik yang sama digunakan dalam permainan arked klasik untuk menunjukkan skor dan maklumat status.

Anda mempunyai kawalan penuh terhadap penampilan teks:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Terokai lebih lanjut tentang [menambah teks pada kanvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - anda mungkin terkejut dengan betapa kreatifnya anda boleh menjadi dengan fon dan gaya!

## Nyawa - Lebih Daripada Sekadar Nombor

Dalam reka bentuk permainan, "nyawa" mewakili margin kesilapan pemain. Konsep ini berasal dari mesin pinball, di mana anda mendapat beberapa bola untuk dimainkan. Dalam permainan video awal seperti Asteroids, nyawa memberikan pemain kebenaran untuk mengambil risiko dan belajar daripada kesilapan.

Representasi visual sangat penting - memaparkan ikon kapal bukannya hanya "Nyawa: 3" mencipta pengiktirafan visual segera, sama seperti kabinet arked awal menggunakan ikonografi untuk berkomunikasi merentasi halangan bahasa.

## Membina Sistem Ganjaran Permainan Anda

Sekarang kita akan melaksanakan sistem maklum balas utama yang membuat pemain terus terlibat:

- **Sistem skor**: Setiap kapal musuh yang dimusnahkan memberikan 100 mata (nombor bulat lebih mudah untuk pemain kira secara mental). Skor dipaparkan di sudut kiri bawah.
- **Pengiraan nyawa**: Wira anda bermula dengan tiga nyawa - satu standard yang ditetapkan oleh permainan arked awal untuk mengimbangi cabaran dengan kebolehmainan. Setiap perlanggaran dengan musuh mengurangkan satu nyawa. Kita akan memaparkan nyawa yang tinggal di sudut kanan bawah menggunakan ikon kapal ![imej nyawa](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.ms.png).

## Mari Mula Membina!

Pertama, sediakan ruang kerja anda. Navigasi ke fail dalam folder `your-work` anda. Anda sepatutnya melihat fail-fail ini:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Untuk menguji permainan anda, mulakan pelayan pembangunan dari folder `your_work`:

```bash
cd your-work
npm start
```

Ini akan menjalankan pelayan tempatan di `http://localhost:5000`. Buka alamat ini dalam pelayar anda untuk melihat permainan anda. Uji kawalan dengan kekunci anak panah dan cuba tembak musuh untuk memastikan semuanya berfungsi.

### Masa untuk Menulis Kod!

1. **Ambil aset visual yang diperlukan**. Salin aset `life.png` dari folder `solution/assets/` ke folder `your-work` anda. Kemudian tambahkan lifeImg ke fungsi window.onload anda:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Jangan lupa untuk menambah `lifeImg` ke senarai aset anda:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Sediakan pembolehubah permainan anda**. Tambahkan beberapa kod untuk menjejaki jumlah skor anda (bermula dari 0) dan nyawa yang tinggal (bermula dari 3). Kita akan memaparkan ini di skrin supaya pemain sentiasa tahu kedudukan mereka.

3. **Laksanakan pengesanan perlanggaran**. Panjangkan fungsi `updateGameObjects()` anda untuk mengesan apabila musuh berlanggar dengan wira anda:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Tambahkan pengiraan nyawa dan mata kepada Wira anda**. 
   1. **Inisialisasi pengiraan**. Di bawah `this.cooldown = 0` dalam kelas `Hero` anda, sediakan nyawa dan mata:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Paparkan nilai-nilai ini kepada pemain**. Cipta fungsi untuk melukis nilai-nilai ini di skrin:

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

   1. **Sambungkan semuanya ke gelung permainan anda**. Tambahkan fungsi-fungsi ini ke fungsi window.onload anda tepat selepas `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Laksanakan akibat dan ganjaran permainan**. Sekarang kita akan menambah sistem maklum balas yang menjadikan tindakan pemain bermakna:

   1. **Perlanggaran mengurangkan nyawa**. Setiap kali wira anda berlanggar dengan musuh, anda harus kehilangan satu nyawa.
   
      Tambahkan kaedah ini ke kelas `Hero` anda:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Menembak musuh memberikan mata**. Setiap tembakan yang berjaya memberikan 100 mata, memberikan maklum balas positif segera untuk tembakan yang tepat.

      Panjangkan kelas Hero anda dengan kaedah penambahan ini:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Sekarang sambungkan fungsi-fungsi ini ke acara perlanggaran:

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

✅ Ingin tahu tentang permainan lain yang dibina dengan JavaScript dan Canvas? Lakukan sedikit penerokaan - anda mungkin kagum dengan apa yang boleh dilakukan!

Selepas melaksanakan ciri-ciri ini, uji permainan anda untuk melihat sistem maklum balas lengkap berfungsi. Anda sepatutnya melihat ikon nyawa di sudut kanan bawah, skor anda di sudut kiri bawah, dan perhatikan bagaimana perlanggaran mengurangkan nyawa sementara tembakan yang berjaya meningkatkan skor anda.

Permainan anda kini mempunyai mekanik penting yang menjadikan permainan arked awal begitu menarik - matlamat yang jelas, maklum balas segera, dan akibat yang bermakna untuk tindakan pemain.

---

## Cabaran Ejen GitHub Copilot 🚀

Gunakan mod Ejen untuk menyelesaikan cabaran berikut:

**Penerangan:** Tingkatkan sistem skor permainan angkasa dengan melaksanakan ciri skor tertinggi dengan penyimpanan berterusan dan mekanik skor bonus.

**Arahan:** Cipta sistem skor tertinggi yang menyimpan skor terbaik pemain ke localStorage. Tambahkan mata bonus untuk pembunuhan musuh berturut-turut (sistem kombo) dan laksanakan nilai mata yang berbeza untuk jenis musuh yang berbeza. Sertakan penunjuk visual apabila pemain mencapai skor tertinggi baru dan paparkan skor tertinggi semasa di skrin permainan.



## 🚀 Cabaran

Anda kini mempunyai permainan berfungsi dengan skor dan nyawa. Pertimbangkan ciri tambahan yang mungkin meningkatkan pengalaman pemain.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/38)

## Ulasan & Kajian Sendiri

Ingin meneroka lebih lanjut? Kajilah pendekatan yang berbeza untuk sistem skor dan nyawa permainan. Terdapat enjin permainan yang menarik seperti [PlayFab](https://playfab.com) yang menguruskan skor, papan pendahulu, dan perkembangan pemain. Bagaimana jika mengintegrasikan sesuatu seperti itu dapat membawa permainan anda ke tahap seterusnya?

## Tugasan

[Bina Permainan Skor](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.