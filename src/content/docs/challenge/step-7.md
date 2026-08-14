---
title: "Step 7: Solve Sandbox Issue"
description: Solve bug tickets and implement new features in the sandbox.
---

This step describes how to pick up and solve issue tickets in our open-source codebase. You will write code inside the `/sandbox` application using git branching.

---

## 📹 Video Walkthrough

<iframe
  style="width: 100%; aspect-ratio: 16 / 9; border-radius: 8px; border: 0; margin: 1rem 0 2rem 0;"
  src="https://www.youtube.com/embed/8BGaTvq6JW8"
  title="Step 7: Solve Sandbox Issue Walkthrough"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

---

## 🎯 Step Objectives
*   Learn how to identify and assign yourself to open issues.
*   Practice git branching workflows in a submodule context.
*   Resolve three designated coding bugs in the backend repository using AI companions.

---

## 🏃‍♂️ Action Guide

Our Fellowship Management System contains three intentional bugs seeded in the backend code. You will need to resolve all of them.

### 1. Check out a Topic Branch
Never make changes directly to the `main` or `master` branch. Navigate to the `sandbox` directory and create a new feature branch:
```bash
cd sandbox
git checkout -b feature/solve-onboarding-issue
```

### 2. Locate and Resolve the Seeded Bugs
We have introduced three intentional bugs in the backend code. They are located inside:
*   `sandbox/netlify/functions/lib/InMemoryFellowRepository.js`
*   `sandbox/netlify/functions/lib/NetlifyBlobFellowRepository.js`

To discover the details of these bugs and verify your solutions, run the test suite as described in **Step 8: Prompt Automated Testing**. The failing tests will guide you to where the errors are located in the repository logic. Use your AI companion to analyze and resolve each failure.

### 3. Start the Dev Server
Start the Netlify development server to run both the Vite React frontend and the functions backend locally:
```bash
uv run npx netlify dev
```
Open `http://localhost:8888` in your browser and test the registration and progress checklists. Verify that registration falls back to the placeholder email if left blank.


**Post a message in the Discord channel saying you have completed the installation. Don't forget to attach a screenshot of your completed setup.**

---

## ✅ Step 7 Progress Checkpoint

In this step, you can complete at least:

* **2 pull request**
* **2 valid issue**
* **2 constructive peer-review comment**

Approved contributions will count toward your final merit score.
