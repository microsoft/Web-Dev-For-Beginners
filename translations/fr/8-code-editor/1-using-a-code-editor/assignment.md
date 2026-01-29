# Créez un site web de CV avec VSCode.dev

Transformez vos perspectives de carrière en créant un site web de CV professionnel qui met en valeur vos compétences et votre expérience dans un format interactif et moderne. Au lieu d’envoyer des PDF traditionnels, imaginez fournir aux recruteurs un site web élégant et responsive qui démontre à la fois vos qualifications et vos capacités en développement web.

Cet exercice pratique met en application toutes vos compétences VSCode.dev tout en créant quelque chose de réellement utile pour votre carrière. Vous expérimenterez le workflow complet du développement web – de la création du dépôt à son déploiement – le tout dans votre navigateur.

En réalisant ce projet, vous aurez une présence professionnelle en ligne pouvant être facilement partagée avec des employeurs potentiels, mise à jour au fur et à mesure que vos compétences évoluent, et personnalisée pour correspondre à votre marque personnelle. C’est exactement le type de projet pratique qui démontre des compétences réelles en développement web.

## Objectifs d’apprentissage

Après avoir complété cet exercice, vous serez capable de :

- **Créer** et gérer un projet complet de développement web avec VSCode.dev
- **Structurer** un site web professionnel avec des éléments HTML sémantiques
- **Styliser** des mises en page responsives avec des techniques CSS modernes
- **Implémenter** des fonctionnalités interactives en utilisant les technologies web de base
- **Déployer** un site web en ligne accessible via une URL partageable
- **Démontrer** les meilleures pratiques de gestion de version durant tout le processus de développement

## Prérequis

Avant de commencer cet exercice, assurez-vous de disposer :

- D’un compte GitHub (créez-en un sur [github.com](https://github.com/) si nécessaire)
- D’avoir complété la leçon VSCode.dev couvrant la navigation et les opérations de base de l’interface
- D’une compréhension basique de la structure HTML et des concepts de stylisation CSS

## Configuration du projet et création du dépôt

Commençons par établir les bases de votre projet. Ce processus reflète les workflows de développement réels où les projets débutent par l’initialisation correcte d’un dépôt et la planification de la structure.

### Étape 1 : Créez votre dépôt GitHub

Mettre en place un dépôt dédié garantit que votre projet est bien organisé et géré en version dès le début.

1. **Naviguez** sur [GitHub.com](https://github.com) et connectez-vous à votre compte
2. **Cliquez** sur le bouton vert « New » ou l’icône « + » en haut à droite
3. **Nommez** votre dépôt `my-resume` (ou choisissez un nom personnalisé comme `john-smith-resume`)
4. **Ajoutez** une brève description : « Site web de CV professionnel construit avec HTML et CSS »
5. **Sélectionnez** « Public » pour rendre votre CV accessible aux employeurs potentiels
6. **Cochez** « Add a README file » pour créer une description initiale du projet
7. **Cliquez** sur « Create repository » pour finaliser la configuration

> 💡 **Conseil pour le nom du dépôt** : Utilisez des noms descriptifs et professionnels qui indiquent clairement l’objet du projet. Cela aide lors du partage avec les employeurs ou les revues de portfolio.

### Étape 2 : Initialisez la structure du projet

Puisque VSCode.dev requiert au moins un fichier pour ouvrir un dépôt, nous allons créer notre fichier HTML principal directement sur GitHub avant de passer à l’éditeur web.

1. **Cliquez** sur le lien « creating a new file » dans votre nouveau dépôt
2. **Tapez** `index.html` comme nom de fichier
3. **Ajoutez** cette structure HTML initiale :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <h1>Your Name</h1>
    <p>Professional Resume Website</p>
</body>
</html>
```

4. **Écrivez** un message de commit : « Add initial HTML structure »
5. **Cliquez** sur « Commit new file » pour sauvegarder vos modifications

![Création du fichier initial sur GitHub](../../../../translated_images/fr/new-file-github.com.c886796d800e8056.webp)

**Voici ce que cette configuration initiale accomplit :**
- **Établit** une structure de document HTML5 correcte avec des éléments sémantiques
- **Inclut** la meta viewport pour la compatibilité responsive design
- **Définit** un titre de page descriptif qui apparaît dans les onglets du navigateur
- **Crée** une base pour organiser le contenu professionnel


## Travail dans VSCode.dev

Maintenant que les fondations de votre dépôt sont posées, passons à VSCode.dev pour le développement principal. Cet éditeur web fournit tous les outils nécessaires au développement web professionnel.

### Étape 3 : Ouvrez votre projet dans VSCode.dev

1. **Naviguez** sur [vscode.dev](https://vscode.dev) dans un nouvel onglet de navigateur
2. **Cliquez** sur « Open Remote Repository » à l’écran d’accueil
3. **Copiez** l’URL de votre dépôt depuis GitHub et collez-la dans le champ de saisie

   Format : `https://github.com/votre-nom-utilisateur/my-resume`
   
   *Remplacez `votre-nom-utilisateur` par votre vrai nom d’utilisateur GitHub*

4. **Appuyez** sur Entrée pour charger votre projet

✅ **Indicateur de réussite** : Vous devriez voir les fichiers de votre projet dans la barre latérale de l’Explorateur et `index.html` disponible à l’édition dans la zone principale.

![Projet chargé dans VSCode.dev](../../../../translated_images/fr/project-on-vscode.dev.e79815a9a95ee7fe.webp)

**Ce que vous verrez dans l’interface :**
- **Barre latérale Explorateur** : **Affiche** les fichiers et dossiers de votre dépôt
- **Zone d’édition** : **Montre** le contenu des fichiers sélectionnés pour modification
- **Barre d’activité** : **Donne accès** à des fonctionnalités comme le contrôle de source et les extensions
- **Barre d’état** : **Indique** le statut de connexion et les informations sur la branche courante

### Étape 4 : Construisez le contenu de votre CV

Remplacez le contenu fictif dans `index.html` par une structure complète de CV. Ce HTML constitue la base d’une présentation professionnelle de vos qualifications.

<details>
<summary><b>Structure HTML complète du CV</b></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Your Name - Professional Resume</title>
</head>
<body>
    <header id="header">
        <h1>Your Full Name</h1>
        <hr>
        <p class="role">Your Professional Title</p>
        <hr>
    </header>
    
    <main>
        <article id="mainLeft">
            <section>
                <h2>CONTACT</h2>
                <p>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:your.email@domain.com">your.email@domain.com</a>
                </p>
                <p>
                    <i class="fab fa-github" aria-hidden="true"></i>
                    <a href="https://github.com/your-username">github.com/your-username</a>
                </p>
                <p>
                    <i class="fab fa-linkedin" aria-hidden="true"></i>
                    <a href="https://linkedin.com/in/your-profile">linkedin.com/in/your-profile</a>
                </p>
            </section>
            
            <section>
                <h2>SKILLS</h2>
                <ul>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Responsive Web Design</li>
                    <li>Version Control (Git)</li>
                    <li>Problem Solving</li>
                </ul>
            </section>
            
            <section>
                <h2>EDUCATION</h2>
                <h3>Your Degree or Certification</h3>
                <p>Institution Name</p>
                <p>Start Date - End Date</p>
            </section>
        </article>
        
        <article id="mainRight">
            <section>
                <h2>ABOUT</h2>
                <p>Write a compelling summary that highlights your passion for web development, key achievements, and career goals. This section should give employers insight into your personality and professional approach.</p>
            </section>
            
            <section>
                <h2>WORK EXPERIENCE</h2>
                <div class="job">
                    <h3>Job Title</h3>
                    <p class="company">Company Name | Start Date – End Date</p>
                    <ul>
                        <li>Describe a key accomplishment or responsibility</li>
                        <li>Highlight specific skills or technologies used</li>
                        <li>Quantify impact where possible (e.g., "Improved efficiency by 25%")</li>
                    </ul>
                </div>
                
                <div class="job">
                    <h3>Previous Job Title</h3>
                    <p class="company">Previous Company | Start Date – End Date</p>
                    <ul>
                        <li>Focus on transferable skills and achievements</li>
                        <li>Demonstrate growth and learning progression</li>
                        <li>Include any leadership or collaboration experiences</li>
                    </ul>
                </div>
            </section>
            
            <section>
                <h2>PROJECTS</h2>
                <div class="project">
                    <h3>Project Name</h3>
                    <p>Brief description of what the project accomplishes and technologies used.</p>
                    <a href="#" target="_blank">View Project</a>
                </div>
            </section>
        </article>
    </main>
</body>
</html>
```
</details>

**Lignes directrices de personnalisation :**
- **Remplacez** tout le texte fictif par vos informations réelles
- **Ajustez** les sections selon votre niveau d’expérience et votre orientation professionnelle
- **Ajoutez** ou supprimez des sections si nécessaire (ex. : Certifications, Bénévolat, Langues)
- **Incluez** des liens vers vos profils et projets réels

### Étape 5 : Créez les fichiers complémentaires

Les sites professionnels nécessitent une structure de fichiers organisée. Créez la feuille de style CSS et les fichiers de configuration nécessaires pour un projet complet.

1. **Survolez** le nom de votre dossier de projet dans la barre latérale Explorateur
2. **Cliquez** sur l’icône « Nouveau fichier » (📄+) qui apparaît
3. **Créez** ces fichiers un par un :
   - `style.css` (pour la stylisation et la mise en page)
   - `codeswing.json` (pour la configuration de l’extension de prévisualisation)

**Création du fichier CSS (`style.css`) :**

<details>
<summary><b>Style CSS professionnel</b></summary>

```css
/* Modern Resume Styling */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
    background-color: #f9f9f9;
}

/* Header Styling */
header {
    text-align: center;
    margin-bottom: 3em;
    padding: 2em;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 3em;
    letter-spacing: 0.1em;
    margin-bottom: 0.2em;
    font-weight: 300;
}

.role {
    font-size: 1.3em;
    font-weight: 300;
    margin: 1em 0;
}

/* Main Content Layout */
main {
    display: grid;
    grid-template-columns: 35% 65%;
    gap: 3em;
    margin-top: 3em;
    background: white;
    padding: 2em;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Typography */
h2 {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 1em;
    color: #667eea;
    border-bottom: 2px solid #667eea;
    padding-bottom: 0.3em;
}

h3 {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.5em;
    color: #444;
}

/* Section Styling */
section {
    margin-bottom: 2.5em;
}

#mainLeft {
    border-right: 1px solid #e0e0e0;
    padding-right: 2em;
}

/* Contact Links */
section a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.3s ease;
}

section a:hover {
    color: #764ba2;
    text-decoration: underline;
}

/* Icons */
i {
    margin-right: 0.8em;
    width: 20px;
    text-align: center;
    color: #667eea;
}

/* Lists */
ul {
    list-style: none;
    padding-left: 0;
}

li {
    margin: 0.5em 0;
    padding: 0.3em 0;
    position: relative;
}

li:before {
    content: "▸";
    color: #667eea;
    margin-right: 0.5em;
}

/* Work Experience */
.job, .project {
    margin-bottom: 2em;
    padding-bottom: 1.5em;
    border-bottom: 1px solid #f0f0f0;
}

.company {
    font-style: italic;
    color: #666;
    margin-bottom: 0.5em;
}

/* Responsive Design */
@media (max-width: 768px) {
    main {
        grid-template-columns: 1fr;
        gap: 2em;
    }
    
    #mainLeft {
        border-right: none;
        border-bottom: 1px solid #e0e0e0;
        padding-right: 0;
        padding-bottom: 2em;
    }
    
    h1 {
        font-size: 2.2em;
    }
    
    body {
        padding: 10px;
    }
}

/* Print Styles */
@media print {
    body {
        background: white;
        color: black;
        font-size: 12pt;
    }
    
    header {
        background: none;
        color: black;
        box-shadow: none;
    }
    
    main {
        box-shadow: none;
    }
}
```
</details>

**Création du fichier de configuration (`codeswing.json`) :**

```json
{
    "scripts": [],
    "styles": []
}
```

**Comprendre les fonctionnalités CSS :**
- **Utilise** CSS Grid pour une structure de mise en page responsive et professionnelle
- **Implémente** des dégradés modernes pour les en-têtes colorés
- **Inclut** des effets au survol et transitions douces pour l’interactivité
- **Propose** un design responsive fonctionnel sur tous types d’appareils
- **Ajoute** des styles adaptés à l’impression pour la génération de PDFs


### Étape 6 : Installez et configurez les extensions

Les extensions améliorent votre expérience de développement en fournissant des capacités de prévisualisation en direct et des outils de workflow améliorés. L’extension CodeSwing est particulièrement utile pour les projets web.

**Installation de l’extension CodeSwing :**

1. **Cliquez** sur l’icône Extensions (🧩) dans la barre d’activité
2. **Cherchez** « CodeSwing » dans la barre de recherche du marketplace
3. **Sélectionnez** l’extension CodeSwing dans les résultats
4. **Cliquez** sur le bouton bleu « Installer »

![Installation de l’extension CodeSwing](../../../../8-code-editor/images/install-extension.gif)

**Ce que CodeSwing fournit :**
- **Permet** la prévisualisation en direct de votre site web pendant l’édition
- **Affiche** les changements en temps réel sans actualisation manuelle
- **Supporte** plusieurs types de fichiers dont HTML, CSS et JavaScript
- **Offre** une expérience d’environnement de développement intégré

**Résultats immédiats après installation :**
Une fois CodeSwing installé, vous verrez une prévisualisation en direct de votre site de CV apparaître dans l’éditeur. Cela vous permet de voir exactement à quoi ressemble votre site au fur et à mesure des modifications.

![Extension CodeSwing affichant la prévisualisation en direct](../../../../translated_images/fr/after-codeswing-extension-pb.0ebddddcf73b5509.webp)

**Comprendre l’interface améliorée :**
- **Vue en double** : **Montre** votre code d’un côté et la prévisualisation en direct de l’autre
- **Mises à jour en temps réel** : **Reflète** immédiatement les modifications quand vous tapez
- **Prévisualisation interactive** : **Permet** de tester les liens et interactions
- **Simulation mobile** : **Offre** des capacités de test responsive

### Étape 7 : Contrôle de version et publication

Maintenant que votre site de CV est complet, utilisez Git pour sauvegarder votre travail et le rendre disponible en ligne.

**Commiter vos modifications :**

1. **Cliquez** sur l’icône de Contrôle de source (🌿) dans la barre d’activité
2. **Passez en revue** tous les fichiers créés et modifiés dans la section « Changes »
3. **Stadez** vos modifications en cliquant sur l’icône "+" à côté de chaque fichier
4. **Écrivez** un message de commit descriptif comme :
   - « Add complete resume website with responsive design »
   - « Implement professional styling and content structure »
5. **Cliquez** sur la coche (✓) pour valider et pousser vos modifications

**Exemples efficaces de messages de commit :**
- « Add professional resume content and styling »
- « Implement responsive design for mobile compatibility »
- « Update contact information and project links »

> 💡 **Astuce professionnelle** : De bons messages de commit aident à suivre l’évolution du projet et montrent un souci du détail – des qualités appréciées des employeurs.

**Accéder à votre site publié :**
Une fois validé, vous pouvez revenir à votre dépôt GitHub à l’aide du menu hamburger (☰) en haut à gauche. Votre site de CV est maintenant versionné et prêt à être déployé ou partagé.

## Résultats et étapes suivantes

**Félicitations ! 🎉** Vous avez créé avec succès un site web de CV professionnel avec VSCode.dev. Votre projet démontre :
**Compétences techniques acquises :**
- **Gestion de dépôt** : Création et organisation d’une structure complète de projet
- **Développement web** : Construction d’un site responsive avec HTML5 et CSS3 modernes
- **Contrôle de version** : Mise en place d’un workflow Git correct avec des commits significatifs
- **Maîtrise des outils** : Utilisation efficace de l’interface et du système d’extensions de VSCode.dev

**Résultats professionnels obtenus :**
- **Présence en ligne** : Une URL partageable mettant en avant vos qualifications
- **Format moderne** : Une alternative interactive aux CV PDF traditionnels
- **Compétences démontrables** : Une preuve concrète de vos capacités en développement web
- **Mises à jour faciles** : Une base que vous pouvez continuellement améliorer et personnaliser

### Options de déploiement

Pour rendre votre CV accessible aux employeurs, considérez ces options d’hébergement :

**GitHub Pages (recommandé) :**
1. Allez dans les Paramètres de votre dépôt sur GitHub
2. Descendez à la section « Pages »
3. Sélectionnez « Deploy from a branch » et choisissez « main »
4. Votre site sera disponible à l’adresse `https://votre-nom-utilisateur.github.io/my-resume`

**Plateformes alternatives :**
- **Netlify** : Déploiement automatique avec domaines personnalisés
- **Vercel** : Déploiement rapide avec fonctionnalités d’hébergement modernes
- **GitHub Codespaces** : Environnement de développement avec prévisualisation intégrée

### Suggestions d’amélioration

Continuez à développer vos compétences en ajoutant ces fonctionnalités :

**Améliorations techniques :**
- **Interactivité JavaScript** : Ajoutez le défilement fluide ou des éléments interactifs
- **Mode sombre** : Implémentez un basculement de thème avec transitions douces
- **Formulaire de contact** : Permettez une communication directe avec les employeurs potentiels
- **Optimisation SEO** : Ajoutez des meta tags et des données structurées pour une meilleure visibilité

**Améliorations de contenu :**
- **Portfolio de projets** : Liez à des dépôts GitHub et démonstrations en direct
- **Visualisation des compétences** : Créez des barres de progression ou systèmes d’évaluation
- **Section témoignages** : Incluez des recommandations de collègues ou formateurs
- **Intégration blog** : Ajoutez une section blog pour montrer votre parcours d’apprentissage

## Défi Agent GitHub Copilot 🚀

Utilisez le mode Agent pour relever le défi suivant :

**Description :** Améliorez votre site de CV avec des fonctionnalités avancées qui montrent des capacités professionnelles en développement web et des principes de design modernes.

**Consigne :** En vous basant sur votre site actuel, implémentez ces fonctionnalités avancées :
1. Ajoutez un basculement thème sombre/clair avec transitions fluides
2. Créez une section compétences interactive avec des barres de progression animées
3. Implémentez un formulaire de contact avec validation de formulaire
4. Ajoutez une section portfolio de projets avec effets au survol et modales pop-up
5. Incluez une section blog avec au moins 3 articles exemples sur votre parcours d’apprentissage
6. Optimisez pour le SEO avec des meta tags appropriés, données structurées et performances
7. Déployez le site amélioré en utilisant GitHub Pages ou Netlify
8. Documentez toutes les nouvelles fonctionnalités dans votre README.md avec des captures d’écran

Votre site amélioré doit témoigner de la maîtrise des pratiques modernes de développement web, incluant responsive design, interactivité JavaScript et workflows professionnels de déploiement.

## Extension du défi

Prêt à aller plus loin ? Essayez ces défis avancés :

**📱 Refonte Mobile-First :** Reconstruisez complètement votre site avec une approche mobile-first utilisant CSS Grid et Flexbox

**🔍 Optimisation SEO :** Implémentez un SEO complet incluant meta tags, données structurées et optimisation des performances

**🌐 Support multilingue :** Ajoutez des fonctionnalités d’internationalisation pour supporter plusieurs langues

**📊 Intégration d’Analytics :** Intégrez Google Analytics pour suivre l’engagement des visiteurs et optimiser votre contenu

**🚀 Optimisation des performances :** Atteignez des scores parfaits sur Lighthouse dans toutes les catégories

## Révision & Auto-étude

Élargissez vos connaissances avec ces ressources :

**Fonctionnalités avancées VSCode.dev :**
- [Documentation VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) – Guide complet sur l’édition web
- [GitHub Codespaces](https://docs.github.com/en/codespaces) – Environnements de développement dans le cloud

**Bonnes pratiques de développement web :**
- **Responsive Design** : Étudiez CSS Grid et Flexbox pour des mises en page modernes
- **Accessibilité** : Apprenez les directives WCAG pour une conception web inclusive  
- **Performance** : Explorez des outils comme Lighthouse pour l’optimisation  
- **SEO** : Comprenez les fondamentaux du référencement  

**Développement professionnel :**  
- **Création de portfolio** : Créez des projets supplémentaires pour montrer des compétences diverses  
- **Open Source** : Contribuez à des projets existants pour acquérir de l’expérience en collaboration  
- **Réseautage** : Partagez votre site CV dans les communautés de développeurs pour obtenir des retours  
- **Apprentissage continu** : Restez à jour avec les tendances et technologies du développement web  

---

**Vos prochaines étapes :** Partagez votre site CV avec des amis, la famille ou des mentors pour obtenir des retours. Utilisez leurs suggestions pour itérer et améliorer votre design. N’oubliez pas, ce projet n’est pas seulement un CV – c’est une démonstration de votre progression en tant que développeur web !

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforçons d’assurer l’exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant foi. Pour des informations critiques, une traduction professionnelle réalisée par un humain est recommandée. Nous déclinons toute responsabilité en cas de malentendus ou de mauvaises interprétations résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->