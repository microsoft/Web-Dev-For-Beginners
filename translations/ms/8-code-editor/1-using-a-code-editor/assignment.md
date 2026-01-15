<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "effe56ba51c38d7bdfad1ea38288666b",
  "translation_date": "2025-10-24T14:23:31+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "ms"
}
-->
# Buat Laman Web Resume Menggunakan VSCode.dev

Tingkatkan peluang kerjaya anda dengan membina laman web resume profesional yang mempamerkan kemahiran dan pengalaman anda dalam format interaktif dan moden. Daripada menghantar PDF tradisional, bayangkan memberikan kepada perekrut laman web yang responsif dan bergaya yang menunjukkan kelayakan anda serta keupayaan pembangunan web anda.

Tugasan praktikal ini mengaplikasikan semua kemahiran VSCode.dev anda sambil mencipta sesuatu yang benar-benar berguna untuk kerjaya anda. Anda akan mengalami aliran kerja pembangunan web sepenuhnya – dari penciptaan repositori hingga penerbitan – semuanya dalam pelayar anda.

Dengan menyelesaikan projek ini, anda akan mempunyai kehadiran dalam talian profesional yang mudah dikongsi dengan bakal majikan, dikemas kini seiring dengan perkembangan kemahiran anda, dan disesuaikan untuk mencerminkan jenama peribadi anda. Ini adalah jenis projek praktikal yang menunjukkan kemahiran pembangunan web dunia nyata.

## Objektif Pembelajaran

Selepas menyelesaikan tugasan ini, anda akan dapat:

- **Mencipta** dan menguruskan projek pembangunan web lengkap menggunakan VSCode.dev
- **Menyusun** laman web profesional menggunakan elemen HTML semantik
- **Menggayakan** susun atur responsif dengan teknik CSS moden
- **Melaksanakan** ciri interaktif menggunakan teknologi web asas
- **Menerbitkan** laman web langsung yang boleh diakses melalui URL yang boleh dikongsi
- **Menunjukkan** amalan terbaik kawalan versi sepanjang proses pembangunan

## Prasyarat

Sebelum memulakan tugasan ini, pastikan anda mempunyai:

- Akaun GitHub (buat satu di [github.com](https://github.com/) jika diperlukan)
- Penyelesaian pelajaran VSCode.dev yang merangkumi navigasi antara muka dan operasi asas
- Pemahaman asas tentang struktur HTML dan konsep penggayaan CSS

## Persediaan Projek dan Penciptaan Repositori

Mari mulakan dengan menyediakan asas projek anda. Proses ini mencerminkan aliran kerja pembangunan dunia nyata di mana projek bermula dengan inisialisasi repositori yang betul dan perancangan struktur.

### Langkah 1: Cipta Repositori GitHub Anda

Menyiapkan repositori khusus memastikan projek anda teratur dan dikawal versi dari awal.

1. **Pergi** ke [GitHub.com](https://github.com) dan log masuk ke akaun anda
2. **Klik** butang hijau "New" atau ikon "+" di sudut kanan atas
3. **Namakan** repositori anda `my-resume` (atau pilih nama peribadi seperti `john-smith-resume`)
4. **Tambah** penerangan ringkas: "Laman web resume profesional dibina dengan HTML dan CSS"
5. **Pilih** "Public" untuk membuat resume anda boleh diakses oleh bakal majikan
6. **Tandakan** "Add a README file" untuk mencipta penerangan projek awal
7. **Klik** "Create repository" untuk menyelesaikan persediaan

> 💡 **Tip Penamaan Repositori**: Gunakan nama yang deskriptif dan profesional yang jelas menunjukkan tujuan projek. Ini membantu apabila berkongsi dengan majikan atau semasa ulasan portfolio.

### Langkah 2: Inisialisasi Struktur Projek

Oleh kerana VSCode.dev memerlukan sekurang-kurangnya satu fail untuk membuka repositori, kita akan mencipta fail HTML utama kita terus di GitHub sebelum beralih ke editor web.

1. **Klik** pautan "creating a new file" dalam repositori baru anda
2. **Taipkan** `index.html` sebagai nama fail
3. **Tambah** struktur HTML awal ini:

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

4. **Tulis** mesej komit: "Tambah struktur HTML awal"
5. **Klik** "Commit new file" untuk menyimpan perubahan anda

![Mencipta fail awal di GitHub](../../../../translated_images/ms/new-file-github.com.c886796d800e8056.png)

**Apa yang dicapai oleh persediaan awal ini:**
- **Menetapkan** struktur dokumen HTML5 yang betul dengan elemen semantik
- **Termasuk** tag meta viewport untuk keserasian reka bentuk responsif
- **Menetapkan** tajuk halaman deskriptif yang muncul di tab pelayar
- **Mencipta** asas untuk organisasi kandungan profesional

## Bekerja di VSCode.dev

Sekarang repositori anda telah disediakan, mari beralih ke VSCode.dev untuk kerja pembangunan utama. Editor berasaskan web ini menyediakan semua alat yang diperlukan untuk pembangunan web profesional.

### Langkah 3: Buka Projek Anda di VSCode.dev

1. **Pergi** ke [vscode.dev](https://vscode.dev) dalam tab pelayar baru
2. **Klik** "Open Remote Repository" pada skrin selamat datang
3. **Salin** URL repositori anda dari GitHub dan tampalkannya ke dalam medan input

   Format: `https://github.com/your-username/my-resume`
   
   *Gantikan `your-username` dengan nama pengguna GitHub sebenar anda*

4. **Tekan** Enter untuk memuatkan projek anda

✅ **Petunjuk kejayaan**: Anda sepatutnya melihat fail projek anda di bar sisi Explorer dan `index.html` tersedia untuk diedit di kawasan editor utama.

![Projek dimuatkan di VSCode.dev](../../../../translated_images/ms/project-on-vscode.dev.e79815a9a95ee7fe.png)

**Apa yang anda akan lihat dalam antara muka:**
- **Bar sisi Explorer**: **Memaparkan** fail dan struktur folder repositori anda
- **Kawasan editor**: **Menunjukkan** kandungan fail yang dipilih untuk diedit
- **Bar aktiviti**: **Memberikan** akses kepada ciri seperti Kawalan Sumber dan Sambungan
- **Bar status**: **Menunjukkan** status sambungan dan maklumat cawangan semasa

### Langkah 4: Bina Kandungan Resume Anda

Gantikan kandungan placeholder dalam `index.html` dengan struktur resume yang komprehensif. HTML ini menyediakan asas untuk penyampaian profesional kelayakan anda.

<details>
<summary><b>Struktur Resume HTML Lengkap</b></summary>

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

**Panduan penyesuaian:**
- **Gantikan** semua teks placeholder dengan maklumat sebenar anda
- **Sesuaikan** bahagian berdasarkan tahap pengalaman dan fokus kerjaya anda
- **Tambah** atau buang bahagian mengikut keperluan (contohnya, Sijil, Kerja Sukarela, Bahasa)
- **Sertakan** pautan ke profil dan projek sebenar anda

### Langkah 5: Cipta Fail Sokongan

Laman web profesional memerlukan struktur fail yang teratur. Cipta fail stylesheet CSS dan fail konfigurasi yang diperlukan untuk projek lengkap.

1. **Arahkan tetikus** ke nama folder projek anda di bar sisi Explorer
2. **Klik** ikon "New File" (📄+) yang muncul
3. **Cipta** fail-fail ini satu persatu:
   - `style.css` (untuk penggayaan dan susun atur)
   - `codeswing.json` (untuk konfigurasi sambungan pratonton)

**Mencipta fail CSS (`style.css`):**

<details>
<summary><b>Penggayaan CSS Profesional</b></summary>

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

**Mencipta fail konfigurasi (`codeswing.json`):**

```json
{
    "scripts": [],
    "styles": []
}
```

**Memahami ciri CSS:**
- **Menggunakan** CSS Grid untuk struktur susun atur responsif dan profesional
- **Melaksanakan** skema warna moden dengan tajuk bergradasi
- **Termasuk** kesan hover dan peralihan lancar untuk interaktiviti
- **Menyediakan** reka bentuk responsif yang berfungsi pada semua saiz peranti
- **Menambah** gaya mesra cetakan untuk penjanaan PDF

### Langkah 6: Pasang dan Konfigurasi Sambungan

Sambungan meningkatkan pengalaman pembangunan anda dengan menyediakan keupayaan pratonton langsung dan alat aliran kerja yang lebih baik. Sambungan CodeSwing sangat berguna untuk projek pembangunan web.

**Memasang Sambungan CodeSwing:**

1. **Klik** ikon Sambungan (🧩) di Bar Aktiviti
2. **Cari** "CodeSwing" dalam kotak carian marketplace
3. **Pilih** sambungan CodeSwing dari hasil carian
4. **Klik** butang biru "Install"

![Memasang sambungan CodeSwing](../../../../8-code-editor/images/install-extension.gif)

**Apa yang CodeSwing sediakan:**
- **Membolehkan** pratonton langsung laman web anda semasa anda mengedit
- **Memaparkan** perubahan secara langsung tanpa penyegaran manual
- **Menyokong** pelbagai jenis fail termasuk HTML, CSS, dan JavaScript
- **Menyediakan** pengalaman persekitaran pembangunan bersepadu

**Hasil segera selepas pemasangan:**
Sebaik sahaja CodeSwing dipasang, anda akan melihat pratonton langsung laman web resume anda muncul dalam editor. Ini membolehkan anda melihat dengan tepat bagaimana laman web anda kelihatan semasa anda membuat perubahan.

![Sambungan CodeSwing menunjukkan pratonton langsung](../../../../translated_images/ms/after-codeswing-extension-pb.0ebddddcf73b5509.png)

**Memahami antara muka yang dipertingkatkan:**
- **Paparan berpecah**: **Memaparkan** kod anda di satu sisi dan pratonton langsung di sisi lain
- **Kemas kini masa nyata**: **Mencerminkan** perubahan dengan segera semasa anda menaip
- **Pratonton interaktif**: **Membolehkan** anda menguji pautan dan interaksi
- **Simulasi mudah alih**: **Menyediakan** keupayaan ujian reka bentuk responsif

### Langkah 7: Kawalan Versi dan Penerbitan

Sekarang laman web resume anda telah siap, gunakan Git untuk menyimpan kerja anda dan membuatnya tersedia dalam talian.

**Komit perubahan anda:**

1. **Klik** ikon Kawalan Sumber (🌿) di Bar Aktiviti
2. **Semak** semua fail yang telah anda cipta dan ubah dalam bahagian "Changes"
3. **Stage** perubahan anda dengan mengklik ikon "+" di sebelah setiap fail
4. **Tulis** mesej komit deskriptif, seperti:
   - "Tambah laman web resume lengkap dengan reka bentuk responsif"
   - "Laksanakan penggayaan profesional dan struktur kandungan"
5. **Klik** tanda semak (✓) untuk komit dan tolak perubahan anda

**Contoh mesej komit yang berkesan:**
- "Tambah kandungan dan penggayaan resume profesional"
- "Laksanakan reka bentuk responsif untuk keserasian mudah alih"
- "Kemas kini maklumat hubungan dan pautan projek"

> 💡 **Tip Profesional**: Mesej komit yang baik membantu menjejaki evolusi projek anda dan menunjukkan perhatian terhadap perincian – kualiti yang dihargai oleh majikan.

**Mengakses laman web yang diterbitkan:**
Setelah dikomit, anda boleh kembali ke repositori GitHub anda menggunakan menu hamburger (☰) di sudut kiri atas. Laman web resume anda kini dikawal versi dan sedia untuk penerbitan atau perkongsian.

## Hasil dan Langkah Seterusnya

**Tahniah! 🎉** Anda telah berjaya mencipta laman web resume profesional menggunakan VSCode.dev. Projek anda menunjukkan:
**Kemahiran teknikal yang ditunjukkan:**
- **Pengurusan repositori**: Mencipta dan mengatur struktur projek lengkap
- **Pembangunan web**: Membina laman web responsif menggunakan HTML5 dan CSS3 moden
- **Kawalan versi**: Melaksanakan aliran kerja Git yang betul dengan komit bermakna
- **Kecekapan alat**: Menggunakan antara muka dan sistem sambungan VSCode.dev dengan berkesan

**Hasil profesional yang dicapai:**
- **Kehadiran dalam talian**: URL yang boleh dikongsi yang mempamerkan kelayakan anda
- **Format moden**: Alternatif interaktif kepada resume PDF tradisional
- **Kemahiran yang boleh ditunjukkan**: Bukti konkrit keupayaan pembangunan web anda
- **Kemas kini mudah**: Asas yang boleh anda terus tingkatkan dan sesuaikan

### Pilihan Penerbitan

Untuk membuat resume anda boleh diakses oleh majikan, pertimbangkan pilihan hosting ini:

**GitHub Pages (Disyorkan):**
1. Pergi ke Tetapan repositori anda di GitHub
2. Tatal ke bahagian "Pages"
3. Pilih "Deploy from a branch" dan pilih "main"
4. Laman web anda akan tersedia di `https://your-username.github.io/my-resume`

**Platform alternatif:**
- **Netlify**: Penerbitan automatik dengan domain khusus
- **Vercel**: Penerbitan pantas dengan ciri hosting moden
- **GitHub Codespaces**: Persekitaran pembangunan dengan pratonton terbina dalam

### Cadangan Penambahbaikan

Teruskan mengembangkan kemahiran anda dengan menambah ciri-ciri ini:

**Penambahbaikan teknikal:**
- **Interaktiviti JavaScript**: Tambahkan pengguliran lancar atau elemen interaktif
- **Tukar mod gelap**: Laksanakan penukaran tema untuk pilihan pengguna
- **Borang hubungan**: Aktifkan komunikasi langsung daripada bakal majikan
- **Pengoptimuman SEO**: Tambahkan tag meta dan data berstruktur untuk keterlihatan carian yang lebih baik

**Penambahbaikan kandungan:**
- **Portfolio projek**: Pautkan ke repositori GitHub dan demonstrasi langsung
- **Visualisasi kemahiran**: Cipta bar kemajuan atau sistem penilaian kemahiran
- **Bahagian testimoni**: Sertakan cadangan daripada rakan sekerja atau pengajar
- **Integrasi blog**: Tambahkan bahagian blog untuk mempamerkan perjalanan pembelajaran anda

## Cabaran Agen GitHub Copilot 🚀

Gunakan mod Agen untuk menyelesaikan cabaran berikut:

**Penerangan:** Tingkatkan laman web resume anda dengan ciri-ciri canggih yang menunjukkan keupayaan pembangunan web profesional dan prinsip reka bentuk moden.

**Arahan:** Berdasarkan laman web resume anda yang sedia ada, laksanakan ciri-ciri canggih ini:
1. Tambahkan togol tema gelap/terang dengan peralihan lancar
2. Cipta bahagian kemahiran interaktif dengan bar kemajuan animasi
3. Laksanakan borang hubungan dengan pengesahan borang
4. Tambahkan bahagian portfolio projek dengan kesan hover dan popup modal
5. Sertakan bahagian blog dengan sekurang-kurangnya 3 pos contoh tentang perjalanan pembelajaran anda
6. Optimumkan untuk SEO dengan tag meta yang betul, data berstruktur, dan prestasi
7. Terbitkan laman web yang dipertingkatkan menggunakan GitHub Pages atau Netlify
8. Dokumentasikan semua ciri baru dalam README.md anda dengan tangkapan skrin

Laman web anda yang dipertingkatkan harus menunjukkan penguasaan amalan pembangunan web moden termasuk reka bentuk responsif, interaktiviti JavaScript, dan aliran kerja penerbitan profesional.

## Cabaran Lanjutan

Bersedia untuk meningkatkan kemahiran anda? Cuba cabaran lanjutan ini:

**📱 Reka Bentuk Semula Berorientasikan Mudah Alih:** Bina semula laman web anda sepenuhnya menggunakan pendekatan berorientasikan mudah alih dengan CSS Grid dan Flexbox

**🔍 Pengoptimuman SEO:** Laksanakan SEO yang komprehensif termasuk tag meta, data berstruktur, dan pengoptimuman prestasi

**🌐 Sokongan Pelbagai Bahasa:** Tambahkan ciri antarabangsa untuk menyokong pelbagai bahasa

**📊 Integrasi Analitik:** Tambahkan Google Analytics untuk menjejaki penglibatan pelawat dan mengoptimumkan kandungan anda

**🚀 Pengoptimuman Prestasi:** Capai skor Lighthouse yang sempurna dalam semua kategori

## Kajian & Pembelajaran Kendiri

Luaskan pengetahuan anda dengan sumber-sumber ini:

**Ciri-ciri VSCode.dev Lanjutan:**
- [Dokumentasi VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) - Panduan lengkap untuk penyuntingan berasaskan web
- [GitHub Codespaces](https://docs.github.com/en/codespaces) - Persekitaran pembangunan awan

**Amalan Terbaik Pembangunan Web:**
- **Reka Bentuk Responsif**: Pelajari CSS Grid dan Flexbox untuk susun atur moden
- **Kebolehcapaian**: Pelajari garis panduan WCAG untuk reka bentuk web yang inklusif  
- **Prestasi**: Terokai alat seperti Lighthouse untuk pengoptimuman  
- **SEO**: Fahami asas pengoptimuman enjin carian  

**Pembangunan Profesional:**  
- **Pembinaan Portfolio**: Cipta projek tambahan untuk mempamerkan kemahiran yang pelbagai  
- **Sumber Terbuka**: Sumbang kepada projek sedia ada untuk mendapatkan pengalaman kolaborasi  
- **Rangkaian**: Kongsi laman web resume anda dalam komuniti pembangun untuk mendapatkan maklum balas  
- **Pembelajaran Berterusan**: Kekal terkini dengan trend dan teknologi pembangunan web  

---

**Langkah Seterusnya Anda:** Kongsi laman web resume anda dengan rakan, keluarga, atau mentor untuk mendapatkan maklum balas. Gunakan cadangan mereka untuk mengulangi dan memperbaiki reka bentuk anda. Ingat, projek ini bukan sekadar resume – ia adalah demonstrasi pertumbuhan anda sebagai pembangun web!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.