<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:48:54+00:00",
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

Cobalah mengetik pesan di chat, Anda seharusnya melihat respons (dengan catatan Anda menjalankan ini di Codespace atau telah mengatur token akses).

## Atur token akses (jika Anda tidak menjalankan ini di Codespace)

Lihat [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan layanan penerjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Meskipun kami berusaha untuk memberikan hasil yang akurat, harap diingat bahwa terjemahan otomatis mungkin mengandung kesalahan atau ketidakakuratan. Dokumen asli dalam bahasa aslinya harus dianggap sebagai sumber yang otoritatif. Untuk informasi yang bersifat kritis, disarankan menggunakan jasa penerjemahan profesional oleh manusia. Kami tidak bertanggung jawab atas kesalahpahaman atau penafsiran yang keliru yang timbul dari penggunaan terjemahan ini.