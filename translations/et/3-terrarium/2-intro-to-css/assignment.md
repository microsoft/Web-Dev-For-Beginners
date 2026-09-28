# CSS ümberkujundamise ülesanne

## Eesmärk

Muuda oma terrariumiprojekt kasutama kaasaegseid CSS-i paigutustehnikaid! Uuenda praegune absoluutse positsioneerimise lähenemine, et rakendada **Flexboxi** või **CSS Gridi** parema hooldatavuse ja reageerimisvõimega disaini saavutamiseks. See ülesanne kutsub sind rakendama kaasaegseid CSS-i standardeid, säilitades samal ajal oma terrariumi visuaalse atraktiivsuse.

Mõistmine, millal ja kuidas kasutada erinevaid paigutusmeetodeid, on kaasaegse veebiarenduse oluline oskus. See harjutus ühendab traditsioonilised positsioneerimistehnikad kaasaegsete CSS-i paigutussüsteemidega.

## Ülesande juhised

### 1. faas: analüüs ja planeerimine
1. **Vaata üle oma praegune terrariumi kood** - Tuvasta, millised elemendid kasutavad hetkel absoluutpositsioneerimist  
2. **Vali oma paigutusmeetod** - Otsusta, kas Flexbox või CSS Grid sobib sinu disainieesmärkidega paremini  
3. **Joonista oma uus paigutusstruktuur** - Planeeri, kuidas konteinerid ja taimede elemendid organiseeritakse  

### 2. faas: rakendamine
1. **Loo uus versioon** oma terrariumiprojektist eraldi kaustas  
2. **Uuenda HTML-struktuuri** vastavalt vajadusele, et toetada valitud paigutusmeetodit  
3. **Ümberkujunda CSS**, kasutades Flexboxi või CSS Gridi absoluutpositsioneerimise asemel  
4. **Säilita visuaalne järjepidevus** - Veendu, et taimed ja terrariumi klaaspurk oleksid samades positsioonides  
5. **Rakenda reageerimisvõime** - Sinu paigutus peaks sujuvalt kohanema erinevate ekraanisuurustega  

### 3. faas: testimine ja dokumentatsioon
1. **Cross-browser testimine** - Kontrolli, et sinu disain töötab Chrome’is, Firefoxis, Edges ja Safaris  
2. **Reageerimisvõime testimine** - Vaata oma paigutust mobiilis, tahvelarvutis ja lauaarvuti ekraanidel  
3. **Dokumentatsioon** - Lisa CSS-i kommentaarid, mis selgitavad paigutuse valikuid  
4. **Ekraanipildid** - Tee pildid oma terrariumist erinevates brauserites ja ekraanisuurustes  

## Tehnilised nõuded

### Paigutuse rakendamine
- **Vali ÜKS**: rakenda kas Flexbox VõI CSS Grid (mitte mõlemat sama elementide jaoks)  
- **Reageerimisvõimeline disain**: kasuta suhtelisi ühikuid (`rem`, `em`, `%`, `vw`, `vh`), mitte fikseeritud pikslit  
- **Juurdepääsetavus**: säilita korralik semantiline HTML-struktuur ja alt-tekst  
- **Koodikvaliteet**: kasuta järjepidevaid nimetamisstandardeid ja korralda CSS loogiliselt  

### Kaasaegsed CSS-i funktsioonid, mida lisada
```css
/* Example Flexbox approach */
.terrarium-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}

.plant-containers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

/* Example Grid approach */
.terrarium-layout {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}
```

### Brauserite toe nõuded
- **Chrome/Edge**: Viimased 2 versiooni  
- **Firefox**: Viimased 2 versiooni  
- **Safari**: Viimased 2 versiooni  
- **Mobiilibrauserid**: iOS Safari, Chrome Mobile  

## Töö tulemused

1. **Uuendatud HTML-fail** parem semantiline struktuur  
2. **Ümberkujundatud CSS-fail** kasutades kaasaegseid paigutustehnikaid  
3. **Ekraanipiltide kogu**, mis näitab cross-browser ühilduvust:  
   - Lauaarvuti vaade (1920x1080)  
   - Tahvelarvuti vaade (768x1024)  
   - Mobiilvaade (375x667)  
   - Vähemalt 2 erinevat brauserit  
4. **README.md fail**, mis dokumenteerib:  
   - Sinu paigutuse valik (Flexbox vs Grid) ja põhjendused  
   - Ümberkujundamise käigus esinenud väljakutsed  
   - Brauserite ühilduvuse märkused  
   - Käsud koodi jooksutamiseks  

## Hindamiskriteeriumid

| Kriteerium | Näidissobiv (4) | Pädev (3) | Arenev (2) | Algusjärgus (1) |
|------------|-----------------|-----------|------------|-----------------|
| **Paigutuse rakendamine** | Meistriklass Flexbox/Gridi kasutamisel täiustatud funktsioonidega; täielikult reageeriv | Õige rakendus hea reageerimiskäitumisega | Põhiline rakendus väikeste reageerimisprobleemidega | Ebatäielik või vale paigutuse rakendus |
| **Koodi kvaliteet** | Puhas, hästi organiseeritud CSS tähendusrikaste kommentaaride ja järjepideva nimetusega | Hea organiseeritus mõne kommentaariga | Piisav organiseeritus väheste kommentaaridega | Kehv organiseeritus; raskesti mõistetav |
| **Cross-browser ühilduvus** | Täiuslik järjepidevus kõigis nõutud brauserites ekraanipiltidega | Hea ühilduvus väikeste dokumenteeritud erinevustega | Mõned ühilduvusprobleemid, mis ei mõjuta funktsionaalsust | Suured ühilduvusprobleemid või puuduv testimine |
| **Reageerimisvõime** | Erakordne mobiilist lähtuv lähenemine sujuvate murdepunktidega | Hea reageerimiskäitumine sobivate murdepunktidega | Põhilised reageerimisfunktsioonid väikeste paigutusvigadega | Piiratud või katkenud reageerimiskäitumine |
| **Dokumentatsioon** | Ulatuslik README üksikasjalike selgituste ja arusaamadega | Hea dokumentatsioon, mis hõlmab kõiki vajalikke elemente | Põhiline dokumentatsioon väheste selgitustega | Puudulik või puuduv dokumentatsioon |

## Kasulikud ressursid

### Paigutusmeetodi juhendid
- 📖 [Täielik juhend Flexboxile](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  
- 📖 [Täielik juhend CSS Gridile](https://css-tricks.com/snippets/css/complete-guide-grid/)  
- 📖 [Flexbox vs Grid - vali õige tööriist](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)  

### Brauserite testimise tööriistad
- 🛠️ [Brauseri arendustööriistade reageerimisvõime režiim](https://developer.chrome.com/docs/devtools/device-mode/)  
- 🛠️ [Can I Use - Funktsioonitugi](https://caniuse.com/)  
- 🛠️ [BrowserStack - mitme brauseri testimine](https://www.browserstack.com/)  

### Koodikvaliteedi tööriistad
- ✅ [CSS valideerija](https://jigsaw.w3.org/css-validator/)  
- ✅ [HTML valideerija](https://validator.w3.org/)  
- ✅ [WebAIM kontrastsuse kontrollija](https://webaim.org/resources/contrastchecker/)  

## Boonusväljakutsed

🌟 **Täiustatud paigutused**: Rakenda mõlemaid, nii Flexboxi kui ka Gridi erinevates disaini osades  
🌟 **Animatsioonide lisamine**: Lisa CSS-i üleminekuid või animatsioone, mis töötavad uue paigutusega  
🌟 **Tume režiim**: Rakenda CSS-i kohandatud omadustel põhinev teemavahetaja  
🌟 **Konteineri päringud**: Kasuta kaasaegseid konteineri päringu tehnikaid komponendi tasemel reageerimiseks  

> 💡 **Pea meeles**: eesmärk ei ole mitte ainult see, et see tööle hakkaks, vaid mõista, MIKS sinu valitud paigutusmeetod on just selle konkreetse disainiprobleemi parim lahendus!

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Vastutusest loobumine**:
See dokument on tõlgitud AI-tõlketeenuse [Co-op Translator](https://github.com/Azure/co-op-translator) abil. Kuigi püüame tagada täpsust, palun pange tähele, et automaatsed tõlked võivad sisaldada vigu või ebatäpsusi. Originaaldokument selle emakeeles tuleb lugeda autoriteetse allikana. Tähtsa teabe puhul soovitatakse kasutada professionaalset inimtõlget. Me ei vastuta selle tõlke kasutamisest tulenevate arusaamatuste ega valesti tõlgenduste eest.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->