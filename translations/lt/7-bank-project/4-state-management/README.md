<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5d2efabbc8f94d89f4317ee8646c3ce9",
  "translation_date": "2025-08-29T16:45:53+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "lt"
}
-->
# Sukurkite bankinę programėlę, 4 dalis: Būsenos valdymo koncepcijos

## Klausimai prieš paskaitą

[Prieš paskaitą pateikiamas klausimynas](https://ff-quizzes.netlify.app/web/quiz/47)

### Įvadas

Kai internetinė programėlė auga, tampa sudėtinga sekti visus duomenų srautus. Kuris kodas gauna duomenis, kuris puslapis juos naudoja, kur ir kada juos reikia atnaujinti... lengva pasimesti ir sukurti netvarkingą kodą, kurį sunku prižiūrėti. Tai ypač aktualu, kai reikia dalintis duomenimis tarp skirtingų programėlės puslapių, pavyzdžiui, vartotojo duomenimis. *Būsenos valdymo* koncepcija visada egzistavo įvairiose programose, tačiau, augant internetinių programėlių sudėtingumui, tai tapo svarbiu aspektu kuriant programas.

Šioje paskutinėje dalyje peržiūrėsime sukurtą programėlę, kad iš naujo apgalvotume, kaip valdoma būsena, leisdami palaikyti naršyklės atnaujinimą bet kuriuo metu ir išsaugoti duomenis tarp vartotojo sesijų.

### Privalomos sąlygos

Prieš šią pamoką turite būti baigę [duomenų gavimo](../3-data/README.md) dalį. Taip pat turite įdiegti [Node.js](https://nodejs.org) ir [paleisti serverio API](../api/README.md) lokaliai, kad galėtumėte valdyti paskyros duomenis.

Galite patikrinti, ar serveris veikia tinkamai, vykdydami šią komandą terminale:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Iš naujo apgalvokite būsenos valdymą

[Ankstesnėje pamokoje](../3-data/README.md) pristatėme pagrindinę būsenos koncepciją mūsų programėlėje su globaliu `account` kintamuoju, kuris saugo prisijungusio vartotojo banko duomenis. Tačiau dabartinėje implementacijoje yra keletas trūkumų. Pabandykite atnaujinti puslapį, kai esate prietaisų skydelyje. Kas nutinka?

Šiuo metu yra trys problemos:

- Būsena nėra išsaugoma, nes naršyklės atnaujinimas grąžina jus į prisijungimo puslapį.
- Yra kelios funkcijos, kurios keičia būseną. Kai programėlė auga, tampa sunku sekti pakeitimus, ir lengva pamiršti atnaujinti vieną iš jų.
- Būsena nėra išvaloma, todėl paspaudus *Atsijungti* paskyros duomenys vis dar lieka, nors esate prisijungimo puslapyje.

Galėtume atnaujinti savo kodą, kad išspręstume šias problemas po vieną, tačiau tai sukurtų daugiau kodo dubliavimo ir padarytų programėlę sudėtingesnę bei sunkiau prižiūrimą. Arba galėtume skirti kelias minutes ir iš naujo apgalvoti savo strategiją.

> Kokias problemas mes iš tikrųjų bandome išspręsti?

[Būsenos valdymas](https://en.wikipedia.org/wiki/State_management) yra apie geros strategijos radimą, kaip išspręsti šias dvi pagrindines problemas:

- Kaip padaryti, kad duomenų srautai programėlėje būtų suprantami?
- Kaip užtikrinti, kad būsenos duomenys visada būtų sinchronizuoti su vartotojo sąsaja (ir atvirkščiai)?

Kai pasirūpinsite šiomis problemomis, bet kokios kitos problemos, su kuriomis galite susidurti, gali būti jau išspręstos arba tapti lengviau išsprendžiamos. Yra daug galimų būdų šioms problemoms spręsti, tačiau mes pasirinkime bendrą sprendimą, kuris apima **duomenų ir jų keitimo būdų centralizavimą**. Duomenų srautai atrodytų taip:

![Schema, rodanti duomenų srautus tarp HTML, vartotojo veiksmų ir būsenos](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.lt.png)

> Čia neaptarsime dalies, kurioje duomenys automatiškai atnaujina vaizdą, nes tai susiję su pažangesnėmis [reaktyviosios programavimo](https://en.wikipedia.org/wiki/Reactive_programming) koncepcijomis. Tai gera tema gilintis, jei norite išsamiau suprasti.

✅ Yra daug bibliotekų su skirtingais būsenos valdymo metodais, [Redux](https://redux.js.org) yra populiarus pasirinkimas. Susipažinkite su naudojamomis koncepcijomis ir šablonais, nes tai dažnai yra geras būdas sužinoti, su kokiomis problemomis galite susidurti didelėse internetinėse programėlėse ir kaip jas galima išspręsti.

### Užduotis

Pradėsime nuo nedidelio kodo pertvarkymo. Pakeiskite `account` deklaraciją:

```js
let account = null;
```

Į:

```js
let state = {
  account: null
};
```

Idėja yra *centralizuoti* visus mūsų programėlės duomenis viename būsenos objekte. Šiuo metu būsenoje turime tik `account`, todėl tai daug nepakeičia, tačiau tai sukuria pagrindą ateities pakeitimams.

Taip pat turime atnaujinti funkcijas, kurios jį naudoja. `register()` ir `login()` funkcijose pakeiskite `account = ...` į `state.account = ...`;

`updateDashboard()` funkcijos pradžioje pridėkite šią eilutę:

```js
const account = state.account;
```

Šis pertvarkymas pats savaime neatnešė daug patobulinimų, tačiau idėja buvo sukurti pagrindą kitiems pakeitimams.

## Sekite duomenų pakeitimus

Dabar, kai sukūrėme `state` objektą duomenims saugoti, kitas žingsnis yra centralizuoti atnaujinimus. Tikslas yra palengvinti bet kokių pakeitimų sekimą ir supratimą, kada jie įvyksta.

Kad būtų išvengta pakeitimų `state` objekte, taip pat yra gera praktika laikyti jį [*nekintamu*](https://en.wikipedia.org/wiki/Immutable_object), tai reiškia, kad jo negalima visiškai modifikuoti. Tai taip pat reiškia, kad jei norite ką nors pakeisti, turite sukurti naują būsenos objektą. Taip apsisaugosite nuo galimų nepageidaujamų [šalutinių poveikių](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) ir atversite galimybes naujoms funkcijoms, tokioms kaip atšaukimo/atstatymo įgyvendinimas, taip pat palengvinsite derinimą. Pavyzdžiui, galėtumėte registruoti kiekvieną būsenos pakeitimą ir išsaugoti jų istoriją, kad suprastumėte klaidos šaltinį.

JavaScript'e galite naudoti [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), kad sukurtumėte nekintamą objekto versiją. Jei bandysite pakeisti nekintamą objektą, bus išmesta išimtis.

✅ Ar žinote skirtumą tarp *paviršutiniškai* ir *giliai* nekintamo objekto? Apie tai galite paskaityti [čia](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Užduotis

Sukurkime naują `updateState()` funkciją:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

Šioje funkcijoje sukuriame naują būsenos objektą ir kopijuojame duomenis iš ankstesnės būsenos naudodami [*sklaidos operatorių (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Tada perrašome tam tikrą būsenos objekto savybę naujais duomenimis naudodami [skliaustelių notaciją](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]`. Galiausiai užrakiname objektą, kad išvengtume pakeitimų, naudodami `Object.freeze()`. Šiuo metu būsenoje saugome tik `account`, tačiau naudodami šį metodą galime pridėti tiek savybių, kiek reikia.

Taip pat atnaujinsime `state` inicializaciją, kad įsitikintume, jog pradinė būsena taip pat yra užšaldyta:

```js
let state = Object.freeze({
  account: null
});
```

Po to atnaujinkite `register` funkciją, pakeisdami `state.account = result;` į:

```js
updateState('account', result);
```

Tą patį padarykite su `login` funkcija, pakeisdami `state.account = data;` į:

```js
updateState('account', data);
```

Dabar pasinaudosime proga išspręsti problemą, kai paskyros duomenys nėra išvalomi, kai vartotojas paspaudžia *Atsijungti*.

Sukurkite naują funkciją `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

`updateDashboard()` funkcijoje pakeiskite peradresavimą `return navigate('/login');` į `return logout();`

Pabandykite užregistruoti naują paskyrą, atsijungti ir vėl prisijungti, kad patikrintumėte, ar viskas veikia tinkamai.

> Patarimas: galite peržiūrėti visus būsenos pakeitimus, pridėdami `console.log(state)` `updateState()` funkcijos apačioje ir atidarę naršyklės kūrimo įrankių konsolę.

## Išsaugokite būseną

Dauguma internetinių programėlių turi išsaugoti duomenis, kad galėtų tinkamai veikti. Visi svarbūs duomenys paprastai saugomi duomenų bazėje ir pasiekiami per serverio API, kaip mūsų atveju vartotojo paskyros duomenys. Tačiau kartais taip pat naudinga išsaugoti kai kuriuos duomenis kliento programėlėje, kuri veikia jūsų naršyklėje, siekiant geresnės vartotojo patirties arba pagerinti įkėlimo našumą.

Kai norite išsaugoti duomenis naršyklėje, turėtumėte užduoti sau keletą svarbių klausimų:

- *Ar duomenys yra jautrūs?* Turėtumėte vengti saugoti bet kokius jautrius duomenis kliente, pavyzdžiui, vartotojo slaptažodžius.
- *Kiek laiko jums reikia išlaikyti šiuos duomenis?* Ar planuojate naudoti šiuos duomenis tik dabartinei sesijai, ar norite, kad jie būtų saugomi visam laikui?

Yra keli būdai saugoti informaciją internetinėje programėlėje, priklausomai nuo to, ką norite pasiekti. Pavyzdžiui, galite naudoti URL, kad saugotumėte paieškos užklausą ir padarytumėte ją dalinamą tarp vartotojų. Taip pat galite naudoti [HTTP slapukus](https://developer.mozilla.org/docs/Web/HTTP/Cookies), jei duomenys turi būti bendrinami su serveriu, pavyzdžiui, [autentifikacijos](https://en.wikipedia.org/wiki/Authentication) informacija.

Kita galimybė yra naudoti vieną iš daugelio naršyklės API duomenims saugoti. Dvi iš jų yra ypač įdomios:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): [Raktų/Verčių saugykla](https://en.wikipedia.org/wiki/Key%E2%80%93value_database), leidžianti išsaugoti duomenis, susijusius su dabartine svetaine, tarp skirtingų sesijų. Išsaugoti duomenys niekada neišnyksta.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): veikia taip pat kaip `localStorage`, išskyrus tai, kad saugomi duomenys ištrinami, kai sesija baigiasi (kai naršyklė uždaroma).

Atkreipkite dėmesį, kad abi šios API leidžia saugoti tik [eilutes](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Jei norite saugoti sudėtingus objektus, turėsite juos serializuoti į [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) formatą, naudodami [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Jei norite sukurti internetinę programėlę, kuri neveikia su serveriu, taip pat galima sukurti duomenų bazę kliente, naudojant [`IndexedDB` API](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Ši galimybė skirta pažangesniems atvejams arba jei reikia saugoti didelį duomenų kiekį, nes ją naudoti yra sudėtingiau.

### Užduotis

Norime, kad mūsų vartotojai liktų prisijungę, kol jie aiškiai nepaspaudžia *Atsijungti* mygtuko, todėl naudosime `localStorage`, kad išsaugotume paskyros duomenis. Pirmiausia apibrėžkime raktą, kurį naudosime duomenims saugoti.

```js
const storageKey = 'savedAccount';
```

Tada pridėkite šią eilutę `updateState()` funkcijos pabaigoje:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

Taip vartotojo paskyros duomenys bus išsaugoti ir visada atnaujinami, nes anksčiau centralizavome visus būsenos atnaujinimus. Štai kur pradedame naudotis visais ankstesniais pertvarkymais 🙂.

Kadangi duomenys yra išsaugoti, taip pat turime pasirūpinti jų atkūrimu, kai programėlė įkeliama. Kadangi pradėsime turėti daugiau inicializacijos kodo, gali būti gera idėja sukurti naują `init` funkciją, kuri taip pat apimtų ankstesnį kodą `app.js` apačioje:

```js
function init() {
  const savedAccount = localStorage.getItem(storageKey);
  if (savedAccount) {
    updateState('account', JSON.parse(savedAccount));
  }

  // Our previous initialization code
  window.onpopstate = () => updateRoute();
  updateRoute();
}

init();
```

Čia atkuriame išsaugotus duomenis, ir jei jų yra, atnaujiname būseną atitinkamai. Svarbu tai padaryti *prieš* atnaujinant maršrutą, nes gali būti kodo, kuris remiasi būsena puslapio atnaujinimo metu.

Taip pat galime padaryti *Prietaisų skydelio* puslapį mūsų programėlės numatytuoju puslapiu, nes dabar išsaugome paskyros duomenis. Jei duomenų nerandama, prietaisų skydelis vis tiek pasirūpina peradresavimu į *Prisijungimo* puslapį. `updateRoute()` funkcijoje pakeiskite numatytąjį `return navigate('/login');` į `return navigate('/dashboard');`.

Dabar prisijunkite prie programėlės ir pabandykite atnaujinti puslapį. Turėtumėte likti prietaisų skydelyje. Su šiuo atnaujinimu išsprendėme visas pradines problemas...

## Atnaujinkite duomenis

...Tačiau galbūt sukūrėme naują problemą. Ups!

Eikite į prietaisų skydelį naudodami `test` paskyrą, tada paleiskite šią komandą terminale, kad sukurtumėte naują operaciją:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Dabar pabandykite atnaujinti prietaisų skydelio puslapį naršyklėje. Kas nutinka? Ar matote naują operaciją?

Būsena yra išsaugota neribotam laikui dėl `localStorage`, tačiau tai taip pat reiškia, kad ji niekada neatnaujinama, kol neišsijungiate iš programėlės ir vėl neprisijungiate!

Vienas galimas sprendimas yra atnaujinti paskyros duomenis kiekvieną kartą, kai įkeliama prietaisų skydelio puslapis, kad būtų išvengta pasenusių duomenų.

### Užduotis

Sukurkite naują funkciją `updateAccountData`:

```js
async function updateAccountData() {
  const account = state.account;
  if (!account) {
    return logout();
  }

  const data = await getAccount(account.user);
  if (data.error) {
    return logout();
  }

  updateState('account', data);
}
```

Šis metodas patikrina, ar šiuo metu esame prisijungę, tada iš naujo įkelia paskyros duomenis iš serverio.

Sukurkite kitą funkciją, pavadintą `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Ši funkcija atnaujina paskyros duomenis, tada pasirūpina prietaisų skydelio puslapio HTML atnaujinimu. Tai yra tai, ką turime iškviesti, kai įkeliama prietaisų skydelio maršrutas. Atnaujinkite maršruto apibrėžimą su:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Dabar pabandykite atnaujinti
[Įgyvendinti „Pridėti operaciją“ dialogą](assignment.md)

Štai pavyzdys, kaip turėtų atrodyti dialogas po užduoties atlikimo:

![Ekrano nuotrauka, rodanti pavyzdinį „Pridėti operaciją“ dialogą](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.lt.png)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.