# AGENTS.md

## Gambaran Projek

Ini adalah repositori kurikulum pendidikan untuk mengajar asas pembangunan web kepada pemula. Kurikulum ini adalah kursus selama 12 minggu yang komprehensif dibangunkan oleh Microsoft Cloud Advocates, yang menampilkan 24 pelajaran praktikal yang merangkumi JavaScript, CSS, dan HTML.

### Komponen Utama

- **Kandungan Pendidikan**: 24 pelajaran tersusun di dalam modul berasaskan projek
- **Projek Praktikal**: Terrarium, Permainan Mengetik, Pelanjutan Pelayar, Permainan Angkasa, Aplikasi Perbankan, Penyunting Kod, dan Pembantu Sembang AI
- **Kuiz Interaktif**: 48 kuiz dengan 3 soalan setiap satu (penilaian sebelum/selepas pelajaran)
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

### Persediaan Aplikasi Kuiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Mula pelayan pembangunan
npm run build      # Bina untuk pengeluaran
npm run lint       # Jalankan ESLint
```

### API Projek Bank (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Mulakan pelayan API
npm run lint       # Jalankan ESLint
npm run format     # Format dengan Prettier
```

### Projek Pelanjutan Pelayar

```bash
cd 5-browser-extension/solution
npm install
# Ikuti arahan memuatkan pelanjutan khusus pelayar
```

### Projek Permainan Angkasa

```bash
cd 6-space-game/solution
npm install
# Buka index.html dalam pelayar atau gunakan Live Server
```

### Projek Sembang (Python Backend)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Tetapkan pembolehubah persekitaran GITHUB_TOKEN
python api.py
```

## Aliran Kerja Pembangunan

### Untuk Penyumbang Kandungan

1. **Fok repositori** ke akaun GitHub anda
2. **Klon fork anda** secara tempatan
3. **Cipta cawangan baru** untuk perubahan anda
4. Buat perubahan pada kandungan pelajaran atau contoh kod
5. Uji sebarang perubahan kod dalam direktori projek yang berkaitan
6. Serahkan pull request mengikut garis panduan sumbangan

### Untuk Pelajar

1. Fok atau klon repositori
2. Navigasi ke direktori pelajaran secara berurutan
3. Baca fail README untuk setiap pelajaran
4. Lengkapkan kuiz sebelum pelajaran di https://ff-quizzes.netlify.app/web/
5. Gunakan contoh kod dalam folder pelajaran
6. Sempurnakan tugasan dan cabaran
7. Ambil kuiz selepas pelajaran

### Pembangunan Secara Langsung

- **Dokumentasi**: Jalankan `docsify serve` di root (port 3000)
- **Aplikasi Kuiz**: Jalankan `npm run dev` dalam direktori quiz-app
- **Projek**: Gunakan sambungan VS Code Live Server untuk projek HTML
- **Projek API**: Jalankan `npm start` dalam direktori API yang berkaitan

## Arahan Ujian

### Ujian Aplikasi Kuiz

```bash
cd quiz-app
npm run lint       # Semak isu gaya kod
npm run build      # Sahkan pembinaan berjaya
```

### Ujian API Bank

```bash
cd 7-bank-project/api
npm run lint       # Periksa untuk isu gaya kod
node server.js     # Sahkan pelayan bermula tanpa ralat
```

### Pendekatan Ujian Umum

- Ini adalah repositori pendidikan tanpa ujian automatik yang menyeluruh
- Ujian manual memberi tumpuan kepada:
  - Contoh kod berjalan tanpa ralat
  - Pautan dalam dokumentasi berfungsi dengan betul
  - Projek dibina dengan jayanya
  - Contoh mengikut amalan terbaik

### Semakan Sebelum Penyerahan

- Jalankan `npm run lint` dalam direktori yang mempunyai package.json
- Sahkan pautan markdown adalah sah
- Uji contoh kod dalam pelayar atau Node.js
- Semak bahawa terjemahan mengekalkan struktur yang betul

## Garis Panduan Gaya Kod

### JavaScript

- Gunakan sintaks ES6+ terkini
- Ikut konfigurasi ESLint standard yang disediakan dalam projek
- Gunakan nama pembolehubah dan fungsi yang bermakna untuk kejelasan pendidikan
- Tambah komen yang menerangkan konsep untuk pelajar
- Format menggunakan Prettier jika dikonfigurasikan

### HTML/CSS

- Elemen HTML5 semantik
- Prinsip reka bentuk responsif
- Konvensyen penamaan kelas yang jelas
- Komen yang menerangkan teknik CSS untuk pelajar

### Python

- Garis panduan gaya PEP 8
- Contoh kod yang jelas dan pendidikan
- Petunjuk jenis jika membantu pembelajaran

### Dokumentasi Markdown

- Hierarki tajuk yang jelas
- Blok kod dengan spesifikasi bahasa
- Pautan ke sumber tambahan
- Tangkapan skrin dan imej dalam direktori `images/`
- Teks alt untuk imej untuk aksesibilitas

### Pengorganisasian Fail

- Pelajaran bernombor secara berurutan (1-getting-started-lessons, 2-js-basics, dll.)
- Setiap projek mempunyai direktori `solution/` dan sering `start/` atau `your-work/`
- Imej disimpan dalam folder `images/` khusus pelajaran
- Terjemahan dalam struktur `translations/{language-code}/`

## Pembinaan dan Penyebaran

### Penyebaran Aplikasi Kuiz (Azure Static Web Apps)

Aplikasi kuiz dikonfigurasikan untuk penyebaran Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Mencipta folder dist/
# Melaksanakan melalui aliran kerja GitHub Actions apabila melakukan push ke main
```

Konfigurasi Azure Static Web Apps:
- **Lokasi aplikasi**: `/quiz-app`
- **Lokasi output**: `dist`
- **Aliran kerja**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Penjanaan PDF Dokumentasi

```bash
npm install                    # Pasang docsify-to-pdf
npm run convert               # Hasilkan PDF daripada docs
```

### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Pasang Docsify secara global
docsify serve                 # Hidangkan pada localhost:3000
```

### Pembinaan Khusus Projek

Setiap direktori projek mungkin mempunyai proses binaan sendiri:
- Projek Vue: `npm run build` menghasilkan bundle produksi
- Projek statik: Tiada langkah binaan, hidangkan fail secara langsung

## Garis Panduan Pull Request

### Format Tajuk

Gunakan tajuk yang jelas dan deskriptif yang menunjukkan bidang perubahan:
- `[Quiz-app] Tambah kuiz baru untuk pelajaran X`
- `[Lesson-3] Betulkan kesilapan taip dalam projek terrarium`
- `[Translation] Tambah terjemahan Sepanyol untuk pelajaran 5`
- `[Docs] Kemas kini arahan persediaan`

### Semakan Diperlukan

Sebelum menghantar PR:

1. **Kualiti Kod**:
   - Jalankan `npm run lint` dalam direktori projek yang terjejas
   - Betulkan semua ralat dan amaran linting

2. **Pengesahan Binaan**:
   - Jalankan `npm run build` jika berkenaan
   - Pastikan tiada ralat binaan

3. **Pengesahan Pautan**:
   - Uji semua pautan markdown
   - Sahkan rujukan imej berfungsi

4. **Semakan Kandungan**:
   - Semak ejaan dan tatabahasa
   - Pastikan contoh kod betul dan pendidikan
   - Sahkan terjemahan mengekalkan makna asal

### Keperluan Penyumbangan

- Setuju dengan Microsoft CLA (semakan automatik pada PR pertama)
- Mengikuti [Kod Etika Microsoft Open Source](https://opensource.microsoft.com/codeofconduct/)
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk garis panduan terperinci
- Rujuk nombor isu dalam deskripsi PR jika berkenaan

### Proses Semakan

- PR disemak oleh penyelenggara dan komuniti
- Kejelasan pendidikan diprioritikan
- Contoh kod harus mengikut amalan terbaik terkini
- Terjemahan disemak untuk ketepatan dan kesesuaian budaya

## Sistem Terjemahan

### Terjemahan Automatik

- Menggunakan GitHub Actions dengan aliran kerja co-op-translator
- Menerjemah ke lebih 50 bahasa secara automatik
- Fail sumber dalam direktori utama
- Fail terjemahan dalam direktori `translations/{language-code}/`

### Menambah Penambahbaikan Terjemahan Manual

1. Cari fail dalam `translations/{language-code}/`
2. Lakukan penambahbaikan sambil mengekalkan struktur
3. Pastikan contoh kod kekal berfungsi
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

## Penjejakan Ralat dan Penyelesaian Masalah

### Isu Biasa

**Aplikasi kuiz gagal mula**:
- Semak versi Node.js (v14+ disyorkan)
- Padam `node_modules` dan `package-lock.json`, jalankan `npm install` semula
- Semak pertindihan port (lalai: Vite guna port 5173)

**Server API tidak mula**:
- Sahkan versi Node.js memenuhi minimum (node >=10)
- Semak jika port sudah digunakan
- Pastikan semua kebergantungan dipasang dengan `npm install`

**Pelanjutan pelayar tidak dimuat**:
- Sahkan manifest.json diformat dengan betul
- Semak konsol pelayar untuk ralat
- Ikut arahan pemasangan pelanjutan khusus pelayar

**Isu projek sembang Python**:
- Pastikan pakej OpenAI dipasang: `pip install openai`
- Sahkan pembolehubah alam sekitar GITHUB_TOKEN ditetapkan
- Semak kebenaran akses GitHub Models

**Docsify tidak menyediakan dokumen**:
- Pasang docsify-cli secara global: `npm install -g docsify-cli`
- Jalankan dari direktori root repositori
- Semak bahawa `docs/_sidebar.md` wujud

### Tips Persekitaran Pembangunan

- Gunakan VS Code dengan sambungan Live Server untuk projek HTML
- Pasang sambungan ESLint dan Prettier untuk format konsisten
- Gunakan DevTools pelayar untuk debug JavaScript
- Untuk projek Vue, pasang sambungan Vue DevTools pelayar

### Pertimbangan Prestasi

- Bilangan fail terjemahan yang banyak (50+ bahasa) bermakna klon penuh besar
- Gunakan shallow clone jika hanya kerja kandungan: `git clone --depth 1`
- Kecualikan terjemahan dari carian apabila kerja kandungan Bahasa Inggeris
- Proses binaan mungkin perlahan pada kali pertama (npm install, binaan Vite)

## Pertimbangan Keselamatan

### Pembolehubah Alam Sekitar

- Kunci API tidak harus dimasukkan dalam repositori
- Gunakan fail `.env` (sudah disenaraikan dalam `.gitignore`)
- Dokumentasikan pembolehubah alam sekitar diperlukan dalam README projek

### Projek Python

- Gunakan persekitaran maya: `python -m venv venv`
- Kekalkan kebergantungan terkini
- Token GitHub harus mempunyai kebenaran minimum yang diperlukan

### Akses GitHub Models

- Personal Access Tokens (PAT) diperlukan untuk GitHub Models
- Token harus disimpan sebagai pembolehubah alam sekitar
- Jangan sekali-kali commit token atau kelayakan

## Nota Tambahan

### Sasaran Audiens

- Pemula sepenuhnya kepada pembangunan web
- Pelajar dan pembelajar sendiri
- Guru menggunakan kurikulum dalam bilik darjah
- Kandungan direka untuk aksesibilitas dan pembangunan kemahiran secara berperingkat

### Falsafah Pendidikan

- Pendekatan pembelajaran berasaskan projek
- Pemeriksaan pengetahuan kerap (kuiz)
- Latihan pengkodan praktikal
- Contoh aplikasi dunia sebenar
- Fokus pada asas sebelum kerangka kerja

### Penyelenggaraan Repositori

- Komuniti pelajar dan penyumbang yang aktif
- Kemas kini kerap untuk kebergantungan dan kandungan
- Isu dan perbincangan dipantau oleh penyelenggara
- Kemas kini terjemahan automatik melalui GitHub Actions

### Sumber Berkaitan

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) disyorkan untuk pelajar
- Kursus tambahan: AI Generatif, Sains Data, ML, kurikulum IoT tersedia

### Bekerja dengan Projek Tertentu

Untuk arahan terperinci pada projek individu, rujuk fail README di:
- `quiz-app/README.md` - aplikasi kuiz Vue 3
- `7-bank-project/README.md` - aplikasi perbankan dengan pengesahan
- `5-browser-extension/README.md` - pembangunan pelanjutan pelayar
- `6-space-game/README.md` - pembangunan permainan berasaskan kanvas
- `9-chat-project/README.md` - projek pembantu sembang AI

### Struktur Monorepo

Walaupun bukan monorepo tradisional, repositori ini mengandungi beberapa projek berdikari:
- Setiap pelajaran berdiri sendiri
- Projek tidak berkongsi kebergantungan
- Bekerja pada projek individu tanpa menjejaskan yang lain
- Klon keseluruhan repo untuk pengalaman kurikulum penuh

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang sahih. Untuk maklumat penting, terjemahan profesional oleh manusia adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->