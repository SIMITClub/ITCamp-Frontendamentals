# 🧪 Exercise 4: Create Team GitHub Repo

## Goal
Create a GitHub repository for your internal project and collaborate as a team.

## Steps

1. **Leader:** Create a new GitHub repository using your own account.

2. **Leader:** Create a `README.md` file in the repository:
   - Use the `README.md` template from the [ITCurriculum lesson 2 starter folder](https://github.com/SIMITClub/ITCamp-Frontendamentals/blob/main/curriculum/phase1-foundations/02-github/starter/README.md).
   - Fill in the project name and team name, but leave the team member table empty.
   - Add, commit, and push it to the GitHub repository.

3. **Leader:** Invite team members and mentor as collaborators.

4. **All Members:** Clone the project to your local machine:

   ```bash
   git clone <project-repo-url>
   ```

5. **All Members:** Create a new branch with your name:

   ```bash
   git checkout -b <your-name>
   ```

6. **All Members:** Add your full name to the team member table in the `README.md`. Then add, commit, and push your branch:

   ```bash
   git add README.md
   git commit -m "Add <your-name> to team member table"
   git push origin <your-name>
   ```

7. **All Members:** Create a Pull Request from your branch → `main` on GitHub.  

8. **Leader:** Merge the Pull Requests. Resolve any merge conflicts if they happen.  

9. **Leader:** Submit the repository link to your mentor.  
   - The mentor will review to ensure everything is set up correctly.  
