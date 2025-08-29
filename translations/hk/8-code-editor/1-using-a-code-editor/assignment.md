<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "bd3aa6d2b879c30ea496c43aec1c49ed",
  "translation_date": "2025-08-29T15:09:44+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/assignment.md",
  "language_code": "hk"
}
-->
# 使用 vscode.dev 建立履歷網站

_當招聘人員要求你的履歷時，你能直接發送一個網址給他們，這是不是很酷？_ 😎

<!----
TODO: 添加一張可選的圖片
![使用代碼編輯器](../../../../translated_images/webdev101-vscode-dev.f53c14e8dad231ea09d9e07a2db4a01551d2dc6cdf21225038389e11156af023.hk.png)
> 手繪筆記由 [作者名稱](https://example.com) 提供
---->

<!---
## 課前測驗
[課前測驗](https://ff-quizzes.netlify.app/web/quiz/3)
---->

## 目標

完成這個任務後，你將學會：

- 建立一個網站來展示你的履歷

### 先決條件

1. 一個 GitHub 帳戶。如果你還沒有帳戶，請前往 [GitHub](https://github.com/) 註冊。

## 步驟

**步驟 1：** 建立一個新的 GitHub 儲存庫，命名為 `my-resume`

**步驟 2：** 在你的儲存庫中建立一個 `index.html` 文件。我們需要在 github.com 上至少添加一個文件，因為空的儲存庫無法在 vscode.dev 中打開。

點擊 `creating a new file` 鏈接，輸入文件名稱 `index.html`，然後選擇 `Commit new file` 按鈕。

![在 github.com 上建立新文件](../../../../translated_images/new-file-github.com.c886796d800e8056561829a181be1382c5303da9d902d8b2dd82b68a4806e21f.hk.png)

**步驟 3：** 打開 [VSCode.dev](https://vscode.dev)，選擇 `Open Remote Repository` 按鈕。

複製你剛剛為履歷網站建立的儲存庫的網址，並將其粘貼到輸入框中：

_將 `your-username` 替換為你的 GitHub 用戶名_

```
https://github.com/your-username/my-resume
```

✅ 如果成功，你將在瀏覽器中的文本編輯器中看到你的項目和 `index.html` 文件。

![建立新文件](../../../../translated_images/project-on-vscode.dev.e79815a9a95ee7feac72ebe5c941c91279716be37c575dbdbf2f43bea2c7d8b6.hk.png)

**步驟 4：** 打開 `index.html` 文件，將以下代碼粘貼到代碼區域並保存。

<details>
    <summary><b>負責履歷網站內容的 HTML 代碼。</b></summary>
    
        <html>

            <head>
                <link href="style.css" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
                <title>你的名字在這裡！</title>
            </head>
            <body>
                <header id="header">
                    <!-- 履歷標題，包含你的名字和職稱 -->
                    <h1>你的名字在這裡！</h1>
                    <hr>
                    你的角色！
                    <hr>
                </header>
                <main>
                    <article id="mainLeft">
                        <section>
                            <h2>聯絡方式</h2>
                            <!-- 聯絡信息，包括社交媒體 -->
                            <p>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <a href="mailto:username@domain.top-level domain">在這裡填寫你的電子郵件</a>
                            </p>
                            <p>
                                <i class="fab fa-github" aria-hidden="true"></i>
                                <a href="github.com/yourGitHubUsername">在這裡填寫你的用戶名！</a>
                            </p>
                            <p>
                                <i class="fab fa-linkedin" aria-hidden="true"></i>
                                <a href="linkedin.com/yourLinkedInUsername">在這裡填寫你的用戶名！</a>
                            </p>
                        </section>
                        <section>
                            <h2>技能</h2>
                            <!-- 你的技能 -->
                            <ul>
                                <li>技能 1！</li>
                                <li>技能 2！</li>
                                <li>技能 3！</li>
                                <li>技能 4！</li>
                            </ul>
                        </section>
                        <section>
                            <h2>教育背景</h2>
                            <!-- 你的教育背景 -->
                            <h3>在這裡填寫你的課程！</h3>
                            <p>
                                在這裡填寫你的學校名稱！
                            </p>
                            <p>
                                開始日期 - 結束日期
                            </p>
                        </section>            
                    </article>
                    <article id="mainRight">
                        <section>
                            <h2>關於我</h2>
                            <!-- 關於你的簡介 -->
                            <p>在這裡寫一段關於自己的簡介！</p>
                        </section>
                        <section>
                            <h2>工作經驗</h2>
                            <!-- 你的工作經驗 -->
                            <h3>職位名稱</h3>
                            <p>
                                公司名稱在這裡 | 開始月份 – 結束月份
                            </p>
                            <ul>
                                    <li>任務 1 - 描述你做了什麼！</li>
                                    <li>任務 2 - 描述你做了什麼！</li>
                                    <li>描述你的貢獻成果/影響</li>
                                    
                            </ul>
                            <h3>職位名稱 2</h3>
                            <p>
                                公司名稱在這裡 | 開始月份 – 結束月份
                            </p>
                            <ul>
                                    <li>任務 1 - 描述你做了什麼！</li>
                                    <li>任務 2 - 描述你做了什麼！</li>
                                    <li>描述你的貢獻成果/影響</li>
                                    
                            </ul>
                        </section>
                    </article>
                </main>
            </body>
        </html>
</details>

將你的履歷細節替換掉 HTML 代碼中的 _佔位文字_。

**步驟 5：** 將滑鼠懸停在 My-Resume 資料夾上，點擊 `New File ...` 圖標，並在你的項目中建立兩個新文件：`style.css` 和 `codeswing.json` 文件。

**步驟 6：** 打開 `style.css` 文件，將以下代碼粘貼進去並保存。

<details>
        <summary><b>用於格式化網站佈局的 CSS 代碼。</b></summary>
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-size: 16px;
                max-width: 960px;
                margin: auto;
            }
            h1 {
                font-size: 3em;
                letter-spacing: .6em;
                padding-top: 1em;
                padding-bottom: 1em;
            }

            h2 {
                font-size: 1.5em;
                padding-bottom: 1em;
            }

            h3 {
                font-size: 1em;
                padding-bottom: 1em;
            }
            main { 
                display: grid;
                grid-template-columns: 40% 60%;
                margin-top: 3em;
            }
            header {
                text-align: center;
                margin: auto 2em;
            }

            section {
                margin: auto 1em 4em 2em;
            }

            i {
                margin-right: .5em;
            }

            p {
                margin: .2em auto
            }

            hr {
                border: none;
                background-color: lightgray;
                height: 1px;
            }

            h1, h2, h3 {
                font-weight: 100;
                margin-bottom: 0;
            }
            #mainLeft {
                border-right: 1px solid lightgray;
            }
            
</details>

**步驟 6：** 打開 `codeswing.json` 文件，將以下代碼粘貼進去並保存。

    {
    "scripts": [],
    "styles": []
    }

**步驟 7：** 安裝 `Codeswing 擴展`，以便在代碼區域中可視化履歷網站。

點擊活動欄上的 _`Extensions`_ 圖標，輸入 Codeswing。點擊展開活動欄上的 _藍色安裝按鈕_ 或在選擇擴展以加載更多信息後，使用代碼區域中出現的安裝按鈕進行安裝。安裝擴展後，觀察你的代碼區域，查看項目變化 😃

![安裝擴展](../../../../8-code-editor/images/install-extension.gif)

安裝擴展後，你的屏幕上將顯示以下內容。

![Codeswing 擴展運行效果](../../../../translated_images/after-codeswing-extension-pb.0ebddddcf73b550994947a9084e35e2836c713ae13839d49628e3c764c1cfe83.hk.png)

如果你對所做的更改感到滿意，將滑鼠懸停在 `Changes` 資料夾上，點擊 `+` 按鈕以暫存更改。

輸入提交信息 _(描述你對項目所做的更改)_，並通過點擊 `check` 提交更改。完成項目後，選擇左上角的漢堡菜單圖標返回 GitHub 上的儲存庫。

恭喜 🎉 你已經在幾個步驟內使用 vscode.dev 建立了你的履歷網站。

## 🚀 挑戰

打開一個你有權限進行更改的遠端儲存庫，更新一些文件。接下來，嘗試建立一個包含更改的新分支並提交 Pull Request。

<!----
## 課後測驗
[課後測驗](https://ff-quizzes.netlify.app/web/quiz/4)
---->

## 回顧與自學

閱讀更多關於 [VSCode.dev](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza) 的內容以及它的其他功能。

---

**免責聲明**：  
本文件已使用人工智能翻譯服務 [Co-op Translator](https://github.com/Azure/co-op-translator) 進行翻譯。雖然我們致力於提供準確的翻譯，但請注意，自動翻譯可能包含錯誤或不準確之處。原始文件的母語版本應被視為權威來源。對於重要資訊，建議使用專業人工翻譯。我們對因使用此翻譯而引起的任何誤解或錯誤解釋概不負責。