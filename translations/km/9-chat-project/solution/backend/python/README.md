# រត់កូដ

## ការតំឡើង

បង្កើតបរិបទស្នូល

```sh
python -m venv venv
source ./venv/bin/activate
```

## តំឡើងកម្មវិធីគាំទ្រ

```sh
pip install openai fastapi uvicorn python-dotenv
```

## រត់ API

```sh
# វិធីទី 1: ដំណើរការផ្ទាល់
python api.py

# វិធីទី 2: ប្រើ uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## សាកល្បង API

ចូលទៅកាន់ឯកសារប្រតិបត្តិការ API បែបអន្តរកម្មនៅ៖ `http://localhost:5000/docs`

## រត់ផ្នែកមុខ

ប្រាកដថាអ្នកឈរនៅក្នុងថតផ្នែកមុខ

ស្វែងរក *app.js* ប្ដូរ `BASE_URL` ទៅ URL ផ្នែកខាងក្រោយរបស់អ្នក

រត់វា

```
npx http-server -p 8000
```

សាកល្បងវាយសារមួយនៅក្នុងការជជែក អ្នកគួរតែឃើញចម្លើយ (ផ្តល់អោយបានថាអ្នកកំពុងរត់វានៅក្នុង Codespace ឬបានដាក់សញ្ញាសិទ្ធិចូលប្រើជាមុន)។

## ការតំឡើងសញ្ញាសិទ្ធិចូលប្រើ (បើអ្នកមិនបានរត់វានៅក្នុង Codespace)

មើល [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**ការបដិសេធ**៖
ឯកសារនេះត្រូវបានបកប្រែដោយប្រើសេវាបកប្រែ AI [Co-op Translator](https://github.com/Azure/co-op-translator)។ នៅខណៈពេលដែលយើងខិតខំសម្រាប់ភាពត្រឹមត្រូវ សូមចាប់អារម្មណ៍ថាការបកប្រែដោយស្វ័យប្រវត្តិអាចមានកំហុស ឬកម្រិតភាពមិនត្រឹមត្រូវ។ ឯកសារដើមនៅក្នុងភាសាដើមគួរត្រូវបានគេចាត់ទុកជាធនធានសំខាន់។ សម្រាប់ព័ត៌មានសំខាន់ណាស់ ការបកប្រែដោយមនុស្សជំនាញត្រូវបានផ្តល់អនុសាសន៍។ យើងមិនទទួលខុសត្រូវចំពោះការយល់ច្រឡំណាមួយ ឬការបកប្រែមិនត្រឹមត្រូវណាមួយអំពីការប្រើប្រាស់ការបកប្រែនេះឡើយ។
<!-- CO-OP TRANSLATOR DISCLAIMER END -->