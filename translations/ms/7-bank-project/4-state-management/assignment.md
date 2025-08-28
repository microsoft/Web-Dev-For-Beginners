<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-27T22:12:20+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "ms"
}
-->
# Laksanakan dialog "Tambah transaksi"

## Arahan

Aplikasi bank kita masih kekurangan satu ciri penting: kebolehan untuk memasukkan transaksi baru. 
Menggunakan semua yang telah anda pelajari dalam empat pelajaran sebelumnya, laksanakan dialog "Tambah transaksi":

- Tambahkan butang "Tambah transaksi" di halaman papan pemuka
- Sama ada buat halaman baru dengan templat HTML, atau gunakan JavaScript untuk menunjukkan/menyembunyikan HTML dialog tanpa meninggalkan halaman papan pemuka (anda boleh menggunakan sifat [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) untuk itu, atau kelas CSS)
- Pastikan anda menguruskan [kebolehcapaian papan kekunci dan pembaca skrin](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) untuk dialog tersebut
- Laksanakan borang HTML untuk menerima data input
- Buat data JSON daripada data borang dan hantar ke API
- Kemas kini halaman papan pemuka dengan data baru

Lihat [spesifikasi API pelayan](../api/README.md) untuk melihat API mana yang perlu dipanggil dan apakah format JSON yang dijangkakan.

Berikut adalah contoh hasil selepas melengkapkan tugasan:

![Tangkapan skrin menunjukkan contoh dialog "Tambah transaksi"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.ms.png)

## Rubrik

| Kriteria | Cemerlang                                                                                         | Memadai                                                                                                                | Perlu Penambahbaikan                         |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | Penambahan transaksi dilaksanakan sepenuhnya mengikut semua amalan terbaik yang dilihat dalam pelajaran. | Penambahan transaksi dilaksanakan, tetapi tidak mengikut amalan terbaik yang dilihat dalam pelajaran, atau hanya berfungsi sebahagian. | Penambahan transaksi tidak berfungsi sama sekali. |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.