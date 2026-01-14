<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-08T20:45:40+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "ml"
}
-->
# കോഡ് 실행ിക്കുക

## ക്രമീകരിക്കുക

വര്‍ച്ച്വല്‍ പരിതസ്ഥിതി സൃഷ്ടിക്കുക

```sh
python -m venv venv
source ./venv/bin/activate
```

## ആശ്രിതങ്ങള്‍ ഇന്‍സ്റ്റാള്‍ ചെയ്യുക

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API 실행ിക്കുക

```sh
# രീതി 1: നേരിട്ട് പ്രവർത്തനങ്ങൾ
python api.py

# രീതി 2: uvicorn ഉപയോഗിച്ച്
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API പരീക്ഷിക്കുക

ഇന്ററാക്ടീവായ API ഡോക്യുമെന്റേഷന് സഞ്ചരിക്കുക: `http://localhost:5000/docs`

## ഫ്രണ്ട്എന്‍ഡ് 실행ിക്കുക

ഫ്രണ്ട്എന്‍ഡ് ഫോള്‍ഡറിലുള്ളത് ഉറപ്പാക്കുക

*app.js* ഫയല്‍ കണ്ടെത്തുക, `BASE_URL` നിങ്ങളുടെ ബാക്ക്‌എന്‍ഡ് URL ആയി മാറ്റുക

ഇത് 실행ിക്കുക

```
npx http-server -p 8000
```

ചാറ്റില്‍ ഒരു സന്ദേശം ടൈപ്പ് ചെയ്ത് നോക്കൂ, നിങ്ങൾക്ക് ഒരു പ്രതികരണം കാണാം (നിങ്ങൾ ഇത് Codespace-ൽ 실행ിക്കുന്നയാൾ ആണെങ്കിൽ അല്ലെങ്കിൽ അപസ്‌സസ് ടോക്കൺ ക്രമീകരിച്ചിട്ടുണ്ടെങ്കിൽ).

## അപസ്‌സസ് ടോക്കൺ ക്രമീകരിക്കുക (നിങ്ങൾ ഇത് Codespace-ൽ 실행ിക്കുകയില്ലെങ്കിൽ)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)  കാണുക

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**അസൂചനം**:  
ഈ രേഖ AI പരിഭാഷ സേവനം [Co-op Translator](https://github.com/Azure/co-op-translator) ഉപയോഗിച്ച് പരിഭാഷ ചെയ്തതാണ്. നാം ശരിയായ പരിഭാഷയ്ക്ക് ശ്രമിക്കുന്നുവെങ്കിലും, ഓട്ടോമാറ്റിക് പരിഭാഷകളിൽ പിഴവുകൾ അല്ലെങ്കിൽ അപൂർവതകൾ ഉണ്ടാകാവുന്നതാണ്. മാതൃഭാഷയിലുള്ള യഥാർത്ഥ രേഖയെ ഔദ്യോഗിക ഉറവിടമായി കരുതണം. അത്യന്താപേക്ഷിത വിവരങ്ങൾക്ക് പ്രൊഫഷണൽ മനുഷ്യ പരിഭാഷ ശിപാർശ ചെയ്യുന്നു. ഈ പരിഭാഷയുടെ ഉപയോഗത്തിൽ നിന്നുള്ള യാതൊരു തെറ്റ്മോ അർത്ഥം തെറ്റിച്ചോ സംഭവിക്കുന്ന ഒരു പിഴവിനും ഞങ്ങൾ ഉത്തരവാദികളല്ല.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->