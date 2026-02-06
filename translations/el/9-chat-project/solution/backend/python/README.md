# Εκτέλεση κώδικα

## Ρύθμιση

Δημιουργήστε εικονικό περιβάλλον

```sh
python -m venv venv
source ./venv/bin/activate
```

## Εγκατάσταση εξαρτήσεων

```sh
pip install openai fastapi uvicorn python-dotenv
```

## Εκτέλεση API

```sh
# Method 1: Direct execution
python api.py

# Method 2: Using uvicorn
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

## Δοκιμή API

Επισκεφθείτε την διαδραστική τεκμηρίωση API στη διεύθυνση: `http://localhost:5000/docs`

## Εκτέλεση frontend

Βεβαιωθείτε ότι βρίσκεστε στον φάκελο του frontend

Εντοπίστε το *app.js*, αλλάξτε το `BASE_URL` στη διεύθυνση URL του backend σας

Εκτελέστε το

```
npx http-server -p 8000
```

Δοκιμάστε να πληκτρολογήσετε ένα μήνυμα στη συνομιλία, θα πρέπει να δείτε μια απάντηση (υπό την προϋπόθεση ότι το εκτελείτε σε ένα Codespace ή έχετε ρυθμίσει ένα access token).

## Ρύθμιση access token (αν δεν το εκτελείτε σε ένα Codespace)

Δείτε [Ρύθμιση PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Αποποίηση ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία μετάφρασης AI [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε προσπάθειες για ακρίβεια, παρακαλούμε να γνωρίζετε ότι οι αυτοματοποιημένες μεταφράσεις ενδέχεται να περιέχουν λάθη ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.