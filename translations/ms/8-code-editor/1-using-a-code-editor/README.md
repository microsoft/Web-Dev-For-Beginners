<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:20:44+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "ms"
}
-->
***

# Menggunakan Editor Kod: Menguasai [VSCode.dev](https://vscode.dev)

**Selamat Datang!**  
Pelajaran ini membawa anda dari asas hingga penggunaan lanjutan [VSCode.dev](https://vscode.dev)—editor kod berasaskan web yang hebat. Anda akan belajar cara mengedit kod dengan yakin, mengurus projek, menjejaki perubahan, memasang sambungan, dan bekerjasama seperti seorang profesional—semuanya dari pelayar anda, tanpa perlu pemasangan.

***

## Objektif Pembelajaran

Pada akhir pelajaran ini, anda akan dapat:

- Menggunakan editor kod dengan cekap untuk sebarang projek, di mana-mana sahaja
- Menjejaki kerja anda dengan lancar menggunakan kawalan versi terbina dalam
- Memperibadikan dan meningkatkan aliran kerja pembangunan anda dengan penyesuaian editor dan sambungan

***

## Prasyarat

Untuk bermula, **daftar untuk akaun [GitHub](https://github.com) percuma**, yang membolehkan anda mengurus repositori kod dan bekerjasama di seluruh dunia. Jika anda belum mempunyai akaun, [buat satu di sini](https://github.com/).

***

## Mengapa Menggunakan Editor Kod Berasaskan Web?

**Editor kod** seperti VSCode.dev adalah pusat kawalan anda untuk menulis, mengedit, dan mengurus kod. Dengan antara muka yang intuitif, pelbagai ciri, dan akses segera melalui pelayar, anda boleh:

- Mengedit projek pada mana-mana peranti
- Mengelakkan kerumitan pemasangan
- Bekerjasama dan menyumbang dengan segera

Setelah anda selesa dengan VSCode.dev, anda akan bersedia untuk menangani tugas pengekodan dari mana-mana sahaja, pada bila-bila masa.

***

## Bermula dengan VSCode.dev

Navigasi ke **[VSCode.dev](https://vscode.dev)**—tanpa pemasangan, tanpa muat turun. Log masuk dengan GitHub membuka akses penuh, termasuk penyelarasan tetapan, sambungan, dan repositori anda. Jika diminta, sambungkan akaun GitHub anda.

Selepas dimuatkan, ruang kerja anda akan kelihatan seperti ini:

![Default VSCode.dev](../images/default-vscode-dev mempunyai tiga bahagian utama dari kiri ke kanan:
- **Bar Aktiviti:** Ikon seperti 🔎 (Carian), ⚙️ (Tetapan), fail, kawalan sumber, dll.
- **Bar sisi:** Berubah konteks berdasarkan ikon bar aktiviti yang dipilih (lalai kepada *Explorer* untuk menunjukkan fail).
- **Kawasan editor/kod:** Bahagian terbesar di sebelah kanan—di mana anda akan mengedit dan melihat kod.

Klik ikon untuk meneroka ciri, tetapi kembali ke _Explorer_ untuk kekal di tempat anda.

***

## Membuka Repositori GitHub

### Kaedah 1: Dari Editor

1. Pergi ke [VSCode.dev](https://vscode.dev). Klik **"Open Remote Repository."**

   ![Open remote repository](../../../../8-code-editor/images/open-remote-repository gunakan _Command Palette_ (Ctrl-Shift-P, atau Cmd-Shift-P pada Mac).

   ![Palette Menu](../images/palette-menu.pngopen remote repository.”
   - Pilih pilihan tersebut.
   - Tampal URL repo GitHub anda (contoh: `https://github.com/microsoft/Web-Dev-For-Beginners`) dan tekan Enter.

Jika berjaya, anda akan melihat keseluruhan projek dimuatkan dan sedia untuk diedit!

***

### Kaedah 2: Segera melalui URL

Ubah mana-mana URL repo GitHub untuk dibuka terus dalam VSCode.dev dengan menggantikan `github.com` dengan `vscode.dev/github`.  
Contoh:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Ciri ini mempercepatkan akses pantas ke MANA-MANA projek.

***

## Mengedit Fail dalam Projek Anda

Setelah repo anda dibuka, anda boleh:

### 1. **Membuat Fail Baru**
- Dalam bar sisi *Explorer*, navigasi ke folder yang diingini atau gunakan root.
- Klik ikon _‘New file ...’_.
- Namakan fail anda, tekan **Enter**, dan fail anda akan muncul serta-merta.

![Create a new file](../images/create-new-file 2. **Edit dan Simpan Fail**

- Klik pada fail dalam *Explorer* untuk membukanya di kawasan kod.
- Lakukan perubahan yang diperlukan.
- VSCode.dev secara automatik menyimpan perubahan anda, tetapi anda boleh menekan Ctrl+S untuk menyimpan secara manual.

![Edit a file](../images/edit-a-file.png. **Jejak & Komit Perubahan dengan Kawalan Versi**

VSCode.dev mempunyai kawalan versi **Git** yang terintegrasi!

- Klik ikon _'Source Control'_ untuk melihat semua perubahan yang dibuat.
- Fail dalam folder `Changes` menunjukkan penambahan (hijau) dan penghapusan (merah).  
  ![View changes](../images/working-tree.png perubahan dengan mengklik `+` di sebelah fail untuk bersedia untuk komit.
- **Buang** perubahan yang tidak diingini dengan mengklik ikon undo.
- Taip mesej komit yang jelas, kemudian klik tanda semak untuk komit dan push.

Untuk kembali ke repositori anda di GitHub, pilih menu hamburger di bahagian atas kiri.

![Stage & commit changes](../images/edit-vscode.dev Up dengan Sambungan

Sambungan membolehkan anda menambah bahasa, tema, debugger, dan alat produktiviti ke VSCode.dev—menjadikan kehidupan pengekodan anda lebih mudah dan menyeronokkan.

### Melayari dan Mengurus Sambungan

- Klik ikon **Extensions** pada bar aktiviti.
- Cari sambungan dalam kotak _'Search Extensions in Marketplace'_.

  ![Extension details](../images/extension-details:
  - **Installed**: Semua sambungan yang telah anda tambahkan
  - **Popular**: Pilihan kegemaran industri
  - **Recommended**: Disesuaikan dengan aliran kerja anda

  ![View extensions](

  

***

### 1. **Pasang Sambungan**

- Masukkan nama sambungan dalam carian, klik padanya, dan semak butiran dalam editor.
- Tekan butang **Install biru** di bar sisi _atau_ di kawasan kod utama.

  ![Install extensions](../images/install-extension 2. **Sesuaikan Sambungan**

- Cari sambungan yang telah dipasang.
- Klik ikon **Gear** → pilih _Extension Settings_ untuk menyesuaikan tingkah laku mengikut kesukaan anda.

  ![Modify extension settings](../images/extension-settings 3. **Urus Sambungan**
Anda boleh:

- **Disable:** Matikan sementara sambungan sambil mengekalkannya dipasang
- **Uninstall:** Buang secara kekal jika tidak lagi diperlukan

  Cari sambungan, tekan ikon Gear, dan pilih ‘Disable’ atau ‘Uninstall,’ atau gunakan butang biru di kawasan kod.

***

## Tugasan

Uji kemahiran anda: [Buat laman web resume menggunakan vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Penjelajahan Lanjut dan Kajian Kendiri

- Selami lebih mendalam dengan [Dokumentasi Web VSCode rasmi](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Terokai ciri ruang kerja lanjutan, pintasan papan kekunci, dan tetapan.

***

**Kini anda bersedia untuk mengekod, mencipta, dan bekerjasama—dari mana-mana sahaja, pada mana-mana peranti, menggunakan VSCode.dev!**

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.