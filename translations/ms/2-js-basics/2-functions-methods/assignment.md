# Seronok dengan Fungsi

## Arahan

Dalam tugasan ini, anda akan berlatih mencipta pelbagai jenis fungsi untuk mengukuhkan konsep yang telah anda pelajari tentang fungsi JavaScript, parameter, nilai lalai, dan pernyataan pulangan.

Cipta fail JavaScript bernama `functions-practice.js` dan laksanakan fungsi-fungsi berikut:

### Bahagian 1: Fungsi Asas
1. **Cipta fungsi bernama `sayHello`** yang tidak mengambil sebarang parameter dan hanya mencetak "Hello!" ke konsol.

2. **Cipta fungsi bernama `introduceYourself`** yang mengambil parameter `name` dan mencetak mesej seperti "Hi, nama saya [name]" ke konsol.

### Bahagian 2: Fungsi dengan Parameter Lalai
3. **Cipta fungsi bernama `greetPerson`** yang mengambil dua parameter: `name` (wajib) dan `greeting` (pilihan, lalai kepada "Hello"). Fungsi ini harus mencetak mesej seperti "[greeting], [name]!" ke konsol.

### Bahagian 3: Fungsi yang Mengembalikan Nilai
4. **Cipta fungsi bernama `addNumbers`** yang mengambil dua parameter (`num1` dan `num2`) dan mengembalikan jumlah mereka.

5. **Cipta fungsi bernama `createFullName`** yang mengambil parameter `firstName` dan `lastName` dan mengembalikan nama penuh sebagai satu string.

### Bahagian 4: Gabungkan Semuanya
6. **Cipta fungsi bernama `calculateTip`** yang mengambil dua parameter: `billAmount` (wajib) dan `tipPercentage` (pilihan, lalai kepada 15). Fungsi ini harus mengira dan mengembalikan jumlah tip.

### Bahagian 5: Uji Fungsi Anda
Tambahkan panggilan fungsi untuk menguji setiap fungsi anda dan paparkan hasilnya menggunakan `console.log()`.

**Contoh panggilan ujian:**
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

| Kriteria | Cemerlang | Memadai | Perlu Penambahbaikan |
| -------- | --------- | -------- | -------------------- |
| **Penciptaan Fungsi** | Semua 6 fungsi dilaksanakan dengan betul menggunakan sintaks dan konvensyen penamaan yang sesuai | 4-5 fungsi dilaksanakan dengan betul dengan isu sintaks kecil | 3 atau kurang fungsi dilaksanakan atau terdapat kesalahan sintaks besar |
| **Parameter & Nilai Lalai** | Menggunakan parameter wajib, parameter pilihan, dan nilai lalai dengan betul seperti yang dinyatakan | Menggunakan parameter dengan betul tetapi mungkin ada isu dengan nilai lalai | Pelaksanaan parameter tidak betul atau hilang |
| **Nilai Pulangan** | Fungsi yang sepatutnya mengembalikan nilai melakukannya dengan betul, dan fungsi yang tidak sepatutnya mengembalikan nilai hanya melaksanakan tindakan | Kebanyakan nilai pulangan adalah betul dengan isu kecil | Masalah besar dengan pernyataan pulangan |
| **Kualiti Kod** | Kod yang bersih, teratur dengan nama pemboleh ubah yang bermakna dan indentasi yang betul | Kod berfungsi tetapi boleh menjadi lebih bersih atau lebih teratur | Kod sukar dibaca atau tidak terstruktur dengan baik |
| **Pengujian** | Semua fungsi diuji dengan panggilan fungsi yang sesuai dan hasil dipaparkan dengan jelas | Kebanyakan fungsi diuji dengan memadai | Pengujian fungsi terhad atau tidak betul |

## Cabaran Bonus (Pilihan)

Jika anda ingin mencabar diri anda lebih jauh:

1. **Cipta versi fungsi anak panah** untuk salah satu fungsi anda
2. **Cipta fungsi yang menerima fungsi lain sebagai parameter** (seperti contoh `setTimeout` dari pelajaran)
3. **Tambahkan pengesahan input** untuk memastikan fungsi anda mengendalikan input yang tidak sah dengan baik

---

> 💡 **Petua**: Ingat untuk membuka konsol pembangun pelayar anda (F12) untuk melihat output pernyataan `console.log()` anda!

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.