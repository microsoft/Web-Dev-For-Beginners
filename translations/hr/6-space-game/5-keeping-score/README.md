<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-25T00:14:24+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "hr"
}
-->
# Izgradnja svemirske igre, dio 5: Bodovi i životi

## Kviz prije predavanja

[Kviz prije predavanja](https://ff-quizzes.netlify.app/web/quiz/37)

Spremni da vaša svemirska igra postane prava igra? Dodajmo bodovanje i upravljanje životima - ključne mehanike koje su transformirale rane arkadne igre poput Space Invadersa iz jednostavnih demonstracija u zaraznu zabavu. Ovo je trenutak kada vaša igra postaje zaista igriva.

## Prikazivanje teksta na ekranu - Glas vaše igre

Kako bismo prikazali vaš rezultat, moramo naučiti kako prikazati tekst na platnu. Metoda `fillText()` vaš je glavni alat za to - ista tehnika koja se koristila u klasičnim arkadnim igrama za prikaz rezultata i informacija o statusu.

Imate potpunu kontrolu nad izgledom teksta:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Pogledajte više o [dodavanju teksta na platno](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - mogli biste se iznenaditi koliko kreativni možete biti s fontovima i stilovima!

## Životi - Više od samo broja

U dizajnu igara, "život" predstavlja marginu pogreške igrača. Ovaj koncept potječe još iz vremena fliper automata, gdje ste dobivali više kuglica za igru. U ranim video igrama poput Asteroids, životi su igračima omogućavali da riskiraju i uče iz svojih grešaka.

Vizualna reprezentacija ima značajnu ulogu - prikazivanje ikona brodova umjesto samo "Životi: 3" stvara trenutnu vizualnu prepoznatljivost, slično kao što su rani arkadni automati koristili ikonografiju za komunikaciju bez obzira na jezične barijere.

## Izgradnja sustava nagrađivanja u vašoj igri

Sada ćemo implementirati osnovne sustave povratnih informacija koji drže igrače angažiranima:

- **Sustav bodovanja**: Svaki uništeni neprijateljski brod donosi 100 bodova (okrugli brojevi su lakši za mentalno računanje). Rezultat se prikazuje u donjem lijevom kutu.
- **Brojač života**: Vaš junak počinje s tri života - standard koji su postavile rane arkadne igre kako bi uravnotežile izazov i igrivost. Svaki sudar s neprijateljem košta jedan život. Preostali životi prikazat će se u donjem desnom kutu koristeći ikone brodova ![slika života](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.hr.png).

## Krenimo s izgradnjom!

Prvo, postavite svoj radni prostor. Navigirajte do datoteka u mapi `your-work`. Trebali biste vidjeti ove datoteke:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Za testiranje igre, pokrenite razvojni server iz mape `your_work`:

```bash
cd your-work
npm start
```

Ovo pokreće lokalni server na `http://localhost:5000`. Otvorite ovu adresu u svom pregledniku kako biste vidjeli svoju igru. Testirajte kontrole pomoću strelica i pokušajte pucati na neprijatelje kako biste provjerili radi li sve.

### Vrijeme za kodiranje!

1. **Preuzmite vizualne resurse koji su vam potrebni**. Kopirajte datoteku `life.png` iz mape `solution/assets/` u svoju mapu `your-work`. Zatim dodajte `lifeImg` u svoju funkciju window.onload: 

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Ne zaboravite dodati `lifeImg` na popis resursa:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Postavite varijable za igru**. Dodajte kod za praćenje ukupnog rezultata (početak od 0) i preostalih života (početak od 3). Prikazat ćemo ih na ekranu kako bi igrači uvijek znali gdje se nalaze.

3. **Implementirajte detekciju sudara**. Proširite svoju funkciju `updateGameObjects()` kako biste otkrili kada neprijatelji sudaraju s vašim junakom:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Dodajte praćenje života i bodova svom junaku**. 
   1. **Inicijalizirajte brojače**. Ispod `this.cooldown = 0` u vašoj klasi `Hero`, postavite živote i bodove:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Prikazivanje ovih vrijednosti igraču**. Kreirajte funkcije za prikaz ovih vrijednosti na ekranu:

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

   1. **Povežite sve s vašom petljom igre**. Dodajte ove funkcije u svoju funkciju window.onload odmah nakon `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementirajte posljedice i nagrade u igri**. Sada ćemo dodati sustave povratnih informacija koji čine radnje igrača značajnima:

   1. **Sudar košta živote**. Svaki put kad vaš junak udari u neprijatelja, gubi jedan život.
   
      Dodajte ovu metodu u svoju klasu `Hero`:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Pucanje na neprijatelje donosi bodove**. Svaki uspješan pogodak donosi 100 bodova, pružajući trenutnu pozitivnu povratnu informaciju za precizno pucanje.

      Proširite svoju klasu Hero ovom metodom za povećanje bodova:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Sada povežite ove funkcije s događajima sudara:

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

✅ Zanimaju vas druge igre izrađene pomoću JavaScripta i Canvasa? Istražite malo - mogli biste se iznenaditi što je sve moguće!

Nakon implementacije ovih značajki, testirajte svoju igru kako biste vidjeli cijeli sustav povratnih informacija u akciji. Trebali biste vidjeti ikone života u donjem desnom kutu, rezultat u donjem lijevom kutu, te pratiti kako sudari smanjuju živote, dok uspješni pogoci povećavaju vaš rezultat.

Vaša igra sada ima osnovne mehanike koje su rane arkadne igre činile tako privlačnima - jasne ciljeve, trenutne povratne informacije i značajne posljedice za radnje igrača.

---

## Izazov GitHub Copilot Agent 🚀

Koristite način rada Agent za dovršavanje sljedećeg izazova:

**Opis:** Poboljšajte sustav bodovanja svemirske igre implementacijom značajke za visoki rezultat s trajnim pohranom i mehanikom bonus bodova.

**Zadatak:** Kreirajte sustav visokih rezultata koji sprema najbolji rezultat igrača u localStorage. Dodajte bonus bodove za uzastopna uništenja neprijatelja (sustav kombinacija) i implementirajte različite vrijednosti bodova za različite vrste neprijatelja. Uključite vizualni indikator kada igrač postigne novi visoki rezultat i prikažite trenutni visoki rezultat na ekranu igre.



## 🚀 Izazov

Sada imate funkcionalnu igru s bodovanjem i životima. Razmislite koje dodatne značajke bi mogle poboljšati iskustvo igrača.

## Kviz nakon predavanja

[Kviz nakon predavanja](https://ff-quizzes.netlify.app/web/quiz/38)

## Pregled i samostalno učenje

Želite istražiti više? Istražite različite pristupe sustavima bodovanja i života u igrama. Postoje fascinantni sustavi za izradu igara poput [PlayFab](https://playfab.com) koji se bave bodovanjem, ljestvicama i napretkom igrača. Kako bi integracija nečeg takvog mogla podići vašu igru na višu razinu?

## Zadatak

[Izgradite igru s bodovanjem](assignment.md)

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.