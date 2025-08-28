<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-27T22:04:24+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "id"
}
-->
# Refactor dan Beri Komentar pada Kode Anda

## Instruksi

Seiring bertambahnya ukuran kode Anda, penting untuk sering melakukan refactor agar kode tetap mudah dibaca dan dikelola dari waktu ke waktu. Tambahkan komentar dan refactor `app.js` Anda untuk meningkatkan kualitas kode:

- Ekstrak konstanta, seperti URL dasar API server
- Faktorkan kode yang serupa: misalnya, Anda dapat membuat fungsi `sendRequest()` untuk mengelompokkan kode yang digunakan di `createAccount()` dan `getAccount()`
- Atur ulang kode agar lebih mudah dibaca, dan tambahkan komentar

## Rubrik

| Kriteria | Luar Biasa                                                                                                                                                     | Memadai                                                                                          | Perlu Peningkatan                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Kode dikomentari, diatur dengan baik dalam berbagai bagian, dan mudah dibaca. Konstanta diekstrak dan fungsi `sendRequest()` yang terfaktorkan telah dibuat. | Kode bersih tetapi masih dapat ditingkatkan dengan lebih banyak komentar, ekstraksi konstanta, atau faktorisasi. | Kode berantakan, tidak dikomentari, konstanta tidak diekstrak, dan kode tidak terfaktorkan. |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.