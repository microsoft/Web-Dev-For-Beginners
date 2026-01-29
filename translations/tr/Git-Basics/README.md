## Web Geliştirme Başlangıç Seviyesi için GIT Temelleri👶

## `Git` Nedir?
1. Git, dağıtılmış bir versiyon kontrol sistemidir.
2. Tüm kod tabanı ve geçmiş, her geliştiricinin bilgisayarında bulunur, bu da kolay dallanma ve birleştirme sağlar.
3. Bilgisayar dosyalarındaki değişiklikleri takip etmek için Versiyon Kontrol Sistemi (VCS) olarak kullanılır.

* Dağıtılmış versiyon kontrolü
* Birden fazla geliştirici arasında çalışmayı koordine eder  
* Kim, ne zaman, hangi değişiklikleri yaptı
* İstediğiniz zaman geri dönebilirsiniz
* Yerel ve uzak depolar

## GIT KAVRAMLARI
* Kod geçmişini takip eder
* Dosyalarınızın "anlık görüntülerini" alır
* "Commit" yaparak ne zaman anlık görüntü alacağınıza siz karar verirsiniz
* İstediğiniz zaman herhangi bir anlık görüntüyü ziyaret edebilirsiniz
* Commit yapmadan önce dosyaları sahneleyebilirsiniz

### Git ve GitHub Arasındaki Fark

| Git | GitHub |
| ------- | ----------- |
| Git bir yazılımdır | GitHub bir bulut hizmetidir |
| Git sistemde yerel olarak kurulur | GitHub web üzerinde barındırılır |
| Komut satırı aracıdır | Grafiksel bir kullanıcı arayüzüdür |
| Git Linux tarafından yönetilir | GitHub Microsoft tarafından yönetilir |
| Versiyon kontrolü ve kod paylaşımına odaklanır | Merkezi kaynak kod barındırmaya odaklanır |
| Git açık kaynak lisanslıdır | GitHub ücretsiz ve ücretli katmanlar içerir |
| Git 2005'te piyasaya sürüldü | GitHub 2008'de piyasaya sürüldü |

## GIT Kurulumu
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* Mac için [İndir](http://git-scm.com/download/mac)
* Windows için [İndir](http://git-scm.com/download/win)

### Kurulum Süreci Adımları:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. Ardından Devam Et > İleri > İleri > <b>Yükle</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### Kurulumdan Sonra Git'i Git Bash ile Yapılandırmamız Gerekiyor
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git Komutları
___

### Projeleri Alma ve Oluşturma

| Komut | Açıklama |
| ------- | ----------- |
| `git init` | Yerel bir Git deposu başlatır |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Uzak bir depoyu yerel olarak kopyalar |

### Temel Anlık Görüntüleme

| Komut | Açıklama |
| ------- | ----------- |
| `git status` | Durumu kontrol eder |
| `git add [file-name.txt]` | Bir dosyayı sahneleme alanına ekler |
| `git add -A` | Tüm yeni ve değiştirilmiş dosyaları sahneleme alanına ekler |
| `git commit -m "[commit message]"` | Değişiklikleri kaydeder |
| `git rm -r [file-name.txt]` | Bir dosyayı (veya klasörü) kaldırır |
| `git push` | Uzak depoya gönderir |
| `git pull` | Uzak depodan en son değişiklikleri çeker |

### Dallanma ve Birleştirme

| Komut | Açıklama |
| ------- | ----------- |
| `git branch` | Dalları listeler (yıldız işareti mevcut dalı gösterir) |
| `git branch -a` | Tüm dalları listeler (yerel ve uzak) |
| `git branch [branch name]` | Yeni bir dal oluşturur |
| `git branch -D [branch name]` | Bir dalı siler |
| `git push origin --delete [branch name]` | Uzak bir dalı siler |
| `git checkout -b [branch name]` | Yeni bir dal oluşturur ve ona geçiş yapar |
| `git checkout -b [branch name] origin/[branch name]` | Uzak bir dalı kopyalar ve ona geçiş yapar |
| `git branch -m [old branch name] [new branch name]` | Yerel bir dalı yeniden adlandırır |
| `git checkout [branch name]` | Bir dala geçiş yapar |
| `git checkout -` | Son kontrol edilen dala geçiş yapar |
| `git checkout -- [file-name.txt]` | Bir dosyadaki değişiklikleri iptal eder |
| `git merge [branch name]` | Bir dalı aktif dala birleştirir |
| `git merge [source branch] [target branch]` | Bir dalı hedef dala birleştirir |
| `git stash` | Kirli çalışma dizinindeki değişiklikleri saklar |
| `git stash clear` | Tüm saklanan girişleri kaldırır |

### Projeleri Paylaşma ve Güncelleme

| Komut | Açıklama |
| ------- | ----------- |
| `git push origin [branch name]` | Bir dalı uzak depoya gönderir |
| `git push -u origin [branch name]` | Değişiklikleri uzak depoya gönderir (ve dalı hatırlar) |
| `git push` | Değişiklikleri uzak depoya gönderir (hatırlanan dal) |
| `git push origin --delete [branch name]` | Uzak bir dalı siler |
| `git pull` | Yerel depoyu en son commit'e günceller |
| `git pull origin [branch name]` | Uzak depodan değişiklikleri çeker |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Uzak bir depo ekler |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Bir deponun origin dalını SSH olarak ayarlar |

### İnceleme ve Karşılaştırma

| Komut | Açıklama |
| ------- | ----------- |
| `git log` | Değişiklikleri görüntüler |
| `git log --summary` | Değişiklikleri ayrıntılı olarak görüntüler |
| `git log --oneline` | Değişiklikleri kısa bir şekilde görüntüler |
| `git diff [source branch] [target branch]` | Birleştirmeden önce değişiklikleri önizler |

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.