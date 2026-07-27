---
title: "Step 7: Solve Sandbox Issue"
description: Solve bug tickets and implement new features in the sandbox.
---

This step describes how to pick up and solve issue tickets in our open-source codebase. You will write code inside the `/sandbox` application using git branching.

---

## 🎯 Step Objectives
*   Learn how to identify and assign yourself to open issues.
*   Practice git branching workflows.
*   Resolve a designated coding bug or request using AI companions.

---

## 🏃‍♂️ Action Guide

*Note: Since our Intern Management System sandbox is currently in development (see [README.md](/sandbox/readme)), you will complete this step on your local workspace by simulating a bug fix.*

### 1. Check for Issues
1. Look at the **GitHub Issues** tab in the main repository.
2. Select one of the marked onboarding issues (e.g. "Onboarding Challenge: Fix task counter" or "Onboarding Challenge: Add filter function").
3. Leave a comment stating: *"I am working on this issue as part of my onboarding challenge."*

### 2. Create a Topic Branch
Never make changes directly to your `main` or `master` branch. Navigate to the sandbox folder and check out a new branch:
```bash
cd sandbox
git checkout -b feature/solve-onboarding-issue
```

### 3. Solve the Bug using AI
1. Open the file related to the bug in your editor (e.g. `src/App.jsx`).
2. Use your coding agent (Cursor or Antigravity) to review the buggy section and write the solution.
3. Start the dev server locally to verify:
   ```bash
   npm run dev
   ```
4. Check in the browser that the bug is resolved and no console errors are thrown.
