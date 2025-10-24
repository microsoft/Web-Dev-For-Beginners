<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-24T14:33:08+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "ms"
}
-->
# Tugasan Amali HTML: Membina Reka Bentuk Blog

## Objektif Pembelajaran

Gunakan pengetahuan HTML anda dengan mereka bentuk dan menulis kod struktur laman utama blog yang lengkap. Tugasan praktikal ini akan mengukuhkan konsep HTML semantik, amalan terbaik kebolehaksesan, dan kemahiran organisasi kod profesional yang akan anda gunakan sepanjang perjalanan pembangunan web anda.

**Dengan menyelesaikan tugasan ini, anda akan:**
- Berlatih merancang susun atur laman web sebelum menulis kod
- Menggunakan elemen HTML semantik dengan betul
- Mencipta markup yang boleh diakses dan tersusun dengan baik
- Membangunkan tabiat pengekodan profesional dengan komen dan organisasi

## Keperluan Projek

### Bahagian 1: Perancangan Reka Bentuk (Reka Bentuk Visual)

**Cipta reka bentuk visual laman utama blog anda yang merangkumi:**
- Header dengan tajuk laman dan navigasi
- Kawasan kandungan utama dengan sekurang-kurangnya 2-3 pratonton pos blog
- Sidebar dengan maklumat tambahan (bahagian tentang, pos terkini, kategori)
- Footer dengan maklumat hubungan atau pautan

**Pilihan Penciptaan Reka Bentuk:**
- **Lakaran tangan**: Gunakan kertas dan pensel, kemudian ambil gambar atau imbas reka bentuk anda
- **Alat digital**: Figma, Adobe XD, Canva, PowerPoint, atau mana-mana aplikasi lukisan
- **Alat wireframe**: Balsamiq, MockFlow, atau perisian wireframe yang serupa

**Labelkan bahagian reka bentuk anda** dengan elemen HTML yang anda rancang untuk digunakan (contohnya, "Header - `<header>`", "Pos Blog - `<article>`").

### Bahagian 2: Perancangan Elemen HTML

**Cipta senarai yang memetakan setiap bahagian reka bentuk anda kepada elemen HTML tertentu:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Elemen Wajib Disertakan:**
HTML anda mesti mengandungi sekurang-kurangnya 10 elemen semantik yang berbeza daripada senarai ini:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Bahagian 3: Pelaksanaan HTML

**Tulis kod laman utama blog anda mengikut piawaian ini:**

1. **Struktur Dokumen**: Sertakan DOCTYPE, html, head, dan elemen body yang betul
2. **Markup Semantik**: Gunakan elemen HTML untuk tujuan yang dimaksudkan
3. **Kebolehaksesan**: Sertakan teks alt yang sesuai untuk imej dan teks pautan yang bermakna
4. **Kualiti Kod**: Gunakan indentasi yang konsisten dan komen yang bermakna
5. **Kandungan**: Sertakan kandungan blog yang realistik (anda boleh menggunakan teks tempat letak)

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

### Bahagian 4: Refleksi

**Tulis refleksi ringkas (3-5 ayat) yang merangkumi:**
- Elemen HTML mana yang paling anda yakin untuk digunakan?
- Cabaran apa yang anda hadapi semasa merancang atau menulis kod?
- Bagaimana HTML semantik membantu mengatur kandungan anda?
- Apa yang akan anda lakukan secara berbeza dalam projek HTML anda yang seterusnya?

## Senarai Semak Penyerahan

**Sebelum menyerahkan, pastikan anda telah:**
- [ ] Reka bentuk visual dengan elemen HTML yang dilabelkan
- [ ] Fail HTML lengkap dengan struktur dokumen yang betul
- [ ] Sekurang-kurangnya 10 elemen HTML semantik yang digunakan dengan betul
- [ ] Komen bermakna yang menerangkan struktur kod anda
- [ ] Sintaks HTML yang sah (uji dalam pelayar)
- [ ] Refleksi bertulis yang menjawab soalan prompt

## Rubrik Penilaian

| Kriteria | Cemerlang (4) | Mahir (3) | Sedang Berkembang (2) | Permulaan (1) |
|----------|---------------|-----------|-----------------------|---------------|
| **Perancangan & Reka Bentuk** | Reka bentuk terperinci, dilabelkan dengan baik menunjukkan pemahaman yang jelas tentang susun atur dan struktur HTML semantik | Reka bentuk yang jelas dengan kebanyakan bahagian dilabelkan dengan betul | Reka bentuk asas dengan beberapa label, menunjukkan pemahaman umum | Reka bentuk minimum atau tidak jelas, kekurangan pengenalan bahagian yang betul |
| **Penggunaan HTML Semantik** | Menggunakan 10+ elemen semantik dengan betul, menunjukkan pemahaman mendalam tentang struktur HTML dan kebolehaksesan | Menggunakan 8-9 elemen semantik dengan betul, menunjukkan pemahaman yang baik tentang markup semantik | Menggunakan 6-7 elemen semantik, beberapa kekeliruan tentang penggunaan yang betul | Menggunakan kurang daripada 6 elemen atau salah menggunakan elemen semantik |
| **Kualiti & Organisasi Kod** | Kod yang sangat teratur, diindentas dengan betul dengan komen yang komprehensif dan sintaks HTML yang sempurna | Kod yang teratur dengan indentasi yang baik, komen yang berguna, dan sintaks yang sah | Kod yang kebanyakannya teratur dengan beberapa komen, isu sintaks kecil | Organisasi yang lemah, komen minimum, banyak kesalahan sintaks |
| **Kebolehaksesan & Amalan Terbaik** | Pertimbangan kebolehaksesan yang sangat baik, teks alt yang bermakna, hierarki tajuk yang betul, mengikuti semua amalan terbaik HTML moden | Ciri kebolehaksesan yang baik, penggunaan tajuk dan teks alt yang sesuai, mengikuti kebanyakan amalan terbaik | Beberapa pertimbangan kebolehaksesan, teks alt dan struktur tajuk asas | Ciri kebolehaksesan terhad, struktur tajuk yang lemah, tidak mengikuti amalan terbaik |
| **Refleksi & Pembelajaran** | Refleksi yang mendalam menunjukkan pemahaman yang mendalam tentang konsep HTML dan analisis yang teliti tentang proses pembelajaran | Refleksi yang baik menunjukkan pemahaman tentang konsep utama dan sedikit kesedaran diri tentang pembelajaran | Refleksi asas dengan sedikit wawasan tentang konsep HTML atau proses pembelajaran | Refleksi minimum atau tiada, menunjukkan sedikit pemahaman tentang konsep yang dipelajari |

## Sumber Pembelajaran

**Rujukan Penting:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Panduan lengkap kepada semua elemen HTML
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Memahami markup semantik
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Mencipta kandungan web yang boleh diakses
- [HTML Validator](https://validator.w3.org/) - Periksa sintaks HTML anda

**Petua Profesional untuk Kejayaan:**
- Mulakan dengan reka bentuk anda sebelum menulis sebarang kod
- Gunakan alat pembangun pelayar untuk memeriksa struktur HTML anda
- Uji halaman anda dengan saiz skrin yang berbeza (walaupun tanpa CSS)
- Baca HTML anda dengan kuat untuk memeriksa sama ada struktur itu masuk akal
- Pertimbangkan bagaimana pembaca skrin akan mentafsirkan struktur halaman anda

> 💡 **Ingat**: Tugasan ini memberi tumpuan kepada struktur dan semantik HTML. Jangan risau tentang gaya visual – itu adalah tugas CSS! Halaman anda mungkin kelihatan ringkas, tetapi ia harus tersusun dengan baik dan bermakna.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.