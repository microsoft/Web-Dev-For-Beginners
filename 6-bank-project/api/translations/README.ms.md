# Bank API

> > API Bank dibina dengan [Node.js](https://nodejs.org) + [Express](https://expressjs.com/).

API sudah dibina untuk anda dan bukan sebahagian daripada latihan.

Walau bagaimanapun, jika anda berminat untuk belajar membuat API seperti ini, anda boleh mengikuti siri video ini: https://aka.ms/NodeBeginner (video 17 hingga 21 merangkumi API tepat ini)

Anda juga boleh melihat tutorial interaktif ini: https://aka.ms/learn/express-api

## Menjalankan pelayan

Pastikan anda telah memasang [Node.js](https://nodejs.org).

1. Git klon repo ini.
2. Buka terminal dalam folder `api`, kemudian jalankan` npm install`.
3. Jalankan `npm start`.

Pelayan harus mula mendengar di port `5000`.

> Catatan: semua entri disimpan dalam memori dan tidak berterusan, jadi apabila pelayan dihentikan semua data akan hilang.

## Perincian API

Route                                        | Description
---------------------------------------------|------------------------------------
GET    /api/                                 | Dapat server info
POST   /api/accounts/                        | Daftar akaun, ex: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Dapatkan semua data untuk akaun yang ditentukan
DELETE /api/accounts/:user                   | Keluarkan akaun yang ditentukan
POST   /api/accounts/:user/transactions      | Tambahkan transaksi, ex: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Keluarkan transaksi yang ditentukan