<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "89f7f9f800ce7c9f149e98baaae8491a",
  "translation_date": "2025-08-29T01:17:35+00:00",
  "source_file": "3-terrarium/1-intro-to-html/README.md",
  "language_code": "he"
}
-->
# פרויקט טרריום חלק 1: מבוא ל-HTML

![מבוא ל-HTML](../../../../translated_images/webdev101-html.4389c2067af68e98280c1bde52b6c6269f399eaae3659b7c846018d8a7b0bbd9.he.png)
> איור מאת [Tomomi Imura](https://twitter.com/girlie_mac)

## שאלון לפני השיעור

[שאלון לפני השיעור](https://ff-quizzes.netlify.app/web/quiz/15)

> צפו בסרטון

> 
> [![סרטון יסודות Git ו-GitHub](https://img.youtube.com/vi/1TvxJKBzhyQ/0.jpg)](https://www.youtube.com/watch?v=1TvxJKBzhyQ)

### מבוא

HTML, או HyperText Markup Language, הוא ה'שלד' של האינטרנט. אם CSS 'מלביש' את ה-HTML ו-JavaScript מעניק לו חיים, אז HTML הוא הגוף של אפליקציית האינטרנט שלכם. התחביר של HTML אפילו משקף את הרעיון הזה, שכן הוא כולל תגיות כמו "head", "body" ו-"footer".

בשיעור הזה, נשתמש ב-HTML כדי לעצב את ה'שלד' של ממשק הטרריום הווירטואלי שלנו. הוא יכלול כותרת ושלושה עמודות: עמודה ימנית ושמאלית שבהן יהיו הצמחים הניתנים לגרירה, ואזור מרכזי שיהיה הטרריום שנראה כמו זכוכית. בסוף השיעור הזה, תוכלו לראות את הצמחים בעמודות, אך הממשק ייראה קצת מוזר; אל תדאגו, בחלק הבא נוסיף סגנונות CSS לממשק כדי לשפר את המראה.

### משימה

במחשב שלכם, צרו תיקייה בשם 'terrarium' ובתוכה קובץ בשם 'index.html'. תוכלו לעשות זאת ב-Visual Studio Code לאחר יצירת תיקיית הטרריום על ידי פתיחת חלון חדש ב-VS Code, לחיצה על 'open folder' וניווט לתיקייה החדשה שלכם. לחצו על כפתור 'file' הקטן בפאנל ה-Explorer וצרו את הקובץ החדש:

![Explorer ב-VS Code](../../../../translated_images/vs-code-index.e2986cf919471eb984a0afef231380c8b132b000635105f2397bd2754d1b689c.he.png)

או

השתמשו בפקודות הבאות ב-git bash:
* `mkdir terrarium`
* `cd terrarium`
* `touch index.html`
* `code index.html` או `nano index.html`

> קבצי index.html מציינים לדפדפן שזהו הקובץ ברירת המחדל בתיקייה; כתובות URL כמו `https://anysite.com/test` עשויות להיבנות באמצעות מבנה תיקיות הכולל תיקייה בשם `test` עם `index.html` בתוכה; `index.html` לא חייב להופיע בכתובת ה-URL.

---

## תגיות DocType ו-html

השורה הראשונה בקובץ HTML היא ה-doctype שלו. זה אולי מפתיע שצריך לכלול את השורה הזו בראש הקובץ, אבל היא אומרת לדפדפנים ישנים שעליהם להציג את הדף במצב סטנדרטי, בהתאם למפרט הנוכחי של HTML.

> טיפ: ב-VS Code, תוכלו לרחף מעל תגית ולקבל מידע על השימוש בה ממדריכי MDN Reference.

השורה השנייה צריכה להיות תגית הפתיחה `<html>`, ואחריה תגית הסגירה שלה `</html>`. תגיות אלו הן האלמנטים השורשיים של הממשק שלכם.

### משימה

הוסיפו את השורות הללו בראש קובץ `index.html` שלכם:

```HTML
<!DOCTYPE html>
<html></html>
```

✅ ישנם כמה מצבים שונים שניתן לקבוע באמצעות הגדרת ה-DocType עם מחרוזת שאילתה: [מצב Quirks ומצב Standards](https://developer.mozilla.org/docs/Web/HTML/Quirks_Mode_and_Standards_Mode). מצבים אלו שימשו לתמיכה בדפדפנים ישנים מאוד שאינם בשימוש כיום (Netscape Navigator 4 ו-Internet Explorer 5). תוכלו להיצמד להצהרת ה-doctype הסטנדרטית.

---

## ה-'head' של המסמך

אזור ה-'head' של מסמך HTML כולל מידע חיוני על דף האינטרנט שלכם, הידוע גם בשם [מטא-נתונים](https://developer.mozilla.org/docs/Web/HTML/Element/meta). במקרה שלנו, אנו מוסרים לשרת האינטרנט שאליו הדף הזה יישלח לצורך הצגה, את ארבעת הדברים הבאים:

-   הכותרת של הדף
-   מטא-נתונים של הדף כולל:
    -   'ערכת תווים', שמספרת על קידוד התווים המשמש בדף
    -   מידע על הדפדפן, כולל `x-ua-compatible` שמציין שדפדפן IE=edge נתמך
    -   מידע על איך ה-viewport צריך להתנהג כשהוא נטען. הגדרת ה-viewport עם קנה מידה ראשוני של 1 שולטת ברמת הזום כשהדף נטען לראשונה.

### משימה

הוסיפו בלוק 'head' למסמך שלכם בין תגיות הפתיחה והסגירה `<html>`.

```html
<head>
	<title>Welcome to my Virtual Terrarium</title>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
```

✅ מה יקרה אם תגדירו תגית מטא של viewport כך: `<meta name="viewport" content="width=600">`? קראו עוד על [viewport](https://developer.mozilla.org/docs/Web/HTML/Viewport_meta_tag).

---

## ה-'body' של המסמך

### תגיות HTML

ב-HTML, אתם מוסיפים תגיות לקובץ .html שלכם כדי ליצור אלמנטים של דף אינטרנט. לכל תגית בדרך כלל יש תגית פתיחה ותגית סגירה, כמו זו: `<p>hello</p>` כדי לציין פסקה. צרו את גוף הממשק שלכם על ידי הוספת סט תגיות `<body>` בתוך זוג תגיות `<html>`; הסימון שלכם נראה עכשיו כך:

### משימה

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to my Virtual Terrarium</title>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body></body>
</html>
```

כעת, תוכלו להתחיל לבנות את הדף שלכם. בדרך כלל, משתמשים בתגיות `<div>` כדי ליצור את האלמנטים הנפרדים בדף. ניצור סדרה של אלמנטים `<div>` שיכילו תמונות.

### תמונות

תגית HTML אחת שאינה זקוקה לתגית סגירה היא `<img>`, מכיוון שיש לה אלמנט `src` שמכיל את כל המידע שהדף צריך כדי להציג את הפריט.

צרו תיקייה באפליקציה שלכם בשם `images` ובתוכה הוסיפו את כל התמונות בתיקיית [source code](../../../../3-terrarium/solution/images); (יש 14 תמונות של צמחים).

### משימה

הוסיפו את תמונות הצמחים הללו לשתי עמודות בין תגיות `<body></body>`:

```html
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
```

> הערה: Spans לעומת Divs. Divs נחשבים לאלמנטים 'בלוק', ו-Spans הם 'אינליין'. מה יקרה אם תשנו את ה-divs ל-spans?

עם הסימון הזה, הצמחים מופיעים כעת על המסך. זה נראה די רע, מכיוון שהם עדיין לא מעוצבים באמצעות CSS, ונעשה זאת בשיעור הבא.

לכל תמונה יש טקסט חלופי שיופיע גם אם אינכם יכולים לראות או להציג תמונה. זהו מאפיין חשוב לכלול לצורך נגישות. למדו עוד על נגישות בשיעורים עתידיים; לעת עתה, זכרו שהמאפיין alt מספק מידע חלופי לתמונה אם משתמש מסיבה כלשהי אינו יכול לצפות בה (בגלל חיבור איטי, שגיאה במאפיין src, או אם המשתמש משתמש בקורא מסך).

✅ האם שמתם לב שלכל תמונה יש את אותו טקסט חלופי? האם זו פרקטיקה טובה? מדוע כן או לא? האם תוכלו לשפר את הקוד הזה?

---

## סימון סמנטי

באופן כללי, עדיף להשתמש ב'סמנטיקה' משמעותית בעת כתיבת HTML. מה זה אומר? זה אומר שאתם משתמשים בתגיות HTML כדי לייצג את סוג הנתונים או האינטראקציה שלשמה הן נועדו. לדוגמה, טקסט הכותרת הראשית בדף צריך להשתמש בתגית `<h1>`.

הוסיפו את השורה הבאה ממש מתחת לתגית הפתיחה `<body>`:

```html
<h1>My Terrarium</h1>
```

שימוש בסימון סמנטי כמו שימוש בכותרות `<h1>` ורשימות לא מסודרות `<ul>` עוזר לקוראי מסך לנווט בדף. באופן כללי, כפתורים צריכים להיכתב כ-`<button>` ורשימות כ-`<li>`. למרות שזה _אפשרי_ להשתמש באלמנטים `<span>` מעוצבים במיוחד עם מנגנוני לחיצה כדי לדמות כפתורים, עדיף למשתמשים עם מוגבלויות להשתמש בטכנולוגיות כדי לקבוע היכן בדף נמצא כפתור, ולתקשר איתו, אם האלמנט מופיע ככפתור. מסיבה זו, נסו להשתמש בסימון סמנטי ככל האפשר.

✅ צפו בקורא מסך וב-[איך הוא מתקשר עם דף אינטרנט](https://www.youtube.com/watch?v=OUDV1gqs9GA). האם אתם יכולים להבין מדוע סימון לא סמנטי עשוי לתסכל את המשתמש?

## הטרריום

החלק האחרון של הממשק כולל יצירת סימון שייעוצב כדי ליצור טרריום.

### משימה:

הוסיפו את הסימון הזה מעל תגית `</div>` האחרונה:

```html
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
```

✅ למרות שהוספתם את הסימון הזה למסך, אתם לא רואים שום דבר מוצג. מדוע?

---

## 🚀אתגר

ישנם כמה תגיות 'ישנות' ב-HTML שעדיין כיף לשחק איתן, למרות שלא כדאי להשתמש בתגיות מיושנות כמו [תגיות אלו](https://developer.mozilla.org/docs/Web/HTML/Element#Obsolete_and_deprecated_elements) בסימון שלכם. ובכל זאת, האם תוכלו להשתמש בתגית `<marquee>` הישנה כדי לגרום לכותרת h1 לגלול אופקית? (אם תעשו זאת, אל תשכחו להסיר אותה לאחר מכן)

## שאלון אחרי השיעור

[שאלון אחרי השיעור](https://ff-quizzes.netlify.app/web/quiz/16)

## סקירה ולימוד עצמי

HTML הוא מערכת בנייה 'מוכחת' שעזרה לבנות את האינטרנט למה שהוא היום. למדו מעט על ההיסטוריה שלו על ידי לימוד תגיות ישנות וחדשות. האם תוכלו להבין מדוע חלק מהתגיות הוסרו וחלקן נוספו? אילו תגיות עשויות להיות מוצגות בעתיד?

למדו עוד על בניית אתרים לאינטרנט ולמכשירים ניידים ב-[Microsoft Learn](https://docs.microsoft.com/learn/modules/build-simple-website/?WT.mc_id=academic-77807-sagibbon).

## משימה

[תרגלו את ה-HTML שלכם: צרו דגם של בלוג](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית נחשב למקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי מתרגם אנושי. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.