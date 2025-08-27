<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-27T23:03:28+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "ro"
}
-->
# Îmbunătățirea rutării

## Instrucțiuni

Declarația rutelor conține în prezent doar ID-ul șablonului care trebuie utilizat. Dar, atunci când afișăm o pagină nouă, uneori este nevoie de ceva mai mult. Să îmbunătățim implementarea rutării cu două funcționalități suplimentare:

- Atribuie titluri fiecărui șablon și actualizează titlul ferestrei cu acest nou titlu atunci când șablonul se schimbă.
- Adaugă o opțiune pentru a rula un cod după ce șablonul se schimbă. Ne dorim să afișăm `'Dashboard is shown'` în consola dezvoltatorului de fiecare dată când pagina dashboard este afișată.

## Criterii de evaluare

| Criteriu | Exemplu                                                                                                                            | Adecvat                                                                                                                                                                                   | Necesită îmbunătățiri                                  |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
|          | Cele două funcționalități sunt implementate și funcționează. Titlul și adăugarea codului funcționează și pentru o rută nouă adăugată în declarația `routes`. | Cele două funcționalități funcționează, dar comportamentul este hardcodat și nu configurabil prin declarația `routes`. Adăugarea unei a treia rute cu titlu și cod funcționează parțial sau deloc. | Una dintre funcționalități lipsește sau nu funcționează corect. |

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.