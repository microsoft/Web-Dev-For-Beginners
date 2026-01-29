# 使用 AI 建立聊天助手

還記得《星際爭霸戰》中，船員們會隨意與船上的電腦聊天，問它複雜的問題並獲得深思熟慮的回應嗎？在1960年代看似純屬科幻的事情，如今你可以利用你已經熟悉的網頁技術來構建。

在本課程中，我們將使用 HTML、CSS、JavaScript 以及一些後端整合來打造一個 AI 聊天助手。你會發現，透過你已經學習的技能，能連接到可理解上下文並產生有意義回應的強大 AI 服務。

想像 AI 如同你擁有一個龐大的圖書館，不僅能找到資訊，還能把資訊綜合成連貫的答案，並依你具體的問題量身訂做。你不必翻閱成千上萬頁，而是直接獲得有脈絡的回應。

這個整合透過你熟悉的網頁技術協同工作完成。HTML 建立聊天介面，CSS 處理視覺設計，JavaScript 管理使用者互動，後端 API 將每個部分連接到 AI 服務。這彷彿管弦樂團中不同部門共同合作演奏交響曲。

我們本質上是在建立人類自然溝通與機器處理之間的橋梁。你將學習 AI 服務整合的技術實作以及讓互動感覺直覺的設計模式。

課程結束時，AI 整合將不再是神祕的過程，而像是你可以使用的另一個 API。你會了解驅動 ChatGPT、Claude 等應用的基礎架構模式，並使用你已經學習的網頁開發原則。

## ⚡ 接下來5分鐘你可以做什麼

**忙碌開發者快速入門路徑**

```mermaid
flowchart LR
    A[⚡ 5 分鐘] --> B[取得 GitHub 令牌]
    B --> C[測試 AI 遊樂場]
    C --> D[複製 Python 程式碼]
    D --> E[查看 AI 回應]
```
- **第1分鐘**：造訪 [GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) 並創建個人存取權杖
- **第2分鐘**：直接在 Playground 介面測試 AI 互動
- **第3分鐘**：點選「Code」頁籤並複製 Python 程式碼片段
- **第4分鐘**：使用你的權杖在本機執行程式碼：`GITHUB_TOKEN=your_token python test.py`
- **第5分鐘**：觀看你的第一個 AI 回應從自行程式碼生成

**快速測試程式碼**：
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

**重要原因**：5分鐘內，你就能體驗程式化 AI 互動的魔力。這代表著每個 AI 應用的基本區塊。

下面是完成的專案示意圖：

![聊天應用介面顯示使用者與 AI 助理的對話](../../../translated_images/zh-TW/screenshot.0a1ee0d123df681b.webp)

## 🗺️ 你的 AI 應用開發學習旅程

```mermaid
journey
    title 從網頁開發到 AI 整合
    section 了解 AI 基礎
      發掘生成式 AI 概念: 4: You
      探索 GitHub Models 平台: 6: You
      精通 AI 參數與提示詞: 8: You
    section 後端整合
      建置 Python API 伺服器: 5: You
      實作 AI 函式呼叫: 7: You
      處理非同步操作: 8: You
    section 前端開發
      創建現代聊天介面: 6: You
      精通即時互動: 8: You
      建置響應式使用者體驗: 9: You
    section 專業應用
      部署完整 AI 系統: 7: You
      優化效能模式: 8: You
      創建生產環境應用: 9: You
```
**你的目標**：課程結束時，你將構建出一個完整的 AI 驅動應用，使用構成現代 AI 助理（如 ChatGPT、Claude 和 Google Bard）背後的相同技術與模式。

## 了解 AI：從神秘到掌握

在深入程式碼前，先了解我們正在使用的是什麼。如果你之前用過 API，你會知道基本模式是：送出請求，拿到回應。

AI API 也遵循類似架構，但它不是從資料庫檢索預先儲存的資料，而是根據從大量文本中學習到的模式產生新的回應。想像這就像圖書館目錄系統與知識淵博的圖書館員的差別，後者能從多個來源綜合資訊。

### 什麼是「生成式 AI」？

試想羅塞塔石碑如何幫助學者理解埃及象形文字，藉由找到已知與未知語言間的對應模式。AI 模型也是如此——它從海量文字中找出語言運作的規律，然後利用這些規律對新問題生成合適回應。

**用簡單比較說明：**
- **傳統資料庫**：像是索取你的出生證明——每次得到的都是完全相同文件
- **搜尋引擎**：像是請圖書館員找有關貓的書籍——他們會展示可用資料
- **生成式 AI**：像是詢問一位懂貓的朋友——他會用自己的話講述有趣內容，且依你想知道的調整說法

```mermaid
graph LR
    A[您的問題] --> B[人工智慧模型]
    B --> C[模式識別]
    C --> D[內容生成]
    D --> E[情境回應]
    
    F[訓練數據<br/>書籍、文章、網站] --> B
```
### AI 模型如何學習（簡化版）

AI 模型透過接觸包含書籍、文章、對話等的龐大資料集學習。過程中，它們發現以下模式：
- 書面溝通中思想的結構
- 常搭配出現的詞彙組合
- 對話的典型流程
- 正式與非正式溝通的語境差異

**這類似考古學家破解古文明語言**：他們分析數千個樣本以理解語法、詞彙及文化背景，最終能以學到的模式解讀新文本。

### 為何選 GitHub Models？

我們使用 GitHub Models 是因為實務考量——它讓我們能使用企業等級 AI，無需自行架設 AI 基礎設施（相信我，你現在不想自己弄！）。這就像用氣象 API，而不是自己設置氣象站預測天氣。

基本上是「AI 即服務」，最好的是你可以免費開始，隨意嘗試不用怕帳單爆表。

```mermaid
graph LR
    A[前端聊天介面] --> B[你的後端 API]
    B --> C[GitHub 模型 API]
    C --> D[AI 模型處理]
    D --> C
    C --> B
    B --> A
```
我們會使用 GitHub Models 作為後端整合，透過開發者友善介面，取得專業級 AI 功能。[GitHub Models Playground](https://github.com/marketplace/models/azure-openai/gpt-4o-mini/playground) 是測試環境，你可以在那試驗不同 AI 模型，理解它們的能力後再寫程式碼實作。

## 🧠 AI 應用開發生態系統

```mermaid
mindmap
  root((AI 發展))
    理解 AI
      生成模型
        模式識別
        內容生成
        上下文理解
        回應合成
      AI 參數
        溫度控制
        令牌限制
        Top-p 篩選
        系統提示
    後端架構
      API 整合
        GitHub 模型
        認證
        請求處理
        錯誤管理
      Python 基礎架構
        FastAPI 框架
        非同步操作
        環境安全
        CORS 配置
    前端體驗
      聊天介面
        即時更新
        訊息歷史
        使用者回饋
        加載狀態
      現代網路技術
        ES6 類別
        Async/Await
        DOM 操作
        事件處理
    專業範式
      安全最佳實踐
        令牌管理
        輸入驗證
        XSS 防護
        錯誤邊界
      生產準備
        性能優化
        響應式設計
        易用性
        測試策略
```
**核心原則**：AI 應用開發結合傳統網頁開發技巧與 AI 服務整合，打造對使用者來說自然且反應靈敏的智慧應用。

![GitHub Models AI Playground 介面，包含模型選擇及測試區](../../../translated_images/zh-TW/playground.d2b927122224ff8f.webp)

**Playground 這麼好用的原因：**
- **試用** 不同 AI 模型如 GPT-4o-mini、Claude 等（皆免費！）
- **測試** 你的構想與提示詞，先行驗證
- **取得** 你偏好的程式語言現成程式碼範例
- **調整** 創意程度與回應長度，觀察輸出效果差異

玩過一輪後，只要點「Code」頁籤，選擇程式語言，就能取得所需實作程式碼。

![Playground 選擇顯示不同程式語言的程式碼產生選項](../../../translated_images/zh-TW/playground-choice.1d23ba7d407f4758.webp)

## 設定 Python 後端整合

現在我們用 Python 實作 AI 整合。Python 是 AI 應用好選擇，因其簡潔語法與強大函式庫。我們會從 GitHub Models playground 的程式碼開始，然後重構為一個可重複使用、適合生產環境的函式。

### 了解基礎實作

從 playground 複製的 Python 程式碼看起來會像這樣。第一次因為有點多不要擔心，我們逐段解釋：

```python
"""Run this model in Python

> pip install openai
"""
import os
from openai import OpenAI

# 要對模型進行驗證，您需要在 GitHub 設定中產生個人存取權杖 (PAT)。
# 請依照此處說明建立您的 PAT 權杖：https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
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

**程式碼說明：**
- **匯入** 必要工具：`os` 用來讀取環境變數，`OpenAI` 用來跟 AI 通訊
- **設定** OpenAI 用戶端指向 GitHub 的 AI 伺服器，而非直接連接 OpenAI
- **驗證** 使用特別的 GitHub 權杖（稍後詳述！）
- **規劃** 聊天內容各種「角色」——就像為劇本設演出場景
- **傳送** 請求給 AI 並帶入微調的參數
- **取出** 回傳資料中真正的回應文字內容

### 理解訊息角色：AI 對話架構

AI 對話有特定結構，不同「角色」負責不同目的：

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

**就像導演一齣戲：**
- **系統角色**：猶如演員的舞台指令——告訴 AI 怎麼表現、要有什麼個性、怎麼回答
- **使用者角色**：實際使用者傳來的問題或訊息
- **助理角色**：AI 的回應（你不會傳送這個，但它會存在對話歷史中）

**生活中類比**：想像你在派對介紹朋友：
- **系統訊息**：「這是我朋友 Sarah，醫生，擅長用簡單語言說明醫學概念」
- **用戶訊息**：「你能解釋疫苗是怎麼運作的嗎？」
- **助理回應**：Sarah 會像親切醫生回答，而不是律師或廚師

### 了解 AI 參數：微調回應行為

AI API 呼叫中的數值參數控制模型生成回應的方式。你可以藉此調整 AI 行為，符合不同用途：

#### 溫度（Temperature，0.0 到 2.0）：創意調節旋鈕

**作用**：控制 AI 回應的創意或可預測程度。

**可以想成爵士樂手的即興程度：**
- **Temperature = 0.1**：每次演奏同一旋律（高度可預測）
- **Temperature = 0.7**：帶點變化又仍能識別的旋律（平衡創意）
- **Temperature = 1.5**：完全實驗性的爵士樂，有意料之外的轉折（高度不可預測）

```python
# 非常可預測的回答（適合事實性問題）
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "What is 2+2?"}],
    temperature=0.1  # 幾乎總是會說「4」
)

# 有創意的回答（適合腦力激盪）
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Write a creative story opening"}],
    temperature=1.2  # 會生成獨特且出乎意料的故事
)
```

#### 最大標記數（Max Tokens，1 到 4096+）：回應長度控制器

**作用**：限制 AI 回應的長度。

**標記大約等同英文單字**（約 1 標記 = 0.75 英文單字）：
- **max_tokens=50**：短小精悍（像簡訊）
- **max_tokens=500**：一兩段可讀段落
- **max_tokens=2000**：詳盡說明附示例

```python
# 簡短、扼要的回答
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=100  # 強制進行簡短說明
)

# 詳盡、全面的回答
response = client.chat.completions.create(
    messages=[{"role": "user", "content": "Explain JavaScript"}],
    max_tokens=1500  # 允許詳細說明並附上範例
)
```

#### 聚焦度（Top_p，0.0 到 1.0）：聚焦參數

**作用**：控制 AI 回應聚焦於最可能的詞彙範圍。

**想像 AI 有龐大詞彙庫，詞彙依可能性排序：**
- **top_p=0.1**：只考慮前10%最可能的詞（非常聚焦）
- **top_p=0.9**：考慮90%可能詞彙（較有創意）
- **top_p=1.0**：全部納入考量（最大變化度）

**舉例**：當你問「天空通常是...」
- **低 top_p**：幾乎一定回答「藍色」
- **高 top_p**：可能回答「藍色」、「多雲」、「廣闊」、「變化莫測」、「美麗」等等

### 組合參數：不同用途的範本配置

```python
# 用於提供事實性且一致的答案（如文件機器人）
factual_params = {
    "temperature": 0.2,
    "max_tokens": 300,
    "top_p": 0.3
}

# 用於創意寫作輔助
creative_params = {
    "temperature": 1.1,
    "max_tokens": 1000,
    "top_p": 0.9
}

# 用於對話式且有幫助的回應（平衡）
conversational_params = {
    "temperature": 0.7,
    "max_tokens": 500,
    "top_p": 0.8
}
```

```mermaid
quadrantChart
    title AI 參數優化矩陣
    x-axis 低創造力 --> 高創造力
    y-axis 短回應 --> 長回應
    
    quadrant-1 創意內容
    quadrant-2 詳細分析
    quadrant-3 快速事實
    quadrant-4 會話式 AI
    
    Documentation Bot: [0.2, 0.3]
    Customer Service: [0.4, 0.4]
    General Assistant: [0.7, 0.5]
    Creative Writer: [0.9, 0.9]
    Brainstorming Tool: [0.8, 0.8]
```
**理解為何參數重要**：不同應用需要不同類型回應。客服機器人應該一致且事實為主（低溫度），創意寫作助理則需富想像且多變（高溫度）。懂得這些參數，能掌握 AI 的個性與回答風格。
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

**理解這個改良函式：**
- **接受**兩個參數：用戶提示詞及選填系統訊息
- **提供**預設系統訊息以維持通用助手行為
- **使用**適當 Python 型別提示，促進程式碼維護
- **包含**詳盡文件字串說明函式用途與參數
- **只回傳**回應內容，方便用於後端 API
- **保持**相同模型參數，確保 AI 行為一致

### 系統提示的魔力：編程 AI 性格

如果參數控制 AI 怎麼思考，系統提示控制 AI 覺得自己是誰。說實話，這是與 AI 工作中最酷的部分之一——你基本上是給 AI 一個完整的個性、專業水準和溝通風格。

**把系統提示想成為不同角色挑角**：不只是擁有一個通用助手，你可以創造各種專家角色。需要有耐心的老師？創意腦力激盪夥伴？嚴肅的商務顧問？改變系統提示即可！

#### 為何系統提示這麼強大

這點很有趣：AI 模型在訓練時見過無數人扮演不同角色和專業水平的對話。當你給 AI 一個明確角色時，彷彿啟動了所有已學到的相關語言模式。

**這就像 AI 的角色扮演法**：告訴演員「你是一位睿智的老教授」，你會看到他們自動調整姿態、用詞和舉止。AI 對語言模式的處理非常類似。

#### 打造有效系統提示的藝術與科學

**優秀系統提示結構：**
1. **角色/身份定位**：AI 是誰？
2. **專業領域**：它懂什麼？
3. **溝通風格**：怎麼說話？
4. **具體指令**：要聚焦什麼？

```python
# ❌ 模糊的系統提示
"You are helpful."

# ✅ 詳細且有效的系統提示
"You are Dr. Sarah Chen, a senior software engineer with 15 years of experience at major tech companies. You explain programming concepts using real-world analogies and always provide practical examples. You're patient with beginners and enthusiastic about helping them understand complex topics."
```

#### 帶情境的系統提示範例

看看不同系統提示如何塑造截然不同的 AI 個性：

```python
# 範例 1：耐心的老師
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

# 範例 3：策略性商業顧問
business_prompt = """
You are a strategic business consultant with an MBA and 20 years of experience 
helping startups scale. You think in frameworks, provide structured advice, 
and always consider both short-term tactics and long-term strategy. You ask 
probing questions to understand the full business context before giving advice.
"""
```

#### 看系統提示如何影響回應

用相同問題搭配不同系統提示，觀察回應大不同：

**問題**：「我該如何在網頁應用裡處理使用者身份驗證？」

```python
# 使用教師提示：
teacher_response = call_llm(
    "How do I handle user authentication in my web app?",
    teacher_prompt
)
# 典型回應：「好問題！讓我們把身份驗證分解成簡單步驟。
# 想像它像夜店保全檢查身分證……」

# 使用商業提示：
business_response = call_llm(
    "How do I handle user authentication in my web app?", 
    business_prompt
)
# 典型回應：「從策略角度來看，身份驗證對於用戶
# 信任和法規遵循至關重要。讓我提出一個考慮安全性、
# 用戶體驗和可擴展性的框架……」
```

#### 進階系統提示技巧

**1. 情境設置**：給 AI 背景資訊
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
  
**3. 約束條件設定**：定義 AI 不該做的事情  
```python
system_prompt = """
You are a coding tutor focused on teaching best practices. Never write complete 
solutions for the user - instead, guide them with hints and questions so they 
learn by doing. Always explain the 'why' behind coding decisions.
"""
```
  
#### 這對您的聊天助手為何重要

理解系統提示讓您擁有強大能力來創造專門化的 AI 助手：  
- **客服機器人**：有幫助、有耐心、瞭解政策  
- **學習導師**：鼓勵式、逐步引導、檢查理解  
- **創意夥伴**：富有想像力、擴展點子、提問「如果…怎麼辦？」  
- **技術專家**：精確、詳細、注重安全  

**關鍵見解**：您不只是呼叫一個 AI API——您是在打造一個符合您特定用例的客製化 AI 個性。這就是現代 AI 應用感覺上量身訂製且實用，而非通用的原因。  

### 🎯 教學檢測：AI 個性程式設計

**暫停與反思**：您剛學會透過系統提示程式設計 AI 個性。這是現代 AI 應用開發的一項基本技能。  

**快速自我評估**：  
- 您能解釋系統提示與一般使用者訊息的不同嗎？  
- temperature 與 top_p 參數有何差異？  
- 您會如何為特定用例（例如程式教學）創建系統提示？  

**實務連結**：您學到的系統提示技術被所有主要 AI 應用使用——從 GitHub Copilot 的程式輔助到 ChatGPT 的對話介面。您正在掌握大型科技公司 AI 產品團隊的相同模式。  

**挑戰問題**：您如何設計針對不同用戶類型（初學者 vs 專家）的不同 AI 個性？想想同一底層 AI 模型如何透過提示工程服務不同受眾。  

## 使用 FastAPI 建置 Web API：您的高效能 AI 溝通樞紐

現在讓我們建立將前端連接到 AI 服務的後端。我們將使用 FastAPI，這是一個專為 AI 應用打造的現代 Python 框架。  

FastAPI 提供多項優勢：內建非同步支持以處理並行請求、自動生成 API 文件以及極佳效能。您的 FastAPI 伺服器充當中介，接收前端請求、與 AI 服務溝通並返回格式化回應。  

### 為什麼選 FastAPI 作為 AI 應用？

您可能會想：「我不能直接從前端 JavaScript 呼叫 AI 嗎？」或「為什麼要選 FastAPI 而不是 Flask 或 Django？」好問題！  

**這就是為什麼 FastAPI 非常適合我們的專案：**  
- **預設非同步**：可以同時處理多個 AI 請求而不會卡住  
- **自動文件**：造訪 `/docs` 即可免費獲得漂亮互動 API 文件頁面  
- **內建驗證**：在錯誤發生前捕獲問題  
- **極速效能**：是 Python 框架中速度最快的之一  
- **現代 Python**：使用最新最優的 Python 功能  

**而且我們為何需要後端：**  

**安全性**：您的 AI API 金鑰就像密碼——如果放在前端 JavaScript，任何查看網站原始碼的人都能偷走並用您的 AI 點數。後端可保護敏感憑證安全。  

**頻率限制與管控**：後端可以控制用戶的請求頻率、實現用戶認證和加入日誌紀錄以追蹤使用情況。  

**資料處理**：您可能想保存對話、過濾不當內容或整合多個 AI 服務。這些邏輯都放在後端。  

**架構類似用戶端－伺服器模型：**  
- **前端**：互動的使用介面層  
- **後端 API**：請求處理與路由層  
- **AI 服務**：外部計算與回應生成  
- **環境變數**：安全設定與憑證儲存  

### 理解請求 - 回應流程

讓我們追蹤使用者發送訊息時發生什麼事：  

```mermaid
sequenceDiagram
    participant User as 👤 使用者
    participant Frontend as 🌐 前端
    participant API as 🔧 FastAPI 伺服器
    participant AI as 🤖 人工智慧服務
    
    User->>Frontend: 輸入 "Hello AI!"
    Frontend->>API: POST /hello {"message": "Hello AI!"}
    Note over API: 驗證請求<br/>加入系統提示
    API->>AI: 傳送格式化請求
    AI->>API: 回傳 AI 回應
    Note over API: 處理回應<br/>記錄對話
    API->>Frontend: {"response": "Hello! How can I help?"}
    Frontend->>User: 顯示 AI 訊息
```  
**理解每一步驟：**  
1. **用戶互動**：人員在聊天介面輸入訊息  
2. **前端處理**：JavaScript 捕捉輸入並格式化為 JSON  
3. **API 驗證**：FastAPI 使用 Pydantic 模型自動驗證請求  
4. **AI 整合**：後端加入上下文（系統提示）並呼叫 AI 服務  
5. **回應處理**：API 接收 AI 回應並可視需要修改  
6. **前端顯示**：JavaScript 顯示回應於聊天介面  

### 理解 API 架構  

```mermaid
sequenceDiagram
    participant Frontend
    participant FastAPI
    participant AI Function
    participant GitHub Models
    
    Frontend->>FastAPI: POST /hello {"message": "你好 AI！"}
    FastAPI->>AI Function: call_llm(message, system_prompt)
    AI Function->>GitHub Models: API 請求
    GitHub Models->>AI Function: AI 回應
    AI Function->>FastAPI: 回應文字
    FastAPI->>Frontend: {"response": "你好！我能如何幫助你？"}
```  
```mermaid
flowchart TD
    A[使用者輸入] --> B[前端驗證]
    B --> C[HTTP POST 請求]
    C --> D[FastAPI 路由]
    D --> E[Pydantic 驗證]
    E --> F[AI 函式呼叫]
    F --> G[GitHub 模型 API]
    G --> H[回應處理]
    H --> I[JSON 回應]
    I --> J[前端更新]
    
    subgraph "安全層"
        K[CORS 中介軟體]
        L[環境變數]
        M[錯誤處理]
    end
    
    D --> K
    F --> L
    H --> M
```  
### 建立 FastAPI 應用程式

讓我們一步步建構 API。建立名為 `api.py` 的檔案並填入以下 FastAPI 代碼：  

```python
# api.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from llm import call_llm
import logging

# 設定日誌紀錄
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# 建立 FastAPI 應用程式
app = FastAPI(
    title="AI Chat API",
    description="A high-performance API for AI-powered chat applications",
    version="1.0.0"
)

# 設定跨來源資源共享 (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 為生產環境進行適當設定
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
        
        # 呼叫 AI 服務（注意：為提升效能，call_llm 應改為非同步）
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
  
**理解 FastAPI 實作：**  
- **匯入** FastAPI 提供現代網頁框架功能，Pydantic 負責資料驗證  
- **建立** 自動 API 文件（伺服器啟動後可於 `/docs` 訪問）  
- **啟用** CORS 中介軟體允許不同來源前端請求  
- **定義** Pydantic 模型用於自動請求/回應驗證與文件生成  
- **使用** 非同步端點以提升同時請求性能  
- **實作** 適當 HTTP 狀態碼及錯誤處理，搭配 HTTPException  
- **包含** 結構化日誌便於監控與除錯  
- **提供** 健康檢查端點以監控服務狀態  

**FastAPI 相較於傳統框架的主要優勢：**  
- **自動驗證**：Pydantic 模型確保處理前資料正確無誤  
- **互動文件**：造訪 `/docs` 獲得自動生成、可測試的 API 文件  
- **型別安全**：Python 類型註解防止執行時錯誤並提升程式品質  
- **非同步支持**：同時處理多個 AI 請求不會阻塞  
- **效能優越**：大幅提升實時應用的請求處理速度  

### 理解 CORS：網路的安全守護者

CORS（跨來源資源共享）就像大樓的保全人員，檢查訪客是否被允許入內。讓我們理解為什麼這很重要，並對您的應用有何影響。  

#### 什麼是 CORS 以及它存在的理由？

**問題**：想像如果任何網站都能在您不知情時，代表您對銀行網站發送請求。那將會是安全噩夢！瀏覽器預設透過「同源政策」阻擋這種行為。  

**同源政策**：瀏覽器只允許網頁向來源（domain、port、protocol）相同的網站發送請求。  

**現實類比**：就像公寓大樓的保全——只有住戶（同源）能進入。如果要讓朋友（不同來源）來訪，必須明確通知保全許可。  

#### CORS 在您的開發環境中

開發時，您的前端與後端運行在不同埠口：  
- 前端：`http://localhost:3000`（或直接開啟 HTML 時為 file://）  
- 後端：`http://localhost:5000`  

即使在同一台電腦上，它們仍被視為「不同來源」！  

```python
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(__name__)
CORS(app)   # 這告訴瀏覽器：「允許其他來源對這個 API 進行請求」
```
  
**CORS 配置實際做了什麼：**  
- **加入** 特別的 HTTP 頭欄位告知瀏覽器「此跨來源請求被允許」  
- **處理**「預檢請求」（瀏覽器在送正式請求前檢查權限）  
- **防止** 瀏覽器主控台出現「被 CORS 政策阻擋」的錯誤  

#### CORS 安全性：開發 vs 生產

```python
# 🚨 開發：允許所有來源（方便但不安全）
CORS(app)

# ✅ 生產：只允許特定的前端網域
CORS(app, origins=["https://yourdomain.com", "https://www.yourdomain.com"])

# 🔒 進階：不同環境使用不同的來源
if app.debug:  # 開發模式
    CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
else:  # 生產模式
    CORS(app, origins=["https://yourdomain.com"])
```
  
**為何這很重要**：在開發中，`CORS(app)` 就像把前門沒鎖——方便但不安全。生產環境應明確指定可訪問 API 的網站。  

#### 常見的 CORS 場景與解決方案  

| 場景 | 問題 | 解決方案 |  
|------|-------|---------|  
| **本地開發** | 前端無法訪問後端 | FastAPI 加入 CORSMiddleware |  
| **GitHub Pages + Heroku** | 部署後前端無法訪問 API | 把您的 GitHub Pages 網址加入 CORS 來源 |  
| **自訂網域** | 生產環境發生 CORS 錯誤 | 將 CORS 來源更新為您的網域 |  
| **行動應用程式** | App 無法訪問 Web API | 小心加入 APP 網域或使用 `*` |  

**專家提示**：可於瀏覽器開發者工具「網路」標籤查看 CORS 標頭。找尋回應中類似 `Access-Control-Allow-Origin` 的標頭。  

### 錯誤處理與驗證

注意我們的 API 如何包含適當的錯誤處理：  

```python
# 驗證我們是否收到了訊息
if not message:
    return jsonify({"error": "Message field is required"}), 400
```
  
**重要的驗證原則：**  
- **檢查** 請求前必填欄位是否完整  
- **回傳** 有意義的 JSON 格式錯誤訊息  
- **使用** 適當的 HTTP 狀態碼（如 400 代表錯誤請求）  
- **提供** 清楚回饋幫助前端開發者除錯  

## 設定並啟動您的後端

現在我們的 AI 整合和 FastAPI 伺服器已準備好，讓我們把一切啟動起來。設定程序包括安裝 Python 相依套件、配置環境變數與啟動開發伺服器。  

### Python 環境設定

讓我們設定 Python 開發環境。虛擬環境就像曼哈頓計劃的分區方法——每個專案有自己的獨立空間與特定工具及依賴，避免不同專案之間互相衝突。  

```bash
# 導航到你的後端目錄
cd backend

# 創建虛擬環境（就像為你的專案建立一個乾淨的房間）
python -m venv venv

# 啟用它（Linux/Mac）
source ./venv/bin/activate

# 在 Windows 上，使用：
# venv\Scripts\activate

# 安裝必要的套件
pip install openai fastapi uvicorn python-dotenv
```
  
**我們剛做了什麼：**  
- **建立** 專屬的 Python 環境泡泡，可安裝套件而不影響其他環境  
- **啟用** 讓終端知道要使用這個特定環境  
- **安裝** 必要套件：OpenAI 提供 AI 魔力、FastAPI 用於網路 API、Uvicorn 負責執行、python-dotenv 管理安全秘密  

**主要套件說明：**  
- **FastAPI**：現代快速網路框架，支援自動文件  
- **Uvicorn**：超高速 ASGI 伺服器，可運行 FastAPI 程式  
- **OpenAI**：官方 GitHub 模型及 OpenAI API 函式庫  
- **python-dotenv**：從 .env 文件安全載入環境變數  

### 環境設定：保護秘密

在啟動 API 前，我們要說明網路開發最重要的課題之一：如何確實地保護秘密。環境變數就像安全保險箱，只有您的應用可以存取。  

#### 什麼是環境變數？

**想像環境變數像是保險箱** —— 你把貴重物品放裡面，只有你（和你的應用）有鑰匙取出。取代直接在程式碼中寫敏感資料（任何人都能看到），環境變數將資訊安全存放。  

**差別在於：**  
- **錯誤作法**：把密碼寫在便利貼貼在電腦螢幕上  
- **正確作法**：用安全的密碼管理工具保存且只有自己可訪問  

#### 環境變數的重要性  

```python
# 🚨 千萬不要這樣做 - API 金鑰對所有人可見
client = OpenAI(
    api_key="ghp_1234567890abcdef...",  # 任何人都可以竊取它！
    base_url="https://models.github.ai/inference"
)

# ✅ 正確做法 - API 金鑰安全儲存
client = OpenAI(
    api_key=os.environ["GITHUB_TOKEN"],  # 只有您的應用程式可以存取這個金鑰
    base_url="https://models.github.ai/inference"
)
```
  
**硬編碼秘密所造成的問題：**  
1. **版本控管外洩**：任何有存取您 Git 倉庫的人看到您的 API 金鑰  
2. **公共倉庫**：如果您推送到 GitHub，您的金鑰全網可見  
3. **團隊共用**：其他開發人員拿到您的個人 API 金鑰  
4. **安全漏洞**：若金鑰被竊，可濫用您的 AI 點數  

#### 建立您的環境檔案

在後端目錄建立 `.env` 檔案。此檔案用來本地保存您的秘密：  

```bash
# .env 檔案 - 絕對不可提交到 Git
GITHUB_TOKEN=your_github_personal_access_token_here
FASTAPI_DEBUG=True
ENVIRONMENT=development
```
  
**理解 .env 文件：**  
- **每行寫一個秘密**，格式為 `KEY=value`  
- **等號兩邊無空格**  
- **值通常不用引號**  
- **註解以 `#` 開頭**  

#### 創建 GitHub 個人存取權杖

您的 GitHub 權杖就像特殊密碼，授權您的應用使用 GitHub AI 服務：  

**權杖創建步驟：**  
1. **前往 GitHub 設定** → 開發者設定 → 個人存取權杖 → 傳統權杖  
2. **點選「產生新權杖（傳統）」**  
3. **設定有效期限**（測試有 30 天，正式可長一點）  
4. **選擇權限範圍**：勾選「repo」及需要的其他權限  
5. **產生權杖**並立即複製（無法再查看）  
6. **貼上到您的 .env 文件中**  

```bash
# 這是您的令牌範例（這是假的！）
GITHUB_TOKEN=ghp_1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R
```
  
#### 在 Python 載入環境變數

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
  
**代碼說明：**  
- **載入** .env 文件並讓變數可由 Python 讀取  
- **檢查** 是否存在必要的 token（良好的錯誤處理！）  
- 如果缺少令牌，**拋出清楚錯誤**  
- 以安全方式使用金鑰，不會在程式碼中曝光  

#### Git 安全：.gitignore 文件

您的 `.gitignore` 告訴 Git 哪些檔案不該被追蹤或上傳：  

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
  
**為何這很關鍵**：加入 `.env` 於 `.gitignore` 後，Git 會忽略您的環境檔，避免秘密意外上傳到 GitHub。  

#### 不同環境，不同秘密

專業應用會依環境使用不同 API 金鑰：  

```bash
# .env.development
GITHUB_TOKEN=your_development_token
DEBUG=True

# .env.production
GITHUB_TOKEN=your_production_token
DEBUG=False
```
  
**重要原因**：不希望開發測試影響正式環境 AI 配額，也希望不同環境有不同安全政策。  

### 啟動您的開發伺服器：讓 FastAPI 活起來  

現在到了令人興奮的時刻——啟動你的 FastAPI 開發伺服器，看到你的 AI 整合活躍起來！FastAPI 使用 Uvicorn，一個極速的 ASGI 伺服器，專門設計給非同步 Python 應用程式。

#### 了解 FastAPI 伺服器啟動流程

```bash
# 方法一：直接執行 Python（包含自動重載）
python api.py

# 方法二：直接使用 Uvicorn（更具控制）
uvicorn api:app --host 0.0.0.0 --port 5000 --reload
```

當你執行這個指令，幕後發生的事情如下：

**1. Python 載入你的 FastAPI 應用程式**：
- 匯入所有必需的函式庫（FastAPI、Pydantic、OpenAI 等）
- 從 `.env` 檔案載入環境變數
- 建立帶有自動文件的 FastAPI 應用實例

**2. Uvicorn 設定 ASGI 伺服器**：
- 綁定在埠號 5000，具有非同步請求處理能力
- 設置具有自動驗證的請求路由
- 啟動開發用熱重載（偵測檔案更動自動重啟）
- 產生互動式 API 文件

**3. 伺服器開始監聽**：
- 你的終端機顯示：`INFO: Uvicorn running on http://0.0.0.0:5000`
- 伺服器可同時處理多個 AI 請求
- 你的 API 準備就緒，自動文件位於 `http://localhost:5000/docs`

#### 一切正常時你應該看到的畫面

```bash
$ python api.py
INFO:     Will watch for changes in these directories: ['/your/project/path']
INFO:     Uvicorn running on http://0.0.0.0:5000 (Press CTRL+C to quit)
INFO:     Started reloader process [12345] using WatchFiles
INFO:     Started server process [12346]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**理解 FastAPI 輸出：**
- **將監視變更**：開發階段啟用自動重載
- **Uvicorn 運行中**：高效能 ASGI 伺服器已啟動
- **啟動重新加載程序**：檔案監視器負責自動重啟
- **應用啟動完成**：FastAPI 應用成功初始化
- **互動文件可用**：造訪 `/docs` 取得自動 API 文件

#### 測試你的 FastAPI：多種強力方法

FastAPI 提供多種方便的 API 測試方式，包括自動互動式文件：

**方法 1：互動式 API 文件（推薦）**
1. 打開瀏覽器，前往 `http://localhost:5000/docs`
2. 你會看到 Swagger UI，所有端點的文件都在這裡
3. 點擊 `/hello` →「Try it out」→ 輸入測試訊息 →「Execute」
4. 在瀏覽器中直接看到格式化良好的回應

**方法 2：基本瀏覽器測試**
1. 前往 `http://localhost:5000` 取得根端點回應
2. 前往 `http://localhost:5000/health` 檢查伺服器健康狀況
3. 確認你的 FastAPI 伺服器正常運作

**方法 2：指令列測試（進階）**
```bash
# 使用 curl 測試（如果可用）
curl -X POST http://localhost:5000/hello \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello AI!"}'

# 預期回應：
# {"response": "你好！我是你的 AI 助手。今天我能為你做些什麼？"}
```

**方法 3：Python 測試腳本**
```python
# test_api.py - 創建此檔案以測試您的 API
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

#### 常見啟動問題排解

| 錯誤訊息 | 意義 | 解決方式 |
|---------------|---------------|------------|
| `ModuleNotFoundError: No module named 'fastapi'` | FastAPI 未安裝 | 在虛擬環境執行 `pip install fastapi uvicorn` |
| `ModuleNotFoundError: No module named 'uvicorn'` | ASGI 伺服器未安裝 | 在虛擬環境執行 `pip install uvicorn` |
| `KeyError: 'GITHUB_TOKEN'` | 找不到環境變數 | 檢查 `.env` 檔案及 `load_dotenv()` 是否正確 |
| `Address already in use` | 埠號 5000 被佔用 | 終止其他使用該埠的程序或換用其他埠號 |
| `ValidationError` | 請求資料與 Pydantic 模型不符 | 確認請求格式符合預期 schema |
| `HTTPException 422` | 無法處理的實體 | 請求驗證失敗，請檢查 `/docs` 中的正確格式 |
| `OpenAI API error` | AI 服務驗證失敗 | 確認 GitHub Token 正確且具備足夠權限 |

#### 開發最佳實踐

**熱重載**：FastAPI 搭配 Uvicorn 支援在你儲存 Python 程式碼時自動重載。你可以即時修改和測試，不需手動重啟。

```python
# 明確啟用即時重新加載
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)  # debug=True 啟用即時重新加載
```

**開發用日誌紀錄**：加入日誌，了解發生的情況：

```python
import logging

# 設置日誌記錄
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

**日誌的重要性**：開發時你能看到哪些請求被送出、AI 回應內容與錯誤位置，大大加速除錯效率。

### GitHub Codespaces 設定：輕鬆打造雲端開發環境

GitHub Codespaces 就像是一台雲端的強力開發主機，能從任何瀏覽器存取。如果你使用 Codespaces，還需要額外設定，讓後端對前端可見。

#### Codespaces 網路架構說明

本機開發時，所有東西都運行在同一台電腦上：
- 後端：`http://localhost:5000`
- 前端：`http://localhost:3000`（或 file://）

在 Codespaces 中，你的開發環境跑在 GitHub 伺服器上，「localhost」的意義不同。GitHub 會自動為你的服務建立公開 URL，但你必須適當設定。

#### Codespaces 設定步驟

**1. 啟動後端伺服器**：
```bash
cd backend
python api.py
```

你會看到熟悉的 FastAPI/Uvicorn 啟動訊息，但它跑在 Codespace 環境裡。

**2. 設定埠可見性**：
- 在 VS Code 底部面板找到「Ports」標籤
- 找到列表中的 5000 埠號
- 右鍵點選埠號 5000
- 選擇「Port Visibility」→「Public」

**為什麼要設為公開？** 預設 Codespace 埠號是私有（只有你可存取）。公開後，前端瀏覽器才能與後端通訊。

**3. 取得公開 URL**：
公開埠口後，你會看到類似以下的 URL：
```
https://your-codespace-name-5000.app.github.dev
```

**4. 更新前端設定**：
```javascript
// 在您的前端 app.js 中，更新 BASE_URL：
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

#### 認識 Codespace URL

Codespace URL 有可預測的格式：
```
https://[codespace-name]-[port].app.github.dev
```

**解析說明：**
- `codespace-name`：你的 Codespace 唯一識別碼（通常包含使用者名稱）
- `port`：你的服務埠號（我們的 FastAPI 是 5000）
- `app.github.dev`：GitHub 的 Codespace 應用域名

#### 測試你的 Codespace 設定

**1. 直接測試後端**：
在新分頁開啟你的公共 URL，你應該會看到：
```
Welcome to the AI Chat API. Send POST requests to /hello with JSON payload containing 'message' field.
```

**2. 使用瀏覽器開發者工具測試**：
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

#### Codespaces 與本機開發比較

| 項目 | 本機開發 | GitHub Codespaces |
|--------|-------------------|-------------------|
| **設定時間** | 較長（需安裝 Python、相依套件） | 即時（預設環境已設好） |
| **URL 存取** | `http://localhost:5000` | `https://xyz-5000.app.github.dev` |
| **埠口設定** | 自動 | 手動（需開放埠口） |
| **檔案保存** | 本地機器 | GitHub 儲存庫 |
| **協作狀況** | 難共享開發環境 | 容易分享 Codespace 連結 |
| **網路依賴** | 只需求 AI API 呼叫時 | 全部過程都須網路 |

#### Codespace 開發小貼士

**Codespaces 環境變數**：
你的 `.env` 檔在 Codespaces 同樣可用，也可以直接在 Codespace 裡設定環境變數：

```bash
# 設置當前會話的環境變量
export GITHUB_TOKEN="your_token_here"

# 或添加到您的 .bashrc 以保持持久性
echo 'export GITHUB_TOKEN="your_token_here"' >> ~/.bashrc
```

**埠口管理**：
- Codespaces 會自動偵測你的應用何時開始監聽某個埠口
- 你可以同時轉送多個埠口（未來新增資料庫時很有用）
- 埠口只要 Codespace 運行就持續可用

**開發工作流程**：
1. 在 VS Code 修改程式碼
2. FastAPI 自動重載（多虧 Uvicorn reload 模式）
3. 透過公開 URL 立刻測試改動
4. 準備好後 commit 並推送

> 💡 **專業小技巧**：開發時收藏你的 Codespace 後端 URL。只要使用同一個 Codespace，名稱穩定，URL 也不會改變。

## 建立前端聊天介面：人類與 AI 的交會

接下來我們會建立用戶介面——決定人們如何與你的 AI 助手互動的部分。就像最初 iPhone 介面設計，我們專注讓複雜技術變得直覺且自然。

### 了解現代前端架構

我們的聊天介面屬於「單頁應用程式」（Single Page Application，SPA）。不像舊式網站每次點擊都載入新頁面，我們的應用會平順且即時更新：

**舊網站**：像是翻讀一本實體書——你跳到全新頁面  
**我們的聊天應用**：就像用手機——一切流暢且無縫更新

```mermaid
graph TD
    A[使用者輸入訊息] --> B[JavaScript 擷取輸入]
    B --> C[驗證與格式化資料]
    C --> D[發送至後端 API]
    D --> E[顯示載入狀態]
    E --> F[接收 AI 回應]
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
### 前端開發三大支柱

每個前端應用——從簡單網頁到複雜的 Discord 或 Slack——都是建立在三項核心技術上。它們就像你在網路上看到並互動的所有事物的基礎：

**HTML（結構）**：你的基礎  
- 決定哪些元素存在（按鈕、文字區、容器）  
- 賦予內容意義（這是標題、這是表單等）  
- 建立所有其他東西的基本架構

**CSS（呈現）**：你的室內設計師  
- 讓一切看起來漂亮（色彩、字型、排版）  
- 處理不同螢幕尺寸（手機、筆電、平板）  
- 製造流暢動畫與視覺回饋

**JavaScript（行為）**：你的大腦  
- 回應使用者動作（點擊、輸入、滾動）  
- 與你的後端對話並更新頁面  
- 讓一切互動且動態發生

**想像成建築設計：**  
- **HTML**：結構藍圖（定義空間與關係）  
- **CSS**：美學與環境設計（視覺風格與用戶體驗）  
- **JavaScript**：機械系統（功能性與互動性）

### 為什麼現代 JavaScript 架構很重要

我們的聊天應用會使用專業等級的現代 JavaScript 範式。理解這些概念，將幫助你成為更好的開發者：

**類別架構**：我們會用類別組織程式碼，猶如為物件建造藍圖  
**Async/Await**：處理耗時作業（如 API 呼叫）的現代寫法  
**事件驅動程式設計**：應用回應使用者操作（點擊、按鍵），非一直運行  
**DOM 操控**：根據使用者互動及 API 回應動態更新網頁內容

### 專案結構設定

建立一個 frontend 目錄，結構如下：

```text
frontend/
├── index.html      # Main HTML structure
├── app.js          # JavaScript functionality
└── styles.css      # Visual styling
```

**架構說明：**  
- **區分** 結構（HTML）、行為（JavaScript）與呈現（CSS）三大關注點  
- **維持** 簡單易導覽的檔案結構，方便修改與擴充  
- **遵循** 網頁開發最佳實踐，確保組織與可維護性

### 建立 HTML 基礎：為無障礙使用語意化結構

我們先從 HTML 結構開始。現代網頁開發強調「語意化 HTML」——使用明確描述用途的 HTML 元素，而非僅著重外觀。這讓應用對螢幕閱讀器、搜尋引擎和其他工具更友善。

**語意化 HTML 重要性**：想像你要透過電話描述你的聊天應用，你會說「上方有標題的標頭區，中間主要是對話區，底下有個輸入訊息的表單。」語意化 HTML 就是用符合這自然描述的元素。

建立 `index.html`，採用這樣深思熟慮的標記：

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
  
**認識每個 HTML 元素與其功能：**

#### 文件結構
- **`<!DOCTYPE html>`**：告訴瀏覽器這是現代 HTML5
- **`<html lang="en">`**：指定頁面語言，幫助螢幕閱讀器與翻譯工具
- **`<meta charset="UTF-8">`**：確保正確的國際字元編碼
- **`<meta name="viewport"...>`**：透過控制縮放與比例，使頁面具備手機響應性

#### 語意元素
- **`<header>`**：明確標示包含標題與描述的頂部區塊
- **`<main>`**：指定主要內容區（即對話顯示）
- **`<form>`**：語意化的用戶輸入表單，有助於鍵盤導覽

#### 無障礙功能
- **`role="log"`**：告訴螢幕閱讀器這是一個訊息時間軸紀錄區
- **`aria-live="polite"`**：新訊息溫和地通知螢幕閱讀器，不會打斷使用者
- **`aria-label`**：為表單控制項提供描述標籤
- **`required`**：瀏覽器將驗證使用者是否輸入訊息才允許送出

#### CSS 與 JavaScript 整合
- **`class` 屬性**：提供 CSS 的樣式掛勾（例如 `chat-container`、`input-group`）
- **`id` 屬性**：讓 JavaScript 找到並操作特定元素
- **腳本位置**：JavaScript 檔案置於底部，確保先載入 HTML

**這個結構之所以有效：**
- **邏輯流程**：標頭 → 主要內容 → 輸入表單，符合自然閱讀順序
- **鍵盤可操作**：使用者能以 Tab 鍵瀏覽所有互動元素
- **螢幕閱讀器友善**：清楚分區與敘述，協助視障者使用
- **手機響應式**：透過 viewport meta 標籤實現響應式設計
- **漸進增強**：即使 CSS 或 JavaScript 載入失敗，基本功能仍能運作

### 加入互動式 JavaScript：現代網頁應用邏輯  


現在讓我們建立讓聊天室介面活起來的 JavaScript。我們將使用您在專業網頁開發中會遇到的現代 JavaScript 範式，包括 ES6 類別、async/await 和事件驅動程式設計。

#### 了解現代 JavaScript 架構

我們不會寫程序式程式碼（一系列依序執行的函式），而是創建一個**基於類別的架構**。將類別想像成創建物件的藍圖—就像建築師的藍圖能用來建造多棟房子。

**為什麼在網頁應用使用類別？**
- **組織性**：所有相關功能都被歸類在一起
- **可重用性**：你可以在同一頁面建立多個聊天實例
- **維護性**：更容易除錯和修改特定功能
- **專業標準**：此模式被 React、Vue 和 Angular 等框架採用

建立 `app.js`，使用這個現代、結構良好的 JavaScript：

```javascript
// app.js - 現代聊天應用程式邏輯

class ChatApp {
    constructor() {
        // 取得我們需要操作的 DOM 元素引用
        this.messages = document.getElementById("messages");
        this.form = document.getElementById("chatForm");
        this.input = document.getElementById("messageInput");
        this.sendButton = document.getElementById("sendBtn");
        
        // 在此配置您的後端 URL
        this.BASE_URL = "http://localhost:5000"; // 依您的環境更新此設定
        this.API_ENDPOINT = `${this.BASE_URL}/hello`;
        
        // 在建立聊天應用程式時設定事件監聽器
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // 監聽表單提交（使用者點擊發送或按下 Enter）
        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
        
        // 也監聽輸入欄位中的 Enter 鍵（更好的使用者體驗）
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
        if (!messageText) return; // 不要傳送空訊息
        
        // 提供使用者反饋表示正在處理中
        this.setLoading(true);
        
        // 立即將使用者訊息加入聊天（樂觀 UI）
        this.appendMessage(messageText, "user");
        
        // 清除輸入欄位讓使用者可以輸入下一則訊息
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
            // 無論成功或失敗皆重新啟用介面
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

#### 了解每個 JavaScript 概念

**ES6 類別結構**：
```javascript
class ChatApp {
    constructor() {
        // 這會在你建立新的 ChatApp 實例時執行
        // 它就像你的聊天的「設定」函式
    }
    
    methodName() {
        // 方法是屬於類別的函式
        // 它們可以使用 "this" 來存取類別屬性
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

// 現代方法（非同步/等待）：
try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
```

**事件驅動程式設計**：
我們不會一直檢查事件是否發生，而是「監聽」事件：
```javascript
// 當表單提交時，執行 handleSubmit
this.form.addEventListener("submit", (e) => this.handleSubmit(e));

// 當按下 Enter 鍵時，也執行 handleSubmit
this.input.addEventListener("keypress", (e) => { /* ... */ });
```

**DOM 操作**：
```javascript
// 建立新元素
const messageElement = document.createElement("div");

// 修改它們的屬性
messageElement.className = "message user";
messageElement.innerHTML = "Hello world!";

// 加入到頁面中
this.messages.appendChild(messageElement);
```

#### 安全性與最佳實務

**XSS 預防**：
```javascript
escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;  // 這會自動轉義 HTML
    return div.innerHTML;
}
```

**原因**：如果使用者輸入 `<script>alert('hack')</script>`，此函式確保它顯示為文字，而非執行程式碼。

**錯誤處理**：
```javascript
try {
    const reply = await this.callAPI(messageText);
    this.appendMessage(reply, "assistant");
} catch (error) {
    // 顯示使用者友善的錯誤訊息，而不是使應用程式崩潰
    this.appendMessage("Sorry, I'm having trouble...", "error");
}
```

**使用者體驗考量**：
- **樂觀介面**：立即加上使用者訊息，不必等待伺服器回應
- **載入狀態**：等待時禁用按鈕並顯示「傳送中…」
- **自動捲動**：保持最新訊息可見
- **輸入驗證**：不傳送空白訊息
- **鍵盤快速鍵**：Enter 鍵送出訊息（像真實聊天應用）

#### 了解應用程式流程

1. **頁面載入** → 觸發 `DOMContentLoaded` 事件 → 建立 `new ChatApp()`
2. **建構子執行** → 取得 DOM 元素參考 → 設定事件監聽器
3. **使用者輸入訊息** → 按下 Enter 或點擊傳送 → 執行 `handleSubmit`
4. **handleSubmit** → 驗證輸入 → 顯示載入狀態 → 呼叫 API
5. **API 回應** → 新增 AI 訊息到聊天 → 重新啟用介面
6. **準備下一則訊息** → 使用者繼續聊天

此架構具擴展性—你可以輕鬆加入訊息編輯、檔案上傳或多重對話串等功能，而無須重寫核心結構。

### 🎯 教學檢核：現代前端架構

**架構理解**：您已實作完整單頁應用程式，使用現代 JavaScript 範式。這代表專業級前端開發。

**掌握重點概念**：
- **ES6 類別架構**：有組織、易維護的程式碼結構
- **Async/Await 範式**：現代非同步程式設計
- **事件驅動設計**：響應式使用者介面設計
- **安全最佳實務**：防止 XSS 與輸入驗證

**產業連結**：您學到的模式（基於類別的架構、非同步運作、DOM 操作）是 React、Vue、Angular 等現代框架之基礎。您正在建立與實務應用相同的架構思維。

**反思問題**：您會如何擴充此聊天室應用以處理多重對話或使用者驗證？思考架構更動需求及類別結構的演進。

### 美化您的聊天室介面

現在，我們用 CSS 建立一個現代且視覺吸引的聊天介面。良好的樣式能讓您的應用顯得專業，且提升整體用戶經驗。我們使用 Flexbox、CSS Grid 和自訂屬性打造響應式且可及性佳的設計。

建立 `styles.css`，並加入這些完整樣式：

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

**CSS 架構說明：**
- **利用** CSS 自訂屬性(變數)以實現統一主題與易於維護
- **實作** Flexbox 版面，達成響應式設計與正確對齊
- **包含** 平滑訊息動畫，不造成干擾
- **區分** 使用者訊息、AI 回應與錯誤狀態的視覺效果
- **支援** 桌面及行動裝置的響應式設計
- **考量** 較低動作偏好與適當對比度的可及性
- **提供** 根據使用者系統偏好自動切換暗黑模式

### 配置您的後端 URL

最後步驟是更新 JavaScript 裡的 `BASE_URL` 以匹配您的後端伺服器：

```javascript
// 用於本地開發
this.BASE_URL = "http://localhost:5000";

// 用於 GitHub Codespaces（請替換為您的實際 URL）
this.BASE_URL = "https://your-codespace-name-5000.app.github.dev";
```

**判斷您後端 URL：**
- **本地開發**：若前後端皆本地執行，使用 `http://localhost:5000`
- **Codespaces**：公開 5000 埠後，於端口分頁查看後端 URL
- **生產環境**：部署到託管服務時，替換為實際網域

> 💡 **測試提示**：您可直接在瀏覽器開啟根目錄 URL 來測試後端。您應看到 FastAPI 伺服器的歡迎訊息。



## 測試與部署

現在您已完成前後端元件，讓我們測試它們的整合並探索如何部署以分享您的聊天助理。

### 本地測試工作流程

依照以下步驟測試完整應用：

```mermaid
graph TD
    A[啟動後端伺服器] --> B[設定環境變數]
    B --> C[測試 API 端點]
    C --> D[於瀏覽器開啟前端]
    D --> E[測試聊天功能]
    E --> F[除錯任何問題]
```
**逐步測試流程：**

1. **啟動您的後端伺服器**：
   ```bash
   cd backend
   source venv/bin/activate  # 或在 Windows 上使用 venv\Scripts\activate
   python api.py
   ```

2. **確認 API 正常工作**：
   - 在瀏覽器打開 `http://localhost:5000`
   - 您應能看到 FastAPI 伺服器的歡迎訊息

3. **開啟您的前端頁面**：
   - 進入前端目錄
   - 用瀏覽器開啟 `index.html`
   - 或使用 VS Code Live Server 外掛，提供更佳開發體驗

4. **測試聊天功能**：
   - 在欄位輸入訊息
   - 點擊「傳送」或按 Enter
   - 確認 AI 有適當回應
   - 檢查瀏覽器控制台是否有 JavaScript 錯誤

### 常見問題排解

| 問題         | 症狀                       | 解決方案                           |
|--------------|----------------------------|----------------------------------|
| **CORS 錯誤** | 前端無法存取後端            | 確認 FastAPI 已正確配置 CORSMiddleware |
| **API Key 錯誤** | 回傳 401 未授權             | 檢查您的 `GITHUB_TOKEN` 環境變數   |
| **連線拒絕**   | 前端網路錯誤               | 確認後端 URL 是否正確且後端伺服器運行中 |
| **無 AI 回應** | 空白或錯誤回應             | 檢查後端日誌是否有 API 配額或認證問題 |

**常見除錯步驟：**
- **檢查** 瀏覽器開發者工具 Console 是否有 JavaScript 錯誤
- **確認** Network 分頁中 API 請求與回應是否成功
- **檢視** 後端終端機輸出 Python 錯誤或 API 問題
- **確認** 環境變數是否正確載入且可存取

## 📈 您的 AI 應用開發能力里程碑

```mermaid
timeline
    title 完整的 AI 應用開發旅程
    
    section AI 基礎
        了解生成式 AI
            : 掌握模式識別概念
            : 精通 AI 參數控制
            : 學習提示工程技巧
        
        GitHub 模型整合
            : 探索 AI 服務平台
            : 安全處理身份驗證
            : 優化模型參數
    
    section 後端開發
        Python API 架構
            : 構建 FastAPI 應用
            : 實作非同步操作
            : 建立安全端點
        
        AI 服務整合
            : 連接外部 AI API
            : 處理速率限制
            : 實作錯誤邊界
    
    section 前端精通
        現代 JavaScript 模式
            : 精通 ES6 類別架構
            : 實作 async/await 流程
            : 建置響應式介面
        
        即時用戶體驗
            : 建立動態聊天介面
            : 處理載入狀態
            : 優化用戶互動
    
    section 生產準備
        安全與效能
            : 實作安全令牌管理
            : 防範 XSS 漏洞
            : 優化 API 效能
        
        專業部署
            : 建置可擴充架構
            : 撰寫易維護程式碼
            : 文件化開發流程
```
**🎓 畢業里程碑**：您已成功建立完整 AI 驅動應用程式，並使用驅動現代 AI 助理的相同技術與架構模式。這些技能代表傳統網頁開發與尖端 AI 整合的交會點。

**🔄 下一階段能力：**
- 準備探索進階 AI 框架（LangChain、LangGraph）
- 準備建構多模態 AI 應用（文字、影像、語音）
- 能實作向量資料庫與檢索系統
- 奠定機器學習及 AI 模型微調基礎

## GitHub Copilot Agent 挑戰 🚀

使用 Agent 模式來完成以下挑戰：

**描述：** 加強聊天助理，加入對話歷史與訊息持久化。此挑戰可幫助您理解如何在聊天應用中管理狀態，並實作資料儲存以提升用戶體驗。

**提示：** 修改聊天應用，使其包含跨會話持久的對話記錄。加入功能將聊天訊息儲存於本地儲存空間，頁面載入時顯示對話歷史，並加上「清除歷史」按鈕。還要實作輸入動畫指示器及訊息時間戳，讓聊天體驗更真實。

在此了解更多關於 [agent mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)。

## 作業：打造您的個人 AI 助理

現在您將打造自己的 AI 助理實作。這不是簡單複製範例程式碼，而是機會將概念應用於貼近您興趣及使用情境的解決方案。

### 專案需求

讓我們為您的專案建立一個乾淨、組織良好的結構：

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
- **採用** FastAPI 範例程式碼並做出自己的風格
- **建立** 獨特 AI 個性—或許是烹飪助理、創意寫作夥伴或學習助手？
- **加入** 完善的錯誤處理，避免應用崩潰
- **撰寫** 清楚文件，解釋 API 運作方式

**前端開發：**
- **建造** 直覺且親切的聊天介面
- **撰寫** 清晰、現代的 JavaScript 程式碼，讓您引以為傲
- **設計** 反映 AI 個性的客製化樣式—活潑多彩？簡潔極簡？隨您喜好決定！
- **確保** 在手機與桌面端都良好運作

**個人化需求：**
- **選擇** 獨特名稱及個性給 AI 助理—也許反映您的興趣或解決的問題
- **自訂** 視覺設計以符合助理風格
- **寫出** 吸引人的歡迎訊息，鼓勵用戶開始聊天
- **測試** 以各種問題檢視助理回應

### 增強點子（選擇性）

想提升專案水準嗎？試試這些有趣的想法：

| 功能         | 說明                             | 練習技能                      |
|--------------|--------------------------------|------------------------------|
| **訊息歷史** | 即使刷新頁面也能記住對話         | 使用 localStorage、JSON 操作   |
| **輸入指示器** | 回應等待時顯示「AI 正在輸入…」     | CSS 動畫、非同步程式設計       |
| **訊息時間戳** | 顯示每則訊息送出時間             | 日期時間格式化、使用者體驗設計  |
| **聊天匯出** | 讓用戶下載對話內容               | 檔案操作、資料匯出              |
| **主題切換** | 淺色/深色主題切換               | CSS 變數、使用者偏好設定        |
| **語音輸入** | 加入語音轉文字功能               | Web API、可及性                |

### 測試與文件

**品質保證：**
- **測試** 除錯各種輸入與極端案例
- **確認** 響應式設計於不同螢幕尺寸下正常顯示
- **檢查** 鍵盤操作與螢幕閱讀器的可及性
- **驗證** HTML 及 CSS 符合標準

**文件需求：**
- **撰寫** README.md，說明專案與執行方式
- **包含** 聊天介面運作的截圖
- **紀錄** 自訂功能或獨特設計
- **提供** 清楚設定指南以協助其他開發者

### 繳交指南

**專案交付項目：**
1. 含所有原始碼的完整專案資料夾
2. README.md，含專案敘述與設定說明
3. 展示聊天助理運作的截圖
4. 簡短心得，說明學習過程和挑戰

**評分標準：**
- **功能性**：聊天助理是否正常運作？
- **程式碼品質**：程式碼是否井然有序，具備註解且易維護？
- **設計**：介面是否美觀且易用？
- **創意**：實作的獨特性與個人化程度
- **文件**：設定說明是否清楚完整？

> 💡 **成功訣竅**：先完成基本需求，再逐步加入增強功能。先打造流暢且完善的核心體驗，再加進高級特性。

## 解答

[Solution](./solution/README.md)

## 額外挑戰

準備好將您的 AI 助理提升至更高境界？試試這些進階挑戰，深化您對 AI 整合及網頁開發的理解。

### 個性化定制

真正的魔力來自賦予 AI 助理獨特個性。嘗試不同系統提示，創造專業助理：

**專業助理範例：**
```python
call_llm(message, "You are a professional business consultant with 20 years of experience. Provide structured, actionable advice with specific steps and considerations.")
```

**創意寫作輔助範例：**
```python
call_llm(message, "You are an enthusiastic creative writing coach. Help users develop their storytelling skills with imaginative prompts and constructive feedback.")
```

**技術導師範例：**
```python
call_llm(message, "You are a patient senior developer who explains complex programming concepts using simple analogies and practical examples.")
```

### 前端增強

透過這些視覺與功能改進，打造更吸引人的聊天介面：

**進階 CSS 特性：**
- **實作** 平滑的訊息動畫與過渡
- **加入** 使用 CSS 形狀與漸層的自訂聊天氣泡設計
- **創造** AI「思考中」輸入指示動畫
- **設計** 表情符號回應或訊息評分系統

**JavaScript 增強：**
- **加入** 鍵盤快捷鍵（Ctrl+Enter 送出，Escape 清除輸入）
- **實作** 訊息搜尋與篩選功能
- **建立** 對話匯出功能（下載為文字或 JSON）
- **新增** 自動儲存至 localStorage，防止訊息遺失

### 進階 AI 整合

**多重 AI 個性：**
- **建立** 下拉選單切換不同 AI 個性
- **儲存** 使用者喜愛個性於 localStorage
- **實作** 保持對話連貫的上下文切換

**智慧回應功能：**
- **增加** 會話上下文感知（AI 記住先前訊息）

- **根據對話主題** 實作智慧建議
- **建立** 常見問題的快速回覆按鈕

> 🎯 **學習目標**：這些額外挑戰幫助你理解在生產應用中使用的進階網頁開發模式和 AI 整合技術。

## 總結與後續步驟

恭喜你！你已經成功從零開始建置了一個完整的 AI 驅動聊天助理。這個專案讓你實際操作了現代網頁開發技術及 AI 整合——這些技能在當今的科技領域中越來越重要。

### 你已完成的事項

在本課程中，你掌握了多項關鍵技術與概念：

**後端開發：**
- **整合** GitHub Models API 以實現 AI 功能
- **建置** 使用 Flask 的 RESTful API 並具備妥善的錯誤處理
- **實作** 使用環境變數的安全認證
- **配置** CORS 以支援前後端跨來源請求

**前端開發：**
- **建立** 使用語義 HTML 的響應式聊天介面
- **實作** 採用 async/await 及類別架構的現代 JavaScript
- **設計** 使用 CSS Grid、Flexbox 和動畫的吸引人界面
- **加入** 無障礙功能與響應式設計原則

**全端整合：**
- **連接** 前端與後端透過 HTTP API 呼叫
- **處理** 即時使用者互動及非同步資料流程
- **實作** 全應用程式的錯誤處理與使用者反饋
- **測試** 從使用者輸入到 AI 回應的完整應用流程

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
      無障礙
      即時互動
    AI Understanding
      提示工程
      模型參數
      對話流程
```
本專案已帶你了解建置 AI 驅動應用的基礎，這代表網頁開發的未來。你現在懂得如何將 AI 能力整合到傳統網頁應用中，創造出聰明且響應快速的使用者體驗。

### 專業應用

你在本課程獲得的技能，能直接應用於現代軟體開發職涯：

- 使用現代框架和 API 進行全端網頁開發
- 在網頁及行動應用中進行 AI 整合
- 微服務架構的 API 設計與開發
- 專注於無障礙與響應式設計的使用者介面開發
- 包括環境設定與部署的 DevOps 實務

### 繼續你的 AI 開發之旅

**接下來的學習步驟：**
- **探索** 更進階的 AI 模型與 API（GPT-4、Claude、Gemini）
- **學習** 提示工程技巧以獲得更佳的 AI 回應
- **研究** 對話設計與聊天機器人使用者體驗原則
- **調查** AI 安全、倫理與負責任的 AI 開發實務
- **建置** 具有對話記憶與上下文意識的更複雜應用

**進階專案點子：**
- 多用戶聊天室並具 AI 管理功能
- AI 驅動的客戶服務聊天機器人
- 個人化學習的教育輔導助手
- 具不同 AI 個性的創意寫作合作夥伴
- 供開發者使用的技術文件助手

## 使用 GitHub Codespaces 開始

想在雲端開發環境嘗試本專案嗎？GitHub Codespaces 提供完整的瀏覽器開發環境，非常適合實驗 AI 應用，且無需本地設定。

### 設定開發環境

**步驟 1：從範本建立**
- **前往** [Web Dev For Beginners repository](https://github.com/microsoft/Web-Dev-For-Beginners)
- **點擊** 右上角的「Use this template」（確保已登入 GitHub）

![Create from template interface showing the green "Use this template" button](../../../translated_images/zh-TW/template.67ad477109d29a2b.webp)

**步驟 2：啟動 Codespaces**
- **打開** 新建立的版本庫
- **點擊** 綠色的「Code」按鈕並選擇「Codespaces」
- **選擇** 「Create codespace on main」以啟動開發環境

![Create codespace interface with options for launching cloud development environment](../../../translated_images/zh-TW/codespace.bcecbdf5d2747d3d.webp)

**步驟 3：環境設定**
Codespace 讀取後，你將擁有：
- **預先安裝** Python、Node.js 與所有必需的開發工具
- **帶擴充套件的 VS Code 介面**，適合網頁開發
- **終端機存取** 能執行後端與前端伺服器
- **埠轉發** 用於測試你的應用程式

**Codespaces 所提供的：**
- **免除** 本地環境設定與配置麻煩
- **維持** 不同裝置間一致的開發環境
- **內建** 預設定的工具與擴充套件協助網頁開發
- **無縫整合** GitHub 做版本控制與協作

> 🚀 **專業小提示**：Codespaces 非常適合學習與快速原型開發 AI 應用，因為它自動處理所有複雜的環境配置，讓你能專注於建構與學習，不必為設定問題煩惱。

---

<!-- CO-OP TRANSLATOR DISCLAIMER START -->
**免責聲明**：  
本文件使用 AI 翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們努力追求準確性，但請注意自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應視為權威來源。對於重要資訊，建議採用專業人工翻譯。我們不對因使用本翻譯而產生的任何誤解或誤釋承擔責任。
<!-- CO-OP TRANSLATOR DISCLAIMER END -->