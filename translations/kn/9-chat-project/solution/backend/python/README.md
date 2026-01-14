<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-08T20:46:04+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "kn"
}
-->
# ಕೋಡ್ ಚಾಲನೆ

## ಸಜ್ಜಿನೋಕೊಳ್ಳು

ವರ್ಚ್ಯುಯಲ್ ಪರಿಸರವನ್ನು ರಚಿಸಿ

```sh
python -m venv venv
source ./venv/bin/activate
```

## ಅವಶ್ಯಕತೆಗಳನ್ನು ಸ್ಥಾಪಿಸಿ

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API ಅನ್ನು ಚಾಲನೆ ಮಾಡಿ

```sh
# ವಿಧಾನ 1: ನೇರ ಕಾರ್ಯನ್ವಯಿಕೆ
python api.py

# ವಿಧಾನ 2: ಉವಿಕಾರ್ನ್ ಬಳಸುತ್ತಿರುವದು
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API ಅನ್ನು ಪರೀಕ್ಷಿಸಿ

ಅಂತರಕ್ರಮಕಾರಿ API ಡಾಕ್ಯುಮೆಂಟೇಶನ್‌ಗೆ ಭೇಟಿ ನೀಡಿ: `http://localhost:5000/docs`

## ಮುಂಭಾಗವನ್ನು ಚಾಲನೆ ಮಾಡಿ

ನೀವು ಮುಂಭಾಗ ಫೋಲ್ಡರ್‌ನಲ್ಲಿ ನಿಲ್ಲುವಿಕೆ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ

*app.js* ಅನ್ನು ಹುಡುಕಿ, `BASE_URL` ಅನ್ನು ನಿಮ್ಮ ಬ್ಯಾಕ್‌ಎಂಡ್ URL ಗೆ ಬದಲಾಯಿಸಿ

ಚಿತ್ರಣ ಮಾಡಿ

```
npx http-server -p 8000
```

ಚಾಟ್‌ನಲ್ಲಿ ಸಂದೇಶವನ್ನು ಲಿಖಿಸಿ ಪ್ರಯತ್ನಿಸಿ, ನೀವು ಪ್ರತಿಕ್ರಿಯೆ ನೋಡಬೇಕು (ನೀವು ಇದನ್ನು Codespace ನಲ್ಲಿ ಚಾಲನೆ ಮಾಡುತ್ತಿದ್ದೀರಾ ಅಥವಾ ಪ್ರವೇಶ ಟೋಕನ್ ಅನ್ನು ಸಜ್ಜುಗೊಳಿಸಿದ್ದೀರಾ ಎಂಬುದು ನಿರ್ಧಾರವಾಗುತ್ತದೆ).

## ಪ್ರವೇಶ ಟೋಕನ್ ಅನ್ನು ಸಜ್ಜುಗೊಳಿಸಿ (ನೀವು ಇದನ್ನು Codespace ನಲ್ಲಿ ಚಾಲನೆ ಮಾಡದಿದ್ದರೆ)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) ಅನ್ನು ನೋಡಿ

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**ಎಚ್ಚರಿಕೆ**:  
ಈ ದಾಖಲೆ AI ಭಾಷಾಂತರ ಸೇವೆ [Co-op Translator](https://github.com/Azure/co-op-translator) ಬಳಸಿ ಭಾಷಾಂತರಿಸಲಾಗಿದೆ. ನಾವು ಶುದ್ಧತೆಯನ್ನು ಗುರಿಯಾಗಿಸಿಕೊಂಡಿದ್ದರೂ, ಸ್ವಯಂಚಾಲಿತ ಭಾಷಾಂತರಗಳಲ್ಲಿ ತಪ್ಪುಗಳು ಅಥವಾ ಅಸತ್ಯತೆಗಳು ಇರುವ ಸಾಧ್ಯತೆ ಇದೆ. ಮೂಲ ಭಾಷೆಯಲ್ಲಿರುವ ದಾಖಲೆವೇ ಅಧಿಕೃತ ಮೂಲವೆಂದು ಪರಿಗಣಿಸಬೇಕು. ಪ್ರಮುಖ ಮಾಹಿತಿಗಾಗಿ, ವೃತ್ತಿಪರ ಮಾನವ ಭಾಷಾಂತರವನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗುತ್ತದೆ. ಈ ಭಾಷಾಂತರವನ್ನು ಬಳಸುವಲ್ಲಿ ಉಂಟಾಗುವ ಯಾವುದೇ ತಪ್ಪು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವಿಕೆ ಅಥವಾ ತಪ್ಪು ವ್ಯಾಖ್ಯಾನಗಳಿಗೆ ನಾವು ಜವಾಬ್ದಾರಿಯಲ್ಲ.
<!-- CO-OP TRANSLATOR DISCLAIMER END -->