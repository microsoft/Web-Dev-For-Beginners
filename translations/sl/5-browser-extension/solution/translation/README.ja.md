<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-27T22:19:56+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "sl"
}
-->
# Razširitev brskalnika Carbon Trigger: Končna koda

Z uporabo API-ja C02 Signal podjetja tmrow lahko zgradite razširitev brskalnika, ki kot opomnik prikazuje, kako intenzivna je poraba električne energije v vaši regiji. To vam omogoča, da na podlagi teh informacij sprejemate odločitve o svojih dejavnostih.

![posnetek zaslona razširitve](../../../../../translated_images/sl/extension-screenshot.0e7f5bfa110e92e3.png)

## Začetek

Poskrbite, da imate nameščen [npm](https://npmjs.com). Prenesite kopijo te kode v mapo na svojem računalniku.

Namestite vse potrebne pakete.

```
npm install
```

Razširitev zgradite z uporabo webpack.

```
npm run build
```

Za namestitev v Edge poiščite ploščo »Razširitve« prek menija »tri pike« v zgornjem desnem kotu brskalnika. Nato izberite »Load Unpacked« in naložite novo razširitev. Ko se prikaže poziv, odprite mapo »dist«, da se razširitev naloži. Za uporabo boste potrebovali API ključ CO2 Signal ([pridobite ga tukaj prek e-pošte](https://www.co2signal.com/) - vnesite svoj e-poštni naslov v polje na tej strani) ter [kodo za vašo regijo](http://api.electricitymap.org/v3/zones), ki ustreza [Electricity Map](https://www.electricitymap.org/map) (na primer, za Boston uporabite 'US-NEISO').

![nameščanje](../../../../../translated_images/sl/install-on-edge.78634f02842c4828.png)

Ko vmesnik razširitve vnesete API ključ in regijo, se bo barvna pika, ki se prikaže v razširitveni vrstici brskalnika, spremenila glede na porabo energije v vaši regiji. To vam bo pokazalo, katere dejavnosti, ki zahtevajo energijo, so primerne. Koncept sistema »pik« mi je dal [Energy Lollipop extension](https://energylollipop.com/) za emisije v Kaliforniji.

---

**Omejitev odgovornosti**:  
Ta dokument je bil preveden z uporabo storitve za strojno prevajanje [Co-op Translator](https://github.com/Azure/co-op-translator). Čeprav si prizadevamo za natančnost, vas prosimo, da upoštevate, da lahko avtomatizirani prevodi vsebujejo napake ali netočnosti. Izvirni dokument v njegovem izvirnem jeziku je treba obravnavati kot avtoritativni vir. Za ključne informacije priporočamo strokovno človeško prevajanje. Ne prevzemamo odgovornosti za morebitna nesporazumevanja ali napačne razlage, ki izhajajo iz uporabe tega prevoda.