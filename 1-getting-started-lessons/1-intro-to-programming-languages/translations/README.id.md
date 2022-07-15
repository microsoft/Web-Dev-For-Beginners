# Pengantar Bahasa Pemrograman dan Alat Keterampilan

Pelajaran ini mencakup dasar-dasar bahasa pemrograman. Topik yang dibahas di sini berlaku untuk sebagian besar bahasa pemrograman modern saat ini. Di bagian 'Alat Keterampilan', Anda akan belajar tentang perangkat lunak yang berguna yang membantu Anda sebagai pengembang.

![Pemrograman Intro](/sketchnotes/webdev101-programming.png)
> Catatan sketsa oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuis Pra-Kuliah

[Kuis pra-kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/1?loc=id)

## Pengantar

Dalam pelajaran ini, kami akan membahas:

- Apa itu pemrograman?
- Jenis bahasa pemrograman
- Elemen dasar dari sebuah program
- Perangkat lunak dan alat-alat yang berguna untuk pengembang profesional

## Apa itu Pemrograman?

Pemrograman (juga dikenal sebagai koding) adalah proses penulisan instruksi ke perangkat, seperti komputer atau perangkat seluler. Kami menulis instruksi ini dengan bahasa pemrograman, yang kemudian diinterpretasikan oleh perangkat. Kumpulan instruksi ini dapat dirujuk dengan berbagai nama, tetapi *program*, *program komputer*, *aplikasi (app)*, dan *dapat dijalankan (executable)* adalah beberapa nama populer.

Sebuah *program* dapat berupa apapun yang ditulis dengan kode; situs web, permainan, dan aplikasi telepon adalah program. Meskipun memungkinkan untuk membuat program tanpa menulis kode, logika dasarnya diinterpretasikan ke perangkat dan logika itu kemungkinan besar ditulis dengan kode. Sebuah program yang *berjalan (running)* atau *menjalankan kode (executing code)* sedang menjalankan instruksi. Perangkat yang saat ini Anda gunakan untuk membaca pelajaran ini menjalankan program untuk mencetaknya ke layar Anda.

✅ Lakukan sedikit riset: siapa yang dianggap pemrogram komputer pertama di dunia?

## Bahasa pemrograman

Bahasa pemrograman memiliki tujuan utama: bagi pengembang untuk membuat instruksi untuk dikirim ke perangkat. Perangkat hanya dapat memahami biner (1 dan 0), dan untuk *sebagian besar* pengembang itu bukan cara yang sangat efisien untuk berkomunikasi. Bahasa pemrograman adalah wahana komunikasi antara manusia dan komputer.

Bahasa pemrograman memiliki format yang berbeda dan mungkin memiliki tujuan yang berbeda. Misalnya, JavaScript terutama digunakan untuk aplikasi web, sedangkan Bash terutama digunakan untuk sistem operasi.

*Bahasa tingkat rendah (Low level languages)* biasanya membutuhkan lebih sedikit langkah daripada *bahasa tingkat tinggi (high level languages)* agar perangkat dapat menafsirkan instruksi. Namun, yang membuat bahasa tingkat tinggi lebih populer adalah keterbacaan dan dukungannya. JavaScript dianggap sebagai bahasa tingkat tinggi.

Kode berikut menggambarkan perbedaan antara bahasa tingkat tinggi dengan JavaScript dan bahasa tingkat rendah dengan kode rakitan ARM (ARM assembly code).

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

Percaya atau tidak, *mereka berdua melakukan hal yang sama*: mencetak urutan Fibonacci hingga 10.

✅ Urutan Fibonacci [didefinisikan](https://en.wikipedia.org/wiki/Fibonacci_number) sebagai sekumpulan angka sedemikian rupa sehingga setiap angka adalah jumlah dari dua angka sebelumnya, mulai dari 0 dan 1.

## Elemen program

Satu instruksi dalam program disebut *statement* dan biasanya akan memiliki karakter atau penspasian baris yang menandai di mana instruksi berakhir, atau *mengakhiri (terminates)*. Bagaimana sebuah program berakhir bervariasi menurut setiap bahasa.

Sebagian besar program mengandalkan penggunaan data dari pengguna atau di tempat lain, di mana pernyataan dapat mengandalkan data untuk melakukan instruksi. Data dapat mengubah bagaimana sebuah program berperilaku, sehingga bahasa pemrograman datang dengan cara untuk menyimpan data sementara yang dapat digunakan nanti. Data ini disebut *variabel*. Variabel adalah pernyataan yang menginstruksikan perangkat untuk menyimpan data dalam memorinya. Variabel dalam program mirip dengan yang ada di aljabar, di mana mereka memiliki nama yang unik dan nilainya dapat berubah dari waktu ke waktu.

Ada kemungkinan bahwa beberapa pernyataan tidak akan dijalankan oleh perangkat. Ini biasanya oleh desain ketika ditulis oleh pengembang atau secara tidak sengaja ketika kesalahan yang tidak terduga terjadi. Jenis kontrol aplikasi ini membuatnya lebih kuat dan dapat dipertahankan. Biasanya perubahan kontrol ini terjadi ketika keputusan tertentu terpenuhi. Pernyataan umum dalam bahasa pemrograman modern untuk mengontrol bagaimana program dijalankan adalah pernyataan `if..else`.

✅ Anda akan mempelajari lebih lanjut tentang jenis pernyataan ini dalam pelajaran berikutnya

## Alat Keterampilan

[![Alat Keterampilan](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Alat Keterampilan")

Di bagian ini, Anda akan mempelajari beberapa perangkat lunak yang mungkin berguna saat memulai perjalanan pengembangan profesional.

***Lingkungan pengembangan (development environment)*** adalah seperangkat alat dan fitur unik yang sering digunakan pengembang saat menulis perangkat lunak. Beberapa alat ini telah disesuaikan untuk kebutuhan khusus pengembang, dan dapat berubah seiring waktu jika pengembang mengubah prioritas dalam proyek kerja atau pribadi, atau ketika mereka menggunakan bahasa pemrograman yang berbeda. Lingkungan pengembangan sama uniknya dengan pengembang yang menggunakannya.

### Editor

Salah satu alat yang paling penting untuk pengembangan perangkat lunak adalah editor. Editor adalah tempat Anda menulis kode dan kadang-kadang di mana Anda akan menjalankan kode Anda.

Pengembang mengandalkan editor karena beberapa alasan tambahan:

- *Debugging* Menemukan bug dan kesalahan dengan melangkah melalui kode, baris demi baris. Beberapa editor memiliki kemampuan debugging, atau dapat disesuaikan dan ditambahkan untuk bahasa pemrograman tertentu.  
- *Penyorotan sintaks* Menambahkan warna dan pemformatan teks ke kode, membuatnya lebih mudah dibaca. Sebagian besar editor memungkinkan penyorotan sintaks yang disesuaikan.
- *Ekstensi dan Integrasi* Penambahan yang khusus untuk pengembang, oleh pengembang, untuk akses ke alat tambahan yang tidak dibangun ke dalam editor dasar. Misalnya, banyak pengembang juga membutuhkan cara untuk mendokumentasikan kode mereka dan menjelaskan cara kerjanya dan akan menginstal ekstensi pemeriksaan ejaan untuk memeriksa kesalahan ketik. Sebagian besar penambahan ini dimaksudkan untuk digunakan dalam editor tertentu, dan sebagian besar editor datang dengan cara untuk mencari ekstensi yang tersedia.
- *Kustomisasi* Sebagian besar editor sangat dapat disesuaikan, dan setiap pengembang akan memiliki lingkungan pengembangan unik mereka sendiri yang sesuai dengan kebutuhan mereka. Banyak juga yang memungkinkan pengembang untuk membuat ekstensi mereka sendiri.

#### Editor dan Ekstensi Pengembangan Web Populer

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### Browser

Alat penting lainnya adalah browser. Pengembang web mengandalkan browser untuk mengamati bagaimana kode mereka berjalan di web, itu juga digunakan untuk melihat elemen visual dari halaman web yang ditulis di editor, seperti HTML.

Banyak browser datang dengan *alat pengembang* (DevTools) yang berisi serangkaian fitur dan informasi bermanfaat untuk membantu pengembang mengumpulkan dan menangkap wawasan penting tentang aplikasi mereka. Misalnya: Jika halaman web memiliki kesalahan, terkadang berguna untuk mengetahui kapan halaman web tersebut terjadi. DevTools di browser dapat dikonfigurasi untuk mengambil informasi ini.

#### Browser dan DevTools Populer

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Alat Command Line

Beberapa pengembang lebih suka tampilan grafis yang kurang untuk tugas sehari-hari mereka dan mengandalkan command line (baris perintah) untuk mencapai ini. Mengembangkan kode membutuhkan sejumlah besar pengetikan, dan beberapa pengembang lebih suka tidak mengganggu aliran mereka pada keyboard dan akan menggunakan pintasan keyboard untuk bertukar antara jendela desktop, mengerjakan file yang berbeda, dan menggunakan alat. Sebagian besar tugas dapat diselesaikan dengan mouse, tetapi satu manfaat menggunakan command line adalah bahwa banyak yang dapat dilakukan dengan alat command line tanpa perlu bertukar antara mouse dan keyboard. Manfaat lain dari command line adalah bahwa mereka dapat dikonfigurasi dan Anda dapat menyimpan konfigurasi kustom Anda, mengubahnya nanti, dan juga mengimpornya ke mesin pengembangan baru. Karena lingkungan pengembangan sangat unik untuk setiap pengembang, beberapa akan menghindari menggunakan command line, beberapa akan mengandalkannya sepenuhnya, dan beberapa lebih suka campuran keduanya.

### Pilihan Command Line Populer

Pilihan untuk command line akan berbeda berdasarkan sistem operasi yang Anda gunakan.

*💻 = sudah terinstall dengan sistem operasi.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Alat Command Line Populer

- [Git](https://git-scm.com/) (💻 on most operating sytems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentasi

Ketika pengembang ingin mempelajari sesuatu yang baru, mereka kemungkinan besar akan mengandalkan dokumentasi untuk mempelajari cara menggunakannya. Pengembang sering mengandalkan dokumentasi untuk memandu mereka melalui cara menggunakan alat dan bahasa dengan benar, dan juga untuk mendapatkan pengetahuan yang lebih mendalam tentang cara kerjanya.

#### Dokumentasi Populer tentang Pengembangan Web

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web) dari Mozilla, penerbit [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), dari Google, penerbit [Chrome](https://www.google.com/chrome/)
- [Dokumen pengembang Microsoft sendiri](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), untuk [Microsoft Edge](https://www.microsoft.com/edge)

✅ Lakukan riset: Sekarang Anda tahu dasar-dasar lingkungan pengembang web, bandingkan dan kontras dengan lingkungan desainer web.

---

## 🚀 Tantangan

Bandingkan beberapa bahasa pemrograman. Apa saja ciri-ciri unik JavaScript vs. Java? Bagaimana dengan COBOL vs. Go?

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://calm-wave-0d1a32b03.1.azurestaticapps.net/quiz/2?loc=id)

## Ulasan & Belajar Mandiri

Pelajari sedikit tentang berbagai bahasa yang tersedia untuk programmer. Cobalah untuk menulis baris dalam satu bahasa, dan kemudian mengulanginya pada dua bahasa lainnya. Apa yang Anda pelajari?

## Tugas

[Membaca Dokumentasi](assignment.id.md)
