<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "650e63282e1dfa032890fcf5c1c4119d",
  "translation_date": "2025-10-25T00:03:41+00:00",
  "source_file": "3-terrarium/1-intro-to-html/assignment.md",
  "language_code": "hr"
}
-->
# HTML Vježba: Izrada makete bloga

## Ciljevi učenja

Primijenite svoje znanje HTML-a dizajniranjem i kodiranjem kompletne strukture početne stranice bloga. Ovaj praktični zadatak će ojačati vaše razumijevanje semantičkog HTML-a, najboljih praksi pristupačnosti i profesionalnih vještina organizacije koda koje ćete koristiti tijekom svog puta u web razvoju.

**Završetkom ovog zadatka, naučit ćete:**
- Planirati izgled web stranice prije kodiranja
- Pravilno primjenjivati semantičke HTML elemente
- Kreirati pristupačan, dobro strukturiran kod
- Razviti profesionalne navike kodiranja uz komentare i organizaciju

## Zahtjevi projekta

### Dio 1: Planiranje dizajna (vizualna maketa)

**Izradite vizualnu maketu početne stranice bloga koja uključuje:**
- Zaglavlje s naslovom stranice i navigacijom
- Glavni sadržaj s najmanje 2-3 pregleda blog objava
- Bočnu traku s dodatnim informacijama (odjeljak o autoru, nedavne objave, kategorije)
- Podnožje s kontakt informacijama ili poveznicama

**Opcije za izradu makete:**
- **Ručni crtež**: Koristite papir i olovku, zatim fotografirajte ili skenirajte svoj dizajn
- **Digitalni alati**: Figma, Adobe XD, Canva, PowerPoint ili bilo koja aplikacija za crtanje
- **Alati za izradu wireframea**: Balsamiq, MockFlow ili slični softver za wireframe

**Označite sekcije svoje makete** HTML elementima koje planirate koristiti (npr. "Zaglavlje - `<header>`", "Blog objave - `<article>`").

### Dio 2: Planiranje HTML elemenata

**Napravite popis koji povezuje svaku sekciju vaše makete s određenim HTML elementima:**

```
Example:
- Site Header → <header>
- Main Navigation → <nav> with <ul> and <li>
- Blog Post → <article> with <h2>, <p>, <time>
- Sidebar → <aside> with <section> elements
- Page Footer → <footer>
```

**Obavezni elementi koje treba uključiti:**
Vaš HTML mora sadržavati najmanje 10 različitih semantičkih elemenata s ovog popisa:
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<a>`
- `<img>`, `<time>`, `<blockquote>`, `<strong>`, `<em>`

### Dio 3: Implementacija HTML-a

**Kodirajte početnu stranicu bloga slijedeći ove standarde:**

1. **Struktura dokumenta**: Uključite ispravan DOCTYPE, html, head i body elemente
2. **Semantičko označavanje**: Koristite HTML elemente za njihovu namjenu
3. **Pristupačnost**: Uključite ispravan alt tekst za slike i smislen tekst za poveznice
4. **Kvaliteta koda**: Koristite dosljedno uvlačenje i smisleno komentiranje
5. **Sadržaj**: Uključite realističan sadržaj bloga (možete koristiti tekst za popunjavanje)

**Primjer HTML strukture:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Blog</title>
</head>
<body>
    <!-- Main site header -->
    <header>
        <h1>My Blog Title</h1>
        <nav>
            <!-- Navigation menu -->
        </nav>
    </header>
    
    <!-- Main content area -->
    <main>
        <!-- Blog posts go here -->
    </main>
    
    <!-- Sidebar content -->
    <aside>
        <!-- Additional information -->
    </aside>
    
    <!-- Site footer -->
    <footer>
        <!-- Footer content -->
    </footer>
</body>
</html>
```

### Dio 4: Refleksija

**Napišite kratku refleksiju (3-5 rečenica) koja odgovara na:**
- Koje HTML elemente ste najviše sigurni koristiti?
- S kojim ste se izazovima susreli tijekom planiranja ili kodiranja?
- Kako vam je semantički HTML pomogao u organizaciji sadržaja?
- Što biste učinili drugačije u svom sljedećem HTML projektu?

## Lista za predaju

**Prije predaje, provjerite jeste li:**
- [ ] Izradili vizualnu maketu s označenim HTML elementima
- [ ] Dovršili HTML datoteku s ispravnom strukturom dokumenta
- [ ] Koristili najmanje 10 različitih semantičkih HTML elemenata na odgovarajući način
- [ ] Dodali smisleno komentiranje koje objašnjava strukturu koda
- [ ] Osigurali valjanost HTML sintakse (testirajte u pregledniku)
- [ ] Napisali refleksiju koja odgovara na postavljena pitanja

## Rubrika za ocjenjivanje

| Kriterij | Izvrsno (4) | Dobro (3) | Razvijanje (2) | Početno (1) |
|----------|-------------|-----------|----------------|-------------|
| **Planiranje i dizajn** | Detaljna, dobro označena maketa koja jasno pokazuje razumijevanje izgleda i semantičke strukture HTML-a | Jasna maketa s većinom sekcija pravilno označenih | Osnovna maketa s nekim oznakama, pokazuje opće razumijevanje | Minimalna ili nejasna maketa, nedostaje pravilna identifikacija sekcija |
| **Upotreba semantičkog HTML-a** | Koristi 10+ semantičkih elemenata na odgovarajući način, pokazuje duboko razumijevanje strukture HTML-a i pristupačnosti | Koristi 8-9 semantičkih elemenata ispravno, pokazuje dobro razumijevanje semantičkog označavanja | Koristi 6-7 semantičkih elemenata, s nekim nesporazumima o pravilnoj upotrebi | Koristi manje od 6 elemenata ili nepravilno koristi semantičke elemente |
| **Kvaliteta i organizacija koda** | Izuzetno dobro organiziran, pravilno uvlačen kod s opsežnim komentarima i savršenom HTML sintaksom | Dobro organiziran kod s dobrom razinom uvlačenja, korisnim komentarima i valjanom sintaksom | Uglavnom organiziran kod s nekim komentarima, manji problemi sa sintaksom | Loša organizacija, minimalni komentari, višestruke greške u sintaksi |
| **Pristupačnost i najbolje prakse** | Izvrsne pristupačne značajke, smislen alt tekst, pravilna hijerarhija naslova, slijedi sve moderne HTML najbolje prakse | Dobre značajke pristupačnosti, odgovarajuća upotreba naslova i alt teksta, slijedi većinu najboljih praksi | Neke značajke pristupačnosti, osnovni alt tekst i struktura naslova | Ograničene značajke pristupačnosti, loša struktura naslova, ne slijedi najbolje prakse |
| **Refleksija i učenje** | Duboka refleksija koja pokazuje temeljito razumijevanje HTML koncepata i promišljenu analizu procesa učenja | Dobra refleksija koja pokazuje razumijevanje ključnih koncepata i određenu samosvijest o učenju | Osnovna refleksija s ograničenim uvidom u HTML koncepte ili proces učenja | Minimalna ili nedostajuća refleksija, pokazuje malo razumijevanja naučenih koncepata |

## Resursi za učenje

**Osnovne reference:**
- [MDN HTML Elements Reference](https://developer.mozilla.org/docs/Web/HTML/Element) - Kompletan vodič za sve HTML elemente
- [HTML5 Semantic Elements](https://developer.mozilla.org/docs/Web/HTML/Element#content_sectioning) - Razumijevanje semantičkog označavanja
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Izrada pristupačnog web sadržaja
- [HTML Validator](https://validator.w3.org/) - Provjerite sintaksu svog HTML-a

**Savjeti za uspjeh:**
- Započnite s maketom prije nego što počnete pisati kod
- Koristite alate za razvoj preglednika kako biste pregledali strukturu svog HTML-a
- Testirajte svoju stranicu na različitim veličinama ekrana (čak i bez CSS-a)
- Čitajte svoj HTML naglas kako biste provjerili ima li logičan smisao
- Razmislite kako bi čitač ekrana interpretirao strukturu vaše stranice

> 💡 **Zapamtite**: Ovaj zadatak se fokusira na strukturu i semantiku HTML-a. Ne brinite o vizualnom stiliziranju – za to služi CSS! Vaša stranica može izgledati jednostavno, ali trebala bi biti dobro strukturirana i smisleno organizirana.

---

**Izjava o odricanju odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.