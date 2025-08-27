<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f23a868536c07da991b1d4e773161e25",
  "translation_date": "2025-08-27T23:06:28+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "ro"
}
-->
# Implementați dialogul „Adaugă tranzacție”

## Instrucțiuni

Aplicația noastră bancară încă nu are o funcționalitate importantă: posibilitatea de a introduce tranzacții noi.
Folosind tot ce ați învățat în cele patru lecții anterioare, implementați un dialog „Adaugă tranzacție”:

- Adăugați un buton „Adaugă tranzacție” pe pagina de dashboard
- Fie creați o pagină nouă cu un șablon HTML, fie utilizați JavaScript pentru a afișa/ascunde HTML-ul dialogului fără a părăsi pagina de dashboard (puteți folosi proprietatea [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) pentru asta sau clase CSS)
- Asigurați-vă că gestionați [accesibilitatea pentru tastatură și cititoare de ecran](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/) pentru dialog
- Implementați un formular HTML pentru a primi datele de intrare
- Creați date JSON din datele formularului și trimiteți-le către API
- Actualizați pagina de dashboard cu noile date

Consultați [specificațiile API ale serverului](../api/README.md) pentru a vedea ce API trebuie să apelați și care este formatul JSON așteptat.

Iată un exemplu de rezultat după finalizarea sarcinii:

![Captură de ecran care arată un exemplu de dialog „Adaugă tranzacție”](../../../../translated_images/dialog.93bba104afeb79f12f65ebf8f521c5d64e179c40b791c49c242cf15f7e7fab15.ro.png)

## Criterii de evaluare

| Criteriu | Exemplară                                                                                         | Adecvat                                                                                                                | Necesită îmbunătățiri                        |
| -------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------|
|          | Adăugarea unei tranzacții este implementată complet, urmând toate bunele practici prezentate în lecții. | Adăugarea unei tranzacții este implementată, dar nu urmează toate bunele practici prezentate în lecții sau funcționează doar parțial. | Adăugarea unei tranzacții nu funcționează deloc. |

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.