<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "2066c17078e9d18b5e309f31d8e8bc24",
  "translation_date": "2026-01-06T12:09:46+00:00",
  "source_file": "9-chat-project/README.md",
  "language_code": "hk"
}
-->
# 使用 AI 建立聊天助理

還記得《星際迷航》當船員會隨意跟飛船的電腦聊天，問它複雜的問題並得到深思熟慮的回覆嗎？在 1960 年代看似純科幻的東西，如今你可以利用你已經認識的網頁技術建構出來。

在本課程中，我們將使用 HTML、CSS、JavaScript 和一些後端整合技術創建一個 AI 聊天助理。你會發現你一直在學習的技能如何連接到強大的 AI 服務，這些服務能夠理解上下文並生成有意義的回答。

想像 AI 就像擁有一座龐大的圖書館，不只可以找到資料，還能將它們綜合成符合你特定問題的連貫答案。你不用瀏覽成千上萬頁，只會獲得直接，有上下文關聯的回應。

這種整合是通過熟悉的網頁技術協同工作完成的。HTML 負責建立聊天界面，CSS 負責視覺設計，JavaScript 管理用戶互動，後端 API 將一切連接到 AI 服務。這就像管弦樂團不同部門合奏成一場交響樂。

我們本質上是在建立一座橋樑，連結自然的人類溝通與機器處理。你將學習 AI 服務整合的技術實作，以及讓互動感覺直觀的設計模式。

到本課程結束時，AI 整合將不再是神秘過程，而像是你能駕馭的另一個 API。你會理解驅動 ChatGPT、Claude 等應用背後的基本模式，同時使用你一直在學習的網頁開發原理。

## ⚡ 你接下來 5 分鐘能做到的事

**忙碌開發者的快速入門路徑**

```mermaid
flowchart LR
    A[⚡ 5 分鐘] --> B[取得 GitHub 代幣]
    B --> C[測試 AI 遊樂場]
    C --> D[複製 Python 代碼]
    D --> E[查看 AI 回應]
```
- **1 分鐘**：造訪 [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) 並創建個人訪問令牌
- **2 分鐘**：直接在 playground 介面測試 AI 互動
- **3 分鐘**：點擊「Code」頁籤並複製 Python 程式碼片段
- **4 分鐘**：使用你的令牌在本機執行程式碼：`GITHUB_TOKEN=your_token python test.py`
- **5 分鐘**：觀看你的第一個 AI 回應從你的程式碼中產生

**快速測試程式碼：**
```python
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key="your_token_here"
)

response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Hello AI!"}],
    model="openai/gpt-4o-mini"
)

print(response.choices[0].message.content)
```

**為什麼這很重要**：在 5 分鐘內，你會體驗到程式化 AI 互動的魔力。這是驅動你所使用每個 AI 應用的基本建構塊。

以下是你完成的專案外觀：

![Chat app interface showing conversation between user and AI assistant](../../../translated_images/hk/screenshot.0a1ee0d123df681b.webp)

## 🗺️ 你的 AI 應用開發學習之旅

```mermaid
journey
    title 從網頁開發到 AI 整合
    section 理解 AI 基礎
      發掘生成式 AI 概念: 4: You
      探索 GitHub 模型平台: 6: You
      精通 AI 參數與提示詞: 8: You
    section 後端整合
      建立 Python API 伺服器: 5: You
      實作 AI 函式呼叫: 7: You
      處理非同步操作: 8: You
    section 前端開發
      創建現代聊天介面: 6: You
      精通即時互動: 8: You
      建立響應式使用者體驗: 9: You
    section 專業應用
      部署完整的 AI 系統: 7: You
      優化效能模式: 8: You
      創建生產準備應用程式: 9: You
```
**你的旅程終點**：到了課程結尾，你將用相同技術和模式打造出完整的 AI 應用，支撐現代 AI 助理如 ChatGPT、Claude 和 Google Bard。

## 了解 AI：從神秘到掌握

在深入程式碼前，讓我們了解我們正在處理什麼。如果你曾用過 API，就知道基本模式：發送請求，接收回應。

AI API 遵循類似結構，但它不是從資料庫檢索預存資料，而是根據大量文本學習的模式生成全新回應。想想看，這像圖書館目錄系統與知識淵博的圖書館員之間的差異，後者會綜合多個來源的信息。

### 什麼是真正的「生成式 AI」？

想像羅塞塔石碑讓學者透過已知與未知語言間的對應找出埃及象形文字的規律。AI 模型也像是這樣——他們在大量文字中尋找模式，理解語言運作，再用這些模式生成適合新問題的回應。

**我用個簡單比喻說明：**
- **傳統資料庫**：像是要你的出生證明——每次都給你完全相同的文件
- **搜尋引擎**：像是請圖書館員找關於貓的書——他們告訴你有哪些書可用
- **生成式 AI**：像是問一位懂貓的朋友——他會用自己的話告訴你有趣的事情，且依你的問題量身定制

```mermaid
graph LR
    A[你的問題] --> B[人工智能模型]
    B --> C[模式識別]
    C --> D[內容生成]
    D --> E[上下文回應]
    
    F[訓練數據<br/>書籍、文章、網絡] --> B
```
### AI 模型如何學習（簡單版）

AI 模型透過大量包含書籍、文章、對話的文本資料訓練。過程中學會辨識：
- 書寫溝通中思路如何組織
- 哪些詞經常一起出現
- 對話通常是如何進行
- 正式與非正式場合的語境差異

**這很像考古學家解讀古代語言**：他們分析數千個樣本理解語法、詞彙與文化背景，最後能用學到的模式解讀新文本。

### 為什麼用 GitHub Models？

選用 GitHub Models 是因為實用——它讓我們能接觸企業級 AI，無需自己架設 AI 基礎設施（相信我，你現在不想搞那個！）。把它想像成使用氣象 API，不用自己到處設置氣象站來預測天氣。

這基本上是「AI 即服務」，最棒的是開始免費，因此你可以無憂試驗。

```mermaid
graph LR
    A[前端聊天介面] --> B[你的後端 API]
    B --> C[GitHub 模型 API]
    C --> D[人工智能模型處理]
    D --> C
    C --> B
    B --> A
```
我們會用 GitHub Models 作為後端整合，提供專業級 AI 功能且開發者友善的介面。[GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) 是測試環境，你可以在那裡試用不同 AI 模型，了解它們的能力，然後才將其應用到程式碼中。

## 🧠 AI 應用開發生態系統

```mermaid
mindmap
  root((AI 開發))
    Understanding AI
      Generative Models
        Pattern Recognition
        Content Generation
        Context Understanding
        Response Synthesis
      AI Parameters
        Temperature Control
        Token Limits
        Top-p Filtering
        System Prompts
    Backend Architecture
      API Integration
        GitHub Models
        Authentication
        Request Handling
        Error Management
      Python Infrastructure
        FastAPI Framework
        Async Operations
        Environment Security
        CORS Configuration
    Frontend Experience
      Chat Interface
        Real-time Updates
        Message History
        User Feedback
        Loading States
      Modern Web Tech
        ES6 Classes
        Async/Await
        DOM Manipulation
        Event Handling
    Professional Patterns
      Security Best Practices
        Token Management
        Input Validation
        XSS Prevention
        Error Boundaries
      Production Readiness
        Performance Optimization
        Responsive Design
        Accessibility
        Testing Strategies
```
**核心原則**：AI 應用開發結合傳統網頁技能與 AI 服務整合，創建智能且自然、回應迅速的應用。

![GitHub Models AI Playground interface with model selection and testing area](../../../translated_images/hk/playground.d2b927122224ff8f.webp)

**playground 特別實用的原因：**
- **試用** 不同的 AI 模型，如 GPT-4o-mini、Claude 等（全部免費！）
- **測試** 你的想法與提示詞，才開始寫程式碼
- **取得** 你喜愛語言的即用程式碼片段
- **調整** 創意程度與回應長度等設定，觀察輸出差異

玩過一會兒後，點擊「Code」頁籤，選擇程式語言，即可取得你需要的實作程式碼。

![Playground choice showing code generation options for different programming languages](../../../translated_images/hk/playground-choice.1d23ba7d407f4758.webp)

## 設定 Python 後端整合

現在讓我們用 Python 實現 AI 整合。Python 簡單語法與強大函式庫非常適合 AI 應用。我們先拿 GitHub Models playground 上的程式碼開始，然後重構成可重用且生產等級的函式。

### 理解基本實作

當你從 playground 拿 Python 程式碼時，大致上會像下面這樣。別擔心，如果一開始看很多，我們逐段解析：

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# 要進行模型身份驗證，您需要在 GitHub 設定中生成個人訪問令牌 (PAT)。
# 按照此處的指示創建您的 PAT 令牌：https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
client = OpenAI(
    base_url="https://models.github.ai/inference",
    api_key=os.environ["GITHUB_TOKEN"],
)

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

**這段程式碼發生了什麼事：**
- **載入** 需要的工具：`os` 讀取環境變數、`OpenAI` 跟 AI 對話
- **設定** OpenAI 用戶端，指向 GitHub 的 AI 伺服器，不直接使用 OpenAI
- **用 GitHub 專用令牌進行認證**（待會詳細解釋）
- **規劃** 對話中不同「角色」——想像是在佈置戲劇場景
- **發送** 請求到 AI，並設定些微調參數
- **擷取** 回傳資料中的實際回答文字

### 理解訊息角色：AI 對話框架

AI 對話使用特定結構，有不同「角色」各司其職：

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

**想像像導演排戲：**
- **系統角色**：像演員的舞台指令——告訴 AI 怎麼表現，什麼個性和回應方式
- **用戶角色**：真正使用你應用的人發送的問題或訊息
- **助理角色**：AI 的回覆（你不會送這部分訊息，但它會留在對話紀錄中）

**真實世界比喻**：想像你在派對介紹朋友：
- **系統訊息**：「這是我朋友 Sarah，是一位擅長用簡單話解釋醫學的醫生」
- **用戶訊息**：「你能解釋疫苗怎麼工作嗎？」
- **助理回應**：Sarah 以友善醫生身份回答，不是律師或廚師

### 理解 AI 參數：微調回應行為

AI API 呼叫中的數值參數控制模型生成回應的方式。這些設定讓你調整 AI 行為以適應不同使用情境：

#### 溫度 (0.0 到 2.0)：創意調節旋鈕

**作用**：控制 AI 回應的創意度或可預測性。

**想像像爵士樂手即興演奏程度：**
- **溫度 = 0.1**：每次都演奏一模一樣旋律（高度可預測）
- **溫度 = 0.7**：加點變化，但依舊還算合拍（平衡創意）
- **溫度 = 1.5**：完全實驗性的爵士樂，充滿意外轉折（非常不可預測）

```python
# 非常可預測的回應（適合事實性問題）
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # 幾乎總是會說「4」
)

# 有創意的回應（適合腦力激盪）
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # 會生成獨特、意想不到的故事
)
```

#### 最多字數 (1 到 4096+): 回應長度控制器

**作用**：限制 AI 回應的最大長度。

**把 tokens 視為單詞大約數**（英文約 1 token = 0.75 個字）：
- **max_tokens=50**：簡短訊息（像簡訊）
- **max_tokens=500**：挺全面的段落或兩段
- **max_tokens=2000**：詳細說明帶範例

```python
# 簡短、精煉的回答
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # 強制簡要說明
)

# 詳盡、全面的回答
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # 允許詳細說明並附帶例子
)
```

#### Top_p (0.0 到 1.0)：焦點參數

**作用**：控制 AI 專注於多可能回應選項中的焦點程度。

**想像 AI 字彙庫有很多詞，依可能性排序：**
- **top_p=0.1**：只考慮最可能的前 10% 詞語（非常專注）
- **top_p=0.9**：考慮前 90% 詞語（較富創意）
- **top_p=1.0**：全盤考慮（最大多樣性）

**例如**：你問「天空通常是……」
- **低 top_p**：幾乎肯定會說「藍色」
- **高 top_p**：可能會說「藍色」、「多雲」、「廣闊」、「變化多端」、「美麗」等

### 組合應用：參數配置與使用場景

```python
# 用於提供事實性、一致性的答案（例如文件機械人）
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# 用於創意寫作協助
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# 用於對話式、樂於助人的回應（平衡）
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title AI 參數優化矩陣
    x-axis 低創意 --> 高創意
    y-axis 短回應 --> 長回應
    
    quadrant-1 創意內容
    quadrant-2 詳細分析
    quadrant-3 快速資訊
    quadrant-4 對話式 AI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**理解這些參數重要性**：不同應用需求不同答案型態。客服機器人應該一致且事實性強（低溫度），創意寫作助理則期待想像力豐富多變（高溫度）。懂得這些參數讓你掌控 AI 的個性與風格。
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

**理解這個改良後函式：**
- **接受** 兩個參數：用戶提示與可選系統訊息
- **提供** 預設系統訊息，設定一般助理行為
- **使用** Python 型別提示，方便程式碼文檔
- **包含** 詳細函式說明字串解釋用途與參數
- **只回傳** 回應文字，方便用於 Web API
- **維持** 相同模型參數確保回應一致

### 系統提示的魔力：程式化 AI 個性

如果參數控制 AI 如何思考，系統提示決定 AI 是誰。這是 AI 操作中最酷的部分——你本質上在給 AI 一個完整的個性、專業程度與溝通風格。

**想像系統提示像是為不同角色選角**：不一定只有一種通用助理，你可以創造專家應對不同情境。需要耐心老師？創意腦力激盪夥伴？嚴謹商業顧問？改變系統提示就好！

#### 為什麼系統提示這麼強大

有趣的是：AI 模型被訓練於大量人們扮演不同角色與專業程度的對話。當你給 AI 指定角色，就像切換開關，啟動所有這些學習過的模式。

**這就像 AI 的方法演技**：告訴演員「你是位智慧的老教授」，看看他如何自動調整姿態、用詞與舉止。AI 用語言模式做類似事情。

#### 有效系統提示的構成藝術與科學

**優秀系統提示的要素：**
1. **角色/身分**：AI 是誰？
2. **專業**：它懂什麼？
3. **溝通風格**：怎麼說話？
4. **具體指示**：應該重點關注什麼？

```python
# ❌ 模糊嘅系統提示
"You are helpful."

# ✅ 詳盡、有用嘅系統提示
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### 系統提示範例與語境

看看不同系統提示如何創建完全不同的 AI 個性：

```python
# 範例 1：有耐性的老師
teacher_prompt = """
You are an experienced programming instructor who has taught thousands of students. 
You break down complex concepts into simple steps, use analogies from everyday life, 
and always check if the student understands before moving on. You're encouraging 
and never make students feel bad for not knowing something.
"""

# 範例 2：有創意的合作者
creative_prompt = """
You are a creative writing partner who loves brainstorming wild ideas. You're 
enthusiastic, imaginative, and always build on the user's ideas rather than 
replacing them. You ask thought-provoking questions to spark creativity and 
offer unexpected perspectives that make stories more interesting.
"""

# 範例 3：策略性的商業顧問
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### 實際見識系統提示效果

用不同系統提示問同一題，看看截然不同的回答：

**問題**：「我該怎麼在網站應用中處理用戶身分驗證？」

```python
# 使用教師提示：
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# 典型回應：「好問題！讓我們將身份驗證拆解成簡單步驟。
# 想像它就像夜店保安檢查身份證……」

# 使用商業提示：
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# 典型回應：「從策略角度來看，身份驗證對用戶
# 信任與法規遵從至關重要。讓我從安全性、
# 用戶體驗和可擴展性來概述一個框架……」
```

#### 進階系統提示技巧

**1. 上下文設定**：給 AI 背景資訊
```python
system_prompt = """
You are helping a junior developer who just started their first job at a startup. 
They know basic HTML/CSS/JavaScript but are new to backend development and databases. 
Be encouraging and explain things step-by-step without being condescending.
"""
```

**2. 輸出格式設定**：告訴 AI 如何結構化回應  
```python
system_prompt = """
You are a technical mentor. Always structure your responses as:
1. Quick Answer (1-2 sentences)
2. Detailed Explanation 
3. Code Example
4. Common Pitfalls to Avoid
5. Next Steps for Learning
"""
```
  
**3. 限制條件設定**：定義 AI 不應該做的事  
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```
  
#### 為什麼這對你的聊天助理很重要  

理解系統提示能讓你擁有強大能力，創造專門的 AI 助理：  
- **客戶服務機器人**：有幫助、有耐心、熟悉政策  
- **學習導師**：鼓勵式、一步步教學、檢查理解  
- **創意夥伴**：富有想像力、在想法上發展、會問「如果怎樣呢？」  
- **技術專家**：精確、詳細、注重安全  

**關鍵洞察**：你不只是呼叫 AI API —— 你是在打造符合特定使用情境的客製化 AI 個性。這使得現代 AI 應用感覺更貼心、更實用，而非單調通用。  

### 🎯 教學檢核：AI 個性設定編程  

**暫停並反思**：你剛學會如何透過系統提示來設定 AI 個性。這是現代 AI 應用開發的基本能力。  

**快速自我評估**：  
- 你能說明系統提示如何不同於一般使用者訊息嗎？  
- temperature 與 top_p 參數有什麼不同？  
- 你會如何為特定使用情境（例如程式教學導師）建立系統提示？  

**現實世界連結**：你學會的系統提示技巧被運用在每個主要 AI 應用中 —— 從 GitHub Copilot 的程式協助到 ChatGPT 的對話介面。你掌握了大型科技公司 AI 產品團隊使用的模式。  

**挑戰問題**：你如何為不同使用者類型（初學者與專家）設計不同的 AI 個性？思考同一個 AI 模型如何透過提示工程來服務不同族群。  

## 使用 FastAPI 打造 Web API：你的高效能 AI 交流中樞  

現在來建立將前端與 AI 服務連接的後端。我們將使用 FastAPI，一個現代 Python 框架，非常適合建置 AI 應用的 API。  

FastAPI 為這種專案提供多項優勢：內建非同步支援以處理多重請求、可自動生成 API 文件，並且性能優異。你的 FastAPI 伺服器擔任中介，接收前端請求、與 AI 服務溝通，並回傳格式化的回應。  

### 為什麼選擇 FastAPI 用於 AI 應用？  

你可能會想：「我不能直接從前端 JavaScript 呼叫 AI 嗎？」或「為什麼不用 Flask 或 Django？」好問題！  

**FastAPI 適合我們的理由如下：**  
- **預設非同步**：能同時處理多個 AI 請求，不卡死  
- **自動文件**：訪問 `/docs`，免費獲得介面漂亮、可互動的 API 文件頁面  
- **內建驗證**：及早捕捉錯誤，防患於未然  
- **超快性能**：是 Python 框架中速度最快的之一  
- **現代 Python**：使用最新、最棒的 Python 功能  

**還有為什麼我們需要後端：**  

**安全性**：你的 AI API 金鑰就像密碼 —— 如果放在前端 JavaScript，任何人查看網站原始碼都能偷用你的 AI 點數。後端能保護敏感憑證安全。  

**流量限制與控管**：後端可以控制使用者請求頻率、實作身分驗證，並加上記錄追蹤使用狀況。  

**資料處理**：你可能想要保存對話內容、過濾不當內容，或整合多個 AI 服務，這些邏輯都放在後端。  

**架構類似客戶端－伺服器模式：**  
- **前端**：使用者互動介面層  
- **後端 API**：請求處理與路由層  
- **AI 服務**：外部運算與回應產生  
- **環境變數**：安全的設定與憑證儲存  

### 理解請求－回應流程  

讓我們追蹤使用者發訊息時發生的事：  

```mermaid
sequenceDiagram
    participant User as 👤 使用者
    participant Frontend as 🌐 前端
    participant API as 🔧 FastAPI 伺服器
    participant AI as 🤖 AI 服務
    
    User->>Frontend: 輸入 "Hello AI!"
    Frontend->>API: POST /hello {"message": "Hello AI!"}
    Note over API: 驗證請求<br/>加入系統提示
    API->>AI: 傳送格式化請求
    AI->>API: 回傳 AI 回應
    Note over API: 處理回應<br/>記錄對話
    API->>Frontend: {"response": "Hello! How can I help?"}
    Frontend->>User: 顯示 AI 訊息
```  
**理解每個步驟：**  
1. **使用者互動**：使用者在聊天介面輸入文字  
2. **前端處理**：JavaScript 擷取輸入並格式化成 JSON  
3. **API 驗證**：FastAPI 使用 Pydantic 模型自動驗證請求內容  
4. **AI 整合**：後端加入上下文（系統提示）並呼叫 AI 服務  
5. **回應處理**：API 收到 AI 回覆後可視需要修改並回傳  
6. **前端呈現**：JavaScript 在聊天介面顯示回覆  

### 理解 API 架構  

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "Hello AI!"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: API 請求
    GitHub Models->>AI Function: AI 回應
    AI Function->>FastAPI: 回應文字
    FastAPI->>Frontend: {"response": "你好！我可以點幫你？"}
```  
```mermaid
flowchart TD
    A[用戶輸入] --> B[前端驗證]
    B --> C[HTTP POST 請求]
    C --> D[FastAPI 路由]
    D --> E[Pydantic 驗證]
    E --> F[AI 函數調用]
    F --> G[GitHub 模型 API]
    G --> H[回應處理]
    H --> I[JSON 回應]
    I --> J[前端更新]
    
    subgraph "安全層"
        K[CORS 中介軟件]
        L[環境變數]
        M[錯誤處理]
    end
    
    D --> K
    F --> L
    H --> M
```  
### 建立 FastAPI 應用  

我們一步步打造 API。新建檔案 `api.py` 並加入以下 FastAPI 程式碼：  

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# 配置日誌記錄
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# 創建 FastAPI 應用程式
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# 配置 CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 為生產環境適當配置
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 用於請求/回應驗證的 Pydantic 模型
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
        # 擷取並驗證訊息
        message = chat_message.message.strip()
        if not message:
            raise HTTPException(status_code=400, detail="Message cannot be empty")
        
        logger.info(f"Processing message: {message[:50]}...")
        
        # 呼叫 AI 服務（備註：call_llm 應該改成非同步以提升效能）
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
  
**理解 FastAPI 實作細節：**  
- **匯入** FastAPI 來使用現代網頁框架功能，Pydantic 用於資料驗證  
- **建立** 自動 API 文件（伺服器運行後可透過 `/docs` 訪問）  
- **啟用** CORS 中介軟體允許前端跨源請求  
- **定義** Pydantic 模型，實作自動請求/回應驗證與文件生成  
- **使用** 非同步端點來提升同時處理多請求的效能  
- **實作** 適當的 HTTP 狀態碼與錯誤處理（HTTPException）  
- **包含** 結構化日誌以利監控與除錯  
- **提供** 健康檢查端點以監控服務狀態  

**FastAPI 相較傳統框架的主要優點：**  
- **自動驗證**：Pydantic 模型確保資料處理前的完整與正確  
- **互動式文件**：訪問 `/docs` 獲得自動產生、可測試 API 文件  
- **型別安全**：Python 型別提示減少執行時錯誤並提升程式碼品質  
- **非同步支援**：同時處理多個 AI 請求不卡塞  
- **效能優異**：顯著提升即時應用的請求處理速度  

### 理解 CORS：網頁的守門員  

CORS（跨來源資源共享）就像保全巡守大廈，檢查訪客是否被允許進入。讓我們了解為何重要，及其如何影響你的應用。  

#### 什麼是 CORS 以及為何有它？  

**問題所在**：想像任何網站都能不經允許替你向銀行網站發起請求，那會是安全大災難！瀏覽器透過「同源政策」防止這種狀況。  

**同源政策**：瀏覽器只允許網頁向相同域名、埠號和協議的來源發出請求。  

**現實比喻**：就像公寓大樓安全管理，預設只有住戶（同源）可進入。若要讓朋友（不同源）訪客，必須明確告訴保全允許。  

#### 你開發環境中的 CORS  

在開發時你的前端與後端跑在不同埠號：  
- 前端：`http://localhost:3000`（或直接開啟本機 HTML，為 file://）  
- 後端：`http://localhost:5000`  

雖然同台電腦，但因埠號不同被視為「不同來源」！  

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # 這告訴瀏覽器：「其他來源可以安全地向此 API 發送請求」
```
  
**CORS 設定實際作用：**  
- **在 API 回應加上** 特殊 HTTP 標頭，告訴瀏覽器「這個跨來源請求是被允許的」  
- **處理** 「預檢」請求（瀏覽器有時在正式發送請求前先確認權限）  
- **避免** 瀏覽器主控台出現討厭的「被 CORS 政策阻擋」錯誤  

#### CORS 安全：開發 vs 生產環境  

```python
# 🚨 開發：允許所有來源（方便但不安全）
CORS(app)

# ✅ 生產：只允許你指定的前端網域
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 進階：不同環境使用不同來源
if app.debug:  # 開發模式
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # 生產模式
    CORS(app, origins=["https://yourdomain.com"])
```
  
**重要點**：開發時使用 `CORS(app)` 像是把家門沒鎖 —— 方便但不安全。生產環境你要明確指定哪個網站能呼叫你的 API。  

#### 常見的 CORS 情境與解決方案  

| 情境 | 問題 | 解決方案 |  
|----------|---------|----------|  
| **本機開發** | 前端無法呼叫後端 | 在 FastAPI 加入 CORSMiddleware |  
| **GitHub Pages + Heroku** | 部署後前端呼叫 API 失敗 | 把 GitHub Pages URL 加入 CORS 允許來源 |  
| **自訂網域** | 生產環境產生 CORS 錯誤 | 更新 CORS 允許來源以符合網域 |  
| **行動應用** | App 無法存取 Web API | 新增 App 網域或謹慎使用 `*` |  

**專家小技巧**：你可以在瀏覽器開發者工具網路分頁檢查 CORS 標頭，找 `Access-Control-Allow-Origin` 回應標頭。  

### 錯誤處理與驗證  

注意我們的 API 還包含完整錯誤處理：  

```python
# 驗證我們是否收到訊息
if not message:
    return jsonify({"error": "Message field is required"}), 400
```
  
**重要驗證原則：**  
- **先檢查** 請求是否帶有必要欄位  
- **以 JSON 格式** 回傳有意義的錯誤訊息  
- **使用** 合適的 HTTP 狀態碼（400 表示錯誤請求）  
- **提供** 明確反饋幫助前端除錯  

## 設定與啟動你的後端  

現在我們完成 AI 整合與 FastAPI 伺服器，開始運行整套環境。設定流程包含安裝 Python 相依套件、配置環境變數，以及啟動開發伺服器。  

### Python 環境設定  

來建立你的 Python 開發環境。虛擬環境就像曼哈頓計畫的分工策略 —— 每個專案都有自己的隔離空間和套件，避免不同專案間衝突。  

```bash
# 導航到你的後端目錄
cd backend

# 創建一個虛擬環境（就像為你的項目創建一個乾淨的空間）
python -m venv venv

# 啟動它（Linux/Mac）
source ./venv/bin/activate

# 在 Windows 上，使用：
# venv\Scripts\activate

# 安裝有用的東西
pip install openai fastapi uvicorn python-dotenv
```
  
**我們剛做了什麼：**  
- **創建** 專屬的 Python 環境泡泡，可以放心安裝套件不影響其他系統  
- **啟用** 這個環境，讓終端機知道接下來使用它  
- **安裝** 重要套件：OpenAI（AI 魔法）、FastAPI（Web API）、Uvicorn（執行伺服器）、python-dotenv（安全載入祕密）  

**重要套件解說：**  
- **FastAPI**：現代且快速的網頁框架，自動產生 API 文件  
- **Uvicorn**：超快的 ASGI 伺服器，跑 FastAPI 應用  
- **OpenAI**：GitHub 模型及 OpenAI API 官方整合程式庫  
- **python-dotenv**：從 .env 檔安全載入環境變數  

### 環境變數設定：保護你的祕密  

在啟動 API 前，談談網路開發最重要的觀念之一：如何真正保護你的祕密不外洩。環境變數就像保險庫，只有你的程式能查看。  

#### 什麼是環境變數？  

**把環境變數想成保險箱** —— 你把珍貴的東西放進去，只有你（和應用程式）有鑰匙能打開。不要把敏感資訊直接寫在程式碼裡（任何人都能看到），而是用環境妥善存放。  

**差別在這裡：**  
- **錯誤方式**：把密碼寫在便利貼貼在螢幕上  
- **正確方式**：把密碼放進只有你能存取的密碼管理器  

#### 為什麼環境變數重要  

```python
# 🚨 千祈唔好咁做 - API 金鑰對所有人可見
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # 任何人都可以偷走佢！
    base_url="https://models.github.ai/inference"
)

# ✅ 咁做啱 - API 金鑰安全咁儲存
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # 得你嘅應用程式先可以訪問到佢
    base_url="https://models.github.ai/inference"
)
```
  
**硬編碼祕密的後果：**  
1. **版本控制洩漏**：任何有權限看你的 Git 倉庫者也能看到你的 API 金鑰  
2. **公開倉庫風險**：若推送到 GitHub，金鑰暴露於全球網路  
3. **團隊共享風險**：其他開發人員會用到你的個人 API 金鑰  
4. **安全漏洞**：金鑰被盜用，可能讓人濫用你的 AI 點數  

#### 建立環境檔 .env  

在後端專案目錄新增 `.env` 檔，本地存放你的秘密：  

```bash
# .env 文件 - 絕對唔好提交到 Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```
  
**認識 .env 檔：**  
- 每行一條祕密，以 `KEY=value` 格式存放  
- 等號兩側不能有空白  
- 通常值不需要加引號  
- 註解以 `#` 開頭  

#### 建立 GitHub 個人存取令牌  

你的 GitHub 令牌就像授權密碼，允許你的應用使用 GitHub 的 AI 服務：  

**建立令牌步驟：**  
1. 前往 GitHub 設定 → 開發者設定 → 個人存取令牌 → 傳統令牌  
2. 點擊「產生新令牌（傳統）」  
3. 設定有效期限（測試用 30 天，正式可更長）  
4. 選擇完整權限範圍：勾選「repo」及其他需要的權限  
5. 產生令牌並立即複製（之後無法再看！）  
6. 貼到你的 `.env` 檔案裡  

```bash
# 你嘅 token 長咩樣嘅範例（呢個係偽造嘅！）
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```
  
#### 在 Python 中載入環境變數  

```python
import os
from dotenv import load_dotenv

# 從 .env 檔案載入環境變數
load_dotenv()

# 現在你可以安全地存取它們
api_key = os.environ.get("GITHUB_TOKEN")
if not api_key:
    raise ValueError("GITHUB_TOKEN not found in environment variables!")

client = OpenAI(
    api_key=api_key,
    base_url="https://models.github.ai/inference"
)
```
  
**這段程式做了什麼：**  
- 載入你的 `.env` 檔，讓環境變數在 Python 裡可用  
- 檢查是否有帶必要的令牌（錯誤處理良好！）  
- 缺少時拋出明確錯誤  
- 安全使用令牌且不會曝露在程式碼裡  

#### Git 安全：.gitignore 檔  

你的 `.gitignore` 檔告訴 Git 哪些檔案不該追蹤或上傳：  

```bash
# .gitignore - 新增這些行
.env
*.env
.env.local
.env.production
__pycache__/
venv/
.vscode/
```
  
**這很關鍵**：加入 `.env` 到 `.gitignore` 後，Git 會忽略環境變數檔，避免你不小心把祕密上傳到 GitHub。  

#### 不同環境，不同祕密  

專業應用會針對不同環境使用不同 API 金鑰：  

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production
GITHUB_TOKEN=your_production_token
DEBUG=False
```
  
**原因說明**：你不想讓開發時的測試影響生產環境 AI 使用額度，也希望在不同環境有不同安全控管。  

### 啟動開發伺服器：讓你的 FastAPI 活起來  

現在到了令人興奮的時刻——啟動你的 FastAPI 開發伺服器，見證你的 AI 整合活起來！FastAPI 使用 Uvicorn，一個極速的 ASGI 伺服器，專為非同步 Python 應用程式設計。

#### 了解 FastAPI 伺服器啟動過程

```bash
# 方法 1：直接 Python 執行（包括自動重新載入）
python api.py

# 方法 2：直接使用 Uvicorn（更多控制）
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

當你執行這個指令時，背後會發生以下事情：

**1. Python 載入你的 FastAPI 應用程式**：
- 匯入所有必需的函式庫（FastAPI、Pydantic、OpenAI 等）
- 從你的 `.env` 檔案載入環境變數
- 建立 FastAPI 應用程式實例，並附帶自動文件功能

**2. Uvicorn 設定 ASGI 伺服器**：
- 綁定在 5000 埠口，具備非同步請求處理能力
- 設置請求路由並自動驗證
- 啟用熱重載，方便開發時監看檔案變更後重啟
- 產生互動式 API 文件

**3. 伺服器開始監聽**：
- 你的終端機會顯示：`INFO: Uvicorn running on http://0.0.0.0:5000`
- 伺服器可以處理多個並發的 AI 請求
- 你的 API 可即時使用，且自動文件位於 `http://localhost:5000/docs`

#### 當一切正常時你應該看到的畫面

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**了解 FastAPI 輸出訊息：**
- **Will watch for changes**：開發模式下啟用自動重載
- **Uvicorn running**：高效能 ASGI 伺服器正在運行
- **Started reloader process**：檔案監視器啟動，用於自動重啟
- **Application startup complete**：FastAPI 應用程式成功初始化
- **Interactive docs available**：瀏覽 `/docs` 獲取自動產生的 API 文件

#### 測試你的 FastAPI：多種強大方法

FastAPI 提供多種方便測試 API 的方式，包括自動的互動文件：

**方法 1：互動式 API 文件（推薦）**
1. 開啟瀏覽器，前往 `http://localhost:5000/docs`
2. 你會看到用 Swagger UI 呈現的所有 API 端點文件
3. 點選 `/hello` → 按「Try it out」→ 輸入測試訊息 → 按「Execute」
4. 立即在瀏覽器中看到格式化良好的回應結果

**方法 2：基本瀏覽器測試**
1. 開啟 `http://localhost:5000` 測試根路由
2. 開啟 `http://localhost:5000/health` 檢查伺服器健康狀況
3. 可確認你的 FastAPI 伺服器正常運行

**方法 2：命令列測試（進階）**
```bash
# 用 curl 測試（如果有的話）
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# 預期回應：
# {"response": "你好！我是你的 AI 助手。今天有什麼可以幫到你？"}
```

**方法 3：Python 測試腳本**
```python
# test_api.py - 建立此檔案以測試你的 API
import requests
import json

# 測試 API 端點
url = "http://localhost:5000/hello"
data = {"message": "Tell me a joke about programming"}

response = requests.post(url, json=data)
if response.status_code == 200:
    result = response.json()
    print("AI Response:", result['response'])
else:
    print("Error:", response.status_code, response.text)
```

#### 常見啟動問題排錯

| 錯誤訊息 | 含意 | 解決方法 |
|---------------|---------------|------------|
| `ModuleNotFoundError: No module named 'fastapi'` | 未安裝 FastAPI | 在虛擬環境中執行 `pip install fastapi uvicorn` |
| `ModuleNotFoundError: No module named 'uvicorn'` | 未安裝 ASGI 伺服器 | 在虛擬環境中執行 `pip install uvicorn` |
| `KeyError: 'GITHUB_TOKEN'` | 找不到環境變數 | 檢查你的 `.env` 檔案及 `load_dotenv()` 呼叫 |
| `Address already in use` | 5000 埠口被佔用 | 終止其他佔用 5000 埠口的程序或更換埠口 |
| `ValidationError` | 請求資料與 Pydantic 模型不符 | 檢查請求格式是否符合預期結構 |
| `HTTPException 422` | 請求無法處理 | 驗證失敗，請查閱 `/docs` 確認格式正確 |
| `OpenAI API error` | AI 服務驗證失敗 | 確認你的 GitHub token 正確且擁有權限 |

#### 開發最佳實踐

**熱重載**：FastAPI 與 Uvicorn 支援在保存 Python 檔案後自動重載。這意味著你可以立刻修改與測試而無需手動重啟。

```python
# 明確啟用熱重載
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True 啟用熱重載
```

**開發紀錄**：加入 logging 以便了解系統運作狀況：

```python
import logging

# 設定日誌記錄
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

**logging 的好處**：開發期間可清晰看見收到的請求內容、AI 的回應，以及錯誤發生的位置，大幅加快除錯速度。

### GitHub Codespaces 配置：輕鬆雲端開發

GitHub Codespaces 就像一台強大開發電腦在雲端，可從任意瀏覽器存取。若你在 Codespaces 裡工作，還有一些額外設定要讓你的後端服務能讓前端訪問。

#### 了解 Codespaces 網路環境

本地開發環境中，一切在同一台電腦運行：
- 後端：`http://localhost:5000`
- 前端：`http://localhost:3000`（或 `file://`）

Codespaces 在 GitHub 伺服器上執行，因此「localhost」意義不同。GitHub 會自動建立服務的公開 URL，但你必須正確配置。

#### Codespaces 配置步驟

**1. 啟動你的後端伺服器**：
```bash
cd backend
python api.py
```

你會看到熟悉的 FastAPI/Uvicorn 啟動訊息，但注意它運行在 Codespace 環境中。

**2. 設定埠口可見性**：
- 在 VS Code 下方面板找到「Ports」分頁
- 找到列表中的 5000 埠口
- 右鍵點擊 5000 埠口
- 選擇「Port Visibility」→「Public」

**為何要設為公開？** 預設 Codespace 埠口為私有（只有你自己可以訪問）。設為公開後，前端（瀏覽器執行）才能跟後端溝通。

**3. 取得公開 URL**：
設為公開後，你會看到類似的 URL：
```
https://your-codespace-name-5000.app.github.dev
```

**4. 更新前端設定**：
```javascript
// 在你的前端 app.js 中，更新 BASE_URL：
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### 了解 Codespace URL

Codespace URL 結構很有規律：
```
https://[codespace-name]-[port].app.github.dev
```

**細節說明：**
- `codespace-name`：你 Codespace 的唯一識別（通常會包含你的使用者名稱）
- `port`：你服務運行的埠口號（我們 FastAPI 是 5000）
- `app.github.dev`：GitHub Codespace 應用程式專用網域

#### 測試你的 Codespace 設定

**1. 直接測試後端**：
在新分頁開啟你的公開 URL，你應該看到：
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. 使用瀏覽器開發工具測試**：
```javascript
// 打開瀏覽器控制台並測試您的 API
fetch('https://your-codespace-name-5000.app.github.dev/hello', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({message: 'Hello from Codespaces!'})
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Codespaces 與本地開發比較

| 方面 | 本地開發 | GitHub Codespaces |
|--------|-------------------|-------------------|
| **設定時間** | 較長（需安裝 Python、依賴） | 即時（預先配置環境） |
| **URL 訪問** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **埠口配置** | 自動 | 手動（需公開埠口） |
| **檔案持久性** | 存在本機 | 存在 GitHub 儲存庫 |
| **協作方式** | 難以共享環境 | 簡單共享 Codespace 連結 |
| **依賴網際網路** | 只對 AI API 需要 | 全程需要 |

#### Codespace 開發小貼士

**在 Codespaces 使用環境變數**：
你的 `.env` 檔案在 Codespaces 中同樣適用，但你也可以直接在 Codespace 中設定環境變數：

```bash
# 設定目前 session 的環境變數
export GITHUB_TOKEN="your_token_here"

# 或者加入你的 .bashrc 以持久保存
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**埠口管理**：
- Codespaces 會自動偵測應用程式監聽的埠口
- 可同時轉發多個埠口（對日後加入資料庫很方便）
- 埠口只要 Codespace 運行中就一直可用

**開發流程**：
1. 在 VS Code 編寫程式碼
2. FastAPI 自動重載（感謝 Uvicorn 重載模式）
3. 透過公開 URL 立即測試變動
4. 準備好就 commit 並推送

> 💡 **專業提示**：開發時將你的 Codespace 後端 URL 加入書籤。由於 Codespace 名稱穩定，只要使用同一個 Codespace，URL 不會改變。

## 建立前端聊天介面：人類與 AI 的互動空間

現在我們開始打造使用者介面——決定人們如何與你的 AI 助理互動的部分。如同原始 iPhone 的介面設計，我們聚焦讓複雜技術變得直觀且自然好用。

### 了解現代前端架構

我們的聊天介面會是所謂的「單頁應用程式」（SPA）。不再像舊式網站每次點擊載入新頁面，而是流暢且即時地更新：

**舊網站**：像在翻閱實體書本——翻到完全不同的頁面  
**我們的聊天應用**：像在用手機——一切自然流暢地更新

```mermaid
graph TD
    A[用戶輸入訊息] --> B[JavaScript 捕捉輸入]
    B --> C[驗證及格式化資料]
    C --> D[發送至後端 API]
    D --> E[顯示載入狀態]
    E --> F[接收 AI 回覆]
    F --> G[更新聊天介面]
    G --> H[準備下一則訊息]
```
```mermaid
classDiagram
    class ChatApp {
        +messages: HTMLElement
        +form: HTMLElement
        +input: HTMLElement
        +sendButton: HTMLElement
        +BASE_URL: string
        +API_ENDPOINT: string
        
        +constructor()
        +initializeEventListeners()
        +handleSubmit(event)
        +callAPI(message)
        +appendMessage(text, role)
        +escapeHtml(text)
        +scrollToBottom()
        +setLoading(isLoading)
    }
    
    ChatApp --> DOM : 操作
    ChatApp --> FastAPI : 發送請求
```
### 前端開發的三大支柱

所有前端應用——從簡單網站到像 Discord 或 Slack 般複雜的軟體——都是建立在三種核心技術之上。把它們當成網頁上你看見並互動的一切基礎：

**HTML（結構）**：你的基石  
- 決定哪些元素存在（按鈕、文字輸入框、容器）  
- 給內容賦予意義（這是標題，這是表單，等等）  
- 建立其他一切的基本結構  

**CSS（呈現）**：你的室內設計師  
- 讓一切變美（顏色、字型、版面配置）  
- 處理不同螢幕大小（手機、筆電、平板）  
- 製造平滑動畫與視覺回饋  

**JavaScript（行為）**：你的大腦  
- 回應使用者行為（點擊、輸入、捲動）  
- 跟後端對話並更新頁面  
- 讓一切變得互動與動態  

**把它想成建築設計：**  
- **HTML**：結構藍圖（定義空間與關係）  
- **CSS**：美學與環境設計（視覺風格與使用者體驗）  
- **JavaScript**：機械系統（功能與互動）

### 為何現代 JavaScript 架構重要

我們的聊天應用會使用你在專業應用中會見到的現代 JavaScript 模式。理解這些概念能幫助你成長為優秀開發者：

**類別架構**：我們用類別組織程式碼，猶如為物件繪製藍圖  
**Async/Await**：現代處理耗時操作（如 API 呼叫）的方法  
**事件驅動程式設計**：應用回應使用者行為（點擊、按鍵），非持續輪詢  
**DOM 操作**：根據使用者互動與 API 回應動態更新網頁內容

### 專案結構設定

創建一個前端資料夾及有組織的結構：

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**理解架構：**  
- **分離** 結構（HTML）、行為（JavaScript）與呈現（CSS）的關注點  
- **維持** 一個簡單且易於瀏覽修改的檔案結構  
- **遵循** 網頁開發組織性與可維護性最佳實踐

### 建立 HTML 基礎：語義化結構與無障礙設計

讓我們從 HTML 結構開始。現代網頁開發強調「語義化 HTML」——使用明確描述元素用途的 HTML 元素，而非僅外觀定義。這使你的應用對螢幕閱讀器、搜尋引擎等工具更友好。

**為何語義化 HTML 重要**：想像你要用電話描述你的聊天應用。你會說「有個標題在上方，主區域呈現對話，底部有個表單輸入訊息。」語義化 HTML 就是用符合這樣自然描述的元素。

建立 `index.html`，並使用這樣經心布局的標記：

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

**了解各 HTML 元素及其用途：**

#### 文件結構
- **`<!DOCTYPE html>`**：告訴瀏覽器這是現代 HTML5  
- **`<html lang="en">`**：指定頁面語言，方便螢幕閱讀器與翻譯工具  
- **`<meta charset="UTF-8">`**：確保國際語言字元正確編碼  
- **`<meta name="viewport"...>`**：控制縮放與比例，使頁面具備行動裝置響應式設計  

#### 語義元素
- **`<header>`**：明確標示上方標題及描述區  
- **`<main>`**：指定主要內容區（顯示對話）  
- **`<form>`**：語義正確的使用者輸入表單，方便鍵盤導航

#### 無障礙特性
- **`role="log"`**：告知螢幕閱讀器此區域含時間序訊息記錄  
- **`aria-live="polite"`**：溫和呈報新訊息，避免打斷讀者  
- **`aria-label`**：為表單控制項提供描述性標籤  
- **`required`**：瀏覽器驗證必須輸入訊息才能送出

#### CSS 與 JavaScript 整合
- **`class` 屬性**：用於 CSS 美化（如 `chat-container`、`input-group`）  
- **`id` 屬性**：JavaScript 可定位並操作特定元素  
- **腳本放置**：JavaScript 檔案於末尾載入，讓 HTML 可先加載完成  

**此結構有效原因**：
- **邏輯流程**：標頭 → 主要內容 → 輸入表單，符合自然閱讀順序  
- **鍵盤可達性**：使用者可用 Tab 鍵遍歷所有互動元素  
- **螢幕閱讀友善**：明確定位及描述，方便視障使用者  
- **行動響應式**： viewport 標籤啟用響應式設計  
- **漸進強化**：即使 CSS 或 JavaScript 載入失敗依然可用

### 加入互動 JavaScript：現代網頁應用邏輯  

現在讓我們編寫 JavaScript，使我們的聊天介面活起來。我們將使用您在專業網頁開發中會遇到的現代 JavaScript 樣式，包括 ES6 類別、async/await 和事件驅動程式設計。

#### 了解現代 JavaScript 架構

我們不會寫程序式程式碼（一連串按順序執行的函式），而是建立一個**基於類別的架構**。想像類別是一份用於創建物件的藍圖—就像建築師的藍圖可以用來建造多棟房子。

**為什麼使用類別來開發網頁應用？**
- **組織性**：將所有相關功能歸類在一起
- **可重複使用**：可以在同一頁面上創造多個聊天實例
- **維護性**：更容易除錯及修改特定功能
- **專業標準**：此模式在 React、Vue 和 Angular 等框架中被廣泛使用

建立 `app.js`，使用這份現代且結構良好的 JavaScript：

```javascript
// app.js - 現代聊天應用程式邏輯

class ChatApp {
    constructor() {
        // 獲取我們需要操作的 DOM 元素參考
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // 在此配置您的後端 URL
        this.BASE_URL = "http://localhost:5000"; // 為您的環境更新此設定
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // 在建立聊天應用程式時設定事件監聽器
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // 監聽表單提交（當用戶點擊發送或按下 Enter）
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // 也監聽輸入欄的 Enter 鍵（更佳使用者體驗）
        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.handleSubmit(e);
            }
        });
    }
    
    async handleSubmit(event) {
        event.preventDefault(); // 防止表單刷新頁面
        
        const messageText = this.input.value.trim();
        if (!messageText) return; // 不要發送空訊息
        
        // 提供使用者反饋，表示系統正在處理
        this.setLoading(true);
        
        // 立即將用戶訊息加入聊天（樂觀 UI）
        this.appendMessage(messageText, "user");
        
        // 清除輸入欄讓用戶輸入下一條訊息
        this.input.value = '';
        
        try {
            // 呼叫 AI API 並等待回應
            const reply = await this.callAPI(messageText);
            
            // 將 AI 回應加入聊天
            this.appendMessage(reply, "assistant");
        } catch (error) {
            console.error('API Error:', error);
            this.appendMessage("Sorry, I'm having trouble connecting right now. Please try again.", "error");
        } finally {
            // 不論成功或失敗皆重新啟用介面
            this.setLoading(false);
        }
    }
    
    async callAPI(message) {
        const response = await fetch(this.API_ENDPOINT, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ message })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.response;
    }
    
    appendMessage(text, role) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${role}`;
        messageElement.innerHTML = `
            <div class="message-content">
                <span class="message-text">${this.escapeHtml(text)}</span>
                <span class="message-time">${new Date().toLocaleTimeString()}</span>
            </div>
        `;
        
        this.messages.appendChild(messageElement);
        this.scrollToBottom();
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    scrollToBottom() {
        this.messages.scrollTop = this.messages.scrollHeight;
    }
    
    setLoading(isLoading) {
        this.sendButton.disabled = isLoading;
        this.input.disabled = isLoading;
        this.sendButton.textContent = isLoading ? "Sending..." : "Send";
    }
}

// 在頁面載入時初始化聊天應用程式
document.addEventListener("DOMContentLoaded", () => {
    new ChatApp();
});
```

#### 理解每個 JavaScript 概念

**ES6 類別結構**：
```javascript
class ChatApp {
    constructor() {
        // 當你建立新的 ChatApp 實例時會執行這段程式
        // 它就像你的聊天的「設定」功能
    }
    
    methodName() {
        // 方法是屬於類別的函式
        // 它們可以使用「this」存取類別屬性
    }
}
```

**Async/Await 範式**：
```javascript
// 舊方法（回調地獄）：
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// 新方法（async/await）：
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**事件驅動程式設計**：
我們不是持續檢查某件事是否發生，而是「監聽」事件：
```javascript
// 表單提交時，執行 handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// 按下 Enter 鍵時，同樣執行 handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM 操作**：
```javascript
// 建立新元素
const messageElement = document.createElement("div");

// 修改其屬性
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// 加入頁面中
this.messages.appendChild(messageElement);
```

#### 安全性與最佳實踐

**XSS 防禦**：
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // 這會自動對 HTML 進行轉義
    return div.innerHTML;
}
```

**重要原因**：若使用者輸入 `<script>alert('hack')</script>`，此函式確保它以純文字顯示而非執行程式碼。

**錯誤處理**：
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // 顯示用戶友好的錯誤，而不是崩潰應用程式
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**使用者體驗考量**：
- **樂觀 UI**：立即加入使用者訊息，不用等待伺服器回應
- **載入狀態**：等待時停用按鈕並顯示「傳送中...」
- **自動滾動**：保持最新訊息總是可見
- **輸入驗證**：避免傳送空白訊息
- **鍵盤捷徑**：Enter 鍵送出訊息（如同真正的聊天應用）

#### 了解應用程式流程

1. **頁面載入** → 觸發 `DOMContentLoaded` 事件 → 創建 `new ChatApp()`
2. **建構子執行** → 取得 DOM 元素引用 → 設定事件監聽器
3. **使用者輸入訊息** → 按 Enter 或點擊送出 → 執行 `handleSubmit`
4. **handleSubmit** → 驗證輸入 → 顯示載入狀態 → 呼叫 API
5. **API 回應** → 加入 AI 訊息至聊天視窗 → 重新啟用介面
6. **準備下一則訊息** → 使用者可繼續對話

此架構具備可擴充性——您可以輕鬆加入訊息編輯、檔案上傳或多會話執行緒等功能，而無需重寫核心結構。

### 🎯 教學檢核點：現代前端架構

**架構理解**：您已實作了一個完整的單頁應用，並使用了現代 JavaScript 範式，代表專業等級的前端開發。

**掌握的關鍵概念**：
- **ES6 類別架構**：組織良好且易維護的程式碼結構
- **Async/Await 範式**：現代非同步程式設計
- **事件驅動程式設計**：響應式使用者介面設計
- **安全最佳實務**：XSS 防護與輸入驗證

**產業連結**：您學到的模式（基於類別的架構、非同步操作、DOM 操作）是現代框架如 React、Vue 和 Angular 的基礎。您正在以與生產環境應用相同的設計思維搭建。

**反思問題**：您會如何擴展這個聊天應用來處理多重會話或使用者認證？思考需要哪些架構上的變動，以及類別結構將如何演進。

### 為您的聊天介面設計樣式

現在讓我們用 CSS 創造一個現代且視覺吸引的聊天介面。良好的樣式讓您的應用看起來更專業，也提升用戶整體體驗。我們將使用 Flexbox、CSS Grid 及自訂屬性等現代 CSS 技術，打造響應式且易用的設計。

建立 `styles.css`，內容包含完整的樣式：

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

**理解 CSS 架構：**
- **運用** CSS 自訂屬性（變數）以確保主題一致及方便維護
- **採用** Flexbox 佈局，提供響應式設計及精準對齊
- **包含** 平滑的訊息出現動畫，且不會讓人分心
- **呈現** 使用者訊息、AI 回覆及錯誤狀態的視覺區分
- **支援** 桌面與行動裝置上良好的響應式設計
- **考慮** 減少動態偏好及合適的對比度以照顧無障礙需求
- **提供** 根據系統偏好變換深色模式支援

### 配置您的後端 URL

最後一步是更新 JavaScript 中的 `BASE_URL`，使其對應您的後端伺服器：

```javascript
// 用於本地開發
this.BASE_URL = "http://localhost:5000";

// 用於 GitHub Codespaces（請替換為您的實際 URL）
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**決定您的後端 URL：**
- **本機開發**：若前後端同時在本機執行，使用 `http://localhost:5000`
- **Codespaces**：在 Ports 分頁中將 5000 埠口公開後，即可找到您的後端 URL
- **正式上線**：部署於主機服務時，請換成您的實際網域

> 💡 **測試小技巧**：您可以直接在瀏覽器訪問根目錄 URL 測試後端。應該可以看到 FastAPI 伺服器的歡迎訊息。



## 測試與部署

前後端元件都建置完成後，讓我們測試所有功能是否正常，並探索如何部署以分享您的聊天助理。

### 本機測試流程

按照下列步驟測試完整應用：

```mermaid
graph TD
    A[啟動後端伺服器] --> B[設定環境變數]
    B --> C[測試 API 端點]
    C --> D[在瀏覽器開啟前端]
    D --> E[測試聊天功能]
    E --> F[除錯任何問題]
```
**逐步測試過程：**

1. **啟動後端伺服器**：
   ```bash
   cd backend
   source venv/bin/activate  # 或者在 Windows 上使用 venv\Scripts\activate
   python api.py
   ```

2. **驗證 API 正常運作**：
   - 在瀏覽器開啟 `http://localhost:5000`
   - 您應該會看到 FastAPI 伺服器的歡迎訊息

3. **開啟前端**：
   - 前往前端資料夾
   - 在瀏覽器中打開 `index.html`
   - 或使用 VS Code 的 Live Server 擴充套件，獲得更佳的開發體驗

4. **測試聊天功能**：
   - 在輸入欄輸入訊息
   - 點擊「送出」或按 Enter 鍵
   - 確認 AI 能正常回覆
   - 檢查瀏覽器主控台有無 JavaScript 錯誤

### 常見問題排解

| 問題 | 症狀 | 解決方案 |
|---------|----------|----------|
| **CORS 錯誤** | 前端無法存取後端 | 確認 FastAPI 的 CORSMiddleware 已正確設定 |
| **API 金鑰錯誤** | 回傳 401 未授權 | 檢查您的 `GITHUB_TOKEN` 環境變數 |
| **連線拒絕** | 前端出現網路錯誤 | 確認後端 URL 正確且 FastAPI 伺服器正在執行 |
| **無 AI 回應** | 空白回覆或錯誤反應 | 查看後端日誌是否有 API 配額或認證問題 |

**一般除錯步驟：**
- **檢查** 瀏覽器開發工具主控台是否有 JavaScript 錯誤
- **確認** 網路分頁顯示 API 請求及回應成功
- **檢視** 後端終端機輸出是否有 Python 錯誤或 API 問題
- **確定** 環境變數正確載入且可被取得

## 📈 您的 AI 應用開發掌握時程

```mermaid
timeline
    title 完整的 AI 應用開發旅程
    
    section AI 基礎
        了解生成式 AI
            : 掌握模式識別概念
            : 精通 AI 參數控制
            : 學習提示工程技巧
        
        GitHub 模型整合
            : 熟悉 AI 服務平台
            : 安全處理身份驗證
            : 優化模型參數
    
    section 後端開發
        Python API 架構
            : 建立 FastAPI 應用
            : 實作異步操作
            : 創建安全端點
        
        AI 服務整合
            : 連接外部 AI API
            : 處理速率限制
            : 實作錯誤邊界
    
    section 前端精通
        現代 JavaScript 模式
            : 精通 ES6 類架構
            : 實作 async/await 流程
            : 建立響應式介面
        
        即時用戶體驗
            : 創建動態聊天介面
            : 處理加載狀態
            : 優化用戶互動
    
    section 生產準備
        安全與效能
            : 實作安全令牌管理
            : 防範 XSS 漏洞
            : 優化 API 效能
        
        專業部署
            : 建構可擴展架構
            : 建立可維護代碼
            : 撰寫開發文件
```
**🎓 畢業里程碑**：您已順利打造完整的 AI 驅動應用，採用與現代 AI 助理相同的技術與架構模式。這些技能代表了傳統網頁開發與前沿 AI 整合的交匯點。

**🔄 進階能力**
- 準備探索高階 AI 框架（LangChain、LangGraph）
- 已具備打造多模態 AI 應用（文本、影像、語音）的能力
- 能實作向量資料庫與檢索系統
- 基礎已建立，準備進一步進行機器學習與 AI 模型微調

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式完成以下挑戰：

**描述**：強化聊天助理，加入對話紀錄與消息持久化功能。此挑戰將幫助您了解如何在聊天應用管理狀態，以及實作資料儲存以提升用戶體驗。

**提示**：修改聊天應用，加入可跨會話持久化的對話歷史。新增功能將聊天訊息保存至本地儲存，載入頁面時顯示歷史紀錄，並設置「清除歷史」按鈕。同時實作輸入指示器和訊息時間戳，讓聊天體驗更真實。

在此處了解更多關於 [agent 模式](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)。

## 作業：打造您的個人 AI 助手

現在輪到您創建自己的 AI 助手實作。這不只是複製教學程式碼，是一個運用所學、建立符合您興趣與需求的專案機會。

### 專案需求

讓我們使用乾淨且有組織的結構來設定您的專案：

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

### 核心實作任務

**後端開發：**
- **以** 我們的 FastAPI 程式碼為基礎並加以個人化
- **創建** 獨特的 AI 個性，或許是有幫助的烹飪助理、創意寫作夥伴，或讀書好朋友？
- **新增** 完善的錯誤處理，確保應用遇錯不崩潰
- **撰寫** 清楚的文件，幫助任何人理解您的 API 運作方式

**前端開發：**
- **打造** 一個直覺且親切的聊天介面
- **撰寫** 乾淨且符合現代標準的 JavaScript，讓其他開發者也讚賞
- **設計** 反映您 AI 個性的自訂風格，活潑又繽紛？或是乾淨簡約？任您決定！
- **確保** 同時在手機與電腦上運作良好

**個人化需求：**
- **選擇** 獨特的 AI 助手名字與個性，或許反映您的興趣或想解決的問題
- **自訂** 視覺設計以符合助理的風格
- **撰寫** 吸引人的歡迎訊息，讓用戶想開始聊天
- **測試** 您的助理，問不同類型問題，看它如何回應

### 強化構想（選擇性）

想要讓專案更有趣？探索以下創意：

| 功能 | 描述 | 您將練習的技能 |
|---------|-------------|------------------------|
| **訊息歷史** | 頁面重新整理後仍記憶對話 | 使用 localStorage、JSON 處理 |
| **輸入指示器** | 顯示「AI 正在輸入...」等待回應時 | CSS 動畫、非同步程式 |
| **訊息時間戳** | 顯示每則訊息的傳送時間 | 日期時間格式化、用戶體驗設計 |
| **匯出聊天** | 讓使用者下載對話紀錄 | 檔案處理、資料匯出 |
| **主題切換** | 輕/暗模式切換 | CSS 變數、使用者偏好 |
| **語音輸入** | 加入語音轉文字功能 | 網頁 API、無障礙功能 |

### 測試與文件撰寫

**品質保證：**
- **測試** 各種輸入類型及邊界條件
- **驗證** 響應式設計在不同尺寸螢幕的效果
- **檢查** 無障礙性是否支持鍵盤導航和螢幕閱讀器
- **驗證** HTML 和 CSS 是否符合標準規範

**文件要求：**
- **撰寫** README.md 解釋您的專案與運行方式
- **包含** 操作中聊天介面的截圖
- **說明** 您加入的獨特功能或自訂項目
- **提供** 清楚的設定指引給其他開發者

### 提交指南

**專案交付物：**
1. 含所有原始碼的完整專案資料夾
2. 含專案描述與設定說明的 README.md
3. 展示聊天助理運作的截圖
4. 簡短心得分享學到什麼與遇到的挑戰

**評分標準：**
- **功能性**：聊天助理是否如預期運作？
- **程式碼品質**：程式碼是否組織良好、有註解且易維護？
- **設計**：介面是否美觀且友善使用者？
- **創意度**：您的實作有多獨特且具個人風格？
- **文件**：設定指示是否清晰完整？

> 💡 **成功秘訣**：先從基本需求做起，確保核心體驗完整，再逐步增加強化功能。

## 解答

[Solution](./solution/README.md)

## 額外挑戰

準備好讓您的 AI 助手更上一層樓了嗎？試試以下進階挑戰，加深您對 AI 整合與網頁開發的理解。

### 個性化設定

真正的魔力來自於為您的 AI 助手賦予獨特個性。試著使用不同系統提示，創造專門助理：

**專業助理範例：**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**創意寫作助理範例：**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**技術導師範例：**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### 前端強化

用這些視覺及功能改進，讓您的聊天介面更棒：

**進階 CSS 功能：**
- **實現** 流暢的訊息動畫與過渡效果
- **加入** 自訂聊天泡泡設計，使用 CSS 形狀與漸層
- **製作** 輸入指示器動畫，顯示 AI 「思考中」
- **設計** 表情符號回應或訊息評分系統

**JavaScript 強化功能：**
- **加入** 鍵盤捷徑（Ctrl+Enter 送出，Escape 清除輸入）
- **實作** 訊息搜尋與篩選功能
- **創建** 對話匯出功能（下載成文字或 JSON）
- **新增** 自動存檔至 localStorage，防止訊息遺失

### 進階 AI 整合

**多種 AI 個性：**
- **建立** 選單切換不同 AI 個性
- **保存** 使用者偏好個性於 localStorage
- **實作** 上下文切換功能，保持對話連貫

**智慧回應功能：**
- **加入** 對話上下文意識（AI 記得之前訊息）
- **根據對話主題** 實作智能建議
- **為常見問題** 創建快速回覆按鈕

> 🎯 **學習目標**：這些額外挑戰幫助你理解用於生產應用程序的高級網頁開發模式和 AI 集成技術。

## 總結與下一步

恭喜！你已成功從零開始構建了一個完整的 AI 驅動聊天助理。這個專案讓你親手體驗了現代網頁開發技術和 AI 集成——這些技能在當今科技領域越來越具價值。

### 你已達成的目標

在整個課程中，你掌握了幾項關鍵技術和概念：

**後端開發：**
- **集成** GitHub Models API 以實現 AI 功能
- **構建** 使用 Flask 的 RESTful API，並具備完善的錯誤處理
- **實作** 使用環境變數的安全認證
- **配置** CORS 以支持前後端跨來源請求

**前端開發：**
- **創建** 使用語義化 HTML 的響應式聊天介面
- **實作** 具備 async/await 和類別架構的現代 JavaScript
- **設計** 使用 CSS Grid、Flexbox 和動畫的吸引人介面
- **新增** 無障礙功能與響應式設計原則

**全端整合：**
- **連接** 前端與後端透過 HTTP API 呼叫
- **處理** 即時使用者互動與非同步數據流
- **實作** 錯誤處理與用戶反饋
- **測試** 從用戶輸入到 AI 回應的完整應用程序流程

### 主要學習成果

```mermaid
mindmap
  root((AI 聊天應用技能))
    API Integration
      Authentication
      Error Handling
      Async Programming
    Web Development
      HTML5 語意
      現代 CSS
      ES6+ JavaScript
    User Experience
      響應式設計
      可及性
      即時互動
    AI Understanding
      提示工程
      模型參數
      對話流程
```  
此專案讓你了解構建 AI 驅動應用的基本原理，這代表了網頁開發的未來。你現在懂得如何將 AI 能力整合到傳統網頁應用中，打造感覺智能且回應迅速的使用者體驗。

### 專業應用

你在本課程中所學的技能，可直接應用於現代軟體開發職涯：

- 使用現代框架和 API 進行 **全端網頁開發**
- 在網頁和行動應用中進行 **AI 集成**
- 為微服務架構設計與開發 **API**
- 著重無障礙和響應式設計的 **用戶介面開發**
- 包括環境配置與部署的 **DevOps 實務**

### 持續你的 AI 開發之路

**下一階段學習：**
- **探索** 更先進的 AI 模型與 API（GPT-4、Claude、Gemini）
- **學習** 提示工程技巧以提升 AI 回應效果
- **研究** 對話設計與聊天機器人用戶體驗原則
- **調查** AI 安全、倫理與負責任的 AI 開發實務
- **構建** 具備對話記憶和上下文感知的更複雜應用

**進階專案點子：**
- 多人聊天室與 AI 管理
- AI 驅動的客服聊天機器人
- 個人化學習的教育輔導助理
- 具不同 AI 個性化的創意寫作夥伴
- 為開發者打造的技術文件助理

## 使用 GitHub Codespaces 開始

想在雲端開發環境中嘗試這個專案嗎？GitHub Codespaces 提供完整的開發環境，直接在瀏覽器中運行，非常適合實驗 AI 應用，無需本地設置。

### 設置你的開發環境

**步驟 1：從範本建立**
- **前往** [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)
- **點擊** 右上角的「Use this template」（確保已登入 GitHub）

![Create from template interface showing the green "Use this template" button](../../../translated_images/hk/template.67ad477109d29a2b.webp)

**步驟 2：啟動 Codespaces**
- **打開** 剛建立的儲存庫
- **點擊** 綠色「Code」按鈕，選擇「Codespaces」
- **選擇** 「Create codespace on main」開始你的開發環境

![Create codespace interface with options for launching cloud development environment](../../../translated_images/hk/codespace.bcecbdf5d2747d3d.webp)

**步驟 3：環境配置**
你的 Codespace 載入後，即可使用：
- **預裝** Python、Node.js 和所有必要開發工具
- 帶有網頁開發擴充的 **VS Code 介面**
- 用於執行後端與前端伺服器的 **終端機**
- 用於測試應用的 **連接埠轉發**

**Codespaces 提供：**
- **免除** 本地環境設置與配置問題
- **提供** 在不同裝置間一致的開發環境
- **包含** 預配置的工具與網頁開發擴充
- **提供** 與 GitHub 無縫整合的版本控制和協作

> 🚀 **專家提示**：Codespaces 非常適合學習和原型設計 AI 應用，因其自動處理所有複雜環境配置，讓你專注於開發與學習，而非排除配置問題。

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件乃使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 翻譯所得。雖然我們力求準確，但請注意自動翻譯可能包含錯誤或不準確之處。原始文件之母語版本應視為權威來源。對於重要資訊，建議採用專業人工翻譯。我們對因使用此翻譯而產生之任何誤解或誤釋概不負責。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->