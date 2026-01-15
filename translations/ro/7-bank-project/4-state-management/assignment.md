<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "50a7783473b39a2e0f133e271a102231",
  "translation_date": "2025-10-24T22:10:28+00:00",
  "source_file": "7-bank-project/4-state-management/assignment.md",
  "language_code": "ro"
}
-->
# Implementarea dialogului "Adaugă tranzacție"

## Prezentare generală

Aplicația ta bancară are acum o gestionare solidă a stării și persistența datelor, dar îi lipsește o funcționalitate esențială pe care o au aplicațiile bancare reale: posibilitatea utilizatorilor de a adăuga propriile tranzacții. În această temă, vei implementa un dialog complet "Adaugă tranzacție" care se integrează perfect cu sistemul tău de gestionare a stării.

Această temă reunește tot ce ai învățat în cele patru lecții despre aplicațiile bancare: șabloane HTML, gestionarea formularelor, integrarea API-urilor și gestionarea stării.

## Obiective de învățare

Prin completarea acestei teme, vei:
- **Crea** o interfață de dialog prietenoasă pentru introducerea datelor
- **Implementa** un design accesibil al formularului, cu suport pentru tastatură și cititoare de ecran
- **Integra** noile funcționalități cu sistemul tău existent de gestionare a stării
- **Exersa** comunicarea cu API-ul și gestionarea erorilor
- **Aplica** modele moderne de dezvoltare web pentru o funcționalitate reală

## Instrucțiuni

### Pasul 1: Butonul "Adaugă tranzacție"

**Creează** un buton "Adaugă tranzacție" pe pagina tabloului de bord, pe care utilizatorii să-l poată găsi și accesa cu ușurință.

**Cerințe:**
- **Plasează** butonul într-o locație logică pe tabloul de bord
- **Folosește** un text clar și orientat spre acțiune pentru buton
- **Stilizează** butonul astfel încât să se potrivească cu designul UI existent
- **Asigură-te** că butonul este accesibil prin tastatură

### Pasul 2: Implementarea dialogului

Alege una dintre cele două abordări pentru implementarea dialogului:

**Opțiunea A: Pagină separată**
- **Creează** un nou șablon HTML pentru formularul de tranzacție
- **Adaugă** o nouă rută în sistemul tău de rutare
- **Implementează** navigarea către și dinspre pagina formularului

**Opțiunea B: Dialog modal (Recomandat)**
- **Folosește** JavaScript pentru a afișa/ascunde dialogul fără a părăsi tabloul de bord
- **Implementează** utilizând proprietatea [`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden) sau clase CSS
- **Creează** o experiență fluidă pentru utilizator, cu gestionarea corectă a focusului

### Pasul 3: Implementarea accesibilității

**Asigură-te** că dialogul respectă [standardele de accesibilitate pentru dialoguri modale](https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/):

**Navigare prin tastatură:**
- **Suportă** tasta Escape pentru a închide dialogul
- **Blochează** focusul în interiorul dialogului când este deschis
- **Revino** la butonul declanșator când dialogul este închis

**Suport pentru cititoare de ecran:**
- **Adaugă** etichete și roluri ARIA corespunzătoare
- **Anunță** deschiderea/închiderea dialogului către cititoarele de ecran
- **Furnizează** etichete clare pentru câmpurile formularului și mesajele de eroare

### Pasul 4: Crearea formularului

**Proiectează** un formular HTML care să colecteze datele tranzacției:

**Câmpuri obligatorii:**
- **Data**: Când a avut loc tranzacția
- **Descriere**: Pentru ce a fost tranzacția
- **Sumă**: Valoarea tranzacției (pozitivă pentru venituri, negativă pentru cheltuieli)

**Funcționalități ale formularului:**
- **Validează** introducerea utilizatorului înainte de trimitere
- **Furnizează** mesaje clare de eroare pentru datele invalide
- **Include** text de ajutor și etichete utile
- **Stilizează** în mod consistent cu designul existent

### Pasul 5: Integrarea API-ului

**Conectează** formularul la API-ul backend:

**Pași de implementare:**
- **Revizuiește** [specificațiile API-ului serverului](../api/README.md) pentru endpoint-ul corect și formatul datelor
- **Creează** date JSON din intrările formularului
- **Trimite** datele către API utilizând gestionarea adecvată a erorilor
- **Afișează** mesaje de succes/eșec utilizatorului
- **Gestionează** erorile de rețea în mod elegant

### Pasul 6: Integrarea gestionării stării

**Actualizează** tabloul de bord cu noua tranzacție:

**Cerințe de integrare:**
- **Reîmprospătează** datele contului după adăugarea cu succes a tranzacției
- **Actualizează** afișajul tabloului de bord fără a necesita reîncărcarea paginii
- **Asigură-te** că noua tranzacție apare imediat
- **Menține** consistența stării pe tot parcursul procesului

## Specificații tehnice

**Detalii despre endpoint-ul API:**
Consultă [documentația API-ului serverului](../api/README.md) pentru:
- Formatul JSON necesar pentru datele tranzacției
- Metoda HTTP și URL-ul endpoint-ului
- Formatul de răspuns așteptat
- Gestionarea răspunsurilor de eroare

**Rezultat așteptat:**
După finalizarea acestei teme, aplicația ta bancară ar trebui să aibă o funcționalitate completă "Adaugă tranzacție" care să arate și să funcționeze profesional:

![Captură de ecran care arată un exemplu de dialog "Adaugă tranzacție"](../../../../translated_images/ro/dialog.93bba104afeb79f1.png)

## Testarea implementării

**Testare funcțională:**
1. **Verifică** dacă butonul "Adaugă tranzacție" este vizibil și accesibil
2. **Testează** dacă dialogul se deschide și se închide corect
3. **Confirmă** că validarea formularului funcționează pentru toate câmpurile obligatorii
4. **Verifică** dacă tranzacțiile reușite apar imediat pe tabloul de bord
5. **Asigură-te** că gestionarea erorilor funcționează pentru datele invalide și problemele de rețea

**Testare accesibilitate:**
1. **Navighează** prin întregul flux folosind doar tastatura
2. **Testează** cu un cititor de ecran pentru a asigura anunțurile corecte
3. **Verifică** dacă gestionarea focusului funcționează corect
4. **Asigură-te** că toate elementele formularului au etichete corespunzătoare

## Rubrica de evaluare

| Criterii | Exemplară | Adecvată | Necesită îmbunătățiri |
| -------- | --------- | -------- | --------------------- |
| **Funcționalitate** | Funcționalitatea de adăugare a tranzacției funcționează impecabil, cu o experiență excelentă pentru utilizator și respectă toate bunele practici din lecții | Funcționalitatea de adăugare a tranzacției funcționează corect, dar poate să nu respecte unele bune practici sau are mici probleme de utilizare | Funcționalitatea de adăugare a tranzacției funcționează parțial sau are probleme semnificative de utilizare |
| **Calitatea codului** | Codul este bine organizat, respectă modelele stabilite, include gestionarea corespunzătoare a erorilor și se integrează perfect cu gestionarea stării existente | Codul funcționează, dar poate avea unele probleme de organizare sau modele inconsistente cu baza de cod existentă | Codul are probleme structurale semnificative sau nu se integrează bine cu modelele existente |
| **Accesibilitate** | Suport complet pentru navigarea prin tastatură, compatibilitate cu cititoarele de ecran și respectarea ghidurilor WCAG, cu o gestionare excelentă a focusului | Funcționalități de bază pentru accesibilitate implementate, dar pot lipsi unele caracteristici de navigare prin tastatură sau cititor de ecran | Considerații limitate sau inexistente pentru accesibilitate |
| **Experiența utilizatorului** | Interfață intuitivă, bine finisată, cu feedback clar, interacțiuni fluide și aspect profesional | Experiență bună pentru utilizator, cu mici aspecte ce necesită îmbunătățiri în feedback sau design vizual | Experiență slabă pentru utilizator, cu interfață confuză sau lipsă de feedback pentru utilizator |

## Provocări suplimentare (opțional)

După ce ai finalizat cerințele de bază, ia în considerare aceste îmbunătățiri:

**Funcționalități avansate:**
- **Adaugă** categorii de tranzacții (mâncare, transport, divertisment etc.)
- **Implementează** validarea datelor cu feedback în timp real
- **Creează** scurtături de tastatură pentru utilizatorii avansați
- **Adaugă** funcționalități de editare și ștergere a tranzacțiilor

**Integrare avansată:**
- **Implementează** funcționalitatea de anulare pentru tranzacțiile recent adăugate
- **Adaugă** importul în masă al tranzacțiilor din fișiere CSV
- **Creează** funcționalități de căutare și filtrare a tranzacțiilor
- **Implementează** funcționalitatea de exportare a datelor

Aceste funcționalități opționale te vor ajuta să exersezi concepte mai avansate de dezvoltare web și să creezi o aplicație bancară mai completă!

---

**Declinare de responsabilitate**:  
Acest document a fost tradus folosind serviciul de traducere AI [Co-op Translator](https://github.com/Azure/co-op-translator). Deși ne străduim să asigurăm acuratețea, vă rugăm să fiți conștienți că traducerile automate pot conține erori sau inexactități. Documentul original în limba sa maternă ar trebui considerat sursa autoritară. Pentru informații critice, se recomandă traducerea profesională realizată de oameni. Nu ne asumăm responsabilitatea pentru eventualele neînțelegeri sau interpretări greșite care pot apărea din utilizarea acestei traduceri.