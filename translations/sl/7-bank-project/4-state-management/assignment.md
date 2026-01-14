<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-25T00:35:43+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "sl"
}
-->
# Implementacija pogovornega okna "Dodaj transakcijo"

## Pregled

Vaša bančna aplikacija zdaj vključuje zanesljivo upravljanje stanja in shranjevanje podatkov, vendar ji manjka ključna funkcija, ki jo potrebujejo prave bančne aplikacije: možnost, da uporabniki dodajo svoje transakcije. V tej nalogi boste implementirali celovito pogovorno okno "Dodaj transakcijo", ki se brezhibno integrira z vašim obstoječim sistemom za upravljanje stanja.

Ta naloga združuje vse, kar ste se naučili v štirih lekcijah o bančništvu: predloge HTML, obdelavo obrazcev, integracijo API-jev in upravljanje stanja.

## Cilji učenja

Z dokončanjem te naloge boste:
- **Ustvarili** uporabniku prijazen vmesnik za vnos podatkov
- **Implementirali** dostopen dizajn obrazca s podporo za tipkovnico in bralnike zaslona
- **Integrirali** nove funkcije v vaš obstoječi sistem za upravljanje stanja
- **Vadili** komunikacijo z API-jem in obravnavo napak
- **Uporabili** sodobne vzorce spletnega razvoja za funkcionalnost iz resničnega sveta

## Navodila

### Korak 1: Gumb za dodajanje transakcije

**Ustvarite** gumb "Dodaj transakcijo" na strani nadzorne plošče, ki ga uporabniki zlahka najdejo in dostopajo do njega.

**Zahteve:**
- **Postavite** gumb na logično mesto na nadzorni plošči
- **Uporabite** jasno, akcijsko usmerjeno besedilo gumba
- **Oblikujte** gumb tako, da se ujema z obstoječim dizajnom uporabniškega vmesnika
- **Zagotovite**, da je gumb dostopen s tipkovnico

### Korak 2: Implementacija pogovornega okna

Izberite enega od teh dveh pristopov za implementacijo pogovornega okna:

**Možnost A: Ločena stran**
- **Ustvarite** novo predlogo HTML za obrazec transakcije
- **Dodajte** novo pot v vaš sistem za usmerjanje
- **Implementirajte** navigacijo do in iz strani obrazca

**Možnost B: Modalno pogovorno okno (priporočeno)**
- **Uporabite** JavaScript za prikaz/skritje pogovornega okna, ne da bi zapustili nadzorno ploščo
- **Implementirajte** z uporabo lastnosti [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) ali CSS razredov
- **Ustvarite** gladko uporabniško izkušnjo z ustreznim upravljanjem fokusa

### Korak 3: Implementacija dostopnosti

**Zagotovite**, da vaše pogovorno okno ustreza [standardom dostopnosti za modalna pogovorna okna](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Navigacija s tipkovnico:**
- **Podprite** tipko Escape za zapiranje pogovornega okna
- **Ujemite** fokus znotraj pogovornega okna, ko je odprto
- **Vrnete** fokus na gumb za sprožitev, ko je zaprto

**Podpora za bralnike zaslona:**
- **Dodajte** ustrezne ARIA oznake in vloge
- **Obvestite** bralnike zaslona o odpiranju/zapiranju pogovornega okna
- **Zagotovite** jasne oznake polj obrazca in sporočila o napakah

### Korak 4: Ustvarjanje obrazca

**Oblikujte** HTML obrazec, ki zbira podatke o transakciji:

**Obvezna polja:**
- **Datum**: Kdaj je transakcija potekala
- **Opis**: Za kaj je bila transakcija
- **Znesek**: Vrednost transakcije (pozitivna za prihodke, negativna za izdatke)

**Funkcije obrazca:**
- **Preverite** veljavnost vnosa uporabnika pred oddajo
- **Zagotovite** jasna sporočila o napakah za neveljavne podatke
- **Vključite** uporabne označevalne besedilne in oznake
- **Oblikujte** skladno z vašim obstoječim dizajnom

### Korak 5: Integracija API-ja

**Povežite** svoj obrazec z zalednim API-jem:

**Koraki implementacije:**
- **Preglejte** [specifikacije strežniškega API-ja](../api/README.md) za pravilno končno točko in format podatkov
- **Ustvarite** JSON podatke iz vnosov obrazca
- **Pošljite** podatke API-ju z ustrezno obravnavo napak
- **Prikažite** sporočila o uspehu/neuspehu uporabniku
- **Obravnavajte** omrežne napake na ustrezen način

### Korak 6: Integracija upravljanja stanja

**Posodobite** svojo nadzorno ploščo z novo transakcijo:

**Zahteve za integracijo:**
- **Osvežite** podatke o računu po uspešnem dodajanju transakcije
- **Posodobite** prikaz nadzorne plošče brez potrebe po ponovnem nalaganju strani
- **Zagotovite**, da se nova transakcija takoj prikaže
- **Ohranite** ustrezno skladnost stanja skozi celoten proces

## Tehnične specifikacije

**Podrobnosti o končni točki API-ja:**
Oglejte si [dokumentacijo strežniškega API-ja](../api/README.md) za:
- Zahtevan JSON format za podatke o transakciji
- HTTP metodo in URL končne točke
- Pričakovani format odgovora
- Obravnava napak v odgovoru

**Pričakovani rezultat:**
Po dokončanju te naloge bi morala vaša bančna aplikacija imeti popolnoma funkcionalno funkcijo "Dodaj transakcijo", ki izgleda profesionalno in se obnaša ustrezno:

![Posnetek zaslona, ki prikazuje primer pogovornega okna "Dodaj transakcijo"](../../../../translated_images/dialog.93bba104afeb79f1.sl.png)

## Testiranje vaše implementacije

**Funkcionalno testiranje:**
1. **Preverite**, da je gumb "Dodaj transakcijo" jasno viden in dostopen
2. **Testirajte**, da se pogovorno okno pravilno odpira in zapira
3. **Potrdite**, da preverjanje veljavnosti obrazca deluje za vsa obvezna polja
4. **Preverite**, da se uspešne transakcije takoj prikažejo na nadzorni plošči
5. **Zagotovite**, da obravnava napak deluje za neveljavne podatke in težave z omrežjem

**Testiranje dostopnosti:**
1. **Navigirajte** skozi celoten proces samo s tipkovnico
2. **Testirajte** z bralnikom zaslona, da zagotovite ustrezna obvestila
3. **Preverite**, da upravljanje fokusa deluje pravilno
4. **Preverite**, da imajo vsi elementi obrazca ustrezne oznake

## Ocenjevalna lestvica

| Kriterij | Odlično | Zadostno | Potrebno izboljšanje |
| -------- | -------- | -------- | -------------------- |
| **Funkcionalnost** | Funkcija dodajanja transakcije deluje brezhibno z odlično uporabniško izkušnjo in sledi vsem najboljšim praksam iz lekcij | Funkcija dodajanja transakcije deluje pravilno, vendar morda ne sledi nekaterim najboljšim praksam ali ima manjše težave z uporabnostjo | Funkcija dodajanja transakcije deluje delno ali ima pomembne težave z uporabnostjo |
| **Kakovost kode** | Koda je dobro organizirana, sledi uveljavljenim vzorcem, vključuje ustrezno obravnavo napak in se brezhibno integrira z obstoječim upravljanjem stanja | Koda deluje, vendar ima morda nekaj težav z organizacijo ali neskladne vzorce z obstoječo kodo | Koda ima pomembne strukturne težave ali se ne integrira dobro z obstoječimi vzorci |
| **Dostopnost** | Popolna podpora za navigacijo s tipkovnico, združljivost z bralniki zaslona in sledi smernicam WCAG z odličnim upravljanjem fokusa | Osnovne funkcije dostopnosti so implementirane, vendar morda manjkajo nekatere funkcije za navigacijo s tipkovnico ali bralnike zaslona | Omejene ali neobstoječe upoštevanje dostopnosti |
| **Uporabniška izkušnja** | Intuitiven, dodelan vmesnik z jasnimi povratnimi informacijami, gladkimi interakcijami in profesionalnim videzom | Dobra uporabniška izkušnja z manjšimi področji za izboljšanje povratnih informacij ali vizualnega dizajna | Slaba uporabniška izkušnja z zmedenim vmesnikom ali pomanjkanjem povratnih informacij |

## Dodatni izzivi (neobvezno)

Ko dokončate osnovne zahteve, razmislite o teh izboljšavah:

**Izboljšane funkcije:**
- **Dodajte** kategorije transakcij (hrana, prevoz, zabava itd.)
- **Implementirajte** preverjanje veljavnosti vnosa z odzivom v realnem času
- **Ustvarite** bližnjice na tipkovnici za napredne uporabnike
- **Dodajte** možnost urejanja in brisanja transakcij

**Napredna integracija:**
- **Implementirajte** funkcionalnost razveljavitve za nedavno dodane transakcije
- **Dodajte** možnost množičnega uvoza transakcij iz CSV datotek
- **Ustvarite** iskanje in filtriranje transakcij
- **Implementirajte** funkcionalnost izvoza podatkov

Te neobvezne funkcije vam bodo pomagale vaditi bolj napredne koncepte spletnega razvoja in ustvariti bolj celovito bančno aplikacijo!

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.