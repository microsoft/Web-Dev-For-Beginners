# Adotta un'API

## Panoramica

Le API aprono infinite possibilità per lo sviluppo creativo del web! In questo compito, sceglierai un'API esterna e creerai un'estensione per browser che risolva un problema reale o fornisca una funzionalità utile agli utenti.

## Istruzioni

### Passaggio 1: Scegli la tua API
Seleziona un'API da questa [lista di API pubbliche gratuite](https://github.com/public-apis/public-apis). Considera queste categorie:

**Opzioni popolari per principianti:**
- **Intrattenimento**: [Dog CEO API](https://dog.ceo/dog-api/) per immagini casuali di cani
- **Meteo**: [OpenWeatherMap](https://openweathermap.org/api) per dati meteo attuali
- **Citazioni**: [Quotable API](https://quotable.io/) per citazioni ispiratrici
- **Notizie**: [NewsAPI](https://newsapi.org/) per titoli di notizie attuali
- **Curiosità**: [Numbers API](http://numbersapi.com/) per curiosità sui numeri

### Passaggio 2: Pianifica la tua estensione
Prima di iniziare a programmare, rispondi a queste domande di pianificazione:
- Quale problema risolve la tua estensione?
- Chi è il tuo utente target?
- Quali dati memorizzerai nella memoria locale?
- Come gestirai i fallimenti dell'API o i limiti di utilizzo?

### Passaggio 3: Crea la tua estensione
La tua estensione dovrebbe includere:

**Funzionalità richieste:**
- Campi di input per eventuali parametri richiesti dall'API
- Integrazione con l'API con gestione corretta degli errori
- Memoria locale per le preferenze degli utenti o le chiavi API
- Interfaccia utente pulita e reattiva
- Stati di caricamento e feedback per l'utente

**Requisiti di codice:**
- Utilizza funzionalità moderne di JavaScript (ES6+)
- Implementa async/await per le chiamate API
- Includi una gestione degli errori adeguata con blocchi try/catch
- Aggiungi commenti significativi per spiegare il tuo codice
- Segui una formattazione del codice coerente

### Passaggio 4: Testa e perfeziona
- Testa la tua estensione con vari input
- Gestisci i casi limite (assenza di connessione internet, risposte API non valide)
- Assicurati che la tua estensione funzioni dopo il riavvio del browser
- Aggiungi messaggi di errore user-friendly

## Sfide Bonus

Porta la tua estensione al livello successivo:
- Aggiungi più endpoint API per una funzionalità più ricca
- Implementa la memorizzazione nella cache dei dati per ridurre le chiamate API
- Crea scorciatoie da tastiera per azioni comuni
- Aggiungi funzionalità di esportazione/importazione dei dati
- Implementa opzioni di personalizzazione per gli utenti

## Requisiti di consegna

1. **Estensione per browser funzionante** che si integri con successo con l'API scelta
2. **File README** che spieghi:
   - Quale API hai scelto e perché
   - Come installare e utilizzare la tua estensione
   - Eventuali chiavi API o configurazioni necessarie
   - Screenshot della tua estensione in azione
3. **Codice pulito e commentato** che segua le pratiche moderne di JavaScript

## Griglia di valutazione

| Criteri | Esemplare (90-100%) | Competente (80-89%) | In via di sviluppo (70-79%) | Principiante (60-69%) |
|---------|---------------------|---------------------|----------------------------|-----------------------|
| **Integrazione API** | Integrazione API impeccabile con gestione completa degli errori e dei casi limite | Integrazione API riuscita con gestione degli errori di base | L'API funziona ma ha una gestione degli errori limitata | L'integrazione API presenta problemi significativi |
| **Qualità del codice** | JavaScript moderno pulito e ben commentato che segue le migliori pratiche | Buona struttura del codice con commenti adeguati | Il codice funziona ma necessita di una migliore organizzazione | Qualità del codice scarsa con commenti minimi |
| **Esperienza utente** | Interfaccia curata con eccellenti stati di caricamento e feedback per l'utente | Buona interfaccia con feedback di base per l'utente | Interfaccia di base che funziona adeguatamente | Esperienza utente scarsa con interfaccia confusa |
| **Memoria locale** | Uso sofisticato della memoria locale con validazione e gestione dei dati | Implementazione corretta della memoria locale per le funzionalità principali | Implementazione di base della memoria locale | Uso minimo o errato della memoria locale |
| **Documentazione** | README completo con istruzioni di configurazione e screenshot | Buona documentazione che copre la maggior parte dei requisiti | Documentazione di base con alcune lacune | Documentazione scarsa o mancante |

## Suggerimenti per iniziare

1. **Inizia semplice**: Scegli un'API che non richieda autenticazione complessa
2. **Leggi la documentazione**: Comprendi a fondo gli endpoint e le risposte dell'API scelta
3. **Pianifica la tua interfaccia**: Fai uno schizzo dell'interfaccia della tua estensione prima di iniziare a programmare
4. **Testa frequentemente**: Costruisci in modo incrementale e testa ogni funzionalità man mano che la aggiungi
5. **Gestisci gli errori**: Presumi sempre che le chiamate API possano fallire e pianifica di conseguenza

## Risorse

- [Documentazione sulle estensioni per browser](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Guida Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial sulla memoria locale](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Parsing e gestione JSON](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Divertiti a creare qualcosa di utile e creativo! 🚀

---

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione AI [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si consiglia una traduzione professionale umana. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.