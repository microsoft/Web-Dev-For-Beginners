# Estensione del Browser Carbon Trigger: Codice Completo

Utilizzando l'API CO2 Signal di tmrow per monitorare il consumo di elettricità, costruisci un'estensione del browser che ti avvisi sull'impatto del consumo energetico nella tua regione. Usare questa estensione ti aiuterà a prendere decisioni più consapevoli sulle tue attività in base a queste informazioni.

![screenshot dell'estensione del browser](../../../../../translated_images/it/extension-screenshot.0e7f5bfa110e92e3.webp)

## Iniziare

Devi installare [npm](https://npmjs.com). Scarica una copia di questo codice in una cartella sul tuo computer.

Installa tutti i pacchetti necessari:

```
npm install
```

Compila l'estensione con webpack:

```
npm run build
```

Per installarla su Edge, utilizza il menu con i "tre puntini" nell'angolo in alto a destra del browser per trovare il pannello delle Estensioni. Da lì, seleziona "Carica estensione non impacchettata" per aggiungere una nuova estensione. Apri la cartella 'dist' quando richiesto e l'estensione verrà caricata. Per utilizzarla, avrai bisogno di una chiave API per l'API CO2 Signal ([ottienila qui via email](https://www.co2signal.com/) - inserisci il tuo indirizzo email nella casella sulla pagina) e del [codice della tua regione](http://api.electricitymap.org/v3/zones) corrispondente alla [Mappa dell'Elettricità](https://www.electricitymap.org/map) (ad esempio, a Boston, ho usato 'US-NEISO').

![scaricamento in corso](../../../../../translated_images/it/install-on-edge.78634f02842c4828.webp)

Una volta inseriti la chiave API e il codice della regione nell'interfaccia dell'estensione, il punto colorato nella barra delle estensioni del browser cambierà per riflettere il consumo energetico della tua regione e ti fornirà indicazioni sulle attività più adatte da svolgere. Il concetto alla base di questo sistema a "punti" mi è stato ispirato dall'[estensione del browser Energy Lollipop](https://energylollipop.com/) per le emissioni in California.

**Disclaimer**:  
Questo documento è stato tradotto utilizzando il servizio di traduzione automatica [Co-op Translator](https://github.com/Azure/co-op-translator). Sebbene ci impegniamo per garantire l'accuratezza, si prega di notare che le traduzioni automatiche possono contenere errori o imprecisioni. Il documento originale nella sua lingua nativa dovrebbe essere considerato la fonte autorevole. Per informazioni critiche, si raccomanda una traduzione professionale effettuata da un traduttore umano. Non siamo responsabili per eventuali fraintendimenti o interpretazioni errate derivanti dall'uso di questa traduzione.