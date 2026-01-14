<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-27T22:19:47+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "hr"
}
-->
# Proširenje preglednika Carbon Trigger: Završeni kod

Izradite proširenje preglednika koje koristi tmrow API za CO2 Signal kako bi pratilo potrošnju električne energije u vašem području i prikazivalo podsjetnik o tome koliko je potrošnja energije visoka. Ovo proširenje možete koristiti ad hoc kako biste donosili odluke o svojim aktivnostima na temelju tih informacija.

![screenshot proširenja](../../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3.hr.png)

## Početak

Potrebno je da imate instaliran [npm](https://npmjs.com). Preuzmite kopiju ovog koda u mapu na svom računalu.

Instalirajte sve potrebne pakete.

```
npm install
```

Izgradite proširenje pomoću webpacka.

```
npm run build
```

Za instalaciju na Edge preglednik, pronađite panel "Proširenja" putem izbornika "tri točke" u gornjem desnom kutu preglednika. Tamo odaberite opciju "Load Unpacked" kako biste učitali novo proširenje. Kada se pojavi upit, otvorite mapu "dist" i proširenje će biti učitano. Za korištenje, trebat će vam API ključ za CO2 Signal ([nabavite ga ovdje putem e-maila](https://www.co2signal.com/) - unesite svoj e-mail u okvir na toj stranici) i [kod za vašu regiju](http://api.electricitymap.org/v3/zones) koji odgovara [Electricity Map](https://www.electricitymap.org/map) (na primjer, za Boston koristite 'US-NEISO').

![instalacija](../../../../../translated_images/install-on-edge.78634f02842c4828.hr.png)

Nakon što unesete API ključ i regiju u sučelje proširenja, obojena točka koja se prikazuje na traci proširenja preglednika mijenjat će boju kako bi odražavala potrošnju energije u vašem području. To će vam pomoći da odlučite koje aktivnosti zahtijevaju energiju i kada ih je najbolje obavljati. Koncept ovog sustava "točke" inspiriran je proširenjem [Energy Lollipop](https://energylollipop.com/) za emisije u Kaliforniji.

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije koje mogu proizaći iz korištenja ovog prijevoda.