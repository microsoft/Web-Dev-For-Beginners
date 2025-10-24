<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2025-10-24T14:41:41+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "ms"
}
-->
# Reka Bentuk Permainan: Gunakan Corak Reka Bentuk

## Gambaran Tugasan

Gunakan pengetahuan baru anda tentang corak reka bentuk dengan mencipta prototaip permainan mudah! Tugasan ini akan membantu anda mempraktikkan kedua-dua corak seni bina (pewarisan atau komposisi) dan sistem komunikasi pub/sub yang anda pelajari dalam pelajaran.

## Arahan

Cipta satu representasi permainan mudah yang menunjukkan corak reka bentuk daripada pelajaran ini. Permainan anda harus berfungsi tetapi tidak memerlukan grafik yang kompleks \u2013 fokus pada seni bina asas dan corak komunikasi.

### Keperluan

**Pilih Corak Seni Bina Anda:**
- **Pilihan A**: Gunakan pewarisan berasaskan kelas (seperti contoh `GameObject` → `Movable` → `Hero`)
- **Pilihan B**: Gunakan komposisi (seperti pendekatan fungsi kilang dengan tingkah laku campuran)

**Laksanakan Komunikasi:**
- **Sertakan** kelas `EventEmitter` untuk pemesejan pub/sub
- **Tetapkan** sekurang-kurangnya 2-3 jenis mesej yang berbeza (seperti `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Sambungkan** input pengguna (papan kekunci/tetikus) kepada acara permainan melalui sistem acara

**Elemen Permainan yang Perlu Disertakan:**
- Sekurang-kurangnya satu watak yang dikawal oleh pemain
- Sekurang-kurangnya satu objek permainan lain (musuh, item yang boleh dikumpul, atau elemen persekitaran)
- Interaksi asas antara objek (perlanggaran, pengumpulan, atau komunikasi)

### Idea Permainan yang Dicadangkan

**Permainan Mudah untuk Dipertimbangkan:**
- **Permainan Ular** \u2013 Segmen ular mengikuti kepala, makanan muncul secara rawak
- **Variasi Pong** \u2013 Paddle bertindak balas kepada input, bola melantun dari dinding
- **Permainan Pengumpul** \u2013 Pemain bergerak mengumpul item sambil mengelak halangan
- **Asas Pertahanan Menara** \u2013 Menara mengesan dan menembak musuh yang bergerak

### Garis Panduan Struktur Kod

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Uji Pelaksanaan Anda

**Pastikan kod anda berfungsi dengan:**
- **Menguji** bahawa objek bergerak atau berubah apabila acara dicetuskan
- **Mengesahkan** bahawa pelbagai objek boleh bertindak balas kepada acara yang sama
- **Memeriksa** bahawa anda boleh menambah tingkah laku baru tanpa mengubah kod sedia ada
- **Memastikan** input papan kekunci/tetikus mencetuskan acara permainan dengan betul

## Garis Panduan Penyerahan

**Penyerahan anda harus merangkumi:**
1. **Fail JavaScript** dengan pelaksanaan permainan anda
2. **Fail HTML** untuk menjalankan dan menguji permainan anda (boleh ringkas)
3. **Komen** yang menerangkan corak yang anda pilih dan sebabnya
4. **Dokumentasi ringkas** tentang jenis mesej anda dan apa yang mereka lakukan

## Rubrik

| Kriteria | Cemerlang (3 mata) | Memadai (2 mata) | Perlu Penambahbaikan (1 mata) |
|----------|---------------------|---------------------|------------------------------|
| **Corak Seni Bina** | Melaksanakan pewarisan ATAU komposisi dengan betul dengan hierarki kelas/objek yang jelas | Menggunakan corak yang dipilih dengan isu kecil atau ketidakkonsistenan | Mencuba menggunakan corak tetapi pelaksanaan mempunyai masalah besar |
| **Pelaksanaan Pub/Sub** | EventEmitter berfungsi dengan betul dengan pelbagai jenis mesej dan aliran acara yang sesuai | Sistem pub/sub asas berfungsi dengan beberapa pengendalian acara | Sistem acara hadir tetapi tidak berfungsi dengan baik |
| **Fungsi Permainan** | Tiga atau lebih elemen interaktif yang berkomunikasi melalui acara | Dua elemen interaktif dengan komunikasi acara asas | Satu elemen bertindak balas kepada acara atau interaksi asas |
| **Kualiti Kod** | Kod yang bersih, dikomen dengan baik, dengan organisasi logik dan JavaScript moden | Kod yang umumnya teratur dengan komen yang mencukupi | Kod berfungsi tetapi kurang organisasi atau komen yang jelas |

**Mata Bonus:**
- **Mekanisme permainan kreatif** yang menunjukkan penggunaan corak yang menarik
- **Kaedah input pelbagai** (acara papan kekunci DAN tetikus)
- **Seni bina yang boleh diskalakan** yang mudah diperluaskan dengan ciri baru

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.