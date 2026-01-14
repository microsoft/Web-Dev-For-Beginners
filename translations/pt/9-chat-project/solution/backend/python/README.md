<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T18:37:18+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "pt"
}
-->
# Executar código

## Configurar

Criar ambiente virtual

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
# Método 1: Execução direta
python api.py

# Método 2: Usando uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Testar API

Visite a documentação interativa da API em: `http://localhost:5000/docs`

## Executar frontend

Certifique-se de que está na pasta frontend

Localize *app.js*, mude `BASE_URL` para a URL do seu backend

Execute-o

```
npx http-server -p 8000
```

Tente escrever uma mensagem no chat, deverá ver uma resposta (desde que esteja a executar isto num Codespace ou tenha configurado um token de acesso).

## Configurar token de acesso (se não estiver a executar num Codespace)

Consulte [Configurar PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução automática [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos por garantir a precisão, deve ter em conta que as traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte oficial. Para informações críticas, recomenda-se a tradução profissional feita por um tradutor humano. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações erradas decorrentes do uso desta tradução.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->