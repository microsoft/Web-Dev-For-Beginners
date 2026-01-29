# Ekstensi Browser Carbon Trigger: Kode Lengkap

Dengan menggunakan API C02 Signal dari tmrow untuk memantau konsumsi listrik, buatlah ekstensi browser sehingga Anda dapat menerima pengingat langsung di browser Anda tentang konsumsi listrik di wilayah Anda. Penggunaan ekstensi ini akan membantu Anda membuat keputusan berdasarkan informasi tersebut.

![tangkapan layar ekstensi](../../../../../translated_images/id/extension-screenshot.0e7f5bfa110e92e3.webp)

## Memulai

Anda perlu memiliki [npm](https://npmjs.com) yang terinstal. Unduh salinan kode ini ke dalam folder di komputer Anda.

Instal semua paket yang diperlukan:

```
npm install
```

Bangun ekstensi menggunakan webpack:

```
npm run build
```

Untuk menginstal di Edge, gunakan menu 'tiga titik' di sudut kanan atas browser untuk menemukan panel Ekstensi. Dari sana, pilih 'Muat ekstensi yang tidak dikompresi' untuk memuat ekstensi baru. Buka folder 'dist' saat diminta, dan ekstensi akan dimuat. Untuk menggunakannya, Anda memerlukan kunci API untuk API CO2 Signal ([dapatkan di sini melalui email](https://www.co2signal.com/) - masukkan email Anda di kotak pada halaman tersebut) dan [kode untuk wilayah Anda](http://api.electricitymap.org/v3/zones) yang sesuai dengan [Peta Listrik](https://www.electricitymap.org/map) (di Boston, misalnya, saya menggunakan 'US-NEISO').

![instalasi](../../../../../translated_images/id/install-on-edge.78634f02842c4828.webp)

Setelah kunci API dan wilayah dimasukkan ke dalam antarmuka ekstensi, titik berwarna di bilah ekstensi browser akan berubah untuk mencerminkan konsumsi energi di wilayah Anda dan memberikan indikator tentang aktivitas yang sesuai untuk dilakukan berdasarkan konsumsi energi tersebut. Konsep di balik sistem 'titik' ini terinspirasi oleh [ekstensi Energy Lollipop](https://energylollipop.com/) untuk emisi di California.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.