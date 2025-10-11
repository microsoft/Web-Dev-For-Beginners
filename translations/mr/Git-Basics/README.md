<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5cf5e1ed51455fefed4895fcc4d6ba2a",
  "translation_date": "2025-10-03T15:49:33+00:00",
  "source_file": "Git-Basics/README.md",
  "language_code": "mr"
}
-->
## वेब-डेव्हलपमेंट नवशिक्यांसाठी GIT चे मूलभूत ज्ञान👶

## `Git` म्हणजे काय?
      1. Git हा एक वितरित आवृत्ती नियंत्रण प्रणाली आहे.
      2. संपूर्ण कोडबेस आणि इतिहास प्रत्येक डेव्हलपरच्या संगणकावर उपलब्ध असतो, 
         ज्यामुळे शाखा तयार करणे आणि विलीन करणे सोपे होते.
      3. संगणक फाइल्समधील बदल ट्रॅक करण्यासाठी याचा आवृत्ती नियंत्रण प्रणाली (VCS) म्हणून वापर केला जातो.

* वितरित आवृत्ती नियंत्रण
* अनेक डेव्हलपरमध्ये कामाचे समन्वय
* कोणत्या बदलांची नोंद कोणी आणि कधी केली
* कधीही मागे परत जाण्याची सुविधा
* स्थानिक आणि रिमोट रिपॉझिटरी

## GIT चे संकल्पना
* कोडचा इतिहास ट्रॅक करते
* तुमच्या फाइल्सचे "स्नॅपशॉट्स" घेतो
* तुम्ही "कमिट" करून स्नॅपशॉट कधी घ्यायचे ते ठरवता
* तुम्ही कधीही कोणत्याही स्नॅपशॉटला भेट देऊ शकता
* कमिट करण्यापूर्वी फाइल्स स्टेज करू शकता

### Git आणि GitHub मधील फरक

| Git | GitHub |
| ------- | ----------- |
| Git हे एक सॉफ्टवेअर आहे | GitHub हा एक क्लाउड सेवा आहे |
| Git स्थानिक प्रणालीवर स्थापित केले जाते | GitHub वेबवर होस्ट केले जाते |
| हे कमांड-लाइन टूल आहे | हे ग्राफिकल यूजर इंटरफेस आहे |
| Git Linux द्वारे व्यवस्थापित केले जाते | GitHub Microsoft द्वारे व्यवस्थापित केले जाते |
| हे आवृत्ती नियंत्रण आणि कोड शेअरिंगवर केंद्रित आहे | हे केंद्रीकृत स्रोत कोड होस्टिंगवर केंद्रित आहे |
| Git ओपन-सोर्स परवाना आहे | GitHub मध्ये फ्री-टियर आणि पे-फॉर-यूज टियर समाविष्ट आहे |
| Git 2005 मध्ये रिलीज झाले | GitHub 2008 मध्ये रिलीज झाले |

## GIT इंस्टॉलेशन
* Linux(Debian)
    `$sudo apt-get install git`
* Linux(Fedora)
    `$sudo yum install git`
* Mac साठी [डाउनलोड](http://git-scm.com/download/mac)
* Windows साठी [डाउनलोड](http://git-scm.com/download/win)

### इंस्टॉलेशन प्रक्रिया चरण:
1. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190359823-e421b976-515a-4565-990d-2f2e4e62977a.png"/>
2. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360530-a7bfa681-47f4-4859-9b8a-4120e0cad348.png"/>
3. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360760-30db7768-19e0-4848-a99d-a6c955e041e2.png"/>
4. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190360896-473e1e54-f083-4b5c-a5f0-539f70469142.png"/>
5. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361144-bc670a2b-b776-4867-9785-7b509d416fbb.png"/>
6. आणि मग पुढे Next > Next > Next > <b>Install</b>
7. <img width="500" height="400" src="https://user-images.githubusercontent.com/61585443/190361548-4b700d85-c7d5-4d26-90e7-e5cc3ce24311.png"/>

### इंस्टॉलेशननंतर Git कॉन्फिगर करण्यासाठी Git Bash वापरावे
  1. `git config --global user.name 'YourName'`
  2. `git config --global user.email 'YourEmail'`
___

## Git कमांड्स
___

### प्रोजेक्ट्स मिळवणे आणि तयार करणे

| कमांड | वर्णन |
| ------- | ----------- |
| `git init` | स्थानिक Git रिपॉझिटरी सुरू करा |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | रिमोट रिपॉझिटरीची स्थानिक प्रत तयार करा |

### मूलभूत स्नॅपशॉटिंग

| कमांड | वर्णन |
| ------- | ----------- |
| `git status` | स्थिती तपासा |
| `git add [file-name.txt]` | फाइल स्टेजिंग एरियामध्ये जोडा |
| `git add -A` | सर्व नवीन आणि बदललेल्या फाइल्स स्टेजिंग एरियामध्ये जोडा |
| `git commit -m "[commit message]"` | बदल कमिट करा |
| `git rm -r [file-name.txt]` | फाइल (किंवा फोल्डर) काढा |
| `git push` | रिमोट रिपॉझिटरीवर पुश करा |
| `git pull` | रिमोट रिपॉझिटरीमधून नवीनतम बदल आणा |

### शाखा तयार करणे आणि विलीन करणे

| कमांड | वर्णन |
| ------- | ----------- |
| `git branch` | शाखांची यादी करा (तारक चिन्ह सध्याच्या शाखेचे प्रतिनिधित्व करते) |
| `git branch -a` | सर्व शाखांची यादी करा (स्थानिक आणि रिमोट) |
| `git branch [branch name]` | नवीन शाखा तयार करा |
| `git branch -D [branch name]` | शाखा हटवा |
| `git push origin --delete [branch name]` | रिमोट शाखा हटवा |
| `git checkout -b [branch name]` | नवीन शाखा तयार करा आणि त्यावर स्विच करा |
| `git checkout -b [branch name] origin/[branch name]` | रिमोट शाखा क्लोन करा आणि त्यावर स्विच करा |
| `git branch -m [old branch name] [new branch name]` | स्थानिक शाखेचे नाव बदला |
| `git checkout [branch name]` | शाखेवर स्विच करा |
| `git checkout -` | शेवटच्या तपासलेल्या शाखेवर स्विच करा |
| `git checkout -- [file-name.txt]` | फाइलमधील बदल रद्द करा |
| `git merge [branch name]` | सक्रिय शाखेत शाखा विलीन करा |
| `git merge [source branch] [target branch]` | लक्ष्य शाखेत स्रोत शाखा विलीन करा |
| `git stash` | डर्टी वर्किंग डायरेक्टरीमध्ये बदल साठवा |
| `git stash clear` | सर्व साठवलेले नोंदी हटवा |

### प्रोजेक्ट्स शेअर करणे आणि अपडेट करणे

| कमांड | वर्णन |
| ------- | ----------- |
| `git push origin [branch name]` | तुमच्या रिमोट रिपॉझिटरीवर शाखा पुश करा |
| `git push -u origin [branch name]` | रिमोट रिपॉझिटरीवर बदल पुश करा (आणि शाखा लक्षात ठेवा) |
| `git push` | रिमोट रिपॉझिटरीवर बदल पुश करा (लक्षात ठेवलेली शाखा) |
| `git push origin --delete [branch name]` | रिमोट शाखा हटवा |
| `git pull` | स्थानिक रिपॉझिटरी नवीनतम कमिटसाठी अपडेट करा |
| `git pull origin [branch name]` | रिमोट रिपॉझिटरीमधून बदल आणा |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | रिमोट रिपॉझिटरी जोडा |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | रिपॉझिटरीची मूळ शाखा SSH वर सेट करा |

### तपासणी आणि तुलना

| कमांड | वर्णन |
| ------- | ----------- |
| `git log` | बदल पहा |
| `git log --summary` | बदल (तपशीलवार) पहा |
| `git log --oneline` | बदल (संक्षिप्त) पहा |
| `git diff [source branch] [target branch]` | विलीन करण्यापूर्वी बदल पूर्वावलोकन करा |

---

**अस्वीकरण**:  
हा दस्तऐवज AI भाषांतर सेवा [Co-op Translator](https://github.com/Azure/co-op-translator) वापरून भाषांतरित करण्यात आला आहे. आम्ही अचूकतेसाठी प्रयत्नशील असलो तरी कृपया लक्षात ठेवा की स्वयंचलित भाषांतरांमध्ये त्रुटी किंवा अचूकतेचा अभाव असू शकतो. मूळ भाषेतील दस्तऐवज हा अधिकृत स्रोत मानावा. महत्त्वाच्या माहितीसाठी व्यावसायिक मानवी भाषांतराची शिफारस केली जाते. या भाषांतराचा वापर करून उद्भवलेल्या कोणत्याही गैरसमज किंवा चुकीच्या अर्थासाठी आम्ही जबाबदार राहणार नाही.