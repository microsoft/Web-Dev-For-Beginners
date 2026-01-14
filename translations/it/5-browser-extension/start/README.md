<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "26fd39046d264ba185dcb086d3a8cf3e",
  "translation_date": "2025-08-25T23:36:00+00:00",
  "source_file": "5-browser-extension/start/README.md",
  "language_code": "it"
}
-->
# Estensione del browser Carbon Trigger: Codice iniziale

Utilizzando l'API C02 Signal di tmrow per monitorare il consumo di elettricità, crea un'estensione per browser che ti permetta di avere un promemoria direttamente nel tuo browser su quanto sia intenso il consumo di elettricità nella tua regione. Usare questa estensione in modo occasionale ti aiuterà a prendere decisioni sulle tue attività basandoti su queste informazioni.

![screenshot dell'estensione](../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.it.png)

## Per iniziare

Dovrai avere [npm](https://npmjs.com) installato. Scarica una copia di questo codice in una cartella sul tuo computer.

Installa tutti i pacchetti necessari:

```
npm install
```

Compila l'estensione con webpack:

```
npm run build
```

Per installare su Edge, utilizza il menu 'tre puntini' nell'angolo in alto a destra del browser per trovare il pannello delle Estensioni. Da lì, seleziona 'Carica non impacchettato' per caricare una nuova estensione. Apri la cartella 'dist' quando richiesto e l'estensione verrà caricata. Per utilizzarla, avrai bisogno di una chiave API per l'API di CO2 Signal ([richiedila qui via email](https://www.co2signal.com/) - inserisci il tuo indirizzo email nella casella su questa pagina) e del [codice della tua regione](http://api.electricitymap.org/v3/zones) corrispondente alla [Electricity Map](https://www.electricitymap.org/map) (a Boston, ad esempio, utilizzo 'US-NEISO').

![installazione](../../../../translated_images/install-on-edge.78634f02842c4828.it.png)

Una volta inseriti la chiave API e il codice della regione nell'interfaccia dell'estensione, il punto colorato nella barra delle estensioni del browser dovrebbe cambiare per riflettere il consumo energetico della tua regione e darti un'indicazione su quali attività ad alto consumo energetico sarebbero appropriate da svolgere. Il concetto dietro questo sistema a 'punti' mi è stato ispirato dall'estensione [Energy Lollipop](https://energylollipop.com/) per le emissioni della California.

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.