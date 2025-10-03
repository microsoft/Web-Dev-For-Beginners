<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-03T10:57:24+00:00",
  "source_file": "for-teachers.md",
  "language_code": "sl"
}
-->
### Za učitelje

Vabljeni, da uporabite ta učni načrt v svojem razredu. Odlično deluje z GitHub Classroom in vodilnimi platformami LMS, prav tako pa ga lahko uporabljate kot samostojno repozitorij s svojimi učenci.

### Uporaba z GitHub Classroom

Za upravljanje lekcij in nalog po skupinah ustvarite en repozitorij na lekcijo, da lahko GitHub Classroom vsako nalogo obravnava neodvisno.

- Forkajte ta repozitorij v svojo organizacijo.
- Ustvarite ločen repozitorij za vsako lekcijo tako, da iz vsake mape lekcije ustvarite svoj repozitorij.
  - Možnost A: Ustvarite prazne repozitorije (enega za vsako lekcijo) in vanje kopirajte vsebino mape lekcije.
  - Možnost B: Uporabite pristop, ki ohranja zgodovino Git (npr. razdelitev mape v nov repozitorij), če potrebujete sledljivost.
- V GitHub Classroom ustvarite nalogo za vsako lekcijo in jo povežite z ustreznim repozitorijem lekcije.
- Priporočene nastavitve:
  - Vidnost repozitorija: zasebno za delo učencev.
  - Uporabite začetno kodo iz privzete veje repozitorija lekcije.
  - Dodajte predloge za težave (Issues) in pull requeste za kvize in oddaje.
  - Po želji konfigurirajte samodejno ocenjevanje in teste, če jih lekcije vključujejo.
- Koristne konvencije:
  - Imena repozitorijev, kot so lesson-01-intro, lesson-02-html itd.
  - Oznake: quiz, assignment, needs-review, late, resubmission.
  - Oznake/izdaje po skupinah (npr. v2025-term1).

Nasvet: Izogibajte se shranjevanju repozitorijev v sinhroniziranih mapah (npr. OneDrive/Google Drive), da preprečite konflikte Git na Windows.

### Uporaba z Moodle, Canvas ali Blackboard

Ta učni načrt vključuje uvozne pakete za običajne LMS delovne tokove.

- Moodle: Uporabite datoteko za nalaganje Moodle [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz) za nalaganje celotnega tečaja.
- Common Cartridge: Uporabite datoteko Common Cartridge [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) za širšo združljivost LMS.
- Opombe:
  - Moodle Cloud ima omejeno podporo za Common Cartridge. Raje uporabite zgornjo datoteko Moodle, ki jo lahko naložite tudi v Canvas.
  - Po uvozu pregledajte module, roke in nastavitve kvizov, da se ujemajo z vašim urnikom semestra.

![Moodle](../../translated_images/moodle.94eb93d714a50cb2c97435b408017dee224348b61bc86203ffd43a4f4e57b95f.sl.png)
> Učni načrt v učilnici Moodle

![Canvas](../../translated_images/canvas.fbd605ff8e5b8aff567d398528ce113db304446b90b9cad55c654de3fdfcda34.sl.png)
> Učni načrt v Canvas

### Neposredna uporaba repozitorija (brez Classroom)

Če ne želite uporabljati GitHub Classroom, lahko tečaj izvajate neposredno iz tega repozitorija.

- Sinhroni/spletni formati (Zoom/Teams):
  - Izvedite kratke uvodne vaje pod mentorstvom; za kvize uporabite ločene sobe.
  - Objavite časovno okno za kvize; učenci oddajo odgovore kot GitHub Issues.
  - Pri skupinskih nalogah učenci delajo v javnih repozitorijih lekcij in odprejo pull requeste.
- Zasebni/asinhroni formati:
  - Učenci forkajo vsako lekcijo v svoje **zasebne** repozitorije in vas dodajo kot sodelavca.
  - Oddajo prek Issues (kvizi) in Pull Requestov (naloge) v vašem repozitoriju učilnice ali njihovih zasebnih forkih.

### Najboljše prakse

- Pripravite uvodno lekcijo o osnovah Git/GitHub, Issues in PR-jev.
- Uporabite kontrolne sezname v Issues za večstopenjske kvize/naloge.
- Dodajte CONTRIBUTING.md in CODE_OF_CONDUCT.md za vzpostavitev norm v učilnici.
- Dodajte opombe o dostopnosti (alt besedilo, podnapisi) in ponudite tiskljive PDF-je.
- Verzionirajte svojo vsebino po semestrih in zamrznite repozitorije lekcij po objavi.

### Povratne informacije in podpora

Želimo, da ta učni načrt deluje za vas in vaše učence. Prosimo, odprite nov Issue v tem repozitoriju za napake, zahteve ali izboljšave, ali začnite razpravo v Teacher Corner.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve AI za prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.