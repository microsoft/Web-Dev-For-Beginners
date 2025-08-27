<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cbaf73f94a9ab4c680a10ef871e92948",
  "translation_date": "2025-08-27T22:20:16+00:00",
  "source_file": "5-browser-extension/solution/translation/README.es.md",
  "language_code": "hr"
}
-->
# Ekstenzija preglednika Carbon Trigger: Potpuni kod

Koristeći API za CO2 Signal od tmrow za praćenje potrošnje električne energije, izradite ekstenziju za preglednik kako biste imali podsjetnik direktno u svom pregledniku o potrošnji električne energije u vašoj regiji. Korištenje ove ad hoc ekstenzije pomoći će vam donositi odluke o vašim aktivnostima na temelju tih informacija.

![screenshot ekstenzije](../../../../../translated_images/extension-screenshot.352c4c3ba54e4041ad2f6af749d562cc5705f527b5826efd53d11c3528f5ae45.hr.png)

## Početak

Morate imati instaliran [npm](https://npmjs.com). Preuzmite kopiju ovog koda u mapu na svom računalu.

Instalirajte sve potrebne pakete:

```
npm install
```

Izgradite ekstenziju pomoću webpacka:

```
npm run build
```

Za instalaciju u Edgeu, koristite izbornik 'tri točke' u gornjem desnom kutu preglednika kako biste pronašli panel Ekstenzije. Tamo odaberite 'Učitaj raspakirano' za učitavanje nove ekstenzije. Otvorite mapu 'dist' kada se to zatraži i ekstenzija će se učitati. Za korištenje, trebat će vam API ključ za CO2 Signal API ([nabavite ga ovdje putem e-pošte](https://www.co2signal.com/) - unesite svoju e-poštu u okvir na ovoj stranici) i [kod za vašu regiju](http://api.electricitymap.org/v3/zones) koji odgovara [Električnom mapu](https://www.electricitymap.org/map) (na primjer, u Bostonu koristim 'US-NEISO').

![instalacija](../../../../../translated_images/install-on-edge.8bd0ee3ca7dcda1c5334b5195603a43c864e3b38d088b03d57376d25e77b9459.hr.png)

Kada unesete API ključ i regiju u sučelje ekstenzije, točka boje na traci ekstenzije preglednika trebala bi se promijeniti kako bi odražavala potrošnju energije vaše regije i dala vam pokazatelj o aktivnostima koje troše puno energije, a koje bi bile prikladne za vas. Koncept iza ovog sustava "točaka" inspiriran je [ekstenzijom Energy Lollipop](https://energylollipop.com/) za emisije u Kaliforniji.

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.