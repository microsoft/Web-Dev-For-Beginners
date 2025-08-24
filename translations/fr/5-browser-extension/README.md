<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "b121a279a6ab39878491f3e572673515",
  "translation_date": "2025-08-23T23:37:32+00:00",
  "source_file": "5-browser-extension/README.md",
  "language_code": "fr"
}
-->
# Créer une extension de navigateur

Créer des extensions de navigateur est une manière amusante et intéressante de réfléchir à la performance de vos applications tout en développant un type différent de ressource web. Ce module comprend des leçons sur le fonctionnement des navigateurs, le déploiement d'une extension de navigateur, la création d'un formulaire, l'appel d'une API, l'utilisation du stockage local, ainsi que l'évaluation et l'amélioration des performances de votre site web.

Vous allez créer une extension de navigateur qui fonctionne sur Edge, Chrome et Firefox. Cette extension, qui ressemble à un mini site web conçu pour une tâche très spécifique, interroge l'[API CO2 Signal](https://www.co2signal.com) pour obtenir les données sur l'utilisation de l'électricité et l'intensité carbone d'une région donnée, et fournit une lecture de l'empreinte carbone de cette région.

Cette extension peut être utilisée ponctuellement par un utilisateur après avoir saisi une clé API et un code de région dans un formulaire, afin de déterminer l'utilisation locale de l'électricité et ainsi fournir des données pouvant influencer les décisions énergétiques de l'utilisateur. Par exemple, il pourrait être préférable de retarder l'utilisation d'un sèche-linge (une activité à forte intensité carbone) pendant une période de forte consommation d'électricité dans votre région.

### Sujets

1. [À propos des navigateurs](1-about-browsers/README.md)
2. [Formulaires et stockage local](2-forms-browsers-local-storage/README.md)
3. [Tâches en arrière-plan et performance](3-background-tasks-and-performance/README.md)

### Crédits

![une extension de navigateur verte](../../../5-browser-extension/extension-screenshot.png)

## Crédits

L'idée de ce déclencheur carbone web a été proposée par Asim Hussain, responsable chez Microsoft de l'équipe Green Cloud Advocacy et auteur des [Green Principles](https://principles.green/). À l'origine, il s'agissait d'un [projet de site web](https://github.com/jlooper/green).

La structure de l'extension de navigateur a été influencée par l'[extension COVID d'Adebola Adeniran](https://github.com/onedebos/covtension).

Le concept derrière le système d'icônes en "point" a été suggéré par la structure d'icônes de l'extension de navigateur [Energy Lollipop](https://energylollipop.com/) pour les émissions en Californie.

Ces leçons ont été écrites avec ♥️ par [Jen Looper](https://www.twitter.com/jenlooper)

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.