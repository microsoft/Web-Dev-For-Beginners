<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:26:59+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "sw"
}
-->
***

# Kutumia Mhariri wa Nambari: Kumasteri [VSCode.dev](https://vscode.dev)

**Karibu!**  
Somo hili litakuchukua kutoka misingi hadi matumizi ya hali ya juu ya [VSCode.dev](https://vscode.dev)—mhariri wa nambari wa mtandao wenye nguvu. Utajifunza jinsi ya kuhariri nambari kwa ujasiri, kusimamia miradi, kufuatilia mabadiliko, kusakinisha viendelezi, na kushirikiana kama mtaalamu—yote kutoka kwa kivinjari chako, bila haja ya usakinishaji wowote.

***

## Malengo ya Kujifunza

Mwisho wa somo hili, utaweza:

- Kutumia mhariri wa nambari kwa ufanisi kwenye mradi wowote, popote
- Kufuatilia kazi yako kwa urahisi kwa kutumia udhibiti wa toleo lililojengwa ndani
- Kubinafsisha na kuboresha mtiririko wako wa kazi wa maendeleo kwa kutumia marekebisho ya mhariri na viendelezi

***

## Mahitaji ya Awali

Ili kuanza, **jisajili kwa akaunti ya bure ya [GitHub](https://github.com)**, ambayo inakuruhusu kusimamia hazina za nambari na kushirikiana duniani kote. Ikiwa huna akaunti bado, [unda moja hapa](https://github.com/).

***

## Kwa Nini Utumie Mhariri wa Nambari wa Mtandao?

**Mhariri wa nambari** kama VSCode.dev ni kituo chako cha amri kwa kuandika, kuhariri, na kusimamia nambari. Ukiwa na kiolesura cha angavu, vipengele vingi, na ufikiaji wa papo hapo kupitia kivinjari, unaweza:

- Kuhariri miradi kwenye kifaa chochote
- Kuepuka usumbufu wa usakinishaji
- Kushirikiana na kuchangia mara moja

Ukishazoea VSCode.dev, utakuwa tayari kushughulikia kazi za nambari kutoka popote, wakati wowote.

***

## Kuanza na VSCode.dev

Nenda kwenye **[VSCode.dev](https://vscode.dev)**—hakuna usakinishaji, hakuna upakuaji. Kuingia kwa kutumia GitHub kunafungua ufikiaji kamili, ikiwa ni pamoja na kusawazisha mipangilio yako, viendelezi, na hazina. Ukihimizwa, unganisha akaunti yako ya GitHub.

Baada ya kupakia, eneo lako la kazi litaonekana hivi:

![Default VSCode.dev](../images/default-vscode-dev ina sehemu kuu tatu kutoka kushoto kwenda kulia:
- **Upau wa Shughuli:** Aikoni kama 🔎 (Tafuta), ⚙️ (Mipangilio), faili, udhibiti wa chanzo, n.k.
- **Upau wa Pembeni:** Hubadilisha muktadha kulingana na aikoni ya upau wa shughuli iliyochaguliwa (chaguo-msingi ni *Explorer* kuonyesha faili).
- **Eneo la Mhariri/Nambari:** Sehemu kubwa zaidi upande wa kulia—ambapo utaweza kuhariri na kuona nambari.

Bonyeza aikoni ili kuchunguza vipengele, lakini rudi kwenye _Explorer_ ili kubaki mahali pako.

***

## Kufungua Hazina ya GitHub

### Njia ya 1: Kutoka kwa Mhariri

1. Nenda kwenye [VSCode.dev](https://vscode.dev). Bonyeza **"Open Remote Repository."**

   ![Open remote repository](../../../../8-code-editor/images/open-remote-repository tumia _Command Palette_ (Ctrl-Shift-P, au Cmd-Shift-P kwenye Mac).

   ![Palette Menu](../images/palette-menu.pngopen remote repository.”
   - Chagua chaguo hilo.
   - Bandika URL ya hazina yako ya GitHub (mfano, `https://github.com/microsoft/Web-Dev-For-Beginners`) na bonyeza Enter.

Ikiwa imefanikiwa, utaona mradi mzima umefunguliwa na uko tayari kuhaririwa!

***

### Njia ya 2: Mara Moja Kupitia URL

Badilisha URL yoyote ya hazina ya GitHub kufunguka moja kwa moja kwenye VSCode.dev kwa kubadilisha `github.com` na `vscode.dev/github`.  
Mfano:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Kipengele hiki kinaharakisha ufikiaji wa haraka wa mradi WOWOTE.

***

## Kuhariri Faili Katika Mradi Wako

Baada ya hazina yako kufunguliwa, unaweza:

### 1. **Kuunda Faili Mpya**
- Katika upau wa *Explorer*, nenda kwenye folda unayotaka au tumia mzizi.
- Bonyeza aikoni ya _‘New file ...’_.
- Taja faili lako, bonyeza **Enter**, na faili lako linaonekana mara moja.

![Create a new file](../images/create-new-file 2. **Hariri na Hifadhi Faili**

- Bonyeza faili kwenye *Explorer* ili kufungua katika eneo la nambari.
- Fanya mabadiliko yako kama inavyohitajika.
- VSCode.dev huhifadhi mabadiliko yako kiotomatiki, lakini unaweza kubonyeza Ctrl+S kuhifadhi kwa mkono.

![Edit a file](../images/edit-a-file.png. **Fuatilia & Thibitisha Mabadiliko kwa Udhibiti wa Toleo**

VSCode.dev ina **Git** iliyojengwa ndani kwa udhibiti wa toleo!

- Bonyeza aikoni ya _'Source Control'_ ili kuona mabadiliko yote yaliyofanywa.
- Faili katika folda ya `Changes` zinaonyesha nyongeza (kijani) na kufutwa (nyekundu).  
  ![View changes](../images/working-tree.png mabadiliko kwa kubonyeza `+` karibu na faili ili kuandaa kwa uthibitisho.
- **Futa** mabadiliko yasiyotakiwa kwa kubonyeza aikoni ya kurudisha nyuma.
- Andika ujumbe wa uthibitisho wazi, kisha bonyeza alama ya tiki ili kuthibitisha na kusukuma.

Ili kurudi kwenye hazina yako ya GitHub, chagua menyu ya hamburger juu kushoto.

![Stage & commit changes](../images/edit-vscode.dev na Viendelezi

Viendelezi hukuruhusu kuongeza lugha, mandhari, zana za kutatua hitilafu, na zana za uzalishaji kwenye VSCode.dev—kufanya maisha yako ya uandishi wa nambari kuwa rahisi na ya kufurahisha.

### Kutafuta na Kusimamia Viendelezi

- Bonyeza **aikoni ya Viendelezi** kwenye upau wa shughuli.
- Tafuta kiendelezi kwenye kisanduku cha _'Search Extensions in Marketplace'_.

  ![Extension details](../images/extension-details:
  - **Installed**: Viendelezi vyote ulivyoongeza
  - **Popular**: Vinavyopendwa na sekta
  - **Recommended**: Vilivyopendekezwa kwa mtiririko wako wa kazi

  ![View extensions](

  

***

### 1. **Sakinisha Viendelezi**

- Weka jina la kiendelezi kwenye utafutaji, bonyeza, na kagua maelezo kwenye mhariri.
- Bonyeza **kitufe cha Bluu cha Sakinisha** kwenye upau wa pembeni _au_ kwenye eneo kuu la nambari.

  ![Install extensions](../images/install-extension 2. **Binafsisha Viendelezi**

- Tafuta kiendelezi chako kilichosakinishwa.
- Bonyeza **aikoni ya Gia** → chagua _Extension Settings_ kurekebisha tabia kulingana na upendeleo wako.

  ![Modify extension settings](../images/extension-settings 3. **Simamia Viendelezi**
Unaweza:

- **Zima:** Zima kiendelezi kwa muda huku ukiendelea kukiweka
- **Ondoa:** Kiondoe kabisa ikiwa hakihitajiki tena

  Tafuta kiendelezi, bonyeza aikoni ya Gia, na chagua ‘Disable’ au ‘Uninstall,’ au tumia vitufe vya bluu kwenye eneo la nambari.

***

## Kazi

Jaribu ujuzi wako: [Tengeneza tovuti ya wasifu ukitumia vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Uchunguzi Zaidi na Kujifunza Binafsi

- Chunguza zaidi na [Hati Rasmi za VSCode Web](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Chunguza vipengele vya hali ya juu vya eneo la kazi, njia za mkato za kibodi, na mipangilio.

***

**Sasa uko tayari kuandika nambari, kuunda, na kushirikiana—kutoka popote, kwenye kifaa chochote, ukitumia VSCode.dev!**

---

**Kanusho**:  
Hati hii imetafsiriwa kwa kutumia huduma ya tafsiri ya AI [Co-op Translator](https://github.com/Azure/co-op-translator). Ingawa tunajitahidi kuhakikisha usahihi, tafadhali fahamu kuwa tafsiri za kiotomatiki zinaweza kuwa na makosa au kutokuwa sahihi. Hati ya asili katika lugha yake ya awali inapaswa kuzingatiwa kama chanzo cha mamlaka. Kwa taarifa muhimu, tafsiri ya kitaalamu ya binadamu inapendekezwa. Hatutawajibika kwa kutoelewana au tafsiri zisizo sahihi zinazotokana na matumizi ya tafsiri hii.