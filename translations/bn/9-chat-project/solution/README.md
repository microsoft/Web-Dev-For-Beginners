<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T01:27:59+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "bn"
}
-->
# কোড চালানো

## সেটআপ

ভার্চুয়াল এনভায়রনমেন্ট তৈরি করুন

```sh
cd backend
python -m venv venv
source ./venv/bin/activate
```

## নির্ভরশীলতাগুলি ইনস্টল করুন

```sh
pip install openai flask flask-cors 
```

## এপিআই চালান

```sh
python api.py
```

## ফ্রন্টএন্ড চালান

নিশ্চিত করুন যে আপনি ফ্রন্টএন্ড ফোল্ডারে অবস্থান করছেন

*app.js* ফাইলটি খুঁজুন, `BASE_URL`-কে আপনার ব্যাকএন্ড URL-এ পরিবর্তন করুন

এটি চালান

```
npx http-server -p 8000
```

চ্যাটে একটি বার্তা টাইপ করার চেষ্টা করুন, আপনি একটি উত্তর দেখতে পাবেন (যদি আপনি এটি Codespace-এ চালাচ্ছেন বা একটি অ্যাক্সেস টোকেন সেটআপ করেছেন)।

## অ্যাক্সেস টোকেন সেটআপ করুন (যদি আপনি এটি Codespace-এ চালাচ্ছেন না)

[ব্যক্তিগত অ্যাক্সেস টোকেন সেটআপ](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) দেখুন

---

**অস্বীকৃতি**:  
এই নথিটি AI অনুবাদ পরিষেবা [Co-op Translator](https://github.com/Azure/co-op-translator) ব্যবহার করে অনুবাদ করা হয়েছে। আমরা যথাসম্ভব সঠিক অনুবাদের চেষ্টা করি, তবে অনুগ্রহ করে মনে রাখবেন যে স্বয়ংক্রিয় অনুবাদে ত্রুটি বা অসঙ্গতি থাকতে পারে। নথিটির মূল ভাষায় রচিত সংস্করণটিকেই প্রামাণিক উৎস হিসেবে বিবেচনা করা উচিত। গুরুত্বপূর্ণ তথ্যের জন্য পেশাদার মানব অনুবাদ সুপারিশ করা হয়। এই অনুবাদ ব্যবহারের ফলে সৃষ্ট কোনো ভুল বোঝাবুঝি বা ভুল ব্যাখ্যার জন্য আমরা দায়ী নই।