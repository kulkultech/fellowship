---
title: "Step 8: Prompt Automated Testing"
description: Prompt your AI companion to generate unit tests.
---

Testing is an essential safeguard in software development. In this step, you will learn to prompt your AI assistant to generate tests for your code changes.

---

## 🎯 Step Objectives
*   Execute the existing Vitest suite on your local sandbox directory.
*   Identify test failures corresponding to the three seeded bugs.
*   Verify your fixes using automated testing until all tests pass green.

---

## 🏃‍♂️ Action Guide

Rather than building a test suite from scratch, we have already provided a backend repository test suite using **Vitest** to verify the business logic.

### 1. Run the Test Suite
Ensure you are in the `/sandbox` directory, and run the Vitest test runner locally:
```bash
uv run npm run test
```
*Note: If you have not solved the bugs yet, you will see 3 failures and 2 successes out of 5 tests.*

### 2. Verify Your Fixes
As you solve the bugs in `InMemoryFellowRepository.js` (and `NetlifyBlobFellowRepository.js`), run the tests again to check your progress.

Vitest will execute:
*   Seeded candidate list retrieval.
*   New candidate application registration.
*   Checklist toggling logic (asserting that toggling `step-3` successfully saves the checked state).
*   Form field validation (asserting that malformed emails and invalid usernames throw validation errors).
*   Certificate graduation generation (asserting that certificates are issued without crashes).

### 3. Prompt Your AI Companion
If you encounter test failures or syntax issues during your fixes, prompt your AI companion (Cursor, Claude Code, or Antigravity) with the exact error log:
```text
Context: I am working on the Fellowship Management System sandbox.
Test File: netlify/functions/lib/FellowRepository.test.js
Failing Output:
[PASTE TEST FAILURE OUTPUT HERE]

Task: Explain why this test is failing and provide the exact code correction for InMemoryFellowRepository.js.
```

Ensure that `uv run npm run test` outputs a completely green **`5 passed (5)`** checkmark before proceeding!

**Post a message in the Discord channel saying you have completed the installation. Don't forget to attach a screenshot of your completed setup.**

---
## ✅ Step 8 Progress Checkpoint

In this step, you can complete at least:

* **1 pull request**
* **1 valid issue**
* **1 constructive peer-review comment**

Approved contributions will count toward your final merit score.
