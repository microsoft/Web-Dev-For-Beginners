# Extension de navigateur Carbon Trigger : Code complet

En utilisant l'API CO2 Signal de tmrow pour suivre la consommation d'électricité, créez une extension de navigateur afin d'avoir un rappel directement dans votre navigateur sur la consommation électrique de votre région. L'utilisation de cette extension ad hoc vous aidera à prendre des décisions concernant vos activités en fonction de ces informations.

![capture d'écran de l'extension](../../../../../5-browser-extension/solution/start/extension-screenshot.png)

## Pour commencer

Vous devrez avoir [npm](https://npmjs.com) installé. Téléchargez une copie de ce code dans un dossier sur votre ordinateur.

Installez tous les paquets nécessaires :

```
npm install
```

Construisez l'extension avec webpack :

```
npm run build
```

Pour l'installer sur Edge, utilisez le menu des 'trois points' dans le coin supérieur droit du navigateur pour accéder au panneau Extensions. De là, sélectionnez 'Charger sans empaquetage' pour ajouter une nouvelle extension. Ouvrez le dossier 'dist' lorsque cela vous est demandé, et l'extension sera chargée. Pour l'utiliser, vous aurez besoin d'une clé API pour l'API CO2 Signal ([obtenez-en une ici par e-mail](https://www.co2signal.com/) - entrez votre adresse e-mail dans le champ sur cette page) ainsi que du [code de votre région](http://api.electricitymap.org/v3/zones) correspondant à la [carte de l'électricité](https://www.electricitymap.org/map) (à Boston, par exemple, j'utilise 'US-NEISO').

![installation](../../../../../5-browser-extension/solution/start/install-on-edge.png)

Une fois que la clé API et la région sont saisies dans l'interface de l'extension, le point coloré dans la barre d'extension du navigateur devrait changer pour refléter la consommation d'énergie de votre région et vous donner une indication sur les activités à forte consommation d'énergie qui seraient appropriées pour vous. Le concept derrière ce système de "points" m'a été inspiré par l'[extension Energy Lollipop](https://energylollipop.com/) pour les émissions en Californie.

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.