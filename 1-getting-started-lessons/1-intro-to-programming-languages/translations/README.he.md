# הקדמה לשפות תכנות וכלי המקצוע

שיעור זה מכסה את היסודות של שפות התכנות. הנושאים שמובאים כאן חלים על רוב שפות התכנות המודרניות הקיימות כיום. בחלק 'כלי המקצוע', תלמד על תוכנות שימושיות שמסייעות לך כמפתח.

![תכנות יסודי](../../sketchnotes/webdev101-programming.png)
> הערת סקיצה מאת [Tomomi Imura](https://twitter.com/girlie_mac)

## שאלון לפני ההרצאה
[שאלון לפני ההרצאה](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/1)

## הקדמה

בשיעור זה נעבור על:

- מהו תכנות?
- סוגים של שפות תכנות
- אלמנטים בסיסיים של תכנית
- תוכנות וכלים שימושיים עבור מפתחים מקצועיים

> אפשר לעבור על השיעור הזה ב- [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## מהו תכנות?

תכנות (שגם מוכר כקידוד) הוא התהליך של כתיבת הוראות עבור מכשיר כמו מחשב או מכשיר נייד. אנו כותבים את ההוראות האלה באמצעות שפת תכנות, שלאחר מכן מפורשת על ידי המכשיר. ניתן להתייחס לקבוצות ההוראות הללו בשמות שונים, אבל *תוכנית*, *תוכנית מחשב*, *אפליקציה* ו-*ברי הוצאה לפועל* הן כמה שמות פופולריים..

תוכנית *יכולה להיות כל דבר שנכתב בקוד; אתרי אינטרנט, משחקים ואפליקציות לטלפון הם תוכניות. לאמנם ניתן ליצור תוכנית ללא כתיבת קוד, אך ההיגיון הבסיסי מתפרש על ידי המכשיר והלוגיקה הזו נכתבה ככל הנראה עם קוד. תוכנית ש*מריצה* או *מבצעת* קוד מבצעת הוראות. המכשיר שאיתו אתה קורא את השיעור הזה מריץ תוכנית כדי להדפיס אותו למסך שלך.

✅ בצע מחקר קטן: מי נחשב למתכנת המחשב הראשון בעולם?

## שפות תכנות

שפות תכנות מאפשרות למפתחים לכתוב הוראות למכשיר. מכשירים יכולים להבין רק בינארי (1 ו-0), ועבור *רוב* המפתחים זו לא דרך יעילה במיוחד לתקשר. שפות תכנות הן כלי התקשורת בין בני אדם למחשבים.

שפות תכנות מגיעות בפורמטים שונים ועשויות לשרת מטרות שונות. לדוגמה, JavaScript משמש בעיקר עבור יישומי אינטרנט, בעוד Bash משמש בעיקר עבור מערכות הפעלה.

*שפות ברמה נמוכה* דורשות בדרך כלל פחות שלבים מאשר *שפות ברמה גבוהה* כדי שהמכשיר יפרש הוראות. עם זאת, מה שהופך שפות ברמה גבוהה לפופולריות הוא הנוחות קריאה והתמיכה שלהן. JavaScript נחשבת לשפה ברמה גבוהה.

הקוד הבא ממחיש את ההבדל בין שפה ברמה גבוהה עם JavaScript לבין שפה ברמה נמוכה עם קוד הרכבה (assembly) של ARM.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

תאמינו או לא, *שניהם עושים את אותו הדבר** מדפיסים רצף של פיבונאצ'י עד 10.

רצף פיבונאצ'י [מוגדר](https://en.wikipedia.org/wiki/Fibonacci_number) כקבוצה של מספרים כך שכל מספר הוא הסכום של שני הקודמים, החל מ-0 ו-1. 10 המספרים הראשונים בעקבות רצף פיבונאצ'י הם 0, 1, 1, 2, 3, 5, 8, 13, 21 ו-34.

## אלמנטים של תוכנית

הוראה בודדת בתוכנית נקראת *הצהרה* ובדרך כלל תהיה לה תו או מרווח שורה המסמן היכן ההוראה מסתיימת, או *מופסקת (terminated)*. אופן סיום התוכנית משתנה עם כל שפה.

הצהרות בתוך תוכנית עשויות להסתמך על נתונים שסופקו על ידי משתמש או במקום אחר כדי לבצע הוראות. נתונים יכולים לשנות את אופן ההתנהגות של תוכנית, כך ששפות תכנות מגיעות עם דרך לאחסן נתונים באופן זמני, כך שניתן יהיה להשתמש בהם מאוחר יותר. אלה נקראים *משתנים*. משתנים הם הצהרות שמורות למכשיר לשמור נתונים בזיכרון שלו. משתנים בתוכניות דומים למשתנים באלגברה, שם יש להם שם ייחודי וערכם עשוי להשתנות עם הזמן.

יש סיכוי שהצהרות מסוימות לא יבוצעו על ידי מכשיר. זה בדרך כלל לפי תכנון כאשר נכתב על ידי המפתח או במקרה, כאשר מתרחשת שגיאה בלתי צפויה. סוג זה של שליטה על אפליקציה הופכת אותו לחסון יותר, וקל יותר לתחזוקה. בדרך כלל, שינויים אלה בשליטה מתרחשים כאשר מתקיימים תנאים מסוימים. הצהרה נפוצה המשמשת בתוכנות מודרניות בכדי לשלוט כיצד תוכנית פועלת היא ההצהרה 'אם..אז' (if..else).

✅ תלמדו עוד על הצהרות מסוג זה בשיעורים הבאים.

## כלי המקצוע

[![כלי המקצוע](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "כלי המסחר")

> 🎥 לחץ על התמונה למעלה בכדי לצפות בסרטון על כלי עבודה

בחלק זה תלמדו על כמה תוכנות שעשויות להיות שימושיות מאוד כשאתם מתחילים את מסע הפיתוח המקצועי שלכם.

**סביבת פיתוח** היא סט ייחודי של כלים ותכונות שמפתח משתמש בהן לעתים קרובות בעת כתיבת תוכנה. חלק מהכלים הללו הותאמו לצרכים הספציפיים של המפתח, ועשויים להשתנות עם הזמן אם אותו מפתח משנה סדרי עדיפויות בעבודה, בפרויקטים אישיים או כאשר הם משתמשים בשפת תכנות אחרת. סביבות פיתוח הן ייחודיות כמו המפתחים שמשתמשים בהן.

### עורכים

אחד הכלים החשובים ביותר לפיתוח תוכנה הוא העורך. עורכים הם המקום שבו אתה כותב את הקוד שלך ולפעמים המקום שבו אתה מפעיל את הקוד שלך.

מפתחים מסתמכים על עורכים מכמה סיבות נוספות:

- *ניפוי באגים* עוזר לחשוף באגים ושגיאות על ידי מעבר בקוד, שורה אחר שורה. לחלק מהעורכים יש יכולות ניפוי באגים; ניתן להתאים אותם ולהוסיף אותם לעורך עבור שפות תכנות ספציפיות.
- *הדגשת תחביר* מוסיפה צבעים ועיצוב טקסט לקוד, מה שמקל על הקריאה. רוב העורכים מאפשרים הדגשת תחביר מותאמת אישית.
- *הרחבות ואינטגרציות* הם כלים מיוחדים למפתחים, על ידי מפתחים. הכלים האלה לא היו מובנים בעורך הבסיסי. לדוגמה, מפתחים רבים מתעדים את הקוד שלהם כדי להסביר כיצד הוא עובד. הם עשויים להתקין תוסף בדיקת איות כדי למצוא שגיאות הקלדה בתיעוד. רוב ההרחבות מיועדות לשימוש בתוך עורך ספציפי, ורוב העורכים מגיעים עם דרך לחפש הרחבות זמינות.
- *התאמה אישית* מאפשרת למפתחים ליצור סביבת פיתוח ייחודית שתתאים לצרכיהם. רוב העורכים ניתנים להתאמה אישית ועשויים גם לאפשר למפתחים ליצור הרחבות מותאמות אישית.

#### עורכים פופולריים והרחבות לפיתוח אתרים

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  
- [www.sublimetext](https://www.sublimetext.com/)
  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### דפדפנים

כלי חיוני נוסף הוא הדפדפן. מפתחי אתרים מסתמכים על הדפדפן כדי לראות כיצד הקוד שלהם פועל באינטרנט. הוא משמש גם להצגת האלמנטים החזותיים של דף אינטרנט שנכתבים בעורך, כמו HTML.

דפדפנים רבים מגיעים עם *כלי מפתחים* (DevTools) המכילים קבוצה של תכונות ומידע מועילים, כדי לעזור למפתחים לאסוף וללכוד מידע חשוב על האפליקציה שלהם. לדוגמה: אם בדף אינטרנט יש שגיאות, לפעמים זה מועיל לדעת מתי הן התרחשו. ניתן להגדיר את DevTools בדפדפן כדי ללכוד מידע זה.

#### דפדפנים ו-DevTools פופולריים

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### כלים של שורת הפקודה (Command Line)

חלק מהמפתחים מעדיפים תצוגה פחות גרפית למשימות היומיות שלהם ומסתמכים על שורת הפקודה כדי להשיג זאת. כתיבת קוד דורשת כמות משמעותית של הקלדה וחלק מהמפתחים מעדיפים לא לשבש את הזרימה שלהם במקלדת. הם ישתמשו בקיצורי מקלדת כדי להחליף בין חלונות שולחן העבודה, לעבוד על קבצים שונים ולהשתמש בכלים. את רוב המשימות ניתן להשלים עם עכבר, אך יתרון אחד בשימוש בשורת הפקודה הוא שניתן לעשות הרבה עם כלי שורת הפקודה ללא צורך בהחלפה בין העכבר למקלדת. יתרון נוסף של שורת הפקודה הוא שהם ניתנים להגדרה ואתה יכול לשמור תצורה מותאמת אישית, לשנות אותה מאוחר יותר ולייבא אותה למכונות פיתוח אחרות. מכיוון שסביבות פיתוח הן כל כך ייחודיות לכל מפתח, חלק מהמפתחים יימנעו משימוש בשורת הפקודה, חלק יסתמכו עליה לחלוטין, וחלק מעדיפים שילוב של השניים.

### אפשרויות שורת פקודה פופולריות

האפשרויות עבור שורת הפקודה יהיו שונות בהתאם למערכת ההפעלה שבה אתה משתמש.

*💻 = מגיע מותקן מראש במערכת ההפעלה.*

#### חלונות (Windows)

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)

#### מאק (MacOS)

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### לינוקס (Linux)

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### כלים פופולריים של שורת הפקודה

- [Git](https://git-scm.com/) (💻 on most operating systems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### תיעוד 

כאשר מפתח רוצה ללמוד משהו חדש, סביר להניח שהוא יפנה לתיעוד (דוקומנטציה - Documentation) כדי ללמוד כיצד להשתמש בו. מפתחים מסתמכים לעתים קרובות על תיעוד כדי להדריך אותם כיצד להשתמש בכלים ובשפות כראוי, וגם כדי לקבל ידע מעמיק יותר כיצד זה עובד.

#### תיעוד פופולרי על פיתוח אתרים

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), from Mozilla, the publishers of the [Firefox](https://www.mozilla.org/firefox/) browser
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), from Google, publishers of [Chrome](https://www.google.com/chrome/)
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), for [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ ערכו קצת מחקר: עכשיו כשאתם יודעים את היסודות של הסביבה של מפתח אתרים, השוו אותה והציגו את הניגודים שלה עם סביבה של מעצב אתרים.

---

## 🚀 אתגר

השווה כמה שפות תכנות. מהן כמה מהתכונות הייחודיות של JavaScript לעומת Java? ומה לגבי COBOL נגד Go?

## חידון לאחר ההרצאה
[חידון לאחר ההרצאה](https://ahy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## סקירה ולימוד עצמי

למד קצת על השפות השונות הזמינות למתכנת. נסה לכתוב שורה בשפה אחת, ולאחר מכן כתוב אותה מחדש בשתי שפות אחרות. מה למדת?

## מטלה

[קורא את המסמכים](assignment.md)
