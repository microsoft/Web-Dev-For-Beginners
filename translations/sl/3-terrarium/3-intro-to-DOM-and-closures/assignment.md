<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "947ca5ce7c94aee9c7de7034e762bc17",
  "translation_date": "2025-10-25T00:32:46+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/assignment.md",
  "language_code": "sl"
}
-->
# Naloga: Raziskovanje DOM elementov

## Pregled

Zdaj, ko ste izkusili moč manipulacije DOM, je čas, da raziščete širši svet DOM vmesnikov. Ta naloga bo poglobila vaše razumevanje, kako različne spletne tehnologije komunicirajo z DOM, ne le pri premikanju elementov.

## Cilji učenja

Z dokončanjem te naloge boste:
- **Raziskali** in podrobno razumeli določen DOM vmesnik
- **Analizirali** resnične primere uporabe manipulacije DOM
- **Povezali** teoretične koncepte s praktičnimi aplikacijami
- **Razvili** veščine tehnične dokumentacije in analize

## Navodila

### Korak 1: Izberite svoj DOM vmesnik

Obiščite MDN-jev obsežen [seznam DOM vmesnikov](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) in izberite vmesnik, ki vas zanima. Za raznolikost razmislite o izbiri iz teh kategorij:

**Možnosti za začetnike:**
- `Element.classList` - Dinamično upravljanje CSS razredov
- `Document.querySelector()` - Napredno izbiranje elementov
- `Element.addEventListener()` - Upravljanje dogodkov, ki presega dogodke kazalca
- `Window.localStorage` - Shranjevanje podatkov na strani odjemalca

**Izzivi za srednji nivo:**
- `Intersection Observer API` - Zaznavanje vidnosti elementov
- `MutationObserver` - Spremljanje sprememb v DOM
- `Drag and Drop API` - Alternativa našemu pristopu na osnovi kazalca
- `Geolocation API` - Dostop do lokacije uporabnika

**Napredne raziskave:**
- `Web Components` - Prilagojeni elementi in shadow DOM
- `Canvas API` - Programska grafika
- `Web Workers` - Obdelava v ozadju
- `Service Workers` - Funkcionalnost brez povezave

### Korak 2: Raziskovanje in dokumentiranje

Ustvarite obsežno analizo (300–500 besed), ki vključuje:

#### Tehnični pregled
- **Definirajte**, kaj vaš izbrani vmesnik počne, na jasen in razumljiv način za začetnike
- **Razložite** ključne metode, lastnosti ali dogodke, ki jih ponuja
- **Opišite** vrste težav, ki jih je zasnovan za reševanje

#### Resnična uporaba
- **Poiščite** spletno stran, ki uporablja vaš izbrani vmesnik (preglejte kodo ali raziščite primere)
- **Dokumentirajte** specifično implementacijo s kodnimi odlomki, če je mogoče
- **Analizirajte**, zakaj so se razvijalci odločili za ta pristop
- **Razložite**, kako izboljšuje uporabniško izkušnjo

#### Praktična uporaba
- **Primerjajte** vaš vmesnik s tehnikami, ki smo jih uporabili v projektu terarija
- **Predlagajte**, kako bi vaš vmesnik lahko izboljšal ali razširil funkcionalnost terarija
- **Identificirajte** druge projekte, kjer bi bil ta vmesnik koristen

### Korak 3: Primer kode

Vključite preprost, delujoč primer kode, ki prikazuje vaš vmesnik v akciji. To naj bo:
- **Funkcionalno** - Koda naj dejansko deluje, ko jo preizkusite
- **Komentirano** - Pojasnite, kaj počne vsak del kode
- **Relevantno** - Povezano z realno uporabo
- **Prijazno za začetnike** - Razumljivo za nekoga, ki se uči spletnega razvoja

## Format oddaje

Strukturirajte svojo oddajo z jasnimi naslovi:

```markdown
# [Interface Name] DOM Investigation

## What It Does
[Technical overview]

## Real-World Example
[Website analysis and implementation details]

## Code Demonstration
[Your working example with comments]

## Reflection
[How this connects to our terrarium project and future applications]
```

## Ocenjevalna lestvica

| Kriterij | Odlično (A) | Dobro (B) | Povprečno (C) | Potrebno izboljšanje (D) |
|----------|-------------|-----------|---------------|--------------------------|
| **Tehnično razumevanje** | Pokaže globoko razumevanje z natančnimi razlagami in pravilno terminologijo | Pokaže solidno razumevanje z večinoma natančnimi razlagami | Osnovno razumevanje z nekaj napačnimi predstavami | Omejeno razumevanje z večjimi napakami |
| **Analiza resničnega primera** | Identificira in temeljito analizira dejansko implementacijo s specifičnimi primeri | Najde resnični primer z ustrezno analizo | Najde primer, vendar analiza ni poglobljena | Nejasna ali netočna povezava z resničnim svetom |
| **Primer kode** | Delujoča, dobro komentirana koda, ki jasno prikazuje vmesnik | Funkcionalna koda z ustreznimi komentarji | Koda deluje, vendar potrebuje boljšo dokumentacijo | Koda vsebuje napake ali slabo razlago |
| **Kakovost pisanja** | Jasno, privlačno pisanje z ustrezno strukturo in tehnično komunikacijo | Dobro organizirano z dobro tehnično pisavo | Zadostna organizacija in jasnost | Slaba organizacija ali nejasna komunikacija |
| **Kritično razmišljanje** | Povezuje koncepte na vpogleden način in predlaga inovativne aplikacije | Pokaže dobro analitično razmišljanje in ustrezne povezave | Prisotna je nekaj analize, vendar bi lahko bila globlja | Omejeni dokazi o kritičnem razmišljanju |

## Nasveti za uspeh

**Strategije raziskovanja:**
- **Začnite** z MDN dokumentacijo za zanesljive informacije
- **Poiščite** primere kode na GitHubu ali CodePenu
- **Preverite** priljubljene spletne strani z orodji za razvijalce v brskalniku
- **Oglejte si** video vadnice za vizualne razlage

**Smernice za pisanje:**
- **Uporabite** svoje besede namesto kopiranja dokumentacije
- **Vključite** specifične primere in odlomke kode
- **Razložite** tehnične koncepte, kot da jih razlagate prijatelju
- **Povežite** svoj vmesnik s širšimi koncepti spletnega razvoja

**Ideje za primer kode:**
- **Ustvarite** preprost demo, ki prikazuje glavne funkcije vmesnika
- **Nadgradite** koncepte iz našega projekta terarija, kjer je to ustrezno
- **Osredotočite se** na funkcionalnost, ne na vizualno oblikovanje
- **Preizkusite** svojo kodo, da zagotovite pravilno delovanje

## Rok za oddajo

[Vstavite rok tukaj]

## Vprašanja?

Če potrebujete pojasnila glede katerega koli vidika te naloge, ne oklevajte in vprašajte! Ta raziskava bo poglobila vaše razumevanje, kako DOM omogoča interaktivne spletne izkušnje, ki jih uporabljamo vsak dan.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.