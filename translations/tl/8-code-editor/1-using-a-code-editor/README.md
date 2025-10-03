<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T10:23:50+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "tl"
}
-->
***

# Paggamit ng Code Editor: Pag-master sa [VSCode.dev](https://vscode.dev)

**Maligayang Pagdating!**  
Ang araling ito ay magdadala sa iyo mula sa mga pangunahing kaalaman hanggang sa advanced na paggamit ng [VSCode.dev](https://vscode.dev)—isang makapangyarihang, web-based na code editor. Matutunan mong mag-edit ng code nang may kumpiyansa, mag-manage ng mga proyekto, mag-track ng mga pagbabago, mag-install ng mga extension, at makipagtulungan na parang isang propesyonal—lahat mula sa iyong browser, nang walang kinakailangang pag-install.

***

## Mga Layunin sa Pag-aaral

Sa pagtatapos ng araling ito, magagawa mo ang:

- Epektibong paggamit ng code editor sa anumang proyekto, kahit saan
- Walang kahirap-hirap na pag-track ng iyong trabaho gamit ang built-in na version control
- Pag-personalize at pagpapahusay ng iyong workflow sa pag-develop gamit ang mga customizations at extension ng editor

***

## Mga Kinakailangan

Para makapagsimula, **mag-sign up para sa libreng [GitHub](https://github.com) account**, na magpapahintulot sa iyo na mag-manage ng mga code repository at makipagtulungan sa buong mundo. Kung wala ka pang account, [gumawa ng isa dito](https://github.com/).

***

## Bakit Gumamit ng Web-based na Code Editor?

Ang **code editor** tulad ng VSCode.dev ay ang iyong command center para sa pagsusulat, pag-edit, at pag-manage ng code. Sa intuitive na interface, maraming features, at agarang access sa pamamagitan ng browser, maaari kang:

- Mag-edit ng mga proyekto sa anumang device
- Iwasan ang abala ng pag-install
- Makipagtulungan at mag-contribute agad-agad

Kapag komportable ka na sa VSCode.dev, handa ka nang harapin ang mga coding task mula kahit saan, anumang oras.

***

## Pagsisimula sa VSCode.dev

Pumunta sa **[VSCode.dev](https://vscode.dev)**—walang install, walang downloads. Ang pag-sign in gamit ang GitHub ay magbubukas ng buong access, kabilang ang pag-sync ng iyong mga setting, extension, at repository. Kung may prompt, ikonekta ang iyong GitHub account.

Pagkatapos mag-load, ganito ang hitsura ng iyong workspace:

![Default VSCode.dev](../images/default-vscode-dev may tatlong pangunahing seksyon mula kaliwa hanggang kanan:
- **Activity bar:** Ang mga icon tulad ng 🔎 (Search), ⚙️ (Settings), mga file, source control, atbp.
- **Sidebar:** Nagbabago ang context batay sa activity bar icon na napili (default sa *Explorer* para ipakita ang mga file).
- **Editor/code area:** Ang pinakamalaking seksyon sa kanan—kung saan mo aktwal na ie-edit at titingnan ang code.

I-click ang mga icon para tuklasin ang mga feature, ngunit bumalik sa _Explorer_ para manatili sa iyong lugar.

***

## Pagbukas ng GitHub Repository

### Paraan 1: Mula sa Editor

1. Pumunta sa [VSCode.dev](https://vscode.dev). I-click ang **"Open Remote Repository."**

   ![Open remote repository](../../../../8-code-editor/images/open-remote-repository gamitin ang _Command Palette_ (Ctrl-Shift-P, o Cmd-Shift-P sa Mac).

   ![Palette Menu](../images/palette-menu.pngopen remote repository.”
   - Piliin ang opsyon.
   - I-paste ang iyong GitHub repo URL (hal., `https://github.com/microsoft/Web-Dev-For-Beginners`) at pindutin ang Enter.

Kapag matagumpay, makikita mo ang buong proyekto na naka-load at handa nang i-edit!

***

### Paraan 2: Agad-agad sa pamamagitan ng URL

Palitan ang anumang GitHub repo URL para direktang mabuksan sa VSCode.dev sa pamamagitan ng pagpapalit ng `github.com` sa `vscode.dev/github`.  
Halimbawa:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

Ang feature na ito ay nagpapabilis ng pag-access sa ANUMANG proyekto.

***

## Pag-edit ng Mga File sa Iyong Proyekto

Kapag bukas na ang iyong repo, maaari mong:

### 1. **Gumawa ng Bagong File**
- Sa *Explorer* sidebar, pumunta sa nais mong folder o gamitin ang root.
- I-click ang _‘New file ...’_ icon.
- Pangalanan ang iyong file, pindutin ang **Enter**, at agad na lilitaw ang iyong file.

![Create a new file](../images/create-new-file 2. **I-edit at I-save ang Mga File**

- I-click ang isang file sa *Explorer* para buksan ito sa code area.
- Gawin ang mga pagbabago ayon sa kailangan.
- Awtomatikong sine-save ng VSCode.dev ang iyong mga pagbabago, ngunit maaari mong pindutin ang Ctrl+S para mag-save nang manu-mano.

![Edit a file](../images/edit-a-file.png. **I-track at I-commit ang Mga Pagbabago gamit ang Version Control**

May integrated na **Git** version control ang VSCode.dev!

- I-click ang _'Source Control'_ icon para makita ang lahat ng mga pagbabago na ginawa.
- Ang mga file sa `Changes` folder ay nagpapakita ng mga dagdag (berde) at mga binura (pula).  
  ![View changes](../images/working-tree.png mga pagbabago sa pamamagitan ng pag-click sa `+` sa tabi ng mga file para ihanda para sa commit.
- **I-discard** ang mga hindi nais na pagbabago sa pamamagitan ng pag-click sa undo icon.
- Mag-type ng malinaw na commit message, pagkatapos ay i-click ang checkmark para mag-commit at mag-push.

Para bumalik sa iyong repository sa GitHub, piliin ang hamburger menu sa itaas na kaliwa.

![Stage & commit changes](../images/edit-vscode.dev Gamit ang Extensions

Ang mga extension ay nagbibigay-daan sa iyo na magdagdag ng mga wika, tema, debugger, at productivity tools sa VSCode.dev—ginagawang mas madali at mas masaya ang iyong coding life.

### Pag-browse at Pag-manage ng Extensions

- I-click ang **Extensions icon** sa activity bar.
- Maghanap ng extension sa _'Search Extensions in Marketplace'_ box.

  ![Extension details](../images/extension-details:
  - **Installed**: Lahat ng extension na naidagdag mo
  - **Popular**: Mga paborito sa industriya
  - **Recommended**: Naka-tailor sa iyong workflow

  ![View extensions](

  

***

### 1. **Mag-install ng Extensions**

- I-type ang pangalan ng extension sa search, i-click ito, at tingnan ang mga detalye sa editor.
- Pindutin ang **blue Install button** sa sidebar _o_ sa pangunahing code area.

  ![Install extensions](../images/install-extension 2. **I-customize ang Extensions**

- Hanapin ang iyong na-install na extension.
- I-click ang **Gear icon** → piliin ang _Extension Settings_ para i-fine-tune ang mga behavior ayon sa iyong gusto.

  ![Modify extension settings](../images/extension-settings 3. **I-manage ang Extensions**
Maaari mong:

- **I-disable:** Pansamantalang i-turn off ang extension habang naka-install pa rin
- **I-uninstall:** Permanenteng alisin ito kung hindi na kailangan

  Hanapin ang extension, pindutin ang Gear icon, at piliin ang ‘Disable’ o ‘Uninstall,’ o gamitin ang mga blue button sa code area.

***

## Gawain

Subukan ang iyong kakayahan: [Gumawa ng resume website gamit ang vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Karagdagang Pag-aaral at Sariling Pagsisiyasat

- Maghukay nang mas malalim gamit ang [opisyal na VSCode Web Docs](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Tuklasin ang mga advanced na feature ng workspace, keyboard shortcuts, at mga setting.

***

**Ngayon handa ka nang mag-code, gumawa, at makipagtulungan—mula kahit saan, sa anumang device, gamit ang VSCode.dev!**

---

**Paunawa**:  
Ang dokumentong ito ay isinalin gamit ang AI translation service na [Co-op Translator](https://github.com/Azure/co-op-translator). Bagama't sinisikap naming maging tumpak, mangyaring tandaan na ang mga awtomatikong pagsasalin ay maaaring maglaman ng mga pagkakamali o hindi pagkakatugma. Ang orihinal na dokumento sa kanyang katutubong wika ang dapat ituring na opisyal na sanggunian. Para sa mahalagang impormasyon, inirerekomenda ang propesyonal na pagsasalin ng tao. Hindi kami mananagot sa anumang hindi pagkakaunawaan o maling interpretasyon na dulot ng paggamit ng pagsasaling ito.