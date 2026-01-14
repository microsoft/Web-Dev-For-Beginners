<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "25b8d28b8531352d4eb67291fd7824c4",
  "translation_date": "2026-01-07T11:40:57+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/assignment.md",
  "language_code": "lt"
}
-->
# Priimkite API

## Apžvalga

API atveria begalines galimybes kūrybiniam žiniatinklio kūrimui! Šiame užduotyje jūs pasirenkate išorinį API ir kuriate naršyklės plėtinį, kuris išsprendžia tikrą problemą arba teikia vertingą funkcionalumą vartotojams.

## Nurodymai

### 1 žingsnis: Pasirinkite savo API
Pasirinkite API iš šio kruopščiai atrinkto [nemokamų viešųjų API sąrašo](https://github.com/public-apis/public-apis). Apsvarstykite šias kategorijas:

**Populiarūs pasirinkimai pradedantiesiems:**
- **Pramogos**: [Dog CEO API](https://dog.ceo/dog-api/) atsitiktinėms šunų nuotraukoms
- **Orai**: [OpenWeatherMap](https://openweathermap.org/api) dabartinei orų informacijai
- **Citatos**: [Quotable API](https://quotable.io/) įkvepiančioms citatoms
- **Naujienos**: [NewsAPI](https://newsapi.org/) dabartinėms antraštėms
- **Linksmi faktai**: [Numbers API](http://numbersapi.com/) įdomiems skaičių faktams

### 2 žingsnis: Suplanuokite savo plėtinį
Prieš rašydami kodą, atsakykite į šiuos planavimo klausimus:
- Kokią problemą sprendžia jūsų plėtinys?
- Kas yra jūsų tikslinis vartotojas?
- Kokius duomenis saugosite vietinėje atmintyje?
- Kaip tvarkysite API klaidas ar spartos apribojimus?

### 3 žingsnis: Sukurkite savo plėtinį
Jūsų plėtinys turėtų apimti:

**Būtinos funkcijos:**
- Formos laukeliai bet kokiems reikiamiems API parametrams
- API integracija su tinkamu klaidų valdymu
- Vietinė atmintis vartotojo nustatymams arba API raktams
- Švari, reaguojanti vartotojo sąsaja
- Įkėlimo būsena ir vartotojo grįžtamasis ryšys

**Kodo reikalavimai:**
- Naudokite modernias JavaScript (ES6+) savybes
- Įgyvendinkite async/await API užklausoms
- Įtraukite tinkamą klaidų valdymą su try/catch blokais
- Pridėkite prasmingų komentarų, paaiškinančių jūsų kodą
- Laikykitės nuoseklumo formatuojant kodą

### 4 žingsnis: Testuokite ir patobulinkite
- Testuokite plėtinį su įvairiais įvesties duomenimis
- Tvarkykite kraštutinius atvejus (nėra interneto, netinkami API atsakymai)
- Užtikrinkite, kad plėtinys veikia po naršyklės paleidimo iš naujo
- Pridėkite draugiškas vartotojui klaidų žinutes

## Papildomi iššūkiai

Pakelkite savo plėtinį į kitą lygį:
- Pridėkite kelis API galinius taškus platesniam funkcionalumui
- Įgyvendinkite duomenų talpinimą, kad sumažintumėte API užklausas
- Sukurkite klaviatūros spartiuosius mygtukus dažnoms užduotims
- Pridėkite duomenų eksportavimo/importavimo funkcijas
- Įgyvendinkite vartotojo pritaikymo parinktis

## Pateikimo reikalavimai

1. **Veikiantis naršyklės plėtinys**, sėkmingai integruotas su jūsų pasirinktiniu API
2. **README failas**, aiškinantis:
   - Kurį API pasirinkote ir kodėl
   - Kaip įdiegti ir naudoti jūsų plėtinį
   - Bet kokie API raktai ar nustatymai, kurių reikia
   - Ekrano nuotraukos, rodantys jūsų plėtinį veikiant
3. **Švarus, komentuotas kodas**, atitinkantis modernias JavaScript praktikas

## Vertinimo kriterijai

| Kriterijus | Puikiai (90-100%) | Gerai (80-89%) | Vystymasis (70-79%) | Pradžia (60-69%) |
|------------|-------------------|----------------|---------------------|------------------|
| **API integracija** | Be priekaištų API integracija su išsamiu klaidų valdymu ir kraštutinių atvejų tvarkymu | Sėkminga API integracija su pagrindiniu klaidų valdymu | API veikia, bet klaidų valdymas ribotas | API integracijoje yra rimtų problemų |
| **Kodo kokybė** | Švarus, gerai komentuotas modernus JavaScript, laikantis geriausių praktikų | Gera kodo struktūra su pakankamais komentarais | Kode veikia, bet reiktų geresnės organizacijos | Prasta kodo kokybė, minimalūs komentarai |
| **Vartotojo patirtis** | Išbaigta sąsaja su puikiomis įkėlimo būsenomis ir vartotojo grįžtamuoju ryšiu | Gera sąsaja su pagrindiniu vartotojo grįžtamuoju ryšiu | Pagrindinė sąsaja, kuri veikia pakankamai gerai | Prasta vartotojo patirtis, paini sąsaja |
| **Vietinė atmintis** | Sudėtingas vietinės atminties naudojimas su duomenų patikra ir valdymu | Tinkamas vietinės atminties panaudojimas pagrindinėms funkcijoms | Pagrindinis vietinės atminties panaudojimas | Minimalus ar neteisingas vietinės atminties naudojimas |
| **Dokumentacija** | Išsami README su diegimo instrukcijomis ir ekrano nuotraukomis | Gera dokumentacija, apimanti daugumą reikalavimų | Pagrindinė dokumentacija, trūksta kai kurių detalių | Prasta arba trūkstanti dokumentacija |

## Pradžios patarimai

1. **Pradėkite paprastai**: Pasirinkite API, nereikalaujantį sudėtingos autentifikacijos
2. **Perskaitykite dokumentaciją**: Kruopščiai supraskite savo pasirinkto API galinius taškus ir atsakymus
3. **Suplanuokite vartotojo sąsają**: Nubraižykite savo plėtinio sąsają prieš rašydami kodą
4. **Dažnai testuokite**: Kurkite palaipsniui ir testuokite kiekvieną pridėtą funkciją
5. **Tvarkykite klaidas**: Visada manykite, kad API užklausos gali nepavykti, ir tam ruoškite planą

## Ištekliai

- [Naršyklės plėtinių dokumentacija](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Fetch API vadovas](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Vietinės atminties pamoka](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [JSON analizė ir valdymas](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Linkime smagaus ir kūrybingo darbo! 🚀

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatizuoti vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojamas profesionalus žmogaus vertimas. Mes neatsakome už bet kokius nesusipratimus ar klaidingas interpretacijas, kylančias dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->