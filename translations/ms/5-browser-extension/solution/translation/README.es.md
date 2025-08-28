<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-27T22:26:23+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "ms"
}
-->
# Sambungan Penyemak Imbas Carbon Trigger: Kod Lengkap

Menggunakan API isyarat CO2 daripada tmrow untuk menjejaki penggunaan elektrik, bina sambungan penyemak imbas supaya anda boleh mendapat peringatan terus dalam penyemak imbas anda tentang penggunaan elektrik di kawasan anda. Penggunaan sambungan ad hoc ini akan membantu anda membuat keputusan tentang aktiviti anda berdasarkan maklumat ini.

![extension screenshot](../../../../../translated_images/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.ms.png)

## Bermula

Anda perlu mempunyai [npm](https://npmjs.com) dipasang. Muat turun salinan kod ini ke dalam folder di komputer anda.

Pasang semua pakej yang diperlukan:

```
npm install
```

Bina sambungan menggunakan webpack:

```
npm run build
```

Untuk memasang di Edge, gunakan menu 'tiga titik' di sudut kanan atas penyemak imbas untuk mencari panel Sambungan. Dari situ, pilih 'Muatkan tanpa pembungkusan' untuk memuatkan sambungan baharu. Buka folder 'dist' apabila diminta dan sambungan akan dimuatkan. Untuk menggunakannya, anda memerlukan kunci API untuk API CO2 Signal ([dapatkan di sini melalui e-mel](https://www.co2signal.com/) - masukkan e-mel anda dalam kotak di halaman ini) dan [kod untuk kawasan anda](http://api.electricitymap.org/v3/zones) yang sepadan dengan [Peta Elektrik](https://www.electricitymap.org/map) (contohnya, di Boston, saya menggunakan 'US-NEISO').

![installing](../../../../../translated_images/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.ms.png)

Sebaik sahaja kunci API dan kawasan dimasukkan ke dalam antara muka sambungan, titik warna pada bar sambungan penyemak imbas sepatutnya berubah untuk mencerminkan penggunaan tenaga di kawasan anda dan memberikan petunjuk tentang aktiviti penggunaan tenaga tinggi yang sesuai untuk anda. Konsep di sebalik sistem "titik" ini diilhamkan oleh [sambungan Energy Lollipop](https://energylollipop.com/) untuk pelepasan di California.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.