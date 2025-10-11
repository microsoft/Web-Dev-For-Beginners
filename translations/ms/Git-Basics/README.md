<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:56:33+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "ms"
}
-->
## Asas GIT untuk pemula web-dev👶

## Apa itu `Git`?
1. Git adalah sistem kawalan versi yang teragih.
2. Keseluruhan pangkalan kod dan sejarah tersedia di komputer setiap pembangun, 
   yang memudahkan proses cawangan dan penggabungan.
3. Ia digunakan sebagai Sistem Kawalan Versi (VCS) untuk menjejaki perubahan dalam fail komputer.

* Kawalan versi teragih
* Menyelaraskan kerja antara beberapa pembangun  
* Siapa yang membuat perubahan dan bila
* Kembali ke versi sebelumnya pada bila-bila masa
* Repositori tempatan & jauh

## KONSEP GIT
* Menjejaki sejarah kod
* Mengambil "snapshot" fail anda
* Anda menentukan bila untuk mengambil snapshot dengan membuat "commit"
* Anda boleh melawat mana-mana snapshot pada bila-bila masa
* Anda boleh menyusun fail sebelum membuat commit

### Perbezaan Antara Git & GitHub

| Git | GitHub |
| ------- | ----------- |
| Git adalah perisian | GitHub adalah perkhidmatan awan |
| Git dipasang secara tempatan pada sistem | GitHub dihoskan di web |
| Ia adalah alat baris perintah | Ia adalah antara muka pengguna grafik |
| Git diselenggara oleh Linux | GitHub diselenggara oleh Microsoft |
| Ia memberi tumpuan kepada kawalan versi dan perkongsian kod | Ia memberi tumpuan kepada hosting kod sumber berpusat |
| Git adalah sumber terbuka berlesen | GitHub termasuk tier percuma dan tier berbayar |
| Git dikeluarkan pada tahun 2005 | GitHub dikeluarkan pada tahun 2008 |

## Pemasangan GIT
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* [Muat turun](http://git-scm.com/download/mac) untuk Mac
* [Muat turun](http://git-scm.com/download/win) untuk Windows

### Langkah Proses Pemasangan:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Kemudian teruskan Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Selepas Pemasangan, kita perlu mengkonfigurasi git menggunakan git bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Perintah Git
___

### Mendapatkan & Membuat Projek

| Perintah | Penerangan |
| ------- | ----------- |
| `git init` | Memulakan repositori Git tempatan |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Membuat salinan tempatan repositori jauh |

### Snapshot Asas

| Perintah | Penerangan |
| ------- | ----------- |
| `git status` | Semak status |
| `git add [file-name.txt]` | Tambah fail ke kawasan staging |
| `git add -A` | Tambah semua fail baru dan yang diubah ke kawasan staging |
| `git commit -m "[commit message]"` | Commit perubahan |
| `git rm -r [file-name.txt]` | Buang fail (atau folder) |
| `git push` | Tolak ke repositori jauh |
| `git pull` | Tarik perubahan terkini dari repositori jauh |

### Cawangan & Penggabungan

| Perintah | Penerangan |
| ------- | ----------- |
| `git branch` | Senaraikan cawangan (asterisk menunjukkan cawangan semasa) |
| `git branch -a` | Senaraikan semua cawangan (tempatan dan jauh) |
| `git branch [branch name]` | Buat cawangan baru |
| `git branch -D [branch name]` | Padam cawangan |
| `git push origin --delete [branch name]` | Padam cawangan jauh |
| `git checkout -b [branch name]` | Buat cawangan baru dan beralih kepadanya |
| `git checkout -b [branch name] origin/[branch name]` | Klon cawangan jauh dan beralih kepadanya |
| `git branch -m [old branch name] [new branch name]` | Namakan semula cawangan tempatan |
| `git checkout [branch name]` | Beralih ke cawangan |
| `git checkout -` | Beralih ke cawangan terakhir yang diperiksa |
| `git checkout -- [file-name.txt]` | Buang perubahan pada fail |
| `git merge [branch name]` | Gabungkan cawangan ke cawangan aktif |
| `git merge [source branch] [target branch]` | Gabungkan cawangan ke cawangan sasaran |
| `git stash` | Simpan perubahan dalam direktori kerja yang kotor |
| `git stash clear` | Buang semua entri yang disimpan |

### Perkongsian & Kemas Kini Projek

| Perintah | Penerangan |
| ------- | ----------- |
| `git push origin [branch name]` | Tolak cawangan ke repositori jauh anda |
| `git push -u origin [branch name]` | Tolak perubahan ke repositori jauh (dan ingat cawangan) |
| `git push` | Tolak perubahan ke repositori jauh (cawangan yang diingati) |
| `git push origin --delete [branch name]` | Padam cawangan jauh |
| `git pull` | Kemas kini repositori tempatan ke commit terkini |
| `git pull origin [branch name]` | Tarik perubahan dari repositori jauh |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Tambah repositori jauh |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Tetapkan cawangan asal repositori ke SSH |

### Pemeriksaan & Perbandingan

| Perintah | Penerangan |
| ------- | ----------- |
| `git log` | Lihat perubahan |
| `git log --summary` | Lihat perubahan (terperinci) |
| `git log --oneline` | Lihat perubahan (ringkas) |
| `git diff [source branch] [target branch]` | Pratonton perubahan sebelum penggabungan |

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.