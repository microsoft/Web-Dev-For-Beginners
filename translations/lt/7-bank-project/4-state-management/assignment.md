<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2026-01-07T12:01:27+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "lt"
}
-->
# Įgyvendinkite „Pridėti sandorį“ dialogą

## Apžvalga

Jūsų banko programa dabar turi patikimą būsenos valdymą ir duomenų išlaikymą, tačiau trūksta svarbios funkcijos, kurios reikalauja tikros bankinės programos: galimybės vartotojams pridėti savo sandorius. Šiame užduotyje įgyvendinsite visapusišką „Pridėti sandorį“ dialogą, kuris sklandžiai integruosis su jūsų esama būsenos valdymo sistema.

Ši užduotis sujungia viską, ko išmokote keturiuose bankininkystės pamokose: HTML šablonavimą, formų tvarkymą, API integraciją ir būsenos valdymą.

## Mokymosi tikslai

Atlikdami šią užduotį jūs:
- **Sukursite** naudotojui draugišką dialogo sąsają duomenų įvedimui
- **Įgyvendinsite** prieinamą formos dizainą su klaviatūros ir ekrano skaitytuvo palaikymu
- **Integruosite** naujas funkcijas su esama būsenos valdymo sistema
- **Gausite praktikos** API komunikacijoje ir klaidų tvarkyme
- **Pridėsite** šiuolaikinius interneto kūrimo šablonus realių funkcijų kontekste

## Instrukcijos

### 1 žingsnis: Pridėti sandorį mygtukas

**Sukurkite** „Pridėti sandorį“ mygtuką savo kontrolės skydelio puslapyje, kurį vartotojai lengvai rastų ir pasiektų.

**Reikalavimai:**
- **Padėkite** mygtuką logiškoje vietoje kontrolės skydelyje
- **Naudokite** aiškų, veiksmą nurodantį mygtuko tekstą
- **Pasirūpinkite** mygtuko dizainu, atitinkančiu esamą UI stilistiką
- **Įsitikinkite**, kad mygtukas yra prieinamas klaviatūra

### 2 žingsnis: Dialogo įgyvendinimas

Pasirinkite vieną iš šių dviejų būdų dialogui įgyvendinti:

**A variantas: Atskiras puslapis**
- **Sukurkite** naują HTML šabloną sandorio formai
- **Pridėkite** naują maršrutą savo maršruto sistemoje
- **Įgyvendinkite** navigaciją į formos puslapį ir iš jo

**B variantas: Modalinis dialogas (rekomenduojama)**
- **Naudokite** JavaScript dialogo rodymui/slėpimui, neišeinant iš kontrolės skydelio
- **Įgyvendinkite** naudodami [`hidden` savybę](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) arba CSS klases
- **Sukurkite** sklandžią naudotojo patirtį su tinkama fokusų valdymu

### 3 žingsnis: Prieinamumo įgyvendinimas

**Užtikrinkite**, kad jūsų dialogas atitinka [modalinių dialogų prieinamumo standartus](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Klaviatūros navigacija:**
- **Palaikykite** Escape klavišą dialogo uždarymui
- **Apribokite** fokusą dialogo viduje, kai jis atidarytas
- **Grąžinkite** fokusą į aktyvacijos mygtuką, kai dialogas uždaromas

**Ekrano skaitytuvo palaikymas:**
- **Pridėkite** tinkamus ARIA etiketes ir vaidmenis
- **Praneškite** apie dialogo atidarymą/uždarymą ekrano skaitytuvui
- **Suteikite** aiškius formos laukų etiketes ir klaidų pranešimus

### 4 žingsnis: Formos kūrimas

**Sukurkite** HTML formą, kuri renka sandorio duomenis:

**Privalomi laukai:**
- **Data**: Kada įvyko sandoris
- **Aprašymas**: Kam buvo sandoris
- **Suma**: Sandorio vertė (teigiama – pajamos, neigiama – išlaidos)

**Formos savybės:**
- **Patikrinkite** vartotojo įvestį prieš pateikimą
- **Suteikite** aiškius klaidų pranešimus neteisingiems duomenims
- **Įtraukite** pagalbinius vietos užrašus ir etiketes
- **Stilizacija** turi atitikti jūsų esamą dizainą

### 5 žingsnis: API integracija

**Prijunkite** formą prie backend API:

**Įgyvendinimo žingsniai:**
- **Peržvelkite** [serverio API specifikacijas](../api/README.md) dėl teisingo endpoint ir duomenų formato
- **Sukurkite** JSON duomenis iš formos įvesties
- **Siųskite** duomenis API su tinkamu klaidų tvarkymu
- **Rodykite** vartotojui sėkmės arba nesėkmės pranešimus
- **Tvarkykite** tinklo klaidas maloniai

### 6 žingsnis: Būsenos valdymo integracija

**Atnaujinkite** savo kontrolės skydelį su nauju sandoriu:

**Integracijos reikalavimai:**
- **Atnaujinkite** sąskaitos duomenis po sėkmingo sandorio pridėjimo
- **Atnaujinkite** kontrolės skydelio vaizdą be puslapio perkrovimo
- **Užtikrinkite**, kad naujas sandoris būtų matomas iš karto
- **Išlaikykite** būsenos nuoseklumą viso proceso metu

## Techninės specifikacijos

**API endpoint detalės:**
Pasižiūrėkite į [serverio API dokumentaciją](../api/README.md), kur rasite:
- Reikalaujamą JSON formatą sandorio duomenims
- HTTP metodą ir endpoint URL
- Laukiamą atsakymo formatą
- Klaidos atsakymų tvarkymą

**Laukiamas rezultatas:**
Baigus šią užduotį, jūsų banko programa turės visiškai veikiantį „Pridėti sandorį“ funkcionalumą, kuris atrodo ir veikia profesionaliai:

![Ekrano nuotrauka, rodanti pavyzdinį „Pridėti sandorį“ dialogą](../../../../translated_images/lt/dialog.93bba104afeb79f1.png)

## Testavimas

**Funkcinis testavimas:**
1. **Patikrinkite**, ar „Pridėti sandorį“ mygtukas aiškiai matomas ir prieinamas
2. **Išbandykite**, kad dialogas atsidaro ir užsidaro tinkamai
3. **Patvirtinkite**, kad formos validacija veikia visiems privalomiems laukams
4. **Patikrinkite**, ar sėkmingi sandoriai iš karto atsiranda kontrolės skydelyje
5. **Įsitikinkite**, kad klaidų tvarkymas veikia neteisingiems duomenims ir tinklo problemoms

**Prieinamumo testavimas:**
1. **Naršykite** visą procesą tik naudodami klaviatūrą
2. **Testuokite** su ekrano skaitytuvu, kad įsitikintumėte tinkamais pranešimais
3. **Patikrinkite**, ar fokusų valdymas veikia teisingai
4. **Įsitikinkite**, kad visi formos elementai turi tinkamas etiketes

## Vertinimo kriterijai

| Kriterijai | Puikiai | Patenkinamai | Reikia tobulinti |
| ---------- | -------- | ------------ | ---------------- |
| **Funkcionalumas** | „Pridėti sandorį“ funkcija veikia nepriekaištingai su puikia naudotojo patirtimi ir atitinka visas pamokų gerąsias praktikas | „Pridėti sandorį“ funkcija veikia teisingai, bet gali netaisyti kai kurių gerųjų praktikų arba turi smulkių naudojimo problemų | „Pridėti sandorį“ funkcija veikia dalinai arba turi reikšmingų naudojimo problemų |
| **Kodo kokybė** | Kodas gerai organizuotas, laikosi nustatytų šablonų, turi tinkamą klaidų tvarkymą ir sklandžiai integruojasi su esama būsenos valdymo sistema | Kodas veikia, tačiau gali būti organizavimo trūkumų arba prieštaraujančių šablonų su esamu kodu | Kode yra reikšmingų struktūrinių problemų arba jis blogai integruojasi su esamais šablonais |
| **Prieinamumas** | Pilnas klaviatūros navigacijos palaikymas, suderinamumas su ekrano skaitytuvais ir WCAG gairių laikymasis su puikiu fokusų valdymu | Pagrindinės prieinamumo funkcijos įgyvendintos, bet gali trūkti kai kurių klaviatūros navigacijos ar ekrano skaitytuvo funkcijų | Ribotas arba jokio prieinamumo įgyvendinimo |
| **Naudotojo patirtis** | Intuityvi, tvarkinga sąsaja su aiškiu grįžtamuoju ryšiu, sklandžiais veiksmais ir profesionaliu vaizdu | Gera naudotojo patirtis su mažais patobulinimų laukais grįžtamojo ryšio ar vizualinio dizaino srityse | Prasta naudotojo patirtis su painia sąsaja arba grįžtamojo ryšio stoka |

## Papildomi iššūkiai (pasirenkama)

Baigę pagrindinius reikalavimus, apsvarstykite šiuos papildomus patobulinimus:

**Išplėstinės funkcijos:**
- **Pridėkite** sandorio kategorijas (maistas, transportas, pramogos ir kt.)
- **Įgyvendinkite** įvesties patikrinimą su realaus laiko grįžtamuoju ryšiu
- **Sukurkite** klaviatūros spartieji klavišai pažengusiems vartotojams
- **Pridėkite** sandorių redagavimo ir trynimo galimybes

**Pažangi integracija:**
- **Įgyvendinkite** veiksmų atšaukimo funkciją neseniai pridėtiems sandoriams
- **Pridėkite** masinį sandorių importą iš CSV failų
- **Sukurkite** sandorių paieškos ir filtravimo galimybes
- **Įgyvendinkite** duomenų eksportavimo funkciją

Šios pasirenkamos funkcijos padės jums praktikuotis pažangesnėse interneto kūrimo koncepcijose ir sukurti dar pilnesnę banko programėlę!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojama naudoti profesionalaus žmogaus vertimą. Mes neatsakome už bet kokius nesusipratimus ar klaidingus vertimus, kilusius naudojantis šiuo vertimu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->