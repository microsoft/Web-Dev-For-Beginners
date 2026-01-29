# Ekstensi Browser Carbon Trigger: Kode Selesai

Menggunakan API C02 Signal dari tmrow untuk melacak penggunaan listrik, buat ekstensi browser sehingga Anda dapat memiliki pengingat langsung di browser Anda tentang seberapa berat penggunaan listrik di wilayah Anda. Menggunakan ekstensi ini secara ad hoc akan membantu Anda membuat keputusan berdasarkan informasi ini.

![screenshot ekstensi](../../../../translated_images/id/extension-screenshot.0e7f5bfa110e92e3.webp)

## Memulai

Anda perlu memiliki [npm](https://npmjs.com) yang terinstal. Unduh salinan kode ini ke folder di komputer Anda.

Instal semua paket yang diperlukan:

```
npm install
```

Bangun ekstensi menggunakan webpack:

```
npm run build
```

Untuk menginstal di Edge, gunakan menu 'tiga titik' di sudut kanan atas browser untuk menemukan panel Ekstensi. Dari sana, pilih 'Load Unpacked' untuk memuat ekstensi baru. Buka folder 'dist' saat diminta, dan ekstensi akan dimuat. Untuk menggunakannya, Anda memerlukan kunci API untuk API CO2 Signal ([dapatkan di sini melalui email](https://www.co2signal.com/) - masukkan email Anda di kotak pada halaman ini) dan [kode untuk wilayah Anda](http://api.electricitymap.org/v3/zones) yang sesuai dengan [Electricity Map](https://www.electricitymap.org/map) (di Boston, misalnya, saya menggunakan 'US-NEISO').

![menginstal](../../../../translated_images/id/install-on-edge.78634f02842c4828.webp)

Setelah kunci API dan wilayah dimasukkan ke dalam antarmuka ekstensi, titik berwarna di bilah ekstensi browser seharusnya berubah untuk mencerminkan penggunaan energi di wilayah Anda dan memberikan petunjuk tentang aktivitas berat energi yang sesuai untuk Anda lakukan. Konsep di balik sistem 'titik' ini diberikan kepada saya oleh [ekstensi Energy Lollipop](https://energylollipop.com/) untuk emisi di California.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.