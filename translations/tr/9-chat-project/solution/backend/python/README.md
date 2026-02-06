# Kod Çalıştırma

## Kurulum

Sanal ortam oluştur

```sh
python -m venv venv
source ./venv/bin/activate
```

## Bağımlılıkları yükle

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API'yi çalıştır

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API'yi test et

Etkileşimli API dokümantasyonunu ziyaret edin: `http://localhost:5000/docs`

## Frontend'i çalıştır

Frontend klasöründe olduğunuzdan emin olun

*app.js* dosyasını bulun, `BASE_URL` değerini backend URL'nize göre değiştirin

Çalıştırın

```
npx http-server -p 8000
```

Sohbet kutusuna bir mesaj yazmayı deneyin, bir yanıt görmelisiniz (eğer bunu bir Codespace içinde çalıştırıyorsanız veya bir erişim tokeni ayarladıysanız).

## Erişim tokeni ayarla (eğer bunu bir Codespace içinde çalıştırmıyorsanız)

[PAT Ayarla](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) adresine bakın

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çeviriler hata veya yanlışlıklar içerebilir. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan herhangi bir yanlış anlama veya yanlış yorumlama durumunda sorumluluk kabul edilmez.