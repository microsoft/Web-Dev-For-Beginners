# Tingkatkan Routing

## Instruksi

Setelah Anda membangun sistem routing dasar, sekarang saatnya untuk meningkatkannya dengan fitur profesional yang meningkatkan pengalaman pengguna dan menyediakan alat yang lebih baik bagi pengembang. Aplikasi dunia nyata membutuhkan lebih dari sekadar pengalihan template – mereka memerlukan judul halaman dinamis, lifecycle hooks, dan arsitektur yang dapat diperluas.

Dalam tugas ini, Anda akan memperluas implementasi routing Anda dengan dua fitur penting yang biasanya ditemukan dalam aplikasi web produksi. Peningkatan ini akan membuat aplikasi perbankan Anda terasa lebih profesional dan memberikan dasar untuk fungsionalitas di masa depan.

Deklarasi rute saat ini hanya berisi ID template yang akan digunakan. Namun, saat menampilkan halaman baru, terkadang diperlukan lebih banyak hal. Mari kita tingkatkan implementasi routing kita dengan dua fitur tambahan:

### Fitur 1: Judul Halaman Dinamis
**Tujuan:** Berikan judul untuk setiap template dan perbarui judul jendela dengan judul baru ini saat template berubah.

**Mengapa ini penting:**
- **Meningkatkan** pengalaman pengguna dengan menampilkan judul tab browser yang deskriptif
- **Memperkuat** aksesibilitas untuk pembaca layar dan teknologi bantu  
- **Memberikan** konteks yang lebih baik untuk penandaan dan riwayat browser
- **Mengikuti** praktik terbaik pengembangan web profesional

**Pendekatan implementasi:**
- **Perluas** objek rute untuk menyertakan informasi judul untuk setiap rute
- **Modifikasi** fungsi `updateRoute()` untuk memperbarui `document.title` secara dinamis
- **Uji** bahwa judul berubah dengan benar saat berpindah antar layar

### Fitur 2: Lifecycle Hooks Rute  
**Tujuan:** Tambahkan opsi untuk menjalankan beberapa kode setelah template berubah. Kami ingin mencetak `'Dashboard is shown'` di konsol pengembang setiap kali halaman dashboard ditampilkan.

**Mengapa ini penting:**
- **Memungkinkan** eksekusi logika khusus saat rute tertentu dimuat
- **Menyediakan** hooks untuk analitik, pencatatan, atau kode inisialisasi
- **Menciptakan** dasar untuk perilaku rute yang lebih kompleks
- **Menunjukkan** pola observer dalam pengembangan web

**Pendekatan implementasi:**
- **Tambahkan** properti fungsi callback opsional ke konfigurasi rute
- **Eksekusi** fungsi callback (jika ada) setelah rendering template selesai
- **Pastikan** fitur ini berfungsi untuk setiap rute dengan callback yang telah didefinisikan
- **Uji** bahwa pesan konsol muncul saat mengunjungi dashboard

## Rubrik

| Kriteria | Unggul                                                                                                                          | Memadai                                                                                                                                                                                  | Perlu Peningkatan                                       |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Kedua fitur diimplementasikan dan berfungsi. Judul dan penambahan kode juga berfungsi untuk rute baru yang ditambahkan dalam deklarasi `routes`. | Kedua fitur berfungsi, tetapi perilakunya hardcoded dan tidak dapat dikonfigurasi melalui deklarasi `routes`. Menambahkan rute ketiga dengan judul dan penambahan kode tidak berfungsi atau berfungsi sebagian. | Salah satu fitur hilang atau tidak berfungsi dengan baik. |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang timbul dari penggunaan terjemahan ini.