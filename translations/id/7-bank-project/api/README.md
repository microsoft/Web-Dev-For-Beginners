# Bank API

> Bank API dibuat dengan [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API ini sudah dibuat untuk Anda dan bukan bagian dari latihan.

Namun, jika Anda tertarik untuk belajar cara membuat API seperti ini, Anda dapat mengikuti seri video berikut: https://aka.ms/NodeBeginner (video 17 hingga 21 membahas API ini secara spesifik).

Anda juga dapat melihat tutorial interaktif ini: https://aka.ms/learn/express-api

## Menjalankan server

Pastikan Anda telah menginstal [Node.js](https://nodejs.org).

1. Git clone repo ini [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Buka terminal Anda dan navigasikan ke folder `Web-Dev-For-Beginners/7-bank-project/api`.
3. Jalankan `npm install` dan tunggu hingga semua paket terinstal (proses ini mungkin memakan waktu tergantung pada kualitas koneksi internet Anda).
4. Setelah instalasi selesai, jalankan `npm start` dan Anda siap untuk memulai.

Server akan mulai mendengarkan di port `5000`.
*Server ini akan berjalan bersamaan dengan terminal server aplikasi bank utama (mendengarkan di port `3000`), jangan tutup.*

> Catatan: semua entri disimpan di memori dan tidak dipersistensikan, jadi ketika server dihentikan semua data akan hilang.

## Detail API

Route                                        | Deskripsi
---------------------------------------------|------------------------------------
GET    /api/                                 | Mendapatkan informasi server
POST   /api/accounts/                        | Membuat akun, contoh: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Mendapatkan semua data untuk akun yang ditentukan
DELETE /api/accounts/:user                   | Menghapus akun yang ditentukan
POST   /api/accounts/:user/transactions      | Menambahkan transaksi, contoh: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Menghapus transaksi yang ditentukan

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.