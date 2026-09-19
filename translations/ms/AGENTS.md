# AGENTS.md

## Gambaran Projek

Ini adalah repositori kurikulum pendidikan untuk mengajar asas pembangunan web kepada pemula. Kurikulum ini adalah kursus menyeluruh selama 12 minggu yang dibangunkan oleh Microsoft Cloud Advocates, yang menampilkan 24 pelajaran praktik meliputi JavaScript, CSS, dan HTML.

### Komponen Utama

- **Kandungan Pendidikan**: 24 pelajaran berstruktur yang diatur dalam modul berasaskan projek  
- **Projek Praktikal**: Terrarium, Permainan Mengetik, Sambungan Pelayar, Permainan Angkasa, Aplikasi Perbankan, Penyunting Kod, dan Pembantu Sembang AI  
- **Kuis Interaktif**: 48 kuis dengan 3 soalan setiap satu (penilaian pra/pasca pelajaran)  
- **Sokongan Pelbagai Bahasa**: Terjemahan automatik untuk 50+ bahasa melalui GitHub Actions  
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk projek AI)  

### Arkitektur

- Repositori pendidikan dengan struktur berasaskan pelajaran  
- Setiap folder pelajaran mengandungi README, contoh kod, dan penyelesaian  
- Projek berdiri sendiri dalam direktori berasingan (quiz-app, pelbagai projek pelajaran)  
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)  
- Dokumentasi disajikan melalui Docsify dan tersedia dalam bentuk PDF  

## Perintah Persediaan

Repositori ini terutamanya untuk penggunaan kandungan pendidikan. Untuk bekerja dengan projek khusus:

### Persediaan Repositori Utama

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Persediaan Quiz App (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Mulakan pelayan pembangunan
npm run build      # Bina untuk pengeluaran
npm run lint       # Jalankan ESLint
```

### Projek API Bank (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Mulakan server API
npm run lint       # Jalankan ESLint
npm run format     # Format dengan Prettier
```

### Projek Sambungan Pelayar

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
2. **Clone fork anda** secara lokal  
3. **Cipta cawangan baru** untuk perubahan anda  
4. Buat perubahan pada kandungan pelajaran atau contoh kod  
5. Uji sebarang perubahan kod dalam direktori projek berkaitan  
6. Hantar pull request mengikut panduan sumbangan  

### Untuk Pelajar

1. Fork atau clone repositori  
2. Navigasi ke direktori pelajaran secara berurutan  
3. Baca fail README untuk setiap pelajaran  
4. Lengkapkan kuiz pra-pelajaran di https://ff-quizzes.netlify.app/web/  
5. Kerjakan contoh kod dalam folder pelajaran  
6. Selesaikan tugasan dan cabaran  
7. Ambil kuiz pasca-pelajaran  

### Pembangunan Langsung

- **Dokumentasi**: Jalankan `docsify serve` dalam root (port 3000)  
- **Quiz App**: Jalankan `npm run dev` dalam direktori quiz-app  
- **Projek**: Gunakan sambungan VS Code Live Server untuk projek HTML  
- **Projek API**: Jalankan `npm start` dalam direktori API yang berkaitan  

## Arahan Ujian

### Ujian Quiz App

```bash
cd quiz-app
npm run lint       # Semak untuk isu gaya kod
npm run build      # Sahkan pembinaan berjaya
```

### Ujian API Bank

```bash
cd 7-bank-project/api
npm run lint       # Periksa isu gaya kod
node server.js     # Sahkan pelayan bermula tanpa ralat
```

### Pendekatan Ujian Umum

- Ini adalah repositori pendidikan tanpa ujian automatik yang menyeluruh  
- Ujian manual memberi tumpuan pada:  
  - Contoh kod berjalan tanpa ralat  
  - Pautan dalam dokumentasi berfungsi dengan betul  
  - Pembinaan projek selesai dengan jayanya  
  - Contoh mengikuti amalan terbaik  

### Semakan Pra-Penghantaran

- Jalankan `npm run lint` dalam direktori yang ada package.json  
- Sahkan pautan markdown adalah sah  
- Uji contoh kod dalam pelayar atau Node.js  
- Periksa terjemahan mengekalkan struktur yang betul  

## Garis Panduan Gaya Kod

### JavaScript

- Gunakan sintaks ES6+ moden  
- Ikuti konfigurasi ESLint piawai yang disediakan dalam projek  
- Gunakan nama pembolehubah dan fungsi yang bermakna untuk kejelasan pendidikan  
- Tambah komen yang menerangkan konsep untuk pelajar  
- Format menggunakan Prettier jika dikonfigurasi  

### HTML/CSS

- Elemen HTML5 semantik  
- Prinsip reka bentuk responsif  
- Konvensyen penamaan kelas yang jelas  
- Komen menerangkan teknik CSS untuk pelajar  

### Python

- Panduan gaya PEP 8  
- Contoh kod jelas dan pendidikan  
- Petunjuk jenis jika membantu pembelajaran  

### Dokumentasi Markdown

- Hierarki tajuk yang jelas  
- Blok kod dengan spesifikasi bahasa  
- Pautan ke sumber tambahan  
- Tangkapan skrin dan imej dalam direktori `images/`  
- Teks alternatif untuk imej untuk aksesibiliti  

### Organisasi Fail

- Pelajaran dinombor secara berurutan (1-getting-started-lessons, 2-js-basics, dll.)  
- Setiap projek mempunyai direktori `solution/` dan sering `start/` atau `your-work/`  
- Imej disimpan dalam folder `images/` khusus pelajaran  
- Terjemahan dalam struktur `translations/{language-code}/`  

## Pembinaan dan Penghantaran

### Penghantaran Quiz App (Azure Static Web Apps)

quiz-app dikonfigurasi untuk penghantaran Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Membuat folder dist/
# Melakukan deploy melalui aliran kerja GitHub Actions apabila push ke main
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

### Pembinaan Projek-spesifik

Setiap direktori projek mungkin mempunyai proses binaan sendiri:  
- Projek Vue: `npm run build` menghasilkan bundel produksi  
- Projek statik: Tiada langkah binaan, hidangkan fail terus  

## Garis Panduan Pull Request

### Format Tajuk

Gunakan tajuk yang jelas dan deskriptif menunjukkan kawasan perubahan:  
- `[Quiz-app] Tambah kuiz baru untuk pelajaran X`  
- `[Lesson-3] Betulkan salah ejaan dalam projek terrarium`  
- `[Translation] Tambah terjemahan Sepanyol untuk pelajaran 5`  
- `[Docs] Kemas kini arahan persediaan`  

### Semakan Diperlukan

Sebelum menghantar PR:

1. **Kualiti Kod**:  
   - Jalankan `npm run lint` dalam direktori projek yang terlibat  
   - Betulkan semua ralat dan amaran lintingan  

2. **Pengesahan Binaan**:  
   - Jalankan `npm run build` jika berkenaan  
   - Pastikan tiada ralat binaan  

3. **Pengesahan Pautan**:  
   - Uji semua pautan markdown  
   - Sahkan rujukan imej berfungsi  

4. **Semakan Kandungan**:  
   - Semak ejaan dan tatabahasa  
   - Pastikan contoh kod betul dan pendidikan  
   - Periksa terjemahan mengekalkan makna asal  

### Keperluan Sumbangan

- Setuju dengan Microsoft CLA (semakan automatik pada PR pertama)  
- Ikut [Kod Tingkah Laku Sumber Terbuka Microsoft](https://opensource.microsoft.com/codeofconduct/)  
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk garis panduan terperinci  
- Rujuk nombor isu dalam keterangan PR jika berkenaan  

### Proses Semakan

- PR disemak oleh penyelenggara dan komuniti  
- Kejelasan pendidikan diutamakan  
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
4. Uji sebarang kandungan kuiz yang dialih bahasa  

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

## Pengesanan Ralat dan Penyelesaian Masalah

### Isu Umum

**Aplikasi kuiz gagal mula**:  
- Periksa versi Node.js (disyorkan v14+)  
- Padam `node_modules` dan `package-lock.json`, jalankan `npm install` semula  
- Periksa konflik port (lalai: Vite menggunakan port 5173)  

**Pelayan API gagal mula**:  
- Sahkan versi Node.js memenuhi minimum (node >=10)  
- Periksa jika port sudah digunakan  
- Pastikan semua kebergantungan dipasang dengan `npm install`  

**Sambungan pelayar gagal dimuat**:  
- Sahkan manifest.json diformat dengan betul  
- Periksa konsol pelayar untuk ralat  
- Ikuti arahan pemasangan sambungan pelayar khusus  

**Isu projek sembang Python**:  
- Pastikan pakej OpenAI dipasang: `pip install openai`  
- Sahkan pembolehubah persekitaran GITHUB_TOKEN ditetapkan  
- Semak kebenaran akses GitHub Models  

**Docsify tidak menyajikan docs**:  
- Pasang docsify-cli secara global: `npm install -g docsify-cli`  
- Jalankan dari direktori root repositori  
- Periksa bahawa `docs/_sidebar.md` wujud  

### Tip Persekitaran Pembangunan

- Gunakan VS Code dengan sambungan Live Server untuk projek HTML  
- Pasang sambungan ESLint dan Prettier untuk format konsisten  
- Gunakan DevTools pelayar untuk debug JavaScript  
- Untuk projek Vue, pasang sambungan pelayar Vue DevTools  

### Pertimbangan Prestasi

- Bilangan fail terjemahan yang besar (50+ bahasa) menjadikan clone penuh besar  
- Gunakan shallow clone jika hanya bekerja pada kandungan: `git clone --depth 1`  
- Kecualikan terjemahan dari carian apabila bekerja pada kandungan Bahasa Inggeris  
- Proses binaan mungkin lambat pada run pertama (npm install, binaan Vite)  

## Pertimbangan Keselamatan

### Pembolehubah Persekitaran

- Kunci API tidak harus dikomit ke repositori  
- Gunakan fail `.env` (sudah dalam `.gitignore`)  
- Dokumenkan pembolehubah persekitaran yang diperlukan dalam README projek  

### Projek Python

- Gunakan persekitaran maya: `python -m venv venv`  
- Kekalkan kebergantungan sentiasa dikemas kini  
- Token GitHub harus mempunyai kebenaran minimum diperlukan  

### Akses GitHub Models

- Token Akses Peribadi (PAT) diperlukan untuk GitHub Models  
- Token harus disimpan sebagai pembolehubah persekitaran  
- Jangan sekali-kali komit token atau kelayakan  

## Nota Tambahan

### Sasaran Audiens

- Pemula lengkap kepada pembangunan web  
- Pelajar dan pembelajar sendiri  
- Guru yang menggunakan kurikulum dalam bilik darjah  
- Kandungan direka untuk aksesibiliti dan pembinaan kemahiran secara berperingkat  

### Falsafah Pendidikan

- Pendekatan pembelajaran berasaskan projek  
- Pemeriksaan pengetahuan kerap (kuiz)  
- Latihan pengkodan praktikal  
- Contoh aplikasi dunia sebenar  
- Fokus pada asas sebelum kerangka kerja  

### Penyelenggaraan Repositori

- Komuniti pelajar dan penyumbang yang aktif  
- Kemas kini biasa pada kebergantungan dan kandungan  
- Isu dan perbincangan dipantau oleh penyelenggara  
- Kemas kini terjemahan automatik melalui GitHub Actions  

### Sumber Berkaitan

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)  
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) disarankan untuk pelajar  
- Kursus tambahan: Generative AI, Data Science, ML, IoT kurikulum tersedia  

### Bekerja dengan Projek Spesifik

Untuk arahan terperinci mengenai projek individu, rujuk fail README dalam:  
- `quiz-app/README.md` - aplikasi kuiz Vue 3  
- `7-bank-project/README.md` - aplikasi perbankan dengan pengesahan  
- `5-browser-extension/README.md` - pembangunan sambungan pelayar  
- `6-space-game/README.md` - pembangunan permainan berasaskan kanvas  
- `9-chat-project/README.md` - projek pembantu sembang AI  

### Struktur Monorepo

Walaupun bukan monorepo tradisional, repositori ini mengandungi pelbagai projek berdikari:  
- Setiap pelajaran berdikari  
- Projek tidak berkongsi kebergantungan  
- Bekerja pada projek individu tanpa menjejaskan yang lain  
- Clone keseluruhan repositori untuk pengalaman kurikulum penuh  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang sahih. Untuk maklumat penting, terjemahan profesional oleh manusia adalah digalakkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->