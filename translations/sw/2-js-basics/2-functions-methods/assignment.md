# Furaha na Kazi za Kifunction

## Maelekezo

Katika kazi hii, utajifunza kuunda aina tofauti za kazi za kifunction ili kuimarisha dhana ulizojifunza kuhusu kazi za JavaScript, vigezo, thamani za default, na kauli za kurudisha.

Unda faili ya JavaScript inayoitwa `functions-practice.js` na utekeleze kazi zifuatazo:

### Sehemu ya 1: Kazi za Msingi
1. **Unda kazi inayoitwa `sayHello`** ambayo haichukui vigezo vyovyote na inaonyesha tu "Hello!" kwenye console.

2. **Unda kazi inayoitwa `introduceYourself`** ambayo inachukua kigezo cha `name` na inaonyesha ujumbe kama "Hi, my name is [name]" kwenye console.

### Sehemu ya 2: Kazi zenye Vigezo vya Default
3. **Unda kazi inayoitwa `greetPerson`** ambayo inachukua vigezo viwili: `name` (lazima) na `greeting` (hiari, default ni "Hello"). Kazi inapaswa kuonyesha ujumbe kama "[greeting], [name]!" kwenye console.

### Sehemu ya 3: Kazi Zinazorudisha Thamani
4. **Unda kazi inayoitwa `addNumbers`** ambayo inachukua vigezo viwili (`num1` na `num2`) na inarudisha jumla yao.

5. **Unda kazi inayoitwa `createFullName`** ambayo inachukua vigezo vya `firstName` na `lastName` na inarudisha jina kamili kama string moja.

### Sehemu ya 4: Changanya Yote Pamoja
6. **Unda kazi inayoitwa `calculateTip`** ambayo inachukua vigezo viwili: `billAmount` (lazima) na `tipPercentage` (hiari, default ni 15). Kazi inapaswa kuhesabu na kurudisha kiasi cha tip.

### Sehemu ya 5: Jaribu Kazi Zako
Ongeza miito ya kazi ili kujaribu kila moja ya kazi zako na kuonyesha matokeo ukitumia `console.log()`.

**Mfano wa miito ya majaribio:**
```javascript
// Test your functions here
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Rubric

| Kigezo | Bora Zaidi | Inafaa | Inahitaji Kuboresha |
| ------- | --------- | ------- | ------------------- |
| **Uundaji wa Kazi** | Kazi zote 6 zimetekelezwa kwa usahihi na zina sintaksia sahihi na majina ya kufuata kanuni | Kazi 4-5 zimetekelezwa kwa usahihi na kuna matatizo madogo ya sintaksia | Kazi 3 au chini ya hapo zimetekelezwa au kuna makosa makubwa ya sintaksia |
| **Vigezo na Thamani za Default** | Inatumia vigezo vinavyohitajika, vigezo vya hiari, na thamani za default kama ilivyoelezwa | Inatumia vigezo kwa usahihi lakini kunaweza kuwa na matatizo na thamani za default | Utekelezaji wa vigezo si sahihi au umekosekana |
| **Thamani za Kurudisha** | Kazi zinazopaswa kurudisha thamani zinazifanya kwa usahihi, na kazi ambazo hazipaswi kurudisha thamani zinafanya tu vitendo | Thamani nyingi za kurudisha ni sahihi na kuna matatizo madogo | Matatizo makubwa na kauli za kurudisha |
| **Ubora wa Msimbo** | Msimbo safi, uliopangwa vizuri na majina ya vigezo yenye maana na indentation sahihi | Msimbo unafanya kazi lakini unaweza kuwa safi zaidi au kupangwa vizuri | Msimbo ni mgumu kusoma au haujapangwa vizuri |
| **Upimaji** | Kazi zote zimejaribiwa na miito sahihi ya kazi na matokeo yanaonyeshwa wazi | Kazi nyingi zimejaribiwa kwa kiwango cha kutosha | Upimaji wa kazi ni mdogo au si sahihi |

## Changamoto za Ziada (Hiari)

Ikiwa unataka kujipatia changamoto zaidi:

1. **Unda toleo la kazi ya mshale** ya moja ya kazi zako
2. **Unda kazi inayokubali kazi nyingine kama kigezo** (kama mifano ya `setTimeout` kutoka somo)
3. **Ongeza uthibitishaji wa pembejeo** ili kuhakikisha kazi zako zinashughulikia pembejeo batili kwa ufanisi

---

> 💡 **Kidokezo**: Kumbuka kufungua console ya msanidi programu ya kivinjari chako (F12) ili kuona matokeo ya kauli zako za `console.log()`!

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kwa usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.