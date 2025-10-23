<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-23T19:54:38+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "el"
}
-->
# Εξάσκηση Τύπων Δεδομένων: Καλάθι Αγορών Ηλεκτρονικού Εμπορίου

## Οδηγίες

Φανταστείτε ότι δημιουργείτε ένα σύγχρονο σύστημα καλαθιού αγορών για ηλεκτρονικό εμπόριο. Αυτή η εργασία θα σας βοηθήσει να κατανοήσετε πώς οι διάφοροι τύποι δεδομένων της JavaScript συνεργάζονται για τη δημιουργία εφαρμογών πραγματικού κόσμου.

### Η Αποστολή Σας

Δημιουργήστε μια ολοκληρωμένη ανάλυση για το πώς θα χρησιμοποιούσατε τους τύπους δεδομένων της JavaScript σε μια εφαρμογή καλαθιού αγορών. Για κάθε έναν από τους επτά πρωτόγονους τύπους δεδομένων και τα αντικείμενα, πρέπει να:

1. **Καθορίσετε** τον τύπο δεδομένων και τον σκοπό του
2. **Εξηγήσετε** γιατί αυτός ο τύπος δεδομένων είναι η καλύτερη επιλογή για συγκεκριμένες λειτουργίες του καλαθιού αγορών
3. **Παραθέσετε** ρεαλιστικά παραδείγματα κώδικα που δείχνουν τον τύπο δεδομένων σε δράση
4. **Περιγράψετε** πώς αυτός ο τύπος δεδομένων αλληλεπιδρά με άλλα μέρη του καλαθιού αγορών

### Τύποι Δεδομένων που Πρέπει να Καλυφθούν

**Πρωτόγονοι Τύποι Δεδομένων:**
- **String**: Ονόματα προϊόντων, περιγραφές, πληροφορίες χρήστη
- **Number**: Τιμές, ποσότητες, υπολογισμοί φόρων
- **Boolean**: Διαθεσιμότητα προϊόντων, προτιμήσεις χρηστών, κατάσταση καλαθιού
- **Null**: Σκόπιμα κενές τιμές (όπως κωδικοί έκπτωσης που λείπουν)
- **Undefined**: Μη αρχικοποιημένες τιμές ή ελλιπή δεδομένα
- **Symbol**: Μοναδικοί αναγνωριστικοί κωδικοί (προχωρημένη χρήση)
- **BigInt**: Μεγάλες χρηματοοικονομικές πράξεις (προχωρημένη χρήση)

**Τύποι Αναφοράς:**
- **Object**: Λεπτομέρειες προϊόντων, προφίλ χρηστών, περιεχόμενα καλαθιού
- **Array**: Λίστα προϊόντων, ιστορικό παραγγελιών, κατηγορίες

### Παράδειγμα Μορφής για Κάθε Τύπο Δεδομένων

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**Χρήση στον Πραγματικό Κόσμο:** [Περιγράψτε πώς θα λειτουργούσε αυτό στην πράξη]

**Αλληλεπιδράσεις:** [Εξηγήστε πώς αυτός ο τύπος δεδομένων συνεργάζεται με άλλους]
```

### Bonus Challenges

1. **Type Coercion**: Show an example where JavaScript automatically converts between data types in your shopping cart (e.g., string "5" + number 10)

2. **Data Validation**: Demonstrate how you would check if user input is the correct data type before processing

3. **Performance Considerations**: Explain when you might choose one data type over another for performance reasons

### Submission Guidelines

- Create a markdown document with clear headings for each data type
- Include working JavaScript code examples
- Use realistic e-commerce scenarios in your examples
- Explain your reasoning clearly for beginners to understand
- Test your code examples to ensure they work correctly

## Rubric

| Criteria | Exemplary (90-100%) | Proficient (80-89%) | Developing (70-79%) | Needs Improvement (Below 70%) |
|----------|---------------------|---------------------|---------------------|------------------------------|
| **Data Type Coverage** | All 7 primitive types and objects/arrays covered with detailed explanations | 6-7 data types covered with good explanations | 4-5 data types covered with basic explanations | Fewer than 4 data types or minimal explanations |
| **Code Examples** | All examples are realistic, working, and well-commented | Most examples work and are relevant to e-commerce | Some examples work but may be generic | Code examples are incomplete or non-functional |
| **Real-world Application** | Clearly connects each data type to practical shopping cart features | Good connection to e-commerce scenarios | Some connection to shopping cart context | Limited real-world application demonstrated |
| **Technical Accuracy** | All technical information is correct and demonstrates deep understanding | Most technical information is accurate | Generally accurate with minor errors | Contains significant technical errors |
| **Communication** | Explanations are clear, beginner-friendly, and well-organized | Good explanations that are mostly clear | Explanations are understandable but may lack clarity | Explanations are unclear or poorly organized |
| **Bonus Elements** | Includes multiple bonus challenges with excellent execution | Includes one or more bonus challenges well done | Attempts bonus challenges with mixed success | No bonus challenges attempted |

### Learning Objectives

By completing this assignment, you will:
- ✅ **Understand** the seven JavaScript primitive data types and their uses
- ✅ **Apply** data types to real-world programming scenarios
- ✅ **Analyze** when to choose specific data types for different purposes
- ✅ **Create** working code examples that demonstrate data type usage
- ✅ **Explain** technical concepts in beginner-friendly language
- ✅ **Connect** fundamental programming concepts to practical applications

---

**Αποποίηση ευθύνης**:  
Αυτό το έγγραφο έχει μεταφραστεί χρησιμοποιώντας την υπηρεσία αυτόματης μετάφρασης [Co-op Translator](https://github.com/Azure/co-op-translator). Παρόλο που καταβάλλουμε προσπάθειες για ακρίβεια, παρακαλούμε να έχετε υπόψη ότι οι αυτόματες μεταφράσεις ενδέχεται να περιέχουν λάθη ή ανακρίβειες. Το πρωτότυπο έγγραφο στη μητρική του γλώσσα θα πρέπει να θεωρείται η αυθεντική πηγή. Για κρίσιμες πληροφορίες, συνιστάται επαγγελματική ανθρώπινη μετάφραση. Δεν φέρουμε ευθύνη για τυχόν παρεξηγήσεις ή εσφαλμένες ερμηνείες που προκύπτουν από τη χρήση αυτής της μετάφρασης.