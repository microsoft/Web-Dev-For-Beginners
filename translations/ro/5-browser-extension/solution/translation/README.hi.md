<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "dd58ae1b7707034f055718c1b68bc8de",
  "translation_date": "2025-08-27T22:51:57+00:00",
  "source_file": "5-browser-extension/solution/translation/README.hi.md",
  "language_code": "ro"
}
-->
# Extensia de browser Carbon Trigger: Cod finalizat

Folosind API-ul CO2 Signal de la tmrow pentru a urmări consumul de energie electrică, această extensie de browser vă oferă un memento despre cât de intens este consumul de energie electrică în zona dumneavoastră. Utilizarea acestei extensii vă poate ajuta să luați decizii informate cu privire la activitățile dumneavoastră, pe baza acestor informații.

![Captură de ecran a extensiei](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.ro.png)

## Începeți

Trebuie să aveți instalat [npm](https://npmjs.com). Descărcați o copie a acestui cod într-un folder de pe computerul dumneavoastră.

Instalați toate pachetele necesare:

```
npm install
```

Construiți extensia folosind webpack:

```
npm run build
```

Pentru a instala pe Edge, utilizați meniul „trei puncte” din colțul din dreapta sus al browserului pentru a găsi panoul de extensii. De acolo, selectați „Load unpacked” pentru a încărca o extensie nouă. La prompt, deschideți folderul „dist” și extensia va fi încărcată. Pentru a o utiliza, veți avea nevoie de o cheie API pentru CO2 Signal ([obțineți-o prin e-mail de aici](https://www.co2snal.com/) - introduceți adresa de e-mail în caseta de pe această pagină) și de [codul zonei dumneavoastră](http://api.electricitymap.org/v3/zones) de pe [Electricity Map](https://www.electricitymap.org/map) (de exemplu, pentru Boston, folosesc 'US-NEISO').

![instalare](../../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.ro.png)

Odată ce cheia API și codul zonei sunt introduse în interfața extensiei, punctul colorat din bara extensiei browserului ar trebui să reflecte consumul de energie din zona dumneavoastră și să vă ofere un indicator despre ce activități consumatoare de energie sunt potrivite pentru moment. Conceptul din spatele acestui sistem de „puncte” mi-a fost inspirat de [extensia Energy Lollipop](https://energylollipop.com/) pentru emisiile din California.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.