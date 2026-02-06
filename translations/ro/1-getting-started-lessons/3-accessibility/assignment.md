# Audit cuprinzător al accesibilității unui site web

## Instrucțiuni

În această sarcină, vei realiza un audit profesional de accesibilitate al unui site web real, aplicând principiile și tehnicile pe care le-ai învățat. Această experiență practică îți va aprofunda înțelegerea barierelor și soluțiilor de accesibilitate.

Alege un site web care pare să aibă probleme de accesibilitate—acest lucru îți oferă mai multe oportunități de învățare decât analizarea unui site deja perfect. Candidaturile bune includ site-uri mai vechi, aplicații web complexe sau site-uri cu conținut multimedia bogat.

### Faza 1: Evaluare manuală strategică

Înainte de a utiliza instrumente automate, efectuează o evaluare manuală cuprinzătoare. Această abordare centrată pe utilizator dezvăluie adesea probleme pe care instrumentele le pot rata și te ajută să înțelegi experiența reală a utilizatorului.

**🔍 Criterii esențiale de evaluare:**

**Navigare și structură:**
- Poți naviga pe întregul site folosind doar tastatura (Tab, Shift+Tab, Enter, Space, tastele săgeți)?
- Indicatorii de focalizare sunt vizibili clar pe toate elementele interactive?
- Structura titlurilor (H1-H6) creează un contur logic al conținutului?
- Există linkuri de tip „skip” pentru a sări direct la conținutul principal?

**Accesibilitate vizuală:**
- Există un contrast suficient de culori pe tot site-ul (minim 4.5:1 pentru text normal)?
- Site-ul se bazează exclusiv pe culoare pentru a transmite informații importante?
- Toate imaginile au text alternativ adecvat?
- Layout-ul rămâne funcțional atunci când este mărit la 200%?

**Conținut și comunicare:**
- Există texte de link ambigue, cum ar fi „click aici”?
- Poți înțelege conținutul și funcționalitatea fără indicii vizuale?
- Câmpurile de formular sunt etichetate și grupate corespunzător?
- Mesajele de eroare sunt clare și utile?

**Elemente interactive:**
- Toate butoanele și controalele formularului funcționează doar cu tastatura?
- Modificările dinamice ale conținutului sunt anunțate cititoarelor de ecran?
- Dialogurile modale și widgeturile complexe respectă modelele corecte de accesibilitate?

📝 **Documentează-ți constatările** cu exemple specifice, capturi de ecran și URL-uri ale paginilor. Notează atât problemele, cât și aspectele bine realizate.

### Faza 2: Testare automată cuprinzătoare

Acum validează și extinde constatările manuale folosind instrumente de testare a accesibilității recunoscute în industrie. Fiecare instrument are puncte forte diferite, astfel încât utilizarea mai multor instrumente oferă o acoperire completă.

**🛠️ Instrumente de testare necesare:**

1. **Lighthouse Accessibility Audit** (integrat în Chrome/Edge DevTools)
   - Rulează auditul pe mai multe pagini
   - Concentrează-te pe metrici și recomandări specifice
   - Notează scorul de accesibilitate și încălcările specifice

2. **axe DevTools** (extensie de browser - standard în industrie)
   - Detectează probleme mai detaliate decât Lighthouse
   - Oferă exemple specifice de cod pentru remediere
   - Testează conform criteriilor WCAG 2.1

3. **WAVE Web Accessibility Evaluator** (extensie de browser)
   - Reprezentare vizuală a caracteristicilor de accesibilitate
   - Evidențiază atât erorile, cât și aspectele pozitive
   - Excelent pentru înțelegerea structurii paginii

4. **Analizatoare de contrast de culori**
   - WebAIM Contrast Checker pentru perechi de culori specifice
   - Extensii de browser pentru analiza întregii pagini
   - Testează conform standardelor WCAG AA și AAA

**🎧 Testare cu tehnologie asistivă reală:**
- **Testare cu cititoare de ecran**: Folosește NVDA (Windows), VoiceOver (Mac) sau TalkBack (Android)
- **Navigare doar cu tastatura**: Deconectează mouse-ul și navighează pe întregul site
- **Testare la zoom**: Testează funcționalitatea la niveluri de zoom de 200% și 400%
- **Testare cu control vocal**: Dacă este disponibil, încearcă instrumente de navigare vocală

**📊 Organizează rezultatele** creând un tabel principal cu:
- Descrierea problemei și locația
- Nivelul de severitate (Critic/Înalt/Mediu/Scăzut)
- Criteriile de succes WCAG încălcate
- Instrumentul care a detectat problema
- Capturi de ecran și dovezi

### Faza 3: Documentarea constatărilor cuprinzătoare

Creează un raport profesional de audit al accesibilității care să demonstreze înțelegerea ta atât a problemelor tehnice, cât și a impactului lor asupra utilizatorilor.

**📋 Secțiuni obligatorii ale raportului:**

1. **Rezumat executiv** (1 pagină)
   - URL-ul site-ului și descrierea succintă
   - Nivelul general de maturitate al accesibilității
   - Cele mai critice 3 probleme
   - Impactul estimat asupra utilizatorilor cu dizabilități

2. **Metodologie** (½ pagină)
   - Abordarea testării și instrumentele utilizate
   - Paginile evaluate și combinațiile dispozitiv/browser
   - Standardele evaluate (WCAG 2.1 AA)

3. **Constatări detaliate** (2-3 pagini)
   - Problemele clasificate după principiile WCAG (Perceptibil, Operabil, Ușor de înțeles, Robust)
   - Include capturi de ecran și exemple specifice
   - Notează caracteristicile pozitive de accesibilitate pe care le-ai găsit
   - Corelează cu rezultatele instrumentelor automate

4. **Evaluarea impactului asupra utilizatorilor** (1 pagină)
   - Cum afectează problemele identificate utilizatorii cu diferite dizabilități
   - Scenarii care descriu experiențele reale ale utilizatorilor
   - Impactul asupra afacerii (riscuri legale, SEO, extinderea bazei de utilizatori)

**📸 Colectarea dovezilor:**
- Capturi de ecran ale încălcărilor de accesibilitate
- Înregistrări video ale fluxurilor problematice ale utilizatorilor
- Rapoarte ale instrumentelor (salvate ca PDF-uri)
- Exemple de cod care arată problemele

### Faza 4: Plan profesional de remediere

Dezvoltă un plan strategic și prioritizat pentru remedierea problemelor de accesibilitate. Acest lucru demonstrează capacitatea ta de a gândi ca un dezvoltator web profesionist care abordează constrângerile reale ale afacerii.

**🎯 Creează recomandări detaliate de îmbunătățire (minimum 10 probleme):**

**Pentru fiecare problemă identificată, oferă:**

- **Descrierea problemei**: Explicație clară a ceea ce este greșit și de ce este problematic
- **Referință WCAG**: Criterii specifice de succes încălcate (ex.: „2.4.4 Scopul linkului (în context) - Nivel A”)
- **Impact asupra utilizatorului**: Cum afectează acest lucru persoanele cu diferite dizabilități
- **Soluție**: Modificări specifice de cod, ajustări de design sau îmbunătățiri ale procesului
- **Nivel de prioritate**: Critic (blochează utilizarea de bază) / Înalt (barieră semnificativă) / Mediu (problemă de utilizare) / Scăzut (îmbunătățire)
- **Efort de implementare**: Estimare de timp/complexitate (Rezolvare rapidă / Efort moderat / Refactorizare majoră)
- **Verificarea implementării**: Cum să verifici dacă soluția funcționează

**Exemplu de intrare pentru îmbunătățire:**

```
Issue: Generic "Read more" link text appears 8 times on homepage
WCAG Reference: 2.4.4 Link Purpose (In Context) - Level A
User Impact: Screen reader users cannot distinguish between links when viewed in link list
Solution: Replace with descriptive text like "Read more about sustainability initiatives"
Priority: High (major navigation barrier)
Effort: Low (30 minutes to update content)
Testing: Generate link list with screen reader - each link should be meaningful standalone
```

**📈 Faze strategice de implementare:**

- **Faza 1 (0-2 săptămâni)**: Probleme critice care blochează funcționalitatea de bază
- **Faza 2 (1-2 luni)**: Îmbunătățiri prioritare pentru o experiență mai bună a utilizatorului
- **Faza 3 (3-6 luni)**: Îmbunătățiri de prioritate medie și ajustări ale procesului
- **Faza 4 (Continuă)**: Monitorizare și îmbunătățire continuă

## Rubrica de evaluare

Auditul tău de accesibilitate va fi evaluat atât pe acuratețea tehnică, cât și pe prezentarea profesională:

| Criterii | Excelent (90-100%) | Bun (80-89%) | Satisfăcător (70-79%) | Necesită îmbunătățiri (<70%) |
|----------|-------------------|---------------|---------------------|------------------------|
| **Adâncimea testării manuale** | Evaluare cuprinzătoare care acoperă toate principiile POUR cu observații detaliate și scenarii de utilizator | Acoperire bună a majorității domeniilor de accesibilitate cu constatări clare și ceva analiză a impactului asupra utilizatorului | Evaluare de bază care acoperă domeniile cheie cu observații adecvate | Testare limitată cu observații superficiale și considerare minimă a impactului asupra utilizatorului |
| **Utilizarea și analiza instrumentelor** | Folosește eficient toate instrumentele necesare, corelează constatările, include dovezi clare și analizează limitările instrumentelor | Folosește majoritatea instrumentelor cu documentație bună, ceva corelare și dovezi adecvate | Folosește instrumentele necesare cu documentație de bază și câteva dovezi | Utilizare minimă a instrumentelor, documentație slabă sau dovezi lipsă |
| **Identificarea și clasificarea problemelor** | Identifică 15+ probleme specifice în toate principiile WCAG, clasifică corect după severitate, demonstrează o înțelegere profundă | Identifică 10-14 probleme în majoritatea principiilor WCAG, clasificare bună, arată o înțelegere solidă | Identifică 7-9 probleme cu acoperire WCAG adecvată și clasificare de bază | Identifică <7 probleme cu domeniu limitat sau clasificare slabă |
| **Calitatea și fezabilitatea soluțiilor** | 10+ soluții detaliate și acționabile cu referințe WCAG precise, termene realiste de implementare și metode de verificare | 8-9 soluții bine dezvoltate cu referințe în mare parte precise și detalii bune de implementare | 6-7 soluții de bază cu ceva detalii și abordări în general realiste | <6 soluții sau detalii insuficiente, implementări nerealiste |
| **Comunicare profesională** | Raport excelent organizat, scris clar, include rezumat executiv, folosește limbaj tehnic adecvat și respectă standardele documentelor de afaceri | Bine organizat, cu calitate bună a scrierii, include majoritatea secțiunilor necesare, ton adecvat | Organizare adecvată, scriere acceptabilă, include secțiunile de bază necesare | Organizare slabă, scriere neclară sau lipsa secțiunilor cheie |
| **Aplicare în lumea reală** | Demonstrează înțelegerea impactului asupra afacerii, considerațiilor legale, diversității utilizatorilor și provocărilor practice de implementare | Arată o bună înțelegere a aplicațiilor practice cu ceva context de afaceri | Înțelegere de bază a aplicațiilor din lumea reală | Conexiune limitată la aplicațiile practice |

## Opțiuni avansate de provocare

**🚀 Pentru studenții care caută o provocare suplimentară:**

- **Analiză comparativă**: Auditează 2-3 site-uri concurente și compară nivelul lor de maturitate în accesibilitate
- **Focus pe accesibilitatea mobilă**: Analizează în detaliu problemele specifice accesibilității mobile folosind Android TalkBack sau iOS VoiceOver
- **Perspectivă internațională**: Cercetează și aplică standardele de accesibilitate din diferite țări (EN 301 549, Section 508, ADA)
- **Revizuirea declarației de accesibilitate**: Evaluează declarația de accesibilitate existentă a site-ului (dacă există) în raport cu constatările tale

## Livrabile

Trimite un raport cuprinzător de audit al accesibilității care să demonstreze o analiză la nivel profesional și planificare practică a implementării:

**📄 Cerințe pentru raportul final:**

1. **Rezumat executiv** (1 pagină)
   - Prezentarea generală a site-ului și evaluarea maturității accesibilității
   - Rezumatul principalelor constatări și impactul asupra afacerii
   - Acțiuni prioritare recomandate

2. **Metodologie și domeniu de aplicare** (1 pagină)
   - Abordarea testării, instrumentele utilizate și criteriile de evaluare
   - Paginile/secțiunile evaluate și orice limitări
   - Cadru de conformitate cu standardele (WCAG 2.1 AA)

3. **Raport detaliat al constatărilor** (3-4 pagini)
   - Observații din testarea manuală cu scenarii de utilizator
   - Rezultatele instrumentelor automate cu corelare
   - Probleme organizate pe principiile WCAG cu dovezi
   - Caracteristici pozitive de accesibilitate identificate

4. **Plan strategic de remediere** (3-4 pagini)
   - Recomandări de îmbunătățire prioritizate (minimum 10)
   - Cronologie de implementare cu estimări de efort
   - Metrici de succes și metode de verificare
   - Strategie de întreținere pe termen lung a accesibilității

5. **Dovezi suport** (Anexe)
   - Capturi de ecran ale încălcărilor de accesibilitate și ale instrumentelor de testare
   - Exemple de cod care demonstrează problemele și soluțiile
   - Rapoarte ale instrumentelor și rezumate ale auditului
   - Note sau înregistrări ale testării cu cititoare de ecran

**📊 Cerințe de format:**
- **Format document**: PDF (prezentare profesională)
- **Număr de cuvinte**: 2.500-3.500 de cuvinte (excluzând anexele și capturile de ecran)
- **Elemente vizuale**: Include capturi de ecran, diagrame și exemple pe tot parcursul
- **Citații**: Referințe la ghidurile WCAG și resursele de accesibilitate, după caz

**💡 Sfaturi pentru excelență:**
- Folosește formatări profesionale ale raportului cu titluri și stiluri consistente
- Include un cuprins pentru navigare ușoară
- Echilibrează acuratețea tehnică cu un limbaj clar, adecvat pentru mediul de afaceri
- Demonstrează înțelegerea atât a implementării tehnice, cât și a impactului asupra utilizatorului

## Rezultate ale învățării

După finalizarea acestui audit cuprinzător de accesibilitate, vei fi dezvoltat abilități profesionale esențiale:

**🎯 Competențe tehnice:**
- **Maiestria testării accesibilității**: Competență în utilizarea metodelor de testare manuale și automate recunoscute în industrie
- **Aplicarea WCAG**: Experiență practică în aplicarea Ghidurilor de Accesibilitate pentru Conținut Web în scenarii reale
- **Înțelegerea tehnologiei asistive**: Experiență practică cu cititoare de ecran și navigare cu tastatura
- **Cartografierea problemelor și soluțiilor**: Capacitatea de a identifica barierele de accesibilitate și de a dezvolta strategii de remediere specifice și acționabile

**💼 Abilități profesionale:**
- **Comunicare tehnică**: Experiență în redactarea rapoartelor profesionale de accesibilitate pentru părți interesate diverse
- **Planificare strategică**: Capacitatea de a prioritiza îmbunătățirile accesibilității pe baza impactului asupra utilizatorului și a fezabilității implementării
- **Asigurarea calității**: Înțelegerea testării accesibilității ca parte a ciclului de viață al dezvoltării
- **Evaluarea riscurilor**: Aprecierea implicațiilor legale, de afaceri și etice ale conformității cu accesibilitatea

**🌍 Mentalitate de design incluziv:**
- **Empatie față de utilizator**: Înțelegere profundă a nevoilor diverse ale utilizatorilor și a interacțiunilor cu tehnologia asistivă
- **Principii de design universal**: Recunoașterea faptului

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.