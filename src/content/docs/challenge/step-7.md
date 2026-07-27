---
title: "Step 7: Solve Sandbox Issue"
description: Solve bug tickets and implement new features in the sandbox.
---

This step describes how to pick up and solve issue tickets in our open-source codebase. You will write code inside the `/sandbox` application using git branching.

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

### 2. Identify the Seeded Bugs
Open the database repository code in your editor (e.g. `sandbox/netlify/functions/lib/InMemoryFellowRepository.js` and `NetlifyBlobFellowRepository.js`) to find the bug areas:

1.  **Bug 1: Progress Checklist Toggling (Step-3)**
    *   **Symptom:** Toggling "Step 3" in the checklist flips the state incorrectly (saves the opposite boolean).
    *   **Target Files:** `InMemoryFellowRepository.js` and `NetlifyBlobFellowRepository.js`.
    *   **Fix:** Locate the `step-3` override inside `updateProgress` and remove the erroneous inversion logic.
2.  **Bug 2: Form Fields Validation (Email optional / placeholder format)**
    *   **Symptom:** Registration accepts empty/malformed emails and invalid usernames with spaces.
    *   **Target Files:** `InMemoryFellowRepository.js` and `NetlifyBlobFellowRepository.js`.
    *   **Fix:** In `saveApplication`, add validation. Throw an error if a provided email lacks `@` or username contains spaces. If email is omitted/blank, default it to the placeholder format `github_username@placeholder.kulkul.tech`.
3.  **Bug 3: Certificate Generation TypeError**
    *   **Symptom:** Graduating a fellow crashes the backend due to a split array indexing crash when parsing the domain.
    *   **Target Files:** `InMemoryFellowRepository.js` and `NetlifyBlobFellowRepository.js`.
    *   **Fix:** In `graduateFellow`, correct the index of the `split('@')` result when fetching the domain portion.

### 3. Start the Dev Server
Start the Netlify development server to run both the Vite React frontend and the functions backend locally:
```bash
uv run npx netlify dev
```
Open `http://localhost:8888` in your browser and test the registration and progress checklists. Verify that registration falls back to the placeholder email if left blank.
