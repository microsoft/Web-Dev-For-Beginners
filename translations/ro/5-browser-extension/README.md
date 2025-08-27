<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-27T22:40:56+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "ro"
}
-->
# Construirea unei extensii de browser

Construirea extensiilor de browser este o modalitate distractivă și interesantă de a analiza performanța aplicațiilor tale în timp ce creezi un alt tip de resursă web. Acest modul include lecții despre cum funcționează browserele și cum să implementezi o extensie de browser, cum să construiești un formular, să apelezi un API, să folosești stocarea locală și cum să evaluezi performanța site-ului tău web și să o îmbunătățești.

Vei construi o extensie de browser care funcționează pe Edge, Chrome și Firefox. Această extensie, care este ca un mini site web adaptat pentru o sarcină foarte specifică, verifică [C02 Signal API](https://www.co2signal.com) pentru utilizarea energiei electrice și intensitatea carbonului într-o anumită regiune și oferă o evaluare a amprentei de carbon a regiunii respective.

Extensia poate fi utilizată ad hoc de către un utilizator, odată ce o cheie API și un cod de regiune sunt introduse într-un formular, pentru a determina utilizarea locală a energiei electrice și, astfel, pentru a oferi date care pot influența deciziile utilizatorului legate de consumul de energie. De exemplu, poate fi preferabil să amâni utilizarea unui uscător de haine (o activitate intensă din punct de vedere al emisiilor de carbon) în timpul unei perioade de consum ridicat de energie electrică în regiunea ta.

### Subiecte

1. [Despre browser](1-about-browsers/README.md)
2. [Formulare și stocare locală](2-forms-browsers-local-storage/README.md)
3. [Sarcini de fundal și performanță](3-background-tasks-and-performance/README.md)

### Credite

![o extensie de browser verde](../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.ro.png)

## Credite

Ideea pentru acest declanșator de carbon web a fost oferită de Asim Hussain, lider la Microsoft al echipei Green Cloud Advocacy și autor al [Green Principles](https://principles.green/). Inițial, a fost un [proiect de site web](https://github.com/jlooper/green).

Structura extensiei de browser a fost influențată de [extensia COVID a lui Adebola Adeniran](https://github.com/onedebos/covtension).

Conceptul din spatele sistemului de pictograme „dot” a fost sugerat de structura pictogramelor din extensia de browser [Energy Lollipop](https://energylollipop.com/) pentru emisiile din California.

Aceste lecții au fost scrise cu ♥️ de [Jen Looper](https://www.twitter.com/jenlooper)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.