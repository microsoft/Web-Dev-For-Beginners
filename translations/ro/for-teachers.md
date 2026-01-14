<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "71009af209f81cc01a1f2d324200375f",
  "translation_date": "2025-10-03T10:42:19+00:00",
  "source_file": "for-teachers.md",
  "language_code": "ro"
}
-->
### Pentru educatori

Sunteți bineveniți să utilizați acest curriculum în sala de clasă. Funcționează perfect cu GitHub Classroom și platformele LMS de top și poate fi folosit și ca un depozit independent împreună cu elevii.

### Utilizare cu GitHub Classroom

Pentru a gestiona lecțiile și temele pe cohortă, creați un depozit separat pentru fiecare lecție, astfel încât GitHub Classroom să poată atașa fiecare temă în mod independent.

- Faceți fork acestui depozit în organizația dvs.
- Creați un depozit separat pentru fiecare lecție, extrăgând folderul lecției respective într-un depozit propriu.
  - Opțiunea A: Creați depozite goale (câte unul pentru fiecare lecție) și copiați conținutul folderului lecției în fiecare.
  - Opțiunea B: Utilizați o abordare care păstrează istoricul Git (de exemplu, împărțiți un folder într-un nou depozit) dacă aveți nevoie de proveniență.
- În GitHub Classroom, creați o temă pentru fiecare lecție și indicați către depozitul lecției corespunzătoare.
- Setări recomandate:
  - Vizibilitatea depozitului: privat pentru lucrările elevilor.
  - Utilizați codul de pornire din branch-ul implicit al depozitului lecției.
  - Adăugați șabloane pentru probleme și cereri de pull pentru chestionare și trimiteri.
  - Configurați opțional autograding și teste dacă lecțiile dvs. le includ.
- Convenții utile:
  - Nume de depozite precum lesson-01-intro, lesson-02-html, etc.
  - Etichete: quiz, assignment, needs-review, late, resubmission.
  - Tag-uri/release-uri pe cohortă (de exemplu, v2025-term1).

Sfat: Evitați stocarea depozitelor în foldere sincronizate (de exemplu, OneDrive/Google Drive) pentru a preveni conflictele Git pe Windows.

### Utilizare cu Moodle, Canvas sau Blackboard

Acest curriculum include pachete importabile pentru fluxuri de lucru comune LMS.

- Moodle: Utilizați fișierul de încărcare Moodle [Moodle upload file](../../../../../../../teaching-files/webdev-moodle.mbz) pentru a încărca întregul curs.
- Common Cartridge: Utilizați fișierul Common Cartridge [Common Cartridge file](../../../../../../../teaching-files/webdev-common-cartridge.imscc) pentru o compatibilitate mai largă cu LMS.
- Note:
  - Moodle Cloud are suport limitat pentru Common Cartridge. Preferabil să utilizați fișierul Moodle de mai sus, care poate fi încărcat și în Canvas.
  - După import, revizuiți modulele, termenele limită și setările chestionarelor pentru a se potrivi cu programul dvs. de semestru.

![Moodle](../../translated_images/moodle.94eb93d714a50cb2.ro.png)
> Curriculumul într-o clasă Moodle

![Canvas](../../translated_images/canvas.fbd605ff8e5b8aff.ro.png)
> Curriculumul în Canvas

### Utilizare directă a depozitului (fără Classroom)

Dacă preferați să nu utilizați GitHub Classroom, puteți desfășura cursul direct din acest depozit.

- Formate sincron/online (Zoom/Teams):
  - Organizați scurte sesiuni de încălzire conduse de mentori; utilizați camere de grup pentru chestionare.
  - Anunțați un interval de timp pentru chestionare; elevii trimit răspunsurile ca GitHub Issues.
  - Pentru teme colaborative, elevii lucrează în depozitele publice ale lecțiilor și deschid cereri de pull.
- Formate private/asinc:
  - Elevii fac fork fiecărei lecții în propriile depozite **private** și vă adaugă ca colaborator.
  - Trimit prin Issues (chestionare) și Pull Requests (teme) pe depozitul dvs. de clasă sau pe fork-urile lor private.

### Cele mai bune practici

- Oferiți o lecție de orientare despre bazele Git/GitHub, Issues și PR-uri.
- Utilizați liste de verificare în Issues pentru chestionare/teme cu mai mulți pași.
- Adăugați CONTRIBUTING.md și CODE_OF_CONDUCT.md pentru a stabili normele clasei.
- Includeți note de accesibilitate (text alternativ, subtitrări) și oferiți PDF-uri imprimabile.
- Versiuneați conținutul pe semestru și înghețați depozitele lecțiilor după publicare.

### Feedback și suport

Ne dorim ca acest curriculum să funcționeze pentru dvs. și elevii dvs. Vă rugăm să deschideți un nou Issue în acest depozit pentru erori, cereri sau îmbunătățiri, sau să începeți o discuție în Teacher Corner.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.