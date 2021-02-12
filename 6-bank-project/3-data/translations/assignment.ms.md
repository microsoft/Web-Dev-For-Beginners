# Refaktor dan komen kod anda

## Arahan

Apabila pangkalan kod anda berkembang, penting untuk kerap mengubah kod anda agar tetap dapat dibaca dan dikekalkan dari masa ke masa. Tambahkan komen dan ubah semula `app.js` anda untuk meningkatkan kualiti kod:

- Ekstrak pemalar, seperti URL asas API pelayan
- Faktorkan kod yang serupa: misalnya, anda dapat membuat fungsi `sendRequest()` untuk mengumpulkan kembali kod yang digunakan dalam `createAccount()` dan `getAccount()`
- Susun semula kod untuk memudahkan membaca, dan menambah komen

## Rubrik

| Kriteria | Contoh                                                                                                                                                     | Mencukupi                                                                                          | Usaha Lagi                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Kod dikomentari, disusun dengan baik dalam pelbagai bahagian dan senang dibaca Pemalar diekstrak dan fungsi `sendRequest()` yang difaktorkan telah dibuat. | Kodnya bersih tetapi masih boleh diperbaiki dengan lebih banyak komen, pengekstrakan berterusan atau pemfaktoran. | Kod tidak kemas, tidak dikomentari, pemalar tidak diekstrak dan kod tidak difaktorkan. |