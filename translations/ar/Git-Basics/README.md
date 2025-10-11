<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:45:39+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "ar"
}
-->
## أساسيات GIT للمبتدئين في تطوير الويب 👶

## ما هو `Git`؟
1. Git هو نظام تحكم في الإصدارات موزع.
2. قاعدة البيانات الكاملة والتاريخ متاحة على جهاز كل مطور، مما يسهل عملية إنشاء الفروع ودمجها.
3. يُستخدم كنظام تحكم في الإصدارات (VCS) لتتبع التغييرات في الملفات الحاسوبية.

* نظام تحكم موزع في الإصدارات  
* ينسق العمل بين عدة مطورين  
* معرفة من قام بإجراء التغييرات ومتى  
* إمكانية الرجوع إلى أي وقت سابق  
* مستودعات محلية وعن بُعد  

## مفاهيم GIT
* يتتبع تاريخ الكود  
* يأخذ "لقطات" لملفاتك  
* أنت تقرر متى تأخذ لقطة عن طريق إنشاء "commit"  
* يمكنك زيارة أي لقطة في أي وقت  
* يمكنك تجهيز الملفات قبل الالتزام  

### الفرق بين Git و GitHub

| Git | GitHub |
| ------- | ----------- |
| Git هو برنامج | GitHub هو خدمة سحابية |
| يتم تثبيت Git محليًا على النظام | GitHub مستضاف على الإنترنت |
| أداة تعتمد على سطر الأوامر | واجهة مستخدم رسومية |
| يتم صيانته بواسطة Linux | يتم صيانته بواسطة Microsoft |
| يركز على التحكم في الإصدارات ومشاركة الكود | يركز على استضافة الكود المصدر المركزي |
| Git مفتوح المصدر | GitHub يتضمن مستوى مجاني ومستوى مدفوع |
| تم إصدار Git في عام 2005 | تم إصدار GitHub في عام 2008 |

## تثبيت GIT
* Linux (Debian)  
    `$sudo apt-get install git`  
* Linux (Fedora)  
    `$sudo yum install git`  
* [تحميل](http://git-scm.com/download/mac) لنظام Mac  
* [تحميل](http://git-scm.com/download/win) لنظام Windows  

### خطوات عملية التثبيت:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. ثم متابعة Next > Next > Next > <b>Install</b>  
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### بعد التثبيت، نحتاج إلى إعداد Git باستخدام Git Bash
1. `git config --global user.name 'YourName'`  
2. `git config --global user.email 'YourEmail'`  
___

## أوامر Git
___

### الحصول على المشاريع وإنشاؤها

| الأمر | الوصف |
| ------- | ----------- |
| `git init` | تهيئة مستودع Git محلي |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | إنشاء نسخة محلية من مستودع بعيد |

### أخذ اللقطات الأساسية

| الأمر | الوصف |
| ------- | ----------- |
| `git status` | التحقق من الحالة |
| `git add [file-name.txt]` | إضافة ملف إلى منطقة التجهيز |
| `git add -A` | إضافة جميع الملفات الجديدة والمعدلة إلى منطقة التجهيز |
| `git commit -m "[commit message]"` | الالتزام بالتغييرات |
| `git rm -r [file-name.txt]` | إزالة ملف (أو مجلد) |
| `git push` | الدفع إلى المستودع البعيد |
| `git pull` | سحب أحدث التغييرات من المستودع البعيد |

### إنشاء الفروع ودمجها

| الأمر | الوصف |
| ------- | ----------- |
| `git branch` | عرض الفروع (الفرع الحالي يتم الإشارة إليه بعلامة النجمة) |
| `git branch -a` | عرض جميع الفروع (محلية وبعيدة) |
| `git branch [branch name]` | إنشاء فرع جديد |
| `git branch -D [branch name]` | حذف فرع |
| `git push origin --delete [branch name]` | حذف فرع بعيد |
| `git checkout -b [branch name]` | إنشاء فرع جديد والانتقال إليه |
| `git checkout -b [branch name] origin/[branch name]` | نسخ فرع بعيد والانتقال إليه |
| `git branch -m [old branch name] [new branch name]` | إعادة تسمية فرع محلي |
| `git checkout [branch name]` | الانتقال إلى فرع |
| `git checkout -` | الانتقال إلى الفرع الذي تم التحقق منه آخر مرة |
| `git checkout -- [file-name.txt]` | تجاهل التغييرات في ملف |
| `git merge [branch name]` | دمج فرع في الفرع النشط |
| `git merge [source branch] [target branch]` | دمج فرع في فرع مستهدف |
| `git stash` | تخزين التغييرات في دليل العمل |
| `git stash clear` | إزالة جميع الإدخالات المخزنة |

### مشاركة المشاريع وتحديثها

| الأمر | الوصف |
| ------- | ----------- |
| `git push origin [branch name]` | دفع فرع إلى المستودع البعيد |
| `git push -u origin [branch name]` | دفع التغييرات إلى المستودع البعيد (وتذكر الفرع) |
| `git push` | دفع التغييرات إلى المستودع البعيد (الفرع المتذكر) |
| `git push origin --delete [branch name]` | حذف فرع بعيد |
| `git pull` | تحديث المستودع المحلي إلى أحدث التزام |
| `git pull origin [branch name]` | سحب التغييرات من المستودع البعيد |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | إضافة مستودع بعيد |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | تعيين فرع الأصل للمستودع إلى SSH |

### التفتيش والمقارنة

| الأمر | الوصف |
| ------- | ----------- |
| `git log` | عرض التغييرات |
| `git log --summary` | عرض التغييرات (بالتفصيل) |
| `git log --oneline` | عرض التغييرات (بإيجاز) |
| `git diff [source branch] [target branch]` | معاينة التغييرات قبل الدمج |

---

**إخلاء المسؤولية**:  
تم ترجمة هذا المستند باستخدام خدمة الترجمة بالذكاء الاصطناعي [Co-op Translator](https://github.com/Azure/co-op-translator). بينما نسعى لتحقيق الدقة، يرجى العلم أن الترجمات الآلية قد تحتوي على أخطاء أو معلومات غير دقيقة. يجب اعتبار المستند الأصلي بلغته الأصلية المصدر الرسمي. للحصول على معلومات حاسمة، يُوصى بالاستعانة بترجمة بشرية احترافية. نحن غير مسؤولين عن أي سوء فهم أو تفسيرات خاطئة ناتجة عن استخدام هذه الترجمة.