# AGENTS.md

## Gambaran Projek

Ini adalah repositori kurikulum pendidikan untuk mengajar asas pembangunan web kepada pemula. Kurikulum ini merupakan kursus komprehensif selama 12 minggu yang dibangunkan oleh Microsoft Cloud Advocates, dengan 24 pelajaran praktikal yang merangkumi JavaScript, CSS, dan HTML.

### Komponen Utama

- **Kandungan Pendidikan**: 24 pelajaran yang disusun secara berstruktur dalam modul berasaskan projek
- **Projek Praktikal**: Terrarium, Permainan Menaip, Sambungan Penyemak Imbas, Permainan Angkasa, Aplikasi Perbankan, Penyunting Kod, dan Pembantu Chat AI
- **Kuiz Interaktif**: 48 kuiz dengan 3 soalan setiap satu (penilaian sebelum/selepas pelajaran)
- **Sokongan Pelbagai Bahasa**: Terjemahan automatik untuk lebih 50 bahasa melalui GitHub Actions
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk projek AI)

### Seni Bina

- Repositori pendidikan dengan struktur berasaskan pelajaran
- Setiap folder pelajaran mengandungi README, contoh kod, dan penyelesaian
- Projek berdiri sendiri dalam direktori berasingan (quiz-app, pelbagai projek pelajaran)
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)
- Dokumentasi disediakan melalui Docsify dan tersedia dalam bentuk PDF

## Perintah Persediaan

Repositori ini terutamanya untuk penggunaan kandungan pendidikan. Untuk bekerja dengan projek tertentu:

### Persediaan Repositori Utama

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Persediaan Aplikasi Kuiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

### API Projek Bank (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Start API server
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Projek Sambungan Penyemak Imbas

```bash
cd 5-browser-extension/solution
npm install
# Follow browser-specific extension loading instructions
```

### Projek Permainan Angkasa

```bash
cd 6-space-game/solution
npm install
# Open index.html in browser or use Live Server
```

### Projek Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Set GITHUB_TOKEN environment variable
python api.py
```

## Aliran Kerja Pembangunan

### Untuk Penyumbang Kandungan

1. **Fork repositori** ke akaun GitHub anda
2. **Clone fork anda** secara tempatan
3. **Buat cawangan baru** untuk perubahan anda
4. Lakukan perubahan pada kandungan pelajaran atau contoh kod
5. Uji sebarang perubahan kod dalam direktori projek yang relevan
6. Hantar pull request mengikut garis panduan sumbangan

### Untuk Pelajar

1. Fork atau clone repositori
2. Navigasi ke direktori pelajaran secara berurutan
3. Baca fail README untuk setiap pelajaran
4. Lengkapkan kuiz sebelum pelajaran di https://ff-quizzes.netlify.app/web/
5. Kerjakan contoh kod dalam folder pelajaran
6. Lengkapkan tugasan dan cabaran
7. Ambil kuiz selepas pelajaran

### Pembangunan Secara Langsung

- **Dokumentasi**: Jalankan `docsify serve` di root (port 3000)
- **Aplikasi Kuiz**: Jalankan `npm run dev` di direktori quiz-app
- **Projek**: Gunakan sambungan Live Server VS Code untuk projek HTML
- **Projek API**: Jalankan `npm start` di direktori API masing-masing

## Arahan Pengujian

### Pengujian Aplikasi Kuiz

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

- Ini adalah repositori pendidikan tanpa ujian automatik yang komprehensif
- Pengujian manual memberi tumpuan kepada:
  - Contoh kod berjalan tanpa ralat
  - Pautan dalam dokumentasi berfungsi dengan betul
  - Pembinaan projek selesai dengan berjaya
  - Contoh mengikuti amalan terbaik

### Pemeriksaan Sebelum Penyerahan

- Jalankan `npm run lint` di direktori dengan package.json
- Sahkan pautan markdown adalah sah
- Uji contoh kod dalam penyemak imbas atau Node.js
- Pastikan terjemahan mengekalkan struktur yang betul

## Garis Panduan Gaya Kod

### JavaScript

- Gunakan sintaks ES6+ moden
- Ikuti konfigurasi ESLint standard yang disediakan dalam projek
- Gunakan nama pemboleh ubah dan fungsi yang bermakna untuk kejelasan pendidikan
- Tambahkan komen yang menerangkan konsep untuk pelajar
- Format menggunakan Prettier di mana dikonfigurasikan

### HTML/CSS

- Elemen HTML5 semantik
- Prinsip reka bentuk responsif
- Konvensyen penamaan kelas yang jelas
- Komen yang menerangkan teknik CSS untuk pelajar

### Python

- Garis panduan gaya PEP 8
- Contoh kod yang jelas dan pendidikan
- Petunjuk jenis di mana berguna untuk pembelajaran

### Dokumentasi Markdown

- Hierarki tajuk yang jelas
- Blok kod dengan spesifikasi bahasa
- Pautan ke sumber tambahan
- Tangkapan skrin dan imej dalam direktori `images/`
- Teks alt untuk imej untuk kebolehaksesan

### Pengorganisasian Fail

- Pelajaran bernombor secara berurutan (1-getting-started-lessons, 2-js-basics, dll.)
- Setiap projek mempunyai direktori `solution/` dan sering `start/` atau `your-work/`
- Imej disimpan dalam folder `images/` khusus pelajaran
- Terjemahan dalam struktur `translations/{language-code}/`

## Pembinaan dan Penghantaran

### Penghantaran Aplikasi Kuiz (Azure Static Web Apps)

Aplikasi kuiz dikonfigurasikan untuk penghantaran Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Creates dist/ folder
# Deploys via GitHub Actions workflow on push to main
```

Konfigurasi Azure Static Web Apps:
- **Lokasi Aplikasi**: `/quiz-app`
- **Lokasi Output**: `dist`
- **Aliran Kerja**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Penjanaan PDF Dokumentasi

```bash
npm install                    # Install docsify-to-pdf
npm run convert               # Generate PDF from docs
```

### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Install Docsify globally
docsify serve                 # Serve on localhost:3000
```

### Pembinaan Khusus Projek

Setiap direktori projek mungkin mempunyai proses pembinaan sendiri:
- Projek Vue: `npm run build` mencipta bundle pengeluaran
- Projek statik: Tiada langkah pembinaan, teruskan fail

## Garis Panduan Pull Request

### Format Tajuk

Gunakan tajuk yang jelas dan deskriptif yang menunjukkan kawasan perubahan:
- `[Quiz-app] Tambah kuiz baru untuk pelajaran X`
- `[Lesson-3] Betulkan kesalahan ejaan dalam projek terrarium`
- `[Translation] Tambah terjemahan bahasa Sepanyol untuk pelajaran 5`
- `[Docs] Kemas kini arahan persediaan`

### Pemeriksaan Diperlukan

Sebelum menghantar PR:

1. **Kualiti Kod**:
   - Jalankan `npm run lint` di direktori projek yang terjejas
   - Betulkan semua ralat dan amaran linting

2. **Pengesahan Pembinaan**:
   - Jalankan `npm run build` jika berkenaan
   - Pastikan tiada ralat pembinaan

3. **Pengesahan Pautan**:
   - Uji semua pautan markdown
   - Sahkan rujukan imej berfungsi

4. **Semakan Kandungan**:
   - Semak ejaan dan tatabahasa
   - Pastikan contoh kod adalah betul dan pendidikan
   - Sahkan terjemahan mengekalkan maksud asal

### Keperluan Sumbangan

- Setuju dengan Microsoft CLA (pemeriksaan automatik pada PR pertama)
- Ikuti [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk garis panduan terperinci
- Rujuk nombor isu dalam deskripsi PR jika berkenaan

### Proses Semakan

- PR disemak oleh penyelenggara dan komuniti
- Kejelasan pendidikan diutamakan
- Contoh kod harus mengikuti amalan terbaik semasa
- Terjemahan disemak untuk ketepatan dan kesesuaian budaya

## Sistem Terjemahan

### Terjemahan Automatik

- Menggunakan GitHub Actions dengan aliran kerja co-op-translator
- Menterjemah ke lebih 50 bahasa secara automatik
- Fail sumber dalam direktori utama
- Fail terjemahan dalam direktori `translations/{language-code}/`

### Penambahbaikan Terjemahan Manual

1. Cari fail dalam `translations/{language-code}/`
2. Lakukan penambahbaikan sambil mengekalkan struktur
3. Pastikan contoh kod tetap berfungsi
4. Uji sebarang kandungan kuiz yang dilokalkan

### Metadata Terjemahan

Fail terjemahan termasuk header metadata:
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

**Aplikasi kuiz gagal dimulakan**:
- Periksa versi Node.js (disyorkan v14+)
- Padamkan `node_modules` dan `package-lock.json`, jalankan `npm install` semula
- Periksa konflik port (lalai: Vite menggunakan port 5173)

**Pelayan API tidak dapat dimulakan**:
- Sahkan versi Node.js memenuhi minimum (node >=10)
- Periksa jika port sudah digunakan
- Pastikan semua kebergantungan dipasang dengan `npm install`

**Sambungan penyemak imbas tidak dapat dimuat**:
- Sahkan manifest.json diformat dengan betul
- Periksa konsol penyemak imbas untuk ralat
- Ikuti arahan pemasangan sambungan khusus penyemak imbas

**Isu projek chat Python**:
- Pastikan pakej OpenAI dipasang: `pip install openai`
- Sahkan pembolehubah persekitaran GITHUB_TOKEN telah ditetapkan
- Periksa kebenaran akses GitHub Models

**Docsify tidak menyajikan dokumen**:
- Pasang docsify-cli secara global: `npm install -g docsify-cli`
- Jalankan dari direktori root repositori
- Periksa bahawa `docs/_sidebar.md` wujud

### Petua Persekitaran Pembangunan

- Gunakan VS Code dengan sambungan Live Server untuk projek HTML
- Pasang sambungan ESLint dan Prettier untuk format yang konsisten
- Gunakan DevTools penyemak imbas untuk penyahpepijatan JavaScript
- Untuk projek Vue, pasang sambungan Vue DevTools penyemak imbas

### Pertimbangan Prestasi

- Jumlah fail terjemahan yang besar (50+ bahasa) bermakna klon penuh adalah besar
- Gunakan klon cetek jika hanya bekerja pada kandungan: `git clone --depth 1`
- Kecualikan terjemahan daripada carian apabila bekerja pada kandungan bahasa Inggeris
- Proses pembinaan mungkin lambat pada kali pertama (npm install, Vite build)

## Pertimbangan Keselamatan

### Pembolehubah Persekitaran

- Kunci API tidak boleh pernah dikomit ke repositori
- Gunakan fail `.env` (sudah dalam `.gitignore`)
- Dokumentasikan pembolehubah persekitaran yang diperlukan dalam README projek

### Projek Python

- Gunakan persekitaran maya: `python -m venv venv`
- Kekalkan kebergantungan terkini
- Token GitHub harus mempunyai kebenaran minimum yang diperlukan

### Akses GitHub Models

- Token Akses Peribadi (PAT) diperlukan untuk GitHub Models
- Token harus disimpan sebagai pembolehubah persekitaran
- Jangan pernah komit token atau kelayakan

## Nota Tambahan

### Sasaran Audiens

- Pemula sepenuhnya dalam pembangunan web
- Pelajar dan pembelajar sendiri
- Guru yang menggunakan kurikulum dalam bilik darjah
- Kandungan direka untuk kebolehaksesan dan pembinaan kemahiran secara beransur-ansur

### Falsafah Pendidikan

- Pendekatan pembelajaran berasaskan projek
- Pemeriksaan pengetahuan yang kerap (kuiz)
- Latihan pengekodan secara langsung
- Contoh aplikasi dunia sebenar
- Fokus pada asas sebelum kerangka kerja

### Penyelenggaraan Repositori

- Komuniti pelajar dan penyumbang yang aktif
- Kemas kini berkala untuk kebergantungan dan kandungan
- Isu dan perbincangan dipantau oleh penyelenggara
- Kemas kini terjemahan automatik melalui GitHub Actions

### Sumber Berkaitan

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) disyorkan untuk pelajar
- Kursus tambahan: Generative AI, Sains Data, ML, kurikulum IoT tersedia

### Bekerja dengan Projek Khusus

Untuk arahan terperinci mengenai projek individu, rujuk fail README dalam:
- `quiz-app/README.md` - Aplikasi kuiz Vue 3
- `7-bank-project/README.md` - Aplikasi perbankan dengan pengesahan
- `5-browser-extension/README.md` - Pembangunan sambungan penyemak imbas
- `6-space-game/README.md` - Pembangunan permainan berasaskan kanvas
- `9-chat-project/README.md` - Projek pembantu chat AI

### Struktur Monorepo

Walaupun bukan monorepo tradisional, repositori ini mengandungi pelbagai projek bebas:
- Setiap pelajaran adalah berdiri sendiri
- Projek tidak berkongsi kebergantungan
- Bekerja pada projek individu tanpa menjejaskan yang lain
- Klon keseluruhan repositori untuk pengalaman kurikulum penuh

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.