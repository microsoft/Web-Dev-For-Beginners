# Zadatak za refaktoriranje CSS-a

## Cilj

Transformirajte svoj projekt terarija koristeći moderne tehnike rasporeda u CSS-u! Refaktorirajte trenutni pristup apsolutnog pozicioniranja kako biste implementirali **Flexbox** ili **CSS Grid** za održiviji i responzivniji dizajn. Ovaj zadatak izaziva vas da primijenite moderne CSS standarde, a pritom zadržite vizualnu privlačnost vašeg terarija.

Razumijevanje kada i kako koristiti različite metode rasporeda ključna je vještina za moderni web razvoj. Ova vježba povezuje tradicionalne tehnike pozicioniranja s suvremenim CSS sustavima rasporeda.

## Upute za zadatak

### Faza 1: Analiza i planiranje
1. **Pregledajte svoj trenutni kod terarija** - Identificirajte elemente koji trenutno koriste apsolutno pozicioniranje
2. **Odaberite metodu rasporeda** - Odlučite hoće li Flexbox ili CSS Grid bolje odgovarati vašim dizajnerskim ciljevima
3. **Skicirajte novu strukturu rasporeda** - Isplanirajte kako će se organizirati spremnici i elementi biljaka

### Faza 2: Implementacija
1. **Kreirajte novu verziju** svog projekta terarija u zasebnoj mapi
2. **Ažurirajte HTML strukturu** prema potrebi kako bi podržavala odabranu metodu rasporeda
3. **Refaktorirajte CSS** kako biste koristili Flexbox ili CSS Grid umjesto apsolutnog pozicioniranja
4. **Održavajte vizualnu dosljednost** - Osigurajte da vaše biljke i staklenka terarija izgledaju na istim pozicijama
5. **Implementirajte responzivno ponašanje** - Vaš raspored treba se prilagoditi različitim veličinama ekrana

### Faza 3: Testiranje i dokumentacija
1. **Testiranje na različitim preglednicima** - Provjerite radi li vaš dizajn u Chromeu, Firefoxu, Edgeu i Safariju
2. **Testiranje responzivnosti** - Provjerite raspored na mobilnim uređajima, tabletima i stolnim računalima
3. **Dokumentacija** - Dodajte komentare u svoj CSS objašnjavajući vaše odluke o rasporedu
4. **Snimke zaslona** - Zabilježite izgled vašeg terarija u različitim preglednicima i veličinama ekrana

## Tehnički zahtjevi

### Implementacija rasporeda
- **Odaberite JEDNU opciju**: Implementirajte ili Flexbox ILI CSS Grid (ne oboje za iste elemente)
- **Responzivni dizajn**: Koristite relativne jedinice (`rem`, `em`, `%`, `vw`, `vh`) umjesto fiksnih piksela
- **Pristupačnost**: Održavajte pravilnu semantičku HTML strukturu i alt tekst
- **Kvaliteta koda**: Koristite dosljedne konvencije imenovanja i logično organizirajte CSS

### Moderne značajke CSS-a koje treba uključiti
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

### Zahtjevi za podršku preglednika
- **Chrome/Edge**: Zadnje 2 verzije
- **Firefox**: Zadnje 2 verzije  
- **Safari**: Zadnje 2 verzije
- **Mobilni preglednici**: iOS Safari, Chrome Mobile

## Dostava

1. **Ažurirana HTML datoteka** s poboljšanom semantičkom strukturom
2. **Refaktorirana CSS datoteka** koja koristi moderne tehnike rasporeda
3. **Kolekcija snimki zaslona** koja pokazuje kompatibilnost među preglednicima:
   - Prikaz na stolnom računalu (1920x1080)
   - Prikaz na tabletu (768x1024) 
   - Prikaz na mobilnom uređaju (375x667)
   - Najmanje 2 različita preglednika
4. **README.md datoteka** koja dokumentira:
   - Vaš odabir rasporeda (Flexbox vs Grid) i razloge
   - Izazove s kojima ste se suočili tijekom refaktoriranja
   - Napomene o kompatibilnosti preglednika
   - Upute za pokretanje vašeg koda

## Rubrika za ocjenjivanje

| Kriterij | Izvrsno (4) | Dobro (3) | Osnovno (2) | Početno (1) |
|----------|-------------|-----------|-------------|-------------|
| **Implementacija rasporeda** | Majstorska upotreba Flexbox/Grid s naprednim značajkama; potpuno responzivno | Ispravna implementacija s dobrim responzivnim ponašanjem | Osnovna implementacija s manjim problemima responzivnosti | Nepotpuna ili netočna implementacija rasporeda |
| **Kvaliteta koda** | Čist, dobro organiziran CSS s smislenim komentarima i dosljednim imenovanjem | Dobra organizacija s nekim komentarima | Osnovna organizacija s minimalnim komentarima | Loša organizacija; teško razumljivo |
| **Kompatibilnost među preglednicima** | Savršena dosljednost u svim zahtijevanim preglednicima sa snimkama zaslona | Dobra kompatibilnost s manjim razlikama koje su dokumentirane | Neki problemi s kompatibilnošću koji ne narušavaju funkcionalnost | Veliki problemi s kompatibilnošću ili nedostatak testiranja |
| **Responzivni dizajn** | Izvanredan pristup "mobile-first" s glatkim prijelazima | Dobro responzivno ponašanje s odgovarajućim prijelazima | Osnovne responzivne značajke s nekim problemima rasporeda | Ograničeno ili neispravno responzivno ponašanje |
| **Dokumentacija** | Sveobuhvatan README s detaljnim objašnjenjima i uvidima | Dobra dokumentacija koja pokriva sve potrebne elemente | Osnovna dokumentacija s minimalnim objašnjenjima | Nepotpuna ili nedostajuća dokumentacija |

## Korisni resursi

### Vodiči za metode rasporeda
- 📖 [Potpuni vodič za Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- 📖 [Potpuni vodič za CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- 📖 [Flexbox vs Grid - Odaberite pravi alat](https://blog.webdevsimplified.com/2022-11/flexbox-vs-grid/)

### Alati za testiranje preglednika
- 🛠️ [Responsive Mode u DevTools pregledniku](https://developer.chrome.com/docs/devtools/device-mode/)
- 🛠️ [Can I Use - Podrška za značajke](https://caniuse.com/)
- 🛠️ [BrowserStack - Testiranje među preglednicima](https://www.browserstack.com/)

### Alati za kvalitetu koda
- ✅ [CSS Validator](https://jigsaw.w3.org/css-validator/)
- ✅ [HTML Validator](https://validator.w3.org/)
- ✅ [WebAIM Provjera kontrasta](https://webaim.org/resources/contrastchecker/)

## Dodatni izazovi

🌟 **Napredni rasporedi**: Implementirajte i Flexbox I Grid u različitim dijelovima vašeg dizajna  
🌟 **Integracija animacija**: Dodajte CSS prijelaze ili animacije koje rade s vašim novim rasporedom  
🌟 **Tamni način rada**: Implementirajte preklopnik tema temeljen na prilagođenim svojstvima CSS-a  
🌟 **Upiti za spremnike**: Koristite moderne tehnike upita za spremnike za responzivnost na razini komponenti  

> 💡 **Zapamtite**: Cilj nije samo da sve funkcionira, već da razumijete ZAŠTO je odabrana metoda rasporeda najbolje rješenje za ovaj specifični dizajnerski izazov!

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.