---
title: "Step 3: Configure Coding Agents Securely"
description: Download Cursor/Antigravity IDE and configure privacy modes.
---

To maximize your development efficiency, we use AI-first development editors. However, to respect code privacy and commercial guidelines, you must configure them securely before writing code.

---

## 🎯 Step Objectives
*   Install Cursor or Antigravity IDE.
*   Enable **Privacy Mode** (Disable Telemetry) to ensure your code is not stored or trained on.

---

## 🏃‍♂️ Action Guide

See the full [AI Tools Setup Guidelines](/docs/ai-tools-guidelines) for detailed configuration paths.

### 1. Install Your IDE
We suggest installing one of the following coding editors:
*   **Cursor:** Download and install from [cursor.sh](https://cursor.sh).
*   **Antigravity IDE:** Install using your organization's provided installation script.

### 2. Configure Telemetry & Privacy (Crucial)
You must ensure that the AI agents you use do not leak your code back to their servers.

*   **In Cursor:**
    1. Click the **Gear icon** in the top-right corner to open **Cursor Settings**.
    2. Under **General**, scroll to the **Privacy Mode** section.
    3. Toggle **Privacy Mode** to **ON**. (In privacy mode, none of your code is saved or trained on).
    4. Open the regular VS Code Settings (`Cmd+,` or `Ctrl+,`), search for `telemetry`, and disable all telemetry collection options.
*   **In Antigravity:**
    1. Locate your configuration settings file (`.antigravityrc`).
    2. Set `telemetry.enabled = false` and `agent.sharing = false`.

### 3. Verify Vim Basics (Optional but Helpful)
For technical fellows, practicing basic terminal navigation inside Vim is highly encouraged. 
*   Vim has two basic modes: **Insert Mode** (for editing text) and **Normal Mode** (for navigate and run shortcuts).
*   You can practice interactively at [OpenVim](https://www.openvim.com).

**Post a message in the Discord channel saying you have completed the installation. Don't forget to attach a screenshot of your completed setup.**
