# Executar código

## Configuração

Crie um ambiente virtual

```sh
python -m venv venv
source ./venv/bin/activate
```

## Instalar dependências

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Executar API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testar API

Acesse a documentação interativa da API em: `http://localhost:5000/docs`

## Executar frontend

Certifique-se de estar na pasta do frontend

Localize *app.js*, altere `BASE_URL` para o URL do seu backend

Execute

```
npx http-server -p 8000
```

Tente digitar uma mensagem no chat, você deve ver uma resposta (desde que esteja executando isso em um Codespace ou tenha configurado um token de acesso).

## Configurar token de acesso (se você não estiver executando isso em um Codespace)

Veja [Configurar PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos para garantir a precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original em seu idioma nativo deve ser considerado a fonte autoritativa. Para informações críticas, recomenda-se a tradução profissional feita por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.