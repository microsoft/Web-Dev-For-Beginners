<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2581528206a2a01c3a0b9c88e039b7bc",
  "translation_date": "2025-10-03T08:24:52+00:00",
  "source_file": "1-getting-started-lessons/1-intro-to-programming-languages/README.md",
  "language_code": "fr"
}
-->
# Introduction aux langages de programmation et outils du métier

Cette leçon couvre les bases des langages de programmation. Les sujets abordés ici s'appliquent à la plupart des langages de programmation modernes. Dans la section "Outils du métier", vous découvrirez des logiciels utiles pour vous en tant que développeur.

![Intro Programmation](../../../../translated_images/webdev101-programming.d6e3f98e61ac4bff0b27dcbf1c3f16c8ed46984866f2d29988929678b0058fde.fr.png)
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz avant la leçon
[Quiz avant la leçon](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Introduction

Dans cette leçon, nous aborderons :

- Qu'est-ce que la programmation ?
- Les types de langages de programmation
- Les éléments de base d'un programme
- Logiciels et outils utiles pour le développeur professionnel

> Vous pouvez suivre cette leçon sur [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## Qu'est-ce que la programmation ?

La programmation (également appelée codage) est le processus d'écriture d'instructions pour un appareil tel qu'un ordinateur ou un appareil mobile. Nous écrivons ces instructions avec un langage de programmation, qui est ensuite interprété par l'appareil. Ces ensembles d'instructions peuvent être appelés par divers noms, mais *programme*, *programme informatique*, *application (app)* et *exécutable* sont quelques noms populaires.

Un *programme* peut être tout ce qui est écrit avec du code : sites web, jeux, et applications mobiles sont des programmes. Bien qu'il soit possible de créer un programme sans écrire de code, la logique sous-jacente est interprétée par l'appareil et cette logique a très probablement été écrite avec du code. Un programme qui *s'exécute* ou *exécute* du code réalise des instructions. L'appareil avec lequel vous lisez cette leçon exécute un programme pour l'afficher sur votre écran.

✅ Faites une petite recherche : qui est considéré comme le premier programmeur informatique au monde ?

## Langages de programmation

Les langages de programmation permettent aux développeurs d'écrire des instructions pour un appareil. Les appareils ne comprennent que le binaire (1 et 0), et pour *la plupart* des développeurs, ce n'est pas une manière très efficace de communiquer. Les langages de programmation sont le moyen de communication entre les humains et les ordinateurs.

Les langages de programmation existent sous différents formats et peuvent servir à des fins différentes. Par exemple, JavaScript est principalement utilisé pour les applications web, tandis que Bash est principalement utilisé pour les systèmes d'exploitation.

Les *langages de bas niveau* nécessitent généralement moins d'étapes que les *langages de haut niveau* pour qu'un appareil interprète les instructions. Cependant, ce qui rend les langages de haut niveau populaires, c'est leur lisibilité et leur support. JavaScript est considéré comme un langage de haut niveau.

Le code suivant illustre la différence entre un langage de haut niveau avec JavaScript et un langage de bas niveau avec le code assembleur ARM.

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

Croyez-le ou non, *ils font la même chose* : imprimer une séquence de Fibonacci jusqu'à 10.

✅ Une séquence de Fibonacci est [définie](https://en.wikipedia.org/wiki/Fibonacci_number) comme un ensemble de nombres où chaque nombre est la somme des deux précédents, en commençant par 0 et 1. Les 10 premiers nombres suivant la séquence de Fibonacci sont 0, 1, 1, 2, 3, 5, 8, 13, 21 et 34.

## Éléments d'un programme

Une seule instruction dans un programme est appelée une *instruction* et aura généralement un caractère ou un espacement de ligne qui marque où l'instruction se termine, ou *se termine*. La manière dont un programme se termine varie selon chaque langage.

Les instructions dans un programme peuvent dépendre des données fournies par un utilisateur ou ailleurs pour exécuter des instructions. Les données peuvent modifier le comportement d'un programme, c'est pourquoi les langages de programmation incluent un moyen de stocker temporairement des données pour qu'elles puissent être utilisées ultérieurement. Ce sont les *variables*. Les variables sont des instructions qui demandent à un appareil de sauvegarder des données dans sa mémoire. Les variables dans les programmes sont similaires aux variables en algèbre, où elles ont un nom unique et leur valeur peut changer au fil du temps.

Il est possible que certaines instructions ne soient pas exécutées par un appareil. Cela se produit généralement par conception lorsqu'elles sont écrites par le développeur ou par accident lorsqu'une erreur inattendue survient. Ce type de contrôle sur une application la rend plus robuste et maintenable. En général, ces changements de contrôle se produisent lorsque certaines conditions sont remplies. Une instruction courante utilisée dans la programmation moderne pour contrôler le fonctionnement d'un programme est l'instruction `if..else`.

✅ Vous en apprendrez davantage sur ce type d'instruction dans les leçons suivantes.

## Outils du métier

[![Outils du métier](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Outils du métier")

> 🎥 Cliquez sur l'image ci-dessus pour une vidéo sur les outils

Dans cette section, vous découvrirez certains logiciels que vous pourriez trouver très utiles au début de votre parcours de développement professionnel.

Un **environnement de développement** est un ensemble unique d'outils et de fonctionnalités qu'un développeur utilise souvent lorsqu'il écrit des logiciels. Certains de ces outils ont été personnalisés pour répondre aux besoins spécifiques d'un développeur et peuvent évoluer avec le temps si ce développeur change de priorités dans son travail, ses projets personnels ou lorsqu'il utilise un langage de programmation différent. Les environnements de développement sont aussi uniques que les développeurs qui les utilisent.

### Éditeurs

L'un des outils les plus cruciaux pour le développement logiciel est l'éditeur. Les éditeurs sont l'endroit où vous écrivez votre code et parfois où vous exécutez votre code.

Les développeurs s'appuient sur les éditeurs pour plusieurs raisons supplémentaires :

- Le *débogage* aide à découvrir les bugs et les erreurs en parcourant le code, ligne par ligne. Certains éditeurs ont des capacités de débogage ; ils peuvent être personnalisés et ajoutés pour des langages de programmation spécifiques.
- La *coloration syntaxique* ajoute des couleurs et des formats de texte au code, le rendant plus facile à lire. La plupart des éditeurs permettent une coloration syntaxique personnalisée.
- Les *extensions et intégrations* sont des outils spécialisés pour les développeurs, créés par des développeurs. Ces outils n'ont pas été intégrés dans l'éditeur de base. Par exemple, de nombreux développeurs documentent leur code pour expliquer son fonctionnement. Ils peuvent installer une extension de vérification orthographique pour repérer les fautes de frappe dans la documentation. La plupart des extensions sont destinées à être utilisées dans un éditeur spécifique, et la plupart des éditeurs permettent de rechercher les extensions disponibles.
- La *personnalisation* permet aux développeurs de créer un environnement de développement unique adapté à leurs besoins. La plupart des éditeurs sont extrêmement personnalisables et peuvent également permettre aux développeurs de créer des extensions personnalisées.

#### Éditeurs populaires et extensions pour le développement web

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [Sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Navigateurs

Un autre outil crucial est le navigateur. Les développeurs web s'appuient sur le navigateur pour voir comment leur code s'exécute sur le web. Il est également utilisé pour afficher les éléments visuels d'une page web écrits dans l'éditeur, comme le HTML.

De nombreux navigateurs sont équipés d'*outils de développement* (DevTools) qui contiennent un ensemble de fonctionnalités utiles et d'informations pour aider les développeurs à collecter et capturer des informations importantes sur leur application. Par exemple : Si une page web contient des erreurs, il est parfois utile de savoir quand elles se sont produites. Les DevTools d'un navigateur peuvent être configurés pour capturer ces informations.

#### Navigateurs populaires et DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Outils en ligne de commande

Certains développeurs préfèrent une vue moins graphique pour leurs tâches quotidiennes et s'appuient sur la ligne de commande pour y parvenir. Écrire du code nécessite une quantité importante de saisie et certains développeurs préfèrent ne pas interrompre leur flux sur le clavier. Ils utiliseront des raccourcis clavier pour basculer entre les fenêtres du bureau, travailler sur différents fichiers et utiliser des outils. La plupart des tâches peuvent être effectuées avec une souris, mais un avantage de la ligne de commande est qu'il est possible de réaliser beaucoup de choses avec des outils en ligne de commande sans avoir besoin de basculer entre la souris et le clavier. Un autre avantage de la ligne de commande est qu'elle est configurable et qu'il est possible de sauvegarder une configuration personnalisée, de la modifier ultérieurement et de l'importer sur d'autres machines de développement. Étant donné que les environnements de développement sont si uniques à chaque développeur, certains éviteront d'utiliser la ligne de commande, d'autres s'y fieront entièrement, et certains préféreront un mélange des deux.

### Options populaires pour la ligne de commande

Les options pour la ligne de commande diffèrent selon le système d'exploitation que vous utilisez.

*💻 = préinstallé sur le système d'exploitation.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (également connu sous le nom de CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Outils populaires en ligne de commande

- [Git](https://git-scm.com/) (💻 sur la plupart des systèmes d'exploitation)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentation

Lorsqu'un développeur souhaite apprendre quelque chose de nouveau, il se tournera probablement vers la documentation pour apprendre à l'utiliser. Les développeurs s'appuient souvent sur la documentation pour les guider sur la manière d'utiliser correctement les outils et les langages, et aussi pour approfondir leurs connaissances sur leur fonctionnement.

#### Documentation populaire sur le développement web

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), de Mozilla, les éditeurs du navigateur [Firefox](https://www.mozilla.org/firefox/)
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), de Google, éditeurs de [Chrome](https://www.google.com/chrome/)
- [Documentation pour développeurs de Microsoft](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), pour [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Faites des recherches : Maintenant que vous connaissez les bases de l'environnement d'un développeur web, comparez-le avec celui d'un designer web.

---

## 🚀 Défi

Comparez quelques langages de programmation. Quelles sont les caractéristiques uniques de JavaScript par rapport à Java ? Et de COBOL par rapport à Go ?

## Quiz après la leçon
[Quiz après la leçon](https://ff-quizzes.netlify.app/web/)

## Révision et étude personnelle

Étudiez un peu les différents langages disponibles pour le programmeur. Essayez d'écrire une ligne dans un langage, puis réécrivez-la dans deux autres. Qu'avez-vous appris ?

## Devoir

[Lire la documentation](assignment.md)

> Remarque : Lors de la sélection des outils pour votre devoir, ne choisissez pas les éditeurs, navigateurs ou outils en ligne de commande déjà listés ci-dessus.

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.