<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-24T14:36:18+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "ms"
}
-->
# Meningkatkan Penghalaan

## Arahan

Sekarang anda telah membina sistem penghalaan asas, tiba masanya untuk meningkatkannya dengan ciri profesional yang memperbaiki pengalaman pengguna dan menyediakan alat pembangun yang lebih baik. Aplikasi dunia sebenar memerlukan lebih daripada sekadar pertukaran templat – ia memerlukan tajuk halaman dinamik, cangkuk kitaran hayat, dan seni bina yang boleh diperluaskan.

Dalam tugasan ini, anda akan memperluaskan pelaksanaan penghalaan anda dengan dua ciri penting yang biasa ditemui dalam aplikasi web pengeluaran. Penambahbaikan ini akan menjadikan aplikasi perbankan anda kelihatan lebih profesional dan menyediakan asas untuk fungsi masa depan.

Deklarasi laluan pada masa ini hanya mengandungi ID templat untuk digunakan. Tetapi apabila memaparkan halaman baru, kadangkala lebih banyak diperlukan. Mari kita tingkatkan pelaksanaan penghalaan kita dengan dua ciri tambahan:

### Ciri 1: Tajuk Halaman Dinamik
**Objektif:** Berikan tajuk kepada setiap templat dan kemas kini tajuk tetingkap dengan tajuk baru ini apabila templat berubah.

**Mengapa ini penting:**
- **Memperbaiki** pengalaman pengguna dengan memaparkan tajuk tab pelayar yang deskriptif
- **Meningkatkan** kebolehaksesan untuk pembaca skrin dan teknologi bantuan  
- **Menyediakan** konteks penanda buku dan sejarah pelayar yang lebih baik
- **Mengikuti** amalan terbaik pembangunan web profesional

**Pendekatan pelaksanaan:**
- **Perluaskan** objek laluan untuk memasukkan maklumat tajuk bagi setiap laluan
- **Ubah** fungsi `updateRoute()` untuk mengemas kini `document.title` secara dinamik
- **Uji** bahawa tajuk berubah dengan betul apabila menavigasi antara skrin

### Ciri 2: Cangkuk Kitaran Hayat Laluan  
**Objektif:** Tambahkan pilihan untuk menjalankan kod selepas templat berubah. Kita mahu mencetak `'Dashboard is shown'` dalam konsol pembangun setiap kali halaman papan pemuka dipaparkan.

**Mengapa ini penting:**
- **Membolehkan** pelaksanaan logik tersuai apabila laluan tertentu dimuatkan
- **Menyediakan** cangkuk untuk analitik, log, atau kod inisialisasi
- **Mewujudkan** asas untuk tingkah laku laluan yang lebih kompleks
- **Menunjukkan** corak pemerhati dalam pembangunan web

**Pendekatan pelaksanaan:**
- **Tambahkan** sifat fungsi panggil balik pilihan kepada konfigurasi laluan
- **Laksanakan** fungsi panggil balik (jika ada) selepas rendering templat selesai
- **Pastikan** ciri ini berfungsi untuk mana-mana laluan dengan panggil balik yang ditentukan
- **Uji** bahawa mesej konsol muncul apabila melawat papan pemuka

## Rubrik

| Kriteria | Cemerlang                                                                                                                          | Memadai                                                                                                                                                                                  | Perlu Penambahbaikan                                   |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Kedua-dua ciri dilaksanakan dan berfungsi. Tajuk dan penambahan kod juga berfungsi untuk laluan baru yang ditambah dalam deklarasi `routes`. | Kedua-dua ciri berfungsi, tetapi tingkah laku adalah kod keras dan tidak boleh dikonfigurasi melalui deklarasi `routes`. Menambah laluan ketiga dengan tajuk dan penambahan kod tidak berfungsi atau berfungsi sebahagian. | Salah satu ciri hilang atau tidak berfungsi dengan betul. |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.