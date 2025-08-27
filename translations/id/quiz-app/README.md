<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-27T23:03:56+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "id"
}
-->
# Aplikasi Kuis

Kuis-kuis ini adalah kuis sebelum dan sesudah kuliah untuk kurikulum data science di https://aka.ms/webdev-beginners

## Menambahkan Set Kuis Terjemahan

Tambahkan terjemahan kuis dengan membuat struktur kuis yang sesuai di folder `assets/translations`. Kuis asli berada di `assets/translations/en`. Kuis-kuis ini dibagi menjadi beberapa kelompok. Pastikan untuk menyelaraskan penomoran dengan bagian kuis yang sesuai. Total ada 40 kuis dalam kurikulum ini, dimulai dari angka 0.

  
<details>
<summary>Berikut adalah bentuk file terjemahan:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

Setelah mengedit terjemahan, edit file index.js di folder terjemahan untuk mengimpor semua file sesuai dengan konvensi di `en`.

Edit file `index.js` di `assets/translations` untuk mengimpor file terjemahan baru.

Sebagai contoh, jika JSON terjemahan Anda ada di `ex.json`, buat 'ex' sebagai kunci lokalisasi, lalu masukkan seperti yang ditunjukkan di bawah ini untuk mengimpor:

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## Menjalankan Aplikasi Kuis Secara Lokal

### Prasyarat

- Akun GitHub
- [Node.js dan Git](https://nodejs.org/)

### Instalasi & Pengaturan

1. Buat repositori dari [template ini](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Clone repositori baru Anda, dan navigasikan ke folder quiz-app

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Instal paket npm & dependensi

   ```bash
   npm install
   ```

### Membangun Aplikasi

1. Untuk membangun solusi, jalankan:

   ```bash
   npm run build
   ```

### Memulai Aplikasi

1. Untuk menjalankan solusi, jalankan:

    ```bash
    npm run dev
    ```

### [Opsional] Linting

1. Untuk memastikan kode telah dilinting, jalankan:

    ```bash
    npm run lint
    ```

## Mendeploy Aplikasi Kuis ke Azure 

### Prasyarat
- Langganan Azure. Daftar gratis [di sini](https://aka.ms/azure-free).

    _Estimasi Biaya untuk mendeploy aplikasi kuis ini: GRATIS_

[![Deploy ke Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Setelah Anda masuk ke Azure melalui tautan di atas, pilih langganan dan grup sumber daya, lalu:

- Detail Aplikasi Web Statis: Berikan nama dan pilih rencana hosting
- Login GitHub: Atur sumber deployment Anda sebagai GitHub lalu masuk dan isi kolom yang diperlukan pada formulir:
    - *Organisasi* – Pilih organisasi Anda.
    - *Repositori* – Pilih repositori kurikulum Web Dev for Beginners. 
    - *Cabang* - Pilih cabang (main) 
- Preset Build: Azure Static Web Apps menggunakan algoritma deteksi untuk mendeteksi framework yang digunakan dalam aplikasi Anda. 
    - *Lokasi Aplikasi* - ./quiz-app
    - *Lokasi API* -
    - *Lokasi Output* - dist
- Deployment: Klik 'Review + Create', lalu 'Create'

    Setelah dideploy, file workflow akan dibuat di direktori *.github* dari repositori Anda. File workflow ini berisi instruksi tentang peristiwa yang akan memicu redeployment aplikasi ke Azure, misalnya, _**push** pada cabang **main**_ dll.

    <details>
    <summary>Contoh File Workflow</summary>
    Berikut adalah contoh file workflow GitHub Actions:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- Pasca-Deployment: Setelah deployment selesai, klik 'Go to Deployment' lalu 'View app in browser'.

Setelah GitHub Action (workflow) Anda berhasil dijalankan, segarkan halaman live untuk melihat aplikasi Anda.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang berwenang. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa terjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau interpretasi yang keliru yang timbul dari penggunaan terjemahan ini.