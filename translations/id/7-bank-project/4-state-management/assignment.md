<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-27T22:12:13+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "id"
}
-->
# Implementasikan dialog "Tambah transaksi"

## Instruksi

Aplikasi bank kita masih kekurangan satu fitur penting: kemampuan untuk memasukkan transaksi baru. 
Dengan menggunakan semua yang telah Anda pelajari dalam empat pelajaran sebelumnya, implementasikan dialog "Tambah transaksi":

- Tambahkan tombol "Tambah transaksi" di halaman dashboard
- Anda dapat membuat halaman baru dengan template HTML, atau menggunakan JavaScript untuk menampilkan/menyembunyikan HTML dialog tanpa meninggalkan halaman dashboard (Anda dapat menggunakan properti [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) untuk itu, atau kelas CSS)
- Pastikan Anda menangani [aksesibilitas keyboard dan pembaca layar](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) untuk dialog tersebut
- Implementasikan formulir HTML untuk menerima data input
- Buat data JSON dari data formulir dan kirimkan ke API
- Perbarui halaman dashboard dengan data baru

Lihat [spesifikasi API server](../api/README.md) untuk mengetahui API mana yang perlu dipanggil dan format JSON yang diharapkan.

Berikut adalah contoh hasil setelah menyelesaikan tugas:

![Screenshot menunjukkan contoh dialog "Tambah transaksi"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.id.png)

## Rubrik

| Kriteria | Unggul                                                                                           | Memadai                                                                                                                | Perlu Peningkatan                           |
| -------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | Penambahan transaksi diimplementasikan sepenuhnya mengikuti semua praktik terbaik yang telah dipelajari. | Penambahan transaksi diimplementasikan, tetapi tidak sepenuhnya mengikuti praktik terbaik yang telah dipelajari, atau hanya sebagian berfungsi. | Penambahan transaksi tidak berfungsi sama sekali. |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.