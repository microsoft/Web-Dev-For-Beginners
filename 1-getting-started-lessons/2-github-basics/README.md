# Introduction to GitHub

GitHub is one of the most essential platforms in modern web development, serving as the collaborative backbone for millions of developers worldwide. Think of it as a combination of cloud storage for your code and a social network for programmers – it's where developers share their work, collaborate on projects, and contribute to the open-source community that powers much of the internet you use every day.

In this lesson, you'll discover how GitHub transforms the way developers work together. You'll learn to track changes in your code, collaborate with others seamlessly, and even contribute to projects used by millions of people. This isn't just about storing code online – it's about joining a global community of developers and learning the fundamental workflows that every professional developer uses.

By the end of this lesson, you'll have your own GitHub repository, understand how to manage code changes with Git, and know how to contribute to open-source projects. These skills will serve as your foundation for collaborating with other developers throughout your web development journey. Let's dive in and unlock the power of collaborative coding!

![Intro to GitHub](../../sketchnotes/webdev101-github.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://ff-quizzes.netlify.app)

## Introduction

Before we dive into hands-on GitHub activities, let's establish the foundation you'll need for success. Understanding the key concepts and ensuring your development environment is properly configured will make your GitHub journey much smoother.

In this section, we'll cover the essential knowledge and tools that every developer needs when working with GitHub. Don't worry if some concepts seem unfamiliar at first – we'll guide you through each step and explain why these tools are so valuable for web developers.

In this lesson, we'll cover:

- tracking the work you do on your machine
- working on projects with others
- how to contribute to open source software

### Prerequisites

Setting up your development environment properly is crucial for a smooth GitHub experience. Think of this as preparing your toolkit before starting a project – having the right tools configured correctly will save you time and frustration later.

Let's ensure you have everything you need to start collaborating with Git and GitHub effectively.

Before you begin, you'll need to check if Git is installed. In the terminal type: 
`git --version`

If Git is not installed, [download Git](https://git-scm.com/downloads). Then, setup your local Git profile in the terminal:

> 💡 **First Time Setup**: These commands tell Git who you are. This information will be attached to every commit you make, so choose a name and email you're comfortable sharing publicly.

```bash
git config --global user.name "your-name"
git config --global user.email "your-email"
```

To check if Git is already configured you can type:
```bash
git config --list
```

You'll also need a GitHub account, a code editor (like Visual Studio Code), and you'll need to open your terminal (or: command prompt).

Navigate to [github.com](https://github.com/) and create an account if you haven't already, or log in and fill out your profile. 

💡 **Modern tip**: Consider setting up [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) or using [GitHub CLI](https://cli.github.com/) for easier authentication without passwords. 

✅ GitHub isn't the only code repository in the world; there are others, but GitHub is the best known

### Preparation

You'll need both a folder with a code project on your local machine (laptop or PC), and a public repository on GitHub, which will serve as an example for how to contribute to the projects of others.  

### Modern Security Practices

Security in software development isn't just important – it's essential. As you begin your journey with GitHub, establishing secure practices from the start will protect your code, your collaborators, and the projects you contribute to.

Modern development workflows prioritize security at every step. Let's explore the key security practices that every developer should know when working with GitHub and Git.

When working with GitHub, it's important to follow security best practices:

When working with GitHub, it's important to follow security best practices:

| Security Area | Best Practice | Why It Matters |
|---------------|---------------|----------------|
| **Authentication** | Use SSH keys or Personal Access Tokens | Passwords are less secure and being phased out |
| **Two-Factor Authentication** | Enable 2FA on your GitHub account | Adds an extra layer of account protection |
| **Repository Security** | Never commit sensitive information | API keys and passwords should never be in public repos |
| **Dependency Management** | Enable Dependabot for updates | Keeps your dependencies secure and up-to-date |

> ⚠️ **Critical Security Reminder**: Never commit API keys, passwords, or other sensitive information to any repository. Use environment variables and `.gitignore` files to protect sensitive data.

**Modern Authentication Setup:**

```bash
# Generate SSH key (modern ed25519 algorithm)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Set up Git to use SSH
git remote set-url origin git@github.com:username/repository.git
```

> 💡 **Pro Tip**: SSH keys eliminate the need to enter passwords repeatedly and are more secure than traditional authentication methods.

---

## Code management

Now that you understand the importance of GitHub and have your environment set up, let's dive into the practical skills you'll use every day as a developer. Code management with Git is like maintaining a detailed journal of your project's evolution – every change, every decision, and every milestone is carefully tracked and preserved.

Think of Git as your coding time machine. You can see exactly what changed, when it changed, and why it changed. This becomes incredibly valuable when working on complex projects or collaborating with others.

Let's say you have a folder locally with some code project and you want to start tracking your progress using git - the version control system. Some people compare using git to writing a love letter to your future self. Reading your commit messages days or weeks or months later you'll be able to recall why you made a decision, or "rollback" a change - that is, when you write good "commit messages".

### Task: Make a repository and commit code  

> 🎯 **Learning Goal**: By the end of this task, you'll have created your first GitHub repository and made your first commit. This is your entry point into the world of version control!

> Check out video
> 
> [![Git and GitHub basics video](https://img.youtube.com/vi/9R31OUPpxU4/0.jpg)](https://www.youtube.com/watch?v=9R31OUPpxU4)

**Step-by-Step Workflow:**


1. **Create repository on GitHub**. On GitHub.com, in the repositories tab, or from the navigation bar top-right, find the **New** button (green button) or the **+** dropdown and select **New repository**.

   1. Give your repository (folder) a name
   1. Add a description (optional but recommended)
   1. Choose to make it public or private
   1. Consider adding a README file, .gitignore, and license
   1. Select **Create repository**.

1. **Navigate to your working folder**. In your terminal, switch to the folder (also known as the directory) you want to start tracking. Type:

   ```bash
   cd [name of your folder]
   ```

   **Here's what this command does:**
   - **Navigate** to your project directory where your code files are located
   - **Prepare** the environment for Git initialization and tracking

1. **Initialize a git repository**. In your project type:

   ```bash
   git init
   ```

   **Step by step, here's what's happening:**
   - **Create** a hidden `.git` folder that contains all version control information
   - **Transform** your regular folder into a Git repository that can track changes
   - **Set up** the foundation for version control in your project

1. **Check status**. To check the status of your repository type:

   ```bash
   git status
   ```

   **Understanding the output:**
   
   The output might look something like this:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   **What you need to know about this output:**
   - **Red text** typically indicates files that have changes but aren't ready for commit
   - **Green text** shows files that are staged and ready to be committed
   - **Helpful hints** are provided about what commands you can use next

   > 💡 **Understanding Git Status**: This command is your best friend! It tells you exactly what Git sees in your project and what actions you can take next.

   The `git status` command tells you things like what files are ready to be _saved_ to the repo or have changes that you might want to persist.

1. **Add all files for tracking** (also called staging files):

   ```bash
   git add .
   ```

   **Here's what this command does:**
   - **Stage** all modified and new files in your project directory
   - **Prepare** these files to be included in your next commit
   - **Mark** files as ready for the permanent snapshot we'll create next

   The `git add` command with the `.` argument indicates that all your files & changes are ready for tracking.

1. **Add selected files for tracking** (selective staging):

   ```bash
   git add [file or folder name]
   ```

   **When to use selective staging:**
   - **Organize** related changes into separate commits for cleaner history
   - **Include** only the files that belong together logically
   - **Create** more meaningful commit messages by grouping related work

   > 💡 **Pro Tip**: Use selective adding when you want to commit related changes together. This creates more meaningful commit history.

1. **Unstage files** (if you change your mind):

   ```bash
   # Unstage all files
   git reset
   
   # Unstage a particular file
   git reset [file or folder name]
   ```

   **Understanding unstaging:**
   - **Remove** files from the staging area without losing your changes
   - **Keep** your modifications but exclude them from the next commit
   - **Reorganize** what you want to include in your commit

1. **Persisting your work** (making a commit). At this point you've added the files to a so called _staging area_. A place where Git is tracking your files. To make the change permanent you need to _commit_ the files. To do so you create a _commit_ with the `git commit` command. A _commit_ represents a saving point in the history of your repo. Type the following to create a _commit_:

   ```bash
   git commit -m "first commit"
   ```

   **What happens when you commit:**
   - **Create** a permanent snapshot of all staged files at this point in time
   - **Record** the commit message to explain what changes were made
   - **Generate** a unique identifier (hash) for this specific set of changes
   - **Add** this snapshot to your project's version history

   > 💡 **Commit Message Tips**: Your first commit message can be simple, but for future commits, be descriptive! Good examples: "Add user login functionality" or "Fix navigation menu bug".

   This commits all of your files, adding the message "first commit". For future commit messages you will want to be more descriptive to convey what type of change you've made.

1. **Connect your local Git repo with GitHub**. A Git repo is good on your machine but at some point you want to have backup of your files somewhere and also invite other people to work with you on your repo. One such great place to do so is GitHub. Remember we've already created a repo on GitHub so the only thing we need to do is to connect our local Git repo with GitHub. The command `git remote add` will do just that. Type the following command:

   > Note, before you type the command go to your GitHub repo page to find the repository URL. You will use it in the below command. Replace `https://github.com/username/repository_name.git` with your GitHub URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   **Step by step, here's what's happening:**
   - **Create** a connection named "origin" that points to your GitHub repository
   - **Link** your local Git repository with the remote repository on GitHub
   - **Enable** the ability to push your local commits to GitHub and pull changes from GitHub

   💡 **Modern alternative**: You can also use the GitHub CLI to create and connect your repository in one step:
   ```bash
   gh repo create my-repo --public --push --source=.
   ```

   This creates a _remote_, or connection, named "origin" pointing at the GitHub repository you created earlier.

1. **Send local files to GitHub**. So far you've created a _connection_ between the local repo and the GitHub repo. Let's send these files to GitHub with the following command `git push`, like so: 

   ```bash
   git push -u origin main
   ```

   **Breaking down this command:**
   - **Upload** your commits from the "main" branch to GitHub
   - **Set** the upstream branch using `-u` to establish a permanent link
   - **Enable** simplified future pushes without specifying branch names

   This sends your commits in your "main" branch to GitHub. Setting the `upstream` branch with `-u` in the command establishes a link between your local branch and the remote branch, so you can simply use `git push` or `git pull` without specifying the branch name in the future.

   💡 **Note**: If your default branch is named differently (like "master"), replace "main" with your actual branch name. You can check your current branch with `git branch --show-current`.

2. **To add more changes** (daily workflow). If you want to continue making changes and pushing them to GitHub you'll just need to use the following three commands:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   **Step by step, here's your daily workflow:**
   - **Stage** your modified files with `git add .` (or add specific files)
   - **Commit** your changes with a descriptive message about what you've accomplished
   - **Push** to GitHub to backup your work and share it with others

   > 💡 **Tip**: You might also want to adopt a `.gitignore` file to prevent files you don't want to track from showing up on GitHub - like that notes file you store in the same folder but has no place on a public repository. You can find templates for `.gitignore` files at [.gitignore templates](https://github.com/github/gitignore) or create one using [gitignore.io](https://www.toptal.com/developers/gitignore).

#### Modern Git workflows

Consider adopting these modern practices:

- **Conventional Commits**: Use a standardized commit message format like `feat:`, `fix:`, `docs:`, etc. Learn more at [conventionalcommits.org](https://www.conventionalcommits.org/)
- **Atomic commits**: Make each commit represent a single logical change
- **Frequent commits**: Commit often with descriptive messages rather than large, infrequent commits

#### Commit messages

A great Git commit subject line completes the following sentence:
If applied, this commit will <your subject line here>

For the subject use the imperative, present tense: "change" not "changed" nor "changes". 
As in the subject, in the body (optional) also use the imperative, present tense. The body should include the motivation for the change and contrast this with previous behavior. You're explaining the `why`, not the `how`.

✅ Take a few minutes to surf around GitHub. Can you find a really great commit message? Can you find a really minimal one? What information do you think is the most important and useful to convey in a commit message?

## Working on projects with others

Collaboration is where GitHub truly shines. While managing your own code is valuable, the real magic happens when developers work together to build something amazing. GitHub transforms solo coding into a collaborative symphony where multiple developers can contribute simultaneously without stepping on each other's toes.

In this section, you'll learn how to make your projects welcoming to other developers and how to contribute meaningfully to existing projects. These collaboration skills are what separate hobbyist coders from professional developers.

> Check out video
>
> [![Git and GitHub basics video](https://img.youtube.com/vi/bFCM-PC3cu8/0.jpg)](https://www.youtube.com/watch?v=bFCM-PC3cu8)

The main reason for putting things on GitHub was to make it possible to collaborate with other developers.

In your repository, navigate to `Insights > Community` to see how your project compares to recommended community standards.

> 🎯 **Making Your Repository Professional**: A well-documented repository attracts more contributors and shows that you care about code quality.

**Essential Repository Elements:**

| Element | Purpose | Why It Matters |
|---------|---------|----------------|
| **Description** | Brief summary of your project | Helps people understand what your project does at a glance |
| **README** | Detailed project documentation | The first thing people read - make it count! |
| **Contributing Guidelines** | Instructions for contributors | Shows you welcome collaboration and sets clear expectations |
| **Code of Conduct** | Community behavior standards | Creates a welcoming environment for all contributors |
| **License** | Usage permissions | Defines how others can legally use your code |
| **Security Policy** | Vulnerability reporting process | Shows you take security seriously |

> 💡 **Pro Tip**: GitHub provides templates for all of these files. When creating a new repository, check the boxes to automatically generate these files.

**Modern GitHub Features to Explore:**

🤖 **Automation & CI/CD:**
- **GitHub Actions** for automated testing and deployment
- **Dependabot** for automatic dependency updates

💬 **Community & Project Management:**
- **GitHub Discussions** for community conversations beyond issues
- **GitHub Projects** for kanban-style project management
- **Branch protection rules** to enforce code quality standards


All these resources will benefit onboarding new team members. And those are typically the kind of things new contributors look at before even looking at your code, to find out if your project is the right place for them to be spending their time.

✅ README files, although they take time to prepare, are often neglected by busy maintainers. Can you find an example of a particularly descriptive one? Note: there are some [tools to help create good READMEs](https://www.makeareadme.com/) that you might like to try.

### Task: Merge some code

Contributing docs help people contribute to the project. It explains what types of contributions you're looking for and how the process works. Contributors will need to go through a series of steps to be able to contribute to your repo on GitHub:


1. **Forking your repo** You will probably want people to _fork_ your project. Forking means creating a replica of your repository on their GitHub profile.
1. **Clone**. From there they will clone the project to their local machine. 
1. **Create a branch**. You will want to ask them to create a _branch_ for their work. 
1. **Focus their change on one area**. Ask contributors to concentrate their contributions on one thing at a time - that way the chances that you can _merge_ in their work is higher. Imagine they write a bug fix, add a new feature, and update several tests - what if you want to, or can only implement 2 out of 3, or 1 out of 3 changes?

✅ Imagine a situation where branches are particularly critical to writing and shipping good code. What use cases can you think of?

> Note, be the change you want to see in the world, and create branches for your own work as well. Any commits you make will be made on the branch you’re currently “checked out” to. Use `git status` to see which branch that is.

Let's go through a contributor workflow. Assume the contributor has already _forked_ and _cloned_ the repo so they have a Git repo ready to be worked on, on their local machine:

1. **Create a branch**. Use the command `git branch` to create a branch that will contain the changes they mean to contribute:

   ```bash
   git branch [branch-name]
   ```

   > 💡 **Modern Approach**: You can also create and switch to the new branch in one command:
   ```bash
   git switch -c [branch-name]
   ```

1. **Switch to working branch**. Switch to the specified branch and update the working directory with `git switch`:

   ```bash
   git switch [branch-name]
   ```

   > 💡 **Modern Note**: `git switch` is the modern replacement for `git checkout` when changing branches. It's clearer and safer for beginners.

1. **Do work**. At this point you want to add your changes. Don't forget to tell Git about it with the following commands:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   > ⚠️ **Commit Message Quality**: Ensure you give your commit a good name, both for your sake and the maintainer of the repo you are helping on. Be specific about what you changed!

1. **Combine your work with the `main` branch**. At some point you are done working and you want to combine your work with that of the `main` branch. The `main` branch might have changed meanwhile so make sure you first update it to the latest with the following commands:

   ```bash
   git switch main
   git pull
   ```

   At this point you want to make sure that any _conflicts_, situations where Git can't easily _combine_ the changes happens in your working branch. Therefore run the following commands:

   ```bash
   git switch [branch_name]
   git merge main
   ```

   The `git merge main` command will bring in all changes from `main` into your branch. Hopefully you can just continue. If not, VS Code will tell you where Git is _confused_ and you just alter the affected files to say which content is the most accurate.

   💡 **Modern alternative**: Consider using `git rebase` for a cleaner history:
   ```bash
   git rebase main
   ```
   This replays your commits on top of the latest main branch, creating a linear history.

1. **Send your work to GitHub**. Sending your work to GitHub means two things. Pushing your branch to your repo and then open up a PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   The above command creates the branch on your forked repo.

1. **Open a PR**. Next, you want to open up a PR. You do that by navigating to the forked repo on GitHub. You will see an indication on GitHub where it asks whether you want to create a new PR, you click that and you are taken to an interface where you can change commit message title, give it a more suitable description. Now the maintainer of the repo you forked will see this PR and _fingers crossed_ they will appreciate and _merge_ your PR. You are now a contributor, yay :)

   💡 **Modern tip**: You can also create PRs using GitHub CLI:
   ```bash
   gh pr create --title "Your PR title" --body "Description of changes"
   ```

   🔧 **Best practices for PRs**:
   - Link to related issues using keywords like "Fixes #123"
   - Add screenshots for UI changes
   - Request specific reviewers
   - Use draft PRs for work-in-progress
   - Ensure all CI checks pass before requesting review

1. **Clean up**. It's considered good practice to _clean up_ after you successfully merge a PR. You want to clean up both your local branch and the branch you pushed to GitHub. First let's delete it locally with the following command: 

   ```bash
   git branch -d [branch-name]
   ```

   Ensure you go the GitHub page for the forked repo next and remove the remote branch you just pushed to it.

`Pull request` seems like a silly term because really you want to push your changes to the project. But the maintainer (project owner) or core team needs to consider your changes before merging it with the project's "main" branch, so you're really requesting a change decision from a maintainer.  

A pull request is the place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more. A good pull request follows roughly the same rules as a commit message. You can add a reference to an issue in the issue tracker, when your work for instance fixes an issue. This is done using a `#` followed by the number of your issue. For example `#97`.

🤞Fingers crossed that all checks pass and the project owner(s) merge your changes into the project🤞

Update your current local working branch with all new commits from the corresponding remote branch on GitHub:

`git pull`

## How to contribute to open source

Contributing to open source projects is one of the most rewarding experiences in web development. It's your opportunity to give back to the community, learn from experienced developers, and make a real impact on software used by thousands or even millions of people.

The beauty of open source contribution is that everyone started as a beginner. The developers who created the tools you're learning with today were once exactly where you are now. By contributing to open source, you become part of this continuous cycle of learning and sharing that drives innovation in web development.

First, let's find a repository (or **repo**) on GitHub of interest to you and to which you'd like to contribute a change. You will want to copy its contents to your machine.

✅ A good way to find 'beginner-friendly' repos is to [search by the tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copy a repo locally](images/clone_repo.png)

There are several ways of copying code. One way is to "clone" the contents of the repository, using HTTPS, SSH, or using the GitHub CLI (Command Line Interface). 

Open your terminal and clone the repository like so:
```bash
# Using HTTPS
git clone https://github.com/ProjectURL

# Using SSH (requires SSH key setup)
git clone git@github.com:username/repository.git

# Using GitHub CLI
gh repo clone username/repository
```

To work on the project, switch to the right folder:
`cd ProjectURL`

You can also open the entire project using:
- **[GitHub Codespaces](https://github.com/features/codespaces)** - GitHub's cloud development environment with VS Code in the browser
- **[GitHub Desktop](https://desktop.github.com/)** - A GUI application for Git operations  
- **[GitHub.dev](https://github.dev)** - Press the `.` key on any GitHub repo to open VS Code in the browser
- **VS Code** with the GitHub Pull Requests extension

Lastly, you can download the code in a zipped folder. 

### A few more interesting things about GitHub

You can star, watch and/or "fork" any public repository on GitHub. You can find your starred repositories in the top-right drop-down menu. It's like bookmarking, but for code. 

Projects have an issue tracker, mostly on GitHub in the "Issues" tab unless indicated otherwise, where people discuss issues related to the project. And the Pull Requests tab is where people discuss and review changes that are in progress.

Projects might also have discussion in forums, mailing lists, or chat channels like Slack, Discord or IRC.

🔧 **Modern GitHub features**:
- **GitHub Discussions** - Built-in forum for community conversations
- **GitHub Sponsors** - Support maintainers financially  
- **Security tab** - Vulnerability reports and security advisories
- **Actions tab** - See automated workflows and CI/CD pipelines
- **Insights tab** - Analytics about contributors, commits, and project health
- **Projects tab** - GitHub's built-in project management tools

✅ Take a look around your new GitHub repo and try a few things, like editing settings, adding information to your repo, creating a project (like a Kanban board), and setting up GitHub Actions for automation. There's a lot you can do!

---

## 🚀 Challenge 

Pair with a friend to work on each other's code. Create a project collaboratively, fork code, create branches, and merge changes.

## Post-Lecture Quiz
[Post-lecture quiz](https://ff-quizzes.netlify.app/web/en/)

## Review & Self Study

Read more about [contributing to open source software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Practice, practice, practice. GitHub has great learning paths available via [GitHub Skills](https://skills.github.com):

- [Introduction to GitHub](https://github.com/skills/introduction-to-github)
- [Communicate using Markdown](https://github.com/skills/communicate-using-markdown)  
- [GitHub Pages](https://github.com/skills/github-pages)
- [Managing merge conflicts](https://github.com/skills/resolve-merge-conflicts)

**Additional modern resources**:
- [GitHub CLI documentation](https://cli.github.com/manual/)
- [GitHub Codespaces documentation](https://docs.github.com/en/codespaces)
- [GitHub Actions documentation](https://docs.github.com/en/actions)
- [Git best practices](https://www.atlassian.com/git/tutorials/comparing-workflows) 

## GitHub Copilot Agent Challenge 🚀

Use the Agent mode to complete the following challenge:

**Description:** Create a collaborative web development project that demonstrates the complete GitHub workflow you've learned in this lesson. This challenge will help you practice repository creation, collaboration features, and modern Git workflows in a real-world scenario.

**Prompt:** Create a new public GitHub repository for a simple "Web Development Resources" project. The repository should include a well-structured README.md file listing useful web development tools and resources, organized by categories (HTML, CSS, JavaScript, etc.). Set up the repository with proper community standards including a license, contributing guidelines, and a code of conduct. Create at least two feature branches: one for adding CSS resources and another for JavaScript resources. Make commits to each branch with descriptive commit messages, then create pull requests to merge the changes back to main. Enable GitHub features like Issues, Discussions, and set up a basic GitHub Actions workflow for automated checks.

## Assignment 

Complete the [Introduction to GitHub](https://github.com/skills/introduction-to-github) course on GitHub Skills.

**Optional advanced assignments**:
- Set up SSH authentication for your GitHub account
- Try using GitHub CLI for common operations
- Create a repository with GitHub Actions workflow
- Explore GitHub Codespaces by opening this repository in a codespace
