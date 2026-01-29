# Spustenie kódu

## Nastavenie

Vytvorte virtuálne prostredie

```sh
python -m venv venv
source ./venv/bin/activate
```

## Inštalácia závislostí

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Spustenie API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testovanie API

Navštívte interaktívnu dokumentáciu API na: `http://localhost:5000/docs`

## Spustenie frontend-u

Uistite sa, že sa nachádzate v priečinku frontend

Nájdite *app.js*, zmeňte `BASE_URL` na URL vášho backendu

Spustite ho

```
npx http-server -p 8000
```

Skúste napísať správu do chatu, mali by ste vidieť odpoveď (za predpokladu, že to spúšťate v Codespace alebo ste nastavili prístupový token).

## Nastavenie prístupového tokenu (ak to nespúšťate v Codespace)

Pozrite si [Nastavenie PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Zrieknutie sa zodpovednosti**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.