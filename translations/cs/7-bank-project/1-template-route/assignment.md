<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "df0dcecddcd28ea8cbf6ede0ad57d673",
  "translation_date": "2025-10-24T21:05:33+00:00",
  "source_file": "7-bank-project/1-template-route/assignment.md",
  "language_code": "cs"
}
-->
# Vylepšení směrování

## Pokyny

Nyní, když jste vytvořili základní systém směrování, je čas jej rozšířit o profesionální funkce, které zlepšují uživatelský zážitek a poskytují lepší nástroje pro vývojáře. Reálné aplikace potřebují více než jen přepínání šablon – vyžadují dynamické názvy stránek, lifecycle hooks a rozšiřitelné architektury.

V tomto úkolu rozšíříte svou implementaci směrování o dvě základní funkce, které se běžně vyskytují ve webových aplikacích používaných v praxi. Tyto vylepšení učiní vaši bankovní aplikaci profesionálnější a poskytnou základ pro budoucí funkce.

Deklarace tras aktuálně obsahuje pouze ID šablony, kterou je třeba použít. Ale při zobrazování nové stránky je někdy potřeba něco víc. Zlepšeme naši implementaci směrování o dvě další funkce:

### Funkce 1: Dynamické názvy stránek
**Cíl:** Přiřaďte názvy každé šabloně a aktualizujte název okna pomocí tohoto nového názvu při změně šablony.

**Proč je to důležité:**
- **Zlepšuje** uživatelský zážitek díky popisným názvům záložek v prohlížeči
- **Zvyšuje** přístupnost pro čtečky obrazovky a asistivní technologie  
- **Poskytuje** lepší kontext pro záložky a historii prohlížeče
- **Dodržuje** profesionální postupy webového vývoje

**Postup implementace:**
- **Rozšiřte** objekt tras o informace o názvu pro každou trasu
- **Upravte** funkci `updateRoute()`, aby dynamicky aktualizovala `document.title`
- **Otestujte**, zda se názvy správně mění při navigaci mezi obrazovkami

### Funkce 2: Lifecycle hooks pro trasy  
**Cíl:** Přidejte možnost spustit nějaký kód po změně šablony. Chceme, aby se v konzoli vývojáře pokaždé, když se zobrazí stránka dashboardu, zobrazilo `'Dashboard is shown'`.

**Proč je to důležité:**
- **Umožňuje** provádění vlastního logického kódu při načítání konkrétních tras
- **Poskytuje** hooky pro analytiku, logování nebo inicializační kód
- **Vytváří** základ pro složitější chování tras
- **Ukazuje** použití observer patternu ve webovém vývoji

**Postup implementace:**
- **Přidejte** volitelnou vlastnost callback funkce do konfigurace tras
- **Spusťte** callback funkci (pokud je přítomna) po dokončení vykreslení šablony
- **Zajistěte**, aby funkce fungovala pro jakoukoli trasu s definovaným callbackem
- **Otestujte**, zda se zpráva v konzoli objeví při návštěvě dashboardu

## Hodnocení

| Kritéria | Vynikající                                                                                                                          | Dostatečné                                                                                                                                                                                  | Potřebuje zlepšení                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Obě funkce jsou implementovány a fungují. Název a přidání kódu fungují také pro novou trasu přidanou do deklarace `routes`.         | Obě funkce fungují, ale chování je pevně zakódované a nelze jej konfigurovat prostřednictvím deklarace `routes`. Přidání třetí trasy s názvem a přidáním kódu nefunguje nebo funguje částečně. | Jedna z funkcí chybí nebo nefunguje správně.            |

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlad [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho rodném jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Neodpovídáme za žádná nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.