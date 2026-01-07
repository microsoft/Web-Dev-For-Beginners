<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-24T14:34:07+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "ms"
}
-->
# Laksanakan Dialog "Tambah Transaksi"

## Gambaran Keseluruhan

Aplikasi perbankan anda kini mempunyai pengurusan keadaan dan penyimpanan data yang kukuh, tetapi ia masih kekurangan satu ciri penting yang diperlukan oleh aplikasi perbankan sebenar: keupayaan untuk pengguna menambah transaksi mereka sendiri. Dalam tugasan ini, anda akan melaksanakan dialog "Tambah Transaksi" yang lengkap dan berintegrasi dengan sistem pengurusan keadaan anda yang sedia ada.

Tugasan ini menggabungkan semua yang telah anda pelajari dalam empat pelajaran perbankan: templat HTML, pengendalian borang, integrasi API, dan pengurusan keadaan.

## Objektif Pembelajaran

Dengan menyelesaikan tugasan ini, anda akan:
- **Mencipta** antara muka dialog mesra pengguna untuk kemasukan data
- **Melaksanakan** reka bentuk borang yang boleh diakses dengan sokongan papan kekunci dan pembaca skrin
- **Mengintegrasikan** ciri baharu dengan sistem pengurusan keadaan anda yang sedia ada
- **Berlatih** komunikasi API dan pengendalian ralat
- **Mengaplikasikan** corak pembangunan web moden kepada ciri dunia sebenar

## Arahan

### Langkah 1: Butang Tambah Transaksi

**Cipta** butang "Tambah Transaksi" pada halaman papan pemuka anda yang mudah dicari dan diakses oleh pengguna.

**Keperluan:**
- **Letakkan** butang di lokasi yang logik pada papan pemuka
- **Gunakan** teks butang yang jelas dan berorientasikan tindakan
- **Gayakan** butang agar sepadan dengan reka bentuk UI anda yang sedia ada
- **Pastikan** butang boleh diakses dengan papan kekunci

### Langkah 2: Pelaksanaan Dialog

Pilih salah satu daripada dua pendekatan ini untuk melaksanakan dialog anda:

**Pilihan A: Halaman Berasingan**
- **Cipta** templat HTML baharu untuk borang transaksi
- **Tambah** laluan baharu ke sistem penghalaan anda
- **Laksanakan** navigasi ke dan dari halaman borang

**Pilihan B: Dialog Modal (Disyorkan)**
- **Gunakan** JavaScript untuk menunjukkan/menyembunyikan dialog tanpa meninggalkan papan pemuka
- **Laksanakan** menggunakan [sifat `hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) atau kelas CSS
- **Cipta** pengalaman pengguna yang lancar dengan pengurusan fokus yang betul

### Langkah 3: Pelaksanaan Kebolehaksesan

**Pastikan** dialog anda memenuhi [standard kebolehaksesan untuk dialog modal](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Navigasi Papan Kekunci:**
- **Sokong** kekunci Escape untuk menutup dialog
- **Perangkap** fokus dalam dialog apabila dibuka
- **Kembalikan** fokus ke butang pencetus apabila ditutup

**Sokongan Pembaca Skrin:**
- **Tambah** label dan peranan ARIA yang sesuai
- **Umumkan** pembukaan/penutupan dialog kepada pembaca skrin
- **Sediakan** label medan borang yang jelas dan mesej ralat

### Langkah 4: Penciptaan Borang

**Reka** borang HTML yang mengumpulkan data transaksi:

**Medan Diperlukan:**
- **Tarikh**: Bila transaksi berlaku
- **Deskripsi**: Untuk apa transaksi itu
- **Jumlah**: Nilai transaksi (positif untuk pendapatan, negatif untuk perbelanjaan)

**Ciri Borang:**
- **Sahkan** input pengguna sebelum penghantaran
- **Sediakan** mesej ralat yang jelas untuk data tidak sah
- **Sertakan** teks dan label petunjuk yang berguna
- **Gayakan** secara konsisten dengan reka bentuk anda yang sedia ada

### Langkah 5: Integrasi API

**Sambungkan** borang anda ke API backend:

**Langkah Pelaksanaan:**
- **Semak** [spesifikasi API pelayan](../api/README.md) untuk endpoint dan format data yang betul
- **Cipta** data JSON daripada input borang anda
- **Hantar** data ke API dengan pengendalian ralat yang sesuai
- **Paparkan** mesej kejayaan/kegagalan kepada pengguna
- **Tangani** ralat rangkaian dengan baik

### Langkah 6: Integrasi Pengurusan Keadaan

**Kemas kini** papan pemuka anda dengan transaksi baharu:

**Keperluan Integrasi:**
- **Segarkan** data akaun selepas penambahan transaksi berjaya
- **Kemas kini** paparan papan pemuka tanpa memerlukan muat semula halaman
- **Pastikan** transaksi baharu muncul dengan segera
- **Kekalkan** konsistensi keadaan sepanjang proses

## Spesifikasi Teknikal

**Butiran Endpoint API:**
Rujuk dokumentasi [API pelayan](../api/README.md) untuk:
- Format JSON yang diperlukan untuk data transaksi
- Kaedah HTTP dan URL endpoint
- Format respons yang dijangka
- Pengendalian respons ralat

**Hasil Dijangka:**
Selepas menyelesaikan tugasan ini, aplikasi perbankan anda sepatutnya mempunyai ciri "Tambah Transaksi" yang berfungsi sepenuhnya dan kelihatan profesional:

![Tangkap layar menunjukkan contoh dialog "Tambah transaksi"](../../../../translated_images/dialog.93bba104afeb79f1.ms.png)

## Ujian Pelaksanaan Anda

**Ujian Fungsional:**
1. **Sahkan** butang "Tambah Transaksi" jelas kelihatan dan boleh diakses
2. **Uji** bahawa dialog dibuka dan ditutup dengan betul
3. **Pastikan** pengesahan borang berfungsi untuk semua medan yang diperlukan
4. **Periksa** bahawa transaksi yang berjaya muncul dengan segera di papan pemuka
5. **Pastikan** pengendalian ralat berfungsi untuk data tidak sah dan isu rangkaian

**Ujian Kebolehaksesan:**
1. **Navigasi** melalui keseluruhan aliran menggunakan hanya papan kekunci
2. **Uji** dengan pembaca skrin untuk memastikan pengumuman yang betul
3. **Sahkan** pengurusan fokus berfungsi dengan betul
4. **Periksa** bahawa semua elemen borang mempunyai label yang sesuai

## Rubrik Penilaian

| Kriteria | Cemerlang | Memadai | Perlu Penambahbaikan |
| -------- | --------- | -------- | -------------------- |
| **Fungsi** | Ciri tambah transaksi berfungsi dengan sempurna dengan pengalaman pengguna yang sangat baik dan mengikuti semua amalan terbaik daripada pelajaran | Ciri tambah transaksi berfungsi dengan betul tetapi mungkin tidak mengikuti beberapa amalan terbaik atau mempunyai isu kebolehgunaan kecil | Ciri tambah transaksi sebahagiannya berfungsi atau mempunyai masalah kebolehgunaan yang ketara |
| **Kualiti Kod** | Kod tersusun dengan baik, mengikuti corak yang ditetapkan, termasuk pengendalian ralat yang betul, dan berintegrasi dengan lancar dengan pengurusan keadaan sedia ada | Kod berfungsi tetapi mungkin mempunyai beberapa isu organisasi atau corak yang tidak konsisten dengan kod sedia ada | Kod mempunyai isu struktur yang ketara atau tidak berintegrasi dengan baik dengan corak sedia ada |
| **Kebolehaksesan** | Sokongan navigasi papan kekunci penuh, keserasian pembaca skrin, dan mengikuti garis panduan WCAG dengan pengurusan fokus yang sangat baik | Ciri kebolehaksesan asas dilaksanakan tetapi mungkin kehilangan beberapa navigasi papan kekunci atau ciri pembaca skrin | Pertimbangan kebolehaksesan terhad atau tidak dilaksanakan |
| **Pengalaman Pengguna** | Antara muka yang intuitif, kemas dengan maklum balas yang jelas, interaksi yang lancar, dan penampilan profesional | Pengalaman pengguna yang baik dengan kawasan kecil untuk penambahbaikan dalam maklum balas atau reka bentuk visual | Pengalaman pengguna yang lemah dengan antara muka yang mengelirukan atau kekurangan maklum balas pengguna |

## Cabaran Tambahan (Pilihan)

Setelah anda menyelesaikan keperluan asas, pertimbangkan penambahbaikan ini:

**Ciri Dipertingkatkan:**
- **Tambah** kategori transaksi (makanan, pengangkutan, hiburan, dll.)
- **Laksanakan** pengesahan input dengan maklum balas masa nyata
- **Cipta** pintasan papan kekunci untuk pengguna mahir
- **Tambah** keupayaan penyuntingan dan penghapusan transaksi

**Integrasi Lanjutan:**
- **Laksanakan** fungsi undo untuk transaksi yang baru ditambah
- **Tambah** import transaksi secara pukal daripada fail CSV
- **Cipta** carian dan penapisan transaksi
- **Laksanakan** fungsi eksport data

Ciri-ciri pilihan ini akan membantu anda berlatih konsep pembangunan web yang lebih maju dan mencipta aplikasi perbankan yang lebih lengkap!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.