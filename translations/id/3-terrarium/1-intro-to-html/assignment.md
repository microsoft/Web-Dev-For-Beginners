# Tugas Praktik HTML: Membuat Mockup Blog

## Tujuan Pembelajaran

Gunakan pengetahuan HTML Anda dengan merancang dan membuat struktur halaman utama blog yang lengkap. Tugas praktis ini akan memperkuat konsep HTML semantik, praktik terbaik aksesibilitas, dan keterampilan organisasi kode profesional yang akan Anda gunakan sepanjang perjalanan pengembangan web Anda.

**Dengan menyelesaikan tugas ini, Anda akan:**
- Berlatih merencanakan tata letak situs web sebelum mulai coding
- Menggunakan elemen HTML semantik dengan tepat
- Membuat markup yang terstruktur dan mudah diakses
- Mengembangkan kebiasaan coding profesional dengan komentar dan organisasi yang baik

## Persyaratan Proyek

### Bagian 1: Perencanaan Desain (Mockup Visual)

**Buat mockup visual dari halaman utama blog Anda yang mencakup:**
- Header dengan judul situs dan navigasi
- Area konten utama dengan setidaknya 2-3 pratinjau postingan blog
- Sidebar dengan informasi tambahan (bagian tentang, postingan terbaru, kategori)
- Footer dengan informasi kontak atau tautan

**Opsi Pembuatan Mockup:**
- **Sketsa tangan**: Gunakan kertas dan pensil, lalu foto atau scan desain Anda
- **Alat digital**: Figma, Adobe XD, Canva, PowerPoint, atau aplikasi gambar lainnya
- **Alat wireframe**: Balsamiq, MockFlow, atau perangkat lunak wireframing serupa

**Labeli bagian mockup Anda** dengan elemen HTML yang Anda rencanakan untuk digunakan (misalnya, "Header - `<header>`", "Postingan Blog - `<article>`").

### Bagian 2: Perencanaan Elemen HTML

**Buat daftar yang memetakan setiap bagian dari mockup Anda ke elemen HTML tertentu:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Elemen yang Wajib Disertakan:**
HTML Anda harus mengandung setidaknya 10 elemen semantik berbeda dari daftar ini:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Bagian 3: Implementasi HTML

**Kodekan halaman utama blog Anda dengan mengikuti standar berikut:**

1. **Struktur Dokumen**: Sertakan DOCTYPE, html, head, dan body yang benar
2. **Markup Semantik**: Gunakan elemen HTML sesuai tujuan penggunaannya
3. **Aksesibilitas**: Sertakan teks alt yang sesuai untuk gambar dan teks tautan yang bermakna
4. **Kualitas Kode**: Gunakan indentasi yang konsisten dan komentar yang bermakna
5. **Konten**: Sertakan konten blog yang realistis (Anda dapat menggunakan teks placeholder)

**Contoh Struktur HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Bagian 4: Refleksi

**Tulis refleksi singkat (3-5 kalimat) yang membahas:**
- Elemen HTML mana yang paling Anda kuasai?
- Tantangan apa yang Anda hadapi saat merencanakan atau coding?
- Bagaimana HTML semantik membantu mengorganisasi konten Anda?
- Apa yang akan Anda lakukan berbeda di proyek HTML berikutnya?

## Daftar Periksa Pengiriman

**Sebelum mengirimkan, pastikan Anda telah:**
- [ ] Mockup visual dengan elemen HTML yang diberi label
- [ ] File HTML lengkap dengan struktur dokumen yang benar
- [ ] Setidaknya 10 elemen HTML semantik yang digunakan dengan tepat
- [ ] Komentar bermakna yang menjelaskan struktur kode Anda
- [ ] Sintaks HTML yang valid (uji di browser)
- [ ] Refleksi tertulis yang menjawab pertanyaan prompt

## Rubrik Penilaian

| Kriteria | Unggul (4) | Cukup (3) | Berkembang (2) | Awal (1) |
|----------|------------|-----------|----------------|----------|
| **Perencanaan & Desain** | Mockup yang terperinci dan diberi label dengan baik menunjukkan pemahaman yang jelas tentang tata letak dan struktur HTML semantik | Mockup yang jelas dengan sebagian besar bagian diberi label dengan tepat | Mockup dasar dengan beberapa label, menunjukkan pemahaman umum | Mockup minimal atau tidak jelas, kurang identifikasi bagian yang tepat |
| **Penggunaan HTML Semantik** | Menggunakan 10+ elemen semantik dengan tepat, menunjukkan pemahaman mendalam tentang struktur HTML dan aksesibilitas | Menggunakan 8-9 elemen semantik dengan benar, menunjukkan pemahaman yang baik tentang markup semantik | Menggunakan 6-7 elemen semantik, beberapa kebingungan tentang penggunaan yang tepat | Menggunakan kurang dari 6 elemen atau salah menggunakan elemen semantik |
| **Kualitas & Organisasi Kode** | Kode yang sangat terorganisasi, indentasi yang benar, komentar yang komprehensif, dan sintaks HTML yang sempurna | Kode yang terorganisasi dengan baik, indentasi yang baik, komentar yang membantu, dan sintaks yang valid | Kode yang sebagian besar terorganisasi dengan beberapa komentar, masalah sintaks minor | Organisasi yang buruk, komentar minimal, banyak kesalahan sintaks |
| **Aksesibilitas & Praktik Terbaik** | Pertimbangan aksesibilitas yang sangat baik, teks alt yang bermakna, hierarki heading yang benar, mengikuti semua praktik terbaik HTML modern | Fitur aksesibilitas yang baik, penggunaan heading dan teks alt yang sesuai, mengikuti sebagian besar praktik terbaik | Beberapa pertimbangan aksesibilitas, teks alt dan struktur heading dasar | Fitur aksesibilitas terbatas, struktur heading yang buruk, tidak mengikuti praktik terbaik |
| **Refleksi & Pembelajaran** | Refleksi yang mendalam menunjukkan pemahaman yang kuat tentang konsep HTML dan analisis pembelajaran yang bijaksana | Refleksi yang baik menunjukkan pemahaman tentang konsep utama dan beberapa kesadaran diri tentang pembelajaran | Refleksi dasar dengan wawasan terbatas tentang konsep HTML atau proses pembelajaran | Refleksi minimal atau tidak ada, menunjukkan sedikit pemahaman tentang konsep yang dipelajari |

## Sumber Belajar

**Referensi Penting:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Panduan lengkap untuk semua elemen HTML
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Memahami markup semantik
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Membuat konten web yang dapat diakses
- [HTML Validator](https://validator.w3.org/) - Periksa sintaks HTML Anda

**Tips Sukses:**
- Mulailah dengan mockup Anda sebelum menulis kode
- Gunakan alat pengembang browser untuk memeriksa struktur HTML Anda
- Uji halaman Anda dengan berbagai ukuran layar (bahkan tanpa CSS)
- Bacakan HTML Anda dengan keras untuk memeriksa apakah struktur masuk akal secara logis
- Pertimbangkan bagaimana pembaca layar akan menafsirkan struktur halaman Anda

> 💡 **Ingat**: Tugas ini berfokus pada struktur dan semantik HTML. Jangan khawatir tentang gaya visual – itu tugas CSS! Halaman Anda mungkin terlihat sederhana, tetapi harus terstruktur dengan baik dan bermakna.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.