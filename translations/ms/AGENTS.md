# AGENTS.md

## Gambaran Projek

Ini adalah repositori kurikulum pendidikan untuk mengajar asas-asas pembangunan web kepada pemula. Kurikulum ini adalah kursus komprehensif selama 12 minggu yang dibangunkan oleh Microsoft Cloud Advocates, menampilkan 24 pelajaran praktikal yang merangkumi JavaScript, CSS, dan HTML.

### Komponen Utama

- **Kandungan Pendidikan**: 24 pelajaran berstruktur yang diatur ke dalam modul berasaskan projek
- **Projek Praktikal**: Terrarium, Permainan Mengetik, Pelanjutan Penyemak Imbas, Permainan Angkasa, Aplikasi Perbankan, Penyunting Kod, dan Pembantu Chat AI
- **Kuiz Interaktif**: 48 kuiz dengan 3 soalan setiap satu (penilaian sebelum/selepas pelajaran)
- **Sokongan Pelbagai Bahasa**: Terjemahan automatik untuk lebih 50+ bahasa melalui GitHub Actions
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk projek AI)

### Seni Bina

- Repositori pendidikan dengan struktur berasaskan pelajaran
- Setiap folder pelajaran mengandungi README, contoh kod, dan penyelesaian
- Projek berdiri sendiri dalam direktori berasingan (quiz-app, pelbagai projek pelajaran)
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)
- Dokumentasi disajikan melalui Docsify dan tersedia sebagai PDF

## Perintah Persediaan

Repositori ini terutamanya untuk penggunaan kandungan pendidikan. Untuk bekerja dengan projek spesifik:

### Persediaan Repositori Utama

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Persediaan Aplikasi Kuiz (Vue 3 + Vite)

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

### Projek Pelanjutan Penyemak Imbas

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

### Projek Chat (Backend Python)

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Tetapkan pembolehubah persekitaran GITHUB_TOKEN
python api.py
```

## Aliran Kerja Pembangunan

### Untuk Penyumbang Kandungan

1. **Fork repositori** ke akaun GitHub anda
2. **Clone fork anda** secara lokal
3. **Buat cawangan baru** untuk perubahan anda
4. Buat perubahan pada kandungan pelajaran atau contoh kod
5. Uji sebarang perubahan kod dalam direktori projek yang berkaitan
6. Hantar pull request mengikut garis panduan sumbangan

### Untuk Pelajar

1. Fork atau clone repositori
2. Navigasi ke direktori pelajaran secara berperingkat
3. Baca fail README untuk setiap pelajaran
4. Lengkapkan kuiz sebelum pelajaran di https://ff-quizzes.netlify.app/web/
5. Bekerja melalui contoh kod dalam folder pelajaran
6. Lengkapkan tugasan dan cabaran
7. Ambil kuiz selepas pelajaran

### Pembangunan Langsung

- **Dokumentasi**: Jalankan `docsify serve` di root (port 3000)
- **Aplikasi Kuiz**: Jalankan `npm run dev` dalam direktori quiz-app
- **Projek**: Gunakan sambungan Live Server VS Code untuk projek HTML
- **Projek API**: Jalankan `npm start` dalam direktori API masing-masing

## Arahan Ujian

### Ujian Aplikasi Kuiz

```bash
cd quiz-app
npm run lint       # Semak isu gaya kod
npm run build      # Sahkan binaan berjaya
```

### Ujian API Bank

```bash
cd 7-bank-project/api
npm run lint       # Semak isu gaya kod
node server.js     # Sahkan pelayan bermula tanpa ralat
```

### Pendekatan Ujian Umum

- Ini adalah repositori pendidikan tanpa ujian automatik yang komprehensif
- Ujian manual memfokus pada:
  - Contoh kod berjalan tanpa kesilapan
  - Pautan dalam dokumentasi berfungsi dengan betul
  - Pembinaan projek selesai dengan jayanya
  - Contoh mengikut amalan terbaik

### Pemeriksaan Pra-Penghantaran

- Jalankan `npm run lint` dalam direktori yang memiliki package.json
- Sahkan pautan markdown adalah sah
- Uji contoh kod dalam penyemak imbas atau Node.js
- Periksa supaya terjemahan mengekalkan struktur dengan betul

## Garis Panduan Gaya Kod

### JavaScript

- Gunakan sintaks ES6+ moden
- Ikuti konfigurasi ESLint standard yang disediakan dalam projek
- Gunakan nama pemboleh ubah dan fungsi yang bermakna untuk kejelasan pendidikan
- Tambah komen yang menjelaskan konsep kepada pelajar
- Format menggunakan Prettier di mana dikonfigurasikan

### HTML/CSS

- Elemen HTML5 semantik
- Prinsip reka bentuk responsif
- Konvensyen penamaan kelas yang jelas
- Komen yang menerangkan teknik CSS untuk pelajar

### Python

- Garis panduan gaya PEP 8
- Contoh kod yang jelas dan pendidikan
- Jenis petunjuk di mana membantu pembelajaran

### Dokumentasi Markdown

- Hierarki tajuk yang jelas
- Blok kod dengan spesifikasi bahasa
- Pautan kepada sumber tambahan
- Tangkapan skrin dan imej dalam direktori `images/`
- Teks alt untuk imej bagi aksesibiliti

### Pengurusan Fail

- Pelajaran bernombor berurutan (1-getting-started-lessons, 2-js-basics, dll.)
- Setiap projek mempunyai direktori `solution/` dan sering `start/` atau `your-work/`
- Imej disimpan dalam folder `images/` khusus pelajaran
- Terjemahan dalam struktur `translations/{language-code}/`

## Pembinaan dan Penempatan

### Penempatan Aplikasi Kuiz (Azure Static Web Apps)

quiz-app dikonfigurasikan untuk penempatan Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Membina folder dist/
# Menyebarkan melalui aliran kerja GitHub Actions apabila push ke main
```

Konfigurasi Azure Static Web Apps:
- **Lokasi aplikasi**: `/quiz-app`
- **Lokasi output**: `dist`
- **Aliran kerja**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Penjanaan PDF Dokumentasi

```bash
npm install                    # Pasang docsify-to-pdf
npm run convert               # Jana PDF dari docs
```

### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Pasang Docsify secara global
docsify serve                 # Hidangkan di localhost:3000
```

### Pembinaan Khusus Projek

Setiap direktori projek mungkin mempunyai proses binaannya sendiri:
- Projek Vue: `npm run build` mencipta bundle produksi
- Projek statik: Tiada langkah binaan, hidangkan fail secara langsung

## Garis Panduan Pull Request

### Format Tajuk

Gunakan tajuk yang jelas dan deskriptif menunjukkan kawasan perubahan:
- `[Quiz-app] Tambah kuiz baru untuk pelajaran X`
- `[Lesson-3] Betulkan kesilapan ejaan dalam projek terrarium`
- `[Translation] Tambah terjemahan Sepanyol untuk pelajaran 5`
- `[Docs] Kemas kini arahan persediaan`

### Pemeriksaan Wajib

Sebelum menghantar PR:

1. **Kualiti Kod**:
   - Jalankan `npm run lint` dalam direktori projek yang terkesan
   - Betulkan semua kesilapan dan amaran linting

2. **Pengesahan Binaan**:
   - Jalankan `npm run build` jika berkenaan
   - Pastikan tiada ralat binaan

3. **Pengesahan Pautan**:
   - Uji semua pautan markdown
   - Sahkan rujukan imej berfungsi

4. **Semakan Kandungan**:
   - Semak ejaan dan tatabahasa
   - Pastikan contoh kod betul dan pendidikan
   - Sahkan terjemahan mengekalkan maksud asal

### Keperluan Sumbangan

- Setuju dengan Microsoft CLA (semakan automatik di PR pertama)
- Ikuti [Kod Etika Sumber Terbuka Microsoft](https://opensource.microsoft.com/codeofconduct/)
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk garis panduan terperinci
- Rujuk nombor isu dalam penerangan PR jika berkenaan

### Proses Semakan

- PR disemak oleh penyelenggara dan komuniti
- Kejelasan pendidikan diutamakan
- Contoh kod harus mengikuti amalan terbaik semasa
- Terjemahan disemak dari segi ketepatan dan kesesuaian budaya

## Sistem Terjemahan

### Terjemahan Automatik

- Menggunakan GitHub Actions dengan aliran kerja co-op-translator
- Menterjemah ke lebih 50+ bahasa secara automatik
- Fail sumber dalam direktori utama
- Fail terjemahan dalam direktori `translations/{language-code}/`

### Penambahan Penambahbaikan Terjemahan Manual

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

## Penyahpepijatan dan Penyelesaian Masalah

### Isu Lazim

**Aplikasi kuiz gagal dimulakan**:
- Periksa versi Node.js (v14+ disyorkan)
- Padamkan `node_modules` dan `package-lock.json`, jalankan `npm install` semula
- Periksa konflik port (default: Vite menggunakan port 5173)

**Pelayan API tidak mula**:
- Sahkan versi Node.js memenuhi minimum (node >=10)
- Periksa jika port sudah digunakan
- Pastikan semua kebergantungan dipasang dengan `npm install`

**Pelanjutan penyemak imbas tidak dimuat**:
- Sahkan manifest.json diformat dengan betul
- Periksa konsol penyemak imbas untuk ralat
- Ikuti arahan pemasangan pelanjutan khusus penyemak imbas

**Isu projek chat Python**:
- Pastikan pakej OpenAI dipasang: `pip install openai`
- Sahkan pembolehubah persekitaran GITHUB_TOKEN ditetapkan
- Periksa kebenaran akses Model GitHub

**Docsify tidak menyajikan dokumen**:
- Pasang docsify-cli secara global: `npm install -g docsify-cli`
- Jalankan dari direktori root repositori
- Periksa bahawa `docs/_sidebar.md` wujud

### Petua Persekitaran Pembangunan

- Gunakan VS Code dengan sambungan Live Server untuk projek HTML
- Pasang sambungan ESLint dan Prettier untuk pemformatan konsisten
- Gunakan DevTools penyemak imbas untuk menyahpepijat JavaScript
- Untuk projek Vue, pasang sambungan penyemak imbas Vue DevTools

### Pertimbangan Prestasi

- Bilangan fail terjemahan yang banyak (50+ bahasa) menyebabkan clone penuh besar
- Gunakan shallow clone jika hanya bekerja pada kandungan: `git clone --depth 1`
- Kecualikan terjemahan daripada carian apabila bekerja pada kandungan Inggeris
- Proses binaan mungkin perlahan pada larian pertama (npm install, binaan Vite)

## Pertimbangan Keselamatan

### Pembolehubah Persekitaran

- Kunci API tidak boleh disimpan dalam repositori
- Gunakan fail `.env` (sudah dalam `.gitignore`)
- Dokumentasikan pembolehubah persekitaran yang diperlukan dalam README projek

### Projek Python

- Gunakan persekitaran maya: `python -m venv venv`
- Kekalkan kebergantungan dikemas kini
- Token GitHub harus mempunyai kebenaran minimum yang diperlukan

### Akses Model GitHub

- Token Akses Peribadi (PAT) diperlukan untuk Model GitHub
- Token harus disimpan sebagai pembolehubah persekitaran
- Jangan sekali-kali simpan token atau kredensial dalam repo

## Nota Tambahan

### Sasaran Audiens

- Pemula mutlak dalam pembangunan web
- Pelajar dan pembelajar kendiri
- Guru menggunakan kurikulum dalam bilik darjah
- Kandungan direka untuk aksesibiliti dan pembangunan kemahiran secara berperingkat

### Falsafah Pendidikan

- Pendekatan pembelajaran berasaskan projek
- Semakan pengetahuan kerap (kuiz)
- Latihan praktikal menulis kod
- Contoh aplikasi dunia sebenar
- Fokus kepada asas sebelum rangka kerja

### Penyelenggaraan Repositori

- Komuniti pelajar dan penyumbang yang aktif
- Kemas kini berkala ke kebergantungan dan kandungan
- Isu dan perbincangan dipantau oleh penyelenggara
- Kemas kini terjemahan diotomatikkan melalui GitHub Actions

### Sumber Berkaitan

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) disyorkan untuk pelajar
- Kursus tambahan: AI Generatif, Sains Data, ML, kurikulum IoT tersedia

### Bekerja dengan Projek Spesifik

Untuk arahan terperinci tentang projek individu, rujuk fail README di:
- `quiz-app/README.md` - aplikasi kuiz Vue 3
- `7-bank-project/README.md` - aplikasi perbankan dengan pengesahan
- `5-browser-extension/README.md` - pembangunan pelanjutan penyemak imbas
- `6-space-game/README.md` - pembangunan permainan berasaskan canvas
- `9-chat-project/README.md` - projek pembantu chat AI

### Struktur Monorepo

Walaupun bukan monorepo tradisional, repositori ini mengandungi pelbagai projek bebas:
- Setiap pelajaran berdiri sendiri
- Projek tidak berkongsi kebergantungan
- Bekerja pada projek individu tanpa menjejaskan projek lain
- Clone helaian repo untuk pengalaman kurikulum penuh

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila sedar bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidakakuratan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang sahih. Untuk maklumat penting, terjemahan profesional oleh manusia disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->