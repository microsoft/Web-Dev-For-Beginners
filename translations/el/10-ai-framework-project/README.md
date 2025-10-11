<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "5fe046e7729ae6a24c717884bf875917",
  "translation_date": "2025-10-11T14:26:10+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "el"
}
-->
# Πλαίσιο AI

Υπάρχουν πολλά πλαίσια AI που μπορούν να επιταχύνουν σημαντικά τον χρόνο που χρειάζεται για να δημιουργηθεί ένα έργο. Σε αυτό το έργο θα επικεντρωθούμε στην κατανόηση των προβλημάτων που αντιμετωπίζουν αυτά τα πλαίσια και θα δημιουργήσουμε ένα τέτοιο έργο μόνοι μας.

## Γιατί να χρησιμοποιήσουμε ένα πλαίσιο

Όταν πρόκειται για τη χρήση AI, υπάρχουν διαφορετικές προσεγγίσεις και διαφορετικοί λόγοι για την επιλογή αυτών των προσεγγίσεων. Ακολουθούν μερικοί:

- **Χωρίς SDK**. Τα περισσότερα μοντέλα AI σας επιτρέπουν να αλληλεπιδράσετε απευθείας με το μοντέλο μέσω, για παράδειγμα, αιτημάτων HTTP. Αυτή η προσέγγιση λειτουργεί και μπορεί μερικές φορές να είναι η μόνη σας επιλογή αν δεν υπάρχει διαθέσιμη επιλογή SDK.
- **SDK**. Η χρήση ενός SDK είναι συνήθως η προτεινόμενη προσέγγιση, καθώς σας επιτρέπει να γράψετε λιγότερο κώδικα για να αλληλεπιδράσετε με το μοντέλο σας. Συνήθως περιορίζεται σε ένα συγκεκριμένο μοντέλο και αν χρησιμοποιείτε διαφορετικά μοντέλα, μπορεί να χρειαστεί να γράψετε νέο κώδικα για να υποστηρίξετε αυτά τα πρόσθετα μοντέλα.
- **Πλαίσιο**. Ένα πλαίσιο συνήθως ανεβάζει τα πράγματα σε άλλο επίπεδο, με την έννοια ότι αν χρειαστεί να χρησιμοποιήσετε διαφορετικά μοντέλα, υπάρχει ένα API για όλα αυτά, και αυτό που διαφέρει είναι συνήθως η αρχική ρύθμιση. Επιπλέον, τα πλαίσια φέρνουν χρήσιμες αφαιρέσεις, όπως στον χώρο του AI, μπορούν να χειριστούν εργαλεία, μνήμη, ροές εργασίας, πράκτορες και άλλα, ενώ γράφετε λιγότερο κώδικα. Επειδή τα πλαίσια είναι συνήθως προσανατολισμένα σε συγκεκριμένες απόψεις, μπορούν να είναι πραγματικά χρήσιμα αν συμφωνείτε με τον τρόπο που λειτουργούν, αλλά μπορεί να μην ανταποκριθούν αν προσπαθήσετε να κάνετε κάτι εξατομικευμένο που δεν είναι φτιαγμένο για το πλαίσιο. Μερικές φορές ένα πλαίσιο μπορεί επίσης να απλοποιήσει υπερβολικά τα πράγματα και μπορεί να μην μάθετε ένα σημαντικό θέμα που αργότερα μπορεί να επηρεάσει την απόδοση, για παράδειγμα.

Γενικά, χρησιμοποιήστε το κατάλληλο εργαλείο για τη δουλειά.

## Εισαγωγή

Σε αυτό το μάθημα, θα μάθουμε να:

- Χρησιμοποιούμε ένα κοινό πλαίσιο AI.
- Αντιμετωπίζουμε κοινά προβλήματα όπως συνομιλίες, χρήση εργαλείων, μνήμη και πλαίσιο.
- Αξιοποιούμε αυτά για να δημιουργήσουμε εφαρμογές AI.

## Πρώτο ερώτημα

Στο πρώτο μας παράδειγμα εφαρμογής, θα μάθουμε πώς να συνδεθούμε με ένα μοντέλο AI και να το ερωτήσουμε χρησιμοποιώντας ένα ερώτημα.

### Χρησιμοποιώντας Python

Για αυτό το παράδειγμα, θα χρησιμοποιήσουμε το Langchain για να συνδεθούμε με τα μοντέλα του GitHub. Μπορούμε να χρησιμοποιήσουμε μια κλάση που ονομάζεται `ChatOpenAI` και να της δώσουμε τα πεδία `api_key`, `base_url` και `model`. Το token είναι κάτι που αυτόματα συμπληρώνεται μέσα στο GitHub Codespaces και αν εκτελείτε την εφαρμογή τοπικά, πρέπει να ρυθμίσετε ένα προσωπικό token πρόσβασης για να λειτουργήσει αυτό.

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

# works
response  = llm.invoke("What's the capital of France?")
print(response.content)
```

Σε αυτόν τον κώδικα:

- Καλούμε το `ChatOpenAI` για να δημιουργήσουμε έναν πελάτη.
- Χρησιμοποιούμε το `llm.invoke` με ένα ερώτημα για να δημιουργήσουμε μια απάντηση.
- Εκτυπώνουμε την απάντηση με το `print(response.content)`.

Θα πρέπει να δείτε μια απάντηση παρόμοια με:

```text
The capital of France is Paris.
```

## Συνομιλία

Στην προηγούμενη ενότητα, είδατε πώς χρησιμοποιήσαμε αυτό που συνήθως είναι γνωστό ως zero shot prompting, ένα μόνο ερώτημα ακολουθούμενο από μια απάντηση.

Ωστόσο, συχνά βρίσκεστε σε μια κατάσταση όπου πρέπει να διατηρήσετε μια συνομιλία με αρκετά μηνύματα που ανταλλάσσονται μεταξύ εσάς και του βοηθού AI.

### Χρησιμοποιώντας Python

Στο Langchain, μπορούμε να αποθηκεύσουμε τη συνομιλία σε μια λίστα. Το `HumanMessage` αντιπροσωπεύει ένα μήνυμα από έναν χρήστη, και το `SystemMessage` είναι ένα μήνυμα που προορίζεται να ορίσει την "προσωπικότητα" του AI. Στο παρακάτω παράδειγμα, βλέπετε πώς δίνουμε οδηγίες στο AI να υποθέσει την προσωπικότητα του Captain Picard και για τον άνθρωπο/χρήστη να ρωτήσει "Πες μου για εσένα" ως ερώτημα.

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

Ο πλήρης κώδικας για αυτό το παράδειγμα μοιάζει ως εξής:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)
print(response.content)
```

Θα πρέπει να δείτε ένα αποτέλεσμα παρόμοιο με:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Για να διατηρήσετε την κατάσταση της συνομιλίας, μπορείτε να προσθέσετε την απάντηση από μια συνομιλία, ώστε η συνομιλία να θυμάται, δείτε πώς να το κάνετε αυτό:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]


# works
response  = llm.invoke(messages)

print(response.content)

print("---- Next ----")

messages.append(response)
messages.append(HumanMessage(content="Now that I know about you, I'm Chris, can I be in your crew?"))

response  = llm.invoke(messages)

print(response.content)

```

Αυτό που βλέπουμε από την παραπάνω συνομιλία είναι πώς καλούμε το LLM δύο φορές, πρώτα με τη συνομιλία που αποτελείται από μόλις δύο μηνύματα, αλλά στη συνέχεια μια δεύτερη φορά με περισσότερα μηνύματα προστιθέμενα στη συνομιλία.

Στην πραγματικότητα, αν εκτελέσετε αυτό, θα δείτε τη δεύτερη απάντηση να είναι κάτι σαν:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

Θα το πάρω ως ίσως ;)

## Ροές απαντήσεων

TODO

## Πρότυπα ερωτημάτων

TODO

## Δομημένη έξοδος

TODO

## Κλήση εργαλείων

Τα εργαλεία είναι ο τρόπος με τον οποίο δίνουμε στο LLM επιπλέον δεξιότητες. Η ιδέα είναι να ενημερώσουμε το LLM για τις λειτουργίες που διαθέτει και αν γίνει ένα ερώτημα που ταιριάζει με την περιγραφή ενός από αυτά τα εργαλεία, τότε το καλούμε.

### Χρησιμοποιώντας Python

Ας προσθέσουμε μερικά εργαλεία όπως:

```python
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}
```

Αυτό που κάνουμε εδώ είναι να δημιουργήσουμε μια περιγραφή ενός εργαλείου που ονομάζεται `add`. Με την κληρονομιά από το `TypedDict` και την προσθήκη μελών όπως `a` και `b` τύπου `Annotated`, αυτό μπορεί να μετατραπεί σε ένα σχήμα που το LLM μπορεί να κατανοήσει. Η δημιουργία λειτουργιών είναι ένα λεξικό που διασφαλίζει ότι γνωρίζουμε τι να κάνουμε αν εντοπιστεί ένα συγκεκριμένο εργαλείο.

Ας δούμε πώς καλούμε το LLM με αυτό το εργαλείο στη συνέχεια:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Εδώ καλούμε το `bind_tools` με τον πίνακα `tools` μας και έτσι το LLM `llm_with_tools` τώρα έχει γνώση αυτού του εργαλείου.

Για να χρησιμοποιήσουμε αυτό το νέο LLM, μπορούμε να πληκτρολογήσουμε τον ακόλουθο κώδικα:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Τώρα που καλούμε το `invoke` σε αυτό το νέο LLM, που έχει εργαλεία, ίσως η ιδιότητα `tool_calls` να είναι συμπληρωμένη. Αν ναι, οποιαδήποτε εντοπισμένα εργαλεία έχουν μια ιδιότητα `name` και `args` που προσδιορίζει ποιο εργαλείο πρέπει να καλείται και με ποια επιχειρήματα. Ο πλήρης κώδικας μοιάζει ως εξής:

```python
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_openai import ChatOpenAI
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

tools = [add]

functions = {
    "add": lambda a, b: a + b
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Εκτελώντας αυτόν τον κώδικα, θα πρέπει να δείτε μια έξοδο παρόμοια με:

```text
TOOL CALL:  15
CONTENT: 
```

Αυτό που σημαίνει αυτή η έξοδος είναι ότι το LLM ανέλυσε το ερώτημα "Ποιο είναι το 3 + 12" ως να σημαίνει ότι το εργαλείο `add` πρέπει να καλείται και το γνώριζε χάρη στο όνομά του, την περιγραφή και τις περιγραφές των πεδίων μελών. Ότι η απάντηση είναι 15 οφείλεται στον κώδικά μας που χρησιμοποιεί το λεξικό `functions` για να το καλέσει:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Ένα πιο ενδιαφέρον εργαλείο που καλεί ένα web API

Τα εργαλεία που προσθέτουν δύο αριθμούς είναι ενδιαφέροντα καθώς δείχνουν πώς λειτουργεί η κλήση εργαλείων, αλλά συνήθως τα εργαλεία τείνουν να κάνουν κάτι πιο ενδιαφέρον, όπως για παράδειγμα να καλούν ένα Web API. Ας το κάνουμε αυτό με τον εξής κώδικα:

```python
class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

query = "Tell me a joke about animals"

# the rest of the code is the same
```

Τώρα αν εκτελέσετε αυτόν τον κώδικα, θα λάβετε μια απάντηση που λέει κάτι σαν:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

Εδώ είναι ο κώδικας στο σύνολό του:

```python
from langchain_openai import ChatOpenAI
import requests
import os
from typing_extensions import Annotated, TypedDict

class add(TypedDict):
    """Add two integers."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    a: Annotated[int, ..., "First integer"]
    b: Annotated[int, ..., "Second integer"]

class joke(TypedDict):
    """Tell a joke."""

    # Annotations must have the type and can optionally include a default value and description (in that order).
    category: Annotated[str, ..., "The joke category"]

tools = [add, joke]

def get_joke(category: str) -> str:
    response = requests.get(f"https://api.chucknorris.io/jokes/random?category={category}", headers={"Accept": "application/json"})
    if response.status_code == 200:
        return response.json().get("value", f"Here's a {category} joke!")
    return f"Here's a {category} joke!"

functions = {
    "add": lambda a, b: a + b,
    "joke": lambda category: get_joke(category)
}

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)

query = "Tell me a joke about animals"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        # print("TOOL CALL: ", tool)
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

## Ενσωμάτωση

Δημιουργία διανυσμάτων περιεχομένου, σύγκριση μέσω συσχέτισης συνημιτόνου

https://python.langchain.com/docs/how_to/embed_text/

### Φορτωτές εγγράφων

pdf και csv

## Δημιουργία εφαρμογής

TODO

## Εργασία

## Περίληψη

---

**Αποποίηση ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία αυτόματης μετάφρασης [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε προσπάθειες για ακρίβεια, παρακαλούμε να έχετε υπόψη ότι οι αυτόματες μεταφράσεις ενδέχεται να περιέχουν λάθη ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.