<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9361268ca430b2579375009e1eceb5e5",
  "translation_date": "2025-08-23T23:52:15+00:00",
  "source_file": "5-browser-extension/solution/translation/README.fr.md",
  "language_code": "fr"
}
-->
# Extension de navigateur Carbon Trigger : Code Complété

En utilisant l'API CO2 Signal de tmrow pour suivre la consommation d'électricité, créez une extension de navigateur afin d'avoir un rappel directement dans votre navigateur sur la consommation d'électricité de votre région. L'utilisation de cette extension vous aidera à prendre des décisions éclairées sur vos activités en fonction de ces informations.

![capture d'extension](../../../../../5-browser-extension/extension-screenshot.png)

## Pour commencer

Vous devrez avoir [npm](https://npmjs.com) installé. Téléchargez une copie de ce code dans un dossier de votre ordinateur.

Installez tous les packages requis :

```
npm install
```

Construisez l'extension avec webpack :

```
npm run build
```

Pour installer sur Edge, utilisez le menu 'trois points' dans le coin supérieur droit du navigateur pour accéder au panneau Extensions. À partir de là, sélectionnez 'Charger l'extension décompressée' pour ajouter une nouvelle extension. Ouvrez le dossier 'dist' lorsque vous y êtes invité, et l'extension se chargera. Pour l'utiliser, vous aurez besoin d'une clé API pour l'API CO2 Signal ([obtenez-en une ici par e-mail](https://www.co2signal.com/) - entrez votre e-mail dans la case sur cette page) et du [code pour votre région](http://api.electricitymap.org/v3/zones) correspondant à la [Carte de l'électricité](https://www.electricitymap.org/map) (à Boston, par exemple, j'utilise 'US-NEISO').

![installation](../../../../../5-browser-extension/install-on-edge.png)

Une fois que la clé API et la région sont saisies dans l'interface de l'extension, le point coloré dans la barre d'extension du navigateur devrait changer pour refléter la consommation d'énergie de votre région. Cela vous donnera un indicateur sur les activités énergivores qu'il serait pertinent d'effectuer. Le concept derrière ce système de 'points' m'a été inspiré par l'[extension Energy Lollipop](https://energylollipop.com/) pour les émissions en Californie.

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.