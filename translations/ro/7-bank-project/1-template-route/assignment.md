# Îmbunătățirea rutării

## Instrucțiuni

Acum că ai construit un sistem de rutare de bază, este momentul să-l îmbunătățești cu funcționalități profesionale care să îmbunătățească experiența utilizatorului și să ofere instrumente mai bune pentru dezvoltatori. Aplicațiile din lumea reală au nevoie de mai mult decât doar schimbarea șabloanelor – ele necesită titluri dinamice pentru pagini, hooks pentru ciclul de viață și arhitecturi extensibile.

În această temă, vei extinde implementarea rutării cu două funcționalități esențiale, frecvent întâlnite în aplicațiile web de producție. Aceste îmbunătățiri vor face ca aplicația ta bancară să pară mai bine finisată și vor oferi o bază pentru funcționalități viitoare.

Declarația rutelor conține în prezent doar ID-ul șablonului care trebuie utilizat. Dar, atunci când afișăm o pagină nouă, uneori este nevoie de ceva mai mult. Să îmbunătățim implementarea rutării cu două funcționalități suplimentare:

### Funcționalitate 1: Titluri dinamice pentru pagini
**Obiectiv:** Atribuie titluri fiecărui șablon și actualizează titlul ferestrei cu acest nou titlu atunci când șablonul se schimbă.

**De ce este important:**
- **Îmbunătățește** experiența utilizatorului prin afișarea unor titluri descriptive în tab-urile browserului
- **Crește** accesibilitatea pentru cititoarele de ecran și tehnologiile asistive  
- **Oferă** un context mai bun pentru marcaje și istoricul browserului
- **Respectă** cele mai bune practici în dezvoltarea web profesională

**Abordare pentru implementare:**
- **Extinde** obiectul rutelor pentru a include informații despre titlu pentru fiecare rută
- **Modifică** funcția `updateRoute()` pentru a actualiza dinamic `document.title`
- **Testează** dacă titlurile se schimbă corect atunci când navighezi între ecrane

### Funcționalitate 2: Hooks pentru ciclul de viață al rutelor  
**Obiectiv:** Adaugă o opțiune pentru a rula un cod după ce șablonul se schimbă. Vrem să afișăm `'Dashboard is shown'` în consola dezvoltatorului de fiecare dată când pagina dashboard este afișată.

**De ce este important:**
- **Permite** executarea logicii personalizate atunci când se încarcă rute specifice
- **Oferă** hooks pentru analiză, logare sau cod de inițializare
- **Creează** o bază pentru comportamente mai complexe ale rutelor
- **Demonstrează** modelul observatorului în dezvoltarea web

**Abordare pentru implementare:**
- **Adaugă** o proprietate opțională de funcție callback în configurațiile rutelor
- **Execută** funcția callback (dacă este prezentă) după ce randarea șablonului este finalizată
- **Asigură-te** că funcționalitatea funcționează pentru orice rută cu un callback definit
- **Testează** dacă mesajul din consolă apare atunci când vizitezi dashboard-ul

## Criterii de evaluare

| Criteriu | Exemplară                                                                                                                          | Adecvată                                                                                                                                                                                  | Necesită îmbunătățiri                                  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|          | Cele două funcționalități sunt implementate și funcționează. Titlul și adăugarea codului funcționează și pentru o rută nouă adăugată în declarația `routes`. | Cele două funcționalități funcționează, dar comportamentul este hardcodat și nu configurabil prin declarația `routes`. Adăugarea unei a treia rute cu titlu și adăugare de cod nu funcționează sau funcționează parțial. | Una dintre funcționalități lipsește sau nu funcționează corect. |

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de un specialist uman. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.