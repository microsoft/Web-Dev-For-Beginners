<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:40:18+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "sk"
}
-->
***

# Používanie editora kódu: Ovládnite [VSCode.dev](https://vscode.dev)

**Vitajte!**  
Táto lekcia vás prevedie od základov až po pokročilé používanie [VSCode.dev](https://vscode.dev)—výkonného webového editora kódu. Naučíte sa sebavedomo upravovať kód, spravovať projekty, sledovať zmeny, inštalovať rozšírenia a spolupracovať ako profesionál—všetko priamo z vášho prehliadača, bez nutnosti inštalácie.

***

## Ciele učenia

Na konci tejto lekcie budete schopní:

- Efektívne používať editor kódu na akomkoľvek projekte, kdekoľvek
- Plynule sledovať svoju prácu pomocou zabudovanej verziovej kontroly
- Personalizovať a zlepšiť svoj vývojový pracovný postup pomocou úprav editora a rozšírení

***

## Predpoklady

Na začiatok si **vytvorte bezplatný účet na [GitHub](https://github.com)**, ktorý vám umožní spravovať repozitáre kódu a spolupracovať na celom svete. Ak ešte nemáte účet, [vytvorte si ho tu](https://github.com/).

***

## Prečo používať webový editor kódu?

**Editor kódu**, ako je VSCode.dev, je vaše riadiace centrum na písanie, úpravu a správu kódu. S intuitívnym rozhraním, množstvom funkcií a okamžitým prístupom cez prehliadač môžete:

- Upraviť projekty na akomkoľvek zariadení
- Vyhnúť sa komplikáciám s inštaláciou
- Spolupracovať a prispievať okamžite

Keď sa zoznámite s VSCode.dev, budete pripravení zvládnuť úlohy programovania odkiaľkoľvek a kedykoľvek.

***

## Začíname s VSCode.dev

Prejdite na **[VSCode.dev](https://vscode.dev)**—bez inštalácie, bez sťahovania. Prihlásenie cez GitHub odomkne plný prístup vrátane synchronizácie vašich nastavení, rozšírení a repozitárov. Ak budete vyzvaní, pripojte svoj GitHub účet.

Po načítaní bude vaše pracovné prostredie vyzerať takto:

![Predvolený VSCode.dev](../images/default-vscode-dev má tri hlavné sekcie zľava doprava:
- **Panel aktivít:** Ikony ako 🔎 (Vyhľadávanie), ⚙️ (Nastavenia), súbory, verzionovanie zdrojov atď.
- **Bočný panel:** Mení kontext na základe vybranej ikony v paneli aktivít (predvolene *Prieskumník* na zobrazenie súborov).
- **Oblasť editora/kódu:** Najväčšia sekcia vpravo—tu budete upravovať a prezerať kód.

Kliknite na ikony, aby ste preskúmali funkcie, ale vráťte sa do _Prieskumníka_, aby ste si udržali prehľad.

***

## Otvorenie GitHub repozitára

### Metóda 1: Z editora

1. Prejdite na [VSCode.dev](https://vscode.dev). Kliknite na **"Open Remote Repository."**

   ![Otvorenie vzdialeného repozitára](../../../../8-code-editor/images/open-remote-repository použite _Command Palette_ (Ctrl-Shift-P alebo Cmd-Shift-P na Macu).

   ![Menu palety](../images/palette-menu.png otvorenie vzdialeného repozitára.”
   - Vyberte možnosť.
   - Vložte URL vášho GitHub repozitára (napr. `https://github.com/microsoft/Web-Dev-For-Beginners`) a stlačte Enter.

Ak je to úspešné, uvidíte celý projekt načítaný a pripravený na úpravu!

***

### Metóda 2: Okamžite cez URL

Transformujte akúkoľvek URL GitHub repozitára na priamy otvorenie vo VSCode.dev nahradením `github.com` za `vscode.dev/github`.  
Napr.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Táto funkcia výrazne urýchľuje prístup k AKÉMUKOĽVEK projektu.

***

## Úprava súborov vo vašom projekte

Keď je váš repozitár otvorený, môžete:

### 1. **Vytvoriť nový súbor**
- V bočnom paneli *Prieskumníka* prejdite do požadovaného priečinka alebo použite koreňový adresár.
- Kliknite na ikonu _‘Nový súbor ...’_.
- Pomenujte súbor, stlačte **Enter** a váš súbor sa okamžite zobrazí.

![Vytvorenie nového súboru](../images/create-new-file 2. **Upraviť a uložiť súbory**

- Kliknite na súbor v *Prieskumníkovi*, aby ste ho otvorili v oblasti kódu.
- Upravte ho podľa potreby.
- VSCode.dev automaticky ukladá vaše zmeny, ale môžete stlačiť Ctrl+S na manuálne uloženie.

![Úprava súboru](../images/edit-a-file.png. **Sledovanie a potvrdenie zmien pomocou verziovej kontroly**

VSCode.dev má integrovanú **Git** verziovú kontrolu!

- Kliknite na ikonu _'Source Control'_ na zobrazenie všetkých vykonaných zmien.
- Súbory v priečinku `Changes` zobrazujú pridané (zelené) a odstránené (červené) časti.  
  ![Zobrazenie zmien](../images/working-tree.png zmeny kliknutím na `+` vedľa súborov na prípravu na potvrdenie.
- **Zrušiť** nechcené zmeny kliknutím na ikonu spätného kroku.
- Napíšte jasnú správu o potvrdení, potom kliknite na zaškrtávacie políčko na potvrdenie a odoslanie.

Ak sa chcete vrátiť do svojho repozitára na GitHub, vyberte hamburger menu v ľavom hornom rohu.

![Príprava a potvrdenie zmien](../images/edit-vscode.dev Rozšírenia

Rozšírenia vám umožňujú pridávať jazyky, témy, ladiace nástroje a nástroje na zvýšenie produktivity do VSCode.dev—zjednodušujú váš život pri programovaní a robia ho zábavnejším.

### Prehliadanie a správa rozšírení

- Kliknite na **ikonu Rozšírenia** v paneli aktivít.
- Vyhľadajte rozšírenie v poli _'Search Extensions in Marketplace'_.

  ![Detaily rozšírenia](../images/extension-details:
  - **Nainštalované**: Všetky rozšírenia, ktoré ste pridali
  - **Populárne**: Obľúbené v priemysle
  - **Odporúčané**: Prispôsobené vášmu pracovnému postupu

  ![Zobrazenie rozšírení](

  

***

### 1. **Inštalácia rozšírení**

- Zadajte názov rozšírenia do vyhľadávania, kliknite naň a prezrite si detaily v editore.
- Kliknite na **modré tlačidlo Inštalovať** v bočnom paneli _alebo_ v hlavnej oblasti kódu.

  ![Inštalácia rozšírení](../images/install-extension 2. **Prispôsobenie rozšírení**

- Nájdite svoje nainštalované rozšírenie.
- Kliknite na **ikonu ozubeného kolieska** → vyberte _Nastavenia rozšírenia_, aby ste upravili správanie podľa svojich predstáv.

  ![Úprava nastavení rozšírenia](../images/extension-settings 3. **Správa rozšírení**
Môžete:

- **Deaktivovať:** Dočasne vypnúť rozšírenie, pričom ho ponecháte nainštalované
- **Odstrániť:** Trvalo ho odstrániť, ak už nie je potrebné

  Nájdite rozšírenie, kliknite na ikonu ozubeného kolieska a vyberte ‘Deaktivovať’ alebo ‘Odstrániť,’ alebo použite modré tlačidlá v oblasti kódu.

***

## Zadanie

Otestujte svoje zručnosti: [Vytvorte webovú stránku životopisu pomocou vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Ďalšie skúmanie a samostatné štúdium

- Ponorte sa hlbšie do [oficiálnej dokumentácie VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Preskúmajte pokročilé funkcie pracovného prostredia, klávesové skratky a nastavenia.

***

**Teraz ste pripravení programovať, tvoriť a spolupracovať—odkiaľkoľvek, na akomkoľvek zariadení, pomocou VSCode.dev!**

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.