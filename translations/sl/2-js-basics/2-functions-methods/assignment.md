# Zabava s funkcijami

## Navodila

V tej nalogi boste vadili ustvarjanje različnih vrst funkcij, da utrdite koncept, ki ste se ga naučili o JavaScript funkcijah, parametrih, privzetih vrednostih in povratnih izjavah.

Ustvarite JavaScript datoteko z imenom `functions-practice.js` in implementirajte naslednje funkcije:

### 1. del: Osnovne funkcije
1. **Ustvarite funkcijo z imenom `sayHello`**, ki ne sprejema nobenih parametrov in preprosto zapiše "Hello!" v konzolo.

2. **Ustvarite funkcijo z imenom `introduceYourself`**, ki sprejme parameter `name` in zapiše sporočilo, kot je "Hi, my name is [name]" v konzolo.

### 2. del: Funkcije s privzetimi parametri
3. **Ustvarite funkcijo z imenom `greetPerson`**, ki sprejme dva parametra: `name` (obvezen) in `greeting` (neobvezen, privzeto "Hello"). Funkcija naj zapiše sporočilo, kot je "[greeting], [name]!" v konzolo.

### 3. del: Funkcije, ki vračajo vrednosti
4. **Ustvarite funkcijo z imenom `addNumbers`**, ki sprejme dva parametra (`num1` in `num2`) in vrne njuno vsoto.

5. **Ustvarite funkcijo z imenom `createFullName`**, ki sprejme parametra `firstName` in `lastName` ter vrne polno ime kot enoten niz.

### 4. del: Vse skupaj združite
6. **Ustvarite funkcijo z imenom `calculateTip`**, ki sprejme dva parametra: `billAmount` (obvezen) in `tipPercentage` (neobvezen, privzeto 15). Funkcija naj izračuna in vrne znesek napitnine.

### 5. del: Testirajte svoje funkcije
Dodajte klice funkcij za testiranje vsake od vaših funkcij in prikažite rezultate z uporabo `console.log()`.

**Primer testnih klicev:**
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

## Merila ocenjevanja

| Merilo | Odlično | Zadostno | Potrebno izboljšanje |
| ------ | -------- | -------- | -------------------- |
| **Ustvarjanje funkcij** | Vse 6 funkcij je pravilno implementiranih s pravilno sintakso in poimenovanjem | 4-5 funkcij je pravilno implementiranih z manjšimi sintaktičnimi napakami | 3 ali manj funkcij je implementiranih ali večje sintaktične napake |
| **Parametri in privzete vrednosti** | Pravilno uporablja obvezne parametre, neobvezne parametre in privzete vrednosti, kot je določeno | Parametri so pravilno uporabljeni, vendar so lahko težave s privzetimi vrednostmi | Napačna ali manjkajoča implementacija parametrov |
| **Povratne vrednosti** | Funkcije, ki bi morale vračati vrednosti, to pravilno storijo, funkcije, ki ne bi smele vračati vrednosti, pa izvajajo samo dejanja | Večina povratnih vrednosti je pravilnih z manjšimi težavami | Pomembne težave s povratnimi izjavami |
| **Kakovost kode** | Čista, dobro organizirana koda s smiselno poimenovanimi spremenljivkami in pravilno identacijo | Koda deluje, vendar bi lahko bila bolj čista ali bolje organizirana | Koda je težko berljiva ali slabo strukturirana |
| **Testiranje** | Vse funkcije so testirane z ustreznimi klici funkcij, rezultati pa so jasno prikazani | Večina funkcij je ustrezno testiranih | Omejeno ali napačno testiranje funkcij |

## Dodatni izzivi (neobvezno)

Če se želite še dodatno izzvati:

1. **Ustvarite različico funkcije z uporabo puščične funkcije**
2. **Ustvarite funkcijo, ki sprejme drugo funkcijo kot parameter** (kot primeri `setTimeout` iz lekcije)
3. **Dodajte preverjanje vhodnih podatkov**, da zagotovite, da vaše funkcije pravilno obravnavajo neveljavne vnose

---

> 💡 **Nasvet**: Ne pozabite odpreti razvijalske konzole v brskalniku (F12), da si ogledate izhod vaših izjav `console.log()`!

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni prevod s strani človeka. Ne odgovarjamo za morebitna napačna razumevanja ali napačne interpretacije, ki izhajajo iz uporabe tega prevoda.