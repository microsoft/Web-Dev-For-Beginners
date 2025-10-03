<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T11:10:30+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "lt"
}
-->
# Įvadas į programavimo kalbas ir įrankius

Ši pamoka apima programavimo kalbų pagrindus. Čia aptariamos temos taikomos daugumai šiuolaikinių programavimo kalbų. Skiltyje „Įrankiai“ sužinosite apie naudingą programinę įrangą, kuri padeda dirbant kaip programuotojui.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.lt.png)
> Sketchnote sukūrė [Tomomi Imura](https://twitter.com/girlie_mac)

## Prieš paskaitą: testas
[Prieš paskaitą: testas](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Įvadas

Šioje pamokoje aptarsime:

- Kas yra programavimas?
- Programavimo kalbų tipai
- Pagrindiniai programos elementai
- Naudinga programinė įranga ir įrankiai profesionaliam programuotojui

> Šią pamoką galite rasti [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Kas yra programavimas?

Programavimas (dar vadinamas kodavimu) – tai procesas, kai rašomos instrukcijos įrenginiui, pavyzdžiui, kompiuteriui ar mobiliajam įrenginiui. Šios instrukcijos rašomos programavimo kalba, kurią vėliau interpretuoja įrenginys. Šios instrukcijų grupės gali būti vadinamos įvairiais pavadinimais, tačiau *programa*, *kompiuterio programa*, *aplikacija (programėlė)* ir *vykdomasis failas* yra keli populiarūs pavadinimai.

*Programa* gali būti bet kas, kas yra sukurta naudojant kodą: svetainės, žaidimai, telefonų programėlės. Nors programą galima sukurti ir nerašant kodo, pagrindinė logika vis tiek interpretuojama įrenginio, o ta logika greičiausiai buvo parašyta kodu. Programa, kuri *vykdo* arba *atlieka* kodą, vykdo instrukcijas. Įrenginys, kuriuo skaitote šią pamoką, vykdo programą, kad atvaizduotų ją jūsų ekrane.

✅ Atlikite nedidelį tyrimą: kas laikomas pirmuoju pasaulyje kompiuterių programuotoju?

## Programavimo kalbos

Programavimo kalbos leidžia programuotojams rašyti instrukcijas įrenginiui. Įrenginiai supranta tik dvejetainį kodą (1 ir 0), o *daugumai* programuotojų tai nėra efektyvus būdas bendrauti. Programavimo kalbos yra priemonė, leidžianti žmonėms bendrauti su kompiuteriais.

Programavimo kalbos gali būti įvairių formatų ir tarnauti skirtingiems tikslams. Pavyzdžiui, JavaScript dažniausiai naudojamas interneto aplikacijoms, o Bash – operacinėms sistemoms.

*Žemo lygio kalbos* paprastai reikalauja mažiau žingsnių, kad įrenginys interpretuotų instrukcijas, nei *aukšto lygio kalbos*. Tačiau aukšto lygio kalbos yra populiarios dėl jų skaitomumo ir palaikymo. JavaScript laikomas aukšto lygio kalba.

Šis kodas iliustruoja skirtumą tarp aukšto lygio kalbos (JavaScript) ir žemo lygio kalbos (ARM assembly kodas).

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Patikėkite ar ne, *abu kodai daro tą patį*: spausdina Fibonacci seką iki 10.

✅ Fibonacci seka yra [apibrėžiama](https://en.wikipedia.org/wiki/Fibonacci_number) kaip skaičių rinkinys, kuriame kiekvienas skaičius yra dviejų ankstesnių skaičių suma, pradedant nuo 0 ir 1. Pirmieji 10 Fibonacci sekos skaičių yra 0, 1, 1, 2, 3, 5, 8, 13, 21 ir 34.

## Programos elementai

Vienas programos nurodymas vadinamas *teiginiu* ir paprastai turi simbolį arba eilutės tarpą, kuris žymi, kur nurodymas baigiasi, arba *terminuojasi*. Kaip programa terminuoja, priklauso nuo kalbos.

Teiginiai programoje gali priklausyti nuo vartotojo pateiktų duomenų ar kitų šaltinių, kad atliktų instrukcijas. Duomenys gali pakeisti programos elgesį, todėl programavimo kalbos turi būdą laikinai saugoti duomenis, kad jie galėtų būti naudojami vėliau. Tai vadinama *kintamaisiais*. Kintamieji yra teiginiai, kurie nurodo įrenginiui išsaugoti duomenis savo atmintyje. Kintamieji programose yra panašūs į kintamuosius algebroje, kur jie turi unikalų pavadinimą, o jų vertė gali keistis laikui bėgant.

Kai kurie teiginiai gali būti neįvykdyti įrenginio. Tai dažniausiai būna tyčia, kai tai numato programuotojas, arba netyčia, kai įvyksta nenumatyta klaida. Tokia kontrolė programoje daro ją patvaresnę ir lengviau prižiūrimą. Paprastai šie kontrolės pokyčiai vyksta, kai tam tikros sąlygos yra įvykdytos. Vienas iš dažniausiai naudojamų teiginių šiuolaikiniame programavime, kuris kontroliuoja, kaip programa veikia, yra `if..else` teiginys.

✅ Apie šį teiginį sužinosite daugiau kitose pamokose.

## Įrankiai

[![Įrankiai](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Įrankiai")

> 🎥 Spustelėkite aukščiau esančią nuotrauką, kad peržiūrėtumėte vaizdo įrašą apie įrankius

Šioje skiltyje sužinosite apie kai kurią programinę įrangą, kuri gali būti labai naudinga pradedant profesionalaus programuotojo kelią.

**Kūrimo aplinka** – tai unikalus įrankių ir funkcijų rinkinys, kurį programuotojas dažnai naudoja rašydamas programinę įrangą. Kai kurie iš šių įrankių yra pritaikyti programuotojo specifiniams poreikiams ir gali keistis laikui bėgant, jei programuotojas keičia darbo prioritetus, asmeninius projektus arba naudoja kitą programavimo kalbą. Kūrimo aplinkos yra tokios unikalios, kaip ir programuotojai, kurie jas naudoja.

### Redaktoriai

Vienas iš svarbiausių įrankių programinės įrangos kūrimui yra redaktorius. Redaktoriai yra vieta, kur rašote savo kodą ir kartais jį vykdote.

Programuotojai pasikliauja redaktoriais dėl kelių papildomų priežasčių:

- *Debugging* padeda aptikti klaidas ir netikslumus, peržiūrint kodą eilutė po eilutės. Kai kurie redaktoriai turi debugging galimybes; jie gali būti pritaikyti ir pridėti specifinėms programavimo kalboms.
- *Sintaksės paryškinimas* prideda spalvas ir teksto formatavimą kodui, kad jį būtų lengviau skaityti. Dauguma redaktorių leidžia pritaikyti sintaksės paryškinimą.
- *Plėtiniai ir integracijos* yra specializuoti įrankiai programuotojams, sukurti programuotojų. Šie įrankiai nebuvo įtraukti į pagrindinį redaktorių. Pavyzdžiui, daugelis programuotojų dokumentuoja savo kodą, kad paaiškintų, kaip jis veikia. Jie gali įdiegti rašybos tikrinimo plėtinį, kad padėtų rasti klaidas dokumentacijoje. Dauguma plėtinių yra skirti naudoti konkrečiame redaktoriuje, o dauguma redaktorių turi būdą ieškoti galimų plėtinių.
- *Pritaikymas* leidžia programuotojams sukurti unikalią kūrimo aplinką, atitinkančią jų poreikius. Dauguma redaktorių yra labai pritaikomi ir gali leisti programuotojams kurti savo plėtinius.

#### Populiarūs redaktoriai ir interneto kūrimo plėtiniai

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Naršyklės

Kitas svarbus įrankis yra naršyklė. Interneto programuotojai pasikliauja naršykle, kad pamatytų, kaip jų kodas veikia internete. Ji taip pat naudojama vizualiniams interneto puslapio elementams, kurie yra parašyti redaktoriuje, kaip HTML, atvaizduoti.

Daugelis naršyklių turi *programuotojų įrankius* (DevTools), kurie apima naudingų funkcijų ir informacijos rinkinį, padedantį programuotojams surinkti ir užfiksuoti svarbią informaciją apie jų aplikaciją. Pavyzdžiui: jei interneto puslapyje yra klaidų, kartais naudinga žinoti, kada jos įvyko. DevTools naršyklėje gali būti sukonfigūruoti, kad užfiksuotų šią informaciją.

#### Populiarios naršyklės ir DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Komandinės eilutės įrankiai

Kai kurie programuotojai renkasi mažiau grafišką vaizdą savo kasdieniams darbams ir pasikliauja komandinės eilutės įrankiais. Rašant kodą reikia daug spausdinimo, ir kai kurie programuotojai renkasi nenutraukti savo darbo srauto klaviatūroje. Jie naudoja klaviatūros sparčiuosius klavišus, kad perjungtų darbalaukio langus, dirbtų su skirtingais failais ir naudotų įrankius. Daugumą užduočių galima atlikti pele, tačiau vienas iš komandinės eilutės privalumų yra tas, kad daug ką galima atlikti naudojant komandinės eilutės įrankius, nereikia perjungti tarp pelės ir klaviatūros. Kitas komandinės eilutės privalumas yra tas, kad ji yra konfigūruojama, ir jūs galite išsaugoti pasirinktą konfigūraciją, vėliau ją pakeisti ir importuoti į kitus kūrimo kompiuterius. Kadangi kūrimo aplinkos yra tokios unikalios kiekvienam programuotojui, kai kurie vengia naudoti komandinę eilutę, kai kurie visiškai ja pasikliauja, o kai kurie renkasi mišrų variantą.

### Populiarios komandinės eilutės parinktys

Komandinės eilutės parinktys skiriasi priklausomai nuo naudojamos operacinės sistemos.

*💻 = įdiegta operacinėje sistemoje.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (dar žinoma kaip CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Populiarūs komandinės eilutės įrankiai

- [Git](https://git-scm.com/) (💻 daugumoje operacinių sistemų)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Dokumentacija

Kai programuotojas nori išmokti kažką naujo, jis greičiausiai kreipsis į dokumentaciją, kad sužinotų, kaip tai naudoti. Programuotojai dažnai pasikliauja dokumentacija, kad sužinotų, kaip tinkamai naudoti įrankius ir kalbas, taip pat kad įgytų gilesnių žinių apie jų veikimą.

#### Populiari dokumentacija apie interneto kūrimą

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), iš Mozilla, [Firefox](https://www.mozilla.org/firefox/) naršyklės leidėjų
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), iš Google, [Chrome](https://www.google.com/chrome/) leidėjų
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), apie [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Atlikite tyrimą: Dabar, kai žinote interneto programuotojo aplinkos pagrindus, palyginkite ją su interneto dizainerio aplinka.

---

## 🚀 Iššūkis

Palyginkite kai kurias programavimo kalbas. Kokie yra unikalūs JavaScript ir Java bruožai? O kaip COBOL ir Go?

## Po paskaitos: testas
[Po paskaitos: testas](https://ff-quizzes.netlify.app/web/)

## Apžvalga ir savarankiškas mokymasis

Pasidomėkite įvairiomis programavimo kalbomis. Pabandykite parašyti eilutę viena kalba, o tada perrašykite ją dviem kitomis. Ką sužinojote?

## Užduotis

[Dokumentacijos skaitymas](assignment.md)

> Pastaba: Renkantis įrankius užduočiai, nesirinkite redaktorių, naršyklių ar komandinės eilutės įrankių, kurie jau išvardyti aukščiau.

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipiame dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Kritinei informacijai rekomenduojama naudotis profesionalių vertėjų paslaugomis. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus aiškinimus, kylančius dėl šio vertimo naudojimo.