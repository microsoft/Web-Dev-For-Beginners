<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "a7b7f54b13f9e6683a844d173ffdd766",
  "translation_date": "2025-08-29T09:48:32+00:00",
  "source_file": "9-chat-project/solution/README.md",
  "language_code": "el"
}
-->
# Εκτέλεση κώδικα

## Ρύθμιση

Δημιουργήστε εικονικό περιβάλλον

```sh
cd backend
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

## Ρύθμιση access token (αν δεν το εκτελείτε σε ένα Codespace)

Δείτε [Set up PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

---

**Αποποίηση ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία αυτόματης μετάφρασης AI [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε κάθε προσπάθεια για ακρίβεια, παρακαλούμε να έχετε υπόψη ότι οι αυτόματες μεταφράσεις ενδέχεται να περιέχουν σφάλματα ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.