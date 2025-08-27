<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-27T23:04:07+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "ms"
}
-->
# Aplikasi Kuiz

Kuiz-kuiz ini adalah kuiz pra- dan pasca-kuliah untuk kurikulum sains data di https://aka.ms/webdev-beginners

## Menambah Set Kuiz Terjemahan

Tambah terjemahan kuiz dengan mencipta struktur kuiz yang sepadan dalam folder `assets/translations`. Kuiz asal berada dalam `assets/translations/en`. Kuiz-kuiz ini dibahagikan kepada beberapa kumpulan. Pastikan penomboran sejajar dengan bahagian kuiz yang betul. Terdapat 40 kuiz keseluruhan dalam kurikulum ini, dengan kiraan bermula dari 0.

  
<details>
<summary>Berikut adalah bentuk fail terjemahan:</summary>

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

Selepas mengedit terjemahan, edit fail index.js dalam folder terjemahan untuk mengimport semua fail mengikut konvensyen dalam `en`.

Edit fail `index.js` dalam `assets/translations` untuk mengimport fail terjemahan baru. 

Sebagai contoh, jika JSON terjemahan anda berada dalam `ex.json`, jadikan 'ex' sebagai kunci lokal, kemudian masukkan seperti yang ditunjukkan di bawah untuk mengimportnya.

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

## Jalankan Aplikasi Kuiz Secara Lokal

### Prasyarat

- Akaun GitHub
- [Node.js dan Git](https://nodejs.org/)

### Pemasangan & Persediaan

1. Cipta repositori daripada [templat ini](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Klon repositori baru anda, dan navigasi ke aplikasi kuiz

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Pasang pakej npm & kebergantungan

   ```bash
   npm install
   ```

### Bina Aplikasi

1. Untuk membina penyelesaian, jalankan:

   ```bash
   npm run build
   ```

### Mulakan Aplikasi

1. Untuk menjalankan penyelesaian, jalankan:

    ```bash
    npm run dev
    ```

### [Pilihan] Linting

1. Untuk memastikan kod dilint, jalankan:

    ```bash
    npm run lint
    ```

## Terbitkan Aplikasi Kuiz ke Azure 

### Prasyarat
- Langganan Azure. Daftar secara percuma [di sini](https://aka.ms/azure-free).

    _Anggaran Kos untuk menerbitkan aplikasi kuiz ini: PERCUMA_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Setelah anda log masuk ke Azure melalui pautan di atas, pilih langganan dan kumpulan sumber kemudian:

- Butiran Aplikasi Web Statik: Berikan nama dan pilih pelan hosting
- Log Masuk GitHub: Tetapkan sumber penerbitan anda sebagai GitHub kemudian log masuk dan isi medan yang diperlukan pada borang:
    - *Organisasi* – Pilih organisasi anda.
    - *Repositori* – Pilih repositori kurikulum Web Dev for Beginners. 
    - *Cawangan* - Pilih cawangan (main) 
- Preset Binaan: Azure Static Web Apps menggunakan algoritma pengesanan untuk mengesan kerangka kerja yang digunakan dalam aplikasi anda. 
    - *Lokasi Aplikasi* - ./quiz-app
    - *Lokasi Api* -
    - *Lokasi Output* - dist
- Penerbitan: Klik 'Review + Create', kemudian 'Create'

    Setelah diterbitkan, fail alur kerja akan dicipta dalam direktori *.github* repositori anda. Fail alur kerja ini mengandungi arahan tentang acara yang akan mencetuskan penerbitan semula aplikasi ke Azure, contohnya, _satu **push** pada cawangan **main**_ dan sebagainya.

    <details>
    <summary>Contoh Fail Alur Kerja</summary>
    Berikut adalah contoh bagaimana fail alur kerja GitHub Actions mungkin kelihatan:
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

- Selepas Penerbitan: Selepas penerbitan selesai, klik pada 'Go to Deployment' kemudian 'View app in browser'.

Setelah GitHub Action (alur kerja) anda berjaya dilaksanakan, segarkan halaman langsung untuk melihat aplikasi anda.

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.