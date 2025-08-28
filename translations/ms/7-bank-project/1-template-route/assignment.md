<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-27T22:15:39+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "ms"
}
-->
# Meningkatkan Penghalaan

## Arahan

Deklarasi laluan pada masa ini hanya mengandungi ID templat untuk digunakan. Tetapi apabila memaparkan halaman baharu, kadangkala lebih banyak perkara diperlukan. Mari kita tingkatkan pelaksanaan penghalaan kita dengan dua ciri tambahan:

- Berikan tajuk kepada setiap templat dan kemas kini tajuk tetingkap dengan tajuk baharu ini apabila templat berubah.
- Tambahkan pilihan untuk menjalankan kod selepas templat berubah. Kita mahu mencetak `'Dashboard is shown'` dalam konsol pembangun setiap kali halaman papan pemuka dipaparkan.

## Rubrik

| Kriteria | Cemerlang                                                                                                                          | Memadai                                                                                                                                                                                  | Perlu Penambahbaikan                                   |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|          | Kedua-dua ciri dilaksanakan dan berfungsi. Penambahan tajuk dan kod juga berfungsi untuk laluan baharu yang ditambah dalam deklarasi `routes`. | Kedua-dua ciri berfungsi, tetapi tingkah laku adalah kod keras dan tidak boleh dikonfigurasi melalui deklarasi `routes`. Menambah laluan ketiga dengan penambahan tajuk dan kod tidak berfungsi atau berfungsi sebahagian. | Salah satu ciri hilang atau tidak berfungsi dengan baik. |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.