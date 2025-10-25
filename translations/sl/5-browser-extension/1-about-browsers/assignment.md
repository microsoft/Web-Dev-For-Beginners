<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b6897c02603d0045dd6d8256e8714baa",
  "translation_date": "2025-10-25T00:47:15+00:00",
  "source_file": "5-browser-extension/1-about-browsers/assignment.md",
  "language_code": "sl"
}
-->
# Naloga: Preoblikujte svojo razširitev za brskalnik

## Pregled

Zdaj, ko ste ustvarili HTML strukturo za svojo razširitev brskalnika za ogljični odtis, je čas, da jo naredite vizualno privlačno in uporabniku prijazno. Odličen dizajn izboljša uporabniško izkušnjo ter naredi vašo razširitev bolj profesionalno in privlačno.

Vaša razširitev že vključuje osnovno CSS oblikovanje, vendar vas ta naloga spodbuja, da ustvarite edinstveno vizualno identiteto, ki odraža vaš osebni slog, hkrati pa ohranja odlično uporabnost.

## Navodila

### 1. del: Analizirajte trenutni dizajn

Preden začnete spreminjati dizajn, preglejte obstoječo strukturo CSS:

1. **Poiščite** CSS datoteke v projektu vaše razširitve
2. **Preglejte** trenutni pristop k oblikovanju in barvno shemo
3. **Prepoznajte** področja za izboljšanje postavitve, tipografije in vizualne hierarhije
4. **Razmislite**, kako dizajn podpira cilje uporabnika (enostavno izpolnjevanje obrazcev in jasen prikaz podatkov)

### 2. del: Oblikujte svojo prilagojeno stilizacijo

Ustvarite usklajen vizualni dizajn, ki vključuje:

**Barvna shema:**
- Izberite primarno barvno paleto, ki odraža okoljske teme
- Poskrbite za zadostni kontrast za dostopnost (uporabite orodja, kot je WebAIM-ov preverjevalnik kontrasta)
- Razmislite, kako bodo barve videti v različnih temah brskalnika

**Tipografija:**
- Izberite berljive pisave, ki dobro delujejo pri majhnih velikostih razširitve
- Ustvarite jasno hierarhijo z ustreznimi velikostmi in težami pisav
- Poskrbite, da bo besedilo ostalo berljivo tako v svetlih kot temnih temah brskalnika

**Postavitev in razmiki:**
- Izboljšajte vizualno organizacijo elementov obrazca in prikaza podatkov
- Dodajte ustrezne robove in razmike za boljšo berljivost
- Upoštevajte načela odzivnega oblikovanja za različne velikosti zaslonov

### 3. del: Uvedite svoj dizajn

Spremenite CSS datoteke, da uresničite svoj dizajn:

```css
/* Example starting points for customization */

.form-data {
    /* Style the configuration form */
    background: /* your choice */;
    padding: /* your spacing */;
    border-radius: /* your preference */;
}

.result-container {
    /* Style the data display area */
    background: /* complementary color */;
    border: /* your border style */;
    margin: /* your spacing */;
}

/* Add your custom styles here */
```

**Ključna področja za oblikovanje:**
- **Elementi obrazca**: Polja za vnos, oznake in gumb za pošiljanje
- **Prikaz rezultatov**: Posoda za podatke, oblikovanje besedila in stanja nalaganja
- **Interaktivni elementi**: Učinki ob prehodu miške, stanja gumbov in prehodi
- **Splošna postavitev**: Razmiki med posodami, barve ozadja in vizualna hierarhija

### 4. del: Testirajte in izboljšajte

1. **Sestavite** svojo razširitev z `npm run build`
2. **Naložite** posodobljeno razširitev v svoj brskalnik
3. **Testirajte** vsa vizualna stanja (vnos v obrazec, nalaganje, prikaz rezultatov, napake)
4. **Preverite** dostopnost z orodji za razvijalce v brskalniku
5. **Izboljšajte** svoje stile glede na dejansko uporabo

## Kreativni izzivi

### Osnovna raven
- Posodobite barve in pisave za ustvarjanje usklajene teme
- Izboljšajte razmike in poravnavo po celotnem vmesniku
- Dodajte subtilne učinke ob prehodu miške na interaktivne elemente

### Srednja raven
- Oblikujte prilagojene ikone ali grafike za svojo razširitev
- Uvedite gladke prehode med različnimi stanji
- Ustvarite edinstveno animacijo nalaganja za klice API

### Napredna raven
- Oblikujte več možnosti tem (svetla/temna/visok kontrast)
- Uvedite odzivno oblikovanje za različne velikosti oken brskalnika
- Dodajte mikro-interakcije, ki izboljšajo uporabniško izkušnjo

## Smernice za oddajo

Vaša dokončana naloga naj vključuje:

- **Spremenjene CSS datoteke** z vašo prilagojeno stilizacijo
- **Posnetke zaslona**, ki prikazujejo vašo razširitev v različnih stanjih (obrazec, nalaganje, rezultati)
- **Kratek opis** (2-3 stavki), ki pojasnjuje vaše oblikovalske odločitve in kako izboljšujejo uporabniško izkušnjo

## Ocenjevalna lestvica

| Merila | Odlično (4) | Dobro (3) | Povprečno (2) | Začetno (1) |
|--------|-------------|-----------|---------------|-------------|
| **Vizualni dizajn** | Kreativen, usklajen dizajn, ki izboljšuje uporabnost in odraža močna oblikovalska načela | Dobro oblikovalske odločitve z doslednim stiliziranjem in jasno vizualno hierarhijo | Osnovne izboljšave dizajna z nekaj težavami pri doslednosti | Minimalne spremembe stilizacije ali nedosleden dizajn |
| **Funkcionalnost** | Vsi stili delujejo popolno v različnih stanjih in okoljih brskalnika | Stili delujejo dobro z manjšimi težavami v izjemnih primerih | Večina stilov deluje, vendar z nekaj težavami pri prikazu | Pomembne težave s stilizacijo, ki vplivajo na uporabnost |
| **Kakovost kode** | Čist, dobro organiziran CSS z smiselno poimenovanimi razredi in učinkovitimi selektorji | Dobra struktura CSS z ustrezno uporabo selektorjev in lastnosti | Sprejemljiv CSS z nekaj težavami pri organizaciji | Slaba struktura CSS ali preveč zapleteno stiliziranje |
| **Dostopnost** | Odličen barvni kontrast, berljive pisave in upoštevanje potreb uporabnikov z invalidnostmi | Dobre prakse dostopnosti z manjšimi področji za izboljšanje | Osnovno upoštevanje dostopnosti z nekaj težavami | Omejena pozornost na zahteve dostopnosti |

## Nasveti za uspeh

> 💡 **Nasvet za oblikovanje**: Začnite z nežnimi spremembami in postopoma preidite na bolj izrazito stilizacijo. Majhne izboljšave v tipografiji in razmikih pogosto močno vplivajo na zaznano kakovost.

**Najboljše prakse:**
- **Testirajte** svojo razširitev v svetlih in temnih temah brskalnika
- **Uporabljajte** relativne enote (em, rem) za boljšo prilagodljivost
- **Ohranjajte** dosledne razmike z uporabo CSS lastnosti po meri
- **Razmislite**, kako bo vaš dizajn videti uporabnikom z različnimi vizualnimi potrebami
- **Preverite** svoj CSS, da se prepričate, da sledi pravilni sintaksi

> ⚠️ **Pogosta napaka**: Ne žrtvujte uporabnosti zaradi vizualne privlačnosti. Vaša razširitev mora biti tako lepa kot funkcionalna.

**Ne pozabite:**
- **Ohranite** pomembne informacije lahko berljive
- **Poskrbite**, da bodo gumbi in interaktivni elementi enostavni za klik
- **Zagotovite** jasno vizualno povratno informacijo za uporabniške akcije
- **Testirajte** svoj dizajn z resničnimi podatki, ne le z nadomestnim besedilom

Srečno pri ustvarjanju razširitve za brskalnik, ki bo tako funkcionalna kot vizualno osupljiva!

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije je priporočljivo profesionalno človeško prevajanje. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.