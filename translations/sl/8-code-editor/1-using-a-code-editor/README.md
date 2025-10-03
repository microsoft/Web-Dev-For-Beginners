<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:58:56+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "sl"
}
-->
***

# Uporaba urejevalnika kode: Obvladovanje [VSCode.dev](https://vscode.dev)

**Dobrodošli!**  
Ta lekcija vas popelje od osnov do napredne uporabe [VSCode.dev](https://vscode.dev)—zmogljivega, spletnega urejevalnika kode. Naučili se boste samozavestno urejati kodo, upravljati projekte, slediti spremembam, nameščati razširitve in sodelovati kot profesionalec—vse iz vašega brskalnika, brez potrebe po namestitvi.

***

## Cilji učenja

Na koncu te lekcije boste sposobni:

- Učinkovito uporabljati urejevalnik kode za kateri koli projekt, kjerkoli
- Brez težav slediti svojemu delu z vgrajenim nadzorom različic
- Prilagoditi in izboljšati svoj razvojni potek dela z nastavitvami urejevalnika in razširitvami

***

## Predpogoji

Za začetek si **ustvarite brezplačen [GitHub](https://github.com) račun**, ki vam omogoča upravljanje repozitorijev kode in sodelovanje po vsem svetu. Če računa še nimate, ga [ustvarite tukaj](https://github.com/).

***

## Zakaj uporabljati spletni urejevalnik kode?

**Urejevalnik kode**, kot je VSCode.dev, je vaše poveljniško središče za pisanje, urejanje in upravljanje kode. Z intuitivnim vmesnikom, številnimi funkcijami in takojšnjim dostopom prek brskalnika lahko:

- Urejate projekte na katerikoli napravi
- Izognete se težavam z namestitvami
- Sodelujete in prispevate takoj

Ko se boste udobno počutili z VSCode.dev, boste pripravljeni na reševanje nalog kodiranja od kjerkoli, kadarkoli.

***

## Začetek z VSCode.dev

Odprite **[VSCode.dev](https://vscode.dev)**—brez namestitve, brez prenosov. Prijava z GitHub računom omogoča poln dostop, vključno s sinhronizacijo vaših nastavitev, razširitev in repozitorijev. Če vas sistem pozove, povežite svoj GitHub račun.

Ko se naloži, bo vaše delovno okolje videti takole:

![Privzeti VSCode.dev](../images/default-vscode-dev ima tri glavne razdelke od leve proti desni:
- **Orodna vrstica:** Ikone, kot so 🔎 (Iskanje), ⚙️ (Nastavitve), datoteke, nadzor izvorne kode itd.
- **Stranska vrstica:** Spreminja kontekst glede na izbrano ikono v orodni vrstici (privzeto *Raziskovalec*, ki prikazuje datoteke).
- **Urejevalnik/območje kode:** Največji razdelek na desni—kjer dejansko urejate in si ogledujete kodo.

Kliknite ikone, da raziščete funkcije, vendar se vrnite na _Raziskovalec_, da ohranite svoj položaj.

***

## Odpiranje GitHub repozitorija

### Metoda 1: Iz urejevalnika

1. Pojdite na [VSCode.dev](https://vscode.dev). Kliknite **"Odpri oddaljeni repozitorij."**

   ![Odpri oddaljeni repozitorij](../../../../8-code-editor/images/open-remote-repository uporabite _Ukazno paleto_ (Ctrl-Shift-P ali Cmd-Shift-P na Macu).

   ![Meni palete](../images/palette-menu.pngodpri oddaljeni repozitorij.”
   - Izberite možnost.
   - Prilepite URL svojega GitHub repozitorija (npr. `https://github.com/microsoft/Web-Dev-For-Beginners`) in pritisnite Enter.

Če je uspešno, boste videli celoten projekt, pripravljen za urejanje!

***

### Metoda 2: Takoj prek URL-ja

Spremenite kateri koli URL GitHub repozitorija, da se odpre neposredno v VSCode.dev, tako da zamenjate `github.com` z `vscode.dev/github`.  
Npr.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Ta funkcija omogoča hiter dostop do KATERIKOLI projekta.

***

## Urejanje datotek v vašem projektu

Ko je vaš repozitorij odprt, lahko:

### 1. **Ustvarite novo datoteko**
- V stranski vrstici *Raziskovalec* pojdite do želene mape ali uporabite koren.
- Kliknite ikono _‘Nova datoteka ...’_.
- Poimenujte datoteko, pritisnite **Enter**, in datoteka se takoj prikaže.

![Ustvarite novo datoteko](../images/create-new-file 2. **Urejajte in shranjujte datoteke**

- Kliknite na datoteko v *Raziskovalcu*, da jo odprete v območju kode.
- Naredite potrebne spremembe.
- VSCode.dev samodejno shrani vaše spremembe, vendar lahko pritisnete Ctrl+S za ročno shranjevanje.

![Urejanje datoteke](../images/edit-a-file.png. **Sledite in potrjujte spremembe z nadzorom različic**

VSCode.dev ima integriran **Git** nadzor različic!

- Kliknite ikono _'Nadzor izvorne kode'_, da si ogledate vse narejene spremembe.
- Datoteke v mapi `Spremembe` prikazujejo dodatke (zeleno) in brisanja (rdeče).  
  ![Ogled sprememb](../images/working-tree.png spremembe s klikom na `+` poleg datotek, da jih pripravite za potrditev.
- **Zavrzite** neželene spremembe s klikom na ikono za razveljavitev.
- Vnesite jasno sporočilo o potrditvi, nato kliknite kljukico za potrditev in potiskanje.

Za vrnitev v vaš repozitorij na GitHubu izberite meni hamburger na vrhu levo.

![Priprava in potrditev sprememb](../images/edit-vscode.dev z razširitvami

Razširitve vam omogočajo dodajanje jezikov, tem, razhroščevalnikov in orodij za produktivnost v VSCode.dev—kar olajša in popestri vaše kodiranje.

### Brskanje in upravljanje razširitev

- Kliknite ikono **Razširitve** v orodni vrstici.
- Poiščite razširitev v polju _'Iskanje razširitev na tržnici'_.

  ![Podrobnosti razširitev](../images/extension-details:
  - **Nameščene**: Vse razširitve, ki ste jih dodali
  - **Priljubljene**: Industrijski favoriti
  - **Priporočene**: Prilagojene vašemu poteku dela

  ![Ogled razširitev](

  

***

### 1. **Namestite razširitve**

- Vnesite ime razširitve v iskalnik, kliknite nanjo in si oglejte podrobnosti v urejevalniku.
- Kliknite **modri gumb za namestitev** v stranski vrstici _ali_ v glavnem območju kode.

  ![Namestitev razširitev](../images/install-extension 2. **Prilagodite razširitve**

- Poiščite nameščeno razširitev.
- Kliknite **Ikono zobnika** → izberite _Nastavitve razširitve_, da prilagodite vedenje po vaših željah.

  ![Sprememba nastavitev razširitev](../images/extension-settings 3. **Upravljanje razširitev**
Lahko:

- **Onemogočite:** Začasno izklopite razširitev, medtem ko jo ohranite nameščeno
- **Odstranite:** Trajno odstranite, če je ne potrebujete več

  Poiščite razširitev, kliknite ikono zobnika in izberite ‘Onemogoči’ ali ‘Odstrani’, ali uporabite modre gumbe v območju kode.

***

## Naloga

Preizkusite svoje veščine: [Ustvarite spletno stran življenjepisa z uporabo vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Nadaljnje raziskovanje in samostojno učenje

- Poglobite se z [uradno dokumentacijo VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Raziščite napredne funkcije delovnega okolja, bližnjice na tipkovnici in nastavitve.

***

**Zdaj ste pripravljeni na kodiranje, ustvarjanje in sodelovanje—od kjerkoli, na katerikoli napravi, z uporabo VSCode.dev!**

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve AI za prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.