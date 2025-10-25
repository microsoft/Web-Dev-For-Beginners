<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a203e560e58ccc6ba68bffc40c7c8676",
  "translation_date": "2025-10-24T22:19:55+00:00",
  "source_file": "5-browser-extension/3-background-tasks-and-performance/assignment.md",
  "language_code": "ro"
}
-->
# Analiza unui site pentru performanță

## Prezentare generală a temei

Analiza performanței este o abilitate esențială pentru dezvoltatorii web moderni. În această temă, vei realiza un audit cuprinzător al performanței unui site web real, utilizând atât instrumente bazate pe browser, cât și servicii terțe pentru a identifica punctele slabe și a propune strategii de optimizare.

Sarcina ta este să oferi un raport detaliat de performanță care să demonstreze înțelegerea principiilor performanței web și abilitatea de a utiliza eficient instrumente profesionale de analiză.

## Instrucțiuni pentru temă

**Alege un site web** pentru analiză - selectează una dintre următoarele opțiuni:
- Un site popular pe care îl folosești frecvent (site de știri, rețele sociale, e-commerce)
- Un site al unui proiect open-source (pagini GitHub, site-uri de documentație)
- Un site al unei afaceri locale sau un site de portofoliu
- Propriul tău proiect sau un curs anterior

**Realizează o analiză multi-instrument** utilizând cel puțin trei abordări diferite:
- **Browser DevTools** - Folosește fila Performance din Chrome/Edge pentru profilare detaliată
- **Instrumente de audit online** - Încearcă Lighthouse, GTmetrix sau WebPageTest
- **Analiza rețelei** - Examinează încărcarea resurselor, dimensiunile fișierelor și modelele de cereri

**Documentează descoperirile** într-un raport cuprinzător care include:

### Analiza metricilor de performanță
- **Măsurători ale timpului de încărcare** din mai multe instrumente și perspective
- **Scoruri Core Web Vitals** (LCP, FID, CLS) și implicațiile acestora
- **Defalcarea resurselor** care arată ce elemente contribuie cel mai mult la timpul de încărcare
- **Analiza cascadei rețelei** identificând resursele care blochează

### Identificarea problemelor
- **Blocaje specifice de performanță** cu date justificative
- **Analiza cauzelor principale** explicând de ce apare fiecare problemă
- **Evaluarea impactului asupra utilizatorilor** descriind cum afectează problemele utilizatorii reali
- **Clasificarea priorităților** problemelor în funcție de gravitate și dificultatea de rezolvare

### Recomandări de optimizare
- **Îmbunătățiri specifice și aplicabile** cu impactul așteptat
- **Strategii de implementare** pentru fiecare schimbare recomandată
- **Cele mai bune practici moderne** care ar putea fi aplicate (încărcare întârziată, compresie etc.)
- **Instrumente și tehnici** pentru monitorizarea continuă a performanței

## Cerințe de cercetare

**Nu te baza doar pe instrumentele browserului** - extinde analiza utilizând:

**Servicii de audit terțe:**
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) - Audituri cuprinzătoare
- [GTmetrix](https://gtmetrix.com/) - Perspective asupra performanței și optimizării
- [WebPageTest](https://www.webpagetest.org/) - Condiții reale de testare
- [Pingdom](https://tools.pingdom.com/) - Monitorizare globală a performanței

**Instrumente de analiză specializate:**
- [Bundle Analyzer](https://bundlephobia.com/) - Analiza dimensiunii pachetelor JavaScript
- [Instrumente de optimizare a imaginilor](https://squoosh.app/) - Oportunități de optimizare a resurselor
- [Analiza anteturilor de securitate](https://securityheaders.com/) - Impactul performanței asupra securității

## Formatul livrabilului

Creează un raport profesional (2-3 pagini) care să includă:

1. **Rezumat executiv** - Prezentare generală a constatărilor și recomandărilor
2. **Metodologie** - Instrumentele utilizate și abordarea testării
3. **Evaluarea performanței actuale** - Metrici și măsurători de bază
4. **Probleme identificate** - Analiză detaliată a problemelor cu date justificative
5. **Recomandări** - Strategii de îmbunătățire prioritizate
6. **Plan de implementare** - Plan pas cu pas pentru optimizare

**Include dovezi vizuale:**
- Capturi de ecran ale instrumentelor de performanță și metricilor
- Grafice sau diagrame care arată datele de performanță
- Comparații înainte/după, dacă este posibil
- Diagrame de cascadă a rețelei și defalcări ale resurselor

## Grilă de evaluare

| Criterii | Exemplară (90-100%) | Adecvată (70-89%) | Necesită îmbunătățiri (50-69%) |
| -------- | ------------------- | ----------------- | ------------------------------ |
| **Adâncimea analizei** | Analiză cuprinzătoare utilizând 4+ instrumente cu metrici detaliate, analiză a cauzelor principale și evaluarea impactului asupra utilizatorilor | Analiză bună utilizând 3 instrumente cu metrici clare și identificarea de bază a problemelor | Analiză de bază utilizând 2 instrumente cu profunzime limitată și identificare minimă a problemelor |
| **Diversitatea instrumentelor** | Utilizarea instrumentelor browserului + 3+ servicii terțe cu analiză comparativă și perspective din fiecare | Utilizarea instrumentelor browserului + 2 servicii terțe cu ceva analiză comparativă | Utilizarea instrumentelor browserului + 1 serviciu terț cu comparație limitată |
| **Identificarea problemelor** | Identifică 5+ probleme specifice de performanță cu analiză detaliată a cauzelor principale și impact cuantificat | Identifică 3-4 probleme de performanță cu o analiză bună și o anumită măsurare a impactului | Identifică 1-2 probleme de performanță cu o analiză de bază |
| **Recomandări** | Oferă recomandări specifice și aplicabile cu detalii de implementare, impact așteptat și cele mai bune practici moderne | Oferă recomandări bune cu unele îndrumări de implementare și rezultate așteptate | Oferă recomandări de bază cu detalii limitate de implementare |
| **Prezentare profesională** | Raport bine organizat cu structură clară, dovezi vizuale, rezumat executiv și format profesional | Organizare bună cu unele dovezi vizuale și structură clară | Organizare de bază cu dovezi vizuale minime |

## Rezultate ale învățării

Prin completarea acestei teme, vei demonstra abilitatea de a:
- **Aplica** instrumente și metodologii profesionale de analiză a performanței
- **Identifica** blocajele de performanță utilizând analiza bazată pe date
- **Analiza** relația dintre calitatea codului și experiența utilizatorului
- **Recomanda** strategii specifice și aplicabile de optimizare
- **Comunica** concluzii tehnice într-un format profesional

Această temă consolidează conceptele de performanță învățate în lecție, dezvoltând în același timp abilități practice pe care le vei folosi pe parcursul carierei tale de dezvoltator web.

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.