# Crearea unui Joc: Aplicarea Pattern-urilor de Design

## Prezentarea Temei

Pune în practică cunoștințele dobândite despre pattern-urile de design prin crearea unui prototip simplu de joc! Această temă te va ajuta să exersezi atât pattern-urile arhitecturale (moștenire sau compoziție), cât și sistemul de comunicare pub/sub pe care l-ai învățat în lecție.

## Instrucțiuni

Creează o reprezentare simplă a unui joc care să demonstreze utilizarea pattern-urilor de design din această lecție. Jocul tău ar trebui să fie funcțional, dar nu este necesar să aibă grafică complexă – concentrează-te pe arhitectura de bază și pe modelele de comunicare.

### Cerințe

**Alege un Pattern Arhitectural:**
- **Opțiunea A**: Folosește moștenirea bazată pe clase (precum exemplul `GameObject` → `Movable` → `Hero`)
- **Opțiunea B**: Folosește compoziția (precum abordarea funcției factory cu comportamente mixte)

**Implementează Comunicarea:**
- **Include** o clasă `EventEmitter` pentru mesageria pub/sub
- **Configurează** cel puțin 2-3 tipuri diferite de mesaje (precum `PLAYER_MOVE`, `ENEMY_SPAWN`, `SCORE_UPDATE`)
- **Conectează** input-ul utilizatorului (tastatură/mouse) la evenimentele jocului prin sistemul de evenimente

**Elemente de Joc de Inclus:**
- Cel puțin un personaj controlat de jucător
- Cel puțin un alt obiect de joc (inamic, obiect colectabil sau element de mediu)
- Interacțiuni de bază între obiecte (coliziune, colectare sau comunicare)

### Idei Sugestive de Jocuri

**Jocuri Simple de Luat în Considerare:**
- **Jocul Șarpe** – Segmentele șarpelui urmează capul, mâncarea apare aleatoriu
- **Variante de Pong** – Paleta răspunde la input, mingea ricoșează din pereți
- **Joc de Colectare** – Jucătorul se deplasează colectând obiecte și evitând obstacolele
- **Bazele Tower Defense** – Turnurile detectează și trag în inamicii în mișcare

### Ghid pentru Structura Codului

```javascript
// Example starting structure
const Messages = {
  // Define your game messages here
};

class EventEmitter {
  // Your event system implementation
}

// Choose either class-based OR composition approach
// Class-based example:
class GameObject { /* base properties */ }
class Player extends GameObject { /* player-specific behavior */ }

// OR Composition example:
const gameObject = { /* base properties */ };
const movable = { /* movement behavior */ };
function createPlayer() { /* combine behaviors */ }
```

### Testarea Implementării

**Verifică funcționarea codului tău prin:**
- **Testarea** faptului că obiectele se mișcă sau se schimbă atunci când evenimentele sunt declanșate
- **Confirmarea** că mai multe obiecte pot răspunde la același eveniment
- **Verificarea** că poți adăuga noi comportamente fără a modifica codul existent
- **Asigurarea** că input-ul de la tastatură/mouse declanșează corect evenimentele jocului

## Ghid pentru Predare

**Predarea ta ar trebui să includă:**
1. **Fișier(e) JavaScript** cu implementarea jocului tău
2. **Fișier HTML** pentru rularea și testarea jocului (poate fi simplu)
3. **Comentarii** care explică ce pattern ai ales și de ce
4. **Documentație scurtă** despre tipurile de mesaje și funcționalitatea lor

## Criterii de Evaluare

| Criterii | Exemplară (3 puncte) | Adecvată (2 puncte) | Necesită Îmbunătățiri (1 punct) |
|----------|----------------------|---------------------|----------------------------------|
| **Pattern Arhitectural** | Implementare corectă a moștenirii SAU compoziției cu o ierarhie clară de clase/obiecte | Folosește pattern-ul ales cu mici probleme sau inconsistențe | Încearcă să folosească pattern-ul, dar implementarea are probleme semnificative |
| **Implementarea Pub/Sub** | EventEmitter funcționează corect cu mai multe tipuri de mesaje și flux de evenimente adecvat | Sistemul pub/sub funcționează de bază, cu unele probleme de gestionare a evenimentelor | Sistemul de evenimente este prezent, dar nu funcționează fiabil |
| **Funcționalitatea Jocului** | Trei sau mai multe elemente interactive care comunică prin evenimente | Două elemente interactive cu comunicare de bază prin evenimente | Un element răspunde la evenimente sau interacțiuni de bază |
| **Calitatea Codului** | Cod curat, bine comentat, cu organizare logică și JavaScript modern | Cod în general bine organizat, cu comentarii adecvate | Codul funcționează, dar lipsește organizarea sau comentariile clare |

**Puncte Bonus:**
- **Mecanici de joc creative** care evidențiază utilizarea interesantă a pattern-urilor
- **Metode multiple de input** (evenimente de tastatură ȘI mouse)
- **Arhitectură scalabilă** care poate fi extinsă ușor cu funcționalități noi

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa natală ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.