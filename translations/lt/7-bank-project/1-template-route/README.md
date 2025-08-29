<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8a07db14e75ac62f013b7de5df05981d",
  "translation_date": "2025-08-29T16:46:42+00:00",
  "source_file": "7-bank-project/1-template-route/README.md",
  "language_code": "lt"
}
-->
# Sukurkite banko programėlę 1 dalis: HTML šablonai ir maršrutai žiniatinklio programėlėje

## Prieš paskaitą: testas

[Prieš paskaitą: testas](https://ff-quizzes.netlify.app/web/quiz/41)

### Įvadas

Nuo tada, kai naršyklėse atsirado JavaScript, svetainės tapo interaktyvesnės ir sudėtingesnės nei bet kada anksčiau. Žiniatinklio technologijos dabar dažnai naudojamos kuriant visiškai funkcionalias programėles, kurios veikia tiesiogiai naršyklėje ir vadinamos [žiniatinklio programėlėmis](https://en.wikipedia.org/wiki/Web_application). Kadangi žiniatinklio programėlės yra labai interaktyvios, vartotojai nenori laukti, kol puslapis bus visiškai perkrautas kiekvieną kartą atliekant veiksmą. Todėl JavaScript naudojamas HTML atnaujinimui tiesiogiai per DOM, kad būtų užtikrinta sklandesnė vartotojo patirtis.

Šioje pamokoje mes sukursime pagrindus banko žiniatinklio programėlei, naudodami HTML šablonus, kad sukurtume kelis ekranus, kurie gali būti rodomi ir atnaujinami be viso HTML puslapio perkrovimo.

### Būtinos žinios

Jums reikės vietinio žiniatinklio serverio, kad galėtumėte išbandyti žiniatinklio programėlę, kurią kursime šioje pamokoje. Jei jo neturite, galite įdiegti [Node.js](https://nodejs.org) ir naudoti komandą `npx lite-server` iš savo projekto aplanko. Tai sukurs vietinį žiniatinklio serverį ir atidarys jūsų programėlę naršyklėje.

### Pasiruošimas

Savo kompiuteryje sukurkite aplanką pavadinimu `bank` su failu `index.html` viduje. Pradėsime nuo šio HTML [šablono](https://en.wikipedia.org/wiki/Boilerplate_code):

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bank App</title>
  </head>
  <body>
    <!-- This is where you'll work -->
  </body>
</html>
```

---

## HTML šablonai

Jei norite sukurti kelis ekranus žiniatinklio puslapiui, vienas sprendimas būtų sukurti po vieną HTML failą kiekvienam ekranui, kurį norite rodyti. Tačiau šis sprendimas turi tam tikrų nepatogumų:

- Perjungiant ekraną reikia iš naujo įkelti visą HTML, o tai gali būti lėta.
- Sunku dalintis duomenimis tarp skirtingų ekranų.

Kitas požiūris yra turėti tik vieną HTML failą ir apibrėžti kelis [HTML šablonus](https://developer.mozilla.org/docs/Web/HTML/Element/template), naudojant `<template>` elementą. Šablonas yra pakartotinai naudojamas HTML blokas, kuris naršyklėje nerodomas ir turi būti sukurtas vykdymo metu naudojant JavaScript.

### Užduotis

Sukursime banko programėlę su dviem ekranais: prisijungimo puslapiu ir prietaisų skydeliu. Pirmiausia pridėkime HTML kūne vietos rezervavimo elementą, kurį naudosime skirtingiems programėlės ekranams rodyti:

```html
<div id="app">Loading...</div>
```

Mes suteikiame jam `id`, kad vėliau būtų lengviau jį rasti naudojant JavaScript.

> Patarimas: kadangi šio elemento turinys bus pakeistas, galime įdėti įkėlimo pranešimą arba indikatorių, kuris bus rodomas, kol programėlė kraunasi.

Toliau pridėkime HTML šabloną prisijungimo puslapiui. Šiuo metu įdėsime tik pavadinimą ir skyrių su nuoroda, kurią naudosime navigacijai.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <a href="/dashboard">Login</a>
  </section>
</template>
```

Tada pridėsime kitą HTML šabloną prietaisų skydelio puslapiui. Šiame puslapyje bus skirtingi skyriai:

- Antraštė su pavadinimu ir atsijungimo nuoroda
- Dabartinis banko sąskaitos likutis
- Operacijų sąrašas, rodomas lentelėje

```html
<template id="dashboard">
  <header>
    <h1>Bank App</h1>
    <a href="/login">Logout</a>
  </header>
  <section>
    Balance: 100$
  </section>
  <section>
    <h2>Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Object</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section>
</template>
```

> Patarimas: kuriant HTML šablonus, jei norite pamatyti, kaip jie atrodys, galite užkomentuoti `<template>` ir `</template>` eilutes, apgaubdami jas `<!-- -->`.

✅ Kodėl, jūsų manymu, mes naudojame `id` atributus šablonuose? Ar galėtume naudoti ką nors kitą, pavyzdžiui, klases?

## Šablonų rodymas naudojant JavaScript

Jei bandysite dabartinį HTML failą naršyklėje, pamatysite, kad jis užstringa rodydamas `Loading...`. Taip yra todėl, kad mums reikia pridėti JavaScript kodą, kad sukurtume ir rodytume HTML šablonus.

Šablono sukūrimas paprastai atliekamas 3 etapais:

1. Rasti šablono elementą DOM'e, pavyzdžiui, naudojant [`document.getElementById`](https://developer.mozilla.org/docs/Web/API/Document/getElementById).
2. Nukopijuoti šablono elementą, naudojant [`cloneNode`](https://developer.mozilla.org/docs/Web/API/Node/cloneNode).
3. Pridėti jį prie DOM po matomu elementu, pavyzdžiui, naudojant [`appendChild`](https://developer.mozilla.org/docs/Web/API/Node/appendChild).

✅ Kodėl mums reikia nukopijuoti šabloną prieš jį pridedant prie DOM? Kas, jūsų manymu, nutiktų, jei praleistume šį žingsnį?

### Užduotis

Sukurkite naują failą pavadinimu `app.js` savo projekto aplanke ir importuokite šį failą į HTML `<head>` skyrių:

```html
<script src="app.js" defer></script>
```

Dabar `app.js` faile sukursime naują funkciją `updateRoute`:

```js
function updateRoute(templateId) {
  const template = document.getElementById(templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Čia mes atliekame būtent 3 aukščiau aprašytus žingsnius. Mes sukuriame šabloną su `templateId` ir įdedame jo nukopijuotą turinį į mūsų programėlės vietos rezervavimo elementą. Atkreipkite dėmesį, kad mums reikia naudoti `cloneNode(true)`, kad nukopijuotume visą šablono medį.

Dabar iškvieskite šią funkciją su vienu iš šablonų ir pažiūrėkite rezultatą.

```js
updateRoute('login');
```

✅ Koks šio kodo `app.innerHTML = '';` tikslas? Kas nutinka be jo?

## Maršrutų kūrimas

Kalbant apie žiniatinklio programėlę, maršrutizavimas (*Routing*) reiškia ketinimą susieti **URL** su konkrečiais ekranais, kurie turėtų būti rodomi. Svetainėje su keliais HTML failais tai daroma automatiškai, nes failų keliai atsispindi URL. Pavyzdžiui, su šiais failais jūsų projekto aplanke:

```
mywebsite/index.html
mywebsite/login.html
mywebsite/admin/index.html
```

Jei sukursite žiniatinklio serverį su `mywebsite` kaip šaknimi, URL susiejimas bus toks:

```
https://site.com            --> mywebsite/index.html
https://site.com/login.html --> mywebsite/login.html
https://site.com/admin/     --> mywebsite/admin/index.html
```

Tačiau mūsų žiniatinklio programėlei mes naudojame vieną HTML failą, kuriame yra visi ekranai, todėl šis numatytasis elgesys mums nepadės. Turime rankiniu būdu sukurti šį susiejimą ir atnaujinti rodomą šabloną naudodami JavaScript.

### Užduotis

Naudosime paprastą objektą, kad įgyvendintume [žemėlapį](https://en.wikipedia.org/wiki/Associative_array) tarp URL kelių ir mūsų šablonų. Pridėkite šį objektą savo `app.js` failo viršuje.

```js
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard' },
};
```

Dabar šiek tiek pakeiskime `updateRoute` funkciją. Vietoj to, kad tiesiogiai perduotume `templateId` kaip argumentą, norime jį gauti pirmiausia pažvelgę į dabartinį URL, o tada naudoti mūsų žemėlapį, kad gautume atitinkamą šablono ID reikšmę. Galime naudoti [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname), kad gautume tik kelio dalį iš URL.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(view);
}
```

Čia mes susiejome deklaruotus maršrutus su atitinkamu šablonu. Galite išbandyti, ar tai veikia teisingai, rankiniu būdu pakeisdami URL naršyklėje.

✅ Kas nutinka, jei įvedate nežinomą kelią URL? Kaip galėtume tai išspręsti?

## Navigacijos pridėjimas

Kitas mūsų programėlės žingsnis yra pridėti galimybę naršyti tarp puslapių, nereikia rankiniu būdu keisti URL. Tai apima du dalykus:

1. Dabartinio URL atnaujinimas
2. Rodymo šablono atnaujinimas pagal naują URL

Antrąją dalį jau pasirūpinome su `updateRoute` funkcija, todėl turime išsiaiškinti, kaip atnaujinti dabartinį URL.

Turėsime naudoti JavaScript ir konkrečiai [`history.pushState`](https://developer.mozilla.org/docs/Web/API/History/pushState), kuris leidžia atnaujinti URL ir sukurti naują įrašą naršymo istorijoje, neperkraunant HTML.

> Pastaba: Nors HTML inkarų elementas [`<a href>`](https://developer.mozilla.org/docs/Web/HTML/Element/a) gali būti naudojamas savarankiškai kuriant hipernuorodas į skirtingus URL, jis pagal numatytuosius nustatymus privers naršyklę perkrauti HTML. Šį elgesį būtina užkirsti, kai maršrutizavimas tvarkomas naudojant pasirinktą JavaScript, naudojant `preventDefault()` funkciją ant paspaudimo įvykio.

### Užduotis

Sukurkime naują funkciją, kurią galime naudoti navigacijai programėlėje:

```js
function navigate(path) {
  window.history.pushState({}, path, path);
  updateRoute();
}
```

Šis metodas pirmiausia atnaujina dabartinį URL pagal pateiktą kelią, tada atnaujina šabloną. Savybė `window.location.origin` grąžina URL šaknį, leidžiant mums rekonstruoti pilną URL iš pateikto kelio.

Dabar, kai turime šią funkciją, galime pasirūpinti problema, kuri kyla, jei kelias neatitinka jokio apibrėžto maršruto. Pakeisime `updateRoute` funkciją, pridėdami atsarginį variantą vienam iš esamų maršrutų, jei nerandame atitikmens.

```js
function updateRoute() {
  const path = window.location.pathname;
  const route = routes[path];

  if (!route) {
    return navigate('/login');
  }

  ...
```

Jei maršrutas nerandamas, dabar nukreipsime į prisijungimo puslapį.

Dabar sukurkime funkciją, kad gautume URL, kai paspaudžiama nuoroda, ir užkirstume kelią naršyklės numatytam nuorodos elgesiui:

```js
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}
```

Užbaikime navigacijos sistemą, pridėdami ryšius su mūsų *Prisijungimo* ir *Atsijungimo* nuorodomis HTML.

```html
<a href="/dashboard" onclick="onLinkClick(event)">Login</a>
...
<a href="/login" onclick="onLinkClick(event)">Logout</a>
```

Aukščiau esantis `event` objektas užfiksuoja `click` įvykį ir perduoda jį mūsų `onLinkClick` funkcijai.

Naudodami [`onclick`](https://developer.mozilla.org/docs/Web/API/GlobalEventHandlers/onclick) atributą, susiekite `click` įvykį su JavaScript kodu, šiuo atveju su `navigate()` funkcijos iškvietimu.

Pabandykite paspausti šias nuorodas, dabar turėtumėte galėti naršyti tarp skirtingų programėlės ekranų.

✅ `history.pushState` metodas yra HTML5 standarto dalis ir įgyvendintas [visose moderniose naršyklėse](https://caniuse.com/?search=pushState). Jei kuriate žiniatinklio programėlę senesnėms naršyklėms, yra triukas, kurį galite naudoti vietoj šio API: naudodami [hash (`#`)](https://en.wikipedia.org/wiki/URI_fragment) prieš kelią galite įgyvendinti maršrutizavimą, kuris veikia su įprasta inkarų navigacija ir neperkrauna puslapio, nes jo paskirtis buvo kurti vidines nuorodas puslapyje.

## Naršyklės mygtukų „Atgal“ ir „Pirmyn“ tvarkymas

Naudojant `history.pushState` sukuriami nauji įrašai naršyklės naršymo istorijoje. Galite tai patikrinti, laikydami naršyklės *atgal mygtuką*, jis turėtų rodyti kažką panašaus į tai:

![Naršymo istorijos ekrano nuotrauka](../../../../translated_images/history.7fdabbafa521e06455b738d3dafa3ff41d3071deae60ead8c7e0844b9ed987d8.lt.png)

Jei bandysite kelis kartus paspausti atgal mygtuką, pamatysite, kad dabartinis URL keičiasi ir istorija atnaujinama, tačiau tas pats šablonas vis tiek rodomas.

Taip yra todėl, kad programėlė nežino, kad reikia iškviesti `updateRoute()` kiekvieną kartą, kai istorija keičiasi. Jei pažvelgsite į [`history.pushState` dokumentaciją](https://developer.mozilla.org/docs/Web/API/History/pushState), pamatysite, kad jei būsena keičiasi - tai reiškia, kad perėjome į kitą URL - suveikia [`popstate`](https://developer.mozilla.org/docs/Web/API/Window/popstate_event) įvykis. Naudosime tai, kad išspręstume šią problemą.

### Užduotis

Kad įsitikintume, jog rodomas šablonas atnaujinamas, kai naršyklės istorija keičiasi, pridėsime naują funkciją, kuri iškviečia `updateRoute()`. Tai padarysime `app.js` failo apačioje:

```js
window.onpopstate = () => updateRoute();
updateRoute();
```

> Pastaba: čia naudojome [rodyklės funkciją](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), kad deklaruotume `popstate` įvykio tvarkyklę trumpumo dėlei, tačiau įprasta funkcija veiktų taip pat.

Štai vaizdo įrašas apie rodyklės funkcijas:

[![Rodyklės funkcijos](https://img.youtube.com/vi/OP6eEbOj2sc/0.jpg)](https://youtube.com/watch?v=OP6eEbOj2sc "Rodyklės funkcijos")

> 🎥 Spustelėkite aukščiau esantį vaizdą, kad pamatytumėte vaizdo įrašą apie rodyklės funkcijas.

Dabar pabandykite naudoti naršyklės mygtukus „Atgal“ ir „Pirmyn“ ir patikrinkite, ar rodomas maršrutas šį kartą teisingai atnaujinamas.

---

## 🚀 Iššūkis

Pridėkite naują šabloną ir maršrutą trečiam puslapiui, kuris rodo šios programėlės autorius.

## Po paskaitos: testas

[Po paskaitos: testas](https://ff-quizzes.netlify.app/web/quiz/42)

## Apžvalga ir savarankiškas mokymasis

Maršrutizavimas yra vienas iš stebėtinai sudėtingų žiniatinklio kūrimo dalių, ypač kai žiniatinklis pereina nuo puslapio atnaujinimo elgesio prie vieno puslapio programėlių atnaujinimų. Perskaitykite šiek tiek apie [kaip „Azure Static Web App“ paslauga](https://docs.microsoft.com/azure/static-web-apps/routes/?WT.mc_id=academic-77807-sagibbon) tvarko maršrutizavimą. Ar galite paaiškinti, kodėl kai kurie sprendimai, aprašyti tame dokumente, yra būtini?

## Užduotis

[Patobulinkite maršrutizavimą](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.