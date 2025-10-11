<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:46:23+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "ur"
}
-->
## ویب ڈویلپمنٹ کے ابتدائی افراد کے لیے GIT کی بنیادی باتیں👶

## `Git` کیا ہے؟
1. Git ایک تقسیم شدہ ورژن کنٹرول سسٹم ہے۔
2. پورا کوڈ بیس اور تاریخ ہر ڈویلپر کے کمپیوٹر پر دستیاب ہوتی ہے، 
   جو آسان برانچنگ اور مرجنگ کو ممکن بناتی ہے۔
3. یہ کمپیوٹر فائلز میں تبدیلیوں کو ٹریک کرنے کے لیے ورژن کنٹرول سسٹم (VCS) کے طور پر استعمال ہوتا ہے۔

* تقسیم شدہ ورژن کنٹرول
* متعدد ڈویلپرز کے درمیان کام کو ہم آہنگ کرتا ہے  
* کس نے کب اور کیا تبدیلیاں کیں
* کسی بھی وقت واپس جا سکتے ہیں
* لوکل اور ریموٹ ریپوز

## GIT کے تصورات
* کوڈ کی تاریخ کو ٹریک کرتا ہے
* آپ کی فائلز کے "اسنیپ شاٹس" لیتا ہے
* آپ فیصلہ کرتے ہیں کہ کب اسنیپ شاٹ لینا ہے، "commit" بنا کر
* آپ کسی بھی وقت کسی بھی اسنیپ شاٹ پر جا سکتے ہیں
* آپ فائلز کو commit کرنے سے پہلے stage کر سکتے ہیں

### Git اور GitHub کے درمیان فرق

| Git | GitHub |
| ------- | ----------- |
| Git ایک سافٹ ویئر ہے | GitHub ایک کلاؤڈ سروس ہے |
| Git سسٹم پر لوکل طور پر انسٹال ہوتا ہے | GitHub ویب پر ہوسٹ کیا جاتا ہے |
| یہ کمانڈ لائن ٹول ہے | یہ گرافیکل یوزر انٹرفیس ہے |
| Git کو لینکس کے ذریعے مینٹین کیا جاتا ہے | GitHub کو مائیکروسافٹ کے ذریعے مینٹین کیا جاتا ہے |
| یہ ورژن کنٹرول اور کوڈ شیئرنگ پر مرکوز ہے | یہ مرکزی سورس کوڈ ہوسٹنگ پر مرکوز ہے |
| Git اوپن سورس لائسنس یافتہ ہے | GitHub میں مفت اور پے فار یوز ٹائر شامل ہیں |
| Git 2005 میں ریلیز ہوا | GitHub 2008 میں ریلیز ہوا |

## GIT انسٹالیشن
* لینکس (Debian)
    `$sudo apt-get install git`
* لینکس (Fedora)
    `$sudo yum install git`
* [ڈاؤنلوڈ کریں](http://git-scm.com/download/mac) میک کے لیے
* [ڈاؤنلوڈ کریں](http://git-scm.com/download/win) ونڈوز کے لیے

### انسٹالیشن کے مراحل:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. پھر Continue Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### انسٹالیشن کے بعد ہمیں git کو git bash کے ذریعے کنفیگر کرنا ہوگا
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git کمانڈز
___

### پروجیکٹس حاصل کرنا اور بنانا

| کمانڈ | وضاحت |
| ------- | ----------- |
| `git init` | لوکل Git ریپوزٹری کو انیشیئلائز کریں |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | ریموٹ ریپوزٹری کی لوکل کاپی بنائیں |

### بنیادی اسنیپ شاٹنگ

| کمانڈ | وضاحت |
| ------- | ----------- |
| `git status` | اسٹیٹس چیک کریں |
| `git add [file-name.txt]` | فائل کو اسٹیجنگ ایریا میں شامل کریں |
| `git add -A` | تمام نئی اور تبدیل شدہ فائلز کو اسٹیجنگ ایریا میں شامل کریں |
| `git commit -m "[commit message]"` | تبدیلیاں commit کریں |
| `git rm -r [file-name.txt]` | فائل (یا فولڈر) کو ہٹائیں |
| `git push` | ریموٹ ریپوزٹری پر بھیجیں |
| `git pull` | ریموٹ ریپوزٹری سے تازہ ترین تبدیلیاں حاصل کریں |

### برانچنگ اور مرجنگ

| کمانڈ | وضاحت |
| ------- | ----------- |
| `git branch` | برانچز کی فہرست بنائیں (اسٹار موجودہ برانچ کو ظاہر کرتا ہے) |
| `git branch -a` | تمام برانچز کی فہرست بنائیں (لوکل اور ریموٹ) |
| `git branch [branch name]` | نئی برانچ بنائیں |
| `git branch -D [branch name]` | برانچ کو حذف کریں |
| `git push origin --delete [branch name]` | ریموٹ برانچ کو حذف کریں |
| `git checkout -b [branch name]` | نئی برانچ بنائیں اور اس پر سوئچ کریں |
| `git checkout -b [branch name] origin/[branch name]` | ریموٹ برانچ کو کلون کریں اور اس پر سوئچ کریں |
| `git branch -m [old branch name] [new branch name]` | لوکل برانچ کا نام تبدیل کریں |
| `git checkout [branch name]` | برانچ پر سوئچ کریں |
| `git checkout -` | آخری چیک کی گئی برانچ پر سوئچ کریں |
| `git checkout -- [file-name.txt]` | فائل میں تبدیلیاں رد کریں |
| `git merge [branch name]` | برانچ کو فعال برانچ میں مرج کریں |
| `git merge [source branch] [target branch]` | برانچ کو ٹارگٹ برانچ میں مرج کریں |
| `git stash` | گندے ورکنگ ڈائریکٹری میں تبدیلیاں اسٹیش کریں |
| `git stash clear` | تمام اسٹیشڈ انٹریز کو ہٹائیں |

### پروجیکٹس شیئر کرنا اور اپڈیٹ کرنا

| کمانڈ | وضاحت |
| ------- | ----------- |
| `git push origin [branch name]` | برانچ کو اپنی ریموٹ ریپوزٹری پر بھیجیں |
| `git push -u origin [branch name]` | تبدیلیاں ریموٹ ریپوزٹری پر بھیجیں (اور برانچ کو یاد رکھیں) |
| `git push` | تبدیلیاں ریموٹ ریپوزٹری پر بھیجیں (یاد رکھی گئی برانچ) |
| `git push origin --delete [branch name]` | ریموٹ برانچ کو حذف کریں |
| `git pull` | لوکل ریپوزٹری کو تازہ ترین commit پر اپڈیٹ کریں |
| `git pull origin [branch name]` | ریموٹ ریپوزٹری سے تبدیلیاں حاصل کریں |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | ریموٹ ریپوزٹری شامل کریں |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | ریپوزٹری کی origin برانچ کو SSH پر سیٹ کریں |

### معائنہ اور موازنہ

| کمانڈ | وضاحت |
| ------- | ----------- |
| `git log` | تبدیلیاں دیکھیں |
| `git log --summary` | تبدیلیاں دیکھیں (تفصیل سے) |
| `git log --oneline` | تبدیلیاں دیکھیں (مختصر طور پر) |
| `git diff [source branch] [target branch]` | مرج کرنے سے پہلے تبدیلیوں کا پیش نظارہ کریں |

---

**ڈسکلیمر**:  
یہ دستاویز AI ترجمہ سروس [Co-op Translator](https://github.com/Azure/co-op-translator) کا استعمال کرتے ہوئے ترجمہ کی گئی ہے۔ ہم درستگی کے لیے کوشش کرتے ہیں، لیکن براہ کرم آگاہ رہیں کہ خودکار ترجمے میں غلطیاں یا غیر درستیاں ہو سکتی ہیں۔ اصل دستاویز کو اس کی اصل زبان میں مستند ذریعہ سمجھا جانا چاہیے۔ اہم معلومات کے لیے، پیشہ ور انسانی ترجمہ کی سفارش کی جاتی ہے۔ ہم اس ترجمے کے استعمال سے پیدا ہونے والی کسی بھی غلط فہمی یا غلط تشریح کے ذمہ دار نہیں ہیں۔