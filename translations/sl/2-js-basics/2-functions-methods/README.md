<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "ec43b53e8e015cdabfd3ad877b3c28e5",
  "translation_date": "2025-10-25T00:18:34+00:00",
  "source_file": "2-js-basics/2-functions-methods/README.md",
  "language_code": "sl"
}
-->
# Osnove JavaScripta: Metode in Funkcije

![Osnove JavaScripta - Funkcije](../../../../translated_images/webdev101-js-functions.be049c4726e94f8b7605c36330ac42eeb5cd8ed02bcdd60fdac778174d6cb865.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

## Predhodni kviz
[Predhodni kviz](https://ff-quizzes.netlify.app)

Ponavljanje iste kode je ena najpogostejših frustracij pri programiranju. Funkcije rešujejo ta problem, saj omogočajo pakiranje kode v ponovno uporabne bloke. Pomislite na funkcije kot na standardizirane dele, ki so revolucionirali proizvodno linijo Henryja Forda – ko enkrat ustvarite zanesljivo komponento, jo lahko uporabite kjerkoli, ne da bi jo morali znova sestavljati.

Funkcije omogočajo združevanje delov kode, da jih lahko ponovno uporabite v celotnem programu. Namesto kopiranja in lepljenja iste logike povsod, lahko funkcijo ustvarite enkrat in jo pokličete, kadar koli je to potrebno. Ta pristop ohranja vašo kodo organizirano in olajša posodobitve.

V tej lekciji se boste naučili, kako ustvariti svoje funkcije, jim posredovati informacije in pridobiti koristne rezultate. Spoznali boste razliko med funkcijami in metodami, se naučili sodobnih sintaktičnih pristopov ter videli, kako lahko funkcije delujejo z drugimi funkcijami. Te koncepte bomo gradili korak za korakom.

[![Metode in Funkcije](https://img.youtube.com/vi/XgKsD6Zwvlc/0.jpg)](https://youtube.com/watch?v=XgKsD6Zwvlc "Metode in Funkcije")

> 🎥 Kliknite zgornjo sliko za video o metodah in funkcijah.

> To lekcijo lahko opravite na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-functions/?WT.mc_id=academic-77807-sagibbon)!

## Funkcije

Funkcija je samostojen blok kode, ki opravlja določeno nalogo. Vsebuje logiko, ki jo lahko izvedete, kadar koli je to potrebno.

Namesto da bi isto kodo pisali večkrat v celotnem programu, jo lahko zapakirate v funkcijo in jo pokličete, kadar koli jo potrebujete. Ta pristop ohranja vašo kodo čisto in olajša posodobitve. Predstavljajte si izziv vzdrževanja, če bi morali spremeniti logiko, ki je razpršena na 20 različnih mestih v vaši kodi.

Pomembno je, da svojim funkcijam dodelite opisna imena. Dobro poimenovana funkcija jasno sporoča svoj namen – ko vidite `cancelTimer()`, takoj razumete, kaj počne, tako kot jasno označen gumb pove, kaj se bo zgodilo, ko ga kliknete.

## Ustvarjanje in klicanje funkcije

Poglejmo, kako ustvariti funkcijo. Sintaksa sledi doslednemu vzorcu:

```javascript
function nameOfFunction() { // function definition
 // function definition/body
}
```

Razčlenimo to:
- Ključna beseda `function` pove JavaScriptu: "Hej, ustvarjam funkcijo!"
- `nameOfFunction` je mesto, kjer svoji funkciji dodelite opisno ime
- Oklepaji `()` so mesto, kjer lahko dodate parametre (k temu bomo prišli kmalu)
- Zavite oklepaje `{}` vsebujejo dejansko kodo, ki se zažene, ko pokličete funkcijo

Ustvarimo preprosto funkcijo za pozdrav, da vidimo, kako to deluje:

```javascript
function displayGreeting() {
  console.log('Hello, world!');
}
```

Ta funkcija izpiše "Hello, world!" v konzolo. Ko jo enkrat definirate, jo lahko uporabite tolikokrat, kot je potrebno.

Za izvedbo (ali "klicanje") funkcije napišite njeno ime, ki mu sledijo oklepaji. JavaScript vam omogoča, da funkcijo definirate pred ali po njenem klicu – JavaScriptov pogon bo poskrbel za vrstni red izvajanja.

```javascript
// calling our function
displayGreeting();
```

Ko zaženete to vrstico, se izvede vsa koda znotraj vaše funkcije `displayGreeting`, ki prikaže "Hello, world!" v konzoli vašega brskalnika. To funkcijo lahko kličete večkrat.

> **Opomba:** V teh lekcijah ste že uporabljali **metode**. `console.log()` je metoda – v bistvu funkcija, ki pripada objektu `console`. Ključna razlika je v tem, da so metode pritrjene na objekte, medtem ko funkcije stojijo samostojno. Veliko razvijalcev te izraze uporablja izmenično v vsakdanjem pogovoru.

### Najboljše prakse za funkcije

Tukaj je nekaj nasvetov, ki vam bodo pomagali pisati odlične funkcije:

- Dajte svojim funkcijam jasna, opisna imena – vaša prihodnja različica vam bo hvaležna!
- Uporabljajte **camelCase** za imena z več besedami (na primer `calculateTotal` namesto `calculate_total`)
- Naj bo vsaka funkcija osredotočena na eno nalogo

## Posredovanje informacij funkciji

Naša funkcija `displayGreeting` je omejena – lahko prikaže le "Hello, world!" za vse. Parametri nam omogočajo, da funkcije naredimo bolj prilagodljive in uporabne.

**Parametri** delujejo kot mesta, kamor lahko vstavite različne vrednosti vsakič, ko uporabite funkcijo. Na ta način lahko ista funkcija deluje z različnimi informacijami ob vsakem klicu.

Parametre navedete znotraj oklepajev, ko definirate funkcijo, pri čemer ločite več parametrov z vejicami:

```javascript
function name(param, param2, param3) {

}
```

Vsak parameter deluje kot mesto – ko nekdo pokliče vašo funkcijo, bo zagotovil dejanske vrednosti, ki se vstavijo na ta mesta.

Posodobimo našo funkcijo za pozdrav, da sprejme ime osebe:

```javascript
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
```

Opazite, kako uporabljamo nazobčane narekovaje (`` ` ``) in `${}` za neposredno vstavljanje imena v naše sporočilo – to se imenuje predloga literala in je resnično priročen način za sestavljanje nizov z vključenimi spremenljivkami.

Zdaj, ko pokličemo funkcijo, lahko posredujemo katero koli ime:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher!" when run
```

JavaScript vzame niz `'Christopher'`, ga dodeli parametru `name` in ustvari prilagojeno sporočilo "Hello, Christopher!"

## Privzete vrednosti

Kaj pa, če želimo, da so nekateri parametri neobvezni? Tukaj pridejo prav privzete vrednosti!

Recimo, da želimo ljudem omogočiti prilagoditev besede za pozdrav, vendar če je ne določijo, bomo uporabili "Hello" kot privzeto možnost. Privzete vrednosti lahko nastavite z uporabo znaka enačbe, podobno kot pri nastavitvi spremenljivke:

```javascript
function displayGreeting(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}
```

Tukaj je `name` še vedno obvezen, vendar ima `salutation` rezervno vrednost `'Hello'`, če nihče ne zagotovi drugačnega pozdrava.

Zdaj lahko to funkcijo pokličemo na dva različna načina:

```javascript
displayGreeting('Christopher');
// displays "Hello, Christopher"

displayGreeting('Christopher', 'Hi');
// displays "Hi, Christopher"
```

Pri prvem klicu JavaScript uporabi privzeti "Hello", saj nismo določili pozdrava. Pri drugem klicu pa uporabi naš prilagojeni "Hi". Ta prilagodljivost omogoča funkcijam, da se prilagodijo različnim scenarijem.

## Vrnitev vrednosti

Naše funkcije do zdaj so samo izpisovale sporočila v konzolo, vendar kaj, če želite, da funkcija nekaj izračuna in vam vrne rezultat?

Tukaj pridejo v poštev **vrnjene vrednosti**. Namesto da bi samo nekaj prikazali, lahko funkcija vrne vrednost, ki jo lahko shranite v spremenljivko ali uporabite v drugih delih kode.

Za pošiljanje vrednosti nazaj uporabite ključno besedo `return`, ki ji sledi, kar želite vrniti:

```javascript
return myVariable;
```

Pomembno je: ko funkcija doseže stavek `return`, takoj preneha z izvajanjem in pošlje to vrednost nazaj tistemu, ki jo je poklical.

Spremenimo našo funkcijo za pozdrav, da namesto izpisa vrne sporočilo:

```javascript
function createGreetingMessage(name) {
  const message = `Hello, ${name}`;
  return message;
}
```

Zdaj namesto izpisa pozdrava ta funkcija ustvari sporočilo in nam ga vrne.

Da uporabimo vrnjeno vrednost, jo lahko shranimo v spremenljivko, kot katero koli drugo vrednost:

```javascript
const greetingMessage = createGreetingMessage('Christopher');
```

Zdaj `greetingMessage` vsebuje "Hello, Christopher" in ga lahko uporabimo kjerkoli v naši kodi – za prikaz na spletni strani, vključitev v e-pošto ali posredovanje drugi funkciji.

## Funkcije kot parametri za funkcije

Funkcije je mogoče posredovati kot parametre drugim funkcijam. Čeprav se ta koncept sprva morda zdi zapleten, je to močna funkcija, ki omogoča prilagodljive vzorce programiranja.

Ta vzorec je zelo pogost, ko želite reči "ko se nekaj zgodi, naredi to drugo stvar." Na primer, "ko se časovnik konča, zaženi to kodo" ali "ko uporabnik klikne gumb, pokliči to funkcijo."

Poglejmo `setTimeout`, ki je vgrajena funkcija, ki počaka določeno časovno obdobje in nato zažene neko kodo. Povedati ji moramo, katero kodo naj zažene – popoln primer za posredovanje funkcije!

Preizkusite to kodo – po 3 sekundah boste videli sporočilo:

```javascript
function displayDone() {
  console.log('3 seconds has elapsed');
}
// timer value is in milliseconds
setTimeout(displayDone, 3000);
```

Opazite, kako posredujemo `displayDone` (brez oklepajev) funkciji `setTimeout`. Funkcije ne kličemo sami – predajamo jo `setTimeout` in rečemo "pokliči to čez 3 sekunde."

### Anonimne funkcije

Včasih potrebujete funkcijo samo za eno stvar in ji ne želite dati imena. Pomislite – če funkcijo uporabljate samo enkrat, zakaj bi z dodatnim imenom obremenjevali svojo kodo?

JavaScript vam omogoča ustvarjanje **anonimnih funkcij** – funkcij brez imen, ki jih lahko definirate tam, kjer jih potrebujete.

Tukaj je, kako lahko prepišemo naš primer časovnika z uporabo anonimne funkcije:

```javascript
setTimeout(function() {
  console.log('3 seconds has elapsed');
}, 3000);
```

To doseže enak rezultat, vendar je funkcija definirana neposredno znotraj klica `setTimeout`, kar odpravlja potrebo po ločeni deklaraciji funkcije.

### Funkcije z maščobno puščico

Sodobni JavaScript ima še krajši način pisanja funkcij, imenovan **funkcije z maščobno puščico**. Uporabljajo `=>` (ki izgleda kot puščica – razumete?) in so zelo priljubljene med razvijalci.

Funkcije z maščobno puščico vam omogočajo, da preskočite ključno besedo `function` in napišete bolj jedrnato kodo.

Tukaj je naš primer časovnika z uporabo funkcije z maščobno puščico:

```javascript
setTimeout(() => {
  console.log('3 seconds has elapsed');
}, 3000);
```

`()` je mesto, kamor bi šli parametri (v tem primeru prazno), nato sledi puščica `=>`, in na koncu telo funkcije v zavitih oklepajih. To zagotavlja enako funkcionalnost z bolj jedrnato sintakso.

### Kdaj uporabiti katero strategijo

Kdaj uporabiti kateri pristop? Praktično vodilo: če boste funkcijo uporabili večkrat, ji dajte ime in jo definirajte ločeno. Če je namenjena samo eni specifični uporabi, razmislite o anonimni funkciji. Obe, funkcije z maščobno puščico in tradicionalna sintaksa, sta veljavni izbiri, čeprav so funkcije z maščobno puščico pogoste v sodobnih JavaScript kodnih bazah.

---



## 🚀 Izziv

Ali lahko v enem stavku razložite razliko med funkcijami in metodami? Poskusite!

## GitHub Copilot Agent Izziv 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Ustvarite knjižnico pripomočkov za matematične funkcije, ki prikazuje različne koncepte funkcij, obravnavane v tej lekciji, vključno s parametri, privzetimi vrednostmi, vrnjenimi vrednostmi in funkcijami z maščobno puščico.

**Navodilo:** Ustvarite JavaScript datoteko z imenom `mathUtils.js`, ki vsebuje naslednje funkcije:
1. Funkcijo `add`, ki sprejme dva parametra in vrne njuno vsoto
2. Funkcijo `multiply` z privzetimi vrednostmi parametrov (drugi parameter privzeto 1)
3. Funkcijo z maščobno puščico `square`, ki sprejme število in vrne njegov kvadrat
4. Funkcijo `calculate`, ki sprejme drugo funkcijo kot parameter in dve števili, nato pa uporabi funkcijo na teh številih
5. Demonstrirajte klicanje vsake funkcije z ustreznimi testnimi primeri

Več o [načinu agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) si preberite tukaj.

## Zaključni kviz
[Zaključni kviz](https://ff-quizzes.netlify.app)

## Pregled & Samostojno učenje

Vredno je [prebrati več o funkcijah z maščobno puščico](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions), saj se vse pogosteje uporabljajo v kodnih bazah. Vadite pisanje funkcije in nato njeno prepisovanje s to sintakso.

## Naloga

[Zabava s funkcijami](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije je priporočljivo profesionalno človeško prevajanje. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.