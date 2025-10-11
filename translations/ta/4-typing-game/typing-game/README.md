<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "1b0aeccb600f83c603cd70cb42df594d",
  "translation_date": "2025-10-11T12:08:14+00:00",
  "source_file": "4-typing-game/typing-game/README.md",
  "language_code": "ta"
}
-->
# நிகழ்வுகளைப் பயன்படுத்தி ஒரு விளையாட்டை உருவாக்குதல்

## முன்-வகுப்பு வினாடி வினா

[முன்-வகுப்பு வினாடி வினா](https://ff-quizzes.netlify.app/web/quiz/21)

## நிகழ்வு சார்ந்த நிரலாக்கம்

ஒரு உலாவி அடிப்படையிலான பயன்பாட்டை உருவாக்கும்போது, நாங்கள் உருவாக்கியதைப் பயன்படுத்துவதற்காக பயனர் பயன்படுத்தக்கூடிய ஒரு கிராஃபிகல் பயனர் இடைமுகத்தை (GUI) வழங்குகிறோம். உலாவியுடன் தொடர்பு கொள்ளும் மிகவும் பொதுவான வழி, பல்வேறு கூறுகளில் கிளிக் செய்வது மற்றும் தட்டச்சு செய்வதன் மூலம் தான். ஒரு டெவலப்பராக நாங்கள் எதிர்கொள்ளும் சவால் என்னவென்றால், அவர்கள் இந்த செயல்பாடுகளை எப்போது செய்யப் போகிறார்கள் என்பதை நாங்கள் அறிய முடியாது!

[நிகழ்வு சார்ந்த நிரலாக்கம்](https://en.wikipedia.org/wiki/Event-driven_programming) என்பது GUI உருவாக்க நாங்கள் செய்ய வேண்டிய நிரலாக்கத்தின் வகைக்கு பெயர். இந்த சொற்றொடரை சிறிது பிரித்து பார்ப்போம், இங்கே உள்ள முக்கிய சொல் **நிகழ்வு**. [நிகழ்வு](https://www.merriam-webster.com/dictionary/event) என்பது Merriam-Webster இன் வரையறைப்படி "ஏதோ ஒன்று நிகழ்வது" என்று வரையறுக்கப்பட்டுள்ளது. இது எங்கள் சூழ்நிலையை சரியாக விவரிக்கிறது. எப்போது நிகழும் என்பதை நாங்கள் அறியாமல், அதற்கு பதிலளிக்க சில குறியீடுகளை செயல்படுத்த விரும்புகிறோம் என்பதை நாங்கள் அறிவோம்.

நாங்கள் செயல்படுத்த விரும்பும் குறியீட்டு பகுதியை குறிக்கிற வழி, ஒரு செயல்பாட்டை உருவாக்குவதன் மூலம் தான். [செயல்முறை நிரலாக்கம்](https://en.wikipedia.org/wiki/Procedural_programming) பற்றி நாம் சிந்திக்கும்போது, செயல்பாடுகள் ஒரு குறிப்பிட்ட வரிசையில் அழைக்கப்படுகின்றன. இந்த அதே விஷயம் நிகழ்வு சார்ந்த நிரலாக்கத்துடன் உண்மையாக இருக்கும். வேறுபாடு என்னவென்றால், செயல்பாடுகள் **எப்படி** அழைக்கப்படும் என்பதே.

நிகழ்வுகளை (பட்டன் கிளிக் செய்தல், தட்டச்சு செய்தல் போன்றவை) கையாள, நாங்கள் **நிகழ்வு கேட்பாளர்களை** பதிவு செய்கிறோம். ஒரு நிகழ்வு கேட்பாளர் என்பது ஒரு நிகழ்வை நிகழ்வதற்காகக் கேட்கும் மற்றும் பதிலளிக்க செயல்படுத்தும் ஒரு செயல்பாடாகும். நிகழ்வு கேட்பாளர்கள் UI-ஐ புதுப்பிக்க, சர்வருக்கு அழைப்புகளைச் செய்ய அல்லது பயனர் நடவடிக்கைக்கு பதிலளிக்க தேவையான பிறவற்றைச் செய்ய முடியும். நாங்கள் [addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) ஐப் பயன்படுத்தி ஒரு நிகழ்வு கேட்பாளரைச் சேர்க்கிறோம் மற்றும் செயல்படுத்த ஒரு செயல்பாட்டை வழங்குகிறோம்.

> **NOTE:** நிகழ்வு கேட்பாளர்களை உருவாக்க பல வழிகள் உள்ளன என்பதை குறிப்பிடுவது மதிப்பிற்குரியது. நீங்கள் பெயரிடப்படாத செயல்பாடுகளைப் பயன்படுத்தலாம் அல்லது பெயரிடப்பட்டவற்றை உருவாக்கலாம். `click` சொத்தை அமைத்தல் அல்லது `addEventListener` ஐப் பயன்படுத்துதல் போன்ற பல சுருக்க வழிகளை நீங்கள் பயன்படுத்தலாம். எங்கள் பயிற்சியில், நாங்கள் `addEventListener` மற்றும் பெயரிடப்படாத செயல்பாடுகளை மையமாகக் கொண்டு கவனம் செலுத்தப் போகிறோம், ஏனெனில் இது வலை டெவலப்பர்கள் பெரும்பாலும் பயன்படுத்தும் மிகவும் பொதுவான தொழில்நுட்பமாகும். மேலும் இது மிகவும் நெகிழ்வானது, ஏனெனில் `addEventListener` அனைத்து நிகழ்வுகளுக்கும் வேலை செய்கிறது, மேலும் நிகழ்வு பெயரை ஒரு அளவுருவாக வழங்கலாம்.

### பொதுவான நிகழ்வுகள்

ஒரு பயன்பாட்டை உருவாக்கும்போது நீங்கள் கேட்க [பல டஜன் நிகழ்வுகள்](https://developer.mozilla.org/docs/Web/Events) கிடைக்கின்றன. ஒரு பக்கத்தில் பயனர் செய்யும் ஏதாவது ஒரு நிகழ்வை எழுப்புகிறது, இது அவர்களுக்கு நீங்கள் விரும்பும் அனுபவத்தை உறுதிசெய்ய அதிக சக்தியை உங்களுக்கு வழங்குகிறது. அதிர்ஷ்டவசமாக, நீங்கள் பொதுவாக சில நிகழ்வுகளை மட்டுமே தேவைப்படும். இங்கே சில பொதுவானவை (நாங்கள் விளையாட்டை உருவாக்கும்போது பயன்படுத்தும் இரண்டு நிகழ்வுகளை உட்பட):

- [click](https://developer.mozilla.org/docs/Web/API/Element/click_event): பயனர் ஏதோ ஒன்றை கிளிக் செய்தார், பொதுவாக ஒரு பட்டன் அல்லது ஹைப்பர்லிங்க்
- [contextmenu](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event): பயனர் வலது கிளிக் செய்தார்
- [select](https://developer.mozilla.org/docs/Web/API/Element/select_event): பயனர் சில உரைகளை தேர்ந்தெடுத்தார்
- [input](https://developer.mozilla.org/docs/Web/API/Element/input_event): பயனர் சில உரைகளை உள்ளீடு செய்தார்

## விளையாட்டை உருவாக்குதல்

நாம் நிகழ்வுகள் ஜாவாஸ்கிரிப்டில் எப்படி வேலை செய்கின்றன என்பதை ஆராய ஒரு விளையாட்டை உருவாக்கப் போகிறோம். எங்கள் விளையாட்டு ஒரு வீரரின் தட்டச்சு திறனை சோதிக்கப் போகிறது, இது அனைத்து டெவலப்பர்களும் வைத்திருக்க வேண்டிய மிகவும் மதிப்புமிக்க திறன்களில் ஒன்றாகும். நாங்கள் அனைவரும் எங்கள் தட்டச்சு திறனை பயிற்சி செய்ய வேண்டும்! விளையாட்டின் பொது ஓட்டம் இதைப் போல இருக்கும்:

- வீரர் தொடங்கும் பட்டனை கிளிக் செய்கிறார் மற்றும் தட்டச்சு செய்ய ஒரு மேற்கோளுடன் வழங்கப்படுகிறார்
- வீரர் மேற்கோளை முடிந்தவரை விரைவாக ஒரு டெக்ஸ்ட்பாக்ஸில் தட்டச்சு செய்கிறார்
  - ஒவ்வொரு வார்த்தையும் முடித்தவுடன், அடுத்தது ஹைலைட் செய்யப்படும்
  - வீரருக்கு ஒரு தட்டச்சு பிழை இருந்தால், டெக்ஸ்ட்பாக்ஸ் சிவப்பாக புதுப்பிக்கப்படும்
  - வீரர் மேற்கோளை முடித்தவுடன், ஒரு வெற்றியின் செய்தி மற்றும் செலவழிக்கப்பட்ட நேரம் காட்டப்படும்

விளையாட்டை உருவாக்குவோம், மேலும் நிகழ்வுகளைப் பற்றி கற்றுக்கொள்வோம்!

### கோப்பு அமைப்பு

நாம் மொத்தம் மூன்று கோப்புகள் தேவைப்படும்: **index.html**, **script.js** மற்றும் **style.css**. நமக்கு வாழ்க்கையை சற்று எளிதாக்குவதற்காக அவற்றை அமைப்பதைத் தொடங்குவோம்.

- ஒரு புதிய கோப்புறையை உருவாக்க, ஒரு கமாண்டு அல்லது டெர்மினல் விண்டோவைத் திறந்து பின்வரும் கட்டளையை வெளியிடவும்:

```bash
# Linux or macOS
mkdir typing-game && cd typing-game

# Windows
md typing-game && cd typing-game
```

- Visual Studio Code ஐ திறக்கவும்

```bash
code .
```

- Visual Studio Code இல் பின்வரும் பெயர்களுடன் மூன்று கோப்புகளை கோப்புறையில் சேர்க்கவும்:
  - index.html
  - script.js
  - style.css

## பயனர் இடைமுகத்தை உருவாக்குதல்

தேவைகளை ஆராய்ந்தால், எங்கள் HTML பக்கத்தில் சில கூறுகள் தேவைப்படும் என்பதை நாங்கள் அறிவோம். இது ஒரு சமையல் குறிப்பேடு போன்றது, எங்களுக்கு சில பொருட்கள் தேவை:

- பயனர் தட்டச்சு செய்ய மேற்கோளை காட்டும் இடம்
- வெற்றியின் செய்தி போன்ற எந்த செய்திகளையும் காட்டும் இடம்
- தட்டச்சு செய்ய ஒரு டெக்ஸ்ட்பாக்ஸ்
- தொடங்கும் பட்டன்

இந்த ஒவ்வொன்றுக்கும் IDs தேவைப்படும், இதனால் நாங்கள் அவற்றுடன் எங்கள் ஜாவாஸ்கிரிப்டில் வேலை செய்ய முடியும். மேலும், நாங்கள் உருவாக்கப் போகும் CSS மற்றும் ஜாவாஸ்கிரிப்ட் கோப்புகளுக்கான குறிப்புகளைச் சேர்க்கவும்.

**index.html** என்ற பெயரில் ஒரு புதிய கோப்பை உருவாக்கவும். பின்வரும் HTML ஐச் சேர்க்கவும்:

```html
<!-- inside index.html -->
<html>
<head>
  <title>Typing game</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Typing game!</h1>
  <p>Practice your typing skills with a quote from Sherlock Holmes. Click **start** to begin!</p>
  <p id="quote"></p> <!-- This will display our quote -->
  <p id="message"></p> <!-- This will display any status messages -->
  <div>
    <input type="text" aria-label="current word" id="typed-value" /> <!-- The textbox for typing -->
    <button type="button" id="start">Start</button> <!-- To start the game -->
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### பயன்பாட்டைத் தொடங்குதல்

வளர்ச்சியை எப்போதும் மெல்லிய முறையில் செய்ய வேண்டும், எவ்வாறு தோன்றுகிறது என்பதைப் பார்க்க. எங்கள் பயன்பாட்டைத் தொடங்குவோம். [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) என்ற Visual Studio Code க்கான ஒரு அற்புதமான நீட்டிப்பு உள்ளது, இது உங்கள் பயன்பாட்டை உள்ளூர் அளவில் ஹோஸ்ட் செய்யும் மற்றும் ஒவ்வொரு முறை நீங்கள் சேமிக்கும்போதும் உலாவியை புதுப்பிக்கும்.

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer&WT.mc_id=academic-77807-sagibbon) ஐ நிறுவவும், இணைப்பைப் பின்தொடர்ந்து **Install** ஐ கிளிக் செய்யவும்
  - உலாவியால் Visual Studio Code ஐ திறக்க உங்களை கேட்டுக்கொள்ளப்படும், பின்னர் Visual Studio Code மூலம் நிறுவலைச் செய்ய உங்களை கேட்டுக்கொள்ளப்படும்
  - கேட்டால் Visual Studio Code ஐ மறுதொடக்கம் செய்யவும்
- நிறுவப்பட்ட பிறகு, Visual Studio Code இல், Ctrl-Shift-P (அல்லது Cmd-Shift-P) ஐ அழுத்தி கமாண்டு பாலட்டைத் திறக்கவும்
- **Live Server: Open with Live Server** என தட்டச்சு செய்யவும்
  - Live Server உங்கள் பயன்பாட்டை ஹோஸ்ட் செய்யத் தொடங்கும்
- உலாவியைத் திறந்து **https://localhost:5500** க்கு செல்லவும்
- நீங்கள் உருவாக்கிய பக்கம் இப்போது தோன்றும்!

சில செயல்பாடுகளைச் சேர்ப்போம்.

## CSS ஐச் சேர்க்கவும்

எங்கள் HTML உருவாக்கப்பட்ட பிறகு, முக்கியமான ஸ்டைலிங்கிற்கான CSS ஐச் சேர்ப்போம். வீரர் தட்டச்சு செய்ய வேண்டிய வார்த்தையை ஹைலைட் செய்யவும், அவர்கள் தவறாக தட்டச்சு செய்தால் டெக்ஸ்ட்பாக்ஸை வண்ணமயமாக்கவும், இரண்டு வகுப்புகளைப் பயன்படுத்துவோம்.

**style.css** என்ற பெயரில் ஒரு புதிய கோப்பை உருவாக்கி பின்வரும் சின்டாக்ஸைச் சேர்க்கவும்.

```css
/* inside style.css */
.highlight {
  background-color: yellow;
}

.error {
  background-color: lightcoral;
  border: red;
}
```

✅ CSS பற்றி பேசும்போது, உங்கள் பக்கத்தை நீங்கள் விரும்பியபடி அமைக்கலாம். பக்கத்தை மேலும் அழகாக மாற்ற சிறிது நேரம் எடுத்துக்கொள்ளுங்கள்:

- வேறொரு எழுத்துருவைத் தேர்ந்தெடுக்கவும்
- தலைப்புகளை வண்ணமயமாக்கவும்
- உருப்படிகளை மீளமைக்கவும்

## ஜாவாஸ்கிரிப்ட்

எங்கள் UI உருவாக்கப்பட்ட பிறகு, தர்க்கத்தை வழங்கும் ஜாவாஸ்கிரிப்ட் மீது கவனம் செலுத்துவோம். இதை சில படிகளாக பிரிப்போம்:

- [நிலையானவற்றை உருவாக்குதல்](../../../../4-typing-game/typing-game)
- [விளையாட்டைத் தொடங்க நிகழ்வு கேட்பாளர்](../../../../4-typing-game/typing-game)
- [தட்டச்சு செய்ய நிகழ்வு கேட்பாளர்](../../../../4-typing-game/typing-game)

ஆனால் முதலில், **script.js** என்ற பெயரில் ஒரு புதிய கோப்பை உருவாக்கவும்.

### நிலையானவற்றைச் சேர்க்கவும்

நாங்கள் நிரலாக்கத்தை எளிதாக்க சில உருப்படிகள் தேவைப்படும். மீண்டும், இது ஒரு சமையல் குறிப்பேடு போன்றது, எங்களுக்கு என்ன தேவை என்பதை இங்கே பார்ப்போம்:

- அனைத்து மேற்கோள்களின் பட்டியலுடன் ஒரு வரிசை
- தற்போதைய மேற்கோளுக்கான அனைத்து வார்த்தைகளையும் சேமிக்க ஒரு காலியான வரிசை
- வீரர் தற்போது தட்டச்சு செய்யும் வார்த்தையின் குறியீட்டை சேமிக்க இடம்
- வீரர் தொடங்க கிளிக் செய்த நேரம்

நாங்கள் UI கூறுகளுக்கான குறிப்புகளையும் விரும்புகிறோம்:

- டெக்ஸ்ட்பாக்ஸ் (**typed-value**)
- மேற்கோள் காட்சி (**quote**)
- செய்தி (**message**)

```javascript
// inside script.js
// all of our quotes
const quotes = [
    'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
    'There is nothing more deceptive than an obvious fact.',
    'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
    'I never make exceptions. An exception disproves the rule.',
    'What one man can invent another can discover.',
    'Nothing clears up a case so much as stating it to another person.',
    'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
// store the list of words and the index of the word the player is currently typing
let words = [];
let wordIndex = 0;
// the starting time
let startTime = Date.now();
// page elements
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
```

✅ உங்கள் விளையாட்டுக்கு மேலும் மேற்கோள்களைச் சேர்க்கவும்

> **NOTE:** `document.getElementById` ஐப் பயன்படுத்தி எப்போது வேண்டுமானாலும் கூறுகளை நாங்கள் பெற முடியும். நாங்கள் இந்த கூறுகளை அடிக்கடி குறிப்பிட போகிறோம் என்பதால், சரியான எழுத்துக்களை தவிர்க்க, நாங்கள் நிலையானவற்றைப் பயன்படுத்துவோம். [Vue.js](https://vuejs.org/) அல்லது [React](https://reactjs.org/) போன்ற கட்டமைப்புகள் உங்கள் குறியீட்டை மையமாக்க மேலாண்மை செய்ய உதவும்.

`const`, `let` மற்றும் `var` ஐப் பயன்படுத்துவது பற்றி ஒரு வீடியோவைப் பாருங்கள்

[![மாறிகளின் வகைகள்](https://img.youtube.com/vi/JNIXfGiDWM8/0.jpg)](https://youtube.com/watch?v=JNIXfGiDWM8 "மாறிகளின் வகைகள்")

> 🎥 மாறிகள் பற்றிய வீடியோவைப் பார்க்க மேலே உள்ள படத்தை கிளிக் செய்யவும்.

### தொடங்கும் தர்க்கத்தைச் சேர்க்கவும்

விளையாட்டைத் தொடங்க, வீரர் தொடங்க கிளிக் செய்வார். நிச்சயமாக, அவர்கள் எப்போது தொடங்க கிளிக் செய்வார்கள் என்பதை நாங்கள் அறிய முடியாது. இது [நிகழ்வு கேட்பாளர்](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener) ஒரு பங்கு வகிக்கும் இடம். ஒரு நிகழ்வு கேட்பாளர் ஏதாவது நிகழ்வதற்காகக் கேட்க (ஒரு நிகழ்வு) மற்றும் பதிலளிக்க குறியீட்டை செயல்படுத்த அனுமதிக்கும். எங்கள் வழக்கில், பயனர் தொடங்க கிளிக் செய்யும் போது குறியீட்டை செயல்படுத்த விரும்புகிறோம்.

பயனர் **start** ஐ கிளிக் செய்யும் போது, ஒரு மேற்கோளைத் தேர்ந்தெடுக்க, பயனர் இடைமுகத்தை அமைக்க மற்றும் தற்போதைய வார்த்தை மற்றும் நேரத்தை கண்காணிக்க வேண்டும். கீழே நீங்கள் சேர்க்க வேண்டிய ஜாவாஸ்கிரிப்ட் உள்ளது; குறியீட்டு தொகுதியின் பிறகு அதை விவரிக்கிறோம்.

```javascript
// at the end of script.js
document.getElementById('start').addEventListener('click', () => {
  // get a quote
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  // Put the quote into an array of words
  words = quote.split(' ');
  // reset the word index for tracking
  wordIndex = 0;

  // UI updates
  // Create an array of span elements so we can set a class
  const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  // Convert into string and set as innerHTML on quote display
  quoteElement.innerHTML = spanWords.join('');
  // Highlight the first word
  quoteElement.childNodes[0].className = 'highlight';
  // Clear any prior messages
  messageElement.innerText = '';

  // Setup the textbox
  // Clear the textbox
  typedValueElement.value = '';
  // set focus
  typedValueElement.focus();
  // set the event handler

  // Start the timer
  startTime = new Date().getTime();
});
```

குறியீட்டை நுணுக்கமாகப் பார்ப்போம்!

- வார்த்தை கண்காணிப்பை அமைக்கவும்
  - [Math.floor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) மற்றும் [Math.random](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Math/random) ஐப் பயன்படுத்தி `quotes` வரிசையிலிருந்து ஒரு மேற்கோளை சீரற்ற முறையில் தேர்ந்தெடுக்க முடியும்
  - `quote` ஐ `words` என்ற ஒரு வரிசையாக மாற்றுகிறோம், இதனால் வீரர் தற்போது தட்டச்சு செய்யும் வார்த்தையை நாங்கள் கண்காணிக்க முடியும்
  - வீரர் முதல் வார்த்தையில் தொடங்குவார் என்பதால் `wordIndex` ஐ 0 ஆக அமைக்கிறோம்
- UI ஐ அமைக்கவும்
  - ஒவ்வொரு வார்த்தையையும் ஒரு `span` கூறுக்குள் கொண்டிருக்கும் `spanWords` என்ற ஒரு வரிசையை உருவாக்கவும்
    - இது காட்சியில் வார்த்தையை ஹைலைட் செய்ய அனுமதிக்கும்
  - `quoteElement` இல் `innerHTML` ஐ புதுப்பிக்க ஒரு சரம் உருவாக்க `join` ஐப் பயன்படுத்தவும்
    - இது மேற்கோளை வீரருக்கு காட்டும்
  - முதல் `span` கூறின் `className` ஐ `highlight` ஆக அமைத்து அதை மஞ்சளாக ஹைலைட் செய்யவும்
  - `messageElement` ஐ `innerText` ஐ `''` ஆக அமைத்து சுத்தமாக்கவும்
- டெக்ஸ்ட்பாக்ஸை அமைக்கவும்
  - தற்போதைய `value` ஐ `typedValueElement` இல் இருந்து அழிக்கவும்
  - `typedValueElement` இல் `focus` ஐ அமைக்கவும்
- `getTime` ஐ அழைப்பதன் மூலம் டைமரைத் தொடங்கவும்

### தட்டச்சு தர்க்கத்தைச் சேர்க்கவும்

வீரர் தட்டச்சு செய்யும்போது, ஒரு `input` நிகழ்வு எழும். இந்த நிகழ்வு கேட்பாளர் வீரர் சரியாக தட்டச்சு செய்கிறாரா என்பதை சரிபார்க்கும், மேலும் விளையாட்டின் தற்போதைய நிலையை கையாளும். **script.js** க்கு திரும்பி, பின்வரும் குறியீட்டை இறுதியில் சேர்க்கவும். அதைப் பிறகு அதை நாங்கள் பிரிக்கிறோம்.

```javascript
// at the end of script.js
typedValueElement.addEventListener('input', () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    messageElement.innerText = message;
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    typedValueElement.value = '';
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    // highlight the new word
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    typedValueElement.className = '';
  } else {
    // error state
    typedValueElement.className = 'error';
  }
});
```

குறியீட்டை நுணுக்கமாகப் பார்ப்போம்! தற்போதைய வார்த்தையையும், இதுவரை வீரர் தட்டச்சு செய்த மதிப்பையும் நாங்கள் பிடிக்கிறோம். பின்னர், நாங்கள் ஒரு நீர்வீழ்ச்சி தர்க்கத்தைப் பயன்படுத்துகிறோம், இதில் மேற்கோள் முடிந்ததா, வார்த்தை முடிந்ததா, வார்த்தை சரியாக உள்ளதா அல்லது (இறுதியாக), பிழை உள்ளதா என்பதை சரிபார்க்கிறோம்.

- மேற்கோள் முடிந்தது, `typedValue` `currentWord` க்கு சமமாகவும், `wordIndex` `words` இன் `length` விட ஒன்று குறைவாகவும் இருக்கும் போது
  - தற்போதைய நேரத்திலிருந்து `startTime` ஐ கழிப்பதன் மூலம் `elapsedTime` ஐ கணக்கிடுங்கள்
  - மில்லி விநாடிகளில் இருந்து விநாடிகளுக்கு மாற்ற `elapsedTime` ஐ 1,000 மூலம் வகுக்கவும்
  - வெற்றியின் செய்தியை காட்டு
- வார்த்தை முடிந்தது, `typedValue` ஒரு இடைவெளியுடன் (ஒரு வார்த்தையின் முடிவு) முடிவடையும் மற்றும் `typedValue` `currentWord` க்கு சமமாக இருக்கும் போது
  - அடுத்த வார்த்தையை தட்டச்சு செய்ய அனுமதிக்க `typedElement` இல் `value` ஐ `''` ஆக அமைக்கவும்
  - அடுத்த வார்த்தைக்கு நகர `wordIndex` ஐ அதிகரிக்கவும்
  - `quoteElement` இன் அனைத்து `childNodes` வழியாகச் செல்லவும், `className` ஐ `''` ஆக அமைக்கவும், இயல்புநிலை காட்சிக்கு திரும்பவும்
  - அடுத்த தட்டச்சு செய்ய வேண்டிய வார்த்தையாக தற்போதைய வார்த்தையின் `className` ஐ `highlight` ஆக அமைக்கவும்
- வார்த்தை தற்போது சரியாக தட்டச்சு
- பிளேயர் மேற்கோளை முடித்தவுடன் டெக்ஸ்ட்பாக்ஸை முடக்கு
- வெற்றிச் செய்தியுடன் ஒரு மாடல் டயலாக் பாக்ஸை காட்டவும்
- [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) பயன்படுத்தி உயர் மதிப்பெண்களை சேமிக்கவும்

## பாடத்திற்குப் பிந்தைய வினாடி வினா

[பாடத்திற்குப் பிந்தைய வினாடி வினா](https://ff-quizzes.netlify.app/web/quiz/22)

## மதிப்பீடு & சுயபடிப்பு

வலை உலாவி மூலம் டெவலப்பருக்கு கிடைக்கும் [எல்லா நிகழ்வுகள்](https://developer.mozilla.org/docs/Web/Events) பற்றிய தகவல்களை படிக்கவும், மற்றும் ஒவ்வொன்றையும் நீங்கள் எந்த சூழல்களில் பயன்படுத்துவீர்கள் என்பதை பரிசீலிக்கவும்.

## பணிக்கட்டளை

[புதிய கீபோர்டு விளையாட்டை உருவாக்கவும்](assignment.md)

---

**குறிப்பு**:  
இந்த ஆவணம் [Co-op Translator](https://github.com/Azure/co-op-translator) என்ற AI மொழிபெயர்ப்பு சேவையை பயன்படுத்தி மொழிபெயர்க்கப்பட்டுள்ளது. நாங்கள் துல்லியத்திற்காக முயற்சிக்கின்றோம், ஆனால் தானியங்கி மொழிபெயர்ப்புகளில் பிழைகள் அல்லது தவறான தகவல்கள் இருக்கக்கூடும் என்பதை கவனத்தில் கொள்ளவும். அதன் தாய்மொழியில் உள்ள மூல ஆவணம் அதிகாரப்பூர்வ ஆதாரமாக கருதப்பட வேண்டும். முக்கியமான தகவல்களுக்கு, தொழில்முறை மனித மொழிபெயர்ப்பு பரிந்துரைக்கப்படுகிறது. இந்த மொழிபெயர்ப்பைப் பயன்படுத்துவதால் ஏற்படும் எந்த தவறான புரிதல்கள் அல்லது தவறான விளக்கங்களுக்கு நாங்கள் பொறுப்பல்ல.