<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-25T23:02:52+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "it"
}
-->
# Creare Pagine Web Accessibili

![Tutto sull'accessibilità](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.it.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lettura
[Quiz pre-lettura](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> La forza del Web sta nella sua universalità. L'accesso da parte di tutti, indipendentemente dalla disabilità, è un aspetto essenziale.
>
> \- Sir Timothy Berners-Lee, Direttore del W3C e inventore del World Wide Web

Questa citazione evidenzia perfettamente l'importanza di creare siti web accessibili. Un'applicazione che non può essere utilizzata da tutti è, per definizione, esclusiva. Come sviluppatori web, dovremmo sempre tenere a mente l'accessibilità. Concentrandoci su questo aspetto fin dall'inizio, saremo ben avviati a garantire che tutti possano accedere alle pagine che creiamo. In questa lezione, imparerai a conoscere gli strumenti che possono aiutarti a garantire che i tuoi asset web siano accessibili e come costruire con l'accessibilità in mente.

> Puoi seguire questa lezione su [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Strumenti da utilizzare

### Screen reader

Uno degli strumenti di accessibilità più conosciuti sono i screen reader.

I [screen reader](https://en.wikipedia.org/wiki/Screen_reader) sono comunemente utilizzati da persone con disabilità visive. Mentre dedichiamo tempo a garantire che un browser trasmetta correttamente le informazioni che vogliamo condividere, dobbiamo anche assicurarci che un screen reader faccia lo stesso.

Nel modo più semplice, un screen reader leggerà una pagina dall'alto verso il basso in modo udibile. Se la tua pagina è composta solo da testo, il lettore trasmetterà le informazioni in modo simile a un browser. Ovviamente, le pagine web raramente sono solo testo; contengono link, grafica, colori e altri componenti visivi. È necessario prestare attenzione per garantire che queste informazioni siano lette correttamente da un screen reader.

Ogni sviluppatore web dovrebbe familiarizzare con un screen reader. Come evidenziato sopra, è il client che i tuoi utenti utilizzeranno. Allo stesso modo in cui conosci il funzionamento di un browser, dovresti imparare come funziona un screen reader. Fortunatamente, i screen reader sono integrati nella maggior parte dei sistemi operativi.

Alcuni browser hanno anche strumenti integrati ed estensioni che possono leggere il testo ad alta voce o fornire alcune funzionalità di navigazione di base, come [questi strumenti per l'accessibilità del browser Edge](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Questi sono strumenti di accessibilità importanti, ma funzionano in modo molto diverso dai screen reader e non dovrebbero essere confusi con strumenti di test per screen reader.

✅ Prova un screen reader e un lettore di testo del browser. Su Windows, [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) è incluso di default, e [JAWS](https://webaim.org/articles/jaws/) e [NVDA](https://www.nvaccess.org/about-nvda/) possono essere installati. Su macOS e iOS, [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) è installato di default.

### Zoom

Un altro strumento comunemente utilizzato da persone con disabilità visive è lo zoom. Il tipo più semplice di zoom è lo zoom statico, controllato tramite `Control + segno più (+)` o riducendo la risoluzione dello schermo. Questo tipo di zoom ridimensiona l'intera pagina, quindi utilizzare il [design responsivo](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) è importante per fornire una buona esperienza utente a livelli di zoom aumentati.

Un altro tipo di zoom si basa su software specializzati per ingrandire un'area dello schermo e spostarsi, proprio come usare una lente d'ingrandimento reale. Su Windows, [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) è integrato, e [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) è un software di ingrandimento di terze parti con più funzionalità e una base di utenti più ampia. Sia macOS che iOS hanno un software di ingrandimento integrato chiamato [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Controllo del contrasto

I colori sui siti web devono essere scelti con attenzione per rispondere alle esigenze degli utenti daltonici o di persone che hanno difficoltà a vedere colori a basso contrasto.

✅ Testa un sito web che ti piace per l'uso dei colori con un'estensione del browser come il [controllo del contrasto WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Cosa impari?

### Lighthouse

Nell'area degli strumenti per sviluppatori del tuo browser, troverai lo strumento Lighthouse. Questo strumento è importante per ottenere una prima analisi dell'accessibilità (oltre ad altre analisi) di un sito web. Sebbene sia importante non affidarsi esclusivamente a Lighthouse, un punteggio del 100% è molto utile come punto di partenza.

✅ Trova Lighthouse nel pannello degli strumenti per sviluppatori del tuo browser e esegui un'analisi su qualsiasi sito. Cosa scopri?

## Progettare per l'accessibilità

L'accessibilità è un argomento relativamente ampio. Per aiutarti, ci sono numerose risorse disponibili.

- [Accessible U - Università del Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Sebbene non saremo in grado di coprire ogni aspetto della creazione di siti accessibili, di seguito sono riportati alcuni dei principi fondamentali che vorrai implementare. Progettare una pagina accessibile fin dall'inizio è **sempre** più facile che tornare su una pagina esistente per renderla accessibile.

## Buoni principi di visualizzazione

### Palette di colori sicure

Le persone vedono il mondo in modi diversi, e questo include i colori. Quando selezioni uno schema di colori per il tuo sito, dovresti assicurarti che sia accessibile a tutti. Un ottimo [strumento per generare palette di colori è Color Safe](http://colorsafe.co/).

✅ Identifica un sito web che presenta molti problemi nell'uso dei colori. Perché?

### Usa l'HTML corretto

Con CSS e JavaScript è possibile far sembrare qualsiasi elemento un qualsiasi tipo di controllo. `<span>` potrebbe essere usato per creare un `<button>`, e `<b>` potrebbe diventare un collegamento ipertestuale. Sebbene questo possa essere considerato più facile da stilizzare, non trasmette nulla a un screen reader. Usa l'HTML appropriato quando crei controlli su una pagina. Se vuoi un collegamento ipertestuale, usa `<a>`. Utilizzare l'HTML corretto per il controllo corretto si chiama fare uso di HTML semantico.

✅ Vai su qualsiasi sito web e verifica se i designer e gli sviluppatori stanno usando correttamente l'HTML. Riesci a trovare un pulsante che dovrebbe essere un link? Suggerimento: fai clic con il tasto destro e scegli "Visualizza sorgente pagina" nel tuo browser per guardare il codice sottostante.

### Crea una gerarchia di intestazioni descrittiva

Gli utenti di screen reader [si affidano molto alle intestazioni](https://webaim.org/projects/screenreadersurvey8/#finding) per trovare informazioni e navigare attraverso una pagina. Scrivere contenuti descrittivi per le intestazioni e utilizzare tag semantici per le intestazioni è importante per creare un sito facilmente navigabile per gli utenti di screen reader.

### Usa buoni indizi visivi

CSS offre un controllo completo sull'aspetto di qualsiasi elemento su una pagina. Puoi creare caselle di testo senza contorno o collegamenti ipertestuali senza sottolineatura. Sfortunatamente, rimuovere questi indizi può rendere più difficile per qualcuno che dipende da essi riconoscere il tipo di controllo.

## L'importanza del testo dei link

I collegamenti ipertestuali sono fondamentali per navigare sul web. Di conseguenza, garantire che un screen reader possa leggere correttamente i link consente a tutti gli utenti di navigare nel tuo sito.

### Screen reader e link

Come ci si aspetterebbe, i screen reader leggono il testo dei link nello stesso modo in cui leggerebbero qualsiasi altro testo sulla pagina. Tenendo presente questo, il testo dimostrato di seguito potrebbe sembrare perfettamente accettabile.

> Il pinguino minore, talvolta noto come pinguino delle fate, è il pinguino più piccolo del mondo. [Clicca qui](https://en.wikipedia.org/wiki/Little_penguin) per ulteriori informazioni.

> Il pinguino minore, talvolta noto come pinguino delle fate, è il pinguino più piccolo del mondo. Visita https://en.wikipedia.org/wiki/Little_penguin per ulteriori informazioni.

> **NOTE** Come stai per leggere, non dovresti **mai** creare link che sembrano quelli sopra.

Ricorda, i screen reader sono un'interfaccia diversa dai browser con un diverso set di funzionalità.

### Il problema con l'uso dell'URL

I screen reader leggono il testo. Se un URL appare nel testo, il screen reader leggerà l'URL. Generalmente parlando, l'URL non trasmette informazioni significative e può risultare fastidioso. Potresti aver sperimentato questo se il tuo telefono ha mai letto ad alta voce un messaggio di testo con un URL.

### Il problema con "clicca qui"

I screen reader hanno anche la capacità di leggere solo i collegamenti ipertestuali su una pagina, proprio come farebbe una persona vedente scansionando una pagina per i link. Se il testo del link è sempre "clicca qui", tutto ciò che l'utente sentirà sarà "clicca qui, clicca qui, clicca qui, clicca qui, clicca qui, ..." Tutti i link ora sono indistinguibili l'uno dall'altro.

### Buon testo per i link

Un buon testo per i link descrive brevemente cosa si trova dall'altra parte del link. Nell'esempio sopra che parla di pinguini minori, il link è alla pagina Wikipedia sulla specie. La frase *pinguini minori* sarebbe un testo perfetto per il link poiché chiarisce cosa qualcuno imparerà se clicca sul link - i pinguini minori.

> Il [pinguino minore](https://en.wikipedia.org/wiki/Little_penguin), talvolta noto come pinguino delle fate, è il pinguino più piccolo del mondo.

✅ Naviga sul web per alcuni minuti per trovare pagine che utilizzano strategie di collegamento poco chiare. Confrontale con altri siti che utilizzano link migliori. Cosa impari?

#### Note sui motori di ricerca

Come vantaggio aggiuntivo per garantire che il tuo sito sia accessibile a tutti, aiuterai anche i motori di ricerca a navigare nel tuo sito. I motori di ricerca utilizzano il testo dei link per apprendere gli argomenti delle pagine. Quindi usare un buon testo per i link aiuta tutti!

### ARIA

Immagina la seguente pagina:

| Prodotto      | Descrizione        | Ordine        |
| ------------- | ------------------ | ------------- |
| Widget        | [Descrizione](../../../../1-getting-started-lessons/3-accessibility/') | [Ordine](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget  | [Descrizione](../../../../1-getting-started-lessons/3-accessibility/') | [Ordine](../../../../1-getting-started-lessons/3-accessibility/') |

In questo esempio, duplicare il testo di descrizione e ordine ha senso per qualcuno che utilizza un browser. Tuttavia, qualcuno che utilizza un screen reader sentirebbe solo le parole *descrizione* e *ordine* ripetute senza contesto.

Per supportare questi tipi di scenari, l'HTML supporta un set di attributi noto come [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Questi attributi ti permettono di fornire informazioni aggiuntive ai screen reader.

> **NOTE**: Come molti aspetti dell'HTML, il supporto da parte dei browser e dei screen reader può variare. Tuttavia, la maggior parte dei client principali supporta gli attributi ARIA.

Puoi usare `aria-label` per descrivere il link quando il formato della pagina non lo consente. La descrizione per il widget potrebbe essere impostata come

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ In generale, utilizzare il markup semantico come descritto sopra supera l'uso di ARIA, ma a volte non esiste un equivalente semantico per vari widget HTML. Un buon esempio è un albero. Non c'è un equivalente HTML per un albero, quindi identifichi il generico `<div>` per questo elemento con un ruolo e valori ARIA appropriati. La [documentazione MDN su ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) contiene informazioni più utili.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Immagini

È ovvio che i screen reader non sono in grado di leggere automaticamente ciò che c'è in un'immagine. Garantire che le immagini siano accessibili non richiede molto lavoro - è proprio ciò per cui serve l'attributo `alt`. Tutte le immagini significative dovrebbero avere un `alt` per descrivere cosa sono. 
Le immagini puramente decorative dovrebbero avere il loro attributo `alt` impostato su una stringa vuota: `alt=""`. Questo impedisce ai screen reader di annunciare inutilmente l'immagine decorativa.

✅ Come ci si potrebbe aspettare, anche i motori di ricerca non sono in grado di capire cosa c'è in un'immagine. Usano anche il testo alternativo. Quindi, ancora una volta, garantire che la tua pagina sia accessibile offre vantaggi aggiuntivi!

## La tastiera

Alcuni utenti non sono in grado di utilizzare un mouse o un trackpad, affidandosi invece alle interazioni con la tastiera per passare da un elemento all'altro. È importante che il tuo sito web presenti i tuoi contenuti in un ordine logico in modo che un utente della tastiera possa accedere a ogni elemento interattivo mentre scorre il documento. Se costruisci le tue pagine web con markup semantico e utilizzi CSS per stilizzare il loro layout visivo, il tuo sito dovrebbe essere navigabile tramite tastiera, ma è importante testare questo aspetto manualmente. Scopri di più sulle [strategie di navigazione tramite tastiera](https://webaim.org/techniques/keyboard/).

✅ Vai su qualsiasi sito web e prova a navigare attraverso di esso utilizzando solo la tastiera. Cosa funziona, cosa non funziona? Perché?

## Riepilogo

Un web accessibile solo a pochi non è un vero "world-wide web". Il modo migliore per garantire che i siti che crei siano accessibili è incorporare le migliori pratiche di accessibilità fin dall'inizio. Sebbene ci siano passaggi extra coinvolti, incorporare queste competenze nel tuo flusso di lavoro ora significherà che tutte le pagine che crei saranno accessibili.

---

## 🚀 Sfida

Prendi questo HTML e riscrivilo per renderlo il più accessibile possibile, utilizzando le strategie che hai imparato.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Quiz Post-Lettura
[Quiz post-lettura](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## Revisione e Studio Autonomo
Molti governi hanno leggi riguardanti i requisiti di accessibilità. Informati sulle leggi di accessibilità del tuo paese. Cosa è coperto e cosa no? Un esempio è [questo sito web governativo](https://accessibility.blog.gov.uk/).

## Compito

[Analizza un sito web non accessibile](assignment.md)

Crediti: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) di Instrument

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.