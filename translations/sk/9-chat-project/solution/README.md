<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T13:04:48+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "sk"
}
-->
# Spustenie kódu

## Nastavenie

Vytvorte virtuálne prostredie

```sh
cd backend
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

Nájdite *app.js*, zmeňte `BASE_URL` na URL adresu vášho backendu

Spustite ho

```
npx http-server -p 8000
```

Skúste napísať správu do chatu, mali by ste vidieť odpoveď (za predpokladu, že to spúšťate v Codespace alebo máte nastavený prístupový token).

## Nastavenie prístupového tokenu (ak to nespúšťate v Codespace)

Pozrite si [Nastavenie PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Upozornenie**:  
Tento dokument bol preložený pomocou služby AI prekladu [Co-op Translator](https://github.com/Azure/co-op-translator). Hoci sa snažíme o presnosť, prosím, berte na vedomie, že automatizované preklady môžu obsahovať chyby alebo nepresnosti. Pôvodný dokument v jeho rodnom jazyku by mal byť považovaný za autoritatívny zdroj. Pre kritické informácie sa odporúča profesionálny ľudský preklad. Nenesieme zodpovednosť za akékoľvek nedorozumenia alebo nesprávne interpretácie vyplývajúce z použitia tohto prekladu.