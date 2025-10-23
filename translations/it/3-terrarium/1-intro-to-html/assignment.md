<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-22T23:32:22+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "it"
}
-->
# Compito Pratico HTML: Creare un Mockup di Blog

## Obiettivi di Apprendimento

Applica le tue conoscenze di HTML progettando e codificando la struttura completa di una homepage di un blog. Questo compito pratico rafforzerà i concetti di HTML semantico, le migliori pratiche di accessibilità e le competenze di organizzazione del codice professionale che utilizzerai durante il tuo percorso di sviluppo web.

**Completando questo compito, sarai in grado di:**
- Pianificare il layout di un sito web prima di codificarlo
- Utilizzare correttamente gli elementi HTML semantici
- Creare markup accessibili e ben strutturati
- Sviluppare abitudini di codifica professionali con commenti e organizzazione

## Requisiti del Progetto

### Parte 1: Pianificazione del Design (Mockup Visivo)

**Crea un mockup visivo della homepage del tuo blog che includa:**
- Intestazione con il titolo del sito e la navigazione
- Area contenuti principali con almeno 2-3 anteprime di post del blog
- Barra laterale con informazioni aggiuntive (sezione "Chi siamo", post recenti, categorie)
- Footer con informazioni di contatto o link

**Opzioni per la Creazione del Mockup:**
- **Schizzo a mano**: Usa carta e matita, poi fotografa o scansiona il tuo design
- **Strumenti digitali**: Figma, Adobe XD, Canva, PowerPoint o qualsiasi applicazione di disegno
- **Strumenti di wireframe**: Balsamiq, MockFlow o software simili

**Etichetta le sezioni del tuo mockup** con gli elementi HTML che intendi utilizzare (es. "Intestazione - `<header>`", "Post del Blog - `<article>`").

### Parte 2: Pianificazione degli Elementi HTML

**Crea un elenco che mappa ogni sezione del tuo mockup agli specifici elementi HTML:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Elementi Richiesti da Includere:**
Il tuo HTML deve contenere almeno 10 diversi elementi semantici da questa lista:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Parte 3: Implementazione HTML

**Codifica la homepage del tuo blog seguendo questi standard:**

1. **Struttura del Documento**: Includi DOCTYPE, html, head e body correttamente
2. **Markup Semantico**: Usa gli elementi HTML per il loro scopo previsto
3. **Accessibilità**: Includi testo alternativo appropriato per le immagini e testi significativi per i link
4. **Qualità del Codice**: Usa indentazione coerente e commenti significativi
5. **Contenuto**: Includi contenuti realistici per il blog (puoi usare testo segnaposto)

**Struttura HTML di Esempio:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Parte 4: Riflessione

**Scrivi una breve riflessione (3-5 frasi) rispondendo a:**
- Quali elementi HTML ti sei sentito più sicuro di utilizzare?
- Quali difficoltà hai incontrato durante la pianificazione o la codifica?
- In che modo l'HTML semantico ha aiutato a organizzare il tuo contenuto?
- Cosa faresti diversamente nel tuo prossimo progetto HTML?

## Checklist per la Consegna

**Prima di consegnare, assicurati di avere:**
- [ ] Mockup visivo con elementi HTML etichettati
- [ ] File HTML completo con struttura del documento corretta
- [ ] Almeno 10 diversi elementi HTML semantici utilizzati correttamente
- [ ] Commenti significativi che spiegano la struttura del codice
- [ ] Sintassi HTML valida (testa il file in un browser)
- [ ] Riflessione scritta che risponde alle domande del prompt

## Rubrica di Valutazione

| Criteri | Esemplare (4) | Competente (3) | In via di sviluppo (2) | Principiante (1) |
|---------|---------------|----------------|-------------------------|------------------|
| **Pianificazione & Design** | Mockup dettagliato e ben etichettato che mostra una chiara comprensione del layout e della struttura semantica HTML | Mockup chiaro con la maggior parte delle sezioni etichettate correttamente | Mockup di base con alcune etichette, dimostra una comprensione generale | Mockup minimo o poco chiaro, manca identificazione delle sezioni |
| **Uso dell'HTML Semantico** | Utilizza 10+ elementi semantici correttamente, dimostra una profonda comprensione della struttura HTML e dell'accessibilità | Utilizza 8-9 elementi semantici correttamente, mostra una buona comprensione del markup semantico | Utilizza 6-7 elementi semantici, con qualche confusione sull'uso appropriato | Utilizza meno di 6 elementi o usa in modo errato gli elementi semantici |
| **Qualità & Organizzazione del Codice** | Codice eccezionalmente ben organizzato, correttamente indentato con commenti completi e sintassi HTML perfetta | Codice ben organizzato con buona indentazione, commenti utili e sintassi valida | Codice per lo più organizzato con alcuni commenti, problemi minori di sintassi | Organizzazione scarsa, commenti minimi, errori di sintassi multipli |
| **Accessibilità & Migliori Pratiche** | Eccellenti considerazioni sull'accessibilità, testo alternativo significativo, gerarchia corretta delle intestazioni, segue tutte le migliori pratiche HTML moderne | Buone caratteristiche di accessibilità, uso appropriato di intestazioni e testo alternativo, segue la maggior parte delle migliori pratiche | Alcune considerazioni sull'accessibilità, testo alternativo e struttura delle intestazioni di base | Carenza di funzionalità di accessibilità, struttura delle intestazioni scarsa, non segue le migliori pratiche |
| **Riflessione & Apprendimento** | Riflessione approfondita che dimostra una comprensione profonda dei concetti HTML e un'analisi ponderata del processo di apprendimento | Buona riflessione che mostra comprensione dei concetti chiave e una certa consapevolezza del proprio apprendimento | Riflessione di base con limitata comprensione dei concetti HTML o del processo di apprendimento | Riflessione minima o assente, dimostra poca comprensione dei concetti appresi |

## Risorse di Apprendimento

**Riferimenti Essenziali:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Guida completa a tutti gli elementi HTML
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Comprendere il markup semantico
- [Linee Guida per l'Accessibilità Web](https://www.w3.org/WAI/WCAG21/quickref/) - Creare contenuti web accessibili
- [Validatore HTML](https://validator.w3.org/) - Controlla la sintassi HTML

**Consigli Utili per il Successo:**
- Inizia con il tuo mockup prima di scrivere qualsiasi codice
- Usa gli strumenti per sviluppatori del browser per ispezionare la struttura HTML
- Testa la tua pagina con diverse dimensioni dello schermo (anche senza CSS)
- Leggi il tuo HTML ad alta voce per verificare se la struttura ha senso logico
- Considera come un lettore di schermo interpreterebbe la struttura della tua pagina

> 💡 **Ricorda**: Questo compito si concentra sulla struttura e sulla semantica HTML. Non preoccuparti dello stile visivo – per quello c'è il CSS! La tua pagina potrebbe sembrare semplice, ma dovrebbe essere ben strutturata e significativa.

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatizzate possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.