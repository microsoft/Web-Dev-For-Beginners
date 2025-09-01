<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:46:47+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "hi"
}
-->
# कोड चलाएं

## सेटअप

वर्चुअल एनवायरनमेंट बनाएं

```sh
python -m venv venv
source ./venv/bin/activate
```

## डिपेंडेंसीज़ इंस्टॉल करें

```sh
pip install openai flask flask-cors 
```

## एपीआई चलाएं

```sh
python api.py
```

## फ्रंटएंड चलाएं

सुनिश्चित करें कि आप फ्रंटएंड फोल्डर में खड़े हैं

*app.js* को ढूंढें, `BASE_URL` को अपने बैकएंड URL में बदलें

इसे चलाएं

```
npx http-server -p 8000
```

चैट में एक संदेश टाइप करने की कोशिश करें, आपको एक प्रतिक्रिया दिखनी चाहिए (यदि आप इसे Codespace में चला रहे हैं या आपने एक्सेस टोकन सेट किया है)।

## एक्सेस टोकन सेट करें (यदि आप इसे Codespace में नहीं चला रहे हैं)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) देखें

---

**अस्वीकरण**:  
यह दस्तावेज़ AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) का उपयोग करके अनुवादित किया गया है। जबकि हम सटीकता सुनिश्चित करने का प्रयास करते हैं, कृपया ध्यान दें कि स्वचालित अनुवाद में त्रुटियां या अशुद्धियां हो सकती हैं। मूल भाषा में उपलब्ध मूल दस्तावेज़ को प्रामाणिक स्रोत माना जाना चाहिए। महत्वपूर्ण जानकारी के लिए, पेशेवर मानव अनुवाद की सिफारिश की जाती है। इस अनुवाद के उपयोग से उत्पन्न किसी भी गलतफहमी या गलत व्याख्या के लिए हम जिम्मेदार नहीं हैं।