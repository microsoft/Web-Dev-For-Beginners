<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-27T22:15:33+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "id"
}
-->
# Tingkatkan Routing

## Instruksi

Deklarasi rute saat ini hanya berisi ID template yang akan digunakan. Namun, ketika menampilkan halaman baru, terkadang diperlukan lebih dari itu. Mari kita tingkatkan implementasi routing kita dengan dua fitur tambahan:

- Berikan judul untuk setiap template dan perbarui judul jendela dengan judul baru ini saat template berubah.
- Tambahkan opsi untuk menjalankan kode setelah template berubah. Kita ingin mencetak `'Dashboard is shown'` di konsol pengembang setiap kali halaman dashboard ditampilkan.

## Rubrik

| Kriteria | Unggul                                                                                                                             | Memadai                                                                                                                                                                                   | Perlu Peningkatan                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|          | Kedua fitur diimplementasikan dan berfungsi. Penambahan judul dan kode juga berfungsi untuk rute baru yang ditambahkan dalam deklarasi `routes`. | Kedua fitur berfungsi, tetapi perilakunya di-hardcode dan tidak dapat dikonfigurasi melalui deklarasi `routes`. Menambahkan rute ketiga dengan penambahan judul dan kode tidak berfungsi atau hanya sebagian. | Salah satu fitur hilang atau tidak berfungsi dengan baik. |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.