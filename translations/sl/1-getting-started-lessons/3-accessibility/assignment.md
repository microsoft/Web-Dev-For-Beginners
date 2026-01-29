# Celovita revizija dostopnosti spletne strani

## Navodila

V tej nalogi boste izvedli profesionalno revizijo dostopnosti resnične spletne strani, pri čemer boste uporabili principe in tehnike, ki ste se jih naučili. Ta praktična izkušnja bo poglobila vaše razumevanje ovir pri dostopnosti in možnih rešitvah.

Izberite spletno stran, ki ima očitne težave z dostopnostjo—takšna izbira vam bo omogočila več priložnosti za učenje kot analiza že popolne strani. Dobri kandidati vključujejo starejše spletne strani, kompleksne spletne aplikacije ali strani z bogato multimedijsko vsebino.

### Faza 1: Strateška ročna ocena

Preden se zatečete k avtomatiziranim orodjem, izvedite celovito ročno oceno. Ta pristop, osredotočen na človeka, pogosto razkrije težave, ki jih orodja spregledajo, in vam pomaga razumeti resnično uporabniško izkušnjo.

**🔍 Ključna merila ocenjevanja:**

**Navigacija in struktura:**
- Ali lahko po celotni strani navigirate samo s tipkovnico (Tab, Shift+Tab, Enter, Space, puščične tipke)?
- Ali so kazalniki fokusa jasno vidni na vseh interaktivnih elementih?
- Ali struktura naslovov (H1-H6) ustvarja logičen oris vsebine?
- Ali obstajajo povezave za preskok na glavno vsebino?

**Vizualna dostopnost:**
- Ali je na strani zadosten kontrast barv (najmanj 4,5:1 za običajno besedilo)?
- Ali stran temelji izključno na barvi za prenos pomembnih informacij?
- Ali imajo vse slike ustrezno alternativno besedilo?
- Ali postavitev ostane funkcionalna, ko jo povečate na 200%?

**Vsebina in komunikacija:**
- Ali obstajajo povezave z besedilom "kliknite tukaj" ali nejasna besedila povezav?
- Ali lahko razumete vsebino in funkcionalnost brez vizualnih namigov?
- Ali so obrazci ustrezno označeni in razvrščeni?
- Ali so sporočila o napakah jasna in koristna?

**Interaktivni elementi:**
- Ali vsi gumbi in kontrolniki obrazcev delujejo samo s tipkovnico?
- Ali so spremembe dinamične vsebine napovedane bralnikom zaslona?
- Ali modalni dialogi in kompleksni pripomočki sledijo pravilnim vzorcem dostopnosti?

📝 **Dokumentirajte svoje ugotovitve** s specifičnimi primeri, posnetki zaslona in URL-ji strani. Zabeležite tako težave kot tudi dobro izvedene elemente.

### Faza 2: Celovito avtomatizirano testiranje

Sedaj preverite in razširite svoje ročne ugotovitve z uporabo industrijsko standardnih orodij za testiranje dostopnosti. Vsako orodje ima svoje prednosti, zato uporaba več orodij zagotavlja popolno pokritost.

**🛠️ Zahtevana orodja za testiranje:**

1. **Lighthouse Accessibility Audit** (vgrajeno v Chrome/Edge DevTools)
   - Izvedite revizijo na več straneh
   - Osredotočite se na specifične metrike in priporočila
   - Zabeležite svojo oceno dostopnosti in specifične kršitve

2. **axe DevTools** (razširitev brskalnika - industrijski standard)
   - Bolj podrobno zaznavanje težav kot Lighthouse
   - Ponuja specifične primere kode za popravke
   - Testira glede na kriterije WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (razširitev brskalnika)
   - Vizualna predstavitev funkcij dostopnosti
   - Označuje tako napake kot pozitivne lastnosti
   - Odlično za razumevanje strukture strani

4. **Analizatorji kontrasta barv**
   - WebAIM Contrast Checker za specifične barvne pare
   - Razširitve brskalnika za analizo celotne strani
   - Testiranje glede na standarde WCAG AA in AAA

**🎧 Testiranje z resnično asistivno tehnologijo:**
- **Testiranje bralnika zaslona**: Uporabite NVDA (Windows), VoiceOver (Mac) ali TalkBack (Android)
- **Navigacija samo s tipkovnico**: Izključite miško in navigirajte po celotni strani
- **Testiranje povečave**: Preverite funkcionalnost pri 200% in 400% povečavi
- **Testiranje glasovnega upravljanja**: Če je na voljo, preizkusite orodja za glasovno navigacijo

**📊 Organizirajte svoje rezultate** tako, da ustvarite glavno preglednico z:
- Opisom težave in lokacijo
- Stopnjo resnosti (kritična/visoka/srednja/nizka)
- Kršena merila uspešnosti WCAG
- Orodjem, ki je zaznalo težavo
- Posnetki zaslona in dokazi

### Faza 3: Dokumentacija celovitih ugotovitev

Ustvarite profesionalno poročilo o reviziji dostopnosti, ki bo pokazalo vaše razumevanje tehničnih težav in njihovega vpliva na uporabnike.

**📋 Zahtevani deli poročila:**

1. **Izvršni povzetek** (1 stran)
   - URL spletne strani in kratek opis
   - Splošna stopnja zrelosti dostopnosti
   - 3 najpomembnejše težave
   - Ocenjeni vpliv na uporabnike z invalidnostmi

2. **Metodologija** (½ strani)
   - Pristop k testiranju in uporabljena orodja
   - Ocenjene strani in kombinacije naprav/brskalnikov
   - Standardi, po katerih je bila izvedena ocena (WCAG 2.1 AA)

3. **Podrobne ugotovitve** (2-3 strani)
   - Težave razvrščene po načelih WCAG (Zaznavno, Uporabno, Razumljivo, Robustno)
   - Vključite posnetke zaslona in specifične primere
   - Zabeležite pozitivne lastnosti dostopnosti, ki ste jih našli
   - Navzkrižno preverite z rezultati avtomatiziranih orodij

4. **Ocena vpliva na uporabnike** (1 stran)
   - Kako ugotovljene težave vplivajo na uporabnike z različnimi invalidnostmi
   - Scenariji, ki opisujejo resnične uporabniške izkušnje
   - Poslovni vpliv (pravna tveganja, SEO, širitev uporabniške baze)

**📸 Zbiranje dokazov:**
- Posnetki zaslona kršitev dostopnosti
- Posnetki zaslona problematičnih uporabniških tokov
- Poročila orodij (shranite kot PDF)
- Primeri kode, ki prikazujejo težave

### Faza 4: Profesionalni načrt za odpravo težav

Razvijte strateški, prioritetni načrt za odpravo težav z dostopnostjo. To bo pokazalo vašo sposobnost razmišljanja kot profesionalni spletni razvijalec, ki se sooča z resničnimi poslovnimi omejitvami.

**🎯 Ustvarite podrobna priporočila za izboljšave (najmanj 10 težav):**

**Za vsako ugotovljeno težavo navedite:**

- **Opis težave**: Jasna razlaga, kaj je narobe in zakaj je to problematično
- **Referenca WCAG**: Specifična kršena merila uspešnosti (npr. "2.4.4 Namen povezave (v kontekstu) - raven A")
- **Vpliv na uporabnika**: Kako to vpliva na ljudi z različnimi invalidnostmi
- **Rešitev**: Specifične spremembe kode, modifikacije dizajna ali izboljšave procesov
- **Stopnja prioritete**: Kritična (onemogoča osnovno uporabo) / Visoka (pomembna ovira) / Srednja (težava pri uporabi) / Nizka (izboljšava)
- **Ocena zahtevnosti izvedbe**: Časovna/kompleksnostna ocena (Hitro izvedljivo / Zmerno zahtevno / Večja prenova)
- **Preverjanje popravka**: Kako preveriti, ali popravek deluje

**Primer vnosa za izboljšavo:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Strateške faze izvedbe:**

- **Faza 1 (0-2 tedna)**: Kritične težave, ki onemogočajo osnovno funkcionalnost
- **Faza 2 (1-2 meseca)**: Izboljšave z visoko prioriteto za boljšo uporabniško izkušnjo
- **Faza 3 (3-6 mesecev)**: Izboljšave s srednjo prioriteto in izboljšave procesov
- **Faza 4 (neprekinjeno)**: Nenehno spremljanje in izboljšave

## Ocenjevalna lestvica

Vaša revizija dostopnosti bo ocenjena glede na tehnično natančnost in profesionalno predstavitev:

| Merila | Odlično (90-100%) | Dobro (80-89%) | Zadostno (70-79%) | Potrebno izboljšanje (<70%) |
|--------|-------------------|----------------|-------------------|----------------------------|
| **Globina ročnega testiranja** | Celovita ocena, ki pokriva vsa načela POUR z natančnimi opazovanji in uporabniškimi scenariji | Dobro pokrivanje večine področij dostopnosti z jasnimi ugotovitvami in nekaj analize vpliva na uporabnika | Osnovna ocena ključnih področij z ustreznimi opazovanji | Omejeno testiranje s površnimi opazovanji in minimalno analizo vpliva na uporabnika |
| **Uporaba orodij in analiza** | Učinkovita uporaba vseh zahtevanih orodij, navzkrižno preverjanje ugotovitev, jasni dokazi in analiza omejitev orodij | Uporaba večine orodij z dobro dokumentacijo, nekaj navzkrižnega preverjanja in ustreznimi dokazi | Uporaba zahtevanih orodij z osnovno dokumentacijo in nekaj dokazov | Minimalna uporaba orodij, slaba dokumentacija ali manjkajoči dokazi |
| **Identifikacija in kategorizacija težav** | Identificiranih 15+ specifičnih težav po vseh načelih WCAG, natančna kategorizacija po resnosti, globoko razumevanje | Identificiranih 10-14 težav po večini načel WCAG, dobra kategorizacija, solidno razumevanje | Identificiranih 7-9 težav z ustrezno pokritostjo WCAG in osnovno kategorizacijo | Identificiranih <7 težav z omejenim obsegom ali slabo kategorizacijo |
| **Kakovost in izvedljivost rešitev** | 10+ podrobnih, izvedljivih rešitev z natančnimi referencami WCAG, realistični časovni okviri in metode preverjanja | 8-9 dobro razvitih rešitev z večinoma natančnimi referencami in dobrimi podrobnostmi izvedbe | 6-7 osnovnih rešitev z nekaj podrobnostmi in splošno realističnimi pristopi | <6 rešitev ali nezadostne podrobnosti, nerealistične izvedbe |
| **Profesionalna komunikacija** | Poročilo je odlično organizirano, jasno napisano, vključuje izvršni povzetek, uporablja ustrezen tehnični jezik in sledi standardom poslovne dokumentacije | Dobro organizirano z dobro kakovostjo pisanja, vključuje večino zahtevanih delov, ustrezen ton | Ustrezno organizirano z sprejemljivo kakovostjo pisanja, vključuje osnovne zahtevane dele | Slaba organizacija, nejasno pisanje ali manjkajoči ključni deli |
| **Uporaba v resničnem svetu** | Pokaže razumevanje poslovnega vpliva, pravnih vidikov, raznolikosti uporabnikov in praktičnih izzivov izvedbe | Dobro razumevanje praktičnih aplikacij z nekaj poslovnega konteksta | Osnovno razumevanje aplikacij v resničnem svetu | Omejena povezava s praktičnimi aplikacijami |

## Možnosti za napredne izzive

**🚀 Za študente, ki iščejo dodatne izzive:**

- **Primerjalna analiza**: Revizija 2-3 konkurenčnih spletnih strani in primerjava njihove zrelosti dostopnosti
- **Osredotočenost na mobilno dostopnost**: Poglobljena analiza mobilnih specifičnih težav z dostopnostjo z uporabo Android TalkBack ali iOS VoiceOver
- **Mednarodna perspektiva**: Raziskovanje in uporaba standardov dostopnosti iz različnih držav (EN 301 549, Section 508, ADA)
- **Pregled izjave o dostopnosti**: Ocenite obstoječo izjavo o dostopnosti spletne strani (če obstaja) glede na vaše ugotovitve

## Oddaja

Oddajte celovito poročilo o reviziji dostopnosti, ki prikazuje profesionalno analizo in načrt za praktično izvedbo:

**📄 Zahteve za končno poročilo:**

1. **Izvršni povzetek** (1 stran)
   - Pregled spletne strani in ocena zrelosti dostopnosti
   - Povzetek ključnih ugotovitev s poslovnim vplivom
   - Priporočeni prioritetni ukrepi

2. **Metodologija in obseg** (1 stran)
   - Pristop k testiranju, uporabljena orodja in merila ocenjevanja
   - Ocenjene strani/odseki in morebitne omejitve
   - Okvir skladnosti s standardi (WCAG 2.1 AA)

3. **Podrobno poročilo o ugotovitvah** (3-4 strani)
   - Opazovanja ročnega testiranja z uporabniškimi scenariji
   - Rezultati avtomatiziranih orodij z navzkrižnim preverjanjem
   - Težave organizirane po načelih WCAG z dokazi
   - Identificirane pozitivne lastnosti dostopnosti

4. **Strateški načrt za odpravo težav** (3-4 strani)
   - Prioritetna priporočila za izboljšave (najmanj 10)
   - Časovni načrt izvedbe z ocenami zahtevnosti
   - Merila uspešnosti in metode preverjanja
   - Dolgoročna strategija za vzdrževanje dostopnosti

5. **Podporni dokazi** (Priloge)
   - Posnetki zaslona kršitev dostopnosti in orodij za testiranje
   - Primeri kode, ki prikazujejo težave in rešitve
   - Poročila orodij in povzetki revizij
   - Zapiski ali posnetki testiranja bralnikov zaslona

**📊 Zahteve za format:**
- **Format dokumenta**: PDF (profesionalna predstavitev)
- **Število besed**: 2.500-3.500 besed (brez prilog in posnetkov zaslona)
- **Vizualni elementi**: Vključite posnetke zaslona, diagrame in primere skozi celotno poročilo
- **Navedbe virov**: Ustrezno navedite smernice WCAG in vire o dostopnosti

**💡 Nasveti za odličnost:**
- Uporabite profesionalno oblikovanje poročila z doslednimi naslovi in slogom
- Vključite kazalo za lažjo navigacijo
- Uravnotežite tehnično natančnost z jasnim, poslovno primernim jezikom
- Pokažite razumevanje tako tehnične izvedbe kot vpliva na uporabnika

## Cilji učenja

Po zaključku te celovite revizije dostopnosti boste razvili ključne profesionalne veščine:

**🎯 Tehnične kompetence:**
- **Obvladovanje testiranja dostopnosti**: Obvladovanje industrijsko standardnih metod ročnega in avtomatiziranega testiranja
- **Uporaba WCAG**: Praktične izkušnje z uporabo smernic za dostopnost spletnih vsebin v resničnih scenarijih
- **Razumevanje asistivne tehnologije**: Praktične izkušnje z bralniki zaslona in navigacijo s tipkovnico
- **Povezovanje težav in rešitev**: Sposobnost prepoznavanja ovir pri dostopnosti in razvijanja specifičnih, izvedljivih strategij za odpravo težav

**💼 Profesionalne veščine:**
- **Tehnična komunikacija**: Izkušnje pri pisanju profesionalnih poročil o dostopnosti za različne deležnike
- **Strateško načrtovanje**: Sposobnost prioritiziranja izboljšav dostopnosti glede na vpliv na uporabnika in izvedljivost
- **Zagotavljanje kakovosti**: Razumevanje testiranja dostopnosti kot dela razvojnega cikla
- **Ocena tveganja**: Zavedanje pravnih, poslovnih in etičnih vidikov skladnosti z dostopnostjo

**🌍 Miselnost vključujočega oblikovanja:**
- **Empat

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.