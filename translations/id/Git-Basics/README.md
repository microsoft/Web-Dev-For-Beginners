## Dasar-dasar GIT untuk Pemula Web-Dev 👶

## Apa itu `Git`?
1. Git adalah sistem kontrol versi terdistribusi.
2. Seluruh basis kode dan riwayat tersedia di komputer setiap pengembang, yang memungkinkan pembuatan cabang dan penggabungan dengan mudah.
3. Digunakan sebagai Sistem Kontrol Versi (VCS) untuk melacak perubahan pada file komputer.

* Kontrol versi terdistribusi
* Mengkoordinasikan pekerjaan antara beberapa pengembang  
* Siapa yang membuat perubahan apa dan kapan
* Dapat kembali ke versi sebelumnya kapan saja
* Repositori lokal & jarak jauh

## KONSEP GIT
* Melacak riwayat kode
* Mengambil "snapshot" dari file Anda
* Anda memutuskan kapan mengambil snapshot dengan membuat "commit"
* Anda dapat mengunjungi snapshot kapan saja
* Anda dapat menyiapkan file sebelum melakukan commit

### Perbedaan Antara Git & GitHub

| Git | GitHub |
| ------- | ----------- |
| Git adalah perangkat lunak | GitHub adalah layanan cloud |
| Git diinstal secara lokal di sistem | GitHub dihosting di web |
| Ini adalah alat baris perintah | Ini adalah antarmuka pengguna grafis |
| Git dikelola oleh Linux | GitHub dikelola oleh Microsoft |
| Berfokus pada kontrol versi dan berbagi kode | Berfokus pada hosting kode sumber terpusat |
| Git berlisensi open-source | GitHub memiliki tier gratis dan tier berbayar |
| Git dirilis pada tahun 2005 | GitHub dirilis pada tahun 2008 |

## Instalasi GIT
* Linux (Debian)  
    `$sudo apt-get install git`
* Linux (Fedora)  
    `$sudo yum install git`
* [Unduh](http://git-scm.com/download/mac) untuk Mac  
* [Unduh](http://git-scm.com/download/win) untuk Windows  

### Langkah-langkah Proses Instalasi:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Lalu lanjutkan dengan Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Setelah Instalasi, Kita Perlu Mengonfigurasi Git Menggunakan Git Bash
1. `git config --global user.name 'NamaAnda'`
2. `git config --global user.email 'EmailAnda'`
___

## Perintah Git
___

### Mendapatkan & Membuat Proyek

| Perintah | Deskripsi |
| ------- | ----------- |
| `git init` | Menginisialisasi repositori Git lokal |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Membuat salinan lokal dari repositori jarak jauh |

### Snapshot Dasar

| Perintah | Deskripsi |
| ------- | ----------- |
| `git status` | Memeriksa status |
| `git add [file-name.txt]` | Menambahkan file ke area staging |
| `git add -A` | Menambahkan semua file baru dan yang diubah ke area staging |
| `git commit -m "[commit message]"` | Melakukan commit perubahan |
| `git rm -r [file-name.txt]` | Menghapus file (atau folder) |
| `git push` | Mengirimkan ke Repositori Jarak Jauh |
| `git pull` | Mengambil Perubahan Terbaru dari Repositori Jarak Jauh |

### Pembuatan Cabang & Penggabungan

| Perintah | Deskripsi |
| ------- | ----------- |
| `git branch` | Menampilkan daftar cabang (tanda bintang menunjukkan cabang saat ini) |
| `git branch -a` | Menampilkan semua cabang (lokal dan jarak jauh) |
| `git branch [branch name]` | Membuat cabang baru |
| `git branch -D [branch name]` | Menghapus cabang |
| `git push origin --delete [branch name]` | Menghapus cabang jarak jauh |
| `git checkout -b [branch name]` | Membuat cabang baru dan beralih ke cabang tersebut |
| `git checkout -b [branch name] origin/[branch name]` | Mengkloning cabang jarak jauh dan beralih ke cabang tersebut |
| `git branch -m [old branch name] [new branch name]` | Mengganti nama cabang lokal |
| `git checkout [branch name]` | Beralih ke cabang tertentu |
| `git checkout -` | Beralih ke cabang terakhir yang dipilih |
| `git checkout -- [file-name.txt]` | Membatalkan perubahan pada file |
| `git merge [branch name]` | Menggabungkan cabang ke cabang aktif |
| `git merge [source branch] [target branch]` | Menggabungkan cabang ke cabang target |
| `git stash` | Menyimpan perubahan di direktori kerja yang kotor |
| `git stash clear` | Menghapus semua entri yang disimpan |

### Berbagi & Memperbarui Proyek

| Perintah | Deskripsi |
| ------- | ----------- |
| `git push origin [branch name]` | Mengirimkan cabang ke repositori jarak jauh Anda |
| `git push -u origin [branch name]` | Mengirimkan perubahan ke repositori jarak jauh (dan mengingat cabang) |
| `git push` | Mengirimkan perubahan ke repositori jarak jauh (cabang yang diingat) |
| `git push origin --delete [branch name]` | Menghapus cabang jarak jauh |
| `git pull` | Memperbarui repositori lokal ke commit terbaru |
| `git pull origin [branch name]` | Mengambil perubahan dari repositori jarak jauh |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Menambahkan repositori jarak jauh |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Mengatur cabang asal repositori ke SSH |

### Inspeksi & Perbandingan

| Perintah | Deskripsi |
| ------- | ----------- |
| `git log` | Melihat perubahan |
| `git log --summary` | Melihat perubahan (detail) |
| `git log --oneline` | Melihat perubahan (singkat) |
| `git diff [source branch] [target branch]` | Melihat pratinjau perubahan sebelum penggabungan |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.