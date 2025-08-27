<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-27T22:12:06+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "sl"
}
-->
# Izboljšajte usmerjanje

## Navodila

Deklaracija poti trenutno vsebuje samo ID predloge za uporabo. Vendar pa je včasih pri prikazu nove strani potrebno nekaj več. Izboljšajmo našo implementacijo usmerjanja z dvema dodatnima funkcijama:

- Dodelite naslove vsaki predlogi in posodobite naslov okna z novim naslovom, ko se predloga spremeni.
- Dodajte možnost za izvajanje kode po spremembi predloge. Želimo, da se v razvijalski konzoli vsakič, ko je prikazana stran nadzorne plošče, izpiše `'Dashboard is shown'`.

## Merila

| Merilo   | Odlično                                                                                                                            | Zadostno                                                                                                                                                                                  | Potrebno izboljšanje                                   |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|          | Obe funkciji sta implementirani in delujeta. Dodajanje naslova in kode deluje tudi za novo pot, dodano v deklaracijo `routes`.      | Obe funkciji delujeta, vendar je vedenje trdno določeno in ni nastavljivo prek deklaracije `routes`. Dodajanje tretje poti z naslovom in dodatkom kode ne deluje ali deluje delno.         | Ena od funkcij manjka ali ne deluje pravilno.         |

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.