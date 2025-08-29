<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T09:49:16+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "id"
}
-->
# Jalankan kode

## Persiapan

Buat lingkungan virtual

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Instal dependensi

```sh
pip install openai flask flask-cors 
```

## Jalankan API

```sh
python api.py
```

## Jalankan frontend

Pastikan Anda berada di folder frontend

Temukan *app.js*, ubah `BASE_URL` ke URL backend Anda

Jalankan

```
npx http-server -p 8000
```

Coba ketikkan pesan di chat, Anda seharusnya melihat respons (dengan catatan Anda menjalankan ini di Codespace atau telah mengatur token akses).

## Atur token akses (jika Anda tidak menjalankan ini di Codespace)

Lihat [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang berwenang. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.