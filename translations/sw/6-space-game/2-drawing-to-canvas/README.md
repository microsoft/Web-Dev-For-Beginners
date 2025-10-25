<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "84053695dca714e16ed064366503ebd5",
  "translation_date": "2025-10-24T19:40:40+00:00",
  "source_file": "6-space-game/2-drawing-to-canvas/README.md",
  "language_code": "sw"
}
-->
# Jenga Mchezo wa Anga Sehemu ya 2: Chora Shujaa na Wanyama wa Ajabu kwenye Canvas

API ya Canvas ni mojawapo ya vipengele vyenye nguvu zaidi katika maendeleo ya wavuti kwa kuunda michoro ya nguvu na ya kuingiliana moja kwa moja kwenye kivinjari chako. Katika somo hili, tutabadilisha kipengele cha HTML `<canvas>` kilicho tupu kuwa ulimwengu wa mchezo uliojaa mashujaa na wanyama wa ajabu. Fikiria canvas kama ubao wako wa sanaa wa kidijitali ambapo msimbo unakuwa wa kuona.

Tunajenga juu ya kile ulichojifunza katika somo la awali, na sasa tutazama katika vipengele vya kuona. Utajifunza jinsi ya kupakia na kuonyesha sprites za mchezo, kuweka vipengele kwa usahihi, na kuunda msingi wa kuona kwa mchezo wako wa anga. Hii inaziba pengo kati ya kurasa za wavuti zisizobadilika na uzoefu wa nguvu na wa kuingiliana.

Mwisho wa somo hili, utakuwa na eneo kamili la mchezo na meli ya shujaa wako ikiwa imewekwa kwa usahihi na maumbo ya adui tayari kwa vita. Utaelewa jinsi michezo ya kisasa inavyotoa michoro kwenye vivinjari na kupata ujuzi wa kuunda uzoefu wako wa kuona wa kuingiliana. Hebu tuchunguze michoro ya canvas na kuleta mchezo wako wa anga uhai!

## Maswali ya Awali ya Somo

[Maswali ya awali ya somo](https://ff-quizzes.netlify.app/web/quiz/31)

## Canvas

Kwa hivyo, kipengele hiki cha `<canvas>` ni nini hasa? Ni suluhisho la HTML5 la kuunda michoro ya nguvu na uhuishaji katika vivinjari vya wavuti. Tofauti na picha za kawaida au video ambazo ni za kudumu, canvas inakupa udhibiti wa kiwango cha pikseli juu ya kila kitu kinachoonekana kwenye skrini. Hii inafanya kuwa bora kwa michezo, taswira za data, na sanaa ya kuingiliana. Fikiria kama uso wa kuchora unaoweza kupangwa ambapo JavaScript inakuwa brashi yako ya rangi.

Kwa chaguo-msingi, kipengele cha canvas kinaonekana kama mstatili tupu, wa uwazi kwenye ukurasa wako. Lakini hapo ndipo uwezo wake unapoonekana! Nguvu yake halisi inaibuka unapoitumia JavaScript kuchora maumbo, kupakia picha, kuunda uhuishaji, na kufanya vitu viitike kwa mwingiliano wa mtumiaji. Ni sawa na jinsi waanzilishi wa michoro za kompyuta wa mapema huko Bell Labs katika miaka ya 1960 walivyolazimika kupanga kila pikseli kuunda uhuishaji wa kidijitali wa kwanza.

✅ Soma [zaidi kuhusu API ya Canvas](https://developer.mozilla.org/docs/Web/API/Canvas_API) kwenye MDN.

Hivi ndivyo inavyotangazwa kawaida, kama sehemu ya mwili wa ukurasa:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

**Hivi ndivyo msimbo huu unavyofanya:**
- **Huweka** sifa ya `id` ili uweze kurejelea kipengele hiki maalum cha canvas katika JavaScript
- **Hufafanua** `width` kwa pikseli ili kudhibiti ukubwa wa usawa wa canvas
- **Huweka** `height` kwa pikseli ili kuamua vipimo vya wima vya canvas

## Kuchora Jiometri Rahisi

Sasa kwa kuwa unajua kipengele cha canvas ni nini, hebu tuchunguze jinsi ya kuchora juu yake! Canvas hutumia mfumo wa kuratibu ambao unaweza kuhisi kuwa wa kawaida kutoka darasa la hesabu, lakini kuna mabadiliko moja muhimu maalum kwa michoro za kompyuta.

Canvas hutumia kuratibu za Cartesian na mhimili wa x (usawa) na mhimili wa y (wima) kuweka kila kitu unachochora. Lakini hapa kuna tofauti kuu: tofauti na mfumo wa kuratibu kutoka darasa la hesabu, sehemu ya asili `(0,0)` huanza kwenye kona ya juu-kushoto, na thamani za x huongezeka unapohamia kulia na thamani za y huongezeka unaposhuka chini. Njia hii inatokana na maonyesho ya kompyuta ya mapema ambapo mihimili ya elektroni ilichunguza kutoka juu hadi chini, na kufanya juu-kushoto kuwa sehemu ya asili ya kawaida.

![grid ya canvas](../../../../translated_images/canvas_grid.5f209da785ded492a01ece440e3032afe51efa500cc2308e5ea4252487ceaf0b.sw.png)
> Picha kutoka [MDN](https://developer.mozilla.org/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

Ili kuchora kwenye kipengele cha canvas, utafuata mchakato wa hatua tatu ambao unaunda msingi wa michoro yote ya canvas. Mara unapofanya hivi mara chache, inakuwa rahisi:

1. **Pata rejeleo** la kipengele chako cha Canvas kutoka DOM (kama kipengele kingine chochote cha HTML)
2. **Pata muktadha wa utoaji wa 2D** – hii inatoa mbinu zote za kuchora
3. **Anza kuchora!** Tumia mbinu za muktadha zilizojengwa ndani kuunda michoro yako

Hivi ndivyo inavyoonekana katika msimbo:

```javascript
// Step 1: Get the canvas element
const canvas = document.getElementById("myCanvas");

// Step 2: Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Step 3: Set fill color and draw a rectangle
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 200, 200); // x, y, width, height
```

**Hebu tuchambue hatua kwa hatua:**
- Tunachukua kipengele chetu cha canvas kwa kutumia ID yake na kuhifadhi katika kigezo
- Tunapata muktadha wa utoaji wa 2D – hii ni zana yetu iliyojaa mbinu za kuchora
- Tunaiambia canvas tunataka kujaza vitu kwa rangi nyekundu kwa kutumia mali ya `fillStyle`
- Tunachora mstatili kuanzia kwenye kona ya juu-kushoto (0,0) ambao ni upana wa pikseli 200 na urefu

✅ API ya Canvas inazingatia zaidi maumbo ya 2D, lakini unaweza pia kuchora vipengele vya 3D kwenye tovuti; kwa hili, unaweza kutumia [API ya WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API).

Unaweza kuchora vitu vya aina mbalimbali kwa kutumia API ya Canvas kama:

- **Maumbo ya jiometri**, tayari tumeonyesha jinsi ya kuchora mstatili, lakini kuna mengi zaidi unayoweza kuchora.
- **Maandishi**, unaweza kuchora maandishi kwa fonti yoyote na rangi unayotaka.
- **Picha**, unaweza kuchora picha kulingana na mali ya picha kama .jpg au .png kwa mfano.

✅ Jaribu! Unajua jinsi ya kuchora mstatili, unaweza kuchora duara kwenye ukurasa? Angalia baadhi ya michoro ya kuvutia ya Canvas kwenye CodePen. Hapa kuna [mfano wa kuvutia sana](https://codepen.io/dissimulate/pen/KrAwx).

## Pakia na Chora Mali ya Picha

Kuchora maumbo ya msingi ni muhimu kwa kuanza, lakini michezo mingi inahitaji picha halisi! Sprites, mandhari, na textures ndizo zinazotoa mvuto wa kuona kwa michezo. Kupakia na kuonyesha picha kwenye canvas hufanya kazi tofauti na kuchora maumbo ya jiometri, lakini ni rahisi mara unapofahamu mchakato.

Tunahitaji kuunda kipengele cha `Image`, kupakia faili ya picha yetu (hii hufanyika kwa njia ya asinkroni, ikimaanisha "katika usuli"), na kisha kuichora kwenye canvas mara tu inapokuwa tayari. Njia hii inahakikisha picha zako zinaonyeshwa vizuri bila kuzuia programu yako wakati zinapakia.

### Kupakia Picha ya Msingi

```javascript
const img = new Image();
img.src = 'path/to/my/image.png';
img.onload = () => {
  // Image loaded and ready to be used
  console.log('Image loaded successfully!');
};
```

**Hivi ndivyo kinachotokea katika msimbo huu:**
- Tunaunda kipengele kipya cha Picha ili kushikilia sprite au texture yetu
- Tunaiambia faili gani ya picha ya kupakia kwa kuweka njia ya chanzo
- Tunaisikiliza tukio la kupakia ili tujue hasa wakati picha iko tayari kutumika

### Njia Bora ya Kupakia Picha

Hapa kuna njia thabiti zaidi ya kushughulikia upakiaji wa picha ambayo watengenezaji wa kitaalamu hutumia mara kwa mara. Tutafunga upakiaji wa picha katika kazi inayotegemea Promise – njia hii, maarufu wakati Promise za JavaScript zilipokuwa kiwango cha ES6, hufanya msimbo wako kuwa wa mpangilio zaidi na hushughulikia makosa kwa urahisi:

```javascript
function loadAsset(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${path}`));
    };
  });
}

// Modern usage with async/await
async function initializeGame() {
  try {
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');
    // Images are now ready to use
  } catch (error) {
    console.error('Failed to load game assets:', error);
  }
}
```

**Kile tulichofanya hapa:**
- Tumefunga mantiki yote ya upakiaji wa picha katika Promise ili tuweze kuishughulikia vizuri
- Tumeongeza utunzaji wa makosa ambao hutufahamisha wakati kitu kinakwenda vibaya
- Tumetumia sintaksia ya kisasa ya async/await kwa sababu ni rahisi kusoma
- Tumetumia vizuizi vya try/catch kushughulikia kwa urahisi matatizo yoyote ya upakiaji

Mara picha zako zinapopakiwa, kuzichora kwenye canvas ni rahisi sana:

```javascript
async function renderGameScreen() {
  try {
    // Load game assets
    const heroImg = await loadAsset('hero.png');
    const monsterImg = await loadAsset('monster.png');

    // Get canvas and context
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Draw images to specific positions
    ctx.drawImage(heroImg, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(monsterImg, 0, 0);
  } catch (error) {
    console.error('Failed to render game screen:', error);
  }
}
```

**Hebu tuchambue hatua kwa hatua:**
- Tunapakia picha zetu za shujaa na monster kwa usuli kwa kutumia await
- Tunachukua kipengele chetu cha canvas na kupata muktadha wa utoaji wa 2D tunaohitaji
- Tunapanga picha ya shujaa katikati kwa kutumia hesabu ya haraka ya kuratibu
- Tunaiweka picha ya monster kwenye kona ya juu-kushoto kuanza maumbo ya adui
- Tunashika makosa yoyote yanayoweza kutokea wakati wa upakiaji au utoaji

## Sasa Ni Wakati wa Kuanza Kujenga Mchezo Wako

Sasa tutaweka kila kitu pamoja kuunda msingi wa kuona wa mchezo wako wa anga. Una uelewa mzuri wa misingi ya canvas na mbinu za upakiaji wa picha, kwa hivyo sehemu hii ya vitendo itakuongoza kupitia kujenga skrini kamili ya mchezo na sprites zilizowekwa kwa usahihi.

### Kile cha Kujenga

Utajenga ukurasa wa wavuti na kipengele cha Canvas. Inapaswa kutoa skrini nyeusi `1024*768`. Tumekupa picha mbili:

- Meli ya shujaa

   ![Meli ya shujaa](../../../../translated_images/player.dd24c1afa8c71e9b82b2958946d4bad13308681392d4b5ddcc61a0e818ef8088.sw.png)

- 5*5 monster

   ![Meli ya monster](../../../../translated_images/enemyShip.5df2a822c16650c2fb3c06652e8ec8120cdb9122a6de46b9a1a56d54db22657f.sw.png)

### Hatua Zinazopendekezwa za Kuanza Maendeleo

Tafuta faili za kuanzia ambazo zimeundwa kwa ajili yako katika folda ndogo ya `your-work`. Muundo wa mradi wako unapaswa kuwa na:

```bash
your-work/
├── assets/
│   ├── enemyShip.png
│   └── player.png
├── index.html
├── app.js
└── package.json
```

**Hivi ndivyo unavyofanya kazi:**
- **Sprites za mchezo** ziko katika folda ya `assets/` ili kila kitu kiwe kimepangwa
- **Faili yako kuu ya HTML** inaweka kipengele cha canvas na kuandaa kila kitu
- **Faili ya JavaScript** ambapo utaandika uchawi wako wote wa utoaji wa mchezo
- **Package.json** inayoseti seva ya maendeleo ili uweze kujaribu kwa ndani

Fungua folda hii katika Visual Studio Code ili kuanza maendeleo. Utahitaji mazingira ya maendeleo ya ndani na Visual Studio Code, NPM, na Node.js imewekwa. Ikiwa huna `npm` imewekwa kwenye kompyuta yako, [hivi ndivyo unavyoweza kuisakinisha](https://www.npmjs.com/get-npm).

Anzisha seva yako ya maendeleo kwa kuvinjari folda ya `your-work`:

```bash
cd your-work
npm start
```

**Amri hii inafanya mambo mazuri sana:**
- **Inaanzisha** seva ya ndani kwenye `http://localhost:5000` ili uweze kujaribu mchezo wako
- **Inahudumia** faili zako zote vizuri ili kivinjari chako kiweze kuzibeba kwa usahihi
- **Inatazama** faili zako kwa mabadiliko ili uweze kuendeleza kwa urahisi
- **Inakupa** mazingira ya maendeleo ya kitaalamu ya kujaribu kila kitu

> 💡 **Kumbuka**: Kivinjari chako kitaonyesha ukurasa tupu mwanzoni – hilo linatarajiwa! Unapoongeza msimbo, safisha kivinjari chako ili kuona mabadiliko yako. Njia hii ya maendeleo ya kurudia ni sawa na jinsi NASA ilivyojenga kompyuta ya mwongozo wa Apollo – kujaribu kila sehemu kabla ya kuijumuisha katika mfumo mkubwa.

### Ongeza Msimbo

Ongeza msimbo unaohitajika kwenye `your-work/app.js` kukamilisha kazi zifuatazo:

1. **Chora canvas na mandhari nyeusi**
   > 💡 **Hivi ndivyo**: Tafuta TODO katika `/app.js` na ongeza mistari miwili tu. Weka `ctx.fillStyle` kuwa nyeusi, kisha tumia `ctx.fillRect()` kuanzia (0,0) na vipimo vya canvas yako. Rahisi!

2. **Pakia textures za mchezo**
   > 💡 **Hivi ndivyo**: Tumia `await loadAsset()` kupakia picha zako za mchezaji na adui. Hifadhi katika vigezo ili uweze kuzitumia baadaye. Kumbuka – hazitaonekana hadi uzichore!

3. **Chora meli ya shujaa katikati-chini**
   > 💡 **Hivi ndivyo**: Tumia `ctx.drawImage()` kuweka shujaa wako. Kwa kuratibu ya x, jaribu `canvas.width / 2 - 45` kuisogeza katikati, na kwa kuratibu ya y tumia `canvas.height - canvas.height / 4` kuisogeza eneo la chini.

4. **Chora maumbo ya adui ya 5×5**
   > 💡 **Hivi ndivyo**: Tafuta kazi ya `createEnemies` na weka kitanzi kilichopachikwa. Utahitaji kufanya hesabu kwa nafasi na kuweka, lakini usijali – nitakuonyesha jinsi ya kufanya!

Kwanza, weka constants kwa mpangilio sahihi wa maumbo ya adui:

```javascript
const ENEMY_TOTAL = 5;
const ENEMY_SPACING = 98;
const FORMATION_WIDTH = ENEMY_TOTAL * ENEMY_SPACING;
const START_X = (canvas.width - FORMATION_WIDTH) / 2;
const STOP_X = START_X + FORMATION_WIDTH;
```

**Hebu tuchambue constants hizi:**
- Tunapanga maadui 5 kwa kila safu na safu (gridi nzuri ya 5×5)
- Tunafafanua nafasi ya kuweka kati ya maadui ili wasionekane wamebanwa
- Tunahesabu upana wa mpangilio wetu wote
- Tunajua wapi pa kuanza na kuacha ili mpangilio uonekane katikati

Kisha, unda vitanzi vilivyopachikwa kuchora mpangilio wa maadui:

```javascript
for (let x = START_X; x < STOP_X; x += ENEMY_SPACING) {
  for (let y = 0; y < 50 * 5; y += 50) {
    ctx.drawImage(enemyImg, x, y);
  }
}
```

**Hivi ndivyo kitanzi kilichopachikwa kinavyofanya:**
- Kitanzi cha nje **kinasogea** kutoka kushoto kwenda kulia kwenye mpangilio wetu
- Kitanzi cha ndani **kinapita** kutoka juu kwenda chini kuunda safu nadhifu
- Tunachora kila sprite ya adui kwenye kuratibu sahihi za x,y tulizohesabu
- Kila kitu kinabaki **kimepangwa vizuri** ili kionekane kitaalamu na kimepangwa

## Matokeo

Matokeo ya mwisho yanapaswa kuonekana kama hivi:

![Skrini nyeusi na shujaa na maadui 5*5](../../../../translated_images/partI-solution.36c53b48c9ffae2a5e15496b23b604ba5393433e4bf91608a7a0a020eb7a2691.sw.png)

## Suluhisho

Tafadhali jaribu kutatua mwenyewe kwanza lakini ukikwama, angalia [suluhisho](../../../../6-space-game/2-drawing-to-canvas/solution/app.js)

---

## Changamoto ya Wakala wa GitHub Copilot 🚀

Tumia hali ya Wakala kukamilisha changamoto ifuatayo:

**Maelezo:** Boresha canvas ya mchezo wako wa anga kwa kuongeza athari za kuona na vipengele vya kuingiliana kwa kutumia mbinu za API ya Canvas ulizojifunza.

**Kichocheo:** Unda faili mpya inayoitwa `enhanced-canvas.html` na canvas inayonyesha nyota zinazong'aa kwenye mandhari, upau wa afya unaopiga kwa meli ya shujaa, na meli za adui zinazotembea polepole chini. Jumuisha msimbo wa JavaScript unaochora nyota zinazong'aa kwa kutumia nafasi za nasibu na opacity, kutekeleza upau wa afya unaobadilisha rangi kulingana na kiwango cha afya (kijani > njano > nyekundu), na kuhuisha meli za adui kusonga chini ya skrini kwa kasi tofauti.

Jifunze zaidi kuhusu [hali ya wakala](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) hapa.

## 🚀 Changamoto

Umejifunza kuhusu kuchora kwa API ya Canvas inayozingatia 2D; angalia [API ya WebGL](https://developer.mozilla.org/docs/Web/API/WebGL_API), na jaribu kuchora kitu cha 3D.

## Maswali ya Baada ya Somo

[Maswali ya baada ya somo](https://ff-quizzes.netlify.app/web/quiz/32)

## Mapitio na Kujisomea

Jifunze zaidi kuhusu API ya Canvas kwa [kusoma kuhusu](https://developer.mozilla.org/docs/Web/API/Canvas_API).

## Kazi

[Cheza na API ya Canvas](assignment.md)

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya kutafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.