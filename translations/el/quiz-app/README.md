<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5301875c55bb305e6046bed3a4fd06d2",
  "translation_date": "2025-08-26T23:19:38+00:00",
  "source_file": "quiz-app/README.md",
  "language_code": "el"
}
-->
# Εφαρμογή Κουίζ

Αυτά τα κουίζ είναι τα κουίζ πριν και μετά τη διάλεξη για το πρόγραμμα σπουδών επιστήμης δεδομένων στο https://aka.ms/webdev-beginners

## Προσθήκη μεταφρασμένου συνόλου κουίζ

Προσθέστε μια μετάφραση κουίζ δημιουργώντας αντίστοιχες δομές κουίζ στους φακέλους `assets/translations`. Τα αρχικά κουίζ βρίσκονται στο `assets/translations/en`. Τα κουίζ είναι χωρισμένα σε διάφορες ομάδες. Βεβαιωθείτε ότι η αρίθμηση ευθυγραμμίζεται με τη σωστή ενότητα κουίζ. Υπάρχουν συνολικά 40 κουίζ σε αυτό το πρόγραμμα σπουδών, με την αρίθμηση να ξεκινά από το 0.

  
<details>
<summary>Ακολουθεί η δομή ενός αρχείου μετάφρασης:</summary>

```
[
    {
        "title": "A title",
        "complete": "A complete button title",
        "error": "An error message upon selecting the wrong answer",
        "quizzes": [
            {
                "id": 1,
                "title": "Title",
                "quiz": [
                    {
                        "questionText": "The question asked",
                        "answerOptions": [
                            {
                                "answerText": "Option 1 title",
                                "isCorrect": true
                            },
                            {
                                "answerText": "Option 2 title",
                                "isCorrect": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
```
</details>

Αφού επεξεργαστείτε τις μεταφράσεις, επεξεργαστείτε το αρχείο index.js στον φάκελο μετάφρασης για να εισάγετε όλα τα αρχεία σύμφωνα με τις συμβάσεις στο `en`.

Επεξεργαστείτε το αρχείο `index.js` στο `assets/translations` για να εισάγετε τα νέα μεταφρασμένα αρχεία.

Για παράδειγμα, αν το JSON της μετάφρασής σας είναι στο `ex.json`, κάντε το 'ex' το κλειδί τοπικοποίησης και εισάγετέ το όπως φαίνεται παρακάτω:

<details>
<summary>index.js</summary>

```
import ex from "./ex.json";

// if 'ex' is localization key then enter it like so in `messages` to expose it 

const messages = {
  ex: ex[0],
};

export default messages;
```

</details>

## Εκτέλεση της Εφαρμογής Κουίζ τοπικά

### Προαπαιτούμενα

- Λογαριασμός GitHub
- [Node.js και Git](https://nodejs.org/)

### Εγκατάσταση & Ρύθμιση

1. Δημιουργήστε ένα αποθετήριο από αυτό το [πρότυπο](https://github.com/new?template_name=Web-Dev-For-Beginners&template_owner=microsoft) 

1. Κλωνοποιήστε το νέο σας αποθετήριο και μεταβείτε στην εφαρμογή κουίζ

   ```bash
   git clone https://github.com/your-github-organization/repo-name
   cd repo-name/quiz-app
   ```

1. Εγκαταστήστε τα πακέτα npm και τις εξαρτήσεις

   ```bash
   npm install
   ```

### Δημιουργία της εφαρμογής

1. Για να δημιουργήσετε τη λύση, εκτελέστε:

   ```bash
   npm run build
   ```

### Εκκίνηση της Εφαρμογής

1. Για να εκτελέσετε τη λύση, εκτελέστε:

    ```bash
    npm run dev
    ```

### [Προαιρετικό] Έλεγχος κώδικα

1. Για να βεβαιωθείτε ότι ο κώδικας έχει ελεγχθεί, εκτελέστε:

    ```bash
    npm run lint
    ```

## Ανάπτυξη της Εφαρμογής Κουίζ στο Azure 

### Προαπαιτούμενα
- Συνδρομή Azure. Εγγραφείτε δωρεάν [εδώ](https://aka.ms/azure-free).

    _Εκτίμηση κόστους για την ανάπτυξη αυτής της εφαρμογής κουίζ: ΔΩΡΕΑΝ_

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

Αφού συνδεθείτε στο Azure μέσω του παραπάνω συνδέσμου, επιλέξτε μια συνδρομή και μια ομάδα πόρων:

- Λεπτομέρειες Στατικής Εφαρμογής Ιστού: Δώστε ένα όνομα και επιλέξτε ένα πλάνο φιλοξενίας
- Σύνδεση GitHub: Ορίστε την πηγή ανάπτυξης ως GitHub, συνδεθείτε και συμπληρώστε τα απαιτούμενα πεδία στη φόρμα:
    - *Οργάνωση* – Επιλέξτε την οργάνωσή σας.
    - *Αποθετήριο* – Επιλέξτε το αποθετήριο του προγράμματος σπουδών Web Dev for Beginners. 
    - *Κλάδος* - Επιλέξτε έναν κλάδο (main) 
- Προεπιλογές Δημιουργίας: Το Azure Static Web Apps χρησιμοποιεί έναν αλγόριθμο ανίχνευσης για να εντοπίσει το πλαίσιο που χρησιμοποιείται στην εφαρμογή σας. 
    - *Τοποθεσία εφαρμογής* - ./quiz-app
    - *Τοποθεσία API* -
    - *Τοποθεσία εξόδου* - dist
- Ανάπτυξη: Κάντε κλικ στο 'Review + Create', στη συνέχεια 'Create'

    Μόλις αναπτυχθεί, ένα αρχείο ροής εργασίας θα δημιουργηθεί στον φάκελο *.github* του αποθετηρίου σας. Αυτό το αρχείο ροής εργασίας περιέχει οδηγίες για γεγονότα που θα ενεργοποιήσουν την επαν-ανάπτυξη της εφαρμογής στο Azure, για παράδειγμα, _ένα **push** στον κλάδο **main**_ κ.λπ.

    <details>
    <summary>Παράδειγμα Αρχείου Ροής Εργασίας</summary>
    Ακολουθεί ένα παράδειγμα του αρχείου ροής εργασίας GitHub Actions:
    name: Azure Static Web Apps CI/CD

    ```
    on:
    push:
        branches:
        - main
    pull_request:
        types: [opened, synchronize, reopened, closed]
        branches:
        - main

    jobs:
    build_and_deploy_job:
        runs-on: ubuntu-latest
        name: Build and Deploy Job
        steps:
        - uses: actions/checkout@v2
        - name: Build And Deploy
            id: builddeploy
            uses: Azure/static-web-apps-deploy@v1
            with:
            azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
            repo_token: ${{ secrets.GITHUB_TOKEN }}
            action: "upload"
            app_location: "quiz-app" # App source code path
            api_location: ""API source code path optional
            output_location: "dist" #Built app content directory - optional
    ```

    </details>

- Μετά την Ανάπτυξη: Αφού ολοκληρωθεί η ανάπτυξη, κάντε κλικ στο 'Go to Deployment' και στη συνέχεια 'View app in browser'.

Μόλις εκτελεστεί με επιτυχία η ενέργεια GitHub (ροή εργασίας), ανανεώστε τη ζωντανή σελίδα για να δείτε την εφαρμογή σας.

---

**Αποποίηση ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία αυτόματης μετάφρασης [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε προσπάθειες για ακρίβεια, παρακαλούμε να έχετε υπόψη ότι οι αυτοματοποιημένες μεταφράσεις ενδέχεται να περιέχουν λάθη ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.