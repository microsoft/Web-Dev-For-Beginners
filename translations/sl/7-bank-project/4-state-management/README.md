<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b46acf79da8550d76445eed00b06c878",
  "translation_date": "2025-10-03T13:18:16+00:00",
  "source_file": "7-bank-project/4-state-management/README.md",
  "language_code": "sl"
}
-->
# Ustvarjanje bančne aplikacije, 4. del: Koncepti upravljanja stanja

## Predhodni kviz

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/47)

### Uvod

Ko spletna aplikacija raste, postane težko slediti vsem tokovom podatkov. Kateri del kode pridobi podatke, katera stran jih uporablja, kje in kdaj jih je treba posodobiti... hitro se lahko znajdemo z zmedeno kodo, ki jo je težko vzdrževati. To je še posebej res, ko je treba podatke deliti med različnimi stranmi aplikacije, na primer podatke o uporabniku. Koncept *upravljanja stanja* je vedno obstajal v vseh vrstah programov, vendar je zaradi naraščajoče kompleksnosti spletnih aplikacij zdaj ključna točka, o kateri je treba razmišljati med razvojem.

V tem zadnjem delu bomo pregledali aplikacijo, ki smo jo zgradili, da ponovno premislimo, kako je stanje upravljano, kar omogoča podporo osvežitvi brskalnika kadarkoli in ohranjanje podatkov med uporabniškimi sejami.

### Predpogoji

Za to lekcijo morate dokončati [pridobivanje podatkov](../3-data/README.md) v aplikaciji. Prav tako morate namestiti [Node.js](https://nodejs.org) in [zagnati strežniški API](../api/README.md) lokalno, da lahko upravljate podatke o računih.

Preverite, ali strežnik pravilno deluje, tako da v terminalu zaženete naslednji ukaz:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Ponovno premislimo upravljanje stanja

V [prejšnji lekciji](../3-data/README.md) smo predstavili osnovni koncept stanja v naši aplikaciji z globalno spremenljivko `account`, ki vsebuje bančne podatke trenutno prijavljenega uporabnika. Vendar ima naša trenutna implementacija nekaj pomanjkljivosti. Poskusite osvežiti stran, ko ste na nadzorni plošči. Kaj se zgodi?

Trenutna koda ima tri težave:

- Stanje ni ohranjeno, saj vas osvežitev brskalnika vrne na stran za prijavo.
- Obstaja več funkcij, ki spreminjajo stanje. Ko aplikacija raste, to lahko oteži sledenje spremembam in zlahka pozabimo posodobiti eno od njih.
- Stanje ni očiščeno, zato so podatki o računu še vedno prisotni, ko kliknete *Odjava*, čeprav ste na strani za prijavo.

Lahko bi posodobili našo kodo, da bi te težave reševali eno za drugo, vendar bi to ustvarilo več podvajanja kode in naredilo aplikacijo bolj zapleteno ter težje vzdrževano. Ali pa bi si lahko vzeli nekaj minut in premislili našo strategijo.

> Katere težave pravzaprav poskušamo rešiti tukaj?

[Upravljanje stanja](https://en.wikipedia.org/wiki/State_management) se osredotoča na iskanje dobrega pristopa za reševanje teh dveh specifičnih težav:

- Kako ohraniti tokove podatkov v aplikaciji razumljive?
- Kako ohraniti podatke o stanju vedno usklajene z uporabniškim vmesnikom (in obratno)?

Ko se lotite teh težav, so lahko vse druge težave, ki jih imate, že rešene ali pa jih je lažje rešiti. Obstaja veliko možnih pristopov za reševanje teh težav, vendar bomo uporabili običajno rešitev, ki vključuje **centralizacijo podatkov in načinov za njihovo spreminjanje**. Tokovi podatkov bi potekali takole:

![Shema, ki prikazuje tokove podatkov med HTML-jem, uporabniškimi dejanji in stanjem](../../../../translated_images/data-flow.fa2354e0908fecc89b488010dedf4871418a992edffa17e73441d257add18da4.sl.png)

> Tukaj ne bomo obravnavali dela, kjer podatki samodejno sprožijo posodobitev pogleda, saj je to povezano z naprednejšimi koncepti [reaktivnega programiranja](https://en.wikipedia.org/wiki/Reactive_programming). To je dobra tema za nadaljnje poglobljeno raziskovanje.

✅ Obstaja veliko knjižnic z različnimi pristopi k upravljanju stanja, [Redux](https://redux.js.org) pa je priljubljena izbira. Oglejte si koncepte in vzorce, ki jih uporablja, saj je to pogosto dober način za učenje o potencialnih težavah, s katerimi se lahko soočate v velikih spletnih aplikacijah, in kako jih je mogoče rešiti.

### Naloga

Začeli bomo z nekaj prestrukturiranja. Zamenjajte deklaracijo `account`:

```js
let account = null;
```

Z:

```js
let state = {
  account: null
};
```

Ideja je, da *centraliziramo* vse podatke naše aplikacije v enem samem objektu stanja. Trenutno imamo v stanju samo `account`, zato se ne spremeni veliko, vendar ustvarja pot za prihodnje nadgradnje.

Prav tako moramo posodobiti funkcije, ki ga uporabljajo. V funkcijah `register()` in `login()` zamenjajte `account = ...` z `state.account = ...`;

Na vrhu funkcije `updateDashboard()` dodajte to vrstico:

```js
const account = state.account;
```

To prestrukturiranje samo po sebi ni prineslo veliko izboljšav, vendar je ideja bila postaviti temelje za naslednje spremembe.

## Sledenje spremembam podatkov

Zdaj, ko smo vzpostavili objekt `state` za shranjevanje naših podatkov, je naslednji korak centralizacija posodobitev. Cilj je olajšati sledenje vsem spremembam in kdaj se zgodijo.

Da bi se izognili spremembam objekta `state`, je dobra praksa, da ga obravnavamo kot [*nepremičnega*](https://en.wikipedia.org/wiki/Immutable_object), kar pomeni, da ga sploh ni mogoče spreminjati. To pomeni, da morate ustvariti nov objekt stanja, če želite karkoli spremeniti v njem. S tem se zaščitite pred morebitnimi neželenimi [stranskimi učinki](https://en.wikipedia.org/wiki/Side_effect_(computer_science)) in odprete možnosti za nove funkcije v vaši aplikaciji, kot je implementacija razveljavitve/ponovne uveljavitve, hkrati pa olajšate odpravljanje napak. Na primer, lahko beležite vsako spremembo stanja in hranite zgodovino sprememb, da razumete vir napake.

V JavaScriptu lahko uporabite [`Object.freeze()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) za ustvarjanje nepremičnega objekta. Če poskušate narediti spremembe nepremičnemu objektu, bo sprožena izjema.

✅ Ali poznate razliko med *plitkim* in *globokim* nepremičnim objektom? Preberite o tem [tukaj](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#What_is_shallow_freeze).

### Naloga

Ustvarimo novo funkcijo `updateState()`:

```js
function updateState(property, newData) {
  state = Object.freeze({
    ...state,
    [property]: newData
  });
}
```

V tej funkciji ustvarjamo nov objekt stanja in kopiramo podatke iz prejšnjega stanja z uporabo [*operatorja razširitve (`...`)*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals). Nato preglasimo določeno lastnost objekta stanja z novimi podatki z uporabo [notacije z oglatimi oklepaji](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties) `[property]` za dodelitev. Na koncu zaklenemo objekt, da preprečimo spremembe z `Object.freeze()`. Trenutno imamo v stanju shranjeno samo lastnost `account`, vendar lahko s tem pristopom dodate toliko lastnosti, kot jih potrebujete.

Prav tako bomo posodobili inicializacijo `state`, da zagotovimo, da je začetno stanje tudi zamrznjeno:

```js
let state = Object.freeze({
  account: null
});
```

Nato posodobite funkcijo `register` tako, da zamenjate dodelitev `state.account = result;` z:

```js
updateState('account', result);
```

Enako storite s funkcijo `login`, tako da zamenjate `state.account = data;` z:

```js
updateState('account', data);
```

Zdaj bomo izkoristili priložnost za odpravo težave, da podatki o računu niso očiščeni, ko uporabnik klikne *Odjava*.

Ustvarite novo funkcijo `logout()`:

```js
function logout() {
  updateState('account', null);
  navigate('/login');
}
```

V `updateDashboard()` zamenjajte preusmeritev `return navigate('/login');` z `return logout();`;

Poskusite registrirati nov račun, se odjaviti in se ponovno prijaviti, da preverite, ali vse še vedno deluje pravilno.

> Nasvet: lahko si ogledate vse spremembe stanja tako, da dodate `console.log(state)` na dnu `updateState()` in odprete konzolo v orodjih za razvijalce vašega brskalnika.

## Ohranjanje stanja

Večina spletnih aplikacij mora ohraniti podatke, da lahko pravilno deluje. Vsi ključni podatki so običajno shranjeni v bazi podatkov in dostopni prek strežniškega API-ja, kot so podatki o uporabniških računih v našem primeru. Včasih pa je zanimivo ohraniti nekatere podatke v odjemalski aplikaciji, ki se izvaja v vašem brskalniku, za boljšo uporabniško izkušnjo ali za izboljšanje zmogljivosti nalaganja.

Ko želite ohraniti podatke v brskalniku, si morate zastaviti nekaj pomembnih vprašanj:

- *Ali so podatki občutljivi?* Izogibajte se shranjevanju občutljivih podatkov na odjemalcu, kot so gesla uporabnikov.
- *Kako dolgo potrebujete te podatke?* Ali nameravate dostopati do teh podatkov samo med trenutno sejo ali jih želite shraniti za vedno?

Obstaja več načinov za shranjevanje informacij znotraj spletne aplikacije, odvisno od tega, kaj želite doseči. Na primer, lahko uporabite URL-je za shranjevanje iskalne poizvedbe in jo naredite deljivo med uporabniki. Prav tako lahko uporabite [HTTP piškotke](https://developer.mozilla.org/docs/Web/HTTP/Cookies), če je treba podatke deliti s strežnikom, kot so informacije o [avtentikaciji](https://en.wikipedia.org/wiki/Authentication).

Druga možnost je uporaba ene od številnih API-jev brskalnika za shranjevanje podatkov. Dva od njih sta še posebej zanimiva:

- [`localStorage`](https://developer.mozilla.org/docs/Web/API/Window/localStorage): [Shramba ključ/vrednost](https://en.wikipedia.org/wiki/Key%E2%80%93value_database), ki omogoča ohranjanje podatkov, specifičnih za trenutno spletno mesto, med različnimi sejami. Podatki, shranjeni v njej, nikoli ne potečejo.
- [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage): deluje enako kot `localStorage`, razen da se podatki, shranjeni v njej, izbrišejo, ko se seja konča (ko se brskalnik zapre).

Upoštevajte, da oba API-ja omogočata shranjevanje samo [nizov](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String). Če želite shraniti kompleksne objekte, jih boste morali serializirati v format [JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON) z uporabo [`JSON.stringify()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).

✅ Če želite ustvariti spletno aplikacijo, ki ne deluje s strežnikom, je mogoče ustvariti bazo podatkov na odjemalcu z uporabo API-ja [`IndexedDB`](https://developer.mozilla.org/docs/Web/API/IndexedDB_API). Ta je rezerviran za napredne primere uporabe ali če morate shraniti večjo količino podatkov, saj je bolj zapleten za uporabo.

### Naloga

Želimo, da naši uporabniki ostanejo prijavljeni, dokler izrecno ne kliknejo na gumb *Odjava*, zato bomo uporabili `localStorage` za shranjevanje podatkov o računu. Najprej definirajmo ključ, ki ga bomo uporabili za shranjevanje naših podatkov.

```js
const storageKey = 'savedAccount';
```

Nato dodajte to vrstico na konec funkcije `updateState()`:

```js
localStorage.setItem(storageKey, JSON.stringify(state.account));
```

S tem bodo podatki o uporabniškem računu ohranjeni in vedno posodobljeni, saj smo prej centralizirali vse posodobitve stanja. Tukaj začnemo izkoriščati vse naše prejšnje prestrukturiranje 🙂.

Ker so podatki shranjeni, moramo poskrbeti tudi za njihovo obnovitev, ko se aplikacija naloži. Ker bomo začeli imeti več inicializacijske kode, je morda dobra ideja ustvariti novo funkcijo `init`, ki vključuje tudi našo prejšnjo kodo na dnu `app.js`:

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

Tukaj pridobimo shranjene podatke, in če obstajajo, ustrezno posodobimo stanje. Pomembno je, da to storimo *pred* posodobitvijo poti, saj lahko obstaja koda, ki se zanaša na stanje med posodobitvijo strani.

Prav tako lahko naredimo stran *Nadzorna plošča* privzeto stran naše aplikacije, saj zdaj ohranjamo podatke o računu. Če podatki niso najdeni, nadzorna plošča poskrbi za preusmeritev na stran *Prijava*. V `updateRoute()` zamenjajte privzeto `return navigate('/login');` z `return navigate('/dashboard');`.

Zdaj se prijavite v aplikacijo in poskusite osvežiti stran. Ostati bi morali na nadzorni plošči. S to posodobitvijo smo rešili vse naše začetne težave...

## Osvežitev podatkov

...Ampak morda smo ustvarili novo težavo. Ups!

Pojdite na nadzorno ploščo z računom `test`, nato zaženite ta ukaz v terminalu, da ustvarite novo transakcijo:

```sh
curl --request POST \
     --header "Content-Type: application/json" \
     --data "{ \"date\": \"2020-07-24\", \"object\": \"Bought book\", \"amount\": -20 }" \
     http://localhost:5000/api/accounts/test/transactions
```

Poskusite osvežiti stran nadzorne plošče v brskalniku zdaj. Kaj se zgodi? Ali vidite novo transakcijo?

Stanje je ohranjeno za nedoločen čas zahvaljujoč `localStorage`, vendar to pomeni, da se nikoli ne posodobi, dokler se ne odjavite iz aplikacije in se ponovno prijavite!

Ena možna strategija za odpravo tega je, da ponovno naložimo podatke o računu vsakič, ko se naloži nadzorna plošča, da se izognemo zastarelim podatkom.

### Naloga

Ustvarite novo funkcijo `updateAccountData`:

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

Ta metoda preveri, ali smo trenutno prijavljeni, nato ponovno naloži podatke o računu s strežnika.

Ustvarite drugo funkcijo z imenom `refresh`:

```js
async function refresh() {
  await updateAccountData();
  updateDashboard();
}
```

Ta funkcija posodobi podatke o računu, nato poskrbi za posodobitev HTML-ja na strani nadzorne plošče. To je tisto, kar moramo poklicati, ko se naloži pot nadzorne plošče. Posodobite definicijo poti z:

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: refresh }
};
```

Poskusite ponovno naložiti nadzorno ploščo zdaj, prikazati bi morali posodobljene podatke o računu.

---

## 🚀 Izziv

Zdaj, ko ponovno nalagamo podatke o računu vsakič, ko se naloži nadzorna plošča, ali menite, da še vedno potrebujemo ohranjanje *vseh podatkov o računu*?

Poskusite skupaj spremeniti, kaj je shranjeno in naloženo iz `localStorage`, da vključuje samo tisto, kar je absolutno potrebno za delovanje aplikacije.

## Zaključni kviz
[Kvizi po predavanju](https://ff-quizzes.netlify.app/web/quiz/48)

## Naloga

[Implementirajte dialog "Dodaj transakcijo"](assignment.md)

Tukaj je primer rezultata po zaključeni nalogi:

![Posnetek zaslona, ki prikazuje primer dialoga "Dodaj transakcijo"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.sl.png)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve AI za prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.