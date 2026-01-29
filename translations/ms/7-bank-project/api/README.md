# Bank API

> Bank API dibina dengan [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API ini telah sedia dibina untuk anda dan bukan sebahagian daripada latihan.

Namun, jika anda berminat untuk belajar cara membina API seperti ini, anda boleh mengikuti siri video ini: https://aka.ms/NodeBeginner (video 17 hingga 21 merangkumi API ini secara khusus).

Anda juga boleh melihat tutorial interaktif ini: https://aka.ms/learn/express-api

## Menjalankan pelayan

Pastikan anda telah memasang [Node.js](https://nodejs.org).

1. Git clone repo ini [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Buka terminal anda dan navigasi ke folder `Web-Dev-For-Beginners/7-bank-project/api`.
3. Jalankan `npm install` dan tunggu sehingga semua pakej dipasang (mungkin mengambil masa bergantung pada kualiti sambungan internet anda).
4. Apabila pemasangan selesai, jalankan `npm start` dan anda sudah bersedia.

Pelayan sepatutnya mula mendengar pada port `5000`.
*Pelayan ini akan berjalan bersama-sama dengan terminal pelayan aplikasi bank utama (mendengar pada port `3000`), jangan tutupnya.*

> Nota: semua entri disimpan dalam memori dan tidak disimpan secara kekal, jadi apabila pelayan dihentikan semua data akan hilang.

## Butiran API

Route                                        | Penerangan
---------------------------------------------|------------------------------------
GET    /api/                                 | Dapatkan maklumat pelayan
POST   /api/accounts/                        | Cipta akaun, contoh: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Dapatkan semua data untuk akaun yang ditentukan
DELETE /api/accounts/:user                   | Hapuskan akaun yang ditentukan
POST   /api/accounts/:user/transactions      | Tambah transaksi, contoh: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Hapuskan transaksi yang ditentukan

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.