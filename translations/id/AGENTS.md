# AGENTS.md

## Gambaran Proyek

Ini adalah repositori kurikulum pendidikan untuk mengajarkan dasar-dasar pengembangan web kepada pemula. Kurikulum ini merupakan kursus komprehensif selama 12 minggu yang dikembangkan oleh Microsoft Cloud Advocates, dengan 24 pelajaran praktis yang mencakup JavaScript, CSS, dan HTML.

### Komponen Utama

- **Konten Pendidikan**: 24 pelajaran terstruktur yang diorganisasi ke dalam modul berbasis proyek
- **Proyek Praktis**: Terrarium, Permainan Mengetik, Ekstensi Browser, Permainan Luar Angkasa, Aplikasi Perbankan, Editor Kode, dan Asisten Chat AI
- **Kuis Interaktif**: 48 kuis dengan masing-masing 3 pertanyaan (penilaian sebelum/sesudah pelajaran)
- **Dukungan Multi-bahasa**: Terjemahan otomatis untuk lebih dari 50 bahasa melalui GitHub Actions
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk proyek AI)

### Arsitektur

- Repositori pendidikan dengan struktur berbasis pelajaran
- Setiap folder pelajaran berisi README, contoh kode, dan solusi
- Proyek mandiri dalam direktori terpisah (quiz-app, berbagai proyek pelajaran)
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)
- Dokumentasi disajikan melalui Docsify dan tersedia dalam format PDF

## Perintah Pengaturan

Repositori ini terutama untuk konsumsi konten pendidikan. Untuk bekerja dengan proyek tertentu:

### Pengaturan Repositori Utama

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Pengaturan Aplikasi Kuis (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API Proyek Bank (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Proyek Ekstensi Browser

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Proyek Permainan Luar Angkasa

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Proyek Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Alur Kerja Pengembangan

### Untuk Kontributor Konten

1. **Fork repositori** ke akun GitHub Anda
2. **Clone fork Anda** secara lokal
3. **Buat cabang baru** untuk perubahan Anda
4. Lakukan perubahan pada konten pelajaran atau contoh kode
5. Uji perubahan kode di direktori proyek terkait
6. Kirim pull request sesuai panduan kontribusi

### Untuk Pelajar

1. Fork atau clone repositori
2. Navigasikan ke direktori pelajaran secara berurutan
3. Baca file README untuk setiap pelajaran
4. Selesaikan kuis sebelum pelajaran di https://ff-quizzes.netlify.app/web/
5. Kerjakan contoh kode di folder pelajaran
6. Selesaikan tugas dan tantangan
7. Ikuti kuis setelah pelajaran

### Pengembangan Langsung

- **Dokumentasi**: Jalankan `docsify serve` di root (port 3000)
- **Aplikasi Kuis**: Jalankan `npm run dev` di direktori quiz-app
- **Proyek**: Gunakan ekstensi Live Server di VS Code untuk proyek HTML
- **Proyek API**: Jalankan `npm start` di direktori API terkait

## Instruksi Pengujian

### Pengujian Aplikasi Kuis

```bash
cd quiz-app
npm run lint       # Check for code style issues
npm run build      # Verify build succeeds
```

### Pengujian API Bank

```bash
cd 7-bank-project/api
npm run lint       # Check for code style issues
node server.js     # Verify server starts without errors
```

### Pendekatan Pengujian Umum

- Ini adalah repositori pendidikan tanpa pengujian otomatis yang komprehensif
- Pengujian manual berfokus pada:
  - Contoh kode berjalan tanpa kesalahan
  - Tautan dalam dokumentasi berfungsi dengan benar
  - Proyek berhasil dibangun
  - Contoh mengikuti praktik terbaik

### Pemeriksaan Sebelum Pengiriman

- Jalankan `npm run lint` di direktori dengan package.json
- Verifikasi tautan markdown valid
- Uji contoh kode di browser atau Node.js
- Pastikan terjemahan mempertahankan struktur yang benar

## Panduan Gaya Kode

### JavaScript

- Gunakan sintaks ES6+ modern
- Ikuti konfigurasi ESLint standar yang disediakan dalam proyek
- Gunakan nama variabel dan fungsi yang bermakna untuk kejelasan pendidikan
- Tambahkan komentar yang menjelaskan konsep untuk pelajar
- Format menggunakan Prettier jika dikonfigurasi

### HTML/CSS

- Elemen HTML5 semantik
- Prinsip desain responsif
- Konvensi penamaan kelas yang jelas
- Komentar yang menjelaskan teknik CSS untuk pelajar

### Python

- Panduan gaya PEP 8
- Contoh kode yang jelas dan edukatif
- Petunjuk tipe di mana berguna untuk pembelajaran

### Dokumentasi Markdown

- Hierarki judul yang jelas
- Blok kode dengan spesifikasi bahasa
- Tautan ke sumber daya tambahan
- Tangkapan layar dan gambar di direktori `images/`
- Teks alternatif untuk gambar demi aksesibilitas

### Organisasi File

- Pelajaran diberi nomor secara berurutan (1-getting-started-lessons, 2-js-basics, dll.)
- Setiap proyek memiliki direktori `solution/` dan sering kali `start/` atau `your-work/`
- Gambar disimpan di folder `images/` khusus pelajaran
- Terjemahan dalam struktur `translations/{language-code}/`

## Pembangunan dan Penerapan

### Penerapan Aplikasi Kuis (Azure Static Web Apps)

Aplikasi quiz-app dikonfigurasi untuk penerapan Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfigurasi Azure Static Web Apps:
- **Lokasi aplikasi**: `/quiz-app`
- **Lokasi output**: `dist`
- **Alur kerja**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Pembuatan PDF Dokumentasi

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Pembangunan Proyek Khusus

Setiap direktori proyek mungkin memiliki proses pembangunan sendiri:
- Proyek Vue: `npm run build` membuat bundel produksi
- Proyek statis: Tidak ada langkah pembangunan, langsung sajikan file

## Panduan Pull Request

### Format Judul

Gunakan judul yang jelas dan deskriptif yang menunjukkan area perubahan:
- `[Quiz-app] Tambahkan kuis baru untuk pelajaran X`
- `[Lesson-3] Perbaiki typo di proyek terrarium`
- `[Translation] Tambahkan terjemahan bahasa Spanyol untuk pelajaran 5`
- `[Docs] Perbarui instruksi pengaturan`

### Pemeriksaan yang Diperlukan

Sebelum mengirimkan PR:

1. **Kualitas Kode**:
   - Jalankan `npm run lint` di direktori proyek yang terpengaruh
   - Perbaiki semua kesalahan dan peringatan linting

2. **Verifikasi Pembangunan**:
   - Jalankan `npm run build` jika berlaku
   - Pastikan tidak ada kesalahan pembangunan

3. **Validasi Tautan**:
   - Uji semua tautan markdown
   - Verifikasi referensi gambar berfungsi

4. **Tinjauan Konten**:
   - Periksa ejaan dan tata bahasa
   - Pastikan contoh kode benar dan edukatif
   - Verifikasi terjemahan mempertahankan makna asli

### Persyaratan Kontribusi

- Setuju dengan Microsoft CLA (pemeriksaan otomatis pada PR pertama)
- Ikuti [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk panduan rinci
- Referensikan nomor masalah dalam deskripsi PR jika berlaku

### Proses Tinjauan

- PR ditinjau oleh pemelihara dan komunitas
- Kejelasan pendidikan diprioritaskan
- Contoh kode harus mengikuti praktik terbaik terkini
- Terjemahan ditinjau untuk akurasi dan kesesuaian budaya

## Sistem Terjemahan

### Terjemahan Otomatis

- Menggunakan GitHub Actions dengan alur kerja co-op-translator
- Menerjemahkan ke lebih dari 50 bahasa secara otomatis
- File sumber di direktori utama
- File terjemahan di direktori `translations/{language-code}/`

### Menambahkan Perbaikan Terjemahan Manual

1. Temukan file di `translations/{language-code}/`
2. Lakukan perbaikan sambil mempertahankan struktur
3. Pastikan contoh kode tetap berfungsi
4. Uji konten kuis yang dilokalkan

### Metadata Terjemahan

File terjemahan menyertakan header metadata:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Debugging dan Pemecahan Masalah

### Masalah Umum

**Aplikasi kuis gagal dimulai**:
- Periksa versi Node.js (disarankan v14+)
- Hapus `node_modules` dan `package-lock.json`, jalankan `npm install` lagi
- Periksa konflik port (default: Vite menggunakan port 5173)

**Server API tidak dapat dimulai**:
- Verifikasi versi Node.js memenuhi minimum (node >=10)
- Periksa apakah port sudah digunakan
- Pastikan semua dependensi diinstal dengan `npm install`

**Ekstensi browser tidak dapat dimuat**:
- Verifikasi manifest.json diformat dengan benar
- Periksa konsol browser untuk kesalahan
- Ikuti instruksi instalasi ekstensi spesifik browser

**Masalah proyek chat Python**:
- Pastikan paket OpenAI diinstal: `pip install openai`
- Verifikasi variabel lingkungan GITHUB_TOKEN diatur
- Periksa izin akses GitHub Models

**Docsify tidak menyajikan dokumen**:
- Instal docsify-cli secara global: `npm install -g docsify-cli`
- Jalankan dari direktori root repositori
- Periksa bahwa `docs/_sidebar.md` ada

### Tips Lingkungan Pengembangan

- Gunakan VS Code dengan ekstensi Live Server untuk proyek HTML
- Instal ekstensi ESLint dan Prettier untuk format yang konsisten
- Gunakan DevTools browser untuk debugging JavaScript
- Untuk proyek Vue, instal ekstensi Vue DevTools di browser

### Pertimbangan Performa

- Jumlah file terjemahan yang besar (50+ bahasa) membuat clone penuh menjadi besar
- Gunakan clone dangkal jika hanya bekerja pada konten: `git clone --depth 1`
- Kecualikan terjemahan dari pencarian saat bekerja pada konten bahasa Inggris
- Proses pembangunan mungkin lambat pada run pertama (npm install, Vite build)

## Pertimbangan Keamanan

### Variabel Lingkungan

- Kunci API tidak boleh dikomit ke repositori
- Gunakan file `.env` (sudah ada di `.gitignore`)
- Dokumentasikan variabel lingkungan yang diperlukan dalam README proyek

### Proyek Python

- Gunakan lingkungan virtual: `python -m venv venv`
- Jaga agar dependensi tetap diperbarui
- Token GitHub harus memiliki izin minimum yang diperlukan

### Akses GitHub Models

- Personal Access Tokens (PAT) diperlukan untuk GitHub Models
- Token harus disimpan sebagai variabel lingkungan
- Jangan pernah mengkomit token atau kredensial

## Catatan Tambahan

### Target Audiens

- Pemula lengkap dalam pengembangan web
- Siswa dan pembelajar mandiri
- Guru yang menggunakan kurikulum di kelas
- Konten dirancang untuk aksesibilitas dan pembangunan keterampilan bertahap

### Filosofi Pendidikan

- Pendekatan pembelajaran berbasis proyek
- Pemeriksaan pengetahuan yang sering (kuis)
- Latihan coding langsung
- Contoh aplikasi dunia nyata
- Fokus pada dasar-dasar sebelum framework

### Pemeliharaan Repositori

- Komunitas aktif pelajar dan kontributor
- Pembaruan rutin untuk dependensi dan konten
- Masalah dan diskusi dipantau oleh pemelihara
- Pembaruan terjemahan otomatis melalui GitHub Actions

### Sumber Daya Terkait

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)
- [Sumber daya Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) direkomendasikan untuk pelajar
- Kursus tambahan: Generative AI, Data Science, ML, IoT tersedia

### Bekerja dengan Proyek Tertentu

Untuk instruksi rinci tentang proyek individual, lihat file README di:
- `quiz-app/README.md` - Aplikasi kuis Vue 3
- `7-bank-project/README.md` - Aplikasi perbankan dengan autentikasi
- `5-browser-extension/README.md` - Pengembangan ekstensi browser
- `6-space-game/README.md` - Pengembangan permainan berbasis Canvas
- `9-chat-project/README.md` - Proyek asisten chat AI

### Struktur Monorepo

Meskipun bukan monorepo tradisional, repositori ini berisi beberapa proyek independen:
- Setiap pelajaran bersifat mandiri
- Proyek tidak berbagi dependensi
- Bekerja pada proyek individual tanpa memengaruhi yang lain
- Clone seluruh repositori untuk pengalaman kurikulum penuh

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.