# AGENTS.md

## Gambaran Projek

Ini adalah repositori kurikulum pendidikan untuk mengajar asas pengembangan web kepada pemula. Kurikulum ini adalah kursus komprehensif selama 12 minggu yang dibangunkan oleh Microsoft Cloud Advocates, menampilkan 24 pelajaran praktikal yang merangkumi JavaScript, CSS, dan HTML.

### Komponen Utama

- **Kandungan Pendidikan**: 24 pelajaran terstruktur yang disusun dalam modul berasaskan projek
- **Projek Praktikal**: Terrarium, Permainan Mengetik, Sambungan Penyemak Imbas, Permainan Angkasa, Aplikasi Perbankan, Penyunting Kod, dan Pembantu Sembang AI
- **Kuis Interaktif**: 48 kuiz dengan 3 soalan setiap satu (penilaian pra/pasca pelajaran)
- **Sokongan Pelbagai Bahasa**: Terjemahan automatik untuk lebih 50 bahasa melalui GitHub Actions
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk projek AI)

### Seni Bina

- Repositori pendidikan dengan struktur berasaskan pelajaran
- Setiap folder pelajaran mengandungi README, contoh kod, dan penyelesaian
- Projek berdiri sendiri dalam direktori berasingan (quiz-app, pelbagai projek pelajaran)
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)
- Dokumentasi disediakan melalui Docsify dan tersedia sebagai PDF

## Perintah Persediaan

Repositori ini terutamanya untuk penggunaan kandungan pendidikan. Untuk bekerja dengan projek tertentu:

### Persediaan Repositori Utama

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Persediaan Aplikasi Kuis (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Mulakan pelayan pembangunan
npm run build      # Bina untuk produksi
npm run lint       # Jalankan ESLint
```

### API Projek Bank (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Mula pelayan API
npm run lint       # Jalankan ESLint
npm run format     # Format dengan Prettier
```

### Projek Sambungan Penyemak Imbas

```bash
cd 5-browser-extension/solution
npm install
# Ikuti arahan pemuatan sambungan khusus pelayar
```

### Projek Permainan Angkasa

```bash
cd 6-space-game/solution
npm install
# Buka index.html dalam pelayar atau gunakan Live Server
```

### Projek Sembang (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Tetapkan pembolehubah persekitaran GITHUB_TOKEN
python api.py
```

## Aliran Kerja Pembangunan

### Untuk Penyumbang Kandungan

1. **Fork repositori** ke akaun GitHub anda
2. **Clone fork anda** ke mesin tempatan
3. **Buat cabang baru** untuk perubahan anda
4. Buat perubahan pada kandungan pelajaran atau contoh kod
5. Uji sebarang perubahan kod dalam direktori projek berkaitan
6. Hantar pull request mengikut garis panduan sumbangan

### Untuk Pelajar

1. Fork atau clone repositori
2. Navigasi ke direktori pelajaran secara berurutan
3. Baca fail README untuk setiap pelajaran
4. Lengkapkan kuiz pra-pelajaran di https://ff-quizzes.netlify.app/web/
5. Selesaikan contoh kod dalam folder pelajaran
6. Selesaikan tugasan dan cabaran
7. Ambil kuiz pasca-pelajaran

### Pembangunan Secara Langsung

- **Dokumentasi**: Jalankan `docsify serve` di root (port 3000)
- **Aplikasi Kuis**: Jalankan `npm run dev` dalam direktori quiz-app
- **Projek**: Gunakan sambungan VS Code Live Server untuk projek HTML
- **Projek API**: Jalankan `npm start` dalam direktori API masing-masing

## Arahan Ujian

### Ujian Aplikasi Kuis

```bash
cd quiz-app
npm run lint       # Semak untuk isu gaya kod
npm run build      # Sahkan binaan berjaya
```

### Ujian API Bank

```bash
cd 7-bank-project/api
npm run lint       # Semak masalah gaya kod
node server.js     # Sahkan pelayan bermula tanpa ralat
```

### Pendekatan Ujian Umum

- Ini adalah repositori pendidikan tanpa ujian automatik menyeluruh
- Ujian manual memfokus pada:
  - Contoh kod berjalan tanpa ralat
  - Pautan dalam dokumentasi berfungsi dengan betul
  - Projek dibina dengan jayanya
  - Contoh mengikuti amalan terbaik

### Semakan Sebelum Penghantaran

- Jalankan `npm run lint` dalam direktori dengan package.json
- Sahkan pautan markdown adalah sah
- Uji contoh kod dalam pelayar atau Node.js
- Semak terjemahan mengekalkan struktur yang betul

## Garis Panduan Gaya Kod

### JavaScript

- Gunakan sintaks ES6+ moden
- Ikuti konfigurasi ESLint standard yang disediakan dalam projek
- Gunakan nama pemboleh ubah dan fungsi yang bermakna untuk kejelasan pendidikan
- Tambah komen yang menerangkan konsep untuk pelajar
- Format menggunakan Prettier jika dikonfigurasikan

### HTML/CSS

- Elemen HTML5 semantik
- Prinsip reka bentuk responsif
- Konvensyen penamaan kelas yang jelas
- Komen menerangkan teknik CSS untuk pelajar

### Python

- Garis panduan gaya PEP 8
- Contoh kod yang jelas dan berpendidikan
- Hint jenis di mana membantu pembelajaran

### Dokumentasi Markdown

- Hierarki tajuk yang jelas
- Blok kod dengan spesifikasi bahasa
- Pautan ke sumber tambahan
- Tangkapan skrin dan imej dalam direktori `images/`
- Teks alt untuk imej bagi aksesibiliti

### Pengurusan Fail

- Pelajaran bernombor secara berurutan (1-getting-started-lessons, 2-js-basics, dsb.)
- Setiap projek mempunyai direktori `solution/` dan biasanya `start/` atau `your-work/`
- Imej disimpan di folder `images/` khusus pelajaran
- Terjemahan dalam struktur `translations/{language-code}/`

## Pembinaan dan Penyebaran

### Penyebaran Aplikasi Kuis (Azure Static Web Apps)

quiz-app dikonfigurasikan untuk penyebaran Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Membuat folder dist/
# Mengedarkan melalui aliran kerja GitHub Actions pada tekan ke main
```

Konfigurasi Azure Static Web Apps:
- **Lokasi aplikasi**: `/quiz-app`
- **Lokasi output**: `dist`
- **Aliran kerja**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Penjanaan PDF Dokumentasi

```bash
npm install                    # Pasang docsify-to-pdf
npm run convert               # Jana PDF dari dokumen
```

### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Pasang Docsify secara global
docsify serve                 # Hidangkan di localhost:3000
```

### Pembinaan Projek Spesifik

Setiap direktori projek mungkin mempunyai proses binaannya sendiri:
- Projek Vue: `npm run build` mencipta bundel produksi
- Projek statik: Tiada langkah binaan, hidangkan fail terus

## Garis Panduan Pull Request

### Format Tajuk

Gunakan tajuk yang jelas dan deskriptif menunjukkan bidang perubahan:
- `[Quiz-app] Tambah kuiz baru untuk pelajaran X`
- `[Lesson-3] Betulkan kesilapan ejaan dalam projek terrarium`
- `[Translation] Tambah terjemahan Bahasa Sepanyol untuk pelajaran 5`
- `[Docs] Kemas kini arahan persediaan`

### Semakan Diperlukan

Sebelum menghantar PR:

1. **Kualiti Kod**:
   - Jalankan `npm run lint` dalam direktori projek yang terjejas
   - Betulkan semua kesalahan dan amaran lint

2. **Pengesahan Binaan**:
   - Jalankan `npm run build` jika berkenaan
   - Pastikan tiada kesalahan binaan

3. **Pengujian Pautan**:
   - Uji semua pautan markdown
   - Sahkan rujukan imej berfungsi

4. **Ulasan Kandungan**:
   - Semak ejaan dan tatabahasa
   - Pastikan contoh kod betul dan berpendidikan
   - Sahkan terjemahan mengekalkan maksud asal

### Keperluan Sumbangan

- Setuju dengan Microsoft CLA (semakan automatik pada PR pertama)
- Ikut [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Rujuk [CONTRIBUTING.md](./CONTRIBUTING.md) untuk garis panduan terperinci
- Rujuk nombor isu dalam deskripsi PR jika berkenaan

### Proses Semakan

- PR disemak oleh penyelenggara dan komuniti
- Kejelasan pendidikan diberi keutamaan
- Contoh kod harus mengikuti amalan terbaik semasa
- Terjemahan disemak untuk ketepatan dan kesesuaian budaya

## Sistem Terjemahan

### Terjemahan Automatik

- Menggunakan GitHub Actions dengan aliran kerja co-op-translator
- Menterjemah ke lebih 50 bahasa secara automatik
- Fail sumber dalam direktori utama
- Fail terjemahan dalam direktori `translations/{language-code}/`

### Menambah Penambahbaikan Terjemahan Manual

1. Cari fail dalam `translations/{language-code}/`
2. Buat penambahbaikan sambil mengekalkan struktur
3. Pastikan contoh kod kekal berfungsi
4. Uji sebarang kandungan kuiz yang dipersempitkan

### Meta Data Terjemahan

Fail diterjemah termasuk pengepala meta data:
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

## Penyahpepijatan dan Penyelesaian Masalah

### Isu Lazim

**Aplikasi kuis gagal bermula**:
- Semak versi Node.js (disyorkan v14+)
- Padam `node_modules` dan `package-lock.json`, jalankan `npm install` semula
- Semak konflik port (default: Vite guna port 5173)

**Server API tidak bermula**:
- Pastikan versi Node.js memenuhi minimum (node >=10)
- Semak sama ada port sudah digunakan
- Pastikan semua kebergantungan dipasang dengan `npm install`

**Sambungan penyemak imbas gagal dimuat**:
- Semak manifest.json diformat dengan betul
- Semak konsol penyemak imbas untuk ralat
- Ikut arahan pemasangan sambungan khusus penyemak imbas

**Isu projek sembang Python**:
- Pastikan pakej OpenAI dipasang: `pip install openai`
- Pastikan pembolehubah persekitaran GITHUB_TOKEN diset
- Semak kebenaran akses Model GitHub

**Docsify tidak menghidangkan dokumentasi**:
- Pasang docsify-cli secara global: `npm install -g docsify-cli`
- Jalankan dari direktori root repositori
- Semak bahawa `docs/_sidebar.md` wujud

### Petua Persekitaran Pembangunan

- Gunakan VS Code dengan sambungan Live Server untuk projek HTML
- Pasang sambungan ESLint dan Prettier untuk format konsisten
- Gunakan DevTools penyemak imbas untuk debugging JavaScript
- Untuk projek Vue, pasang sambungan Vue DevTools penyemak imbas

### Pertimbangan Prestasi

- Bilangan fail terjemahan yang besar (50+ bahasa) menyebabkan klon penuh menjadi besar
- Gunakan shallow clone jika hanya bekerja pada kandungan: `git clone --depth 1`
- Kecualikan terjemahan daripada carian ketika bekerja pada kandungan Inggeris
- Proses binaan mungkin perlahan pada pertama kali (npm install, binaan Vite)

## Pertimbangan Keselamatan

### Pembolehubah Persekitaran

- Kekunci API tidak patut dimuat naik ke repositori
- Gunakan fail `.env` (sudah dalam `.gitignore`)
- Dokumentasikan pembolehubah persekitaran diperlukan dalam README projek

### Projek Python

- Gunakan persekitaran maya: `python -m venv venv`
- Pastikan kebergantungan sentiasa dikemas kini
- Token GitHub patut mempunyai kebenaran minimum yang diperlukan

### Akses Model GitHub

- Token Akses Peribadi (PAT) diperlukan untuk Model GitHub
- Token patut disimpan sebagai pembolehubah persekitaran
- Jangan sekali-kali memuat naik token atau kelayakan

## Nota Tambahan

### Sasaran Audiens

- Pemula sepenuhnya dalam pembangunan web
- Pelajar dan pembelajaran kendiri
- Guru yang menggunakan kurikulum dalam bilik darjah
- Kandungan direka untuk aksesibiliti dan pembangunan kemahiran berperingkat

### Falsafah Pendidikan

- Pendekatan pembelajaran berasaskan projek
- Pemeriksaan pengetahuan yang kerap (kuiz)
- Latihan pengkodan praktikal
- Contoh penggunaan dunia sebenar
- Fokus pada asas sebelum kerangka kerja

### Penyelenggaraan Repositori

- Komuniti pelajar dan penyumbang yang aktif
- Kemas kini berkala pada kebergantungan dan kandungan
- Isu dan perbincangan dipantau oleh penyelenggara
- Kemaskini terjemahan automatik melalui GitHub Actions

### Sumber Berkaitan

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) disyorkan untuk pelajar
- Kursus tambahan: AI Generatif, Sains Data, ML, kurikulum IoT tersedia

### Bekerja dengan Projek Spesifik

Untuk arahan terperinci mengenai projek individu, rujuk fail README dalam:
- `quiz-app/README.md` - aplikasi kuiz Vue 3
- `7-bank-project/README.md` - aplikasi perbankan dengan pengesahan
- `5-browser-extension/README.md` - pembangunan sambungan penyemak imbas
- `6-space-game/README.md` - pembangunan permainan berasaskan Canvas
- `9-chat-project/README.md` - projek pembantu sembang AI

### Struktur Monorepo

Walaupun bukan monorepo tradisional, repositori ini mengandungi pelbagai projek bebas:
- Setiap pelajaran berdiri sendiri
- Projek tidak berkongsi kebergantungan
- Bekerja pada projek individu tanpa menjejaskan projek lain
- Clone keseluruhan repo untuk pengalaman kurikulum penuh

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya hendaklah dianggap sebagai sumber yang sahih. Untuk maklumat penting, terjemahan profesional oleh manusia adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->