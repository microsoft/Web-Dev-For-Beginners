<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c8fc39a014d08247c082878122e2ba73",
  "translation_date": "2026-01-07T11:35:05+00:00",
  "source_file": "6-space-game/1-introduction/assignment.md",
  "language_code": "lt"
}
-->
# Mock up žaidimas: pritaikyti dizaino šablonus

## Užduoties apžvalga

Pritaikykite naujai įgytas dizaino šablonų žinias ir sukurkite paprastą žaidimo prototipą! Ši užduotis padės jums praktikuoti tiek architektūrinius šablonus (paveldėjimą arba kompoziciją), tiek pamėgtą pub/sub komunikacijos sistemą, aptartą pamokoje.

## Instrukcijos

Sukurkite paprastą žaidimo reprezentaciją, kuri demonstruoja šios pamokos dizaino šablonus. Jūsų žaidimas turėtų būti veikiantis, bet nereikia naudoti sudėtingos grafikos – sutelkite dėmesį į pagrindinę architektūrą ir komunikacijos modelius.

### Reikalavimai

**Pasirinkite savo architektūros šabloną:**
- **A variantas**: Naudokite paveldėjimą pagrįstą klases (kaip pavyzdyje `GameObject` → `Movable` → `Hero`)
- **B variantas**: Naudokite kompoziciją (kaip gamyklos funkcijos požiūris su mišriais elgesiais)

**Įgyvendinkite komunikaciją:**
- **Įtraukite** `EventEmitter` klasę pub/sub pranešimų sistemai
- **Nustatykite** bent 2-3 skirtingų pranešimų tipus (pavyzdžiui, `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Sujunkite** vartotojo įvestį (klaviatūrą/pelės) su žaidimo įvykiais per įvykių sistemą

**Žaidimo elementai, kuriuos reikia įtraukti:**
- Bent vienas žaidėją valdomas personažas
- Bent vienas kitas žaidimo objektas (priešas, renkami daiktai ar aplinkos elementas)
- Pagrindinis objektų sąveikavimas (susidūrimas, rinkimas ar komunikacija)

### Siūlomos žaidimo idėjos

**Paprasčiausi žaidimai galvojantiems:**
- **Gyvatėlės žaidimas** – gyvatėlės segmentai seka galvą, maistas atsiranda atsitiktinai
- **Pongo variacija** – mentė reaguoja į įvestį, kamuolys atšoka nuo sienų
- **Rinkėjo žaidimas** – žaidėjas juda ir renka daiktus, vengdamas kliūčių
- **Bazinė bokštų gynyba** – bokštai aptinka ir šaudo į judančius priešus

### Kodo struktūros gairės

```javascript
// Pavyzdinė pradinė struktūra
const Messages = {
  // Čia apibrėžkite savo žaidimo pranešimus
};

class EventEmitter {
  // Jūsų įvykių sistemos įgyvendinimas
}

// Pasirinkite klasės pagrindu arba kompozicijos metodą
// Klasės pagrindu pavyzdys:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// ARBA kompozicijos pavyzdys:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testuokite savo įgyvendinimą

**Patikrinkite, ar jūsų kodas veikia:**
- **Testuodami**, kad objektai juda ar keičiasi įvykių metu
- **Patvirtindami**, kad keli objektai gali reaguoti į tą patį įvykį
- **Tikrinkite**, ar galite pridėti naujų elgesių nekeisdami esamo kodo
- **Užtikrinkite**, kad klaviatūros/pelės įvestis tinkamai sukelia žaidimo įvykius

## Pateikimo gairės

**Jūsų pateikimas turi apimti:**
1. **JavaScript failą (-us)** su jūsų žaidimo įgyvendinimu
2. **HTML failą** žaidimui paleisti ir testuoti (gali būti paprastas)
3. **Komentarus**, paaiškinančius, kurį šabloną pasirinkote ir kodėl
4. **Trumpą dokumentaciją** apie jūsų pranešimų tipus ir jų paskirtį

## Vertinimo kriterijai

| Kriterijus | Puikiai (3 taškai) | Tinkamai (2 taškai) | Reikia tobulinti (1 taškas) |
|------------|--------------------|--------------------|-----------------------------|
| **Architektūros šablonas** | Tinkamai įgyvendintas paveldėjimas ARBA kompozicija su aiškia klasių/objektų hierarchija | Naudojamas pasirinktas šablonas su nedidelėmis problemomis arba neatitikimais | Bandoma naudoti šabloną, bet įgyvendinime yra esminių trūkumų |
| **Pub/Sub įgyvendinimas** | EventEmitter veikia tinkamai su keliais pranešimų tipais ir teisinga įvykių eiga | Bazinė pub/sub sistema veikia su kai kuriuo įvykių tvarkymu | Įvykių sistema egzistuoja, bet veikia nepatikimai |
| **Žaidimo funkcionalumas** | Trys ar daugiau interaktyvių elementų, kurie komunikuoja per įvykius | Du interaktyvūs elementai su pagrindine įvykių komunikacija | Vienas elementas reaguoja į įvykius arba vykdo pagrindinę sąveiką |
| **Kodo kokybė** | Švarus, gerai komentuotas kodas su logiška organizacija ir modernesne JavaScript | Apskritai gerai organizuotas kodas su pakankamais komentarais | Kodas veikia, bet trūksta organizacijos arba aiškių komentarų |

**Papildomi taškai:**
- **Kūrybingi žaidimo mechanizmai**, atskleidžiantys įdomų šablonų naudojimą
- **Daugiau įvesties būdų** (tiek klaviatūra, tiek pelės įvykiai)
- **Išplečiama architektūra**, kurią būtų lengva praplėsti naujomis funkcijomis

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatizuoti vertimai gali turėti klaidų arba netikslumų. Originalus dokumentas gimtąja kalba turi būti laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojamas profesionalus žmogaus vertimas. Mes neatsakome už bet kokius nesusipratimus ar klaidingas interpretacijas, kylančias iš šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->