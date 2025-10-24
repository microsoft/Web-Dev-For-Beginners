<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "46d665af66e51524598af34a42b9b663",
  "translation_date": "2025-10-23T20:12:42+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "el"
}
-->
# Δημιουργία Βοηθού Συνομιλίας με Τεχνητή Νοημοσύνη

Θυμάστε στο Star Trek όταν το πλήρωμα συνομιλούσε χαλαρά με τον υπολογιστή του σκάφους, κάνοντάς του σύνθετες ερωτήσεις και λαμβάνοντας στοχαστικές απαντήσεις; Αυτό που φαινόταν σαν καθαρή επιστημονική φαντασία τη δεκαετία του 1960 είναι πλέον κάτι που μπορείτε να δημιουργήσετε χρησιμοποιώντας τεχνολογίες ιστού που ήδη γνωρίζετε.

Σε αυτό το μάθημα, θα δημιουργήσουμε έναν βοηθό συνομιλίας με AI χρησιμοποιώντας HTML, CSS, JavaScript και κάποια ενσωμάτωση backend. Θα ανακαλύψετε πώς οι δεξιότητες που μαθαίνετε μπορούν να συνδεθούν με ισχυρές υπηρεσίες AI που κατανοούν το πλαίσιο και παράγουν ουσιαστικές απαντήσεις.

Σκεφτείτε την AI σαν να έχετε πρόσβαση σε μια τεράστια βιβλιοθήκη που όχι μόνο βρίσκει πληροφορίες αλλά και τις συνθέτει σε συνεκτικές απαντήσεις προσαρμοσμένες στις συγκεκριμένες ερωτήσεις σας. Αντί να ψάχνετε μέσα σε χιλιάδες σελίδες, λαμβάνετε άμεσες, σχετικές απαντήσεις.

Η ενσωμάτωση γίνεται μέσω γνωστών τεχνολογιών ιστού που συνεργάζονται. Η HTML δημιουργεί τη διεπαφή συνομιλίας, η CSS χειρίζεται τον οπτικό σχεδιασμό, η JavaScript διαχειρίζεται τις αλληλεπιδράσεις του χρήστη και ένα backend API συνδέει τα πάντα με τις υπηρεσίες AI. Είναι παρόμοιο με το πώς διαφορετικά τμήματα μιας ορχήστρας συνεργάζονται για να δημιουργήσουν μια συμφωνία.

Ουσιαστικά χτίζουμε μια γέφυρα μεταξύ της φυσικής ανθρώπινης επικοινωνίας και της μηχανικής επεξεργασίας. Θα μάθετε τόσο την τεχνική υλοποίηση της ενσωμάτωσης υπηρεσιών AI όσο και τα πρότυπα σχεδίασης που κάνουν τις αλληλεπιδράσεις να φαίνονται διαισθητικές.

Μέχρι το τέλος αυτού του μαθήματος, η ενσωμάτωση AI θα φαίνεται λιγότερο σαν μια μυστηριώδης διαδικασία και περισσότερο σαν ένα ακόμα API με το οποίο μπορείτε να εργαστείτε. Θα κατανοήσετε τα θεμελιώδη πρότυπα που τροφοδοτούν εφαρμογές όπως το ChatGPT και το Claude, χρησιμοποιώντας τις ίδιες αρχές ανάπτυξης ιστού που μαθαίνετε.

Αυτό είναι το τελικό αποτέλεσμα του έργου σας:

![Διεπαφή εφαρμογής συνομιλίας που δείχνει συνομιλία μεταξύ χρήστη και βοηθού AI](../../../translated_images/screenshot.0a1ee0d123df681b4501eb53ffb267519fcc20aa653eabecef1e7561ddfb1cab.el.png)

## Κατανόηση της AI: Από το Μυστήριο στην Κατανόηση

Πριν βουτήξουμε στον κώδικα, ας κατανοήσουμε με τι δουλεύουμε. Αν έχετε χρησιμοποιήσει APIs στο παρελθόν, γνωρίζετε το βασικό μοτίβο: στέλνετε ένα αίτημα, λαμβάνετε μια απάντηση.

Τα AI APIs ακολουθούν παρόμοια δομή, αλλά αντί να ανακτούν προαποθηκευμένα δεδομένα από μια βάση δεδομένων, δημιουργούν νέες απαντήσεις βάσει μοτίβων που έχουν μάθει από τεράστιες ποσότητες κειμένου. Σκεφτείτε το σαν τη διαφορά μεταξύ ενός συστήματος καταλόγου βιβλιοθήκης και ενός γνώστη βιβλιοθηκάριου που μπορεί να συνθέσει πληροφορίες από πολλαπλές πηγές.

### Τι είναι πραγματικά η "Γενετική Τεχνητή Νοημοσύνη";

Σκεφτείτε πώς η Στήλη της Ροζέττας επέτρεψε στους μελετητές να κατανοήσουν τα αιγυπτιακά ιερογλυφικά βρίσκοντας μοτίβα μεταξύ γνωστών και άγνωστων γλωσσών. Τα μοντέλα AI λειτουργούν παρόμοια – βρίσκουν μοτίβα σε τεράστιες ποσότητες κειμένου για να κατανοήσουν πώς λειτουργεί η γλώσσα και στη συνέχεια χρησιμοποιούν αυτά τα μοτίβα για να δημιουργήσουν κατάλληλες απαντήσεις σε νέες ερωτήσεις.

**Ας το εξηγήσουμε με μια απλή σύγκριση:**
- **Παραδοσιακή βάση δεδομένων**: Σαν να ζητάτε το πιστοποιητικό γέννησής σας – λαμβάνετε το ίδιο έγγραφο κάθε φορά
- **Μηχανή αναζήτησης**: Σαν να ζητάτε από έναν βιβλιοθηκάριο να βρει βιβλία για γάτες – σας δείχνει τι είναι διαθέσιμο
- **Γενετική AI**: Σαν να ρωτάτε έναν γνώστη φίλο για γάτες – σας λέει ενδιαφέροντα πράγματα με δικά του λόγια, προσαρμοσμένα σε αυτό που θέλετε να μάθετε

```mermaid
graph LR
    A[Your Question] --> B[AI Model]
    B --> C[Pattern Recognition]
    C --> D[Content Generation]
    D --> E[Contextual Response]
    
    F[Training Data<br/>Books, Articles, Web] --> B
```

### Πώς Μαθαίνουν τα Μοντέλα AI (Η Απλή Έκδοση)

Τα μοντέλα AI μαθαίνουν μέσω της έκθεσης σε τεράστια σύνολα δεδομένων που περιέχουν κείμενα από βιβλία, άρθρα και συνομιλίες. Μέσω αυτής της διαδικασίας, εντοπίζουν μοτίβα σε:
- Πώς δομούνται οι σκέψεις στην γραπτή επικοινωνία
- Ποιες λέξεις εμφανίζονται συχνά μαζί
- Πώς συνήθως εξελίσσονται οι συνομιλίες
- Διαφορές στο πλαίσιο μεταξύ επίσημης και ανεπίσημης επικοινωνίας

**Είναι παρόμοιο με το πώς οι αρχαιολόγοι αποκωδικοποιούν αρχαίες γλώσσες**: αναλύουν χιλιάδες παραδείγματα για να κατανοήσουν τη γραμματική, το λεξιλόγιο και το πολιτιστικό πλαίσιο, καταλήγοντας να μπορούν να ερμηνεύσουν νέα κείμενα χρησιμοποιώντας αυτά τα μοτίβα.

### Γιατί να χρησιμοποιήσουμε τα GitHub Models;

Χρησιμοποιούμε τα GitHub Models για έναν αρκετά πρακτικό λόγο – μας δίνει πρόσβαση σε AI επιπέδου επιχείρησης χωρίς να χρειάζεται να στήσουμε τη δική μας υποδομή AI (κάτι που, πιστέψτε με, δεν θέλετε να κάνετε αυτή τη στιγμή!). Σκεφτείτε το σαν να χρησιμοποιείτε ένα API καιρού αντί να προσπαθείτε να προβλέψετε τον καιρό μόνοι σας στήνοντας μετεωρολογικούς σταθμούς παντού.

Είναι ουσιαστικά "AI-ως-υπηρεσία", και το καλύτερο; Είναι δωρεάν για να ξεκινήσετε, ώστε να μπορείτε να πειραματιστείτε χωρίς να ανησυχείτε για υπερβολικά έξοδα.

```mermaid
graph LR
    A[Frontend Chat UI] --> B[Your Backend API]
    B --> C[GitHub Models API]
    C --> D[AI Model Processing]
    D --> C
    C --> B
    B --> A
```

Θα χρησιμοποιήσουμε τα GitHub Models για την ενσωμάτωση backend, που παρέχουν πρόσβαση σε δυνατότητες AI επαγγελματικού επιπέδου μέσω μιας φιλικής προς τον προγραμματιστή διεπαφής. Το [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) λειτουργεί ως περιβάλλον δοκιμών όπου μπορείτε να πειραματιστείτε με διαφορετικά μοντέλα AI και να κατανοήσετε τις δυνατότητές τους πριν τα υλοποιήσετε στον κώδικα.

![Διεπαφή GitHub Models AI Playground με επιλογή μοντέλου και περιοχή δοκιμών](../../../translated_images/playground.d2b927122224ff8ff4028fc842176e353c339147d8925455f36c92fb1655c477.el.png)

**Τι κάνει το playground τόσο χρήσιμο:**
- **Δοκιμάστε** διαφορετικά μοντέλα AI όπως το GPT-4o-mini, Claude και άλλα (όλα δωρεάν!)
- **Δοκιμάστε** τις ιδέες και τις προτροπές σας πριν γράψετε οποιονδήποτε κώδικα
- **Λάβετε** έτοιμα αποσπάσματα κώδικα στη γλώσσα προγραμματισμού της επιλογής σας
- **Ρυθμίστε** παραμέτρους όπως το επίπεδο δημιουργικότητας και το μήκος της απάντησης για να δείτε πώς επηρεάζουν το αποτέλεσμα

Αφού πειραματιστείτε λίγο, απλώς κάντε κλικ στην καρτέλα "Code" και επιλέξτε τη γλώσσα προγραμματισμού σας για να λάβετε τον κώδικα υλοποίησης που χρειάζεστε.

![Επιλογή playground που δείχνει επιλογές δημιουργίας κώδικα για διαφορετικές γλώσσες προγραμματισμού](../../../translated_images/playground-choice.1d23ba7d407f47584c9f446c77f0bcf70cae794cc9c8d7849a3cca4a3693e6c4.el.png)

## Ρύθμιση της Ενσωμάτωσης Backend με Python

Τώρα ας υλοποιήσουμε την ενσωμάτωση AI χρησιμοποιώντας Python. Η Python είναι εξαιρετική για εφαρμογές AI λόγω της απλής σύνταξης και των ισχυρών βιβλιοθηκών της. Θα ξεκινήσουμε με τον κώδικα από το GitHub Models playground και στη συνέχεια θα τον αναδιαμορφώσουμε σε μια επαναχρησιμοποιήσιμη, έτοιμη για παραγωγή συνάρτηση.

### Κατανόηση της Βασικής Υλοποίησης

Όταν πάρετε τον κώδικα Python από το playground, θα μοιάζει κάπως έτσι. Μην ανησυχείτε αν φαίνεται πολύπλοκο στην αρχή – ας το αναλύσουμε βήμα προς βήμα:

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings. 
# Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key=os.environ["GITHUB_TOKEN"],
)

```python
response = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "",
        },
        {
            "role": "user",
            "content": "What is the capital of France?",
        }
    ],
    model="openai/gpt-4o-mini",
    temperature=1,
    max_tokens=4096,
    top_p=1
)

print(response.choices[0].message.content)
```

**Τι συμβαίνει σε αυτόν τον κώδικα:**
- **Εισάγουμε** τα εργαλεία που χρειαζόμαστε: `os` για ανάγνωση μεταβλητών περιβάλλοντος και `OpenAI` για επικοινωνία με την AI
- **Ρυθμίζουμε** τον πελάτη OpenAI ώστε να δείχνει στους διακομιστές AI του GitHub αντί για την OpenAI απευθείας
- **Επαληθεύουμε** χρησιμοποιώντας ένα ειδικό GitHub token (περισσότερα γι' αυτό σε λίγο!)
- **Δομούμε** τη συνομιλία μας με διαφορετικούς "ρόλους" – σκεφτείτε το σαν να στήνετε τη σκηνή για ένα θεατρικό έργο
- **Στέλνουμε** το αίτημά μας στην AI με κάποιες παραμέτρους λεπτομέρειας
- **Εξάγουμε** το πραγματικό κείμενο της απάντησης από όλα τα δεδομένα που επιστρέφονται

### Κατανόηση των Ρόλων Μηνυμάτων: Το Πλαίσιο Συνομιλίας της AI

Οι συνομιλίες με την AI χρησιμοποιούν μια συγκεκριμένη δομή με διαφορετικούς "ρόλους" που εξυπηρετούν διαφορετικούς σκοπούς:

```python
messages=[
    {
        "role": "system",
        "content": "You are a helpful assistant who explains things simply."
    },
    {
        "role": "user", 
        "content": "What is machine learning?"
    }
]
```

**Σκεφτείτε το σαν να σκηνοθετείτε ένα θεατρικό έργο:**
- **Ρόλος συστήματος**: Σαν σκηνικές οδηγίες για έναν ηθοποιό – λέει στην AI πώς να συμπεριφέρεται, τι προσωπικότητα να έχει και πώς να απαντά
- **Ρόλος χρήστη**: Η πραγματική ερώτηση ή το μήνυμα από το άτομο που χρησιμοποιεί την εφαρμογή σας
- **Ρόλος βοηθού**: Η απάντηση της AI (δεν το στέλνετε, αλλά εμφανίζεται στο ιστορικό της συνομιλίας)

**Αναλογία πραγματικού κόσμου**: Φανταστείτε ότι συστήνετε έναν φίλο σε κάποιον σε ένα πάρτι:
- **Μήνυμα συστήματος**: "Αυτός είναι ο φίλος μου η Σάρα, είναι γιατρός που εξηγεί εξαιρετικά καλά ιατρικές έννοιες με απλό τρόπο"
- **Μήνυμα χρήστη**: "Μπορείς να μου εξηγήσεις πώς λειτουργούν τα εμβόλια;"
- **Απάντηση βοηθού**: Η Σάρα απαντά ως φιλική γιατρός, όχι ως δικηγόρος ή σεφ

### Κατανόηση των Παραμέτρων AI: Ρύθμιση της Συμπεριφοράς Απάντησης

Οι αριθμητικές παράμετροι στις κλήσεις API της AI ελέγχουν πώς το μοντέλο δημιουργεί απαντήσεις. Αυτές οι ρυθμίσεις σας επιτρέπουν να προσαρμόσετε τη συμπεριφορά της AI για διαφορετικές περιπτώσεις χρήσης:

#### Temperature (0.0 έως 2.0): Ο Δείκτης Δημιουργικότητας

**Τι κάνει**: Ελέγχει πόσο δημιουργικές ή προβλέψιμες θα είναι οι απαντήσεις της AI.

**Σκεφτείτε το σαν το επίπεδο αυτοσχεδιασμού ενός τζαζ μουσικού:**
- **Temperature = 0.1**: Παίζει την ίδια μελωδία κάθε φορά (πολύ προβλέψιμο)
- **Temperature = 0.7**: Προσθέτει κάποιες κομψές παραλλαγές ενώ παραμένει αναγνωρίσιμο (ισορροπημένη δημιουργικότητα)
- **Temperature = 1.5**: Πλήρης πειραματική τζαζ με απρόσμενες στροφές (πολύ απρόβλεπτο)

```python
# Very predictable responses (good for factual questions)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # Will almost always say "4"
)

# Creative responses (good for brainstorming)
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # Will generate unique, unexpected stories
)
```

#### Max Tokens (1 έως 4096+): Ο Ελεγκτής Μήκους Απάντησης

**Τι κάνει**: Θέτει ένα όριο στο πόσο μεγάλη μπορεί να είναι η απάντηση της AI.

**Σκεφτείτε τα tokens ως περίπου ισοδύναμα με λέξεις** (περίπου 1 token = 0.75 λέξεις στα Αγγλικά):
- **max_tokens=50**: Σύντομο και περιεκτικό (σαν μήνυμα κειμένου)
- **max_tokens=500**: Μια ωραία παράγραφος ή δύο
- **max_tokens=2000**: Μια λεπτομερής εξήγηση με παραδείγματα

```python
# Short, concise answers
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # Forces a brief explanation
)

# Detailed, comprehensive answers  
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # Allows for detailed explanations with examples
)
```

#### Top_p (0.0 έως 1.0): Η Παράμετρος Εστίασης

**Τι κάνει**: Ελέγχει πόσο εστιασμένη παραμένει η AI στις πιο πιθανές απαντήσεις.

**Φανταστείτε την AI να έχει ένα τεράστιο λεξιλόγιο, ταξινομημένο με βάση το πόσο πιθανή είναι κάθε λέξη**:
- **top_p=0.1**: Λαμβάνει υπόψη μόνο το 10% των πιο πιθανών λέξεων (πολύ εστιασμένο)
- **top_p=0.9**: Λαμβάνει υπόψη το 90% των πιθανών λέξεων (πιο δημιουργικό)
- **top_p=1.0**: Λαμβάνει υπόψη τα πάντα (μέγιστη ποικιλία)

**Για παράδειγμα**: Αν ρωτήσετε "Ο ουρανός είναι συνήθως..."
- **Χαμηλό top_p**: Σχεδόν σίγουρα θα πει "μπλε"
- **Υψηλό top_p**: Μπορεί να πει "μπλε", "συννεφιασμένος", "απέραντος", "μεταβαλλόμενος", "όμορφος" κ.λπ.

### Συνδυάζοντας τα Όλα: Συνδυασμοί Παραμέτρων για Διαφορετικές Περιπτώσεις Χρήσης

```python
# For factual, consistent answers (like a documentation bot)
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# For creative writing assistance
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# For conversational, helpful responses (balanced)
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

**Κατανόηση γιατί αυτές οι παράμετροι έχουν σημασία**: Διαφορετικές εφαρμογές χρειάζονται διαφορετικούς τύπους απαντήσεων. Ένα bot εξυπηρέτησης πελατών πρέπει να είναι συνεπές και ακριβές (χαμηλή θερμοκρασία), ενώ ένας βοηθός δημιουργικής γραφής πρέπει να είναι ευφάνταστος και ποικίλος (υψηλή θερμοκρασία). Η κατανόηση αυτών των παραμέτρων σας δίνει έλεγχο πάνω στην προσωπικότητα και το στυλ απάντησης της AI.
```

**Here's what's happening in this code:**
- **We import** the tools we need: `os` for reading environment variables and `OpenAI` for talking to the AI
- **We set up** the OpenAI client to point to GitHub's AI servers instead of OpenAI directly
- **We authenticate** using a special GitHub token (more on that in a minute!)
- **We structure** our conversation with different "roles" – think of it like setting the scene for a play
- **We send** our request to the AI with some fine-tuning parameters
- **We extract** the actual response text from all the data that comes back

> 🔐 **Security Note**: Never hardcode API keys in your source code! Always use environment variables to store sensitive credentials like your `GITHUB_TOKEN`.

### Creating a Reusable AI Function

Let's refactor this code into a clean, reusable function that we can easily integrate into our web application:

```python
import asyncio
from openai import AsyncOpenAI

# Use AsyncOpenAI for better performance
client = AsyncOpenAI(
    base_url="https://models.github.ai/inference",
    api_key=os.environ["GITHUB_TOKEN"],
)

async def call_llm_async(prompt: str, system_message: str = "You are a helpful assistant."):
    """
    Sends a prompt to the AI model asynchronously and returns the response.
    
    Args:
        prompt: The user's question or message
        system_message: Instructions that define the AI's behavior and personality
    
    Returns:
        str: The AI's response to the prompt
    """
    try:
        response = await client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": system_message,
                },
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            model="openai/gpt-4o-mini",
            temperature=1,
            max_tokens=4096,
            top_p=1
        )
        return response.choices[0].message.content
    except Exception as e:
        logger.error(f"AI API error: {str(e)}")
        return "I'm sorry, I'm having trouble processing your request right now."

# Backward compatibility function for synchronous calls
def call_llm(prompt: str, system_message: str = "You are a helpful assistant."):
    """Synchronous wrapper for async AI calls."""
    return asyncio.run(call_llm_async(prompt, system_message))
```

**Κατανόηση αυτής της βελτιωμένης συνάρτησης:**
- **Δέχεται** δύο παραμέτρους: την προτροπή του χρήστη και ένα προαιρετικό μήνυμα συστήματος
- **Παρέχει** ένα προεπιλεγμένο μήνυμα συστήματος για γενική συμπεριφορά βοηθού
- **Χρησιμοποιεί** σωστές υποδείξεις τύπου Python για καλύτερη τεκμηρίωση κώδικα
- **Επιστρέφει** μόνο το περιεχόμενο της απάντησης, καθιστώντας το εύκολο στη χρήση στο web API μας
- **Διατηρεί** τις ίδιες παραμέτρους μοντέλου για συνεπή συμπεριφορά AI

### Η Μαγεία των Μηνυμάτων Συστήματος: Προγραμματίζοντας την Προσωπικότητα της AI

Αν οι παράμετροι ελέγχουν πώς σκέφτεται η AI, τα μηνύματα συστήματος ελέγχουν ποια πιστεύει ότι είναι. Αυτό είναι ειλικρινά ένα από τα πιο συναρπαστικά μέρη της εργασίας με την AI – ουσιαστικά δίνετε στην AI μια πλήρη προσωπικότητα, επίπεδο εξειδίκευσης και στυλ επικοινωνίας.

**Σκεφτείτε τα μηνύματα συστήματος σαν να επιλέγετε διαφορετικούς ηθοποιούς για διαφορετικούς ρόλους**: Αντί να έχετε έναν γενικό βοηθό
**Γιατί το FastAPI είναι ιδανικό για αυτό που χτίζουμε:**
- **Ασύγχρονο από προεπιλογή**: Μπορεί να διαχειριστεί πολλαπλά αιτήματα AI ταυτόχρονα χωρίς να κολλάει
- **Αυτόματη τεκμηρίωση**: Επισκεφθείτε το `/docs` και αποκτήστε μια όμορφη, διαδραστική σελίδα τεκμηρίωσης API δωρεάν
- **Ενσωματωμένη επικύρωση**: Εντοπίζει σφάλματα πριν προκαλέσουν προβλήματα
- **Αστραπιαία ταχύτητα**: Ένα από τα ταχύτερα frameworks Python που υπάρχουν
- **Σύγχρονη Python**: Χρησιμοποιεί όλα τα τελευταία και καλύτερα χαρακτηριστικά της Python

**Και γιατί χρειαζόμαστε backend γενικά:**

**Ασφάλεια**: Το κλειδί API του AI σας είναι σαν κωδικός πρόσβασης – αν το βάλετε στο frontend JavaScript, οποιοσδήποτε δει τον πηγαίο κώδικα του ιστότοπού σας μπορεί να το κλέψει και να χρησιμοποιήσει τις πιστώσεις AI σας. Το backend διατηρεί ασφαλή τα ευαίσθητα διαπιστευτήρια.

**Περιορισμός Ρυθμού & Έλεγχος**: Το backend σας επιτρέπει να ελέγχετε πόσο συχνά οι χρήστες μπορούν να κάνουν αιτήματα, να εφαρμόζετε έλεγχο ταυτότητας χρηστών και να προσθέτετε καταγραφή για την παρακολούθηση της χρήσης.

**Επεξεργασία Δεδομένων**: Ίσως θέλετε να αποθηκεύσετε συνομιλίες, να φιλτράρετε ακατάλληλο περιεχόμενο ή να συνδυάσετε πολλαπλές υπηρεσίες AI. Το backend είναι το μέρος όπου ζει αυτή η λογική.

**Η αρχιτεκτονική μοιάζει με το μοντέλο πελάτη-διακομιστή:**
- **Frontend**: Επίπεδο διεπαφής χρήστη για αλληλεπίδραση
- **Backend API**: Επίπεδο επεξεργασίας αιτημάτων και δρομολόγησης
- **Υπηρεσία AI**: Εξωτερικός υπολογισμός και δημιουργία απαντήσεων
- **Μεταβλητές Περιβάλλοντος**: Ασφαλής αποθήκευση ρυθμίσεων και διαπιστευτηρίων

### Κατανόηση της Ροής Αιτήματος-Απάντησης

Ας δούμε τι συμβαίνει όταν ένας χρήστης στέλνει ένα μήνυμα:

```mermaid
sequenceDiagram
    participant User as 👤 User
    participant Frontend as 🌐 Frontend
    participant API as 🔧 FastAPI Server
    participant AI as 🤖 AI Service
    
    User->>Frontend: Types "Hello AI!"
    Frontend->>API: POST /hello {"message": "Hello AI!"}
    Note over API: Validates request<br/>Adds system prompt
    API->>AI: Sends formatted request
    AI->>API: Returns AI response
    Note over API: Processes response<br/>Logs conversation
    API->>Frontend: {"response": "Hello! How can I help?"}
    Frontend->>User: Displays AI message
```

**Κατανόηση κάθε βήματος:**
1. **Αλληλεπίδραση χρήστη**: Ο χρήστης πληκτρολογεί στη διεπαφή συνομιλίας
2. **Επεξεργασία frontend**: Το JavaScript καταγράφει την είσοδο και τη μορφοποιεί ως JSON
3. **Επικύρωση API**: Το FastAPI επικυρώνει αυτόματα το αίτημα χρησιμοποιώντας μοντέλα Pydantic
4. **Ενσωμάτωση AI**: Το backend προσθέτει πλαίσιο (system prompt) και καλεί την υπηρεσία AI
5. **Διαχείριση απάντησης**: Το API λαμβάνει την απάντηση του AI και μπορεί να την τροποποιήσει αν χρειαστεί
6. **Εμφάνιση στο frontend**: Το JavaScript εμφανίζει την απάντηση στη διεπαφή συνομιλίας

### Κατανόηση της Αρχιτεκτονικής του API

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Hello AI!"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: API request
    GitHub Models->>AI Function: AI response
    AI Function->>FastAPI: response text
    FastAPI->>Frontend: {"response": "Hello! How can I help?"}
```

### Δημιουργία της Εφαρμογής FastAPI

Ας δημιουργήσουμε το API μας βήμα προς βήμα. Δημιουργήστε ένα αρχείο που ονομάζεται `api.py` με τον παρακάτω κώδικα FastAPI:

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Create FastAPI application
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure appropriately for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request/response validation
class ChatMessage(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

@app.get("/")
async def root():
    """Root endpoint providing API information."""
    return {
        "message": "Welcome to the AI Chat API",
        "docs": "/docs",
        "health": "/health"
    }

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy", "service": "ai-chat-api"}

@app.post("/hello", response_model=ChatResponse)
async def chat_endpoint(chat_message: ChatMessage):
    """Main chat endpoint that processes messages and returns AI responses."""
    try:
        # Extract and validate message
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # Call AI service (note: call_llm should be made async for better performance)
        ai_response = await call_llm_async(message, "You are a helpful and friendly assistant.")
        
        logger.info("AI response generated successfully")
        return ChatResponse(response=ai_response)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error processing chat message: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000, reload=True)
```

**Κατανόηση της υλοποίησης του FastAPI:**
- **Εισάγει** το FastAPI για σύγχρονη λειτουργικότητα web framework και το Pydantic για επικύρωση δεδομένων
- **Δημιουργεί** αυτόματη τεκμηρίωση API (διαθέσιμη στο `/docs` όταν ο διακομιστής εκτελείται)
- **Ενεργοποιεί** το CORS middleware για να επιτρέπει αιτήματα από διαφορετικές προελεύσεις
- **Ορίζει** μοντέλα Pydantic για αυτόματη επικύρωση αιτημάτων/απαντήσεων και τεκμηρίωση
- **Χρησιμοποιεί** ασύγχρονα endpoints για καλύτερη απόδοση με ταυτόχρονα αιτήματα
- **Υλοποιεί** κατάλληλους κωδικούς κατάστασης HTTP και διαχείριση σφαλμάτων με HTTPException
- **Περιλαμβάνει** δομημένη καταγραφή για παρακολούθηση και αποσφαλμάτωση
- **Παρέχει** endpoint ελέγχου υγείας για παρακολούθηση της κατάστασης της υπηρεσίας

**Κύρια πλεονεκτήματα του FastAPI σε σχέση με παραδοσιακά frameworks:**
- **Αυτόματη επικύρωση**: Τα μοντέλα Pydantic διασφαλίζουν την ακεραιότητα των δεδομένων πριν από την επεξεργασία
- **Διαδραστική τεκμηρίωση**: Επισκεφθείτε το `/docs` για αυτόματη, δοκιμαστική τεκμηρίωση API
- **Ασφάλεια τύπων**: Οι υποδείξεις τύπων της Python αποτρέπουν σφάλματα κατά την εκτέλεση και βελτιώνουν την ποιότητα του κώδικα
- **Υποστήριξη ασύγχρονων λειτουργιών**: Διαχειριστείτε πολλαπλά αιτήματα AI ταυτόχρονα χωρίς καθυστερήσεις
- **Απόδοση**: Σημαντικά ταχύτερη επεξεργασία αιτημάτων για εφαρμογές σε πραγματικό χρόνο

### Κατανόηση του CORS: Ο Φύλακας Ασφαλείας του Ιστού

Το CORS (Cross-Origin Resource Sharing) είναι σαν ένας φύλακας ασφαλείας σε ένα κτίριο που ελέγχει αν οι επισκέπτες επιτρέπεται να εισέλθουν. Ας κατανοήσουμε γιατί αυτό είναι σημαντικό και πώς επηρεάζει την εφαρμογή σας.

#### Τι είναι το CORS και γιατί υπάρχει;

**Το Πρόβλημα**: Φανταστείτε αν οποιοσδήποτε ιστότοπος μπορούσε να κάνει αιτήματα στον ιστότοπο της τράπεζάς σας εκ μέρους σας χωρίς την άδειά σας. Αυτό θα ήταν εφιάλτης ασφαλείας! Οι περιηγητές το αποτρέπουν αυτό από προεπιλογή μέσω της "Πολιτικής Ίδιου Προέλευσης".

**Πολιτική Ίδιου Προέλευσης**: Οι περιηγητές επιτρέπουν μόνο σε ιστοσελίδες να κάνουν αιτήματα στον ίδιο τομέα, θύρα και πρωτόκολλο από τα οποία φορτώθηκαν.

**Αναλογία πραγματικού κόσμου**: Είναι σαν την ασφάλεια ενός κτιρίου διαμερισμάτων – μόνο οι κάτοικοι (ίδια προέλευση) μπορούν να έχουν πρόσβαση στο κτίριο από προεπιλογή. Αν θέλετε να αφήσετε έναν φίλο (διαφορετική προέλευση) να σας επισκεφθεί, πρέπει να ενημερώσετε ρητά την ασφάλεια ότι είναι εντάξει.

#### CORS στο Περιβάλλον Ανάπτυξης

Κατά τη διάρκεια της ανάπτυξης, το frontend και το backend εκτελούνται σε διαφορετικές θύρες:
- Frontend: `http://localhost:3000` (ή file:// αν ανοίγετε HTML απευθείας)
- Backend: `http://localhost:5000`

Αυτά θεωρούνται "διαφορετικές προελεύσεις" ακόμα και αν βρίσκονται στον ίδιο υπολογιστή!

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # This tells browsers: "It's okay for other origins to make requests to this API"
```

**Τι κάνει η ρύθμιση του CORS στην πράξη:**
- **Προσθέτει** ειδικές κεφαλίδες HTTP στις απαντήσεις API που λένε στους περιηγητές "αυτό το αίτημα από διαφορετική προέλευση επιτρέπεται"
- **Διαχειρίζεται** αιτήματα "προελέγχου" (οι περιηγητές μερικές φορές ελέγχουν τα δικαιώματα πριν στείλουν το πραγματικό αίτημα)
- **Αποτρέπει** το ενοχλητικό σφάλμα "blocked by CORS policy" στην κονσόλα του περιηγητή σας

#### Ασφάλεια CORS: Ανάπτυξη vs Παραγωγή

```python
# 🚨 Development: Allows ALL origins (convenient but insecure)
CORS(app)

# ✅ Production: Only allow your specific frontend domain
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 Advanced: Different origins for different environments
if app.debug:  # Development mode
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # Production mode
    CORS(app, origins=["https://yourdomain.com"])
```

**Γιατί αυτό είναι σημαντικό**: Στην ανάπτυξη, το `CORS(app)` είναι σαν να αφήνετε την μπροστινή σας πόρτα ξεκλείδωτη – βολικό αλλά όχι ασφαλές. Στην παραγωγή, θέλετε να καθορίσετε ακριβώς ποιοι ιστότοποι μπορούν να επικοινωνούν με το API σας.

#### Συνήθη Σενάρια και Λύσεις CORS

| Σενάριο | Πρόβλημα | Λύση |
|----------|---------|----------|
| **Τοπική Ανάπτυξη** | Το frontend δεν μπορεί να φτάσει στο backend | Προσθέστε CORSMiddleware στο FastAPI |
| **GitHub Pages + Heroku** | Το αναπτυγμένο frontend δεν μπορεί να φτάσει στο API | Προσθέστε το URL του GitHub Pages στις προελεύσεις CORS |
| **Προσαρμοσμένο Domain** | Σφάλματα CORS στην παραγωγή | Ενημερώστε τις προελεύσεις CORS ώστε να ταιριάζουν με το domain σας |
| **Εφαρμογή για Κινητά** | Η εφαρμογή δεν μπορεί να φτάσει στο web API | Προσθέστε το domain της εφαρμογής σας ή χρησιμοποιήστε `*` προσεκτικά |

**Συμβουλή**: Μπορείτε να ελέγξετε τις κεφαλίδες CORS στα Εργαλεία Προγραμματιστών του περιηγητή σας στην καρτέλα Δίκτυο. Αναζητήστε κεφαλίδες όπως `Access-Control-Allow-Origin` στην απάντηση.

### Διαχείριση Σφαλμάτων και Επικύρωση

Παρατηρήστε πώς το API μας περιλαμβάνει σωστή διαχείριση σφαλμάτων:

```python
# Validate that we received a message
if not message:
    return jsonify({"error": "Message field is required"}), 400
```

**Βασικές αρχές επικύρωσης:**
- **Ελέγχει** για απαιτούμενα πεδία πριν από την επεξεργασία αιτημάτων
- **Επιστρέφει** ουσιαστικά μηνύματα σφάλματος σε μορφή JSON
- **Χρησιμοποιεί** κατάλληλους κωδικούς κατάστασης HTTP (400 για κακά αιτήματα)
- **Παρέχει** σαφή ανατροφοδότηση για να βοηθήσει τους προγραμματιστές frontend να αποσφαλματώσουν προβλήματα

## Ρύθμιση και Εκτέλεση του Backend σας

Τώρα που έχουμε την ενσωμάτωση AI και τον διακομιστή FastAPI έτοιμο, ας τα θέσουμε όλα σε λειτουργία. Η διαδικασία ρύθμισης περιλαμβάνει την εγκατάσταση εξαρτήσεων Python, τη διαμόρφωση μεταβλητών περιβάλλοντος και την εκκίνηση του διακομιστή ανάπτυξης.

### Ρύθμιση Περιβάλλοντος Python

Ας ρυθμίσουμε το περιβάλλον ανάπτυξης Python σας. Οι εικονικά περιβάλλοντα είναι σαν την προσέγγιση compartmentalization του Manhattan Project – κάθε έργο αποκτά τον δικό του απομονωμένο χώρο με συγκεκριμένα εργαλεία και εξαρτήσεις, αποτρέποντας συγκρούσεις μεταξύ διαφορετικών έργων.

```bash
# Navigate to your backend directory
cd backend

# Create a virtual environment (like creating a clean room for your project)
python -m venv venv

# Activate it (Linux/Mac)
source ./venv/bin/activate

# On Windows, use:
# venv\Scripts\activate

# Install the good stuff
pip install openai fastapi uvicorn python-dotenv
```

**Τι μόλις κάναμε:**
- **Δημιουργήσαμε** τη δική μας μικρή φούσκα Python όπου μπορούμε να εγκαταστήσουμε πακέτα χωρίς να επηρεάζουμε τίποτα άλλο
- **Ενεργοποιήσαμε** τη φούσκα ώστε το τερματικό μας να ξέρει να χρησιμοποιεί αυτό το συγκεκριμένο περιβάλλον
- **Εγκαταστήσαμε** τα απαραίτητα: OpenAI για AI μαγεία, FastAPI για το web API μας, Uvicorn για να το εκτελέσουμε και python-dotenv για ασφαλή διαχείριση μυστικών

**Εξήγηση βασικών εξαρτήσεων:**
- **FastAPI**: Σύγχρονο, γρήγορο web framework με αυτόματη τεκμηρίωση API
- **Uvicorn**: Αστραπιαία γρήγορος ASGI διακομιστής που εκτελεί εφαρμογές FastAPI
- **OpenAI**: Επίσημη βιβλιοθήκη για ενσωμάτωση με τα μοντέλα του OpenAI
- **python-dotenv**: Ασφαλής φόρτωση μεταβλητών περιβάλλοντος από αρχεία .env

### Διαμόρφωση Περιβάλλοντος: Διατήρηση Μυστικών Ασφαλών

Πριν ξεκινήσουμε το API μας, πρέπει να μιλήσουμε για ένα από τα πιο σημαντικά μαθήματα στην ανάπτυξη web: πώς να διατηρείτε τα μυστικά σας πραγματικά μυστικά. Οι μεταβλητές περιβάλλοντος είναι σαν ένα ασφαλές θησαυροφυλάκιο που μόνο η εφαρμογή σας μπορεί να έχει πρόσβαση.

#### Τι είναι οι Μεταβλητές Περιβάλλοντος;

**Σκεφτείτε τις μεταβλητές περιβάλλοντος σαν ένα κουτί ασφαλείας** – βάζετε τα πολύτιμα πράγματά σας εκεί, και μόνο εσείς (και η εφαρμογή σας) έχετε το κλειδί για να τα πάρετε. Αντί να γράφετε ευαίσθητες πληροφορίες απευθείας στον κώδικά σας (όπου κυριολεκτικά οποιοσδήποτε μπορεί να τις δει), τις αποθηκεύετε με ασφάλεια στο περιβάλλον.

**Η διαφορά:**
- **Ο λάθος τρόπος**: Να γράφετε τον κωδικό σας σε ένα αυτοκόλλητο και να το κολλάτε στην οθόνη σας
- **Ο σωστός τρόπος**: Να κρατάτε τον κωδικό σας σε έναν ασφαλή διαχειριστή κωδικών που μόνο εσείς μπορείτε να έχετε πρόσβαση

#### Γιατί οι Μεταβλητές Περιβάλλοντος Είναι Σημαντικές

```python
# 🚨 NEVER DO THIS - API key visible to everyone
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # Anyone can steal this!
    base_url="https://models.github.ai/inference"
)

# ✅ DO THIS - API key stored securely
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # Only your app can access this
    base_url="https://models.github.ai/inference"
)
```

**Τι συμβαίνει όταν σκληροκωδικοποιείτε μυστικά:**
1. **Έκθεση στον έλεγχο εκδόσεων**: Οποιοσδήποτε έχει πρόσβαση στο αποθετήριο Git σας βλέπει το κλειδί API σας
2. **Δημόσια αποθετήρια**: Αν το ανεβάσετε στο GitHub, το κλειδί σας είναι ορατό σε όλο το διαδίκτυο
3. **Κοινή χρήση ομάδας**: Άλλοι προγραμματιστές που εργάζονται στο έργο σας αποκτούν πρόσβαση στο προσωπικό σας κλειδί API
4. **Παραβιάσεις ασφαλείας**: Αν κάποιος κλέψει το κλειδί API σας, μπορεί να χρησιμοποιήσει τις πιστώσεις AI σας

#### Ρύθμιση του Αρχείου Περιβάλλοντος σας

Δημιουργήστε ένα αρχείο `.env` στον κατάλογο του backend σας. Αυτό το αρχείο αποθηκεύει τα μυστικά σας τοπικά:

```bash
# .env file - This should NEVER be committed to Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```

**Κατανόηση του αρχείου .env:**
- **Ένα μυστικό ανά γραμμή** στη μορφή `KEY=value`
- **Χωρίς κενά** γύρω από το ίσον
- **Χωρίς εισαγωγικά** γύρω από τις τιμές (συνήθως)
- **Τα σχόλια** ξεκινούν με `#`

#### Δημιουργία του Προσωπικού Access Token GitHub σας

Το token GitHub σας είναι σαν ένας ειδικός κωδικός που δίνει στην εφαρμογή σας άδεια να χρησιμοποιεί τις υπηρεσίες AI του GitHub:

**Βήμα-βήμα δημιουργία token:**
1. **Πηγαίνετε στις Ρυθμίσεις GitHub** → Ρυθμίσεις προγραμματιστή → Προσωπικά access tokens → Tokens (classic)
2. **Κάντε κλικ στο "Generate new token (classic)"**
3. **Ορίστε λήξη** (30 ημέρες για δοκιμές, περισσότερο για παραγωγή)
4. **Επιλέξτε πεδία**: Επιλέξτε "repo" και οποιαδήποτε άλλα δικαιώματα χρειάζεστε
5. **Δημιουργήστε το token** και αντιγράψτε το αμέσως (δεν μπορείτε να το δείτε ξανά!)
6. **Επικολλήστε το στο αρχείο .env σας**

```bash
# Example of what your token looks like (this is fake!)
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```

#### Φόρτωση Μεταβλητών Περιβάλλοντος στην Python

```python
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Now you can access them securely
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```

**Τι κάνει αυτός ο κώδικας:**
- **Φορτώνει** το αρχείο .env σας και κάνει τις μεταβλητές διαθέσιμες στην Python
- **Ελέγχει** αν υπάρχει το απαιτούμενο token (καλή διαχείριση σφαλμάτων!)
- **Εμφανίζει** σαφές σφάλμα αν λείπει το token
- **Χρησιμοποιεί** το token με ασφάλεια χωρίς να το εκθέτει στον κώδικα

#### Ασφάλεια Git: Το
```python
# test_api.py - Create this file to test your API
import requests
import json

# Test the API endpoint
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### Αντιμετώπιση Συνηθισμένων Προβλημάτων Εκκίνησης

| Μήνυμα Σφάλματος | Τι Σημαίνει | Πώς να το Διορθώσετε |
|------------------|-------------|-----------------------|
| `ModuleNotFoundError: No module named 'fastapi'` | Το FastAPI δεν είναι εγκατεστημένο | Εκτελέστε `pip install fastapi uvicorn` στο εικονικό σας περιβάλλον |
| `ModuleNotFoundError: No module named 'uvicorn'` | Ο ASGI server δεν είναι εγκατεστημένος | Εκτελέστε `pip install uvicorn` στο εικονικό σας περιβάλλον |
| `KeyError: 'GITHUB_TOKEN'` | Η μεταβλητή περιβάλλοντος δεν βρέθηκε | Ελέγξτε το αρχείο `.env` και την κλήση `load_dotenv()` |
| `Address already in use` | Η θύρα 5000 είναι απασχολημένη | Τερματίστε άλλες διεργασίες που χρησιμοποιούν τη θύρα 5000 ή αλλάξτε τη θύρα |
| `ValidationError` | Τα δεδομένα αιτήματος δεν ταιριάζουν με το μοντέλο Pydantic | Ελέγξτε αν η μορφή του αιτήματος ταιριάζει με το αναμενόμενο σχήμα |
| `HTTPException 422` | Μη επεξεργάσιμη οντότητα | Η επικύρωση του αιτήματος απέτυχε, ελέγξτε το `/docs` για τη σωστή μορφή |
| `OpenAI API error` | Η αυθεντικοποίηση της υπηρεσίας AI απέτυχε | Επαληθεύστε ότι το GitHub token σας είναι σωστό και έχει τις κατάλληλες άδειες |

#### Καλές Πρακτικές Ανάπτυξης

**Αυτόματη Επαναφόρτωση**: Το FastAPI με το Uvicorn παρέχει αυτόματη επαναφόρτωση όταν αποθηκεύετε αλλαγές στα αρχεία Python σας. Αυτό σημαίνει ότι μπορείτε να τροποποιήσετε τον κώδικα σας και να τον δοκιμάσετε άμεσα χωρίς να χρειάζεται να κάνετε χειροκίνητη επανεκκίνηση.

```python
# Enable hot reloading explicitly
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True enables hot reload
```

**Καταγραφή για Ανάπτυξη**: Προσθέστε καταγραφή για να κατανοήσετε τι συμβαίνει:

```python
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.route("/hello", methods=["POST"])
def hello():
    data = request.get_json()
    message = data.get("message", "")
    
    logger.info(f"Received message: {message}")
    
    if not message:
        logger.warning("Empty message received")
        return jsonify({"error": "Message field is required"}), 400
    
    try:
        response = call_llm(message, "You are a helpful and friendly assistant.")
        logger.info(f"AI response generated successfully")
        return jsonify({"response": response})
    except Exception as e:
        logger.error(f"AI API error: {str(e)}")
        return jsonify({"error": "AI service temporarily unavailable"}), 500
```

**Γιατί βοηθά η καταγραφή**: Κατά τη διάρκεια της ανάπτυξης, μπορείτε να δείτε ακριβώς τι αιτήματα λαμβάνονται, τι απαντά η AI και πού εμφανίζονται σφάλματα. Αυτό κάνει την αποσφαλμάτωση πολύ πιο γρήγορη.

### Ρύθμιση για GitHub Codespaces: Εύκολη Ανάπτυξη στο Cloud

Το GitHub Codespaces είναι σαν να έχετε έναν ισχυρό υπολογιστή ανάπτυξης στο cloud, τον οποίο μπορείτε να έχετε πρόσβαση από οποιοδήποτε πρόγραμμα περιήγησης. Εάν εργάζεστε στο Codespaces, υπάρχουν μερικά επιπλέον βήματα για να κάνετε το backend σας προσβάσιμο από το frontend.

#### Κατανόηση του Δικτύου του Codespaces

Σε ένα τοπικό περιβάλλον ανάπτυξης, όλα λειτουργούν στον ίδιο υπολογιστή:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:3000` (ή file://)

Στο Codespaces, το περιβάλλον ανάπτυξης σας λειτουργεί στους διακομιστές του GitHub, οπότε το "localhost" έχει διαφορετική σημασία. Το GitHub δημιουργεί αυτόματα δημόσιες διευθύνσεις URL για τις υπηρεσίες σας, αλλά πρέπει να τις ρυθμίσετε σωστά.

#### Βήμα-Βήμα Ρύθμιση του Codespaces

**1. Ξεκινήστε τον backend server σας**:
```bash
cd backend
python api.py
```

Θα δείτε το γνωστό μήνυμα εκκίνησης του FastAPI/Uvicorn, αλλά παρατηρήστε ότι λειτουργεί μέσα στο περιβάλλον του Codespace.

**2. Ρυθμίστε την ορατότητα της θύρας**:
- Αναζητήστε την καρτέλα "Ports" στο κάτω πάνελ του VS Code
- Βρείτε τη θύρα 5000 στη λίστα
- Κάντε δεξί κλικ στη θύρα 5000
- Επιλέξτε "Port Visibility" → "Public"

**Γιατί να την κάνετε δημόσια;** Από προεπιλογή, οι θύρες του Codespace είναι ιδιωτικές (προσβάσιμες μόνο από εσάς). Κάνοντάς την δημόσια, επιτρέπετε στο frontend (που λειτουργεί στο πρόγραμμα περιήγησης) να επικοινωνεί με το backend.

**3. Αποκτήστε τη δημόσια διεύθυνση URL σας**:
Αφού κάνετε τη θύρα δημόσια, θα δείτε μια διεύθυνση URL όπως:
```
https://your-codespace-name-5000.app.github.dev
```

**4. Ενημερώστε τη ρύθμιση του frontend σας**:
```javascript
// In your frontend app.js, update the BASE_URL:
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### Κατανόηση των Διευθύνσεων URL του Codespace

Οι διευθύνσεις URL του Codespace ακολουθούν ένα προβλέψιμο μοτίβο:
```
https://[codespace-name]-[port].app.github.dev
```

**Ανάλυση:**
- `codespace-name`: Ένας μοναδικός αναγνωριστικός για το Codespace σας (συνήθως περιλαμβάνει το όνομα χρήστη σας)
- `port`: Ο αριθμός θύρας που λειτουργεί η υπηρεσία σας (5000 για την εφαρμογή FastAPI μας)
- `app.github.dev`: Ο τομέας του GitHub για εφαρμογές Codespace

#### Δοκιμή της Ρύθμισης του Codespace

**1. Δοκιμάστε το backend απευθείας**:
Ανοίξτε τη δημόσια διεύθυνση URL σε μια νέα καρτέλα του προγράμματος περιήγησης. Θα πρέπει να δείτε:
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. Δοκιμή με εργαλεία προγραμματιστών του προγράμματος περιήγησης**:
```javascript
// Open browser console and test your API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces vs Τοπική Ανάπτυξη

| Πτυχή | Τοπική Ανάπτυξη | GitHub Codespaces |
|-------|-----------------|-------------------|
| **Χρόνος Ρύθμισης** | Μεγαλύτερος (εγκατάσταση Python, εξαρτήσεις) | Άμεσος (προ-ρυθμισμένο περιβάλλον) |
| **Πρόσβαση σε URL** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **Ρύθμιση Θύρας** | Αυτόματη | Χειροκίνητη (κάντε τις θύρες δημόσιες) |
| **Διατήρηση Αρχείων** | Τοπικός υπολογιστής | Αποθετήριο GitHub |
| **Συνεργασία** | Δύσκολο να μοιραστείτε το περιβάλλον | Εύκολο να μοιραστείτε τον σύνδεσμο του Codespace |
| **Εξάρτηση από το Διαδίκτυο** | Μόνο για κλήσεις API AI | Απαραίτητο για όλα |

#### Συμβουλές Ανάπτυξης στο Codespace

**Μεταβλητές Περιβάλλοντος στο Codespaces**:
Το αρχείο `.env` λειτουργεί με τον ίδιο τρόπο στο Codespaces, αλλά μπορείτε επίσης να ορίσετε μεταβλητές περιβάλλοντος απευθείας στο Codespace:

```bash
# Set environment variable for the current session
export GITHUB_TOKEN="your_token_here"

# Or add to your .bashrc for persistence
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**Διαχείριση Θυρών**:
- Το Codespaces ανιχνεύει αυτόματα όταν η εφαρμογή σας αρχίζει να ακούει σε μια θύρα
- Μπορείτε να προωθήσετε πολλές θύρες ταυτόχρονα (χρήσιμο αν προσθέσετε μια βάση δεδομένων αργότερα)
- Οι θύρες παραμένουν προσβάσιμες όσο το Codespace σας λειτουργεί

**Ροή Εργασίας Ανάπτυξης**:
1. Κάντε αλλαγές στον κώδικα στο VS Code
2. Το FastAPI επαναφορτώνεται αυτόματα (χάρη στη λειτουργία επαναφόρτωσης του Uvicorn)
3. Δοκιμάστε τις αλλαγές άμεσα μέσω της δημόσιας διεύθυνσης URL
4. Κάντε commit και push όταν είστε έτοιμοι

> 💡 **Συμβουλή**: Προσθέστε σελιδοδείκτη στη διεύθυνση URL του backend του Codespace κατά την ανάπτυξη. Εφόσον τα ονόματα του Codespace είναι σταθερά, η διεύθυνση URL δεν θα αλλάξει όσο χρησιμοποιείτε το ίδιο Codespace.

## Δημιουργία της Διεπαφής Συνομιλίας Frontend: Όπου οι Άνθρωποι Συναντούν την AI

Τώρα θα δημιουργήσουμε τη διεπαφή χρήστη – το μέρος που καθορίζει πώς οι άνθρωποι αλληλεπιδρούν με τον βοηθό AI σας. Όπως ο σχεδιασμός της αρχικής διεπαφής του iPhone, επικεντρωνόμαστε στο να κάνουμε την πολύπλοκη τεχνολογία να φαίνεται διαισθητική και φυσική στη χρήση.

### Κατανόηση της Σύγχρονης Αρχιτεκτονικής Frontend

Η διεπαφή συνομιλίας μας θα είναι αυτό που ονομάζουμε "Εφαρμογή Μίας Σελίδας" ή SPA. Αντί για την παλιά προσέγγιση όπου κάθε κλικ φορτώνει μια νέα σελίδα, η εφαρμογή μας ενημερώνεται ομαλά και άμεσα:

**Παλιά ιστοσελίδες**: Σαν να διαβάζετε ένα φυσικό βιβλίο – γυρίζετε σε εντελώς νέες σελίδες
**Η εφαρμογή συνομιλίας μας**: Σαν να χρησιμοποιείτε το τηλέφωνό σας – όλα ρέουν και ενημερώνονται ομαλά

```mermaid
graph TD
    A[User Types Message] --> B[JavaScript Captures Input]
    B --> C[Validate & Format Data]
    C --> D[Send to Backend API]
    D --> E[Display Loading State]
    E --> F[Receive AI Response]
    F --> G[Update Chat Interface]
    G --> H[Ready for Next Message]
```

### Οι Τρεις Πυλώνες της Ανάπτυξης Frontend

Κάθε εφαρμογή frontend – από απλές ιστοσελίδες έως σύνθετες εφαρμογές όπως το Discord ή το Slack – βασίζεται σε τρεις βασικές τεχνολογίες. Σκεφτείτε τις ως τη βάση για όλα όσα βλέπετε και αλληλεπιδράτε στον ιστό:

**HTML (Δομή)**: Αυτή είναι η βάση σας
- Καθορίζει ποια στοιχεία υπάρχουν (κουμπιά, πεδία κειμένου, κοντέινερ)
- Δίνει νόημα στο περιεχόμενο (αυτό είναι ένας τίτλος, αυτό είναι μια φόρμα, κ.λπ.)
- Δημιουργεί τη βασική δομή πάνω στην οποία χτίζονται όλα τα υπόλοιπα

**CSS (Παρουσίαση)**: Αυτός είναι ο εσωτερικός σας σχεδιαστής
- Κάνει τα πάντα να φαίνονται όμορφα (χρώματα, γραμματοσειρές, διατάξεις)
- Διαχειρίζεται διαφορετικά μεγέθη οθόνης (τηλέφωνο vs laptop vs tablet)
- Δημιουργεί ομαλές κινήσεις και οπτική ανατροφοδότηση

**JavaScript (Συμπεριφορά)**: Αυτός είναι ο εγκέφαλός σας
- Ανταποκρίνεται σε ό,τι κάνουν οι χρήστες (κλικ, πληκτρολόγηση, κύλιση)
- Επικοινωνεί με το backend και ενημερώνει τη σελίδα
- Κάνει τα πάντα διαδραστικά και δυναμικά

**Σκεφτείτε το σαν αρχιτεκτονικό σχεδιασμό:**
- **HTML**: Το δομικό σχέδιο (καθορισμός χώρων και σχέσεων)
- **CSS**: Ο αισθητικός και περιβαλλοντικός σχεδιασμός (οπτικό στυλ και εμπειρία χρήστη)
- **JavaScript**: Τα μηχανικά συστήματα (λειτουργικότητα και διαδραστικότητα)

### Γιατί Η Σύγχρονη Αρχιτεκτονική JavaScript Έχει Σημασία

Η εφαρμογή συνομιλίας μας θα χρησιμοποιεί σύγχρονα πρότυπα JavaScript που θα δείτε σε επαγγελματικές εφαρμογές. Η κατανόηση αυτών των εννοιών θα σας βοηθήσει καθώς εξελίσσεστε ως προγραμματιστής:

**Αρχιτεκτονική Βασισμένη σε Κλάσεις**: Θα οργανώσουμε τον κώδικα μας σε κλάσεις, που είναι σαν να δημιουργούμε σχέδια για αντικείμενα
**Async/Await**: Σύγχρονος τρόπος χειρισμού λειτουργιών που απαιτούν χρόνο (όπως κλήσεις API)
**Προγραμματισμός Βασισμένος σε Γεγονότα**: Η εφαρμογή μας ανταποκρίνεται στις ενέργειες των χρηστών (κλικ, πληκτρολόγηση) αντί να λειτουργεί σε βρόχο
**Διαχείριση DOM**: Δυναμική ενημέρωση του περιεχομένου της ιστοσελίδας βάσει αλληλεπιδράσεων χρηστών και απαντήσεων API

### Ρύθμιση Δομής Έργου

Δημιουργήστε έναν φάκελο frontend με αυτήν την οργανωμένη δομή:

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**Κατανόηση της αρχιτεκτονικής:**
- **Διαχωρίζει** τις ανησυχίες μεταξύ δομής (HTML), συμπεριφοράς (JavaScript) και παρουσίασης (CSS)
- **Διατηρεί** μια απλή δομή αρχείων που είναι εύκολη στην πλοήγηση και τροποποίηση
- **Ακολουθεί** βέλτιστες πρακτικές ανάπτυξης ιστού για οργάνωση και συντηρησιμότητα

### Δημιουργία της Βάσης HTML: Σημασιολογική Δομή για Προσβασιμότητα

Ας ξεκινήσουμε με τη δομή HTML. Η σύγχρονη ανάπτυξη ιστού δίνει έμφαση στη "σημασιολογική HTML" – τη χρήση στοιχείων HTML που περιγράφουν σαφώς τον σκοπό τους, όχι μόνο την εμφάνισή τους. Αυτό κάνει την εφαρμογή σας προσβάσιμη σε αναγνώστες οθόνης, μηχανές αναζήτησης και άλλα εργαλεία.

**Γιατί έχει σημασία η σημασιολογική HTML**: Φανταστείτε να περιγράφετε την εφαρμογή συνομιλίας σας σε κάποιον μέσω τηλεφώνου. Θα λέγατε "υπάρχει μια κεφαλίδα με τον τίτλο, μια κύρια περιοχή όπου εμφανίζονται οι συνομιλίες και μια φόρμα στο κάτω μέρος για την πληκτρολόγηση μηνυμάτων." Η σημασιολογική HTML χρησιμοποιεί στοιχεία που ταιριάζουν με αυτήν τη φυσική περιγραφή.

Δημιουργήστε το `index.html` με αυτήν τη προσεκτικά δομημένη σήμανση:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Chat Assistant</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="chat-container">
        <header class="chat-header">
            <h1>AI Chat Assistant</h1>
            <p>Ask me anything!</p>
        </header>
        
        <main class="chat-messages" id="messages" role="log" aria-live="polite">
            <!-- Messages will be dynamically added here -->
        </main>
        
        <form class="chat-form" id="chatForm">
            <div class="input-group">
                <input 
                    type="text" 
                    id="messageInput" 
                    placeholder="Type your message here..." 
                    required
                    aria-label="Chat message input"
                >
                <button type="submit" id="sendBtn" aria-label="Send message">
                    Send
                </button>
            </div>
        </form>
    </div>
    <script src="app.js"></script>
</body>
</html>
```

**Κατανόηση κάθε στοιχείου HTML και του σκοπού του:**

#### Δομή Εγγράφου
- **`<!DOCTYPE html>`**: Ενημερώνει το πρόγραμμα περιήγησης ότι πρόκειται για σύγχρονη HTML5
- **`<html lang="en">`**: Καθορίζει τη γλώσσα της σελίδας για αναγνώστες οθόνης και εργαλεία μετάφρασης
- **`<meta charset="UTF-8">`**: Εξασφαλίζει σωστή κωδικοποίηση χαρακτήρων για διεθνές κείμενο
- **`<meta name="viewport"...>`**: Κάνει τη σελίδα φιλική προς κινητά ελέγχοντας το ζουμ και την κλίμακα

#### Σημασιολογικά Στοιχεία
- **`<header>`**: Καθορίζει σαφώς την κορυφαία ενότητα με τίτλο και περιγραφή
- **`<main>`**: Ορίζει την κύρια περιοχή περιεχομένου (όπου συμβαίνουν οι συνομιλίες)
- **`<form>`**: Σημασιολογικά σωστό για εισαγωγή χρήστη, επιτρέπει σωστή πλοήγηση με πληκτρολόγιο

#### Χαρακτηριστικά Προσβασιμότητας
- **`role="log"`**: Ενημερώνει τους αναγνώστες οθόνης ότι αυτή η περιοχή περιέχει χρονολογικό αρχείο μηνυμάτων
- **`aria-live="polite"`**: Ανακοινώνει νέα μηνύματα στους αναγνώστες οθόνης χωρίς να διακόπτει
- **`aria-label`**: Παρέχει περιγραφικές ετικέτες για στοιχεία φόρμας
- **`required`**: Το πρόγραμμα περιήγησης επικυρώνει ότι οι χρήστες εισάγουν μήνυμα πριν το στείλουν

#### Ενσωμάτωση CSS και JavaScript
- **`class` attributes**: Παρέχουν σημεία στυλ για CSS (π.χ., `chat-container`, `input-group`)
- **`id` attributes**: Επιτρέπουν στη JavaScript να βρίσκει και να χειρίζεται συγκεκριμένα στοιχεία
- **Τοποθέτηση Script**: Το αρχείο JavaScript φορτώνεται στο τέλος ώστε να φορτωθεί πρώτα η HTML

**Γιατί αυτή η δομή λειτουργεί:**
- **Λογική ροή**: Κεφαλίδα → Κύριο περιεχόμενο → Φόρμα εισαγωγής ταιριάζει με τη φυσική σειρά ανάγνωσης
- **Προσβάσιμο με πληκτρολόγιο**: Οι χρήστες μπορούν να μετακινηθούν σε όλα τα διαδραστικά στοιχεία
- **Φιλικό προς τους αναγνώστες οθόνης**:
Αυτή η αρχιτεκτονική είναι επεκτάσιμη – μπορείτε εύκολα να προσθέσετε λειτουργίες όπως επεξεργασία μηνυμάτων, μεταφορτώσεις αρχείων ή πολλαπλά νήματα συνομιλίας χωρίς να χρειαστεί να ξαναγράψετε τη βασική δομή.

### Σχεδιασμός της Διεπαφής Συνομιλίας σας

Ας δημιουργήσουμε τώρα μια σύγχρονη, οπτικά ελκυστική διεπαφή συνομιλίας με CSS. Ο καλός σχεδιασμός κάνει την εφαρμογή σας να φαίνεται επαγγελματική και βελτιώνει τη συνολική εμπειρία χρήστη. Θα χρησιμοποιήσουμε σύγχρονες δυνατότητες CSS όπως το Flexbox, το CSS Grid και προσαρμοσμένες ιδιότητες για έναν ευέλικτο, προσβάσιμο σχεδιασμό.

Δημιουργήστε το `styles.css` με αυτά τα ολοκληρωμένα στυλ:

```css
/* styles.css - Modern chat interface styling */

:root {
    --primary-color: #2563eb;
    --secondary-color: #f1f5f9;
    --user-color: #3b82f6;
    --assistant-color: #6b7280;
    --error-color: #ef4444;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --border-radius: 12px;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.chat-container {
    width: 100%;
    max-width: 800px;
    height: 600px;
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.chat-header {
    background: var(--primary-color);
    color: white;
    padding: 20px;
    text-align: center;
}

.chat-header h1 {
    font-size: 1.5rem;
    margin-bottom: 5px;
}

.chat-header p {
    opacity: 0.9;
    font-size: 0.9rem;
}

.chat-messages {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    background: var(--secondary-color);
}

.message {
    display: flex;
    max-width: 80%;
    animation: slideIn 0.3s ease-out;
}

.message.user {
    align-self: flex-end;
}

.message.user .message-content {
    background: var(--user-color);
    color: white;
    border-radius: var(--border-radius) var(--border-radius) 4px var(--border-radius);
}

.message.assistant {
    align-self: flex-start;
}

.message.assistant .message-content {
    background: white;
    color: var(--text-primary);
    border-radius: var(--border-radius) var(--border-radius) var(--border-radius) 4px;
    border: 1px solid #e2e8f0;
}

.message.error .message-content {
    background: var(--error-color);
    color: white;
    border-radius: var(--border-radius);
}

.message-content {
    padding: 12px 16px;
    box-shadow: var(--shadow);
    position: relative;
}

.message-text {
    display: block;
    line-height: 1.5;
    word-wrap: break-word;
}

.message-time {
    display: block;
    font-size: 0.75rem;
    opacity: 0.7;
    margin-top: 5px;
}

.chat-form {
    padding: 20px;
    border-top: 1px solid #e2e8f0;
    background: white;
}

.input-group {
    display: flex;
    gap: 10px;
    align-items: center;
}

#messageInput {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: var(--border-radius);
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;
}

#messageInput:focus {
    border-color: var(--primary-color);
}

#messageInput:disabled {
    background: #f8fafc;
    opacity: 0.6;
    cursor: not-allowed;
}

#sendBtn {
    padding: 12px 24px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: var(--border-radius);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
    min-width: 80px;
}

#sendBtn:hover:not(:disabled) {
    background: #1d4ed8;
}

#sendBtn:disabled {
    background: #94a3b8;
    cursor: not-allowed;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Responsive design for mobile devices */
@media (max-width: 768px) {
    body {
        padding: 10px;
    }
    
    .chat-container {
        height: calc(100vh - 20px);
        border-radius: 8px;
    }
    
    .message {
        max-width: 90%;
    }
    
    .input-group {
        flex-direction: column;
        gap: 10px;
    }
    
    #messageInput {
        width: 100%;
    }
    
    #sendBtn {
        width: 100%;
    }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
    .message {
        animation: none;
    }
    
    * {
        transition: none !important;
    }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .chat-container {
        background: #1e293b;
        color: #f1f5f9;
    }
    
    .chat-messages {
        background: #0f172a;
    }
    
    .message.assistant .message-content {
        background: #334155;
        color: #f1f5f9;
        border-color: #475569;
    }
    
    .chat-form {
        background: #1e293b;
        border-color: #475569;
    }
    
    #messageInput {
        background: #334155;
        color: #f1f5f9;
        border-color: #475569;
    }
}
```

**Κατανόηση της αρχιτεκτονικής CSS:**
- **Χρησιμοποιεί** προσαρμοσμένες ιδιότητες CSS (μεταβλητές) για συνεπή θεματοποίηση και εύκολη συντήρηση
- **Εφαρμόζει** διάταξη Flexbox για ευέλικτο σχεδιασμό και σωστή ευθυγράμμιση
- **Περιλαμβάνει** ομαλές κινήσεις για την εμφάνιση μηνυμάτων χωρίς να είναι ενοχλητικές
- **Παρέχει** οπτική διάκριση μεταξύ μηνυμάτων χρηστών, απαντήσεων AI και καταστάσεων σφάλματος
- **Υποστηρίζει** ευέλικτο σχεδιασμό που λειτουργεί τόσο σε επιτραπέζιους υπολογιστές όσο και σε κινητές συσκευές
- **Λαμβάνει υπόψη** την προσβασιμότητα με προτιμήσεις μειωμένης κίνησης και σωστούς λόγους αντίθεσης
- **Προσφέρει** υποστήριξη για σκοτεινή λειτουργία βάσει των προτιμήσεων του συστήματος του χρήστη

### Ρύθμιση της Διεύθυνσης URL του Backend σας

Το τελευταίο βήμα είναι η ενημέρωση του `BASE_URL` στο JavaScript σας ώστε να ταιριάζει με τον διακομιστή backend σας:

```javascript
// For local development
this.BASE_URL = "http://localhost:5000";

// For GitHub Codespaces (replace with your actual URL)
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**Προσδιορισμός της διεύθυνσης URL του backend σας:**
- **Τοπική ανάπτυξη**: Χρησιμοποιήστε το `http://localhost:5000` αν εκτελείτε το frontend και το backend τοπικά
- **Codespaces**: Βρείτε τη διεύθυνση URL του backend σας στην καρτέλα Ports αφού κάνετε δημόσια την θύρα 5000
- **Παραγωγή**: Αντικαταστήστε με τον πραγματικό σας τομέα κατά την ανάπτυξη σε μια υπηρεσία φιλοξενίας

> 💡 **Συμβουλή Δοκιμής**: Μπορείτε να δοκιμάσετε το backend σας απευθείας επισκεπτόμενοι τη ρίζα URL στον περιηγητή σας. Θα πρέπει να δείτε το μήνυμα καλωσορίσματος από τον διακομιστή FastAPI σας.

## Δοκιμή και Ανάπτυξη

Τώρα που έχετε δημιουργήσει τα στοιχεία του frontend και του backend, ας δοκιμάσουμε αν όλα λειτουργούν μαζί και ας εξερευνήσουμε επιλογές ανάπτυξης για να μοιραστείτε τον βοηθό συνομιλίας σας με άλλους.

### Τοπική Ροή Εργασίας Δοκιμής

Ακολουθήστε αυτά τα βήματα για να δοκιμάσετε την πλήρη εφαρμογή σας:

```mermaid
graph TD
    A[Start Backend Server] --> B[Configure Environment Variables]
    B --> C[Test API Endpoints]
    C --> D[Open Frontend in Browser]
    D --> E[Test Chat Functionality]
    E --> F[Debug Any Issues]
```

**Διαδικασία δοκιμής βήμα προς βήμα:**

1. **Ξεκινήστε τον διακομιστή backend σας**:
   ```bash
   cd backend
   source venv/bin/activate  # or venv\Scripts\activate on Windows
   python api.py
   ```

2. **Επαληθεύστε ότι το API λειτουργεί**:
   - Ανοίξτε το `http://localhost:5000` στον περιηγητή σας
   - Θα πρέπει να δείτε το μήνυμα καλωσορίσματος από τον διακομιστή FastAPI σας

3. **Ανοίξτε το frontend σας**:
   - Μεταβείτε στον φάκελο του frontend σας
   - Ανοίξτε το `index.html` στον περιηγητή σας
   - Ή χρησιμοποιήστε την επέκταση Live Server του VS Code για καλύτερη εμπειρία ανάπτυξης

4. **Δοκιμάστε τη λειτουργικότητα της συνομιλίας**:
   - Πληκτρολογήστε ένα μήνυμα στο πεδίο εισαγωγής
   - Κάντε κλικ στο "Αποστολή" ή πατήστε Enter
   - Επαληθεύστε ότι το AI απαντά σωστά
   - Ελέγξτε την κονσόλα του περιηγητή για τυχόν σφάλματα JavaScript

### Επίλυση Συνηθισμένων Προβλημάτων

| Πρόβλημα | Συμπτώματα | Λύση |
|----------|------------|------|
| **Σφάλμα CORS** | Το frontend δεν μπορεί να φτάσει στο backend | Βεβαιωθείτε ότι το FastAPI CORSMiddleware έχει ρυθμιστεί σωστά |
| **Σφάλμα API Key** | Απαντήσεις 401 Unauthorized | Ελέγξτε τη μεταβλητή περιβάλλοντος `GITHUB_TOKEN` |
| **Απορριφθείσα Σύνδεση** | Σφάλματα δικτύου στο frontend | Επαληθεύστε τη διεύθυνση URL του backend και ότι ο διακομιστής Flask εκτελείται |
| **Καμία Απάντηση AI** | Κενές ή σφάλματα απαντήσεις | Ελέγξτε τα αρχεία καταγραφής του backend για θέματα ποσοστώσεων API ή αυθεντικοποίησης |

**Συνηθισμένα βήματα αποσφαλμάτωσης:**
- **Ελέγξτε** την κονσόλα Εργαλείων Προγραμματιστή του περιηγητή για σφάλματα JavaScript
- **Επαληθεύστε** ότι η καρτέλα Δικτύου δείχνει επιτυχημένα αιτήματα και απαντήσεις API
- **Ανασκοπήστε** την έξοδο του τερματικού του backend για σφάλματα Python ή θέματα API
- **Επιβεβαιώστε** ότι οι μεταβλητές περιβάλλοντος έχουν φορτωθεί σωστά και είναι προσβάσιμες

## Πρόκληση GitHub Copilot Agent 🚀

Χρησιμοποιήστε τη λειτουργία Agent για να ολοκληρώσετε την παρακάτω πρόκληση:

**Περιγραφή:** Βελτιώστε τον βοηθό συνομιλίας προσθέτοντας ιστορικό συνομιλιών και διατήρηση μηνυμάτων. Αυτή η πρόκληση θα σας βοηθήσει να κατανοήσετε πώς να διαχειρίζεστε την κατάσταση στις εφαρμογές συνομιλίας και να υλοποιείτε αποθήκευση δεδομένων για καλύτερη εμπειρία χρήστη.

**Προτροπή:** Τροποποιήστε την εφαρμογή συνομιλίας ώστε να περιλαμβάνει ιστορικό συνομιλιών που διατηρείται μεταξύ των συνεδριών. Προσθέστε λειτουργικότητα για αποθήκευση μηνυμάτων συνομιλίας στο τοπικό αποθηκευτικό χώρο, εμφάνιση ιστορικού συνομιλιών όταν φορτώνεται η σελίδα και περιλάβετε ένα κουμπί "Καθαρισμός Ιστορικού". Επίσης, υλοποιήστε δείκτες πληκτρολόγησης και χρονικές σφραγίδες μηνυμάτων για να κάνετε την εμπειρία συνομιλίας πιο ρεαλιστική.

Μάθετε περισσότερα για τη [λειτουργία agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) εδώ.

## Ανάθεση: Δημιουργήστε τον Προσωπικό σας Βοηθό AI

Τώρα θα δημιουργήσετε τη δική σας υλοποίηση βοηθού AI. Αντί να αντιγράψετε απλώς τον κώδικα του οδηγού, αυτή είναι μια ευκαιρία να εφαρμόσετε τις έννοιες ενώ δημιουργείτε κάτι που αντικατοπτρίζει τα δικά σας ενδιαφέροντα και χρήσεις.

### Απαιτήσεις Έργου

Ας ρυθμίσουμε το έργο σας με μια καθαρή, οργανωμένη δομή:

```text
my-ai-assistant/
├── backend/
│   ├── api.py          # Your FastAPI server
│   ├── llm.py          # AI integration functions
│   ├── .env            # Your secrets (keep this safe!)
│   └── requirements.txt # Python dependencies
├── frontend/
│   ├── index.html      # Your chat interface
│   ├── app.js          # The JavaScript magic
│   └── styles.css      # Make it look amazing
└── README.md           # Tell the world about your creation
```

### Βασικά Καθήκοντα Υλοποίησης

**Ανάπτυξη Backend:**
- **Προσαρμόστε** τον κώδικα FastAPI και κάντε τον δικό σας
- **Δημιουργήστε** μια μοναδική προσωπικότητα AI – ίσως έναν βοηθό μαγειρικής, έναν συνεργάτη δημιουργικής γραφής ή έναν βοηθό μελέτης;
- **Προσθέστε** αξιόπιστο χειρισμό σφαλμάτων ώστε η εφαρμογή σας να μην καταρρεύσει όταν κάτι πάει στραβά
- **Γράψτε** σαφή τεκμηρίωση για όποιον θέλει να κατανοήσει πώς λειτουργεί το API σας

**Ανάπτυξη Frontend:**
- **Δημιουργήστε** μια διεπαφή συνομιλίας που να είναι φιλική και ευχάριστη
- **Γράψτε** καθαρό, σύγχρονο JavaScript που θα είστε περήφανοι να δείξετε σε άλλους προγραμματιστές
- **Σχεδιάστε** προσαρμοσμένα στυλ που αντικατοπτρίζουν την προσωπικότητα του AI σας – διασκεδαστικά και πολύχρωμα; Καθαρά και μινιμαλιστικά; Εντελώς δική σας επιλογή!
- **Βεβαιωθείτε** ότι λειτουργεί άψογα τόσο σε κινητά όσο και σε υπολογιστές

**Απαιτήσεις Προσωποποίησης:**
- **Επιλέξτε** ένα μοναδικό όνομα και προσωπικότητα για τον βοηθό AI σας – ίσως κάτι που αντικατοπτρίζει τα ενδιαφέροντά σας ή τα προβλήματα που θέλετε να λύσετε
- **Προσαρμόστε** τον οπτικό σχεδιασμό ώστε να ταιριάζει με το στυλ του βοηθού σας
- **Γράψτε** ένα ελκυστικό μήνυμα καλωσορίσματος που θα κάνει τους χρήστες να θέλουν να ξεκινήσουν τη συνομιλία
- **Δοκιμάστε** τον βοηθό σας με διαφορετικούς τύπους ερωτήσεων για να δείτε πώς ανταποκρίνεται

### Ιδέες Βελτίωσης (Προαιρετικά)

Θέλετε να πάτε το έργο σας στο επόμενο επίπεδο; Εξερευνήστε αυτές τις ενδιαφέρουσες ιδέες:

| Λειτουργία | Περιγραφή | Δεξιότητες που θα εξασκήσετε |
|------------|-----------|-----------------------------|
| **Ιστορικό Μηνυμάτων** | Διατήρηση συνομιλιών ακόμα και μετά την ανανέωση της σελίδας | Χρήση localStorage, χειρισμός JSON |
| **Δείκτες Πληκτρολόγησης** | Εμφάνιση "Το AI πληκτρολογεί..." ενώ περιμένετε απαντήσεις | Κινήσεις CSS, ασύγχρονος προγραμματισμός |
| **Χρονικές Σφραγίδες Μηνυμάτων** | Εμφάνιση της ώρας αποστολής κάθε μηνύματος | Μορφοποίηση ημερομηνίας/ώρας, σχεδιασμός UX |
| **Εξαγωγή Συνομιλίας** | Επιτρέψτε στους χρήστες να κατεβάσουν τη συνομιλία τους | Χειρισμός αρχείων, εξαγωγή δεδομένων |
| **Εναλλαγή Θέματος** | Εναλλαγή μεταξύ φωτεινής και σκοτεινής λειτουργίας | Μεταβλητές CSS, προτιμήσεις χρήστη |
| **Φωνητική Εισαγωγή** | Προσθέστε λειτουργία μετατροπής ομιλίας σε κείμενο | Web APIs, προσβασιμότητα |

### Δοκιμή και Τεκμηρίωση

**Διασφάλιση Ποιότητας:**
- **Δοκιμάστε** την εφαρμογή σας με διάφορους τύπους εισόδου και ακραίες περιπτώσεις
- **Επαληθεύστε** ότι ο ευέλικτος σχεδιασμός λειτουργεί σε διαφορετικά μεγέθη οθόνης
- **Ελέγξτε** την προσβασιμότητα με πλοήγηση μέσω πληκτρολογίου και αναγνώστες οθόνης
- **Επικυρώστε** το HTML και το CSS για συμμόρφωση με τα πρότυπα

**Απαιτήσεις Τεκμηρίωσης:**
- **Γράψτε** ένα README.md που εξηγεί το έργο σας και πώς να το εκτελέσετε
- **Περιλάβετε** στιγμιότυπα οθόνης της διεπαφής συνομιλίας σας σε δράση
- **Τεκμηριώστε** οποιαδήποτε μοναδικά χαρακτηριστικά ή προσαρμογές που προσθέσατε
- **Παρέχετε** σαφείς οδηγίες εγκατάστασης για άλλους προγραμματιστές

### Οδηγίες Υποβολής

**Παραδοτέα Έργου:**
1. Πλήρης φάκελος έργου με όλο τον πηγαίο κώδικα
2. README.md με περιγραφή έργου και οδηγίες εγκατάστασης
3. Στιγμιότυπα οθόνης που δείχνουν τον βοηθό συνομιλίας σας σε δράση
4. Σύντομη ανασκόπηση για το τι μάθατε και ποιες προκλήσεις αντιμετωπίσατε

**Κριτήρια Αξιολόγησης:**
- **Λειτουργικότητα**: Λειτουργεί ο βοηθός συνομιλίας όπως αναμένεται;
- **Ποιότητα Κώδικα**: Είναι ο κώδικας καλά οργανωμένος, σχολιασμένος και συντηρήσιμος;
- **Σχεδιασμός**: Είναι η διεπαφή οπτικά ελκυστική και φιλική προς τον χρήστη;
- **Δημιουργικότητα**: Πόσο μοναδική και εξατομικευμένη είναι η υλοποίησή σας;
- **Τεκμηρίωση**: Είναι οι οδηγίες εγκατάστασης σαφείς και πλήρεις;

> 💡 **Συμβουλή Επιτυχίας**: Ξεκινήστε πρώτα με τις βασικές απαιτήσεις και στη συνέχεια προσθέστε βελτιώσεις μόλις όλα λειτουργούν. Εστιάστε στη δημιουργία μιας ολοκληρωμένης βασικής εμπειρίας πριν προσθέσετε προηγμένες λειτουργίες.

## Λύση

[Λύση](./solution/README.md)

## Πρόσθετες Προκλήσεις

Έτοιμοι να πάτε τον βοηθό AI σας στο επόμενο επίπεδο; Δοκιμάστε αυτές τις προηγμένες προκλήσεις που θα εμβαθύνουν την κατανόησή σας για την ενσωμάτωση AI και την ανάπτυξη ιστού.

### Προσαρμογή Προσωπικότητας

Η πραγματική μαγεία συμβαίνει όταν δίνετε στον βοηθό AI σας μια μοναδική προσωπικότητα. Πειραματιστείτε με διαφορετικές προτροπές συστήματος για να δημιουργήσετε εξειδικευμένους βοηθούς:

**Παράδειγμα Επαγγελματικού Βοηθού:**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**Παράδειγμα Βοηθού Δημιουργικής Γραφής:**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**Παράδειγμα Τεχνικού Μέντορα:**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### Βελτιώσεις Frontend

Μεταμορφώστε τη διεπαφή συνομιλίας σας με αυτές τις οπτικές και λειτουργικές βελτιώσεις:

**Προηγμένες Δυνατότητες CSS:**
- **Υλοποιήστε** ομαλές κινήσεις και μεταβάσεις μηνυμάτων
- **Προσθέστε** προσαρμοσμένα σχέδια φυσαλίδων συνομιλίας με σχήματα και διαβαθμίσεις CSS
- **Δημιουργήστε** μια κίνηση δείκτη πληκτρολόγησης για όταν το AI "σκέφτεται"
- **Σχεδιάστε** αντιδράσεις emoji ή σύστημα αξιολόγησης μηνυμάτων

**Βελτιώσεις JavaScript:**
- **Προσθέστε** συντομεύσεις πληκτρολογίου (Ctrl+Enter για αποστολή, Escape για εκκαθάριση εισόδου)
- **Υλοποιήστε** λειτουργικότητα αναζήτησης και φιλτραρίσματος μηνυμάτων
- **Δημιουργήστε** δυνατότητα εξαγωγής συνομιλίας (λήψη ως κείμενο ή JSON)
- **Προσθέστε** αυτόματη αποθήκευση στο localStorage για να αποτρέψετε την απώλεια μηνυμάτων

### Προηγμένη Ενσωμάτωση AI

**Πολλαπλές Προσωπικότητες AI:**
- **Δημιουργήστε** ένα αναπτυσσόμενο μενού για εναλλαγή μεταξύ διαφορετικών προσωπικοτήτων AI
- **Αποθηκεύστε** την προτιμώμενη προσωπικότητα του χρήστη στο localStorage
- **Υλοποιήστε** εναλλαγή περιεχομένου που διατηρεί τη ροή της συνομιλίας
- **Προώθηση θυρών** για δοκιμή των εφαρμογών σας

**Τι παρέχει το Codespaces:**
- **Εξαλείφει** προβλήματα ρύθμισης και διαμόρφωσης του τοπικού περιβάλλοντος
- **Παρέχει** συνεπές περιβάλλον ανάπτυξης σε διαφορετικές συσκευές
- **Περιλαμβάνει** προρυθμισμένα εργαλεία και επεκτάσεις για ανάπτυξη ιστού
- **Προσφέρει** απρόσκοπτη ενσωμάτωση με το GitHub για έλεγχο εκδόσεων και συνεργασία

> 🚀 **Συμβουλή Ειδικού**: Το Codespaces είναι ιδανικό για εκμάθηση και πρωτότυπη ανάπτυξη εφαρμογών AI, καθώς διαχειρίζεται αυτόματα όλη τη σύνθετη ρύθμιση του περιβάλλοντος, επιτρέποντάς σας να εστιάσετε στη δημιουργία και την εκμάθηση αντί για την αντιμετώπιση προβλημάτων διαμόρφωσης.

---

**Αποποίηση ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία μετάφρασης AI [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε προσπάθειες για ακρίβεια, παρακαλούμε να έχετε υπόψη ότι οι αυτοματοποιημένες μεταφράσεις ενδέχεται να περιέχουν λάθη ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.