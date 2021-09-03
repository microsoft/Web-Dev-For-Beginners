# Extension de navigateur Carbon Trigger: Completed Code

En utilisant l'API C02 Signal de tmrow pour suivre la consommation d'électricité, créez une extension de navigateur afin que vous puissiez avoir un rappel directement dans votre navigateur sur la consommation d'électricité de votre région. L'utilisation de cette extension ad hoc vous aidera à porter un jugement sur vos activités sur la base de ces informations.

![capture d'extension](../../extension-screenshot.png)

## Débuter

Vous devrez avoir [npm](https://npmjs.com) installé. Téléchargez une copie de ce code dans un dossier de votre ordinateur.

Installez tous les packages requis :

```
npm install
```

Build the extension from webpack

```
npm run build
```

Pour installer sur Edge, utilisez le menu 'trois points' dans le coin supérieur droit du navigateur pour trouver le panneau Extensions. À partir de là, sélectionnez 'Charger l'extension décompressée' pour charger une nouvelle extension. Ouvrez le dossier 'dist' à l'invite et l'extension se chargera. Pour l'utiliser, vous aurez besoin d'une clé API pour l'API de CO2 Signal ([obtenez-en une ici par e-mail](https://www.co2signal.com/) - entrez votre e-mail dans la case sur cette page) et le [code pour votre région](http://api.electricitymap.org/v3/zones) correspondant à la [Carte de l'électricité](https://www.electricitymap.org/map) (à Boston, par exemple, j'utilise 'US- NEISO').

![installation](../../install-on-edge.png)

Une fois que la clé API et la région sont entrées dans l'interface d'extension, le point coloré dans la barre d'extension du navigateur doit changer pour refléter la consommation d'énergie de votre région et vous donner un indicateur sur les activités énergivores qu'il vous serait approprié d'effectuer. Le concept derrière ce système de 'points' m'a été donné par l'[extension Energy Lollipop](https://energylollipop.com/) pour les émissions californiennes.

