# Audit Komprehensif Kebolehcapaian Laman Web

## Arahan

Dalam tugasan ini, anda akan menjalankan audit kebolehcapaian laman web pada tahap profesional, menggunakan prinsip dan teknik yang telah anda pelajari. Pengalaman praktikal ini akan memperdalam pemahaman anda tentang halangan kebolehcapaian dan penyelesaiannya.

Pilih laman web yang kelihatan mempunyai isu kebolehcapaian—ini memberikan lebih banyak peluang pembelajaran berbanding menganalisis laman yang sudah sempurna. Calon yang baik termasuk laman web lama, aplikasi web yang kompleks, atau laman dengan kandungan multimedia yang kaya.

### Fasa 1: Penilaian manual strategik

Sebelum menggunakan alat automatik, lakukan penilaian manual yang menyeluruh. Pendekatan berpusatkan manusia ini sering mendedahkan isu yang tidak dapat dikesan oleh alat dan membantu anda memahami pengalaman pengguna sebenar.

**🔍 Kriteria penilaian penting:**

**Navigasi dan Struktur:**
- Bolehkah anda menavigasi seluruh laman hanya menggunakan papan kekunci (Tab, Shift+Tab, Enter, Space, kekunci anak panah)?
- Adakah penunjuk fokus jelas kelihatan pada semua elemen interaktif?
- Adakah struktur tajuk (H1-H6) mencipta rangka kandungan yang logik?
- Adakah terdapat pautan lompat untuk terus ke kandungan utama?

**Kebolehcapaian Visual:**
- Adakah terdapat kontras warna yang mencukupi di seluruh laman (minimum 4.5:1 untuk teks biasa)?
- Adakah laman bergantung sepenuhnya pada warna untuk menyampaikan maklumat penting?
- Adakah semua imej mempunyai teks alternatif yang sesuai?
- Adakah susun atur tetap berfungsi apabila dizum hingga 200%?

**Kandungan dan Komunikasi:**
- Adakah terdapat teks pautan seperti "klik di sini" atau teks pautan yang tidak jelas?
- Bolehkah anda memahami kandungan dan fungsi tanpa petunjuk visual?
- Adakah medan borang dilabel dan dikelompokkan dengan betul?
- Adakah mesej ralat jelas dan membantu?

**Elemen Interaktif:**
- Adakah semua butang dan kawalan borang berfungsi hanya dengan papan kekunci?
- Adakah perubahan kandungan dinamik diumumkan kepada pembaca skrin?
- Adakah dialog modal dan widget kompleks mengikuti corak kebolehcapaian yang betul?

📝 **Dokumentasikan penemuan anda** dengan contoh spesifik, tangkapan skrin, dan URL halaman. Catatkan kedua-dua isu dan perkara yang dilakukan dengan baik.

### Fasa 2: Ujian automatik yang menyeluruh

Kini sahkan dan kembangkan penemuan manual anda menggunakan alat ujian kebolehcapaian standard industri. Setiap alat mempunyai kekuatan yang berbeza, jadi menggunakan pelbagai alat memberikan liputan yang lengkap.

**🛠️ Alat ujian yang diperlukan:**

1. **Lighthouse Accessibility Audit** (terbina dalam Chrome/Edge DevTools)
   - Jalankan audit pada beberapa halaman
   - Fokus pada metrik dan cadangan spesifik
   - Catat skor kebolehcapaian anda dan pelanggaran spesifik

2. **axe DevTools** (sambungan pelayar - standard industri)
   - Pengesanan isu yang lebih terperinci berbanding Lighthouse
   - Memberikan contoh kod spesifik untuk pembaikan
   - Ujian terhadap kriteria WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (sambungan pelayar)
   - Representasi visual ciri kebolehcapaian
   - Menonjolkan kedua-dua kesalahan dan ciri positif
   - Hebat untuk memahami struktur halaman

4. **Penganalisis Kontras Warna**
   - WebAIM Contrast Checker untuk pasangan warna spesifik
   - Sambungan pelayar untuk analisis seluruh halaman
   - Ujian terhadap standard WCAG AA dan AAA

**🎧 Ujian teknologi bantuan sebenar:**
- **Ujian pembaca skrin**: Gunakan NVDA (Windows), VoiceOver (Mac), atau TalkBack (Android)
- **Navigasi papan kekunci sahaja**: Cabut tetikus anda dan navigasi seluruh laman
- **Ujian zum**: Uji fungsi pada tahap zum 200% dan 400%
- **Ujian kawalan suara**: Jika tersedia, cuba alat navigasi suara

**📊 Susun hasil anda** dengan mencipta hamparan induk yang mengandungi:
- Penerangan isu dan lokasi
- Tahap keparahan (Kritikal/Tinggi/Sederhana/Rendah)
- Kriteria kejayaan WCAG yang dilanggar
- Alat yang mengesan isu
- Tangkapan skrin dan bukti

### Fasa 3: Dokumentasi penemuan yang menyeluruh

Cipta laporan audit kebolehcapaian profesional yang menunjukkan pemahaman anda tentang kedua-dua isu teknikal dan impaknya kepada manusia.

**📋 Bahagian laporan yang diperlukan:**

1. **Ringkasan Eksekutif** (1 halaman)
   - URL laman web dan penerangan ringkas
   - Tahap kematangan kebolehcapaian keseluruhan
   - 3 isu paling kritikal
   - Anggaran impak kepada pengguna kurang upaya

2. **Metodologi** (½ halaman)
   - Pendekatan ujian dan alat yang digunakan
   - Halaman yang dinilai dan kombinasi peranti/pelayar
   - Standard yang dinilai (WCAG 2.1 AA)

3. **Penemuan Terperinci** (2-3 halaman)
   - Isu dikategorikan mengikut prinsip WCAG (Boleh Dipercepatkan, Boleh Dikendalikan, Boleh Difahami, Kukuh)
   - Sertakan tangkapan skrin dan contoh spesifik
   - Catatkan ciri kebolehcapaian positif yang anda temui
   - Rujuk silang dengan hasil alat automatik

4. **Penilaian Impak Pengguna** (1 halaman)
   - Bagaimana isu yang dikenal pasti memberi kesan kepada pengguna dengan pelbagai ketidakupayaan
   - Senario yang menerangkan pengalaman pengguna sebenar
   - Impak perniagaan (risiko undang-undang, SEO, pengembangan pangkalan pengguna)

**📸 Pengumpulan bukti:**
- Tangkapan skrin pelanggaran kebolehcapaian
- Rakaman skrin aliran pengguna yang bermasalah
- Laporan alat (simpan sebagai PDF)
- Contoh kod yang menunjukkan isu

### Fasa 4: Pelan pemulihan profesional

Bangunkan pelan strategik dan keutamaan untuk memperbaiki isu kebolehcapaian. Ini menunjukkan keupayaan anda untuk berfikir seperti pembangun web profesional yang menangani kekangan perniagaan sebenar.

**🎯 Cipta cadangan penambahbaikan terperinci (minimum 10 isu):**

**Untuk setiap isu yang dikenal pasti, sediakan:**

- **Penerangan Isu**: Penjelasan jelas tentang apa yang salah dan mengapa ia bermasalah
- **Rujukan WCAG**: Kriteria kejayaan spesifik yang dilanggar (contoh, "2.4.4 Tujuan Pautan (Dalam Konteks) - Tahap A")
- **Impak Pengguna**: Bagaimana ini memberi kesan kepada orang dengan pelbagai ketidakupayaan
- **Penyelesaian**: Perubahan kod spesifik, pengubahsuaian reka bentuk, atau penambahbaikan proses
- **Tahap Keutamaan**: Kritikal (menghalang penggunaan asas) / Tinggi (halangan signifikan) / Sederhana (isu kebolehgunaan) / Rendah (peningkatan)
- **Usaha Pelaksanaan**: Anggaran masa/kerumitan (Pembaikan cepat / Usaha sederhana / Penstrukturan semula besar)
- **Pengesahan Ujian**: Cara untuk mengesahkan pembaikan berfungsi

**Contoh entri penambahbaikan:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Fasa pelaksanaan strategik:**

- **Fasa 1 (0-2 minggu)**: Isu kritikal yang menghalang fungsi asas
- **Fasa 2 (1-2 bulan)**: Penambahbaikan keutamaan tinggi untuk pengalaman pengguna yang lebih baik
- **Fasa 3 (3-6 bulan)**: Peningkatan keutamaan sederhana dan penambahbaikan proses
- **Fasa 4 (Berterusan)**: Pemantauan dan peningkatan berterusan

## Rubrik Penilaian

Audit kebolehcapaian anda akan dinilai berdasarkan ketepatan teknikal dan penyampaian profesional:

| Kriteria | Cemerlang (90-100%) | Baik (80-89%) | Memuaskan (70-79%) | Perlu Penambahbaikan (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Kedalaman Ujian Manual** | Penilaian menyeluruh meliputi semua prinsip POUR dengan pemerhatian terperinci dan senario pengguna | Liputan baik kebanyakan kawasan kebolehcapaian dengan penemuan jelas dan beberapa analisis impak pengguna | Penilaian asas meliputi kawasan utama dengan pemerhatian mencukupi | Ujian terhad dengan pemerhatian dangkal dan pertimbangan impak pengguna yang minimum |
| **Penggunaan Alat & Analisis** | Menggunakan semua alat yang diperlukan dengan berkesan, merujuk silang penemuan, termasuk bukti jelas, dan menganalisis batasan alat | Menggunakan kebanyakan alat dengan dokumentasi baik, beberapa rujukan silang, dan bukti mencukupi | Menggunakan alat yang diperlukan dengan dokumentasi asas dan beberapa bukti | Penggunaan alat minimum, dokumentasi lemah, atau bukti yang hilang |
| **Pengenalpastian & Pengkategorian Isu** | Mengenal pasti 15+ isu spesifik merentasi semua prinsip WCAG, mengkategorikan dengan tepat mengikut keparahan, menunjukkan pemahaman mendalam | Mengenal pasti 10-14 isu merentasi kebanyakan prinsip WCAG, pengkategorian baik, menunjukkan pemahaman kukuh | Mengenal pasti 7-9 isu dengan liputan WCAG mencukupi dan pengkategorian asas | Mengenal pasti <7 isu dengan skop terhad atau pengkategorian lemah |
| **Kualiti & Kebolehlaksanaan Penyelesaian** | 10+ penyelesaian terperinci, boleh dilaksanakan dengan rujukan WCAG yang tepat, garis masa pelaksanaan realistik, dan kaedah pengesahan | 8-9 penyelesaian yang dibangunkan dengan baik dengan rujukan yang kebanyakannya tepat dan butiran pelaksanaan yang baik | 6-7 penyelesaian asas dengan beberapa butiran dan pendekatan yang umumnya realistik | <6 penyelesaian atau butiran tidak mencukupi, pelaksanaan tidak realistik |
| **Komunikasi Profesional** | Laporan disusun dengan cemerlang, ditulis dengan jelas, termasuk ringkasan eksekutif, menggunakan bahasa teknikal yang sesuai, dan mengikuti standard dokumen perniagaan | Disusun dengan baik dengan kualiti penulisan yang baik, termasuk kebanyakan bahagian yang diperlukan, nada yang sesuai | Disusun dengan mencukupi dengan penulisan yang boleh diterima, termasuk bahagian asas yang diperlukan | Susunan lemah, penulisan tidak jelas, atau kekurangan bahagian utama |
| **Aplikasi Dunia Sebenar** | Menunjukkan pemahaman tentang impak perniagaan, pertimbangan undang-undang, kepelbagaian pengguna, dan cabaran pelaksanaan praktikal | Menunjukkan pemahaman yang baik tentang aplikasi praktikal dengan beberapa konteks perniagaan | Pemahaman asas tentang aplikasi dunia sebenar | Hubungan terhad kepada aplikasi praktikal |

## Pilihan Cabaran Lanjutan

**🚀 Untuk pelajar yang mencari cabaran tambahan:**

- **Analisis Perbandingan**: Audit 2-3 laman web pesaing dan bandingkan tahap kematangan kebolehcapaian mereka
- **Fokus Kebolehcapaian Mudah Alih**: Kajian mendalam tentang isu kebolehcapaian khusus mudah alih menggunakan Android TalkBack atau iOS VoiceOver
- **Perspektif Antarabangsa**: Kajian dan penerapan standard kebolehcapaian dari negara lain (EN 301 549, Seksyen 508, ADA)
- **Semakan Kenyataan Kebolehcapaian**: Menilai kenyataan kebolehcapaian laman web (jika ada) berdasarkan penemuan anda

## Hasil Kerja

Hantar laporan audit kebolehcapaian yang komprehensif yang menunjukkan analisis tahap profesional dan perancangan pelaksanaan praktikal:

**📄 Keperluan Laporan Akhir:**

1. **Ringkasan Eksekutif** (1 halaman)
   - Gambaran keseluruhan laman web dan penilaian kematangan kebolehcapaian
   - Ringkasan penemuan utama dengan impak perniagaan
   - Tindakan keutamaan yang disyorkan

2. **Metodologi dan Skop** (1 halaman)
   - Pendekatan ujian, alat yang digunakan, dan kriteria penilaian
   - Halaman/bahagian yang dinilai dan sebarang batasan
   - Rangka kerja pematuhan standard (WCAG 2.1 AA)

3. **Laporan Penemuan Terperinci** (3-4 halaman)
   - Pemerhatian ujian manual dengan senario pengguna
   - Hasil alat automatik dengan rujukan silang
   - Isu disusun mengikut prinsip WCAG dengan bukti
   - Ciri kebolehcapaian positif yang dikenal pasti

4. **Pelan Pemulihan Strategik** (3-4 halaman)
   - Cadangan penambahbaikan yang diutamakan (minimum 10)
   - Garis masa pelaksanaan dengan anggaran usaha
   - Metrik kejayaan dan kaedah pengesahan
   - Strategi penyelenggaraan kebolehcapaian jangka panjang

5. **Bukti Sokongan** (Lampiran)
   - Tangkapan skrin pelanggaran kebolehcapaian dan alat ujian
   - Contoh kod yang menunjukkan isu dan penyelesaian
   - Laporan alat dan ringkasan audit
   - Nota atau rakaman ujian pembaca skrin

**📊 Keperluan Format:**
- **Format dokumen**: PDF (penyampaian profesional)
- **Bilangan perkataan**: 2,500-3,500 perkataan (tidak termasuk lampiran dan tangkapan skrin)
- **Elemen visual**: Sertakan tangkapan skrin, diagram, dan contoh sepanjang laporan
- **Petikan**: Rujuk garis panduan WCAG dan sumber kebolehcapaian dengan sewajarnya

**💡 Petua untuk Kecemerlangan:**
- Gunakan format laporan profesional dengan tajuk dan gaya yang konsisten
- Sertakan jadual kandungan untuk navigasi mudah
- Seimbangkan ketepatan teknikal dengan bahasa yang jelas dan sesuai untuk perniagaan
- Tunjukkan pemahaman tentang pelaksanaan teknikal dan impak pengguna

## Hasil Pembelajaran

Selepas menyelesaikan audit kebolehcapaian yang komprehensif ini, anda akan membangunkan kemahiran profesional penting:

**🎯 Kompetensi Teknikal:**
- **Penguasaan Ujian Kebolehcapaian**: Kemahiran dengan kaedah ujian manual dan automatik standard industri
- **Penerapan WCAG**: Pengalaman praktikal menerapkan Garis Panduan Kandungan Web Kebolehcapaian kepada senario dunia sebenar
- **Pemahaman Teknologi Bantuan**: Pengalaman langsung dengan pembaca skrin dan navigasi papan kekunci
- **Pemetaan Masalah-Penyelesaian**: Keupayaan untuk mengenal pasti halangan kebolehcapaian dan membangunkan strategi pemulihan yang spesifik dan boleh dilaksanakan

**💼 Kemahiran Profesional:**
- **Komunikasi Teknikal**: Pengalaman menulis laporan kebolehcapaian profesional untuk pelbagai pihak berkepentingan
- **Perancangan Strategik**: Keupayaan untuk mengutamakan penambahbaikan kebolehcapaian berdasarkan impak pengguna dan kebolehlaksanaan pelaksanaan
- **Jaminan Kualiti**: Pemahaman tentang ujian kebolehcapaian sebagai sebahagian daripada kitaran hayat pembangunan
- **Penilaian Risiko**: Penghargaan terhadap implikasi undang-undang, perniagaan, dan etika pematuhan kebolehcapaian

**🌍 Pemikiran Reka Bentuk Inklusif:**
- **Empati Pengguna**: Pemahaman mendalam tentang keperluan pengguna yang pelbagai dan interaksi teknologi bantuan
- **Prinsip Reka Bentuk Universal**: Pengiktirafan bahawa reka bentuk yang boleh diakses memberi manfaat kepada semua pengguna, bukan hanya mereka yang kurang upaya
- **Peningkatan Berterusan**: Rangka kerja untuk penilaian dan peningkatan kebolehcapaian yang berterusan
- **Kemahiran Advokasi**: Keyakinan untuk mempromosikan amalan terbaik kebolehcapaian dalam projek dan pasukan masa depan

**🚀 Persediaan Kerjaya:**
Tugasan ini mencerminkan projek perundingan kebolehcapaian dunia sebenar, memberikan anda pengalaman yang layak untuk portfolio yang menunjukkan:
- Pendekatan penyelesaian masalah yang sistematik
- Perhatian kepada kedua-dua butiran teknikal dan impak perniagaan
- Komunikasi jelas konsep teknikal yang kompleks
- Pemahaman tentang tanggungjawab undang-undang dan etika dalam pembangunan web

Selepas selesai, anda akan bersedia untuk menyumbang secara bermakna kepada inisiatif kebolehcapaian dalam mana-mana peranan pembangunan web dan memperjuangkan amalan reka bentuk inklusif sepanjang kerjaya anda.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.