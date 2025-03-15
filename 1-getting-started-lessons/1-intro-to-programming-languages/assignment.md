Araç: Web Storage API

Neden Kullanılır?
Web Storage API, modern web sitelerinde istemci tarafında veri saklamak için kullanılır. Çerezlere kıyasla daha fazla veri depolama kapasitesi sunar ve her istekte sunucuya gönderilmediği için performans açısından avantaj sağlar.

Nasıl Kullanılır?
Web Storage API, iki temel bileşenden oluşur:

localStorage: Verileri tarayıcı kapansa bile saklar.
sessionStorage: Verileri yalnızca oturum süresince saklar.
Örneğin, bir kullanıcının gece modu tercihlerini kaydetmek için aşağıdaki kod kullanılabilir:

javascript
localStorage.setItem("theme", "dark"); 
let theme = localStorage.getItem("theme");  
console.log(theme); // "dark"
Bu sayede kullanıcı sayfayı kapatıp açtığında bile gece modu aktif kalır.

MDN Belgesi:
Web Storage API - MDN
