<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "adda95e02afa3fbee67b6e385b1109e1",
  "translation_date": "2025-08-29T12:32:59+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, dio 5: Bodovi i životi

## Kviz prije predavanja

[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/37)

U ovoj lekciji naučit ćete kako dodati bodove u igru i izračunavati živote.

## Iscrtavanje teksta na ekranu

Kako biste mogli prikazati rezultat igre na ekranu, trebate znati kako postaviti tekst na ekran. Odgovor je korištenje metode `fillText()` na objektu canvas. Također možete kontrolirati i druge aspekte poput fonta, boje teksta pa čak i poravnanja (lijevo, desno, centrirano). Ispod je primjer koda koji iscrtava tekst na ekranu.

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Pročitajte više o [dodavanju teksta na canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) i slobodno učinite svoj tekst vizualno privlačnijim!

## Život kao koncept u igri

Koncept života u igri je samo broj. U kontekstu svemirske igre, uobičajeno je dodijeliti određeni broj života koji se smanjuju jedan po jedan kada vaš brod pretrpi štetu. Lijepo je ako možete prikazati grafičku reprezentaciju toga, poput malih brodova ili srca, umjesto samog broja.

## Što ćemo izgraditi

Dodajmo sljedeće u vašu igru:

- **Rezultat igre**: Za svaki neprijateljski brod koji uništite, heroj bi trebao dobiti određeni broj bodova, predlažemo 100 bodova po brodu. Rezultat igre trebao bi biti prikazan u donjem lijevom kutu.
- **Životi**: Vaš brod ima tri života. Gubite jedan život svaki put kada se neprijateljski brod sudari s vama. Broj života trebao bi biti prikazan u donjem desnom kutu i sastojati se od sljedeće grafike ![slika života](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.hr.png).

## Preporučeni koraci

Pronađite datoteke koje su već kreirane za vas u podmapi `your-work`. Trebale bi sadržavati sljedeće:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Pokrenite svoj projekt u mapi `your_work` upisivanjem:

```bash
cd your-work
npm start
```

Gornja naredba pokrenut će HTTP poslužitelj na adresi `http://localhost:5000`. Otvorite preglednik i unesite tu adresu. Trenutno bi trebala prikazivati heroja i sve neprijatelje, a pritiskom na lijevu i desnu strelicu heroj se pomiče i može pucati na neprijatelje.

### Dodavanje koda

1. **Kopirajte potrebne resurse** iz mape `solution/assets/` u mapu `your-work`; dodajte resurs `life.png`. Dodajte `lifeImg` u funkciju `window.onload`:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Dodajte `lifeImg` na popis resursa:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Dodajte varijable**. Dodajte kod koji predstavlja vaš ukupni rezultat (0) i preostale živote (3), te prikažite te vrijednosti na ekranu.

3. **Proširite funkciju `updateGameObjects()`**. Proširite funkciju `updateGameObjects()` kako bi obrađivala sudare s neprijateljima:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Dodajte `life` i `points`**. 
   1. **Inicijalizirajte varijable**. Ispod `this.cooldown = 0` u klasi `Hero`, postavite život i bodove:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Iscrtajte varijable na ekranu**. Prikažite te vrijednosti na ekranu:

        ```javascript
        function drawLife() {
          // TODO, 35, 27
          const START_POS = canvas.width - 180;
          for(let i=0; i < hero.life; i++ ) {
            ctx.drawImage(
              lifeImg, 
              START_POS + (45 * (i+1) ), 
              canvas.height - 37);
          }
        }
        
        function drawPoints() {
          ctx.font = "30px Arial";
          ctx.fillStyle = "red";
          ctx.textAlign = "left";
          drawText("Points: " + hero.points, 10, canvas.height-20);
        }
        
        function drawText(message, x, y) {
          ctx.fillText(message, x, y);
        }

        ```

   1. **Dodajte metode u petlju igre**. Pobrinite se da dodate ove funkcije u svoju funkciju `window.onload` ispod `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementirajte pravila igre**. Implementirajte sljedeća pravila igre:

   1. **Za svaku koliziju heroja i neprijatelja**, oduzmite jedan život.
   
      Proširite klasu `Hero` kako biste to omogućili:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Za svaki laser koji pogodi neprijatelja**, povećajte rezultat igre za 100 bodova.

      Proširite klasu `Hero` kako biste to omogućili:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Dodajte ove funkcije u svoje emitere događaja sudara:

        ```javascript
        eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
           first.dead = true;
           second.dead = true;
           hero.incrementPoints();
        })

        eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
           enemy.dead = true;
           hero.decrementLife();
        });
        ```

✅ Istražite druge igre koje su izrađene pomoću JavaScript/Canvas. Koje su njihove zajedničke karakteristike?

Na kraju ovog zadatka trebali biste vidjeti male brodove za živote u donjem desnom kutu, bodove u donjem lijevom kutu, te biste trebali vidjeti kako se broj života smanjuje kada se sudarite s neprijateljima, a bodovi povećavaju kada pucate na neprijatelje. Bravo! Vaša igra je gotovo gotova.

---

## 🚀 Izazov

Vaš kod je gotovo dovršen. Možete li zamisliti svoje sljedeće korake?

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/38)

## Pregled i samostalno učenje

Istražite načine na koje možete povećavati i smanjivati bodove i živote u igri. Postoje zanimljivi alati za razvoj igara poput [PlayFab](https://playfab.com). Kako bi korištenje jednog od njih moglo unaprijediti vašu igru?

## Zadatak

[Izgradite igru s bodovanjem](assignment.md)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.