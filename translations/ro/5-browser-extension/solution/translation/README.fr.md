<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-28T07:49:46+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "ro"
}
-->
# Extensia de browser Carbon Trigger: Cod finalizat

Folosind API-ul CO2 Signal de la tmrow pentru a monitoriza consumul de electricitate, creați o extensie de browser care să vă ofere un memento direct în browser despre consumul de electricitate din regiunea dumneavoastră. Utilizarea acestei extensii ad-hoc vă va ajuta să luați decizii informate cu privire la activitățile dumneavoastră pe baza acestor informații.

![captură de extensie](../../../../../translated_images/ro/extension-screenshot.0e7f5bfa110e92e3.png)

## Începeți

Va trebui să aveți [npm](https://npmjs.com) instalat. Descărcați o copie a acestui cod într-un folder de pe computerul dumneavoastră.

Instalați toate pachetele necesare:

```
npm install
```

Construiți extensia folosind webpack

```
npm run build
```

Pentru a instala pe Edge, utilizați meniul „trei puncte” din colțul din dreapta sus al browserului pentru a găsi panoul Extensii. De acolo, selectați „Încărcați extensia dezarhivată” pentru a adăuga o nouă extensie. La solicitare, deschideți folderul „dist” și extensia va fi încărcată. Pentru a o utiliza, veți avea nevoie de o cheie API pentru API-ul CO2 Signal ([obțineți una aici prin e-mail](https://www.co2signal.com/) - introduceți adresa dumneavoastră de e-mail în câmpul de pe această pagină) și de [codul pentru regiunea dumneavoastră](http://api.electricitymap.org/v3/zones) corespunzător [Hărții electricității](https://www.electricitymap.org/map) (de exemplu, în Boston, folosesc „US-NEISO”).

![instalare](../../../../../translated_images/ro/install-on-edge.78634f02842c4828.png)

Odată ce cheia API și regiunea sunt introduse în interfața extensiei, punctul colorat din bara de extensii a browserului ar trebui să se schimbe pentru a reflecta consumul de energie din regiunea dumneavoastră și să vă ofere un indicator despre activitățile consumatoare de energie pe care ar fi potrivit să le desfășurați. Conceptul din spatele acestui sistem de „puncte” mi-a fost inspirat de [extensia Energy Lollipop](https://energylollipop.com/) pentru emisiile din California.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.