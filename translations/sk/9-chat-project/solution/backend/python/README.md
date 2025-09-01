<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:49:34+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "sk"
}
-->
# Spustenie kódu

## Nastavenie

Vytvorte virtuálne prostredie

```sh
python -m venv venv
source ./venv/bin/activate
```

## Inštalácia závislostí

```sh
pip install openai flask flask-cors 
```

## Spustenie API

```sh
python api.py
```

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

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho pôvodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nie sme zodpovední za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.