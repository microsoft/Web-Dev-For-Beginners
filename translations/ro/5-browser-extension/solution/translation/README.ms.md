<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-28T07:49:22+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "ro"
}
-->
# Extensia de Browser Carbon Trigger: Cod Complet

Folosind API-ul CO2 Signal de la tmrow pentru a monitoriza consumul de electricitate, construiește o extensie de browser care să te alerteze în legătură cu nivelul de utilizare a energiei electrice din regiunea ta. Utilizarea acestei extensii te va ajuta să iei decizii mai informate cu privire la activitățile tale, bazându-te pe aceste informații.

![captură de ecran a extensiei de browser](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.ro.png)

## Începe de Aici

Trebuie să ai instalat [npm](https://npmjs.com). Descarcă o copie a acestui cod într-un folder de pe computerul tău.

Instalează toate pachetele necesare:

```
npm install
```

Construiește extensia folosind webpack:

```
npm run build
```

Pentru a o instala în Edge, folosește meniul cu „trei puncte” din colțul din dreapta sus al browserului pentru a accesa panoul Extensii. De acolo, selectează „Load Unpacked” pentru a încărca o extensie nouă. Deschide folderul „dist” când ți se cere, iar extensia va fi încărcată. Pentru a o utiliza, vei avea nevoie de o cheie API pentru API-ul CO2 Signal ([obține una aici prin e-mail](https://www.co2signal.com/) - introdu adresa ta de e-mail în câmpul de pe această pagină) și de [codul regiunii tale](http://api.electricitymap.org/v3/zones), care corespunde cu [Electricity Map](https://www.electricitymap.org/map) (de exemplu, în Boston, eu folosesc „US-NEISO”).

![descărcare în curs](../../../../../translated_images/install-on-edge.78634f02842c4828.ro.png)

După ce introduci cheia API și regiunea în interfața extensiei, punctul colorat din bara extensiei browserului se va schimba pentru a reflecta consumul de energie din regiunea ta și îți va oferi sugestii despre activitățile potrivite pe care le poți desfășura. Conceptul din spatele acestui sistem de „puncte” mi-a fost inspirat de [extensia de browser Energy Lollipop](https://energylollipop.com/) pentru emisiile din California.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.