<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T09:37:03+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "it"
}
-->
***

# Utilizzare un Editor di Codice: Padroneggiare [VSCode.dev](https://vscode.dev)

**Benvenuto!**  
Questa lezione ti guiderà dai concetti di base all'uso avanzato di [VSCode.dev](https://vscode.dev), il potente editor di codice basato sul web. Imparerai a modificare il codice con sicurezza, gestire progetti, tracciare modifiche, installare estensioni e collaborare come un professionista—tutto direttamente dal browser, senza necessità di installazione.

***

## Obiettivi di Apprendimento

Alla fine di questa lezione, sarai in grado di:

- Utilizzare efficacemente un editor di codice su qualsiasi progetto, ovunque ti trovi
- Tracciare il tuo lavoro senza problemi grazie al controllo di versione integrato
- Personalizzare e migliorare il tuo flusso di lavoro di sviluppo con personalizzazioni e estensioni dell'editor

***

## Prerequisiti

Per iniziare, **registrati per un account gratuito su [GitHub](https://github.com)**, che ti permette di gestire repository di codice e collaborare a livello globale. Se non hai ancora un account, [creane uno qui](https://github.com/).

***

## Perché Usare un Editor di Codice Basato sul Web?

Un **editor di codice** come VSCode.dev è il tuo centro di comando per scrivere, modificare e gestire il codice. Con un'interfaccia intuitiva, tantissime funzionalità e accesso immediato tramite browser, puoi:

- Modificare progetti su qualsiasi dispositivo
- Evitare il fastidio delle installazioni
- Collaborare e contribuire istantaneamente

Una volta che ti sentirai a tuo agio con VSCode.dev, sarai pronto per affrontare attività di coding ovunque e in qualsiasi momento.

***

## Iniziare con VSCode.dev

Vai su **[VSCode.dev](https://vscode.dev)**—niente installazioni, niente download. Accedere con GitHub sblocca l'accesso completo, inclusa la sincronizzazione delle impostazioni, delle estensioni e dei repository. Se richiesto, collega il tuo account GitHub.

Dopo il caricamento, il tuo spazio di lavoro apparirà così:

![Default VSCode.dev](../images/default-vscode-dev ha tre sezioni principali da sinistra a destra:
- **Barra delle attività:** Icone come 🔎 (Ricerca), ⚙️ (Impostazioni), file, controllo sorgente, ecc.
- **Barra laterale:** Cambia contesto in base all'icona selezionata nella barra delle attività (di default su *Esplora* per mostrare i file).
- **Area editor/codice:** La sezione più grande a destra—dove effettivamente modificherai e visualizzerai il codice.

Clicca sulle icone per esplorare le funzionalità, ma torna a _Esplora_ per mantenere il tuo posto.

***

## Aprire un Repository GitHub

### Metodo 1: Dall'Editor

1. Vai su [VSCode.dev](https://vscode.dev). Clicca su **"Apri Repository Remoto."**

   ![Apri repository remoto](../../../../8-code-editor/images/open-remote-repository usa il _Command Palette_ (Ctrl-Shift-P, o Cmd-Shift-P su Mac).

   ![Menu Palette](../images/palette-menu.png apri repository remoto.”
   - Seleziona l'opzione.
   - Incolla l'URL del tuo repository GitHub (es. `https://github.com/microsoft/Web-Dev-For-Beginners`) e premi Invio.

Se tutto va bene, vedrai l'intero progetto caricato e pronto per essere modificato!

***

### Metodo 2: Istantaneamente tramite URL

Trasforma qualsiasi URL di repository GitHub per aprirlo direttamente in VSCode.dev sostituendo `github.com` con `vscode.dev/github`.  
Es.:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Questa funzionalità accelera l'accesso rapido a QUALSIASI progetto.

***

## Modificare File nel Tuo Progetto

Una volta aperto il tuo repository, puoi:

### 1. **Creare un Nuovo File**
- Nella barra laterale *Esplora*, naviga nella cartella desiderata o usa la radice.
- Clicca sull'icona _‘Nuovo file ...’_.
- Dai un nome al file, premi **Invio**, e il tuo file apparirà immediatamente.

![Creare un nuovo file](../images/create-new-file 2. **Modificare e Salvare File**

- Clicca su un file in *Esplora* per aprirlo nell'area codice.
- Apporta le modifiche necessarie.
- VSCode.dev salva automaticamente le modifiche, ma puoi premere Ctrl+S per salvare manualmente.

![Modificare un file](../images/edit-a-file.png. **Tracciare e Confermare Modifiche con il Controllo di Versione**

VSCode.dev ha integrato il controllo di versione **Git**!

- Clicca sull'icona _'Controllo Sorgente'_ per visualizzare tutte le modifiche apportate.
- I file nella cartella `Changes` mostrano aggiunte (verde) e eliminazioni (rosso).  
  ![Visualizzare modifiche](../images/working-tree.png modifiche cliccando su `+` accanto ai file per prepararli per il commit.
- **Scarta** modifiche indesiderate cliccando sull'icona di annullamento.
- Scrivi un messaggio di commit chiaro, quindi clicca sul segno di spunta per confermare e inviare.

Per tornare al tuo repository su GitHub, seleziona il menu hamburger in alto a sinistra.

![Preparare e confermare modifiche](../images/edit-vscode.dev Con Estensioni

Le estensioni ti permettono di aggiungere linguaggi, temi, debugger e strumenti di produttività a VSCode.dev—rendendo la tua vita da programmatore più semplice e divertente.

### Esplorare e Gestire Estensioni

- Clicca sull'**icona Estensioni** nella barra delle attività.
- Cerca un'estensione nella casella _'Cerca Estensioni nel Marketplace'_.

  ![Dettagli estensione](../images/extension-details:
  - **Installate**: Tutte le estensioni che hai aggiunto
  - **Popolari**: Preferite dall'industria
  - **Raccomandate**: Personalizzate per il tuo flusso di lavoro

  ![Visualizzare estensioni](

  

***

### 1. **Installare Estensioni**

- Inserisci il nome dell'estensione nella ricerca, cliccaci sopra e visualizza i dettagli nell'editor.
- Premi il **pulsante blu Installa** nella barra laterale _o_ nell'area principale del codice.

  ![Installare estensioni](../images/install-extension 2. **Personalizzare Estensioni**

- Trova l'estensione installata.
- Clicca sull'**icona dell'ingranaggio** → seleziona _Impostazioni Estensione_ per regolare i comportamenti secondo le tue preferenze.

  ![Modificare impostazioni estensione](../images/extension-settings 3. **Gestire Estensioni**
Puoi:

- **Disabilitare:** Disattivare temporaneamente un'estensione mantenendola installata
- **Disinstallare:** Rimuoverla definitivamente se non è più necessaria

  Trova l'estensione, premi l'icona dell'ingranaggio e seleziona ‘Disabilita’ o ‘Disinstalla,’ oppure usa i pulsanti blu nell'area codice.

***

## Compito

Metti alla prova le tue abilità: [Crea un sito web curriculum usando vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Ulteriori Esplorazioni e Studio Autonomo

- Approfondisci con [la documentazione ufficiale di VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Esplora funzionalità avanzate dello spazio di lavoro, scorciatoie da tastiera e impostazioni.

***

**Ora sei pronto per programmare, creare e collaborare—da qualsiasi luogo, su qualsiasi dispositivo, usando VSCode.dev!**

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.