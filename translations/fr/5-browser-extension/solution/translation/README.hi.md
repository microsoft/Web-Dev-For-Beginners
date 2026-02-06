# Extension de navigateur Carbon Trigger : Code complet

Utilisation de l'API CO2 Signal de tmrow pour suivre la consommation d'électricité, création d'une extension de navigateur qui vous rappelle à quel point l'utilisation de l'électricité est intense dans votre région via votre navigateur. En utilisant cette extension de manière ad hoc, vous pourrez prendre des décisions basées sur ces informations pour ajuster vos activités.

![Capture d'écran de l'extension](../../../../../5-browser-extension/extension-screenshot.png)

## Commencer

Vous devez installer [npm](https://npmjs.com). Téléchargez une copie de ce code dans un dossier sur votre ordinateur.

Installez tous les packages nécessaires :

```
npm install
```

Créez l'extension avec Webpack :

```
npm run build
```

Pour l'installer sur Edge, utilisez le menu 'trois points' en haut à droite du navigateur pour trouver le panneau des extensions. À partir de là, sélectionnez 'Charger sans empaquetage' pour charger une nouvelle extension. Dans l'invite, ouvrez le dossier 'dist' et l'extension sera chargée. Pour l'utiliser, vous aurez besoin d'une clé API pour CO2 Signal ([obtenez-la ici par email](https://www.co2signal.com/) - entrez votre email dans la boîte sur cette page) et [le code de votre région](http://api.electricitymap.org/v3/zones) sur [Electricity Map](https://www.electricitymap.org/map) (par exemple, à Boston, j'utilise 'US-NEISO').

![installation](../../../../../5-browser-extension/install-on-edge.png)

Une fois la clé API et le code de région saisis dans l'interface de l'extension, le point coloré dans la barre d'extension du navigateur devrait changer pour refléter la consommation énergétique de votre région et vous donner un indicateur des activités énergivores qui seraient appropriées. Le concept derrière ce système de 'point' m'a été inspiré par l'extension [Energy Lollipop](https://energylollipop.com/) pour les émissions en Californie.

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.