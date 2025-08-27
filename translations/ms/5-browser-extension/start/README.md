<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-27T22:23:16+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "ms"
}
-->
# Sambungan Pelayar Carbon Trigger: Kod Permulaan

Menggunakan API C02 Signal daripada tmrow untuk menjejak penggunaan elektrik, bina sambungan pelayar supaya anda boleh mendapat peringatan terus di pelayar anda tentang seberapa berat penggunaan elektrik di kawasan anda. Menggunakan sambungan ini secara ad hoc akan membantu anda membuat keputusan berdasarkan maklumat ini.

![screenshot sambungan](../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.ms.png)

## Memulakan

Anda perlu memasang [npm](https://npmjs.com). Muat turun salinan kod ini ke dalam satu folder di komputer anda.

Pasang semua pakej yang diperlukan:

```
npm install
```

Bina sambungan menggunakan webpack

```
npm run build
```

Untuk memasang pada Edge, gunakan menu 'tiga titik' di sudut kanan atas pelayar untuk mencari panel Sambungan. Dari situ, pilih 'Load Unpacked' untuk memuatkan sambungan baru. Buka folder 'dist' apabila diminta, dan sambungan akan dimuatkan. Untuk menggunakannya, anda memerlukan kunci API untuk API CO2 Signal ([dapatkan satu di sini melalui emel](https://www.co2signal.com/) - masukkan emel anda di kotak pada halaman ini) dan [kod untuk kawasan anda](http://api.electricitymap.org/v3/zones) yang sepadan dengan [Peta Elektrik](https://www.electricitymap.org/map) (contohnya, di Boston, saya menggunakan 'US-NEISO').

![memasang](../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.ms.png)

Setelah kunci API dan kawasan dimasukkan ke dalam antara muka sambungan, titik berwarna di bar sambungan pelayar sepatutnya berubah untuk mencerminkan penggunaan tenaga di kawasan anda dan memberikan anda petunjuk tentang aktiviti berat tenaga yang sesuai untuk dilakukan. Konsep di sebalik sistem 'titik' ini diilhamkan oleh [sambungan Energy Lollipop](https://energylollipop.com/) untuk pelepasan di California.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.