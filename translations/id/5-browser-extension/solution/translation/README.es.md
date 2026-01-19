<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-27T22:26:13+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "id"
}
-->
# Ekstensi Peramban Carbon Trigger: Kode Lengkap

Dengan menggunakan API sinyal CO2 dari tmrow untuk melacak penggunaan listrik, buatlah sebuah ekstensi peramban agar Anda dapat memiliki pengingat langsung di peramban Anda tentang konsumsi listrik di wilayah Anda. Penggunaan ekstensi ad hoc ini akan membantu Anda membuat keputusan tentang aktivitas Anda berdasarkan informasi tersebut.

![tangkapan layar ekstensi](../../../../../translated_images/id/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Memulai

Anda perlu memiliki [npm](https://npmjs.com) yang sudah terinstal. Unduh salinan kode ini ke dalam sebuah folder di komputer Anda.

Instal semua paket yang diperlukan:

```
npm install
```

Bangun ekstensi menggunakan webpack:

```
npm run build
```

Untuk menginstal di Edge, gunakan menu 'tiga titik' di pojok kanan atas peramban untuk menemukan panel Ekstensi. Dari sana, pilih 'Muat tanpa dikemas' untuk memuat ekstensi baru. Buka folder 'dist' saat diminta, dan ekstensi akan dimuat. Untuk menggunakannya, Anda memerlukan kunci API untuk API CO2 Signal ([dapatkan di sini melalui email](https://www.co2signal.com/) - masukkan email Anda di kotak pada halaman ini) dan [kode untuk wilayah Anda](http://api.electricitymap.org/v3/zones) yang sesuai dengan [Peta Listrik](https://www.electricitymap.org/map) (di Boston, misalnya, saya menggunakan 'US-NEISO').

![menginstal](../../../../../translated_images/id/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Setelah kunci API dan wilayah dimasukkan di antarmuka ekstensi, titik warna di bilah ekstensi peramban Anda akan berubah untuk mencerminkan penggunaan energi di wilayah Anda dan memberikan indikator tentang aktivitas dengan konsumsi energi tinggi yang sesuai untuk Anda. Konsep di balik sistem "titik" ini saya dapatkan dari [ekstensi Energy Lollipop](https://energylollipop.com/) untuk emisi di California.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.