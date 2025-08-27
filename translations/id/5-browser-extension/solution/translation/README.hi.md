<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-27T22:24:23+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "id"
}
-->
# Ekstensi Browser Carbon Trigger: Kode Lengkap

Menggunakan API CO2 Signal dari tmrow untuk melacak penggunaan listrik, ekstensi browser ini dirancang untuk memberikan pengingat tentang seberapa berat penggunaan listrik di wilayah Anda langsung di browser Anda. Dengan menggunakan ekstensi ini, Anda dapat membuat keputusan berdasarkan informasi tersebut untuk aktivitas Anda.

![Screenshot Ekstensi](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.id.png)

## Memulai

Anda perlu menginstal [npm](https://npmjs.com). Unduh salinan kode ini ke dalam folder di komputer Anda.

Instal semua paket yang diperlukan:

```
npm install
```

Bangun ekstensi menggunakan webpack:

```
npm run build
```

Untuk menginstal di Edge, gunakan menu 'tiga titik' di pojok kanan atas browser untuk menemukan panel ekstensi. Dari sana, pilih 'Load Unpacked' untuk memuat ekstensi baru. Pada prompt, buka folder 'dist' dan ekstensi akan dimuat. Untuk menggunakannya, Anda memerlukan kunci API CO2 Signal ([dapatkan melalui email di sini](https://www.co2signal.com/) - masukkan email Anda di kotak pada halaman tersebut) dan [kode wilayah Anda](http://api.electricitymap.org/v3/zones) dari [Electricity Map](https://www.electricitymap.org/map) (misalnya, di Boston, saya menggunakan 'US-NEISO').

![installing](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.id.png)

Setelah kunci API dan wilayah dimasukkan ke dalam antarmuka ekstensi, titik berwarna di bilah ekstensi browser Anda akan berubah untuk mencerminkan penggunaan energi di wilayah Anda dan memberikan indikator tentang aktivitas berat energi yang sesuai untuk dilakukan. Konsep sistem 'titik' ini terinspirasi oleh [Ekstensi Energy Lollipop](https://energylollipop.com/) untuk emisi di California.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.