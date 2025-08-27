<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "01336cddd638242e99b133614111ea40",
  "translation_date": "2025-08-27T22:41:20+00:00",
  "source_file": "6-space-game/6-end-condition/README.md",
  "language_code": "id"
}
-->
# Membangun Game Luar Angkasa Bagian 6: Akhir dan Mulai Ulang

## Kuis Pra-Kuliah

[Kuis pra-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/39)

Ada berbagai cara untuk menentukan *kondisi akhir* dalam sebuah game. Sebagai pembuat game, Anda yang menentukan alasan mengapa game berakhir. Berikut beberapa alasan, jika kita mengacu pada game luar angkasa yang telah Anda bangun sejauh ini:

- **`N` Kapal musuh telah dihancurkan**: Ini cukup umum jika Anda membagi game ke dalam level-level yang berbeda, di mana Anda perlu menghancurkan `N` kapal musuh untuk menyelesaikan level.
- **Kapal Anda telah dihancurkan**: Ada banyak game di mana Anda kalah jika kapal Anda dihancurkan. Pendekatan umum lainnya adalah menggunakan konsep nyawa. Setiap kali kapal Anda dihancurkan, nyawa akan berkurang. Setelah semua nyawa habis, Anda kalah dalam game.
- **Anda telah mengumpulkan `N` poin**: Kondisi akhir lainnya yang umum adalah mengumpulkan poin. Bagaimana Anda mendapatkan poin terserah Anda, tetapi biasanya poin diberikan untuk berbagai aktivitas seperti menghancurkan kapal musuh atau mengumpulkan item yang *jatuh* saat mereka dihancurkan.
- **Menyelesaikan level**: Ini mungkin melibatkan beberapa kondisi seperti `X` kapal musuh dihancurkan, `Y` poin dikumpulkan, atau mungkin item tertentu telah dikumpulkan.

## Memulai Ulang

Jika orang menikmati game Anda, kemungkinan besar mereka ingin memainkannya lagi. Setelah game berakhir karena alasan apa pun, Anda harus menawarkan opsi untuk memulai ulang.

✅ Pikirkan sedikit tentang kondisi apa yang membuat sebuah game berakhir, dan bagaimana Anda diminta untuk memulai ulang.

## Apa yang akan dibangun

Anda akan menambahkan aturan-aturan ini ke dalam game Anda:

1. **Menang dalam game**. Setelah semua kapal musuh dihancurkan, Anda memenangkan game. Selain itu, tampilkan pesan kemenangan.
1. **Memulai ulang**. Setelah semua nyawa Anda habis atau game dimenangkan, Anda harus menawarkan cara untuk memulai ulang game. Ingat! Anda perlu menginisialisasi ulang game dan menghapus status game sebelumnya.

## Langkah yang Direkomendasikan

Temukan file yang telah dibuat untuk Anda di sub folder `your-work`. Folder tersebut seharusnya berisi:

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

Mulai proyek Anda di folder `your_work` dengan mengetik:

```bash
cd your-work
npm start
```

Perintah di atas akan memulai HTTP Server pada alamat `http://localhost:5000`. Buka browser dan masukkan alamat tersebut. Game Anda seharusnya dalam kondisi dapat dimainkan.

> tip: untuk menghindari peringatan di Visual Studio Code, edit fungsi `window.onload` agar memanggil `gameLoopId` seperti apa adanya (tanpa `let`), dan deklarasikan `gameLoopId` di bagian atas file secara independen: `let gameLoopId;`

### Tambahkan kode

1. **Melacak kondisi akhir**. Tambahkan kode yang melacak jumlah musuh, atau jika kapal hero telah dihancurkan dengan menambahkan dua fungsi ini:

    ```javascript
    function isHeroDead() {
      return hero.life <= 0;
    }

    function isEnemiesDead() {
      const enemies = gameObjects.filter((go) => go.type === "Enemy" && !go.dead);
      return enemies.length === 0;
    }
    ```

1. **Tambahkan logika ke pengelola pesan**. Edit `eventEmitter` untuk menangani kondisi ini:

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

1. **Tambahkan jenis pesan baru**. Tambahkan Pesan ini ke objek constants:

    ```javascript
    GAME_END_LOSS: "GAME_END_LOSS",
    GAME_END_WIN: "GAME_END_WIN",
    ```

2. **Tambahkan kode untuk memulai ulang** kode yang memulai ulang game saat tombol yang dipilih ditekan.

   1. **Dengarkan tombol tekan `Enter`**. Edit eventListener window Anda untuk mendengarkan tombol ini:

    ```javascript
     else if(evt.key === "Enter") {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
      }
    ```

   1. **Tambahkan pesan memulai ulang**. Tambahkan Pesan ini ke constants Messages Anda:

        ```javascript
        KEY_EVENT_ENTER: "KEY_EVENT_ENTER",
        ```

1. **Implementasikan aturan game**. Implementasikan aturan game berikut:

   1. **Kondisi kemenangan pemain**. Ketika semua kapal musuh dihancurkan, tampilkan pesan kemenangan.

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

   1. **Logika memulai ulang**. Ketika semua nyawa habis atau pemain memenangkan game, tampilkan bahwa game dapat dimulai ulang. Selain itu, mulai ulang game saat tombol *restart* ditekan (Anda dapat menentukan tombol mana yang akan digunakan untuk memulai ulang).

      1. Buat fungsi `resetGame()`:

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

     1. Tambahkan panggilan ke `eventEmitter` untuk memulai ulang game di `initGame()`:

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

👽 💥 🚀 Selamat, Kapten! Game Anda telah selesai! Kerja bagus! 🚀 💥 👽

---

## 🚀 Tantangan

Tambahkan suara! Bisakah Anda menambahkan suara untuk meningkatkan pengalaman bermain game, mungkin saat ada tembakan laser, atau saat hero kalah atau menang? Lihat [sandbox](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play) ini untuk mempelajari cara memutar suara menggunakan JavaScript.

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/40)

## Tinjauan & Studi Mandiri

Tugas Anda adalah membuat contoh game baru, jadi jelajahi beberapa game menarik di luar sana untuk melihat jenis game apa yang mungkin Anda bangun.

## Tugas

[Bangun Contoh Game](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.