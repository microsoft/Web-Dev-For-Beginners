# Izboljšajte usmerjanje

## Navodila

Zdaj, ko ste zgradili osnovni sistem usmerjanja, je čas, da ga nadgradite s profesionalnimi funkcijami, ki izboljšajo uporabniško izkušnjo in zagotovijo boljša orodja za razvijalce. Resnične aplikacije potrebujejo več kot le preklapljanje predlog – zahtevajo dinamične naslove strani, življenjske cikle in razširljive arhitekture.

V tej nalogi boste razširili svojo implementacijo usmerjanja z dvema ključnima funkcijama, ki sta pogosto prisotni v produkcijskih spletnih aplikacijah. Te izboljšave bodo vaši bančni aplikaciji dodale bolj dodelan občutek in zagotovile osnovo za prihodnje funkcionalnosti.

Deklaracija poti trenutno vsebuje samo ID predloge, ki se uporablja. Toda pri prikazu nove strani je včasih potrebno nekaj več. Izboljšajmo našo implementacijo usmerjanja z dvema dodatnima funkcijama:

### Funkcija 1: Dinamični naslovi strani
**Cilj:** Dodelite naslove vsaki predlogi in posodobite naslov okna z novim naslovom, ko se predloga spremeni.

**Zakaj je to pomembno:**
- **Izboljša** uporabniško izkušnjo z opisnimi naslovi zavihkov brskalnika
- **Povečuje** dostopnost za bralnike zaslona in pomožne tehnologije  
- **Omogoča** boljše označevanje in kontekst zgodovine brskalnika
- **Sledi** profesionalnim praksam spletnega razvoja

**Pristop k implementaciji:**
- **Razširite** objekt poti, da vključuje informacije o naslovu za vsako pot
- **Spremenite** funkcijo `updateRoute()`, da dinamično posodablja `document.title`
- **Testirajte**, da se naslovi pravilno spreminjajo pri navigaciji med zasloni

### Funkcija 2: Življenjski cikel poti  
**Cilj:** Dodajte možnost za izvajanje kode po spremembi predloge. Želimo, da se v razvijalski konzoli natisne `'Dashboard is shown'` vsakič, ko je prikazana stran nadzorne plošče.

**Zakaj je to pomembno:**
- **Omogoča** izvajanje prilagojene logike ob nalaganju določenih poti
- **Ponuja** kljuke za analitiko, beleženje ali inicializacijsko kodo
- **Ustvari** osnovo za bolj kompleksna vedenja poti
- **Prikazuje** vzorec opazovalca v spletnem razvoju

**Pristop k implementaciji:**
- **Dodajte** opcijsko lastnost funkcije povratnega klica konfiguracijam poti
- **Izvedite** funkcijo povratnega klica (če je prisotna) po zaključku upodabljanja predloge
- **Zagotovite**, da funkcija deluje za katero koli pot z definiranim povratnim klicem
- **Testirajte**, da se sporočilo v konzoli prikaže ob obisku nadzorne plošče

## Merila

| Merila | Odlično                                                                                                                          | Zadostno                                                                                                                                                                                  | Potrebna izboljšava                                       |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
|         | Obe funkciji sta implementirani in delujeta. Dodajanje naslova in kode deluje tudi za novo pot, dodano v deklaracijo `routes`. | Obe funkciji delujeta, vendar je vedenje trdo kodirano in ni nastavljivo prek deklaracije `routes`. Dodajanje tretje poti z naslovom in dodatkom kode ne deluje ali deluje delno. | Ena od funkcij manjka ali ne deluje pravilno. |

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje AI [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku naj se šteje za avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne odgovarjamo za morebitne nesporazume ali napačne razlage, ki izhajajo iz uporabe tega prevoda.