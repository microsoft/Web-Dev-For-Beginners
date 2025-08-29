<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T13:04:55+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "ro"
}
-->
# Rularea codului

## Configurare

Creează un mediu virtual

```sh
cd backend
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

## Rulează interfața

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

**Declinarea responsabilității**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși depunem eforturi pentru a asigura acuratețea, vă rugăm să rețineți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa nativă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm răspunderea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.