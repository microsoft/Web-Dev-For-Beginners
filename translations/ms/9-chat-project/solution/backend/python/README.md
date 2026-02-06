# Jalankan kod

## Persediaan

Buat persekitaran maya

```sh
python -m venv venv
source ./venv/bin/activate
```

## Pasang kebergantungan

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

Lawati dokumentasi API interaktif di: `http://localhost:5000/docs`

## Jalankan frontend

Pastikan anda berada di folder frontend

Cari *app.js*, tukar `BASE_URL` kepada URL backend anda

Jalankan

```
npx http-server -p 8000
```

Cuba taip mesej dalam chat, anda sepatutnya melihat respons (dengan syarat anda menjalankannya dalam Codespace atau telah menyediakan token akses).

## Sediakan token akses (jika anda tidak menjalankannya dalam Codespace)

Lihat [Sediakan PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Penafian**:  
Dokumen ini telah diterjemahkan menggunakan perkhidmatan terjemahan AI [Co-op Translator](https://github.com/Azure/co-op-translator). Walaupun kami berusaha untuk ketepatan, sila ambil perhatian bahawa terjemahan automatik mungkin mengandungi kesilapan atau ketidaktepatan. Dokumen asal dalam bahasa asalnya harus dianggap sebagai sumber yang berwibawa. Untuk maklumat penting, terjemahan manusia profesional adalah disyorkan. Kami tidak bertanggungjawab atas sebarang salah faham atau salah tafsir yang timbul daripada penggunaan terjemahan ini.