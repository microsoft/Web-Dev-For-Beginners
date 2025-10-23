<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efb01fcafd2ef40c593a6e662fc938a8",
  "translation_date": "2025-10-22T23:36:31+00:00",
  "source_file": "7-bank-project/2-forms/assignment.md",
  "language_code": "it"
}
-->
# Stile la tua app bancaria con CSS moderno

## Panoramica del progetto

Trasforma la tua applicazione bancaria funzionale in un'app web visivamente accattivante e dall'aspetto professionale utilizzando tecniche CSS moderne. Creerai un sistema di design coerente che migliora l'esperienza utente mantenendo i principi di accessibilità e design responsivo.

Questo compito ti sfida ad applicare modelli di design web contemporanei, implementare un'identità visiva coerente e creare un'interfaccia che gli utenti troveranno sia attraente che intuitiva da navigare.

## Istruzioni

### Passo 1: Configura il tuo foglio di stile

**Crea la base del tuo CSS:**

1. **Crea** un nuovo file chiamato `styles.css` nella radice del tuo progetto
2. **Collega** il foglio di stile nel tuo file `index.html`:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```
3. **Inizia** con un reset CSS e impostazioni predefinite moderne:
   ```css
   /* Modern CSS reset and base styles */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   body {
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
     line-height: 1.6;
     color: #333;
   }
   ```


### Passo 2: Requisiti del sistema di design

**Implementa questi elementi essenziali di design:**

#### Palette di colori
- **Colore primario**: Scegli un colore professionale per pulsanti e punti salienti
- **Colore secondario**: Colore complementare per accenti e azioni secondarie
- **Colori neutri**: Toni di grigio per testo, bordi e sfondi
- **Colori di successo/errore**: Verde per stati di successo, rosso per errori

#### Tipografia
- **Gerarchia dei titoli**: Chiara distinzione tra elementi H1, H2 e H3
- **Testo del corpo**: Dimensione del font leggibile (minimo 16px) e altezza della linea appropriata
- **Etichette dei moduli**: Stile del testo chiaro e accessibile

#### Layout e spaziatura
- **Spaziatura coerente**: Usa una scala di spaziatura (8px, 16px, 24px, 32px)
- **Sistema a griglia**: Layout organizzato per moduli e sezioni di contenuto
- **Design responsivo**: Approccio mobile-first con punti di interruzione

### Passo 3: Stile dei componenti

**Stilizza questi componenti specifici:**

#### Moduli
- **Campi di input**: Bordi professionali, stati di focus e stile di validazione
- **Pulsanti**: Effetti hover, stati disabilitati e indicatori di caricamento
- **Etichette**: Posizionamento chiaro e indicatori di campo obbligatorio
- **Messaggi di errore**: Stile di errore visibile e messaggi utili

#### Navigazione
- **Intestazione**: Area di navigazione pulita e con marchio
- **Link**: Stati hover chiari e indicatori attivi
- **Logo/Titolo**: Elemento distintivo del marchio

#### Aree di contenuto
- **Sezioni**: Chiara separazione visiva tra le diverse aree
- **Card**: Se utilizzi layout basati su card, includi ombre e bordi
- **Sfondi**: Uso appropriato dello spazio bianco e sfondi sottili

### Passo 4: Funzionalità avanzate (opzionale)

**Considera di implementare queste funzionalità avanzate:**
- **Modalità scura**: Alterna tra temi chiari e scuri
- **Animazioni**: Transizioni sottili e micro-interazioni
- **Stati di caricamento**: Feedback visivo durante l'invio dei moduli
- **Immagini responsive**: Immagini ottimizzate per diverse dimensioni dello schermo

## Ispirazione per il design

**Caratteristiche moderne delle app bancarie:**
- **Design pulito e minimalista** con molto spazio bianco
- **Schemi di colori professionali** (blu, verdi o neutri sofisticati)
- **Gerarchia visiva chiara** con pulsanti di call-to-action prominenti
- **Rapporti di contrasto accessibili** che rispettano le linee guida WCAG
- **Layout responsivi** che funzionano su tutti i dispositivi

## Requisiti tecnici

### Organizzazione del CSS
```css
/* 1. CSS Custom Properties (Variables) */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  /* Add more variables */
}

/* 2. Base Styles */
/* Reset, typography, general elements */

/* 3. Layout */
/* Grid, flexbox, positioning */

/* 4. Components */
/* Forms, buttons, cards */

/* 5. Utilities */
/* Helper classes, responsive utilities */

/* 6. Media Queries */
/* Responsive breakpoints */
```


### Requisiti di accessibilità
- **Contrasto dei colori**: Assicurati di avere un rapporto di almeno 4.5:1 per il testo normale
- **Indicatori di focus**: Stati di focus visibili per la navigazione tramite tastiera
- **Etichette dei moduli**: Correttamente associate agli input
- **Design responsivo**: Utilizzabile su schermi da 320px a 1920px di larghezza

## Griglia di valutazione

| Criteri | Esemplare (A) | Proficiente (B) | In via di sviluppo (C) | Necessita miglioramenti (F) |
|---------|---------------|-----------------|-------------------------|-----------------------------|
| **Sistema di design** | Implementa un sistema di design completo con colori, tipografia e spaziatura coerenti | Utilizza uno stile coerente con schemi di design chiari e buona gerarchia visiva | Stile di base applicato con alcune incoerenze o elementi di design mancanti | Stile minimo con scelte di design incoerenti o in conflitto |
| **Esperienza utente** | Crea un'interfaccia intuitiva e professionale con eccellente usabilità e appeal visivo | Fornisce una buona esperienza utente con navigazione chiara e contenuto leggibile | Usabilità di base con alcuni miglioramenti necessari | Scarsa usabilità, difficile da navigare o leggere |
| **Implementazione tecnica** | Utilizza tecniche CSS moderne, struttura del codice organizzata e segue le migliori pratiche | Implementa CSS in modo efficace con buona organizzazione e tecniche appropriate | CSS funziona correttamente ma potrebbe mancare di organizzazione o approcci moderni | Implementazione CSS scarsa con problemi tecnici o di compatibilità del browser |
| **Design responsivo** | Design completamente responsivo che funziona perfettamente su tutte le dimensioni dei dispositivi | Buon comportamento responsivo con problemi minori su alcune dimensioni dello schermo | Implementazione responsiva di base con alcuni problemi di layout | Non responsivo o problemi significativi su dispositivi mobili |
| **Accessibilità** | Rispetta le linee guida WCAG con eccellente navigazione tramite tastiera e supporto per screen reader | Buone pratiche di accessibilità con contrasto e indicatori di focus adeguati | Considerazioni di base sull'accessibilità con alcuni elementi mancanti | Scarsa accessibilità, difficile per gli utenti con disabilità |

## Linee guida per la consegna

**Includi nella tua consegna:**
- **styles.css**: Il tuo foglio di stile completo
- **HTML aggiornato**: Eventuali modifiche HTML che hai apportato
- **Screenshot**: Immagini che mostrano il tuo design su desktop e mobile
- **README**: Breve descrizione delle tue scelte di design e della palette di colori

**Punti bonus per:**
- **Proprietà personalizzate CSS** per un tema mantenibile
- **Funzionalità CSS avanzate** come Grid, Flexbox o animazioni CSS
- **Considerazioni sulle prestazioni** come CSS ottimizzato e dimensioni minime dei file
- **Test cross-browser** per garantire la compatibilità tra diversi browser

> 💡 **Suggerimento Pro**: Inizia con il design per dispositivi mobili, poi miglioralo per schermi più grandi. Questo approccio mobile-first garantisce che la tua app funzioni bene su tutti i dispositivi e segua le migliori pratiche di sviluppo web moderno.

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.