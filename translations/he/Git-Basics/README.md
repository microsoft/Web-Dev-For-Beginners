## יסודות GIT למתחילים בפיתוח אתרים👶

## מה זה `Git`?
1. Git הוא מערכת מבוזרת לניהול גרסאות.
2. כל בסיס הקוד וההיסטוריה זמינים על מחשב של כל מפתח, מה שמאפשר יצירת ענפים ומיזוגים בקלות.
3. הוא משמש כמערכת ניהול גרסאות (VCS) למעקב אחר שינויים בקבצי מחשב.

* ניהול גרסאות מבוזר
* תיאום עבודה בין מספר מפתחים  
* מי ביצע אילו שינויים ומתי
* אפשרות לחזור אחורה בכל זמן
* מאגר מקומי ומאגר מרוחק

## מושגים ב-GIT
* עוקב אחרי היסטוריית הקוד
* לוקח "תמונות מצב" של הקבצים שלך
* אתה מחליט מתי לקחת תמונת מצב על ידי ביצוע "commit"
* ניתן לבקר בכל תמונת מצב בכל זמן
* ניתן להוסיף קבצים לשלב ההכנה לפני ביצוע commit

### ההבדל בין Git ל-GitHub

| Git | GitHub |
| ------- | ----------- |
| Git הוא תוכנה | GitHub הוא שירות ענן |
| Git מותקן מקומית על המערכת | GitHub מתארח באינטרנט |
| זהו כלי שורת פקודה | זהו ממשק משתמש גרפי |
| Git מנוהל על ידי Linux | GitHub מנוהל על ידי Microsoft |
| מתמקד בניהול גרסאות ושיתוף קוד | מתמקד באחסון קוד מקור מרכזי |
| Git הוא בעל רישיון קוד פתוח | GitHub כולל שכבה חינמית ושכבה בתשלום |
| Git שוחרר בשנת 2005 | GitHub שוחרר בשנת 2008 |

## התקנת GIT
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* [הורדה](http://git-scm.com/download/mac) עבור Mac
* [הורדה](http://git-scm.com/download/win) עבור Windows

### שלבי תהליך ההתקנה:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. ואז להמשיך Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### לאחר ההתקנה יש להגדיר את git באמצעות git bash
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## פקודות Git
___

### קבלת ויצירת פרויקטים

| פקודה | תיאור |
| ------- | ----------- |
| `git init` | אתחול מאגר Git מקומי |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | יצירת עותק מקומי של מאגר מרוחק |

### צילום תמונות מצב בסיסיות

| פקודה | תיאור |
| ------- | ----------- |
| `git status` | בדיקת סטטוס |
| `git add [file-name.txt]` | הוספת קובץ לאזור ההכנה |
| `git add -A` | הוספת כל הקבצים החדשים והמשתנים לאזור ההכנה |
| `git commit -m "[commit message]"` | ביצוע commit לשינויים |
| `git rm -r [file-name.txt]` | הסרת קובץ (או תיקייה) |
| `git push` | דחיפה למאגר מרוחק |
| `git pull` | משיכת שינויים אחרונים ממאגר מרוחק |

### יצירת ענפים ומיזוגם

| פקודה | תיאור |
| ------- | ----------- |
| `git branch` | רשימת ענפים (הכוכבית מציינת את הענף הנוכחי) |
| `git branch -a` | רשימת כל הענפים (מקומיים ומרוחקים) |
| `git branch [branch name]` | יצירת ענף חדש |
| `git branch -D [branch name]` | מחיקת ענף |
| `git push origin --delete [branch name]` | מחיקת ענף מרוחק |
| `git checkout -b [branch name]` | יצירת ענף חדש ומעבר אליו |
| `git checkout -b [branch name] origin/[branch name]` | שכפול ענף מרוחק ומעבר אליו |
| `git branch -m [old branch name] [new branch name]` | שינוי שם של ענף מקומי |
| `git checkout [branch name]` | מעבר לענף |
| `git checkout -` | מעבר לענף האחרון שנבחר |
| `git checkout -- [file-name.txt]` | ביטול שינויים בקובץ |
| `git merge [branch name]` | מיזוג ענף לתוך הענף הפעיל |
| `git merge [source branch] [target branch]` | מיזוג ענף לתוך ענף יעד |
| `git stash` | שמירת שינויים בסביבת עבודה לא נקייה |
| `git stash clear` | הסרת כל השמירות |

### שיתוף ועדכון פרויקטים

| פקודה | תיאור |
| ------- | ----------- |
| `git push origin [branch name]` | דחיפת ענף למאגר המרוחק שלך |
| `git push -u origin [branch name]` | דחיפת שינויים למאגר מרוחק (ושמירת הענף) |
| `git push` | דחיפת שינויים למאגר מרוחק (ענף שמור) |
| `git push origin --delete [branch name]` | מחיקת ענף מרוחק |
| `git pull` | עדכון מאגר מקומי לגרסה האחרונה |
| `git pull origin [branch name]` | משיכת שינויים ממאגר מרוחק |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | הוספת מאגר מרוחק |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | הגדרת ענף מקור של מאגר ל-SSH |

### בדיקה והשוואה

| פקודה | תיאור |
| ------- | ----------- |
| `git log` | צפייה בשינויים |
| `git log --summary` | צפייה בשינויים (מפורט) |
| `git log --oneline` | צפייה בשינויים (בקצרה) |
| `git diff [source branch] [target branch]` | תצוגה מקדימה של שינויים לפני מיזוג |

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום מבוסס AI [Co-op Translator](https://github.com/Azure/co-op-translator). למרות שאנו שואפים לדיוק, יש לקחת בחשבון שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי על ידי אדם. אנו לא נושאים באחריות לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.