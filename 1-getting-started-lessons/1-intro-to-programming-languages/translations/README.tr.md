# Programlama Dillerine ve Araçlarına Başlangıç

Bu ders programlama dillerinin temellerini kapsıyor. Bahsi geçilen konular günümüzdeki çoğu modern programlama dillerine uygulanabilir durumda. Dersin 'Programlama Araçları' kısmında ise,  yazılım hayatınızda size yardımcı olacak kullanışlı araçları öğreneceksiniz. 

![Programlamaya Giriş](../../sketchnotes/webdev101-programming.png)
>  Grafik Çizeri: [Tomomi Imura](https://twitter.com/girlie_mac)

## Ders Öncesi Ara Sınav
[Ara Sınav](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1)

## Giriş

Bu derste aşağıdaki konuları işleyeceğiz: 

- Programlama nedir?
- Programlama dilleri tipleri
- Bir programın temel bileşenleri
- Profesyonel geliştiriciler için kullanışlı yazılım ve programlama araçları.


> Bu dersi [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming?WT.mc_id=academic-13441-cxa) sitesinden de alabilirsin!

## Programlama Nedir?

Programlama (ya da kodlama) bilgisayar veya mobil cihazlara talimat verilme sürecidir. Bu talimatları, daha sonra cihaz tarafından yorumlanacak programlama dilleri ile yazıyoruz. Bu talimatlar bütünü karşımıza sıkça *program*, *bilgisayar programı*, *uygulama (app)*, ve *yürütülebilir program* olarak çıkabilir. 

Bir *program* kod ile yazılmış herhangi bir şey olabilir; Websiteleri, oyunlar, ve telefon uygulamaları buna örnekler olarak gösterilebilir. Kod yazmadan bir program oluşturmak mümkün olsa da, altta yatan mantık cihaz tarafından yorumlanır ve bu mantık büyük olasılıkla bir yerlerde kodla yazılmıştır. *Çalışan* veya kod *çalıştıran* bir program talimatları yerine getirir. Aynı bu dersi okuduğunuz cihazın ekranınıza yazdırmak için bir program çalıştırıyor olduğu gibi.

✅ Araştırma Zamanı: Dünyanın ilk bilgisayar programcısı kim olarak kabul ediliyor?

## Programlama Dilleri 

Programlama dilleri, geliştiricilerin bir cihaz için talimatlar yazmasını sağlar. Cihazlar yalnızca binary (1'ler ve 0'lar) dilini anlayabilir ve *çoğu* geliştirici için bu iletişim kurmanın çok verimli bir yolu değildir. Programlama dilleri insanlar ve bilgisayarlar arasındaki iletişim için bir araçtır.

Programlama dilleri farklı biçimlerde gelir ve farklı amaçlara hizmet edebilir. Örneğin, JavaScript asıl olarak web uygulamaları için kullanılırken, Bash genellikle işletim sistemleri için kullanılır.

*Düşük seviyeli diller* (Low-Level) genellikle bir cihazın talimatları yorumlaması için *yüksek seviyeli dillerden* (High-Level) daha az adım gerektirir. Bununla birlikte, yüksek seviyeli dilleri popüler yapan şey okunabilirlikleri ve destekleridir. JavaScript yüksek seviyeli bir dil olarak kabul edilir.

Aşağıdaki kod, JavaScript gibi yüksek seviyeli bir dil ve ARM üretici (assembly) kodu gibi düşük seviyeli bir dil arasındaki farkı göstermektedir.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

İster inanın ister inanmayın, *ikisi de 10'a kadar bir Fibonacci dizisi yazdırıyor*.

✅ Bir [Fibonacci dizisi](https://en.wikipedia.org/wiki/Fibonacci_number), 0 ve 1'den başlayarak her sayı kendinden önceki iki sayının toplamı olacak şekilde bir sayı kümesi olarak tanımlanır.

