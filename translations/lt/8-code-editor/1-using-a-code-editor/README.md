<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T11:10:03+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "lt"
}
-->
***

# Naudojimasis kodo redaktoriumi: Įvaldykite [VSCode.dev](https://vscode.dev)

**Sveiki atvykę!**  
Ši pamoka padės jums nuo pagrindų iki pažangaus [VSCode.dev](https://vscode.dev) naudojimo – galingo, internetinio kodo redaktoriaus. Išmoksite užtikrintai redaguoti kodą, valdyti projektus, sekti pakeitimus, diegti plėtinius ir bendradarbiauti kaip profesionalas – visa tai tiesiai iš naršyklės, be jokio diegimo.

***

## Mokymosi tikslai

Pamokos pabaigoje galėsite:

- Efektyviai naudoti kodo redaktorių bet kuriame projekte, bet kurioje vietoje
- Sklandžiai sekti savo darbą naudojant integruotą versijų valdymą
- Personalizuoti ir optimizuoti savo kūrimo procesą su redaktoriaus pritaikymais ir plėtiniais

***

## Reikalavimai

Norėdami pradėti, **užsiregistruokite nemokamai [GitHub](https://github.com) paskyrai**, kuri leidžia valdyti kodo saugyklas ir bendradarbiauti visame pasaulyje. Jei dar neturite paskyros, [sukurkite ją čia](https://github.com/).

***

## Kodėl verta naudoti internetinį kodo redaktorių?

**Kodo redaktorius**, kaip VSCode.dev, yra jūsų valdymo centras rašant, redaguojant ir valdant kodą. Su intuityvia sąsaja, daugybe funkcijų ir tiesiogine prieiga per naršyklę galite:

- Redaguoti projektus bet kuriame įrenginyje
- Vengti diegimo rūpesčių
- Bendradarbiauti ir prisidėti akimirksniu

Kai įvaldysite VSCode.dev, būsite pasiruošę spręsti kodavimo užduotis iš bet kur, bet kada.

***

## Pradžia su VSCode.dev

Eikite į **[VSCode.dev](https://vscode.dev)** – be diegimo, be atsisiuntimų. Prisijungimas su GitHub suteikia pilną prieigą, įskaitant nustatymų, plėtinių ir saugyklų sinchronizavimą. Jei paprašyta, prijunkite savo GitHub paskyrą.

Įkrovus, jūsų darbo aplinka atrodys taip:

![Numatytasis VSCode.dev](../images/default-vscode-dev turi tris pagrindines sekcijas iš kairės į dešinę:
- **Veiklos juosta:** Piktogramos, tokios kaip 🔎 (Paieška), ⚙️ (Nustatymai), failai, versijų kontrolė ir kt.
- **Šoninė juosta:** Keičia kontekstą pagal pasirinktą veiklos juostos piktogramą (numatytasis *Explorer* rodo failus).
- **Redaktoriaus/kodo sritis:** Didžiausia sekcija dešinėje – čia redaguosite ir peržiūrėsite kodą.

Paspauskite piktogramas, kad tyrinėtumėte funkcijas, bet grįžkite į _Explorer_, kad išlaikytumėte vietą.

***

## GitHub saugyklos atidarymas

### Metodas 1: Iš redaktoriaus

1. Eikite į [VSCode.dev](https://vscode.dev). Spustelėkite **"Open Remote Repository."**

   ![Atidaryti nuotolinę saugyklą](../../../../8-code-editor/images/open-remote-repository naudokite _Komandų paletę_ (Ctrl-Shift-P arba Cmd-Shift-P Mac).

   ![Paletės meniu](../images/palette-menu.png atidaryti nuotolinę saugyklą.”
   - Pasirinkite parinktį.
   - Įklijuokite savo GitHub saugyklos URL (pvz., `https://github.com/microsoft/Web-Dev-For-Beginners`) ir paspauskite Enter.

Jei pavyks, pamatysite visą projektą, paruoštą redagavimui!

***

### Metodas 2: Tiesiogiai per URL

Pakeiskite bet kurį GitHub saugyklos URL, kad jis būtų atidarytas tiesiogiai VSCode.dev, pakeisdami `github.com` į `vscode.dev/github`.  
Pvz.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Ši funkcija leidžia greitai pasiekti BET kurį projektą.

***

## Failų redagavimas projekte

Kai jūsų saugykla atidaryta, galite:

### 1. **Sukurti naują failą**
- *Explorer* šoninėje juostoje eikite į norimą aplanką arba naudokite šaknį.
- Spustelėkite _‘New file ...’_ piktogramą.
- Pavadinkite failą, paspauskite **Enter**, ir failas atsiras akimirksniu.

![Sukurti naują failą](../images/create-new-file 2. **Redaguoti ir išsaugoti failus**

- Spustelėkite failą *Explorer*, kad atidarytumėte jį kodo srityje.
- Atlikite reikiamus pakeitimus.
- VSCode.dev automatiškai išsaugo jūsų pakeitimus, bet galite paspausti Ctrl+S, kad išsaugotumėte rankiniu būdu.

![Redaguoti failą](../images/edit-a-file.png. **Sekti ir įsipareigoti pakeitimus su versijų kontrole**

VSCode.dev turi integruotą **Git** versijų kontrolę!

- Spustelėkite _'Source Control'_ piktogramą, kad peržiūrėtumėte visus atliktus pakeitimus.
- Failai `Changes` aplanke rodo papildymus (žalia) ir ištrynimus (raudona).  
  ![Peržiūrėti pakeitimus](../images/working-tree.png pakeitimus spustelėdami `+` šalia failų, kad pasiruoštumėte įsipareigojimui.
- **Atšaukti** nepageidaujamus pakeitimus spustelėdami atšaukimo piktogramą.
- Įveskite aiškią įsipareigojimo žinutę, tada spustelėkite varnelę, kad įsipareigotumėte ir išsiųstumėte.

Norėdami grįžti į savo saugyklą GitHub, pasirinkite hamburgerio meniu viršuje kairėje.

![Paruošti ir įsipareigoti pakeitimus](../images/edit-vscode.dev Su plėtiniais

Plėtiniai leidžia pridėti kalbas, temas, derintuvus ir produktyvumo įrankius į VSCode.dev – palengvinant jūsų kodavimo procesą ir padarant jį smagesnį.

### Plėtinių naršymas ir valdymas

- Spustelėkite **Plėtinių piktogramą** veiklos juostoje.
- Ieškokite plėtinio _'Search Extensions in Marketplace'_ laukelyje.

  ![Plėtinių detalės](../images/extension-details:
  - **Įdiegti**: Visi plėtiniai, kuriuos pridėjote
  - **Populiarūs**: Pramonės favoritai
  - **Rekomenduojami**: Pritaikyti jūsų darbo eigai

  ![Peržiūrėti plėtinius](

  

***

### 1. **Įdiegti plėtinius**

- Įveskite plėtinio pavadinimą paieškoje, spustelėkite jį ir peržiūrėkite detales redaktoriuje.
- Paspauskite **mėlyną Įdiegti mygtuką** šoninėje juostoje _arba_ pagrindinėje kodo srityje.

  ![Įdiegti plėtinius](../images/install-extension 2. **Pritaikyti plėtinius**

- Suraskite įdiegtą plėtinį.
- Spustelėkite **Pavaros piktogramą** → pasirinkite _Plėtinio nustatymai_, kad pritaikytumėte elgesį pagal savo poreikius.

  ![Keisti plėtinio nustatymus](../images/extension-settings 3. **Valdyti plėtinius**
Galite:

- **Išjungti:** Laikinai išjungti plėtinį, paliekant jį įdiegtą
- **Pašalinti:** Visam laikui pašalinti, jei jo nebereikia

  Suraskite plėtinį, paspauskite Pavaros piktogramą ir pasirinkite ‘Išjungti’ arba ‘Pašalinti’, arba naudokite mėlynus mygtukus kodo srityje.

***

## Užduotis

Išbandykite savo įgūdžius: [Sukurkite gyvenimo aprašymo svetainę naudodami vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Tolimesnė tyrinėjimo ir savarankiško mokymosi medžiaga

- Gilinkitės su [oficialia VSCode Web dokumentacija](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Tyrinėkite pažangias darbo aplinkos funkcijas, klaviatūros nuorodas ir nustatymus.

***

**Dabar esate pasiruošę koduoti, kurti ir bendradarbiauti – iš bet kur, bet kuriame įrenginyje, naudodami VSCode.dev!**

---

**Atsakomybės atsisakymas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudoti profesionalų žmogaus vertimą. Mes neprisiimame atsakomybės už nesusipratimus ar neteisingą interpretaciją, atsiradusią dėl šio vertimo naudojimo.