<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "0aaa930f076f2d83cc872ad157f8ffd3",
  "translation_date": "2025-10-22T21:44:18+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "bn"
}
-->
# কোড চালান

## সেট আপ

ভার্চুয়াল এনভায়রনমেন্ট তৈরি করুন

```sh
python -m venv venv
source ./venv/bin/activate
```

## নির্ভরশীলতা ইনস্টল করুন

```sh
pip install openai fastapi uvicorn python-dotenv
```

## API চালান

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## API পরীক্ষা করুন

ইন্টারঅ্যাকটিভ API ডকুমেন্টেশনে যান: `http://localhost:5000/docs`

## ফ্রন্টএন্ড চালান

নিশ্চিত করুন যে আপনি ফ্রন্টএন্ড ফোল্ডারে অবস্থান করছেন

*app.js* খুঁজুন, `BASE_URL` পরিবর্তন করুন আপনার ব্যাকএন্ড URL-এ

এটি চালান

```
npx http-server -p 8000
```

চ্যাটে একটি বার্তা টাইপ করার চেষ্টা করুন, আপনি একটি প্রতিক্রিয়া দেখতে পাবেন (যদি আপনি এটি Codespace-এ চালাচ্ছেন বা একটি অ্যাক্সেস টোকেন সেট আপ করেছেন)।

## অ্যাক্সেস টোকেন সেট আপ করুন (যদি আপনি এটি Codespace-এ চালাচ্ছেন না)

[Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) দেখুন

---

**অস্বীকৃতি**:  
এই নথিটি AI অনুবাদ পরিষেবা [Co-op Translator](https://github.com/Azure/co-op-translator) ব্যবহার করে অনুবাদ করা হয়েছে। আমরা যথাসাধ্য সঠিকতার জন্য চেষ্টা করি, তবে অনুগ্রহ করে মনে রাখবেন যে স্বয়ংক্রিয় অনুবাদে ত্রুটি বা অসঙ্গতি থাকতে পারে। নথিটির মূল ভাষায় থাকা আসল সংস্করণকে প্রামাণিক উৎস হিসেবে বিবেচনা করা উচিত। গুরুত্বপূর্ণ তথ্যের জন্য, পেশাদার মানব অনুবাদ সুপারিশ করা হয়। এই অনুবাদ ব্যবহারের ফলে কোনো ভুল বোঝাবুঝি বা ভুল ব্যাখ্যার জন্য আমরা দায়ী থাকব না।