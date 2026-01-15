<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-27T22:25:10+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "ms"
}
-->
# Sambungan Penyemak Imbas Carbon Trigger: Kod untuk Bermula

Anda akan menggunakan API Signal CO2 daripada tmrow untuk memantau penggunaan elektrik bagi mencipta sambungan penyemak imbas supaya anda boleh mendapatkan peringatan terus dalam penyemak imbas anda tentang betapa beratnya penggunaan elektrik di kawasan anda. Penggunaan sambungan ini secara ad hoc akan membantu menilai aktiviti anda berdasarkan maklumat ini.

![paparan sambungan](../../../../../translated_images/ms/extension-screenshot.0e7f5bfa110e92e3.png)

## Untuk Bermula

Pastikan [npm](https://npmjs.com) telah dipasang. Muat turun salinan kod ini ke dalam folder di komputer anda.

Pasang semua pakej yang diperlukan:

```
npm install
```

Cipta sambungan menggunakan webpack:

```
npm run build
```

Untuk memasang pada Edge, gunakan menu "tiga titik" di sudut kanan atas penyemak imbas untuk mencari panel Sambungan. Jika belum diaktifkan, aktifkan Mod Pembangun (di bahagian bawah kiri). Pilih "Muatkan tanpa mampatan" untuk memuatkan sambungan baharu. Buka folder "dist" pada prompt dan sambungan akan dimuatkan. Untuk menggunakannya, anda memerlukan kunci API untuk API CO2 Signal (anda boleh [memperolehnya melalui e-mel di sini](https://www.co2signal.com/) - masukkan e-mel anda dalam kotak di halaman ini) dan [kod untuk kawasan anda](http://api.electricitymap.org/v3/zones) yang sepadan dengan [peta elektrik](https://www.electricitymap.org/map) (contohnya, di Boston, "US-NEISO").

![pemasangan](../../../../../translated_images/ms/install-on-edge.78634f02842c4828.png)

Setelah kunci API dan kawasan dimasukkan ke dalam antara muka sambungan, titik berwarna pada bar sambungan penyemak imbas sepatutnya berubah untuk mencerminkan penggunaan tenaga kawasan tersebut dan memberikan petunjuk tentang aktiviti penggunaan tenaga tinggi yang sesuai untuk dilakukan. Konsep di sebalik sistem "titik" ini telah diilhamkan oleh [sambungan Energy Lollipop](https://energylollipop.com/) untuk pelepasan di California.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.