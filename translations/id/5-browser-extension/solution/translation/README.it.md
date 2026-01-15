<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-27T22:25:01+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "id"
}
-->
# Ekstensi Browser Carbon Trigger: Kode untuk Memulai

Kita akan menggunakan API Signal CO2 dari tmrow untuk memantau penggunaan listrik dan membuat ekstensi browser agar dapat memberikan pengingat langsung di browser tentang seberapa besar penggunaan listrik di wilayah kita. Penggunaan ekstensi ini akan membantu mengevaluasi aktivitas kita berdasarkan informasi tersebut.

![tangkapan layar ekstensi](../../../../../translated_images/id/extension-screenshot.0e7f5bfa110e92e3.png)

## Memulai

Pastikan [npm](https://npmjs.com) sudah terinstal. Unduh salinan kode ini ke folder di komputer Anda.

Instal semua paket yang diperlukan:

```
npm install
```

Buat ekstensi menggunakan webpack:

```
npm run build
```

Untuk menginstal di Edge, gunakan menu "tiga titik" di sudut kanan atas browser untuk menemukan panel Ekstensi. Jika belum aktif, aktifkan Mode Pengembang (di bagian kiri bawah). Pilih "Muat tanpa kompresi" untuk memuat ekstensi baru. Buka folder "dist" saat diminta, dan ekstensi akan dimuat. Untuk menggunakannya, Anda memerlukan kunci API untuk API CO2 Signal (Anda dapat [memperolehnya melalui email di sini](https://www.co2signal.com/) - masukkan email Anda di kotak pada halaman tersebut) dan [kode untuk wilayah Anda](http://api.electricitymap.org/v3/zones) yang sesuai dengan [peta listrik](https://www.electricitymap.org/map) (misalnya, di Boston, "US-NEISO").

![instalasi](../../../../../translated_images/id/install-on-edge.78634f02842c4828.png)

Setelah kunci API dan wilayah dimasukkan ke dalam antarmuka ekstensi, titik berwarna di bilah ekstensi browser seharusnya berubah untuk mencerminkan penggunaan energi di wilayah tersebut dan memberikan petunjuk tentang aktivitas berenergi tinggi yang sesuai untuk dilakukan. Konsep di balik sistem "titik" ini terinspirasi oleh [ekstensi Energy Lollipop](https://energylollipop.com/) untuk emisi di California.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.