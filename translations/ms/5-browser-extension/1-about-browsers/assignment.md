# Tugasan: Gaya Semula Sambungan Pelayar Anda

## Gambaran Keseluruhan

Kini setelah anda membina struktur HTML untuk sambungan pelayar jejak karbon anda, tiba masanya untuk menjadikannya lebih menarik dan mesra pengguna. Reka bentuk yang hebat meningkatkan pengalaman pengguna dan menjadikan sambungan anda kelihatan lebih profesional dan menarik.

Sambungan anda dilengkapi dengan gaya asas CSS, tetapi tugasan ini mencabar anda untuk mencipta identiti visual unik yang mencerminkan gaya peribadi anda sambil mengekalkan kebolehgunaan yang cemerlang.

## Arahan

### Bahagian 1: Analisis Reka Bentuk Semasa

Sebelum membuat perubahan, periksa struktur CSS yang sedia ada:

1. **Cari** fail CSS dalam projek sambungan anda
2. **Semak** pendekatan gaya dan skema warna semasa
3. **Kenal pasti** kawasan yang boleh diperbaiki dalam susun atur, tipografi, dan hierarki visual
4. **Pertimbangkan** bagaimana reka bentuk menyokong matlamat pengguna (pengisian borang yang mudah dan paparan data yang jelas)

### Bahagian 2: Reka Bentuk Gaya Tersuai Anda

Cipta reka bentuk visual yang padu termasuk:

**Skema Warna:**
- Pilih palet warna utama yang mencerminkan tema alam sekitar
- Pastikan kontras mencukupi untuk kebolehaksesan (gunakan alat seperti pemeriksa kontras WebAIM)
- Pertimbangkan bagaimana warna akan kelihatan di pelbagai tema pelayar

**Tipografi:**
- Pilih fon yang mudah dibaca dan sesuai untuk saiz sambungan kecil
- Tetapkan hierarki yang jelas dengan saiz dan berat fon yang sesuai
- Pastikan teks kekal mudah dibaca dalam tema pelayar terang dan gelap

**Susun Atur dan Jarak:**
- Perbaiki organisasi visual elemen borang dan paparan data
- Tambahkan padding dan margin yang sesuai untuk meningkatkan kebolehbacaan
- Pertimbangkan prinsip reka bentuk responsif untuk pelbagai saiz skrin

### Bahagian 3: Laksanakan Reka Bentuk Anda

Ubah fail CSS untuk melaksanakan reka bentuk anda:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Kawasan utama untuk digayakan:**
- **Elemen borang**: Medan input, label, dan butang hantar
- **Paparan hasil**: Bekas data, gaya teks, dan keadaan pemuatan
- **Elemen interaktif**: Kesan hover, keadaan butang, dan peralihan
- **Susun atur keseluruhan**: Jarak bekas, warna latar belakang, dan hierarki visual

### Bahagian 4: Uji dan Perbaiki

1. **Bina** sambungan anda dengan `npm run build`
2. **Muatkan** sambungan yang dikemas kini ke dalam pelayar anda
3. **Uji** semua keadaan visual (pengisian borang, pemuatan, paparan hasil, ralat)
4. **Sahkan** kebolehaksesan dengan alat pembangun pelayar
5. **Perbaiki** gaya anda berdasarkan penggunaan sebenar

## Cabaran Kreatif

### Tahap Asas
- Kemas kini warna dan fon untuk mencipta tema yang padu
- Perbaiki jarak dan penjajaran di seluruh antara muka
- Tambahkan kesan hover yang halus pada elemen interaktif

### Tahap Pertengahan
- Reka ikon atau grafik tersuai untuk sambungan anda
- Laksanakan peralihan yang lancar antara keadaan yang berbeza
- Cipta animasi pemuatan unik untuk panggilan API

### Tahap Lanjutan
- Reka pilihan tema pelbagai (terang/gelap/kontras tinggi)
- Laksanakan reka bentuk responsif untuk pelbagai saiz tetingkap pelayar
- Tambahkan mikro-interaksi yang meningkatkan pengalaman pengguna

## Garis Panduan Penyerahan

Tugasan yang lengkap harus merangkumi:

- **Fail CSS yang diubah suai** dengan gaya tersuai anda
- **Tangkap layar** yang menunjukkan sambungan anda dalam keadaan yang berbeza (borang, pemuatan, hasil)
- **Penerangan ringkas** (2-3 ayat) yang menjelaskan pilihan reka bentuk anda dan bagaimana ia meningkatkan pengalaman pengguna

## Rubrik Penilaian

| Kriteria | Cemerlang (4) | Mahir (3) | Sedang Membangun (2) | Permulaan (1) |
|----------|---------------|----------------|----------------|----------------|
| **Reka Bentuk Visual** | Reka bentuk kreatif dan padu yang meningkatkan kebolehgunaan dan mencerminkan prinsip reka bentuk yang kukuh | Pilihan reka bentuk yang baik dengan gaya yang konsisten dan hierarki visual yang jelas | Penambahbaikan reka bentuk asas dengan beberapa isu konsistensi | Perubahan gaya minimum atau reka bentuk yang tidak konsisten |
| **Fungsi** | Semua gaya berfungsi dengan sempurna di pelbagai keadaan dan persekitaran pelayar | Gaya berfungsi dengan baik dengan isu kecil dalam kes tepi | Kebanyakan gaya berfungsi dengan beberapa masalah paparan | Masalah gaya yang ketara yang menjejaskan kebolehgunaan |
| **Kualiti Kod** | CSS yang bersih, teratur dengan nama kelas yang bermakna dan pemilih yang cekap | Struktur CSS yang baik dengan penggunaan pemilih dan sifat yang sesuai | CSS yang boleh diterima dengan beberapa isu organisasi | Struktur CSS yang lemah atau gaya yang terlalu kompleks |
| **Kebolehaksesan** | Kontras warna yang sangat baik, fon yang mudah dibaca, dan pertimbangan untuk pengguna kurang upaya | Amalan kebolehaksesan yang baik dengan kawasan kecil untuk diperbaiki | Pertimbangan kebolehaksesan asas dengan beberapa isu | Perhatian yang terhad kepada keperluan kebolehaksesan |

## Petua untuk Berjaya

> 💡 **Petua Reka Bentuk**: Mulakan dengan perubahan kecil dan bina kepada gaya yang lebih dramatik. Penambahbaikan kecil dalam tipografi dan jarak sering memberi impak besar pada kualiti yang dirasakan.

**Amalan terbaik untuk diikuti:**
- **Uji** sambungan anda dalam tema pelayar terang dan gelap
- **Gunakan** unit relatif (em, rem) untuk skalabiliti yang lebih baik
- **Kekalkan** jarak yang konsisten menggunakan sifat tersuai CSS
- **Pertimbangkan** bagaimana reka bentuk anda akan kelihatan kepada pengguna dengan keperluan visual yang berbeza
- **Sahkan** CSS anda untuk memastikan ia mengikuti sintaks yang betul

> ⚠️ **Kesilapan Biasa**: Jangan korbankan kebolehgunaan demi daya tarikan visual. Sambungan anda harus cantik dan berfungsi.

**Ingat untuk:**
- **Pastikan** maklumat penting mudah dibaca
- **Pastikan** butang dan elemen interaktif mudah diklik
- **Kekalkan** maklum balas visual yang jelas untuk tindakan pengguna
- **Uji** reka bentuk anda dengan data sebenar, bukan hanya teks tempat letak

Semoga berjaya mencipta sambungan pelayar yang berfungsi dan menarik secara visual!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.