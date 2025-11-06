<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "3925b6a1c31c60755eaae4d578232c25",
  "translation_date": "2025-11-06T11:19:34+00:00",
  "source_file": "10-ai-framework-project/README.md",
  "language_code": "vi"
}
-->
# Khung AI

Bạn đã bao giờ cảm thấy choáng ngợp khi cố gắng xây dựng ứng dụng AI từ đầu chưa? Bạn không cô đơn đâu! Các khung AI giống như một con dao đa năng Thụy Sĩ dành cho phát triển AI - chúng là những công cụ mạnh mẽ có thể tiết kiệm thời gian và giảm đau đầu khi xây dựng ứng dụng thông minh. Hãy nghĩ về một khung AI như một thư viện được tổ chức tốt: nó cung cấp các thành phần được xây dựng sẵn, API tiêu chuẩn hóa và các trừu tượng thông minh để bạn có thể tập trung vào việc giải quyết vấn đề thay vì vật lộn với các chi tiết triển khai.

Trong bài học này, chúng ta sẽ khám phá cách các khung như LangChain có thể biến những nhiệm vụ tích hợp AI phức tạp trước đây thành mã sạch và dễ đọc. Bạn sẽ tìm hiểu cách giải quyết các thách thức thực tế như theo dõi cuộc trò chuyện, triển khai gọi công cụ và xử lý các mô hình AI khác nhau thông qua một giao diện thống nhất.

Khi kết thúc bài học, bạn sẽ biết khi nào nên sử dụng khung thay vì gọi API trực tiếp, cách sử dụng các trừu tượng của chúng một cách hiệu quả và cách xây dựng ứng dụng AI sẵn sàng cho thực tế. Hãy cùng khám phá những gì khung AI có thể làm cho dự án của bạn.

## ⚡ Những gì bạn có thể làm trong 5 phút tới

**Lộ trình bắt đầu nhanh dành cho nhà phát triển bận rộn**

```mermaid
flowchart LR
    A[⚡ 5 minutes] --> B[Install LangChain]
    B --> C[Create ChatOpenAI client]
    C --> D[Send first prompt]
    D --> E[See framework power]
```

- **Phút 1**: Cài đặt LangChain: `pip install langchain langchain-openai`
- **Phút 2**: Thiết lập token GitHub của bạn và nhập client ChatOpenAI
- **Phút 3**: Tạo một cuộc trò chuyện đơn giản với các tin nhắn hệ thống và người dùng
- **Phút 4**: Thêm một công cụ cơ bản (như hàm cộng) và xem AI gọi công cụ
- **Phút 5**: Trải nghiệm sự khác biệt giữa gọi API trực tiếp và trừu tượng khung

**Mã kiểm tra nhanh**:
```python
from langchain_openai import ChatOpenAI
from langchain_core.messages import SystemMessage, HumanMessage

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini"
)

response = llm.invoke([
    SystemMessage(content="You are a helpful coding assistant"),
    HumanMessage(content="Explain Python functions briefly")
])
print(response.content)
```

**Tại sao điều này quan trọng**: Trong 5 phút, bạn sẽ trải nghiệm cách các khung AI biến việc tích hợp AI phức tạp thành các lệnh gọi phương thức đơn giản. Đây là nền tảng thúc đẩy các ứng dụng AI sản xuất.

## Tại sao chọn khung?

Vậy là bạn đã sẵn sàng xây dựng một ứng dụng AI - tuyệt vời! Nhưng đây là vấn đề: bạn có nhiều con đường khác nhau để lựa chọn, và mỗi con đường đều có ưu và nhược điểm riêng. Nó giống như việc chọn giữa đi bộ, đi xe đạp hoặc lái xe để đến một nơi nào đó - tất cả đều đưa bạn đến đích, nhưng trải nghiệm (và nỗ lực) sẽ hoàn toàn khác.

Hãy phân tích ba cách chính mà bạn có thể tích hợp AI vào dự án của mình:

| Cách tiếp cận | Ưu điểm | Phù hợp nhất cho | Cân nhắc |
|---------------|---------|------------------|----------|
| **Yêu cầu HTTP trực tiếp** | Kiểm soát hoàn toàn, không phụ thuộc | Truy vấn đơn giản, học các nguyên tắc cơ bản | Mã dài dòng hơn, xử lý lỗi thủ công |
| **Tích hợp SDK** | Ít mã lặp lại, tối ưu hóa theo mô hình | Ứng dụng một mô hình | Giới hạn ở các nhà cung cấp cụ thể |
| **Khung AI** | API thống nhất, trừu tượng tích hợp sẵn | Ứng dụng đa mô hình, quy trình phức tạp | Đường cong học tập, có thể trừu tượng hóa quá mức |

### Lợi ích của khung trong thực tế

```mermaid
graph TD
    A[Your Application] --> B[AI Framework]
    B --> C[OpenAI GPT]
    B --> D[Anthropic Claude]
    B --> E[GitHub Models]
    B --> F[Local Models]
    
    B --> G[Built-in Tools]
    G --> H[Memory Management]
    G --> I[Conversation History]
    G --> J[Function Calling]
    G --> K[Error Handling]
```

**Tại sao khung quan trọng:**
- **Thống nhất** nhiều nhà cung cấp AI dưới một giao diện
- **Xử lý** bộ nhớ cuộc trò chuyện tự động
- **Cung cấp** các công cụ sẵn sàng cho các nhiệm vụ phổ biến như nhúng và gọi hàm
- **Quản lý** xử lý lỗi và logic thử lại
- **Biến** quy trình phức tạp thành các lệnh gọi phương thức dễ đọc

> 💡 **Mẹo chuyên nghiệp**: Sử dụng khung khi chuyển đổi giữa các mô hình AI khác nhau hoặc xây dựng các tính năng phức tạp như tác nhân, bộ nhớ hoặc gọi công cụ. Gắn bó với API trực tiếp khi học các nguyên tắc cơ bản hoặc xây dựng các ứng dụng đơn giản, tập trung.

**Kết luận**: Giống như việc chọn giữa các công cụ chuyên dụng của một người thợ thủ công và một xưởng hoàn chỉnh, đó là việc phù hợp công cụ với nhiệm vụ. Các khung vượt trội cho các ứng dụng phức tạp, giàu tính năng, trong khi API trực tiếp hoạt động tốt cho các trường hợp sử dụng đơn giản.

## 🗺️ Hành trình học tập của bạn qua việc làm chủ khung AI

```mermaid
journey
    title From Raw APIs to Production AI Applications
    section Framework Foundations
      Understand abstraction benefits: 4: You
      Master LangChain basics: 6: You
      Compare approaches: 7: You
    section Conversation Systems
      Build chat interfaces: 5: You
      Implement memory patterns: 7: You
      Handle streaming responses: 8: You
    section Advanced Features
      Create custom tools: 6: You
      Master structured output: 8: You
      Build document systems: 8: You
    section Production Applications
      Combine all features: 7: You
      Handle error scenarios: 8: You
      Deploy complete systems: 9: You
```

**Điểm đến hành trình của bạn**: Đến cuối bài học này, bạn sẽ làm chủ phát triển khung AI và có thể xây dựng các ứng dụng AI tinh vi, sẵn sàng sản xuất, cạnh tranh với các trợ lý AI thương mại.

## Giới thiệu

Trong bài học này, chúng ta sẽ học cách:

- Sử dụng một khung AI phổ biến.
- Giải quyết các vấn đề phổ biến như cuộc trò chuyện, sử dụng công cụ, bộ nhớ và ngữ cảnh.
- Tận dụng điều này để xây dựng ứng dụng AI.

## 🧠 Hệ sinh thái phát triển khung AI

```mermaid
mindmap
  root((AI Frameworks))
    Abstraction Benefits
      Code Simplification
        Unified APIs
        Built-in Error Handling
        Consistent Patterns
        Reduced Boilerplate
      Multi-Model Support
        Provider Agnostic
        Easy Switching
        Fallback Options
        Cost Optimization
    Core Components
      Conversation Management
        Message Types
        Memory Systems
        Context Tracking
        History Persistence
      Tool Integration
        Function Calling
        API Connections
        Custom Tools
        Workflow Automation
    Advanced Features
      Structured Output
        Pydantic Models
        JSON Schemas
        Type Safety
        Validation Rules
      Document Processing
        Embeddings
        Vector Stores
        Similarity Search
        RAG Systems
    Production Patterns
      Application Architecture
        Modular Design
        Error Boundaries
        Async Operations
        State Management
      Deployment Strategies
        Scalability
        Monitoring
        Performance
        Security
```

**Nguyên tắc cốt lõi**: Các khung AI trừu tượng hóa sự phức tạp trong khi cung cấp các trừu tượng mạnh mẽ cho quản lý cuộc trò chuyện, tích hợp công cụ và xử lý tài liệu, cho phép các nhà phát triển xây dựng các ứng dụng AI tinh vi với mã sạch, dễ bảo trì.

## Lời nhắc AI đầu tiên của bạn

Hãy bắt đầu với những điều cơ bản bằng cách tạo ứng dụng AI đầu tiên của bạn gửi một câu hỏi và nhận lại câu trả lời. Giống như Archimedes phát hiện ra nguyên lý dịch chuyển trong bồn tắm của mình, đôi khi những quan sát đơn giản nhất dẫn đến những hiểu biết mạnh mẽ nhất - và các khung làm cho những hiểu biết này trở nên dễ tiếp cận.

### Thiết lập LangChain với các mô hình GitHub

Chúng ta sẽ sử dụng LangChain để kết nối với các mô hình GitHub, điều này khá tuyệt vì nó cung cấp cho bạn quyền truy cập miễn phí vào nhiều mô hình AI. Phần hay nhất? Bạn chỉ cần một vài tham số cấu hình đơn giản để bắt đầu:

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

# Send a simple prompt
response = llm.invoke("What's the capital of France?")
print(response.content)
```

**Hãy phân tích những gì đang diễn ra ở đây:**
- **Tạo** một client LangChain bằng cách sử dụng lớp `ChatOpenAI` - đây là cổng kết nối của bạn với AI!
- **Cấu hình** kết nối với các mô hình GitHub bằng token xác thực của bạn
- **Chỉ định** mô hình AI nào sẽ sử dụng (`gpt-4o-mini`) - hãy nghĩ về điều này như việc chọn trợ lý AI của bạn
- **Gửi** câu hỏi của bạn bằng phương thức `invoke()` - đây là nơi phép thuật xảy ra
- **Trích xuất** và hiển thị phản hồi - và voilà, bạn đang trò chuyện với AI!

> 🔧 **Lưu ý thiết lập**: Nếu bạn đang sử dụng GitHub Codespaces, bạn thật may mắn - `GITHUB_TOKEN` đã được thiết lập sẵn cho bạn! Làm việc cục bộ? Không sao, bạn chỉ cần tạo một token truy cập cá nhân với các quyền phù hợp.

**Kết quả mong đợi:**
```text
The capital of France is Paris.
```

```mermaid
sequenceDiagram
    participant App as Your Python App
    participant LC as LangChain
    participant GM as GitHub Models
    participant AI as GPT-4o-mini
    
    App->>LC: llm.invoke("What's the capital of France?")
    LC->>GM: HTTP request with prompt
    GM->>AI: Process prompt
    AI->>GM: Generated response
    GM->>LC: Return response
    LC->>App: response.content
```

## Xây dựng AI hội thoại

Ví dụ đầu tiên này minh họa những điều cơ bản, nhưng nó chỉ là một trao đổi đơn lẻ - bạn hỏi một câu hỏi, nhận được câu trả lời, và thế là xong. Trong các ứng dụng thực tế, bạn muốn AI của mình nhớ những gì bạn đã thảo luận, giống như cách Watson và Holmes xây dựng các cuộc trò chuyện điều tra của họ theo thời gian.

Đây là nơi LangChain trở nên đặc biệt hữu ích. Nó cung cấp các loại tin nhắn khác nhau giúp cấu trúc cuộc trò chuyện và cho phép bạn tạo cho AI của mình một tính cách. Bạn sẽ xây dựng các trải nghiệm trò chuyện duy trì ngữ cảnh và tính cách.

### Hiểu các loại tin nhắn

Hãy nghĩ về các loại tin nhắn này như những "chiếc mũ" khác nhau mà người tham gia đội trong một cuộc trò chuyện. LangChain sử dụng các lớp tin nhắn khác nhau để theo dõi ai đang nói gì:

| Loại tin nhắn | Mục đích | Ví dụ sử dụng |
|---------------|----------|---------------|
| `SystemMessage` | Xác định tính cách và hành vi của AI | "Bạn là một trợ lý lập trình hữu ích" |
| `HumanMessage` | Đại diện cho đầu vào của người dùng | "Giải thích cách hoạt động của hàm" |
| `AIMessage` | Lưu trữ phản hồi của AI | Các phản hồi AI trước đó trong cuộc trò chuyện |

### Tạo cuộc trò chuyện đầu tiên của bạn

Hãy tạo một cuộc trò chuyện nơi AI của chúng ta đảm nhận một vai trò cụ thể. Chúng ta sẽ để nó hóa thân thành Captain Picard - một nhân vật nổi tiếng với sự khôn ngoan ngoại giao và khả năng lãnh đạo:

```python
messages = [
    SystemMessage(content="You are Captain Picard of the Starship Enterprise"),
    HumanMessage(content="Tell me about you"),
]
```

**Phân tích thiết lập cuộc trò chuyện này:**
- **Thiết lập** vai trò và tính cách của AI thông qua `SystemMessage`
- **Cung cấp** truy vấn ban đầu của người dùng qua `HumanMessage`
- **Tạo** nền tảng cho cuộc trò chuyện nhiều lượt

Mã đầy đủ cho ví dụ này trông như sau:

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

Bạn sẽ thấy kết quả tương tự như:

```text
I am Captain Jean-Luc Picard, the commanding officer of the USS Enterprise (NCC-1701-D), a starship in the United Federation of Planets. My primary mission is to explore new worlds, seek out new life and new civilizations, and boldly go where no one has gone before. 

I believe in the importance of diplomacy, reason, and the pursuit of knowledge. My crew is diverse and skilled, and we often face challenges that test our resolve, ethics, and ingenuity. Throughout my career, I have encountered numerous species, grappled with complex moral dilemmas, and have consistently sought peaceful solutions to conflicts.

I hold the ideals of the Federation close to my heart, believing in the importance of cooperation, understanding, and respect for all sentient beings. My experiences have shaped my leadership style, and I strive to be a thoughtful and just captain. How may I assist you further?
```

Để duy trì tính liên tục của cuộc trò chuyện (thay vì đặt lại ngữ cảnh mỗi lần), bạn cần tiếp tục thêm các phản hồi vào danh sách tin nhắn của mình. Giống như các truyền thống truyền miệng bảo tồn các câu chuyện qua nhiều thế hệ, cách tiếp cận này xây dựng bộ nhớ lâu dài:

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

Khá thú vị, đúng không? Điều đang xảy ra ở đây là chúng ta gọi LLM hai lần - lần đầu tiên chỉ với hai tin nhắn ban đầu của chúng ta, nhưng sau đó lại với toàn bộ lịch sử cuộc trò chuyện. Nó giống như AI thực sự đang theo dõi cuộc trò chuyện của chúng ta!

Khi bạn chạy mã này, bạn sẽ nhận được phản hồi thứ hai nghe có vẻ như:

```text
Welcome aboard, Chris! It's always a pleasure to meet those who share a passion for exploration and discovery. While I cannot formally offer you a position on the Enterprise right now, I encourage you to pursue your aspirations. We are always in need of talented individuals with diverse skills and backgrounds. 

If you are interested in space exploration, consider education and training in the sciences, engineering, or diplomacy. The values of curiosity, resilience, and teamwork are crucial in Starfleet. Should you ever find yourself on a starship, remember to uphold the principles of the Federation: peace, understanding, and respect for all beings. Your journey can lead you to remarkable adventures, whether in the stars or on the ground. Engage!
```

```mermaid
sequenceDiagram
    participant User
    participant App
    participant LangChain
    participant AI
    
    User->>App: "Tell me about you"
    App->>LangChain: [SystemMessage, HumanMessage]
    LangChain->>AI: Formatted conversation
    AI->>LangChain: Captain Picard response
    LangChain->>App: AIMessage object
    App->>User: Display response
    
    Note over App: Add AIMessage to conversation
    
    User->>App: "Can I join your crew?"
    App->>LangChain: [SystemMessage, HumanMessage, AIMessage, HumanMessage]
    LangChain->>AI: Full conversation context
    AI->>LangChain: Contextual response
    LangChain->>App: New AIMessage
    App->>User: Display contextual response
```

Tôi sẽ coi đó là một câu trả lời có thể ;)

## Phản hồi theo luồng

Bạn có bao giờ để ý rằng ChatGPT dường như "gõ" các phản hồi của nó theo thời gian thực không? Đó là luồng đang hoạt động. Giống như việc xem một người viết thư pháp điêu luyện làm việc - thấy các ký tự xuất hiện từng nét thay vì hiện ra ngay lập tức - luồng làm cho tương tác trở nên tự nhiên hơn và cung cấp phản hồi ngay lập tức.

### Triển khai luồng với LangChain

```python
from langchain_openai import ChatOpenAI
import os

llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
    streaming=True
)

# Stream the response
for chunk in llm.stream("Write a short story about a robot learning to code"):
    print(chunk.content, end="", flush=True)
```

**Tại sao luồng tuyệt vời:**
- **Hiển thị** nội dung khi nó đang được tạo - không còn chờ đợi khó xử!
- **Làm cho** người dùng cảm thấy như có điều gì đó đang diễn ra
- **Cảm giác** nhanh hơn, ngay cả khi thực tế không phải vậy
- **Cho phép** người dùng bắt đầu đọc trong khi AI vẫn đang "suy nghĩ"

> 💡 **Mẹo trải nghiệm người dùng**: Luồng thực sự tỏa sáng khi bạn xử lý các phản hồi dài như giải thích mã, viết sáng tạo hoặc hướng dẫn chi tiết. Người dùng của bạn sẽ thích thấy tiến trình thay vì nhìn chằm chằm vào màn hình trống!

### 🎯 Kiểm tra sư phạm: Lợi ích của trừu tượng khung

**Tạm dừng và suy ngẫm**: Bạn vừa trải nghiệm sức mạnh của các trừu tượng khung AI. So sánh những gì bạn đã học với các lệnh gọi API trực tiếp từ các bài học trước.

**Đánh giá nhanh bản thân**:
- Bạn có thể giải thích cách LangChain đơn giản hóa quản lý cuộc trò chuyện so với việc theo dõi tin nhắn thủ công không?
- Sự khác biệt giữa các phương thức `invoke()` và `stream()` là gì, và bạn sẽ sử dụng mỗi phương thức khi nào?
- Hệ thống loại tin nhắn của khung cải thiện tổ chức mã như thế nào?

**Kết nối thực tế**: Các mẫu trừu tượng mà bạn đã học (loại tin nhắn, giao diện luồng, bộ nhớ cuộc trò chuyện) được sử dụng trong mọi ứng dụng AI lớn - từ giao diện của ChatGPT đến hỗ trợ mã của GitHub Copilot. Bạn đang làm chủ các mẫu kiến trúc giống như các nhóm phát triển AI chuyên nghiệp sử dụng.

**Câu hỏi thách thức**: Bạn sẽ thiết kế một trừu tượng khung để xử lý các nhà cung cấp mô hình AI khác nhau (OpenAI, Anthropic, Google) với một giao diện duy nhất như thế nào? Hãy cân nhắc các lợi ích và đánh đổi.

## Mẫu lời nhắc

Mẫu lời nhắc hoạt động giống như các cấu trúc hùng biện được sử dụng trong diễn thuyết cổ điển - hãy nghĩ về cách Cicero điều chỉnh các mẫu lời nói của mình cho các đối tượng khác nhau trong khi vẫn duy trì cùng một khung thuyết phục. Chúng cho phép bạn tạo các lời nhắc có thể tái sử dụng, nơi bạn có thể thay đổi các phần thông tin khác nhau mà không cần viết lại mọi thứ từ đầu. Một khi bạn thiết lập mẫu, bạn chỉ cần điền các biến với các giá trị cần thiết.

### Tạo mẫu lời nhắc có thể tái sử dụng

```python
from langchain_core.prompts import ChatPromptTemplate

# Define a template for code explanations
template = ChatPromptTemplate.from_messages([
    ("system", "You are an expert programming instructor. Explain concepts clearly with examples."),
    ("human", "Explain {concept} in {language} with a practical example for {skill_level} developers")
])

# Use the template with different values
questions = [
    {"concept": "functions", "language": "JavaScript", "skill_level": "beginner"},
    {"concept": "classes", "language": "Python", "skill_level": "intermediate"},
    {"concept": "async/await", "language": "JavaScript", "skill_level": "advanced"}
]

for question in questions:
    prompt = template.format_messages(**question)
    response = llm.invoke(prompt)
    print(f"Topic: {question['concept']}\n{response.content}\n---\n")
```

**Tại sao bạn sẽ thích sử dụng mẫu:**
- **Giữ** các lời nhắc của bạn nhất quán trên toàn bộ ứng dụng
- **Không còn** nối chuỗi lộn xộn - chỉ cần các biến sạch, đơn giản
- **AI của bạn** hoạt động dự đoán được vì cấu trúc vẫn giữ nguyên
- **Cập nhật** dễ dàng - thay đổi mẫu một lần, và nó được sửa ở mọi nơi

## Đầu ra có cấu trúc

Bạn có bao giờ cảm thấy khó chịu khi cố gắng phân tích các phản hồi AI trả về dưới dạng văn bản không có cấu trúc không? Đầu ra có cấu trúc giống như việc dạy AI của bạn tuân theo cách tiếp cận hệ thống mà Linnaeus đã sử dụng để phân loại sinh học - có tổ chức, dự đoán được và dễ làm việc. Bạn có thể yêu cầu JSON, các cấu trúc dữ liệu cụ thể hoặc bất kỳ định dạng nào bạn cần.

### Định nghĩa các schema đầu ra

```python
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import JsonOutputParser
from pydantic import BaseModel, Field

class CodeReview(BaseModel):
    score: int = Field(description="Code quality score from 1-10")
    strengths: list[str] = Field(description="List of code strengths")
    improvements: list[str] = Field(description="List of suggested improvements")
    overall_feedback: str = Field(description="Summary feedback")

# Set up the parser
parser = JsonOutputParser(pydantic_object=CodeReview)

# Create prompt with format instructions
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a code reviewer. {format_instructions}"),
    ("human", "Review this code: {code}")
])

# Format the prompt with instructions
chain = prompt | llm | parser

# Get structured response
code_sample = """
def calculate_average(numbers):
    return sum(numbers) / len(numbers)
"""

result = chain.invoke({
    "code": code_sample,
    "format_instructions": parser.get_format_instructions()
})

print(f"Score: {result['score']}")
print(f"Strengths: {', '.join(result['strengths'])}")
```

**Tại sao đầu ra có cấu trúc là một bước ngoặt:**
- **Không còn** đoán định định dạng bạn sẽ nhận được - nó nhất quán mọi lúc
- **Kết nối** trực tiếp vào cơ sở dữ liệu và API của bạn mà không cần làm thêm việc
- **Phát hiện** các phản hồi AI kỳ lạ trước khi chúng làm hỏng ứng dụng của bạn
- **Làm cho** mã của bạn sạch hơn vì bạn biết chính xác những gì bạn đang làm việc

## Gọi công cụ

Bây giờ chúng ta đến một trong những tính năng mạnh mẽ nhất: công cụ. Đây là cách bạn cung cấp cho AI của mình các khả năng thực tế ngoài cuộc trò chuyện. Giống như cách các hội nghề thời trung cổ phát triển các công cụ chuyên dụng cho các nghề cụ thể, bạn có thể trang bị cho AI của mình các công cụ tập trung. Bạn mô tả các công cụ có sẵn, và khi ai đó yêu cầu điều gì đó phù hợp, AI của bạn có thể hành động.

### Sử dụng Python

Hãy thêm một số công cụ như sau:

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

Vậy điều gì đang xảy ra ở đây? Chúng ta đang tạo một bản thiết kế cho một công cụ gọi là `add`. Bằng cách kế thừa từ `TypedDict` và sử dụng các kiểu `Annotated` cho `a` và `b`, chúng ta đang cung cấp cho LLM một hình ảnh rõ ràng về công cụ này làm gì và nó cần gì. Từ điển `functions` giống như hộp công cụ của chúng ta - nó cho mã biết chính xác phải làm gì khi AI quyết định sử dụng một công cụ cụ thể.

Hãy xem cách chúng ta gọi LLM với công cụ này tiếp theo:

```python
llm = ChatOpenAI(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="openai/gpt-4o-mini",
)

llm_with_tools = llm.bind_tools(tools)
```

Ở đây chúng ta gọi `bind_tools` với mảng `tools` của mình và do đó LLM `llm_with_tools` giờ đã biết về công cụ này.

Để sử dụng LLM mới này, chúng ta có thể gõ mã sau:

```python
query = "What is 3 + 12?"

res = llm_with_tools.invoke(query)
if(res.tool_calls):
    for tool in res.tool_calls:
        print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
print("CONTENT: ",res.content)
```

Bây giờ khi chúng ta gọi `invoke` trên LLM mới này, có công cụ, có thể thuộc tính `tool_calls` được điền. Nếu vậy, bất kỳ công cụ nào được xác định đều có thuộc tính `name` và `args` xác định công cụ nào nên được gọi và với các tham số nào. Mã đầy đủ trông như sau:

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

Khi chạy mã này, bạn sẽ thấy đầu ra tương tự như:

```text
TOOL CALL:  15
CONTENT: 
```

AI đã kiểm tra "What is 3 + 12" và nhận ra đây là một nhiệm vụ cho công cụ `add`. Giống như cách một thủ thư lành nghề biết tham khảo nào cần tra cứu dựa trên loại câu hỏi được hỏi, nó đã đưa ra quyết định này từ tên công cụ, mô tả và các thông số trường. Kết quả 15 đến từ từ điển `functions` của chúng ta thực thi công cụ:

```python
print("TOOL CALL: ", functions[tool["name"]](../../../10-ai-framework-project/**tool["args"]))
```

### Một công cụ thú vị hơn gọi API web
Thêm số vào ví dụ minh họa khái niệm, nhưng các công cụ thực tế thường thực hiện các thao tác phức tạp hơn, như gọi API web. Hãy mở rộng ví dụ của chúng ta để AI lấy nội dung từ internet - tương tự như cách các nhân viên điện báo từng kết nối các địa điểm xa xôi:

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

Bây giờ nếu bạn chạy đoạn mã này, bạn sẽ nhận được phản hồi như sau:

```text
TOOL CALL:  Chuck Norris once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.
CONTENT:  
```

```mermaid
flowchart TD
    A[User Query: "Tell me a joke about animals"] --> B[LangChain Analysis]
    B --> C{Tool Available?}
    C -->|Yes| D[Select joke tool]
    C -->|No| E[Generate direct response]
    
    D --> F[Extract Parameters]
    F --> G[Call joke(category="animals")]
    G --> H[API Request to chucknorris.io]
    H --> I[Return joke content]
    I --> J[Display to user]
    
    E --> K[AI-generated response]
    K --> J
    
    subgraph "Tool Definition Layer"
        L[TypedDict Schema]
        M[Function Implementation]
        N[Parameter Validation]
    end
    
    D --> L
    F --> N
    G --> M
```

Đây là toàn bộ đoạn mã:

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

## Embeddings và xử lý tài liệu

Embeddings là một trong những giải pháp tinh tế nhất trong AI hiện đại. Hãy tưởng tượng bạn có thể biến bất kỳ đoạn văn bản nào thành tọa độ số để nắm bắt ý nghĩa của nó. Đó chính là điều mà embeddings làm - chúng chuyển đổi văn bản thành các điểm trong không gian đa chiều, nơi các khái niệm tương tự tập trung lại với nhau. Nó giống như có một hệ tọa độ cho ý tưởng, gợi nhớ cách Mendeleev tổ chức bảng tuần hoàn dựa trên các thuộc tính nguyên tử.

### Tạo và sử dụng embeddings

```python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter

# Initialize embeddings
embeddings = OpenAIEmbeddings(
    api_key=os.environ["GITHUB_TOKEN"],
    base_url="https://models.github.ai/inference",
    model="text-embedding-3-small"
)

# Load and split documents
loader = TextLoader("documentation.txt")
documents = loader.load()

text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=0)
texts = text_splitter.split_documents(documents)

# Create vector store
vectorstore = FAISS.from_documents(texts, embeddings)

# Perform similarity search
query = "How do I handle user authentication?"
similar_docs = vectorstore.similarity_search(query, k=3)

for doc in similar_docs:
    print(f"Relevant content: {doc.page_content[:200]}...")
```

### Bộ tải tài liệu cho các định dạng khác nhau

```python
from langchain_community.document_loaders import (
    PyPDFLoader,
    CSVLoader,
    JSONLoader,
    WebBaseLoader
)

# Load different document types
pdf_loader = PyPDFLoader("manual.pdf")
csv_loader = CSVLoader("data.csv")
json_loader = JSONLoader("config.json")
web_loader = WebBaseLoader("https://example.com/docs")

# Process all documents
all_documents = []
for loader in [pdf_loader, csv_loader, json_loader, web_loader]:
    docs = loader.load()
    all_documents.extend(docs)
```

**Những gì bạn có thể làm với embeddings:**
- **Xây dựng** tìm kiếm thực sự hiểu ý nghĩa của bạn, không chỉ là khớp từ khóa
- **Tạo** AI có thể trả lời câu hỏi về tài liệu của bạn
- **Làm** hệ thống gợi ý nội dung thực sự phù hợp
- **Tự động** tổ chức và phân loại nội dung của bạn

```mermaid
flowchart LR
    A[Documents] --> B[Text Splitter]
    B --> C[Create Embeddings]
    C --> D[Vector Store]
    
    E[User Query] --> F[Query Embedding]
    F --> G[Similarity Search]
    G --> D
    D --> H[Relevant Documents]
    H --> I[AI Response]
    
    subgraph "Vector Space"
        J[Document A: [0.1, 0.8, 0.3...]]
        K[Document B: [0.2, 0.7, 0.4...]]
        L[Query: [0.15, 0.75, 0.35...]]
    end
    
    C --> J
    C --> K
    F --> L
    G --> J
    G --> K
```

## Xây dựng ứng dụng AI hoàn chỉnh

Bây giờ chúng ta sẽ tích hợp mọi thứ bạn đã học vào một ứng dụng toàn diện - một trợ lý lập trình có thể trả lời câu hỏi, sử dụng công cụ, và duy trì bộ nhớ hội thoại. Giống như cách máy in kết hợp các công nghệ hiện có (chữ in di động, mực, giấy và áp lực) thành một thứ mang tính cách mạng, chúng ta sẽ kết hợp các thành phần AI của mình thành một thứ thực tế và hữu ích.

### Ví dụ ứng dụng hoàn chỉnh

```python
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.messages import HumanMessage, SystemMessage, AIMessage
from langchain_community.vectorstores import FAISS
from typing_extensions import Annotated, TypedDict
import os
import requests

class CodingAssistant:
    def __init__(self):
        self.llm = ChatOpenAI(
            api_key=os.environ["GITHUB_TOKEN"],
            base_url="https://models.github.ai/inference",
            model="openai/gpt-4o-mini"
        )
        
        self.conversation_history = [
            SystemMessage(content="""You are an expert coding assistant. 
            Help users learn programming concepts, debug code, and write better software.
            Use tools when needed and maintain a helpful, encouraging tone.""")
        ]
        
        # Define tools
        self.setup_tools()
    
    def setup_tools(self):
        class web_search(TypedDict):
            """Search for programming documentation or examples."""
            query: Annotated[str, "Search query for programming help"]
        
        class code_formatter(TypedDict):
            """Format and validate code snippets."""
            code: Annotated[str, "Code to format"]
            language: Annotated[str, "Programming language"]
        
        self.tools = [web_search, code_formatter]
        self.llm_with_tools = self.llm.bind_tools(self.tools)
    
    def chat(self, user_input: str):
        # Add user message to conversation
        self.conversation_history.append(HumanMessage(content=user_input))
        
        # Get AI response
        response = self.llm_with_tools.invoke(self.conversation_history)
        
        # Handle tool calls if any
        if response.tool_calls:
            for tool_call in response.tool_calls:
                tool_result = self.execute_tool(tool_call)
                print(f"🔧 Tool used: {tool_call['name']}")
                print(f"📊 Result: {tool_result}")
        
        # Add AI response to conversation
        self.conversation_history.append(response)
        
        return response.content
    
    def execute_tool(self, tool_call):
        tool_name = tool_call['name']
        args = tool_call['args']
        
        if tool_name == 'web_search':
            return f"Found documentation for: {args['query']}"
        elif tool_name == 'code_formatter':
            return f"Formatted {args['language']} code: {args['code'][:50]}..."
        
        return "Tool execution completed"

# Usage example
assistant = CodingAssistant()

print("🤖 Coding Assistant Ready! Type 'quit' to exit.\n")

while True:
    user_input = input("You: ")
    if user_input.lower() == 'quit':
        break
    
    response = assistant.chat(user_input)
    print(f"🤖 Assistant: {response}\n")
```

**Kiến trúc ứng dụng:**

```mermaid
graph TD
    A[User Input] --> B[Coding Assistant]
    B --> C[Conversation Memory]
    B --> D[Tool Detection]
    B --> E[LLM Processing]
    
    D --> F[Web Search Tool]
    D --> G[Code Formatter Tool]
    
    E --> H[Response Generation]
    F --> H
    G --> H
    
    H --> I[User Interface]
    H --> C
```

**Các tính năng chính chúng ta đã triển khai:**
- **Ghi nhớ** toàn bộ cuộc hội thoại của bạn để duy trì ngữ cảnh
- **Thực hiện hành động** thông qua việc gọi công cụ, không chỉ hội thoại
- **Tuân theo** các mẫu tương tác có thể dự đoán
- **Quản lý** xử lý lỗi và quy trình phức tạp một cách tự động

### 🎯 Kiểm tra sư phạm: Kiến trúc AI sản xuất

**Hiểu kiến trúc**: Bạn đã xây dựng một ứng dụng AI hoàn chỉnh kết hợp quản lý hội thoại, gọi công cụ, và quy trình làm việc có cấu trúc. Điều này đại diện cho sự phát triển ứng dụng AI ở cấp độ sản xuất.

**Các khái niệm chính đã nắm vững**:
- **Kiến trúc dựa trên lớp**: Cấu trúc ứng dụng AI có tổ chức, dễ bảo trì
- **Tích hợp công cụ**: Chức năng tùy chỉnh vượt ra ngoài hội thoại
- **Quản lý bộ nhớ**: Ngữ cảnh hội thoại liên tục
- **Xử lý lỗi**: Hành vi ứng dụng mạnh mẽ

**Kết nối ngành**: Các mẫu kiến trúc bạn đã triển khai (lớp hội thoại, hệ thống công cụ, quản lý bộ nhớ) là những mẫu được sử dụng trong các ứng dụng AI doanh nghiệp như trợ lý AI của Slack, GitHub Copilot, và Microsoft Copilot. Bạn đang xây dựng với tư duy kiến trúc chuyên nghiệp.

**Câu hỏi phản ánh**: Làm thế nào bạn sẽ mở rộng ứng dụng này để xử lý nhiều người dùng, lưu trữ liên tục, hoặc tích hợp với cơ sở dữ liệu bên ngoài? Hãy cân nhắc các thách thức về khả năng mở rộng và quản lý trạng thái.

## Bài tập: Xây dựng trợ lý học tập AI của riêng bạn

**Mục tiêu**: Tạo một ứng dụng AI giúp sinh viên học các khái niệm lập trình bằng cách cung cấp giải thích, ví dụ mã, và câu hỏi trắc nghiệm tương tác.

### Yêu cầu

**Các tính năng cốt lõi (Bắt buộc):**
1. **Giao diện hội thoại**: Triển khai hệ thống chat duy trì ngữ cảnh qua nhiều câu hỏi
2. **Công cụ giáo dục**: Tạo ít nhất hai công cụ hỗ trợ học tập:
   - Công cụ giải thích mã
   - Công cụ tạo câu hỏi trắc nghiệm
3. **Học tập cá nhân hóa**: Sử dụng tin nhắn hệ thống để điều chỉnh phản hồi theo các cấp độ kỹ năng khác nhau
4. **Định dạng phản hồi**: Triển khai đầu ra có cấu trúc cho câu hỏi trắc nghiệm

### Các bước triển khai

**Bước 1: Thiết lập môi trường của bạn**
```bash
pip install langchain langchain-openai
```

**Bước 2: Chức năng chat cơ bản**
- Tạo lớp `StudyAssistant`
- Triển khai bộ nhớ hội thoại
- Thêm cấu hình cá nhân hóa để hỗ trợ giáo dục

**Bước 3: Thêm công cụ giáo dục**
- **Giải thích mã**: Phân tích mã thành các phần dễ hiểu
- **Tạo câu hỏi trắc nghiệm**: Tạo câu hỏi về các khái niệm lập trình
- **Theo dõi tiến độ**: Theo dõi các chủ đề đã học

**Bước 4: Các tính năng nâng cao (Tùy chọn)**
- Triển khai phản hồi theo luồng để cải thiện trải nghiệm người dùng
- Thêm tải tài liệu để tích hợp tài liệu khóa học
- Tạo embeddings để truy xuất nội dung dựa trên sự tương đồng

### Tiêu chí đánh giá

| Tính năng | Xuất sắc (4) | Tốt (3) | Đạt yêu cầu (2) | Cần cải thiện (1) |
|-----------|--------------|---------|-----------------|-------------------|
| **Luồng hội thoại** | Phản hồi tự nhiên, nhận thức ngữ cảnh | Giữ ngữ cảnh tốt | Hội thoại cơ bản | Không có bộ nhớ giữa các lần trao đổi |
| **Tích hợp công cụ** | Nhiều công cụ hữu ích hoạt động mượt mà | 2+ công cụ triển khai đúng cách | 1-2 công cụ cơ bản | Công cụ không hoạt động |
| **Chất lượng mã** | Sạch, tài liệu tốt, xử lý lỗi | Cấu trúc tốt, một số tài liệu | Chức năng cơ bản hoạt động | Cấu trúc kém, không xử lý lỗi |
| **Giá trị giáo dục** | Thực sự hữu ích cho việc học, thích ứng | Hỗ trợ học tập tốt | Giải thích cơ bản | Ít lợi ích giáo dục |

### Cấu trúc mã mẫu

```python
class StudyAssistant:
    def __init__(self, skill_level="beginner"):
        # Initialize LLM, tools, and conversation memory
        pass
    
    def explain_code(self, code, language):
        # Tool: Explain how code works
        pass
    
    def generate_quiz(self, topic, difficulty):
        # Tool: Create practice questions
        pass
    
    def chat(self, user_input):
        # Main conversation interface
        pass

# Example usage
assistant = StudyAssistant(skill_level="intermediate")
response = assistant.chat("Explain how Python functions work")
```

**Thử thách bổ sung:**
- Thêm khả năng nhập/xuất giọng nói
- Triển khai giao diện web bằng Streamlit hoặc Flask
- Tạo cơ sở kiến thức từ tài liệu khóa học bằng embeddings
- Thêm theo dõi tiến độ và lộ trình học tập cá nhân hóa

## 📈 Dòng thời gian làm chủ phát triển khung AI của bạn

```mermaid
timeline
    title Production AI Framework Development Journey
    
    section Framework Foundations
        Understanding Abstractions
            : Master framework vs API decisions
            : Learn LangChain core concepts
            : Implement message type systems
        
        Basic Integration
            : Connect to AI providers
            : Handle authentication
            : Manage configuration
    
    section Conversation Systems
        Memory Management
            : Build conversation history
            : Implement context tracking
            : Handle session persistence
        
        Advanced Interactions
            : Master streaming responses
            : Create prompt templates
            : Implement structured output
    
    section Tool Integration
        Custom Tool Development
            : Design tool schemas
            : Implement function calling
            : Handle external APIs
        
        Workflow Automation
            : Chain multiple tools
            : Create decision trees
            : Build agent behaviors
    
    section Production Applications
        Complete System Architecture
            : Combine all framework features
            : Implement error boundaries
            : Create maintainable code
        
        Enterprise Readiness
            : Handle scalability concerns
            : Implement monitoring
            : Build deployment strategies
```

**🎓 Cột mốc tốt nghiệp**: Bạn đã thành công làm chủ phát triển khung AI bằng cách sử dụng các công cụ và mẫu giống như những ứng dụng AI hiện đại. Những kỹ năng này đại diện cho sự tiên tiến trong phát triển ứng dụng AI và chuẩn bị cho bạn xây dựng các hệ thống thông minh cấp doanh nghiệp.

**🔄 Khả năng cấp độ tiếp theo**:
- Sẵn sàng khám phá các kiến trúc AI nâng cao (agents, hệ thống đa agent)
- Chuẩn bị xây dựng hệ thống RAG với cơ sở dữ liệu vector
- Được trang bị để tạo ứng dụng AI đa phương thức
- Đặt nền tảng cho việc mở rộng và tối ưu hóa ứng dụng AI

## Tóm tắt

🎉 Bạn đã làm chủ các nguyên tắc cơ bản của phát triển khung AI và học cách xây dựng các ứng dụng AI tinh vi bằng LangChain. Giống như hoàn thành một chương trình học nghề toàn diện, bạn đã sở hữu một bộ công cụ kỹ năng đáng kể. Hãy cùng điểm lại những gì bạn đã đạt được.

### Những gì bạn đã học

**Khái niệm khung cốt lõi:**
- **Lợi ích của khung**: Hiểu khi nào nên chọn khung thay vì gọi API trực tiếp
- **Cơ bản về LangChain**: Thiết lập và cấu hình kết nối mô hình AI
- **Các loại tin nhắn**: Sử dụng `SystemMessage`, `HumanMessage`, và `AIMessage` cho hội thoại có cấu trúc

**Tính năng nâng cao:**
- **Gọi công cụ**: Tạo và tích hợp các công cụ tùy chỉnh để tăng cường khả năng của AI
- **Bộ nhớ hội thoại**: Duy trì ngữ cảnh qua nhiều lượt hội thoại
- **Phản hồi theo luồng**: Triển khai phản hồi theo thời gian thực
- **Mẫu nhắc**: Xây dựng các mẫu nhắc tái sử dụng, động
- **Đầu ra có cấu trúc**: Đảm bảo phản hồi AI nhất quán, có thể phân tích
- **Embeddings**: Tạo khả năng tìm kiếm ngữ nghĩa và xử lý tài liệu

**Ứng dụng thực tế:**
- **Xây dựng ứng dụng hoàn chỉnh**: Kết hợp nhiều tính năng thành các ứng dụng sẵn sàng sản xuất
- **Xử lý lỗi**: Triển khai quản lý lỗi và xác thực mạnh mẽ
- **Tích hợp công cụ**: Tạo các công cụ tùy chỉnh mở rộng khả năng của AI

### Những điểm chính cần nhớ

> 🎯 **Hãy nhớ**: Các khung AI như LangChain về cơ bản là người bạn tốt nhất giúp bạn che giấu sự phức tạp và đầy đủ tính năng. Chúng hoàn hảo khi bạn cần bộ nhớ hội thoại, gọi công cụ, hoặc muốn làm việc với nhiều mô hình AI mà không bị rối.

**Khung quyết định cho tích hợp AI:**

```mermaid
flowchart TD
    A[AI Integration Need] --> B{Simple single query?}
    B -->|Yes| C[Direct API calls]
    B -->|No| D{Need conversation memory?}
    D -->|No| E[SDK Integration]
    D -->|Yes| F{Need tools or complex features?}
    F -->|No| G[Framework with basic setup]
    F -->|Yes| H[Full framework implementation]
    
    C --> I[HTTP requests, minimal dependencies]
    E --> J[Provider SDK, model-specific]
    G --> K[LangChain basic chat]
    H --> L[LangChain with tools, memory, agents]
```

### Bạn sẽ đi đâu từ đây?

**Bắt đầu xây dựng ngay bây giờ:**
- Lấy những khái niệm này và xây dựng thứ gì đó khiến bạn hào hứng!
- Thử nghiệm với các mô hình AI khác nhau thông qua LangChain - giống như có một sân chơi của các mô hình AI
- Tạo các công cụ giải quyết các vấn đề thực tế bạn gặp phải trong công việc hoặc dự án

**Sẵn sàng cho cấp độ tiếp theo?**
- **AI Agents**: Xây dựng hệ thống AI có thể thực sự lập kế hoạch và thực hiện các nhiệm vụ phức tạp một cách độc lập
- **RAG (Retrieval-Augmented Generation)**: Kết hợp AI với cơ sở kiến thức của bạn để tạo ứng dụng siêu mạnh
- **AI đa phương thức**: Làm việc với văn bản, hình ảnh, và âm thanh cùng nhau - khả năng là vô tận!
- **Triển khai sản xuất**: Học cách mở rộng ứng dụng AI của bạn và giám sát chúng trong thế giới thực

**Tham gia cộng đồng:**
- Cộng đồng LangChain rất tuyệt vời để cập nhật và học các thực hành tốt nhất
- GitHub Models cung cấp cho bạn quyền truy cập vào các khả năng AI tiên tiến - hoàn hảo để thử nghiệm
- Tiếp tục thực hành với các trường hợp sử dụng khác nhau - mỗi dự án sẽ dạy bạn điều gì đó mới

Bây giờ bạn đã có kiến thức để xây dựng các ứng dụng hội thoại thông minh giúp mọi người giải quyết các vấn đề thực tế. Giống như các nghệ nhân thời Phục hưng kết hợp tầm nhìn nghệ thuật với kỹ năng kỹ thuật, bạn giờ đây có thể kết hợp khả năng AI với ứng dụng thực tế. Câu hỏi là: bạn sẽ tạo ra điều gì? 🚀

## Thử thách GitHub Copilot Agent 🚀

Sử dụng chế độ Agent để hoàn thành thử thách sau:

**Mô tả:** Xây dựng một trợ lý đánh giá mã AI tiên tiến kết hợp nhiều tính năng của LangChain bao gồm gọi công cụ, đầu ra có cấu trúc, và bộ nhớ hội thoại để cung cấp phản hồi toàn diện về các bài nộp mã.

**Nhắc nhở:** Tạo lớp CodeReviewAssistant triển khai:
1. Một công cụ phân tích độ phức tạp của mã và đề xuất cải tiến
2. Một công cụ kiểm tra mã theo các thực hành tốt nhất
3. Đầu ra có cấu trúc sử dụng mô hình Pydantic để định dạng đánh giá nhất quán
4. Bộ nhớ hội thoại để theo dõi các phiên đánh giá
5. Giao diện chat chính có thể xử lý các bài nộp mã và cung cấp phản hồi chi tiết, có thể hành động

Trợ lý nên có khả năng đánh giá mã trong nhiều ngôn ngữ lập trình, duy trì ngữ cảnh qua nhiều bài nộp mã trong một phiên, và cung cấp cả điểm tổng quan lẫn các đề xuất cải tiến chi tiết.

Tìm hiểu thêm về [chế độ agent](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode) tại đây.

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.