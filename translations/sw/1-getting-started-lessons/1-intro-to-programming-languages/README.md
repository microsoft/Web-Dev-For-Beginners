<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c63675cfaf1d223b37bb9fecbfe7c252",
  "translation_date": "2025-08-28T04:29:18+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "sw"
}
-->
# Utangulizi wa Lugha za Programu na Zana za Kazi

Somo hili linashughulikia misingi ya lugha za programu. Mada zilizojadiliwa hapa zinatumika kwa lugha nyingi za programu za kisasa leo. Katika sehemu ya 'Zana za Kazi', utajifunza kuhusu programu muhimu inayokusaidia kama msanidi programu.

![Intro Programming](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Maswali Kabla ya Somo
[Maswali kabla ya somo](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Utangulizi

Katika somo hili, tutajadili:

- Programu ni nini?
- Aina za lugha za programu
- Vipengele vya msingi vya programu
- Programu muhimu na zana kwa msanidi programu mtaalamu

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Programu ni Nini?

Programu (inayojulikana pia kama kuandika kodi) ni mchakato wa kuandika maagizo kwa kifaa kama kompyuta au kifaa cha mkononi. Tunaandika maagizo haya kwa kutumia lugha ya programu, ambayo kisha hutafsiriwa na kifaa. Seti hizi za maagizo zinaweza kuitwa kwa majina mbalimbali, lakini *programu*, *programu ya kompyuta*, *programu tumizi (app)*, na *executable* ni baadhi ya majina maarufu.

*Programu* inaweza kuwa chochote kilichoandikwa kwa kodi; tovuti, michezo, na programu za simu ni programu. Ingawa inawezekana kuunda programu bila kuandika kodi, mantiki ya msingi inatafsiriwa na kifaa na mantiki hiyo labda iliandikwa kwa kodi. Programu inayotekeleza au kuendesha kodi inatekeleza maagizo. Kifaa unachosoma somo hili nacho kinaendesha programu ili kuonyesha kwenye skrini yako.

✅ Fanya utafiti kidogo: Nani anachukuliwa kuwa mpangaji wa kompyuta wa kwanza duniani?

## Lugha za Programu

Lugha za programu huwezesha wasanidi programu kuandika maagizo kwa kifaa. Vifaa vinaweza kuelewa tu binary (1s na 0s), na kwa *wengi* wa wasanidi programu hiyo si njia bora ya kuwasiliana. Lugha za programu ni njia ya mawasiliano kati ya binadamu na kompyuta.

Lugha za programu zinakuja katika miundo tofauti na zinaweza kutumikia madhumuni tofauti. Kwa mfano, JavaScript hutumika hasa kwa programu za wavuti, wakati Bash hutumika hasa kwa mifumo ya uendeshaji.

*Lugha za kiwango cha chini* kwa kawaida zinahitaji hatua chache zaidi kuliko *lugha za kiwango cha juu* kwa kifaa kutafsiri maagizo. Hata hivyo, kinachofanya lugha za kiwango cha juu kuwa maarufu ni usomaji wake na msaada wake. JavaScript inachukuliwa kuwa lugha ya kiwango cha juu.

Kodi ifuatayo inaonyesha tofauti kati ya lugha ya kiwango cha juu na JavaScript na lugha ya kiwango cha chini na ARM assembly code.

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

Amini usiamini, *zote zinafanya kitu kimoja*: kuchapisha mlolongo wa Fibonacci hadi 10.

✅ Mlolongo wa Fibonacci [unafafanuliwa](https://en.wikipedia.org/wiki/Fibonacci_number) kama seti ya namba ambapo kila namba ni jumla ya mbili zilizotangulia, kuanzia 0 na 1. Namba 10 za kwanza zinazofuata mlolongo wa Fibonacci ni 0, 1, 1, 2, 3, 5, 8, 13, 21 na 34.

## Vipengele vya Programu

Maagizo moja katika programu huitwa *tamko* na kwa kawaida litakuwa na herufi au nafasi ya mstari inayoweka alama mahali ambapo tamko linaisha, au *linamalizika*. Jinsi programu inavyomalizika hutofautiana na kila lugha.

Matamko ndani ya programu yanaweza kutegemea data inayotolewa na mtumiaji au mahali pengine ili kutekeleza maagizo. Data inaweza kubadilisha jinsi programu inavyofanya kazi, kwa hivyo lugha za programu huja na njia ya kuhifadhi data kwa muda ili iweze kutumika baadaye. Hizi huitwa *vigezo*. Vigezo ni matamko yanayoelekeza kifaa kuhifadhi data kwenye kumbukumbu yake. Vigezo katika programu ni sawa na vigezo katika algebra, ambapo vina jina la kipekee na thamani yake inaweza kubadilika kwa muda.

Kuna uwezekano kwamba baadhi ya matamko hayatatekelezwa na kifaa. Hii kwa kawaida hufanyika kwa makusudi wakati imeandikwa na msanidi programu au kwa bahati mbaya wakati kosa lisilotarajiwa linatokea. Udhibiti wa aina hii juu ya programu hufanya iwe thabiti zaidi na rahisi kudumisha. Kwa kawaida, mabadiliko haya ya udhibiti hutokea wakati hali fulani zinatimizwa. Tamko la kawaida linalotumika katika programu za kisasa kudhibiti jinsi programu inavyofanya kazi ni tamko la `if..else`.

✅ Utajifunza zaidi kuhusu aina hii ya tamko katika masomo yanayofuata.

## Zana za Kazi

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 Bofya picha hapo juu kwa video kuhusu zana

Katika sehemu hii, utajifunza kuhusu programu ambazo unaweza kuona kuwa ni muhimu sana unapoanza safari yako ya maendeleo ya kitaalamu.

**Mazingira ya maendeleo** ni seti ya kipekee ya zana na vipengele ambavyo msanidi programu hutumia mara kwa mara wakati wa kuandika programu. Baadhi ya zana hizi zimeboreshwa kwa mahitaji maalum ya msanidi programu, na zinaweza kubadilika kwa muda ikiwa msanidi programu atabadilisha vipaumbele katika kazi, miradi ya kibinafsi, au anapotumia lugha tofauti ya programu. Mazingira ya maendeleo ni ya kipekee kama wasanidi programu wanaoyatumia.

### Vihariri

Moja ya zana muhimu zaidi kwa maendeleo ya programu ni kihariri. Vihariri ni mahali unapandika kodi yako na wakati mwingine mahali unapotekeleza kodi yako.

Wasanidi programu hutegemea vihariri kwa sababu kadhaa za ziada:

- *Kutatua hitilafu* husaidia kugundua hitilafu na makosa kwa kupitia kodi, mstari kwa mstari. Baadhi ya vihariri vina uwezo wa kutatua hitilafu; vinaweza kuboreshwa na kuongezwa kwa lugha maalum za programu.
- *Kuwainua sintaksia* huongeza rangi na muundo wa maandishi kwenye kodi, na kuifanya iwe rahisi kusoma. Vihariri vingi huruhusu kubinafsisha sintaksia.
- *Viendelezi na Muunganiko* ni zana maalum kwa wasanidi programu, na kwa wasanidi programu. Zana hizi hazikujengwa ndani ya kihariri cha msingi. Kwa mfano, wasanidi programu wengi huandika maelezo ya kodi yao kuelezea jinsi inavyofanya kazi. Wanaweza kusakinisha kiendelezi cha kuangalia tahajia ili kusaidia kugundua makosa ya tahajia ndani ya maelezo. Viendelezi vingi vinakusudiwa kutumika ndani ya kihariri maalum, na vihariri vingi huja na njia ya kutafuta viendelezi vinavyopatikana.
- *Kubinafsisha* huwezesha wasanidi programu kuunda mazingira ya kipekee ya maendeleo yanayokidhi mahitaji yao. Vihariri vingi vinaweza kubinafsishwa sana na vinaweza pia kuruhusu wasanidi programu kuunda viendelezi vya kibinafsi.

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

Zana nyingine muhimu ni kivinjari. Wasanidi programu wa wavuti hutegemea kivinjari kuona jinsi kodi yao inavyofanya kazi kwenye wavuti. Pia hutumika kuonyesha vipengele vya kuona vya ukurasa wa wavuti vilivyoandikwa kwenye kihariri, kama HTML.

Vivinjari vingi huja na *zana za wasanidi programu* (DevTools) ambazo zina seti ya vipengele muhimu na taarifa za kusaidia wasanidi programu kukusanya na kunasa taarifa muhimu kuhusu programu yao. Kwa mfano: Ikiwa ukurasa wa wavuti una makosa, wakati mwingine ni muhimu kujua yalitokea lini. DevTools katika kivinjari inaweza kusanidiwa kunasa taarifa hii.

#### Vivinjari Maarufu na DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Zana za Laini ya Amri

Baadhi ya wasanidi programu wanapendelea mtazamo usio wa picha kwa kazi zao za kila siku na hutegemea laini ya amri kufanikisha hili. Kuandika kodi kunahitaji kiasi kikubwa cha kuandika, na baadhi ya wasanidi programu wanapendelea kutoingiliwa na mtiririko wao kwenye kibodi. Watatumia njia za mkato za kibodi kubadilisha kati ya madirisha ya desktop, kufanya kazi kwenye faili tofauti, na kutumia zana. Kazi nyingi zinaweza kukamilishwa kwa panya, lakini faida moja ya kutumia laini ya amri ni kwamba mengi yanaweza kufanywa na zana za laini ya amri bila hitaji la kubadilisha kati ya panya na kibodi. Faida nyingine ya laini ya amri ni kwamba zinaweza kusanidiwa na unaweza kuhifadhi usanidi wa kibinafsi, kuubadilisha baadaye, na kuuingiza kwenye mashine nyingine za maendeleo. Kwa sababu mazingira ya maendeleo ni ya kipekee kwa kila msanidi programu, wengine wataepuka kutumia laini ya amri, wengine wataitegemea kabisa, na wengine wanapendelea mchanganyiko wa zote mbili.

### Chaguo Maarufu za Laini ya Amri

Chaguo za laini ya amri zitatofautiana kulingana na mfumo wa uendeshaji unaotumia.

*💻 = inakuja ikiwa imewekwa awali kwenye mfumo wa uendeshaji.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (inayojulikana pia kama CMD) 💻
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

Wakati msanidi programu anataka kujifunza kitu kipya, mara nyingi atageukia nyaraka kujifunza jinsi ya kutumia. Wasanidi programu mara nyingi hutegemea nyaraka kuwaongoza jinsi ya kutumia zana na lugha ipasavyo, na pia kupata maarifa ya kina ya jinsi inavyofanya kazi.

#### Nyaraka Maarufu za Maendeleo ya Wavuti

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), kutoka Mozilla, wachapishaji wa kivinjari cha [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), kutoka Google, wachapishaji wa [Chrome](https://www.google.com/chrome/)
- [Nyaraka za wasanidi programu wa Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), kwa [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Fanya utafiti: Sasa kwa kuwa unajua misingi ya mazingira ya msanidi programu wa wavuti, linganisha na ulinganishe na mazingira ya mbunifu wa wavuti.

---

## 🚀 Changamoto

Linganisheni baadhi ya lugha za programu. Ni sifa gani za kipekee za JavaScript dhidi ya Java? Na vipi kuhusu COBOL dhidi ya Go?

## Maswali Baada ya Somo
[Maswali baada ya somo](https://ff-quizzes.netlify.app/web/quiz/2)

## Mapitio na Kujisomea

Jifunze kidogo kuhusu lugha tofauti zinazopatikana kwa msanidi programu. Jaribu kuandika mstari mmoja katika lugha moja, kisha uandike tena katika lugha mbili nyingine. Umejifunza nini?

## Kazi

[Kusoma Nyaraka](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.