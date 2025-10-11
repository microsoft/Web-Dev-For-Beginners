<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:55:44+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "hr"
}
-->
***

# Korištenje uređivača koda: Ovladavanje [VSCode.dev](https://vscode.dev)

**Dobrodošli!**  
Ova lekcija vas vodi od osnova do naprednog korištenja [VSCode.dev](https://vscode.dev)—moćnog, web-baziranog uređivača koda. Naučit ćete kako samouvjereno uređivati kod, upravljati projektima, pratiti promjene, instalirati ekstenzije i surađivati kao profesionalac—sve iz vašeg preglednika, bez potrebe za instalacijom.

***

## Ciljevi učenja

Na kraju ove lekcije, moći ćete:

- Učinkovito koristiti uređivač koda na bilo kojem projektu, bilo gdje
- Besprijekorno pratiti svoj rad pomoću ugrađene kontrole verzija
- Personalizirati i poboljšati svoj razvojni tijek rada prilagodbama uređivača i ekstenzijama

***

## Preduvjeti

Za početak, **prijavite se za besplatan [GitHub](https://github.com) račun**, koji vam omogućuje upravljanje repozitorijima koda i suradnju širom svijeta. Ako još nemate račun, [kreirajte ga ovdje](https://github.com/).

***

## Zašto koristiti web-bazirani uređivač koda?

**Uređivač koda** poput VSCode.dev vaš je komandni centar za pisanje, uređivanje i upravljanje kodom. S intuitivnim sučeljem, mnoštvom značajki i trenutnim pristupom putem preglednika, možete:

- Uređivati projekte na bilo kojem uređaju
- Izbjeći gnjavažu oko instalacija
- Suraditi i doprinositi odmah

Kad se udobno smjestite s VSCode.dev, bit ćete spremni za rješavanje zadataka kodiranja bilo gdje, bilo kada.

***

## Početak rada s VSCode.dev

Idite na **[VSCode.dev](https://vscode.dev)**—bez instalacije, bez preuzimanja. Prijava putem GitHub-a otključava puni pristup, uključujući sinkronizaciju vaših postavki, ekstenzija i repozitorija. Ako se zatraži, povežite svoj GitHub račun.

Nakon učitavanja, vaše radno okruženje izgledat će ovako:

![Default VSCode.dev](../images/default-vscode-dev ima tri glavna dijela s lijeva na desno:
- **Traka aktivnosti:** Ikone poput 🔎 (Pretraživanje), ⚙️ (Postavke), datoteke, kontrola izvora itd.
- **Bočna traka:** Mijenja kontekst ovisno o odabranoj ikoni na traci aktivnosti (zadano je *Explorer* za prikaz datoteka).
- **Područje uređivanja/koda:** Najveći dio s desne strane—gdje ćete zapravo uređivati i pregledavati kod.

Kliknite na ikone kako biste istražili značajke, ali vratite se na _Explorer_ kako biste ostali na mjestu.

***

## Otvaranje GitHub repozitorija

### Metoda 1: Iz uređivača

1. Idite na [VSCode.dev](https://vscode.dev). Kliknite **"Open Remote Repository."**

   ![Open remote repository](../../../../8-code-editor/images/open-remote-repository koristite _Command Palette_ (Ctrl-Shift-P, ili Cmd-Shift-P na Macu).

   ![Palette Menu](../images/palette-menu.pngopen remote repository.”
   - Odaberite opciju.
   - Zalijepite URL svog GitHub repozitorija (npr. `https://github.com/microsoft/Web-Dev-For-Beginners`) i pritisnite Enter.

Ako je uspješno, vidjet ćete cijeli projekt učitan i spreman za uređivanje!

***

### Metoda 2: Trenutno putem URL-a

Transformirajte bilo koji GitHub URL kako biste ga otvorili izravno u VSCode.dev zamjenom `github.com` s `vscode.dev/github`.  
Npr.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Ova značajka omogućuje brz pristup BILO kojem projektu.

***

## Uređivanje datoteka u vašem projektu

Kad je vaš repozitorij otvoren, možete:

### 1. **Kreirati novu datoteku**
- U *Explorer* bočnoj traci, navigirajte do željene mape ili koristite korijenski direktorij.
- Kliknite ikonu _‘New file ...’_.
- Imenujte svoju datoteku, pritisnite **Enter**, i vaša datoteka se odmah pojavljuje.

![Create a new file](../images/create-new-file 2. **Uređivanje i spremanje datoteka**

- Kliknite na datoteku u *Explorer-u* kako biste je otvorili u području koda.
- Napravite potrebne izmjene.
- VSCode.dev automatski sprema vaše promjene, ali možete pritisnuti Ctrl+S za ručno spremanje.

![Edit a file](../images/edit-a-file.png. **Praćenje i potvrda promjena s kontrolom verzija**

VSCode.dev ima integriranu **Git** kontrolu verzija!

- Kliknite ikonu _'Source Control'_ kako biste vidjeli sve napravljene promjene.
- Datoteke u mapi `Changes` prikazuju dodatke (zeleno) i brisanja (crveno).  
  ![View changes](../images/working-tree.png promjene klikom na `+` pored datoteka kako biste ih pripremili za potvrdu.
- **Odbacite** neželjene promjene klikom na ikonu za poništavanje.
- Upisujte jasnu poruku potvrde, zatim kliknite kvačicu za potvrdu i slanje.

Za povratak na vaš repozitorij na GitHub-u, odaberite izbornik hamburgera u gornjem lijevom kutu.

![Stage & commit changes](../images/edit-vscode.dev Up with Extensions

Ekstenzije vam omogućuju dodavanje jezika, tema, alata za otklanjanje grešaka i alata za produktivnost u VSCode.dev—čineći vaš život kodiranja lakšim i zabavnijim.

### Pregledavanje i upravljanje ekstenzijama

- Kliknite ikonu **Extensions** na traci aktivnosti.
- Pretražujte ekstenziju u polju _'Search Extensions in Marketplace'_.

  ![Extension details](../images/extension-details:
  - **Installed**: Sve ekstenzije koje ste dodali
  - **Popular**: Industrijski favoriti
  - **Recommended**: Prilagođeno vašem tijeku rada

  ![View extensions](

  

***

### 1. **Instaliranje ekstenzija**

- Unesite naziv ekstenzije u pretraživanje, kliknite na nju i pregledajte detalje u uređivaču.
- Pritisnite **plavi gumb Install** u bočnoj traci _ili_ u glavnom području koda.

  ![Install extensions](../images/install-extension 2. **Prilagodba ekstenzija**

- Pronađite instaliranu ekstenziju.
- Kliknite na **ikonu zupčanika** → odaberite _Extension Settings_ kako biste prilagodili ponašanje prema svojim željama.

  ![Modify extension settings](../images/extension-settings 3. **Upravljanje ekstenzijama**
Možete:

- **Onemogućiti:** Privremeno isključiti ekstenziju dok je zadržavate instaliranom
- **Deinstalirati:** Trajno ukloniti ako vam više nije potrebna

  Pronađite ekstenziju, pritisnite ikonu zupčanika i odaberite ‘Disable’ ili ‘Uninstall,’ ili koristite plave gumbe u području koda.

***

## Zadatak

Testirajte svoje vještine: [Kreirajte web stranicu životopisa koristeći vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Daljnje istraživanje i samostalno učenje

- Dublje istražite [službenu dokumentaciju VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Istražite napredne značajke radnog prostora, prečace na tipkovnici i postavke.

***

**Sada ste spremni kodirati, stvarati i surađivati—s bilo kojeg mjesta, na bilo kojem uređaju, koristeći VSCode.dev!**

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja mogu proizaći iz korištenja ovog prijevoda.