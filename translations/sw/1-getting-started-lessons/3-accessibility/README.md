<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f0c88c3e2cefa8952d356f802b1e47ca",
  "translation_date": "2025-08-29T10:14:37+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "sw"
}
-->
# Kuunda Kurasa za Wavuti Zinazofikika

![Yote Kuhusu Ufikiaji](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.sw.png)
> Sketchnote na [Tomomi Imura](https://twitter.com/girlie_mac)

## Maswali ya Awali ya Somo
[Jaribio la awali la somo](https://ff-quizzes.netlify.app/web/)

> Nguvu ya Wavuti iko katika ulimwengu wake. Ufikiaji kwa kila mtu bila kujali ulemavu ni kipengele muhimu.
>
> \- Sir Timothy Berners-Lee, Mkurugenzi wa W3C na mvumbuzi wa Wavuti ya Ulimwengu

Nukuu hii inaangazia kikamilifu umuhimu wa kuunda tovuti zinazofikika. Programu ambayo haiwezi kufikiwa na kila mtu kwa asili yake ni ya ubaguzi. Kama watengenezaji wa wavuti, tunapaswa kila wakati kuwa na ufikiaji akilini. Kwa kuzingatia hili tangu mwanzo, utakuwa kwenye njia sahihi ya kuhakikisha kila mtu anaweza kufikia kurasa unazounda. Katika somo hili, utajifunza kuhusu zana zinazoweza kukusaidia kuhakikisha mali zako za wavuti zinaweza kufikiwa na jinsi ya kujenga kwa kuzingatia ufikiaji.

> Unaweza kuchukua somo hili kwenye [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## Zana za Kutumia

### Wasomaji wa Skrini

Moja ya zana zinazojulikana zaidi za ufikiaji ni wasomaji wa skrini.

[Wasomaji wa skrini](https://en.wikipedia.org/wiki/Screen_reader) ni wateja wanaotumiwa sana na watu wenye ulemavu wa kuona. Tunapochukua muda kuhakikisha kivinjari kinaonyesha taarifa tunazotaka kushiriki, tunapaswa pia kuhakikisha msomaji wa skrini anafanya hivyo.

Kwa kiwango cha msingi kabisa, msomaji wa skrini atasoma ukurasa kutoka juu hadi chini kwa sauti. Ikiwa ukurasa wako ni maandishi tu, msomaji atatoa taarifa kwa njia sawa na kivinjari. Bila shaka, kurasa za wavuti mara chache huwa maandishi tu; zitakuwa na viungo, picha, rangi, na vipengele vingine vya kuona. Ni muhimu kuhakikisha kwamba taarifa hii inasomwa kwa usahihi na msomaji wa skrini.

Kila mtengenezaji wa wavuti anapaswa kufahamiana na msomaji wa skrini. Kama ilivyoonyeshwa hapo juu, ni mteja ambaye watumiaji wako watatumia. Kama vile unavyofahamu jinsi kivinjari kinavyofanya kazi, unapaswa kujifunza jinsi msomaji wa skrini anavyofanya kazi. Kwa bahati nzuri, wasomaji wa skrini wamejengwa ndani ya mifumo mingi ya uendeshaji.

Baadhi ya vivinjari pia vina zana zilizojengwa ndani na viendelezi vinavyoweza kusoma maandishi kwa sauti au hata kutoa vipengele vya msingi vya urambazaji, kama [hizi zana za kivinjari cha Edge zinazolenga ufikiaji](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Hizi pia ni zana muhimu za ufikiaji, lakini hufanya kazi tofauti sana na wasomaji wa skrini na hazipaswi kuchanganywa na zana za kupima wasomaji wa skrini.

✅ Jaribu msomaji wa skrini na msomaji wa maandishi wa kivinjari. Kwenye Windows, [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) imejumuishwa kwa chaguo-msingi, na [JAWS](https://webaim.org/articles/jaws/) na [NVDA](https://www.nvaccess.org/about-nvda/) zinaweza pia kusakinishwa. Kwenye macOS na iOS, [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) imewekwa kwa chaguo-msingi.

### Kuza

Zana nyingine inayotumiwa sana na watu wenye ulemavu wa kuona ni kuza. Aina ya msingi kabisa ya kuza ni kuza tuli, inayodhibitiwa kupitia `Control + alama ya kuongeza (+)` au kwa kupunguza azimio la skrini. Aina hii ya kuza husababisha ukurasa mzima kubadilika ukubwa, kwa hivyo kutumia [muundo unaojibika](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) ni muhimu ili kutoa uzoefu mzuri wa mtumiaji katika viwango vya juu vya kuza.

Aina nyingine ya kuza hutegemea programu maalum ya kukuza eneo moja la skrini na kusogeza, kama kutumia kioo cha kukuza halisi. Kwenye Windows, [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) imejengwa ndani, na [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) ni programu ya kukuza ya wahusika wa tatu yenye vipengele zaidi na msingi mkubwa wa watumiaji. macOS na iOS zote zina programu ya kukuza iliyojengwa ndani inayoitwa [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Kikagua Ulinganifu wa Rangi

Rangi kwenye tovuti zinahitaji kuchaguliwa kwa uangalifu ili kujibu mahitaji ya watumiaji wenye upofu wa rangi au watu wanaopata ugumu wa kuona rangi zenye utofauti mdogo.

✅ Jaribu tovuti unayoipenda kwa matumizi ya rangi kwa kutumia kiendelezi cha kivinjari kama [kikagua utofauti wa rangi cha WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Unajifunza nini?

### Lighthouse

Katika eneo la zana za msanidi wa kivinjari chako, utapata zana ya Lighthouse. Zana hii ni muhimu kupata mtazamo wa kwanza wa ufikiaji (pamoja na uchambuzi mwingine) wa tovuti. Ingawa ni muhimu kutotegemea Lighthouse pekee, alama ya 100% ni muhimu kama msingi.

✅ Tafuta Lighthouse kwenye jopo la zana za msanidi wa kivinjari chako na fanya uchambuzi kwenye tovuti yoyote. Unagundua nini?

## Kubuni kwa Ufikiaji

Ufikiaji ni mada kubwa kiasi. Ili kukusaidia, kuna rasilimali nyingi zinazopatikana.

- [Accessible U - Chuo Kikuu cha Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Ingawa hatutaweza kufunika kila kipengele cha kuunda tovuti zinazofikika, hapa chini kuna baadhi ya kanuni za msingi unazotaka kutekeleza. Kubuni ukurasa unaofikika tangu mwanzo ni **rahisi zaidi** kuliko kurudi kwenye ukurasa uliopo ili kuufanya ufikike.

## Kanuni Nzuri za Onyesho

### Paleti za Rangi Salama

Watu huona ulimwengu kwa njia tofauti, na hii inajumuisha rangi. Unapochagua mpango wa rangi kwa tovuti yako, unapaswa kuhakikisha kuwa inafikika kwa wote. Zana moja nzuri ya [kuzalisha paleti za rangi ni Color Safe](http://colorsafe.co/).

✅ Tambua tovuti ambayo ina matatizo makubwa katika matumizi yake ya rangi. Kwa nini?

### Tumia HTML Sahihi

Kwa kutumia CSS na JavaScript, inawezekana kufanya kipengele chochote kionekane kama aina yoyote ya udhibiti. `<span>` inaweza kutumika kuunda `<button>`, na `<b>` inaweza kuwa kiungo. Ingawa hii inaweza kuonekana rahisi kuunda, haifanyi chochote kwa msomaji wa skrini. Tumia HTML sahihi unapounda vidhibiti kwenye ukurasa. Ikiwa unataka kiungo, tumia `<a>`. Kutumia HTML sahihi kwa udhibiti sahihi kunaitwa kutumia Semantic HTML.

✅ Nenda kwenye tovuti yoyote na uone kama wabunifu na watengenezaji wanatumia HTML ipasavyo. Je, unaweza kupata kitufe ambacho kinapaswa kuwa kiungo? Kidokezo: bonyeza kulia na uchague 'View Page Source' kwenye kivinjari chako ili kuangalia msimbo wa msingi.

### Unda Hierakia ya Vichwa Inayoelezea

Watumiaji wa wasomaji wa skrini [wanategemea sana vichwa](https://webaim.org/projects/screenreadersurvey8/#finding) kupata taarifa na kuvinjari kupitia ukurasa. Kuandika maudhui ya kichwa yanayoelezea na kutumia lebo za vichwa vya semantic ni muhimu kwa kuunda tovuti inayoweza kuvinjari kwa urahisi kwa watumiaji wa wasomaji wa skrini.

### Tumia Vidokezo Vizuri vya Kuona

CSS inatoa udhibiti kamili juu ya mwonekano wa kipengele chochote kwenye ukurasa. Unaweza kuunda visanduku vya maandishi bila mduara au viungo bila mstari wa chini. Kwa bahati mbaya, kuondoa vidokezo hivyo kunaweza kufanya iwe changamoto zaidi kwa mtu anayevitegemea kutambua aina ya udhibiti.

## Umuhimu wa Maandishi ya Viungo

Viungo ni msingi wa kuvinjari wavuti. Kwa hivyo, kuhakikisha msomaji wa skrini anaweza kusoma viungo ipasavyo huruhusu watumiaji wote kuvinjari tovuti yako.

### Wasomaji wa Skrini na Viungo

Kama unavyotarajia, wasomaji wa skrini husoma maandishi ya viungo kwa njia sawa na wanavyosoma maandishi mengine kwenye ukurasa. Kwa kuzingatia hili, maandishi yaliyoonyeshwa hapa chini yanaweza kuonekana yanakubalika.

> Penguin mdogo, wakati mwingine hujulikana kama penguin wa hadithi, ndiye penguin mdogo zaidi duniani. [Bonyeza hapa](https://en.wikipedia.org/wiki/Little_penguin) kwa maelezo zaidi.

> Penguin mdogo, wakati mwingine hujulikana kama penguin wa hadithi, ndiye penguin mdogo zaidi duniani. Tembelea https://en.wikipedia.org/wiki/Little_penguin kwa maelezo zaidi.

> **NOTE** Kama unavyosoma, unapaswa **kamwe** kuunda viungo vinavyoonekana kama hapo juu.

Kumbuka, wasomaji wa skrini ni kiolesura tofauti na vivinjari vyenye seti tofauti za vipengele.

### Tatizo la Kutumia URL

Wasomaji wa skrini husoma maandishi. Ikiwa URL inaonekana kwenye maandishi, msomaji wa skrini atasoma URL hiyo. Kwa ujumla, URL haifanyi maana yoyote, na inaweza kusikika kero. Unaweza kuwa umepata uzoefu huu ikiwa simu yako imewahi kusoma ujumbe wa maandishi wenye URL kwa sauti.

### Tatizo la "bonyeza hapa"

Wasomaji wa skrini pia wana uwezo wa kusoma viungo pekee kwenye ukurasa, kama vile mtu mwenye kuona anavyoweza kuchanganua ukurasa kutafuta viungo. Ikiwa maandishi ya kiungo kila wakati ni "bonyeza hapa", mtumiaji atasikia tu "bonyeza hapa, bonyeza hapa, bonyeza hapa, bonyeza hapa, bonyeza hapa, ..." Viungo vyote sasa havitofautiani.

### Maandishi Mazuri ya Kiungo

Maandishi mazuri ya kiungo yanaelezea kwa kifupi kilicho upande wa pili wa kiungo. Katika mfano hapo juu unaozungumzia penguin mdogo, kiungo ni kwa ukurasa wa Wikipedia kuhusu spishi hiyo. Kifungu *penguin mdogo* kingefanya maandishi bora ya kiungo kwani kinaweka wazi kile mtu atajifunza ikiwa atabonyeza kiungo - penguin mdogo.

> [Penguin mdogo](https://en.wikipedia.org/wiki/Little_penguin), wakati mwingine hujulikana kama penguin wa hadithi, ndiye penguin mdogo zaidi duniani.

✅ Vinjari wavuti kwa dakika chache ili kupata kurasa zinazotumia mikakati isiyoeleweka ya kuunganisha. Linganisha na tovuti zingine zilizounganishwa vizuri. Unajifunza nini?

#### Vidokezo vya Injini za Utafutaji

Kama bonasi ya ziada kwa kuhakikisha tovuti yako inafikika kwa wote, utasaidia injini za utafutaji kuvinjari tovuti yako pia. Injini za utafutaji hutumia maandishi ya viungo kujifunza mada za kurasa. Kwa hivyo kutumia maandishi mazuri ya viungo husaidia kila mtu!

### ARIA

Fikiria ukurasa ufuatao:

| Bidhaa        | Maelezo           | Agiza         |
| ------------- | ----------------- | ------------- |
| Widget        | [Maelezo](../../../../1-getting-started-lessons/3-accessibility/')    | [Agiza](../../../../1-getting-started-lessons/3-accessibility/')  |
| Super widget  | [Maelezo](../../../../1-getting-started-lessons/3-accessibility/')    | [Agiza](../../../../1-getting-started-lessons/3-accessibility/')  |

Katika mfano huu, kurudia maandishi ya maelezo na agiza kuna mantiki kwa mtu anayetumia kivinjari. Hata hivyo, mtu anayetumia msomaji wa skrini atasikia tu maneno *maelezo* na *agiza* yakirudiwa bila muktadha.

Ili kusaidia hali kama hizi, HTML inasaidia seti ya sifa zinazojulikana kama [Programu Tajiri za Mtandao Zinazofikika (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Sifa hizi hukuruhusu kutoa taarifa za ziada kwa wasomaji wa skrini.

> **NOTE**: Kama vipengele vingi vya HTML, usaidizi wa kivinjari na msomaji wa skrini unaweza kutofautiana. Hata hivyo, wateja wengi wa kawaida wanasaidia sifa za ARIA.

Unaweza kutumia `aria-label` kuelezea kiungo wakati muundo wa ukurasa haukuruhusu. Maelezo ya widget yanaweza kuwekwa kama

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ Kwa ujumla, kutumia alama za Semantic kama ilivyoelezwa hapo juu kunapita matumizi ya ARIA, lakini wakati mwingine hakuna sawa wa semantic kwa vidhibiti mbalimbali vya HTML. Mfano mzuri ni Mti. Hakuna sawa wa HTML kwa mti, kwa hivyo unatambua `<div>` ya jumla kwa kipengele hiki na jukumu sahihi na maadili ya aria. [Nyaraka za MDN kuhusu ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) zina taarifa zaidi muhimu.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Picha

Ni wazi kuwa wasomaji wa skrini hawawezi kusoma kiotomatiki kilicho kwenye picha. Kuhakikisha picha zinaweza kufikiwa hakuhitaji kazi nyingi - ni kile sifa ya `alt` inahusu. Picha zote zenye maana zinapaswa kuwa na `alt` kuelezea ni nini.

Picha ambazo ni za mapambo tu zinapaswa kuwa na sifa yao ya `alt` ikowekwa kwa kamba tupu: `alt=""`. Hii huzuia wasomaji wa skrini kutangaza picha ya mapambo bila sababu.

✅ Kama unavyotarajia, injini za utafutaji pia haziwezi kuelewa kilicho kwenye picha. Zinatumia pia maandishi ya alt. Kwa hivyo mara nyingine tena, kuhakikisha ukurasa wako unafikika hutoa bonasi za ziada!

## Kibodi

Baadhi ya watumiaji hawawezi kutumia panya au trackpad, badala yake wanategemea mwingiliano wa kibodi ili kuhamia kutoka kipengele kimoja hadi kingine. Ni muhimu kwa tovuti yako kuwasilisha maudhui yako kwa mpangilio wa kimantiki ili mtumiaji wa kibodi aweze kufikia kila kipengele kinachoweza kuingiliana wanaposhuka kwenye hati. Ikiwa unajenga kurasa zako za wavuti kwa alama za semantic na kutumia CSS kuunda mpangilio wao wa kuona, tovuti yako inapaswa kuwa na uwezo wa kuvinjari kwa kibodi, lakini ni muhimu kupima kipengele hiki kwa mikono. Jifunze zaidi kuhusu [mikakati ya urambazaji wa kibodi](https://webaim.org/techniques/keyboard/).

✅ Nenda kwenye tovuti yoyote na jaribu kuvinjari kupitia hiyo kwa kutumia kibodi pekee. Nini kinafanya kazi, nini hakifanyi kazi? Kwa nini?

## Muhtasari

Wavuti inayofikika kwa baadhi si kweli 'wavuti ya ulimwengu wote'. Njia bora ya kuhakikisha tovuti unazounda zinaweza kufikiwa ni kujumuisha mbinu bora za ufikiaji tangu mwanzo. Ingawa kuna hatua za ziada zinazohusika, kujumuisha ujuzi huu katika mtiririko wako wa kazi sasa kutamaanisha kurasa zote unazounda zitafikika.

---

## 🚀 Changamoto

Chukua HTML hii na uandike upya ili iweze kufikiwa zaidi, kwa kuzingatia mikakati uliyojifunza.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</p>
    </div>
  </body>
</html>
```

## Maswali ya Baada ya Somo
[Jaribio la baada ya somo](https://ff-quizzes.netlify.app/web/en/)

## Mapitio na Kujisomea
Serikali nyingi zina sheria kuhusu mahitaji ya ufikivu. Soma kuhusu sheria za ufikivu za nchi yako. Ni nini kinachojumuishwa, na nini hakijajumuishwa? Mfano ni [tovuti hii ya serikali](https://accessibility.blog.gov.uk/).

## Kazi
 
[Chambua tovuti isiyo na ufikivu](assignment.md)

Shukrani: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) na Instrument

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuchukuliwa kama chanzo rasmi. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.