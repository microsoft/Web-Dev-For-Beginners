# Pagerinti maršruto parinkimą

## Nurodymai

Dabar, kai sukūrėte pagrindinę maršruto sistemą, atėjo laikas ją patobulinti profesionaliomis funkcijomis, kurios pagerins vartotojo patirtį ir suteiks geresnius įrankius kūrėjams. Tikrose programėlėse reikia daugiau nei tik šablonų keitimas – būtini dinamiški puslapio pavadinimai, gyvavimo ciklo kabliukai ir išplečiama architektūra.

Šiame užduotyje praplėsite savo maršrutizacijos įgyvendinimą dviem svarbiomis funkcijomis, kurios dažniausiai sutinkamos gamybinėse žiniatinklio programose. Šie patobulinimai suteiks jūsų banko programėlei daugiau rafinuotumo ir sukurs pagrindą būsimoms funkcijoms.

Maršrutų deklaracijoje šiuo metu yra tik naudojamo šablono ID. Tačiau rodant naują puslapį kartais reikia šiek tiek daugiau. Patobulinkime savo maršruto įgyvendinimą su dviem papildomomis funkcijomis:

### Funkcija 1: Dinamiški puslapio pavadinimai
**Tikslas:** Priskirti pavadinimus kiekvienam šablonui ir atnaujinti lango pavadinimą, kai šablonas pasikeičia.

**Kodėl tai svarbu:**
- **Gerina** vartotojo patirtį rodant aprašomuosius naršyklės skirtuko pavadinimus  
- **Padidina** prieinamumą ekrano skaitytuvams ir pagalbinėms technologijoms  
- **Suteikia** geresnį žymėjimą ir naršyklės istorijos kontekstą  
- **Atitinka** profesionalius žiniatinklio kūrimo standartus

**Įgyvendinimo būdas:**
- **Išplėsti** maršrutų objektą, kad kiekvienas maršrutas turėtų pavadinimą  
- **Pakeisti** funkciją `updateRoute()`, kad dinaminiu būdu atnaujintų `document.title`  
- **Išbandyti**, kad pavadinimai teisingai keistųsi naršant tarp ekranų

### Funkcija 2: Maršruto gyvavimo ciklo kabliukai  
**Tikslas:** Pridėti galimybę vykdyti kodą po šablono pakeitimo. Kiekvieną kartą rodant informacijos suvestinės puslapį, norime, kad kūrėjo konsolėje atsirastų pranešimas `'Dashboard is shown'`.

**Kodėl tai svarbu:**
- **Leidžia** vykdyti pasirinktą logiką specifinėms maršrutų įkrovoms  
- **Suteikia** kabliukus analitikai, registravimui ar inicijavimo kodui  
- **Sukuria** pagrindą sudėtingesniems maršruto veiksmams  
- **Demonstruoja** stebėtojo modelį žiniatinklio kūrime

**Įgyvendinimo būdas:**
- **Pridėti** neprivalomą atgalinio kvietimo funkcijos savybę maršruto konfigūracijose  
- **Vykdyti** atgalinio kvietimo funkciją (jei ji yra) po šablonui įkrovus  
- **Užtikrinti**, kad ši funkcija veikia bet kuriam maršrutui su apibrėžtu atgaliniu kvietimu  
- **Patikrinti**, ar konsolėje atsiranda pranešimas apsilankius informacijos suvestinėje

## Vertinimo kriterijai

| Kriterijus | Puikiai                                                                                                                          | Patenkinamai                                                                                                                                                                                  | Reikia patobulinimų                                       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
|          | Abi funkcijos įgyvendintos ir veikia. Pavadinimo ir kodo pridėjimas veikia ir naujam maršrutui `routes` deklaracijoje.            | Abi funkcijos veikia, tačiau elgesys yra užkoduotas ir neconfigūruojamas per `routes` deklaraciją. Trečio maršruto pridėjimas su pavadinimu ir kodo pridėjimu neveikia arba veikia dalinai. | Viena iš funkcijų trūksta arba neveikia tinkamai.       |

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Atsakomybės apribojimas**:  
Šis dokumentas buvo išverstas naudojant dirbtinio intelekto vertimo paslaugą [Co-op Translator](https://github.com/Azure/co-op-translator). Nors stengiamės užtikrinti tikslumą, prašome atkreipti dėmesį, kad automatizuoti vertimai gali turėti klaidų ar netikslumų. Pirminis dokumentas gimtąja kalba turėtų būti laikomas autoritetingu šaltiniu. Svarbiai informacijai rekomenduojamas profesionalus žmogaus vertimas. Mes neatsakome už jokius nesusipratimus ar neteisingus aiškinimus, kilusius dėl šio vertimo naudojimo.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->