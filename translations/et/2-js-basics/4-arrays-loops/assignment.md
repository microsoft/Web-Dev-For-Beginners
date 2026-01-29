# Massiivid ja Tsüklid Ülesanne

## Juhised

Täida järgmised harjutused, et praktiseerida massiivide ja tsüklite kasutamist. Iga harjutus toetub tunni materjalile ja julgustab rakendama erinevaid tsükli tüüpe ja massiivi meetodeid.

### Harjutus 1: Numbrimustri Generaator
Loo programm, mis kuvab iga 3. numbri vahemikus 1–20 ja prindib selle konsooli.

**Nõuded:**
- Kasuta `for` tsüklit kohandatud inkremendiga
- Kuvada numbrid kasutajasõbralikus formaadis
- Lisa kirjeldavad kommentaarid, mis selgitavad loogikat

**Oodatav Tulem:**  
```
3, 6, 9, 12, 15, 18
```
  
> **Nipp:** Muuda oma for tsükli iteratsiooni-väljendit, et vahele jätta numbreid.

### Harjutus 2: Massiivi Analüüs
Loo massiiv vähemalt 8 erinevast numbrist ja kirjuta funktsioonid andmete analüüsimiseks.

**Nõuded:**
- Loo massiiv nimega `numbers`, mis sisaldab vähemalt 8 väärtust
- Kirjuta funktsioon `findMaximum()`, mis tagastab suurima numbri
- Kirjuta funktsioon `findMinimum()`, mis tagastab väikseima numbri  
- Kirjuta funktsioon `calculateSum()`, mis tagastab kõikide numbrite summa  
- Testi iga funktsiooni ja kuva tulemused

**Lisaväljakutse:** Kirjuta funktsioon, mis leiab massiivist teise suurima numbri.

### Harjutus 3: Stringide Massiivi Töötlemine
Loo oma lemmikfilmide/raamatute/laulude massiiv ja harjuta erinevate tsükli tüüpidega.

**Nõuded:**
- Loo massiiv vähemalt 5 stringväärtusega
- Kasuta traditsioonilist `for` tsüklit, et kuvada üksused numbritega (1. Üksuse Nimi)
- Kasuta `for...of` tsüklit, et kuvada üksused SUURTES TÄHTEDES
- Kasuta `forEach()` meetodit, et lugeda ja kuvada kõigi tähemärkide kogusummat

**Näidistulemus:**  
```
Traditional for loop:
1. The Matrix
2. Inception
3. Interstellar

For...of loop (uppercase):
THE MATRIX
INCEPTION
INTERSTELLAR

Character count:
Total characters across all titles: 42
```
  
### Harjutus 4: Andmete Filtreerimine (Edasijõudnutele)
Loo programm, mis töötleb massiivi õpilastest objektidega.

**Nõuded:**
- Loo massiiv vähemalt 5 õpilase objektiga omadustega: `name`, `age`, `grade`
- Kasuta tsükleid, et leida õpilased, kes on 18 või vanemad
- Arvuta kõigi õpilaste keskmine hinne
- Loo uus massiiv, mis sisaldab ainult õpilasi, kelle hinnang on üle 85

**Näidisstruktuur:**  
```javascript
const students = [
  { name: "Alice", age: 17, grade: 92 },
  { name: "Bob", age: 18, grade: 84 },
  // Lisa rohkem õpilasi...
];
```
  
## Koodi Testimine

Testi oma programme järgmiselt:  
1. Käivita iga harjutus brauseri konsoolis  
2. Veendu, et väljund vastab oodatule  
3. Testi erinevate andmekogumitega  
4. Kontrolli, et su kood suudab käsitleda äärejuhtumeid (tühjad massiivid, ühe elemendi massiivid)

## Esitamise Juhised

Lisa oma esitusele:  
- Igale harjutusele hästi kommenteeritud JavaScripti kood  
- Kuvatõmmised või tekst väljund, mis näitab programmi käivitumist  
- Lühike seletus, millise tsükli tüübi valisid iga ülesande jaoks ja miks

## Hindamiskriteeriumid

| Kriteerium | Väga Hea (3 punkti) | Piisav (2 punkti) | Vajab Parandamist (1 punkt) |
| -------- | -------------------- | ------------------- | --------------------------- |
| **Funktsionaalsus** | Kõik harjutused õigesti tehtud koos lisaväljakutsetega | Kõik nõutud harjutused töötavad korralikult | Mõned harjutused on puudulikud või sisaldavad vigu |
| **Koodi Kvaliteet** | Puhtalt kirjutatud, hästi organiseeritud kood, kirjeldavate muutujanimedega | Kood töötab, aga võiks olla selgem | Kood on segane või raske mõista |
| **Kommentaarid** | Ulatuslikud kommentaarid, mis selgitavad loogikat ja valikuid | Põhikommantaarid olemas | Vähe või ei ole kommentaare |
| **Tsüklite Kasutus** | Näitab arusaamist erinevatest tsükli tüüpidest sobivalt | Kasutab tsükleid õigesti, kuid vähese mitmekesisusega | Tsüklite kasutamine vale või ebaefektiivne |
| **Testimine** | Tõendid põhjalikust testimisest paljude stsenaariumitega | Põhitestimine tehtud | Vähe tõendeid testimise kohta |

## Mõtiskluse Küsimused

Pärast harjutuste lõpetamist mõtle:  
1. Milline tsükli tüüp tundus kõige loomulikum ja miks?  
2. Milliseid väljakutseid kogesid massiividega töötades?  
3. Kuidas saab neid oskusi rakendada päris veebiarenduse projektides?  
4. Mida teeksid teisiti, kui peaksid oma koodi jõudluse parandamiseks optimeerima?

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud kasutades tehisintellektil põhinevat tõlketeenust [Co-op Translator](https://github.com/Azure/co-op-translator). Kuigi püüame tagada täpsust, palun arvestage, et automatiseeritud tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleks pidada autoriteetseks allikaks. Olulise info puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta ühegi arusaamatuse või valesti mõistmise eest, mis võivad tuleneda selle tõlke kasutamisest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->