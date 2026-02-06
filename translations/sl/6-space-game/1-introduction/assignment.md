# Ustvarite igro: Uporaba vzorcev oblikovanja

## Pregled naloge

Uporabite svoje novo pridobljeno znanje o vzorcih oblikovanja za izdelavo preprostega prototipa igre! Ta naloga vam bo pomagala vaditi tako arhitekturne vzorce (dedovanje ali kompozicija) kot tudi sistem pub/sub komunikacije, ki ste ga spoznali v lekciji.

## Navodila

Ustvarite preprosto predstavitev igre, ki prikazuje vzorce oblikovanja iz te lekcije. Vaša igra naj bo funkcionalna, vendar ne potrebuje kompleksne grafike – osredotočite se na osnovno arhitekturo in komunikacijske vzorce.

### Zahteve

**Izberite svoj arhitekturni vzorec:**
- **Možnost A**: Uporabite dedovanje na osnovi razredov (kot primer `GameObject` → `Movable` → `Hero`)
- **Možnost B**: Uporabite kompozicijo (kot pristop tovarniške funkcije z mešanimi vedenji)

**Implementirajte komunikacijo:**
- **Vključite** razred `EventEmitter` za sporočanje pub/sub
- **Nastavite** vsaj 2-3 različne vrste sporočil (kot so `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Povežite** uporabniški vnos (tipkovnica/miška) z dogodki igre prek sistema dogodkov

**Elementi igre, ki jih je treba vključiti:**
- Vsaj en lik, ki ga nadzoruje igralec
- Vsaj en drug objekt igre (sovražnik, predmet za zbiranje ali element okolja)
- Osnovna interakcija med objekti (trki, zbiranje ali komunikacija)

### Predlagane ideje za igro

**Preproste igre, ki jih lahko razmislite:**
- **Igra kača** – Segmenti kače sledijo glavi, hrana se naključno pojavi
- **Različica Pong** – Lopar se odziva na vnos, žogica se odbija od sten
- **Igra zbiranja** – Igralec se premika in zbira predmete, medtem ko se izogiba oviram
- **Osnove obrambe stolpa** – Stolpi zaznajo in streljajo na premikajoče se sovražnike

### Smernice za strukturo kode

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testiranje vaše implementacije

**Preverite, ali vaša koda deluje:**
- **Preizkusite**, ali se objekti premikajo ali spreminjajo, ko se sprožijo dogodki
- **Potrdite**, da se več objektov lahko odzove na isti dogodek
- **Preverite**, ali lahko dodate nova vedenja, ne da bi spreminjali obstoječo kodo
- **Zagotovite**, da vnos s tipkovnico/miško pravilno sproži dogodke igre

## Smernice za oddajo

**Vaša oddaja naj vključuje:**
1. **JavaScript datoteko(-e)** z vašo implementacijo igre
2. **HTML datoteko** za zagon in testiranje vaše igre (lahko je preprosta)
3. **Komentarje**, ki pojasnjujejo, kateri vzorec ste izbrali in zakaj
4. **Kratko dokumentacijo** o vrstah sporočil in njihovem namenu

## Merila ocenjevanja

| Merila | Odlično (3 točke) | Zadostno (2 točki) | Potrebno izboljšanje (1 točka) |
|--------|-------------------|--------------------|--------------------------------|
| **Arhitekturni vzorec** | Pravilno implementira bodisi dedovanje ALI kompozicijo z jasno hierarhijo razredov/objektov | Uporablja izbrani vzorec z manjšimi težavami ali nedoslednostmi | Poskuša uporabiti vzorec, vendar ima implementacija velike težave |
| **Implementacija pub/sub** | EventEmitter deluje pravilno z več vrstami sporočil in ustreznim tokom dogodkov | Osnovni sistem pub/sub deluje z nekaj obdelave dogodkov | Sistem dogodkov je prisoten, vendar ne deluje zanesljivo |
| **Funkcionalnost igre** | Tri ali več interaktivnih elementov, ki komunicirajo prek dogodkov | Dva interaktivna elementa z osnovno komunikacijo dogodkov | En element se odziva na dogodke ali osnovno interakcijo |
| **Kakovost kode** | Čista, dobro komentirana koda z logično organizacijo in sodobnim JavaScriptom | Na splošno dobro organizirana koda z ustreznimi komentarji | Koda deluje, vendar ji primanjkuje organizacije ali jasnih komentarjev |

**Bonus točke:**
- **Kreativna mehanika igre**, ki prikazuje zanimivo uporabo vzorcev
- **Več metod vnosa** (dogodki tipkovnice IN miške)
- **Razširljiva arhitektura**, ki bi jo bilo enostavno razširiti z novimi funkcijami

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije je priporočljivo profesionalno človeško prevajanje. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.