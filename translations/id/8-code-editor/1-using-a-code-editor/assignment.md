<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "effe56ba51c38d7bdfad1ea38288666b",
  "translation_date": "2025-10-24T13:58:55+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "id"
}
-->
# Membuat Website Resume Menggunakan VSCode.dev

Tingkatkan prospek karier Anda dengan membangun website resume profesional yang menampilkan keterampilan dan pengalaman Anda dalam format interaktif dan modern. Alih-alih mengirimkan PDF tradisional, bayangkan memberikan kepada perekrut sebuah website yang responsif dan menarik yang menunjukkan kualifikasi Anda sekaligus kemampuan pengembangan web Anda.

Tugas praktis ini mengaplikasikan semua keterampilan VSCode.dev Anda sambil menciptakan sesuatu yang benar-benar berguna untuk karier Anda. Anda akan merasakan alur kerja pengembangan web lengkap – mulai dari pembuatan repositori hingga penerapan – semuanya dilakukan di dalam browser Anda.

Dengan menyelesaikan proyek ini, Anda akan memiliki kehadiran online profesional yang dapat dengan mudah dibagikan kepada calon pemberi kerja, diperbarui seiring pertumbuhan keterampilan Anda, dan disesuaikan dengan merek pribadi Anda. Ini adalah jenis proyek praktis yang menunjukkan kemampuan pengembangan web di dunia nyata.

## Tujuan Pembelajaran

Setelah menyelesaikan tugas ini, Anda akan mampu:

- **Membuat** dan mengelola proyek pengembangan web lengkap menggunakan VSCode.dev
- **Menyusun** website profesional menggunakan elemen HTML semantik
- **Mendesain** tata letak responsif dengan teknik CSS modern
- **Mengimplementasikan** fitur interaktif menggunakan teknologi web dasar
- **Menerapkan** website langsung yang dapat diakses melalui URL yang dapat dibagikan
- **Menunjukkan** praktik terbaik kontrol versi selama proses pengembangan

## Prasyarat

Sebelum memulai tugas ini, pastikan Anda memiliki:

- Akun GitHub (buat satu di [github.com](https://github.com/) jika diperlukan)
- Penyelesaian pelajaran VSCode.dev yang mencakup navigasi antarmuka dan operasi dasar
- Pemahaman dasar tentang struktur HTML dan konsep styling CSS

## Pengaturan Proyek dan Pembuatan Repositori

Mari kita mulai dengan menyiapkan fondasi proyek Anda. Proses ini mencerminkan alur kerja pengembangan dunia nyata di mana proyek dimulai dengan inisialisasi repositori yang tepat dan perencanaan struktur.

### Langkah 1: Buat Repositori GitHub Anda

Menyiapkan repositori khusus memastikan proyek Anda terorganisir dengan baik dan dikontrol versinya sejak awal.

1. **Masuk** ke [GitHub.com](https://github.com) dan masuk ke akun Anda
2. **Klik** tombol hijau "New" atau ikon "+" di sudut kanan atas
3. **Beri nama** repositori Anda `my-resume` (atau pilih nama yang dipersonalisasi seperti `john-smith-resume`)
4. **Tambahkan** deskripsi singkat: "Website resume profesional yang dibuat dengan HTML dan CSS"
5. **Pilih** "Public" agar resume Anda dapat diakses oleh calon pemberi kerja
6. **Centang** "Add a README file" untuk membuat deskripsi proyek awal
7. **Klik** "Create repository" untuk menyelesaikan pengaturan

> 💡 **Tips Penamaan Repositori**: Gunakan nama yang deskriptif dan profesional yang jelas menunjukkan tujuan proyek. Ini membantu saat berbagi dengan pemberi kerja atau selama ulasan portofolio.

### Langkah 2: Inisialisasi Struktur Proyek

Karena VSCode.dev membutuhkan setidaknya satu file untuk membuka repositori, kita akan membuat file HTML utama langsung di GitHub sebelum beralih ke editor web.

1. **Klik** tautan "creating a new file" di repositori baru Anda
2. **Ketik** `index.html` sebagai nama file
3. **Tambahkan** struktur HTML awal ini:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <h1>Your Name</h1>
    <p>Professional Resume Website</p>
</body>
</html>
```

4. **Tulis** pesan commit: "Tambahkan struktur HTML awal"
5. **Klik** "Commit new file" untuk menyimpan perubahan Anda

![Membuat file awal di GitHub](../../../../translated_images/id/new-file-github.com.c886796d800e8056.png)

**Apa yang dicapai oleh pengaturan awal ini:**
- **Membangun** struktur dokumen HTML5 yang tepat dengan elemen semantik
- **Menyertakan** tag meta viewport untuk kompatibilitas desain responsif
- **Menetapkan** judul halaman deskriptif yang muncul di tab browser
- **Menciptakan** dasar untuk organisasi konten profesional

## Bekerja di VSCode.dev

Setelah fondasi repositori Anda dibuat, mari beralih ke VSCode.dev untuk pekerjaan pengembangan utama. Editor berbasis web ini menyediakan semua alat yang diperlukan untuk pengembangan web profesional.

### Langkah 3: Buka Proyek Anda di VSCode.dev

1. **Masuk** ke [vscode.dev](https://vscode.dev) di tab browser baru
2. **Klik** "Open Remote Repository" di layar selamat datang
3. **Salin** URL repositori Anda dari GitHub dan tempelkan ke kolom input

   Format: `https://github.com/your-username/my-resume`
   
   *Ganti `your-username` dengan nama pengguna GitHub Anda yang sebenarnya*

4. **Tekan** Enter untuk memuat proyek Anda

✅ **Indikator keberhasilan**: Anda akan melihat file proyek Anda di sidebar Explorer dan `index.html` tersedia untuk diedit di area editor utama.

![Proyek dimuat di VSCode.dev](../../../../translated_images/id/project-on-vscode.dev.e79815a9a95ee7fe.png)

**Apa yang akan Anda lihat di antarmuka:**
- **Sidebar Explorer**: **Menampilkan** file dan struktur folder repositori Anda
- **Area Editor**: **Menampilkan** konten file yang dipilih untuk diedit
- **Activity Bar**: **Memberikan** akses ke fitur seperti Source Control dan Extensions
- **Status Bar**: **Menunjukkan** status koneksi dan informasi cabang saat ini

### Langkah 4: Bangun Konten Resume Anda

Ganti konten placeholder di `index.html` dengan struktur resume yang lengkap. HTML ini menyediakan dasar untuk presentasi profesional kualifikasi Anda.

<details>
<summary><b>Struktur HTML Resume Lengkap</b></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <header id="header">
        <h1>Your Full Name</h1>
        <hr>
        <p class="role">Your Professional Title</p>
        <hr>
    </header>
    
    <main>
        <article id="mainLeft">
            <section>
                <h2>CONTACT</h2>
                <p>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:your.email@domain.com">your.email@domain.com</a>
                </p>
                <p>
                    <i class="fab fa-github" aria-hidden="true"></i>
                    <a href="https://github.com/your-username">github.com/your-username</a>
                </p>
                <p>
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                    <a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a>
                </p>
            </section>
            
            <section>
                <h2>SKILLS</h2>
                <ul>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control (Git)</li>
                    <li>Problem Solving</li>
                </ul>
            </section>
            
            <section>
                <h2>EDUCATION</h2>
                <h3>Your Degree or Certification</h3>
                <p>Institution Name</p>
                <p>Start Date - End Date</p>
            </section>
        </article>
        
        <article id="mainRight">
            <section>
                <h2>ABOUT</h2>
                <p>Write a compelling summary that highlights your passion for web development, key achievements, and career goals. This section should give employers insight into your personality and professional approach.</p>
            </section>
            
            <section>
                <h2>WORK EXPERIENCE</h2>
                <div class="job">
                    <h3>Job Title</h3>
                    <p class="company">Company Name | Start Date – End Date</p>
                    <ul>
                        <li>Describe a key accomplishment or responsibility</li>
                        <li>Highlight specific skills or technologies used</li>
                        <li>Quantify impact where possible (e.g., "Improved efficiency by 25%")</li>
                    </ul>
                </div>
                
                <div class="job">
                    <h3>Previous Job Title</h3>
                    <p class="company">Previous Company | Start Date – End Date</p>
                    <ul>
                        <li>Focus on transferable skills and achievements</li>
                        <li>Demonstrate growth and learning progression</li>
                        <li>Include any leadership or collaboration experiences</li>
                    </ul>
                </div>
            </section>
            
            <section>
                <h2>PROJECTS</h2>
                <div class="project">
                    <h3>Project Name</h3>
                    <p>Brief description of what the project accomplishes and technologies used.</p>
                    <a href="#" target="_blank">View Project</a>
                </div>
            </section>
        </article>
    </main>
</body>
</html>
```
</details>

**Panduan kustomisasi:**
- **Ganti** semua teks placeholder dengan informasi Anda yang sebenarnya
- **Sesuaikan** bagian berdasarkan tingkat pengalaman dan fokus karier Anda
- **Tambahkan** atau hapus bagian sesuai kebutuhan (misalnya, Sertifikasi, Kerja Sukarela, Bahasa)
- **Sertakan** tautan ke profil dan proyek Anda yang sebenarnya

### Langkah 5: Buat File Pendukung

Website profesional membutuhkan struktur file yang terorganisir. Buat stylesheet CSS dan file konfigurasi yang diperlukan untuk proyek lengkap.

1. **Arahkan** kursor ke nama folder proyek Anda di sidebar Explorer
2. **Klik** ikon "New File" (📄+) yang muncul
3. **Buat** file-file ini satu per satu:
   - `style.css` (untuk styling dan tata letak)
   - `codeswing.json` (untuk konfigurasi ekstensi preview)

**Membuat file CSS (`style.css`):**

<details>
<summary><b>Styling CSS Profesional</b></summary>

```css
/* Modern Resume Styling */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    background-color: #f9f9f9;
}

/* Header Styling */
header {
    text-align: center;
    margin-bottom: 3em;
    padding: 2em;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 3em;
    letter-spacing: 0.1em;
    margin-bottom: 0.2em;
    font-weight: 300;
}

.role {
    font-size: 1.3em;
    font-weight: 300;
    margin: 1em 0;
}

/* Main Content Layout */
main {
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 3em;
    margin-top: 3em;
    background: white;
    padding: 2em;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Typography */
h2 {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 1em;
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 0.3em;
}

h3 {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.5em;
    color: #444;
}

/* Section Styling */
section {
    margin-bottom: 2.5em;
}

#mainLeft {
    border-right: 1px solid #e0e0e0;
    padding-right: 2em;
}

/* Contact Links */
section a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
}

section a:hover {
    color: #764ba2;
    text-decoration: underline;
}

/* Icons */
i {
    margin-right: 0.8em;
    width: 20px;
    text-align: center;
    color: #667eea;
}

/* Lists */
ul {
    list-style: none;
    padding-left: 0;
}

li {
    margin: 0.5em 0;
    padding: 0.3em 0;
    position: relative;
}

li:before {
    content: "▸";
    color: #667eea;
    margin-right: 0.5em;
}

/* Work Experience */
.job, .project {
    margin-bottom: 2em;
    padding-bottom: 1.5em;
    border-bottom: 1px solid #f0f0f0;
}

.company {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5em;
}

/* Responsive Design */
@media (max-width: 768px) {
    main {
        grid-template-columns: 1fr;
        gap: 2em;
    }
    
    #mainLeft {
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
        padding-right: 0;
        padding-bottom: 2em;
    }
    
    h1 {
        font-size: 2.2em;
    }
    
    body {
        padding: 10px;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
        font-size: 12pt;
    }
    
    header {
        background: none;
        color: black;
        box-shadow: none;
    }
    
    main {
        box-shadow: none;
    }
}
```
</details>

**Membuat file konfigurasi (`codeswing.json`):**

```json
{
    "scripts": [],
    "styles": []
}
```

**Memahami fitur CSS:**
- **Menggunakan** CSS Grid untuk struktur tata letak responsif dan profesional
- **Menerapkan** skema warna modern dengan header gradien
- **Menyertakan** efek hover dan transisi halus untuk interaktivitas
- **Menyediakan** desain responsif yang bekerja di semua ukuran perangkat
- **Menambahkan** gaya yang ramah cetak untuk pembuatan PDF

### Langkah 6: Instal dan Konfigurasikan Ekstensi

Ekstensi meningkatkan pengalaman pengembangan Anda dengan menyediakan kemampuan preview langsung dan alat alur kerja yang lebih baik. Ekstensi CodeSwing sangat berguna untuk proyek pengembangan web.

**Menginstal Ekstensi CodeSwing:**

1. **Klik** ikon Extensions (🧩) di Activity Bar
2. **Cari** "CodeSwing" di kotak pencarian marketplace
3. **Pilih** ekstensi CodeSwing dari hasil pencarian
4. **Klik** tombol biru "Install"

![Menginstal ekstensi CodeSwing](../../../../8-code-editor/images/install-extension.gif)

**Apa yang disediakan oleh CodeSwing:**
- **Memungkinkan** preview langsung website Anda saat Anda mengedit
- **Menampilkan** perubahan secara real-time tanpa perlu refresh manual
- **Mendukung** berbagai jenis file termasuk HTML, CSS, dan JavaScript
- **Menyediakan** pengalaman lingkungan pengembangan yang terintegrasi

**Hasil langsung setelah instalasi:**
Setelah CodeSwing diinstal, Anda akan melihat preview langsung dari website resume Anda muncul di editor. Ini memungkinkan Anda melihat dengan tepat bagaimana tampilan situs Anda saat Anda membuat perubahan.

![Ekstensi CodeSwing menampilkan preview langsung](../../../../translated_images/id/after-codeswing-extension-pb.0ebddddcf73b5509.png)

**Memahami antarmuka yang ditingkatkan:**
- **Tampilan terpisah**: **Menampilkan** kode Anda di satu sisi dan preview langsung di sisi lain
- **Pembaruan real-time**: **Mencerminkan** perubahan segera saat Anda mengetik
- **Preview interaktif**: **Memungkinkan** Anda menguji tautan dan interaksi
- **Simulasi mobile**: **Menyediakan** kemampuan pengujian desain responsif

### Langkah 7: Kontrol Versi dan Publikasi

Setelah website resume Anda selesai, gunakan Git untuk menyimpan pekerjaan Anda dan membuatnya tersedia secara online.

**Melakukan commit perubahan Anda:**

1. **Klik** ikon Source Control (🌿) di Activity Bar
2. **Tinjau** semua file yang telah Anda buat dan modifikasi di bagian "Changes"
3. **Stage** perubahan Anda dengan mengklik ikon "+" di sebelah setiap file
4. **Tulis** pesan commit yang deskriptif, seperti:
   - "Tambahkan website resume lengkap dengan desain responsif"
   - "Implementasi styling profesional dan struktur konten"
5. **Klik** tanda centang (✓) untuk commit dan push perubahan Anda

**Contoh pesan commit yang efektif:**
- "Tambahkan konten dan styling resume profesional"
- "Implementasi desain responsif untuk kompatibilitas mobile"
- "Perbarui informasi kontak dan tautan proyek"

> 💡 **Tips Profesional**: Pesan commit yang baik membantu melacak evolusi proyek Anda dan menunjukkan perhatian terhadap detail – kualitas yang dihargai oleh pemberi kerja.

**Mengakses situs yang telah dipublikasikan:**
Setelah di-commit, Anda dapat kembali ke repositori GitHub Anda menggunakan menu hamburger (☰) di sudut kiri atas. Website resume Anda sekarang telah dikontrol versinya dan siap untuk diterapkan atau dibagikan.

## Hasil dan Langkah Selanjutnya

**Selamat! 🎉** Anda telah berhasil membuat website resume profesional menggunakan VSCode.dev. Proyek Anda menunjukkan:
**Keterampilan teknis yang ditunjukkan:**
- **Manajemen repositori**: Membuat dan mengorganisasi struktur proyek lengkap
- **Pengembangan web**: Membangun website responsif menggunakan HTML5 dan CSS3 modern
- **Kontrol versi**: Mengimplementasikan alur kerja Git yang tepat dengan commit yang bermakna
- **Kemampuan alat**: Menggunakan antarmuka dan sistem ekstensi VSCode.dev secara efektif

**Hasil profesional yang dicapai:**
- **Kehadiran online**: URL yang dapat dibagikan yang menampilkan kualifikasi Anda
- **Format modern**: Alternatif interaktif untuk resume PDF tradisional
- **Keterampilan yang dapat ditunjukkan**: Bukti konkret kemampuan pengembangan web Anda
- **Pembaruan mudah**: Fondasi yang dapat terus Anda tingkatkan dan sesuaikan

### Opsi Penerapan

Untuk membuat resume Anda dapat diakses oleh pemberi kerja, pertimbangkan opsi hosting berikut:

**GitHub Pages (Direkomendasikan):**
1. Masuk ke pengaturan repositori Anda di GitHub
2. Gulir ke bagian "Pages"
3. Pilih "Deploy from a branch" dan pilih "main"
4. Situs Anda akan tersedia di `https://your-username.github.io/my-resume`

**Platform alternatif:**
- **Netlify**: Penerapan otomatis dengan domain khusus
- **Vercel**: Penerapan cepat dengan fitur hosting modern
- **GitHub Codespaces**: Lingkungan pengembangan dengan preview bawaan

### Saran Peningkatan

Lanjutkan mengembangkan keterampilan Anda dengan menambahkan fitur-fitur berikut:

**Peningkatan teknis:**
- **Interaktivitas JavaScript**: Tambahkan scrolling halus atau elemen interaktif
- **Toggle mode gelap**: Implementasikan pengalihan tema untuk preferensi pengguna
- **Formulir kontak**: Aktifkan komunikasi langsung dari calon pemberi kerja
- **Optimasi SEO**: Tambahkan meta tag dan data terstruktur untuk visibilitas pencarian yang lebih baik

**Peningkatan konten:**
- **Portofolio proyek**: Tautkan ke repositori GitHub dan demonstrasi langsung
- **Visualisasi keterampilan**: Buat bilah kemajuan atau sistem penilaian keterampilan
- **Bagian testimoni**: Sertakan rekomendasi dari rekan kerja atau instruktur
- **Integrasi blog**: Tambahkan bagian blog untuk menampilkan perjalanan belajar Anda

## Tantangan Agen GitHub Copilot 🚀

Gunakan mode Agen untuk menyelesaikan tantangan berikut:

**Deskripsi:** Tingkatkan website resume Anda dengan fitur-fitur canggih yang menunjukkan kemampuan pengembangan web profesional dan prinsip desain modern.

**Prompt:** Berdasarkan website resume Anda yang ada, implementasikan fitur-fitur canggih berikut:
1. Tambahkan toggle tema gelap/terang dengan transisi halus
2. Buat bagian keterampilan interaktif dengan bilah kemajuan animasi
3. Implementasikan formulir kontak dengan validasi formulir
4. Tambahkan bagian portofolio proyek dengan efek hover dan popup modal
5. Sertakan bagian blog dengan setidaknya 3 postingan contoh tentang perjalanan belajar Anda
6. Optimalkan untuk SEO dengan meta tag yang tepat, data terstruktur, dan performa
7. Terapkan situs yang ditingkatkan menggunakan GitHub Pages atau Netlify
8. Dokumentasikan semua fitur baru di README.md dengan tangkapan layar

Website yang ditingkatkan Anda harus menunjukkan penguasaan praktik pengembangan web modern termasuk desain responsif, interaktivitas JavaScript, dan alur kerja penerapan profesional.

## Ekstensi Tantangan

Siap untuk meningkatkan keterampilan Anda lebih jauh? Coba tantangan lanjutan berikut:

**📱 Desain Ulang Mobile-First:** Bangun kembali situs Anda sepenuhnya menggunakan pendekatan mobile-first dengan CSS Grid dan Flexbox

**🔍 Optimasi SEO:** Implementasikan optimasi SEO yang komprehensif termasuk meta tag, data terstruktur, dan optimasi performa

**🌐 Dukungan Multi-bahasa:** Tambahkan fitur internasionalisasi untuk mendukung beberapa bahasa

**📊 Integrasi Analitik:** Tambahkan Google Analytics untuk melacak keterlibatan pengunjung dan mengoptimalkan konten Anda

**🚀 Optimasi Performa:** Capai skor Lighthouse sempurna di semua kategori

## Tinjauan & Studi Mandiri

Perluas pengetahuan Anda dengan sumber daya berikut:

**Fitur Lanjutan VSCode.dev:**
- [Dokumentasi VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) - Panduan lengkap untuk pengeditan berbasis web
- [GitHub Codespaces](https://docs.github.com/en/codespaces) - Lingkungan pengembangan cloud

**Praktik Terbaik Pengembangan Web:**
- **Desain Responsif**: Pelajari CSS Grid dan Flexbox untuk tata letak modern
- **Aksesibilitas**: Pelajari pedoman WCAG untuk desain web yang inklusif  
- **Performa**: Jelajahi alat seperti Lighthouse untuk optimasi  
- **SEO**: Pahami dasar-dasar optimasi mesin pencari  

**Pengembangan Profesional:**  
- **Membangun Portofolio**: Buat proyek tambahan untuk menunjukkan beragam keterampilan  
- **Open Source**: Berkontribusi pada proyek yang sudah ada untuk mendapatkan pengalaman kolaborasi  
- **Jaringan**: Bagikan situs web resume Anda di komunitas pengembang untuk mendapatkan masukan  
- **Pembelajaran Berkelanjutan**: Tetap mengikuti tren dan teknologi pengembangan web  

---

**Langkah Anda Berikutnya:** Bagikan situs web resume Anda dengan teman, keluarga, atau mentor untuk mendapatkan masukan. Gunakan saran mereka untuk memperbaiki dan meningkatkan desain Anda. Ingat, proyek ini bukan hanya sekadar resume – ini adalah demonstrasi pertumbuhan Anda sebagai pengembang web!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.