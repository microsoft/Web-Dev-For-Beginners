<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-27T22:51:26+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "ro"
}
-->
# Extensia de browser Carbon Trigger: Cod complet

Folosind API-ul CO2 Signal de la tmrow pentru a urmări consumul de electricitate, creează o extensie de browser care să îți ofere un memento direct în browser despre consumul de electricitate din regiunea ta. Utilizarea acestei extensii ad hoc te va ajuta să iei decizii legate de activitățile tale bazându-te pe aceste informații.

![captură de ecran extensie](../../../../../translated_images/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.ro.png)

## Început

Va trebui să ai instalat [npm](https://npmjs.com). Descarcă o copie a acestui cod într-un folder de pe calculatorul tău.

Instalează toate pachetele necesare:

```
npm install
```

Construiește extensia folosind webpack:

```
npm run build
```

Pentru a instala în Edge, folosește meniul cu 'trei puncte' din colțul din dreapta sus al browserului pentru a găsi panoul Extensii. De acolo, selectează 'Încărcare neambalată' pentru a adăuga o extensie nouă. Deschide folderul 'dist' când ți se cere, iar extensia va fi încărcată. Pentru a o utiliza, vei avea nevoie de o cheie API pentru API-ul CO2 Signal ([obține una aici prin e-mail](https://www.co2signal.com/) - introdu adresa ta de e-mail în câmpul de pe această pagină) și de [codul pentru regiunea ta](http://api.electricitymap.org/v3/zones) corespunzător [Hărții Electricității](https://www.electricitymap.org/map) (în Boston, de exemplu, folosesc 'US-NEISO').

![instalare](../../../../../translated_images/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.ro.png)

Odată ce cheia API și regiunea sunt introduse în interfața extensiei, punctul colorat din bara extensiei browserului ar trebui să se schimbe pentru a reflecta consumul de energie din regiunea ta și să îți ofere un indicator despre activitățile cu consum mare de energie care ar fi potrivite pentru tine. Conceptul din spatele acestui sistem de "puncte" mi-a fost inspirat de [extensia Energy Lollipop](https://energylollipop.com/) pentru emisiile din California.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.