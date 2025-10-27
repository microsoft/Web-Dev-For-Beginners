<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0092f6533ae3ec3adad5b5ece68efaf",
  "translation_date": "2025-10-24T23:47:42+00:00",
  "source_file": "2-js-basics/1-data-types/README.md",
  "language_code": "hr"
}
-->
# Osnove JavaScripta: Tipovi podataka

![Osnove JavaScripta - Tipovi podataka](../../../../translated_images/webdev101-js-datatypes.4cc470179730702c756480d3ffa46507f746e5975ebf80f99fdaaf1cff09a7f4.hr.png)
> Sketchnote autorice [Tomomi Imura](https://twitter.com/girlie_mac)

Tipovi podataka jedan su od temeljnih pojmova u JavaScriptu s kojima ćete se susretati u svakom programu koji napišete. Zamislite tipove podataka kao sustav arhiviranja koji su koristili drevni knjižničari u Aleksandriji – imali su posebna mjesta za svitke s poezijom, matematikom i povijesnim zapisima. JavaScript organizira informacije na sličan način, s različitim kategorijama za različite vrste podataka.

U ovoj lekciji istražit ćemo osnovne tipove podataka koji omogućuju rad JavaScripta. Naučit ćete kako raditi s brojevima, tekstom, vrijednostima istinito/netočno i razumjeti zašto je odabir pravog tipa ključan za vaše programe. Ovi koncepti možda će vam se na početku činiti apstraktnima, ali s vremenom će postati prirodni.

Razumijevanje tipova podataka učinit će sve ostalo u JavaScriptu mnogo jasnijim. Kao što arhitekti moraju razumjeti različite građevinske materijale prije nego što izgrade katedralu, ovi temelji podržat će sve što ćete graditi u budućnosti.

## Kviz prije predavanja
[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/)

Ova lekcija pokriva osnove JavaScripta, jezika koji omogućuje interaktivnost na webu.

> Ovu lekciju možete pronaći na [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101-variables/?WT.mc_id=academic-77807-sagibbon)!

[![Varijable](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "Varijable u JavaScriptu")

[![Tipovi podataka u JavaScriptu](https://img.youtube.com/vi/AWfA95eLdq8/0.jpg)](https://youtube.com/watch?v=AWfA95eLdq8 "Tipovi podataka u JavaScriptu")

> 🎥 Kliknite na slike iznad za videozapise o varijablama i tipovima podataka

Krenimo s varijablama i tipovima podataka koji ih ispunjavaju!

## Varijable

Varijable su temeljni gradivni blokovi u programiranju. Kao označene staklenke koje su srednjovjekovni alkemičari koristili za pohranu različitih tvari, varijable vam omogućuju pohranu informacija i dodjeljivanje opisnog imena kako biste ih kasnije mogli koristiti. Trebate zapamtiti nečiju dob? Pohranite je u varijablu nazvanu `age`. Želite pratiti ime korisnika? Spremite ga u varijablu nazvanu `userName`.

Usredotočit ćemo se na moderni pristup stvaranju varijabli u JavaScriptu. Tehnike koje ćete ovdje naučiti predstavljaju godine evolucije jezika i najbolje prakse koje je razvila programerska zajednica.

Stvaranje i **deklariranje** varijable ima sljedeću sintaksu **[ključna riječ] [ime]**. Sastoji se od dva dijela:

- **Ključna riječ**. Koristite `let` za varijable koje se mogu mijenjati ili `const` za vrijednosti koje ostaju iste.
- **Ime varijable**, to je opisno ime koje sami odaberete.

✅ Ključna riječ `let` uvedena je u ES6 i daje vašoj varijabli takozvani _block scope_. Preporučuje se koristiti `let` ili `const` umjesto starije ključne riječi `var`. O block scopeu ćemo detaljnije govoriti u budućim dijelovima.

### Zadatak - rad s varijablama

1. **Deklarirajte varijablu**. Započnimo s kreiranjem naše prve varijable:

    ```javascript
    let myVariable;
    ```

   **Što ovo postiže:**
   - Ovo govori JavaScriptu da stvori mjesto za pohranu pod nazivom `myVariable`
   - JavaScript dodjeljuje prostor u memoriji za ovu varijablu
   - Varijabla trenutno nema vrijednost (undefined)

2. **Dodijelite joj vrijednost**. Sada stavimo nešto u našu varijablu:

    ```javascript
    myVariable = 123;
    ```

   **Kako radi dodjela vrijednosti:**
   - Operator `=` dodjeljuje vrijednost 123 našoj varijabli
   - Varijabla sada sadrži ovu vrijednost umjesto da bude undefined
   - Ovu vrijednost možete koristiti u svom kodu koristeći `myVariable`

   > Napomena: korištenje `=` u ovoj lekciji znači da koristimo "operator dodjele", koji se koristi za postavljanje vrijednosti varijabli. Ne označava jednakost.

3. **Učinite to pametnije**. Zapravo, kombinirajmo ova dva koraka:

    ```javascript
    let myVariable = 123;
    ```

    **Ovaj pristup je učinkovitiji:**
    - Deklarirate varijablu i dodjeljujete vrijednost u jednoj naredbi
    - Ovo je standardna praksa među programerima
    - Smanjuje duljinu koda uz zadržavanje jasnoće

4. **Promijenite mišljenje**. Što ako želimo pohraniti neki drugi broj?

   ```javascript
   myVariable = 321;
   ```

   **Razumijevanje ponovne dodjele:**
   - Varijabla sada sadrži 321 umjesto 123
   - Prethodna vrijednost je zamijenjena – varijable pohranjuju samo jednu vrijednost u isto vrijeme
   - Ova promjenjivost ključna je karakteristika varijabli deklariranih s `let`

   ✅ Isprobajte! Možete pisati JavaScript izravno u svom pregledniku. Otvorite prozor preglednika i idite na Alate za razvojne programere. U konzoli ćete pronaći upit; upišite `let myVariable = 123`, pritisnite Enter, zatim upišite `myVariable`. Što se događa? Napomena, više o ovim konceptima naučit ćete u sljedećim lekcijama.

## Konstante

Ponekad trebate pohraniti informacije koje se ne smiju mijenjati tijekom izvođenja programa. Zamislite konstante kao matematičke principe koje je Euclid uspostavio u drevnoj Grčkoj – jednom dokazane i dokumentirane, ostale su nepromjenjive za sva buduća vremena.

Konstante funkcioniraju slično varijablama, ali s važnim ograničenjem: jednom kada im dodijelite vrijednost, ona se ne može mijenjati. Ova nepromjenjivost pomaže spriječiti slučajne izmjene ključnih vrijednosti u vašem programu.

Deklaracija i inicijalizacija konstante slijedi iste koncepte kao i varijabla, osim što se koristi ključna riječ `const`. Konstante se obično deklariraju velikim slovima.

```javascript
const MY_VARIABLE = 123;
```

**Što ovaj kod radi:**
- **Stvara** konstantu nazvanu `MY_VARIABLE` s vrijednošću 123
- **Koristi** konvenciju imenovanja velikim slovima za konstante
- **Sprječava** bilo kakve buduće promjene ove vrijednosti

Konstante imaju dva glavna pravila:

- **Morate im odmah dodijeliti vrijednost** – prazne konstante nisu dopuštene!
- **Nikada ne možete promijeniti tu vrijednost** – JavaScript će baciti grešku ako pokušate. Evo što mislim:

   **Jednostavna vrijednost** - Sljedeće NIJE dopušteno:
   
      ```javascript
      const PI = 3;
      PI = 4; // nije dopušteno
      ```

   **Što trebate zapamtiti:**
   - **Pokušaji** ponovne dodjele konstante uzrokuju grešku
   - **Štiti** važne vrijednosti od slučajnih promjena
   - **Osigurava** da vrijednost ostane dosljedna tijekom vašeg programa
 
   **Referenca na objekt je zaštićena** - Sljedeće NIJE dopušteno:
   
      ```javascript
      const obj = { a: 3 };
      obj = { b: 5 } // nije dopušteno
      ```

   **Razumijevanje ovih koncepata:**
   - **Sprječava** zamjenu cijelog objekta novim
   - **Štiti** referencu na izvorni objekt
   - **Održava** identitet objekta u memoriji

    **Vrijednost objekta nije zaštićena** - Sljedeće JE dopušteno:
    
      ```javascript
      const obj = { a: 3 };
      obj.a = 5;  // dopušteno
      ```

      **Razlaganje onoga što se ovdje događa:**
      - **Mijenja** vrijednost svojstva unutar objekta
      - **Zadržava** istu referencu objekta
      - **Pokazuje** da se sadržaj objekta može mijenjati dok referenca ostaje konstantna

   > Napomena, `const` znači da je referenca zaštićena od ponovne dodjele. Vrijednost nije _nepromjenjiva_ i može se mijenjati, posebno ako je složena struktura poput objekta.

## Tipovi podataka

JavaScript organizira informacije u različite kategorije koje se nazivaju tipovi podataka. Ovaj koncept odražava način na koji su drevni učenjaci kategorizirali znanje – Aristotel je razlikovao različite vrste razmišljanja, znajući da se logički principi ne mogu jednako primijeniti na poeziju, matematiku i prirodnu filozofiju.

Tipovi podataka su važni jer različite operacije funkcioniraju s različitim vrstama informacija. Kao što ne možete izvoditi aritmetiku na nečijem imenu ili abecedno poredati matematičku jednadžbu, JavaScript zahtijeva odgovarajući tip podataka za svaku operaciju. Razumijevanje ovoga sprječava greške i čini vaš kod pouzdanijim.

Varijable mogu pohraniti mnoge različite vrste vrijednosti, poput brojeva i teksta. Ove različite vrste vrijednosti poznate su kao **tipovi podataka**. Tipovi podataka važan su dio razvoja softvera jer pomažu programerima donositi odluke o tome kako bi kod trebao biti napisan i kako bi softver trebao raditi. Nadalje, neki tipovi podataka imaju jedinstvene značajke koje pomažu transformirati ili izvući dodatne informacije iz vrijednosti.

✅ Tipovi podataka također se nazivaju primitivima podataka u JavaScriptu, jer su to najosnovniji tipovi podataka koje jezik pruža. Postoji 7 primitivnih tipova podataka: string, number, bigint, boolean, undefined, null i symbol. Odvojite trenutak da vizualizirate što svaki od ovih primitiva može predstavljati. Što je `zebra`? A `0`? `true`?

### Brojevi

Brojevi su najjednostavniji tip podataka u JavaScriptu. Bez obzira radite li s cijelim brojevima poput 42, decimalnim brojevima poput 3.14 ili negativnim brojevima poput -5, JavaScript ih obrađuje na isti način.

Sjećate li se naše varijable od ranije? Onaj 123 koji smo pohranili zapravo je bio tip podataka broj:

```javascript
let myVariable = 123;
```

**Ključne značajke:**
- JavaScript automatski prepoznaje numeričke vrijednosti
- Možete izvoditi matematičke operacije s ovim varijablama
- Nije potrebna eksplicitna deklaracija tipa

Varijable mogu pohraniti sve vrste brojeva, uključujući decimalne ili negativne brojeve. Brojevi se također mogu koristiti s aritmetičkim operatorima, o čemu ćemo govoriti u [sljedećem odjeljku](../../../../2-js-basics/1-data-types).

### Aritmetički operatori

Aritmetički operatori omogućuju izvođenje matematičkih izračuna u JavaScriptu. Ovi operatori slijede iste principe koje matematičari koriste stoljećima – iste simbole koji su se pojavljivali u radovima učenjaka poput Al-Khwarizmija, koji je razvio algebarsku notaciju.

Operatori funkcioniraju onako kako biste očekivali od tradicionalne matematike: plus za zbrajanje, minus za oduzimanje i tako dalje.

Postoji nekoliko vrsta operatora koje možete koristiti za izvođenje aritmetičkih funkcija, a neki od njih navedeni su ovdje:

| Simbol | Opis                                                                      | Primjer                          |
| ------ | ------------------------------------------------------------------------- | -------------------------------- |
| `+`    | **Zbrajanje**: Računa zbroj dvaju brojeva                                 | `1 + 2 //očekivani rezultat je 3`   |
| `-`    | **Oduzimanje**: Računa razliku dvaju brojeva                              | `1 - 2 //očekivani rezultat je -1`  |
| `*`    | **Množenje**: Računa produkt dvaju brojeva                                | `1 * 2 //očekivani rezultat je 2`   |
| `/`    | **Dijeljenje**: Računa kvocijent dvaju brojeva                            | `1 / 2 //očekivani rezultat je 0.5` |
| `%`    | **Ostatak**: Računa ostatak od dijeljenja dvaju brojeva                   | `1 % 2 //očekivani rezultat je 1`   |

✅ Isprobajte! Isprobajte aritmetičku operaciju u konzoli vašeg preglednika. Jesu li vas rezultati iznenadili?

### Stringovi

U JavaScriptu se tekstualni podaci predstavljaju kao stringovi. Pojam "string" dolazi od koncepta znakova povezanih u niz, slično kao što su pisari u srednjovjekovnim samostanima povezivali slova kako bi oblikovali riječi i rečenice u svojim rukopisima.

Stringovi su temeljni za razvoj weba. Svaki komad teksta prikazan na web stranici – korisnička imena, oznake gumba, poruke o greškama, sadržaj – obrađuje se kao string podaci. Razumijevanje stringova ključno je za stvaranje funkcionalnih korisničkih sučelja.

Stringovi su skupovi znakova koji se nalaze između jednostrukih ili dvostrukih navodnika.

```javascript
'This is a string'
"This is also a string"
let myString = 'This is a string value stored in a variable';
```

**Razumijevanje ovih koncepata:**
- **Koristi** jednostruke `'` ili dvostruke `"` navodnike za definiranje stringova
- **Pohranjuje** tekstualne podatke koji mogu uključivati slova, brojeve i simbole
- **Dodjeljuje** vrijednosti stringova varijablama za kasniju upotrebu
- **Zahtijeva** navodnike kako bi razlikovao tekst od imena varijabli

Zapamtite da koristite navodnike prilikom pisanja stringa, inače će JavaScript pretpostaviti da se radi o imenu varijable.

### Formatiranje stringova

Manipulacija stringovima omogućuje kombiniranje tekstualnih elemenata, uključivanje varijabli i stvaranje dinamičkog sadržaja koji odgovara stanju programa. Ova tehnika omogućuje vam programsku izradu teksta.

Često trebate spojiti više stringova – ovaj proces naziva se konkatenacija.

Za **spajanje** dvaju ili više stringova koristite operator `+`.

```javascript
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
```

**Korak po korak, evo što se događa:**
- **Kombinira** više stringova koristeći operator `+`
- **Spaja** stringove izravno bez razmaka u prvom primjeru
- **Dodaje** razmake `" "` između stringova radi čitljivosti
- **Umeće** interpunkcijske znakove poput zareza za pravilno formatiranje

✅ Zašto `1 + 1 = 2` u JavaScriptu, ali `'1' + '1' = 11?` Razmislite o tome. Što je s `'1' + 1`?

**Predlošci stringova** su još jedan način formatiranja stringova, osim što se umjesto navodnika koristi znak za navođenje unatrag. Sve što nije običan tekst mora biti smješteno unutar zagrada `${ }`. To uključuje sve varijable koje mogu biti stringovi.

```javascript
let myString1 = "Hello";
let myString2 = "World";

`${myString1} ${myString2}!` //Hello World!
`${myString1}, ${myString2}!` //Hello, World!
```

**Razumijemo svaki dio:**
- **Koristi** znak za navođenje unatrag `` ` `` umjesto običnih navodnika za stvaranje predložaka stringova
- **Ugrađuje** varijable izravno koristeći sintaksu `${}`
- **Čuva** razmake i formatiranje točno onako kako je napisano
- **Pruža** čišći način za stvaranje složenih stringova s varijablama
Možete postići svoje ciljeve formatiranja bilo kojom metodom, ali predlošci literalnih nizova poštuju razmake i prijelome linija.

✅ Kada biste koristili predložak literalnog niza umjesto običnog niza?

### Booleani

Booleani predstavljaju najjednostavniji oblik podataka: mogu imati samo jednu od dvije vrijednosti – `true` ili `false`. Ovaj binarni logički sustav potječe od rada Georgea Boolea, matematičara iz 19. stoljeća koji je razvio Booleovu algebru.

Unatoč svojoj jednostavnosti, booleani su ključni za logiku programa. Omogućuju vašem kodu donošenje odluka na temelju uvjeta – je li korisnik prijavljen, je li gumb kliknut ili su li ispunjeni određeni kriteriji.

Booleani mogu imati samo dvije vrijednosti: `true` ili `false`. Booleani pomažu u donošenju odluka o tome koje linije koda trebaju biti izvršene kada su ispunjeni određeni uvjeti. U mnogim slučajevima, [operatori](../../../../2-js-basics/1-data-types) pomažu u postavljanju vrijednosti booleana, a često ćete primijetiti i pisati varijable koje se inicijaliziraju ili njihove vrijednosti ažuriraju pomoću operatora.

```javascript
let myTrueBool = true;
let myFalseBool = false;
```

**U gornjem primjeru, mi smo:**
- **Kreirali** varijablu koja pohranjuje Boolean vrijednost `true`
- **Pokazali** kako pohraniti Boolean vrijednost `false`
- **Koristili** točne ključne riječi `true` i `false` (bez navodnika)
- **Pripremili** ove varijable za korištenje u uvjetnim izjavama

✅ Varijabla se može smatrati 'istinitošću' ako se procjenjuje kao boolean `true`. Zanimljivo je da su u JavaScriptu [sve vrijednosti istinite osim ako nisu definirane kao lažne](https://developer.mozilla.org/docs/Glossary/Truthy).

---

## Izazov GitHub Copilot Agent 🚀

Koristite način rada Agent za dovršavanje sljedećeg izazova:

**Opis:** Kreirajte upravitelj osobnih informacija koji demonstrira sve vrste podataka u JavaScriptu koje ste naučili u ovoj lekciji, dok obrađujete scenarije stvarnih podataka.

**Zadatak:** Izradite JavaScript program koji kreira objekt korisničkog profila koji sadrži: ime osobe (string), dob (broj), status studenta (boolean), omiljene boje kao niz, i objekt adrese s svojstvima ulice, grada i poštanskog broja. Uključite funkcije za prikaz informacija o profilu i ažuriranje pojedinačnih polja. Obavezno demonstrirajte spajanje nizova, predloške literalnih nizova, aritmetičke operacije s dobi i logiku booleana za status studenta.

Saznajte više o [načinu rada agenta](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.

## 🚀 Izazov

JavaScript ima neka ponašanja koja mogu iznenaditi programere. Evo klasičnog primjera za istraživanje: pokušajte upisati ovo u konzolu preglednika: `let age = 1; let Age = 2; age == Age` i promatrajte rezultat. Vraća `false` – možete li odrediti zašto?

Ovo predstavlja jedno od mnogih ponašanja JavaScripta koje vrijedi razumjeti. Poznavanje ovih specifičnosti pomoći će vam da pišete pouzdaniji kod i učinkovitije rješavate probleme.

## Kviz nakon predavanja
[Kviz nakon predavanja](https://ff-quizzes.netlify.app)

## Pregled i samostalno učenje

Pogledajte [ovaj popis JavaScript vježbi](https://css-tricks.com/snippets/javascript/) i isprobajte jednu. Što ste naučili?

## Zadatak

[Praksa s vrstama podataka](assignment.md)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.