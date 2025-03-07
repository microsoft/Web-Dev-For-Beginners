# Introduzione ai Linguaggi di Programmazione e agli Strumenti Necessari

Questa lezione tratta delle basi dei linguaggi di programmazione. Gli argomenti trattati qui si applicano alla maggior parte dei moderni linguaggi di programmazione di oggi. Nella sezione 'Strumenti Necessari' conoscerete utili software che vi aiuteranno come programmatore.

![Introduzione alla  Programmazione](/sketchnotes/webdev101-programming.png)
> Sketchnote di [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz Pre-Lezione
[Quiz Pre-Lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1?loc=it)

## Introduzione

In questa lezione tratteremo di:

- Cos'è la programmazione?
- Tipi di linguaggi di programmazione
- Elementi base di un programma
- Software utili e strumenti per lo sviluppatore professionista

## Cos'è la programmazione?

La programmazione (conosciuta anche come scrivere codice) è il processo con il quale si scrivono istruzioni a un dispositivo, tipo un computer o dispositivo mobile. Queste istruzioni vengono scritte con un linguaggio di programmazione, quindi vengono interpretate dal dispositivo. Ci si può riferire a questo insieme di istruzioni in vari modi, ma *programma*, *programma di computer*, *applicazione (app)*, ed *eseguibile* sono alcuni dei nomi più conosciuti.

Un *programma* può essere qualsiasi cosa che sia scritta con codice; siti web, giochi, app per telefono sono programmi. Mentre è possibile creare un programma senza scrivere codice, la logica sottostante viene interpretata dal dispositivo e quella logica è molto probabile che sia stata scritta con codice. Un programma che sta *girando* o sta*eseguendo codice* sta effettuando istruzioni. Il dispositivo con il quale state attualmente leggendo questa lezione sta eseguendo un programma per stamparla sul vostro schermo.

✅ Fate una piccola ricerca: quale si ritiene sia stato il primo programmatore al mondo?

## Linguaggi di programmazione

I linguaggi di programmazione servono uno scopo principale: fare in modo che gli sviluppatori costruiscano istruzioni da inviare a un dispositivo. I dispositivi possono comprendere solo codice binario (gli 1 e gli 0), e per la *maggior parte* degli sviluppatori questo non è un modo molto efficace di comunicare. I linguaggi di programmazione sono un veicolo per comunicare tra umani e computer.

I linguaggi di programmazione sono disponibili in diversi formati e possono servire per scopi diversi. Ad esempio, JavaScript è principalmente usato per applicazioni web, mentre Bash è principalmente usato per sistemi operativi.

I *linguaggi a basso livello* richiedono in genere a un dispositivo meno passi per interpretare le istruzioni rispetto ai *linguaggi di alto livello*. Tuttavia ciò che rende popolari i *linguaggi di alto livello* è la loro leggibilità e supporto. JavaScript è considerato un *linguaggio di alto livello*

Il codice seguente illustra le differenze tra un linguaggio ad alto livello come JavaScript e un linguaggio a basso livello come il codice assembly ARM.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Credeteci o no, *stanno entrambi facendo la stessa cosa*: stampare una successione di Fibonacci fino a 10.

✅ Una successione di Fibonacci è [definita](https://www.wikiwand.com/it/Successione_di_Fibonacci) come un insieme di numeri tali che ciascun numero è la somma dei due precedenti, a partire da 0 e 1.

## Elementi di un programma

Una singola istruzione in un programma è detta *istruzione* e in genere avrà un carattere o spaziatura di riga che identifica dove essa finisce, o *termina*. Il modo nel quale un programma termina varia per ogni linguaggio.

La maggior parte dei programmi dipende dall'utilizzo di dati ricevuti da un utente o altrove, dove le istruzioni potrebbero dipendere da dati per essere effettuate. I dati possono modificare il comportamento di un programma, quindi i linguaggi di programmazione sono dotati della possibilità di conservare temporaneamente dati che possono essere usati successivamente. Questi dati sono detti *variabili*. Le variabili sono istruzioni che richiedono a un dispositivo di salvare dati nella sua memoria. Le variabili nei programmi sono simili a quelle dell'algebra, dove devono avere un nome univoco e il loro valore potrebbe mutare nel tempo.

Esiste la possibilità che alcune istruzioni non saranno eseguite da un dispositivo. In genere è una cosa voluta quando scritta dallo sviluppatore oppure per caso quando si verifica un errore inaspettato. Questo tipo di controllo di un'applicazione la rende più robusta e mantenibile. In genere queste modifiche nel controllo accadono quando si verificano certe condizioni. Una istruzione comune nei moderni linguaggi di programmazione per controllare come viene eseguito un programma è `if..else`.

✅ Saprete di più circa questo tipo di istruzione nelle lezioni successive

## Strumenti Necessari

[![Strumenti Necessari](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

In questa sezione conoscerete qualche software che potreste trovare molto utile per iniziare il vostro viaggio come programmatori professionisti.

Un *ambiente di sviluppo* è un insieme univoco di strumenti e caratteristiche che uno sviluppatore usa spesso quando scrive software. Alcuni di questi strumenti sono stati personalizzati per specifiche necessità dello sviluppatore e potrebbero cambiare nel tempo se lo sviluppatore cambia le priorità dei progetti di lavoro o personali, oppure quando usa un diverso linguaggio di programmazione. Gli ambienti di sviluppo sono unici tanto quanto gli sviluppatori che li utilizzano.

### Editor

Uno degli strumenti cruciali per lo sviluppo del software è l'editor. Gli editor sono dove scrivete il vostro codice e talvolta dove eseguirete il vostro codice.

Gli sviluppatori si affidano agli editor per qualche altra ragione aggiuntiva:

- *Debugging* La scoperta di bug ed errori seguendo passo passo il codice, riga per riga. Alcuni editor hanno capacita di debugging o possono essere personalizzate e aggiunte per linguaggi di programmazione specifici.
- *Evidenziazione della Sintassi* Aggiunge colorazione e formattazione al testo del codice, rendendone più facile la lettura. La maggior parte degli editor consente la personalizzazione dell'evidenziazione della sintassi.
- *Estensioni e integrazioni* Aggiunte specializzate per gli sviluppatori, dagli sviluppatori, per accedere a strumenti addizionali che non sono incluse come caratteristiche base dell'editor. Ad esempio molti sviluppatori hanno bisogno di un modo per documentare il proprio codice e spiegare come funziona e installeranno una estensione in grado di verificare la sintassi per trovare errori di ortografia. La maggior parte di queste aggiunte sono rivolte all'uso per un editor specifico, e molti editor hanno un modo per ricercare le estensioni disponibili.
- *Personalizzazione* La maggior parte degli editor sono estremamente personalizzabili, e ciascun sviluppatore avrà il suo proprio ambiente di programmazione in grado di soddisfare le sue necessità. Molti consentono agli sviluppatori di creare le loro proprie estensioni.

#### Popolari Editor ed Estensioni per lo Sviluppo Web

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### Browser

Un altro strumento cruciale è il browser. Gli sviluppatori web fanno affidamento sul browser per osservare come il proprio codice viene eseguito nel web, viene anche usato per vedere elementi grafici di una pagina web che sono scritti nell'editor, come HTML.

Molti browser dispongono di *strumenti per lo sviluppatore* (DevTools) che contengono un insieme di caratteristiche e informazioni per aiutare gli sviluppatori nella raccolta e cattura di importanti approfondimenti in merito alle proprie applicazioni. Ad esempio: se una pagina web ha errori, è talvolta utile sapere dove questi errori sono capitati. DevTools in un browser può essere configurato per catturare queste informazioni.

#### Popolari Browser e DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://sviluppatori.google.com/web/tools/chrome-devtools/)
- [Firefox](https://sviluppatore.mozilla.org/docs/Tools)

### Strumenti da Riga di Comando

Alcuni sviluppatori preferiscono una visione meno grafica per i propri compiti quotidiani e si appoggiano alla riga di comando per completarli. Lo sviluppo del codice richiede un significativo ammontare di digitazione e taluni sviluppatori preferiscono non interrompere il proprio flusso sulla tastiere e usano scorciatoie da tastiera per spostarsi tra finestre del desktop, lavorare su file diversi, e usare strumenti. La maggior parte dei compiti può essere completata con un mouse, ma un vantaggio dell'usare la riga di comando è che molto può essere fatto con essa senza dover passare dalla tastiera al mouse e viceversa. Un altro vantaggio è che è configurabile ed è possibile salvare la propria configurazione, modificarla successivamente, e anche importarla su nuove macchine di sviluppo. Poiché gli ambienti di sviluppo sono così particolari per ciascun sviluppatore, alcuni eviteranno l'uso della riga di comando, altri la utilizzeranno esclusivamente e altri preferiranno mescolare le due tattiche.

### Popolari Alternative per Riga di Comando

Le alternative per la riga di comando differiriscono in base al sistema operativo che si sta usando.

*💻 = preinstallate nel sistema operativo.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos/?view=powershell-7&WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux/?view=powershell-7&WT.mc_id=academic-77807-sagibbon)

#### Popolari Strumenti da Riga di Comando

- [Git](https://git-scm.com/) (💻 nella maggior parte dei sistemi operativi)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentazione

Quando uno sviluppatore vuole imparare qualcosa di nuovo, per la maggior parte delle volte farà riferimento alla documentazione per imparare come usarlo. Gli sviluppatori fanno spesso affidamento alla documentazione per essere guidati all'utilizzo corretto degli strumenti e dei linguaggi, oltre a ottenere una più profonda conoscenza del funzionamento.

#### Popolari Documentazioni sullo Sviluppo Web

- [Mozilla sviluppatore Network (MDN)](https://sviluppatore.mozilla.org/docs/Web), di Mozilla, editori di [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), di Google, editori di [Chrome](https://www.google.com/chrome/)
- [Documenti per sviluppatori di Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), per [Microsoft Edge](https://www.microsoft.com/edge)

✅ Fate qualche ricerca: Ora che sapete le basi per un ambiente di sviluppo web, confrontate e rilevate le differenze rispetto all'ambiente di sviluppo di un web designer.

---

## 🚀 Sfida

Confrontate alcuni linguaggi di programmazione. Quali sono i tratti univoci di  JavaScript rispetto a Java? E COBOL rispetto a Go?

## Quiz Post-Lezione
[Quiz Post-Lezione](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2?loc=it)

## Revisione e Auto Istruzione

Studiate un poco sui diversi linguaggi di programmazione a disposizione di un programmatore. Cercate di scrivere una riga in un linguaggio, poi rifatelo con altri due. Cosa avete imparato?

## Compito 

[Leggere la documentazione](assignment.md)
