# Bina Permainan Contoh

## Gambaran Tugasan

Sekarang anda telah menguasai syarat tamat permainan dan fungsi mula semula dalam permainan angkasa anda, tiba masanya untuk menerapkan konsep ini kepada pengalaman permainan yang baru. Anda akan mereka bentuk dan membina permainan anda sendiri yang menunjukkan pelbagai corak syarat tamat dan mekanik mula semula.

Tugasan ini mencabar anda untuk berfikir secara kreatif tentang reka bentuk permainan sambil mempraktikkan kemahiran teknikal yang telah anda pelajari. Anda akan meneroka pelbagai senario kemenangan dan kekalahan, melaksanakan perkembangan pemain, dan mencipta pengalaman mula semula yang menarik.

## Keperluan Projek

### Ciri-Ciri Utama Permainan

Permainan anda mesti merangkumi elemen penting berikut:

**Kepelbagaian Syarat Tamat**: Laksanakan sekurang-kurangnya dua cara berbeza permainan boleh tamat:
- **Kemenangan berdasarkan mata**: Pemain mencapai skor sasaran atau mengumpul item tertentu
- **Kekalahan berdasarkan nyawa**: Pemain kehilangan semua nyawa atau mata kesihatan yang tersedia
- **Penyelesaian objektif**: Semua musuh dikalahkan, item tertentu dikumpul, atau matlamat dicapai
- **Berdasarkan masa**: Permainan tamat selepas tempoh tertentu atau kiraan masa mencapai sifar

**Fungsi Mula Semula**: 
- **Kosongkan keadaan permainan**: Hapuskan semua objek permainan sebelumnya dan tetapkan semula pembolehubah
- **Inisialisasi semula sistem**: Mulakan semula dengan statistik pemain, musuh, dan objektif yang baru
- **Kawalan mesra pengguna**: Berikan arahan yang jelas untuk memulakan semula permainan

**Maklum Balas Pemain**:
- **Mesej kemenangan**: Raikan pencapaian pemain dengan maklum balas positif
- **Mesej kekalahan**: Berikan mesej yang menggalakkan untuk mencuba semula
- **Penunjuk kemajuan**: Tunjukkan skor semasa, nyawa, atau status objektif

### Idea Permainan dan Inspirasi

Pilih salah satu konsep permainan ini atau cipta sendiri:

#### 1. Permainan Pengembaraan Konsol
Cipta pengembaraan berasaskan teks dengan mekanik pertempuran:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Ciri utama untuk dilaksanakan:**
- **Pertempuran berasaskan giliran** dengan pilihan serangan yang berbeza
- **Mata kesihatan** untuk pemain dan musuh
- **Sistem inventori** untuk mengumpul syiling atau item
- **Pelbagai jenis musuh** dengan tahap kesukaran yang berbeza
- **Syarat kemenangan** apabila semua musuh dikalahkan

#### 2. Permainan Pengumpulan
- **Objektif**: Kumpul item tertentu sambil mengelak halangan
- **Syarat tamat**: Capai jumlah pengumpulan sasaran atau kehilangan semua nyawa
- **Perkembangan**: Item menjadi lebih sukar untuk dicapai apabila permainan berterusan

#### 3. Permainan Teka-Teki
- **Objektif**: Selesaikan teka-teki yang semakin sukar
- **Syarat tamat**: Lengkapkan semua tahap atau kehabisan langkah/masa
- **Mula semula**: Tetapkan semula ke tahap pertama dengan kemajuan yang dikosongkan

#### 4. Permainan Pertahanan
- **Objektif**: Lindungi pangkalan anda daripada gelombang musuh
- **Syarat tamat**: Bertahan semua gelombang (kemenangan) atau pangkalan dimusnahkan (kekalahan)
- **Perkembangan**: Gelombang musuh meningkat dalam kesukaran dan jumlah

## Garis Panduan Pelaksanaan

### Memulakan

1. **Rancang reka bentuk permainan anda**:
   - Lakarkan gelung permainan asas
   - Tentukan syarat tamat anda dengan jelas
   - Kenal pasti data yang perlu ditetapkan semula semasa mula semula

2. **Tetapkan struktur projek anda**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Cipta gelung permainan utama anda**:
   - Inisialisasi keadaan permainan
   - Kendalikan input pengguna
   - Kemas kini logik permainan
   - Periksa syarat tamat
   - Paparkan keadaan semasa

### Keperluan Teknikal

**Gunakan JavaScript Moden**: 
- Gunakan `const` dan `let` untuk deklarasi pembolehubah
- Gunakan fungsi anak panah di mana sesuai
- Laksanakan ciri ES6+ seperti template literals dan destructuring

**Arkitektur Berasaskan Acara**:
- Cipta pengendali acara untuk interaksi pengguna
- Laksanakan perubahan keadaan permainan melalui acara
- Gunakan pendengar acara untuk fungsi mula semula

**Amalan Kod Bersih**:
- Tulis fungsi dengan tanggungjawab tunggal
- Gunakan nama pembolehubah dan fungsi yang deskriptif
- Tambahkan komen yang menerangkan logik dan peraturan permainan
- Susun kod ke dalam bahagian yang logik

## Keperluan Penyerahan

### Hasil Kerja

1. **Fail permainan lengkap**: Semua fail HTML, CSS, dan JavaScript yang diperlukan untuk menjalankan permainan anda
2. **README.md**: Dokumentasi yang menerangkan:
   - Cara bermain permainan anda
   - Syarat tamat yang anda laksanakan
   - Arahan untuk mula semula
   - Sebarang ciri atau mekanik khas
3. **Komen kod**: Penjelasan yang jelas tentang logik dan algoritma permainan anda

### Senarai Semak Ujian

Sebelum menyerahkan, pastikan permainan anda:

- [ ] **Berjalan tanpa ralat** dalam konsol pelayar
- [ ] **Melaksanakan pelbagai syarat tamat** seperti yang ditentukan
- [ ] **Mula semula dengan betul** dengan tetapan semula keadaan yang bersih
- [ ] **Memberikan maklum balas yang jelas** kepada pemain tentang status permainan
- [ ] **Menggunakan sintaks JavaScript moden** dan amalan terbaik
- [ ] **Termasuk dokumentasi yang komprehensif** dalam README.md

## Rubrik Penilaian

| Kriteria | Cemerlang (4) | Mahir (3) | Sedang Berkembang (2) | Permulaan (1) |
|----------|---------------|----------------|----------------|--------------|
| **Fungsi Permainan** | Permainan lengkap dengan pelbagai syarat tamat, mula semula yang lancar, dan pengalaman permainan yang kemas | Permainan penuh dengan syarat tamat asas dan mekanisme mula semula yang berfungsi | Permainan separa dengan beberapa syarat tamat dilaksanakan, mula semula mungkin mempunyai isu kecil | Permainan tidak lengkap dengan fungsi terhad dan pepijat yang ketara |
| **Kualiti Kod** | Kod yang bersih, teratur menggunakan amalan JavaScript moden, komen yang komprehensif, dan struktur yang sangat baik | Organisasi kod yang baik dengan sintaks moden, komen yang mencukupi, dan struktur yang jelas | Organisasi kod asas dengan beberapa amalan moden, komen yang minimum | Organisasi kod yang lemah, sintaks yang ketinggalan zaman, kurang komen dan struktur |
| **Pengalaman Pengguna** | Permainan intuitif dengan arahan yang jelas, maklum balas yang sangat baik, dan pengalaman tamat/mula semula yang menarik | Permainan yang baik dengan arahan dan maklum balas yang mencukupi, tamat/mula semula yang berfungsi | Permainan asas dengan arahan minimum, maklum balas terhad tentang keadaan permainan | Permainan yang mengelirukan dengan arahan yang tidak jelas dan maklum balas pengguna yang lemah |
| **Pelaksanaan Teknikal** | Menunjukkan penguasaan konsep pembangunan permainan, pengendalian acara, dan pengurusan keadaan | Menunjukkan pemahaman yang kukuh tentang konsep permainan dengan pelaksanaan yang baik | Pemahaman asas dengan pelaksanaan yang boleh diterima | Pemahaman terhad dengan pelaksanaan yang lemah |
| **Dokumentasi** | README yang komprehensif dengan arahan yang jelas, kod yang didokumentasikan dengan baik, dan bukti ujian yang menyeluruh | Dokumentasi yang baik dengan arahan yang jelas dan komen kod yang mencukupi | Dokumentasi asas dengan arahan minimum | Dokumentasi yang lemah atau tiada |

### Skala Penilaian
- **Cemerlang (16-20 mata)**: Melebihi jangkaan dengan ciri kreatif dan pelaksanaan yang kemas
- **Mahir (12-15 mata)**: Memenuhi semua keperluan dengan pelaksanaan yang kukuh
- **Sedang Berkembang (8-11 mata)**: Memenuhi kebanyakan keperluan dengan isu kecil
- **Permulaan (4-7 mata)**: Memenuhi beberapa keperluan tetapi memerlukan penambahbaikan yang ketara

## Sumber Pembelajaran Tambahan

- [Panduan Pembangunan Permainan MDN](https://developer.mozilla.org/en-US/docs/Games)
- [Tutorial Pembangunan Permainan JavaScript](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Dokumentasi API Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Prinsip Reka Bentuk Permainan](https://www.gamasutra.com/blogs/)

> 💡 **Tip Profesional**: Mulakan dengan mudah dan tambahkan ciri secara beransur-ansur. Permainan yang mudah tetapi kemas lebih baik daripada permainan kompleks dengan pepijat!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.