# 🧪 Exercise 3: Merge Conflict

## Goal
Practice resolving a merge conflict.  
> You can use **VS Code Source Control** or **Git commands in the terminal**, whichever you prefer.

## Steps

1. Change your `hello.txt` content on **main branch** into just this line:

   ```bash
   Welcome to ITCamp!!!
   ```

2. Stage and commit the file:

   ```bash
   git add .
   git commit -m "Changed hello.txt"
   ```
   
3. Merge your new branch you made on Exercise 2 into your current(main) branch:

   ```bash
   git merge <your-branch-name> 
   ```

   > This will create a **merge conflict**, since both your main branch and your new branch edited the same file `hello.txt` differently.
   
4. Resolve the merge conflict. Edit the file so that both changes are kept:

   ```bash
   Welcome to ITCamp!!!
   Hello, my name is <your name>
   I love <something you love>
   ```

5. Stage and commit the resolved file:

   ```bash
   git add .
   git commit -m "Resolve merge conflict in hello.txt"
   ```

6. Push the updated branch to your GitHub fork:

   ```bash
   git push origin main
   ```

✅ You’ve successfully resolved a merge conflict!
