# AGENTS.md

## Gambaran Proyek

Ini adalah repositori kurikulum edukasi untuk mengajarkan dasar-dasar pengembangan web kepada pemula. Kurikulum ini adalah kursus komprehensif selama 12 minggu yang dikembangkan oleh Microsoft Cloud Advocates, menampilkan 24 pelajaran praktis yang mencakup JavaScript, CSS, dan HTML.

### Komponen Utama

- **Konten Edukasi**: 24 pelajaran terstruktur yang diorganisir dalam modul berbasis proyek
- **Proyek Praktis**: Terrarium, Typing Game, Ekstensi Browser, Space Game, Aplikasi Perbankan, Editor Kode, dan Asisten Chat AI
- **Kuis Interaktif**: 48 kuis dengan 3 pertanyaan setiap kuis (penilaian sebelum/sesudah pelajaran)
- **Dukungan Multi-bahasa**: Terjemahan otomatis untuk lebih dari 50 bahasa melalui GitHub Actions
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk proyek AI)

### Arsitektur

- Repositori edukasi dengan struktur berbasis pelajaran
- Setiap folder pelajaran berisi README, contoh kode, dan solusi
- Proyek mandiri dalam direktori terpisah (quiz-app, berbagai proyek pelajaran)
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)
- Dokumentasi disajikan lewat Docsify dan tersedia sebagai PDF

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
# Ikuti instruksi pemuatan ekstensi khusus browser
```

### Proyek Space Game

```bash
cd 6-space-game/solution
npm install
# Buka index.html di peramban atau gunakan Live Server
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
2. **Clone fork** secara lokal
3. **Buat branch baru** untuk perubahan Anda
4. Ubah konten pelajaran atau contoh kode
5. Uji perubahan kode dalam direktori proyek terkait
6. Ajukan pull request sesuai panduan kontribusi

### Untuk Pembelajar

1. Fork atau clone repositori
2. Masuk ke direktori pelajaran secara berurutan
3. Baca file README untuk setiap pelajaran
4. Lengkapi kuis sebelum pelajaran di https://ff-quizzes.netlify.app/web/
5. Kerjakan contoh kode di folder pelajaran
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
npm run build      # Verifikasi build berhasil
```

### Pengujian Bank API

```bash
cd 7-bank-project/api
npm run lint       # Periksa masalah gaya kode
node server.js     # Verifikasi server berjalan tanpa kesalahan
```

### Pendekatan Pengujian Umum

- Ini adalah repositori edukasi tanpa pengujian otomatis menyeluruh
- Pengujian manual fokus pada:
  - Contoh kode berjalan tanpa error
  - Tautan di dokumentasi berfungsi dengan benar
  - Build proyek berhasil tanpa error
  - Contoh mengikuti praktik terbaik

### Pemeriksaan Sebelum Pengiriman

- Jalankan `npm run lint` di direktori yang memiliki package.json
- Verifikasi tautan markdown valid
- Uji contoh kode dalam browser atau Node.js
- Periksa struktur terjemahan terjaga dengan baik

## Pedoman Gaya Kode

### JavaScript

- Gunakan sintaks ES6+ modern
- Ikuti konfigurasi ESLint standar dalam proyek
- Gunakan nama variabel dan fungsi yang bermakna untuk kejelasan edukasi
- Tambahkan komentar yang menjelaskan konsep untuk pembelajar
- Format menggunakan Prettier jika dikonfigurasi

### HTML/CSS

- Elemen HTML5 semantik
- Prinsip desain responsif
- Konvensi penamaan class yang jelas
- Komentar yang menjelaskan teknik CSS untuk pembelajar

### Python

- Pedoman gaya PEP 8
- Contoh kode yang jelas dan edukatif
- Petunjuk tipe (type hints) jika membantu pembelajaran

### Dokumentasi Markdown

- Hirarki judul yang jelas
- Blok kode dengan spesifikasi bahasa
- Tautan ke sumber tambahan
- Screenshot dan gambar di direktori `images/`
- Teks alt untuk gambar demi aksesibilitas

### Organisasi Berkas

- Pelajaran bernomor secara berurutan (1-getting-started-lessons, 2-js-basics, dll.)
- Setiap proyek memiliki direktori `solution/` dan sering `start/` atau `your-work/`
- Gambar disimpan dalam folder `images/` khusus pelajaran
- Terjemahan disimpan dalam struktur `translations/{kode-bahasa}/`

## Build dan Deployment

### Deployment Quiz App (Azure Static Web Apps)

Quiz-app dikonfigurasi untuk deployment Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Membuat folder dist/
# Mendistribusikan melalui alur kerja GitHub Actions saat push ke main
```

Konfigurasi Azure Static Web Apps:
- **App location**: `/quiz-app`
- **Output location**: `dist`
- **Workflow**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Generasi PDF Dokumentasi

```bash
npm install                    # Instal docsify-to-pdf
npm run convert               # Hasilkan PDF dari docs
```

### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Pasang Docsify secara global
docsify serve                 # Jalankan di localhost:3000
```

### Build Khusus Proyek

Setiap direktori proyek mungkin memiliki proses build sendiri:
- Proyek Vue: `npm run build` membuat bundle produksi
- Proyek statis: Tidak ada langkah build, langsung sajikan file

## Pedoman Pull Request

### Format Judul

Gunakan judul yang jelas dan deskriptif menunjukkan area perubahan:
- `[Quiz-app] Tambah kuis baru untuk pelajaran X`
- `[Lesson-3] Perbaiki typo pada proyek terrarium`
- `[Translation] Tambah terjemahan Spanyol untuk pelajaran 5`
- `[Docs] Perbarui instruksi setup`

### Pemeriksaan Wajib

Sebelum mengirim PR:

1. **Kualitas Kode**:
   - Jalankan `npm run lint` di direktori proyek terkait
   - Perbaiki semua error dan peringatan lint

2. **Verifikasi Build**:
   - Jalankan `npm run build` jika perlu
   - Pastikan tidak ada error build

3. **Validasi Tautan**:
   - Uji semua tautan markdown
   - Periksa referensi gambar berfungsi

4. **Review Konten**:
   - Proofreading ejaan dan tata bahasa
   - Pastikan contoh kode benar dan edukatif
   - Verifikasi terjemahan sesuai makna asli

### Persyaratan Kontribusi

- Setujui Microsoft CLA (cek otomatis pada PR pertama)
- Ikuti [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk panduan lengkap
- Referensikan nomor isu dalam deskripsi PR jika ada

### Proses Review

- PR direview oleh maintainer dan komunitas
- Kejelasan edukasi menjadi prioritas
- Contoh kode harus mengikuti praktik terbaik terkini
- Terjemahan diperiksa akurasi dan kesesuaian budaya

## Sistem Terjemahan

### Terjemahan Otomatis

- Menggunakan GitHub Actions dengan workflow co-op-translator
- Menerjemahkan secara otomatis ke lebih dari 50 bahasa
- File sumber ada di direktori utama
- File terjemahan ada di direktori `translations/{kode-bahasa}/`

### Menambah Perbaikan Terjemahan Manual

1. Cari berkas di `translations/{kode-bahasa}/`
2. Buat perbaikan sambil menjaga struktur
3. Pastikan contoh kode tetap berfungsi
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

**Quiz app gagal mulai**:
- Periksa versi Node.js (v14+ disarankan)
- Hapus `node_modules` dan `package-lock.json`, jalankan `npm install` lagi
- Cek konflik port (default: Vite pakai port 5173)

**Server API tidak mau mulai**:
- Pastikan versi Node.js minimal (node >=10)
- Periksa apakah port sudah dipakai
- Pastikan semua dependensi terinstal dengan `npm install`

**Ekstensi browser tidak memuat**:
- Pastikan manifest.json terformat dengan benar
- Cek konsol browser untuk error
- Ikuti instruksi pemasangan ekstensi sesuai browser

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
- Pakai DevTools browser untuk debugging JavaScript
- Untuk proyek Vue, instal ekstensi Vue DevTools browser

### Pertimbangan Performa

- Jumlah file terjemahan besar (50+ bahasa) menyebabkan clone penuh besar
- Gunakan shallow clone jika hanya bekerja pada konten: `git clone --depth 1`
- Kecualikan terjemahan dari pencarian saat bekerja pada konten bahasa Inggris
- Proses build mungkin lambat saat pertama kali dijalankan (npm install, build Vite)

## Pertimbangan Keamanan

### Variabel Lingkungan

- Kunci API tidak boleh di-commit ke repositori
- Gunakan file `.env` (sudah ditambahkan di `.gitignore`)
- Dokumentasikan variabel lingkungan yang diperlukan di README proyek

### Proyek Python

- Gunakan virtual environment: `python -m venv venv`
- Jaga dependensi selalu diperbarui
- Token GitHub harus memiliki izin minimal yang diperlukan

### Akses GitHub Models

- Personal Access Tokens (PAT) diperlukan untuk GitHub Models
- Token harus disimpan sebagai variabel lingkungan
- Jangan pernah commit token atau kredensial

## Catatan Tambahan

### Audiens Sasaran

- Pemula lengkap dalam pengembangan web
- Pelajar dan pembelajar mandiri
- Guru yang menggunakan kurikulum di kelas
- Konten didesain untuk aksesibilitas dan pembangunan keterampilan bertahap

### Filosofi Pendidikan

- Pendekatan pembelajaran berbasis proyek
- Pemeriksaan pengetahuan yang sering (kuis)
- Latihan pengkodean langsung
- Contoh aplikasi dunia nyata
- Fokus pada dasar sebelum framework

### Pemeliharaan Repositori

- Komunitas aktif pembelajar dan kontributor
- Pemutakhiran rutin pada dependensi dan konten
- Isu dan diskusi dipantau oleh maintainer
- Pembaruan terjemahan otomatis lewat GitHub Actions

### Sumber Terkait

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) direkomendasikan untuk pembelajar
- Kursus tambahan: Kurikulum Generative AI, Data Science, ML, IoT tersedia

### Bekerja dengan Proyek Spesifik

Untuk instruksi detail pada proyek individu, lihat file README di:
- `quiz-app/README.md` - aplikasi kuis Vue 3
- `7-bank-project/README.md` - aplikasi perbankan dengan autentikasi
- `5-browser-extension/README.md` - pengembangan ekstensi browser
- `6-space-game/README.md` - pengembangan game berbasis Canvas
- `9-chat-project/README.md` - proyek asisten chat AI

### Struktur Monorepo

Meskipun bukan monorepo tradisional, repositori ini berisi banyak proyek independen:
- Setiap pelajaran berdiri sendiri
- Proyek tidak berbagi dependensi
- Kerjakan proyek individual tanpa memengaruhi yang lain
- Clone seluruh repo untuk pengalaman kurikulum lengkap

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk mencapai akurasi, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang sah. Untuk informasi penting, disarankan menggunakan terjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas segala kesalahpahaman atau salah tafsir yang timbul dari penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->