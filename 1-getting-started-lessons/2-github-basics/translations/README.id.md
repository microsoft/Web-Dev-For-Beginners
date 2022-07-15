# Dasar-dasar GitHub

Pelajaran ini mencakup dasar-dasar GitHub, platform untuk menghosting dan mengelola perubahan pada kode Anda.

![Dasar-dasar GitHub](/sketchnotes/webdev101-github.png)
> Catatan sketsa oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Pra-Kuliah

[Kuis pra-kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/3?loc=id)

## Pengantar

Dalam pelajaran ini, kami akan membahas:

- melacak pekerjaan yang Anda lakukan di mesin Anda
- mengerjakan proyek dengan orang lain
- bagaimana berkontribusi pada perangkat lunak sumber terbuka

### Prasyarat

Sebelum memulai, Anda harus memeriksa apakah Git sudah diinstal. Di terminal ketik:
`git --version`

Jika Git tidak diinstal, [unduh Git](https://git-scm.com/downloads). Kemudian, atur profil Git lokal Anda di terminal:
`git config --global user.name "nama-anda"`
`git config --global user.email "email-anda"`

Untuk memeriksa apakah Git sudah dikonfigurasi, Anda dapat mengetik:
`git config --list`

Anda juga memerlukan akun GitHub, editor kode (seperti Visual Studio Code), dan Anda harus membuka terminal (atau: command prompt).

Buka [github.com](https://github.com/) dan buat akun jika Anda belum melakukannya, atau masuk dan isi profil Anda.

✅ GitHub bukan satu-satunya repositori kode di dunia; ada yang lain, tapi GitHub adalah yang paling terkenal

### Persiapan

Anda akan memerlukan folder dengan proyek kode di komputer lokal Anda (laptop atau PC), dan repositori publik di GitHub, yang akan berfungsi sebagai contoh cara berkontribusi pada proyek orang lain.

---

## Manajemen kode

Katakanlah Anda memiliki folder secara lokal dengan beberapa proyek kode dan Anda ingin mulai melacak kemajuan Anda menggunakan git - sistem kontrol versi. Beberapa orang membandingkan penggunaan git dengan menulis surat cinta untuk diri Anda di masa depan. Membaca pesan commit Anda beberapa hari atau minggu atau bulan kemudian, Anda akan dapat mengingat mengapa Anda membuat keputusan, atau "membatalkan" perubahan - yaitu, saat Anda menulis "pesan commit" yang baik.

### Tugas: Membuat repositori dan menyerahkan kode

1. **Buat repositori di GitHub**. Di GitHub.com, di tab repositories, atau dari kanan atas bilah navigasi, temukan tombol **repo baru (new repo)**.

   1. Beri nama repositori (folder) Anda
   1. Pilih **create repository**.

1. **Arahkan ke folder kerja Anda**. Di terminal Anda, beralihlah ke folder (juga dikenal sebagai direktori) yang ingin Anda mulai lacak. Ketik:

   ```bash
   cd [nama folder anda]
   ```

1. **Inisialisasi repositori git**. Dalam proyek Anda ketik:

   ```bash
   git init
   ```

1. **Periksa status**. Untuk memeriksa status repositori Anda ketik:

   ```bash
   git status
   ```

   hasilnya akan terlihat seperti ini:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Pada umunya perintah `git status` memberi tahu Anda hal-hal seperti file apa yang siap untuk _simpan_ ke repo atau ada perubahan di dalamnya yang mungkin ingin Anda pertahankan.

1. **Tambahkan file ke pelacakan**

   ```bash
   git add .
   ```

   `git add` ditambah argumen `.` menunjukkan bahwa semua file dan perubahan Anda untuk pelacakan.

1. **Mempertahankan pekerjaan Anda**. Pada titik ini Anda telah menambahkan file ke apa yang disebut _staging area_ (area pementasan). Tempat di mana Git melacak file Anda. Untuk membuat perubahan permanen Anda perlu _commit_ (menyerahkan) file. Untuk melakukannya, Anda membuat _commit_ dengan perintah `git commit`. Sebuah _commit_ mewakili titik penyimpanan dalam riwayat repo Anda. Ketik berikut ini untuk membuat _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Ini menyerahkan (commit) semua file Anda, menambahkan pesan "first commit". Untuk pesan commit di masa mendatang, Anda akan ingin lebih deskriptif dalam deskripsi Anda untuk menyampaikan jenis perubahan apa yang telah Anda buat.

1. **Hubungkan repo Git lokal Anda dengan GitHub**. Sebuah Repo Git bagus di mesin Anda tetapi pada titik tertentu Anda ingin memiliki cadangan file Anda di suatu tempat dan juga mengundang orang lain untuk bekerja dengan Anda di repo Anda. Salah satu tempat yang bagus untuk melakukannya adalah GitHub. Ingat kita sudah membuat repo di GitHub jadi satu-satunya hal yang perlu kita lakukan adalah menghubungkan repo Git lokal kita dengan GitHub. Perintah `git remote add` akan melakukan hal itu. Ketik perintah berikut:

   > Catatan, sebelum Anda mengetik perintah, buka halaman repo GitHub Anda untuk menemukan URL repositori. Anda akan menggunakannya di perintah di bawah ini. Ganti `nama_repository` dengan URL GitHub Anda.

   ```bash
   git remote add origin https://github.com/username/nama_repository.git
   ```

   Ini membuat _remote_, atau koneksi, bernama "origin" yang menunjuk ke repositori GitHub yang Anda buat sebelumnya.

1. **Kirim file lokal ke GitHub**. Sejauh ini Anda telah membuat _connection_ (koneksi) antara repo lokal dan repo GitHub. Ayo kirim file-file ini ke GitHub dengan perintah berikut `git push`, seperti itu:

   ```bash
   git push -u origin main
   ```

   Ini mengirimkan komit Anda di cabang "main" Anda ke GitHub.

1. **Untuk menambahkan lebih banyak perubahan**. Jika Anda ingin terus membuat perubahan dan menerapkannya ke GitHub, Anda hanya perlu menggunakan tiga perintah berikut:

   ```bash
   git add .
   git commit -m "ketik pesan komit Anda di sini"
   git push
   ```

   > Tip, Anda mungkin juga ingin mengadopsi file `.gitignore` untuk mencegah file yang tidak ingin Anda lacak muncul di GitHub - seperti file catatan yang Anda simpan di folder yang sama tetapi tidak memiliki tempat di repositori publik. Anda dapat menemukan template untuk file `.gitignore` di [.gitignore templates](github.com/github/gitignore).

#### Pesan commit

Baris subjek Git commit yang bagus melengkapi kalimat berikut:
Jika diterapkan, komit ini akan <baris subjek Anda di sini>

Untuk subjek gunakan imperatif, bentuk waktu sekarang (present tense): "merubah" bukan "perubahan" atau "mengubah". 
Seperti pada subjek, dalam tubuh (opsional) juga gunakan imperatif, bentuk waktu sekarang. Tubuh harus memasukkan motivasi untuk perubahan dan membandingkannya dengan perilaku sebelumnya. Anda menjelaskan `mengapa`, bukan `bagaimana`.

✅ Luangkan beberapa menit untuk menjelajahi GitHub. Dapatkah Anda menemukan pesan commit yang sangat bagus? Dapatkah Anda menemukan yang sangat minim? Informasi apa yang menurut Anda paling penting dan berguna untuk disampaikan dalam pesan commit?

### Tugas: Berkolaborasi

Alasan utama menempatkan sesuatu di GitHub adalah untuk memungkinkan kolaborasi dengan pengembang lain.

## Mengerjakan proyek dengan orang lain

Di repositori Anda, buka `Insights > Community` untuk melihat bagaimana proyek Anda dibandingkan dengan standar komunitas yang direkomendasikan.

   Berikut beberapa hal yang dapat meningkatkan repo GitHub Anda:
   - **Deskripsi**. Apakah Anda menambahkan deskripsi untuk proyek Anda?
   - **README**. Apakah Anda menambahkan README? GitHub memberikan panduan untuk menulis [README](https://docs.github.com/articles/about-readmes/).
   - **Panduan berkontribusi**. Apakah project Anda memiliki [pedoman kontribusi](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Kode etik**. sebuah [Kode etik](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Lisensi**. Mungkin yang paling penting, sebuah [lisensi](https://docs.github.com/articles/adding-a-license-to-a-repository/)?

Semua sumber daya ini akan bermanfaat bagi anggota tim baru. Dan biasanya itu adalah jenis hal yang dilihat oleh kontributor baru bahkan sebelum melihat kode Anda, untuk mengetahui apakah proyek Anda adalah tempat yang tepat bagi mereka untuk menghabiskan waktu mereka..

✅ File README, meskipun membutuhkan waktu untuk mempersiapkannya, sering kali diabaikan oleh pengelola yang sibuk. Dapatkah Anda menemukan contoh yang sangat deskriptif? Catatan: ada beberapa [alat untuk membantu membuat README yang baik](https://www.makeareadme.com/) yang mungkin ingin Anda coba.

### Tugas: Menggabungkan beberapa kode

Dokumen kontribusi membantu orang berkontribusi pada proyek. Itu menjelaskan jenis kontribusi yang Anda cari dan bagaimana prosesnya bekerja. Kontributor harus melalui serangkaian langkah untuk dapat berkontribusi ke repo Anda di GitHub:

1. **Membagi (Forking) repo Anda** Anda mungkin ingin orang _fork_ proyek Anda. Forking berarti membuat replika repositori Anda di profil GitHub mereka.
1. **Clone**. Dari sana mereka akan mengkloning proyek tersebut ke mesin lokal mereka. 
1. **Buat cabang**. Anda akan ingin meminta mereka untuk membuat _branch_ (cabang) untuk pekerjaan mereka. 
1. **Fokuskan perubahan mereka pada satu area**. Minta kontributor untuk memusatkan kontribusinya pada satu hal pada satu waktu - dengan begitu, peluang Anda untuk _menggabungkan_ dalam pekerjaan mereka lebih tinggi. Bayangkan mereka menulis perbaikan bug, menambahkan fitur baru, dan memperbarui beberapa pengujian - bagaimana jika Anda ingin, atau hanya dapat mengimplementasikan 2 dari 3, atau 1 dari 3 perubahan?

✅ Bayangkan situasi di mana cabang sangat penting untuk menulis dan mengirimkan kode yang baik. Kasus penggunaan apa yang dapat Anda pikirkan?

> Perhatikan, jadilah perubahan yang ingin Anda lihat di dunia, dan buat cabang untuk pekerjaan Anda juga. Komit apa pun yang Anda buat akan dilakukan di cabang tempat Anda "check out" saat ini. Gunakan `git status` untuk melihat cabang mana itu.

Mari kita melalui alur kerja kontributor. Asumsikan kontributor sudah _forked (membagi)_ dan _cloned (mengkloning)_ repo sehingga mereka memiliki repo Git yang siap untuk dikerjakan, di mesin lokal mereka:

1. **Buat cabang**. Gunakan perintah `git branch` untuk membuat cabang yang akan berisi perubahan yang dimaksudkan untuk dikontribusikan:

   ```bash
   git branch [nama-cabang]
   ```

1. **Beralih ke cabang kerja**. Beralih ke cabang yang ditentukan dan perbarui direktori kerja dengan `git switch`:

   ```bash
   git switch [nama-cabang]
   ```

1. **Bekerja**. Pada titik ini Anda ingin menambahkan perubahan Anda. Jangan lupa untuk memberi tahu Git tentangnya dengan perintah berikut:

   ```bash
   git add .
   git commit -m "perubahan saya"
   ```

   Pastikan Anda memberikan nama yang baik pada komitmen Anda, demi Anda dan juga pemelihara repo yang Anda bantu.

1. **Gabungkan pekerjaan Anda dengan cabang `main`**. Pada titik tertentu Anda telah selesai bekerja dan Anda ingin menggabungkan pekerjaan Anda dengan pekerjaan yang ada di cabang `main`. Cabang `main` mungkin telah berubah sementara itu jadi pastikan Anda terlebih dahulu memperbaruinya ke yang terbaru dengan perintah berikut:

   ```bash
   git switch main
   git pull
   ```

   Pada titik ini Anda ingin memastikan bahwa setiap _conflicts (konflik)_, situasi di mana Git tidak dapat dengan mudah _combine (menggabugkan)_ perubahan terjadi di cabang kerja Anda. Oleh karena itu jalankan perintah berikut:

   ```bash
   git switch [nama-cabang]
   git merge main
   ```

   Ini akan membawa semua perubahan dari `main` ke cabang Anda dan mudah-mudahan Anda bisa langsung melanjutkan. Jika tidak, VS Code akan memberi tahu Anda di mana Git _confused (bingung)_ dan Anda hanya mengubah file yang terpengaruh untuk mengatakan konten mana yang paling akurat.

1. **Kirim pekerjaan Anda ke GitHub**. Mengirim pekerjaan Anda ke GitHub berarti dua hal. Mendorong cabang Anda ke repo Anda dan kemudian membuka PR, Pull Request (Permintaan Tarik).

   ```bash
   git push --set-upstream origin [nama-cabang]
   ```

   Perintah di atas membuat cabang di repo bercabang Anda.

1. ****. Selanjutnya, Anda ingin membuka PR. Anda melakukannya dengan menavigasi ke repo bercabang di GitHub. Anda akan melihat indikasi di GitHub yang menanyakan apakah Anda ingin membuat PR baru, Anda mengkliknya dan Anda akan dibawa ke antarmuka di mana Anda dapat mengubah judul pesan commit, berikan deskripsi yang lebih sesuai. Sekarang pengelola repo Anda bercabang akan melihat PR ini dan _semoga_ mereka akan menghargai dan _merge (menggabungkan)_ PR Anda. Anda sekarang menjadi kontributor, hore :)

1. **Membersihkan**. Ini dianggap praktik yang baik untuk _membersihkan_ setelah Anda. Anda ingin membersihkan cabang lokal dan cabang yang Anda dorong ke GitHub. Pertama mari kita hapus secara lokal dengan perintah berikut:

   ```bash
   git branch -d [nama-cabang]
   ```

   Pastikan Anda membuka halaman GitHub untuk repo bercabang berikutnya dan hapus cabang jarak jauh yang baru saja Anda dorong ke sana.

`Pull request` sepertinya istilah yang konyol karena Anda benar-benar ingin mendorong perubahan Anda ke proyek. Namun pengelola (pemilik proyek) atau tim inti perlu mempertimbangkan perubahan Anda sebelum menggabungkannya dengan cabang "main" proyek, jadi Anda benar-benar meminta keputusan perubahan dari pengelola.  

Pull request adalah tempat untuk membandingkan dan mendiskusikan perbedaan yang diperkenalkan pada cabang dengan ulasan, komentar, pengujian terintegrasi, dan banyak lagi. Pull request yang baik mengikuti aturan yang kira-kira sama dengan pesan komit. Anda dapat menambahkan referensi ke masalah di pelacak masalah, ketika pekerjaan Anda, misalnya, memperbaiki masalah (issue). Ini dilakukan dengan menggunakan `#` diikuti dengan nomor masalah (issue) Anda. Misalnya `#97`.

🤞Semoga semua pemeriksaan lulus dan pemilik proyek menggabungkan perubahan Anda ke dalam proyek🤞

Perbarui cabang lokal Anda saat ini dengan semua komit baru dari cabang jarak jauh yang sesuai di GitHub:

`git pull`

## Bagaimana berkontribusi pada open source

Pertama, mari temukan repositori - atau: repo - di GitHub yang Anda minati dan yang ingin Anda beri kontribusi perubahan. Anda akan ingin menyalin konten ke mesin kami.

✅ Cara yang baik untuk menemukan repositori 'ramah-pemula' adalah [menelusuri dengan tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-mulai-berkontribusi-ke-open-source/).

![Salin repo secara lokal](../images/clone_repo.png)

Ada beberapa cara untuk menyalin kode. Salah satu caranya adalah dengan "menggandakan" konten repositori, menggunakan HTTPS, SSH, atau menggunakan GitHub CLI (Command Line Interface).

Buka terminal Anda dan kloning repositori seperti ini:
`git clone https://github.com/ProjectURL`

Untuk mengerjakan proyek, alihkan ke folder yang benar:
`cd ProjectURL`

Anda juga dapat membuka seluruh proyek menggunakan [Codespaces](https://github.com/features/codespaces), editor kode / lingkungan pengembangan cloud GitHub yang disematkan, atau [GitHub Desktop](https://desktop.github.com/ ).

Terakhir, Anda dapat mengunduh kode dalam folder zip.

### Beberapa hal menarik lainnya tentang GitHub

Anda dapat membintangi, menonton, dan / atau "fork (membagi)" repositori publik apa pun di GitHub. Anda dapat menemukan repositori berbintang di menu tarik-turun kanan atas. Ini seperti mem-bookmark, tetapi untuk kode.

Proyek memiliki pelacak masalah, sebagian besar di GitHub di tab "Issues (Masalah)" kecuali dinyatakan lain, tempat orang-orang mendiskusikan masalah yang terkait dengan proyek. Dan tab Pull Requests (Permintaan Tarik) adalah tempat orang mendiskusikan dan meninjau perubahan yang sedang berlangsung.

Proyek mungkin juga memiliki diskusi di forum, milis, atau saluran obrolan seperti Slack, Discord atau IRC.

✅ Lihatlah repo GitHub baru Anda dan coba beberapa hal, seperti mengedit pengaturan, menambahkan informasi ke repo Anda, dan membuat proyek (seperti papan Kanban). Banyak yang bisa Anda lakukan!

---

## 🚀 Tantangan

Sandingkan dengan seorang teman untuk mengerjakan kode satu sama lain. Buat proyek secara kolaboratif, buat kode, buat cabang, dan gabungkan perubahan.

## Kuis Pasca Kuliah

[Kuis pasca kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/4?loc=id)

## Review & Belajar Mandiri

Baca lebih lanjut tentang [berkontribusi pada software open source](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Latihan, latihan, latihan. GitHub memiliki jalur pembelajaran yang bagus yang tersedia melalui [lab.github.com](https://lab.github.com/):

- [Minggu Pertama di GitHub](https://lab.github.com/githubtraining/first-week-on-github)

Anda juga akan menemukan lab yang lebih canggih.

## Tugas

Selesaikan [Minggu Pertama di lab pelatihan GitHub](https://lab.github.com/githubtraining/first-week-on-github)
