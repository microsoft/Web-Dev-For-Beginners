# Concevoir un jeu : Appliquer les motifs de conception

## Présentation du devoir

Mettez en pratique vos nouvelles connaissances des motifs de conception en créant un prototype de jeu simple ! Ce devoir vous aidera à pratiquer à la fois les motifs architecturaux (héritage ou composition) et le système de communication pub/sub que vous avez appris dans la leçon.

## Instructions

Créez une représentation simple d’un jeu qui démontre les motifs de conception de cette leçon. Votre jeu doit être fonctionnel mais ne nécessite pas de graphismes complexes – concentrez-vous sur l’architecture sous-jacente et les motifs de communication.

### Exigences

**Choisissez votre motif d’architecture :**
- **Option A** : Utilisez l’héritage basé sur les classes (comme l’exemple `GameObject` → `Movable` → `Hero`)
- **Option B** : Utilisez la composition (comme l’approche par fonction fabrique avec comportements mixtes)

**Implémentez la communication :**
- **Incluez** une classe `EventEmitter` pour la messagerie pub/sub
- **Mettez en place** au moins 2-3 types de messages différents (comme `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Connectez** les entrées utilisateur (clavier/souris) aux événements du jeu via le système d’événements

**Éléments du jeu à inclure :**
- Au moins un personnage contrôlé par le joueur
- Au moins un autre objet du jeu (ennemi, objet à collecter ou élément environnemental)
- Interaction de base entre les objets (collision, collecte ou communication)

### Idées de jeux suggérées

**Jeux simples à considérer :**
- **Jeu de serpent** – Les segments du serpent suivent la tête, la nourriture apparaît aléatoirement
- **Variation de Pong** – La raquette répond aux entrées, la balle rebondit sur les murs
- **Jeu de collecte** – Le joueur se déplace pour collecter des objets tout en évitant les obstacles
- **Bases du Tower Defense** – Les tours détectent et tirent sur les ennemis en mouvement

### Directives pour la structure du code

```javascript
// Exemple de structure de départ
const Messages = {
  // Définissez vos messages de jeu ici
};

class EventEmitter {
  // Votre implémentation du système d'événements
}

// Choisissez soit l'approche basée sur les classes OU la composition
// Exemple basé sur les classes :
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OU exemple de composition :
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Tester votre implémentation

**Vérifiez que votre code fonctionne en :**
- **Testant** que les objets se déplacent ou changent lorsque les événements sont déclenchés
- **Confirmant** que plusieurs objets peuvent répondre au même événement
- **Vérifiant** que vous pouvez ajouter de nouveaux comportements sans modifier le code existant
- **Assurant** que les entrées clavier/souris déclenchent correctement les événements de jeu

## Directives de soumission

**Votre soumission doit inclure :**
1. **Fichier(s) JavaScript** avec votre implémentation de jeu
2. **Fichier HTML** pour exécuter et tester votre jeu (peut être simple)
3. **Commentaires** expliquant quel motif vous avez choisi et pourquoi
4. **Brève documentation** de vos types de messages et leur fonction

## Grille d’évaluation

| Critère | Exemplaire (3 points) | Adéquat (2 points) | À améliorer (1 point) |
|----------|-----------------------|--------------------|----------------------|
| **Motif d’architecture** | Implémente correctement soit l’héritage SOIT la composition avec une hiérarchie claire des classes/objets | Utilise le motif choisi avec des problèmes ou incohérences mineurs | Tente d’utiliser le motif mais l’implémentation a des problèmes importants |
| **Implémentation Pub/Sub** | EventEmitter fonctionne correctement avec plusieurs types de messages et un flux d’événements approprié | Système pub/sub basique fonctionne avec une certaine gestion d’événements | Système d’événements présent mais ne fonctionne pas de façon fiable |
| **Fonctionnalité du jeu** | Trois éléments interactifs ou plus qui communiquent via les événements | Deux éléments interactifs avec communication événementielle basique | Un élément répond aux événements ou interaction basique |
| **Qualité du code** | Code propre, bien commenté, logique et moderne en JavaScript | Code généralement bien organisé avec des commentaires adéquats | Code fonctionnel mais manque d’organisation ou de commentaires clairs |

**Points bonus :**
- **Mécaniques de jeu créatives** qui mettent en valeur des usages intéressants des motifs
- **Méthodes d’entrée multiples** (événements clavier ET souris)
- **Architecture évolutive** facile à étendre avec de nouvelles fonctionnalités

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant foi. Pour des informations critiques, une traduction professionnelle réalisée par un humain est recommandée. Nous ne saurions être tenus responsables des malentendus ou interprétations erronées résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->