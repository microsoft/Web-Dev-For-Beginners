<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3f5e6821e0febccfc5d05e7c944d9e3d",
  "translation_date": "2025-08-23T23:53:59+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ja.md",
  "language_code": "fr"
}
-->
# Extension de navigateur Carbon Trigger : Code final

Construisez une extension de navigateur qui utilise l'API CO2 Signal de tmrow pour suivre la consommation d'électricité dans votre région et afficher un rappel sur votre navigateur indiquant à quel point l'utilisation d'énergie est élevée. En utilisant cette extension de manière ad hoc, vous pouvez prendre des décisions basées sur ces informations pour vos activités.

![capture d'écran de l'extension](../../../../../5-browser-extension/extension-screenshot.png)

## Introduction

Vous devez avoir [npm](https://npmjs.com) installé. Téléchargez une copie de ce code dans un dossier sur votre ordinateur.

Installez tous les packages nécessaires.

```
npm install
```

Construisez l'extension avec webpack.

```
npm run build
```

Pour l'installer sur Edge, trouvez le panneau "Extensions" via le menu "trois points" en haut à droite du navigateur. À partir de là, sélectionnez "Load Unpacked" pour charger la nouvelle extension. Lorsque vous êtes invité, ouvrez le dossier "dist" et l'extension sera chargée. Pour l'utiliser, vous aurez besoin d'une clé API de l'API CO2 Signal ([obtenez-en une ici par email](https://www.co2signal.com/) - entrez votre email dans la boîte sur cette page) et du [code correspondant à votre région](http://api.electricitymap.org/v3/zones) sur [Electricity Map](https://www.electricitymap.org/map) (par exemple, pour Boston, utilisez 'US-NEISO').

![installation](../../../../../5-browser-extension/install-on-edge.png)

Une fois que vous avez entré la clé API et la région dans l'interface de l'extension, un point coloré apparaîtra dans la barre d'extensions de votre navigateur. Ce point reflète la consommation d'énergie de votre région et vous indique quelles activités nécessitant de l'énergie sont appropriées. Le concept de ce système de "point" m'a été inspiré par l'extension [Energy Lollipop](https://energylollipop.com/) pour les émissions en Californie.

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.