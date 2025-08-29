<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7587943d38d095de8613e1b508609f5",
  "translation_date": "2025-08-29T01:12:57+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "he"
}
-->
# פרויקט תוסף לדפדפן חלק 2: קריאה ל-API ושימוש באחסון מקומי

## חידון לפני השיעור

[חידון לפני השיעור](https://ff-quizzes.netlify.app/web/quiz/25)

### מבוא

בשיעור זה, תלמדו כיצד לקרוא ל-API על ידי שליחת טופס התוסף לדפדפן שלכם ולהציג את התוצאות בתוסף. בנוסף, תלמדו כיצד לאחסן נתונים באחסון המקומי של הדפדפן לשימוש עתידי.

✅ עקבו אחר הקטעים הממוספרים בקבצים המתאימים כדי לדעת היכן למקם את הקוד שלכם.

### הגדרת האלמנטים לעבודה בתוסף:

עד עכשיו בניתם את ה-HTML עבור הטופס ואלמנט ה-`<div>` של התוצאות בתוסף שלכם. מעכשיו, תצטרכו לעבוד בקובץ `/src/index.js` ולבנות את התוסף שלכם צעד אחר צעד. עיינו ב[שיעור הקודם](../1-about-browsers/README.md) כדי להגדיר את הפרויקט שלכם וללמוד על תהליך הבנייה.

עבדו בקובץ `index.js` שלכם, והתחילו ביצירת משתני `const` שיחזיקו את הערכים הקשורים לשדות השונים:

```JavaScript
// form fields
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');

// results
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');
```

כל השדות הללו מתייחסים למחלקות ה-CSS שהגדרתם ב-HTML בשיעור הקודם.

### הוספת מאזינים

כעת, הוסיפו מאזיני אירועים לטופס ולכפתור הניקוי שמאפס את הטופס, כך שאם משתמש שולח את הטופס או לוחץ על כפתור האיפוס, משהו יקרה. הוסיפו גם קריאה לאתחול האפליקציה בתחתית הקובץ:

```JavaScript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

✅ שימו לב לקיצור הדרך המשמש להאזנה לאירועי שליחה או לחיצה, וכיצד האירוע מועבר לפונקציות handleSubmit או reset. האם תוכלו לכתוב את הקיצור הזה בפורמט ארוך יותר? איזה פורמט אתם מעדיפים?

### בניית הפונקציות init() ו-reset():

כעת תבנו את הפונקציה שמאתחלת את התוסף, שנקראת init():

```JavaScript
function init() {
	//if anything is in localStorage, pick it up
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	//set icon to be generic green
	//todo

	if (storedApiKey === null || storedRegion === null) {
		//if we don't have the keys, show the form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
        //if we have saved keys/regions in localStorage, show results when they load
        displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
};

function reset(e) {
	e.preventDefault();
	//clear local storage for region only
	localStorage.removeItem('regionName');
	init();
}

```

בפונקציה זו יש לוגיקה מעניינת. בקריאה שלה, האם אתם מבינים מה קורה?

- שני משתני `const` מוגדרים כדי לבדוק אם המשתמש שמר מפתח API וקוד אזור באחסון המקומי.
- אם אחד מהם הוא null, הציגו את הטופס על ידי שינוי הסגנון שלו ל-'block'.
- הסתירו את אזור התוצאות, את ההודעה הטעינה ואת כפתור הניקוי, והגדירו כל טקסט שגיאה למחרוזת ריקה.
- אם קיים מפתח וקוד אזור, התחילו שגרה שכוללת:
  - קריאה ל-API לקבלת נתוני שימוש בפחמן.
  - הסתרת אזור התוצאות.
  - הסתרת הטופס.
  - הצגת כפתור האיפוס.

לפני שתמשיכו, כדאי ללמוד על מושג חשוב מאוד שקיים בדפדפנים: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage). LocalStorage הוא דרך שימושית לאחסן מחרוזות בדפדפן כזוגות `key-value`. סוג זה של אחסון אינטרנטי ניתן לניהול על ידי JavaScript כדי לנהל נתונים בדפדפן. LocalStorage אינו פג תוקף, בעוד SessionStorage, סוג אחר של אחסון אינטרנטי, נמחק כאשר הדפדפן נסגר. לכל סוגי האחסון יש יתרונות וחסרונות לשימוש בהם.

> הערה - לתוסף הדפדפן שלכם יש אחסון מקומי משלו; חלון הדפדפן הראשי הוא מופע נפרד ומתנהג באופן עצמאי.

אתם מגדירים את מפתח ה-API שלכם כך שיהיה בעל ערך מחרוזת, לדוגמה, ותוכלו לראות שהוא מוגדר ב-Edge על ידי "בדיקה" של דף אינטרנט (ניתן ללחוץ לחיצה ימנית על דפדפן כדי לבדוק) ולעבור ללשונית Applications כדי לראות את האחסון.

![חלונית אחסון מקומי](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.he.png)

✅ חשבו על מצבים שבהם לא הייתם רוצים לאחסן נתונים מסוימים ב-LocalStorage. באופן כללי, שמירת מפתחות API ב-LocalStorage היא רעיון רע! האם אתם מבינים למה? במקרה שלנו, מכיוון שהאפליקציה שלנו מיועדת ללמידה בלבד ולא תפורסם בחנות אפליקציות, נשתמש בשיטה זו.

שימו לב שאתם משתמשים ב-Web API כדי לנהל את LocalStorage, בין אם באמצעות `getItem()`, `setItem()`, או `removeItem()`. זה נתמך באופן רחב בדפדפנים.

לפני שתבנו את הפונקציה `displayCarbonUsage()` שנקראת ב-init(), בואו נבנה את הפונקציונליות לטיפול בשליחת הטופס הראשונית.

### טיפול בשליחת הטופס

צרו פונקציה בשם `handleSubmit` שמקבלת ארגומנט אירוע `(e)`. עצרו את האירוע מלהתפשט (במקרה זה, אנחנו רוצים למנוע מהדפדפן להתרענן) וקראו לפונקציה חדשה, `setUpUser`, תוך העברת הארגומנטים `apiKey.value` ו-`region.value`. כך, אתם משתמשים בשני הערכים שמובאים דרך הטופס הראשוני כאשר השדות המתאימים מאוכלסים.

```JavaScript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

✅ רעננו את הזיכרון שלכם - ה-HTML שהגדרתם בשיעור הקודם כולל שני שדות קלט שערכיהם נתפסים דרך ה-`const` שהגדרתם בראש הקובץ, ושניהם מוגדרים כ-`required`, כך שהדפדפן מונע מהמשתמשים להזין ערכים ריקים.

### הגדרת המשתמש

נעבור לפונקציה `setUpUser`, כאן תגדירו ערכי אחסון מקומי עבור apiKey ו-regionName. הוסיפו פונקציה חדשה:

```JavaScript
function setUpUser(apiKey, regionName) {
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	//make initial call
	displayCarbonUsage(apiKey, regionName);
}
```

פונקציה זו מציגה הודעת טעינה בזמן שה-API נקרא. בשלב זה, הגעתם ליצירת הפונקציה החשובה ביותר בתוסף הדפדפן הזה!

### הצגת שימוש בפחמן

לבסוף, הגיע הזמן לשאול את ה-API!

לפני שנמשיך, כדאי לדון ב-APIs. APIs, או [ממשקי תכנות יישומים](https://www.webopedia.com/TERM/A/API.html), הם אלמנט קריטי בארגז הכלים של מפתחי אינטרנט. הם מספקים דרכים סטנדרטיות לתוכניות לתקשר ולהתחבר זו עם זו. לדוגמה, אם אתם בונים אתר אינטרנט שצריך לשאול מסד נתונים, ייתכן שמישהו יצר API שתוכלו להשתמש בו. בעוד שישנם סוגים רבים של APIs, אחד הפופולריים ביותר הוא [REST API](https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/).

✅ המונח 'REST' מייצג 'העברת מצב ייצוגי' ומאופיין בשימוש ב-URLs שונים כדי לאחזר נתונים. בצעו מחקר קטן על סוגי ה-APIs השונים הזמינים למפתחים. איזה פורמט מושך אתכם?

ישנם דברים חשובים לשים לב אליהם בפונקציה זו. ראשית, שימו לב למילת המפתח [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function). כתיבת הפונקציות שלכם כך שיפעלו באופן אסינכרוני פירושה שהן ממתינות לפעולה, כמו החזרת נתונים, שתושלם לפני שהן ממשיכות.

הנה סרטון קצר על `async`:

[![Async and Await לניהול הבטחות](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await לניהול הבטחות")

> 🎥 לחצו על התמונה למעלה לסרטון על async/await.

צרו פונקציה חדשה לשאול את ה-API של C02Signal:

```JavaScript
import axios from '../node_modules/axios';

async function displayCarbonUsage(apiKey, region) {
	try {
		await axios
			.get('https://api.co2signal.com/v1/latest', {
				params: {
					countryCode: region,
				},
				headers: {
					'auth-token': apiKey,
				},
			})
			.then((response) => {
				let CO2 = Math.floor(response.data.data.carbonIntensity);

				//calculateColor(CO2);

				loading.style.display = 'none';
				form.style.display = 'none';
				myregion.textContent = region;
				usage.textContent =
					Math.round(response.data.data.carbonIntensity) + ' grams (grams C02 emitted per kilowatt hour)';
				fossilfuel.textContent =
					response.data.data.fossilFuelPercentage.toFixed(2) +
					'% (percentage of fossil fuels used to generate electricity)';
				results.style.display = 'block';
			});
	} catch (error) {
		console.log(error);
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we have no data for the region you have requested.';
	}
}
```

זו פונקציה גדולה. מה קורה כאן?

- בהתאם לשיטות עבודה מומלצות, אתם משתמשים במילת המפתח `async` כדי לגרום לפונקציה הזו לפעול באופן אסינכרוני. הפונקציה מכילה בלוק `try/catch` מכיוון שהיא תחזיר הבטחה כאשר ה-API יחזיר נתונים. מכיוון שאין לכם שליטה על מהירות התגובה של ה-API (ייתכן שהוא לא יגיב כלל!), עליכם לטפל באי-ודאות זו על ידי קריאה אסינכרונית.
- אתם שואלים את ה-API של co2signal כדי לקבל את נתוני האזור שלכם, תוך שימוש במפתח ה-API שלכם. כדי להשתמש במפתח זה, עליכם להשתמש בסוג של אימות בפרמטרי הכותרת.
- ברגע שה-API מגיב, אתם מקצים אלמנטים שונים של נתוני התגובה שלו לחלקים במסך שהגדרתם להצגת נתונים אלו.
- אם יש שגיאה, או אם אין תוצאה, אתם מציגים הודעת שגיאה.

✅ שימוש בתבניות תכנות אסינכרוניות הוא כלי שימושי נוסף בארגז הכלים שלכם. קראו [על הדרכים השונות](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) שבהן ניתן להגדיר קוד מסוג זה.

ברכות! אם תבנו את התוסף שלכם (`npm run build`) ותתרעננו אותו בלשונית התוספים שלכם, יש לכם תוסף עובד! הדבר היחיד שלא עובד הוא האייקון, ותתקנו זאת בשיעור הבא.

---

## 🚀 אתגר

דיברנו על כמה סוגי APIs בשיעורים אלו. בחרו API אינטרנטי וחקרו לעומק מה הוא מציע. לדוגמה, עיינו ב-APIs הזמינים בדפדפנים כמו [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API). מה הופך API למעולה לדעתכם?

## חידון לאחר השיעור

[חידון לאחר השיעור](https://ff-quizzes.netlify.app/web/quiz/26)

## סקירה ולמידה עצמית

למדתם על LocalStorage ו-APIs בשיעור זה, שניהם כלים שימושיים מאוד למפתח אינטרנט מקצועי. האם תוכלו לחשוב כיצד שני הדברים הללו עובדים יחד? חשבו כיצד הייתם מתכננים אתר אינטרנט שיאחסן פריטים לשימוש על ידי API.

## משימה

[אמצו API](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). בעוד שאנו שואפים לדיוק, יש להיות מודעים לכך שתרגומים אוטומטיים עשויים להכיל שגיאות או אי-דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור הסמכותי. למידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי בני אדם. איננו נושאים באחריות לכל אי-הבנה או פרשנות שגויה הנובעת משימוש בתרגום זה.