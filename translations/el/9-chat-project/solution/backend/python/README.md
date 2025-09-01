<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "537f02a36d73db093cbb8b9b44867645",
  "translation_date": "2025-09-01T15:47:55+00:00",
  "source_file": "9-chat-project/solution/backend/python/README.md",
  "language_code": "el"
}
-->
# Εκτέλεση κώδικα

## Ρύθμιση

Δημιουργήστε εικονικό περιβάλλον

```sh
python -m venv venv
source ./venv/bin/activate
```

## Εγκατάσταση εξαρτήσεων

```sh
pip install openai flask flask-cors 
```

## Εκτέλεση API

```sh
python api.py
```

## Εκτέλεση frontend

Βεβαιωθείτε ότι βρίσκεστε στον φάκελο του frontend

Εντοπίστε το *app.js*, αλλάξτε το `BASE_URL` στη διεύθυνση URL του backend σας

Εκτελέστε το

```
npx http-server -p 8000
```

Δοκιμάστε να πληκτρολογήσετε ένα μήνυμα στη συνομιλία, θα πρέπει να δείτε μια απάντηση (υπό την προϋπόθεση ότι το εκτελείτε σε ένα Codespace ή έχετε ρυθμίσει ένα access token).

## Ρύθμιση access token (αν δεν το εκτελείτε σε Codespace)

Δείτε [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Αποποίηση ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία αυτόματης μετάφρασης [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε προσπάθειες για ακρίβεια, παρακαλούμε να έχετε υπόψη ότι οι αυτοματοποιημένες μεταφράσεις ενδέχεται να περιέχουν λάθη ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.