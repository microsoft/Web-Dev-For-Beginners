<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:47:25+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "pt"
}
-->
# Executar o código

## Configuração

Criar um ambiente virtual

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instalar dependências

```sh
pip install openai flask flask-cors 
```

## Executar a API

```sh
python api.py
```

## Executar o frontend

Certifique-se de que está na pasta do frontend.

Localize o ficheiro *app.js* e altere `BASE_URL` para o URL do seu backend.

Execute-o

```
npx http-server -p 8000
```

Experimente escrever uma mensagem no chat, deverá ver uma resposta (desde que esteja a executar isto num Codespace ou tenha configurado um token de acesso).

## Configurar o token de acesso (caso não esteja a executar isto num Codespace)

Consulte [Configurar PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, é importante ter em conta que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.