# Rulează codul

## Configurare

Creează un mediu virtual

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instalează dependențele

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Rulează API-ul

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testează API-ul

Vizitează documentația interactivă a API-ului la: `http://localhost:5000/docs`

## Rulează frontend-ul

Asigură-te că te afli în folderul frontend

Localizează *app.js*, schimbă `BASE_URL` cu URL-ul backend-ului tău

Rulează-l

```
npx http-server -p 8000
```

Încearcă să tastezi un mesaj în chat, ar trebui să vezi un răspuns (presupunând că rulezi acest lucru într-un Codespace sau ai configurat un token de acces).

## Configurează token-ul de acces (dacă nu rulezi acest lucru într-un Codespace)

Vezi [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.