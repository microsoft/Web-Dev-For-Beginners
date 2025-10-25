<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2025-10-25T00:46:27+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "sl"
}
-->
# Uporabi API

## Pregled

API-ji odpirajo neskončne možnosti za kreativni razvoj spletnih aplikacij! V tej nalogi boste izbrali zunanji API in ustvarili razširitev za brskalnik, ki rešuje resničen problem ali ponuja uporabnikom koristno funkcionalnost.

## Navodila

### Korak 1: Izberite svoj API
Izberite API s tega skrbno pripravljenega [seznama brezplačnih javnih API-jev](https://github.com/public-apis/public-apis). Razmislite o teh kategorijah:

**Priljubljene možnosti za začetnike:**
- **Zabava**: [Dog CEO API](https://dog.ceo/dog-api/) za naključne slike psov
- **Vreme**: [OpenWeatherMap](https://openweathermap.org/api) za podatke o trenutnem vremenu
- **Citati**: [Quotable API](https://quotable.io/) za navdihujoče citate
- **Novice**: [NewsAPI](https://newsapi.org/) za aktualne naslove
- **Zanimivosti**: [Numbers API](http://numbersapi.com/) za zanimiva dejstva o številkah

### Korak 2: Načrtujte svojo razširitev
Preden začnete s kodiranjem, odgovorite na ta vprašanja za načrtovanje:
- Kateri problem rešuje vaša razširitev?
- Kdo je vaša ciljna skupina?
- Katere podatke boste shranili v lokalni pomnilnik?
- Kako boste obravnavali napake API-ja ali omejitve hitrosti?

### Korak 3: Ustvarite svojo razširitev
Vaša razširitev naj vključuje:

**Obvezne funkcije:**
- Vnosne obrazce za vse potrebne parametre API-ja
- Integracijo API-ja z ustreznim obravnavanjem napak
- Lokalni pomnilnik za uporabniške nastavitve ali ključe API-ja
- Čist, odziven uporabniški vmesnik
- Stanja nalaganja in povratne informacije za uporabnika

**Zahteve za kodo:**
- Uporabite sodobne funkcije JavaScripta (ES6+)
- Implementirajte async/await za klice API-ja
- Vključite ustrezno obravnavanje napak z bloki try/catch
- Dodajte smiselne komentarje, ki pojasnjujejo vašo kodo
- Upoštevajte dosledno oblikovanje kode

### Korak 4: Testirajte in izpopolnite
- Testirajte svojo razširitev z različnimi vnosi
- Obravnavajte robne primere (brez interneta, neveljavni odgovori API-ja)
- Prepričajte se, da razširitev deluje po ponovnem zagonu brskalnika
- Dodajte uporabniku prijazna sporočila o napakah

## Dodatni izzivi

Izpopolnite svojo razširitev:
- Dodajte več API končnih točk za bogatejšo funkcionalnost
- Implementirajte predpomnjenje podatkov za zmanjšanje klicev API-ja
- Ustvarite bližnjice na tipkovnici za pogoste akcije
- Dodajte funkcije za izvoz/uvoz podatkov
- Implementirajte možnosti prilagajanja za uporabnike

## Zahteve za oddajo

1. **Delujoča razširitev za brskalnik**, ki uspešno integrira izbrani API
2. **README datoteka**, ki pojasnjuje:
   - Kateri API ste izbrali in zakaj
   - Kako namestiti in uporabljati vašo razširitev
   - Vse potrebne ključe API-ja ali nastavitve
   - Posnetke zaslona vaše razširitve v akciji
3. **Čista, komentirana koda**, ki sledi sodobnim praksam JavaScripta

## Merila ocenjevanja

| Merilo | Odlično (90-100%) | Dobro (80-89%) | Razvijajoče (70-79%) | Začetno (60-69%) |
|--------|--------------------|----------------|-----------------------|------------------|
| **Integracija API-ja** | Brezhibna integracija API-ja z obsežnim obravnavanjem napak in robnih primerov | Uspešna integracija API-ja z osnovnim obravnavanjem napak | API deluje, vendar ima omejeno obravnavanje napak | Integracija API-ja ima pomembne težave |
| **Kakovost kode** | Čist, dobro komentiran sodoben JavaScript, ki sledi najboljšim praksam | Dobra struktura kode z ustreznimi komentarji | Koda deluje, vendar potrebuje boljšo organizacijo | Slaba kakovost kode z minimalnimi komentarji |
| **Uporabniška izkušnja** | Dodelan vmesnik z odličnimi stanji nalaganja in povratnimi informacijami za uporabnika | Dober vmesnik z osnovnimi povratnimi informacijami za uporabnika | Osnovni vmesnik, ki deluje ustrezno | Slaba uporabniška izkušnja z zmedenim vmesnikom |
| **Lokalni pomnilnik** | Sofisticirana uporaba lokalnega pomnilnika z validacijo in upravljanjem podatkov | Pravilna implementacija lokalnega pomnilnika za ključne funkcije | Osnovna implementacija lokalnega pomnilnika | Minimalna ali nepravilna uporaba lokalnega pomnilnika |
| **Dokumentacija** | Celovita README datoteka z navodili za nastavitev in posnetki zaslona | Dobra dokumentacija, ki pokriva večino zahtev | Osnovna dokumentacija, ki manjka nekaj podrobnosti | Slaba ali manjkajoča dokumentacija |

## Nasveti za začetek

1. **Začnite preprosto**: Izberite API, ki ne zahteva zapletene avtentikacije
2. **Preberite dokumentacijo**: Temeljito razumite končne točke in odgovore izbranega API-ja
3. **Načrtujte svoj vmesnik**: Pred kodiranjem si skicirajte vmesnik svoje razširitve
4. **Pogosto testirajte**: Gradite postopoma in testirajte vsako funkcijo, ko jo dodate
5. **Obravnavajte napake**: Vedno predvidevajte, da lahko klici API-ja ne uspejo, in ustrezno načrtujte

## Viri

- [Dokumentacija za razširitve brskalnika](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Vodnik za Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Vadnica za lokalni pomnilnik](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Razčlenjevanje in obravnavanje JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Uživajte v ustvarjanju nečesa koristnega in kreativnega! 🚀

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.