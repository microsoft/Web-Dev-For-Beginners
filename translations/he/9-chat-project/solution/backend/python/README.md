# הפעלת קוד

## הגדרות

יצירת סביבה וירטואלית

```sh
python -m venv venv
source ./venv/bin/activate
```

## התקנת תלותים

```sh
pip install openai fastapi uvicorn python-dotenv
```

## הפעלת API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## בדיקת API

בקרו בתיעוד האינטראקטיבי של ה-API בכתובת: `http://localhost:5000/docs`

## הפעלת ממשק קדמי

וודאו שאתם נמצאים בתיקיית הממשק הקדמי

אתרו את *app.js*, שנו את `BASE_URL` לכתובת ה-URL של ה-backend שלכם

הפעילו את זה

```
npx http-server -p 8000
```

נסו להקליד הודעה בצ'אט, אתם אמורים לראות תגובה (בתנאי שאתם מפעילים את זה ב-Codespace או שהגדרתם אסימון גישה).

## הגדרת אסימון גישה (אם אינכם מפעילים את זה ב-Codespace)

ראו [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**הצהרת אחריות**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או פירושים שגויים הנובעים משימוש בתרגום זה.