<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-27T22:20:43+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "hr"
}
-->
# Proširenje Preglednika Carbon Trigger: Kompletan Kod

Koristeći API CO2 Signal od tmrow za praćenje potrošnje električne energije, izradite proširenje preglednika kako biste mogli dobiti obavijesti u svom pregledniku o tome koliko je intenzivna potrošnja električne energije u vašoj regiji. Korištenje ovog proširenja može vam pomoći da donesete odluke o svojim aktivnostima na temelju tih informacija.

![screenshot proširenja preglednika](../../../../../translated_images/hr/extension-screenshot.0e7f5bfa110e92e3.png)

## Početak

Potrebno je instalirati [npm](https://npmjs.com). Preuzmite kopiju ovog koda u mapu na svom računalu.

Instalirajte sve potrebne pakete:

```
npm install
```

Izgradite proširenje pomoću webpacka:

```
npm run build
```

Za instalaciju na Edgeu, koristite izbornik 'tri točke' u gornjem desnom kutu preglednika kako biste pronašli panel Proširenja. Tamo odaberite 'Load Unpacked' za učitavanje novog proširenja. Otvorite mapu 'dist' na zahtjev i proširenje će se učitati. Za korištenje, trebat će vam API ključ za CO2 Signal API ([nabavite ga ovdje putem e-pošte](https://www.co2signal.com/) - unesite svoju e-poštu u polje na stranici) i [kod za vašu regiju](http://api.electricitymap.org/v3/zones) koji odgovara [Electricity Map](https://www.electricitymap.org/map) (u Bostonu, na primjer, koristim 'US-NEISO').

![preuzimanje](../../../../../translated_images/hr/install-on-edge.78634f02842c4828.png)

Nakon što unesete API ključ i regiju u sučelje proširenja, obojena točka na traci proširenja preglednika promijenit će se kako bi odražavala potrošnju energije u vašoj regiji i pružila vam smjernice o aktivnostima koje su prikladne za obavljanje. Koncept sustava 'točke' inspiriran je [proširenjem preglednika Energy Lollipop](https://energylollipop.com/) za emisije u Kaliforniji.

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati mjerodavnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane stručnjaka. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije proizašle iz korištenja ovog prijevoda.