<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:47:31+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "br"
}
-->
# Executar código

## Configuração

Crie um ambiente virtual

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instalar dependências

```sh
pip install openai flask flask-cors 
```

## Executar API

```sh
python api.py
```

## Executar frontend

Certifique-se de estar na pasta do frontend

Localize *app.js*, altere `BASE_URL` para a URL do seu backend

Execute

```
npx http-server -p 8000
```

Tente digitar uma mensagem no chat, você deve ver uma resposta (desde que esteja executando isso em um Codespace ou tenha configurado um token de acesso).

## Configurar token de acesso (se você não estiver executando isso em um Codespace)

Veja [Configurar PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automatizadas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.