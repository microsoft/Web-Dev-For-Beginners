# Exécuter le code

## Configuration

Créer un environnement virtuel

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installer les dépendances

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Lancer l'API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Tester l'API

Visitez la documentation interactive de l'API à l'adresse : `http://localhost:5000/docs`

## Lancer le frontend

Assurez-vous d'être dans le dossier frontend

Localisez *app.js*, changez `BASE_URL` par l'URL de votre backend

Lancez-le

```
npx http-server -p 8000
```

Essayez de taper un message dans le chat, vous devriez voir une réponse (à condition que vous exécutiez cela dans un Codespace ou que vous ayez configuré un jeton d'accès).

## Configuration du jeton d'accès (si vous n'exécutez pas cela dans un Codespace)

Voir [Configurer un PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Avertissement** :  
Ce document a été traduit à l’aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d’assurer l’exactitude, veuillez noter que les traductions automatiques peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d’origine doit être considéré comme la source faisant autorité. Pour les informations critiques, une traduction professionnelle réalisée par un humain est recommandée. Nous ne saurions être tenus responsables des malentendus ou des mauvaises interprétations résultant de l’utilisation de cette traduction.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->