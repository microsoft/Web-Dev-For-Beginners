# Thực hành kiểu dữ liệu: Giỏ hàng thương mại điện tử

## Hướng dẫn

Hãy tưởng tượng bạn đang xây dựng một hệ thống giỏ hàng thương mại điện tử hiện đại. Bài tập này sẽ giúp bạn hiểu cách các kiểu dữ liệu JavaScript khác nhau phối hợp để tạo ra các ứng dụng thực tế.

### Nhiệm vụ của bạn

Tạo một phân tích toàn diện về cách bạn sẽ sử dụng các kiểu dữ liệu JavaScript trong ứng dụng giỏ hàng. Đối với mỗi kiểu dữ liệu nguyên thủy và đối tượng, bạn cần:

1. **Xác định** kiểu dữ liệu và mục đích của nó  
2. **Giải thích** tại sao kiểu dữ liệu này là lựa chọn tốt nhất cho các tính năng cụ thể của giỏ hàng  
3. **Cung cấp** ví dụ mã thực tế cho thấy kiểu dữ liệu hoạt động  
4. **Mô tả** cách kiểu dữ liệu này tương tác với các phần khác của giỏ hàng  

### Các kiểu dữ liệu cần đề cập

**Kiểu dữ liệu nguyên thủy:**
- **String**: Tên sản phẩm, mô tả, thông tin người dùng  
- **Number**: Giá cả, số lượng, tính toán thuế  
- **Boolean**: Tình trạng hàng hóa, tùy chọn người dùng, trạng thái giỏ hàng  
- **Null**: Giá trị trống có chủ ý (như mã giảm giá bị thiếu)  
- **Undefined**: Giá trị chưa được khởi tạo hoặc dữ liệu bị thiếu  
- **Symbol**: Định danh duy nhất (sử dụng nâng cao)  
- **BigInt**: Tính toán tài chính lớn (sử dụng nâng cao)  

**Kiểu tham chiếu:**
- **Object**: Chi tiết sản phẩm, hồ sơ người dùng, nội dung giỏ hàng  
- **Array**: Danh sách sản phẩm, lịch sử đơn hàng, danh mục  

### Định dạng ví dụ cho mỗi kiểu dữ liệu

Đối với mỗi kiểu dữ liệu, hãy cấu trúc câu trả lời của bạn như sau:

```markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**
```javascript
// Your realistic code example here
```
  
**Sử dụng thực tế:** [Mô tả cách điều này hoạt động trong thực tế]  

**Tương tác:** [Giải thích cách kiểu dữ liệu này hoạt động với các kiểu khác]  
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

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm về bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.