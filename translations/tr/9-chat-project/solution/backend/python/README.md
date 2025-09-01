<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:47:48+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "tr"
}
-->
# Kod çalıştırma

## Kurulum

Sanal ortam oluştur

```sh
python -m venv venv
source ./venv/bin/activate
```

## Bağımlılıkları yükle

```sh
pip install openai flask flask-cors 
```

## API'yi çalıştır

```sh
python api.py
```

## Frontend'i çalıştır

Frontend klasöründe olduğunuzdan emin olun.

*app.js* dosyasını bulun, `BASE_URL` değerini backend URL'nize göre değiştirin.

Çalıştırın

```
npx http-server -p 8000
```

Sohbette bir mesaj yazmayı deneyin, bir yanıt görmelisiniz (eğer bunu bir Codespace içinde çalıştırıyorsanız veya bir erişim tokeni ayarladıysanız).

## Erişim tokeni ayarlama (eğer bunu bir Codespace içinde çalıştırmıyorsanız)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) adresine bakın.

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalardan sorumlu değiliz.