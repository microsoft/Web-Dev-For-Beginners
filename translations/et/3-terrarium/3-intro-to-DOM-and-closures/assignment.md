<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "947ca5ce7c94aee9c7de7034e762bc17",
  "translation_date": "2026-01-08T09:51:57+00:00",
  "source_file": "3-terrarium/3-intro-to-DOM-and-closures/assignment.md",
  "language_code": "et"
}
-->
# DOM elementi uurimise ülesanne

## Ülevaade

Nüüd, kui oled ise DOM-i manipuleerimise jõudu kogenud, on aeg avastada DOM-i liideste laiemat maailma. See ülesanne süvendab sinu arusaamist sellest, kuidas erinevad veebitehnoloogiad suhtlevad DOM-iga, mitte ainult elementide lohistamise kaudu.

## Õpieesmärgid

Selle ülesande täitmisel sa:
- **Uurid** ja mõistad põhjalikult kindlat DOM-i liidest
- **Analüüsid** reaalse maailma DOM-i manipuleerimise rakendusi
- **Ühendad** teoreetilisi mõisteid praktiliste rakendustega
- **Arendad** oskusi tehnilises dokumenteerimises ja analüüsis

## Juhised

### Samm 1: Vali oma DOM-i liides

Külasta MDN-i põhjalikku [DOM-i liideste nimekirja](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) ja vali üks liides, mis sind huvitab. Mitmekesistamiseks võid valida järgmistest kategooriatest:

**Algajale sobivad valikud:**
- `Element.classList` – CSS-klasside dünaamiline haldamine
- `Document.querySelector()` – Täpsem elementide valimine
- `Element.addEventListener()` – Sündmuste käsitlemine peale pointer-sündmuste
- `Window.localStorage` – Kliendipoolne andmete salvestamine

**Kesktaseme väljakutsed:**
- `Intersection Observer API` – Elementide nähtavuse tuvastamine
- `MutationObserver` – DOM-i muutuste jälgimine
- `Drag and Drop API` – Alternatiiv meie pointeril baseeruvale lähenemisele
- `Geolocation API` – Kasutaja asukoha määramine

**Edasijõudnutele:**
- `Web Components` – Kohandatud elemendid ja shadow DOM
- `Canvas API` – Programmihalduslik graafika
- `Web Workers` – Taustaprotsessid
- `Service Workers` – Võrguta funktsionaalsus

### Samm 2: Uuri ja dokumenteeri

Koosta põhjalik analüüs (300-500 sõna), mis sisaldab:

#### Tehniline ülevaade
- **Määra**, mida sinu valitud liides teeb selgelt ja algajasõbralikult
- **Selgita**, millised on peamised meetodid, omadused või sündmused
- **Kirjelda**, milliseid probleeme see on loodud lahendama

#### Reaalse maailma rakendus
- **Leia** veebisait, mis kasutab sinu valitud liidest (jalananalüüsi või uurides näiteid)
- **Dokumenteeri** konkreetne rakendus koos koodilõikudega, kui võimalik
- **Analüüsi**, miks arendajad selle lähenemise valisid
- **Selgita**, kuidas see parandab kasutajakogemust

#### Praktiline rakendus
- **Võrdle** oma liidest meie terrariumi projekti kasutatud tehnikatega
- **Paku** ideid, kuidas sinu liides võiks terrariumi funktsionaalsust parandada või laiendada
- **Tuvasta** teised projektid, kus see liides võiks kasulik olla

### Samm 3: Koodinäide

Lisa lihtne ja toimiv koodinäide, mis demonstreerib sinu liidese kasutamist. See peaks olema:
- **Funktsionaalne** – kood töötab tõeliselt testimisel
- **Kommenteeritud** – selgita, mida iga osa teeb
- **Asjakohane** – seotud realistliku kasutusjuhtumiga
- **Algajasõbralik** – arusaadav veebiarendusega alustavale inimesele

## Töö esitamise vorming

Struktureeri oma töö selgete peatükkidega:

```markdown
# [Interface Name] DOM Investigation

## What It Does
[Technical overview]

## Real-World Example
[Website analysis and implementation details]

## Code Demonstration
[Your working example with comments]

## Reflection
[How this connects to our terrarium project and future applications]
```

## Hindamiskriteeriumid

| Kriteerium | Suurepärane (A) | Hea (B) | Arenev (C) | Vajab parandamist (D) |
|------------|-----------------|----------|-------------|----------------------|
| **Tehniline arusaam** | Näitab sügavat mõistmist, täpsed seletused ja õige terminoloogia | Näitab head mõistmist enamjaolt täpsete seletustega | Põhiline arusaam, mõned eksimused | Piiratud arusaamine ja tõsised vead |
| **Reaalse maailma analüüs** | Tuvastab ja põhjalikult analüüsib tegelikku rakendust konkreetsete näidetega | Leiab reaalse näite adekvaatse analüüsiga | Leiab näite, kuid analüüs on pindmine | Ebamäärane või ebatäpne seos reaalse maailmaga |
| **Koodinäide** | Töötav, hästi kommenteeritud kood, mis selgelt demonstreerib liidest | Funktsionaalne kood adekvaatsete kommentaaridega | Kood töötab, kuid dokumentatsioon vajab parandamist | Kood on vigane või selgitused puudulikud |
| **Kirjutise kvaliteet** | Selge, kaasahaarav kirjutis, korralik struktuur ja tehniline suhtlus | Hästi organiseeritud, hea tehniline kirjutamine | Piisav organiseeritus ja selgus | Kehv organiseeritus või ebaselge suhtlus |
| **Kriitiline mõtlemine** | Teeb mõistlikke seoseid ja pakub uuenduslikke rakendusi | Näitab head analüütilist mõtlemist ja asjakohaseid seoseid | Mõningane analüüs, võiks olla põhjalikum | Piiratud kriitilise mõtlemise tõendid |

## Edu soovitused

**Uurimisstrateegiad:**
- **Alusta** MDN-i dokumentatsioonist usaldusväärse info saamiseks
- **Otsi** koodinäiteid GitHubist või CodePenist
- **Kontrolli** populaarseid veebisaite brauseri arendustööriistadega
- **Vaata** õpetusvideosid visuaalseks selgituseks

**Kirjutamisjuhised:**
- **Kasuta** oma sõnu, mitte dokumentatsiooni kopeerimist
- **Lisa** spetsiifilisi näiteid ja koodilõike
- **Selgita** tehnilisi mõisteid nagu õpetaksid sõbrale
- **Ühenda** oma liides laiemate veebiarenduse mõistetega

**Koodinäite ideed:**
- **Loo** lihtne demo, mis näitab liidese põhifunktsioone
- **Tugevda** terrariumi projekti kontseptsioonide peal, kui asjakohane
- **Fokusseeri** funktsionaalsusele, mitte visuaalsele kujundusele
- **Testi** oma koodi, et tagada õige toimimine

## Töö esitamise tähtaeg

[Siin sisesta tähtaeg]

## Küsimused?

Kui vajad täiendavaid selgitusi selle ülesande kohta, ära kõhkle küsida! See uurimus süvendab sinu arusaamist, kuidas DOM võimaldab igapäevaseid interaktiivseid veebikogemusi.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud AI tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame täpsuse tagamiseks, palume arvestada, et automatiseeritud tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Olulise teabe puhul soovitatakse professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tingitud arusaamatuste ega tõlgenduste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->