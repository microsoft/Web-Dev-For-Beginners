<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2dcbb9259dee4f20a4f08d9a1aa2bd4c",
  "translation_date": "2025-08-29T16:59:01+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "lt"
}
-->
# Įvadas į programavimo kalbas ir įrankius

Šioje pamokoje aptarsime programavimo kalbų pagrindus. Čia pateiktos temos taikomos daugumai šiuolaikinių programavimo kalbų. Skyriuje „Įrankiai“ sužinosite apie naudingą programinę įrangą, kuri padeda dirbant programuotoju.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.lt.png)
> Sketchnote sukūrė [Tomomi Imura](https://twitter.com/girlie_mac)

## Klausimynas prieš paskaitą
[Klausimynas prieš paskaitą](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Įvadas

Šioje pamokoje aptarsime:

- Kas yra programavimas?
- Programavimo kalbų tipai
- Pagrindiniai programos elementai
- Naudinga programinė įranga ir įrankiai profesionaliam programuotojui

> Šią pamoką galite rasti [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Kas yra programavimas?

Programavimas (dar vadinamas kodavimu) – tai procesas, kai rašomos instrukcijos įrenginiui, pavyzdžiui, kompiuteriui ar mobiliajam įrenginiui. Šios instrukcijos rašomos naudojant programavimo kalbą, kurią įrenginys interpretuoja. Šios instrukcijų grupės gali būti vadinamos įvairiais pavadinimais, tačiau populiariausi yra *programa*, *kompiuterio programa*, *aplikacija (app)* ir *vykdomasis failas*.

*Programa* gali būti bet kas, kas parašyta naudojant kodą: svetainės, žaidimai, telefono programėlės. Nors programą galima sukurti ir nerašant kodo, pagrindinė logika, kurią interpretuoja įrenginys, greičiausiai buvo parašyta kodu. Programa, kuri *vykdo* arba *atlieka* kodą, vykdo instrukcijas. Įrenginys, kuriuo skaitote šią pamoką, vykdo programą, kad parodytų ją jūsų ekrane.

✅ Pasidomėkite: kas laikomas pirmuoju pasaulio kompiuterių programuotoju?

## Programavimo kalbos

Programavimo kalbos leidžia programuotojams rašyti instrukcijas įrenginiui. Įrenginiai supranta tik dvejetainį kodą (1 ir 0), o *daugumai* programuotojų tai nėra efektyvus būdas bendrauti. Programavimo kalbos yra tarpininkas tarp žmonių ir kompiuterių.

Programavimo kalbos gali būti įvairių formatų ir tarnauti skirtingiems tikslams. Pavyzdžiui, JavaScript dažniausiai naudojama žiniatinklio programoms, o Bash – operacinėms sistemoms.

*Žemo lygio kalbos* paprastai reikalauja mažiau žingsnių, kad įrenginys interpretuotų instrukcijas, nei *aukšto lygio kalbos*. Tačiau aukšto lygio kalbos yra populiarios dėl jų skaitomumo ir palaikymo. JavaScript laikoma aukšto lygio kalba.

Šis kodas iliustruoja skirtumą tarp aukšto lygio kalbos (JavaScript) ir žemo lygio kalbos (ARM asemblerio kodas).

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

Patikėkite ar ne, *jie abu daro tą patį*: spausdina Fibonacci seką iki 10.

✅ Fibonacci seka yra [apibrėžiama](https://en.wikipedia.org/wiki/Fibonacci_number) kaip skaičių rinkinys, kuriame kiekvienas skaičius yra dviejų ankstesnių suma, pradedant nuo 0 ir 1. Pirmieji 10 Fibonacci sekos skaičių yra 0, 1, 1, 2, 3, 5, 8, 13, 21 ir 34.

## Programos elementai

Vienas programos nurodymas vadinamas *teiginiu* ir paprastai turi simbolį arba tarpo žymeklį, kuris nurodo, kur baigiasi nurodymas, arba *terminuoja*. Kaip programa terminacija vyksta, priklauso nuo kalbos.

Teiginiai programoje gali priklausyti nuo vartotojo pateiktų duomenų ar kitų šaltinių, kad atliktų nurodymus. Duomenys gali pakeisti programos elgseną, todėl programavimo kalbos turi būdą laikinai saugoti duomenis, kad jie galėtų būti naudojami vėliau. Tai vadinama *kintamaisiais*. Kintamieji yra teiginiai, kurie nurodo įrenginiui išsaugoti duomenis savo atmintyje. Kintamieji programose yra panašūs į kintamuosius algebroje, kur jie turi unikalų pavadinimą, o jų reikšmė gali keistis laikui bėgant.

Kai kurie teiginiai gali būti neįvykdyti įrenginio. Tai dažniausiai būna suplanuota programuotojo arba atsitinka netikėtai, kai įvyksta klaida. Tokia programos kontrolė daro ją patikimesnę ir lengviau prižiūrimą. Paprastai šie kontrolės pokyčiai vyksta, kai įvykdomos tam tikros sąlygos. Vienas iš dažniausiai naudojamų teiginių šiuolaikiniame programavime yra `if..else` teiginys.

✅ Apie šį teiginį daugiau sužinosite kitose pamokose.

## Įrankiai

[![Įrankiai](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Įrankiai")

> 🎥 Spustelėkite aukščiau esančią nuotrauką, kad peržiūrėtumėte vaizdo įrašą apie įrankius

Šiame skyriuje sužinosite apie kai kurią programinę įrangą, kuri gali būti labai naudinga pradedant profesionalaus programuotojo kelią.

**Kūrimo aplinka** – tai unikalus įrankių ir funkcijų rinkinys, kurį programuotojas dažnai naudoja rašydamas programinę įrangą. Kai kurie iš šių įrankių yra pritaikyti konkretiems programuotojo poreikiams ir gali keistis laikui bėgant, jei programuotojas keičia darbo prioritetus, asmeninius projektus ar naudoja kitą programavimo kalbą. Kūrimo aplinkos yra tokios unikalios, kaip ir programuotojai, kurie jas naudoja.

### Redaktoriai

Vienas svarbiausių įrankių programinės įrangos kūrimui yra redaktorius. Redaktoriai yra vieta, kur rašote kodą ir kartais jį vykdote.

Programuotojai pasikliauja redaktoriais dėl kelių papildomų priežasčių:

- *Derinimas* padeda aptikti klaidas ir problemas, peržiūrint kodą eilutė po eilutės. Kai kurie redaktoriai turi derinimo galimybes; jie gali būti pritaikyti konkrečioms programavimo kalboms.
- *Sintaksės paryškinimas* prideda spalvų ir teksto formatavimą kodui, todėl jį lengviau skaityti. Dauguma redaktorių leidžia pritaikyti sintaksės paryškinimą.
- *Plėtiniai ir integracijos* – tai specializuoti įrankiai, sukurti programuotojams. Šie įrankiai nebuvo įtraukti į pagrindinį redaktorių. Pavyzdžiui, daugelis programuotojų dokumentuoja savo kodą, kad paaiškintų, kaip jis veikia. Jie gali įdiegti rašybos tikrinimo plėtinį, kad padėtų rasti klaidų dokumentacijoje. Dauguma plėtinių yra skirti naudoti konkrečiame redaktoriuje, o dauguma redaktorių turi būdą ieškoti galimų plėtinių.
- *Pritaikymas* leidžia programuotojams sukurti unikalią kūrimo aplinką, atitinkančią jų poreikius. Dauguma redaktorių yra labai pritaikomi ir gali leisti programuotojams kurti savo plėtinius.

#### Populiarūs redaktoriai ir žiniatinklio kūrimo plėtiniai

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

Kitas svarbus įrankis yra naršyklė. Žiniatinklio kūrėjai pasikliauja naršykle, kad pamatytų, kaip jų kodas veikia internete. Ji taip pat naudojama vizualiniams tinklalapio elementams, parašytiems redaktoriuje, pvz., HTML, atvaizduoti.

Daugelis naršyklių turi *kūrėjų įrankius* (DevTools), kurie apima naudingų funkcijų ir informacijos rinkinį, padedantį kūrėjams rinkti ir fiksuoti svarbią informaciją apie jų programą. Pavyzdžiui: jei tinklalapyje yra klaidų, kartais naudinga žinoti, kada jos įvyko. Naršyklės kūrėjų įrankiai gali būti sukonfigūruoti šiai informacijai fiksuoti.

#### Populiarios naršyklės ir kūrėjų įrankiai

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Komandinės eilutės įrankiai

Kai kurie programuotojai pirmenybę teikia mažiau grafinei aplinkai kasdienėms užduotims atlikti ir pasikliauja komandinės eilutės įrankiais. Rašant kodą reikia daug spausdinimo, ir kai kurie programuotojai nenori nutraukti savo darbo srauto naudodami pelę. Jie naudoja klaviatūros sparčiuosius klavišus, kad perjungtų darbalaukio langus, dirbtų su skirtingais failais ir naudotų įrankius. Nors daugumą užduočių galima atlikti pele, vienas iš komandinės eilutės privalumų yra tas, kad daug ką galima atlikti be perjungimo tarp pelės ir klaviatūros. Kitas komandinės eilutės privalumas yra tas, kad ji yra konfigūruojama, ir jūs galite išsaugoti savo konfigūraciją, ją pakeisti vėliau ir importuoti į kitus kūrimo kompiuterius. Kadangi kūrimo aplinkos yra tokios unikalios, kai kurie programuotojai vengia naudoti komandines eilutes, kai kurie visiškai jomis pasikliauja, o kai kurie renkasi mišrų variantą.

### Populiarios komandinės eilutės parinktys

Komandinės eilutės parinktys skiriasi priklausomai nuo naudojamos operacinės sistemos.

*💻 = iš anksto įdiegta operacinėje sistemoje.*

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

Kai programuotojas nori išmokti ką nors naujo, jis greičiausiai kreipsis į dokumentaciją, kad sužinotų, kaip naudoti įrankį ar kalbą. Programuotojai dažnai remiasi dokumentacija, kad sužinotų, kaip tinkamai naudoti įrankius ir kalbas, taip pat kad giliau suprastų, kaip jie veikia.

#### Populiari dokumentacija apie žiniatinklio kūrimą

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), iš Mozilla, [Firefox](https://www.mozilla.org/firefox/) naršyklės leidėjų
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), iš Google, [Chrome](https://www.google.com/chrome/) leidėjų
- [Microsoft kūrėjų dokumentacija](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), skirta [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Pasidomėkite: Dabar, kai žinote pagrindus apie žiniatinklio kūrėjo aplinką, palyginkite ją su žiniatinklio dizainerio aplinka.

---

## 🚀 Iššūkis

Palyginkite kai kurias programavimo kalbas. Kokie yra unikalūs JavaScript ir Java bruožai? O kaip COBOL ir Go?

## Klausimynas po paskaitos
[Klausimynas po paskaitos](https://ff-quizzes.netlify.app/web/)

## Apžvalga ir savarankiškas mokymasis

Pasidomėkite įvairiomis programuotojams prieinamomis kalbomis. Pabandykite parašyti vieną eilutę viena kalba, o tada perrašykite ją dviem kitomis. Ką sužinojote?

## Užduotis

[Skaitykite dokumentaciją](assignment.md)

---

**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant AI vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, prašome atkreipti dėmesį, kad automatiniai vertimai gali turėti klaidų ar netikslumų. Originalus dokumentas jo gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Dėl svarbios informacijos rekomenduojama profesionali žmogaus vertimo paslauga. Mes neprisiimame atsakomybės už nesusipratimus ar klaidingus interpretavimus, atsiradusius naudojant šį vertimą.