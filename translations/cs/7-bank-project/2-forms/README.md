<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b667b7d601e2ee19acb5aa9d102dc9f3",
  "translation_date": "2025-08-28T03:30:55+00:00",
  "source_file": "7-bank-project/2-forms/README.md",
  "language_code": "cs"
}
-->
# Vytvoření bankovní aplikace, část 2: Přihlášení a registrační formulář

## Kvíz před lekcí

[Kvíz před lekcí](https://ff-quizzes.netlify.app/web/quiz/43)

### Úvod

V téměř všech moderních webových aplikacích si můžete vytvořit účet, abyste měli svůj vlastní soukromý prostor. Protože k webové aplikaci může přistupovat více uživatelů současně, je potřeba mechanismus, který umožní ukládat osobní údaje každého uživatele odděleně a vybrat, které informace zobrazit. Nebudeme se zabývat tím, jak [bezpečně spravovat identitu uživatele](https://en.wikipedia.org/wiki/Authentication), protože je to samostatné rozsáhlé téma, ale zajistíme, aby si každý uživatel mohl vytvořit jeden (nebo více) bankovních účtů v naší aplikaci.

V této části použijeme HTML formuláře k přidání přihlášení a registrace do naší webové aplikace. Ukážeme si, jak programově odesílat data na serverovou API, a nakonec jak definovat základní pravidla validace pro vstupy uživatele.

### Předpoklady

Musíte mít dokončenou část [HTML šablony a směrování](../1-template-route/README.md) webové aplikace pro tuto lekci. Také je potřeba nainstalovat [Node.js](https://nodejs.org) a [spustit serverovou API](../api/README.md) lokálně, abyste mohli odesílat data pro vytvoření účtů.

**Poznámka**
Budete mít spuštěné dva terminály současně, jak je uvedeno níže:
1. Pro hlavní bankovní aplikaci, kterou jsme vytvořili v lekci [HTML šablony a směrování](../1-template-route/README.md)
2. Pro [serverovou API bankovní aplikace](../api/README.md), kterou jsme právě nastavili výše.

Pro pokračování v lekci je potřeba mít oba servery spuštěné. Poslouchají na různých portech (port `3000` a port `5000`), takže by vše mělo fungovat bez problémů.

Můžete otestovat, zda server běží správně, spuštěním tohoto příkazu v terminálu:

```sh
curl http://localhost:5000/api
# -> should return "Bank API v1.0.0" as a result
```

---

## Formulář a ovládací prvky

Element `<form>` obklopuje část HTML dokumentu, kde uživatel může zadávat a odesílat data pomocí interaktivních ovládacích prvků. Existuje mnoho různých uživatelských rozhraní (UI) ovládacích prvků, které lze použít v rámci formuláře, nejběžnějšími jsou elementy `<input>` a `<button>`.

Existuje mnoho různých [typů](https://developer.mozilla.org/docs/Web/HTML/Element/input) `<input>`, například pro vytvoření pole, kde uživatel může zadat své uživatelské jméno, můžete použít:

```html
<input id="username" name="username" type="text">
```

Atribut `name` bude použit jako název vlastnosti při odesílání dat formuláře. Atribut `id` se používá k propojení `<label>` s ovládacím prvkem formuláře.

> Podívejte se na celý seznam [typů `<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input) a [dalších ovládacích prvků formuláře](https://developer.mozilla.org/docs/Learn/Forms/Other_form_controls), abyste získali představu o všech nativních UI prvcích, které můžete použít při vytváření svého rozhraní.

✅ Všimněte si, že `<input>` je [prázdný element](https://developer.mozilla.org/docs/Glossary/Empty_element), ke kterému byste *neměli* přidávat odpovídající uzavírací tag. Můžete však použít samouzavírací notaci `<input/>`, ale není to nutné.

Element `<button>` v rámci formuláře je trochu speciální. Pokud nespecifikujete jeho atribut `type`, automaticky odešle data formuláře na server při stisknutí. Zde jsou možné hodnoty atributu `type`:

- `submit`: Výchozí hodnota v rámci `<form>`, tlačítko spustí akci odeslání formuláře.
- `reset`: Tlačítko resetuje všechny ovládací prvky formuláře na jejich počáteční hodnoty.
- `button`: Nepřiřazuje žádné výchozí chování při stisknutí tlačítka. Můžete mu pak přiřadit vlastní akce pomocí JavaScriptu.

### Úkol

Začněme přidáním formuláře do šablony `login`. Budeme potřebovat pole pro *uživatelské jméno* a tlačítko *Přihlásit*.

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

Pokud se podíváte blíže, můžete si všimnout, že jsme zde také přidali element `<label>`. Elementy `<label>` se používají k přidání názvu k UI ovládacím prvkům, jako je naše pole pro uživatelské jméno. Popisky jsou důležité pro čitelnost vašich formulářů, ale přinášejí také další výhody:

- Propojením popisku s ovládacím prvkem formuláře pomáhá uživatelům, kteří používají asistivní technologie (například čtečku obrazovky), pochopit, jaká data se od nich očekávají.
- Kliknutím na popisek můžete přímo zaměřit přidružený vstup, což usnadňuje jeho dosažení na zařízeních s dotykovou obrazovkou.

> [Přístupnost](https://developer.mozilla.org/docs/Learn/Accessibility/What_is_accessibility) na webu je velmi důležité téma, které je často přehlíženo. Díky [semantickým HTML elementům](https://developer.mozilla.org/docs/Learn/Accessibility/HTML) není obtížné vytvářet přístupný obsah, pokud je používáte správně. Můžete si [přečíst více o přístupnosti](https://developer.mozilla.org/docs/Web/Accessibility), abyste se vyhnuli běžným chybám a stali se odpovědným vývojářem.

Nyní přidáme druhý formulář pro registraci, hned pod ten předchozí:

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

Pomocí atributu `value` můžeme definovat výchozí hodnotu pro daný vstup.
Všimněte si také, že vstup pro `balance` má typ `number`. Vypadá jinak než ostatní vstupy? Zkuste s ním interagovat.

✅ Dokážete navigovat a interagovat s formuláři pouze pomocí klávesnice? Jak byste to udělali?

## Odesílání dat na server

Nyní, když máme funkční UI, dalším krokem je odeslání dat na server. Udělejme rychlý test pomocí našeho aktuálního kódu: co se stane, když kliknete na tlačítko *Přihlásit* nebo *Registrovat*?

Všimli jste si změny v sekci URL vašeho prohlížeče?

![Screenshot změny URL prohlížeče po kliknutí na tlačítko Registrovat](../../../../translated_images/click-register.e89a30bf0d4bc9ca867dc537c4cea679a7c26368bd790969082f524fed2355bc.cs.png)

Výchozí akce pro `<form>` je odeslání formuláře na aktuální URL serveru pomocí [metody GET](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3), připojením dat formuláře přímo k URL. Tato metoda má však některé nedostatky:

- Odesílaná data jsou velmi omezená velikostí (asi 2000 znaků)
- Data jsou přímo viditelná v URL (není ideální pro hesla)
- Nepracuje s nahráváním souborů

Proto ji můžete změnit na použití [metody POST](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5), která odesílá data formuláře na server v těle HTTP požadavku, bez předchozích omezení.

> Zatímco POST je nejčastěji používaná metoda pro odesílání dat, [v některých specifických scénářích](https://www.w3.org/2001/tag/doc/whenToUseGet.html) je vhodnější použít metodu GET, například při implementaci vyhledávacího pole.

### Úkol

Přidejte vlastnosti `action` a `method` do registračního formuláře:

```html
<form id="registerForm" action="//localhost:5000/api/accounts" method="POST">
```

Nyní zkuste zaregistrovat nový účet se svým jménem. Po kliknutí na tlačítko *Registrovat* byste měli vidět něco takového:

![Okno prohlížeče na adrese localhost:5000/api/accounts, zobrazující JSON řetězec s uživatelskými daty](../../../../translated_images/form-post.61de4ca1b964d91a9e338416e19f218504dd0af5f762fbebabfe7ae80edf885f.cs.png)

Pokud vše proběhne správně, server by měl odpovědět na váš požadavek [JSON](https://www.json.org/json-en.html) odpovědí obsahující data účtu, který byl vytvořen.

✅ Zkuste se zaregistrovat znovu se stejným jménem. Co se stane?

## Odesílání dat bez obnovení stránky

Jak jste si pravděpodobně všimli, existuje drobný problém s přístupem, který jsme právě použili: při odeslání formuláře se dostaneme z naší aplikace a prohlížeč přesměruje na URL serveru. Snažíme se vyhnout všem obnovením stránky v naší webové aplikaci, protože vytváříme [jednostránkovou aplikaci (SPA)](https://en.wikipedia.org/wiki/Single-page_application).

Abychom odeslali data formuláře na server bez vynucení obnovení stránky, musíme použít JavaScriptový kód. Místo zadání URL do vlastnosti `action` elementu `<form>` můžete použít jakýkoli JavaScriptový kód předcházený řetězcem `javascript:`, abyste provedli vlastní akci. Použití tohoto přístupu také znamená, že budete muset implementovat některé úkoly, které byly dříve prováděny automaticky prohlížečem:

- Získání dat formuláře
- Konverze a kódování dat formuláře do vhodného formátu
- Vytvoření HTTP požadavku a jeho odeslání na server

### Úkol

Nahraďte vlastnost `action` registračního formuláře:

```html
<form id="registerForm" action="javascript:register()">
```

Otevřete `app.js` a přidejte novou funkci s názvem `register`:

```js
function register() {
  const registerForm = document.getElementById('registerForm');
  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
}
```

Zde získáváme element formuláře pomocí `getElementById()` a používáme pomocníka [`FormData`](https://developer.mozilla.org/docs/Web/API/FormData) k extrakci hodnot z ovládacích prvků formuláře jako sadu dvojic klíč/hodnota. Poté data převedeme na běžný objekt pomocí [`Object.fromEntries()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries) a nakonec data serializujeme do [JSON](https://www.json.org/json-en.html), formátu běžně používaného pro výměnu dat na webu.

Data jsou nyní připravena k odeslání na server. Vytvořte novou funkci s názvem `createAccount`:

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

Co tato funkce dělá? Nejprve si všimněte klíčového slova `async`. To znamená, že funkce obsahuje kód, který bude prováděn [**asynchronně**](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). Při použití spolu s klíčovým slovem `await` umožňuje čekat na provedení asynchronního kódu – například čekání na odpověď serveru – před pokračováním.

Zde je rychlé video o použití `async/await`:

[![Async a Await pro správu slibů](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async a Await pro správu slibů")

> 🎥 Klikněte na obrázek výše pro video o async/await.

Používáme API `fetch()` k odeslání JSON dat na server. Tato metoda přijímá 2 parametry:

- URL serveru, takže zde zadáme `//localhost:5000/api/accounts`.
- Nastavení požadavku. Zde nastavíme metodu na `POST` a poskytneme `body` požadavku. Protože odesíláme JSON data na server, musíme také nastavit hlavičku `Content-Type` na `application/json`, aby server věděl, jak interpretovat obsah.

Protože server odpoví na požadavek JSONem, můžeme použít `await response.json()` k analýze JSON obsahu a vrácení výsledného objektu. Všimněte si, že tato metoda je asynchronní, takže zde používáme klíčové slovo `await`, abychom zajistili, že budou zachyceny i chyby během analýzy.

Nyní přidejte nějaký kód do funkce `register`, aby volala `createAccount()`:

```js
const result = await createAccount(jsonData);
```

Protože zde používáme klíčové slovo `await`, musíme přidat klíčové slovo `async` před funkci register:

```js
async function register() {
```

Nakonec přidejme nějaké logy pro kontrolu výsledku. Finální funkce by měla vypadat takto:

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

Bylo to trochu dlouhé, ale dostali jsme se tam! Pokud otevřete [nástroje pro vývojáře prohlížeče](https://developer.mozilla.org/docs/Learn/Common_questions/What_are_browser_developer_tools) a zkusíte zaregistrovat nový účet, neměli byste vidět žádnou změnu na webové stránce, ale v konzoli se objeví zpráva potvrzující, že vše funguje.

![Screenshot zobrazující zprávu v konzoli prohlížeče](../../../../translated_images/browser-console.efaf0b51aaaf67782a29e1a0bb32cc063f189b18e894eb5926e02f1abe864ec2.cs.png)

✅ Myslíte si, že data jsou odesílána na server bezpečně? Co kdyby někdo dokázal zachytit požadavek? Můžete si přečíst o [HTTPS](https://en.wikipedia.org/wiki/HTTPS), abyste se dozvěděli více o bezpečné komunikaci dat.

## Validace dat

Pokud se pokusíte zaregistrovat nový účet bez zadání uživatelského jména, můžete vidět, že server vrátí chybu se stavovým kódem [400 (Špatný požadavek)](https://developer.mozilla.org/docs/Web/HTTP/Status/400#:~:text=The%20HyperText%20Transfer%20Protocol%20(HTTP,%2C%20or%20deceptive%20request%20routing).).

Před odesláním dat na server je dobré [validovat data formuláře](https://developer.mozilla.org/docs/Learn/Forms/Form_validation) předem, kdykoli je to možné, abyste zajistili, že odesíláte platný požadavek. HTML5 ovládací prvky formuláře poskytují vestavěnou validaci pomocí různých atributů:

- `required`: pole musí být vyplněno, jinak nelze formulář odeslat.
- `minlength` a `maxlength`: definují minimální a maximální počet znaků v textových polích.
- `min` a `max`: definují minimální a maximální hodnotu číselného pole.
- `type`: definuje typ očekávaných dat, jako `number`, `email`, `file` nebo [jiné vestavěné typy](https://developer.mozilla.org/docs/Web/HTML/Element/input). Tento atribut může také změnit vizuální zobrazení ovládacího prvku formuláře.
- `pattern`: umožňuje definovat [regulární výraz](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) pro testování, zda jsou zadaná data platná nebo ne.
> Tip: vzhled ovládacích prvků formuláře můžete přizpůsobit podle toho, zda jsou platné nebo neplatné, pomocí pseudo-tříd CSS `:valid` a `:invalid`.
### Úkol

Existují 2 povinná pole pro vytvoření platného nového účtu: uživatelské jméno a měna, ostatní pole jsou volitelná. Aktualizujte HTML formuláře tak, aby používalo atribut `required` a text v popisku pole:

```html
<label for="user">Username (required)</label>
<input id="user" name="user" type="text" required>
...
<label for="currency">Currency (required)</label>
<input id="currency" name="currency" type="text" value="$" required>
```

I když tato konkrétní implementace serveru neomezuje maximální délku polí, je vždy dobrým zvykem definovat rozumné limity pro jakýkoli textový vstup od uživatele.

Přidejte atribut `maxlength` do textových polí:

```html
<input id="user" name="user" type="text" maxlength="20" required>
...
<input id="currency" name="currency" type="text" value="$" maxlength="5" required>
...
<input id="description" name="description" type="text" maxlength="100">
```

Pokud nyní stisknete tlačítko *Registrovat* a některé pole nesplňuje pravidlo validace, které jsme definovali, měli byste vidět něco takového:

![Snímek obrazovky zobrazující chybu validace při pokusu o odeslání formuláře](../../../../translated_images/validation-error.8bd23e98d416c22f80076d04829a4bb718e0e550fd622862ef59008ccf0d5dce.cs.png)

Validace, která se provádí *před* odesláním jakýchkoli dat na server, se nazývá **validace na straně klienta**. Ale mějte na paměti, že není vždy možné provést všechny kontroly bez odeslání dat. Například zde nemůžeme ověřit, zda již existuje účet se stejným uživatelským jménem, aniž bychom odeslali požadavek na server. Další validace prováděná na serveru se nazývá **validace na straně serveru**.

Obvykle je potřeba implementovat obě. Zatímco validace na straně klienta zlepšuje uživatelský zážitek tím, že poskytuje okamžitou zpětnou vazbu uživateli, validace na straně serveru je klíčová pro zajištění, že data uživatele, se kterými pracujete, jsou správná a bezpečná.

---

## 🚀 Výzva

Zobrazte chybovou zprávu v HTML, pokud uživatel již existuje.

Zde je příklad, jak může vypadat finální přihlašovací stránka po troše stylování:

![Snímek obrazovky přihlašovací stránky po přidání stylů CSS](../../../../translated_images/result.96ef01f607bf856aa9789078633e94a4f7664d912f235efce2657299becca483.cs.png)

## Kvíz po přednášce

[Kvíz po přednášce](https://ff-quizzes.netlify.app/web/quiz/44)

## Přehled & Samostudium

Vývojáři byli velmi kreativní při vytváření formulářů, zejména pokud jde o strategie validace. Zjistěte více o různých způsobech práce s formuláři prohlížením [CodePen](https://codepen.com); najdete nějaké zajímavé a inspirativní formuláře?

## Zadání

[Stylujte svou bankovní aplikaci](assignment.md)

---

**Prohlášení**:  
Tento dokument byl přeložen pomocí služby AI pro překlady [Co-op Translator](https://github.com/Azure/co-op-translator). Ačkoli se snažíme o přesnost, mějte prosím na paměti, že automatizované překlady mohou obsahovat chyby nebo nepřesnosti. Původní dokument v jeho původním jazyce by měl být považován za autoritativní zdroj. Pro důležité informace se doporučuje profesionální lidský překlad. Nenese odpovědnost za žádné nedorozumění nebo nesprávné interpretace vyplývající z použití tohoto překladu.