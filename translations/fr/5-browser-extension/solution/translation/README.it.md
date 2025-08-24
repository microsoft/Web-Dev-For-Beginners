<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9a6b22a2eff0f499b66236be973b24ad",
  "translation_date": "2025-08-23T23:53:06+00:00",
  "source_file": "5-browser-extension/solution/translation/README.it.md",
  "language_code": "fr"
}
-->
# Extension du navigateur Carbon Trigger : code pour commencer

Vous utiliserez l'API Signal CO2 de tmrow pour surveiller l'utilisation de l'électricité et créer une extension de navigateur afin d'avoir un rappel directement dans votre navigateur sur l'impact de l'utilisation de l'électricité dans votre région. L'utilisation de cette extension sur mesure vous aidera à évaluer vos activités en fonction de ces informations.

![capture d'écran de l'extension](../../../../../5-browser-extension/extension-screenshot.png)

## Pour commencer

Assurez-vous que [npm](https://npmjs.com) est installé. Téléchargez une copie de ce code dans un dossier sur votre ordinateur.

Installez tous les paquets nécessaires :

```
npm install
```

Créez l'extension avec webpack :

```
npm run build
```

Pour l'installer sur Edge, utilisez le menu "trois points" dans le coin supérieur droit du navigateur pour accéder au panneau Extensions. Si ce n'est pas déjà activé, activez le Mode développeur (en bas à gauche). Sélectionnez "Charger non empaqueté" pour ajouter une nouvelle extension. Ouvrez le dossier "dist" lorsque le prompt s'affiche, et l'extension sera chargée. Pour l'utiliser, vous aurez besoin d'une clé API pour l'API CO2 Signal (vous pouvez [l'obtenir ici par e-mail](https://www.co2signal.com/) - entrez votre adresse e-mail dans la case sur cette page) ainsi que du [code de votre région](http://api.electricitymap.org/v3/zones) correspondant à la [carte électrique](https://www.electricitymap.org/map) (à Boston, par exemple, "US-NEISO").

![installation](../../../../../5-browser-extension/install-on-edge.png)

Une fois que la clé API et la région ont été saisies dans l'interface de l'extension, le point coloré dans la barre d'extension du navigateur devrait changer pour refléter l'utilisation énergétique de la région et fournir une indication sur les activités à forte consommation énergétique qui seraient appropriées à réaliser. Le concept derrière ce système de "points" a été inspiré par l' [extension Energy Lollipop](https://energylollipop.com/) pour les émissions en Californie.

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.