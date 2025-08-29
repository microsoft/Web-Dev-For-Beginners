<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-08-29T12:39:41+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "hr"
}
-->
# Kreiranje igre pomoću događaja

## Kviz prije predavanja

[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/21)

## Programiranje vođeno događajima

Kada kreiramo aplikaciju za preglednik, pružamo grafičko korisničko sučelje (GUI) koje korisnik koristi za interakciju s onim što smo izradili. Najčešći način interakcije s preglednikom je klikanje i upisivanje u različite elemente. Izazov s kojim se suočavamo kao programeri je taj što ne znamo kada će korisnik izvesti te operacije!

[Programiranje vođeno događajima](https://en.wikipedia.org/wiki/Event-driven_programming) naziv je za vrstu programiranja koju trebamo koristiti za kreiranje našeg GUI-ja. Ako malo razložimo ovaj izraz, vidimo da je ključna riječ ovdje **događaj**. [Događaj](https://www.merriam-webster.com/dictionary/event), prema Merriam-Websteru, definira se kao "nešto što se događa". Ovo savršeno opisuje našu situaciju. Znamo da će se nešto dogoditi za što želimo izvršiti kod kao odgovor, ali ne znamo kada će se to dogoditi.

Način na koji označavamo dio koda koji želimo izvršiti je kreiranjem funkcije. Kada razmišljamo o [proceduralnom programiranju](https://en.wikipedia.org/wiki/Procedural_programming), funkcije se pozivaju određenim redoslijedom. Isto vrijedi i za programiranje vođeno događajima. Razlika je u tome **kako** će se funkcije pozivati.

Za rukovanje događajima (klikovi na gumb, upisivanje itd.), registriramo **slušatelje događaja**. Slušatelj događaja je funkcija koja "sluša" da se dogodi neki događaj i izvršava se kao odgovor. Slušatelji događaja mogu ažurirati korisničko sučelje, pozivati server ili raditi bilo što drugo što je potrebno kao odgovor na korisnikovu akciju. Dodajemo slušatelja događaja pomoću [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) i pružamo funkciju za izvršenje.

> **NOTE:** Vrijedi istaknuti da postoji mnogo načina za kreiranje slušatelja događaja. Možete koristiti anonimne funkcije ili kreirati imenovane. Možete koristiti razne prečace, poput postavljanja svojstva `click` ili korištenja `addEventListener`. U našem zadatku fokusirat ćemo se na `addEventListener` i anonimne funkcije, jer je to vjerojatno najčešća tehnika koju web programeri koriste. Također je najfleksibilnija, jer `addEventListener` radi za sve događaje, a naziv događaja može se pružiti kao parametar.

### Uobičajeni događaji

Postoji [desetke događaja](https://developer.mozilla.org/docs/Web/Events) koje možete slušati prilikom kreiranja aplikacije. Gotovo sve što korisnik radi na stranici pokreće događaj, što vam daje veliku moć da osigurate željeno korisničko iskustvo. Srećom, obično će vam trebati samo nekoliko događaja. Evo nekoliko uobičajenih (uključujući dva koja ćemo koristiti prilikom kreiranja naše igre):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): Korisnik je kliknuo na nešto, obično gumb ili hipervezu
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): Korisnik je kliknuo desnom tipkom miša
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): Korisnik je označio neki tekst
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): Korisnik je unio neki tekst

## Kreiranje igre

Kreirat ćemo igru kako bismo istražili kako događaji funkcioniraju u JavaScriptu. Naša igra testirat će vještinu tipkanja igrača, što je jedna od najpodcjenjenijih vještina koju bi svi programeri trebali imati. Svi bismo trebali vježbati tipkanje! Opći tijek igre izgledat će ovako:

- Igrač klikne na gumb za početak i dobije citat za tipkanje
- Igrač što brže može upisuje citat u tekstualni okvir
  - Svaka riječ koja je završena se ističe
  - Ako igrač napravi tipfeler, tekstualni okvir postaje crven
  - Kada igrač završi citat, prikazuje se poruka o uspjehu s proteklim vremenom

Idemo izgraditi našu igru i naučiti o događajima!

### Struktura datoteka

Trebat će nam ukupno tri datoteke: **index.html**, **script.js** i **style.css**. Počnimo s njihovim postavljanjem kako bismo si olakšali posao.

- Kreirajte novu mapu za svoj rad otvaranjem konzole ili terminala i izdavanjem sljedeće naredbe:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Otvorite Visual Studio Code

```bash
code .
```

- Dodajte tri datoteke u mapu u Visual Studio Code s sljedećim nazivima:
  - index.html
  - script.js
  - style.css

## Kreiranje korisničkog sučelja

Ako istražimo zahtjeve, znamo da ćemo trebati nekoliko elemenata na našoj HTML stranici. Ovo je poput recepta, gdje trebamo neke sastojke:

- Mjesto za prikaz citata koji korisnik treba upisati
- Mjesto za prikaz poruka, poput poruke o uspjehu
- Tekstualni okvir za upisivanje
- Gumb za početak

Svaki od tih elemenata trebat će ID-ove kako bismo mogli raditi s njima u našem JavaScriptu. Također ćemo dodati reference na CSS i JavaScript datoteke koje ćemo kreirati.

Kreirajte novu datoteku pod nazivom **index.html**. Dodajte sljedeći HTML:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### Pokretanje aplikacije

Uvijek je najbolje razvijati iterativno kako bismo vidjeli kako stvari izgledaju. Pokrenimo našu aplikaciju. Postoji sjajan dodatak za Visual Studio Code pod nazivom [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) koji će lokalno hostirati vašu aplikaciju i osvježiti preglednik svaki put kad spremite.

- Instalirajte [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) slijedeći poveznicu i klikom na **Install**
  - Preglednik će vas zatražiti da otvorite Visual Studio Code, a zatim će vas Visual Studio Code zatražiti da izvršite instalaciju
  - Ponovno pokrenite Visual Studio Code ako se to zatraži
- Nakon instalacije, u Visual Studio Code pritisnite Ctrl-Shift-P (ili Cmd-Shift-P) za otvaranje palete naredbi
- Upišite **Live Server: Open with Live Server**
  - Live Server će početi hostirati vašu aplikaciju
- Otvorite preglednik i navigirajte na **https://localhost:5500**
- Sada biste trebali vidjeti stranicu koju ste kreirali!

Dodajmo malo funkcionalnosti.

## Dodavanje CSS-a

S našim HTML-om kreiranim, dodajmo CSS za osnovno stiliziranje. Trebamo istaknuti riječ koju igrač treba upisati i obojiti tekstualni okvir ako ono što je upisano nije ispravno. To ćemo učiniti s dvije klase.

Kreirajte novu datoteku pod nazivom **style.css** i dodajte sljedeću sintaksu.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ Kada je riječ o CSS-u, možete rasporediti svoju stranicu kako god želite. Odvojite malo vremena i učinite stranicu privlačnijom:

- Odaberite drugačiji font
- Obojite zaglavlja
- Promijenite veličinu elemenata

## JavaScript

S našim korisničkim sučeljem kreiranim, vrijeme je da se usredotočimo na JavaScript koji će pružiti logiku. Podijelit ćemo ovo na nekoliko koraka:

- [Kreiranje konstanti](../../../../4-typing-game/typing-game)
- [Slušatelj događaja za početak igre](../../../../4-typing-game/typing-game)
- [Slušatelj događaja za tipkanje](../../../../4-typing-game/typing-game)

Ali prvo, kreirajte novu datoteku pod nazivom **script.js**.

### Dodavanje konstanti

Trebat će nam nekoliko stavki kako bismo si olakšali programiranje. Opet, slično receptu, evo što će nam trebati:

- Polje s popisom svih citata
- Prazno polje za pohranu svih riječi trenutnog citata
- Prostor za pohranu indeksa riječi koju igrač trenutno upisuje
- Vrijeme kada je igrač kliknuo na početak

Također ćemo trebati reference na elemente korisničkog sučelja:

- Tekstualni okvir (**typed-value**)
- Prikaz citata (**quote**)
- Poruka (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ Dodajte još citata svojoj igri

> **NOTE:** Elemente možemo dohvatiti kad god želimo u kodu pomoću `document.getElementById`. Zbog činjenice da ćemo se redovito referirati na te elemente, izbjeći ćemo tipfelere s literalima stringova koristeći konstante. Okviri poput [Vue.js](https://vuejs.org/) ili [React](https://reactjs.org/) mogu vam pomoći u boljem upravljanju centralizacijom vašeg koda.

Odvojite trenutak za gledanje videa o korištenju `const`, `let` i `var`

[![Vrste varijabli](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Vrste varijabli")

> 🎥 Kliknite na sliku iznad za video o varijablama.

### Dodavanje logike za početak

Za početak igre, igrač će kliknuti na početak. Naravno, ne znamo kada će kliknuti na početak. Ovdje dolazi [slušatelj događaja](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener). Slušatelj događaja omogućit će nam da slušamo da se nešto dogodi (događaj) i izvršimo kod kao odgovor. U našem slučaju, želimo izvršiti kod kada korisnik klikne na početak.

Kada korisnik klikne **start**, trebamo odabrati citat, postaviti korisničko sučelje i postaviti praćenje trenutne riječi i vremena. Ispod je JavaScript koji trebate dodati; raspravljamo o njemu odmah nakon bloka skripte.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

Razložimo kod!

- Postavljanje praćenja riječi
  - Korištenje [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) i [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) omogućuje nam da nasumično odaberemo citat iz polja `quotes`
  - Pretvaramo `quote` u polje `words` kako bismo mogli pratiti riječ koju igrač trenutno upisuje
  - `wordIndex` postavljamo na 0, jer igrač počinje s prvom riječi
- Postavljanje korisničkog sučelja
  - Kreiramo polje `spanWords`, koje sadrži svaku riječ unutar `span` elementa
    - Ovo će nam omogućiti da istaknemo riječ na prikazu
  - `join` polja za kreiranje stringa koji možemo koristiti za ažuriranje `innerHTML` na `quoteElement`
    - Ovo će prikazati citat igraču
  - Postavljamo `className` prvog `span` elementa na `highlight` kako bismo ga istaknuli žutom bojom
  - Čistimo `messageElement` postavljanjem `innerText` na `''`
- Postavljanje tekstualnog okvira
  - Brišemo trenutni `value` na `typedValueElement`
  - Postavljamo `focus` na `typedValueElement`
- Pokrećemo mjerač vremena pozivanjem `getTime`

### Dodavanje logike za tipkanje

Dok igrač tipka, podiže se događaj `input`. Ovaj slušatelj događaja provjerit će je li igrač pravilno upisao riječ i upravljati trenutnim statusom igre. Vraćajući se na **script.js**, dodajte sljedeći kod na kraj. Razložit ćemo ga nakon toga.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

Razložimo kod! Počinjemo dohvaćanjem trenutne riječi i vrijednosti koju je igrač dosad upisao. Zatim imamo logiku "vodopada", gdje provjeravamo je li citat dovršen, riječ dovršena, riječ ispravna ili (na kraju) postoji li greška.

- Citat je dovršen, što se označava time da je `typedValue` jednak `currentWord`, a `wordIndex` jednak jednom manje od `length` polja `words`
  - Izračunavamo `elapsedTime` oduzimanjem `startTime` od trenutnog vremena
  - Dijelimo `elapsedTime` s 1.000 kako bismo ga pretvorili iz milisekundi u sekunde
  - Prikazujemo poruku o uspjehu
- Riječ je dovršena, što se označava time da `typedValue` završava razmakom (kraj riječi) i da je `typedValue` jednak `currentWord`
  - Postavljamo `value` na `typedElement` na `''` kako bismo omogućili upisivanje sljedeće riječi
  - Povećavamo `wordIndex` kako bismo prešli na sljedeću riječ
  - Prolazimo kroz sve `childNodes` na `quoteElement` kako bismo postavili `className` na `''` za vraćanje na zadani prikaz
  - Postavljamo `className` trenutne riječi na `highlight` kako bismo je označili kao sljedeću riječ za upisivanje
- Riječ je trenutno pravilno upisana (ali nije dovršena), što se označava time da `currentWord` počinje s `typedValue`
  - Osiguravamo da se `typedValueElement` prikazuje kao zadano brisanjem `className`
- Ako smo stigli ovdje, imamo grešku
  - Postavljamo `className` na `typedValueElement` na `error`

## Testiranje aplikacije

Stigli ste do kraja! Posljednji korak je osigurati da naša aplikacija radi. Isprobajte! Ne brinite ako postoje greške; **svi programeri** imaju greške. Pregledajte poruke i otklonite ih po potrebi.

Kliknite na **start** i počnite tipkati! Trebalo bi izgledati slično animaciji koju smo vidjeli prije.

![Animacija igre u akciji](../../../../4-typing-game/images/demo.gif)

---

## 🚀 Izazov

Dodajte više funkcionalnosti

- Onemogućite slušatelja događaja `input` nakon završetka i ponovno ga omogućite kada se klikne gumb
- Onemogućite tekstualni okvir kada igrač završi citat
- Prikazujte modalni dijalog s porukom o uspjehu
- Pohranite najbolje rezultate koristeći [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/22)

## Pregled i samostalno učenje

Pročitajte o [svim dostupnim događajima](https://developer.mozilla.org/docs/Web/Events) koje web preglednik nudi programerima i razmislite o scenarijima u kojima biste koristili svaki od njih.

## Zadatak

[Kreirajte novu igru na tipkovnici](assignment.md)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za bilo kakva pogrešna tumačenja ili nesporazume koji proizlaze iz korištenja ovog prijevoda.