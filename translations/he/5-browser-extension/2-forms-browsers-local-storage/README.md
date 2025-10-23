<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8c8cd4af6086cc1d47e1d43aa4983d20",
  "translation_date": "2025-10-23T01:40:23+00:00",
  "source_file": "5-browser-extension/2-forms-browsers-local-storage/README.md",
  "language_code": "he"
}
-->
# פרויקט הרחבת דפדפן חלק 2: קריאה ל-API ושימוש באחסון מקומי

## שאלון לפני ההרצאה

[שאלון לפני ההרצאה](https://ff-quizzes.netlify.app/web/quiz/25)

## מבוא

זוכרים את הרחבת הדפדפן שהתחלתם לבנות? כרגע יש לכם טופס שנראה טוב, אבל הוא בעצם סטטי. היום נביא אותו לחיים על ידי חיבור לנתונים אמיתיים ונעניק לו זיכרון.

תחשבו על מחשבי בקרת המשימה של אפולו - הם לא רק הציגו מידע קבוע. הם תקשרו באופן קבוע עם החללית, התעדכנו בנתוני טלמטריה וזכרו פרמטרים קריטיים של המשימה. זה סוג ההתנהגות הדינמית שאנחנו בונים היום. ההרחבה שלכם תתחבר לאינטרנט, תאסוף נתוני סביבה אמיתיים ותזכור את ההגדרות שלכם לפעם הבאה.

אינטגרציה עם API עשויה להישמע מורכבת, אבל זה בעצם רק ללמד את הקוד שלכם איך לתקשר עם שירותים אחרים. בין אם אתם שולפים נתוני מזג אוויר, עדכונים מרשתות חברתיות או מידע על טביעת רגל פחמנית כמו שנעשה היום, הכל קשור ביצירת קשרים דיגיטליים אלו. נחקור גם כיצד דפדפנים יכולים לשמור מידע - בדומה לאופן שבו ספריות השתמשו בקטלוגים כדי לזכור היכן נמצאים ספרים.

בסוף השיעור הזה, תהיה לכם הרחבת דפדפן שמביאה נתונים אמיתיים, שומרת העדפות משתמש ומספקת חוויית שימוש חלקה. בואו נתחיל!

✅ עקבו אחרי הקטעים הממוספרים בקבצים המתאימים כדי לדעת היכן למקם את הקוד שלכם.

## הגדרת האלמנטים למניפולציה בהרחבה

לפני שה-JavaScript שלכם יכול לבצע מניפולציה על הממשק, הוא צריך הפניות לאלמנטים ספציפיים ב-HTML. תחשבו על זה כמו טלסקופ שצריך להיות מכוון לכוכבים מסוימים - לפני שגלילאו יכול היה לחקור את ירחי צדק, הוא היה צריך לאתר ולהתמקד בצדק עצמו.

בקובץ `index.js` שלכם, ניצור משתני `const` שיתפסו הפניות לכל אלמנט חשוב בטופס. זה דומה לאופן שבו מדענים מסמנים את הציוד שלהם - במקום לחפש בכל המעבדה בכל פעם, הם יכולים לגשת ישירות למה שהם צריכים.

```javascript
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

**מה הקוד הזה עושה:**
- **תופס** אלמנטים בטופס באמצעות `document.querySelector()` עם בוררי CSS
- **יוצר** הפניות לשדות קלט עבור שם האזור ומפתח ה-API
- **מקים** חיבורים לאלמנטים להצגת תוצאות עבור נתוני שימוש בפחמן
- **מגדיר** גישה לאלמנטים בממשק כמו אינדיקטורים לטעינה והודעות שגיאה
- **שומר** כל הפניה לאלמנט במשתנה `const` לשימוש חוזר בקוד שלכם

## הוספת מאזיני אירועים

עכשיו נגרום להרחבה שלכם להגיב לפעולות המשתמש. מאזיני אירועים הם הדרך של הקוד שלכם לעקוב אחרי אינטראקציות המשתמש. תחשבו עליהם כמו מפעילים במרכזיות טלפון מוקדמות - הם הקשיבו לשיחות נכנסות וחיברו את המעגלים הנכונים כשמישהו רצה לבצע שיחה.

```javascript
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
```

**הבנת המושגים הללו:**
- **מצמיד** מאזין שליחת טופס שמופעל כשמשתמשים לוחצים Enter או על כפתור השליחה
- **מחבר** מאזין לחיצה לכפתור הניקוי לאיפוס הטופס
- **מעביר** את אובייקט האירוע `(e)` לפונקציות המטפלות לצורך שליטה נוספת
- **מפעיל** את הפונקציה `init()` מיד כדי להגדיר את מצב ההתחלה של ההרחבה שלכם

✅ שימו לב לשימוש בקיצור תחביר של פונקציות חץ כאן. הגישה המודרנית הזו ב-JavaScript היא נקייה יותר מביטויי פונקציה מסורתיים, אבל שניהם עובדים באותה מידה!

## בניית פונקציות אתחול ואיפוס

בואו ניצור את הלוגיקה של האתחול עבור ההרחבה שלכם. הפונקציה `init()` היא כמו מערכת ניווט של ספינה שבודקת את המכשירים שלה - היא קובעת את המצב הנוכחי ומכווננת את הממשק בהתאם. היא בודקת אם מישהו השתמש בהרחבה שלכם בעבר וטוענת את ההגדרות הקודמות שלו.

הפונקציה `reset()` מספקת למשתמשים התחלה חדשה - בדומה לאופן שבו מדענים מאפסים את המכשירים שלהם בין ניסויים כדי להבטיח נתונים נקיים.

```javascript
function init() {
	// Check if user has previously saved API credentials
	const storedApiKey = localStorage.getItem('apiKey');
	const storedRegion = localStorage.getItem('regionName');

	// Set extension icon to generic green (placeholder for future lesson)
	// TODO: Implement icon update in next lesson

	if (storedApiKey === null || storedRegion === null) {
		// First-time user: show the setup form
		form.style.display = 'block';
		results.style.display = 'none';
		loading.style.display = 'none';
		clearBtn.style.display = 'none';
		errors.textContent = '';
	} else {
		// Returning user: load their saved data automatically
		displayCarbonUsage(storedApiKey, storedRegion);
		results.style.display = 'none';
		form.style.display = 'none';
		clearBtn.style.display = 'block';
	}
}

function reset(e) {
	e.preventDefault();
	// Clear stored region to allow user to choose a new location
	localStorage.removeItem('regionName');
	// Restart the initialization process
	init();
}
```

**פירוט מה קורה כאן:**
- **שולף** מפתח API ואזור שמורים מהאחסון המקומי של הדפדפן
- **בודק** אם זהו משתמש חדש (אין אישורים שמורים) או משתמש חוזר
- **מציג** את טופס ההגדרות למשתמשים חדשים ומסתיר אלמנטים אחרים בממשק
- **טוען** נתונים שמורים באופן אוטומטי עבור משתמשים חוזרים ומציג את אפשרות האיפוס
- **מנהל** את מצב ממשק המשתמש בהתבסס על נתונים זמינים

**מושגים חשובים על אחסון מקומי:**
- **שומר** נתונים בין סשנים של הדפדפן (בניגוד לאחסון סשן)
- **מאחסן** נתונים כזוגות מפתח-ערך באמצעות `getItem()` ו-`setItem()`
- **מחזיר** `null` כאשר אין נתונים קיימים עבור מפתח מסוים
- **מספק** דרך פשוטה לזכור העדפות והגדרות משתמש

> 💡 **הבנת אחסון בדפדפן**: [LocalStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) הוא כמו לתת להרחבה שלכם זיכרון מתמשך. תחשבו על איך ספריית אלכסנדריה העתיקה שמרה מגילות - המידע נשאר זמין גם כאשר חוקרים עזבו וחזרו.
>
> **מאפיינים מרכזיים:**
> - **שומר** נתונים גם לאחר סגירת הדפדפן
> - **שורד** הפעלות מחדש של המחשב ותקלות בדפדפן
> - **מספק** שטח אחסון משמעותי להעדפות משתמש
> - **מציע** גישה מיידית ללא עיכובים ברשת

> **הערה חשובה**: להרחבת הדפדפן שלכם יש אחסון מקומי מבודד משלה, שהוא נפרד מדפי אינטרנט רגילים. זה מספק אבטחה ומונע קונפליקטים עם אתרים אחרים.

ניתן לצפות בנתונים השמורים שלכם על ידי פתיחת כלי המפתחים של הדפדפן (F12), מעבר ללשונית **Application** והרחבת הסעיף **Local Storage**.

![תצוגת אחסון מקומי](../../../../translated_images/localstorage.472f8147b6a3f8d141d9551c95a2da610ac9a3c6a73d4a1c224081c98bae09d9.he.png)

> ⚠️ **שיקול אבטחה**: באפליקציות ייצור, שמירת מפתחות API ב-LocalStorage מהווה סיכון אבטחה מכיוון ש-JavaScript יכול לגשת לנתונים אלו. למטרות לימוד, הגישה הזו מתאימה, אבל באפליקציות אמיתיות יש להשתמש באחסון מאובטח בצד השרת עבור אישורים רגישים.

## טיפול בשליחת טופס

עכשיו נטפל במה שקורה כשמישהו שולח את הטופס שלכם. כברירת מחדל, דפדפנים טוענים מחדש את הדף כאשר טפסים נשלחים, אבל אנחנו ניירט את ההתנהגות הזו כדי ליצור חוויה חלקה יותר.

הגישה הזו דומה לאופן שבו בקרת משימה מטפלת בתקשורת עם חלליות - במקום לאפס את כל המערכת עבור כל שידור, הם שומרים על פעולה רציפה תוך עיבוד מידע חדש.

צרו פונקציה שתופסת את אירוע שליחת הטופס ומחלצת את הקלט של המשתמש:

```javascript
function handleSubmit(e) {
	e.preventDefault();
	setUpUser(apiKey.value, region.value);
}
```

**בקטע לעיל, עשינו:**
- **מונע** את התנהגות ברירת המחדל של שליחת טופס שתרענן את הדף
- **מחלץ** ערכי קלט משתמש משדות מפתח ה-API והאזור
- **מעביר** את נתוני הטופס לפונקציה `setUpUser()` לעיבוד
- **שומר** על התנהגות אפליקציה חד-עמודית על ידי הימנעות מרענון הדף

✅ זכרו ששדות הטופס שלכם ב-HTML כוללים את התכונה `required`, כך שהדפדפן מאמת אוטומטית שהמשתמשים מספקים גם את מפתח ה-API וגם את האזור לפני שהפונקציה הזו פועלת.

## הגדרת העדפות משתמש

הפונקציה `setUpUser` אחראית לשמירת האישורים של המשתמש ולהתחלת הקריאה הראשונה ל-API. זה יוצר מעבר חלק מההגדרות להצגת התוצאות.

```javascript
function setUpUser(apiKey, regionName) {
	// Save user credentials for future sessions
	localStorage.setItem('apiKey', apiKey);
	localStorage.setItem('regionName', regionName);
	
	// Update UI to show loading state
	loading.style.display = 'block';
	errors.textContent = '';
	clearBtn.style.display = 'block';
	
	// Fetch carbon usage data with user's credentials
	displayCarbonUsage(apiKey, regionName);
}
```

**שלב אחר שלב, מה קורה כאן:**
- **שומר** את מפתח ה-API ושם האזור באחסון המקומי לשימוש עתידי
- **מציג** אינדיקטור טעינה כדי ליידע את המשתמשים שהנתונים נטענים
- **מנקה** הודעות שגיאה קודמות מהתצוגה
- **מגלה** את כפתור הניקוי כדי לאפשר למשתמשים לאפס את ההגדרות שלהם מאוחר יותר
- **מתחיל** את הקריאה ל-API כדי לשאוב נתוני שימוש בפחמן אמיתיים

הפונקציה הזו יוצרת חוויית משתמש חלקה על ידי ניהול גם התמדה של נתונים וגם עדכוני ממשק משתמש בפעולה מתואמת אחת.

## הצגת נתוני שימוש בפחמן

עכשיו נחבר את ההרחבה שלכם למקורות נתונים חיצוניים דרך APIs. זה הופך את ההרחבה שלכם מכלי עצמאי למשהו שיכול לגשת למידע בזמן אמת מכל רחבי האינטרנט.

**הבנת APIs**

[APIs](https://www.webopedia.com/TERM/A/API.html) הם הדרך שבה אפליקציות שונות מתקשרות זו עם זו. תחשבו עליהם כמו מערכת הטלגרף שחיברה ערים רחוקות במאה ה-19 - מפעילים היו שולחים בקשות לתחנות רחוקות ומקבלים תגובות עם המידע המבוקש. כל פעם שאתם בודקים רשתות חברתיות, שואלים עוזר קולי שאלה או משתמשים באפליקציית משלוחים, APIs מאפשרים את חילופי הנתונים הללו.

**מושגים מרכזיים על REST APIs:**
- **REST** מייצג 'העברת מצב ייצוגי'
- **משתמש** בשיטות HTTP סטנדרטיות (GET, POST, PUT, DELETE) כדי לתקשר עם נתונים
- **מחזיר** נתונים בפורמטים צפויים, בדרך כלל JSON
- **מספק** נקודות קצה עקביות מבוססות URL לסוגים שונים של בקשות

✅ ה-[CO2 Signal API](https://www.co2signal.com/) שבו נשתמש מספק נתוני עוצמת פחמן בזמן אמת מרשתות חשמל ברחבי העולם. זה עוזר למשתמשים להבין את ההשפעה הסביבתית של השימוש שלהם בחשמל!

> 💡 **הבנת JavaScript אסינכרוני**: המילה [`async`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/async_function) מאפשרת לקוד שלכם להתמודד עם פעולות מרובות בו זמנית. כשאתם מבקשים נתונים משרת, אתם לא רוצים שכל ההרחבה שלכם תוקפא - זה יהיה כמו בקרת תעופה שמפסיקה את כל הפעולות בזמן שהיא מחכה לתגובה ממטוס אחד.
>
> **יתרונות מרכזיים:**
> - **שומר** על תגובתיות ההרחבה בזמן טעינת נתונים
> - **מאפשר** לקוד אחר להמשיך לפעול בזמן בקשות רשת
> - **משפר** את קריאות הקוד בהשוואה לדפוסי קריאה מסורתיים
> - **מאפשר** טיפול שגיאות אלגנטי לבעיות רשת

הנה סרטון קצר על `async`:

[![Async and Await לניהול הבטחות](https://img.youtube.com/vi/YwmlRkrxvkk/0.jpg)](https://youtube.com/watch?v=YwmlRkrxvkk "Async and Await לניהול הבטחות")

> 🎥 לחצו על התמונה למעלה לצפייה בסרטון על async/await.

צרו את הפונקציה לשאיבת והצגת נתוני שימוש בפחמן:

```javascript
// Modern fetch API approach (no external dependencies needed)
async function displayCarbonUsage(apiKey, region) {
	try {
		// Fetch carbon intensity data from CO2 Signal API
		const response = await fetch('https://api.co2signal.com/v1/latest', {
			method: 'GET',
			headers: {
				'auth-token': apiKey,
				'Content-Type': 'application/json'
			},
			// Add query parameters for the specific region
			...new URLSearchParams({ countryCode: region }) && {
				url: `https://api.co2signal.com/v1/latest?countryCode=${region}`
			}
		});

		// Check if the API request was successful
		if (!response.ok) {
			throw new Error(`API request failed: ${response.status}`);
		}

		const data = await response.json();
		const carbonData = data.data;

		// Calculate rounded carbon intensity value
		const carbonIntensity = Math.round(carbonData.carbonIntensity);

		// Update the user interface with fetched data
		loading.style.display = 'none';
		form.style.display = 'none';
		myregion.textContent = region.toUpperCase();
		usage.textContent = `${carbonIntensity} grams (grams CO₂ emitted per kilowatt hour)`;
		fossilfuel.textContent = `${carbonData.fossilFuelPercentage.toFixed(2)}% (percentage of fossil fuels used to generate electricity)`;
		results.style.display = 'block';

		// TODO: calculateColor(carbonIntensity) - implement in next lesson

	} catch (error) {
		console.error('Error fetching carbon data:', error);
		
		// Show user-friendly error message
		loading.style.display = 'none';
		results.style.display = 'none';
		errors.textContent = 'Sorry, we couldn\'t fetch data for that region. Please check your API key and region code.';
	}
}
```

**פירוט מה קורה כאן:**
- **משתמש** ב-API המודרני `fetch()` במקום ספריות חיצוניות כמו Axios לקוד נקי וללא תלות
- **מיישם** בדיקת שגיאות נכונה עם `response.ok` כדי לזהות כשלי API מוקדם
- **מטפל** בפעולות אסינכרוניות עם `async/await` לזרימת קוד קריאה יותר
- **מאמת** עם ה-CO2 Signal API באמצעות כותרת `auth-token`
- **מנתח** נתוני JSON מהתגובה ושולף מידע על עוצמת הפחמן
- **מעדכן** אלמנטים שונים בממשק עם נתוני סביבה מעוצבים
- **מספק** הודעות שגיאה ידידותיות למשתמש כאשר קריאות API נכשלות

**מושגים מרכזיים ב-JavaScript מודרני שמודגמים:**
- **תבניות טקסט** עם תחביר `${}` לעיצוב מחרוזות נקי
- **טיפול בשגיאות** עם בלוקים try/catch לאפליקציות יציבות
- **דפוס async/await** לניהול בקשות רשת בצורה אלגנטית
- **פירוק אובייקטים** לשליפת נתונים ספציפיים מתגובות API
- **שרשור שיטות** למניפולציות מרובות על DOM

✅ הפונקציה הזו מדגימה כמה מושגים חשובים בפיתוח ווב - תקשורת עם שרתים חיצוניים, טיפול באימות, עיבוד נתונים, עדכון ממשקים וניהול שגיאות בצורה אלגנטית. אלו מיומנויות בסיסיות שמפתחים מקצועיים משתמשים בהן באופן קבוע.

🎉 **מה שהשגתם:** יצרתם הרחבת דפדפן ש:
- **מתחברת** לאינטרנט ושואבת נתוני סביבה אמיתיים
- **שומרת** הגדרות משתמש בין סשנים
- **מטפלת** בשגיאות בצורה אלגנטית במקום לקרוס
- **מספקת** חוויית משתמש חלקה ומקצועית

בדקו את העבודה שלכם על ידי הרצת `npm run build` ורענון ההרחבה שלכם בדפדפן. עכשיו יש לכם עוקב טביעת רגל פחמנית פונקציונלי. השיעור הבא יוסיף פונקציונליות של אייקונים דינמיים להשלמת ההרחבה.

---

## אתגר סוכן GitHub Copilot 🚀

השתמשו במצב סוכן כדי להשלים את האתגר הבא:

**תיאור:** שפרו את הרחבת הדפדפן על ידי הוספת שיפורים בטיפול בשגיאות ותכונות חוויית משתמש. אתגר זה יעזור לכם לתרגל עבודה עם APIs, אחסון מקומי ומניפולציה על DOM באמצעות דפוסי JavaScript מודרניים.

**הנחיה:** צרו גרסה משופרת של הפונקציה displayCarbonUsage שכוללת: 1) מנגנון ניסיון חוזר לקריאות API שנכשלו עם backoff אקספוננציאלי, 2) אימות קלט לקוד האזור לפני ביצוע קריאת API, 3) אנימציית טעינה עם אינדיקטורים להתקדמות, 4) שמירת תגובות API באחסון המקומי עם חותמות זמן תפוגה (שמירה ל-30 דקות), ו-5) תכונה להצגת נתונים היסטוריים מקריאות API קודמות. בנוסף, הוסיפו הערות JSDoc בסגנון TypeScript לתיעוד כל הפרמטרים של הפונקציות וסוגי ההחזרה.

למדו עוד על [מצב סוכן](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) כאן.

## 🚀 אתגר

הרחיבו את ההבנה שלכם על APIs על ידי חקר העושר של APIs מבוססי דפדפן הזמינים לפיתוח ווב. בחרו אחד מ-APIs אלו ובנו הדגמה קטנה:

- [Geolocation API](https://developer.mozilla.org/docs/Web/API/Geolocation_API) - קבלת מיקום המשתמש הנוכחי
- [Notification API](https://developer.mozilla.org/docs/Web/API/Notifications_API) - שליחת התראות שולחן עבודה
- [HTML Drag and Drop API](https://developer.mozilla.org/docs/Web/API/HTML_Drag_and_Drop_API) - יצירת ממשקי גרירה אינטראקטיביים
- [Web Storage API](https://developer.mozilla.org/docs/Web/API/Web_Storage_API) - טכניקות אחסון מקומי מתקדמות
-
למדת על LocalStorage ועל APIs בשיעור הזה, שניהם מאוד שימושיים עבור מפתחי אתרים מקצועיים. האם אתה יכול לחשוב איך שני הדברים האלה עובדים יחד? נסה לחשוב איך היית מתכנן אתר אינטרנט שיאחסן פריטים לשימוש על ידי API.

## משימה

[אמצו API](assignment.md)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.