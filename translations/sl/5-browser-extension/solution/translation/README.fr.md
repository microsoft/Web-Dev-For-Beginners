<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-27T22:21:27+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "sl"
}
-->
# Razširitev brskalnika Carbon Trigger: Dokončana koda

Z uporabo API-ja C02 Signal podjetja tmrow za spremljanje porabe električne energije ustvarite razširitev za brskalnik, ki vam omogoča, da imate neposreden opomnik v brskalniku o porabi električne energije v vaši regiji. Uporaba te namensko razvite razširitve vam bo pomagala sprejemati odločitve o svojih dejavnostih na podlagi teh informacij.

![posnetek razširitve](../../../../../translated_images/sl/extension-screenshot.0e7f5bfa110e92e3.webp)

## Začetek

Potrebovali boste nameščen [npm](https://npmjs.com). Prenesite kopijo te kode v mapo na svojem računalniku.

Namestite vse potrebne pakete:

```
npm install
```

Sestavite razširitev z uporabo webpacka:

```
npm run build
```

Za namestitev na Edge uporabite meni s 'tremi pikami' v zgornjem desnem kotu brskalnika, da odprete ploščo z razširitvami. Tam izberite 'Naloži razširitev iz razpakirane mape', da naložite novo razširitev. Na poziv odprite mapo 'dist' in razširitev se bo naložila. Za uporabo boste potrebovali API ključ za API CO2 Signal ([pridobite ga tukaj po e-pošti](https://www.co2signal.com/) - vnesite svoj e-poštni naslov v polje na tej strani) in [kodo za vašo regijo](http://api.electricitymap.org/v3/zones), ki ustreza [zemljevidu električne energije](https://www.electricitymap.org/map) (na primer v Bostonu uporabljam 'US-NEISO').

![namestitev](../../../../../translated_images/sl/install-on-edge.78634f02842c4828.webp)

Ko vmesnik razširitve vnesete API ključ in regijo, bi se morala barvna pika v orodni vrstici razširitve brskalnika spremeniti, da odraža porabo energije v vaši regiji, in vam dati indikator za energijsko intenzivne dejavnosti, ki bi jih bilo smiselno izvajati. Koncept za ta sistem 'pik' sem dobil pri [razširitvi Energy Lollipop](https://energylollipop.com/) za emisije v Kaliforniji.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.