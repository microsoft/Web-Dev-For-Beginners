# Amusez-vous avec les fonctions

## Instructions

Dans cet exercice, vous pratiquerez la création de différents types de fonctions pour renforcer les concepts que vous avez appris sur les fonctions JavaScript, les paramètres, les valeurs par défaut et les instructions de retour.

Créez un fichier JavaScript appelé `functions-practice.js` et implémentez les fonctions suivantes :

### Partie 1 : Fonctions de base
1. **Créez une fonction appelée `sayHello`** qui ne prend aucun paramètre et affiche simplement "Hello !" dans la console.

2. **Créez une fonction appelée `introduceYourself`** qui prend un paramètre `name` et affiche un message comme "Hi, my name is [name]" dans la console.

### Partie 2 : Fonctions avec paramètres par défaut
3. **Créez une fonction appelée `greetPerson`** qui prend deux paramètres : `name` (requis) et `greeting` (optionnel, par défaut "Hello"). La fonction doit afficher un message comme "[greeting], [name] !" dans la console.

### Partie 3 : Fonctions qui retournent des valeurs
4. **Créez une fonction appelée `addNumbers`** qui prend deux paramètres (`num1` et `num2`) et retourne leur somme.

5. **Créez une fonction appelée `createFullName`** qui prend les paramètres `firstName` et `lastName` et retourne le nom complet sous forme d'une chaîne unique.

### Partie 4 : Tout combiner
6. **Créez une fonction appelée `calculateTip`** qui prend deux paramètres : `billAmount` (requis) et `tipPercentage` (optionnel, par défaut 15). La fonction doit calculer et retourner le montant du pourboire.

### Partie 5 : Testez vos fonctions
Ajoutez des appels de fonctions pour tester chacune de vos fonctions et afficher les résultats à l'aide de `console.log()`.

**Exemple d'appels de test :**
```javascript
// Testez vos fonctions ici
sayHello();
introduceYourself("Sarah");
greetPerson("Alex");
greetPerson("Maria", "Hi");

const sum = addNumbers(5, 3);
console.log(`The sum is: ${sum}`);

const fullName = createFullName("John", "Doe");
console.log(`Full name: ${fullName}`);

const tip = calculateTip(50);
console.log(`Tip for $50 bill: $${tip}`);
```

## Grille d'évaluation

| Critère | Exemplaire | Adéquat | À améliorer |
| -------- | --------- | -------- | ----------------- |
| **Création de fonctions** | Toutes les 6 fonctions sont correctement implémentées avec une syntaxe appropriée et des conventions de nommage correctes | 4-5 fonctions sont correctement implémentées avec des problèmes mineurs de syntaxe | 3 fonctions ou moins implémentées ou erreurs majeures de syntaxe |
| **Paramètres & valeurs par défaut** | Utilisation correcte des paramètres requis, optionnels et des valeurs par défaut comme spécifié | Utilisation correcte des paramètres mais avec quelques problèmes de valeurs par défaut | Implémentation incorrecte ou manquante des paramètres |
| **Valeurs de retour** | Les fonctions qui doivent retourner des valeurs le font correctement, et les fonctions qui ne doivent pas retourner de valeurs effectuent seulement des actions | La plupart des valeurs de retour sont correctes avec quelques problèmes mineurs | Problèmes importants avec les instructions de retour |
| **Qualité du code** | Code propre, bien organisé avec des noms de variables significatifs et une indentation correcte | Le code fonctionne mais pourrait être plus propre ou mieux organisé | Le code est difficile à lire ou mal structuré |
| **Tests** | Toutes les fonctions sont testées avec des appels appropriés et les résultats sont clairement affichés | La plupart des fonctions sont correctement testées | Tests limités ou incorrects des fonctions |

## Défis bonus (optionnel)

Si vous souhaitez vous challenger davantage :

1. **Créez une version en fonction fléchée** d'une de vos fonctions
2. **Créez une fonction qui accepte une autre fonction en paramètre** (comme les exemples `setTimeout` de la leçon)
3. **Ajoutez une validation des entrées** pour garantir que vos fonctions gèrent proprement les entrées invalides

---

> 💡 **Astuce** : N'oubliez pas d'ouvrir la console développeur de votre navigateur (F12) pour voir le résultat de vos instructions `console.log()` !

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avis de non-responsabilité** :  
Ce document a été traduit à l’aide du service de traduction automatisée [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue native doit être considéré comme la source faisant foi. Pour toute information critique, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d’interprétations erronées résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->