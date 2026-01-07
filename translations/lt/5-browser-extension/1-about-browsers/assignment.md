<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2026-01-07T11:47:10+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "lt"
}
-->
# Užduotis: Perdaryti savo naršyklės plėtinio stilių

## Apžvalga

Dabar, kai sukūrėte HTML struktūrą savo anglies pėdsako naršyklės plėtiniui, laikas padaryti jį vizualiai patrauklų ir patogų naudoti. Puikus dizainas pagerina vartotojo patirtį ir daro jūsų plėtinį profesionalesnį bei patrauklesnį.

Jūsų plėtinys turi pagrindinį CSS stilių, tačiau ši užduotis iššaukia jus sukurti unikalią vizualinę tapatybę, kuri atspindėtų jūsų asmeninį stilių ir išlaikytų puikią naudojimo patogumą.

## Instrukcijos

### 1 dalis: Analizuokite esamą dizainą

Prieš keisdami, išnagrinėkite dabartinę CSS struktūrą:

1. **Suraskite** CSS failus savo plėtinio projekte  
2. **Peržiūrėkite** dabartinį stiliaus požiūrį ir spalvų schemą  
3. **Nustatykite** sritis, kuriose galima patobulinti išdėstymą, tipografiją ir vizualinę hierarchiją  
4. **Apsvarstykite**, kaip dizainas palaiko vartotojo tikslus (lengvas formos užpildymas ir aiškus duomenų rodymas)

### 2 dalis: Sukurkite savo pasirinktinius stilius

Sukurkite darnų vizualinį dizainą, kuris apimtų:

**Spalvų schema:**  
- Pasirinkite pagrindinę spalvų paletę, atspindinčią aplinkos temas  
- Užtikrinkite pakankamą kontrastą prieinamumui (naudokite įrankius, pvz., WebAIM kontrasto tikrintuvą)  
- Apsvarstykite, kaip spalvos atrodys skirtingose naršyklės temose  

**Tipografija:**  
- Pasirinkite lengvai įskaitomus šriftus, kurie gerai veikia mažais plėtinio dydžiais  
- Nustatykite aiškią hierarchiją su tinkamais šrifto dydžiais ir storiais  
- Užtikrinkite, kad tekstas būtų įskaitomas tiek šviesiose, tiek tamsiose naršyklės temose  

**Išdėstymas ir tarpai:**  
- Pagerinkite formos elementų ir duomenų rodymo vizualinę organizaciją  
- Įdėkite tinkamą užpildymą ir tarpus geresniam skaitomumui  
- Apsvarstykite jautraus dizaino principus skirtingiems ekrano dydžiams  

### 3 dalis: Įgyvendinkite savo dizainą

Pakeiskite CSS failus, kad įgyvendintumėte savo dizainą:

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
  
**Pagrindinės sritys stilizuoti:**  
- **Formos elementai**: įvesties laukai, etiketės ir pateikimo mygtukas  
- **Rezultatų rodymas**: duomenų konteineris, teksto stilius ir įkėlimo būsena  
- **Interaktyvūs elementai**: užvedimo efektai, mygtukų būsena ir perėjimai  
- **Bendras išdėstymas**: konteinerių tarpai, fono spalvos ir vizualinė hierarchija  

### 4 dalis: Testuokite ir tobulinkite

1. **Sukurkite** savo plėtinį su `npm run build`  
2. **Įkelkite** atnaujintą plėtinį į naršyklę  
3. **Išbandykite** visas vizualines būsenas (formos įvedimą, įkėlimą, rezultatų rodymą, klaidas)  
4. **Patikrinkite** prieinamumą su naršyklės kūrėjų įrankiais  
5. **Tobulinkite** savo stilius remdamiesi tikru naudojimu  

## Kūrybiniai iššūkiai

### Pagrindinis lygis  
- Atnaujinkite spalvas ir šriftus, kad sukurtumėte darnų temą  
- Pagerinkite tarpų ir išlyginimo nuoseklumą visame sąsajoje  
- Įdėkite subtilius užvedimo efektus interaktyviems elementams  

### Vidutinis lygis  
- Sukurkite pasirinktinius ikonėlių arba grafinių elementų dizainus savo plėtiniui  
- Įgyvendinkite sklandžius perėjimus tarp skirtingų būsenų  
- Sukurkite unikalią įkėlimo animaciją API kvietimams  

### Pažengęs lygis  
- Sukurkite kelis temų variantus (šviesią/tamsią/didelio kontrasto)  
- Įgyvendinkite jautrų dizainą skirtingiems naršyklės lango dydžiams  
- Pridėkite mikroveiksmus, kurie pagerina vartotojo patirtį  

## Pateikimo gairės

Jūsų užduotis turi apimti:  

- **Pakeistus CSS failus** su jūsų pasirinktiniu stiliumi  
- **Ekrano nuotraukas**, kuriose matyti jūsų plėtinys skirtingose būsenose (forma, įkėlimas, rezultatai)  
- **Trumpą aprašymą** (2-3 sakiniai), paaiškinantį jūsų dizaino sprendimus ir kaip jie pagerina vartotojo patirtį  

## Vertinimo kriterijai

| Kriterijai | Išskirtinis (4) | Geras (3) | Tobulėjantis (2) | Pradinis (1) |
|------------|-----------------|-----------|------------------|--------------|
| **Vizualinis dizainas** | Kūrybingas, darnus dizainas, kuris pagerina naudojimo patogumą ir atspindi stiprias dizaino nuostatas | Geri dizaino sprendimai su nuosekliais stiliais ir aiškia vizualine hierarchija | Pagrindiniai dizaino patobulinimai su kai kuriomis nuoseklumo problemomis | Minimalūs stiliaus pakeitimai arba nekonsistentinis dizainas |
| **Funkcionalumas** | Visi stiliai veikia tobulai skirtingose būsenose ir naršyklių aplinkose | Stiliai gerai veikia, su nedidelėmis problemomis kraštutinėse situacijose | Dauguma stilių veikia, tačiau yra kai kurių rodymo problemų | Svarbūs stiliaus trūkumai, kurie veikia naudojimą |
| **Kodo kokybė** | Švarus, gerai organizuotas CSS su prasmingais klasės pavadinimais ir efektyviais selektoriais | Gerai struktūruotas CSS su tinkamu selektorių ir savybių naudojimu | Priimtinas CSS su kai kuriomis organizacinėmis problemomis | Prastas CSS struktūra arba per daug sudėtingas stilių rašymas |
| **Prieinamumas** | Puikus spalvų kontrastas, įskaitomi šriftai ir dėmesys vartotojams su negalia | Geri prieinamumo sprendimai su nedidelėmis tobulinimo galimybėmis | Pagrindinis dėmesys prieinamumui su kai kuriomis problemomis | Ribotas dėmesys prieinamumo reikalavimams |

## Sėkmės patarimai

> 💡 **Dizaino patarimas**: Pradėkite nuo subtilių pakeitimų ir pamažu kurkite ryškesnį stilių. Maži tipografijos ir tarpų pagerinimai dažnai labai pagerina bendrą kokybę.

**Geriausios praktikos:**  
- **Testuokite** plėtinį tiek šviesioje, tiek tamsioje naršyklės temoje  
- **Naudokite** reliacinius vienetus (em, rem) geresniam išplečiamumui  
- **Išlaikykite** nuoseklius tarpus, naudodami CSS pasirinktines savybes  
- **Apsvarstykite**, kaip jūsų dizainas atrodys vartotojams su skirtingais regėjimo poreikiais  
- **Validuokite** CSS, kad įsitikintumėte, jog jis atitinka taisykles  

> ⚠️ **Dažna klaida**: Nesaugojimas naudotojo patogumo vizualinio patrauklumo sąskaita. Jūsų plėtinys turi būti ir gražus, ir funkcionalus.

**Atminkite:**  
- **Išlaikykite** svarbią informaciją lengvai įskaitomą  
- **Užtikrinkite**, kad mygtukai ir interaktyvūs elementai būtų lengvai paspaudžiami  
- **Išlaikykite** aiškią vizualinę reakciją į vartotojo veiksmus  
- **Testuokite** dizainą su tikrais duomenimis, ne tik su laikinojo teksto žymomis

Sėkmės kuriant naršyklės plėtinį, kuris yra ir funkcionalus, ir vizualiai įspūdingas!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės atsisakymas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų arba netikslumų. Originalus dokumentas jo gimtąja kalba laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojame naudotis profesionalaus žmogaus vertimu. Mes neprisiimame atsakomybės už bet kokius nesusipratimus ar neteisingus aiškinimus, kilusius naudojantis šiuo vertimu.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->