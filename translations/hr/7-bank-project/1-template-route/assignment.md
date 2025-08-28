<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8223e429218befa731dd5bfd22299520",
  "translation_date": "2025-08-27T22:11:58+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "hr"
}
-->
# Poboljšajte usmjeravanje

## Upute

Deklaracija ruta trenutno sadrži samo ID predloška koji se koristi. No, kada se prikazuje nova stranica, ponekad je potrebno nešto više. Poboljšajmo našu implementaciju usmjeravanja s dvije dodatne značajke:

- Dodajte naslove svakom predlošku i ažurirajte naslov prozora s novim naslovom kada se predložak promijeni.
- Dodajte opciju za pokretanje koda nakon promjene predloška. Želimo ispisati `'Dashboard is shown'` u konzoli za razvojne programere svaki put kada se prikaže stranica nadzorne ploče.

## Rubrika

| Kriterij | Izvrsno                                                                                                                            | Zadovoljavajuće                                                                                                                                                                           | Potrebno poboljšanje                                   |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Obje značajke su implementirane i rade. Dodavanje naslova i koda također funkcionira za novu rutu dodanu u deklaraciju `routes`.   | Obje značajke rade, ali ponašanje je hardkodirano i nije konfigurabilno putem deklaracije `routes`. Dodavanje treće rute s naslovom i dodavanjem koda ne radi ili djelomično radi.         | Jedna od značajki nedostaje ili ne radi ispravno.      |

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.