# AGENTS.md

## Gambaran Projek

Ini adalah repositori kurikulum pendidikan untuk mengajar asas pembangunan web kepada pemula. Kurikulum ini adalah kursus komprehensif selama 12 minggu yang dibangunkan oleh Microsoft Cloud Advocates, menampilkan 24 pelajaran praktikal yang merangkumi JavaScript, CSS, dan HTML.

### Komponen Utama

- **Kandungan Pendidikan**: 24 pelajaran tersusun yang diatur dalam modul berasaskan projek  
- **Projek Praktikal**: Terrarium, Permainan Mengetik, Sambungan Pelayar, Permainan Angkasa, Aplikasi Perbankan, Penyunting Kod, dan Pembantu Sembang AI  
- **Kuiz Interaktif**: 48 kuiz dengan 3 soalan setiap satu (penilaian sebelum/selepas pelajaran)  
- **Sokongan Pelbagai Bahasa**: Terjemahan automatik untuk lebih 50+ bahasa melalui GitHub Actions  
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk projek AI)  

### Seni Bina

- Repositori pendidikan dengan struktur berasaskan pelajaran  
- Setiap folder pelajaran mengandungi README, contoh kod, dan penyelesaian  
- Projek berdiri sendiri dalam direktori berasingan (quiz-app, pelbagai projek pelajaran)  
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)  
- Dokumentasi disediakan melalui Docsify dan tersedia dalam format PDF  

## Perintah Penyediaan

Repositori ini utamanya untuk penggunaan kandungan pendidikan. Untuk bekerja dengan projek tertentu:

### Penyediaan Repositori Utama

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Penyediaan Aplikasi Kuiz (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Mula pelayan pembangunan
npm run build      # Bina untuk pengeluaran
npm run lint       # Jalankan ESLint
```

### API Projek Perbankan (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Mula pelayan API
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
2. **Clone fork anda** secara tempatan  
3. **Cipta cawangan baru** untuk perubahan anda  
4. Buat perubahan pada kandungan pelajaran atau contoh kod  
5. Uji sebarang perubahan kod dalam direktori projek berkaitan  
6. Hantar permintaan tarik mengikut garis panduan sumbangan  

### Untuk Pelajar

1. Fork atau clone repositori  
2. Navigasi ke direktori pelajaran secara berurutan  
3. Baca fail README untuk setiap pelajaran  
4. Lengkapkan kuiz pra-pelajaran di https://ff-quizzes.netlify.app/web/  
5. Ikuti contoh kod dalam folder pelajaran  
6. Selesaikan tugasan dan cabaran  
7. Ambil kuiz pasca-pelajaran  

### Pembangunan Secara Langsung

- **Dokumentasi**: Jalankan `docsify serve` di root (port 3000)  
- **Aplikasi Kuiz**: Jalankan `npm run dev` dalam direktori quiz-app  
- **Projek**: Gunakan sambungan VS Code Live Server untuk projek HTML  
- **Projek API**: Jalankan `npm start` dalam direktori API yang sesuai  

## Arahan Ujian

### Ujian Aplikasi Kuiz

```bash
cd quiz-app
npm run lint       # Periksa isu gaya kod
npm run build      # Sahkan binaan berjaya
```

### Ujian API Bank

```bash
cd 7-bank-project/api
npm run lint       # Periksa isu gaya kod
node server.js     # Sahkan server bermula tanpa ralat
```

### Pendekatan Ujian Am

- Ini adalah repositori pendidikan tanpa ujian automatik menyeluruh  
- Ujian manual fokus pada:  
  - Contoh kod berjalan tanpa ralat  
  - Pautan dalam dokumentasi berfungsi dengan betul  
  - Pembinaan projek selesai dengan jayanya  
  - Contoh mengikuti amalan terbaik  

### Semakan Pra-Hantar

- Jalankan `npm run lint` dalam direktori yang mempunyai package.json  
- Sahkan pautan markdown sah  
- Uji contoh kod dalam pelayar atau Node.js  
- Periksa bahawa terjemahan mengekalkan struktur yang betul  

## Garis Panduan Gaya Kod

### JavaScript

- Gunakan sintaks moden ES6+  
- Ikuti konfigurasi ESLint standard yang disediakan dalam projek  
- Gunakan nama pemboleh ubah dan fungsi yang bermakna untuk kejelasan pendidikan  
- Tambah komen yang menerangkan konsep untuk pelajar  
- Format menggunakan Prettier jika dikonfigurasikan  

### HTML/CSS

- Elemen semantic HTML5  
- Prinsip reka bentuk responsif  
- Konvensyen penamaan kelas yang jelas  
- Komen yang menerangkan teknik CSS untuk pelajar  

### Python

- Garis panduan gaya PEP 8  
- Contoh kod yang jelas dan pendidikan  
- Petunjuk jenis (type hints) di mana berguna untuk pembelajaran  

### Dokumentasi Markdown

- Hierarki tajuk yang jelas  
- Blok kod dengan spesifikasi bahasa  
- Pautan kepada sumber tambahan  
- Tangkapan layar dan imej dalam direktori `images/`  
- Teks alt untuk imej bagi aksesibiliti  

### Penyusunan Fail

- Pelajaran dinomborkan secara berurutan (1-getting-started-lessons, 2-js-basics, dll.)  
- Setiap projek ada direktori `solution/` dan sering `start/` atau `your-work/`  
- Imej disimpan dalam folder `images/` khusus pelajaran  
- Terjemahan dalam struktur `translations/{language-code}/`  

## Pembinaan dan Penghantaran

### Penghantaran Aplikasi Kuiz (Azure Static Web Apps)

Aplikasi kuiz dikonfigurasikan untuk penghantaran Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Membuat folder dist/
# Melakukan penyebaran melalui aliran kerja GitHub Actions apabila tolak ke main
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

### Pembinaan Projek-Spesifik

Setiap direktori projek mungkin mempunyai proses pembinaan sendiri:  
- Projek Vue: `npm run build` menghasilkan bundel untuk pengeluaran  
- Projek statik: Tiada langkah pembinaan, fail dihidangkan terus  

## Garis Panduan Permintaan Tarik

### Format Tajuk

Gunakan tajuk yang jelas dan deskriptif yang menunjukkan bidang perubahan:  
- `[Quiz-app] Tambah kuiz baru untuk pelajaran X`  
- `[Lesson-3] Betulkan kesalahan taip dalam projek terrarium`  
- `[Translation] Tambah terjemahan Sepanyol untuk pelajaran 5`  
- `[Docs] Kemas kini arahan penyediaan`  

### Semakan Wajib

Sebelum menghantar PR:

1. **Kualiti Kod**:  
   - Jalankan `npm run lint` dalam direktori projek berkaitan  
   - Betulkan semua ralat dan amaran linting  

2. **Pengesahan Pembinaan**:  
   - Jalankan `npm run build` jika berkenaan  
   - Pastikan tiada ralat pembinaan  

3. **Pengesahan Pautan**:  
   - Uji semua pautan markdown  
   - Sahkan rujukan imej berfungsi  

4. **Semakan Kandungan**:  
   - Semak ejaan dan tatabahasa  
   - Pastikan contoh kod betul dan pendidikan  
   - Sahkan terjemahan mengekalkan makna asal  

### Keperluan Sumbangan

- Setuju dengan Microsoft CLA (semakan automatik pada PR pertama)  
- Ikuti [Kod Etika Sumber Terbuka Microsoft](https://opensource.microsoft.com/codeofconduct/)  
- Rujuk [CONTRIBUTING.md](./CONTRIBUTING.md) untuk garis panduan terperinci  
- Rujukkan nombor isu dalam penerangan PR jika sesuai  

### Proses Semakan

- PR disemak oleh penyelenggara dan komuniti  
- Kejelasan pendidikan diutamakan  
- Contoh kod harus mengikuti amalan terbaik semasa  
- Terjemahan disemak untuk ketepatan dan kesesuaian budaya  

## Sistem Terjemahan

### Terjemahan Automatik

- Menggunakan GitHub Actions dengan aliran kerja co-op-translator  
- Menerjemah ke 50+ bahasa secara automatik  
- Fail sumber dalam direktori utama  
- Fail terjemahan dalam direktori `translations/{language-code}/`  

### Menambah Penambahbaikan Terjemahan Manual

1. Cari fail dalam `translations/{language-code}/`  
2. Buat penambahbaikan sambil mengekalkan struktur  
3. Pastikan contoh kod kekal berfungsi  
4. Uji sebarang kandungan kuiz berlokalisasi  

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

## Pengesanan Ralat dan Penyelesaian Masalah

### Isu Lazim

**Aplikasi kuiz gagal bermula**:  
- Semak versi Node.js (disarankan v14+)  
- Padam `node_modules` dan `package-lock.json`, jalankan `npm install` lagi  
- Semak konflik port (default: Vite guna port 5173)  

**Pelayan API tidak bermula**:  
- Sahkan versi Node.js memenuhi minimum (node >=10)  
- Semak jika port sudah digunakan  
- Pastikan semua kebergantungan dipasang dengan `npm install`  

**Sambungan pelayar tidak dimuat**:  
- Sahkan manifest.json diformat dengan betul  
- Periksa konsol pelayar untuk ralat  
- Ikuti arahan pemasangan sambungan khusus pelayar  

**Isu projek sembang Python**:  
- Pastikan pakej OpenAI dipasang: `pip install openai`  
- Sahkan pembolehubah persekitaran GITHUB_TOKEN diset  
- Semak kebenaran akses Model GitHub  

**Docsify tidak menghidangkan dokumen**:  
- Pasang docsify-cli secara global: `npm install -g docsify-cli`  
- Jalankan dari direktori root repositori  
- Pastikan `docs/_sidebar.md` wujud  

### Petua Persekitaran Pembangunan

- Gunakan VS Code dengan sambungan Live Server untuk projek HTML  
- Pasang sambungan ESLint dan Prettier untuk format konsisten  
- Gunakan DevTools pelayar untuk debug JavaScript  
- Untuk projek Vue, pasang sambungan Vue DevTools pelayar  

### Pertimbangan Prestasi

- Bilangan fail terjemahan besar (50+ bahasa) menjadikan klon penuh besar  
- Gunakan klon cetek jika hanya bekerja pada kandungan: `git clone --depth 1`  
- Kecualikan terjemahan dari carian semasa bekerja pada kandungan Bahasa Inggeris  
- Proses pembinaan mungkin lambat pada run pertama (npm install, bina Vite)  

## Pertimbangan Keselamatan

### Pembolehubah Persekitaran

- Kunci API tidak harus dikomit ke repositori  
- Gunakan fail `.env` (sudah ada dalam `.gitignore`)  
- Dokumentasikan pembolehubah persekitaran yang diperlukan dalam README projek  

### Projek Python

- Gunakan persekitaran maya: `python -m venv venv`  
- Kekalkan kebergantungan dikemas kini  
- Token GitHub harus mempunyai kebenaran minimum yang diperlukan  

### Akses Model GitHub

- Personal Access Tokens (PAT) diperlukan untuk Model GitHub  
- Token perlu disimpan sebagai pembolehubah persekitaran  
- Jangan sekali-kali komit token atau kelayakan  

## Nota Tambahan

### Sasaran Audiens

- Pemula sepenuhnya dalam pembangunan web  
- Pelajar dan pembelajar kendiri  
- Guru menggunakan kurikulum dalam bilik darjah  
- Kandungan direka untuk kebolehaksesan dan pembinaan kemahiran secara berperingkat  

### Falsafah Pendidikan

- Pendekatan pembelajaran berasaskan projek  
- Pemeriksaan ilmu kerap (kuiz)  
- Latihan pengkodan secara praktikal  
- Contoh aplikasi dunia sebenar  
- Tumpuan pada asas sebelum kerangka  

### Penyelenggaraan Repositori

- Komuniti aktif pelajar dan penyumbang  
- Kemas kini berkala ke kebergantungan dan kandungan  
- Isu dan perbincangan dipantau oleh penyelenggara  
- Kemas kini terjemahan automatik melalui GitHub Actions  

### Sumber Berkaitan

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)  
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) disyorkan untuk pelajar  
- Kursus tambahan: AI Generatif, Sains Data, ML, kurikulum IoT tersedia  

### Bekerja Dengan Projek Spesifik

Untuk arahan terperinci mengenai projek individu, lihat fail README dalam:  
- `quiz-app/README.md` - Aplikasi kuiz Vue 3  
- `7-bank-project/README.md` - Aplikasi perbankan dengan pengesahan  
- `5-browser-extension/README.md` - Pembangunan sambungan pelayar  
- `6-space-game/README.md` - Pembangunan permainan berasaskan canvas  
- `9-chat-project/README.md` - Projek pembantu sembang AI  

### Struktur Monorepo

Walaupun bukan monorepo tradisional, repositori ini mengandungi beberapa projek bebas:  
- Setiap pelajaran berdiri sendiri  
- Projek tidak berkongsi kebergantungan  
- Bekerja pada projek individu tanpa menjejaskan yang lain  
- Klon keseluruhan repo untuk pengalaman kurikulum penuh  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber rujukan yang sah. Untuk maklumat penting, terjemahan profesional oleh manusia adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->