<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2c1164912414820c8efd699b43f64954",
  "translation_date": "2025-10-22T15:34:22+00:00",
  "source_file": "7-bank-project/3-data/README.md",
  "language_code": "tl"
}
-->
# Paggawa ng Banking App Bahagi 3: Mga Paraan ng Pagkuha at Paggamit ng Data

Isipin ang computer ng Enterprise sa Star Trek - kapag tinanong ni Captain Picard ang status ng barko, agad na lumalabas ang impormasyon nang hindi nasisira ang buong interface o muling binubuo ang sarili nito. Ang tuluy-tuloy na daloy ng impormasyon na iyon ang eksaktong ginagawa natin dito gamit ang dynamic na pagkuha ng data.

Sa ngayon, ang iyong banking app ay parang isang naka-print na pahayagan - nagbibigay ng impormasyon ngunit static. Gagawin natin itong parang mission control sa NASA, kung saan tuluy-tuloy ang daloy ng data at nag-a-update nang real-time nang hindi naaabala ang workflow ng user.

Matututo kang makipag-ugnayan sa mga server nang asynchronous, mag-handle ng data na dumarating sa iba't ibang oras, at gawing makabuluhan ang raw na impormasyon para sa iyong mga user. Ito ang pagkakaiba ng demo software sa production-ready software.

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/45)

### Mga Kinakailangan

Bago sumabak sa pagkuha ng data, tiyaking handa ka sa mga sumusunod na bahagi:

- **Nakaraang Aralin**: Kumpletuhin ang [Login at Registration Form](../2-forms/README.md) - magpapatuloy tayo sa pundasyong ito
- **Local Server**: I-install ang [Node.js](https://nodejs.org) at [patakbuhin ang server API](../api/README.md) para magbigay ng account data
- **API Connection**: Subukan ang koneksyon ng iyong server gamit ang command na ito:

```bash
curl http://localhost:5000/api
# Expected response: "Bank API v1.0.0"
```

Ang mabilis na test na ito ay nagsisiguro na ang lahat ng bahagi ay maayos na nakikipag-ugnayan:
- Tinitiyak na ang Node.js ay maayos na tumatakbo sa iyong sistema
- Kinukumpirma na ang iyong API server ay aktibo at tumutugon
- Pinapatunayan na ang iyong app ay maabot ang server (parang pag-check ng radio contact bago ang isang misyon)

---

## Pag-unawa sa Pagkuha ng Data sa Modernong Web Apps

Ang paraan ng pag-handle ng data ng mga web application ay lubos na nagbago sa nakalipas na dalawang dekada. Ang pag-unawa sa ebolusyong ito ay makakatulong sa iyo na ma-appreciate kung bakit ang mga modernong teknolohiya tulad ng AJAX at Fetch API ay napakalakas at kung bakit sila naging mahalagang kasangkapan para sa mga web developer.

Tuklasin natin kung paano gumagana ang mga tradisyunal na website kumpara sa mga dynamic at responsive na application na ginagawa natin ngayon.

### Tradisyunal na Multi-Page Applications (MPA)

Sa mga unang araw ng web, bawat click ay parang pagpapalit ng channel sa lumang telebisyon - magbablanko ang screen, pagkatapos ay dahan-dahang magpapakita ng bagong content. Ganito ang realidad ng mga unang web application, kung saan bawat interaksyon ay nangangahulugan ng muling pagbubuo ng buong pahina mula sa simula.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    
    User->>Browser: Clicks link or submits form
    Browser->>Server: Requests new HTML page
    Note over Browser: Page goes blank
    Server->>Browser: Returns complete HTML page
    Browser->>User: Displays new page (flash/reload)
```

![Workflow ng pag-update sa isang multi-page application](../../../../translated_images/mpa.7f7375a1a2d4aa779d3f928a2aaaf9ad76bcdeb05cfce2dc27ab126024050f51.tl.png)

**Bakit pakiramdam na clunky ang approach na ito:**
- Bawat click ay nangangahulugan ng muling pagbubuo ng buong pahina mula sa simula
- Ang mga user ay naaabala sa gitna ng kanilang iniisip dahil sa nakakainis na page flashes
- Ang iyong internet connection ay nagtatrabaho nang sobra sa pag-download ng parehong header at footer nang paulit-ulit
- Ang mga app ay parang pag-click sa filing cabinet kaysa sa paggamit ng software

### Modernong Single-Page Applications (SPA)

Binago ng AJAX (Asynchronous JavaScript and XML) ang paradigm na ito nang buo. Tulad ng modular na disenyo ng International Space Station, kung saan maaaring palitan ng mga astronaut ang mga indibidwal na bahagi nang hindi muling binubuo ang buong istruktura, pinapayagan tayo ng AJAX na i-update ang mga partikular na bahagi ng webpage nang hindi nire-reload ang lahat. Kahit na binabanggit ng pangalan ang XML, kadalasan ay JSON ang ginagamit natin ngayon, ngunit nananatili ang pangunahing prinsipyo: i-update lamang ang kailangang baguhin.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant JavaScript
    participant Server
    
    User->>Browser: Interacts with page
    Browser->>JavaScript: Triggers event handler
    JavaScript->>Server: Fetches only needed data
    Server->>JavaScript: Returns JSON data
    JavaScript->>Browser: Updates specific page elements
    Browser->>User: Shows updated content (no reload)
```

![Workflow ng pag-update sa isang single-page application](../../../../translated_images/spa.268ec73b41f992c2a21ef9294235c6ae597b3c37e2c03f0494c2d8857325cc57.tl.png)

**Bakit mas maganda ang pakiramdam ng SPAs:**
- Ang mga bahagi lamang na talagang nagbago ang na-update (matalino, di ba?)
- Wala nang nakakagulat na interruptions - nananatili ang mga user sa kanilang flow
- Mas kaunting data ang dumadaan sa wire kaya mas mabilis ang pag-load
- Ang lahat ay pakiramdam na snappy at responsive, tulad ng mga app sa iyong telepono

### Ang Ebolusyon sa Modernong Fetch API

Nagbibigay ang mga modernong browser ng [`Fetch` API](https://developer.mozilla.org/docs/Web/API/Fetch_API), na pumapalit sa mas lumang [`XMLHttpRequest`](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest). Tulad ng pagkakaiba ng paggamit ng telegrapo at email, ang Fetch API ay gumagamit ng promises para sa mas malinis na asynchronous na code at natural na hinahandle ang JSON.

| Tampok | XMLHttpRequest | Fetch API |
|-------|----------------|----------|
| **Syntax** | Kumplikadong callback-based | Malinis na promise-based |
| **JSON Handling** | Kinakailangan ang manual parsing | Built-in `.json()` method |
| **Error Handling** | Limitadong impormasyon sa error | Komprehensibong detalye ng error |
| **Modern Support** | Legacy compatibility | ES6+ promises at async/await |

> 💡 **Browser Compatibility**: Magandang balita - gumagana ang Fetch API sa lahat ng modernong browser! Kung curious ka sa mga partikular na bersyon, [caniuse.com](https://caniuse.com/fetch) ang may kumpletong compatibility story.
> 
**Ang bottom line:**
- Gumagana nang mahusay sa Chrome, Firefox, Safari, at Edge (karamihan sa mga lugar kung nasaan ang iyong mga user)
- Ang Internet Explorer lamang ang nangangailangan ng karagdagang tulong (at sa totoo lang, panahon na para bitawan ang IE)
- Perpektong nakahanda para sa eleganteng async/await patterns na gagamitin natin mamaya

### Pagpapatupad ng User Login at Pagkuha ng Data

Ngayon, ipapatupad natin ang login system na magbabago sa iyong banking app mula sa static na display patungo sa functional na application. Tulad ng mga authentication protocols na ginagamit sa mga secure na pasilidad ng militar, ivavalidate natin ang mga kredensyal ng user at pagkatapos ay magbibigay ng access sa kanilang partikular na data.

Gagawin natin ito nang paunti-unti, simula sa basic authentication at pagkatapos ay idagdag ang mga kakayahan sa pagkuha ng data.

#### Hakbang 1: Gumawa ng Pundasyon ng Login Function

Buksan ang iyong `app.js` file at magdagdag ng bagong `login` function. Ito ang maghahandle ng proseso ng authentication ng user:

```javascript
async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value;
}
```

**I-breakdown natin ito:**
- Ang `async` keyword? Sinasabi nito sa JavaScript "hey, maaaring kailanganin ng function na ito na maghintay para sa mga bagay"
- Kinukuha natin ang form mula sa pahina (walang fancy, hinahanap lang ito gamit ang ID nito)
- Pagkatapos ay kinukuha natin ang anumang tinype ng user bilang kanilang username
- Narito ang isang neat na trick: maaari mong ma-access ang anumang form input gamit ang `name` attribute nito - walang kailangan para sa dagdag na getElementById calls!

> 💡 **Form Access Pattern**: Ang bawat form control ay maaaring ma-access gamit ang name (itinakda sa HTML gamit ang `name` attribute) bilang property ng form element. Nagbibigay ito ng malinis at nababasang paraan para makuha ang data ng form.

#### Hakbang 2: Gumawa ng Account Data Fetching Function

Susunod, gagawa tayo ng dedicated function para kunin ang account data mula sa server. Sinusunod nito ang parehong pattern ng iyong registration function ngunit nakatuon sa pagkuha ng data:

```javascript
async function getAccount(user) {
  try {
    const response = await fetch('//localhost:5000/api/accounts/' + encodeURIComponent(user));
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

**Narito ang nagagawa ng code na ito:**
- **Ginagamit** ang modernong `fetch` API para mag-request ng data nang asynchronous
- **Gumagawa** ng GET request URL gamit ang username parameter
- **Ina-apply** ang `encodeURIComponent()` para ligtas na ma-handle ang special characters sa URLs
- **Kinoconvert** ang response sa JSON format para sa madaling data manipulation
- **Hinahandle** ang errors nang maayos sa pamamagitan ng pagbabalik ng error object sa halip na mag-crash

> ⚠️ **Security Note**: Ang `encodeURIComponent()` function ay nagha-handle ng special characters sa URLs. Tulad ng encoding systems na ginagamit sa naval communications, tinitiyak nito na ang iyong mensahe ay darating nang eksakto kung paano ito nilayon, pinipigilan ang mga character tulad ng "#" o "&" na ma-misinterpret.
> 
**Bakit ito mahalaga:**
- Pinipigilan ang special characters na masira ang URLs
- Pinoprotektahan laban sa URL manipulation attacks
- Tinitiyak na ang iyong server ay makakatanggap ng intended data
- Sumusunod sa secure coding practices

#### Pag-unawa sa HTTP GET Requests

Narito ang isang bagay na maaaring magulat ka: kapag ginamit mo ang `fetch` nang walang anumang dagdag na options, awtomatikong gumagawa ito ng [`GET`](https://developer.mozilla.org/docs/Web/HTTP/Methods/GET) request. Perpekto ito para sa ginagawa natin - humihiling sa server "hey, maaari ko bang makita ang account data ng user na ito?"

Isipin ang GET requests na parang magalang na paghingi ng libro sa library - humihiling ka na makita ang isang bagay na umiiral na. Ang POST requests (na ginamit natin para sa registration) ay mas parang pagsusumite ng bagong libro para idagdag sa koleksyon.

| GET Request | POST Request |
|-------------|-------------|
| **Layunin** | Kunin ang umiiral na data | Magpadala ng bagong data sa server |
| **Parameters** | Sa URL path/query string | Sa request body |
| **Caching** | Maaaring i-cache ng mga browser | Hindi karaniwang naka-cache |
| **Seguridad** | Nakikita sa URL/logs | Nakatago sa request body |

#### Hakbang 3: Pagsasama-sama ng Lahat

Ngayon para sa nakaka-satisfy na bahagi - ikonekta natin ang iyong account fetching function sa login process. Dito nagkakaroon ng koneksyon ang lahat:

```javascript
async function login() {
  const loginForm = document.getElementById('loginForm');
  const user = loginForm.user.value;
  const data = await getAccount(user);

  if (data.error) {
    return console.log('loginError', data.error);
  }

  account = data;
  navigate('/dashboard');
}
```

Ang function na ito ay sumusunod sa malinaw na sequence:
- Kunin ang username mula sa form input
- Humiling ng account data ng user mula sa server
- I-handle ang anumang errors na mangyayari sa proseso
- I-store ang account data at mag-navigate sa dashboard kapag tagumpay

> 🎯 **Async/Await Pattern**: Dahil ang `getAccount` ay isang asynchronous function, ginagamit natin ang `await` keyword para i-pause ang execution hanggang sa tumugon ang server. Pinipigilan nito ang code na magpatuloy nang may undefined na data.

#### Hakbang 4: Gumawa ng Tahanan para sa Iyong Data

Kailangan ng iyong app ng lugar para maalala ang impormasyon ng account kapag na-load na ito. Isipin ito na parang short-term memory ng iyong app - isang lugar para panatilihing handy ang data ng kasalukuyang user. Magdagdag ng linyang ito sa itaas ng iyong `app.js` file:

```javascript
// This holds the current user's account data
let account = null;
```

**Bakit natin ito kailangan:**
- Pinapanatili ang account data na accessible mula sa kahit saan sa iyong app
- Ang pagsisimula sa `null` ay nangangahulugang "wala pang naka-login"
- Ina-update kapag may matagumpay na nag-login o nag-register
- Kumilos bilang isang single source of truth - walang kalituhan kung sino ang naka-login

#### Hakbang 5: I-wire Up ang Iyong Form

Ngayon, ikonekta natin ang iyong bagong login function sa iyong HTML form. I-update ang iyong form tag nang ganito:

```html
<form id="loginForm" action="javascript:login()">
  <!-- Your existing form inputs -->
</form>
```

**Ano ang ginagawa ng maliit na pagbabago na ito:**
- Pinipigilan ang form na gawin ang default nitong "i-reload ang buong pahina" na behavior
- Tinatawag ang iyong custom na JavaScript function sa halip
- Pinapanatili ang lahat na smooth at single-page-app-like
- Binibigyan ka ng kumpletong kontrol sa kung ano ang mangyayari kapag pinindot ng mga user ang "Login"

#### Hakbang 6: Pagandahin ang Iyong Registration Function

Para sa consistency, i-update ang iyong `register` function para rin mag-store ng account data at mag-navigate sa dashboard:

```javascript
// Add these lines at the end of your register function
account = result;
navigate('/dashboard');
```

**Ang enhancement na ito ay nagbibigay:**
- **Seamless** na transition mula sa registration patungo sa dashboard
- **Consistent** na user experience sa pagitan ng login at registration flows
- **Immediate** na access sa account data pagkatapos ng matagumpay na registration

#### Pagsubok sa Iyong Implementasyon

```mermaid
flowchart TD
    A[User enters credentials] --> B[Login function called]
    B --> C[Fetch account data from server]
    C --> D{Data received successfully?}
    D -->|Yes| E[Store account data globally]
    D -->|No| F[Display error message]
    E --> G[Navigate to dashboard]
    F --> H[User stays on login page]
```

**Panahon na para subukan ito:**
1. Gumawa ng bagong account para tiyaking gumagana ang lahat
2. Subukang mag-login gamit ang parehong credentials
3. Silipin ang console ng iyong browser (F12) kung may tila hindi tama
4. Tiyaking napupunta ka sa dashboard pagkatapos ng matagumpay na login

Kung may hindi gumagana, huwag mag-panic! Karamihan sa mga isyu ay simpleng ayusin tulad ng typos o pagkalimot na i-start ang API server.

#### Isang Mabilis na Salita Tungkol sa Cross-Origin Magic

Maaaring iniisip mo: "Paano nakikipag-usap ang aking web app sa API server na tumatakbo sa iba't ibang ports?" Magandang tanong! Ito ay tumutukoy sa isang bagay na bawat web developer ay natutuklasan kalaunan.

> 🔒 **Cross-Origin Security**: Ang mga browser ay nagpapatupad ng "same-origin policy" upang maiwasan ang hindi awtorisadong komunikasyon sa pagitan ng iba't ibang domain. Tulad ng checkpoint system sa Pentagon, tinitiyak nila na ang komunikasyon ay awtorisado bago payagan ang paglipat ng data.
> 
**Sa ating setup:**
- Ang iyong web app ay tumatakbo sa `localhost:3000` (development server)
- Ang iyong API server ay tumatakbo sa `localhost:5000` (backend server)
- Ang API server ay naglalaman ng [CORS headers](https://developer.mozilla.org/docs/Web/HTTP/CORS) na tahasang nagbibigay awtorisasyon sa komunikasyon mula sa iyong web app

Ang configuration na ito ay sumasalamin sa real-world development kung saan ang frontend at backend applications ay karaniwang tumatakbo sa magkahiwalay na server.

> 📚 **Matuto Pa**: Tuklasin ang higit pa tungkol sa APIs at pagkuha ng data gamit ang komprehensibong [Microsoft Learn module on APIs](https://docs.microsoft.com/learn/modules/use-apis-discover-museum-art/?WT.mc_id=academic-77807-sagibbon).

## Pagdadala ng Iyong Data sa Buhay sa HTML

Ngayon, gagawin nating visible sa mga user ang nakuha na data sa pamamagitan ng DOM manipulation. Tulad ng proseso ng pag-develop ng mga litrato sa darkroom, kinukuha natin ang invisible na data at nire-render ito sa isang bagay na makikita at ma-interact ng mga user.

Ang DOM manipulation ay ang teknik na nagbabago sa static na mga web page patungo sa mga dynamic na application na nag-a-update ng kanilang content base sa interaksyon ng user at tugon ng server.

### Pagpili ng Tamang Kasangkapan para sa Trabaho

Kapag nag-a-update ng iyong HTML gamit ang JavaScript, mayroon kang ilang mga opsyon. Isipin ang mga ito na parang iba't ibang tools sa toolbox - bawat isa ay perpekto para sa partikular na trabaho:

| Paraan | Para saan ito magaling | Kailan ito gagamitin | Antas ng Kaligtasan |
|--------|------------------------|---------------------|---------------------|
| `textContent` | Pagpapakita ng user data nang ligtas | Anumang oras na nagpapakita ng text | ✅ Rock solid |
| `createElement()` + `append()` | Pagbuo ng complex na layout | Paglikha ng bagong sections/lists | ✅ Bulletproof |
| `innerHTML` | Pag-set ng HTML content | ⚠️ Subukang iwasan ito | ❌ Risky business |

#### Ang Ligtas na Paraan para Magpakita ng Text: textContent

Ang [`textContent`](https://developer.mozilla.org/docs/Web/API/Node/textContent) property ay ang iyong pinakamahusay na kaibigan kapag nagpapakita ng user data. Parang may bouncer para sa iyong webpage - walang mapanganib na makakapasok:

```javascript
// The safe, reliable way to update text
const balanceElement = document.getElementById('balance');
balanceElement.textContent = account.balance;
```

**Mga Benepisyo ng textContent:**
- Tinuturing ang lahat bilang plain text (pinipigilan ang script execution)
- Awtomatikong nililinis ang existing content
- Epektibo para sa simpleng text updates
- Nagbibigay ng built-in na seguridad laban sa malicious content

#### Paglikha ng Dynamic na HTML Elements
Para sa mas kumplikadong nilalaman, pagsamahin ang [`document.createElement()`](https://developer.mozilla.org/docs/Web/API/Document/createElement) sa [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) na pamamaraan:

```javascript
// Safe way to create new elements
const transactionItem = document.createElement('div');
transactionItem.className = 'transaction-item';
transactionItem.textContent = `${transaction.date}: ${transaction.description}`;
container.append(transactionItem);
```

**Pag-unawa sa pamamaraang ito:**
- **Lumilikha** ng mga bagong elemento ng DOM nang programmatically
- **Nagbibigay** ng ganap na kontrol sa mga katangian at nilalaman ng elemento
- **Nagpapahintulot** ng masalimuot, nested na istruktura ng elemento
- **Pinapanatili** ang seguridad sa pamamagitan ng paghihiwalay ng istruktura mula sa nilalaman

> ⚠️ **Pagsasaalang-alang sa Seguridad**: Bagama't ang [`innerHTML`](https://developer.mozilla.org/docs/Web/API/Element/innerHTML) ay madalas na lumalabas sa mga tutorial, maaari itong magpatupad ng mga naka-embed na script. Tulad ng mga protocol sa seguridad sa CERN na pumipigil sa hindi awtorisadong pagpapatupad ng code, ang paggamit ng `textContent` at `createElement` ay nagbibigay ng mas ligtas na alternatibo.
> 
**Mga panganib ng innerHTML:**
- Pinapatupad ang anumang `<script>` na tag sa data ng user
- Mahina laban sa mga pag-atake ng code injection
- Lumilikha ng mga potensyal na kahinaan sa seguridad
- Ang mas ligtas na alternatibo na ginagamit natin ay nagbibigay ng katumbas na functionality

### Paggawa ng Errors na User-Friendly

Sa kasalukuyan, ang mga error sa pag-login ay lumalabas lamang sa console ng browser, na hindi nakikita ng mga user. Tulad ng pagkakaiba sa pagitan ng internal diagnostics ng piloto at ng sistema ng impormasyon ng pasahero, kailangan nating iparating ang mahalagang impormasyon sa tamang channel.

Ang pagpapatupad ng mga nakikitang mensahe ng error ay nagbibigay sa mga user ng agarang feedback tungkol sa kung ano ang nagkamali at kung paano magpatuloy.

#### Hakbang 1: Magdagdag ng Lugar para sa Mga Mensahe ng Error

Una, bigyan natin ng tahanan ang mga mensahe ng error sa iyong HTML. Idagdag ito bago ang iyong login button upang natural itong makita ng mga user:

```html
<!-- This is where error messages will appear -->
<div id="loginError" role="alert"></div>
<button>Login</button>
```

**Ano ang nangyayari dito:**
- Lumilikha tayo ng isang walang laman na lalagyan na nananatiling hindi nakikita hanggang sa kailanganin
- Nakaposisyon ito kung saan natural na tumitingin ang mga user pagkatapos mag-click ng "Login"
- Ang `role="alert"` ay isang magandang karagdagan para sa mga screen reader - sinasabi nito sa assistive technology "hey, mahalaga ito!"
- Ang natatanging `id` ay nagbibigay sa ating JavaScript ng madaling target

#### Hakbang 2: Gumawa ng Handy Helper Function

Gumawa tayo ng maliit na utility function na maaaring mag-update ng text ng anumang elemento. Isa ito sa mga "isulat nang isang beses, gamitin kahit saan" na function na makakatipid sa iyo ng oras:

```javascript
function updateElement(id, text) {
  const element = document.getElementById(id);
  element.textContent = text;
}
```

**Mga benepisyo ng function:**
- Simpleng interface na nangangailangan lamang ng ID ng elemento at text content
- Ligtas na hinahanap at ina-update ang mga elemento ng DOM
- Reusable na pattern na binabawasan ang pag-uulit ng code
- Pinapanatili ang pare-parehong pag-uugali ng pag-update sa buong application

#### Hakbang 3: Ipakita ang Mga Error Kung Saan Makikita ng Mga User

Ngayon palitan natin ang nakatagong console message ng isang bagay na talagang makikita ng mga user. I-update ang iyong login function:

```javascript
// Instead of just logging to console, show the user what's wrong
if (data.error) {
  return updateElement('loginError', data.error);
}
```

**Ang maliit na pagbabagong ito ay may malaking epekto:**
- Ang mga mensahe ng error ay lumalabas kung saan tumitingin ang mga user
- Wala nang misteryosong tahimik na pagkabigo
- Ang mga user ay nakakakuha ng agarang, actionable na feedback
- Ang iyong app ay nagsisimulang magmukhang propesyonal at maingat

Ngayon kapag sinubukan mo gamit ang isang invalid na account, makikita mo ang isang kapaki-pakinabang na mensahe ng error mismo sa pahina!

![Screenshot na nagpapakita ng mensahe ng error na ipinapakita sa panahon ng pag-login](../../../../translated_images/login-error.416fe019b36a63276764c2349df5d99e04ebda54fefe60c715ee87a28d5d4ad0.tl.png)

#### Hakbang 4: Maging Inclusive sa Accessibility

Narito ang isang cool na bagay tungkol sa `role="alert"` na idinagdag natin kanina - hindi lang ito dekorasyon! Ang maliit na attribute na ito ay lumilikha ng tinatawag na [Live Region](https://developer.mozilla.org/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) na agad na ina-anunsyo ang mga pagbabago sa mga screen reader:

```html
<div id="loginError" role="alert"></div>
```

**Bakit ito mahalaga:**
- Ang mga user ng screen reader ay naririnig ang mensahe ng error sa sandaling lumitaw ito
- Ang lahat ay nakakakuha ng parehong mahalagang impormasyon, anuman ang paraan ng kanilang pag-navigate
- Ito ay isang simpleng paraan upang gawing mas accessible ang iyong app
- Ipinapakita nito na pinahahalagahan mo ang paglikha ng inclusive na karanasan

Ang maliliit na detalye tulad nito ang nagtatangi sa magagaling na developer mula sa mahuhusay!

#### Hakbang 5: Ilapat ang Parehong Pattern sa Registration

Para sa pagkakapare-pareho, ipatupad ang parehong error handling sa iyong registration form:

1. **Magdagdag** ng elemento ng display ng error sa iyong registration HTML:
```html
<div id="registerError" role="alert"></div>
```

2. **I-update** ang iyong register function upang gamitin ang parehong pattern ng display ng error:
```javascript
if (data.error) {
  return updateElement('registerError', data.error);
}
```

**Mga benepisyo ng pare-parehong error handling:**
- **Nagbibigay** ng uniform na karanasan ng user sa lahat ng form
- **Binabawasan** ang cognitive load sa pamamagitan ng paggamit ng pamilyar na mga pattern
- **Pinapasimple** ang maintenance gamit ang reusable na code
- **Tinitiyak** na natutugunan ang mga pamantayan sa accessibility sa buong app

## Paglikha ng Iyong Dynamic Dashboard

Ngayon ay gagawin nating dynamic ang iyong static na dashboard upang magpakita ng totoong data ng account. Tulad ng pagkakaiba sa pagitan ng naka-print na iskedyul ng flight at ng live na departure boards sa mga paliparan, lilipat tayo mula sa static na impormasyon patungo sa real-time, responsive na display.

Gamit ang mga teknik sa DOM manipulation na natutunan mo, gagawa tayo ng dashboard na awtomatikong nag-a-update gamit ang kasalukuyang impormasyon ng account.

### Pagkilala sa Iyong Data

Bago tayo magsimulang magtayo, silipin natin kung anong uri ng data ang ipinapadala ng iyong server pabalik. Kapag matagumpay na nag-login ang isang tao, narito ang kayamanan ng impormasyon na maaari mong gamitin:

```json
{
  "user": "test",
  "currency": "$",
  "description": "Test account",
  "balance": 75,
  "transactions": [
    { "id": "1", "date": "2020-10-01", "object": "Pocket money", "amount": 50 },
    { "id": "2", "date": "2020-10-03", "object": "Book", "amount": -10 },
    { "id": "3", "date": "2020-10-04", "object": "Sandwich", "amount": -5 }
  ]
}
```

**Ang istruktura ng data na ito ay nagbibigay:**
- **`user`**: Perpekto para sa pag-personalize ng karanasan ("Welcome back, Sarah!")
- **`currency`**: Tinitiyak na tama ang pagpapakita ng mga halaga ng pera
- **`description`**: Isang magiliw na pangalan para sa account
- **`balance`**: Ang mahalagang kasalukuyang balanse
- **`transactions`**: Ang kumpletong kasaysayan ng transaksyon na may lahat ng detalye

Lahat ng kailangan mo upang bumuo ng isang propesyonal na dashboard ng banking!

> 💡 **Pro Tip**: Gusto mo bang makita agad ang iyong dashboard sa aksyon? Gamitin ang username na `test` kapag nag-login - ito ay may pre-loaded na sample data upang makita mo ang lahat ng gumagana nang hindi kinakailangang gumawa muna ng mga transaksyon.
> 
**Bakit kapaki-pakinabang ang test account:**
- May kasamang realistic na sample data na naka-load na
- Perpekto para makita kung paano ipinapakita ang mga transaksyon
- Mahusay para sa pag-testing ng mga feature ng iyong dashboard
- Nakakatipid sa iyo mula sa manu-manong paggawa ng dummy data

### Paglikha ng Dashboard Display Elements

Gawin natin ang iyong dashboard interface step by step, simula sa impormasyon ng account summary at pagkatapos ay magpatuloy sa mas kumplikadong mga feature tulad ng mga listahan ng transaksyon.

#### Hakbang 1: I-update ang Istruktura ng Iyong HTML

Una, palitan ang static na seksyon ng "Balance" ng mga dynamic na placeholder na elemento na maaaring punan ng iyong JavaScript:

```html
<section>
  Balance: <span id="balance"></span><span id="currency"></span>
</section>
```

Susunod, magdagdag ng seksyon para sa account description. Dahil ito ay gumaganap bilang pamagat para sa nilalaman ng dashboard, gumamit ng semantic HTML:

```html
<h2 id="description"></h2>
```

**Pag-unawa sa istruktura ng HTML:**
- **Gumagamit** ng hiwalay na `<span>` na mga elemento para sa balanse at currency para sa indibidwal na kontrol
- **Nag-aaplay** ng mga natatanging ID sa bawat elemento para sa JavaScript targeting
- **Sumusunod** sa semantic HTML sa pamamagitan ng paggamit ng `<h2>` para sa account description
- **Lumilikha** ng lohikal na hierarchy para sa mga screen reader at SEO

> ✅ **Insight sa Accessibility**: Ang account description ay gumaganap bilang pamagat para sa nilalaman ng dashboard, kaya ito ay minarkahan nang semantically bilang heading. Alamin ang higit pa tungkol sa kung paano [heading structure](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility) nakakaapekto sa accessibility. Maaari mo bang tukuyin ang iba pang mga elemento sa iyong pahina na maaaring makinabang mula sa heading tags?

#### Hakbang 2: Gumawa ng Dashboard Update Function

Ngayon gumawa ng function na magpapakilala ng totoong data ng account sa iyong dashboard:

```javascript
function updateDashboard() {
  if (!account) {
    return navigate('/login');
  }

  updateElement('description', account.description);
  updateElement('balance', account.balance.toFixed(2));
  updateElement('currency', account.currency);
}
```

**Step by step, narito ang ginagawa ng function na ito:**
- **Nagva-validate** na mayroong data ng account bago magpatuloy
- **Nagre-redirect** ng mga hindi authenticated na user pabalik sa login page
- **Ina-update** ang account description gamit ang reusable na `updateElement` function
- **Nagfo-format** ng balanse upang palaging magpakita ng dalawang decimal places
- **Ipinapakita** ang tamang simbolo ng currency

> 💰 **Pag-format ng Pera**: Ang [`toFixed(2)`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) na pamamaraan ay isang lifesaver! Tinitiyak nito na ang iyong balanse ay palaging mukhang totoong pera - "75.00" sa halip na "75" lang. Maa-appreciate ng iyong mga user ang nakikitang pamilyar na format ng pera.

#### Hakbang 3: Tiyaking Nag-a-update ang Iyong Dashboard

Upang matiyak na ang iyong dashboard ay nagre-refresh gamit ang kasalukuyang data tuwing may bumibisita dito, kailangan nating mag-hook sa iyong navigation system. Kung natapos mo ang [lesson 1 assignment](../1-template-route/assignment.md), dapat itong pamilyar. Kung hindi, huwag mag-alala - narito ang kailangan mo:

Idagdag ito sa dulo ng iyong `updateRoute()` function:

```javascript
if (typeof route.init === 'function') {
  route.init();
}
```

Pagkatapos ay i-update ang iyong mga ruta upang isama ang dashboard initialization:

```javascript
const routes = {
  '/login': { templateId: 'login' },
  '/dashboard': { templateId: 'dashboard', init: updateDashboard }
};
```

**Ano ang ginagawa ng matalinong setup na ito:**
- Sinusuri kung ang isang ruta ay may espesyal na initialization code
- Awtomatikong pinapatakbo ang code na iyon kapag nag-load ang ruta
- Tinitiyak na ang iyong dashboard ay palaging nagpapakita ng sariwa, kasalukuyang data
- Pinapanatili ang iyong routing logic na malinis at organisado

#### Testing ng Iyong Dashboard

Pagkatapos ipatupad ang mga pagbabagong ito, subukan ang iyong dashboard:

1. **Mag-login** gamit ang test account
2. **I-verify** na ikaw ay na-redirect sa dashboard
3. **Suriin** na ang account description, balanse, at currency ay tama ang pagpapakita
4. **Subukang mag-log out at mag-log in muli** upang matiyak na nagre-refresh ang data nang maayos

Ang iyong dashboard ay dapat na ngayon ay nagpapakita ng dynamic na impormasyon ng account na nag-a-update batay sa data ng user na naka-login!

## Paggawa ng Smart Transaction Lists gamit ang Templates

Sa halip na manu-manong gumawa ng HTML para sa bawat transaksyon, gagamit tayo ng templates upang awtomatikong makabuo ng pare-parehong format. Tulad ng standardized components na ginagamit sa spacecraft manufacturing, tinitiyak ng templates na ang bawat transaction row ay sumusunod sa parehong istruktura at hitsura.

Ang teknik na ito ay mahusay na nag-scale mula sa ilang transaksyon hanggang sa libu-libo, pinapanatili ang pare-parehong performance at presentation.

```mermaid
flowchart LR
    A[Transaction Data] --> B[HTML Template]
    B --> C[Clone Template]
    C --> D[Populate with Data]
    D --> E[Add to DOM]
    E --> F[Repeat for Each Transaction]
```

### Hakbang 1: Gumawa ng Transaction Template

Una, magdagdag ng reusable template para sa transaction rows sa iyong HTML `<body>`:

```html
<template id="transaction">
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>
```

**Pag-unawa sa HTML templates:**
- **Tinutukoy** ang istruktura para sa isang table row
- **Nananatiling** invisible hanggang sa ma-clone at mapunan gamit ang JavaScript
- **May kasamang** tatlong cells para sa date, description, at amount
- **Nagbibigay** ng reusable na pattern para sa pare-parehong format

### Hakbang 2: Ihanda ang Iyong Table para sa Dynamic Content

Susunod, magdagdag ng `id` sa iyong table body upang madali itong ma-target ng JavaScript:

```html
<tbody id="transactions"></tbody>
```

**Ano ang nagagawa nito:**
- **Lumilikha** ng malinaw na target para sa pag-insert ng transaction rows
- **Ibinubukod** ang istruktura ng table mula sa dynamic na nilalaman
- **Nagpapahintulot** ng madaling pag-clear at pag-repopulate ng transaction data

### Hakbang 3: Bumuo ng Transaction Row Factory Function

Ngayon gumawa ng function na nagta-transform ng transaction data sa mga HTML elements:

```javascript
function createTransactionRow(transaction) {
  const template = document.getElementById('transaction');
  const transactionRow = template.content.cloneNode(true);
  const tr = transactionRow.querySelector('tr');
  tr.children[0].textContent = transaction.date;
  tr.children[1].textContent = transaction.object;
  tr.children[2].textContent = transaction.amount.toFixed(2);
  return transactionRow;
}
```

**Pagbubuo ng factory function na ito:**
- **Kinukuha** ang template element gamit ang ID nito
- **Kinokopya** ang template content para sa ligtas na manipulasyon
- **Pinipili** ang table row sa loob ng cloned content
- **Pinupunan** ang bawat cell gamit ang transaction data
- **Nagfo-format** ng amount upang magpakita ng tamang decimal places
- **Ibinabalik** ang kumpletong row na handa para sa insertion

### Hakbang 4: Mag-generate ng Maramihang Transaction Rows nang Mabilis

Idagdag ang code na ito sa iyong `updateDashboard()` function upang ipakita ang lahat ng transaksyon:

```javascript
const transactionsRows = document.createDocumentFragment();
for (const transaction of account.transactions) {
  const transactionRow = createTransactionRow(transaction);
  transactionsRows.appendChild(transactionRow);
}
updateElement('transactions', transactionsRows);
```

**Pag-unawa sa mahusay na pamamaraang ito:**
- **Lumilikha** ng document fragment upang i-batch ang DOM operations
- **Iniikot** ang lahat ng transaksyon sa account data
- **Nag-generate** ng row para sa bawat transaksyon gamit ang factory function
- **Kinokolekta** ang lahat ng rows sa fragment bago idagdag sa DOM
- **Gumagawa** ng isang DOM update sa halip na maramihang individual insertions

> ⚡ **Pag-optimize ng Performance**: Ang [`document.createDocumentFragment()`](https://developer.mozilla.org/docs/Web/API/Document/createDocumentFragment) ay gumagana tulad ng proseso ng assembly sa Boeing - ang mga components ay inihahanda off the main line, pagkatapos ay ini-install bilang isang kumpletong unit. Ang batching approach na ito ay nagbabawas ng DOM reflows sa pamamagitan ng paggawa ng isang insertion sa halip na maramihang individual operations.

### Hakbang 5: Pagandahin ang Update Function para sa Mixed Content

Ang iyong `updateElement()` function ay kasalukuyang humahawak lamang ng text content. I-update ito upang gumana sa parehong text at DOM nodes:

```javascript
function updateElement(id, textOrNode) {
  const element = document.getElementById(id);
  element.textContent = ''; // Removes all children
  element.append(textOrNode);
}
```

**Mga pangunahing pagpapabuti sa update na ito:**
- **Nililinis** ang umiiral na nilalaman bago magdagdag ng bagong nilalaman
- **Tumatanggap** ng text strings o DOM nodes bilang mga parameter
- **Gumagamit** ng [`append()`](https://developer.mozilla.org/docs/Web/API/ParentNode/append) method para sa flexibility
- **Pinapanatili** ang backward compatibility sa umiiral na text-based na paggamit

### Subukan ang Iyong Dashboard

Panahon na para sa sandali ng katotohanan! Tingnan natin ang iyong dynamic na dashboard sa aksyon:

1. Mag-login gamit ang `test` account (may sample data na handa na)
2. Pumunta sa iyong dashboard
3. Suriin na ang transaction rows ay lumalabas nang may tamang format
4. Siguraduhin na ang mga petsa, deskripsyon, at halaga ay mukhang tama

Kung gumagana ang lahat, makikita mo ang isang ganap na functional na transaction list sa iyong dashboard! 🎉

**Ano ang iyong naabot:**
- Nagtayo ng dashboard na nag-scale sa anumang dami ng data
- Gumawa ng reusable templates para sa pare-parehong format
- Nagpatupad ng mahusay na mga teknik sa DOM manipulation
- Nag-develop ng functionality na maihahambing sa mga production banking applications

Matagumpay mong na-transform ang isang static na webpage sa isang dynamic na web application.

---

## Hamon ng GitHub Copilot Agent 🚀

Gamitin ang Agent mode upang kumpletuhin ang sumusunod na hamon:

**Deskripsyon:** Pagandahin ang banking app sa pamamagitan ng pagpapatupad ng transaction search at filter feature na nagpapahintulot sa mga user na maghanap ng partikular na transaksyon ayon sa date range, halaga, o deskripsyon.
**Prompt:** Gumawa ng search functionality para sa banking app na may kasamang: 1) Search form na may input fields para sa date range (mula/hanggang), minimum/maximum na halaga, at mga keyword para sa transaction description, 2) Isang `filterTransactions()` function na nagfi-filter sa account.transactions array base sa search criteria, 3) I-update ang `updateDashboard()` function para ipakita ang mga na-filter na resulta, at 4) Magdagdag ng "Clear Filters" button para i-reset ang view. Gumamit ng modernong JavaScript array methods tulad ng `filter()` at i-handle ang mga edge cases para sa walang laman na search criteria.

Alamin pa ang tungkol sa [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) dito.

## 🚀 Hamon

Handa ka na bang dalhin ang iyong banking app sa susunod na antas? Gawin natin itong mukhang at pakiramdam na gusto mo talagang gamitin. Narito ang ilang ideya para magbigay inspirasyon sa iyong pagkamalikhain:

**Gawing maganda**: Magdagdag ng CSS styling para gawing visually appealing ang iyong functional dashboard. Isipin ang malinis na linya, tamang spacing, at maaaring ilang subtle animations.

**Gawing responsive**: Subukang gumamit ng [media queries](https://developer.mozilla.org/docs/Web/CSS/Media_Queries) para gumawa ng [responsive design](https://developer.mozilla.org/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) na mahusay gumagana sa mga phone, tablet, at desktop. Pasasalamatan ka ng iyong mga user!

**Magdagdag ng kaunting flair**: Isaalang-alang ang pag-color-code ng mga transactions (berde para sa kita, pula para sa gastos), magdagdag ng mga icon, o gumawa ng hover effects na magpaparamdam na interactive ang interface.

Ganito ang maaaring hitsura ng isang polished dashboard:

![Screenshot ng isang halimbawa ng resulta ng dashboard pagkatapos ng styling](../../../../translated_images/screen2.123c82a831a1d14ab2061994be2fa5de9cec1ce651047217d326d4773a6348e4.tl.png)

Hindi mo kailangang eksaktong gayahin ito - gamitin ito bilang inspirasyon at gawin itong sarili mo!

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/46)

## Assignment

[Refactor at i-comment ang iyong code](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagamat sinisikap naming maging tumpak, pakatandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.