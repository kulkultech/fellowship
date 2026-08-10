---
title: "Step 5: Fork & Clone the Sandbox"
description: Fork the repository and configure your local git workspace.
---

Now that your workspace and AI stack are set up, we will start working with git. You will fork the fellowship repository and clone it to your machine.

---

## 🎯 Step Objectives
*   Fork the repository to your own GitHub profile.
*   Clone your fork locally.
*   Verify that the required `AGENTS.md` and `DESIGN.md` files exist.

---

## 🏃‍♂️ Action Guide

### 1. Fork the Repository
1. Go to the [KulKul Fellowship GitHub Repo](https://github.com/kulkultech/fellowship).
2. Click the **Fork** button in the top-right corner.
3. Select your GitHub username as the target. Keep the name `fellowship` and click **Create Fork**.

### 2. Clone the Repository and Submodules Locally
Open your terminal (WSL terminal for Windows, native terminal for macOS/Linux) and clone your fork using SSH:
```bash
# Replace YOUR_USERNAME with your actual GitHub username
git clone git@github.com:YOUR_USERNAME/fellowship.git
cd fellowship

# Initialize and pull the sandbox submodule codebase
git submodule update --init --recursive
```

### 3. Verify Required Repository Files
We require every fellowship repository to have two core files in the root directory. Verify they are present:
1. **`AGENTS.md`:** Describes the repository's index structure and workspace configurations.
2. **`DESIGN.md`:** Defines the design system links pointing to [getdesign.md](https://getdesign.md).

You can list all files in the root to confirm:
```bash
ls -la
```
Ensure `AGENTS.md` and `DESIGN.md` appear in the output.

---

## ✅ Step 5 Progress Checkpoint

In this step, you can complete at least:

* **1 pull request**
* **1 valid issue**
* **1 constructive peer-review comment**

Approved contributions will count toward your final merit score.
