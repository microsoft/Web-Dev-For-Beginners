# Usvojite API

## Pregled

API-ji otvaraju beskrajne mogućnosti za kreativni web razvoj! U ovom zadatku odabrat ćete vanjski API i izraditi ekstenziju za preglednik koja rješava stvarni problem ili pruža korisnu funkcionalnost korisnicima.

## Upute

### Korak 1: Odaberite svoj API
Odaberite API s ovog pažljivo odabranog [popisa besplatnih javnih API-ja](https://github.com/public-apis/public-apis). Razmotrite ove kategorije:

**Popularne opcije za početnike:**
- **Zabava**: [Dog CEO API](https://dog.ceo/dog-api/) za slučajne slike pasa
- **Vrijeme**: [OpenWeatherMap](https://openweathermap.org/api) za podatke o trenutnom vremenu
- **Citati**: [Quotable API](https://quotable.io/) za inspirativne citate
- **Vijesti**: [NewsAPI](https://newsapi.org/) za aktualne naslove
- **Zanimljivosti**: [Numbers API](http://numbersapi.com/) za zanimljive činjenice o brojevima

### Korak 2: Planirajte svoju ekstenziju
Prije kodiranja, odgovorite na ova pitanja za planiranje:
- Koji problem vaša ekstenzija rješava?
- Tko je vaša ciljana publika?
- Koje podatke ćete pohraniti u lokalnu pohranu?
- Kako ćete se nositi s neuspjesima API-ja ili ograničenjima brzine?

### Korak 3: Izradite svoju ekstenziju
Vaša ekstenzija treba uključivati:

**Obavezne značajke:**
- Ulazne forme za sve potrebne parametre API-ja
- Integraciju API-ja s odgovarajućim rukovanjem greškama
- Lokalnu pohranu za korisničke postavke ili API ključeve
- Čisto, responzivno korisničko sučelje
- Stanja učitavanja i povratne informacije korisnicima

**Zahtjevi za kod:**
- Koristite moderne značajke JavaScripta (ES6+)
- Implementirajte async/await za API pozive
- Uključite odgovarajuće rukovanje greškama s try/catch blokovima
- Dodajte smislene komentare koji objašnjavaju vaš kod
- Pratite dosljedno formatiranje koda

### Korak 4: Testirajte i doradite
- Testirajte svoju ekstenziju s različitim unosima
- Rukujte rubnim slučajevima (nema interneta, nevažeći odgovori API-ja)
- Osigurajte da vaša ekstenzija radi nakon ponovnog pokretanja preglednika
- Dodajte korisnički prihvatljive poruke o greškama

## Dodatni izazovi

Podignite svoju ekstenziju na višu razinu:
- Dodajte više API krajnjih točaka za bogatiju funkcionalnost
- Implementirajte predmemoriranje podataka kako biste smanjili API pozive
- Kreirajte prečace na tipkovnici za uobičajene radnje
- Dodajte značajke za izvoz/uvoz podataka
- Implementirajte opcije prilagodbe za korisnike

## Zahtjevi za predaju

1. **Funkcionalna ekstenzija za preglednik** koja uspješno integrira odabrani API
2. **README datoteka** koja objašnjava:
   - Koji API ste odabrali i zašto
   - Kako instalirati i koristiti vašu ekstenziju
   - Sve potrebne API ključeve ili postavke
   - Snimke zaslona vaše ekstenzije u akciji
3. **Čist, komentiran kod** koji prati moderne JavaScript prakse

## Rubrika

| Kriterij | Izvrsno (90-100%) | Dobro (80-89%) | Razvijajuće (70-79%) | Početno (60-69%) |
|----------|-------------------|----------------|----------------------|------------------|
| **Integracija API-ja** | Besprijekorna integracija API-ja s cjelovitim rukovanjem greškama i upravljanjem rubnim slučajevima | Uspješna integracija API-ja s osnovnim rukovanjem greškama | API radi, ali ima ograničeno rukovanje greškama | Integracija API-ja ima značajne probleme |
| **Kvaliteta koda** | Čist, dobro komentiran moderni JavaScript koji prati najbolje prakse | Dobra struktura koda s adekvatnim komentarima | Kod radi, ali treba bolju organizaciju | Loša kvaliteta koda s minimalnim komentarima |
| **Korisničko iskustvo** | Polirano sučelje s izvrsnim stanjima učitavanja i povratnim informacijama korisnicima | Dobro sučelje s osnovnim povratnim informacijama korisnicima | Osnovno sučelje koje funkcionira adekvatno | Loše korisničko iskustvo s zbunjujućim sučeljem |
| **Lokalna pohrana** | Sofisticirana upotreba lokalne pohrane s validacijom i upravljanjem podacima | Ispravna implementacija lokalne pohrane za ključne značajke | Osnovna implementacija lokalne pohrane | Minimalna ili netočna upotreba lokalne pohrane |
| **Dokumentacija** | Sveobuhvatan README s uputama za postavljanje i snimkama zaslona | Dobra dokumentacija koja pokriva većinu zahtjeva | Osnovna dokumentacija koja nedostaje nekih detalja | Loša ili nedostajuća dokumentacija |

## Savjeti za početak

1. **Počnite jednostavno**: Odaberite API koji ne zahtijeva složenu autentifikaciju
2. **Pročitajte dokumentaciju**: Temeljito razumite krajnje točke i odgovore odabranog API-ja
3. **Planirajte svoje sučelje**: Skicirajte sučelje svoje ekstenzije prije kodiranja
4. **Često testirajte**: Gradite postupno i testirajte svaku značajku dok je dodajete
5. **Rukujte greškama**: Uvijek pretpostavite da API pozivi mogu propasti i planirajte u skladu s tim

## Resursi

- [Dokumentacija za ekstenzije preglednika](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)
- [Vodič za Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch)
- [Tutorial za lokalnu pohranu](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- [Parsiranje i rukovanje JSON-om](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON)

Zabavite se stvarajući nešto korisno i kreativno! 🚀

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešne interpretacije nastale korištenjem ovog prijevoda.