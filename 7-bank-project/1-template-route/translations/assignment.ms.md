# Tingkatkan penghalaan

## Arahan

Deklarasi laluan hanya mengandungi ID templat yang akan digunakan. Tetapi ketika memaparkan halaman baru, kadang-kadang diperlukan lebih banyak lagi. Mari tingkatkan pelaksanaan penghalaan kami dengan dua ciri tambahan:

- Berikan tajuk untuk setiap templat dan kemas kini tajuk tetingkap dengan tajuk baru ini apabila templat berubah.
- Tambahkan pilihan untuk menjalankan beberapa kod setelah templat berubah. Kami ingin mencetak `"Papan Pemuka ditunjukkan"` di konsol pembangun setiap kali halaman papan pemuka dipaparkan.

## Rubrik

| Kriteria | Contoh                                                                                                                          | Mencukupi                                                                                                                                                                                 | Usaha Lagi                                     |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Kedua-dua ciri tersebut dilaksanakan dan berfungsi. Penambahan tajuk dan kod juga berfungsi untuk laluan baru yang ditambahkan dalam deklarasi `route` | Kedua-dua ciri berfungsi, tetapi tingkah laku itu dikodkan keras dan tidak dapat dikonfigurasi melalui deklarasi `route`. Menambah laluan ketiga dengan penambahan tajuk dan kod tidak berfungsi atau berfungsi secara separa. | Salah satu ciri hilang atau tidak berfungsi dengan baik. |