<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-27T22:41:34+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "ms"
}
-->
# Bina Permainan Angkasa Bahagian 6: Tamat dan Mulakan Semula

## Kuiz Pra-Kuliah

[Kuiz pra-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

Terdapat pelbagai cara untuk menyatakan *keadaan tamat* dalam permainan. Sebagai pencipta permainan, terpulang kepada anda untuk menentukan sebab permainan berakhir. Berikut adalah beberapa sebab, jika kita mengandaikan kita bercakap tentang permainan angkasa yang anda bina setakat ini:

- **`N` Kapal musuh telah dimusnahkan**: Ini adalah perkara biasa jika anda membahagikan permainan kepada beberapa tahap di mana anda perlu memusnahkan `N` kapal musuh untuk melengkapkan satu tahap.
- **Kapal anda telah dimusnahkan**: Terdapat permainan di mana anda akan kalah jika kapal anda dimusnahkan. Pendekatan lain yang biasa adalah dengan menggunakan konsep nyawa. Setiap kali kapal anda dimusnahkan, ia akan mengurangkan satu nyawa. Apabila semua nyawa habis, anda akan kalah.
- **Anda telah mengumpul `N` mata**: Satu lagi keadaan tamat yang biasa adalah apabila anda mengumpul mata. Bagaimana anda mendapat mata terpulang kepada anda, tetapi biasanya mata diberikan untuk aktiviti seperti memusnahkan kapal musuh atau mengumpul item yang *jatuh* apabila dimusnahkan.
- **Melengkapkan satu tahap**: Ini mungkin melibatkan beberapa syarat seperti `X` kapal musuh dimusnahkan, `Y` mata dikumpul, atau mungkin item tertentu telah dikumpul.

## Memulakan Semula

Jika orang menikmati permainan anda, mereka mungkin ingin memainkannya semula. Apabila permainan tamat atas apa jua sebab, anda harus menawarkan pilihan untuk memulakan semula.

✅ Fikirkan sedikit tentang keadaan di mana anda merasakan permainan tamat, dan bagaimana anda diminta untuk memulakan semula.

## Apa yang Akan Dibina

Anda akan menambah peraturan ini ke dalam permainan anda:

1. **Menang permainan**. Apabila semua kapal musuh dimusnahkan, anda menang permainan. Selain itu, paparkan mesej kemenangan.
1. **Mulakan semula**. Apabila semua nyawa anda habis atau permainan dimenangi, anda harus menawarkan cara untuk memulakan semula permainan. Ingat! Anda perlu memulakan semula permainan dan keadaan permainan sebelumnya harus dibersihkan.

## Langkah yang Disyorkan

Cari fail yang telah dicipta untuk anda dalam sub folder `your-work`. Ia sepatutnya mengandungi perkara berikut:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
  -| life.png
-| index.html
-| app.js
-| package.json
```

Mulakan projek anda dalam folder `your_work` dengan menaip:

```bash
cd your-work
npm start
```

Perintah di atas akan memulakan HTTP Server pada alamat `http://localhost:5000`. Buka pelayar dan masukkan alamat tersebut. Permainan anda sepatutnya berada dalam keadaan boleh dimainkan.

> tip: untuk mengelakkan amaran dalam Visual Studio Code, edit fungsi `window.onload` untuk memanggil `gameLoopId` seperti sedia ada (tanpa `let`), dan isytiharkan `gameLoopId` di bahagian atas fail secara berasingan: `let gameLoopId;`

### Tambah Kod

1. **Jejak keadaan tamat**. Tambah kod yang menjejaki bilangan musuh, atau jika kapal hero telah dimusnahkan dengan menambah dua fungsi ini:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Tambah logik kepada pengendali mesej**. Edit `eventEmitter` untuk mengendalikan keadaan ini:

    ```javascript
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });

    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();
        if (isHeroDead())  {
          eventEmitter.emit(Messages.GAME_END_LOSS);
          return; // loss before victory
        }
        if (isEnemiesDead()) {
          eventEmitter.emit(Messages.GAME_END_WIN);
        }
    });
    
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    });
      
    eventEmitter.on(Messages.GAME_END_LOSS, () => {
      endGame(false);
    });
    ```

1. **Tambah jenis mesej baharu**. Tambah Mesej ini ke objek constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Tambah kod untuk memulakan semula** kod yang memulakan semula permainan apabila butang tertentu ditekan.

   1. **Dengar tekan kekunci `Enter`**. Edit eventListener tetingkap anda untuk mendengar tekan ini:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Tambah mesej mulakan semula**. Tambah Mesej ini ke constants Messages anda:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Laksanakan peraturan permainan**. Laksanakan peraturan permainan berikut:

   1. **Keadaan kemenangan pemain**. Apabila semua kapal musuh dimusnahkan, paparkan mesej kemenangan.

      1. Pertama, cipta fungsi `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

      1. Cipta fungsi `endGame()`:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // set a delay so we are sure any paints have finished
          setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (win) {
              displayMessage(
                "Victory!!! Pew Pew... - Press [Enter] to start a new game Captain Pew Pew",
                "green"
              );
            } else {
              displayMessage(
                "You died !!! Press [Enter] to start a new game Captain Pew Pew"
              );
            }
          }, 200)  
        }
        ```

   1. **Logik mulakan semula**. Apabila semua nyawa habis atau pemain memenangi permainan, paparkan bahawa permainan boleh dimulakan semula. Selain itu, mulakan semula permainan apabila kekunci *mulakan semula* ditekan (anda boleh memilih kekunci mana yang dipetakan untuk mulakan semula).

      1. Cipta fungsi `resetGame()`:

        ```javascript
        function resetGame() {
          if (gameLoopId) {
            clearInterval(gameLoopId);
            eventEmitter.clear();
            initGame();
            gameLoopId = setInterval(() => {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              drawPoints();
              drawLife();
              updateGameObjects();
              drawGameObjects(ctx);
            }, 100);
          }
        }
        ```

     1. Tambah panggilan kepada `eventEmitter` untuk menetapkan semula permainan dalam `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

     1. Tambah fungsi `clear()` kepada EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Tahniah, Kapten! Permainan anda telah siap! Syabas! 🚀 💥 👽

---

## 🚀 Cabaran

Tambah bunyi! Bolehkah anda menambah bunyi untuk meningkatkan pengalaman permainan anda, mungkin apabila terdapat tembakan laser, atau apabila hero mati atau menang? Lihat [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) ini untuk belajar cara memainkan bunyi menggunakan JavaScript.

## Kuiz Pasca-Kuliah

[Kuiz pasca-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## Ulasan & Kajian Kendiri

Tugasan anda adalah untuk mencipta contoh permainan baharu, jadi terokai beberapa permainan menarik di luar sana untuk melihat jenis permainan yang mungkin anda bina.

## Tugasan

[Bina Contoh Permainan](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.