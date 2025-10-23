<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6fd645e97c48cd5eb5a3d290815ec8b5",
  "translation_date": "2025-10-22T21:25:14+00:00",
  "source_file": "2-js-basics/1-data-types/assignment.md",
  "language_code": "bn"
}
-->
# ডেটা টাইপ অনুশীলন: ই-কমার্স শপিং কার্ট

## নির্দেশনা

ধরুন আপনি একটি আধুনিক ই-কমার্স শপিং কার্ট সিস্টেম তৈরি করছেন। এই অ্যাসাইনমেন্টটি আপনাকে বুঝতে সাহায্য করবে কীভাবে বিভিন্ন জাভাস্ক্রিপ্ট ডেটা টাইপ একসাথে কাজ করে বাস্তব জীবনের অ্যাপ্লিকেশন তৈরি করতে।

### আপনার কাজ

জাভাস্ক্রিপ্ট ডেটা টাইপগুলি কীভাবে একটি শপিং কার্ট অ্যাপ্লিকেশনে ব্যবহার করবেন তার একটি বিস্তারিত বিশ্লেষণ তৈরি করুন। সাতটি প্রিমিটিভ ডেটা টাইপ এবং অবজেক্টের জন্য আপনাকে করতে হবে:

1. **সনাক্ত করুন** ডেটা টাইপ এবং এর উদ্দেশ্য
2. **ব্যাখ্যা করুন** কেন এই ডেটা টাইপটি নির্দিষ্ট শপিং কার্ট ফিচারের জন্য সেরা পছন্দ
3. **বাস্তবসম্মত কোড উদাহরণ দিন** যেখানে ডেটা টাইপটি ব্যবহৃত হচ্ছে
4. **বর্ণনা করুন** কীভাবে এই ডেটা টাইপটি শপিং কার্টের অন্যান্য অংশের সাথে যোগাযোগ করে

### কাভার করার জন্য প্রয়োজনীয় ডেটা টাইপ

**প্রিমিটিভ ডেটা টাইপ:**
- **String**: পণ্যের নাম, বিবরণ, ব্যবহারকারীর তথ্য
- **Number**: দাম, পরিমাণ, ট্যাক্স হিসাব
- **Boolean**: পণ্য উপলব্ধতা, ব্যবহারকারীর পছন্দ, কার্টের অবস্থা
- **Null**: ইচ্ছাকৃতভাবে খালি মান (যেমন অনুপস্থিত ডিসকাউন্ট কোড)
- **Undefined**: অনির্ধারিত মান বা অনুপস্থিত ডেটা
- **Symbol**: ইউনিক আইডেন্টিফায়ার (উন্নত ব্যবহারের জন্য)
- **BigInt**: বড় আর্থিক হিসাব (উন্নত ব্যবহারের জন্য)

**রেফারেন্স টাইপ:**
- **Object**: পণ্যের বিস্তারিত, ব্যবহারকারীর প্রোফাইল, কার্টের বিষয়বস্তু
- **Array**: পণ্যের তালিকা, অর্ডার ইতিহাস, ক্যাটাগরি

### প্রতিটি ডেটা টাইপের জন্য উদাহরণ ফরম্যাট

প্রতিটি ডেটা টাইপের জন্য আপনার উত্তর এইভাবে গঠন করুন:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```

**বাস্তব জীবনের ব্যবহার:** [এটি বাস্তবে কীভাবে কাজ করবে তা বর্ণনা করুন]

**যোগাযোগ:** [এই ডেটা টাইপটি অন্যদের সাথে কীভাবে কাজ করে তা ব্যাখ্যা করুন]
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

**অস্বীকৃতি**:  
এই নথিটি AI অনুবাদ পরিষেবা [Co-op Translator](https://github.com/Azure/co-op-translator) ব্যবহার করে অনুবাদ করা হয়েছে। আমরা যথাসাধ্য সঠিকতার জন্য চেষ্টা করি, তবে অনুগ্রহ করে মনে রাখবেন যে স্বয়ংক্রিয় অনুবাদে ত্রুটি বা অসঙ্গতি থাকতে পারে। নথিটির মূল ভাষায় থাকা আসল সংস্করণকে প্রামাণিক উৎস হিসেবে বিবেচনা করা উচিত। গুরুত্বপূর্ণ তথ্যের জন্য, পেশাদার মানব অনুবাদ সুপারিশ করা হয়। এই অনুবাদ ব্যবহারের ফলে কোনো ভুল বোঝাবুঝি বা ভুল ব্যাখ্যা হলে আমরা দায়বদ্ধ থাকব না।