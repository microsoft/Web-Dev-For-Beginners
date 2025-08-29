<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T17:08:35+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "pt"
}
-->
# Executar o código

## Configuração

Criar um ambiente virtual

```sh
cd backend
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

Certifique-se de estar na pasta do frontend.

Localize o ficheiro *app.js* e altere `BASE_URL` para o URL do seu backend.

Execute-o

```
npx http-server -p 8000
```

Experimente escrever uma mensagem no chat; deverá ver uma resposta (desde que esteja a executar isto num Codespace ou tenha configurado um token de acesso).

## Configurar o token de acesso (caso não esteja a executar isto num Codespace)

Consulte [Configurar PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, é importante notar que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se a tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes da utilização desta tradução.