# AGENTS.md

## Gambaran Projek

Ini adalah repositori kurikulum pendidikan untuk mengajar asas pembangunan web kepada pemula. Kurikulum ini adalah kursus komprehensif selama 12 minggu yang dibangunkan oleh Microsoft Cloud Advocates, menampilkan 24 pelajaran praktikal yang merangkumi JavaScript, CSS, dan HTML.

### Komponen Utama

- **Kandungan Pendidikan**: 24 pelajaran berstruktur yang disusun dalam modul berasaskan projek  
- **Projek Praktikal**: Terrarium, Permainan Mengetik, Sambungan Pelayar, Permainan Angkasa, Aplikasi Perbankan, Penyunting Kod, dan Pembantu Sembang AI  
- **Kuiz Interaktif**: 48 kuiz dengan 3 soalan setiap satu (penilaian sebelum/selepas pelajaran)  
- **Sokongan Pelbagai Bahasa**: Terjemahan automatik ke 50+ bahasa melalui GitHub Actions  
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk projek AI)  

### Senibina

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

### Projek Sambungan Pelayar

```bash
cd 5-browser-extension/solution
npm install
# Ikuti arahan pemuatan pelanjutan khusus pelayar
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
5. Uji sebarang perubahan kod dalam direktori projek yang relevan  
6. Hantar pull request mengikut garis panduan penyumbangan  

### Untuk Pelajar

1. Fork atau clone repositori  
2. Navigasi ke direktori pelajaran secara berurutan  
3. Baca fail README untuk setiap pelajaran  
4. Lengkapkan kuiz sebelum pelajaran di https://ff-quizzes.netlify.app/web/  
5. Kerjakan contoh kod dalam folder pelajaran  
6. Selesaikan tugasan dan cabaran  
7. Ambil kuiz selepas pelajaran  

### Pembangunan Langsung

- **Dokumentasi**: Jalankan `docsify serve` di akar (port 3000)  
- **Aplikasi Kuiz**: Jalankan `npm run dev` di direktori quiz-app  
- **Projek**: Gunakan peluasan VS Code Live Server untuk projek HTML  
- **Projek API**: Jalankan `npm start` di direktori API masing-masing  

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
npm run lint       # Semak masalah gaya kod
node server.js     # Sahkan pelayan bermula tanpa ralat
```

### Pendekatan Ujian Umum

- Ini adalah repositori pendidikan tanpa ujian automatik menyeluruh  
- Ujian manual fokus pada:  
  - Contoh kod boleh dijalankan tanpa ralat  
  - Pautan dalam dokumentasi berfungsi dengan betul  
  - Pembinaan projek selesai dengan jayanya  
  - Contoh mengikuti amalan terbaik  

### Semakan Sebelum Hantar

- Jalankan `npm run lint` dalam direktori yang mempunyai package.json  
- Sahkan pautan markdown sah  
- Uji contoh kod dalam pelayar atau Node.js  
- Pastikan terjemahan mengekalkan struktur yang betul  

## Garis Panduan Gaya Kod

### JavaScript

- Gunakan sintaksis ES6+ moden  
- Ikuti konfigurasi ESLint piawai yang disediakan dalam projek  
- Gunakan nama pemboleh ubah dan fungsi yang bermakna untuk kejelasan pendidikan  
- Tambah komen yang menerangkan konsep untuk pelajar  
- Format menggunakan Prettier di mana dikonfigurasi  

### HTML/CSS

- Elemen HTML5 semantik  
- Prinsip reka bentuk responsif  
- Konvensyen penamaan kelas yang jelas  
- Komen menerangkan teknik CSS untuk pelajar  

### Python

- Garis panduan gaya PEP 8  
- Contoh kod jelas dan edukatif  
- Petunjuk jenis di mana berguna untuk pembelajaran  

### Dokumentasi Markdown

- Hierarki tajuk yang jelas  
- Blok kod dengan spesifikasi bahasa  
- Pautan ke sumber tambahan  
- Tangkapan skrin dan imej dalam direktori `images/`  
- Teks alt untuk imej bagi aksesibiliti  

### Organisasi Fail

- Pelajaran dinamakan mengikut nombor secara berurutan (1-getting-started-lessons, 2-js-basics, dll.)  
- Setiap projek mempunyai direktori `solution/` dan sering `start/` atau `your-work/`  
- Imej disimpan dalam folder `images/` khusus pelajaran  
- Terjemahan dalam struktur `translations/{language-code}/`  

## Pembinaan dan Penghantaran

### Penghantaran Aplikasi Kuiz (Azure Static Web Apps)

Aplikasi quiz-app dikonfigurasi untuk penghantaran Azure Static Web Apps:

```bash
cd quiz-app
npm run build      # Membuat folder dist/
# Mengedar melalui aliran kerja GitHub Actions pada tolak ke main
```

Konfigurasi Azure Static Web Apps:  
- **Lokasi app**: `/quiz-app`  
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
docsify serve                 # Hidangkan pada localhost:3000
```

### Pembinaan Spesifik Projek

Setiap direktori projek mungkin mempunyai proses pembinaan sendiri:  
- Projek Vue: `npm run build` untuk menghasilkan bundel produksi  
- Projek statik: Tiada langkah binaan, layani fail terus  

## Garis Panduan Pull Request

### Format Tajuk

Gunakan tajuk yang jelas dan deskriptif menunjukkan kawasan perubahan:  
- `[Quiz-app] Tambah kuiz baru untuk pelajaran X`  
- `[Lesson-3] Betulkan kesalahan taip dalam projek terrarium`  
- `[Translation] Tambah terjemahan Sepanyol untuk pelajaran 5`  
- `[Docs] Kemas kini arahan persediaan`  

### Semakan Wajib

Sebelum menghantar PR:

1. **Kualiti Kod**:  
   - Jalankan `npm run lint` dalam direktori projek yang terjejas  
   - Betulkan semua ralat dan amaran lint  

2. **Pengesahan Binaan**:  
   - Jalankan `npm run build` jika berkenaan  
   - Pastikan tiada ralat binaan  

3. **Pengesahan Pautan**:  
   - Uji semua pautan markdown  
   - Sahkan rujukan imej berfungsi  

4. **Semakan Kandungan**:  
   - Semak ejaan dan tatabahasa  
   - Pastikan contoh kod betul dan mudah difahami  
   - Sahkan terjemahan mengekalkan maksud asal  

### Keperluan Sumbangan

- Setuju dengan Microsoft CLA (semakan automatik pada PR pertama)  
- Ikuti [Kod Etika Sumber Terbuka Microsoft](https://opensource.microsoft.com/codeofconduct/)  
- Lihat [CONTRIBUTING.md](./CONTRIBUTING.md) untuk garis panduan terperinci  
- Rujuk nombor isu dalam keterangan PR jika berkenaan  

### Proses Semakan

- PR disemak oleh penyelenggara dan komuniti  
- Kejelasan pendidikan diutamakan  
- Contoh kod harus mengikut amalan terbaik terkini  
- Terjemahan disemak untuk ketepatan dan keaslian budaya  

## Sistem Terjemahan

### Terjemahan Automatik

- Menggunakan GitHub Actions dengan aliran kerja co-op-translator  
- Menterjemah ke 50+ bahasa secara automatik  
- Fail sumber di direktori utama  
- Fail terjemahan dalam direktori `translations/{language-code}/`  

### Menambah Penambahbaikan Terjemahan Manual

1. Cari fail di `translations/{language-code}/`  
2. Buat penambahbaikan sambil mengekalkan struktur  
3. Pastikan contoh kod kekal berfungsi  
4. Uji sebarang kandungan kuiz yang dilokalkan  

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

### Isu Lazim

**Aplikasi kuiz gagal mula**:  
- Semak versi Node.js (disyorkan v14+)  
- Padam `node_modules` dan `package-lock.json`, jalankan `npm install` semula  
- Semak konflik port (default: Vite guna port 5173)  

**Server API tidak bermula**:  
- Sahkan versi Node.js memenuhi minimum (node >=10)  
- Semak sama ada port sudah digunakan  
- Pastikan semua pergantungan dipasang dengan `npm install`  

**Sambungan pelayar tidak dimuatkan**:  
- Sahkan format manifest.json betul  
- Semak konsol pelayar untuk ralat  
- Ikuti arahan pemasangan sambungan khusus pelayar  

**Isu projek sembang Python**:  
- Pastikan pakej OpenAI dipasang: `pip install openai`  
- Sahkan pembolehubah persekitaran GITHUB_TOKEN diset  
- Semak kebenaran akses GitHub Models  

**Docsify tidak menyajikan dokumentasi**:  
- Pasang docsify-cli secara global: `npm install -g docsify-cli`  
- Jalankan dari direktori akar repositori  
- Semak kewujudan `docs/_sidebar.md`  

### Petua Persekitaran Pembangunan

- Gunakan VS Code dengan peluasan Live Server untuk projek HTML  
- Pasang peluasan ESLint dan Prettier untuk format konsisten  
- Gunakan DevTools pelayar untuk debug JavaScript  
- Untuk projek Vue, pasang peluasan Vue DevTools pelayar  

### Pertimbangan Prestasi

- Bilangan fail terjemahan yang besar (50+ bahasa) menyebabkan clone penuh besar  
- Gunakan clone cetek jika hanya bekerja pada kandungan: `git clone --depth 1`  
- Kecualikan terjemahan daripada carian apabila bekerja pada kandungan Bahasa Inggeris  
- Proses binaan mungkin perlahan pada kali pertama (npm install, binaan Vite)  

## Pertimbangan Keselamatan

### Pembolehubah Persekitaran

- Kunci API tidak pernah harus dimasukkan ke repositori  
- Gunakan fail `.env` (sudah disenaraikan dalam `.gitignore`)  
- Dokumentasikan pembolehubah persekitaran yang diperlukan dalam README projek  

### Projek Python

- Gunakan persekitaran maya: `python -m venv venv`  
- Kemas kini pergantungan secara berkala  
- Token GitHub harus mempunyai kebenaran minimum yang diperlukan  

### Akses GitHub Models

- Token Akses Peribadi (PAT) diperlukan untuk GitHub Models  
- Token harus disimpan sebagai pembolehubah persekitaran  
- Jangan sekali-kali komit token atau kelayakan  

## Nota Tambahan

### Sasaran Audiens

- Pemula lengkap dalam pembangunan web  
- Pelajar dan pembelajar kendiri  
- Guru yang menggunakan kurikulum dalam bilik darjah  
- Kandungan direka untuk aksesibiliti dan pembinaan kemahiran secara berperingkat  

### Falsafah Pendidikan

- Pendekatan pembelajaran berasaskan projek  
- Semakan pengetahuan yang kerap (kuiz)  
- Latihan kod praktikal  
- Contoh aplikasi dunia sebenar  
- Fokus pada asas sebelum penggunaan rangka kerja  

### Penyelenggaraan Repositori

- Komuniti pelajar dan penyumbang yang aktif  
- Kemas kini berkala untuk pergantungan dan kandungan  
- Isu dan perbincangan dipantau oleh penyelenggara  
- Kemas kini terjemahan diotomatikkan melalui GitHub Actions  

### Sumber Berkaitan

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)  
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) disyorkan untuk pelajar  
- Kursus tambahan: AI Generatif, Sains Data, ML, kurikulum IoT tersedia  

### Bekerja dengan Projek Tertentu

Untuk arahan terperinci projek individu, rujuk fail README dalam:  
- `quiz-app/README.md` - aplikasi kuiz Vue 3  
- `7-bank-project/README.md` - aplikasi perbankan dengan pengesahan  
- `5-browser-extension/README.md` - pembangunan sambungan pelayar  
- `6-space-game/README.md` - pembangunan permainan berasaskan canvas  
- `9-chat-project/README.md` - projek pembantu sembang AI  

### Struktur Monorepo

Walaupun bukan monorepo tradisional, repositori ini mengandungi pelbagai projek bebas:  
- Setiap pelajaran berdiri sendiri  
- Projek tidak berkongsi pergantungan  
- Bekerja pada projek individu tanpa mempengaruhi yang lain  
- Clone keseluruhan repo untuk pengalaman kurikulum penuh  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk mencapai ketepatan, sila ambil maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya hendaklah dianggap sebagai sumber yang sahih. Untuk maklumat yang kritikal, terjemahan profesional oleh manusia adalah disyorkan. Kami tidak bertanggungjawab terhadap sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->