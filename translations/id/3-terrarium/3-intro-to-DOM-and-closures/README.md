<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bc93f6285423033ebf5b8abeb5282888",
  "translation_date": "2025-10-24T14:07:08+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/README.md",
  "language_code": "id"
}
-->
# Proyek Terrarium Bagian 3: Manipulasi DOM dan Penutupan JavaScript

![DOM dan sebuah penutupan](../../../../translated_images/webdev101-js.10280393044d7eaaec7e847574946add7ddae6be2b2194567d848b61d849334a.id.png)
> Sketchnote oleh [Tomomi Imura](https://twitter.com/girlie_mac)

Selamat datang di salah satu aspek paling menarik dari pengembangan web - membuat sesuatu menjadi interaktif! Document Object Model (DOM) adalah seperti jembatan antara HTML dan JavaScript Anda, dan hari ini kita akan menggunakannya untuk menghidupkan terrarium Anda. Ketika Tim Berners-Lee menciptakan browser web pertama, dia membayangkan web sebagai tempat di mana dokumen bisa menjadi dinamis dan interaktif - DOM membuat visi itu menjadi mungkin.

Kita juga akan mengeksplorasi penutupan JavaScript, yang mungkin terdengar menakutkan pada awalnya. Anggaplah penutupan sebagai "kantong memori" di mana fungsi Anda dapat mengingat informasi penting. Ini seperti setiap tanaman di terrarium Anda memiliki catatan data sendiri untuk melacak posisinya. Pada akhir pelajaran ini, Anda akan memahami betapa alami dan bergunanya mereka.

Inilah yang akan kita buat: sebuah terrarium di mana pengguna dapat menyeret dan meletakkan tanaman di mana saja yang mereka inginkan. Anda akan mempelajari teknik manipulasi DOM yang mendukung segala sesuatu mulai dari unggahan file drag-and-drop hingga permainan interaktif. Mari kita hidupkan terrarium Anda.

## Kuis Pra-Kuliah

[Kuis pra-kuliah](https://ff-quizzes.netlify.app/web/quiz/19)

## Memahami DOM: Gerbang Anda ke Halaman Web Interaktif

Document Object Model (DOM) adalah cara JavaScript berkomunikasi dengan elemen-elemen HTML Anda. Ketika browser Anda memuat halaman HTML, ia menciptakan representasi terstruktur dari halaman tersebut dalam memori - itulah DOM. Anggaplah itu sebagai pohon keluarga di mana setiap elemen HTML adalah anggota keluarga yang dapat diakses, dimodifikasi, atau diatur ulang oleh JavaScript.

Manipulasi DOM mengubah halaman statis menjadi situs web interaktif. Setiap kali Anda melihat tombol berubah warna saat di-hover, konten diperbarui tanpa menyegarkan halaman, atau elemen yang dapat Anda seret, itu adalah hasil kerja manipulasi DOM.

![Representasi pohon DOM](../../../../translated_images/dom-tree.7daf0e763cbbba9273f9a66fe04c98276d7d23932309b195cb273a9cf1819b42.id.png)

> Sebuah representasi dari DOM dan markup HTML yang merujuk padanya. Dari [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

**Inilah yang membuat DOM begitu kuat:**
- **Memberikan** cara terstruktur untuk mengakses elemen apa pun di halaman Anda
- **Memungkinkan** pembaruan konten dinamis tanpa menyegarkan halaman
- **Merespons** interaksi pengguna secara real-time seperti klik dan seret
- **Menciptakan** fondasi untuk aplikasi web interaktif modern

## Penutupan JavaScript: Menciptakan Kode yang Terorganisir dan Kuat

[Penutupan JavaScript](https://developer.mozilla.org/docs/Web/JavaScript/Closures) adalah seperti memberikan fungsi ruang kerja pribadi dengan memori yang persisten. Pertimbangkan bagaimana burung finch Darwin di Kepulauan Galápagos masing-masing mengembangkan paruh khusus berdasarkan lingkungan mereka - penutupan bekerja dengan cara yang sama, menciptakan fungsi khusus yang "mengingat" konteks spesifik mereka bahkan setelah fungsi induknya selesai.

Dalam terrarium kita, penutupan membantu setiap tanaman mengingat posisinya sendiri secara independen. Pola ini muncul di seluruh pengembangan JavaScript profesional, menjadikannya konsep yang berharga untuk dipahami.

> 💡 **Memahami Penutupan**: Penutupan adalah topik penting dalam JavaScript, dan banyak pengembang menggunakannya selama bertahun-tahun sebelum sepenuhnya memahami semua aspek teoritisnya. Hari ini, kita akan fokus pada aplikasi praktis - Anda akan melihat penutupan muncul secara alami saat kita membangun fitur interaktif. Pemahaman akan berkembang seiring Anda melihat bagaimana mereka menyelesaikan masalah nyata.

![Representasi pohon DOM](../../../../translated_images/dom-tree.7daf0e763cbbba9273f9a66fe04c98276d7d23932309b195cb273a9cf1819b42.id.png)

> Sebuah representasi dari DOM dan markup HTML yang merujuk padanya. Dari [Olfa Nasraoui](https://www.researchgate.net/publication/221417012_Profile-Based_Focused_Crawler_for_Social_Media-Sharing_Websites)

Dalam pelajaran ini, kita akan menyelesaikan proyek terrarium interaktif kita dengan membuat JavaScript yang memungkinkan pengguna memanipulasi tanaman di halaman.

## Sebelum Kita Mulai: Persiapan untuk Sukses

Anda akan membutuhkan file HTML dan CSS dari pelajaran terrarium sebelumnya - kita akan membuat desain statis itu menjadi interaktif. Jika Anda baru bergabung, menyelesaikan pelajaran-pelajaran tersebut terlebih dahulu akan memberikan konteks penting.

Inilah yang akan kita buat:
- **Drag-and-drop yang mulus** untuk semua tanaman terrarium
- **Pelacakan koordinat** sehingga tanaman mengingat posisinya
- **Antarmuka interaktif lengkap** menggunakan JavaScript murni
- **Kode yang bersih dan terorganisir** menggunakan pola penutupan

## Menyiapkan File JavaScript Anda

Mari kita buat file JavaScript yang akan membuat terrarium Anda interaktif.

**Langkah 1: Buat file skrip Anda**

Di folder terrarium Anda, buat file baru bernama `script.js`.

**Langkah 2: Hubungkan JavaScript ke HTML Anda**

Tambahkan tag skrip ini ke bagian `<head>` dari file `index.html` Anda:

```html
<script src="./script.js" defer></script>
```

**Mengapa atribut `defer` penting:**
- **Memastikan** JavaScript Anda menunggu hingga semua HTML dimuat
- **Mencegah** kesalahan di mana JavaScript mencari elemen yang belum siap
- **Menjamin** semua elemen tanaman Anda tersedia untuk interaksi
- **Memberikan** kinerja yang lebih baik daripada meletakkan skrip di bagian bawah halaman

> ⚠️ **Catatan Penting**: Atribut `defer` mencegah masalah waktu yang umum. Tanpa itu, JavaScript mungkin mencoba mengakses elemen HTML sebelum mereka dimuat, yang menyebabkan kesalahan.

---

## Menghubungkan JavaScript ke Elemen HTML Anda

Sebelum kita bisa membuat elemen dapat diseret, JavaScript perlu menemukan mereka di DOM. Anggaplah ini seperti sistem katalog perpustakaan - setelah Anda memiliki nomor katalog, Anda dapat menemukan buku yang Anda butuhkan dan mengakses semua isinya.

Kita akan menggunakan metode `document.getElementById()` untuk membuat koneksi ini. Ini seperti memiliki sistem pengarsipan yang tepat - Anda memberikan ID, dan itu menemukan elemen yang Anda butuhkan di HTML Anda.

### Mengaktifkan Fungsionalitas Seret untuk Semua Tanaman

Tambahkan kode ini ke file `script.js` Anda:

```javascript
// Enable drag functionality for all 14 plants
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

**Inilah yang dicapai oleh kode ini:**
- **Menemukan** setiap elemen tanaman di DOM menggunakan ID uniknya
- **Mengambil** referensi JavaScript ke setiap elemen HTML
- **Melewatkan** setiap elemen ke fungsi `dragElement` (yang akan kita buat selanjutnya)
- **Mempersiapkan** setiap tanaman untuk interaksi drag-and-drop
- **Menghubungkan** struktur HTML Anda ke fungsionalitas JavaScript

> 🎯 **Mengapa Menggunakan ID Daripada Kelas?** ID memberikan pengidentifikasi unik untuk elemen tertentu, sementara kelas CSS dirancang untuk menata kelompok elemen. Ketika JavaScript perlu memanipulasi elemen individu, ID menawarkan presisi dan kinerja yang kita butuhkan.

> 💡 **Tip Profesional**: Perhatikan bagaimana kita memanggil `dragElement()` untuk setiap tanaman secara individual. Pendekatan ini memastikan bahwa setiap tanaman mendapatkan perilaku seret independen, yang penting untuk interaksi pengguna yang mulus.

---

## Membangun Penutupan Elemen Seret

Sekarang kita akan membuat inti dari fungsionalitas seret kita: sebuah penutupan yang mengelola perilaku seret untuk setiap tanaman. Penutupan ini akan berisi beberapa fungsi dalam yang bekerja sama untuk melacak gerakan mouse dan memperbarui posisi elemen.

Penutupan sangat cocok untuk tugas ini karena mereka memungkinkan kita membuat variabel "pribadi" yang bertahan antara panggilan fungsi, memberikan setiap tanaman sistem pelacakan koordinat independen.

### Memahami Penutupan dengan Contoh Sederhana

Izinkan saya mendemonstrasikan penutupan dengan contoh sederhana yang menggambarkan konsepnya:

```javascript
function createCounter() {
    let count = 0; // This is like a private variable
    
    function increment() {
        count++; // The inner function remembers the outer variable
        return count;
    }
    
    return increment; // We're giving back the inner function
}

const myCounter = createCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2
```

**Inilah yang terjadi dalam pola penutupan ini:**
- **Membuat** variabel `count` pribadi yang hanya ada dalam penutupan ini
- **Fungsi dalam** dapat mengakses dan memodifikasi variabel luar itu (mekanisme penutupan)
- **Ketika kita mengembalikan** fungsi dalam, itu mempertahankan koneksi ke data pribadi itu
- **Bahkan setelah** `createCounter()` selesai dieksekusi, `count` bertahan dan mengingat nilainya

### Mengapa Penutupan Sangat Cocok untuk Fungsionalitas Seret

Untuk terrarium kita, setiap tanaman perlu mengingat koordinat posisi saat ini. Penutupan memberikan solusi yang sempurna:

**Manfaat utama untuk proyek kita:**
- **Mempertahankan** variabel posisi pribadi untuk setiap tanaman secara independen
- **Melestarikan** data koordinat antara peristiwa seret
- **Mencegah** konflik variabel antara elemen yang dapat diseret
- **Menciptakan** struktur kode yang bersih dan terorganisir

> 🎯 **Tujuan Pembelajaran**: Anda tidak perlu menguasai setiap aspek penutupan sekarang. Fokuslah pada bagaimana mereka membantu kita mengorganisir kode dan mempertahankan status untuk fungsionalitas seret kita.

### Membuat Fungsi dragElement

Sekarang mari kita bangun fungsi utama yang akan menangani semua logika seret. Tambahkan fungsi ini di bawah deklarasi elemen tanaman Anda:

```javascript
function dragElement(terrariumElement) {
    // Initialize position tracking variables
    let pos1 = 0,  // Previous mouse X position
        pos2 = 0,  // Previous mouse Y position  
        pos3 = 0,  // Current mouse X position
        pos4 = 0;  // Current mouse Y position
    
    // Set up the initial drag event listener
    terrariumElement.onpointerdown = pointerDrag;
}
```

**Memahami sistem pelacakan posisi:**
- **`pos1` dan `pos2`**: Menyimpan perbedaan antara posisi mouse lama dan baru
- **`pos3` dan `pos4`**: Melacak koordinat mouse saat ini
- **`terrariumElement`**: Elemen tanaman spesifik yang kita buat dapat diseret
- **`onpointerdown`**: Peristiwa yang dipicu saat pengguna mulai menyeret

**Inilah cara kerja pola penutupan:**
- **Membuat** variabel posisi pribadi untuk setiap elemen tanaman
- **Mempertahankan** variabel ini sepanjang siklus seret
- **Memastikan** setiap tanaman melacak koordinatnya sendiri secara independen
- **Memberikan** antarmuka yang bersih melalui fungsi `dragElement`

### Mengapa Menggunakan Pointer Events?

Anda mungkin bertanya-tanya mengapa kita menggunakan `onpointerdown` daripada `onclick` yang lebih familiar. Berikut alasannya:

| Jenis Peristiwa | Terbaik Untuk | Kekurangannya |
|-----------------|---------------|---------------|
| `onclick` | Klik tombol sederhana | Tidak bisa menangani seret (hanya klik dan lepas) |
| `onpointerdown` | Mouse dan sentuhan | Lebih baru, tetapi sudah didukung dengan baik |
| `onmousedown` | Hanya mouse desktop | Tidak mendukung pengguna mobile |

**Mengapa pointer events sempurna untuk apa yang kita bangun:**
- **Berfungsi dengan baik** baik seseorang menggunakan mouse, jari, atau bahkan stylus
- **Terasa sama** di laptop, tablet, atau ponsel
- **Menangani** gerakan seret sebenarnya (bukan hanya klik-dan-selesai)
- **Menciptakan** pengalaman mulus yang diharapkan pengguna dari aplikasi web modern

> 💡 **Masa Depan**: Pointer events adalah cara modern untuk menangani interaksi pengguna. Alih-alih menulis kode terpisah untuk mouse dan sentuhan, Anda mendapatkan keduanya secara gratis. Cukup keren, bukan?

---

## Fungsi pointerDrag: Menangkap Awal Seret

Ketika pengguna menekan tanaman (baik dengan klik mouse atau sentuhan jari), fungsi `pointerDrag` mulai beraksi. Fungsi ini menangkap koordinat awal dan menyiapkan sistem seret.

Tambahkan fungsi ini di dalam penutupan `dragElement`, tepat setelah baris `terrariumElement.onpointerdown = pointerDrag;`:

```javascript
function pointerDrag(e) {
    // Prevent default browser behavior (like text selection)
    e.preventDefault();
    
    // Capture the initial mouse/touch position
    pos3 = e.clientX;  // X coordinate where drag started
    pos4 = e.clientY;  // Y coordinate where drag started
    
    // Set up event listeners for the dragging process
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}
```

**Langkah demi langkah, inilah yang terjadi:**
- **Mencegah** perilaku default browser yang dapat mengganggu seret
- **Mencatat** koordinat tepat di mana pengguna memulai gerakan seret
- **Menetapkan** pendengar peristiwa untuk gerakan seret yang sedang berlangsung
- **Mempersiapkan** sistem untuk melacak gerakan mouse/jari di seluruh dokumen

### Memahami Pencegahan Peristiwa

Baris `e.preventDefault()` sangat penting untuk seret yang mulus:

**Tanpa pencegahan, browser mungkin:**
- **Memilih** teks saat menyeret di halaman
- **Memicu** menu konteks pada klik kanan seret
- **Mengganggu** perilaku seret khusus kita
- **Menciptakan** artefak visual selama operasi seret

> 🔍 **Eksperimen**: Setelah menyelesaikan pelajaran ini, coba hapus `e.preventDefault()` dan lihat bagaimana pengaruhnya terhadap pengalaman seret. Anda akan segera memahami mengapa baris ini penting!

### Sistem Pelacakan Koordinat

Properti `e.clientX` dan `e.clientY` memberikan kita koordinat mouse/sentuhan yang tepat:

| Properti | Apa yang Diukur | Kasus Penggunaan |
|----------|-----------------|------------------|
| `clientX` | Posisi horizontal relatif terhadap viewport | Melacak gerakan kiri-kanan |
| `clientY` | Posisi vertikal relatif terhadap viewport | Melacak gerakan atas-bawah |

**Memahami koordinat ini:**
- **Memberikan** informasi posisi yang sangat akurat
- **Memperbarui** secara real-time saat pengguna menggerakkan penunjuk
- **Tetap** konsisten di berbagai ukuran layar dan tingkat zoom
- **Memungkinkan** interaksi seret yang mulus dan responsif

### Menyiapkan Pendengar Peristiwa Tingkat Dokumen

Perhatikan bagaimana kita melampirkan peristiwa gerakan dan berhenti ke seluruh `document`, bukan hanya elemen tanaman:

```javascript
document.onpointermove = elementDrag;
document.onpointerup = stopElementDrag;
```

**Mengapa melampirkan ke dokumen:**
- **Melanjutkan** pelacakan bahkan ketika mouse meninggalkan elemen tanaman
- **Mencegah** gangguan seret jika pengguna bergerak cepat
- **Memberikan** seret yang mulus di seluruh layar
- **Menangani** kasus tepi di mana kursor bergerak di luar jendela browser

> ⚡ **Catatan Kinerja**: Kita akan membersihkan pendengar tingkat dokumen ini saat seret berhenti untuk menghindari kebocoran memori dan masalah kinerja.

## Menyelesaikan Sistem Seret: Gerakan dan Pembersihan

Sekarang kita akan menambahkan dua fungsi yang tersisa yang menangani gerakan seret sebenarnya dan pembersihan saat seret berhenti. Fungsi-fungsi ini bekerja sama untuk menciptakan gerakan tanaman yang mulus dan responsif di seluruh terrarium Anda.

### Fungsi elementDrag: Melacak Gerakan

Tambahkan fungsi `elementDrag` tepat setelah kurung tutup dari `pointerDrag`:

```javascript
function elementDrag(e) {
    // Calculate the distance moved since the last event
    pos1 = pos3 - e.clientX;  // Horizontal distance moved
    pos2 = pos4 - e.clientY;  // Vertical distance moved
    
    // Update the current position tracking
    pos3 = e.clientX;  // New current X position
    pos4 = e.clientY;  // New current Y position
    
    // Apply the movement to the element's position
    terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
    terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
}
```

**Memahami matematika koordinat:**
- **`pos1` dan `pos2`**: Menghitung seberapa jauh mouse telah bergerak sejak pembaruan terakhir
- **`pos3` dan `pos4`**: Menyimpan posisi mouse saat ini untuk perhitungan berikutnya  
- **`offsetTop` dan `offsetLeft`**: Mendapatkan posisi elemen saat ini di halaman  
- **Logika pengurangan**: Memindahkan elemen sejauh pergerakan mouse  

**Berikut adalah rincian perhitungan pergerakan:**  
1. **Mengukur** perbedaan antara posisi mouse lama dan baru  
2. **Menghitung** seberapa jauh elemen harus dipindahkan berdasarkan pergerakan mouse  
3. **Memperbarui** properti posisi CSS elemen secara real-time  
4. **Menyimpan** posisi baru sebagai dasar untuk perhitungan pergerakan berikutnya  

### Representasi Visual dari Perhitungan

```mermaid
sequenceDiagram
    participant Mouse
    participant JavaScript
    participant Plant
    
    Mouse->>JavaScript: Move from (100,50) to (110,60)
    JavaScript->>JavaScript: Calculate: moved 10px right, 10px down
    JavaScript->>Plant: Update position by +10px right, +10px down
    Plant->>Plant: Render at new position
```
  
### Fungsi stopElementDrag: Membersihkan

Tambahkan fungsi pembersihan setelah tanda kurung kurawal penutup dari `elementDrag`:

```javascript
function stopElementDrag() {
    // Remove the document-level event listeners
    document.onpointerup = null;
    document.onpointermove = null;
}
```
  
**Mengapa pembersihan itu penting:**  
- **Mencegah** kebocoran memori dari event listener yang tertinggal  
- **Menghentikan** perilaku drag saat pengguna melepaskan tanaman  
- **Memungkinkan** elemen lain untuk di-drag secara independen  
- **Mereset** sistem untuk operasi drag berikutnya  

**Apa yang terjadi tanpa pembersihan:**  
- Event listener terus berjalan bahkan setelah drag berhenti  
- Performa menurun karena listener yang tidak digunakan menumpuk  
- Perilaku tak terduga saat berinteraksi dengan elemen lain  
- Sumber daya browser terbuang untuk penanganan event yang tidak diperlukan  

### Memahami Properti Posisi CSS

Sistem drag kita memanipulasi dua properti CSS utama:

| Properti | Apa yang Dikontrol | Cara Kita Menggunakannya |
|----------|--------------------|--------------------------|
| `top` | Jarak dari tepi atas | Posisi vertikal selama drag |
| `left` | Jarak dari tepi kiri | Posisi horizontal selama drag |

**Wawasan penting tentang properti offset:**  
- **`offsetTop`**: Jarak saat ini dari tepi atas elemen induk yang diposisikan  
- **`offsetLeft`**: Jarak saat ini dari tepi kiri elemen induk yang diposisikan  
- **Konteks posisi**: Nilai-nilai ini relatif terhadap elemen induk yang diposisikan terdekat  
- **Pembaruan real-time**: Berubah langsung saat kita memodifikasi properti CSS  

> 🎯 **Filosofi Desain**: Sistem drag ini sengaja fleksibel – tidak ada "zona drop" atau batasan. Pengguna dapat meletakkan tanaman di mana saja, memberikan kontrol kreatif penuh atas desain terrarium mereka.

## Menggabungkan Semua: Sistem Drag Lengkap Anda

Selamat! Anda baru saja membangun sistem drag-and-drop yang canggih menggunakan JavaScript murni. Fungsi `dragElement` lengkap Anda sekarang mengandung closure yang kuat yang mengelola:

**Apa yang dicapai oleh closure Anda:**  
- **Mempertahankan** variabel posisi privat untuk setiap tanaman secara independen  
- **Menangani** seluruh siklus drag dari awal hingga akhir  
- **Memberikan** pergerakan yang halus dan responsif di seluruh layar  
- **Membersihkan** sumber daya dengan benar untuk mencegah kebocoran memori  
- **Menciptakan** antarmuka intuitif dan kreatif untuk desain terrarium  

### Menguji Terrarium Interaktif Anda

Sekarang uji terrarium interaktif Anda! Buka file `index.html` Anda di browser web dan coba fungsionalitasnya:

1. **Klik dan tahan** tanaman apa saja untuk mulai drag  
2. **Gerakkan mouse atau jari Anda** dan lihat tanaman mengikuti dengan lancar  
3. **Lepaskan** untuk meletakkan tanaman di posisi barunya  
4. **Bereksperimenlah** dengan berbagai pengaturan untuk menjelajahi antarmuka  

🥇 **Pencapaian**: Anda telah menciptakan aplikasi web interaktif sepenuhnya menggunakan konsep inti yang digunakan oleh pengembang profesional setiap hari. Fungsionalitas drag-and-drop ini menggunakan prinsip yang sama di balik pengunggahan file, papan kanban, dan banyak antarmuka interaktif lainnya.

![terrarium selesai](../../../../translated_images/terrarium-final.0920f16e87c13a84cd2b553a5af9a3ad1cffbd41fbf8ce715d9e9c43809a5e2c.id.png)

---

## Tantangan GitHub Copilot Agent 🚀

Gunakan mode Agent untuk menyelesaikan tantangan berikut:

**Deskripsi:** Tingkatkan proyek terrarium dengan menambahkan fungsi reset yang mengembalikan semua tanaman ke posisi awal mereka dengan animasi yang halus.

**Prompt:** Buat tombol reset yang, saat diklik, mengembalikan semua tanaman ke posisi awal sidebar mereka dengan transisi CSS yang halus. Fungsi ini harus menyimpan posisi awal saat halaman dimuat dan secara halus memindahkan tanaman kembali ke posisi tersebut selama 1 detik saat tombol reset ditekan.

Pelajari lebih lanjut tentang [mode agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) di sini.

## 🚀 Tantangan Tambahan: Tingkatkan Keterampilan Anda

Siap membawa terrarium Anda ke tingkat berikutnya? Coba terapkan peningkatan ini:

**Ekstensi Kreatif:**  
- **Klik dua kali** pada tanaman untuk membawanya ke depan (manipulasi z-index)  
- **Tambahkan umpan balik visual** seperti cahaya halus saat melayang di atas tanaman  
- **Terapkan batasan** untuk mencegah tanaman di-drag keluar dari terrarium  
- **Buat fungsi simpan** yang mengingat posisi tanaman menggunakan localStorage  
- **Tambahkan efek suara** untuk mengambil dan meletakkan tanaman  

> 💡 **Peluang Belajar**: Setiap tantangan ini akan mengajarkan Anda aspek baru tentang manipulasi DOM, penanganan event, dan desain pengalaman pengguna.

## Kuis Pasca-Kuliah

[Kuis pasca-kuliah](https://ff-quizzes.netlify.app/web/quiz/20)

## Tinjauan & Studi Mandiri: Memperdalam Pemahaman Anda

Anda telah menguasai dasar-dasar manipulasi DOM dan closure, tetapi selalu ada lebih banyak hal untuk dipelajari! Berikut adalah beberapa jalur untuk memperluas pengetahuan dan keterampilan Anda.

### Pendekatan Drag and Drop Alternatif

Kami menggunakan pointer events untuk fleksibilitas maksimum, tetapi pengembangan web menawarkan beberapa pendekatan:

| Pendekatan | Terbaik Untuk | Nilai Pembelajaran |
|------------|---------------|--------------------|
| [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) | Pengunggahan file, zona drag formal | Memahami kemampuan bawaan browser |
| [Touch Events](https://developer.mozilla.org/docs/Web/API/Touch_events) | Interaksi khusus mobile | Pola pengembangan berbasis mobile |
| Properti CSS `transform` | Animasi yang halus | Teknik optimasi performa |

### Topik Manipulasi DOM Lanjutan

**Langkah berikutnya dalam perjalanan belajar Anda:**  
- **Delegasi event**: Menangani event secara efisien untuk banyak elemen  
- **Intersection Observer**: Mendeteksi saat elemen masuk/keluar dari viewport  
- **Mutation Observer**: Memantau perubahan dalam struktur DOM  
- **Komponen Web**: Membuat elemen UI yang dapat digunakan kembali dan terenkapsulasi  
- **Konsep Virtual DOM**: Memahami bagaimana framework mengoptimalkan pembaruan DOM  

### Sumber Daya Penting untuk Pembelajaran Lanjutan

**Dokumentasi Teknis:**  
- [Panduan MDN Pointer Events](https://developer.mozilla.org/docs/Web/API/Pointer_events) - Referensi lengkap pointer event  
- [Spesifikasi Pointer Events W3C](https://www.w3.org/TR/pointerevents1/) - Dokumentasi standar resmi  
- [Pendalaman JavaScript Closures](https://developer.mozilla.org/docs/Web/JavaScript/Closures) - Pola closure tingkat lanjut  

**Kompatibilitas Browser:**  
- [CanIUse.com](https://caniuse.com/) - Periksa dukungan fitur di berbagai browser  
- [Data Kompatibilitas Browser MDN](https://github.com/mdn/browser-compat-data) - Informasi kompatibilitas yang mendetail  

**Peluang Praktik:**  
- **Bangun** permainan puzzle menggunakan mekanik drag serupa  
- **Buat** papan kanban dengan manajemen tugas drag-and-drop  
- **Desain** galeri gambar dengan pengaturan foto yang dapat di-drag  
- **Bereksperimen** dengan gerakan sentuh untuk antarmuka mobile  

> 🎯 **Strategi Pembelajaran**: Cara terbaik untuk memperkuat konsep ini adalah melalui praktik. Cobalah membangun variasi antarmuka yang dapat di-drag – setiap proyek akan mengajarkan Anda sesuatu yang baru tentang interaksi pengguna dan manipulasi DOM.

## Tugas

[Bekerja lebih banyak dengan DOM](assignment.md)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.