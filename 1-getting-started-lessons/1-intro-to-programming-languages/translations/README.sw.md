# Utangulizi wa lugha za programu na zana za kitaalam

Somo hili linahusu misingi ya lugha za programu. Mada zilizofunikwa hapa zinatumika kwa lugha nyingi za kisasa za programu. 
Katika sehemu ya "Zana za biashara", utagundua programu muhimu ambayo itakusaidia kama msanidi programu.

![Intro Programming](/sketchnotes/webdev101-programming.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Jaribio la Mhadhara wa awali
[Pre-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/1)


## Utangulizi
Katika somo hili tutashughulikia:

- Programu ni nini?
- Aina za lugha za programu
- Vipengele vya msingi vya programu
- Programu muhimu na zana kwa msanidi programu

## Programu ni nini?

Programu ya Pla (pia inajulikana kama usimbuaji) ni mchakato wa kuandika maagizo kwa kifaa, kama kompyuta au kifaa cha rununu. Tunaandika maagizo haya na lugha ya programu, ambayo hufasiriwa na kifaa. Seti hizi za maagizo zinaweza kutajwa kwa majina tofauti, lakini *programu*, *programu ya kompyuta*, *matumizi (matumizi)*, na *inayoweza kutekelezwa* ni majina ya kawaida.
*Programu* inaweza kuwa chochote kilichoandikwa na nambari; tovuti, michezo na matumizi ya simu ni mipango. Ingawa inawezekana kuunda mpango bila kuandika nambari, mantiki ya msingi hutafsiriwa kwenye kifaa, na mantiki hiyo labda iliandikwa na nambari. Programu ambayo *inafanya* au *kutekeleza nambari* inafanya maagizo. Kifaa unachosoma somo hili kinaendesha programu ya kuchapisha kwenye skrini yako.

✅ Fanya utafiti kidogo: ni nani anayechukuliwa kuwa msanidi programu anayeongoza ulimwenguni?

## Lugha za programu

Lugha za programu zina kusudi moja kuu: kuruhusu watengenezaji kuunda maagizo ya kutuma kwa kifaa. Vifaa vinaweza kuelewa tu binary (1 na 0), na kwa watengenezaji *wengi, sio njia nzuri sana ya kuwasiliana. 
Lugha za programu ni vector ya mawasiliano kati ya wanadamu na kompyuta.Lugha za programu huja katika muundo tofauti na zinaweza kutumika kwa malengo tofauti. Kwa mfano, JavaScript hutumiwa kimsingi kwa matumizi ya wavuti, wakati Bash inatumiwa sana kwa mifumo ya uendeshaji.

*Lugha za kiwango cha chini* kwa ujumla zinahitaji hatua chache kuliko *lugha za kiwango cha juu* kwa kifaa kutafsiri maagizo. Walakini, kinachofanya lugha za kiwango cha juu kupendwa ni usomaji na msaada wao. JavaScript inachukuliwa kuwa lugha ya kiwango cha juu.
Nambari ifuatayo inaonyesha tofauti kati ya lugha ya kiwango cha juu na JavaScript na lugha ya kiwango cha chini na msimbo wa mkutano wa ARM.

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
Amini usiamini, *wote wanafanya kitu kimoja*: kuchapa mlolongo wa Fibonacci hadi 10.
Mlolongo wa Fibonacci ni [hufafanuliwa] (https://en.wikipedia.org/wiki/Fibonacci_number) kama seti ya nambari kama kwamba kila nambari ni jumla ya hizo mbili zilizopita, kuanzia 0 na 1.

## Vipengele vya programu

Maagizo moja katika programu huitwa *mafundisho* na kawaida huwa na tabia au nafasi ya laini inayoashiria mahali mafundisho yanaishia, au *inaisha* Njia ambayo programu inaisha hutofautiana na kila lugha.

Programu nyingi zinategemea kutumia data kutoka kwa mtumiaji au mahali pengine, ambapo taarifa zinaweza kutegemea data kutekeleza taarifa. Takwimu zinaweza kubadilisha tabia ya programu, kwa hivyo lugha za programu hutoa njia ya kuhifadhi data kwa muda ambayo inaweza kutumika baadaye. Takwimu hizi zinaitwa *vigeugeu*. Vigezo ni maagizo ambayo huuliza kifaa kuhifadhi data kwenye kumbukumbu yake. Vigezo katika programu ni sawa na zile zilizo katika algebra, ambapo zina jina la kipekee na dhamana yao inaweza kubadilika kwa muda.
Maagizo mengine hayawezi kutekelezwa na kifaa. Hii kawaida ni kwa kubuni wakati wa kuandika na msanidi programu au kwa bahati mbaya wakati kosa lisilotarajiwa linatokea. Aina hii ya udhibiti wa programu hufanya iwe imara zaidi na inayoweza kudumishwa. Kawaida, mabadiliko haya ya udhibiti hufanyika wakati maamuzi fulani yanafuatwa. Kauli ya kawaida katika lugha za kisasa za programu kudhibiti jinsi programu inavyotekelezwa ni taarifa ya `if..else`.

Will Utajifunza zaidi juu ya aina hii ya taarifa katika masomo yafuatayo

## Zana za biashara
[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

Katika sehemu hii, utajifunza juu ya programu ambayo unaweza kupata muhimu sana mwanzoni mwa safari yako ya ukuzaji wa kitaalam.

**Mazingira ya maendeleo** ni seti ya kipekee ya vifaa na huduma ambazo msanidi programu hutumia mara nyingi wakati wa kuandika programu. Baadhi ya zana hizi zimebadilishwa kwa mahitaji maalum ya msanidi programu na zinaweza kubadilika kwa muda ikiwa msanidi programu atabadilisha vipaumbele katika biashara zao au miradi ya kibinafsi, 
au wanapotumia lugha tofauti ya programu. Mazingira ya maendeleo ni ya kipekee kama watengenezaji wanaotumia.

### Wahariri

Mhariri ni moja wapo ya zana muhimu zaidi katika ukuzaji wa programu. Wahariri ni mahali unapoandika nambari yako na wakati mwingine utasimamia nambari yako.

Watengenezaji wanategemea wachapishaji kwa sababu chache zaidi:

- *Utatuaji* Kupata mende na makosa kwa kupitia nambari, mstari kwa mstari. Wahariri wengine wana uwezo wa utatuzi au wanaweza kubadilishwa na kuongezwa kwa lugha maalum za programu.
- *Kuangazia kwa syntax* Inaongeza rangi na muundo wa maandishi kwa nambari, inafanya iwe rahisi kusoma. Wahariri wengi huruhusu uangazishaji wa sintaksia ya kawaida.
- *Viendelezi na ujumuishaji* nyongeza maalum kwa watengenezaji, na watengenezaji, kupata zana za ziada ambazo hazijaunganishwa na mhariri wa msingi. Kwa mfano, watengenezaji wengi pia wanahitaji njia ya kuandika nambari zao na kuelezea jinsi inavyofanya kazi na itaweka kiendelezi cha kukagua tahajia kukagua typos. Zaidi ya nyongeza hizi zimekusudiwa kutumiwa katika mhariri maalum, na wahariri wengi hutoa njia ya kupata viendelezi vinavyopatikana.
- *Ugeuzaji kukufaa* Wahariri wengi wamebadilika sana, na kila msanidi programu atakuwa na mazingira yao ya kipekee ya maendeleo ambayo yanakidhi mahitaji yao. Wengi pia huruhusu watengenezaji kuunda ugani wao wenyewe.

#### Wahariri na waendelezaji maarufu wa wavuti
- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  -
  ### Vivinjari

Chombo kingine muhimu ni kivinjari. Watengenezaji wa wavuti wanategemea kivinjari ili kuona jinsi nambari zao zinavyotekelezwa kwenye wavuti, pia hutumiwa kuonyesha vitu vya kuona vya ukurasa wa wavuti ambavyo vimeandikwa kwenye kihariri, kama HTML.

Vivinjari vingi huja na *Zana za Maendeleo* (DevTools) ambazo zina seti ya huduma muhimu na habari kusaidia watengenezaji kukusanya na kunasa habari muhimu juu ya matumizi yao. Kwa mfano: ikiwa ukurasa wa wavuti una makosa, wakati mwingine ni muhimu kujua ni lini zilitokea. DevTools katika kivinjari zinaweza kusanidiwa kunasa habari hii.
### Vivinjari maarufu na zana za msanidi programu
- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-13441-cxa)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)
-
### Laini ya amri ya

Watengenezaji wengine wanapendelea maoni kidogo ya picha kwa kazi zao za kila siku na wanategemea laini ya amri kufanikisha hili. 
Utengenezaji wa nambari unahitaji idadi kubwa ya kuandika, na watengenezaji wengine hawapendi kuvuruga mtiririko wao kwenye kibodi na watatumia njia za mkato za 
kibodi kubadili kati ya windows windows, fanya kazi kwenye faili tofauti, na utumie zana. Kazi nyingi zinaweza kufanywa na panya, lakini faida ya kutumia laini ya amri 
ni kwamba mengi yanaweza kufanywa na zana za laini ya amri bila hitaji la kubadili kati ya panya na kibodi. Faida nyingine ya laini ya amri ni 
kwamba inaweza kusanidiwa na unaweza kuhifadhi usanidi wako wa kawaida, kurekebisha baadaye na pia kuiingiza kwa mashine mpya za maendeleo. Kwa sababu 
mazingira ya maendeleo ni ya kipekee kwa kila msanidi programu, wengine wataepuka kutumia laini ya amri, wengine wataitegemea kabisa, na wengine wanapendelea 
mchanganyiko wa hizo mbili.

Chaguzi maarufu za laini ya amri.

Chaguzi za mstari wa amri zinatofautiana kulingana na mfumo wa uendeshaji unaotumia.

*💻 = imewekwa mapema kwenye mfumo wa uendeshaji.

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-13441-cxa) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-13441-cxa) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-13441-cxa)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/applications/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-13441-cxa)

#### Popular Command Line Tools

- [Git](https://git-scm.com/) (💻 on most operating sytems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Nyaraka

Msanidi programu anapotaka kujifunza kitu kipya, uwezekano mkubwa watageukia nyaraka ili kujifunza jinsi ya kuitumia. 
Watengenezaji mara nyingi hutegemea nyaraka kuwaongoza jinsi ya kutumia vizuri zana na lugha, na pia kupata uelewa wa kina wa jinsi inavyofanya kazi.

#### Nyaraka maarufu za ukuzaji wa wavuti
- [Mozilla Developer Network](https://developer.mozilla.org/docs/Web)
- [Frontend Masters](https://frontendmasters.com/learn/)

✅ Fanya utafiti wako: Sasa kwa kuwa unajua misingi ya mtengenezaji wa wavuti, linganisha na ulinganishe na mazingira ya wabuni wa wavuti.

---

## 🚀 Changamoto

Linganisha lugha zingine za programu. Je! Ni sifa gani za kipekee za JavaScript juu ya Java? Je! Kuhusu COBOL vs Go?

## Jaribio la baada ya mkutano
[Jaribio la baada ya mkutano] (https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/2)

## Pitia na ujisomee

Angalia lugha tofauti zinazopatikana kwa programu. Jaribu kuandika mstari mmoja kwa lugha moja, kisha uifanye tena kwa mbili zaidi. Unajifunza nini?

## Kazi

[Soma nyaraka] (assignment.sw.md)
