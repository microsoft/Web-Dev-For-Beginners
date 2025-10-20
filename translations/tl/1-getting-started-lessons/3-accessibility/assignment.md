<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e6d0f456dfc22afb41bbdefeb5ec179d",
  "translation_date": "2025-10-20T21:04:03+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/assignment.md",
  "language_code": "tl"
}
-->
# Komprehensibong Pagsusuri sa Accessibility ng Website

## Mga Instruksyon

Sa gawaing ito, magsasagawa ka ng propesyonal na pagsusuri sa accessibility ng isang tunay na website, gamit ang mga prinsipyo at teknik na natutunan mo. Ang hands-on na karanasang ito ay magpapalalim sa iyong pag-unawa sa mga hadlang sa accessibility at mga solusyon.

Pumili ng website na tila may mga isyu sa accessibility—mas maraming matututunan ka sa pagsusuri ng site na may mga problema kaysa sa perpektong website. Magandang kandidato ang mga lumang website, kumplikadong web application, o mga site na may masaganang multimedia content.

### Phase 1: Estratehikong manu-manong pagsusuri

Bago gumamit ng mga automated na tool, magsagawa ng komprehensibong manu-manong pagsusuri. Ang human-centered na approach na ito ay madalas na nakakatuklas ng mga isyung hindi nakikita ng mga tool at tumutulong sa iyong maunawaan ang tunay na karanasan ng user.

**🔍 Mahahalagang pamantayan sa pagsusuri:**

**Pag-navigate at Estruktura:**
- Magagamit mo ba ang buong site gamit lamang ang keyboard (Tab, Shift+Tab, Enter, Space, Arrow keys)?
- Malinaw bang nakikita ang mga focus indicator sa lahat ng interactive na elemento?
- Ang estruktura ba ng heading (H1-H6) ay bumubuo ng lohikal na outline ng nilalaman?
- Mayroon bang mga skip link para direktang pumunta sa pangunahing nilalaman?

**Visual na Accessibility:**
- May sapat bang contrast ng kulay sa buong site (minimum na 4.5:1 para sa normal na teksto)?
- Umaasa lang ba ang site sa kulay para maipakita ang mahalagang impormasyon?
- May angkop bang alternative text ang lahat ng imahe?
- Nanatili bang functional ang layout kapag na-zoom sa 200%?

**Nilalaman at Komunikasyon:**
- Mayroon bang "click here" o mga hindi malinaw na link text?
- Naiintindihan mo ba ang nilalaman at functionality nang walang visual na palatandaan?
- Ang mga form field ba ay maayos na may label at naka-group?
- Malinaw at kapaki-pakinabang ba ang mga error message?

**Mga Interactive na Elemento:**
- Gumagana ba ang lahat ng button at form controls gamit lamang ang keyboard?
- Naia-anunsyo ba ang mga pagbabago sa dynamic na nilalaman sa mga screen reader?
- Ang mga modal dialogs at kumplikadong widgets ba ay sumusunod sa tamang accessibility patterns?

📝 **I-dokumento ang iyong mga natuklasan** gamit ang mga partikular na halimbawa, screenshot, at mga URL ng pahina. Itala ang parehong mga isyu at mga bagay na maayos na nagawa.

### Phase 2: Komprehensibong automated na pagsusuri

Ngayon, i-validate at palawakin ang iyong manu-manong natuklasan gamit ang mga industry-standard na accessibility testing tools. Ang bawat tool ay may iba't ibang lakas, kaya ang paggamit ng maraming tool ay nagbibigay ng kumpletong coverage.

**🛠️ Kinakailangang mga testing tool:**

1. **Lighthouse Accessibility Audit** (kasama sa Chrome/Edge DevTools)
   - Patakbuhin ang audit sa maraming pahina
   - Mag-focus sa mga partikular na metrics at rekomendasyon
   - Itala ang iyong accessibility score at mga partikular na paglabag

2. **axe DevTools** (browser extension - industry standard)
   - Mas detalyadong pagtuklas ng isyu kaysa sa Lighthouse
   - Nagbibigay ng partikular na mga halimbawa ng code para sa pag-aayos
   - Nagtetest laban sa WCAG 2.1 criteria

3. **WAVE Web Accessibility Evaluator** (browser extension)
   - Visual na representasyon ng mga feature ng accessibility
   - Ipinapakita ang parehong mga error at positibong feature
   - Magaling para sa pag-unawa sa estruktura ng pahina

4. **Color Contrast Analyzers**
   - WebAIM Contrast Checker para sa mga partikular na pares ng kulay
   - Mga browser extension para sa page-wide analysis
   - Nagtetest laban sa parehong WCAG AA at AAA standards

**🎧 Real assistive technology testing:**
- **Screen reader testing**: Gumamit ng NVDA (Windows), VoiceOver (Mac), o TalkBack (Android)
- **Keyboard-only navigation**: I-unplug ang iyong mouse at i-navigate ang buong site
- **Zoom testing**: Subukan ang functionality sa 200% at 400% zoom levels
- **Voice control testing**: Kung available, subukan ang mga voice navigation tools

**📊 Ayusin ang iyong mga resulta** sa pamamagitan ng paggawa ng master spreadsheet na may:
- Deskripsyon ng isyu at lokasyon
- Antas ng severity (Critical/High/Medium/Low)
- WCAG success criteria na nilabag
- Tool na nakatuklas ng isyu
- Mga screenshot at ebidensya

### Phase 3: Komprehensibong dokumentasyon ng natuklasan

Gumawa ng propesyonal na ulat ng accessibility audit na nagpapakita ng iyong pag-unawa sa parehong teknikal na isyu at ang epekto nito sa tao.

**📋 Kinakailangang mga seksyon ng ulat:**

1. **Executive Summary** (1 pahina)
   - URL ng website at maikling deskripsyon
   - Pangkalahatang antas ng accessibility maturity
   - Nangungunang 3 pinaka-kritikal na isyu
   - Tinatayang epekto sa mga user na may kapansanan

2. **Metodolohiya** (½ pahina)
   - Paraan ng pagsusuri at mga tool na ginamit
   - Mga pahinang sinuri at kombinasyon ng device/browser
   - Mga pamantayan na sinuri (WCAG 2.1 AA)

3. **Detalyadong Natuklasan** (2-3 pahina)
   - Mga isyung nakategorya ayon sa prinsipyo ng WCAG (Perceivable, Operable, Understandable, Robust)
   - Isama ang mga screenshot at partikular na halimbawa
   - Itala ang mga positibong feature ng accessibility na natuklasan
   - I-cross-reference sa mga resulta ng automated na tool

4. **Pagtatasa ng Epekto sa User** (1 pahina)
   - Paano naapektuhan ng mga natukoy na isyu ang mga user na may iba't ibang kapansanan
   - Mga senaryo na naglalarawan ng tunay na karanasan ng user
   - Epekto sa negosyo (legal na panganib, SEO, pagpapalawak ng user base)

**📸 Koleksyon ng ebidensya:**
- Mga screenshot ng mga paglabag sa accessibility
- Mga screen recording ng mga problematikong user flow
- Mga ulat ng tool (i-save bilang PDF)
- Mga halimbawa ng code na nagpapakita ng mga isyu

### Phase 4: Propesyonal na plano sa remediation

Bumuo ng estratehikong, priyoridad na plano para sa pag-aayos ng mga isyu sa accessibility. Ipinapakita nito ang iyong kakayahang mag-isip tulad ng isang propesyonal na web developer na tumutugon sa mga tunay na limitasyon sa negosyo.

**🎯 Gumawa ng detalyadong rekomendasyon sa pagpapabuti (minimum 10 isyu):**

**Para sa bawat natukoy na isyu, magbigay ng:**

- **Deskripsyon ng Isyu**: Malinaw na paliwanag kung ano ang mali at bakit ito problematiko
- **WCAG Reference**: Partikular na success criteria na nilabag (hal., "2.4.4 Link Purpose (In Context) - Level A")
- **Epekto sa User**: Paano ito nakakaapekto sa mga taong may iba't ibang kapansanan
- **Solusyon**: Partikular na pagbabago sa code, modipikasyon sa disenyo, o mga pagpapabuti sa proseso
- **Antas ng Priyoridad**: Kritikal (nakakaharang sa pangunahing paggamit) / Mataas (malaking hadlang) / Katamtaman (isyu sa usability) / Mababa (enhancement)
- **Pagsisikap sa Pagpapatupad**: Tinatayang oras/kalidad ng kahirapan (Quick win / Moderate effort / Major refactor)
- **Pag-verify ng Pagsubok**: Paano masisiguro na gumagana ang pag-aayos

**Halimbawa ng entry sa pagpapabuti:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Estratehikong mga phase ng pagpapatupad:**

- **Phase 1 (0-2 linggo)**: Kritikal na mga isyu na nakakaharang sa pangunahing functionality
- **Phase 2 (1-2 buwan)**: Mataas na priyoridad na mga pagpapabuti para sa mas mahusay na karanasan ng user
- **Phase 3 (3-6 buwan)**: Katamtamang priyoridad na mga enhancement at pagpapabuti ng proseso
- **Phase 4 (Patuloy)**: Patuloy na monitoring at enhancement

## Rubric ng Pagsusuri

Ang iyong accessibility audit ay susuriin batay sa parehong teknikal na katumpakan at propesyonal na presentasyon:

| Pamantayan | Mahusay (90-100%) | Maganda (80-89%) | Katanggap-tanggap (70-79%) | Kailangan ng Pagpapabuti (<70%) |
|------------|-------------------|------------------|---------------------------|-------------------------------|
| **Lalim ng Manu-manong Pagsusuri** | Komprehensibong pagsusuri na sumasaklaw sa lahat ng prinsipyo ng POUR na may detalyadong obserbasyon at mga senaryo ng user | Magandang coverage ng karamihan sa mga lugar ng accessibility na may malinaw na natuklasan at ilang pagsusuri sa epekto sa user | Pangunahing pagsusuri na sumasaklaw sa mga pangunahing lugar na may sapat na obserbasyon | Limitadong pagsusuri na may mababaw na obserbasyon at minimal na konsiderasyon sa epekto sa user |
| **Paggamit ng Tool at Pagsusuri** | Ginagamit ang lahat ng kinakailangang tool nang epektibo, may cross-referencing ng mga natuklasan, malinaw na ebidensya, at pagsusuri sa limitasyon ng tool | Ginagamit ang karamihan ng mga tool na may magandang dokumentasyon, ilang cross-referencing, at sapat na ebidensya | Ginagamit ang kinakailangang mga tool na may pangunahing dokumentasyon at ilang ebidensya | Minimal na paggamit ng tool, mahinang dokumentasyon, o nawawalang ebidensya |
| **Pagkilala at Pagkategorya ng Isyu** | Nakikilala ang 15+ partikular na isyu sa lahat ng prinsipyo ng WCAG, tumpak na nakategorya ayon sa severity, nagpapakita ng malalim na pag-unawa | Nakikilala ang 10-14 isyu sa karamihan ng prinsipyo ng WCAG, magandang pagkategorya, nagpapakita ng solidong pag-unawa | Nakikilala ang 7-9 isyu na may sapat na coverage ng WCAG at pangunahing pagkategorya | Nakikilala ang <7 isyu na may limitadong saklaw o mahinang pagkategorya |
| **Kalidad at Kakayahan ng Solusyon** | 10+ detalyado, maaksiyong solusyon na may tumpak na WCAG references, makatotohanang timeline ng pagpapatupad, at mga paraan ng pag-verify | 8-9 maayos na binuong solusyon na may karamihan sa tumpak na references at magandang detalye ng pagpapatupad | 6-7 pangunahing solusyon na may ilang detalye at pangkalahatang makatotohanang mga approach | <6 solusyon o hindi sapat na detalye, hindi makatotohanang mga pagpapatupad |
| **Propesyonal na Komunikasyon** | Ang ulat ay mahusay na nakaayos, malinaw na naisulat, may kasamang executive summary, gumagamit ng angkop na teknikal na wika, at sumusunod sa mga pamantayan ng business document | Maayos na nakaayos na may magandang kalidad ng pagsulat, may kasamang karamihan sa kinakailangang mga seksyon, angkop na tono | Sapat na nakaayos na may katanggap-tanggap na pagsulat, may kasamang pangunahing kinakailangang mga seksyon | Mahinang organisasyon, hindi malinaw na pagsulat, o nawawala ang mga pangunahing seksyon |
| **Aplikasyon sa Tunay na Mundo** | Nagpapakita ng pag-unawa sa epekto sa negosyo, mga legal na konsiderasyon, pagkakaiba-iba ng user, at mga hamon sa praktikal na pagpapatupad | Nagpapakita ng magandang pag-unawa sa mga praktikal na aplikasyon na may ilang konteksto sa negosyo | Pangunahing pag-unawa sa mga aplikasyon sa tunay na mundo | Limitadong koneksyon sa mga praktikal na aplikasyon |

## Mga Advanced na Opsyon sa Hamon

**🚀 Para sa mga estudyanteng naghahanap ng karagdagang hamon:**

- **Paghahambing na Pagsusuri**: Mag-audit ng 2-3 kumpetisyon na website at ihambing ang kanilang accessibility maturity
- **Pokus sa Mobile Accessibility**: Masusing pagsusuri sa mga isyu sa mobile-specific accessibility gamit ang Android TalkBack o iOS VoiceOver
- **Pananaw sa Pandaigdigang Accessibility**: Magsaliksik at mag-apply ng mga accessibility standards mula sa iba't ibang bansa (EN 301 549, Section 508, ADA)
- **Pagsusuri ng Accessibility Statement**: Suriin ang umiiral na accessibility statement ng website (kung mayroon) batay sa iyong mga natuklasan

## Mga Deliverable

I-submit ang komprehensibong ulat ng accessibility audit na nagpapakita ng propesyonal na pagsusuri at praktikal na plano sa pagpapatupad:

**📄 Mga Kinakailangan sa Final Report:**

1. **Executive Summary** (1 pahina)
   - Pangkalahatang-ideya ng website at pagsusuri sa accessibility maturity
   - Buod ng mga pangunahing natuklasan na may epekto sa negosyo
   - Inirerekomendang mga priyoridad na aksyon

2. **Metodolohiya at Saklaw** (1 pahina)
   - Paraan ng pagsusuri, mga tool na ginamit, at pamantayan sa pagsusuri
   - Mga pahina/seksyon na sinuri at anumang limitasyon
   - Framework ng compliance sa pamantayan (WCAG 2.1 AA)

3. **Detalyadong Ulat ng Natuklasan** (3-4 pahina)
   - Mga obserbasyon sa manu-manong pagsusuri na may mga senaryo ng user
   - Mga resulta ng automated na tool na may cross-referencing
   - Mga isyung nakaayos ayon sa prinsipyo ng WCAG na may ebidensya
   - Mga positibong feature ng accessibility na natukoy

4. **Estratehikong Plano sa Remediation** (3-4 pahina)
   - Mga priyoridad na rekomendasyon sa pagpapabuti (minimum 10)
   - Timeline ng pagpapatupad na may mga pagtatantya ng pagsisikap
   - Mga sukatan ng tagumpay at paraan ng pag-verify
   - Estratehiya sa pangmatagalang maintenance ng accessibility

5. **Suportang Ebidensya** (Mga Apendise)
   - Mga screenshot ng mga paglabag sa accessibility at mga testing tool
   - Mga halimbawa ng code na nagpapakita ng mga isyu at solusyon
   - Mga ulat ng tool at mga buod ng audit
   - Mga tala o recording ng screen reader testing

**📊 Mga Kinakailangan sa Format:**
- **Format ng dokumento**: PDF (propesyonal na presentasyon)
- **Bilang ng salita**: 2,500-3,500 salita (hindi kasama ang mga apendise at screenshot)
- **Mga visual na elemento**: Isama ang mga screenshot, diagram, at mga halimbawa sa kabuuan
- **Mga citation**: Banggitin ang mga WCAG guidelines at mga accessibility resources nang naaangkop

**💡 Mga Pro Tip para sa Kahusayan:**
- Gumamit ng propesyonal na format ng ulat na may pare-parehong headings at estilo
- Isama ang table of contents para sa madaling pag-navigate
- Balansehin ang teknikal na katumpakan sa malinaw, angkop sa negosyo na wika
- Ipakita ang pag-unawa sa parehong teknikal na pagpapatupad at epekto sa user

## Mga Layunin sa Pagkatuto

Pagkatapos makumpleto ang komprehensibong accessibility audit na ito, magkakaroon ka ng mahahalagang propesyonal na kasanayan:

**🎯 Mga Teknikal na Kakayahan:**
- **Mastery sa Accessibility Testing**: Kakayahan sa paggamit ng industry-standard na manu-manong at automated na mga pamamaraan ng pagsusuri
- **Pag-aaplay ng WCAG**: Praktikal na karanasan sa pag-aaplay ng Web Content Accessibility Guidelines sa mga tunay na sitwasyon
- **Pag-unawa sa Assistive Technology**: Hands-on na karanasan sa mga screen reader at keyboard navigation
- **Pagmamapa ng Problema-Solusyon**: Kakayahang tukuyin ang mga hadlang sa accessibility at bumuo ng partikular, maaksiyong mga estratehiya sa remediation

**💼 Mga Propesyonal na Kasanayan:**
- **Teknikal na Komunikasyon**: Karanasan sa pagsulat ng propesyonal na ulat ng accessibility para sa iba't ibang stakeholder
- **Estratehikong Pagpaplano**: Kakayahang mag-priyoridad ng mga pagpapabuti sa accessibility batay sa epekto sa user at feasibility ng pagpapatupad
- **Pagtiyak sa Kalidad**: Pag-unawa sa pagsusuri sa accessibility bilang bahagi ng lifecycle ng pag-develop
- **Pagtatasa ng Panganib**: Pagpapahalaga sa legal, negosyo, at etikal na implikasyon ng pagsunod sa accessibility

**🌍 Inclusive Design Mindset:**
- **Empatiya sa User**: Malalim na pag-unawa sa iba't ibang pangangailangan ng user at mga interaksyon sa assistive technology
- **Universal Design Principles**: Pagkilala na ang accessible na disenyo ay kapaki-pakinabang sa lahat ng user, hindi lamang sa mga may kapansanan
- **Patuloy na Pagpapabuti**: Framework para sa patuloy na pagsusuri at enhancement ng accessibility
- **Kasan

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.