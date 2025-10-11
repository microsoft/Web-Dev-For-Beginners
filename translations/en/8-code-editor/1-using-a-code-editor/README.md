<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "f8d4b0284f3fc1de7eb65073d8338cca",
  "translation_date": "2025-10-03T08:21:41+00:00",
  "source_file": "8-code-editor/1-using-a-code-editor/README.md",
  "language_code": "en"
}
-->
***

# Using a Code Editor: Mastering [VSCode.dev](https://vscode.dev)

**Welcome!**  
This lesson will guide you from the basics to advanced usage of [VSCode.dev](https://vscode.dev)—a powerful, web-based code editor. You'll learn how to confidently edit code, manage projects, track changes, install extensions, and collaborate like a professional—all directly from your browser, with no installation required.

***

## Learning Objectives

By the end of this lesson, you’ll be able to:

- Use a code editor efficiently for any project, anywhere
- Track your work seamlessly with built-in version control
- Customize and enhance your development workflow with editor settings and extensions

***

## Prerequisites

To get started, **sign up for a free [GitHub](https://github.com) account**, which allows you to manage code repositories and collaborate globally. If you don’t have an account yet, [create one here](https://github.com/).

***

## Why Use a Web-based Code Editor?

A **code editor** like VSCode.dev serves as your command center for writing, editing, and managing code. With its intuitive interface, extensive features, and instant browser access, you can:

- Work on projects from any device
- Skip the hassle of installations
- Collaborate and contribute instantly

Once you’re comfortable with VSCode.dev, you’ll be ready to tackle coding tasks anytime, anywhere.

***

## Getting Started with VSCode.dev

Visit **[VSCode.dev](https://vscode.dev)**—no installation or downloads required. Signing in with GitHub unlocks full functionality, including syncing your settings, extensions, and repositories. If prompted, connect your GitHub account.

After loading, your workspace will look like this:

![Default VSCode.dev](../../../../translated_images/default-vscode-dev.5d06881d65c1b3234ce50cd9ed3b0028e6031ad5f5b441bcbed96bfa6311f6d0.en.png)

It has three main sections from left to right:
- **Activity bar:** Icons like 🔎 (Search), ⚙️ (Settings), files, source control, etc.
- **Sidebar:** Changes context based on the selected activity bar icon (defaults to *Explorer* to display files).
- **Editor/code area:** The largest section on the right—where you’ll edit and view code.

Click through the icons to explore features, but return to the _Explorer_ to stay organized.

***

## Opening a GitHub Repository

### Method 1: From the Editor

1. Go to [VSCode.dev](https://vscode.dev). Click **"Open Remote Repository."**

   ![Open remote repository](../../../../translated_images/open-remote-repository.bd9c2598b8949e7fc283cdfc8f4050c6205a7c7c6d3f78c4b135115d037d6fa2.en.png)

2. Use the _Command Palette_ (Ctrl-Shift-P, or Cmd-Shift-P on Mac).

   ![Palette Menu](../../../../translated_images/palette-menu.4946174e07f426226afcdad707d19b8d5150e41591c751c45b5dee213affef91.en.png)

   - Select "Open remote repository."
   - Paste your GitHub repo URL (e.g., `https://github.com/microsoft/Web-Dev-For-Beginners`) and press Enter.

If successful, the entire project will load and be ready for editing!

***

### Method 2: Instantly via URL

Transform any GitHub repo URL to open directly in VSCode.dev by replacing `github.com` with `vscode.dev/github`.  
For example:

- GitHub: `https://github.com/microsoft/Web-Dev-For-Beginners`
- VSCode.dev: `https://vscode.dev/github/microsoft/Web-Dev-For-Beginners`

This feature makes accessing any project quick and easy.

***

## Editing Files in Your Project

Once your repository is open, you can:

### 1. **Create a New File**
- In the *Explorer* sidebar, navigate to your desired folder or use the root.
- Click the _‘New file ...’_ icon.
- Name your file, press **Enter**, and it will appear instantly.

![Create a new file](../../../../translated_images/create-new-file.2814e609c2af9aeb6c6fd53156c503ac91c3d538f9cac63073b2dd4a7631f183.en.png)

### 2. **Edit and Save Files**
- Click on a file in the *Explorer* to open it in the code area.
- Make your changes as needed.
- VSCode.dev automatically saves your changes, but you can press Ctrl+S to save manually.

![Edit a file](../../../../translated_images/edit-a-file.52c0ee665ef19f08119d62d63f395dfefddc0a4deb9268d73bfe791f52c5807a.en.png)

### 3. **Track & Commit Changes with Version Control**

VSCode.dev includes integrated **Git** version control!

- Click the _'Source Control'_ icon to view all changes made.
- Files in the `Changes` folder show additions (green) and deletions (red).  
  ![View changes](../../../../translated_images/working-tree.c58eec08e6335c79cc708c0c220c0b7fea61514bd3c7fb7471905a864aceac7c.en.png)

- Stage changes by clicking the `+` next to files to prepare for commit.
- **Discard** unwanted changes by clicking the undo icon.
- Type a clear commit message, then click the checkmark to commit and push.

To return to your repository on GitHub, select the hamburger menu at the top left.

![Stage & commit changes](../../../../translated_images/edit-vscode-dev.2a58bb663e7d19e04e7ccdc9fc645155a15de1e6e9797056df7cca697a3cf7b6.en.png)

***

## Leveling Up with Extensions

Extensions allow you to add languages, themes, debuggers, and productivity tools to VSCode.dev—making coding easier and more enjoyable.

### Browsing and Managing Extensions

- Click the **Extensions icon** on the activity bar.
- Search for an extension in the _'Search Extensions in Marketplace'_ box.

  ![Extension details](../../../../translated_images/extension-details.9f8f1fd4e9eb2de5069ae413119eb8ee43172776383ebe2f7cf640e11df2e106.en.png)

  - **Installed**: All extensions you’ve added
  - **Popular**: Industry favorites
  - **Recommended**: Tailored to your workflow

  ![View extensions](../../../../translated_images/view-extensions.2eed53221678066045e3684b9dabaafff07f590c7dfaec736457d0ac0017e867.en.png)

***

### 1. **Install Extensions**

- Enter the extension’s name in the search bar, click it, and review details in the editor.
- Hit the **blue Install button** in the sidebar _or_ in the main code area.

  ![Install extensions](../../../../translated_images/install-extension.84dd866e187d79492aa2c41b18f3878eeadaa70fece7a11ef63e2627dcc8792c.en.png)

### 2. **Customize Extensions**

- Find your installed extension.
- Click the **Gear icon** → select _Extension Settings_ to adjust behaviors to your preferences.

  ![Modify extension settings](../../../../translated_images/extension-settings.21c752ae4f4cdb78a867f140ccd0680e04619d0c44bb4afb26373e54b829d934.en.png)

### 3. **Manage Extensions**
You can:

- **Disable:** Temporarily turn off an extension while keeping it installed
- **Uninstall:** Permanently remove it if no longer needed

  Find the extension, hit the Gear icon, and select ‘Disable’ or ‘Uninstall,’ or use the blue buttons in the code area.

***

## Assignment

Test your skills: [Create a resume website using vscode.dev](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/8-code-editor/1-using-a-code-editor/assignment.md)

***

## Further Exploration and Self-Study

- Dive deeper with [the official VSCode Web Docs](https://code.visualstudio.com/docs/editor/vscode-web?WT.mc_id=academic-0000-alfredodeza).
- Explore advanced workspace features, keyboard shortcuts, and settings.

***

**Now you’re ready to code, create, and collaborate—from anywhere, on any device, using VSCode.dev!**

---

**Disclaimer**:  
This document has been translated using the AI translation service [Co-op Translator](https://github.com/Azure/co-op-translator). While we aim for accuracy, please note that automated translations may contain errors or inaccuracies. The original document in its native language should be regarded as the authoritative source. For critical information, professional human translation is recommended. We are not responsible for any misunderstandings or misinterpretations resulting from the use of this translation.