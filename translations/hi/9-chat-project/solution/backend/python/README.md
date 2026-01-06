<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2026-01-06T17:18:52+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "hi"
}
-->
# कोड चलाएँ

## सेट अप

वर्चुअल एनवायरनमेंट बनाएं

```sh
python -m venv venv
source ./venv/bin/activate
```

## निर्भरताओं को स्थापित करें

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API चलाएँ

```sh
# विधि 1: प्रत्यक्ष निष्पादन
python api.py

# विधि 2: uvicorn का उपयोग करना
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API का परीक्षण करें

इंटरैक्टिव API डॉक्यूमेंटेशन पर जाएं: `http://localhost:5000/docs`

## फ्रंटेंड चलाएँ

सुनिश्चित करें कि आप फ्रंटेंड फ़ोल्डर में हैं

*app.js* खोजें, `BASE_URL` को अपने बैकएंड URL के अनुसार बदलें

इसे चलाएँ

```
npx http-server -p 8000
```

चैट में एक संदेश टाइप करने का प्रयास करें, आपको प्रतिक्रिया दिखनी चाहिए (बशर्ते आप इसे Codespace में चला रहे हों या एक एक्सेस टोकन सेट किया हो)।

## एक्सेस टोकन सेट करें (यदि आप इसे Codespace में नहीं चला रहे हैं)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) देखें

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**अस्वीकरण**:
इस दस्तावेज़ का अनुवाद AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) का उपयोग करके किया गया है। हम सही अनुवाद के लिए प्रयासरत हैं, लेकिन कृपया ध्यान रखें कि स्वचालित अनुवादों में त्रुटियाँ या गलतियाँ हो सकती हैं। मूल दस्तावेज़ अपनी मूल भाषा में प्रामाणिक स्रोत माना जाना चाहिए। महत्वपूर्ण जानकारी के लिए पेशेवर मानव अनुवाद की सलाह दी जाती है। इस अनुवाद के उपयोग से उत्पन्न किसी भी गलतफहमी या गलत व्याख्या के लिए हम उत्तरदायी नहीं हैं।
<!-- CO-OP TRANSLATOR DISCLAIMER END -->