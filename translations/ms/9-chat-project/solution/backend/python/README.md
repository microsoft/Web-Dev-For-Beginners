<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:49:00+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "ms"
}
-->
# Jalankan kod

## Persediaan

Cipta persekitaran maya

```sh
python -m venv venv
source ./venv/bin/activate
```

## Pasang kebergantungan

```sh
pip install openai flask flask-cors 
```

## Jalankan API

```sh
python api.py
```

## Jalankan frontend

Pastikan anda berada dalam folder frontend

Cari *app.js*, ubah `BASE_URL` kepada URL backend anda

Jalankan

```
npx http-server -p 8000
```

Cuba taip mesej dalam chat, anda sepatutnya melihat respons (dengan syarat anda menjalankan ini dalam Codespace atau telah menyediakan token akses).

## Sediakan token akses (jika anda tidak menjalankan ini dalam Codespace)

Lihat [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.