<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "efa2ab875b8bb5a7883816506da6b6d2",
  "translation_date": "2025-11-04T02:34:40+00:00",
  "source_file": "4-typing-game/README.md",
  "language_code": "he"
}
-->
# תכנות מונחה אירועים - בניית משחק הקלדה

```mermaid
journey
    title Your Typing Game Development Journey
    section Foundation
      Plan game structure: 3: Student
      Design user interface: 4: Student
      Setup HTML elements: 4: Student
    section Functionality
      Handle user input: 4: Student
      Track timing: 5: Student
      Calculate accuracy: 5: Student
    section Features
      Add visual feedback: 5: Student
      Implement game logic: 5: Student
      Polish experience: 5: Student
```

## הקדמה

הנה משהו שכל מפתח יודע אבל כמעט לא מדברים עליו: להקליד מהר זה כוח על! 🚀 תחשבו על זה - ככל שתוכלו להעביר את הרעיונות שלכם מהמוח לעורך הקוד מהר יותר, כך היצירתיות שלכם תזרום בצורה חלקה יותר. זה כמו צינור ישיר בין המחשבות שלכם למסך.

```mermaid
pie title Game Features
    "Real-time Feedback" : 25
    "Performance Tracking" : 20
    "Interactive UI" : 20
    "Timer System" : 15
    "Quote Management" : 10
    "Results Display" : 10
```

רוצים לדעת אחת הדרכים הטובות ביותר לשפר את המיומנות הזו? ניחשתם נכון - אנחנו הולכים לבנות משחק!

```mermaid
flowchart LR
    A[Player starts game] --> B[Random quote displayed]
    B --> C[Player types characters]
    C --> D{Character correct?}
    D -->|Yes| E[Green highlight]
    D -->|No| F[Red highlight]
    E --> G[Update accuracy]
    F --> G
    G --> H{Quote complete?}
    H -->|No| C
    H -->|Yes| I[Calculate WPM]
    I --> J[Display results]
    J --> K[Play again?]
    K -->|Yes| B
    K -->|No| L[Game over]
    
    style A fill:#e1f5fe
    style D fill:#fff3e0
    style E fill:#e8f5e8
    style F fill:#ffebee
    style I fill:#f3e5f5
```

> בואו ניצור יחד משחק הקלדה מדהים!

מוכנים להשתמש בכל הכישורים שלמדתם ב-JavaScript, HTML ו-CSS? אנחנו הולכים לבנות משחק הקלדה שיאתגר אתכם עם ציטוטים אקראיים מהבלש האגדי [שרלוק הולמס](https://en.wikipedia.org/wiki/Sherlock_Holmes). המשחק יעקוב אחרי מהירות ודיוק ההקלדה שלכם - ותאמינו לי, זה ממכר יותר ממה שאתם חושבים!

```mermaid
mindmap
  root((Typing Game Development))
    User Interface
      Input Elements
      Visual Feedback
      Responsive Design
      Accessibility
    Game Logic
      Quote Selection
      Timer Management
      Accuracy Tracking
      Score Calculation
    Event Handling
      Keyboard Input
      Button Clicks
      Real-time Updates
      Game State Changes
    Performance Metrics
      Words Per Minute
      Character Accuracy
      Error Tracking
      Progress Display
    User Experience
      Immediate Feedback
      Clear Instructions
      Engaging Content
      Achievement System
```

![demo](../../../4-typing-game/images/demo.gif)

## מה כדאי לדעת

```mermaid
flowchart TD
    A[User Action] --> B{Event Type?}
    B -->|Key Press| C[Keyboard Event]
    B -->|Button Click| D[Mouse Event]
    B -->|Timer| E[Time Event]
    
    C --> F[Check Character]
    D --> G[Start/Reset Game]
    E --> H[Update Timer]
    
    F --> I{Correct?}
    I -->|Yes| J[Highlight Green]
    I -->|No| K[Highlight Red]
    
    J --> L[Update Score]
    K --> L
    L --> M[Check Game State]
    
    G --> N[Generate New Quote]
    H --> O[Display Time]
    
    M --> P{Game Complete?}
    P -->|Yes| Q[Show Results]
    P -->|No| R[Continue Game]
    
    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style I fill:#fff3e0
    style Q fill:#f3e5f5
```

לפני שנתחיל, ודאו שאתם מרגישים בנוח עם המושגים הבאים (אל תדאגו אם אתם צריכים רענון קצר - כולנו היינו שם!):

- יצירת שדות טקסט וכפתורים
- CSS והגדרת סגנונות באמצעות מחלקות  
- יסודות JavaScript  
  - יצירת מערך
  - יצירת מספר אקראי
  - קבלת הזמן הנוכחי

אם אחד מהמושגים האלה מרגיש לכם קצת חלוד, זה לגמרי בסדר! לפעמים הדרך הטובה ביותר לחזק את הידע היא לקפוץ לפרויקט וללמוד תוך כדי.

### 🔄 **בדיקת יסודות**
**הערכת בסיס**: לפני שמתחילים בפיתוח, ודאו שאתם מבינים:
- ✅ איך טפסים ואלמנטים קלט ב-HTML עובדים
- ✅ מחלקות CSS ועיצוב דינמי
- ✅ מאזיני אירועים ומטפלים ב-JavaScript
- ✅ מניפולציה של מערכים ובחירה אקראית
- ✅ מדידת זמן וחישובים

**מבחן עצמי מהיר**: האם תוכלו להסביר איך המושגים האלה עובדים יחד במשחק אינטראקטיבי?
- **אירועים** מופעלים כאשר משתמשים מתקשרים עם אלמנטים
- **מטפלים** מעבדים את האירועים ומעדכנים את מצב המשחק
- **CSS** מספק משוב חזותי לפעולות המשתמש
- **תזמון** מאפשר מדידת ביצועים והתקדמות במשחק

```mermaid
quadrantChart
    title Typing Game Skills Development
    x-axis Beginner --> Expert
    y-axis Static --> Interactive
    quadrant-1 Advanced Games
    quadrant-2 Real-time Apps
    quadrant-3 Basic Pages
    quadrant-4 Interactive Sites
    
    HTML Forms: [0.3, 0.2]
    CSS Styling: [0.4, 0.3]
    Event Handling: [0.7, 0.8]
    Game Logic: [0.8, 0.9]
    Performance Tracking: [0.9, 0.7]
```

## בואו נבנה את זה!

[יצירת משחק הקלדה באמצעות תכנות מונחה אירועים](./typing-game/README.md)

### ⚡ **מה תוכלו לעשות ב-5 הדקות הקרובות**
- [ ] לפתוח את קונסולת הדפדפן ולנסות להאזין לאירועי מקלדת עם `addEventListener`
- [ ] ליצור דף HTML פשוט עם שדה קלט ולבדוק זיהוי הקלדה
- [ ] לתרגל מניפולציה של מחרוזות על ידי השוואת טקסט מוקלד לטקסט יעד
- [ ] להתנסות עם `setTimeout` כדי להבין פונקציות תזמון

### 🎯 **מה תוכלו להשיג בשעה הקרובה**
- [ ] להשלים את מבחן השיעור ולהבין תכנות מונחה אירועים
- [ ] לבנות גרסה בסיסית של משחק ההקלדה עם אימות מילים
- [ ] להוסיף משוב חזותי להקלדה נכונה ושגויה
- [ ] ליישם מערכת ניקוד פשוטה המבוססת על מהירות ודיוק
- [ ] לעצב את המשחק שלכם עם CSS כדי להפוך אותו למושך חזותית

### 📅 **פיתוח משחק במהלך השבוע**
- [ ] להשלים את משחק ההקלדה המלא עם כל התכונות והליטושים
- [ ] להוסיף רמות קושי עם מורכבות מילים משתנה
- [ ] ליישם מעקב סטטיסטיקות משתמש (מילים לדקה, דיוק לאורך זמן)
- [ ] ליצור אפקטים קוליים ואנימציות לשיפור חוויית המשתמש
- [ ] להפוך את המשחק שלכם לרספונסיבי למכשירים ניידים
- [ ] לשתף את המשחק שלכם אונליין ולאסוף משוב ממשתמשים

### 🌟 **פיתוח אינטראקטיבי במהלך החודש**
- [ ] לבנות משחקים נוספים החוקרים דפוסי אינטראקציה שונים
- [ ] ללמוד על לולאות משחק, ניהול מצב ואופטימיזציית ביצועים
- [ ] לתרום לפרויקטים של פיתוח משחקים בקוד פתוח
- [ ] לשלוט במושגי תזמון מתקדמים ואנימציות חלקות
- [ ] ליצור תיק עבודות המציג יישומים אינטראקטיביים שונים
- [ ] להדריך אחרים המתעניינים בפיתוח משחקים ואינטראקציה עם משתמשים

## 🎯 לוח זמנים לשליטה במשחק ההקלדה

```mermaid
timeline
    title Game Development Learning Progression
    
    section Setup (10 minutes)
        Project Structure: HTML foundation
                         : CSS styling setup
                         : JavaScript file creation
        
    section User Interface (20 minutes)
        Interactive Elements: Input fields
                            : Button controls
                            : Display areas
                            : Responsive layout
        
    section Event Handling (25 minutes)
        User Interaction: Keyboard events
                        : Mouse events
                        : Real-time feedback
                        : State management
        
    section Game Logic (30 minutes)
        Core Functionality: Quote generation
                          : Character comparison
                          : Accuracy calculation
                          : Timer implementation
        
    section Performance Tracking (35 minutes)
        Metrics & Analytics: WPM calculation
                           : Error tracking
                           : Progress visualization
                           : Results display
        
    section Polish & Enhancement (45 minutes)
        User Experience: Visual feedback
                       : Sound effects
                       : Animations
                       : Accessibility features
        
    section Advanced Features (1 week)
        Extended Functionality: Difficulty levels
                              : Leaderboards
                              : Custom quotes
                              : Multiplayer options
        
    section Professional Skills (1 month)
        Game Development: Performance optimization
                        : Code architecture
                        : Testing strategies
                        : Deployment patterns
```

### 🛠️ סיכום ערכת הכלים לפיתוח משחקים

לאחר השלמת הפרויקט הזה, תשלוט ב:
- **תכנות מונחה אירועים**: ממשקי משתמש רספונסיביים שמגיבים לקלט
- **משוב בזמן אמת**: עדכונים חזותיים וביצועיים מיידיים
- **מדידת ביצועים**: מערכות תזמון וניקוד מדויקות
- **ניהול מצב משחק**: שליטה בזרימת האפליקציה וחוויית המשתמש
- **עיצוב אינטראקטיבי**: יצירת חוויות משתמש ממכרות ומרתקות
- **API מודרניים של דפדפן**: ניצול יכולות הדפדפן לאינטראקציות עשירות
- **דפוסי נגישות**: עיצוב כוללני לכל המשתמשים

**יישומים בעולם האמיתי**: הכישורים האלה מיושמים ישירות ב:
- **אפליקציות אינטרנט**: כל ממשק אינטראקטיבי או לוח בקרה
- **תוכנות חינוכיות**: פלטפורמות למידה וכלי הערכת מיומנויות
- **כלי פרודוקטיביות**: עורכי טקסט, IDE וכלי שיתוף פעולה
- **תעשיית המשחקים**: משחקי דפדפן ובידור אינטראקטיבי
- **פיתוח למובייל**: ממשקים מבוססי מגע וטיפול במחוות

**הרמה הבאה**: אתם מוכנים לחקור מסגרות משחק מתקדמות, מערכות מרובות משתתפים בזמן אמת או יישומים אינטראקטיביים מורכבים!

## קרדיטים

נכתב באהבה על ידי [כריסטופר האריסון](http://www.twitter.com/geektrainer)

---

**כתב ויתור**:  
מסמך זה תורגם באמצעות שירות תרגום AI [Co-op Translator](https://github.com/Azure/co-op-translator). בעוד שאנו שואפים לדיוק, יש להיות מודעים לכך שתרגומים אוטומטיים עשויים להכיל שגיאות או אי דיוקים. המסמך המקורי בשפתו המקורית צריך להיחשב כמקור סמכותי. עבור מידע קריטי, מומלץ להשתמש בתרגום מקצועי אנושי. איננו אחראים לאי הבנות או לפרשנויות שגויות הנובעות משימוש בתרגום זה.