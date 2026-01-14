<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2026-01-08T09:29:19+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "et"
}
-->
# Ülesanne: Muuda oma brauserilaiend stiililisemaks

## Ülevaade

Nüüd, kui oled loonud oma süsinikujalajälje brauserilaiendi HTML-struktuuri, on aeg muuta see visuaalselt atraktiivseks ja kasutajasõbralikuks. Hea disain parandab kasutajakogemust ning muudab su laiendi professionaalsemaks ja kaasahaaravamaks.

Sinu laiendil on põhiline CSS-stiil, kuid see ülesanne kutsub sind looma unikaalse visuaalse identiteedi, mis peegeldab sinu isiklikku stiili ja samas säilitab suurepärase kasutusmugavuse.

## Juhised

### 1. osa: Analüüsi olemasolevat disaini

Enne muutmist vaata üle olemasolev CSS-struktuur:

1. **Leia** CSS-failid oma laiendusprojekti kaustast
2. **Uuri** praegust stiililahendust ja värviskeemi
3. **Tuvasta** parandamist vajavad kohad paigutuses, tüpograafias ja visuaalses hierarhias
4. **Mõtle** sellele, kuidas disain toetab kasutajate eesmärke (lihtne vormi täitmine ja andmete selge kuvamine)

### 2. osa: Loo oma kohandatud stiil

Koosta ühtne visuaalne kujundus, mis hõlmab:

**Värviskeem:**
- Vali peamine värvipalett, mis peegeldab keskkonna temaatikat
- Tagada piisav kontrastsus juurdepääsetavuse jaoks (kasuta tööriistu nagu WebAIM kontrastitesti)
- Mõtle, kuidas värvid toimivad erinevates brauseriteemades

**Tüpograafia:**
- Vali loetavad fondid, mis toimivad hästi väikestes laiendi mõõtmetes
- Loo selge hierarhia sobivate fondisuuruste ja -kaaludega
- Tagada teksti loetavus nii heledates kui ka tumedates brauseriteemades

**Paigutus ja ruumid:**
- Paranda vormielementide ja andmete kuvamise visuaalset korraldust
- Lisa sobivaid täite- ja vahede suuruseid, et muuta lugemine lihtsamaks
- Võta arvesse reageeriva disaini põhimõtteid erinevate ekraanisuuruste jaoks

### 3. osa: Rakenda oma disain

Muuda CSS-faile, et rakendada oma disaini:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Peamised stiilialad:**
- **Vormielemendid**: sisestusväljad, sildid ja esitamise nupp
- **Tulemuste kuvamine**: andmekonteiner, tekstistiilid ja laadimise olekud
- **Interaktiivsed elemendid**: hiirega üle liikumise efektid, nupu olekud ja üleminekud
- **Üldine paigutus**: konteineri vahed, taustavärvid ja visuaalne hierarhia

### 4. osa: Testi ja täienda

1. **Koosta** oma laiend käsklusega `npm run build`
2. **Laadi** uuendatud laiend oma brauserisse
3. **Testi** kõiki visuaalseid olekuid (vormi täitmine, laadimine, tulemuste kuvamine, vead)
4. **Kontrolli** juurdepääsetavust brauseri arendustööriistadega
5. **Paranda** stiile vastavalt tegelikule kasutuskogemusele

## Loovad väljakutsed

### Algajatele
- Uuenda värve ja fonte, et luua ühtne teema
- Paranda vahed ja joondus kogu liidese ulatuses
- Lisa nõrgad hiirega üle liikumise efektid interaktiivsetele elementidele

### Kesktase
- Kujunda kohandatud ikoone või graafikat oma laiendi jaoks
- Rakenda sujuvad üleminekud erinevate olekute vahel
- Loo unikaalne laadimisanimatsioon API-kõnede jaoks

### Edasijõudnutele
- Kujunda mitu temavalikut (hele/tume/kõrge kontrastsus)
- Rakenda reageeriv disain erinevate brauseriakende suuruste jaoks
- Lisa mikrointeraktsioonid, mis parandavad kasutajakogemust

## Töötulemuste esitamistsoon

Sinu lõpetatud ülesanne peaks sisaldama:

- **Muudetud CSS-faile** oma kohandatud stiiliga
- **Ekraanipilte**, mis näitavad su laiendit erinevates olekutes (vorm, laadimine, tulemused)
- **Lühikirjeldust** (2-3 lauset), mis selgitab su disainivalikuid ja kuidas need parandavad kasutajakogemust

## Hindamiskriteeriumid

| Kriteerium | Silmapaistev (4) | Pädev (3) | Edenev (2) | Algaja (1) |
|------------|------------------|-----------|------------|------------|
| **Visuaalne disain** | Loominguline, ühtne kujundus, mis parandab kasutusmugavust ja peegeldab tugevaid disainipõhimõtteid | Head kujundusvalikud, järjepidev stiil ja selge visuaalne hierarhia | Põhilised disainiparandused mõningate järjepidevuse probleemidega | Vähemtähtsad stiilimuudatused või ebajärjekindel disain |
| **Funktsionaalsus** | Kõik stiilid töötavad laitmatult erinevates olekutes ja brauserites | Stiilid töötavad hästi väikeste probleemidega äärejuhtudel | Enamik stiile funktsioneerib, esineb mõned kuvamisprobleemid | Märkimisväärsed stiiliprobleemid, mis segavad kasutamist |
| **Koodi kvaliteet** | Puhtad, hästi organiseeritud CSS-id tähenduslike klassinimede ja tõhusate selektoritega | Hea CSS-struktuur, sobiv selektorite ja omaduste kasutus | Vastuvõetav CSS mõningate korraldusprobleemidega | Nõrk CSS-struktuur või liiga keerukas stiil |
| **Juurdepääsetavus** | Suurepärane värvikontrastsus, loetavad fondid ja puudega kasutajate arvestamine | Head juurdepääsetavuse tavad väikeste täiustamisvõimalustega | Põhilised juurdepääsetavuse kaalutlused mõningate probleemidega | Piiratud tähelepanu juurdepääsetavusele |

## Edu soovitused

> 💡 **Disaininipp**: Alusta väikestest muudatustest ja laienda järk-järgult efektsemate stiilideni. Väikesed parendused tüpograafias ja ruumides avaldavad sageli suurt mõju tajutavale kvaliteedile.

**Parimad praktikad:**
- **Testi** oma laiendit nii heledates kui tumedates brauseriteemades
- **Kasuta** suhtelisi ühikuid (em, rem) parema skaleeritavuse tagamiseks
- **Hoidke** järjepidevad vahed CSS-i kohandatud omadustega
- **Mõtle** sellele, kuidas su disain paistab kasutajatele, kellel on erinevad nägemisvajadused
- **Valideeri** oma CSS-i, veendumaks, et see järgib korrektset süntaksit

> ⚠️ **Levinud viga**: Ära ohverda kasutusmugavust visuaalse välimuse nimel. Sinu laiend peab olema nii ilus kui ka funktsionaalne.

**Pea meeles:**
- **Hoia** oluline info kergesti loetavana
- **Tagada**, et nupud ja interaktiivsed elemendid oleksid hõlpsasti klikitavad
- **Säilita** selge visuaalne tagasiside kasutaja tegevustele
- **Testi** oma disaini reaalsete andmetega, mitte ainult kohatäitetekstidega

Õnne loomingulise ja silmapaistva funktsionaalse brauserilaiendi loomisel!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellekti tõlke teenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi me püüdleme täpsuse poole, palun arvestage, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle algkeeles tuleks pidada usaldusväärseks allikaks. Olulise info puhul soovitatakse professionaalset inimtõlget. Me ei vastuta ühegi tõlgenduse või eksimuse eest, mis võivad tekkida selle tõlke kasutamisest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->