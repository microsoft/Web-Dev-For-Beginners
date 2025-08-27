<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a4abf305ede1cfaadd56a8fab4b4c288",
  "translation_date": "2025-08-27T22:03:19+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "hr"
}
-->
# Refaktorirajte i komentirajte svoj kod

## Upute

Kako vaša baza koda raste, važno je često refaktorirati kod kako bi ostao čitljiv i održiv tijekom vremena. Dodajte komentare i refaktorirajte svoj `app.js` kako biste poboljšali kvalitetu koda:

- Izvucite konstante, poput osnovnog URL-a API-ja servera
- Faktorirajte sličan kod: na primjer, možete kreirati funkciju `sendRequest()` kako biste grupirali kod koji se koristi u funkcijama `createAccount()` i `getAccount()`
- Preuredite kod kako bi bio lakši za čitanje i dodajte komentare

## Rubrika

| Kriterij | Izvrsno                                                                                                                                                       | Zadovoljavajuće                                                                                  | Potrebno poboljšanje                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|          | Kod je komentiran, dobro organiziran u različite sekcije i lako čitljiv. Konstante su izdvojene, a faktorirana funkcija `sendRequest()` je kreirana.          | Kod je čist, ali se još uvijek može poboljšati dodavanjem više komentara, izdvajanja konstanti ili faktoriranja. | Kod je neuredan, nije komentiran, konstante nisu izdvojene, a kod nije faktoriran.    |

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.