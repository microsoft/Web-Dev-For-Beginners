<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2025-10-24T23:55:24+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "hr"
}
-->
# Sveobuhvatna revizija pristupačnosti web stranice

## Upute

U ovom zadatku provest ćete profesionalnu reviziju pristupačnosti stvarne web stranice, primjenjujući principe i tehnike koje ste naučili. Ovo praktično iskustvo produbit će vaše razumijevanje prepreka i rješenja vezanih za pristupačnost.

Odaberite web stranicu koja ima očite probleme s pristupačnošću—ovo će vam pružiti više prilika za učenje nego analiza već savršene stranice. Dobri kandidati uključuju starije web stranice, složene web aplikacije ili stranice s bogatim multimedijskim sadržajem.

### Faza 1: Strateška ručna evaluacija

Prije nego što posegnete za automatiziranim alatima, provedite sveobuhvatnu ručnu procjenu. Ovaj pristup usmjeren na korisnika često otkriva probleme koje alati propuštaju i pomaže vam razumjeti stvarno korisničko iskustvo.

**🔍 Osnovni kriteriji evaluacije:**

**Navigacija i struktura:**
- Možete li navigirati cijelom stranicom koristeći samo tipkovnicu (Tab, Shift+Tab, Enter, Space, strelice)?
- Jesu li indikatori fokusa jasno vidljivi na svim interaktivnim elementima?
- Stvara li struktura naslova (H1-H6) logičan pregled sadržaja?
- Postoje li poveznice za preskakanje na glavni sadržaj?

**Vizualna pristupačnost:**
- Postoji li dovoljan kontrast boja na cijeloj stranici (minimalno 4.5:1 za normalni tekst)?
- Oslanja li se stranica isključivo na boju za prenošenje važnih informacija?
- Imaju li sve slike odgovarajući alternativni tekst?
- Ostaje li izgled funkcionalan kada se zumira na 200%?

**Sadržaj i komunikacija:**
- Postoje li "kliknite ovdje" ili nejasni tekstovi poveznica?
- Možete li razumjeti sadržaj i funkcionalnost bez vizualnih znakova?
- Jesu li polja obrasca pravilno označena i grupirana?
- Jesu li poruke o greškama jasne i korisne?

**Interaktivni elementi:**
- Rade li svi gumbi i kontrole obrasca samo s tipkovnicom?
- Jesu li promjene dinamičnog sadržaja najavljene čitačima ekrana?
- Prate li modalni dijalozi i složeni widgeti pravilne obrasce pristupačnosti?

📝 **Dokumentirajte svoja otkrića** s konkretnim primjerima, snimkama zaslona i URL-ovima stranica. Zabilježite i probleme i dobro izvedene elemente.

### Faza 2: Sveobuhvatno automatizirano testiranje

Sada potvrdite i proširite svoja ručna otkrića koristeći industrijske standardne alate za testiranje pristupačnosti. Svaki alat ima različite prednosti, pa korištenje više alata pruža potpunu pokrivenost.

**🛠️ Potrebni alati za testiranje:**

1. **Lighthouse Accessibility Audit** (ugrađen u Chrome/Edge DevTools)
   - Provedite reviziju na više stranica
   - Usredotočite se na specifične metrike i preporuke
   - Zabilježite svoj rezultat pristupačnosti i specifične povrede

2. **axe DevTools** (proširenje za preglednik - industrijski standard)
   - Detekcija problema detaljnija od Lighthousea
   - Pruža konkretne primjere koda za popravke
   - Testira prema WCAG 2.1 kriterijima

3. **WAVE Web Accessibility Evaluator** (proširenje za preglednik)
   - Vizualni prikaz značajki pristupačnosti
   - Ističe i greške i pozitivne značajke
   - Odlično za razumijevanje strukture stranice

4. **Analizatori kontrasta boja**
   - WebAIM Contrast Checker za specifične parove boja
   - Proširenja za preglednik za analizu cijele stranice
   - Testiranje prema WCAG AA i AAA standardima

**🎧 Testiranje stvarne asistivne tehnologije:**
- **Testiranje čitača ekrana**: Koristite NVDA (Windows), VoiceOver (Mac) ili TalkBack (Android)
- **Navigacija samo tipkovnicom**: Isključite miš i navigirajte cijelom stranicom
- **Testiranje zumiranja**: Testirajte funkcionalnost pri 200% i 400% razini zumiranja
- **Testiranje glasovne kontrole**: Ako je dostupno, isprobajte alate za glasovnu navigaciju

**📊 Organizirajte svoje rezultate** stvaranjem glavne tablice s:
- Opisom problema i lokacijom
- Razinom ozbiljnosti (Kritično/Visoko/Srednje/Nisko)
- Povrijeđenim WCAG kriterijima uspjeha
- Alatom koji je otkrio problem
- Snimkama zaslona i dokazima

### Faza 3: Dokumentacija sveobuhvatnih nalaza

Izradite profesionalni izvještaj o reviziji pristupačnosti koji pokazuje vaše razumijevanje tehničkih problema i njihovog utjecaja na korisnike.

**📋 Obavezni dijelovi izvještaja:**

1. **Sažetak** (1 stranica)
   - URL web stranice i kratak opis
   - Opća razina zrelosti pristupačnosti
   - 3 najkritičnija problema
   - Procijenjeni utjecaj na korisnike s invaliditetom

2. **Metodologija** (½ stranice)
   - Pristup testiranju i korišteni alati
   - Procijenjene stranice i kombinacije uređaja/preglednika
   - Standardi prema kojima se procjenjivalo (WCAG 2.1 AA)

3. **Detaljni nalazi** (2-3 stranice)
   - Problemi kategorizirani prema WCAG principima (Perceptivno, Operativno, Razumljivo, Robusno)
   - Uključite snimke zaslona i konkretne primjere
   - Zabilježite pozitivne značajke pristupačnosti koje ste pronašli
   - Usporedite s rezultatima automatiziranih alata

4. **Procjena utjecaja na korisnike** (1 stranica)
   - Kako identificirani problemi utječu na korisnike s različitim invaliditetima
   - Scenariji koji opisuju stvarna korisnička iskustva
   - Poslovni utjecaj (pravni rizik, SEO, proširenje korisničke baze)

**📸 Prikupljanje dokaza:**
- Snimke zaslona kršenja pristupačnosti
- Snimke zaslona problematičnih korisničkih tokova
- Izvještaji alata (spremite kao PDF)
- Primjeri koda koji pokazuju probleme

### Faza 4: Profesionalni plan za poboljšanje

Razvijte strateški, prioritetni plan za rješavanje problema pristupačnosti. Ovo pokazuje vašu sposobnost razmišljanja poput profesionalnog web developera koji se suočava s stvarnim poslovnim izazovima.

**🎯 Izradite detaljne preporuke za poboljšanje (minimalno 10 problema):**

**Za svaki identificirani problem, navedite:**

- **Opis problema**: Jasno objašnjenje što nije u redu i zašto je problematično
- **WCAG referenca**: Specifični povrijeđeni kriterij uspjeha (npr. "2.4.4 Svrha poveznice (u kontekstu) - Razina A")
- **Utjecaj na korisnika**: Kako to utječe na osobe s različitim invaliditetima
- **Rješenje**: Konkretne promjene koda, modifikacije dizajna ili poboljšanja procesa
- **Razina prioriteta**: Kritično (blokira osnovnu funkcionalnost) / Visoko (značajna prepreka) / Srednje (problem s upotrebljivošću) / Nisko (poboljšanje)
- **Procjena napora implementacije**: Procjena vremena/kompleksnosti (Brzo rješenje / Umjeren trud / Velika promjena)
- **Provjera ispravnosti**: Kako provjeriti da popravak funkcionira

**Primjer preporuke za poboljšanje:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strateške faze implementacije:**

- **Faza 1 (0-2 tjedna)**: Kritični problemi koji blokiraju osnovnu funkcionalnost
- **Faza 2 (1-2 mjeseca)**: Poboljšanja visokog prioriteta za bolje korisničko iskustvo
- **Faza 3 (3-6 mjeseci)**: Poboljšanja srednjeg prioriteta i poboljšanja procesa
- **Faza 4 (kontinuirano)**: Kontinuirano praćenje i poboljšanje

## Rubrika za ocjenjivanje

Vaša revizija pristupačnosti ocjenjivat će se na temelju tehničke točnosti i profesionalne prezentacije:

| Kriterij | Izvrsno (90-100%) | Dobro (80-89%) | Zadovoljavajuće (70-79%) | Potrebno poboljšanje (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Dubina ručnog testiranja** | Sveobuhvatna evaluacija koja pokriva sve POUR principe s detaljnim opažanjima i korisničkim scenarijima | Dobro pokrivanje većine područja pristupačnosti s jasnim nalazima i nekim analizama utjecaja na korisnike | Osnovna evaluacija ključnih područja s adekvatnim opažanjima | Ograničeno testiranje s površnim opažanjima i minimalnim razmatranjem utjecaja na korisnike |
| **Korištenje alata i analiza** | Učinkovito korištenje svih potrebnih alata, križno referenciranje nalaza, uključuje jasne dokaze i analizira ograničenja alata | Korištenje većine alata s dobrom dokumentacijom, nekim križnim referenciranjem i adekvatnim dokazima | Korištenje potrebnih alata s osnovnom dokumentacijom i nekim dokazima | Minimalno korištenje alata, loša dokumentacija ili nedostatak dokaza |
| **Identifikacija i kategorizacija problema** | Identificira 15+ specifičnih problema prema svim WCAG principima, točno kategorizira prema ozbiljnosti, pokazuje duboko razumijevanje | Identificira 10-14 problema prema većini WCAG principa, dobra kategorizacija, pokazuje solidno razumijevanje | Identificira 7-9 problema s adekvatnim pokrivanjem WCAG-a i osnovnom kategorizacijom | Identificira <7 problema s ograničenim opsegom ili lošom kategorizacijom |
| **Kvaliteta i izvedivost rješenja** | 10+ detaljnih, provedivih rješenja s točnim WCAG referencama, realističnim vremenskim okvirima implementacije i metodama provjere | 8-9 dobro razvijenih rješenja s uglavnom točnim referencama i dobrim detaljima implementacije | 6-7 osnovnih rješenja s nekim detaljima i općenito realističnim pristupima | <6 rješenja ili nedovoljno detalja, nerealne implementacije |
| **Profesionalna komunikacija** | Izvještaj je izvrsno organiziran, jasno napisan, uključuje sažetak, koristi odgovarajući tehnički jezik i slijedi standarde poslovne dokumentacije | Dobro organiziran s kvalitetom pisanja, uključuje većinu potrebnih dijelova, odgovarajući ton | Adekvatno organiziran s prihvatljivim pisanjem, uključuje osnovne potrebne dijelove | Loša organizacija, nejasno pisanje ili nedostaju ključni dijelovi |
| **Primjena u stvarnom svijetu** | Pokazuje razumijevanje poslovnog utjecaja, pravnih razmatranja, raznolikosti korisnika i praktičnih izazova implementacije | Pokazuje dobro razumijevanje praktičnih primjena s nekim poslovnim kontekstom | Osnovno razumijevanje primjena u stvarnom svijetu | Ograničena povezanost s praktičnim primjenama |

## Opcije za napredni izazov

**🚀 Za studente koji traže dodatni izazov:**

- **Komparativna analiza**: Provedite reviziju 2-3 konkurentske web stranice i usporedite njihovu razinu pristupačnosti
- **Fokus na mobilnu pristupačnost**: Detaljno istražite specifične probleme pristupačnosti na mobilnim uređajima koristeći Android TalkBack ili iOS VoiceOver
- **Međunarodna perspektiva**: Istražite i primijenite standarde pristupačnosti iz različitih zemalja (EN 301 549, Section 508, ADA)
- **Pregled izjave o pristupačnosti**: Procijenite postojeću izjavu o pristupačnosti web stranice (ako postoji) u odnosu na vaše nalaze

## Dostava

Predajte sveobuhvatan izvještaj o reviziji pristupačnosti koji pokazuje profesionalnu analizu i praktično planiranje implementacije:

**📄 Zahtjevi za završni izvještaj:**

1. **Sažetak** (1 stranica)
   - Pregled web stranice i procjena zrelosti pristupačnosti
   - Sažetak ključnih nalaza s poslovnim utjecajem
   - Preporučene prioritetne akcije

2. **Metodologija i opseg** (1 stranica)
   - Pristup testiranju, korišteni alati i kriteriji evaluacije
   - Procijenjene stranice/sekcije i eventualna ograničenja
   - Okvir za usklađenost sa standardima (WCAG 2.1 AA)

3. **Detaljni izvještaj o nalazima** (3-4 stranice)
   - Opažanja iz ručnog testiranja s korisničkim scenarijima
   - Rezultati automatiziranih alata s križnim referenciranjem
   - Problemi organizirani prema WCAG principima s dokazima
   - Identificirane pozitivne značajke pristupačnosti

4. **Strateški plan za poboljšanje** (3-4 stranice)
   - Prioritetne preporuke za poboljšanje (minimalno 10)
   - Vremenski okvir implementacije s procjenama napora
   - Metrike uspjeha i metode provjere
   - Dugoročna strategija održavanja pristupačnosti

5. **Potporni dokazi** (Prilozi)
   - Snimke zaslona kršenja pristupačnosti i alata za testiranje
   - Primjeri koda koji pokazuju probleme i rješenja
   - Izvještaji alata i sažeci revizije
   - Bilješke ili snimke testiranja čitača ekrana

**📊 Zahtjevi za format:**
- **Format dokumenta**: PDF (profesionalna prezentacija)
- **Broj riječi**: 2.500-3.500 riječi (ne uključujući priloge i snimke zaslona)
- **Vizualni elementi**: Uključite snimke zaslona, dijagrame i primjere kroz cijeli dokument
- **Citati**: Pravilno citirajte WCAG smjernice i resurse vezane za pristupačnost

**💡 Savjeti za izvrsnost:**
- Koristite profesionalno formatiranje izvještaja s dosljednim naslovima i stilom
- Uključite sadržaj za jednostavnu navigaciju
- Uravnotežite tehničku točnost s jasnim, poslovno prikladnim jezikom
- Pokažite razumijevanje tehničke implementacije i utjecaja na korisnike

## Ishodi učenja

Nakon završetka ove sveobuhvatne revizije pristupačnosti, razviti ćete ključne profesionalne vještine:

**🎯 Tehničke kompetencije:**
- **Majstorstvo testiranja pristupačnosti**: Stručnost u industrijskim standardima ručnog i automatiziranog testiranja
- **Primjena WCAG-a**: Praktično iskustvo primjene Smjernica za pristupačnost web sadržaja u stvarnim scenarijima
- **Razumijevanje asistivne tehnologije**: Praktično iskustvo s čitačima ekrana i navigacijom tipkovnicom
- **Mapiranje problema i rješenja**: Sposobnost identificiranja prepreka pristupačnosti i razvijanja konkretnih, provedivih strategija za poboljšanje

**💼 Profesionalne vještine:**
- **Tehnička komunikacija**: Iskustvo pisanja profesionalnih izvještaja o pristupačnosti za različite dionike
- **Strateško planiranje**: Sposobnost prioritiziranja poboljšanja pristupačnosti na temelju utjecaja na korisnike i izvedivosti implementacije
- **Osiguranje kvalitete**: Razumijevanje testiranja pristupačnosti kao dijela životnog ciklusa razvoja
- **Procjena rizika**: Uvažavanje pravnih, poslovnih i etičkih implikacija usklađenosti s pristupačnošću

**🌍 Mentalitet inkluzivnog dizajna:**
- **Empatija prema korisnicima**: Duboko razumijevanje raznolikih potreba korisnika i interakcija s asistivnom tehnologijom
- **Principi univerzalnog dizajna**: Prepoznavanje da pristupačan diz

---

**Odricanje od odgovornosti**:  
Ovaj dokument je preveden pomoću AI usluge za prevođenje [Co-op Translator](https://github.com/Azure/co-op-translator). Iako nastojimo osigurati točnost, imajte na umu da automatski prijevodi mogu sadržavati pogreške ili netočnosti. Izvorni dokument na izvornom jeziku treba smatrati autoritativnim izvorom. Za ključne informacije preporučuje se profesionalni prijevod od strane čovjeka. Ne preuzimamo odgovornost za nesporazume ili pogrešna tumačenja koja proizlaze iz korištenja ovog prijevoda.