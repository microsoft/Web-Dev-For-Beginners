# Introduction aux langages de programmation et aux outils du métier

Cette leçon couvre les bases des langages de programmation. Les sujets abordés ici s'appliquent à la plupart des langages de programmation modernes d'aujourd'hui. Dans la section «Outils du métier», vous découvrirez des logiciels utiles qui vous aideront en tant que développeur.

![Intro Programming](/sketchnotes/webdev101-programming.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz préalable
[Quiz préalable](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1?loc=fr)

## introduction

Dans cette leçon, nous aborderons:

- Qu'est-ce que la programmation?
- Types de langages de programmation
- Éléments de base d'un programme
- Logiciel et outillage utiles pour le développeur professionnel

## Qu'est-ce que la programmation?

La programmation (également appelée codage) est le processus d'écriture d'instructions sur un appareil, tel qu'un ordinateur ou un appareil mobile. Nous écrivons ces instructions avec un langage de programmation, qui est ensuite interprété par l'appareil. Ces ensembles d'instructions peuvent être désignés sous différents noms, mais *programme*, *programme informatique*, *application (application)* et *exécutable* sont quelques noms courants.

Un *programme* peut être tout ce qui est écrit avec du code; les sites Web, les jeux et les applications téléphoniques sont des programmes. Bien qu'il soit possible de créer un programme sans écrire de code, la logique sous-jacente est interprétée sur le périphérique et cette logique a probablement été écrite avec du code. Un programme qui *exécute* ou *exécute du code* exécute des instructions. L'appareil avec lequel vous lisez actuellement cette leçon exécute un programme pour l'imprimer sur votre écran.

✅ Faites une petite recherche: qui est considéré comme le premier programmeur informatique au monde?

## Langages de programmation

Les langages de programmation ont un objectif principal: permettre aux développeurs de créer des instructions à envoyer à un appareil. Les appareils ne peuvent comprendre que le binaire (1 et 0), et pour *la plupart* les développeurs, ce n'est pas un moyen très efficace de communiquer. Les langages de programmation sont un vecteur de communication entre les humains et les ordinateurs.

Les langages de programmation se présentent sous différents formats et peuvent servir à des fins différentes. Par exemple, JavaScript est principalement utilisé pour les applications Web, tandis que Bash est principalement utilisé pour les systèmes d'exploitation.

*Les langues de bas niveau* nécessitent généralement moins d'étapes que les *langues de haut niveau* pour qu'un appareil interprète les instructions. Cependant, ce qui rend les langages de haut niveau populaires, c'est leur lisibilité et leur support. JavaScript est considéré comme un langage de haut niveau.

Le code suivant illustre la différence entre un langage de haut niveau avec JavaScript et un langage de bas niveau avec le code d'assembly ARM.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Croyez-le ou non, *ils font tous les deux la même chose*: l'affichage d'une séquence de Fibonacci jusqu'à 10.

✅ Une séquence de Fibonacci est [définie](https://en.wikipedia.org/wiki/Fibonacci_number) comme un ensemble de nombres tels que chaque nombre est la somme des deux précédents, à partir de 0 et 1.

## Éléments d'un programme

Une seule instruction dans un programme est appelée une *instruction* et aura généralement un caractère ou un interligne qui marque où l'instruction se termine, ou *se termine*. La façon dont un programme se termine varie avec chaque langue.

La plupart des programmes reposent sur l'utilisation des données d'un utilisateur ou d'ailleurs, où les déclarations peuvent s'appuyer sur des données pour exécuter des instructions. Les données peuvent modifier le comportement d'un programme, de sorte que les langages de programmation proposent un moyen de stocker temporairement des données pouvant être utilisées ultérieurement. Ces données sont appelées *variables*. Les variables sont des instructions qui demandent à un appareil d'enregistrer des données dans sa mémoire. Les variables des programmes sont similaires à celles de l'algèbre, où elles ont un nom unique et leur valeur peut changer avec le temps.

Il est possible que certaines instructions ne soient pas exécutées par un périphérique. C'est généralement par conception lors de l'écriture par le développeur ou par accident lorsqu'une erreur inattendue se produit. Ce type de contrôle d'une application la rend plus robuste et maintenable. Généralement, ces changements de contrôle se produisent lorsque certaines décisions sont respectées. Une instruction courante dans les langages de programmation modernes pour contrôler la manière dont un programme est exécuté est l'instruction `if..else`.

✅ Vous en apprendrez plus sur ce type d'énoncé dans les leçons suivantes

## Outils métier

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

Dans cette section, vous découvrirez certains logiciels que vous pourriez trouver très utiles au début de votre parcours de développement professionnel.

Un **environnement de développement** est un ensemble unique d'outils et de fonctionnalités qu'un développeur utilisera souvent lors de l'écriture d'un logiciel. Certains de ces outils ont été personnalisés pour les besoins spécifiques d'un développeur et peuvent changer au fil du temps si un développeur change de priorités dans ses projets professionnels ou personnels, ou lorsqu'il utilise un langage de programmation différent. Les environnements de développement sont aussi uniques que les développeurs qui les utilisent.

### éditeurs

L'éditeur est l'un des outils les plus cruciaux pour le développement logiciel. Les éditeurs sont l'endroit où vous écrivez votre code et parfois où vous exécuterez votre code.

Les développeurs comptent sur les éditeurs pour quelques raisons supplémentaires:

- *Débogage* Découverte des bogues et des erreurs en parcourant le code, ligne par ligne. Certains éditeurs ont des capacités de débogage ou peuvent être personnalisés et ajoutés pour des langages de programmation spécifiques.
- *Mise en évidence de la syntaxe* Ajoute des couleurs et la mise en forme du texte au code, le rend plus facile à lire. La plupart des éditeurs permettent une coloration syntaxique personnalisée.
- *Extensions et intégrations* Ajouts spécialisés pour les développeurs, par les développeurs, pour accéder à des outils supplémentaires qui ne sont pas intégrés à l'éditeur de base. Par exemple, de nombreux développeurs ont également besoin d'un moyen de documenter leur code et d'expliquer comment il fonctionne et installeront une extension de vérification orthographique pour vérifier les fautes de frappe. La plupart de ces ajouts sont destinés à être utilisés dans un éditeur spécifique, et la plupart des éditeurs proposent un moyen de rechercher les extensions disponibles.
- *Personnalisation* La plupart des éditeurs sont extrêmement personnalisables, et chaque développeur aura son propre environnement de développement unique qui répond à ses besoins. Beaucoup permettent également aux développeurs de créer leur propre extension.

#### Éditeurs et extensions de développement Web populaires

- [Visual Studio Code](https://code.visualstudio.com/)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)

### Navigateurs

Un autre outil crucial est le navigateur. Les développeurs Web comptent sur le navigateur pour observer comment leur code s'exécute sur le Web, il est également utilisé pour afficher les éléments visuels d'une page Web qui sont écrits dans l'éditeur, comme le HTML.

De nombreux navigateurs sont livrés avec des *outils de développement* (DevTools) qui contiennent un ensemble de fonctionnalités et d'informations utiles pour aider les développeurs à collecter et capturer des informations importantes sur leur application. Par exemple: si une page Web contient des erreurs, il est parfois utile de savoir quand elles se sont produites. DevTools dans un navigateur peut être configuré pour capturer ces informations.
#### Navigateurs et outils de développement populaires

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### ligne de commande

Certains développeurs préfèrent une vue moins graphique pour leurs tâches quotidiennes et comptent sur la ligne de commande pour y parvenir. Le développement de code nécessite une quantité importante de saisie, et certains développeurs préfèrent ne pas perturber leur flux sur le clavier et utiliseront des raccourcis clavier pour basculer entre les fenêtres du bureau, travailler sur différents fichiers et utiliser des outils. La plupart des tâches peuvent être effectuées avec une souris, mais un avantage de l'utilisation de la ligne de commande est que beaucoup peut être fait avec des outils de ligne de commande sans avoir besoin de permuter entre la souris et le clavier. Un autre avantage de la ligne de commande est qu'elle est configurable et que vous pouvez enregistrer votre configuration personnalisée, la modifier ultérieurement et également l'importer sur de nouvelles machines de développement. Parce que les environnements de développement sont si uniques à chaque développeur, certains éviteront d'utiliser la ligne de commande, certains s'y fieront entièrement, et certains préfèrent un mélange des deux.

### Options de ligne de commande populaires

Les options de la ligne de commande varient en fonction du système d'exploitation que vous utilisez.

*💻 = est préinstallé sur le système d'exploitation.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands?WT.mc_id=academic-77807-sagibbon) (appellé également CMD) 💻
- [Terminal Windows](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7?WT.mc_id=academic-77807-sagibbon)

#### Command Line Tools ( CLI ) populaires

- [Git](https://git-scm.com/) (💻 sur la plupart des SE)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentation

Lorsqu'un développeur souhaite apprendre quelque chose de nouveau, il se tournera très probablement vers la documentation pour apprendre à l'utiliser. Les développeurs s'appuient souvent sur la documentation pour les guider pour utiliser correctement les outils et les langages, et également pour acquérir une connaissance plus approfondie de son fonctionnement.

#### Documentations populaires sur le développement Web

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), de Mozilla, éditeurs de [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), de Google, éditeurs de [Chrome](https://www.google.com/chrome/)
- [Documents de développeur de Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), pour [Microsoft Edge](https://www.microsoft.com/edge)

✅ Faites des recherches: maintenant que vous connaissez les bases de l'environnement d'un développeur Web, comparez-le à l'environnement d'un concepteur Web.

---

## 🚀 Défi

Comparez quelques langages de programmation. Quelles sont les caractéristiques uniques de JavaScript par rapport à Java? Et COBOL vs Go?

## Quiz de validation des connaissances
[Quiz de validation des connaissances](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2?loc=fr)

## Révision et auto-apprentissage

Étudiez un peu les différentes langues disponibles pour le programmeur. Essayez d'écrire une ligne dans une langue, puis refaites-la dans deux autres. Qu'apprenez-vous?

## Consigne

[Lire la documentation](assignment.fr.md)
