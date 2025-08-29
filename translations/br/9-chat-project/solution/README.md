<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T01:28:19+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "br"
}
-->
# Executar o código

## Configuração

Crie um ambiente virtual

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## Instale as dependências

```sh
pip install openai flask flask-cors 
```

## Execute a API

```sh
python api.py
```

## Execute o frontend

Certifique-se de estar na pasta do frontend

Localize o arquivo *app.js* e altere `BASE_URL` para a URL do seu backend

Execute o frontend

```
npx http-server -p 8000
```

Tente digitar uma mensagem no chat, você deverá ver uma resposta (desde que esteja executando isso em um Codespace ou tenha configurado um token de acesso).

## Configure o token de acesso (caso não esteja executando isso em um Codespace)

Veja [Configurar PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte oficial. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações equivocadas decorrentes do uso desta tradução.