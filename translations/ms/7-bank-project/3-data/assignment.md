<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-27T22:04:31+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "ms"
}
-->
# Refaktor dan komen kod anda

## Arahan

Apabila kod anda semakin berkembang, adalah penting untuk kerap melakukan refaktor bagi memastikan ia kekal mudah dibaca dan diselenggara dari masa ke masa. Tambahkan komen dan refaktor `app.js` anda untuk meningkatkan kualiti kod:

- Ekstrakkan pemalar, seperti URL asas API pelayan
- Faktorisasikan kod yang serupa: contohnya, anda boleh mencipta fungsi `sendRequest()` untuk mengumpulkan kod yang digunakan dalam kedua-dua `createAccount()` dan `getAccount()`
- Susun semula kod supaya lebih mudah dibaca, dan tambahkan komen

## Rubrik

| Kriteria | Cemerlang                                                                                                                                                     | Memadai                                                                                          | Perlu Penambahbaikan                                                                     |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
|          | Kod mempunyai komen, disusun dengan baik dalam bahagian-bahagian yang berbeza dan mudah dibaca. Pemalar telah diekstrak dan fungsi `sendRequest()` telah dicipta. | Kod bersih tetapi masih boleh diperbaiki dengan lebih banyak komen, ekstraksi pemalar atau faktorisasi. | Kod berselerak, tiada komen, pemalar tidak diekstrak dan kod tidak difaktorkan.         |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.