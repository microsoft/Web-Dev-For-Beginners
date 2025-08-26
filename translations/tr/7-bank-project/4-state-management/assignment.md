<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-26T00:50:20+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "tr"
}
-->
# "İşlem Ekle" Diyaloğunu Uygulama

## Talimatlar

Banka uygulamamızda hala önemli bir özellik eksik: yeni işlemler girme imkanı. Önceki dört derste öğrendiklerinizi kullanarak bir "İşlem Ekle" diyaloğu uygulayın:

- Gösterge paneli sayfasına bir "İşlem Ekle" düğmesi ekleyin
- Yeni bir sayfa oluşturabilir veya JavaScript kullanarak gösterge paneli sayfasından ayrılmadan diyalog HTML'sini göster/gizle yapabilirsiniz (bunun için [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) özelliğini veya CSS sınıflarını kullanabilirsiniz)
- Diyalog için [klavye ve ekran okuyucu erişilebilirliğini](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) ele aldığınızdan emin olun
- Girdi verilerini almak için bir HTML formu uygulayın
- Form verilerinden JSON verisi oluşturun ve API'ye gönderin
- Yeni verilerle gösterge paneli sayfasını güncelleyin

Hangi API'yi çağırmanız gerektiğini ve beklenen JSON formatını görmek için [sunucu API spesifikasyonlarına](../api/README.md) bakın.

Görevi tamamladıktan sonra ortaya çıkacak örnek bir sonuç:

![Bir örnek "İşlem Ekle" diyaloğunu gösteren ekran görüntüsü](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.tr.png)

## Değerlendirme Kriterleri

| Kriter   | Örnek                                                                                           | Yeterli                                                                                                                | Geliştirme Gerekli                          |
| -------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | İşlem ekleme, derslerde görülen tüm en iyi uygulamalara uygun şekilde tamamen uygulanmıştır.     | İşlem ekleme uygulanmış, ancak derslerde görülen en iyi uygulamalara uygun değil veya yalnızca kısmen çalışıyor.         | İşlem ekleme hiç çalışmıyor.                |

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlık içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.