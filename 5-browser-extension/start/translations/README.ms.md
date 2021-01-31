# Pelanjutan Penyemak Imbas Carbon Trigger: Starter Code

Menggunakan API Isyarat C02 tmrow untuk mengesan penggunaan elektrik, bina pelanjutan penyemak imbas sehingga anda dapat memperoleh peringatan di penyemak imbas anda tentang betapa berat penggunaan elektrik wilayah anda. Menggunakan pelanjutan ini secara khusus akan membantu anda membuat pertimbangan mengenai aktiviti anda berdasarkan maklumat ini.

![tangkapan penyemak imbas](../../extension-screenshot.png)

## Bermula Dari Sini

Anda perlu memasang [npm](https://npmjs.com). Muat turun salinan kod ini ke folder di komputer anda.

Pasang semua pakej yang diperlukan:

```
npm install
```

Bina pelanjutan dari webpack

```
npm run build
```

Untuk memasang di Edge, gunakan menu 'tiga titik' di sudut kanan atas penyemak imbas untuk mencari panel Sambungan. Dari sana, pilih 'Load Unpacked' untuk memuat sambungan baru. Buka folder 'dist' pada permintaan dan pelanjutan akan dimuat. Untuk menggunakannya, anda memerlukan kunci API untuk API Isyarat CO2 ([dapatkan satu di sini melalui e-mel](https://www.co2signal.com/) - masukkan e-mel anda di dalam kotak di halaman ini) dan [kod untuk wilayah anda](http://api.electricitymap.org/v3/zones) yang sesuai dengan [Peta Elektrik](https://www.electricitymap.org/map) (di Boston, misalnya, saya menggunakan 'US- NEISO').

![sedang memuat turun](../../install-on-edge.png)

Setelah kunci API dan wilayah dimasukkan ke antara muka peluasan, titik berwarna di bar pelanjutan penyemak imbas akan berubah untuk mencerminkan penggunaan tenaga wilayah anda dan memberi anda petunjuk mengenai aktiviti berat yang sesuai untuk anda lakukan. Konsep di sebalik sistem 'dot' ini diberikan kepada saya oleh [pelanjutan penyemak imbas Lollipop Tenaga](https://energylollipop.com/) untuk pelepasan California.