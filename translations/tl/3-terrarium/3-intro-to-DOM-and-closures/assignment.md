# Pagsisiyasat sa DOM Element Assignment

## Pangkalahatang-ideya

Ngayon na naranasan mo na ang kapangyarihan ng DOM manipulation, oras na para tuklasin ang mas malawak na mundo ng mga interface ng DOM. Ang assignment na ito ay magpapalalim sa iyong kaalaman kung paano nakikipag-ugnayan ang iba't ibang teknolohiya sa web sa DOM, lampas sa simpleng pag-drag ng mga elemento.

## Mga Layunin sa Pagkatuto

Sa pagtatapos ng assignment na ito, ikaw ay:
- **Magsasaliksik** at maiintindihan ang isang partikular na interface ng DOM nang mas malalim
- **Susuri** ng mga aktwal na implementasyon ng DOM manipulation
- **Ikokonekta** ang mga teoretikal na konsepto sa praktikal na aplikasyon
- **Magde-develop** ng kasanayan sa teknikal na dokumentasyon at pagsusuri

## Mga Instruksyon

### Hakbang 1: Pumili ng Iyong DOM Interface

Bisitahin ang komprehensibong [listahan ng DOM interfaces](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) sa MDN at pumili ng isang interface na interesado ka. Isaalang-alang ang pagpili mula sa mga kategoryang ito para sa iba't ibang opsyon:

**Mga Opsyon para sa Baguhan:**
- `Element.classList` - Dinamikong pamamahala ng mga CSS class
- `Document.querySelector()` - Advanced na pagpili ng elemento
- `Element.addEventListener()` - Pag-handle ng mga event lampas sa pointer events
- `Window.localStorage` - Pag-iimbak ng data sa client-side

**Mga Hamon para sa Intermediate:**
- `Intersection Observer API` - Pagtukoy sa visibility ng elemento
- `MutationObserver` - Pagsubaybay sa mga pagbabago sa DOM
- `Drag and Drop API` - Alternatibo sa ating pointer-based na approach
- `Geolocation API` - Pagkuha ng lokasyon ng user

**Mas Malalim na Pagsisiyasat:**
- `Web Components` - Custom na mga elemento at shadow DOM
- `Canvas API` - Programmatic graphics
- `Web Workers` - Background processing
- `Service Workers` - Offline functionality

### Hakbang 2: Saliksikin at I-dokumento

Gumawa ng komprehensibong pagsusuri (300-500 na salita) na naglalaman ng:

#### Teknikal na Pangkalahatang-ideya
- **Ilarawan** kung ano ang ginagawa ng napiling interface sa malinaw at madaling maintindihan na wika
- **Ipaliwanag** ang mga pangunahing method, properties, o events na ibinibigay nito
- **Ilarawan** ang mga uri ng problema na nilalayon nitong solusyunan

#### Aktwal na Implementasyon
- **Maghanap** ng website na gumagamit ng napiling interface (i-inspect ang code o magsaliksik ng mga halimbawa)
- **I-dokumento** ang partikular na implementasyon gamit ang mga code snippet kung maaari
- **Suriin** kung bakit pinili ng mga developer ang ganitong approach
- **Ipaliwanag** kung paano nito pinapahusay ang karanasan ng user

#### Praktikal na Aplikasyon
- **Ihambing** ang iyong interface sa mga teknik na ginamit natin sa terrarium project
- **Magmungkahi** kung paano mapapahusay o mapapalawak ng iyong interface ang functionality ng terrarium
- **Kilalanin** ang iba pang mga proyekto kung saan magiging mahalaga ang interface na ito

### Hakbang 3: Halimbawa ng Code

Isama ang isang simpleng, gumaganang halimbawa ng code na nagpapakita ng iyong interface sa aksyon. Dapat itong:
- **Gumagana** - Siguraduhing gumagana ang code kapag sinubukan
- **May Komento** - Ipaliwanag kung ano ang ginagawa ng bawat bahagi
- **Nauugnay** - May kaugnayan sa isang makatotohanang paggamit
- **Madaling maintindihan** - Naiintindihan ng isang nagsisimula sa web development

## Format ng Pagsusumite

Istruktura ang iyong pagsusumite gamit ang malinaw na mga heading:

```markdown
# [Interface Name] DOM Investigation

## What It Does
[Technical overview]

## Real-World Example
[Website analysis and implementation details]

## Code Demonstration
[Your working example with comments]

## Reflection
[How this connects to our terrarium project and future applications]
```

## Rubric ng Pagtatasa

| Pamantayan | Napakahusay (A) | Mahusay (B) | Paunlad (C) | Kailangan ng Pagpapabuti (D) |
|------------|-----------------|-------------|-------------|-----------------------------|
| **Teknikal na Pag-unawa** | Nagpapakita ng malalim na pag-unawa na may tamang paliwanag at wastong terminolohiya | May solidong pag-unawa na may karamihan sa tamang paliwanag | Pangunahing pag-unawa na may ilang maling akala | Limitadong pag-unawa na may malalaking pagkakamali |
| **Aktwal na Pagsusuri** | Natukoy at masusing sinuri ang aktwal na implementasyon na may partikular na mga halimbawa | Nakahanap ng aktwal na halimbawa na may sapat na pagsusuri | Nakahanap ng halimbawa ngunit kulang sa lalim ang pagsusuri | Malabo o hindi tamang koneksyon sa aktwal na mundo |
| **Halimbawa ng Code** | Gumagana, mahusay na may komento na code na malinaw na nagpapakita ng interface | Gumagana ang code na may sapat na mga komento | Gumagana ang code ngunit nangangailangan ng mas mahusay na dokumentasyon | May error ang code o mahina ang paliwanag |
| **Kalidad ng Pagsulat** | Malinaw, nakakaengganyo na pagsulat na may tamang istruktura at teknikal na komunikasyon | Maayos na organisado na may mahusay na teknikal na pagsulat | Sapat na organisasyon at kalinawan | Mahina ang organisasyon o hindi malinaw ang komunikasyon |
| **Kritikal na Pag-iisip** | Gumagawa ng malalim na koneksyon sa pagitan ng mga konsepto at nagmumungkahi ng makabagong aplikasyon | Nagpapakita ng mahusay na analitikal na pag-iisip at kaugnay na koneksyon | May ilang pagsusuri ngunit maaaring mas malalim | Limitadong ebidensya ng kritikal na pag-iisip |

## Mga Tip para sa Tagumpay

**Mga Estratehiya sa Pananaliksik:**
- **Simulan** sa dokumentasyon ng MDN para sa mapagkakatiwalaang impormasyon
- **Maghanap** ng mga halimbawa ng code sa GitHub o CodePen
- **Suriin** ang mga sikat na website gamit ang browser developer tools
- **Manood** ng mga tutorial na video para sa visual na paliwanag

**Mga Alituntunin sa Pagsulat:**
- **Gamitin** ang sariling salita sa halip na kopyahin ang dokumentasyon
- **Isama** ang partikular na mga halimbawa at code snippet
- **Ipaliwanag** ang mga teknikal na konsepto na parang nagtuturo sa kaibigan
- **Ikonekta** ang iyong interface sa mas malawak na mga konsepto sa web development

**Mga Ideya para sa Halimbawa ng Code:**
- **Gumawa** ng simpleng demo na nagpapakita ng pangunahing tampok ng interface
- **Magbuo** sa mga konsepto mula sa ating terrarium project kung nauugnay
- **Mag-focus** sa functionality kaysa sa visual na disenyo
- **Subukan** ang iyong code upang matiyak na gumagana ito nang tama

## Deadline ng Pagsusumite

[Ilagay ang deadline dito]

## Mga Tanong?

Kung kailangan mo ng paglilinaw sa anumang aspeto ng assignment na ito, huwag mag-atubiling magtanong! Ang pagsisiyasat na ito ay magpapalalim sa iyong pag-unawa kung paano pinapagana ng DOM ang mga interactive na karanasan sa web na ginagamit natin araw-araw.

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na awtoritatibong pinagmulan. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.