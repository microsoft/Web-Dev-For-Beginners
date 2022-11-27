# Membuat Halaman Web yang Boleh Diakses

![Semua Tentang Kebolehcapaian](/sketchnotes/webdev101-a11y.png)
> Sketchnote karya [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra Kuliah
[Kuiz Pra Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> Kekuatan Web berada dalam kesejagatannya. Akses oleh semua orang tanpa mengira kecacatan adalah aspek penting.
>
> \- Sir Timothy Berners-Lee, Pengarah W3C dan penemu World Wide Web

Petikan ini dengan jelas menunjukkan pentingnya membuat laman web yang boleh diakses. Aplikasi yang tidak dapat diakses oleh semua orang adalah definisi pengecualian. Sebagai pembangun laman web, kita harus sentiasa mempunyai fikiran aksesibiliti. Dengan fokus ini dari awal, anda akan dapat memastikan semua orang dapat mengakses halaman yang anda buat. Dalam pelajaran ini, anda akan mengetahui tentang alat yang dapat membantu anda memastikan bahawa aset web anda dapat diakses dan bagaimana membina dengan mempertimbangkan kebolehcapaian.

## Alat untuk digunakan

### Pembaca skrin

Salah satu alat kebolehcapaian yang terkenal ialah pembaca skrin.

[Pembaca Skrin](https://en.wikipedia.org/wiki/Screen_reader) adalah pelanggan yang biasa digunakan untuk mereka yang mengalami masalah penglihatan Semasa kita menghabiskan masa untuk memastikan penyemak imbas menyampaikan maklumat yang ingin kita kongsi dengan betul, kita juga harus memastikan pembaca skrin melakukan perkara yang sama.

Pada asasnya, pembaca skrin akan membaca halaman dari atas ke bawah dengan didengar. Sekiranya halaman anda semua teks, pembaca akan menyampaikan maklumat dengan cara yang serupa dengan penyemak imbas. Sudah tentu, laman web jarang hanya teks; mereka akan mengandungi pautan, grafik, warna, dan komponen visual lain. Perhatian mesti diambil untuk memastikan bahawa maklumat ini dibaca dengan betul oleh pembaca skrin.

Setiap pembangun web harus membiasakan diri dengan pembaca skrin. Seperti yang dinyatakan di atas, ini adalah pelanggan yang akan digunakan pengguna anda Sama seperti anda mengetahui bagaimana penyemak imbas beroperasi, anda harus mengetahui cara pembaca skrin beroperasi. Nasib baik pembaca skrin dimasukkan ke dalam kebanyakan sistem operasi, dan banyak penyemak imbas mengandungi sambungan untuk meniru pembaca skrin.

✅ Cuba pelanjutan atau alat penyemak imbas pembaca skrin. Yang hanya berfungsi pada Windows ialah [JAWS](https://webaim.org/articles/jaws/). Penyemak imbas juga mempunyai alat bawaan yang dapat digunakan untuk tujuan ini; cuba [alat penyemak imbas Edge yang berfokus kebolehaksesan ini](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features).

### Pemeriksa Kontras

Warna di laman web perlu dipilih dengan teliti untuk menjawab keperluan pengguna buta warna atau orang yang mengalami kesukaran untuk melihat warna kontras rendah.

✅ Uji laman web yang anda gemari untuk penggunaan warna dengan pelanjutan penyemak imbas seperti [WCAG's color checker](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US). Apakah anda telah belajar?

### Lighthouse

Di kawasan alat pembangun penyemak imbas (developer tool area) anda, anda akan menemui alat Lighthouse. Alat ini penting untuk mendapatkan pandangan pertama mengenai kebolehaksesan (serta analisis lain) dari laman web. Walaupun penting untuk tidak bergantung sepenuhnya pada Lighthouse, skor 100% sangat membantu sebagai asas.

✅ Cari Lighthouse pada panel alat pembangun penyemak imbas anda dan jalankan analisis di mana-mana laman web. Apakah yang anda telah cari?

## Reka bentuk untuk kebolehcapaian

Kebolehcapaian adalah topik yang agak besar. Untuk membantu anda, terdapat banyak sumber yang ada.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Walaupun kami tidak dapat merangkumi setiap aspek dalam membuat laman web yang dapat diakses, berikut adalah beberapa prinsip utama yang ingin anda laksanakan. Merancang halaman yang dapat diakses dari awal **selalu** lebih mudah daripada kembali ke halaman yang ada untuk menjadikannya mudah diakses.

## Prinsip paparan yang baik

### Palet warna selamat

Orang melihat dunia dengan cara yang berbeza, dan ini termasuk warna. Semasa memilih skema warna untuk laman web anda, anda harus memastikannya dapat diakses oleh semua orang. Salah satu alat yang hebat [untuk menghasilkan palet warna ialah Warna Selamat](http://colorsafe.co/).

✅ Kenalpasti laman web yang sangat bermasalah dalam penggunaan warnanya. Kenapa?

### Sorot teks dengan betul

Menonjolkan teks mengikut warna, [font weight](https://developer.mozilla.org/docs/Web/CSS/font-weight), atau [text decoration](https://developer.mozilla.org/docs/Web/CSS/text-decoration) tidak memberitahu pembaca skrin mengenai kepentingannya. Sesuatu perkataan boleh dicetak tebal kerana itu adalah kata kunci, atau kerana kata pertama dan pereka memutuskan bahawa perkataan itu harus tebal.

Apabila frasa tertentu perlu diserlahkan, gunakan elemen `<strong>` atau `<em>`. Ini akan menunjukkan kepada pembaca skrin bahawa item tersebut penting.

### Guna HTML dengan betul

Dengan CSS dan JavaScript, elemen boleh kelihatan seperti jenis kawalan. `<span>` dapat digunakan untuk membuat `<button>`, dan `<b>` dapat menjadi hyperlink. Walaupun ini mungkin dianggap lebih mudah untuk digayakan, membingungkan pembaca skrin. Gunakan HTML yang sesuai semasa membuat kawalan pada halaman. Sekiranya anda mahukan hyperlink, gunakan `<a>`. Menggunakan HTML yang betul untuk kawalan yang tepat disebut menggunakan HTML Semantik.

✅ Pergi ke mana-mana laman web dan lihat apakah pereka dan pembangun menggunakan HTML dengan betul. Bolehkah anda mencari butang yang seharusnya menjadi pautan? Petunjuk: klik kanan dan pilih 'Lihat Sumber Halaman' di penyemak imbas anda untuk melihat kod yang mendasari.

### Gunakan petunjuk visual yang baik

CSS menawarkan kawalan penuh terhadap penampilan elemen apa pun pada halaman Anda boleh membuat kotak teks tanpa garis besar atau pautan hiper tanpa garis bawah. Malangnya, menghapus petunjuk itu boleh menjadikannya lebih mencabar bagi seseorang yang bergantung kepada mereka untuk dapat mengenali jenis kawalan.

## Kepentingan teks pautan

Hyperlink adalah teras untuk menavigasi web. Hasilnya, memastikan pembaca skrin dapat membaca pautan dengan betul membolehkan semua pengguna menavigasi laman web anda.

### Pembaca skrin dan pautan

Seperti yang anda harapkan, pembaca skrin membaca teks pautan dengan cara yang sama seperti mereka membaca teks lain di halaman. Dengan ini, teks yang ditunjukkan di bawah mungkin dapat diterima dengan baik.

> Penguin kecil, kadang-kadang dikenali sebagai penguin peri, adalah penguin terkecil di dunia. [Tekan sini](https://en.wikipedia.org/wiki/Little_penguin) untuk maklumat lanjut.

> Penguin kecil, kadang-kadang dikenali sebagai penguin peri, adalah penguin terkecil di dunia. Layari https://en.wikipedia.org/wiki/Little_penguin untuk maklumat lanjut.

> **CATATAN** Semasa hendak membaca, anda seharusnya **tidak pernah** membuat pautan yang kelihatan seperti di atas.

Ingat, pembaca skrin adalah antara muka yang berbeza dari penyemak imbas dengan set ciri yang berbeza.

### Masalah dengan menggunakan URL

Pembaca skrin membaca teks. Sekiranya URL muncul dalam teks, pembaca skrin akan membaca URL tersebut. Secara umum, URL tidak menyampaikan maklumat yang bermakna, dan boleh menyakitkan hati. Anda mungkin pernah mengalami ini jika telefon anda pernah membaca pesanan teks dengan URL.

### Masalah dengan "klik di sini"

Pembaca skrin juga mempunyai kemampuan untuk membaca hanya pautan hiper pada halaman, dengan cara yang sama orang yang melihat akan mengimbas halaman untuk mendapatkan pautan. Sekiranya teks pautan selalu "klik di sini", semua pengguna akan mendengar adalah "klik di sini, klik di sini, klik di sini, klik di sini, klik di sini, ..." Semua pautan kini tidak dapat dibezakan antara satu sama lain.

### Teks pautan yang baik

Teks pautan yang baik menerangkan secara ringkas apa yang terdapat di seberang pautan. Dalam contoh di atas yang membicarakan penguin kecil, pautan adalah ke halaman Wikipedia mengenai spesies tersebut. Frasa *penguin kecil* akan menghasilkan teks pautan yang sempurna kerana ia menjelaskan apa yang akan dipelajari oleh seseorang jika mereka mengklik pautan itu - penguin kecil.

> [penguin kecil](https://en.wikipedia.org/wiki/Little_penguin), kadang-kadang dikenali sebagai penguin peri, adalah penguin terkecil di dunia.

✅ Melayari laman web selama beberapa minit untuk mencari halaman yang menggunakan strategi penghubung yang tidak jelas. Bandingkan dengan laman web lain yang mempunyai hubungan lebih baik. Apa yang anda pelajari?

#### Nota enjin carian

Sebagai bonus tambahan untuk memastikan laman web anda dapat diakses oleh semua orang, anda juga akan membantu enjin carian menavigasi laman web anda. Enjin carian menggunakan teks pautan untuk mempelajari topik halaman. Oleh itu, menggunakan teks pautan yang baik membantu semua orang!

### ARIA

Bayangkan halaman berikut:

| Produk       | Penerangan        | Pesanan        |
| ------------ | ----------------- | -------------- |
| Widget       | [Penerangan]('#') | [Pesanan]('#') |
| Super widget | [Penerangan]('#') | [Pesanan]('#') |

Dalam contoh ini, mendua teks keterangan dan urutan masuk akal bagi seseorang yang menggunakan penyemak imbas. Walau bagaimanapun, seseorang yang menggunakan pembaca skrin hanya akan mendengar kata-kata *Penerangan* dan *Pesanan* diulang tanpa konteks.

Untuk menyokong jenis senario ini, HTML menyokong sekumpulan atribut yang dikenali sebagai [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Atribut ini membolehkan anda memberikan maklumat tambahan kepada pembaca skrin.

> **CATATAN**: Seperti banyak aspek HTML, sokongan penyemak imbas dan pembaca skrin mungkin berbeza. Walau bagaimanapun, kebanyakan pelanggan utama menyokong atribut ARIA.

Anda boleh menggunakan `aria-label` untuk menerangkan pautan apabila format halaman tidak membenarkan anda. Keterangan untuk widget dapat ditetapkan sebagai

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Secara umum, menggunakan markup Semantik seperti yang dijelaskan di atas menggantikan penggunaan ARIA, tetapi kadang-kadang tidak ada yang setara dengan semantik untuk pelbagai widget HTML. Contoh yang baik ialah Progressbar. Tidak ada setara HTML untuk bar kemajuan, jadi anda mengenal pasti generik `<div>` untuk elemen ini dengan peranan dan nilai aria yang betul. [MDN documentation on ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) mengandungi maklumat yang lebih berguna.

```html
<div id="percent-loaded" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
</div>
```

## Gambar

Sudah tentu, pembaca skrin tidak dapat membaca secara automatik apa yang terdapat dalam gambar. Memastikan gambar dapat diakses tidak memerlukan banyak kerja - itulah atribut `alt`. Semua gambar harus mempunyai `alt` untuk menggambarkan apa itu.

✅ Seperti yang anda jangkakan, enjin carian juga tidak dapat memahami apa yang ada dalam gambar. Mereka juga menggunakan teks alt. Oleh itu, sekali lagi, memastikan halaman anda dapat diakses memberikan bonus tambahan!

## Papan Kekunci

Sebilangan pengguna tidak dapat menggunakan tetikus atau pad jejak, sebaliknya bergantung pada interaksi papan kekunci ke tab dari satu elemen ke elemen yang lain. Penting bagi laman web anda untuk menyajikan kandungan anda mengikut urutan logik agar papan kekunci dapat mengakses setiap elemen ketika pengguna menurunkan dokumen. Sekiranya anda membina laman web anda dengan penanda semantik dan menggunakan CSS untuk menggayakan susun atur visual mereka, laman web anda harus dilayari papan kekunci, tetapi penting untuk menguji aspek ini secara manual. Ketahui lebih lanjut mengenai [Strategi Papan Kekunci](https://webaim.org/techniques/keyboard/).

✅ Pergi ke mana-mana laman web dan cuba menavigasinya melalui hanya menggunakan kunci tab anda. Apa yang berfungsi, apa yang tidak berfungsi? Kenapa?

## Rumusan

Web yang boleh diakses oleh sesetengah orang bukan benar-benar 'web seluruh dunia'. Kaedah terbaik untuk memastikan laman web yang anda buat dapat diakses adalah dengan menggabungkan amalan terbaik kebolehcapaian sejak awal. Walaupun ada langkah tambahan yang diperlukan, memasukkan kemahiran ini ke dalam aliran kerja anda sekarang akan bermakna semua halaman yang anda buat akan dapat diakses.

---

## 🚀 Cabaran

Ambil HTML ini dan tulis semula agar dapat diakses semaksimum mungkin, mengingat strategi yang anda pelajari.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Kuiz Pasca Kuliah
[Kuiz Pasca Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## Mengkaji dan belajar sendiri

Banyak kerajaan mempunyai undang-undang mengenai syarat aksesibilitas. Baca undang-undang kebolehcapaian negara asal anda. Apa yang dilindungi, dan apa yang tidak? Contohnya ialah [laman kerajaan](https://accessibility.blog.gov.uk/).

## Tugasan

[Menganalisis laman web yang tidak dapat diakses](../assignment.md)

Kredit: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) karya Instrument