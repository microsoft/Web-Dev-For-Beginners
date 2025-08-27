<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "7aa6e4f270d38d9cb17f2b5bd86b863d",
  "translation_date": "2025-08-27T23:05:05+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "id"
}
-->
# Menggunakan Editor Kode

Pelajaran ini membahas dasar-dasar penggunaan [VSCode.dev](https://vscode.dev), sebuah editor kode berbasis web, sehingga Anda dapat membuat perubahan pada kode Anda dan berkontribusi pada proyek tanpa perlu menginstal apa pun di komputer Anda.

## Tujuan Pembelajaran

Dalam pelajaran ini, Anda akan belajar bagaimana:

- Menggunakan editor kode dalam sebuah proyek kode
- Melacak perubahan dengan kontrol versi
- Menyesuaikan editor untuk pengembangan

### Prasyarat

Sebelum memulai, Anda perlu membuat akun di [GitHub](https://github.com). Buka [GitHub](https://github.com/) dan buat akun jika Anda belum memilikinya.

### Pengantar

Editor kode adalah alat penting untuk menulis program dan berkolaborasi dalam proyek kode yang sudah ada. Setelah Anda memahami dasar-dasar editor dan cara memanfaatkan fiturnya, Anda dapat menerapkannya saat menulis kode.

## Memulai dengan VSCode.dev

[VSCode.dev](https://vscode.dev) adalah editor kode berbasis web. Anda tidak perlu menginstal apa pun untuk menggunakannya, seperti membuka situs web lainnya. Untuk memulai dengan editor ini, buka tautan berikut: [https://vscode.dev](https://vscode.dev). Jika Anda belum masuk ke [GitHub](https://github.com/), ikuti petunjuk untuk masuk atau buat akun baru, lalu masuk.

Setelah dimuat, tampilannya akan serupa dengan gambar berikut:

![Default VSCode.dev](../../../../translated_images/default-vscode-dev.5d06881d65c1b3234ce50cd9ed3b0028e6031ad5f5b441bcbed96bfa6311f6d0.id.png)

Ada tiga bagian utama, dimulai dari kiri ke kanan:

1. _Activity bar_ yang mencakup beberapa ikon, seperti kaca pembesar 🔎, roda gigi ⚙️, dan beberapa lainnya.
2. _Side bar_ yang merupakan perpanjangan dari activity bar dan secara default menampilkan _Explorer_.
3. Area kode di sebelah kanan.

Klik setiap ikon untuk menampilkan menu yang berbeda. Setelah selesai, klik _Explorer_ untuk kembali ke tempat semula.

Saat Anda mulai membuat atau memodifikasi kode, semua itu akan dilakukan di area terbesar di sebelah kanan. Anda juga akan menggunakan area ini untuk melihat kode yang sudah ada, yang akan Anda lakukan selanjutnya.

## Membuka Repositori GitHub

Hal pertama yang perlu Anda lakukan adalah membuka repositori GitHub. Ada beberapa cara untuk membuka repositori. Di bagian ini, Anda akan melihat dua cara berbeda untuk membuka repositori sehingga Anda dapat mulai bekerja pada perubahan.

### 1. Dengan Editor

Gunakan editor itu sendiri untuk membuka repositori jarak jauh. Jika Anda pergi ke [VSCode.dev](https://vscode.dev), Anda akan melihat tombol _"Open Remote Repository"_:

![Open remote repository](../../../../translated_images/open-remote-repository.bd9c2598b8949e7fc283cdfc8f4050c6205a7c7c6d3f78c4b135115d037d6fa2.id.png)

Anda juga dapat menggunakan _command palette_. _Command palette_ adalah kotak input tempat Anda dapat mengetikkan kata apa pun yang merupakan bagian dari perintah atau tindakan untuk menemukan perintah yang tepat untuk dijalankan. Gunakan menu di kiri atas, lalu pilih _View_, dan kemudian pilih _Command Palette_, atau gunakan pintasan keyboard berikut: Ctrl-Shift-P (di MacOS, Command-Shift-P).

![Palette Menu](../../../../translated_images/palette-menu.4946174e07f426226afcdad707d19b8d5150e41591c751c45b5dee213affef91.id.png)

Setelah menu terbuka, ketik _open remote repository_, lalu pilih opsi pertama. Beberapa repositori yang Anda ikuti atau yang baru saja Anda buka akan muncul. Anda juga dapat menggunakan URL GitHub lengkap untuk memilih salah satu. Gunakan URL berikut dan tempelkan ke dalam kotak:

```
https://github.com/microsoft/Web-Dev-For-Beginners
```

✅ Jika berhasil, Anda akan melihat semua file untuk repositori ini dimuat di editor teks.

### 2. Menggunakan URL

Anda juga dapat menggunakan URL langsung untuk memuat repositori. Sebagai contoh, URL lengkap untuk repositori saat ini adalah [https://github.com/microsoft/Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners), tetapi Anda dapat mengganti domain GitHub dengan `VSCode.dev/github` dan memuat repositori langsung. URL yang dihasilkan akan menjadi [https://vscode.dev/github/microsoft/Web-Dev-For-Beginners](https://vscode.dev/github/microsoft/Web-Dev-For-Beginners).

## Mengedit File

Setelah Anda membuka repositori di browser/vscode.dev, langkah berikutnya adalah membuat pembaruan atau perubahan pada proyek.

### 1. Membuat File Baru

Anda dapat membuat file di dalam folder yang sudah ada, atau membuatnya di direktori/folder utama. Untuk membuat file baru, buka lokasi/direktori tempat Anda ingin menyimpan file tersebut dan pilih ikon _'New file ...'_ di activity bar _(kiri)_, beri nama file tersebut, lalu tekan enter.

![Create a new file](../../../../translated_images/create-new-file.2814e609c2af9aeb6c6fd53156c503ac91c3d538f9cac63073b2dd4a7631f183.id.png)

### 2. Mengedit dan Menyimpan File di Repositori

Menggunakan vscode.dev sangat membantu jika Anda ingin membuat pembaruan cepat pada proyek Anda tanpa harus memuat perangkat lunak secara lokal.  
Untuk memperbarui kode Anda, klik ikon 'Explorer', yang juga terletak di activity bar untuk melihat file & folder di repositori.  
Pilih file untuk membukanya di area kode, lakukan perubahan, dan simpan.

![Edit a file](../../../../translated_images/edit-a-file.52c0ee665ef19f08119d62d63f395dfefddc0a4deb9268d73bfe791f52c5807a.id.png)

Setelah selesai memperbarui proyek Anda, pilih ikon _`source control`_ yang berisi semua perubahan baru yang telah Anda buat pada repositori Anda.

Untuk melihat perubahan yang Anda buat pada proyek, pilih file di folder `Changes` di _side bar_ yang diperluas. Ini akan membuka 'Working Tree' untuk Anda melihat perubahan yang Anda buat pada file secara visual. Warna merah menunjukkan penghapusan dari proyek, sedangkan warna hijau menunjukkan penambahan.

![View changes](../../../../translated_images/working-tree.c58eec08e6335c79cc708c0c220c0b7fea61514bd3c7fb7471905a864aceac7c.id.png)

Jika Anda puas dengan perubahan yang Anda buat, arahkan kursor ke folder `Changes` dan klik tombol `+` untuk _staging_ perubahan. _Staging_ berarti mempersiapkan perubahan Anda untuk dikomit ke GitHub.

Namun, jika Anda tidak nyaman dengan beberapa perubahan dan ingin membatalkannya, arahkan kursor ke folder `Changes` dan pilih ikon `undo`.

Kemudian, ketikkan `commit message` _(Deskripsi perubahan yang Anda buat pada proyek)_, klik ikon `check` untuk mengkomit dan mendorong perubahan Anda.

Setelah selesai bekerja pada proyek Anda, pilih ikon `hamburger menu` di kiri atas untuk kembali ke repositori di github.com.

![Stage & commit changes](../../../../8-code-editor/images/edit-vscode.dev.gif)

## Menggunakan Ekstensi

Menginstal ekstensi di VSCode memungkinkan Anda menambahkan fitur baru dan opsi lingkungan pengembangan yang disesuaikan pada editor Anda untuk meningkatkan alur kerja pengembangan Anda. Ekstensi ini juga membantu Anda menambahkan dukungan untuk berbagai bahasa pemrograman dan sering kali berupa ekstensi generik atau berbasis bahasa.

Untuk menjelajahi daftar semua ekstensi yang tersedia, klik ikon _`Extensions`_ di activity bar dan mulai ketik nama ekstensi di kolom teks berlabel _'Search Extensions in Marketplace'_.  
Anda akan melihat daftar ekstensi, masing-masing berisi **nama ekstensi, nama penerbit, deskripsi singkat, jumlah unduhan**, dan **peringkat bintang**.

![Extension details](../../../../translated_images/extension-details.9f8f1fd4e9eb2de5069ae413119eb8ee43172776383ebe2f7cf640e11df2e106.id.png)

Anda juga dapat melihat semua ekstensi yang telah diinstal sebelumnya dengan memperluas folder _`Installed`_, ekstensi populer yang digunakan oleh sebagian besar pengembang di folder _`Popular`_, dan ekstensi yang direkomendasikan untuk Anda baik oleh pengguna di ruang kerja yang sama atau berdasarkan file yang baru saja Anda buka di folder _`Recommended`_.

![View extensions](../../../../translated_images/extensions.eca0e0c7f59a10b5c88be7fe24b3e32cca6b6058b35a49026c3a9d80b1813b7c.id.png)

### 1. Menginstal Ekstensi

Untuk menginstal ekstensi, ketik nama ekstensi di kolom pencarian dan klik untuk melihat informasi tambahan tentang ekstensi tersebut di area kode setelah muncul di _side bar_ yang diperluas.

Anda dapat mengklik tombol _install biru_ di _side bar_ yang diperluas untuk menginstal atau menggunakan tombol install yang muncul di area kode setelah Anda memilih ekstensi untuk memuat informasi tambahan.

![Install extensions](../../../../8-code-editor/images/install-extension.gif)

### 2. Menyesuaikan Ekstensi

Setelah menginstal ekstensi, Anda mungkin perlu memodifikasi perilakunya dan menyesuaikannya berdasarkan preferensi Anda. Untuk melakukannya, pilih ikon Extensions, dan kali ini, ekstensi Anda akan muncul di folder _Installed_, klik ikon _**Gear**_ dan navigasikan ke _Extensions Setting_.

![Modify extension settings](../../../../translated_images/extension-settings.21c752ae4f4cdb78a867f140ccd0680e04619d0c44bb4afb26373e54b829d934.id.png)

### 3. Mengelola Ekstensi

Setelah menginstal dan menggunakan ekstensi Anda, vscode.dev menawarkan opsi untuk mengelola ekstensi Anda berdasarkan kebutuhan yang berbeda. Sebagai contoh, Anda dapat memilih untuk:

- **Disable:** _(Anda dapat menonaktifkan sementara ekstensi jika tidak membutuhkannya tetapi tidak ingin menghapusnya sepenuhnya)_

    Pilih ekstensi yang diinstal di _side bar_ yang diperluas > klik ikon Gear > pilih 'Disable' atau 'Disable (Workspace)' **ATAU** Buka ekstensi di area kode dan klik tombol biru Disable.

- **Uninstall:** Pilih ekstensi yang diinstal di _side bar_ yang diperluas > klik ikon Gear > pilih 'Uninstall' **ATAU** Buka ekstensi di area kode dan klik tombol biru Uninstall.

---

## Tugas

[Buat situs web resume menggunakan vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

## Tinjauan & Studi Mandiri

Baca lebih lanjut tentang [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) dan beberapa fitur lainnya.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.