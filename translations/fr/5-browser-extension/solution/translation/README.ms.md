<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "21b364c158c8e4f698de65eeac16c9fe",
  "translation_date": "2025-08-23T23:51:23+00:00",
  "source_file": "5-browser-extension/solution/translation/README.ms.md",
  "language_code": "fr"
}
-->
# Extension de Navigateur Carbon Trigger : Code Complet

En utilisant l'API CO2 Signal de tmrow pour surveiller la consommation d'électricité, créez une extension de navigateur qui vous alerte sur l'impact énergétique de votre région. Cette extension vous aidera à prendre des décisions éclairées sur vos activités en fonction de ces informations.

![capture d'écran de l'extension de navigateur](../../../../../5-browser-extension/extension-screenshot.png)

## Commencez ici

Vous devez installer [npm](https://npmjs.com). Téléchargez une copie de ce code dans un dossier sur votre ordinateur.

Installez tous les packages nécessaires :

```
npm install
```

Construisez l'extension avec webpack :

```
npm run build
```

Pour l'installer sur Edge, utilisez le menu 'trois points' dans le coin supérieur droit du navigateur pour accéder au panneau Extensions. De là, sélectionnez 'Charger un package non empaqueté' pour ajouter une nouvelle extension. Ouvrez le dossier 'dist' lorsque demandé, et l'extension sera chargée. Pour l'utiliser, vous aurez besoin d'une clé API pour l'API CO2 Signal ([obtenez-en une ici par e-mail](https://www.co2signal.com/) - entrez votre e-mail dans la boîte sur cette page) et [le code de votre région](http://api.electricitymap.org/v3/zones) correspondant à [Electricity Map](https://www.electricitymap.org/map) (à Boston, par exemple, j'utilise 'US-NEISO').

![téléchargement en cours](../../../../../5-browser-extension/install-on-edge.png)

Une fois la clé API et la région saisies dans l'interface de l'extension, le point coloré dans la barre d'extension du navigateur changera pour refléter la consommation énergétique de votre région et vous donnera des indications sur les activités énergivores adaptées à ce moment. Le concept derrière ce système de 'point' m'a été inspiré par [l'extension de navigateur Energy Lollipop](https://energylollipop.com/) pour les émissions en Californie.

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.