<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "232d592791465c1678cab3a2bb6cd3e8",
  "translation_date": "2025-10-25T00:12:57+00:00",
  "source_file": "6-space-game/6-end-condition/assignment.md",
  "language_code": "hr"
}
-->
# Izrada uzorka igre

## Pregled zadatka

Sada kada ste savladali uvjete završetka igre i funkcionalnost ponovnog pokretanja u svojoj svemirskoj igri, vrijeme je da primijenite te koncepte na potpuno novo iskustvo igranja. Dizajnirat ćete i izraditi vlastitu igru koja demonstrira različite obrasce završetka igre i mehanizme ponovnog pokretanja.

Ovaj zadatak izaziva vas da kreativno razmišljate o dizajnu igre dok vježbate tehničke vještine koje ste naučili. Istražit ćete različite scenarije pobjede i poraza, implementirati napredak igrača i stvoriti zanimljiva iskustva ponovnog pokretanja.

## Zahtjevi projekta

### Osnovne značajke igre

Vaša igra mora uključivati sljedeće ključne elemente:

**Raznolikost uvjeta završetka**: Implementirajte najmanje dva različita načina na koji igra može završiti:
- **Pobjeda na temelju bodova**: Igrač doseže ciljani rezultat ili skuplja određene predmete
- **Poraz na temelju života**: Igrač gubi sve dostupne živote ili bodove zdravlja
- **Dovršavanje cilja**: Svi neprijatelji su poraženi, određeni predmeti prikupljeni ili ciljevi postignuti
- **Na temelju vremena**: Igra završava nakon određenog trajanja ili kada odbrojavanje dosegne nulu

**Funkcionalnost ponovnog pokretanja**: 
- **Čišćenje stanja igre**: Uklonite sve prethodne objekte igre i resetirajte varijable
- **Ponovno inicijaliziranje sustava**: Započnite iznova s novim statistikama igrača, neprijateljima i ciljevima
- **Kontrole prilagođene korisniku**: Pružite jasne upute za ponovno pokretanje igre

**Povratne informacije za igrača**:
- **Poruke o pobjedi**: Proslavite postignuća igrača pozitivnim povratnim informacijama
- **Poruke o porazu**: Pružite ohrabrujuće poruke koje motiviraju na ponovno igranje
- **Indikatori napretka**: Prikaz trenutnog rezultata, života ili statusa cilja

### Ideje za igre i inspiracija

Odaberite jedan od ovih koncepata igre ili osmislite vlastiti:

#### 1. Konzolna avanturistička igra
Napravite tekstualnu avanturu s mehanikom borbe:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Ključne značajke za implementaciju:**
- **Borba na poteze** s različitim opcijama napada
- **Bodovi zdravlja** za igrača i neprijatelje
- **Sustav inventara** za prikupljanje novčića ili predmeta
- **Više vrsta neprijatelja** s različitim razinama težine
- **Uvjet pobjede** kada su svi neprijatelji poraženi

#### 2. Igra prikupljanja
- **Cilj**: Prikupiti određene predmete izbjegavajući prepreke
- **Uvjeti završetka**: Dosegnuti ciljani broj prikupljenih predmeta ili izgubiti sve živote
- **Napredak**: Predmeti postaju teže dostupni kako igra napreduje

#### 3. Puzzle igra
- **Cilj**: Riješiti sve teže zagonetke
- **Uvjeti završetka**: Dovršiti sve razine ili ostati bez poteza/vremena
- **Ponovno pokretanje**: Vratiti se na prvu razinu s očišćenim napretkom

#### 4. Obrambena igra
- **Cilj**: Zaštititi svoju bazu od valova neprijatelja
- **Uvjeti završetka**: Preživjeti sve valove (pobjeda) ili uništenje baze (poraz)
- **Napredak**: Valovi neprijatelja postaju sve teži i brojniji

## Smjernice za implementaciju

### Početak rada

1. **Isplanirajte dizajn igre**:
   - Skicirajte osnovni ciklus igranja
   - Jasno definirajte uvjete završetka
   - Odredite koje podatke treba resetirati prilikom ponovnog pokretanja

2. **Postavite strukturu projekta**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Kreirajte osnovni ciklus igre**:
   - Inicijalizirajte stanje igre
   - Obradite unos korisnika
   - Ažurirajte logiku igre
   - Provjerite uvjete završetka
   - Prikaz trenutnog stanja

### Tehnički zahtjevi

**Koristite moderni JavaScript**: 
- Primijenite `const` i `let` za deklaraciju varijabli
- Koristite streličaste funkcije gdje je prikladno
- Implementirajte značajke ES6+ poput template literala i destrukturiranja

**Arhitektura temeljena na događajima**:
- Kreirajte rukovatelje događajima za interakcije korisnika
- Implementirajte promjene stanja igre putem događaja
- Koristite slušatelje događaja za funkcionalnost ponovnog pokretanja

**Prakse čistog koda**:
- Pišite funkcije s jednom odgovornošću
- Koristite opisne nazive varijabli i funkcija
- Dodajte komentare koji objašnjavaju logiku igre i pravila
- Organizirajte kod u logične sekcije

## Zahtjevi za predaju

### Dostava

1. **Kompletne datoteke igre**: Svi HTML, CSS i JavaScript dokumenti potrebni za pokretanje vaše igre
2. **README.md**: Dokumentacija koja objašnjava:
   - Kako igrati vašu igru
   - Koje uvjete završetka ste implementirali
   - Upute za ponovno pokretanje
   - Posebne značajke ili mehanike
3. **Komentari u kodu**: Jasna objašnjenja logike i algoritama igre

### Popis za provjeru testiranja

Prije predaje, provjerite da vaša igra:

- [ ] **Radi bez grešaka** u konzoli preglednika
- [ ] **Implementira više uvjeta završetka** kako je navedeno
- [ ] **Ispravno se ponovno pokreće** s očišćenim stanjem
- [ ] **Pruža jasne povratne informacije** igračima o statusu igre
- [ ] **Koristi modernu JavaScript** sintaksu i najbolje prakse
- [ ] **Sadrži sveobuhvatnu dokumentaciju** u README.md

## Rubrika za ocjenjivanje

| Kriterij | Izvrsno (4) | Dobro (3) | Razvijajuće (2) | Početno (1) |
|----------|-------------|-----------|-----------------|-------------|
| **Funkcionalnost igre** | Kompletna igra s više uvjeta završetka, glatkim ponovnim pokretanjem i ugodnim iskustvom igranja | Cjelovita igra s osnovnim uvjetima završetka i funkcionalnim mehanizmom ponovnog pokretanja | Djelomična igra s implementiranim nekim uvjetima završetka, ponovni početak može imati manje probleme | Nepotpuna igra s ograničenom funkcionalnošću i značajnim greškama |
| **Kvaliteta koda** | Čist, dobro organiziran kod koji koristi moderne JavaScript prakse, sveobuhvatni komentari i izvrsna struktura | Dobra organizacija koda s modernom sintaksom, adekvatni komentari i jasna struktura | Osnovna organizacija koda s nekim modernim praksama, minimalni komentari | Loša organizacija koda, zastarjela sintaksa, nedostatak komentara i strukture |
| **Korisničko iskustvo** | Intuitivno igranje s jasnim uputama, izvrsnim povratnim informacijama i zanimljivim iskustvom završetka/ponovnog pokretanja | Dobro igranje s adekvatnim uputama i povratnim informacijama, funkcionalno završavanje/ponovno pokretanje | Osnovno igranje s minimalnim uputama, ograničene povratne informacije o stanju igre | Zbunjujuće igranje s nejasnim uputama i lošim povratnim informacijama |
| **Tehnička implementacija** | Pokazuje izvrsno razumijevanje koncepta razvoja igara, rukovanja događajima i upravljanja stanjem | Pokazuje solidno razumijevanje koncepta igara s dobrom implementacijom | Osnovno razumijevanje s prihvatljivom implementacijom | Ograničeno razumijevanje s lošom implementacijom |
| **Dokumentacija** | Sveobuhvatan README s jasnim uputama, dobro dokumentiranim kodom i detaljnim dokazima testiranja | Dobra dokumentacija s jasnim uputama i adekvatnim komentarima u kodu | Osnovna dokumentacija s minimalnim uputama | Loša ili nedostajuća dokumentacija |

### Skala ocjenjivanja
- **Izvrsno (16-20 bodova)**: Nadmašuje očekivanja s kreativnim značajkama i poliranom implementacijom
- **Dobro (12-15 bodova)**: Zadovoljava sve zahtjeve s solidnom izvedbom
- **Razvijajuće (8-11 bodova)**: Zadovoljava većinu zahtjeva s manjim problemima
- **Početno (4-7 bodova)**: Zadovoljava neke zahtjeve, ali zahtijeva značajna poboljšanja

## Dodatni resursi za učenje

- [MDN Vodič za razvoj igara](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript vodiči za razvoj igara](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Dokumentacija za Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Principi dizajna igara](https://www.gamasutra.com/blogs/)

> 💡 **Savjet**: Započnite jednostavno i postupno dodajte značajke. Dobro polirana jednostavna igra bolja je od složene igre s greškama!

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.