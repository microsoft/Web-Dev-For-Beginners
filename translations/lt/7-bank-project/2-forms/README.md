<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8baca047d77a5f43fa4099c0578afa42",
  "translation_date": "2025-08-29T16:44:50+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "lt"
}
-->
# Sukurkite banko programėlę, 2 dalis: Sukurkite prisijungimo ir registracijos formą

## Prieš paskaitą – testas

[Prieš paskaitą – testas](https://ff-quizzes.netlify.app/web/quiz/43)

### Įvadas

Beveik visose šiuolaikinėse interneto programėlėse galite susikurti paskyrą, kad turėtumėte savo asmeninę erdvę. Kadangi keli vartotojai gali vienu metu naudotis interneto programėle, reikia mechanizmo, kuris leistų atskirai saugoti kiekvieno vartotojo asmeninius duomenis ir pasirinkti, kokią informaciją rodyti. Mes neaptarsime, kaip saugiai valdyti [vartotojo tapatybę](https://en.wikipedia.org/wiki/Authentication), nes tai yra plati tema, tačiau užtikrinsime, kad kiekvienas vartotojas galėtų sukurti vieną (ar daugiau) banko sąskaitų mūsų programėlėje.

Šioje dalyje naudosime HTML formas, kad pridėtume prisijungimą ir registraciją prie mūsų interneto programėlės. Pamatysime, kaip programiškai siųsti duomenis į serverio API, ir galiausiai apibrėšime pagrindines vartotojo įvesties validacijos taisykles.

### Būtinos sąlygos

Turite būti baigę [HTML šablonų ir maršrutų](../1-template-route/README.md) pamoką, skirtą interneto programėlei. Taip pat turite įdiegti [Node.js](https://nodejs.org) ir [paleisti serverio API](../api/README.md) lokaliai, kad galėtumėte siųsti duomenis sąskaitų kūrimui.

**Svarbu**
Vienu metu turėsite paleisti du terminalus, kaip nurodyta žemiau:
1. Pagrindinei banko programėlei, kurią sukūrėme [HTML šablonų ir maršrutų](../1-template-route/README.md) pamokoje.
2. [Banko programėlės serverio API](../api/README.md), kurią ką tik nustatėme aukščiau.

Norint tęsti pamoką, abu serveriai turi būti paleisti. Jie klausosi skirtinguose portuose (portas `3000` ir portas `5000`), todėl viskas turėtų veikti sklandžiai.

Galite patikrinti, ar serveris veikia tinkamai, vykdydami šią komandą terminale:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Forma ir valdikliai

`<form>` elementas apima HTML dokumento dalį, kur vartotojas gali įvesti ir pateikti duomenis naudodamas interaktyvius valdiklius. Yra įvairių vartotojo sąsajos (UI) valdiklių, kuriuos galima naudoti formoje, dažniausiai naudojami `<input>` ir `<button>` elementai.

Yra daug skirtingų [tipų](https://developer.mozilla.org/docs/Web/HTML/Element/input) `<input>`. Pavyzdžiui, norėdami sukurti lauką, kuriame vartotojas gali įvesti savo vartotojo vardą, galite naudoti:

```html
<input id="username" name="username" type="text">
```

`name` atributas bus naudojamas kaip savybės pavadinimas, kai formos duomenys bus siunčiami. `id` atributas naudojamas `<label>` susieti su formos valdikliu.

> Peržiūrėkite visą [`<input>` tipų](https://developer.mozilla.org/docs/Web/HTML/Element/input) ir [kitų formos valdiklių](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) sąrašą, kad susipažintumėte su visais natyviais UI elementais, kuriuos galite naudoti kurdami savo sąsają.

✅ Atkreipkite dėmesį, kad `<input>` yra [tuščias elementas](https://developer.mozilla.org/docs/Glossary/Empty_element), kuriam *nereikia* pridėti atitinkamos uždarymo žymos. Tačiau galite naudoti savarankiškai užsidarančią `<input/>` notaciją, tačiau tai nėra būtina.

`<button>` elementas formoje yra šiek tiek ypatingas. Jei nenurodysite jo `type` atributo, jis automatiškai pateiks formos duomenis serveriui, kai bus paspaustas. Štai galimos `type` reikšmės:

- `submit`: Numatytoji forma, mygtukas inicijuoja formos pateikimo veiksmą.
- `reset`: Mygtukas atstato visus formos valdiklius į jų pradinius nustatymus.
- `button`: Neskiria numatytojo elgesio, kai mygtukas paspaudžiamas. Galite priskirti jam pasirinktines funkcijas naudodami JavaScript.

### Užduotis

Pradėkime pridėdami formą prie `login` šablono. Mums reikės *vartotojo vardo* lauko ir *Prisijungimo* mygtuko.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Jei atidžiau pažvelgsite, pastebėsite, kad čia taip pat pridėjome `<label>` elementą. `<label>` elementai naudojami UI valdikliams pavadinti, pvz., mūsų vartotojo vardo laukui. Etiketės yra svarbios formų skaitomumui, tačiau jos taip pat turi papildomų privalumų:

- Susiejus etiketę su formos valdikliu, tai padeda vartotojams, naudojantiems pagalbines technologijas (pvz., ekrano skaitytuvus), suprasti, kokius duomenis jie turėtų pateikti.
- Galite spustelėti etiketę, kad tiesiogiai sutelktumėte dėmesį į susijusį įvesties lauką, todėl jį lengviau pasiekti įrenginiuose su jutikliniu ekranu.

> [Prieinamumas](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) internete yra labai svarbi tema, kuri dažnai ignoruojama. Dėl [semantinių HTML elementų](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) nėra sunku sukurti prieinamą turinį, jei juos tinkamai naudojate. Galite [skaityti daugiau apie prieinamumą](https://developer.mozilla.org/docs/Web/Accessibility), kad išvengtumėte dažniausiai pasitaikančių klaidų ir taptumėte atsakingu kūrėju.

Dabar pridėsime antrą formą registracijai, tiesiai po ankstesne:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

Naudodami `value` atributą galime apibrėžti numatytąją reikšmę tam tikram įvesties laukui.
Taip pat pastebėkite, kad `balance` įvesties laukas turi `number` tipą. Ar jis atrodo kitaip nei kiti įvesties laukai? Pabandykite su juo sąveikauti.

✅ Ar galite naršyti ir sąveikauti su formomis naudodami tik klaviatūrą? Kaip tai padarytumėte?

## Duomenų pateikimas serveriui

Dabar, kai turime funkcionalią vartotojo sąsają, kitas žingsnis yra duomenų siuntimas į serverį. Atlikime greitą testą naudodami dabartinį kodą: kas nutinka, jei spustelėsite *Prisijungti* arba *Registruotis* mygtuką?

Ar pastebėjote pokytį naršyklės URL skiltyje?

![Naršyklės URL pokyčio ekrano nuotrauka po mygtuko Registruotis paspaudimo](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.lt.png)

Numatytoji `<form>` veiksena yra pateikti formą dabartiniam serverio URL naudojant [GET metodą](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), pridedant formos duomenis tiesiai prie URL. Tačiau šis metodas turi keletą trūkumų:

- Siunčiamų duomenų dydis yra labai ribotas (apie 2000 simbolių).
- Duomenys tiesiogiai matomi URL (negerai slaptažodžiams).
- Jis neveikia su failų įkėlimais.

Todėl galite pakeisti jį naudoti [POST metodą](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5), kuris siunčia formos duomenis serveriui HTTP užklausos kūne, be ankstesnių apribojimų.

> Nors POST yra dažniausiai naudojamas metodas duomenims siųsti, [tam tikrose specifinėse situacijose](https://www.w3.org/2001/tag/doc/whenToUseGet.html) geriau naudoti GET metodą, pavyzdžiui, įgyvendinant paieškos lauką.

### Užduotis

Pridėkite `action` ir `method` atributus registracijos formai:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Dabar pabandykite užregistruoti naują paskyrą su savo vardu. Paspaudus *Registruotis* mygtuką, turėtumėte pamatyti kažką panašaus:

![Naršyklės langas adresu localhost:5000/api/accounts, rodantis JSON eilutę su vartotojo duomenimis](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.lt.png)

Jei viskas vyksta gerai, serveris turėtų atsakyti į jūsų užklausą JSON formatu, kuriame yra sukurti paskyros duomenys.

✅ Pabandykite registruotis dar kartą su tuo pačiu vardu. Kas nutinka?

## Duomenų pateikimas be puslapio perkrovimo

Kaip turbūt pastebėjote, yra nedidelė problema su mūsų naudotu metodu: pateikus formą, išeiname iš savo programėlės, o naršyklė nukreipia į serverio URL. Mes stengiamės išvengti visų puslapio perkrovimų savo interneto programėlėje, nes kuriame [vieno puslapio programėlę (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Norėdami siųsti formos duomenis serveriui be puslapio perkrovimo, turime naudoti JavaScript kodą. Vietoj URL `action` atributo `<form>` elemente galite naudoti bet kokį JavaScript kodą, pridedant `javascript:` eilutę, kad atliktumėte pasirinktą veiksmą. Naudodami tai taip pat turėsite įgyvendinti kai kurias užduotis, kurias anksčiau automatiškai atlikdavo naršyklė:

- Gauti formos duomenis.
- Konvertuoti ir užkoduoti formos duomenis tinkamu formatu.
- Sukurti HTTP užklausą ir išsiųsti ją serveriui.

### Užduotis

Pakeiskite registracijos formos `action` į:

```html
<form id="registerForm" action="javascript:register()">
```

Atidarykite `app.js` ir pridėkite naują funkciją, pavadintą `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Čia mes gauname formos elementą naudodami `getElementById()` ir naudojame [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) pagalbinį įrankį, kad išgautume reikšmes iš formos valdiklių kaip raktų/reikšmių poras. Tada konvertuojame duomenis į įprastą objektą naudodami [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) ir galiausiai serializuojame duomenis į [JSON](https://www.json.org/json-en.html), formatą, dažnai naudojamą duomenų mainams internete.

Duomenys dabar paruošti siuntimui serveriui. Sukurkite naują funkciją, pavadintą `createAccount`:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Ką daro ši funkcija? Pirmiausia atkreipkite dėmesį į `async` raktinį žodį. Tai reiškia, kad funkcija turi kodą, kuris vykdys [**asinchroniškai**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Naudojant `await` raktinį žodį, galima laukti, kol asinchroninis kodas bus vykdomas – kaip laukiant serverio atsakymo – prieš tęsiant.

Štai trumpas vaizdo įrašas apie `async/await` naudojimą:

[![Async ir Await pažadų valdymui](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async ir Await pažadų valdymui")

> 🎥 Spustelėkite aukščiau esančią nuotrauką, kad pamatytumėte vaizdo įrašą apie async/await.

Naudojame `fetch()` API, kad išsiųstume JSON duomenis serveriui. Šis metodas priima 2 parametrus:

- Serverio URL, todėl čia grąžiname `//localhost:5000/api/accounts`.
- Užklausos nustatymai. Čia nustatome metodą kaip `POST` ir pateikiame `body` užklausai. Kadangi siunčiame JSON duomenis serveriui, taip pat turime nustatyti `Content-Type` antraštę kaip `application/json`, kad serveris žinotų, kaip interpretuoti turinį.

Kadangi serveris atsakys į užklausą JSON formatu, galime naudoti `await response.json()`, kad išanalizuotume JSON turinį ir grąžintume gautą objektą. Atkreipkite dėmesį, kad šis metodas yra asinchroninis, todėl čia naudojame `await` raktinį žodį, kad įsitikintume, jog bet kokios klaidos analizės metu taip pat bus užfiksuotos.

Dabar pridėkite šiek tiek kodo į `register` funkciją, kad iškviestumėte `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Kadangi čia naudojame `await` raktinį žodį, turime pridėti `async` raktinį žodį prieš register funkciją:

```js
async function register() {
```

Galiausiai pridėkime keletą žurnalų, kad patikrintume rezultatą. Galutinė funkcija turėtų atrodyti taip:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

Tai buvo šiek tiek ilga, bet mes pasiekėme tikslą! Jei atidarysite [naršyklės kūrėjo įrankius](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) ir pabandysite užregistruoti naują paskyrą, neturėtumėte matyti jokių pokyčių interneto puslapyje, tačiau konsolėje pasirodys pranešimas, patvirtinantis, kad viskas veikia.

![Ekrano nuotrauka, rodanti žurnalo pranešimą naršyklės konsolėje](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.lt.png)

✅ Ar manote, kad duomenys siunčiami serveriui saugiai? Kas, jei kas nors galėtų perimti užklausą? Galite perskaityti apie [HTTPS](https://en.wikipedia.org/wiki/HTTPS), kad sužinotumėte daugiau apie saugų duomenų perdavimą.

## Duomenų validacija

Jei bandysite užregistruoti naują paskyrą, nepateikę vartotojo vardo, galite pamatyti, kad serveris grąžina klaidą su statuso kodu [400 (Bloga užklausa)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Prieš siunčiant duomenis serveriui, gerai praktikuoti [validuoti formos duomenis](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) iš anksto, kai tai įmanoma, kad įsitikintumėte, jog siunčiate galiojančią užklausą. HTML5 formos valdikliai suteikia įmontuotą validaciją naudojant įvairius atributus:

- `required`: lauką reikia užpildyti, kitaip forma negali būti pateikta.
- `minlength` ir `maxlength`: apibrėžia minimalų ir maksimalų simbolių skaičių tekstiniuose laukuose.
- `min` ir `max`: apibrėžia minimalią ir maksimalią skaitinio lauko reikšmę.
- `type`: apibrėžia tikėtinų duomenų tipą, pvz., `number`, `email`, `file` ar [kitus įmontuotus tipus](https://developer.mozilla.org/docs/Web/HTML/Element/input). Šis atributas taip pat gali pakeisti formos valdiklio vizualinį vaizdą.
- `pattern`: leidžia apibrėžti [reguliariąją išraišką](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions), kad patikrintumėte, ar įvesti duomenys yra galiojantys.
Patarimas: galite pritaikyti formos valdiklių išvaizdą, priklausomai nuo to, ar jie yra galiojantys, ar ne, naudodami CSS pseudo-klases `:valid` ir `:invalid`.
### Užduotis

Norint sukurti galiojančią naują paskyrą, būtini du laukai: vartotojo vardas ir valiuta, o kiti laukai yra neprivalomi. Atnaujinkite formos HTML, naudodami tiek `required` atributą, tiek tekstą lauko etiketėje, kad:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Nors ši konkreti serverio įgyvendinimo versija nenustato specifinių ribų laukų maksimaliam ilgiui, visada yra gera praktika apibrėžti pagrįstas ribas bet kokiam vartotojo teksto įvedimui.

Pridėkite `maxlength` atributą teksto laukams:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Dabar, jei paspausite mygtuką *Registruotis* ir kuris nors laukas neatitiks mūsų apibrėžtos validacijos taisyklės, turėtumėte pamatyti kažką panašaus į tai:

![Ekrano nuotrauka, rodanti validacijos klaidą bandant pateikti formą](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.lt.png)

Tokio tipo validacija, atliekama *prieš* siunčiant bet kokius duomenis į serverį, vadinama **kliento pusės** validacija. Tačiau atkreipkite dėmesį, kad ne visada įmanoma atlikti visus patikrinimus nesiunčiant duomenų. Pavyzdžiui, mes negalime patikrinti, ar paskyra su tuo pačiu vartotojo vardu jau egzistuoja, nesiuntę užklausos į serverį. Papildoma validacija, atliekama serveryje, vadinama **serverio pusės** validacija.

Paprastai reikia įgyvendinti abi validacijos rūšis. Nors kliento pusės validacija pagerina vartotojo patirtį, suteikdama greitą grįžtamąjį ryšį, serverio pusės validacija yra būtina, kad užtikrintumėte, jog vartotojo duomenys, su kuriais dirbate, yra patikimi ir saugūs.

---

## 🚀 Iššūkis

Rodykite klaidos pranešimą HTML, jei vartotojas jau egzistuoja.

Štai pavyzdys, kaip gali atrodyti galutinis prisijungimo puslapis po šiek tiek stiliaus pritaikymo:

![Ekrano nuotrauka, rodanti prisijungimo puslapį po CSS stilių pridėjimo](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.lt.png)

## Po paskaitos testas

[Po paskaitos testas](https://ff-quizzes.netlify.app/web/quiz/44)

## Apžvalga ir savarankiškas mokymasis

Programuotojai tapo labai kūrybingi kurdami formas, ypač kalbant apie validacijos strategijas. Sužinokite apie skirtingus formų kūrimo būdus, peržiūrėdami [CodePen](https://codepen.com); ar galite rasti įdomių ir įkvepiančių formų?

## Užduotis

[Stilizuokite savo banko programėlę](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.