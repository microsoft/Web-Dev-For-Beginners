# Introduction to Programming Languages and Tools of the Trade

This lesson covers the basics of programming languages. The topics covered here apply to most modern programming languages today. In the 'Tools of the Trade' section, you'll learn about useful software that helps you as a developer.

![Intro Programming](../../sketchnotes/webdev101-programming.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://forms.office.com/r/dru4TE0U9n?origin=lprLink)

## Introduction

In this lesson, we'll cover:

- What is programming?
- Types of programming languages
- Basic elements of a program
- Useful software and tooling for the professional developer

> You can take this lesson on [Microsoft Learn](https://docs.microsoft.com/learn/modules/web-development-101/introduction-programming/?WT.mc_id=academic-77807-sagibbon)!

## What is Programming?

Programming (also known as coding) is the process of writing instructions for a device such as a computer or mobile device. We write these instructions with a programming language, which is then interpreted by the device. These sets of instructions may be referred to by various names, but *program*, *computer program*, *application (app)*, and *executable* are a few popular names.

A *program* can be anything that is written with code; websites, games, and phone apps are programs. While it's possible to create a program without writing code, the underlying logic is interpreted by the device and that logic was most likely written with code. A program that is *running* or *executing* code is carrying out instructions. The device that you're reading this lesson with is running a program to print it to your screen.

✅ Do a little research: who is considered to have been the world's first computer programmer?

## Programming Languages

Programming languages enable developers to write instructions for a device. Devices can only understand binary (1s and 0s), and for *most* developers that's not a very efficient way to communicate. Programming languages are the vehicle for communication between humans and computers.

Programming languages come in different formats and may serve different purposes. For example, JavaScript is primarily used for web applications, while Bash is primarily used for operating systems.

*Low level languages* typically require fewer steps than *high level languages* for a device to interpret instructions. However, what makes high level languages popular is their readability and support. JavaScript is considered a high level language.

The following code illustrates the difference between a high level language with JavaScript and a low level language with ARM assembly code.

```javascript
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
```

```c
 area ascen,code,readonly
 entry
 code32
 adr r0,thumb+1
 bx r0
 code16
thumb
 mov r0,#00
 sub r0,r0,#01
 mov r1,#01
 mov r4,#10
 ldr r2,=0x40000000
back add r0,r1
 str r0,[r2]
 add r2,#04
 mov r3,r0
 mov r0,r1
 mov r1,r3
 sub r4,#01
 cmp r4,#00
 bne back
 end
```

Believe it or not, *they're both doing the same thing*: printing a Fibonacci sequence up to 10.

✅ A Fibonacci sequence is [defined](https://en.wikipedia.org/wiki/Fibonacci_number) as a set of numbers such that each number is the sum of the two preceding ones, starting from 0 and 1. The first 10 numbers following the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21 and 34.

## Elements of a Program

A single instruction in a program is called a *statement* and will usually have a character or line spacing that marks where the instruction ends, or *terminates*. How a program terminates varies with each language.

Statements within a program may rely on data provided by a user or elsewhere to carry out instructions. Data can change how a program behaves, so programming languages come with a way to temporarily store data so that it can be used later. These are called *variables*. Variables are statements that instruct a device to save data in its memory. Variables in programs are similar to variables in algebra, where they have a unique name and their value may change over time.

There's a chance that some statements will not be executed by a device. This is usually by design when written by the developer or by accident when an unexpected error occurs. This type of control over an application makes it more robust and maintainable. Typically, these changes in control happen when certain conditions are met. A common statement used in modern programming to control how a program runs is the `if..else` statement.

✅ You'll learn more about this type of statement in subsequent lessons.

## Tools of the Trade

[![Tools of the Trade](https://img.youtube.com/vi/69WJeXGBdxg/0.jpg)](https://youtube.com/watch?v=69WJeXGBdxg "Tools of the Trade")

> 🎥 Click the image above for a video about tooling

In this section, you'll learn about some software that you may find to be very useful as you start your professional development journey.

A **development environment** is a unique set of tools and features that a developer uses often when writing software. Some of these tools have been customized for a developer's specific needs, and may change over time if that developer changes priorities in work, personal projects, or when they use a different programming language. Development environments are as unique as the developers who use them.

### Editors

One of the most crucial tools for software development is the editor. Editors are where you write your code and sometimes where you run your code.

Developers rely on editors for a few additional reasons:

- *Debugging* helps uncover bugs and errors by stepping through the code, line by line. Some editors have debugging capabilities; they can be customized and added for specific programming languages.
- *Syntax highlighting* adds colors and text formatting to code, making it easier to read. Most editors allow customized syntax highlighting.
- *Extensions and Integrations* are specialized tools for developers, by developers. These tools weren't built into the base editor. For example, many developers document their code to explain how it works. They may install a spell check extension to help find typos within the documentation. Most extensions are intended for use within a specific editor, and most editors come with a way to search for available extensions.
- *Customization* enables developers to create a unique development environment to suit their needs. Most editors are extremely customizable and may also allow developers to create custom extensions.

#### Popular Editors and Web Development Extensions

- [Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=academic-77807-sagibbon)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Atom (discontinued)](https://atom.io/)
  - [spell-check](https://atom.io/packages/spell-check)
  - [teletype](https://atom.io/packages/teletype)
  - [atom-beautify](https://atom.io/packages/atom-beautify)
  

- [Sublime Text](https://www.sublimetext.com/)

  - [emmet](https://emmet.io/)
  - [SublimeLinter](http://www.sublimelinter.com/en/stable/)

### Browsers

Another crucial tool is the browser. Web developers rely on the browser to see how their code runs on the web. It's also used to display the visual elements of a web page that are written in the editor, like HTML.

Many browsers come with *developer tools* (DevTools) that contain a set of helpful features and information to help developers collect and capture important information about their application. For example: If a web page has errors, it's sometimes helpful to know when they occurred. DevTools in a browser can be configured to capture this information.

#### Popular Browsers and DevTools

- [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/?WT.mc_id=academic-77807-sagibbon)
- [Chrome](https://developers.google.com/web/tools/chrome-devtools/)
- [Firefox](https://developer.mozilla.org/docs/Tools)

### Command Line Tools

Some developers prefer a less graphical view for their daily tasks and rely on the command line to achieve this. Writing code requires a significant amount of typing and some developers prefer to not disrupt their flow on the keyboard. They will use keyboard shortcuts to swap between desktop windows, work on different files, and use tools. Most tasks can be completed with a mouse, but one benefit of using the command line is that a lot can be done with command line tools without the need of swapping between the mouse and keyboard. Another benefit of the command line is that they're configurable and you can save a custom configuration, change it later, and import it to other development machines. Because development environments are so unique to each developer, some will avoid using the command line, some will rely on it entirely, and some prefer a mix of the two.

### Popular Command Line Options

Options for the command line will differ based on the operating system you use.

*💻 = comes preinstalled on the operating system.*

#### Windows

- [Powershell](https://docs.microsoft.com/powershell/scripting/overview?view=powershell-7/?WT.mc_id=academic-77807-sagibbon) 💻
- [Command Line](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands/?WT.mc_id=academic-77807-sagibbon) (also known as CMD) 💻
- [Windows Terminal](https://docs.microsoft.com/windows/terminal/?WT.mc_id=academic-77807-sagibbon)
- [mintty](https://mintty.github.io/)
  
#### MacOS

- [Terminal](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) 💻
- [iTerm](https://iterm2.com/)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-macos?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Linux

- [Bash](https://www.gnu.org/software/bash/manual/html_node/index.html) 💻
- [KDE Konsole](https://docs.kde.org/trunk5/en/konsole/konsole/index.html)
- [Powershell](https://docs.microsoft.com/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-7/?WT.mc_id=academic-77807-sagibbon)

#### Popular Command Line Tools

- [Git](https://git-scm.com/) (💻 on most operating systems)
- [NPM](https://www.npmjs.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/cli/)

### Documentation

When a developer wants to learn something new, they'll most likely turn to documentation to learn how to use it. Developers often rely on documentation to guide them through how to use tools and languages properly, and also to gain deeper knowledge of how it works.

#### Popular Documentation on Web Development

- [Mozilla Developer Network (MDN)](https://developer.mozilla.org/docs/Web), from Mozilla, the publishers of the [Firefox](https://www.mozilla.org/firefox/) browser
- [Frontend Masters](https://frontendmasters.com/learn/)
- [Web.dev](https://web.dev), from Google, publishers of [Chrome](https://www.google.com/chrome/)
- [Microsoft's own developer docs](https://docs.microsoft.com/microsoft-edge/#microsoft-edge-for-developers), for [Microsoft Edge](https://www.microsoft.com/edge)
- [W3 Schools](https://www.w3schools.com/where_to_start.asp)

✅ Do some research: Now that you know the basics of a web developer's environment, compare and contrast it with a web designer's environment.

---

## 🚀 Challenge

Compare some programming languages. What are some of the unique traits of JavaScript vs. Java? How about COBOL vs. Go?

## Post-Lecture Quiz
[Post-lecture quiz](https://ashy-river-0debb7803.1.azurestaticapps.net/quiz/2)

## Review & Self Study

Study a bit on the different languages available to the programmer. Try to write a line in one language, and then rewrite it in two others. What did you learn?

## Assignment

[Reading the Docs](assignment.md)
