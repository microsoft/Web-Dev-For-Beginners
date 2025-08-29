<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T01:28:32+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "tr"
}
-->
# Kod çalıştırma

## Kurulum

Sanal ortam oluştur

```sh
cd backend
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

Frontend klasöründe olduğunuzdan emin olun

*app.js* dosyasını bulun, `BASE_URL` değerini backend URL'nize göre değiştirin

Çalıştırın

```
npx http-server -p 8000
```

Sohbete bir mesaj yazmayı deneyin, bir yanıt görmelisiniz (bunu bir Codespace içinde çalıştırıyorsanız veya bir erişim token'ı ayarladıysanız).

## Erişim token'ı ayarlama (eğer bunu bir Codespace içinde çalıştırmıyorsanız)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) bağlantısına bakın

---

**Feragatname**:  
Bu belge, [Co-op Translator](https://github.com/Azure/co-op-translator) adlı yapay zeka çeviri hizmeti kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.