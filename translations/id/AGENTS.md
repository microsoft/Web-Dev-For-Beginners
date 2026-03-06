# AGENTS.md

## Gambaran Proyek

Ini adalah repositori kurikulum pendidikan untuk mengajarkan dasar-dasar pengembangan web kepada pemula. Kurikulum ini merupakan kursus komprehensif selama 12 minggu yang dikembangkan oleh Microsoft Cloud Advocates, menampilkan 24 pelajaran praktis yang mencakup JavaScript, CSS, dan HTML.

### Komponen Utama

- **Konten Pendidikan**: 24 pelajaran terstruktur yang disusun dalam modul berbasis proyek
- **Proyek Praktis**: Terrarium, Permainan Mengetik, Ekstensi Browser, Permainan Luar Angkasa, Aplikasi Perbankan, Editor Kode, dan Asisten Chat AI
- **Kuis Interaktif**: 48 kuis dengan 3 pertanyaan masing-masing (penilaian sebelum/sesudah pelajaran)
- **Dukungan Multi-bahasa**: Terjemahan otomatis untuk lebih dari 50 bahasa melalui GitHub Actions
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk proyek AI)

### Arsitektur

- Repositori edukasi dengan struktur berbasis pelajaran
- Setiap folder pelajaran berisi README, contoh kode, dan solusi
- Proyek mandiri di direktori terpisah (quiz-app, berbagai proyek pelajaran)
- Sistem penerjemahan menggunakan GitHub Actions (co-op-translator)
- Dokumentasi disajikan via Docsify dan tersedia dalam format PDF

## Perintah Setup

Repositori ini terutama untuk konsumsi konten edukasi. Untuk bekerja dengan proyek tertentu:

### Setup Repositori Utama

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Setup Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Mulai server pengembangan
npm run build      # Bangun untuk produksi
npm run lint       # Jalankan ESLint
```

### API Proyek Bank (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Mulai server API
npm run lint       # Jalankan ESLint
npm run format     # Format dengan Prettier
```

### Proyek Ekstensi Browser

```bash
cd 5-browser-extension/solution
npm install
# Ikuti petunjuk pemuatan ekstensi spesifik browser
```

### Proyek Permainan Luar Angkasa

```bash
cd 6-space-game/solution
npm install
# Buka index.html di browser atau gunakan Live Server
```

### Proyek Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Atur variabel lingkungan GITHUB_TOKEN
python api.py
```

## Alur Kerja Pengembangan

### Untuk Kontributor Konten

1. **Fork repositori** ke akun GitHub Anda
2. **Clone fork Anda** secara lokal
3. **Buat cabang baru** untuk perubahan Anda
4. Lakukan perubahan pada konten pelajaran atau contoh kode
5. Uji setiap perubahan kode di direktori proyek terkait
6. Ajukan pull request sesuai panduan kontribusi

### Untuk Pembelajar

1. Fork atau clone repositori
2. Navigasi ke direktori pelajaran secara berurutan
3. Baca file README untuk setiap pelajaran
4. Selesaikan kuis sebelum pelajaran di https://ff-quizzes.netlify.app/web/
5. Kerjakan contoh kode dalam folder pelajaran
6. Selesaikan tugas dan tantangan
7. Ikuti kuis setelah pelajaran

### Pengembangan Langsung

- **Dokumentasi**: Jalankan `docsify serve` di root (port 3000)
- **Quiz App**: Jalankan `npm run dev` di direktori quiz-app
- **Proyek**: Gunakan ekstensi VS Code Live Server untuk proyek HTML
- **API Proyek**: Jalankan `npm start` di direktori API masing-masing

## Instruksi Pengujian

### Pengujian Quiz App

```bash
cd quiz-app
npm run lint       # Periksa masalah gaya kode
npm run build      # Verifikasi build berhasil
```

### Pengujian Bank API

```bash
cd 7-bank-project/api
npm run lint       # Periksa masalah gaya kode
node server.js     # Verifikasi server mulai tanpa kesalahan
```

### Pendekatan Pengujian Umum

- Ini adalah repositori edukasi tanpa pengujian otomatis lengkap
- Pengujian manual fokus pada:
  - Contoh kode berjalan tanpa error
  - Tautan di dokumentasi berfungsi dengan benar
  - Build proyek selesai dengan sukses
  - Contoh mengikuti praktik terbaik

### Pemeriksaan Pra-pengajuan

- Jalankan `npm run lint` di direktori dengan package.json
- Verifikasi tautan markdown valid
- Uji contoh kode di browser atau Node.js
- Periksa bahwa terjemahan mempertahankan struktur yang benar

## Pedoman Gaya Kode

### JavaScript

- Gunakan sintaks ES6+ modern
- Ikuti konfigurasi ESLint standar yang disediakan di proyek
- Gunakan nama variabel dan fungsi yang bermakna untuk kejelasan edukasi
- Tambahkan komentar menjelaskan konsep untuk pembelajar
- Format menggunakan Prettier jika dikonfigurasi

### HTML/CSS

- Elemen HTML5 semantik
- Prinsip desain responsif
- Konvensi penamaan kelas yang jelas
- Komentar menjelaskan teknik CSS untuk pembelajar

### Python

- Pedoman gaya PEP 8
- Contoh kode yang jelas dan edukatif
- Tipe hint jika membantu pembelajaran

### Dokumentasi Markdown

- Hierarki heading yang jelas
- Blok kode dengan spesifikasi bahasa
- Tautan ke sumber daya tambahan
- Tangkapan layar dan gambar di direktori `images/`
- Teks alternatif untuk gambar guna aksesibilitas

### Organisasi Berkas

- Pelajaran bernomor berurutan (1-getting-started-lessons, 2-js-basics, dll.)
- Setiap proyek memiliki direktori `solution/` dan sering `start/` atau `your-work/`
- Gambar disimpan di folder `images/` khusus pelajaran
- Terjemahan di struktur `translations/{kode-bahasa}/`

## Build dan Deployment

### Deployment Quiz App (Azure Static Web Apps)

quiz-app dikonfigurasi untuk deployment Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Membuat folder dist/
# Menerapkan melalui alur kerja GitHub Actions saat push ke main
```

Konfigurasi Azure Static Web Apps:
- **Lokasi aplikasi**: `/quiz-app`
- **Lokasi output**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generasi PDF Dokumentasi

```bash
npm install                    # Instal docsify-to-pdf
npm run convert               # Hasilkan PDF dari docs
```

### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Instal Docsify secara global
docsify serve                 # Jalankan di localhost:3000
```

### Build Proyek Spesifik

Setiap direktori proyek mungkin memiliki proses build sendiri:
- Proyek Vue: `npm run build` membuat bundle produksi
- Proyek statis: Tidak ada langkah build, sajikan file langsung

## Panduan Pull Request

### Format Judul

Gunakan judul yang jelas dan deskriptif menunjukkan area perubahan:
- `[Quiz-app] Tambahkan kuis baru untuk pelajaran X`
- `[Lesson-3] Perbaiki typo di proyek terrarium`
- `[Translation] Tambahkan terjemahan Spanyol untuk pelajaran 5`
- `[Docs] Perbarui instruksi setup`

### Pemeriksaan Wajib

Sebelum mengajukan PR:

1. **Kualitas Kode**:
   - Jalankan `npm run lint` di direktori proyek terkait
   - Perbaiki semua error dan peringatan linting

2. **Verifikasi Build**:
   - Jalankan `npm run build` jika berlaku
   - Pastikan tidak ada error build

3. **Validasi Tautan**:
   - Uji semua tautan markdown
   - Verifikasi referensi gambar berfungsi

4. **Review Konten**:
   - Koreksi ejaan dan tata bahasa
   - Pastikan contoh kode benar dan edukatif
   - Verifikasi terjemahan mempertahankan makna asli

### Persyaratan Kontribusi

- Setujui Microsoft CLA (pemeriksaan otomatis di PR pertama)
- Ikuti [Kode Etik Open Source Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk panduan detail
- Cantumkan nomor isu di deskripsi PR jika berlaku

### Proses Review

- PR akan direview oleh pemelihara dan komunitas
- Kejelasan edukasi diutamakan
- Contoh kode harus mengikuti praktik terbaik saat ini
- Terjemahan direview untuk keakuratan dan kesesuaian budaya

## Sistem Terjemahan

### Terjemahan Otomatis

- Menggunakan GitHub Actions dengan workflow co-op-translator
- Menerjemahkan ke 50+ bahasa secara otomatis
- Berkas sumber di direktori utama
- Berkas terjemahan di direktori `translations/{kode-bahasa}/`

### Menambahkan Perbaikan Terjemahan Manual

1. Temukan berkas di `translations/{kode-bahasa}/`
2. Lakukan perbaikan sambil mempertahankan struktur
3. Pastikan contoh kode tetap berfungsi
4. Uji konten kuis yang telah dilokalisasi

### Metadata Terjemahan

Berkas terjemahan menyertakan header metadata:
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

**Quiz app gagal mulai**:
- Periksa versi Node.js (disarankan v14+)
- Hapus `node_modules` dan `package-lock.json`, jalankan `npm install` kembali
- Periksa konflik port (default: Vite menggunakan port 5173)

**Server API tidak mulai**:
- Pastikan versi Node.js memenuhi minimal (node >=10)
- Cek apakah port sudah digunakan
- Pastikan semua dependensi terpasang dengan `npm install`

**Ekstensi browser tidak dimuat**:
- Pastikan manifest.json diformat dengan benar
- Periksa konsol browser untuk error
- Ikuti instruksi instalasi ekstensi khusus browser

**Masalah proyek chat Python**:
- Pastikan paket OpenAI terpasang: `pip install openai`
- Pastikan variabel lingkungan GITHUB_TOKEN diatur
- Periksa izin akses GitHub Models

**Docsify tidak menyajikan docs**:
- Pasang docsify-cli secara global: `npm install -g docsify-cli`
- Jalankan dari direktori root repositori
- Pastikan `docs/_sidebar.md` ada

### Tips Lingkungan Pengembangan

- Gunakan VS Code dengan ekstensi Live Server untuk proyek HTML
- Pasang ekstensi ESLint dan Prettier untuk format konsisten
- Gunakan DevTools browser untuk debugging JavaScript
- Untuk proyek Vue, pasang ekstensi Vue DevTools di browser

### Pertimbangan Performa

- Banyak berkas terjemahan (50+ bahasa) membuat clone penuh besar
- Gunakan clone dangkal jika hanya mengerjakan konten: `git clone --depth 1`
- Kecualikan terjemahan dari pencarian saat mengerjakan konten bahasa Inggris
- Proses build mungkin lambat pada run pertama (npm install, build Vite)

## Pertimbangan Keamanan

### Variabel Lingkungan

- Kunci API jangan pernah di-commit ke repositori
- Gunakan berkas `.env` (sudah ada di `.gitignore`)
- Dokumentasikan variabel lingkungan yang dibutuhkan di README proyek

### Proyek Python

- Gunakan lingkungan virtual: `python -m venv venv`
- Perbarui dependensi secara rutin
- Token GitHub harus memiliki izin minimal yang diperlukan

### Akses GitHub Models

- Personal Access Tokens (PAT) diperlukan untuk GitHub Models
- Token disimpan sebagai variabel lingkungan
- Jangan pernah commit token atau kredensial

## Catatan Tambahan

### Sasaran Audiens

- Pemula lengkap dalam pengembangan web
- Pelajar dan pembelajar mandiri
- Guru yang menggunakan kurikulum di kelas
- Konten dirancang untuk aksesibilitas dan pembangunan keterampilan bertahap

### Filosofi Pendidikan

- Pendekatan pembelajaran berbasis proyek
- Pemeriksaan pengetahuan secara berkala (kuis)
- Latihan coding langsung
- Contoh aplikasi dunia nyata
- Fokus pada dasar sebelum framework

### Pemeliharaan Repositori

- Komunitas pembelajar dan kontributor aktif
- Pembaruan rutin pada dependensi dan konten
- Isu dan diskusi dipantau oleh pemelihara
- Pembaruan terjemahan otomatis via GitHub Actions

### Sumber Daya Terkait

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)
- [Sumber Daya Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) direkomendasikan untuk pembelajar
- Kursus tambahan: AI Generatif, Data Science, ML, kurikulum IoT tersedia

### Bekerja dengan Proyek Spesifik

Untuk instruksi rinci tentang proyek individual, lihat README di:
- `quiz-app/README.md` - aplikasi kuis Vue 3
- `7-bank-project/README.md` - aplikasi perbankan dengan autentikasi
- `5-browser-extension/README.md` - pengembangan ekstensi browser
- `6-space-game/README.md` - pengembangan game berbasis canvas
- `9-chat-project/README.md` - proyek asisten chat AI

### Struktur Monorepo

Meskipun bukan monorepo tradisional, repositori ini berisi beberapa proyek independen:
- Setiap pelajaran berdiri sendiri
- Proyek tidak berbagi dependensi
- Kerjakan proyek individual tanpa memengaruhi yang lain
- Clone seluruh repo untuk pengalaman kurikulum lengkap

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk akurasi, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang sahih. Untuk informasi penting, disarankan menggunakan terjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang salah yang timbul dari penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->