<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:48:52+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "hi"
}
-->
## वेब-डेव शुरुआती लोगों के लिए GIT के मूल बातें👶

## `Git` क्या है?
1. Git एक वितरित संस्करण नियंत्रण प्रणाली है।
2. पूरा कोडबेस और इतिहास हर डेवलपर के कंप्यूटर पर उपलब्ध होता है, 
   जिससे ब्रांचिंग और मर्जिंग आसान हो जाती है।
3. इसे कंप्यूटर फाइलों में बदलावों को ट्रैक करने के लिए संस्करण नियंत्रण प्रणाली (VCS) के रूप में उपयोग किया जाता है।

* वितरित संस्करण नियंत्रण
* कई डेवलपर्स के बीच काम को समन्वयित करता है  
* किसने क्या बदलाव किए और कब
* किसी भी समय वापस लौट सकते हैं
* लोकल और रिमोट रिपॉजिटरी

## GIT के सिद्धांत
* कोड इतिहास को ट्रैक करता है
* आपकी फाइलों के "स्नैपशॉट" लेता है
* आप तय करते हैं कि कब स्नैपशॉट लेना है, इसे "कमिट" करके
* आप किसी भी समय किसी भी स्नैपशॉट पर जा सकते हैं
* आप कमिट करने से पहले फाइलों को स्टेज कर सकते हैं

### Git और GitHub के बीच अंतर

| Git | GitHub |
| ------- | ----------- |
| Git एक सॉफ़्टवेयर है | GitHub एक क्लाउड सेवा है |
| Git सिस्टम पर लोकल रूप से इंस्टॉल होता है | GitHub वेब पर होस्ट किया जाता है |
| यह एक कमांड-लाइन टूल है | यह एक ग्राफिकल यूजर इंटरफेस है |
| Git को Linux द्वारा मेंटेन किया जाता है | GitHub को Microsoft द्वारा मेंटेन किया जाता है |
| यह संस्करण नियंत्रण और कोड साझा करने पर केंद्रित है | यह केंद्रीकृत स्रोत कोड होस्टिंग पर केंद्रित है |
| Git ओपन-सोर्स लाइसेंस प्राप्त है | GitHub में मुफ्त और भुगतान-योग्य टियर शामिल हैं |
| Git 2005 में रिलीज़ हुआ | GitHub 2008 में रिलीज़ हुआ |

## GIT इंस्टॉलेशन
* Linux (Debian)
    `$sudo apt-get install git`
* Linux (Fedora)
    `$sudo yum install git`
* Mac के लिए [डाउनलोड करें](http://git-scm.com/download/mac)
* Windows के लिए [डाउनलोड करें](http://git-scm.com/download/win)

### इंस्टॉलेशन प्रक्रिया के चरण:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. और फिर Continue Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### इंस्टॉलेशन के बाद हमें Git को Git Bash का उपयोग करके कॉन्फ़िगर करना होगा
1. `git config --global user.name 'YourName'`
2. `git config --global user.email 'YourEmail'`
___

## Git कमांड्स
___

### प्रोजेक्ट प्राप्त करना और बनाना

| कमांड | विवरण |
| ------- | ----------- |
| `git init` | एक लोकल Git रिपॉजिटरी को इनिशियलाइज़ करें |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | एक रिमोट रिपॉजिटरी की लोकल कॉपी बनाएं |

### बेसिक स्नैपशॉटिंग

| कमांड | विवरण |
| ------- | ----------- |
| `git status` | स्टेटस चेक करें |
| `git add [file-name.txt]` | एक फाइल को स्टेजिंग एरिया में जोड़ें |
| `git add -A` | सभी नई और बदली गई फाइलों को स्टेजिंग एरिया में जोड़ें |
| `git commit -m "[commit message]"` | बदलावों को कमिट करें |
| `git rm -r [file-name.txt]` | एक फाइल (या फोल्डर) हटाएं |
| `git push` | रिमोट रिपॉजिटरी पर पुश करें |
| `git pull` | रिमोट रिपॉजिटरी से नवीनतम बदलाव खींचें |

### ब्रांचिंग और मर्जिंग

| कमांड | विवरण |
| ------- | ----------- |
| `git branch` | ब्रांच की सूची (वर्तमान ब्रांच को * द्वारा चिह्नित किया गया है) |
| `git branch -a` | सभी ब्रांच की सूची (लोकल और रिमोट) |
| `git branch [branch name]` | एक नई ब्रांच बनाएं |
| `git branch -D [branch name]` | एक ब्रांच हटाएं |
| `git push origin --delete [branch name]` | एक रिमोट ब्रांच हटाएं |
| `git checkout -b [branch name]` | एक नई ब्रांच बनाएं और उस पर स्विच करें |
| `git checkout -b [branch name] origin/[branch name]` | एक रिमोट ब्रांच क्लोन करें और उस पर स्विच करें |
| `git branch -m [old branch name] [new branch name]` | एक लोकल ब्रांच का नाम बदलें |
| `git checkout [branch name]` | एक ब्रांच पर स्विच करें |
| `git checkout -` | अंतिम बार चेक की गई ब्रांच पर स्विच करें |
| `git checkout -- [file-name.txt]` | एक फाइल में बदलाव रद्द करें |
| `git merge [branch name]` | एक ब्रांच को सक्रिय ब्रांच में मर्ज करें |
| `git merge [source branch] [target branch]` | एक ब्रांच को टारगेट ब्रांच में मर्ज करें |
| `git stash` | एक गंदे वर्किंग डायरेक्टरी में बदलाव स्टैश करें |
| `git stash clear` | सभी स्टैश की गई एंट्री हटाएं |

### प्रोजेक्ट साझा करना और अपडेट करना

| कमांड | विवरण |
| ------- | ----------- |
| `git push origin [branch name]` | अपनी रिमोट रिपॉजिटरी पर एक ब्रांच पुश करें |
| `git push -u origin [branch name]` | रिमोट रिपॉजिटरी पर बदलाव पुश करें (और ब्रांच याद रखें) |
| `git push` | रिमोट रिपॉजिटरी पर बदलाव पुश करें (याद की गई ब्रांच) |
| `git push origin --delete [branch name]` | एक रिमोट ब्रांच हटाएं |
| `git pull` | लोकल रिपॉजिटरी को नवीनतम कमिट में अपडेट करें |
| `git pull origin [branch name]` | रिमोट रिपॉजिटरी से बदलाव खींचें |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | एक रिमोट रिपॉजिटरी जोड़ें |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | एक रिपॉजिटरी की ओरिजिन ब्रांच को SSH पर सेट करें |

### निरीक्षण और तुलना

| कमांड | विवरण |
| ------- | ----------- |
| `git log` | बदलाव देखें |
| `git log --summary` | बदलाव देखें (विस्तृत) |
| `git log --oneline` | बदलाव देखें (संक्षेप में) |
| `git diff [source branch] [target branch]` | मर्ज करने से पहले बदलाव का पूर्वावलोकन करें |

---

**अस्वीकरण**:  
यह दस्तावेज़ AI अनुवाद सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) का उपयोग करके अनुवादित किया गया है। जबकि हम सटीकता के लिए प्रयास करते हैं, कृपया ध्यान दें कि स्वचालित अनुवाद में त्रुटियां या अशुद्धियां हो सकती हैं। मूल भाषा में उपलब्ध मूल दस्तावेज़ को आधिकारिक स्रोत माना जाना चाहिए। महत्वपूर्ण जानकारी के लिए, पेशेवर मानव अनुवाद की सिफारिश की जाती है। इस अनुवाद के उपयोग से उत्पन्न किसी भी गलतफहमी या गलत व्याख्या के लिए हम उत्तरदायी नहीं हैं।