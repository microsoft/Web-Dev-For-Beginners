<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d642759cf1542f554871f74956a59af9",
  "translation_date": "2025-10-25T00:44:48+00:00",
  "source_file": "6-space-game/5-keeping-score/README.md",
  "language_code": "sl"
}
-->
# Zgradite vesoljsko igro, 5. del: Točke in življenja

## Predhodni kviz

[Predhodni kviz](https://ff-quizzes.netlify.app/web/quiz/37)

Pripravljeni, da vaša vesoljska igra postane prava igra? Dodajmo točkovanje in upravljanje življenj - osnovne mehanike, ki so zgodnje arkadne igre, kot je Space Invaders, spremenile iz preprostih demonstracij v zasvojljivo zabavo. Tukaj vaša igra postane resnično igriva.

## Risanje besedila na zaslon - glas vaše igre

Za prikaz vaših točk se moramo naučiti, kako prikazati besedilo na platnu. Metoda `fillText()` je vaše glavno orodje za to - gre za isto tehniko, ki so jo uporabljale klasične arkadne igre za prikaz točk in informacij o statusu.

Imate popoln nadzor nad videzom besedila:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "red";
ctx.textAlign = "right";
ctx.fillText("show this on the screen", 0, 0);
```

✅ Poglobite se v [dodajanje besedila na platno](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_text) - morda boste presenečeni, kako ustvarjalni lahko postanete z izbiro pisav in stilov!

## Življenja - več kot le številka

V oblikovanju iger "življenje" predstavlja igralčevo mejo za napake. Ta koncept izvira iz fliperjev, kjer ste dobili več kroglic za igro. V zgodnjih video igrah, kot je Asteroids, so življenja igralcem omogočila, da tvegajo in se učijo iz napak.

Vizualna predstavitev je zelo pomembna - prikaz ikon ladij namesto zgolj "Življenja: 3" ustvarja takojšnje vizualno prepoznavanje, podobno kot so zgodnji arkadni avtomati uporabljali ikonografijo za komunikacijo preko jezikovnih ovir.

## Gradnja sistema nagrajevanja vaše igre

Zdaj bomo implementirali osnovne povratne sisteme, ki ohranjajo igralce angažirane:

- **Sistem točkovanja**: Vsaka uničena sovražna ladja prinese 100 točk (okrogle številke so lažje za mentalno računanje). Točke se prikazujejo v spodnjem levem kotu.
- **Števec življenj**: Vaš junak začne s tremi življenji - standard, ki so ga zgodnje arkadne igre vzpostavile za uravnoteženje izziva in igrivosti. Vsak trk s sovražnikom stane eno življenje. Preostala življenja bomo prikazali v spodnjem desnem kotu z ikonami ladij ![slika življenja](../../../../translated_images/life.6fb9f50d53ee0413cd91aa411f7c296e10a1a6de5c4a4197c718b49bf7d63ebf.sl.png).

## Začnimo z gradnjo!

Najprej pripravite svoje delovno okolje. Pomaknite se do datotek v podmapi `your-work`. Videti bi morali te datoteke:

```bash
-| assets
  -| enemyShip.png
  -| player.png
  -| laserRed.png
-| index.html
-| app.js
-| package.json
```

Za testiranje igre zaženite razvojni strežnik iz mape `your_work`:

```bash
cd your-work
npm start
```

To bo zagnalo lokalni strežnik na `http://localhost:5000`. Odprite ta naslov v svojem brskalniku, da vidite svojo igro. Preizkusite kontrole s puščičnimi tipkami in poskusite streljati na sovražnike, da preverite, ali vse deluje.

### Čas za kodiranje!

1. **Pridobite vizualne elemente, ki jih potrebujete**. Kopirajte datoteko `life.png` iz mape `solution/assets/` v svojo mapo `your-work`. Nato dodajte lifeImg v funkcijo window.onload:

    ```javascript
    lifeImg = await loadTexture("assets/life.png");
    ```

1. Ne pozabite dodati `lifeImg` na seznam svojih sredstev:

    ```javascript
    let heroImg,
    ...
    lifeImg,
    ...
    eventEmitter = new EventEmitter();
    ```
  
2. **Nastavite spremenljivke igre**. Dodajte nekaj kode za sledenje skupnim točkam (začetek pri 0) in preostalim življenjem (začetek pri 3). Te bomo prikazali na zaslonu, da bodo igralci vedno vedeli, kje so.

3. **Implementirajte zaznavanje trkov**. Razširite svojo funkcijo `updateGameObjects()`, da zazna, kdaj sovražniki trčijo z vašim junakom:

    ```javascript
    enemies.forEach(enemy => {
        const heroRect = hero.rectFromGameObject();
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
          eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
      })
    ```

4. **Dodajte sledenje življenjem in točkam svojemu junaku**. 
   1. **Inicializirajte števce**. Pod `this.cooldown = 0` v razredu `Hero` nastavite življenja in točke:

        ```javascript
        this.life = 3;
        this.points = 0;
        ```

   1. **Prikažite te vrednosti igralcu**. Ustvarite funkcije za prikaz teh vrednosti na zaslonu:

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

   1. **Povežite vse v zanko igre**. Dodajte te funkcije v svojo funkcijo window.onload takoj za `updateGameObjects()`:

        ```javascript
        drawPoints();
        drawLife();
        ```

1. **Implementirajte posledice in nagrade v igri**. Zdaj bomo dodali povratne sisteme, ki dajejo pomen igralčevim dejanjem:

   1. **Trki stanejo življenja**. Vsakič, ko vaš junak trči v sovražnika, bi morali izgubiti eno življenje.
   
      Dodajte to metodo v svoj razred `Hero`:

        ```javascript
        decrementLife() {
          this.life--;
          if (this.life === 0) {
            this.dead = true;
          }
        }
        ```

   2. **Streljanje na sovražnike prinese točke**. Vsak uspešen zadetek prinese 100 točk, kar zagotavlja takojšnjo pozitivno povratno informacijo za natančno streljanje.

      Razširite razred Hero s to metodo za povečanje točk:
    
        ```javascript
          incrementPoints() {
            this.points += 100;
          }
        ```

        Zdaj povežite te funkcije z dogodki trkov:

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

✅ Vas zanima, katere druge igre so bile zgrajene z JavaScriptom in Canvasom? Raziščite - morda boste presenečeni nad tem, kaj je mogoče!

Ko implementirate te funkcije, preizkusite svojo igro, da vidite celoten povratni sistem v akciji. Videti bi morali ikone življenj v spodnjem desnem kotu, svoje točke v spodnjem levem kotu, in opazovati, kako trki zmanjšujejo življenja, medtem ko uspešni streli povečujejo vaše točke.

Vaša igra zdaj vsebuje osnovne mehanike, ki so zgodnje arkadne igre naredile tako privlačne - jasne cilje, takojšnjo povratno informacijo in smiselne posledice za igralčeva dejanja.

---

## GitHub Copilot Agent izziv 🚀

Uporabite način Agent za dokončanje naslednjega izziva:

**Opis:** Izboljšajte sistem točkovanja vesoljske igre z implementacijo funkcije za shranjevanje najvišjih točk in mehanike bonus točk.

**Navodilo:** Ustvarite sistem najvišjih točk, ki shrani najboljši rezultat igralca v localStorage. Dodajte bonus točke za zaporedne uničene sovražnike (sistem kombinacij) in implementirajte različne vrednosti točk za različne vrste sovražnikov. Dodajte vizualni indikator, ko igralec doseže nov najvišji rezultat, in prikažite trenutni najvišji rezultat na zaslonu igre.



## 🚀 Izziv

Zdaj imate funkcionalno igro s točkovanjem in življenji. Razmislite, katere dodatne funkcije bi lahko izboljšale igralno izkušnjo.

## Kviz po predavanju

[Kviz po predavanju](https://ff-quizzes.netlify.app/web/quiz/38)

## Pregled in samostojno učenje

Želite raziskati več? Raziščite različne pristope k sistemom točkovanja in življenj v igrah. Obstajajo fascinantni igralni motorji, kot je [PlayFab](https://playfab.com), ki obravnavajo točkovanje, lestvice najboljših in napredovanje igralcev. Kako bi integracija nečesa takega dvignila vašo igro na višjo raven?

## Naloga

[Zgradite igro s točkovanjem](assignment.md)

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.