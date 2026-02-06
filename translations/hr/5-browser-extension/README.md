# Izrada ekstenzije za preglednik

Izrada ekstenzija za preglednike zabavan je i zanimljiv način razmišljanja o performansama vaših aplikacija dok gradite drugačiju vrstu web resursa. Ovaj modul uključuje lekcije o tome kako preglednici funkcioniraju, kako implementirati ekstenziju za preglednik, kako izraditi obrazac, pozvati API, koristiti lokalnu pohranu te kako procijeniti performanse vaše web stranice i poboljšati ih.

Izradit ćete ekstenziju za preglednik koja radi na Edgeu, Chromeu i Firefoxu. Ova ekstenzija, koja je poput mini web stranice prilagođene vrlo specifičnom zadatku, provjerava [C02 Signal API](https://www.co2signal.com) za podatke o potrošnji električne energije i intenzitetu ugljika u određenoj regiji te vraća očitanje o ugljičnom otisku te regije.

Ekstenzija se može koristiti ad hoc od strane korisnika nakon što se unesu API ključ i kod regije u obrazac kako bi se odredila lokalna potrošnja električne energije, čime se pružaju podaci koji mogu utjecati na odluke korisnika o potrošnji električne energije. Na primjer, možda bi bilo bolje odgoditi korištenje sušilice za rublje (aktivnost s visokim intenzitetom ugljika) tijekom razdoblja velike potrošnje električne energije u vašoj regiji.

### Teme

1. [O preglednicima](1-about-browsers/README.md)
2. [Obrasci i lokalna pohrana](2-forms-browsers-local-storage/README.md)
3. [Pozadinski zadaci i performanse](3-background-tasks-and-performance/README.md)

### Zasluge

![zelena ekstenzija za preglednik](../../../translated_images/hr/extension-screenshot.0e7f5bfa110e92e3.webp)

## Zasluge

Ideju za ovaj web projekt usmjeren na ugljik dao je Asim Hussain, voditelj Microsoftovog tima za Green Cloud Advocacy i autor [Green Principles](https://principles.green/). Izvorno je bio [projekt web stranice](https://github.com/jlooper/green).

Struktura ekstenzije za preglednik bila je inspirirana [COVID ekstenzijom Adebole Adenirana](https://github.com/onedebos/covtension).

Koncept sustava ikona 'točkica' predložen je prema strukturi ikona ekstenzije za preglednik [Energy Lollipop](https://energylollipop.com/) za emisije u Kaliforniji.

Ove lekcije napisane su s ♥️ od strane [Jen Looper](https://www.twitter.com/jenlooper)

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za bilo kakva nesporazuma ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.