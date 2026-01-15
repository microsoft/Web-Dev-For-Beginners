<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-27T22:19:24+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "sl"
}
-->
# Razširitev brskalnika Carbon Trigger: koda za začetek

Uporabili bomo API Signal CO2 od tmrow za spremljanje porabe električne energije, da ustvarimo razširitev za brskalnik, ki bo omogočala neposreden opomnik v brskalniku o tem, kako obremenjujoča je poraba električne energije v vaši regiji. Uporaba te prilagojene razširitve bo pomagala oceniti vaše dejavnosti na podlagi teh informacij.

![posnetek zaslona razširitve](../../../../../translated_images/sl/extension-screenshot.0e7f5bfa110e92e3.png)

## Za začetek

Poskrbite, da imate nameščen [npm](https://npmjs.com). Prenesite kopijo te kode v mapo na svojem računalniku.

Namestite vse potrebne pakete:

```
npm install
```

Ustvarite razširitev z uporabo webpack:

```
npm run build
```

Za namestitev na Edge uporabite meni "tri pike" v zgornjem desnem kotu brskalnika, da odprete ploščo Razširitve. Če še ni aktivirana, omogočite Način razvijalca (spodaj levo). Izberite "Naloži nepakirano", da naložite novo razširitev. Na poziv odprite mapo "dist" in razširitev bo naložena. Za uporabo boste potrebovali API ključ za CO2 Signal API (lahko ga [pridobite tukaj preko e-pošte](https://www.co2signal.com/) - vnesite svoj e-poštni naslov v polje na tej strani) ter [kodo za svojo regijo](http://api.electricitymap.org/v3/zones), ki ustreza [električni karti](https://www.electricitymap.org/map) (na primer v Bostonu "US-NEISO").

![namestitev](../../../../../translated_images/sl/install-on-edge.78634f02842c4828.png)

Ko vmesnik razširitve vsebuje API ključ in regijo, bi se morala barvna pika v vrstici razširitve brskalnika spremeniti, da odraža porabo energije v regiji, ter podati namig, katere dejavnosti z visoko porabo energije bi bile primerne za izvedbo. Koncept za ta sistem "pik" je bil navdihnjen z [razširitvijo Energy Lollipop](https://energylollipop.com/) za emisije v Kaliforniji.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za strojno prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da se zavedate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo strokovno človeško prevajanje. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.