<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:48:41+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "he"
}
-->
# הפעלת קוד

## הגדרה

צור סביבת עבודה וירטואלית

```sh
python -m venv venv
source ./venv/bin/activate
```

## התקנת תלותים

```sh
pip install openai flask flask-cors 
```

## הפעלת API

```sh
python api.py
```

## הפעלת ממשק קדמי

וודא שאתה נמצא בתיקיית ה-frontend

מצא את *app.js*, שנה את `BASE_URL` לכתובת ה-URL של ה-backend שלך

הפעל את זה

```
npx http-server -p 8000
```

נסה להקליד הודעה בצ'אט, אתה אמור לראות תגובה (בתנאי שאתה מפעיל את זה ב-Codespace או שהגדרת אסימון גישה).

## הגדרת אסימון גישה (אם אינך מפעיל את זה ב-Codespace)

ראה [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור הסמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.