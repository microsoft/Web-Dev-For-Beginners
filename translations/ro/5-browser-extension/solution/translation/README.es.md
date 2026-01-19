<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-28T07:48:52+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "ro"
}
-->
# Extensia de browser Carbon Trigger: Cod complet

Folosind API-ul CO2 Signal de la tmrow pentru a urmări consumul de electricitate, creați o extensie de browser care să vă ofere un memento direct în browser despre consumul de electricitate din regiunea dumneavoastră. Utilizarea acestei extensii ad hoc vă va ajuta să luați decizii cu privire la activitățile dumneavoastră bazându-vă pe aceste informații.

![extension screenshot](../../../../../translated_images/ro/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Început

Trebuie să aveți [npm](https://npmjs.com) instalat. Descărcați o copie a acestui cod într-un folder de pe computerul dumneavoastră.

Instalați toate pachetele necesare:

```
npm install
```

Construiți extensia folosind webpack:

```
npm run build
```

Pentru instalare în Edge, utilizați meniul cu 'trei puncte' din colțul din dreapta sus al browserului pentru a găsi panoul Extensii. De acolo, selectați 'Încărcare neambalată' pentru a adăuga o extensie nouă. Deschideți folderul 'dist' când vi se solicită și extensia va fi încărcată. Pentru a o utiliza, veți avea nevoie de o cheie API pentru API-ul CO2 Signal ([obțineți una aici prin e-mail](https://www.co2signal.com/) - introduceți adresa de e-mail în câmpul de pe această pagină) și de [codul pentru regiunea dumneavoastră](http://api.electricitymap.org/v3/zones) corespunzător [Hărții de electricitate](https://www.electricitymap.org/map) (în Boston, de exemplu, folosesc 'US-NEISO').

![installing](../../../../../translated_images/ro/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Odată ce introduceți cheia API și regiunea în interfața extensiei, punctul colorat din bara extensiei browserului ar trebui să se schimbe pentru a reflecta consumul de energie din regiunea dumneavoastră și să vă ofere un indicator despre activitățile cu consum ridicat de energie care ar fi potrivite pentru dumneavoastră. Conceptul din spatele acestui sistem de "puncte" mi-a fost inspirat de [extensia Energy Lollipop](https://energylollipop.com/) pentru emisiile din California.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.