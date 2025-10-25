<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-25T00:11:52+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, dio 2: Crtanje heroja i čudovišta na platno

Canvas API jedna je od najmoćnijih značajki web razvoja za stvaranje dinamičnih, interaktivnih grafika direktno u vašem pregledniku. U ovoj lekciji pretvorit ćemo taj prazan HTML `<canvas>` element u svijet igre ispunjen herojima i čudovištima. Zamislite platno kao svoju digitalnu umjetničku ploču gdje kod postaje vizualan.

Nadovezujemo se na ono što ste naučili u prethodnoj lekciji, a sada ćemo se posvetiti vizualnim aspektima. Naučit ćete kako učitati i prikazati spriteove igre, precizno pozicionirati elemente i stvoriti vizualne temelje za svoju svemirsku igru. Ovo je most između statičnih web stranica i dinamičnih, interaktivnih iskustava.

Na kraju ove lekcije imat ćete kompletan prizor igre s vašim herojskim brodom pravilno pozicioniranim i formacijama neprijatelja spremnim za bitku. Razumjet ćete kako moderne igre renderiraju grafiku u preglednicima i steći vještine za stvaranje vlastitih interaktivnih vizualnih iskustava. Istražimo grafiku na platnu i oživimo vašu svemirsku igru!

## Kviz prije predavanja

[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Što je točno `<canvas>` element? To je HTML5 rješenje za stvaranje dinamičnih grafika i animacija u web preglednicima. Za razliku od običnih slika ili videa koji su statični, canvas vam daje kontrolu nad svakim pikselom na ekranu. To ga čini savršenim za igre, vizualizaciju podataka i interaktivnu umjetnost. Zamislite ga kao programabilnu površinu za crtanje gdje JavaScript postaje vaš kist.

Po defaultu, canvas element izgleda kao prazan, transparentan pravokutnik na vašoj stranici. Ali tu leži njegov potencijal! Njegova prava moć dolazi do izražaja kada koristite JavaScript za crtanje oblika, učitavanje slika, stvaranje animacija i omogućavanje interakcije s korisnicima. Slično je tome kako su pioniri računalne grafike u Bell Labsu 1960-ih morali programirati svaki piksel kako bi stvorili prve digitalne animacije.

✅ Pročitajte [više o Canvas API-ju](https://developer.mozilla.org/docs/Web/API/Canvas_API) na MDN-u.

Evo kako se obično deklarira, kao dio tijela stranice:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Što ovaj kod radi:**
- **Postavlja** atribut `id` kako biste mogli referencirati ovaj specifični canvas element u JavaScriptu
- **Definira** širinu u pikselima za kontrolu horizontalne veličine platna
- **Postavlja** visinu u pikselima za određivanje vertikalnih dimenzija platna

## Crtanje jednostavne geometrije

Sada kada znate što je canvas element, istražimo kako zapravo crtati na njemu! Canvas koristi koordinatni sustav koji vam može biti poznat iz matematike, ali postoji jedna važna razlika specifična za računalnu grafiku.

Canvas koristi kartezijanski koordinatni sustav s x-osom (horizontalno) i y-osom (vertikalno) za pozicioniranje svega što crtate. Ali evo ključne razlike: za razliku od koordinatnog sustava iz matematike, početna točka `(0,0)` počinje u gornjem lijevom kutu, pri čemu se vrijednosti x povećavaju kako se pomičete desno, a vrijednosti y povećavaju kako se pomičete dolje. Ovaj pristup datira iz ranih računalnih zaslona gdje su elektronske zrake skenirale od vrha prema dolje, čineći gornji lijevi kut prirodnom početnom točkom.

![mreža platna](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.hr.png)
> Slika s [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Za crtanje na canvas elementu slijedit ćete isti trostupanjski proces koji čini temelj svih grafika na platnu. Nakon što to učinite nekoliko puta, postaje prirodno:

1. **Dobijte referencu** na svoj Canvas element iz DOM-a (kao i za bilo koji drugi HTML element)
2. **Dobijte 2D kontekst za renderiranje** – on pruža sve metode za crtanje
3. **Počnite crtati!** Koristite ugrađene metode konteksta za stvaranje grafike

Evo kako to izgleda u kodu:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Razložimo ovo korak po korak:**
- **Uzimamo** naš canvas element koristeći njegov ID i spremamo ga u varijablu
- **Dobivamo** 2D kontekst za renderiranje – to je naš alat pun metoda za crtanje
- **Kažemo** canvasu da želimo ispuniti stvari crvenom bojom koristeći svojstvo `fillStyle`
- **Crtamo** pravokutnik koji počinje u gornjem lijevom kutu (0,0) i širok je 200 piksela i visok 200 piksela

✅ Canvas API uglavnom se fokusira na 2D oblike, ali možete crtati i 3D elemente na web stranici; za to biste mogli koristiti [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Možete crtati razne stvari s Canvas API-jem, kao što su:

- **Geometrijski oblici**, već smo pokazali kako nacrtati pravokutnik, ali postoji mnogo više što možete nacrtati.
- **Tekst**, možete nacrtati tekst s bilo kojim fontom i bojom koju želite.
- **Slike**, možete nacrtati sliku na temelju slike kao što je .jpg ili .png, na primjer.

✅ Isprobajte! Znate kako nacrtati pravokutnik, možete li nacrtati krug na stranici? Pogledajte neke zanimljive crteže na Canvasu na CodePenu. Evo [posebno impresivnog primjera](https://codepen.io/dissimulate/pen/KrAwx).

## Učitavanje i crtanje slike

Crtanje osnovnih oblika korisno je za početak, ali većina igara treba stvarne slike! Spriteovi, pozadine i teksture ono su što daje igrama vizualnu privlačnost. Učitavanje i prikazivanje slika na platnu funkcionira drugačije od crtanja geometrijskih oblika, ali je jednostavno kad shvatite proces.

Moramo stvoriti objekt `Image`, učitati našu datoteku slike (to se događa asinkrono, što znači "u pozadini") i zatim je nacrtati na platno kad bude spremna. Ovaj pristup osigurava da se vaše slike pravilno prikazuju bez blokiranja aplikacije dok se učitavaju.

### Osnovno učitavanje slike

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Što se događa u ovom kodu:**
- **Stvaramo** potpuno novi objekt slike za pohranu našeg spritea ili teksture
- **Kažemo** mu koju datoteku slike treba učitati postavljanjem putanje izvora
- **Slušamo** događaj učitavanja kako bismo točno znali kada je slika spremna za upotrebu

### Bolji način za učitavanje slika

Evo robusnijeg načina za rukovanje učitavanjem slika koji profesionalni programeri često koriste. Učitavanje slika ćemo omotati u funkciju temeljenu na Promisima – ovaj pristup, populariziran kada su JavaScript Promises postali standard u ES6, čini vaš kod organiziranijim i elegantno rješava greške:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**Što smo ovdje učinili:**
- **Omotali** svu logiku učitavanja slika u Promise kako bismo njime bolje upravljali
- **Dodali** rukovanje greškama koje nam zapravo govori kada nešto pođe po zlu
- **Koristili** modernu async/await sintaksu jer je puno čišća za čitanje
- **Uključili** try/catch blokove za elegantno rukovanje bilo kakvim problemima pri učitavanju

Kad su vaše slike učitane, njihovo crtanje na platno zapravo je prilično jednostavno:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**Razložimo ovo korak po korak:**
- **Učitavamo** slike heroja i čudovišta u pozadini koristeći await
- **Uzimamo** naš canvas element i dobivamo taj 2D kontekst za renderiranje koji nam treba
- **Pozicioniramo** sliku heroja točno u sredinu koristeći malo brze matematike za koordinate
- **Postavljamo** sliku čudovišta u gornji lijevi kut kako bismo započeli formaciju neprijatelja
- **Hvatamo** sve greške koje se mogu dogoditi tijekom učitavanja ili renderiranja

## Vrijeme je da počnete graditi svoju igru

Sada ćemo sve spojiti kako bismo stvorili vizualne temelje vaše svemirske igre. Imate solidno razumijevanje osnova platna i tehnika učitavanja slika, pa će vas ovaj praktični dio voditi kroz izradu kompletnog ekrana igre s pravilno pozicioniranim spriteovima.

### Što izgraditi

Izradit ćete web stranicu s Canvas elementom. Trebala bi prikazivati crni ekran `1024*768`. Dostavili smo vam dvije slike:

- Herojski brod

   ![Herojski brod](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.hr.png)

- 5*5 čudovišta

   ![Brod čudovišta](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.hr.png)

### Preporučeni koraci za početak razvoja

Pronađite početne datoteke koje su stvorene za vas u podmapi `your-work`. Struktura vašeg projekta trebala bi sadržavati:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Što imate na raspolaganju:**
- **Spriteovi igre** nalaze se u mapi `assets/` kako bi sve ostalo organizirano
- **Vaša glavna HTML datoteka** postavlja canvas element i priprema sve
- **JavaScript datoteka** u kojoj ćete napisati svu magiju za renderiranje igre
- **package.json** koji postavlja razvojni server kako biste mogli testirati lokalno

Otvorite ovu mapu u Visual Studio Codeu kako biste započeli razvoj. Trebat će vam lokalno razvojno okruženje s instaliranim Visual Studio Codeom, NPM-om i Node.js-om. Ako nemate postavljen `npm` na svom računalu, [evo kako ga instalirati](https://www.npmjs.com/get-npm).

Pokrenite svoj razvojni server tako da odete u mapu `your-work`:

```bash
cd your-work
npm start
```

**Ova naredba radi nekoliko prilično zanimljivih stvari:**
- **Pokreće** lokalni server na `http://localhost:5000` kako biste mogli testirati svoju igru
- **Poslužuje** sve vaše datoteke kako bi ih vaš preglednik mogao ispravno učitati
- **Prati** promjene u vašim datotekama kako biste mogli glatko razvijati
- **Pruža vam** profesionalno razvojno okruženje za testiranje svega

> 💡 **Napomena**: Vaš preglednik će isprva prikazivati praznu stranicu – to je očekivano! Kako dodajete kod, osvježite preglednik da biste vidjeli promjene. Ovaj iterativni pristup razvoju sličan je načinu na koji je NASA izgradila Apollo računalni sustav za navođenje – testirajući svaki komponent prije integracije u veći sustav.

### Dodajte kod

Dodajte potrebni kod u `your-work/app.js` kako biste dovršili sljedeće zadatke:

1. **Nacrtajte platno s crnom pozadinom**
   > 💡 **Kako**: Pronađite TODO u `/app.js` i dodajte samo dvije linije. Postavite `ctx.fillStyle` na crno, zatim koristite `ctx.fillRect()` počevši od (0,0) s dimenzijama vašeg platna. Jednostavno!

2. **Učitajte teksture igre**
   > 💡 **Kako**: Koristite `await loadAsset()` za učitavanje slika igrača i neprijatelja. Spremite ih u varijable kako biste ih kasnije mogli koristiti. Zapamtite – neće se prikazati dok ih zapravo ne nacrtate!

3. **Nacrtajte herojski brod u sredini-donjoj poziciji**
   > 💡 **Kako**: Koristite `ctx.drawImage()` za pozicioniranje heroja. Za x-koordinatu pokušajte `canvas.width / 2 - 45` za centriranje, a za y-koordinatu koristite `canvas.height - canvas.height / 4` za postavljanje u donji dio.

4. **Nacrtajte formaciju neprijateljskih brodova 5×5**
   > 💡 **Kako**: Pronađite funkciju `createEnemies` i postavite ugniježđenu petlju. Trebat ćete malo matematike za razmak i pozicioniranje, ali ne brinite – pokazat ću vam točno kako!

Prvo, postavite konstante za pravilni raspored formacije neprijatelja:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Razložimo što ove konstante rade:**
- **Postavljamo** 5 neprijatelja po redu i stupcu (lijepa mreža 5×5)
- **Definiramo** koliko prostora treba biti između neprijatelja kako ne bi izgledali zbijeno
- **Izračunavamo** koliko će široka biti cijela formacija
- **Određujemo** gdje početi i završiti kako bi formacija izgledala centrirano

Zatim, stvorite ugniježđene petlje za crtanje formacije neprijatelja:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Što ova ugniježđena petlja radi:**
- Vanjska petlja **pomjera se** s lijeva na desno kroz našu formaciju
- Unutarnja petlja **ide** od vrha prema dolje kako bi stvorila uredne redove
- **Crtamo** svaki sprite neprijatelja na točno izračunatim x,y koordinatama
- Sve ostaje **ravnomjerno raspoređeno** kako bi izgledalo profesionalno i organizirano

## Rezultat

Završni rezultat trebao bi izgledati ovako:

![Crni ekran s herojem i 5*5 čudovišta](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.hr.png)

## Rješenje

Pokušajte prvo sami riješiti, ali ako zapnete, pogledajte [rješenje](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)

---

## Izazov GitHub Copilot Agent 🚀

Koristite Agent način rada za dovršavanje sljedećeg izazova:

**Opis:** Poboljšajte svoje platno svemirske igre dodavanjem vizualnih efekata i interaktivnih elemenata koristeći tehnike Canvas API-ja koje ste naučili.

**Zadatak:** Napravite novu datoteku pod nazivom `enhanced-canvas.html` s platnom koje prikazuje animirane zvijezde u pozadini, pulsirajuću traku zdravlja za herojski brod i neprijateljske brodove koji se polako spuštaju. Uključite JavaScript kod koji crta treperave zvijezde koristeći nasumične pozicije i prozirnost, implementira traku zdravlja koja mijenja boju ovisno o razini zdravlja (zelena > žuta > crvena) i animira neprijateljske brodove da se spuštaju niz ekran različitim brzinama.

Saznajte više o [agent načinu rada](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) ovdje.

## 🚀 Izazov

Naučili ste o crtanju s 2D-fokusiranim Canvas API-jem; pogledajte [WebGL API](https://developer.mozilla.org/docs/Web/API/WebGL_API) i pokušajte nacrtati 3D objekt.

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/32)

## Pregled i samostalno učenje

Saznajte više o Canvas API-ju [čitajući o njemu](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Zadatak

[Isprobajte Canvas API](assignment.md)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja mogu proizaći iz korištenja ovog prijevoda.