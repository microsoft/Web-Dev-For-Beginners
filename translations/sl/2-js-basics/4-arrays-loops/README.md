<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9029f96b0e034839c1799f4595e4bb66",
  "translation_date": "2025-08-29T12:53:30+00:00",
  "source_file": "2-js-basics/4-arrays-loops/README.md",
  "language_code": "sl"
}
-->
# Osnove JavaScripta: Tabele in Zanke

![Osnove JavaScripta - Tabele](../../../../translated_images/webdev101-js-arrays.439d7528b8a294558d0e4302e448d193f8ad7495cc407539cc81f1afe904b470.sl.png)
> Sketchnote avtorja [Tomomi Imura](https://twitter.com/girlie_mac)

## Kviz pred predavanjem
[Kviz pred predavanjem](https://ff-quizzes.netlify.app/web/quiz/13)

Ta lekcija pokriva osnove JavaScripta, jezika, ki omogoča interaktivnost na spletu. V tej lekciji se boste naučili o tabelah in zankah, ki se uporabljajo za manipulacijo podatkov.

[![Tabele](https://img.youtube.com/vi/1U4qTyq02Xw/0.jpg)](https://youtube.com/watch?v=1U4qTyq02Xw "Tabele")

[![Zanke](https://img.youtube.com/vi/Eeh7pxtTZ3k/0.jpg)](https://www.youtube.com/watch?v=Eeh7pxtTZ3k "Zanke")

> 🎥 Kliknite zgornje slike za videoposnetke o tabelah in zankah.

> To lekcijo lahko opravite na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-arrays/?WT.mc_id=academic-77807-sagibbon)!

## Tabele

Delo s podatki je pogosta naloga v katerem koli jeziku, in ta naloga je veliko lažja, ko so podatki organizirani v strukturirani obliki, kot so tabele. S tabelami so podatki shranjeni v strukturi, podobni seznamu. Ena glavnih prednosti tabel je, da lahko v eni tabeli shranite različne vrste podatkov.

✅ Tabele so povsod okoli nas! Ali lahko pomislite na primer tabele iz resničnega življenja, kot je na primer niz sončnih celic?

Sintaksa za tabelo je par oglatih oklepajev.

```javascript
let myArray = [];
```

To je prazna tabela, vendar lahko tabele deklariramo že napolnjene s podatki. Več vrednosti v tabeli je ločenih z vejico.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
```

Vrednosti v tabeli so dodeljene edinstveni vrednosti, imenovani **indeks**, ki je celo število, dodeljeno glede na oddaljenost od začetka tabele. V zgornjem primeru ima niz "Chocolate" indeks 0, indeks "Rocky Road" pa je 4. Indeks uporabite z oglati oklepaji za pridobivanje, spreminjanje ali vstavljanje vrednosti v tabelo.

✅ Vas preseneča, da tabele začnejo z indeksom nič? V nekaterih programskih jezikih indeksi začnejo z 1. Zanimivo zgodovino o tem lahko [preberete na Wikipediji](https://en.wikipedia.org/wiki/Zero-based_numbering).

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; //"Vanilla"
```

Indeks lahko uporabite za spremembo vrednosti, kot je to:

```javascript
iceCreamFlavors[4] = "Butter Pecan"; //Changed "Rocky Road" to "Butter Pecan"
```

In novo vrednost lahko vstavite na določen indeks, kot je to:

```javascript
iceCreamFlavors[5] = "Cookie Dough"; //Added "Cookie Dough"
```

✅ Pogostejši način dodajanja vrednosti v tabelo je uporaba operaterjev, kot je array.push().

Če želite izvedeti, koliko elementov je v tabeli, uporabite lastnost `length`.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; //5
```

✅ Poskusite sami! Uporabite konzolo svojega brskalnika za ustvarjanje in manipulacijo tabele po svoji izbiri.

## Zanke

Zanke nam omogočajo izvajanje ponavljajočih se ali **iterativnih** nalog in lahko prihranijo veliko časa in kode. Vsaka iteracija se lahko razlikuje po svojih spremenljivkah, vrednostih in pogojih. V JavaScriptu obstajajo različne vrste zank, ki imajo vse majhne razlike, vendar v bistvu opravljajo isto nalogo: ponavljajo se nad podatki.

### For zanka

`for` zanka zahteva 3 dele za iteracijo:
- `counter` Spremenljivka, ki je običajno inicializirana s številom, ki šteje število iteracij
- `condition` Izraz, ki uporablja primerjalne operatorje, da povzroči ustavitev zanke, ko je `false`
- `iteration-expression` Izvede se na koncu vsake iteracije, običajno se uporablja za spreminjanje vrednosti števca

```javascript
// Counting up to 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

✅ Zaženite to kodo v konzoli brskalnika. Kaj se zgodi, ko naredite majhne spremembe števca, pogoja ali izraza za iteracijo? Ali lahko naredite, da se zanka izvaja nazaj, kot odštevanje?

### While zanka

Za razliko od sintakse `for` zanke, `while` zanke zahtevajo le pogoj, ki bo ustavil zanko, ko bo pogoj postal `false`. Pogoji v zankah običajno temeljijo na drugih vrednostih, kot so števci, in jih je treba upravljati med zanko. Začetne vrednosti števcev je treba ustvariti zunaj zanke, vsi izrazi za izpolnitev pogoja, vključno s spreminjanjem števca, pa morajo biti vzdrževani znotraj zanke.

```javascript
//Counting up to 10
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
```

✅ Zakaj bi izbrali for zanko namesto while zanke? 17.000 uporabnikov je imelo isto vprašanje na StackOverflow, nekatera mnenja [bi vam lahko bila zanimiva](https://stackoverflow.com/questions/39969145/while-loops-vs-for-loops-in-javascript).

## Zanke in tabele

Tabele se pogosto uporabljajo z zankami, ker večina pogojev zahteva dolžino tabele za ustavitev zanke, indeks pa je lahko tudi vrednost števca.

```javascript
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];

for (let i = 0; i < iceCreamFlavors.length; i++) {
  console.log(iceCreamFlavors[i]);
} //Ends when all flavors are printed
```

✅ Eksperimentirajte z iteracijo nad tabelo po svoji izbiri v konzoli brskalnika.

---

## 🚀 Izziv

Obstajajo tudi drugi načini iteracije nad tabelami, poleg for in while zank. Obstajajo [forEach](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [for-of](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/for...of) in [map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Prepišite svojo zanko nad tabelo z eno od teh tehnik.

## Kviz po predavanju
[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/14)

## Pregled in samostojno učenje

Tabele v JavaScriptu imajo veliko metod, ki so izjemno uporabne za manipulacijo podatkov. [Preberite o teh metodah](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) in jih preizkusite (na primer push, pop, slice in splice) na tabeli po svoji izbiri.

## Naloga

[Iterirajte tabelo](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za strojno prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo strokovno človeško prevajanje. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.