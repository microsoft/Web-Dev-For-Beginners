# কুইজ অ্যাপ

এই কুইজগুলো ডেটা সায়েন্স কারিকুলামের প্রাক-লেকচার এবং পোস্ট-লেকচার কুইজ, যা পাওয়া যাবে https://aka.ms/webdev-beginners এ।

## অনুবাদিত কুইজ সেট যোগ করা

একটি কুইজ অনুবাদ যোগ করতে হলে, `assets/translations` ফোল্ডারে মিলিত কুইজ কাঠামো তৈরি করুন। মূল কুইজগুলো `assets/translations/en` ফোল্ডারে রয়েছে। কুইজগুলো বিভিন্ন গ্রুপে বিভক্ত। সঠিক কুইজ সেকশনের সাথে নম্বর মিলিয়ে রাখুন। এই কারিকুলামে মোট ৪০টি কুইজ রয়েছে, যার গণনা ০ থেকে শুরু হয়।

  
<details>
<summary>একটি অনুবাদ ফাইলের কাঠামো এখানে দেখুন:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

অনুবাদ সম্পাদনার পর, `en` ফোল্ডারের নিয়ম অনুসরণ করে অনুবাদ ফোল্ডারের `index.js` ফাইলটি সম্পাদনা করে সব ফাইল ইমপোর্ট করুন।

`assets/translations` ফোল্ডারের `index.js` ফাইলটি সম্পাদনা করে নতুন অনুবাদিত ফাইলগুলো ইমপোর্ট করুন।

উদাহরণস্বরূপ, যদি আপনার অনুবাদ JSON ফাইল `ex.json` হয়, তাহলে 'ex' কে লোকালাইজেশন কী হিসেবে ব্যবহার করুন এবং নিচের মতো করে এটি ইমপোর্ট করুন:

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## কুইজ অ্যাপ লোকালভাবে চালানো

### পূর্বশর্ত

- একটি GitHub অ্যাকাউন্ট
- [Node.js এবং Git](https://nodejs.org/)

### ইনস্টলেশন ও সেটআপ

1. এই [টেমপ্লেট](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) থেকে একটি রিপোজিটরি তৈরি করুন।

1. আপনার নতুন রিপোজিটরি ক্লোন করুন এবং কুইজ-অ্যাপ ফোল্ডারে যান:

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. npm প্যাকেজ এবং ডিপেন্ডেন্সি ইনস্টল করুন:

   ```bash
   npm install
   ```

### অ্যাপ তৈরি করুন

1. সলিউশন তৈরি করতে, রান করুন:

   ```bash
   npm run build
   ```

### অ্যাপ চালু করুন

1. সলিউশন চালাতে, রান করুন:

    ```bash
    npm run dev
    ```

### [ঐচ্ছিক] লিন্টিং

1. কোড লিন্ট নিশ্চিত করতে, রান করুন:

    ```bash
    npm run lint
    ```

## কুইজ-অ্যাপ Azure-এ ডিপ্লয় করুন

### পূর্বশর্ত
- একটি Azure সাবস্ক্রিপশন। বিনামূল্যে সাইন আপ করুন [এখানে](https://aka.ms/azure-free)।

    _এই কুইজ-অ্যাপ ডিপ্লয় করার আনুমানিক খরচ: বিনামূল্যে_

[![Azure-এ ডিপ্লয় করুন](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

উপরের লিঙ্কের মাধ্যমে Azure-এ সাইন ইন করার পর, একটি সাবস্ক্রিপশন এবং রিসোর্স গ্রুপ নির্বাচন করুন:

- স্ট্যাটিক ওয়েব অ্যাপের বিবরণ: একটি নাম দিন এবং একটি হোস্টিং প্ল্যান নির্বাচন করুন।
- GitHub লগইন: আপনার ডিপ্লয়মেন্ট সোর্স GitHub হিসেবে সেট করুন, তারপর লগইন করে ফর্মের প্রয়োজনীয় ফিল্ডগুলো পূরণ করুন:
    - *সংগঠন* – আপনার সংগঠন নির্বাচন করুন।
    - *রিপোজিটরি* – Web Dev for Beginners কারিকুলামের রিপোজিটরি নির্বাচন করুন।
    - *ব্রাঞ্চ* - একটি ব্রাঞ্চ নির্বাচন করুন (main)।
- বিল্ড প্রিসেট: Azure Static Web Apps একটি ডিটেকশন অ্যালগরিদম ব্যবহার করে আপনার অ্যাপ্লিকেশনে ব্যবহৃত ফ্রেমওয়ার্ক সনাক্ত করে।
    - *অ্যাপ লোকেশন* - ./quiz-app
    - *এপিআই লোকেশন* -
    - *আউটপুট লোকেশন* - dist
- ডিপ্লয়মেন্ট: 'Review + Create' ক্লিক করুন, তারপর 'Create'।

    ডিপ্লয়মেন্ট সম্পন্ন হলে, আপনার রিপোজিটরির *.github* ডিরেক্টরিতে একটি ওয়ার্কফ্লো ফাইল তৈরি হবে। এই ওয়ার্কফ্লো ফাইলে ইভেন্টের নির্দেশনা থাকবে যা অ্যাপটি Azure-এ পুনরায় ডিপ্লয়মেন্ট ট্রিগার করবে, যেমন, _**main** ব্রাঞ্চে একটি **push**_।

    <details>
    <summary>উদাহরণ ওয়ার্কফ্লো ফাইল</summary>
    এখানে GitHub Actions ওয়ার্কফ্লো ফাইলের একটি উদাহরণ দেওয়া হলো:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- পোস্ট-ডিপ্লয়মেন্ট: ডিপ্লয়মেন্ট সম্পন্ন হওয়ার পর, 'Go to Deployment' ক্লিক করুন, তারপর 'View app in browser' ক্লিক করুন।

আপনার GitHub Action (ওয়ার্কফ্লো) সফলভাবে সম্পন্ন হলে, লাইভ পেজটি রিফ্রেশ করুন এবং আপনার অ্যাপ্লিকেশন দেখুন।

**অস্বীকৃতি**:  
এই নথিটি AI অনুবাদ পরিষেবা [Co-op Translator](https://github.com/Azure/co-op-translator) ব্যবহার করে অনুবাদ করা হয়েছে। আমরা যথাসাধ্য সঠিকতার জন্য চেষ্টা করি, তবে অনুগ্রহ করে মনে রাখবেন যে স্বয়ংক্রিয় অনুবাদে ত্রুটি বা অসঙ্গতি থাকতে পারে। এর মূল ভাষায় থাকা নথিটিকে প্রামাণিক উৎস হিসেবে বিবেচনা করা উচিত। গুরুত্বপূর্ণ তথ্যের জন্য, পেশাদার মানব অনুবাদ সুপারিশ করা হয়। এই অনুবাদ ব্যবহারের ফলে কোনো ভুল বোঝাবুঝি বা ভুল ব্যাখ্যা হলে আমরা দায়বদ্ধ থাকব না।