# Fonksiyonlarla Eğlence

## Talimatlar

Bu ödevde, JavaScript fonksiyonları, parametreler, varsayılan değerler ve dönüş ifadeleri hakkında öğrendiğiniz kavramları pekiştirmek için farklı türde fonksiyonlar oluşturmayı pratik edeceksiniz.

`functions-practice.js` adlı bir JavaScript dosyası oluşturun ve aşağıdaki fonksiyonları uygulayın:

### Bölüm 1: Temel Fonksiyonlar
1. **`sayHello` adlı bir fonksiyon oluşturun**. Bu fonksiyon herhangi bir parametre almaz ve sadece konsola "Merhaba!" yazdırır.

2. **`introduceYourself` adlı bir fonksiyon oluşturun**. Bu fonksiyon bir `name` parametresi alır ve konsola "Merhaba, benim adım [name]" gibi bir mesaj yazdırır.

### Bölüm 2: Varsayılan Parametreli Fonksiyonlar
3. **`greetPerson` adlı bir fonksiyon oluşturun**. Bu fonksiyon iki parametre alır: `name` (zorunlu) ve `greeting` (isteğe bağlı, varsayılan değeri "Merhaba"). Fonksiyon, konsola "[greeting], [name]!" gibi bir mesaj yazdırmalıdır.

### Bölüm 3: Değer Döndüren Fonksiyonlar
4. **`addNumbers` adlı bir fonksiyon oluşturun**. Bu fonksiyon iki parametre (`num1` ve `num2`) alır ve bunların toplamını döndürür.

5. **`createFullName` adlı bir fonksiyon oluşturun**. Bu fonksiyon `firstName` ve `lastName` parametrelerini alır ve tam adı tek bir string olarak döndürür.

### Bölüm 4: Hepsini Birleştirin
6. **`calculateTip` adlı bir fonksiyon oluşturun**. Bu fonksiyon iki parametre alır: `billAmount` (zorunlu) ve `tipPercentage` (isteğe bağlı, varsayılan değeri %15). Fonksiyon, bahşiş miktarını hesaplamalı ve döndürmelidir.

### Bölüm 5: Fonksiyonlarınızı Test Edin
Her bir fonksiyonunuzu test etmek için fonksiyon çağrıları ekleyin ve sonuçları `console.log()` kullanarak görüntüleyin.

**Örnek test çağrıları:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Değerlendirme Ölçütleri

| Kriter | Mükemmel | Yeterli | Geliştirme Gerekiyor |
| ------ | -------- | ------- | -------------------- |
| **Fonksiyon Oluşturma** | Tüm 6 fonksiyon doğru bir şekilde uygulanmış, uygun sözdizimi ve isimlendirme kurallarına uyulmuş | 4-5 fonksiyon doğru bir şekilde uygulanmış, küçük sözdizimi hataları var | 3 veya daha az fonksiyon uygulanmış ya da büyük sözdizimi hataları var |
| **Parametreler ve Varsayılan Değerler** | Zorunlu parametreler, isteğe bağlı parametreler ve varsayılan değerler doğru bir şekilde kullanılmış | Parametreler doğru kullanılmış ancak varsayılan değerlerde sorunlar olabilir | Parametre uygulaması hatalı veya eksik |
| **Dönüş Değerleri** | Dönüş değeri olması gereken fonksiyonlar doğru bir şekilde değer döndürüyor, dönüş değeri olmaması gereken fonksiyonlar sadece işlem yapıyor | Çoğu dönüş değeri doğru, küçük sorunlar var | Dönüş ifadelerinde önemli problemler var |
| **Kod Kalitesi** | Temiz, iyi organize edilmiş kod; anlamlı değişken isimleri ve uygun girintileme | Kod çalışıyor ancak daha temiz veya daha iyi organize edilebilir | Kod okunması zor veya kötü yapılandırılmış |
| **Test Etme** | Tüm fonksiyonlar uygun fonksiyon çağrıları ile test edilmiş ve sonuçlar açıkça görüntülenmiş | Çoğu fonksiyon yeterince test edilmiş | Fonksiyonların sınırlı veya hatalı test edilmesi |

## Bonus Zorluklar (İsteğe Bağlı)

Kendinizi daha fazla zorlamak isterseniz:

1. **Fonksiyonlarınızdan birinin ok fonksiyonu versiyonunu oluşturun**
2. **Bir başka fonksiyonu parametre olarak kabul eden bir fonksiyon oluşturun** (derslerdeki `setTimeout` örnekleri gibi)
3. **Geçersiz girdileri düzgün bir şekilde ele almak için giriş doğrulama ekleyin**

---

> 💡 **İpucu**: `console.log()` ifadelerinizin çıktısını görmek için tarayıcınızın geliştirici konsolunu (F12) açmayı unutmayın!

---

**Feragatname**:  
Bu belge, AI çeviri hizmeti [Co-op Translator](https://github.com/Azure/co-op-translator) kullanılarak çevrilmiştir. Doğruluk için çaba göstersek de, otomatik çevirilerin hata veya yanlışlıklar içerebileceğini lütfen unutmayın. Belgenin orijinal dili, yetkili kaynak olarak kabul edilmelidir. Kritik bilgiler için profesyonel insan çevirisi önerilir. Bu çevirinin kullanımından kaynaklanan yanlış anlamalar veya yanlış yorumlamalar için sorumluluk kabul etmiyoruz.