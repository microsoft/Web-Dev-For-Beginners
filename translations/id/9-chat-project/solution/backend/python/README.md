<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-24T14:07:04+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "id"
}
-->
# Jalankan kode

## Persiapan

Buat lingkungan virtual

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instal dependensi

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Jalankan API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Uji API

Kunjungi dokumentasi API interaktif di: `http://localhost:5000/docs`

## Jalankan frontend

Pastikan Anda berada di folder frontend

Temukan *app.js*, ubah `BASE_URL` ke URL backend Anda

Jalankan

```
npx http-server -p 8000
```

Coba ketik pesan di chat, Anda seharusnya melihat respons (dengan catatan Anda menjalankan ini di Codespace atau telah mengatur token akses).

## Atur token akses (jika Anda tidak menjalankan ini di Codespace)

Lihat [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berupaya untuk memberikan hasil yang akurat, harap diperhatikan bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang penting, disarankan menggunakan jasa penerjemahan manusia profesional. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.