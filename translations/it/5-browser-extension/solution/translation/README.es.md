# Estensione del browser Carbon Trigger: Codice completo

Utilizzando l'API CO2 Signal di tmrow per monitorare l'uso dell'elettricità, crea un'estensione per il browser che ti permetta di avere un promemoria diretto nel tuo browser sul consumo di elettricità della tua regione. L'uso di questa estensione ad hoc ti aiuterà a prendere decisioni sulle tue attività basandoti su queste informazioni.

![screenshot dell'estensione](../../../../../translated_images/it/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.png)

## Iniziare

Dovrai avere [npm](https://npmjs.com) installato. Scarica una copia di questo codice in una cartella sul tuo computer.

Installa tutti i pacchetti necessari:

```
npm install
```

Compila l'estensione con webpack:

```
npm run build
```

Per installarla su Edge, utilizza il menu con i 'tre punti' nell'angolo in alto a destra del browser per trovare il pannello Estensioni. Da lì, seleziona 'Carica non impacchettato' per caricare una nuova estensione. Apri la cartella 'dist' quando richiesto e l'estensione verrà caricata. Per utilizzarla, avrai bisogno di una chiave API per l'API CO2 Signal ([richiedila qui via email](https://www.co2signal.com/) - inserisci il tuo indirizzo email nel campo di questa pagina) e del [codice per la tua regione](http://api.electricitymap.org/v3/zones) corrispondente alla [Mappa dell'elettricità](https://www.electricitymap.org/map) (a Boston, ad esempio, utilizzo 'US-NEISO').

![installazione](../../../../../translated_images/it/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.png)

Una volta inserita la chiave API e la regione nell'interfaccia dell'estensione, il punto colorato nella barra delle estensioni del browser dovrebbe cambiare per riflettere l'uso di energia della tua regione e fornire un'indicazione sulle attività ad alto consumo energetico che sarebbero appropriate per te. Il concetto dietro questo sistema di "punti" mi è stato ispirato dalla [estensione Energy Lollipop](https://energylollipop.com/) per le emissioni della California.

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall'uso di questa traduzione.