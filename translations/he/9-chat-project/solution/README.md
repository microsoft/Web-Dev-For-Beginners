<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T01:28:56+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "he"
}
-->
# הפעלת קוד

## הגדרות

צור סביבה וירטואלית

```sh
cd backend
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
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי בני אדם. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.  