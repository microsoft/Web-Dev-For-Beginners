<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:36:38+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "cs"
}
-->
***

# Používání editoru kódu: Ovládněte [VSCode.dev](https://vscode.dev)

**Vítejte!**  
Tato lekce vás provede od základů až po pokročilé používání [VSCode.dev](https://vscode.dev)—výkonného webového editoru kódu. Naučíte se sebevědomě upravovat kód, spravovat projekty, sledovat změny, instalovat rozšíření a spolupracovat jako profesionál—vše přímo z vašeho prohlížeče, bez nutnosti instalace.

***

## Cíle učení

Na konci této lekce budete schopni:

- Efektivně používat editor kódu na jakémkoli projektu, kdekoli
- Plynule sledovat svou práci pomocí integrované správy verzí
- Personalizovat a zlepšit svůj vývojový pracovní postup pomocí úprav editoru a rozšíření

***

## Předpoklady

Pro začátek si **zaregistrujte bezplatný [GitHub](https://github.com) účet**, který vám umožní spravovat repozitáře kódu a spolupracovat s lidmi po celém světě. Pokud ještě nemáte účet, [vytvořte si ho zde](https://github.com/).

***

## Proč používat webový editor kódu?

**Editor kódu**, jako je VSCode.dev, je vaše řídicí centrum pro psaní, úpravu a správu kódu. Díky intuitivnímu rozhraní, množství funkcí a okamžitému přístupu přes prohlížeč můžete:

- Upravit projekty na jakémkoli zařízení
- Vyhnout se komplikacím s instalacemi
- Okamžitě spolupracovat a přispívat

Jakmile si osvojíte VSCode.dev, budete připraveni zvládnout úkoly spojené s kódováním odkudkoli a kdykoli.

***

## Začínáme s VSCode.dev

Přejděte na **[VSCode.dev](https://vscode.dev)**—bez instalace, bez stahování. Přihlášení pomocí GitHubu odemkne plný přístup, včetně synchronizace vašich nastavení, rozšíření a repozitářů. Pokud budete vyzváni, připojte svůj GitHub účet.

Po načtení bude vaše pracovní prostředí vypadat takto:

![Výchozí VSCode.dev](../images/default-vscode-dev má tři hlavní sekce zleva doprava:
- **Panel aktivit:** Ikony jako 🔎 (Vyhledávání), ⚙️ (Nastavení), soubory, správa verzí atd.
- **Postranní panel:** Mění kontext podle vybrané ikony v panelu aktivit (výchozí je *Průzkumník* pro zobrazení souborů).
- **Editor/oblast kódu:** Největší sekce napravo—zde budete upravovat a zobrazovat kód.

Prozkoumejte funkce klikáním na ikony, ale vraťte se do _Průzkumníka_, abyste si udrželi přehled.

***

## Otevření GitHub repozitáře

### Metoda 1: Z editoru

1. Přejděte na [VSCode.dev](https://vscode.dev). Klikněte na **"Open Remote Repository."**

   ![Otevřít vzdálený repozitář](../../../../8-code-editor/images/open-remote-repository použijte _Command Palette_ (Ctrl-Shift-P nebo Cmd-Shift-P na Macu).

   ![Menu palety](../images/palette-menu.png otevřít vzdálený repozitář.”
   - Vyberte tuto možnost.
   - Vložte URL vašeho GitHub repozitáře (např. `https://github.com/microsoft/Web-Dev-For-Beginners`) a stiskněte Enter.

Pokud vše proběhne úspěšně, uvidíte celý projekt načtený a připravený k úpravám!

***

### Metoda 2: Okamžitě přes URL

Přeměňte jakoukoli URL GitHub repozitáře na přímé otevření ve VSCode.dev tím, že nahradíte `github.com` za `vscode.dev/github`.  
Např.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Tato funkce výrazně urychluje přístup k JAKÉMUKOLI projektu.

***

## Úprava souborů ve vašem projektu

Jakmile je váš repozitář otevřen, můžete:

### 1. **Vytvořit nový soubor**
- V postranním panelu *Průzkumník* přejděte do požadované složky nebo použijte kořenovou složku.
- Klikněte na ikonu _‘Nový soubor ...’_.
- Pojmenujte soubor, stiskněte **Enter** a váš soubor se okamžitě objeví.

![Vytvořit nový soubor](../images/create-new-file 2. **Upravit a uložit soubory**

- Klikněte na soubor v *Průzkumníku*, aby se otevřel v oblasti kódu.
- Proveďte potřebné změny.
- VSCode.dev automaticky ukládá vaše změny, ale můžete je manuálně uložit stisknutím Ctrl+S.

![Upravit soubor](../images/edit-a-file.png. **Sledovat a potvrzovat změny pomocí správy verzí**

VSCode.dev má integrovanou správu verzí **Git**!

- Klikněte na ikonu _'Správa verzí'_ pro zobrazení všech provedených změn.
- Soubory ve složce `Changes` ukazují přidání (zeleně) a odstranění (červeně).  
  ![Zobrazit změny](../images/working-tree.png změny kliknutím na `+` vedle souborů pro přípravu na potvrzení.
- **Zrušit** nežádoucí změny kliknutím na ikonu zpět.
- Napište jasnou zprávu o potvrzení, poté klikněte na zaškrtávací políčko pro potvrzení a odeslání.

Pro návrat do vašeho repozitáře na GitHubu vyberte hamburger menu v levém horním rohu.

![Připravit a potvrdit změny](../images/edit-vscode.dev Rozšíření

Rozšíření vám umožní přidat jazyky, témata, ladicí nástroje a nástroje pro produktivitu do VSCode.dev—usnadní a zpříjemní vám práci s kódem.

### Procházení a správa rozšíření

- Klikněte na **ikonu Rozšíření** v panelu aktivit.
- Vyhledejte rozšíření v poli _'Search Extensions in Marketplace'_.

  ![Podrobnosti o rozšíření](../images/extension-details:
  - **Nainstalované**: Všechna rozšíření, která jste přidali
  - **Populární**: Oblíbené v oboru
  - **Doporučené**: Přizpůsobené vašemu pracovnímu postupu

  ![Zobrazit rozšíření](

  

***

### 1. **Instalace rozšíření**

- Zadejte název rozšíření do vyhledávání, klikněte na něj a zobrazte podrobnosti v editoru.
- Klikněte na **modré tlačítko Instalovat** v postranním panelu _nebo_ v hlavní oblasti kódu.

  ![Instalovat rozšíření](../images/install-extension 2. **Přizpůsobení rozšíření**

- Najděte své nainstalované rozšíření.
- Klikněte na **ikonu ozubeného kola** → vyberte _Nastavení rozšíření_ pro doladění chování podle vašich potřeb.

  ![Upravit nastavení rozšíření](../images/extension-settings 3. **Správa rozšíření**
Můžete:

- **Deaktivovat:** Dočasně vypnout rozšíření, ale ponechat ho nainstalované
- **Odinstalovat:** Trvale odstranit, pokud již není potřeba

  Najděte rozšíření, klikněte na ikonu ozubeného kola a vyberte ‘Deaktivovat’ nebo ‘Odinstalovat,’ nebo použijte modrá tlačítka v oblasti kódu.

***

## Zadání

Otestujte své dovednosti: [Vytvořte webovou stránku životopisu pomocí vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Další průzkum a samostudium

- Prohlubte své znalosti s [oficiální dokumentací VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Prozkoumejte pokročilé funkce pracovního prostředí, klávesové zkratky a nastavení.

***

**Nyní jste připraveni kódovat, tvořit a spolupracovat—odkudkoli, na jakémkoli zařízení, pomocí VSCode.dev!**

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.