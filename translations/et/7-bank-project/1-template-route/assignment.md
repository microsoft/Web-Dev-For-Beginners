<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2026-01-08T09:36:35+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "et"
}
-->
# Paranda marsruutimist

## Juhised

Nüüd, kui olete loonud põhitasemel marsruutimissüsteemi, on aeg seda täiustada professionaalsete funktsioonidega, mis parandavad kasutajakogemust ja pakuvad paremaid arendajate tööriistu. Reaalsetes rakendustes on vaja rohkemat kui lihtsalt malli vahetamine – vaja on dünaamilisi lehe pealkirju, elutsükli konksusid ja laiendatavat arhitektuuri.

Selles ülesandes laiendate oma marsruutimise teostust kahe olulise funktsiooniga, mis on levinud tootmises veebirakendustes. Need täiustused muudavad teie pangarakenduse professionaalsemaks ja annavad aluse tulevasteks funktsioonideks.

Marsruutide deklaratsioon sisaldab hetkel ainult kasutada olevat malli ID-d. Kuid uue lehe kuvamisel on vahel vaja veidi rohkemat. Parandame oma marsruutimise teostust kahe täiendava funktsiooniga:

### Funktsioon 1: Dünaamilised lehe pealkirjad
**Eesmärk:** Anda igale mallile pealkiri ja uuendada akna pealkiri selle uue pealkirjaga, kui mall muutub.

**Miks see oluline on:**
- **Parandab** kasutajakogemust, kuvades kirjeldusega brauseri vahekaardi pealkirju
- **Tõstab** ligipääsetavust ekraanilugerite ja abitehnoloogiate jaoks  
- **Tagab** parema järjehoidjate ja brauseri ajaloo konteksti
- **Järgib** professionaalse veebiarenduse parimaid tavasid

**Teostuslähenemine:**
- **Laiendage** marsruutide objekti, lisades igale marsruudile pealkirja info
- **Muudake** funktsiooni `updateRoute()`, et uuendada dünaamiliselt `document.title`
- **Testige**, kas pealkirjad muutuvad õigesti ekraanide vahel navigeerides

### Funktsioon 2: Marsruudi elutsükli konksud  
**Eesmärk:** Lisada võimalus jooksutada kooditükki pärast malli muutumist. Soovime prinditda arendajate konsooli iga kord, kui armatuurlauda kuvatakse, sõnumit `'Dashboard is shown'`.

**Miks see oluline on:**
- **Võimaldab** täita kohandatud loogikat, kui konkreetne marsruut laaditakse
- **Pakub** konksud analüütika, logimise või initsialiseerimise koodi jaoks
- **Loodab** aluse keerukamate marsruutikäitumiste loomiseks
- **Demonstreerib** jälgija mustrit veebiarenduses

**Teostuslähenemine:**
- **Lisa** valikuline tagasikutsumise funktsiooni atribuut marsruudi konfiguratsioonidesse
- **Täida** tagasikutsumise funktsioon (kui see on olemas) pärast malli renderdamise lõpetamist
- **Veenduge**, et funktsioon töötab iga marsruudi korral, millel on määratud tagasikutsumine
- **Testige**, et konsooli sõnum ilmub dashboardi külastamisel

## Hindejuhend

| Kriteerium | Näidistikujuline                                                                                                                          | Piisav                                                                                                                                                                                  | Vajab parandamist                                       |
| -----------| ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|            | Mõlemad funktsioonid on implementeeritud ja töötavad. Pealkirja ja koodi lisamine töötab ka uue marsruudi korral, mis on lisatud `routes` deklaratsiooni. | Mõlemad funktsioonid töötavad, kuid käitumine on kovt hardcodeeritud ega ole `routes` deklaratsiooni kaudu seadistatav. Kolmanda marsruudi lisamine pealkirja ja koodi lisamisega ei tööta või töötab osaliselt. | Üks funktsioonidest puudub või ei tööta korralikult.   |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutülesanne**:
See dokument on tõlgitud kasutades tehisintellektil põhinevat tõlke teenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, palun pange tähele, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument oma emakeeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tingitud arusaamatuste või valesti mõistmiste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->