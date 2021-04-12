# Introduction to GitHub

This lesson covers the basics of GitHub, a platform to host and manage changes to your code.

![Intro to GitHub](/sketchnotes/webdev101-github.png)
> Sketchnote by [Tomomi Imura](https://twitter.com/girlie_mac)

## Pre-Lecture Quiz
[Pre-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/3)

## Introduction

In this lesson, we'll cover:

- tracking the work you do on your machine
- working on projects with others
- how to contribute to open source software

### Prerequisites

Before you begin, you'll need to check if Git is installed. In the terminal type: 
`git --version`

If Git is not installed, [download Git](https://git-scm.com/downloads). Then, setup your local Git profile in the terminal:
* `git config --global user.name "your-name"`
* `git config --global user.email "your-email"`

To check if Git is already configured you can type:
`git config --list`

You'll also need a GitHub account, a code editor (like Visual Studio Code), and you'll need to open your terminal (or: command prompt).

Navigate to [github.com](https://github.com/) and create an account if you haven't already, or log in and fill out your profile. 

✅ GitHub isn't the only code repository in the world; there are others, but GitHub is the best known

### Preparation

You'll need both a folder with a code project on your local machine (laptop or PC), and a public repository on GitHub, which will serve as an example for how to contribute to the projects of others.  

---

## Code management

Let's say you have a folder locally with some code project and you want to start tracking your progress using git - the version control system. Some people compare using git to writing a love letter to your future self. Reading your commit messages days or weeks or months later you'll be able to recall why you made a decision, or "rollback" a change - that is, when you write good "commit messages".

### Task: Make a repository and commit code

1. **Create repository on GitHub**. On GitHub.com, in the repositories tab, or from the navigation bar top-right, find the **new repo** button.

   1. Give your repository (folder) a name
   1. Select **create repository**.

1. **Navigate to your working folder**. In your terminal, switch to the folder (also known as the directory) you want to start tracking. Type:

   ```bash
   cd [name of your folder]
   ```

1. **Initialize a git repository**. In your project type:

   ```bash
   git init
   ```

1. **Check status**. To check the status of your repository type:

   ```bash
   git status
   ```

   the output can look something like this:

   ```output
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file.txt
        modified:   file2.txt
   ```

   Typically a `git status` command tells you things like what files are ready to be _saved_ to the repo or has changes on it that you might want to persist.

1. **Add all files for tracking**
   This also called as staging files/ adding files to the staging area.

   ```bash
   git add .
   ```

   The `git add` plus `.` argument indicates that all your files & changes for tracking. 

1. **Add selected files for tracking**

   ```bash
   git add [file or folder name]
   ```

   This helps us to add only selected files to the staging area when we don't want to commit all files at once.

1. **Unstage all files**

   ```bash
   git reset
   ```

   This command helps us to unstage all files at once.

1. **Unstage a particular file**

   ```bash
   git reset [file or folder name]
   ```

   This command helps us to unstage only a particular file at once that we don't want to include for the next commit.

1. **Persisting your work**. At this point you've added the files to a so called _staging area_. A place where Git is tracking your files. To make the change permanent you need to _commit_ the files. To do so you create a _commit_ with the `git commit` command. A _commit_ represents a saving point in the history of your repo. Type the following to create a _commit_:

   ```bash
   git commit -m "first commit"
   ```

   This commits all of your files, adding the message "first commit". For future commit messages you will want to be more descriptive in your description to convey what type of change you've made.

1. **Connect your local Git repo with GitHub**. A Git repo is good on your machine but at some point you want to have backup of your files somewhere and also invite other people to work with you on your repo. One such great place to do so is GitHub. Remember we've already created a repo on GitHub so the only thing we need to do is to connect our local Git repo with GitHub. The command `git remote add` will do just that. Type the following command:

   > Note, before you type the command go to your GitHub repo page to find the repository URL. You will use it in the below command. Replace `repository_name` with your GitHub URL.

   ```bash
   git remote add origin https://github.com/username/repository_name.git
   ```

   This creates a _remote_, or connection, named "origin" pointing at the GitHub repository you created earlier.

1. **Send local files to GitHub**. So far you've created a _connection_ between the local repo and the GitHub repo. Let's send these files to GitHub with the following command `git push`, like so: 

   ```bash
   git push -u origin main
   ```

   This sends your commits in your "main" branch to GitHub.

1. **To add more changes**. If you want to continue making changes and pushing them to GitHub you’ll just need to use the following three commands:

   ```bash
   git add .
   git commit -m "type your commit message here"
   git push
   ```

   > Tip, You might also want to adopt a `.gitignore` file to prevent files you don't want to track from showing up on GitHub - like that notes file you store in the same folder but has no place on a public repository. You can find templates for `.gitignore` files at [.gitignore templates](https://github.com/github/gitignore).

#### Commit messages

A great Git commit subject line completes the following sentence:
If applied, this commit will <your subject line here>

For the subject use the imperative, present tense: "change" not "changed" nor "changes". 
As in the subject, in the body (optional) also use the imperative, present tense. The body should include the motivation for the change and contrast this with previous behavior. You're explaining the `why`, not the `how`.

✅ Take a few minutes to surf around GitHub. Can you find a really great commit message? Can you find a really minimal one? What information do you think is the most important and useful to convey in a commit message?

### Task: Collaborate

The main reason for putting things on GitHub was to make it possible to collaborate with other developers.

## Working on projects with others

In your repository, navigate to `Insights > Community` to see how your project compares to recommended community standards.

   Here are some things that can improve your GitHub repo:
   - **Description**. Did you add a description for your project?
   - **README**. Did you add a README? GitHub provides guidance for writing a [README](https://docs.github.com/articles/about-readmes/).
   - **Contributing guideline**. Does your project have [contributing guidelines](https://docs.github.com/articles/setting-guidelines-for-repository-contributors/), 
   - **Code of Conduct**. a [Code of Conduct](https://docs.github.com/articles/adding-a-code-of-conduct-to-your-project/), 
   - **License**. Perhaps most importantly, a [license](https://docs.github.com/articles/adding-a-license-to-a-repository/)?


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

1. **Switch to working branch**. Switch to the specified branch and update the working directory with `git checkout`:

   ```bash
   git checkout [branch-name]
   ```

1. **Do work**. At this point you want to add your changes. Don't forget to tell Git about it with the following commands:

   ```bash
   git add .
   git commit -m "my changes"
   ```

   Ensure you give your commit a good name, for your sake as well as the maintainer of the repo you are helping on.

1. **Combine your work with the `main` branch**. At some point you are done working and you want to combine your work with that of the `main` branch. The `main` branch might have changed meanwhile so make sure you first update it to the latest with the following commands:

   ```bash
   git checkout main
   git pull
   ```

   At this point you want to make sure that any _conflicts_, situations where Git can't easily _combine_ the changes happens in your working branch. Therefore run the following commands:

   ```bash
   git checkout [branch_name]
   git merge main
   ```

   This will bring in all changes from `main` into your branch and hopefully you can just continue. If not, VS Code will tell you where Git is _confused_ and you just alter the affected files to say which content is the most accurate.

1. **Send your work to GitHub**. Sending your work to GitHub means two things. Pushing your branch to your repo and then open up a PR, Pull Request.

   ```bash
   git push --set-upstream origin [branch-name]
   ```

   The above command creates the branch on your forked repo.

1. **Open a PR**. Next, you want to open up a PR. You do that by navigating to the forked repo on GitHub. You will see an indication on GitHub where it asks whether you want to create a new PR, you click that and you are taken to an interface where you can change commit message title, give it a more suitable description. Now the maintainer of the repo you forked will see this PR and _fingers crossed_ they will appreciate and _merge_ your PR. You are now a contributor, yay :)

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

First, let's find a repository (or **repo**) on GitHub of interest to you and to which you'd like to contribute a change. You will want to copy its contents to your machine.

✅ A good way to find 'beginner-friendly' repos is to [search by the tag 'good-first-issue'](https://github.blog/2020-01-22-browse-good-first-issues-to-start-contributing-to-open-source/).

![Copy a repo locally](images/clone_repo.png)

There are several ways of copying code. One way is to "clone" the contents of the repository, using HTTPS, SSH, or using the GitHub CLI (Command Line Interface). 

Open your terminal and clone the repository like so:
`git clone https://github.com/ProjectURL`

To work on the project, switch to the right folder:
`cd ProjectURL`

You can also open the entire project using [Codespaces](https://github.com/features/codespaces), GitHub's embedded code editor / cloud development environment, or [GitHub Desktop](https://desktop.github.com/).

Lastly, you can download the code in a zipped folder. 

### A few more interesting things about GitHub

You can star, watch and/or "fork" any public repository on GitHub. You can find your starred repositories in the top-right drop-down menu. It's like bookmarking, but for code. 

Projects have an issue tracker, mostly on GitHub in the "Issues" tab unless indicated otherwise, where people discuss issues related to the project. And the Pull Requests tab is where people discuss and review changes that are in progress.

Projects might also have discussion in forums, mailing lists, or chat channels like Slack, Discord or IRC.

✅ Take a look around your new GitHub repo and try a few things, like editing settings, adding information to your repo, and creating a project (like a Kanban board). There's a lot you can do!

---

## 🚀 Challenge 

Pair with a friend to work on each other's code. Create a project collaboratively, fork code, create branches, and merge changes.

## Post-Lecture Quiz
[Post-lecture quiz](https://nice-beach-0fe9e9d0f.azurestaticapps.net/quiz/4)

## Review & Self Study

Read more about [contributing to open source software](https://opensource.guide/how-to-contribute/#how-to-submit-a-contribution). 

[Git cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/).

Practice, practice, practice. GitHub has great learning paths available via [lab.github.com](https://lab.github.com/):

- [First Week on GitHub](https://lab.github.com/githubtraining/first-week-on-github)

You'll also find more advanced labs. 

## Assignment 

Complete [the First Week on GitHub training lab](https://lab.github.com/githubtraining/first-week-on-github)
