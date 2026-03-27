# AGENTS.md

## Gambaran Projek

Ini adalah repositori kurikulum pendidikan untuk mengajar asas pembangunan web kepada pemula. Kurikulum ini merupakan kursus komprehensif selama 12 minggu yang dibangunkan oleh Microsoft Cloud Advocates, menampilkan 24 pelajaran praktikal yang merangkumi JavaScript, CSS, dan HTML.

### Komponen Utama

- **Kandungan Pendidikan**: 24 pelajaran terstruktur yang dianjurkan dalam modul berasaskan projek
- **Projek Praktikal**: Terrarium, Permainan Mengetik, Sambungan Penyemak Imbas, Permainan Angkasa, Aplikasi Perbankan, Penyunting Kod, dan Pembantu Sembang AI
- **Kuis Interaktif**: 48 kuis dengan 3 soalan setiap satu (penilaian pra/sesudah pelajaran)
- **Sokongan Pelbagai Bahasa**: Terjemahan automatik untuk lebih 50 bahasa melalui GitHub Actions
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk projek AI)

### Seni Bina

- Repositori pendidikan dengan struktur berasaskan pelajaran
- Setiap folder pelajaran mengandungi README, contoh kod, dan penyelesaian
- Projek berdiri sendiri dalam direktori berasingan (quiz-app, pelbagai projek pelajaran)
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)
- Dokumentasi disajikan melalui Docsify dan boleh didapati sebagai PDF

## Arahan Persediaan

Repositori ini terutama untuk penggunaan kandungan pendidikan. Untuk bekerja dengan projek tertentu:

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
npm run build      # Bina untuk pengeluaran
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
2. **Clone fork anda** secara tempatan
3. **Buat cawangan baru** untuk perubahan anda
4. Buat perubahan pada kandungan pelajaran atau contoh kod
5. Uji sebarang perubahan kod dalam direktori projek yang berkaitan
6. Hantar permintaan tarik (pull requests) mengikut garis panduan sumbangan

### Untuk Pelajar

1. Fork atau clone repositori
2. Navigasi ke direktori pelajaran secara berurutan
3. Baca fail README untuk setiap pelajaran
4. Lengkapkan kuis pra-pelajaran di https://ff-quizzes.netlify.app/web/
5. Kerjakan contoh kod dalam folder pelajaran
6. Lengkapkan tugasan dan cabaran
7. Ambil kuis pasca-pelajaran

### Pembangunan Masa Nyata

- **Dokumentasi**: Jalankan `docsify serve` di direktori root (port 3000)
- **Aplikasi Kuis**: Jalankan `npm run dev` di direktori quiz-app
- **Projek**: Gunakan sambungan VS Code Live Server untuk projek HTML
- **Projek API**: Jalankan `npm start` di direktori API masing-masing

## Arahan Ujian

### Ujian Aplikasi Kuis

```bash
cd quiz-app
npm run lint       # Semak masalah gaya kod
npm run build      # Sahkan binaan berjaya
```

### Ujian API Bank

```bash
cd 7-bank-project/api
npm run lint       # Semak isu gaya kod
node server.js     # Sahkan pelayan bermula tanpa ralat
```

### Pendekatan Ujian Umum

- Ini adalah repositori pendidikan tanpa ujian automatik menyeluruh
- Ujian manual memberi tumpuan kepada:
  - Contoh kod berjalan tanpa ralat
  - Pautan dalam dokumentasi berfungsi dengan betul
  - Pembinaan projek selesai dengan berjaya
  - Contoh mengikuti amalan terbaik

### Pemeriksaan Pra-Penghantaran

- Jalankan `npm run lint` dalam direktori dengan package.json
- Sahkan pautan markdown adalah sah
- Uji contoh kod dalam pelayar atau Node.js
- Semak bahawa terjemahan mengekalkan struktur yang betul

## Garis Panduan Gaya Kod

### JavaScript

- Gunakan sintaks ES6+ moden
- Ikuti konfigurasi ESLint standard yang disediakan dalam projek
- Gunakan nama pembolehubah dan fungsi yang bermakna untuk kejelasan pendidikan
- Tambah komen yang menerangkan konsep untuk pelajar
- Format menggunakan Prettier jika dipasang

### HTML/CSS

- Elemen HTML5 semantik
- Prinsip reka bentuk responsif
- Konvensyen penamaan kelas yang jelas
- Komen yang menerangkan teknik CSS untuk pelajar

### Python

- Garis panduan gaya PEP 8
- Contoh kod yang jelas dan pendidikan
- Petunjuk jenis (type hints) jika berguna untuk pembelajaran

### Dokumentasi Markdown

- Hirarki tajuk yang jelas
- Blok kod dengan penentuan bahasa
- Pautan ke sumber tambahan
- Tangkapan skrin dan gambar di direktori `images/`
- Teks alt untuk imej untuk aksesibiliti

### Organisasi Fail

- Pelajaran bernombor secara berurutan (1-getting-started-lessons, 2-js-basics, dll.)
- Setiap projek mempunyai direktori `solution/` dan selalunya `start/` atau `your-work/`
- Gambar disimpan dalam folder `images/` khusus pelajaran
- Terjemahan dalam struktur `translations/{language-code}/`

## Pembinaan dan Penerapan

### Penerapan Aplikasi Kuis (Azure Static Web Apps)

quiz-app dikonfigurasikan untuk penerapan Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Membuat folder dist/
# Menghantar melalui aliran kerja GitHub Actions pada tolak ke main
```

Konfigurasi Azure Static Web Apps:
- **Lokasi App**: `/quiz-app`
- **Lokasi Output**: `dist`
- **Aliran Kerja**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Penjanaan PDF Dokumentasi

```bash
npm install                    # Pasang docsify-to-pdf
npm run convert               # Jana PDF dari docs
```

### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Pasang Docsify secara global
docsify serve                 # Hidangkan pada localhost:3000
```

### Pembinaan Khusus Projek

Setiap direktori projek mungkin mempunyai proses pembinaan tersendiri:
- Projek Vue: `npm run build` menghasilkan bundel produksi
- Projek statik: Tiada langkah pembinaan, fail terus disajikan

## Garis Panduan Permintaan Tarik

### Format Tajuk

Gunakan tajuk yang jelas dan deskriptif yang menunjukkan kawasan perubahan:
- `[Quiz-app] Tambah kuis baru untuk pelajaran X`
- `[Lesson-3] Betulkan salah eja dalam projek terrarium`
- `[Translation] Tambah terjemahan Sepanyol untuk pelajaran 5`
- `[Docs] Kemas kini arahan persediaan`

### Pemeriksaan Diperlukan

Sebelum menghantar PR:

1. **Kualiti Kod**:
   - Jalankan `npm run lint` dalam direktori projek yang terjejas
   - Betulkan semua ralat dan amaran lint

2. **Pengesahan Pembinaan**:
   - Jalankan `npm run build` jika sesuai
   - Pastikan tiada ralat pembinaan

3. **Pemeriksaan Pautan**:
   - Uji semua pautan markdown
   - Sahkan rujukan imej berfungsi

4. **Semakan Kandungan**:
   - Semak ejaan dan tatabahasa
   - Pastikan contoh kod betul dan pendidikan
   - Sahkan terjemahan mengekalkan makna asal

### Keperluan Sumbangan

- Bersetuju dengan Microsoft CLA (semakan automatik pada PR pertama)
- Ikuti [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk garis panduan terperinci
- Rujuk nombor isu dalam penerangan PR jika berkenaan

### Proses Semakan

- PR disemak oleh penyelenggara dan komuniti
- Kejelasan pendidikan diprioritikan
- Contoh kod harus mengikuti amalan terbaik semasa
- Terjemahan disemak untuk ketepatan dan kesesuaian budaya

## Sistem Terjemahan

### Terjemahan Automatik

- Menggunakan GitHub Actions dengan aliran kerja co-op-translator
- Menterjemah ke 50+ bahasa secara automatik
- Fail sumber dalam direktori utama
- Fail terjemahan dalam direktori `translations/{language-code}/`

### Menambah Penambahbaikan Terjemahan Manual

1. Cari fail dalam `translations/{language-code}/`
2. Buat penambahbaikan sambil mengekalkan struktur
3. Pastikan contoh kod kekal berfungsi
4. Uji sebarang kandungan kuis berlokal

### Metadata Terjemahan

Fail terjemahan termasuk pengepala metadata:
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

### Isu Biasa

**Aplikasi kuis gagal bermula**:
- Semak versi Node.js (disyorkan v14+)
- Padamkan `node_modules` dan `package-lock.json`, kemudian jalankan `npm install` semula
- Semak konflik port (lalai: Vite menggunakan port 5173)

**Pelayan API tidak bermula**:
- Pastikan versi Node.js memenuhi minimum (node >=10)
- Semak jika port sudah digunakan
- Pastikan semua pergantungan dipasang dengan `npm install`

**Sambungan penyemak imbas tidak dimuatkan**:
- Pastikan manifest.json diformat dengan betul
- Semak konsol penyemak imbas untuk ralat
- Ikuti arahan pemasangan sambungan khusus pelayar

**Isu projek sembang Python**:
- Pastikan pakej OpenAI dipasang: `pip install openai`
- Semak pembolehubah persekitaran GITHUB_TOKEN disetkan
- Semak kebenaran akses GitHub Models

**Docsify tidak memaparkan dokumentasi**:
- Pasang docsify-cli secara global: `npm install -g docsify-cli`
- Jalankan dari direktori root repositori
- Semak bahawa `docs/_sidebar.md` wujud

### Petua Persekitaran Pembangunan

- Gunakan VS Code dengan sambungan Live Server untuk projek HTML
- Pasang sambungan ESLint dan Prettier untuk format konsisten
- Gunakan DevTools penyemak imbas untuk penyahpepijatan JavaScript
- Untuk projek Vue, pasang sambungan Vue DevTools penyemak imbas

### Pertimbangan Prestasi

- Bilangan fail terjemahan yang banyak (50+ bahasa) menyebabkan klon penuh besar
- Gunakan shallow clone jika hanya bekerja pada kandungan: `git clone --depth 1`
- Kecualikan terjemahan dari carian ketika bekerja pada kandungan Inggeris
- Proses pembinaan mungkin perlahan pada larian pertama (npm install, binaan Vite)

## Pertimbangan Keselamatan

### Pembolehubah Persekitaran

- Kekunci API tidak harus dimasukkan ke repositori
- Gunakan fail `.env` (sudah dalam `.gitignore`)
- Dokumentasikan pembolehubah persekitaran yang diperlukan dalam README projek

### Projek Python

- Gunakan persekitaran maya: `python -m venv venv`
- Kemas kini pergantungan secara berkala
- Token GitHub harus mempunyai kebenaran minimum yang diperlukan

### Akses GitHub Models

- Token Akses Peribadi (PAT) diperlukan untuk GitHub Models
- Token harus disimpan sebagai pembolehubah persekitaran
- Jangan sekali-kali masukkan token atau kelayakan ke repositori

## Nota Tambahan

### Sasaran Audiens

- Pemula sepenuhnya dalam pembangunan web
- Pelajar dan pembelajar kendiri
- Guru yang menggunakan kurikulum dalam kelas
- Kandungan direka untuk kebolehaksesan dan pembinaan kemahiran secara berperingkat

### Falsafah Pendidikan

- Pendekatan pembelajaran berasaskan projek
- Semakan pengetahuan berkala (kuis)
- Latihan pengkodan praktikal
- Contoh aplikasi dunia sebenar
- Fokus pada asas sebelum menggunakan rangka kerja

### Penyelenggaraan Repositori

- Komuniti pelajar dan penyumbang yang aktif
- Kemas kini berkala pada pergantungan dan kandungan
- Isu dan perbincangan dipantau oleh penyelenggara
- Kemas kini terjemahan automatik melalui GitHub Actions

### Sumber Berkaitan

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) disyorkan untuk pelajar
- Kursus tambahan: AI Generatif, Sains Data, ML, kurikulum IoT tersedia

### Bekerja dengan Projek Tertentu

Untuk arahan terperinci projek individu, rujuk fail README di:
- `quiz-app/README.md` - aplikasi kuis Vue 3
- `7-bank-project/README.md` - aplikasi perbankan dengan pengesahan
- `5-browser-extension/README.md` - pembangunan sambungan penyemak imbas
- `6-space-game/README.md` - pembangunan permainan berasaskan kanvas
- `9-chat-project/README.md` - projek pembantu sembang AI

### Struktur Monorepo

Walaupun bukan monorepo tradisional, repositori ini mengandungi pelbagai projek berdikari:
- Setiap pelajaran berdiri sendiri
- Projek tidak berkongsi pergantungan
- Kerja pada projek individu tanpa menjejaskan yang lain
- Klon keseluruhan repo untuk pengalaman kurikulum penuh

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidakakuratan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber rujukan yang sah. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->