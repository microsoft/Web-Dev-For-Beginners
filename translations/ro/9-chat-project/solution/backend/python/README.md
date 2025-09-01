<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:49:40+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "ro"
}
-->
# Rulează codul

## Configurare

Creează un mediu virtual

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instalează dependențele

```sh
pip install openai flask flask-cors 
```

## Rulează API-ul

```sh
python api.py
```

## Rulează interfața frontend

Asigură-te că te afli în folderul frontend

Găsește *app.js*, schimbă `BASE_URL` cu URL-ul backend-ului tău

Rulează-l

```
npx http-server -p 8000
```

Încearcă să tastezi un mesaj în chat, ar trebui să vezi un răspuns (presupunând că rulezi acest lucru într-un Codespace sau ai configurat un token de acces).

## Configurează token-ul de acces (dacă nu rulezi acest lucru într-un Codespace)

Vezi [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.