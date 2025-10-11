<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ea65b75e488aa33a3cc5cb1c6c3f047a",
  "translation_date": "2025-10-03T14:07:19+00:00",
  "source_file": "1-getting-started-lessons/2-github-basics/README.md",
  "language_code": "ms"
}
-->
# Pengenalan kepada GitHub

Pelajaran ini merangkumi asas GitHub, sebuah platform untuk menghoskan dan mengurus perubahan pada kod anda.

![Intro to GitHub](../../../../translated_images/webdev101-github.8846d7971abef6f947909b4f9d343e2a23778aa716ca6b9d71df7174ee5009ac.ms.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra-Kuliah
[Kuiz pra-kuliah](https://ff-quizzes.netlify.app)

## Pengenalan

Dalam pelajaran ini, kita akan membincangkan:

- menjejaki kerja yang anda lakukan pada mesin anda
- bekerjasama dalam projek dengan orang lain
- cara menyumbang kepada perisian sumber terbuka

### Prasyarat

Sebelum anda bermula, pastikan Git telah dipasang. Dalam terminal, taip: 
`git --version`

Jika Git belum dipasang, [muat turun Git](https://git-scm.com/downloads). Kemudian, tetapkan profil Git tempatan anda dalam terminal:
* `git config --global user.name "nama-anda"`
* `git config --global user.email "emel-anda"`

Untuk memeriksa sama ada Git telah dikonfigurasi, anda boleh taip:
`git config --list`

Anda juga memerlukan akaun GitHub, editor kod (seperti Visual Studio Code), dan anda perlu membuka terminal anda (atau: command prompt).

Navigasi ke [github.com](https://github.com/) dan buat akaun jika anda belum ada, atau log masuk dan lengkapkan profil anda.

✅ GitHub bukan satu-satunya repositori kod di dunia; terdapat yang lain, tetapi GitHub adalah yang paling terkenal.

### Persediaan

Anda memerlukan folder dengan projek kod pada mesin tempatan anda (laptop atau PC), dan repositori awam di GitHub, yang akan berfungsi sebagai contoh bagaimana untuk menyumbang kepada projek orang lain.

---

## Pengurusan Kod

Katakan anda mempunyai folder secara tempatan dengan projek kod dan anda ingin mula menjejaki kemajuan anda menggunakan git - sistem kawalan versi. Sesetengah orang membandingkan penggunaan git dengan menulis surat cinta kepada diri anda di masa depan. Membaca mesej commit anda beberapa hari, minggu, atau bulan kemudian akan membantu anda mengingat mengapa anda membuat keputusan tertentu, atau "rollback" perubahan - iaitu, apabila anda menulis mesej commit yang baik.

### Tugasan: Buat repositori dan commit kod  

> Tonton video
> 
> [![Video asas Git dan GitHub](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

1. **Buat repositori di GitHub**. Di GitHub.com, dalam tab repositori, atau dari bar navigasi di kanan atas, cari butang **new repo**.

   1. Berikan nama kepada repositori anda (folder)
   1. Pilih **create repository**.

1. **Navigasi ke folder kerja anda**. Dalam terminal anda, beralih ke folder (juga dikenali sebagai direktori) yang anda ingin mula jejaki. Taip:

   ```bash
   cd [name of your folder]
   ```

1. **Inisialisasi repositori git**. Dalam projek anda, taip:

   ```bash
   git init
   ```

1. **Periksa status**. Untuk memeriksa status repositori anda, taip:

   ```bash
   git status
   ```

   outputnya mungkin kelihatan seperti ini:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Biasanya, arahan `git status` memberitahu anda perkara seperti fail mana yang sedia untuk _disimpan_ ke repositori atau mempunyai perubahan yang mungkin ingin anda kekalkan.

1. **Tambah semua fail untuk penjejakan**
   Ini juga dikenali sebagai fail staging/menambah fail ke kawasan staging.

   ```bash
   git add .
   ```

   Argumen `git add` ditambah dengan `.` menunjukkan bahawa semua fail & perubahan anda untuk penjejakan.

1. **Tambah fail terpilih untuk penjejakan**

   ```bash
   git add [file or folder name]
   ```

   Ini membantu kita menambah hanya fail terpilih ke kawasan staging apabila kita tidak mahu commit semua fail sekaligus.

1. **Batalkan staging semua fail**

   ```bash
   git reset
   ```

   Arahan ini membantu kita membatalkan staging semua fail sekaligus.

1. **Batalkan staging fail tertentu**

   ```bash
   git reset [file or folder name]
   ```

   Arahan ini membantu kita membatalkan staging hanya fail tertentu sekaligus yang kita tidak mahu sertakan untuk commit seterusnya.

1. **Kekalkan kerja anda**. Pada tahap ini, anda telah menambah fail ke kawasan yang dipanggil _staging area_. Tempat di mana Git menjejaki fail anda. Untuk menjadikan perubahan kekal, anda perlu _commit_ fail tersebut. Untuk melakukannya, anda membuat _commit_ dengan arahan `git commit`. _Commit_ mewakili titik simpanan dalam sejarah repositori anda. Taip arahan berikut untuk membuat _commit_:

   ```bash
   git commit -m "first commit"
   ```

   Ini commit semua fail anda, dengan mesej "first commit". Untuk mesej commit masa depan, anda akan mahu lebih deskriptif dalam penerangan anda untuk menyampaikan jenis perubahan yang telah anda buat.

1. **Sambungkan repositori Git tempatan anda dengan GitHub**. Repositori Git adalah baik pada mesin anda tetapi pada satu ketika anda ingin mempunyai sandaran fail anda di suatu tempat dan juga menjemput orang lain untuk bekerja dengan anda pada repositori anda. Salah satu tempat yang hebat untuk melakukannya ialah GitHub. Ingat kita telah membuat repositori di GitHub, jadi satu-satunya perkara yang perlu kita lakukan ialah menyambungkan repositori Git tempatan kita dengan GitHub. Arahan `git remote add` akan melakukan perkara itu. Taip arahan berikut:

   > Nota, sebelum anda taip arahan, pergi ke halaman repositori GitHub anda untuk mencari URL repositori. Anda akan menggunakannya dalam arahan di bawah. Gantikan ```https://github.com/username/repository_name.git``` dengan URL GitHub anda.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   Ini mencipta _remote_, atau sambungan, yang dinamakan "origin" yang menunjuk kepada repositori GitHub yang anda buat sebelum ini.

1. **Hantar fail tempatan ke GitHub**. Setakat ini, anda telah mencipta _sambungan_ antara repositori tempatan dan repositori GitHub. Mari hantar fail ini ke GitHub dengan arahan `git push`, seperti berikut: 
   
   > Nota, nama cawangan anda mungkin berbeza secara lalai daripada ```main```.

   ```bash
   git push -u origin main
   ```

   Ini menghantar commit anda dalam cawangan "main" anda ke GitHub. Menetapkan cawangan `upstream` termasuk `-u` dalam arahan mewujudkan pautan antara cawangan tempatan anda dan cawangan jauh, jadi anda boleh menggunakan git push atau git pull tanpa menentukan nama cawangan pada masa depan. Git akan secara automatik menggunakan cawangan upstream dan anda tidak perlu menentukan nama cawangan secara eksplisit dalam arahan masa depan.

2. **Untuk menambah lebih banyak perubahan**. Jika anda ingin terus membuat perubahan dan menghantarnya ke GitHub, anda hanya perlu menggunakan tiga arahan berikut:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tip, Anda mungkin juga ingin menggunakan fail `.gitignore` untuk mengelakkan fail yang anda tidak mahu jejaki daripada muncul di GitHub - seperti fail nota yang anda simpan dalam folder yang sama tetapi tidak sesuai di repositori awam. Anda boleh mencari templat untuk fail `.gitignore` di [.gitignore templates](https://github.com/github/gitignore).

#### Mesej Commit

Baris subjek commit Git yang hebat melengkapkan ayat berikut:
Jika digunakan, commit ini akan <baris subjek anda di sini>

Untuk subjek, gunakan bentuk perintah, masa kini: "ubah" bukan "diubah" atau "mengubah". 
Seperti dalam subjek, dalam badan (pilihan) juga gunakan bentuk perintah, masa kini. Badan harus merangkumi motivasi untuk perubahan dan bandingkan ini dengan tingkah laku sebelumnya. Anda menerangkan `mengapa`, bukan `bagaimana`.

✅ Luangkan beberapa minit untuk melayari GitHub. Bolehkah anda menemui mesej commit yang sangat hebat? Bolehkah anda menemui yang sangat minimal? Apakah maklumat yang anda fikir paling penting dan berguna untuk disampaikan dalam mesej commit?

### Tugasan: Bekerjasama

Sebab utama meletakkan sesuatu di GitHub adalah untuk memungkinkan kerjasama dengan pembangun lain.

## Bekerja pada projek dengan orang lain

> Tonton video
>
> [![Video asas Git dan GitHub](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

Dalam repositori anda, navigasi ke `Insights > Community` untuk melihat bagaimana projek anda dibandingkan dengan piawaian komuniti yang disyorkan.

   Berikut adalah beberapa perkara yang boleh meningkatkan repositori GitHub anda:
   - **Deskripsi**. Adakah anda menambah deskripsi untuk projek anda?
   - **README**. Adakah anda menambah README? GitHub menyediakan panduan untuk menulis [README](https://docs.github.com/articles/about-readmes/?WT.mc_id=academic-77807-sagibbon).
   - **Panduan penyumbangan**. Adakah projek anda mempunyai [panduan penyumbangan](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/?WT.mc_id=academic-77807-sagibbon), 
   - **Kod Etika**. [Kod Etika](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **Lesen**. Mungkin yang paling penting, [lesen](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


Semua sumber ini akan memberi manfaat kepada onboarding ahli pasukan baru. Dan ini biasanya jenis perkara yang dilihat oleh penyumbang baru sebelum mereka melihat kod anda, untuk mengetahui sama ada projek anda adalah tempat yang sesuai untuk mereka meluangkan masa mereka.

✅ Fail README, walaupun memerlukan masa untuk disediakan, sering diabaikan oleh penyelenggara yang sibuk. Bolehkah anda menemui contoh yang sangat deskriptif? Nota: terdapat beberapa [alat untuk membantu mencipta README yang baik](https://www.makeareadme.com/) yang mungkin anda ingin cuba.

### Tugasan: Gabungkan kod

Dokumen penyumbangan membantu orang menyumbang kepada projek. Ia menerangkan jenis sumbangan yang anda cari dan bagaimana prosesnya berfungsi. Penyumbang perlu melalui beberapa langkah untuk dapat menyumbang kepada repositori anda di GitHub:

1. **Fork repositori anda** Anda mungkin ingin orang _fork_ projek anda. Fork bermaksud mencipta replika repositori anda pada profil GitHub mereka.
1. **Clone**. Dari situ mereka akan clone projek ke mesin tempatan mereka. 
1. **Buat cawangan**. Anda akan ingin meminta mereka membuat _cawangan_ untuk kerja mereka. 
1. **Fokuskan perubahan mereka pada satu kawasan**. Minta penyumbang untuk menumpukan sumbangan mereka pada satu perkara pada satu masa - dengan cara itu peluang untuk anda _merge_ kerja mereka adalah lebih tinggi. Bayangkan mereka menulis pembaikan bug, menambah ciri baru, dan mengemas kini beberapa ujian - bagaimana jika anda ingin, atau hanya boleh melaksanakan 2 daripada 3, atau 1 daripada 3 perubahan?

✅ Bayangkan situasi di mana cawangan sangat kritikal untuk menulis dan menghantar kod yang baik. Apakah kes penggunaan yang boleh anda fikirkan?

> Nota, jadilah perubahan yang anda ingin lihat di dunia, dan buat cawangan untuk kerja anda sendiri juga. Sebarang commit yang anda buat akan dibuat pada cawangan yang anda sedang "checked out". Gunakan `git status` untuk melihat cawangan mana yang sedang digunakan.

Mari kita lalui aliran kerja penyumbang. Anggap penyumbang telah _fork_ dan _clone_ repositori jadi mereka mempunyai repositori Git yang sedia untuk digunakan, pada mesin tempatan mereka:

1. **Buat cawangan**. Gunakan arahan `git branch` untuk membuat cawangan yang akan mengandungi perubahan yang mereka maksudkan untuk disumbangkan:

   ```bash
   git branch [branch-name]
   ```

1. **Beralih ke cawangan kerja**. Beralih ke cawangan yang ditentukan dan kemas kini direktori kerja dengan `git switch`:

   ```bash
   git switch [branch-name]
   ```

1. **Lakukan kerja**. Pada tahap ini, anda ingin menambah perubahan anda. Jangan lupa untuk memberitahu Git mengenainya dengan arahan berikut:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Pastikan anda memberikan commit anda nama yang baik, untuk kebaikan anda serta penyelenggara repositori yang anda bantu.

1. **Gabungkan kerja anda dengan cawangan `main`**. Pada satu ketika, anda selesai bekerja dan anda ingin menggabungkan kerja anda dengan cawangan `main`. Cawangan `main` mungkin telah berubah sementara itu, jadi pastikan anda mengemas kini terlebih dahulu dengan arahan berikut:

   ```bash
   git switch main
   git pull
   ```

   Pada tahap ini, anda ingin memastikan bahawa sebarang _konflik_, situasi di mana Git tidak dapat dengan mudah _menggabungkan_ perubahan berlaku dalam cawangan kerja anda. Oleh itu, jalankan arahan berikut:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   Arahan `git merge main` akan membawa semua perubahan dari `main` ke dalam cawangan anda. Mudah-mudahan anda boleh teruskan. Jika tidak, VS Code akan memberitahu anda di mana Git _keliru_ dan anda hanya mengubah fail yang terjejas untuk mengatakan kandungan mana yang paling tepat.

   Untuk beralih ke cawangan yang berbeza, gunakan arahan moden `git switch`:
   ```bash
   git switch [branch_name]


1. **Hantar kerja anda ke GitHub**. Menghantar kerja anda ke GitHub bermaksud dua perkara. Menolak cawangan anda ke repositori anda dan kemudian membuka PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   Arahan di atas mencipta cawangan pada repositori yang telah di-fork.
1. **Buka PR**. Seterusnya, anda perlu membuka PR. Anda boleh melakukannya dengan pergi ke repo yang telah difork di GitHub. Anda akan melihat petunjuk di GitHub yang bertanya sama ada anda ingin membuat PR baru, klik pada petunjuk tersebut dan anda akan dibawa ke antara muka di mana anda boleh menukar tajuk mesej commit, memberikan penerangan yang lebih sesuai. Kini penyelenggara repo yang anda fork akan melihat PR ini dan _harap-harap_ mereka menghargai dan _merge_ PR anda. Anda kini seorang penyumbang, yay :)

1. **Bersihkan**. Adalah amalan yang baik untuk _membersihkan_ selepas anda berjaya merge PR. Anda perlu membersihkan kedua-dua cawangan tempatan anda dan cawangan yang anda push ke GitHub. Pertama, mari kita hapuskannya secara tempatan dengan arahan berikut:

   ```bash
   git branch -d [branch-name]
   ```

   Pastikan anda pergi ke halaman GitHub untuk repo yang telah difork dan hapuskan cawangan jauh yang baru sahaja anda push ke sana.

`Pull request` mungkin kelihatan seperti istilah yang pelik kerana sebenarnya anda ingin push perubahan anda ke projek tersebut. Tetapi penyelenggara (pemilik projek) atau pasukan teras perlu mempertimbangkan perubahan anda sebelum menggabungkannya dengan cawangan "utama" projek, jadi anda sebenarnya meminta keputusan perubahan daripada penyelenggara.

Pull request adalah tempat untuk membandingkan dan membincangkan perbezaan yang diperkenalkan pada cawangan dengan ulasan, komen, ujian yang diintegrasikan, dan banyak lagi. Pull request yang baik mengikuti peraturan yang hampir sama seperti mesej commit. Anda boleh menambah rujukan kepada isu dalam penjejak isu, contohnya apabila kerja anda menyelesaikan sesuatu isu. Ini dilakukan dengan menggunakan `#` diikuti dengan nombor isu anda. Sebagai contoh `#97`.

🤞Harap-harap semua semakan lulus dan pemilik projek merge perubahan anda ke dalam projek🤞

Kemas kini cawangan kerja tempatan anda dengan semua commit baru dari cawangan jauh yang sepadan di GitHub:

`git pull`

## Cara menyumbang kepada sumber terbuka

Pertama, mari kita cari repositori (atau **repo**) di GitHub yang menarik minat anda dan yang ingin anda sumbangkan perubahan. Anda perlu menyalin kandungannya ke mesin anda.

✅ Cara yang baik untuk mencari repo 'mesra pemula' adalah dengan [mencari menggunakan tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Salin repo secara tempatan](../../../../translated_images/clone_repo.5085c48d666ead57664f050d806e325d7f883be6838c821e08bc823ab7c66665.ms.png)

Terdapat beberapa cara untuk menyalin kod. Salah satu cara adalah dengan "clone" kandungan repositori, menggunakan HTTPS, SSH, atau menggunakan GitHub CLI (Command Line Interface).

Buka terminal anda dan clone repositori seperti berikut:
`git clone https://github.com/ProjectURL`

Untuk bekerja pada projek tersebut, tukar ke folder yang betul:
`cd ProjectURL`

Anda juga boleh membuka keseluruhan projek menggunakan [Codespaces](https://github.com/features/codespaces), editor kod terbenam GitHub / persekitaran pembangunan awan, atau [GitHub Desktop](https://desktop.github.com/).

Akhir sekali, anda boleh memuat turun kod dalam folder yang dimampatkan (zipped).

### Beberapa perkara menarik tentang GitHub

Anda boleh memberi bintang, menonton dan/atau "fork" mana-mana repositori awam di GitHub. Anda boleh mencari repositori yang anda beri bintang dalam menu drop-down di bahagian atas kanan. Ia seperti menanda buku, tetapi untuk kod.

Projek mempunyai penjejak isu, kebanyakannya di GitHub dalam tab "Issues" kecuali dinyatakan sebaliknya, di mana orang membincangkan isu berkaitan projek. Dan tab Pull Requests adalah tempat orang membincangkan dan mengulas perubahan yang sedang berlangsung.

Projek juga mungkin mempunyai perbincangan dalam forum, senarai mel, atau saluran sembang seperti Slack, Discord atau IRC.

✅ Lihat-lihat repo GitHub baru anda dan cuba beberapa perkara, seperti mengedit tetapan, menambah maklumat ke repo anda, dan mencipta projek (seperti papan Kanban). Terdapat banyak perkara yang boleh anda lakukan!

---

## 🚀 Cabaran 

Bekerjasama dengan rakan untuk bekerja pada kod masing-masing. Cipta projek secara kolaboratif, fork kod, buat cawangan, dan merge perubahan.

## Kuiz Selepas Kuliah
[Kuiz selepas kuliah](https://ff-quizzes.netlify.app/web/en/)

## Ulasan & Kajian Kendiri

Baca lebih lanjut tentang [menyumbang kepada perisian sumber terbuka](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution).

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Berlatih, berlatih, berlatih. GitHub mempunyai laluan pembelajaran yang hebat tersedia melalui [skills.github.com](https://skills.github.com):

- [Minggu Pertama di GitHub](https://skills.github.com/#first-week-on-github)

Anda juga akan menemui kursus yang lebih maju.

## Tugasan 

Lengkapkan [kursus Minggu Pertama di GitHub](https://skills.github.com/#first-week-on-github)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.