# AGENTS.md

## Gambaran Projek

Ini adalah repositori kurikulum pendidikan untuk mengajar asas pembangunan web kepada pemula. Kurikulum ini adalah kursus lengkap selama 12 minggu yang dibangunkan oleh Microsoft Cloud Advocates, menampilkan 24 pelajaran amali yang merangkumi JavaScript, CSS, dan HTML.

### Komponen Utama

- **Kandungan Pendidikan**: 24 pelajaran berstruktur yang disusun dalam modul berasaskan projek  
- **Projek Praktikal**: Terrarium, Permainan Mengetik, Sambungan Pelayar, Permainan Angkasa, Aplikasi Perbankan, Penyunting Kod, dan Pembantu Sembang AI  
- **Kuis Interaktif**: 48 kuis dengan 3 soalan setiap satu (penilaian pra/pasca pelajaran)  
- **Sokongan Pelbagai Bahasa**: Terjemahan automatik untuk lebih 50+ bahasa melalui GitHub Actions  
- **Teknologi**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (untuk projek AI)  

### Senibina

- Repositori pendidikan dengan struktur berasaskan pelajaran  
- Setiap folder pelajaran mengandungi README, contoh kod, dan penyelesaian  
- Projek berdikari di direktori berasingan (quiz-app, pelbagai projek pelajaran)  
- Sistem terjemahan menggunakan GitHub Actions (co-op-translator)  
- Dokumentasi dihidangkan melalui Docsify dan tersedia sebagai PDF  

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
npm run dev        # Mula pelayan pembangunan
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
# Ikuti arahan muat naik pelanjutan khusus pelayar
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
3. **Buat cawangan baru** untuk perubahan anda  
4. Buat perubahan pada kandungan pelajaran atau contoh kod  
5. Uji sebarang perubahan kod dalam direktori projek berkaitan  
6. Hantar pull request mengikut panduan sumbangan  

### Untuk Pelajar

1. Fork atau clone repositori  
2. Navigasi ke direktori pelajaran secara berurutan  
3. Baca fail README untuk setiap pelajaran  
4. Selesaikan kuis pra-pelajaran di https://ff-quizzes.netlify.app/web/  
5. Kerjakan contoh kod dalam folder pelajaran  
6. Lengkapkan tugasan dan cabaran  
7. Ambil kuis pasca-pelajaran  

### Pembangunan Langsung

- **Dokumentasi**: Jalankan `docsify serve` di root (port 3000)  
- **Aplikasi Kuis**: Jalankan `npm run dev` di direktori quiz-app  
- **Projek**: Gunakan sambungan Live Server VS Code untuk projek HTML  
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
npm run lint       # Periksa masalah gaya kod
node server.js     # Sahkan pelayan bermula tanpa ralat
```
  
### Pendekatan Ujian Umum

- Ini adalah repositori pendidikan tanpa ujian automatik menyeluruh  
- Ujian manual memberi fokus kepada:  
  - Contoh kod berjalan tanpa ralat  
  - Pautan dalam dokumentasi berfungsi dengan betul  
  - Projek membina dengan jayanya  
  - Contoh mengikut amalan terbaik  

### Semakan Pra-penyerahan

- Jalankan `npm run lint` di direktori dengan package.json  
- Sahkan pautan markdown adalah sah  
- Uji contoh kod dalam pelayar atau Node.js  
- Semak terjemahan mengekalkan struktur betul  

## Garis Panduan Gaya Kod

### JavaScript

- Gunakan sintaks ES6+ moden  
- Ikuti konfigurasi ESLint standard yang disediakan dalam projek  
- Gunakan nama pembolehubah dan fungsi bermakna untuk kejelasan pendidikan  
- Tambah komen yang menerangkan konsep untuk pelajar  
- Format menggunakan Prettier apabila dikonfigurasi  

### HTML/CSS

- Elemen semantic HTML5  
- Prinsip reka bentuk responsif  
- Konvensyen nama kelas yang jelas  
- Komen menerangkan teknik CSS untuk pelajar  

### Python

- Garis panduan gaya PEP 8  
- Contoh kod jelas dan pendidikan  
- Petunjuk jenis jika membantu pembelajaran  

### Dokumentasi Markdown

- Hierarki tajuk yang jelas  
- Blok kod dengan spesifikasi bahasa  
- Pautan ke sumber tambahan  
- Tangkapan skrin dan imej dalam direktori `images/`  
- Teks alt untuk imej demi aksesibiliti  

### Pengurusan Fail

- Pelajaran bernombor secara berurutan (1-getting-started-lessons, 2-js-basics, dan lain-lain)  
- Setiap projek ada `solution/` dan biasanya `start/` atau `your-work/` direktori  
- Imej disimpan dalam folder `images/` khusus pelajaran  
- Terjemahan dalam struktur `translations/{language-code}/`  

## Pembinaan dan Penyebaran

### Penyebaran Aplikasi Kuis (Azure Static Web Apps)

quiz-app dikonfigurasi untuk penyebaran Azure Static Web Apps:  

```bash
cd quiz-app
npm run build      # Mewujudkan folder dist/
# Melaksanakan melalui alur kerja GitHub Actions apabila push ke main
```
  
Konfigurasi Azure Static Web Apps:  
- **Lokasi app**: `/quiz-app`  
- **Lokasi output**: `dist`  
- **Aliran kerja**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`  

### Penjanaan PDF Dokumentasi

```bash
npm install                    # Pasang docsify-to-pdf
npm run convert               # Jana PDF daripada docs
```
  
### Dokumentasi Docsify

```bash
npm install -g docsify-cli    # Pasang Docsify secara global
docsify serve                 # Hidangkan pada localhost:3000
```
  
### Pembinaan Khusus Projek

Setiap direktori projek mungkin mempunyai proses binaan sendiri:  
- Projek Vue: `npm run build` menghasilkan bundel produksi  
- Projek statik: Tiada langkah binaan, hidangkan fail secara langsung  

## Garis Panduan Pull Request

### Format Tajuk

Gunakan tajuk jelas dan deskriptif yang menunjukkan kawasan perubahan:  
- `[Quiz-app] Tambah kuiz baru untuk pelajaran X`  
- `[Pelajaran-3] Betulkan kesilapan ejaan dalam projek terrarium`  
- `[Terjemahan] Tambah terjemahan Sepanyol untuk pelajaran 5`  
- `[Docs] Kemas kini arahan persediaan`  

### Semakan Wajib

Sebelum menghantar PR:  

1. **Kualiti Kod**:  
   - Jalankan `npm run lint` di direktori projek terlibat  
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
   - Sahkan terjemahan mengekalkan maksud asal  

### Keperluan Penyumbangan

- Setuju dengan Microsoft CLA (semakan automatik pada PR pertama)  
- Ikuti [Kod Etika Sumber Terbuka Microsoft](https://opensource.microsoft.com/codeofconduct/)  
- Rujuk [CONTRIBUTING.md](./CONTRIBUTING.md) untuk panduan terperinci  
- Rujuk nombor isu dalam penerangan PR jika berkenaan  

### Proses Semakan

- PR disemak oleh penyelenggara dan komuniti  
- Kejelasan pendidikan diberi keutamaan  
- Contoh kod harus mengikut amalan terbaik semasa  
- Terjemahan disemak dari segi ketepatan dan kesesuaian budaya  

## Sistem Terjemahan

### Terjemahan Automatik

- Menggunakan GitHub Actions dengan workflow co-op-translator  
- Menerjemah ke 50+ bahasa secara automatik  
- Fail sumber dalam direktori utama  
- Fail terjemahan dalam `translations/{language-code}/` direktori  

### Menambah Penambahbaikan Terjemahan Manual

1. Cari fail dalam `translations/{language-code}/`  
2. Lakukan penambahbaikan sambil mengekalkan struktur  
3. Pastikan contoh kod masih berfungsi  
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
  
## Pengesanan Masalah dan Penyelesaian Masalah

### Isu Lazim

**Aplikasi kuis gagal mula**:  
- Semak versi Node.js (disyorkan v14+)  
- Padam `node_modules` dan `package-lock.json`, jalankan `npm install` semula  
- Semak konflik port (default: Vite menggunakan port 5173)  

**Server API tidak mula**:  
- Sahkan versi Node.js memenuhi minimum (node >=10)  
- Semak sama ada port sudah digunakan  
- Pastikan semua kebergantungan dipasang dengan `npm install`  

**Sambungan pelayar tidak dimuatkan**:  
- Sahkan manifest.json diformat dengan betul  
- Semak konsol pelayar untuk ralat  
- Ikut arahan pemasangan sambungan khusus pelayar  

**Isu projek chat Python**:  
- Pastikan pakej OpenAI dipasang: `pip install openai`  
- Sahkan pembolehubah persekitaran GITHUB_TOKEN diset  
- Semak kebenaran akses Model GitHub  

**Docsify tidak menghidang dokumentasi**:  
- Pasang docsify-cli secara global: `npm install -g docsify-cli`  
- Jalankan dari direktori root repositori  
- Semak bahawa `docs/_sidebar.md` wujud  

### Petua Persekitaran Pembangunan

- Gunakan VS Code dengan sambungan Live Server untuk projek HTML  
- Pasang sambungan ESLint dan Prettier untuk format konsisten  
- Gunakan DevTools pelayar untuk pengesanan JavaScript  
- Untuk projek Vue, pasang sambungan Vue DevTools pelayar  

### Pertimbangan Prestasi

- Bilangan fail terjemahan yang banyak (50+ bahasa) bermakna klon penuh adalah besar  
- Gunakan shallow clone jika hanya bekerja pada kandungan: `git clone --depth 1`  
- Kecualikan terjemahan daripada carian apabila bekerja pada kandungan Bahasa Inggeris  
- Proses binaan mungkin lambat pada larian pertama (npm install, binaan Vite)  

## Pertimbangan Keselamatan

### Pembolehubah Persekitaran

- Kekunci API tidak harus pernah dikomit ke repositori  
- Gunakan fail `.env` (sudah dalam `.gitignore`)  
- Dokumentasikan pembolehubah persekitaran diperlukan dalam README projek  

### Projek Python

- Gunakan persekitaran maya: `python -m venv venv`  
- Pastikan kebergantungan dikemas kini  
- Token GitHub harus mempunyai kebenaran minimum diperlukan  

### Akses Model GitHub

- Token Akses Peribadi (PAT) diperlukan untuk Model GitHub  
- Token harus disimpan sebagai pembolehubah persekitaran  
- Jangan sekali-kali komit token atau kelayakan  

## Nota Tambahan

### Audiens Sasaran

- Pemula lengkap dalam pembangunan web  
- Pelajar dan pembelajar kendiri  
- Guru yang menggunakan kurikulum dalam bilik darjah  
- Kandungan direka untuk aksesibiliti dan pembinaan kemahiran secara berperingkat  

### Falsafah Pendidikan

- Pendekatan pembelajaran berasaskan projek  
- Pemeriksaan ilmu yang kerap (kuis)  
- Latihan pengkodan amali  
- Contoh aplikasi dunia nyata  
- Fokus pada asas sebelum kerangka kerja  

### Penyelenggaraan Repositori

- Komuniti pembelajar dan penyumbang yang aktif  
- Kemas kini berkala ke kebergantungan dan kandungan  
- Isu dan perbincangan dipantau oleh penyelenggara  
- Kemas kini terjemahan automatik melalui GitHub Actions  

### Sumber Berkaitan

- [Modul Microsoft Learn](https://docs.microsoft.com/learn/)  
- [Sumber Student Hub](https://docs.microsoft.com/learn/student-hub/)  
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) disyorkan untuk pelajar  
- Kursus tambahan: AI Generatif, Sains Data, ML, kurikulum IoT tersedia  

### Bekerja dengan Projek Tertentu

Untuk arahan terperinci mengenai projek individu, rujuk fail README dalam:  
- `quiz-app/README.md` - aplikasi kuis Vue 3  
- `7-bank-project/README.md` - aplikasi perbankan dengan pengesahan  
- `5-browser-extension/README.md` - pembangunan sambungan pelayar  
- `6-space-game/README.md` - pembangunan permainan berasaskan canvas  
- `9-chat-project/README.md` - projek pembantu sembang AI  

### Struktur Monorepo

Walaupun bukan monorepo tradisional, repositori ini mengandungi pelbagai projek bebas:  
- Setiap pelajaran adalah berdikari  
- Projek tidak berkongsi kebergantungan  
- Bekerja pada projek individu tanpa menjejaskan projek lain  
- Klon keseluruhan repo untuk pengalaman kurikulum penuh  

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila diberi perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidakakuratan. Dokumen asal dalam bahasa asalnya hendaklah dianggap sebagai sumber yang sahih. Untuk maklumat kritikal, terjemahan profesional oleh manusia adalah disyorkan. Kami tidak bertanggungjawab terhadap sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->