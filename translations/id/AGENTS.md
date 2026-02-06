# AGENTS.md

## Gambaran Proyek

Ini adalah repositori kurikulum edukasi untuk mengajarkan dasar-dasar pengembangan web kepada pemula. Kurikulum ini merupakan kursus komprehensif selama 12 minggu yang dikembangkan oleh Microsoft Cloud Advocates, menampilkan 24 pelajaran langsung yang mencakup JavaScript, CSS, dan HTML.

### Komponen Utama

- **Konten Edukasi**: 24 pelajaran terstruktur yang diatur dalam modul berbasis proyek  
- **Proyek Praktis**: Terrarium, Game Mengetik, Ekstensi Browser, Game Luar Angkasa, Aplikasi Perbankan, Editor Kode, dan Asisten Chat AI  
- **Kuis Interaktif**: 48 kuis dengan 3 pertanyaan setiap kuis (evaluasi sebelum/setelah pelajaran)  
- **Dukungan Multi-bahasa**: Terjemahan otomatis untuk 50+ bahasa melalui GitHub Actions  
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk proyek AI)  

### Arsitektur

- Repositori edukasi dengan struktur berbasis pelajaran  
- Setiap folder pelajaran berisi README, contoh kode, dan solusi  
- Proyek mandiri dalam direktori terpisah (quiz-app, berbagai proyek pelajaran)  
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)  
- Dokumentasi disajikan melalui Docsify dan tersedia dalam format PDF  

## Perintah Setup

Repositori ini terutama untuk konsumsi konten edukasi. Untuk bekerja dengan proyek spesifik:

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
# Ikuti petunjuk pemuatan ekstensi khusus browser
```

### Proyek Game Luar Angkasa

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
5. Uji perubahan kode di direktori proyek terkait  
6. Kirim pull request sesuai panduan kontribusi  

### Untuk Pembelajar

1. Fork atau clone repositori  
2. Navigasi ke direktori pelajaran secara berurutan  
3. Baca file README pada setiap pelajaran  
4. Selesaikan kuis sebelum pelajaran di https://ff-quizzes.netlify.app/web/  
5. Kerjakan contoh kode dalam folder pelajaran  
6. Selesaikan tugas dan tantangan  
7. Ikuti kuis setelah pelajaran  

### Pengembangan Langsung

- **Dokumentasi**: Jalankan `docsify serve` di root (port 3000)  
- **Quiz App**: Jalankan `npm run dev` di direktori quiz-app  
- **Proyek**: Gunakan ekstensi VS Code Live Server untuk proyek HTML  
- **Proyek API**: Jalankan `npm start` di direktori API terkait  

## Instruksi Pengujian

### Pengujian Quiz App

```bash
cd quiz-app
npm run lint       # Periksa masalah gaya kode
npm run build      # Verifikasi pembangunan berhasil
```

### Pengujian Bank API

```bash
cd 7-bank-project/api
npm run lint       # Periksa masalah gaya kode
node server.js     # Verifikasi server mulai tanpa kesalahan
```

### Pendekatan Pengujian Umum

- Ini adalah repositori edukasi tanpa pengujian otomatis menyeluruh  
- Pengujian manual fokus pada:  
  - Contoh kode berjalan tanpa error  
  - Tautan dalam dokumentasi berfungsi dengan benar  
  - Build proyek berhasil dengan sukses  
  - Contoh mengikuti praktik terbaik  

### Pemeriksaan Sebelum Pengiriman

- Jalankan `npm run lint` di direktori dengan package.json  
- Verifikasi tautan markdown valid  
- Uji contoh kode di browser atau Node.js  
- Periksa bahwa terjemahan mempertahankan struktur yang benar  

## Pedoman Gaya Kode

### JavaScript

- Gunakan sintaks ES6+ modern  
- Ikuti konfigurasi ESLint standar yang disediakan dalam proyek  
- Gunakan nama variabel dan fungsi yang bermakna untuk kejelasan edukasi  
- Tambahkan komentar yang menjelaskan konsep untuk pembelajar  
- Format menggunakan Prettier jika dikonfigurasi  

### HTML/CSS

- Elemen HTML5 semantik  
- Prinsip desain responsif  
- Konvensi penamaan kelas yang jelas  
- Komentar yang menjelaskan teknik CSS untuk pembelajar  

### Python

- Pedoman gaya PEP 8  
- Contoh kode yang jelas dan edukatif  
- Hint tipe jika membantu pembelajaran  

### Dokumentasi Markdown

- Hirarki judul yang jelas  
- Blok kode dengan spesifikasi bahasa  
- Tautan ke sumber daya tambahan  
- Screenshot dan gambar di direktori `images/`  
- Teks alt untuk gambar agar aksesibilitas  

### Organisasi File

- Pelajaran diberi nomor berurutan (1-getting-started-lessons, 2-js-basics, dll.)  
- Setiap proyek memiliki direktori `solution/` dan sering `start/` atau `your-work/`  
- Gambar disimpan dalam folder `images/` spesifik pelajaran  
- Terjemahan dalam struktur `translations/{kode-bahasa}/`  

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

### Pembuatan PDF Dokumentasi

```bash
npm install                    # Instal docsify-to-pdf
npm run convert               # Menghasilkan PDF dari docs
```

### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Instal Docsify secara global
docsify serve                 # Sajikan di localhost:3000
```

### Build Spesifik Proyek

Setiap direktori proyek dapat memiliki proses build sendiri:  
- Proyek Vue: `npm run build` menghasilkan bundel produksi  
- Proyek statis: Tidak ada langkah build, sajikan file secara langsung  

## Panduan Pull Request

### Format Judul

Gunakan judul yang jelas dan deskriptif yang menunjukkan area perubahan:  
- `[Quiz-app] Tambah kuis baru untuk pelajaran X`  
- `[Lesson-3] Perbaiki typo di proyek terrarium`  
- `[Translation] Tambah terjemahan Spanyol untuk pelajaran 5`  
- `[Docs] Perbarui instruksi setup`  

### Pemeriksaan yang Diperlukan

Sebelum mengirim PR:

1. **Kualitas Kode**:  
   - Jalankan `npm run lint` di direktori proyek terkait  
   - Perbaiki semua error dan peringatan lint  

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

- Setujui CLA Microsoft (cek otomatis pada PR pertama)  
- Ikuti [Kode Etik Sumber Terbuka Microsoft](https://opensource.microsoft.com/codeofconduct/)  
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk panduan rinci  
- Referensikan nomor isu dalam deskripsi PR jika berlaku  

### Proses Review

- PR direview oleh pemelihara dan komunitas  
- Kejelasan edukasi menjadi prioritas  
- Contoh kode harus mengikuti praktik terbaik saat ini  
- Terjemahan direview untuk akurasi dan kesesuaian budaya  

## Sistem Terjemahan

### Terjemahan Otomatis

- Menggunakan GitHub Actions dengan workflow co-op-translator  
- Menerjemahkan ke 50+ bahasa secara otomatis  
- File sumber di direktori utama  
- File terjemahan di direktori `translations/{kode-bahasa}/`  

### Menambahkan Peningkatan Terjemahan Manual

1. Temukan file di `translations/{kode-bahasa}/`  
2. Lakukan perbaikan sambil mempertahankan struktur  
3. Pastikan contoh kode tetap fungsional  
4. Uji konten kuis yang telah dilokalkan  

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

**Quiz app gagal dimulai**:  
- Periksa versi Node.js (disarankan v14+)  
- Hapus `node_modules` dan `package-lock.json`, jalankan kembali `npm install`  
- Periksa konflik port (default: Vite menggunakan port 5173)  

**Server API tidak mau mulai**:  
- Verifikasi versi Node.js memenuhi minimum (node >=10)  
- Periksa apakah port sudah digunakan  
- Pastikan semua dependensi terinstal dengan `npm install`  

**Ekstensi browser tidak memuat**:  
- Verifikasi manifest.json formatnya benar  
- Periksa console browser untuk error  
- Ikuti instruksi pemasangan ekstensi khusus browser  

**Masalah proyek chat Python**:  
- Pastikan paket OpenAI terinstal: `pip install openai`  
- Verifikasi variabel lingkungan GITHUB_TOKEN diset  
- Periksa izin akses GitHub Models  

**Docsify tidak menyajikan dokumen**:  
- Instal docsify-cli secara global: `npm install -g docsify-cli`  
- Jalankan dari direktori root repositori  
- Pastikan `docs/_sidebar.md` ada  

### Tips Lingkungan Pengembangan

- Gunakan VS Code dengan ekstensi Live Server untuk proyek HTML  
- Instal ekstensi ESLint dan Prettier untuk format konsisten  
- Gunakan DevTools browser untuk debugging JavaScript  
- Untuk proyek Vue, instal ekstensi Vue DevTools browser  

### Pertimbangan Performa

- Banyak file terjemahan (50+ bahasa) membuat kloning penuh besar  
- Gunakan clone dangkal jika hanya mengerjakan konten: `git clone --depth 1`  
- Kecualikan terjemahan dari pencarian saat mengerjakan konten Bahasa Inggris  
- Proses build mungkin lambat pada jalankan pertama (npm install, build Vite)  

## Pertimbangan Keamanan

### Variabel Lingkungan

- Kunci API jangan pernah di-commit ke repositori  
- Gunakan file `.env` (sudah dalam `.gitignore`)  
- Dokumentasikan variabel lingkungan yang diperlukan di README proyek  

### Proyek Python

- Gunakan virtual environment: `python -m venv venv`  
- Pertahankan dependensi tetap terbaru  
- Token GitHub harus dengan izin minimal diperlukan  

### Akses GitHub Models

- Personal Access Tokens (PAT) diperlukan untuk GitHub Models  
- Token harus disimpan sebagai variabel lingkungan  
- Jangan pernah commit token atau kredensial  

## Catatan Tambahan

### Target Audiens

- Pemula lengkap dalam pengembangan web  
- Siswa dan pembelajar mandiri  
- Guru yang menggunakan kurikulum di kelas  
- Konten dirancang untuk aksesibilitas dan pembangunan keterampilan bertahap  

### Filosofi Edukasi

- Pendekatan pembelajaran berbasis proyek  
- Pemeriksaan pengetahuan yang sering (kuis)  
- Latihan coding langsung  
- Contoh aplikasi dunia nyata  
- Fokus pada dasar sebelum framework  

### Pemeliharaan Repositori

- Komunitas pembelajar dan kontributor yang aktif  
- Pembaruan rutin pada dependensi dan konten  
- Isu dan diskusi dipantau oleh pemelihara  
- Pembaruan terjemahan otomatis melalui GitHub Actions  

### Sumber Daya Terkait

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)  
- [Sumber Daya Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) direkomendasikan untuk pembelajar  
- Kursus tambahan: AI Generatif, Data Science, ML, kurikulum IoT tersedia  

### Bekerja dengan Proyek Spesifik

Untuk instruksi mendetail pada proyek individual, lihat file README di:  
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
Dokumen ini telah diterjemahkan menggunakan layanan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan terjemahan yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang sah dan utama. Untuk informasi penting, disarankan menggunakan terjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->