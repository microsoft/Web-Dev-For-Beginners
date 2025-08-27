<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "fab4e6b4f0efcd587a9029d82991f597",
  "translation_date": "2025-08-27T22:18:23+00:00",
  "source_file": "5-browser-extension/solution/README.md",
  "language_code": "sl"
}
-->
# Razširitev brskalnika Carbon Trigger: Dokončana koda

Z uporabo tmrow-ovega API-ja C02 Signal za sledenje porabi električne energije ustvarite razširitev za brskalnik, ki vam bo omogočila opomnik neposredno v brskalniku o tem, kako obremenjena je poraba električne energije v vaši regiji. Občasna uporaba te razširitve vam bo pomagala sprejemati odločitve o svojih dejavnostih na podlagi teh informacij.

![posnetek zaslona razširitve](../../../../translated_images/extension-screenshot.0e7f5bfa110e92e3875e1bc9405edd45a3d2e02963e48900adb91926a62a5807.sl.png)

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

Za namestitev v Edge uporabite meni s tremi pikami v zgornjem desnem kotu brskalnika, da odprete ploščo z razširitvami. Tam izberite možnost 'Naloži nepakirano' za nalaganje nove razširitve. Na poziv odprite mapo 'dist' in razširitev se bo naložila. Za uporabo boste potrebovali API ključ za CO2 Signal API ([pridobite ga tukaj preko e-pošte](https://www.co2signal.com/) - vnesite svoj e-poštni naslov v polje na tej strani) in [kodo za vašo regijo](http://api.electricitymap.org/v3/zones), ki ustreza [Electricity Map](https://www.electricitymap.org/map) (na primer, v Bostonu uporabljam 'US-NEISO').

![nameščanje](../../../../translated_images/install-on-edge.78634f02842c48283726c531998679a6f03a45556b2ee99d8ff231fe41446324.sl.png)

Ko vmesnik razširitve vnesete API ključ in regijo, bi se morala barvna pika v vrstici razširitev brskalnika spremeniti, da odraža porabo energije v vaši regiji, ter vam dati namig, katere dejavnosti, ki porabijo veliko energije, bi bile primerne za izvedbo. Koncept tega sistema 'pik' sem dobil pri [Energy Lollipop razširitvi](https://energylollipop.com/) za emisije v Kaliforniji.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za prevajanje z umetno inteligenco [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem maternem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo profesionalni človeški prevod. Ne prevzemamo odgovornosti za morebitne nesporazume ali napačne razlage, ki bi nastale zaradi uporabe tega prevoda.