# Bina Permainan Angkasa Bahagian 6: Tamat dan Mulakan Semula

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/39)

Terdapat pelbagai cara untuk menyatakan dan *keadaan akhir* dalam permainan. Terserah anda sebagai pencipta permainan untuk mengatakan mengapa permainan ini berakhir. Berikut adalah beberapa sebab, jika kita menganggap bahawa kita sedang membincangkan permainan ruang angkasa yang anda buat sejauh ini:

- **Kapal musuh `N` telah hancur**: Sangat biasa jika anda membahagikan permainan ke dalam tahap yang berbeza yang anda perlukan untuk menghancurkan kapal `N` Musuh untuk menyelesaikan level
- **Kapal anda hancur**: Pasti ada permainan di mana anda kehilangan permainan jika kapal anda musnah. Pendekatan umum lain ialah anda mempunyai konsep kehidupan. Setiap kali kapal anda musnah, ia akan meragut nyawa. Setelah semua nyawa telah hilang maka anda akan kehilangan permainan.
- **Anda telah mengumpulkan mata `N`**: Syarat akhir yang umum ialah anda mengumpulkan mata. Cara anda memperoleh mata adalah bergantung kepada anda tetapi agak biasa untuk memberikan mata kepada pelbagai aktiviti seperti memusnahkan kapal musuh atau mungkin mengumpulkan barang-barang yang item *turun* ketika mereka musnah.
- **Lengkapkan tahap**: Ini mungkin melibatkan beberapa syarat seperti kapal musuh `X` musnah, mata `Y` dikumpulkan atau mungkin item tertentu telah dikumpulkan.

## Memulakan semula

Sekiranya orang menikmati permainan anda, mereka mungkin ingin memainkannya semula. Setelah permainan berakhir dengan alasan apa pun, anda harus menawarkan alternatif untuk dimulakan semula.

✅ Fikirkan sedikit dalam keadaan apa permainan anda berakhir, dan kemudian bagaimana anda diminta untuk memulakan semula

## Apakah yang anda perlu bina

Anda akan menambahkan peraturan ini ke permainan anda:

1. **Memenangi permainan**. Setelah semua kapal musuh musnah, anda memenangi permainan. Selain itu memaparkan semacam mesej kemenangan.
1. **Mulakan semula**. Setelah semua nyawa anda hilang atau permainan dimenangi, anda harus menawarkan cara untuk memulakan semula permainan. Ingat! Anda perlu memulakan semula permainan dan keadaan permainan sebelumnya harus dibersihkan.

## Langkah-langkah yang disyorkan

Cari fail yang telah dibuat untuk anda dalam sub folder `your-work`. Ia harus mengandungi yang berikut:

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

Anda memulakan projek anda folder `your_work` dengan mengetik:

```bash
cd your-work
npm start
```

Perkara di atas akan memulakan Pelayan HTTP pada alamat `http://localhost:5000`. Buka penyemak imbas dan masukkan alamat itu. Permainan anda mestilah dalam keadaan boleh dimainkan.

> tip: untuk mengelakkan amaran dalam Visual Studio Code, edit fungsi `window.onload` untuk memanggil `gameLoopId` sebagaimana adanya (tanpa `let`), dan nyatakan gameLoopId di bahagian atas fail, secara bebas: `let gameLoopId;`

### Tambahkan kod

1. **Keadaan hujung trek**. Tambahkan kod yang memantau jumlah musuh, atau jika kapal pahlawan telah musnah dengan menambahkan dua fungsi ini:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Tambahkan logik ke pengendali mesej**. Edit `eventEmitter` untuk menangani keadaan berikut:

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

1. **Tambahkan jenis mesej baru**. Tambahkan Mesej ini ke objek pemalar:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Tambah kod restart** kod yang memulakan semula permainan dengan menekan butang yang dipilih.

   1. **Dengarkan kekunci tekan `Enter`**. Edit eventListener tetingkap anda untuk mendengar akhbar ini:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

    1. **Tambah semula mesej**. Tambahkan Mesej ini ke pemalar Mesej anda:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Melaksanakan peraturan permainan**. Laksanakan peraturan permainan berikut:

   1. **Syarat kemenangan pemain**. Apabila semua kapal musuh hancur, tunjukkan mesej kemenangan.

      1. Pertama, buat fungsi `displayMessage()`:

        ```javascript
        function displayMessage(message, color = "red") {
          ctx.font = "30px Arial";
          ctx.fillStyle = color;
          ctx.textAlign = "center";
          ctx.fillText(message, canvas.width / 2, canvas.height / 2);
        }
        ```

        1. Buat fungsi `endGame()`:

        ```javascript
        function endGame(win) {
          clearInterval(gameLoopId);
        
          // atur kelewatan supaya kami yakin sebarang cat telah selesai
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

    1. **Mulakan semula logik**. Apabila semua nyawa hilang atau pemain memenangi permainan, tunjukkan bahawa permainan dapat dimulakan semula. Selain itu mulakan semula permainan apabila butang * restart * dipukul (anda boleh menentukan kunci apa yang harus dipetakan untuk dimulakan semula).

      1. Buat fungsi `resetGame ()`:

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

        1. Tambahkan panggilan ke `eventEmitter` untuk menetapkan semula permainan di `initGame()`:

        ```javascript
        eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
          resetGame();
        });
        ```

        1. Tambahkan fungsi `clear()` ke EventEmitter:

        ```javascript
        clear() {
          this.listeners = {};
        }
        ```

👽 💥 🚀 Tahniah, Kapten! Permainan anda selesai! Bagus! 🚀 💥 👽

---

## 🚀 Cabaran

Tambahkan suara! Bolehkah anda menambahkan suara untuk meningkatkan permainan anda, mungkin ketika ada pancaran laser, atau wira mati atau menang? Lihatlah [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) untuk belajar bagaimana memainkan suara menggunakan JavaScript

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/40)

## Mengkaji & Belajar Sendiri

Tugas anda adalah membuat permainan contoh baru, jadi terokai beberapa permainan menarik di luar sana untuk melihat jenis permainan yang mungkin anda bina.

## Tugasan

[Bina Contoh Permainan](assignment.ms.md)