# Estensione del browser Carbon Trigger: codice per partire

Si utilizzerà l'API Signal C02 di tmrow per monitorare l'utilizzo dell'elettricità per creare un'estensione per il browser in modo da poter avere un promemoria direttamente nel proprio browser su quanto sia pesante l'utilizzo di elettricità nella propria regione. L'utilizzo di questa estensione ad hoc aiuterà a valutare le proprie attività in base a queste informazioni.

![videata dell'estensione](../../extension-screenshot.png)

## Per Iniziare

E' necessario che [npm](https://npmjs.com) sia installato. Scaricare una copia di questo codice in una cartella del proprio computer.

Installare tutti i pacchetti richiesti:

```
npm install
```

Creare l'estensione da webpack

```
npm run build
```

Per installare su Edge, utilizzare il menu "tre punti" nell'angolo in alto a destra del browser per trovare il pannello Estensioni. Se non già attiva, attivare la Modalità sviluppatore (in basso a sinistra). Selezionare "Carica decompressa" per caricare una nuova estensione. Aprire la cartella "dist" al prompt e l'estensione verrà caricata. Per usarla, si avrà bisogno di una chiave API per l'API di CO2 Signal (si può[ ottenere qui via e-mail](https://www.co2signal.com/) - inserire la propria e-mail nella casella in questa pagina) e il [codice per la propria regione](http://api.electricitymap.org/v3/zones) corrispondente alla [mappa elettrica](https://www.electricitymap.org/map) (a Boston, ad esempio,  "US-NEISO").

![installazione](../../install-on-edge.png)

Una volta che la chiave API e la regione sono state inserite nell'interfaccia dell'estensione, il punto colorato nella barra dell'estensione del browser dovrebbe cambiare per riflettere l'utilizzo di energia della regione e fornire un puntatore su quali attività ad alto consumo energetico sarebbero appropriate da eseguire. Il concetto alla base di questo sistema a "punti"  è stato fornito dall' [estensione Energy Lollipop](https://energylollipop.com/) per le emissioni della California.

