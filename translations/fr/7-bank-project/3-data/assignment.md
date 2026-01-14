<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "d0a02cb117e91a5b5f24178080068a3d",
  "translation_date": "2026-01-06T06:39:18+00:00",
  "source_file": "7-bank-project/3-data/assignment.md",
  "language_code": "fr"
}
-->
# Attribution de Réusinage et Documentation du Code

## Objectifs d'apprentissage

En complétant cette attribution, vous pratiquerez des compétences essentielles en développement logiciel que les développeurs professionnels utilisent quotidiennement. Vous apprendrez à organiser le code pour sa maintenabilité, réduire la duplication par l'abstraction, et documenter votre travail pour les développeurs futurs (y compris vous-même !).

Un code propre et bien documenté est crucial pour les projets de développement web réels où plusieurs développeurs collaborent et les bases de code évoluent avec le temps.

## Vue d'ensemble de l'attribution

Le fichier `app.js` de votre application bancaire a beaucoup grossi avec les fonctionnalités de connexion, d'inscription et de tableau de bord. Il est temps de refactoriser ce code en utilisant des pratiques de développement professionnelles pour améliorer la lisibilité, la maintenabilité et réduire la duplication.

## Instructions

Transformez votre code actuel `app.js` en implémentant ces trois techniques centrales de refactorisation :

### 1. Extraire les Constantes de Configuration

**Tâche** : Créez une section de configuration en haut de votre fichier avec des constantes réutilisables.

**Conseils d'implémentation :**  
- Extraire l'URL de base de l'API serveur (actuellement codée en dur à plusieurs endroits)  
- Créer des constantes pour les messages d'erreur qui apparaissent dans plusieurs fonctions  
- Envisager d'extraire les chemins de routes et les IDs d'éléments utilisés de manière répétée  

**Structure exemple :**  
```javascript
// Constantes de configuration
const API_BASE_URL = 'http://localhost:5000/api';
const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard'
};
```
  
### 2. Créer une Fonction Unifiée de Requête

**Tâche** : Construisez une fonction réutilisable `sendRequest()` qui supprime le code dupliqué entre `createAccount()` et `getAccount()`.

**Exigences :**  
- Gérer à la fois les requêtes GET et POST  
- Inclure une gestion correcte des erreurs  
- Supporter différents points de terminaison URL  
- Accepter un corps de requête optionnel  

**Signature de fonction recommandée :**  
```javascript
async function sendRequest(endpoint, method = 'GET', data = null) {
  // Votre implémentation ici
}
```
  
### 3. Ajouter une Documentation Professionnelle du Code

**Tâche** : Documentez votre code avec des commentaires clairs et utiles qui expliquent le « pourquoi » derrière votre logique.

**Normes de documentation :**  
- Ajouter une documentation de fonction expliquant le but, les paramètres et les valeurs retournées  
- Inclure des commentaires inline pour la logique complexe ou les règles métier  
- Regrouper les fonctions apparentées avec des en-têtes de section  
- Expliquer tout motif de code non évident ou solution de contournement spécifique au navigateur  

**Style de documentation exemple :**  
```javascript
/**
 * Authenticates user and redirects to dashboard
 * @param {Event} event - Form submission event
 * @returns {Promise<void>} - Resolves when login process completes
 */
async function login(event) {
  // Empêcher la soumission par défaut du formulaire pour gérer avec JavaScript
  event.preventDefault();
  
  // Votre implémentation...
}
```
  
## Critères de Réussite

Votre code refactorisé doit démontrer ces pratiques professionnelles de développement :

### Mise en œuvre Exemplaire  
- ✅ **Constantes** : Toutes les chaînes magiques et URLs sont extraites dans des constantes clairement nommées  
- ✅ **Principe DRY** : La logique commune des requêtes est consolidée dans une fonction réutilisable `sendRequest()`  
- ✅ **Documentation** : Les fonctions possèdent des commentaires JSDoc clairs expliquant but et paramètres  
- ✅ **Organisation** : Le code est logiquement regroupé avec des en-têtes de section et un formatage cohérent  
- ✅ **Gestion des erreurs** : Amélioration de la gestion des erreurs via la nouvelle fonction de requête  

### Mise en œuvre Adéquate  
- ✅ **Constantes** : La plupart des valeurs répétées sont extraites, avec quelques valeurs codées en dur restantes  
- ✅ **Factorisation** : Fonction basique `sendRequest()` créée mais pouvant ne pas gérer tous les cas particuliers  
- ✅ **Commentaires** : Fonctions clés documentées, bien que certaines explications pourraient être plus complètes  
- ✅ **Lisibilité** : Code généralement bien organisé avec quelques points à améliorer  

### À Améliorer  
- ❌ **Constantes** : Beaucoup de chaînes magiques et URLs restent codées en dur un peu partout dans le fichier  
- ❌ **Duplication** : Duplication importante de code entre fonctions similaires  
- ❌ **Documentation** : Commentaires manquants ou insuffisants qui n’expliquent pas le but du code  
- ❌ **Organisation** : Code sans structure claire ni regroupement logique  

## Tester Votre Code Refactorisé

Après la refactorisation, assurez-vous que votre application bancaire fonctionne toujours correctement :

1. **Tester tous les flux utilisateur** : Inscription, connexion, affichage du tableau de bord, et gestion des erreurs  
2. **Vérifier les appels API** : Confirmer que votre fonction `sendRequest()` fonctionne à la fois pour la création et la récupération de compte  
3. **Tester les scénarios d’erreur** : Tester avec des identifiants invalides et des erreurs réseau  
4. **Revoir la console** : Vérifier qu’aucune nouvelle erreur n’a été introduite pendant la refactorisation  

## Consignes de Soumission

Soumettez votre fichier `app.js` refactorisé avec :  
- Des en-têtes de section clairs organisant les différentes fonctionnalités  
- Un formatage et une indentation cohérents du code  
- Une documentation JSDoc complète pour toutes les fonctions  
- Un court commentaire en haut expliquant votre approche de refactorisation  

**Défi Bonus** : Créez un fichier simple de documentation du code (`CODE_STRUCTURE.md`) qui explique l’architecture de votre application et comment les différentes fonctions collaborent.

## Connexion au Monde Réel

Cette attribution reflète le type de maintenance de code que les développeurs professionnels effectuent régulièrement. En milieu industriel :  
- **Les revues de code** évaluent la lisibilité et la maintenabilité, comme dans cette attribution  
- **La dette technique** s’accumule lorsque le code n’est pas régulièrement refactorisé et documenté  
- **La collaboration en équipe** dépend d’un code clair et bien documenté que les nouveaux membres peuvent comprendre  
- **La correction de bugs** est beaucoup plus aisée dans des bases de code bien organisées avec de bonnes abstractions  

Les compétences que vous pratiquez ici — extraction des constantes, élimination de la duplication, et rédaction d’une documentation claire — sont fondamentales au développement logiciel professionnel.

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforçons d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant foi. Pour les informations critiques, une traduction professionnelle humaine est recommandée. Nous déclinons toute responsabilité en cas de malentendus ou de mauvaises interprétations résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->