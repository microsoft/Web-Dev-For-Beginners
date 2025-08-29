<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f0c88c3e2cefa8952d356f802b1e47ca",
  "translation_date": "2025-08-29T09:37:10+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "ms"
}
-->
# Membuat Laman Web yang Mudah Diakses

![Semua Tentang Kebolehcapaian](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.ms.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra-Kuliah
[Kuiz pra-kuliah](https://ff-quizzes.netlify.app/web/)

> Kuasa Web terletak pada sifat sejagatnya. Akses oleh semua orang tanpa mengira kecacatan adalah aspek yang penting.
>
> \- Sir Timothy Berners-Lee, Pengarah W3C dan pencipta World Wide Web

Petikan ini dengan sempurna menekankan kepentingan mencipta laman web yang mudah diakses. Aplikasi yang tidak dapat diakses oleh semua orang secara definisi adalah bersifat eksklusif. Sebagai pembangun web, kita harus sentiasa memikirkan kebolehcapaian. Dengan memberi tumpuan kepada aspek ini dari awal, anda akan berada di landasan yang betul untuk memastikan semua orang dapat mengakses laman yang anda cipta. Dalam pelajaran ini, anda akan belajar tentang alat yang dapat membantu anda memastikan aset web anda mudah diakses dan bagaimana membina dengan kebolehcapaian dalam fikiran.

> Anda boleh mengikuti pelajaran ini di [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Alat yang Digunakan

### Pembaca Skrin

Salah satu alat kebolehcapaian yang paling terkenal ialah pembaca skrin.

[Pembaca skrin](https://en.wikipedia.org/wiki/Screen_reader) adalah klien yang biasa digunakan oleh mereka yang mempunyai masalah penglihatan. Semasa kita meluangkan masa memastikan pelayar menyampaikan maklumat yang ingin kita kongsi, kita juga mesti memastikan pembaca skrin melakukan perkara yang sama.

Secara asasnya, pembaca skrin akan membaca halaman dari atas ke bawah secara audio. Jika halaman anda hanya teks, pembaca akan menyampaikan maklumat dengan cara yang serupa dengan pelayar. Sudah tentu, laman web jarang hanya teks; ia akan mengandungi pautan, grafik, warna, dan komponen visual lain. Perhatian mesti diberikan untuk memastikan maklumat ini dibaca dengan betul oleh pembaca skrin.

Setiap pembangun web harus membiasakan diri dengan pembaca skrin. Seperti yang dinyatakan di atas, ia adalah klien yang akan digunakan oleh pengguna anda. Sama seperti anda biasa dengan cara pelayar berfungsi, anda juga harus belajar cara pembaca skrin berfungsi. Nasib baik, pembaca skrin dibina dalam kebanyakan sistem operasi.

Beberapa pelayar juga mempunyai alat terbina dalam dan sambungan yang boleh membaca teks dengan kuat atau bahkan menyediakan beberapa ciri navigasi asas, seperti [alat kebolehcapaian pelayar Edge ini](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Alat ini juga penting untuk kebolehcapaian, tetapi berfungsi dengan cara yang sangat berbeza daripada pembaca skrin dan tidak boleh disalah anggap sebagai alat ujian pembaca skrin.

✅ Cuba pembaca skrin dan pembaca teks pelayar. Pada Windows, [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) disertakan secara lalai, dan [JAWS](https://webaim.org/articles/jaws/) serta [NVDA](https://www.nvaccess.org/about-nvda/) juga boleh dipasang. Pada macOS dan iOS, [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) dipasang secara lalai.

### Zum

Satu lagi alat yang biasa digunakan oleh orang yang mempunyai masalah penglihatan ialah zum. Jenis zum yang paling asas ialah zum statik, dikawal melalui `Control + tanda tambah (+)` atau dengan mengurangkan resolusi skrin. Jenis zum ini menyebabkan keseluruhan halaman diubah saiz, jadi menggunakan [reka bentuk responsif](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) adalah penting untuk memberikan pengalaman pengguna yang baik pada tahap zum yang meningkat.

Jenis zum lain bergantung pada perisian khusus untuk membesarkan satu kawasan skrin dan menggerakkan pandangan, seperti menggunakan kaca pembesar sebenar. Pada Windows, [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) dibina dalam, dan [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) adalah perisian pembesaran pihak ketiga dengan lebih banyak ciri dan pangkalan pengguna yang lebih besar. Kedua-dua macOS dan iOS mempunyai perisian pembesaran terbina dalam yang dipanggil [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Pemeriksa Kontras

Warna pada laman web perlu dipilih dengan teliti untuk memenuhi keperluan pengguna buta warna atau orang yang mempunyai kesukaran melihat warna dengan kontras rendah.

✅ Uji laman web yang anda suka gunakan untuk penggunaan warna dengan sambungan pelayar seperti [pemeriksa warna WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Apa yang anda pelajari?

### Lighthouse

Di kawasan alat pembangun pelayar anda, anda akan menemui alat Lighthouse. Alat ini penting untuk mendapatkan pandangan pertama tentang kebolehcapaian (serta analisis lain) laman web. Walaupun penting untuk tidak bergantung sepenuhnya pada Lighthouse, skor 100% sangat membantu sebagai asas.

✅ Cari Lighthouse dalam panel alat pembangun pelayar anda dan jalankan analisis pada mana-mana laman web. Apa yang anda temui?

## Reka Bentuk untuk Kebolehcapaian

Kebolehcapaian adalah topik yang agak besar. Untuk membantu anda, terdapat banyak sumber yang tersedia.

- [Accessible U - University of Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Walaupun kita tidak dapat merangkumi setiap aspek mencipta laman yang mudah diakses, di bawah adalah beberapa prinsip teras yang ingin anda laksanakan. Merancang halaman yang mudah diakses dari awal **sentiasa** lebih mudah daripada kembali ke halaman sedia ada untuk menjadikannya mudah diakses.

## Prinsip Paparan yang Baik

### Palet Warna Selamat

Orang melihat dunia dengan cara yang berbeza, termasuk warna. Apabila memilih skema warna untuk laman anda, anda harus memastikan ia mudah diakses oleh semua. Satu alat yang hebat untuk menjana palet warna ialah [Color Safe](http://colorsafe.co/).

✅ Kenal pasti laman web yang sangat bermasalah dalam penggunaan warnanya. Kenapa?

### Gunakan HTML yang Betul

Dengan CSS dan JavaScript, adalah mungkin untuk membuat mana-mana elemen kelihatan seperti mana-mana jenis kawalan. `<span>` boleh digunakan untuk mencipta `<button>`, dan `<b>` boleh menjadi pautan. Walaupun ini mungkin dianggap lebih mudah untuk digayakan, ia tidak menyampaikan apa-apa kepada pembaca skrin. Gunakan HTML yang sesuai semasa mencipta kawalan pada halaman. Jika anda mahukan pautan, gunakan `<a>`. Menggunakan HTML yang betul untuk kawalan yang betul dipanggil menggunakan HTML Semantik.

✅ Pergi ke mana-mana laman web dan lihat sama ada pereka dan pembangun menggunakan HTML dengan betul. Bolehkah anda menemui butang yang sepatutnya menjadi pautan? Petunjuk: klik kanan dan pilih 'View Page Source' dalam pelayar anda untuk melihat kod asas.

### Cipta Hierarki Tajuk yang Deskriptif

Pengguna pembaca skrin [sangat bergantung pada tajuk](https://webaim.org/projects/screenreadersurvey8/#finding) untuk mencari maklumat dan menavigasi melalui halaman. Menulis kandungan tajuk yang deskriptif dan menggunakan tag tajuk semantik adalah penting untuk mencipta laman yang mudah dinavigasi untuk pengguna pembaca skrin.

### Gunakan Petunjuk Visual yang Baik

CSS menawarkan kawalan penuh ke atas rupa mana-mana elemen pada halaman. Anda boleh mencipta kotak teks tanpa garis luar atau pautan tanpa garis bawah. Malangnya, menghapuskan petunjuk tersebut boleh menjadikannya lebih mencabar bagi seseorang yang bergantung padanya untuk mengenali jenis kawalan.

## Kepentingan Teks Pautan

Pautan adalah teras kepada navigasi web. Oleh itu, memastikan pembaca skrin dapat membaca pautan dengan betul membolehkan semua pengguna menavigasi laman anda.

### Pembaca Skrin dan Pautan

Seperti yang anda jangkakan, pembaca skrin membaca teks pautan dengan cara yang sama seperti mereka membaca teks lain pada halaman. Dengan ini dalam fikiran, teks yang ditunjukkan di bawah mungkin kelihatan boleh diterima.

> Penguin kecil, kadang-kadang dikenali sebagai penguin peri, adalah penguin terkecil di dunia. [Klik di sini](https://en.wikipedia.org/wiki/Little_penguin) untuk maklumat lanjut.

> Penguin kecil, kadang-kadang dikenali sebagai penguin peri, adalah penguin terkecil di dunia. Lawati https://en.wikipedia.org/wiki/Little_penguin untuk maklumat lanjut.

> **NOTE** Seperti yang akan anda baca, anda seharusnya **tidak pernah** mencipta pautan yang kelihatan seperti di atas.

Ingat, pembaca skrin adalah antara muka yang berbeza daripada pelayar dengan set ciri yang berbeza.

### Masalah dengan Menggunakan URL

Pembaca skrin membaca teks. Jika URL muncul dalam teks, pembaca skrin akan membaca URL tersebut. Secara amnya, URL tidak menyampaikan maklumat yang bermakna, dan boleh kedengaran menjengkelkan. Anda mungkin pernah mengalami ini jika telefon anda pernah membaca mesej teks dengan URL secara audio.

### Masalah dengan "klik di sini"

Pembaca skrin juga mempunyai keupayaan untuk membaca hanya pautan pada halaman, sama seperti seseorang yang dapat melihat akan mengimbas halaman untuk pautan. Jika teks pautan sentiasa "klik di sini", semua yang akan didengar oleh pengguna ialah "klik di sini, klik di sini, klik di sini, klik di sini, klik di sini, ..." Semua pautan kini tidak dapat dibezakan antara satu sama lain.

### Teks Pautan yang Baik

Teks pautan yang baik secara ringkas menerangkan apa yang ada di sebalik pautan tersebut. Dalam contoh di atas yang membincangkan penguin kecil, pautan adalah ke halaman Wikipedia tentang spesies tersebut. Frasa *penguin kecil* akan menjadi teks pautan yang sempurna kerana ia menjelaskan apa yang akan dipelajari seseorang jika mereka mengklik pautan tersebut - penguin kecil.

> [Penguin kecil](https://en.wikipedia.org/wiki/Little_penguin), kadang-kadang dikenali sebagai penguin peri, adalah penguin terkecil di dunia.

✅ Layari web selama beberapa minit untuk mencari halaman yang menggunakan strategi pautan yang tidak jelas. Bandingkan mereka dengan laman lain yang mempunyai pautan yang lebih baik. Apa yang anda pelajari?

#### Nota Enjin Carian

Sebagai bonus tambahan untuk memastikan laman anda mudah diakses oleh semua, anda akan membantu enjin carian menavigasi laman anda juga. Enjin carian menggunakan teks pautan untuk mempelajari topik halaman. Jadi menggunakan teks pautan yang baik membantu semua orang!

### ARIA

Bayangkan halaman berikut:

| Produk       | Penerangan         | Pesanan      |
| ------------ | ------------------ | ------------ |
| Widget       | [Penerangan](../../../../1-getting-started-lessons/3-accessibility/')  | [Pesanan](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [Penerangan](../../../../1-getting-started-lessons/3-accessibility/')  | [Pesanan](../../../../1-getting-started-lessons/3-accessibility/') |

Dalam contoh ini, menduplikasi teks penerangan dan pesanan masuk akal untuk seseorang yang menggunakan pelayar. Walau bagaimanapun, seseorang yang menggunakan pembaca skrin hanya akan mendengar perkataan *penerangan* dan *pesanan* berulang tanpa konteks.

Untuk menyokong jenis senario ini, HTML menyokong satu set atribut yang dikenali sebagai [Aplikasi Internet Kaya yang Mudah Diakses (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Atribut ini membolehkan anda memberikan maklumat tambahan kepada pembaca skrin.

> **NOTE**: Seperti banyak aspek HTML, sokongan pelayar dan pembaca skrin mungkin berbeza-beza. Walau bagaimanapun, kebanyakan klien utama menyokong atribut ARIA.

Anda boleh menggunakan `aria-label` untuk menerangkan pautan apabila format halaman tidak membenarkannya. Penerangan untuk widget boleh ditetapkan sebagai

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Secara umum, menggunakan markup Semantik seperti yang diterangkan di atas mengatasi penggunaan ARIA, tetapi kadang-kadang tiada setara semantik untuk pelbagai widget HTML. Contoh yang baik ialah Pokok. Tiada setara HTML untuk pokok, jadi anda mengenal pasti `<div>` generik untuk elemen ini dengan peranan dan nilai aria yang sesuai. [Dokumentasi MDN tentang ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) mengandungi maklumat yang lebih berguna.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Imej

Tidak perlu dikatakan pembaca skrin tidak dapat membaca secara automatik apa yang ada dalam imej. Memastikan imej mudah diakses tidak memerlukan banyak usaha - itulah tujuan atribut `alt`. Semua imej yang bermakna harus mempunyai `alt` untuk menerangkan apa yang mereka wakili. Imej yang semata-mata hiasan harus mempunyai atribut `alt` yang ditetapkan kepada rentetan kosong: `alt=""`. Ini menghalang pembaca skrin daripada mengumumkan imej hiasan secara tidak perlu.

✅ Seperti yang anda jangkakan, enjin carian juga tidak dapat memahami apa yang ada dalam imej. Mereka juga menggunakan teks alt. Jadi sekali lagi, memastikan laman anda mudah diakses memberikan bonus tambahan!

## Papan Kekunci

Sesetengah pengguna tidak dapat menggunakan tetikus atau pad jejak, sebaliknya bergantung pada interaksi papan kekunci untuk tab dari satu elemen ke elemen seterusnya. Penting untuk laman web anda menyampaikan kandungan anda dalam susunan yang logik supaya pengguna papan kekunci dapat mengakses setiap elemen interaktif semasa mereka bergerak ke bawah dokumen. Jika anda membina laman web anda dengan markup semantik dan menggunakan CSS untuk menggayakan susun atur visualnya, laman anda seharusnya boleh dinavigasi dengan papan kekunci, tetapi penting untuk menguji aspek ini secara manual. Ketahui lebih lanjut tentang [strategi navigasi papan kekunci](https://webaim.org/techniques/keyboard/).

✅ Pergi ke mana-mana laman web dan cuba navigasi melaluinya menggunakan hanya papan kekunci anda. Apa yang berfungsi, apa yang tidak berfungsi? Kenapa?

## Ringkasan

Web yang hanya boleh diakses oleh sesetengah orang bukanlah 'world-wide web' yang sebenar. Cara terbaik untuk memastikan laman yang anda cipta mudah diakses ialah dengan menggabungkan amalan terbaik kebolehcapaian dari awal. Walaupun terdapat langkah tambahan yang terlibat, menggabungkan kemahiran ini ke dalam aliran kerja anda sekarang akan memastikan semua laman yang anda cipta mudah diakses.

---

## 🚀 Cabaran

Ambil HTML ini dan tulis semula untuk menjadi semudah diakses yang mungkin, berdasarkan strategi yang anda pelajari.

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
      <p class="footer-copyright">&copy; 2016 Instrument</p>
    </div>
  </body>
</html>
```

## Kuiz Pasca-Kuliah
[Kuiz pasca-kuliah](https://ff-quizzes.netlify.app/web/en/)

## Kajian Semula & Kajian Kendiri
Banyak kerajaan mempunyai undang-undang berkaitan keperluan kebolehcapaian. Ketahui lebih lanjut tentang undang-undang kebolehcapaian di negara asal anda. Apa yang diliputi, dan apa yang tidak? Contohnya ialah [laman web kerajaan ini](https://accessibility.blog.gov.uk/).

## Tugasan
 
[Analisis laman web yang tidak boleh diakses](assignment.md)

Kredit: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) oleh Instrument

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil maklum bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.