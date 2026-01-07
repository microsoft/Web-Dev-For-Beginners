<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-27T22:19:14+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "hr"
}
-->
# Proširenje preglednika Carbon Trigger: kod za početak

Koristit ćemo API Signal CO2 od tmrow za praćenje potrošnje električne energije kako bismo stvorili proširenje za preglednik koje će vam omogućiti da imate podsjetnik direktno u svom pregledniku o tome koliko je intenzivna potrošnja električne energije u vašoj regiji. Korištenje ovog prilagođenog proširenja pomoći će vam da procijenite svoje aktivnosti na temelju tih informacija.

![screenshot proširenja](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.hr.png)

## Za početak

Potrebno je da [npm](https://npmjs.com) bude instaliran. Preuzmite kopiju ovog koda u mapu na svom računalu.

Instalirajte sve potrebne pakete:

```
npm install
```

Kreirajte proširenje pomoću webpacka:

```
npm run build
```

Za instalaciju na Edge, koristite izbornik "tri točke" u gornjem desnom kutu preglednika kako biste pronašli panel Proširenja. Ako već nije aktiviran, uključite Način za razvojne programere (dolje lijevo). Odaberite "Učitaj raspakirano" kako biste učitali novo proširenje. Otvorite mapu "dist" na upitu i proširenje će biti učitano. Za korištenje, trebat će vam API ključ za CO2 Signal API (možete ga [dobiti ovdje putem e-maila](https://www.co2signal.com/) - unesite svoju e-mail adresu u polje na toj stranici) i [kod za svoju regiju](http://api.electricitymap.org/v3/zones) koji odgovara [električnoj karti](https://www.electricitymap.org/map) (na primjer, za Boston, "US-NEISO").

![instalacija](../../../../../translated_images/install-on-edge.78634f02842c4828.hr.png)

Nakon što unesete API ključ i regiju u sučelje proširenja, obojena točka na traci proširenja preglednika trebala bi se promijeniti kako bi odražavala potrošnju energije u regiji i pružila smjernice o tome koje aktivnosti s visokim energetskim intenzitetom bi bile prikladne za izvođenje. Koncept iza ovog sustava "točaka" inspiriran je [proširenjem Energy Lollipop](https://energylollipop.com/) za emisije u Kaliforniji.

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za bilo kakve nesporazume ili pogrešne interpretacije koje proizlaze iz korištenja ovog prijevoda.