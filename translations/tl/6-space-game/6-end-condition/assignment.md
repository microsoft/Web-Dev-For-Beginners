# Gumawa ng Sample na Laro

## Pangkalahatang-ideya ng Takdang-Aralin

Ngayon na master mo na ang mga kondisyon ng pagtatapos ng laro at ang functionality ng pag-restart sa iyong space game, oras na para ilapat ang mga konseptong ito sa isang ganap na bagong karanasan sa paglalaro. Magdidisenyo at bubuo ka ng sarili mong laro na nagpapakita ng iba't ibang pattern ng kondisyon ng pagtatapos at mekanismo ng pag-restart.

Ang takdang-araling ito ay hamon sa iyong pagiging malikhain sa disenyo ng laro habang pinapraktis ang mga teknikal na kasanayan na natutunan mo. Mag-eeksperimento ka sa iba't ibang senaryo ng tagumpay at pagkatalo, magpapatupad ng pag-unlad ng manlalaro, at lilikha ng nakakaengganyong karanasan sa pag-restart.

## Mga Kinakailangan sa Proyekto

### Pangunahing Tampok ng Laro

Ang iyong laro ay dapat maglaman ng mga sumusunod na mahahalagang elemento:

**Iba't ibang Kondisyon ng Pagtatapos**: Magpatupad ng hindi bababa sa dalawang iba't ibang paraan kung paano matatapos ang laro:
- **Tagumpay batay sa puntos**: Maabot ng manlalaro ang target na puntos o makolekta ang mga partikular na item
- **Pagkatalo batay sa buhay**: Mawawala ng manlalaro ang lahat ng available na buhay o health points
- **Pagkumpleto ng layunin**: Matatalo ang lahat ng kalaban, makokolekta ang mga partikular na item, o makakamit ang mga layunin
- **Batay sa oras**: Matatapos ang laro pagkatapos ng itinakdang tagal o kapag umabot sa zero ang countdown

**Functionality ng Pag-restart**: 
- **I-clear ang estado ng laro**: Alisin ang lahat ng nakaraang game objects at i-reset ang mga variable
- **I-reinitialize ang mga sistema**: Magsimula muli gamit ang bagong stats ng manlalaro, mga kalaban, at mga layunin
- **Madaling kontrol para sa user**: Magbigay ng malinaw na mga tagubilin para sa pag-restart ng laro

**Feedback para sa Manlalaro**:
- **Mga mensahe ng tagumpay**: Ipagdiwang ang mga tagumpay ng manlalaro gamit ang positibong feedback
- **Mga mensahe ng pagkatalo**: Magbigay ng nakakaengganyong mensahe na magpapasigla sa muling paglalaro
- **Mga tagapagpahiwatig ng progreso**: Ipakita ang kasalukuyang puntos, buhay, o status ng layunin

### Mga Ideya at Inspirasyon para sa Laro

Pumili ng isa sa mga konsepto ng laro na ito o gumawa ng sarili mo:

#### 1. Console Adventure Game
Gumawa ng text-based na adventure na may combat mechanics:

```
Hero> Strikes with broadsword - orc takes 3p damage
Orc> Hits with club - hero takes 2p damage  
Hero> Kicks - orc takes 1p damage
Game> Orc is defeated - Hero collects 2 coins
Game> ****No more monsters, you have conquered the evil fortress****
```

**Mga pangunahing tampok na ipapatupad:**
- **Turn-based na combat** na may iba't ibang opsyon sa pag-atake
- **Health points** para sa parehong manlalaro at mga kalaban
- **Inventory system** para sa pagkolekta ng mga barya o item
- **Iba't ibang uri ng kalaban** na may iba't ibang antas ng kahirapan
- **Kondisyon ng tagumpay** kapag natalo na ang lahat ng kalaban

#### 2. Collection Game
- **Layunin**: Kolektahin ang mga partikular na item habang iniiwasan ang mga hadlang
- **Mga kondisyon ng pagtatapos**: Maabot ang target na bilang ng koleksyon o mawala ang lahat ng buhay
- **Progresyon**: Ang mga item ay nagiging mas mahirap maabot habang nagpapatuloy ang laro

#### 3. Puzzle Game
- **Layunin**: Lutasin ang mga puzzle na nagiging mas mahirap
- **Mga kondisyon ng pagtatapos**: Kumpletuhin ang lahat ng antas o maubos ang mga galaw/oras
- **Pag-restart**: Magsimula muli sa unang antas na may malinis na progreso

#### 4. Defense Game
- **Layunin**: Protektahan ang iyong base mula sa mga alon ng kalaban
- **Mga kondisyon ng pagtatapos**: Mabuhay sa lahat ng alon (tagumpay) o masira ang base (pagkatalo)
- **Progresyon**: Ang mga alon ng kalaban ay tumataas sa kahirapan at bilang

## Mga Alituntunin sa Pagpapatupad

### Pagsisimula

1. **Planuhin ang disenyo ng laro**:
   - Gumuhit ng pangunahing gameplay loop
   - Tukuyin nang malinaw ang iyong mga kondisyon ng pagtatapos
   - Tukuyin kung anong data ang kailangang i-reset sa pag-restart

2. **I-set up ang istruktura ng proyekto**:
   ```
   my-game/
   ├── index.html
   ├── style.css
   ├── game.js
   └── README.md
   ```

3. **Gumawa ng iyong pangunahing game loop**:
   - I-initialize ang estado ng laro
   - Pangasiwaan ang input ng user
   - I-update ang lohika ng laro
   - Suriin ang mga kondisyon ng pagtatapos
   - I-render ang kasalukuyang estado

### Mga Teknikal na Kinakailangan

**Gumamit ng Modernong JavaScript**: 
- I-apply ang `const` at `let` para sa deklarasyon ng mga variable
- Gumamit ng arrow functions kung naaangkop
- Ipatupad ang mga tampok ng ES6+ tulad ng template literals at destructuring

**Event-Driven Architecture**:
- Gumawa ng mga event handler para sa mga interaksyon ng user
- Ipatupad ang mga pagbabago sa estado ng laro sa pamamagitan ng mga event
- Gumamit ng mga event listener para sa functionality ng pag-restart

**Malinis na Praktika sa Code**:
- Sumulat ng mga function na may iisang responsibilidad
- Gumamit ng mga deskriptibong pangalan ng variable at function
- Magdagdag ng mga komento na nagpapaliwanag ng lohika at mga patakaran ng laro
- Ayusin ang code sa mga lohikal na seksyon

## Mga Kinakailangan sa Pagsusumite

### Mga Deliverable

1. **Kumpletong mga file ng laro**: Lahat ng HTML, CSS, at JavaScript files na kailangan para patakbuhin ang iyong laro
2. **README.md**: Dokumentasyon na nagpapaliwanag:
   - Paano laruin ang iyong laro
   - Anong mga kondisyon ng pagtatapos ang ipinatupad mo
   - Mga tagubilin para sa pag-restart
   - Anumang espesyal na tampok o mekanika
3. **Mga komento sa code**: Malinaw na paliwanag ng lohika at mga algorithm ng iyong laro

### Checklist sa Pagsubok

Bago magsumite, tiyakin na ang iyong laro:

- [ ] **Tumatakbo nang walang error** sa browser console
- [ ] **Nagpapatupad ng maraming kondisyon ng pagtatapos** ayon sa tinukoy
- [ ] **Nag-restart nang maayos** na may malinis na pag-reset ng estado
- [ ] **Nagbibigay ng malinaw na feedback** sa mga manlalaro tungkol sa estado ng laro
- [ ] **Gumagamit ng modernong syntax ng JavaScript** at pinakamahusay na praktika
- [ ] **May kasamang komprehensibong dokumentasyon** sa README.md

## Rubric ng Pagtatasa

| Pamantayan | Napakahusay (4) | Mahusay (3) | Paunlad (2) | Nagsisimula (1) |
|------------|-----------------|-------------|-------------|----------------|
| **Functionality ng Laro** | Kumpletong laro na may maraming kondisyon ng pagtatapos, maayos na pag-restart, at pinakinis na karanasan sa gameplay | Buong laro na may pangunahing kondisyon ng pagtatapos at gumaganang mekanismo ng pag-restart | Bahagyang laro na may ilang kondisyon ng pagtatapos na ipinatupad, maaaring may minor na isyu sa pag-restart | Hindi kumpletong laro na may limitadong functionality at makabuluhang bug |
| **Kalidad ng Code** | Malinis, maayos na code gamit ang modernong praktika ng JavaScript, komprehensibong komento, at mahusay na istruktura | Magandang organisasyon ng code na may modernong syntax, sapat na komento, at malinaw na istruktura | Pangunahing organisasyon ng code na may ilang modernong praktika, minimal na komento | Mahinang organisasyon ng code, luma na ang syntax, kulang sa komento at istruktura |
| **Karanasan ng User** | Intuitive na gameplay na may malinaw na tagubilin, mahusay na feedback, at nakakaengganyong karanasan sa pagtatapos/pag-restart | Magandang gameplay na may sapat na tagubilin at feedback, gumaganang pagtatapos/pag-restart | Pangunahing gameplay na may minimal na tagubilin, limitadong feedback sa estado ng laro | Nakakalitong gameplay na may hindi malinaw na tagubilin at mahinang feedback sa user |
| **Teknikal na Pagpapatupad** | Nagpapakita ng mastery ng mga konsepto sa pagbuo ng laro, event handling, at state management | Nagpapakita ng solidong pag-unawa sa mga konsepto ng laro na may magandang pagpapatupad | Pangunahing pag-unawa na may katanggap-tanggap na pagpapatupad | Limitadong pag-unawa na may mahinang pagpapatupad |
| **Dokumentasyon** | Komprehensibong README na may malinaw na tagubilin, mahusay na dokumentadong code, at masusing ebidensya ng pagsubok | Magandang dokumentasyon na may malinaw na tagubilin at sapat na komento sa code | Pangunahing dokumentasyon na may minimal na tagubilin | Mahina o nawawalang dokumentasyon |

### Grading Scale
- **Napakahusay (16-20 puntos)**: Lumalampas sa inaasahan na may malikhaing tampok at pinakinis na pagpapatupad
- **Mahusay (12-15 puntos)**: Natutugunan ang lahat ng kinakailangan na may solidong pagpapatupad
- **Paunlad (8-11 puntos)**: Natutugunan ang karamihan ng kinakailangan na may minor na isyu
- **Nagsisimula (4-7 puntos)**: Natutugunan ang ilang kinakailangan ngunit nangangailangan ng malaking pagpapabuti

## Karagdagang Mga Mapagkukunan sa Pag-aaral

- [MDN Game Development Guide](https://developer.mozilla.org/en-US/docs/Games)
- [JavaScript Game Development Tutorials](https://developer.mozilla.org/en-US/docs/Games/Tutorials)
- [Canvas API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Game Design Principles](https://www.gamasutra.com/blogs/)

> 💡 **Pro Tip**: Magsimula nang simple at magdagdag ng mga tampok nang paunti-unti. Ang isang maayos na simpleng laro ay mas mahusay kaysa sa isang komplikadong laro na may mga bug!

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na mapagkakatiwalaang pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.