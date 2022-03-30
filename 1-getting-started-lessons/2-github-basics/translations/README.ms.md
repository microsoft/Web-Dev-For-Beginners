# Pengenalan Tentang GitHub

Pelajaran ini merangkumi pengetahuan asas tentang GitHub, dan adalah salah satu platform untuk menjadi tuan rumah dan menguruskan perubahan pada kod anda.

![Intro to GitHub](/sketchnotes/webdev101-github.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra-Kuliah
[Pre-lecture quiz](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/3)

## Pengenalan

Dalam pelajaran ini, kita akan belajar tentang:

- mengesan kerja yang anda lakukan di mesin anda
- membuat projek dengan orang lain
- bagaimanakah menyumbang kepada perisian sumber terbuka

### Prasyarat

Sebelum bermula, anda perlu memeriksa sama ada Git dipasang dalam komputer anda. Dalam terminal menaip:
`git --version`

Sekiranya Git tidak dipasang, [memuat turun Git](https://git-scm.com/downloads). Kemudian, siapkan profil Git anda di terminal:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

Untuk memeriksa sama ada Git sudah dikonfigurasi, anda boleh menaip:
`git config --list`

Anda juga memerlukan akaun GitHub, penyunting kod (seperti Visual Studio Code), dan anda perlu membuka terminal anda (atau: command prompt).

Navigasi ke [github.com] (https://github.com/) dan buat akaun jika anda belum melakukannya, atau log masuk dan isi profil anda.

✅ GitHub bukan satu-satunya repositori kod di dunia; ada yang lain, tetapi GitHub adalah yang paling terkenal.

### Persediaan

Anda memerlukan kedua-dua folder dengan projek kod pada mesin tempatan anda (komputer riba atau PC), dan repositori awam di GitHub, yang akan menjadi contoh bagaimana menyumbang kepada projek orang lain.

---

## Pengurusan Kod

Katakan anda mempunyai folder secara tempatan dengan beberapa projek kod dan anda ingin mula mengesan kemajuan anda menggunakan git - sistem kawalan versi. Sebilangan orang membandingkan menggunakan git dengan menulis surat cinta untuk diri masa depan anda. Membaca mesej komit anda beberapa hari atau minggu atau bulan kemudian anda akan dapat mengingat mengapa anda membuat keputusan, atau "memutar balik (rollback)" perubahan - iaitu ketika anda menulis "pesan komit (commit messages)" yang baik.

### Tugasan: Buat repositori dan kod komit

1. **Buat satu repository di GitHub**. Di GitHub.com, pada tab repositori, atau dari bar navigasi di sebelah kanan atas, cari butang   **repo baru (new repo)**.

   1. Beri nama repositori (folder) anda
   1. Pilih **repositori kreat (create repository)**.

1. **Navigasi ke folder kerja anda**. Di terminal anda, beralih ke folder (juga dikenali sebagai direktori) yang ingin anda mulakan penjejakan. Jenis:

   ```bash
   cd [name of your folder]
   ```

1. **Memulakan git repositori**. Dalam jenis projek anda:

   ```bash
   git init
   ```

1. **Periksa status**. Untuk memeriksa status repositori anda:

   ```bash
   git status
   ```

   the output can look something like this:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Biasanya perintah `git status` memberitahu anda perkara seperti fail apa yang siap disimpan_ ke repo atau mempunyai perubahan di atasnya yang mungkin anda mahu berterusan.

1. **Tambahkan semua fail untuk penjejakan**
   Ini juga disebut sebagai fail pementasan / menambahkan fail ke kawasan pementasan (staging area).

   ```bash
   git add .
   ```

   Argumen `git add` plus `.` menunjukkan bahawa semua fail & perubahan anda untuk dijejaki.

1. **Tambahkan fail terpilih untuk dijejaki**

   ```bash
   git add [file or folder name]
   ```

   Ini membantu kita untuk menambahkan fail yang dipilih hanya ke kawasan pementasan ketika kita tidak ingin melakukan semua fail sekaligus.

1. **Lepaskan semua fail**

   ```bash
   git reset
   ```

   Perintah ini membantu kita untuk melepaskan semua fail sekaligus.

1.  **Lepaskan fail yang tertentu**

   ```bash
   git reset [file or folder name]
   ```

   Perintah ini membantu kita untuk melepaskan hanya fail yang tertentu sekaligus yang tidak ingin kita sertakan untuk komit berikutnya.

1. **Meneruskan kerja anda**. Pada masa ini anda telah menambahkan fail ke yang disebut _staging area_. Salah satu tempat di mana Git mengesan fail anda. Untuk melakukan perubahan itu kekal, anda perlu _commit_ fail itu. Untuk melakukannya anda perlu membuat _commit_ dengan perintah `git commit`. _commit_ mewakili titik simpanan dalam sejarah repo anda. Menaip perintah tersebut untuk membuat _commit_: 

   ```bash
   git commit -m "first commit"
   ```

   Untuk komit semua fail anda, menaip mesej "komit pertama (first commit)". Untuk mesej komit pada masa kelak, anda ingin lebih terperinci dalam penerangan anda untuk menyampaikan jenis perubahan yang telah anda buat.

1. **Sambungkan repo Git tempatan anda dengan GitHub**. Repo Git adalah bagus dalam mesin anda tetapi pada satu ketika anda ingin mempunyai sandaran fail anda di suatu tempat dan juga mengundang orang lain untuk bekerja dengan anda di repo anda. Salah satu tempat yang bagus untuk melakukannya adalah di GitHub. Ingatlah bahawa kita sudah membuat repo di GitHub jadi satu-satunya perkara yang perlu kita lakukan ialah menghubungkan repo Git tempatan kita dengan GitHub. Perintah ini `git remote add` akan membuat tugasan tersebut. Menaip perintah tersebut: 

   > Perhatikan, sebelum anda mengetik perintah, pergi ke halaman repo GitHub anda untuk mencari URL repositori. Anda akan menggunakannya dalam arahan di bawah. Gantikan `repository_name` degan GitHub URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Ini membuat _remote_, atau sambungan, bernama "origin" yang menunjuk ke repositori GitHub yang anda buat sebelumnya.

1. **Hantar fail tempatan ke GitHub**. Setakat ini anda telah membuat _connection_ antara repo tempatan dan repo GitHub. Marilah hantarkan fail-fail ini ke GitHub dengan perintah berikut `git push`, seperti di bawah:

   ```bash
   git push -u origin main
   ```

   Perintah ini menghantar komit anda di cawangan "utama" (main branch) anda ke GitHub.

1. **Untuk menambahkan perubahan lain**. Sekiranya anda ingin terus membuat perubahan dan menghantar ke GitHub, anda hanya perlu menggunakan tiga arahan berikut:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   >Tip, Anda mungkin juga mahu mengadopsi fail `.gitignore` untuk mengelakkan fail yang tidak ingin anda lacak muncul di GitHub - seperti fail nota yang anda simpan di folder yang sama tetapi tidak mempunyai tempat di repositori awam. Anda boleh mencari templat untuk `.gitignore` fail pada [.gitignore templates](github.com/github/gitignore).

#### Mesej Komit

Baris subjek Git komit yang hebat melengkapkan ayat berikut:
Sekiranya berlaku, komit ini akan <baris subjek anda di sini>

Untuk subjek gunakan keharusan, ketegangan sekarang: "perubahan" tidak "berubah" atau "perubahan".
Seperti dalam subjek, dalam badan (pilihan) juga menggunakan keharusan, sekarang tegang. Tubuh harus merangkumi motivasi untuk perubahan dan membezakannya dengan tingkah laku sebelumnya. Anda menerangkan `mengapa`, bukan `bagaimana`.

✅ Luangkan masa beberapa minit untuk melayari GitHub. Bolehkah anda menemui mesej komit yang sangat hebat? Bolehkah anda mencari yang paling minimum? Maklumat apa yang anda fikir paling penting dan berguna untuk disampaikan dalam pesanan komited?

### Tugas: Kolaborasi

Sebab utama meletakkan perkara di GitHub adalah untuk memungkinkan untuk berkolaborasi dengan pemaju lain.

## Melakukan projek dengan orang lain

Dalam repositori anda, arahkan ke `Insights> Community` untuk melihat bagaimana projek anda dibandingkan dengan standard komuniti yang disyorkan.

   Berikut adalah beberapa perkara yang dapat meningkatkan repo GitHub anda:
   - **Penerangan**. Adakah anda menambah keterangan untuk projek anda?
   - **README**. Adakah anda menambah README? GitHub memberikan panduan untuk menulis [README](https://docs.github.com/articles/about-readmes/).
   - **Garis panduan penyumbang**. Adakah projek anda mempunyai [cGaris panduan penyumbang](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Tatakelakuan**. a [Tatakelakuan](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Lesen**. Yang paling penting, ialah [lesen](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Semua sumber ini akan memberi manfaat kepada ahli pasukan baru. Dan ini biasanya merupakan jenis perkara yang dilihat oleh penyumbang baru bahkan sebelum melihat kod anda, untuk mengetahui sama ada projek anda adalah tempat yang tepat untuk mereka menghabiskan masa.

✅ README fail, walaupun memerlukan masa untuk disiapkan, sering diabaikan oleh penyelenggara yang sibuk. Bolehkah anda mencari contoh yang sangat deskriptif? Catatan: ada beberapa [alat untuk membantu mencipta README yang baik](https://www.makeareadme.com/) yang anda boleh cuba.

### Tugas: Gabungkan beberapa kod

Menyumbang kepada dokumen membantu orang menyumbang dalam projek tersebut. Ini menerangkan jenis sumbangan yang anda cari dan bagaimana prosesnya berjalan. Penyumbang perlu melalui beberapa langkah untuk dapat menyumbang kepada repo anda di GitHub:


1. **Memalsukan repo anda** Anda mungkin mahu orang membuat projek anda. Memalsukan (_fork_) bermaksud membuat replika repositori anda di profil GitHub mereka.
1. **Klon**. Dari sana mereka akan mengklonkan projek ke mesin tempatan mereka.
1. **Buat branch**. Anda ingin meminta mereka membuat branch (_branch_) untuk kerja mereka.
1. **Fokus perubahan mereka pada satu kawasan**. Minta penyumbang memusatkan sumbangan mereka pada satu perkara pada satu masa - dengan cara itu peluang yang anda dapat _merge_ dalam pekerjaan mereka adalah lebih tinggi. Bayangkan mereka menulis perbaikan pepijat, menambah ciri baru, dan mengemas kini beberapa ujian - bagaimana jika anda mahu, atau hanya dapat melaksanakan 2 dari 3, atau 1 dari 3 perubahan?

✅ Bayangkan keadaan di mana branch sangat penting untuk menulis dan menghantar kod yang baik. Apa kes penggunaan yang boleh anda fikirkan?

> Perhatikan, jadikan perubahan yang ingin anda lihat di dunia, dan buatlah cawangan untuk karya anda sendiri juga. Segala komit yang anda buat akan dibuat di cabang tempat Anda sedang "check out" gunakan `git status` untuk melihat cabang mana.

Mari melalui aliran kerja penyumbang. Anggaplah penyumbang telah _forked_ dan _cloned_ repo sehingga mereka mempunyai repo Git yang siap diusahakan, di mesin tempatan mereka:

1. **Membuat branch**. Guna perintah `git branch` untuk membuat branch baharu seperti berikut: 

   ```bash
   git branch [branch-name]
   ```

1. **Tukar ke working branch**. Tukar ke branch yang ditentukan dan kemas kini direktori kerja dengan `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Membuat kerja**. Pada ketika ini anda ingin menambahkan perubahan anda. Jangan lupa memberitahu Git mengenainya dengan arahan berikut:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Pastikan anda memberikan ayat dengan baik kepada komit anda, demi anda dan juga penjaga repo yang anda bantu.

1. **Gabungkan kerja anda dengan `main` branch**. Pada satu ketika anda selesai bekerja dan anda ingin menggabungkan kerja anda dengan `main` branch. `main` branch mungkin telah berubah sementara itu, pastikan anda mengemas kini terlebih dahulu kepada yang terbaru dengan arahan berikut:

   ```bash
   git switch main
   git pull
   ```

   Pada ketika ini anda ingin memastikan bahawa apa-apa _conflicts_, keadaan di mana Git tidak dapat dengan mudah _combine_ perubahan berlaku di working branch anda. Oleh itu, jalankan arahan berikut:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Ini akan membawa semua perubahan dari `main` ke branch anda dan semoga anda dapat meneruskannya. Sekiranya tidak, VS Code akan memberitahu anda di mana Git _confused_ dan anda hanya mengubah fail yang terjejas untuk mengatakan kandungan mana yang paling tepat.

1. **Hantar kerja anda ke GitHub**. Menghantar karya anda ke GitHub bermaksud dua perkara. Menolak branch anda ke repo anda dan kemudian membuka PR, Tarik Permintaan (Pull Request).

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Perintah di atas membuat branch untuk forked repo.

1. **Buka Tarik Permintaan (Pull Request)** Seterusnya, anda mahu membuka tarik permintaan (Pull Request). Anda melakukannya dengan menavigasi ke repo bercabang di GitHub. Anda akan melihat petunjuk di GitHub di mana ia bertanya sama ada anda mahu membuat tarik permintaan (Pull Request) baru, anda mengkliknya dan anda akan dibawa ke antara muka di mana anda boleh menukar tajuk mesej komit, berikan keterangan yang lebih sesuai. Sekarang penyelenggara repo yang anda garpu akan melihat PR ini dan _fingers crossed_ mereka akan menghargai dan _merge_ tarik permintaan (Pull Request) anda. Anda telah menjadi penyumbang, yay:)

1. **Bersihkan**. Menjadikan amalan baik untuk _cleanup_ selepas anda. Anda mahu membersihkan local branch dan branch yang anda dorong ke GitHub. Pertama marilah hapuskannya secara tempatan dengan arahan berikut:

   ```bash
   git branch -d [branch-name]
   ```

   Pastikan anda pergi ke halaman GitHub untuk forked repo seterusnya dan keluarkan branch terpencil yang baru anda tolak.

`Tarik Permintaan (Pull request)` nampaknya istilah yang tidak bermoral kerana anda benar-benar mahu mendorong perubahan anda ke projek. Tetapi penyelenggara (pemilik projek) atau pasukan inti perlu mempertimbangkan perubahan anda sebelum menggabungkannya dengan  "main" branch projek, jadi anda benar-benar meminta keputusan perubahan dari penyelenggara.

Tarik permintaan (Pull Request) adalah tempat untuk membandingkan dan membincangkan perbezaan yang diperkenalkan di cabang dengan ulasan, komen, ujian bersepadu, dan banyak lagi. Tarik permintaan (Pull Request) yang baik mengikuti kira-kira peraturan yang sama dengan pesanan pesanan. Anda dapat menambahkan rujukan ke masalah dalam pelacak masalah, ketika pekerjaan Anda misalnya menyelesaikan masalah. Ini dilakukan dengan menggunakan `#` diikuti dengan jumlah masalah (issue) anda. Contohnya `# 97`.

🤞 Jari memintas bahawa semua cek lulus dan pemilik projek menggabungkan perubahan anda ke dalam projek🤞

Kemas kini working branch tempatan anda sekarang dengan semua komit baru dari branch terpencil yang sesuai di GitHub:

`git pull`

## Bagaimanakah menyumbang kepada sumber terbuka

Pertama, marilah kita cari repositori - atau: repo - di GitHub yang menarik bagi anda dan yang anda ingin menyumbang perubahan. Anda mahu menyalin kandungannya ke mesin kami.

✅ Kaedah yang baik untuk mencari repo 'mesra pemula (beginner-friendly)' adalah dengan [cari mengikut tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Salin repo secara tempatan](images/clone_repo.png)

Terdapat beberapa cara menyalin kod. Salah satu cara adalah dengan "mengklon" kandungan repositori, menggunakan HTTPS, SSH, atau menggunakan GitHub CLI (Command Line Interface).

Buka terminal dan klon repo seperti di bawah: 
`git clone https://github.com/ProjectURL`

Untuk kerja dengan projek tersebut, tukar the fail kanan:
`cd ProjectURL`

And juga boleh membuka keseluruhan projek dengan [Codespaces](https://github.com/features/codespaces), Penyunting kod terbitan GitHub / persekitaran pengembangan awan, atau [GitHub Desktop](https://desktop.github.com/).

Akhirnya, anda boleh memuat turun kod dalam bentuk zip.

### Beberapa perkara menarik mengenai GitHub

Anda boleh membintangi, menonton, dan / atau "fork" mana-mana repositori awam di GitHub. Anda boleh mencari repositori berbintang anda di menu lungsur kanan atas. Ia seperti penanda buku, tetapi untuk kod.

Projek mempunyai pelacak masalah, kebanyakannya di GitHub di tab "Isu" kecuali dinyatakan sebaliknya, di mana orang membincangkan masalah yang berkaitan dengan projek. Dan tab Tarik Permintaan adalah tempat orang membincangkan dan mengkaji perubahan yang sedang berlangsung.

Projek mungkin juga ada perbincangan di forum, senarai surat, atau saluran sembang seperti Slack, Discord atau IRC.

✅ Lihatlah repo GitHub baru anda dan cuba beberapa perkara, seperti menyunting tetapan, menambahkan maklumat ke repo anda, dan membuat projek (seperti papan Kanban). Banyak yang boleh anda lakukan!

---

### 🚀 Cabaran

Berpasangan dengan rakan untuk mengerjakan kod masing-masing. Buat projek secara kolaboratif, fork kod, buat branch dan gabungkan perubahan.

## Kuiz Pasca Kuliah
[Kuiz Pasca Kuliah](https://happy-mud-02d95f10f.azurestaticapps.net/quiz/4)

## Mengkaji dan belajar sendiri

Membaca tentang [menyumbang kepada sumber terbuka](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git nota](https://training.github.com/downloads/github-git-cheat-sheet/).

Berlatih, berlatih, berlatih. GitHub mempunyai jalan pembelajaran yang hebat yang tersedia melalui [lab.github.com](https://lab.github.com/):

- [Minggu pertama di GitHub](https://lab.github.com/githubtraining/first-week-on-github)

Anda juga akan menemui makmal yang lebih maju.

## Tugasan

Selesaikan [Minggu pertama di GitHub (training lab)](https://lab.github.com/githubtraining/first-week-on-github)