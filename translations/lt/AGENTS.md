# AGENTS.md

## Projekto apžvalga

Tai yra edukacinio kurso saugykla, skirta pradedantiesiems mokyti pagrindų apie žiniatinklio kūrimą. Kursas yra išsamus 12 savaičių kursas, sukurtas Microsoft Cloud Advocates komandos, turintis 24 praktines pamokas, apimančias JavaScript, CSS ir HTML.

### Pagrindiniai komponentai

- **Edukacinis turinys**: 24 struktūruotos pamokos, organizuotos į projektinius modulius
- **Praktiniai projektai**: Terariumas, Rašymo žaidimas, Naršyklės plėtinys, Kosminis žaidimas, Banko programa, Kodo redaktorius ir DI pokalbių asistentas
- **Interaktyvūs testai**: 48 testai po 3 klausimus kiekvienas (prieš- ir po pamokos vertinimai)
- **Daugiakalbė palaikymas**: Automatiniai vertimai į 50+ kalbų per GitHub Actions
- **Technologijos**: HTML, CSS, JavaScript, Vue.js 3, Vite, Node.js, Express, Python (DI projektams)

### Architektūra

- Edukacinė saugykla su pamokų struktūra
- Kiekvienos pamokos aplanke yra README, kodo pavyzdžiai ir sprendimai
- Atskirti savarankiški projektai atskiruose kataloguose (quiz-app, įvairūs pamokų projektai)
- Vertimų sistema naudojanti GitHub Actions (co-op-translator)
- Dokumentacija teikiama per Docsify ir prieinama PDF formatu

## Nustatymo komandos

Ši saugykla skirta daugiausia edukaciniam turiniui vartoti. Norint dirbti su specifiniais projektais:

### Pagrindinės saugyklos nustatymas

```bash
git clone https://github.com/microsoft/Web-Dev-For-Beginners.git
cd Web-Dev-For-Beginners
```

### Apklaustuko programėlės nustatymas (Vue 3 + Vite)

```bash
cd quiz-app
npm install
npm run dev        # Paleisti kūrimo serverį
npm run build      # Sukurti gamybai
npm run lint       # Paleisti ESLint
```

### Banko projekto API (Node.js + Express)

```bash
cd 7-bank-project/api
npm install
npm start          # Paleisti API serverį
npm run lint       # Vykdyti ESLint
npm run format     # Formatuoti su Prettier
```

### Naršyklės plėtinių projektai

```bash
cd 5-browser-extension/solution
npm install
# Vadovaukitės naršyklės specifinėmis plėtinių įkėlimo instrukcijomis
```

### Kosminio žaidimo projektai

```bash
cd 6-space-game/solution
npm install
# Atidarykite index.html naršyklėje arba naudokite Live Server
```

### Pokalbių projekto (Python backend) nustatymai

```bash
cd 9-chat-project/solution/backend/python
pip install openai
# Nustatykite GITHUB_TOKEN aplinkos kintamąjį
python api.py
```

## Vystymo darbo eiga

### Turinio bendradarbiams

1. **Padarykite fork’ą** saugyklos į savo GitHub paskyrą
2. **Klonuokite savo fork’ą** vietoje
3. **Sukurkite naują šaką** savo pakeitimams
4. Keiskite pamokų turinį arba kodo pavyzdžius
5. Išbandykite kodo pakeitimus atitinkamuose projekto kataloguose
6. Pateikite pull request’us pagal indėlio taisykles

### Besimokantiems

1. Padarykite fork arba klonuokite saugyklą
2. Nuosekliai pereikite per pamokų katalogus
3. Skaitykite kiekvienos pamokos README failus
4. Atlikite priešpamokinius testus adresu https://ff-quizzes.netlify.app/web/
5. Dirbkite su kodo pavyzdžiais pamokų aplankuose
6. Atlikite užduotis ir iššūkius
7. Atlikite postpamokinius testus

### Gyvas vystymas

- **Dokumentacija**: Paleiskite `docsify serve` šakniniame aplanke (3000 prievadas)
- **Apklaustuko programėlė**: Paleiskite `npm run dev` quiz-app kataloge
- **Projektai**: Naudokite VS Code Live Server plėtinį HTML projektams
- **API projektai**: Paleiskite `npm start` atitinkuose API kataloguose

## Testavimo instrukcijos

### Apklaustuko programėlės testavimas

```bash
cd quiz-app
npm run lint       # Patikrinkite kodo stiliaus klaidas
npm run build      # Patikrinkite, ar statyba sėkminga
```

### Banko API testavimas

```bash
cd 7-bank-project/api
npm run lint       # Patikrinkite kodo stiliaus klaidas
node server.js     # Patikrinkite, ar serveris paleidžiamas be klaidų
```

### Bendras testavimo požiūris

- Tai edukacinė saugykla be išsamios automatizuotos testavimo sistemos
- Rankinis testavimas apima:
  - Kodo pavyzdžiai veikia be klaidų
  - Dokumentacijos nuorodos veikia tinkamai
  - Projektų kompiliacijos vyksta sėkmingai
  - Pavyzdžiai atitinka gerąsias praktikas

### Patikrinimai prieš pateikiant

- Paleiskite `npm run lint` kataloguose su package.json
- Patikrinkite markdown nuorodų galiojimą
- Išbandykite kodo pavyzdžius naršyklėje arba Node.js
- Įsitikinkite, kad vertimai išlaiko tinkamą struktūrą

## Kodo stiliaus gairės

### JavaScript

- Naudokite modernią ES6+ sintaksę
- Laikykitės standartinių ESLint konfigūracijų projektuose
- Naudokite prasmingus kintamųjų ir funkcijų pavadinimus mokymosi tikslams
- Pridėkite komentarus, paaiškinančius koncepcijas mokiniams
- Formatuokite naudodami Prettier, kur nustatyta

### HTML/CSS

- Semantiški HTML5 elementai
- Responvyvaus dizaino principai
- Aiškios klasės pavadinimų konvencijos
- Komentarai, paaiškinantys CSS technikas mokiniams

### Python

- PEP 8 stiliaus gairės
- Aiškūs, edukaciniai kodo pavyzdžiai
- Tipų anotacijos, jei naudingos mokymuisi

### Markdown dokumentacija

- Aiški antraščių hierarchija
- Kodo blokai su kalbos nurodymu
- Nuorodos į papildomus išteklius
- Ekrano nuotraukos ir paveikslėliai `images/` kataloguose
- Alt tekstas paveikslėliams prieinamumui užtikrinti

### Failų organizacija

- Pamokos numeruojamos nuosekliai (1-getting-started-lessons, 2-js-basics ir kt.)
- Kiekviename projekte yra `solution/` ir dažnai `start/` arba `your-work/` katalogai
- Paveikslėliai saugomi pamokų specifiniuose `images/` aplankuose
- Vertimai saugomi `translations/{language-code}/` struktūroje

## Kūrimas ir diegimas

### Apklaustuko programėlės diegimas (Azure Static Web Apps)

quiz-app yra sukonfigūruotas Azure Static Web Apps diegimui:

```bash
cd quiz-app
npm run build      # Sukuria dist/ aplanką
# Diegia per GitHub Actions darbo eigą, kai pushinama į main šaką
```

Azure Static Web Apps konfigūracija:
- **Programėlės vieta**: `/quiz-app`
- **Išvesties vieta**: `dist`
- **Vykdymo eiga**: `.github/workflows/azure-static-web-apps-ashy-river-0debb7803.yml`

### Dokumentacijos PDF kūrimas

```bash
npm install                    # Įdiekite docsify-to-pdf
npm run convert               # Sugeneruokite PDF iš docs
```

### Docsify dokumentacija

```bash
npm install -g docsify-cli    # Įdiegti Docsify globaliai
docsify serve                 # Tarnauti localhost:3000
```

### Projektui būdingi kūrimo procesai

Kiekvienas projekto katalogas gali turėti savo kūrimo procesą:
- Vue projektai: `npm run build` sukuria produkcinius paketus
- Statiniai projektai: be kūrimo žingsnio, failai pateikiami tiesiogiai

## Pull request gairės

### Pavadinimo formatas

Naudokite aiškius, apibūdinančius pakeitimus pavadinimus:
- `[Quiz-app] Pridėti naują testą pamokai X`
- `[Lesson-3] Ištaisyta rašybos klaida terrarium projekte`
- `[Translation] Pridėtas ispanų kalbos vertimas pamokai 5`
- `[Docs] Atnaujintos nustatymo instrukcijos`

### Būtini patikrinimai

Prieš pateikiant PR:

1. **Kodo kokybė**:
   - Paleiskite `npm run lint` atitinkamuose projekto kataloguose
   - Ištaisyti visus lint klaidas ir įspėjimus

2. **Kūrimo patikrinimas**:
   - Jei taikoma, paleiskite `npm run build`
   - Užtikrinkite, kad nėra kūrimo klaidų

3. **Nuorodų patikra**:
   - Patikrinkite visas markdown nuorodas
   - Patikrinkite paveikslėlių nuorodas

4. **Turinio peržiūra**:
   - Korektūra dėl rašybos ir gramatikos
   - Užtikrinkite, kad kodo pavyzdžiai yra teisingi ir edukaciniai
   - Patikrinkite, kad vertimai išlaiko originalią prasmę

### Indėlio reikalavimai

- Sutikite su Microsoft CLA (automatinis patikrinimas pirmojo PR metu)
- Laikykitės [Microsoft atvirojo kodo elgesio taisyklių](https://opensource.microsoft.com/codeofconduct/)
- Matykite [CONTRIBUTING.md](./CONTRIBUTING.md) išsamioms gairėms
- Jei taikoma, nurodykite problemų numerius PR apraše

### Peržiūros procesas

- PR peržiūri prižiūrėtojai ir bendruomenė
- Prioritetas suteikiamas edukaciniam aiškumui
- Kodo pavyzdžiai turi atitikti šiuolaikines gerąsias praktikas
- Vertimai peržiūrimi dėl tikslumo ir kultūrinio tinkamumo

## Vertimų sistema

### Automatizuotas vertimas

- Naudoja GitHub Actions su co-op-translator workflow
- Automatiškai verčia į daugiau nei 50 kalbų
- Šaltinių failai pagrindiniuose kataloguose
- Išverstieji failai saugomi `translations/{language-code}/` kataloguose

### Rankinių vertimo patobulinimų pridėjimas

1. Raskite failą `translations/{language-code}/` kataloge
2. Atlikite patobulinimus išlaikydami struktūrą
3. Užtikrinkite, kad kodo pavyzdžiai lieka veikiantys
4. Išbandykite lokalizuotą testų turinį

### Vertimų meta duomenys

Išverstieji failai turi meta antraštę:
```markdown
<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "...",
  "translation_date": "...",
  "source_file": "...",
  "language_code": "..."
}
-->
```

## Derinimas ir trikčių šalinimas

### Dažnos problemos

**Apklaustuko programėlė nepaleidžiama**:
- Patikrinkite Node.js versiją (rekomenduojama v14+)
- Ištrinkite `node_modules` ir `package-lock.json`, tada paleiskite `npm install` iš naujo
- Patikrinkite, ar nėra prievado konfliktų (numatytasis: Vite naudoja prievadą 5173)

**API serveris nepaleidžiamas**:
- Įsitikinkite, kad Node.js versija atitinka minimalų reikalavimą (node >=10)
- Patikrinkite, ar prievadas nėra užimtas
- Užtikrinkite, kad visos priklausomybės įdiegtos per `npm install`

**Naršyklės plėtinys nesikrauna**:
- Patikrinkite, ar manifest.json yra tinkamai suformatuotas
- Patikrinkite naršyklės konsolę dėl klaidų
- Sekite naršyklės specifines plėtinių diegimo instrukcijas

**Python pokalbių projekto problemos**:
- Įsitikinkite, kad įdiegta OpenAI paketas: `pip install openai`
- Patikrinkite, ar nustatytas GITHUB_TOKEN aplinkos kintamasis
- Patikrinkite prieigą prie GitHub modelių

**Docsify neišveda dokumentacijos**:
- Įdiekite docsify-cli globaliai: `npm install -g docsify-cli`
- Paleiskite iš saugyklos šaknies katalogo
- Patikrinkite, ar egzistuoja `docs/_sidebar.md`

### Vystymo aplinkos patarimai

- Naudokite VS Code su Live Server plėtiniu HTML projektams
- Įdiekite ESLint ir Prettier plėtinius nuosekliam formatavimui
- Naudokitės naršyklės kūrimo įrankiais JavaScript derinimui
- Vue projektams įdiekite Vue DevTools naršyklės plėtinį

### Veikimo našumas

- Daug išverstų failų (50+ kalbų) reiškia dideles pilnas kopijas
- Naudokite švelnų klonavimą, jei dirbate tik su turiniu: `git clone --depth 1`
- Išskirkite vertimus paieškose dirbdami su anglišku turiniu
- Kūrimo procesai gali būti lėti pirmame paleidime (npm install, Vite build)

## Saugumo svarstymai

### Aplinkos kintamieji

- API raktai neturi būti įtraukti į saugyklą
- Naudokite `.env` failus (jau įtraukti į `.gitignore`)
- Dokumentuokite reikiamus aplinkos kintamuosius projektuose README

### Python projektai

- Naudokite virtualias aplinkas: `python -m venv venv`
- Laikykite priklausomybes atnaujintas
- GitHub token’ai turi turėti minimalias reikalingas teises

### GitHub modelių prieiga

- Reikalingi asmeniniai prieigos token’ai (PAT) GitHub modeliams
- Token’ai saugomi kaip aplinkos kintamieji
- Niekada neįtraukite token’ų ar prisijungimo duomenų į saugyklą

## Papildomos pastabos

### Tikslinė auditorija

- Visiškai pradedantieji žiniatinklio kūrime
- Studentai ir savarankiški besimokantieji
- Mokytojai, naudojantys kursą klasėse
- Turinys sukurtas prieinamumui ir palaipsniui įgūdžių tobulinimui

### Edukacinė filosofija

- Mokymasis projekte pagrindu
- Dažni žinių patikrinimai (testai)
- Praktinės kodo užduotys
- Realūs pavyzdžiai ir taikymas
- Akcentas į pagrindus prieš karkasus

### Saugyklos priežiūra

- Aktyvi besimokančiųjų ir bendradarbių bendruomenė
- Reguliarūs atnaujinimai priklausomybėms ir turiniui
- Problemos ir diskusijos prižiūrimos migratorių
- Vertimų atnaujinimai automatizuoti per GitHub Actions

### Susiję ištekliai

- [Microsoft Learn moduliai](https://docs.microsoft.com/learn/)
- [Studentų centras](https://docs.microsoft.com/learn/student-hub/)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) rekomenduojamas besimokantiesiems
- Papildomi kursai: Generatyvioji DI, Duomenų mokslas, ML, IoT kursai

### Darbas su specifiniais projektais

Išsamios instrukcijos apie atskirus projektus yra README failuose:
- `quiz-app/README.md` - Vue 3 apklaustuko programa
- `7-bank-project/README.md` - Banko programa su autentifikacija
- `5-browser-extension/README.md` - Naršyklės plėtinių kūrimas
- `6-space-game/README.md` - Canvas pagrindu sukurtas žaidimas
- `9-chat-project/README.md` - DI pokalbių asistento projektas

### Monorepo struktūra

Nors tai nėra tradicinis monorepo, ši saugykla apima kelis nepriklausomus projektus:
- Kiekviena pamoka yra savarankiška
- Projektai nesidalina priklausomybėmis
- Dirbkite su atskiromis projekto dalimis nesukeldami poveikio kitiems
- Klonuokite visą saugyklą pilnam kurso patyrimui

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors siekiame tikslumo, atkreipkite dėmesį, kad automatizuotuose vertimuose gali pasitaikyti klaidų ar netikslumų. Originalus dokumentas gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojama naudotis profesionalaus žmogaus vertimu. Mes neprisiimame atsakomybės už bet kokius nesusipratimus ar neteisingas interpretacijas, kylančias dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->