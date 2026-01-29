# कोड चालवा

## सेट अप

व्हर्च्युअल एन्व्हायर्नमेंट तयार करा

```sh
python -m venv venv
source ./venv/bin/activate
```

## डिपेंडन्सी इंस्टॉल करा

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API चालवा

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API चाचणी करा

इंटरॅक्टिव्ह API डॉक्युमेंटेशनला भेट द्या: `http://localhost:5000/docs`

## फ्रंटएंड चालवा

फ्रंटएंड फोल्डरमध्ये उभे रहा

*app.js* शोधा, `BASE_URL` आपल्या बॅकएंड URL मध्ये बदला

ते चालवा

```
npx http-server -p 8000
```

चॅटमध्ये संदेश टाइप करण्याचा प्रयत्न करा, तुम्हाला प्रतिसाद दिसेल (जर तुम्ही हे Codespace मध्ये चालवत असाल किंवा access token सेट केला असेल).

## access token सेट करा (जर तुम्ही हे Codespace मध्ये चालवत नसाल)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) येथे पहा

---

**अस्वीकरण**:  
हा दस्तऐवज AI भाषांतर सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) वापरून भाषांतरित करण्यात आला आहे. आम्ही अचूकतेसाठी प्रयत्नशील असलो तरी, कृपया लक्षात ठेवा की स्वयंचलित भाषांतरे त्रुटी किंवा अचूकतेच्या अभावाने युक्त असू शकतात. मूळ भाषेतील दस्तऐवज हा अधिकृत स्रोत मानला जावा. महत्त्वाच्या माहितीसाठी, व्यावसायिक मानवी भाषांतराची शिफारस केली जाते. या भाषांतराचा वापर करून उद्भवलेल्या कोणत्याही गैरसमज किंवा चुकीच्या अर्थासाठी आम्ही जबाबदार राहणार नाही.