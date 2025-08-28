<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-27T22:09:46+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "sl"
}
-->
# Implementirajte dialog "Dodaj transakcijo"

## Navodila

Naša bančna aplikacija še vedno nima ene pomembne funkcije: možnosti vnosa novih transakcij. 
Uporabite vse, kar ste se naučili v štirih prejšnjih lekcijah, da implementirate dialog "Dodaj transakcijo":

- Dodajte gumb "Dodaj transakcijo" na strani nadzorne plošče
- Ustvarite novo stran s HTML predlogo ali uporabite JavaScript za prikaz/skritje dialoga HTML, ne da bi zapustili stran nadzorne plošče (lahko uporabite lastnost [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) ali CSS razrede)
- Poskrbite za [dostopnost s tipkovnico in bralnikom zaslona](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) za dialog
- Implementirajte HTML obrazec za vnos podatkov
- Ustvarite JSON podatke iz podatkov obrazca in jih pošljite API-ju
- Posodobite stran nadzorne plošče z novimi podatki

Oglejte si [specifikacije strežniškega API-ja](../api/README.md), da preverite, kateri API morate poklicati in kakšna je pričakovana oblika JSON-a.

Tukaj je primer rezultata po zaključku naloge:

![Posnetek zaslona, ki prikazuje primer dialoga "Dodaj transakcijo"](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.sl.png)

## Merila

| Merila  | Odlično                                                                                           | Zadostno                                                                                                               | Potrebno izboljšanje                        |
| --------| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
|         | Dodajanje transakcije je popolnoma implementirano v skladu z najboljšimi praksami, ki smo jih obravnavali v lekcijah. | Dodajanje transakcije je implementirano, vendar ne v skladu z najboljšimi praksami iz lekcij ali deluje le delno.      | Dodajanje transakcije sploh ne deluje.      |

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.