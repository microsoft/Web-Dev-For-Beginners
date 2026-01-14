<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-27T22:12:13+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "sk"
}
-->
# Vytvorenie rozšírenia pre prehliadač

Vytváranie rozšírení pre prehliadače je zábavný a zaujímavý spôsob, ako premýšľať o výkone vašich aplikácií pri vytváraní iného typu webového aktíva. Tento modul obsahuje lekcie o tom, ako fungujú prehliadače, ako nasadiť rozšírenie pre prehliadač, ako vytvoriť formulár, volať API, používať lokálne úložisko, a ako hodnotiť výkon vašej webovej stránky a zlepšiť ho.

Vytvoríte rozšírenie pre prehliadač, ktoré funguje na Edge, Chrome a Firefox. Toto rozšírenie, ktoré je ako mini webová stránka prispôsobená veľmi špecifickej úlohe, kontroluje [C02 Signal API](https://www.co2signal.com) pre spotrebu elektriny a uhlíkovú intenzitu danej oblasti a poskytuje údaje o uhlíkovej stope regiónu.

Toto rozšírenie môže byť používateľom spustené ad hoc po zadaní API kľúča a kódu regiónu do formulára, aby sa určila lokálna spotreba elektriny, čím sa ponúkajú údaje, ktoré môžu ovplyvniť rozhodnutia používateľa o elektrine. Napríklad môže byť vhodnejšie odložiť používanie sušičky na oblečenie (činnosť s vysokou uhlíkovou intenzitou) počas obdobia vysokej spotreby elektriny vo vašom regióne.

### Témy

1. [O prehliadačoch](1-about-browsers/README.md)
2. [Formuláre a lokálne úložisko](2-forms-browsers-local-storage/README.md)
3. [Pozadie úloh a výkon](3-background-tasks-and-performance/README.md)

### Kredity

![zelené rozšírenie prehliadača](../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.sk.png)

## Kredity

Myšlienku pre tento webový uhlíkový spúšťač ponúkol Asim Hussain, vedúci tímu Green Cloud Advocacy v Microsoft a autor [Green Principles](https://principles.green/). Pôvodne to bol [projekt webovej stránky](https://github.com/jlooper/green).

Štruktúra rozšírenia pre prehliadač bola ovplyvnená [Adebola Adeniranovým COVID rozšírením](https://github.com/onedebos/covtension).

Koncept systému ikon „bodiek“ bol inšpirovaný štruktúrou ikon rozšírenia prehliadača [Energy Lollipop](https://energylollipop.com/) pre emisie v Kalifornii.

Tieto lekcie boli napísané s ♥️ od [Jen Looper](https://www.twitter.com/jenlooper)

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za žiadne nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.