<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8baca047d77a5f43fa4099c0578afa42",
  "translation_date": "2025-08-28T15:38:30+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "tl"
}
-->
# Gumawa ng Banking App Bahagi 2: Gumawa ng Login at Registration Form

## Pre-Lecture Quiz

[Pre-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/43)

### Panimula

Sa halos lahat ng modernong web apps, maaari kang gumawa ng account upang magkaroon ng sarili mong pribadong espasyo. Dahil maraming user ang maaaring mag-access ng web app nang sabay-sabay, kailangan mo ng mekanismo upang maimbak ang personal na data ng bawat user nang hiwalay at piliin kung aling impormasyon ang ipapakita. Hindi natin tatalakayin kung paano pamahalaan ang [user identity nang ligtas](https://en.wikipedia.org/wiki/Authentication) dahil ito ay isang malawak na paksa, ngunit titiyakin natin na ang bawat user ay makakagawa ng isa (o higit pa) na bank account sa ating app.

Sa bahaging ito, gagamit tayo ng HTML forms upang magdagdag ng login at registration sa ating web app. Tatalakayin natin kung paano ipadala ang data sa server API gamit ang programmatic approach, at sa huli, kung paano magtakda ng mga pangunahing patakaran sa pag-validate ng user inputs.

### Kinakailangan

Dapat ay natapos mo na ang [HTML templates at routing](../1-template-route/README.md) ng web app para sa araling ito. Kailangan mo ring i-install ang [Node.js](https://nodejs.org) at [patakbuhin ang server API](../api/README.md) nang lokal upang makapagpadala ng data para makagawa ng mga account.

**Tandaan**
Magkakaroon ka ng dalawang terminal na tumatakbo nang sabay, tulad ng nakalista sa ibaba:
1. Para sa pangunahing bank app na ginawa natin sa [HTML templates at routing](../1-template-route/README.md) na aralin.
2. Para sa [Bank APP server API](../api/README.md) na kakasetup lang natin.

Kailangan mong patakbuhin ang dalawang server upang masundan ang natitirang bahagi ng aralin. Ang mga ito ay nakikinig sa magkaibang ports (port `3000` at port `5000`) kaya dapat gumana nang maayos ang lahat.

Maaari mong subukan kung maayos na tumatakbo ang server sa pamamagitan ng pag-execute ng command na ito sa terminal:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Form at mga kontrol

Ang `<form>` na elemento ay naglalaman ng isang seksyon ng HTML document kung saan maaaring mag-input at mag-submit ng data ang user gamit ang mga interactive na kontrol. Maraming uri ng user interface (UI) controls na maaaring gamitin sa loob ng form, ang pinakakaraniwan ay ang `<input>` at `<button>` na mga elemento.

Maraming iba't ibang [uri](https://developer.mozilla.org/docs/Web/HTML/Element/input) ng `<input>`. Halimbawa, upang gumawa ng field kung saan maaaring ilagay ng user ang kanyang username, maaari mong gamitin:

```html
<input id="username" name="username" type="text">
```

Ang `name` na attribute ay gagamitin bilang property name kapag ang form data ay ipapadala. Ang `id` na attribute ay ginagamit upang iugnay ang isang `<label>` sa form control.

> Tingnan ang buong listahan ng [`<input>` types](https://developer.mozilla.org/docs/Web/HTML/Element/input) at [iba pang form controls](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls) upang magkaroon ng ideya sa lahat ng native UI elements na maaari mong gamitin sa paggawa ng iyong UI.

✅ Tandaan na ang `<input>` ay isang [empty element](https://developer.mozilla.org/docs/Glossary/Empty_element) kung saan *hindi* ka dapat magdagdag ng matching closing tag. Maaari mo namang gamitin ang self-closing `<input/>` notation, ngunit hindi ito kinakailangan.

Ang `<button>` na elemento sa loob ng form ay medyo espesyal. Kung hindi mo tukuyin ang `type` na attribute nito, awtomatiko nitong isusumite ang form data sa server kapag pinindot. Narito ang mga posibleng `type` values:

- `submit`: Default sa loob ng `<form>`, ang button ay nagti-trigger ng form submit action.
- `reset`: Ang button ay nire-reset ang lahat ng form controls sa kanilang initial values.
- `button`: Walang default na behavior kapag pinindot ang button. Maaari kang mag-assign ng custom actions dito gamit ang JavaScript.

### Gawain

Simulan natin sa pagdaragdag ng form sa `login` template. Kakailanganin natin ng *username* field at isang *Login* button.

```html
<template id="login">
  <h1>Bank App</h1>
  <section>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="username">Username</label>
      <input id="username" name="user" type="text">
      <button>Login</button>
    </form>
  </section>
</template>
```

Kung titingnan mo nang mas malapitan, mapapansin mong nagdagdag din tayo ng `<label>` na elemento dito. Ang mga `<label>` na elemento ay ginagamit upang magdagdag ng pangalan sa UI controls, tulad ng ating username field. Mahalaga ang mga label para sa readability ng iyong mga form, ngunit may karagdagang benepisyo rin:

- Sa pamamagitan ng pag-uugnay ng label sa form control, nakakatulong ito sa mga user na gumagamit ng assistive technologies (tulad ng screen reader) upang maunawaan kung anong data ang inaasahang ibigay nila.
- Maaari mong i-click ang label upang direktang mag-focus sa kaugnay na input, na mas madaling maabot sa mga touch-screen na device.

> [Accessibility](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) sa web ay isang napakahalagang paksa na madalas na hindi nabibigyang pansin. Salamat sa [semantic HTML elements](https://developer.mozilla.org/docs/Learn/Accessibility/HTML), hindi mahirap gumawa ng accessible na content kung gagamitin mo ito nang maayos. Maaari kang [magbasa pa tungkol sa accessibility](https://developer.mozilla.org/docs/Web/Accessibility) upang maiwasan ang mga karaniwang pagkakamali at maging isang responsableng developer.

Ngayon, magdagdag tayo ng pangalawang form para sa registration, sa ibaba lamang ng nauna:

```html
<hr/>
<h2>Register</h2>
<form id="registerForm">
  <label for="user">Username</label>
  <input id="user" name="user" type="text">
  <label for="currency">Currency</label>
  <input id="currency" name="currency" type="text" value="$">
  <label for="description">Description</label>
  <input id="description" name="description" type="text">
  <label for="balance">Current balance</label>
  <input id="balance" name="balance" type="number" value="0">
  <button>Register</button>
</form>
```

Gamit ang `value` na attribute, maaari tayong magtakda ng default na halaga para sa isang input. Pansinin din na ang input para sa `balance` ay may `number` na uri. Mukha bang iba ito kumpara sa ibang inputs? Subukang i-interact ito.

✅ Kaya mo bang mag-navigate at mag-interact sa mga form gamit lamang ang keyboard? Paano mo ito gagawin?

## Pag-submit ng data sa server

Ngayon na mayroon na tayong functional na UI, ang susunod na hakbang ay ipadala ang data sa server. Subukan nating mabilis ang ating kasalukuyang code: ano ang mangyayari kung i-click mo ang *Login* o *Register* na button?

Napansin mo ba ang pagbabago sa URL ng iyong browser?

![Screenshot ng pagbabago sa URL ng browser matapos i-click ang Register button](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.tl.png)

Ang default na aksyon para sa isang `<form>` ay ang isubmit ang form sa kasalukuyang server URL gamit ang [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), na idinadagdag ang form data direkta sa URL. Gayunpaman, may ilang limitasyon ang pamamaraang ito:

- Limitado ang laki ng data na maaaring ipadala (mga 2000 characters lamang).
- Direktang nakikita ang data sa URL (hindi maganda para sa mga password).
- Hindi ito gumagana para sa file uploads.

Kaya maaari mong baguhin ito upang gumamit ng [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) na nagpapadala ng form data sa server sa body ng HTTP request, nang walang mga naunang limitasyon.

> Bagaman ang POST ang pinakakaraniwang ginagamit na paraan upang magpadala ng data, [sa ilang partikular na sitwasyon](https://www.w3.org/2001/tag/doc/whenToUseGet.html) mas mainam na gumamit ng GET method, tulad ng sa pag-implement ng search field.

### Gawain

Magdagdag ng `action` at `method` properties sa registration form:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Ngayon subukang magrehistro ng bagong account gamit ang iyong pangalan. Pagkatapos i-click ang *Register* na button, dapat kang makakita ng ganito:

![Isang browser window sa address localhost:5000/api/accounts, nagpapakita ng JSON string na may user data](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.tl.png)

Kung maayos ang lahat, sasagutin ng server ang iyong request gamit ang isang [JSON](https://www.json.org/json-en.html) response na naglalaman ng account data na nilikha.

✅ Subukang magrehistro muli gamit ang parehong pangalan. Ano ang nangyayari?

## Pag-submit ng data nang hindi nire-reload ang page

Tulad ng napansin mo, may kaunting isyu sa pamamaraang ginamit natin: kapag nagsumite ng form, lumalabas tayo sa ating app at ang browser ay nagre-redirect sa server URL. Sinusubukan nating iwasan ang lahat ng page reloads sa ating web app, dahil gumagawa tayo ng isang [Single-page application (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Upang maipadala ang form data sa server nang hindi nire-reload ang page, kailangan nating gumamit ng JavaScript code. Sa halip na maglagay ng URL sa `action` property ng isang `<form>` na elemento, maaari kang gumamit ng anumang JavaScript code na may prefix na `javascript:` upang magsagawa ng custom na aksyon. Gamit ito, kakailanganin mong i-implement ang ilang mga gawain na dati ay awtomatikong ginagawa ng browser:

- Kunin ang form data.
- I-convert at i-encode ang form data sa angkop na format.
- Gumawa ng HTTP request at ipadala ito sa server.

### Gawain

Palitan ang `action` ng registration form ng:

```html
<form id="registerForm" action="javascript:register()">
```

Buksan ang `app.js` at magdagdag ng bagong function na pinangalanang `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Dito, kinukuha natin ang form element gamit ang `getElementById()` at ginagamit ang [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) helper upang kunin ang mga halaga mula sa form controls bilang isang set ng key/value pairs. Pagkatapos, kino-convert natin ang data sa isang regular na object gamit ang [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) at sa huli, sine-serialize ang data sa [JSON](https://www.json.org/json-en.html), isang format na karaniwang ginagamit para sa pagpapalitan ng data sa web.

Ang data ay handa nang ipadala sa server. Gumawa ng bagong function na pinangalanang `createAccount`:

```js
async function createAccount(account) {
  try {
    const response = await fetch('//localhost:5000/api/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: account
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || 'Unknown error' };
  }
}
```

Ano ang ginagawa ng function na ito? Una, pansinin ang `async` na keyword dito. Ibig sabihin nito, ang function ay naglalaman ng code na mag-e-execute [**asynchronously**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Kapag ginamit kasama ang `await` na keyword, pinapayagan nitong maghintay para sa asynchronous na code na mag-execute - tulad ng paghihintay para sa server response dito - bago magpatuloy.

Narito ang isang mabilis na video tungkol sa paggamit ng `async/await`:

[![Async at Await para sa pamamahala ng promises](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async at Await para sa pamamahala ng promises")

> 🎥 I-click ang imahe sa itaas para sa video tungkol sa async/await.

Ginagamit natin ang `fetch()` API upang magpadala ng JSON data sa server. Ang pamamaraang ito ay tumatanggap ng 2 parameter:

- Ang URL ng server, kaya inilalagay natin dito ang `//localhost:5000/api/accounts`.
- Ang mga setting ng request. Dito natin itinatakda ang method sa `POST` at ibinibigay ang `body` para sa request. Dahil nagpapadala tayo ng JSON data sa server, kailangan din nating itakda ang `Content-Type` header sa `application/json` upang malaman ng server kung paano i-interpret ang nilalaman.

Dahil sasagutin ng server ang request gamit ang JSON, maaari nating gamitin ang `await response.json()` upang i-parse ang JSON content at ibalik ang resulting object. Tandaan na ang pamamaraang ito ay asynchronous, kaya ginagamit natin ang `await` na keyword dito bago mag-return upang matiyak na ang anumang error sa panahon ng parsing ay mahuhuli rin.

Ngayon, magdagdag ng ilang code sa `register` function upang tawagin ang `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Dahil ginagamit natin ang `await` na keyword dito, kailangan nating idagdag ang `async` na keyword bago ang register function:

```js
async function register() {
```

Sa wakas, magdagdag tayo ng ilang logs upang suriin ang resulta. Ang final function ay dapat ganito ang hitsura:

```js
async function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const jsonData = JSON.stringify(Object.fromEntries(formData));
  const result = await createAccount(jsonData);

  if (result.error) {
    return console.log('An error occurred:', result.error);
  }

  console.log('Account created!', result);
}
```

Medyo mahaba iyon ngunit narating natin! Kung bubuksan mo ang [browser developer tools](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools), at susubukang magrehistro ng bagong account, hindi mo dapat makita ang anumang pagbabago sa web page ngunit lilitaw ang isang mensahe sa console na nagpapatunay na gumagana ang lahat.

![Screenshot na nagpapakita ng log message sa browser console](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.tl.png)

✅ Sa tingin mo ba ang data ay ligtas na naipapadala sa server? Paano kung may makakaintercept ng request? Maaari kang magbasa tungkol sa [HTTPS](https://en.wikipedia.org/wiki/HTTPS) upang malaman ang higit pa tungkol sa secure na komunikasyon ng data.

## Pag-validate ng Data

Kung susubukan mong magrehistro ng bagong account nang hindi naglalagay ng username, makikita mo na ang server ay nagbabalik ng error na may status code [400 (Bad Request)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Bago magpadala ng data sa server, magandang kasanayan ang [pag-validate ng form data](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) upang matiyak na nagpapadala ka ng wastong request. Ang HTML5 forms controls ay nagbibigay ng built-in validation gamit ang iba't ibang attributes:

- `required`: kailangang punan ang field kung hindi, hindi maisusumite ang form.
- `minlength` at `maxlength`: tumutukoy sa minimum at maximum na bilang ng mga character sa text fields.
- `min` at `max`: tumutukoy sa minimum at maximum na halaga ng numerical field.
- `type`: tumutukoy sa uri ng data na inaasahan, tulad ng `number`, `email`, `file` o [iba pang built-in types](https://developer.mozilla.org/docs/Web/HTML/Element/input). Ang attribute na ito ay maaaring magbago rin ng visual rendering ng form control.
- `pattern`: nagbibigay-daan upang magtakda ng [regular expression](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) pattern upang masuri kung ang ipinasok na data ay wasto o hindi.
Tip: maaari mong i-customize ang hitsura ng iyong mga form controls depende kung valid o hindi gamit ang `:valid` at `:invalid` na CSS pseudo-classes.
### Gawain

Mayroong 2 kinakailangang mga field upang makagawa ng isang balidong bagong account: ang username at currency. Ang iba pang mga field ay opsyonal. I-update ang HTML ng form, gamit ang parehong `required` na attribute at teksto sa label ng field upang:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

Bagamat ang partikular na implementasyon ng server na ito ay hindi nagtatakda ng tiyak na limitasyon sa maximum na haba ng mga field, magandang kasanayan na magtakda ng makatwirang limitasyon para sa anumang text entry ng user.

Magdagdag ng `maxlength` na attribute sa mga text field:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Ngayon, kung pindutin mo ang *Register* na button at may field na hindi sumusunod sa validation rule na ating itinakda, makikita mo ang ganito:

![Screenshot na nagpapakita ng validation error kapag sinubukang i-submit ang form](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.tl.png)

Ang ganitong uri ng validation na ginagawa *bago* ipadala ang anumang data sa server ay tinatawag na **client-side** validation. Ngunit tandaan na hindi palaging posible na gawin ang lahat ng pagsusuri nang hindi ipinapadala ang data. Halimbawa, hindi natin masusuri dito kung may account na bang umiiral gamit ang parehong username nang hindi nagpapadala ng request sa server. Ang karagdagang validation na ginagawa sa server ay tinatawag na **server-side** validation.

Karaniwan, kailangang ipatupad ang pareho. Habang ang paggamit ng client-side validation ay nagpapabuti sa karanasan ng user sa pamamagitan ng pagbibigay ng agarang feedback, ang server-side validation ay mahalaga upang matiyak na ang data ng user na iyong pinoproseso ay maayos at ligtas.

---

## 🚀 Hamon

Magpakita ng error message sa HTML kung ang user ay umiiral na.

Narito ang isang halimbawa ng maaaring hitsura ng panghuling login page pagkatapos ng kaunting pag-istilo:

![Screenshot ng login page pagkatapos magdagdag ng CSS styles](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.tl.png)

## Post-Lecture Quiz

[Post-lecture quiz](https://ff-quizzes.netlify.app/web/quiz/44)

## Review at Pag-aaral sa Sarili

Ang mga developer ay naging napaka-malikhain sa kanilang mga pagsisikap sa paggawa ng form, lalo na sa mga validation strategy. Alamin ang tungkol sa iba't ibang daloy ng form sa pamamagitan ng pagtingin sa [CodePen](https://codepen.com); makakakita ka ba ng mga kawili-wili at nakaka-inspire na mga form?

## Takdang-Aralin

[Istiluhin ang iyong bank app](assignment.md)

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na maaaring magmula sa paggamit ng pagsasaling ito.