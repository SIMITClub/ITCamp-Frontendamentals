# 🧪 Exercise 3: Merge Conflict

## Goal
Sync the latest code from the ITC curriculum repository and practice resolving a merge conflict.  
> You can use **VS Code Source Control** or **Git commands in the terminal**, whichever you prefer.

## Steps

0. We have made a change to `hello.txt` in our main branch in ITC GitHub:

   ```bash
   Welcome to ITCamp!!!
   ```

1. Sync your fork on GitHub by going to your repository and clicking **Fetch upstream** → **Fetch and merge**.

2. Pull the latest changes to your local repository:

   ```bash
   git pull origin main
   ```

   > This will create a **merge conflict** since you have made changes to `hello.txt` in Exercise 1.

3. Resolve the merge conflict. Edit the file so that both changes are kept:

   ```bash
   Welcome to ITCamp!!!
   Hello, my name is <your name>
   ```

4. Stage and commit the resolved file:

   ```bash
   git add hello.txt
   git commit -m "Resolve merge conflict in hello.txt"
   ```

5. Push the updated branch to your GitHub fork:

   ```bash
   git push origin main
   ```

✅ You’ve successfully resolved a merge conflict!  

6. **⚔️ Optional Challenge:** If you finish early, try merging your feature branch into main and combine all changes so that `hello.txt` looks like:

   ```bash
   Welcome to ITCamp!!!
   Hello, my name is <your name>
   I love <something you love>
   ```
