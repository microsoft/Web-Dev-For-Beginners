<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:44:26+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "ro"
}
-->
***

# Utilizarea unui Editor de Cod: Stăpânirea [VSCode.dev](https://vscode.dev)

**Bun venit!**  
Această lecție te va ghida de la bazele utilizării până la funcționalități avansate ale [VSCode.dev](https://vscode.dev)—editorul de cod puternic, bazat pe web. Vei învăța cum să editezi cod cu încredere, să gestionezi proiecte, să urmărești modificările, să instalezi extensii și să colaborezi ca un profesionist—totul direct din browser, fără a fi nevoie de instalare.

***

## Obiective de Învățare

La finalul acestei lecții, vei putea:

- Utiliza eficient un editor de cod pentru orice proiect, oriunde
- Urmări fără efort munca ta cu controlul versiunilor integrat
- Personaliza și îmbunătăți fluxul de lucru de dezvoltare cu ajustări ale editorului și extensii

***

## Cerințe Prealabile

Pentru a începe, **creează un cont gratuit pe [GitHub](https://github.com)**, care îți permite să gestionezi depozite de cod și să colaborezi la nivel global. Dacă nu ai încă un cont, [creează unul aici](https://github.com/).

***

## De ce să folosești un editor de cod bazat pe web?

Un **editor de cod** precum VSCode.dev este centrul tău de comandă pentru scrierea, editarea și gestionarea codului. Cu o interfață intuitivă, o mulțime de funcționalități și acces imediat prin browser, poți:

- Edita proiecte pe orice dispozitiv
- Evita complicațiile instalărilor
- Colabora și contribui instantaneu

Odată ce te familiarizezi cu VSCode.dev, vei fi pregătit să abordezi sarcini de programare de oriunde, oricând.

***

## Începerea cu VSCode.dev

Accesează **[VSCode.dev](https://vscode.dev)**—fără instalare, fără descărcări. Autentificarea cu GitHub îți oferă acces complet, inclusiv sincronizarea setărilor, extensiilor și depozitelor. Dacă ți se cere, conectează-ți contul GitHub.

După încărcare, spațiul tău de lucru va arăta astfel:

![VSCode.dev implicit](../images/default-vscode-dev are trei secțiuni principale de la stânga la dreapta:
- **Bară de activitate:** Icoane precum 🔎 (Căutare), ⚙️ (Setări), fișiere, control sursă etc.
- **Bară laterală:** Se schimbă în funcție de icoana selectată din bara de activitate (implicit *Explorer* pentru a afișa fișierele).
- **Zona de editare/cod:** Cea mai mare secțiune din dreapta—unde vei edita și vizualiza codul.

Explorează funcționalitățile făcând clic pe icoane, dar revino la _Explorer_ pentru a-ți păstra locul.

***

## Deschiderea unui Depozit GitHub

### Metoda 1: Din Editor

1. Accesează [VSCode.dev](https://vscode.dev). Fă clic pe **"Open Remote Repository."**

   ![Deschide depozit remote](../../../../8-code-editor/images/open-remote-repository folosește _Command Palette_ (Ctrl-Shift-P sau Cmd-Shift-P pe Mac).

   ![Meniu paletă](../images/palette-menu.pngopen remote repository.”
   - Selectează opțiunea.
   - Introdu URL-ul depozitului GitHub (ex.: `https://github.com/microsoft/Web-Dev-For-Beginners`) și apasă Enter.

Dacă totul merge bine, vei vedea întregul proiect încărcat și gata de editare!

***

### Metoda 2: Instantaneu prin URL

Transformă orice URL de depozit GitHub pentru a-l deschide direct în VSCode.dev înlocuind `github.com` cu `vscode.dev/github`.  
Ex.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Această funcționalitate accelerează accesul rapid la ORICE proiect.

***

## Editarea Fișierelor din Proiectul Tău

Odată ce depozitul tău este deschis, poți:

### 1. **Crea un Fișier Nou**
- În bara laterală *Explorer*, navighează la folderul dorit sau folosește rădăcina.
- Fă clic pe icoana _‘New file ...’_.
- Denumește fișierul, apasă **Enter**, iar fișierul va apărea instantaneu.

![Creează un fișier nou](../images/create-new-file 2. **Editează și Salvează Fișiere**

- Fă clic pe un fișier din *Explorer* pentru a-l deschide în zona de cod.
- Fă modificările necesare.
- VSCode.dev salvează automat modificările, dar poți apăsa Ctrl+S pentru a salva manual.

![Editează un fișier](../images/edit-a-file.png. **Urmărește & Comite Modificări cu Controlul Versiunilor**

VSCode.dev are integrat **Git** pentru controlul versiunilor!

- Fă clic pe icoana _'Source Control'_ pentru a vedea toate modificările făcute.
- Fișierele din folderul `Changes` arată adăugiri (verde) și ștergeri (roșu).  
  ![Vizualizează modificările](../images/working-tree.png modificările făcând clic pe `+` lângă fișiere pentru a le pregăti pentru commit.
- **Renunță** la modificările nedorite făcând clic pe icoana de undo.
- Introdu un mesaj clar de commit, apoi fă clic pe bifa pentru a comite și a împinge modificările.

Pentru a reveni la depozitul tău pe GitHub, selectează meniul hamburger din stânga sus.

![Stagiază & comite modificări](../images/edit-vscode.dev Cu Extensii

Extensiile îți permit să adaugi limbaje, teme, depanatori și instrumente de productivitate în VSCode.dev—făcând viața ta de programator mai ușoară și mai plăcută.

### Navigarea și Gestionarea Extensiilor

- Fă clic pe **icoana Extensii** din bara de activitate.
- Caută o extensie în caseta _'Search Extensions in Marketplace'_.

  ![Detalii extensie](../images/extension-details:
  - **Installed**: Toate extensiile pe care le-ai adăugat
  - **Popular**: Favoritele industriei
  - **Recommended**: Personalizate pentru fluxul tău de lucru

  ![Vizualizează extensiile](

  

***

### 1. **Instalează Extensii**

- Introdu numele extensiei în căutare, fă clic pe ea și consultă detaliile în editor.
- Apasă butonul **albastru Install** din bara laterală _sau_ din zona principală de cod.

  ![Instalează extensii](../images/install-extension 2. **Personalizează Extensiile**

- Găsește extensia instalată.
- Fă clic pe **icoana Gear** → selectează _Extension Settings_ pentru a ajusta comportamentele după preferințe.

  ![Modifică setările extensiei](../images/extension-settings 3. **Gestionează Extensiile**
Poți:

- **Dezactiva:** Dezactivează temporar o extensie păstrând-o instalată
- **Dezinstala:** Elimin-o permanent dacă nu mai este necesară

  Găsește extensia, apasă pe icoana Gear și selectează ‘Disable’ sau ‘Uninstall,’ sau folosește butoanele albastre din zona de cod.

***

## Temă

Testează-ți abilitățile: [Creează un site de CV folosind vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Explorare și Studiu Individual

- Aprofundează cu [Documentația oficială VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Explorează funcționalități avansate ale spațiului de lucru, scurtături de tastatură și setări.

***

**Acum ești pregătit să programezi, să creezi și să colaborezi—de oriunde, pe orice dispozitiv, folosind VSCode.dev!**

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.