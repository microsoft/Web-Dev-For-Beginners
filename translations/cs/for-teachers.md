<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-03T10:34:49+00:00",
  "source_file": "for-teachers.md",
  "language_code": "cs"
}
-->
### Pro pedagogy

Tento učební plán můžete využít ve své třídě. Funguje bez problémů s GitHub Classroom a předními platformami LMS a lze jej také použít jako samostatné úložiště se studenty.

### Použití s GitHub Classroom

Pro správu lekcí a úkolů podle skupin vytvořte jedno úložiště na každou lekci, aby GitHub Classroom mohl připojit každý úkol samostatně.

- Vytvořte fork tohoto úložiště do své organizace.
- Vytvořte samostatné úložiště pro každou lekci extrahováním složky lekce do vlastního úložiště.
  - Možnost A: Vytvořte prázdná úložiště (jedno na lekci) a zkopírujte obsah složky lekce do každého z nich.
  - Možnost B: Použijte přístup zachovávající historii Git (např. rozdělení složky do nového úložiště), pokud potřebujete zachovat původ.
- V GitHub Classroom vytvořte úkol pro každou lekci a odkažte na odpovídající úložiště lekce.
- Doporučené nastavení:
  - Viditelnost úložiště: soukromé pro práci studentů.
  - Použijte výchozí kód ze základní větve úložiště lekce.
  - Přidejte šablony pro problémy a pull requesty pro kvízy a odevzdání.
  - Volitelně nakonfigurujte automatické hodnocení a testy, pokud vaše lekce obsahují tyto prvky.
- Uživatelské konvence, které pomáhají:
  - Názvy úložišť jako lesson-01-intro, lesson-02-html, atd.
  - Štítky: quiz, assignment, needs-review, late, resubmission.
  - Tagy/verze podle skupin (např. v2025-term1).

Tip: Vyhněte se ukládání úložišť do synchronizovaných složek (např. OneDrive/Google Drive), abyste předešli konfliktům Git na Windows.

### Použití s Moodle, Canvas nebo Blackboard

Tento učební plán obsahuje importovatelné balíčky pro běžné pracovní postupy LMS.

- Moodle: Použijte soubor pro nahrání do Moodle [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz) k načtení celého kurzu.
- Common Cartridge: Použijte soubor Common Cartridge [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) pro širší kompatibilitu LMS.
- Poznámky:
  - Moodle Cloud má omezenou podporu Common Cartridge. Preferujte výše uvedený soubor pro Moodle, který lze také nahrát do Canvas.
  - Po importu zkontrolujte moduly, termíny odevzdání a nastavení kvízů, aby odpovídaly vašemu rozvrhu.

![Moodle](../../translated_images/cs/moodle.94eb93d714a50cb2.png)
> Učební plán v prostředí Moodle

![Canvas](../../translated_images/cs/canvas.fbd605ff8e5b8aff.png)
> Učební plán v prostředí Canvas

### Použití úložiště přímo (bez Classroom)

Pokud preferujete nepoužívat GitHub Classroom, můžete kurz spustit přímo z tohoto úložiště.

- Synchronní/online formáty (Zoom/Teams):
  - Pořádejte krátké úvodní aktivity vedené mentorem; použijte breakout rooms pro kvízy.
  - Oznámte časové okno pro kvízy; studenti odevzdávají odpovědi jako GitHub Issues.
  - Pro spolupracující úkoly studenti pracují ve veřejných úložištích lekcí a otevírají pull requesty.
- Soukromé/asynchronní formáty:
  - Studenti si forkují každou lekci do svých **soukromých** úložišť a přidají vás jako spolupracovníka.
  - Odevzdávají prostřednictvím Issues (kvízy) a Pull Requests (úkoly) na vašem úložišti třídy nebo jejich soukromých forcích.

### Nejlepší postupy

- Poskytněte orientační lekci o základech Git/GitHub, Issues a PRs.
- Používejte kontrolní seznamy v Issues pro vícekrokové kvízy/úkoly.
- Přidejte CONTRIBUTING.md a CODE_OF_CONDUCT.md pro nastavení pravidel třídy.
- Přidejte poznámky o přístupnosti (alt text, titulky) a nabídněte tisknutelné PDF.
- Verziujte svůj obsah podle termínu a zmrazte úložiště lekcí po publikování.

### Zpětná vazba a podpora

Chceme, aby tento učební plán fungoval pro vás a vaše studenty. Prosím, otevřete nový Issue v tomto úložišti pro chyby, požadavky nebo vylepšení, nebo zahajte diskusi v Teacher Corner.

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). I když se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace doporučujeme profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.