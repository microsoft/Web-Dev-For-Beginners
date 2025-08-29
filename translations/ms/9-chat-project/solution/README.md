<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T09:49:22+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "ms"
}
-->
# Jalankan kod

## Tetapkan

Cipta persekitaran maya

```sh
cd backend
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

Jalankannya

```
npx http-server -p 8000
```

Cuba taip mesej dalam chat, anda sepatutnya melihat respons (dengan syarat anda menjalankannya dalam Codespace atau telah menetapkan token akses).

## Tetapkan token akses (jika anda tidak menjalankannya dalam Codespace)

Lihat [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk memastikan ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat yang kritikal, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.