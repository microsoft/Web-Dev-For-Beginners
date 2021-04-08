# Pengenalan Bahasa Pengaturcaraan dan Alat Perdagangan

Pelajaran ini merangkumi asas bahasa pengaturcaraan. Topik yang anda akan belajar di sini dapat mengaplikasikan untuk kebanyakan bahasa pengaturcaraan moden hari ini. Pada bahagian 'Alat Perdagangan', anda akan belajar bagaimana mengenai perisian berguna yang membantu anda sebagai pembangun.

![Intro Programming](/sketchnotes/webdev101-programming.png)
> Sketchnote karya [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra-Kuliah
[Kuiz Pra-Kuliah](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/1)

## Pengenalan

Dalam bab ini, kita akan belajar:

- Apa itu pengaturcaraan?
- Jenis bahasa pengaturcaraan
- Elemen asas program
- Perisian dan perkakas yang berguna untuk pembangun profesional

## Apa itu pengaturcaraan?

Pengaturcaraan (juga dikenali sebagai pengekodan) adalah proses menulis arahan ke peranti, seperti komputer atau peranti mudah alih. Kami menulis arahan ini dengan bahasa pengaturcaraan, yang kemudian ditafsirkan oleh peranti. Set arahan ini dapat disebut dengan pelbagai nama, tetapi *program*, *program komputer*, *aplikasi (app)*, dan *boleh dilaksanakan* ialah beberapa nama yang popular.

*Program* boleh menjadi apa-apa sahaja yang ditulis dengan kod; laman web, permainan, dan aplikasi telefon adalah program. Walaupun mungkin kita boleh membuat program tanpa menulis kod, logik yang mendasari ditafsirkan ke peranti dan logik itu kemungkinan besar ditulis dengan kod. Program yang *melaksanakan kod* ialah dedefinisikan sebagai program yang sedang menjalankan arahan. Peranti yang anda sedang gunakan untuk membaca pelajaran ini sedang menjalankan program sendiri untuk mencetakkan pada skrin anda.

✅ Lakukan sedikit pengajian: siapakah yang dianggap sebagai pengaturcara komputer pertama di dunia?

## Bahasa Pengaturcaraan

Bahasa pengaturcaraan berfungsi untuk tujuan utama: bagi pembangun untuk membina arahan untuk menghantar ke peranti. Peranti hanya dapat memahami binari (1s dan 0s), dan *untuk  kebanyakan* pembangun itu bukan kaedah yang sangat efisien untuk berkomunikasi. Bahasa pengaturcaraan adalah wahana berkomunikasi antara manusia dan komputer.

Bahasa pengaturcaraan terdapat dalam format-format yang berbeza dan mungkin mempunyai tujuan yang berbeza. Sebagai contoh, ('JavaScript') digunakan terutamanya untuk aplikasi web dan ('Bash') digunakan terutamanya untuk sistem operasi.

*Bahasa tahap rendah* biasanya memerlukan langkah yang lebih sedikit berbanding daripada *bahasa tahap tinggi* agar peranti dapat menafsirkan arahan. Walau bagaimanapun, apa yang menjadikan bahasa peringkat tinggi menjadi popular adalah kebolehbacaan dan sokongannya. ('JavaScript') dianggap bahasa tahap tinggi.

Kod berikut akan menggambarkan perbezaan antara bahasa tahap tinggi dengan ('JavaScript') dan bahasa tahap rendah dengan kod pemasangan ARM.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Percaya atau tidak, *mereka berdua melakukan perkara yang sama*: mencetak urutan Fibonacci hingga 10.

✅ Urutan Fibonacci [didefinisikan] (https://en.wikipedia.org/wiki/Fibonacci_number) sebagai satu set nombor sehingga setiap nombor adalah jumlah dari dua nombor sebelumnya, bermula dari 0 dan 1.

## Elemen Asas Program

Satu arahan dalam program dipanggil *pernyataan* dan biasanya akan mempunyai watak atau jarak baris yang menandakan di mana arahan itu berakhir, atau *diterminasikan*. Bagaimanakah program ditamatkan berbeza-beza dengan setiap bahasa.

Sebilangan besar program bergantung pada penggunaan data dari pengguna atau di tempat lain, di mana pernyataan mungkin bergantung pada data untuk melaksanakan arahan. Data dapat mengubah bagaimana program berperilaku, sehingga bahasa pengaturcaraan dilengkapi dengan cara untuk menyimpan data sementara yang dapat digunakan kemudian. Data ini dipanggil *pemboleh ubah* (*Variable*). Pemboleh ubah ialah pernyataan yang memerintahkan peranti menyimpan data dalam ingatannya. Pemboleh ubah dalam program serupa dengan ('algebra'), di mana mereka mempunyai nama yang unik dan nilainya mungkin berubah dari semasa ke semasa.

Ada kemungkinan beberapa penyataan tidak akan dilaksanakan oleh peranti. Ini biasanya berdasarkan reka bentuk apabila ditulis oleh pembangun atau secara tidak sengaja apabila berlaku kesalahan yang tidak dijangka. Jenis kawalan aplikasi ini menjadikannya lebih mantap dan dapat dikendalikan. Biasanya perubahan kawalan ini berlaku apabila keputusan tertentu dipenuhi. Pernyataan umum dalam bahasa pengaturcaraan moden untuk mengawal bagaimana program dijalankan adalah pernyataan `if..else`.

✅ Anda akan belajar lebih mendalam tentang jenis pernyataan ini dalam pelajaran seterusnya

## Alat Perdagangan

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

Dalam bahagian ini, anda akan belajar tentang beberapa perisian yang mungkin berguna bagi anda semasa memulakan perjalanan pengembangan profesional anda.

**Persekitaran pengembangan** ('development enviroment') ialah sekumpulan alat dan ciri unik yang sering digunakan oleh pembangun semasa menulis perisian. Sebilangan alat ini telah disesuaikan untuk keperluan khusus pembangun, dan mungkin berubah dari masa ke masa jika pembangun mengubah keutamaan dalam kerja atau projek peribadi, atau ketika mereka menggunakan bahasa pengaturcaraan yang berbeda. Persekitaran pembangunan sama uniknya dengan pemaju yang menggunakannya.

### Editor

Salah satu alat yang paling penting untuk pembangunan perisian adalah ('editor'). ('Editor') ialah tempat anda menulis kod anda dan kadang kala anda akan menjalankan kod anda.

Pembangun bergantung pada editor untuk beberapa sebab tambahan:

- *Debugging* Mencari bug dan kesilapan dengan melangkah ke kod, baris demi baris. Beberapa editor mempunyai kemampuan debug, atau dapat disesuaikan dan ditambahkan untuk bahasa pengaturcaraan tertentu.
- *Penyorotan sintaks* Menambah warna dan format teks ke kod, menjadikannya lebih mudah dibaca. Sebilangan besar editor membenarkan penyorotan sintaks yang disesuaikan.
- *Sambungan dan Integrasi* Penambahan yang dikhususkan untuk pembangun, oleh pemaju, untuk akses ke alat tambahan yang tidak terdapat dalam penyunting asas. Sebagai contoh, banyak pembangun juga memerlukan cara untuk mendokumentasikan kod mereka dan menerangkan cara kerjanya dan akan memasang pelanjutan pemeriksaan ejaan untuk memeriksa kesalahan ketik. Sebilangan besar penambahan ini dimaksudkan untuk digunakan dalam editor tertentu, dan kebanyakan editor datang dengan cara untuk mencari sambungan yang tersedia.
- *Penyesuaian* Sebilangan besar editor sangat disesuaikan, dan setiap pembangun akan mempunyai persekitaran pembangunan unik mereka sendiri yang sesuai dengan keperluan mereka. Banyak juga yang membenarkan pembangun membuat peluasan mereka sendiri.

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### Penyemak Imbas

 Alat penting lain ialah penyemak imbas. Pembangun web bergantung pada penyemak imbas untuk melihat bagaimana kod mereka berjalan di web, ia juga digunakan untuk melihat elemen visual dari laman web yang ditulis dalam editor, seperti HTML.

 Banyak penyemak imbas dilengkapi dengan *developer tools* (DevTools) yang mengandungi sekumpulan ciri dan maklumat berguna untuk membantu pembangun mengumpulkan dan menangkap pandangan penting mengenai aplikasinya. Contohnya: Sekiranya halaman web mempunyai kesilapan, kadang-kadang bermanfaat untuk mengetahui kapan halaman tersebut berlaku. DevTools dalam penyemak imbas boleh dikonfigurasi untuk menangkap maklumat ini.

### Penyemak Imbas Popular dan DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Alat Command Line

Sebahagian pembangun lebih suka paparan yang kurang grafik untuk tugas harian mereka dan bergantung kepada baris perintah untuk mencapainya. Membangunkan kod memerlukan sebilangan besar menaip, dan sebilangan pembangun memilih untuk tidak mengganggu aliran mereka pada papan kekunci dan akan menggunakan pintasan papan kekunci untuk menukar antara tetingkap desktop, mengerjakan fail yang berbeza, dan menggunakan alat. Sebilangan besar tugas dapat diselesaikan dengan tetikus, tetapi satu manfaat menggunakan baris perintah adalah banyak yang dapat dilakukan dengan alat baris perintah tanpa perlu menukar antara tetikus dan papan kekunci. Manfaat yang lain daripada baris perintah ialah mereka boleh dikonfigurasi dan anda dapat menukar konfigurasi yang sesuai untuk anda, mengubahnya kemudian, dan juga mengimportnya ke mesin pengembangan baru. Kerana persekitaran pembangunan sangat unik bagi setiap pembangun, ada yang akan menghindari penggunaan baris perintah, ada yang akan bergantung sepenuhnya, dan ada yang lebih suka gabungan kedua-duanya.

### Pilihan Command Line Popular

Pilihan untuk ('command line') akan berbeza berdasarkan sistem operasi yang anda mengguna.

*💻 = sudah dimuat turun dalam sistem operasi.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands) (Juga dikenali sebagai CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/applications/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7)

#### Popular Command Line Tools

- [Git](https://git-scm.com/) (💻 Dimuat turun pada kebanyakkan sistem operasi)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentasi

Apabila pembangun ingin mempelajari sesuatu yang baru, kemungkinan besar mereka akan beralih ke dokumentasi untuk mengetahui cara menggunakannya. Pembangun sering bergantung pada dokumentasi untuk membimbing mereka bagaimana menggunakan alat dan bahasa dengan betul, dan juga untuk mendapatkan pengetahuan yang lebih mendalam tentang cara ia berfungsi.

#### Dokumentasi Popular untuk Pembangunan Web

- [Mozilla Developer Network](https://developer.mozilla.org/docs/Web)
- [Frontend Masters](https://frontendmasters.com/learn/)

✅ Lakukan penyelidikan: Sekarang setelah anda mengetahui asas-asas persekitaran pembangun web, membandingkan dan membezakannya dengan persekitaran pereka web.

---

## 🚀 Cabaran

Bandingkan beberapa bahasa pengaturcaraan. Apa ciri unik JavaScript berbanding dengan Java? Bagaimanakah dengan COBOL vs. Go?

## Kuiz Pasca Kuliah
[Kuiz Pasca Kuliah](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/2)

## Mengkaji sendiri & Belajar sendiri

Belajar sedikit mengenai bahasa yang disediakan untuk pengaturcara. Cuba menulis baris dalam satu bahasa pengaturcaraan, dan kemudian membuat semula dalam dua bahasa pengaturcaraan lain. Apakah yang anda pelajari?

## Tugasan

[Membaca Dokumentasi](assignment.ms.md)