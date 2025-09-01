<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:45:24+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "fr"
}
-->
# Exécuter le code

## Configuration

Créer un environnement virtuel

```sh
python -m venv venv
source ./venv/bin/activate
```

## Installer les dépendances

```sh
pip install openai flask flask-cors 
```

## Lancer l'API

```sh
python api.py
```

## Lancer le frontend

Assurez-vous d'être dans le dossier frontend.

Localisez *app.js*, changez `BASE_URL` pour l'URL de votre backend.

Lancez-le

```
npx http-server -p 8000
```

Essayez de taper un message dans le chat, vous devriez voir une réponse (à condition que vous exécutiez cela dans un Codespace ou que vous ayez configuré un jeton d'accès).

## Configurer un jeton d'accès (si vous n'exécutez pas cela dans un Codespace)

Voir [Configurer un PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction professionnelle réalisée par un humain. Nous déclinons toute responsabilité en cas de malentendus ou d'interprétations erronées résultant de l'utilisation de cette traduction.