# Projek Terrarium Bahagian 2: Pengenalan Kepada CSS

![Pengenalan Kepada CSS](/sketchnotes/webdev101-css.png)
> Sketchnote karya [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/17)

### Pengenalan

CSS, atau Cascading Style Sheets, menyelesaikan masalah penting dalam pembangunan web: bagaimana menjadikan laman web anda kelihatan cantik. Menggayakan aplikasi anda menjadikannya lebih berguna dan kelihatan lebih baik; anda juga boleh menggunakan CSS untuk membuat Reka Bentuk Web Responsif (RWD) - membolehkan apl anda kelihatan baik tidak kira ukuran skrin yang dipaparkan. CSS bukan hanya menjadikan aplikasi anda kelihatan bagus; spesifikasinya merangkumi animasi dan transformasi yang membolehkan interaksi yang canggih untuk aplikasi anda. Kumpulan Kerja CSS membantu mengekalkan spesifikasi CSS semasa; anda boleh mengikuti karya mereka di [laman web World Wide Web Consortium](https://www.w3.org/Style/CSS/members) .

> Perhatikan, CSS adalah bahasa yang berkembang, seperti semua yang ada di web, dan tidak semua penyemak imbas menyokong bahagian spesifikasi yang lebih baru. Sentiasa periksa pelaksanaan anda dengan merujuk [CanIUse.com](https://caniuse.com).

Dalam pelajaran ini, kami akan menambahkan gaya ke terarium dalam talian kami dan mengetahui lebih lanjut mengenai beberapa konsep CSS: lata, pewarisan, dan penggunaan pemilih, penentuan kedudukan, dan menggunakan CSS untuk membina susun atur. Dalam prosesnya kita akan menyusun terarium dan membuat terarium itu sendiri.

### Prasyarat

Anda harus mempunyai pengetahuan HTML untuk terarium anda dan siap digayakan.

### Tugas

Dalam folder terarium anda, buat fail baru yang disebut `style.css`. Import fail itu di bahagian `<head>`:

```html
<link rel="stylesheet" href="./style.css" />
```

---

## The Cascade

Cascading Style Sheets menggabungkan idea bahawa gaya 'cascade' sehingga penerapan gaya dipandu oleh keutamaannya. Gaya yang ditetapkan oleh pengarang laman web lebih diutamakan daripada yang ditetapkan oleh penyemak imbas. Gaya yang ditetapkan 'sebaris' lebih diutamakan daripada yang ditetapkan dalam helaian gaya luaran.

### Tugas

Tambahkan gaya sebaris "color: red" ke tag `<h1>` anda:

```HTML
<h1 style="color: red">My Terrarium</h1>
```

Kemudian, tambahkan kod berikut ke fail `style.css` anda:

```CSS
h1 {
 color: blue;
}
```

✅ Warna mana yang dipaparkan di aplikasi web anda? Kenapa? Bolehkah anda mencari cara untuk mengganti gaya? Bilakah anda mahu melakukan ini, atau mengapa tidak?

---

## Warisan

Gaya diwarisi dari gaya nenek moyang hingga keturunan, sehingga elemen bersarang mewarisi gaya ibu bapa mereka.

### Tugas

Tetapkan fon badan ke fon tertentu, dan periksa untuk melihat fon elemen bersarang:

```
body {
	font-family: helvetica, arial, sans-serif;
}
```

Buka konsol penyemak imbas anda ke tab 'Elements' dan perhatikan fon H1. Ini mewarisi fonnya dari badan, seperti yang dinyatakan dalam penyemak imbas:

![inherited font](../images/1.png)

✅ Bolehkah anda menjadikan gaya bersarang mewarisi harta yang berbeza?

---

## CSS Selector

### Tag

Setakat ini, fail `style.css` anda hanya mempunyai beberapa tag yang digayakan, dan aplikasinya kelihatan sangat pelik:

```
body {
	font-family: helvetica, arial, sans-serif;
}

h1 {
	color: #3a241d;
	text-align: center;
}
```

Cara menggayakan tag ini memberi anda kawalan terhadap elemen unik, tetapi anda perlu mengawal gaya banyak tanaman di terarium anda. Untuk melakukan itu, anda perlu memanfaatkan CSS selector.

### Id

Tambahkan beberapa gaya untuk mengatur bekas kiri dan kanan. Oleh kerana hanya ada satu bekas kiri dan hanya satu bekas kanan, mereka diberi id dalam markup. Untuk menggayakannya, gunakan `#`:

```
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
```

Di sini, anda telah meletakkan bekas ini dengan kedudukan mutlak di paling kiri dan kanan skrin, dan menggunakan peratusan untuk lebarnya sehingga dapat menskalakan untuk skrin mudah alih kecil.

✅ Kod ini agak berulang, oleh itu tidak "DRY" (Don't Repeat Yourself); bolehkah anda mencari cara yang lebih baik untuk menggayakan id ini, mungkin dengan id dan kelas? Anda perlu mengubah markup dan memfaktorkan semula CSS:

```html
<div id="left-container" class="container"></div>
```

### Kelas

Dalam contoh di atas, anda menggayakan dua elemen unik di skrin. Sekiranya anda mahu gaya diterapkan pada banyak elemen di layar, anda boleh menggunakan kelas CSS. Lakukan ini untuk menyusun tanaman di bekas kiri dan kanan.

Perhatikan bahawa setiap tanaman dalam markup HTML mempunyai kombinasi id dan kelas. Id di sini digunakan oleh JavaScript yang akan anda tambahkan kemudian untuk memanipulasi penempatan tanaman terarium. Walau bagaimanapun, kelas-kelasnya memberi gaya kepada semua tanaman.

```html
<div class="plant-holder">
	<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
</div>
```

Tambahkan yang berikut ke fail `style.css` anda:

```css
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
```

Dalam coretan ini adalah gabungan kedudukan relatif dan mutlak, yang akan kita bahas di bahagian seterusnya. Lihat cara ketinggian dikendalikan oleh peratusan:

Anda menetapkan ketinggian pemegang kilang kepada 13%, jumlah yang baik untuk memastikan bahawa semua tanaman dipaparkan di setiap bekas menegak tanpa perlu menatal.

Anda menetapkan pemegang kilang bergerak ke kiri untuk membiarkan tanaman lebih berpusat di dalam bekasnya. Gambar mempunyai sejumlah besar latar belakang lutsinar sehingga membuatnya lebih mudah diseret, jadi perlu didorong ke kiri agar lebih pas di layar.

Kemudian, kilang itu sendiri diberi lebar maksimum 150%. Ini memungkinkan untuk mengecil ketika penyemak imbas turun. Cuba ubah saiz penyemak imbas anda; tanaman tinggal di dalam bekasnya tetapi dikecilkan agar sesuai.

Juga dapat diperhatikan adalah penggunaan z-index, yang mengendalikan ketinggian relatif suatu elemen (sehingga tanaman duduk di atas wadah dan tampak duduk di dalam terarium).

✅ Mengapakah anda memerlukan pemegang tanaman dan CSS Selector?

## Kedudukan CSS

Sifat pencampuran kedudukan (terdapat kedudukan statik, relatif, tetap, mutlak, dan melekit) boleh menjadi agak rumit, tetapi apabila dilakukan dengan betul, ia memberi anda kawalan yang baik terhadap unsur-unsur di halaman anda.

Unsur-unsur yang diposisikan secara mutlak diposisikan berbanding dengan nenek moyang mereka yang terdekat, dan jika tidak ada, ia diposisikan sesuai dengan badan dokumen.

Elemen kedudukan relatif diletakkan berdasarkan arahan CSS untuk menyesuaikan penempatannya dari kedudukan awalnya.

Dalam sampel kami, `pemegang tumbuhan` adalah elemen kedudukan relatif yang diposisikan dalam wadah kedudukan mutlak. Tingkah laku yang dihasilkan adalah bahawa wadah bar sisi disematkan ke kiri dan kanan, dan pemegang tanaman bersarang, menyesuaikan diri di dalam bar sisi, memberi ruang untuk tanaman ditempatkan dalam barisan menegak.

> `Tumbuhan` itu sendiri juga mempunyai kedudukan mutlak, yang diperlukan untuk membuatnya dapat diseret, seperti yang akan anda ketahui dalam pelajaran seterusnya.

✅ Eksperimen dengan menukar jenis penempatan bekas sampingan dan pemegang tumbuhan. Apa yang berlaku?

## Susun atur CSS

Sekarang anda akan menggunakan apa yang anda pelajari untuk membina terarium itu sendiri, semuanya menggunakan CSS!

Pertama, gayakan anak-anak `.terrarium` sebagai segi empat bulat menggunakan CSS:

```css
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
```

Perhatikan penggunaan peratusan di sini. Sekiranya anda menurunkan penyemak imbas anda, anda dapat melihat bagaimana skala sudut jar juga. Perhatikan juga peratusan lebar dan tinggi untuk elemen balang dan bagaimana setiap elemen benar-benar diposisikan di tengah, disematkan ke bahagian bawah pandang.

✅ Cubalah ubah warna balang dan kelegapan berbanding kotoran. Apa yang berlaku? Kenapa?

---

## 🚀Cabaran

Tambahkan kilauan 'bubble' ke bahagian bawah kiri balang agar kelihatan lebih menyerupai kaca. Anda akan menggayakan `.jar-glossy-long` dan` .jar-glossy-short` agar kelihatan seperti kilauan yang dipantulkan. Ini rupanya:

![finished terrarium](../images/terrarium-final.png)

Untuk menyelesaikan kuiz pasca kuliah, baca modul Belajar ini: [Gaya aplikasi HTML anda dengan CSS](https://docs.microsoft.com/learn/modules/build-simple-website/4-css-basics)

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/18)

## Mengkaji & Belajar Sendiri

CSS nampaknya sangat mudah, tetapi ada banyak cabaran ketika mencuba gaya aplikasi dengan sempurna untuk semua penyemak imbas dan semua saiz skrin. CSS-Grid dan Flexbox adalah alat yang telah dikembangkan untuk menjadikan pekerjaan itu sedikit lebih tersusun dan lebih dipercayai. Ketahui mengenai alat ini dengan bermain [Flexbox Froggy](https://flexboxfroggy.com/) dan [Grid Garden](https://codepip.com/games/grid-garden/).

## Tugasan

[Pemfaktoran Semula CSS](assignment.ms.md)