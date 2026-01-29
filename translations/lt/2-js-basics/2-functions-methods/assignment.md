# Smagumas su funkcijomis

## Instrukcijos

Šiame pratime praktikuositės kurdami skirtingų tipų funkcijas, kad įtvirtintumėte JavaScript funkcijų, parametrų, numatytųjų reikšmių ir grąžinimo sakinių sąvokas.

Sukurkite JavaScript failą pavadinimu `functions-practice.js` ir įgyvendinkite šias funkcijas:

### 1 dalis: Pagrindinės funkcijos
1. **Sukurkite funkciją pavadinimu `sayHello`**, kuri nepriima jokių parametrų ir tiesiog atspausdina konsolėje "Hello!".

2. **Sukurkite funkciją pavadinimu `introduceYourself`**, kuri priima `name` parametrą ir konsolėje atspausdina žinutę, pavyzdžiui, "Hi, my name is [name]".

### 2 dalis: Funkcijos su numatytaisiais parametrais
3. **Sukurkite funkciją pavadinimu `greetPerson`**, kuri priima du parametrus: `name` (privalomas) ir `greeting` (pasirenkamas, numatytoji reikšmė – "Hello"). Funkcija konsolėje turi atspausdinti žinutę, pavyzdžiui, "[greeting], [name]!".

### 3 dalis: Funkcijos, kurios grąžina reikšmes
4. **Sukurkite funkciją pavadinimu `addNumbers`**, kuri priima du parametrus (`num1` ir `num2`) ir grąžina jų sumą.

5. **Sukurkite funkciją pavadinimu `createFullName`**, kuri priima `firstName` ir `lastName` parametrus ir grąžina pilną vardą kaip vieną eilutę.

### 4 dalis: Mišinys visko
6. **Sukurkite funkciją pavadinimu `calculateTip`**, kuri priima du parametrus: `billAmount` (privalomas) ir `tipPercentage` (pasirenkamas, numatytoji reikšmė – 15). Funkcija turi apskaičiuoti ir grąžinti arbatpinigių sumą.

### 5 dalis: Išbandykite savo funkcijas
Pridėkite funkcijų kvietimus, kad išbandytumėte kiekvieną funkciją ir parodytumėte rezultatus naudodami `console.log()`.

**Pavyzdiniai testavimo kvietimai:**
```javascript
// Išbandykite savo funkcijas čia
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

## Vertinimo lentelė

| Kriterijus | Puikiai | Patenkinamai | Reikia tobulinti |
| -------- | --------- | -------- | ----------------- |
| **Funkcijos kūrimas** | Visos 6 funkcijos teisingai įgyvendintos su taisyklinga sintakse ir vardų konvencijomis | 4-5 funkcijos įgyvendintos teisingai su mažomis sintaksinėmis klaidomis | Įgyvendintos 3 ar mažiau funkcijų arba didelės sintaksinės klaidos |
| **Parametrai ir numatytosios reikšmės** | Teisingai naudojami privalomi, pasirenkami parametrai ir numatytosios reikšmės pagal nurodymus | Parametrai naudojami teisingai, bet gali būti problemų su numatytaisiais | Parametrų įgyvendinimas neteisingas arba trūksta |
| **Grąžinamos reikšmės** | Reikšmes grąžinančios funkcijos tai daro teisingai, o nevykdančios grąžinimo tik atlieka veiksmus | Dauguma grąžinamų reikšmių teisingos su mažomis klaidomis | Reikšmingos problemos su grąžinimo sakiniais |
| **Kodo kokybė** | Švarus, gerai sutvarkytas kodas su prasmingais kintamųjų pavadinimais ir tinkama įtrauka | Kodas veikia, bet galėtų būti skaidresnis ar geriau suorganizuotas | Kodą sunku skaityti arba jis prastai struktūruotas |
| **Testavimas** | Visos funkcijos išbandytos tinkamais kvietimais ir rezultatai aiškiai pateikti | Dauguma funkcijų pakankamai testuotos | Ribotas arba neteisingas funkcijų testavimas |

## Papildomos užduotys (pasirinktinai)

Jei norite save dar labiau išbandyti:

1. **Sukurkite viena iš savo funkcijų rodyklės (arrow function) versiją**
2. **Sukurkite funkciją, kuri priima kitą funkciją kaip parametrą** (kaip `setTimeout` pavyzdžiai pamokoje)
3. **Pridėkite įvesties patikrinimą**, kad užtikrintumėte, jog jūsų funkcijos tvarkingai apdoroja netinkamus duomenis

---

> 💡 **Patarimas**: Nepamirškite atidaryti naršyklės kūrėjo konsolės (F12), kad matytumėte savo `console.log()` išvestį!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojantis dirbtinio intelekto vertimo paslauga [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, atkreipkite dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojamas profesionalus žmogaus vertimas. Mes neatsakome už jokius nesusipratimus ar klaidingą aiškinimą, kylančius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->