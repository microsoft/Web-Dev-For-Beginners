<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-26T00:02:09+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "it"
}
-->
# Estensione del browser Carbon Trigger: Codice completato

Costruisci un'estensione del browser che utilizza l'API CO2 Signal di tmrow per monitorare il consumo di energia nella tua area e mostrarti un promemoria direttamente nel browser. Usando questa estensione in modo ad hoc, puoi prendere decisioni informate sulle tue attività in base a queste informazioni.

![screenshot dell'estensione](../../../../../translated_images/it/extension-screenshot.0e7f5bfa110e92e3.webp)

## Introduzione

Devi avere [npm](https://npmjs.com) installato. Scarica una copia di questo codice in una cartella sul tuo computer.

Installa tutti i pacchetti necessari.

```
npm install
```

Costruisci l'estensione con webpack.

```
npm run build
```

Per installarla su Edge, trova il pannello "Estensioni" dal menu con i "tre puntini" in alto a destra del browser. Da lì, seleziona "Carica estensione non impacchettata" e carica la nuova estensione. Quando richiesto, apri la cartella "dist" e l'estensione verrà caricata. Per utilizzarla, avrai bisogno di una chiave API dell'API CO2 Signal ([ottienila qui via email](https://www.co2signal.com/) - inserisci la tua email nella casella su quella pagina) e del [codice per la tua regione](http://api.electricitymap.org/v3/zones) corrispondente su [Electricity Map](https://www.electricitymap.org/map) (ad esempio, per Boston, usa 'US-NEISO').

![installazione](../../../../../translated_images/it/install-on-edge.78634f02842c4828.webp)

Inserendo la chiave API e la regione nell'interfaccia dell'estensione, il punto colorato che appare nella barra delle estensioni del browser cambierà colore per riflettere il consumo energetico della tua area. Questo ti aiuterà a capire quali attività che richiedono energia sono più appropriate in quel momento. Il concetto del sistema a "punti" mi è stato ispirato dall'estensione [Energy Lollipop](https://energylollipop.com/) per le emissioni in California.

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche potrebbero contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali incomprensioni o interpretazioni errate derivanti dall'uso di questa traduzione.