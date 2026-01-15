<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-27T22:18:11+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "hr"
}
-->
# Carbon Trigger Browser Ekstenzija: Dovršeni Kod

Koristeći tmrow-ov C02 Signal API za praćenje potrošnje električne energije, izradite ekstenziju za preglednik kako biste imali podsjetnik u svom pregledniku o tome koliko je velika potrošnja električne energije u vašoj regiji. Povremeno korištenje ove ekstenzije pomoći će vam da donesete odluke o svojim aktivnostima na temelju tih informacija.

![screenshot ekstenzije](../../../../translated_images/hr/extension-screenshot.0e7f5bfa110e92e3.png)

## Početak

Trebat ćete imati instaliran [npm](https://npmjs.com). Preuzmite kopiju ovog koda u mapu na svom računalu.

Instalirajte sve potrebne pakete:

```
npm install
```

Izgradite ekstenziju pomoću webpack-a:

```
npm run build
```

Za instalaciju na Edge pregledniku, koristite izbornik s 'tri točke' u gornjem desnom kutu preglednika kako biste pronašli panel Ekstenzije. Odatle odaberite 'Učitaj nepakirano' za učitavanje nove ekstenzije. Na upit otvorite mapu 'dist' i ekstenzija će se učitati. Za korištenje, trebat će vam API ključ za CO2 Signal API ([nabavite ga ovdje putem e-pošte](https://www.co2signal.com/) - unesite svoju e-poštu u okvir na ovoj stranici) i [kod za vašu regiju](http://api.electricitymap.org/v3/zones) koji odgovara [Electricity Map](https://www.electricitymap.org/map) (na primjer, u Bostonu koristim 'US-NEISO').

![instalacija](../../../../translated_images/hr/install-on-edge.78634f02842c4828.png)

Nakon što unesete API ključ i regiju u sučelje ekstenzije, obojena točka u traci ekstenzije preglednika trebala bi se promijeniti kako bi odražavala potrošnju energije u vašoj regiji i dala vam smjernice o tome koje aktivnosti s velikom potrošnjom energije bi bile prikladne za vas. Koncept iza ovog sustava 'točke' inspiriran je [Energy Lollipop ekstenzijom](https://energylollipop.com/) za emisije u Kaliforniji.

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden korištenjem AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati mjerodavnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane stručnjaka. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije proizašle iz korištenja ovog prijevoda.