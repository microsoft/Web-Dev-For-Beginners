<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:17:50+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "id"
}
-->
***

# Menggunakan Editor Kode: Menguasai [VSCode.dev](https://vscode.dev)

**Selamat datang!**  
Pelajaran ini akan membawa Anda dari dasar hingga penggunaan tingkat lanjut [VSCode.dev](https://vscode.dev)—editor kode berbasis web yang kuat. Anda akan belajar cara mengedit kode dengan percaya diri, mengelola proyek, melacak perubahan, menginstal ekstensi, dan berkolaborasi seperti seorang profesional—semuanya langsung dari browser Anda, tanpa perlu instalasi.

***

## Tujuan Pembelajaran

Pada akhir pelajaran ini, Anda akan dapat:

- Menggunakan editor kode secara efisien untuk proyek apa pun, di mana saja
- Melacak pekerjaan Anda dengan kontrol versi bawaan
- Mempersonalisasi dan meningkatkan alur kerja pengembangan Anda dengan kustomisasi editor dan ekstensi

***

## Prasyarat

Untuk memulai, **daftar akun [GitHub](https://github.com) gratis**, yang memungkinkan Anda mengelola repositori kode dan berkolaborasi secara global. Jika Anda belum memiliki akun, [buat di sini](https://github.com/).

***

## Mengapa Menggunakan Editor Kode Berbasis Web?

**Editor kode** seperti VSCode.dev adalah pusat kendali Anda untuk menulis, mengedit, dan mengelola kode. Dengan antarmuka yang intuitif, banyak fitur, dan akses langsung melalui browser, Anda dapat:

- Mengedit proyek di perangkat apa pun
- Menghindari kerumitan instalasi
- Berkolaborasi dan berkontribusi secara instan

Setelah Anda terbiasa dengan VSCode.dev, Anda akan siap menghadapi tugas coding dari mana saja, kapan saja.

***

## Memulai dengan VSCode.dev

Akses **[VSCode.dev](https://vscode.dev)**—tanpa instalasi, tanpa unduhan. Masuk dengan GitHub untuk membuka akses penuh, termasuk sinkronisasi pengaturan, ekstensi, dan repositori Anda. Jika diminta, hubungkan akun GitHub Anda.

Setelah dimuat, ruang kerja Anda akan terlihat seperti ini:

![Default VSCode.dev](../images/default-vscode-dev memiliki tiga bagian inti dari kiri ke kanan:
- **Activity bar:** Ikon seperti 🔎 (Pencarian), ⚙️ (Pengaturan), file, kontrol sumber, dll.
- **Sidebar:** Berubah konteks berdasarkan ikon activity bar yang dipilih (default ke *Explorer* untuk menampilkan file).
- **Area editor/kode:** Bagian terbesar di sebelah kanan—tempat Anda benar-benar mengedit dan melihat kode.

Klik ikon untuk menjelajahi fitur, tetapi kembali ke _Explorer_ untuk tetap berada di tempat Anda.

***

## Membuka Repositori GitHub

### Metode 1: Dari Editor

1. Pergi ke [VSCode.dev](https://vscode.dev). Klik **"Open Remote Repository."**

   ![Open remote repository](../../../../8-code-editor/images/open-remote-repository gunakan _Command Palette_ (Ctrl-Shift-P, atau Cmd-Shift-P di Mac).

   ![Palette Menu](../images/palette-menu.pngopen remote repository.”
   - Pilih opsi tersebut.
   - Tempelkan URL repo GitHub Anda (misalnya, `https://github.com/microsoft/Web-Dev-For-Beginners`) dan tekan Enter.

Jika berhasil, Anda akan melihat seluruh proyek dimuat dan siap untuk diedit!

***

### Metode 2: Langsung melalui URL

Ubah URL repo GitHub apa pun untuk langsung membukanya di VSCode.dev dengan mengganti `github.com` dengan `vscode.dev/github`.  
Contoh:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Fitur ini mempercepat akses cepat ke proyek APA PUN.

***

## Mengedit File dalam Proyek Anda

Setelah repo Anda terbuka, Anda dapat:

### 1. **Membuat File Baru**
- Di sidebar *Explorer*, navigasikan ke folder yang diinginkan atau gunakan root.
- Klik ikon _‘New file ...’_.
- Beri nama file Anda, tekan **Enter**, dan file Anda muncul seketika.

![Create a new file](../images/create-new-file 2. **Mengedit dan Menyimpan File**

- Klik pada file di *Explorer* untuk membukanya di area kode.
- Lakukan perubahan sesuai kebutuhan.
- VSCode.dev secara otomatis menyimpan perubahan Anda, tetapi Anda dapat menekan Ctrl+S untuk menyimpan secara manual.

![Edit a file](../images/edit-a-file.png. **Melacak & Melakukan Commit Perubahan dengan Kontrol Versi**

VSCode.dev memiliki kontrol versi **Git** terintegrasi!

- Klik ikon _'Source Control'_ untuk melihat semua perubahan yang dibuat.
- File dalam folder `Changes` menunjukkan penambahan (hijau) dan penghapusan (merah).  
  ![View changes](../images/working-tree.png perubahan dengan mengklik `+` di sebelah file untuk mempersiapkan commit.
- **Batalkan** perubahan yang tidak diinginkan dengan mengklik ikon undo.
- Ketik pesan commit yang jelas, lalu klik tanda centang untuk melakukan commit dan push.

Untuk kembali ke repositori Anda di GitHub, pilih menu hamburger di kiri atas.

![Stage & commit changes](../images/edit-vscode.dev Up dengan Ekstensi

Ekstensi memungkinkan Anda menambahkan bahasa, tema, debugger, dan alat produktivitas ke VSCode.dev—membuat hidup coding Anda lebih mudah dan menyenangkan.

### Menjelajahi dan Mengelola Ekstensi

- Klik ikon **Extensions** di activity bar.
- Cari ekstensi di kotak _'Search Extensions in Marketplace'_.

  ![Extension details](../images/extension-details:
  - **Installed**: Semua ekstensi yang telah Anda tambahkan
  - **Popular**: Favorit industri
  - **Recommended**: Disesuaikan dengan alur kerja Anda

  ![View extensions](

  

***

### 1. **Menginstal Ekstensi**

- Masukkan nama ekstensi di pencarian, klik, dan tinjau detailnya di editor.
- Tekan tombol **Install biru** di sidebar _atau_ di area kode utama.

  ![Install extensions](../images/install-extension 2. **Menyesuaikan Ekstensi**

- Temukan ekstensi yang telah diinstal.
- Klik ikon **Gear** → pilih _Extension Settings_ untuk menyesuaikan perilaku sesuai keinginan Anda.

  ![Modify extension settings](../images/extension-settings 3. **Mengelola Ekstensi**
Anda dapat:

- **Disable:** Mematikan sementara ekstensi sambil tetap mempertahankannya terinstal
- **Uninstall:** Menghapusnya secara permanen jika tidak lagi diperlukan

  Temukan ekstensi, tekan ikon Gear, dan pilih ‘Disable’ atau ‘Uninstall,’ atau gunakan tombol biru di area kode.

***

## Tugas

Uji kemampuan Anda: [Buat situs web resume menggunakan vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Eksplorasi Lebih Lanjut dan Belajar Mandiri

- Pelajari lebih dalam dengan [Dokumentasi Resmi VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Jelajahi fitur ruang kerja tingkat lanjut, pintasan keyboard, dan pengaturan.

***

**Sekarang Anda siap untuk coding, membuat, dan berkolaborasi—dari mana saja, di perangkat apa pun, menggunakan VSCode.dev!**

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.