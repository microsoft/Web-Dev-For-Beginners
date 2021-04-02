# Projek Terrarium Bahagian 1: Pengenalan Kepada HTML

![Pengenalan Kepada HTML](/sketchnotes/webdev101-html.png)
> Sketchnote karya [Tomomi Imura](https://twitter.com/girlie_mac)

## Kuiz Pra Kuliah

[Kuiz Pra Kuliah](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/15)

### Pengenalan

HTML, atau HyperText Markup Language, adalah 'kerangka' web. Sekiranya CSS 'mendandan' HTML dan JavaScript anda menghidupkannya, HTML adalah badan aplikasi web anda. Sintaks HTML bahkan menggambarkan idea itu, kerana ia merangkumi tag "kepala", "badan", dan "footer".

Dalam pelajaran ini, kita akan menggunakan HTML untuk menyusun 'kerangka' antara muka terarium maya kita. Ini akan mempunyai tajuk dan tiga lajur: lajur kanan dan kiri di mana tumbuhan yang boleh diseret hidup, dan kawasan tengah yang akan menjadi terarium yang kelihatan kaca. Pada akhir pelajaran ini, anda akan dapat melihat tanaman di lajur, tetapi antara muka akan kelihatan sedikit pelik; jangan risau, di bahagian seterusnya anda akan menambahkan gaya CSS ke antara muka untuk menjadikannya lebih baik.

### Tugas

Pada komputer anda, buat folder bernama 'terrarium' dan di dalamnya, fail yang bernama 'index.html' Anda boleh melakukannya dalam Visual Studio Code setelah membuat folder terarium anda dengan membuka tetingkap VS Code baru, mengklik 'buka folder', dan menavigasi ke folder baru anda. Klik butang 'fail' kecil di panel Explorer dan buat fail baru:

![explorer dalam VS Code](../images/vs-code-index.png)

Atau

Gunakan arahan ini dalam git bash anda:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` atau `nano index.html`

> index.html fail menunjukkan kepada penyemak imbas bahawa ia adalah fail lalai dalam folder; URL seperti `https: // anysite.com / test` mungkin dibina menggunakan struktur folder termasuk folder yang disebut `test` dengan `index.html` di dalamnya; `index.html` tidak perlu dipaparkan dalam URL.

---

## Tag DocType dan html

Baris pertama fail HTML adalah doctype. Agak mengejutkan bahawa anda perlu mempunyai baris ini di bahagian paling atas fail, tetapi ia memberitahu penyemak imbas lama bahawa penyemak imbas perlu membuat halaman dalam mod standard, mengikuti spesifikasi html semasa.

> Tip: dalam Kod VS, anda boleh mengarahkan kursor ke atas teg dan mendapatkan maklumat mengenai penggunaannya dari panduan Rujukan MDN.

Baris kedua harus berupa tag pembuka tag `<html>`, diikuti sekarang oleh tag penutupnya `</html>`. Tag ini adalah elemen asas antara interface anda.

### Tugas

Tambahkan baris ini di bahagian atas fail `index.html` anda:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ Terdapat beberapa mod berbeza yang dapat ditentukan dengan menetapkan Jenis Dokumen dengan rentetan pertanyaan: [Mod Quirks dan Mod Piawai](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode) . Mod ini digunakan untuk menyokong penyemak imbas lama yang tidak biasa digunakan pada masa ini (Netscape Navigator 4 dan Internet Explorer 5). Anda boleh berpegang pada pernyataan standard documentype.

---

## Dokumen 'head'

Kawasan 'head' dokumen HTML merangkumi maklumat penting mengenai laman web anda, juga dikenali sebagai [metadata](https://developer.mozilla.org/docs/Web/HTML/Element/meta). Dalam kes kami, kami memberitahu pelayan web tempat halaman ini akan dihantar untuk diberikan, empat perkara berikut:

- tajuk halaman
- metadata halaman termasuk:
    - 'set watak', menceritakan tentang pengekodan watak apa yang digunakan di halaman
    - maklumat penyemak imbas, termasuk `x-ua-compatible` yang menunjukkan bahawa penyemak imbas tepi IE = disokong
    - maklumat tentang bagaimana tingkah laku pandangan harus berkelakuan ketika dimuat. Menetapkan viewport untuk mempunyai skala awal 1 mengawal tahap zoom ketika halaman pertama kali dimuat.

### Tugas

Tambahkan blok 'head' ke dokumen anda di antara tag pembuka dan penutup `<html>`.

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ Apa yang akan berlaku jika anda menetapkan tag meta viewport seperti ini: `<meta name =" viewport "content =" width = 600 ">`? Baca lebih lanjut mengenai [viewport](https://developer.mozilla.org/docs/Mozilla/Mobile/Viewport_meta_tag).

---

## Dokumen 'body'

### Tag HTML

Dalam HTML, anda menambahkan tag ke fail .html anda untuk membuat elemen halaman web. Setiap tag biasanya memiliki tag pembuka dan penutup, seperti ini: `<p>hello</p>` untuk menunjukkan perenggan. Buat badan antara muka anda dengan menambahkan satu set tag `<body>` di dalam pasangan tag `<html>`; markup anda sekarang kelihatan seperti ini:

### Tugas

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

Sekarang, anda boleh mula membina halaman anda. Biasanya, anda menggunakan tag `<div>` untuk membuat elemen yang terpisah dalam halaman. Kami akan membuat rangkaian elemen `<div>` yang akan mengandungi gambar.

### Gambar

Satu tag html yang tidak memerlukan tag penutup adalah tag `<img>`, kerana ia memiliki elemen `src` yang berisi semua informasi yang diperlukan halaman untuk membuat item.

Buat folder di aplikasi anda yang disebut `gambar` dan di dalamnya, tambahkan semua gambar di [folder kod sumber](../solution/images); (terdapat 14 gambar tumbuhan).

### Tugas

Tambahkan gambar tanaman tersebut ke dalam dua lajur di antara tag `<body></body>`:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> Catatan: Spans vs Divs. Divs dianggap sebagai elemen 'blok', dan Spans adalah 'sebaris'. Apa yang akan berlaku sekiranya anda mengubah div ini menjadi spans?

Dengan penanda ini, tanaman kini muncul di skrin. Ia kelihatan sangat buruk, kerana mereka belum digayakan menggunakan CSS, dan kami akan melakukannya pada pelajaran seterusnya.

Setiap gambar mempunyai teks alt yang akan muncul walaupun Anda tidak dapat melihat atau membuat gambar. Ini adalah sifat penting untuk disertakan untuk aksesibilitas. Ketahui lebih lanjut mengenai kebolehcapaian dalam pelajaran akan datang; buat masa ini, ingat bahawa atribut alt memberikan maklumat alternatif untuk gambar jika pengguna untuk beberapa sebab tidak dapat melihatnya (kerana sambungan lambat, kesalahan pada atribut src, atau jika pengguna menggunakan pembaca layar).

✅ Adakah anda perhatikan bahawa setiap gambar mempunyai tag alt yang sama? Adakah ini amalan yang baik? Mengapa atau mengapa tidak? Bolehkah anda memperbaiki kod ini?

---

## Markup semantik

Secara amnya, lebih baik menggunakan 'semantik' yang bermakna semasa menulis HTML. Apa maksudnya? Ini bermaksud bahawa anda menggunakan tag HTML untuk mewakili jenis data atau interaksi yang dirancang untuknya. Sebagai contoh, teks tajuk utama pada halaman harus menggunakan tag `<h1>`.

Tambahkan baris berikut tepat di bawah tag `<body>` pembuka anda:

```html
<h1>My Terrarium</h1>
```

Menggunakan markup semantik seperti header menjadi `<h1>` dan senarai yang tidak disusun akan diberikan sebagai `<ul>` membantu pembaca skrin menavigasi halaman. Secara umum, butang harus ditulis sebagai `<button>` dan senarai harus `<li>`. Walaupun _mungkin_ menggunakan elemen `<span>` yang digayakan khas dengan pengendali klik untuk mengekang butang, lebih baik pengguna kurang upaya menggunakan teknologi untuk menentukan di mana halaman terdapat butang, dan berinteraksi dengannya, jika elemen tersebut muncul sebagai butang. Atas sebab ini, cuba gunakan penanda semantik sebanyak mungkin.

✅ Lihatlah pembaca skrin dan [bagaimanakah ia berinteraksi dengan laman web](https://www.youtube.com/watch?v=OUDV1gqs9GA). Bolehkah anda melihat mengapa mempunyai penanda bukan semantik boleh membuat pengguna kecewa?

## Terrarium

Bahagian terakhir antara muka ini melibatkan membuat markup yang akan digayakan untuk membuat terarium.

### Tugas

Tambahkan markup ini di atas tag `</div>` terakhir:

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

✅ Walaupun anda menambahkan markup ini ke skrin, anda tidak dapat melihat apa-apa. Kenapa?

---

## 🚀Cabaran

Terdapat beberapa tag 'lawas' liar dalam HTML yang masih menyeronokkan untuk dimainkan, walaupun anda tidak boleh menggunakan tag yang tidak digunakan seperti [tag ini](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) dalam markup anda. Masih bolehkah anda menggunakan tag `<marquee>` lama untuk menjadikan tajuk h1 menatal secara mendatar? (jika anda melakukannya, jangan lupa membuangnya selepas itu)

## Kuiz Pasca Kuliah

[Kuiz Pasca Kuliah](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/16)

## Mengkaji dan Belajar Sendiri

HTML adalah sistem blok bangunan 'cuba dan benar' yang telah membantu membina web menjadi seperti sekarang. Ketahui sedikit mengenai sejarahnya dengan mempelajari beberapa tanda lama dan baru. Bolehkah anda mengetahui mengapa beberapa teg tidak digunakan lagi dan ada yang ditambahkan? Tag apa yang mungkin diperkenalkan pada masa akan datang?

Ketahui lebih lanjut mengenai membina laman web dan peranti mudah alih di [Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=cxaall-4621-cxall).

## Tugasan

[Berlatih HTML anda: Bina mockup blog](assignment.ms.md)