# Git and GitHub: Commands and Concepts

---

## **Setting Up**
```bash
# Initialize a repository
git init

# Clone a GitHub repository
git clone <url>
```

---

## **Branch Management**
```bash
# List branches
git branch

# Create a new branch
git branch <name>

# Switch to a branch
git checkout <branch>

# Merge a branch
git merge <branch>
```

---

## **Working with Changes**
```bash
# Stage changes
git add <file>

# Commit staged changes
git commit -m "message"

# Push commits to GitHub
git push

# Pull changes from GitHub
git pull
```

---

# **Deep Dive into Git Branching, Commands, Rebase, and Merge**

## **1. Branching in Git**

### **Branching Overview**
Branching is one of Git's most powerful features, enabling multiple developers to work on different aspects of a project without interfering with each other.

### **Key Concepts**
- **Branch**: A branch is a pointer to a specific commit in the repository. By default, every Git repository starts with a single branch, usually called `main` (formerly `master`).
- **HEAD**: Represents the current branch and commit you're working on.

### **Branching Strategy**
- **Feature Branching**: Create a new branch for each feature.
- **Release Branching**: Maintain stable branches for releases (e.g., `release/v1.0`).
- **Hotfix Branching**: Quickly address urgent issues by creating hotfix branches.

### **Workflow**
```bash
# Create a new branch
git branch <branch-name>

# Switch to the branch
git checkout <branch-name>
```

### **Branching Best Practices**
- Use descriptive branch names, e.g., `feature/add-login`, `bugfix/fix-typo`.
- Keep branches short-lived to avoid divergence.
- Regularly sync with the main branch to minimize conflicts.

---

## **2. Git Commands: Essentials to Advanced**

### **Basic Commands**
```bash
# Initialize a Git repository
git init

# Clone a remote repository
git clone <url>

# Check the status of your working directory
git status

# Stage changes for commit
git add <file>

# Commit changes
git commit -m "message"

# Push commits to a remote repository
git push

# Fetch and integrate changes from a remote repository
git pull
```

### **Branch Commands**
```bash
# List all branches
git branch

# Create a new branch
git branch <name>

# Switch to an existing branch
git checkout <branch>

# Create and switch to a new branch
git checkout -b <name>

# Delete a branch (safe, checks if merged)
git branch -d <name>

# Force delete a branch
git branch -D <name>
```

---

## **3. Git Rebase**

### **What is Rebase?**
Rebasing is a process of moving or combining a sequence of commits to a new base commit. It rewrites the commit history and creates a linear project history.

### **Rebase vs. Merge**
- **Rebase**: Rewrites commit history for a clean, linear history.
- **Merge**: Combines branches without altering commit history.

### **Rebase Workflow**
```bash
# Switch to your branch
git checkout <feature-branch>

# Rebase onto the base branch
git rebase <base-branch>
```

### **Rebase Example**
Suppose `main` and `feature` diverged:
```plaintext
main:      A --- B --- C
feature:            D --- E
```
After `git rebase main`:
```plaintext
main:      A --- B --- C
feature:                D' --- E'
```

### **Interactive Rebase**
Allows you to edit, reorder, squash, or drop commits.
```bash
# Start an interactive rebase
git rebase -i <commit>
```
- `pick`: Use the commit as-is.
- `squash`: Combine multiple commits.
- `edit`: Amend commit messages or changes.

### **Avoid Rebase in These Situations**
- On shared/public branches (to avoid rewriting history).
- If you’re unsure of your changes (rebasing can be destructive).

---

## **4. Git Merge**

### **What is Merge?**
Merging combines changes from one branch into another without altering commit history. It creates a **merge commit**.

### **Merge Workflow**
```bash
# Switch to the branch to merge into
git checkout <target-branch>

# Merge the source branch
git merge <source-branch>
```

### **Fast-Forward Merge**
Occurs when there’s no divergence between branches. Git simply moves the pointer forward.
```plaintext
Before: main: A --- B
          feature:       C --- D
After:   main: A --- B --- C --- D
```

### **Three-Way Merge**
Occurs when there’s divergence. Git creates a new **merge commit**.
```plaintext
main:     A --- B --- C
feature:         \--- D --- E
Result:   A --- B --- C --- F (merge commit)
                   \--- D --- E
```

### **Handling Merge Conflicts**
When Git cannot automatically resolve changes:
```bash
# Attempt to merge
git merge <branch>

# Git stops, prompting you to resolve conflicts
# Edit files to resolve conflicts

git add <file>             # Mark conflicts as resolved
git commit                 # Finalize the merge
```

### **Abort a Merge**
If a merge goes wrong, you can abort:
```bash
git merge --abort
```

---

## **5. Rebase vs. Merge: When to Use**
- **Rebase**: Use when you want a clean, linear history (e.g., for feature branches).
- **Merge**: Use when preserving a detailed commit history is important.

### **Golden Rules**
- Never rebase a public branch.
- Use merge for collaborative branches (e.g., `main`).

---

## **6. Resolving Common Git Issues**

### **Undoing a Commit**
- Undo the last commit but keep changes:
  ```bash
  git reset --soft HEAD~1
  ```

- Undo the last commit and discard changes:
  ```bash
  git reset --hard HEAD~1
  ```

### **Fixing the Last Commit**
```bash
git commit --amend -m "New message"
```

### **Cherry-Picking Commits**
Apply a specific commit to another branch.
```bash
git cherry-pick <commit-hash>
```

### **Stashing Changes**
Save uncommitted changes temporarily.
```bash
# Stash changes
git stash

# Reapply changes
git stash apply

# Delete the stash
git stash drop
```

---

## **7. Visualizing History**
Git offers several commands to understand the commit history:

### **Graph View**
```bash
git log --oneline --graph --decorate --all
```

### **Visualize with GUIs**
Tools like GitKraken, Sourcetree, or built-in IDE features.

---

## **8. Advanced Branching Strategies**

### **GitFlow Workflow**
- `main`: Production-ready branch.
- `develop`: Integration branch for development.
- `feature/`: Individual features.
- `release/`: Preparing for a release.
- `hotfix/`: Urgent fixes.

### **Trunk-Based Development**
- Keep the `main` branch stable and frequently integrate changes.
- Avoid long-lived branches.

### **Feature Toggles**
- Use toggles to enable/disable features without branching.

---

## **Best Practices**
- Commit frequently with meaningful messages.
- Keep branch history concise (rebase before merging).
- Use `git pull --rebase` to avoid merge commits during sync.
- Automate conflict resolution scripts for repetitive conflicts.
- Regularly prune old or unused branches:
  ```bash
  git branch -d <branch>
  ```

