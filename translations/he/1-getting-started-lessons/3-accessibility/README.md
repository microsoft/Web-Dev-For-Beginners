<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "e4cd5b1faed4adab5acf720f82798003",
  "translation_date": "2025-08-27T20:36:25+00:00",
  "source_file": "1-getting-started-lessons/3-accessibility/README.md",
  "language_code": "he"
}
-->
# יצירת דפי אינטרנט נגישים

![הכל על נגישות](../../../../translated_images/webdev101-a11y.8ef3025c858d897a403a1a42c0897c76e11b724d9a8a0c0578dd4316f7507622.he.png)
> איור מאת [Tomomi Imura](https://twitter.com/girlie_mac)

## חידון לפני ההרצאה
[חידון לפני ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/5)

> הכוח של האינטרנט טמון באוניברסליות שלו. גישה לכולם, ללא קשר למוגבלות, היא היבט חיוני.
>
> \- סר טימותי ברנרס-לי, מנהל W3C וממציא ה-World Wide Web

הציטוט הזה מדגיש בצורה מושלמת את החשיבות של יצירת אתרים נגישים. אפליקציה שאינה נגישה לכולם היא בהגדרה מפלה. כמפתחי אתרים, עלינו תמיד לחשוב על נגישות. כשמתמקדים בזה מההתחלה, תבטיחו שכל אחד יוכל לגשת לדפים שאתם יוצרים. בשיעור הזה תלמדו על הכלים שיכולים לעזור לכם לוודא שהנכסים הדיגיטליים שלכם נגישים וכיצד לבנות עם נגישות בראש.

> ניתן לקחת את השיעור הזה ב-[Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/accessibility/?WT.mc_id=academic-77807-sagibbon)!

## כלים לשימוש

### קוראי מסך

אחד הכלים המוכרים ביותר לנגישות הם קוראי מסך.

[קוראי מסך](https://en.wikipedia.org/wiki/Screen_reader) הם כלים נפוצים עבור אנשים עם לקויות ראייה. כמו שאנחנו משקיעים זמן לוודא שדפדפן מציג את המידע שאנחנו רוצים לשתף, עלינו גם לוודא שקורא מסך עושה זאת.

בצורתו הבסיסית ביותר, קורא מסך יקרא דף מלמעלה למטה בצורה קולית. אם הדף שלכם הוא כולו טקסט, הקורא יעביר את המידע בצורה דומה לדפדפן. כמובן, דפי אינטרנט לעיתים רחוקות הם טקסט בלבד; הם יכילו קישורים, גרפיקה, צבעים ורכיבים חזותיים אחרים. יש להקפיד שהמידע הזה ייקרא נכון על ידי קורא מסך.

כל מפתח אתרים צריך להכיר קורא מסך. כפי שצוין לעיל, זהו הכלי שהמשתמשים שלכם ישתמשו בו. כמו שאתם מכירים את אופן הפעולה של דפדפן, עליכם ללמוד כיצד פועל קורא מסך. למרבה המזל, קוראי מסך מובנים ברוב מערכות ההפעלה.

חלק מהדפדפנים כוללים גם כלים ותוספים מובנים שיכולים לקרוא טקסט בקול רם או אפילו לספק תכונות ניווט בסיסיות, כמו [כלי הנגישות של דפדפן Edge](https://support.microsoft.com/help/4000734/microsoft-edge-accessibility-features). כלים אלו חשובים גם הם, אך הם פועלים בצורה שונה מאוד מקוראי מסך ואין להתבלבל ביניהם לבין כלים לבדיקת קוראי מסך.

✅ נסו קורא מסך וכלי קריאת טקסט בדפדפן. ב-Windows [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1/?WT.mc_id=academic-77807-sagibbon) כלול כברירת מחדל, ו-[JAWS](https://webaim.org/articles/jaws/) ו-[NVDA](https://www.nvaccess.org/about-nvda/) ניתנים להתקנה. ב-macOS וב-iOS, [VoiceOver](https://support.apple.com/guide/voiceover/welcome/10) מותקן כברירת מחדל.

### זום

כלי נוסף שנמצא בשימוש נפוץ על ידי אנשים עם לקויות ראייה הוא זום. הסוג הבסיסי ביותר של זום הוא זום סטטי, הנשלט באמצעות `Control + סימן פלוס (+)` או על ידי הקטנת רזולוציית המסך. סוג זה של זום גורם לכל הדף לשנות גודל, ולכן שימוש ב-[עיצוב רספונסיבי](https://developer.mozilla.org/docs/Learn/CSS/CSS_layout/Responsive_Design) חשוב כדי לספק חוויית משתמש טובה ברמות זום מוגדלות.

סוג נוסף של זום מסתמך על תוכנה מיוחדת שמגדילה אזור מסוים של המסך ומאפשרת תנועה, בדומה לשימוש בזכוכית מגדלת אמיתית. ב-Windows, [Magnifier](https://support.microsoft.com/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198) מובנה, ו-[ZoomText](https://www.freedomscientific.com/training/zoomtext/getting-started/) היא תוכנה חיצונית עם יותר תכונות ובסיס משתמשים רחב יותר. גם ב-macOS וב-iOS יש תוכנת הגדלה מובנית בשם [Zoom](https://www.apple.com/accessibility/mac/vision/).

### בודקי ניגודיות

יש לבחור צבעים באתרים בקפידה כדי לענות על הצרכים של משתמשים עיוורי צבעים או אנשים שמתקשים לראות צבעים בעלי ניגודיות נמוכה.

✅ בדקו אתר שאתם אוהבים להשתמש בו מבחינת שימוש בצבעים באמצעות תוסף דפדפן כמו [בודק הניגודיות של WCAG](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp?hl=en-US&WT.mc_id=academic-77807-sagibbon). מה למדתם?

### Lighthouse

באזור כלי המפתחים של הדפדפן שלכם, תמצאו את הכלי Lighthouse. כלי זה חשוב לקבלת מבט ראשוני על הנגישות (כמו גם ניתוחים אחרים) של אתר אינטרנט. למרות שחשוב לא להסתמך אך ורק על Lighthouse, ציון של 100% הוא בסיס טוב להתחלה.

✅ מצאו את Lighthouse בפאנל כלי המפתחים של הדפדפן שלכם והריצו ניתוח על כל אתר. מה גיליתם?

## עיצוב לנגישות

נגישות היא נושא רחב יחסית. כדי לעזור לכם, ישנם משאבים רבים זמינים.

- [Accessible U - אוניברסיטת מינסוטה](https://accessibility.umn.edu/your-role/web-developers)

למרות שלא נוכל לכסות כל היבט של יצירת אתרים נגישים, להלן כמה עקרונות ליבה שתרצו ליישם. עיצוב דף נגיש מההתחלה הוא **תמיד** קל יותר מאשר לחזור לדף קיים ולהפוך אותו לנגיש.

## עקרונות תצוגה טובים

### פלטות צבעים בטוחות

אנשים רואים את העולם בדרכים שונות, וזה כולל צבעים. כשאתם בוחרים סכמת צבעים לאתר שלכם, עליכם לוודא שהיא נגישה לכולם. כלי נהדר ליצירת פלטות צבעים הוא [Color Safe](http://colorsafe.co/).

✅ זהו אתר אינטרנט שבו השימוש בצבעים בעייתי מאוד. מדוע?

### שימוש ב-HTML נכון

עם CSS ו-JavaScript ניתן לגרום לכל אלמנט להיראות כמו כל סוג של שליטה. `<span>` יכול לשמש ליצירת `<button>`, ו-`<b>` יכול להפוך לקישור. למרות שזה עשוי להיחשב קל יותר לעיצוב, זה לא מעביר דבר לקורא מסך. השתמשו ב-HTML המתאים בעת יצירת שליטה בדף. אם אתם רוצים קישור, השתמשו ב-`<a>`. שימוש ב-HTML הנכון לשליטה הנכונה נקרא שימוש ב-HTML סמנטי.

✅ גשו לכל אתר אינטרנט ובדקו אם המעצבים והמפתחים משתמשים ב-HTML כראוי. האם תוכלו למצוא כפתור שהיה צריך להיות קישור? רמז: לחצו לחיצה ימנית ובחרו 'View Page Source' בדפדפן שלכם כדי להסתכל על הקוד הבסיסי.

### יצירת היררכיית כותרות תיאורית

משתמשי קוראי מסך [מסתמכים רבות על כותרות](https://webaim.org/projects/screenreadersurvey8/#finding) כדי למצוא מידע ולנווט בדף. כתיבת תוכן כותרות תיאורי ושימוש בתגי כותרות סמנטיים חשובים ליצירת אתר שקל לניווט עבור משתמשי קוראי מסך.

### שימוש ברמזים חזותיים טובים

CSS מציע שליטה מלאה על המראה של כל אלמנט בדף. ניתן ליצור תיבות טקסט ללא מסגרת או קישורים ללא קו תחתון. למרבה הצער, הסרת הרמזים הללו יכולה להקשות על מי שתלוי בהם לזהות את סוג השליטה.

## החשיבות של טקסט קישורים

קישורים הם ליבה של הניווט באינטרנט. כתוצאה מכך, הבטחת קריאה נכונה של קישורים על ידי קורא מסך מאפשרת לכל המשתמשים לנווט באתר שלכם.

### קוראי מסך וקישורים

כפי שניתן לצפות, קוראי מסך קוראים את טקסט הקישור באותו אופן שבו הם קוראים כל טקסט אחר בדף. עם זאת, טקסט קישור כמו "לחץ כאן" או URL גולמי עלול להוות בעיה. טקסט קישור טוב מתאר בקצרה מה נמצא בצד השני של הקישור.

> הפינגווין הקטן, המכונה לעיתים פינגווין הפיה, הוא הפינגווין הקטן ביותר בעולם. [למידע נוסף על הפינגווין הקטן](https://en.wikipedia.org/wiki/Little_penguin).

✅ גלשו באינטרנט לכמה דקות כדי למצוא דפים שמשתמשים באסטרטגיות קישור לא ברורות. השוו אותם לאתרים עם קישורים טובים יותר. מה למדתם?

#### הערות למנועי חיפוש

כבונוס נוסף להבטחת נגישות האתר שלכם, תעזרו גם למנועי חיפוש לנווט באתר שלכם. מנועי חיפוש משתמשים בטקסט קישורים כדי ללמוד על נושאי הדפים. כך ששימוש בטקסט קישורים טוב עוזר לכולם!

### ARIA

דמיינו את הדף הבא:

| מוצר         | תיאור             | הזמנה         |
| ------------ | ------------------ | ------------ |
| Widget       | [תיאור](../../../../1-getting-started-lessons/3-accessibility/')      | [הזמנה](../../../../1-getting-started-lessons/3-accessibility/') |
| Super widget | [תיאור](../../../../1-getting-started-lessons/3-accessibility/')      | [הזמנה](../../../../1-getting-started-lessons/3-accessibility/') |

בדוגמה זו, חזרה על המילים "תיאור" ו"הזמנה" הגיונית עבור מי שמשתמש בדפדפן. עם זאת, משתמש קורא מסך ישמע רק את המילים "תיאור" ו"הזמנה" שוב ושוב ללא הקשר.

כדי לתמוך בתרחישים כאלה, HTML תומך במערכת מאפיינים הנקראת [Accessible Rich Internet Applications (ARIA)](https://developer.mozilla.org/docs/Web/Accessibility/ARIA). מאפיינים אלו מאפשרים לספק מידע נוסף לקוראי מסך.

> **NOTE**: כמו היבטים רבים ב-HTML, תמיכת דפדפנים וקוראי מסך עשויה להשתנות. עם זאת, רוב הלקוחות המרכזיים תומכים במאפייני ARIA.

ניתן להשתמש ב-`aria-label` כדי לתאר את הקישור כאשר פורמט הדף אינו מאפשר זאת.

✅ באופן כללי, שימוש בסימון סמנטי כפי שתואר לעיל עדיף על שימוש ב-ARIA, אך לעיתים אין מקבילה סמנטית עבור רכיבי HTML מסוימים. דוגמה טובה היא עץ. אין מקבילה ב-HTML לעץ, ולכן מזהים את ה-`<div>` הכללי עבור אלמנט זה עם תפקיד וערכי ARIA מתאימים. [התיעוד של MDN על ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA) מכיל מידע שימושי נוסף.

## תמונות

מובן מאליו שקוראי מסך אינם יכולים לקרוא אוטומטית מה יש בתמונה. הבטחת נגישות של תמונות אינה דורשת עבודה רבה - זה בדיוק מה שמאפיין `alt` נועד עבורו. כל תמונה משמעותית צריכה לכלול `alt` שמתאר מה היא. תמונות שהן דקורטיביות בלבד צריכות לכלול `alt` ריק: `alt=""`. זה מונע מקוראי מסך להכריז על תמונה דקורטיבית שלא לצורך.

✅ כפי שניתן לצפות, גם מנועי חיפוש אינם יכולים להבין מה יש בתמונה. הם גם משתמשים בטקסט alt. כך ששוב, הבטחת נגישות הדף שלכם מספקת בונוסים נוספים!

## המקלדת

חלק מהמשתמשים אינם יכולים להשתמש בעכבר או משטח מגע, אלא מסתמכים על אינטראקציות עם המקלדת כדי לעבור מאלמנט אחד למשנהו. חשוב שהאתר שלכם יציג את התוכן שלכם בסדר הגיוני כך שמשתמש מקלדת יוכל לגשת לכל אלמנט אינטראקטיבי כשהוא עובר למטה במסמך. אם תבנו את דפי האינטרנט שלכם עם סימון סמנטי ותשתמשו ב-CSS לעיצוב הפריסה החזותית שלהם, האתר שלכם אמור להיות ניתן לניווט באמצעות מקלדת, אך חשוב לבדוק זאת ידנית. למדו עוד על [אסטרטגיות ניווט באמצעות מקלדת](https://webaim.org/techniques/keyboard/).

✅ גשו לכל אתר אינטרנט ונסו לנווט בו באמצעות המקלדת בלבד. מה עובד, מה לא עובד? מדוע?

## סיכום

אינטרנט שנגיש לחלק מהמשתמשים בלבד אינו באמת 'רשת עולמית'. הדרך הטובה ביותר להבטיח שהאתרים שאתם יוצרים יהיו נגישים היא לשלב את עקרונות הנגישות הטובים ביותר מההתחלה. למרות שישנם צעדים נוספים, שילוב המיומנויות הללו בתהליך העבודה שלכם עכשיו יבטיח שכל הדפים שתיצרו יהיו נגישים.

---

## 🚀 אתגר

קחו את ה-HTML הזה ושכתבו אותו כך שיהיה נגיש ככל האפשר, בהתבסס על האסטרטגיות שלמדתם.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      Example
    </title>
    <link href='../assets/style.css' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="site-header">
      <p class="site-title">Turtle Ipsum</p>
      <p class="site-subtitle">The World's Premier Turtle Fan Club</p>
    </div>
    <div class="main-nav">
      <p class="nav-header">Resources</p>
      <div class="nav-list">
        <p class="nav-item nav-item-bull"><a href="https://www.youtube.com/watch?v=CMNry4PE93Y">"I like turtles"</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtle">Basic Turtle Info</a></p>
        <p class="nav-item nav-item-bull"><a href="https://en.wikipedia.org/wiki/Turtles_(chocolate)">Chocolate Turtles</a></p>
      </div>
    </div>
    <div class="main-content">
      <div>
        <p class="page-title">Welcome to Turtle Ipsum. 
            <a href="">Click here</a> to learn more.
        </p>
        <p class="article-text">
          Turtle ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="footer-section">
        <span class="button">Sign up for turtle news</span>
      </div><div class="footer-section">
        <p class="nav-header footer-title">
          Internal Pages
        </p>
        <div class="nav-list">
          <p class="nav-item nav-item-bull"><a href="../">Index</a></p>
          <p class="nav-item nav-item-bull"><a href="../semantic">Semantic Example</a></p>
        </div>
      </div>
      <p class="footer-copyright">&copy; 2016 Instrument</span>
    </div>
  </body>
</html>
```

## חידון לאחר ההרצאה
[חידון לאחר ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/6)

## סקירה ולימוד עצמי
לממשלות רבות יש חוקים הנוגעים לדרישות נגישות. קראו על חוקי הנגישות במדינתכם. מה נכלל בהם ומה לא? דוגמה לכך היא [אתר ממשלתי זה](https://accessibility.blog.gov.uk/).

## משימה

[נתחו אתר אינטרנט שאינו נגיש](assignment.md)

קרדיטים: [Turtle Ipsum](https://github.com/Instrument/semantic-html-sample) מאת Instrument

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס בינה מלאכותית [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. איננו נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.