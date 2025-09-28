# 🧠 01 - Git and GitHub

> TLDR; Learn the basics of Git and GitHub — your essential tools for coding as a team.  
> Think of Git as your **time machine for code** and GitHub as the **online garage where you store and share it**.

## 📚 Table of Contents

1. [🔍 Topic Overview](#-topic-overview)
2. [📦 Project Setup](#-project-setup)
3. [📄 Command Walkthrough](#-command-walkthrough)
4. [🧪 Exercises](#-exercises)
5. [📝 Bonus Resources](#-bonus-resources)
6. [🙌 Contributors](#-contributors)

## 🔍 Topic Overview

- **Introduction to Git & GitHub**  
  What Git is, why it matters, and how GitHub makes teamwork easier.  
  > Git = the engine. GitHub = the cloud garage + social hub.  

- **The Core Workflow**  
  Understand the three Git states (Working Directory, Staging, Repository) with simple analogies,  
  and practice the basic cycle of saving and syncing your work.  

- **Connecting to GitHub**  
  Learn how to push and pull changes, publish your local repo to GitHub, and clone projects from the cloud.  

- **Branching & Merging**  
  Safely experiment with new features using branches, then merge them back into `main` without breaking the project.  

- **Merge Conflicts**  
  What they are, why they happen, and how to resolve them easily in VS Code.  

- **Hands-On Activities**  
  - Fork & clone a repo  
  - Create branches and push to GitHub  
  - Practice resolving merge conflicts  
  - Set up a team project repo together  

- **Best Practices & Tips**  
  Commit often, write clear messages, pull frequently, and use `.gitignore` to stay safe.  

> By the end of this session, students will have **set up Git + GitHub, learned the teamwork workflow,  
> and built confidence in collaborating on code projects.**

## 📦 Project Setup

Before starting, make sure your tools are ready:

### 1. Install Git  
VS Code requires Git to manage version control.  

- **macOS:** Install [Homebrew](https://brew.sh/), then run:  
  ```bash
  brew install git
  ```

- **Windows:** Download and install [Git for Windows](https://git-scm.com/downloads/win).

---

### 2. Create a GitHub Account
- Sign up at [github.com](https://github.com/).
- Students can unlock free perks with the [GitHub Education Pack](https://education.github.com/pack).
- Optional: Install this [Chrome extension](https://chromewebstore.google.com/detail/le-git-graph-commits-grap/joggkdfebigddmaagckekihhfncdobff) to visualize commit history.
- Connect with your **mentor** and **teammates** on GitHub for collaboration.

---

### 3. Configure Your Tools
Set up Git and VS Code to recognize you and link to GitHub:

- **Identify yourself (one-time setup in Terminal):**
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "youremail@example.com"
  ```

- **Sign in to GitHub from VS Code:**
  - Click the **Accounts icon** (bottom-left corner).
  - Log in with your GitHub account for smooth integration.

## 📄 Command Walkthrough

```bash
# Configure your identity (one-time setup)
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"

# Clone a repository
git clone <repo-url>

# Check current branch
git branch

# Create a new branch and switch to it
git checkout -b <branch-name>

# Stage changes for commit
git add <file-name>

# Commit changes with a message
git commit -m "Add hello.txt file"

# Push changes to GitHub
git push origin <branch-name>

# Pull latest changes from remote
git pull origin main
```

>✅ Tip: VS Code Source Control UI does most of these steps visually, but it’s good to know the commands behind the buttons.

## 🧪 Exercises

1. 🏁 Starter Exercise: **GitHub → Local**  
  - Fork the ITC curriculum repository and clone it to your local machine.  
  - Add a `hello.txt` file, commit, and push using VS Code Source Control.  

2. 🔧 Practice Exercise: **Branching**  
  - Create a new branch (`git checkout -b <branch-name>`).  
  - Edit `hello.txt` and push your branch to GitHub.  
  - Switch back to `main` and confirm changes disappear.  

3. ⚔️ Challenge Exercise: **Merge Conflict**  
  - Pull updates from the ITC curriculum repo.  
  - Resolve a merge conflict in `hello.txt` using VS Code’s conflict editor.  

4. 🧠 Team Exercise: **Create a Project Repo**  
  - Leader creates a GitHub repo and shares it with the team.  
  - Each member adds their name to the README via their own branch.  
  - Open pull requests and merge them into `main`.  

## 📝 Bonus Resources

* [Official Git Documentation](https://git-scm.com/doc)  
* [GitHub Docs](https://docs.github.com/)  
* [Git Handbook (GitHub Guide)](https://guides.github.com/introduction/git-handbook/)  
* [Learn Git Branching (Interactive Game)](https://learngitbranching.js.org/)  
* [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)  

## 🙌 Contributors
| Name         | Role                | GitHub                                             |
| ------------ | ------------------- | -------------------------------------------------- |
| Winston Faustin    | Speaker & Activity Creator 1 | [@winstonfaustin](https://github.com/winstonfaustin)       |
| Michelle Chan    | Speaker & Activity Creator 2 | [@Chelle007](https://github.com/Chelle007)       |
| Desmond | Reviewer 1         | [@desraymondz](https://github.com/desraymondz)       |
| Yan Mei | Reviewer 2         | [@yxnmei](https://github.com/yxnmei)       |
