<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:28:28+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "he"
}
-->
# מסגרת AI

ישנן מסגרות AI רבות שיכולות להאיץ משמעותית את הזמן הנדרש לבניית פרויקט. בפרויקט זה נתמקד בהבנת הבעיות שמסגרות אלו פותרות ונבנה פרויקט כזה בעצמנו.

## למה להשתמש במסגרת

כשמדובר בשימוש ב-AI, ישנן גישות שונות וסיבות שונות לבחירתן. הנה כמה מהן:

- **ללא SDK**: רוב מודלי ה-AI מאפשרים אינטראקציה ישירה עם המודל, למשל באמצעות בקשות HTTP. גישה זו עובדת ולעיתים היא האפשרות היחידה אם אין SDK זמין.
- **SDK**: שימוש ב-SDK הוא בדרך כלל הגישה המומלצת, שכן הוא מאפשר לכתוב פחות קוד כדי לתקשר עם המודל. עם זאת, הוא בדרך כלל מוגבל למודל ספציפי, ואם משתמשים במודלים שונים, ייתכן שיהיה צורך לכתוב קוד חדש כדי לתמוך בהם.
- **מסגרת**: מסגרת לוקחת את הדברים לרמה אחרת בכך שהיא מספקת API אחיד לכל המודלים, כאשר ההבדלים הם בדרך כלל בהגדרות הראשוניות. בנוסף, מסגרות מביאות הפשטות שימושיות כמו כלים, זיכרון, זרימות עבודה, סוכנים ועוד, תוך כתיבת פחות קוד. מכיוון שמסגרות הן בדרך כלל בעלות דעה ברורה, הן יכולות להיות מועילות מאוד אם מקבלים את הדרך שבה הן פועלות, אך עשויות להיות פחות יעילות אם מנסים לעשות משהו מותאם אישית שהמסגרת אינה מיועדת לו. לעיתים, מסגרת יכולה לפשט יתר על המידה, מה שעלול להוביל לחוסר הבנה של נושא חשוב שעלול לפגוע בביצועים בהמשך.

באופן כללי, השתמשו בכלי המתאים למשימה.

## מבוא

בשיעור זה נלמד:

- להשתמש במסגרת AI נפוצה.
- להתמודד עם בעיות נפוצות כמו שיחות, שימוש בכלים, זיכרון והקשר.
- לנצל זאת לבניית אפליקציות AI.

## הפקודה הראשונה

בדוגמה הראשונה שלנו, נלמד כיצד להתחבר למודל AI ולשאול אותו באמצעות פקודה.

### שימוש ב-Python

בדוגמה זו נשתמש ב-Langchain כדי להתחבר למודלים של GitHub. נשתמש במחלקה בשם `ChatOpenAI` ונגדיר את השדות `api_key`, `base_url` ו-`model`. הטוקן מתמלא אוטומטית בתוך GitHub Codespaces, ואם אתם מריצים את האפליקציה באופן מקומי, תצטרכו להגדיר טוקן גישה אישי כדי שזה יעבוד.

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

# works
response  = llm.invoke("What's the capital of France?")
print(response.content)
```

בקוד זה אנו:

- קוראים ל-`ChatOpenAI` כדי ליצור לקוח.
- משתמשים ב-`llm.invoke` עם פקודה כדי ליצור תגובה.
- מדפיסים את התגובה עם `print(response.content)`.

אתם אמורים לראות תגובה דומה ל:

```text
The capital of France is Paris.
```

## שיחת צ'אט

בקטע הקודם ראיתם כיצד השתמשנו במה שמכונה בדרך כלל "zero shot prompting", פקודה יחידה ואחריה תגובה.

עם זאת, לעיתים קרובות תמצאו את עצמכם במצב שבו יש צורך לשמור על שיחה של מספר הודעות המוחלפות ביניכם לבין עוזר ה-AI.

### שימוש ב-Python

ב-Langchain, ניתן לשמור את השיחה ברשימה. `HumanMessage` מייצגת הודעה ממשתמש, ו-`SystemMessage` היא הודעה שמטרתה להגדיר את "האישיות" של ה-AI. בדוגמה למטה, אנו מורים ל-AI לאמץ את האישיות של קפטן פיקארד ולמשתמש לשאול "ספר לי עליך" כפקודה.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

הקוד המלא לדוגמה זו נראה כך:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)
print(response.content)
```

אתם אמורים לראות תוצאה דומה ל:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

כדי לשמור את מצב השיחה, ניתן להוסיף את התגובה מהצ'אט כך שהשיחה תיזכר. הנה איך עושים זאת:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)

print(response.content)

print("---- Next ----")

messages.append(response)
messages.append(HumanMessage(content="Now that I know about you, I'm Chris, can I be in your crew?"))

response  = llm.invoke(messages)

print(response.content)

```

מה שאנו רואים מהשיחה לעיל הוא כיצד אנו מפעילים את ה-LLM פעמיים, תחילה עם השיחה שמורכבת משתי הודעות בלבד, ולאחר מכן פעם שנייה עם יותר הודעות שנוספו לשיחה.

למעשה, אם תריצו זאת, תראו את התגובה השנייה כמשהו כמו:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

אני אקח את זה כתשובה אולי ;)

## תגובות זורמות

TODO

## תבניות פקודות

TODO

## פלט מובנה

TODO

## קריאה לכלים

כלים הם הדרך שבה אנו נותנים ל-LLM יכולות נוספות. הרעיון הוא לספר ל-LLM על פונקציות שיש לו, ואם נעשית פקודה שמתאימה לתיאור של אחד מהכלים הללו, אז אנו קוראים להם.

### שימוש ב-Python

בואו נוסיף כמה כלים כך:

```python
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}
```

מה שאנו עושים כאן הוא יצירת תיאור של כלי בשם `add`. על ידי ירושה מ-`TypedDict` והוספת חברים כמו `a` ו-`b` מסוג `Annotated`, ניתן להמיר זאת לסכימה שה-LLM יכול להבין. יצירת הפונקציות היא מילון שמבטיח שאנו יודעים מה לעשות אם מזוהה כלי מסוים.

בואו נראה כיצד אנו קוראים ל-LLM עם הכלי הזה:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

כאן אנו קוראים ל-`bind_tools` עם מערך `tools` שלנו, וכך ה-LLM `llm_with_tools` עכשיו מכיר את הכלי הזה.

כדי להשתמש ב-LLM החדש הזה, ניתן להקליד את הקוד הבא:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

עכשיו, כשאנו קוראים ל-`invoke` על ה-LLM החדש הזה, שיש לו כלים, ייתכן שהמאפיין `tool_calls` יתמלא. אם כן, כלים מזוהים כוללים מאפיינים `name` ו-`args` שמזהים איזה כלי יש לקרוא ובאילו ארגומנטים. הקוד המלא נראה כך:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

אם תריצו את הקוד הזה, אתם אמורים לראות פלט דומה ל:

```text
TOOL CALL:  15
CONTENT: 
```

מה שהפלט הזה אומר הוא שה-LLM ניתח את הפקודה "מה זה 3 + 12" כמשמעות שהכלי `add` צריך להיקרא, והוא ידע זאת בזכות שמו, תיאורו ותיאורי שדות החברים. שהתשובה היא 15 זה בגלל הקוד שלנו שמשתמש במילון `functions` כדי להפעיל אותו:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### כלי מעניין יותר שמבצע קריאה ל-API אינטרנטי

כלים שמוסיפים שני מספרים הם מעניינים שכן הם ממחישים כיצד קריאה לכלים עובדת, אך בדרך כלל כלים נוטים לעשות משהו יותר מעניין כמו למשל קריאה ל-API אינטרנטי. בואו נעשה זאת עם הקוד הזה:

```python
class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

query = "Tell me a joke about animals"

# the rest of the code is the same
```

עכשיו, אם תריצו את הקוד הזה, תקבלו תגובה שאומרת משהו כמו:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

הנה הקוד במלואו:

```python
from langchain_openai import ChatOpenAI
import requests
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

tools = [add, joke]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "Tell me a joke about animals"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        # print("TOOL CALL: ", tool)
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

## הטמעה

וקטוריזציה של תוכן, השוואה באמצעות דמיון קוסינוסי

https://python.langchain.com/docs/how_to/embed_text/

### טועני מסמכים

PDF ו-CSV

## בניית אפליקציה

TODO

## משימה

## סיכום

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור הסמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. אנו לא נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.