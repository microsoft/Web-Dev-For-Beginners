# Poboljšajte usmjeravanje

## Upute

Sada kada ste izradili osnovni sustav usmjeravanja, vrijeme je da ga unaprijedite profesionalnim značajkama koje poboljšavaju korisničko iskustvo i pružaju bolje alate za razvoj. Aplikacije u stvarnom svijetu trebaju više od samog prebacivanja predložaka – zahtijevaju dinamične naslove stranica, životne cikluse i proširive arhitekture.

U ovom zadatku proširit ćete svoju implementaciju usmjeravanja s dvije ključne značajke koje se često nalaze u produkcijskim web aplikacijama. Ova poboljšanja učinit će vašu aplikaciju za bankarstvo sofisticiranijom i pružiti temelj za buduće funkcionalnosti.

Deklaracija ruta trenutno sadrži samo ID predloška koji se koristi. No, kada se prikazuje nova stranica, ponekad je potrebno malo više. Poboljšajmo našu implementaciju usmjeravanja s dvije dodatne značajke:

### Značajka 1: Dinamični naslovi stranica
**Cilj:** Dodijelite naslove svakom predlošku i ažurirajte naslov prozora s novim naslovom kada se predložak promijeni.

**Zašto je ovo važno:**
- **Poboljšava** korisničko iskustvo prikazivanjem opisnih naslova kartica preglednika
- **Povećava** pristupačnost za čitače ekrana i tehnologije za pomoć  
- **Omogućuje** bolje označavanje i kontekst povijesti preglednika
- **Prati** najbolje prakse profesionalnog web razvoja

**Pristup implementaciji:**
- **Proširite** objekt ruta kako bi uključivao informacije o naslovu za svaku rutu
- **Izmijenite** funkciju `updateRoute()` kako bi dinamički ažurirala `document.title`
- **Testirajte** da se naslovi ispravno mijenjaju prilikom navigacije između ekrana

### Značajka 2: Kuke životnog ciklusa ruta  
**Cilj:** Dodajte opciju za pokretanje nekog koda nakon promjene predloška. Želimo ispisati `'Dashboard is shown'` u konzoli za razvojne programere svaki put kad se prikaže stranica nadzorne ploče.

**Zašto je ovo važno:**
- **Omogućuje** izvršavanje prilagođene logike prilikom učitavanja određenih ruta
- **Pruža** kuke za analitiku, zapisivanje ili inicijalizacijski kod
- **Stvara** temelj za složenije ponašanje ruta
- **Demonstrira** obrazac promatrača u web razvoju

**Pristup implementaciji:**
- **Dodajte** opcionalnu funkciju povratnog poziva u konfiguraciju ruta
- **Izvršite** funkciju povratnog poziva (ako postoji) nakon što se predložak prikaže
- **Osigurajte** da značajka radi za bilo koju rutu s definiranim povratnim pozivom
- **Testirajte** da se poruka u konzoli pojavljuje prilikom posjeta nadzornoj ploči

## Rubrika

| Kriterij | Izvrsno                                                                                                                          | Zadovoljavajuće                                                                                                                                                                                  | Potrebno poboljšanje                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Obje značajke su implementirane i rade. Naslov i dodavanje koda također rade za novu rutu dodanu u deklaraciju `routes`. | Obje značajke rade, ali ponašanje je unaprijed definirano i nije konfigurabilno putem deklaracije `routes`. Dodavanje treće rute s naslovom i dodavanjem koda ne radi ili djelomično radi. | Jedna od značajki nedostaje ili ne radi ispravno. |

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.