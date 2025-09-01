<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:47:00+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "mr"
}
-->
# कोड चालवा

## सेट अप

व्हर्च्युअल एन्व्हायर्नमेंट तयार करा

```sh
python -m venv venv
source ./venv/bin/activate
```

## डिपेंडन्सी इंस्टॉल करा

```sh
pip install openai flask flask-cors 
```

## API चालवा

```sh
python api.py
```

## फ्रंटएंड चालवा

फ्रंटएंड फोल्डरमध्ये उभे रहा

*app.js* शोधा, `BASE_URL` बदलून तुमच्या बॅकएंड URL वर सेट करा

ते चालवा

```
npx http-server -p 8000
```

चॅटमध्ये संदेश टाइप करण्याचा प्रयत्न करा, तुम्हाला प्रतिसाद दिसेल (जर तुम्ही हे Codespace मध्ये चालवत असाल किंवा access token सेट केला असेल).

## access token सेट करा (जर तुम्ही हे Codespace मध्ये चालवत नसाल)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) येथे पहा

---

**अस्वीकरण**:  
हा दस्तऐवज AI भाषांतर सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) वापरून भाषांतरित करण्यात आला आहे. आम्ही अचूकतेसाठी प्रयत्नशील असलो तरी कृपया लक्षात ठेवा की स्वयंचलित भाषांतरांमध्ये त्रुटी किंवा अचूकतेचा अभाव असू शकतो. मूळ भाषेतील दस्तऐवज हा अधिकृत स्रोत मानला जावा. महत्त्वाच्या माहितीसाठी व्यावसायिक मानवी भाषांतराची शिफारस केली जाते. या भाषांतराचा वापर करून निर्माण होणाऱ्या कोणत्याही गैरसमज किंवा चुकीच्या अर्थासाठी आम्ही जबाबदार राहणार नाही.