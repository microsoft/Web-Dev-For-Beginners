<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8328f58f4593b4671656ff8f4b2edbd9",
  "translation_date": "2025-10-24T13:57:03+00:00",
  "source_file": "2-js-basics/2-functions-methods/assignment.md",
  "language_code": "id"
}
-->
# Bersenang-senang dengan Fungsi

## Instruksi

Dalam tugas ini, Anda akan berlatih membuat berbagai jenis fungsi untuk memperkuat konsep yang telah Anda pelajari tentang fungsi JavaScript, parameter, nilai default, dan pernyataan pengembalian.

Buat file JavaScript bernama `functions-practice.js` dan implementasikan fungsi-fungsi berikut:

### Bagian 1: Fungsi Dasar
1. **Buat fungsi bernama `sayHello`** yang tidak memiliki parameter dan hanya mencetak "Hello!" ke konsol.

2. **Buat fungsi bernama `introduceYourself`** yang menerima parameter `name` dan mencetak pesan seperti "Hi, nama saya [name]" ke konsol.

### Bagian 2: Fungsi dengan Parameter Default
3. **Buat fungsi bernama `greetPerson`** yang menerima dua parameter: `name` (wajib) dan `greeting` (opsional, defaultnya "Hello"). Fungsi ini harus mencetak pesan seperti "[greeting], [name]!" ke konsol.

### Bagian 3: Fungsi yang Mengembalikan Nilai
4. **Buat fungsi bernama `addNumbers`** yang menerima dua parameter (`num1` dan `num2`) dan mengembalikan jumlahnya.

5. **Buat fungsi bernama `createFullName`** yang menerima parameter `firstName` dan `lastName` dan mengembalikan nama lengkap sebagai satu string.

### Bagian 4: Gabungkan Semuanya
6. **Buat fungsi bernama `calculateTip`** yang menerima dua parameter: `billAmount` (wajib) dan `tipPercentage` (opsional, defaultnya 15). Fungsi ini harus menghitung dan mengembalikan jumlah tip.

### Bagian 5: Uji Fungsi Anda
Tambahkan pemanggilan fungsi untuk menguji masing-masing fungsi Anda dan tampilkan hasilnya menggunakan `console.log()`.

**Contoh pemanggilan uji:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Rubrik

| Kriteria | Unggul | Memadai | Perlu Perbaikan |
| -------- | ------- | -------- | --------------- |
| **Pembuatan Fungsi** | Semua 6 fungsi diimplementasikan dengan benar menggunakan sintaks dan konvensi penamaan yang tepat | 4-5 fungsi diimplementasikan dengan benar dengan masalah sintaks minor | 3 atau lebih sedikit fungsi diimplementasikan atau terdapat kesalahan sintaks besar |
| **Parameter & Nilai Default** | Menggunakan parameter wajib, parameter opsional, dan nilai default dengan benar sesuai spesifikasi | Menggunakan parameter dengan benar tetapi mungkin ada masalah dengan nilai default | Implementasi parameter salah atau hilang |
| **Nilai Pengembalian** | Fungsi yang seharusnya mengembalikan nilai melakukannya dengan benar, dan fungsi yang tidak seharusnya mengembalikan nilai hanya melakukan tindakan | Sebagian besar nilai pengembalian benar dengan masalah minor | Masalah signifikan dengan pernyataan pengembalian |
| **Kualitas Kode** | Kode bersih, terorganisir dengan baik, dengan nama variabel yang bermakna dan indentasi yang tepat | Kode berfungsi tetapi bisa lebih bersih atau lebih terorganisir | Kode sulit dibaca atau terstruktur dengan buruk |
| **Pengujian** | Semua fungsi diuji dengan pemanggilan fungsi yang sesuai dan hasil ditampilkan dengan jelas | Sebagian besar fungsi diuji dengan memadai | Pengujian fungsi terbatas atau salah |

## Tantangan Bonus (Opsional)

Jika Anda ingin menantang diri lebih jauh:

1. **Buat versi fungsi panah** dari salah satu fungsi Anda
2. **Buat fungsi yang menerima fungsi lain sebagai parameter** (seperti contoh `setTimeout` dari pelajaran)
3. **Tambahkan validasi input** untuk memastikan fungsi Anda menangani input yang tidak valid dengan baik

---

> 💡 **Tip**: Ingatlah untuk membuka konsol pengembang browser Anda (F12) untuk melihat output dari pernyataan `console.log()` Anda!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diketahui bahwa terjemahan otomatis dapat mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.