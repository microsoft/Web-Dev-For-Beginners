<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2dcbb9259dee4f20a4f08d9a1aa2bd4c",
  "translation_date": "2025-08-29T10:13:50+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "sw"
}
-->
# Utangulizi wa Lugha za Kuprogramu na Zana Muhimu

Somo hili linashughulikia misingi ya lugha za kuprogramu. Mada zilizojadiliwa hapa zinahusu lugha nyingi za kisasa za kuprogramu. Katika sehemu ya 'Zana Muhimu', utajifunza kuhusu programu muhimu zinazosaidia kama msanidi programu.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Jaribio Kabla ya Somo
[Jaribio kabla ya somo](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Utangulizi

Katika somo hili, tutajadili:

- Kuprogramu ni nini?
- Aina za lugha za kuprogramu
- Vipengele vya msingi vya programu
- Programu na zana muhimu kwa msanidi programu wa kitaalamu

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Kuprogramu ni nini?

Kuprogramu (pia hujulikana kama coding) ni mchakato wa kuandika maagizo kwa kifaa kama vile kompyuta au kifaa cha mkononi. Tunaandika maagizo haya kwa kutumia lugha ya kuprogramu, ambayo baadaye hutafsiriwa na kifaa. Seti hizi za maagizo zinaweza kuitwa majina mbalimbali, lakini *programu*, *programu ya kompyuta*, *aplikesheni (app)*, na *executable* ni baadhi ya majina maarufu.

*Programu* inaweza kuwa chochote kilichoandikwa kwa kutumia msimbo; tovuti, michezo, na programu za simu ni programu. Ingawa inawezekana kuunda programu bila kuandika msimbo, mantiki ya msingi hutafsiriwa na kifaa, na mantiki hiyo mara nyingi huandikwa kwa msimbo. Programu inayotekeleza msimbo inafuata maagizo. Kifaa unachotumia kusoma somo hili kinaendesha programu ili kuonyesha kwenye skrini yako.

✅ Fanya utafiti kidogo: Nani anachukuliwa kuwa mpangaji wa kwanza wa kompyuta duniani?

## Lugha za Kuprogramu

Lugha za kuprogramu huwezesha wasanidi programu kuandika maagizo kwa kifaa. Vifaa vinaweza kuelewa tu binary (1s na 0s), na kwa *wengi* wa wasanidi programu, hiyo si njia bora ya kuwasiliana. Lugha za kuprogramu ni njia ya mawasiliano kati ya binadamu na kompyuta.

Lugha za kuprogramu huja katika miundo tofauti na zinaweza kutumika kwa madhumuni tofauti. Kwa mfano, JavaScript hutumika hasa kwa programu za wavuti, wakati Bash hutumika hasa kwa mifumo ya uendeshaji.

*Lugha za kiwango cha chini* kwa kawaida huhitaji hatua chache zaidi kuliko *lugha za kiwango cha juu* kwa kifaa kutafsiri maagizo. Hata hivyo, kinachofanya lugha za kiwango cha juu kuwa maarufu ni usomaji wake rahisi na msaada wake. JavaScript inachukuliwa kuwa lugha ya kiwango cha juu.

Msimbo ufuatao unaonyesha tofauti kati ya lugha ya kiwango cha juu kwa JavaScript na lugha ya kiwango cha chini kwa msimbo wa ARM assembly.

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

Amini usiamini, *zote mbili zinafanya jambo lile lile*: kuchapisha mlolongo wa Fibonacci hadi 10.

✅ Mlolongo wa Fibonacci [unafafanuliwa](https://en.wikipedia.org/wiki/Fibonacci_number) kama seti ya namba ambapo kila namba ni jumla ya namba mbili zilizotangulia, kuanzia 0 na 1. Namba 10 za kwanza katika mlolongo wa Fibonacci ni 0, 1, 1, 2, 3, 5, 8, 13, 21, na 34.

## Vipengele vya Programu

Maagizo moja katika programu huitwa *tamko* na kwa kawaida litakuwa na herufi au nafasi ya mstari inayoweka alama mahali ambapo maagizo yanakamilika, au *kumalizika*. Jinsi programu inavyomalizika hutofautiana na kila lugha.

Matamko ndani ya programu yanaweza kutegemea data inayotolewa na mtumiaji au mahali pengine ili kutekeleza maagizo. Data inaweza kubadilisha jinsi programu inavyofanya kazi, kwa hivyo lugha za kuprogramu huja na njia ya kuhifadhi data kwa muda ili iweze kutumika baadaye. Hizi huitwa *vigezo*. Vigezo ni matamko yanayoelekeza kifaa kuhifadhi data kwenye kumbukumbu yake. Vigezo katika programu ni sawa na vigezo katika algebra, ambapo vina jina la kipekee na thamani yake inaweza kubadilika kwa muda.

Kuna uwezekano kwamba baadhi ya matamko hayatafanywa na kifaa. Hii kwa kawaida hufanyika kwa muundo wakati imeandikwa na msanidi programu au kwa bahati mbaya wakati kosa lisilotarajiwa linatokea. Udhibiti huu wa programu hufanya iwe thabiti zaidi na rahisi kudumisha. Kwa kawaida, mabadiliko haya ya udhibiti hutokea wakati masharti fulani yanatimizwa. Tamko la kawaida linalotumika katika programu za kisasa kudhibiti jinsi programu inavyofanya kazi ni tamko la `if..else`.

✅ Utajifunza zaidi kuhusu aina hii ya tamko katika masomo yanayofuata.

## Zana Muhimu

[![Zana Muhimu](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Zana Muhimu")

> 🎥 Bofya picha hapo juu kwa video kuhusu zana

Katika sehemu hii, utajifunza kuhusu programu ambazo unaweza kuona kuwa muhimu sana unapopiga hatua katika safari yako ya maendeleo ya kitaalamu.

**Mazingira ya maendeleo** ni seti ya kipekee ya zana na vipengele ambavyo msanidi programu hutumia mara kwa mara wakati wa kuandika programu. Baadhi ya zana hizi zimeboreshwa kwa mahitaji maalum ya msanidi programu, na zinaweza kubadilika kwa muda ikiwa msanidi programu atabadilisha vipaumbele katika kazi, miradi binafsi, au anapotumia lugha tofauti ya kuprogramu. Mazingira ya maendeleo ni ya kipekee kama wasanidi programu wanaoyatumia.

### Vihariri

Moja ya zana muhimu zaidi kwa maendeleo ya programu ni kihariri. Vihariri ni mahali unapoweka msimbo wako na wakati mwingine mahali unapotekeleza msimbo wako.

Wasanidi programu hutegemea vihariri kwa sababu chache za ziada:

- *Kutatua hitilafu* husaidia kugundua hitilafu na makosa kwa kupitia msimbo, mstari kwa mstari. Baadhi ya vihariri vina uwezo wa kutatua hitilafu; vinaweza kuboreshwa na kuongezwa kwa lugha maalum za kuprogramu.
- *Uwekaji rangi wa sintaksia* huongeza rangi na muundo wa maandishi kwenye msimbo, na kuufanya uwe rahisi kusoma. Vihariri vingi huruhusu uwekaji rangi wa sintaksia uliobinafsishwa.
- *Viendelezi na Muunganiko* ni zana maalum kwa wasanidi programu, zilizotengenezwa na wasanidi programu. Zana hizi hazikujengwa ndani ya kihariri cha msingi. Kwa mfano, wasanidi wengi huandika maelezo ya msimbo wao kuelezea jinsi unavyofanya kazi. Wanaweza kusakinisha kiendelezi cha ukaguzi wa tahajia kusaidia kugundua makosa ya tahajia ndani ya maelezo. Viendelezi vingi vinakusudiwa kutumika ndani ya kihariri maalum, na vihariri vingi huja na njia ya kutafuta viendelezi vinavyopatikana.
- *Ubinafsishaji* huwezesha wasanidi programu kuunda mazingira ya kipekee ya maendeleo yanayokidhi mahitaji yao. Vihariri vingi vinaweza kubinafsishwa sana na vinaweza pia kuruhusu wasanidi programu kuunda viendelezi vyao vya kipekee.

#### Vihariri Maarufu na Viendelezi vya Maendeleo ya Wavuti

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

### Vivinjari

Zana nyingine muhimu ni kivinjari. Wasanidi wa wavuti hutegemea kivinjari kuona jinsi msimbo wao unavyofanya kazi kwenye wavuti. Pia hutumika kuonyesha vipengele vya kuona vya ukurasa wa wavuti vilivyoandikwa kwenye kihariri, kama vile HTML.

Vivinjari vingi huja na *zana za wasanidi programu* (DevTools) ambazo zina seti ya vipengele muhimu na taarifa za kusaidia wasanidi programu kukusanya na kunasa taarifa muhimu kuhusu programu zao. Kwa mfano: Ikiwa ukurasa wa wavuti una makosa, wakati mwingine ni muhimu kujua yalitokea lini. DevTools kwenye kivinjari inaweza kusanidiwa kunasa taarifa hii.

#### Vivinjari Maarufu na DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Zana za Laini ya Amri

Baadhi ya wasanidi programu wanapendelea mtazamo usio wa picha kwa kazi zao za kila siku na hutegemea laini ya amri kufanikisha hili. Kuandika msimbo kunahitaji kiasi kikubwa cha kuandika, na baadhi ya wasanidi programu wanapendelea kutoingiliwa na mzunguko wa kubadilisha kati ya panya na kibodi. Wanaweza kutumia njia za mkato za kibodi kubadilisha kati ya madirisha ya desktop, kufanya kazi kwenye faili tofauti, na kutumia zana. Ingawa kazi nyingi zinaweza kufanywa kwa kutumia panya, faida moja ya kutumia laini ya amri ni kwamba mengi yanaweza kufanywa bila kubadilisha kati ya panya na kibodi. Faida nyingine ya laini ya amri ni kwamba zinaweza kusanidiwa na unaweza kuhifadhi usanidi maalum, kuubadilisha baadaye, na kuuingiza kwenye mashine nyingine za maendeleo. Kwa sababu mazingira ya maendeleo ni ya kipekee kwa kila msanidi programu, baadhi wataepuka kutumia laini ya amri, wengine wataitegemea kabisa, na wengine wanapendelea mchanganyiko wa zote mbili.

### Chaguo Maarufu za Laini ya Amri

Chaguo za laini ya amri zitategemea mfumo wa uendeshaji unaotumia.

*💻 = huja ikiwa imewekwa awali kwenye mfumo wa uendeshaji.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (pia inajulikana kama CMD) 💻
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

#### Zana Maarufu za Laini ya Amri

- [Git](https://git-scm.com/) (💻 kwenye mifumo mingi ya uendeshaji)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Nyaraka

Wakati msanidi programu anataka kujifunza kitu kipya, mara nyingi atageukia nyaraka ili kujifunza jinsi ya kutumia zana au lugha ipasavyo. Wasanidi programu mara nyingi hutegemea nyaraka kuwaongoza jinsi ya kutumia zana na lugha kwa usahihi, na pia kupata maarifa ya kina kuhusu jinsi inavyofanya kazi.

#### Nyaraka Maarufu za Maendeleo ya Wavuti

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), kutoka Mozilla, wachapishaji wa kivinjari cha [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), kutoka Google, wachapishaji wa [Chrome](https://www.google.com/chrome/)
- [Nyaraka za wasanidi wa Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), kwa [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Fanya utafiti: Sasa kwa kuwa unajua misingi ya mazingira ya msanidi wa wavuti, linganisha na ulinganishe na mazingira ya mbunifu wa wavuti.

---

## 🚀 Changamoto

Linganisha baadhi ya lugha za kuprogramu. Ni sifa gani za kipekee za JavaScript dhidi ya Java? Je, vipi kuhusu COBOL dhidi ya Go?

## Jaribio Baada ya Somo
[Jaribio baada ya somo](https://ff-quizzes.netlify.app/web/)

## Mapitio na Kujisomea

Jifunze kidogo kuhusu lugha tofauti zinazopatikana kwa mpangaji. Jaribu kuandika mstari mmoja katika lugha moja, kisha uandike tena katika lugha mbili nyingine. Umejifunza nini?

## Kazi

[Kusoma Nyaraka](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, inashauriwa kutumia huduma ya tafsiri ya kitaalamu ya binadamu. Hatutawajibika kwa maelewano mabaya au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.