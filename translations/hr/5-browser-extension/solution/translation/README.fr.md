# Proširenje preglednika Carbon Trigger: Završeni kod

Koristeći API C02 Signal od tmrow za praćenje potrošnje električne energije, izradite proširenje preglednika kako biste imali podsjetnik direktno u svom pregledniku o potrošnji električne energije u vašem području. Korištenje ovog prilagođenog proširenja pomoći će vam da donesete odluke o svojim aktivnostima na temelju tih informacija.

![screenshot proširenja](../../../../../translated_images/hr/extension-screenshot.0e7f5bfa110e92e3.webp)

## Početak

Morate imati instaliran [npm](https://npmjs.com). Preuzmite kopiju ovog koda u mapu na svom računalu.

Instalirajte sve potrebne pakete:

```
npm install
```

Izgradite proširenje pomoću webpacka:

```
npm run build
```

Za instalaciju na Edgeu, koristite izbornik 'tri točke' u gornjem desnom kutu preglednika kako biste pronašli panel Proširenja. Odatle odaberite 'Učitaj nekomprimirano proširenje' za učitavanje novog proširenja. Otvorite mapu 'dist' na upit i proširenje će se učitati. Za korištenje, trebat će vam API ključ za CO2 Signal API ([nabavite ga ovdje putem e-pošte](https://www.co2signal.com/) - unesite svoju e-poštu u polje na toj stranici) i [kod za vašu regiju](http://api.electricitymap.org/v3/zones) koji odgovara [Karti električne energije](https://www.electricitymap.org/map) (na primjer, u Bostonu koristim 'US-NEISO').

![instalacija](../../../../../translated_images/hr/install-on-edge.78634f02842c4828.webp)

Nakon što unesete API ključ i regiju u sučelje proširenja, obojena točka u traci proširenja preglednika trebala bi se promijeniti kako bi odražavala potrošnju energije u vašem području i pružila vam indikator o energetski intenzivnim aktivnostima koje bi bilo prikladno obavljati. Koncept iza ovog sustava 'točaka' inspiriran je [proširenjem Energy Lollipop](https://energylollipop.com/) za emisije u Kaliforniji.

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za kritične informacije preporučuje se profesionalni prijevod od strane ljudskog prevoditelja. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.