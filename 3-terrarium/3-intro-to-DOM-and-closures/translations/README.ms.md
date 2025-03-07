# Projek Terrarium Bahagian 3: Memanipulasi DOM dan Penutupan

![DOM dan penutupan](/sketchnotes/webdev101-js.png)
> Sketchnote karya [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/19)

### Pengenalan

Memanipulasi DOM, atau "Document Object Model", adalah aspek penting dalam pengembangan web. Menurut [MDN](https://developer.mozilla.org/docs/Web/API/Document_Object_Model/Introduction), "Document Object Model (DOM) adalah representasi data dari objek yang terdiri dari struktur dan kandungan dokumen di web. " Cabaran di sekitar manipulasi DOM di web sering menjadi dorongan di belakang menggunakan kerangka kerja JavaScript dan bukannya JavaScript vanila untuk menguruskan DOM, tetapi kami akan menguruskannya sendiri!

Selain itu, pelajaran ini akan memperkenalkan idea [Penutupan JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Closures), yang dapat anda fikirkan sebagai fungsi yang dilampirkan oleh yang lain berfungsi sehingga fungsi dalaman mempunyai akses ke ruang fungsi scope luar.

> Penutupan JavaScript adalah topik yang luas dan kompleks. Pelajaran ini menyentuh idea paling asas bahawa dalam kod terarium ini, anda akan menemui penutup: fungsi dalaman dan fungsi luar yang dibina dengan cara yang membolehkan fungsi dalaman mengakses ke ruang lingkup fungsi luar. Untuk lebih banyak maklumat mengenai cara ini berfungsi, sila lawati [dokumentasi yang luas](https://developer.mozilla.org/docs/Web/JavaScript/Closures).

Kami akan menggunakan penutup untuk memanipulasi DOM.

Fikirkan DOM sebagai pokok, mewakili semua cara dokumen laman web dapat dimanipulasi. Berbagai API (Interface Program Aplikasi) telah ditulis sehingga pengaturcara, menggunakan bahasa pilihan program mereka, dapat mengakses DOM dan mengedit, mengubah, menyusun semula, dan sebaliknya mengaturnya.

![Perwakilan pokok DOM](../images/dom-tree.png)

> Perwakilan DOM dan markup HTML yang merujuknya. Oleh [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

Dalam pelajaran ini, kami akan menyelesaikan projek terarium interaktif kami dengan membuat JavaScript yang akan membolehkan pengguna memanipulasi tanaman di halaman.

### Prasyarat

Anda harus mempunyai HTML dan CSS untuk terarium anda. Pada akhir pelajaran ini, anda akan dapat memindahkan tanaman ke dalam dan keluar dari terarium dengan menyeretnya.

### Tugas

Dalam folder terarium anda, buat fail baru yang disebut `script.js`. Import fail itu di bahagian `<head>`:

```html
	<script src="./script.js" defer></script>
```

> Catatan: gunakan `defer` ketika mengimpor file JavaScript eksternal ke dalam file html sehingga memungkinkan JavaScript dijalankan hanya setelah file HTML dimuat sepenuhnya. Anda juga boleh menggunakan atribut `async`, yang membolehkan skrip dijalankan semasa fail HTML dihuraikan, tetapi dalam kes kami, penting untuk memiliki elemen HTML sepenuhnya tersedia untuk menyeret sebelum kami membiarkan skrip seret dijalankan.
---

## Elemen DOM

Perkara pertama yang perlu anda lakukan ialah membuat rujukan pada elemen yang ingin anda manipulasi dalam DOM. Dalam kes kami, mereka adalah 14 tanaman yang sedang menunggu di bar sisi.

### Tugas

```html
dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
```

Apa yang berlaku di sini? Anda merujuk dokumen dan mencari melalui DOM untuk mencari elemen dengan Id tertentu. Masih ingat pada pelajaran pertama mengenai HTML bahawa anda memberikan Id individu untuk setiap gambar tumbuhan (`id=" plant1"`)? Sekarang anda akan menggunakan usaha itu. Setelah mengenal pasti setiap elemen, anda meneruskan item tersebut ke fungsi yang disebut `dragElement` yang akan anda bina dalam satu minit. Oleh itu, elemen dalam HTML kini diaktifkan seret, atau tidak lama lagi.

✅ Mengapakah kita merujuk elemen dengan Id? Mengapa tidak oleh kelas CSS mereka? Anda mungkin merujuk kepada pelajaran CSS sebelumnya untuk menjawab soalan ini.

---

## Penutupan

Sekarang anda sudah bersedia untuk membuat penutupan dragElement, yang merupakan fungsi luar yang merangkumi fungsi atau fungsi dalaman (dalam kes kita, kita akan mempunyai tiga).

Penutupan berguna apabila satu atau lebih fungsi perlu memasuki ruang lingkup fungsi luar. Inilah contohnya:

```javascript
function displayCandy(){
	let candy = ['jellybeans'];
	function addCandy(candyType) {
		candy.push(candyType)
	}
	addCandy('gumdrops');
}
displayCandy();
console.log(candy)
```

Dalam contoh ini, fungsi displayCandy mengelilingi fungsi yang mendorong jenis permen baru ke dalam array yang sudah ada dalam fungsi tersebut. Sekiranya anda menjalankan kod ini, array `candy` tidak akan ditentukan, kerana ini adalah pemboleh ubah tempatan (tempatan hingga penutupan).

✅ Bagaimanakah anda boleh membuat array `candy` dapat diakses? Cuba gerakkannya di luar penutup. Dengan cara ini, susunan menjadi global, dan bukannya hanya tersedia untuk skop tempatan penutupan.

### Tugas

Di bawah deklarasi elemen dalam `script.js`, buat fungsi:

```javascript
function dragElement(terrariumElement) {
	//tetapkan 4 kedudukan untuk penentuan kedudukan di skrin
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
}
```

`dragElement` dapatkan objek` terrariumElement` dari pernyataan di bahagian atas skrip. Kemudian, anda menetapkan beberapa kedudukan tempatan pada `0` untuk objek yang dilewatkan ke dalam fungsi. Ini adalah pemboleh ubah tempatan yang akan dimanipulasi untuk setiap elemen semasa anda menambahkan fungsi seret dan lepas dalam penutupan ke setiap elemen. Terarium akan dihuni oleh unsur-unsur yang diseret ini, jadi aplikasinya perlu memantau lokasi mereka ditempatkan.

Selain itu, elemen terarium yang diteruskan ke fungsi ini diberikan acara `pointerdown`, yang merupakan sebahagian dari [web API](https://developer.mozilla.org/docs/Web/API) yang dirancang untuk membantu pengurusan DOM. `onpointerdown` menyala apabila butang ditekan, atau dalam kes kita, elemen yang boleh diseret disentuh. Pengendali acara ini berfungsi pada [penyemak imbas web dan mudah alih](https://caniuse.com/?search=onpointerdown), dengan beberapa pengecualian.

✅ [Pengendali acara (event handler) `onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) mempunyai sokongan penyemak imbas yang lebih banyak; mengapa anda tidak menggunakannya di sini? Fikirkan jenis interaksi skrin yang tepat yang ingin anda buat di sini.

---

## Fungsi Pointerdrag

TerariumElement siap diseret; apabila peristiwa `onpointerdown` dipecat, fungsi pointerDrag dipanggil. Tambahkan fungsi itu tepat di bawah baris ini: `terrariumElement.onpointerdown = pointerDrag;`:

### Tugas

```javascript
function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;
}
```

Beberapa perkara berlaku. Pertama, anda mencegah kejadian lalai yang biasanya berlaku pada pointerdown tidak berlaku dengan menggunakan `e.preventDefault ();`. Dengan cara ini anda mempunyai lebih banyak kawalan terhadap tingkah laku antara muka.

> Kembali ke baris ini apabila anda telah membina fail skrip sepenuhnya dan mencubanya tanpa `e.preventDefault ()` - apa yang berlaku?

Kedua, buka `index.html` di tetingkap penyemak imbas, dan periksa antara muka. Apabila anda mengklik kilang, anda dapat melihat bagaimana peristiwa 'e' ditangkap. Gali acara untuk melihat berapa banyak maklumat yang dikumpulkan oleh satu acara penunjuk ke bawah!

Seterusnya, perhatikan bagaimana pemboleh ubah tempatan `pos3` dan` pos4` ditetapkan ke e.clientX. Anda boleh mendapatkan nilai `e` di panel pemeriksaan. Nilai-nilai ini menangkap koordinat x dan y loji pada saat anda mengklik atau menyentuhnya. Anda memerlukan kawalan yang terperinci terhadap tingkah laku tanaman semasa anda mengklik dan menyeretnya, jadi anda terus mengawasi koordinatnya.

✅ Adakah semakin jelas mengapa keseluruhan aplikasi ini dibina dengan satu penutupan besar? Sekiranya tidak, bagaimana anda mengekalkan ruang lingkup bagi setiap 14 tumbuhan yang boleh diseret?

Selesaikan fungsi awal dengan menambahkan dua lagi manipulasi peristiwa penunjuk di bawah `pos4 = e.clientY`:

```html
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```
Sekarang anda menunjukkan bahawa anda mahu kilang diseret bersama-sama dengan penunjuk semasa anda menggerakkannya, dan agar gerakan seret berhenti ketika anda membatalkan pilihan kilang. `onpointermove` dan` onpointerup` adalah semua bahagian dari API yang sama dengan `onpointerdown`. Antaramuka akan membuang ralat sekarang kerana anda belum menentukan fungsi `elementDrag` dan` stopElementDrag`, jadi bina yang seterusnya.

## Fungsi elementDrag dan stopElementDrag

Anda akan menyelesaikan penutupan anda dengan menambahkan dua fungsi dalaman yang akan menangani apa yang berlaku semasa anda menyeret kilang dan berhenti menyeretnya. Tingkah laku yang anda mahukan ialah anda boleh menyeret mana-mana tanaman pada bila-bila masa dan meletakkannya di mana sahaja di skrin. Antaramuka ini agak tidak diingini (tidak ada zon penurunan) untuk membolehkan anda merancang terarium anda dengan tepat seperti yang anda suka dengan menambah, membuang, dan memasang semula tanaman.

### Tugas

Tambahkan fungsi `elementDrag` tepat setelah pendakap keriting penutup` pointerDrag`:

```javascript
function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
	terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
}
```
Dalam fungsi ini, anda melakukan banyak pengeditan pada posisi awal 1-4 yang anda tetapkan sebagai pemboleh ubah tempatan dalam fungsi luar. Apa yang berlaku di sini?

Semasa anda menyeret, anda menetapkan semula `pos1` dengan menjadikannya sama dengan` pos3` (yang anda tetapkan lebih awal sebagai `e.clientX`) tolak nilai `e.clientX` semasa. Anda melakukan operasi yang serupa dengan `pos2`. Kemudian, anda menetapkan semula `pos3` dan `pos4` ke koordinat X dan Y elemen yang baru. Anda boleh melihat perubahan ini di konsol semasa anda menyeret. Kemudian, anda memanipulasi gaya css kilang untuk menetapkan kedudukan barunya berdasarkan kedudukan baru `pos1` dan` pos2`, mengira koordinat X dan Y bahagian atas dan kiri kilang berdasarkan membandingkan ofsetnya dengan kedudukan baru ini.

> `offsetTop` dan` offsetLeft` adalah sifat CSS yang menetapkan kedudukan elemen berdasarkan kedudukan induknya; induknya boleh menjadi unsur apa pun yang tidak diposisikan sebagai `statik`.

Semua pengiraan semula kedudukan ini membolehkan anda menyesuaikan tingkah laku terarium dan tanamannya.

### Tugas

Tugas terakhir untuk melengkapkan antara muka adalah dengan menambahkan fungsi `stopElementDrag` setelah pendakap keriting` elementDrag`:

```javascript
function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
```

Fungsi kecil ini menetapkan semula peristiwa `onpointerup` dan `onpointermove` sehingga anda dapat memulakan semula kemajuan tanaman anda dengan mula menyeretnya lagi, atau mula menyeret loji baru.

✅ Apakah yang berlaku jika anda tidak menetapkan peristiwa ini menjadi null?

Sekarang anda telah menyelesaikan projek anda!

🥇 Tahniah! Anda telah menyelesaikan terarium yang indah. ![terarium selesai](../images/terrarium-final.png)

---

## 🚀Cabaran

Tambahkan pengendali acara (event handler) baharu ke penutupan anda untuk melakukan sesuatu yang lebih banyak pada tanaman; contohnya, klik dua kali loji untuk membawanya ke hadapan. Dapatkan kreatif!

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/20)

## Mengkaji & Belajar Sendiri

Walaupun menyeret elemen di sekitar skrin kelihatan remeh, ada banyak cara untuk melakukan ini dan banyak perangkap, bergantung pada kesan yang anda cari. Sebenarnya, terdapat keseluruhan [drag and drop API] (https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) yang boleh anda cuba. Kami tidak menggunakannya dalam modul ini kerana kesan yang kami mahukan agak berbeza, tetapi cuba API ini pada projek anda sendiri dan lihat apa yang boleh anda capai.

Dapatkan lebih banyak maklumat mengenai peristiwa penunjuk pada [dokumen W3C](https://www.w3.org/TR/pointerevents1/) dan di [dokumen web MDN](https://developer.mozilla.org/ dokumen / Web / API / Pointer_events).

Sentiasa periksa keupayaan penyemak imbas menggunakan [CanIUse.com](https://caniuse.com/).

## Tugasan

[Bekerja sedikit dengan DOM](assignment.ms.md)