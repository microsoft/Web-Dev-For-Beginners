# Run code

## Set up

Create virtual environment

```sh
python -m venv venv
source ./venv/bin/activate
```

## Install dependencies

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Run API

```sh
# Method 1: Run am direct
python api.py

# Method 2: Use uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Test API

Visit di interactive API documentation for: `http://localhost:5000/docs`

## Run frontend

Make sure say you dey for di frontend folder

Find *app.js*, change `BASE_URL` to ur backend URL

Run am

```
npx http-server -p 8000
```

Try type message for di chat, you go see response (if you dey run am for Codespace or you don set up access token).

## Set up access token (if you no run dis for Codespace)

See [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**Disclaimer**: Dis document na AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator) wey translate am. Even though we try make am correct, abeg sabi say automated translation fit get mistakes or no too correct. Di original document for e own language na di real correct one. If na serious matter, e better make person wey sabi human translation do am. We no go hold ourselves responsible if person no understand or misinterpret from dis translation.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->