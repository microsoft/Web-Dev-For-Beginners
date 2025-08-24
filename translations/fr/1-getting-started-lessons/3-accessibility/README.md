<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-23T23:23:25+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "fr"
}
-->
# Créer des pages web accessibles

![Tout sur l'accessibilité](../../../../sketchnotes/webdev101-a11y.png)  
> Sketchnote par [Tomomi Imura](https://twitter.com/girlie_mac)

## Quiz avant le cours  
[Quiz avant le cours](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> La puissance du Web réside dans son universalité. L'accès pour tous, indépendamment des handicaps, est un aspect essentiel.  
>  
> \- Sir Timothy Berners-Lee, directeur du W3C et inventeur du World Wide Web  

Cette citation illustre parfaitement l'importance de créer des sites web accessibles. Une application qui ne peut pas être utilisée par tous est, par définition, exclusive. En tant que développeurs web, nous devons toujours garder l'accessibilité à l'esprit. En adoptant cette approche dès le début, vous serez bien préparé pour garantir que tout le monde puisse accéder aux pages que vous créez. Dans cette leçon, vous apprendrez à utiliser des outils pour garantir l'accessibilité de vos ressources web et à concevoir en tenant compte de l'accessibilité.

> Vous pouvez suivre cette leçon sur [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon) !

## Outils à utiliser

### Lecteurs d'écran

Les lecteurs d'écran sont parmi les outils d'accessibilité les plus connus.

[Les lecteurs d'écran](https://fr.wikipedia.org/wiki/Lecteur_d%27%C3%A9cran) sont des outils couramment utilisés par les personnes ayant des déficiences visuelles. Tout comme nous nous assurons qu'un navigateur transmet correctement les informations que nous souhaitons partager, nous devons également veiller à ce qu'un lecteur d'écran fasse de même.

Dans sa forme la plus basique, un lecteur d'écran lit une page de haut en bas de manière audible. Si votre page est entièrement composée de texte, le lecteur transmettra les informations de manière similaire à un navigateur. Bien sûr, les pages web ne sont que rarement composées uniquement de texte ; elles contiennent des liens, des images, des couleurs et d'autres éléments visuels. Il est donc essentiel de s'assurer que ces informations sont correctement interprétées par un lecteur d'écran.

Chaque développeur web devrait se familiariser avec un lecteur d'écran. Comme mentionné précédemment, c'est l'outil que vos utilisateurs utiliseront. De la même manière que vous connaissez le fonctionnement d'un navigateur, vous devriez apprendre à utiliser un lecteur d'écran. Heureusement, la plupart des systèmes d'exploitation intègrent des lecteurs d'écran.

Certains navigateurs disposent également d'outils intégrés et d'extensions capables de lire le texte à haute voix ou de fournir des fonctionnalités de navigation de base, comme [ces outils d'accessibilité pour le navigateur Edge](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). Bien qu'importants, ces outils fonctionnent différemment des lecteurs d'écran et ne doivent pas être confondus avec des outils de test pour lecteurs d'écran.

✅ Essayez un lecteur d'écran et un outil de lecture de texte dans un navigateur. Sous Windows, [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) est inclus par défaut, et [JAWS](https://webaim.org/articles/jaws/) et [NVDA](https://www.nvaccess.org/about-nvda/) peuvent également être installés. Sous macOS et iOS, [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) est installé par défaut.

### Zoom

Un autre outil couramment utilisé par les personnes ayant des déficiences visuelles est le zoom. Le type de zoom le plus basique est le zoom statique, contrôlé via `Control + signe plus (+)` ou en diminuant la résolution de l'écran. Ce type de zoom redimensionne l'ensemble de la page, il est donc important d'utiliser un [design responsive](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) pour offrir une bonne expérience utilisateur à des niveaux de zoom élevés.

Un autre type de zoom repose sur des logiciels spécialisés qui agrandissent une zone spécifique de l'écran et permettent de se déplacer, un peu comme avec une loupe. Sous Windows, [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) est intégré, et [ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) est un logiciel tiers de grossissement avec plus de fonctionnalités et une base d'utilisateurs plus large. macOS et iOS disposent également d'un logiciel de grossissement intégré appelé [Zoom](https://www.apple.com/accessibility/mac/vision/).

### Vérificateurs de contraste

Les couleurs des sites web doivent être soigneusement choisies pour répondre aux besoins des utilisateurs daltoniens ou de ceux ayant des difficultés à percevoir les couleurs à faible contraste.

✅ Testez un site web que vous aimez avec une extension de navigateur comme [le vérificateur de contraste WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). Qu'avez-vous appris ?

### Lighthouse

Dans la section des outils de développement de votre navigateur, vous trouverez l'outil Lighthouse. Cet outil est important pour obtenir une première analyse de l'accessibilité (ainsi que d'autres aspects) d'un site web. Bien qu'il ne faille pas se fier exclusivement à Lighthouse, un score de 100 % est un bon point de départ.

✅ Trouvez Lighthouse dans le panneau des outils de développement de votre navigateur et analysez un site. Qu'avez-vous découvert ?

## Concevoir pour l'accessibilité

L'accessibilité est un sujet relativement vaste. Pour vous aider, de nombreuses ressources sont disponibles.

- [Accessible U - Université du Minnesota](https://accessibility.umn.edu/your-role/web-developers)

Bien que nous ne puissions pas couvrir tous les aspects de la création de sites accessibles, voici quelques principes de base que vous voudrez mettre en œuvre. Concevoir une page accessible dès le départ est **toujours** plus facile que de revenir sur une page existante pour la rendre accessible.

## Bonnes pratiques d'affichage

### Palettes de couleurs sûres

Les gens perçoivent le monde différemment, y compris les couleurs. Lorsque vous choisissez un schéma de couleurs pour votre site, assurez-vous qu'il soit accessible à tous. Un excellent [outil pour générer des palettes de couleurs est Color Safe](http://colorsafe.co/).

✅ Identifiez un site web qui pose problème dans son utilisation des couleurs. Pourquoi ?

### Utilisez le bon HTML

Avec CSS et JavaScript, il est possible de faire ressembler n'importe quel élément à n'importe quel type de contrôle. `<span>` pourrait être utilisé pour créer un `<button>`, et `<b>` pourrait devenir un lien hypertexte. Bien que cela puisse sembler plus facile à styliser, cela ne transmet rien à un lecteur d'écran. Utilisez le HTML approprié lorsque vous créez des contrôles sur une page. Si vous voulez un lien hypertexte, utilisez `<a>`. Utiliser le bon HTML pour le bon contrôle s'appelle utiliser du HTML sémantique.

✅ Allez sur un site web et vérifiez si les concepteurs et développeurs utilisent correctement le HTML. Pouvez-vous trouver un bouton qui devrait être un lien ? Astuce : faites un clic droit et choisissez "Afficher le code source de la page" dans votre navigateur pour examiner le code sous-jacent.

### Créez une hiérarchie de titres descriptive

Les utilisateurs de lecteurs d'écran [s'appuient fortement sur les titres](https://webaim.org/projects/screenreadersurvey8/#finding) pour trouver des informations et naviguer sur une page. Rédiger un contenu de titre descriptif et utiliser des balises de titre sémantiques sont essentiels pour créer un site facilement navigable pour les utilisateurs de lecteurs d'écran.

### Utilisez de bons indices visuels

CSS offre un contrôle total sur l'apparence de tout élément d'une page. Vous pouvez créer des zones de texte sans contour ou des liens hypertexte sans soulignement. Malheureusement, supprimer ces indices peut rendre plus difficile pour quelqu'un qui en dépend de reconnaître le type de contrôle.

## L'importance du texte des liens

Les liens hypertexte sont essentiels pour naviguer sur le web. Par conséquent, s'assurer qu'un lecteur d'écran peut correctement lire les liens permet à tous les utilisateurs de naviguer sur votre site.

### Lecteurs d'écran et liens

Comme on pourrait s'y attendre, les lecteurs d'écran lisent le texte des liens de la même manière qu'ils lisent tout autre texte sur la page. Avec cela en tête, le texte démontré ci-dessous pourrait sembler parfaitement acceptable.

> Le petit manchot, parfois appelé manchot féerique, est le plus petit manchot du monde. [Cliquez ici](https://fr.wikipedia.org/wiki/Manchot_bleu) pour plus d'informations.

> Le petit manchot, parfois appelé manchot féerique, est le plus petit manchot du monde. Visitez https://fr.wikipedia.org/wiki/Manchot_bleu pour plus d'informations.

> **NOTE** Comme vous êtes sur le point de le lire, vous ne devriez **jamais** créer de liens ressemblant à ceux ci-dessus.

Rappelez-vous, les lecteurs d'écran sont une interface différente des navigateurs avec un ensemble de fonctionnalités différent.

### Le problème avec l'utilisation de l'URL

Les lecteurs d'écran lisent le texte. Si une URL apparaît dans le texte, le lecteur d'écran lira l'URL. En général, l'URL ne transmet pas d'informations significatives et peut être agaçante. Vous avez peut-être déjà vécu cela si votre téléphone a lu à haute voix un message texte contenant une URL.

### Le problème avec "cliquez ici"

Les lecteurs d'écran ont également la capacité de lire uniquement les liens hypertexte d'une page, un peu comme une personne voyante scannerait une page à la recherche de liens. Si le texte des liens est toujours "cliquez ici", tout ce que l'utilisateur entendra sera "cliquez ici, cliquez ici, cliquez ici, cliquez ici, cliquez ici, ..." Tous les liens deviennent alors indiscernables les uns des autres.

### Bon texte de lien

Un bon texte de lien décrit brièvement ce qui se trouve de l'autre côté du lien. Dans l'exemple ci-dessus parlant des petits manchots, le lien mène à la page Wikipédia sur l'espèce. L'expression *petit manchot* serait un excellent texte de lien car elle indique clairement ce que quelqu'un apprendra en cliquant sur le lien - les petits manchots.

> Le [petit manchot](https://fr.wikipedia.org/wiki/Manchot_bleu), parfois appelé manchot féerique, est le plus petit manchot du monde.

✅ Naviguez sur le web pendant quelques minutes pour trouver des pages utilisant des stratégies de lien obscures. Comparez-les avec d'autres sites mieux conçus. Qu'avez-vous appris ?

#### Notes pour les moteurs de recherche

En bonus, en veillant à ce que votre site soit accessible à tous, vous aiderez également les moteurs de recherche à naviguer sur votre site. Les moteurs de recherche utilisent le texte des liens pour comprendre les sujets des pages. Ainsi, utiliser un bon texte de lien aide tout le monde !

### ARIA

Imaginez la page suivante :

| Produit      | Description        | Commander    |
| ------------ | ------------------ | ------------ |
| Widget       | [Description](../../../../1-getting-started-lessons/3-accessibility/') | [Commander](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [Description](../../../../1-getting-started-lessons/3-accessibility/') | [Commander](../../../../1-getting-started-lessons/3-accessibility/') |

Dans cet exemple, dupliquer le texte de description et commander a du sens pour quelqu'un utilisant un navigateur. Cependant, une personne utilisant un lecteur d'écran n'entendrait que les mots *description* et *commander* répétés sans contexte.

Pour prendre en charge ces types de scénarios, le HTML prend en charge un ensemble d'attributs appelés [Applications Internet Riches Accessibles (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). Ces attributs permettent de fournir des informations supplémentaires aux lecteurs d'écran.

> **NOTE** : Comme pour de nombreux aspects du HTML, la prise en charge par les navigateurs et les lecteurs d'écran peut varier. Cependant, la plupart des clients principaux prennent en charge les attributs ARIA.

Vous pouvez utiliser `aria-label` pour décrire le lien lorsque le format de la page ne le permet pas. La description pour widget pourrait être définie comme :

``` html
<a href="#" aria-label="Widget description">description</a>
```

✅ En général, utiliser un balisage sémantique comme décrit ci-dessus remplace l'utilisation d'ARIA, mais parfois il n'existe pas d'équivalent sémantique pour certains widgets HTML. Un bon exemple est un arbre. Il n'existe pas d'équivalent HTML pour un arbre, donc vous identifiez le `<div>` générique pour cet élément avec un rôle et des valeurs ARIA appropriés. La [documentation MDN sur ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) contient plus d'informations utiles.

```html
<h2 id="tree-label">File Viewer</h2>
<div role="tree" aria-labelledby="tree-label">
  <div role="treeitem" aria-expanded="false" tabindex="0">Uploads</div>
</div>
```

## Images

Il va sans dire que les lecteurs d'écran ne peuvent pas lire automatiquement ce qu'il y a dans une image. Rendre les images accessibles ne demande pas beaucoup de travail - c'est tout l'intérêt de l'attribut `alt`. Toutes les images significatives doivent avoir un `alt` pour décrire ce qu'elles représentent.  
Les images purement décoratives doivent avoir leur attribut `alt` défini sur une chaîne vide : `alt=""`. Cela empêche les lecteurs d'écran d'annoncer inutilement l'image décorative.

✅ Comme vous pouvez vous y attendre, les moteurs de recherche ne peuvent pas non plus comprendre ce qu'il y a dans une image. Ils utilisent également le texte alternatif. Ainsi, une fois de plus, rendre votre page accessible offre des avantages supplémentaires !

## Le clavier

Certains utilisateurs ne peuvent pas utiliser une souris ou un pavé tactile et dépendent des interactions au clavier pour naviguer d'un élément à l'autre. Il est important que votre site web présente votre contenu dans un ordre logique afin qu'un utilisateur de clavier puisse accéder à chaque élément interactif en parcourant le document. Si vous construisez vos pages web avec un balisage sémantique et utilisez CSS pour styliser leur mise en page visuelle, votre site devrait être navigable au clavier, mais il est important de tester cet aspect manuellement. Apprenez-en plus sur les [stratégies de navigation au clavier](https://webaim.org/techniques/keyboard/).

✅ Allez sur un site web et essayez de naviguer uniquement avec votre clavier. Qu'est-ce qui fonctionne, qu'est-ce qui ne fonctionne pas ? Pourquoi ?

## Résumé

Un web accessible à certains n'est pas un véritable "web mondial". La meilleure façon de garantir que les sites que vous créez soient accessibles est d'intégrer les bonnes pratiques d'accessibilité dès le départ. Bien qu'il y ait des étapes supplémentaires à suivre, intégrer ces compétences dans votre flux de travail dès maintenant garantira que toutes les pages que vous créez seront accessibles.

---

## 🚀 Défi

Prenez ce HTML et réécrivez-le pour qu'il soit aussi accessible que possible, en utilisant les stratégies que vous avez apprises.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## Quiz après le cours  
[Quiz après le cours](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## Révision et auto-apprentissage
De nombreux gouvernements ont des lois concernant les exigences en matière d'accessibilité. Informez-vous sur les lois d'accessibilité de votre pays. Qu'est-ce qui est couvert, et qu'est-ce qui ne l'est pas ? Un exemple est [ce site web gouvernemental](https://accessibility.blog.gov.uk/).

## Devoir

[Analysez un site web non accessible](assignment.md)

Crédits : [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) par Instrument

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.