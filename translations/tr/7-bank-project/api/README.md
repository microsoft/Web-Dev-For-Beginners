<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9884f8c8a61cf56214450f8b16a094ce",
  "translation_date": "2025-08-26T00:05:43+00:00",
  "source_file": "7-bank-project/api/README.md",
  "language_code": "tr"
}
-->
# Bank API

> [Node.js](https://nodejs.org) + [Express](https://expressjs.com/) kullanılarak oluşturulmuş Bank API.

API zaten sizin için oluşturulmuş ve bu egzersizin bir parçası değil.

Ancak, bu tür bir API oluşturmayı öğrenmekle ilgileniyorsanız, şu video serisini takip edebilirsiniz: https://aka.ms/NodeBeginner (17 ila 21. videolar tam olarak bu API'yi kapsıyor).

Ayrıca şu interaktif eğiticiye göz atabilirsiniz: https://aka.ms/learn/express-api

## Sunucuyu Çalıştırma

[Node.js](https://nodejs.org) yüklü olduğundan emin olun.

1. Bu repoyu klonlayın: [The Web-Dev-For-Beginners](https://github.com/microsoft/Web-Dev-For-Beginners).
2. Terminalinizi açın ve `Web-Dev-For-Beginners/7-bank-project/api` klasörüne gidin.
3. `npm install` komutunu çalıştırın ve paketlerin yüklenmesini bekleyin (internet bağlantınızın hızına bağlı olarak biraz zaman alabilir).
4. Yükleme tamamlandığında, `npm start` komutunu çalıştırın ve her şey hazır.

Sunucu `5000` portunda dinlemeye başlamalıdır.
*Bu sunucu, ana banka uygulaması sunucu terminaliyle birlikte çalışacak (`3000` portunda dinliyor), kapatmayın.*

> Not: Tüm girişler bellekte saklanır ve kalıcı değildir, bu nedenle sunucu durdurulduğunda tüm veriler kaybolur.

## API Detayları

Rota                                        | Açıklama
---------------------------------------------|------------------------------------
GET    /api/                                 | Sunucu bilgilerini al
POST   /api/accounts/                        | Bir hesap oluştur, ör: `{ user: 'Yohan', description: 'My budget', currency: 'EUR', balance: 100 }`
GET    /api/accounts/:user                   | Belirtilen hesap için tüm verileri al
DELETE /api/accounts/:user                   | Belirtilen hesabı sil
POST   /api/accounts/:user/transactions      | Bir işlem ekle, ör: `{ date: '2020-07-23T18:25:43.511Z', object: 'Bought a book', amount: -20 }`
DELETE  /api/accounts/:user/transactions/:id | Belirtilen işlemi sil

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.